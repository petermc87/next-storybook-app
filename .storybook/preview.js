// import '../src/app/global.css';

//Define default image sizing.
const BREAKPOINTS_INT = {
  xs: 375,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};

// Map over the viewports and return the different widths and heights.
// These are storybook breakpoints and naming key naming convention.
// The eventual output are the different image sizing options to be viewed in Storybook.
// NOTE: Static Method: Object.fromEntriew() transforms key values into an Object.
// NOTE: Static Method: Object.entries() returns an array of an objects key/values.
const customViewport = Object.fromEntries(
  Object.entries(BREAKPOINTS_INT).map(([key, val], idx) => {
    console.log(val);
    // Return an array of the key name and the object to be returned.
    return [
      key,
      {
        name: key,
        styles: {
          width: `${val}px`,
          height: `${(idx + 5) * 10}vh`,
        },
      },
    ];
  })
);

// // This will allow storybook to handle NextJS <iamge> Component.
// const OriginalNextImage = NextImage.default;

// // NOTE: Static Method: Object.defineProperty() is used to add or remove something from an Object.

// // Configuration of the original Component. We need to change configurable to true.
// Object.defineProperty(NextImage, 'default', {
//   configurable: true,
//   value: (props) => <OriginalNextImage {...props} unoptimized />,
// });

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: { viewport: customViewport },
};
