import { Tags, ColorTags } from "astro-boilerplate-components";

type Categories = {
  categories: Array<string>;
};

const colorsArray = Object.keys(ColorTags);

const getColor = () => {
  let randomIndex = Math.floor(Math.random() * colorsArray.length);
  randomIndex = randomIndex + 1 > colorsArray.length - 1 ? 0 : randomIndex + 1;
  return colorsArray[randomIndex];
};

const ProjectCategories = (props: Categories) => (
  <>
    {props.categories.map(category => {
      return <Tags color={ColorTags[getColor()]}>{category}</Tags>;
    })}
  </>
);

export { ProjectCategories };
