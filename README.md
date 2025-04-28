# Course Platform Admin Panel

This project is the admin panel for a course platform, built with Next.js 15, Ant Design v5, and Tailwind CSS v4.

## Features

- **Admin Authentication**: Secure login system for admin users
- **Dashboard**: Overview of key metrics like users, courses, orders, and revenue
- **User Management**: View and manage user accounts
- **Course Management**: Create, edit, and delete courses
- **Order Management**: Track and manage course orders
- **Responsive Design**: Works on desktop and mobile devices

## Technical Implementation

- **Next.js App Router**: Modern application routing using the App Router pattern
- **Ant Design v5**: Latest version of Ant Design for UI components with theme token system
- **Modern Styling**: Pure Ant Design v5 styling with theme token system
- **API Services**: Structured API service architecture with error handling
- **Authentication**: Secure admin authentication with token-based access control
- **Protected Routes**: Admin routes are protected with authentication guards

## Styling Approach

- **Ant Design Theme Tokens**: Used for consistent styling across components
- **Dynamic Theming**: App adapts to Ant Design theme settings
- **Component Styling**: Inline styles with theme tokens for dynamic theming
- **Responsive Layout**: Adapts to different screen sizes for optimal user experience

## Error Handling Improvements

- User-friendly error messages based on HTTP status codes
- Notification system for displaying errors and success messages
- Centralized error handling utilities
- Consistent approach to API response handling

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Access the admin panel at `http://localhost:3000/admin/login`

## Environment Setup

Make sure to configure your `.env` file with the following variables:

```
NEXT_PUBLIC_API_URL=your_api_base_url
```

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
