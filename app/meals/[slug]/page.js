import Image from "next/image";
import classes from "./page.module.css";
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";

// Todo componente exporta um params
export default function MealsDetailPage({ params }) {
  // Como passamos o slug para esta função?
  // Usamos o slug do objeto params.
  // Agora o meu objeto se chama meal, tenho que passar meal no código abaixo.
  // Para saber qual nome usar, veja qual nome você usou no banco de dados.
  const meal = getMeal(params.slug);

  // Se o prato não existir, mostre a página de erro
  // Isso vai impedir o componente de carregar o resto.
  // Ele mostra a página de erro mais próxima.
  if (!meal) {
    notFound();
  }
  // Formatar o conteúdo, substituindo \n por <br>
  meal.instructions = meal.instructions.replace(/\n/g, "<br />");

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} fill alt={meal.title} />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
}
