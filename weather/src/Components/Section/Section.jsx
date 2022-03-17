// Section.jsx

import React from "react";

const ScrollToButton = React.forwardRef(({ id, children }, ref) => (
  <section ref={ref} id={id}>
    {children}
  </section>
));

export default ScrollToButton;
