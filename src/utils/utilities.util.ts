import {logger} from '@/libs/logger.lib';

export class Utilities {
  /**
   * Clamp a number between a minimum and maximum value.
   * @param value The number to clamp.
   * @param min The minimum value.
   * @param max The maximum value.
   * @returns The clamped number.
   */
  clamp(value: number, min: number, max: number): number {
    if (min > max) {
      logger.error('Min value cannot be greater than max value.');
    }
    return Math.min(Math.max(value, min), max);
  }

  /**
   * Check if a value is a string or a number.
   * @param value The value to check.
   * @returns True if the value is a string or a number, false otherwise.
   */
  isStringOrNumber(value: unknown): value is string | number {
    return typeof value === 'string' || typeof value === 'number';
  }

  /**
   * Convert a string or number to a number.
   * @param value The value to convert.
   * @returns The converted number or undefined if the value cannot be converted.
   */
  convertStringToNumber(value: string | number | undefined): number {
    if (typeof value === 'undefined') {
      return 0;
    }

    if (typeof value === 'number') {
      return value;
    }

    const parsed = Number.parseInt(value, 10);

    if (Number.isNaN(parsed)) {
      logger.error(`Cannot convert "${value}" to a number.`);
    }

    return parsed;
  }
}
