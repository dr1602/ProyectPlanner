import React from 'react';
import './TodoForm.css';

function TodoForm({ addTodo, setOpenModal }) {
  const [newTodoValue, setNewTodoValue] = React.useState('');
  const [newTodoDate, setNewTodoDate] = React.useState('');
  const [newTeamMember, setNewTeamMember] = React.useState('');
  const dateControl = document.querySelector('input[type="date"]');
  
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
    console.log(newTodoValue)
  };

  const onChangeDate = () => {
    setNewTodoDate(String(dateControl.value));
    console.log(newTodoDate)
  };

  const onChangeTeamMember = (event) => {
    setNewTeamMember(event.target.value);
    console.log(event.target.value)
  };

  const onCancel = () => {
    setOpenModal(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue, newTodoDate, newTeamMember);
    setOpenModal(false);
  };

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();

  today = String(yyyy + '-' + mm + '-' + dd);

  return (
    <form onSubmit={onSubmit}>
      <label> ¿Cuál es tu nuevo Proyecto? </label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder='Ingresa tu nuevo Proyecto'
      />

      <label className='Fecha-entrega'> Fecha de Entrega: </label>
      <input
        type='date' 
        id='due-date' 
        name='due-date'
        min={today}
        onChange={onChangeDate}
      />

      <label className='Fecha-entrega'> Responsable: </label>

      <select 
        name='responsables' 
        id='responsables'
        placeholder='ASUNTO'
        defaultValue='ASUNTO'
        value={`TBD`}
        onChange={onChangeTeamMember}
      >
        <option value='TBD' defaultValue={`TBD`} selected hidden > Miembros del Equipo </option>
        <option value='JV'> J. V. </option>
        <option value='NC'> N. C. </option>
        <option value='AMF'> A. M. F. </option>
      </select>

      <div className='TodoForm-buttonContainer'>
        <button
          type='button'
          className='TodoForm-button TodoForm-button--cancel'
          onClick={onCancel}
          >
          Cancelar
        </button>
        <button
          type='submit'
          className='TodoForm-button TodoForm-button--add'
        >
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };