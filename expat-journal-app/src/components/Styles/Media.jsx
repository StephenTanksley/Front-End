import {css} from 'styled-components';
const sizes = {
   desktop: 1000,
   tablet: 700,
   phone: 400
 };
 
 // Iterate through the sizes and create a media template
 const Media = Object.keys(sizes).reduce((acc, label) => {
   acc[label] = (...args) => css`
     @media (max-width: ${sizes[label] / 16}em) {
       ${css(...args)}
     }
   `;
 
   return acc;
 }, {});
 
 export default Media;