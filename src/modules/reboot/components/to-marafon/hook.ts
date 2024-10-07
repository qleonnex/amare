import { useRouter } from "next/navigation";

export const useToMarafon = () => {
	const router = useRouter();
	
	function redirect() {
		router.push("https://t.me/+1sN_KHOqpOo3MmY0");
	}
	
	return { redirect };
};