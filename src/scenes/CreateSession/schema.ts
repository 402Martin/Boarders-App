import { ISchema } from 'src/components/Form/types';
import { PaletteScale } from 'src/styles/types';

export const schema: ISchema = {
  game: {
    value: '',
    isValid: true,
    hasFocus: false,
    validation: (value: string) => !!value.trim().length,
    label: 'Juego',
    isNotValidmessage: 'El juego es requerido',
    type: 'game',
    isDisabled: true,
  },
  datetime: {
    value: '',
    isValid: true,
    hasFocus: false,
    isNotValidmessage: 'La fecha es requerida',
    validation: (value: string) => !!value.trim().length,
    label: 'Fecha y hora',
    type: 'date',
  },
  location: {
    value: '',
    isValid: true,
    isNotValidmessage: 'La ubicación es requerida',
    hasFocus: false,
    validation: (value: string) => !!value.trim().length,
    label: 'Ubicación',
    type: 'text',
  },
  minPlayers: {
    value: '',
    isValid: true,
    hasFocus: false,
    isNotValidmessage: 'El número mínimo de jugadores es requerido',
    validation: (value: string) => !!value.trim().length,
    label: 'Minimo de jugadores',
    type: 'amount',
  },
  maxPlayers: {
    value: '',
    isValid: true,
    hasFocus: false,
    isNotValidmessage: 'El número máximo de jugadores es requerido',
    validation: (value: string) => !!value.trim().length,
    label: 'Máximo de jugadores',
    type: 'amount',
  },
};

export const succesMessage = {
  type: PaletteScale.SECONDARY_ACCENT_SUCCESS_GREEN50,
  message: 'Sesion creada con éxito',
};

export const wrongMessage = {
  type: PaletteScale.SECONDARY_ACCENT_ERROR_RED50,
  message: 'Ocurrio un problema al crear la sesión',
};
