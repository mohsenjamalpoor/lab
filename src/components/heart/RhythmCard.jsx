import { Link } from "react-router-dom";

export default function RhythmCard({ rhythm }) {
  return (
    <Link
      to={`/rhythm/${rhythm.id}`}
      className="block bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg overflow-hidden"
    >
      <img
        src={rhythm.image}
        alt={rhythm.name}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
          {rhythm.name}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {rhythm.description.slice(0, 60)}...
        </p>
      </div>
    </Link>
  );
}
