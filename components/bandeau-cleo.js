

export function BandeauCleo() {
    const texts = [
       "Consommer autrement, participer à une mode plus responsable tout en ayant un meilleur impact sur l’environnement, avec Clementine est là, la lutte contre le gaspillage textile est possible à travers divers moyens",
       "L’utilisation principalement de tissus récupérés via des ateliers, stages et cours de couture afin d’éveiller sur le sujet environnemental et permettre aux personnes de découvrir la couture, d’allier créativité et zéro déchet",
       "Mais aussi via la fabrication de créations “upcyclées” , des pièces et accessoires uniques, originales et tendances",
       "Enfin éviter de jeter en réparant, customisant ou upcyclant les pépites se trouvant dans nos gardes robes !"]

    return (
        <section className="bg-beach-green">
            <div className="flex flex-wrap content-center">
           {texts.map((txt, i) =>
      <div key={i} className="sm:w-1/2 lg:w-1/4 lg:flex-shrink text-sm py-8 px-10 text-white text-center">{txt}</div>
    )}
    </div>
        </section>
    )
}