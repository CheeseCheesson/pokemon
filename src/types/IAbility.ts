export interface IAbility {
    abilities: any;
    id: number;
    name: string;
    is_main_series: boolean;
    generation: {
      name: string;
      url: string;
    };
    names: {
      name: string;
      language: {
        name: string;
        url: string;
      };
    }[];
    effect_entries: {
      effect: string;
      short_effect: string;
      language: {
        name: string;
        url: string;
      };
    }[];
    effect_changes: any[]; // replace with a more specific type if needed
    flavor_text_entries: {
      flavor_text: string;
      language: {
        name: string;
        url: string;
      };
      version_group: {
        name: string;
        url: string;
      };
    }[];
    pokemon: {
      is_hidden: boolean;
      pokemon: {
        name: string;
        url: string;
      };
      slot: number;
    }[];
  }
  