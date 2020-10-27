package kajima.venueadmin.pom_pages;

import static org.testng.Assert.assertTrue;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;
import org.testng.asserts.SoftAssert;


import kajima.venueadmin.base.TestBase;

public class Calender_Page extends TestBase {
	
	Bookings_Page booking_page =  new Bookings_Page();
	
	
	@FindBy(xpath = "//a[@class='main' and text() = 'Calendar']")
	WebElement calender_tab;
	
	@FindBy(xpath="//label[text()='View booked rooms only']")
	WebElement bookedRoomChkBox;
	
	@FindBy(xpath="//input[@id='calendar_booked_rooms' and @checked='checked']")
	WebElement bookRoomChkBox_verify;
	
	@FindBy(xpath="//div[@data-room-id='459']//div[@data-hour='14']")
	WebElement BAUvenue1Cal;
	
	@FindBy(xpath="//div[@data-room-id='460']//div[@data-hour='14']")
	WebElement BAUvenue2Cal;
	
	@FindBy(xpath="//div[@data-room-id='461']//div[@data-hour='14']")
	WebElement BAUvenue3Cal;
	
	@FindBy(xpath="//div[@data-room-id='459']//div[@data-hour='16']")
	WebElement BAUvenue1Cal2;
	
	@FindBy(xpath="//div[@data-room-id='460']//div[@data-hour='16']")
	WebElement BAUvenue2Cal2;
	
	@FindBy(xpath="//div[@data-room-id='461']//div[@data-hour='16']")
	WebElement BAUvenue3Cal2;
	
	@FindBy(xpath="//div[@data-room-id='466']//div[@data-hour='14']")
	WebElement BAUvenue4Cal;
	
	@FindBy(xpath="//div[@data-room-id='8265']//div[@data-hour='14']")
	WebElement NHSvenue5Cal;
	
	@FindBy(xpath="//div[@data-room-id='8409']//div[@data-hour='14']")
	WebElement NHSvenue6Cal;
	
	@FindBy(xpath="//div[@data-room-id='8406']//div[@data-hour='14']")
	WebElement NHSvenue7Cal;
	
	@FindBy(xpath="//div[@data-room-id='8284']//div[@data-hour='16']")
	WebElement NHSvenue5Cal2;
	
	@FindBy(xpath="//div[@data-room-id='466']//div[@data-hour='16']")
	WebElement NHSvenue6Cal2;
	
	@FindBy(xpath="//div[@data-room-id='8267']//div[@data-hour='14']")
	WebElement clinicalRoom1Cal_NHSonly;
	
	@FindBy(xpath="//div[@data-room-id='17063']//div[@data-hour='14']")
	WebElement clinicalRoom2Cal_NHSonly;
	
	@FindBy(xpath="//a[@id='new_booking_from_selected']")
	WebElement bookingfromCal_Btn;
	
	@FindBy(xpath="//a[text()='Save Booking']")
	WebElement save_Btn;
	
	@FindBy(xpath="//a[text()='Save']")
	WebElement saveEdit_Btn;
	
	@FindBy(xpath = "//div[@class='alert-box success hide-on-print']")
	WebElement success_Msg;
	
	@FindBy(xpath = "//a[text() = 'Clients']")
	WebElement client_tab;
	
	@FindBy(xpath = "//input[contains(@aria-controls,'clients_table')]")
	WebElement search_box;
	
	@FindBy(xpath = "//a[text()='View']")
	WebElement view_link;
	
	@FindBy(xpath="//a[text()='Generate Invoice']")
	WebElement genInvoice_Btn;
	
	@FindBy(xpath="//input[contains(@id,'from_date')]")
	WebElement fromDate_field;
	
	@FindBy(xpath="//input[contains(@id,'to_date')]")
	WebElement toDate_field;
	
	@FindBy(xpath="//a[text()='Generate']")
	WebElement generate_Btn;
	
	@FindBy(xpath="//div[@class='booking status-confirmed payment-billed']")
	WebElement billedBookingOnCalScrn;
	
	@FindBy(xpath="//div[@class='booking status-confirmed payment-unbilled']")
	WebElement unbilledBookingOnCalScrn;
	
	@FindBy(xpath="//a[@class='blue buttonBourbon' and text()='Edit']")
	WebElement editBooking_Btn;
	
	@FindBy(xpath="//a[text()='Mark as Sent']")
	WebElement markAsSent_Btn;
	
	@FindBy(xpath="//div[@class='custom dropdown open']/ul/li[contains(.,'Bowling Machine')]")
	WebElement BAUspaceOpn1;
	
