import fixedInternalHref from '../fixedInternalHref';

describe('fixedInternalHref', () => {
  it('should return regular href if it is external', () => {
    const providedHref = "http://someexternalurl.com";
    const expectedHref = "http://someexternalurl.com";

    expect(fixedInternalHref(providedHref)).toEqual(expectedHref);
  });

  it('should return transformed href if it is internal', () => {
    const providedHref = "item?id=137938";
    const expectedHref = "https://news.ycombinator.com/item?id=137938";

    expect(fixedInternalHref(providedHref)).toEqual(expectedHref);
  });
});
