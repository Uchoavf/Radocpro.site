# radoc.pro — Guia Completo de Identidade Visual

> Use este documento como prompt para o Claude chat recriar, adaptar ou expandir qualquer peça da identidade visual do serviço **radoc.pro**.

---

## 1. Contexto do projeto

**Serviço:** Assessoria para montagem de RADOC (Relatório de Atividades Docentes) para professores da UFRA (Universidade Federal Rural da Amazônia).

**Marca:** radoc.pro — domínio `.pro` reforça especialização e profissionalismo.

**Público-alvo:** Docentes da UFRA que precisam montar o relatório de atividades para progressão funcional (avaliado pela CPPD).

**Estilo geral:** Minimalista e elegante, com vocabulário visual acadêmico/institucional (moldura de certificado, tipografia serifada).

**Peças produzidas:**
1. Story de anúncio (WhatsApp Status) — 1080 × 1920 px
2. Logomarca — 3 direções (Selo Acadêmico, Moderno .pro, Monograma Rp)
3. Foto de perfil WhatsApp — 800 × 800 px

---

## 2. Sistema de Design (base de todas as peças)

### 2.1 Paleta de cores

| Token | Hex | Uso |
|---|---|---|
| `--green` | `#1c5640` | Cor principal, títulos, fundo do chip logo |
| `--green-deep` | `#143c2d` | Sombras, texto de telefone |
| `--gold` | `#bd9748` | Acentos dourados, regras, `.pro` |
| `--gold-soft` | `#d8bd86` | `p` do monograma, marca d'água, inversão |
| `--red` | `#a8392e` | Ponto separador · (eyebrow/scope) |
| `--cream` | `#f7f3ea` | Fundo principal, texto em fundos escuros |
| `--cream-2` | `#efe8d8` | Gradiente de fundo (canto inferior) |
| `--ink` | `#22312a` | Texto de corpo |

**Fundo gradiente do story:**
```css
radial-gradient(120% 90% at 50% -10%, #fbf8f1 0%, #f7f3ea 46%, #efe8d8 100%)
```

### 2.2 Tipografia

| Fonte | Uso | Pesos |
|---|---|---|
| **Cormorant Garamond** | Headlines, logomarca, lede, monograma | 400, 500, 600, 500 itálico |
| **Hanken Grotesk** | Labels, escopo, rodapé, CTA | 400, 500, 600, 700 |
| **JetBrains Mono** | Telefone, tags técnicas | 400, 500 |

```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Hanken+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
```

---

## 3. Logomarca — Monograma Rp (escolhida)

A direção adotada foi o **Monograma Rp** (Conceito 03), disponível em 3 variações de cor:

| Variação | Fundo | R | p |
|---|---|---|---|
| **Verde** _(principal)_ | `#1c5640` | `#f7f3ea` (creme) | `#d8bd86` (dourado-soft) |
| **Ouro** _(premium)_ | `#bd9748` | `#143c2d` (verde-deep) | `#f7f3ea` (creme) |
| **Claro** _(alternativa)_ | `#f7f3ea` + borda dourada | `#1c5640` (verde) | `#bd9748` (dourado) |

### Chip da logomarca (usado no story e perfil)

```css
.rp-chip {
  width: 124px; height: 124px;
  border-radius: 30px;
  background: #1c5640;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 12px 28px rgba(20,60,45,0.22);
}
.rp-chip .rp {
  font-family: "Cormorant Garamond", serif;
  font-weight: 600; font-size: 70px; line-height: 1;
  color: #f7f3ea;
}
.rp-chip .rp .p { color: #d8bd86; }
```

```html
<div class="rp-chip"><span class="rp">R<span class="p">p</span></span></div>
```

### Outras duas direções (não adotadas, disponíveis para uso futuro)

- **Conceito 01 — Selo Acadêmico:** anel dourado duplo com `R` centralizado + wordmark serifada `radoc.pro`
- **Conceito 02 — Moderno .pro:** ícone de ✓ em quadrado arredondado + wordmark grotesca `radoc.pro`

---

## 4. Story de Anúncio (WhatsApp Status)

