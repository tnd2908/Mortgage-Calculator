import { type HeadFC, type PageProps } from "gatsby"
import * as React from "react"
import Hero, { HeroModel } from "../components/Hero/Hero"
import useHero from "../hooks/useHero"
import useIntroBlocks from "../hooks/useIntroBlocks"
import './../index.css'
import IntroBlocks from "../components/IntroBlocks/IntroBlocks"
import MortgageCalculator from "../components/MortgageCalculator/MortgageCalculator"
import MortgageCalculatorTextBlock from "../components/MortgageCalculator/MortgageCalculatorTextBlock"
import Footer from "../components/Footer/Footer"

const IndexPage: React.FC<PageProps> = () => {
    const hero: HeroModel = useHero();
    const introBlocks = useIntroBlocks();

    return (
        <>
            <Hero hero={hero} />
            <IntroBlocks introBlocks={introBlocks} />
            <section className='flex flex-wrap'>
                <MortgageCalculator />
                <MortgageCalculatorTextBlock />
            </section>
            <Footer />
        </>
    )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
