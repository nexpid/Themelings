// app/modules/voice_panel/native/hooks/useCanInviteMembers.tsx
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
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Permissions;
    var _closure1_slot4 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/voice_panel/native/hooks/useCanInviteMembers.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useCanInviteMembers
        oscar = argFoo;
        var _closure2_slot0 = oscar;
        report = _closure1_slot0;
        tango = _closure1_slot1;
        zulu = 3;
        tango = tango[zulu];
        zulu = undefined;
        report = report.bind(zulu)(tango);
        tango = report.useStateFromStores;
        golf = _closure1_slot2;
        zulu = new Array(2);
        zulu[0] = golf;
        mike = _closure1_slot3;
        zulu[1] = mike;
        mike = new Array(1);
        mike[0] = oscar;
        entity = function() {
            _fun121794: for(var _fun121794_ip = 0; ; ) switch(_fun121794_ip) {
 0:
                tango = _closure1_slot2;
                zulu = tango.getChannel;
                entity = _closure2_slot0;
                report = zulu.bind(tango)(entity);
                entity = null;
                entity = entity != report;
                if(!entity) { _fun121794_ip = 59; continue _fun121794 }
 33:
                oscar = _closure1_slot3;
                tango = oscar.can;
                zulu = _closure1_slot4;
                zulu = zulu.CONNECT;
                entity = tango.bind(oscar)(zulu, report);
 59:
                if(!entity) { _fun121794_ip = 88; continue _fun121794 }
 62:
                tango = _closure1_slot3;
                zulu = tango.can;
                mike = _closure1_slot4;
                mike = mike.CREATE_INSTANT_INVITE;
                entity = zulu.bind(tango)(mike, report);
 88:
                return entity;
            }
        };
        entity = tango.bind(report)(zulu, entity, mike);
        return entity;
    };
    zulu['useCanInviteMembers'] = mike;
    return entity;
})();