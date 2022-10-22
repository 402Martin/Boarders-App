import { ISchema } from 'src/components/Form/types';
import { userService } from 'src/services';
import { PaletteScale } from 'src/styles/types';
import { IUserRegister } from 'src/types/main.types';

export const schema: ISchema = {
  username: {
    value: '',
    isValid: true,
    isNotValidmessage: 'Debe contener almenos 6 caracteres',
    hasFocus: false,
    validation: (value: string) => value.trim().length > 6,
    label: 'Nombre de usuario',
  },

  email: {
    value: '',
    isValid: true,
    hasFocus: false,
    isNotValidmessage: 'Debe ser un email valido',
    validation: (value: string) => value.includes('@'),
    label: 'Email',
  },

  password: {
    value: '',
    isValid: true,
    hasFocus: false,
    isNotValidmessage: 'Debe contener almenos 6 caracteres',
    validation: (value: string) => value.trim().length > 6,
    label: 'Contraseña',
    type: 'password',
  },
};

export const succesMessage = {
  type: PaletteScale.SECONDARY_ACCENT_SUCCESS_GREEN50,
  message: 'Registro Exitoso',
};
