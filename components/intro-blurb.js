import {KRAKEN_TECH_URL, BRITECORE_URL} from '../lib/constants.js'

export default function IntroBlurb() {
    return (
        <section>
            <div className="md:grid md:grid-cols-1 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
                <div className="mb-4 md:mb-0 text-xl sm:text-3xl blurb">
                    <div>
                        I'm a senior software engineer at <a href={KRAKEN_TECH_URL}>Octopus Energy (the Kraken Technologies arm)</a>, building and leading a team in developing our global energy technology platform, Kraken, for the Italian energy market. (I'm hiring!!)
			Prior to this, I was building a business rule management system at <a href={BRITECORE_URL}>BriteCore</a>.
                        I have a BSc in Computer Science from the University of British Columbia.
                        I'm from Vancouver, Canada, but now I live in Caprino Veronese, Italy.
                    </div>
                    <br/>
                    <div>Wanna chat about my work? I'd love to hear from you, please drop me a line via any of my online profiles.</div>
                </div>
            </div>
        </section>
    )
}
