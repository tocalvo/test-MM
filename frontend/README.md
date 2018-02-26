# TestMm

Projecto generado con [Angular CLI](https://github.com/angular/angular-cli) version 1.7.1. al que se ha añadido Ngrx.

Tras analizar diversos tutoriales/ejemplos y ver la diversidad en cuanto a organización del código, he optado por la solución que ofrece el equipo de ngrx pero modularizando la sección de teléfonos.

He empezado creando una app básica de angular con el cli, he añadido ngrx y he creado un módulo autónomo de forma que sea facilmente acoplarlo y desacoplarlo. El módulo de Phones expone sus componentes, define su estado, sus efectos, reducers y los añade a la aplicación a la que se acopla.
Tiene su propia carpeta theme con los estilos reusables dentro del propio módulo, en este pequeño ejemplo solo tiene colores.

Este módulo define un estado llamado PhonesStates que solo contiene un listado de teléfonos. Acciones para cargar, avisar de cuando están cargados o ha dado error. Un service para llamar a la api. Un efecto para llamar al service cuando se produce la acción y un reducer para almacenar el resultado de la llamada al store.

He separado la representación de la lógica de negocio (en este caso sencillo  solo es llamar a la acción) para seguir con el mismo estilo que se sigue en el proyecto de thor, creando un componente "listo" llamado phonesContainer que se encarga de la lógica de negocio y que solo contiene componentes "tontos" que se encargan de la visualización de los datos obtenidos, de forma que delega la representación de esa lista a un componente "tonto" llamado phoneListComponente, y luego la representación del detalle al otro componente "tonto" phoneDetailComponent

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

