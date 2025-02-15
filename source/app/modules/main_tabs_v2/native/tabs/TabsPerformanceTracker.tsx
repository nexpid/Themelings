// app/modules/main_tabs_v2/native/tabs/TabsPerformanceTracker.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: trackForScreen
        _fun116209: for(var _fun116209_ip = 0; ; ) switch(_fun116209_ip) {
 0:
            oscar = argFoo;
            entity = argBar;
            mike = entity.uiTime;
            tango = null;
            mike = tango != mike;
            if(!mike) { _fun116209_ip = 31; continue _fun116209 }
 21:
            zulu = entity.layoutUITime;
            mike = tango != zulu;
 31:
            if(!mike) { _fun116209_ip = 282; continue _fun116209 }
 37:
            report = _closure1_slot1;
            tango = _closure1_slot2;
            zulu = 3;
            tango = tango[zulu];
            zulu = undefined;
            golf = report.bind(zulu)(tango);
            report = golf.track;
            zulu = _closure1_slot4;
            tango = zulu.REDESIGN_NAV_BAR_RENDERED;
            zulu = {};
            zulu['tab'] = oscar;
            options = entity.startTime;
            zulu['start_time'] = options;
            options = entity.layoutEffectTime;
            zulu['layout_effect_time'] = options;
            options = entity.layoutUITime;
            zulu['layout_ui_thread_time'] = options;
            options = entity.effectTime;
            zulu['effect_time'] = options;
            options = entity.uiTime;
            zulu['ui_thread_time'] = options;
            zulu = report.bind(golf)(tango, zulu);
            report = _closure1_slot5;
            tango = report.info;
            zulu = {};
            golf = entity.layoutEffectTime;
            mike = entity.startTime;
            mike = golf - mike;
            zulu['layoutEffectDuration'] = mike;
            golf = entity.effectTime;
            mike = entity.startTime;
            mike = golf - mike;
            zulu['effectDuration'] = mike;
            golf = entity.layoutUITime;
            mike = entity.startTime;
            mike = golf - mike;
            zulu['layoutUIDuration'] = mike;
            mike = entity.uiTime;
            entity = entity.startTime;
            entity = mike - entity;
            zulu['uiDuration'] = entity;
            romeo = 'First navigation to';
            offset = 'took';
            foxtrot = report;
            yankee = oscar;
            verify = zulu;
            entity = foxtrot[tango](romeo, yankee, offset, verify, options);
 282:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot9 = entity;
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
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.AnalyticEvents;
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.Logger;
    tango = options.prototype;
    golf = Object.create(tango, {constructor: {value: options}});
    yankee = 'TabsPerformanceTracker';
    romeo = golf;
    tango = new romeo[options](yankee, offset);
    tango = tango instanceof Object ? tango : golf;
    var _closure1_slot5 = tango;
    tango = {};
    var _closure1_slot6 = tango;
    tango = {};
    golf = 'function TabsPerformanceTrackerTsx1(){const{runOnJS,log}=this.__closure;return runOnJS(log)();}';
    tango['code'] = golf;
    var _closure1_slot7 = tango;
    tango = {};
    golf = 'function TabsPerformanceTrackerTsx2(){const{runOnJS,log}=this.__closure;return runOnJS(log)();}';
    tango['code'] = golf;
    var _closure1_slot8 = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/tabs/TabsPerformanceTracker.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: trackTabPressed
        _fun116210: for(var _fun116210_ip = 0; ; ) switch(_fun116210_ip) {
 0:
            zulu = argFoo;
            mike = _closure1_slot6;
            tango = mike[zulu];
            mike = null;
            if(!(mike == tango)) { _fun116210_ip = 52; continue _fun116210 }
 20:
            mike = _closure1_slot6;
            entity = {};
            tango = global;
            report = tango.performance;
            tango = report.now;
            tango = tango.bind(report)();
            entity['startTime'] = tango;
            mike[zulu] = entity;
 52:
            entity = undefined;
            return entity;
        }
    };
    zulu['trackTabPressed'] = tango;
    mike = function(argFoo) { // Original name: useTrackTabPerformance
        report = argFoo;
        var _closure2_slot0 = report;
        tango = _closure1_slot3;
        oscar = tango.useLayoutEffect;
        zulu = new Array(1);
        zulu[0] = report;
        mike = function() {
            _fun116212: for(var _fun116212_ip = 0; ; ) switch(_fun116212_ip) {
 0:
                tango = _closure1_slot6;
                zulu = _closure2_slot0;
                zulu = tango[zulu];
                var _closure3_slot0 = zulu;
                golf = null;
                if(!(golf != zulu)) { _fun116212_ip = 40; continue _fun116212 }
 30:
                tango = zulu.startTime;
                if(!(golf == tango)) { _fun116212_ip = 67; continue _fun116212 }
 40:
                oscar = _closure1_slot6;
                tango = _closure2_slot0;
                mike = oscar[tango];
                if(!(golf == mike)) { _fun116212_ip = 58; continue _fun116212 }
 56:
                mike = {};
 58:
                oscar[tango] = mike;
                _fun116212_ip = 202; continue _fun116212;
 67:
                mike = global;
                tango = mike.performance;
                mike = tango.now;
                mike = mike.bind(tango)();
                zulu['layoutEffectTime'] = mike;
                golf = function() { // Original name: log
                    tango = _closure3_slot0;
                    entity = global;
                    mike = entity.performance;
                    entity = mike.now;
                    entity = entity.bind(mike)();
                    tango['layoutUITime'] = entity;
                    zulu = _closure1_slot9;
                    mike = _closure2_slot0;
                    entity = undefined;
                    mike = zulu.bind(entity)(mike, tango);
                    return entity;
                };
                var _closure3_slot1 = golf;
                verify = _closure1_slot0;
                offset = _closure1_slot2;
                options = 4;
                zulu = offset[options];
                mike = undefined;
                tango = verify.bind(mike)(zulu);
                zulu = tango.runOnUI;
                entity = function() { // Original name: o
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 4;
                    entity = mike[entity];
                    mike = undefined;
                    tango = zulu.bind(mike)(entity);
                    zulu = tango.runOnJS;
                    entity = _closure3_slot1;
                    entity = zulu.bind(tango)(entity);
                    entity = entity.bind(mike)();
                    return entity;
                };
                oscar = {};
                options = offset[options];
                options = verify.bind(mike)(options);
                options = options.runOnJS;
                oscar['runOnJS'] = options;
                oscar['log'] = golf;
                entity['__closure'] = oscar;
                oscar = 7114578957129.0;
                entity['__workletHash'] = oscar;
                report = _closure1_slot7;
                entity['__initData'] = report;
                entity = zulu.bind(tango)(entity);
                entity = entity.bind(mike)();
 202:
                entity = undefined;
                return entity;
            }
        };
        mike = oscar.bind(tango)(mike, zulu);
        zulu = tango.useEffect;
        mike = new Array(1);
        mike[0] = report;
        entity = function() {
            _fun116215: for(var _fun116215_ip = 0; ; ) switch(_fun116215_ip) {
 0:
                tango = _closure1_slot6;
                zulu = _closure2_slot0;
                zulu = tango[zulu];
                var _closure3_slot0 = zulu;
                golf = null;
                if(!(golf != zulu)) { _fun116215_ip = 40; continue _fun116215 }
 30:
                tango = zulu.startTime;
                if(!(golf == tango)) { _fun116215_ip = 67; continue _fun116215 }
 40:
                oscar = _closure1_slot6;
                tango = _closure2_slot0;
                mike = oscar[tango];
                if(!(golf == mike)) { _fun116215_ip = 58; continue _fun116215 }
 56:
                mike = {};
 58:
                oscar[tango] = mike;
                _fun116215_ip = 202; continue _fun116215;
 67:
                mike = global;
                tango = mike.performance;
                mike = tango.now;
                mike = mike.bind(tango)();
                zulu['effectTime'] = mike;
                golf = function() { // Original name: log
                    tango = _closure3_slot0;
                    entity = global;
                    mike = entity.performance;
                    entity = mike.now;
                    entity = entity.bind(mike)();
                    tango['uiTime'] = entity;
                    zulu = _closure1_slot9;
                    mike = _closure2_slot0;
                    entity = undefined;
                    mike = zulu.bind(entity)(mike, tango);
                    return entity;
                };
                var _closure3_slot1 = golf;
                verify = _closure1_slot0;
                offset = _closure1_slot2;
                options = 4;
                zulu = offset[options];
                mike = undefined;
                tango = verify.bind(mike)(zulu);
                zulu = tango.runOnUI;
                entity = function() { // Original name: o
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 4;
                    entity = mike[entity];
                    mike = undefined;
                    tango = zulu.bind(mike)(entity);
                    zulu = tango.runOnJS;
                    entity = _closure3_slot1;
                    entity = zulu.bind(tango)(entity);
                    entity = entity.bind(mike)();
                    return entity;
                };
                oscar = {};
                options = offset[options];
                options = verify.bind(mike)(options);
                options = options.runOnJS;
                oscar['runOnJS'] = options;
                oscar['log'] = golf;
                entity['__closure'] = oscar;
                oscar = 331508196106.0;
                entity['__workletHash'] = oscar;
                report = _closure1_slot8;
                entity['__initData'] = report;
                entity = zulu.bind(tango)(entity);
                entity = entity.bind(mike)();
 202:
                entity = undefined;
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity, mike);
        entity = undefined;
        return entity;
    };
    zulu['useTrackTabPerformance'] = mike;
    return entity;
})();