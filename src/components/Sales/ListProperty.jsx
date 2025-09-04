import Animate from "../Common/Animate";
import StyledButton from "../Common/StyledButton";

const ListProperty = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center py-5 md:py-10 gap-4">
      <div className="md:w-1/2">
        <div className="space-y-10 px-4 md:px-6">
          <Animate>
            <h2 className="text-2xl md:text-4xl font-semibold mb-5">
              Ready to list your property?
            </h2>
          </Animate>
          <Animate>
            <p className="text-lg text-gray-700">
              Partner with KNMG Property and experience a seamless selling
              process.
              <a>Our team of experts</a> will guide you every step of the way,
              providing market insights, professional marketing, and dedicated
              support. Let us help you showcase your property to the right
              buyers and achieve the best results. Start your journey with us
              today!
            </p>
          </Animate>
          <Animate>
            <StyledButton variant="black-outlined">
              List your property
            </StyledButton>
          </Animate>
        </div>
      </div>
      <div className="md:w-1/2">
        <img
          src="/assets/images/sales/list-property.jpg"
          alt="Property Overview"
          className="w-full max-h-[600px] object-cover"
        />
      </div>
    </div>
  );
};

export default ListProperty;
