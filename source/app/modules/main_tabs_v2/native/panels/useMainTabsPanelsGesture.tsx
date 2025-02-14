// app/modules/main_tabs_v2/native/panels/useMainTabsPanelsGesture.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    _fun111987: for(var _fun111987_ip = 0; ; ) switch(_fun111987_ip) {
 0:
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
        tango = 1;
        tango = oscar[tango];
        tango = report.bind(entity)(tango);
        tango = tango.useWindowDimensions;
        var _closure1_slot4 = tango;
        tango = 2;
        tango = oscar[tango];
        tango = report.bind(entity)(tango);
        tango = tango.LaunchPadTypes;
        var _closure1_slot5 = tango;
        tango = 3;
        tango = oscar[tango];
        golf = report.bind(entity)(tango);
        tango = golf.isAndroid;
        tango = tango.bind(golf)();
        var _closure1_slot6 = tango;
        golf = 4;
        golf = oscar[golf];
        golf = report.bind(entity)(golf);
        if(tango) { _fun111987_ip = 170; continue _fun111987 }
 162:
        tango = golf.DEFAULT_PANELS_ANIMATION_CONFIG;
        _fun111987_ip = 176; continue _fun111987;
 170:
        tango = golf.ANDROID_PANELS_ANIMATION_CONFIG;
 176:
        var _closure1_slot7 = tango;
        tango = {};
        golf = "function useMainTabsPanelsGestureTsx1(width){const{isDragging,translateX,IS_ANDROID,withTiming,timingInstant}=this.__closure;if(isDragging.get())return;if(translateX.get()===0)return;translateX.set(IS_ANDROID?withTiming(width,timingInstant,'animate-always'):width);}";
        tango['code'] = golf;
        var _closure1_slot8 = tango;
        tango = {};
        golf = "function useMainTabsPanelsGestureTsx2(show,isFling,velocity,force){const{translateX,width,runOnJS,onVisibilityChange,panelsConfig,isTimingConfig,withTiming,withSpring}=this.__closure;if(!force&&translateX.get()!==0&&translateX.get()!==width){return false;}const targetTranslationX=show?0:width;if(translateX.get()===targetTranslationX){runOnJS(onVisibilityChange)(show);return false;}const animationConfig=show?isFling?panelsConfig.swipeSidePanelOpen:panelsConfig.nonSwipeSidePanelOpen:isFling?panelsConfig.swipeSidePanelClose:panelsConfig.nonSwipeSidePanelClose;function handleAnimationFinish(finished){'worklet';if(!finished)return;runOnJS(onVisibilityChange)(show);}translateX.set(isTimingConfig(animationConfig)?withTiming(targetTranslationX,animationConfig,'respect-motion-settings',handleAnimationFinish):withSpring(targetTranslationX,{...animationConfig,velocity:velocity},'respect-motion-settings',handleAnimationFinish));return true;}";
        tango['code'] = golf;
        var _closure1_slot9 = tango;
        tango = {};
        golf = 'function handleAnimationFinish_useMainTabsPanelsGestureTsx3(finished){const{runOnJS,onVisibilityChange,show}=this.__closure;if(!finished)return;runOnJS(onVisibilityChange)(show);}';
        tango['code'] = golf;
        var _closure1_slot10 = tango;
        tango = {};
        golf = 'function useMainTabsPanelsGestureTsx4(event,manager){const{startPosition}=this.__closure;const touch=event.allTouches[0];startPosition.set({x:touch.x,y:touch.y});manager.begin();}';
        tango['code'] = golf;
        var _closure1_slot11 = tango;
        tango = {};
        golf = 'function useMainTabsPanelsGestureTsx5(event,manager){const{State,startPosition,GESTURE_MIN_DISTANCE,disallowGesture,translateX,cancelOnSwipeRightFromStart,launchPadType,LaunchPadTypes,width,LAUNCHPAD_GESTURE_INSET}=this.__closure;if(event.state!==State.BEGAN)return;const touch=event.allTouches[0];const xDiff=touch.x-startPosition.get().x;const xDiffAbs=Math.abs(xDiff);if(xDiffAbs<=GESTURE_MIN_DISTANCE)return;if(disallowGesture.get()){return;}const yDiffAbs=Math.abs(touch.y-startPosition.get().y);if(xDiffAbs<=yDiffAbs||xDiffAbs*xDiffAbs+yDiffAbs*yDiffAbs<GESTURE_MIN_DISTANCE*GESTURE_MIN_DISTANCE){return;}if(xDiff<=0){if(translateX.get()===0){manager.fail();return;}}else{if(cancelOnSwipeRightFromStart===true&&translateX.get()>0){manager.fail();return;}}const isGestureBasedLaunchPad=launchPadType===LaunchPadTypes.GESTURE_EDGE||launchPadType===LaunchPadTypes.GESTURE_FULL;if(isGestureBasedLaunchPad&&xDiff<0){const launchpadGestureEdge=width-LAUNCHPAD_GESTURE_INSET;if(launchPadType===LaunchPadTypes.GESTURE_FULL&&startPosition.get().x<launchpadGestureEdge||launchPadType===LaunchPadTypes.GESTURE_EDGE&&startPosition.get().x>=launchpadGestureEdge){manager.fail();return;}}manager.activate();}';
        tango['code'] = golf;
        var _closure1_slot12 = tango;
        tango = {};
        golf = 'function useMainTabsPanelsGestureTsx6(){const{isDragging,runOnJS,setIsDraggingRef,onDragStart}=this.__closure;isDragging.set(true);runOnJS(setIsDraggingRef)(true);if(onDragStart!=null){runOnJS(onDragStart)();}}';
        tango['code'] = golf;
        var _closure1_slot13 = tango;
        tango = {};
        golf = 'function useMainTabsPanelsGestureTsx7(e){const{disallowGesture,translateX,width}=this.__closure;if(disallowGesture.get()){translateX.set(0);return;}translateX.set(Math.max(0,Math.min(width,translateX.get()+e.changeX)));}';
        tango['code'] = golf;
        var _closure1_slot14 = tango;
        tango = {};
        golf = 'function useMainTabsPanelsGestureTsx8(e){const{isDragging,disallowGesture,runOnJS,setIsDraggingRef,panelsConfig,movePanel,translateX,width}=this.__closure;try{if(!isDragging.get()||disallowGesture.get()){return;}}finally{isDragging.set(false);runOnJS(setIsDraggingRef)(false);}if(Math.abs(e.velocityX)>panelsConfig.minFlingVelocityX){movePanel(e.velocityX<0,true,e.velocityX,true);}else{movePanel(translateX.get()<width/2,false,e.velocityX,true);}}';
        tango['code'] = golf;
        var _closure1_slot15 = tango;
        tango = 13;
        tango = oscar[tango];
        oscar = report.bind(entity)(tango);
        report = oscar.fileFinishedImporting;
        tango = 'modules/main_tabs_v2/native/panels/useMainTabsPanelsGesture.tsx';
        tango = report.bind(oscar)(tango);
        mike = function(argFoo) { // Original name: useMainTabsPanelsGesture
            _fun111988: for(var _fun111988_ip = 0; ; ) switch(_fun111988_ip) {
 0:
                entity = argFoo;
                result = entity.canDrag;
                var _closure2_slot0 = result;
                control = entity.onVisibilityChange;
                var _closure2_slot1 = control;
                echo = entity.onDragStart;
                var _closure2_slot2 = echo;
                oscar = entity.startShown;
                mike = entity.openWidth;
                kilo = entity.cancelOnSwipeRightFromStart;
                var _closure2_slot3 = kilo;
                romeo = undefined;
                var _closure2_slot6 = romeo;
                var _closure2_slot7 = romeo;
                var _closure2_slot8 = romeo;
                var _closure2_slot9 = romeo;
                var _closure2_slot10 = romeo;
                var _closure2_slot11 = romeo;
                var _closure2_slot12 = romeo;
                var _closure2_slot13 = romeo;
                var _closure2_slot14 = romeo;
                var _closure2_slot15 = romeo;
                tango = _closure1_slot1;
                report = _closure1_slot2;
                zulu = 5;
                zulu = report[zulu];
                zulu = tango.bind(romeo)(zulu);
                sizing = zulu.bind(romeo)();
                var _closure2_slot4 = sizing;
                zulu = 6;
                zulu = report[zulu];
                zulu = tango.bind(romeo)(zulu);
                update = zulu.bind(romeo)();
                var _closure2_slot5 = update;
                zulu = _closure1_slot4;
                zulu = zulu.bind(romeo)();
                zulu = zulu.width;
                tango = null;
                if(!(tango != mike)) { _fun111988_ip = 172; continue _fun111988 }
 169:
                zulu = mike;
 172:
                _closure2_slot6 = zulu;
                tango = _closure1_slot0;
                mike = _closure1_slot2;
                options = 7;
                mike = mike[options];
                report = tango.bind(romeo)(mike);
                tango = report.useSharedValue;
                mike = 0;
                if(oscar) { _fun111988_ip = 209; continue _fun111988 }
 206:
                mike = zulu;
 209:
                report = tango.bind(report)(mike);
                _closure2_slot7 = report;
                verify = _closure1_slot0;
                foxtrot = _closure1_slot2;
                mike = foxtrot[options];
                tango = verify.bind(romeo)(mike);
                mike = tango.useSharedValue;
                output = false;
                oscar = mike.bind(tango)(output);
                _closure2_slot8 = oscar;
                offset = _closure1_slot3;
                mike = offset.useRef;
                mike = mike.bind(offset)(output);
                _closure2_slot9 = mike;
                backup = offset.useCallback;
                yankee = new Array(1);
                yankee[0] = mike;
                tango = function(argFoo) {
                    mike = _closure2_slot9;
                    entity = argFoo;
                    mike['current'] = entity;
                    entity = undefined;
                    return entity;
                };
                backup = backup.bind(offset)(tango, yankee);
                _closure2_slot10 = backup;
                tango = foxtrot[options];
                yankee = verify.bind(romeo)(tango);
                tango = yankee.useSharedValue;
                yankee = tango.bind(yankee)(output);
                _closure2_slot11 = yankee;
                source = offset.useEffect;
                output = new Array(3);
                output[0] = oscar;
                output[1] = report;
                output[2] = zulu;
                tango = function() {
                    verify = _closure1_slot0;
                    offset = _closure1_slot2;
                    entity = 7;
                    mike = offset[entity];
                    entity = undefined;
                    report = verify.bind(entity)(mike);
                    tango = report.runOnUI;
                    zulu = function(argFoo) { // Original name: e
                        _fun111991: for(var _fun111991_ip = 0; ; ) switch(_fun111991_ip) {
 0:
                            options = argFoo;
                            zulu = _closure2_slot8;
                            mike = zulu.get;
                            mike = mike.bind(zulu)();
                            if(mike) { _fun111991_ip = 126; continue _fun111991 }
 22:
                            zulu = _closure2_slot7;
                            mike = zulu.get;
                            zulu = mike.bind(zulu)();
                            mike = 0;
                            if(!(mike !== zulu)) { _fun111991_ip = 126; continue _fun111991 }
 41:
                            zulu = _closure2_slot7;
                            mike = zulu.set;
                            report = _closure1_slot6;
                            entity = options;
                            if(!report) { _fun111991_ip = 121; continue _fun111991 }
 63:
                            verify = _closure1_slot0;
                            offset = _closure1_slot2;
                            tango = 8;
                            tango = offset[tango];
                            report = undefined;
                            golf = verify.bind(report)(tango);
                            oscar = golf.withTiming;
                            tango = 9;
                            tango = offset[tango];
                            tango = verify.bind(report)(tango);
                            report = tango.timingInstant;
                            tango = 'animate-always';
                            entity = oscar.bind(golf)(options, report, tango);
 121:
                            entity = mike.bind(zulu)(entity);
 126:
                            entity = undefined;
                            return entity;
                        }
                    };
                    golf = {};
                    options = _closure2_slot8;
                    golf['isDragging'] = options;
                    options = _closure2_slot7;
                    golf['translateX'] = options;
                    options = _closure1_slot6;
                    golf['IS_ANDROID'] = options;
                    options = 8;
                    options = offset[options];
                    options = verify.bind(entity)(options);
                    options = options.withTiming;
                    golf['withTiming'] = options;
                    options = 9;
                    options = offset[options];
                    options = verify.bind(entity)(options);
                    options = options.timingInstant;
                    golf['timingInstant'] = options;
                    zulu['__closure'] = golf;
                    golf = 16976202846494.0;
                    zulu['__workletHash'] = golf;
                    oscar = _closure1_slot8;
                    zulu['__initData'] = oscar;
                    zulu = tango.bind(report)(zulu);
                    mike = _closure2_slot6;
                    mike = zulu.bind(entity)(mike);
                    return entity;
                };
                tango = source.bind(offset)(tango, output);
                source = offset.useCallback;
                output = function(argFoo, argBar, argBaz, argCorge) { // Original name: R
                    _fun111992: for(var _fun111992_ip = 0; ; ) switch(_fun111992_ip) {
 0:
                        zulu = argFoo;
                        tango = argBar;
                        var _closure3_slot0 = zulu;
                        entity = argCorge;
                        if(entity) { _fun111992_ip = 65; continue _fun111992 }
 18:
                        oscar = _closure2_slot7;
                        report = oscar.get;
                        oscar = report.bind(oscar)();
                        report = 0;
                        if(!(report !== oscar)) { _fun111992_ip = 65; continue _fun111992 }
 40:
                        oscar = _closure2_slot7;
                        report = oscar.get;
                        report = report.bind(oscar)();
                        entity = _closure2_slot6;
                        if(!(report !== entity)) { _fun111992_ip = 65; continue _fun111992 }
 61:
                        entity = false;
                        return entity;
 65:
                        yankee = 0;
                        if(zulu) { _fun111992_ip = 77; continue _fun111992 }
 70:
                        yankee = _closure2_slot6;
 77:
                        oscar = _closure2_slot7;
                        report = oscar.get;
                        report = report.bind(oscar)();
                        if(!(report !== yankee)) { _fun111992_ip = 329; continue _fun111992 }
 100:
                        report = _closure1_slot7;
                        if(zulu) { _fun111992_ip = 129; continue _fun111992 }
 110:
                        if(tango) { _fun111992_ip = 121; continue _fun111992 }
 113:
                        oscar = report.nonSwipeSidePanelClose;
                        _fun111992_ip = 127; continue _fun111992;
 121:
                        oscar = report.swipeSidePanelClose;
 127:
                        _fun111992_ip = 149; continue _fun111992;
 129:
                        if(tango) { _fun111992_ip = 140; continue _fun111992 }
 132:
                        tango = report.nonSwipeSidePanelOpen;
                        _fun111992_ip = 146; continue _fun111992;
 140:
                        tango = report.swipeSidePanelOpen;
 146:
                        oscar = tango;
 149:
                        mike = function() {
                            entity = function(argFoo) { // Original name: handleAnimationFinish
                                _fun111994: for(var _fun111994_ip = 0; ; ) switch(_fun111994_ip) {
 0:
                                    entity = argFoo;
                                    if(!entity) { _fun111994_ip = 60; continue _fun111994 }
 6:
                                    mike = _closure1_slot0;
                                    zulu = _closure1_slot2;
                                    entity = 7;
                                    entity = zulu[entity];
                                    zulu = undefined;
                                    tango = mike.bind(zulu)(entity);
                                    mike = tango.runOnJS;
                                    entity = _closure2_slot1;
                                    mike = mike.bind(tango)(entity);
                                    entity = _closure3_slot0;
                                    entity = mike.bind(zulu)(entity);
 60:
                                    entity = undefined;
                                    return entity;
                                }
                            };
                            zulu = {};
                            oscar = _closure1_slot0;
                            report = _closure1_slot2;
                            tango = 7;
                            report = report[tango];
                            tango = undefined;
                            tango = oscar.bind(tango)(report);
                            tango = tango.runOnJS;
                            zulu['runOnJS'] = tango;
                            tango = _closure2_slot1;
                            zulu['onVisibilityChange'] = tango;
                            tango = _closure3_slot0;
                            zulu['show'] = tango;
                            entity['__closure'] = zulu;
                            zulu = 11840209559881.0;
                            entity['__workletHash'] = zulu;
                            mike = _closure1_slot10;
                            entity['__initData'] = mike;
                            return entity;
                        };
                        options = undefined;
                        offset = mike.bind(options)();
                        report = _closure2_slot7;
                        tango = report.set;
                        golf = _closure1_slot0;
                        romeo = _closure1_slot2;
                        mike = 4;
                        mike = romeo[mike];
                        golf = golf.bind(options)(mike);
                        mike = golf.isTimingConfig;
                        mike = mike.bind(golf)(oscar);
                        golf = _closure1_slot0;
                        romeo = _closure1_slot2;
                        verify = oscar;
                        if(mike) { _fun111992_ip = 281; continue _fun111992 }
 216:
                        mike = 10;
                        mike = romeo[mike];
                        backup = golf.bind(options)(mike);
                        foxtrot = backup.withSpring;
                        oscar = {};
                        echo = oscar;
                        result = verify;
                        mike = copyDataProperties(echo, result);
                        kilo = argBaz;
                        mike = 'velocity';
                        oscar[mike] = kilo;
                        output = 'respect-motion-settings';
                        update = backup;
                        echo = yankee;
                        result = oscar;
                        sizing = offset;
                        mike = update[foxtrot](echo, result, output, sizing, kilo);
                        _fun111992_ip = 320; continue _fun111992;
 281:
                        oscar = 8;
                        oscar = romeo[oscar];
                        options = golf.bind(options)(oscar);
                        golf = options.withTiming;
                        output = 'respect-motion-settings';
                        update = options;
                        echo = yankee;
                        result = verify;
                        sizing = offset;
                        mike = update[golf](echo, result, output, sizing, kilo);
 320:
                        mike = tango.bind(report)(mike);
                        mike = true;
                        return mike;
 329:
                        report = _closure1_slot0;
                        tango = _closure1_slot2;
                        mike = 7;
                        tango = tango[mike];
                        mike = undefined;
                        report = report.bind(mike)(tango);
                        tango = report.runOnJS;
                        entity = _closure2_slot1;
                        entity = tango.bind(report)(entity);
                        entity = entity.bind(mike)(zulu);
                        entity = false;
                        return entity;
                    }
                };
                tango = {};
                tango['translateX'] = report;
                tango['width'] = zulu;
                vacuum = foxtrot[options];
                vacuum = verify.bind(romeo)(vacuum);
                vacuum = vacuum.runOnJS;
                tango['runOnJS'] = vacuum;
                tango['onVisibilityChange'] = control;
                vacuum = _closure1_slot7;
                tango['panelsConfig'] = vacuum;
                vacuum = 4;
                vacuum = foxtrot[vacuum];
                vacuum = verify.bind(romeo)(vacuum);
                vacuum = vacuum.isTimingConfig;
                tango['isTimingConfig'] = vacuum;
                vacuum = 8;
                vacuum = foxtrot[vacuum];
                vacuum = verify.bind(romeo)(vacuum);
                vacuum = vacuum.withTiming;
                tango['withTiming'] = vacuum;
                vacuum = 10;
                vacuum = foxtrot[vacuum];
                vacuum = verify.bind(romeo)(vacuum);
                vacuum = vacuum.withSpring;
                tango['withSpring'] = vacuum;
                output['__closure'] = tango;
                tango = 346656151811.0;
                output['__workletHash'] = tango;
                tango = _closure1_slot9;
                output['__initData'] = tango;
                tango = new Array(3);
                tango[0] = control;
                tango[1] = report;
                tango[2] = zulu;
                tango = source.bind(offset)(output, tango);
                _closure2_slot12 = tango;
                options = foxtrot[options];
                output = verify.bind(romeo)(options);
                verify = output.useSharedValue;
                options = {'x': 0, 'y': 0};
                output = verify.bind(output)(options);
                _closure2_slot13 = output;
                options = offset.useContext;
                verify = _closure1_slot1;
                entity = 11;
                entity = foxtrot[entity];
                entity = verify.bind(romeo)(entity);
                options = options.bind(offset)(entity);
                _closure2_slot14 = options;
                entity = offset.useRef;
                romeo = entity.bind(offset)();
                _closure2_slot15 = romeo;
                entity = {};
                foxtrot = offset.useMemo;
                verify = new Array(13);
                verify[0] = update;
                verify[1] = report;
                verify[2] = zulu;
                verify[3] = oscar;
                verify[4] = tango;
                verify[5] = echo;
                verify[6] = result;
                verify[7] = output;
                verify[8] = sizing;
                verify[9] = kilo;
                verify[10] = yankee;
                verify[11] = backup;
                verify[12] = options;
                options = function() {
                    verify = _closure1_slot0;
                    offset = _closure1_slot2;
                    yankee = 12;
                    mike = offset[yankee];
                    options = undefined;
                    mike = verify.bind(options)(mike);
                    zulu = mike.Gesture;
                    mike = zulu.Pan;
                    report = mike.bind(zulu)();
                    zulu = report.enabled;
                    mike = _closure2_slot0;
                    report = zulu.bind(report)(mike);
                    zulu = report.withRef;
                    mike = _closure2_slot15;
                    report = zulu.bind(report)(mike);
                    zulu = report.requireExternalGestureToFail;
                    mike = _closure2_slot14;
                    report = zulu.bind(report)(mike);
                    zulu = report.manualActivation;
                    mike = 3;
                    mike = offset[mike];
                    golf = verify.bind(options)(mike);
                    mike = golf.isAndroid;
                    mike = mike.bind(golf)();
                    report = zulu.bind(report)(mike);
                    zulu = report.hitSlop;
                    mike = {};
                    golf = _closure2_slot5;
                    romeo = golf.top;
                    romeo = -romeo;
                    mike['top'] = romeo;
                    romeo = golf.left;
                    romeo = -romeo;
                    mike['left'] = romeo;
                    romeo = golf.bottom;
                    romeo = -romeo;
                    mike['bottom'] = romeo;
                    golf = golf.right;
                    golf = -golf;
                    mike['right'] = golf;
                    report = zulu.bind(report)(mike);
                    zulu = report.onTouchesDown;
                    mike = function(argFoo, argBar) { // Original name: u
                        mike = argBar;
                        entity = argFoo;
                        zulu = entity.allTouches;
                        entity = 0;
                        report = zulu[entity];
                        tango = _closure2_slot13;
                        zulu = tango.set;
                        entity = {};
                        oscar = report.x;
                        entity['x'] = oscar;
                        report = report.y;
                        entity['y'] = report;
                        entity = zulu.bind(tango)(entity);
                        entity = mike.begin;
                        entity = entity.bind(mike)();
                        entity = undefined;
                        return entity;
                    };
                    golf = {};
                    romeo = _closure2_slot13;
                    golf['startPosition'] = romeo;
                    mike['__closure'] = golf;
                    golf = 703073821620.0;
                    mike['__workletHash'] = golf;
                    golf = _closure1_slot11;
                    mike['__initData'] = golf;
                    report = zulu.bind(report)(mike);
                    zulu = report.onTouchesMove;
                    mike = function(argFoo, argBar) { // Original name: l
                        _fun111997: for(var _fun111997_ip = 0; ; ) switch(_fun111997_ip) {
 0:
                            mike = argFoo;
                            zulu = argBar;
                            oscar = mike.state;
                            golf = _closure1_slot0;
                            entity = _closure1_slot2;
                            offset = 12;
                            tango = entity[offset];
                            entity = undefined;
                            tango = golf.bind(entity)(tango);
                            tango = tango.State;
                            tango = tango.BEGAN;
                            if(!(oscar === tango)) { _fun111997_ip = 451; continue _fun111997 }
 55:
                            mike = mike.allTouches;
                            oscar = 0;
                            golf = mike[oscar];
                            options = golf.x;
                            verify = _closure2_slot13;
                            tango = verify.get;
                            tango = tango.bind(verify)();
                            tango = tango.x;
                            tango = options - tango;
                            verify = global;
                            yankee = verify.Math;
                            options = yankee.abs;
                            options = options.bind(yankee)(tango);
                            if(!(!(options <= offset))) { _fun111997_ip = 451; continue _fun111997 }
 123:
                            yankee = _closure2_slot11;
                            offset = yankee.get;
                            offset = offset.bind(yankee)();
                            if(offset) { _fun111997_ip = 451; continue _fun111997 }
 142:
                            offset = verify.Math;
                            verify = offset.abs;
                            yankee = golf.y;
                            romeo = _closure2_slot13;
                            golf = romeo.get;
                            golf = golf.bind(romeo)();
                            golf = golf.y;
                            golf = yankee - golf;
                            golf = verify.bind(offset)(golf);
                            if(!(!(options <= golf))) { _fun111997_ip = 451; continue _fun111997 }
 193:
                            options = options * options;
                            golf = golf * golf;
                            options = options + golf;
                            golf = 144;
                            if(!(!(options < golf))) { _fun111997_ip = 451; continue _fun111997 }
 215:
                            if(!(!(tango <= oscar))) { _fun111997_ip = 260; continue _fun111997 }
 219:
                            options = _closure2_slot3;
                            golf = true;
                            if(!(golf === options)) { _fun111997_ip = 280; continue _fun111997 }
 229:
                            options = _closure2_slot7;
                            golf = options.get;
                            golf = golf.bind(options)();
                            if(!(golf > oscar)) { _fun111997_ip = 280; continue _fun111997 }
 246:
                            golf = zulu.fail;
                            golf = golf.bind(zulu)();
                            golf = undefined;
                            return golf;
 260:
                            options = _closure2_slot7;
                            golf = options.get;
                            golf = golf.bind(options)();
                            if(!(oscar !== golf)) { _fun111997_ip = 437; continue _fun111997 }
 280:
                            options = _closure2_slot4;
                            golf = _closure1_slot5;
                            golf = golf.GESTURE_EDGE;
                            if(!(options !== golf)) { _fun111997_ip = 316; continue _fun111997 }
 298:
                            options = _closure2_slot4;
                            golf = _closure1_slot5;
                            golf = golf.GESTURE_FULL;
                            if(!(options === golf)) { _fun111997_ip = 411; continue _fun111997 }
 316:
                            if(!(tango < oscar)) { _fun111997_ip = 411; continue _fun111997 }
 320:
                            oscar = _closure2_slot6;
                            tango = 48;
                            tango = oscar - tango;
                            golf = _closure2_slot4;
                            oscar = _closure1_slot5;
                            oscar = oscar.GESTURE_FULL;
                            if(!(golf === oscar)) { _fun111997_ip = 371; continue _fun111997 }
 349:
                            golf = _closure2_slot13;
                            oscar = golf.get;
                            oscar = oscar.bind(golf)();
                            oscar = oscar.x;
                            if(!(!(oscar < tango))) { _fun111997_ip = 423; continue _fun111997 }
 371:
                            oscar = _closure2_slot4;
                            report = _closure1_slot5;
                            report = report.GESTURE_EDGE;
                            if(!(oscar === report)) { _fun111997_ip = 411; continue _fun111997 }
 389:
                            report = _closure2_slot13;
                            mike = report.get;
                            mike = mike.bind(report)();
                            mike = mike.x;
                            if(!(!(mike >= tango))) { _fun111997_ip = 423; continue _fun111997 }
 411:
                            mike = zulu.activate;
                            mike = mike.bind(zulu)();
                            _fun111997_ip = 451; continue _fun111997;
 423:
                            mike = zulu.fail;
                            mike = mike.bind(zulu)();
                            mike = undefined;
                            return mike;
 437:
                            mike = zulu.fail;
                            mike = mike.bind(zulu)();
                            mike = undefined;
                            return mike;
 451:
                            return entity;
                        }
                    };
                    golf = {};
                    romeo = offset[yankee];
                    romeo = verify.bind(options)(romeo);
                    romeo = romeo.State;
                    golf['State'] = romeo;
                    romeo = _closure2_slot13;
                    golf['startPosition'] = romeo;
                    golf['GESTURE_MIN_DISTANCE'] = yankee;
                    yankee = _closure2_slot11;
                    golf['disallowGesture'] = yankee;
                    yankee = _closure2_slot7;
                    golf['translateX'] = yankee;
                    yankee = _closure2_slot3;
                    golf['cancelOnSwipeRightFromStart'] = yankee;
                    yankee = _closure2_slot4;
                    golf['launchPadType'] = yankee;
                    yankee = _closure1_slot5;
                    golf['LaunchPadTypes'] = yankee;
                    yankee = _closure2_slot6;
                    golf['width'] = yankee;
                    yankee = 48;
                    golf['LAUNCHPAD_GESTURE_INSET'] = yankee;
                    mike['__closure'] = golf;
                    golf = 13537841557526.0;
                    mike['__workletHash'] = golf;
                    golf = _closure1_slot12;
                    mike['__initData'] = golf;
                    report = zulu.bind(report)(mike);
                    zulu = report.onStart;
                    mike = function() { // Original name: s
                        _fun111998: for(var _fun111998_ip = 0; ; ) switch(_fun111998_ip) {
 0:
                            zulu = _closure2_slot8;
                            entity = zulu.set;
                            oscar = true;
                            entity = entity.bind(zulu)(oscar);
                            golf = _closure1_slot0;
                            entity = _closure1_slot2;
                            report = 7;
                            tango = entity[report];
                            entity = undefined;
                            options = golf.bind(entity)(tango);
                            golf = options.runOnJS;
                            tango = _closure2_slot10;
                            tango = golf.bind(options)(tango);
                            tango = tango.bind(entity)(oscar);
                            oscar = _closure2_slot2;
                            tango = null;
                            if(!(tango != oscar)) { _fun111998_ip = 108; continue _fun111998 }
 73:
                            tango = _closure1_slot0;
                            zulu = _closure1_slot2;
                            zulu = zulu[report];
                            tango = tango.bind(entity)(zulu);
                            zulu = tango.runOnJS;
                            mike = _closure2_slot2;
                            mike = zulu.bind(tango)(mike);
                            mike = mike.bind(entity)();
 108:
                            return entity;
                        }
                    };
                    yankee = {};
                    golf = _closure2_slot8;
                    yankee['isDragging'] = golf;
                    golf = 7;
                    romeo = offset[golf];
                    romeo = verify.bind(options)(romeo);
                    romeo = romeo.runOnJS;
                    yankee['runOnJS'] = romeo;
                    romeo = _closure2_slot10;
                    yankee['setIsDraggingRef'] = romeo;
                    romeo = _closure2_slot2;
                    yankee['onDragStart'] = romeo;
                    mike['__closure'] = yankee;
                    yankee = 6259908247884.0;
                    mike['__workletHash'] = yankee;
                    yankee = _closure1_slot13;
                    mike['__initData'] = yankee;
                    report = zulu.bind(report)(mike);
                    zulu = report.onChange;
                    mike = function(argFoo) { // Original name: t
                        _fun111999: for(var _fun111999_ip = 0; ; ) switch(_fun111999_ip) {
 0:
                            zulu = _closure2_slot11;
                            mike = zulu.get;
                            tango = mike.bind(zulu)();
                            zulu = _closure2_slot7;
                            mike = zulu.set;
                            if(tango) { _fun111999_ip = 103; continue _fun111999 }
 28:
                            tango = global;
                            oscar = tango.Math;
                            report = oscar.max;
                            options = tango.Math;
                            golf = options.min;
                            tango = _closure2_slot6;
                            verify = _closure2_slot7;
                            entity = verify.get;
                            verify = entity.bind(verify)();
                            entity = argFoo;
                            entity = entity.changeX;
                            entity = verify + entity;
                            tango = golf.bind(options)(tango, entity);
                            entity = 0;
                            entity = report.bind(oscar)(entity, tango);
                            entity = mike.bind(zulu)(entity);
                            _fun111999_ip = 110; continue _fun111999;
 103:
                            entity = 0;
                            entity = mike.bind(zulu)(entity);
 110:
                            entity = undefined;
                            return entity;
                        }
                    };
                    yankee = {};
                    romeo = _closure2_slot11;
                    yankee['disallowGesture'] = romeo;
                    romeo = _closure2_slot7;
                    yankee['translateX'] = romeo;
                    romeo = _closure2_slot6;
                    yankee['width'] = romeo;
                    mike['__closure'] = yankee;
                    yankee = 9855805030500.0;
                    mike['__workletHash'] = yankee;
                    yankee = _closure1_slot14;
                    mike['__initData'] = yankee;
                    zulu = zulu.bind(report)(mike);
                    mike = zulu.onFinalize;
                    entity = function(argFoo) { // Original name: e
                        _fun112000: for(var _fun112000_ip = 0; ; ) switch(_fun112000_ip) {
 0:
                            zulu = argFoo;
 3: // try_start_0
                            tango = _closure2_slot8;
                            entity = tango.get;
                            entity = entity.bind(tango)();
                            if(!entity) { _fun112000_ip = 233; continue _fun112000 }
 25:
                            tango = _closure2_slot11;
                            entity = tango.get;
                            entity = entity.bind(tango)();
                            if(entity) { _fun112000_ip = 233; continue _fun112000 }
 44: // try_end0
                            tango = _closure2_slot8;
                            entity = tango.set;
                            options = false;
                            entity = entity.bind(tango)(options);
                            oscar = _closure1_slot0;
                            report = _closure1_slot2;
                            entity = 7;
                            report = report[entity];
                            entity = undefined;
                            golf = oscar.bind(entity)(report);
                            oscar = golf.runOnJS;
                            report = _closure2_slot10;
                            report = oscar.bind(golf)(report);
                            report = report.bind(entity)(options);
                            report = global;
                            golf = report.Math;
                            oscar = golf.abs;
                            report = zulu;
                            report = report.velocityX;
                            report = oscar.bind(golf)(report);
                            tango = _closure1_slot7;
                            tango = tango.minFlingVelocityX;
                            if(!(!(report > tango))) { _fun112000_ip = 199; continue _fun112000 }
 146:
                            golf = _closure2_slot12;
                            report = _closure2_slot7;
                            tango = report.get;
                            report = tango.bind(report)();
                            oscar = _closure2_slot6;
                            tango = 2;
                            tango = oscar / tango;
                            romeo = report < tango;
                            tango = zulu;
                            offset = tango.velocityX;
                            verify = true;
                            foxtrot = undefined;
                            yankee = false;
                            tango = foxtrot[golf](romeo, yankee, offset, verify, options);
                            _fun112000_ip = 231; continue _fun112000;
 199:
                            oscar = _closure2_slot12;
                            report = zulu.velocityX;
                            tango = 0;
                            romeo = report < tango;
                            offset = zulu.velocityX;
                            foxtrot = undefined;
                            yankee = true;
                            verify = true;
                            zulu = foxtrot[oscar](romeo, yankee, offset, verify, options);
 231:
                            return entity;
 233:
                            tango = _closure2_slot8;
                            entity = tango.set;
                            zulu = false;
                            entity = entity.bind(tango)(zulu);
                            report = _closure1_slot0;
                            tango = _closure1_slot2;
                            entity = 7;
                            tango = tango[entity];
                            entity = undefined;
                            report = report.bind(entity)(tango);
                            tango = report.runOnJS;
                            mike = _closure2_slot10;
                            mike = tango.bind(report)(mike);
                            mike = mike.bind(entity)(zulu);
                            return entity;
 295: // catch_target0
                            CatchBlockStart(arg_register=0);
                            report = _closure2_slot8;
                            zulu = report.set;
                            tango = false;
                            zulu = zulu.bind(report)(tango);
                            oscar = _closure1_slot0;
                            report = _closure1_slot2;
                            zulu = 7;
                            report = report[zulu];
                            zulu = undefined;
                            oscar = oscar.bind(zulu)(report);
                            report = oscar.runOnJS;
                            mike = _closure2_slot10;
                            mike = report.bind(oscar)(mike);
                            mike = mike.bind(zulu)(tango);
                            throw entity;
                        }
                    };
                    report = {};
                    yankee = _closure2_slot8;
                    report['isDragging'] = yankee;
                    yankee = _closure2_slot11;
                    report['disallowGesture'] = yankee;
                    golf = offset[golf];
                    golf = verify.bind(options)(golf);
                    golf = golf.runOnJS;
                    report['runOnJS'] = golf;
                    golf = _closure2_slot10;
                    report['setIsDraggingRef'] = golf;
                    golf = _closure1_slot7;
                    report['panelsConfig'] = golf;
                    golf = _closure2_slot12;
                    report['movePanel'] = golf;
                    golf = _closure2_slot7;
                    report['translateX'] = golf;
                    oscar = _closure2_slot6;
                    report['width'] = oscar;
                    entity['__closure'] = report;
                    report = 13979977661433.0;
                    entity['__workletHash'] = report;
                    tango = _closure1_slot15;
                    entity['__initData'] = tango;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                options = foxtrot.bind(offset)(options, verify);
                entity['gesture'] = options;
                verify = offset.useMemo;
                options = new Array(2);
                options[0] = romeo;
                options[1] = yankee;
                golf = function() {
                    entity = {};
                    zulu = _closure2_slot15;
                    entity['gestureRef'] = zulu;
                    mike = _closure2_slot11;
                    entity['disallowGesture'] = mike;
                    return entity;
                };
                golf = verify.bind(offset)(golf, options);
                entity['panelGestureContext'] = golf;
                entity['isDragging'] = oscar;
                entity['translateX'] = report;
                entity['movePanel'] = tango;
                entity['maxWidth'] = zulu;
                entity['isDraggingRef'] = mike;
                return entity;
            }
        };
        zulu['default'] = mike;
        return entity;
    }
})();