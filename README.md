# How to make realy fast your own form public, with Google G Suite (persistence - GSheet, notificaiton: Gmail)

## First phase: create backend

### first Step:
add the files Code.gs and email.html inside Google AppScript

### create a sheet:
Take the id of the sheet (check the URL)
Further change the email address where you receive notification with your own.

### third Step:
publish AppScript as webapp 
!!! Very important: You need to use your @gmail.com domain because you are able to publish this backend as a very permisive app
Execute the app as:
Me (youremail@address)

You need to authorize the script before distributing the URL.
Who has access to the app:
Anyone / even anonymous

### fourth step
copy the public link of your webapp


## Second phase: Frontend

### first Step:
Create a Google Site page

### second Step:
Change the HtmlFromForGSites.html by replacing the webapp link in the code with your own copied from "fourth step"
embed html code (HtmlFromForGSites.html) inside your Google Site page (This should be trivial)

### third Step:
publish the webapp
