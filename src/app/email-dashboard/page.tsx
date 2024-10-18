import EmailList from "./_components/email-list";
import { getEmails } from "./get-emails"

type EmailDashboardPage = {
  searchParams: {
    page?: string;
  };
};
const EmailDashboardPage = async({ searchParams }: EmailDashboardPage) => {
  const page = parseInt(searchParams.page || "1", 10);
  const emailList = await getEmails(page);
  const totalPages = Math.ceil(emailList.total / 10);

  return (
    <section className="">
      <EmailList emails={emailList.list} />

      <div className="flex justify-center items-center">
        <div className="mt-5 flex gap-2 items-center">
          {page > 1 && (
            <a
              href={`?page=${page - 1}`}
              className="bg-[#E1E4EA] text-md p-2 rounded-xl"
            >
              Previous
            </a>
          )}
          <span>
            Page {page} of {totalPages}
          </span>
          {page < totalPages && (
            <a
              href={`?page=${page + 1}`}
              className="bg-[#E1E4EA] text-md p-2 rounded-xl"
            >
              Next
            </a>
          )}
        </div>
      </div>
    </section>
  )
}

export default EmailDashboardPage