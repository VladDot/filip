'use client';

import {
  Banner,
  AuthorSupport,
  CourseProgram,
  TargetAudience,
  LearningProcess,
  LearningOptions,
  CareerDevelopment,
  FooterBanner,
  Chat,
} from '@/component';

export default function Home() {
  return (
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
  );
}
