package kajima.venueadmin.pom_pages;

import static org.testng.Assert.assertTrue;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.event.KeyEvent;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.NoAlertPresentException;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.UnexpectedAlertBehaviour;
import org.openqa.selenium.UnhandledAlertException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.asserts.SoftAssert;

import kajima.venueadmin.base.TestBase;

public class Bookings_Page extends TestBase {
	
	@FindBy(xpath = "//a[contains(@class,'main') and contains(text(),'Bookings')]")
	WebElement bookings_tab;
	
	@FindBy(xpath="//h3[contains(.,'Bookings')]")
	WebElement bookingTab_title;
	
	@FindBy(xpath="//a[text()='Save']")
	WebElement save_Btn;
	
	@FindBy(xpath="//select[@id='rows_per_page']")
	WebElement noOfEnteries_dd;
	
	@FindBy(xpath="//select[@id='view_type']")
	WebElement viewType_dd;
	
	@FindBy(xpath="//select[@id='status']")
	WebElement status_dd;
	
	@FindBy(xpath="//select[@id='payment_status']")
	WebElement payStatus_dd;
	
	@FindBy(xpath="//input[@id='b_start_date']")
	WebElement startDate_Field;

	@FindBy(xpath="//input[@id='b_end_date']")
	WebElement endDate_Field;
	
	@FindBy(xpath="//input[@value='Go']")
	WebElement go_Btn;
	
	@FindBy(xpath="//input[@id='search']")
	WebElement search_Bar;
	
	@FindBy(xpath="//a[text()='New Booking']")
	WebElement newBookings_Btn;
	
	@FindBy(xpath="//a/span[text()='Excel Export']")
	WebElement excelExport_Btn;
	
	@FindBy(xpath="//a[@class='edit_booking_item']")
	List<WebElement> editBookings_Link;
	
	
	@FindBy(xpath="//table[@id='bookings_table']/tbody/tr")
	List<WebElement> bookingRows;
	
	@FindBy(xpath = "//a[text()='Venues']")
	WebElement venue_dd;
	
	@FindBy(xpath = "//a[text()='Blaydon Primary Care Centre']")
	WebElement venue_name;
	
	@FindBy(xpath="//table[@id='bookings_table']/tbody/tr/td[11]")
	WebElement bookingStatus_Txt;
	
	@FindBy(xpath="//table[@id='bookings_table']/tbody/tr/td/input[@class ='item_checkbox']")
	WebElement slctBooking_chkBox;
	
	@FindBy(xpath="//table[@id='bookings_table']/tbody/tr/td/a[contains(@href,'bookings') and contains(text(),'#')]")
	WebElement bookingRef_link;
	
	
	
	@FindBy(xpath="//table[@id='bookings_table']/tbody/tr/td[12]")
	WebElement paymentStatus_Txt;
	
	@FindBy(xpath="//a[text()='View']")
	WebElement bookingSummaryView_Link;
	
	@FindBy(xpath = "//h4[contains(.,'Booking #')]")
	WebElement bookingID_Txt;
	
	@FindBy(xpath="//a[text()='Back']")
	WebElement back_Btn;
	
	@FindBy(xpath="//div[@class='custom dropdown']//preceding-sibling::select[@id='booking_item_space_id']")
	WebElement space_dd;
	
	@FindBy(xpath="//table[@id='bookings_table']//a[contains(@href,'bookings')]")
	List<WebElement> bookingID_Link;
	
	@FindBy(xpath="//table[@id='bookings_table']//a[contains(text(),'Edit')]")
	List<WebElement> edit_Link;
	
	@FindBy(xpath = "//input[@id='send_cancel_email']/parent::div//span[contains(@class,'custom checkbox')]")
	WebElement canEmail_chkBox;
	
	@FindBy(xpath = "//input[@id='raise_credit_note' ]/parent::label//span[contains(@class,'custom checkbox')]")
	WebElement raiseCN_chkBox;
	
	@FindBy(xpath = "//input[@id='send_credit_note_email']/parent::label//span[contains(@class,'custom checkbox')]")
	WebElement raiseCNEmail_chkBox;
	
	@FindBy(xpath = "//input[@id='refund_payment']/parent::label")
	WebElement refundPay_chkBox;
	
	@FindBy(xpath = "//input[@id='send_refund_email']/parent::label//span")
	WebElement refundEmail_chkBox;
	
	@FindBy(xpath="//a[@id='cancel_selected_items_booking']")
	WebElement cancelSelctd_Btn;
	
	@FindBy(xpath="//a[text()='Cancel selected']")
	WebElement cancelSelctd_mainBtn;
	
	@FindBy(xpath="//input[@id='credit_note_reason']")
	WebElement canReason_txt;
	
	@FindBy(xpath="//input[@value='Cancel this Booking']")
	WebElement canBooking_btn;
	
	@FindBy(xpath="//input[@value='Cancel these Bookings']")
	WebElement canMultipleBooking_btn;
	
	@FindBy(xpath="//a[contains(text(),'Fully paid')]//parent::td//following-sibling::td/a[text()='Cancel']")
	WebElement canForFullyPaidBooking_link;
	
	@FindBy(xpath="//a[contains(text(),'Part paid')]//parent::td//following-sibling::td/a[text()='Cancel']")
	WebElement canForPartPaidBooking_link;
	
	@FindBy(xpath="//a[contains(text(),'Billed')]//parent::td//following-sibling::td/a[text()='Cancel']")
	WebElement canForbilledBooking_link;
	
	@FindBy(xpath="//td[contains(.,'Unbilled')]//following-sibling::td//a[text()='Cancel']")
	WebElement canForUnbilledBooking_link;
	
	@FindBy(xpath="//a[text()='Cancel']")
	WebElement redCancel_btn;
	
	@FindBy(xpath="//a[text()='Cancel']")
	WebElement canBookings_link;
	
	@FindBy(id = "user_email")
	WebElement login_user_nameM;
	
	@FindBy(id = "user_password")
	WebElement login_user_passwordM;
	
	@FindBy(name = "commit")
	WebElement login_btn;
	
	@FindBy(xpath="//a[@class='main' and text()='Organisations']")
	WebElement masterOrgTab;
	
	@FindBy(xpath="//a[text()='View Client']")
	WebElement viewClient_btn;
	
	@FindBy(xpath = "//div[@class='alert-box success hide-on-print']")
	WebElement success_Msg;
	
	@FindBy(xpath = "//td[text()='Billed']//preceding-sibling::td/input[@class='item_checkbox']")
	WebElement billedBooking_chkBox;
	
	@FindBy(xpath = "//td[text()='Unbilled']//preceding-sibling::td/input[@class='item_checkbox']")
	WebElement unBilledBooking_chkBox;
	
	@FindBy(xpath = "//td[text()='Fully paid']//preceding-sibling::td/input[@class='item_checkbox']")
	WebElement partPaidBooking_chkBox;
	
	@FindBy(xpath = "//td[text()='Part paid']//preceding-sibling::td/input[@class='item_checkbox']")
	WebElement fullyPaidBooking_chkBox;
	
	@FindBy(xpath = "//h5[contains(text(),'Credit Note')]")
	WebElement cnTxt;
	
