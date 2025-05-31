'use client';

import {
  Chat,
  Banner,
  Header,
  Footer,
  FooterBanner,
  AuthorSupport,
  CourseProgram,
  TargetAudience,
  LearningProcess,
  LearningOptions,
  CareerDevelopment,
} from '@/component';

export default function Home() {
  return (
    <>
      <Header />

      <div className="cubeBg overflow-hidden">
        <Banner />

        <TargetAudience />

        <CareerDevelopment />

        <LearningProcess />

        <AuthorSupport />

        <LearningOptions />

        <CourseProgram />

        <FooterBanner />

        <Chat />
      </div>

      <Footer />
    </>
  );
}
