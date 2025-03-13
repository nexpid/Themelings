// app/utils/PremiumTypeUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    verify = argBar;
    zuuluu = argFre;
    offset = argPlu;
    oscard = function(argFoo, argBar) { // Original name: isPremiumAtLeast
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argFoo;
            report = argBar;
            michal = null;
            entity = michal == report;
            if(entity) { _fun00002_ip = 48; continue _fun00001 }
 15:
            michal = michal != oscard;
            if(!michal) { _fun00002_ip = 45; continue _fun00001 }
 22:
            tangon = _closure1_slot0;
            tangon = tangon[oscard];
            zuuluu = _closure1_slot0;
            zuuluu = zuuluu[report];
            michal = tangon >= zuuluu;
 45:
            entity = michal;
 48:
            return entity;
        }
    };
    var _closure1_slot1 = oscard;
    tangon = function(argFoo, argBar) { // Original name: isPremium
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            tangon = null;
            entity = tangon != michal;
            if(!entity) { _fun00004_ip = 22; continue _fun00003 }
 12:
            zuuluu = michal.premiumType;
            entity = tangon != zuuluu;
 22:
            if(!entity) { _fun00004_ip = 49; continue _fun00003 }
 25:
            report = _closure1_slot1;
            tangon = michal.premiumType;
            zuuluu = undefined;
            michal = argBar;
            entity = report.bind(zuuluu)(tangon, michal);
 49:
            return entity;
        }
    };
    michal = function(argFoo, argBar) { // Original name: isPremiumExactly
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            entity = null;
            entity = entity != michal;
            if(!entity) { _fun00006_ip = 25; continue _fun00005 }
 12:
            zuuluu = michal.premiumType;
            michal = argBar;
            entity = zuuluu === michal;
 25:
            return entity;
        }
    };
    entity = global;
    yankee = entity.Object;
    option = yankee.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = option.bind(yankee)(zuuluu, entity, golfie);
    entity = 0;
    golfie = offset[entity];
    entity = undefined;
    golfie = verify.bind(entity)(golfie);
    golfie = golfie.PremiumTypeOrder;
    var _closure1_slot0 = golfie;
    golfie = {};
    golfie['isPremiumAtLeast'] = oscard;
    golfie['isPremium'] = tangon;
    golfie['isPremiumExactly'] = michal;
    option = 1;
    option = offset[option];
    offset = verify.bind(entity)(option);
    verify = offset.fileFinishedImporting;
    option = 'utils/PremiumTypeUtils.tsx';
    option = verify.bind(offset)(option);
    zuuluu['default'] = golfie;
    zuuluu['isPremiumAtLeast'] = oscard;
    report = function(argFoo, argBar) { // Original name: isPremiumAtMost
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tangon = argFoo;
            entity = null;
            entity = entity == tangon;
            if(entity) { _fun00008_ip = 38; continue _fun00007 }
 12:
            zuuluu = _closure1_slot0;
            zuuluu = zuuluu[tangon];
            tangon = _closure1_slot0;
            michal = argBar;
            michal = tangon[michal];
            entity = zuuluu <= michal;
 38:
            return entity;
        }
    };
    zuuluu['isPremiumAtMost'] = report;
    zuuluu['isPremium'] = tangon;
    zuuluu['isPremiumExactly'] = michal;
    return entity;
})();