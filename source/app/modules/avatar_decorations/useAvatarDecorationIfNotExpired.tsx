// app/modules/avatar_decorations/useAvatarDecorationIfNotExpired.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argBaz;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot2 = tango;
    tango = 1;
    golf = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(golf);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.EPHEMERAL_COLLECTIBLE_EXPIRY_GRACE_PERIOD_IN_MS;
    var _closure1_slot4 = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/avatar_decorations/useAvatarDecorationIfNotExpired.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useAvatarDecorationIfNotExpired
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            var _closure2_slot0 = mike;
            golf = _closure1_slot3;
            report = golf.useState;
            zulu = false;
            oscar = report.bind(golf)(zulu);
            report = _closure1_slot2;
            entity = undefined;
            zulu = 2;
            oscar = report.bind(entity)(oscar, zulu);
            zulu = 0;
            zulu = oscar[zulu];
            var _closure2_slot1 = zulu;
            report = 1;
            report = oscar[report];
            var _closure2_slot2 = report;
            oscar = golf.useRef;
            report = null;
            report = oscar.bind(golf)(report);
            var _closure2_slot3 = report;
            options = golf.useEffect;
            oscar = new Array(1);
            oscar[0] = mike;
            report = function() {
                zulu = function() { // Original name: maybeScheduleExpirationCheck
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        mike = _closure2_slot0;
                        golf = null;
                        if(!(golf != mike)) { _fun00004_ip = 42; continue _fun00003 }
 13:
                        zulu = _closure2_slot0;
                        mike = 'expiresAt';
                        mike = mike in zulu;
                        if(!mike) { _fun00004_ip = 42; continue _fun00003 }
 28:
                        mike = _closure2_slot0;
                        mike = mike.expiresAt;
                        if(!(golf == mike)) { _fun00004_ip = 60; continue _fun00003 }
 42:
                        tango = _closure2_slot2;
                        zulu = undefined;
                        mike = false;
                        mike = tango.bind(zulu)(mike);
                        _fun00004_ip = 338; continue _fun00003;
 60:
                        tango = _closure1_slot0;
                        report = _closure1_slot1;
                        zulu = 3;
                        zulu = report[zulu];
                        report = undefined;
                        oscar = tango.bind(report)(zulu);
                        tango = oscar.isAvatarDecorationExpired;
                        zulu = _closure2_slot0;
                        tango = tango.bind(oscar)(zulu);
                        oscar = _closure2_slot2;
                        oscar = oscar.bind(report)(tango);
                        zulu = golf == zulu;
                        verify = undefined;
                        if(zulu) { _fun00004_ip = 128; continue _fun00003 }
 118:
                        zulu = _closure2_slot0;
                        verify = zulu.skuId;
 128:
                        options = 950400000;
                        zulu = '1251324401459265537';
                        oscar = options;
                        if(!(zulu !== verify)) { _fun00004_ip = 187; continue _fun00003 }
 147:
                        zulu = _closure2_slot0;
                        zulu = golf == zulu;
                        golf = undefined;
                        if(zulu) { _fun00004_ip = 170; continue _fun00003 }
 160:
                        zulu = _closure2_slot0;
                        golf = zulu.skuId;
 170:
                        zulu = '1252353273256480818';
                        oscar = options;
                        if(!(zulu !== golf)) { _fun00004_ip = 187; continue _fun00003 }
 183:
                        oscar = _closure1_slot4;
 187:
                        zulu = _closure2_slot0;
                        golf = zulu.expiresAt;
                        zulu = 1000;
                        zulu = zulu * golf;
                        golf = zulu + oscar;
                        zulu = global;
                        options = zulu.Date;
                        oscar = options.now;
                        oscar = oscar.bind(options)();
                        golf = golf - oscar;
                        if(tango) { _fun00004_ip = 338; continue _fun00003 }
 235:
                        tango = 0;
                        if(!(golf > tango)) { _fun00004_ip = 338; continue _fun00003 }
 241:
                        tango = _closure1_slot0;
                        oscar = _closure1_slot1;
                        mike = 4;
                        mike = oscar[mike];
                        mike = tango.bind(report)(mike);
                        mike = mike.Timeout;
                        tango = mike.prototype;
                        tango = Object.create(tango, {constructor: {value: mike}});
                        romeo = tango;
                        mike = new romeo[mike](yankee);
                        mike = mike instanceof Object ? mike : tango;
                        report = mike.start;
                        oscar = zulu.Math;
                        tango = oscar.min;
                        zulu = 2147483647;
                        tango = tango.bind(oscar)(zulu, golf);
                        zulu = function() {
                            mike = _closure3_slot0;
                            entity = undefined;
                            mike = mike.bind(entity)();
                            return entity;
                        };
                        zulu = report.bind(mike)(tango, zulu);
                        entity = _closure2_slot3;
                        entity['current'] = mike;
 338:
                        entity = undefined;
                        return entity;
                    }
                };
                var _closure3_slot0 = zulu;
                mike = undefined;
                mike = zulu.bind(mike)();
                entity = function() {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        entity = _closure2_slot3;
                        zulu = entity.current;
                        entity = null;
                        mike = entity == zulu;
                        entity = undefined;
                        if(mike) { _fun00006_ip = 33; continue _fun00005 }
 23:
                        mike = zulu.stop;
                        entity = mike.bind(zulu)();
 33:
                        return entity;
                    }
                };
                return entity;
            };
            report = options.bind(golf)(report, oscar);
            oscar = golf.useEffect;
            report = new Array(1);
            report[0] = zulu;
            tango = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    mike = _closure2_slot1;
                    if(!mike) { _fun00008_ip = 35; continue _fun00007 }
 10:
                    entity = _closure2_slot3;
                    mike = entity.current;
                    entity = null;
                    if(!(entity != mike)) { _fun00008_ip = 35; continue _fun00007 }
 25:
                    entity = mike.stop;
                    entity = entity.bind(mike)();
 35:
                    entity = undefined;
                    return entity;
                }
            };
            tango = oscar.bind(golf)(tango, report);
            if(zulu) { _fun00002_ip = 134; continue _fun00001 }
 131:
            entity = mike;
 134:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();