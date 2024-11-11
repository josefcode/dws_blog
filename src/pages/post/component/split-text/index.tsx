import { StyledParagraph } from './index.styled';

type SplitTextProps = {
  content: string;
};

export const SplitText = ({ content }: SplitTextProps) => {
  const paragraphs = content.split('\n\n');
  return (
    <>
      {paragraphs.map((paragraph, index) => (
        <StyledParagraph key={index}>{paragraph}</StyledParagraph>
      ))}
    </>
  );
};
