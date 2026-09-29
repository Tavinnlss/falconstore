export interface StoreConfig {
  name: string
  tagline: string
  locationHook: string
  phoneDisplay: string
  whatsappNumber: string
  vipGroupUrl: string
  address: string
  mapsQuery: string
  instagram: string
}

export interface Product {
  name: string
  description: string
  price: string
  tag: string
  image: string
}

export interface NavLink {
  href: string
  label: string
}

export interface HeroSlide {
  title: string
  text: string
  cta: string
  href: string
  image: string
}

export interface Category {
  id: string
  name: string
  hint: string
  image: string
}
