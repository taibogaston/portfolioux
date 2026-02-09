# Por qué el portfolio se tildea y qué lo hace poco fluido

## Resumen

Varios efectos pesados se ejecutan a la vez (WebGL, blur, animaciones), sobre todo al hacer scroll. En dispositivos con poca GPU o CPU se nota como tildes y falta de fluidez.

---

## 1. **LightRays x2 en Experiencia** (impacto alto)

- En la sección **Experiencia** se montan **dos** componentes LightRays (izquierda y derecha).
- Cada uno tiene su propio **loop WebGL (OGL)** con `requestAnimationFrame` y escucha `resize` y `mousemove`.
- Al entrar en Experiencia: 2 render loops + 2 resize listeners + movimiento del mouse actualizando 2 shaders.
- **Efecto**: Mucho trabajo en GPU/CPU al estar en esa sección y al mover el mouse.

**Opciones**: Usar solo un LightRays, o desactivar `followMouse` y/o bajar calidad (menos rayos, menos pulsating).

---

## 2. **LiquidEther en el Hero** (impacto alto)

- Simulación de fluido con **Three.js** en WebGL.
- Un loop de `requestAnimationFrame` constante mientras el Hero está en vista (ya se pausa al hacer scroll).
- Resolución 0.5 ayuda, pero la simulación (Poisson, viscosidad, etc.) sigue siendo costosa.

**Opciones**: Reducir más la resolución, desactivar en móvil/reduced-motion, o reemplazar por un fondo estático/CSS.

---

## 3. **backdrop-blur** (impacto medio–alto, sobre todo en móvil)

- **Header**: `backdrop-blur-md` fijo → se repinta al scroll.
- **ProjectModal**: overlay con `backdrop-blur-sm` y contenido con `backdrop-blur-xl`, más varios botones con `backdrop-blur-sm`.
- **globals.css**: Varios `backdrop-filter: blur(80px)`.
- El blur de fondo es costoso en GPU y suele dar tildes en móviles.

**Opciones**: Reducir blur (p.ej. `blur-sm` en todo), o usar un fondo sólido/semi-opaco en lugar de blur en modal y header.

---

## 4. **Framer Motion en muchos elementos** (impacto medio)

- Casi todas las secciones usan animaciones (staggerChildren, opacity, y, scale).
- **InfiniteScroller**: Muchos `motion.div` (herramientas duplicadas) con `whileHover` y `animate`.
- Cada elemento animado puede provocar reflows/repaints.

**Opciones**: Reducir animaciones en scroll, usar `will-change` con cuidado, o simplificar stagger/quantity.

---

## 5. **Scroll y resize** (impacto bajo–medio)

- Hero: listener de scroll con rAF (bien throttled).
- LiquidEther y LightRays: `ResizeObserver` y `window resize`.
- No suele ser el cuello de botella principal, pero suma si ya hay mucho WebGL y blur.

---

## Orden sugerido para optimizar

1. **LightRays**: Una sola instancia o quitar `followMouse`; bajar complejidad (pulsating, rayLength).
2. **backdrop-blur**: Reducir o quitar en modal y header; revisar globals.css.
3. **LiquidEther**: Opción “reduced motion” / desactivar en móvil o bajar resolución.
4. **Framer Motion**: Menos elementos animados a la vez; simplificar InfiniteScroller (menos ítems animados o sin hover).
5. **Scroll/resize**: Mantener como está si ya usan passive y rAF.

Si querés, puedo aplicar primero los cambios de LightRays y backdrop-blur para que notes la mejora sin tocar todo el diseño.
