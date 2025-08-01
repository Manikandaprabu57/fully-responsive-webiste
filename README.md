# HiFi Trendz Website

## Email Functionality Setup

The contact form on this website sends emails to the owner when users submit their information. Follow these steps to set up the email functionality:

### 1. Configure Environment Variables

Edit the `.env` file in the root directory with your email credentials:

```
EMAIL_USER=your-gmail-address@gmail.com
EMAIL_PASS=your-app-password
RECEIVER_EMAIL=owner-email-to-receive-messages@example.com
PORT=5000
```

**Important Notes about EMAIL_PASS:**
- For Gmail, you need to use an "App Password" not your regular password
- To generate an App Password:
  1. Enable 2-Step Verification on your Google Account
  2. Go to your Google Account → Security → App passwords
  3. Select "Mail" and "Other (Custom name)"
  4. Enter a name like "HiFi Trendz Website"
  5. Copy the generated 16-character password

### 2. Install Dependencies

Run the following command to install all required dependencies:

```bash
npm install
```

### 3. Start the Development Server

Run the development server with:

```bash
npm run dev
```

This will start both the Vite frontend server and the Node.js backend server concurrently.

### How It Works

When a user fills out the contact form and clicks "Send":

1. The form data is sent to the `/api/send-email` endpoint
2. The server uses Nodemailer to send an email from your configured Gmail account to the owner's email
3. The user receives a success message when the email is sent successfully

### Troubleshooting

If emails are not being sent:

1. Check that your `.env` file has the correct credentials
2. Ensure you're using an App Password if using Gmail
3. Check the server console for any error messages
4. Make sure your Gmail account settings allow less secure apps or that you've properly set up the App Password