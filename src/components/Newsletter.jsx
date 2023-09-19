const Newsletter = () => {
  return (
    <section className='newsletter-section'>
      <div className='pt-[2.25rem]'>
        <p className='newsletter-text'>newsletter</p>
        <h4 className='newsletter-heading'>
          prijavi se <span className='font-bold'>i prvi doznaj sve.</span>
        </h4>
        <p className='text-dark text-base md:text-large leading-[1.3125rem] min-w-[21rem] max-w-[32.4375rem]'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has.
        </p>
      </div>
      <form className='pt-[1.5rem]  relative md:flex '>
        <input
          type='text'
          placeholder='TVOJA E-MAIL ADRESA'
          className='newsletter-input'
        />
        <button type='submit' className='newsletter-btn '>
          prijavi se <span className='font-bold'>odmah</span>
        </button>
      </form>
    </section>
  );
};

export default Newsletter;
