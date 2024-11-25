export const PRODUCTS = [
    {
      id: 'tshirt',
      name: 'T-Shirt',
      basePrice: 19.99,
      mockups: {
        front: {
          white: '/mockups/tshirt/front/white.png',
          black: '/mockups/tshirt/front/black.png',
          navy: '/mockups/tshirt/front/navy.png',
          red: '/mockups/tshirt/front/red.png',
          gray: '/mockups/tshirt/front/gray.png',
          green: '/mockups/tshirt/front/green.png'
        },
        back: {
          white: '/mockups/tshirt/back/white.png',
          black: '/mockups/tshirt/back/black.png',
          navy: '/mockups/tshirt/back/navy.png',
          red: '/mockups/tshirt/back/red.png',
          gray: '/mockups/tshirt/back/gray.png',
          green: '/mockups/tshirt/back/green.png'
        }
      },
      thumbnail: '/mockups/tshirt/front/white.png',
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
          white: '/mockups/hoodie/front/white.png',
          black: '/mockups/hoodie/front/black.png',
          navy: '/mockups/hoodie/front/navy.png',
          red: '/mockups/hoodie/front/red.png',
          gray: '/mockups/hoodie/front/gray.png',
          green: '/mockups/hoodie/front/green.png'
        },
        back: {
          white: '/mockups/hoodie/back/white.png',
          black: '/mockups/hoodie/back/black.png',
          navy: '/mockups/hoodie/back/navy.png',
          red: '/mockups/hoodie/back/red.png',
          gray: '/mockups/hoodie/back/gray.png',
          green: '/mockups/hoodie/back/green.png'
        }
      },
      thumbnail: '/mockups/hoodie/front/white.png',
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