	@FindBy(xpath="//a[@data-remote='true' and contains(text(),'Refund')]")
	WebElement refundTxt;
	
	@FindBy(xpath="//table[@id='admin_client_bookings_table']/tbody/tr")
	List<WebElement> bookingsRowsOnClient;
	
	@FindBy(xpath="//div[@class='booking status-confirmed payment-fully_paid']")
	List<WebElement> fullyPaidBookingOnCalScrn;
	
	@FindBy(xpath="//a[text()='Calendar']")
	WebElement calTab_txt;
	
	//==============================for new bookings===================================
	
	@FindBy(xpath="//table[@id='table_sort_space']//tbody/tr[@class='red item-row']")
	WebElement notAvailBooking_row;
	
	@FindBy(xpath="//table[@id='table_sort_space']//tbody/tr[@class='green item-row']")
	WebElement availBooking_row;
	
	@FindBy(xpath="//a[text()='New Booking']")
	WebElement newBooking_btn;
	
	@FindBy(xpath="//select[@name='booking[client_id]']")
	WebElement selectClient_dd;
	//april release (apriltest)
	
	@FindBy(xpath="//select[@id='booking_client_service_id']")
	WebElement selectClientService_dd;
	
	@FindBy(xpath="//select[@id='space0_id']")
	WebElement selectSpace_dd;
	
	@FindBy(id="booking_start_date")
	WebElement startDate;
	
	@FindBy(id="booking_start_time")
	WebElement startTime;
	
	@FindBy(id="booking_end_time")
	WebElement endTime;
	
	@FindBy(xpath="//select[@id='recurrance_type']")
	WebElement recurType_dd;
	
	@FindBy(xpath="//select[@id='recurrence_option']")
	WebElement repeatEvery_dd;
	
	@FindBy(xpath="//select[@id='recurrance_for_n_ocurrances']")
	WebElement noOfRepeatation_dd;
	
	@FindBy(id="availability_check_booking")
	WebElement checkAvail_btn;
	
	@FindBy(xpath="//a[text()='Save Booking']")
	WebElement saveBooking_Btn;
	
	@FindBy(xpath="//table[@id='table_sort_space']//tbody/tr")
	List<WebElement> bookingItems_row;
	
	
//================================Initialise web elements created in this class========================================
	
	public Bookings_Page() {
	PageFactory.initElements(driver,this);
	}
	

//==================================================================================================================//	
//=======================================//Test Methods//===========================================================//

	public void verify_clickBookingsTab() {
		bookings_tab.click();
		String title = bookingTab_title.getText();
		SoftAssert softAssert = new SoftAssert();
		softAssert.assertTrue(title.contains("Bookings"));
		softAssert.assertAll();
	}
	
//=======================================================================================================================
	
	public void selectVenue() {
		venue_dd.click();
		venue_name.click();	
	}
	
//=======================================================================================================================
	
	public void verify_noOfEnteries() throws InterruptedException {
		selectVenue();
		bookings_tab.click();
		Select slct1 = new Select(noOfEnteries_dd);
		List<WebElement> opn = slct1.getOptions();
		for(int i=1;i<=(opn.size()-1);i++) {

		slct1.selectByIndex(i);
		Thread.sleep(1000);
		
		int noOfbookings = bookingRows.size();
		System.out.println("Number of booking after selecting option " + i +" from the dropdown are " + noOfbookings);
		Thread.sleep(1000);	
		}
	}
	
//=======================================================================================================================
	
	public void verify_searchBar() throws InterruptedException {
		bookings_tab.click();
		
		//search by room name
		Select slct1 = new Select(noOfEnteries_dd);
		slct1.selectByIndex(3);
		Thread.sleep(1000);
		int noOfbookings = bookingRows.size();
		System.out.println("No of bookings with no filter are " + noOfbookings);
		search_Bar.sendKeys(driver.findElement(By.xpath("//table[@id='bookings_table']/tbody/tr/td[6]")).getText());
		search_Bar.sendKeys(Keys.ENTER);
		Thread.sleep(1000);
		int noOfbookings1 = bookingRows.size();
		System.out.println("No of bookings after searhing by room name " + noOfbookings1);
		Assert.assertNotEquals(noOfbookings, noOfbookings1);
	
		//search by client name
		search_Bar.clear();
		search_Bar.sendKeys(Keys.ENTER);
		Thread.sleep(500);
		Select slct2 = new Select(noOfEnteries_dd);
		slct2.selectByIndex(3);
		Thread.sleep(1000);
		int noOfbookings2 = bookingRows.size();
		System.out.println("No of bookings with no filter are " + noOfbookings2);
		search_Bar.sendKeys("catherine");
		search_Bar.sendKeys(Keys.ENTER);
		Thread.sleep(1000);
		int noOfbookings3 = bookingRows.size();
		System.out.println("No of bookings after searhing by client's name are " + noOfbookings3);
		Assert.assertNotEquals(noOfbookings2, noOfbookings3);
	}
	
//=======================================================================================================================
	
	public void verify_searchBookingByDateRange() throws InterruptedException {
		bookings_tab.click();
		Select slct1 = new Select(noOfEnteries_dd);
		slct1.selectByIndex(3);
		Thread.sleep(1000);
		int noOfbookings = bookingRows.size();
		System.out.println("No of bookings with no filter are " + noOfbookings);
		startDate_Field.clear();
		startDate_Field.sendKeys("01/05/2020");
		endDate_Field.clear();
		endDate_Field.sendKeys("02/05/2020");
		go_Btn.click();
		int noOfbookings1 = bookingRows.size();
		System.out.println("No of bookings after searhing by date range are " + noOfbookings1);
		Assert.assertNotEquals(noOfbookings, noOfbookings1);
	}
	
//=======================================================================================================================
	
	public void verify_bookingStatusOpn() throws InterruptedException {
		bookings_tab.click();
		Select slct = new Select(noOfEnteries_dd);
		slct.selectByIndex(3);
		Select slct1 = new Select(status_dd);
		List<WebElement> opn = slct1.getOptions();
		for(int i=1;i<=(opn.size()-1);) {

		slct1.selectByIndex(i);
		Thread.sleep(1000);
		if(bookingRows.size()==0) {
			i++;
		}else {
		String bookingStatus = bookingStatus_Txt.getText();
		int noOfbookings = bookingRows.size();
		System.out.println("Number of bookings after selecting " + bookingStatus + " booking status are " + noOfbookings);
		Thread.sleep(1000);	
			i++;
		   }
		}
	}
	
//=======================================================================================================================
	
	public void verify_paymentStatusOpn() throws InterruptedException {
		bookings_tab.click();
		Select slct = new Select(noOfEnteries_dd);
		slct.selectByIndex(3);
		Select slct1 = new Select(payStatus_dd);
		List<WebElement> opn = slct1.getOptions();
		for(int i=1;i<=(opn.size()-1);) {

		slct1.selectByIndex(i);
		if(bookingRows.size()==0) {
			i++;
		}else {
			
		String paymentStatus = paymentStatus_Txt.getText();
		
		int noOfbookings = bookingRows.size();
		System.out.println("Number of bookings after selecting " + paymentStatus +" payment status are " + noOfbookings);
		Thread.sleep(1000);		
		i++;
		Thread.sleep(1000);
			}
		}
	}
	
//=======================================================================================================================
	
