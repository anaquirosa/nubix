import type { JSX } from "react";

export interface ContactInformation {
  text: string,
  iconUrl: string,
  alt: string,
}

export interface Media {
  text: string,
  icon: JSX.Element,
}

export interface Feature {
    title: string;
    description: string;
    iconURL: string;
}

 export interface Testimonials {
    name:string; 
    role: string;
    image: string;
    quote: string;
}