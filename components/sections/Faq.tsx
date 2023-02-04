export default function Faq() {
  return (
    <div className="space-y-4">
      <p className="text-md">FAQs</p>
      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50">
          <h2 className="font-medium text-gray-900 text-md">
            Should I buy cash or take out a bond?
          </h2>

          <svg
            className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>

        <p className="text-md px-4 mt-4 leading-relaxed text-gray-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
          veritatis molestias culpa in, recusandae laboriosam neque aliquid
          libero nesciunt voluptate dicta quo officiis explicabo consequuntur
          distinctio corporis earum similique!
        </p>
      </details>

      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50">
          <h2 className="font-medium text-gray-900 text-md">
            How do I calculate my monthly bond payments?
          </h2>

          <svg
            className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>

        <p className="px-4 mt-4 leading-relaxed text-gray-700 text-md">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
          veritatis molestias culpa in, recusandae laboriosam neque aliquid
          libero nesciunt voluptate dicta quo officiis explicabo consequuntur
          distinctio corporis earum similique!
        </p>
      </details>
    </div>
  );
}
