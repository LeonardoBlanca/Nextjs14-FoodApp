"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const imageInputRef = useRef();

  function handleClick() {
    imageInputRef.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="The image selected by the user"
              fill
            />
          )}
        </div>
        {/* Este className oculta o botão padrão para personalizarmos o nosso */}
        <input
          className={classes.input}
          type="file"
          name={name}
          id={name}
          accept="image/png, image/jpg"
          ref={imageInputRef}
          onChange={handleImageChange}
          required
        />

        <button className={classes.button} type="button" onClick={handleClick}>
          Pick an image
        </button>
      </div>
    </div>
  );
}

/* ===== Ocultando o input Original ===== 
Este className oculta o botão padrão para personalizarmos o nosso */

/* ===== Personalizando o Botão =====
    Está colocando o type para button porque senão ele atribui por padrão o submit (e envia o formulário).
    Nosso botão personalizado deve ter a mesma função que o input oculto acima via css
    Lembrando que devemos usar o "use client" para qualquer event handler.
    Estamos usando o useRef para que o botão personalizado acesse o input.
*/

/* ===== Mostrar Miniatura da imagem carregada
O useState vai ser usado para mostrar o preview da imagem que foi carregado
A função handleImageChange recebe um evento, que é a imagem do input.
O filereader parece que é do próprio JS
*/

/* ===== Image Preview Div
Na classe preview, ele colocou o fill porque não sabe o tamanho da imagem que a pessoa vai enviar.

*/
