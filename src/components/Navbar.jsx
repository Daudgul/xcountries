import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center items-center h-14">
          {/* Links */}
          <div className="flex gap-6 text-sm md:text-base">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-1 rounded-lg transition ${
                  isActive ? "bg-blue-600 text-white" : "hover:bg-slate-700"
                }`
              }
            >
              HTML
            </NavLink>

            <NavLink
              to="/css"
              className={({ isActive }) =>
                `px-3 py-1 rounded-lg transition ${
                  isActive ? "bg-blue-600" : "hover:bg-slate-700"
                }`
              }
            >
              CSS
            </NavLink>

            <NavLink
              to="/js"
              className={({ isActive }) =>
                `px-3 py-1 rounded-lg transition ${
                  isActive ? "bg-yellow-500 text-black" : "hover:bg-slate-700"
                }`
              }
            >
              JS
            </NavLink>

            <NavLink
              to="/react"
              className={({ isActive }) =>
                `px-3 py-1 rounded-lg transition ${
                  isActive ? "bg-cyan-500 text-black" : "hover:bg-slate-700"
                }`
              }
            >
              React
            </NavLink>

            <NavLink
              to="/node"
              className={({ isActive }) =>
                `px-3 py-1 rounded-lg transition ${
                  isActive ? "bg-green-600" : "hover:bg-slate-700"
                }`
              }
            >
              Node
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
