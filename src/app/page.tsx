import {
    Banner,
    AuthorSupport,
    CourseProgram,
    TargetAudience,
    LearningProcess,
    LearningOptions,
    CareerDevelopment,
    FooterBanner,
} from "@/component";

export default function Home() {
    return (
        <>
            <Banner />
            <div className="cubeBg">
                <TargetAudience />
                <LearningProcess />
                <CareerDevelopment />
                <AuthorSupport />
                <LearningOptions />
                <div className="overflow-hidden"><div className="w-full bg-white "> <CourseProgram /></div>
               
                <FooterBanner/></div>
                
            </div>
        </>
    );
}
