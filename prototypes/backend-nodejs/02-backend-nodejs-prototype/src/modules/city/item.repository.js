import DB_CLIENTS from '../../core/config/db-clients.js';

import MockRepository from './item.repository.mock.js';

class Repository {
  constructor(dbClient) {
    switch (dbClient) {
      case DB_CLIENTS.PG:
        this.repository = new MockRepository();
        break;
      case DB_CLIENTS.MYSQL:
        this.repository = new MockRepository();
        break;
      case DB_CLIENTS.MOCK:
      default:
        this.repository = new MockRepository();
        break;
    }
  }

  async getItems(query) {
    return this.repository.getItems(query);
  }

  async getItemById(id) {
    return this.repository.getItemById(id);
  }

  async createItem(data) {
    return this.repository.createItem(data);
  }

  async updateItem(id, data) {
    return this.repository.updateItem(id, data);
  }

  async deleteItem(id) {
    return this.repository.deleteItem(id);
  }

  async existsByName(name) {
    return await this.repository.existsByName(name);
  }
}

export default Repository;
