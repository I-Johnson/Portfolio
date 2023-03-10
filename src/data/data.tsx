import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  // OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Johnson Subedi',
  description: "Everything you can scrape out of me",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Johnson Subedi.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Danville, KY based <strong className="text-stone-100">Student</strong>, currently studying
        at <strong className="text-stone-100">Centre College</strong> majoring in Computer Science and Mathematics and 
        a minor in Data Science
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training at <strong className="text-stone-100">Gym</strong>,
        juggling a <strong className="text-stone-100">Soccer</strong> ball, exploring and learning about new{' '}
        <strong className="text-stone-100">Technology</strong> or listening to <strong className="text-stone-100">80s </strong>
        Music.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am interested in learning about VC, investements, and HFTs.
                I love playing poker, watching Formula-1, listening to Naval Ravikant, Chamath Palihapitiya, and All in Podcast.`,
  aboutItems: [
    {label: 'Location', text: 'Danville, KY', Icon: MapIcon},
    {label: 'Age', text: '19', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Nepali', Icon: FlagIcon},
    {label: 'Interests', text: 'Computers, Movies, Soccer', Icon: SparklesIcon},
    {label: 'Study', text: 'Centre College', Icon: AcademicCapIcon},
    // {label: 'Employment', text: 'Instant Domains, inc.', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Nepali',
        level: 10,
      },
      {
        name: 'Hindi',
        level: 7,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 5,
      },
      {
        name: 'C++',
        level: 3,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Data Science',
    skills: [
      {
        name: 'Python',
        level: 8,
      },
      {
        name: 'R',
        level: 6,
      },
      {
        name: 'SQL',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Decentralized Internet', // Project 1
    description: 'Article I wrote after binging Silicon Valley TV series in 2020',
    url: 'https://www.linkedin.com/pulse/decentralized-internet-johnson-subedi/?trackingId=pd%2BPQ8iPQmSpNGuvcZx3lg%3D%3D',
    image: porfolioImage1,
  },
  {
    title: 'Regression', // Project 2
    description: 'Applying different regression on the data available on the internet.',
    url: 'https://github.com/I-Johnson/Regression',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3', // Project 3
    description: 'Give a short description of your project here.',
    url: 'https://www.johnson.com.np/',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4', // Project 4
    description: 'Give a short description of your project here.',
    url: 'https://www.johnson.com.np/',
    image: porfolioImage4,
  },
  {
    title: 'Time Series Analysis', // Project 5
    description: 'Observation on Covid-19, Apple and Amazon Stock data over the course of time.',
    url: 'https://github.com/I-Johnson/Time_Series_Analysis',
    image: porfolioImage5,
  },
  {
    title: 'Goalsetter App', // Project 6
    description: 'Used MERN stack and Redux where user can Create, Read, Update and Delete their goals.',
    url: 'https://goalsetterjohnson.herokuapp.com/',
    image: porfolioImage6,
  },
  {
    title: 'Exploratory Data Analysis', // Project 7
    description: 'Stackoverflow Developer Survey 2020 and 2018 data visaualization using Python and R',
    url: 'https://www.kaggle.com/code/johnsonsubedi/sof-developers-survey-2020/notebook',
    image: porfolioImage7,
  },
  {
    title: 'Finance.py', // Project 8
    description: 'Using Python for Finance. Visualizing and manipulating the stocks data on internet and trying to find any insights that might be helpful.',
    url: 'https://github.com/I-Johnson/Finance.py',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9', // Project 9
    description: 'Give a short description of your project here.',
    url: 'https://www.johnson.com.np/',
    image: porfolioImage9,
  },
  {
    title: 'AuraED', // Project 10
    description: 'Non-Profit organization mentoring underprivileged Nepalese children with technology, about technology.',
    // url: 'https://auraed.org/',
    url: 'https://www.facebook.com/auraednepal',
    image: porfolioImage10,
  },
  // {
  //   title: 'Project title 11', // Project 11
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage11,
  // },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'August 2022 - present',
    location: 'Centre College',
    title: 'Bachelors of Science in Computer Science',
    content: <p>Learning the fundamentals of computer science like Systems Programming, Data Structures and Computer Architecture.</p>,
  },
  {
    date: 'August 2022 - present',
    location: 'Centre College',
    title: 'Mathematics and Data Science',
    content: <p>Core math and data science concepts such as Calculus, Statistical Modeling, Applied Machine Learning, and Probability Theory.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Feburary 2023 - Present',
    location: 'Centre College',
    title: 'Data Science Intern',
    content: (
      <p>
        Applying PCA to identify correlations between pitcher variables and pitch type and utilizing multinomial regression model with PCA results with Pitcher's name.
        Analyzing 1086 rows of baseball data with more than 162 variables and conducting statistical analysis of baseball team's data to gain insights on pitcher performance.
      </p>
    ),
  },
  {
    date: 'August 2022 - Present',
    location: 'Centre Teaching and Learning(CTL)',
    title: 'Technical Assistant',
    content: (
      <p>
        Working at Media Lab and Experimental classroom at CTL. Learning and understanding the 3D printing systems, Oculus VR headsets and other 
        hardware in the Media lab. Assisting students and faculty with media projects. 
      </p>
    ),
  },
  {
    date: 'July 2021 - August 2022',
    location: 'Austin TX, USA',
    title: 'Software Development Intern',
    content: (
      <p>
        Queried MYSQL database using Python scripts, we retrived over 70,000 records of customer data for analysis and found our customer base grew 18% in the past year.
        Increased efficiency by 30% by building a custom ETL pipeline using Python by analyzing existing SQL scripts resulting in faster processing times and enhanced productivity.       
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      // image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      // image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Muchiri Kawai',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      // image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot to directly message and to connect with the concern you have. Feel free to reach out.',
  items: [
    {
      type: ContactType.Email,
      text: 'subede.johnson@gmail.com',
      href: 'mailto:subede.johnson@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Danville KY, USA',
      href: 'https://www.google.com/maps?q=centre+college+map&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjznq6zh7P6AhUwElkFHZDuBWYQ_AUoAXoECAIQAw',
    },
    {
      type: ContactType.Instagram,
      text: '@i_johnson.s',
      href: 'https://www.instagram.com/i_johnson.s/',
    },
    {
      type: ContactType.Github,
      text: 'I-Johnson',
      href: 'https://github.com/I-Johnson',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/I-Johnson'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/13903267/johnson-subedi'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/johnson-subedi-154a861aa/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/i_johnson.s/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/JohnsonSubedi'},
];
