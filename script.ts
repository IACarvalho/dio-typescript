interface IAnimal {
  name: string;
  type: 'land' | 'aquatic';
  toGrowl(soundVolume: number): void;
}

interface IFeline extends IAnimal {
  nightVision: boolean;
}

const animal: IAnimal = {
  name: 'Elefante',
  type: 'land',
  toGrowl: (soundVolume) => { console.log(`O elefante barriu à ${soundVolume}Db`) }
}

const felino: IFeline = {
  name: 'Leão',
  type: 'land',
  toGrowl: (soundVolume) => {console.log(`O leão rugiu à ${soundVolume}Db`)},
  nightVision: true
}