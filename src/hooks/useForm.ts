/* eslint-disable @typescript-eslint/no-explicit-any */
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { ISchema } from 'src/components/Form/types';
export const useForm = <T extends object>(initialState: ISchema, handleNotify?: (state: ISchema) => void) => {
  const [fields, setValues] = useState(initialState);
  const [isValid, setIsValid] = useState(false);

  const handleFieldsChange = (value: string, key: string) => {
    if (!key) return;
    const oldElem = { ...fields[key] };
    const newElem = {
      value: oldElem.transformToNumber ? Number(value) : value,
    };
    if (oldElem.notify && handleNotify) handleNotify({ ...fields, [key]: { ...oldElem, ...newElem } });
    setValues((f) => ({
      ...f,
      [key]: { ...f[key], ...newElem, isValid: f[key].validation(value) || !f[key].hasFocus },
    }));
  };

  const handleOnFocus = (key: string) => {
    if (!key) return;

    const oldElem = { ...fields[key] };
    const newElem = {
      hasFocus: true,
    };
    setValues((f) => ({
      ...f,
      [key]: {
        ...f[key],
        ...newElem,
        isValid: f[key].validation(f[key].value),
      },
    }));
  };
  const handleValidity = () => {
    let isValidProps = true;
    Object.keys(fields).forEach((key) => {
      if ((!fields[key].isValid || !fields[key].hasFocus) && !fields[key].isDisabled) {
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
