// Importing the prop interface from the base template.
import { Props } from './BaseTemplate';

// The props data to be added to the BaseTemplate file.
const base: Props = {
  sampleTextProps: 'Hello World',
};

// You could also add aternative data.
const alt: Props = {
  sampleTextProps: 'Hello Alt World!',
};

// Export it for use.
export const mockBaseTemplateProps = {
  base,
  alt,
};
