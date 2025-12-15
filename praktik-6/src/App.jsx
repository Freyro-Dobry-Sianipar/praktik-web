import React from 'react';
import './App.css';
import LifecycleDemo from './components/LifecycleDemo';
import DataFetchingDemo from './components/DataFetchingDemo';
import EffectDependenciesDemo from './components/EffectDependenciesDemo';

function App() {
  return (
    <div className="App">
      <h1>Praktik useEffect dan Lifecycle - Pertemuan 6</h1>
      <LifecycleDemo />
      <DataFetchingDemo />
      <EffectDependenciesDemo />
    </div>
  );
}

export default App;