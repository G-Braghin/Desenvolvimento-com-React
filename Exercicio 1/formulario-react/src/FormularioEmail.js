// Importa as bibliotecas React, useFormik (para gerenciar o formulário) e Yup (para validação de dados)
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// Define o componente FormularioEmail, que contém o campo de e-mail com validação
const FormularioEmail = () => {
    // Configuração do formulário usando o hook useFormik, que gerencia o estado e a validação do formulário
    const formik = useFormik({
        // Estado inicial do campo e-mail, definido como uma string vazia
        initialValues: { email: '' },
        
        // Esquema de validação para o campo e-mail usando Yup
        validationSchema: Yup.object({
            // Validação do campo e-mail:
            email: Yup.string()
                .email('Endereço de e-mail inválido') // Verifica se o valor tem o formato de e-mail
                .matches(
                    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    'Formato de e-mail inválido' // Validação extra para garantir que o e-mail possui um formato válido
                )
                .required('O campo e-mail é obrigatório') // Validação que torna o campo obrigatório
                .min(5, 'O e-mail deve ter pelo menos 5 caracteres') // Validação de comprimento mínimo
                .max(50, 'O e-mail deve ter no máximo 50 caracteres'), // Validação de comprimento máximo
        }),

        // Função chamada quando o formulário é enviado, exibindo o e-mail inserido em um alerta
        onSubmit: (values) => {
            alert(`Email enviado: ${values.email}`);
        },
    });

    // Retorna o formulário JSX com o campo de e-mail e as mensagens de erro de validação
    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                {/* Rótulo do campo e-mail */}
                <label htmlFor="email">Email:</label>
                
                {/* Campo de entrada de e-mail, que é controlado pelo Formik */}
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange} // Atualiza o estado do e-mail ao digitar
                    onBlur={formik.handleBlur} // Marca o campo como "tocado" ao perder o foco, o que permite exibir a mensagem de erro
                    value={formik.values.email} // Liga o valor do input ao estado gerenciado pelo Formik
                />
                
                {/* Exibe a mensagem de erro se o campo e-mail estiver inválido e tiver sido "tocado" */}
                {formik.touched.email && formik.errors.email ? (
                    <div style={{ color: 'red' }}>{formik.errors.email}</div>
                ) : null}
            </div>
            
            {/* Botão para enviar o formulário, que chama a função onSubmit do Formik */}
            <button type="submit">Enviar</button>
        </form>
    );
};

// Exporta o componente para ser usado em outros arquivos, como App.js
export default FormularioEmail;
