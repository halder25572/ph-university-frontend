/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form } from 'antd';
import type { ReactNode } from 'react';
import { FormProvider, useForm, type FieldValues, type SubmitHandler } from 'react-hook-form';


// for type error
type TFromConfig = {
    defaultValues?: Record<string, any>;
    resolver?: any
}


type TFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
  defaultValues?: Record<string, any>;
  resolver?: any
};

const PhForm = ({ onSubmit, children, defaultValues, resolver }: TFormProps) => {

    const formConfig: TFromConfig = {};

    if (defaultValues) {
        formConfig['defaultValues'] = defaultValues;
    }

    if (resolver) {
        formConfig['resolver'] = resolver;
    }

    const methods = useForm(formConfig);

    // for reset form
    const submit: SubmitHandler<FieldValues> = (data) => {
        onSubmit(data)
        methods.reset();
    }
    return (
        <FormProvider {...methods}>
            <Form layout='vertical' onFinish={methods.handleSubmit(submit)}>
                {children}
            </Form>
        </FormProvider>
    );
};

export default PhForm;