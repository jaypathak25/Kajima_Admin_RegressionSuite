package kajima.venueadmin.pom_pages;

import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertTrue;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.annotations.Test;
import org.testng.asserts.SoftAssert;

import com.github.javafaker.Faker;

import kajima.venueadmin.base.TestBase;

public class Clients_Page extends TestBase {

	
	
	@FindBy(xpath = "//a[text() = 'Clients']")
	WebElement client_tab;
	
	@FindBy(xpath = "//input[contains(@aria-controls,'clients_table')]")
	WebElement search_box;
	
	@FindBy(xpath = "//a[text()='View']")
	WebElement view_link;
	
	@FindBy(xpath = "//a[text() = 'New Client User']")
	WebElement new_client_btn;
	
	@FindBy(xpath = "//h6[contains(.,'Adding a User to Client')]")
	WebElement new_client_popup;
	
	@FindBy(name = "user[first_name]")
	WebElement user_fname;
	
	@FindBy(name = "user[last_name]")
	WebElement user_lname;
	
	@FindBy(name = "user[email]")
	WebElement user_email;
	
	@FindBy(xpath = "//input[@id = 'user_contact_type_booking']")
	WebElement booking_chkbx;
	
	@FindBy(xpath = "//input[@id = 'user_contact_type_billing']")
	WebElement billing_chkbx;
	
	@FindBy(xpath = "//select[@id = 'user_role_id']")
	WebElement user_type;
	
	@FindBy(xpath = "//input[@id='user_service_level_client']")
	WebElement allServ_rb;
	
	@FindBy(xpath = "//input[@id='user_service_level_user']")
	WebElement selectServ_rb;
	
	@FindBy(xpath = "//input[@type='checkbox' and @name = 'user[client_service_ids][]']")
	List<WebElement> select_serv;
	
	@FindBy(xpath = "//input[@name='commit']")
	WebElement save_btn;
	
	@FindBy(xpath = "//a[text()='Close']")
	WebElement close_btn;
	
	@FindBy(xpath = "//div[@id='flash_success' and @class ='alert-box success hide-on-print']" )
	WebElement success_Msg;
	
	@FindBy(xpath = "//div[@id='flash_notice' and @class='alert-box success hide-on-print']")
	WebElement unlink_Msg;
	
	
//BELOW IS THE MASTER XPATH , REMEMBER THIS AND CAN BE USED FOR ECVERY SITUATION ON THE TABLE
			
	@FindBy(xpath = "//*[contains(.,'Bill Payer')]/td[contains(.,'Edit User')]")
	WebElement edit_userlink;
	
	@FindBy(xpath = "//td[contains(.,'Edit User')]")
	WebElement edit_BAUuserlink;
	
	@FindBy(xpath = "//*[contains(.,'Booker')]/td[contains(.,'Unlink User')]")
	WebElement unLink_bookeruserlink;
	
	@FindBy(xpath = "//*[contains(.,'Bill Payer')]/td[contains(.,'Unlink User')]")
	WebElement unLink_billPayeruserlink;
	
	@FindBy(xpath = "//*[contains(.,'Bill Payer')]/td[contains(.,'Unlink User')]")
	WebElement unLink_primaryuserlink;
	
	@FindBy(xpath = "//td[contains(.,'Unlink User')]")
	WebElement unLink_BAUuserlink;
	
//===================== below obj Repo for Org admin screen=====================================
	
	@FindBy(xpath = "//h4[contains(.,'Registered Cards')]")
	WebElement regisCard_sec;
	
	@FindBy(xpath = "//a[contains(.,'Remove')]")
	WebElement remove_btn;
	
	@FindBy(xpath = "//a[text() = 'Edit Client']")
	WebElement editClient_btn;
	
	@FindBy(xpath = "//a[text() = 'Add Service']")
	WebElement addServ_btn;
	
	@FindBy(xpath = "//input[@name = 'commit' and @value = 'Update Client']")
	WebElement updateClient_btn;
	
	@FindBy(xpath = "//select[@class='client_service_service_id']//following-sibling::div//child::*[@class='current' and @href='#' and not(text())]")
	WebElement service_dd;
	
	@FindBy(xpath = "//select[@class='client_service_ccg_region_id']//following-sibling::div//child::*[@class='current' and @href='#' and not(text())]")
	WebElement ccg_dd;
	
	@FindBy(xpath = "//input[@class='client_service_service_identifier' and @value='']")
	WebElement servIden_txtbox;
	
	@FindBy(xpath = "//input[@class='client_service_ccg_commissioned custom checkbox']//following-sibling::span[@class='custom checkbox']")
	WebElement ccg_chkbox;
	
	@FindBy(xpath = "//div[@class = 'error_messages']")
	WebElement dupserv_err;
	
	@FindBy(xpath= "//table[@id='client-services']/tbody/tr/td[5]/span[@class='custom checkbox']")
	WebElement servStatus_Unticked;
	
	@FindBy(xpath= "//table[@id='client-services']/tbody/tr/td[5]/span[@class='custom checkbox checked']")
	WebElement servStatus_Ticked;
	
