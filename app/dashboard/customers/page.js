import CustomersPageWrapper from "@/components/wrappers/CustomersPageWrapper";
import React from "react";

export const metadata = {
  title: "لیست مشتریان | فروشگاه اینترنتی گالری ساعت افشاری",
  robots: {
    index: false,
    follow: false,
  },
};

const page = () => {
  return <CustomersPageWrapper />;
};

export default page;
