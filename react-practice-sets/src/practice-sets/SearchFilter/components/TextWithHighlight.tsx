import "./styles.css";

export const TextWithHighlight = ({
  text,
  highlight,
}: {
  text: string;
  highlight: string;
}) => {
  const lowerText = text.toLowerCase();
  const lowerHighlight = highlight.toLowerCase();
  if (
    !lowerText ||
    !lowerHighlight ||
    lowerText.includes(lowerHighlight) == false
  ) {
    return "";
  }

  const index = lowerText.indexOf(lowerHighlight);

  return (
    <div>
      {text.slice(0, index)}
      <strong className="search-filter-output-bold">
        {text.slice(index, index + highlight.length)}
      </strong>
      {text.slice(index + highlight.length, text.length)}
    </div>
  );
};
