import React from 'react'

export function PaymentMethods() {
  return (
    <div className="bg-card p-6 w-96 rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold mb-6 text-gray-100">Payment methods</h1>

      <div className="mb-4 flex flex-col justify-between border-gray-600 rounded-lg p-3">
        <div className="flex items-center">
          <img src="/images/visa.svg" alt="Visa" className="w-12 mr-3" />
          <div>
            <div className="text-gray-300">••••4399</div>
            <div className="text-gray-500">Expires 11/2025</div>
          </div>
        </div>
        <span className="text-white py-1 px-3 rounded-lg">Default</span>
      </div>

      <div className="mb-4 flex flex-col justify-between border-gray-600 rounded-lg p-3">
        <div className="flex items-center">
          <img src="/images/mastercard.svg" alt="MasterCard" className="w-12 mr-3" />
          <div>
            <div className="text-gray-300">••••5616</div>
            <div className="text-gray-500">Expires 10/2028</div>
          </div>
        </div>
        <button className="mt-3 text-blue-500 py-1 px-3 border border-blue-500 rounded-lg">
          Set as default
        </button>
      </div>

      <button className="mt-3 border border-gray-600 text-gray-300 rounded-lg py-2 px-4 w-full">
        Add payment method
      </button>
    </div>
  )
}