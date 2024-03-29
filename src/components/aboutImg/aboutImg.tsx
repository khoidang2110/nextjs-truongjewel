import Image from "next/image";

const AboutImg: React.FC = () => {
    return (
      <section className="bg-white">
        <Image
        width={1000}
        height={600}
        src='/images/tag1/about.jpg'
        alt='aboutT'
        />
              {/* <img src='/images/about.jpg' alt="about" style={{width: '1000px'}} /> */}
      </section>
    );
  }
  
  export default AboutImg;