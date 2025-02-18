// app/lib/CachedEntriesMap.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    michal = function() {
        tangon = _closure1_slot3;
        zuuluu = function() { // Original name: CachedEntriesMap
            zuuluu = this;
            var _closure3_slot0 = zuuluu;
            oscard = _closure1_slot2;
            report = _closure2_slot0;
            entity = undefined;
            report = oscard.bind(entity)(zuuluu, report);
            report = 0;
            zuuluu['version'] = report;
            report = global;
            report = report.Map;
            oscard = report.prototype;
            oscard = Object.create(oscard, {constructor: {value: report}});
            romeon = oscard;
            report = new romeon[report](yankee);
            report = report instanceof Object ? report : oscard;
            zuuluu['data'] = report;
            report = _closure1_slot0;
            oscard = _closure1_slot1;
            tangon = 2;
            golfie = oscard[tangon];
            verify = report.bind(entity)(golfie);
            option = verify.cachedFunction;
            golfie = function() {
                entity = global;
                zuuluu = entity.Array;
                michal = zuuluu.from;
                entity = _closure3_slot0;
                tangon = entity.data;
                entity = tangon.values;
                entity = entity.bind(tangon)();
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            golfie = option.bind(verify)(golfie);
            zuuluu['cachedValues'] = golfie;
            golfie = oscard[tangon];
            verify = report.bind(entity)(golfie);
            option = verify.cachedFunction;
            golfie = function() {
                entity = global;
                zuuluu = entity.Array;
                michal = zuuluu.from;
                entity = _closure3_slot0;
                tangon = entity.data;
                entity = tangon.keys;
                entity = entity.bind(tangon)();
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            golfie = option.bind(verify)(golfie);
            zuuluu['cachedKeys'] = golfie;
            tangon = oscard[tangon];
            report = report.bind(entity)(tangon);
            tangon = report.cachedFunction;
            michal = function() {
                entity = global;
                zuuluu = entity.Array;
                michal = zuuluu.from;
                entity = _closure3_slot0;
                tangon = entity.data;
                entity = tangon.entries;
                entity = entity.bind(tangon)();
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            michal = tangon.bind(report)(michal);
            zuuluu['cachedEntries'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'keys';
        entity['key'] = michal;
        michal = function() { // Original name: value
            zuuluu = this;
            michal = zuuluu.cachedKeys;
            entity = zuuluu.version;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity['value'] = michal;
        michal = new Array(8);
        michal[0] = entity;
        entity = {};
        oscard = 'values';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            zuuluu = this;
            michal = zuuluu.cachedValues;
            entity = zuuluu.version;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'entries';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            zuuluu = this;
            michal = zuuluu.cachedEntries;
            entity = zuuluu.version;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity['value'] = oscard;
        michal[2] = entity;
        entity = {};
        oscard = 'size';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            entity = this;
            entity = entity.data;
            entity = entity.size;
            return entity;
        };
        entity['value'] = oscard;
        michal[3] = entity;
        entity = {};
        oscard = 'get';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            entity = this;
            zuuluu = entity.data;
            michal = zuuluu.get;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity['value'] = oscard;
        michal[4] = entity;
        entity = {};
        oscard = 'set';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                report = argFoo;
                tangon = argBar;
                michal = this;
                zuuluu = michal.data;
                entity = zuuluu.get;
                entity = entity.bind(zuuluu)(report);
                if(!(entity !== tangon)) { _fun00002_ip = 59; continue _fun00001 }
 28:
                zuuluu = michal.data;
                entity = zuuluu.set;
                entity = entity.bind(zuuluu)(report, tangon);
                entity = michal.version;
                entity = entity + 1;
                michal['version'] = entity;
 59:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[5] = entity;
        entity = {};
        oscard = 'delete';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zuuluu = this;
                tangon = zuuluu.data;
                michal = tangon.delete;
                entity = argFoo;
                entity = michal.bind(tangon)(entity);
                if(!entity) { _fun00004_ip = 39; continue _fun00003 }
 24:
                michal = zuuluu.version;
                michal = michal + 1;
                zuuluu['version'] = michal;
 39:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[6] = entity;
        entity = {};
        oscard = 'clear';
        entity['key'] = oscard;
        report = function() { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                michal = this;
                entity = michal.data;
                zuuluu = entity.size;
                entity = 0;
                if(!(entity !== zuuluu)) { _fun00006_ip = 49; continue _fun00005 }
 19:
                zuuluu = michal.data;
                entity = zuuluu.clear;
                entity = entity.bind(zuuluu)();
                entity = michal.version;
                entity = entity + 1;
                michal['version'] = entity;
 49:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = report;
        michal[7] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'lib/CachedEntriesMap.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();