interface ICubsProps {
    style?: string;
}

export const Cubs = ({}: ICubsProps) => {
    return (
        <div className=" w-[52px] flex flex-wrap gap-1">
            <div className="w-6 h-6 bg-red-300"></div>
            <div className="w-6 h-6 bg-red-300"></div>
            <div className="w-6 h-6 bg-red-300"></div>
            <div className="w-6 h-6 bg-red-300"></div>
        </div>
    );
};
