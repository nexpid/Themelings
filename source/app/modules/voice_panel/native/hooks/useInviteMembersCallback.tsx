// app/modules/voice_panel/native/hooks/useInviteMembersCallback.tsx
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
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot2 = tango;
    tango = 1;
    golf = oscar[tango];
    tango = argBaz;
    tango = tango.bind(entity)(golf);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.AnalyticsPages;
    var _closure1_slot4 = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/voice_panel/native/hooks/useInviteMembersCallback.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useInviteMembersCallback
        report = argFoo;
        var _closure2_slot0 = report;
        tango = _closure1_slot2;
        zulu = tango.useCallback;
        mike = new Array(1);
        mike[0] = report;
        entity = function() {
            _fun121571: for(var _fun121571_ip = 0; ; ) switch(_fun121571_ip) {
 0:
                tango = _closure1_slot3;
                mike = tango.getChannel;
                entity = _closure2_slot0;
                tango = mike.bind(tango)(entity);
                entity = null;
                mike = entity != tango;
                if(!mike) { _fun121571_ip = 132; continue _fun121571 }
 33:
                mike = tango.isPrivate;
                mike = mike.bind(tango)();
                golf = _closure1_slot0;
                oscar = _closure1_slot1;
                if(mike) { _fun121571_ip = 88; continue _fun121571 }
 54:
                mike = 4;
                report = oscar[mike];
                mike = undefined;
                options = golf.bind(mike)(report);
                report = options.showInstantInviteActionSheet;
                mike = 'Voice Channel';
                mike = report.bind(options)(tango, mike);
                _fun121571_ip = 129; continue _fun121571;
 88:
                report = 3;
                oscar = oscar[report];
                report = undefined;
                oscar = golf.bind(report)(oscar);
                report = oscar.navigateToNewGroupDM;
                tango = tango.id;
                zulu = _closure1_slot4;
                zulu = zulu.CHANNEL_CALL;
                mike = report.bind(oscar)(tango, zulu);
 129:
                entity = mike;
 132:
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['useInviteMembersCallback'] = mike;
    return entity;
})();