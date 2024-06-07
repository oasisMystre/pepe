"use client";
import Image from "next/image";
import { IlPepe as IlPepeAsset, IlMaga as IlMagaAsset } from "./images";

export function IlPepe(props: Omit<React.ComponentProps<typeof Image>, "src">) {
  return (
    <Image
      {...props}
      alt={props.alt}
      src={IlPepeAsset}
    />
  );
}

export function IlMaga(props: Omit<React.ComponentProps<typeof Image>, "src">) {
  return (
    <Image
      {...props}
      alt={props.alt}
      src={IlMagaAsset}
    />
  );
}
