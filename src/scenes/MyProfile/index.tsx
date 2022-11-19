import React, { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import { SceneContainer } from 'src/components/SceneContainer';
import { StyledText } from 'src/components/StyledText';
import { StyledView } from 'src/components/StyledView';
import { strings } from './strings';
import { Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { PaletteScale, TypographyScale } from 'src/styles/types';

const MyProfile = () => {
  const [editing, setEditing] = useState(false);
  const [user, setUser] = useState({
    username: 'grazo',
    description: "I'm a software engineer. Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum",
  });

  const toggleEdit = () => {
    setEditing(!editing);
    if (editing) {
      sendUpdates();
    }
  };
  const [filePath, setFilePath] = useState<any>();

  const sendUpdates = () => {
    console.log(filePath);
  };

  const handleChange = (key: 'username' | 'description') => (text: any) => {
    var newUser = { ...user };
    newUser[key] = text;
    setUser(newUser);
  };

  interface Action {
    title: string;
    type: 'capture' | 'library';
    options: any;
  }

  const actions: Action[] = [
    {
      title: 'Take Image',
      type: 'capture',
      options: {
        saveToPhotos: true,
        mediaType: 'photo',
        includeBase64: false,
      },
    },
    {
      title: 'Select Image',
      type: 'library',
      options: {
        selectionLimit: 0,
        mediaType: 'photo',
        includeBase64: false,
      },
    },
  ];

  const chooseFile = () => {
    let options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response: any) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setFilePath(response);
      }
    });
  };

  return (
    <SceneContainer>
      <StyledView
        style={{
          flex: 1,
          alignItems: 'center',
          flexDirection: 'column',
          marginTop: 40,
          height: '70%',
          justifyContent: 'space-evenly',
        }}
      >
        <StyledText
          color={PaletteScale.PRIMARY_FIRST}
          typography={TypographyScale.HEADING_BOLD2}
          style={{ textAlign: 'center' }}
        >
          Mi Perfil
        </StyledText>
        <StyledView>
          <Image
            source={{
              uri:
                filePath?.uri ||
                'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=identicon&f=y',
            }}
            style={{ width: 150, height: 150, borderRadius: 75, marginBottom: 20 }}
          />
          {editing && <Button onPress={chooseFile}>Cambiar foto</Button>}
        </StyledView>
        <StyledText color={PaletteScale.BLACK}> Nombre de usuario</StyledText>
        <TextInput
          value={user.username}
          editable={editing}
          onChange={handleChange('username')}
          style={{
            backgroundColor: editing ? 'lightgrey' : 'transparent',
            fontSize: 20,
            fontWeight: 'bold',
            padding: 10,
            margin: 10,
            borderRadius: 10,
            textAlign: 'center',
          }}
        />

        <StyledText color={PaletteScale.BLACK}> Descripción</StyledText>
        <TextInput
          value={user.description}
          editable={editing}
          onChange={handleChange('description')}
          style={{
            backgroundColor: editing ? 'lightgrey' : 'transparent',
            fontSize: 16,
            textAlign: 'center',
            padding: 10,
            borderRadius: 10,
            width: '80%',
          }}
          multiline
        />
        <Button onPress={toggleEdit}>{editing ? strings.saveLabel : strings.editLabel}</Button>
      </StyledView>
    </SceneContainer>
  );
};

export default MyProfile;
