// hoodies
import hoodiefront from '../../../assets/mockups/hoodie/front/hoodiefront.jpg'
import hoodieback from '../../../assets/mockups/hoodie/back/hoodieback.jpg'

// tshirts
import tshirtfront from '../../../assets/mockups/tshirt/front/fronttshirt.jpg'
import tshirtback from '../../../assets/mockups/tshirt/back/backtshirt.jpg'



export const PRODUCTS = [
    {
      id: 'tshirt',
      name: 'T-Shirt',
      basePrice: 19.99,
      mockups: {
        front: {
        white: tshirtfront,
        },
        back: {
          white: tshirtback,
        }
      },
      thumbnail: tshirtfront,
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
          white: hoodiefront,
        },
        back: {
          white: hoodieback,
        }
      },
      thumbnail: hoodiefront,
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