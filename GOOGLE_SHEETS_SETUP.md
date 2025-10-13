# Google Sheets Contact Form Setup Guide

This guide will help you connect the contact form to your Google Sheets.

## Your Google Sheet
https://docs.google.com/spreadsheets/d/1cvS9XcnXqNI1dEPyf3N0lmyv66jB68G21_oxiePt69Y/edit?usp=sharing

## Step-by-Step Setup

### Step 1: Prepare Your Google Sheet
1. Open your Google Sheet (link above)
2. Make sure the first row has these column headers:
   - Timestamp
   - Name
   - Phone
   - Email
   - Subject
   - Message

### Step 2: Create Google Apps Script
1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any existing code
3. Copy and paste the following script:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming data
    var data = JSON.parse(e.postData.contents);
    
    // Create a new row with the form data
    var row = [
      new Date(),           // Timestamp
      data.name,            // Name
      data.phone || '',     // Phone
      data.email,           // Email
      data.subject,         // Subject
      data.message          // Message
    ];
    
    // Append the row to the sheet
    sheet.appendRow(row);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ 'result': 'success', 'message': 'GET request received' }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

### Step 3: Deploy the Script
1. Click the **Deploy** button (top right)
2. Select **New deployment**
3. Click the gear icon ⚙️ next to "Select type"
4. Choose **Web app**
5. Configure the deployment:
   - **Description**: Contact Form Handler
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
6. Click **Deploy**
7. Review permissions and click **Authorize access**
8. Click **Authorize** on the next screen
9. **Copy the Web App URL** - it will look like:
   ```
   https://script.google.com/macros/s/AKfycby.../exec
   ```

### Step 4: Update Your Website Code
1. Open `src/pages/Contact.tsx`
2. Find this line (around line 20):
   ```typescript
   const GOOGLE_SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE";
   ```
3. Replace `"YOUR_GOOGLE_APPS_SCRIPT_URL_HERE"` with your actual deployment URL:
   ```typescript
   const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycby.../exec";
   ```
4. Save the file

### Step 5: Test the Form
1. Go to your contact page
2. Fill out and submit the form
3. Check your Google Sheet - a new row should appear with the form data

## Troubleshooting

### Form submissions not appearing in Google Sheets
- Make sure you deployed the Apps Script as "Anyone" can access
- Verify the Web App URL is correct in Contact.tsx
- Check the Apps Script execution logs: Apps Script → Executions

### Permission errors
- Re-authorize the script: Deploy → Manage deployments → Edit → Save
- Make sure you're using the correct Google account

### CORS errors in browser console
- This is normal when using `mode: 'no-cors'`
- The data will still be submitted successfully
- Check your Google Sheet to verify

## Testing the Script Directly
You can test your deployment URL by visiting it in a browser. You should see:
```json
{"result":"success","message":"GET request received"}
```

## Security Notes
- The script is set to "Anyone" can access because it's a public contact form
- Consider adding rate limiting if you experience spam
- Never expose sensitive API keys or credentials in client-side code

## Need Help?
If you encounter issues:
1. Check the Apps Script execution logs
2. Verify column headers match exactly
3. Ensure the deployment is active and accessible
4. Test the deployment URL directly in a browser
