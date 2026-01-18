export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white w-full max-w-md p-8 rounded-xl shadow">
        <h2 className="text-2xl font-semibold text-center text-blue-700 mb-6">
          Patient Registration
        </h2>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 mb-4 border rounded-lg"
        />

        <input
          type="email"
          placeholder="Email address"
          className="w-full p-3 mb-4 border rounded-lg"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 border rounded-lg"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full p-3 mb-4 border rounded-lg"
        />

        <select
          disabled
          className="w-full p-3 mb-6 border rounded-lg bg-gray-100 text-gray-500"
        >
          <option>Patient</option>
        </select>

        <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
          Register
        </button>
      </div>
    </div>
  );
}
