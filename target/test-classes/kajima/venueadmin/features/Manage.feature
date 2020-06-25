#Author: Jay Pathak
#Comment: Venue Admin  - Manage tab Regression 
Feature: Manage tab scenarios 


Background:
    Given User opens browser and enters the admin URL 
    Then enter login credentials 
    When navigates to homepage
    Then User clicks the manage tab 
    
##============================================================================================================================##
##==============================================12 scenarios for Venue admin=============================================================================##    


@VenueAdmin
Scenario: Search and filter - verify booking results with different search/filter Criteria, summary view and exports
Then User selects New client user button