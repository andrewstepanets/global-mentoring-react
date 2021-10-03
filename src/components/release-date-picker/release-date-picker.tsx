import { Input } from 'components/input';
import React, { FC, forwardRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import { ReleaseDatePickerIcon, ReleaseDatePickerWrapper } from './styles';

export const ReleaseDatePicker: FC = () => {
  const [startDate, setStartDate] = useState(null);

  const DatePickerCustomInput = forwardRef(
    ({ value, onClick }: any, ref: any) => (
      <>
        <Input
          label="Release Date"
          name="release"
          type="text"
          placeholder="Select date"
          onChange={(date) => setStartDate(date)}
          value={value}
          onClick={onClick}
        />
        <ReleaseDatePickerIcon onClick={onClick} />
      </>
    ),
  );

  return (
    <ReleaseDatePickerWrapper>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        placeholderText="Select date"
        showYearDropdown={true}
        customInput={<DatePickerCustomInput />}
      />
    </ReleaseDatePickerWrapper>
  );
};
