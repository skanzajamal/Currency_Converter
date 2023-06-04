package com.currencyconverter.service;

import com.currencyconverter.model.ConversionHistory;
import com.currencyconverter.repository.CurrencyConverterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CurrencyConverterService {

    @Autowired
    public CurrencyConverterRepository currencyConverterRepository;

    public ConversionHistory insert(ConversionHistory conversionHistory) {
        ConversionHistory conversionHistories;
        conversionHistories = currencyConverterRepository.save(conversionHistory);
        return conversionHistories;
    }

    public List<ConversionHistory> getHistoryList() {

        List<ConversionHistory> conversionHistories = new ArrayList<ConversionHistory>();
        conversionHistories = currencyConverterRepository.findAll();
        return conversionHistories;
    }

}
