# Mi App Supabase

Proyecto básico que conecta una aplicación con una base de datos en la nube usando Supabase. Permite registrar estudiantes con nombre y carrera.

---

## Tecnologías utilizadas

* Node.js
* JavaScript
* Supabase
* HTML

---

## Funcionalidades

* Insertar estudiantes (nombre y carrera)
* Consultar estudiantes desde la base de datos
* Formulario web para registrar datos
* Uso de seguridad con RLS

---

## Estructura del proyecto

```
mi-app-supabase/

index.js
index.html
package.json
README.md
```

---

## Cómo ejecutar el proyecto

1. Clonar repositorio

```
git clone https://github.com/(https://github.com/adrianfranciscobarbosasalazar-pixel/mi-app-supabase.git)/mi-app-supabase.git
cd mi-app-supabase
```

2. Instalar dependencias

```
npm install
```

3. Ejecutar con Node

```
node index.js
```

4. Ejecutar frontend

No abrir con file://

Usar servidor local:

```
npx serve
```

Abrir en navegador:

```
[http://localhost:3000](http://127.0.0.1:5500/index.html)
```

---

## Base de datos (Supabase)

Tabla: estudiantes

* id → uuid o int
* nombre → text
* carrera → text

---

## Seguridad (RLS)

Para permitir acceso se usan estas policies:

SELECT

```
create policy "lectura publica estudiantes"
on estudiantes
for select
to public
using (true);
```

INSERT

```
create policy "insert publico"
on estudiantes
for insert
to public
with check (true);
```

---

## Problemas comunes

* Error 401 → faltan policies en Supabase
* Datos vacíos → RLS bloqueando lectura
* Error file:// → usar servidor local

---

## Autor

Adrian Francisco Barbosa Salazar

---

## Descripción

Este proyecto muestra una conexión básica entre una aplicación, una base de datos y un formulario web usando Supabase.
