function Farm() {
  return (
    <div className="relative h-52 w-full lg:h-96">
      <img className="object-cover h-full w-full" src="/man.jpeg" alt="" />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <h1 className="absolute  inset-0 flex items-center justify-center text-custom-red lg:text-5xl  text-xl">
        From Harry's Farm to your table
      </h1>
    </div>
  );
}
export default Farm;
