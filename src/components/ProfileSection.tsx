import profileImage from "@/assets/profile-picture.jpg";

const ProfileSection = () => {
  return (
    <section className="py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-6">
          <div className="relative">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-border">
              <img
                src={profileImage}
                alt="Gowtham - Full Stack Developer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-background"></div>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Gowtham</h2>
            <p className="text-lg text-muted-foreground">Full-Stack Developer</p>
            <p className="text-sm text-muted-foreground mt-1">Available for new opportunities</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;