// app/modules/guild_member_verification/native/MemberVerificationModalActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = report.bind(entity)(mike);
    golf = mike.MEMBER_VERIFICATION_TYPE;
    var _closure1_slot3 = golf;
    mike = mike.IN_APP_MEMBER_VERIFICATION_MODAL_KEY;
    var _closure1_slot4 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.AnalyticEvents;
    var _closure1_slot5 = mike;
    mike = {};
    golf = function(argFoo, argBar) { // Original name: openMemberVerificationModal
        golf = argFoo;
        report = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 3;
        tango = zulu[entity];
        entity = undefined;
        oscar = report.bind(entity)(tango);
        tango = oscar.fetchVerificationForm;
        tango = tango.bind(oscar)(golf);
        tango = 2;
        tango = zulu[tango];
        verify = report.bind(entity)(tango);
        options = verify.track;
        tango = _closure1_slot5;
        oscar = tango.OPEN_MODAL;
        tango = {};
        offset = _closure1_slot3;
        tango['type'] = offset;
        tango['guild_id'] = golf;
        tango = options.bind(verify)(oscar, tango);
        tango = 4;
        tango = zulu[tango];
        oscar = report.bind(entity)(tango);
        report = oscar.pushLazy;
        options = _closure1_slot0;
        tango = 6;
        tango = zulu[tango];
        options = options.bind(entity)(tango);
        tango = 5;
        tango = zulu[tango];
        zulu = zulu.paths;
        tango = options.bind(entity)(tango, zulu);
        zulu = {};
        zulu['guildId'] = golf;
        golf = argBar;
        zulu['onClose'] = golf;
        mike = _closure1_slot4;
        mike = report.bind(oscar)(tango, zulu, mike);
        return entity;
    };
    mike['openMemberVerificationModal'] = golf;
    tango = function() { // Original name: closeMemberVerificationModal
        _fun88436: for(var _fun88436_ip = 0; ; ) switch(_fun88436_ip) {
 0:
            mike = arguments[0];
            entity = undefined;
            if(!(mike === entity)) { _fun88436_ip = 11; continue _fun88436 }
 9:
            mike = false;
 11:
            if(mike) { _fun88436_ip = 68; continue _fun88436 }
 14:
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 2;
            mike = tango[mike];
            report = zulu.bind(entity)(mike);
            tango = report.track;
            mike = _closure1_slot5;
            zulu = mike.MODAL_DISMISSED;
            mike = {};
            oscar = _closure1_slot3;
            mike['type'] = oscar;
            mike = tango.bind(report)(zulu, mike);
 68:
            tango = _closure1_slot1;
            report = _closure1_slot2;
            zulu = 4;
            zulu = report[zulu];
            tango = tango.bind(entity)(zulu);
            zulu = tango.popWithKey;
            mike = _closure1_slot4;
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    mike['closeMemberVerificationModal'] = tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_member_verification/native/MemberVerificationModalActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();