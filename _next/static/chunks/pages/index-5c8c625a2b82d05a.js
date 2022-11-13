(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(674)}])},5691:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(5893);function i(e){var n=e.children;return(0,r.jsx)("div",{className:"container mx-auto w-11/12 sm:w-5/6 intro-card jumbotron",children:n})}},4683:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(5893),i=t(1664),a=t(1163);function o(){var e=(0,a.useRouter)();return(0,r.jsxs)("section",{className:"flex-col md:flex-row items-center",children:[(0,r.jsx)("h1",{className:"text-7xl md:text-8xl tracking-tighter leading-tight hello",children:"hi, i'm patience!"}),(0,r.jsxs)("div",{className:"links md:text-3xl flex flex-wrap",children:[(0,r.jsx)(i.default,{as:"/",href:"/",children:(0,r.jsx)("a",{className:"/"==e.pathname?"pr-8 active":"pr-8",children:"home"})}),(0,r.jsx)(i.default,{as:"/writing",href:"/writing",children:(0,r.jsx)("a",{className:e.pathname.startsWith("/writing")?"pr-8 active":"pr-8",children:"writing"})}),(0,r.jsx)(i.default,{href:"http://github.com/patiences",children:(0,r.jsx)("a",{className:"pr-8",children:"github"})}),(0,r.jsx)(i.default,{href:"http://linkedin.com/in/patienceshyu",children:(0,r.jsx)("a",{className:"pr-8",children:"linkedin"})}),(0,r.jsx)(i.default,{href:"https://medium.com/@patiences",children:(0,r.jsx)("a",{className:"pr-8",children:"medium"})}),(0,r.jsx)(i.default,{href:"https://twitter.com/patienceshyu",children:(0,r.jsx)("a",{className:"pr-8",children:"twitter"})}),(0,r.jsx)(i.default,{href:"mailto:patienceshyu@gmail.com",children:(0,r.jsx)("a",{className:"pr-8",children:"email"})})]})]})}},4615:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(5893),i=t(9008),a=t(2979);function o(){return(0,r.jsxs)(i.default,{children:[(0,r.jsx)("link",{rel:"icon",type:"image/png",href:"/favicons/woman-technologist.png"}),(0,r.jsx)("link",{rel:"manifest",href:"/favicons/site.webmanifest"}),(0,r.jsx)("link",{rel:"mask-icon",href:"/favicons/safari-pinned-tab.svg",color:"#000000"}),(0,r.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@100;400&display=swap",rel:"stylesheet"}),(0,r.jsx)("link",{rel:"stylesheet",href:"//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/styles/default.min.css"}),(0,r.jsx)("script",{src:"//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/highlight.min.js"}),(0,r.jsx)("script",{children:"hljs.highlightAll();"}),(0,r.jsx)("link",{rel:"shortcut icon",href:"/favicons/woman-technologist.png"}),(0,r.jsx)("meta",{name:"msapplication-TileColor",content:"#000000"}),(0,r.jsx)("meta",{name:"msapplication-config",content:"/favicons/browserconfig.xml"}),(0,r.jsx)("meta",{name:"theme-color",content:"#000"}),(0,r.jsx)("link",{rel:"alternate",type:"application/rss+xml",href:"/feed.xml"}),(0,r.jsx)("meta",{name:"description",content:"Patience Shyu, Senior Software Engineer"}),(0,r.jsx)("meta",{property:"og:image",content:a.U3}),(0,r.jsx)("script",{"data-goatcounter":"https://patiences.goatcounter.com/count",async:!0,src:"//gc.zgo.at/count.js"})]})}function s(e){e.preview;var n=e.children;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o,{}),(0,r.jsx)("div",{className:"intro",children:(0,r.jsx)("main",{children:n})})]})}},2979:function(e,n,t){"use strict";t.d(n,{U3:function(){return r},G4:function(){return i},q$:function(){return a}});var r="https://og-image.vercel.app/Next.js%20Blog%20Starter%20Example.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg",i="https://kraken.tech/",a="https://www.britecore.com/"},8418:function(e,n,t){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,i=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(t.push(o.value),!n||t.length!==n);r=!0);}catch(c){i=!0,a=c}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=void 0;var i,a=(i=t(7294))&&i.__esModule?i:{default:i},o=t(6273),s=t(387),c=t(7190);var l={};function u(e,n,t,r){if(e&&o.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(i?"%"+i:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,i=s.useRouter(),f=a.default.useMemo((function(){var n=r(o.resolveHref(i,e.href,!0),2),t=n[0],a=n[1];return{href:t,as:e.as?o.resolveHref(i,e.as):a||t}}),[i,e.href,e.as]),d=f.href,h=f.as,m=e.children,p=e.replace,x=e.shallow,g=e.scroll,v=e.locale;"string"===typeof m&&(m=a.default.createElement("a",null,m));var j=(n=a.default.Children.only(m))&&"object"===typeof n&&n.ref,y=r(c.useIntersection({rootMargin:"200px"}),2),b=y[0],w=y[1],k=a.default.useCallback((function(e){b(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,b]);a.default.useEffect((function(){var e=w&&t&&o.isLocalURL(d),n="undefined"!==typeof v?v:i&&i.locale,r=l[d+"%"+h+(n?"%"+n:"")];e&&!r&&u(i,d,h,{locale:n})}),[h,d,w,v,t,i]);var N={ref:k,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,i,a,s,c){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(t))&&(e.preventDefault(),null==s&&r.indexOf("#")>=0&&(s=!1),n[i?"replace":"push"](t,r,{shallow:a,locale:c,scroll:s}))}(e,i,d,h,p,x,g,v)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),o.isLocalURL(d)&&u(i,d,h,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var E="undefined"!==typeof v?v:i&&i.locale,I=i&&i.isLocaleDomain&&o.getDomainLocale(h,E,i&&i.locales,i&&i.domainLocales);N.href=I||o.addBasePath(o.addLocale(h,E,i&&i.defaultLocale))}return a.default.cloneElement(n,N)};n.default=f},7190:function(e,n,t){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,i=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(t.push(o.value),!n||t.length!==n);r=!0);}catch(c){i=!0,a=c}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!o,c=i.useRef(),l=r(i.useState(!1),2),u=l[0],f=l[1],d=i.useCallback((function(e){c.current&&(c.current(),c.current=void 0),t||u||e&&e.tagName&&(c.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=s.get(n);if(t)return t;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return s.set(n,t={id:n,observer:i,elements:r}),t}(t),i=r.id,a=r.observer,o=r.elements;return o.set(e,n),a.observe(e),function(){o.delete(e),a.unobserve(e),0===o.size&&(a.disconnect(),s.delete(i))}}(e,(function(e){return e&&f(e)}),{rootMargin:n}))}),[t,n,u]);return i.useEffect((function(){if(!o&&!u){var e=a.requestIdleCallback((function(){return f(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[u]),[d,u]};var i=t(7294),a=t(9311),o="undefined"!==typeof IntersectionObserver;var s=new Map},674:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});var r=t(5893),i=t(5691),a=t(2979);function o(){return(0,r.jsx)("section",{children:(0,r.jsx)("div",{className:"md:grid md:grid-cols-1 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28",children:(0,r.jsxs)("div",{className:"mb-4 md:mb-0 text-xl sm:text-3xl blurb",children:[(0,r.jsxs)("div",{children:["I'm a senior software engineer at ",(0,r.jsx)("a",{href:a.G4,children:"Octopus Energy (the Kraken Technologies arm)"}),", building and leading a team in developing our global energy technology platform, Kraken, for the Italian energy market. (I'm hiring!!) Prior to this, I was building a business rule management system at ",(0,r.jsx)("a",{href:a.q$,children:"BriteCore"}),". I have a BSc in Computer Science from the University of British Columbia. I'm from Vancouver, Canada, but now I live in Caprino Veronese, Italy."]}),(0,r.jsx)("br",{}),(0,r.jsx)("div",{children:"Wanna chat about my work? I'd love to hear from you, please drop me a line via any of my online profiles."})]})})})}var s=t(4683),c=t(4615),l=t(9008);function u(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(c.Z,{children:[(0,r.jsx)(l.default,{children:(0,r.jsx)("title",{children:"Patience Shyu, Software Engineer"})}),(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(s.Z,{}),(0,r.jsx)(o,{})]})]})})}},9008:function(e,n,t){e.exports=t(5443)},1664:function(e,n,t){e.exports=t(8418)},1163:function(e,n,t){e.exports=t(387)}},function(e){e.O(0,[774,888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);