# Ejemplo — Adaptar a "Frontend Senior React"

Ejemplo de cómo el agente transformaría el CV para este puesto.

## 1. Titular (en contenido_es.js / contenido_en.js)
```
titular: "Senior Frontend Developer | React | TypeScript | Angular | Next.js | +3 años exp."
```

## 2. Perfil (ajustado, sin inventar)
> Desarrollador Frontend con más de 3 años de experiencia construyendo interfaces
> con React/TypeScript y Angular. He liderado el desarrollo de extremo a extremo de
> plataformas web (e-commerce educativo y sistemas corporativos del sector
> financiero), cuidando componentes reutilizables, formularios complejos,
> accesibilidad (WCAG) y rendimiento (Lighthouse).

## 3. Experiencia — bullets seleccionados (área [frontend] primero)
**Caja Arequipa**
- Definí la arquitectura frontend en Angular y los estándares del equipo dentro de la plataforma Caja 360.
- Desarrollé componentes reutilizables, formularios reactivos y consumo de APIs REST. *(verificar)*

**Educa Perú**
- Lideré una plataforma de e-commerce educativo con React/TypeScript (matrículas, pagos, certificados).
- Construí vistas de catálogo/checkout enfocadas en conversión y experiencia. *(verificar)*

**OGTISE – UNASAM**
- Desarrollé vistas en Angular con formularios, tablas y filtros para gestión documental. *(verificar)*

**Eddecap**
- Sitio corporativo con SEO técnico y optimización de rendimiento.

## 4. Habilidades — orden
1. Frontend
2. Arquitectura & Buenas Prácticas
3. Control de Versiones & Colaboración
4. CI/CD & Automatización
(Recortar IA & Data, Mensajería, Integraciones para mantener 1–2 páginas.)

## 5. Generar
```bash
cd generador && node build.js es simple && node build.js en simple
```

## 6. Nota para Luis
Los bullets *(verificar)* son ángulos del mismo trabajo real; confírmalos o
edítalos antes de enviar. El resto sale directo de tu experiencia registrada.
