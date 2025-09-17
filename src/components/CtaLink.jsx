import { Link } from "react-router-dom";

export default function CtaLink({
  text,
  to,
  href,
  variant = "cta-01",
  icon,
  type,
}) {
  if (to) {
    return (
      <Link to={to} className={variant}>
        {text} {icon && <i className={`${icon} fas`}></i>}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={variant} target="_blank">
        {text} {icon && <i className={`${icon} fas`}></i>}
      </a>
    );
  }

  if (!href || !to) {
    return (
      <button className={variant} type={type}>
        {text} {icon && <i className={`${icon} fas`}></i>}
      </button>
    );
  }

  return null;
}
