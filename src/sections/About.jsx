import IconsTech from "../components/IconsTech";

const About = () => {
    return (
        <section class="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full xl:ml-8">
            <div class="w-full xl:ml-12 mr-12">

            <h2 id="about" class="secondary-title">About</h2>
            <p class="section-paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, quas saepe. Odio id vitae a eligendi natus repellendus impedit omnis aperiam laborum ad sunt, veniam suscipit in soluta odit deleniti molestias, beatae voluptatem consectetur voluptatibus ipsam placeat. Sequi consequatur magni quidem cum dolor! Necessitatibus provident id totam aperiam placeat asperiores quasi quaerat et excepturi, ipsum dolorum illo eum alias odio assumenda cumque, quidem quia quae ut neque beatae ratione nobis recusandae rem. Quis maxime consectetur porro quia sit aliquid, illum voluptates dolorem incidunt laborum officia amet accusantium error quod, ipsa sunt vitae ipsam aperiam numquam alias possimus libero. Voluptas, delectus.</p>
            <h4 class="my-6 w-full max-w-3xl text-xl font-bold text-selected-text">Some of the technologies I work with are</h4>
            <IconsTech/>       
            </div>
        </section>
    )
};

export default About;
