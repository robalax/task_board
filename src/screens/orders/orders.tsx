import { HomeIconSvg, Logo } from "../../svg";

const Orders = () => {
  const iterations = Array.from({ length: 18 }, (_, index) => index + 1);

  return (
    <body>
      <div className="flex h-screen">
        <div className="w-64 p-6 border-r bg-gray-100">
          <div className="flex items-center mb-8 text-lg font-semibold">
            <span className="w-[30px]">
              <Logo />
            </span>
            <span className="ml-3">Catalyst</span>
          </div>
          <nav className="mb-8">
            <a href="#" className="flex items-center mb-4 text-gray-700">
              <span className="mr-2 w-[18px]">
                <HomeIconSvg />
              </span>{" "}
              Home
            </a>
            <a href="#" className="flex items-center mb-4 text-gray-700">
              <span className="mr-2 w-[18px]">
                <HomeIconSvg />
              </span>{" "}
              Events
            </a>
            <a href="#" className="flex items-center mb-4 text-gray-700">
              <span className="mr-2 w-[18px]">
                <HomeIconSvg />
              </span>{" "}
              Orders
            </a>
            <a href="#" className="flex items-center text-gray-700">
              <span className="mr-2 w-[18px]">
                <HomeIconSvg />
              </span>{" "}
              Settings
            </a>
          </nav>
          <div className="mt-10">
            <h3 className="text-sm font-semibold text-gray-700">
              Upcoming Events
            </h3>
            <ul className="mt-2 text-gray-600">
              <li className="mb-1">Bear Hug: Live in Concert</li>
              <li className="mb-1">Six Fingers — DJ Set</li>
              <li className="mb-1">We All Look The Same</li>
              <li>Viking People</li>
            </ul>
          </div>
        </div>

        <div className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold">Orders</h1>
            <button className="bg-black text-white px-4 py-2 rounded">
              Create order
            </button>
          </div>
          <div className="bg-white rounded overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead className="border-b-[2px]">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                    Order number
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                    Purchase date
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                    Event
                  </th>
                  <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {iterations.map(() => (
                  <tr className="border-b">
                    <td className="px-6 py-4 text-sm text-gray-700">3000</td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      May 9, 2024
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Leslie Alexander
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Bear Hug: Live in Concert
                    </td>
                    <td className="px-6 py-4 text-right text-sm text-gray-700">
                      US$80.00
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </body>
  );
};

export { Orders };
