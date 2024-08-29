import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-Hans',
  title: "知识库",
  description: "归纳总结零零散散学习的知识，构建知识体系。",
  base: "/knowledge/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '看世界', link: '/world/', activeMatch: '/world/*', },
      { text: '心理学', link: '/psychology/', activeMatch: '/psychology/*', },
      { text: '哲学', link: '/philosophy/', activeMatch: '/philosophy/*', },
      {
        text: '语言',
        activeMatch: '/language/*',
        items: [
          { text: '汉语', link: '/language/chinese/',activeMatch: '/language/chinese/*', },
          { text: '英语', link: '/language/english/',activeMatch: '/language/english/*', },
        ]
      },
      {
        text: '生活',
        activeMatch: '/life/*',
        items: [
          { text: '日常', link: '/life/daily/',activeMatch: '/life/daily/*', },
          { text: '家庭', link: '/life/family/',activeMatch: '/life/family/*', },
          { text: '饮食', link: '/life/diet/',activeMatch: '/life/diet/*', },
          { 
            text: '穿搭', 
            activeMatch: '/life/dress/*', 
            items: [
              { text: '衣服', link: '/life/dress/clothes/',activeMatch: '/life/dress/clothes/*', },
              { text: '配饰', link: '/life/dress/accessories/',activeMatch: '/life/dress/accessories/*', },
              { text: '鞋子', link: '/life/dress/shoes/',activeMatch: '/life/dress/shoes/*', },
            ]
          },
          { text: '健康 & 医疗', link: '/life/health/',activeMatch: '/life/health/*', },
        ]
      }
    ],
    sidebar: {
      '/world/': [
        {
          text: '亚洲',
          items: [
            {
              text: '东亚',
              items: [
                { text: '中国', link: '/world/asia/China' },
                { text: '日本', link: '/world/asia/Japan' },
                { text: '韩国', link: '/world/asia/South-Korea' },
                { text: '朝鲜', link: '/world/asia/North-Korea' },
                { text: '蒙古', link: '/world/asia/Mongolia' }
              ]
            },
            {
              text: '东南亚',
              items: [
                { text: '老挝', link: '/world/asia/Lao' },
                { text: '柬埔寨', link: '/world/asia/Cambodia' },
                { text: '泰国', link: '/world/asia/Thailand' },
                { text: '缅甸', link: '/world/asia/Myanmar' },
                { text: '马来西亚', link: '/world/asia/Malaysia' },
                { text: '新加坡', link: '/world/asia/Singapore' },
                { text: '印度尼西亚', link: '/world/asia/Indonesia' },
                { text: '文莱', link: '/world/asia/Brunei' },
                { text: '菲律宾', link: '/world/asia/Philippines' },
                { text: '东帝汶', link: '/world/asia/Timor-Leste' },
                { text: '越南', link: '/world/asia/Vietnam' },
              ]
            },
            {
              text: '南亚',
              items: [
                { text: '印度', link: '/world/asia/India' },
                { text: '尼泊尔', link: '/world/asia/Nepal' },
                { text: '巴基斯坦', link: '/world/asia/Pakistan' },
                { text: '斯里兰卡', link: '/world/asia/Sri-Lanka' },
                { text: '孟加拉国', link: '/world/asia/Bangladesh' },
                { text: '不丹', link: '/world/asia/Bhutan' },
                { text: '马尔代夫', link: '/world/asia/Maldives' },
              ]
            },
            {
              text: '西亚',
              items: [
                { text: '伊朗', link: '/world/asia/Iran' },
                { text: '伊拉克', link: '/world/asia/Iraq' },
                { text: '阿塞拜疆', link: '/world/asia/Azerbaijan' },
                { text: '格鲁吉亚', link: '/world/asia/Georgia' },
                { text: '亚美尼亚', link: '/world/asia/Armenia' },
                { text: '土耳其', link: '/world/asia/Turkey' },
                { text: '叙利亚', link: '/world/asia/Syrian' },
                { text: '约旦', link: '/world/asia/Jordan' },
                { text: '以色列', link: '/world/asia/Israel' },
                { text: '巴勒斯坦', link: '/world/asia/Palestine' },
                { text: '沙特阿拉伯', link: '/world/asia/Saudi-Arabia' },
                { text: '巴林', link: '/world/asia/Bahrain' },
                { text: '卡塔尔', link: '/world/asia/Qatar' },
                { text: '也门', link: '/world/asia/Yemen' },
                { text: '阿曼', link: '/world/asia/Oman' },
                { text: '阿拉伯联合酋长国', link: '/world/asia/Arab-Emirates' },
                { text: '科威特', link: '/world/asia/Kuwait' },
                { text: '黎巴嫩', link: '/world/asia/Lebanon' },
                { text: '塞浦路斯', link: '/world/asia/Cyprus' },
                { text: '阿富汗', link: '/world/asia/Afghanistan' },
              ]
            },
            {
              text: '中亚',
              items: [
                { text: '哈萨克斯坦', link: '/world/asia/Kazakhstan' },
                { text: '吉尔吉斯斯坦', link: '/world/asia/Kyrgyz' },
                { text: '塔吉克斯坦', link: '/world/asia/Tajikistan' },
                { text: '乌兹别克斯坦', link: '/world/asia/Uzbekistan' },
                { text: '土库曼斯坦', link: '/world/asia/Turkmenistan' },
              ]
            },
          ]
        },
        {
          text: '欧洲',
          items: [
            {
              text: '东欧',
              items: [
                { text: '爱沙尼亚', link: '/world/europ/Estonia' },
                { text: '拉脱维亚', link: '/world/europ/Latvia' },
                { text: '立陶宛', link: '/world/europ/Lithuania' },
                { text: '俄罗斯', link: '/world/europ/Russia' },
                { text: '乌克兰', link: '/world/europ/Ukraine' },
                { text: '白俄罗斯', link: '/world/europ/Belarus' },
                { text: '摩尔多瓦', link: '/world/europ/Moldova' },
                { text: '罗马尼亚', link: '/world/europ/Romania' },
                { text: '保加利亚', link: '/world/europ/Bulgaria' },
                { text: '塞尔维亚', link: '/world/europ/Serbia' },
                { text: '克罗地亚', link: '/world/europ/Croatia' },
                { text: '斯洛文尼亚', link: '/world/europ/Slovenia' },
                { text: '波斯尼亚和黑塞哥维那', link: '/world/europ/Bosnia&Herzegovina' },
                { text: '黑山', link: '/world/europ/Montenegro' },
                { text: '北马其顿', link: '/world/europ/North-Macedonia' },
                { text: '阿尔巴尼亚', link: '/world/europ/Albania' },
              ]
            },
            {
              text: '西欧',
              items: [
                { text: '英国', link: '/world/europ/UK' },
                { text: '爱尔兰', link: '/world/europ/Ireland' },
                { text: '荷兰', link: '/world/europ/Netherlands' },
                { text: '比利时', link: '/world/europ/Belgium' },
                { text: '卢森堡', link: '/world/europ/Luxembourg' },
                { text: '法国', link: '/world/europ/French' },
                { text: '摩纳哥', link: '/world/europ/Monaco' },
              ]
            },
            {
              text: '南欧',
              items: [
                { text: '西班牙', link: '/world/europ/Spain' },
                { text: '葡萄牙', link: '/world/europ/Portuguese' },
                { text: '安道尔', link: '/world/europ/Andorra' },
                { text: '意大利', link: '/world/europ/Italy' },
                { text: '希腊', link: '/world/europ/Hellenic' },
                { text: '马耳他', link: '/world/europ/Malta' },
                { text: '梵蒂冈', link: '/world/europ/Vatican' },
                { text: '圣马力诺', link: '/world/europ/San-Marino' },
                { text: '斯洛文尼亚', link: '/world/europ/Slovenia' },
                { text: '克罗地亚', link: '/world/europ/Croatia' },
                { text: '阿尔巴尼亚', link: '/world/europ/Albania' },
                { text: '罗马尼亚', link: '/world/europ/Romania' },
                { text: '保加利亚', link: '/world/europ/Bulgaria' },
                { text: '塞尔维亚', link: '/world/europ/Serbia' },
                { text: '黑山', link: '/world/europ/Montenegro' },
                { text: '北马其顿', link: '/world/europ/North-Macedonia' },
                { text: '波斯尼亚和黑塞哥维那', link: '/world/europ/Bosnia&Herzegovina' },
              ]
            },
            {
              text: '北欧',
              items: [
                { text: '丹麦', link: '/world/europ/Denmark' },
                { text: '挪威', link: '/world/europ/Norway' },
                { text: '瑞典', link: '/world/europ/Sweden' },
                { text: '芬兰', link: '/world/europ/Finland' },
                { text: '冰岛', link: '/world/europ/Iceland' },
              ]
            },
            {
              text: '中欧',
              items: [
                { text: '德国', link: '/world/europ/Germany' },
                { text: '波兰', link: '/world/europ/Poland' },
                { text: '捷克', link: '/world/europ/Czech' },
                { text: '斯洛伐克', link: '/world/europ/Slovak' },
                { text: '匈牙利', link: '/world/europ/Hungary' },
                { text: '奥地利', link: '/world/europ/Austria' },
                { text: '列支敦士登', link: '/world/europ/Liechtenstein' },
                { text: '瑞士', link: '/world/europ/Swiss' },
              ]
            },
          ]
        },
        {
          text: '非洲',
          items: [
            {
              text: '东非',
              items: [
                { text: '埃塞俄比亚', link: '/world/africa/Ethiopia' },
                { text: '厄立特里亚', link: '/world/africa/Eritrea' },
                { text: '吉布提', link: '/world/africa/Djibouti' },
                { text: '索马里', link: '/world/africa/Somalia' },
                { text: '肯尼亚', link: '/world/africa/Kenya' },
                { text: '乌干达', link: '/world/africa/Uganda' },
                { text: '卢旺达', link: '/world/africa/Rwanda' },
                { text: '布隆迪', link: '/world/africa/Burundi' },
                { text: '坦桑尼亚', link: '/world/africa/Tanzania' },
                { text: '塞舌尔', link: '/world/africa/Seychelles' },
              ]
            },
            {
              text: '西非',
              items: [
                { text: '毛里塔尼亚', link: '/world/africa/Mauritania' },
                { text: '塞内加尔', link: '/world/africa/Senegal' },
                { text: '冈比亚', link: '/world/africa/Gambia' },
                { text: '马里', link: '/world/africa/Mali' },
                { text: '布基纳法索', link: '/world/africa/Burkina-Faso' },
                { text: '几内亚', link: '/world/africa/Guinea' },
                { text: '几内亚比绍', link: '/world/africa/Guinea-Bissau' },
                { text: '佛得角', link: '/world/africa/Cabo-Verde' },
                { text: '塞拉利昂', link: '/world/africa/Sierra-Leone' },
                { text: '利比里亚', link: '/world/africa/Liberia' },
                { text: '科特迪瓦', link: '/world/africa/Cote-dIvoire' },
                { text: '加纳', link: '/world/africa/Ghana' },
                { text: '多哥', link: '/world/africa/Togo' },
                { text: '贝宁', link: '/world/africa/Benin' },
                { text: '尼日尔', link: '/world/africa/Niger' },
                { text: '尼日利亚', link: '/world/africa/Nigeria' },
              ]
            },
            {
              text: '南非',
              items: [
                { text: '安哥拉', link: '/world/africa/Angola' },
                { text: '赞比亚', link: '/world/africa/Zambia' },
                { text: '马拉维', link: '/world/africa/Malawi' },
                { text: '莫桑比克', link: '/world/africa/Mozambique' },
                { text: '津巴布韦', link: '/world/africa/Zimbabwe' },
                { text: '博茨瓦纳', link: '/world/africa/Botswana' },
                { text: '纳米比亚', link: '/world/africa/Namibia' },
                { text: '南非', link: '/world/africa/South-Africa' },
                { text: '斯威士兰', link: '/world/africa/Eswatini' },
                { text: '莱索托', link: '/world/africa/Lesotho' },
                { text: '马达加斯加', link: '/world/africa/Madagascar' },
                { text: '毛里求斯', link: '/world/africa/Mauritius' },
                { text: '科摩罗', link: '/world/africa/Comoros' },
              ]
            },
            {
              text: '北非',
              items: [
                { text: '埃及', link: '/world/africa/Egypt' },
                { text: '利比亚', link: '/world/africa/Libya' },
                { text: '突尼斯', link: '/world/africa/Tunisia' },
                { text: '阿尔及利亚', link: '/world/africa/Algeria' },
                { text: '摩洛哥', link: '/world/africa/Morocco' },
                { text: '苏丹', link: '/world/africa/Sudan' },
              ]
            },
            {
              text: '中非',
              items: [
                { text: '中非共和国', link: '/world/africa/Central-African' },
                { text: '乍得', link: '/world/africa/Chad' },
                { text: '喀麦隆', link: '/world/africa/Cameroon' },
                { text: '赤道几内亚', link: '/world/africa/Equatorial-Guinea' },
                { text: '加蓬', link: '/world/africa/Gabonese' },
                { text: '刚果共和国', link: '/world/africa/Congo' },
                { text: '刚果民主共和国', link: '/world/africa/Democratic-Congo' },
                { text: '圣多美和普林西比', link: '/world/africa/Sao-Tome-Principe' },
              ]
            },
          ]
        },
        {
          text: '北美洲',
          items: [
            { text: '美国', link: '/world/north-america/USA' },
            { text: '加拿大', link: '/world/north-america/Canada' },
            { text: '墨西哥', link: '/world/north-america/Mexica' },
            { text: '危地马拉', link: '/world/north-america/Guatemala' },
            { text: '伯利兹', link: '/world/north-america/Belize' },
            { text: '萨尔瓦多', link: '/world/north-america/Salvado' },
            { text: '洪都拉斯', link: '/world/north-america/Honduras' },
            { text: '巴拿马', link: '/world/north-america/Panama' },
            { text: '巴哈马', link: '/world/north-america/Bahamas' },
            { text: '古巴', link: '/world/north-america/Cuba' },
            { text: '牙买加', link: '/world/north-america/Jamaica' },
            { text: '海地', link: '/world/north-america/Haiti' },
            { text: '多米尼加', link: '/world/north-america/Dominican' },
            { text: '哥斯达黎加', link: '/world/north-america/Costa-Rica' },
            { text: '圣基茨和尼维斯', link: '/world/north-america/Saint-Kitts-Nevis' },
            { text: '安提瓜和巴布达', link: '/world/north-america/Antigua-Barbuda' },
            { text: '多米尼克', link: '/world/north-america/Dominica' },
            { text: '圣卢西亚', link: '/world/north-america/Saint-Lucia' },
            { text: '圣文森特和格林纳丁斯', link: '/world/north-america/Saint-Vincent-Grenadines' },
            { text: '巴巴多斯', link: '/world/north-america/Barbados' },
            { text: '格林纳达', link: '/world/north-america/Grenada' },
            { text: '特立尼达和多巴哥', link: '/world/north-america/Trinidad-Tobago' },
            { text: '尼加拉瓜', link: '/world/north-america/Nicaragua' },
          ]
        },
        {
          text: '南美洲',
          items: [
            { text: '厄瓜多尔', link: '/world/south-america/Ecuador' },
            { text: '哥伦比亚', link: '/world/south-america/Colombia' },
            { text: '委内瑞拉', link: '/world/south-america/Venezuela' },
            { text: '秘鲁', link: '/world/south-america/Peru' },
            { text: '巴西', link: '/world/south-america/Brazil' },
            { text: '智利', link: '/world/south-america/Chile' },
            { text: '乌拉圭', link: '/world/south-america/Uruguay' },
            { text: '巴拉圭', link: '/world/south-america/Paraguay' },
            { text: '阿根廷', link: '/world/south-america/Argentina' },
            { text: '玻利维亚', link: '/world/south-america/Bolivia' },
            { text: '圭亚那', link: '/world/south-america/Guyana' },
            { text: '苏里南', link: '/world/south-america/Suriname' },
            { text: '福克兰群岛', link: '/world/south-america/Falkland' },
          ]
        },
        {
          text: '大洋洲',
          items: [
            { text: '澳大利亚', link: '/world/oceania/Australia' },
            { text: '新西兰', link: '/world/oceania/New-Zealand' },
            { text: '帕劳', link: '/world/oceania/Palau' },
            { text: '密克罗尼西亚联邦', link: '/world/oceania/Micronesia' },
            { text: '马绍尔群岛', link: '/world/oceania/Marshall-Islands' },
            { text: '瑙鲁', link: '/world/oceania/Nauru' },
            { text: '巴布亚新几内亚', link: '/world/oceania/Papua-New-Guinea' },
            { text: '所罗门群岛', link: '/world/oceania/Solomon-Islands' },
            { text: '瓦努阿图', link: '/world/oceania/Vanuatu' },
            { text: '图瓦卢', link: '/world/oceania/Tuvalu' },
            { text: '斐济', link: '/world/oceania/Fiji' },
            { text: '萨摩亚', link: '/world/oceania/Samoa' },
            { text: '基里巴斯', link: '/world/oceania/Kiribati' },
            { text: '汤加', link: '/world/oceania/Tonga' },
            { text: '库克群岛', link: '/world/oceania/Cook-Islands' },
            { text: '纽埃', link: '/world/oceania/Niue' },
          ]
        },
      ],
      'philosophy': [

      ],
      'psychology': [

      ],
      'life/dress/clothes': [
        {
          items: [
            { text: '开篇', link: '/life/dress/colthes/index'}
            { text: '面料', link: '/life/dress/colthes/fabric'}
          ]
        },
        {
          text: '上衣',
          items: [
            { text: '西装', link: '/life/dress/clothes/Tops/Suit' },
            { text: '夹克', link: '/life/dress/clothes/Tops/Jacket' },
            { text: '帽衫', link: '/life/dress/clothes/Tops/Hoodie' },
            { text: '衬衫', link: '/life/dress/clothes/Tops/Shirt' },
            { text: '毛衣', link: '/life/dress/clothes/Tops/Sweater' },
            { text: 'T 恤', link: '/life/dress/clothes/Tops/T-shirt' },
          ]
        },
        {
          text: '裤子',
          items: [
            { text: '牛仔裤', link: '/life/dress/clothes/Bottoms/Jeans' },
            { text: '短裤', link: '/life/dress/clothes/Bottoms/Shorts' },
          ]
        },
        {
          text: '内衣',
          items: [
            { text: '内衣', link: '/life/dress/clothes/Underwear/Underwear' },
            { text: '汗衫', link: '/life/dress/clothes/Underwear/Undershirt' },
            { text: '内裤', link: '/life/dress/clothes/Underwear/Panties' },
          ]
        },
      ],
      'life/dress/accessories': [
        {
          text: '配饰',
          items: [
            { text: '腕表', link: '/life/dress/accessories/WristWatch' },
            { text: '包', link: '/life/dress/accessories/Bag' },
            { text: '帽子', link: '/life/dress/accessories/Hat' },
            { text: '腰带', link: '/life/dress/accessories/Belt' },
            { text: '领带', link: '/life/dress/accessories/Tie' },
            { text: '围巾', link: '/life/dress/accessories/Scarf' },
            { text: '手套', link: '/life/dress/accessories/Gloves' },
            { text: '袜子', link: '/life/dress/accessories/Socks' },
            { text: '首饰', link: '/life/dress/accessories/Jewelry' },
          ]
        },
      ],
      'life/daily': [
        {
          text: '日常',
          items: [
            { text: '开篇', link: '/life/daily/index' },
            { text: '交通', link: '/life/daily/traffic' },
          ]
        },
      ],
      'life/family': [
        {
          text: '孩子',
          items: [
            { text: '照护', link: '/life/family/kid/care' },
            { text: '性教育', link: '/life/family/kid/sex-education' },
          ]
        },
      ],
      'life/health': [
        {
          text: '健康 & 医疗',
          items: [
            { text: '常见防护', link: '/life/health/common-protection' },
            { text: '医疗', link: '/life/health/medical-treatment' },
            { text: '体检', link: '/life/health/examination' },
            { text: '健身', link: '/life/health/fitness' },
          ]
        },
      ],
      'life/diet': [
        {
          text: '食物',
          items: [
            { text: 'Index', link: '/life/diet/food/index' },
          ]
        },
        {
          text: '饮料',
          items: [
            { text: '茶', link: '/life/diet/beverage/tea' },
          ]
        },
      ],
      'language/english': [
        {
          text: '英语',
          items: [
            { text: '开篇', link: '/language/english/index' },
            { text: '语法', link: '/language/english/grammar' },
            { text: '会话', link: '/language/english/conversations' },
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/hefengbao' }
    ],
    lastUpdated: {
      text: '更新时间：',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    footer: {
      message: '基于 MIT 许可发布',
      copyright: `版权所有 © 2024-${new Date().getFullYear()} 贺丰宝`
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
  }
})