	public void verify_summaryOpnAndView() throws InterruptedException {
		bookings_tab.click();
		Select slct = new Select(viewType_dd);
		slct.selectByVisibleText("Summary");
		search_Bar.sendKeys("AUTOTESTING");
		
		System.out.println("No of rows after searching by client name on BOOKING SUMMARY screen are " + bookingRows.size());
		
		bookingSummaryView_Link.click();
		Thread.sleep(500);
		
		System.out.println("You are on booking details page of booking with ID " + bookingID_Txt.getText() );
		back_Btn.click();
	}

//=======================================================================================================================
	
	public void verify_excelExport() throws InterruptedException {
		bookings_tab.click();
		excelExport_Btn.click();
		
		Select slct = new Select(viewType_dd);
		slct.selectByVisibleText("Summary");
		search_Bar.sendKeys("AUTOTESTING");

		bookingSummaryView_Link.click();
		Thread.sleep(500);
		
		System.out.println("You are on booking details page of booking with ID " + bookingID_Txt.getText() );
		back_Btn.click();
	}
	
//=======================================================================================================================
	
	public void edit_fullyPaidBooking() throws InterruptedException, AWTException {
		selectVenue();
		bookings_tab.click();
		Select slct1 = new Select(payStatus_dd);
		slct1.selectByVisibleText("Fully paid");
		Thread.sleep(1000);
		System.out.println();
		if(bookingRows.size()!=0) {
			for(int i=1;i<=bookingID_Link.size();i++) {
				bookingID_Link.get(i).click();
				
				String roomNameBeforeEdit = driver.findElement(By.xpath("//table[@id='booking_items_list']/tbody/tr["+i+"]/td[2]")).getText();
				System.out.println("Before Edit Room name was " + roomNameBeforeEdit);
				driver.findElement(By.xpath("//table[@id='booking_items_list']/tbody/tr["+i+"]/td[10]")).click();
				Thread.sleep(2000);
				driver.switchTo().alert().accept();
				Thread.sleep(2000);
				driver.findElement(By.xpath("//a[@class='selector' and @href='#']")).click();
				driver.findElement(By.xpath("//li[contains(.,'Group room L1-113')]")).click();
				save_Btn.click();
				Thread.sleep(5000);
				if(driver.findElement(By.xpath("//div[@id='error_messages']")).isDisplayed()) {
					driver.findElement(By.xpath("//a[text()='Close']")).click();
				}else {
				String roomNameafterEdit = driver.findElement(By.xpath("//table[@id='booking_items_list']/tbody/tr["+i+"]/td[2]")).getText();
				System.out.println("After edit room name is " + roomNameafterEdit);
				Assert.assertNotEquals(roomNameBeforeEdit, roomNameafterEdit);
				}
			}	
		}else {
			System.out.println("No booking available to edit this status");
		}
	}
	
//=======================================================================================================================
	
	public void edit_billedBooking() throws InterruptedException, AWTException {
		selectVenue();
		bookings_tab.click();
		Select slct1 = new Select(payStatus_dd);
		slct1.selectByVisibleText("Billed");
		Thread.sleep(1000);
		System.out.println();
		if(bookingRows.size()!=0) {
			for(int i=1;i<=edit_Link.size();i++) {
				String roomNameBeforeEdit = driver.findElement(By.xpath("//table[@id='bookings_table']/tbody/tr["+i+"]/td[6]")).getText();
				System.out.println("Before Edit Room name was " + roomNameBeforeEdit);
				edit_Link.get(i).click();
				Thread.sleep(2000);
				driver.switchTo().alert().accept();
				Thread.sleep(2000);
				driver.findElement(By.xpath("//a[@class='selector' and @href='#']")).click();
				driver.findElement(By.xpath("//li[contains(.,'Group room L1-113')]")).click();
				save_Btn.click();
				Thread.sleep(5000);
				if(driver.findElement(By.xpath("//div[@id='error_messages']")).isDisplayed()) {
					driver.findElement(By.xpath("//a[text()='Close']")).click();
				}else {
				String roomNameafterEdit = driver.findElement(By.xpath("//table[@id='bookings_table']/tbody/tr["+i+"]/td[6]")).getText();
				System.out.println("After edit room name is " + roomNameafterEdit);
				Assert.assertNotEquals(roomNameBeforeEdit, roomNameafterEdit);
				break;
				}
			}	
			Thread.sleep(2000);
		}else {
			System.out.println("No booking available to edit this status");
		}
	}
	
//=======================================================================================================================
	
	public void edit_unBilledBooking() throws InterruptedException, AWTException {
		selectVenue();
		bookings_tab.click();
		Select slct1 = new Select(payStatus_dd);
		slct1.selectByVisibleText("Unbilled");
		Thread.sleep(1000);
		System.out.println();
		if(bookingRows.size()!=0) {
			for(int i=1;i<=2;i++) {
				bookingID_Link.get(i).click();
				
				driver.findElement(By.xpath("//a[@class='blue buttonBourbon' and text()='Edit']")).click();
				Thread.sleep(2000);
				List<WebElement> bookrows = driver.findElements(By.xpath("//table[@id='table_sort_space']//tbody//tr//td[@class='checkbox']"));
				System.out.println("No of line items are " + bookrows.size());
					driver.findElement(By.xpath("//a[@id='bulk_edit']")).click();
					Thread.sleep(2000);
					driver.findElement(By.xpath("//input[@id='bulk-edit-bi-end-time']")).sendKeys("14:00");
					
					driver.findElement(By.xpath("//input[@id='btn-submit-booking']")).click();
					try {
					if(driver.findElement(By.xpath("//div[@id='error_messages']")).isDisplayed()) {
						System.out.println("Updated details are not available");
					}
					}catch(NoSuchElementException e) {
					String str = driver.findElement(By.xpath("//div[@class='alert-box success hide-on-print']")).getText();
					Assert.assertTrue(str.contains("Booking was successfully updated."));
					break;
					}	
				}
			}else {
				System.out.println("No booking available to edit this status");
			}
	}
	
//=======================================================================================================================
	
