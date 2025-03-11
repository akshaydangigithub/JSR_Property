export default function AdminDashboard() {
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        <div className="rounded-xl border p-2.5 border-yellow-500 bg-yellow-50 flex flex-col justify-center items-center cursor-pointer select-none active:scale-95 transition-transform">
          <h2 className="text-lg font-semibold">Total Properties</h2>
          <p className="text-3xl font-semibold">50</p>
        </div>
        <div className="rounded-xl border p-2.5 border-yellow-500 bg-yellow-50 flex flex-col justify-center items-center cursor-pointer select-none active:scale-95 transition-transform">
          <h2 className="text-lg font-semibold">Total Brokers</h2>
          <p className="text-3xl font-semibold">20</p>
        </div>
        <div className="rounded-xl border p-2.5 border-yellow-500 bg-yellow-50 flex flex-col justify-center items-center cursor-pointer select-none active:scale-95 transition-transform">
          <h2 className="text-lg font-semibold">Total Users</h2>
          <p className="text-3xl font-semibold">100</p>
        </div>
        <div className="rounded-xl border p-2.5 border-red-500 bg-[#fff0f5] flex flex-col justify-center items-center cursor-pointer select-none active:scale-95 transition-transform">
          <h2 className="text-lg font-semibold">New Visit Requests</h2>
          <p className="text-3xl font-semibold">10</p>
        </div>
        <div className="rounded-xl border p-2.5 border-red-500 bg-[#fff0f5] flex flex-col justify-center items-center cursor-pointer select-none active:scale-95 transition-transform">
          <h2 className="text-lg font-semibold">New Broker Requests</h2>
          <p className="text-3xl font-semibold">5</p>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold">Recent Activities</h2>
        <div className="mt-4">
          <div className="flex items-center justify-between border-b border-gray-200 py-2">
            <div className="flex items-center space-x-2">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="User"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-semibold">John Doe</p>
                <p className="text-sm text-gray-500">Added a new property</p>
              </div>
            </div>
            <p className="text-sm text-gray-500">2 hours ago</p>
          </div>
          <div className="flex items-center justify-between border-b border-gray-200 py-2">
            <div className="flex items-center space-x-2">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="User"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-semibold">John Doe</p>
                <p className="text-sm text-gray-500">Added a new broker</p>
              </div>
            </div>
            <p className="text-sm text-gray-500">2 hours ago</p>
          </div>
          <div className="flex items-center justify-between border-b border-gray-200 py-2">
            <div className="flex items-center space-x-2">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="User"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-semibold">John Doe</p>
                <p className="text-sm text-gray-500">
                  Recieved a new visit request
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-500">2 hours ago</p>
          </div>
          <div className="flex items-center justify-between border-b border-gray-200 py-2">
            <div className="flex items-center space-x-2">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="User"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-semibold">John Doe</p>
                <p className="text-sm text-gray-500">
                  Recieved a new broker request
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-500">2 hours ago</p>
          </div>
        </div>
      </div>
    </>
  );
}
