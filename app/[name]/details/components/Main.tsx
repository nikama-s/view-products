"use client";
import { Box, Button, Typography } from "@mui/material";
import { Product } from "@/components/types/typeProduct";
import ProductInfo from "./ProductInfo";
import Reviews from "./AllReviews";
import { useRouter } from "next/navigation";

export default function DetailsPage({ product }: { product: Product }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/`);
  };

  return (
    <Box
      sx={{
        maxWidth: "1000px",
        margin: "20px auto",
        padding: 2,
        backgroundColor: "#f1f1f1",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Box
        component="img"
        src={product.images[0]}
        alt={product.title}
        sx={{
          maxWidth: { xs: "300px", md: "500px" },
          maxHeight: { xs: "300px", md: "500px" },
          objectFit: "contain",
          display: "block",
          margin: "0 auto",
        }}
      />

      <Typography
        variant="h4"
        component="h1"
        sx={{
          textAlign: "center",
          mb: 1,
          fontSize: { xs: "1.5rem", md: "2rem" },
        }}
      >
        {product.title}
      </Typography>

      <Typography
        variant="subtitle1"
        sx={{ textAlign: "center", fontStyle: "italic", mb: 2 }}
      >
        Category: {product.category}
      </Typography>

      <Typography
        variant="body1"
        sx={{ fontStyle: "italic", lineHeight: 1.5, mb: 3 }}
      >
        {product.description}
      </Typography>

      <ProductInfo product={product} />

      <Reviews product={product} />

      <Button
        variant="contained"
        onClick={handleClick}
        sx={{
          mt: 3,
          backgroundColor: "#eaab96",
          color: "#fff",
          fontSize: "1rem",
          fontWeight: "bold",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          "&:hover": {
            backgroundColor: "#c78379",
          },
        }}
      >
        Go Back
      </Button>
    </Box>
  );
}
