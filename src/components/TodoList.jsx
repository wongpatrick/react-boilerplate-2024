import { useState, useEffect } from "react";
import List from '@mui/material/List';
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import { Box, Typography } from "@mui/material";


const getInitialData = () => {
    const data = JSON.parse(localStorage.getItem('todos'))
    if (!data) return [];
    return data;
}

export default function TodoList() {
    const [todos, setTodos] = useState(getInitialData);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const addTdo = (text) => {
        setTodos(prevTodos => {
            return [...prevTodos, {text: text, id: crypto.randomUUID(), completed: false}];
        })
    }
    const removeTodo = (id) => {
        setTodos(prevTodos => {
            return prevTodos.filter(todo => todo.id !== id);
        });
    }

    const toggleTodo = (id) => {
        setTodos(prevTodos => {
            return prevTodos.map(todo => {
                if (todo.id === id) {
                    return {...todo, completed: !todo.completed}
                } else {
                    return todo;
                }
            })
        })
    }
    return (
        <Box sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                m: 3,
            }}
        >
            <Typography variant="h6" component="h1" sx={{
                flexGrow: 1,
            }}>
                Todos
            </Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {todos.map(todo => (
                    <TodoItem 
                        key={todo.id} 
                        todo={todo} 
                        remove={removeTodo}
                        toggle={()=> toggleTodo(todo.id)}
                    />
                ))}
                <TodoForm addTdo={addTdo}/>
            </List>
        </Box>
    )
}