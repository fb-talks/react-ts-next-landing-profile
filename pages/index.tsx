import type { InferGetStaticPropsType } from 'next'
import Head from 'next/head';
import { supabase } from '../supabase';
import { HeroSection } from '../sections/index/HeroSection';
import { SkillsSection } from '../sections/index/SkillsSection';
import { ClientsSection } from '../sections/index/ClientsSection';
import { FooterSection } from '../sections/index/FooterSection';
import { ContactsSection } from '../sections/index/ContactsSection';
import { PortfolioSection } from '../sections/index/PortfolioSection';
import { Portfolio } from '../model/portfolio';
import { Skill } from '../model/skill';

export const getStaticProps = async() => {
  const portfolioReq = supabase
    .from("portfolio")
    .select("*, techs(*)")
    .order('id', { ascending: true });

  const skillsReq = supabase
    .from("skills")
    .select("*")
    .order('id', { ascending: true });

  const [portfolio, skills ] = await Promise.all([portfolioReq, skillsReq])

  return {
     props: {
       portfolio: portfolio.data as Portfolio[],
       skills: skills.data as Skill[]
     },
     revalidate: 3600,
   };
}

//const Home: NextPage = (props) => {
function Home(props: InferGetStaticPropsType<typeof getStaticProps>) {
 /* useEffect(() => {
    const mySubscription = supabase
      .from('*')
      .on('*', payload => {
        console.log('Change received!', payload)
      })
      .subscribe()
  }, []);*/

  return (
    <>
      <Head>
        <title>Fabio Biondi - Demo Profile</title>
        <meta name="description" content="Un sito demo realizzato in Next per creare il proprio CV online"/>
      </Head>
      <HeroSection {...props} />
      <SkillsSection skills={props.skills} />
      <PortfolioSection data={props.portfolio} />
      <ClientsSection />
      <ContactsSection />
      <FooterSection />
    </>
  )
}

export default Home
