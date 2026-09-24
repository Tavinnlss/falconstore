<script setup>
import TheNavbar from './components/TheNavbar.vue'
import HeroSlider from './components/HeroSlider.vue'
import CategoryGrid from './components/CategoryGrid.vue'
import ProductSlider from './components/ProductSlider.vue'
import StorePerks from './components/StorePerks.vue'
import VipSection from './components/VipSection.vue'
import ReviewsSection from './components/ReviewsSection.vue'
import AboutSection from './components/AboutSection.vue'
import PromoSection from './components/PromoSection.vue'
import LocationSection from './components/LocationSection.vue'
import ContactSection from './components/ContactSection.vue'
import TheFooter from './components/TheFooter.vue'
import WhatsappFloat from './components/WhatsappFloat.vue'
import { clothes, sneakers, glasses } from './data/catalog'
</script>

<template>
  <TheNavbar />
  <main>
    <HeroSlider />
    <CategoryGrid />
    <ProductSlider
      id="roupas"
      eyebrow="Drop de agora"
      title="Roupas"
      subtitle="Do casual do dia a dia até o corte mais esportivo. Peças pra circular sem perder a identidade."
      :items="clothes"
    />
    <ProductSlider
      id="tenis"
      eyebrow="No pé"
      title="Tênis"
      subtitle="Silhuetas que aguentam a rua e ainda fecham o look. Conforto com atitude."
      :items="sneakers"
      tone="alt"
    />
    <ProductSlider
      id="acessorios"
      eyebrow="Detalhe que fecha"
      title="Acessórios"
      subtitle="Acessório certo muda o recado."
      :items="glasses"
    />
    <PromoSection />
    <StorePerks />
    <VipSection />
    <LocationSection />
    <ReviewsSection />
    <AboutSection />
    <ContactSection />
  </main>
  <TheFooter />
  <WhatsappFloat />
</template>
