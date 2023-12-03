import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './screens/Dashboard';
import Manage from './screens/data/Manage';
import Contact from './screens/data/Contact';
import Invoice from './screens/data/Invoice';
import Profile from './screens/pages/Profile';
import Calendar from './screens/pages/Calendar';
import Kanban from './screens/pages/Kanban';
import TextEditor from './screens/pages/TextEditor';
import Faq from './screens/pages/Faq';
import Pie from './screens/charts/Pie';
import Line from './screens/charts/Line';
import Bar from './screens/charts/Bar';
import Geography from './screens/charts/Geography';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/manage" element={<Manage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/calender" element={<Calendar />} />
        <Route path="/kanban" element={<Kanban />} />
        <Route path="/text" element={<TextEditor />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/bar" element={<Bar />} />
        <Route path="/pie" element={<Pie />} />
        <Route path="/line" element={<Line />} />
        <Route path="/geography" element={<Geography />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
