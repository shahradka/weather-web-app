/**
 * Converts a temperature from Celsius to Fahrenheit.
 * @param celsius - The temperature in Celsius.
 * @returns The temperature in Fahrenheit.
 */
export function celsiusToFahrenheit(celsius: number): number {
    const fahrenheit = ((celsius * 9) / 5 + 32);
    return Math.round(fahrenheit * 100) / 100; // Rounds to two decimal places

}
  