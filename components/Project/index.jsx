import { RichText } from "@components/RichText";
import Image from "next/image";

export const Project = ({ project }) => {
  return (
    <div
      className="w-full sm:w-72 md:w-1/4 lg:w-230 p-3 flex flex-col"
      key={project.sys.id}
      style={{ position: "relative" }}
    >
      <Image
        className="rounded-2xl"
        src={project.image.url}
        alt={project.image.description}
        width="400px"
        height="200px"
        objectFit="cover"
        priority={true}
      />
      <div>
        <h3>{project.title}</h3>
        <RichText raw={project.description.json} />
      </div>
    </div>
  );
};
