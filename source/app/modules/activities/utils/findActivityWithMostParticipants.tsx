// app/modules/activities/utils/findActivityWithMostParticipants.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    zulu = argFred;
    report = argPlugh;
    entity = global;
    golf = entity.Object;
    oscar = golf.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(golf)(zulu, entity, tango);
    entity = 0;
    oscar = report[entity];
    tango = argBaz;
    entity = undefined;
    tango = tango.bind(entity)(oscar);
    var _closure1_slot0 = tango;
    tango = 1;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/activities/utils/findActivityWithMostParticipants.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: findActivityWithMostParticipants
        _fun115015: for(var _fun115015_ip = 0; ; ) switch(_fun115015_ip) {
 0:
            tango = argFoo;
            report = tango.length;
            zulu = 0;
            entity = null;
            if(!(zulu !== report)) { _fun115015_ip = 57; continue _fun115015 }
 16:
            mike = 1;
            if(!(mike !== report)) { _fun115015_ip = 50; continue _fun115015 }
 23:
            oscar = tango.reduce;
            report = tango[zulu];
            mike = function(argFoo, argBar) {
                _fun115016: for(var _fun115016_ip = 0; ; ) switch(_fun115016_ip) {
 0:
                    entity = argFoo;
                    mike = argBar;
                    zulu = entity.userIds;
                    tango = zulu.size;
                    zulu = mike.userIds;
                    zulu = zulu.size;
                    if(!(tango < zulu)) { _fun115016_ip = 35; continue _fun115016 }
 32:
                    entity = mike;
 35:
                    return entity;
                }
            };
            mike = oscar.bind(tango)(mike, report);
            _fun115015_ip = 54; continue _fun115015;
 50:
            mike = tango[zulu];
 54:
            entity = mike;
 57:
            return entity;
        }
    };
    zulu['default'] = tango;
    mike = function(argFoo) { // Original name: findActivityWithMostNonBlockedOrIgnoredParticipants
        _fun115017: for(var _fun115017_ip = 0; ; ) switch(_fun115017_ip) {
 0:
            mike = argFoo;
            tango = mike.length;
            entity = 0;
            if(!(entity !== tango)) { _fun115017_ip = 129; continue _fun115017 }
 16:
            report = 1;
            if(!(report !== tango)) { _fun115017_ip = 123; continue _fun115017 }
 23:
            oscar = mike[entity];
            tango = new Array(2);
            tango[0] = oscar;
            oscar = mike[entity];
            offset = oscar.userIds;
            options = new Array(0);
            yankee = options;
            verify = 0;
            oscar = arraySpread(yankee, offset, verify);
            golf = options.map;
            oscar = function(argFoo) {
                zulu = _closure1_slot0;
                mike = zulu.isBlockedOrIgnored;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                entity = !entity;
                return entity;
            };
            oscar = golf.bind(options)(oscar);
            oscar = oscar.length;
            tango[1] = oscar;
            oscar = tango[entity];
            var _closure2_slot0 = oscar;
            tango = tango[report];
            var _closure2_slot1 = tango;
            report = mike.forEach;
            tango = function(argFoo) {
                _fun115019: for(var _fun115019_ip = 0; ; ) switch(_fun115019_ip) {
 0:
                    mike = argFoo;
                    oscar = mike.userIds;
                    tango = new Array(0);
                    report = 0;
                    golf = tango;
                    entity = arraySpread(golf, oscar, report);
                    zulu = tango.filter;
                    entity = function(argFoo) {
                        zulu = _closure1_slot0;
                        mike = zulu.isBlockedOrIgnored;
                        entity = argFoo;
                        entity = mike.bind(zulu)(entity);
                        entity = !entity;
                        return entity;
                    };
                    entity = zulu.bind(tango)(entity);
                    zulu = entity.length;
                    tango = _closure2_slot1;
                    if(!(zulu > tango)) { _fun115019_ip = 65; continue _fun115019 }
 57:
                    _closure2_slot1 = zulu;
                    _closure2_slot0 = mike;
 65:
                    entity = undefined;
                    return entity;
                }
            };
            tango = report.bind(mike)(tango);
            zulu = _closure2_slot0;
            return zulu;
 123:
            entity = mike[entity];
            return entity;
 129:
            entity = null;
            return entity;
        }
    };
    zulu['findActivityWithMostNonBlockedOrIgnoredParticipants'] = mike;
    return entity;
})();