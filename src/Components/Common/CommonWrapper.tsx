import React, { Children, ReactNode } from "react";

const Common = ({ children }: { children: ReactNode }) => {
  const styles = {
    container: {
      backgroundImage: "linear-gradient(105deg, #4895EF, #3189ed, #480CA8)",
    },
  };

  return <div style={styles.container}>{children}</div>;
};

export default Common;
