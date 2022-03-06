import type { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next'
import { supabase } from '../supabase';
/*import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";*/
import { HeroSection } from '../sections/index/HeroSection';
import { SkillsSection } from '../sections/index/SkillsSection';
import { PortfolioSection } from '../sections/index/PortfolioSection';
import { ClientsSection } from '../sections/index/ClientsSection';
import { FooterSection } from '../sections/index/FooterSection';
import Head from 'next/head';
import { ContactsSection } from '../sections/index/ContactsSection';
import { Portfolio } from '../model/portfolio';
import { PortfolioSectionColumns } from '../sections/index/PortfolioSectionColumns';
import { Skill } from '../model/skill';

export const getStaticProps = async(context: GetStaticPropsContext) => {
  const portfolioReq = supabase
    .from("portfolio")
    .select("*, techs(*)")
    .order('id', { ascending: true });

  const skillsReq = supabase
    .from("skills")
    .select("*")
    .order('id', { ascending: true });

  // todo query recupero social network

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

  console.log(props)
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
      <PortfolioSectionColumns data={props.portfolio} />
      {/*<PortfolioSection data={props.portfolio} />*/}
      <ClientsSection />
      <ContactsSection />
      <FooterSection />
    </>
  )
}

export default Home
