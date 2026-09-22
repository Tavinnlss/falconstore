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
        <p>Avaliações de nossos clientes</p>
      </div>

      <div class="grid">
        <article class="card">
          <header>
            <img src="/img/users/user01.jpeg" />
            <div>
              <strong>Gabriel Maia</strong>
              <time>12 ago. 2026</time>
            </div>
            <span class="badge">Compra verificada</span>
          </header>
          <div class="stars" aria-label="5 de 5">
            <span class="on">★</span><span class="on">★</span><span class="on">★</span><span class="on">★</span><span class="on">★</span>
          </div>
          <p>Curti demais a qualidade das peças. Chegou rápido e o tamanho ficou certinho. Com certeza vou comprar de novo.</p>
        </article>

        <article class="card">
          <header>
            <img src="/img/users/user02.jpeg" alt="Lucas M." />
            <div>
              <strong>Leo Medina</strong>
              <time>03 ago. 2026</time>
            </div>
            <span class="badge">Compra verificada</span>
          </header>
          <div class="stars" aria-label="5 de 5">
            <span class="on">★</span><span class="on">★</span><span class="on">★</span><span class="on">★</span><span class="on">★</span>
          </div>
          <p>Produtos muito bons e com bastante variedade. Peguei uma camiseta e uma bermuda e gostei bastante da qualidade.</p>
        </article>

        <article class="card">
          <header>
            <img src="/img/users/user03.jpeg" alt="Bianca S." />
            <div>
              <strong>Henrique Silva</strong>
              <time>28 jul. 2026</time>
            </div>
            <span class="badge">Compra verificada</span>
          </header>
          <div class="stars" aria-label="4 de 5">
            <span class="on">★</span><span class="on">★</span><span class="on">★</span><span class="on">★</span><span>★</span>
          </div>
          <p>Gostei muito da loja. As peças são estilosas, o preço é bom e o atendimento foi bem tranquilo.</p>
        </article>

        <article class="card">
          <header>
            <img src="/img/users/user04.jpeg" alt="Rafael T." />
            <div>
              <strong>Samuel Gomes.</strong>
              <time>19 jul. 2026</time>
            </div>
            <span class="badge">Compra verificada</span>
          </header>
          <div class="stars" aria-label="5 de 5">
            <span class="on">★</span><span class="on">★</span><span class="on">★</span><span class="on">★</span><span class="on">★</span>
          </div>
          <p>Primeira compra e já virei cliente. Produto chegou certinho, bem embalado e a qualidade surpreendeu.</p>
        </article>

        <article class="card">
          <header>
            <img src="/img/users/user05.jpeg" alt="Júlia P." />
            <div>
              <strong>Otávio Luiz</strong>
              <time>08 jul. 2026</time>
            </div>
            <span class="badge">Compra verificada</span>
          </header>
          <div class="stars" aria-label="5 de 5">
            <span class="on">★</span><span class="on">★</span><span class="on">★</span><span class="on">★</span><span class="on">★</span>
          </div>
          <p>Gostei bastante dos modelos e principalmente da variedade de tamanhos. A peça vestiu muito bem.</p>
        </article>

        <article class="card">
          <header>
            <img src="/img/users/user06.jpeg" alt="Diego A." />
            <div>
              <strong>Paulo Victor</strong>
              <time>22 jun. 2026</time>
            </div>
            <span class="badge">Compra verificada</span>
          </header>
          <div class="stars" aria-label="4 de 5">
            <span class="on">★</span><span class="on">★</span><span class="on">★</span><span class="on">★</span><span>★</span>
          </div>
          <p>Loja top! Comprei um conjunto e um boné, gostei muito dos dois. Qualidade boa e entrega rápida.</p>
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
