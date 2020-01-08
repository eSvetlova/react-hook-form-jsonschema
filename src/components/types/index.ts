import { createContext, useContext } from 'react'
import { FormContextValues, FieldValues } from 'react-hook-form'

import { JSONSchemaType } from '../../JSONSchema'

export interface FormValuesWithSchema<T> extends FormContextValues<T> {
  schema: JSONSchemaType
}

export const InternalFormContext = createContext<FormValuesWithSchema<
  FieldValues
> | null>(null)

export function useFormContext<T extends FieldValues>(): FormValuesWithSchema<
  T
> {
  return useContext(InternalFormContext) as FormValuesWithSchema<T>
}

export type FormContextProps = { schema: JSONSchemaType }
