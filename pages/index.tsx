import { useSession } from "next-auth/react"
import LoginPage from "../components/LoginPage/LoginPage"
import Dashboard from "../components/Dashboard/Dashboard";
import { ClipLoader } from "react-spinners";

const Home = () => {
  const { status } = useSession();
  if (status === 'loading') {
    return (
      <div className="flex justify-center h-screen items-center">
        <ClipLoader size={80} color="black" />
      </div>
    )
  }

  if (status === 'authenticated') {
    return (
      <Dashboard />
    )
  }

  if (status === 'unauthenticated') {
    return (
      <LoginPage />
    )
  }
}

export default Home
