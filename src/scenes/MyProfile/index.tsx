import React, { useEffect, useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import { SceneContainer } from 'src/components/SceneContainer';
import { StyledText } from 'src/components/StyledText';
import { StyledView } from 'src/components/StyledView';
import { strings } from './strings';
import { Image } from 'react-native';
import ImagePicker, { ImagePickerResponse } from 'react-native-image-picker';
import { PaletteScale, TypographyScale } from 'src/styles/types';
import { userService } from 'src/services';
import { User } from 'src/types/user.types';
import { useDispatch } from 'react-redux';
import { useAppSelector, userActions } from 'src/store';
import { alarmActions } from 'src/store/alarm.slice';
import { fileService } from 'src/services/file.service';
import { deafultImg } from 'src/common/constants';

const MyProfile = () => {
  const [editing, setEditing] = useState(false);
  const [userUpdated, setUserUpdated] = useState<Partial<User> | null>(null);
  const dispatch = useDispatch();
  const id = useAppSelector((state) => state.user.id);

  const toggleEdit = () => {
    if (editing) {
      sendUpdates();
    }
    setEditing(!editing);
  };
  const [filePath, setFilePath] = useState<ImagePickerResponse>();

  const sendUpdates = async () => {
    if (!userUpdated) return;
    const res = await userService.update({ ...userUpdated, id });
    if (!res.data) return;

    dispatch(alarmActions.clearAlarm());
    dispatch(
      alarmActions.setAlarm({
        message: 'Perfil actualizado',
        type: PaletteScale.SECONDARY_ACCENT_SUCCESS_GREEN50,
      }),
    );
    dispatch(userActions.setUser({ ...res.data }));
  };

  const handleChange = (key: 'username' | 'description') => (text: any) => {
    var newUser = { ...userUpdated };
    newUser[key] = text;
    setUserUpdated(newUser);
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
    ImagePicker.showImagePicker(options, async (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const res = await fileService.upload(response);
        console.log(res);
        if (!res?.data) return;
        setUserUpdated((u) => ({ ...u, profilePicId: res.data.id }));
        setFilePath(response);
      }
    });
  };

  const getUser = async () => {
    const res = await userService.get(id);
    if (!res.data) return;
    setUserUpdated(res.data);
  };

  useEffect(() => {
    if (!filePath?.uri) return;
    const source = { uri: filePath.uri };
  }, [filePath, filePath?.uri]);

  useEffect(() => {
    console.log(userUpdated);
    getUser();
  }, []);

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
                userUpdated?.profilePic?.path ||
                deafultImg,
            }}
            style={{ width: 150, height: 150, borderRadius: 75, marginBottom: 20 }}
          />
          {editing && <Button onPress={chooseFile}>Cambiar foto</Button>}
        </StyledView>
        <StyledText color={PaletteScale.BLACK}> Nombre de usuario</StyledText>
        <TextInput
          value={userUpdated?.username}
          editable={editing}
          onChangeText={handleChange('username')}
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
          value={userUpdated?.description}
          editable={editing}
          onChangeText={handleChange('description')}
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
