import React from 'react';

function About() {
  return (
    <div className="About m-5">
      <div className="container mx-auto">
        <div className="w-auto rounded overflow-hidden shadow-lg bg-white">
          <div className="px-6 py-4">
            <h3 className="font-bold text-xl mb-2">
              <center>
                <img src="/qr-code.png" width="150" />
                Scan Me
              </center>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