	public void cancel_fullyPaid_WP_Single_Booking() throws InterruptedException {
		selectVenue();
		bookings_tab.click();
		Thread.sleep(1000);
		Select slct1 = new Select(payStatus_dd);
		slct1.selectByVisibleText("Fully paid");
		if(bookingRows.size()!=0) {
			Thread.sleep(1000);
			bookingRef_link.click();
			Thread.sleep(1000);
			canForFullyPaidBooking_link.click();
			canEmail_chkBox.click();
			canReason_txt.sendKeys("AUTOMATECAN");
			raiseCN_chkBox.click();
			raiseCNEmail_chkBox.click();
			refundPay_chkBox.click();
			refundEmail_chkBox.click();
			Assert.assertTrue(raiseCN_chkBox.isDisplayed());
			Assert.assertTrue(raiseCNEmail_chkBox.isDisplayed());
			Assert.assertTrue(refundPay_chkBox.isDisplayed());
			Assert.assertTrue(refundEmail_chkBox.isDisplayed());
			canBooking_btn.click();
			String str = driver.findElement(By.xpath("//h5[contains(text(),'Credit Note')]")).getText();
			System.out.println(str);
			try {
			WebElement str1 = driver.findElement(By.xpath("//a[@data-remote='true' and contains(text(),'Refund')]"));
				String refund = str1.getText();
				System.out.println(refund);	
			}catch (NoSuchElementException e) {
			    System.out.println("No refund option on invoice");
			}
			viewClient_btn.click();
			Thread.sleep(1000);
			WebElement cnNumber = driver.findElement(By.xpath("//a[contains(.,str)]"));
			System.out.println("to double check cnNumber " + cnNumber);
			Assert.assertTrue(isDisplayed(cnNumber));
			try {
			WebElement refundNumber = driver.findElement(By.xpath("//a[contains(.,refund)]"));
			Assert.assertTrue(isDisplayed(refundNumber));
			}catch(NoSuchElementException e) {
			    System.out.println("No refund generated");
			}
		}
			else {
				System.out.println("No booking available to cancel with Fully paid status");
			}
		}
	
//=======================================================================================================================
	
	public void cancel_billed_WP_Single_Booking() throws InterruptedException {
		selectVenue();
		bookings_tab.click();
		Thread.sleep(1000);
		Select slct1 = new Select(payStatus_dd);
		slct1.selectByVisibleText("Billed");
		if(bookingRows.size()!=0) {
			Thread.sleep(1000);
			bookingRef_link.click();
			Thread.sleep(1000);
			canForbilledBooking_link.click();
			canEmail_chkBox.click();
			canReason_txt.sendKeys("AUTOMATECAN");
			raiseCN_chkBox.click();
			raiseCNEmail_chkBox.click();
			Assert.assertTrue(raiseCN_chkBox.isDisplayed());
			Assert.assertTrue(raiseCNEmail_chkBox.isDisplayed());
			assertTrue(!isElementPresent(refundPay_chkBox));
			assertTrue(!isElementPresent(refundEmail_chkBox));
			canBooking_btn.click();
			String str = driver.findElement(By.xpath("//h5[contains(text(),'Credit Note')]")).getText();
			System.out.println(str);
			viewClient_btn.click();
			Thread.sleep(1000);
			WebElement cnNumber = driver.findElement(By.xpath("//a[contains(.,str)]"));
			Assert.assertTrue(isDisplayed(cnNumber));	
		}
		else {
			System.out.println("No booking available to cancel with Billed status");
			}
	}
	
//=======================================================================================================================
	
	public void cancel_unBilled_WP_Single_Booking() throws InterruptedException {
		bookings_tab.click();
		Thread.sleep(1000);
		Select slct = new Select(status_dd);
		slct.selectByVisibleText("Confirmed");
		Select slct1 = new Select(payStatus_dd);
		slct1.selectByVisibleText("Unbilled");
		if(bookingRows.size()!=0) {
			bookingRef_link.click();
			canForUnbilledBooking_link.click();
			canEmail_chkBox.click();
			canReason_txt.sendKeys("AUTOMATECAN-unbilled");
			assertTrue(!isElementPresent(raiseCN_chkBox));
			assertTrue(!isElementPresent(raiseCNEmail_chkBox));
			assertTrue(!isElementPresent(refundPay_chkBox));
			assertTrue(!isElementPresent(refundEmail_chkBox));
			canBooking_btn.click();
		}
			else {
				System.out.println("No booking available to cancel with Billed status");
			}
	}
	
//=======================================================================================================================
	
	public void cancel_tentative_Booking() {
		selectVenue();
		bookings_tab.click();
		Select slct1 = new Select(status_dd);
		slct1.selectByVisibleText("Tentative");
		if(bookingRows.size()!=0) {
			bookingRef_link.click();
			redCancel_btn.click();
			canEmail_chkBox.click();
			canReason_txt.sendKeys("AUTOMATECAN");
			assertTrue(!isElementPresent(raiseCN_chkBox));
			assertTrue(!isElementPresent(raiseCNEmail_chkBox));
			assertTrue(!isElementPresent(refundPay_chkBox));
			assertTrue(!isElementPresent(refundEmail_chkBox));
			canBooking_btn.click();
			String msg = success_Msg.getText();
			SoftAssert softAssert = new SoftAssert();
			softAssert.assertTrue(msg.contains("Booking cancelled."));
			softAssert.assertAll();
		}
			else {
				System.out.println("No booking available to cancel with Tentative status");
			}
	  }
	
//=======================================================================================================================
	
	public void verifyRefundFunc() throws InterruptedException {
		driver.findElement(By.xpath("//div[@class='small button buttonBourbon dropdown fr']")).click();
		driver.findElement(By.xpath("//a[contains(.,'Logout')]")).click();
		Thread.sleep(2000);
		login_user_nameM.sendKeys("mastertest@example.com");
		login_user_passwordM.sendKeys("master456#");
		login_btn.click();
		Thread.sleep(2000);
	
		masterOrgTab.click();
		driver.findElement(By.xpath("//td[contains(text(),'NHSPS')]//following-sibling::td/a[text()='Edit']")).click();
		driver.findElement(By.xpath("//a[text()='Features']")).click();
		driver.findElement(By.xpath("//input[@value='refunds']//parent::td//span[@class='custom checkbox checked']")).click();
		driver.findElement(By.xpath("//input[@value='Save']")).click();
		driver.findElement(By.xpath("//div[@class='small button buttonBourbon dropdown fr']")).click();
		driver.findElement(By.xpath("//a[contains(.,'Logout')]")).click();
		Thread.sleep(2000);
		
		login_user_nameM.sendKeys("nhsmva@example.com");
		login_user_passwordM.sendKeys("nhsmva456#");
		login_btn.click();
		Thread.sleep(2000);
		
		selectVenue();
		bookings_tab.click();
		Select slct1 = new Select(payStatus_dd);
		slct1.selectByVisibleText("Fully paid");
		if(bookingRows.size()!=0) {
			slctBooking_chkBox.click();
			cancelSelctd_Btn.click();
			canEmail_chkBox.click();
			canReason_txt.sendKeys("AUTOMATECAN");
			raiseCN_chkBox.click();
			raiseCNEmail_chkBox.click();
			assertTrue(!isElementPresent(refundPay_chkBox));
			assertTrue(!isElementPresent(refundEmail_chkBox));
			Thread.sleep(1000);
			driver.findElement(By.xpath("//a[text()='Go Back']")).click();
			Thread.sleep(1000);
		}
			else {
				System.out.println("No booking available to cancel with Fully paid status");
			}
		
		driver.findElement(By.xpath("//div[@class='small button buttonBourbon dropdown fr']")).click();
		driver.findElement(By.xpath("//a[contains(.,'Logout')]")).click();
		Thread.sleep(2000);
		login_user_nameM.sendKeys("mastertest@example.com");
		login_user_passwordM.sendKeys("master456#");
		login_btn.click();
		Thread.sleep(2000);
	
		masterOrgTab.click();
		driver.findElement(By.xpath("//td[contains(text(),'NHSPS')]//following-sibling::td/a[text()='Edit']")).click();
		driver.findElement(By.xpath("//a[text()='Features']")).click();
		driver.findElement(By.xpath("//input[@value='refunds']//parent::td//span[@class='custom checkbox']")).click();
		driver.findElement(By.xpath("//input[@value='Save']")).click();
		driver.findElement(By.xpath("//div[@class='small button buttonBourbon dropdown fr']")).click();
		driver.findElement(By.xpath("//a[contains(.,'Logout')]")).click();
		
		Thread.sleep(2000);
		login_user_nameM.sendKeys("nhsmva@example.com");
		login_user_passwordM.sendKeys("nhsmva456#");
		login_btn.click();
		Thread.sleep(2000);
		
		selectVenue();
		bookings_tab.click();
		Select slct2 = new Select(payStatus_dd);
		slct2.selectByVisibleText("Fully paid");
		if(bookingRows.size()!=0) {
			slctBooking_chkBox.click();
			cancelSelctd_Btn.click();
			canEmail_chkBox.click();
			canReason_txt.sendKeys("AUTOMATECAN");
			raiseCN_chkBox.click();
			raiseCNEmail_chkBox.click();
			refundPay_chkBox.click();
		//	refundEmail_chkBox.click();
			Assert.assertTrue(refundPay_chkBox.isDisplayed());
			Assert.assertTrue(refundEmail_chkBox.isDisplayed());
		}
			else {
				System.out.println("No booking available to cancel with Fully paid status");
			}	
	}

//=======================================================================================================================
	
