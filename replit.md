# Portfolio Application

## Overview

This is a modern, responsive portfolio website built for Nitish Kumar Kushwaha, a Software Engineer specializing in Java, Spring Boot, React.js, and microservices architecture. The application is a full-stack web application with a React frontend and Express.js backend, designed to showcase professional experience, skills, and projects.

## System Architecture

The application follows a modern full-stack architecture with clear separation between frontend and backend:

- **Frontend**: React.js with TypeScript using Vite as the build tool
- **Backend**: Express.js with TypeScript running on Node.js
- **Database**: PostgreSQL with Drizzle ORM for data management
- **UI Framework**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack React Query for server state management
- **Routing**: Wouter for client-side routing
- **Deployment**: Built for production deployment with static asset serving

## Key Components

### Frontend Architecture
- **Component Library**: shadcn/ui provides a comprehensive set of accessible, customizable React components
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Build Tool**: Vite for fast development and optimized production builds
- **Type Safety**: Full TypeScript implementation across the entire frontend
- **Responsive Design**: Mobile-first approach with responsive breakpoints

### Backend Architecture
- **Server**: Express.js with TypeScript for type-safe backend development
- **API Design**: RESTful API structure with `/api` prefix for all backend routes
- **Middleware**: Custom logging middleware for request/response tracking
- **Error Handling**: Centralized error handling with proper HTTP status codes
- **Development**: Hot reload with tsx for development efficiency

### Database Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **Schema Management**: Centralized schema definitions in `shared/schema.ts`
- **Migrations**: Drizzle Kit for database migration management
- **Connection**: Neon Database serverless connection for PostgreSQL

### Storage Interface
- **Abstraction**: IStorage interface for database operations abstraction
- **Implementation**: MemStorage for development/testing, ready for database integration
- **Operations**: Basic CRUD operations for user management

## Data Flow

1. **Client Requests**: React frontend makes API calls using TanStack React Query
2. **API Layer**: Express.js routes handle requests with proper validation
3. **Business Logic**: Server-side logic processes requests and interacts with storage
4. **Data Persistence**: Storage interface abstracts database operations
5. **Response**: JSON responses sent back to client with appropriate status codes

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL serverless database connection
- **drizzle-orm**: Type-safe ORM for database operations
- **@tanstack/react-query**: Server state management and caching
- **wouter**: Lightweight client-side routing
- **@radix-ui/***: Headless UI components for accessibility

### Development Tools
- **Vite**: Fast build tool and development server
- **TypeScript**: Type safety across frontend and backend
- **Tailwind CSS**: Utility-first CSS framework
- **esbuild**: Fast JavaScript bundler for production builds

### UI Components
- **shadcn/ui**: Complete component library built on Radix UI
- **class-variance-authority**: Dynamic CSS class generation
- **tailwind-merge**: Intelligent Tailwind class merging

## Deployment Strategy

### Development Environment
- **Frontend**: Vite dev server with hot module replacement
- **Backend**: tsx with watch mode for automatic restarts
- **Database**: PostgreSQL connection via environment variables

### Production Build
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Static Serving**: Express serves built frontend files in production
4. **Environment**: NODE_ENV-based configuration switching

### Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string (required)
- **NODE_ENV**: Environment detection for development vs production
- **Build Scripts**: Separate scripts for development, building, and production

## Changelog

```
Changelog:
- July 07, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```