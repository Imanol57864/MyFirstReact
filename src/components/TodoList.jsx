import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';

function TodoList() {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    const [text, setText] = useState('');

    // Guardar tareas en localStorage cada vez que cambien
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    function addTask(text) {
        if (!text.trim()) return; // Linea simple para evitar tareas vacias
        const newTask = { 
            id: Date.now(),
            text,
            completed: false
        };
        setTasks([...tasks, newTask]);
        setText('');
    }

    function deleteTask(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }

    function toggleCompleted(id) {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    }

    function clearCompletedTasks() {
        setTasks(tasks.filter(task => !task.completed));
    }

    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            addTask(text);
        }
    }

    const completedCount = tasks.filter(task => task.completed).length;
    const hasCompletedTasks = completedCount > 0;

    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-8 p-6">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Mis Tareas</h2>
                <div className="flex space-x-2">
                    <input
                        value={text}
                        onChange={e => setText(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="¿Qué necesitas hacer?"
                    />
                    <button 
                        onClick={() => addTask(text)}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
                    >
                        Añadir
                    </button>
                </div>
            </div>
            
            <div className="space-y-3">
                {tasks.length === 0 ? (
                    <p className="text-gray-500 text-center py-4">No hay tareas pendientes</p>
                ) : (
                    tasks.map(task => (
                        <TodoItem
                            key={task.id}
                            task={task}
                            deleteTask={deleteTask}
                            toggleCompleted={toggleCompleted}
                        />
                    ))
                )}
            </div>
            
            {tasks.length > 0 && (
                <div className="mt-6 flex justify-between items-center text-sm text-gray-500">
                    <div>
                        {completedCount} de {tasks.length} tareas completadas
                    </div>
                    {hasCompletedTasks && (
                        <button 
                            onClick={clearCompletedTasks}
                            className="text-red-500 hover:text-red-700 transition duration-200"
                        >
                            Borrar completadas
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}

export default TodoList;