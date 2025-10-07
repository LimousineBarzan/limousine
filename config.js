//⚙️ إعدادات Supabase
// بعد إنشاء مشروعك في https://supabase.com
// انسخ الـ URL والـ ANON KEY وضعهم هنا:

const SUPABASE_URL = "https://pzvzkpukwqjqiabwaabp.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB6dnprcHVrd3FqcWlhYndhYWJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk3NDQ3NzYsImV4cCI6MjA3NTMyMDc3Nn0.lPaMhxuHU6v6nVo0o-eAt1yMn52vvqSGRjp-SqDhRoE";

// تهيئة الاتصال بـ Supabase
const { createClient } = window.supabase;
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// 🔐 حساب المدير (Admin)
const ADMIN_USER = "admin";        // اسم المستخدم الخاص بالإدارة
const ADMIN_PASS = "Barazan@16571700";       // كلمة المرور الخاصة بالإدارة
