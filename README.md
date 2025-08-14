#  Curso-Práctica: CRUD con Vue.js consumiendo REST API en CodeIgniter 4

Este proyecto es un **CRUD completo** desarrollado en Vue.js que consume una **REST API construida con CodeIgniter 4**, siguiendo la metodología del libro _"Primeros pasos con CodeIgniter 4"_ de DesarrolloLibre.

https://www.desarrollolibre.net/blog/codeigniter/curso-codeigniter-4

https://www.desarrollolibre.net/libros/primeros-pasos-codeigniter-4 https://www.desarrollolibre.net/libros/first-steps-with-codeigniter-4


---

##  Contexto y Bases del Proyecto

El libro “Primeros pasos con CodeIgniter 4” enseña desde los fundamentos del framework hasta la implementación de una API REST tipo CRUD ([leanpub.com](https://leanpub.com/getting-started-codeigniter)) y profundiza en todos los conceptos clave del framework, incluyendo migraciones, vistas, controladores, validaciones, relaciones de base de datos, carga de archivos, autenticación con Shield, integración de PayPal y mucho más :contentReference[oaicite:0]{index=0}.

En el **Capítulo 11**, se construye una API REST CRUD consumible en formatos JSON o XML, preparada para ser consumida desde el frontend :contentReference[oaicite:1]{index=1}.

El repositorio **vue-c4-crud-book-course** implementa el front hecho en Vue.js para interactuar con esa API.

---

##  Cobertura del CRUD en Vue + CI4

Este proyecto sobresale por integrar lo siguiente:

- Consumo de una REST API generada en CodeIgniter 4 (Capítulo 11 del libro) para realizar operaciones CRUD.
- Componentes en Vue.js estructurados para listar, crear, editar y eliminar registros.
- Organización clara por entidades, tal como “categorías” (inspirado también en el ejemplo del blog de DesarrolloLibre sobre CRUD en Vue + Rest API en CI4) :contentReference[oaicite:2]{index=2}.
- Buena práctica de separación de lógica (servicios/API) y presentación (componentes Vue).

---

##  Requisitos Previos

Antes de ejecutar el proyecto:

- Haber implementado una REST API CRUD en CodeIgniter 4, tal como se describe en el Capítulo 11 del libro. Asegúrate de que esté funcionando y disponible para consumo.
- Configurar correctamente endpoints, y asegurarte de que la API permita conexiones desde el frontend (CORS habilitado si aplica).

---

##  Instalación del Frontend (Vue.js)

```bash
git clone https://github.com/libredesarrollo/vue-c4-crud-book-course.git
cd vue-c4-crud-book-course
npm install
