import { Link } from "react-router-dom";

const DashboardCard = ({ title, description, link }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition">
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {title}
        </h3>
        <p className="text-gray-500 text-base">
          {description}
        </p>
      </div>

      <Link
        to={link}
        className="mt-6 inline-block w-fit bg-blue-600 text-white px-5 py-2 rounded-lg text-base font-medium hover:bg-blue-700 transition"
      >
        Open
      </Link>
    </div>
  );
};

export default DashboardCard;
