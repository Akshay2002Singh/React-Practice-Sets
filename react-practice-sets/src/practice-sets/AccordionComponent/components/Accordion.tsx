import { useEffect, useState } from "react";
import { AccordionItem } from "./AccordionItem";
import type { AccordionData } from "../types";

export const Accordion = ({
  data,
  isMultipleOpenAllowed = false,
}: {
  data: AccordionData[];
  isMultipleOpenAllowed?: boolean;
}) => {
  const [accordionOpenItems, setAccordionOpenItems] = useState<string[]>([]);

  useEffect(() => {
    setAccordionOpenItems([]);
  }, [data]);

  const toggleAccordionItem = (id: string) => {
    if (accordionOpenItems.includes(id)) {
      setAccordionOpenItems((prev: string[]) =>
        prev.filter((ele: string) => ele !== id)
      );
    } else {
      if (isMultipleOpenAllowed) {
        setAccordionOpenItems((prev) => [...prev, id]);
      } else {
        setAccordionOpenItems([id]);
      }
    }
  };

  return (
    <div className="accordion-container">
      {data?.map((ele: AccordionData) => {
        return (
          <AccordionItem
            title={ele.title}
            body={ele.body}
            isOpen={accordionOpenItems.includes(ele.id)}
            toggleAccordionItem={() => toggleAccordionItem(ele.id)}
          />
        );
      })}
    </div>
  );
};
