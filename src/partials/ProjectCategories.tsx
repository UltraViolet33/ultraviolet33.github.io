// import { Tags, ColorTags } from "astro-boilerplate-components";

import {  ColorTags } from "astro-boilerplate-components";

 type ITagsProps = {
  color: Values<typeof ColorTags>;
  children: ReactNode;
};


const Tags = ({color,children}: ITagsProps) => <div className="rounded-md px-2 py-1 text-xs font-semibold" >
  
  {children}
</div>

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
      return <Tags style={{color:"black"}} color={ColorTags[getColor()]}>{category}</Tags>;
    })}
  </>
);

export { ProjectCategories };
