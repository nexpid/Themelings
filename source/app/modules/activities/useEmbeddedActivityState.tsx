// app/modules/activities/useEmbeddedActivityState.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
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
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/activities/useEmbeddedActivityState.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useEmbeddedActivityState
        mike = argFoo;
        var _closure2_slot0 = mike;
        tango = _closure1_slot2;
        zulu = tango.getId;
        zulu = zulu.bind(tango)();
        var _closure2_slot1 = zulu;
        report = _closure1_slot0;
        tango = _closure1_slot1;
        zulu = 2;
        tango = tango[zulu];
        zulu = undefined;
        tango = report.bind(zulu)(tango);
        zulu = tango.useStateFromStoresObject;
        report = _closure1_slot3;
        mike = new Array(1);
        mike[0] = report;
        entity = function() {
            _fun73324: for(var _fun73324_ip = 0; ; ) switch(_fun73324_ip) {
 0:
                oscar = _closure1_slot3;
                mike = oscar.getSelfEmbeddedActivityForChannel;
                zulu = _closure2_slot0;
                tango = mike.bind(oscar)(zulu);
                var _closure3_slot0 = tango;
                mike = oscar.getEmbeddedActivitiesForChannel;
                oscar = mike.bind(oscar)(zulu);
                zulu = oscar.find;
                mike = function(argFoo) {
                    _fun73325: for(var _fun73325_ip = 0; ; ) switch(_fun73325_ip) {
 0:
                        entity = argFoo;
                        mike = entity.applicationId;
                        tango = _closure3_slot0;
                        entity = null;
                        tango = entity == tango;
                        entity = undefined;
                        if(tango) { _fun73325_ip = 35; continue _fun73325 }
 26:
                        zulu = _closure3_slot0;
                        entity = zulu.applicationId;
 35:
                        entity = mike === entity;
                        return entity;
                    }
                };
                oscar = zulu.bind(oscar)(mike);
                mike = null;
                golf = mike == oscar;
                zulu = undefined;
                if(golf) { _fun73324_ip = 76; continue _fun73324 }
 70:
                zulu = oscar.participants;
 76:
                if(!(mike == zulu)) { _fun73324_ip = 126; continue _fun73324 }
 80:
                golf = mike == oscar;
                zulu = undefined;
                if(golf) { _fun73324_ip = 95; continue _fun73324 }
 89:
                zulu = oscar.userIds;
 95:
                golf = mike != zulu;
                zulu = false;
                if(!golf) { _fun73324_ip = 171; continue _fun73324 }
 104:
                verify = oscar.userIds;
                golf = verify.has;
                entity = _closure2_slot1;
                zulu = golf.bind(verify)(entity);
                _fun73324_ip = 171; continue _fun73324;
 126:
                golf = mike == oscar;
                entity = undefined;
                if(golf) { _fun73324_ip = 167; continue _fun73324 }
 135:
                golf = oscar.participants;
                oscar = mike == golf;
                entity = undefined;
                if(oscar) { _fun73324_ip = 167; continue _fun73324 }
 150:
                oscar = golf.find;
                report = function(argFoo) {
                    zulu = _closure1_slot0;
                    mike = _closure1_slot1;
                    entity = 3;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.isActivityParticipantCurrentUserCurrentSession;
                    entity = argFoo;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                entity = oscar.bind(golf)(report);
 167:
                zulu = mike != entity;
 171:
                entity = {};
                entity['userActivity'] = tango;
                mike = mike != zulu;
                if(!mike) { _fun73324_ip = 188; continue _fun73324 }
 185:
                mike = zulu;
 188:
                entity['inActivity'] = mike;
                return entity;
            }
        };
        mike = zulu.bind(tango)(mike, entity);
        entity = {};
        zulu = mike.userActivity;
        entity['userActivity'] = zulu;
        mike = mike.inActivity;
        entity['inActivity'] = mike;
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();