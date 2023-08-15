import styles from './BaseTemplate.module.css';

// Define props.
export type Props = {
  sampleTextProps: string;
};

// Pass in the props to the BaseTemplate component.
export const BaseTemplate = ({ sampleTextProps }: Props) => {
  return <div className={styles.container}>{sampleTextProps}</div>;
};

// export default BaseTemplate;

// import styles from './BaseTemplate.module.css';

// // Defining the props type interface between the HTML components.
// export interface IBaseTemplate {
//   sampleTextProps: string;
// }

// // Creating a Functional Component via React.FC. Passing in the prop from
// // the interface.
// const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleTextProps }) => {
//   return <div className={styles.container}>{sampleTextProps}</div>;
// };

// export default BaseTemplate;
