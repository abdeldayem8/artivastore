import whiteFront from '../../../assets/mockups/hoodie/front/white.jpg'
import blackFront from'../../../assets/mockups/hoodie/front/white.jpg'
import navyFront from'../../../assets/mockups/hoodie/front/white.jpg'
import redFront from'../../../assets/mockups/hoodie/front/white.jpg'
import grayFront from'../../../assets/mockups/hoodie/front/white.jpg'
import greenFront from'../../../assets/mockups/hoodie/front/white.jpg'

import whiteBack from '../../../assets/mockups/hoodie/back/back.jpg'
import blackBack from'../../../assets/mockups/hoodie/back/back.jpg'
import navyBack from'../../../assets/mockups/hoodie/back/back.jpg'
import redBAck from'../../../assets/mockups/hoodie/back/back.jpg'
import grayBAck from'../../../assets/mockups/hoodie/back/back.jpg'
import greenBack from'../../../assets/mockups/hoodie/back/back.jpg'


export const PRODUCTS = [
    {
      id: 'tshirt',
      name: 'T-Shirt',
      basePrice: 19.99,
      mockups: {
        front: {
          white: whiteFront,
        black: blackFront,
        navy: navyFront,
        red: redFront,
        gray: grayFront,
        green: greenFront,
        },
        back: {
          white: whiteBack,
          black: blackBack,
          navy: navyBack,
          red: redBAck,
          gray: grayBAck,
          green: greenBack,
        }
      },
      thumbnail: whiteFront,
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
          white: whiteFront,
        black: blackFront,
        navy: navyFront,
        red: redFront,
        gray: grayFront,
        green: greenFront,
        },
        back: {
          white: whiteBack,
          black: blackBack,
          navy: navyBack,
          red: redBAck,
          gray: grayBAck,
          green: greenBack,
        }
      },
      thumbnail: whiteFront,
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
    { id: 'green', name: 'Green', hex: '#008000' }
  ];