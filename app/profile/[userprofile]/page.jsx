import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../../api/auth/[...nextauth]/route";

const Profile = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/user/login");
  }
  return (
    <main className="mx-24 mt-10">
      <section className="flex justify-center items-center my-5">
        <h4 className="text-xl font-bold font-sans">
          Welcome Back{" "}
          <span className="text-green-600">{session.user.name}</span>
        </h4>
      </section>
    </main>
  );
};
export default Profile;
