import sql from 'better-sqlite3';

const db = sql('meals.db')

export default async function getMeals(){
    await new Promise((resolve) => setTimeout(resolve, 5000));

    // throw new Error('Loading Meals Failed');
    return db.prepare('SELECT * FROM meals').all(); 
}


// ========== Cuidado com Valores Dinâmicos ==========
export function getMeal(slug){
    // Colocamos o ? para evitar SQL Injection. Usamos o método get e passamos o slug aqui.
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}