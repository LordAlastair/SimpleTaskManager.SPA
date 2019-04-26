export interface Task {
  id: number;
  name: string;
  price: number;
  deadline: Date;
  presentation_order: number;
  created_at: Date;
  updated_at: Date;
  done: boolean;
}
