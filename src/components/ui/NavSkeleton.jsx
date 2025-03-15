import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const NavSkeleton = () => {
  return (
    <>
      <div className="nav__right">
        <div className="nav__links">
          <div className="skeleton nav__link--skeleton"></div>
          <div className="skeleton nav__link__btn--skeleton"></div>
        </div>
      </div>
    </>
  );
};

export default NavSkeleton;
