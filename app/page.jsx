import Header from "@/components/global/Header";
import HeroSection from "@/components/Hero";
import FEATURES from "@/Constant/Feacture";

export default async function Home() {

  const user = null; // Replace with actual user authentication logic

  const getProducts = async () => {
    // Mock API call to fetch products
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, name: "Product 1", price: "$100" },
          { id: 2, name: "Product 2", price: "$200" },
        ]);
      }, 1000);
    });
  }

  const products = user ? await getProducts() : [];

  return (
    <main className=" min-h-screen bg-linear-to-br from-orange-50 via-white to-orange-50">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection products={products} FEATURES={FEATURES} user={user} />
    </main>
  );
}
