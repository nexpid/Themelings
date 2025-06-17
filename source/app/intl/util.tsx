// app/intl/util.tsx
export default (function(argFoo, argBar, _, argCor, __, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    tangon = function() { // Original name: getLanguages
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 3;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        return entity;
    };
    var _closure1_slot3 = tangon;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, report);
    entity = 0;
    option = golfie[entity];
    report = argCor;
    entity = undefined;
    report = report.bind(entity)(option);
    var _closure1_slot2 = report;
    report = 4;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'intl/util.tsx';
    report = oscard.bind(golfie)(report);
    report = function() { // Original name: getAvailableLocales
        report = _closure1_slot0;
        tangon = _closure1_slot1;
        zuuluu = 1;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        tangon = report.bind(zuuluu)(tangon);
        tangon = tangon.default;
        var _closure2_slot0 = tangon;
        michal = _closure1_slot3;
        tangon = michal.bind(zuuluu)();
        zuuluu = tangon.filter;
        michal = function(argFoo) {
            entity = argFoo;
            entity = entity.enabled;
            return entity;
        };
        tangon = zuuluu.bind(tangon)(michal);
        zuuluu = tangon.map;
        michal = function(argFoo) {
            entity = argFoo;
            report = entity.code;
            michal = entity.name;
            entity = {};
            entity['value'] = report;
            entity['name'] = michal;
            zuuluu = _closure2_slot0;
            oscard = _closure1_slot0;
            tangon = _closure1_slot1;
            michal = 2;
            tangon = tangon[michal];
            michal = undefined;
            tangon = oscard.bind(michal)(tangon);
            michal = tangon.runtimeHashMessageKey;
            michal = michal.bind(tangon)(report);
            michal = zuuluu[michal];
            entity['localizedName'] = michal;
            return entity;
        };
        zuuluu = zuuluu.bind(tangon)(michal);
        michal = zuuluu.sort;
        entity = function(argFoo, argBar) {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = argFoo;
                zuuluu = entity.name;
                entity = argBar;
                michal = entity.name;
                entity = zuuluu.toLowerCase;
                zuuluu = entity.bind(zuuluu)();
                entity = michal.toLowerCase;
                michal = entity.bind(michal)();
                tangon = zuuluu < michal;
                entity = -1;
                if(tangon) { _fun00002_ip = 64; continue _fun00001 }
 49:
                zuuluu = zuuluu > michal;
                michal = 0;
                if(!zuuluu) { _fun00002_ip = 61; continue _fun00001 }
 58:
                michal = 1;
 61:
                entity = michal;
 64:
                return entity;
            }
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['getAvailableLocales'] = report;
    zuuluu['getLanguages'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: getNormalizedLocale
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            tangon = argBar;
            zuuluu = _closure1_slot3;
            michal = undefined;
            oscard = zuuluu.bind(michal)();
            zuuluu = oscard.filter;
            michal = function(argFoo) {
                entity = argFoo;
                entity = entity.enabled;
                return entity;
            };
            oscard = zuuluu.bind(oscard)(michal);
            zuuluu = oscard.map;
            michal = function(argFoo) {
                entity = argFoo;
                entity = entity.code;
                return entity;
            };
            golfie = zuuluu.bind(oscard)(michal);
            michal = golfie.includes;
            michal = michal.bind(golfie)(entity);
            if(michal) { _fun00004_ip = 205; continue _fun00003 }
 67:
            zuuluu = entity.split;
            michal = '-';
            oscard = zuuluu.bind(entity)(michal);
            var _closure2_slot0 = oscard;
            option = golfie.includes;
            zuuluu = 0;
            michal = oscard[zuuluu];
            michal = option.bind(golfie)(michal);
            zuuluu = oscard[zuuluu];
            if(michal) { _fun00004_ip = 200; continue _fun00003 }
 108:
            michal = 'zh';
            if(!(michal === zuuluu)) { _fun00004_ip = 142; continue _fun00003 }
 116:
            option = oscard.length;
            michal = 1;
            if(!(option > michal)) { _fun00004_ip = 142; continue _fun00003 }
 128:
            oscard = oscard[michal];
            michal = 'Hant';
            if(!(michal !== oscard)) { _fun00004_ip = 171; continue _fun00003 }
 142:
            oscard = golfie.find;
            michal = function(argFoo) {
                zuuluu = argFoo;
                michal = zuuluu.split;
                entity = '-';
                entity = michal.bind(zuuluu)(entity);
                zuuluu = 0;
                michal = entity[zuuluu];
                entity = _closure2_slot0;
                entity = entity[zuuluu];
                entity = michal === entity;
                return entity;
            };
            oscard = oscard.bind(golfie)(michal);
            option = null;
            michal = tangon;
            if(!(option != oscard)) { _fun00004_ip = 169; continue _fun00003 }
 166:
            michal = oscard;
 169:
            _fun00004_ip = 198; continue _fun00003;
 171:
            oscard = golfie.find;
            report = function(argFoo) {
                michal = 'zh-TW';
                entity = argFoo;
                entity = michal === entity;
                return entity;
            };
            report = oscard.bind(golfie)(report);
            oscard = null;
            if(!(oscard != report)) { _fun00004_ip = 195; continue _fun00003 }
 192:
            tangon = report;
 195:
            michal = tangon;
 198:
            _fun00004_ip = 203; continue _fun00003;
 200:
            michal = zuuluu;
 203:
            return michal;
 205:
            return entity;
        }
    };
    zuuluu['getNormalizedLocale'] = tangon;
    michal = function(argFoo, argBar) { // Original name: useSyncMessages
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = argBar;
        var _closure2_slot1 = michal;
        tangon = _closure1_slot2;
        zuuluu = tangon.useSyncExternalStore;
        michal = function(argFoo) {
            zuuluu = _closure2_slot0;
            michal = zuuluu.onChange;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity = function() {
            zuuluu = _closure2_slot0;
            michal = zuuluu.isLocaleLoaded;
            entity = _closure2_slot1;
            entity = entity.currentLocale;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        entity = undefined;
        return entity;
    };
    zuuluu['useSyncMessages'] = michal;
    return entity;
})();