import { GradientText, Project, Section } from "astro-boilerplate-components";
import type { MarkdownInstance } from "astro";
import type { IFrontmatter } from "astro-boilerplate-components";
import { ProjectCategories } from "./ProjectCategories";

type Projects = {
  projects: Array<any>;
};

const ProjectList = (props: Projects) => (
  <Section
    title={
      <div className="flex items-baseline justify-between">
        <div>
          {props.projects.length > 3 ? "More " : "Recent "}
          <GradientText>Projects</GradientText>
        </div>
        {props.projects.length <= 3 && (
          <div className="text-sm">
            <a href="/projects">View more Projects →</a>
          </div>
        )}
      </div>
    }>
    <div className="flex flex-col gap-6">
      {props.projects.map(project => (
        <Project
          name={project.name}
          description={project.description}
          img={{
            src: `/assets/images/projects/${project.image_link}`,
            // src: ``,
            alt: "",
          }}
          link={project.github_link}
          category={<ProjectCategories  categories={project.categories} />}
        />
      ))}

      {/* <Project
        name="Project 1"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim."
        link="/"
        img={{
          src: '/assets/images/project-web-design.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Astro.js</Tags>
            <Tags color={ColorTags.LIME}>Web design</Tags>
            <Tags color={ColorTags.SKY}>Tailwind.css</Tags>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags>
          </>
        }
      />
      <Project
        name="Project 2"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim."
        link="/"
        img={{ src: '/assets/images/project-fire.png', alt: 'Project Fire' }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>Next.js</Tags>
            <Tags color={ColorTags.EMERALD}>Blog</Tags>
            <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
          </>
        }
      />
      <Project
        name="Project 3"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim."
        link="/"
        img={{ src: '/assets/images/project-maps.png', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Astro.js</Tags>
            <Tags color={ColorTags.INDIGO}>Bootstrap</Tags>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags>
          </>
        }
      /> */}
    </div>
  </Section>
);

export { ProjectList };
