
#Author: Jay Pathak
#Comment: Org Admin and Venue Admin  - Clients tab Regression 
Feature: Clients tab scenarios 


Background:
    Given User opens browser and enters the admin URL 
    Then user entered required credential and Login 
    When User have gone to homepage and verify
  	Then User clicks the Payments tab
  	
 ##===========================5 payments scenarios==============================
 
@VenueAdmin
Scenario: Verify viewing individual payment details  -  GC/WP/manual/cash with different statuses and to ensure no refresh option displays 
    Then User clicks views for different payment types and status and verify the result 
  	And user quit the browser
  	
@VenueAdmin
Scenario: Verify result on screen by using different filters
    Then User verify result by selecting different allocation options 
    Then User verify result by selecting different reconciliation options 
    Then User verify result by selecting different status options 
    Then User verify result by selecting different date range 
  	And user quit the browser
  	
@VenueAdmin
Scenario: Verify different payment types 
    Then User select different payment types from the dropdown to filter out the payments and verify the result 
  	And user quit the browser

  	     
@VenueAdmin
Scenario: Verify refund search bar 
    Then User enter search criteria in search bar and verify refund results
  	And user quit the browser
   
@VenueAdmin
Scenario: Verify refund subtab and view individual refund details 
    Then User navigate to refund tab and view individual refunds   
  	And user quit the browser
  	


  	


  	


