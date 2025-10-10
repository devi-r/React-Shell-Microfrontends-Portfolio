/**
 * Custom hook for Google Analytics tracking
 * Provides safe event tracking methods with error handling
 */

import { useCallback } from "react";
import {
  trackUserInteraction,
  trackEvent,
  trackCustomEvent,
  trackPageView,
} from "../utils/analytics";

/**
 * Hook that provides analytics tracking functions
 * @returns {Object} Analytics tracking functions
 */
export function useAnalytics() {
  /**
   * Track a user interaction (most common use case)
   * @param {string} action - What the user did
   * @param {string} label - Label for the action
   * @param {number} [value] - Optional numeric value
   */
  const trackInteraction = useCallback((action, label, value) => {
    trackUserInteraction(action, label, value);
  }, []);

  /**
   * Track a custom event with full control
   * @param {Object} eventData - Event data object
   */
  const track = useCallback((eventData) => {
    trackEvent(eventData);
  }, []);

  /**
   * Track a custom event with separate parameters
   * @param {string} category - Event category
   * @param {string} action - Event action
   * @param {string} label - Event label
   * @param {number} [value] - Optional value
   */
  const trackCustom = useCallback((category, action, label, value) => {
    trackCustomEvent(category, action, label, value);
  }, []);

  /**
   * Track a page view
   * @param {string} path - Page path
   * @param {string} title - Page title
   */
  const trackPage = useCallback((path, title) => {
    trackPageView(path, title);
  }, []);

  return {
    trackInteraction,
    track,
    trackCustom,
    trackPage,
  };
}

export default useAnalytics;
