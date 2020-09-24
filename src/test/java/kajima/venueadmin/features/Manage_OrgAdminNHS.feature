#Author: Jay Pathak
#Comment: Org Admin  - Manage tab Regression - NHS ONLY
Feature: Org Admin Manage tab scenarios 


Background:
    Given User opens browser and enters the admin URL 
    Then enter Org admin login credentials 
    Then User clicks the manage tab for Org admin
    
##============================================================================================================================##
##==============================================7 scenarios for NHS Org admin -  NHS ONLY=============================================================================##    


@OrgAdmin
Scenario: Manage tab-verify all the subtabs and navigate
Then User verify all the subtabs and click all the tabs to ensure it allows to access the screen successfully 
And user quit the browser

@OrgAdmin
Scenario: Manage tab-Booking rules tab - Update booking rules and revert back to to the original rule
Then User navigate to Booking rules tab and amend all available rules, verify and revert back to original rules 
And user quit the browser

@OrgAdmin
Scenario: Manage tab-Venue management-verify space Categories - add, edit, delete
Then User add the new space Categories and verify
Then User Edit the new space Categories and verify
Then User Delete the new space Categories and verify
And user quit the browser

@OrgAdmin
Scenario: Manage tab - CCG region - verify add, edit, delete
Then User added the new CCG region and verify this shows on reg form
Then User Edited the CCG region and verify
Then User Deleted the CCG region and verify
And user quit the browser

@OrgAdmin
Scenario: Manage tab - Service tab - verify view,adding and amending services 
Then User view the service tab and see a list of services for the organisation 
Then User added new services and choose if this is clinocal or non- clinical services 
Then User editing services name and description 
And user quit the browser

# Coding for below ticket to be completed with reports ticket
#@OrgAdmin
#Scenario: Manage tab-Reports tab-Verify scheduling different reports using different date and time spans 
#Then User schedule a new report by selecting different date spans and verify schedule report table
#Then User schedule a new report by selecting different time spans and verify schedule report table
#Then user Edit the existing scheduled reports
#Then user delete the existing schedule reports 
#And user quit the browser

# Coding for below ticket to be completed with reports ticket
#@OrgAdmin
#Scenario: Manage tab-verify schedule report for venue groups, add new venue and remve venues 
#Then Schedule new report by selecting venue group to ensure that venues from the selected groups are greyed out and cant be amended
#Then Master admin added a new venue to the venue group and user ensure that newly added venue is automatically selected when selected the group 
#Then Master admin removed a new venue from the venue group and user ensure that removed venue is not appearing when selected the group
#And user quit the browser






