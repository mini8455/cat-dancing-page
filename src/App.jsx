import Layout from './components/Layout';
import DancingCat from './components/DancingCat';
import AnimationControls from './components/AnimationControls';
import { useAnimation } from './hooks/useAnimation';
import './styles/global.css';
import './styles/app.css';

export default function App() {
  const { mode, isPlaying, toggle, changeMode } = useAnimation();

  return (
    <Layout>
      <DancingCat mode={mode} />
      <AnimationControls
        mode={mode}
        isPlaying={isPlaying}
        onToggle={toggle}
        onChangeMode={changeMode}
      />
    </Layout>
  );
}