	@FindBy(xpath = "//h4[contains(.,'Account Activity')]")
	WebElement accAct_section;
	
	@FindBy(xpath = "//a[@data-remote = 'true' and contains(.,'Payment')]")
	List<WebElement> payments_links;
	
	@FindBy(xpath="//a[contains(@title,'Includes bookings')]")
	List<WebElement> invoice_Links;
	
	@FindBy(xpath ="//a[contains(text(),'Credit Note ')]")
	List<WebElement> creditNote_Links;
	
	@FindBy(xpath = "//a[@data-remote='true' and contains(.,'Refund #')]")
	List<WebElement> refund_Links;
	
	@FindBy(xpath = "//input[@value='Add note']")
	WebElement addNote_Btn;
	
	@FindBy(xpath = "//textarea[@class='small_note']")
	WebElement noteTxt_Field;
	
	@FindBy(xpath = "//a[@class='blue buttonBourbon submit_button']")
	WebElement saveBtn_PayPopUp;
	
	@FindBy(xpath = "//a[@class='grey buttonBourbon close-modal-button']")
	WebElement closeBtn_PayPopUp;

	@FindBy(xpath="//a[@data-remote='true' and contains(text(),'#')]")
	WebElement payLink_inInvoice;
	
	@FindBy(xpath="//a[@data-remote='true' and contains(text(),'Refund')]")
	WebElement refundLink_inInvoice;
	
	@FindBy(xpath="//a[@class = 'buttonBourbon grey hide-on-print' and contains(.,'View Client')]")
	WebElement viewClientLink_inInvoice;
	
	@FindBy(xpath="/html/body/div[3]/div/div/div/table/tbody/tr")
	List<WebElement> servTblRows_ClntScrn;
	
	@FindBy(xpath="//a[@class='js-delete-client-service' and text()='Delete']")
	WebElement servDel_Link;
	
	@FindBy(xpath="//a[@class='buttonBourbon grey' and text()='Cancel']")
	WebElement canBtn_editClientScrn;
	
	@FindBy(xpath = "/html/body/div[3]/div/div/div/table/tbody/tr[1]/td[5]")
	WebElement serv_status;
	
	@FindBy(xpath = "//input[contains(@id,'active')]//ancestor::td//span[contains(@class,'checked')]")
	WebElement checked_actServ;
	
	@FindBy(xpath = "//input[contains(@id,'active')]//ancestor::td//span[not(contains(@class,'checked'))]")
	WebElement unchecked_actServ;
	
	@FindBy(xpath="//a[contains(text(),'Generate Invoice')]")
	WebElement genInvoice_Btn;
	
	@FindBy(xpath="//a[contains(text(),'New Payment')]")
	WebElement newPayment_Btn;
	
	@FindBy(xpath="//a[contains(text(),'Raise Credit Note')]")
	WebElement raiseCN_Btn;
	
	@FindBy(xpath="//a[contains(text(),'New Refund')]")
	WebElement newRefund_Btn;
	
	@FindBy(xpath="//a[contains(text(),'New Document')]")
	WebElement newDocument_Btn;
	
	@FindBy(xpath="//input[@id='client_document_attached_file']")
	WebElement docBrowse_Btn;
	
	@FindBy(xpath="//a[text()='Save']")
	WebElement save_Btn;
	
	@FindBy(xpath="//a[text()='Add Reminder']")
	WebElement addReminder_Link;
	
	@FindBy(xpath="//a[text()='Archive']")
	WebElement archive_Link;
	
	@FindBy(xpath="//a[text()='Restore']")
	WebElement restore_Link;
	
	@FindBy(xpath="//a[text()='Show Archived Clients']")
	WebElement showArcClient_Link;
	
	@FindBy(xpath="//a[@class='selector' and @href='#']")
	WebElement payMethod_dd;
	
	@FindBy(xpath="//input[@id='payment_amount']")
	WebElement payAmount_field;
	
	@FindBy(xpath="//button[text()='Create Payment']")
	WebElement createPay_Btn;
	
	@FindBy(id="payment_notes")
	WebElement pay_notes;
	
	@FindBy(xpath = "//li[contains(.,'Bank Transfer')]")
	WebElement payMethod_ddOpn;
	
	@FindBy(xpath = "//input[@class='input-text'][contains(@id,'cost')]")
	WebElement cn_valueTxt;
	
	@FindBy(xpath = "//textarea[contains(@id,'description')]")
	WebElement cn_descTxt;
	
	@FindBy(xpath = "//input[@type='text'][contains(@id,'reason')]")
	WebElement cn_reasonTxt;
	
	@FindBy(xpath="//button[text()='Create Credit Note']")
	WebElement createCN_Btn;
	
	@FindBy(xpath = "//input[@class='input-text'][contains(@id,'amount')]")
	WebElement refund_valueTxt;
	
	@FindBy(xpath = "//textarea[@name='refund[notes]']")
	WebElement refund_notesTxt;

