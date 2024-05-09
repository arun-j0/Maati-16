import React from 'react';

const Introduction = () => {
  return (
    <section className="py-12 bg-[#280101] border-8 border-b-4 border-[#fee57e]">
      <div className="container px-4 mx-auto">
        <div className="text-center">
          <h1 className="mb-6 text-4xl font-bold text-yellow-300 md:text-6xl">MAATI-16</h1>
          <h2 className="mb-4 text-3xl font-bold text-yellow-300 md:text-4xl">Who We Are</h2>
          <p className="mb-8 text-lg text-white md:text-2xl">
            Maati 16 is a youth-run community based in Patna, dedicated to helping the poor and needy, especially children who wish to study and create a brighter future. Our focus areas include education, healthcare, technical professional training, and other economic activities. Formerly known as 'YOUTH POWER,' we are now 'MAATI 16,' symbolizing our dedication to humanity and our establishment year, 2016.
          </p>
          <h3 className="mb-4 text-2xl font-bold text-yellow-300 md:text-4xl">Our Moto</h3>
          <p className="mb-8 text-lg text-white md:text-2xl">
            Maati-16 Trust is committed to bridging the gap in educational access for disadvantaged children. By offering resources, support, and opportunities for learning, they are paving the way for these children to overcome barriers and reach their full potential. With a focus on education, Maati-16 Trust strives to create a more equitable society where every child has access to quality learning regardless of their background or circumstances.
          </p>
          <a href="#" className="inline-block text-lg md:text-2xl px-6 py-3 text-[#280101] transition duration-300 bg-[#fee57e] rounded-md hover:bg-yellow-600">See More</a>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
