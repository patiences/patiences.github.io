import {BRITECORE_URL, TASKTOP_URL, GSOC_BLOG_POST_URL, GSOC_URL, RECIPE_URL} from '../lib/constants.js'

export default function IntroBlurb() {
    return (
        <section>
            <div className="md:grid md:grid-cols-1 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
                <div className="mb-4 md:mb-0 text-xl sm:text-3xl blurb">
                    <div>
                        I'm a senior software engineer at <a href={BRITECORE_URL}>BriteCore</a> building a business rule management system.
                        Prior to this, I was helping build an integration platform for connecting enterprise applications at <a href={TASKTOP_URL}>Tasktop</a>.
                        Some of my favourite projects include a data deletion plugin that I built at Microsoft in 2017, 
                        and doing <a target="_blank" href={GSOC_BLOG_POST_URL}>compiler optimization on VOC</a> as part of the <a href={GSOC_URL}>Google Summer of Code</a> program.
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
