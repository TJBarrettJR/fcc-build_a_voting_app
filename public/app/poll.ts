import { Option } from './option';
export class Poll {
  id: number;
  userId: number;
  question: string;
  options: Option[];
  open: boolean;
}