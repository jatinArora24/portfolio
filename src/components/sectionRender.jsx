//
export default function SectionRender(props) {
  const { children, className } = props;
  return <section className={className}>{children}</section>;
}
