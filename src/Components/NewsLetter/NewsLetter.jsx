import subscribeImage from '../../Assets/subscribe.png'

const NewsLetter = () => {
  return (
    <div className="mx-auto max-w-4xl px-6 xl:max-w-7xl xl:px-0">
      <div className="bg-white mx-auto shadow-2xl p-8 rounded-xl flex flex-row items-center gap-24 md:w-3/4 md:rounded-3xl">
        <div className="flex-1 space-y-2">
          <h1 className='font-semibold text-2xl text-primaryDark'>Subscribe to our Newsletter</h1>
          <p className='text-gray-600 md:w-3/4'>
            Subscribe to our newsletter to receive exclusive offers, latest news
            and updates
          </p>
          <form className="flex flex-row md:gap-10">
            <input
              type="text"
              className="border-2 rounded p-2 w-3/4 bg-transparent"
              placeholder="Email address"
              required
            />
            <input
              type="submit"
              value="Subscribe"
              className="bg-primaryBlue rounded text-white font-semibold w-1/3"
              required
            />
          </form>
        </div>

        <img src={subscribeImage} alt="" className='h-40 hidden md:block'/>
      </div>
    </div>
  );
};

export default NewsLetter;
