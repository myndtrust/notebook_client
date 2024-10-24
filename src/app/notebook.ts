export interface Notebook {
    id: number;
    name: string;
    description: string;
    created_on: Date;
    isEditable?: boolean; // Optional property to avoid breaking existing code

  }