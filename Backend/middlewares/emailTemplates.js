export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bharat-Bhakti Yatra | Email Verification</title>
  <style>
    body {
      font-family: 'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #fffaf2;
      color: #333;
    }

    .container {
      max-width: 600px;
      margin: 40px auto;
      background: #fff;
      border-radius: 14px;
      box-shadow: 0 10px 30px rgba(255, 114, 0, 0.25);
      overflow: hidden;
      border: 1px solid #ffe0c2;
    }

    .header {
      background: linear-gradient(135deg, #ff7200, #ff9d3f);
      color: #fff;
      text-align: center;
      padding: 55px 30px 35px;
      position: relative;
    }

    .header::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 80%;
      height: 3px;
      background: linear-gradient(to right, transparent, #fff, transparent);
      border-radius: 50%;
      opacity: 0.5;
    }

    .header h1 {
      margin: 0;
      font-size: 30px;
      font-weight: 700;
      letter-spacing: 0.5px;
      text-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
    }

    .header p {
      margin-top: 10px;
      font-size: 15px;
      color: #fffaf5;
      letter-spacing: 0.5px;
      opacity: 0.95;
    }

    .content {
      padding: 40px 35px;
      text-align: center;
      background-color: #fffdf8;
    }

    .content h2 {
      font-size: 20px;
      margin-bottom: 10px;
      color: #ff7200;
      font-weight: 600;
    }

    .content p {
      margin: 15px 0;
      font-size: 16px;
      line-height: 1.8;
      color: #444;
    }

    .verification-code {
      margin: 30px auto;
      padding: 20px 60px;
      font-size: 36px;
      font-weight: bold;
      letter-spacing: 5px;
      color: #fff;
      background: linear-gradient(90deg, #ff7200, #ffb347);
      border-radius: 14px;
      box-shadow: 0 5px 15px rgba(255, 114, 0, 0.35);
      font-family: 'Courier New', Courier, monospace;
      display: inline-block;
    }

    .divider {
      height: 1px;
      background: linear-gradient(to right, transparent, #ff7200, transparent);
      margin: 25px 0;
    }

    .footer {
      text-align: center;
      padding: 25px 20px;
      font-size: 13px;
      color: #888;
      background: #fff3e0;
    }

    .footer p {
      margin: 5px 0;
    }

    .footer a {
      color: #ff7200;
      text-decoration: none;
      font-weight: 600;
    }

    .footer a:hover {
      text-decoration: underline;
    }

    .author {
      text-align: center;
      background: #fffaf2;
      padding: 10px 12px 20px; /* Reduced top padding */
      font-size: 14px;
      color: #555;
      border-top: 1px dashed #ffd2a6;
    }

    .author h3 {
      color: #ff7200;
      margin-bottom: 8px; /* Reduced gap */
      font-weight: 700;
    }

    .author p {
      margin: 5px 0;
      line-height: 1.6;
    }

    .author a {
      color: #ff7200;
      text-decoration: none;
      font-weight: 600;
    }

    .author a:hover {
      text-decoration: underline;
    }

  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🌺 Verify Your Devotion 🌺</h1>
      <p>Bharat-Bhakti Yatra — A Journey of Unity, Peace & Faith</p>
    </div>

    <div class="content">
      <h2>Namaste 🙏</h2>
      <p>Welcome to <strong>Bharat-Bhakti Yatra</strong> — where every step celebrates India’s divine unity and spiritual diversity.</p>
      <p>Please use the verification code below to confirm your participation in this sacred journey:</p>

      <div class="verification-code">{verificationCode}</div>

      <p>Enter this code on the verification page to activate your Bharat-Bhakti account.</p>
      <div class="divider"></div>
      <p><strong>Note:</strong> The code is valid for <strong>15 minutes</strong> to ensure spiritual and digital safety.</p>
      <p>If you didn’t request this verification, please ignore this message.</p>

      <p>With divine regards,<br>
      <strong>🌼 Team Bharat-Bhakti Yatra 🌼</strong></p>
    </div>

    <div class="author">
      <h3>💫 Project Author & Maintainer</h3>
      <p>
        🔗 <a href="https://github.com/UjjwalSaini07" target="_blank">GitHub Profile</a> &nbsp; | &nbsp;
        🌐 <a href="https://www.ujjwalsaini.dev/" target="_blank">Portfolio Website</a>
      </p>
      <p>💌 Connect, collaborate, and contribute to spread unity through devotion.</p>
    </div>

    <div class="footer">
      <p>This is an automated email. Please do not reply.</p>
      <p>For guidance or support, visit our <a href="mailto:ujjwalsaini0007+bharatbhakti@gmail.com">Spiritual Help Center</a>.</p>
      <p>🇮🇳 “One Faith, One Journey, One Bharat” 🇮🇳</p>
    </div>

  </div>
</body>
</html>
`;

export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bharat-Bhakti Yatra | Password Reset Successful</title>
  <style>
    body {
      font-family: 'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #fffaf2;
      color: #333;
    }

    .container {
      max-width: 600px;
      margin: 40px auto;
      background: #fff;
      border-radius: 14px;
      box-shadow: 0 10px 30px rgba(255, 114, 0, 0.25);
      overflow: hidden;
      border: 1px solid #ffe0c2;
    }

    .header {
      background: linear-gradient(135deg, #ff7200, #ff9d3f);
      color: #fff;
      text-align: center;
      padding: 50px 30px 35px;
      position: relative;
    }

    .header h1 {
      margin: 0;
      font-size: 28px;
      font-weight: 700;
      letter-spacing: 0.5px;
      text-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
    }

    .content {
      padding: 35px 30px;
      text-align: center;
      background-color: #fffdf8;
    }

    .content p {
      margin: 15px 0;
      font-size: 16px;
      line-height: 1.8;
      color: #444;
    }

    .success-icon {
      margin: 25px auto;
      background: linear-gradient(135deg, #ff7200, #ffb347);
      color: #fff;
      width: 70px;
      height: 70px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      font-size: 36px;
      font-weight: bold;
      box-shadow: 0 6px 16px rgba(255, 114, 0, 0.35);
    }

    .security-tips {
      margin: 20px 0;
      padding: 20px;
      background-color: #fff;
      border: 1px solid #ffd2a6;
      border-radius: 12px;
      text-align: left;
    }

    .security-tips p {
      margin: 0;
      font-size: 15px;
      font-weight: bold;
      color: #ff7200;
    }

    .security-tips ul {
      margin: 10px 0 0 20px;
      padding: 0;
      list-style-type: disc;
      color: #555;
    }

    .footer {
      text-align: center;
      padding: 20px;
      font-size: 13px;
      color: #888;
      background: #fff3e0;
    }

    .footer p {
      margin: 5px 0;
    }

    .footer a {
      color: #ff7200;
      text-decoration: none;
      font-weight: 600;
    }

    .footer a:hover {
      text-decoration: underline;
    }

    .author {
      text-align: center;
      background: #fffaf2;
      padding: 10px 12px 20px;
      font-size: 14px;
      color: #555;
      border-top: 1px dashed #ffd2a6;
    }

    .author h3 {
      color: #ff7200;
      margin-bottom: 8px;
      font-weight: 700;
    }

    .author p {
      margin: 5px 0;
      line-height: 1.6;
    }

    .author a {
      color: #ff7200;
      text-decoration: none;
      font-weight: 600;
    }

    .author a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Password Reset Successful</h1>
    </div>

    <div class="content">
      <p>Namaste 🙏,</p>
      <p>Your password for <strong>Bharat-Bhakti Yatra</strong> has been successfully reset.</p>
      
      <div class="success-icon">✓</div>
      
      <p>If you did not request this reset, please <a href="mailto:ujjwalsaini0007+bharatbhakti@gmail.com">contact support</a> immediately.</p>

      <div class="security-tips">
        <p>To keep your account secure, we recommend:</p>
        <ul>
          <li>Using a strong, unique password</li>
          <li>Enabling two-factor authentication</li>
          <li>Avoiding reuse of passwords across different platforms</li>
        </ul>
      </div>

      <p>Thank you for helping us ensure your account’s security.</p>
      <p>With blessings,<br><strong>🌼 Team Bharat-Bhakti Yatra 🌼</strong></p>
    </div>

    <div class="author">
      <h3>💫 Project Author & Maintainer</h3>
      <p>
        🔗 <a href="https://github.com/UjjwalSaini07" target="_blank">GitHub Profile</a> &nbsp; | &nbsp;
        🌐 <a href="https://www.ujjwalsaini.dev/" target="_blank">Portfolio Website</a>
      </p>
      <p>💌 Connect, collaborate, and contribute to spread unity through devotion.</p>
    </div>

    <div class="footer">
      <p>This email is automatically generated. Please do not reply.</p>
      <p>For guidance or support, visit our <a href="mailto:ujjwalsaini0007+bharatbhakti@gmail.com">Spiritual Help Center</a></p>
      <p>🇮🇳 “One Faith, One Journey, One Bharat” 🇮🇳</p>
    </div>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_REQUEST_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bharat-Bhakti Yatra | Reset Your Password</title>
  <style>
    body {
      font-family: 'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #fffaf2;
      color: #333;
    }

    .container {
      max-width: 600px;
      margin: 40px auto;
      background: #fff;
      border-radius: 14px;
      box-shadow: 0 10px 30px rgba(255, 114, 0, 0.25);
      overflow: hidden;
      border: 1px solid #ffe0c2;
    }

    .header {
      background: linear-gradient(135deg, #ff7200, #ff9d3f);
      color: #fff;
      text-align: center;
      padding: 50px 30px 35px;
      position: relative;
    }

    .header h1 {
      margin: 0;
      font-size: 28px;
      font-weight: 700;
      letter-spacing: 0.5px;
      text-shadow: 0 2px 6px rgba(0,0,0,0.25);
    }

    .content {
      padding: 35px 30px;
      text-align: center;
      background-color: #fffdf8;
    }

    .content p {
      margin: 15px 0;
      font-size: 16px;
      line-height: 1.8;
      color: #444;
    }

    .reset-button {
      display: inline-block;
      background: linear-gradient(135deg, #ff7200, #ffb347);
      color: #fff;
      padding: 14px 28px;
      text-decoration: none;
      border-radius: 8px;
      font-weight: bold;
      text-align: center;
      font-size: 16px;
      box-shadow: 0 4px 12px rgba(255, 114, 0, 0.35);
      transition: background 0.3s ease;
    }

    .reset-button:hover {
      background: linear-gradient(135deg, #ff8c1a, #ffc27f);
    }

    .note {
      margin-top: 20px;
      padding: 20px;
      background-color: #fff7d6;
      border: 1px solid #ffd966;
      border-radius: 12px;
      color: #856404;
      font-size: 15px;
      text-align: left;
    }

    .footer {
      text-align: center;
      padding: 20px;
      font-size: 13px;
      color: #888;
      background: #fff3e0;
    }

    .footer p {
      margin: 5px 0;
    }

    .footer a {
      color: #ff7200;
      text-decoration: none;
      font-weight: 600;
    }

    .footer a:hover {
      text-decoration: underline;
    }

    .author {
      text-align: center;
      background: #fffaf2;
      padding: 10px 12px 20px;
      font-size: 14px;
      color: #555;
      border-top: 1px dashed #ffd2a6;
    }

    .author h3 {
      color: #ff7200;
      margin-bottom: 8px;
      font-weight: 700;
    }

    .author p {
      margin: 5px 0;
      line-height: 1.6;
    }

    .author a {
      color: #ff7200;
      text-decoration: none;
      font-weight: 600;
    }

    .author a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Password Reset Request</h1>
    </div>

    <div class="content">
      <p>Namaste 🙏,</p>
      <p>We received a request to reset your password for <strong>Bharat-Bhakti Yatra</strong>. If you did not make this request, please disregard this email.</p>
      <p>To reset your password, click the button below:</p>

      <div style="text-align:center; margin:30px 0;">
        <a href="{resetURL}" class="reset-button">Reset Password</a>
      </div>

      <p>This link will expire in <strong>1 hour</strong> for security reasons.</p>

      <div class="note">
        <strong>Important:</strong> If you cannot click the button, copy and paste the following link into your browser:<br>
        <a href="{resetURL}" style="color: #ff7200;">{resetURL}</a>
      </div>

      <p>Thank you for being part of our spiritual journey.</p>
      <p>With blessings,<br><strong>🌼 Team Bharat-Bhakti Yatra 🌼</strong></p>
    </div>

    <div class="author">
      <h3>💫 Project Author & Maintainer</h3>
      <p>
        🔗 <a href="https://github.com/UjjwalSaini07" target="_blank">GitHub Profile</a> &nbsp; | &nbsp;
        🌐 <a href="https://www.ujjwalsaini.dev/" target="_blank">Portfolio Website</a>
      </p>
      <p>💌 Connect, collaborate, and contribute to spread unity through devotion.</p>
    </div>

    <div class="footer">
      <p>This email is automatically generated. Please do not reply.</p>
      <p>For guidance or support, visit our <a href="mailto:ujjwalsaini0007+bharatbhakti@gmail.com">Spiritual Help Center</a></p>
      <p>🇮🇳 “One Faith, One Journey, One Bharat” 🇮🇳</p>
    </div>
  </div>
</body>
</html>
`;

export const WELCOME_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Bharat-Bhakti Yatra</title>
  <style>
    body {
      font-family: 'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #fffaf2;
      color: #333;
    }

    .container {
      max-width: 650px;
      margin: 50px auto;
      background: #fff;
      border-radius: 14px;
      box-shadow: 0 10px 30px rgba(255, 114, 0, 0.25);
      overflow: hidden;
      border: 1px solid #ffe0c2;
    }

    .header {
      background: linear-gradient(135deg, #ff7200, #ff9d3f);
      color: #fff;
      text-align: center;
      padding: 50px 20px;
      font-size: 28px;
      font-weight: 700;
      letter-spacing: 1px;
    }

    .content {
      padding: 35px 30px;
      color: #444;
      line-height: 1.8;
      text-align: center;
    }

    .welcome-message {
      font-size: 24px;
      font-weight: bold;
      color: #ff7200;
      margin-bottom: 20px;
    }

    ul {
      margin: 20px 0;
      padding-left: 20px;
      list-style-type: disc;
      text-align: left;
      color: #555;
    }

    ul li {
      margin-bottom: 10px;
      font-size: 16px;
    }

    .cta-button {
      display: inline-block;
      padding: 14px 36px;
      background: linear-gradient(135deg, #ff7200, #ffb347);
      color: #fff;
      text-decoration: none;
      border-radius: 8px;
      text-align: center;
      font-size: 16px;
      font-weight: 600;
      margin-top: 20px;
      box-shadow: 0 6px 12px rgba(255, 114, 0, 0.3);
      transition: all 0.3s ease;
    }

    .cta-button:hover {
      background: linear-gradient(135deg, #ff8c1a, #ffc27f);
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(255, 114, 0, 0.4);
    }

    .footer {
      background-color: #fff3e0;
      padding: 20px;
      text-align: center;
      font-size: 13px;
      color: #888;
      border-top: 1px solid #ffd2a6;
    }

    .footer a {
      color: #ff7200;
      text-decoration: none;
      font-weight: 600;
    }

    .footer a:hover {
      text-decoration: underline;
    }

    .author {
      text-align: center;
      background: #fffaf2;
      padding: 10px 12px 20px;
      font-size: 14px;
      color: #555;
      border-top: 1px dashed #ffd2a6;
    }

    .author h3 {
      color: #ff7200;
      margin-bottom: 8px;
      font-weight: 700;
    }

    .author p {
      margin: 5px 0;
      line-height: 1.6;
    }

    .author a {
      color: #ff7200;
      text-decoration: none;
      font-weight: 600;
    }

    .author a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      Welcome to Bharat-Bhakti Yatra!
    </div>

    <div class="content">
      <p class="welcome-message">Namaste 🙏, <strong>{name}</strong></p>
      <p>
        We’re thrilled to have you join the spiritual journey of <strong>Bharat-Bhakti Yatra</strong>, celebrating unity, devotion, and India’s timeless wisdom.
      </p>
      <p>Here’s what you can look forward to:</p>
      <ul>
        <li>Participate in sacred pilgrimages and cultural celebrations.</li>
        <li>Experience interfaith harmony and spiritual discourses.</li>
        <li>Connect with communities across India.</li>
        <li>Learn meditation, inner growth, and devotional practices.</li>
      </ul>
      <p>
        Let your spirit embrace the journey and live the essence of India’s soulful unity.
      </p>
      <div style="text-align: center;">
        <a href="#" class="cta-button">Explore Bharat-Bhakti Yatra</a>
      </div>
      <p>With blessings and devotion,<br><strong>🌼 Team Bharat-Bhakti Yatra 🌼</strong></p>
    </div>

    <div class="author">
      <h3>💫 Project Author & Maintainer</h3>
      <p>
        🔗 <a href="https://github.com/UjjwalSaini07" target="_blank">GitHub Profile</a> &nbsp; | &nbsp;
        🌐 <a href="https://www.ujjwalsaini.dev/" target="_blank">Portfolio Website</a>
      </p>
      <p>💌 Connect, collaborate, and contribute to spread unity through devotion.</p>
    </div>

    <div class="footer">
      <p>&copy; <script>document.write(new Date().getFullYear());</script> Bharat-Bhakti Yatra. All rights reserved.</p>
      <p><a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
    </div>
  </div>
</body>
</html>
`;
