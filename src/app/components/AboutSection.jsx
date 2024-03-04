"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>SQLserver</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>.Net Core</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Instituto Nacional de Formacion Tecnico Professional Infotep</li>
        <li>Universidad Dominicana O&M</li>
        <li>FreeCodeCamp</li>
        <li>Microsoft</li>
        <li>Likedin</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Front End Developement Libraries</li>
        <li>AWS Cloud Practitioner</li>
        <li>javascript Algorithms And Data Structures</li>
        <li>Control de Versiones Git</li>
        <li>Fundamentos Profecionales Del Desarrollo De software</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre Mi</h2>
          <p className="text-base lg:text-lg">
            Soy un desarrollador web  con pasión por crear
            Aplicaciones web interactivas y responsivas. tengo experiencia
            trabajando con JavaScript, React, Redux, Node.js, Express, SQL,
            Sequelize, HTML, CSS, .Net y Git. Aprendo rápido y siempre estoy
            Buscando ampliar mis conocimientos y habilidades. y Estoy emocionado
            de trabajar con otros para crear aplicaciones increíbles.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
