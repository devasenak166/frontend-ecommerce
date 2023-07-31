import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import axios from "axios";
const TitlebarImageList = () => {
  // const itemData = [

  //       {
  //         img: "https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  //         title: "Mushrooms",
  //         author: "@silverdalex",
  //         rows: 2,
  //         cols: 2,
  //       },
  //       {
  //         img: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  //         title: "Tomato basil",
  //         author: "@shelleypauls",
  //       },
  //       {
  //         img: "https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  //         title: "Sea star",
  //         author: "@peterlaster",
  //       },
  //       {
  //         img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
  //         title: "Bike",
  //         author: "@southside_customs",
  //         row:2,
  //         cols: 2,
  //       },
  //       {
  //           img: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  //           title: "Tomato basil",
  //           author: "@shelleypauls",
  //         },
  //         {
  //           img: "https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  //           title: "Sea star",
  //           author: "@peterlaster",
  //         },
  // ];
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/products`);
        console.log(res.data.product)
      
          setProducts(res.data.product);
       
      } catch (err) {}
    };
    getProducts();
  }, []);
  const theme = useTheme();
  const getColumns = () => {
    const { xs, sm, md, lg } = theme.breakpoints.values;
    if (window.innerWidth >= lg) return 3;
    if (window.innerWidth >= md) return 2;
    if (window.innerWidth >= sm) return 1.5;
    if (window.innerWidth >= xs) return 1;
    return 1;
  };

  return (
    <Container className="mt-5 mb-5">
      <ImageList variant="quilted" cols={getColumns()} rowHeight={400} gap={8}>
        {products?.map((item) => (
          <ImageListItem key={item.img} sx={{ width: "100%" }}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              style={{ objectFit: "cover", height: "100%" }}
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.categories}
              actionIcon={
                <IconButton
                  sx={{
                    color: "rgba(255, 255, 255, 0.54)",
                  }}
                  aria-label={`info about ${item.title}`}
                >
                  <InfoIcon onClick={(e)=>{e.preventDefault();window.location.href=`/Product/${item._id}`}}/>
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
};

export default TitlebarImageList;