	@FindBy(xpath="//button[text()='Create Refund']")
	WebElement createRefund_Btn;
	
	@FindBy(xpath="//input[@name='statement[from_date]']")
	WebElement genInvoice_fromDate;
	
	@FindBy(xpath = "//input[@name='statement[to_date]']")
	WebElement genInvoice_toDate;
	
	@FindBy(xpath = "//a[contains(.,'Generate')]")
	WebElement genInvoice_Btn2;
	
	@FindBy(id = "client_contact_last_name")
	WebElement clientLName_field;
	
	@FindBy(xpath = "//a[@class='blue buttonBourbon' and text()='Edit']")
	WebElement editBooking_Link;
	
	@FindBy(id = "client_notes")
	WebElement clientNote_field;
	
	@FindBy(xpath = "//input[@id='booking_purchase_order']")
	WebElement editBookingPO_field;
	
	@FindBy(xpath = "//input[@name='commit' and @value='Save Booking']")
	WebElement editBookingSave_Btn;

	@FindBy(xpath="//a[text()='Add Reminder']")
	WebElement addRemin_Link;
	
	@FindBy(xpath="//input[@id='reminder_remind_at']")
	WebElement addReminDate_field;
	
	@FindBy(xpath="//input[@id='reminder_notes']")
	WebElement addReminNote_field;
	  
	@FindBy(xpath="//a[text()='Create a Reminder']")
	WebElement createRemin_Link;
	
	@FindBy(xpath="//span[@style='float: right;']/a[@class='green buttonBourbon' and text()= 'Action']")
	WebElement remindAction_Btn;
	
	@FindBy(xpath="//label[@style='display:inline-block;' and text() = 'Mark as actioned']")
	WebElement reminAction_chkBox;
	
	@FindBy(xpath="//input[@id='reminder_action' and @name='reminder[action]']")
	WebElement reminAction_field;


	
	
	//TABLE TITLE
	//table[@id='client-services']/thead/tr/th[1]
	//table[@id='client-services']/thead/tr/th[2]
	
	//Service DD
	//table[@id='client-services']/tbody/tr[1]/td[1]/div/a[2]
	//table[@id='client-services']/tbody/tr[2]/td[1]/div/a[2]
	
	//CCG DD
	//table[@id='client-services']/tbody/tr[1]/td[4]/div/a[2]
	//table[@id='client-services']/tbody/tr[2]/td[4]/div/a[2]
	
	//SI text field		
	//*[@id="client_client_services_attributes_0_service_identifier"]
	//*[@id="client_client_services_attributes_1_service_identifier"]
			
	//ccg checkbox
	//table[@id='client-services']/tbody/tr[1]/td[3]/span
	//table[@id='client-services']/tbody/tr[2]/td[3]/span
	
	//table[@id='client-services']/tbody/tr/td[5]/span[@class='custom checkbox']
	//table[@id='client-services']/tbody/tr/td[5]/span[@class='custom checkbox checked']
	
	//table[@id='client-services'/tbody/tr[1]/td[5]
	//table[@id='client-services'/tbody/tr[2]/td[5]
	
	
	
//================================Initialise web elements created in this class========================================
	
	public Clients_Page() {
	PageFactory.initElements(driver,this);
	}
	
//==================================================================================================================//	
//=======================================//Test Methods//===========================================================//
	
	public void check_col() {
		List<WebElement> cols = driver.findElements(By.xpath("//table[@id='client-services']/thead/tr/th"));
		int colnum = cols.size();
		System.out.println("NUMBER OF COL : " + colnum);
		String beforexpath = "//table[@id='client-services']/thead/tr/th[";
		String afterxpath = "]";
		for(int i =1;i<=colnum;i++) {
			String actualxpath= beforexpath+i+afterxpath;
			WebElement ele = driver.findElement(By.xpath(actualxpath));
			System.out.println(ele.getText());
			if(ele.getText().equals("CCG Region")) {
				System.out.println("Col name" + ele.getText() + "is found at postion" + (i));
				break;	
			}
		}	
	}
	
//==================================================================================================//
	
