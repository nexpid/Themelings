// app/modules/forums/ForumPlatformHooks.native.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
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
    golf = oscar[entity];
    mike = argCorge;
    entity = undefined;
    mike = mike.bind(entity)(golf);
    var _closure1_slot3 = mike;
    mike = {};
    tango = function(argFoo) { // Original name: useForumChannelSeenManager
        entity = argFoo;
        golf = entity.guildId;
        var _closure2_slot0 = golf;
        options = entity.channelId;
        var _closure2_slot1 = options;
        report = _closure1_slot3;
        zulu = report.useRef;
        entity = null;
        entity = zulu.bind(report)(entity);
        var _closure2_slot2 = entity;
        oscar = report.useCallback;
        tango = new Array(1);
        tango[0] = options;
        zulu = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tango = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 1;
                mike = mike[entity];
                entity = undefined;
                tango = tango.bind(entity)(mike);
                mike = tango.getRootNavigationRef;
                report = mike.bind(tango)();
                mike = null;
                if(!(mike != report)) { _fun00002_ip = 151; continue _fun00001 }
 41:
                tango = report.isReady;
                tango = tango.bind(report)();
                if(!tango) { _fun00002_ip = 151; continue _fun00001 }
 54:
                tango = report.getCurrentRoute;
                report = tango.bind(report)();
                tango = _closure1_slot0;
                oscar = _closure1_slot2;
                zulu = 2;
                zulu = oscar[zulu];
                tango = tango.bind(entity)(zulu);
                zulu = tango.coerceChannelRoute;
                zulu = zulu.bind(tango)(report);
                tango = mike != zulu;
                if(!tango) { _fun00002_ip = 124; continue _fun00001 }
 102:
                zulu = zulu.params;
                report = zulu.channelId;
                zulu = _closure2_slot1;
                tango = report === zulu;
 124:
                zulu = _closure2_slot2;
                zulu = zulu.current;
                if(!(mike != zulu)) { _fun00002_ip = 151; continue _fun00001 }
 140:
                mike = zulu.handleReactNavigationFocus;
                mike = mike.bind(zulu)(tango);
 151:
                return entity;
            }
        };
        oscar = oscar.bind(report)(zulu, tango);
        var _closure2_slot3 = oscar;
        tango = report.useEffect;
        zulu = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                mike = 1;
                zulu = zulu[mike];
                mike = undefined;
                tango = tango.bind(mike)(zulu);
                zulu = tango.getRootNavigationRef;
                report = zulu.bind(tango)();
                var _closure3_slot0 = report;
                zulu = null;
                if(!(zulu != report)) { _fun00004_ip = 60; continue _fun00003 }
 47:
                zulu = report.isReady;
                zulu = zulu.bind(report)();
                if(zulu) { _fun00004_ip = 62; continue _fun00003 }
 60:
                return mike;
 62:
                tango = report.addListener;
                zulu = _closure2_slot3;
                mike = 'state';
                mike = tango.bind(report)(mike, zulu);
                entity = function() {
                    tango = _closure3_slot0;
                    zulu = tango.removeListener;
                    mike = _closure2_slot3;
                    entity = 'state';
                    entity = zulu.bind(tango)(entity, mike);
                    entity = undefined;
                    return entity;
                };
                return entity;
            }
        };
        zulu = tango.bind(report)(zulu);
        tango = report.useLayoutEffect;
        zulu = new Array(3);
        zulu[0] = options;
        zulu[1] = golf;
        zulu[2] = oscar;
        mike = function() {
            zulu = _closure2_slot2;
            report = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 3;
            tango = tango[mike];
            mike = undefined;
            oscar = report.bind(mike)(tango);
            tango = {};
            report = _closure2_slot0;
            tango['guildId'] = report;
            report = _closure2_slot1;
            tango['channelId'] = report;
            report = oscar.prototype;
            report = Object.create(report, {constructor: {value: oscar}});
            options = report;
            golf = tango;
            tango = new options[oscar](golf, oscar);
            tango = tango instanceof Object ? tango : report;
            zulu['current'] = tango;
            tango = zulu.current;
            zulu = tango.initialize;
            zulu = zulu.bind(tango)();
            entity = _closure2_slot3;
            entity = entity.bind(mike)();
            entity = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    mike = _closure2_slot2;
                    tango = mike.current;
                    mike = null;
                    if(!(mike != tango)) { _fun00006_ip = 28; continue _fun00005 }
 18:
                    zulu = tango.terminate;
                    zulu = zulu.bind(tango)();
 28:
                    entity = _closure2_slot2;
                    entity['current'] = mike;
                    entity = undefined;
                    return entity;
                }
            };
            return entity;
        };
        mike = tango.bind(report)(mike, zulu);
        entity = entity.current;
        return entity;
    };
    mike['useForumChannelSeenManager'] = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/forums/ForumPlatformHooks.native.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();