function Task() {
    const [tarefas, setTarefas] = useState([
      'Pagar a conta de luz',
      'Estudar React JS'
    ]);
    const [input, setInput] = useState('')
  
    //Ao carregar os componentes na tela
    useEffect(() =>{
      const tarefasStorage = localStorage.getItem('@tarefa');
      if(tarefasStorage) {
        setTarefas(JSON.parse(tarefasStorage))
      }
    },[]);
  
    useEffect(() => {
      localStorage.setItem('@tarefa', JSON.stringify(tarefas))
    },[tarefas]);
  
  
    function handleRegistrar(e) {
      e.preventDefault()
  
      setTarefas([...tarefas, input])
      setInput('')
    }
  
    return (
      <div>
        
        <form onSubmit={handleRegistrar}>
          <label>Nome da tarefa:</label>
          <input 
            placeholder='Digite uma tarefa'
            value={input}
            onChange={ (e) => setInput(e.target.value) }
          /><br/>
          <button type="submit">Registrar</button>
        </form>
  
        <br/><br/>
        <ul>
          {tarefas.map( tarefa => (
            <li key={tarefa}>{ tarefa }</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default Task;
  