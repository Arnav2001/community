"use client";

import React, { useState } from "react";
import { Accordion } from "@mantine/core";
import styles from "./AccordianSection.module.css";

import { leftAccordion } from "@/constants/constants";
import { rightAccordion } from "@/constants/constants";

const AccordianSection = () => {
  const [firstAccordion, setFirstAccordion] = useState("");
  const [secondAccordion, setSecondAccordion] = useState("");

  const handleFirstAccordion = (value) => {
    console.log(value);
    console.log("Close second accordion if it's open");
    setFirstAccordion(value);
    setSecondAccordion(""); // Close second accordion
  };

  const handleSecondAccordion = (value) => {
    console.log(value);
    console.log("Close first accordion if it's open");
    setSecondAccordion(value);
    setFirstAccordion(""); // Close first accordion
  };

  // Merge left and right accordion items into one array
  const combinedItems = [...leftAccordion, ...rightAccordion];

  // Split combined items into two arrays for two columns
  const leftColumnItems = combinedItems.slice(0, 4);
  const rightColumnItems = combinedItems.slice(4, 8);

  const renderAccordionItems = (items, controlBoxClass) => {
    return items.map((item, index) => (
      <div className="sm:mb-4" key={index}>
        <Accordion.Item
          className={styles.accordionBox}
          key={item.title}
          value={item.title}
        >
          <Accordion.Control className={`${controlBoxClass} ${styles.accordionIcon} ${styles.accordionTitle}`}>
            {item.title}
          </Accordion.Control>
          <Accordion.Panel
            className={styles.accordionPanel}
            classNames={{ content: styles.accordionContent }}
          >
            {item.description}
          </Accordion.Panel>
        </Accordion.Item>
      </div>
    ));
  };

  return (
    <div className="my-10 lg:my-[72px] justify-center xl:mx-16 lg:mx-[3rem] gap-1 xl:gap-[5rem] lg:gap-[2rem] grid grid-cols-1 sm:grid-cols-2 ">
      <div>
        <Accordion
          className={styles.accordionWrap}
          variant="separated"
          radius="xs"
          value={secondAccordion}
          onChange={handleSecondAccordion}
        >
          {renderAccordionItems(leftColumnItems, styles.controlBox1)}
        </Accordion>
      </div>
      <div>
        <Accordion
          className={styles.accordionWrap2}
          variant="separated"
          radius="xs"
          value={firstAccordion}
          onChange={handleFirstAccordion}
        >
          {renderAccordionItems(rightColumnItems, styles.controlBox2)}
        </Accordion>
      </div>
    </div>
  );
};

export default AccordianSection;
