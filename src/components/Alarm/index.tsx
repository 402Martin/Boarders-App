import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'src/store';
import { alarmActions } from 'src/store/alarm.slice';
import { PaletteScale } from 'src/styles/types';
import Message from '../Message';
import { StyledView } from '../StyledView';
import { styles } from './styles';

const Alarm = () => {
  const alarm = useAppSelector((state: { alarm: any }) => state.alarm);
  const dispatch = useAppDispatch();
  const [isAlarmActive, setIsAlarmActive] = useState<boolean>(false);
  useEffect(() => {
    if (!alarm.message) return;
    console.log(alarm.message);
    setIsAlarmActive(true);
    setTimeout(() => {
      setIsAlarmActive(false);
      dispatch(alarmActions.clearAlarm());
    }, 5000);
  }, [alarm]);

  useEffect(() => {
    console.log(alarm.message);
    console.log(isAlarmActive);
  }, [isAlarmActive]);
  return (
    <>
      {isAlarmActive && (
        <StyledView style={styles.container}>
          <Message
            message={alarm.message || ''}
            color={alarm?.type || PaletteScale.SECONDARY_ACCENT_ERROR_RED50}
            backgroundColor={alarm?.type || PaletteScale.SECONDARY_ACCENT_ERROR_RED50}
          ></Message>
        </StyledView>
      )}
    </>
  );
};

export default Alarm;
