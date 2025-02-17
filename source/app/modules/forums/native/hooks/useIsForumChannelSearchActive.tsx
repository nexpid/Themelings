// app/modules/forums/native/hooks/useIsForumChannelSearchActive.tsx
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
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/forums/native/hooks/useIsForumChannelSearchActive.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useIsForumChannelSearchActive
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golf = argFoo;
            var _closure2_slot0 = golf;
            oscar = _closure1_slot0;
            options = _closure1_slot1;
            entity = 1;
            entity = options[entity];
            report = undefined;
            tango = oscar.bind(report)(entity);
            entity = tango.useCanSearchForumPostsByChannelId;
            entity = entity.bind(tango)(golf);
            tango = 2;
            tango = options[tango];
            oscar = oscar.bind(report)(tango);
            report = oscar.useStateFromStores;
            zulu = _closure1_slot2;
            tango = new Array(1);
            tango[0] = zulu;
            zulu = new Array(1);
            zulu[0] = golf;
            mike = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zulu = _closure2_slot0;
                    entity = null;
                    zulu = entity != zulu;
                    if(!zulu) { _fun00004_ip = 38; continue _fun00003 }
 16:
                    tango = _closure1_slot2;
                    zulu = tango.getSearchQuery;
                    mike = _closure2_slot0;
                    entity = zulu.bind(tango)(mike);
 38:
                    return entity;
                }
            };
            zulu = report.bind(oscar)(tango, mike, zulu);
            if(!entity) { _fun00002_ip = 103; continue _fun00001 }
 97:
            mike = null;
            entity = mike != zulu;
 103:
            return entity;
        }
    };
    zulu['useIsForumChannelSearchActive'] = mike;
    return entity;
})();