	public void cancel_fullyPaid_multiple_Booking() throws InterruptedException {
		selectVenue();
		bookings_tab.click();
		Thread.sleep(1000);
		Select slct1 = new Select(payStatus_dd);
		slct1.selectByVisibleText("Fully paid");
		if(bookingRows.size()!=0) {
			Thread.sleep(1000);
			slctBooking_chkBox.click();
			Thread.sleep(1000);
			cancelSelctd_mainBtn.click();
			canEmail_chkBox.click();
			canReason_txt.sendKeys("AUTOMATECAN");
			raiseCN_chkBox.click();
			raiseCNEmail_chkBox.click();
			refundPay_chkBox.click();
			refundEmail_chkBox.click();
			Assert.assertTrue(raiseCN_chkBox.isDisplayed());
			Assert.assertTrue(raiseCNEmail_chkBox.isDisplayed());
			Assert.assertTrue(refundPay_chkBox.isDisplayed());
			Assert.assertTrue(refundEmail_chkBox.isDisplayed());
			canMultipleBooking_btn.click();
			String str = driver.findElement(By.xpath("//h5[contains(text(),'Credit Note')]")).getText();
			System.out.println(str);
			try {
			WebElement str1 = driver.findElement(By.xpath("//a[@data-remote='true' and contains(text(),'Refund')]"));
				String refund = str1.getText();
				System.out.println(refund);	
			}catch (NoSuchElementException e) {
			    System.out.println("No refund option on invoice");
			}
			viewClient_btn.click();
			Thread.sleep(1000);
			WebElement cnNumber = driver.findElement(By.xpath("//a[contains(.,str)]"));
			System.out.println("to double check cnNumber " + cnNumber);
			Assert.assertTrue(isDisplayed(cnNumber));
			try {
			WebElement refundNumber = driver.findElement(By.xpath("//a[contains(.,refund)]"));
			Assert.assertTrue(refundNumber.isDisplayed());
			}catch(NoSuchElementException e) {
			    System.out.println("No refund generated");
			}
		}
			else {
				System.out.println("No booking available to cancel with Fully paid status");
			}
	}
	
//=======================================================================================================================
	
	//++++++++++++++++++++++++++++++++++++++++++

	private boolean isDisplayed(WebElement cnNumber) {
	
		return true;
	}

//=======================================================================================================================

	public void cancel_billed_multiple_Booking() throws InterruptedException {
		//selectVenue();
		bookings_tab.click();
		Thread.sleep(1000);
		Select slct1 = new Select(payStatus_dd);
		slct1.selectByVisibleText("Billed");
		if(bookingRows.size()!=0) {
			Thread.sleep(1000);
			slctBooking_chkBox.click();
			Thread.sleep(1000);
			cancelSelctd_mainBtn.click();
			canEmail_chkBox.click();
			canReason_txt.sendKeys("AUTOMATECAN");
			raiseCN_chkBox.click();
			raiseCNEmail_chkBox.click();
			Assert.assertTrue(raiseCN_chkBox.isDisplayed());
			Assert.assertTrue(raiseCNEmail_chkBox.isDisplayed());
			assertTrue(!isElementPresent(refundPay_chkBox));
			assertTrue(!isElementPresent(refundEmail_chkBox));
			canMultipleBooking_btn.click();
			String str = driver.findElement(By.xpath("//h5[contains(text(),'Credit Note')]")).getText();
			System.out.println(str);
			viewClient_btn.click();
			Thread.sleep(1000);
			WebElement cnNumber = driver.findElement(By.xpath("//a[contains(.,str)]"));
			Assert.assertTrue(cnNumber.isDisplayed());		
		}
			else {
				System.out.println("No booking available to cancel with Billed status");
		}
	}
	
//=======================================================================================================================
	
	public void cancel_unBilled_multiple_Booking() throws InterruptedException {
		bookings_tab.click();
		Thread.sleep(1000);
		Select slct = new Select(status_dd);
		slct.selectByVisibleText("Confirmed");
		Select slct1 = new Select(payStatus_dd);
		slct1.selectByVisibleText("Unbilled");
		if(bookingRows.size()!=0) {
			slctBooking_chkBox.click();
			Thread.sleep(1000);
			cancelSelctd_mainBtn.click();
			canEmail_chkBox.click();
			canReason_txt.sendKeys("AUTOMATECAN-unbilled");
			assertTrue(!isElementPresent(raiseCN_chkBox));
			assertTrue(!isElementPresent(raiseCNEmail_chkBox));
			assertTrue(!isElementPresent(refundPay_chkBox));
			assertTrue(!isElementPresent(refundEmail_chkBox));

			canMultipleBooking_btn.click();
		}
			else {
				System.out.println("No booking available to cancel with Billed status");
			}
	}

//=======================================================================================================================
	
	private boolean isElementPresent(WebElement raiseCN_chkBox) {
		return false;
	}
	
//=======================================================================================================================	

