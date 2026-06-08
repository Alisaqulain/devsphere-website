import PageWrapper from "@/components/sections/PageWrapper";
import MagneticButton from "@/components/sections/MagneticButton";

export default function NotFound() {
  return (
    <PageWrapper className="min-h-[70vh] flex items-center">
      <div className="container-wide text-center py-20">
        <p className="text-8xl font-black text-gradient mb-4">404</p>
        <h1 className="text-2xl font-bold mb-4">Page not found</h1>
        <p className="text-muted-foreground mb-8">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
        <MagneticButton href="/">Go Home</MagneticButton>
      </div>
    </PageWrapper>
  );
}
