import axios from "axios";
import { Layout } from "components/Layout";
import { ProductCard } from "components/ProductCard";

function ProductsPage({ products = [] }) {
  const renderProducts = () => {
    if (products.length === 0) return <h1>No hay datos registrados.</h1>;
    return products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ));
  };

  return (
    <Layout>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-4">
        {renderProducts()}
      </div>
    </Layout>
  );
}

export default ProductsPage;

export const getServerSideProps = async () => {
  const { data: products } = await axios.get(
    import axios from "axios";
import { useState } from "react";
import { Layout } from "components/Layout";
import { ProductCard } from "components/ProductCard";

function ProductsPage({ products = [] }) {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredProducts = products.filter((product) => {
    return product.price.toString().includes(searchTerm);
  });

  const renderProducts = () => {
    if (filteredProducts.length === 0) {
      return <h1>No hay datos agregados.</h1>;
    }
    return filteredProducts.map((product) => (
      <ProductCard key={product.id} product={product} />
    ));
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Layout>
      <div className="mb-8">
        <input
          type="text"
          placeholder="No. Medidor"
          value={searchTerm}
          onChange={handleSearchTermChange}
          className="block w-full px-4 py-2 mb-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-4">
        {renderProducts()}
      </div>
    </Layout>
  );
}

export default ProductsPage;

export const getServerSideProps = async () => {
  const { data: products } = await axios.get(
    "https://mapgl.vercel.app/api/products"
  );

  return {
    props: {
      products,
    },
  };
};/api/products"
  );

  return {
    props: {
      products,
    },
  };
};
