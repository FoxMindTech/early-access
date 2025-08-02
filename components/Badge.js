function Badge() {
  return (
    <>
      <div className="badge  flex justify-between items-center">
        Introducing BeDonkey{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 rotate-225"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2.5"
            d="M8 8v8h8"
          />
        </svg>
        <span></span>
      </div>
    </>
  );
}

export default Badge;
