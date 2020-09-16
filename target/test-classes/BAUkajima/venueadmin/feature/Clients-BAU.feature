#Author: Jay Pathak
#Comment: BAU Venue Admin  - Clients tab Regression 
Feature: BAU Clients tab scenarios 


Background:
    Given User opens browser and enters the admin URL 
    Then enter required credentials and Login 
    When User have gone to the homepage
    Then User clicks the client tab and search for a client
    
##============================================================================================================================##
##==============================================15 scenarios for BAU Venue admin=============================================================================##    

@VenueAdmin
Scenario: Verify that user can add a manual payment from the Clients screen
 		Then User adds a Manual payment and verify the result  
    And user quit the browser


@VenueAdmin
Scenario: Verify that user can add a new refund from the Clients screen
 		Then User adds a new refund and verify the result  
    And user quit the browser   

    
@VenueAdmin
Scenario: Verify that user can raise a credit notes from the Clients screen
 		Then User raises a Credit notes and verify the result  
    And user quit the browser


@VenueAdmin
Scenario: Verify that user can upload the document and can add a reminder to document
 		Then User selects new document and save successfully 
 		Then user add the reminder and verify
    And user quit the browser

#
@VenueAdmin
Scenario: Verify that user can add a reminder to a client account
 		Then User selects Create a reminder option and successfully added a reminder to a client screen 
    And user quit the browser


@VenueAdmin
Scenario: View Payments from the client tab 
 		Then Verify the account activity tab and view Payments by clicking the description, add notes and click save or close
    And user quit the browser
 
@VenueAdmin
Scenario: View Invoices from the client tab 
 		Then Verify the account activity tab and view Invoice by clicking the description,click Payments link and click view client again
    And user quit the browser
    
@VenueAdmin
Scenario: View Credit Notes from the client tab 
 		Then Verify the account activity tab and view Credit notes by clicking the description,click refund and click view client again
    And user quit the browser
    
@VenueAdmin
Scenario: View Refund from the client tab 
 		Then Verify the account activity tab and view Refund by clicking the description and click close the pop up
    And user quit the browser

@VenueAdmin
Scenario: View bookings from the Clients tab and edit the booking
 		Then User go to Clients bookings section and select the bookings to view the details and edit the booking
    And user quit the browser

@VenueAdmin
Scenario: Verify that user can edit a client account
 		Then User selects edit client option, update name, last name, Notes etc and save successfully 
    And user quit the browser

@VenueAdmin
Scenario: Verify that user can Archive and then Restore the client  
 		Then User select Archive client link and archive the client successfully 
 		Then user navigate to show archieved clients screen and Restore the client successfully
    And user quit the browser

@VenueAdmin
Scenario: Create New BAU user - client User
    Then User selects New client user button, enter mandatory fields, create user and verify
    And user quit the browser

@VenueAdmin
Scenario: Edit a BAU User -  update details 
    Then User selects 'Edit Users' link , update the details and verify the edited user
    And user quit the browser

@VenueAdmin
Scenario: Unlink a client User
    Then User unlink the user and verify the details 
    And user quit the browser




