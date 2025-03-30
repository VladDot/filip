import {
    Button,
    AuthorSupport,
    CourseProgram,
    TargetAudience,
    LearningProcess,
    CareerDevelopment,
} from "@/component";
import { Header } from "@/component/header";

export default function Home() {
    return (
        <div>
            <Header />
            <div className="px-5 xl:pl-[60px] xl:pr-12 xxl:m-auto pt-[108px] lg:pt-[200px]">
                <TargetAudience />
                <LearningProcess />
                <CareerDevelopment />
                <AuthorSupport />
                <CourseProgram />
                <Button text="Переглянути курси" />
            </div>
        </div>
    );
}