	@FindBy(xpath="//li[contains(.,'Classroom')]")
	WebElement BAUspaceOpn2;

	@FindBy(xpath="//a[contains(@href,'spaces')]")
	List<WebElement> spaceInfo_Link;
	
	@FindBy(xpath="//div[@id='wrap_page']//div[2]/div/h4")
	WebElement calTitle;
	
	@FindBy(xpath="//span/a[@class='blue glyph general' and text()='u']")
	WebElement dateNavForward;
	
	@FindBy(xpath="//span/a[@class='blue glyph general' and text()='v']")
	WebElement dateNavbackward;
	
	@FindBy(xpath="//input[@id='calendar_date']")
	WebElement calender_datePickerField;
	
	@FindBy(xpath="//div[@id='ui-datepicker-div']/div/a/span[text()='Prev']")
	WebElement datePicker_prevLink;
	
	@FindBy(xpath="//div[@id='ui-datepicker-div']/div/a/span[text()='Next']")
	WebElement datePicker_nextLink;
	
	@FindBy(xpath="//div[@id='ui-datepicker-div']/div/div[@class='ui-datepicker-title']/span[@class='ui-datepicker-month']")
	WebElement datePicker_monthTitle;
	
	@FindBy(xpath="//div[@id='ui-datepicker-div']/div/div[@class='ui-datepicker-title']/span[@class='ui-datepicker-year']")
	WebElement datePicker_yearTitle;
	
	@FindBy(xpath="//table[@class='ui-datepicker-calendar']/tbody/tr/td/a[text()='28']")
	WebElement dayOfMonth;
	
	@FindBy(xpath="//select[@id='calendar_category']/following-sibling::div/a")
	WebElement catagory_dd;
	
	@FindBy(xpath="")
	WebElement selectService_dd;
	
	@FindBy(xpath="//select[@id='calendar_category']/following-sibling::div/ul/li")
	List<WebElement> noOfOptionsInDD;
	
	
	
	
	
//================================Initialise web elements created in this class========================================
	
	public Calender_Page() {
	PageFactory.initElements(driver, this);
	}


//==================================================================================================================//	
//=======================================//Test Methods//===========================================================//

	public void verify_clickCalendarTab() throws InterruptedException {
		Thread.sleep(3000);
		calender_tab.click();
		Assert.assertTrue(bookedRoomChkBox.isDisplayed());
		System.out.println("You are on Calenders tab");
	}
	
