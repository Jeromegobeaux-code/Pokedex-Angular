export interface PkmDto {
  id: number;
  name: string;
  types: { slot: number; type: { name: string } }[];
  sprites: {
    front_default: string;
    other: {
      'official-artwork': { front_default: string };
    };
  };
  weight: number;
  height: number;
}
