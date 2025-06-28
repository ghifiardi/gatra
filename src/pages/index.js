import Head from 'next/head';
import Hero from '../components/Hero';
import Features from '../components/Features';
import TechStack from '../components/TechStack';
import Deployment from '../components/Deployment';
import Contact from '../components/Contact';
import Footer from '../components/Footer';


export default function Home() {
  return (
    <>
      <Head>
        <title>GATRA – AI Security & Triage Platform</title>
        <meta name="description" content="AI-driven Security & Triage Platform for the Next Generation of Digital Safety" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Hero />
        <Features />
        <TechStack />
        <Deployment />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
