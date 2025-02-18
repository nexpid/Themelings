// discord_common/js/packages/kv-storage/js/util/Key.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    tangon = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tangon;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, oscard);
    entity = 1;
    tangon = tangon[entity];
    entity = undefined;
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = '../discord_common/js/packages/kv-storage/js/util/Key.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo, argBar) { // Original name: combineKey
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argFoo;
            report = argBar;
            michal = global;
            zuuluu = michal.Array;
            entity = zuuluu.isArray;
            entity = entity.bind(zuuluu)(report);
            if(entity) { _fun00002_ip = 57; continue _fun00001 }
 27:
            entity = new Array(1);
            option = 0;
            offset = entity;
            verify = oscard;
            tangon = arraySpread(offset, verify, option);
            entity[tangon] = report;
            zuuluu = 1;
            zuuluu = tangon + zuuluu;
            _fun00002_ip = 86; continue _fun00001;
 57:
            zuuluu = new Array(0);
            option = 0;
            offset = zuuluu;
            verify = oscard;
            option = arraySpread(offset, verify, option);
            offset = zuuluu;
            verify = report;
            tangon = arraySpread(offset, verify, option);
            entity = zuuluu;
 86:
            tangon = entity.length;
            zuuluu = 1;
            if(!(tangon >= zuuluu)) { _fun00002_ip = 137; continue _fun00001 }
 98:
            tangon = entity.length;
            oscard = _closure1_slot0;
            report = _closure1_slot1;
            zuuluu = 0;
            report = report[zuuluu];
            zuuluu = undefined;
            zuuluu = oscard.bind(zuuluu)(report);
            zuuluu = zuuluu.MAXIMUM_KEY_BITS;
            if(!(!(tangon <= zuuluu))) { _fun00002_ip = 217; continue _fun00001 }
 137:
            tangon = michal.Error;
            golfie = entity.length;
            report = michal.JSON;
            zuuluu = report.stringify;
            oscard = zuuluu.bind(report)(entity);
            michal = michal.HermesInternal;
            report = michal.concat;
            zuuluu = 'combination results in an invalid key that has ';
            michal = ' elements: ';
            offset = report.bind(zuuluu)(golfie, michal, oscard);
            zuuluu = tangon.prototype;
            zuuluu = Object.create(zuuluu, {constructor: {value: tangon}});
            yankee = zuuluu;
            michal = new yankee[tangon](offset, verify);
            michal = michal instanceof Object ? michal : zuuluu;
            throw michal;
 217:
            return entity;
        }
    };
    zuuluu['combineKey'] = tangon;
    michal = function(argFoo, argBar) { // Original name: combineKeyPrefix
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            oscard = argFoo;
            report = argBar;
            michal = global;
            zuuluu = michal.Array;
            entity = zuuluu.isArray;
            entity = entity.bind(zuuluu)(report);
            if(entity) { _fun00004_ip = 57; continue _fun00003 }
 27:
            entity = new Array(1);
            option = 0;
            offset = entity;
            verify = oscard;
            tangon = arraySpread(offset, verify, option);
            entity[tangon] = report;
            zuuluu = 1;
            zuuluu = tangon + zuuluu;
            _fun00004_ip = 86; continue _fun00003;
 57:
            zuuluu = new Array(0);
            option = 0;
            offset = zuuluu;
            verify = oscard;
            option = arraySpread(offset, verify, option);
            offset = zuuluu;
            verify = report;
            tangon = arraySpread(offset, verify, option);
            entity = zuuluu;
 86:
            tangon = entity.length;
            oscard = _closure1_slot0;
            report = _closure1_slot1;
            zuuluu = 0;
            report = report[zuuluu];
            zuuluu = undefined;
            zuuluu = oscard.bind(zuuluu)(report);
            zuuluu = zuuluu.MAXIMUM_KEY_BITS;
            if(!(!(tangon <= zuuluu))) { _fun00004_ip = 205; continue _fun00003 }
 125:
            tangon = michal.Error;
            golfie = entity.length;
            report = michal.JSON;
            zuuluu = report.stringify;
            oscard = zuuluu.bind(report)(entity);
            michal = michal.HermesInternal;
            report = michal.concat;
            zuuluu = 'combination results in an invalid prefix key that has ';
            michal = ' elements: ';
            offset = report.bind(zuuluu)(golfie, michal, oscard);
            zuuluu = tangon.prototype;
            zuuluu = Object.create(zuuluu, {constructor: {value: tangon}});
            yankee = zuuluu;
            michal = new yankee[tangon](offset, verify);
            michal = michal instanceof Object ? michal : zuuluu;
            throw michal;
 205:
            return entity;
        }
    };
    zuuluu['combineKeyPrefix'] = michal;
    return entity;
})();