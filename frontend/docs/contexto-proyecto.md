## Contexto y descripción del proyecto
 
Estamos desarrollando un software empresarial para una compañía especializada en **corte y enchapado de madera**. El objetivo principal es **digitalizar sus procesos operativos, mejorar la trazabilidad de las órdenes de trabajo, optimizar la comunicación entre departamentos y generar indicadores de desempeño (KPIs)** que permitan tomar decisiones basadas en datos.
 
### 1. Proceso operativo actual
 
Actualmente, la empresa trabaja de la siguiente manera:
 
1. **Optimización:** el cliente acude a esta área para especificar las características de su proyecto, incluyendo medidas, cortes, materiales y demás requerimientos. Se genera un número de orden.
2. **Caja:** el cliente realiza el pago correspondiente y posteriormente regresa al área de optimización.
3. **Optimización:** una vez realizado el pago, el personal entrega físicamente las órdenes de trabajo al área de producción.
4. **Producción:** el encargado recibe las órdenes y solicita al área de almacén los materiales necesarios.
5. **Almacén:** el encargado gestiona la solicitud y entrega de los materiales requeridos para producción.
6. **Procesamiento y entrega:** la orden continúa por las etapas operativas correspondientes hasta finalizar el trabajo y entregar el producto al cliente.
Este flujo es una descripción preliminar y deberá validarse para identificar todas las estaciones, responsables y condiciones del proceso.
 
### 2. Problemática identificada
 
Uno de los principales problemas es la **dependencia de documentos físicos para transferir información entre departamentos**.
 
Actualmente, las órdenes se trasladan manualmente de un área a otra, lo que genera oportunidades de mejora relacionadas con:
 
- Falta de visibilidad en tiempo real sobre el estado de cada orden.
- Dificultad para identificar en qué estación se encuentra un proyecto.
- Posibles retrasos en la comunicación entre departamentos.
- Ausencia de registros digitales centralizados sobre los tiempos de operación.
- Dificultad para detectar cuellos de botella y medir la productividad.
- Limitaciones para generar indicadores confiables de desempeño.
### 3. Solución que buscamos desarrollar
 
Queremos implementar una **plataforma digital de gestión y trazabilidad de órdenes de trabajo**, accesible desde las computadoras de las distintas estaciones de la empresa.
 
La idea es que cada departamento pueda visualizar las órdenes que le corresponden y actualizar su estado mediante checkpoints digitales.
 
Por ejemplo, una orden podría registrar eventos como:
 
- Orden generada.
- Pago confirmado.
- Orden enviada a producción.
- Material solicitado.
- Material entregado.
- Producción iniciada.
- Proceso de corte iniciado y finalizado.
- Proceso de enchapado iniciado y finalizado, cuando corresponda.
- Producto terminado.
- Producto entregado al cliente.
Estos estados son ejemplos iniciales y deberán ajustarse al proceso real.
 
Cada checkpoint deberá permitir registrar información relevante, como fecha, hora, responsable, estación y estado de la orden, para construir un historial completo de trazabilidad.
 
### 4. Indicadores de desempeño (KPIs)
 
Uno de los objetivos más importantes del software es aprovechar los registros operativos para generar indicadores como:
 
- Tiempo promedio de permanencia en optimización.
- Tiempo promedio de procesamiento en corte.
- Tiempo promedio de procesamiento en enchapado.
- Tiempo promedio de gestión de materiales en almacén.
- Tiempo total de ejecución de cada orden.
- Número de órdenes pendientes, en proceso y finalizadas.
- Productividad por estación.
- Identificación de cuellos de botella.
- Porcentaje de órdenes entregadas a tiempo.
Los KPIs deberán definirse considerando qué eventos necesitamos registrar, cómo se calcularán y qué información estará disponible en la base de datos.
 
### 5. Integración con la base de datos existente
 
La empresa ya nos proporcionó acceso a la **base de datos que utiliza actualmente para generar y almacenar las órdenes de trabajo**.
 
Esta base de datos será el punto de partida del desarrollo y una de las principales fuentes de información de la plataforma.
 
Antes de definir la integración, necesitaremos analizar su estructura, las tablas disponibles, las relaciones entre datos y los mecanismos seguros para consultar y actualizar información.
 
Debemos procurar que el nuevo software aproveche los sistemas existentes sin comprometer su funcionamiento.
 
### 6. Responsabilidad de este módulo: desarrollo del frontend
 
El frontend de la plataforma se desarrolla con Visual Studio Code y Claude Code, usando GitHub como herramienta de colaboración y control de versiones.
 
El frontend debe tener las siguientes características:
 
- **Diseño profesional y moderno:** una apariencia visual atractiva, coherente con la identidad de la empresa.
- **Experiencia de usuario (UX):** navegación sencilla, intuitiva y eficiente para los trabajadores.
- **Interfaces por departamento:** vistas adaptadas a las necesidades y responsabilidades de cada estación.
- **Dashboard operativo:** visualización clara de órdenes, estados, prioridades e indicadores relevantes.
- **Trazabilidad visual:** seguimiento del recorrido de cada orden por las diferentes estaciones.
- **Actualización sencilla de estados:** controles claros para registrar checkpoints sin complicar el trabajo de los operadores.
- **Diseño adaptable:** interfaces que funcionen correctamente en diferentes tamaños de pantalla.
- **Arquitectura escalable:** componentes reutilizables y una estructura que facilite futuras integraciones con el backend.
La identidad visual se basará en el logotipo de la empresa, ubicado en docs/marca/.