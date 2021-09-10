## Sample project to compare nodejs and knex with dotnet and dapper

### Findings

-  _inversifyjs_ for dependeny injection 
   - Famous in the community because of many articles and downloads
   - Does not seem that the main contributor on github still work on that package 
   - Can't get it running without inversify-express-utils, so another extra package and dependency
- *swagger-express-ts* for creation of swagger docu
   - Cannot install this package, because of peer dependency to helmet@3.12 and we use the latest version 4.6
