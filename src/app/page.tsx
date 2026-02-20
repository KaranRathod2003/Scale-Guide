import HeroSection from '@/components/landing/HeroSection';
import ScalingOverview from '@/components/landing/ScalingOverview';
import DeploymentOverview from '@/components/landing/DeploymentOverview';
import FeatureHighlights from '@/components/landing/FeatureHighlights';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ScalingOverview />
      <DeploymentOverview />
      <FeatureHighlights />
    </>
  );
}
