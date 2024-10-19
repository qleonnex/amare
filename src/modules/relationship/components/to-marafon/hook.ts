import { useRouter } from "next/navigation"

export const useToMarafon = () => {
	const router = useRouter()

	function redirect() {
		router.push("https://t.me/+UuOCk0-Sj4AzMzY0")

		if (typeof window.fbq === 'function') {
			window.fbq('track', 'Lead')
		}
	}

	return { redirect }
}