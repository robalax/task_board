interface Item {
  id: number;
  name: string;
  category: string;
}

interface Box {
  name: string;
  items: Item[];
}

export type { Box, Item };