	public void add_newServices() {
		List<WebElement> rows = driver.findElements(By.xpath("//table[@id='client-services']/tbody/tr"));
		int rownum = rows.size();
		System.out.println("NUMBER OF ROWS: " + rownum);
		
		String beforexpath0 = "//table[@id='client-services']/tbody/tr[";
		String afterxpath0 = "]/td[1]/div/a[2]";	
		String servicedd= beforexpath0+(rownum)+afterxpath0;
		WebElement ele0 = driver.findElement(By.xpath(servicedd));
		ele0.click();
		
		String beforexpathA = "//table[@id='client-services']/tbody/tr[";
		String afterxpathA = "]/td[1]/div/ul/li[4]";
		String selectservice= beforexpathA+(rownum)+afterxpathA;
		WebElement eleA = driver.findElement(By.xpath(selectservice));
		eleA.click();
		
		String beforexpath1 = "//*[@id='client_client_services_attributes_";
		String afterxpath1 = "_service_identifier']";
		String SItxt= beforexpath1+(rownum-1)+afterxpath1;
		WebElement ele1 = driver.findElement(By.xpath(SItxt));
		ele1.sendKeys("AutomateSI");
		
		String beforexpath2 = "//table[@id='client-services']/tbody/tr[";
		String afterxpath2 = "]/td[3]/span";
		String ccgchkbox= beforexpath2+(rownum)+afterxpath2;
		WebElement ele2 = driver.findElement(By.xpath(ccgchkbox));
		ele2.click();
		
		String beforexpath4 = "//table[@id='client-services']/tbody/tr[";
		String afterxpath4 = "]/td[4]/div/a[2]";
		String ccgdd= beforexpath4+(rownum)+afterxpath4;
		WebElement ele4 = driver.findElement(By.xpath(ccgdd));
		ele4.click();
		
		String beforexpath5 = "//table[@id='client-services']/tbody/tr[";
		String afterxpath5 = "]/td[4]/div/ul/li[3]";
		String selectccg= beforexpath5+(rownum)+afterxpath5;
		WebElement ele5 = driver.findElement(By.xpath(selectccg));
		ele5.click();
	}
	
//==================================================================================================//
	
	public void add_diffServices() {		
		List<WebElement> rows = driver.findElements(By.xpath("//table[@id='client-services']/tbody/tr"));
		int rownum = rows.size();
		System.out.println("NUMBER OF ROWS: " + rownum);
		
		String beforexpath0 = "//table[@id='client-services']/tbody/tr[";
		String afterxpath0 = "]/td[1]/div/a[2]";	
		String servicedd= beforexpath0+(rownum)+afterxpath0;
		WebElement ele0 = driver.findElement(By.xpath(servicedd));
		ele0.click();
		
		String beforexpathA = "//table[@id='client-services']/tbody/tr[";
		String afterxpathA = "]/td[1]/div/ul/li[4]";
		String selectservice= beforexpathA+(rownum)+afterxpathA;
		WebElement eleA = driver.findElement(By.xpath(selectservice));
		eleA.click();
		
		String beforexpath1 = "//*[@id='client_client_services_attributes_";
		String afterxpath1 = "_service_identifier']";
		String SItxt= beforexpath1+(rownum-1)+afterxpath1;
		WebElement ele1 = driver.findElement(By.xpath(SItxt));
		ele1.sendKeys("AutomateSI-TWO");
		
		String beforexpath2 = "//table[@id='client-services']/tbody/tr[";
		String afterxpath2 = "]/td[3]/span";
		String ccgchkbox= beforexpath2+(rownum)+afterxpath2;
		WebElement ele2 = driver.findElement(By.xpath(ccgchkbox));
		ele2.click();
		
		String beforexpath4 = "//table[@id='client-services']/tbody/tr[";
		String afterxpath4 = "]/td[4]/div/a[2]";
		String ccgdd= beforexpath4+(rownum)+afterxpath4;
		WebElement ele4 = driver.findElement(By.xpath(ccgdd));
		ele4.click();
	
		String beforexpath5 = "//table[@id='client-services']/tbody/tr[";
		String afterxpath5 = "]/td[4]/div/ul/li[4]";
		String selectccg= beforexpath5+(rownum)+afterxpath5;
		WebElement ele5 = driver.findElement(By.xpath(selectccg));
		ele5.click();
	}
	
//==================================================================================================//
	
	public void clicktab() throws InterruptedException {
		client_tab.click();
		Thread.sleep(1000);
	}
	
//==================================================================================================//
	
	public void search_client(){
		search_box.sendKeys(prop.getProperty("alternate_Org_name"));
		//Org_name
	}
	
//==================================================================================================//
	
	public void click_view() {
		try {
			view_link.click();
		}catch(Exception e) {
			driver.findElement(By.xpath("//input[@type='text' and @aria-controls='clients_table']")).clear();
			search_box.sendKeys(prop.getProperty("alternate_Org_name"));
			view_link.click();
		}
	}
	
//==================================================================================================//

	public void click_newClientBtn() {
		new_client_btn.click();
		//assertTrue(driver.getTitle().contains("07888110"));
	}
	
//==================================================================================================//
	
	public void verify_newClientPopUp() {
		try{
		    if(user_type.isDisplayed()){
		    	System.out.println("YOU are using NHSPS environment");
		    }
		}catch(Exception e){
			System.out.println("Message 1: YOU are using BAU environment");
		}
		
		try {
			if(user_type.isDisplayed()) {
		Select dropDown = new Select(user_type);
		List<WebElement> e = dropDown.getOptions();
		int itemCount = e.size();

		for(int i = 1; i < itemCount; i++)
		{
		    System.out.println(e.get(i).getText());
		}}
		}catch(Exception e) {
			System.out.println("Message 2 : YOU are using BAU environment");
			}
	}
	
//==================================================================================================//
	
