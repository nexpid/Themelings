// app/modules/avatar_decorations/AvatarDecorationUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    golfie = argBar;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = option;
    entity = global;
    oscard = entity.Object;
    report = oscard.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscard)(zuuluu, entity, tangon);
    entity = 0;
    tangon = option[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    tangon = tangon.EPHEMERAL_COLLECTIBLE_EXPIRY_GRACE_PERIOD_IN_MS;
    var _closure1_slot2 = tangon;
    report = function(argFoo) { // Original name: parseAvatarDecorationData
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            michal = 'object';
            entity = typeof zuuluu;
            if(!(michal === entity)) { _fun00002_ip = 241; continue _fun00001 }
 17:
            entity = null;
            if(!(entity != zuuluu)) { _fun00002_ip = 241; continue _fun00001 }
 26:
            michal = 'asset';
            michal = michal in zuuluu;
            if(!michal) { _fun00002_ip = 239; continue _fun00001 }
 40:
            michal = zuuluu.asset;
            oscard = 'string';
            michal = typeof michal;
            if(!(oscard === michal)) { _fun00002_ip = 239; continue _fun00001 }
 60:
            michal = {};
            tangon = zuuluu.asset;
            michal['asset'] = tangon;
            tangon = 'sku_id';
            tangon = tangon in zuuluu;
            if(!tangon) { _fun00002_ip = 97; continue _fun00001 }
 84:
            report = zuuluu.sku_id;
            report = typeof report;
            tangon = oscard === report;
 97:
            if(!tangon) { _fun00002_ip = 112; continue _fun00001 }
 100:
            tangon = zuuluu.sku_id;
            michal['skuId'] = tangon;
 112:
            tangon = 'skuId';
            tangon = tangon in zuuluu;
            if(!tangon) { _fun00002_ip = 136; continue _fun00001 }
 123:
            report = zuuluu.skuId;
            report = typeof report;
            tangon = oscard === report;
 136:
            if(!tangon) { _fun00002_ip = 151; continue _fun00001 }
 139:
            tangon = zuuluu.skuId;
            michal['skuId'] = tangon;
 151:
            tangon = 'expires_at';
            tangon = tangon in zuuluu;
            if(!tangon) { _fun00002_ip = 179; continue _fun00001 }
 162:
            report = zuuluu.expires_at;
            oscard = 'number';
            report = typeof report;
            tangon = oscard === report;
 179:
            if(!tangon) { _fun00002_ip = 194; continue _fun00001 }
 182:
            tangon = zuuluu.expires_at;
            michal['expiresAt'] = tangon;
 194:
            tangon = 'expiresAt';
            tangon = tangon in zuuluu;
            if(!tangon) { _fun00002_ip = 222; continue _fun00001 }
 205:
            report = zuuluu.expiresAt;
            oscard = 'number';
            report = typeof report;
            tangon = oscard === report;
 222:
            if(!tangon) { _fun00002_ip = 237; continue _fun00001 }
 225:
            zuuluu = zuuluu.expiresAt;
            michal['expiresAt'] = zuuluu;
 237:
            return michal;
 239:
            return entity;
 241:
            entity = null;
            return entity;
        }
    };
    var _closure1_slot3 = report;
    tangon = function(argFoo) { // Original name: isAvatarDecorationExpired
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            tangon = null;
            zuuluu = tangon == michal;
            oscard = undefined;
            if(zuuluu) { _fun00004_ip = 20; continue _fun00003 }
 14:
            oscard = michal.skuId;
 20:
            golfie = 950400000;
            report = '1251324401459265537';
            zuuluu = golfie;
            if(!(report !== oscard)) { _fun00004_ip = 74; continue _fun00003 }
 39:
            report = tangon == michal;
            oscard = undefined;
            if(report) { _fun00004_ip = 54; continue _fun00003 }
 48:
            oscard = michal.skuId;
 54:
            report = '1252353273256480818';
            zuuluu = golfie;
            if(!(report !== oscard)) { _fun00004_ip = 74; continue _fun00003 }
 67:
            zuuluu = _closure1_slot2;
 74:
            report = tangon == michal;
            entity = undefined;
            if(report) { _fun00004_ip = 89; continue _fun00003 }
 83:
            entity = michal.expiresAt;
 89:
            entity = tangon != entity;
            if(!entity) { _fun00004_ip = 137; continue _fun00003 }
 96:
            tangon = michal.expiresAt;
            michal = 1000;
            michal = michal * tangon;
            zuuluu = michal + zuuluu;
            michal = global;
            tangon = michal.Date;
            michal = tangon.now;
            michal = michal.bind(tangon)();
            entity = zuuluu < michal;
 137:
            return entity;
        }
    };
    var _closure1_slot4 = tangon;
    oscard = 2;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/avatar_decorations/AvatarDecorationUtils.tsx';
    oscard = golfie.bind(option)(oscard);
    oscard = function(argFoo) {
        tangon = argFoo;
        zuuluu = tangon.split;
        michal = '_';
        entity = 2;
        zuuluu = zuuluu.bind(tangon)(michal, entity);
        michal = zuuluu.includes;
        entity = 'a';
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['isAnimatedAvatarDecoration'] = oscard;
    zuuluu['parseAvatarDecorationData'] = report;
    zuuluu['isAvatarDecorationExpired'] = tangon;
    tangon = function(argFoo, argBar) {
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = argFoo;
            michal = argBar;
            entity = null;
            if(!(entity != zuuluu)) { _fun00006_ip = 69; continue _fun00005 }
 12:
            if(!(entity != michal)) { _fun00006_ip = 69; continue _fun00005 }
 16:
            report = _closure1_slot0;
            oscard = _closure1_slot1;
            tangon = 1;
            tangon = oscard[tangon];
            golfie = undefined;
            oscard = report.bind(golfie)(tangon);
            report = oscard.isEqual;
            entity = _closure1_slot3;
            tangon = entity.bind(golfie)(zuuluu);
            entity = entity.bind(golfie)(michal);
            entity = report.bind(oscard)(tangon, entity);
            _fun00006_ip = 73; continue _fun00005;
 69:
            entity = zuuluu === michal;
 73:
            return entity;
        }
    };
    zuuluu['isEqualAvatarDecoration'] = tangon;
    michal = function(argFoo, argBar) {
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tangon = argFoo;
            zuuluu = null;
            entity = argBar;
            entity = zuuluu != entity;
            if(!entity) { _fun00008_ip = 47; continue _fun00007 }
 15:
            oscard = _closure1_slot4;
            golfie = zuuluu == tangon;
            report = undefined;
            michal = undefined;
            if(golfie) { _fun00008_ip = 39; continue _fun00007 }
 33:
            michal = tangon.avatarDecoration;
 39:
            michal = oscard.bind(report)(michal);
            entity = !michal;
 47:
            if(!entity) { _fun00008_ip = 84; continue _fun00007 }
 50:
            report = zuuluu == tangon;
            michal = undefined;
            if(report) { _fun00008_ip = 80; continue _fun00007 }
 59:
            tangon = tangon.avatarDecoration;
            report = zuuluu == tangon;
            michal = undefined;
            if(report) { _fun00008_ip = 80; continue _fun00007 }
 74:
            michal = tangon.asset;
 80:
            entity = zuuluu != michal;
 84:
            return entity;
        }
    };
    zuuluu['hasGlobalDefaultAvatarDecoration'] = michal;
    return entity;
})();