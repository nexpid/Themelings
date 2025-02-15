// app/modules/voice_panel/native/hooks/useTapGestures.tsx
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
    tango = {};
    golf = 'function useTapGesturesTsx1(event,manager){const{isFocusedVideoZoomed}=this.__closure;if(isFocusedVideoZoomed.get()){manager.fail();}}';
    tango['code'] = golf;
    var _closure1_slot4 = tango;
    tango = {};
    golf = "function useTapGesturesTsx2(){const{runOnJS,handleEvent}=this.__closure;return runOnJS(handleEvent)('double');}";
    tango['code'] = golf;
    var _closure1_slot5 = tango;
    tango = {};
    golf = "function useTapGesturesTsx3(){const{runOnJS,handleEvent}=this.__closure;return runOnJS(handleEvent)('single');}";
    tango['code'] = golf;
    var _closure1_slot6 = tango;
    tango = {};
    golf = "function useTapGesturesTsx4(){const{runOnJS,triggerHapticFeedback,HapticFeedbackTypes,handleEvent}=this.__closure;runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);runOnJS(handleEvent)('long');}";
    tango['code'] = golf;
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/voice_panel/native/hooks/useTapGestures.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useTapGestures
        mike = argFoo;
        var _closure2_slot0 = mike;
        tango = _closure1_slot3;
        report = tango.useContext;
        golf = _closure1_slot1;
        oscar = _closure1_slot2;
        zulu = 1;
        oscar = oscar[zulu];
        zulu = undefined;
        zulu = golf.bind(zulu)(oscar);
        zulu = report.bind(tango)(zulu);
        report = zulu.isFocusedVideoZoomed;
        var _closure2_slot1 = report;
        zulu = tango.useRef;
        zulu = zulu.bind(tango)(mike);
        var _closure2_slot2 = zulu;
        zulu = mike.onSingleTap;
        oscar = null;
        verify = oscar != zulu;
        var _closure2_slot3 = verify;
        zulu = mike.onDoubleTap;
        options = oscar != zulu;
        var _closure2_slot4 = options;
        zulu = mike.onLongPress;
        golf = oscar != zulu;
        var _closure2_slot5 = golf;
        oscar = mike.gesturesEnabled;
        var _closure2_slot6 = oscar;
        zulu = tango.useLayoutEffect;
        mike = function() {
            mike = _closure2_slot2;
            entity = _closure2_slot0;
            mike['current'] = entity;
            entity = undefined;
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        zulu = tango.useMemo;
        mike = new Array(5);
        mike[0] = verify;
        mike[1] = options;
        mike[2] = golf;
        mike[3] = oscar;
        mike[4] = report;
        entity = function() {
            _fun122088: for(var _fun122088_ip = 0; ; ) switch(_fun122088_ip) {
 0:
                offset = function(argFoo) { // Original name: handleEvent
                    _fun122089: for(var _fun122089_ip = 0; ; ) switch(_fun122089_ip) {
 0:
                        mike = argFoo;
                        entity = 'single';
                        if(!(entity !== mike)) { _fun122089_ip = 120; continue _fun122089 }
 11:
                        entity = 'double';
                        if(!(entity !== mike)) { _fun122089_ip = 75; continue _fun122089 }
 19:
                        entity = 'long';
                        if(!(entity === mike)) { _fun122089_ip = 163; continue _fun122089 }
 30:
                        mike = _closure2_slot2;
                        mike = mike.current;
                        zulu = mike.onLongPress;
                        mike = null;
                        if(!(mike != zulu)) { _fun122089_ip = 163; continue _fun122089 }
 54:
                        entity = _closure2_slot2;
                        mike = entity.current;
                        entity = mike.onLongPress;
                        entity = entity.bind(mike)();
                        _fun122089_ip = 163; continue _fun122089;
 75:
                        mike = _closure2_slot2;
                        mike = mike.current;
                        zulu = mike.onDoubleTap;
                        mike = null;
                        if(!(mike != zulu)) { _fun122089_ip = 163; continue _fun122089 }
 99:
                        entity = _closure2_slot2;
                        mike = entity.current;
                        entity = mike.onDoubleTap;
                        entity = entity.bind(mike)();
                        _fun122089_ip = 163; continue _fun122089;
 120:
                        mike = _closure2_slot2;
                        mike = mike.current;
                        zulu = mike.onSingleTap;
                        mike = null;
                        if(!(mike != zulu)) { _fun122089_ip = 163; continue _fun122089 }
 144:
                        entity = _closure2_slot2;
                        mike = entity.current;
                        entity = mike.onSingleTap;
                        entity = entity.bind(mike)();
 163:
                        entity = undefined;
                        return entity;
                    }
                };
                var _closure3_slot0 = offset;
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                verify = 2;
                tango = mike[verify];
                foxtrot = undefined;
                tango = zulu.bind(foxtrot)(tango);
                report = tango.Gesture;
                tango = report.Exclusive;
                mike = mike[verify];
                mike = zulu.bind(foxtrot)(mike);
                zulu = mike.Gesture;
                mike = zulu.Tap;
                oscar = mike.bind(zulu)();
                zulu = oscar.enabled;
                mike = _closure2_slot6;
                if(!mike) { _fun122088_ip = 94; continue _fun122088 }
 90:
                mike = _closure2_slot4;
 94:
                zulu = zulu.bind(oscar)(mike);
                mike = zulu.maxDistance;
                golf = 30;
                zulu = mike.bind(zulu)(golf);
                mike = zulu.numberOfTaps;
                oscar = mike.bind(zulu)(verify);
                zulu = oscar.onTouchesDown;
                mike = function(argFoo, argBar) { // Original name: f
                    _fun122090: for(var _fun122090_ip = 0; ; ) switch(_fun122090_ip) {
 0:
                        mike = argBar;
                        zulu = _closure2_slot1;
                        entity = zulu.get;
                        entity = entity.bind(zulu)();
                        if(!entity) { _fun122090_ip = 32; continue _fun122090 }
 22:
                        entity = mike.fail;
                        entity = entity.bind(mike)();
 32:
                        entity = undefined;
                        return entity;
                    }
                };
                yankee = {};
                backup = _closure2_slot1;
                yankee['isFocusedVideoZoomed'] = backup;
                mike['__closure'] = yankee;
                yankee = 17029101165477.0;
                mike['__workletHash'] = yankee;
                yankee = _closure1_slot4;
                mike['__initData'] = yankee;
                kilo = zulu.bind(oscar)(mike);
                backup = kilo.onStart;
                zulu = function() { // Original name: h
                    mike = _closure1_slot0;
                    zulu = _closure1_slot2;
                    entity = 3;
                    entity = zulu[entity];
                    zulu = undefined;
                    tango = mike.bind(zulu)(entity);
                    mike = tango.runOnJS;
                    entity = _closure3_slot0;
                    mike = mike.bind(tango)(entity);
                    entity = 'double';
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                sizing = {};
                oscar = _closure1_slot0;
                mike = _closure1_slot2;
                yankee = 3;
                output = mike[yankee];
                output = oscar.bind(foxtrot)(output);
                output = output.runOnJS;
                sizing['runOnJS'] = output;
                sizing['handleEvent'] = offset;
                zulu['__closure'] = sizing;
                sizing = 6829153123689.0;
                zulu['__workletHash'] = sizing;
                sizing = _closure1_slot5;
                zulu['__initData'] = sizing;
                zulu = backup.bind(kilo)(zulu);
                mike = mike[verify];
                mike = oscar.bind(foxtrot)(mike);
                oscar = mike.Gesture;
                mike = oscar.Tap;
                backup = mike.bind(oscar)();
                oscar = backup.enabled;
                mike = _closure2_slot6;
                if(!mike) { _fun122088_ip = 312; continue _fun122088 }
 308:
                mike = _closure2_slot3;
 312:
                oscar = oscar.bind(backup)(mike);
                mike = oscar.maxDistance;
                kilo = mike.bind(oscar)(golf);
                backup = kilo.onStart;
                mike = function() { // Original name: c
                    mike = _closure1_slot0;
                    zulu = _closure1_slot2;
                    entity = 3;
                    entity = zulu[entity];
                    zulu = undefined;
                    tango = mike.bind(zulu)(entity);
                    mike = tango.runOnJS;
                    entity = _closure3_slot0;
                    mike = mike.bind(tango)(entity);
                    entity = 'single';
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                sizing = {};
                golf = _closure1_slot0;
                oscar = _closure1_slot2;
                output = oscar[yankee];
                output = golf.bind(foxtrot)(output);
                output = output.runOnJS;
                sizing['runOnJS'] = output;
                sizing['handleEvent'] = offset;
                mike['__closure'] = sizing;
                sizing = 14109132753191.0;
                mike['__workletHash'] = sizing;
                sizing = _closure1_slot6;
                mike['__initData'] = sizing;
                mike = backup.bind(kilo)(mike);
                oscar = oscar[verify];
                oscar = golf.bind(foxtrot)(oscar);
                golf = oscar.Gesture;
                oscar = golf.LongPress;
                verify = oscar.bind(golf)();
                golf = verify.enabled;
                oscar = _closure2_slot6;
                if(!oscar) { _fun122088_ip = 452; continue _fun122088 }
 448:
                oscar = _closure2_slot5;
 452:
                golf = golf.bind(verify)(oscar);
                oscar = golf.onStart;
                entity = function() { // Original name: n
                    zulu = _closure1_slot0;
                    tango = _closure1_slot2;
                    mike = 3;
                    report = tango[mike];
                    entity = undefined;
                    options = zulu.bind(entity)(report);
                    golf = options.runOnJS;
                    report = 4;
                    oscar = tango[report];
                    oscar = zulu.bind(entity)(oscar);
                    oscar = oscar.triggerHapticFeedback;
                    oscar = golf.bind(options)(oscar);
                    report = tango[report];
                    report = zulu.bind(entity)(report);
                    report = report.HapticFeedbackTypes;
                    report = report.IMPACT_MEDIUM;
                    report = oscar.bind(entity)(report);
                    mike = tango[mike];
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.runOnJS;
                    mike = _closure3_slot0;
                    zulu = zulu.bind(tango)(mike);
                    mike = 'long';
                    mike = zulu.bind(entity)(mike);
                    return entity;
                };
                verify = {};
                romeo = _closure1_slot0;
                backup = _closure1_slot2;
                yankee = backup[yankee];
                yankee = romeo.bind(foxtrot)(yankee);
                yankee = yankee.runOnJS;
                verify['runOnJS'] = yankee;
                yankee = 4;
                kilo = backup[yankee];
                kilo = romeo.bind(foxtrot)(kilo);
                kilo = kilo.triggerHapticFeedback;
                verify['triggerHapticFeedback'] = kilo;
                yankee = backup[yankee];
                yankee = romeo.bind(foxtrot)(yankee);
                yankee = yankee.HapticFeedbackTypes;
                verify['HapticFeedbackTypes'] = yankee;
                verify['handleEvent'] = offset;
                entity['__closure'] = verify;
                verify = 1947700378974.0;
                entity['__workletHash'] = verify;
                options = _closure1_slot7;
                entity['__initData'] = options;
                entity = oscar.bind(golf)(entity);
                entity = tango.bind(report)(zulu, mike, entity);
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();