import "../Styles/FullWidthContainer.styles.css";
 
type FullWidthContainerProps = {
  children: React.ReactNode;
};
 
//* Container element that applies full width and height based on user's viewports
export const FullWidthContainer = (props: FullWidthContainerProps) => {
  const { children } = props;
 
  return <div className="full-width-container">{children}</div>;
};