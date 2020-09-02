$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Bookings.feature");
formatter.feature({
  "comments": [
    {
      "line": 2,
      "value": "#Author: Jay Pathak"
    },
    {
      "line": 3,
      "value": "#Comment: Venue Admin  - Bookings tab Regression"
    }
  ],
  "line": 4,
  "name": "Bookings tab scenarios",
  "description": "",
  "id": "bookings-tab-scenarios",
  "keyword": "Feature"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user navigates to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the Bookings tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.enter_credentials_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.user_navigates_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.user_clicks_the_Bookings_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "comments": [
    {
      "line": 13,
      "value": "##\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d##"
    },
    {
      "line": 14,
      "value": "##\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d13 scenarios for Venue admin\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d##"
    }
  ],
  "line": 17,
  "name": "Enable-Disable refund feature from master admin and verify the disabled refund option from MVAs",
  "description": "",
  "id": "bookings-tab-scenarios;enable-disable-refund-feature-from-master-admin-and-verify-the-disabled-refund-option-from-mvas",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "User disable the refund feature from the master admin and ensure no refund option displays when master admin cancels booking",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Bookings_SD.user_disable_the_refund_feature_from_the_master_admin_and_ensure_no_refund_option_displays_when_master_admin_cancels_booking()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user navigates to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the Bookings tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.enter_credentials_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.user_navigates_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.user_clicks_the_Bookings_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 22,
  "name": "Cancel multiple mixed bookings -  select check box for different payment status bookings and cancel",
  "description": "",
  "id": "bookings-tab-scenarios;cancel-multiple-mixed-bookings----select-check-box-for-different-payment-status-bookings-and-cancel",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User Select check box for mutiple different payment status bookings and cancel to verify CN and Refunds if applicable",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Bookings_SD.User_Select_check_box_for_multiple_different_payment_status_bookings_and_cancel_to_verify_CN_and_Refunds_if_applicable()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user navigates to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the Bookings tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.enter_credentials_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.user_navigates_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.user_clicks_the_Bookings_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 27,
  "name": "Search and filter - verify booking results with different search/filter Criteria, summary view and exports",
  "description": "",
  "id": "bookings-tab-scenarios;search-and-filter---verify-booking-results-with-different-search/filter-criteria,-summary-view-and-exports",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 26,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "User changes the number of enteries and verify results",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "User enters room name OR clients name in the search bar and verify the result",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "User verify booking results by selecting different STATUS options",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "User verify booking results by selecting different PAYMENT STATUS options",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "User verify booking results by selecting different date range",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "User verify the summary option and view the booking",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User select Export excel button and verify that excel generated successfully",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Bookings_SD.user_changes_the_number_of_enteries_and_verify_results()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.user_enters_room_name_OR_clients_name_in_the_search_bar_and_verify_the_result()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.user_verify_booking_results_by_selecting_different_STATUS_options()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.user_verify_booking_results_by_selecting_different_PAYMENT_STATUS_options()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.user_verify_booking_results_by_selecting_different_date_range()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.user_verify_the_summary_option_and_view_the_booking()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.user_select_Export_excel_button_and_verify_that_excel_generated_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user navigates to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the Bookings tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.enter_credentials_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.user_navigates_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.user_clicks_the_Bookings_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 40,
  "name": "Raise a booking via new booking button",
  "description": "",
  "id": "bookings-tab-scenarios;raise-a-booking-via-new-booking-button",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 39,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 41,
  "name": "User selects a new Booking button and raise daily recurring booking",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "User selects a new Booking button and raise weekly recurring booking",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "User selects a new Booking button and raise monthly recurring booking",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Bookings_SD.user_selects_a_new_Booking_button_and_raise_daily_recurring_booking()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.user_selects_a_new_Booking_button_and_raise_weekly_recurring_booking()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.user_selects_a_new_Booking_button_and_raise_monthly_recurring_booking()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user navigates to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the Bookings tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.enter_credentials_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.user_navigates_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.user_clicks_the_Bookings_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 47,
  "name": "Edit bookings - Filter booking by payment status and Edit",
  "description": "",
  "id": "bookings-tab-scenarios;edit-bookings---filter-booking-by-payment-status-and-edit",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 46,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "User filter the booking by FULLY PAID payment status and edit the booking",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "User filter the booking by BILLED payment status and edit the booking",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "User filter the booking by UNBILLED payment status and edit the booking",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Bookings_SD.user_filter_the_booking_by_FULLY_PAID_payment_status_and_edit_the_booking()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.user_filter_the_booking_by_BILLED_payment_status_and_edit_the_booking()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.user_filter_the_booking_by_UNBILLED_payment_status_and_edit_the_booking()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user navigates to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the Bookings tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.enter_credentials_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.user_navigates_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.user_clicks_the_Bookings_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 54,
  "name": "Cancel fully paid bookings - verify refund option when cancel booking from Calender,Clients tab.",
  "description": "",
  "id": "bookings-tab-scenarios;cancel-fully-paid-bookings---verify-refund-option-when-cancel-booking-from-calender,clients-tab.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 53,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 55,
  "name": "User cancel the fully paid booking from the calender tab and verify that the refund is displayed as expected",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "User cancel the fully paid booking from the Clients tab and verify that the refund is displayed as expected",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Bookings_SD.user_cancel_the_fully_paid_booking_from_the_calender_tab_and_verify_that_the_refund_is_displayed_as_expected()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.user_cancel_the_fully_paid_booking_from_the_Clients_tab_and_verify_that_the_refund_is_displayed_as_expected()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user navigates to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the Bookings tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.enter_credentials_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.user_navigates_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.user_clicks_the_Bookings_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 60,
  "name": "Cancel single WP fully paid bookings - verify refund option and refund generated",
  "description": "",
  "id": "bookings-tab-scenarios;cancel-single-wp-fully-paid-bookings---verify-refund-option-and-refund-generated",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 59,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 61,
  "name": "User cancel the single WP fully paid booking and verify the refund and check refund in the clients tab",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Bookings_SD.user_cancel_the_single_WP_fully_paid_booking_and_verify_the_refund_and_check_refund_in_the_clients_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user navigates to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the Bookings tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.enter_credentials_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.user_navigates_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.user_clicks_the_Bookings_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 65,
  "name": "Cancel tentative booking and verify the result",
  "description": "",
  "id": "bookings-tab-scenarios;cancel-tentative-booking-and-verify-the-result",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 64,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 66,
  "name": "User cancel the booking with Tentative status and verify that no generate CN and Refund option displays",
  "keyword": "Then "
});
formatter.step({
  "line": 67,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Bookings_SD.user_cancel_the_booking_with_Tentative_status_and_verify_that_no_generate_CN_and_Refund_option_displays()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user navigates to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the Bookings tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.enter_credentials_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.user_navigates_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.user_clicks_the_Bookings_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 70,
  "name": "Cancel unbilled and billed bookings - verify refund option is not displayed",
  "description": "",
  "id": "bookings-tab-scenarios;cancel-unbilled-and-billed-bookings---verify-refund-option-is-not-displayed",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 69,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 71,
  "name": "User cancel the unbilled booking and verify that the refund is not displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 72,
  "name": "User cancel the billed booking and verify that the refund is not displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 73,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Bookings_SD.user_cancel_the_unbilled_booking_and_verify_that_the_refund_is_not_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.user_cancel_the_billed_booking_and_verify_that_the_refund_is_not_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user navigates to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the Bookings tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.enter_credentials_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.user_navigates_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.user_clicks_the_Bookings_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 76,
  "name": "Cancel multiple bookings - verify refund option and refund generated if relevant",
  "description": "",
  "id": "bookings-tab-scenarios;cancel-multiple-bookings---verify-refund-option-and-refund-generated-if-relevant",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 75,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 77,
  "name": "User cancel the multiple fully paid booking and verify the refund and check refund in the clients tab",
  "keyword": "Then "
});
formatter.step({
  "line": 78,
  "name": "User cancel the multiple billed booking and verify the refund and check refund in the clients tab",
  "keyword": "Then "
});
formatter.step({
  "line": 79,
  "name": "User cancel the multiple Unbilled booking and verify the refund and check refund in the clients tab",
  "keyword": "Then "
});
formatter.step({
  "line": 80,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Bookings_SD.user_cancel_the_multiple_fully_paid_booking_and_verify_the_refund_and_check_refund_in_the_clients_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.user_cancel_the_multiple_billed_booking_and_verify_the_refund_and_check_refund_in_the_clients_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.user_cancel_the_multiple_Unbilled_booking_and_verify_the_refund_and_check_refund_in_the_clients_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user navigates to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the Bookings tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.enter_credentials_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.user_navigates_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.user_clicks_the_Bookings_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 83,
  "name": "Cancel multiple mixed bookings -  select check box for different payment status bookings and cancel",
  "description": "",
  "id": "bookings-tab-scenarios;cancel-multiple-mixed-bookings----select-check-box-for-different-payment-status-bookings-and-cancel",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 82,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 84,
  "name": "User Select check box for mutiple different payment status bookings and cancel to verify CN and Refunds if applicable",
  "keyword": "Then "
});
formatter.step({
  "line": 85,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Bookings_SD.User_Select_check_box_for_multiple_different_payment_status_bookings_and_cancel_to_verify_CN_and_Refunds_if_applicable()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user navigates to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the Bookings tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.enter_credentials_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.user_navigates_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.user_clicks_the_Bookings_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 88,
  "name": "Cancel fully paid bookings for NON BILLABLE client - verify refund option is not displayed",
  "description": "",
  "id": "bookings-tab-scenarios;cancel-fully-paid-bookings-for-non-billable-client---verify-refund-option-is-not-displayed",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 87,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 89,
  "name": "User cancel the fully paid booking for non billable client to verify that the refund option is NOT displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 90,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Bookings_SD.user_cancel_the_fully_paid_booking_for_non_billable_client_to_verify_that_the_refund_option_is_NOT_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user navigates to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the Bookings tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.enter_credentials_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.user_navigates_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.user_clicks_the_Bookings_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 93,
  "name": "Cancel single manual fully paid bookings - verify refund option and refund generated",
  "description": "",
  "id": "bookings-tab-scenarios;cancel-single-manual-fully-paid-bookings---verify-refund-option-and-refund-generated",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 92,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 94,
  "name": "User cancel the single manual fully paid booking and verify the refund and check refund in the clients tab",
  "keyword": "Then "
});
formatter.step({
  "line": 95,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Bookings_SD.user_cancel_the_single_manual_fully_paid_booking_and_verify_the_refund_and_check_refund_in_the_clients_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("Calender.feature");
formatter.feature({
  "comments": [
    {
      "line": 2,
      "value": "#Author: Jay Pathak"
    },
    {
      "line": 3,
      "value": "#Comment: Venue Admin  - Calender tab Regression"
    }
  ],
  "line": 4,
  "name": "Calender tab scenarios",
  "description": "",
  "id": "calender-tab-scenarios",
  "keyword": "Feature"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Enter credentials",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User navigate to dasboard homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the Calender tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Calender_SD.Enter_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Calender_SD.User_navigate_to_dasboard_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Calender_SD.user_clicks_the_Calender_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "comments": [
    {
      "line": 14,
      "value": "##\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d6 Calender scenarios\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d"
    }
  ],
  "line": 17,
  "name": "Edit a single occurrence of booking from calender -  Billed and Unbilled",
  "description": "",
  "id": "calender-tab-scenarios;edit-a-single-occurrence-of-booking-from-calender----billed-and-unbilled",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "User creates a single occurance of booking, billed it and edit billed status of booking from the Calender",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User creates a single occurance of booking, and edit unbilled status of booking from the Calender",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Calender_SD.user_creates_a_single_occurance_of_booking_billed_it_and_edit_billed_status_of_booking_from_the_Calender()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Calender_SD.user_creates_a_single_occurance_of_booking_and_edit_unbilled_status_of_booking_from_the_Calender()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Enter credentials",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User navigate to dasboard homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the Calender tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Calender_SD.Enter_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Calender_SD.User_navigate_to_dasboard_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Calender_SD.user_clicks_the_Calender_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 28,
  "name": "Verify viewing bookable space info",
  "description": "",
  "id": "calender-tab-scenarios;verify-viewing-bookable-space-info",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 27,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "User clicks the bookable space to check the information",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Calender_SD.user_clicks_the_bookable_space_to_check_the_information()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Enter credentials",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User navigate to dasboard homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the Calender tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Calender_SD.Enter_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Calender_SD.User_navigate_to_dasboard_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Calender_SD.user_clicks_the_Calender_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 33,
  "name": "verify date filter on calender to view the results",
  "description": "",
  "id": "calender-tab-scenarios;verify-date-filter-on-calender-to-view-the-results",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "User selects different dates by clicking previous/forward arrows to view the bookings",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "User enter the date manually and verify the result",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Calender_SD.user_selects_different_dates_by_clicking_previous_forward_arrows_to_view_the_bookings()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Calender_SD.user_enter_the_date_manually_and_verify_the_result()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Enter credentials",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User navigate to dasboard homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the Calender tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Calender_SD.Enter_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Calender_SD.User_navigate_to_dasboard_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Calender_SD.user_clicks_the_Calender_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 39,
  "name": "verify different calender filter to view the results",
  "description": "",
  "id": "calender-tab-scenarios;verify-different-calender-filter-to-view-the-results",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 38,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "User selects different catagories from the drop down to view the bookings for the relevant bookable spaces",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "User selects view booked room only check box to see only rooms where we have bookings",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Calender_SD.user_selects_different_catagories_from_the_drop_down_to_view_the_bookings_for_the_relevant_bookable_spaces()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Calender_SD.user_selects_view_booked_room_only_check_box_to_see_only_rooms_where_we_have_bookings()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Enter credentials",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User navigate to dasboard homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the Calender tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Calender_SD.Enter_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Calender_SD.User_navigate_to_dasboard_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Calender_SD.user_clicks_the_Calender_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 45,
  "name": "Create provisional bookings , confirm it and ensure that admins are not restricted by service types and CCG rules",
  "description": "",
  "id": "calender-tab-scenarios;create-provisional-bookings-,-confirm-it-and-ensure-that-admins-are-not-restricted-by-service-types-and-ccg-rules",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 44,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "Admin create a new booking from the calender and ensure that it is not restricted by service type and CCG rules",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "user confirms the provisional booking from the calender",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Calender_SD.admin_create_a_new_booking_from_the_calender_and_ensure_that_it_is_not_restricted_by_service_type_and_CCG_rules()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Calender_SD.user_confirms_the_provisional_booking_from_the_calender()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("Clients.feature");
formatter.feature({
  "comments": [
    {
      "line": 2,
      "value": "#Author: Jay Pathak"
    },
    {
      "line": 3,
      "value": "#Comment: Org Admin and Venue Admin  - Clients tab Regression"
    }
  ],
  "line": 4,
  "name": "Clients tab scenarios",
  "description": "",
  "id": "clients-tab-scenarios",
  "keyword": "Feature"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter required credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User have gone to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the client tab and search for a client",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.enter_required_credentials_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_have_gone_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_clicks_the_client_tab_and_search_for_a_client()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "comments": [
    {
      "line": 13,
      "value": "##\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d##"
    },
    {
      "line": 14,
      "value": "##\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d12 scenarios for Both Org and Venue admin\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d##"
    },
    {
      "line": 16,
      "value": "# Below scenario is applicable for BOTH OrgAdmin and VenueAdmin"
    }
  ],
  "line": 18,
  "name": "Create New user - Primary User",
  "description": "",
  "id": "clients-tab-scenarios;create-new-user---primary-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@OrgAdmin"
    },
    {
      "line": 17,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "User selects New client user button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user enters all the mandatory fields and selects \u0027Primary\u0027 from user type dropdown and save",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user verify the new user created successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Clients_SD.user_selects_New_client_user_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_enters_all_the_mandatory_fields_and_selects_Primary_from_user_type_dropdown_and_save()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_verify_the_new_user_created_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter required credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User have gone to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the client tab and search for a client",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.enter_required_credentials_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_have_gone_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_clicks_the_client_tab_and_search_for_a_client()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "comments": [
    {
      "line": 24,
      "value": "# Below scenario is applicable for BOTH OrgAdmin and VenueAdmin"
    }
  ],
  "line": 26,
  "name": "Create New user - bill payer",
  "description": "",
  "id": "clients-tab-scenarios;create-new-user---bill-payer",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@OrgAdmin"
    },
    {
      "line": 25,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "User selects the New client user button",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "user enters all the mandatory fields and selects \u0027bill payer\u0027 from user type dropdown and save",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "user verify the new user created",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Clients_SD.user_selects_the_New_client_user_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_enters_all_the_mandatory_fields_and_selects_bill_payer_from_user_type_dropdown_and_save()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_verify_the_new_user_created()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter required credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User have gone to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the client tab and search for a client",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.enter_required_credentials_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_have_gone_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_clicks_the_client_tab_and_search_for_a_client()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "comments": [
    {
      "line": 32,
      "value": "# Below scenario is applicable for BOTH OrgAdmin and VenueAdmin"
    }
  ],
  "line": 34,
  "name": "Create New user - Client level booker",
  "description": "",
  "id": "clients-tab-scenarios;create-new-user---client-level-booker",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 33,
      "name": "@OrgAdmin"
    },
    {
      "line": 33,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "User selects New client users button",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "user enters mandatory fields,selects \u0027Booker\u0027 from user type dropdown,select All services radio button and save",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "verify the new user created successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Clients_SD.user_selects_the_New_client_users_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_enters_all_the_mandatory_fields_and_selects_Booker_from_user_type_dropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.verify_the_new_user_created_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter required credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User have gone to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the client tab and search for a client",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.enter_required_credentials_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_have_gone_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_clicks_the_client_tab_and_search_for_a_client()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "comments": [
    {
      "line": 40,
      "value": "# Below scenario is applicable for BOTH OrgAdmin and VenueAdmin"
    }
  ],
  "line": 42,
  "name": "Create New user - service level booker",
  "description": "",
  "id": "clients-tab-scenarios;create-new-user---service-level-booker",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 41,
      "name": "@OrgAdmin"
    },
    {
      "line": 41,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "User selects New client user option button",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "user enters mandatory fields, select\u0027booker\u0027from the dropdown, select services radio button, select req services and save",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "verify new user created successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Clients_SD.user_selects_New_client_users_option_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_enters_all_the_mandatory_fields_and_selects_Booker_from_the_dropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.verify_new_user_created_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter required credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User have gone to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the client tab and search for a client",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.enter_required_credentials_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_have_gone_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_clicks_the_client_tab_and_search_for_a_client()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "comments": [
    {
      "line": 48,
      "value": "# Below scenario is applicable for BOTH OrgAdmin and VenueAdmin"
    }
  ],
  "line": 50,
  "name": "Edit a client User -  From Bill payer to Booker",
  "description": "",
  "id": "clients-tab-scenarios;edit-a-client-user----from-bill-payer-to-booker",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 49,
      "name": "@OrgAdmin"
    },
    {
      "line": 49,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 51,
  "name": "User selects \u0027Edit Users\u0027 link for the Bill payer",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "user Selects the booker option from the drop down, select ALL services radio button and save",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "verify the user edited successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Clients_SD.user_selects_Edit_Users_link_for_the_Bill_payer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_Selects_the_booker_option_from_the_drop_down_select_All_services_radiuo_button_and_save()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.verify_the_user_edited_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter required credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User have gone to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the client tab and search for a client",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.enter_required_credentials_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_have_gone_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_clicks_the_client_tab_and_search_for_a_client()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "comments": [
    {
      "line": 56,
      "value": "# Below scenario is applicable for BOTH OrgAdmin and VenueAdmin"
    }
  ],
  "line": 58,
  "name": "Unlink a client User",
  "description": "",
  "id": "clients-tab-scenarios;unlink-a-client-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 57,
      "name": "@OrgAdmin"
    },
    {
      "line": 57,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 59,
  "name": "User selects \u0027Unlink Users\u0027 link for the booker",
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "user Selects cancel from the pop up message",
  "keyword": "Then "
});
formatter.step({
  "line": 61,
  "name": "re-selects \u0027unlink users\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "selects the OK button on the pop up message",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "user verifies that the user is removed the list",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Clients_SD.user_selects_Unlink_Users_link_for_the_booker()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_Selects_cancel_from_the_pop_up_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.re_selects_unlink_users()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.selects_the_OK_button_on_the_pop_up_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_verifies_that_the_user_is_removed_the_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter required credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User have gone to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the client tab and search for a client",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.enter_required_credentials_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_have_gone_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_clicks_the_client_tab_and_search_for_a_client()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "comments": [
    {
      "line": 66,
      "value": "# Below scenario is applicable for BOTH OrgAdmin and VenueAdmin"
    }
  ],
  "line": 68,
  "name": "Edit client and tick/Untick service",
  "description": "",
  "id": "clients-tab-scenarios;edit-client-and-tick/untick-service",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 67,
      "name": "@OrgAdmin"
    },
    {
      "line": 67,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 69,
  "name": "click Edit client button, make service active/Inactive and save",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Clients_SD.click_Edit_client_button_make_service_activeInactive_and_save()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter required credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User have gone to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the client tab and search for a client",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.enter_required_credentials_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_have_gone_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_clicks_the_client_tab_and_search_for_a_client()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "comments": [
    {
      "line": 72,
      "value": "# Below scenario is applicable for BOTH OrgAdmin and VenueAdmin"
    }
  ],
  "line": 74,
  "name": "Edit client and delete service",
  "description": "",
  "id": "clients-tab-scenarios;edit-client-and-delete-service",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 73,
      "name": "@OrgAdmin"
    },
    {
      "line": 73,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 75,
  "name": "click Edit client button, delete the unused service and click update client or click cancel button if no delete link is present",
  "keyword": "Then "
});
formatter.step({
  "line": 76,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Clients_SD.click_Edit_client_button_on_screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter required credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User have gone to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the client tab and search for a client",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.enter_required_credentials_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_have_gone_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_clicks_the_client_tab_and_search_for_a_client()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "comments": [
    {
      "line": 78,
      "value": "# Below scenario is applicable for BOTH OrgAdmin and VenueAdmin"
    }
  ],
  "line": 80,
  "name": "View Payments from the client tab",
  "description": "",
  "id": "clients-tab-scenarios;view-payments-from-the-client-tab",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 79,
      "name": "@OrgAdmin"
    },
    {
      "line": 79,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 81,
  "name": "Verify the account activity tab and view Payments by clicking the description, add notes and click save or close",
  "keyword": "Then "
});
formatter.step({
  "line": 82,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Clients_SD.verify_the_account_activity_tab_and_view_Payments_by_clicking_the_description()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter required credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User have gone to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the client tab and search for a client",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.enter_required_credentials_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_have_gone_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_clicks_the_client_tab_and_search_for_a_client()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "comments": [
    {
      "line": 84,
      "value": "# Below scenario is applicable for BOTH OrgAdmin and VenueAdmin"
    }
  ],
  "line": 86,
  "name": "View Invoices from the client tab",
  "description": "",
  "id": "clients-tab-scenarios;view-invoices-from-the-client-tab",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 85,
      "name": "@OrgAdmin"
    },
    {
      "line": 85,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 87,
  "name": "Verify the account activity tab and view Invoice by clicking the description,click Payments link and click view client again",
  "keyword": "Then "
});
formatter.step({
  "line": 88,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Clients_SD.verify_the_account_activity_tab_and_view_Invoice_by_clicking_the_description()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter required credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User have gone to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the client tab and search for a client",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.enter_required_credentials_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_have_gone_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_clicks_the_client_tab_and_search_for_a_client()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "comments": [
    {
      "line": 90,
      "value": "# Below scenario is applicable for BOTH OrgAdmin and VenueAdmin"
    }
  ],
  "line": 92,
  "name": "View Credit Notes from the client tab",
  "description": "",
  "id": "clients-tab-scenarios;view-credit-notes-from-the-client-tab",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 91,
      "name": "@OrgAdmin"
    },
    {
      "line": 91,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 93,
  "name": "Verify the account activity tab and view Credit notes by clicking the description,click refund and click view client again",
  "keyword": "Then "
});
formatter.step({
  "line": 94,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Clients_SD.verify_the_account_activity_tab_and_view_Credit_notes_by_clicking_the_description()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter required credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User have gone to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the client tab and search for a client",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.enter_required_credentials_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_have_gone_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_clicks_the_client_tab_and_search_for_a_client()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "comments": [
    {
      "line": 96,
      "value": "# Below scenario is applicable for BOTH OrgAdmin and VenueAdmin"
    }
  ],
  "line": 98,
  "name": "View Refund from the client tab",
  "description": "",
  "id": "clients-tab-scenarios;view-refund-from-the-client-tab",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 97,
      "name": "@OrgAdmin"
    },
    {
      "line": 97,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 99,
  "name": "Verify the account activity tab and view Refund by clicking the description and click close the pop up",
  "keyword": "Then "
});
formatter.step({
  "line": 100,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Clients_SD.verify_the_account_activity_tab_and_view_Refund_by_clicking_the_description()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter required credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User have gone to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the client tab and search for a client",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.enter_required_credentials_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_have_gone_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_clicks_the_client_tab_and_search_for_a_client()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "comments": [
    {
      "line": 103,
      "value": "##\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d##"
    },
    {
      "line": 104,
      "value": "##\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d8 scenarios for Only venue admin\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d##"
    },
    {
      "line": 106,
      "value": "# Below scenario is ONLY applicable for VenueAdmin"
    }
  ],
  "line": 108,
  "name": "View bookings from the Clients tab and edit the booking",
  "description": "",
  "id": "clients-tab-scenarios;view-bookings-from-the-clients-tab-and-edit-the-booking",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 107,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 109,
  "name": "User go to Clients bookings section and select the bookings to view the details and edit the booking",
  "keyword": "Then "
});
formatter.step({
  "line": 110,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Clients_SD.User_go_to_Clients_bookings_section_and_select_the_bookings_to_view_the_details_and_edit()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter required credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User have gone to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the client tab and search for a client",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.enter_required_credentials_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_have_gone_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_clicks_the_client_tab_and_search_for_a_client()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "comments": [
    {
      "line": 112,
      "value": "# Below scenario is ONLY applicable for VenueAdmin"
    }
  ],
  "line": 114,
  "name": "Verify that user can Archive and then Restore the client",
  "description": "",
  "id": "clients-tab-scenarios;verify-that-user-can-archive-and-then-restore-the-client",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 113,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 115,
  "name": "User select Archive client link and archive the client successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 116,
  "name": "user navigate to show archieved clients screen and Restore the client successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 117,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Clients_SD.User_select_Archive_client_link_and_archive_the_client_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_navigate_to_show_archieved_clients_screen_and_Restore_the_client_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter required credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User have gone to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the client tab and search for a client",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.enter_required_credentials_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_have_gone_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_clicks_the_client_tab_and_search_for_a_client()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "comments": [
    {
      "line": 119,
      "value": "# Below scenario is ONLY applicable for VenueAdmin"
    }
  ],
  "line": 121,
  "name": "Verify that user can upload the document and can add a reminder to document",
  "description": "",
  "id": "clients-tab-scenarios;verify-that-user-can-upload-the-document-and-can-add-a-reminder-to-document",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 120,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 122,
  "name": "User selects new document and save successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 123,
  "name": "user add the reminder and verify",
  "keyword": "Then "
});
formatter.step({
  "line": 124,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Clients_SD.User_selects_new_document_and_save_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_add_the_reminder_and_verify()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter required credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User have gone to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the client tab and search for a client",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.enter_required_credentials_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_have_gone_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_clicks_the_client_tab_and_search_for_a_client()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "comments": [
    {
      "line": 126,
      "value": "# Below scenario is ONLY applicable for VenueAdmin"
    }
  ],
  "line": 128,
  "name": "Verify that user can add a reminder to a client account",
  "description": "",
  "id": "clients-tab-scenarios;verify-that-user-can-add-a-reminder-to-a-client-account",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 127,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 129,
  "name": "User selects Create a reminder option and successfully added a reminder to a client screen",
  "keyword": "Then "
});
formatter.step({
  "line": 130,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Clients_SD.User_selects_Create_a_reminder_option_and_successfully_added_a_reminder_to_a_client_screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter required credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User have gone to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the client tab and search for a client",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.enter_required_credentials_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_have_gone_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_clicks_the_client_tab_and_search_for_a_client()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "comments": [
    {
      "line": 132,
      "value": "# Below scenario is ONLY applicable for VenueAdmin"
    }
  ],
  "line": 134,
  "name": "Verify that user can edit a client account",
  "description": "",
  "id": "clients-tab-scenarios;verify-that-user-can-edit-a-client-account",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 133,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 135,
  "name": "User selects edit client option, update name, last name, Notes etc and save successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 136,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Clients_SD.User_selects_edit_client_option_update_name_last_name_Notes_etc_and_save_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter required credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User have gone to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the client tab and search for a client",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.enter_required_credentials_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_have_gone_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_clicks_the_client_tab_and_search_for_a_client()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "comments": [
    {
      "line": 138,
      "value": "# Below scenario is ONLY applicable for VenueAdmin"
    }
  ],
  "line": 140,
  "name": "Verify that user can add a manual payment from the Clients screen",
  "description": "",
  "id": "clients-tab-scenarios;verify-that-user-can-add-a-manual-payment-from-the-clients-screen",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 139,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 141,
  "name": "User adds a Manual payment and verify the result",
  "keyword": "Then "
});
formatter.step({
  "line": 142,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Clients_SD.User_adds_a_Manual_payment_and_verify_the_result()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter required credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User have gone to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the client tab and search for a client",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.enter_required_credentials_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_have_gone_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_clicks_the_client_tab_and_search_for_a_client()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "comments": [
    {
      "line": 144,
      "value": "# Below scenario is ONLY applicable for VenueAdmin"
    }
  ],
  "line": 146,
  "name": "Verify that user can raise a credit notes from the Clients screen",
  "description": "",
  "id": "clients-tab-scenarios;verify-that-user-can-raise-a-credit-notes-from-the-clients-screen",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 145,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 147,
  "name": "User raises a Credit notes and verify the result",
  "keyword": "Then "
});
formatter.step({
  "line": 148,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Clients_SD.User_raises_a_Credit_notes_and_verify_the_result()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter required credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User have gone to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the client tab and search for a client",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.enter_required_credentials_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_have_gone_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_clicks_the_client_tab_and_search_for_a_client()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "comments": [
    {
      "line": 150,
      "value": "# Below scenario is ONLY applicable for VenueAdmin"
    }
  ],
  "line": 152,
  "name": "Verify that user can add a new refund from the Clients screen",
  "description": "",
  "id": "clients-tab-scenarios;verify-that-user-can-add-a-new-refund-from-the-clients-screen",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 151,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 153,
  "name": "User adds a new refund and verify the result",
  "keyword": "Then "
});
formatter.step({
  "line": 154,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Clients_SD.User_adds_a_new_refund_and_verify_the_result()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("Dashboard.feature");
formatter.feature({
  "comments": [
    {
      "line": 2,
      "value": "#Author: Jay Pathak"
    },
    {
      "line": 3,
      "value": "#Comment: Venue Admin  - Dashboard tab Regression"
    }
  ],
  "line": 4,
  "name": "Dashboard tab scenarios",
  "description": "",
  "id": "dashboard-tab-scenarios",
  "keyword": "Feature"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter username and pswd",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User lands on the dashboard",
  "keyword": "When "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Dashboard_SD.enter_username_and_pswd()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Dashboard_SD.User_lands_on_the_dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "comments": [
    {
      "line": 13,
      "value": "##\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d3 Dashboard scenarios\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d"
    }
  ],
  "line": 16,
  "name": "verify clicking hyperlinks to view bookings \u0026 hirers",
  "description": "",
  "id": "dashboard-tab-scenarios;verify-clicking-hyperlinks-to-view-bookings-\u0026-hirers",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User clicks the hyperink to view bookings and hirers",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Dashboard_SD.user_clicks_the_hyperink_to_view_bookings_and_hirers()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter username and pswd",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User lands on the dashboard",
  "keyword": "When "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Dashboard_SD.enter_username_and_pswd()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Dashboard_SD.User_lands_on_the_dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 21,
  "name": "verify Viewing an invoice and sending a reminder",
  "description": "",
  "id": "dashboard-tab-scenarios;verify-viewing-an-invoice-and-sending-a-reminder",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "User clicks the hyperlink to view invoice and sends a reminder",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Dashboard_SD.user_clicks_the_hyperlink_to_view_invoice_and_sends_a_reminder()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter username and pswd",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User lands on the dashboard",
  "keyword": "When "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Dashboard_SD.enter_username_and_pswd()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Dashboard_SD.User_lands_on_the_dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 26,
  "name": "verify Adding a note to an invoice",
  "description": "",
  "id": "dashboard-tab-scenarios;verify-adding-a-note-to-an-invoice",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "User clicks the hyperlink to view invoice and add a note",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Dashboard_SD.user_clicks_the_hyperlink_to_view_invoice_and_add_a_note()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("Invoice.feature");
formatter.feature({
  "comments": [
    {
      "line": 2,
      "value": "#Author: Jay Pathak"
    },
    {
      "line": 3,
      "value": "#Comment: Venue Admin  - Invoice tab Regression"
    }
  ],
  "line": 4,
  "name": "Invoice tab scenarios",
  "description": "",
  "id": "invoice-tab-scenarios",
  "keyword": "Feature"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter required credential to Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User navigate to homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the Invoice tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Invoice_SD.enter_required_credential_to_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Invoice_SD.user_navigate_to_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Invoice_SD.user_clicks_the_Invoice_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "comments": [
    {
      "line": 13,
      "value": "##\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d6 Invoices scenarios\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d"
    }
  ],
  "line": 16,
  "name": "Verify Invoice sub-tabs",
  "description": "",
  "id": "invoice-tab-scenarios;verify-invoice-sub-tabs",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User clicks all the sub-tabs one by one and verify the screen title",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Invoice_SD.user_clicks_all_the_sub_tabs_one_by_one_and_verify_the_screen_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter required credential to Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User navigate to homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the Invoice tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Invoice_SD.enter_required_credential_to_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Invoice_SD.user_navigate_to_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Invoice_SD.user_clicks_the_Invoice_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 21,
  "name": "verify view invoice with awaiting payment status and void the invoice",
  "description": "",
  "id": "invoice-tab-scenarios;verify-view-invoice-with-awaiting-payment-status-and-void-the-invoice",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "User navigate to Invoice awaiting payment subtab, view the Invoice, void it and verify the result",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Invoice_SD.user_navigate_to_Invoice_awaiting_payment_subtab_view_the_Invoice_void_it_and_verify_the_result()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter required credential to Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User navigate to homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the Invoice tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Invoice_SD.enter_required_credential_to_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Invoice_SD.user_navigate_to_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Invoice_SD.user_clicks_the_Invoice_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 26,
  "name": "verify delete an invoice from the draft invoice tab",
  "description": "",
  "id": "invoice-tab-scenarios;verify-delete-an-invoice-from-the-draft-invoice-tab",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "User navigate to draft invoice, delete the invoice and verify the result",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Invoice_SD.user_navigate_to_draft_invoice_delete_the_invoice_and_verify_the_result()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter required credential to Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User navigate to homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the Invoice tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Invoice_SD.enter_required_credential_to_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Invoice_SD.user_navigate_to_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Invoice_SD.user_clicks_the_Invoice_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 31,
  "name": "verify Generate an invoice and mark as sent",
  "description": "",
  "id": "invoice-tab-scenarios;verify-generate-an-invoice-and-mark-as-sent",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "User do the invoice run, view the generated invoice, mark as sent and verify the result",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Invoice_SD.user_do_the_invoice_run_view_the_generated_invoice_mark_as_sent_and_verify_the_result()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter required credential to Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User navigate to homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the Invoice tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Invoice_SD.enter_required_credential_to_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Invoice_SD.user_navigate_to_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Invoice_SD.user_clicks_the_Invoice_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 36,
  "name": "verify Generate an invoice and email the select one",
  "description": "",
  "id": "invoice-tab-scenarios;verify-generate-an-invoice-and-email-the-select-one",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "User do the invoice run and email the selected invoice from the draft tab and verify the result",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Invoice_SD.user_do_the_invoice_run_and_email_the_selected_invoice_from_the_draft_tab_and_verify_the_result()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter required credential to Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User navigate to homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the Invoice tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Invoice_SD.enter_required_credential_to_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Invoice_SD.user_navigate_to_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Invoice_SD.user_clicks_the_Invoice_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 41,
  "name": "verify email all the invoices by clicking email all invoices button",
  "description": "",
  "id": "invoice-tab-scenarios;verify-email-all-the-invoices-by-clicking-email-all-invoices-button",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 40,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "User navigate to draft invoice, click Email all invoices and verify the result",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Invoice_SD.user_navigate_to_draft_invoice_click_Email_all_invoices_and_verify_the_result()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("Manage.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Jay Pathak"
    },
    {
      "line": 2,
      "value": "#Comment: Venue Admin  - Manage tab Regression"
    }
  ],
  "line": 3,
  "name": "Manage tab scenarios",
  "description": "",
  "id": "manage-tab-scenarios",
  "keyword": "Feature"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "enter login credentials",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "navigates to homepage",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks the manage tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.enter_Login_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.navigates_to_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.user_clicks_the_manage_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "comments": [
    {
      "line": 12,
      "value": "##\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d##"
    },
    {
      "line": 13,
      "value": "##\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d11 scenarios for Venue admin\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d##"
    }
  ],
  "line": 16,
  "name": "Manage tab -  Venue management - verify Holidays - add, edit, delete",
  "description": "",
  "id": "manage-tab-scenarios;manage-tab----venue-management---verify-holidays---add,-edit,-delete",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User added the new Holiday  and verify",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User Edited the Holiday and verify",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User Deleted the Holiday and verify",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Manage_SD.user_added_the_new_Holiday_and_verify()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.user_Edited_the_Holiday_and_verify()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.user_Deleted_the_Holiday_and_verify()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "enter login credentials",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "navigates to homepage",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks the manage tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.enter_Login_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.navigates_to_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.user_clicks_the_manage_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 24,
  "name": "Manage tab -  Venue management - verify Booking Checklists – add, edit items (edit, re-order and delete), edit, delete",
  "description": "",
  "id": "manage-tab-scenarios;manage-tab----venue-management---verify-booking-checklists-–-add,-edit-items-(edit,-re-order-and-delete),-edit,-delete",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "User added the new booking checklist and verify",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "User Edit Items by editing, reordering and deleting",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "user edited the new booking checklist added",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "User deleted the new booking checklist added above",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Manage_SD.user_added_the_new_booking_checklist_and_verify()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.user_Edit_Items_by_editing_reordering_and_deleting()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.user_edited_the_new_booking_checklist_added()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.user_deleted_the_new_booking_checklist_added_above()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "enter login credentials",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "navigates to homepage",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks the manage tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.enter_Login_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.navigates_to_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.user_clicks_the_manage_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 32,
  "name": "Manage tab -  Venue management - verify Booking Categories - add, edit, delete",
  "description": "",
  "id": "manage-tab-scenarios;manage-tab----venue-management---verify-booking-categories---add,-edit,-delete",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 31,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "User added the new booking Categories and verify",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "User Edited the new booking Categories and verify",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "User Deleted the new booking Categories and verify",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Manage_SD.user_added_the_new_booking_Categories_and_verify()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.user_Edited_the_new_booking_Categories_and_verify()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.user_Deleted_the_new_booking_Categories_and_verify()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "enter login credentials",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "navigates to homepage",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks the manage tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.enter_Login_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.navigates_to_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.user_clicks_the_manage_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 39,
  "name": "Manage tab -  Venue management - verify Bookable spaces – Add and edit and delete.",
  "description": "",
  "id": "manage-tab-scenarios;manage-tab----venue-management---verify-bookable-spaces-–-add-and-edit-and-delete.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 38,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "Adding a new bookable space – assign to new category",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Edit and Deleting a bookable space",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Manage_SD.adding_a_new_bookable_space_assign_to_new_category()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.deleting_a_bookable_space()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "enter login credentials",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "navigates to homepage",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks the manage tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.enter_Login_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.navigates_to_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.user_clicks_the_manage_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 47,
  "name": "Manage tab -  Venue management - verify Closures - add, edit, delete",
  "description": "",
  "id": "manage-tab-scenarios;manage-tab----venue-management---verify-closures---add,-edit,-delete",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 46,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "User added the new Closures  and verify",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "User Edited the Closures and verify",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "User Deleted the Closures and verify",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Manage_SD.user_added_the_new_Closures_and_verify()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.user_Edited_the_Closures_and_verify()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.user_Deleted_the_Closures_and_verify()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "enter login credentials",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "navigates to homepage",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks the manage tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.enter_Login_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.navigates_to_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.user_clicks_the_manage_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 54,
  "name": "Manage tab -  Venue management - verify Client Booking slots - add, edit, delete",
  "description": "",
  "id": "manage-tab-scenarios;manage-tab----venue-management---verify-client-booking-slots---add,-edit,-delete",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 53,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 55,
  "name": "User added the new booking slot  and verify",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "User Edited the booking slot and verify",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "User Deleted the booking slot and verify",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Manage_SD.user_added_the_new_booking_slot_and_verify()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.user_Edited_the_booking_slot_and_verify()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.user_Deleted_the_booking_slot_and_verify()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "enter login credentials",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "navigates to homepage",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks the manage tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.enter_Login_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.navigates_to_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.user_clicks_the_manage_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 61,
  "name": "Manage tab -  Venue management - verify My default calendar - edit and update",
  "description": "",
  "id": "manage-tab-scenarios;manage-tab----venue-management---verify-my-default-calendar---edit-and-update",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 60,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 62,
  "name": "User verifies default calender time , edit the times and update",
  "keyword": "Then "
});
formatter.step({
  "line": 63,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Manage_SD.user_verifies_default_calender_time_edit_the_times_and_update()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "enter login credentials",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "navigates to homepage",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks the manage tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.enter_Login_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.navigates_to_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.user_clicks_the_manage_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 66,
  "name": "Manage tab -  Venue management - verify Add a client flag, assign to a client and then delete the flag",
  "description": "",
  "id": "manage-tab-scenarios;manage-tab----venue-management---verify-add-a-client-flag,-assign-to-a-client-and-then-delete-the-flag",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 65,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 67,
  "name": "User added a new cleint flag, assign to client and verify that this is visible on client account for admin",
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "User deleted the flag and verify that it is not visible to client account for admin anymore",
  "keyword": "Then "
});
formatter.step({
  "line": 69,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Manage_SD.user_added_a_new_cleint_flag_assign_to_client_and_verify_that_this_is_visible_on_client_account_for_admin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.user_deleted_the_flag_and_verify_that_it_is_not_visible_to_client_account_for_admin_anymore()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "enter login credentials",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "navigates to homepage",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks the manage tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.enter_Login_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.navigates_to_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.user_clicks_the_manage_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 72,
  "name": "Manage tab -  Venue management - Edit website",
  "description": "",
  "id": "manage-tab-scenarios;manage-tab----venue-management---edit-website",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 71,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 73,
  "name": "User selects Edit website , navigate to all the subtabs and verify",
  "keyword": "Then "
});
formatter.step({
  "line": 74,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Manage_SD.user_selects_Edit_website_navigate_to_all_the_subtabs_and_verify()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "enter login credentials",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "navigates to homepage",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks the manage tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.enter_Login_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.navigates_to_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.user_clicks_the_manage_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 77,
  "name": "Manage tab -  Venue management - Edit Venue",
  "description": "",
  "id": "manage-tab-scenarios;manage-tab----venue-management---edit-venue",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 76,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 78,
  "name": "User selects Edit venue , navigate to all the subtabs and verify",
  "keyword": "Then "
});
formatter.step({
  "line": 79,
  "name": "User navigate to basic info subtab,updating info and check this saves correctly",
  "keyword": "Then "
});
formatter.step({
  "line": 80,
  "name": "User navigate to Billing subtab – check that invoice/credit note prefixes can be updated, check this saves correctly and is applied to invoices – change back to original info",
  "keyword": "Then "
});
formatter.step({
  "line": 81,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Manage_SD.user_selects_Edit_venue_navigate_to_all_the_subtabs_and_verify()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.user_navigate_to_basic_info_subtab_updating_info_and_check_this_saves_correctly()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.user_navigate_to_Billing_subtab_check_that_invoice_credit_note_prefixes_can_be_updated_check_this_saves_correctly_and_is_applied_to_invoices_change_back_to_original_info()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "enter login credentials",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "navigates to homepage",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks the manage tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.enter_Login_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.navigates_to_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.user_clicks_the_manage_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "comments": [
    {
      "line": 83,
      "value": "#NHS specific - NEED TO WRITE CODE FOR BELOW SCENARIO"
    }
  ],
  "line": 85,
  "name": "Manage tab -  Venue management - verify Space Categories – should not have the option to add/edit or delete – Org admin only for NHS",
  "description": "",
  "id": "manage-tab-scenarios;manage-tab----venue-management---verify-space-categories-–-should-not-have-the-option-to-add/edit-or-delete-–-org-admin-only-for-nhs",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 84,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 86,
  "name": "User verify the space catagory to ensure that this section is read only section and user is not allowed to add, edit or delete space catagory",
  "keyword": "Then "
});
formatter.step({
  "line": 87,
  "name": "user login to Org admin and able to add , edit or delete space catagory",
  "keyword": "Then "
});
formatter.step({
  "line": 88,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Manage_SD.user_verify_the_space_catagory_to_ensure_that_this_section_is_read_only_section_and_user_is_not_allowed_to_add_edit_or_delete_space_catagory()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.user_login_to_Org_admin_and_able_to_add_edit_or_delete_space_catagory()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("Payments.feature");
formatter.feature({
  "comments": [
    {
      "line": 2,
      "value": "#Author: Jay Pathak"
    },
    {
      "line": 3,
      "value": "#Comment: Org Admin and Venue Admin  - Clients tab Regression"
    }
  ],
  "line": 4,
  "name": "Clients tab scenarios",
  "description": "",
  "id": "clients-tab-scenarios",
  "keyword": "Feature"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user entered required credential and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User have gone to homepage and verify",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the Payments tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Payments_SD.user_entered_required_credential_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Payments_SD.user_navigate_to_homepage_and_verify()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Payments_SD.user_clicks_the_Payments_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "comments": [
    {
      "line": 13,
      "value": "##\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d5 payments scenarios\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d"
    }
  ],
  "line": 16,
  "name": "Verify viewing individual payment details  -  GC/WP/manual/cash with different statuses and to ensure no refresh option displays",
  "description": "",
  "id": "clients-tab-scenarios;verify-viewing-individual-payment-details-----gc/wp/manual/cash-with-different-statuses-and-to-ensure-no-refresh-option-displays",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User clicks views for different payment types and status and verify the result",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Payments_SD.User_clicks_views_for_different_payment_types_and_status_and_verify_the_result()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user entered required credential and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User have gone to homepage and verify",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the Payments tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Payments_SD.user_entered_required_credential_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Payments_SD.user_navigate_to_homepage_and_verify()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Payments_SD.user_clicks_the_Payments_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 21,
  "name": "Verify result on screen by using different filters",
  "description": "",
  "id": "clients-tab-scenarios;verify-result-on-screen-by-using-different-filters",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "User verify result by selecting different allocation options",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "User verify result by selecting different reconciliation options",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User verify result by selecting different status options",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "User verify result by selecting different date range",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Payments_SD.user_verify_result_by_selecting_different_allocation_options()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Payments_SD.user_verify_result_by_selecting_different_reconciliation_options()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Payments_SD.user_verify_result_by_selecting_different_status_options()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Payments_SD.user_verify_result_by_selecting_different_date_range()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user entered required credential and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User have gone to homepage and verify",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the Payments tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Payments_SD.user_entered_required_credential_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Payments_SD.user_navigate_to_homepage_and_verify()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Payments_SD.user_clicks_the_Payments_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 29,
  "name": "Verify different payment types",
  "description": "",
  "id": "clients-tab-scenarios;verify-different-payment-types",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "User select different payment types from the dropdown to filter out the payments and verify the result",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Payments_SD.user_select_different_payment_types_from_the_dropdown_to_filter_out_the_payments_and_verify_the_result()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user entered required credential and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User have gone to homepage and verify",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the Payments tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Payments_SD.user_entered_required_credential_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Payments_SD.user_navigate_to_homepage_and_verify()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Payments_SD.user_clicks_the_Payments_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 35,
  "name": "Verify refund search bar",
  "description": "",
  "id": "clients-tab-scenarios;verify-refund-search-bar",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 34,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "User enter search criteria in search bar and verify refund results",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Payments_SD.user_enter_search_criteria_in_search_bar_and_verify_refund_results()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user entered required credential and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User have gone to homepage and verify",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the Payments tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Payments_SD.user_entered_required_credential_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Payments_SD.user_navigate_to_homepage_and_verify()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Payments_SD.user_clicks_the_Payments_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 40,
  "name": "Verify refund subtab and view individual refund details",
  "description": "",
  "id": "clients-tab-scenarios;verify-refund-subtab-and-view-individual-refund-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 39,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 41,
  "name": "User navigate to refund tab and view individual refunds",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Payments_SD.user_navigate_to_refund_tab_and_view_individual_refunds()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("Reminder.feature");
formatter.feature({
  "comments": [
    {
      "line": 2,
      "value": "#Author: Jay Pathak"
    },
    {
      "line": 3,
      "value": "#Comment: Venue Admin  - Reminder tab Regression"
    }
  ],
  "line": 4,
  "name": "Reminder tab scenarios",
  "description": "",
  "id": "reminder-tab-scenarios",
  "keyword": "Feature"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter required credential and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User have gone to homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the reminder tab and search for a reminder",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Reminder_SD.enter_required_credential_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Reminder_SD.user_have_gone_to_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Reminder_SD.user_clicks_the_reminder_tab_and_search_for_a_reminder()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "comments": [
    {
      "line": 13,
      "value": "##\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d3 reminder scenarios\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d"
    }
  ],
  "line": 17,
  "name": "View - Reminder and edit a reminder",
  "description": "",
  "id": "reminder-tab-scenarios;view---reminder-and-edit-a-reminder",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "User selects the action link and update the date, save and verify the change",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Reminder_SD.user_selects_the_action_link_and_update_the_date_save_and_verify_the_change()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter required credential and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User have gone to homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the reminder tab and search for a reminder",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Reminder_SD.enter_required_credential_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Reminder_SD.user_have_gone_to_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Reminder_SD.user_clicks_the_reminder_tab_and_search_for_a_reminder()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 22,
  "name": "View - Reminder and action a reminder",
  "description": "",
  "id": "reminder-tab-scenarios;view---reminder-and-action-a-reminder",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User selects the action link, select check box, enter action statement and save and verify the change",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Reminder_SD.user_selects_the_action_link_select_check_box_enter_action_statement_and_save_and_verify_the_change()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter required credential and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User have gone to homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the reminder tab and search for a reminder",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Reminder_SD.enter_required_credential_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Reminder_SD.user_have_gone_to_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Reminder_SD.user_clicks_the_reminder_tab_and_search_for_a_reminder()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 29,
  "name": "View- Reminder and cancel it",
  "description": "",
  "id": "reminder-tab-scenarios;view--reminder-and-cancel-it",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "User selects the cancel link and verify the result",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Reminder_SD.user_selects_the_cancel_link_and_verify_the_result()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("Users.feature");
formatter.feature({
  "comments": [
    {
      "line": 2,
      "value": "#Author: Jay Pathak"
    },
    {
      "line": 3,
      "value": "#Comment: Venue Admin  - Users tab Regression"
    }
  ],
  "line": 4,
  "name": "Users tab scenarios",
  "description": "",
  "id": "users-tab-scenarios",
  "keyword": "Feature"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter valid credential",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "go to dashboard",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the users tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Users_SD.enter_valid_credential()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Users_SD.go_to_dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Users_SD.user_clicks_the_users_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "comments": [
    {
      "line": 14,
      "value": "##\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d 2 Users scenarios\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d"
    }
  ],
  "line": 17,
  "name": "Navigate to different users subtabs, create new venue admin , log in and verify all the tabs and to ensure that unlinked tab is not visible",
  "description": "",
  "id": "users-tab-scenarios;navigate-to-different-users-subtabs,-create-new-venue-admin-,-log-in-and-verify-all-the-tabs-and-to-ensure-that-unlinked-tab-is-not-visible",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "User clicks on all the subtabs and verify the the title",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User creates a new venue admin , log in and navigate to differenet tabs",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user verifies that Unlinked users tab is not visible",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Users_SD.user_clicks_on_all_the_subtabs_and_verify_the_the_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Users_SD.user_creates_a_new_venue_admin_log_in_and_navigate_to_differenet_tabs()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Users_SD.user_verifies_that_Unlinked_users_tab_is_not_visible()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter valid credential",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "go to dashboard",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the users tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Users_SD.enter_valid_credential()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Users_SD.go_to_dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Users_SD.user_clicks_the_users_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 24,
  "name": "verify User updates the email address for the client user",
  "description": "",
  "id": "users-tab-scenarios;verify-user-updates-the-email-address-for-the-client-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "User update the email address for the client user and verify client user can login with the new email",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Users_SD.user_update_the_email_address_for_the_client_user_and_verify_client_user_can_login_with_the_new_email()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});