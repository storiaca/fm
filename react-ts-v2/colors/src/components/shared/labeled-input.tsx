import clsx from 'clsx';
import { ChangeEventHandler, ComponentPropsWithoutRef, useId } from 'react';

type LabeledInputProps = ComponentPropsWithoutRef<'input'> & {
  label: string;
};

const LabeledInput = ({ label, id, onChange, ...props }: LabeledInputProps) => {
  id = useId() + id;

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        // value={value}
        // onChange={onChange}
        // type={type}
        // className={clsx('w-full', className)}
        readOnly={!onChange}
        {...props}
      />
    </div>
  );
};

export default LabeledInput;
