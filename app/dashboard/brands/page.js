import BrandsPageWrapper from '@/components/wrappers/BrandsPageWrapper'
import React from 'react'

export const metadata = {
  title: "مدیریت برندها | فروشگاه اینترنتی گالری ساعت افشاری",
};

const page = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <BrandsPageWrapper />
    </React.Suspense>
  );
}

export default page