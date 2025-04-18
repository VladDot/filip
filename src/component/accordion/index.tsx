import { Arrow } from '../arrow';
import { getStyles } from './styles';
import { IAccordionProps } from './types';

export const Accordion = ({ title, isOpen, onClick, description }: IAccordionProps) => {
  const styles = getStyles({ isOpen });

  return (
    <div className="w-full bg-white">
      <div onClick={() => onClick()} className={styles.header}>
        <h3 className="text-lg font-semibold md:text-[20px]">{title}</h3>

        <div className={styles.arrowWrapper}>
          <span className={`${styles.arrow} ${isOpen ? 'rotate-270' : ''}`}>
            <Arrow />
          </span>
        </div>
      </div>

      <div className={`${styles.content} ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className="marker:text-textBlue list-disc space-y-1 pl-6">
          {description.map((e, idx) => (
            <li className="py-1" key={`${e}_${idx}`}>
              {e}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
