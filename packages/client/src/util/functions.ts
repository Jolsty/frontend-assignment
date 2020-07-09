export function mapTypeToColor(type: string): string {
  let color: string;
  switch (type.toLowerCase()) {
    case 'normal':
      color = '#254000';
      break;
    case 'fighting':
      color = '#610b00';
      break;
    case 'flying':
      color = '#096dd9';
      break;
    case 'poison':
      color = '#389e0d';
      break;
    case 'ground':
      color = '#d48806';
      break;
    case 'rock':
      color = '#8c8c8c';
      break;
    case 'bug':
      color = '#22075e';
      break;
    case 'ghost':
      color = '#ffd6e7';
      break;
    case 'steel':
      color = '#002329';
      break;
    case 'fire':
      color = '#5c0011';
      break;
    case 'water':
      color = '#13c2c2';
      break;
    case 'grass':
      color = '#092b00';
      break;
    case 'electric':
      color = '#002329';
      break;
    case 'psychic':
      color = '#efdbff';
      break;
    case 'ice':
      color = '#adc6ff';
      break;
    case 'dragon':
      color = '#520339';
      break;
    case 'dark':
      color = '#000000';
      break;
    case 'fairy':
      color = '#9e1068';
      break;
    default:
      color = '#ffffff';
  }
  return color;
}
