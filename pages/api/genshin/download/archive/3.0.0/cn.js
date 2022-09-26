export default function handler(req, res) {
    //TODO: add auto update from dump postman
    res.status(200).json({
        retcode: 0,
        message: "OK",
        data: {
            game: {
                latest: {
                    name: "",
                    version: "2.8.0",
                    path: "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20220625003700_3RiwWggLSQ14iInN/YuanShen_2.8.0.zip",
                    size: "63597476576",
                    md5: "43bbde991356443f9f6fcc33e27f347a",
                    entry: "YuanShen.exe",
                    voice_packs: [
                        {
                            language: "zh-cn",
                            name: "",
                            path: "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20220625003700_3RiwWggLSQ14iInN/Audio_Chinese_2.8.0.zip",
                            size: "14892547440",
                            md5: "0bbc8b11a78b7076888fb9c8e70d56ae",
                            package_size: "7441030840",
                        },
                        {
                            language: "en-us",
                            name: "",
                            path: "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20220625003700_3RiwWggLSQ14iInN/Audio_English(US)_2.8.0.zip",
                            size: "17168880106",
                            md5: "c4ae665388e8c75ba5864e5fc580fa55",
                            package_size: "8579197173",
                        },
                        {
                            language: "ja-jp",
                            name: "",
                            path: "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20220625003700_3RiwWggLSQ14iInN/Audio_Japanese_2.8.0.zip",
                            size: "18736543170",
                            md5: "e8de28d3ae2173d114f6717918fdb03e",
                            package_size: "9363028705",
                        },
                        {
                            language: "ko-kr",
                            name: "",
                            path: "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20220625003700_3RiwWggLSQ14iInN/Audio_Korean_2.8.0.zip",
                            size: "14570424892",
                            md5: "d47e5d2cafdfaf634d35788e04cced5f",
                            package_size: "7279969566",
                        },
                    ],
                    decompressed_path:
                        "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20220625003700_3RiwWggLSQ14iInN/ScatteredFiles",
                    segments: [],
                    package_size: "31793495408",
                },
                diffs: [
                    {
                        name: "game_2.7.0_2.8.0_hdiff_9yer4R2xEMmBnLpl.zip",
                        version: "2.7.0",
                        path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/game_2.7.0_2.8.0_hdiff_9yer4R2xEMmBnLpl.zip",
                        size: "9727210014",
                        md5: "76CCFA2D7C9E6B57FFF43AB808F9EAF0",
                        is_recommended_update: false,
                        voice_packs: [
                            {
                                language: "zh-cn",
                                name: "zh-cn_2.7.0_2.8.0_hdiff_RQ423ptsTU0xBlvi.zip",
                                path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/zh-cn_2.7.0_2.8.0_hdiff_RQ423ptsTU0xBlvi.zip",
                                size: "1735217172",
                                md5: "71F942BADD7BED1B3990CD05B10EF5E2",
                                package_size: "807182520",
                            },
                            {
                                language: "en-us",
                                name: "en-us_2.7.0_2.8.0_hdiff_bz3cEd7CMIsq8ak9.zip",
                                path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/en-us_2.7.0_2.8.0_hdiff_bz3cEd7CMIsq8ak9.zip",
                                size: "2061249565",
                                md5: "9B8C6B2C4C6CC7C19E0A8067DF02A09B",
                                package_size: "983415829",
                            },
                            {
                                language: "ja-jp",
                                name: "ja-jp_2.7.0_2.8.0_hdiff_5HizfaeoOwqklumD.zip",
                                path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/ja-jp_2.7.0_2.8.0_hdiff_5HizfaeoOwqklumD.zip",
                                size: "1989048875",
                                md5: "FC1F11C0A03E0B65EA9FE6EFB365CC67",
                                package_size: "884419150",
                            },
                            {
                                language: "ko-kr",
                                name: "ko-kr_2.7.0_2.8.0_hdiff_eXNaWnorU52ysCxB.zip",
                                path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/ko-kr_2.7.0_2.8.0_hdiff_eXNaWnorU52ysCxB.zip",
                                size: "1709918343",
                                md5: "8AE719F7ABCC33E77720F74C6B8412EB",
                                package_size: "799860589",
                            },
                        ],
                        package_size: "4624410272",
                    },
                    {
                        name: "game_2.6.0_2.8.0_hdiff_z8sdMlFY30RawybQ.zip",
                        version: "2.6.0",
                        path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/game_2.6.0_2.8.0_hdiff_z8sdMlFY30RawybQ.zip",
                        size: "14516111262",
                        md5: "FA58393058756638FDCCDC67CFB99737",
                        is_recommended_update: false,
                        voice_packs: [
                            {
                                language: "zh-cn",
                                name: "zh-cn_2.6.0_2.8.0_hdiff_3XkJ69EusVlhK0ZT.zip",
                                path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/zh-cn_2.6.0_2.8.0_hdiff_3XkJ69EusVlhK0ZT.zip",
                                size: "12878986440",
                                md5: "8432610F18718D86A72C43B7AD0D7183",
                                package_size: "5997132689",
                            },
                            {
                                language: "en-us",
                                name: "en-us_2.6.0_2.8.0_hdiff_76vp3Hn95syWFSTf.zip",
                                path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/en-us_2.6.0_2.8.0_hdiff_76vp3Hn95syWFSTf.zip",
                                size: "15238656726",
                                md5: "4898E8460BDF15C25CBC8B3D4C962331",
                                package_size: "7304926673",
                            },
                            {
                                language: "ja-jp",
                                name: "ja-jp_2.6.0_2.8.0_hdiff_eVi6nIOGaAmKxNtp.zip",
                                path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/ja-jp_2.6.0_2.8.0_hdiff_eVi6nIOGaAmKxNtp.zip",
                                size: "15531162741",
                                md5: "C31131ADC8905C66D25820D04F756055",
                                package_size: "7043073173",
                            },
                            {
                                language: "ko-kr",
                                name: "ko-kr_2.6.0_2.8.0_hdiff_R1Yv6U7ESAfenGgO.zip",
                                path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/ko-kr_2.6.0_2.8.0_hdiff_R1Yv6U7ESAfenGgO.zip",
                                size: "12564280923",
                                md5: "7AFF1464A8640A88B7258A9BAFF4C974",
                                package_size: "5915986450",
                            },
                        ],
                        package_size: "7002064626",
                    },
                ],
            },
            plugin: {
                plugins: [
                    {
                        name: "DXSETUP.zip",
                        version: "",
                        path: "https://autopatchcn.yuanshen.com/client_app/plugins/DXSETUP.zip",
                        size: "100647892",
                        md5: "CA2AC3835D7D7DA6CB8624FEFB177083",
                        entry: "",
                    },
                ],
                version: "1",
            },
            web_url: "https://ys.mihoyo.com/launcher",
            force_update: null,
            pre_download_game: {
                latest: {
                    name: "",
                    version: "3.0.0",
                    path: "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20220815143702_i3RDKzdbDWGYYfZZ/YuanShen_3.0.0.zip",
                    size: "73991297432",
                    md5: "cd1437c10a30127c61dc25da5d6e1d6b",
                    entry: "YuanShen.exe",
                    voice_packs: [
                        {
                            language: "zh-cn",
                            name: "",
                            path: "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20220815143702_i3RDKzdbDWGYYfZZ/Audio_Chinese_3.0.0.zip",
                            size: "16245462138",
                            md5: "c4decdaa35fe28db2e3377d731b61509",
                            package_size: "8117488189",
                        },
                        {
                            language: "en-us",
                            name: "",
                            path: "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20220815143702_i3RDKzdbDWGYYfZZ/Audio_English(US)_3.0.0.zip",
                            size: "18736543170",
                            md5: "9301e3ef3d4bd2f9578e9a7c3231044f",
                            package_size: "9363028705",
                        },
                        {
                            language: "ja-jp",
                            name: "",
                            path: "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20220815143702_i3RDKzdbDWGYYfZZ/Audio_Japanese_3.0.0.zip",
                            size: "20647803616",
                            md5: "eec13fe0b7d510e8b2e387ab3b0d1ce9",
                            package_size: "10318658928",
                        },
                        {
                            language: "ko-kr",
                            name: "",
                            path: "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20220815143702_i3RDKzdbDWGYYfZZ/Audio_Korean_3.0.0.zip",
                            size: "15966289264",
                            md5: "df75295aace0ce387f4016873a374b99",
                            package_size: "7977901752",
                        },
                    ],
                    decompressed_path:
                        "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20220815143702_i3RDKzdbDWGYYfZZ/ScatteredFiles",
                    segments: [],
                    package_size: "36990405836",
                },
                diffs: [
                    {
                        name: "game_2.8.0_3.0.0_hdiff_6azJoC5lYS1EUycW.zip",
                        version: "2.8.0",
                        path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/game_2.8.0_3.0.0_hdiff_6azJoC5lYS1EUycW.zip",
                        size: "18170014714",
                        md5: "B0D8407E9EC545FEFC9855ACB467893F",
                        is_recommended_update: false,
                        voice_packs: [
                            {
                                language: "zh-cn",
                                name: "zh-cn_2.8.0_3.0.0_hdiff_0osJAObthKPmDc3r.zip",
                                path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/zh-cn_2.8.0_3.0.0_hdiff_0osJAObthKPmDc3r.zip",
                                size: "1290950486",
                                md5: "7B534E5F6087E0B237027F48E3B95D63",
                                package_size: "603812662",
                            },
                            {
                                language: "en-us",
                                name: "en-us_2.8.0_3.0.0_hdiff_qHeyaTLsu6IcEb5J.zip",
                                path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/en-us_2.8.0_3.0.0_hdiff_qHeyaTLsu6IcEb5J.zip",
                                size: "1523243607",
                                md5: "4B0275D694C20EFE5F87F1EAF5E646E1",
                                package_size: "725190925",
                            },
                            {
                                language: "ja-jp",
                                name: "ja-jp_2.8.0_3.0.0_hdiff_15hvOf7Fbrslt3W9.zip",
                                path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/ja-jp_2.8.0_3.0.0_hdiff_15hvOf7Fbrslt3W9.zip",
                                size: "1606124057",
                                md5: "872FC08C821961DC6B09A056F452CC1D",
                                package_size: "691631947",
                            },
                            {
                                language: "ko-kr",
                                name: "ko-kr_2.8.0_3.0.0_hdiff_iNx3dcsKA81TtRUH.zip",
                                path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/ko-kr_2.8.0_3.0.0_hdiff_iNx3dcsKA81TtRUH.zip",
                                size: "1304617785",
                                md5: "CD970BCE6D415FCFBBF3D12713F27CBF",
                                package_size: "605387002",
                            },
                        ],
                        package_size: "8887485794",
                    },
                    {
                        name: "game_2.7.0_3.0.0_hdiff_jWBmFtXMu3v17cg8.zip",
                        version: "2.7.0",
                        path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/game_2.7.0_3.0.0_hdiff_jWBmFtXMu3v17cg8.zip",
                        size: "21886207776",
                        md5: "4F5BACA67FF47A629D53D149D54E6EE8",
                        is_recommended_update: false,
                        voice_packs: [
                            {
                                language: "zh-cn",
                                name: "zh-cn_2.7.0_3.0.0_hdiff_U5s7ShiHnT8M0JPq.zip",
                                path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/zh-cn_2.7.0_3.0.0_hdiff_U5s7ShiHnT8M0JPq.zip",
                                size: "3014998269",
                                md5: "3B962D44621B6B1849FA6E561EA7F38D",
                                package_size: "1410714282",
                            },
                            {
                                language: "en-us",
                                name: "en-us_2.7.0_3.0.0_hdiff_1Bevc4h5Js9U0aNy.zip",
                                path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/en-us_2.7.0_3.0.0_hdiff_1Bevc4h5Js9U0aNy.zip",
                                size: "3572963338",
                                md5: "3C5C0734111530478E080A6482E70031",
                                package_size: "1708131625",
                            },
                            {
                                language: "ja-jp",
                                name: "ja-jp_2.7.0_3.0.0_hdiff_sQ3Snd7JCObwVkpK.zip",
                                path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/ja-jp_2.7.0_3.0.0_hdiff_sQ3Snd7JCObwVkpK.zip",
                                size: "3583727709",
                                md5: "89814FBB8BE048AA9A25DB49EBCD3D2B",
                                package_size: "1575628615",
                            },
                            {
                                language: "ko-kr",
                                name: "ko-kr_2.7.0_3.0.0_hdiff_OEeh67CLowc25ijF.zip",
                                path: "https://autopatchcn.yuanshen.com/client_app/update/hk4e_cn/18/ko-kr_2.7.0_3.0.0_hdiff_OEeh67CLowc25ijF.zip",
                                size: "3002892276",
                                md5: "5193DD9C0CD169BAAC274CBF8C5F03B6",
                                package_size: "1404711700",
                            },
                        ],
                        package_size: "10675094458",
                    },
                ],
            },
            deprecated_packages: [
                { name: "game_2.5.0_2.7.0_hdiff_gctEXCzIRUjLFMNl.zip", md5: "91774624FD4B85C4C0AB646F24BA9A23" },
                { name: "zh-cn_2.5.0_2.7.0_hdiff_cpqRB3iKUWOHVlXI.zip", md5: "82CC2D1A2B79E442ED16131BE7113AF6" },
                { name: "en-us_2.5.0_2.7.0_hdiff_1LBKZjQvyiJg0hYm.zip", md5: "A129FE2CA342E042BD299E555D95056A" },
                { name: "ja-jp_2.5.0_2.7.0_hdiff_gQTvCjWhI13b0ymJ.zip", md5: "C84BEA181193827C478886E15A367481" },
                { name: "ko-kr_2.5.0_2.7.0_hdiff_oQD5rbxvKSTRaLsd.zip", md5: "2AC8171C1B07A93C2D017D210DE03093" },
                { name: "game_2.6.0_2.7.0_hdiff_dsyhYJaEwc1SNe3p.zip", md5: "562ED0460088878328B9064527770DF8" },
                { name: "zh-cn_2.6.0_2.7.0_hdiff_AaprnYu9VWj3Xfmw.zip", md5: "0AC3A7D995962D2966D26449A15882D3" },
                { name: "en-us_2.6.0_2.7.0_hdiff_EdxYmJUbN7g4c0FZ.zip", md5: "5F09F30AFFA62CB0C0AE491EF9F27A10" },
                { name: "ja-jp_2.6.0_2.7.0_hdiff_AUyVStRQdmpv7oqj.zip", md5: "E63B67A61AAE1579FC4EE8544163A0A0" },
                { name: "ko-kr_2.6.0_2.7.0_hdiff_JmrnpGc0kuqbhTBF.zip", md5: "05BEFE4197BB329F2145D3C7F3DDDA9F" },
                { name: "YuanShen_2.7.0.zip", md5: "276d2ea7e9b2d22b5283e1127f755cc2" },
                { name: "Audio_Chinese_2.7.0.zip", md5: "09a35ee3c77e6e539219d19366c95c46" },
                { name: "Audio_English(US)_2.7.0.zip", md5: "5d72193016f63627b10ece48eb2d6786" },
                { name: "Audio_Japanese_2.7.0.zip", md5: "10209a975ff9a61bed0d615b5c570579" },
                { name: "Audio_Korean_2.7.0.zip", md5: "e4b17f0f1dd51c991cccb9ee02a04122" },
                { name: "game_2.4.0_2.6.0_hdiff_SzRnD1djlW5LF3g2.zip", md5: "BA5180A48AF382A07426FAE1EDF6E2AF" },
                { name: "zh-cn_2.4.0_2.6.0_hdiff_9AkQhmDICMU8q3Jj.zip", md5: "6EF0B3B4AA7814AA1AAEE1983071DE98" },
                { name: "en-us_2.4.0_2.6.0_hdiff_0Ut2EZ9cCuwMsmSF.zip", md5: "9B33FE015CEA6D0C87D818716520A9CD" },
                { name: "ja-jp_2.4.0_2.6.0_hdiff_omWbUrt6uSgeAlPF.zip", md5: "4711131133357A816899ED9A6EB0A761" },
                { name: "ko-kr_2.4.0_2.6.0_hdiff_rGmPDBxlaed2jHcA.zip", md5: "64EA780E583094DAC9C8120465F9C16B" },
                { name: "game_2.5.0_2.6.0_hdiff_UXOZ0Q2EvzntVa4Y.zip", md5: "81C84936596080240330D0C4E0CCFAF9" },
                { name: "zh-cn_2.5.0_2.6.0_hdiff_MLvpJq9lZgHbTc1O.zip", md5: "4D45046C5EE2ACDA49CBF7DE4E102852" },
                { name: "en-us_2.5.0_2.6.0_hdiff_PU3KXIpxaNW26y5Q.zip", md5: "BFB4182175B45569698A019EAC34DA13" },
                { name: "ja-jp_2.5.0_2.6.0_hdiff_VahNzv4fbux6G2jF.zip", md5: "75382677E2A2136C6C103FEF3846E4F6" },
                { name: "ko-kr_2.5.0_2.6.0_hdiff_xD8lLITNEQoikq2A.zip", md5: "0C52EA136031CA0446385A53960F6503" },
                { name: "YuanShen_2.6.0.zip", md5: "ca777b0192aa3c64e6c0335222dcca40" },
                { name: "Audio_Chinese_2.6.0.zip", md5: "733851efe8c0e30316249ee65887e3ac" },
                { name: "Audio_English(US)_2.6.0.zip", md5: "336214dea96eac9624a8da84e71ba6ce" },
                { name: "Audio_Japanese_2.6.0.zip", md5: "3d695a85ab81506beaa0a3d0a19462c9" },
                { name: "Audio_Korean_2.6.0.zip", md5: "01ffd43d9ee446d91baec07d0448deb7" },
            ],
            sdk: null,
            deprecated_files: [{ name: "/YuanShen_Data/Plugins/PCGameSDK.dll", md5: "" }],
        },
    });
}