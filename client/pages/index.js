import React, { useState } from "react";

import { BiPlusMedical, BiExit, BiTrash, BiUpload } from "react-icons/bi";
import { ImCross } from "react-icons/im";

import * as S from "../styles/Home";

function Home() {
  const [darken, setDarken] = useState(false);
  const [products, setProducts] = useState([]);
  const [imageUploaded, setImageUploaded] = useState({
    status: false,
    image: BiUpload,
  });

  const addProduct = () => {
    setDarken(true);
  };

  const handleAddProdduct = async (event) => {
    const file = event.target.files[0];

    const data = new FormData();

    data.append("file", file, file.name);

    const toRead = URL.createObjectURL(file);

    setImageUploaded({ status: true, image: toRead });
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
          <S.CardImage src="/assets/19063.jpg" />

          <S.CardTitle>Batcard Do Batman Bombado testando 1234</S.CardTitle>

          <S.CardPrice>R$29,99</S.CardPrice>
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
      {darken && (
        <S.ContentOverlay>
          <S.Overlay darken={darken} />
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
            <label
              htmlFor="productImage"
              style={{
                width: "150px",
                height: "150px",
                border: "1px dashed black",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <S.ImageUploader
                id="productImage"
                name="productImage"
                type="file"
                accept="image/*"
                formEncType="multipart/form-data"
                onChange={handleAddProdduct}
              />
              {!imageUploaded.status ? (
                <BiUpload
                  style={{
                    width: "100px",
                    height: "100px",
                    color: "#282a36",
                  }}
                />
              ) : (
                <img
                  src={imageUploaded.image}
                  style={{
                    width: "140px",
                    height: "140px",
                  }}
                />
              )}
            </label>

            <S.InputContainer>
              <S.PopupInput placeholder="Nome" />
              <S.PopupInput placeholder="Preço" />
            </S.InputContainer>

            <S.ConfirmButtonPopup>
              <S.TextButton>CONFIRMAR</S.TextButton>
            </S.ConfirmButtonPopup>
          </S.PopupContainer>
        </S.ContentOverlay>
      )}
    </S.Container>
  );
}

export default Home;
