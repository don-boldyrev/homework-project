export interface Weather {
    'title': string;
    'icon': string;
    'water': number;
    'temperature': number;
}

export interface SocialInfo {
    'title': string;
    'img': string;
    'followers': number;
    'following': number;
}

export interface Place {
    'id': string | number;
    'img': string;
    'address': string;
    'phone':  string;   // дополнительно задание pipe для форматирования
    'weather': Weather;
    'socialInfo': SocialInfo;
    'type': string;
}

export const PLACES: Place[]  = [
    {
    'id': 0,
    'img': 'https://goo.gl/Mv7Bea',
    'address': 'Stavropol Krai, Kislovodsk',
    'phone': '88793720021',
    'weather': {
        'title': 'Kislovodsk',
        'icon': 'https://goo.gl/sohKN2',
        'water': 76,
        'temperature': 5
    },
    'socialInfo': {
        'title': 'Kislovodsk',
        'img': 'https://goo.gl/agHMxc',
        'followers': 1803,
        'following': 1900
    },
    'type': 'city_resort'
},
{
    'id': 1,
    'img': 'https://goo.gl/AFL53k',
    'address': 'Stavropol Krai, Yessentuki',
    'phone': '88793460810',
    'weather': {
        'title': 'Yessentuki',
        'icon': 'https://goo.gl/K3wLdb',
        'water': 97,
        'temperature': 2
    },
    'socialInfo': {
        'title': 'Yessentuki',
        'img': 'https://goo.gl/XNgrD3',
        'followers': 1703,
        'following': 1180
    },
    'type': 'city_resort'
},
{
    'id': 2,
    'img': 'https://goo.gl/yXCBtP',
    'address': 'Stavropol Krai, Pyatigorsk',
    'phone': '88793335946',
    'weather': {
        'title': 'Pyatigorsk',
        'icon': 'https://goo.gl/yGGano',
        'water': 94,
        'temperature': 2
    },
    'socialInfo': {
        'title': 'Pyatigorsk',
        'img': 'https://goo.gl/fjrDkY',
        'followers': 2008,
        'following': 1905
    },
    'type': 'city_resort'
},
{
    'id': 3,
    'img': 'https://goo.gl/BS6ze3',
    'address': 'Karachay-Cherkessia, Dombay',
    'phone': '88787922466',
    'weather': {
        'title': 'Dombay',
        'icon': 'https://goo.gl/dj3sSi',
        'water': 97,
        'temperature': -1
    },
    'socialInfo': {
        'title': 'Dombay',
        'img': 'https://goo.gl/WSxXmU',
        'followers': 2202,
        'following': 1350
    },
    'type': 'mountain_resort'
},
{
    'id': 4,
    'img': 'https://goo.gl/KV74Yi',
    'address': 'Kabardino-Balkaria, Elbrus region',
    'phone': '79289157732',
    'weather': {
        'title': 'Elbrus region',
        'icon': 'https://goo.gl/kanNiH',
        'water': 94,
        'temperature': -27
    },
    'socialInfo': {
        'title': 'Elbrus region',
        'img': 'https://goo.gl/afDcRk',
        'followers': 3302,
        'following': 2500
    },
    'type': 'mountain_resort'
},
{
    'id': 5,
    'img': 'https://goo.gl/XT7UwZ',
    'address': 'Krasnodar Krai, Krasnaya Polyana',
    'phone': '8622437336',
    'weather': {
        'title': 'Krasnaya Polyana',
        'icon': 'https://goo.gl/TFrCUn',
        'water': 84,
        'temperature': 6
    },
    'socialInfo': {
        'title': 'Krasnaya Polyana',
        'img': 'https://goo.gl/4mZXB3',
        'followers': 3500,
        'following': 2450
    },
    'type': 'mountain_resort'
}
];
