PersonRepository.java

package com.ganatan.modules.person;

import java.util.List;

public class PersonRepository {

    private final Object repository;

    public PersonRepository(boolean useDatabase) {
        if (useDatabase) {
            this.repository = new PersonRepositoryMock();
        } else {
            this.repository = new PersonRepositoryMock();
        }
    }

    public List<Person> getItems() {
        return ((PersonRepositoryMock) repository).getItems();
    }
}



