import { expect, test } from 'vitest';
import { normalizeUrl } from "./crawl";

test('Vérification de la normalisation d\'URL', () => {
    expect(normalizeUrl('https://www.boot.dev/blog/path/')).toBe('www.boot.dev/blog/path');
    expect(normalizeUrl('https://www.boot.dev/blog/path')).toBe('www.boot.dev/blog/path');
    expect(normalizeUrl('http://www.boot.dev/blog/path/')).toBe('www.boot.dev/blog/path');
    expect(normalizeUrl('http://www.boot.dev/blog/path')).toBe('www.boot.dev/blog/path');

});
