import { Input } from 'components/input';
import * as React from 'react';
import DatePicker from 'react-datepicker';
import { ReleaseDatePickerIcon, ReleaseDatePickerWrapper } from './styles';

export const ReleaseDatePicker: React.FC<any> = ({
  onChange,
  value,
  type,
  onKeyDown,
}) => {
  const [startDate, setStartDate] = React.useState(null);

  const DatePickerCustomInput = React.forwardRef(
    ({ onClick }: any, ref: any) => (
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
    ),
  );

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
