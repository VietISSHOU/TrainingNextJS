import i18next from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            'View profile': 'View profile'
        }
    },
    vi: {
        translation: {
            'View profile': 'Xem Hồ Sơ'
        }
    },
    ja: {
        translation: {
            'View profile': 'プロフィールを見'
        }
    }
}
i18next.use(initReactI18next).init({
    resources,
    lng: 'vi',
})