import Cases from '@/modules/Cases';
import Main from '@/modules/Main';
import About from '../About';
import AboutInfo from '../AboutInfo';
import CasesList from '../CasesList';
import Experience from '../Experience';
import ExperienceList from '../ExperienceList';

export default function Wrapper() {
  return (
    <div className='flex w-full flex-col gap-20 p-[30px]'>
      <Main />
      <Cases />
      <CasesList />
      <About />
      <AboutInfo />
      <Experience />
      <ExperienceList />
    </div>
  );
}
