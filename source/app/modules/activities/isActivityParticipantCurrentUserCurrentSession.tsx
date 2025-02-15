// app/modules/activities/isActivityParticipantCurrentUserCurrentSession.tsx
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
    tango = 'modules/activities/isActivityParticipantCurrentUserCurrentSession.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: isActivityParticipantCurrentUserCurrentSession
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            tango = arguments[1];
            oscar = undefined;
            if(!(tango === oscar)) { _fun00002_ip = 19; continue _fun00001 }
 12:
            tango = _closure1_slot0;
 19:
            entity = tango.getId;
            mike = entity.bind(tango)();
            entity = tango.getSessionId;
            tango = entity.bind(tango)();
            entity = zulu.userId;
            entity = entity === mike;
            if(!entity) { _fun00002_ip = 92; continue _fun00001 }
 51:
            report = zulu.sessionId;
            mike = null;
            mike = mike == report;
            if(mike) { _fun00002_ip = 76; continue _fun00001 }
 66:
            report = zulu.sessionId;
            mike = oscar === report;
 76:
            if(mike) { _fun00002_ip = 89; continue _fun00001 }
 79:
            zulu = zulu.sessionId;
            mike = zulu === tango;
 89:
            entity = mike;
 92:
            return entity;
        }
    };
    zulu['isActivityParticipantCurrentUserCurrentSession'] = mike;
    return entity;
})();