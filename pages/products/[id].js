import axios from "axios";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { Layout } from "components/Layout";

function ProductPage({ product }) {
  const router = useRouter();

  const handleDelete = async (id) => {
    try {
      await axios.delete("/api/products/" + id);
      toast.success("Datos eliminado");
      router.push("/");
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  return (
    <Layout>
      <div className="p-6 bg-white dark:bg-gray-800">
        <p>Medidor: {product.price}</p>
        <p>Coordenadas: {product.name}</p>
        <p>Referencia: {product.description}</p>
      </div>

      <div className="mt-7 flex justify-center">
        <button
          className="bg-red-500 hover:bg-red-700 py-2 px-3 rounded"
          onClick={() => handleDelete(product.id)}
        >
          Eliminar
        </button>
        <button
          className="bg-gray-500 hover:bg-gray-800 ml-2 py-2 px-5 rounded"
          onClick={() => router.push("/products/edit/" + product.id)}
        >
          Editar
        </button>
      </div>
    </Layout>
  );
}

export const getServerSideProps = async ({ query }) => {
  const { data: product} = await axios.get(
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
};api/products/" + query.id
  );

  console.log(product)

  return {
    props: {
      product,
    },
  };
};

export default ProductPage;
