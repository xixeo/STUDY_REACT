export default function TailInput({id, type, inRef, customClass }) {
  return (
    <div>
      <input type={type} id= {id}
               ref={inRef}
               className={customClass} />
    </div>
  )
}