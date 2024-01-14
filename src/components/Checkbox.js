
const Checkbox = ({ checked = false, onCheck }) => {
  return (
    <div onClick={()=>onCheck()}>
      {checked ? (
        <div className="checkbox checked">
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 448 512"><path fill="#73dbfd" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 400H48V80h352v352zm-35.9-241.7L191.5 361.5c-4.7 4.7-12.3 4.6-17-.1l-90.8-91.5c-4.7-4.7-4.6-12.3 .1-17l22.7-22.5c4.7-4.7 12.3-4.6 17 .1l59.8 60.3 141.4-140.2c4.7-4.7 12.3-4.6 17 .1l22.5 22.7c4.7 4.7 4.6 12.3-.1 17z"/></svg>
        </div>
      ) : (
        <div className="checkbox unchecked">
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 448 512"><path fill="#73dbfd" d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/></svg>
        
        </div>
      )}
    </div>
  );
};

export default Checkbox;
