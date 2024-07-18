import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../../api/auth/[...nextauth]/route";

const Profile = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/user/login");
  }
  // if (session.user.id === "64e3d463c0decd9d8a1cb09d") {
  //   console.log("true");
  // }
  // console.log(session.user.id);
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
