import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Você pode usar FontAwesome ou qualquer outra biblioteca de ícones
import { faCopy } from '@fortawesome/free-solid-svg-icons'; // Ícone de cópia

interface CommandCopyButtonProps {
    title: string;
    command: string;
}

const CommandCopyButton: React.FC<CommandCopyButtonProps> = ({ title, command }) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(command).then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000); // Define o estado de "copiado" de volta para falso após 2 segundos
        });
    };

    return (
        <div className='px-2'>
            <div className='font-semibold'>{title}</div>
            <div className='flex flex-row justify-between items-center font-mono text-sm bg-slate-50 rounded-md text-gray-700 p-2'>
                {command}
                <button onClick={handleCopy} title='Copiar'>
                    <FontAwesomeIcon icon={faCopy} />
                </button>
            </div>
            {isCopied && <div className='text-xs'>Copiado para a área de transferência!</div>}
        </div>
    );
};

export default CommandCopyButton;
