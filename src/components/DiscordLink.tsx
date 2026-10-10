import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import DiscordIcon from "@/components/icons/DiscordIcon";

// Discord isn't live yet, so every Discord icon points to the community waitlist page.
// When the server opens, swap COMMUNITY_PATH for the invite URL (and use an <a> with target="_blank").
export const COMMUNITY_PATH = "/community";
const LABEL = "Join the Scriptly Discord community";

type DiscordLinkProps = {
  variant: "nav" | "nav-mobile" | "footer";
  onClick?: () => void;
};

const DiscordLink = ({ variant, onClick }: DiscordLinkProps) => {
  if (variant === "nav") {
    return (
      <Link
        to={COMMUNITY_PATH}
        className="text-muted-foreground hover:text-primary transition-all duration-200 focus-visible"
        aria-label={LABEL}
      >
        <DiscordIcon className="w-5 h-5" />
      </Link>
    );
  }

  if (variant === "nav-mobile") {
    return (
      <Link
        to={COMMUNITY_PATH}
        className="touch-target p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors focus-visible"
        aria-label={LABEL}
        onClick={onClick}
      >
        <DiscordIcon className="w-5 h-5" />
      </Link>
    );
  }

  return (
    <Link to={COMMUNITY_PATH} aria-label={LABEL}>
      <Button
        variant="ghost"
        size="icon"
        className="touch-target text-purple-200 hover:text-purple-100 hover:bg-purple-500/20 border border-purple-400/30"
      >
        <DiscordIcon className="w-5 h-5" />
      </Button>
    </Link>
  );
};

export default DiscordLink;
