// app/modules/main_tabs_v2/native/panels/useMainTabsPanelsGesture.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
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
        tangon = 1;
        tangon = oscard[tangon];
        tangon = report.bind(entity)(tangon);
        tangon = tangon.useWindowDimensions;
        var _closure1_slot4 = tangon;
        tangon = 2;
        tangon = oscard[tangon];
        tangon = report.bind(entity)(tangon);
        tangon = tangon.LaunchPadTypes;
        var _closure1_slot5 = tangon;
        tangon = 3;
        tangon = oscard[tangon];
        golfie = report.bind(entity)(tangon);
        tangon = golfie.isAndroid;
        tangon = tangon.bind(golfie)();
        var _closure1_slot6 = tangon;
        golfie = 4;
        golfie = oscard[golfie];
        golfie = report.bind(entity)(golfie);
        if(tangon) { _fun00002_ip = 170; continue _fun00001 }
 162:
        tangon = golfie.DEFAULT_PANELS_ANIMATION_CONFIG;
        _fun00002_ip = 176; continue _fun00001;
 170:
        tangon = golfie.ANDROID_PANELS_ANIMATION_CONFIG;
 176:
        var _closure1_slot7 = tangon;
        tangon = {};
        golfie = "function useMainTabsPanelsGestureTsx1(width){const{isDragging,translateX,IS_ANDROID,withTiming,timingInstant}=this.__closure;if(isDragging.get())return;if(translateX.get()===0)return;translateX.set(IS_ANDROID?withTiming(width,timingInstant,'animate-always'):width);}";
        tangon['code'] = golfie;
        var _closure1_slot8 = tangon;
        tangon = {};
        golfie = "function useMainTabsPanelsGestureTsx2(show,isFling,velocity,force){const{translateX,width,onVisibilityChange,runOnJS,panelsConfig,isTimingConfig,withTiming,withSpring}=this.__closure;if(!force&&translateX.get()!==0&&translateX.get()!==width){return false;}const targetTranslationX=show?0:width;if(translateX.get()===targetTranslationX){if(onVisibilityChange!=null){runOnJS(onVisibilityChange)(show);}return false;}const animationConfig=show?isFling?panelsConfig.swipeSidePanelOpen:panelsConfig.nonSwipeSidePanelOpen:isFling?panelsConfig.swipeSidePanelClose:panelsConfig.nonSwipeSidePanelClose;function handleAnimationFinish(finished){'worklet';if(!finished)return;if(onVisibilityChange!=null){runOnJS(onVisibilityChange)(show);}}translateX.set(isTimingConfig(animationConfig)?withTiming(targetTranslationX,animationConfig,'respect-motion-settings',handleAnimationFinish):withSpring(targetTranslationX,{...animationConfig,velocity:velocity},'respect-motion-settings',handleAnimationFinish));return true;}";
        tangon['code'] = golfie;
        var _closure1_slot9 = tangon;
        tangon = {};
        golfie = 'function handleAnimationFinish_useMainTabsPanelsGestureTsx3(finished){const{onVisibilityChange,runOnJS,show}=this.__closure;if(!finished)return;if(onVisibilityChange!=null){runOnJS(onVisibilityChange)(show);}}';
        tangon['code'] = golfie;
        var _closure1_slot10 = tangon;
        tangon = {};
        golfie = 'function useMainTabsPanelsGestureTsx4(event,manager){const{startPosition}=this.__closure;const touch=event.allTouches[0];startPosition.set({x:touch.x,y:touch.y});manager.begin();}';
        tangon['code'] = golfie;
        var _closure1_slot11 = tangon;
        tangon = {};
        golfie = 'function useMainTabsPanelsGestureTsx5(event,manager){const{State,startPosition,GESTURE_MIN_DISTANCE,disallowGesture,translateX,cancelOnSwipeRightFromStart,width,launchPadType,LaunchPadTypes,windowWidth,LAUNCHPAD_GESTURE_INSET}=this.__closure;if(event.state!==State.BEGAN)return;const touch=event.allTouches[0];const xDiff=touch.x-startPosition.get().x;const xDiffAbs=Math.abs(xDiff);if(xDiffAbs<=GESTURE_MIN_DISTANCE)return;if(disallowGesture.get()){return;}const yDiffAbs=Math.abs(touch.y-startPosition.get().y);if(xDiffAbs<=yDiffAbs||xDiffAbs*xDiffAbs+yDiffAbs*yDiffAbs<GESTURE_MIN_DISTANCE*GESTURE_MIN_DISTANCE){return;}if(xDiff<=0){if(translateX.get()===0){manager.fail();return;}}else{if(cancelOnSwipeRightFromStart===true&&translateX.get()>=width){manager.fail();return;}}const isGestureBasedLaunchPad=launchPadType===LaunchPadTypes.GESTURE_EDGE||launchPadType===LaunchPadTypes.GESTURE_FULL;if(isGestureBasedLaunchPad&&xDiff<0){const launchpadGestureEdge=windowWidth-LAUNCHPAD_GESTURE_INSET;if(launchPadType===LaunchPadTypes.GESTURE_FULL&&startPosition.get().x<launchpadGestureEdge||launchPadType===LaunchPadTypes.GESTURE_EDGE&&startPosition.get().x>=launchpadGestureEdge){manager.fail();return;}}manager.activate();}';
        tangon['code'] = golfie;
        var _closure1_slot12 = tangon;
        tangon = {};
        golfie = 'function useMainTabsPanelsGestureTsx6(){const{isDragging,runOnJS,setIsDraggingRef,onDragStart}=this.__closure;isDragging.set(true);runOnJS(setIsDraggingRef)(true);if(onDragStart!=null){runOnJS(onDragStart)();}}';
        tangon['code'] = golfie;
        var _closure1_slot13 = tangon;
        tangon = {};
        golfie = 'function useMainTabsPanelsGestureTsx7(e){const{disallowGesture,translateX,width}=this.__closure;if(disallowGesture.get()){const currentTranslateX=translateX.get();if(currentTranslateX===0||currentTranslateX===width){return;}translateX.set(0);return;}translateX.set(Math.max(0,Math.min(width,translateX.get()+e.changeX)));}';
        tangon['code'] = golfie;
        var _closure1_slot14 = tangon;
        tangon = {};
        golfie = 'function useMainTabsPanelsGestureTsx8(e){const{isDragging,disallowGesture,runOnJS,setIsDraggingRef,panelsConfig,movePanel,translateX,width}=this.__closure;try{if(!isDragging.get()||disallowGesture.get()){return;}}finally{isDragging.set(false);runOnJS(setIsDraggingRef)(false);}if(Math.abs(e.velocityX)>panelsConfig.minFlingVelocityX){movePanel(e.velocityX<0,true,e.velocityX,true);}else{movePanel(translateX.get()<width/2,false,e.velocityX,true);}}';
        tangon['code'] = golfie;
        var _closure1_slot15 = tangon;
        tangon = 13;
        tangon = oscard[tangon];
        oscard = report.bind(entity)(tangon);
        report = oscard.fileFinishedImporting;
        tangon = 'modules/main_tabs_v2/native/panels/useMainTabsPanelsGesture.tsx';
        tangon = report.bind(oscard)(tangon);
        michal = function(argFoo) { // Original name: useMainTabsPanelsGesture
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                entity = argFoo;
                result = entity.canDrag;
                var _closure2_slot0 = result;
                vacuum = entity.onVisibilityChange;
                var _closure2_slot1 = vacuum;
                echoed = entity.onDragStart;
                var _closure2_slot2 = echoed;
                oscard = entity.startShown;
                michal = entity.openWidth;
                kiloes = entity.cancelOnSwipeRightFromStart;
                var _closure2_slot3 = kiloes;
                romeon = undefined;
                var _closure2_slot7 = romeon;
                var _closure2_slot8 = romeon;
                var _closure2_slot9 = romeon;
                var _closure2_slot10 = romeon;
                var _closure2_slot11 = romeon;
                var _closure2_slot12 = romeon;
                var _closure2_slot13 = romeon;
                var _closure2_slot14 = romeon;
                var _closure2_slot15 = romeon;
                var _closure2_slot16 = romeon;
                tangon = _closure1_slot1;
                report = _closure1_slot2;
                zuuluu = 5;
                zuuluu = report[zuuluu];
                zuuluu = tangon.bind(romeon)(zuuluu);
                sizing = zuuluu.bind(romeon)();
                var _closure2_slot4 = sizing;
                zuuluu = 6;
                zuuluu = report[zuuluu];
                zuuluu = tangon.bind(romeon)(zuuluu);
                source = zuuluu.bind(romeon)();
                var _closure2_slot5 = source;
                zuuluu = _closure1_slot4;
                zuuluu = zuuluu.bind(romeon)();
                update = zuuluu.width;
                var _closure2_slot6 = update;
                tangon = null;
                zuuluu = update;
                if(!(tangon != michal)) { _fun00004_ip = 179; continue _fun00003 }
 176:
                zuuluu = michal;
 179:
                _closure2_slot7 = zuuluu;
                tangon = _closure1_slot0;
                michal = _closure1_slot2;
                option = 7;
                michal = michal[option];
                report = tangon.bind(romeon)(michal);
                tangon = report.useSharedValue;
                michal = 0;
                if(oscard) { _fun00004_ip = 216; continue _fun00003 }
 213:
                michal = zuuluu;
 216:
                report = tangon.bind(report)(michal);
                _closure2_slot8 = report;
                verify = _closure1_slot0;
                foxtra = _closure1_slot2;
                michal = foxtra[option];
                tangon = verify.bind(romeon)(michal);
                michal = tangon.useSharedValue;
                output = false;
                oscard = michal.bind(tangon)(output);
                _closure2_slot9 = oscard;
                offset = _closure1_slot3;
                michal = offset.useRef;
                michal = michal.bind(offset)(output);
                _closure2_slot10 = michal;
                backup = offset.useCallback;
                yankee = new Array(1);
                yankee[0] = michal;
                tangon = function(argFoo) {
                    michal = _closure2_slot10;
                    entity = argFoo;
                    michal['current'] = entity;
                    entity = undefined;
                    return entity;
                };
                backup = backup.bind(offset)(tangon, yankee);
                _closure2_slot11 = backup;
                tangon = foxtra[option];
                yankee = verify.bind(romeon)(tangon);
                tangon = yankee.useSharedValue;
                yankee = tangon.bind(yankee)(output);
                _closure2_slot12 = yankee;
                ctrled = offset.useEffect;
                output = new Array(3);
                output[0] = oscard;
                output[1] = report;
                output[2] = zuuluu;
                tangon = function() {
                    verify = _closure1_slot0;
                    offset = _closure1_slot2;
                    entity = 7;
                    michal = offset[entity];
                    entity = undefined;
                    report = verify.bind(entity)(michal);
                    tangon = report.runOnUI;
                    zuuluu = function(argFoo) { // Original name: e
                        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                            option = argFoo;
                            zuuluu = _closure2_slot9;
                            michal = zuuluu.get;
                            michal = michal.bind(zuuluu)();
                            if(michal) { _fun00006_ip = 126; continue _fun00005 }
 22:
                            zuuluu = _closure2_slot8;
                            michal = zuuluu.get;
                            zuuluu = michal.bind(zuuluu)();
                            michal = 0;
                            if(!(michal !== zuuluu)) { _fun00006_ip = 126; continue _fun00005 }
 41:
                            zuuluu = _closure2_slot8;
                            michal = zuuluu.set;
                            report = _closure1_slot6;
                            entity = option;
                            if(!report) { _fun00006_ip = 121; continue _fun00005 }
 63:
                            verify = _closure1_slot0;
                            offset = _closure1_slot2;
                            tangon = 8;
                            tangon = offset[tangon];
                            report = undefined;
                            golfie = verify.bind(report)(tangon);
                            oscard = golfie.withTiming;
                            tangon = 9;
                            tangon = offset[tangon];
                            tangon = verify.bind(report)(tangon);
                            report = tangon.timingInstant;
                            tangon = 'animate-always';
                            entity = oscard.bind(golfie)(option, report, tangon);
 121:
                            entity = michal.bind(zuuluu)(entity);
 126:
                            entity = undefined;
                            return entity;
                        }
                    };
                    golfie = {};
                    option = _closure2_slot9;
                    golfie['isDragging'] = option;
                    option = _closure2_slot8;
                    golfie['translateX'] = option;
                    option = _closure1_slot6;
                    golfie['IS_ANDROID'] = option;
                    option = 8;
                    option = offset[option];
                    option = verify.bind(entity)(option);
                    option = option.withTiming;
                    golfie['withTiming'] = option;
                    option = 9;
                    option = offset[option];
                    option = verify.bind(entity)(option);
                    option = option.timingInstant;
                    golfie['timingInstant'] = option;
                    zuuluu['__closure'] = golfie;
                    golfie = 16976202846494.0;
                    zuuluu['__workletHash'] = golfie;
                    oscard = _closure1_slot8;
                    zuuluu['__initData'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
                    michal = _closure2_slot7;
                    michal = zuuluu.bind(entity)(michal);
                    return entity;
                };
                tangon = ctrled.bind(offset)(tangon, output);
                ctrled = offset.useCallback;
                output = function(argFoo, argBar, argBaz, argCor) { // Original name: R
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        zuuluu = argFoo;
                        tangon = argBar;
                        var _closure3_slot0 = zuuluu;
                        entity = argCor;
                        if(entity) { _fun00008_ip = 65; continue _fun00007 }
 18:
                        oscard = _closure2_slot8;
                        report = oscard.get;
                        oscard = report.bind(oscard)();
                        report = 0;
                        if(!(report !== oscard)) { _fun00008_ip = 65; continue _fun00007 }
 40:
                        oscard = _closure2_slot8;
                        report = oscard.get;
                        report = report.bind(oscard)();
                        entity = _closure2_slot7;
                        if(!(report !== entity)) { _fun00008_ip = 65; continue _fun00007 }
 61:
                        entity = false;
                        return entity;
 65:
                        yankee = 0;
                        if(zuuluu) { _fun00008_ip = 77; continue _fun00007 }
 70:
                        yankee = _closure2_slot7;
 77:
                        oscard = _closure2_slot8;
                        report = oscard.get;
                        report = report.bind(oscard)();
                        if(!(report !== yankee)) { _fun00008_ip = 329; continue _fun00007 }
 100:
                        report = _closure1_slot7;
                        if(zuuluu) { _fun00008_ip = 129; continue _fun00007 }
 110:
                        if(tangon) { _fun00008_ip = 121; continue _fun00007 }
 113:
                        oscard = report.nonSwipeSidePanelClose;
                        _fun00008_ip = 127; continue _fun00007;
 121:
                        oscard = report.swipeSidePanelClose;
 127:
                        _fun00008_ip = 149; continue _fun00007;
 129:
                        if(tangon) { _fun00008_ip = 140; continue _fun00007 }
 132:
                        tangon = report.nonSwipeSidePanelOpen;
                        _fun00008_ip = 146; continue _fun00007;
 140:
                        tangon = report.swipeSidePanelOpen;
 146:
                        oscard = tangon;
 149:
                        michal = function() {
                            entity = function(argFoo) { // Original name: handleAnimationFinish
                                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                                    entity = argFoo;
                                    if(!entity) { _fun00010_ip = 19; continue _fun00009 }
 6:
                                    zuuluu = _closure2_slot1;
                                    michal = null;
                                    entity = michal != zuuluu;
 19:
                                    if(!entity) { _fun00010_ip = 76; continue _fun00009 }
 22:
                                    michal = _closure1_slot0;
                                    zuuluu = _closure1_slot2;
                                    entity = 7;
                                    entity = zuuluu[entity];
                                    zuuluu = undefined;
                                    tangon = michal.bind(zuuluu)(entity);
                                    michal = tangon.runOnJS;
                                    entity = _closure2_slot1;
                                    michal = michal.bind(tangon)(entity);
                                    entity = _closure3_slot0;
                                    entity = michal.bind(zuuluu)(entity);
 76:
                                    entity = undefined;
                                    return entity;
                                }
                            };
                            zuuluu = {};
                            michal = _closure2_slot1;
                            zuuluu['onVisibilityChange'] = michal;
                            oscard = _closure1_slot0;
                            report = _closure1_slot2;
                            tangon = 7;
                            report = report[tangon];
                            tangon = undefined;
                            tangon = oscard.bind(tangon)(report);
                            tangon = tangon.runOnJS;
                            zuuluu['runOnJS'] = tangon;
                            tangon = _closure3_slot0;
                            zuuluu['show'] = tangon;
                            entity['__closure'] = zuuluu;
                            zuuluu = 1018878139815.0;
                            entity['__workletHash'] = zuuluu;
                            michal = _closure1_slot10;
                            entity['__initData'] = michal;
                            return entity;
                        };
                        option = undefined;
                        offset = michal.bind(option)();
                        report = _closure2_slot8;
                        tangon = report.set;
                        golfie = _closure1_slot0;
                        romeon = _closure1_slot2;
                        michal = 4;
                        michal = romeon[michal];
                        golfie = golfie.bind(option)(michal);
                        michal = golfie.isTimingConfig;
                        michal = michal.bind(golfie)(oscard);
                        golfie = _closure1_slot0;
                        romeon = _closure1_slot2;
                        verify = oscard;
                        if(michal) { _fun00008_ip = 281; continue _fun00007 }
 216:
                        michal = 10;
                        michal = romeon[michal];
                        backup = golfie.bind(option)(michal);
                        foxtra = backup.withSpring;
                        oscard = {};
                        echoed = oscard;
                        result = verify;
                        michal = copyDataProperties(echoed, result);
                        kiloes = argBaz;
                        michal = 'velocity';
                        oscard[michal] = kiloes;
                        output = 'respect-motion-settings';
                        update = backup;
                        echoed = yankee;
                        result = oscard;
                        sizing = offset;
                        michal = update[foxtra](echoed, result, output, sizing, kiloes);
                        _fun00008_ip = 320; continue _fun00007;
 281:
                        oscard = 8;
                        oscard = romeon[oscard];
                        option = golfie.bind(option)(oscard);
                        golfie = option.withTiming;
                        output = 'respect-motion-settings';
                        update = option;
                        echoed = yankee;
                        result = verify;
                        sizing = offset;
                        michal = update[golfie](echoed, result, output, sizing, kiloes);
 320:
                        michal = tangon.bind(report)(michal);
                        michal = true;
                        return michal;
 329:
                        tangon = _closure2_slot1;
                        michal = null;
                        if(!(michal != tangon)) { _fun00008_ip = 383; continue _fun00007 }
 339:
                        report = _closure1_slot0;
                        tangon = _closure1_slot2;
                        michal = 7;
                        tangon = tangon[michal];
                        michal = undefined;
                        report = report.bind(michal)(tangon);
                        tangon = report.runOnJS;
                        entity = _closure2_slot1;
                        entity = tangon.bind(report)(entity);
                        entity = entity.bind(michal)(zuuluu);
 383:
                        entity = false;
                        return entity;
                    }
                };
                tangon = {};
                tangon['translateX'] = report;
                tangon['width'] = zuuluu;
                tangon['onVisibilityChange'] = vacuum;
                sequen = foxtra[option];
                sequen = verify.bind(romeon)(sequen);
                sequen = sequen.runOnJS;
                tangon['runOnJS'] = sequen;
                sequen = _closure1_slot7;
                tangon['panelsConfig'] = sequen;
                sequen = 4;
                sequen = foxtra[sequen];
                sequen = verify.bind(romeon)(sequen);
                sequen = sequen.isTimingConfig;
                tangon['isTimingConfig'] = sequen;
                sequen = 8;
                sequen = foxtra[sequen];
                sequen = verify.bind(romeon)(sequen);
                sequen = sequen.withTiming;
                tangon['withTiming'] = sequen;
                sequen = 10;
                sequen = foxtra[sequen];
                sequen = verify.bind(romeon)(sequen);
                sequen = sequen.withSpring;
                tangon['withSpring'] = sequen;
                output['__closure'] = tangon;
                tangon = 8550775448739.0;
                output['__workletHash'] = tangon;
                tangon = _closure1_slot9;
                output['__initData'] = tangon;
                tangon = new Array(3);
                tangon[0] = vacuum;
                tangon[1] = report;
                tangon[2] = zuuluu;
                tangon = ctrled.bind(offset)(output, tangon);
                _closure2_slot13 = tangon;
                option = foxtra[option];
                output = verify.bind(romeon)(option);
                verify = output.useSharedValue;
                option = {'x': 0, 'y': 0};
                output = verify.bind(output)(option);
                _closure2_slot14 = output;
                option = offset.useContext;
                verify = _closure1_slot1;
                entity = 11;
                entity = foxtra[entity];
                entity = verify.bind(romeon)(entity);
                option = option.bind(offset)(entity);
                _closure2_slot15 = option;
                entity = offset.useRef;
                romeon = entity.bind(offset)();
                _closure2_slot16 = romeon;
                entity = {};
                foxtra = offset.useMemo;
                verify = new Array(14);
                verify[0] = source;
                verify[1] = report;
                verify[2] = zuuluu;
                verify[3] = update;
                verify[4] = oscard;
                verify[5] = tangon;
                verify[6] = echoed;
                verify[7] = result;
                verify[8] = output;
                verify[9] = sizing;
                verify[10] = kiloes;
                verify[11] = yankee;
                verify[12] = backup;
                verify[13] = option;
                option = function() {
                    verify = _closure1_slot0;
                    offset = _closure1_slot2;
                    yankee = 12;
                    michal = offset[yankee];
                    option = undefined;
                    michal = verify.bind(option)(michal);
                    zuuluu = michal.Gesture;
                    michal = zuuluu.Pan;
                    report = michal.bind(zuuluu)();
                    zuuluu = report.enabled;
                    michal = _closure2_slot0;
                    report = zuuluu.bind(report)(michal);
                    zuuluu = report.withRef;
                    michal = _closure2_slot16;
                    report = zuuluu.bind(report)(michal);
                    zuuluu = report.requireExternalGestureToFail;
                    michal = _closure2_slot15;
                    report = zuuluu.bind(report)(michal);
                    zuuluu = report.manualActivation;
                    michal = 3;
                    michal = offset[michal];
                    golfie = verify.bind(option)(michal);
                    michal = golfie.isAndroid;
                    michal = michal.bind(golfie)();
                    report = zuuluu.bind(report)(michal);
                    zuuluu = report.hitSlop;
                    michal = {};
                    golfie = _closure2_slot5;
                    romeon = golfie.top;
                    romeon = -romeon;
                    michal['top'] = romeon;
                    romeon = golfie.left;
                    romeon = -romeon;
                    michal['left'] = romeon;
                    romeon = golfie.bottom;
                    romeon = -romeon;
                    michal['bottom'] = romeon;
                    golfie = golfie.right;
                    golfie = -golfie;
                    michal['right'] = golfie;
                    report = zuuluu.bind(report)(michal);
                    zuuluu = report.onTouchesDown;
                    michal = function(argFoo, argBar) { // Original name: u
                        michal = argBar;
                        entity = argFoo;
                        zuuluu = entity.allTouches;
                        entity = 0;
                        report = zuuluu[entity];
                        tangon = _closure2_slot14;
                        zuuluu = tangon.set;
                        entity = {};
                        oscard = report.x;
                        entity['x'] = oscard;
                        report = report.y;
                        entity['y'] = report;
                        entity = zuuluu.bind(tangon)(entity);
                        entity = michal.begin;
                        entity = entity.bind(michal)();
                        entity = undefined;
                        return entity;
                    };
                    golfie = {};
                    romeon = _closure2_slot14;
                    golfie['startPosition'] = romeon;
                    michal['__closure'] = golfie;
                    golfie = 703073821620.0;
                    michal['__workletHash'] = golfie;
                    golfie = _closure1_slot11;
                    michal['__initData'] = golfie;
                    report = zuuluu.bind(report)(michal);
                    zuuluu = report.onTouchesMove;
                    michal = function(argFoo, argBar) { // Original name: l
                        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                            michal = argFoo;
                            zuuluu = argBar;
                            oscard = michal.state;
                            golfie = _closure1_slot0;
                            entity = _closure1_slot2;
                            offset = 12;
                            tangon = entity[offset];
                            entity = undefined;
                            tangon = golfie.bind(entity)(tangon);
                            tangon = tangon.State;
                            tangon = tangon.BEGAN;
                            if(!(oscard === tangon)) { _fun00012_ip = 455; continue _fun00011 }
 55:
                            michal = michal.allTouches;
                            oscard = 0;
                            golfie = michal[oscard];
                            option = golfie.x;
                            verify = _closure2_slot14;
                            tangon = verify.get;
                            tangon = tangon.bind(verify)();
                            tangon = tangon.x;
                            tangon = option - tangon;
                            verify = global;
                            yankee = verify.Math;
                            option = yankee.abs;
                            option = option.bind(yankee)(tangon);
                            if(!(!(option <= offset))) { _fun00012_ip = 455; continue _fun00011 }
 123:
                            yankee = _closure2_slot12;
                            offset = yankee.get;
                            offset = offset.bind(yankee)();
                            if(offset) { _fun00012_ip = 455; continue _fun00011 }
 142:
                            offset = verify.Math;
                            verify = offset.abs;
                            yankee = golfie.y;
                            romeon = _closure2_slot14;
                            golfie = romeon.get;
                            golfie = golfie.bind(romeon)();
                            golfie = golfie.y;
                            golfie = yankee - golfie;
                            golfie = verify.bind(offset)(golfie);
                            if(!(!(option <= golfie))) { _fun00012_ip = 455; continue _fun00011 }
 193:
                            option = option * option;
                            golfie = golfie * golfie;
                            option = option + golfie;
                            golfie = 144;
                            if(!(!(option < golfie))) { _fun00012_ip = 455; continue _fun00011 }
 215:
                            if(!(!(tangon <= oscard))) { _fun00012_ip = 264; continue _fun00011 }
 219:
                            option = _closure2_slot3;
                            golfie = true;
                            if(!(golfie === option)) { _fun00012_ip = 284; continue _fun00011 }
 229:
                            option = _closure2_slot8;
                            golfie = option.get;
                            option = golfie.bind(option)();
                            golfie = _closure2_slot7;
                            if(!(option >= golfie)) { _fun00012_ip = 284; continue _fun00011 }
 250:
                            golfie = zuuluu.fail;
                            golfie = golfie.bind(zuuluu)();
                            golfie = undefined;
                            return golfie;
 264:
                            option = _closure2_slot8;
                            golfie = option.get;
                            golfie = golfie.bind(option)();
                            if(!(oscard !== golfie)) { _fun00012_ip = 441; continue _fun00011 }
 284:
                            option = _closure2_slot4;
                            golfie = _closure1_slot5;
                            golfie = golfie.GESTURE_EDGE;
                            if(!(option !== golfie)) { _fun00012_ip = 320; continue _fun00011 }
 302:
                            option = _closure2_slot4;
                            golfie = _closure1_slot5;
                            golfie = golfie.GESTURE_FULL;
                            if(!(option === golfie)) { _fun00012_ip = 415; continue _fun00011 }
 320:
                            if(!(tangon < oscard)) { _fun00012_ip = 415; continue _fun00011 }
 324:
                            oscard = _closure2_slot6;
                            tangon = 48;
                            tangon = oscard - tangon;
                            golfie = _closure2_slot4;
                            oscard = _closure1_slot5;
                            oscard = oscard.GESTURE_FULL;
                            if(!(golfie === oscard)) { _fun00012_ip = 375; continue _fun00011 }
 353:
                            golfie = _closure2_slot14;
                            oscard = golfie.get;
                            oscard = oscard.bind(golfie)();
                            oscard = oscard.x;
                            if(!(!(oscard < tangon))) { _fun00012_ip = 427; continue _fun00011 }
 375:
                            oscard = _closure2_slot4;
                            report = _closure1_slot5;
                            report = report.GESTURE_EDGE;
                            if(!(oscard === report)) { _fun00012_ip = 415; continue _fun00011 }
 393:
                            report = _closure2_slot14;
                            michal = report.get;
                            michal = michal.bind(report)();
                            michal = michal.x;
                            if(!(!(michal >= tangon))) { _fun00012_ip = 427; continue _fun00011 }
 415:
                            michal = zuuluu.activate;
                            michal = michal.bind(zuuluu)();
                            _fun00012_ip = 455; continue _fun00011;
 427:
                            michal = zuuluu.fail;
                            michal = michal.bind(zuuluu)();
                            michal = undefined;
                            return michal;
 441:
                            michal = zuuluu.fail;
                            michal = michal.bind(zuuluu)();
                            michal = undefined;
                            return michal;
 455:
                            return entity;
                        }
                    };
                    golfie = {};
                    romeon = offset[yankee];
                    romeon = verify.bind(option)(romeon);
                    romeon = romeon.State;
                    golfie['State'] = romeon;
                    romeon = _closure2_slot14;
                    golfie['startPosition'] = romeon;
                    golfie['GESTURE_MIN_DISTANCE'] = yankee;
                    yankee = _closure2_slot12;
                    golfie['disallowGesture'] = yankee;
                    yankee = _closure2_slot8;
                    golfie['translateX'] = yankee;
                    yankee = _closure2_slot3;
                    golfie['cancelOnSwipeRightFromStart'] = yankee;
                    yankee = _closure2_slot7;
                    golfie['width'] = yankee;
                    yankee = _closure2_slot4;
                    golfie['launchPadType'] = yankee;
                    yankee = _closure1_slot5;
                    golfie['LaunchPadTypes'] = yankee;
                    yankee = _closure2_slot6;
                    golfie['windowWidth'] = yankee;
                    yankee = 48;
                    golfie['LAUNCHPAD_GESTURE_INSET'] = yankee;
                    michal['__closure'] = golfie;
                    golfie = 13298879871895.0;
                    michal['__workletHash'] = golfie;
                    golfie = _closure1_slot12;
                    michal['__initData'] = golfie;
                    report = zuuluu.bind(report)(michal);
                    zuuluu = report.onStart;
                    michal = function() { // Original name: s
                        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                            zuuluu = _closure2_slot9;
                            entity = zuuluu.set;
                            oscard = true;
                            entity = entity.bind(zuuluu)(oscard);
                            golfie = _closure1_slot0;
                            entity = _closure1_slot2;
                            report = 7;
                            tangon = entity[report];
                            entity = undefined;
                            option = golfie.bind(entity)(tangon);
                            golfie = option.runOnJS;
                            tangon = _closure2_slot11;
                            tangon = golfie.bind(option)(tangon);
                            tangon = tangon.bind(entity)(oscard);
                            oscard = _closure2_slot2;
                            tangon = null;
                            if(!(tangon != oscard)) { _fun00014_ip = 108; continue _fun00013 }
 73:
                            tangon = _closure1_slot0;
                            zuuluu = _closure1_slot2;
                            zuuluu = zuuluu[report];
                            tangon = tangon.bind(entity)(zuuluu);
                            zuuluu = tangon.runOnJS;
                            michal = _closure2_slot2;
                            michal = zuuluu.bind(tangon)(michal);
                            michal = michal.bind(entity)();
 108:
                            return entity;
                        }
                    };
                    yankee = {};
                    golfie = _closure2_slot9;
                    yankee['isDragging'] = golfie;
                    golfie = 7;
                    romeon = offset[golfie];
                    romeon = verify.bind(option)(romeon);
                    romeon = romeon.runOnJS;
                    yankee['runOnJS'] = romeon;
                    romeon = _closure2_slot11;
                    yankee['setIsDraggingRef'] = romeon;
                    romeon = _closure2_slot2;
                    yankee['onDragStart'] = romeon;
                    michal['__closure'] = yankee;
                    yankee = 6259908247884.0;
                    michal['__workletHash'] = yankee;
                    yankee = _closure1_slot13;
                    michal['__initData'] = yankee;
                    report = zuuluu.bind(report)(michal);
                    zuuluu = report.onChange;
                    michal = function(argFoo) { // Original name: t
                        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                            zuuluu = _closure2_slot12;
                            michal = zuuluu.get;
                            michal = michal.bind(zuuluu)();
                            zuuluu = _closure2_slot8;
                            if(michal) { _fun00016_ip = 103; continue _fun00015 }
 23:
                            tangon = zuuluu.set;
                            michal = global;
                            golfie = michal.Math;
                            oscard = golfie.max;
                            verify = michal.Math;
                            option = verify.min;
                            report = _closure2_slot7;
                            offset = _closure2_slot8;
                            michal = offset.get;
                            offset = michal.bind(offset)();
                            michal = argFoo;
                            michal = michal.changeX;
                            michal = offset + michal;
                            report = option.bind(verify)(report, michal);
                            michal = 0;
                            michal = oscard.bind(golfie)(michal, report);
                            michal = tangon.bind(zuuluu)(michal);
                            _fun00016_ip = 140; continue _fun00015;
 103:
                            michal = zuuluu.get;
                            tangon = michal.bind(zuuluu)();
                            zuuluu = 0;
                            if(!(zuuluu !== tangon)) { _fun00016_ip = 144; continue _fun00015 }
 118:
                            michal = _closure2_slot7;
                            if(!(tangon !== michal)) { _fun00016_ip = 144; continue _fun00015 }
 126:
                            michal = _closure2_slot8;
                            entity = michal.set;
                            entity = entity.bind(michal)(zuuluu);
 140:
                            entity = undefined;
                            return entity;
 144:
                            entity = undefined;
                            return entity;
                        }
                    };
                    yankee = {};
                    romeon = _closure2_slot12;
                    yankee['disallowGesture'] = romeon;
                    romeon = _closure2_slot8;
                    yankee['translateX'] = romeon;
                    romeon = _closure2_slot7;
                    yankee['width'] = romeon;
                    michal['__closure'] = yankee;
                    yankee = 7629437525528.0;
                    michal['__workletHash'] = yankee;
                    yankee = _closure1_slot14;
                    michal['__initData'] = yankee;
                    zuuluu = zuuluu.bind(report)(michal);
                    michal = zuuluu.onFinalize;
                    entity = function(argFoo) { // Original name: e
                        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                            zuuluu = argFoo;
 3: // try_start_0
                            tangon = _closure2_slot9;
                            entity = tangon.get;
                            entity = entity.bind(tangon)();
                            if(!entity) { _fun00018_ip = 233; continue _fun00017 }
 25:
                            tangon = _closure2_slot12;
                            entity = tangon.get;
                            entity = entity.bind(tangon)();
                            if(entity) { _fun00018_ip = 233; continue _fun00017 }
 44: // try_end0
                            tangon = _closure2_slot9;
                            entity = tangon.set;
                            option = false;
                            entity = entity.bind(tangon)(option);
                            oscard = _closure1_slot0;
                            report = _closure1_slot2;
                            entity = 7;
                            report = report[entity];
                            entity = undefined;
                            golfie = oscard.bind(entity)(report);
                            oscard = golfie.runOnJS;
                            report = _closure2_slot11;
                            report = oscard.bind(golfie)(report);
                            report = report.bind(entity)(option);
                            report = global;
                            golfie = report.Math;
                            oscard = golfie.abs;
                            report = zuuluu;
                            report = report.velocityX;
                            report = oscard.bind(golfie)(report);
                            tangon = _closure1_slot7;
                            tangon = tangon.minFlingVelocityX;
                            if(!(!(report > tangon))) { _fun00018_ip = 199; continue _fun00017 }
 146:
                            golfie = _closure2_slot13;
                            report = _closure2_slot8;
                            tangon = report.get;
                            report = tangon.bind(report)();
                            oscard = _closure2_slot7;
                            tangon = 2;
                            tangon = oscard / tangon;
                            romeon = report < tangon;
                            tangon = zuuluu;
                            offset = tangon.velocityX;
                            verify = true;
                            foxtra = undefined;
                            yankee = false;
                            tangon = foxtra[golfie](romeon, yankee, offset, verify, option);
                            _fun00018_ip = 231; continue _fun00017;
 199:
                            oscard = _closure2_slot13;
                            report = zuuluu.velocityX;
                            tangon = 0;
                            romeon = report < tangon;
                            offset = zuuluu.velocityX;
                            foxtra = undefined;
                            yankee = true;
                            verify = true;
                            zuuluu = foxtra[oscard](romeon, yankee, offset, verify, option);
 231:
                            return entity;
 233:
                            tangon = _closure2_slot9;
                            entity = tangon.set;
                            zuuluu = false;
                            entity = entity.bind(tangon)(zuuluu);
                            report = _closure1_slot0;
                            tangon = _closure1_slot2;
                            entity = 7;
                            tangon = tangon[entity];
                            entity = undefined;
                            report = report.bind(entity)(tangon);
                            tangon = report.runOnJS;
                            michal = _closure2_slot11;
                            michal = tangon.bind(report)(michal);
                            michal = michal.bind(entity)(zuuluu);
                            return entity;
 295: // catch_target0
                            CatchBlockStart(arg_register=0);
                            report = _closure2_slot9;
                            zuuluu = report.set;
                            tangon = false;
                            zuuluu = zuuluu.bind(report)(tangon);
                            oscard = _closure1_slot0;
                            report = _closure1_slot2;
                            zuuluu = 7;
                            report = report[zuuluu];
                            zuuluu = undefined;
                            oscard = oscard.bind(zuuluu)(report);
                            report = oscard.runOnJS;
                            michal = _closure2_slot11;
                            michal = report.bind(oscard)(michal);
                            michal = michal.bind(zuuluu)(tangon);
                            throw entity;
                        }
                    };
                    report = {};
                    yankee = _closure2_slot9;
                    report['isDragging'] = yankee;
                    yankee = _closure2_slot12;
                    report['disallowGesture'] = yankee;
                    golfie = offset[golfie];
                    golfie = verify.bind(option)(golfie);
                    golfie = golfie.runOnJS;
                    report['runOnJS'] = golfie;
                    golfie = _closure2_slot11;
                    report['setIsDraggingRef'] = golfie;
                    golfie = _closure1_slot7;
                    report['panelsConfig'] = golfie;
                    golfie = _closure2_slot13;
                    report['movePanel'] = golfie;
                    golfie = _closure2_slot8;
                    report['translateX'] = golfie;
                    oscard = _closure2_slot7;
                    report['width'] = oscard;
                    entity['__closure'] = report;
                    report = 13979977661433.0;
                    entity['__workletHash'] = report;
                    tangon = _closure1_slot15;
                    entity['__initData'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                option = foxtra.bind(offset)(option, verify);
                entity['gesture'] = option;
                verify = offset.useMemo;
                option = new Array(3);
                option[0] = romeon;
                option[1] = yankee;
                option[2] = report;
                golfie = function() {
                    entity = {};
                    zuuluu = _closure2_slot16;
                    entity['gestureRef'] = zuuluu;
                    zuuluu = _closure2_slot12;
                    entity['disallowGesture'] = zuuluu;
                    michal = _closure2_slot8;
                    entity['translateX'] = michal;
                    return entity;
                };
                golfie = verify.bind(offset)(golfie, option);
                entity['panelGestureContext'] = golfie;
                entity['isDragging'] = oscard;
                entity['translateX'] = report;
                entity['movePanel'] = tangon;
                entity['maxWidth'] = zuuluu;
                entity['isDraggingRef'] = michal;
                return entity;
            }
        };
        zuuluu['default'] = michal;
        return entity;
    }
})();