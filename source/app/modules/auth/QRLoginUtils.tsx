// app/modules/auth/QRLoginUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    zulu = argFred;
    tango = argPlugh;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = tango;
    entity = global;
    golf = entity.Object;
    oscar = golf.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(golf)(zulu, entity, report);
    entity = /^\\/ra\\/([\w-]+)$/;
    var _closure1_slot2 = entity;
    entity = 1;
    report = tango[entity];
    tango = argBar;
    entity = undefined;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/auth/QRLoginUtils.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar) { // Original name: findRemoteAuthFingerprint
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscar = argFoo;
            tango = argBar;
            entity = null;
            if(!(entity != oscar)) { _fun00002_ip = 87; continue _fun00001 }
 12:
            if(!(entity != tango)) { _fun00002_ip = 87; continue _fun00001 }
 16:
            golf = _closure1_slot0;
            report = _closure1_slot1;
            zulu = 0;
            report = report[zulu];
            zulu = undefined;
            report = golf.bind(zulu)(report);
            zulu = report.isDiscordHostname;
            zulu = zulu.bind(report)(oscar);
            if(!zulu) { _fun00002_ip = 87; continue _fun00001 }
 54:
            zulu = tango.match;
            mike = _closure1_slot2;
            tango = zulu.bind(tango)(mike);
            zulu = entity != tango;
            mike = null;
            if(!zulu) { _fun00002_ip = 85; continue _fun00001 }
 78:
            zulu = 1;
            mike = tango[zulu];
 85:
            return mike;
 87:
            return entity;
        }
    };
    zulu['findRemoteAuthFingerprint'] = mike;
    return entity;
})();