import React from 'react';
import Banner from '../components/Banner';
import { Skills } from "../components/Skills"
import Project from '../components/Project';
import Footer from '../components/Footer';
import { useMediaQuery } from 'react-responsive'
import ContactForm from '../ContactForm/ContactForm';


export const LandingPage = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1000px)' });
    return (
        <div>
            <div><Banner /></div>
            <div><Skills /></div>
            <div><Project /></div>
            <div><ContactForm/></div>
            <div>{isTabletOrMobile &&<Footer/>}</div>
        </div>
        )
}

