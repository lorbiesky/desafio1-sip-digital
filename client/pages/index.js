import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";

import {
  BiPlusMedical,
  BiExit,
  BiTrash,
  BiUpload,
  BiEdit,
} from "react-icons/bi";
import { ImCross } from "react-icons/im";

import { useProducts } from "../hooks/products";
import { formatPrice } from "../utils/format";

import * as S from "../styles/home";
import { route } from "next/dist/next-server/server/router";

function Home() {
  const {
    imageUrl,
    response,
    uploadImage,
    createCard,
    removeCard,
    updateCard,
    getCards,
  } = useProducts();

  const [nameCard, setNameCard] = useState();
  const [priceCard, setPriceCard] = useState();
  const [darken, setDarken] = useState({ came: "", status: false });
  const [products, setProducts] = useState([]);
  const [currProduct, setCurrProduct] = useState();

  const nameCardRef = useRef();
  const priceCardRef = useRef();
  const router = useRouter();

  const [imageUploaded, setImageUploaded] = useState({
    status: false,
    image: "",
  });

  const handleUpload = async (event) => {
    const file = event.target.files[0];

    const data = new FormData();

    data.append("file", file, file.name);

    const toRead = URL.createObjectURL(file);

    setImageUploaded({ status: true, image: toRead });

    uploadImage(data);
  };

  const handleAddCard = () => {
    const card = {
      image_path: imageUrl,
      name: nameCard,
      price: priceCard,
    };
    createCard(card);
    setDarken({ came: "", status: false });
  };

  const handleRemove = (id) => {
    removeCard(id);
  };

  const handleEdit = () => {
    const card = {
      id: currProduct.id,
      image_path: imageUploaded.image || currProduct.image_path,
      name: nameCard || currProduct.name,
      price: priceCard || currProduct.price,
    };
    updateCard(card);
    setNameCard(null);
    setPriceCard(null);
    setDarken({ came: "", status: false });
  };

  const logout = () => {
    localStorage.removeItem("@desafio/token");
    localStorage.removeItem("@desafio/userId");
    router.push("/auth");
  };

  useEffect(async () => {
    const token = await localStorage.getItem("@desafio/token");

    if (!token) {
      router.push("/auth");
    } else {
      getCards();
    }
  }, []);

  useEffect(() => {
    if (currProduct) {
      setImageUploaded({ status: true, image: currProduct.image_path });
    }
  }, [currProduct]);

  useEffect(() => {
    if (response) {
      setProducts(response);
    }
  }, [response]);

  return (
    <S.Container>
      <S.SideBarContainer>
        <S.ProfileBackground />

        <S.LogoutContainer onClick={logout}>
          <BiExit
            style={{
              color: "#f8f8f8",
              width: "50px",
              height: "50px",
            }}
          />
        </S.LogoutContainer>
      </S.SideBarContainer>

      <S.ContentBarContainer>
        {products &&
          products.map((item, index) => {
            return (
              <S.ProductContainer key={index}>
                <S.CardImage src={item.image_path} />

                <S.CardTitle>{item.name}</S.CardTitle>

                <S.CardPrice>{formatPrice(Number(item.price))}</S.CardPrice>
                <S.DeleteProduct onClick={() => handleRemove(item.id)}>
                  <BiTrash
                    style={{
                      color: "#ff5555",
                      width: "50px",
                      height: "50px",
                    }}
                  />
                </S.DeleteProduct>

                <S.EditProduct
                  onClick={() => {
                    setDarken({ came: "edit", status: true });
                    setCurrProduct(item);
                  }}
                >
                  <BiEdit
                    style={{
                      color: "#50fa7b",
                      width: "50px",
                      height: "50px",
                    }}
                  />
                </S.EditProduct>
              </S.ProductContainer>
            );
          })}
      </S.ContentBarContainer>
      <S.ProductAddContainer
        darken={darken.status}
        onClick={() => {
          setDarken({ came: "plus", status: true });
          setImageUploaded({ status: false, image: "" });
        }}
      >
        <BiPlusMedical
          style={{
            color: "black",
            width: "50px",
            height: "50px",
            opacity: "0.2",
          }}
        />
      </S.ProductAddContainer>
      {darken.status && (
        <S.ContentOverlay>
          <S.Overlay darken={darken.status} />
          <S.PopupContainer>
            <S.ExitPopup onClick={() => setDarken({ came: "", status: false })}>
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
                onChange={handleUpload}
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
              <S.PopupInput
                type="text"
                ref={nameCardRef}
                placeholder="Nome"
                onKeyPress={(event) => {
                  if (event.key === "Enter") {
                    priceCardRef.current.focus();
                  }
                }}
                onChange={(e) => {
                  setNameCard(e.target.value);
                }}
              />
              <S.PopupInput
                type="number"
                step={0.01}
                precision={2}
                ref={priceCardRef}
                placeholder="Preço"
                onChange={(e) => {
                  setPriceCard(e.target.value);
                }}
              />
            </S.InputContainer>

            <S.ConfirmButtonPopup
              onClick={() =>
                darken.came === "plus" ? handleAddCard() : handleEdit()
              }
            >
              <S.TextButton>CONFIRMAR</S.TextButton>
            </S.ConfirmButtonPopup>
          </S.PopupContainer>
        </S.ContentOverlay>
      )}
    </S.Container>
  );
}

export default Home;
