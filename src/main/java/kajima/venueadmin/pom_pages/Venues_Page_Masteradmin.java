package kajima.venueadmin.pom_pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

// import kajima.master_admin_regression_base.TestBase;

public class Venues_Page_Masteradmin //extends TestBase {
{
	
	@FindBy(xpath = "//a[contains(text(),'Venues')]")
	WebElement venue_tab;
	
	@FindBy(xpath = "//a[contains(text(),'See All Venues')]")
	WebElement seeallvenue_link;
	
	@FindBy(xpath = "//a[contains(text(),'New Venue')]")
	WebElement newvenue_btn;
	
	@FindBy(id = "venue_name")
	WebElement venue_nm;
	
	@FindBy(xpath = "//a[contains(text(),'Venue Setup (Master Admin Only)')]")
	WebElement selectvnsetup_tab;
	
	@FindBy(name= "venue[subdomain]")
	WebElement domain_nm;
	
	@FindBy(xpath = "/HTML/BODY[1]/DIV[3]/DIV[1]/DIV[1]/DIV[1]/FORM[1]/DIV[3]/DIV[1]/UL[1]/LI[8]/DIV[2]/DIV[1]/FIELDSET[1]/DIV[2]/DIV[1]")
	WebElement selectOrg;
	
	@FindBy(xpath = "//li[text() = 'BAU TEST VENUE']")
	WebElement EntrOrg;
	
	@FindBy(xpath = "//input[@type = 'submit' and @class = 'buttonBourbon']")
	WebElement save_btn;
	
	@FindBy(id ="flash_notice")
	WebElement valnmsg;
	
	@FindBy(xpath = "//input[@type = 'text' and @aria-controls = 'venues_table']")
	WebElement searchNewVnue;
	
	@FindBy(xpath = "//div[@id= 'venue-name' and @class = 'six columns']")
	WebElement venueNm;
	
	@FindBy(css = "#venues_table > tbody > tr > td.sorting_1 > strong > a")
	WebElement searchRslt2;
	
	@FindBy(xpath = "//a[text() = 'Edit global settings']")
	WebElement edtglbsettng;
	
	@FindBy(id = "global_settings_global_message")
	WebElement glomsg1;
	
	@FindBy(xpath = "//div[@class = 'alert-box success hide-on-print' and @id = 'flash_success']")
	WebElement glstngcontmsg;
	
	@FindBy(xpath = "//div[@class = 'alert-box success hide-on-print' and @id = 'flash_notice']")
	WebElement glstngsvdmsg;
	
	
	
	

	//Initialise web elements created in this class
	
	public Venues_Page_Masteradmin() {
	//	PageFactory.initElements(driver ,this);
	   //PageFactory.initElements(driver, HomePage.class);	
	}
	
	//Created methods for all the actions performed on "Home" page
	
	public void selectVenueTab() {
		venue_tab.click();
	}
	
	public void selectSeeAllVenueLink() {
		seeallvenue_link.click();
	}
	
	public void selectNewVenueBtn() {
		newvenue_btn.click();
	}
	
	public void enterDetails() {
		
	//	venue_nm.sendKeys(prop.getProperty("newvenuename"));
		selectvnsetup_tab.click();
	//	domain_nm.sendKeys(prop.getProperty("newvenuename"));
		selectOrg.click();
		EntrOrg.click();	
	}
	
	public void clkSave() {
		save_btn.click();
		
	}
	
	public void valnMessage() {
		
		  String msg =  valnmsg.getText();
		  System.out.println("validation message displays as " + msg);
	}
	
	public void navBackToSeeAllVenue() {
		venue_tab.click();
		seeallvenue_link.click();
		
	}
	
	public void verifyNewVenueCreated() {
	//	searchNewVnue.sendKeys(prop.getProperty("newvenuename"));
		 String pgtxt =  venueNm.getText();
		 System.out.println("Name of the Venue is  "+ pgtxt);
		 String srchtxt = searchRslt2.getText();
		 System.out.println("Name of the Venue is  "+ srchtxt);
	//	Assert.assertEquals(srchtxt, prop.getProperty("newvenuename"));
	}

	
	public void editGlobalSettingsLink() {
		edtglbsettng.click();
		
	}
	
	public void verifySuccMsg() {
		
		String msgCon = "Update 26/01/20\r\n" + 
				"For any tips or advice on the system take a look at our Help and Support articles by clicking on the orange Help and Support button at the top of your screen.\r\n" + 
				"If you have any other queries please don't hesitate to get in touch by emailing helpdesk@bookingsplus.co.uk.";
		
	
		
		String svdcontnt = glstngcontmsg.getText();
		String msgCon2 = svdcontnt.substring(0, svdcontnt.length() - 1);
	//	System.out.println("NO TRUNCATE WORKED --" + msgCon2);
		
	Assert.assertEquals(msgCon2, msgCon);
		//System.out.println("NO TRUNCATE WORKED  ----" + svdcontnt);
		
		String svdmsg = glstngsvdmsg.getText();
		//System.out.println("successful message displays as "+ svdmsg);
	}
	
	public void entrMsgInTextArea() {
		String msgContent = "<p> <b> Update 26/01/20 </b> </p> \r\n" + 
				"\r\n" + 
				"<p> For any tips or advice on the system take a look at our Help and Support articles by clicking on the orange Help and Support button at the top of your screen. </p>\r\n" + 
				"\r\n" + 
				"<p> If you have any other queries please don't hesitate to get in touch by emailing helpdesk@bookingsplus.co.uk.</p> \r\n" + 
				"";
			
		glomsg1.clear();
		glomsg1.sendKeys(msgContent);
	}
	

}
