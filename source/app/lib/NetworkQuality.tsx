// app/lib/NetworkQuality.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo) { // Original name: round
        _fun52928: for(var _fun52928_ip = 0; ; ) switch(_fun52928_ip) {
 0:
            tango = argFoo;
            entity = arguments[1];
            mike = undefined;
            if(!(entity === mike)) { _fun52928_ip = 14; continue _fun52928 }
 12:
            entity = 0;
 14:
            mike = null;
            if(!(mike != tango)) { _fun52928_ip = 38; continue _fun52928 }
 20:
            mike = global;
            zulu = mike.Math;
            mike = zulu.round;
            entity = mike.bind(zulu)(tango);
 38:
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.NetworkConnectionTypes;
    var _closure1_slot5 = golf;
    tango = tango.NetworkConnectionSpeeds;
    var _closure1_slot6 = tango;
    mike = function() {
        tango = _closure1_slot3;
        zulu = function() { // Original name: NetworkQuality
            zulu = this;
            report = _closure1_slot2;
            tango = _closure2_slot0;
            entity = undefined;
            tango = report.bind(entity)(zulu, tango);
            tango = zulu._initStats;
            tango = tango.bind(zulu)();
            zulu['_networkStats'] = tango;
            tango = _closure1_slot0;
            report = _closure1_slot1;
            mike = 4;
            mike = report[mike];
            tango = tango.bind(entity)(mike);
            mike = tango.now;
            mike = mike.bind(tango)();
            zulu['_lastSampleTimestamp'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = '_initStats';
        entity['key'] = mike;
        mike = function() { // Original name: value
            entity = {};
            zulu = {};
            entity['effectiveConnectionSpeedBuckets'] = zulu;
            zulu = {};
            entity['connectionTypeBuckets'] = zulu;
            var _closure3_slot0 = entity;
            tango = global;
            golf = tango.Object;
            oscar = golf.values;
            report = _closure1_slot5;
            golf = oscar.bind(golf)(report);
            oscar = golf.forEach;
            report = function(argFoo) {
                entity = _closure3_slot0;
                zulu = entity.connectionTypeBuckets;
                mike = 0;
                entity = argFoo;
                zulu[entity] = mike;
                entity = undefined;
                return entity;
            };
            report = oscar.bind(golf)(report);
            report = tango.Object;
            tango = report.values;
            zulu = _closure1_slot6;
            tango = tango.bind(report)(zulu);
            zulu = tango.forEach;
            mike = function(argFoo) {
                entity = _closure3_slot0;
                zulu = entity.effectiveConnectionSpeedBuckets;
                mike = 0;
                entity = argFoo;
                zulu[entity] = mike;
                entity = undefined;
                return entity;
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(3);
        mike[0] = entity;
        entity = {};
        oscar = 'getStats';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = this;
            report = entity._networkStats;
            entity = {};
            tango = _closure1_slot7;
            golf = report.connectionTypeBuckets;
            oscar = _closure1_slot5;
            zulu = oscar.WIFI;
            golf = golf[zulu];
            zulu = undefined;
            golf = tango.bind(zulu)(golf);
            entity['duration_connection_type_wifi'] = golf;
            options = report.connectionTypeBuckets;
            golf = oscar.CELLULAR;
            golf = options[golf];
            golf = tango.bind(zulu)(golf);
            entity['duration_connection_type_cellular'] = golf;
            options = report.connectionTypeBuckets;
            golf = oscar.ETHERNET;
            golf = options[golf];
            golf = tango.bind(zulu)(golf);
            entity['duration_connection_type_ethernet'] = golf;
            options = report.connectionTypeBuckets;
            golf = oscar.BLUETOOTH;
            golf = options[golf];
            golf = tango.bind(zulu)(golf);
            entity['duration_connection_type_bluetooth'] = golf;
            options = report.connectionTypeBuckets;
            golf = oscar.OTHER;
            golf = options[golf];
            golf = tango.bind(zulu)(golf);
            entity['duration_connection_type_other'] = golf;
            options = report.connectionTypeBuckets;
            golf = oscar.UNKNOWN;
            golf = options[golf];
            golf = tango.bind(zulu)(golf);
            entity['duration_connection_type_unknown'] = golf;
            golf = report.connectionTypeBuckets;
            oscar = oscar.NONE;
            oscar = golf[oscar];
            oscar = tango.bind(zulu)(oscar);
            entity['duration_connection_type_none'] = oscar;
            golf = report.effectiveConnectionSpeedBuckets;
            mike = _closure1_slot6;
            oscar = mike.TWO_G;
            oscar = golf[oscar];
            oscar = tango.bind(zulu)(oscar);
            entity['duration_effective_connection_speed_2g'] = oscar;
            golf = report.effectiveConnectionSpeedBuckets;
            oscar = mike.THREE_G;
            oscar = golf[oscar];
            oscar = tango.bind(zulu)(oscar);
            entity['duration_effective_connection_speed_3g'] = oscar;
            golf = report.effectiveConnectionSpeedBuckets;
            oscar = mike.FOUR_G;
            oscar = golf[oscar];
            oscar = tango.bind(zulu)(oscar);
            entity['duration_effective_connection_speed_4g'] = oscar;
            golf = report.effectiveConnectionSpeedBuckets;
            oscar = mike.FIVE_G;
            oscar = golf[oscar];
            oscar = tango.bind(zulu)(oscar);
            entity['duration_effective_connection_speed_5g'] = oscar;
            report = report.effectiveConnectionSpeedBuckets;
            mike = mike.UNKNOWN;
            mike = report[mike];
            mike = tango.bind(zulu)(mike);
            entity['duration_effective_connection_speed_unknown'] = mike;
            return entity;
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'incrementNetworkStats';
        entity['key'] = oscar;
        report = function(argFoo) { // Original name: value
            _fun52935: for(var _fun52935_ip = 0; ; ) switch(_fun52935_ip) {
 0:
                mike = argFoo;
                entity = this;
                zulu = entity._lastSampleTimestamp;
                tango = mike - zulu;
                zulu = 1000;
                oscar = tango / zulu;
                report = _closure1_slot4;
                tango = report.getEffectiveConnectionSpeed;
                golf = tango.bind(report)();
                tango = _closure1_slot6;
                tango = tango.SLOW_TWO_G;
                if(!(golf === tango)) { _fun52935_ip = 67; continue _fun52935 }
 57:
                tango = _closure1_slot6;
                golf = tango.TWO_G;
 67:
                report = _closure1_slot4;
                tango = report.getType;
                report = tango.bind(report)();
                tango = _closure1_slot5;
                tango = tango.WIMAX;
                if(!(report === tango)) { _fun52935_ip = 105; continue _fun52935 }
 95:
                zulu = _closure1_slot5;
                report = zulu.WIFI;
 105:
                zulu = entity._networkStats;
                tango = zulu.effectiveConnectionSpeedBuckets;
                zulu = tango[golf];
                zulu = zulu + oscar;
                tango[golf] = zulu;
                zulu = entity._networkStats;
                tango = zulu.connectionTypeBuckets;
                zulu = tango[report];
                zulu = zulu + oscar;
                tango[report] = zulu;
                entity['_lastSampleTimestamp'] = mike;
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = report;
        mike[2] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'lib/NetworkQuality.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();