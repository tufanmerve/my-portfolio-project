import React from 'react';
import Banner from '../components/Banner';
import { Skills } from "../components/Skills"
import Project from '../components/Project';



export const LandingPage = () => {
    return (
        <div>
            <div><Banner /></div>
            <div><Skills /></div>
            <div><Project /></div>
        </div>
        )
}

