// app/utils/PremiumTypeUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    option = argBar;
    zuuluu = argFre;
    verify = argPlu;
    report = function(argFoo, argBar) { // Original name: isPremiumAtLeast
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
    var _closure1_slot1 = report;
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
    offset = yankee.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, oscard);
    entity = 0;
    oscard = verify[entity];
    entity = undefined;
    oscard = option.bind(entity)(oscard);
    oscard = oscard.PremiumTypeOrder;
    var _closure1_slot0 = oscard;
    oscard = {};
    oscard['isPremiumAtLeast'] = report;
    oscard['isPremium'] = tangon;
    oscard['isPremiumExactly'] = michal;
    golfie = 1;
    golfie = verify[golfie];
    verify = option.bind(entity)(golfie);
    option = verify.fileFinishedImporting;
    golfie = 'utils/PremiumTypeUtils.tsx';
    golfie = option.bind(verify)(golfie);
    zuuluu['default'] = oscard;
    zuuluu['isPremiumAtLeast'] = report;
    zuuluu['isPremium'] = tangon;
    zuuluu['isPremiumExactly'] = michal;
    return entity;
})();