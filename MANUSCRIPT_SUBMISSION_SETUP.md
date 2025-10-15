# Manuscript Submission Setup Guide

This guide explains how to set up Google Apps Script to handle manuscript submissions, store files in Google Drive, and send email confirmations.

## Step 1: Create a Google Drive Folder

1. Go to [Google Drive](https://drive.google.com)
2. Create a new folder called "JBPAR Manuscripts"
3. Right-click the folder → Share → Copy link
4. Extract the folder ID from the URL (the part after `/folders/`)
   - Example: `https://drive.google.com/drive/folders/ABC123XYZ` → Folder ID is `ABC123XYZ`

## Step 2: Create Google Sheet for Tracking

1. Create a new Google Sheet called "JBPAR Submissions"
2. Add these column headers in row 1:
   - A: Timestamp
   - B: Author Name
   - C: Email
   - D: Affiliation
   - E: Manuscript Title
   - F: Category
   - G: Keywords
   - H: Abstract
   - I: Manuscript File ID
   - J: Status

## Step 3: Create Google Apps Script

1. In your Google Sheet, go to **Extensions** → **Apps Script**
2. Delete any default code and paste the following:

```javascript
// Configuration - REPLACE WITH YOUR FOLDER ID
const DRIVE_FOLDER_ID = 'YOUR_FOLDER_ID_HERE';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    
    // Get the Google Drive folder
    const folder = DriveApp.getFolderById(DRIVE_FOLDER_ID);
    
    // Save manuscript file to Drive
    let manuscriptFileId = '';
    if (data.manuscriptFile) {
      const fileBlob = Utilities.newBlob(
        Utilities.base64Decode(data.manuscriptFile.data),
        data.manuscriptFile.mimeType,
        data.manuscriptFile.name
      );
      const file = folder.createFile(fileBlob);
      manuscriptFileId = file.getId();
      Logger.log('File uploaded: ' + file.getUrl());
    }
    
    // Save to Google Sheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    sheet.appendRow([
      new Date(),
      data.authorName,
      data.email,
      data.affiliation,
      data.title,
      data.category,
      data.keywords,
      data.abstract,
      manuscriptFileId,
      'Submitted'
    ]);
    
    // Send confirmation email
    sendConfirmationEmail(data);
    
    return ContentService.createTextOutput(
      JSON.stringify({ success: true, message: 'Submission received successfully' })
    ).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    Logger.log('Error: ' + error.toString());
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, error: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function sendConfirmationEmail(data) {
  const subject = 'Manuscript Submission Confirmation - JBPAR';
  const body = `
Dear ${data.authorName},

Thank you for submitting your manuscript to the Journal of Business Practice and Academic Research (JBPAR).

Submission Details:
- Title: ${data.title}
- Category: ${data.category}
- Submitted on: ${new Date().toLocaleString()}

Your manuscript is now under review. Our editorial team will contact you within 5-7 business days regarding the next steps.

If you have any questions, please contact us at editor.jbpar@gmail.com

Best regards,
Editorial Team
Journal of Business Practice and Academic Research
  `;
  
  MailApp.sendEmail({
    to: data.email,
    subject: subject,
    body: body
  });
  
  Logger.log('Email sent to: ' + data.email);
}

function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({ status: 'API is working' })
  ).setMimeType(ContentService.MimeType.JSON);
}
```

3. Replace `YOUR_FOLDER_ID_HERE` with your actual Google Drive folder ID from Step 1

## Step 4: Deploy the Script

1. Click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ → Select **Web app**
3. Configure:
   - Description: "Manuscript Submission Handler"
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Click **Deploy**
5. Review permissions and click **Authorize access**
6. Copy the **Web app URL** (it will look like: `https://script.google.com/macros/s/ABC123.../exec`)

## Step 5: Update Website Code

1. Open `src/pages/Submit.tsx` in your code editor
2. Find this line:
   ```javascript
   const SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_URL_HERE';
   ```
3. Replace `YOUR_GOOGLE_SCRIPT_URL_HERE` with your actual Web App URL from Step 4

## Testing

1. Submit a test manuscript through your website
2. Check that:
   - The file appears in your Google Drive folder
   - A new row appears in your Google Sheet
   - You receive a confirmation email

## Troubleshooting

### File not uploading
- Check that the folder ID is correct
- Ensure the script has permission to access Drive

### Email not sending
- Check spam folder
- Verify the email address in the form is correct
- Check Apps Script execution logs (View → Executions)

### Permission errors
- Make sure you authorized the script with your Google account
- Check that "Who has access" is set to "Anyone"

## File Size Limits

- Google Apps Script has a 50MB limit for file uploads
- For larger files, consider splitting or compressing them
- The current implementation handles files up to 50MB

## Security Notes

- The script URL is public, so anyone can submit
- Consider adding rate limiting if you get spam submissions
- File types are validated on the client side
- You can add server-side validation in the Apps Script if needed