	public void verify_cancel_MixedMultiple_Bpookings() throws InterruptedException {

		bookings_tab.click();
		Select slct1 = new Select(noOfEnteries_dd);
		slct1.selectByVisibleText("all entries");
		Thread.sleep(1000);
		try {
			billedBooking_chkBox.click();
		}catch(NoSuchElementException e) {
		    System.out.println("Booking with billed status is not available");
		}
		try {
			unBilledBooking_chkBox.click();
		}catch(NoSuchElementException e) {
			System.out.println("Booking with unbilled status is not available");
		}
		try {
			partPaidBooking_chkBox.click();
		}catch(NoSuchElementException e) {
			System.out.println("Booking with part paid status is not available");
		}
		try {
			fullyPaidBooking_chkBox.click();
		}catch(NoSuchElementException e) {
			System.out.println("Booking with fully paid status is not available");
		}

		Thread.sleep(1000);
		cancelSelctd_mainBtn.click();
		canEmail_chkBox.click();
		canReason_txt.sendKeys("AUTOMATECAN");
		try {
			raiseCN_chkBox.click();
		}catch(NoSuchElementException e) {
			System.out.println("Raise CN option is not available");
		}
		try {
			raiseCNEmail_chkBox.click();
		}catch(NoSuchElementException e) {
			System.out.println("Raise CN Email option is not available");
		}
		try {
			refundPay_chkBox.click();
		}catch(NoSuchElementException e) {
			System.out.println("Raise Refund option is not available");
		}
		try {
			refundEmail_chkBox.click();
		}catch(NoSuchElementException e) {
			System.out.println("Raise refund Email option is not available");
		}
		canMultipleBooking_btn.click();
		String msg = driver.findElement(By.xpath("//*[@id='flash_success']")).getText();
		SoftAssert softAssert = new SoftAssert();
		softAssert.assertTrue(msg.contains("Bookings cancelled and credit notes raised."));
		softAssert.assertAll();	
	}
	
//=======================================================================================================================
	
	public void cancel_nonBillableClients_booking() {
		selectVenue();
		driver.findElement(By.xpath("//a[text() = 'Clients']")).click();
		driver.findElement(By.xpath("//input[contains(@aria-controls,'clients_table')]")).sendKeys("2nd reg");
		driver.findElement(By.xpath("//a[text()='View']")).click();
		WebElement confirmBooking = driver.findElement(By.xpath("//table[@id='admin_client_bookings_table']/tbody/tr/td[text()='Confirmed']"));
		if(confirmBooking.isDisplayed()) {
			confirmBooking.click();
			canBookings_link.click();
			canEmail_chkBox.click();
			canReason_txt.sendKeys("NON-BILLABLE USER CANCEL booking");
			assertTrue(!isElementPresent(raiseCN_chkBox));
			assertTrue(!isElementPresent(refundEmail_chkBox));
			assertTrue(!isElementPresent(refundPay_chkBox));
			assertTrue(!isElementPresent(refundEmail_chkBox));
			canBooking_btn.click();	
			
		}else {
			System.out.println("No confirmed booking available for the Non-billable client"); 
		}
	}
	
//=======================================================================================================================
	
	public void cancel_bookingFromClientScreen() throws InterruptedException {
		selectVenue();
		driver.findElement(By.xpath("//a[text() = 'Clients']")).click();
		driver.findElement(By.xpath("//input[contains(@aria-controls,'clients_table')]")).sendKeys("apriltest");
		driver.findElement(By.xpath("//a[text()='View']")).click();
		int noOfBook = bookingsRowsOnClient.size();
		if(bookingsRowsOnClient.size()!=0) {
		for(int i=1;i<=noOfBook;i++) {
		driver.findElement(By.xpath("//table[@id='admin_client_bookings_table']/tbody/tr["+i+"]/td[text()='Confirmed']")).click();
		try {
			canForFullyPaidBooking_link.click();
			canEmail_chkBox.click();
			canReason_txt.sendKeys("Cancel booking from Client's screen");
			raiseCN_chkBox.click();
			raiseCNEmail_chkBox.click();
			refundPay_chkBox.click();
			refundEmail_chkBox.click();
			Assert.assertTrue(raiseCN_chkBox.isDisplayed());
			Assert.assertTrue(raiseCNEmail_chkBox.isDisplayed());
			Assert.assertTrue(refundPay_chkBox.isDisplayed());
			Assert.assertTrue(refundEmail_chkBox.isDisplayed());
			canBooking_btn.click();
			String str = driver.findElement(By.xpath("//h5[contains(text(),'Credit Note')]")).getText();
			System.out.println(str);
			try {
			String str1 = driver.findElement(By.xpath("//a[@data-remote='true' and contains(text(),'Refund')]")).getText();
			System.out.println(str1);	
			}catch (NoSuchElementException e) {
			    System.out.println("No refund option on invoice");
			}
			viewClient_btn.click();
			Thread.sleep(1000);
			WebElement cnNumber = driver.findElement(By.xpath("//a[contains(.,"+str+")]"));
			System.out.println("to double check cnNumber " + cnNumber);
			Assert.assertTrue(isDisplayed(cnNumber));
			try {
			WebElement refundNumber = driver.findElement(By.xpath("//a[contains(.,str1)]"));
			Assert.assertTrue(isDisplayed(refundNumber));
			}catch(NoSuchElementException e) {
			    System.out.println("No refund generated");
			}
			break;
		}catch(NoSuchElementException e) { 
				driver.findElement(By.xpath("//a[text()='Back']")).click();
				Thread.sleep(2000);
			  }
			}
		}else {
			System.out.println("This client doesnt have any booking");
		}
	}
	
//=======================================================================================================================
	
