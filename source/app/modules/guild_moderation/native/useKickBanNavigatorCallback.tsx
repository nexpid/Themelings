// app/modules/guild_moderation/native/useKickBanNavigatorCallback.tsx
export default (function(argFoo, argBar, _, argCorge, __, argFred, argPlugh) {
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
    tango = 2;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_moderation/native/useKickBanNavigatorCallback.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useKickBanNavigatorCancelCallback
        mike = argFoo;
        var _closure2_slot0 = mike;
        oscar = _closure1_slot0;
        report = _closure1_slot1;
        tango = 1;
        report = report[tango];
        tango = undefined;
        report = oscar.bind(tango)(report);
        tango = report.useNavigation;
        report = tango.bind(report)();
        var _closure2_slot1 = report;
        tango = _closure1_slot2;
        oscar = tango.useEffect;
        zulu = new Array(2);
        zulu[0] = mike;
        zulu[1] = report;
        mike = function() {
            tango = _closure2_slot1;
            zulu = tango.addListener;
            mike = 'beforeRemove';
            entity = function() {
                _fun81725: for(var _fun81725_ip = 0; ; ) switch(_fun81725_ip) {
 0:
                    mike = _closure2_slot2;
                    mike = mike.current;
                    if(mike) { _fun81725_ip = 25; continue _fun81725 }
 15:
                    tango = _closure2_slot0;
                    zulu = null;
                    mike = zulu == tango;
 25:
                    if(mike) { _fun81725_ip = 38; continue _fun81725 }
 28:
                    mike = _closure2_slot0;
                    entity = undefined;
                    entity = mike.bind(entity)();
 38:
                    entity = undefined;
                    return entity;
                }
            };
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        mike = oscar.bind(tango)(mike, zulu);
        zulu = tango.useRef;
        mike = false;
        mike = zulu.bind(tango)(mike);
        var _closure2_slot2 = mike;
        zulu = tango.useCallback;
        mike = new Array(1);
        mike[0] = report;
        entity = function() {
            zulu = _closure2_slot2;
            mike = true;
            zulu['current'] = mike;
            mike = _closure2_slot1;
            entity = mike.goBack;
            entity = entity.bind(mike)();
            entity = undefined;
            return entity;
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();