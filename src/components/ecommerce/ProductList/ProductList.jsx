import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import useFetch from '../../../hooks/useFetch';



const ProductList = () => {
    const {data,loading,error} = useFetch("https://fakestoreapi.com/products");
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
            { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 1 } },
            { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }
        ]
    };
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
  return (
     <div className="max-w-7xl mx-auto my-4 px-4 py-8">
            <h2 className="text-2xl text-center font-semibold text-primary mb-6">Products</h2>
            <Slider {...settings}>
                {data && data.map((product) => (
                    <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden mx-4 p-4 text-center">
                        <img src={product.image} alt={product.title} className="h-48 w-full object-contain mb-4" />
                        <h3 className="text-lg font-semibold text-gray-800">{product.title.split(' ').slice(0, 4).join(' ')}</h3>
                        <p className="text-gray-600 text-sm mt-2">
                            {product.description.split(' ').slice(0, 4).join(' ')}...
                        </p>
                        <p className="text-blue-600 font-bold text-lg mt-4">${product.price}</p>
                    </div>
                ))}
            </Slider>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-5">
                {data && data.length > 0 ? (
                    data.map((product) => (
                        <div key={product.id} className="bg-white rounded-lg shadow-xl overflow-hidden my-8">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="h-48 w-full object-contain p-4"
                            />
                            <div className="p-4 text-center">
                                <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
                                <p className="text-gray-600 text-sm mt-2">{product.description.split(' ').slice(0, 8).join(' ')}</p>
                                <p className="text-blue-600 font-bold text-lg mt-4">{product.price} EGP</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">No products available</p>
                )}
            </div>
        </div>
    );
};

export default ProductList;