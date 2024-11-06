import { useState } from 'react'
import './App.css'

import CVForm from './components/CVForm';
import CVPreview from './components/CVPreview';

function App() {
  const [formData, setFormData] = useState({
    personalInfo: { name: '', email: '', phone: '' },
    education: { school: '', study: '', schoolDate: '' },
    work: { company: '', position: '', responsibilities: '', workDate: '' }
});

  return (
    <div style={{display: "flex", flexDirection: "row", gap: 100}}>
      <CVForm formData={formData} setFormData={setFormData}/>
      <CVPreview formData={formData}/>
    </div>
  )
}

export default App
