import {Forfait} from './forfait';

export const FORFAITS: Forfait [] = [

    {
        destination: 'Cartagena, Colombia',
        villeDepart: 'Montréal',
        hotel: {
            nom: 'Hotel Boutique Casona del Colegio',
            adresse: 'Carrera 6#32-84 Calle del Colegio, Centro, 130001',
            etoiles: 5,
            nmChambres: 13,
            photo: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/184364758.webp?k=d6bf1c4dbe307c46b237793e363f973cdcf466b39bb9e1195f9d504637869b27&o=",
            caracteristiques: [
                "piscine",
                "free wi-fi",
                "Air conditioning",
                "animaux acceptés",
                "Navette aéroport"
            ],
        },
        dateDepart: '09/11/2020',
        dateRetour: '14/11/2020',
        prix: 1908,
        rabais: 100,
        forfaitVedette: true
    },
    {
        destination: 'Bogota, Colombia',
        villeDepart: 'Montréal',
        hotel: {
            nom: 'Grand Hyatt Bogota',
            adresse: 'Calle 24 A, 57-60, 111321',
            etoiles: 5,
            nmChambres: 372,
            photo: "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2018/10/05/1112/Grand-Hyatt-Bogota-P039-Fachada-Exterior-Noche.jpg/Grand-Hyatt-Bogota-P039-Fachada-Exterior-Noche.16x9.jpg?imwidth=1280",
            caracteristiques: [
                "piscine",
                "free wi-fi",
                "Bar / lounge",
                "Navette aéroport",
                "Fitness Centre with Gym / Workout Room"
            ],
        },
        dateDepart: '09/11/2020',
        dateRetour: '14/11/2020',
        prix: 938,
        rabais: 100,
        forfaitVedette: true

    },
    {
        destination: 'Cartagena, Colombia',
        villeDepart: 'Montréal',
        hotel: {
            nom: 'Sofitel Legend Santa Clara',
            adresse: 'Calle Del Torno 39-29, 130003',
            etoiles: 5,
            nmChambres: 372,
            photo: "https://media-cdn.tripadvisor.com/media/photo-m/1280/1c/1a/6b/23/exterior-view.jpg",
            caracteristiques: [
                "piscine",
                "Business Centre avec acces Internet",
                "Bar / lounge",
                "Navette aéroport",
                "Fitness Centre with Gym / Ocean view"
            ],
        },
        dateDepart: '09/11/2020',
        dateRetour: '14/11/2020',
        prix: 1126,
        rabais: 100,
        forfaitVedette: false

    },
    {
        destination: 'Bogota, Colombia',
        villeDepart: 'Montréal',
        hotel: {
            nom: 'W Bogota',
            adresse: 'Avenida Carrera 9 #115 - 30, 130003',
            etoiles: 5,
            nmChambres: 372,
            photo: "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2018/10/05/1112/Grand-Hyatt-Bogota-P039-Fachada-Exterior-Noche.jpg/Grand-Hyatt-Bogota-P039-Fachada-Exterior-Noche.16x9.jpg?imwidth=1280",
            caracteristiques: [
                "piscine",
                "Business Centre avec acces Internet",
                "Bar / lounge",
                "Navette aéroport",
                "Fitness Centre with Gym / Ocean view"
            ],
        },
        dateDepart: '09/11/2020',
        dateRetour: '14/11/2020',
        prix: 1126,
        rabais: 100,
        forfaitVedette: true

    }
]
