import { Link, Typography } from "@mui/material";
import React from "react";

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://avocodo.com/">
        Avocodo
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}