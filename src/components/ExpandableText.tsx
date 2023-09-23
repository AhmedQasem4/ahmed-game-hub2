import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
  maxChars: number;
}

const ExpandableText = ({ children, maxChars }: Props) => {
  const [expanded, setExpanded] = useState(false);
  if (!children) return null;
  if (maxChars >= children.length) return <Text>text</Text>;
  const summary = expanded ? children : children.substring(0, maxChars) + "...";
  return (
    <>
      <Text>
        {summary}
        <Button
          marginLeft={2}
          colorScheme="yellow"
          size="xs"
          fontWeight="bold"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show less" : "Show more"}
        </Button>
      </Text>
    </>
  );
};

export default ExpandableText;
