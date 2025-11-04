import { Download, Star } from "lucide-react";
import { toast } from "react-toastify";

function AppCard({ setSelectedApps, item, setDisabled }) {
  console.log(item);

  const handleUnstall=()=>{
      setSelectedApps((prevApps) => {
        const updated = prevApps.filter(app => app.id !== item.id);
        try {
          localStorage.setItem('selectedApps', JSON.stringify(updated));
        } catch {
          // ignore
        }
        return updated;
      });
      toast(item.title + " unstalled");
      setDisabled(false);
  }

  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 mb-4">
      <div className="flex items-center space-x-4">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-blue-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6l4 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            {item.title}
          </h2>
          <div className="flex items-center text-sm text-gray-500 space-x-3 mt-1">
            <span className="flex items-center gap-1 text-green-600">
              <Download className="w-4 h-4" /> 8M
            </span>
            <span className="flex items-center gap-1 text-purple-600">
              <Star className="w-4 h-4 fill-purple-600" /> {item.ratingAvg}
            </span>
            <span>{item.size}</span>
          </div>
        </div>
      </div>

      <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2 rounded-lg font-semibold" onClick={handleUnstall}>
        Uninstall
      </button>
    </div>
  );
}


export default AppCard;