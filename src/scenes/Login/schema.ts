import { ISchema } from 'src/components/Form/types';
import { PaletteScale } from 'src/styles/types';

export const schema: ISchema = {
  username: {
    value: '',
    isValid: true,
    hasFocus: false,
    validation: (value: string) => value.trim().length,
    label: 'Nombre de usuario',
  },
  password: {
    value: '',
    isValid: true,
    hasFocus: false,
    validation: (value: string) => value.trim().length,
    label: 'Contraseña',
    type: 'password',
  },
};

export const succesMessage = {
  type: PaletteScale.SECONDARY_ACCENT_SUCCESS_GREEN50,
  message: 'Login Exitoso',
};

export const wrongMessage = {
  type: PaletteScale.SECONDARY_ACCENT_ERROR_RED50,
  message: 'Credenciales Incorrectas',
};
