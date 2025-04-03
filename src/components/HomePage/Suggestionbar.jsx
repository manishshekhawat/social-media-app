import React from "react";

const Suggestionbar = () => {
  return (
    <div>
      <header className="flex justify-between items-center p-4 pt-10">
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 overflow-hidden rounded-full">
            <img
              src="https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww"
              alt="manish"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm">Manish_shekhawat</p>
            <p className="text-sm">Manish</p>
          </div>
        </div>
        <a href="#" className="text-sm text-blue-400">Switch</a>
      </header>
      <main>
        <div className="flex justify-between items-center p-4">
          <p className="text-sm">Suggested for you</p>
          <p className="text-sm">See All</p>
        </div>
      </main>
    </div>
  );
};

export default Suggestionbar;
