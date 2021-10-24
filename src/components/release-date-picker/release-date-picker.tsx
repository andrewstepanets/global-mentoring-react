import { Input } from 'components/input';
import React, { FC, forwardRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import { ReleaseDatePickerIcon, ReleaseDatePickerWrapper } from './styles';

export const ReleaseDatePicker: FC<any> = ({ onChange, value }) => {
  const [startDate, setStartDate] = useState(null);

  const DatePickerCustomInput = forwardRef(({ onClick }: any, ref: any) => (
    <>
      <Input
        label="Release Date"
        name="release"
        type="text"
        placeholder="Select date"
        onChange={(date) => setStartDate(date)}
        value={value}
        onClick={onClick}
        autoComplete="off"
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
