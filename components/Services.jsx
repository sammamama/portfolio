import { Cloud, DatabaseZap, Monitor, Rotate3D } from 'lucide-react';
import ssa from '@/public/banking.png';
import Image from 'next/image';

const Services = () => {
  return (
    <div className="px-4 py-8 max-w-7xl mx-5">
      <div className="text-[46px] mb-12 w-full text-start text-white">Services</div>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {/* Frontend Projects */} 
        <div className="bg-neutral-800/70 md:row-span-2 lg:row-span-1 text-neutral-300 rounded-lg p-5
         flex flex-col shadow-lg transform 
         transition-transform duration-300">
          <div className="text-xl font-bold mb-3">Frontend Projects</div>
          <div className="text-sm font-light mb-4">
            Delivering modern and responsive frontend projects with clean code and seamless user interfaces, using the latest technologies like JavaScript, React/Next, and CSS to bring your vision to life.
          </div>
          <Image
            src={ssa}
            alt="project"
            className="rounded-lg object-cover mb-4"
          />
        </div>

        {/* Fullstack Webapps */}
        <div className="bg-neutral-400 text-neutral-800 rounded-lg p-5 flex flex-col shadow-lg transform transition-transform duration-300">
          <div className="flex items-center mb-3">
            <Monitor className="text-neutral-700 mr-3" />
            <div className="text-xl font-bold">Fullstack Webapps</div>
          </div>
          <div className="text-sm font-light">
            Building robust full-stack web applications, combining frontend excellence with backend expertise. Proficient in JavaScript, React, Node.js, and database management to create seamless, scalable, and efficient web solutions.
          </div>
        </div>

        {/* Database Management */}
        <div className="bg-neutral-400 text-neutral-800 rounded-lg p-5 flex flex-col shadow-lg transform transition-transform duration-300">
          <div className="flex items-center mb-3">
            <DatabaseZap className="text-neutral-700 mr-3" />
            <div className="text-xl font-bold">Database Management</div>
          </div>
          <div className="text-sm font-light">
            Providing reliable database management solutions, specializing in designing, optimizing, and maintaining databases to ensure data integrity, security, and scalability for your applications.
          </div>
        </div>

        {/* Animated Websites */}
        <div className="bg-neutral-400 text-neutral-800 rounded-lg p-5 flex flex-col shadow-lg transform transition-transform duration-300">
          <div className="flex items-center mb-3">
            <Rotate3D className="text-neutral-700 mr-3" />
            <div className="text-xl font-bold">Animated Websites</div>
          </div>
          <div className="text-sm font-light">
            Creating dynamic and engaging animated websites with smooth transitions and interactive elements, using Framer Motion and advanced CSS animations to captivate users and enhance user experience.
          </div>
        </div>

        {/* Cloud Technologies */}
        <div className="bg-neutral-400 text-neutral-800 rounded-lg 
         p-5 flex flex-col shadow-lg transform transition-transform duration-300 xl:col-span-full">
          <div className="flex items-center mb-3">
            <Cloud className="text-neutral-700 mr-3" />
            <div className="text-xl font-bold">Cloud Technologies</div>
          </div>
          <div className="text-sm font-light">
            Leveraging cloud technologies to deploy, scale, and manage applications efficiently, ensuring high availability, performance, and security. Expertise in AWS and other cloud platforms to meet modern business needs.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
