// app/modules/self_mod/inappropriate_conversation/hooks/useLastChannelMessage.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
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
    tango = argBaz;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot2 = tango;
    tango = 2;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/self_mod/inappropriate_conversation/hooks/useLastChannelMessage.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) {
        mike = argFoo;
        var _closure2_slot0 = mike;
        report = _closure1_slot0;
        tango = _closure1_slot1;
        zulu = 1;
        tango = tango[zulu];
        zulu = undefined;
        tango = report.bind(zulu)(tango);
        zulu = tango.useStateFromStores;
        report = _closure1_slot2;
        mike = new Array(1);
        mike[0] = report;
        entity = function() {
            _fun79559: for(var _fun79559_ip = 0; ; ) switch(_fun79559_ip) {
 0:
                report = _closure1_slot2;
                tango = report.getLastNonCurrentUserMessage;
                entity = _closure2_slot0;
                entity = tango.bind(report)(entity);
                tango = null;
                if(!(tango == entity)) { _fun79559_ip = 52; continue _fun79559 }
 33:
                tango = _closure1_slot2;
                zulu = tango.getLastMessage;
                mike = _closure2_slot0;
                entity = zulu.bind(tango)(mike);
 52:
                return entity;
            }
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['useLastChannelMessage'] = mike;
    return entity;
})();