export default function Layout({ children }) {
  return (
    <div className="layout">
      <h1 className="title">🐱 고양이 댄스 파티</h1>
      <p className="subtitle">고양이와 함께 춤을 춰요!</p>
      <div className="stage">{children}</div>
    </div>
  );
}
