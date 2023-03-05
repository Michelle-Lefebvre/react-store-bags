import { Stack } from "@mui/material";
// import { products } from "../../data/productsMockData";
import {
  Product,
  ProductActionButton,
  ProductActionWrapper,
  ProductAddToCart,
  ProductFavButton,
  ProductImage,
} from "../../styles/productsStyles";
import ProductMeta from "./ProductMeta";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import { useState } from "react";
import useDialogModal from "../../hooks/useDialogModal";
import ProductDetail from "../productDetail/ProductDetail";

export default function SingleProductDesktop({ product, matches }) {
  const [showOptions, setShowOptions] = useState(false);

  const [ProductDetailDialog, showProductDetailDialog, closeProductDialog] =
    useDialogModal(ProductDetail);

  const handleMouseEnter = () => {
    setShowOptions(true);
  };
  const handleMouseLeave = () => {
    setShowOptions(false);
  };

  return (
    <>
      <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ProductImage src={product.image} />
        <ProductFavButton isfav={0}>
          <FavoriteIcon />
        </ProductFavButton>

        {showOptions && (
          <ProductAddToCart show={showOptions} variant="contained">
            Add to Cart
          </ProductAddToCart>
        )}

        <ProductActionWrapper show={showOptions}>
          <Stack direction="column">
            <ProductActionButton>
              <ShareIcon color="primary" />
            </ProductActionButton>
            <ProductActionButton onClick={() => showProductDetailDialog()}>
              <FitScreenIcon color="primary" />
            </ProductActionButton>
          </Stack>
        </ProductActionWrapper>
      </Product>
      <ProductMeta product={product} matches={matches} />
      <ProductDetailDialog product={product} />
    </>
  );
}
