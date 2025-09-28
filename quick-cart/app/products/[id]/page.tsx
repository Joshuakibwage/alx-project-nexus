import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import client from '../../lib/apolloClient';
import { GET_PRODUCT_DETAILS } from '../../lib/queries';
import Image from "next/image";


const ProductDetail = () => {

  const [product, setProduct] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {

    if (id) {

      const fetchProduct = async () => {
        try {
          const { data } = await client.query({
            query: GET_PRODUCT_DETAILS,
            variables: { id },
          });
          setProduct(data.product);
        } catch (error) {
          console.error('Error fetching product details:', error);
        }

      };

      fetchProduct();
    }
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-2xl font-semibold">{product.name}</h1>

        <Image 
            src={product.image} 
            alt={product.name} 
            className="w-full h-96 object-cover my-4" 
        />
        
        <p className="text-lg">{product.description}</p>
        <p className="text-xl font-bold">${product.price}</p>
    </div>
  );
};

export default ProductDetail;
