<script setup>
const perks = [
  {
    title: 'Entrega para todo o Brasil',
    text: 'Pede de qualquer estado. A gente despacha e você acompanha até chegar.',
    icon: 'truck',
  },
  {
    title: 'Aceita todas as formas de pagamento',
    text: 'Pix, cartão, débito, crédito e o que mais rolar na hora. Sem drama pra fechar.',
    icon: 'card',
  },
  {
    title: 'Do casual ao esportivo',
    text: 'Uma loja só pra montar o visual inteiro: roupa, tênis e óculos.',
    icon: 'fit',
  },
]

const payments = ['Pix', 'Crédito', 'Débito', 'Boleto', 'Dinheiro']
</script>

<template>
  <section class="band">
    <div class="container grid">
      <article v-for="perk in perks" :key="perk.title" class="perk">
        <div class="icon" aria-hidden="true">
          <svg v-if="perk.icon === 'truck'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <path d="M3 7h11v8H3zM14 11h5l2 3v1h-7z" />
            <circle cx="7" cy="17" r="1.6" />
            <circle cx="18" cy="17" r="1.6" />
          </svg>
          <svg v-else-if="perk.icon === 'card'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <rect x="3" y="6" width="18" height="12" rx="2" />
            <path d="M3 10h18" />
          </svg>
          <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <path d="M12 3l7 4v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7l7-4z" />
          </svg>
        </div>
        <div>
          <h3>{{ perk.title }}</h3>
          <p>{{ perk.text }}</p>
        </div>
      </article>
    </div>
    <div class="container pays">
      <span>Paga como quiser</span>
      <b v-for="pay in payments" :key="pay">{{ pay }}</b>
    </div>
  </section>
</template>

<style scoped>
.band {
  padding: 28px 0;
  background: linear-gradient(90deg, #101117, #151822 40%, #0e1424);
  border-block: 1px solid var(--graphite);
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.perk {
  display: flex;
  gap: 14px;
  align-items: flex-start;
}

.icon {
  width: 44px;
  height: 44px;
  flex: none;
  border-radius: 12px;
  display: grid;
  place-items: center;
  background: var(--blue-dim);
  color: var(--blue-hot);
}

.icon svg {
  width: 22px;
  height: 22px;
}

h3 {
  font-size: 15px;
  margin-bottom: 4px;
}

p {
  font-size: 13px;
  color: var(--muted);
}

.pays {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  margin-top: 22px;
  padding-top: 18px;
  border-top: 1px solid var(--graphite);
  color: var(--muted);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.pays b {
  padding: 6px 12px;
  border-radius: 999px;
  border: 1px solid var(--graphite-mid);
  color: var(--white);
  font-weight: 700;
}

@media (max-width: 800px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
