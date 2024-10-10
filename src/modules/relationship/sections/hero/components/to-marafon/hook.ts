import { useRouter } from "next/navigation"

export const useToMarafon = () => {
	const router = useRouter()

	function redirect() {
		router.push("https://t.me/+Jp--HFmX8jRiYTI0")

		if (typeof window.fbq === 'function') {
			window.fbq('track', 'Lead')
		}
	}

	return { redirect }
}