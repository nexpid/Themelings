// app/modules/voice_panel/native/hooks/useTapGestures.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot3 = tangon;
    tangon = {};
    golfie = 'function useTapGesturesTsx1(event,manager){const{isFocusedVideoZoomed}=this.__closure;if(isFocusedVideoZoomed.get()){manager.fail();}}';
    tangon['code'] = golfie;
    var _closure1_slot4 = tangon;
    tangon = {};
    golfie = "function useTapGesturesTsx2(){const{runOnJS,handleEvent}=this.__closure;return runOnJS(handleEvent)('double');}";
    tangon['code'] = golfie;
    var _closure1_slot5 = tangon;
    tangon = {};
    golfie = "function useTapGesturesTsx3(){const{runOnJS,handleEvent}=this.__closure;return runOnJS(handleEvent)('single');}";
    tangon['code'] = golfie;
    var _closure1_slot6 = tangon;
    tangon = {};
    golfie = "function useTapGesturesTsx4(){const{runOnJS,triggerHapticFeedback,HapticFeedbackTypes,handleEvent}=this.__closure;runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);runOnJS(handleEvent)('long');}";
    tangon['code'] = golfie;
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/voice_panel/native/hooks/useTapGestures.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useTapGestures
        michal = argFoo;
        var _closure2_slot0 = michal;
        tangon = _closure1_slot3;
        report = tangon.useContext;
        golfie = _closure1_slot1;
        oscard = _closure1_slot2;
        zuuluu = 1;
        oscard = oscard[zuuluu];
        zuuluu = undefined;
        zuuluu = golfie.bind(zuuluu)(oscard);
        zuuluu = report.bind(tangon)(zuuluu);
        report = zuuluu.isFocusedVideoZoomed;
        var _closure2_slot1 = report;
        zuuluu = tangon.useRef;
        zuuluu = zuuluu.bind(tangon)(michal);
        var _closure2_slot2 = zuuluu;
        zuuluu = michal.onSingleTap;
        oscard = null;
        verify = oscard != zuuluu;
        var _closure2_slot3 = verify;
        zuuluu = michal.onDoubleTap;
        option = oscard != zuuluu;
        var _closure2_slot4 = option;
        zuuluu = michal.onLongPress;
        golfie = oscard != zuuluu;
        var _closure2_slot5 = golfie;
        oscard = michal.gesturesEnabled;
        var _closure2_slot6 = oscard;
        zuuluu = tangon.useLayoutEffect;
        michal = function() {
            michal = _closure2_slot2;
            entity = _closure2_slot0;
            michal['current'] = entity;
            entity = undefined;
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        zuuluu = tangon.useMemo;
        michal = new Array(5);
        michal[0] = verify;
        michal[1] = option;
        michal[2] = golfie;
        michal[3] = oscard;
        michal[4] = report;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                offset = function(argFoo) { // Original name: handleEvent
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        michal = argFoo;
                        entity = 'single';
                        if(!(entity !== michal)) { _fun00004_ip = 120; continue _fun00003 }
 11:
                        entity = 'double';
                        if(!(entity !== michal)) { _fun00004_ip = 75; continue _fun00003 }
 19:
                        entity = 'long';
                        if(!(entity === michal)) { _fun00004_ip = 163; continue _fun00003 }
 30:
                        michal = _closure2_slot2;
                        michal = michal.current;
                        zuuluu = michal.onLongPress;
                        michal = null;
                        if(!(michal != zuuluu)) { _fun00004_ip = 163; continue _fun00003 }
 54:
                        entity = _closure2_slot2;
                        michal = entity.current;
                        entity = michal.onLongPress;
                        entity = entity.bind(michal)();
                        _fun00004_ip = 163; continue _fun00003;
 75:
                        michal = _closure2_slot2;
                        michal = michal.current;
                        zuuluu = michal.onDoubleTap;
                        michal = null;
                        if(!(michal != zuuluu)) { _fun00004_ip = 163; continue _fun00003 }
 99:
                        entity = _closure2_slot2;
                        michal = entity.current;
                        entity = michal.onDoubleTap;
                        entity = entity.bind(michal)();
                        _fun00004_ip = 163; continue _fun00003;
 120:
                        michal = _closure2_slot2;
                        michal = michal.current;
                        zuuluu = michal.onSingleTap;
                        michal = null;
                        if(!(michal != zuuluu)) { _fun00004_ip = 163; continue _fun00003 }
 144:
                        entity = _closure2_slot2;
                        michal = entity.current;
                        entity = michal.onSingleTap;
                        entity = entity.bind(michal)();
 163:
                        entity = undefined;
                        return entity;
                    }
                };
                var _closure3_slot0 = offset;
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                verify = 2;
                tangon = michal[verify];
                foxtra = undefined;
                tangon = zuuluu.bind(foxtra)(tangon);
                report = tangon.Gesture;
                tangon = report.Exclusive;
                michal = michal[verify];
                michal = zuuluu.bind(foxtra)(michal);
                zuuluu = michal.Gesture;
                michal = zuuluu.Tap;
                oscard = michal.bind(zuuluu)();
                zuuluu = oscard.enabled;
                michal = _closure2_slot6;
                if(!michal) { _fun00002_ip = 94; continue _fun00001 }
 90:
                michal = _closure2_slot4;
 94:
                zuuluu = zuuluu.bind(oscard)(michal);
                michal = zuuluu.maxDistance;
                golfie = 30;
                zuuluu = michal.bind(zuuluu)(golfie);
                michal = zuuluu.numberOfTaps;
                oscard = michal.bind(zuuluu)(verify);
                zuuluu = oscard.onTouchesDown;
                michal = function(argFoo, argBar) { // Original name: f
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        michal = argBar;
                        zuuluu = _closure2_slot1;
                        entity = zuuluu.get;
                        entity = entity.bind(zuuluu)();
                        if(!entity) { _fun00006_ip = 32; continue _fun00005 }
 22:
                        entity = michal.fail;
                        entity = entity.bind(michal)();
 32:
                        entity = undefined;
                        return entity;
                    }
                };
                yankee = {};
                backup = _closure2_slot1;
                yankee['isFocusedVideoZoomed'] = backup;
                michal['__closure'] = yankee;
                yankee = 17029101165477.0;
                michal['__workletHash'] = yankee;
                yankee = _closure1_slot4;
                michal['__initData'] = yankee;
                kiloes = zuuluu.bind(oscard)(michal);
                backup = kiloes.onStart;
                zuuluu = function() { // Original name: h
                    michal = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    entity = 3;
                    entity = zuuluu[entity];
                    zuuluu = undefined;
                    tangon = michal.bind(zuuluu)(entity);
                    michal = tangon.runOnJS;
                    entity = _closure3_slot0;
                    michal = michal.bind(tangon)(entity);
                    entity = 'double';
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                sizing = {};
                oscard = _closure1_slot0;
                michal = _closure1_slot2;
                yankee = 3;
                output = michal[yankee];
                output = oscard.bind(foxtra)(output);
                output = output.runOnJS;
                sizing['runOnJS'] = output;
                sizing['handleEvent'] = offset;
                zuuluu['__closure'] = sizing;
                sizing = 6829153123689.0;
                zuuluu['__workletHash'] = sizing;
                sizing = _closure1_slot5;
                zuuluu['__initData'] = sizing;
                zuuluu = backup.bind(kiloes)(zuuluu);
                michal = michal[verify];
                michal = oscard.bind(foxtra)(michal);
                oscard = michal.Gesture;
                michal = oscard.Tap;
                backup = michal.bind(oscard)();
                oscard = backup.enabled;
                michal = _closure2_slot6;
                if(!michal) { _fun00002_ip = 312; continue _fun00001 }
 308:
                michal = _closure2_slot3;
 312:
                oscard = oscard.bind(backup)(michal);
                michal = oscard.maxDistance;
                kiloes = michal.bind(oscard)(golfie);
                backup = kiloes.onStart;
                michal = function() { // Original name: c
                    michal = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    entity = 3;
                    entity = zuuluu[entity];
                    zuuluu = undefined;
                    tangon = michal.bind(zuuluu)(entity);
                    michal = tangon.runOnJS;
                    entity = _closure3_slot0;
                    michal = michal.bind(tangon)(entity);
                    entity = 'single';
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                sizing = {};
                golfie = _closure1_slot0;
                oscard = _closure1_slot2;
                output = oscard[yankee];
                output = golfie.bind(foxtra)(output);
                output = output.runOnJS;
                sizing['runOnJS'] = output;
                sizing['handleEvent'] = offset;
                michal['__closure'] = sizing;
                sizing = 14109132753191.0;
                michal['__workletHash'] = sizing;
                sizing = _closure1_slot6;
                michal['__initData'] = sizing;
                michal = backup.bind(kiloes)(michal);
                oscard = oscard[verify];
                oscard = golfie.bind(foxtra)(oscard);
                golfie = oscard.Gesture;
                oscard = golfie.LongPress;
                verify = oscard.bind(golfie)();
                golfie = verify.enabled;
                oscard = _closure2_slot6;
                if(!oscard) { _fun00002_ip = 452; continue _fun00001 }
 448:
                oscard = _closure2_slot5;
 452:
                golfie = golfie.bind(verify)(oscard);
                oscard = golfie.onStart;
                entity = function() { // Original name: n
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot2;
                    michal = 3;
                    report = tangon[michal];
                    entity = undefined;
                    option = zuuluu.bind(entity)(report);
                    golfie = option.runOnJS;
                    report = 4;
                    oscard = tangon[report];
                    oscard = zuuluu.bind(entity)(oscard);
                    oscard = oscard.triggerHapticFeedback;
                    oscard = golfie.bind(option)(oscard);
                    report = tangon[report];
                    report = zuuluu.bind(entity)(report);
                    report = report.HapticFeedbackTypes;
                    report = report.IMPACT_MEDIUM;
                    report = oscard.bind(entity)(report);
                    michal = tangon[michal];
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.runOnJS;
                    michal = _closure3_slot0;
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = 'long';
                    michal = zuuluu.bind(entity)(michal);
                    return entity;
                };
                verify = {};
                romeon = _closure1_slot0;
                backup = _closure1_slot2;
                yankee = backup[yankee];
                yankee = romeon.bind(foxtra)(yankee);
                yankee = yankee.runOnJS;
                verify['runOnJS'] = yankee;
                yankee = 4;
                kiloes = backup[yankee];
                kiloes = romeon.bind(foxtra)(kiloes);
                kiloes = kiloes.triggerHapticFeedback;
                verify['triggerHapticFeedback'] = kiloes;
                yankee = backup[yankee];
                yankee = romeon.bind(foxtra)(yankee);
                yankee = yankee.HapticFeedbackTypes;
                verify['HapticFeedbackTypes'] = yankee;
                verify['handleEvent'] = offset;
                entity['__closure'] = verify;
                verify = 1947700378974.0;
                entity['__workletHash'] = verify;
                option = _closure1_slot7;
                entity['__initData'] = option;
                entity = oscard.bind(golfie)(entity);
                entity = tangon.bind(report)(zuuluu, michal, entity);
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();