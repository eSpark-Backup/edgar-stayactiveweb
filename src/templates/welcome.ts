export const EmailTemplate = (name: string) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to StayActive</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 20px;">
  <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 10px; padding: 20px;">
    <h1 style="color: #4372BC; margin-bottom: 20px;">Welcome to StayActive, ${name}! 🎉</h1>
    
    <p>Thank you for joining our waitlist! You've earned your first 50 points.</p>
    
    <p>Here's what you can expect:</p>
    <ul>
      <li>Early access to the StayActive app</li>
      <li>Exclusive rewards and perks</li>
      <li>Updates on our launch progress</li>
    </ul>
    
    <div style="margin: 30px 0; text-align: center;">
      <a href="${process.env.FRONTEND_URL}" 
         style="background: #5ECBAD; color: white; padding: 12px 24px; text-decoration: none; border-radius: 25px; display: inline-block;">
        Visit StayActive
      </a>
    </div>
    
    <p style="color: #666666; font-size: 14px;">
      Stay active and healthy!<br>
      The StayActive Team
    </p>
  </div>
</body>
</html>
`;