	public void enter_mandatoryfields() {
		Faker faker = new Faker();
		String fname1 = faker.name().firstName();
		user_fname.sendKeys(fname1);
		String lname1 = faker.name().lastName();
		user_lname.sendKeys(lname1);
		user_email.sendKeys(fname1 +"@test.com");
		booking_chkbx.click();
	//	billing_chkbx.click();	
	}
	
//==================================================================================================//
	
	public void edit_mandatoryfields() {
		Faker faker = new Faker();
		String fname1 = faker.name().firstName();
		user_fname.clear();
		user_fname.sendKeys(fname1);
		user_email.clear();
		user_email.sendKeys(fname1 +"@test.com");
		//booking_chkbx.click();
		billing_chkbx.click();	
	}
	
//==================================================================================================//
	
	public void create_primaryUser() {
		Select dropDown1 = new Select(user_type);
			if(user_type.isDisplayed()) {
			dropDown1.selectByVisibleText("Primary User");
			save_btn.click();
			}		
	}	
	
//==================================================================================================//
	
	public void create_billPayerUser() {
		Select dropDown2 = new Select(user_type);
			if(user_type.isDisplayed()) {
			dropDown2.selectByVisibleText("Bill Payer");
			save_btn.click();
			}	
	}
	
//==================================================================================================//
	
	public void create_clientBooker() {
		Select dropDown3 = new Select(user_type);
			if(user_type.isDisplayed()) {
			dropDown3.selectByVisibleText("Booker");
			allServ_rb.click();
			save_btn.click();
			}	
	}
	
//==================================================================================================//
	
	public void create_servBooker() {
		Select dropDown4 = new Select(user_type);
			if(user_type.isDisplayed()) {
			dropDown4.selectByVisibleText("Booker");
			selectServ_rb.click();
			for(WebElement serv : select_serv) {
				serv.click();
			}
			save_btn.click();
			}		
	}

//=======================================Just for BAU===========================================================//
	
	public void create_newBAUUser() {
			save_btn.click();		
	}
	
//==================================================================================================//
	
	public void verify_newUserCreated() {
		String success_msg = success_Msg.getText();
		SoftAssert softAssert = new SoftAssert();
		softAssert.assertTrue(success_msg.contains("New user created and welcome email sent"));
		softAssert.assertAll();
	}
	
//==================================================================================================//
	
	public void verify_newUserupdated() {
		String success_msg = success_Msg.getText();
		SoftAssert softAssert = new SoftAssert();
		softAssert.assertTrue(success_msg.contains("User updated"));
		softAssert.assertAll();
	}
	
//==================================================================================================//
	
	public void verify_userUnlink() {
		String ulink_msg = unlink_Msg.getText();	
		SoftAssert softAssert = new SoftAssert();
		softAssert.assertTrue(ulink_msg.contains("User Unlinked"));
		softAssert.assertAll();
	}
	
//===========================================INCOMPLETE TEST======================================================//
	

	
//==================================================================================================//
	
	public void click_editUser() {
	try {
		if(edit_userlink.isDisplayed()) {
			edit_userlink.click();
		}else {
			if(edit_BAUuserlink.isDisplayed())
			edit_BAUuserlink.click();
		}}catch (Exception e) {
			System.out.println(e);
		}
	}
	
//==================================================================================================//
	
	public void edit_OpnfromDD() {
		Select dropDown5 = new Select(user_type);
		try{
			if (user_type.isDisplayed()) {
			dropDown5.selectByVisibleText("Booker");
			selectServ_rb.click();
			}
			save_btn.click();
	 	 }catch (Exception e) {
	 		save_btn.click();
			}	
		}
	
//==================================================================================================//
	
	public void click_unLinkUser() {
	try {
		if(unLink_bookeruserlink.isDisplayed()) {
			unLink_bookeruserlink.click();
		}else if 
			(unLink_billPayeruserlink.isDisplayed()) {
				unLink_billPayeruserlink.click();
		}else if 
			(unLink_primaryuserlink.isDisplayed()) {
			unLink_primaryuserlink.click();
		}	
		else if
		(edit_BAUuserlink.isDisplayed()) {
			edit_BAUuserlink.click();
		}
		}catch (Exception e) {
			System.out.println(e);
		}
	}
	
//==================================================================================================//
	
	public void verify_regiCardSection() {
		if(regisCard_sec.isDisplayed()){
		String crdMsg = regisCard_sec.getText();
		Assert.assertTrue(crdMsg.contains("Registered Cards"));
		}
	}
	
//==================================================================================================//
	
	public void verify_removeCard() {
		String success_msg = unlink_Msg.getText();
		SoftAssert softAssert = new SoftAssert();
		softAssert.assertTrue(success_msg.contains("Card removed successfully"));
		softAssert.assertAll();
	}
	
//==================================================================================================//
	
	public void verify_updateClient() {
		String success_msg = unlink_Msg.getText();
		SoftAssert softAssert = new SoftAssert();
		softAssert.assertTrue(success_msg.contains("Client was successfully updated."));
		softAssert.assertAll();
	}
	
//==================================================================================================//

