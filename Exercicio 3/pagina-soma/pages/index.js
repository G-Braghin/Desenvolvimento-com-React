// Importa o React e o hook useState do React
import React, { useState } from 'react';

// Define o componente principal da página
export default function Home() {
    // Define os estados num1, num2 e soma usando o hook useState
    const [num1, setNum1] = useState(0); // Guarda o primeiro número
    const [num2, setNum2] = useState(0); // Guarda o segundo número
    const [soma, setSoma] = useState(null); // Guarda o resultado da soma

    // Função para lidar com o evento de envio do formulário
    const handleSum = (e) => {
        e.preventDefault(); // Previne o comportamento padrão de envio do formulário
        // Converte num1 e num2 para números e calcula a soma
        setSoma(Number(num1) + Number(num2));
    };

    // Renderiza o conteúdo da página
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Calculadora de Soma</h1>
            {/* Formulário para entrada dos números */}
            <form onSubmit={handleSum}>
                <div>
                    <label>
                        Número 1:
                        {/* Campo de entrada para o primeiro número */}
                        <input
                            type="number" // Define o tipo como 'number' para garantir a entrada numérica
                            value={num1} // Associa o valor de num1 ao input
                            onChange={(e) => setNum1(e.target.value)} // Atualiza o estado num1 com o valor digitado
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Número 2:
                        {/* Campo de entrada para o segundo número */}
                        <input
                            type="number" // Define o tipo como 'number' para garantir a entrada numérica
                            value={num2} // Associa o valor de num2 ao input
                            onChange={(e) => setNum2(e.target.value)} // Atualiza o estado num2 com o valor digitado
                        />
                    </label>
                </div>
                {/* Botão para enviar o formulário e calcular a soma */}
                <button type="submit">Calcular Soma</button>
            </form>
            {/* Exibe o resultado da soma se ele for diferente de null */}
            {soma !== null && (
                <h2>Resultado: {soma}</h2>
            )}
        </div>
    );
}
