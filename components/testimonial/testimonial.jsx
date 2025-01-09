import "./testimonial.css";

export const Testimonial = () => {
  return (
      <div className="quotes">
            <div className="quote-mark">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 320" width="80" height="80" fill="#FFF">
                <path d="M82.87 129.48S77.32 98.96 114.31 74c-12.95 0-89.7 30.52-89.7 113.74 0 33.09 27.59 59.73 61.01 58.19 29.85-1.37 54.07-25.6 55.44-55.45 1.54-33.41-25.1-61-58.19-61zm154.26 0S231.58 98.96 268.57 74c-12.95 0-89.7 30.52-89.7 113.74 0 33.09 27.58 59.73 61.01 58.19 29.85-1.37 54.07-25.6 55.44-55.45 1.54-33.41-25.1-61-58.19-61z"></path>
                </svg>
            </div>
        <article>
          <blockquote>
            <p>
              I couldn&apos;t be happier with the web development service I received! The team was highly professional, attentive to my needs, and delivered a stunning website that exceeded my expectations. The entire process was smooth and hassle-free, and I’ve already seen an increase in traffic and engagement. Highly recommend!
            </p>
          </blockquote>
          <div className="user">
            <div>
              <cite>Raymond B.</cite>
              <p>Chef</p>
            </div>
            <img src="https://i.pravatar.cc/150?img=3" alt="Raymond" />
          </div>
        </article>
      </div>
  );
};