**Formato:** 1080 × 1920 px, canvas fixo escalado via `transform: scale()`.

### 4.1 Estrutura de layout

```
┌─────────────────────────────────┐
│  .brand  (topo fixo)            │  chip Rp + radoc.pro + "DOCENTES · UFRA"
│                                 │
│  .hero   (margin auto, centro)  │  "Faço o seu" + RADOC + subtítulo
│                                 │  régua + lede + escopo
│  .cta-wrap (rodapé fixo)        │  botão WhatsApp + telefone + tagline
└─────────────────────────────────┘
```

**Elementos absolutos no stage:**
- `.watermark` — "Rp" Cormorant 483px, `right:0; bottom:460px`, verde 7% + dourado 10% opacidade
- `.frame` — borda dourada dupla `inset:40px` (1.5px externa + 0.75px interna)
- `.corner.tl/tr/bl/br` — cantos 30×30px, borda dourada 2px

### 4.2 Hierarquia tipográfica

| Elemento | Fonte | Tamanho | Cor |
|---|---|---|---|
| Chip Rp | Cormorant 600 | 70px | creme + dourado-soft |
| Brand name `radoc.pro` | Cormorant 600 | 48px | verde / dourado |
| Eyebrow `DOCENTES · UFRA` | Hanken 600 | 24px | verde, ls:0.34em |
| Pre-headline itálico | Cormorant 500i | 62px | ink |
| **RADOC** | Cormorant 600 | 208px | verde |
| Subtítulo caps | Hanken 600 | 26px | dourado, ls:0.34em |
| Lede corpo | Cormorant regular | 50px | ink / negrito verde |
| Escopo caps | Hanken 600 | 22px | verde, ls:0.26em |
| Botão CTA | Hanken 700 | 34px | creme |
| Telefone | JetBrains Mono 500 | 30px | verde-deep |
| Tagline | Hanken 500 | 21px | dourado, ls:0.18em |

### 4.3 Régua decorativa

```css
.rule { width:88px; height:2px; background:#bd9748; margin:46px 0; position:relative; }
.rule::before, .rule::after {
  content:""; position:absolute; top:50%;
  width:7px; height:7px; background:#bd9748;
  transform:translateY(-50%) rotate(45deg); border-radius:1px;
}
.rule::before { left:-26px; }
.rule::after  { right:-26px; }
```

### 4.4 Scaling para o viewport

```js
(function(){
  var stage = document.getElementById('stage');
  function fit(){
    var s = Math.min(window.innerWidth/1080, window.innerHeight/1920);
    stage.style.transform = 'scale(' + s + ')';
  }
  window.addEventListener('resize', fit);
  fit();
})();
```

### 4.5 Botão WhatsApp com link

```html
<a href="https://wa.me/5591981563432?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20o%20RADOC." target="_blank" style="text-decoration:none">
  <div class="cta">...</div>
</a>
```

---

## 5. Foto de Perfil WhatsApp

**Formato:** 800 × 800 px, proporção 1:1. O WhatsApp recorta automaticamente em círculo.

**Versão adotada (★ recomendada):** Verde Rp — máximo contraste, legível em 48px (lista de conversas) e em tamanho grande.

### Arte final

```html
<div style="
  width:800px; height:800px;
  background:#1c5640;
  border-radius:50%;          /* ou remova para salvar como quadrado */
  display:flex; align-items:center; justify-content:center;
  overflow:hidden;
">
  <span style="
    font-family:'Cormorant Garamond',serif;
    font-weight:600; font-size:420px; line-height:1;
    color:#f7f3ea;
  ">R<span style="color:#d8bd86">p</span></span>
</div>
```

### Tamanhos de exibição WhatsApp

| Contexto | Tamanho exibido |
|---|---|
| Lista de conversas | ~48 × 48 px |
| Tela de chat aberto | ~56 × 56 px |
| Perfil expandido | ~300 × 300 px |
| Arquivo original ideal | 800 × 800 px |

---

## 6. Prompts prontos para Claude chat

### 6.1 Recriar o story completo

