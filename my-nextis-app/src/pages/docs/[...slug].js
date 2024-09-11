import { useRouter } from 'next/router';

export default function Docs() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>Documentation</h1>
      <p>Slug: {slug?.join('/')}</p>
    </div>
  );
}