import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './context/AuthProvider'
import { DEFAULT_ROUTE, NAV_ITEMS } from './config/navigation'
import { AppLayout } from './layouts/AppLayout/AppLayout'
import { LoginPage } from './pages/Login/LoginPage'
import { ModulePage } from './pages/Module/ModulePage'
import { ProtectedRoute } from './routes/ProtectedRoute'

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />

          {/* Rutas de módulos: solo accesibles con sesión activa. */}
          <Route element={<ProtectedRoute />}>
            <Route element={<AppLayout />}>
              {NAV_ITEMS.map((item) => (
                <Route
                  key={item.id}
                  path={item.path}
                  element={<ModulePage />}
                />
              ))}
            </Route>
          </Route>

          <Route path="*" element={<Navigate to={DEFAULT_ROUTE} replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
