import {
    Button,
    AuthorSupport,
    CourseProgram,
    TargetAudience,
    LearningProcess,
    CareerDevelopment,
} from "@/component";

export default function Home() {
    return (
        <div className="px-5 xl:pl-[60px] xl:pr-12 xxl:m-auto">
            <TargetAudience />
            <LearningProcess />
            <CareerDevelopment />
            <AuthorSupport />
            <CourseProgram />
            <Button text="Переглянути курси" />
        </div>
    );
}
