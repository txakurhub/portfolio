const Card = ({ deployURL, repo, text, video, snapshot, title, tech }) => {
  return (
    <div class="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full flex-col">
      <div>{video === "" 
        ? <img
        src={snapshot}
        class="lg:h-96 sm:mb-2"
        ></img>
        :<video
          muted
          loop="true"
          autoplay="autoplay"
          controls="controls"
          id="vid"
          class="lg:h-96 sm:mb-2"
        >
          <source src={video} type="video/mp4" />
        </video>}
      </div>
      <div class="container w-5/5 ml-4">
        <div class="container mt-1 flex flex-col justify-center items-center ">

        <h4 class="max-w-3xl text-2xl font-bold text-theme">{title}</h4>
        <h6 class="mt-3 text-base">{text}</h6>
        </div>
        <div class="container mt-1 flex flex-wrap justify-center items-center gap-3 text-theme">
        {tech && tech.map(t=> {
          return (
            <p class="text-sm" key={tech.indexOf(t)}>{t}</p>
            )
          })}
          </div>
        <div class="container mt-3 flex justify-center gap-5 items-center">
         
        <a href={repo}><i class="devicon-github-original text-3xl"></i></a>
        <a href={deployURL}><ion-icon name="link-outline" size="large"></ion-icon></a>
        </div>
      </div>
    </div>
  );
};

export default Card;
