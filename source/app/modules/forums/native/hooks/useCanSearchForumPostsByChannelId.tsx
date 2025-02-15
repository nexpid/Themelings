// app/modules/forums/native/hooks/useCanSearchForumPostsByChannelId.tsx
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
    tango = 'modules/forums/native/hooks/useCanSearchForumPostsByChannelId.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useCanSearchForumPostsByChannelId
        mike = argFoo;
        var _closure2_slot0 = mike;
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        mike = 3;
        zulu = zulu[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        zulu = tango.useStateFromStores;
        oscar = _closure1_slot2;
        mike = new Array(2);
        mike[0] = oscar;
        report = _closure1_slot3;
        mike[1] = report;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tango = _closure1_slot2;
                zulu = tango.getChannel;
                entity = _closure2_slot0;
                report = zulu.bind(tango)(entity);
                entity = null;
                entity = entity != report;
                if(!entity) { _fun00002_ip = 59; continue _fun00001 }
 33:
                tango = _closure1_slot3;
                zulu = tango.can;
                mike = _closure1_slot4;
                mike = mike.READ_MESSAGE_HISTORY;
                entity = zulu.bind(tango)(mike, report);
 59:
                return entity;
            }
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['useCanSearchForumPostsByChannelId'] = mike;
    return entity;
})();