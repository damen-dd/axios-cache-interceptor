import { createCache } from '../src/cache/create';
import { BrowserAxiosStorage } from '../src/storage/browser';
import { MemoryAxiosStorage } from '../src/storage/memory';
import { AxiosStorage } from '../src/storage/storage';

describe('test bundle imports', () => {
  it('should have basic storages', async () => {
    const bundle = await import('../src/index.browser');

    expect(bundle.createCache).toBe(createCache);
    expect(bundle.AxiosStorage).toBe(AxiosStorage);
    expect(bundle.BrowserAxiosStorage).toBe(BrowserAxiosStorage);
    expect(bundle.MemoryAxiosStorage).toBe(MemoryAxiosStorage);
  });
});