> Crie um story de anúncio em HTML (1080×1920px, escalado para o viewport) para o serviço **[NOME]**, com as seguintes especificações:
>
> **Paleta:** verde `#1c5640`, dourado `#bd9748`, vermelho `#a8392e`, creme `#f7f3ea`
> **Fontes Google:** Cormorant Garamond + Hanken Grotesk + JetBrains Mono
>
> **Estrutura:**
> 1. Topo: chip verde arredondado com monograma "Rp" (R creme, p dourado-soft) + nome `radoc.pro` + eyebrow em caps
> 2. Centro: pré-headline itálico + headline enorme + subtítulo em caps dourado + régua com losangos + parágrafo de apoio + linha de escopo
> 3. Rodapé: botão pill verde com ícone WhatsApp + telefone monospace + tagline dourada
>
> **Decoração:** moldura de certificado (borda dupla dourada, inset 40px) + cantos quadrados + marca d'água "Rp" 483px no canto inferior direito (bottom:460px, opacidade baixa)
>
> **Textos:**
> - Eyebrow: `[EX: DOCENTES · UFRA]`
> - Pré-headline: `[EX: Faço o seu]`
> - Headline: `[EX: RADOC]`
> - Subtítulo: `[EX: RELATÓRIO DE ATIVIDADES DOCENTES]`
> - Lede: `[EX: Você reúne os comprovantes. Eu organizo, monto e entrego o seu relatório completo, com todos os cálculos no padrão CPPD.]`
> - Escopo: `[EX: Ensino · Pesquisa · Extensão · Gestão]`
> - Telefone: `[EX: (91) 9 8156-3432]`
> - Link WhatsApp: `[EX: https://wa.me/5591981563432]`

### 6.2 Recriar a logomarca

> Crie uma página HTML de showcase de logomarca para **radoc.pro** com 3 variações do monograma "Rp" (verde, ouro e claro), cada uma em fundo claro e escuro, com simulação de ícones de app (favicon). Use Cormorant Garamond para o monograma. Paleta: verde `#1c5640`, dourado `#bd9748`, creme `#f7f3ea`.

### 6.3 Recriar a foto de perfil

> Crie uma página HTML de escolha de foto de perfil para WhatsApp com 3 opções circulares do monograma "Rp" em Cormorant Garamond 600: verde (R creme, p dourado-soft), creme (R verde, p dourado), ouro (R verde-deep, p creme). Mostre cada opção como círculo grande + simulação de chat com avatar 48px + nome "radoc.pro".

---

## 7. Tabela de personalização

| Campo | Valor atual | Onde alterar |
|---|---|---|
| Monograma | `Rp` | `.rp-chip .rp`, `.watermark`, foto de perfil |
| Nome da marca | `radoc.pro` | `.brand-name` |
| Eyebrow | `DOCENTES · UFRA` | `.eyebrow` |
| Headline | `RADOC` | `.title` |
| Lede | *ver story* | `p.lede` |
| Escopo | Ensino · Pesquisa... | `.scope` |
| Telefone | `(91) 9 8156‑3432` | `.phone` |
| Link WA | `wa.me/5591981563432` | `href` do `<a>` |
| Cor principal | `#1c5640` | `--green` no `:root` |
| Cor dourado | `#bd9748` | `--gold` no `:root` |
| Tamanho marca d'água | `483px` | `.watermark { font-size }` |
| Posição marca d'água | `right:0; bottom:460px` | `.watermark` |

---

## 8. Observações técnicas

- **Safe area WhatsApp Status:** conteúdo crítico deve ficar entre ~240px do topo e ~280px do rodapé.
- **`overflow:hidden`** no `#stage` garante que a marca d'água não extravase.
- O separador `·` do escopo é um `<span class="sep">` (círculo CSS 5×5px vermelho), não um caractere tipográfico.
- A régua usa `::before`/`::after` com `rotate(45deg)` para os losangos laterais.
- `text-wrap:balance` no `.lede` equilibra a quebra de linha.
- `&#8209;` no telefone é o non-breaking hyphen — impede quebra entre dígitos.
- Foto de perfil deve ser enviada como **quadrado** (800×800) — o WhatsApp faz o recorte circular.
