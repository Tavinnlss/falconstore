# Migração técnica — Falcon

Esta versão mantém o visual e a funcionalidade da landing atual e começa a transformar o projeto em uma base reutilizável.

## Alterações realizadas

- Código principal migrado de JavaScript para TypeScript.
- `store.js` virou `site.config.ts`, concentrando os dados da empresa.
- Catálogo migrado para `catalog.ts` e tipado.
- Tipos compartilhados criados em `src/types/`.
- Componentes Vue usam `<script setup lang="ts">`.
- `ProductSlider`, `HeroSlider`, `CategoryGrid` e Navbar receberam tipagem explícita.
- `tsconfig.json` e `vite-env.d.ts` adicionados.
- `vite.config.js` virou `vite.config.ts`.
- Caminhos de duas imagens do catálogo foram normalizados para `/img/...`.
- Texto alternativo ausente em uma avaliação foi adicionado.

## O que não mudou

- Vue 3 continua sendo usado.
- Vite continua sendo usado.
- O CSS e o design atual foram preservados.
- Não foi criado framework próprio.

## Próxima etapa sugerida

Depois de validar esta branch visualmente, evoluir para um `landing-starter` com seções e componentes reutilizáveis sem fazer todos os clientes parecerem o mesmo site.
