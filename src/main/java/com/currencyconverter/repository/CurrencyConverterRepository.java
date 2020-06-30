package com.currencyconverter.repository;

import com.currencyconverter.model.ConversionHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CurrencyConverterRepository extends JpaRepository<ConversionHistory, Long> {

}
