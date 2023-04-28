import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';
import { AppConfig } from '@/utils/AppConfig';


const { author } = AppConfig;

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>{author}</GradientText> 👋
        </>
      }
      description={
        <>

        You can find below some of my projects, mainly web projects. 
        I also worked on mobile apps  and video games projects.

        I'm learning about cybersecurity and IA too.
        I write articles sometime about what I learn with cool illustration projects.

          {/* <a className="text-cyan-400 hover:underline" href="/">
            consectetur
          </a> */}
        </>
      }
      // avatar={
      //   <img
      //     className="h-80 w-64"
      //     src="/assets/images/avatar.svg"
      //     alt="Avatar image"
      //     loading="lazy"
      //   />
      // }
      socialButtons={
        <>
          {/* <a href="/">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a> */}
          {/* <a href="/">
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a> */}
          <a href="/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
