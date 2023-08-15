// Importing the prop interface from the base template.
import { IBaseTemplate } from './BaseTemplate';

// The props data to be added to the BaseTemplate file.
const base: IBaseTemplate = {
  sampleTextProps: 'Hello World',
};

// You could also add aternative data.
const alt: IBaseTemplate = {
  sampleTextProps: 'Hello Alt World!',
};

// Export it for use.
export const mockBaseTemplateProps = {
  base,
  alt,
};
