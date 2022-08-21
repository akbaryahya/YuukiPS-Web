import { getAnnouncementData } from "../../../../lib/announcement";

export default async function handler(req, res) {
    const allPostsData = await getAnnouncementData();
    res.status(200).json({
        retcode: 0,
        message: "OK",
        data: {
            list: [
                {
                    list: [
                        {
                            ann_id: 3181,
                            title: "Fitur Pra-Unduh Akan Segera Dibuka",
                            subtitle: "Fitur Pra-Unduh Akan Segera Dibuka",
                            banner: "https://sdk.hoyoverse.com/upload/announcement/2021/02/26/d3fbe4e7c80cdf0fe3103aad531eafe7_7698860908543399751.jpg",
                            content: "",
                            type_label: "Game",
                            tag_label: "1",
                            tag_icon:
                                "https://sdk.hoyoverse.com/upload/announcement/2020/03/05/a2588f1a51faee9fa8dfe9aead649dd6_7237021399135895303.png",
                            login_alert: 1,
                            lang: "id-id",
                            start_time: "2022-08-19 11:00:00",
                            end_time: "2022-08-22 11:00:00",
                            type: 2,
                            remind: 1,
                            alert: 0,
                            tag_start_time: "2000-01-02 15:04:05",
                            tag_end_time: "2030-01-02 15:04:05",
                            remind_ver: 1,
                            has_content: true,
                            extra_remind: 0,
                        },
                    ],
                    type_id: 2,
                    type_label: "Game",
                },
                {
                    list: [
                        {
                            ann_id: 3059,
                            title: 'Event "Perjalanan Laut di Musim Panas": Ikuti untuk Mengundang "Prinzessin der Verurteilung!!" Fischl (Electro)',
                            subtitle: "Perjalanan Laut di Musim Panas",
                            banner: "https://sdk.hoyoverse.com/upload/announcement/2022/06/30/7fc412bb03ce2880c96ffe889cee3849_350817956993034873.jpg",
                            content: "",
                            type_label: "Event",
                            tag_label: "3",
                            tag_icon:
                                "https://sdk.hoyoverse.com/upload/announcement/2020/03/05/f3016cc0dbe3f9c2305566742ae5927f_1830032474842461374.png",
                            login_alert: 1,
                            lang: "id-id",
                            start_time: "2022-07-13 12:00:00",
                            end_time: "2022-08-24 07:00:00",
                            type: 1,
                            remind: 0,
                            alert: 0,
                            tag_start_time: "2000-01-02 15:04:05",
                            tag_end_time: "2030-01-02 15:04:05",
                            remind_ver: 1,
                            has_content: true,
                            extra_remind: 0,
                        },
                    ],
                    type_id: 1,
                    type_label: "Event",
                },
            ],
            total: allPostsData.length,
            type_list: [
                { id: 2, name: "游戏系统公告", mi18n_name: "Game" },
                { id: 1, name: "活动公告", mi18n_name: "Event" },
            ],
            alert: false,
            alert_id: 0,
            timezone: 8,
            t: Date.now(),
            pic_list: [],
            pic_total: 0,
            pic_type_list: [],
            pic_alert: false,
            pic_alert_id: 0,
            static_sign: "",
        },
    });
}
