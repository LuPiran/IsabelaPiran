# Modelo 3D na seção Contato

## Formato usado no site

O caminho do arquivo fica em **`src/content/site.js`** → `contactSection.model3d.modelPath`.

O padrão atual é **`/tooth_3d.obj`** (arquivo em **`public/tooth_3d.obj`**).

O componente **`ToothCanvas.jsx`** carrega o **OBJ** com `OBJLoader` do Three.js, faz o **parse do texto no cliente** (um único download) e aplica um **material padrão** (`MeshStandardMaterial`), para não depender do arquivo **`Dente.mtl`** referenciado no OBJ.

Se no futuro você quiser usar texturas do `.mtl`, coloque o **`.mtl`** (e texturas) em `public/` com os mesmos nomes/pastas que o Blender exportou e avise para ajustarmos o carregamento.

## Sobre `.c4d` e outros formatos

- **`.c4d`** (Cinema 4D) **não** roda no navegador — use exportação **OBJ** ou **glTF/GLB**.
- **OBJ** é texto; arquivos grandes podem demorar um pouco na primeira carga.

## Ajustes visuais

- Escala ou posição: dá para envolver o modelo em `<group scale={[...]}>` em `ToothCanvas.jsx` ou afinar o `<Center>`.
- Cor do dente: constante `toothMaterial` em `ToothCanvas.jsx`.
