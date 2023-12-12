package com.calorie_calc.lookup_demo.common.mvc;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.NoRepositoryBean;

@NoRepositoryBean
public interface DefaultRepository<E extends DefaultEntity> extends CrudRepository<E, Long> {
}
