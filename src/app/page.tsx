import {
    Button,
    AuthorSupport,
    TargetAudience,
    LearningProcess,
    CareerDevelopment,
} from "@/component";

export default function Home() {
    return (
        <div className="px-5 xl:pl-[60px] xl:pr-12 xxl:m-auto">
            <TargetAudience
                subtitle="Це саме те, що тобі потрібно "
                title="Для кого будуть корисні наші курси?"
            />
            <LearningProcess />
            <CareerDevelopment
                subtitle="Це саме те, що тобі потрібно "
                title="Як виглядає процес навчання?"
            />
            <AuthorSupport
                subtitle="Ти можеш мені довіритись"
                title="Чим я можу тобі допомогти?"
            />
            <Button text="Переглянути курси" />
        </div>
    );
}
