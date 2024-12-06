
// hoodies front
import fronthoodiewhite from '../../../assets/mockups/hoodie/front/fronthoodiewhite.webp';
import fronthoodieblack from '../../../assets/mockups/hoodie/front/fronthoodieblack.png';
import fronthoodieblue from '../../../assets/mockups/hoodie/front/fronthoodieblue.png'
import fronthoodiered from '../../../assets/mockups/hoodie/front/fronthoodiered.png'
import fronthoodiegray from '../../../assets/mockups/hoodie/front/fronthoodiegray.png'



// hoodies back
import backhoodiewhite from '../../../assets/mockups/hoodie/back/backhoodiewhite.webp';
import backhoodieblack from '../../../assets/mockups/hoodie/back/backhoodieblack.png';
import backhoodieblue from '../../../assets/mockups/hoodie/back/backhoodieblue.png'
import backhoodiered from '../../../assets/mockups/hoodie/back/backhoodiered.png'
import backhoodiegray from '../../../assets/mockups/hoodie/back/backhoodiegray.png'



// tshirts front
import fronttshirtblack from '../../../assets/mockups/tshirt/front/fronttshirtblack.jpg';
import fronttshirtblue from '../../../assets/mockups/tshirt/front/fronttshirtblue.webp';
import fronttshirtgray from '../../../assets/mockups/tshirt/front/fronttshirtgray.webp';
import fronttshirtred from '../../../assets/mockups/tshirt/front/fronttshirtred.jpg';
import fronttshirtwhite from '../../../assets/mockups/tshirt/front/fronttshirtwhite.webp';




// tshirts back

import backtshirtblack from '../../../assets/mockups/tshirt/back/backtshirtblack.jpg';
import backtshirtred from '../../../assets/mockups/tshirt/back/backtshirtred.jpg';
import backtshirtblue from '../../../assets/mockups/tshirt/back/backtshirtblue.webp';
import backtshirtwhite from '../../../assets/mockups/tshirt/back/backtshirtwhite.webp';
import backtshirtgray from '../../../assets/mockups/tshirt/back/backtshirtgray.webp';







export const PRODUCTS = [
  {
    id: 'tshirt',
    name: 'T-Shirt',
    basePrice: 19.99,
    mockups: {
      front: {
        white: fronttshirtwhite,
        black: fronttshirtblack,
        gray:fronttshirtgray,
        navy:fronttshirtblue,
        red: fronttshirtred
      },
      back: {
        white: backtshirtwhite,
        black: backtshirtblack,
        gray:backtshirtgray,
        navy:backtshirtblue,
        red: backtshirtred
      }
    },
    thumbnail: fronttshirtwhite,
    printAreas: {
      front: {
        x: 120,
        y: 100,
        width: 200,
        height: 250,
        maxWidth: 300,
        maxHeight: 350
      },
      back: {
        x: 120,
        y: 100,
        width: 200,
        height: 250,
        maxWidth: 300,
        maxHeight: 350
      }
    }
  },
  {
    id: 'hoodie',
    name: 'Hoodie',
    basePrice: 39.99,
    mockups: {
      front: {
        white: fronthoodiewhite,
        black: fronthoodieblack,
        navy: fronthoodieblue,
        red:fronthoodiered,
        gray:fronthoodiegray
      },
      back: {
        white: backhoodiewhite,
        black: backhoodieblack,
        navy: backhoodieblue,
        red:backhoodiered,
        gray:backhoodiegray
      }
    },
    thumbnail: fronthoodiewhite,
    printAreas: {
      front: {
        x: 120,
        y: 120,
        width: 200,
        height: 200,
        maxWidth: 280,
        maxHeight: 300
      },
      back: {
        x: 120,
        y: 100,
        width: 200,
        height: 250,
        maxWidth: 300,
        maxHeight: 350
      }
    }
  }
];

export const COLORS = [
  { id: 'white', name: 'White', hex: '#FFFFFF' },
  { id: 'black', name: 'Black', hex: '#000000' },
  { id: 'navy', name: 'Navy', hex: '#000080' },
  { id: 'red', name: 'Red', hex: '#FF0000' },
  { id: 'gray', name: 'Gray', hex: '#808080' },
];