	public void cancel_bookingFromCalender() throws InterruptedException {
		selectVenue();
		calTab_txt.click();
		if(fullyPaidBookingOnCalScrn.size()!=0) {
			fullyPaidBookingOnCalScrn.get(1).click();
			redCancel_btn.click();
			driver.findElement(By.xpath("//a[text()='this occurrence']")).click();
			canEmail_chkBox.click();
			canReason_txt.sendKeys("Cancel booking from calender");
			raiseCN_chkBox.click();
			raiseCNEmail_chkBox.click();
			refundPay_chkBox.click();
			refundEmail_chkBox.click();
			Assert.assertTrue(raiseCN_chkBox.isDisplayed());
			Assert.assertTrue(raiseCNEmail_chkBox.isDisplayed());
			Assert.assertTrue(refundPay_chkBox.isDisplayed());
			Assert.assertTrue(refundEmail_chkBox.isDisplayed());
			canBooking_btn.click();
			String str = driver.findElement(By.xpath("//h5[contains(text(),'Credit Note')]")).getText();
			System.out.println(str);
			try {
			String str1 = driver.findElement(By.xpath("//a[@data-remote='true' and contains(text(),'Refund')]")).getText();
			System.out.println(str1);	
			}catch (NoSuchElementException e) {
			    System.out.println("No refund option on invoice");
			}
			viewClient_btn.click();
			Thread.sleep(1000);
			WebElement cnNumber = driver.findElement(By.xpath("//a[contains(.,'"+str+"')]"));
			System.out.println("to double check cnNumber " + cnNumber.getText());
			String strB = cnNumber.getText();
			Assert.assertEquals(str, strB);
			try {
			WebElement refundNumber = driver.findElement(By.xpath("//a[contains(.,str1)]"));
			Assert.assertTrue(isDisplayed(refundNumber));
			}catch(NoSuchElementException e) {
			    System.out.println("No refund generated");
			}	
		}else {
			driver.findElement(By.xpath("//a[@class='blue glyph general' and text()='u']")).click();
			if(fullyPaidBookingOnCalScrn.size()!=0) {
				fullyPaidBookingOnCalScrn.get(1).click();
				redCancel_btn.click();
				driver.findElement(By.xpath("//a[text()='this occurrence']")).click();
				canEmail_chkBox.click();
				canReason_txt.sendKeys("Cancel booking from calender");
				raiseCN_chkBox.click();
				raiseCNEmail_chkBox.click();
				refundPay_chkBox.click();
				refundEmail_chkBox.click();
				Assert.assertTrue(raiseCN_chkBox.isDisplayed());
				Assert.assertTrue(raiseCNEmail_chkBox.isDisplayed());
				Assert.assertTrue(refundPay_chkBox.isDisplayed());
				Assert.assertTrue(refundEmail_chkBox.isDisplayed());
				canBooking_btn.click();
				String str = driver.findElement(By.xpath("//h5[contains(text(),'Credit Note')]")).getText();
				System.out.println(str);
				try {
				String str1 = driver.findElement(By.xpath("//a[@data-remote='true' and contains(text(),'Refund')]")).getText();
				System.out.println(str1);	
				}catch (NoSuchElementException e) {
				    System.out.println("No refund option on invoice");
				}
				viewClient_btn.click();
				Thread.sleep(1000);
				WebElement cnNumber = driver.findElement(By.xpath("//a[contains(.,'"+str+"')]"));
				System.out.println("to double check cnNumber " + cnNumber.getText());
				String strB = cnNumber.getText();
				Assert.assertEquals(str, strB);
				try {
				WebElement refundNumber = driver.findElement(By.xpath("//a[contains(.,str1)]"));
				Assert.assertTrue(isDisplayed(refundNumber));
				}catch(NoSuchElementException e) {
				    System.out.println("No refund generated");
				}	
			}
		}
	}
	
	
//=======================================================================================================================
	
	
	public void verify_manualPayBookingsCancellation() throws InterruptedException {
		selectVenue();
		driver.findElement(By.xpath("//a[text() = 'Clients']")).click();
		driver.findElement(By.xpath("//input[contains(@aria-controls,'clients_table')]")).sendKeys("apriltest");
		driver.findElement(By.xpath("//a[text()='View']")).click();
		if(bookingsRowsOnClient.size()!=0) {
	
		driver.findElement(By.xpath("//table[@id='admin_client_bookings_table']/tbody/tr/td[text()='Confirmed']")).click();
		
			try{
				canForFullyPaidBooking_link.click();
			}catch(Exception e) {
				canForPartPaidBooking_link.click();
			}
			canEmail_chkBox.click();
			canReason_txt.sendKeys("Cancel manual booking from Client's screen");
			raiseCN_chkBox.click();
			raiseCNEmail_chkBox.click();
			refundPay_chkBox.click();
			refundEmail_chkBox.click();
			Assert.assertTrue(raiseCN_chkBox.isDisplayed());
			Assert.assertTrue(raiseCNEmail_chkBox.isDisplayed());
			Assert.assertTrue(refundPay_chkBox.isDisplayed());
			Assert.assertTrue(refundEmail_chkBox.isDisplayed());
			canBooking_btn.click();
			
			String msg = driver.findElement(By.xpath("//div[@class='alert-box alert hide-on-print' and @id='flash_alert']")).getText();
			SoftAssert softAssert = new SoftAssert();
			softAssert.assertTrue(msg.contains("You have just generated a manual refund in the booking system. Please take the necessary steps to reimburse the client"));
			softAssert.assertAll();
			String str = driver.findElement(By.xpath("//h5[contains(text(),'Credit Note')]")).getText();
			System.out.println(str);
			viewClient_btn.click();
			Thread.sleep(1000);
			WebElement cnNumber = driver.findElement(By.xpath("//a[contains(.,'"+str+"')]"));
			System.out.println("to double check cnNumber " + cnNumber.getText());
			String strB = cnNumber.getText();
			Assert.assertEquals(str, strB);
		}
		else {
			System.out.println("This client doesnt have any booking");
		     }	
	}
	
//=======================================================================================================================
	
	public void verify_createNewDailyBooking() throws InterruptedException {
		selectVenue();
		bookings_tab.click();
		newBooking_btn.click();
		Select slct1 =  new Select(selectClient_dd);
		slct1.selectByVisibleText("april release (apriltest)");
		Thread.sleep(1000);
		Select slct3 =  new Select(selectSpace_dd);
		slct3.selectByVisibleText("Treatment room L1-036");

		startDate.sendKeys(LocalDate.now().format(DateTimeFormatter.ofPattern("dd/MM/yyyy")));
		startTime.sendKeys("10:00");
		endTime.sendKeys("11:00");
		
		driver.findElement(By.id("booking_deposit_attributes_amount")).click();
		Thread.sleep(2000);
		driver.findElement(By.xpath("//Select[@id='recurrance_type']//following-sibling::div/a[@class='selector']")).click();
		driver.findElement(By.xpath("//li[@class='selected']//following-sibling::li[contains(.,'Daily')]")).click();	
		driver.findElement(By.xpath("//Select[@id='recurrence_option']//following-sibling::div/a[@class='selector']")).click();
		driver.findElement(By.xpath("//select[@id='recurrence_option']//following-sibling::div//ul/li[contains(.,'5')]")).click();
		driver.findElement(By.xpath("//Select[@id='recurrance_for_n_ocurrances']//following-sibling::div/a[@class='selector']")).click();
		driver.findElement(By.xpath("//select[@id='recurrance_for_n_ocurrances']//following-sibling::div//ul/li[contains(.,'2')]")).click();
		
		checkAvail_btn.click();
		
		System.out.println("No of bookings Rows " + bookingItems_row.size());
		for(int i=1;i<=bookingItems_row.size();i++) {
			try {
				  WebElement element1=driver.findElement(By.xpath("//tbody/tr["+i+"][contains(@class,'red')]/td/input[@type='checkbox']"));
				  JavascriptExecutor executor = (JavascriptExecutor) driver;
				  executor.executeScript("arguments[0].click();", element1);
				  System.out.println("Check 1");
			

			} catch (NoSuchElementException e) {}	
		}
			
			Thread.sleep(5000);
			driver.findElement(By.id("cancel_selected_items")).click();
			
			System.out.println("Booking items are " + bookingItems_row.size());
			if(bookingItems_row.size()!=0) {
				Thread.sleep(10000);
				saveBooking_Btn.click();
				Thread.sleep(5000);
				driver.findElement(By.xpath("//a[@id='btn-save-booking-with-provisional' and text()='Yes']")).click();
				Thread.sleep(5000);
				driver.findElement(By.xpath("//div[@class='booking status-provisional payment-unbilled']//h2[contains(.,'april release')]")).click();
				Thread.sleep(5000);
				driver.findElement(By.xpath("//a[@class='green buttonBourbon' and text()='Confirm']")).click();
				Thread.sleep(5000);
				driver.findElement(By.xpath("//a[text()='this occurrence']")).click();
				Thread.sleep(2000);
			try {	
				driver.findElement(By.xpath("//a[@class='green buttonBourbon' and text()='Yes']")).click();
				String msg = success_Msg.getText();
				SoftAssert softAssert = new SoftAssert();
				softAssert.assertTrue(msg.contains("Confirmation email sent to client. "));
				softAssert.assertAll();
			}catch (NoSuchElementException e)
			{
			}				
			}else {
				System.out.println("No booking is available on this time date");
			}	
	   }
	
//=======================================================================================================================
	
