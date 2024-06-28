import { logout } from "@/actions/auth";


export const LogoutBtn = () => {
  return (
    <form action={logout} className="pt-5">
      <button
        className="bg-red-500 text-white px-2 py-1 rounded w-44"
        type="submit"
      >
        Sign out
      </button>
    </form>
  );
};
