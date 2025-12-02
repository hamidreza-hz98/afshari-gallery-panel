import CreateOrUpdateBrandPageWrapper from "@/components/wrappers/CreateOrUpdateBrandPageWrapper";
import React from "react";

export const metadata = {
  title: "ایجاد / ویرایش برند | فروشگاه اینترنتی گالری ساعت افشاری",
  robots: {
    index: false,
    follow: false,
  },
};

const page = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <CreateOrUpdateBrandPageWrapper />
    </React.Suspense>
  );
};

export default page;