	public void createNewBooking_Cal() throws InterruptedException {
		try {
			bookRoomChkBox_verify.click();
			Thread.sleep(2000);
		}catch(Exception e)
		{
			}
		//bookedRoomChkBox.click();
	//	if(BAUvenue1Cal.isDisplayed()) {
	//		BAUvenue1Cal.click();
	//		bookingfromCal_Btn.click();
	//	}else if (BAUvenue2Cal.isDisplayed()) {
	//		BAUvenue2Cal.click();
	//		bookingfromCal_Btn.click();
	//		}else if (BAUvenue3Cal.isDisplayed()) {
	//			BAUvenue3Cal.click();
	//			bookingfromCal_Btn.click();
	//		}else if (BAUvenue4Cal.isDisplayed()) {
	//			BAUvenue4Cal.click();
	//			bookingfromCal_Btn.click();
	//		}else if (NHSvenue5Cal.isDisplayed()) {
	//			NHSvenue5Cal.click();
	//			bookingfromCal_Btn.click();
	//		}else {
	//			System.out.println("searched venue is not available");
		//	}
		
		try {
			try {
			BAUvenue1Cal.click();
			bookingfromCal_Btn.click();
			}catch(Exception e1) {
				
			}
	//	}else if (BAUvenue2Cal2.isDisplayed()) {
			try {
				BAUvenue2Cal.click();
				bookingfromCal_Btn.click();
			}catch(Exception e1) {
				
			}
	//		}else if (BAUvenue3Cal2.isDisplayed()) {
				try {
					BAUvenue3Cal.click();
					bookingfromCal_Btn.click();
					}catch(Exception e1) {
						
					}
		//	}else if (NHSvenue5Cal2.isDisplayed()) {
				try {
					NHSvenue5Cal.click();
					bookingfromCal_Btn.click();
					}catch(Exception e1) {
						
					}
		//	}else if (NHSvenue6Cal2.isDisplayed()) {
				try {
					NHSvenue6Cal2.click();
					bookingfromCal_Btn.click();
					}catch(Exception e1) {
						
					}
			}catch (Exception e) {
				System.out.println("searched venue is not available");
			}
		
		
		try {
			Select slct1 =  new Select(booking_page.selectClient_dd);
			slct1.selectByVisibleText("auto auto (AUTO)");
		}catch(Exception e) {
			Select slct1 =  new Select(booking_page.selectClient_dd);
			slct1.selectByVisibleText("auto Auto (auto)");
		}
		driver.findElement(By.xpath("//a[text()='Check Availability']")).click();
		if(driver.findElement(By.xpath("//tbody/tr[contains(@class,'green')]")).isDisplayed()) {
			
			save_Btn.click();
			Thread.sleep(5000);
			driver.findElement(By.xpath("//a[@id='btn-save-booking-with-provisional' and text()='Yes']")).click();
			Thread.sleep(5000);
			try {
				driver.switchTo().alert().accept();
				driver.findElement(By.xpath("//a[@id='btn-save-booking-with-provisional' and text()='Yes']")).click();
				save_Btn.click();
			}catch(Exception e) {
			}
			driver.findElement(By.xpath("//div[@class='booking status-provisional payment-unbilled']//h2[contains(.,'auto')]")).click();
			Thread.sleep(5000);
			driver.findElement(By.xpath("//a[@class='green buttonBourbon' and text()='Confirm']")).click();
			Thread.sleep(5000);
			driver.findElement(By.xpath("//a[@class='green buttonBourbon' and text()='Yes']")).click();
			String msg = success_Msg.getText();
			SoftAssert softAssert = new SoftAssert();
			softAssert.assertTrue(msg.contains("Confirmation email sent to client."));
			softAssert.assertAll();
		}else {
			System.out.println("venue is not available on this date/time");
		}
		
	}
	
	
	public void createNewBookingForCancel_Cal() throws InterruptedException {
		try {
			bookRoomChkBox_verify.click();
			Thread.sleep(2000);
		}catch(Exception e)
		{
			}
	//	bookedRoomChkBox.click();
	//	if(BAUvenue1Cal2.isDisplayed()) {
		try {
			try {
			BAUvenue1Cal2.click();
			bookingfromCal_Btn.click();
			}catch(Exception e1) {
				
			}
	//	}else if (BAUvenue2Cal2.isDisplayed()) {
			try {
				BAUvenue2Cal2.click();
				bookingfromCal_Btn.click();
			}catch(Exception e1) {
				
			}
	//		}else if (BAUvenue3Cal2.isDisplayed()) {
				try {
					BAUvenue3Cal2.click();
					bookingfromCal_Btn.click();
					}catch(Exception e1) {
						
					}
		//	}else if (NHSvenue5Cal2.isDisplayed()) {
				try {
					NHSvenue5Cal2.click();
					bookingfromCal_Btn.click();
					}catch(Exception e1) {
						
					}
		//	}else if (NHSvenue6Cal2.isDisplayed()) {
				try {
					NHSvenue6Cal2.click();
					bookingfromCal_Btn.click();
					}catch(Exception e1) {
						
					}
			}catch (Exception e) {
				System.out.println("searched venue is not available");
			}
		try {
			Select slct1 =  new Select(booking_page.selectClient_dd);
			slct1.selectByVisibleText("auto auto (AUTO)");
		}catch(Exception e) {
			Select slct1 =  new Select(booking_page.selectClient_dd);
			slct1.selectByVisibleText("auto Auto (auto)");
		}
		driver.findElement(By.xpath("//a[text()='Check Availability']")).click();
		if(driver.findElement(By.xpath("//tbody/tr[contains(@class,'green')]")).isDisplayed()) {
			
			save_Btn.click();
			Thread.sleep(5000);
			driver.findElement(By.xpath("//a[@id='btn-save-booking-with-provisional' and text()='Yes']")).click();
			Thread.sleep(5000);
			try {
				driver.switchTo().alert().accept();
				driver.findElement(By.xpath("//a[@id='btn-save-booking-with-provisional' and text()='Yes']")).click();
				save_Btn.click();
			}catch(Exception e) {
			}
			driver.findElement(By.xpath("//div[@class='booking status-provisional payment-unbilled']//h2[contains(.,'auto')]")).click();
			Thread.sleep(5000);
			driver.findElement(By.xpath("//a[@class='green buttonBourbon' and text()='Confirm']")).click();
			Thread.sleep(5000);
			driver.findElement(By.xpath("//a[@class='green buttonBourbon' and text()='Yes']")).click();
			String msg = success_Msg.getText();
			SoftAssert softAssert = new SoftAssert();
			softAssert.assertTrue(msg.contains("Confirmation email sent to client."));
			softAssert.assertAll();
		}else {
			System.out.println("venue is not available on this date/time");
		}
		
	}
	
	
			public void genInvoice_cal() throws InterruptedException {
				Thread.sleep(3000);
				client_tab.click();
				search_box.sendKeys("auto");
				Thread.sleep(6000);
			//	toDate_field.sendKeys(Keys.ENTER);
				Thread.sleep(3000);
				view_link.click();
				Thread.sleep(3000);
				
				genInvoice_Btn.click();
				Thread.sleep(1000);
				fromDate_field.clear();
				Thread.sleep(2000);
				fromDate_field.sendKeys(LocalDate.now().format(DateTimeFormatter.ofPattern("dd/MM/yyyy")));
				Thread.sleep(2000);
				toDate_field.clear();
				Thread.sleep(1000);
				
				toDate_field.sendKeys(LocalDate.now().format(DateTimeFormatter.ofPattern("dd/MM/yyyy")));
				toDate_field.sendKeys(Keys.TAB);
				Thread.sleep(1000);
				generate_Btn.click();
				Thread.sleep(1000);

				markAsSent_Btn.click();	
			}
			
