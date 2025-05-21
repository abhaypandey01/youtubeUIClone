
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SingleVideoPage from './pages/SingleVideoPage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/video/:id' element={<SingleVideoPage />} />
    </Routes>
  )
}

export default App;