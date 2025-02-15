// app/modules/guild_sidebar/native/useShouldRenderChannelList.tsx
export default (function(_, argBar, argBaz, argCorge, __, argFred, argPlugh) {
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
    options = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(options);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ComponentActions;
    var _closure1_slot6 = tango;
    tango = false;
    var _closure1_slot7 = tango;
    tango = 8;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_sidebar/native/useShouldRenderChannelList.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: useShouldRenderChannelList
        report = _closure1_slot3;
        tango = report.useState;
        zulu = _closure1_slot7;
        oscar = tango.bind(report)(zulu);
        tango = _closure1_slot2;
        zulu = undefined;
        entity = 2;
        tango = tango.bind(zulu)(oscar, entity);
        entity = 0;
        entity = tango[entity];
        var _closure2_slot0 = entity;
        zulu = 1;
        zulu = tango[zulu];
        var _closure2_slot1 = zulu;
        tango = report.useEffect;
        zulu = new Array(1);
        zulu[0] = entity;
        mike = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                verify = function() { // Original name: allowRender
                    zulu = true;
                    _closure1_slot7 = zulu;
                    mike = _closure2_slot1;
                    entity = undefined;
                    mike = mike.bind(entity)(zulu);
                    return entity;
                };
                var _closure3_slot0 = verify;
                golf = function() { // Original name: handleGatewayChange
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        mike = _closure1_slot5;
                        entity = mike.isConnected;
                        entity = entity.bind(mike)();
                        if(!entity) { _fun00004_ip = 33; continue _fun00003 }
 20:
                        mike = _closure3_slot0;
                        entity = undefined;
                        entity = mike.bind(entity)();
 33:
                        entity = undefined;
                        return entity;
                    }
                };
                var _closure3_slot1 = golf;
                oscar = function() { // Original name: handleCacheChange
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        mike = _closure1_slot4;
                        entity = mike.getLazyCacheStatus;
                        mike = entity.bind(mike)();
                        entity = 'cache-loaded';
                        if(!(entity === mike)) { _fun00006_ip = 40; continue _fun00005 }
 27:
                        mike = _closure3_slot0;
                        entity = undefined;
                        entity = mike.bind(entity)();
 40:
                        entity = undefined;
                        return entity;
                    }
                };
                var _closure3_slot2 = oscar;
                report = function() { // Original name: handleNavigationChange
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        zulu = _closure1_slot0;
                        oscar = _closure1_slot1;
                        entity = 5;
                        mike = oscar[entity];
                        entity = undefined;
                        report = zulu.bind(entity)(mike);
                        tango = report.coerceGuildsRoute;
                        mike = 6;
                        mike = oscar[mike];
                        zulu = zulu.bind(entity)(mike);
                        mike = zulu.getRootNavigationRef;
                        golf = mike.bind(zulu)();
                        zulu = null;
                        oscar = zulu == golf;
                        mike = undefined;
                        if(oscar) { _fun00008_ip = 74; continue _fun00007 }
 64:
                        oscar = golf.getCurrentRoute;
                        mike = oscar.bind(golf)();
 74:
                        mike = tango.bind(report)(mike);
                        if(!(zulu != mike)) { _fun00008_ip = 94; continue _fun00007 }
 83:
                        mike = _closure3_slot0;
                        mike = mike.bind(entity)();
 94:
                        return entity;
                    }
                };
                var _closure3_slot3 = report;
                mike = _closure2_slot0;
                if(mike) { _fun00002_ip = 195; continue _fun00001 }
 59:
                tango = _closure1_slot5;
                zulu = tango.addReactChangeListener;
                zulu = zulu.bind(tango)(golf);
                tango = _closure1_slot4;
                zulu = tango.addReactChangeListener;
                zulu = zulu.bind(tango)(oscar);
                tango = _closure1_slot0;
                oscar = _closure1_slot1;
                zulu = 7;
                golf = oscar[zulu];
                zulu = undefined;
                golf = tango.bind(zulu)(golf);
                options = golf.ComponentDispatch;
                golf = options.subscribe;
                mike = _closure1_slot6;
                mike = mike.BOTTOM_CHANNEL_SCREEN_DRAG_START;
                mike = golf.bind(options)(mike, verify);
                mike = 6;
                mike = oscar[mike];
                zulu = tango.bind(zulu)(mike);
                mike = zulu.getRootNavigationRef;
                tango = mike.bind(zulu)();
                mike = null;
                if(!(mike != tango)) { _fun00002_ip = 186; continue _fun00001 }
 170:
                zulu = tango.addListener;
                mike = 'state';
                mike = zulu.bind(tango)(mike, report);
 186:
                entity = function() {
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        report = _closure1_slot5;
                        tango = report.removeReactChangeListener;
                        entity = _closure3_slot1;
                        entity = tango.bind(report)(entity);
                        report = _closure1_slot4;
                        tango = report.addReactChangeListener;
                        entity = _closure3_slot2;
                        entity = tango.bind(report)(entity);
                        tango = _closure1_slot0;
                        report = _closure1_slot1;
                        entity = 7;
                        oscar = report[entity];
                        entity = undefined;
                        oscar = tango.bind(entity)(oscar);
                        options = oscar.ComponentDispatch;
                        golf = options.unsubscribe;
                        zulu = _closure1_slot6;
                        oscar = zulu.BOTTOM_CHANNEL_SCREEN_DRAG_START;
                        zulu = _closure3_slot0;
                        zulu = golf.bind(options)(oscar, zulu);
                        zulu = 6;
                        zulu = report[zulu];
                        tango = tango.bind(entity)(zulu);
                        zulu = tango.getRootNavigationRef;
                        report = zulu.bind(tango)();
                        zulu = null;
                        if(!(zulu != report)) { _fun00010_ip = 146; continue _fun00009 }
 126:
                        tango = report.removeListener;
                        zulu = _closure3_slot3;
                        mike = 'state';
                        mike = tango.bind(report)(mike, zulu);
 146:
                        return entity;
                    }
                };
                return entity;
 195:
                entity = undefined;
                return entity;
            }
        };
        mike = tango.bind(report)(mike, zulu);
        return entity;
    };
    zulu['useShouldRenderChannelList'] = mike;
    return entity;
})();