import React from 'react';
import TodoList from './components/TodoList';
import './App.css';

function App() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-600 mb-8">
                    <span className="mr-2">✓</span>
                    Imanol's To Do List
                    <span className="text-blue-400 ml-2">⚛️</span>
                </h1>
                <TodoList />
                <footer className="mt-8 text-center text-gray-500 text-sm">
                    Desarrollado con <span className="text-red-500">❤</span> por Alfonso Imanol Macias Marañon
                </footer>
            </div>
        </div>
    );
}

export default App;