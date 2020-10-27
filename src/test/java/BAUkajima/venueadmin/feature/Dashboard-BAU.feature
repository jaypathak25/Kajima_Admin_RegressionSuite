
#Author: Jay Pathak
#Comment: Venue Admin  - BAU Dashboard tab Regression 
Feature: BAU Dashboard tab scenarios 


Background:
    Given User opens browser and enters the admin URL
    Then enter username and pswd
    When User lands on the dashboard
    
    
    ##=========================2 BAU Dashboard scenarios=========================
@VenueAdmin
Scenario: Scenario: verify Viewing an invoice, sending a reminder and adding a note
		Then User clicks the send reminder hyperlink from the invoice table and send the reminder
    Then User clicks the hyperlink to view invoice and sends a reminder  
    Then User clicks the hyperlink to view invoice and add a note 
    And user quit the browser 

@VenueAdmin
Scenario: verify clicking hyperlinks to view bookings & hirers
    Then User clicks the hyperink to view bookings and hirers
    And user quit the browser



