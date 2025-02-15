// app/modules/messages/computeGlobalSpoilerDisplay.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    tango = function(argFoo, argBar) { // Original name: computeGlobalSpoilerDisplay
        _fun69364: for(var _fun69364_ip = 0; ; ) switch(_fun69364_ip) {
 0:
            zulu = argFoo;
            mike = _closure1_slot4;
            mike = mike.ALWAYS;
            if(!(mike !== zulu)) { _fun69364_ip = 53; continue _fun69364 }
 20:
            mike = _closure1_slot4;
            mike = mike.IF_MODERATOR;
            if(!(mike !== zulu)) { _fun69364_ip = 48; continue _fun69364 }
 34:
            entity = _closure1_slot4;
            entity = entity.ON_CLICK;
            entity = false;
            return entity;
 48:
            entity = argBar;
            return entity;
 53:
            entity = true;
            return entity;
        }
    };
    var _closure1_slot5 = tango;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, report);
    entity = 0;
    options = golf[entity];
    report = argBaz;
    entity = undefined;
    report = report.bind(entity)(options);
    var _closure1_slot2 = report;
    report = 1;
    report = golf[report];
    report = oscar.bind(entity)(report);
    options = report.Permissions;
    var _closure1_slot3 = options;
    report = report.SpoilerRenderSetting;
    var _closure1_slot4 = report;
    report = 4;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/messages/computeGlobalSpoilerDisplay.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    mike = function(argFoo) { // Original name: useShouldDisplaySpoilerObscurity
        entity = argFoo;
        var _closure2_slot0 = entity;
        report = _closure1_slot0;
        oscar = _closure1_slot1;
        zulu = 2;
        zulu = oscar[zulu];
        tango = undefined;
        options = report.bind(tango)(zulu);
        golf = options.useStateFromStores;
        verify = _closure1_slot2;
        zulu = new Array(1);
        zulu[0] = verify;
        mike = function() {
            tango = _closure1_slot2;
            zulu = tango.can;
            entity = _closure1_slot3;
            mike = entity.MANAGE_MESSAGES;
            entity = _closure2_slot0;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        zulu = golf.bind(options)(zulu, mike);
        mike = _closure1_slot5;
        entity = 3;
        entity = oscar[entity];
        entity = report.bind(tango)(entity);
        report = entity.RenderSpoilers;
        entity = report.useSetting;
        entity = entity.bind(report)();
        entity = mike.bind(tango)(entity, zulu);
        entity = !entity;
        return entity;
    };
    zulu['useShouldDisplaySpoilerObscurity'] = mike;
    return entity;
})();