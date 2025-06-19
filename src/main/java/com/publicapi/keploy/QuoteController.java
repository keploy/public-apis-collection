package com.publicapi.keploy;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Random;

@RestController
public class QuoteController {
    private final List<String> quotes = List.of(
            "The only limit to our realization of tomorrow is our doubts of today. – FDR",
            "Do one thing every day that scares you. – Eleanor Roosevelt",
            "Success is not final, failure is not fatal. – Winston Churchill"
    );

    @GetMapping("/api/quote")
    public String getQuote() {
        return quotes.get(new Random().nextInt(quotes.size()));
    }
}
