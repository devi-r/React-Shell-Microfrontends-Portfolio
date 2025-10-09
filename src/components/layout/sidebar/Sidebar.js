import React, { useState, useRef, useEffect } from "react";
import SidebarHeader from "./SidebarHeader";
import SidebarSection from "./SidebarSection";
import SocialLinks from "./SocialLinks";
import SidebarTooltip from "./SidebarTooltip";
import { sidebarItems } from "../../../constants/main";

const Sidebar = ({ isMenuOpen }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isPinned, setIsPinned] = useState(true);
  const [isTooltipHovered, setIsTooltipHovered] = useState(false);
  const buttonRef = useRef(null);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });

  // Derived state: the sidebar is visually expanded if it's pinned OR if it's not pinned and is being hovered.
  const isEffectivelyExpanded = isPinned || isHovering;
  const isCollapsed = !isEffectivelyExpanded;

  const handleMouseEnter = () => {
    if (!isPinned) {
      setIsHovering(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handlePinToggle = () => {
    setIsPinned((prev) => !prev);
    if (!isPinned) setIsHovering(false);
  };

  const getTooltipText = () => {
    if (isPinned) {
      return "Collapse menu";
    } else if (isHovering) {
      return "Keep menu expanded";
    } else {
      return "Expand menu";
    }
  };

  // Calculate tooltip position when hovered
  useEffect(() => {
    if (isTooltipHovered && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setTooltipPosition({
        top: rect.bottom + window.scrollY + 8, // 8px below button
        left: rect.left + window.scrollX, // Left-aligned with button
      });
    }
  }, [isTooltipHovered]);

  return (
    <div
      className={`fixed w-[90vw] inset-y-0 left-0 transform transition-transform duration-300 ease-in-out bg-[#0F2430] h-full shadow-xl overflow-hidden z-50 ${
        isMenuOpen ? "translate-x-0" : "-translate-x-full"
      }
      
      md:relative md:translate-x-0 md:flex-shrink-0 ${
        isCollapsed ? "md:w-[68px]" : "md:w-72"
      }
      
      md:transition-all md:duration-200 md:ease-in-out
      `}
    >
      <SidebarHeader
        isCollapsed={isCollapsed}
        buttonRef={buttonRef}
        onPinToggle={handlePinToggle}
        getTooltipText={getTooltipText}
        onTooltipEnter={() => setIsTooltipHovered(true)}
        onTooltipLeave={() => setIsTooltipHovered(false)}
      />

      <div
        className="flex flex-col h-full"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {sidebarItems.map((section) => (
          <SidebarSection
            isCollapsed={isCollapsed}
            sectionTitle={section.sectionTitle}
            showAction={section.showAction}
            actionPath={section.actionPath}
            actionLabel={section.actionLabel}
            items={section.items}
          />
        ))}

        <SocialLinks isCollapsed={isCollapsed} />
      </div>

      <SidebarTooltip
        isVisible={isTooltipHovered}
        position={tooltipPosition}
        text={getTooltipText()}
      />
    </div>
  );
};

export default Sidebar;
