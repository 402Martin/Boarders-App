import { ISchema } from 'src/components/Form/types';
import { PaletteScale } from 'src/styles/types';

export const schema: ISchema = {
  game: {
    value: '',
    isValid: true,
    hasFocus: false,
    validation: (value: string) => value.trim().length,
    label: 'Juego',
    type: 'game',
  },
  datetime: {
    value: '',
    isValid: true,
    hasFocus: false,
    validation: (value: string) => value.trim().length,
    label: 'Fecha y hora',
    type: 'date',
  },
  location: {
    value: '',
    isValid: true,
    hasFocus: false,
    validation: (value: string) => value.trim().length,
    label: 'Ubicación',
    type: 'location',
  },
  minPlayers: {
    value: '',
    isValid: true,
    hasFocus: false,
    validation: (value: string) => value.trim().length,
    label: 'Minimo de jugadores',
    type: 'amount',
  },
  maxPlayers: {
    value: '',
    isValid: true,
    hasFocus: false,
    validation: (value: string) => value.trim().length,
    label: 'Máximo de jugadores',
    type: 'amount',
  },
};

export const succesMessage = {
  type: PaletteScale.SECONDARY_ACCENT_SUCCESS_GREEN50,
  message: 'Registro Exitoso',
};

export const wrongMessage = {
  type: PaletteScale.SECONDARY_ACCENT_ERROR_RED50,
  message: 'Credenciales Incorrectas',
};
