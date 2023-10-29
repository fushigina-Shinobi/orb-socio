import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function PostLayout() {
  const router = useRouter();
  useEffect(() => {
    router?.push('/home');
  }, []);
  return <div></div>;
}
