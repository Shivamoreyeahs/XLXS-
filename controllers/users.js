const User = require('../models/userSchema');
const csv = require('csvtojson');

const importUser = async (req, res) => {
  // try {
  //   let userData = [];

  //   csv().fromFile(req.file.path)
  //   .then(async(response) => {

  //     for(var x=0;x<response.length;x++) {
  //       userData.push({
  //         name:response[x].name,
  //         email:response[x].email,
  //         mobile:response[x].mobile,
  //         city:response[x].city
  //       })
  //     console.log(response);
  //   }
  
  //   await User.insertMany(userData);
  // })

  //   res.send({success: true,status: 200,msg:"Running successfully"});
  // } catch (err) {
  //   res.send({success: true,status: 400,msg:err.message});
  // }


  try {
      let userData = [];
      csv()
        .fromFile(req.file.path)
        .then(async (response) => {
          for (var x = 0; x < response.length; x++) {
            userData.push({
              id: response[x].id,
              company_name: response[x].company_name,
              company_website: response[x].company_website,
              company_phone_number: response[x].company_phone_number,
              company_size: response[x].company_size,
              company_city: response[x].company_city,
              company_state: response[x].company_state,
              company_country: response[x].company_country,
              company_sector: response[x].company_sector,
              company_industry: response[x].company_industry,
              company_products_services: response[x].company_products_services,
              company_description: response[x].company_description,
              stock_exchange: response[x].stock_exchange,
              stock_symbol: response[x].stock_symbol,
              fiscal_year: response[x].fiscal_year,
              company_facebook_page: response[x].company_facebook_page,
              company_linkedin_page: response[x].company_linkedin_page,
              company_twitter_page: response[x].company_twitter_page,
              job_count: response[x].job_count,
              technology: response[x].technology,
              postal_code: response[x].postal_code,
              company_street_address: response[x].company_street_address,
            });
            
            // console.log(response);
          }

          await User.insertMany(userData);
        });

      res.send({ success: true, status: 200, msg: "Running successfully" });
    } catch (err) {
      res.send({ success: true, status: 400, msg: err.message });
    }
};

module.exports = importUser;