	public void click_Cancel() {
		driver.switchTo().alert().dismiss(); //Confirmation Alert on the screen
	}
	
//==================================================================================================//
	
	public void click_Ok() {
		driver.switchTo().alert().accept(); //Confirmation Alert on the screen
	}
	
//==================================================================================================//
	
	public void click_removeCardLnk() {
		if(remove_btn.isDisplayed()) {
			click_Cancel();
			remove_btn.click();
			click_Ok();
			verify_removeCard();
		}
		else {
		System.out.println("No card is registered for this client so card find the remove link");
		}
	
		
		
	}
	
//==================================================================================================//
	
	public void click_editClientBtn() {
		editClient_btn.click();
	}
	
//==================================================================================================//
	
	public void click_updateClientBtn() {
		updateClient_btn.click();
	}
	
//==================================================================================================//
	
	public void click_addServBtn() {
		addServ_btn.click();
	}
	
//==================================================================================================//
	
	public void verify_dupServErr() {
		String supserv_err = dupserv_err.getText();
		System.out.println(supserv_err);
		SoftAssert softAssert = new SoftAssert();
		softAssert.assertTrue(supserv_err.contains("Client services service already exists in this combination of service, CCG region and identifier\r\n" + 
				"Client services service must be unique for its combination of service, CCG region and identifier"));
		softAssert.assertAll();
	}
	
//==================================================================================================//
	
	public void verify_clickPayLink() throws InterruptedException {
		if(accAct_section.isDisplayed()) { 
			int noOfPayLinks = payments_links.size();
			System.out.println("No Of Payment Links displays in Account activity are " + noOfPayLinks ); 
			for(int i=0;i<noOfPayLinks;i++) { 
				String payID = payments_links.get(i).getText();
				System.out.println(payID);
				payments_links.get(i).click();
				Thread.sleep(1000);
				 try 
				 { 
					 addNote_Btn.click(); 
					 noteTxt_Field.sendKeys("Automated notes for "+ payID);
					 saveBtn_PayPopUp.click(); 
					 String msg = unlink_Msg.getText();
					 SoftAssert softAssert = new SoftAssert();
					 softAssert.assertTrue(msg.contains("Payment was successfully updated."));
					 softAssert.assertAll();		 
				 } 
				 catch (Exception e) {
					 closeBtn_PayPopUp.click();
				 }	
				Thread.sleep(2000);
			}	
		}	
	}
	
//==================================================================================================//
	
	public void verify_InvoiceLink() throws InterruptedException {
		if(accAct_section.isDisplayed()) { 
			int noOfInvoiceLinks = invoice_Links.size();
			System.out.println("No Of Invoice Links displays in Account activity are " + noOfInvoiceLinks ); 
			for(int i=0;i<noOfInvoiceLinks;i++) { 
				String InvoiceID = invoice_Links.get(i).getText();
				System.out.println(InvoiceID);
				invoice_Links.get(i).click();
				Thread.sleep(1000);
				try
				 {
					 payLink_inInvoice.click();
					 Thread.sleep(1000);
					 closeBtn_PayPopUp.click();
					 Thread.sleep(1000);
					 viewClientLink_inInvoice.click();
				 } 
				 catch (Exception e) {
					 viewClientLink_inInvoice.click();
				 }
				Thread.sleep(1000);
			}	
		}	
	}
	
//==================================================================================================//
	
	public void verify_CreditNoteLink() throws InterruptedException {
		if(accAct_section.isDisplayed()) { 
			int noOfCNLinks = creditNote_Links.size();
			System.out.println("No Of CN Links displays in Account activity are " + noOfCNLinks); 
			for(int i=0;i<noOfCNLinks;i++) { 
				String CNID = creditNote_Links.get(i).getText();
				System.out.println(CNID);
				creditNote_Links.get(i).click();
				Thread.sleep(1000);
				try
				 {
					refundLink_inInvoice.click();
					 Thread.sleep(1000);
					 closeBtn_PayPopUp.click();
					 Thread.sleep(1000);
					 viewClientLink_inInvoice.click();
				 } 
				 catch (Exception e) {
					 viewClientLink_inInvoice.click();
				 }
				Thread.sleep(1000);
			}	
		}	
	}
	
//==================================================================================================//
	
	public void verify_refundLink() throws InterruptedException {
		if(accAct_section.isDisplayed()) { 
			int noOfRefundLinks = refund_Links.size();
			System.out.println("No Of refund Links displays in Account activity are " + noOfRefundLinks); 
			for(int i=0;i<noOfRefundLinks;i++) { 
				String refundID = refund_Links.get(i).getText();
				System.out.println(refundID);
				Thread.sleep(1000);
				refund_Links.get(i).click();
				Thread.sleep(1000);
				closeBtn_PayPopUp.click();
				 }
			Thread.sleep(1000);
		}	
	}	
	
//==================================================================================================//
	
