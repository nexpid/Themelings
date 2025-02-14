// app/modules/main_tabs_v2/native/friends/hooks/getPendingRelationshipIds.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = oscar;
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
    tango = report.bind(entity)(tango);
    tango = tango.RelationshipTypes;
    var _closure1_slot3 = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/friends/hooks/getPendingRelationshipIds.tsx';
    tango = report.bind(oscar)(tango);
    tango = function() { // Original name: getPendingRelationshipIds
        _fun114894: for(var _fun114894_ip = 0; ; ) switch(_fun114894_ip) {
 0:
            report = arguments[0];
            oscar = undefined;
            if(!(report === oscar)) { _fun114894_ip = 13; continue _fun114894 }
 11:
            report = {};
 13:
            var _closure2_slot0 = report;
            entity = {};
            tango = _closure1_slot0;
            golf = _closure1_slot1;
            zulu = 2;
            options = golf[zulu];
            verify = tango.bind(oscar)(options);
            options = verify.keys;
            offset = options.bind(verify)(report);
            verify = offset.filter;
            options = function(argFoo) {
                _fun114895: for(var _fun114895_ip = 0; ; ) switch(_fun114895_ip) {
 0:
                    report = argFoo;
                    entity = _closure2_slot0;
                    mike = entity[report];
                    entity = _closure1_slot3;
                    entity = entity.PENDING_INCOMING;
                    entity = mike === entity;
                    if(!entity) { _fun114895_ip = 70; continue _fun114895 }
 34:
                    tango = _closure1_slot2;
                    mike = tango.isSpam;
                    mike = mike.bind(tango)(report);
                    if(mike) { _fun114895_ip = 67; continue _fun114895 }
 52:
                    tango = _closure1_slot2;
                    zulu = tango.isIgnored;
                    mike = zulu.bind(tango)(report);
 67:
                    entity = !mike;
 70:
                    return entity;
                }
            };
            verify = verify.bind(offset)(options);
            options = verify.reverse;
            options = options.bind(verify)();
            entity['pendingIncomingIds'] = options;
            options = golf[zulu];
            verify = tango.bind(oscar)(options);
            options = verify.keys;
            offset = options.bind(verify)(report);
            verify = offset.filter;
            options = function(argFoo) {
                mike = _closure2_slot0;
                entity = argFoo;
                mike = mike[entity];
                entity = _closure1_slot3;
                entity = entity.PENDING_OUTGOING;
                entity = mike === entity;
                return entity;
            };
            verify = verify.bind(offset)(options);
            options = verify.reverse;
            options = options.bind(verify)();
            entity['pendingOutgoingIds'] = options;
            options = golf[zulu];
            verify = tango.bind(oscar)(options);
            options = verify.keys;
            offset = options.bind(verify)(report);
            verify = offset.filter;
            options = function(argFoo) {
                _fun114897: for(var _fun114897_ip = 0; ; ) switch(_fun114897_ip) {
 0:
                    tango = argFoo;
                    entity = _closure2_slot0;
                    zulu = entity[tango];
                    entity = _closure1_slot3;
                    entity = entity.PENDING_INCOMING;
                    entity = zulu === entity;
                    if(!entity) { _fun114897_ip = 49; continue _fun114897 }
 34:
                    zulu = _closure1_slot2;
                    mike = zulu.isSpam;
                    entity = mike.bind(zulu)(tango);
 49:
                    return entity;
                }
            };
            verify = verify.bind(offset)(options);
            options = verify.reverse;
            options = options.bind(verify)();
            entity['spamIds'] = options;
            zulu = golf[zulu];
            tango = tango.bind(oscar)(zulu);
            zulu = tango.keys;
            tango = zulu.bind(tango)(report);
            zulu = tango.filter;
            mike = function(argFoo) {
                _fun114898: for(var _fun114898_ip = 0; ; ) switch(_fun114898_ip) {
 0:
                    tango = argFoo;
                    entity = _closure2_slot0;
                    zulu = entity[tango];
                    entity = _closure1_slot3;
                    entity = entity.PENDING_INCOMING;
                    entity = zulu === entity;
                    if(!entity) { _fun114898_ip = 49; continue _fun114898 }
 34:
                    zulu = _closure1_slot2;
                    mike = zulu.isIgnored;
                    entity = mike.bind(zulu)(tango);
 49:
                    return entity;
                }
            };
            mike = zulu.bind(tango)(mike);
            entity['ignoredUserIds'] = mike;
            return entity;
        }
    };
    zulu['getPendingRelationshipIds'] = tango;
    tango = function(argFoo) { // Original name: getPendingGameRelationshipUserIds
        tango = argFoo;
        entity = new Array(0);
        var _closure2_slot0 = entity;
        zulu = global;
        zulu = zulu.Set;
        report = zulu.prototype;
        report = Object.create(report, {constructor: {value: zulu}});
        golf = report;
        zulu = new golf[zulu](oscar);
        zulu = zulu instanceof Object ? zulu : report;
        var _closure2_slot1 = zulu;
        zulu = tango.values;
        tango = zulu.bind(tango)();
        zulu = tango.forEach;
        mike = function(argFoo) {
            _fun114900: for(var _fun114900_ip = 0; ; ) switch(_fun114900_ip) {
 0:
                entity = argFoo;
                zulu = entity.id;
                mike = entity.type;
                entity = _closure1_slot3;
                entity = entity.PENDING_INCOMING;
                entity = mike !== entity;
                if(entity) { _fun114900_ip = 50; continue _fun114900 }
 33:
                tango = _closure2_slot1;
                mike = tango.has;
                entity = mike.bind(tango)(zulu);
 50:
                if(entity) { _fun114900_ip = 84; continue _fun114900 }
 53:
                tango = _closure2_slot1;
                mike = tango.add;
                mike = mike.bind(tango)(zulu);
                mike = _closure2_slot0;
                entity = mike.push;
                entity = entity.bind(mike)(zulu);
 84:
                entity = undefined;
                return entity;
            }
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['getPendingGameRelationshipUserIds'] = tango;
    mike = function(argFoo) { // Original name: getPendingGameRelationships
        report = argFoo;
        zulu = new Array(0);
        var _closure2_slot0 = zulu;
        mike = new Array(0);
        var _closure2_slot1 = mike;
        tango = report.values;
        report = tango.bind(report)();
        tango = report.forEach;
        entity = function(argFoo) {
            _fun114902: for(var _fun114902_ip = 0; ; ) switch(_fun114902_ip) {
 0:
                zulu = argFoo;
                tango = zulu.type;
                mike = _closure1_slot3;
                mike = mike.PENDING_INCOMING;
                if(!(tango !== mike)) { _fun114902_ip = 63; continue _fun114902 }
 25:
                mike = zulu.type;
                entity = _closure1_slot3;
                entity = entity.PENDING_OUTGOING;
                if(!(mike === entity)) { _fun114902_ip = 80; continue _fun114902 }
 44:
                mike = _closure2_slot1;
                entity = mike.push;
                entity = entity.bind(mike)(zulu);
                _fun114902_ip = 80; continue _fun114902;
 63:
                mike = _closure2_slot0;
                entity = mike.push;
                entity = entity.bind(mike)(zulu);
 80:
                entity = undefined;
                return entity;
            }
        };
        entity = tango.bind(report)(entity);
        entity = {};
        entity['pendingIncomingGameRelationships'] = zulu;
        entity['pendingOutgoingGameRelationships'] = mike;
        return entity;
    };
    zulu['getPendingGameRelationships'] = mike;
    return entity;
})();