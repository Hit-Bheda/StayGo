
# StayGo

StayGo is a web application that helps travelers find accommodation options based on their preferences and budget.

## Features

- Search for accommodation by location, dates, and other filters
- View detailed information about available properties
- Integration with booking APIs for real-time availability and booking
- User authentication and account management

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Hit-Bheda/StayGo.git
```

2. Navigate to the project directory:

```bash
cd StayGo
```

3. Install dependencies:

```bash
npm install
```

4. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Define the following variables with your configuration:

   ```plaintext
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   SESSION_SECRET=your_session_secret
   ```

## Usage

1. Start the server:

```bash
npm start
```

2. Access the application in your web browser at `http://localhost:3000`.

3. Sign up or log in to your account to start searching for accommodation options.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any new features, changes, or fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
