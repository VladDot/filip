export interface IAccordionProps {
    title: string;
    isOpen: boolean;
    disabled?: boolean;
    onClick: () => void;
    description: string[];
}