	public void verify_deleteService() {
		int noOfServs1 = servTblRows_ClntScrn.size();
		System.out.println("No. of services displayed before attempting to delete service are " + noOfServs1);
		editClient_btn.click();
		try
		 {
			Thread.sleep(2000);
			servDel_Link.click();
			Thread.sleep(2000);
			updateClient_btn.click();
			Thread.sleep(500); 
		 } 
		 catch (Exception e) {
			canBtn_editClientScrn.click();
		 }
		int noOfServs2 = servTblRows_ClntScrn.size();
		System.out.println("No. of services displayed after attempting to delete service are " + noOfServs2);
		
		 if(noOfServs1==noOfServs2){
			System.out.println("No service was deleted");
		}else{
			System.out.println("Service is deleted");
		} 
	}

//==================================================================================================//
	
	public void verify_ActiveStatus() {
		
		String servStatus1 = serv_status.getText();
		System.out.println("Status of service is " + servStatus1 + "Before edit" );
		editClient_btn.click();
		try {
			checked_actServ.click();
			updateClient_btn.click();
		}
		catch (Exception e) {
			canBtn_editClientScrn.click();
		}
		String servStatus2 = serv_status.getText();
		System.out.println("Status of service is " + servStatus2 + "after edit" );
		
		 if(servStatus1==servStatus2){
			 System.out.println("No service was made Inactive");
		 }else{
			 System.out.println("Service was made Inactive");
		 } 
	}
	
//==================================================================================================//
	
	public void verify_archiveClient() {
		driver.navigate().back();
		search_box.clear();
		search_box.sendKeys("ARCHTEST");
		archive_Link.click();
		driver.switchTo().alert().dismiss();
		archive_Link.click();
		driver.switchTo().alert().accept();
		String success_msg = unlink_Msg.getText();	
		SoftAssert softAssert = new SoftAssert();
		softAssert.assertTrue(success_msg.contains("Client was successfully archived"));
		softAssert.assertAll();

	}

//==================================================================================================//
	
	public void verify_restoreClient() {
		showArcClient_Link.click();
		restore_Link.click();
		driver.switchTo().alert().dismiss();
		restore_Link.click();
		driver.switchTo().alert().accept();
		String success_msg = unlink_Msg.getText();
		SoftAssert softAssert = new SoftAssert();
		softAssert.assertTrue(success_msg.contains("restored"));
		softAssert.assertAll();
	}
	
//==================================================================================================//
	
   public void verify_addNewPayment() throws InterruptedException {
	   Thread.sleep(1000);
	   newPayment_Btn.click();
	   payMethod_dd.click();
	   Thread.sleep(1000);
	
	   payMethod_ddOpn.click();
	
	   payAmount_field.clear();
	   payAmount_field.sendKeys("2.00");
	   pay_notes.sendKeys("Automation Notes");
	
	   createPay_Btn.click();
	   String success_msg = unlink_Msg.getText();
	   SoftAssert softAssert = new SoftAssert();
	   softAssert.assertTrue(success_msg.contains("Payment was successfully created."));
	   softAssert.assertAll();

	   int noOfPayLinks = payments_links.size();
	   System.out.println("No Of Payment Links displays in Account activity are " + noOfPayLinks ); 
	 
	   String payID = payments_links.get(noOfPayLinks-1).getText();
	   System.out.println("New payment created with ID " + payID);

   }
   
 //==================================================================================================//
   
   public void verify_raiseCN() throws InterruptedException {
	   Thread.sleep(1000);
	   raiseCN_Btn.click();
	   cn_valueTxt.clear();
	   cn_valueTxt.sendKeys("2.00");
	   cn_descTxt.sendKeys("Automated CN raised");
	   cn_reasonTxt.sendKeys("Reason is Automation");
	   createCN_Btn.click();
	
	   String success_msg = unlink_Msg.getText();
	   SoftAssert softAssert = new SoftAssert();
	   softAssert.assertTrue(success_msg.contains("Credit note was successfully created."));
	   softAssert.assertAll();

	   int noOfCNLinks = creditNote_Links.size();
	   System.out.println("No Of CN Links displays in Account activity are " + noOfCNLinks); 
	 
	//   String CNID = creditNote_Links.get(noOfCNLinks-1).getText();
	   String CNID = creditNote_Links.get(noOfCNLinks-1).getText();
	   System.out.println("New CN raised with ID " + CNID);
	  
   }
	
 //==================================================================================================//
   
   public void verify_createRefund() throws InterruptedException {
	   Thread.sleep(1000);
	   newRefund_Btn.click();
	   refund_valueTxt.clear();
	   refund_valueTxt.sendKeys("2.00");
	   refund_notesTxt.sendKeys("Automated Refund created");

	   createRefund_Btn.click();
	
	   String success_msg = unlink_Msg.getText();
	   SoftAssert softAssert = new SoftAssert();
	   softAssert.assertTrue(success_msg.contains("Refund was successfully created."));
	   softAssert.assertAll();

	   int noOfRefundLinks = refund_Links.size();
	   System.out.println("No Of refund Links displays in Account activity are " + noOfRefundLinks);  
	 
	   String refundID = refund_Links.get(noOfRefundLinks-1).getText();
	   System.out.println("New refund created with ID " + refundID);
	   
   }