			public void editunbilledBooking_Cal() throws InterruptedException {
				Thread.sleep(2000);
			//	verify_clickCalendarTab();
				unbilledBookingOnCalScrn.click();
				editBooking_Btn.click();
				driver.findElement(By.xpath("//a[text()='this occurrence']")).click();
				Thread.sleep(2000);
			//	driver.switchTo().alert().accept();
				driver.findElement(By.id("start_time")).clear();
				driver.findElement(By.id("start_time")).sendKeys("13:00");
				saveEdit_Btn.click();
			} 
			
			public void editbilledBooking_Cal() throws InterruptedException {
				verify_clickCalendarTab();	
				Thread.sleep(2000);
				billedBookingOnCalScrn.click();
				editBooking_Btn.click();
				driver.findElement(By.xpath("//a[text()='this occurrence']")).click();
				Thread.sleep(2000);
				driver.switchTo().alert().accept();
				Thread.sleep(2000);
				driver.findElement(By.xpath("//select[@id='booking_item_space_id']//following-sibling::div//a[@class='selector' and @href='#']")).click();		
				Thread.sleep(3000);
				try {
					Thread.sleep(5000);
					BAUspaceOpn1.click();
				}catch (Exception e){
					Thread.sleep(5000);
					saveEdit_Btn.click();
			//	}finally {
			//	Thread.sleep(3000);
			//	saveEdit_Btn.click();
				}
			} 
			
			public void verify_cancelBilledBooking() throws InterruptedException {
					verify_clickCalendarTab();	
					Thread.sleep(2000);
					billedBookingOnCalScrn.click();
					booking_page.redCancel_btn.click();
					try {
					driver.findElement(By.xpath("//a[text()='this occurrence']")).click();
					}catch(Exception e){
						
					}
					booking_page.canEmail_chkBox.click();
					booking_page.canReason_txt.sendKeys("Cancel billed booking from calender");
					booking_page.raiseCN_chkBox.click();
					booking_page.raiseCNEmail_chkBox.click();
					Thread.sleep(2000);
					Assert.assertTrue(booking_page.raiseCN_chkBox.isDisplayed());
					Assert.assertTrue(booking_page.raiseCNEmail_chkBox.isDisplayed());
					booking_page.canBooking_btn.click();
					String str = driver.findElement(By.xpath("//h5[contains(text(),'Credit Note')]")).getText();
					System.out.println(str);
					try {
						String str1 = driver.findElement(By.xpath("//a[@data-remote='true' and contains(text(),'Refund')]")).getText();
						System.out.println(str1);	
					}catch (NoSuchElementException e) {
						    System.out.println("No refund option on invoice");
					}
					booking_page.viewClient_btn.click();
					Thread.sleep(1000);
					WebElement cnNumber = driver.findElement(By.xpath("//a[contains(.,'"+str+"')]"));
					System.out.println("to double check cnNumber " + cnNumber.getText());
					String strB = cnNumber.getText();
					Assert.assertEquals(str, strB);									
				}
			
