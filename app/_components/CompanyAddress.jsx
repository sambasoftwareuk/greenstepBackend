// components/common/CompanyAddress.jsx
import React from "react";
import Link from "next/link";

const CompanyAddress = ({ className = "" }) => {
  return (
    <address className={`not-italic  ${className}`}>
      <Link
        href="https://maps.google.com/?q=Alemdag Mah. Saray Cad. 111. Sk. No:1-3 Daire:10 Çekmeköy/ISTANBUL"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        Alemdag Mah. Saray Cad. 111. Sk. No:1-3 Daire:10 Çekmeköy/ISTANBUL
      </Link>
      <Link href="tel:+902163046868" className="hover:underline">
        +90 216 304 68 68
      </Link>
      <Link href="mailto:info@ctpmuhendislik.com" className="hover:underline">
        info@ctpmuhendislik.com
      </Link>
    </address>
  );
};

export default CompanyAddress;
