import { useRouter } from 'next/navigation'

const useRedirect = (url) => {
	const router = useRouter();

  const redirect = () => router.push(url);

	return redirect;
}

export default useRedirect