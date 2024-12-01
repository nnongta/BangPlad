import { useRouter } from 'next/router';

export default function Article() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Article: {slug}</h1>
      <p>This is the content for {slug}.</p>
    </div>
  );
}
