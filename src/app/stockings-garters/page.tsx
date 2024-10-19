import { StockingsGartersPage } from '@/modules/stockings-garters'
import { OpenerProvider } from '@/provider/OpenerProvider'

export default function StockingsGarters() {
	return (
		<OpenerProvider>
			<StockingsGartersPage />
		</OpenerProvider>
	);
}