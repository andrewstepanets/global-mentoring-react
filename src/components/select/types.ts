export interface SelectProps {
  data: {
    id: number;
    name: string;
  }[];
  onSelectChange: (selectType: string) => void;
}
