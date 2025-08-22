---
title: 'TIL: Postgres can halt write activity'
excerpt: … if it runs out of transaction identifiers.
date: '2025-05-21T00:00:00+02:00'
tags: [postgres, databases]
---

Postgres databases can receive so much write activity that they just stop accepting new commands.

```
ERROR: database is not accepting commands to avoid wraparound data loss in database “postgres”

```

## Why does this happen?

### Transaction IDs (XID)

When a transaction first writes to a database (i.e. with an `INSERT`, `UPDATE` or `DELETE` statement), the row version that is created is assigned a unique transaction identifier (also called XID). This XID is a 32 bit integer, which means that there is a limit to the number of possible values (~4 billion total, ranging from -2 billion-ish to +2 billion-ish).

### Why are XIDs needed?

To allow concurrent access to data (e.g. reads not blocking writes), Postgres uses Multiversion Concurrency Control (MVCC) to ensure that each SQL statement sees the correct version of the data.

As soon as a transaction starts writing to the database, an XID is assigned to that transaction from the global counter, and each row that is inserted also has the XID saved in it. That way, only transactions with a “later” XID will be able to see this row once this transaction has committed.

### XID Wraparound

Since there there is a limit to the number of available XIDs, once we hit the maximum integer value, we need to wrap around to the minimum integer value. This is implemented in Postgres using modulo 2^32 arithmetic. So as long as there are always “future” XIDs available for incoming transactions, everything’s fine.

### Vacuuming

The mechanism that enables reuse of XIDs is called vacuuming. It’s a SQL command (`VACUUM`) that performs garbage collection, which marks rows as `frozen` once the transaction that inserted that row has been completed, so that row version’s XID can now be returned to be reused.

Postgres provides an autovacuum option, which automates the execution of `VACUUM` commands. However, `VACUUM` creates a significant amount of I/O traffic, which can negatively impact performance of other active sessions on the database. This is where configuration of the autovacuum to run less frequently can be done to minimize that impact.

### The Problem

However, this is where our original problem can occur: you can run out of XIDs if you don’t vacuum enough on a database that receives enough write activity. This can be exacerbated by very long running transactions, or sessions holding on to locks for a very long time as the backlog of transactions to execute fills up.

Postgres stops accepting write commands once there are < 1 million XIDs left, which leaves the database in a read-only state while the vacuums finish.

### Sources

[Postgres documentation on transactions](https://www.postgresql.org/docs/current/transaction-id.html)
[Postgres documentation on vacuuming](https://www.postgresql.org/docs/current/routine-vacuuming.html#ROUTINE-VACUUMING)
[Incident report from 2015 from Sentry](https://blog.sentry.io/transaction-id-wraparound-in-postgres/)
[Article on Postgres & MVCC from Heroku](https://devcenter.heroku.com/articles/postgresql-concurrency)
