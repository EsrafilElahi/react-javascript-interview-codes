// برای انتقال رف از یک کامپوننت به یک کامپوننت دیگر

const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref}>
    {props.children}
  </button>
));

// You can now get a ref directly to the DOM button:
const ref = React.createRef();
<FancyButton ref={ref}>Click me!</FancyButton>;