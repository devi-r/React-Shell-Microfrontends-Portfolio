/**
 * Google Analytics Tracking Utilities
 * Provides safe wrappers for ReactGA events with error handling
 */

import ReactGA from "react-ga4";

/**
 * Safely track a Google Analytics event with error handling
 * @param {Object} eventData - Event data object
 * @param {string} eventData.category - Event category (e.g., "User Interaction")
 * @param {string} eventData.action - Event action (e.g., "Clicked Button")
 * @param {string} eventData.label - Event label (e.g., "Home Button")
 * @param {number} [eventData.value] - Optional numeric value
 * @param {boolean} [logErrors=true] - Whether to log errors to console
 * @returns {boolean} True if event was tracked successfully, false otherwise
 */
export function trackEvent(eventData, logErrors = false) {
  try {
    if (!eventData || !eventData.category || !eventData.action) {
      if (logErrors) {
        console.warn("[Analytics] Invalid event data:", eventData);
      }
      return false;
    }

    ReactGA.event(eventData);
    return true;
  } catch (error) {
    if (logErrors) {
      console.error("[Analytics] Error tracking event:", error, eventData);
    }
    return false;
  }
}

/**
 * Track a user interaction event (most common use case)
 * @param {string} action - What the user did (e.g., "Clicked Logo")
 * @param {string} label - Label for the action (e.g., "Logo Mobile")
 * @param {number} [value] - Optional numeric value
 * @returns {boolean} True if tracked successfully
 */
export function trackUserInteraction(action, label, value = undefined) {
  return trackEvent({
    category: "User Interaction",
    action,
    label,
    ...(value !== undefined && { value }),
  });
}

/**
 * Track a page view event
 * @param {string} path - Page path
 * @param {string} title - Page title
 * @returns {boolean} True if tracked successfully
 */
export function trackPageView(path, title) {
  try {
    ReactGA.send({
      hitType: "pageview",
      page: path,
      title: title,
    });
    return true;
  } catch (error) {
    console.error("[Analytics] Error tracking page view:", error);
    return false;
  }
}

/**
 * Track a custom event with flexible parameters
 * @param {string} category - Event category
 * @param {string} action - Event action
 * @param {string} label - Event label
 * @param {number} [value] - Optional numeric value
 * @returns {boolean} True if tracked successfully
 */
export function trackCustomEvent(category, action, label, value = undefined) {
  return trackEvent({
    category,
    action,
    label,
    ...(value !== undefined && { value }),
  });
}

/**
 * Batch track multiple events (useful for complex interactions)
 * @param {Array<Object>} events - Array of event data objects
 * @returns {Object} Results with success/failure counts
 */
export function trackBatchEvents(events) {
  const results = {
    total: events.length,
    successful: 0,
    failed: 0,
    errors: [],
  };

  events.forEach((eventData, index) => {
    try {
      const success = trackEvent(eventData, false);
      if (success) {
        results.successful++;
      } else {
        results.failed++;
        results.errors.push({ index, eventData, error: "Invalid data" });
      }
    } catch (error) {
      results.failed++;
      results.errors.push({ index, eventData, error: error.message });
    }
  });

  if (results.failed > 0) {
    console.warn("[Analytics] Batch tracking completed with errors:", results);
  }

  return results;
}

// Export all functions as default object for convenience
const analytics = {
  trackEvent,
  trackUserInteraction,
  trackPageView,
  trackCustomEvent,
  trackBatchEvents,
};

export default analytics;
