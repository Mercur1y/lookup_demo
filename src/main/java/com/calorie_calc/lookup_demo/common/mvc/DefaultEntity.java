package com.calorie_calc.lookup_demo.common.mvc;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.MappedSuperclass;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter @Setter
@MappedSuperclass
public abstract class DefaultEntity implements Serializable {

    @Id
    @GeneratedValue
    private Long id;

}
