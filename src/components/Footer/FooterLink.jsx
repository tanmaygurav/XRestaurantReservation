import React from "react";
import { Link } from "@mui/material";

const FooterLink = ({ children, href = "#" }) => {
  return (
    <Link href={href} color="grey.400" underline="hover" display="block" mb={1}>
      {children}
    </Link>
  );
};

export default FooterLink;
