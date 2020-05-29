
#Author: Jay Pathak
#Comment: Venue Admin  - Bookings tab Regression 
Feature: Bookings tab scenarios 


Background:
    Given User opens browser and enters the admin URL 
    Then enter credentials and Login 
    When user navigates to the homepage
    Then User clicks the Bookings tab 
    
##============================================================================================================================##
##==============================================12 scenarios for Venue admin=============================================================================##    

@VenueAdmin
Scenario: Search and filter - verify booking results with different search/filter Criteria, summary view and exports
    Then User changes the number of enteries and verify results
    Then User enters room name OR clients name in the search bar and verify the result
    Then User verify booking results by selecting different STATUS options
    Then User verify booking results by selecting different PAYMENT STATUS options
    Then User verify booking results by selecting different date range
    And User verify the summary option and view the booking
    And User select Export excel button and verify that excel generated successfully
  	And user quit the browser

@VenueAdmin 	
Scenario: Enable-Disable refund feature from master admin and verify the disabled refund option from MVAs
    Then User disable the refund feature from the master admin and ensure no refund option displays when master admin cancels booking 
  	And user quit the browser
 
@VenueAdmin 	
Scenario: Raise a booking via new booking button   
    Then User selects a new Booking button and raise daily recurring booking
    Then User selects a new Booking button and raise weekly recurring booking
    Then User selects a new Booking button and raise monthly recurring booking  
  	And user quit the browser

@VenueAdmin
Scenario: Edit bookings - Filter booking by payment status and Edit
    Then User filter the booking by FULLY PAID payment status and edit the booking
    Then User filter the booking by BILLED payment status and edit the booking
    Then User filter the booking by UNBILLED payment status and edit the booking
  	And user quit the browser

@VenueAdmin  	
Scenario: Cancel single WP fully paid bookings - verify refund option and refund generated 
    Then User cancel the single WP fully paid booking and verify the refund and check refund in the clients tab
  	And user quit the browser
  	
@VenueAdmin
Scenario: Cancel tentative booking and verify the result 
    Then User cancel the booking with Tentative status and verify that no generate CN and Refund option displays 
  	And user quit the browser

@VenueAdmin
Scenario: Cancel unbilled and billed bookings - verify refund option is not displayed 
    Then User cancel the unbilled booking and verify that the refund is not displayed 
    Then User cancel the billed booking and verify that the refund is not displayed
  	And user quit the browser

@VenueAdmin  	
Scenario: Cancel multiple bookings - verify refund option and refund generated if relevant
    Then User cancel the multiple fully paid booking and verify the refund and check refund in the clients tab
    Then User cancel the multiple billed booking and verify the refund and check refund in the clients tab
    Then User cancel the multiple Unbilled booking and verify the refund and check refund in the clients tab
  	And user quit the browser

@VenueAdmin 	
Scenario: Cancel multiple mixed bookings -  select check box for different payment status bookings and cancel
    Then User Select check box for mutiple different payment status bookings and cancel to verify CN and Refunds if applicable
  	And user quit the browser

@VenueAdmin	
Scenario: Cancel fully paid bookings for NON BILLABLE client - verify refund option is not displayed
    Then User cancel the fully paid booking for non billable client to verify that the refund option is NOT displayed 
  	And user quit the browser

@VenueAdmin
Scenario: Cancel fully paid bookings - verify refund option when cancel booking from Calender,Clients tab.
    Then User cancel the fully paid booking from the calender tab and verify that the refund is displayed as expected 
    Then User cancel the fully paid booking from the Clients tab and verify that the refund is displayed as expected
  	And user quit the browser

@VenueAdmin	
Scenario: Cancel single manual fully paid bookings - verify refund option and refund generated 
    Then User cancel the single manual fully paid booking and verify the refund and check refund in the clients tab
  	And user quit the browser

 