console.log(typeof null); // ???

/**
 * Explanation: This is a well-known quirk in JavaScript. Despite null being a 
 * primitive value representing the intentional absence of any object value, the 
 * typeof operator returns "object". This behavior is considered a bug in JavaScript
 *  that has been maintained for backward compatibility.
 */