import { PaymentMethods } from './components/PaymentMethods'

export default function Billing() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-col flex-grow justify-center items-center">
        <PaymentMethods />
      </div>
    </div>
  )
}