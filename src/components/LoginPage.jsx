import { useState } from "react";
import { KeyIcon } from "@heroicons/react/16/solid";
import { ArrowLongUpIcon } from "@heroicons/react/16/solid";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [isSaas, setIsSaas] = useState(true);
  const navigate = useNavigate();
  const handleSignIn = (option) => {
    console.log(`Signing in with: ${option}`);
    navigate('/home');
  };
  const renderSignInOptions = () => {
    const commonOptions = [
      {
        option: "GitLab",
        img: "/src/assets/gitlab.svg",
        label: "Sign in with GitLab",
      },
    ];

    const saasOptions = [
      {
        option: "GitHub",
        img: "/src/assets/github.svg",
        label: "Sign in with GitHub",
      },
      {
        option: "Bitbucket",
        img: "/src/assets/bitbucket.svg",
        label: "Sign in with Bitbucket",
      },
      {
        option: "Azure DevOps",
        img: "/src/assets/azure-devops.svg",
        label: "Sign in with Azure DevOps",
      },
    ];

    const selfHostedOptions = [
      {
        option: "SSO",
        icon: <KeyIcon className="w-5" />,
        label: "Sign in with SSO",
      },
    ];

    const options = isSaas
      ? [...saasOptions, ...commonOptions]
      : [...commonOptions, ...selfHostedOptions];

    return options.map(({ option, img, icon, label }, index) => (
      <button
        key={index}
        onClick={() => handleSignIn(option)}
        className="flex items-center justify-center w-full p-2 border rounded-xl gap-3"
      >
        {img && <img src={img} alt={label} className="w-5" />}
        {icon}
        {label}
      </button>
    ));
  };

  return (
    <div className="flex gap-2 w-full items-center justify-center">
      <div className="hidden  md:flex h-full w-1/2 bg-white border-r relative flex-col justify-center items-centre">
        <div className="flex rounded-xl shadow-xl p-4 flex-col w-full max-w-[400px] bg-white">
          <div className="flex gap-2 items-center border-b p-4">
            <img src="/src/assets/logo.svg" alt="logo" className="w-6 h-6" />
            <span className="font-semibold">
              AI to Detect & Autofix Bad Code
            </span>
          </div>
          <div className="flex gap-4 justify-between items-center p-4">
            {[
              { value: "30+", label: "Language Support" },
              { value: "10K+", label: "Developers" },
              { value: "100K+", label: "Hours Saved" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <span className="font-semibold">{item.value}</span>
                <span className="text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-[250px] rounded-xl shadow-2xl p-4  translate-x-[80%] -translate-y-[25px] bg-white">
          <div className="flex justify-between min-w-10">
            <img src="/src/assets/GraphAuth.svg" alt="graph" />
            <div className="flex flex-col">
              <div className="flex items-center text-primary text-blue-600">
                <ArrowLongUpIcon className="w-5" />
                14%
              </div>
              <div className="font-light text-xs">This week</div>
            </div>
          </div>
          <div className="mr-12 -ml-12 mt-2">
            <div className="flex flex-col">
              <span className="font-semibold">Issues Fixed</span>
              <span className="font-semibold text-2xl">500K+</span>
            </div>
          </div>
        </div>
        <img
          src="/src/assets/logoFaded.png"
          alt="logo"
          className="w-[250px] aspect-square -ml-12 mt-10"
        />
      </div>

      <div className="flex w-full max-w-[400px] md:max-w-full md:w-1/2 flex-col justify-center items-center p-4 gap-4">
        <div className="bg-white flex flex-col rounded-xl w-full border">
          {/* Toggle Buttons */}
          <div className="border-b flex flex-col p-5 w-full gap-4">
            <div className="flex items-center justify-center gap-4">
              <img src="/src/assets/logo.svg" alt="logo" />
              <span className="font-light">CodeAnt AI</span>
            </div>
            <div className="flex justify-center text-2xl font-semibold mt-2">
              Welcome to CodeAnt AI
            </div>

            {/* Animated Button Switch */}
            <motion.div
              className="bg-gray-100/70 border rounded-xl flex overflow-hidden"
              layout
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <motion.button
                className={`p-3 w-1/2 text-center ${
                  isSaas ? "bg-[#1570EF] text-white" : ""
                }`}
                onClick={() => setIsSaas(true)}
                whileTap={{ scale: 0.90}} // Add tap animation
              >
                SAAS
              </motion.button>
              <motion.button
                className={`p-3 w-1/2 text-center ${
                  !isSaas ? "bg-[#1570EF] text-white" : ""
                }`}
                onClick={() => setIsSaas(false)}
                whileTap={{ scale: 0.90 }} // Add tap animation
              >
                Self Hosted
              </motion.button>
            </motion.div>
          </div>

          {/* Animated Transition */}
          <motion.div
            key={isSaas} // Framer Motion detects key changes to re-render
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8}}
            className="flex flex-col p-5"
          >
            <div className="flex items-center justify-center w-full">
              <div onClick={handleSignIn} className="flex items-center flex-col justify-center w-full gap-2 max-w-[400px]">
                {renderSignInOptions()}
              </div>
            </div>
          </motion.div>
        </div>
        <div>
          <span>
            By signing up you agree to the <b>Privacy Policy.</b>
          </span>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
