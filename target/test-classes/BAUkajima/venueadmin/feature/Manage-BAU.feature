#Author: Jay Pathak
#Comment: Venue Admin  - BAU Manage tab Regression 
Feature: BAUManage tab scenarios 


Background:
    Given User opens browser and enters the admin URL 
    Then enter login credentials 
    When navigates to homepage
    Then User clicks the manage tab 
    
##============================================================================================================================##
##==============================================11 scenarios for Venue admin=============================================================================##    

@VenueAdmin
Scenario: Manage tab -  Venue management - verify Client Booking slots - add, edit, delete
Then User added the new booking slot  and verify
Then User Edited the booking slot and verify
Then User Deleted the booking slot and verify
And user quit the browser

@VenueAdmin
Scenario: Manage tab -  Venue management - verify Add a client flag, assign to a client and then delete the flag
Then User added a new cleint flag, assign to client and verify that this is visible on client account for admin
Then User deleted the flag and verify that it is not visible to client account for admin anymore
And user quit the browser

@VenueAdmin
Scenario: Manage tab -  Venue management - verify Booking Categories - add, edit, delete
Then User added the new booking Categories and verify
Then User Edited the new booking Categories and verify
Then User Deleted the new booking Categories and verify
And user quit the browser

@VenueAdmin
Scenario: Manage tab -  Venue management - BAU Edit Venue 
Then BAU User selects Edit venue , navigate to all the subtabs and verify 
Then BAU User navigate to basic info subtab,updating info and check this saves correctly
Then BAU User navigate to Billing subtab – check that invoice/credit note prefixes can be updated, check this saves correctly and is applied to invoices – change back to original info
And user quit the browser

@VenueAdmin
Scenario: Manage tab -  Venue management - Edit website 
Then BAUUser selects Edit website , navigate to all the subtabs and verify
And user quit the browser

@VenueAdmin
Scenario: Manage tab -  Venue management - verify Booking Checklists – add, edit items (edit, re-order and delete), edit, delete
Then User added the new booking checklist and verify 
Then User Edit Items by editing, reordering and deleting 
Then user edited the new booking checklist added
Then User deleted the new booking checklist added above
And user quit the browser


@VenueAdmin
Scenario: Manage tab -  Venue management - verify Holidays - add, edit, delete
Then User added the new Holiday  and verify
Then User Edited the Holiday and verify
Then User Deleted the Holiday and verify
And user quit the browser

@VenueAdmin
Scenario: Manage tab -  Venue management - verify Closures - add, edit, delete
Then User added the new Closures  and verify
Then User Edited the Closures and verify
Then User Deleted the Closures and verify
And user quit the browser

@VenueAdmin
Scenario: Manage tab -  Venue management - verify Client Booking slots - add, edit, delete
Then User added the new booking slot  and verify
Then User Edited the booking slot and verify
Then User Deleted the booking slot and verify
And user quit the browser

@VenueAdmin
Scenario: Manage tab -  Venue management - verify My default calendar - edit and update
Then User verifies default calender time , edit the times and update
And user quit the browser

@VenueAdmin
Scenario: Manage tab -  Venue management - verify Bookable spaces – Add and edit and delete. 
Then Adding a new bookable space – assign to new category
Then Edit and Deleting a bookable space
And user quit the browser

@VenueAdmin
Scenario: Manage tab -  Venue management - verify Add a client flag, assign to a client and then delete the flag
Then User added a new cleint flag, assign to client and verify that this is visible on client account for admin
Then User deleted the flag and verify that it is not visible to client account for admin anymore
And user quit the browser


#BAU specific - NEED TO WRITE CODE FOR BELOW SCENARIO 
@VenueAdmin
Scenario: BAU Manage tab -  Venue management - verify calender Categories – add, edit (name, description, limit client bookings to slots), delete
Then User added the new calender Category  and verify
Then User Edited the calender Categories like name, description, limit client bookings to slots and verify
Then User Deleted the calender Category and verify
And user quit the browser





