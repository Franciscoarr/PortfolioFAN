import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  isDarkMode = false;

  ngOnInit() {
    if (typeof window !== 'undefined') {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        this.isDarkMode = true;
        document.documentElement.classList.add('dark');
      }
    }
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    
    if (typeof document !== 'undefined') {
      if (this.isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }

  perfil = {
    nombre: 'Francisco Arrieta Navarro',
    rol: 'Programador Full Stack',
    sobreMi: 'Soy una persona proactiva, organizada y con gran capacidad de adaptación a nuevas tecnologías. Disfruto aprendiendo y enfrentándome a diferentes desafíos, siempre con la intención de mejorar y aportar valor.',
    email: 'francisarrna@gmail.com', 
    telefono: '644 31 58 98', 
    github: 'https://github.com/Franciscoarr', 
    linkedin: 'https://www.linkedin.com/in/francisco-arrieta-navarro-561279388'
  };

  experiencias = [
    {
      empresa: 'GABITEL INGENIEROS',
      puesto: 'Desarrollador Full Stack (Prácticas)', 
      fecha: 'Feb. 2026 - May. 2026', 
      descripcion: [
        'Desarrollo end-to-end de un portal interno para la gestión eficiente de vacaciones.',
        'Construcción de una interfaz reactiva e intuitiva centrada en la experiencia del empleado.',
        'Escalado de la arquitectura del servidor mediante una API RESTful robusta, garantizando la integridad de los datos.'
      ],
      tecnologias: ['HTML5', 'CSS3', 'TypeScript', 'Angular', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL']
    },
    {
      empresa: 'DATAGRAM',
      puesto: 'Desarrollador Full Stack (Prácticas)',
      fecha: 'Feb. 2025 - Mar. 2025',
      descripcion: [
        'Construcción integral de una plataforma e-learning enfocada en la oferta y gestión de cursos online.',
        'Diseño y estructuración de la base de datos relacional orientada al rendimiento.',
        'Implementación de lógica de negocio compleja en el backend para asegurar una experiencia fluida y escalable.'
      ],
      tecnologias: ['HTML5', 'CSS3', 'JavaScript', 'C#', 'ASP.NET MVC', 'SQL Server'] 
    }
  ];

  habilidadesTecnicas = [
    { 
      categoria: 'Front-end', 
      tecnologias: [
        { nombre: 'HTML5', icono: 'devicon-html5-plain colored' },
        { nombre: 'CSS3', icono: 'devicon-css3-plain colored' },
        { nombre: 'JavaScript', icono: 'devicon-javascript-plain colored' },
        { nombre: 'TypeScript', icono: 'devicon-typescript-plain colored' },
        { nombre: 'Angular', icono: 'devicon-angularjs-plain colored' },
        { nombre: 'React', icono: 'devicon-react-original colored' },
        { nombre: 'Bootstrap', icono: 'devicon-bootstrap-plain colored' }
      ] 
    }, 
    { 
      categoria: 'Back-end', 
      tecnologias: [
        { nombre: 'Java', icono: 'devicon-java-plain colored' },
        { nombre: 'C#', icono: 'devicon-csharp-plain colored' },
        { nombre: 'Python', icono: 'devicon-python-plain colored' },
        { nombre: 'C++', icono: 'devicon-cplusplus-plain colored' },
        { nombre: 'Kotlin', icono: 'devicon-kotlin-plain colored' },
        { nombre: 'Lua', icono: 'devicon-lua-plain colored' },
        { nombre: 'Node.js', icono: 'devicon-nodejs-plain colored' },
        { nombre: 'Spring Boot', icono: 'devicon-spring-original colored' },
        { nombre: '.NET Core', icono: 'devicon-dotnetcore-plain colored' }
      ] 
    }, 
    { 
      categoria: 'Bases de Datos', 
      tecnologias: [
        { nombre: 'SQL Server', icono: 'devicon-microsoftsqlserver-plain colored' },
        { nombre: 'MySQL', icono: 'devicon-mysql-plain colored' },
        { nombre: 'PostgreSQL', icono: 'devicon-postgresql-plain colored' },
        { nombre: 'MongoDB', icono: 'devicon-mongodb-plain colored' }
      ] 
    }, 
    { 
      categoria: 'Herramientas', 
      tecnologias: [
        { nombre: 'Git', icono: 'devicon-git-plain colored' },
        { nombre: 'GitHub', icono: 'devicon-github-original' }, 
        { nombre: 'Docker', icono: 'devicon-docker-plain colored' },
        { nombre: 'Maven', icono: 'devicon-maven-plain colored' },
        { nombre: 'JUnit', icono: 'devicon-junit-plain colored' },
        { nombre: 'Apache Kafka', icono: 'devicon-apachekafka-original colored' }
      ] 
    }
  ];

  proyectosPrincipales = [
    {
      nombre: 'RedSocialMEAN', 
      descripcion: [
        'Arquitectura y desarrollo completo de una red social SPA (Single Page Application).',
        'Implementación de API RESTful y sistema de autenticación seguro.',
        'Gestión dinámica del estado en el cliente aprovechando al máximo el ecosistema JavaScript.'
      ],
      tecnologias: ['MongoDB', 'Express', 'Angular', 'Node.js'],
      enlace: 'https://github.com/Franciscoarr/RedSocialMEAN', 
      imagen: 'assets/redsocialmean.jpg' 
    },
    {
      nombre: 'Simulador Mundial 2026', 
      descripcion: [
        'Motor de simulación algorítmica para el Mundial 2026.',
        'Implementación de complejas estructuras de datos para las simulaciones.',
        'Cálculo dinámico de estadísticas, generación de fases de grupos y cruces eliminatorios.'
      ],
      tecnologias: ['Python'], 
      enlace: 'https://github.com/Franciscoarr/SimuladorMundial2026', 
      imagen: 'assets/mundial.jpg'
    },
    {
      nombre: 'Espalatro', 
      descripcion: [
        'Mod integral para el videojuego roguelike de cartas Balatro.',
        'Programación de scripts en Lua para alterar, expandir y mejorar el game loop original.',
        'Integración de nuevas funcionalidades y mecánicas manteniendo el balance del juego base.'
      ],
      tecnologias: ['Lua'], 
      enlace: 'https://github.com/Franciscoarr/Espalatro', 
      imagen: 'assets/espalatro.jpg'
    },
    {
      nombre: 'Gesture Media Controller', 
      descripcion: [
        'Herramienta interactiva que procesa entradas en tiempo real mediante visión por computadora.',
        'Interpretación de gestos manuales para traducirlos en comandos multimedia.',
        'Foco absoluto en la optimización de latencia y experiencia de usuario inmersiva.'
      ],
      tecnologias: ['Python'], 
      enlace: 'https://github.com/Franciscoarr/Gesture-Media-Controller', 
      imagen: 'assets/gesture.jpg'
    }
  ];

  formacion = [
    { titulo: 'Grado Superior en Desarrollo de Aplicaciones Multiplataforma', centro: 'I.E.S La Marisma', fecha: '2024 - 2026' }, 
    { titulo: 'Ingeniería Informática (Estudios parciales)', centro: 'Universidad de Huelva (UHU)', fecha: '2022 - 2024' } 
  ];

  idiomas = [
    { idioma: 'Inglés', nivel: 'Intermedio Acreditable (IELTS B1)' },
    { idioma: 'Francés', nivel: 'Intermedio Acreditable (DELF B1)' } 
  ];

  aprendiendo = ['Python', 'React', 'Arquitecturas Escalables'];
}