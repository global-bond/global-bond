const SHEET_NAME = 'Leads';

function doPost(e) {
  try {
    // Log the entire event object for debugging
    Logger.log('Full event object: ' + JSON.stringify(e));
    
    // 1. Make sure data exists
    if (!e || !e.parameter) {
      throw new Error("No POST data received");
    }

    // 2. Parse JSON sent from React
    const data = e.parameter;
    Logger.log('Received data: ' + JSON.stringify(data));
    
    // 3. Access individual fields (same names as React)
    const fullName = data.fullName;
    const email = data.email;
    const phone = data.phone;
    const company = data.company;
    const location = data.location;
    const inquiryType = data.inquiryType;
    const budget = data.budget || '';
    const timeline = data.timeline || '';
    const projectDetails = data.projectDetails;

    // 4. Get the sheet
    const sheet = SpreadsheetApp
      .getActiveSpreadsheet()
      .getSheetByName(SHEET_NAME);

    if (!sheet) {
      throw new Error('Sheet not found: ' + SHEET_NAME);
    }

    // 5. Insert row
    const row = [
      fullName,
      email,
      phone,
      company,
      location,
      inquiryType,
      budget,
      timeline,
      projectDetails,
      new Date()
    ];
    
    Logger.log('Appending row: ' + JSON.stringify(row));
    sheet.appendRow(row);
    Logger.log('Data saved successfully');

    // 6. Success response
    return ContentService
      .createTextOutput(
        JSON.stringify({ success: true, message: "Data saved" })
      )
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    Logger.log('Error: ' + err.message + ', Stack: ' + err.stack);
    // Error response
    return ContentService
      .createTextOutput(
        JSON.stringify({ success: false, error: err.message })
      )
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput('Web App is running. Use POST to submit data.')
    .setMimeType(ContentService.MimeType.TEXT);
}
