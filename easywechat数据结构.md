$buttons = [
            [
                "type" => "view",
                "name" => "一一雲商",
                "url"  => "http://xxx.com/",
            ],
            [
                "type" => "view",
                "name" => "个人中心",
                "url"  => "http://xxx.com/",
            ],
            // ,
            // [
            //     "type" => "view",
            //     "name" => "关于我们",
            //     "url"  => "http://mp.weixin.qq.com/s/YJ1IjXjRbaQALoUSgd8j8g",

            //     // "url"  => "http://mp.weixin.qq.com/s?__biz=MzI1OTQ5NjM5Mw==&mid=2247483680&idx=1&sn=b2b2cfa28259eb9cea99ac6379939c05&chksm=ea794186dd0ec890e81b84292e49e4abbc8a7be1778292e5015f288c03345eceb3e729eb619b&mpshare=1&scene=1&srcid=1219gKH9oGEtqcY1roBaMM4z#rd

//            ",
//
//            //     // http://mp.weixin.qq.com/s?__biz=MzI1OTQ5NjM5Mw==&mid=2247483680&idx=1&sn=b2b2cfa28259eb9cea99ac6379939c05&chksm=ea794186dd0ec890e81b84292e49e4abbc8a7be1778292e5015f288c03345eceb3e729eb619b#rd
//
//            // ],
        ];

        $buttons = [
            [
                "type" => "click",
                "name" => "今日歌曲",
                "key"  => "V1001_TODAY_MUSIC"
            ],
            [
                "name"       => "菜单",
                "sub_button" => [
                    [
                        "type" => "view",
                        "name" => "搜索",
                        "url"  => "http://www.soso.com/"
                    ],
                    [
                        "type" => "view",
                        "name" => "视频",
                        "url"  => "http://v.qq.com/"
                    ],
                    [
                        "type" => "click",
                        "name" => "赞一下我们",
                        "key" => "V1001_GOOD"
                    ],
                ],
            ],
        ];
        
#### js部分

// vm.treeData = [{
        //     "type": "click",
        //     "name": "\u4eca\u65e5\u6b4c\u66f2",
        //     "key": "V1001_TODAY_MUSIC"
        // }, {
        //     "name": "\u83dc\u5355",
        //     "children": [{
        //         "type": "view",
        //         "name": "\u641c\u7d22",
        //         "url": "http:\/\/www.soso.com\/"
        //     }, {"type": "view", "name": "\u89c6\u9891", "url": "http:\/\/v.qq.com\/"}, {
        //         "type": "click",
        //         "name": "\u8d5e\u4e00\u4e0b\u6211\u4eec",
        //         "key": "V1001_GOOD"
        //     }]
        // }];