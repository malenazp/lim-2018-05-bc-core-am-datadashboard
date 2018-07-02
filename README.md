# Data Dashboard

## Antecedentes y Alcance del problema:

Año tras año el equipo de Laboratoria registra mediante su página web a miles de estudiantes, quienes desean insertarse en el mundo del código. Despues de una serie de etapas, Laboratoria selecciona a las candidatas participantes del bootcamp de 6 meses. 

Las estudiantes seleccionadas acceden a contenidos de aprendizaje (lecturas, videos, ejercicios y quizzes) en un sistema que llamamos LMS (Learning Management System). El LMS acumula data sobre la cantidad de lecturas realizadas, el puntaje obtenido en los quizzes, entre otros datos. 

Las Training Managers (TMs) son las responsables de  analizar la mayor cantidad de datos posibles respecto al progreso de las estudiantes para apoyarlas en su aprendizaje. Por este motivo, las Training Managers necesitan una plataforma web que les permita visualizar mediante gráficos estadísticos y dinámicos los datos de cada estudiante.

Es apartir de esta necesidad que se decide implementar una plataforma web llamada: **data dashboard** (_tablero de visualización de datos_).


## Definición e importancia del Dashboard:

Un dashboard debe ayudarnos a identificar el origen de ese dato positivo o negativo que hemos detectado, que nos permita tomar una decisión al respecto, el análisis en detalle de los ‘porqués’ se debe hacer en un informe en concreto o en otra herramienta diseñada para ello. [importancia del Dashoboard](http://www.backbonetechnology.com.co/cultura-co/digital-section-co/la-importancia-de-un-dashboard-digital),

En la actualidad muchas instituciones públicas y privadas utilizan los dashboards para la mejor toma de decisiones, por ejemplo:

* [En la INEI](http://subirimagen.me/uploads/20180701024416.PNG).
los  datos estadísticos muestran informacion nacional de gran importancia. En base a estos datos obtenidos, las autoridades toman decisiones para mejorar en un tema determinado.

* [En Osiptel](http://subirimagen.me/uploads/20180701025256.PNG).
muestran datos referente a las ganancias y pérdidas de las empresas de telefonia movil. 

* [Ipsos Perú](https://i2.wp.com/www.encuestas.com.pe/wp-content/uploads/2018/03/Encuesta-Ipsos-Lima-Marzo-2018.jpg?resize=580%2C309). Utiliza los dashboards para mostrar los resultados estadisticos de la intencion de voto de los ciudadanos.  <br>

![Ipsos](http://subirimagen.me/uploads/20180701031014.jpg)


## Objetivos de Proyecto

El objetivo principal de este proyecto es diseñar y construir una _interfaz web_ donde podamos visualizar y manipular datos.

## Tópicos a cubrir

Entre los temas y conceptos relacionados que se utilizó en el proyecto son: _arrays_,_objects_, _dom_, _xhr_ y _visual design_. Entre otros como: variables_, _control de flujo_ y _tests unitarios_.

## Entregables

Los criterios mínimos que se concideró en este proyecto son: la Experiencia de Usuario; y los Detalles de la implementacion del código señalados en el proyecto, que acontinuacion se detallan.

`El Sprint Planing` <br>
![Sprint Planing](http://subirimagen.me/uploads/20180611181855.jpg)


## User Experience Design

`Entrevista a los Usuarios`

* Entrevista a Alejandra.
![Entrevista a Alejandra](http://subirimagen.me/uploads/20180611160348.jpg)

<br>

* Entrevista a Gonzalo.
![Entrevista a Gonzalo](http://subirimagen.me/uploads/20180611160513.jpg) 



Se realizaron entrevistas a los usuarios involucrados, con la finalidad de conocer las necesidades que ellos tenían, y los requerimientos que necesitaban implementarse en la plataforma web.

Para la entrevista, se preparó una lista de preguntas, y a su vez se diseñó 2 prototipos básicos, para que los usuarios escogieran 1 modelo, adaptandolo siempre a las necesidades del mismo usuario.

`Preguntas realizadas a Alejandra:`

1. **Te gustaría tener un usuario y contraseña para logerarte.**
   - Sí, me gustaría seguir utilizando mi actual usuario y contraseña.

2. **Te gustaría un diseño de páginas planas, o lleno de colores.**
   - Plano, con los colores característicos de Laboratoria.

3. **Para hacer los filtros del formulario, ¿Te gustaría usar opciones desplegables o hacer click en botones?**
   - Prefiero las listas desplegables.

4. **¿Qué datos principalmente te gustaría visualizar en el Dashboard?**
   - Me gustaría visualizar el nivel alcanzado por las estudiantes, el porcentaje de lecturas completadas, los tiempos promedios de cada lectura. 

5. **¿Qué gráficos te gustaría utilizar?**  
   - Eso es depende de los datos que muestre el formulario. Para los datos del nivel alcanzado por las estudiantes, "Gráfico de Barras"; para mostrar el porcentaje de lecturas completadas, el gráfico adecuado sería el "Gráfico de torta"; y "Gráfico de líneas" para mostrar los tiempos promedios de las lecturas.

6. **¿Quisieras visualizar a todo el grupo de alumnas, una vez filtrado el cohort? Es decir, ¿debería haber una opción que te ayude a visualizar a las estudiantes?**
   - Sí, por supuesto.

7. **¿Te gustaría poder visualizar el porcentaje de alumnas, cursos, y relacionarlo con los resultados de las otras regiones?**
   - Me sería mejor, ver los resultados, según la sede que selecciono.

8. **¿Qué parte consideras más crucial referente a la información que deseas visualizar?** 
   - Que el formulario sea simple, y fácil de utilizarlo. Que me muestre los datos de forma ordenada, que me sea comprensible.

9. **Te gustaría tener un resumen con los datos más destacados de las estudiantes. Por ejemplo: ver el curso más estudiado por las estudiantes, ver el curso con mayor puntaje en los quizzes, visualizar la estudiante con mayor completitud de lecturas, ver la sede con más alumnado, ver la sede con el puntaje más alto obtenido por las estudiantes, entre otras.**
   - Esa información, es interesante, pero me parece que lo deberían considerar en el Haking Edition, por el momento concentrense en un diseño básico.

10. **Muchas Gracias.**

<br>

#### 1) Definición del producto

* Los principales usuarios de producto son: Los Training Managers.

* Objetivos de los usuarios en relación con el producto: es poder visualizar y manipular los datos obtenidos del LMS. Con el fin de que estos datos se puedan mostrar en gráficos estadísticos y los ayude en la toma de decisiones.

* Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué. Cómo los descubriste. <br>
En las entrevistas realizadas nos dimos cuenta de que el % de lecturas completadas es sumamente importante en la interfaz, porque en base a este dato podemos comparar el nivel obtenido por los estudiantes y al mismo tiempo podremos conocer los cursos más leidos por las estudiantes.

* Cuándo revisan normalmente estos datos los usuarios: Los training managers podrán visualizar estos datos de forma simultanea, en cualquier momento.

* Cómo crees que el producto les está resolviendo sus problemas: El producto que presentamos les facilita de forma gráfica la visualización de los datos. Esto hace que la información leída sea fácil de comprender. Por lo tanto facilita la toma de decisiones.

* Cómo fue tu proceso de diseño: Al principio tuvimos 2 prototipos, los cuales fueron presentados en las entrevistas realizadas. 

  - El primer prototipo constaba de muchas ventanas, mientras que el segundo lo hicimos fácil y práctico. Los usuarios entrevistados escogieron el 2° prototipo. Este último fue el cual implementamos segun las necesidades que los usuarios nos señalaron.

#### 2) Sketch de la solución (prototipo de baja fidelidad)

Diseño del Primer Prototipo: <br>
![Prototipo 1](http://subirimagen.me/uploads/20180612083805.png)

![Prototipo 1](http://subirimagen.me/uploads/20180611174408.png)

<br>

Diseño del Segundo Prototipo: <br>
![Prototipo 2](http://subirimagen.me/uploads/20180611174451.png)



Diseño del Prototipo 3:
[Ver Prototipo 3](https://www.figma.com/file/eMd4F8M53y2I6dA1kikqxfMU/demo1?node-id=0%3A1)

<br>
<br>

#### 3) Diseño de la Interfaz de Usuario (prototipo de alta fidelidad)

Prototipo Final realizado en 
[Ver Prototipo 3](https://www.figma.com/file/eMd4F8M53y2I6dA1kikqxfMU/demo1?node-id=0%3A1)

[Figma](https://www.figma.com/), una herramienta fácil de utilizar, y sirve para el diseño de prototipos de páginas webs.

Diseño del Prototipo Final: <br>
![Prototipo Final](src/img/Prototipo_De_Alta/Figma_ok.gif)



### Implementación de la Interfaz de Usuario (HTML/CSS/JS)

La interfaz presentada cumple con los requerimientos minimos de visual desing.


## Test Unitarios:

![Prototipo Final](http://subirimagen.me/uploads/20180702084816.test)


## Habilidades blandas

Entre las habilidadas blandas desarrolladas por las colaboradoras responsables del proyecto son:

* Planificación y manejo del tiempo: utilizamos "mainstones"
y "issues" para registrar el avance de las tareas y actividades programadas. Esto nos permitió desarrcontrolar nuestro tiemopo para desarrollar las actividades planificadas y mostrar los DEMOS correspondientes en las fechas indicada.

* Autoaprendizaje: fuimos responsables de nuestro aprendizajes, completamos las lecturas del LMS, desarrollamos los ejercicios, investigamos en diferentes páginas webs, y realizamos preguntas a nuestras compañeras y otros squads, con el fin de entender la funcionalidad de algun método y con el fin de adquirir la certeza de que el camino que habiamos tomado era el correcto. A pesar de eso, en diferentes ocaciones borramos la totalidad del código para codear de otra manera, es decir, utilizando otras funciones.

Por ejemplo, para el primer SPRINT se logró obtener los datos del JSON a traves del XHR, sin embargo en el 2do SPRINT decidimos que mejor era utilizar el FETCH.

* Las presentaciones: en cada sprint fueron entregadas con puntualidad de forma clara y precisa, frente a todas nuestras compañeras.

* Adaptabilidad: frente al tiempo corto fijado, logramos adaptarnos priorizando el desarrollo de las funcionalidades más relevantes para el proyecto.

* Solución de problemas: los pocos problemas presentados se lograron resolver con la comunicacion entre las integrantes, y con la repartición de tareas realizadas.

* Trabajo en equipo, feedback, y comunicación eficaz: hubo bastante coordinación respecto a las tareas fijadas, y  constante comunicación entregándonos feedbacks constructivos para el mejoramiento del proyecto.


## Frase célebre:

_La inteligencia consiste no solo en el conocimiento, sino también en la destreza de aplicar los conocimientos en la práctica._ 
Aristóteles


