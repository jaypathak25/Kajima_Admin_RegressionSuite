package kajima.venueadmin.stepDefinition;

import cucumber.api.java.en.Then;
import kajima.venueadmin.base.TestBase;
import kajima.venueadmin.pom_pages.Invoice_Page;
import kajima.venueadmin.pom_pages.Login_Page;

public class Manage_Page_OrgAdmin_SD extends TestBase {
	
	Invoice_Page invoice_page;
	Login_Page login_page;
	

	//***************************Before steps*****************************************************************************============
		
		public Manage_Page_OrgAdmin_SD() {
			invoice_page = new Invoice_Page();
			login_page = new Login_Page();	
		}
	
	
	@Then("^enter Org admin login credentials$")
	public void enter_Org_admin_login_credentials() {
		login_page.loginAsMasterAdmin();

	}

	@Then("^User clicks the manage tab for Org admin$")
	public void user_clicks_the_manage_tab_for_Org_admin() {

	}
	
//========================================Scenario: Manage tab-verify all the subtabs and navigate================================

	@Then("^User verify all the subtabs and click all the tabs to ensure it allows to access the screen successfully$")
	public void user_verify_all_the_subtabs_and_click_all_the_tabs_to_ensure_it_allows_to_access_the_screen_successfully()  {

	}
	

//================================Scenario: Manage tab-Booking rules tab - Update booking rules and revert back to to the original rule==============================

	@Then("^User navigate to Booking rules tab and amend all available rules$")
	public void user_navigate_to_Booking_rules_tab_and_amend_all_available_rules()  {

	}

	@Then("^User revert back all the original rules$")
	public void user_revert_back_all_the_original_rules() {

	}
	
//======================Scenario: Manage tab-Venue management-verify space Categories - add, edit, delete=====================================

	@Then("^User add the new space Categories and verify$")
	public void user_add_the_new_space_Categories_and_verify() {

	}

	@Then("^User Edit the new space Categories and verify$")
	public void user_Edit_the_new_space_Categories_and_verify() {

	}

	@Then("^User Delete the new space Categories and verify$")
	public void user_Delete_the_new_space_Categories_and_verify() {

	}
	

//================================Scenario: Manage tab-Reports tab-Verify scheduling different reports using different date and time spans===========================

	@Then("^User schedule a new report by selecting different date spans and verify schedule report table$")
	public void user_schedule_a_new_report_by_selecting_different_date_spans_and_verify_schedule_report_table() {

	}

	@Then("^User schedule a new report by selecting different time spans and verify schedule report table$")
	public void user_schedule_a_new_report_by_selecting_different_time_spans_and_verify_schedule_report_table() {

	}

	@Then("^user Edit the existing scheduled reports$")
	public void user_Edit_the_existing_scheduled_reports() {

	}

	@Then("^user delete the existing schedule reports$")
	public void user_delete_the_existing_schedule_reports() {

	}
	

//=============================Scenario: Manage tab-verify schedule report for venue groups, add new venue and remve venues ================

	@Then("^Schedule new report by selecting venue group to ensure that venues from the selected groups are greyed out and cant be amended$")
	public void schedule_new_report_by_selecting_venue_group_to_ensure_that_venues_from_the_selected_groups_are_greyed_out_and_cant_be_amended() {

	}

	@Then("^Master admin added a new venue to the venue group and user ensure that newly added venue is automatically selected when selected the group$")
	public void master_admin_added_a_new_venue_to_the_venue_group_and_user_ensure_that_newly_added_venue_is_automatically_selected_when_selected_the_group() {

	}

	@Then("^Master admin removed a new venue from the venue group and user ensure that removed venue is not appearing when selected the group$")
	public void master_admin_removed_a_new_venue_from_the_venue_group_and_user_ensure_that_removed_venue_is_not_appearing_when_selected_the_group() {

	}
	
	
//=====================Scenario: Manage tab - CCG region - verify add, edit, delete========================================================================

	@Then("^User added the new CCG region and verify this shows on reg form$")
	public void user_added_the_new_CCG_region_and_verify_this_shows_on_reg_form() {

	}

	@Then("^User Edited the CCG region and verify$")
	public void user_Edited_the_CCG_region_and_verify() {

	}

	@Then("^User Deleted the CCG region and verify$")
	public void user_Deleted_the_CCG_region_and_verify() {

	}
	
//============================Scenario: Manage tab - Service tab - verify view,adding and amending services =================================================

	@Then("^User view the service tab and see a list of services for the organisation$")
	public void user_view_the_service_tab_and_see_a_list_of_services_for_the_organisation() {

	}

	@Then("^User added new services and choose if this is clinocal or non- clinical services$")
	public void user_added_new_services_and_choose_if_this_is_clinocal_or_non_clinical_services() {

	}

	@Then("^User editing services name and description$")
	public void user_editing_services_name_and_description() {

	}
	
//=============================================================================================================================

}
