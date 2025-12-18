import type { ReactElement } from "react";
import { DiCss3, DiHtml5, DiJava, DiJsBadge, DiReact } from "react-icons/di";
import { SiCplusplus, SiDocker, SiExpress, SiGit, SiMongodb, SiNodedotjs, SiPython, SiSpringboot, SiTypescript, SiVaadin, SiVitest } from "react-icons/si";

export const icons = new Map<string, ReactElement>();

icons.set("Java", <DiJava/>);
icons.set("C++", <SiCplusplus/>);
icons.set("Python", <SiPython/>);

icons.set("Git", <SiGit/>);

icons.set("React", <DiReact/>);
icons.set("JavaScript", <DiJsBadge/>);
icons.set("TypeScript", <SiTypescript/>);

icons.set("MongoDB", <SiMongodb/>);
icons.set("Express", <SiExpress/>);
icons.set("Node", <SiNodedotjs/>);

icons.set("HTML", <DiHtml5/>);
icons.set("CSS", <DiCss3/>);

icons.set("Springboot", <SiSpringboot/>);
icons.set("Docker", <SiDocker/>);
icons.set("Vaadin", <SiVaadin/>);



icons.set("Vitest", <SiVitest/>);