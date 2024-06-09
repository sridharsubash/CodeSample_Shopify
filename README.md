# CodeSample_Shopify

## 1. GeoIP redirection
The setup is to get the user location based IP and redirecting the use automatically to the specific store fortheir region. 
Files
**config/settings_schema.json** is to configure the country name, URL and enable/disable auto-redirect.
 ![alt text](image.png)

**snippets/geoip_redirects.liquid** - Liquid file with JS function to get user IP location and redirects the user to corresponding rejion store URL and creates a country cookie in browser. So that the user will stay on the local store and avoids repeated redirections. 

When the use wants to select a different region store, he can select the desired store in country selector page. The country cookie will get reset with selected country code, when the use choose a different location and avoids auto redirects.  

 ## 2. Product Siblings (Color Swatches)
 This to add a feature on product description page to display the different colors of same product. 

 Files:
 **templates/collection.siblings.liquid** an internal collection template added with product data required to fetch siblings details. 

 **assets/sibilings.js** A script that creates the sibilings data from siblings collection templates and stores in browser session, added with the triggers which can be used with event handling. 

 **snippets/products-siblings-selector.liquid** will be included in product discription page to render the siblings (color swatches), have javascript function to load siblings for the current visible product based on the current product's family name (style code).   
