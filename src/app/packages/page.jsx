import React, { Suspense } from "react";
import "./style.css";
import AllPackagePage from "../../components/allPackagePage/AllPackagePage";

function Page() {
  return (
    <div className="AllPackagecontainer">
      <Suspense fallback={<div>Loading...</div>}>
        <AllPackagePage />
      </Suspense>
    </div>
  );
}

export default Page;
