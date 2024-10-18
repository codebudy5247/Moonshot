type AvatarProps = {
  email: IEmail;
};

const Avatar = ({ email }: AvatarProps) => {
  return (
    <div className="flex items-center justify-center w-6 h-6 md:w-10 md:h-8 lg:w-10 lg:h-10 bg-[#E54065] text-white text-md font-semibold rounded-full p-2">
      {email.from.name.charAt(0).toUpperCase()}
    </div>
  );
};

export default Avatar;
