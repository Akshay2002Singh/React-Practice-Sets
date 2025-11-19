import "./styles.css";

export const AccordionItem = ({
  title,
  body,
  isOpen,
  toggleAccordionItem,
}: {
  title: string;
  body: string;
  isOpen: boolean;
  toggleAccordionItem: () => void;
}) => {
  return (
    <div className="accordion-item" onClick={toggleAccordionItem}>
      <div>
        <span>{title}</span>
        {isOpen ? <span>&uarr;</span> : <span>&darr;</span>}
      </div>
      {isOpen ? <div>{body}</div> : null}
    </div>
  );
};
