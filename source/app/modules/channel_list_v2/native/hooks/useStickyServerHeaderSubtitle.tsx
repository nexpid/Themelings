// app/modules/channel_list_v2/native/hooks/useStickyServerHeaderSubtitle.tsx
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
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.GuildFeatures;
    var _closure1_slot3 = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/channel_list_v2/native/hooks/useStickyServerHeaderSubtitle.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useStickyServerHeaderSubtitle
        mike = argFoo;
        var _closure2_slot0 = mike;
        report = _closure1_slot0;
        tango = _closure1_slot1;
        zulu = 2;
        tango = tango[zulu];
        zulu = undefined;
        tango = report.bind(zulu)(tango);
        zulu = tango.useStateFromStores;
        report = _closure1_slot2;
        mike = new Array(1);
        mike[0] = report;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                report = _closure2_slot0;
                tango = report.hasFeature;
                entity = _closure1_slot3;
                entity = entity.COMMUNITY;
                tango = tango.bind(report)(entity);
                entity = undefined;
                if(!tango) { _fun00002_ip = 60; continue _fun00001 }
 36:
                tango = _closure1_slot2;
                zulu = tango.getMemberCount;
                mike = _closure2_slot0;
                mike = mike.id;
                entity = zulu.bind(tango)(mike);
 60:
                return entity;
            }
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();