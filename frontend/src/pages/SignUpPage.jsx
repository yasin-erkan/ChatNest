import { useState } from "react";
import { BotIcon } from "lucide-react";
import { Link } from "react-router";
import useSignUp from "../hooks/useSignUp";

const SignUpPage = () => {
  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { isPending, error, signupMutation } = useSignUp();

  const handleSignup = (e) => {
    e.preventDefault();
    signupMutation(signupData);
  };

  return (
    <div className="min-h-screen bg-base-300 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl mx-auto">
        <div className="card bg-base-200 shadow-xl">
          <div className="flex flex-col lg:flex-row">
            {/* Left Side - Form */}
            <div className="w-full lg:w-1/2 p-8 lg:p-12">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <BotIcon className="size-8 text-white" />
                  </div>
                  <span className="text-3xl font-bold text-white">ChatNest</span>
                </div>
                <h1 className="text-2xl font-bold text-white mb-2">Create your account</h1>
                <p className="text-white/80">Join our community of language learners</p>
              </div>

              {error && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg">
                  <p className="text-white">{error.response.data.message}</p>
                </div>
              )}

              <form onSubmit={handleSignup} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-white/90 mb-1">Full Name</label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition"
                      value={signupData.fullName}
                      onChange={(e) => setSignupData({ ...signupData, fullName: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/90 mb-1">Email</label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition"
                      value={signupData.email}
                      onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/90 mb-1">Password</label>
                    <input
                      type="password"
                      placeholder="Create a password"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition"
                      value={signupData.password}
                      onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                      required
                    />
                    <p className="mt-1 text-sm text-white/70">Must be at least 6 characters</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-white/20 bg-white/10 text-purple-500 focus:ring-purple-500"
                    required
                  />
                  <label className="text-sm text-white/90">
                    I agree to the{" "}
                    <a href="#" className="text-white hover:underline">terms</a> and{" "}
                    <a href="#" className="text-white hover:underline">privacy policy</a>
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-full"
                  disabled={isPending}
                >
                  {isPending ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-teal-600 border-t-transparent rounded-full animate-spin"></div>
                      Creating account...
                    </div>
                  ) : (
                    "Create Account"
                  )}
                </button>

                <p className="text-center text-white/90">
                  Already have an account?{" "}
                  <Link to="/login" className="text-white font-medium hover:underline">
                    Sign in
                  </Link>
                </p>
              </form>
            </div>

            {/* Right Side - Image */}
            <div className="hidden lg:block w-1/2 bg-white/5 backdrop-blur-sm p-12">
              <div className="h-full flex flex-col justify-center items-center text-center">
                <div className="relative w-64 h-64 mb-8">
                  <img
                    src="/i.png"
                    alt="Language learning illustration"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Connect with language partners worldwide
                </h2>
                <p className="text-white/80 max-w-sm">
                  Practice conversations, make friends, and improve your language skills together in a supportive community
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
