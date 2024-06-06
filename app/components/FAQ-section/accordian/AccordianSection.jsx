"use client";

import React from "react";
import { Accordion } from "@mantine/core";
import styles from "./AccordianSection.module.css";

import { leftAccordion } from "@/constants/constants";
import { rightAccordion } from "@/constants/constants";

const AccordianSection = () => {
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
          <Accordion.Control className={controlBoxClass}>
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
    <div className="my-10 justify-center xl:mx-16 lg:mx-[3rem] gap-1 xl:gap-[5rem] lg:gap-[2rem] grid grid-cols-1 sm:grid-cols-2">
      <div>
        <Accordion
          className={styles.accordionWrap}
          variant="separated"
          radius="xs"
        >
          {renderAccordionItems(leftColumnItems, styles.controlBox1)}
        </Accordion>
      </div>
      <div>
        <Accordion
          className={styles.accordionWrap2}
          variant="separated"
          radius="xs"
        >
          {renderAccordionItems(rightColumnItems, styles.controlBox2)}
        </Accordion>
      </div>
    </div>
  );
};

export default AccordianSection;
