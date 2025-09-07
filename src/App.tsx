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

export default function App(){
  return (
    <>
    <Resume>
      <Header>
        <div className='flex flex-col justify-center items-start h-full w-[70%] pl-10'>
          <Name name='Jestaly Joseph Castillo'/>
          <JobInfo job='Software Developer Intern'/>
          <Contact address='Pasig City, Manila'
                    email='mailto:jestalycastillo15@gmail.com' 
                    linkedin='https://www.linkedin.com/in/jestaly-a-castillo-a738b1326/'
                    github='https://github.com/jc14-ai' 
                    phone='+63906583627'/>
        </div>
        <div className='flex justify-center items-center w-[30%] h-full'>
          <img className='w-[75%] h-[79%] object-cover rounded-[200px] bg-black hover:scale-101 duration-100' src={myImage}/>
        </div>
      </Header>
      <Summary>

      </Summary>
      <TechSkills>

      </TechSkills>
      <Projects>

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
