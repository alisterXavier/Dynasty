export const Video = () => {
  return (
    <video
      autoPlay
      loop
      muted
      preload="none"
      className="object-cover hero-dynasty-video bg-black w-screen h-[110vh] absolute"
    >
      <source src="https://res.cloudinary.com/dboza0n1a/video/upload/f_auto:video,q_auto/oftey5vusrewytujdjqc" />
    </video>
  );
};
