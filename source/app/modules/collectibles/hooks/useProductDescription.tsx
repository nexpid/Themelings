// app/modules/collectibles/hooks/useProductDescription.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    report = golfie[entity];
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(report);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.useMemo;
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.isExternalProduct;
    var _closure1_slot4 = tangon;
    tangon = function(argFoo) { // Original name: getBundleName
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argFoo;
            entity = arguments[1];
            report = undefined;
            if(!(entity === report)) { _fun00002_ip = 14; continue _fun00001 }
 12:
            entity = false;
 14:
            if(entity) { _fun00002_ip = 159; continue _fun00001 }
 20:
            michal = oscard.bundledProducts;
            entity = null;
            if(!(entity == michal)) { _fun00002_ip = 38; continue _fun00001 }
 32:
            tangon = new Array(0);
            _fun00002_ip = 44; continue _fun00001;
 38:
            tangon = oscard.bundledProducts;
 44:
            zuuluu = _closure1_slot2;
            michal = 2;
            zuuluu = zuuluu.bind(report)(tangon, michal);
            michal = 0;
            option = zuuluu[michal];
            michal = 1;
            golfie = zuuluu[michal];
            michal = _closure1_slot0;
            verify = _closure1_slot1;
            entity = 3;
            zuuluu = verify[entity];
            zuuluu = michal.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.formatToPlainString;
            entity = verify[entity];
            entity = michal.bind(report)(entity);
            entity = entity.t;
            michal = entity.WQbNhI;
            entity = {};
            option = option.name;
            entity['decoName'] = option;
            golfie = golfie.name;
            entity['pfxName'] = golfie;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
 159:
            michal = _closure1_slot0;
            golfie = _closure1_slot1;
            entity = 3;
            zuuluu = golfie[entity];
            zuuluu = michal.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.formatToPlainString;
            entity = golfie[entity];
            entity = michal.bind(report)(entity);
            entity = entity.t;
            michal = entity./0Yndn;
            entity = {};
            oscard = oscard.bundledProducts;
            golfie = null;
            golfie = golfie == oscard;
            report = undefined;
            if(golfie) { _fun00002_ip = 238; continue _fun00001 }
 233:
            report = oscard.length;
 238:
            entity['num'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot5 = tangon;
    tangon = function(argFoo) { // Original name: getCustomizedProductDescription
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            oscard = argFoo;
            report = arguments[1];
            tangon = undefined;
            if(!(report === tangon)) { _fun00004_ip = 14; continue _fun00003 }
 12:
            report = false;
 14:
            entity = null;
            michal = entity == oscard;
            entity = '';
            if(michal) { _fun00004_ip = 92; continue _fun00003 }
 27:
            golfie = oscard.type;
            option = _closure1_slot0;
            verify = _closure1_slot1;
            michal = 4;
            michal = verify[michal];
            michal = option.bind(tangon)(michal);
            michal = michal.CollectiblesItemType;
            michal = michal.BUNDLE;
            if(!(golfie !== michal)) { _fun00004_ip = 79; continue _fun00003 }
 71:
            michal = oscard.summary;
            _fun00004_ip = 89; continue _fun00003;
 79:
            zuuluu = _closure1_slot5;
            michal = zuuluu.bind(tangon)(oscard, report);
 89:
            entity = michal;
 92:
            return entity;
        }
    };
    var _closure1_slot6 = tangon;
    report = 6;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/collectibles/hooks/useProductDescription.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['getCustomizedProductDescription'] = tangon;
    michal = function(argFoo) {
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            golfie = argFoo;
            oscard = arguments[1];
            var _closure2_slot0 = golfie;
            tangon = undefined;
            if(!(oscard === tangon)) { _fun00006_ip = 20; continue _fun00005 }
 18:
            oscard = false;
 20:
            var _closure2_slot1 = oscard;
            var _closure2_slot2 = tangon;
            var _closure2_slot3 = tangon;
            report = _closure1_slot0;
            option = _closure1_slot1;
            zuuluu = 5;
            zuuluu = option[zuuluu];
            option = report.bind(tangon)(zuuluu);
            report = option.useShopGenericProductDescriptionExperiment;
            zuuluu = 'ShopProductPreviewActionSheet';
            report = report.bind(option)(zuuluu);
            _closure2_slot2 = report;
            zuuluu = null;
            verify = zuuluu == golfie;
            option = undefined;
            if(verify) { _fun00006_ip = 93; continue _fun00005 }
 87:
            option = golfie.skuId;
 93:
            option = zuuluu != option;
            if(!option) { _fun00006_ip = 124; continue _fun00005 }
 100:
            verify = _closure1_slot4;
            offset = zuuluu == golfie;
            zuuluu = undefined;
            if(offset) { _fun00006_ip = 119; continue _fun00005 }
 113:
            zuuluu = golfie.skuId;
 119:
            option = verify.bind(tangon)(zuuluu);
 124:
            _closure2_slot3 = option;
            zuuluu = _closure1_slot3;
            michal = new Array(4);
            michal[0] = option;
            michal[1] = golfie;
            michal[2] = oscard;
            michal[3] = report;
            entity = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    entity = _closure2_slot2;
                    if(!entity) { _fun00008_ip = 398; continue _fun00007 }
 13:
                    entity = _closure2_slot3;
                    if(entity) { _fun00008_ip = 398; continue _fun00007 }
 23:
                    oscard = _closure2_slot0;
                    report = _closure2_slot1;
                    golfie = undefined;
                    if(!(report === golfie)) { _fun00008_ip = 39; continue _fun00007 }
 37:
                    report = false;
 39:
                    entity = null;
                    entity = entity == oscard;
                    option = undefined;
                    if(entity) { _fun00008_ip = 55; continue _fun00007 }
 50:
                    option = oscard.type;
 55:
                    tangon = _closure1_slot0;
                    entity = _closure1_slot1;
                    verify = 4;
                    entity = entity[verify];
                    entity = tangon.bind(golfie)(entity);
                    entity = entity.CollectiblesItemType;
                    entity = entity.AVATAR_DECORATION;
                    if(!(entity !== option)) { _fun00008_ip = 339; continue _fun00007 }
 97:
                    tangon = _closure1_slot0;
                    entity = _closure1_slot1;
                    entity = entity[verify];
                    entity = tangon.bind(golfie)(entity);
                    entity = entity.CollectiblesItemType;
                    entity = entity.PROFILE_EFFECT;
                    if(!(entity !== option)) { _fun00008_ip = 280; continue _fun00007 }
 133:
                    tangon = _closure1_slot0;
                    entity = _closure1_slot1;
                    entity = entity[verify];
                    entity = tangon.bind(golfie)(entity);
                    entity = entity.CollectiblesItemType;
                    entity = entity.NAMEPLATE;
                    if(!(entity !== option)) { _fun00008_ip = 221; continue _fun00007 }
 166:
                    tangon = _closure1_slot0;
                    entity = _closure1_slot1;
                    entity = entity[verify];
                    entity = tangon.bind(golfie)(entity);
                    entity = entity.CollectiblesItemType;
                    tangon = entity.BUNDLE;
                    entity = '';
                    if(!(tangon === option)) { _fun00008_ip = 396; continue _fun00007 }
 206:
                    tangon = _closure1_slot5;
                    entity = tangon.bind(golfie)(oscard, report);
                    _fun00008_ip = 396; continue _fun00007;
 221:
                    option = _closure1_slot0;
                    verify = _closure1_slot1;
                    tangon = 3;
                    report = verify[tangon];
                    report = option.bind(golfie)(report);
                    oscard = report.intl;
                    report = oscard.string;
                    tangon = verify[tangon];
                    tangon = option.bind(golfie)(tangon);
                    tangon = tangon.t;
                    tangon = tangon.ik37ER;
                    entity = report.bind(oscard)(tangon);
                    _fun00008_ip = 396; continue _fun00007;
 280:
                    option = _closure1_slot0;
                    verify = _closure1_slot1;
                    tangon = 3;
                    report = verify[tangon];
                    report = option.bind(golfie)(report);
                    oscard = report.intl;
                    report = oscard.string;
                    tangon = verify[tangon];
                    tangon = option.bind(golfie)(tangon);
                    tangon = tangon.t;
                    tangon = tangon.VhJL7+;
                    entity = report.bind(oscard)(tangon);
                    _fun00008_ip = 396; continue _fun00007;
 339:
                    oscard = _closure1_slot0;
                    option = _closure1_slot1;
                    zuuluu = 3;
                    tangon = option[zuuluu];
                    tangon = oscard.bind(golfie)(tangon);
                    report = tangon.intl;
                    tangon = report.string;
                    zuuluu = option[zuuluu];
                    zuuluu = oscard.bind(golfie)(zuuluu);
                    zuuluu = zuuluu.t;
                    zuuluu = zuuluu.3lv7q6;
                    entity = tangon.bind(report)(zuuluu);
 396:
                    _fun00008_ip = 421; continue _fun00007;
 398:
                    report = _closure1_slot6;
                    tangon = _closure2_slot0;
                    zuuluu = _closure2_slot1;
                    michal = undefined;
                    entity = report.bind(michal)(tangon, zuuluu);
 421:
                    return entity;
                }
            };
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        }
    };
    zuuluu['useProductDescription'] = michal;
    return entity;
})();