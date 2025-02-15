import { useState } from "react";
import ppp from "/src/assets/ppp.png";
import { Trash2, PencilLine, ImagePlus } from "lucide-react";
import { LuCircleUserRound } from "react-icons/lu";

function Partners() {
  const [showDiv, setShowDiv] = useState(false);

  return (
    <div className="flex flex-col lg:pl-32 md:pl-56 items-center mt-6 bg-blue-50 w-full">
      <div className="mt-0"> 
        <section id="partners" className="p-6 my-10">
          <h1 className="text-3xl mb-6 font-bold"> 
            Team members
            <button className="border px-3 py-1 w-[80px] bg-orange-500 text-white text-sm rounded-full p-2"> 48 users </button>
          </h1>
          <div className="bg-white px-4 py-2 rounded-lg shadow-md">
            <div className="flex justify-end items-end pb-4">
              <button 
                className="bg-orange-500 text-white px-4 py-1 rounded-full shadow-md hover:bg-orange-600 transition-all"
                onClick={() => setShowDiv(true)}
              >
                + Add
              </button>
            </div>
            {showDiv && (
              <div className="fixed inset-0 pl-28 bg-black bg-opacity-50 flex justify-center items-center z-50">
                
                

                <div className="bg-white p-6 rounded-lg shadow-md w-[800px]">
  <div className="flex justify-between items-start">
    <h2 className="text-2xl font-bold mb-4">Your Profile</h2>
    <button onClick={() => setShowDiv(false)} className="bg-red-500 text-white px-4 py-2 rounded-full shadow-md">Close</button>
  </div>

  <div className="grid grid-cols-2 gap-6">
    {/* Left Column - Profile Picture, Name, Surname */}
    <div>
      <div className="flex items-center gap-4  border-gray-300 p-4 rounded-lg mb-4">
      <div className="w-24 h-24 bg-gray-100 border-dashed border-2 flex flex-col items-center justify-center border-gray-400 text-center">
  <ImagePlus className="text-gray-400 w-6 h-6 mb-1" />
  <h1 className="text-xs text-gray-500">Upload Your Photo</h1>
</div>

        <div className="flex gap-2">
          <button className="bg-orange-600 text-white px-4 py-2 rounded-full">Delete</button>
          <button className="bg-orange-600 text-white px-4 py-2 rounded-full">Upload</button>
        </div>
      </div>

      <div className="mb-2 mt-4">
        <label className="block text-gray-700">User name</label>
        <input type="text" className="w-full p-2 bg-gray-100 rounded-lg border border-gray-400" defaultValue="Kate" />
      </div>

      <div>
        <label className="block text-gray-700">User surname</label>
        <input type="text" className="w-full p-2 bg-gray-100 rounded-lg border border-gray-400" defaultValue="Paisley" />
      </div>
    </div>

    {/* Right Column - Jobs, Email, Bio */}
    <div>
      <div className="mb-4">
        <label className="block text-gray-700">Jobs</label>
        <input type="text" className="w-full p-2 bg-gray-100 rounded-lg border border-gray-400" defaultValue="Project Designer" />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input type="text" className="w-full p-2 bg-gray-100 rounded-lg border border-gray-400" defaultValue="Katepaisley@gmail.com" />
      </div>

      <div>
        <label className="block text-gray-700">Your bio</label>
        <textarea className="w-full h-[110px] p-2 bg-gray-100 rounded-lg border border-gray-400" placeholder="Add a short bio..."></textarea>
      </div>
    </div>
  </div>
</div>


                
              </div>
            )}
            <div className="overflow-x-auto">
              <table className="lg:w-[780px] md:w-[550px] border-collapse">
                <thead>
                  <tr className="border-b text-semibold text-gray-500">
                    <th className="text-left px-4 py-2">Name</th>
                    <th className="text-left px-4 py-2">Job</th>
                    <th className="text-left px-4 py-2">Email</th>
                    <th className="text-left px-4 py-2">Contact</th>
                    <th className="text-left px-4 py-2">Company</th>
                    <th className="text-left px-4 py-2">Status</th>
                    <th className="text-left px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(8)].map((_, index) => (
                    <tr key={index} className="border-b">
                      <td className="px-0 py-1 flex items-center text-sm space-x-1">
                        <img src={ppp} alt="User" className="w-8 h-8 rounded-full" />
                        <span>Justin Lipshutz</span>
                      </td>
                      <td className="px-4 text-sm py-1">Marketing</td>
                      <td className="px-4 text-sm py-1">abc@xyz.com</td>
                      <td className="px-4 text-sm py-1">+6465355555</td>
                      <td className="px-4 text-sm py-1">abc@xyz.com</td>
                      <td className="px-4 text-sm py-1">
                        <span className="bg-green-100 text-green-600 border-green-500 border px-3 py-1 rounded text-sm">Active</span>
                      </td>
                      <td className="px-4 text-sm py-1 flex space-x-2">
                        <button className="text-gray-500 hover:text-green-500"><PencilLine className="w-5 h-auto"/></button>
                        <button className="text-gray-500 hover:text-red-500"><Trash2 className="w-5 h-auto"/></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Partners;
