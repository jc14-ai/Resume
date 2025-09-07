import { Resume } from './features/Resume.tsx'
import { Header } from './components/wrappers/Header.tsx'
import { Summary } from './components/wrappers/Summary.tsx'
import { TechSkills } from './components/wrappers/TechSkills.tsx'
import { Projects } from './components/wrappers/Projects.tsx'
import { Education } from './components/wrappers/Education.tsx'
import { Certification } from './components/wrappers/Certification.tsx'
import { Additional } from './components/wrappers/Additional.tsx'
import { Name } from './components/Name.tsx'
import { JobInfo } from './components/JobInfo.tsx'
import { Contact } from './components/Contact.tsx'
import myImage from './assets/my-image.jpg'
import { Section } from './components/Section.tsx'
import {Layer} from './components/Layer.tsx'
import {ProjectView} from './components/ProjectView.tsx'
import project1 from './assets/react.svg'
import leftArrow from './assets/left.png'
import rightArrow from './assets/right.png'

export default function App(){
  return (
    <>
    <Resume>
      <Header>
        <div className='flex flex-col justify-center items-start h-full w-[70%]'>
          <Name name='Jestaly Joseph Castillo'/>
          <JobInfo job='Software Developer Intern'/>
          <Contact address='Pasig City, Manila'
                    email='mailto:jestalycastillo15@gmail.com' 
                    linkedin='https://www.linkedin.com/in/jestaly-a-castillo-a738b1326/'
                    github='https://github.com/jc14-ai' 
                    phone='+639065836247'/>
        </div>
        <div className='flex justify-center items-center w-[30%] h-full'>
          <img className='w-[75%] h-[79%] object-cover rounded-[200px] bg-black hover:scale-101 duration-100' src={myImage}/>
        </div>
      </Header>
      <Summary>
        <Section title='Summary'/>
        <p className='text-justify indent-8 font-domine text-[1.5em] mt-4'>
          Third year Computer Science student with a strong foundation in full stack development and experienced in
          building real world projects using various frameworks and programming languages. Adaptable, detail
          oriented, and eager to contribute while learning and growing in a collaborative environment.
        </p>
      </Summary>
      <TechSkills>
        <Section title='Technologies Used'/>
        <div className='flex flex-row items-start justify-between mt-4 w-full h-full font-domine pl-2 pr-2'>
          <div className='flex flex-col gap-3 item-start w-[45%] h-full'>
            <Layer layer='Backend' technologies='Node.js, Express.js, Flask, PHP, Java'/>
            <Layer layer='Database' technologies='NoSQL, MySQL, Firestore'/>
          </div>
          <div className='flex flex-col gap-3 item-start w-[55%] h-full'>
            <Layer layer='Frontend' technologies='HTML5, CSS3, JavaScript, JQuery, BootStrap, React.js, TailwindCSS'/>
            <Layer layer='Tools' technologies='VSCode, Android Studio, Git, Github, PhpMyAdmin, Figma, Drawio'/>
            <Layer layer='Others' technologies='OOP, DSA, REST API, Machine Learning, EDA'/>
          </div>
        </div>
      </TechSkills>
      <Projects>
        <Section title='Projects'/>
        <ProjectView>
          <img className='hover:cursor-pointer hover:scale-105 w-15 duration-300' src={leftArrow}/>  
          <div className='flex justify-center items-center w-[80%] h-full'>
            <img className='w-[70%] h-[70%]' src={project1}/>
          </div>
          <img className='hover:cursor-pointer hover:scale-105 w-15 duration-300' src={rightArrow}/>
        </ProjectView>
      </Projects>
      <Education>
        
      </Education>
      <Certification>

      </Certification>
      <Additional>

      </Additional>
    </Resume>
    </>
  ) 
}
