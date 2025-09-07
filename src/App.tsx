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
import { Button } from './components//Button.tsx'
import leftArrow from './assets/left.png'
import rightArrow from './assets/right.png'
import {Project} from './components/Project.tsx'
import { useState } from 'react'

import predictaBoardAI from './assets/projects/predictaBoardAI.png'
import kofei from './assets/projects/kofei.png'
import credCheckAI from './assets/projects/credCheckAI.png'
import gradeManagementSystem from './assets/projects/gradeManagementSystem.png'
import stockRecommendationSystem from './assets/projects/stockRecommendationSystem.png'
import spendLite from './assets/projects/spendLite.png'
import libraryManagementSystem from './assets/projects/libraryManagementSystem.png'
import ecome from './assets/projects/ecome.png'
import rpsGame from './assets/projects/rpsGame.png'

export default function App(){
  const [index, setIndex] = useState<number>(0);
  const [fade, setFade] = useState<boolean>(false);

  const projects = [
    {title:'PredictaBoard AI', 
      image:predictaBoardAI, 
      codeLink:'https://github.com/jc14-ai/PredictaBoard-AI',
      deployLink:'',
      description:'A web application that utilizes machine learning algorithms to predict next price and provide technical analysis tools. It Visualizes stock data with interactive charts.'},

      {title:'Kofei', 
      image:kofei, 
      codeLink:'https://github.com/jc14-ai/Kofei', 
      deployLink:'',
      description:'Web application that allows users to order donut & coffee. Admins can manage orders, products, and view sales reports.'},

    {title:'CredCheck AI', 
      image:credCheckAI, 
      codeLink:'https://github.com/jc14-ai/CredCheck-AI', 
      deployLink:'https://credcheck-ai.onrender.com/',
      description:'An AI-powered web application that evaluates the credibility of news articles using basic NLP technique and Logistic Regression model.'},
    
    {title:'Grade Management System', 
      image:gradeManagementSystem, 
      codeLink:'https://github.com/jc14-ai/Grade-Management-System', 
      deployLink:'',
      description:'Desktop application that allows teachers to manage student grades, attendance, and generate reports. Students can view their grades and attendance. Admin can manage users and system settings.'},

      {title:'Stock Recommendation System', 
      image:stockRecommendationSystem, 
      codeLink:'https://github.com/jc14-ai/Stock-Recommender-via-Prompt-Engineering', 
      deployLink:'',
      description:'Recommend stocks based on AI analysis of historical data and market trends. It also ranks stocks based on how well each stocks perform. Provides insights to help users make informed investment decisions.'},
    
    {title:'SpendLite', 
      image:spendLite, 
      codeLink:'https://github.com/jc14-ai/Expense-Tracker-Spendlite', 
      deployLink:'',
      description:'Track your expenses and manage your budget with SpendLite. A desktop application that allows users to add, edit, and delete expenses. It also provides visualizations of your spending habits.'},
    
    {title:'Library Management System', 
      image:libraryManagementSystem, 
      codeLink:'https://github.com/jc14-ai/Library-Management-System-V2', 
      deployLink:'',
      description:'Manage library operations such as book inventory, member management, and borrowing/returning of books. It also provides reports and analytics to help librarians make informed decisions.'},

    {title:'Ecome', 
      image:ecome, 
      codeLink:'https://github.com/jc14-ai/E-come', 
      deployLink:'',
      description:'track your expenses and manage your budget with SpendLite. A Mobile application that allows users to add, edit, and delete expenses. Supports user authentication and data synchronization with Firebase.'},

      {title:'Rock, Paper, Scissors!', 
      image:rpsGame, 
      codeLink:'https://github.com/jc14-ai/RPS-Game', 
      deployLink:'https://jc14-ai.github.io/RPS-Game/',
      description:'Web-based Rock, Paper, Scissors game using HTML, CSS, and JavaScript. Play against the computer and see who wins!'},
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
            <Project image={projects[index]['image']} title={projects[index]['title']} codeLink={projects[index]['codeLink']} deployLink={projects[index]['deployLink']} description={projects[index]['description']}/>
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
