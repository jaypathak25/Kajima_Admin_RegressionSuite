
#Author: Jay Pathak
#Comment: BAU Venue Admin  - Invoice tab Regression 
Feature: BAU Invoice tab scenarios 


Background:
    Given User opens browser and enters the admin URL 
    Then enter required credential to Login 
    When User navigate to homepage
    Then User clicks the Invoice tab
    
    ##=========================6 Invoices scenarios=========================

@VenueAdmin
Scenario: Verify BAU Invoice sub-tabs
    Then User clicks all the BAU invoice sub-tabs one by one and verify the screen title 
  	And user quit the browser
  			
@VenueAdmin
Scenario: verify view invoice with awaiting payment status and void the invoice
    Then User navigate to Invoice awaiting payment subtab, view the Invoice, void it and verify the result  
  	And user quit the browser
  	    
@VenueAdmin
Scenario: verify delete an invoice from the draft invoice tab
    Then User navigate to draft invoice, delete the invoice and verify the result
  	And user quit the browser
  
@VenueAdmin
Scenario: verify Generate an invoice and mark as sent
    Then User do the invoice run, view the generated invoice, mark as sent and verify the result
  	And user quit the browser
  	
@VenueAdmin
Scenario: BAU verify Generate an invoice and email the select one
    Then User do the BAU invoice run and email the selected invoice from the draft tab and verify the result
    And user quit the browser
  	
@VenueAdmin
Scenario: verify email all the invoices by clicking email all invoices button
    Then User navigate to draft invoice, click Email all invoices and verify the result
  	And user quit the browser
