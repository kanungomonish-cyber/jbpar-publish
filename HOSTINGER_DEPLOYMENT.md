# Hostinger Deployment Instructions

## Files Ready for Upload
All production files are in the `dist` folder and ready to upload to Hostinger.

## Upload Steps:

1. **Login to Hostinger**
   - Go to your Hostinger control panel
   - Navigate to File Manager or use FTP/SFTP

2. **Upload Files**
   - Upload ALL contents from the `dist` folder to your public_html directory (or your domain's root directory)
   - Make sure to upload the `.htaccess` file (enable "Show hidden files" if needed)

3. **Important Files Included:**
   - `index.html` - Main HTML file
   - `assets/` - JavaScript and CSS bundles
   - `editors/` - Editor photos
   - `.htaccess` - Apache configuration (handles routing, HTTPS, compression, caching)
   - `robots.txt` - SEO configuration
   - Other assets (favicon, placeholder)

4. **After Upload:**
   - Test your website URL
   - Check if HTTPS redirect works
   - Verify all pages load correctly (About, Contact, Submit, etc.)
   - Test navigation and routing

## .htaccess Features:
- ✅ Forces HTTPS (secure connection)
- ✅ Handles React Router (SPA routing)
- ✅ Enables GZIP compression for faster loading
- ✅ Sets browser caching headers
- ✅ Security headers
- ✅ Prevents directory browsing
- ✅ Custom 404 handling

## Troubleshooting:
- If routing doesn't work, ensure `.htaccess` is uploaded and `mod_rewrite` is enabled
- If HTTPS redirect fails, check your SSL certificate in Hostinger
- Clear browser cache if changes don't appear immediately

## Updates:
To update the site, simply:
1. Run `npm run build` locally
2. Upload the new `dist` folder contents to Hostinger
3. The `.htaccess` file is already configured (no need to re-upload unless changed)
