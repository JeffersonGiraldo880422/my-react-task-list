import React from "react";
import { ChakraProvider, CSSReset, Container, Input, Button } from "@chakra-ui/react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import { TaskProvider } from "./components/TaskContext";

const App = () => {
  return (
    <ChakraProvider>
      <CSSReset />
      <Container maxW="container.md">
        <Header title="Mi Lista de Tareas" />
        <TaskProvider>
          <TaskList />
        </TaskProvider>
      </Container>
    </ChakraProvider>
  );
};

export default App;
