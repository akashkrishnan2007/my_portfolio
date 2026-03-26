# EmailJS Setup Instructions for Contact Form

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account (allows 200 emails/month)
3. Verify your email address

## Step 2: Add Email Service
1. Go to "Email Services" in the dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Connect your email account
5. Copy the **Service ID** (e.g., "service_abc123")

## Step 3: Create Email Template
1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. Use this template structure:

**Subject:** New Contact Form Message from {{name}}

**Content:**
```
You have received a new message from your portfolio contact form:

Name: {{name}}
Email: {{email}}

Message:
{{message}}

---
This message was sent from your portfolio website contact form.
```

4. Save the template
5. Copy the **Template ID** (e.g., "template_xyz789")

## Step 4: Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key** (e.g., "abcdefghijk123456")

## Step 5: Update Contact.jsx
Open `src/components/Contact.jsx` and replace these values (around line 26-28):

```javascript
const SERVICE_ID = 'YOUR_SERVICE_ID'      // Replace with your Service ID
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'    // Replace with your Template ID
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'      // Replace with your Public Key
```

## Example:
```javascript
const SERVICE_ID = 'service_abc123'
const TEMPLATE_ID = 'template_xyz789'
const PUBLIC_KEY = 'abcdefghijk123456'
```

## Step 6: Test the Form
1. Run your portfolio: `npm run dev`
2. Navigate to the Contact section
3. Fill out the form and submit
4. Check your email inbox for the message

## Troubleshooting
- **Emails not sending?** Check your EmailJS dashboard for error logs
- **Wrong email received?** Verify your template variable names match ({{name}}, {{email}}, {{message}})
- **Rate limit exceeded?** Free plan allows 200 emails/month

## Alternative: Use Formspree (Simpler Option)
If you prefer a simpler solution without EmailJS setup:

1. Go to https://formspree.io/
2. Sign up for free account
3. Create a new form
4. Get your form endpoint URL
5. Update the form action in Contact.jsx to use Formspree endpoint

## Security Note
- Never commit your EmailJS keys to public repositories
- Consider using environment variables for production:
  - Create `.env` file
  - Add: `VITE_EMAILJS_SERVICE_ID=your_service_id`
  - Use: `import.meta.env.VITE_EMAILJS_SERVICE_ID`