			public void verify_cancelUnBilledBooking() throws InterruptedException {
				
				unbilledBookingOnCalScrn.click();
				booking_page.redCancel_btn.click();
			//	driver.findElement(By.xpath("//a[text()='this occurrence']")).click();
				booking_page.canEmail_chkBox.click();
				booking_page.canReason_txt.sendKeys("Cancel billed booking from calender");
				Thread.sleep(2000);
				assertTrue(!isElementPresent(booking_page.raiseCN_chkBox));
				assertTrue(!isElementPresent(booking_page.raiseCNEmail_chkBox));
				//Assert.assertFalse(booking_page.raiseCN_chkBox.isDisplayed());
				//Assert.assertFalse(booking_page.raiseCNEmail_chkBox.isDisplayed());
				booking_page.canBooking_btn.click();
							
			}
			
			private boolean isElementPresent(WebElement raiseCN_chkBox) {
				// TODO Auto-generated method stub
				return false;
			}


			public void verify_bookableSpaceInfo() {
				try {
					bookRoomChkBox_verify.click();
					Thread.sleep(2000);
				}catch(Exception e)
				{
					}
				int noOfSpaceLinks = spaceInfo_Link.size();
				System.out.println("No of space links presentson the calendar screen are " + noOfSpaceLinks);
				for(int i=1;i<=3;i++) {
					driver.findElement(By.xpath("//div[@id='space-booker']/ul/li["+i+"]/p/a")).click();
					driver.findElement(By.xpath("//a[contains(@href,'spaces') and text()='View']")).click();
					driver.findElement(By.xpath("//a[text()='Back']")).click();
				}
			}
				
			public void verify_dateNavigation() {
				String landingPage = calTitle.getText();
				dateNavForward.click();
				String forward1 = calTitle.getText();
				Assert.assertNotEquals(landingPage,forward1);
				dateNavForward.click();
				String forward2 = calTitle.getText();
				Assert.assertNotEquals(forward1,forward2);
				
				dateNavbackward.click();
				String backward1 = calTitle.getText();
				Assert.assertNotEquals(forward2,backward1);
				dateNavbackward.click();
				String backward2 = calTitle.getText();
				Assert.assertNotEquals(backward1,backward2);
			}
			
			public void verify_enterDate() throws InterruptedException {
				try {
					bookRoomChkBox_verify.click();
					Thread.sleep(2000);
				}catch(Exception e)
				{
					}
				calender_datePickerField.clear();
				Thread.sleep(3000);
				calender_datePickerField.sendKeys("01/01/2021");
				Thread.sleep(1000);
				String landingPage = calTitle.getText();
				System.out.println("Title of the Page is " + landingPage );
				SoftAssert softAssert = new SoftAssert();
				softAssert.assertTrue(landingPage.contains("Friday 01 January, 2021"));
				softAssert.assertAll();
			}
			
			public void verify_selectDateFrmDatePicker() {
				try {
					bookRoomChkBox_verify.click();
					Thread.sleep(2000);
				}catch(Exception e)
				{
					}
				calender_datePickerField.click();
				String currentMonth = datePicker_monthTitle.getText();
				System.out.println("currentMonth " + currentMonth);
				String currentYear = datePicker_yearTitle.getText();
				System.out.println("currentYear " + currentYear);
				System.out.println("Current month/year is " + currentMonth + currentYear);
				datePicker_nextLink.click();
				String nextMonth1 = datePicker_monthTitle.getText();
				System.out.println("nextMonth1 " + nextMonth1);
				Assert.assertNotEquals(currentMonth, nextMonth1);
				dayOfMonth.click();
				String landingPage1 = calTitle.getText();
				System.out.println("landingPage1 " + landingPage1);
				calender_datePickerField.click();
				datePicker_prevLink.click();
				dayOfMonth.click();
				String landingPage2 = calTitle.getText();
				System.out.println("landingPage2 " + landingPage2);
				Assert.assertNotEquals(landingPage1, landingPage2);	
			}
			
			public void verify_selectcatagory() throws InterruptedException {
				
				int i;
				try {
					bookRoomChkBox_verify.click();
					Thread.sleep(1000);
				}catch(Exception e)
				{
					}
				
			//	int noOfSpaceLinks = spaceInfo_Link.size();
			//	System.out.println("No of space links presents on the calendar screen are " + noOfSpaceLinks);
				int noOfOpn = noOfOptionsInDD.size();
				System.out.println("No of options presents in the dropdown are " + noOfOpn);
				
			//	catagory_dd.click();
				for(i=1;i<=noOfOpn;i++) {
					try {
						bookRoomChkBox_verify.click();
						Thread.sleep(1000);
					}catch(Exception e)
					{
						}
					catagory_dd.click();
				    String catName = driver.findElement(By.xpath("//select[@id='calendar_category']/following-sibling::div/ul/li["+i+"]")).getText();
				    Thread.sleep(1000);
				    driver.findElement(By.xpath("//select[@id='calendar_category']/following-sibling::div/ul/li["+i+"]")).click();
				    Thread.sleep(1000);
				    int noOfSpace = spaceInfo_Link.size();
				    System.out.println("Number of spaces for catagory " + catName + " are " + noOfSpace);
				}
			}	
			
