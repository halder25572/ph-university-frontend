/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ReactNode } from 'react';
import { FormProvider, useForm, type FieldValues, type SubmitHandler } from 'react-hook-form';


// for type error

type TFromConfig = {
    defaultValues?: Record<string, any>
}


type TFormProps = {
    onSubmit: SubmitHandler<FieldValues>;
    children: ReactNode;
} & TFromConfig;

const PhForm = ({ onSubmit, children, defaultValues }: TFormProps) => {

    const formConfig: TFromConfig = {};

    if (defaultValues) {
        formConfig['defaultValues'] = defaultValues;
    }

    const methods = useForm(formConfig);
    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                {children}
            </form>
        </FormProvider>
    );
};

export default PhForm;