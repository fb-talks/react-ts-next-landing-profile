import type { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HeroSection } from '../sections/index/HeroSection';
import { SkillsSection } from '../sections/index/SkillsSection';
import { PortfolioSection } from '../sections/index/PortfolioSection';
import { ClientsSection } from '../sections/index/ClientsSection';
import { FooterSection } from '../sections/index/FooterSection';
import Head from 'next/head';
import { supabase } from '../sections/supabase';
import { useEffect } from 'react';
import { Portfolio } from '../model/portfolio';
import { ContactsSection } from '../sections/index/ContactsSection';

export const getStaticProps = async(context: GetStaticPropsContext) => {
   const { data } = await supabase
     .from("portfolio")
     .select("*, techs(*)")
     .order('id', { ascending: true });

  return {
     props: {
       data: data as Portfolio[]
     },
     revalidate: 3600,
   };
}

//const Home: NextPage = (props) => {
function Home(props: InferGetStaticPropsType<typeof getStaticProps>) {

  console.log(props.data)
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
      <HeroSection />
      <SkillsSection />
      <PortfolioSection data={props.data} />
      <ClientsSection />
      <ContactsSection />
      <FooterSection />
    </>
  )
}

export default Home
