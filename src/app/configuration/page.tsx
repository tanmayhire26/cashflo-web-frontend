/* eslint-disable @next/next/no-async-client-component */
"use client";

export async function getCategoriesData() {
  const response = await fetch("http://localhost:7007/categories");
  return response.json();
}

export default async function Configuration() {
  const categories = await getCategoriesData();

  return (
    <div>
      <div>Configuration Page</div>
      <div className="mt-5">
        <div>
          <div className="ml-2"> Categories </div>
          <div>
            {categories.map((cat: any) => (
              <div className="ml-5" key={cat._id}>
                {cat?.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
