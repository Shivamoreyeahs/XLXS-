const express = require('express');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
    company_name: {
      type: String,
    },
    company_website: {
      type: String,
    },
    company_phone_number: {
      type: String,
    },
    company_size: {
      type: String,
    },
    company_city: {
      type: String,
    },
    company_state: {
      type: String,
    },
    company_country: {
      type: String,
    },
    company_sector: {
      type: String,
    },
    company_industry: {
      type: String,
    },
    company_products_services: {
      type: String,
    },
    company_description: {
      type: String,
    },
    stock_exchange: {
      type: String,
    },
    stock_symbol: {
      type: String,
    },
    stock_price: {
      type: String,
    },
    fiscal_year: {
      type: String,
    },

    company_facebook_page: {
      type: String,
    },
    company_linkedin_page: {
      type: String,
    },
    company_twitter_page: {
      type: String,
    },
    job_count: {
      type: Number,
    },
    technology: {
      type: String,
    },
    postal_code: {
      type: Number,
    },
    company_street_address: {
      type: String,
    },
  },
  {
    timestamps: true,
  });

module.exports = mongoose.model('User', userSchema);