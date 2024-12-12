import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { TaskFormPage } from "./pages/TaskFormPage";
import { TasksPage } from "./pages/TasksPage";
import { Toaster } from "react-hot-toast";
import { Login } from "./pages/Login";

function App() {
  return (
      <BrowserRouter>
        <Navigation />
        <div className="container mx-auto">
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="/tasks-create" element={<TaskFormPage />} />
            <Route path="/tasks/:id" element={<TaskFormPage />} />
          </Routes>
          <Toaster />
        </div>
      </BrowserRouter>
  );
}

export default App;
