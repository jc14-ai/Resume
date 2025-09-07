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
import myImage from './assets/react.svg'

export default function App(){
  return (
    <>
    <Resume>
      <Header>
        <div>
          <Name name='Jestaly Joseph Castillo'/>
          <JobInfo job='Software Developer Intern'/>
          <Contact address='Pasig City, Manila' email='' linkedin='' github='' phone='+63906583627'/>
        </div>
        <img src={myImage}/>
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
