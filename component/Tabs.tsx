interface TabsProps {
  status: string;
  setStatus: (status: string) => void;
}

const activeStyles = `border-blue-600 dark:border-blue-500 text-blue-600`;

const Tabs: React.FC<TabsProps> = ({ status, setStatus }) => {
  return (
    <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
      <ul className="flex flex-wrap -mb-px">
        <li className="mr-2" onClick={()=>setStatus("ALL")}>
          <a
            href="#"
            className={`inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${status == `ALL` ? activeStyles : ``}`}
          >
            ALL
          </a>
        </li>
        <li className="mr-2" onClick={()=>setStatus("ACTIVE")}>
          <a
            href="#"
            className={`inline-block p-4 border-b-2 rounded-t-lg  dark:text-blue-500 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${status == `ACTIVE` ? activeStyles : ``}`}
            aria-current="page"
          >
            ACTIVE
          </a>
        </li>
        <li className="mr-2" onClick={()=>setStatus("COMPLETE")}>
          <a
            href="#"
            className={`inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${status == `COMPLETE` ? activeStyles : ``}`}
          >
            COMPLETE
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Tabs;
