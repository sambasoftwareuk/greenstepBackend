This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next.js/tree/canary/packages/create-next-app).

## Getting Started

First, create a `.env.local` file in the root directory with the following content:

```env
# Login Credentials
ADMIN_USERNAME=admin
ADMIN_PASSWORD=admin123
SUPER_ADMIN_USERNAME=superadmin
SUPER_ADMIN_PASSWORD=super123
DIRECTOR_USERNAME=director
DIRECTOR_PASSWORD=director123

# JWT Secret
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# Environment
NODE_ENV=development
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Admin Login

### Kullanıcı Seviyeleri

1. **Admin** - Atom, Molekül ve Component düzenleme yetkisi

   - **Login URL**: [http://localhost:3000/sambaAdminLogin](http://localhost:3000/sambaAdminLogin)
   - **Credentials**: `admin` / `admin123`
   - **Dashboard**: [http://localhost:3000/admin/urunler](http://localhost:3000/admin/urunler)

2. **Süper Admin** - Tam yetki ile sistem yönetimi

   - **Login URL**: [http://localhost:3000/sambaSuperAdminLogin](http://localhost:3000/sambaSuperAdminLogin)
   - **Credentials**: `superadmin` / `super123`
   - **Dashboard**: [http://localhost:3000/superadmin/urunler](http://localhost:3000/superadmin/urunler)

3. **Direktör** - Tam yetki ile sistem ve finansal yönetim
   - **Login URL**: [http://localhost:3000/sambaDirectorLogin](http://localhost:3000/sambaDirectorLogin)
   - **Credentials**: `director` / `director123`
   - **Dashboard**: [http://localhost:3000/director/urunler](http://localhost:3000/director/urunler)

## Features

- JWT-based authentication with role-based permissions
- Protected admin routes with middleware
- HTTP-only cookies for security
- Responsive login interface
- Editable components with inline editing
- Role-based access control:
  - **Admin**: Edit atoms, molecules, components
  - **Super Admin**: Full system management
  - **Director**: Full system + financial access
- Inline editing with hover-to-edit functionality
- Real-time content updates

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
