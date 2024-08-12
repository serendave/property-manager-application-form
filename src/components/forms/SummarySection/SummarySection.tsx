import { EditIcon } from '../../../assets/svg';

interface SummarySectionProps {
  title: string;
  items: { label: string; value?: string }[];
  onEditClick?: () => void;
}

const SummarySection = ({ title, items, onEditClick }: SummarySectionProps) => {
  return (
    <section className='col-span-2 mb-8'>
      <div className='flex justify-between'>
        <h3 className='text-base font-semibold mb-4'>{title}</h3>
        <div className='cursor-pointer' onClick={onEditClick}>
          <EditIcon className='w-3.5 h-3.5' />
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        {items.map((item) => (
          <div key={`${item.label}-${item.value}`} className='flex justify-between'>
            <span className='text-sm text-slate-800'>{item.label}</span>
            <span className='text-sm text-slate-800'>{item.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SummarySection;
