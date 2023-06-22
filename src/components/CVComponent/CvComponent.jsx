import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import classNames from 'classnames';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import '../ComponentsStyling/App.scss';
import '../ComponentsStyling/RadixStyles.scss'
import Content1 from '../CVComponent/ExperienceContent/Content1.jsx'
import Content2 from '../CVComponent/ExperienceContent/Content2.jsx'
import Content3 from '../CVComponent/ExperienceContent/Content3.jsx'

const AccordionDemo = () => (
    <Accordion.Root className="AccordionRoot" type="single" defaultValue="item-1" collapsible>
        <Accordion.Item className="AccordionItem" value="item-1">
            <AccordionTrigger>Dharma Media</AccordionTrigger>
            <AccordionContent> <Content1 /> </AccordionContent>
        </Accordion.Item>

        <Accordion.Item className="AccordionItem" value="item-2">
            <AccordionTrigger>Zero Hunger Institute</AccordionTrigger>
            <AccordionContent> <Content2 /> </AccordionContent>
        </Accordion.Item>

        <Accordion.Item className="AccordionItem" value="item-3">
            <AccordionTrigger>TicketSwap International B.V</AccordionTrigger>
            <Accordion.Content className="AccordionContent">
                <div className="AccordionContentText"> <Content3 /> </div>
            </Accordion.Content>
        </Accordion.Item>
    </Accordion.Root>
);

const AccordionTrigger = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="AccordionHeader">
        <Accordion.Trigger
            className={classNames('AccordionTrigger', className)}
            {...props}
            ref={forwardedRef}
        >
            {children}
            <ChevronDownIcon className="AccordionChevron" aria-hidden />
        </Accordion.Trigger>
    </Accordion.Header>
));

const AccordionContent = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
        className={classNames('AccordionContent', className)}
        {...props}
        ref={forwardedRef}
    >
        <div className="AccordionContentText">{children}</div>
    </Accordion.Content>
));

export default AccordionDemo;