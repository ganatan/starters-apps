import Repository from '../item.repository.js';
import { ITEMS_MOCK_DATA } from '../../../data/mocks/profession.mock-data.js';

describe('ProfessionRepository', () => {
  let repository;

  beforeEach(() => {
    repository = new Repository(false);
    repository.repository.items = JSON.parse(JSON.stringify(ITEMS_MOCK_DATA));
  });

  describe('getItemById', () => {
    it('should return a profession by ID', async () => {
      const expectedItem = ITEMS_MOCK_DATA.find(item => item.id === 1);
      const item = await repository.getItemById(1);
      expect(item).toEqual(expectedItem);
    });

    it('should return null if profession is not found', async () => {
      const item = await repository.getItemById(999);
      expect(item).toBeNull();
    });
  });

  describe('updateItem', () => {
    it('should update an existing profession', async () => {
      const itemId = 1;
      const updatedData = { name: 'Updated Name' };
      const expectedItem = { ...ITEMS_MOCK_DATA.find(item => item.id === itemId), ...updatedData };

      const updatedItem = await repository.updateItem(itemId, updatedData);
      const item = await repository.getItemById(itemId);

      expect(updatedItem).toMatchObject(expectedItem);
      expect(item.name).toBe('Updated Name');
    });

    it('should return null if profession is not found', async () => {
      const result = await repository.updateItem(999, { name: 'Updated Name' });
      expect(result).toBeNull();
    });
  });

  describe('deleteItem', () => {
    it('should return null if profession is not found', async () => {
      const result = await repository.deleteItem(999);
      expect(result).toBeNull();
    });
  });
});

