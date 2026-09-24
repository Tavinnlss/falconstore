<script setup>
import { nextTick, onUnmounted, ref } from 'vue'

const open = ref(false)
const canvas = ref(null)
const dialog = ref(null)
let raf = 0
let prevOverflow = ''

const colors = ['#2f6bff', '#4d84ff', '#ffffff', '#ffe14d', '#9eb6ff']

const burst = () => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const c = canvas.value
  if (reduce || !c) return

  const ctx = c.getContext('2d')
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  const w = window.innerWidth
  const h = window.innerHeight
  c.width = w * dpr
  c.height = h * dpr
  c.style.width = `${w}px`
  c.style.height = `${h}px`
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

  const originX = w / 2
  const originY = h * 0.42
  const pieces = Array.from({ length: 160 }, () => {
    const angle = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 1.35
    const speed = 7 + Math.random() * 11
    return {
      x: originX + (Math.random() - 0.5) * 80,
      y: originY,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      w: 6 + Math.random() * 7,
      h: 8 + Math.random() * 10,
      color: colors[Math.floor(Math.random() * colors.length)],
      rot: Math.random() * Math.PI,
      vr: (Math.random() - 0.5) * 0.28,
      life: 1,
    }
  })

  const tick = () => {
    ctx.clearRect(0, 0, w, h)
    let alive = 0
    pieces.forEach((p) => {
      if (p.life <= 0) return
      p.vy += 0.16
      p.x += p.vx
      p.y += p.vy
      p.vx *= 0.992
      p.rot += p.vr
      p.life -= 0.007
      if (p.life <= 0 || p.y > h + 30) return
      alive += 1
      ctx.save()
      ctx.translate(p.x, p.y)
      ctx.rotate(p.rot)
      ctx.globalAlpha = Math.max(p.life, 0)
      ctx.fillStyle = p.color
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h)
      ctx.restore()
    })
    if (alive) raf = requestAnimationFrame(tick)
    else ctx.clearRect(0, 0, w, h)
  }

  cancelAnimationFrame(raf)
  raf = requestAnimationFrame(tick)
}

const openPrize = async () => {
  open.value = true
  prevOverflow = document.body.style.overflow
  document.body.style.overflow = 'hidden'
  window.addEventListener('keydown', onKey)
  await nextTick()
  dialog.value?.focus()
  burst()
}

const close = () => {
  if (!open.value) return
  open.value = false
  document.body.style.overflow = prevOverflow
  window.removeEventListener('keydown', onKey)
  cancelAnimationFrame(raf)
}

const onKey = (event) => {
  if (event.key === 'Escape') close()
}

onUnmounted(() => {
  cancelAnimationFrame(raf)
  document.body.style.overflow = prevOverflow
  window.removeEventListener('keydown', onKey)
})
</script>

<template>
  <section id="promo" class="section promo">
    <div class="container">
      <article class="ticket">
        <div class="main">
          <p class="eyebrow">Recado da loja</p>
          <h2>Seu desconto tá aqui</h2>
          <p>
            Aperta o botão e vê o que você ganhou. O desconto vale numa compra na loja — e o print dessa tela é o que libera ele no pagamento.
          </p>
          <button class="btn btn-blue" type="button" @click="openPrize">
            Quero meu desconto
          </button>
        </div>
        <div class="side" aria-hidden="true">
          <span>ganhe</span>
          <strong>10%</strong>
          <em>off na loja</em>
        </div>
      </article>
    </div>

    <Teleport to="body">
      <div v-if="open" class="backdrop" @click.self="close">
        <canvas ref="canvas" class="confetti" aria-hidden="true" />
        <div
          ref="dialog"
          class="dialog"
          role="dialog"
          aria-modal="true"
          aria-labelledby="promo-title"
          tabindex="-1"
        >
          <p class="kicker">Parabéns</p>
          <h3 id="promo-title">Você ganhou 10% de desconto</h3>
          <p class="deal">em uma compra na loja</p>

          <div class="stamp">
            <span>FALCON</span>
            <b>10%</b>
            <small>OFF</small>
          </div>

          <p class="howto">
            Tira um print dessa tela agora. Na hora de efetuar o pagamento, apresenta o print na loja. É com esse registro que o desconto de 10% entra na compra.
          </p>

          <button class="btn btn-blue" type="button" @click="close">
            Beleza, vou tirar o print
          </button>
        </div>
      </div>
    </Teleport>
  </section>
