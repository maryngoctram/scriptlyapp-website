import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type TicketProps = {
  /** Text printed sideways on the tear-off stub, e.g. "ADMIT ONE" */
  stub: string;
  children: ReactNode;
  className?: string;
};

// A theater-ticket card: a stub on the left, a dashed tear line with punched
// notches, and the ticket body on the right. Used for the waitlist
// confirmation and the 404 page.
const Ticket = ({ stub, children, className }: TicketProps) => (
  <div
    className={cn(
      "relative flex rounded-2xl border border-purple-400/40 bg-gradient-to-r from-purple-600/20 to-blue-600/15 shadow-xl shadow-purple-500/25",
      className
    )}
  >
    <div className="flex items-center justify-center w-12 sm:w-14 shrink-0 border-r-2 border-dashed border-purple-400/50">
      <span className="-rotate-90 whitespace-nowrap text-[10px] sm:text-xs font-bold tracking-[0.3em] text-purple-300">
        {stub}
      </span>
    </div>
    {/* punched notches on the tear line */}
    <span className="absolute left-12 sm:left-14 -top-2.5 -translate-x-1/2 w-5 h-5 rounded-full bg-background border-b border-purple-400/40" />
    <span className="absolute left-12 sm:left-14 -bottom-2.5 -translate-x-1/2 w-5 h-5 rounded-full bg-background border-t border-purple-400/40" />
    <div className="flex-1 min-w-0 p-5 sm:p-6">{children}</div>
  </div>
);

export default Ticket;
