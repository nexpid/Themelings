// app/modules/panels/morphable/native/useMorphablePanelGesture.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = golfie;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, michal);
    entity = 0;
    report = golfie[entity];
    michal = argCor;
    entity = undefined;
    michal = michal.bind(entity)(report);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = golfie[michal];
    report = oscard.bind(entity)(michal);
    michal = report.IS_IOS;
    var _closure1_slot4 = michal;
    michal = report.MIN_PAN_GESTURE_MOVE;
    var _closure1_slot5 = michal;
    michal = report.MorphablePanelModes;
    var _closure1_slot6 = michal;
    option = report.PANEL_TAP_GESTURE_MAX_DISTANCE;
    var _closure1_slot7 = option;
    option = report.PIP_POP_HEIGHT;
    var _closure1_slot8 = option;
    report = report.POP_RESISTANCE;
    var _closure1_slot9 = report;
    report = {};
    option = 'function useMorphablePanelGestureTsx1(){const{onTapGestureStart}=this.__closure;var _onTapGestureStart;(_onTapGestureStart=onTapGestureStart)===null||_onTapGestureStart===void 0||_onTapGestureStart();}';
    report['code'] = option;
    var _closure1_slot10 = report;
    report = {};
    option = 'function useMorphablePanelGestureTsx2(event){const{updateSharedValueIfChanged,wrapperOffset,initialGestureOffset,windowDimensions,safeArea,swipeRequiresPop}=this.__closure;updateSharedValueIfChanged(wrapperOffset,{x:0,y:0});initialGestureOffset.set({absoluteXStart:event.absoluteX,absoluteYStart:event.absoluteY,active:false,cancel:event.absoluteY>windowDimensions.height-safeArea.bottom*2,gestureInBottomSafeArea:event.absoluteY>windowDimensions.height-safeArea.bottom,requiresPop:swipeRequiresPop});}';
    report['code'] = option;
    var _closure1_slot11 = report;
    report = {};
    option = 'function useMorphablePanelGestureTsx3(event,manager){const{IS_IOS,initialGestureOffset,State,calculateXYDiff,mode,MorphablePanelModes,MIN_PAN_GESTURE_MOVE,runOnJS,triggerIOSHaptic,updateSharedValueIfChanged,wrapperOffset}=this.__closure;if(IS_IOS&&initialGestureOffset.get().gestureInBottomSafeArea){manager.activate();return;}if(initialGestureOffset.get().cancel){manager.fail();return;}if(event.state!==State.BEGAN||initialGestureOffset.get().active){return;}const{absoluteX:absoluteX,absoluteY:absoluteY,absoluteMovement:absoluteMovement,isNotPullDownGesture:isNotPullDownGesture,yDiff:yDiff}=calculateXYDiff(event,initialGestureOffset);let startGesture=false;if(mode===MorphablePanelModes.PANEL){if(yDiff<0){startGesture=true;}else if(isNotPullDownGesture){manager.fail();}}else if(mode===MorphablePanelModes.PIP&&absoluteMovement>MIN_PAN_GESTURE_MOVE){startGesture=true;runOnJS(triggerIOSHaptic)();}if(startGesture){updateSharedValueIfChanged(wrapperOffset,{x:0,y:0,gestureActive:true});initialGestureOffset.set({absoluteXStart:absoluteX,absoluteYStart:absoluteY,active:true,cancel:false,gestureInBottomSafeArea:false,requiresPop:initialGestureOffset.get().requiresPop});manager.activate();}}';
    report['code'] = option;
    var _closure1_slot12 = report;
    report = {};
    option = 'function useMorphablePanelGestureTsx4(event){const{mode,MorphablePanelModes,safeArea,initialGestureOffset,POP_RESISTANCE,PIP_POP_HEIGHT,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,updateSharedValueIfChanged,wrapperOffset}=this.__closure;if(mode!==MorphablePanelModes.PIP){const minYOffset=safeArea.top;let newYOffset=(initialGestureOffset.get().absoluteYStart-event.absoluteY)*-1;if(!initialGestureOffset.get().requiresPop&&newYOffset<=minYOffset){initialGestureOffset.set({...initialGestureOffset.get(),requiresPop:true});}if(initialGestureOffset.get().requiresPop){const distance=Math.max(newYOffset,0);const resistance=distance*POP_RESISTANCE;if(distance<=PIP_POP_HEIGHT){newYOffset=distance-resistance;}else{initialGestureOffset.set({...initialGestureOffset.get(),requiresPop:false});runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}}updateSharedValueIfChanged(wrapperOffset,{y:newYOffset,x:0});}else{updateSharedValueIfChanged(wrapperOffset,{x:(initialGestureOffset.get().absoluteXStart-event.absoluteX)*-1,y:(initialGestureOffset.get().absoluteYStart-event.absoluteY)*-1});}}';
    report['code'] = option;
    var _closure1_slot13 = report;
    report = {};
    option = 'function useMorphablePanelGestureTsx5(_e){const{updateSharedValueIfChanged,initialGestureOffset,wrapperOffset}=this.__closure;updateSharedValueIfChanged(initialGestureOffset,{active:false});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});}';
    report['code'] = option;
    var _closure1_slot14 = report;
    report = {};
    option = 'function useMorphablePanelGestureTsx6(event){const{initialGestureOffset,mode,MorphablePanelModes,calculatePIPPositionFromVelocity,windowDimensions,safeArea,disableHorizontalSafeAreas,updateSharedValueIfChanged,wrapperOffset,pipState,onPanMinimizeGestureEnd}=this.__closure;if(initialGestureOffset.get().cancel){return;}const{velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY}=event;if(mode===MorphablePanelModes.PIP){const{pipX:pipX,pipY:pipY}=calculatePIPPositionFromVelocity({velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY,windowDimensions:windowDimensions,safeArea:safeArea,disableHorizontalSafeAreas:disableHorizontalSafeAreas});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});updateSharedValueIfChanged(pipState,{x:pipX,y:pipY});}else if(mode===MorphablePanelModes.PANEL){if(velocityY>0){if(!initialGestureOffset.get().requiresPop){var _onPanMinimizeGesture;updateSharedValueIfChanged(wrapperOffset,{x:0,y:windowDimensions.height});(_onPanMinimizeGesture=onPanMinimizeGestureEnd)===null||_onPanMinimizeGesture===void 0||_onPanMinimizeGesture();return;}}}updateSharedValueIfChanged(wrapperOffset,{x:0,y:0,gestureActive:false});}';
    report['code'] = option;
    var _closure1_slot15 = report;
    report = {};
    option = 'function useMorphablePanelGestureTsx7(){const{updateSharedValueIfChanged,initialGestureOffset}=this.__closure;updateSharedValueIfChanged(initialGestureOffset,{active:false,cancel:false});}';
    report['code'] = option;
    var _closure1_slot16 = report;
    report = 10;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/panels/morphable/native/useMorphablePanelGesture.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function(argFoo) { // Original name: useMorphablePanelGesture
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            backup = michal.mode;
            var _closure2_slot0 = backup;
            romeon = michal.onPanMinimizeGestureEnd;
            var _closure2_slot1 = romeon;
            yankee = michal.onTapGestureStart;
            var _closure2_slot2 = yankee;
            offset = michal.panGestureEnabled;
            kiloes = undefined;
            if(!(offset === kiloes)) { _fun00002_ip = 48; continue _fun00001 }
 46:
            offset = false;
 48:
            var _closure2_slot3 = offset;
            golfie = michal.pipState;
            var _closure2_slot4 = golfie;
            foxtra = michal.swipeRequiresPop;
            if(!(foxtra === kiloes)) { _fun00002_ip = 74; continue _fun00001 }
 72:
            foxtra = false;
 74:
            var _closure2_slot5 = foxtra;
            oscard = michal.wrapperOffset;
            var _closure2_slot6 = oscard;
            report = michal.disableHorizontalSafeAreas;
            if(!(report === kiloes)) { _fun00002_ip = 100; continue _fun00001 }
 98:
            report = false;
 100:
            var _closure2_slot7 = report;
            var _closure2_slot8 = kiloes;
            var _closure2_slot9 = kiloes;
            var _closure2_slot10 = kiloes;
            tangon = _closure1_slot1;
            sizing = _closure1_slot2;
            zuuluu = 2;
            zuuluu = sizing[zuuluu];
            zuuluu = tangon.bind(kiloes)(zuuluu);
            option = zuuluu.bind(kiloes)();
            _closure2_slot8 = option;
            zuuluu = 3;
            zuuluu = sizing[zuuluu];
            zuuluu = tangon.bind(kiloes)(zuuluu);
            verify = zuuluu.bind(kiloes)();
            _closure2_slot9 = verify;
            tangon = _closure1_slot0;
            zuuluu = 4;
            zuuluu = sizing[zuuluu];
            kiloes = tangon.bind(kiloes)(zuuluu);
            tangon = kiloes.useSharedValue;
            zuuluu = {'absoluteXStart': 0, 'absoluteYStart': 0, 'active': false, 'gestureInBottomSafeArea': false, 'cancel': false, 'requiresPop': false};
            kiloes = tangon.bind(kiloes)(zuuluu);
            _closure2_slot10 = kiloes;
            tangon = _closure1_slot3;
            zuuluu = tangon.useMemo;
            michal = new Array(11);
            michal[0] = kiloes;
            michal[1] = backup;
            michal[2] = foxtra;
            michal[3] = romeon;
            michal[4] = yankee;
            michal[5] = offset;
            michal[6] = verify;
            michal[7] = option;
            michal[8] = golfie;
            michal[9] = oscard;
            michal[10] = report;
            entity = function() {
                output = _closure1_slot0;
                foxtra = _closure1_slot2;
                sizing = 5;
                michal = foxtra[sizing];
                romeon = undefined;
                michal = output.bind(romeon)(michal);
                tangon = michal.Gesture;
                zuuluu = tangon.Race;
                michal = foxtra[sizing];
                michal = output.bind(romeon)(michal);
                report = michal.Gesture;
                michal = report.Tap;
                oscard = michal.bind(report)();
                report = oscard.enabled;
                offset = _closure2_slot2;
                michal = null;
                michal = michal != offset;
                oscard = report.bind(oscard)(michal);
                report = oscard.maxDistance;
                michal = _closure1_slot7;
                oscard = report.bind(oscard)(michal);
                report = oscard.onStart;
                michal = function() { // Original name: x
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        zuuluu = _closure2_slot2;
                        michal = null;
                        if(!(michal != zuuluu)) { _fun00004_ip = 23; continue _fun00003 }
 13:
                        michal = _closure2_slot2;
                        entity = undefined;
                        entity = michal.bind(entity)();
 23:
                        entity = undefined;
                        return entity;
                    }
                };
                option = {};
                option['onTapGestureStart'] = offset;
                michal['__closure'] = option;
                option = 9880530558215.0;
                michal['__workletHash'] = option;
                option = _closure1_slot10;
                michal['__initData'] = option;
                michal = report.bind(oscard)(michal);
                report = foxtra[sizing];
                report = output.bind(romeon)(report);
                oscard = report.Gesture;
                report = oscard.Pan;
                option = report.bind(oscard)();
                oscard = option.enabled;
                report = _closure2_slot3;
                option = oscard.bind(option)(report);
                oscard = option.manualActivation;
                report = true;
                option = oscard.bind(option)(report);
                oscard = option.maxPointers;
                report = 1;
                option = oscard.bind(option)(report);
                oscard = option.shouldCancelWhenOutside;
                report = false;
                option = oscard.bind(option)(report);
                oscard = option.onBegin;
                report = function(argFoo) { // Original name: V
                    oscard = argFoo;
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 6;
                    michal = michal[entity];
                    entity = undefined;
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = _closure2_slot6;
                    michal = {'x': 0, 'y': 0};
                    michal = tangon.bind(entity)(zuuluu, michal);
                    tangon = _closure2_slot10;
                    zuuluu = tangon.set;
                    michal = {};
                    golfie = oscard.absoluteX;
                    michal['absoluteXStart'] = golfie;
                    golfie = oscard.absoluteY;
                    michal['absoluteYStart'] = golfie;
                    golfie = false;
                    michal['active'] = golfie;
                    option = oscard.absoluteY;
                    golfie = _closure2_slot8;
                    verify = golfie.height;
                    golfie = _closure2_slot9;
                    offset = golfie.bottom;
                    golfie = 2;
                    golfie = golfie * offset;
                    golfie = verify - golfie;
                    golfie = option > golfie;
                    michal['cancel'] = golfie;
                    golfie = oscard.absoluteY;
                    oscard = _closure2_slot8;
                    option = oscard.height;
                    oscard = _closure2_slot9;
                    oscard = oscard.bottom;
                    oscard = option - oscard;
                    oscard = golfie > oscard;
                    michal['gestureInBottomSafeArea'] = oscard;
                    report = _closure2_slot5;
                    michal['requiresPop'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                };
                backup = {};
                yankee = _closure1_slot1;
                offset = 6;
                kiloes = foxtra[offset];
                kiloes = yankee.bind(romeon)(kiloes);
                backup['updateSharedValueIfChanged'] = kiloes;
                kiloes = _closure2_slot6;
                backup['wrapperOffset'] = kiloes;
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
                option = oscard.bind(option)(report);
                oscard = option.onTouchesMove;
                report = function(argFoo, argBar) { // Original name: C
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        golfie = argFoo;
                        michal = argBar;
                        zuuluu = _closure1_slot4;
                        if(!zuuluu) { _fun00006_ip = 44; continue _fun00005 }
 16:
                        tangon = _closure2_slot10;
                        zuuluu = tangon.get;
                        zuuluu = zuuluu.bind(tangon)();
                        zuuluu = zuuluu.gestureInBottomSafeArea;
                        if(zuuluu) { _fun00006_ip = 481; continue _fun00005 }
 44:
                        tangon = _closure2_slot10;
                        zuuluu = tangon.get;
                        zuuluu = zuuluu.bind(tangon)();
                        zuuluu = zuuluu.cancel;
                        if(zuuluu) { _fun00006_ip = 469; continue _fun00005 }
 72:
                        tangon = golfie.state;
                        oscard = _closure1_slot0;
                        option = _closure1_slot2;
                        zuuluu = 5;
                        zuuluu = option[zuuluu];
                        option = undefined;
                        zuuluu = oscard.bind(option)(zuuluu);
                        zuuluu = zuuluu.State;
                        zuuluu = zuuluu.BEGAN;
                        if(!(tangon === zuuluu)) { _fun00006_ip = 491; continue _fun00005 }
 118:
                        tangon = _closure2_slot10;
                        zuuluu = tangon.get;
                        zuuluu = zuuluu.bind(tangon)();
                        zuuluu = zuuluu.active;
                        if(zuuluu) { _fun00006_ip = 491; continue _fun00005 }
 143:
                        tangon = _closure1_slot0;
                        oscard = _closure1_slot2;
                        zuuluu = 7;
                        zuuluu = oscard[zuuluu];
                        oscard = tangon.bind(option)(zuuluu);
                        tangon = oscard.calculateXYDiff;
                        zuuluu = _closure2_slot10;
                        zuuluu = tangon.bind(oscard)(golfie, zuuluu);
                        golfie = zuuluu.absoluteX;
                        oscard = zuuluu.absoluteY;
                        yankee = zuuluu.absoluteMovement;
                        verify = zuuluu.isNotPullDownGesture;
                        offset = zuuluu.yDiff;
                        tangon = _closure2_slot0;
                        zuuluu = _closure1_slot6;
                        zuuluu = zuuluu.PANEL;
                        if(!(tangon !== zuuluu)) { _fun00006_ip = 315; continue _fun00005 }
 227:
                        tangon = _closure2_slot0;
                        zuuluu = _closure1_slot6;
                        zuuluu = zuuluu.PIP;
                        tangon = tangon === zuuluu;
                        if(!tangon) { _fun00006_ip = 256; continue _fun00005 }
 248:
                        zuuluu = _closure1_slot5;
                        tangon = yankee > zuuluu;
 256:
                        zuuluu = false;
                        if(!tangon) { _fun00006_ip = 343; continue _fun00005 }
 261:
                        yankee = _closure1_slot0;
                        backup = _closure1_slot2;
                        tangon = 4;
                        tangon = backup[tangon];
                        romeon = yankee.bind(option)(tangon);
                        yankee = romeon.runOnJS;
                        foxtra = _closure1_slot1;
                        tangon = 8;
                        tangon = backup[tangon];
                        tangon = foxtra.bind(option)(tangon);
                        tangon = yankee.bind(romeon)(tangon);
                        tangon = tangon.bind(option)();
                        zuuluu = true;
                        _fun00006_ip = 343; continue _fun00005;
 315:
                        tangon = 0;
                        tangon = offset < tangon;
                        zuuluu = true;
                        if(tangon) { _fun00006_ip = 343; continue _fun00005 }
 326:
                        zuuluu = false;
                        if(!verify) { _fun00006_ip = 343; continue _fun00005 }
 331:
                        verify = michal.fail;
                        verify = verify.bind(michal)();
                        zuuluu = false;
 343:
                        if(!zuuluu) { _fun00006_ip = 491; continue _fun00005 }
 349:
                        zuuluu = _closure1_slot1;
                        tangon = _closure1_slot2;
                        entity = 6;
                        entity = tangon[entity];
                        tangon = zuuluu.bind(option)(entity);
                        zuuluu = _closure2_slot6;
                        entity = {'x': 0, 'y': 0, 'gestureActive': true};
                        entity = tangon.bind(option)(zuuluu, entity);
                        tangon = _closure2_slot10;
                        zuuluu = tangon.set;
                        entity = {'absoluteXStart': null, 'absoluteYStart': null, 'active': true, 'cancel': false, 'gestureInBottomSafeArea': false};
                        entity['absoluteXStart'] = golfie;
                        entity['absoluteYStart'] = oscard;
                        oscard = _closure2_slot10;
                        report = oscard.get;
                        report = report.bind(oscard)();
                        report = report.requiresPop;
                        entity['requiresPop'] = report;
                        entity = zuuluu.bind(tangon)(entity);
                        entity = michal.activate;
                        entity = entity.bind(michal)();
                        _fun00006_ip = 491; continue _fun00005;
 469:
                        entity = michal.fail;
                        entity = entity.bind(michal)();
                        _fun00006_ip = 491; continue _fun00005;
 481:
                        entity = michal.activate;
                        entity = entity.bind(michal)();
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
                sizing = foxtra[sizing];
                sizing = output.bind(romeon)(sizing);
                sizing = sizing.State;
                backup['State'] = sizing;
                sizing = 7;
                result = foxtra[sizing];
                result = output.bind(romeon)(result);
                result = result.calculateXYDiff;
                backup['calculateXYDiff'] = result;
                echoed = _closure2_slot0;
                backup['mode'] = echoed;
                result = _closure1_slot6;
                backup['MorphablePanelModes'] = result;
                update = _closure1_slot5;
                backup['MIN_PAN_GESTURE_MOVE'] = update;
                update = 4;
                source = foxtra[update];
                source = output.bind(romeon)(source);
                source = source.runOnJS;
                backup['runOnJS'] = source;
                source = 8;
                source = foxtra[source];
                source = yankee.bind(romeon)(source);
                backup['triggerIOSHaptic'] = source;
                source = foxtra[offset];
                source = yankee.bind(romeon)(source);
                backup['updateSharedValueIfChanged'] = source;
                backup['wrapperOffset'] = kiloes;
                report['__closure'] = backup;
                backup = 14725552970763.0;
                report['__workletHash'] = backup;
                backup = _closure1_slot12;
                report['__initData'] = backup;
                option = oscard.bind(option)(report);
                oscard = option.onChange;
                report = function(argFoo) { // Original name: H
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        zuuluu = argFoo;
                        report = _closure2_slot0;
                        tangon = _closure1_slot6;
                        tangon = tangon.PIP;
                        if(!(report === tangon)) { _fun00008_ip = 146; continue _fun00007 }
 27:
                        report = _closure1_slot1;
                        oscard = _closure1_slot2;
                        tangon = 6;
                        tangon = oscard[tangon];
                        golfie = undefined;
                        oscard = report.bind(golfie)(tangon);
                        report = _closure2_slot6;
                        tangon = {};
                        verify = _closure2_slot10;
                        option = verify.get;
                        option = option.bind(verify)();
                        verify = option.absoluteXStart;
                        option = zuuluu.absoluteX;
                        option = verify - option;
                        verify = -1;
                        option = verify * option;
                        tangon['x'] = option;
                        offset = _closure2_slot10;
                        option = offset.get;
                        option = option.bind(offset)();
                        offset = option.absoluteYStart;
                        option = zuuluu.absoluteY;
                        option = offset - option;
                        option = verify * option;
                        tangon['y'] = option;
                        tangon = oscard.bind(golfie)(report, tangon);
                        _fun00008_ip = 517; continue _fun00007;
 146:
                        tangon = _closure2_slot9;
                        report = tangon.top;
                        oscard = _closure2_slot10;
                        tangon = oscard.get;
                        tangon = tangon.bind(oscard)();
                        tangon = tangon.absoluteYStart;
                        zuuluu = zuuluu.absoluteY;
                        tangon = tangon - zuuluu;
                        zuuluu = -1;
                        zuuluu = zuuluu * tangon;
                        oscard = _closure2_slot10;
                        tangon = oscard.get;
                        tangon = tangon.bind(oscard)();
                        tangon = tangon.requiresPop;
                        tangon = !tangon;
                        if(!tangon) { _fun00008_ip = 223; continue _fun00007 }
 219:
                        tangon = zuuluu <= report;
 223:
                        if(!tangon) { _fun00008_ip = 273; continue _fun00007 }
 226:
                        oscard = _closure2_slot10;
                        report = oscard.set;
                        tangon = {};
                        option = _closure2_slot10;
                        golfie = option.get;
                        foxtra = golfie.bind(option)();
                        backup = tangon;
                        golfie = copyDataProperties(backup, foxtra);
                        option = true;
                        golfie = 'requiresPop';
                        tangon[golfie] = option;
                        tangon = report.bind(oscard)(tangon);
 273:
                        report = _closure2_slot10;
                        tangon = report.get;
                        tangon = tangon.bind(report)();
                        tangon = tangon.requiresPop;
                        report = zuuluu;
                        if(!tangon) { _fun00008_ip = 473; continue _fun00007 }
 301:
                        tangon = global;
                        golfie = tangon.Math;
                        oscard = golfie.max;
                        tangon = 0;
                        tangon = oscard.bind(golfie)(zuuluu, tangon);
                        oscard = _closure1_slot8;
                        if(!(!(tangon <= oscard))) { _fun00008_ip = 461; continue _fun00007 }
 333:
                        option = _closure2_slot10;
                        golfie = option.set;
                        oscard = {};
                        offset = _closure2_slot10;
                        verify = offset.get;
                        foxtra = verify.bind(offset)();
                        backup = oscard;
                        verify = copyDataProperties(backup, foxtra);
                        offset = false;
                        verify = 'requiresPop';
                        oscard[verify] = offset;
                        oscard = golfie.bind(option)(oscard);
                        verify = _closure1_slot0;
                        offset = _closure1_slot2;
                        oscard = 4;
                        oscard = offset[oscard];
                        option = undefined;
                        romeon = verify.bind(option)(oscard);
                        yankee = romeon.runOnJS;
                        oscard = 9;
                        golfie = offset[oscard];
                        golfie = verify.bind(option)(golfie);
                        golfie = golfie.triggerHapticFeedback;
                        golfie = yankee.bind(romeon)(golfie);
                        oscard = offset[oscard];
                        oscard = verify.bind(option)(oscard);
                        oscard = oscard.HapticFeedbackTypes;
                        oscard = oscard.IMPACT_MEDIUM;
                        oscard = golfie.bind(option)(oscard);
                        report = zuuluu;
                        _fun00008_ip = 473; continue _fun00007;
 461:
                        zuuluu = _closure1_slot9;
                        zuuluu = tangon * zuuluu;
                        report = tangon - zuuluu;
 473:
                        zuuluu = _closure1_slot1;
                        tangon = _closure1_slot2;
                        michal = 6;
                        michal = tangon[michal];
                        tangon = undefined;
                        zuuluu = zuuluu.bind(tangon)(michal);
                        michal = _closure2_slot6;
                        entity = {};
                        entity['y'] = report;
                        report = 0;
                        entity['x'] = report;
                        entity = zuuluu.bind(tangon)(michal, entity);
 517:
                        entity = undefined;
                        return entity;
                    }
                };
                backup = {};
                backup['mode'] = echoed;
                backup['MorphablePanelModes'] = result;
                source = _closure2_slot9;
                backup['safeArea'] = source;
                source = _closure2_slot10;
                backup['initialGestureOffset'] = source;
                source = _closure1_slot9;
                backup['POP_RESISTANCE'] = source;
                source = _closure1_slot8;
                backup['PIP_POP_HEIGHT'] = source;
                update = foxtra[update];
                update = output.bind(romeon)(update);
                update = update.runOnJS;
                backup['runOnJS'] = update;
                update = 9;
                source = foxtra[update];
                source = output.bind(romeon)(source);
                source = source.triggerHapticFeedback;
                backup['triggerHapticFeedback'] = source;
                update = foxtra[update];
                update = output.bind(romeon)(update);
                update = update.HapticFeedbackTypes;
                backup['HapticFeedbackTypes'] = update;
                update = foxtra[offset];
                update = yankee.bind(romeon)(update);
                backup['updateSharedValueIfChanged'] = update;
                backup['wrapperOffset'] = kiloes;
                report['__closure'] = backup;
                backup = 3361121405260.0;
                report['__workletHash'] = backup;
                backup = _closure1_slot13;
                report['__initData'] = backup;
                option = oscard.bind(option)(report);
                oscard = option.onTouchesCancelled;
                report = function() { // Original name: D
                    tangon = _closure1_slot1;
                    oscard = _closure1_slot2;
                    zuuluu = 6;
                    michal = oscard[zuuluu];
                    entity = undefined;
                    verify = tangon.bind(entity)(michal);
                    option = _closure2_slot10;
                    golfie = {};
                    report = false;
                    golfie['active'] = report;
                    golfie = verify.bind(entity)(option, golfie);
                    zuuluu = oscard[zuuluu];
                    tangon = tangon.bind(entity)(zuuluu);
                    zuuluu = _closure2_slot6;
                    michal = {};
                    michal['gestureActive'] = report;
                    michal = tangon.bind(entity)(zuuluu, michal);
                    return entity;
                };
                backup = {};
                update = foxtra[offset];
                update = yankee.bind(romeon)(update);
                backup['updateSharedValueIfChanged'] = update;
                update = _closure2_slot10;
                backup['initialGestureOffset'] = update;
                backup['wrapperOffset'] = kiloes;
                report['__closure'] = backup;
                backup = 947098660135.0;
                report['__workletHash'] = backup;
                backup = _closure1_slot14;
                report['__initData'] = backup;
                option = oscard.bind(option)(report);
                oscard = option.onEnd;
                report = function(argFoo) { // Original name: X
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        michal = argFoo;
                        tangon = _closure2_slot10;
                        zuuluu = tangon.get;
                        zuuluu = zuuluu.bind(tangon)();
                        zuuluu = zuuluu.cancel;
                        if(zuuluu) { _fun00010_ip = 414; continue _fun00009 }
 31:
                        yankee = michal.velocityX;
                        offset = michal.velocityY;
                        verify = michal.absoluteX;
                        option = michal.absoluteY;
                        tangon = _closure2_slot0;
                        zuuluu = _closure1_slot6;
                        zuuluu = zuuluu.PIP;
                        if(!(tangon !== zuuluu)) { _fun00010_ip = 210; continue _fun00009 }
 79:
                        tangon = _closure2_slot0;
                        zuuluu = _closure1_slot6;
                        zuuluu = zuuluu.PANEL;
                        if(!(tangon === zuuluu)) { _fun00010_ip = 368; continue _fun00009 }
 100:
                        golfie = 0;
                        if(!(offset > golfie)) { _fun00010_ip = 368; continue _fun00009 }
 109:
                        tangon = _closure2_slot10;
                        zuuluu = tangon.get;
                        zuuluu = zuuluu.bind(tangon)();
                        zuuluu = zuuluu.requiresPop;
                        if(zuuluu) { _fun00010_ip = 368; continue _fun00009 }
 134:
                        tangon = _closure1_slot1;
                        report = _closure1_slot2;
                        zuuluu = 6;
                        zuuluu = report[zuuluu];
                        report = undefined;
                        oscard = tangon.bind(report)(zuuluu);
                        tangon = _closure2_slot6;
                        zuuluu = {};
                        zuuluu['x'] = golfie;
                        golfie = _closure2_slot8;
                        golfie = golfie.height;
                        zuuluu['y'] = golfie;
                        zuuluu = oscard.bind(report)(tangon, zuuluu);
                        tangon = _closure2_slot1;
                        zuuluu = null;
                        zuuluu = zuuluu == tangon;
                        if(zuuluu) { _fun00010_ip = 206; continue _fun00009 }
 198:
                        tangon = _closure2_slot1;
                        zuuluu = tangon.bind(report)();
 206:
                        zuuluu = undefined;
                        return zuuluu;
 210:
                        tangon = _closure1_slot0;
                        report = _closure1_slot2;
                        zuuluu = 7;
                        zuuluu = report[zuuluu];
                        oscard = undefined;
                        golfie = tangon.bind(oscard)(zuuluu);
                        tangon = golfie.calculatePIPPositionFromVelocity;
                        zuuluu = {};
                        zuuluu['velocityX'] = yankee;
                        zuuluu['velocityY'] = offset;
                        zuuluu['absoluteX'] = verify;
                        zuuluu['absoluteY'] = option;
                        option = _closure2_slot8;
                        zuuluu['windowDimensions'] = option;
                        option = _closure2_slot9;
                        zuuluu['safeArea'] = option;
                        option = _closure2_slot7;
                        zuuluu['disableHorizontalSafeAreas'] = option;
                        zuuluu = tangon.bind(golfie)(zuuluu);
                        option = zuuluu.pipX;
                        golfie = zuuluu.pipY;
                        tangon = _closure1_slot1;
                        zuuluu = 6;
                        verify = report[zuuluu];
                        yankee = tangon.bind(oscard)(verify);
                        offset = _closure2_slot6;
                        verify = {};
                        romeon = false;
                        verify['gestureActive'] = romeon;
                        verify = yankee.bind(oscard)(offset, verify);
                        zuuluu = report[zuuluu];
                        report = tangon.bind(oscard)(zuuluu);
                        tangon = _closure2_slot4;
                        zuuluu = {};
                        zuuluu['x'] = option;
                        zuuluu['y'] = golfie;
                        zuuluu = report.bind(oscard)(tangon, zuuluu);
 368:
                        zuuluu = _closure1_slot1;
                        tangon = _closure1_slot2;
                        michal = 6;
                        michal = tangon[michal];
                        tangon = undefined;
                        zuuluu = zuuluu.bind(tangon)(michal);
                        michal = _closure2_slot6;
                        entity = {'x': 0, 'y': 0, 'gestureActive': false};
                        entity = zuuluu.bind(tangon)(michal, entity);
 414:
                        entity = undefined;
                        return entity;
                    }
                };
                backup = {};
                update = _closure2_slot10;
                backup['initialGestureOffset'] = update;
                backup['mode'] = echoed;
                backup['MorphablePanelModes'] = result;
                sizing = foxtra[sizing];
                sizing = output.bind(romeon)(sizing);
                sizing = sizing.calculatePIPPositionFromVelocity;
                backup['calculatePIPPositionFromVelocity'] = sizing;
                sizing = _closure2_slot8;
                backup['windowDimensions'] = sizing;
                sizing = _closure2_slot9;
                backup['safeArea'] = sizing;
                sizing = _closure2_slot7;
                backup['disableHorizontalSafeAreas'] = sizing;
                sizing = foxtra[offset];
                sizing = yankee.bind(romeon)(sizing);
                backup['updateSharedValueIfChanged'] = sizing;
                backup['wrapperOffset'] = kiloes;
                kiloes = _closure2_slot4;
                backup['pipState'] = kiloes;
                kiloes = _closure2_slot1;
                backup['onPanMinimizeGestureEnd'] = kiloes;
                report['__closure'] = backup;
                backup = 226395881238.0;
                report['__workletHash'] = backup;
                backup = _closure1_slot15;
                report['__initData'] = backup;
                oscard = oscard.bind(option)(report);
                report = oscard.onFinalize;
                entity = function() { // Original name: t
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 6;
                    michal = michal[entity];
                    entity = undefined;
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = _closure2_slot10;
                    michal = {'active': false, 'cancel': false};
                    michal = tangon.bind(entity)(zuuluu, michal);
                    return entity;
                };
                option = {};
                offset = foxtra[offset];
                offset = yankee.bind(romeon)(offset);
                option['updateSharedValueIfChanged'] = offset;
                verify = _closure2_slot10;
                option['initialGestureOffset'] = verify;
                entity['__closure'] = option;
                option = 12518028808028.0;
                entity['__workletHash'] = option;
                golfie = _closure1_slot16;
                entity['__initData'] = golfie;
                entity = report.bind(oscard)(entity);
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    zuuluu['MorphablePanelModes'] = michal;
    return entity;
})();