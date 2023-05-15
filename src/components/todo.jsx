import { useState } from 'react';
import { ExportToCsv } from 'export-to-csv';
import './Todo.css';

export default function Todo() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');
  const [priority, setPriority] = useState('low');
  const [dueDate, setDueDate] = useState('');

  const handleAddTask = () => {
    if (text) {
      const newTask = {
        text: text,
        priority: priority,
        dueDate: dueDate,
      };
      setTasks([...tasks, newTask]);
      setText('');
      setPriority('low');
      setDueDate('');
    }
  };
  
  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const handleExportCsv = () => {
    if(tasks.length === 0)
    {
      return alert('excel is empty')
    }
    const csvData = tasks.map((task) => ({
      Task: task.text,
      Priority: task.priority,
      DueDate: task.dueDate,
    }));
    const options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalSeparator: '.',
      showLabels: true,
      useTextFile: false,
      useBom: true,
      useKeysAsHeaders: true,
    };
    const csvExporter = new ExportToCsv(options);
    csvExporter.generateCsv(csvData);
  };

  return (
    <>
      <div className="header">
        <h1>Malicious Data List</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Task"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <select
                className="form-select"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
              <input
                type="date"
                className="form-control"
                placeholder="Due Date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
              <button className="btn btn-primary" onClick={handleAddTask}>
                Add Data
              </button>
            </div>
          </div>
          <div className="col-md-4">
            <button className="btn btn-success" onClick={handleExportCsv}>
              Export to CSV
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <table className="table">
              <thead>
                <tr>
                  <th>Task</th>
                  <th>Priority</th>
                  <th>Due Date</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task, index) => (
                  <tr className={`priority-${task.priority}`} key={index}>
                    <td>{task.text}</td>
                    <td>{task.priority}</td>
                    <td>{task.dueDate}</td>
                    <td><button className="btn btn-danger" onClick={() => handleDeleteTask(index)}>Delete</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </>
  )}