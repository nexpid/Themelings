// app/modules/launchpad/native/useLaunchPadPullTabMinimized.tsx
export default (function(argFoo, argBar, _, argCorge, __, argFred, argPlugh) {
    _fun120875: for(var _fun120875_ip = 0; ; ) switch(_fun120875_ip) {
 0:
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
        tango = oscar[tango];
        tango = report.bind(entity)(tango);
        verify = tango.NativeEventEmitter;
        tango = tango.NativeModules;
        golf = tango.DCDScrollTracker;
        tango = undefined;
        if(!golf) { _fun120875_ip = 131; continue _fun120875 }
 108:
        options = verify.prototype;
        options = Object.create(options, {constructor: {value: verify}});
        foxtrot = options;
        romeo = golf;
        golf = new foxtrot[verify](romeo, yankee);
        tango = golf instanceof Object ? golf : options;
 131:
        var _closure1_slot3 = tango;
        tango = {};
        golf = 'function useLaunchPadPullTabMinimizedTsx1(){const{launchPadPullTabState,isVoicePanelOpen,launchPadSharedState,isMinimizedDuringScroll}=this.__closure;const isMinimized=(launchPadPullTabState.get().minimized||isVoicePanelOpen)&&launchPadSharedState.get()<=0;return isMinimized||isMinimizedDuringScroll.get();}';
        tango['code'] = golf;
        var _closure1_slot4 = tango;
        tango = 4;
        tango = oscar[tango];
        oscar = report.bind(entity)(tango);
        report = oscar.fileFinishedImporting;
        tango = 'modules/launchpad/native/useLaunchPadPullTabMinimized.tsx';
        tango = report.bind(oscar)(tango);
        mike = function(argFoo) { // Original name: useLaunchPadPullTabMinimized
            mike = argFoo;
            golf = mike.launchPadSharedState;
            var _closure2_slot0 = golf;
            verify = mike.launchPadPullTabState;
            var _closure2_slot1 = verify;
            report = _closure1_slot0;
            offset = _closure1_slot1;
            mike = 3;
            mike = offset[mike];
            zulu = undefined;
            oscar = report.bind(zulu)(mike);
            mike = oscar.useIsVoicePanelFullscreen;
            options = mike.bind(oscar)();
            var _closure2_slot2 = options;
            mike = function() { // Original name: useIsMinimizedDuringScroll
                report = _closure1_slot0;
                tango = _closure1_slot1;
                entity = 2;
                tango = tango[entity];
                entity = undefined;
                report = report.bind(entity)(tango);
                tango = report.useSharedValue;
                entity = false;
                entity = tango.bind(report)(entity);
                var _closure3_slot0 = entity;
                report = _closure1_slot2;
                tango = report.useEffect;
                zulu = new Array(1);
                zulu[0] = entity;
                mike = function() {
                    _fun120878: for(var _fun120878_ip = 0; ; ) switch(_fun120878_ip) {
 0:
                        mike = -1;
                        var _closure4_slot0 = mike;
                        tango = _closure1_slot3;
                        mike = null;
                        tango = mike == tango;
                        mike = undefined;
                        if(tango) { _fun120878_ip = 59; continue _fun120878 }
 30:
                        oscar = _closure1_slot3;
                        report = oscar.addListener;
                        tango = 'isScrollingOrDragging';
                        zulu = function(argFoo) {
                            _fun120879: for(var _fun120879_ip = 0; ; ) switch(_fun120879_ip) {
 0:
                                entity = argFoo;
                                tango = entity.isScrollingOrDragging;
                                mike = global;
                                oscar = mike.clearTimeout;
                                report = _closure4_slot0;
                                entity = undefined;
                                report = oscar.bind(entity)(report);
                                if(tango) { _fun120879_ip = 69; continue _fun120879 }
 36:
                                report = mike.setTimeout;
                                tango = function() {
                                    zulu = _closure3_slot0;
                                    mike = zulu.set;
                                    entity = false;
                                    entity = mike.bind(zulu)(entity);
                                    entity = undefined;
                                    return entity;
                                };
                                mike = 1000;
                                mike = report.bind(entity)(tango, mike);
                                _closure4_slot0 = mike;
                                _fun120879_ip = 88; continue _fun120879;
 69:
                                tango = _closure3_slot0;
                                zulu = tango.set;
                                mike = true;
                                mike = zulu.bind(tango)(mike);
 88:
                                return entity;
                            }
                        };
                        mike = report.bind(oscar)(tango, zulu);
 59:
                        var _closure4_slot1 = mike;
                        entity = function() {
                            _fun120881: for(var _fun120881_ip = 0; ; ) switch(_fun120881_ip) {
 0:
                                entity = global;
                                tango = entity.clearTimeout;
                                zulu = _closure4_slot0;
                                entity = undefined;
                                zulu = tango.bind(entity)(zulu);
                                tango = _closure4_slot1;
                                zulu = null;
                                if(!(zulu != tango)) { _fun120881_ip = 46; continue _fun120881 }
 32:
                                zulu = _closure4_slot1;
                                mike = zulu.remove;
                                mike = mike.bind(zulu)();
 46:
                                return entity;
                            }
                        };
                        return entity;
                    }
                };
                mike = tango.bind(report)(mike, zulu);
                return entity;
            };
            oscar = mike.bind(zulu)();
            var _closure2_slot3 = oscar;
            mike = 2;
            mike = offset[mike];
            zulu = report.bind(zulu)(mike);
            mike = zulu.useDerivedValue;
            entity = function() { // Original name: u
                _fun120882: for(var _fun120882_ip = 0; ; ) switch(_fun120882_ip) {
 0:
                    zulu = _closure2_slot1;
                    entity = zulu.get;
                    entity = entity.bind(zulu)();
                    entity = entity.minimized;
                    if(entity) { _fun120882_ip = 29; continue _fun120882 }
 25:
                    entity = _closure2_slot2;
 29:
                    if(!entity) { _fun120882_ip = 51; continue _fun120882 }
 32:
                    tango = _closure2_slot0;
                    zulu = tango.get;
                    tango = zulu.bind(tango)();
                    zulu = 0;
                    entity = tango <= zulu;
 51:
                    if(entity) { _fun120882_ip = 67; continue _fun120882 }
 54:
                    zulu = _closure2_slot3;
                    mike = zulu.get;
                    entity = mike.bind(zulu)();
 67:
                    return entity;
                }
            };
            report = {};
            report['launchPadPullTabState'] = verify;
            report['isVoicePanelOpen'] = options;
            report['launchPadSharedState'] = golf;
            report['isMinimizedDuringScroll'] = oscar;
            entity['__closure'] = report;
            report = 14263056934448.0;
            entity['__workletHash'] = report;
            tango = _closure1_slot4;
            entity['__initData'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        zulu['default'] = mike;
        return entity;
    }
})();