import React from 'react';
import useFetch from '../../../hooks/useFetch';
import { useTranslation } from 'react-i18next';



const ProductList = () => {
    const {data,loading,error} = useFetch("https://fakestoreapi.com/products");

    const {t} =useTranslation();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
  return (
     <div className="max-w-7xl mx-auto my-4 px-4 py-8">
            <h2 className="text-2xl text-center font-semibold text-primary mb-6">{t('products')}</h2>
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
                                <p className="text-gray-600 text-sm mt-2">{product.description.split(' ').slice(0, 5).join(' ')}</p>
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