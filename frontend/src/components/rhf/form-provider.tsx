import * as React from 'react';

import {
  FormProvider as RhfProvider,
  type FieldValues,
  type SubmitHandler,
  type UseFormReturn,
} from 'react-hook-form';

// ----------------------------------------------------------------------

export type FormProviderProp<TFieldValues extends FieldValues> = React.PropsWithChildren<{
  methods: UseFormReturn<TFieldValues>;
  onSubmit: SubmitHandler<TFieldValues>;
}>;

export default function FormProvider<TFieldValues extends FieldValues>({
  methods,
  onSubmit,
  children,
}: FormProviderProp<TFieldValues>) {
  return (
    <RhfProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </RhfProvider>
  );
}
