import React from 'react';

    function Musees() {
      return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
          <nav className="bg-black/20 backdrop-blur-md text-white fixed top-0 left-0 right-0 z-10">
            <div className="max-w-[2000px] mx-auto px-4 py-3 flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center">
                <div className="rounded-full overflow-hidden h-10 w-10 mr-3">
                  <a href="/">
                    <img
                      src="https://www.connaissancedesarts.com/wp-content/thumbnails/uploads/2020/05/cda2020_diapo_2019_heros-mythologie-museum-week-2-tt-width-1200-height-630-fill-0-crop-1-bgcolor-ffffff.jpg"
                      alt="Logo"
                      className="object-cover w-full h-full"
                    />
                  </a>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center space-x-4">
                <a
                  href="/musees"
                  className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded transition-colors"
                >
                  Les musées du monde
                </a>
                <a
                  href="/mythologie"
                  className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded transition-colors"
                >
                  Reference Mythologique
                </a>
              </div>
            </div>
          </nav>
          {/* LOUVRE  */}
          <div className="max-w-6xl mx-auto py-20">
            <h1 className="text-3xl font-bold mb-4">Les musées du monde</h1>
            <p className="text-gray-300">
              Bienvenue sur la page des musées du monde.
            </p>
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-2">Le Louvre</h2>
              <img
                src="https://res.cloudinary.com/hello-tickets/image/upload/c_limit,f_auto,q_auto,w_1300/v1645846296/rg73rgkb4xsiigqzd3ab.jpg"
                alt="Louvre"
                className="w-full h-auto rounded-lg object-cover mb-4"
              />
              <p className="text-gray-300">
                Le Louvre est l'un des plus grands musées du monde.
              </p>
              <a
                href="https://www.louvre.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-500 hover:text-purple-400 transition-colors"
              >
                Visiter le site du Louvre
              </a>
            </div>
          </div>
        </div>
      );
    }

    export default Musees;
