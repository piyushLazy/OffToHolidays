"use client";
import "./DetailsTourPackagesLayout.css";
import NavigationTabs from "./NavigationTabs";
import PriceCard_CustomizePackageButton from "./PriceCard_CustomizePackageButton";
import CardImageSlider from "../cardImageSlider/CardImageSlider";
import ImageNavigationTab from "./ImageNavigationTab";
import image from "../data/image/Hotel.avif";

const Layout = ({ packages }) => {
  const images = [
    { id: 1, src: image, alt: "Image 1" },
    { id: 2, src: image, alt: "Image 2" },
    { id: 3, src: image, alt: "Image 3" },
    { id: 4, src: image, alt: "Image 4" },
    { id: 5, src: image, alt: "Image 5" },
    { id: 6, src: image, alt: "Image 6" },
  ];

  return (
    <div className="detailsTourlayout">
      <div className="detailsTourlayout-topcontainer-desktop">
        <ImageNavigationTab images={images} />
      </div>

      <div className="detailsTourlayout-topcontainer-mobile">
        <CardImageSlider />
      </div>
      <p className="detailsTourPage-title-mobile">
          {packages?.package?.name
            ? `${packages.package.name} - ${(packages.package.nights + 1)} Days / ${packages.package.nights} Nights`
            : "Loading..."}
      </p>

      <div className="detailsTourcontent-container">
        <div className="detailsTournavigation-container">
          <NavigationTabs packages={packages} />
        </div>
        <PriceCard_CustomizePackageButton />
      </div>
    </div>
  );
};

export default Layout;
