// app/modules/group_dm/getGroupDMRecipientLimit.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
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
    var _closure1_slot0 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.MAX_GROUP_DM_PARTICIPANTS;
    var _closure1_slot1 = golf;
    tango = tango.MAX_GROUP_DM_STAFF_PARTICIPANTS;
    var _closure1_slot2 = tango;
    tango = 2;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/group_dm/getGroupDMRecipientLimit.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: getGroupDMRecipientLimit
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            tango = _closure1_slot0;
            entity = tango.getCurrentUser;
            report = entity.bind(tango)();
            entity = null;
            if(!(entity != report)) { _fun00002_ip = 38; continue _fun00001 }
 25:
            tango = report.isStaff;
            tango = tango.bind(report)();
            if(tango) { _fun00002_ip = 68; continue _fun00001 }
 38:
            if(!(entity != zulu)) { _fun00002_ip = 54; continue _fun00001 }
 42:
            tango = zulu.userLimit;
            entity = 0;
            if(!(!(tango > entity))) { _fun00002_ip = 60; continue _fun00001 }
 54:
            entity = _closure1_slot1;
            _fun00002_ip = 66; continue _fun00001;
 60:
            entity = zulu.userLimit;
 66:
            _fun00002_ip = 72; continue _fun00001;
 68:
            entity = _closure1_slot2;
 72:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();