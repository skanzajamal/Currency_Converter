package com.currencyconverter.contoller;

import com.currencyconverter.model.ConversionHistory;
import com.currencyconverter.repository.CurrencyConverterRepository;
import com.currencyconverter.service.CurrencyConverterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/currencies")
public class CurrencyConverterController {

    @Autowired
    private CurrencyConverterService currencyConverterService;

    @Autowired
    private CurrencyConverterRepository currencyConverterRepository;

    public CurrencyConverterController(CurrencyConverterService currencyConverterService) {
        this.currencyConverterService = currencyConverterService;
    }

    @RequestMapping(value = "/history", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> createHistory(@RequestBody ConversionHistory conversionHistory) throws Exception {
        try {
            ConversionHistory conversionHistories = currencyConverterService.insert(conversionHistory);
            return new ResponseEntity<ConversionHistory>(conversionHistories, HttpStatus.OK);
        } catch (Exception e) {
            throw new Exception(e.getCause());
        }
    }

    @RequestMapping(value = "/list", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public List<ConversionHistory> getHistoryList() {
        List<ConversionHistory> conversionHistory = new ArrayList<ConversionHistory>();
        conversionHistory = currencyConverterRepository.findAll();
        return conversionHistory;
    }
}
