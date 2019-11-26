import React from 'react';

function Home() {
  return (
    <div className="Home m-5">
      <div className="container mx-auto">
        <div className="w-auto rounded overflow-hidden shadow-lg bg-white">
          <div className="px-6 py-4">
            <h3 className="font-bold text-xl mb-2">
              Hey, I'm Bayu Bimantara, just another Programmer
            </h3>
            <p className="text-black">
              So what is Programmer?
            </p>
            <br />
            <p className="text-black">pro·gram·mer - /ˈprōˌɡramər/<br />
              a person who writes computer programs or a machine that turns coffee into code.
            </p>
            <br />
            <p className="text-black">
              This website created using :
              <ol className="list-decimal text-black m-5">
                <li>
                  <a href="https://reactjs.org" className="hover:text-teal-500" target="_blank">Reactjs</a>
                </li>
                <li>
                  <a href="https://tailwindcss.com" className="hover:text-teal-500" target="_blank">Tailwindcss</a>
                </li>
              </ol>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
