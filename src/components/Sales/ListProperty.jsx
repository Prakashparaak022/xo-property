import Animate from "../Common/Animate";
import StyledButton from "../Common/StyledButton";

const ListProperty = () => {
  const title = "Sell Your Property with Ease";
  const contentTitle = "Your home deserves the right audience.";
  const content =
    "Partner with KNMG Property for a seamless selling experience. From professional marketing to tailored strategies and dedicated client support, we ensure your property stands out and achieves its best value.";
  const contentDescription = "Start your selling journey with us today.";

  return (
    <div className="flex flex-col md:flex-row justify-between items-center py-5 md:py-10 gap-4">
      <div className="md:w-1/2">
        <div className="space-y-6 px-4 md:px-6">
          <Animate>
            <h2 className="text-2xl md:text-4xl font-semibold mb-5">{title}</h2>
          </Animate>
          <Animate>
            <div>
              <p className="text-lg text-gray-700">
                <span className="font-semibold">{contentTitle}</span>
                <br />
                {content}
              </p>
            </div>
          </Animate>
          <Animate>
            <p className="text-lg text-gray-700 font-semibold">
              {contentDescription}
            </p>
          </Animate>
          <Animate>
            <StyledButton variant="black-outlined">List your KNMG</StyledButton>
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
