import { useRouter } from 'next/router';

export default function Post() {
  const router = useRouter();
  const { id } = router.query; // Get the dynamic ID from the URL

  return (
    <div>
      <h1>Post ID: {id}</h1>
    </div>
  );
}