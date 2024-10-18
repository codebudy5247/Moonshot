"use client";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import SingleEmail from "./single-email";
import EmailDetails from "./email-details";

type EmailListProps = {
  emails: IEmail[];
};

const EmailList = ({ emails }: EmailListProps) => {
  const [selectedEmail, setSelectedEmail] = useState<IEmail | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [readEmails, setReadEmails] = useState<string[]>([]);
  const [filter, setFilter] = useState<"all" | "favorites" | "read" | "unread">(
    "all"
  );

  useEffect(() => {
    const savedFavorites = Cookies.get("favorites");
    const savedReadEmails = Cookies.get("readEmails");

    if (savedFavorites) setFavorites(JSON.parse(savedFavorites));
    if (savedReadEmails) setReadEmails(JSON.parse(savedReadEmails));
  }, []);

  const handleEmailClick = (email: IEmail) => {
    setSelectedEmail(email);
    if (!readEmails.includes(email.id)) {
      const updatedReadEmails = [...readEmails, email.id];
      setReadEmails(updatedReadEmails);
      Cookies.set("readEmails", JSON.stringify(updatedReadEmails), {
        expires: 7,
      });
    }
  };

  const toggleFavorite = (emailId: string) => {
    const updatedFavorites = favorites.includes(emailId)
      ? favorites.filter((id) => id !== emailId)
      : [...favorites, emailId];
    setFavorites(updatedFavorites);
    Cookies.set("favorites", JSON.stringify(updatedFavorites), { expires: 7 });
  };

  const filteredEmails = emails.filter((email) => {
    if (filter === "favorites") return favorites.includes(email.id);
    if (filter === "read") return readEmails.includes(email.id);
    if (filter === "unread") return !readEmails.includes(email.id);
    return true;
  });

  return (
    <div className="flex flex-col space-y-3">
      <div className="flex items-center gap-4">
        <h6 className="text-xl font-semibold">Filter By:</h6>
        <button
          className={`text-md px-3 py-2 rounded-xl ${
            filter === "unread" ? "bg-[#E1E4EA]" : ""
          }`}
          onClick={() => {
            setFilter("unread");
            setSelectedEmail(null);
          }}
        >
          Unread
        </button>
        <button
          className={`text-md px-3 py-2 rounded-xl ${
            filter === "read" ? "bg-[#E1E4EA]" : ""
          }`}
          onClick={() => {
            setFilter("read");
            setSelectedEmail(null);
          }}
        >
          Read
        </button>
        <button
          className={`text-md px-3 py-2 rounded-xl ${
            filter === "favorites" ? "bg-[#E1E4EA]" : ""
          }`}
          onClick={() => {
            setFilter("favorites");
            setSelectedEmail(null);
          }}
        >
          Favorites
        </button>
      </div>
      <div className="flex w-full gap-4">
        <div className={`w-full ${selectedEmail ? "md:w-1/3" : "w-full"}`}>
          {filteredEmails.map((email) => (
            <SingleEmail
              key={email.id}
              email={email}
              onClick={() => handleEmailClick(email)}
              isRead={readEmails.includes(email.id)}
              isFavorited={favorites.includes(email.id)}
              toggleFavorite={() => toggleFavorite(email.id)}
            />
          ))}
        </div>
        {selectedEmail && (
          <div className="hidden md:block md:w-4/5 p-5 mt-5 border-2 border-solid border-[#CFD2DC] rounded-lg bg-white">
            <EmailDetails
              email={selectedEmail}
              isFavorited={favorites.includes(selectedEmail.id)}
              toggleFavorite={() => toggleFavorite(selectedEmail.id)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailList;
