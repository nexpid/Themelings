// app/utils/Uint8ArrayUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    zuuluu = argFre;
    tangon = function(argFoo, argBar) { // Original name: hasBit
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argFoo;
            report = argBar;
            entity = oscard.length;
            zuuluu = 0;
            entity = zuuluu !== entity;
            if(!entity) { _fun00002_ip = 77; continue _fun00001 }
 20:
            michal = global;
            option = michal.Math;
            golfie = option.floor;
            tangon = _closure1_slot0;
            tangon = report / tangon;
            tangon = golfie.bind(option)(tangon);
            tangon = oscard[tangon];
            michal = _closure1_slot0;
            report = report % michal;
            michal = 1;
            michal = michal << report;
            michal = tangon & michal;
            entity = zuuluu !== michal;
 77:
            return entity;
        }
    };
    var _closure1_slot1 = tangon;
    entity = global;
    golfie = entity.Object;
    oscard = golfie.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(golfie)(zuuluu, entity, report);
    entity = 8;
    var _closure1_slot0 = entity;
    report = argPlu;
    entity = 0;
    oscard = report[entity];
    report = argBar;
    entity = undefined;
    golfie = report.bind(entity)(oscard);
    oscard = golfie.fileFinishedImporting;
    report = 'utils/Uint8ArrayUtils.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['hasBit'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: addBit
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            option = argFoo;
            report = argBar;
            tangon = global;
            oscard = tangon.Math;
            zuuluu = oscard.floor;
            entity = _closure1_slot0;
            entity = report / entity;
            zuuluu = zuuluu.bind(oscard)(entity);
            oscard = option.length;
            entity = option;
            if(!(oscard <= zuuluu)) { _fun00004_ip = 97; continue _fun00003 }
 48:
            golfie = tangon.Uint8Array;
            tangon = 1;
            offset = zuuluu + tangon;
            oscard = golfie.prototype;
            oscard = Object.create(oscard, {constructor: {value: golfie}});
            yankee = oscard;
            tangon = new yankee[golfie](offset, verify);
            tangon = tangon instanceof Object ? tangon : oscard;
            golfie = tangon.set;
            oscard = 0;
            oscard = golfie.bind(tangon)(option, oscard);
            entity = tangon;
 97:
            tangon = entity[zuuluu];
            michal = _closure1_slot0;
            report = report % michal;
            michal = 1;
            michal = michal << report;
            michal = tangon | michal;
            entity[zuuluu] = michal;
            return entity;
        }
    };
    zuuluu['addBit'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: removeBit
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            report = argBar;
            tangon = _closure1_slot1;
            zuuluu = undefined;
            zuuluu = tangon.bind(zuuluu)(entity, report);
            if(!zuuluu) { _fun00006_ip = 81; continue _fun00005 }
 24:
            zuuluu = global;
            oscard = zuuluu.Math;
            tangon = oscard.floor;
            zuuluu = _closure1_slot0;
            zuuluu = report / zuuluu;
            zuuluu = tangon.bind(oscard)(zuuluu);
            tangon = entity[zuuluu];
            michal = _closure1_slot0;
            report = report % michal;
            michal = 1;
            michal = michal << report;
            michal = ~michal;
            michal = tangon & michal;
            entity[zuuluu] = michal;
 81:
            return entity;
        }
    };
    zuuluu['removeBit'] = tangon;
    tangon = function(argFoo) { // Original name: isUint8Array
        entity = global;
        michal = entity.Uint8Array;
        entity = argFoo;
        entity = entity instanceof michal;
        return entity;
    };
    zuuluu['isUint8Array'] = tangon;
    michal = function(argFoo) { // Original name: isSerializedUint8Array
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = argFoo;
            entity = null;
            entity = entity != michal;
            if(!entity) { _fun00008_ip = 23; continue _fun00007 }
 12:
            tangon = 'object';
            zuuluu = typeof michal;
            entity = tangon === zuuluu;
 23:
            if(!entity) { _fun00008_ip = 42; continue _fun00007 }
 26:
            zuuluu = michal.__tag__;
            michal = 'uint8array';
            entity = michal === zuuluu;
 42:
            return entity;
        }
    };
    zuuluu['isSerializedUint8Array'] = michal;
    return entity;
})();