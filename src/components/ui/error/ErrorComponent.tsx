import React from 'react';
import * as C from './style/style'

export const ErrorComponent: React.FC = () => {
    return(
        <C.FieldError>
            <C.Message>Erro ao carregar produtos</C.Message>
        </C.FieldError>
    )
}