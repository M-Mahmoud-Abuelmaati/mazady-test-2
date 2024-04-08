import Image from "next/image";

interface QrCodeProps {}

const QrCode = ({}: QrCodeProps) => {
  return (
    <div className={`bg-white px-6 py-4 rounded-2xl w-full flex flex-col gap-4`}>
      <div className="flex flex-row md:flex-col lg:flex-row items-center justify-between gap-2">
        <h2 className="text-lg text-[#333333] font-bold">QR Code</h2>
        <div className="flex items-center justify-between gap-6">
          <Image src={"/view.svg"} alt="view" width={24} height={24} />
          <Image src={"/share.svg"} alt="share" width={24} height={24} />
          <Image src={"/download.svg"} alt="download" width={24} height={24} />
        </div>
      </div>
      <div className="bg-[#FFF5E9] py-4 pl-4 pr-4 rounded-2xl flex items-center ">
        <Image
          src="/download-orange.svg"
          alt="download"
          width={24}
          height={24}
        />
        <p className="text-xs ml-2">
          Download the QR code or share it with your friends.
        </p>
      </div>
      <div className="flex items-center justify-center">
        <div className="rounded-2xl bg-gradient-to-r from-[#D20653] to-[#FF951D] w-[100%] p-5">
          <div className="bg-white w-full flex flex-col items-center justify-center">
            <div className="flex flex-col gap-1 py-4">
              <Image src="/logo.svg" alt="logo" height={48} width={152} />
              <h2 className="text-center text-2xl text-[#363333] font-bold">
                Hala Ahmed
              </h2>
              <Image
                src="/qr-code.svg"
                alt="qr-code"
                width={135}
                height={135}
                className="block mx-auto"
              />
              <p className="text-xs text-center">Follow Us On Mazaady</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QrCode;
