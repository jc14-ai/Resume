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
import { Button } from './components//Button.tsx'
import leftArrow from './assets/left.png'
import rightArrow from './assets/right.png'
import {Project} from './components/Project.tsx'
import { useState } from 'react'

export default function App(){
  const [index, setIndex] = useState<number>(0);
  const [fade, setFade] = useState<boolean>(false);

  const projects = [
    {title:'PredictaBoard AI', 
      image:project1, 
      codeLink:'https://github.com/jc14-ai/AI-Powered-Stock-Market-Dashboard',
      deployLink:''},

      {title:'Kofei', 
      image:project1, 
      codeLink:'', 
      deployLink:''},

    {title:'CredCheck AI', 
      image:project1, 
      codeLink:'', 
      deployLink:''},
    
    {title:'Grade Management System', 
      image:project1, 
      codeLink:'', 
      deployLink:''},

      {title:'Stock Recommendation System', 
      image:project1, 
      codeLink:'', 
      deployLink:''},
    
    {title:'SpendLite', 
      image:project1, 
      codeLink:'', 
      deployLink:''},
    
    {title:'Library Management System', 
      image:project1, 
      codeLink:'', 
      deployLink:''},

    {title:'Ecome', 
      image:project1, 
      codeLink:'', 
      deployLink:''},

      {title:'Rock, Paper, Scissors!', 
      image:project1, 
      codeLink:'', 
      deployLink:''}
    ]

  const nextProject = ():void => {
    if(index >= projects.length - 1) return;
    setFade(true);
    setTimeout(():void => {
      setIndex((i:number):number => i + 1)
      setFade(false)
    }, 500);
  }

  const prevProject = ():void => {
    if(index === 0) return;
    setFade(true);
    setTimeout(():void => {
      setIndex((i:number):number => i - 1)
      setFade(false)
    }, 500);
  }

  return (
    <>
    <Resume>
      <Header>
        <div className='flex flex-col justify-center items-start h-full w-[70%]'>
          <Name name='Jestaly Joseph Castillo'/>
          <JobInfo job='Software Developer'/>
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
          <Button arrow={leftArrow} click={():void => prevProject()}/>
          <div className={`flex flex-col justify-center items-center w-[80%] h-[100%] ${ fade? 'opacity-0': 'opacity-100' } duration-500`}>
            <Project image={projects[index]['image']} title={projects[index]['title']} codeLink={projects[index]['codeLink']} deployLink={projects[index]['deployLink']}/>
          </div>
          <Button arrow={rightArrow} click={():void => nextProject()}/>
        </ProjectView>
      </Projects>
      <Education>
        <Section title='Education'/>
        <div className='flex flex-col gap-3 pl-5 pr-5 mt-3'>
          <div className='flex flex-row w-full h-fit text-[1.5em] gap-8'>
            <h1 className='font-bold'>Bachelor of Science in Computer Science</h1>
            <h1>August 2023 - Present</h1>
          </div>
          <h1 className='text-[1.4em]'>Pamantasan ng Lungsod ng Pasig</h1>
          <ul className='list-disc pl-8 text-[1.2em]'>
            <li>3rd Year Student</li>
            <li>Thesis on "MediRehabAI: Rehabilitation Exercise Monitoring Using MediaPipe Pose with Long Short-Term Memory Layer (LSTM)”</li>
          </ul>
        </div>
      </Education>
      <Certification>
        <Section title='Certifications'/>
        <ul className='list-disc pl-8 text-[1.4em] font-domine mt-3'>
          <li>Python Programming - DataCamp, 2025</li>
          <li>Data Manipulation with Pandas - DataCamp, 2025</li>
          <li>Joining Data with Pandas - DataCamp, 2025</li>
          <li>Supervised Learning with scikit-learn - DataCamp, 2025</li>
        </ul>
      </Certification>
      <Additional>
        <Section title='Additional Information'/>
        <ul className='list-disc pl-8 text-[1.4em] font-domine mt-3'>
          <li><b>Languages:</b> English, Filipino</li>
          <li>
            <b>Awards/Activities</b>
            <ul className='list-disc pl-8'>
              <li>Participant, Java Programming Competition - Tech Odyssey, 2024</li>
              <li>Participant, National IT Skills Competition - ISITE, 2025</li>
            </ul>
          </li>
        </ul>
      </Additional>
    </Resume>
    </>
  ) 
}
