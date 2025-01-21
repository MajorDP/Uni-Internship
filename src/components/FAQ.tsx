import FAQList from "./FAQList";

function FAQ() {
  const headlines = [
    "How can I get a Refund?",
    "Is it truly Unlimited?",
    "Can I use this Design set on client sites?",
    "Can I use this Design set on client sites?",
    "How can I get a Refund?",
  ];
  return (
    <div className="w-full xl:w-[85%] m-auto mt-24">
      <h1 className=" text-center text-[34px] font-bold text-[#0A0F4F]">
        Frequently Asked
        <span className="ml-2 bg-gradient-to-t from-yellow-400 to-transparent">
          Questions
        </span>
      </h1>
      <h3 className="text-center text-[14px] text-[#434160]">
        Need help? Here are the top questions asked by our Subscribers
      </h3>
      <ul className="mt-10 bg-white flex justify-between flex-col">
        {headlines.map((headline, index: number) => (
          <FAQList headline={headline} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default FAQ;
