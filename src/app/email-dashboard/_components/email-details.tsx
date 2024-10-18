import { formatDate } from "@/lib/utils";
import Avatar from "./avatar";

type EmailDetailsProps = {
  email: IEmail;
  isFavorited: boolean;
  toggleFavorite: () => void;
};

const EmailDetails = ({
  email,
  isFavorited,
  toggleFavorite,
}: EmailDetailsProps) => (
  <div className="flex flex-col gap-3 p-4">
    <div className="w-full flex items-center justify-between">
      <div className="w-full flex gap-4">
        <Avatar email={email} />
        <div className="w-full flex flex-col gap-2">
          <div className="w-full flex justify-between items-center ">
            <h2 className="text-lg font-semibold">{email.subject}</h2>
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleFavorite();
              }}
              className="bg-[#E54065] hover:bg-[#c63954] transition-colors rounded-full p-2 text-sm text-white"
            >
              {isFavorited ? "Unfavorite" : "Mark as favorite"}
            </button>
          </div>
          <p className="text-gray-500 text-sm">
            <strong>{formatDate(email.date)}</strong>
          </p>
          <p className="mt-2 text-gray-600 text-base">
            {email.short_description}
          </p>
        </div>
      </div>
    </div>
  </div>
);
export default EmailDetails;
