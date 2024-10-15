const Filter = () => {
  return (
    <div className="m-2 max-w-screen-md">
      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <div className="mt-2 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          
          <div className="flex flex-col">
            <label
              htmlFor="status"
              className="text-stone-600 text-sm font-medium"
            >
              Age
            </label>
            <select
              id="status"
              className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            >
              <option>15-25</option>
              <option>&gt;25</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="status"
              className="text-stone-600 text-sm font-medium"
            >
              Gender
            </label>
            <select
              id="status"
              className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            >
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="date"
              className="text-stone-600 text-sm font-medium"
            >
              Start Date
            </label>
            <input
              type="date"
              id="date"
              className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="date"
              className="text-stone-600 text-sm font-medium"
            >
              End Date
            </label>
            <input
              type="date"
              id="date"
              className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
        </div>

        {/* <div className="mt-6 grid w-full grid-cols-2 justify-end space-x-4 md:flex">
          <button className="active:scale-95 rounded-lg bg-gray-200 px-8 py-2 font-medium text-gray-600 outline-none focus:ring hover:opacity-90">
            Reset
          </button>
          <button className="active:scale-95 rounded-lg bg-blue-600 px-8 py-2 font-medium text-white outline-none focus:ring hover:opacity-90">
            Search
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Filter;
