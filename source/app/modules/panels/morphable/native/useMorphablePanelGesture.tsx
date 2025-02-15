// app/modules/panels/morphable/native/useMorphablePanelGesture.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = golf;
    entity = global;
    options = entity.Object;
    report = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = report.bind(options)(zulu, entity, mike);
    entity = 0;
    report = golf[entity];
    mike = argCorge;
    entity = undefined;
    mike = mike.bind(entity)(report);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = golf[mike];
    report = oscar.bind(entity)(mike);
    mike = report.IS_IOS;
    var _closure1_slot4 = mike;
    mike = report.MIN_PAN_GESTURE_MOVE;
    var _closure1_slot5 = mike;
    mike = report.MorphablePanelModes;
    var _closure1_slot6 = mike;
    options = report.PANEL_TAP_GESTURE_MAX_DISTANCE;
    var _closure1_slot7 = options;
    options = report.PIP_POP_HEIGHT;
    var _closure1_slot8 = options;
    report = report.POP_RESISTANCE;
    var _closure1_slot9 = report;
    report = {};
    options = 'function useMorphablePanelGestureTsx1(){const{onTapGestureStart}=this.__closure;var _onTapGestureStart;(_onTapGestureStart=onTapGestureStart)===null||_onTapGestureStart===void 0||_onTapGestureStart();}';
    report['code'] = options;
    var _closure1_slot10 = report;
    report = {};
    options = 'function useMorphablePanelGestureTsx2(event){const{updateSharedValueIfChanged,wrapperOffset,initialGestureOffset,windowDimensions,safeArea,swipeRequiresPop}=this.__closure;updateSharedValueIfChanged(wrapperOffset,{x:0,y:0});initialGestureOffset.set({absoluteXStart:event.absoluteX,absoluteYStart:event.absoluteY,active:false,cancel:event.absoluteY>windowDimensions.height-safeArea.bottom*2,gestureInBottomSafeArea:event.absoluteY>windowDimensions.height-safeArea.bottom,requiresPop:swipeRequiresPop});}';
    report['code'] = options;
    var _closure1_slot11 = report;
    report = {};
    options = 'function useMorphablePanelGestureTsx3(event,manager){const{IS_IOS,initialGestureOffset,State,calculateXYDiff,mode,MorphablePanelModes,MIN_PAN_GESTURE_MOVE,runOnJS,triggerIOSHaptic,updateSharedValueIfChanged,wrapperOffset}=this.__closure;if(IS_IOS&&initialGestureOffset.get().gestureInBottomSafeArea){manager.activate();return;}if(initialGestureOffset.get().cancel){manager.fail();return;}if(event.state!==State.BEGAN||initialGestureOffset.get().active){return;}const{absoluteX:absoluteX,absoluteY:absoluteY,absoluteMovement:absoluteMovement,isNotPullDownGesture:isNotPullDownGesture,yDiff:yDiff}=calculateXYDiff(event,initialGestureOffset);let startGesture=false;if(mode===MorphablePanelModes.PANEL){if(yDiff<0){startGesture=true;}else if(isNotPullDownGesture){manager.fail();}}else if(mode===MorphablePanelModes.PIP&&absoluteMovement>MIN_PAN_GESTURE_MOVE){startGesture=true;runOnJS(triggerIOSHaptic)();}if(startGesture){updateSharedValueIfChanged(wrapperOffset,{x:0,y:0,gestureActive:true});initialGestureOffset.set({absoluteXStart:absoluteX,absoluteYStart:absoluteY,active:true,cancel:false,gestureInBottomSafeArea:false,requiresPop:initialGestureOffset.get().requiresPop});manager.activate();}}';
    report['code'] = options;
    var _closure1_slot12 = report;
    report = {};
    options = 'function useMorphablePanelGestureTsx4(event){const{mode,MorphablePanelModes,safeArea,initialGestureOffset,POP_RESISTANCE,PIP_POP_HEIGHT,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,updateSharedValueIfChanged,wrapperOffset}=this.__closure;if(mode!==MorphablePanelModes.PIP){const minYOffset=safeArea.top;let newYOffset=(initialGestureOffset.get().absoluteYStart-event.absoluteY)*-1;if(!initialGestureOffset.get().requiresPop&&newYOffset<=minYOffset){initialGestureOffset.set({...initialGestureOffset.get(),requiresPop:true});}if(initialGestureOffset.get().requiresPop){const distance=Math.max(newYOffset,0);const resistance=distance*POP_RESISTANCE;if(distance<=PIP_POP_HEIGHT){newYOffset=distance-resistance;}else{initialGestureOffset.set({...initialGestureOffset.get(),requiresPop:false});runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}}updateSharedValueIfChanged(wrapperOffset,{y:newYOffset,x:0});}else{updateSharedValueIfChanged(wrapperOffset,{x:(initialGestureOffset.get().absoluteXStart-event.absoluteX)*-1,y:(initialGestureOffset.get().absoluteYStart-event.absoluteY)*-1});}}';
    report['code'] = options;
    var _closure1_slot13 = report;
    report = {};
    options = 'function useMorphablePanelGestureTsx5(_e){const{updateSharedValueIfChanged,initialGestureOffset,wrapperOffset}=this.__closure;updateSharedValueIfChanged(initialGestureOffset,{active:false});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});}';
    report['code'] = options;
    var _closure1_slot14 = report;
    report = {};
    options = 'function useMorphablePanelGestureTsx6(event){const{initialGestureOffset,mode,MorphablePanelModes,calculatePIPPositionFromVelocity,windowDimensions,safeArea,disableHorizontalSafeAreas,updateSharedValueIfChanged,wrapperOffset,pipState,onPanMinimizeGestureEnd}=this.__closure;if(initialGestureOffset.get().cancel){return;}const{velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY}=event;if(mode===MorphablePanelModes.PIP){const{pipX:pipX,pipY:pipY}=calculatePIPPositionFromVelocity({velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY,windowDimensions:windowDimensions,safeArea:safeArea,disableHorizontalSafeAreas:disableHorizontalSafeAreas});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});updateSharedValueIfChanged(pipState,{x:pipX,y:pipY});}else if(mode===MorphablePanelModes.PANEL){if(velocityY>0){if(!initialGestureOffset.get().requiresPop){var _onPanMinimizeGesture;updateSharedValueIfChanged(wrapperOffset,{x:0,y:windowDimensions.height});(_onPanMinimizeGesture=onPanMinimizeGestureEnd)===null||_onPanMinimizeGesture===void 0||_onPanMinimizeGesture();return;}}}updateSharedValueIfChanged(wrapperOffset,{x:0,y:0,gestureActive:false});}';
    report['code'] = options;
    var _closure1_slot15 = report;
    report = {};
    options = 'function useMorphablePanelGestureTsx7(){const{updateSharedValueIfChanged,initialGestureOffset}=this.__closure;updateSharedValueIfChanged(initialGestureOffset,{active:false,cancel:false});}';
    report['code'] = options;
    var _closure1_slot16 = report;
    report = 10;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/panels/morphable/native/useMorphablePanelGesture.tsx';
    report = oscar.bind(golf)(report);
    tango = function(argFoo) { // Original name: useMorphablePanelGesture
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            backup = mike.mode;
            var _closure2_slot0 = backup;
            romeo = mike.onPanMinimizeGestureEnd;
            var _closure2_slot1 = romeo;
            yankee = mike.onTapGestureStart;
            var _closure2_slot2 = yankee;
            offset = mike.panGestureEnabled;
            kilo = undefined;
            if(!(offset === kilo)) { _fun00002_ip = 48; continue _fun00001 }
 46:
            offset = false;
 48:
            var _closure2_slot3 = offset;
            golf = mike.pipState;
            var _closure2_slot4 = golf;
            foxtrot = mike.swipeRequiresPop;
            if(!(foxtrot === kilo)) { _fun00002_ip = 74; continue _fun00001 }
 72:
            foxtrot = false;
 74:
            var _closure2_slot5 = foxtrot;
            oscar = mike.wrapperOffset;
            var _closure2_slot6 = oscar;
            report = mike.disableHorizontalSafeAreas;
            if(!(report === kilo)) { _fun00002_ip = 100; continue _fun00001 }
 98:
            report = false;
 100:
            var _closure2_slot7 = report;
            var _closure2_slot8 = kilo;
            var _closure2_slot9 = kilo;
            var _closure2_slot10 = kilo;
            tango = _closure1_slot1;
            sizing = _closure1_slot2;
            zulu = 2;
            zulu = sizing[zulu];
            zulu = tango.bind(kilo)(zulu);
            options = zulu.bind(kilo)();
            _closure2_slot8 = options;
            zulu = 3;
            zulu = sizing[zulu];
            zulu = tango.bind(kilo)(zulu);
            verify = zulu.bind(kilo)();
            _closure2_slot9 = verify;
            tango = _closure1_slot0;
            zulu = 4;
            zulu = sizing[zulu];
            kilo = tango.bind(kilo)(zulu);
            tango = kilo.useSharedValue;
            zulu = {'absoluteXStart': 0, 'absoluteYStart': 0, 'active': false, 'gestureInBottomSafeArea': false, 'cancel': false, 'requiresPop': false};
            kilo = tango.bind(kilo)(zulu);
            _closure2_slot10 = kilo;
            tango = _closure1_slot3;
            zulu = tango.useMemo;
            mike = new Array(11);
            mike[0] = kilo;
            mike[1] = backup;
            mike[2] = foxtrot;
            mike[3] = romeo;
            mike[4] = yankee;
            mike[5] = offset;
            mike[6] = verify;
            mike[7] = options;
            mike[8] = golf;
            mike[9] = oscar;
            mike[10] = report;
            entity = function() {
                output = _closure1_slot0;
                foxtrot = _closure1_slot2;
                sizing = 5;
                mike = foxtrot[sizing];
                romeo = undefined;
                mike = output.bind(romeo)(mike);
                tango = mike.Gesture;
                zulu = tango.Race;
                mike = foxtrot[sizing];
                mike = output.bind(romeo)(mike);
                report = mike.Gesture;
                mike = report.Tap;
                oscar = mike.bind(report)();
                report = oscar.enabled;
                offset = _closure2_slot2;
                mike = null;
                mike = mike != offset;
                oscar = report.bind(oscar)(mike);
                report = oscar.maxDistance;
                mike = _closure1_slot7;
                oscar = report.bind(oscar)(mike);
                report = oscar.onStart;
                mike = function() { // Original name: x
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        zulu = _closure2_slot2;
                        mike = null;
                        if(!(mike != zulu)) { _fun00004_ip = 23; continue _fun00003 }
 13:
                        mike = _closure2_slot2;
                        entity = undefined;
                        entity = mike.bind(entity)();
 23:
                        entity = undefined;
                        return entity;
                    }
                };
                options = {};
                options['onTapGestureStart'] = offset;
                mike['__closure'] = options;
                options = 9880530558215.0;
                mike['__workletHash'] = options;
                options = _closure1_slot10;
                mike['__initData'] = options;
                mike = report.bind(oscar)(mike);
                report = foxtrot[sizing];
                report = output.bind(romeo)(report);
                oscar = report.Gesture;
                report = oscar.Pan;
                options = report.bind(oscar)();
                oscar = options.enabled;
                report = _closure2_slot3;
                options = oscar.bind(options)(report);
                oscar = options.manualActivation;
                report = true;
                options = oscar.bind(options)(report);
                oscar = options.maxPointers;
                report = 1;
                options = oscar.bind(options)(report);
                oscar = options.shouldCancelWhenOutside;
                report = false;
                options = oscar.bind(options)(report);
                oscar = options.onBegin;
                report = function(argFoo) { // Original name: V
                    oscar = argFoo;
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 6;
                    mike = mike[entity];
                    entity = undefined;
                    tango = zulu.bind(entity)(mike);
                    zulu = _closure2_slot6;
                    mike = {'x': 0, 'y': 0};
                    mike = tango.bind(entity)(zulu, mike);
                    tango = _closure2_slot10;
                    zulu = tango.set;
                    mike = {};
                    golf = oscar.absoluteX;
                    mike['absoluteXStart'] = golf;
                    golf = oscar.absoluteY;
                    mike['absoluteYStart'] = golf;
                    golf = false;
                    mike['active'] = golf;
                    options = oscar.absoluteY;
                    golf = _closure2_slot8;
                    verify = golf.height;
                    golf = _closure2_slot9;
                    offset = golf.bottom;
                    golf = 2;
                    golf = golf * offset;
                    golf = verify - golf;
                    golf = options > golf;
                    mike['cancel'] = golf;
                    golf = oscar.absoluteY;
                    oscar = _closure2_slot8;
                    options = oscar.height;
                    oscar = _closure2_slot9;
                    oscar = oscar.bottom;
                    oscar = options - oscar;
                    oscar = golf > oscar;
                    mike['gestureInBottomSafeArea'] = oscar;
                    report = _closure2_slot5;
                    mike['requiresPop'] = report;
                    mike = zulu.bind(tango)(mike);
                    return entity;
                };
                backup = {};
                yankee = _closure1_slot1;
                offset = 6;
                kilo = foxtrot[offset];
                kilo = yankee.bind(romeo)(kilo);
                backup['updateSharedValueIfChanged'] = kilo;
                kilo = _closure2_slot6;
                backup['wrapperOffset'] = kilo;
                result = _closure2_slot10;
                backup['initialGestureOffset'] = result;
                result = _closure2_slot8;
                backup['windowDimensions'] = result;
                result = _closure2_slot9;
                backup['safeArea'] = result;
                result = _closure2_slot5;
                backup['swipeRequiresPop'] = result;
                report['__closure'] = backup;
                backup = 14238758629244.0;
                report['__workletHash'] = backup;
                backup = _closure1_slot11;
                report['__initData'] = backup;
                options = oscar.bind(options)(report);
                oscar = options.onTouchesMove;
                report = function(argFoo, argBar) { // Original name: C
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        golf = argFoo;
                        mike = argBar;
                        zulu = _closure1_slot4;
                        if(!zulu) { _fun00006_ip = 44; continue _fun00005 }
 16:
                        tango = _closure2_slot10;
                        zulu = tango.get;
                        zulu = zulu.bind(tango)();
                        zulu = zulu.gestureInBottomSafeArea;
                        if(zulu) { _fun00006_ip = 481; continue _fun00005 }
 44:
                        tango = _closure2_slot10;
                        zulu = tango.get;
                        zulu = zulu.bind(tango)();
                        zulu = zulu.cancel;
                        if(zulu) { _fun00006_ip = 469; continue _fun00005 }
 72:
                        tango = golf.state;
                        oscar = _closure1_slot0;
                        options = _closure1_slot2;
                        zulu = 5;
                        zulu = options[zulu];
                        options = undefined;
                        zulu = oscar.bind(options)(zulu);
                        zulu = zulu.State;
                        zulu = zulu.BEGAN;
                        if(!(tango === zulu)) { _fun00006_ip = 491; continue _fun00005 }
 118:
                        tango = _closure2_slot10;
                        zulu = tango.get;
                        zulu = zulu.bind(tango)();
                        zulu = zulu.active;
                        if(zulu) { _fun00006_ip = 491; continue _fun00005 }
 143:
                        tango = _closure1_slot0;
                        oscar = _closure1_slot2;
                        zulu = 7;
                        zulu = oscar[zulu];
                        oscar = tango.bind(options)(zulu);
                        tango = oscar.calculateXYDiff;
                        zulu = _closure2_slot10;
                        zulu = tango.bind(oscar)(golf, zulu);
                        golf = zulu.absoluteX;
                        oscar = zulu.absoluteY;
                        yankee = zulu.absoluteMovement;
                        verify = zulu.isNotPullDownGesture;
                        offset = zulu.yDiff;
                        tango = _closure2_slot0;
                        zulu = _closure1_slot6;
                        zulu = zulu.PANEL;
                        if(!(tango !== zulu)) { _fun00006_ip = 315; continue _fun00005 }
 227:
                        tango = _closure2_slot0;
                        zulu = _closure1_slot6;
                        zulu = zulu.PIP;
                        tango = tango === zulu;
                        if(!tango) { _fun00006_ip = 256; continue _fun00005 }
 248:
                        zulu = _closure1_slot5;
                        tango = yankee > zulu;
 256:
                        zulu = false;
                        if(!tango) { _fun00006_ip = 343; continue _fun00005 }
 261:
                        yankee = _closure1_slot0;
                        backup = _closure1_slot2;
                        tango = 4;
                        tango = backup[tango];
                        romeo = yankee.bind(options)(tango);
                        yankee = romeo.runOnJS;
                        foxtrot = _closure1_slot1;
                        tango = 8;
                        tango = backup[tango];
                        tango = foxtrot.bind(options)(tango);
                        tango = yankee.bind(romeo)(tango);
                        tango = tango.bind(options)();
                        zulu = true;
                        _fun00006_ip = 343; continue _fun00005;
 315:
                        tango = 0;
                        tango = offset < tango;
                        zulu = true;
                        if(tango) { _fun00006_ip = 343; continue _fun00005 }
 326:
                        zulu = false;
                        if(!verify) { _fun00006_ip = 343; continue _fun00005 }
 331:
                        verify = mike.fail;
                        verify = verify.bind(mike)();
                        zulu = false;
 343:
                        if(!zulu) { _fun00006_ip = 491; continue _fun00005 }
 349:
                        zulu = _closure1_slot1;
                        tango = _closure1_slot2;
                        entity = 6;
                        entity = tango[entity];
                        tango = zulu.bind(options)(entity);
                        zulu = _closure2_slot6;
                        entity = {'x': 0, 'y': 0, 'gestureActive': true};
                        entity = tango.bind(options)(zulu, entity);
                        tango = _closure2_slot10;
                        zulu = tango.set;
                        entity = {'absoluteXStart': null, 'absoluteYStart': null, 'active': true, 'cancel': false, 'gestureInBottomSafeArea': false};
                        entity['absoluteXStart'] = golf;
                        entity['absoluteYStart'] = oscar;
                        oscar = _closure2_slot10;
                        report = oscar.get;
                        report = report.bind(oscar)();
                        report = report.requiresPop;
                        entity['requiresPop'] = report;
                        entity = zulu.bind(tango)(entity);
                        entity = mike.activate;
                        entity = entity.bind(mike)();
                        _fun00006_ip = 491; continue _fun00005;
 469:
                        entity = mike.fail;
                        entity = entity.bind(mike)();
                        _fun00006_ip = 491; continue _fun00005;
 481:
                        entity = mike.activate;
                        entity = entity.bind(mike)();
 491:
                        entity = undefined;
                        return entity;
                    }
                };
                backup = {};
                result = _closure1_slot4;
                backup['IS_IOS'] = result;
                result = _closure2_slot10;
                backup['initialGestureOffset'] = result;
                sizing = foxtrot[sizing];
                sizing = output.bind(romeo)(sizing);
                sizing = sizing.State;
                backup['State'] = sizing;
                sizing = 7;
                result = foxtrot[sizing];
                result = output.bind(romeo)(result);
                result = result.calculateXYDiff;
                backup['calculateXYDiff'] = result;
                echo = _closure2_slot0;
                backup['mode'] = echo;
                result = _closure1_slot6;
                backup['MorphablePanelModes'] = result;
                update = _closure1_slot5;
                backup['MIN_PAN_GESTURE_MOVE'] = update;
                update = 4;
                source = foxtrot[update];
                source = output.bind(romeo)(source);
                source = source.runOnJS;
                backup['runOnJS'] = source;
                source = 8;
                source = foxtrot[source];
                source = yankee.bind(romeo)(source);
                backup['triggerIOSHaptic'] = source;
                source = foxtrot[offset];
                source = yankee.bind(romeo)(source);
                backup['updateSharedValueIfChanged'] = source;
                backup['wrapperOffset'] = kilo;
                report['__closure'] = backup;
                backup = 14725552970763.0;
                report['__workletHash'] = backup;
                backup = _closure1_slot12;
                report['__initData'] = backup;
                options = oscar.bind(options)(report);
                oscar = options.onChange;
                report = function(argFoo) { // Original name: H
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        zulu = argFoo;
                        report = _closure2_slot0;
                        tango = _closure1_slot6;
                        tango = tango.PIP;
                        if(!(report === tango)) { _fun00008_ip = 146; continue _fun00007 }
 27:
                        report = _closure1_slot1;
                        oscar = _closure1_slot2;
                        tango = 6;
                        tango = oscar[tango];
                        golf = undefined;
                        oscar = report.bind(golf)(tango);
                        report = _closure2_slot6;
                        tango = {};
                        verify = _closure2_slot10;
                        options = verify.get;
                        options = options.bind(verify)();
                        verify = options.absoluteXStart;
                        options = zulu.absoluteX;
                        options = verify - options;
                        verify = -1;
                        options = verify * options;
                        tango['x'] = options;
                        offset = _closure2_slot10;
                        options = offset.get;
                        options = options.bind(offset)();
                        offset = options.absoluteYStart;
                        options = zulu.absoluteY;
                        options = offset - options;
                        options = verify * options;
                        tango['y'] = options;
                        tango = oscar.bind(golf)(report, tango);
                        _fun00008_ip = 517; continue _fun00007;
 146:
                        tango = _closure2_slot9;
                        report = tango.top;
                        oscar = _closure2_slot10;
                        tango = oscar.get;
                        tango = tango.bind(oscar)();
                        tango = tango.absoluteYStart;
                        zulu = zulu.absoluteY;
                        tango = tango - zulu;
                        zulu = -1;
                        zulu = zulu * tango;
                        oscar = _closure2_slot10;
                        tango = oscar.get;
                        tango = tango.bind(oscar)();
                        tango = tango.requiresPop;
                        tango = !tango;
                        if(!tango) { _fun00008_ip = 223; continue _fun00007 }
 219:
                        tango = zulu <= report;
 223:
                        if(!tango) { _fun00008_ip = 273; continue _fun00007 }
 226:
                        oscar = _closure2_slot10;
                        report = oscar.set;
                        tango = {};
                        options = _closure2_slot10;
                        golf = options.get;
                        foxtrot = golf.bind(options)();
                        backup = tango;
                        golf = copyDataProperties(backup, foxtrot);
                        options = true;
                        golf = 'requiresPop';
                        tango[golf] = options;
                        tango = report.bind(oscar)(tango);
 273:
                        report = _closure2_slot10;
                        tango = report.get;
                        tango = tango.bind(report)();
                        tango = tango.requiresPop;
                        report = zulu;
                        if(!tango) { _fun00008_ip = 473; continue _fun00007 }
 301:
                        tango = global;
                        golf = tango.Math;
                        oscar = golf.max;
                        tango = 0;
                        tango = oscar.bind(golf)(zulu, tango);
                        oscar = _closure1_slot8;
                        if(!(!(tango <= oscar))) { _fun00008_ip = 461; continue _fun00007 }
 333:
                        options = _closure2_slot10;
                        golf = options.set;
                        oscar = {};
                        offset = _closure2_slot10;
                        verify = offset.get;
                        foxtrot = verify.bind(offset)();
                        backup = oscar;
                        verify = copyDataProperties(backup, foxtrot);
                        offset = false;
                        verify = 'requiresPop';
                        oscar[verify] = offset;
                        oscar = golf.bind(options)(oscar);
                        verify = _closure1_slot0;
                        offset = _closure1_slot2;
                        oscar = 4;
                        oscar = offset[oscar];
                        options = undefined;
                        romeo = verify.bind(options)(oscar);
                        yankee = romeo.runOnJS;
                        oscar = 9;
                        golf = offset[oscar];
                        golf = verify.bind(options)(golf);
                        golf = golf.triggerHapticFeedback;
                        golf = yankee.bind(romeo)(golf);
                        oscar = offset[oscar];
                        oscar = verify.bind(options)(oscar);
                        oscar = oscar.HapticFeedbackTypes;
                        oscar = oscar.IMPACT_MEDIUM;
                        oscar = golf.bind(options)(oscar);
                        report = zulu;
                        _fun00008_ip = 473; continue _fun00007;
 461:
                        zulu = _closure1_slot9;
                        zulu = tango * zulu;
                        report = tango - zulu;
 473:
                        zulu = _closure1_slot1;
                        tango = _closure1_slot2;
                        mike = 6;
                        mike = tango[mike];
                        tango = undefined;
                        zulu = zulu.bind(tango)(mike);
                        mike = _closure2_slot6;
                        entity = {};
                        entity['y'] = report;
                        report = 0;
                        entity['x'] = report;
                        entity = zulu.bind(tango)(mike, entity);
 517:
                        entity = undefined;
                        return entity;
                    }
                };
                backup = {};
                backup['mode'] = echo;
                backup['MorphablePanelModes'] = result;
                source = _closure2_slot9;
                backup['safeArea'] = source;
                source = _closure2_slot10;
                backup['initialGestureOffset'] = source;
                source = _closure1_slot9;
                backup['POP_RESISTANCE'] = source;
                source = _closure1_slot8;
                backup['PIP_POP_HEIGHT'] = source;
                update = foxtrot[update];
                update = output.bind(romeo)(update);
                update = update.runOnJS;
                backup['runOnJS'] = update;
                update = 9;
                source = foxtrot[update];
                source = output.bind(romeo)(source);
                source = source.triggerHapticFeedback;
                backup['triggerHapticFeedback'] = source;
                update = foxtrot[update];
                update = output.bind(romeo)(update);
                update = update.HapticFeedbackTypes;
                backup['HapticFeedbackTypes'] = update;
                update = foxtrot[offset];
                update = yankee.bind(romeo)(update);
                backup['updateSharedValueIfChanged'] = update;
                backup['wrapperOffset'] = kilo;
                report['__closure'] = backup;
                backup = 3361121405260.0;
                report['__workletHash'] = backup;
                backup = _closure1_slot13;
                report['__initData'] = backup;
                options = oscar.bind(options)(report);
                oscar = options.onTouchesCancelled;
                report = function() { // Original name: D
                    tango = _closure1_slot1;
                    oscar = _closure1_slot2;
                    zulu = 6;
                    mike = oscar[zulu];
                    entity = undefined;
                    verify = tango.bind(entity)(mike);
                    options = _closure2_slot10;
                    golf = {};
                    report = false;
                    golf['active'] = report;
                    golf = verify.bind(entity)(options, golf);
                    zulu = oscar[zulu];
                    tango = tango.bind(entity)(zulu);
                    zulu = _closure2_slot6;
                    mike = {};
                    mike['gestureActive'] = report;
                    mike = tango.bind(entity)(zulu, mike);
                    return entity;
                };
                backup = {};
                update = foxtrot[offset];
                update = yankee.bind(romeo)(update);
                backup['updateSharedValueIfChanged'] = update;
                update = _closure2_slot10;
                backup['initialGestureOffset'] = update;
                backup['wrapperOffset'] = kilo;
                report['__closure'] = backup;
                backup = 947098660135.0;
                report['__workletHash'] = backup;
                backup = _closure1_slot14;
                report['__initData'] = backup;
                options = oscar.bind(options)(report);
                oscar = options.onEnd;
                report = function(argFoo) { // Original name: X
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        mike = argFoo;
                        tango = _closure2_slot10;
                        zulu = tango.get;
                        zulu = zulu.bind(tango)();
                        zulu = zulu.cancel;
                        if(zulu) { _fun00010_ip = 410; continue _fun00009 }
 31:
                        yankee = mike.velocityX;
                        offset = mike.velocityY;
                        verify = mike.absoluteX;
                        options = mike.absoluteY;
                        tango = _closure2_slot0;
                        zulu = _closure1_slot6;
                        zulu = zulu.PIP;
                        if(!(tango !== zulu)) { _fun00010_ip = 210; continue _fun00009 }
 79:
                        tango = _closure2_slot0;
                        zulu = _closure1_slot6;
                        zulu = zulu.PANEL;
                        if(!(tango === zulu)) { _fun00010_ip = 368; continue _fun00009 }
 100:
                        golf = 0;
                        if(!(offset > golf)) { _fun00010_ip = 368; continue _fun00009 }
 109:
                        tango = _closure2_slot10;
                        zulu = tango.get;
                        zulu = zulu.bind(tango)();
                        zulu = zulu.requiresPop;
                        if(zulu) { _fun00010_ip = 368; continue _fun00009 }
 134:
                        tango = _closure1_slot1;
                        report = _closure1_slot2;
                        zulu = 6;
                        zulu = report[zulu];
                        report = undefined;
                        oscar = tango.bind(report)(zulu);
                        tango = _closure2_slot6;
                        zulu = {};
                        zulu['x'] = golf;
                        golf = _closure2_slot8;
                        golf = golf.height;
                        zulu['y'] = golf;
                        zulu = oscar.bind(report)(tango, zulu);
                        tango = _closure2_slot1;
                        zulu = null;
                        zulu = zulu == tango;
                        if(zulu) { _fun00010_ip = 206; continue _fun00009 }
 198:
                        tango = _closure2_slot1;
                        zulu = tango.bind(report)();
 206:
                        zulu = undefined;
                        return zulu;
 210:
                        tango = _closure1_slot0;
                        report = _closure1_slot2;
                        zulu = 7;
                        zulu = report[zulu];
                        oscar = undefined;
                        golf = tango.bind(oscar)(zulu);
                        tango = golf.calculatePIPPositionFromVelocity;
                        zulu = {};
                        zulu['velocityX'] = yankee;
                        zulu['velocityY'] = offset;
                        zulu['absoluteX'] = verify;
                        zulu['absoluteY'] = options;
                        options = _closure2_slot8;
                        zulu['windowDimensions'] = options;
                        options = _closure2_slot9;
                        zulu['safeArea'] = options;
                        options = _closure2_slot7;
                        zulu['disableHorizontalSafeAreas'] = options;
                        zulu = tango.bind(golf)(zulu);
                        options = zulu.pipX;
                        golf = zulu.pipY;
                        tango = _closure1_slot1;
                        zulu = 6;
                        verify = report[zulu];
                        yankee = tango.bind(oscar)(verify);
                        offset = _closure2_slot6;
                        verify = {};
                        romeo = false;
                        verify['gestureActive'] = romeo;
                        verify = yankee.bind(oscar)(offset, verify);
                        zulu = report[zulu];
                        report = tango.bind(oscar)(zulu);
                        tango = _closure2_slot4;
                        zulu = {};
                        zulu['x'] = options;
                        zulu['y'] = golf;
                        zulu = report.bind(oscar)(tango, zulu);
 368:
                        zulu = _closure1_slot1;
                        tango = _closure1_slot2;
                        mike = 6;
                        mike = tango[mike];
                        tango = undefined;
                        zulu = zulu.bind(tango)(mike);
                        mike = _closure2_slot6;
                        entity = {'x': 0, 'y': 0, 'gestureActive': false};
                        entity = zulu.bind(tango)(mike, entity);
 410:
                        entity = undefined;
                        return entity;
                    }
                };
                backup = {};
                update = _closure2_slot10;
                backup['initialGestureOffset'] = update;
                backup['mode'] = echo;
                backup['MorphablePanelModes'] = result;
                sizing = foxtrot[sizing];
                sizing = output.bind(romeo)(sizing);
                sizing = sizing.calculatePIPPositionFromVelocity;
                backup['calculatePIPPositionFromVelocity'] = sizing;
                sizing = _closure2_slot8;
                backup['windowDimensions'] = sizing;
                sizing = _closure2_slot9;
                backup['safeArea'] = sizing;
                sizing = _closure2_slot7;
                backup['disableHorizontalSafeAreas'] = sizing;
                sizing = foxtrot[offset];
                sizing = yankee.bind(romeo)(sizing);
                backup['updateSharedValueIfChanged'] = sizing;
                backup['wrapperOffset'] = kilo;
                kilo = _closure2_slot4;
                backup['pipState'] = kilo;
                kilo = _closure2_slot1;
                backup['onPanMinimizeGestureEnd'] = kilo;
                report['__closure'] = backup;
                backup = 226395881238.0;
                report['__workletHash'] = backup;
                backup = _closure1_slot15;
                report['__initData'] = backup;
                oscar = oscar.bind(options)(report);
                report = oscar.onFinalize;
                entity = function() { // Original name: t
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 6;
                    mike = mike[entity];
                    entity = undefined;
                    tango = zulu.bind(entity)(mike);
                    zulu = _closure2_slot10;
                    mike = {'active': false, 'cancel': false};
                    mike = tango.bind(entity)(zulu, mike);
                    return entity;
                };
                options = {};
                offset = foxtrot[offset];
                offset = yankee.bind(romeo)(offset);
                options['updateSharedValueIfChanged'] = offset;
                verify = _closure2_slot10;
                options['initialGestureOffset'] = verify;
                entity['__closure'] = options;
                options = 12518028808028.0;
                entity['__workletHash'] = options;
                golf = _closure1_slot16;
                entity['__initData'] = golf;
                entity = report.bind(oscar)(entity);
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        }
    };
    zulu['default'] = tango;
    zulu['MorphablePanelModes'] = mike;
    return entity;
})();