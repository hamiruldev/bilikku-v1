You are building a responsive web app for a room rental sublet management system. Use best practices from Apple’s Human Interface Guidelines (https://developer.apple.com/design/human-interface-guidelines) and design for excellent user experience with animation, smooth transitions, and intuitive flows.

✨ GENERAL INSTRUCTIONS:
- Follow Apple-like spacing, padding, and layout grid
- Use card components, tab views, bottom nav (for mobile), side nav (for desktop)
- Add subtle animations for transitions and modal dialogs
- Use clean typography and adaptive color themes (dark/light)
- Use icons, progress indicators, and charts where useful
- Support mobile and desktop views

---

🧑‍🤝‍🧑 USER ROLES (with auto-routing):
- owner: Can view their houses, rooms, profit/loss
- manager: Can manage everything (CRUD), assign repairmen, track payments
- tenant: Can see their own room, rent status, raise repairs
- partner: View read-only reports (profit share)
- repairman: View assigned repairs only

Auto-detect user role after login and redirect them to the right dashboard.

---

🚪 LOGIN / AUTH SCREENS:
- Email/password + social login (Google)
- Show loading animation on login
- Forgot password flow
- Show "Continue as [role]" after detecting session

---

🏠 MANAGER DASHBOARD
- Summary cards (Total rooms, Occupied %, Total income, Expenses)
- Monthly rent collection chart (bar + line)
- Table of unpaid tenants with quick action buttons
- CTA buttons: Add House, Add Room, Add Tenant
- Animation on filter change (month/year toggle)

---

📦 HOUSE & ROOM MANAGEMENT (CRUD)
- Table and card view for houses
- Inside each house:
  - Room cards (name, rent, status: vacant/occupied)
  - Button: Assign Tenant / Remove Tenant
  - Show IoT status: lock/unlock, smoke detected
- Add/Edit/Delete forms with floating labels, iOS-style switches

---

🧑 TENANT MANAGEMENT (CRUD)
- List of tenants with search + filters
- Add/edit tenant form with validation
- Link to room, rent amount, phone, notes
- Timeline: show payment history + repairs

---

💸 PAYMENT MANAGEMENT
- Table: Date, Tenant, Amount, Status (paid/pending/late)
- Auto-highlight overdue payments
- Button to trigger payment reminder
- Add/edit payments manually (optional)
- Pie chart: Paid vs Unpaid for selected month

---

📊 PROFIT & LOSS REPORTS
- Chart: Income vs Expense by month
- Table: Breakdown by house
- Show: Manager 25% cut, Partner share %
- Export button: PDF/CSV
- View reports by year (dropdown)

---

🛠️ REPAIR FLOW (CRUD)
- Tenant: Can raise new repair request
  - Fields: room, issue, notes, upload photo
- Manager: Assign repairman, update cost + status
- Repairman: View assigned tasks only
  - Status steps: pending → in progress → completed
- Show cost breakdown in report
- Animate status transitions

---

🔒 IOT DEVICE VIEW (READ-ONLY FOR NOW)
- Per room: show lock status, last sync, smoke alert
- Simple toggle to send lock/unlock (manager only)
- Alert box if smoke detected

---

🧾 MONTHLY REPORT SCREEN
- Table of all houses
- Columns: Total Rent Collected, Total Expenses, Profit, Partner Share, Manager Fee
- Auto-highlight profitable vs loss-making houses

---

📱 MOBILE NAVIGATION
- Bottom tab bar for Tenant, Partner, Repairman roles
- Side drawer or collapsible sidebar for Manager/Owner
- Floating "Add" buttons with icon + animation

---

🧰 UI COMPONENTS TO INCLUDE
- Modal dialogs (Add tenant, Add payment, etc.)
- Toast alerts (success, error)
- Tabs (for room/tenant details)
- Cards with shadows & rounded corners
- Loading spinner, shimmer for data load
- Input form validation + feedback

---

🌐 ROUTING FLOW (Auto role-based redirect)
- After login:
  - Manager → /dashboard/manager
  - Owner → /dashboard/owner
  - Tenant → /my-room
  - Partner → /reports
  - Repairman → /repairs

---

Please generate the complete UI scaffold, with page routing, reusable components, role-aware layout, and transitions. Use Apple-style UX as inspiration, follow accessibility best practices, and use animation to guide user attention.





| Layer                | Tech                             | Notes                                                       |
| -------------------- | -------------------------------- | ----------------------------------------------------------- |
| Frontend Framework   | **Next.js 14 (App Router)**      | Best for modern React apps with routing and server actions  |
| Backend-as-a-Service | **Supabase**                     | Auth, Database (PostgreSQL), Storage, RLS                   |
| Styling/UI           | **Tailwind CSS + shadcn/ui**     | Apple-like UI with utility-first CSS, accessible components |
| Animations           | **Framer Motion**                | Smooth transitions, modal animations, page transitions      |
| State Management     | **Zustand** or **React Context** | Lightweight and flexible                                    |
| Charting             | **Recharts** or **Chart.js**     | Bar/line/pie charts                                         |
| Forms                | **React Hook Form + Zod**        | Floating labels, validation, async feedback                 |
| Icon System          | **Lucide**                       | Modern, beautiful icons                                     |
| Toast Notifications  | **Sonner**                       | Sleek, Apple-style alerts                                   |
| Date Handling        | **date-fns**                     | Lightweight date utils                                      |
| Auth Provider        | **Supabase Auth**                | Email + social login (Google), RLS-safe                     |




Suggested Folder Structure (Next.js 14 App Router)
/src
 ├── app/
 │    ├── layout.tsx
 │    ├── page.tsx             # Redirects based on role
 │    └── dashboard/
 │         ├── layout.tsx      # Role-aware layout (sidebar or tabbar)
 │         ├── manager/
 │         ├── owner/
 │         ├── repairs/
 │         ├── my-room/
 │         └── reports/
 ├── components/
 │    ├── ui/                  # shadcn/ui overrides
 │    ├── cards/
 │    ├── charts/
 │    ├── modals/
 │    ├── forms/
 │    ├── nav/                 # BottomNav, SideNav
 │    └── shared/              # Toasts, Tabs, Dialogs
 ├── lib/
 │    ├── supabase.ts
 │    ├── auth.ts
 │    └── utils.ts
 ├── hooks/
 │    └── useUser.ts
 ├── context/
 │    └── UserContext.tsx
 ├── types/
 │    └── index.ts
 ├── styles/
 │    └── globals.css
 └── middleware.ts            # Role-based redirect on route access
