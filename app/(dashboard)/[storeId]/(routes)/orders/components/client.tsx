'use client'

import { useParams, useRouter } from 'next/navigation'

import { Heading } from '@/components/ui/heading'
import { Separator } from '@/components/ui/separator'
import { DataTable } from '@/components/ui/data-table'
import { OrderColumn, columns } from './columns'

interface OrderClientProps {
	data: OrderColumn[]
}

const OrderClient: React.FC<OrderClientProps> = ({ data }) => {
	const router = useRouter()
	const params = useParams()

	return (
		<>
			<Heading
				title={`Orders (${data.length})`}
				description='Manage Orders for your store'
			/>
			<Separator />
			<DataTable columns={columns} data={data} searchKey='products' />
		</>
	)
}

export { OrderClient }
