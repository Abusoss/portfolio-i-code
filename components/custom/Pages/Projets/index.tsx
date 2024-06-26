import { Title } from "../../Title"
import { ProjetCard } from "./Card/Projet"

// Project Data:

// id: 1, title: 'Machine Virtuelle et GLPI', image: '/path/to/machine-virtuelle-et-glpi.jpg', link: '/projets/machine-virtuelle-et-glpi'
// id: 2, title: 'Orange', image: '/path/to/orange.jpg', link: '/projets/orange'
// id: 3, title: 'Snake', image: '/path/to/snake.jpg', link: '/projets/snake'
// id: 4, title: 'Switchiru', image: '/path/to/switchiru.jpg', link: '/projets/switchiru'
// id: 5, title: 'Vivo in Paris', image: '/path/to/vivo-in-paris.jpg', link: '/projets/vivo-in-paris'
// id: 6, title: 'Wordpress', image: '/path/to/wordpress.jpg', link: '/projets/wordpress'

export const Projets = () => {
  const projects = [
    { id: 1, title: 'Vivo in Paris', image: 'https://d3coo6i74goucu.cloudfront.net/7ed624dc-6186-441d-a631-e9092471cfd3.jpg?format=auto&width=500', link: '/projets/vivo-in-paris' },
    { id: 2, title: 'Orange', image: 'https://res.cloudinary.com/do9jfuuqy/image/upload/v1716432167/orange_logo_qvwc4g.jpg', link: '/projets/orange' },
    { id: 3, title: 'Machine Virtuelle et GLPI', image: 'https://res.cloudinary.com/do9jfuuqy/image/upload/v1716433142/glpi_ea5zli.png', link: '/projets/machine-virtuelle-et-glpi' },
    { id: 4, title: 'Wordpress', image: 'https://res.cloudinary.com/do9jfuuqy/image/upload/v1716433450/wordpress-589121_1280_yyu4bu.jpg', link: '/projets/wordpress' },
    { id: 5, title: 'Snake', image: 'https://res.cloudinary.com/do9jfuuqy/image/upload/v1716432564/Snake1_idpsb6.jpg', link: '/projets/snake' },
    { id: 6, title: 'Switchiru', image: 'https://res.cloudinary.com/do9jfuuqy/image/upload/v1716434537/Switchiru_rud3ao.jpg', link: '/projets/switchiru' },
  ]

  return (
    <div className="grid mx-auto px-4 py-8 sm:px-6 lg:px-8 grid-flow-row gap-20">
      <Title Title="Mes Projets" Subtitle="Découvrez mes projets personnels et professionnels." />
      <div className="grid grid-cols-[400px,1fr,400px] gap-y-20">
        <div className="grid col-start-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 place-items-center">

          {projects.map((project, key) => (
            <ProjetCard key={key} title={project.title} image={project.image} link={project.link} />
          ))}
          {/* add the Tableau-synthèse-E4.pdf as an embended pdf */}

        </div>
        <embed

          className="col-start-2 aspect-[9/11] place-self-center w-full rounded-lg shadow-lg overflow-hidden border-gray-200 border object-fill"
          src="/Tableau-synthèse-E4.pdf?zoom=50#view=FitH">
        </embed>
      </div>
    </div>
  )
}
