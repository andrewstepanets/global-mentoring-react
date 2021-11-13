import { Input } from 'components/input';
import React, { FC, forwardRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import { ReleaseDatePickerIcon, ReleaseDatePickerWrapper } from './styles';

export const ReleaseDatePicker: FC<any> = ({
  onChange,
  value,
  type,
  onKeyDown,
}) => {
  const [startDate, setStartDate] = useState(null);

  const DatePickerCustomInput = forwardRef(({ onClick }: any, ref: any) => (
    <>
      <Input
        aria-label="release"
        label="Release Date"
        name="release"
        type={type}
        onChange={(date) => setStartDate(date)}
        value={value}
        onClick={onClick}
        autoComplete="off"
        onKeyDown={onKeyDown}
      />
      <ReleaseDatePickerIcon onClick={onClick} />
    </>
  ));

  return (
    <ReleaseDatePickerWrapper>
      <DatePicker
        selected={startDate}
        onChange={onChange}
        placeholderText="Select date"
        showYearDropdown={true}
        customInput={<DatePickerCustomInput />}
      />
    </ReleaseDatePickerWrapper>
  );
};
