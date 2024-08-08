import ModalReact from 'react-modal';

export const ModalWindow = ({ modalIsOpen, closeModal, item }) => {
  return (
    <ModalReact isOpen={modalIsOpen} onRequestClose={() => closeModal()}>
      <div>
        <h2>{item.name}</h2>
        <div>
          <p>{item.rating}</p>
          <p>{item.location}</p>
        </div>
        <p>&#x20ac;{item.price}</p>
        {Array.isArray(item.gallery) &&
          item.gallery.map((img, index) => (
            <img key={index} src={img} alt="" />
          ))}
        <img src="" alt="" />
        <p>{item.description}</p>
        <div>
          <button>Features</button>
          <button>Reviews</button>
        </div>
        <div>
          <ul>
            <li></li>
          </ul>
          <h3>Vehicle details</h3>
          <ul>
            <li>
              <p>Form</p>
              <p>{item.form}</p>
            </li>
            <li>
              <p>Length</p>
              <p>{item.length}</p>
            </li>
            <li>
              <p>Width</p>
              <p>{item.width}</p>
            </li>
            <li>
              <p>Height</p>
              <p>{item.height}</p>
            </li>
            <li>
              <p>Tank</p>
              <p>{item.tank}</p>
            </li>
            <li>
              <p>Consumption</p>
              <p>{item.consumption}</p>
            </li>
          </ul>
          {/* <Form /> */}
        </div>
      </div>
    </ModalReact>
  );
};
