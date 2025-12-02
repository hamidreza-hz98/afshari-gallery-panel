import ProductsPageWrapper from "@/components/wrappers/ProductsPageWrapper";
import React from "react";

export const metadata = {
  title: "مدیریت محصولات | فروشگاه اینترنتی گالری ساعت افشاری",
  robots: {
    index: false,
    follow: false,
  },
};

const page = () => {
  return <React.Suspense fallback={<div>Loading...</div>}>
    <ProductsPageWrapper />
  </React.Suspense>;
};

export default page;
