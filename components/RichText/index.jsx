import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const richTextOptions = {
  renderMark: {
    [MARKS.BOLD]: (text) => <b>{text}</b>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
  },
  renderText: (text) => text.replace("!", "?"),
};

export const RichText = ({ raw }) => {
  return <div>{documentToReactComponents(raw, richTextOptions)}</div>;
};
