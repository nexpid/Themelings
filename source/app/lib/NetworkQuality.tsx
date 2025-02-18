// app/lib/NetworkQuality.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = function(argFoo) { // Original name: round
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            entity = arguments[1];
            michal = undefined;
            if(!(entity === michal)) { _fun00002_ip = 14; continue _fun00001 }
 12:
            entity = 0;
 14:
            michal = null;
            if(!(michal != tangon)) { _fun00002_ip = 38; continue _fun00001 }
 20:
            michal = global;
            zuuluu = michal.Math;
            michal = zuuluu.round;
            entity = michal.bind(zuuluu)(tangon);
 38:
            return entity;
        }
    };
    var _closure1_slot7 = entity;
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
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.NetworkConnectionTypes;
    var _closure1_slot5 = golfie;
    tangon = tangon.NetworkConnectionSpeeds;
    var _closure1_slot6 = tangon;
    michal = function() {
        tangon = _closure1_slot3;
        zuuluu = function() { // Original name: NetworkQuality
            zuuluu = this;
            report = _closure1_slot2;
            tangon = _closure2_slot0;
            entity = undefined;
            tangon = report.bind(entity)(zuuluu, tangon);
            tangon = zuuluu._initStats;
            tangon = tangon.bind(zuuluu)();
            zuuluu['_networkStats'] = tangon;
            tangon = _closure1_slot0;
            report = _closure1_slot1;
            michal = 4;
            michal = report[michal];
            tangon = tangon.bind(entity)(michal);
            michal = tangon.now;
            michal = michal.bind(tangon)();
            zuuluu['_lastSampleTimestamp'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = '_initStats';
        entity['key'] = michal;
        michal = function() { // Original name: value
            entity = {};
            zuuluu = {};
            entity['effectiveConnectionSpeedBuckets'] = zuuluu;
            zuuluu = {};
            entity['connectionTypeBuckets'] = zuuluu;
            var _closure3_slot0 = entity;
            tangon = global;
            golfie = tangon.Object;
            oscard = golfie.values;
            report = _closure1_slot5;
            golfie = oscard.bind(golfie)(report);
            oscard = golfie.forEach;
            report = function(argFoo) {
                entity = _closure3_slot0;
                zuuluu = entity.connectionTypeBuckets;
                michal = 0;
                entity = argFoo;
                zuuluu[entity] = michal;
                entity = undefined;
                return entity;
            };
            report = oscard.bind(golfie)(report);
            report = tangon.Object;
            tangon = report.values;
            zuuluu = _closure1_slot6;
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = tangon.forEach;
            michal = function(argFoo) {
                entity = _closure3_slot0;
                zuuluu = entity.effectiveConnectionSpeedBuckets;
                michal = 0;
                entity = argFoo;
                zuuluu[entity] = michal;
                entity = undefined;
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        entity['value'] = michal;
        michal = new Array(3);
        michal[0] = entity;
        entity = {};
        oscard = 'getStats';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            entity = this;
            report = entity._networkStats;
            entity = {};
            tangon = _closure1_slot7;
            golfie = report.connectionTypeBuckets;
            oscard = _closure1_slot5;
            zuuluu = oscard.WIFI;
            golfie = golfie[zuuluu];
            zuuluu = undefined;
            golfie = tangon.bind(zuuluu)(golfie);
            entity['duration_connection_type_wifi'] = golfie;
            option = report.connectionTypeBuckets;
            golfie = oscard.CELLULAR;
            golfie = option[golfie];
            golfie = tangon.bind(zuuluu)(golfie);
            entity['duration_connection_type_cellular'] = golfie;
            option = report.connectionTypeBuckets;
            golfie = oscard.ETHERNET;
            golfie = option[golfie];
            golfie = tangon.bind(zuuluu)(golfie);
            entity['duration_connection_type_ethernet'] = golfie;
            option = report.connectionTypeBuckets;
            golfie = oscard.BLUETOOTH;
            golfie = option[golfie];
            golfie = tangon.bind(zuuluu)(golfie);
            entity['duration_connection_type_bluetooth'] = golfie;
            option = report.connectionTypeBuckets;
            golfie = oscard.OTHER;
            golfie = option[golfie];
            golfie = tangon.bind(zuuluu)(golfie);
            entity['duration_connection_type_other'] = golfie;
            option = report.connectionTypeBuckets;
            golfie = oscard.UNKNOWN;
            golfie = option[golfie];
            golfie = tangon.bind(zuuluu)(golfie);
            entity['duration_connection_type_unknown'] = golfie;
            golfie = report.connectionTypeBuckets;
            oscard = oscard.NONE;
            oscard = golfie[oscard];
            oscard = tangon.bind(zuuluu)(oscard);
            entity['duration_connection_type_none'] = oscard;
            golfie = report.effectiveConnectionSpeedBuckets;
            michal = _closure1_slot6;
            oscard = michal.TWO_G;
            oscard = golfie[oscard];
            oscard = tangon.bind(zuuluu)(oscard);
            entity['duration_effective_connection_speed_2g'] = oscard;
            golfie = report.effectiveConnectionSpeedBuckets;
            oscard = michal.THREE_G;
            oscard = golfie[oscard];
            oscard = tangon.bind(zuuluu)(oscard);
            entity['duration_effective_connection_speed_3g'] = oscard;
            golfie = report.effectiveConnectionSpeedBuckets;
            oscard = michal.FOUR_G;
            oscard = golfie[oscard];
            oscard = tangon.bind(zuuluu)(oscard);
            entity['duration_effective_connection_speed_4g'] = oscard;
            golfie = report.effectiveConnectionSpeedBuckets;
            oscard = michal.FIVE_G;
            oscard = golfie[oscard];
            oscard = tangon.bind(zuuluu)(oscard);
            entity['duration_effective_connection_speed_5g'] = oscard;
            report = report.effectiveConnectionSpeedBuckets;
            michal = michal.UNKNOWN;
            michal = report[michal];
            michal = tangon.bind(zuuluu)(michal);
            entity['duration_effective_connection_speed_unknown'] = michal;
            return entity;
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'incrementNetworkStats';
        entity['key'] = oscard;
        report = function(argFoo) { // Original name: value
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                michal = argFoo;
                entity = this;
                zuuluu = entity._lastSampleTimestamp;
                tangon = michal - zuuluu;
                zuuluu = 1000;
                oscard = tangon / zuuluu;
                report = _closure1_slot4;
                tangon = report.getEffectiveConnectionSpeed;
                golfie = tangon.bind(report)();
                tangon = _closure1_slot6;
                tangon = tangon.SLOW_TWO_G;
                if(!(golfie === tangon)) { _fun00004_ip = 67; continue _fun00003 }
 57:
                tangon = _closure1_slot6;
                golfie = tangon.TWO_G;
 67:
                report = _closure1_slot4;
                tangon = report.getType;
                report = tangon.bind(report)();
                tangon = _closure1_slot5;
                tangon = tangon.WIMAX;
                if(!(report === tangon)) { _fun00004_ip = 105; continue _fun00003 }
 95:
                zuuluu = _closure1_slot5;
                report = zuuluu.WIFI;
 105:
                zuuluu = entity._networkStats;
                tangon = zuuluu.effectiveConnectionSpeedBuckets;
                zuuluu = tangon[golfie];
                zuuluu = zuuluu + oscard;
                tangon[golfie] = zuuluu;
                zuuluu = entity._networkStats;
                tangon = zuuluu.connectionTypeBuckets;
                zuuluu = tangon[report];
                zuuluu = zuuluu + oscard;
                tangon[report] = zuuluu;
                entity['_lastSampleTimestamp'] = michal;
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = report;
        michal[2] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'lib/NetworkQuality.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();