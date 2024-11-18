"use client";

import { TproductInfo } from "@/app/(shop)/[id]/[[...slug]]/page";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import styled from "styled-components";
import RenderStars from "../RenderStars/renderStars";

const CarouselWrapper = styled.div`
    box-sizing: border-box;
    position: relative;
    width: 100%;
    min-width:600px;
    max-width: 1200px;
    margin: 16px auto;
    overflow: hidden;
`;

const ImageContainer = styled.div<{ $translateValue: number }>`
    display: flex;
    transition: transform 0.5s ease-in-out;
    transform: translateX(${(props) => props.$translateValue}%);
`;

const ProductCard = styled(Link)`
    box-sizing: border-box;
    background: #f4f4f4;
    border: 1px solid transparent;
    border-radius: 6px;
    text-align: center;
    margin: 0;
    padding-top: 16px;
    text-decoration: none;
    color: inherit;


    &:hover {
        border: 1px solid #adadad;
        background: #f0f0f0;
    };
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(165, 165, 165, 0.548);
  border: none;
  border-radius: 32px;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  padding: 0;
  margin: 0;
  z-index: 1;

  &:hover {
    background-color: rgba(165, 165, 165, 0.8);
  }
`;

const PrevButton = styled(Button)`
  left: 5px;
  width: 32px;
  height: 32px;
`;

const NextButton = styled(Button)`
  right: 5px;
  width: 32px;
  height: 32px;
`;

export default function Carousel({products}:{products:TproductInfo[]}) {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMounted, setIsMounted] = useState<boolean>(false);
    const productsPerSlide = 5;


    useEffect(()=> {
        setIsMounted(true);
    },[]);
  

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === Math.ceil(products.length / productsPerSlide) - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? Math.ceil(products.length / productsPerSlide) - 1 : prevIndex - 1
        );
    };

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <CarouselWrapper>
                <ImageContainer $translateValue={-currentIndex * 100}>
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            style={{flex:`0 0 ${100/productsPerSlide}%`}}
                            href={`${product.id}`}
                        >
                            <Image
                                src={product.images[0]}
                                alt={`foto do ${product.name}`}
                                width={200}
                                height={200}
                                style={{
                                }}
                            />
                            <h3>{product.name}</h3>
                            <p><RenderStars review={Number(product.rating)} size={24}/></p>
                            <p>R$ {product.price}</p>
                        </ProductCard>
                    ))}
                </ImageContainer>
                <PrevButton onClick={prevSlide}><MdKeyboardArrowLeft /></PrevButton>
                <NextButton onClick={nextSlide}><MdKeyboardArrowRight /></NextButton>
            </CarouselWrapper>
        </>
    );
}
