import React from "react";
import { Layout } from "../components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function About() {
  return (
    <Layout>
      <div className="text-center p-10">
        <h1 className="font-bold text-2xl my-4">Acerca de</h1>
        <p className="text-gray-300">
        ¡Hola! Mi nombre es German Adames, y soy Inspector Técnico Electricista Contratista. 
        Estoy emocionado de presentarles una nueva aplicación que he desarrollado para ayudarnos a todos a simplificar la tarea de encontrar el medidor adecuado con su coordenada.
        Esta herramienta ha sido diseñada con el propósito de facilitar la búsqueda y localización de los medidores en un área determinada. Si bien puede ser una tarea tediosa y complicada, esta aplicación la hace más fácil y eficiente para todos los usuarios.
        El objetivo principal de esta herramienta es contribuir a la facilidad de encontrar medidores y sus coordenadas para que pueda ahorrar tiempo y recursos en su trabajo diario. La aplicación es fácil de usar y proporciona resultados precisos y actualizados.
        Estoy emocionado de compartir esta herramienta con todos ustedes, y espero que les ayude a simplificar su trabajo y mejorar su eficiencia. ¡Gracias por utilizar esta herramienta y no dude en ponerse en contacto conmigo si necesita más información o tiene alguna pregunta!


        </p>
        <a
          href="https://www.instagram.com/gleonard.py/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-gray-500 margin: 10"
        >
          <FontAwesomeIcon icon={faInstagram} size="3x" />
        </a>
      </div>
    </Layout>
  );
}

export default About;
