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
  "duration": 12179962900,
  "status": "passed"
});
formatter.match({
  "location": "Bookings_SD.enter_credentials_and_Login()"
});
formatter.result({
  "duration": 2601475900,
  "status": "passed"
});
formatter.match({
  "location": "Bookings_SD.user_navigates_to_the_homepage()"
});
formatter.result({
  "duration": 47705100,
  "status": "passed"
});
formatter.match({
  "location": "Bookings_SD.user_clicks_the_Bookings_tab()"
});
formatter.result({
  "duration": 7565786800,
  "status": "passed"
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
  "duration": 11697958100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//td[contains(text(),\u0027NHSPS\u0027)]//following-sibling::td/a[text()\u003d\u0027Edit\u0027]\"}\n  (Session info: chrome\u003d85.0.4183.83)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-L2S6FMP\u0027, ip: \u0027192.168.0.18\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: C:\\Users\\User\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:52283}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 85.0.4183.83, webStorageEnabled: true}\nSession ID: 26edbf9d599e589a5c65a4193d5be6c8\n*** Element info: {Using\u003dxpath, value\u003d//td[contains(text(),\u0027NHSPS\u0027)]//following-sibling::td/a[text()\u003d\u0027Edit\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat kajima.venueadmin.pom_pages.Bookings_Page.verifyRefundFunc(Bookings_Page.java:743)\r\n\tat kajima.venueadmin.stepDefinition.Bookings_SD.user_disable_the_refund_feature_from_the_master_admin_and_ensure_no_refund_option_displays_when_master_admin_cancels_booking(Bookings_SD.java:170)\r\n\tat ✽.Then User disable the refund feature from the master admin and ensure no refund option displays when master admin cancels booking(Bookings.feature:18)\r\n",
  "status": "failed"
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
  "duration": 10411872500,
  "status": "passed"
});
formatter.match({
  "location": "Bookings_SD.enter_credentials_and_Login()"
});
formatter.result({
  "duration": 2400438300,
  "status": "passed"
});
formatter.match({
  "location": "Bookings_SD.user_navigates_to_the_homepage()"
});
formatter.result({
  "duration": 55624700,
  "status": "passed"
});
formatter.match({
  "location": "Bookings_SD.user_clicks_the_Bookings_tab()"
});
formatter.result({
  "duration": 5070284000,
  "status": "passed"
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
  "duration": 49153624000,
  "error_message": "java.lang.AssertionError: The following asserts failed:\n\texpected [true] but found [false]\r\n\tat org.testng.asserts.SoftAssert.assertAll(SoftAssert.java:43)\r\n\tat kajima.venueadmin.pom_pages.Bookings_Page.verify_cancel_MixedMultiple_Bpookings(Bookings_Page.java:1022)\r\n\tat kajima.venueadmin.stepDefinition.Bookings_SD.User_Select_check_box_for_multiple_different_payment_status_bookings_and_cancel_to_verify_CN_and_Refunds_if_applicable(Bookings_SD.java:144)\r\n\tat ✽.Then User Select check box for mutiple different payment status bookings and cancel to verify CN and Refunds if applicable(Bookings.feature:23)\r\n",
  "status": "failed"
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
  "duration": 10684361500,
  "status": "passed"
});
formatter.match({
  "location": "Bookings_SD.enter_credentials_and_Login()"
});
formatter.result({
  "duration": 2426667300,
  "status": "passed"
});
formatter.match({
  "location": "Bookings_SD.user_navigates_to_the_homepage()"
});
formatter.result({
  "duration": 44072800,
  "status": "passed"
});
formatter.match({
  "location": "Bookings_SD.user_clicks_the_Bookings_tab()"
});
formatter.result({
  "duration": 5153839300,
  "status": "passed"
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
  "duration": 25333727900,
  "status": "passed"
});
formatter.match({
  "location": "Bookings_SD.user_enters_room_name_OR_clients_name_in_the_search_bar_and_verify_the_result()"
});
formatter.result({
  "duration": 26530164100,
  "status": "passed"
});
formatter.match({
  "location": "Bookings_SD.user_verify_booking_results_by_selecting_different_STATUS_options()"
});
formatter.result({
  "duration": 33948502300,
  "status": "passed"
});
formatter.match({
  "location": "Bookings_SD.user_verify_booking_results_by_selecting_different_PAYMENT_STATUS_options()"
});
formatter.result({
  "duration": 33891190200,
  "status": "passed"
});
formatter.match({
  "location": "Bookings_SD.user_verify_booking_results_by_selecting_different_date_range()"
});
formatter.result({
  "duration": 13084722300,
  "error_message": "java.lang.AssertionError: null\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.assertNotEquals(Assert.java:1157)\r\n\tat org.testng.Assert.assertNotEquals(Assert.java:1162)\r\n\tat kajima.venueadmin.pom_pages.Bookings_Page.verify_searchBookingByDateRange(Bookings_Page.java:364)\r\n\tat kajima.venueadmin.stepDefinition.Bookings_SD.user_verify_booking_results_by_selecting_different_date_range(Bookings_SD.java:67)\r\n\tat ✽.Then User verify booking results by selecting different date range(Bookings.feature:32)\r\n",
  "status": "failed"
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
  "duration": 10510762500,
  "status": "passed"
});
formatter.match({
  "location": "Bookings_SD.enter_credentials_and_Login()"
});
formatter.result({
  "duration": 2445542600,
  "status": "passed"
});
formatter.match({
  "location": "Bookings_SD.user_navigates_to_the_homepage()"
});
formatter.result({
  "duration": 42450800,
  "status": "passed"
});
formatter.match({
  "location": "Bookings_SD.user_clicks_the_Bookings_tab()"
});
formatter.result({
  "duration": 5203918000,
  "status": "passed"
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
  "duration": 18501031200,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate element with text: april release (apriltest)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-L2S6FMP\u0027, ip: \u0027192.168.0.18\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.selectByVisibleText(Select.java:151)\r\n\tat kajima.venueadmin.pom_pages.Bookings_Page.verify_createNewDailyBooking(Bookings_Page.java:1248)\r\n\tat kajima.venueadmin.stepDefinition.Bookings_SD.user_selects_a_new_Booking_button_and_raise_daily_recurring_booking(Bookings_SD.java:186)\r\n\tat ✽.Then User selects a new Booking button and raise daily recurring booking(Bookings.feature:41)\r\n",
  "status": "failed"
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
  "duration": 10440628300,
  "status": "passed"
});
formatter.match({
  "location": "Bookings_SD.enter_credentials_and_Login()"
});
formatter.result({
  "duration": 2429133700,
  "status": "passed"
});
formatter.match({
  "location": "Bookings_SD.user_navigates_to_the_homepage()"
});
formatter.result({
  "duration": 51018300,
  "status": "passed"
});
formatter.match({
  "location": "Bookings_SD.user_clicks_the_Bookings_tab()"
});
formatter.result({
  "duration": 5390353900,
  "status": "passed"
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
  "duration": 13241267500,
  "error_message": "java.lang.IndexOutOfBoundsException: Index: 1, Size: 1\r\n\tat java.util.ArrayList.rangeCheck(ArrayList.java:657)\r\n\tat java.util.ArrayList.get(ArrayList.java:433)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementListHandler.invoke(LocatingElementListHandler.java:39)\r\n\tat com.sun.proxy.$Proxy21.get(Unknown Source)\r\n\tat kajima.venueadmin.pom_pages.Bookings_Page.edit_fullyPaidBooking(Bookings_Page.java:469)\r\n\tat kajima.venueadmin.stepDefinition.Bookings_SD.user_filter_the_booking_by_FULLY_PAID_payment_status_and_edit_the_booking(Bookings_SD.java:84)\r\n\tat ✽.Then User filter the booking by FULLY PAID payment status and edit the booking(Bookings.feature:48)\r\n",
  "status": "failed"
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
  "duration": 10403349400,
  "status": "passed"
});
formatter.match({
  "location": "Bookings_SD.enter_credentials_and_Login()"
});
formatter.result({
  "duration": 2455935900,
  "status": "passed"
});
formatter.match({
  "location": "Bookings_SD.user_navigates_to_the_homepage()"
});
formatter.result({
  "duration": 58253100,
  "status": "passed"
});
formatter.match({
  "location": "Bookings_SD.user_clicks_the_Bookings_tab()"
});
formatter.result({
  "duration": 5174294900,
  "status": "passed"
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
  "duration": 21838927800,
  "status": "passed"
});
formatter.match({
  "location": "Bookings_SD.user_cancel_the_fully_paid_booking_from_the_Clients_tab_and_verify_that_the_refund_is_displayed_as_expected()"
});
formatter.result({
  "duration": 18700,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "duration": 680242200,
  "status": "passed"
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
  "duration": 10413146200,
  "status": "passed"
});
formatter.match({
  "location": "Bookings_SD.enter_credentials_and_Login()"
});
formatter.result({
  "duration": 2305161000,
  "status": "passed"
});
formatter.match({
  "location": "Bookings_SD.user_navigates_to_the_homepage()"
});
formatter.result({
  "duration": 35930500,
  "status": "passed"
});
formatter.match({
  "location": "Bookings_SD.user_clicks_the_Bookings_tab()"
});
formatter.result({
  "duration": 5396694200,
  "status": "passed"
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
  "duration": 14781815200,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "duration": 709282100,
  "status": "passed"
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
  "duration": 10455063100,
  "status": "passed"
});
formatter.match({
  "location": "Bookings_SD.enter_credentials_and_Login()"
});
formatter.result({
  "duration": 2473197700,
  "status": "passed"
});
formatter.match({
  "location": "Bookings_SD.user_navigates_to_the_homepage()"
});
formatter.result({
  "duration": 43108600,
  "status": "passed"
});
formatter.match({
  "location": "Bookings_SD.user_clicks_the_Bookings_tab()"
});
formatter.result({
  "duration": 5260510000,
  "status": "passed"
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
  "duration": 13288749300,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "duration": 652295800,
  "status": "passed"
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
  "duration": 10359482600,
  "status": "passed"
});
formatter.match({
  "location": "Bookings_SD.enter_credentials_and_Login()"
});
formatter.result({
  "duration": 2369194200,
  "status": "passed"
});
formatter.match({
  "location": "Bookings_SD.user_navigates_to_the_homepage()"
});
formatter.result({
  "duration": 45281700,
  "status": "passed"
});
formatter.match({
  "location": "Bookings_SD.user_clicks_the_Bookings_tab()"
});
formatter.result({
  "duration": 5028257100,
  "status": "passed"
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
  "duration": 40473100400,
  "status": "passed"
});
formatter.match({
  "location": "Bookings_SD.user_cancel_the_billed_booking_and_verify_that_the_refund_is_not_displayed()"
});
formatter.result({
  "duration": 20990140200,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "duration": 676859200,
  "status": "passed"
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
  "duration": 10262387100,
  "status": "passed"
});
formatter.match({
  "location": "Bookings_SD.enter_credentials_and_Login()"
});
formatter.result({
  "duration": 2573755200,
  "status": "passed"
});
formatter.match({
  "location": "Bookings_SD.user_navigates_to_the_homepage()"
});
formatter.result({
  "duration": 39286800,
  "status": "passed"
});
formatter.match({
  "location": "Bookings_SD.user_clicks_the_Bookings_tab()"
});
formatter.result({
  "duration": 5221807000,
  "status": "passed"
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
  "duration": 25843558200,
  "status": "passed"
});
formatter.match({
  "location": "Bookings_SD.user_cancel_the_multiple_billed_booking_and_verify_the_refund_and_check_refund_in_the_clients_tab()"
});
formatter.result({
  "duration": 27741514300,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h5[contains(text(),\u0027Credit Note\u0027)]\"}\n  (Session info: chrome\u003d85.0.4183.83)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-L2S6FMP\u0027, ip: \u0027192.168.0.18\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: C:\\Users\\User\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:52975}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 85.0.4183.83, webStorageEnabled: true}\nSession ID: 03076e702928951c2966cd7a87835216\n*** Element info: {Using\u003dxpath, value\u003d//h5[contains(text(),\u0027Credit Note\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat kajima.venueadmin.pom_pages.Bookings_Page.cancel_billed_multiple_Booking(Bookings_Page.java:910)\r\n\tat kajima.venueadmin.stepDefinition.Bookings_SD.user_cancel_the_multiple_billed_booking_and_verify_the_refund_and_check_refund_in_the_clients_tab(Bookings_SD.java:120)\r\n\tat ✽.Then User cancel the multiple billed booking and verify the refund and check refund in the clients tab(Bookings.feature:78)\r\n",
  "status": "failed"
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
  "duration": 10520885100,
  "status": "passed"
});
formatter.match({
  "location": "Bookings_SD.enter_credentials_and_Login()"
});
formatter.result({
  "duration": 2629319000,
  "status": "passed"
});
formatter.match({
  "location": "Bookings_SD.user_navigates_to_the_homepage()"
});
formatter.result({
  "duration": 40846700,
  "status": "passed"
});
formatter.match({
  "location": "Bookings_SD.user_clicks_the_Bookings_tab()"
});
formatter.result({
  "duration": 5181070800,
  "status": "passed"
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
  "duration": 52283045500,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "duration": 677423300,
  "status": "passed"
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
  "duration": 10524864700,
  "status": "passed"
});
formatter.match({
  "location": "Bookings_SD.enter_credentials_and_Login()"
});
formatter.result({
  "duration": 2455625400,
  "status": "passed"
});
formatter.match({
  "location": "Bookings_SD.user_navigates_to_the_homepage()"
});
formatter.result({
  "duration": 42562400,
  "status": "passed"
});
formatter.match({
  "location": "Bookings_SD.user_clicks_the_Bookings_tab()"
});
formatter.result({
  "duration": 5242492500,
  "status": "passed"
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
  "duration": 11915043000,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[text()\u003d\u0027View\u0027]\"}\n  (Session info: chrome\u003d85.0.4183.83)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-L2S6FMP\u0027, ip: \u0027192.168.0.18\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: C:\\Users\\User\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:53048}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 85.0.4183.83, webStorageEnabled: true}\nSession ID: 9bd0e63465470ff57912629e70165024\n*** Element info: {Using\u003dxpath, value\u003d//a[text()\u003d\u0027View\u0027]}\r\n\tat sun.reflect.GeneratedConstructorAccessor18.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat kajima.venueadmin.pom_pages.Bookings_Page.cancel_nonBillableClients_booking(Bookings_Page.java:1031)\r\n\tat kajima.venueadmin.stepDefinition.Bookings_SD.user_cancel_the_fully_paid_booking_for_non_billable_client_to_verify_that_the_refund_option_is_NOT_displayed(Bookings_SD.java:163)\r\n\tat ✽.Then User cancel the fully paid booking for non billable client to verify that the refund option is NOT displayed(Bookings.feature:89)\r\n",
  "status": "failed"
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
  "duration": 10660870500,
  "status": "passed"
});
formatter.match({
  "location": "Bookings_SD.enter_credentials_and_Login()"
});
formatter.result({
  "duration": 2437120500,
  "status": "passed"
});
formatter.match({
  "location": "Bookings_SD.user_navigates_to_the_homepage()"
});
formatter.result({
  "duration": 48273700,
  "status": "passed"
});
formatter.match({
  "location": "Bookings_SD.user_clicks_the_Bookings_tab()"
});
formatter.result({
  "duration": 5140494500,
  "status": "passed"
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
  "duration": 12015225600,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[text()\u003d\u0027View\u0027]\"}\n  (Session info: chrome\u003d85.0.4183.83)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-L2S6FMP\u0027, ip: \u0027192.168.0.18\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: C:\\Users\\User\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:53081}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 85.0.4183.83, webStorageEnabled: true}\nSession ID: 00a30f219d7a6253b7af19ee9f78164e\n*** Element info: {Using\u003dxpath, value\u003d//a[text()\u003d\u0027View\u0027]}\r\n\tat sun.reflect.GeneratedConstructorAccessor18.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat kajima.venueadmin.pom_pages.Bookings_Page.verify_manualPayBookingsCancellation(Bookings_Page.java:1201)\r\n\tat kajima.venueadmin.stepDefinition.Bookings_SD.user_cancel_the_single_manual_fully_paid_booking_and_verify_the_refund_and_check_refund_in_the_clients_tab(Bookings_SD.java:108)\r\n\tat ✽.Then User cancel the single manual fully paid booking and verify the refund and check refund in the clients tab(Bookings.feature:94)\r\n",
  "status": "failed"
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
  "duration": 10359173500,
  "status": "passed"
});
formatter.match({
  "location": "Calender_SD.Enter_credentials()"
});
formatter.result({
  "duration": 2587833600,
  "status": "passed"
});
formatter.match({
  "location": "Calender_SD.User_navigate_to_dasboard_homepage()"
});
formatter.result({
  "duration": 49689900,
  "status": "passed"
});
formatter.match({
  "location": "Calender_SD.user_clicks_the_Calender_tab()"
});
formatter.result({
  "duration": 4037207300,
  "status": "passed"
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
  "name": "User creates a single occurance of booking, and edit unbilled status of booking from the Calender",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Billed the booking created in the previous step and edit billed status of booking from the Calender",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Calender_SD.user_creates_a_single_occurance_of_booking_and_edit_unbilled_status_of_booking_from_the_Calender()"
});
formatter.result({
  "duration": 7709526500,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@data-room-id\u003d\u0027459\u0027]//div[@data-hour\u003d\u002714\u0027]\"}\n  (Session info: chrome\u003d85.0.4183.83)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-L2S6FMP\u0027, ip: \u0027192.168.0.18\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: C:\\Users\\User\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:53112}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 85.0.4183.83, webStorageEnabled: true}\nSession ID: 4d74449c865808dd1224812ec75dac58\n*** Element info: {Using\u003dxpath, value\u003d//div[@data-room-id\u003d\u0027459\u0027]//div[@data-hour\u003d\u002714\u0027]}\r\n\tat sun.reflect.GeneratedConstructorAccessor18.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.isDisplayed(Unknown Source)\r\n\tat kajima.venueadmin.pom_pages.Calender_Page.createNewBooking_Cal(Calender_Page.java:198)\r\n\tat kajima.venueadmin.stepDefinition.Calender_SD.user_creates_a_single_occurance_of_booking_and_edit_unbilled_status_of_booking_from_the_Calender(Calender_SD.java:48)\r\n\tat ✽.Then User creates a single occurance of booking, and edit unbilled status of booking from the Calender(Calender.feature:18)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Calender_SD.Billed_the_booking_created_in_the_previous_step_and_edit_billed_status_of_booking_from_the_Calender()"
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
  "duration": 10741405200,
  "status": "passed"
});
formatter.match({
  "location": "Calender_SD.Enter_credentials()"
});
formatter.result({
  "duration": 2422486400,
  "status": "passed"
});
formatter.match({
  "location": "Calender_SD.User_navigate_to_dasboard_homepage()"
});
formatter.result({
  "duration": 37090900,
  "status": "passed"
});
formatter.match({
  "location": "Calender_SD.user_clicks_the_Calender_tab()"
});
formatter.result({
  "duration": 3937810900,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Cancel a single from calender - Billed \u0026 Unbilled",
  "description": "",
  "id": "calender-tab-scenarios;cancel-a-single-from-calender---billed-\u0026-unbilled",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "User Cancelling a unbilled single booking from the Calender",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "User Cancelling a billed single booking from the Calender",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Calender_SD.user_Cancelling_a_unbilled_single_booking_from_the_Calender()"
});
formatter.result({
  "duration": 38174205500,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//select[@name\u003d\u0027booking[client_id]\u0027]\"}\n  (Session info: chrome\u003d85.0.4183.83)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-L2S6FMP\u0027, ip: \u0027192.168.0.18\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: C:\\Users\\User\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:53144}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 85.0.4183.83, webStorageEnabled: true}\nSession ID: 5f487b4a1fdbf19c490e0ccdb5d9352c\n*** Element info: {Using\u003dxpath, value\u003d//select[@name\u003d\u0027booking[client_id]\u0027]}\r\n\tat sun.reflect.GeneratedConstructorAccessor18.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.getTagName(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.Select.\u003cinit\u003e(Select.java:44)\r\n\tat kajima.venueadmin.pom_pages.Calender_Page.createNewBookingForCancel_Cal(Calender_Page.java:303)\r\n\tat kajima.venueadmin.stepDefinition.Calender_SD.user_Cancelling_a_unbilled_single_booking_from_the_Calender(Calender_SD.java:65)\r\n\tat ✽.Then User Cancelling a unbilled single booking from the Calender(Calender.feature:24)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Calender_SD.user_Cancelling_a_billed_single_booking_from_the_Calender()"
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
  "duration": 10362463100,
  "status": "passed"
});
formatter.match({
  "location": "Calender_SD.Enter_credentials()"
});
formatter.result({
  "duration": 2434833800,
  "status": "passed"
});
formatter.match({
  "location": "Calender_SD.User_navigate_to_dasboard_homepage()"
});
formatter.result({
  "duration": 43855700,
  "status": "passed"
});
formatter.match({
  "location": "Calender_SD.user_clicks_the_Calender_tab()"
});
formatter.result({
  "duration": 3905083800,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Verify viewing bookable space info",
  "description": "",
  "id": "calender-tab-scenarios;verify-viewing-bookable-space-info",
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
  "name": "User clicks the bookable space to check the information",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Calender_SD.user_clicks_the_bookable_space_to_check_the_information()"
});
formatter.result({
  "duration": 9449058300,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "duration": 724814100,
  "status": "passed"
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
  "duration": 10576292400,
  "status": "passed"
});
formatter.match({
  "location": "Calender_SD.Enter_credentials()"
});
formatter.result({
  "duration": 2716821200,
  "status": "passed"
});
formatter.match({
  "location": "Calender_SD.User_navigate_to_dasboard_homepage()"
});
formatter.result({
  "duration": 45016800,
  "status": "passed"
});
formatter.match({
  "location": "Calender_SD.user_clicks_the_Calender_tab()"
});
formatter.result({
  "duration": 3973193300,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "verify date filter on calender to view the results",
  "description": "",
  "id": "calender-tab-scenarios;verify-date-filter-on-calender-to-view-the-results",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 33,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "User selects different dates by clicking previous/forward arrows to view the bookings",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "User enter the date manually and verify the result",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Calender_SD.user_selects_different_dates_by_clicking_previous_forward_arrows_to_view_the_bookings()"
});
formatter.result({
  "duration": 2549535000,
  "status": "passed"
});
formatter.match({
  "location": "Calender_SD.user_enter_the_date_manually_and_verify_the_result()"
});
formatter.result({
  "duration": 4914976700,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "duration": 651226600,
  "status": "passed"
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
  "duration": 10472403200,
  "status": "passed"
});
formatter.match({
  "location": "Calender_SD.Enter_credentials()"
});
formatter.result({
  "duration": 2650993700,
  "status": "passed"
});
formatter.match({
  "location": "Calender_SD.User_navigate_to_dasboard_homepage()"
});
formatter.result({
  "duration": 55718000,
  "status": "passed"
});
formatter.match({
  "location": "Calender_SD.user_clicks_the_Calender_tab()"
});
formatter.result({
  "duration": 3952493400,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "verify different calender filter to view the results",
  "description": "",
  "id": "calender-tab-scenarios;verify-different-calender-filter-to-view-the-results",
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
  "name": "User selects different catagories from the drop down to view the bookings for the relevant bookable spaces",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "User selects view booked room only check box to see only rooms where we have bookings",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Calender_SD.user_selects_different_catagories_from_the_drop_down_to_view_the_bookings_for_the_relevant_bookable_spaces()"
});
formatter.result({
  "duration": 119583313000,
  "status": "passed"
});
formatter.match({
  "location": "Calender_SD.user_selects_view_booked_room_only_check_box_to_see_only_rooms_where_we_have_bookings()"
});
formatter.result({
  "duration": 3865424800,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "duration": 677802000,
  "status": "passed"
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
  "duration": 10586336900,
  "status": "passed"
});
formatter.match({
  "location": "Calender_SD.Enter_credentials()"
});
formatter.result({
  "duration": 2677375200,
  "status": "passed"
});
formatter.match({
  "location": "Calender_SD.User_navigate_to_dasboard_homepage()"
});
formatter.result({
  "duration": 41915900,
  "status": "passed"
});
formatter.match({
  "location": "Calender_SD.user_clicks_the_Calender_tab()"
});
formatter.result({
  "duration": 3942642700,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 45,
      "value": "## Below scenario is ONLY applicable for NHS"
    }
  ],
  "line": 47,
  "name": "Create provisional bookings , confirm it and ensure that admins are not restricted by service types and CCG rules",
  "description": "",
  "id": "calender-tab-scenarios;create-provisional-bookings-,-confirm-it-and-ensure-that-admins-are-not-restricted-by-service-types-and-ccg-rules",
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
  "name": "admin_create_a_new_booking_from_the_calender_and_ensure_that_it_is_not_restricted_by_service_type_and_CCG_rules_and_finally_confirms_it",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Calender_SD.admin_create_a_new_booking_from_the_calender_and_ensure_that_it_is_not_restricted_by_service_type_and_ccg_rules_and_finally_confirms_it()"
});
formatter.result({
  "duration": 22840013200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//select[@name\u003d\u0027booking[client_id]\u0027]\"}\n  (Session info: chrome\u003d85.0.4183.83)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-L2S6FMP\u0027, ip: \u0027192.168.0.18\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: C:\\Users\\User\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:53316}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 85.0.4183.83, webStorageEnabled: true}\nSession ID: fed91f5eef1485f46f58e4af300b828c\n*** Element info: {Using\u003dxpath, value\u003d//select[@name\u003d\u0027booking[client_id]\u0027]}\r\n\tat sun.reflect.GeneratedConstructorAccessor18.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.getTagName(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.Select.\u003cinit\u003e(Select.java:44)\r\n\tat kajima.venueadmin.pom_pages.Calender_Page.verify_CreateBookingRestrictions_NHSONLY(Calender_Page.java:605)\r\n\tat kajima.venueadmin.stepDefinition.Calender_SD.admin_create_a_new_booking_from_the_calender_and_ensure_that_it_is_not_restricted_by_service_type_and_ccg_rules_and_finally_confirms_it(Calender_SD.java:113)\r\n\tat ✽.Then admin_create_a_new_booking_from_the_calender_and_ensure_that_it_is_not_restricted_by_service_type_and_CCG_rules_and_finally_confirms_it(Calender.feature:48)\r\n",
  "status": "failed"
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
  "duration": 10462968900,
  "status": "passed"
});
formatter.match({
  "location": "Clients_SD.enter_required_credentials_and_Login()"
});
formatter.result({
  "duration": 2494318700,
  "status": "passed"
});
formatter.match({
  "location": "Clients_SD.user_have_gone_to_the_homepage()"
});
formatter.result({
  "duration": 37416000,
  "status": "passed"
});
formatter.match({
  "location": "Clients_SD.user_clicks_the_client_tab_and_search_for_a_client()"
});
formatter.result({
  "duration": 13477836800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[text()\u003d\u0027View\u0027]\"}\n  (Session info: chrome\u003d85.0.4183.83)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-L2S6FMP\u0027, ip: \u0027192.168.0.18\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: C:\\Users\\User\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:53344}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 85.0.4183.83, webStorageEnabled: true}\nSession ID: 26e01de24d19cc224ac5309ab800cd50\n*** Element info: {Using\u003dxpath, value\u003d//a[text()\u003d\u0027View\u0027]}\r\n\tat sun.reflect.GeneratedConstructorAccessor18.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.click(Unknown Source)\r\n\tat kajima.venueadmin.pom_pages.Clients_Page.click_view(Clients_Page.java:479)\r\n\tat kajima.venueadmin.stepDefinition.Clients_SD.user_clicks_the_client_tab_and_search_for_a_client(Clients_SD.java:39)\r\n\tat ✽.Then User clicks the client tab and search for a client(Clients.feature:11)\r\n",
  "status": "failed"
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
  "duration": 10555735600,
  "status": "passed"
});
formatter.match({
  "location": "Clients_SD.enter_required_credentials_and_Login()"
});
formatter.result({
  "duration": 2720888400,
  "status": "passed"
});
formatter.match({
  "location": "Clients_SD.user_have_gone_to_the_homepage()"
});
formatter.result({
  "duration": 52517500,
  "status": "passed"
});
formatter.match({
  "location": "Clients_SD.user_clicks_the_client_tab_and_search_for_a_client()"
});
formatter.result({
  "duration": 13823833100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[text()\u003d\u0027View\u0027]\"}\n  (Session info: chrome\u003d85.0.4183.83)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-L2S6FMP\u0027, ip: \u0027192.168.0.18\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: C:\\Users\\User\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:53389}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 85.0.4183.83, webStorageEnabled: true}\nSession ID: 16e581484317cb73b59e06d5b11ca75c\n*** Element info: {Using\u003dxpath, value\u003d//a[text()\u003d\u0027View\u0027]}\r\n\tat sun.reflect.GeneratedConstructorAccessor18.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.click(Unknown Source)\r\n\tat kajima.venueadmin.pom_pages.Clients_Page.click_view(Clients_Page.java:479)\r\n\tat kajima.venueadmin.stepDefinition.Clients_SD.user_clicks_the_client_tab_and_search_for_a_client(Clients_SD.java:39)\r\n\tat ✽.Then User clicks the client tab and search for a client(Clients.feature:11)\r\n",
  "status": "failed"
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
  "duration": 10727462200,
  "status": "passed"
});
formatter.match({
  "location": "Clients_SD.enter_required_credentials_and_Login()"
});
formatter.result({
  "duration": 2506394300,
  "status": "passed"
});
formatter.match({
  "location": "Clients_SD.user_have_gone_to_the_homepage()"
});
formatter.result({
  "duration": 46820600,
  "status": "passed"
});
formatter.match({
  "location": "Clients_SD.user_clicks_the_client_tab_and_search_for_a_client()"
});
formatter.result({
  "duration": 13672977400,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[text()\u003d\u0027View\u0027]\"}\n  (Session info: chrome\u003d85.0.4183.83)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-L2S6FMP\u0027, ip: \u0027192.168.0.18\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: C:\\Users\\User\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:53420}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 85.0.4183.83, webStorageEnabled: true}\nSession ID: 8a6b8c67ee46a99cc619bd3a739749e0\n*** Element info: {Using\u003dxpath, value\u003d//a[text()\u003d\u0027View\u0027]}\r\n\tat sun.reflect.GeneratedConstructorAccessor18.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.click(Unknown Source)\r\n\tat kajima.venueadmin.pom_pages.Clients_Page.click_view(Clients_Page.java:479)\r\n\tat kajima.venueadmin.stepDefinition.Clients_SD.user_clicks_the_client_tab_and_search_for_a_client(Clients_SD.java:39)\r\n\tat ✽.Then User clicks the client tab and search for a client(Clients.feature:11)\r\n",
  "status": "failed"
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
  "duration": 10478236200,
  "status": "passed"
});
formatter.match({
  "location": "Clients_SD.enter_required_credentials_and_Login()"
});
formatter.result({
  "duration": 2433418900,
  "status": "passed"
});
formatter.match({
  "location": "Clients_SD.user_have_gone_to_the_homepage()"
});
formatter.result({
  "duration": 40189100,
  "status": "passed"
});
formatter.match({
  "location": "Clients_SD.user_clicks_the_client_tab_and_search_for_a_client()"
});
formatter.result({
  "duration": 13022651800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[text()\u003d\u0027View\u0027]\"}\n  (Session info: chrome\u003d85.0.4183.83)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-L2S6FMP\u0027, ip: \u0027192.168.0.18\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: C:\\Users\\User\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:53448}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 85.0.4183.83, webStorageEnabled: true}\nSession ID: 84ced216a17c291af5c8ff8ae0e37ad7\n*** Element info: {Using\u003dxpath, value\u003d//a[text()\u003d\u0027View\u0027]}\r\n\tat sun.reflect.GeneratedConstructorAccessor18.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.click(Unknown Source)\r\n\tat kajima.venueadmin.pom_pages.Clients_Page.click_view(Clients_Page.java:479)\r\n\tat kajima.venueadmin.stepDefinition.Clients_SD.user_clicks_the_client_tab_and_search_for_a_client(Clients_SD.java:39)\r\n\tat ✽.Then User clicks the client tab and search for a client(Clients.feature:11)\r\n",
  "status": "failed"
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
  "duration": 11663316100,
  "status": "passed"
});
formatter.match({
  "location": "Clients_SD.enter_required_credentials_and_Login()"
});
formatter.result({
  "duration": 2396001800,
  "status": "passed"
});
formatter.match({
  "location": "Clients_SD.user_have_gone_to_the_homepage()"
});
formatter.result({
  "duration": 50411500,
  "status": "passed"
});
formatter.match({
  "location": "Clients_SD.user_clicks_the_client_tab_and_search_for_a_client()"
});
formatter.result({
  "duration": 13591333700,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[text()\u003d\u0027View\u0027]\"}\n  (Session info: chrome\u003d85.0.4183.83)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-L2S6FMP\u0027, ip: \u0027192.168.0.18\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: C:\\Users\\User\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:53477}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 85.0.4183.83, webStorageEnabled: true}\nSession ID: e324b25a408c24a36a9bafbb6c746b0b\n*** Element info: {Using\u003dxpath, value\u003d//a[text()\u003d\u0027View\u0027]}\r\n\tat sun.reflect.GeneratedConstructorAccessor18.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.click(Unknown Source)\r\n\tat kajima.venueadmin.pom_pages.Clients_Page.click_view(Clients_Page.java:479)\r\n\tat kajima.venueadmin.stepDefinition.Clients_SD.user_clicks_the_client_tab_and_search_for_a_client(Clients_SD.java:39)\r\n\tat ✽.Then User clicks the client tab and search for a client(Clients.feature:11)\r\n",
  "status": "failed"
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
  "duration": 10427099000,
  "status": "passed"
});
formatter.match({
  "location": "Clients_SD.enter_required_credentials_and_Login()"
});
formatter.result({
  "duration": 2602354700,
  "status": "passed"
});
formatter.match({
  "location": "Clients_SD.user_have_gone_to_the_homepage()"
});
formatter.result({
  "duration": 60778400,
  "status": "passed"
});
formatter.match({
  "location": "Clients_SD.user_clicks_the_client_tab_and_search_for_a_client()"
});
formatter.result({
  "duration": 13144111300,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[text()\u003d\u0027View\u0027]\"}\n  (Session info: chrome\u003d85.0.4183.83)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-L2S6FMP\u0027, ip: \u0027192.168.0.18\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: C:\\Users\\User\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:53503}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 85.0.4183.83, webStorageEnabled: true}\nSession ID: 6a302dae2f7addff64a510cf540cf392\n*** Element info: {Using\u003dxpath, value\u003d//a[text()\u003d\u0027View\u0027]}\r\n\tat sun.reflect.GeneratedConstructorAccessor18.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.click(Unknown Source)\r\n\tat kajima.venueadmin.pom_pages.Clients_Page.click_view(Clients_Page.java:479)\r\n\tat kajima.venueadmin.stepDefinition.Clients_SD.user_clicks_the_client_tab_and_search_for_a_client(Clients_SD.java:39)\r\n\tat ✽.Then User clicks the client tab and search for a client(Clients.feature:11)\r\n",
  "status": "failed"
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
  "duration": 10406678000,
  "status": "passed"
});
formatter.match({
  "location": "Clients_SD.enter_required_credentials_and_Login()"
});
formatter.result({
  "duration": 2293649100,
  "status": "passed"
});
formatter.match({
  "location": "Clients_SD.user_have_gone_to_the_homepage()"
});
formatter.result({
  "duration": 44641100,
  "status": "passed"
});
formatter.match({
  "location": "Clients_SD.user_clicks_the_client_tab_and_search_for_a_client()"
});
formatter.result({
  "duration": 13778724900,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[text()\u003d\u0027View\u0027]\"}\n  (Session info: chrome\u003d85.0.4183.83)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-L2S6FMP\u0027, ip: \u0027192.168.0.18\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: C:\\Users\\User\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:53528}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 85.0.4183.83, webStorageEnabled: true}\nSession ID: cb62ec652389b7f192d70db29f116afb\n*** Element info: {Using\u003dxpath, value\u003d//a[text()\u003d\u0027View\u0027]}\r\n\tat sun.reflect.GeneratedConstructorAccessor18.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.click(Unknown Source)\r\n\tat kajima.venueadmin.pom_pages.Clients_Page.click_view(Clients_Page.java:479)\r\n\tat kajima.venueadmin.stepDefinition.Clients_SD.user_clicks_the_client_tab_and_search_for_a_client(Clients_SD.java:39)\r\n\tat ✽.Then User clicks the client tab and search for a client(Clients.feature:11)\r\n",
  "status": "failed"
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
  "duration": 10625180200,
  "status": "passed"
});
formatter.match({
  "location": "Clients_SD.enter_required_credentials_and_Login()"
});
formatter.result({
  "duration": 2401928300,
  "status": "passed"
});
formatter.match({
  "location": "Clients_SD.user_have_gone_to_the_homepage()"
});
formatter.result({
  "duration": 41612500,
  "status": "passed"
});
formatter.match({
  "location": "Clients_SD.user_clicks_the_client_tab_and_search_for_a_client()"
});
formatter.result({
  "duration": 13374689000,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[text()\u003d\u0027View\u0027]\"}\n  (Session info: chrome\u003d85.0.4183.83)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-L2S6FMP\u0027, ip: \u0027192.168.0.18\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: C:\\Users\\User\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:53554}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 85.0.4183.83, webStorageEnabled: true}\nSession ID: 10615c3b9c3a707554789b96aa4e4ec3\n*** Element info: {Using\u003dxpath, value\u003d//a[text()\u003d\u0027View\u0027]}\r\n\tat sun.reflect.GeneratedConstructorAccessor18.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.click(Unknown Source)\r\n\tat kajima.venueadmin.pom_pages.Clients_Page.click_view(Clients_Page.java:479)\r\n\tat kajima.venueadmin.stepDefinition.Clients_SD.user_clicks_the_client_tab_and_search_for_a_client(Clients_SD.java:39)\r\n\tat ✽.Then User clicks the client tab and search for a client(Clients.feature:11)\r\n",
  "status": "failed"
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
  "duration": 10453569400,
  "status": "passed"
});
formatter.match({
  "location": "Clients_SD.enter_required_credentials_and_Login()"
});
formatter.result({
  "duration": 2343988100,
  "status": "passed"
});
formatter.match({
  "location": "Clients_SD.user_have_gone_to_the_homepage()"
});
formatter.result({
  "duration": 41172500,
  "status": "passed"
});
formatter.match({
  "location": "Clients_SD.user_clicks_the_client_tab_and_search_for_a_client()"
});
formatter.result({
  "duration": 6406944200,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d85.0.4183.83)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-L2S6FMP\u0027, ip: \u0027192.168.0.18\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: C:\\Users\\User\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:53583}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 85.0.4183.83, webStorageEnabled: true}\nSession ID: 132645ad1e786bad9d2ad200ea29130f\n*** Element info: {Using\u003dxpath, value\u003d//input[@type\u003d\u0027text\u0027 and @aria-controls\u003d\u0027clients_table\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat kajima.venueadmin.pom_pages.Clients_Page.click_view(Clients_Page.java:477)\r\n\tat kajima.venueadmin.stepDefinition.Clients_SD.user_clicks_the_client_tab_and_search_for_a_client(Clients_SD.java:39)\r\n\tat ✽.Then User clicks the client tab and search for a client(Clients.feature:11)\r\n",
  "status": "failed"
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
  "duration": 12264499300,
  "status": "passed"
});
formatter.match({
  "location": "Clients_SD.enter_required_credentials_and_Login()"
});
formatter.result({
  "duration": 3141181800,
  "status": "passed"
});
formatter.match({
  "location": "Clients_SD.user_have_gone_to_the_homepage()"
});
formatter.result({
  "duration": 39021900,
  "status": "passed"
});
formatter.match({
  "location": "Clients_SD.user_clicks_the_client_tab_and_search_for_a_client()"
});
formatter.result({
  "duration": 6592600200,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d85.0.4183.83)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-L2S6FMP\u0027, ip: \u0027192.168.0.18\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: C:\\Users\\User\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:53610}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 85.0.4183.83, webStorageEnabled: true}\nSession ID: 61a6c2e20a5e29471418b83da0680caf\n*** Element info: {Using\u003dxpath, value\u003d//input[@type\u003d\u0027text\u0027 and @aria-controls\u003d\u0027clients_table\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat kajima.venueadmin.pom_pages.Clients_Page.click_view(Clients_Page.java:477)\r\n\tat kajima.venueadmin.stepDefinition.Clients_SD.user_clicks_the_client_tab_and_search_for_a_client(Clients_SD.java:39)\r\n\tat ✽.Then User clicks the client tab and search for a client(Clients.feature:11)\r\n",
  "status": "failed"
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
  "duration": 10526735400,
  "status": "passed"
});
formatter.match({
  "location": "Clients_SD.enter_required_credentials_and_Login()"
});
formatter.result({
  "duration": 2358652000,
  "status": "passed"
});
formatter.match({
  "location": "Clients_SD.user_have_gone_to_the_homepage()"
});
formatter.result({
  "duration": 51147900,
  "status": "passed"
});
formatter.match({
  "location": "Clients_SD.user_clicks_the_client_tab_and_search_for_a_client()"
});
formatter.result({
  "duration": 13174193600,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[text()\u003d\u0027View\u0027]\"}\n  (Session info: chrome\u003d85.0.4183.83)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-L2S6FMP\u0027, ip: \u0027192.168.0.18\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: C:\\Users\\User\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:53640}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 85.0.4183.83, webStorageEnabled: true}\nSession ID: 13aa72d30929e412b5c1234cd62a4bc4\n*** Element info: {Using\u003dxpath, value\u003d//a[text()\u003d\u0027View\u0027]}\r\n\tat sun.reflect.GeneratedConstructorAccessor18.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.click(Unknown Source)\r\n\tat kajima.venueadmin.pom_pages.Clients_Page.click_view(Clients_Page.java:479)\r\n\tat kajima.venueadmin.stepDefinition.Clients_SD.user_clicks_the_client_tab_and_search_for_a_client(Clients_SD.java:39)\r\n\tat ✽.Then User clicks the client tab and search for a client(Clients.feature:11)\r\n",
  "status": "failed"
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
  "duration": 10342171100,
  "status": "passed"
});
formatter.match({
  "location": "Clients_SD.enter_required_credentials_and_Login()"
});
formatter.result({
  "duration": 2418034100,
  "status": "passed"
});
formatter.match({
  "location": "Clients_SD.user_have_gone_to_the_homepage()"
});
formatter.result({
  "duration": 52261900,
  "status": "passed"
});
formatter.match({
  "location": "Clients_SD.user_clicks_the_client_tab_and_search_for_a_client()"
});
formatter.result({
  "duration": 12970901600,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[text()\u003d\u0027View\u0027]\"}\n  (Session info: chrome\u003d85.0.4183.83)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-L2S6FMP\u0027, ip: \u0027192.168.0.18\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: C:\\Users\\User\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:53665}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 85.0.4183.83, webStorageEnabled: true}\nSession ID: f4a8fa52e3f2f264a394516cd4c4c4c1\n*** Element info: {Using\u003dxpath, value\u003d//a[text()\u003d\u0027View\u0027]}\r\n\tat sun.reflect.GeneratedConstructorAccessor18.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.click(Unknown Source)\r\n\tat kajima.venueadmin.pom_pages.Clients_Page.click_view(Clients_Page.java:479)\r\n\tat kajima.venueadmin.stepDefinition.Clients_SD.user_clicks_the_client_tab_and_search_for_a_client(Clients_SD.java:39)\r\n\tat ✽.Then User clicks the client tab and search for a client(Clients.feature:11)\r\n",
  "status": "failed"
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
  "duration": 12267110700,
  "status": "passed"
});
formatter.match({
  "location": "Clients_SD.enter_required_credentials_and_Login()"
});
formatter.result({
  "duration": 2683289200,
  "status": "passed"
});
formatter.match({
  "location": "Clients_SD.user_have_gone_to_the_homepage()"
});
formatter.result({
  "duration": 40030000,
  "status": "passed"
});
formatter.match({
  "location": "Clients_SD.user_clicks_the_client_tab_and_search_for_a_client()"
});
formatter.result({
  "duration": 17162696000,
  "error_message": "java.lang.NullPointerException\r\n\tat sun.reflect.GeneratedMethodAccessor6.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy20.click(Unknown Source)\r\n\tat kajima.venueadmin.pom_pages.Clients_Page.click_view(Clients_Page.java:479)\r\n\tat kajima.venueadmin.stepDefinition.Clients_SD.user_clicks_the_client_tab_and_search_for_a_client(Clients_SD.java:39)\r\n\tat ✽.Then User clicks the client tab and search for a client(Clients.feature:11)\r\n",
  "status": "failed"
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
  "duration": 10520573300,
  "status": "passed"
});
formatter.match({
  "location": "Clients_SD.enter_required_credentials_and_Login()"
});
formatter.result({
  "duration": 2319295200,
  "status": "passed"
});
formatter.match({
  "location": "Clients_SD.user_have_gone_to_the_homepage()"
});
formatter.result({
  "duration": 47628500,
  "status": "passed"
});
formatter.match({
  "location": "Clients_SD.user_clicks_the_client_tab_and_search_for_a_client()"
});
formatter.result({
  "duration": 13092761200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[text()\u003d\u0027View\u0027]\"}\n  (Session info: chrome\u003d85.0.4183.83)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-L2S6FMP\u0027, ip: \u0027192.168.0.18\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: C:\\Users\\User\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:53734}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 85.0.4183.83, webStorageEnabled: true}\nSession ID: 5c4f2ddfabfaf56211d38b2ec8e7b2dc\n*** Element info: {Using\u003dxpath, value\u003d//a[text()\u003d\u0027View\u0027]}\r\n\tat sun.reflect.GeneratedConstructorAccessor18.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.click(Unknown Source)\r\n\tat kajima.venueadmin.pom_pages.Clients_Page.click_view(Clients_Page.java:479)\r\n\tat kajima.venueadmin.stepDefinition.Clients_SD.user_clicks_the_client_tab_and_search_for_a_client(Clients_SD.java:39)\r\n\tat ✽.Then User clicks the client tab and search for a client(Clients.feature:11)\r\n",
  "status": "failed"
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
  "duration": 10246184000,
  "status": "passed"
});
formatter.match({
  "location": "Clients_SD.enter_required_credentials_and_Login()"
});
formatter.result({
  "duration": 2248821400,
  "status": "passed"
});
formatter.match({
  "location": "Clients_SD.user_have_gone_to_the_homepage()"
});
formatter.result({
  "duration": 39689600,
  "status": "passed"
});
formatter.match({
  "location": "Clients_SD.user_clicks_the_client_tab_and_search_for_a_client()"
});
formatter.result({
  "duration": 11711598300,
  "error_message": "java.lang.NullPointerException\r\n\tat sun.reflect.GeneratedMethodAccessor6.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy20.click(Unknown Source)\r\n\tat kajima.venueadmin.pom_pages.Clients_Page.click_view(Clients_Page.java:479)\r\n\tat kajima.venueadmin.stepDefinition.Clients_SD.user_clicks_the_client_tab_and_search_for_a_client(Clients_SD.java:39)\r\n\tat ✽.Then User clicks the client tab and search for a client(Clients.feature:11)\r\n",
  "status": "failed"
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
  "duration": 10791774300,
  "status": "passed"
});
formatter.match({
  "location": "Clients_SD.enter_required_credentials_and_Login()"
});
formatter.result({
  "duration": 3165003700,
  "status": "passed"
});
formatter.match({
  "location": "Clients_SD.user_have_gone_to_the_homepage()"
});
formatter.result({
  "duration": 43007200,
  "status": "passed"
});
formatter.match({
  "location": "Clients_SD.user_clicks_the_client_tab_and_search_for_a_client()"
});
formatter.result({
  "duration": 12833017800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[text()\u003d\u0027View\u0027]\"}\n  (Session info: chrome\u003d85.0.4183.83)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-L2S6FMP\u0027, ip: \u0027192.168.0.18\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: C:\\Users\\User\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:53786}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 85.0.4183.83, webStorageEnabled: true}\nSession ID: ed7c83bcf860ebccf2e691a008f07ea5\n*** Element info: {Using\u003dxpath, value\u003d//a[text()\u003d\u0027View\u0027]}\r\n\tat sun.reflect.GeneratedConstructorAccessor18.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.click(Unknown Source)\r\n\tat kajima.venueadmin.pom_pages.Clients_Page.click_view(Clients_Page.java:479)\r\n\tat kajima.venueadmin.stepDefinition.Clients_SD.user_clicks_the_client_tab_and_search_for_a_client(Clients_SD.java:39)\r\n\tat ✽.Then User clicks the client tab and search for a client(Clients.feature:11)\r\n",
  "status": "failed"
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
  "duration": 60695466500,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: DevToolsActivePort file doesn\u0027t exist\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 60.16 seconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-L2S6FMP\u0027, ip: \u0027192.168.0.18\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: driver.version: ChromeDriver\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse.lambda$new$0(JsonWireProtocolResponse.java:53)\r\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse.lambda$getResponseFunction$2(JsonWireProtocolResponse.java:91)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:123)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:498)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:485)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:73)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:209)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:132)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat kajima.venueadmin.base.TestBase.intialisation(TestBase.java:45)\r\n\tat kajima.venueadmin.stepDefinition.CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL(CommonSteps_SD.java:29)\r\n\tat ✽.Given User opens browser and enters the admin URL(Clients.feature:8)\r\n",
  "status": "failed"
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
  "duration": 60651002700,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: DevToolsActivePort file doesn\u0027t exist\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 60.14 seconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-L2S6FMP\u0027, ip: \u0027192.168.0.18\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: driver.version: ChromeDriver\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse.lambda$new$0(JsonWireProtocolResponse.java:53)\r\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse.lambda$getResponseFunction$2(JsonWireProtocolResponse.java:91)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:123)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:498)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:485)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:73)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:209)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:132)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat kajima.venueadmin.base.TestBase.intialisation(TestBase.java:45)\r\n\tat kajima.venueadmin.stepDefinition.CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL(CommonSteps_SD.java:29)\r\n\tat ✽.Given User opens browser and enters the admin URL(Clients.feature:8)\r\n",
  "status": "failed"
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
  "duration": 60627807400,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: DevToolsActivePort file doesn\u0027t exist\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 60.09 seconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-L2S6FMP\u0027, ip: \u0027192.168.0.18\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: driver.version: ChromeDriver\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse.lambda$new$0(JsonWireProtocolResponse.java:53)\r\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse.lambda$getResponseFunction$2(JsonWireProtocolResponse.java:91)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:123)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:498)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:485)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:73)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:209)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:132)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat kajima.venueadmin.base.TestBase.intialisation(TestBase.java:45)\r\n\tat kajima.venueadmin.stepDefinition.CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL(CommonSteps_SD.java:29)\r\n\tat ✽.Given User opens browser and enters the admin URL(Clients.feature:8)\r\n",
  "status": "failed"
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
formatter.scenario(formatter.uri("Dashboard.feature");
formatter.feature(formatter.uri("Invoice.feature");
formatter.feature(formatter.uri("Manage.feature");
formatter.feature(formatter.uri(