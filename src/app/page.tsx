import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    //
    <>
      <div className="lg:p-40 lg:mx-48">
      

      <section className="text-gray-200 body-font">
          <div className="container mx-auto flex px-5 pt-16 pb-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image src="/xnote.jpeg" width={400} height={400} alt="Xnote" />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-200">
              Xnote
            </h1>
            <p className="mb-8 leading-relaxed">
              A simple text editor built with C and GTK3.
            </p>
            <div className="flex justify-center">
              <Link
                href="https://github.com/xanmoy/xnote/blob/main/xnote"
                className="inline-flex text-white bg-zinc-500 border-0 py-2 lg:px-6 px-3 focus:outline-none hover:bg-zinc-600 rounded text-lg"
              >
                Download Now
              </Link>
              <Link
                href="https://github.com/xanmoy/xnote.git"
                className="ml-4 inline-flex text-zinc-700 bg-zinc-100 border-0 py-2 px-6 focus:outline-none hover:bg-zinc-200 rounded text-lg"
              >
                Get Source
              </Link>
            </div>
          </div>
        </div>
      </section>

        <div className="p-4">
        <section className=" body-font">
          <h2 className="text-2xl text-center text-gray-50 font-bold mb-4">
            Features
          </h2>
          <div className="container px-5 py-5 pb-24 mx-auto flex flex-wrap">
            
            <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left">
                <ul className="list-disc list-inside pb-16  text-gray-200 space-y-2">
                <li>Open text files</li>
                <li>Save text files</li>
                <li>Direct save option</li>
                <li>Day/night mode</li>
                <li>Font size increaser</li>
                <li>Open a new editor window</li>
                <li>Simple and intuitive graphical user interface (GUI)</li>
              </ul>
            </div>
            <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
              <Image src="/im1.png" width={500} height={500} alt="feature" />{" "}
            </div>
          </div>
        </section>

        <section className="body-font">
          <h2 className="text-2xl text-center font-bold text-gray-50 mb-4">
            Requirements
          </h2>
          <div className="container px-5 py-5 pb-24 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
              <Image src="/im2.png" width={500} height={500} alt="feature" />
            </div>
            <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left">
              <ul className="list-disc text-gray-200 list-inside space-y-2">
                <li>GTK+ 3.0</li>
                <li>pkg-config</li>
                <li>gcc (GNU Compiler Collection)</li>
              </ul>
            </div>
           
          </div>
        </section>
        <div className="">
          <section className="container mx-auto my-8" id="installation">
            <h2 className="text-2xl text-center font-bold mb-4">
              Installation
            </h2>
            <h3 className="text-xl text-center font-semibold mb-2">
              Arch Linux
            </h3>
            <p className="mb-4">Install Dependencies:</p>
            <pre className="bg-zinc-900 p-4 rounded mt-2 text-sm md:text-base overflow-x-auto whitespace-pre-wrap">
              <code>
                sudo pacman -Syu <br />
                sudo pacman -S base-devel gtk3 atk glib2
              </code>
            </pre>
            <p className="mb-4">Clone the Repository:</p>
            <pre className="bg-zinc-900 p-4 rounded mt-2 text-sm md:text-base overflow-x-auto whitespace-pre-wrap">
              <code>
                git clone https://github.com/xanmoy/xnote.git <br />
                cd xnote
              </code>
            </pre>
            <p className="mb-4">Compile the Project:</p>
            <pre className="bg-zinc-900 p-4 rounded mt-2 text-sm md:text-base overflow-x-auto whitespace-pre-wrap">
              <code>
                gcc xnote.c -o xnote `pkg-config --cflags --libs gtk+-3.0`
              </code>
            </pre>
            <p className="mb-4">Build the Project:</p>
            <pre className="bg-zinc-900 p-4 rounded mt-2 text-sm md:text-base overflow-x-auto whitespace-pre-wrap">
              <code>make</code>
            </pre>
            <p className="mb-4">Install the Application:</p>
            <pre className="bg-zinc-900 p-4 rounded mt-2 text-sm md:text-base overflow-x-auto whitespace-pre-wrap">
              <code>sudo make install</code>
            </pre>
          </section>
          <section className="container mx-auto my-8">
            <h2 className="text-2xl text-center font-bold mb-4">Usage</h2>
            <p className="mb-4">Run the application from the terminal:</p>
            <pre className="bg-zinc-900 p-4 rounded mt-2 text-sm md:text-base overflow-x-auto whitespace-pre-wrap">
              <code>xnote</code>
            </pre>
          </section>
          <section className="container mx-auto my-8">
            <h2 className="text-2xl text-center font-bold mb-4">Development</h2>
            <p className="mb-4">
              If you want to contribute or make modifications to the project,
              you can build it using the following commands:
            </p>
            <h3 className="text-xl font-semibold mb-2">Build the Project:</h3>
            <pre className="bg-zinc-900 p-4 rounded mt-2 text-sm md:text-base overflow-x-auto whitespace-pre-wrap">
              <code>make</code>
            </pre>
            <h3 className="text-xl font-semibold mb-2">Clean the Build:</h3>
            <pre className="bg-zinc-900 p-4 rounded mt-2 text-sm md:text-base overflow-x-auto whitespace-pre-wrap">
              <code>make clean</code>
            </pre>
          </section>
          <section className="container mx-auto my-8">
            <h2 className="text-2xl text-center font-bold mb-4">
              File Structure
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>xnote.c:</strong> Main source code file for the text
                editor.
              </li>
              <li>
                <strong>Makefile:</strong> Build instructions for the project.
              </li>
            </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
