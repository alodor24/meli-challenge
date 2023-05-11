type Props = {
  text: string;
  innerRef?: React.MutableRefObject<null>;
};

const Message: React.FC<Props> = ({ text, innerRef }) => {
  return (
    <div ref={innerRef} className="message">
      {text}
    </div>
  );
};

export default Message;
