/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { ISchema } from 'src/components/Form/types';
export const useForm = <T extends object>(initialState: ISchema, handleNotify?: (state: ISchema) => void) => {
  const [fields, setValues] = useState(initialState);
  const [isValid, setIsValid] = useState(false);

  const handleFieldsChange = (value: string, key: string) => {
    if (!key) return;
    const oldElem = { ...fields[key] };
    const newElem = {
      ...oldElem,
      value: oldElem.transformToNumber ? Number(value) : value,
      isValid: oldElem.validation(value),
    };
    if (newElem.notify && handleNotify) handleNotify({ ...fields, [key]: { ...newElem } });
    setValues({
      ...fields,
      [key]: { ...newElem },
    });
  };

  const handleOnFocus = (key: string) => {
    if (!key) return;
    const oldElem = { ...fields[key] };
    const newElem = {
      ...oldElem,
      hasFocus: true,
      isValid: oldElem.validation(oldElem.value),
    };
    setValues({
      ...fields,
      [key]: { ...newElem },
    });
  };
  const handleValidity = () => {
    let isValidProps = true;
    Object.keys(fields).forEach((key) => {
      if (!fields[key].isValid || !fields[key].hasFocus) {
        isValidProps = false;
        return;
      }
    });
    setIsValid(isValidProps);
  };

  const getValues = (): T => {
    const values: any = {};
    Object.keys(fields).forEach((key) => {
      values[key] = fields[key].value as string;
    });
    return values as T;
  };

  const handleIsInvalid = () => {
    const newState = { ...fields };
    Object.keys(fields).forEach((key) => {
      if (!fields[key].hasFocus) newState[key].hasFocus = true;
    });
    setValues(newState);
  };
  useEffect(() => {
    handleValidity();
  }, [fields]);

  const handleClear = () => setValues(initialState);
  return [
    fields,
    isValid,
    handleFieldsChange,
    getValues,
    handleOnFocus,
    handleIsInvalid,
    handleClear,
  ] as const;
};
