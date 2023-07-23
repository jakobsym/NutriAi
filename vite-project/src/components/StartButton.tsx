const StartButton: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center w-90 h-40 mb">
      <button type="button" className="text-white bg-neutral-100 hover:bg-neutral-100 focus:outline-none font-medium rounded-lg text-sm px-10 py-3 text-center inline-flex items-center dark:bg-black dark:hover:bg-neutral-800">
        Get Started
        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
      </button>
    </div>
  );
}
export default StartButton