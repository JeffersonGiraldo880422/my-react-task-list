import React from 'react';

function Eliminar({ onDeleteCompletedTasks }) {
  return (
    <button className="eliminar" onClick={onDeleteCompletedTasks}>
      Eliminar tareas completadas
    </button>
  );
}

export default Eliminar;