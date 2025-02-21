// app/modules/nameplates/NameplateStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    entity = function(argFoo) { // Original name: _toPropertyKey
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golfie = argFoo;
            tangon = 'object';
            entity = typeof golfie;
            michal = golfie;
            if(!(tangon === entity)) { _fun00002_ip = 119; continue _fun00001 }
 17:
            michal = golfie;
            if(!michal) { _fun00002_ip = 119; continue _fun00001 }
 23:
            entity = global;
            zuuluu = entity.Symbol;
            zuuluu = zuuluu.toPrimitive;
            oscard = golfie[zuuluu];
            report = undefined;
            if(!(report === oscard)) { _fun00002_ip = 60; continue _fun00001 }
 47:
            zuuluu = entity.String;
            michal = zuuluu.bind(report)(golfie);
            _fun00002_ip = 119; continue _fun00001;
 60:
            report = oscard.call;
            zuuluu = 'string';
            report = report.bind(oscard)(golfie, zuuluu);
            zuuluu = typeof report;
            michal = report;
            if(!(tangon === zuuluu)) { _fun00002_ip = 119; continue _fun00001 }
 85:
            tangon = entity.TypeError;
            entity = tangon.prototype;
            zuuluu = Object.create(entity, {constructor: {value: tangon}});
            verify = '@@toPrimitive must return a primitive value.';
            offset = zuuluu;
            entity = new offset[tangon](verify, option);
            entity = entity instanceof Object ? entity : zuuluu;
            throw entity;
 119:
            tangon = 'symbol';
            zuuluu = typeof michal;
            entity = michal;
            if(!(tangon !== zuuluu)) { _fun00002_ip = 136; continue _fun00001 }
 133:
            entity = '' + michal;
 136:
            return entity;
        }
    };
    var _closure1_slot2 = entity;
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
    var _closure1_slot0 = tangon;
    tangon = 1;
    tangon = golfie[tangon];
    option = oscard.bind(entity)(tangon);
    report = option.create;
    tangon = function() {
        entity = {};
        michal = {};
        entity['imgCache'] = michal;
        michal = {};
        entity['toolsCache'] = michal;
        return entity;
    };
    tangon = report.bind(option)(tangon);
    var _closure1_slot1 = tangon;
    report = 2;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/nameplates/NameplateStore.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    tangon = function() {
        entity = _closure1_slot1;
        var _closure2_slot0 = entity;
        entity = {};
        zuuluu = function(argFoo) { // Original name: getImgCache
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                michal = argFoo;
                entity = null;
                if(!(entity == michal)) { _fun00004_ip = 13; continue _fun00003 }
 9:
                entity = undefined;
                return entity;
 13:
                zuuluu = _closure2_slot0;
                entity = zuuluu.getState;
                entity = entity.bind(zuuluu)();
                entity = entity.imgCache;
                entity = entity[michal];
                return entity;
            }
        };
        entity['getImgCache'] = zuuluu;
        michal = function(argFoo, argBar, argBaz) { // Original name: setImgCache
            michal = argFoo;
            var _closure3_slot0 = michal;
            michal = argBar;
            var _closure3_slot1 = michal;
            michal = argBaz;
            var _closure3_slot2 = michal;
            zuuluu = _closure2_slot0;
            michal = zuuluu.setState;
            entity = function(argFoo) {
                entity = {};
                michal = {};
                zuuluu = argFoo;
                golfie = zuuluu.imgCache;
                option = michal;
                zuuluu = copyDataProperties(option, golfie);
                tangon = _closure3_slot0;
                zuuluu = {};
                oscard = _closure3_slot1;
                zuuluu['animatedUrl'] = oscard;
                report = _closure3_slot2;
                zuuluu['staticUrl'] = report;
                michal[tangon] = zuuluu;
                entity['imgCache'] = michal;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        entity['setImgCache'] = michal;
        return entity;
    };
    zuuluu['useImgCache'] = tangon;
    michal = function() {
        tangon = _closure1_slot1;
        var _closure2_slot0 = tangon;
        entity = {};
        zuuluu = tangon.getState;
        zuuluu = zuuluu.bind(tangon)();
        zuuluu = zuuluu.toolsCache;
        entity['toolsCache'] = zuuluu;
        zuuluu = function(argFoo, argBar, argBaz) { // Original name: setToolsCache
            michal = argFoo;
            var _closure3_slot0 = michal;
            michal = argBar;
            var _closure3_slot1 = michal;
            michal = argBaz;
            var _closure3_slot2 = michal;
            zuuluu = _closure2_slot0;
            michal = zuuluu.setState;
            entity = function(argFoo) {
                entity = {};
                michal = {};
                zuuluu = argFoo;
                golfie = zuuluu.toolsCache;
                option = michal;
                zuuluu = copyDataProperties(option, golfie);
                tangon = _closure3_slot0;
                zuuluu = {};
                oscard = _closure3_slot1;
                zuuluu['url'] = oscard;
                report = _closure3_slot2;
                zuuluu['palette'] = report;
                michal[tangon] = zuuluu;
                entity['toolsCache'] = michal;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        entity['setToolsCache'] = zuuluu;
        michal = function(argFoo) { // Original name: removeToolsCache
            michal = argFoo;
            var _closure3_slot0 = michal;
            zuuluu = _closure2_slot0;
            michal = zuuluu.setState;
            entity = function(argFoo) {
                zuuluu = argFoo;
                report = zuuluu.toolsCache;
                michal = _closure3_slot0;
                entity = report[michal];
                tangon = _closure1_slot0;
                oscard = new Array(1);
                oscard[0] = michal;
                michal = oscard.map;
                entity = _closure1_slot2;
                michal = michal.bind(oscard)(entity);
                entity = undefined;
                michal = tangon.bind(entity)(report, michal);
                entity = {};
                zuuluu = zuuluu.imgCache;
                entity['imgCache'] = zuuluu;
                entity['toolsCache'] = michal;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        entity['removeToolsCache'] = michal;
        return entity;
    };
    zuuluu['useToolsCache'] = michal;
    return entity;
})();