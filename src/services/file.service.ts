import { IResponse } from 'src/types/request.types';
import axios from 'axios';
import { ImagePickerResponse } from 'react-native-image-picker';
import { endpoints } from './endpoints';
import { ProfilePic } from 'src/types/user.types';

class FileService {
  private endpoint: string;
  constructor() {
    this.endpoint = endpoints.files;
  }

  upload = async (data: ImagePickerResponse) => {
    const form = new FormData();
    if (!data.fileName || !data.uri || !data.type) return;

    form.append('file', {
      name: 'file',
      type: 'image/jpeg',
      uri: data.uri,
    });

    const res = await axios.post(this.endpoint, form, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return res.data as IResponse<ProfilePic>;
  };
}

export const fileService = new FileService();
