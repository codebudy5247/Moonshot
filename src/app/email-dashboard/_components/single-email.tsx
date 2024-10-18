import { formatDate } from "@/lib/utils";
import Avatar from "./avatar";

type ItemProps = {
  email: IEmail;
  onClick: () => void;
  isRead: boolean;
  isFavorited: boolean;
  toggleFavorite: () => void;
};

const SingleEmail = ({
  email,
  onClick,
  isRead,
  isFavorited,
  toggleFavorite,
}: ItemProps) => (
  <article
    onClick={onClick}
    className={`w-full border-2 border-solid border-[#CFD2DC] px-5 py-2 rounded-lg mt-5 cursor-pointer ${
      isRead ? "bg-[#E1E4EA]" : "bg-white"
    }`}
  >
    <header className="flex gap-4">
      <Avatar email={email} />
      <section className="space-y-1">
        <p className="text-sm text-[#636363]">
          From:{" "}
          <span className="font-semibold text-black">
            &lt;{email.from.email}&gt;
          </span>
        </p>
        <p className="text-sm text-[#636363]">
          Subject:{" "}
          <span className="font-semibold text-black">{email.subject}</span>
        </p>
        <p className="text-sm text-[#636363]">{email.short_description}</p>
        <footer className="flex items-center gap-4">
          <time className="text-sm text-[#636363]">
            {formatDate(email.date)}
          </time>
          <button
            className="text-[#E54065] text-sm font-semibold"
            onClick={(e) => {
              e.stopPropagation();
              toggleFavorite();
            }}
          >
            {isFavorited ? "Unfavorite" : "Favorite"}
          </button>
        </footer>
      </section>
    </header>
  </article>
);

export default SingleEmail;
