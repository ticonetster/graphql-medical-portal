import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="health-app">
      <Router>
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={<placeholder/>}
            />
            <Route
              path="/test/"
              element={<placeholder/>}
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
