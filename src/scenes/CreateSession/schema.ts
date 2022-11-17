import moment from 'moment';
import { ISchema } from 'src/components/Form/types';
import { PaletteScale } from 'src/styles/types';
import { GameSession } from 'src/types/session.types';

export const schema: ISchema = {
  gameTitle: {
    value: '',
    isValid: true,
    hasFocus: false,
    validation: (value: string) => !!value.trim().length,
    label: 'Juego',
    isNotValidmessage: 'El juego es requerido',
    type: 'text',
  },
  date: {
    value: '',
    isValid: true,
    hasFocus: false,
    isNotValidmessage: 'La fecha es requerida',
    validation: (value: string) => moment(value, 'DD/MM/YYYY HH:mm').isAfter(moment(), 'day'),
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
  minQuantityPlayers: {
    value: '',
    isValid: true,
    hasFocus: false,
    isNotValidmessage: 'El número mínimo de jugadores es requerido',
    validation: (value: string) => !!value.trim().length,
    label: 'Minimo de jugadores',
    type: 'amount',
  },
  maxQuantityPlayers: {
    value: '',
    isValid: true,
    hasFocus: false,
    isNotValidmessage: 'El número máximo de jugadores es requerido',
    validation: (value: string) => !!value.trim().length,
    label: 'Máximo de jugadores',
    type: 'amount',
  },

  description: {
    value: '',
    isValid: true,
    hasFocus: false,
    validation: (value: string) => true,
    label: 'Descripción',
    type: 'text',
  },
};

export const updateSchema = (gameSession: GameSession) => {
  const newSchema = { ...schema } as any;
  (Object.keys(newSchema) as (keyof GameSession)[]).forEach((key) => {
    if (key === 'date') {
      newSchema[key].value = moment(gameSession[key]).format('DD/MM/YYYY HH:mm');
    } else {
      newSchema[key].value = gameSession[key];
    }
  });
  return newSchema as ISchema;
};
export const succesMessage = {
  type: PaletteScale.SECONDARY_ACCENT_SUCCESS_GREEN50,
  message: 'Sesion creada con éxito',
};

export const wrongMessage = {
  type: PaletteScale.SECONDARY_ACCENT_ERROR_RED50,
  message: 'Ocurrio un problema al crear la sesión',
};
