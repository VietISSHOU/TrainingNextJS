import i18next from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            'View profile': 'View profile',
            'Home': 'Home',
            'About Us': 'About Us',
            'Search': 'Search',
            'Pricing': 'Pricing',
            'Contact': 'Contact',
            'Find an Expert': 'Find an Expert',
            'Terms of use': 'Terms of use',
            'User Manual': 'User Manual',
            'Account Register': 'Account Register',
            'Login': 'Login'
        }
    },
    vi: {
        translation: {
            'View profile': 'Xem Hồ Sơ',
            'Home': 'Trang chủ',
            'About Us': 'Về chúng tôi',
            'Search': 'Tìm kiếm',
            'Pricing': 'Bảng giá',
            'Contact': 'Liên hệ',
            'Find an Expert': 'Tìm chuyên gia',
            'Terms of use': 'Điều khoản sử dụng',
            'User Manual': 'Hướng dẫn sử dụng',
            'Account Register': 'Đăng ký tài khoản',
            'Login': 'Đăng nhập'
        }
    },
    ja: {
        translation: {
            'View profile': 'プロフィールを見',
            'Home': 'ホームページ',
            'About Us': '会社紹介',
            'Search': '検索',
            'Pricing': '価格表',
            'Contact': 'お問い合わせ',
            'Find an Expert': '専門家探し',
            'Terms of use': '利用規約',
            'User Manual': 'ユーザーマニュアル',
            'Account Register': 'アカウント登録',
            'Login': 'ログイン'
        }
    }
}
i18next.use(initReactI18next).init({
    resources,
    lng: 'vi',
})