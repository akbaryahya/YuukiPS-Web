export default function handler(req, res) {
    res.status(200).json({
        retcode: 0,
        message: "OK",
        data: {
            game: {
                latest: {
                    name: "",
                    version: "3.4.0",
                    path: "https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20230109135018_10QhExKHwAoa4ecr/GenshinImpact_3.4.0.zip",
                    size: "95809731298",
                    md5: "d431470c80f8f12c1381faa7cdc77a53",
                    entry: "GenshinImpact.exe",
                    voice_packs: [
                        {
                            language: "zh-cn",
                            name: "",
                            path: "https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20230109135018_10QhExKHwAoa4ecr/Audio_Chinese_3.4.0.zip",
                            size: "16997081416",
                            md5: "df84f79e3fdb63a2516177ef80676965",
                            package_size: "8493297828",
                        },
                        {
                            language: "en-us",
                            name: "",
                            path: "https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20230109135018_10QhExKHwAoa4ecr/Audio_English(US)_3.4.0.zip",
                            size: "19423737938",
                            md5: "f37bc4ab004b79cfa50ee425cec06f47",
                            package_size: "9706626089",
                        },
                        {
                            language: "ja-jp",
                            name: "",
                            path: "https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20230109135018_10QhExKHwAoa4ecr/Audio_Japanese_3.4.0.zip",
                            size: "21764495116",
                            md5: "49d4d1abf77180d82039d1206f165045",
                            package_size: "10877004678",
                        },
                        {
                            language: "ko-kr",
                            name: "",
                            path: "https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20230109135018_10QhExKHwAoa4ecr/Audio_Korean_3.4.0.zip",
                            size: "16674958870",
                            md5: "ea9e18025ab6f9240e7683933a38098f",
                            package_size: "8332236555",
                        },
                    ],
                    decompressed_path:
                        "https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20230109135018_10QhExKHwAoa4ecr/ScatteredFiles",
                    segments: [
                        {
                            path: "https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20230109135018_10QhExKHwAoa4ecr/GenshinImpact_3.4.0.zip.001",
                            md5: "d45d512b590aea3b6c7fcdbc7545c0ac",
                        },
                        {
                            path: "https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20230109135018_10QhExKHwAoa4ecr/GenshinImpact_3.4.0.zip.002",
                            md5: "1d055c932c4f40525116443b2e072072",
                        },
                        {
                            path: "https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20230109135018_10QhExKHwAoa4ecr/GenshinImpact_3.4.0.zip.003",
                            md5: "f55b4de7c409b0b9dc4db3d102cf1a72",
                        },
                        {
                            path: "https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20230109135018_10QhExKHwAoa4ecr/GenshinImpact_3.4.0.zip.004",
                            md5: "f99bea5dc139d97b0426a06ea5078fad",
                        },
                        {
                            path: "https://autopatchhk.yuanshen.com/client_app/download/pc_zip/20230109135018_10QhExKHwAoa4ecr/GenshinImpact_3.4.0.zip.005",
                            md5: "f1e28444e258f35d835c4a47813893b4",
                        },
                    ],
                    package_size: "47899622769",
                },
                diffs: [
                    {
                        name: "game_3.3.0_3.4.0_hdiff_IxKGMXhCLzZAJqUm.zip",
                        version: "3.3.0",
                        path: "https://autopatchhk.yuanshen.com/client_app/update/hk4e_global/10/game_3.3.0_3.4.0_hdiff_IxKGMXhCLzZAJqUm.zip",
                        size: "14469310054",
                        md5: "D88BF205205500A02D677A668ED63DC4",
                        is_recommended_update: false,
                        voice_packs: [
                            {
                                language: "zh-cn",
                                name: "zh-cn_3.3.0_3.4.0_hdiff_CwIhpT8VfBUqlSEg.zip",
                                path: "https://autopatchhk.yuanshen.com/client_app/update/hk4e_global/10/zh-cn_3.3.0_3.4.0_hdiff_CwIhpT8VfBUqlSEg.zip",
                                size: "847454322",
                                md5: "AF15A10270F7D9F778240FF00BEA9249",
                                package_size: "392524716",
                            },
                            {
                                language: "en-us",
                                name: "en-us_3.3.0_3.4.0_hdiff_kXarZuSHnoEYzWiq.zip",
                                path: "https://autopatchhk.yuanshen.com/client_app/update/hk4e_global/10/en-us_3.3.0_3.4.0_hdiff_kXarZuSHnoEYzWiq.zip",
                                size: "1007502813",
                                md5: "E2AA4A509F072D82A272FF7638CF7A4B",
                                package_size: "477519424",
                            },
                            {
                                language: "ja-jp",
                                name: "ja-jp_3.3.0_3.4.0_hdiff_4RnJjQLArch3yGOt.zip",
                                path: "https://autopatchhk.yuanshen.com/client_app/update/hk4e_global/10/ja-jp_3.3.0_3.4.0_hdiff_4RnJjQLArch3yGOt.zip",
                                size: "1032097015",
                                md5: "07E70377F6CAD84996D2A452B2F8D7D7",
                                package_size: "473131663",
                            },
                            {
                                language: "ko-kr",
                                name: "ko-kr_3.3.0_3.4.0_hdiff_j3fribpBSCJaMUnE.zip",
                                path: "https://autopatchhk.yuanshen.com/client_app/update/hk4e_global/10/ko-kr_3.3.0_3.4.0_hdiff_j3fribpBSCJaMUnE.zip",
                                size: "789627484",
                                md5: "0936886658D10161D8D45FF021DFB90A",
                                package_size: "370754302",
                            },
                        ],
                        package_size: "7001736910",
                    },
                    {
                        name: "game_3.2.0_3.4.0_hdiff_2Tv5e1BCLFnW0dPG.zip",
                        version: "3.2.0",
                        path: "https://autopatchhk.yuanshen.com/client_app/update/hk4e_global/10/game_3.2.0_3.4.0_hdiff_2Tv5e1BCLFnW0dPG.zip",
                        size: "18555673000",
                        md5: "528D54CB8D09A887807A7941C1062186",
                        is_recommended_update: false,
                        voice_packs: [
                            {
                                language: "zh-cn",
                                name: "zh-cn_3.2.0_3.4.0_hdiff_sJLa0SElyqR5dFBo.zip",
                                path: "https://autopatchhk.yuanshen.com/client_app/update/hk4e_global/10/zh-cn_3.2.0_3.4.0_hdiff_sJLa0SElyqR5dFBo.zip",
                                size: "1743322743",
                                md5: "7B92B08C915C91A24D9BDC50FE5158DD",
                                package_size: "812191701",
                            },
                            {
                                language: "en-us",
                                name: "en-us_3.2.0_3.4.0_hdiff_Onc2ZSWqiHMLh80p.zip",
                                path: "https://autopatchhk.yuanshen.com/client_app/update/hk4e_global/10/en-us_3.2.0_3.4.0_hdiff_Onc2ZSWqiHMLh80p.zip",
                                size: "2144833665",
                                md5: "09219429714F8F60476ABC6409406C54",
                                package_size: "1023085920",
                            },
                            {
                                language: "ja-jp",
                                name: "ja-jp_3.2.0_3.4.0_hdiff_QUa8erWEPHFwgGvc.zip",
                                path: "https://autopatchhk.yuanshen.com/client_app/update/hk4e_global/10/ja-jp_3.2.0_3.4.0_hdiff_QUa8erWEPHFwgGvc.zip",
                                size: "2113434985",
                                md5: "D260225C9BC550C471E403AFED57BE0F",
                                package_size: "965881670",
                            },
                            {
                                language: "ko-kr",
                                name: "ko-kr_3.2.0_3.4.0_hdiff_u1pfvG0C8lakLRKT.zip",
                                path: "https://autopatchhk.yuanshen.com/client_app/update/hk4e_global/10/ko-kr_3.2.0_3.4.0_hdiff_u1pfvG0C8lakLRKT.zip",
                                size: "1649005503",
                                md5: "09A14F0B7291F41502040B3704029351",
                                package_size: "777346505",
                            },
                        ],
                        package_size: "9037600451",
                    },
                ],
            },
            plugin: {
                plugins: [
                    {
                        name: "DXSETUP.zip",
                        version: "",
                        path: "https://autopatchhk.yuanshen.com/client_app/plugins/DXSETUP.zip",
                        size: "100647892",
                        md5: "CA2AC3835D7D7DA6CB8624FEFB177083",
                        entry: "",
                    },
                ],
                version: "1",
            },
            web_url: "https://genshin.hoyoverse.com/launcher",
            force_update: null,
            pre_download_game: null,
            deprecated_packages: [
                { name: "game_3.1.0_3.3.0_hdiff_IGL1F0SYrChkDmvf.zip", md5: "F0C52ACEA0DC3DAE19ED47485001B651" },
                { name: "zh-cn_3.1.0_3.3.0_hdiff_LSgFINh859GtE0fp.zip", md5: "E8D76B2DF8E07CAD171B421CF3A0898A" },
                { name: "en-us_3.1.0_3.3.0_hdiff_IAkYRNMdX7OrEaHS.zip", md5: "A015FC2AF7018084DE1DFFF711E0EC73" },
                { name: "ja-jp_3.1.0_3.3.0_hdiff_nYG9Lxsc5EUWXyrT.zip", md5: "BD8E266450FBCB7297814B6F6098D552" },
                { name: "ko-kr_3.1.0_3.3.0_hdiff_zkv4RZ7Y5jfPGauO.zip", md5: "CBFCEE77FA580EFCF0FC1DB1C6C9C2DD" },
                { name: "game_3.2.0_3.3.0_hdiff_fiuTl2cLqp198WVG.zip", md5: "AD69815CDE87E9691F89C838E0083D74" },
                { name: "zh-cn_3.2.0_3.3.0_hdiff_Y7EPh3tBmMbfwWac.zip", md5: "CCC23D1D64FB918BA9C0296F818AC142" },
                { name: "en-us_3.2.0_3.3.0_hdiff_Mtg67G54pwYTnuEA.zip", md5: "F816FADB78015FFC899E874118984DA9" },
                { name: "ja-jp_3.2.0_3.3.0_hdiff_DE9YUdTvyOecHkih.zip", md5: "C799E711292DFE0BF4885E4E8CE13A17" },
                { name: "ko-kr_3.2.0_3.3.0_hdiff_jfd7VWceoaE0A4uB.zip", md5: "9118CF7CFFF526666F5263C0C4515A6B" },
                { name: "GenshinImpact_3.3.0.zip", md5: "bf0d1a9187aa52f5f3e17be26a263d33" },
                { name: "GenshinImpact_3.3.0.zip.001", md5: "eaf6b1a19266d881cefb72f012a1430a" },
                { name: "GenshinImpact_3.3.0.zip.002", md5: "6eea9160c01c973ce2846f5832b56fbd" },
                { name: "GenshinImpact_3.3.0.zip.003", md5: "c64e69f71f703d157fab6051cda132f7" },
                { name: "GenshinImpact_3.3.0.zip.004", md5: "2dd8e99b31c0c881f5d1267ae3fbc89c" },
                { name: "GenshinImpact_3.3.0.zip.005", md5: "1cde29e7d59be759be015a4ce215aad9" },
                { name: "Audio_Chinese_3.3.0.zip", md5: "321e7ca77963d315225483bc42c1599e" },
                { name: "Audio_English(US)_3.3.0.zip", md5: "a4ecc37ab5d03598b711504c7343e185" },
                { name: "Audio_Japanese_3.3.0.zip", md5: "b9f1788f7e98bc7f4e23976f3b8acbe8" },
                { name: "Audio_Korean_3.3.0.zip", md5: "224db40327da5ec9d91042b6a1656934" },
                { name: "game_3.0.0_3.2.0_hdiff_0XM45IeyvRhgYCLj.zip", md5: "35B9B73256D49E6379F0F52BFE77A5D4" },
                { name: "zh-cn_3.0.0_3.2.0_hdiff_1n6f7JSmpBiHOvz8.zip", md5: "51146ADFE424F938E04E324140E1EE6A" },
                { name: "en-us_3.0.0_3.2.0_hdiff_ZkinY2VSEILsuAwq.zip", md5: "A26E05DE9C98847B9F5290E5EF289B82" },
                { name: "ja-jp_3.0.0_3.2.0_hdiff_vchfdp38qJjbgTPz.zip", md5: "8274BFA0DC3981281675CCC786F0CD8D" },
                { name: "ko-kr_3.0.0_3.2.0_hdiff_WuHL2AB9UVvayFsl.zip", md5: "EEE50A5C39521652BA2887CB8F99DA22" },
                { name: "game_3.1.0_3.2.0_hdiff_3B7InFiY1SDdN8Lv.zip", md5: "64D9BB5A4D8898287AB63BEF0882BB40" },
                { name: "zh-cn_3.1.0_3.2.0_hdiff_R8oNZkyzjwxYFGCQ.zip", md5: "B898C5E8B3BE55B7E9FF1034269E0630" },
                { name: "en-us_3.1.0_3.2.0_hdiff_ezXCZESyB4JuGs5g.zip", md5: "6B95E032754E65EF60376B1618B31517" },
                { name: "ja-jp_3.1.0_3.2.0_hdiff_mHfx98gkNpB36szQ.zip", md5: "4A03439170A5222BC49E1D18DB0A3E5F" },
                { name: "ko-kr_3.1.0_3.2.0_hdiff_dZwqgxaJQusz5e7E.zip", md5: "BB1561D6FD801B4BF5464DE70FF773CF" },
                { name: "GenshinImpact_3.2.0.zip", md5: "affa3679ab20e4893e04088f5f44ecff" },
                { name: "GenshinImpact_3.2.0.zip.001", md5: "7d4125fb2406ba50c2adb10fb702729c" },
                { name: "GenshinImpact_3.2.0.zip.002", md5: "ac57acfff0465c920bc1daff072f528e" },
                { name: "GenshinImpact_3.2.0.zip.003", md5: "e81ae36ce71aa018292f37f3daae434b" },
                { name: "GenshinImpact_3.2.0.zip.004", md5: "041c28681cfb29c1467f80e0ef5c6a86" },
                { name: "Audio_Chinese_3.2.0.zip", md5: "df20da65a6a95919a3026d33b2ca927d" },
                { name: "Audio_English(US)_3.2.0.zip", md5: "d253501dcf6a7eee5ce6e3037274ec52" },
                { name: "Audio_Japanese_3.2.0.zip", md5: "1f347d4799a36ae686fa330e28d871be" },
                { name: "Audio_Korean_3.2.0.zip", md5: "8baa1f4db3801f9ca83902155bac4b6c" },
                { name: "game_2.8.0_3.1.0_hdiff_vQp41GPwdscT3UxV.zip", md5: "9BC92DABF695939D461EF7EB0D3FBC11" },
                { name: "zh-cn_2.8.0_3.1.0_hdiff_xfwy75Z1dKCN6sEu.zip", md5: "058E84352A4395F42D84DA4847C9E8A0" },
                { name: "en-us_2.8.0_3.1.0_hdiff_Potvg1euXns4a5WK.zip", md5: "2F2C660B33A99710213BC20F875AFBEE" },
                { name: "ja-jp_2.8.0_3.1.0_hdiff_SFedYgkphMqGvtWZ.zip", md5: "EC81E420D732E2832C73EDED0D352529" },
                { name: "ko-kr_2.8.0_3.1.0_hdiff_FpEC0r5WxkMgD1cN.zip", md5: "B02ED003F6A9B143E39830F42967C882" },
                { name: "game_3.0.0_3.1.0_hdiff_JajVqm1LS2G5Wd3g.zip", md5: "93B7196C9A61393540449B60C36456B2" },
                { name: "zh-cn_3.0.0_3.1.0_hdiff_MZkPImOajGWFoehp.zip", md5: "FB72A2003D8BD5F4DC28BC05A5A3C4EF" },
                { name: "en-us_3.0.0_3.1.0_hdiff_J254a8oHvQTGMwu3.zip", md5: "529BE7E22E0086C22AD662B2F7D00771" },
                { name: "ja-jp_3.0.0_3.1.0_hdiff_3NZcVbSxzvXgMaq9.zip", md5: "6FB40F6102F9E96B81B68892801D5479" },
                { name: "ko-kr_3.0.0_3.1.0_hdiff_AhytWDJvIYoPU9nZ.zip", md5: "BA5FF66A5BE7ABE8F1D27EA327A519D2" },
                { name: "GenshinImpact_3.1.0.zip", md5: "39e5a6ded5569a5e480d8510b564f790" },
                { name: "Audio_Chinese_3.1.0.zip", md5: "676272909b4d7a3da9e7ed3da671bc68" },
                { name: "Audio_English(US)_3.1.0.zip", md5: "94d3aaa4db35c967f902d4c6a4ebe44a" },
                { name: "Audio_Japanese_3.1.0.zip", md5: "7cd360ef7498f359224fa3aefe153f97" },
                { name: "Audio_Korean_3.1.0.zip", md5: "1d8f1db8da82360abb54cff9e8f33815" },
            ],
            sdk: null,
            deprecated_files: [
                { name: "GenshinImpact_Data/Plugins/PCGameSDK.dll", md5: "" },
                { name: "mhyprot2.Sys", md5: "" },
                { name: "GenshinImpact_Data/Plugins/XInputInterface64.dll", md5: "" },
                { name: "GenshinImpact_Data/Plugins/sqlite3.dll", md5: "" },
                { name: "GenshinImpact_Data/Plugins/widevinecdmadapter.dll", md5: "" },
                { name: "GenshinImpact_Data/Plugins/InControlNative.dll", md5: "" },
                { name: "GenshinImpact_Data/Plugins/metakeeper.dll", md5: "" },
                { name: "GenshinImpact_Data/Plugins/d3dcompiler_43.dll", md5: "" },
            ],
        },
    });
}