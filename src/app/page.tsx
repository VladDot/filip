import {
    Banner,
    AuthorSupport,
    CourseProgram,
    TargetAudience,
    LearningProcess,
    LearningOptions,
    CareerDevelopment,
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
                <CourseProgram />
            </div>
        </>
    );
}