 //==================================================================================================//
   
   public void view_bookingsEdit() throws InterruptedException {

		   
	   List<WebElement> bookingRows = driver.findElements(By.xpath("//*[@id='admin_client_bookings_table']//child::tbody/tr"));
	   int bookRowNum = bookingRows.size();
	   System.out.println("NUMBER OF ROWS: " + bookRowNum);

	   bookingRows.get(bookRowNum-(bookRowNum-1)).click();
		
	   String bID = driver.findElement(By.xpath("//h4[contains(.,'Booking #')]")).getText();
	   SoftAssert softAssert = new SoftAssert();
	   softAssert.assertTrue(bID.contains("Booking #"));
	   softAssert.assertAll();
		
	   System.out.println("You are on view bookings page of booking ID " + bID);
	   editBooking_Link.click();
	   editBookingPO_field.clear();
	   editBookingPO_field.sendKeys("AUTOPO");
	   JavascriptExecutor js = (JavascriptExecutor) driver;
	   js.executeScript("window.scrollBy(0,1000)");
		
	   editBookingSave_Btn.click();
	   try {
			driver.findElement(By.xpath("//a[text()='Yes']")).click();
			String success_msg = unlink_Msg.getText();
			SoftAssert softAssert2 = new SoftAssert();
			softAssert2.assertTrue(success_msg.contains("Booking was successfully updated."));
			softAssert2.assertAll();
			
		}catch(Exception e1){
			String success_msg = unlink_Msg.getText();
			SoftAssert softAssert2 = new SoftAssert();
			softAssert2.assertTrue(success_msg.contains("Booking was successfully updated."));
			softAssert2.assertAll();
			} 	
   }

 //==================================================================================================//
   
   public void verify_uploadDoc() {
	   newDocument_Btn.click();
	   docBrowse_Btn.sendKeys("C:\\Users\\User\\Desktop\\Automation.PDF");
	   save_Btn.click();
	   String success_msg = unlink_Msg.getText();
	   SoftAssert softAssert2 = new SoftAssert();
	   softAssert2.assertTrue(success_msg.contains("Document uploaded."));
	   softAssert2.assertAll();
	}

 //==================================================================================================//
   
   public void verify_addReminderToDoc() {
	   addRemin_Link.click();
	   addReminDate_field.sendKeys("31/05/2020");
	   addReminNote_field.sendKeys("Automation Notes");
	   save_Btn.click();
	   String remindTxt = driver.findElement(By.xpath("//td[contains(@id,'doc_reminder')]/a[@data-remote='true' and contains(text(),'Note')]")).getText();
	   SoftAssert softAssert = new SoftAssert();
	   softAssert.assertTrue(remindTxt.contains("Automation Notes"));
	   softAssert.assertAll();
   }
   
 //==================================================================================================//
   
   public void verify_addReminderToClient() throws InterruptedException {
	   createRemin_Link.click();
	   addReminDate_field.sendKeys("13/05/2020");
	   addReminNote_field.sendKeys("Automation Notes");
	   save_Btn.click();
	   String remindTxt = driver.findElement(By.xpath("//*[@class='alert-box hide-on-print']//p")).getText();
	   SoftAssert softAssert = new SoftAssert();
	   softAssert.assertTrue(remindTxt.contains("You have a reminder set for this client for"));
	   softAssert.assertAll();
	   Thread.sleep(2000);
	   remindAction_Btn.click();
	   reminAction_chkBox.click();
	   reminAction_field.sendKeys("Automation Actioned");
	   save_Btn.click();
	  
   }
   
 //==================================================================================================//
   
   public void verify_editClientDetails() throws InterruptedException {
	   editClient_btn.click();
	   clientLName_field.clear();
	   clientLName_field.sendKeys("Auto");
	   clientNote_field.sendKeys("AutoNOTES1");
	   updateClient_btn.click();
	   String msg = unlink_Msg.getText();
	   SoftAssert softAssert = new SoftAssert();
	   softAssert.assertTrue(msg.contains("Client was successfully updated."));
	   softAssert.assertAll();	
	   }
   
   //====================================BAU methods ========================
   
   public void verify_createNewUserBAU() {
	   click_newClientBtn();
	   enter_mandatoryfields();
	   create_newBAUUser();
	   verify_newUserCreated();   
   }
   
   public void verify_editNewUserBAU() throws InterruptedException {
	   Thread.sleep(2000);
	   driver.findElement(By.xpath("//a[text()='Edit User']")).click();
	   Thread.sleep(2000);
	   edit_mandatoryfields();
	   create_newBAUUser();
	   verify_newUserupdated();      
   }
   
   public void verify_unLinkNUserBAU() throws InterruptedException {
	   driver.findElement(By.xpath("//a[text()='Unlink User']")).click();
	   Thread.sleep(2000);
	   click_Cancel();
	   driver.findElement(By.xpath("//a[text()='Unlink User']")).click();
	   click_Ok();
	   verify_userUnlink();      
   }

}