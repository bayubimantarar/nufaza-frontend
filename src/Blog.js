import React from 'react';

function Blog() {
  return (
    <div className="Blog">
      <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white inline-block m-8">
        <img class="w-full" src="/1.jpg" alt="Sunset in the mountains" />
        <div class="px-6 py-4">
          <div class="font-bold text-md mb-2">
            Man Programming Using Laptop
          </div>
          <p class="text-black text-base">
            Photos by <a href="https://unsplash.com/@ricaros" target="_blank" className="text-blue-500">@ricaros</a>
          </p>
        </div>
      </div>
      <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white inline-block m-8">
        <img class="w-full" src="/2.jpg" alt="Sunset in the mountains" />
        <div class="px-6 py-4">
          <div class="font-bold text-md mb-2">Woman Holding White Computer Keyboard</div>
          <p class="text-black text-base">
            Photos by <a href="https://unsplash.com/@kellysikkema" target="_blank" className="text-blue-500">@kellysikkema</a>
          </p>
        </div>
      </div>
      <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white inline-block m-8">
        <img class="w-full" src="/3.jpg" alt="Sunset in the mountains" />
        <div class="px-6 py-4">
          <div class="font-bold text-md mb-2">Man Wearing Headphones</div>
          <p class="text-black text-base">
            Photos by <a href="https://unsplash.com/@sickhews" target="_blank" className="text-blue-500">@kellysikkema</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Blog;
