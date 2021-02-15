import React from 'react';
import { makePrivateRequest } from 'core/utils/request';
import BaseForm from '../../BaseForm';
import './styles.scss';
import { useForm } from 'react-hook-form';

type FormState = {
  name: string;
  price: string;
  description: string;
  imageUrl: string;
}

const Form = () => {
  const { register, handleSubmit, errors } = useForm<FormState>();

  const onSubmit = (data: FormState) => {
    makePrivateRequest({ url: '/products', method: 'POST', data });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <BaseForm title="cadastrar um produto">
        <div className="row">
          <div className="col-6">
            <div className="margin-bottom-30">
              <input
                ref={register({
                  required: "Campo obrigatório",
                  minLength: { value: 5, message: 'O campo deve ter no mínimo 5 caracteres' },
                  maxLength: { value: 60, message: 'O campo deve ter no máximo 60 caracteres' }
                })}
                name="name"
                type="text"
                className="form-control input-base"
                placeholder="Nome do produto"
              />
              {errors.name && (
                <div className="invalid-feedback d-block">
                  {errors.name.message}
                </div>
					    )}
            </div>
            <div className="margin-bottom-30">
              <input
                ref={register({
                  required: "Campo obrigatório",
                })}
                name="price"
                type="number"
                min="0"
                className="form-control input-base"
                placeholder="Preço"
              />
              {errors.price && (
                <div className="invalid-feedback d-block">
                  {errors.price.message}
                </div>
					    )}
            </div>
            <div className="margin-bottom-30">
              <input
                ref={register({ required: "Campo obrigatório" })}
                name="imageUrl"
                type="uri"
                className="form-control input-base"
                placeholder="URL da imagem"
              />
              {errors.imageUrl && (
                <div className="invalid-feedback d-block">
                  {errors.imageUrl.message}
                </div>
					    )}
            </div>
          </div>
          <div className="col-6">
            <textarea
              ref={register({ required: "Campo obrigatório" })}
              name="description"
              className="form-control input-base"
              placeholder="Descrição"
              cols={30}
              rows={10}
            />
            {errors.description && (
              <div className="invalid-feedback d-block">
                {errors.description.message}
              </div>
            )}
          </div>
        </div>
      </BaseForm>
    </form>
  );
}

export default Form;