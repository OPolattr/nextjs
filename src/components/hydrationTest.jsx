"use client";

const HydrationTest = () => {
  const a = Math.random();
  console.log(a);

  return (
    <div>
      Hydration Test 
      {a}
    </div>
  );
};

export default HydrationTest;
