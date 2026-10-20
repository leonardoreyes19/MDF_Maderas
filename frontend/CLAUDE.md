# Frontend — Plataforma de trazabilidad de órdenes

## Contexto
Plataforma para digitalizar el flujo de órdenes de trabajo de una empresa
de corte y enchapado de madera: checkpoints por estación, trazabilidad e
indicadores (KPIs). El contexto completo está en docs/contexto-proyecto.md.
Lee ese archivo antes de proponer cambios.

## Reglas de trabajo
- Trabaja ÚNICAMENTE dentro de la carpeta frontend/. No crees, modifiques
  ni borres archivos fuera de ella.
- No supongas tecnologías, librerías, estados de órdenes ni funcionalidades
  que no estén definidos en este archivo o en docs/. Si falta información,
  pregunta antes de implementar.
- Antes de cambios grandes, presenta un plan y espera aprobación.
- Haz cambios mínimos y enfocados en la tarea pedida; no refactorices
  código no relacionado.
- No ejecutes comandos de git que publiquen o modifiquen ramas
  (push, merge, rebase) sin que se te pida explícitamente.

## Estado actual
- Stack tecnológico: React 19 + Vite 8 + TypeScript 6.
  Rutas con react-router-dom, íconos con lucide-react, fuentes locales
  con @fontsource/barlow y @fontsource/inter. Estilos con CSS Modules
  sin frameworks de UI; lint con oxlint (`npm run lint`).
- Design tokens: TODAS las variables CSS (color, tipografía, espaciado,
  radios, sombras, transiciones, layout) se definen únicamente en
  src/styles/tokens.css. No escribas valores de color literales en los
  componentes; la única excepción permitida es `#ffffff` detrás del logo.
- Navegación: los 5 módulos se definen en un solo arreglo,
  src/config/navigation.ts (label, ruta, ícono, descripción). Renombrar
  un módulo o cambiar su ícono se hace solo ahí.
- Autenticación: SIMULADA y aislada en src/services/auth.ts
  ("Autenticación simulada: reemplazar al integrar el backend"). La sesión
  vive solo en memoria: no se usa localStorage ni se guardan contraseñas.
  Al integrar el backend se reescribe únicamente ese archivo.
- Backend / API: POR DEFINIR (desarrollado por otro integrante).
  Aún no hay llamadas HTTP ni modelo de datos en el frontend.
- Recursos de marca: docs/marca/ (solo PNG con fondo blanco).
  Copia de trabajo en src/assets/mdf-logo.png. El logo debe ir siempre
  sobre una superficie #ffffff.
- Implementado hasta ahora: pantalla /login y layout principal con barra
  lateral, barra superior y estado vacío por módulo. Solo interfaz,
  sin lógica de negocio.

## Comandos
- `npm run dev` — servidor de desarrollo (http://localhost:5173)
- `npm run build` — verificación de tipos + build de producción
- `npm run lint` — oxlint