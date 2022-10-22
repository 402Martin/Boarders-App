import React from 'react';
import Form from 'src/components/Form';
import { ISchema, ISchemaAttribute } from 'src/components/Form/types';
import { SceneContainer } from 'src/components/SceneContainer';
import { StyledText } from 'src/components/StyledText';
import { StyledView } from 'src/components/StyledView';
import Title from 'src/components/title';
import { genericStyles } from 'src/styles/generic.styles';
import { PaletteScale, TypographyScale } from 'src/styles/types';
import { IUserRegister } from 'src/types/main.types';
import { strings } from './strings';
import { styles } from './styles';

const Register = () => {
  const schema: ISchema = {
    username: {
      value: '',
      isValid: true,
      isNotValidmessage: 'Debe contener almenos 6 caracteres',
      hasFocus: false,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      validation: (value: string) => value.trim().length > 6,
      label: 'Nombre de usuario',
    },

    email: {
      value: '',
      isValid: true,
      hasFocus: false,
      isNotValidmessage: 'Debe ser un email valido',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    },
  };
  const back = () => {
    console.log('back');
  };
  const submit = (objValues: IUserRegister) => {
    console.log({ objValues });
  };
  const buttons = [
    { text: 'Registrarme', type: 'normal', onClick: submit, isSubmit: true },
    { text: '¿Tienes una cuenta? \n Inicia sesion', type: 'alternate', onClick: back, isSubmit: false },
  ];
  return (
    <SceneContainer>
      <Title />
      <Form<IUserRegister> schema={schema} buttons={buttons}></Form>
    </SceneContainer>
  );
};

export default Register;
