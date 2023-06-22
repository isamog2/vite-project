import "../ComponentsStyling/App.scss";
import * as Accordion from '@radix-ui/react-accordion';
import {AccordionContent, AccordionTrigger} from "@radix-ui/react-accordion";
import Content1 from './ExperienceContent/Content1.jsx';
import Content2 from "./ExperienceContent/Content2.jsx";
import Content3 from './ExperienceContent/Content3.jsx';

function returnContent1() {
    return (
    <Content1 />
    )
}

function returnContent2() {
    return (
        <Content2 />
    )
}

function returnContent3() {
    return (
        <Content3 />
    )
}
const CvComponent = () => (
    <div className="cv-component">
        <Accordion.Root className="AccordionRoot" type="single" defaultValue="item-1" collapsible>
            <Accordion.Item className="AccordionItem" value="item-1">
                <AccordionTrigger>Dharma Media</AccordionTrigger>
                <AccordionContent> {returnContent1()} </AccordionContent>
            </Accordion.Item>

            <Accordion.Item className="AccordionItem" value="item-2">
                <AccordionTrigger>Zero Hunger Institute</AccordionTrigger>
                <AccordionContent> {returnContent2()} </AccordionContent>
            </Accordion.Item>

            <Accordion.Item className="AccordionItem" value="item-3">
                <AccordionTrigger>TicketSwap International B.V</AccordionTrigger>
                <Accordion.Content className="AccordionContent">
                    <div className="AccordionContentText">
                        {returnContent3()}
                    </div>
                </Accordion.Content>
            </Accordion.Item>
        </Accordion.Root>
    </div>
);

export default CvComponent;