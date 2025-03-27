import { TargetAudience } from "@/component";

export default function Home() {
    return (
        <div className="p-5 xl:p-[40px] xxl:m-auto">
            <TargetAudience
                subtitle="Це саме те, що тобі потрібно "
                title="Для кого будуть корисні наші курси?"
            />
        </div>
    );
}
