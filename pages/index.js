import Head from "next/head";
import { BsChatFill } from "react-icons/bs";
import { DiCode } from "react-icons/di";
import { FaFlagCheckered, FaGraduationCap, FaTools } from "react-icons/fa";
import { GrContactInfo } from "react-icons/gr";
import { RiUserVoiceFill } from "react-icons/ri";
import { CoverText } from "../components/CoverText";
import { ExperienceBox } from "../components/ExperienceBox";
import { Header } from "../components/Header";
import Layout from "../components/Layout";
import { LeftColumn } from "../components/LeftColumn";
import { RightColumn } from "../components/RightColumn";
import { SkillsItem } from "../components/SkillsItem";
import { SkillsList } from "../components/SkillsList";

export default function Home() {
  return (
    <>
      <Head>
        <title>Carmen María Sánchez Tolentino - Portfolio</title>
        <link rel="icon" href="/favicon-96x96.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <LeftColumn>
          <Header
            name="Carmen María Sánchez Tolentino"
            position="Programadora"
            profilePicture="/img/foto 2x2.JPG"
          />
          <CoverText>
            Hola soy Carmen, soy programadora. Me gusta mucho desarrollar
            aplicaciones de escritorio, web y moviles. Mi parte favorita de 
            ser programadora es aprender siempre algo nuevo para entregarle 
            un producto de calidad al cliente.
          </CoverText>
          <ExperienceBox
            date="Verano 2018"
            position="Pasante de Desarrollo de Software"
            place="Altice Dominicana"
          >
            Desarrollo de interfaces para uso interno de la empresa
          </ExperienceBox>
          <ExperienceBox
            date="Agosto-Noviembre 2019"
            position="Pasante en Redes"
            place="Altice Dominicana"
          >
            Colocacion de fibras opticas en planos virtuales de la empresa
          </ExperienceBox>
          <ExperienceBox
            date="Febrero-Julio 2020"
            position="Pasante en Desarrollo de Software"
            place="Neural Technology Solutions"
          >
            Desarrollo y mantenimiento de aplicacion de escritorio
          </ExperienceBox>
          <ExperienceBox
            date="Julio 2020-Actualidad"
            position="TraineeSoftware Developer"
            place="okkralabs Inc"
          >
            Desarrollo y mantenimiento de pagina web.
          </ExperienceBox>
        </LeftColumn>
        <RightColumn>
          <SkillsList name="Educación" icon={FaGraduationCap}>
            <SkillsItem date="Agosto 2020" institution="Instituto Tecnológico de las Américas (ITLA)">
              Tecnologia en Desarrollo De Software
            </SkillsItem>
          </SkillsList>
          <SkillsList name="Cursos">
            <SkillsItem date="2017" institution="Instituto Tecnológico de las Américas (ITLA)">
            Introducción a la programación C++
            </SkillsItem>
            <SkillsItem date="2018" institution="Instituto Tecnológico de las Américas (ITLA)">
              Mysql para Programadores
            </SkillsItem>
            <SkillsItem date="2018" institution="Instituto Tecnológico de las Américas (ITLA)">
             Java Básico
            </SkillsItem>
            <SkillsItem date="2018" institution="Instituto Tecnológico de las Américas (ITLA)">
              Java Intermedio
            </SkillsItem>
            <SkillsItem date="2019" institution="Instituto Tecnológico de las Américas (ITLA) y MMujer">
              Programación web html & php
            </SkillsItem>
            <SkillsItem date="2019" institution="Instituto Tecnológico de las Américas (ITLA)">
            -Diplomado de Inteligencia Artificial
            </SkillsItem>
            </SkillsList>
          <SkillsList name="Contacto" icon={GrContactInfo}>
            <SkillsItem>+1-829-872-0728</SkillsItem>
            <SkillsItem>
              <a
                href="mailto:carmenmasato@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                carmenmasato@gmail.com
              </a>
            </SkillsItem>
            <SkillsItem>
              Calle 2 Edif. Shantal II No. 25, El Millón.
            </SkillsItem>
          </SkillsList>
          <SkillsList name="Lenguajes y Frameworks" icon={DiCode}>
            <SkillsItem>React</SkillsItem>
            <SkillsItem>Node.js</SkillsItem>
            <SkillsItem>JavaScript</SkillsItem>
            <SkillsItem>MongoDB</SkillsItem>
            <SkillsItem>C++</SkillsItem>
            <SkillsItem>C#</SkillsItem>
            <SkillsItem>Java</SkillsItem>
            <SkillsItem>HTML/CSS</SkillsItem>
            <SkillsItem>PHP</SkillsItem>
            <SkillsItem>SQL</SkillsItem>
          </SkillsList>
          <SkillsList name="Habilidades técnicas" icon={FaTools}>
            <SkillsItem>SCRUM</SkillsItem>
          </SkillsList>
          <SkillsList name="Habilidades Blandas" icon={RiUserVoiceFill}>
            <SkillsItem>Comunicación efectiva</SkillsItem>
            <SkillsItem>Facilidad para trabajos en equipos</SkillsItem>
            <SkillsItem>Actitud de liderazgo</SkillsItem>
            <SkillsItem>Creatividad para resolver problemas</SkillsItem>
          </SkillsList>
          <SkillsList name="Intereses" icon={FaFlagCheckered}>
            <SkillsItem>Inteligencia artificial</SkillsItem>
            <SkillsItem>Desarrollo de aplicaciones moviles</SkillsItem>

          </SkillsList>
          <SkillsList name="Idiomas" icon={BsChatFill}>
            <SkillsItem>Inglés (Avanzado)</SkillsItem>
            <SkillsItem>Español (Nativo)</SkillsItem>
            <SkillsItem>Francés (Basico)</SkillsItem>
          </SkillsList>
        </RightColumn>
      </Layout>
    </>
  );
}
