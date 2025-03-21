import "../../whyUs/cardslider.css"

const TestimonialCard = ({title,description}) => {
  return (
    <div className="testimonial-card">
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
  )
}

export default TestimonialCard
