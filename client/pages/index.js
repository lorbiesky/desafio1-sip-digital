import React, { useState } from "react";

import { BiPlusMedical, BiExit, BiTrash } from "react-icons/bi";
import { ImCross } from "react-icons/im";

import * as S from "../styles/Home";

function Home() {
  const [products, setProducts] = useState([]);
  const [darken, setDarken] = useState(false);

  const addProduct = () => {
    setDarken(true);
  };
  return (
    <S.Container>
      <S.SideBarContainer>
        <S.ProfileBackground />

        <BiExit
          style={{
            color: "#f8f8f8",
            width: "50px",
            height: "50px",
          }}
        />
      </S.SideBarContainer>

      <S.ContentBarContainer>
        {/* {products &&
          products.map((item, index) => {
            return <S.ProductContainer key={index} />;
          })} */}
        <S.ProductContainer>
          <S.DeleteProduct>
            <BiTrash
              style={{
                color: "#ff5555",
                width: "50px",
                height: "50px",
              }}
            />
          </S.DeleteProduct>
        </S.ProductContainer>
      </S.ContentBarContainer>
      <S.ProductAddContainer darken={darken} onClick={() => addProduct()}>
        <BiPlusMedical
          style={{
            color: "black",
            width: "50px",
            height: "50px",
            opacity: "0.2",
          }}
        />
      </S.ProductAddContainer>

      <S.Overlay darken={darken}>
        <S.PopupContainer>
          <S.ExitPopup onClick={() => setDarken(false)}>
            <ImCross
              style={{
                color: "#282a36",
                width: "20px",
                height: "20px",
              }}
            />
          </S.ExitPopup>
        </S.PopupContainer>
      </S.Overlay>
    </S.Container>
  );
}

export default Home;