			public void verify_viewBookedRooms() throws InterruptedException {
				Thread.sleep(2000);
				catagory_dd.click();
				driver.findElement(By.xpath("//select[@id='calendar_category']/following-sibling::div/ul/li[1]")).click();
				int allbookingspaces = spaceInfo_Link.size();
				System.out.println("No of space links presents on the calendar screen are " + allbookingspaces);
				bookedRoomChkBox.click();
				
				int noOfSpacewithbooking = spaceInfo_Link.size();
				System.out.println("No of space links presents on the calendar screen are " + noOfSpacewithbooking);
				
				Assert.assertFalse(allbookingspaces==noOfSpacewithbooking);
				
			}
			
			public void verify_CreateBookingRestrictions_NHSONLY() throws InterruptedException {
				
				try {
					bookRoomChkBox_verify.click();
					Thread.sleep(2000);
				}catch(Exception e)
				{
					}
			//	if(clinicalRoom1Cal_NHSonly.isDisplayed()) {
				
				try{
					try {
					clinicalRoom1Cal_NHSonly.click();
					bookingfromCal_Btn.click();
				}catch(Exception e1) {
					
				}
		//		}else if (clinicalRoom2Cal_NHSonly.isDisplayed()) {
				try {
					clinicalRoom2Cal_NHSonly.click();
					bookingfromCal_Btn.click();
				}catch(Exception e1) {
					
				}

					}catch(Exception e) {
						System.out.println("searched venue is not available");
					}
				try {
					Select slct1 =  new Select(booking_page.selectClient_dd);
					slct1.selectByVisibleText("april release (apriltest)");
				}catch(Exception e) {
					Select slct1 =  new Select(booking_page.selectClient_dd);
					slct1.selectByVisibleText("auto Auto (auto)");
				}
				
			//	try {
			//		Select serviceslct1 =  new Select(selectService_dd);
			//		serviceslct1.selectByVisibleText("");
			//	}catch(Exception e) {
			//		Select serviceslct2 =  new Select(selectService_dd);
			//		serviceslct2.selectByVisibleText("");
			//	}
				
				
		  //      LocalDate date1= new LocalDate();
		   //     System.out.println(date1);
		    //    System.out.println("LocalDate before" + " adding months: " + date1); 
		     //   LocalDate returnvalue = date1.plusMonths(24); 
		      //  System.out.println("LocalDate after " + " adding months: " + returnvalue); 

				booking_page.startDate.clear();
				booking_page.startDate.sendKeys("01/08/2022");
				booking_page.startTime.clear();
				booking_page.startTime.sendKeys("10:00");
				booking_page.endTime.clear();
				booking_page.endTime.sendKeys("11:00");
				Thread.sleep(2000);
				booking_page.checkAvail_btn.click();
				
				System.out.println("No of bookings Rows " + booking_page.bookingItems_row.size());
				for(int i=1;i<=booking_page.bookingItems_row.size();i++) {
					try {
						  WebElement element1=driver.findElement(By.xpath("//tbody/tr["+i+"][contains(@class,'red')]/td/input[@type='checkbox']"));
						  JavascriptExecutor executor = (JavascriptExecutor) driver;
						  executor.executeScript("arguments[0].click();", element1);
						  System.out.println("Check 1");
					

					} catch (NoSuchElementException e) {}	
				}
					
					Thread.sleep(5000);
					driver.findElement(By.id("cancel_selected_items")).click();
					
					System.out.println("Booking items are " + booking_page.bookingItems_row.size());
					if(booking_page.bookingItems_row.size()!=0) {
						Thread.sleep(10000);
						booking_page.saveBooking_Btn.click();
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
						verify_cancelUnBilledBooking();
					}catch (NoSuchElementException e)
					{
						verify_cancelUnBilledBooking();
					}				
					}else {
						System.out.println("No booking is available on this time date");
					}	
			   }
				
			}

			
				
