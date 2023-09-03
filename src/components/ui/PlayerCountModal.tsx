import React from 'react';

interface PlayerCountModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (count: number) => void;
}

interface ModalButtonProps {
  text: string;
  onClick: () => void
}

const ModalButton = ({text, onClick}: ModalButtonProps) => {
  return <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" onClick={onClick}>{text}</button>
}

const PlayerCountModal: React.FC<PlayerCountModalProps> = ({ isOpen, onClose, onSelect }) => {
  if (!isOpen) return null;

  const playersSelection = [
    {
      text: "2 players",
      handler: onSelect(2)
    },
    {
      text: "6 players",
      handler: onSelect(4)
    },
    {
      text: "4 players",
      handler: onSelect(6)
    }
  ]

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl space-y-4">
        <h2 className="text-2xl font-bold">Select Number of Players</h2>
        {playersSelection.map(item => <ModalButton key={item.text} onClick={() => item.handler} text={item.text} />)}

        <button onClick={onClose}>x</button>
      </div>
    </div>
  );
}

export default PlayerCountModal;