import { LocaleDefinition } from '../types';

/**
 * Locale Registry for efficient locale management
 * Supports locale registration and alias resolution
 */
class LocaleRegistry {
  private locales: Map<string, LocaleDefinition> = new Map();
  private aliases: Map<string, string> = new Map();

  /**
   * Register a new locale
   * @param code - Primary locale code (e.g. 'en_US')
   * @param definition - Locale definition object
   * @param aliasesArray - Array of aliases for this locale (e.g. ['en', 'us'])
   */
  register(
    code: string,
    definition: LocaleDefinition,
    aliasesArray: string[] = [],
  ): void {
    this.locales.set(code, definition);

    // Register aliases
    for (const alias of aliasesArray) {
      this.aliases.set(alias, code);
    }
  }

  /**
   * Get locale definition
   * @param code - Kode locale atau alias
   * @returns LocaleDefinition atau undefined
   */
  get(code: string): LocaleDefinition | undefined {
    // Check locales directly
    if (this.locales.has(code)) {
      return this.locales.get(code);
    }

    // Check aliases
    const mainCode = this.aliases.get(code);
    if (mainCode) {
      return this.locales.get(mainCode);
    }

    return undefined;
  }

  /**
   * Check if locale is available
   */
  has(code: string): boolean {
    return this.locales.has(code) || this.aliases.has(code);
  }

  /**
   * Get all available locale codes
   */
  getAvailableLocales(): string[] {
    return Array.from(this.locales.keys());
  }

  /**
   * Get all available aliases
   */
  getAvailableAliases(): string[] {
    return Array.from(this.aliases.keys());
  }

  /**
   * Get all codes (locales + aliases)
   */
  getAllCodes(): string[] {
    return [
      ...this.getAvailableLocales(),
      ...this.getAvailableAliases(),
    ];
  }
}

// Singleton instance
export const localeRegistry = new LocaleRegistry();
