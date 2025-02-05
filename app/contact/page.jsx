import logo from "../../public/logo-fix.png";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="bg-gradient-to-r from-white via-black to-white p-2">

    <div className="max-w-md md:mx-auto mx-5 p-6 bg-white shadow-2xl my-10 ">
      <Image src={logo} alt="logo" className="w-16 scale-150 " />
      <h1 className="text-2xl font-semibold mb-4 -mt-4 text-center">Company Name</h1>
      <div className="space-y-2">
        <p className="text-gray-800">
          <strong>Phone:</strong> +62 812-8279-3443
        </p>
        <p className="text-gray-800">
          <strong>Email:</strong> info@levanaliving.com
        </p>
        <p className="text-gray-800">
          <strong>Tiktok:</strong> levana.living
        </p>
        <p className="text-gray-800">
          <strong>Instagram:</strong> @levana.living
        </p>
        <p className="text-gray-800">
          <strong>Address:</strong> Taman Century I, Jl. Mimosa 3 No.E 9 Bekasi
          17148, Indonesia.
        </p>
      </div>
    </div>
    </div>
  );
}