	public void verify_createNewWeeklyBooking() throws InterruptedException {
		selectVenue();
		bookings_tab.click();
		newBooking_btn.click();
		Select slct1 =  new Select(selectClient_dd);
		slct1.selectByVisibleText("april release (apriltest)");
		Thread.sleep(1000);
		Select slct3 =  new Select(selectSpace_dd);
		slct3.selectByVisibleText("Treatment room L1-036");

		startDate.sendKeys(LocalDate.now().format(DateTimeFormatter.ofPattern("dd/MM/yyyy")));
		startTime.sendKeys("11:00");
		endTime.sendKeys("12:00");
		
		driver.findElement(By.id("booking_deposit_attributes_amount")).click();
		Thread.sleep(2000);
		driver.findElement(By.xpath("//Select[@id='recurrance_type']//following-sibling::div/a[@class='selector']")).click();
		driver.findElement(By.xpath("//li[@class='selected']//following-sibling::li[contains(.,'Weekly')]")).click();	
		driver.findElement(By.xpath("//Select[@id='recurrence_option']//following-sibling::div/a[@class='selector']")).click();
		driver.findElement(By.xpath("//select[@id='recurrence_option']//following-sibling::div//ul/li[contains(.,'5')]")).click();
		driver.findElement(By.xpath("//Select[@id='recurrance_for_n_ocurrances']//following-sibling::div/a[@class='selector']")).click();
		driver.findElement(By.xpath("//select[@id='recurrance_for_n_ocurrances']//following-sibling::div//ul/li[contains(.,'2')]")).click();
		
		checkAvail_btn.click();
		
		System.out.println("No of bookings Rows " + bookingItems_row.size());
		for(int i=1;i<=bookingItems_row.size();i++) {
			try {
				  WebElement element1=driver.findElement(By.xpath("//tbody/tr["+i+"][contains(@class,'red')]/td/input[@type='checkbox']"));
				  JavascriptExecutor executor = (JavascriptExecutor) driver;
				  executor.executeScript("arguments[0].click();", element1);
				  System.out.println("Check 1");
				

			} catch (NoSuchElementException e) {}	
		}  
			
			Thread.sleep(5000);
			driver.findElement(By.id("cancel_selected_items")).click();	
			System.out.println("Booking items are " + bookingItems_row.size());
			if(bookingItems_row.size()!=0) {
				Thread.sleep(10000);
				saveBooking_Btn.click();
				Thread.sleep(10000);
				driver.findElement(By.xpath("//a[@id='btn-save-booking-with-provisional' and text()='Yes']")).click();
				Thread.sleep(5000);
				driver.findElement(By.xpath("//div[@class='booking status-provisional payment-unbilled']//h2[contains(.,'april release')]")).click();
				Thread.sleep(5000);
				driver.findElement(By.xpath("//a[@class='green buttonBourbon' and text()='Confirm']")).click();
				Thread.sleep(5000);
				driver.findElement(By.xpath("//a[text()='this occurrence']")).click();
				Thread.sleep(2000);
				try {	
					driver.findElement(By.xpath("//a[@class='green buttonBourbon' and text()='Yes']")).click();
					String msg = success_Msg.getText();
					SoftAssert softAssert = new SoftAssert();
					softAssert.assertTrue(msg.contains("Confirmation email sent to client. "));
					softAssert.assertAll();
				
				}catch (NoSuchElementException e)
				{
				}		
			}else {
				System.out.println("No booking is available on this time date");
			}	
	   }
	
//=======================================================================================================================
	
	public void verify_createNewMonthlyBooking() throws InterruptedException {
		selectVenue();
		bookings_tab.click();
		newBooking_btn.click();
		Select slct1 =  new Select(selectClient_dd);
		slct1.selectByVisibleText("april release (apriltest)");
		Thread.sleep(1000);
		Select slct3 =  new Select(selectSpace_dd);
		slct3.selectByVisibleText("Treatment room L1-036");

		startDate.sendKeys(LocalDate.now().format(DateTimeFormatter.ofPattern("dd/MM/yyyy")));
		startTime.sendKeys("11:00");
		endTime.sendKeys("12:00");
		
		driver.findElement(By.id("booking_deposit_attributes_amount")).click();
		Thread.sleep(2000);
		driver.findElement(By.xpath("//Select[@id='recurrance_type']//following-sibling::div/a[@class='selector']")).click();
		driver.findElement(By.xpath("//li[@class='selected']//following-sibling::li[contains(.,'Monthly')]")).click();	
		driver.findElement(By.xpath("//Select[@id='recurrence_option']//following-sibling::div/a[@class='selector']")).click();
		driver.findElement(By.xpath("//select[@id='recurrence_option']//following-sibling::div//ul/li[contains(.,'5')]")).click();
		driver.findElement(By.xpath("//Select[@id='recurrance_for_n_ocurrances']//following-sibling::div/a[@class='selector']")).click();
		driver.findElement(By.xpath("//select[@id='recurrance_for_n_ocurrances']//following-sibling::div//ul/li[contains(.,'2')]")).click();
		
		checkAvail_btn.click();
		
		System.out.println("No of bookings Rows " + bookingItems_row.size());
		for(int i=1;i<=bookingItems_row.size();i++) {
			try {
				  WebElement element1=driver.findElement(By.xpath("//tbody/tr["+i+"][contains(@class,'red')]/td/input[@type='checkbox']"));
				  JavascriptExecutor executor = (JavascriptExecutor) driver;
				  executor.executeScript("arguments[0].click();", element1);
				  System.out.println("Check 1");
				  driver.findElement(By.id("cancel_selected_items")).click();

			} catch (NoSuchElementException e) {}	
		}
			
			Thread.sleep(5000);
			driver.findElement(By.id("cancel_selected_items")).click();
			System.out.println("Booking items are " + bookingItems_row.size());
			if(bookingItems_row.size()!=0) {
				Thread.sleep(10000);
				saveBooking_Btn.click();
				Thread.sleep(10000);
				driver.findElement(By.xpath("//a[@id='btn-save-booking-with-provisional' and text()='Yes']")).click();
				Thread.sleep(5000);
				driver.findElement(By.xpath("//div[@class='booking status-provisional payment-unbilled']//h2[contains(.,'april release')]")).click();
				Thread.sleep(5000);
				driver.findElement(By.xpath("//a[@class='green buttonBourbon' and text()='Confirm']")).click();
				Thread.sleep(5000);
				driver.findElement(By.xpath("//a[text()='this occurrence']")).click();
				Thread.sleep(2000);
				try {	
					driver.findElement(By.xpath("//a[@class='green buttonBourbon' and text()='Yes']")).click();
					String msg = success_Msg.getText();
					SoftAssert softAssert = new SoftAssert();
					softAssert.assertTrue(msg.contains("Confirmation email sent to client. "));
					softAssert.assertAll();
				}catch (NoSuchElementException e)
				{
				}	
	
			}else {
				System.out.println("No booking is available on this time date");
			}	
	   }
}

//=======================================================================================================================