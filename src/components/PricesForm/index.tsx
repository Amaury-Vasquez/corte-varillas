import { Fragment } from 'react';
import { useForm } from 'react-hook-form';

import { Div, Form, Input, Submit } from './styles';

export const PricesForm = (props: { callback: Function; len: number }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { callback, len } = props;

  const onSubmit = (data: any) => {
    const values = Object.keys(data).map((key) => parseInt(data[key]));
    callback(values);
  };
  const inputs = Array.from(Array(len).keys());

  return (
    <Div>
      <Form len={len + 1} onSubmit={handleSubmit(onSubmit)}>
        {inputs.map((item) => (
          <Fragment key={'input' + item}>
            <Input {...register(`input${item}`, { required: true })} />
            {errors.test}
          </Fragment>
        ))}
        <Submit type="submit" value="Aceptar" />
      </Form>
    </Div>
  );
};
