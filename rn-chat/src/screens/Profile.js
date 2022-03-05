import React, { useContext, useState } from 'react';
import { UserContext } from '../contexts';
import styled from 'styled-components/native';
import { Button, Image, Input } from '../components';
import { getCurrentUser, updateUserInfo } from '../firebase';
import { Alert } from 'react-native-web';
import { ProgressContext } from '../contexts';

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

const Profile = () => {
  const { spinner } = useContext(ProgressContext);
  const { setUser } = useContext(UserContext);
  const user = getCurrentUser();

  const [photo, setPhoto] = useState(user.photo);

  const _handlePhotoChange = async (url) => {
    try {
      spinner.start();
      const photoURL = await updateUserInfo(url);
      setPhoto(photoURL);
    } catch (e) {
      Alert.alert('Photo Error', e.message);
    } finally {
      spinner.stop();
    }
  };

  return (
    <Container>
      <Image showButton url={photo} onChangePhoto={_handlePhotoChange} />
      <Input label="Name" value={user.name} disabled />
      <Input label="Email" value={user.email} disabled />
      <Button title="Sign out" onPress={() => setUser({})} />
    </Container>
  );
};

export default Profile;
