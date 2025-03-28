import { Button, CareerDevelopment, TargetAudience } from "@/component";

export default function Home() {
    return (
        <div className="px-5 xl:pl-[60px] xl:pr-12 xxl:m-auto">
            <TargetAudience
                subtitle="Це саме те, що тобі потрібно "
                title="Для кого будуть корисні наші курси?"
            />
            <CareerDevelopment
                subtitle="Це саме те, що тобі потрібно "
                title="Як виглядає процес навчання?"
            />
            <Button text="Переглянути курси" />
        </div>
    );
}
