
#Author: Jay Pathak
#Comment: Org Admin and Venue Admin  - Clients tab Regression 
Feature: Clients tab scenarios 


Background:
    Given User opens browser and enters the admin URL 
    Then enter required credentials and Login 
    When User have gone to the homepage
    Then User clicks the client tab and search for a client
    
##============================================================================================================================##
##==============================================12 scenarios for Both Org and Venue admin=============================================================================##    
    
# Below scenario is applicable for BOTH OrgAdmin and VenueAdmin   
@OrgAdmin @VenueAdmin
Scenario: Create New user - Primary User
    Then User selects New client user button
    Then user enters all the mandatory fields and selects 'Primary' from user type dropdown and save
    Then user verify the new user created successfully
  	And user quit the browser

# Below scenario is applicable for BOTH OrgAdmin and VenueAdmin
@OrgAdmin @VenueAdmin
Scenario: Create New user - bill payer
    Then User selects the New client user button
    Then user enters all the mandatory fields and selects 'bill payer' from user type dropdown and save
    Then user verify the new user created
  	And user quit the browser
  	
# Below scenario is applicable for BOTH OrgAdmin and VenueAdmin  	
@OrgAdmin @VenueAdmin
Scenario: Create New user - Client level booker
    Then User selects New client users button
    Then user enters mandatory fields,selects 'Booker' from user type dropdown,select All services radio button and save
    Then verify the new user created successfully
  	And user quit the browser

# Below scenario is applicable for BOTH OrgAdmin and VenueAdmin
@OrgAdmin @VenueAdmin
Scenario: Create New user - service level booker
    Then User selects New client user option button
    Then user enters mandatory fields, select'booker'from the dropdown, select services radio button, select req services and save
    Then verify new user created successfully
  	And user quit the browser

# Below scenario is applicable for BOTH OrgAdmin and VenueAdmin
@OrgAdmin @VenueAdmin
Scenario: Edit a client User -  From Bill payer to Booker
    Then User selects 'Edit Users' link for the Bill payer
    Then user Selects the booker option from the drop down, select ALL services radio button and save
    Then verify the user edited successfully
    And user quit the browser

# Below scenario is applicable for BOTH OrgAdmin and VenueAdmin
@OrgAdmin @VenueAdmin
Scenario: Unlink a client User
    Then User selects 'Unlink Users' link for the booker
    Then user Selects cancel from the pop up message
  	Then re-selects 'unlink users' link
   	And selects the OK button on the pop up message 
    Then user verifies that the user is removed the list
    And user quit the browser

# Below scenario is applicable for BOTH OrgAdmin and VenueAdmin
@OrgAdmin @VenueAdmin
Scenario: Edit client and tick/Untick service  
 		Then click Edit client button, make service active/Inactive and save
    And user quit the browser

# Below scenario is applicable for BOTH OrgAdmin and VenueAdmin 
@OrgAdmin @VenueAdmin
Scenario: Edit client and delete service
 		Then click Edit client button, delete the unused service and click update client or click cancel button if no delete link is present
  	And user quit the browser

# Below scenario is applicable for BOTH OrgAdmin and VenueAdmin
@OrgAdmin @VenueAdmin
Scenario: View Payments from the client tab 
 		Then Verify the account activity tab and view Payments by clicking the description, add notes and click save or close
    And user quit the browser

# Below scenario is applicable for BOTH OrgAdmin and VenueAdmin  
@OrgAdmin @VenueAdmin
Scenario: View Invoices from the client tab 
 		Then Verify the account activity tab and view Invoice by clicking the description,click Payments link and click view client again
    And user quit the browser
    
# Below scenario is applicable for BOTH OrgAdmin and VenueAdmin    
@OrgAdmin @VenueAdmin
Scenario: View Credit Notes from the client tab 
 		Then Verify the account activity tab and view Credit notes by clicking the description,click refund and click view client again
    And user quit the browser
    
# Below scenario is applicable for BOTH OrgAdmin and VenueAdmin 
@OrgAdmin @VenueAdmin
Scenario: View Refund from the client tab 
 		Then Verify the account activity tab and view Refund by clicking the description and click close the pop up
    And user quit the browser


##============================================================================================================================##
##============================================8 scenarios for Only venue admin===============================================================================##

# Below scenario is ONLY applicable for VenueAdmin
@VenueAdmin
Scenario: View bookings from the Clients tab and edit the booking
 		Then User go to Clients bookings section and select the bookings to view the details and edit the booking
    And user quit the browser

# Below scenario is ONLY applicable for VenueAdmin  
@VenueAdmin
Scenario: Verify that user can Archive and then Restore the client  
 		Then User select Archive client link and archive the client successfully 
 		Then user navigate to show archieved clients screen and Restore the client successfully
    And user quit the browser

# Below scenario is ONLY applicable for VenueAdmin
@VenueAdmin
Scenario: Verify that user can upload the document and can add a reminder to document
 		Then User selects new document and save successfully 
 		Then user add the reminder and verify
    And user quit the browser
    
# Below scenario is ONLY applicable for VenueAdmin
@VenueAdmin
Scenario: Verify that user can add a reminder to a client account
 		Then User selects Create a reminder option and successfully added a reminder to a client screen 
    And user quit the browser
    
# Below scenario is ONLY applicable for VenueAdmin
@VenueAdmin
Scenario: Verify that user can edit a client account
 		Then User selects edit client option, update name, last name, Notes etc and save successfully 
    And user quit the browser

# Below scenario is ONLY applicable for VenueAdmin  
@VenueAdmin
Scenario: Verify that user can add a manual payment from the Clients screen
 		Then User adds a Manual payment and verify the result  
    And user quit the browser

# Below scenario is ONLY applicable for VenueAdmin     
@VenueAdmin
Scenario: Verify that user can raise a credit notes from the Clients screen
 		Then User raises a Credit notes and verify the result  
    And user quit the browser
 
# Below scenario is ONLY applicable for VenueAdmin   
@VenueAdmin
Scenario: Verify that user can add a new refund from the Clients screen
 		Then User adds a new refund and verify the result  
    And user quit the browser
    
    
##============================================================================================================================##
##==============================================3 scenarios for only Orgadmin=============================================================================##
    
# Below scenario is ONLY applicable for OrgAdmin    
@OrgAdmin
Scenario: Adding service to the client - Verify error message when adding combination of same service, SI & CCG region 
    Then User selects Edit Client button the screen 
    Then user selects Add services button 
  	Then User select service from the dropdown , enter Service identifier, CCG region
   	Then User click add service button again and entered the same service, Service identifier and CCG region 
    Then User click Update client button and verify the error message 
  	And user quit the browser
    
# Below scenario is ONLY applicable for OrgAdmin    
@OrgAdmin
Scenario: Adding service to the client - Verify adding same service with different combination of SI & CCG region 
    Then User selects Edit Client button 
    Then user select Add services button 
  	Then User select service from the dropdown , enter SI, CCG region
   	Then User click add service button again and entered the same services with different SI and CCG region 
    Then User click Update client button and verify successful message 
    And user quit the browser

# Below scenario is ONLY applicable for OrgAdmin    
@OrgAdmin
Scenario: Verify Registered card section - Remove card and verify the list  
    Then User verifies that Registered card section is appearing on clients screen
  	Then User clicks the Remove link 
   	And Selects cancel from the pop up message 
    Then User clicks the Remove link again 
    And select the OK button on the pop up message 
    Then user verifies the successful message to ensure that Card has been removed from the list
    And user quit the browser
    
 