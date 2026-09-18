<script setup>
/**
 * Nossos clientes — estilo avaliação Mercado Livre.
 * Edite foto, nome, data, estrelas e comentário direto no HTML abaixo.
 * Classe "on" na estrela = preenchida. Sem "on" = vazia.
 */
</script>

<template>
  <section id="clientes" class="section reviews">
    <div class="container">
      <div class="section-head">
        <div>
          <p class="eyebrow">Quem já colou</p>
          <h2>Nossos clientes</h2>
        </div>
        <p>Avaliações no estilo que você já conhece: foto, nota e o recado de quem comprou de verdade.</p>
      </div>

      <div class="grid">
        <article class="card">
          <header>
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200&q=80" alt="Camila R." />
            <div>
              <strong>Camila R.</strong>
              <time>12 ago. 2026</time>
            </div>
            <span class="badge">Compra verificada</span>
          </header>
          <div class="stars" aria-label="5 de 5">
            <span class="on">★</span><span class="on">★</span><span class="on">★</span><span class="on">★</span><span class="on">★</span>
          </div>
          <p>Moletom chegou rápido e o caimento é exatamente o da foto. Já indiquei pra galera.</p>
        </article>

        <article class="card">
          <header>
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80" alt="Lucas M." />
            <div>
              <strong>Lucas M.</strong>
              <time>03 ago. 2026</time>
            </div>
            <span class="badge">Compra verificada</span>
          </header>
          <div class="stars" aria-label="5 de 5">
            <span class="on">★</span><span class="on">★</span><span class="on">★</span><span class="on">★</span><span class="on">★</span>
          </div>
          <p>Tênis confortável pra usar o dia inteiro. Atendimento no Whats foi de boa, sem enrolação.</p>
        </article>

        <article class="card">
          <header>
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80" alt="Bianca S." />
            <div>
              <strong>Bianca S.</strong>
              <time>28 jul. 2026</time>
            </div>
            <span class="badge">Compra verificada</span>
          </header>
          <div class="stars" aria-label="4 de 5">
            <span class="on">★</span><span class="on">★</span><span class="on">★</span><span class="on">★</span><span>★</span>
          </div>
          <p>Óculos lindo, embalagem caprichada. Só achei o prazo um pouco maior, mas valeu.</p>
        </article>

        <article class="card">
          <header>
            <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&h=200&q=80" alt="Rafael T." />
            <div>
              <strong>Rafael T.</strong>
              <time>19 jul. 2026</time>
            </div>
            <span class="badge">Compra verificada</span>
          </header>
          <div class="stars" aria-label="5 de 5">
            <span class="on">★</span><span class="on">★</span><span class="on">★</span><span class="on">★</span><span class="on">★</span>
          </div>
          <p>Peças com cara de loja grande, preço justo. O grupo VIP avisou a promoção e eu peguei.</p>
        </article>

        <article class="card">
          <header>
            <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&h=200&q=80" alt="Júlia P." />
            <div>
              <strong>Júlia P.</strong>
              <time>08 jul. 2026</time>
            </div>
            <span class="badge">Compra verificada</span>
          </header>
          <div class="stars" aria-label="5 de 5">
            <span class="on">★</span><span class="on">★</span><span class="on">★</span><span class="on">★</span><span class="on">★</span>
          </div>
          <p>Comprei a jaqueta e o tênis. Combinou tudo. Vou repetir na próxima reposição.</p>
        </article>

        <article class="card">
          <header>
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80" alt="Diego A." />
            <div>
              <strong>Diego A.</strong>
              <time>22 jun. 2026</time>
            </div>
            <span class="badge">Compra verificada</span>
          </header>
          <div class="stars" aria-label="4 de 5">
            <span class="on">★</span><span class="on">★</span><span class="on">★</span><span class="on">★</span><span>★</span>
          </div>
          <p>Qualidade boa e entrega pra outro estado sem dor de cabeça. Recomendo.</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.reviews {
  background: var(--black-soft);
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.card {
  background: var(--black);
  border: 1px solid var(--graphite);
  border-radius: 14px;
  padding: 18px;
}

header {
  display: grid;
  grid-template-columns: 48px 1fr auto;
  gap: 10px;
  align-items: center;
  margin-bottom: 10px;
}

header img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
}

header strong {
  display: block;
  font-size: 14px;
}

time {
  font-size: 12px;
  color: var(--muted);
}

.badge {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #7dffb1;
  background: rgba(125, 255, 177, 0.1);
  border-radius: 999px;
  padding: 4px 8px;
  white-space: nowrap;
}

.stars {
  color: #4a4c55;
  letter-spacing: 2px;
  margin-bottom: 8px;
}

.stars .on {
  color: var(--star);
}

p {
  font-size: 14px;
  color: #d9dae0;
}

@media (max-width: 960px) {
  .grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 640px) {
  .grid {
    grid-template-columns: 1fr;
  }

  header {
    grid-template-columns: 48px 1fr;
  }

  .badge {
    grid-column: 2;
  }
}
</style>
