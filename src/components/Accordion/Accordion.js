import React from "react";
import Parser from "html-react-parser";

import "./accordion.scss";

const WhatisCorona = `Coronaviruses are a large family of viruses which may cause illness in animals or humans.<br/> 
    In humans, several coronaviruses are known to cause respiratory infections ranging from the common cold 
    to more severe diseases such as Middle East Respiratory Syndrome (MERS) and Severe Acute Respiratory Syndrome (SARS). 
    The most recently discovered coronavirus causes coronavirus disease COVID-19.`

const WhatisCovid = `COVID-19 is the infectious disease caused by the most recently discovered coronavirus. This new virus
    and disease were unknown before the outbreak began in Wuhan, China, in December 2019.`

const Symptoms = `
    <ul>
        <li>
            The most common symptoms of COVID-19 are fever, tiredness, and dry cough.<br/><br/>
        </li>
        <li>
            Some patients may have aches and pains, nasal congestion, runny nose, 
            sore throat or diarrhea. <br/><br/>
        </li>
        </li>
    </ul>
    These symptoms are usually mild and begin gradually. <br/>
    Some people become infected but don’t develop any symptoms and don't feel unwell. 
    Most people (about 80%) recover from the disease without needing special treatment. 
    Around 1 out of every 6 people who gets COVID-19 becomes seriously ill and develops difficulty breathing. 
    Older people, and those with underlying medical problems like high blood pressure, 
    heart problems or diabetes, are more likely to develop serious illness.
    People with fever, cough and difficulty breathing should seek medical attention.`

const spread = `People can catch COVID-19 from others who have the virus.
    The disease can spread from person to person through small droplets from 
    the nose or mouth which are spread when a person with COVID-19 coughs or 
    exhales.
    These droplets land on objects and surfaces around the person.
    Other people then catch COVID-19 by touching these objects or surfaces, 
    then touching their eyes, nose or mouth. 
    People can also catch COVID-19 
    if they breathe in droplets from a person with COVID-19 who coughs out 
    or exhales droplets. This is why it is important to stay more than 
    1 meter (3 feet) away from a person who is sick.`

const HowToProtect = `<ol>
        <li>
            Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them 
            with soap and water(Washing your hands with soap and water or using alcohol-based hand 
            rub kills viruses that may be on your hands).<br/><br/>
        </li>
        <li>
            Maintain at least 1 metre (3 feet) distance between yourself and anyone who is coughing 
            or sneezing(When someone coughs or sneezes they spray small liquid droplets from their nose 
            or mouth which may contain virus. If you are too close, you can breathe in the droplets, 
            including the COVID-19 virus if the person coughing has the disease).<br/><br/>
        </li>
        <li>
            Avoid touching eyes, nose and mouth(Hands touch many surfaces and can pick up viruses. 
            Once contaminated, hands can transfer the virus to your eyes, nose or mouth. From there, 
            the virus can enter your body and can make you sick).<br/><br/>
        </li>
        <li>
            Make sure you, and the people around you, follow good respiratory hygiene. 
            This means covering your mouth and nose with your bent elbow or tissue when you cough 
            or sneeze. Then dispose of the used tissue immediately.<br/><br/>
        </li>
        <li>
            Stay home if you feel unwell. If you have a fever, cough and difficulty breathing, 
            seek medical attention and call in advance. Follow the directions of your local health 
            authority.<br/><br/>
        </li>
        <li>
            Keep up to date on the latest COVID-19 hotspots 
            (cities or local areas where COVID-19 is spreading widely).<br/><br/>
        </li> 
        <li>
            If possible, avoid traveling to places  – especially if you are an older person 
            or have diabetes, heart or lung disease(You have a higher chance of catching COVID-19 
            in one of these areas).<br/><br/>
        </li>
    </ol>`

const mostRisk = `
    While we are still learning about how COVID-2019 affects people,
    older persons and persons with pre-existing medical conditions 
    (such as high blood pressure, heart disease, lung disease, cancer or diabetes)  
    appear to develop serious illness more often than others. `

const packageReceive = `
    Yes. The likelihood of an infected person contaminating commercial goods is low 
    and the risk of catching the virus that causes COVID-19 from a package that has 
    been moved, travelled, and exposed to different conditions and temperature is also low.`

const data = [
    {
        title: 'What is Coronavirus?',
        paragraph: WhatisCorona
    },
    {
        title: 'What is COVID-19?',
        paragraph: WhatisCovid
    },
    {
        title: 'What are the symptoms?',
        paragraph: Symptoms
    },
    {
        title: 'How does COVID-19 spread?',
        paragraph: spread
    },
    {
        title: 'How do I protect myself and others?',
        paragraph: HowToProtect
    },
    {
        title: 'Who is at risk of developing severe illness',
        paragraph: mostRisk
    },
    {
        title: 'Is it safe to receive a package from any area where COVID-19 has been reported?',
        paragraph: packageReceive
    }


]

class Accordion extends React.Component {
    render() {
        console.log(data)
        return (
            <div {...{ className: 'wrapper' }}>
                <ul {...{ className: 'accordion-list' }}>
                    {data.map((data, key) => {
                        return (
                            <li {...{ className: 'accordion-list__item', key }}>
                                <AccordionItem {...data} />
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

class AccordionItem extends React.Component {
    state = {
        opened: false
    }

    render() {
        const {
            props: {
                paragraph,
                title
            },
            state: {
                opened
            }
        } = this

        return (
            <div
                {...{
                    className: `accordion-item, ${opened && 'accordion-item--opened'}`,
                    onClick: () => { this.setState({ opened: !opened }) }
                }}
            >
                <div {...{ className: 'accordion-item__line' }}>
                    <h3 {...{ className: 'accordion-item__title' }}>
                        {title}
                    </h3>
                    <span {...{ className: 'accordion-item__icon' }} />
                </div>
                <div {...{ className: 'accordion-item__inner' }}>
                    <div {...{ className: 'accordion-item__content' }}>
                        <p {...{ className: 'accordion-item__paragraph' }}>
                            {Parser(paragraph)}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Accordion;