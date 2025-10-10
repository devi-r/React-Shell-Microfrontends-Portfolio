import React from "react";
import { SOCIAL_LINKS } from "../../../constants/socialLinks";
import { useAnalytics } from "../../../hooks/useAnalytics";

const SocialLinks = ({ isCollapsed }) => {
  const { trackInteraction } = useAnalytics();

  const handleSocialLinkClick = (link) => {
    trackInteraction(`Clicked ${link.label}`, link.label);
  };

  return (
    <div className="absolute bottom-4 left-4 right-4">
      <div
        className={`flex ${
          isCollapsed ? "flex-col space-y-2" : "justify-center space-x-3"
        }`}
      >
        {SOCIAL_LINKS.map((link) => {
          const Icon = link.icon;

          return (
            <a
              key={link.id}
              href={link.href}
              className="text-slate-400 hover:text-white transition-all duration-300 p-2 rounded-lg hover:bg-slate-800/50 group"
              aria-label={link.label}
              title={link.title}
              {...(link.external && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
              onClick={() => handleSocialLinkClick(link)}
            >
              <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SocialLinks;
