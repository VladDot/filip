import {
    Banner,
    Header,
    AuthorSupport,
    CourseProgram,
    TargetAudience,
    LearningProcess,
    LearningOptions,
    CareerDevelopment,
} from "@/component";

export default function Home() {
    return (
        <div>
            <Header />
            <Banner />
            <div className="px-5 xl:pl-[60px] xl:pr-12 xxl:m-auto pt-[108px] lg:pt-[200px]">
                <TargetAudience />
                <LearningProcess />
                <CareerDevelopment />
                <AuthorSupport />
                <CourseProgram />
                <LearningOptions />
            </div>
        </div>
    );
}
