'use client'
import { useRouter } from 'next/navigation';
import Layout from '@/components/layout/Layout';
import DetailTourPageMiddle from "./DetailTourPageMiddle";
import './DetailsTourPackage.css';
// import { useRouter } from "next/router";
export default function DetailsTourPackage({packageId}) {

  // const { destination, id } = router.query;

  return (
    <div className="detailsTourPage-page">
      <Layout bodyComponent={<DetailTourPageMiddle  packageId={packageId} />} />
    </div>
  );
}
