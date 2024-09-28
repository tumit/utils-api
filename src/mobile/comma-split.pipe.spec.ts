import { CommaSplitPipe } from './comma-split.pipe';

describe('CommaSplitPipe', () => {
  it('should be defined', () => {
    expect(new CommaSplitPipe()).toBeDefined();
  });

  describe('CommaSplitPipe', () => {
    it('should be split', () => {
      // * arrange
      const service = new CommaSplitPipe();
      // * act
      const result = service.transform('0891234567,0891234568')
      // * assert
      expect(result).toEqual(['0891234567','0891234568'])
    });
  })

});
