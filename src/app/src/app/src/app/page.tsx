import Link from "next/link";

export default function Home() {
  const products = [
    {
      name: "فرشات",
      desc: "صممت لتجعل نومك أكثر راحة",
      image: "/images/products/mattress.jpg"
    },
    {
      name: "قعدات عربية",
      desc: "تجمع بين الراحة والأصالة",
      image: "/images/products/cushions.jpg"
    },
    {
      name: "مخدات",
      desc: "تمنحك راحة لا مثيل لها",
      image: "/images/products/pillows.jpg"
    },
    {
      name: "اسفنج ضغط + اسفنج دانلوب",
      desc: "راحة ما الها مثيل",
      image: "/images/products/foam-pressure.jpg"
    },
    {
      name: "اسفنج ميموري + اسفنج هايبر",
      desc: "لأن راحتك تستحق الأفضل",
      image: "/images/products/foam-memory.jpg"
    },
    {
      name: "اسفنج بوندد + اسفنج دانلوب",
      desc: "قوة البوندد وراحة دانلوب",
      image: "/images/products/foam-bonded.jpg"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              عالم الإبداع:{" "}
              <span className="text-orange-600">راحة فائقة، جودة لا تقبل المنافسة</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              متخصصون في الإسفنج والجلسات الحصرية الحديثة، تصميم لكل متطلبات الراحة.
              نقدم منتجات فاخرة تجمع بين الأصالة والجودة العالية.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:00962799873002"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors"
              >
                اتصل بنا الآن
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              منتجاتنا المميزة
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              نقدم مجموعة واسعة من منتجات الإسفنج عالية الجودة التي تلبي كافة الاحتياجات
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600">
                    {product.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            جاهز لتجربة أفضل أنواع الإسفنج؟
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            تواصل معنا اليوم للحصول على استشارة مجانية
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:00962799873002"
              className="bg-white text-orange-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors"
            >
              009627 9987 3002
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
