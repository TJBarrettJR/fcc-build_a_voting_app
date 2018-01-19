import { Option } from './option';
export class Poll {
  id: number;
  question: string;
  options: Option[];
  open: boolean;
}