import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

import logo from "../../assets/bms-logo.png"

export default function PaymentModal({isOpen, setIsOpen, price}) {

  function closeModal() {
    setIsOpen(false)
  }

  const launchRazorPay =() =>{
    setIsOpen(false)
    let options={
        key:"rzp_test_6PSKdUifGuxJ1o",
        amount:price*100,
        currency:"INR",
        name:"Book My Show Clone",
        description:"Movie Purchase/Rental",
        image:logo,
        handler:()=>{
          setIsOpen(false);
          alert("payment succesfull")
        },
        theme:{color:"#c4242d"}
    }

    const razorpay = new window.Razorpay(options)
    razorpay.open();
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-30" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Please make a payment.
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                 Please click on the below button to continue your order.
                    </p>
                  </div>

                  <div className="w-full mt-4">
                    <button
                      type="button"
                      className="w-full inline-flex justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                      onClick={launchRazorPay}
                    >
                     pay {price}
                    </button>
                  </div>

                  <div className="w-full mt-4">
                    <button
                      type="button"
                      className="w-full inline-flex justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600  focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                  </div>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
