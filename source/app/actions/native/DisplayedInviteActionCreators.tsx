// app/actions/native/DisplayedInviteActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    tango = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = tango;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, oscar);
    entity = 3;
    tango = tango[entity];
    entity = undefined;
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'actions/native/DisplayedInviteActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo, argBar, argBaz) { // Original name: showInvite
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            entity = argBaz;
            mike = null;
            if(!(mike == entity)) { _fun00002_ip = 14; continue _fun00001 }
 12:
            entity = {};
 14:
            verify = entity.deeplinkAttemptId;
            tango = entity.location;
            golf = _closure1_slot0;
            oscar = _closure1_slot2;
            entity = 0;
            zulu = oscar[entity];
            entity = undefined;
            zulu = golf.bind(entity)(zulu);
            zulu = _closure1_slot1;
            mike = 1;
            mike = oscar[mike];
            options = zulu.bind(entity)(mike);
            golf = options.dispatch;
            mike = {};
            offset = 'DISPLAYED_INVITE_SHOW';
            mike['type'] = offset;
            mike['code'] = report;
            offset = argBar;
            mike['username'] = offset;
            mike['deeplinkAttemptId'] = verify;
            mike = golf.bind(options)(mike);
            mike = 2;
            mike = oscar[mike];
            zulu = zulu.bind(entity)(mike);
            mike = zulu.resolveInvite;
            mike = mike.bind(zulu)(report, tango);
            return entity;
        }
    };
    zulu['showInvite'] = tango;
    mike = function() { // Original name: clearDisplayedInvite
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 1;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'DISPLAYED_INVITE_CLEAR';
        mike['type'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['clearDisplayedInvite'] = mike;
    return entity;
})();