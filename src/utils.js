/* Converts a PascalCase or camelCase string to kebab-case.
 * Example: "PostLoginDashboard" -> "post-login-dashboard"
 * Example: "EcommerceCatalogue" -> "ecommerce-catalogue"
 */
export const toKebabCase = (str) => {
  if (!str) return "";
  return str
    .split(/(?=[A-Z])/) // Split the string before each capital letter
    .join("-") // Join the parts with a hyphen
    .toLowerCase(); // Convert the whole string to lowercase
};
