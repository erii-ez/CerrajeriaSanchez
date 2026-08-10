import Head from 'next/head';
import BaseLayout from '../layouts/BaseLayout';
import HeroSection from '../components/HeroSection';
import StatsBar from '../components/StatsBar';
import ServicesPreview from '../components/ServicesPreview';
import EmergencyBand from '../components/EmergencyBand';
import ServiceCard from '@/components/ServiceCard';

export default function Home() {
  return (
    <BaseLayout>
      <Head>
        <title>Cerrajería Sánchez</title>
      </Head>

      <HeroSection />
      <StatsBar />
      <ServiceCard />
      <ServicesPreview />
      <EmergencyBand />
      
    </BaseLayout>
  );
}