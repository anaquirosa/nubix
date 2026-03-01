import type { ContactInformation, Media, Feature, Testimonials } from "../types/type";
import { FacebookIcon } from "../components/footer/FacebookIcon";
import { XIcon } from "../components/footer/x-icon";
import { InstagramIcon } from "../components/footer/instagram-icon";

export const contactInformation: ContactInformation[] = [
  {
    text: "Tus archivos siempre contigo. Guarda, comparte y colabora de forma sencilla y segura con Nubix.",
    iconUrl: "/images/icon-location.svg",
    alt: "location",
  },
  {
    text: "+34 000 000 000",
    iconUrl: "/images/icon-phone.svg",
    alt: "icon phone",
  },
  {
    text: "hola@nubix.com",
    iconUrl: "/images/icon-email.svg",
    alt: "icon email",
  },
];

export const pages: string[] = [
  "Sobre nosotros",
  "Trabajos",
  "Noticias",
  "Blog",
];

export const conditions: string[] = [
  "Contacto",
  "Términos y condiciones",
  "Privacidad",
];

export const medias: Media[] = [
  {
    text: 'facebook',
    icon: <FacebookIcon />,
  },
  {
    text: 'x',
    icon: <XIcon />,
  },
  {
    text: 'instagram',
    icon: <InstagramIcon />,
  }
]

export const features: Feature[] = [
    {
        title: "Accede a tus archivos, en cualquier lugar",
        description: "La posibilidad de usar un smartphone, tablet o computadora para acceder a tu cuenta significa que tus archivos te acompañan a todas partes.",
        iconURL: "/images/icon-access-anywhere.svg",
    },
    {
        title: "Seguridad en la que puedes confiar",
        description: "La autenticación en dos pasos y la encriptación controlada por el usuario son solo algunas de las funciones de seguridad que ofrecemos para proteger tus archivos.",
        iconURL: "/images/icon-security.svg",
    }, 
    {
        title: "Colaboración en tiempo real",
        description: "Comparte archivos y carpetas de manera segura con amigos, familiares y colegas para colaborar en tiempo real. No se necesitan adjuntos de correo electrónico.",
        iconURL: "/images/icon-collaboration.svg",
    }, 
    {
        title: "Almacena cualquier tipo de archivo",
        description: "Ya sea que compartas fotos de vacaciones o documentos de trabajo, Fylo te cubre, permitiendo que todos los tipos de archivos se almacenen y compartan de forma segura.",
        iconURL: "/images/icon-any-file.svg",
    },
]

export const testimonials : Testimonials[] = [
    {
        name: "Francisco Lozano",
        role: "RRHH, Arco",
        image: "/images/profile-1.jpg",
        quote: "Desde que implementamos Fylo, nuestro equipo puede compartir archivos y colaborar en tiempo real sin perder un segundo. La productividad se ha disparado.",
    }, 
    {
        name: "José Manuel Noguera",
        role: "Arquitecto, Basalto",
        image: "/images/profile-2.jpg",
        quote: "Fylo nos ha dado la tranquilidad de que todos nuestros documentos están seguros y accesibles desde cualquier dispositivo. Ya no perdemos tiempo buscando archivos.",
    },
    {
        name: "Sara Pérez", 
        role: "Responsable Calidad, El Pozo", 
        image: "/images/profile-3.jpg",
        quote: "Colaborar con socios y clientes nunca había sido tan sencillo. Fylo centraliza todo y nos permite trabajar de manera más eficiente y organizada.",
    }
]