// app/utils/PremiumFeatureUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    michal = function(argFoo) { // Original name: getUserMaxFileSize
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            tangon = null;
            if(!(tangon != zuuluu)) { _fun00002_ip = 127; continue _fun00001 }
 9:
            report = _closure1_slot2;
            entity = report.getPremiumTypeOverride;
            report = entity.bind(report)();
            entity = zuuluu.isStaff;
            entity = entity.bind(zuuluu)();
            if(!entity) { _fun00002_ip = 47; continue _fun00001 }
 39:
            entity = _closure1_slot6;
            if(!(report !== entity)) { _fun00002_ip = 121; continue _fun00001 }
 47:
            entity = zuuluu.premiumType;
            if(!(tangon != entity)) { _fun00002_ip = 93; continue _fun00001 }
 57:
            report = _closure1_slot0;
            tangon = _closure1_slot1;
            entity = 3;
            tangon = tangon[entity];
            entity = undefined;
            tangon = report.bind(entity)(tangon);
            entity = tangon.isPremium;
            entity = entity.bind(tangon)(zuuluu);
            if(entity) { _fun00002_ip = 99; continue _fun00001 }
 93:
            entity = _closure1_slot3;
            _fun00002_ip = 119; continue _fun00001;
 99:
            tangon = _closure1_slot5;
            zuuluu = zuuluu.premiumType;
            zuuluu = tangon[zuuluu];
            entity = zuuluu.fileSize;
 119:
            _fun00002_ip = 125; continue _fun00001;
 121:
            entity = _closure1_slot4;
 125:
            return entity;
 127:
            entity = _closure1_slot3;
            return entity;
        }
    };
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    option = golfie[entity];
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    option = tangon.MAX_ATTACHMENT_SIZE;
    var _closure1_slot3 = option;
    tangon = tangon.MAX_STAFF_ATTACHMENT_SIZE;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    option = tangon.PremiumUserLimits;
    var _closure1_slot5 = option;
    tangon = tangon.UNSELECTED_PREMIUM_TYPE_OVERRIDE;
    var _closure1_slot6 = tangon;
    tangon = {};
    tangon['getUserMaxFileSize'] = michal;
    report = 4;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'utils/PremiumFeatureUtils.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    zuuluu['getUserMaxFileSize'] = michal;
    return entity;
})();