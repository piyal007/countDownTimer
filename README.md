# Countdown Timer

A simple, elegant countdown timer web application that counts down to 8 PM daily. When the target time is reached, hidden text is revealed.

![Countdown Timer](https://via.placeholder.com/600x400?text=Countdown+Timer+Preview)

## Features

- Real-time countdown to 8 PM every day
- Automatically adjusts to show countdown to next day's 8 PM if current time is past 8 PM
- Clean, responsive UI using Tailwind CSS and DaisyUI
- Reveals hidden text when countdown reaches zero
- Modern design with Google Fonts integration

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Tailwind CSS
- DaisyUI
- Google Fonts (Poppins)

## How to Use

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/countdown-timer.git
   ```

2. Open `index.html` in your web browser.

3. The countdown to 8 PM will start automatically.

4. When the countdown reaches zero, the hidden text will be revealed.

## Customization

### Changing the Target Time

To change the target time from 8 PM to another time, modify the following line in both `index.html` and `index.js`:

```javascript
targetTime.setHours(20, 0, 0, 0); // Change 20 to your desired hour (24-hour format)
```

### Changing the Hidden Text

To change the text that appears when the countdown reaches zero, modify the content in the `hiddenText` div in `index.html`.

### Styling

The project uses Tailwind CSS and DaisyUI for styling. You can customize the appearance by modifying the classes in `index.html` or by adding custom styles.

## Browser Compatibility

- Chrome
- Firefox
- Safari
- Edge

## License

MIT License

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Acknowledgements

- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- [Google Fonts](https://fonts.google.com/)