</template>

<style scoped>
.promo {
  background:
    radial-gradient(640px 280px at 15% 80%, rgba(47, 107, 255, 0.2), transparent 65%),
    var(--black);
}

.ticket {
  position: relative;
  display: grid;
  grid-template-columns: 1.4fr 280px;
  border-radius: 28px;
  overflow: hidden;
  border: 1px solid var(--graphite);
  background:
    radial-gradient(520px 240px at 78% 0%, rgba(47, 107, 255, 0.28), transparent 62%),
    linear-gradient(160deg, #17171d, #0c0c10 62%);
}

.main {
  padding: 48px 44px;
}

h2 {
  font-size: clamp(48px, 7vw, 84px);
  margin: 10px 0 14px;
}

.main p {
  max-width: 46ch;
  color: var(--muted);
  margin-bottom: 26px;
}

.side {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border-left: 2px dashed rgba(255, 255, 255, 0.18);
  background: rgba(47, 107, 255, 0.08);
  text-align: center;
  padding: 28px 16px;
}

.side span,
.side em {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  font-style: normal;
  color: var(--blue-hot);
}

.side strong {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 128px;
  line-height: 0.82;
  letter-spacing: 0.02em;
}

.backdrop {
  position: fixed;
  inset: 0;
  z-index: 80;
  display: grid;
  place-items: center;
  padding: 20px;
  background: rgba(7, 7, 8, 0.78);
  backdrop-filter: blur(6px);
}

.confetti {
  position: fixed;
  inset: 0;
  z-index: 92;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.dialog {
  position: relative;
  z-index: 91;
  width: min(460px, 100%);
  padding: 32px 28px 28px;
  border-radius: 28px;
  border: 1px solid var(--graphite);
  background:
    radial-gradient(280px 140px at 50% 0%, rgba(47, 107, 255, 0.35), transparent 70%),
    var(--black-soft);
  text-align: center;
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.45);
  animation: pop 0.35s ease;
}

.kicker {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--blue-hot);
}

h3 {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(36px, 8vw, 52px);
  line-height: 0.92;
  letter-spacing: 0.02em;
  margin: 8px 0 6px;
}

.deal {
  color: var(--muted);
  margin-bottom: 18px;
}

.stamp {
  display: grid;
  justify-items: center;
  margin: 0 auto 18px;
  width: min(220px, 100%);
  padding: 16px 12px 14px;
  border-radius: 18px;
  border: 2px dashed var(--blue);
  background: rgba(47, 107, 255, 0.1);
}

.stamp span,
.stamp small {
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.22em;
}

.stamp b {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 84px;
  line-height: 0.8;
  color: var(--white-pure);
}

.howto {
  color: var(--white);
  font-size: 15px;
  margin-bottom: 22px;
}

.dialog .btn {
  width: 100%;
}

@keyframes pop {
  from {
    transform: translateY(12px) scale(0.96);
    opacity: 0;
  }
  to {
    transform: none;
    opacity: 1;
  }
}

@media (max-width: 800px) {
  .ticket {
    grid-template-columns: 1fr;
  }

  .main {
    padding: 32px 22px 28px;
  }

  .side {
    border-left: 0;
    border-top: 2px dashed rgba(255, 255, 255, 0.18);
    padding: 22px 16px 26px;
  }

  .side strong {
    font-size: 96px;
  }
}
</style>
