import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login.jsx";
import Dashboard from "./Pages/Dashboard";
import Register from "./Pages/Register.jsx";
import Menuu from "./menu/Menuu.jsx";
import Navbar from "./menu/Navbar.jsx";
import Courses from "./Pages/Courses.jsx";
import My_tasks from "./Pages/My_tasks.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import Career_pathway from "./Pages/Career_pathway.jsx";

export default function App() {
    return (
        <>
            <Menuu />
            <Navbar />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                } />
                <Route path="/register" element={
                    <Register />} />
                <Route path="/courses" element={
                    <ProtectedRoute><Courses /></ProtectedRoute>} />
                    <Route path="/career_pathway" element={
                    <ProtectedRoute><Career_pathway /></ProtectedRoute>} />
                <Route path="/my_Tasks" element={
                    <ProtectedRoute><My_tasks /></ProtectedRoute>} />
            </Routes>
        </>
    );
}

