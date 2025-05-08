// app/modules/modals/native/useModalPanGesture.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    tangon = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = tangon;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, oscard);
    entity = {};
    oscard = "function useModalPanGestureTsx1({velocityY:velocityY}){const{translateY,thresholdTranslate,thresholdVelocity,withSpring,height,runOnJS,ModalActionCreators,onClose,onEnd}=this.__closure;const config={damping:15,mass:1,stiffness:250,overshootClamping:true,restSpeedThreshold:0.001,restDisplacementThreshold:0.001,velocity:velocityY};if(translateY.get()>=thresholdTranslate||velocityY>=thresholdVelocity){translateY.set(withSpring(height,config,'respect-motion-settings',function(){runOnJS(ModalActionCreators.pop)();}));if(onClose!=null){runOnJS(onClose)();}}else{translateY.set(withSpring(0,config));}if(onEnd!=null){runOnJS(onEnd)();}}";
    entity['code'] = oscard;
    var _closure1_slot3 = entity;
    entity = {};
    oscard = 'function useModalPanGestureTsx2({translationY:translationY}){const{translateY,interpolate,start,maxTranslate,Extrapolate}=this.__closure;translateY.set(interpolate(start.get().y+translationY,[0,maxTranslate],[0,maxTranslate],Extrapolate.CLAMP));}';
    entity['code'] = oscard;
    var _closure1_slot4 = entity;
    entity = {};
    oscard = 'function useModalPanGestureTsx3(){const{onStart,runOnJS,start,translateY}=this.__closure;if(onStart!=null){runOnJS(onStart)();}start.set({y:translateY.get()});}';
    entity['code'] = oscard;
    var _closure1_slot5 = entity;
    entity = {};
    oscard = 'function useModalPanGestureTsx4(){const{runOnJS,ModalActionCreators}=this.__closure;runOnJS(ModalActionCreators.pop)();}';
    entity['code'] = oscard;
    var _closure1_slot6 = entity;
    entity = 4;
    tangon = tangon[entity];
    entity = undefined;
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/modals/native/useModalPanGesture.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useModalPanGesture
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            foxtra = michal.thresholdVelocity;
            offset = undefined;
            if(!(foxtra === offset)) { _fun00002_ip = 23; continue _fun00001 }
 17:
            foxtra = 500;
 23:
            var _closure2_slot0 = foxtra;
            report = michal.gestureEnabled;
            output = michal.maxTranslate;
            var _closure2_slot1 = output;
            backup = michal.thresholdTranslate;
            var _closure2_slot2 = backup;
            romeon = michal.height;
            var _closure2_slot3 = romeon;
            kiloes = michal.translateY;
            var _closure2_slot4 = kiloes;
            echoed = michal.onStart;
            var _closure2_slot5 = echoed;
            oscard = michal.onEnd;
            var _closure2_slot6 = oscard;
            golfie = michal.onClose;
            var _closure2_slot7 = golfie;
            var _closure2_slot8 = offset;
            verify = _closure1_slot0;
            yankee = _closure1_slot2;
            option = 0;
            michal = yankee[option];
            sizing = verify.bind(offset)(michal);
            zuuluu = sizing.useSharedValue;
            michal = {};
            michal['y'] = option;
            result = zuuluu.bind(sizing)(michal);
            _closure2_slot8 = result;
            michal = 1;
            michal = yankee[michal];
            michal = verify.bind(offset)(michal);
            zuuluu = michal.Gesture;
            michal = zuuluu.Pan;
            zuuluu = michal.bind(zuuluu)();
            michal = zuuluu.enabled;
            report = michal.bind(zuuluu)(report);
            zuuluu = report.onStart;
            michal = function() { // Original name: J
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot5;
                    entity = null;
                    if(!(entity != michal)) { _fun00004_ip = 55; continue _fun00003 }
 13:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 0;
                    entity = michal[entity];
                    michal = undefined;
                    report = zuuluu.bind(michal)(entity);
                    zuuluu = report.runOnJS;
                    entity = _closure2_slot5;
                    entity = zuuluu.bind(report)(entity);
                    entity = entity.bind(michal)();
 55:
                    zuuluu = _closure2_slot8;
                    michal = zuuluu.set;
                    entity = {};
                    report = _closure2_slot4;
                    tangon = report.get;
                    tangon = tangon.bind(report)();
                    entity['y'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
                    entity = undefined;
                    return entity;
                }
            };
            sizing = {};
            sizing['onStart'] = echoed;
            echoed = yankee[option];
            echoed = verify.bind(offset)(echoed);
            echoed = echoed.runOnJS;
            sizing['runOnJS'] = echoed;
            sizing['start'] = result;
            sizing['translateY'] = kiloes;
            michal['__closure'] = sizing;
            sizing = 15847989720945.0;
            michal['__workletHash'] = sizing;
            sizing = _closure1_slot5;
            michal['__initData'] = sizing;
            report = zuuluu.bind(report)(michal);
            zuuluu = report.onUpdate;
            michal = function(argFoo) { // Original name: x
                entity = argFoo;
                golfie = entity.translationY;
                tangon = _closure2_slot4;
                zuuluu = tangon.set;
                offset = _closure1_slot0;
                yankee = _closure1_slot2;
                michal = 0;
                oscard = yankee[michal];
                entity = undefined;
                verify = offset.bind(entity)(oscard);
                option = verify.interpolate;
                romeon = _closure2_slot8;
                oscard = romeon.get;
                oscard = oscard.bind(romeon)();
                oscard = oscard.y;
                golfie = oscard + golfie;
                romeon = _closure2_slot1;
                oscard = [0];
                oscard[1] = romeon;
                report = [0];
                report[1] = romeon;
                michal = yankee[michal];
                michal = offset.bind(entity)(michal);
                michal = michal.Extrapolate;
                foxtra = michal.CLAMP;
                output = verify;
                sizing = golfie;
                kiloes = oscard;
                backup = report;
                michal = output[option](sizing, kiloes, backup, foxtra, romeon);
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            sizing = {};
            sizing['translateY'] = kiloes;
            echoed = yankee[option];
            echoed = verify.bind(offset)(echoed);
            echoed = echoed.interpolate;
            sizing['interpolate'] = echoed;
            sizing['start'] = result;
            sizing['maxTranslate'] = output;
            output = yankee[option];
            output = verify.bind(offset)(output);
            output = output.Extrapolate;
            sizing['Extrapolate'] = output;
            michal['__closure'] = sizing;
            sizing = 6809176231356.0;
            michal['__workletHash'] = sizing;
            sizing = _closure1_slot4;
            michal['__initData'] = sizing;
            zuuluu = zuuluu.bind(report)(michal);
            michal = zuuluu.onEnd;
            entity = function(argFoo) { // Original name: O
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = argFoo;
                    zuuluu = entity.velocityY;
                    romeon = {'damping': 15, 'mass': 1, 'stiffness': 250, 'overshootClamping': true, 'restSpeedThreshold': 0.001, 'restDisplacementThreshold': 0.001};
                    romeon['velocity'] = zuuluu;
                    tangon = _closure2_slot4;
                    michal = tangon.get;
                    tangon = michal.bind(tangon)();
                    michal = _closure2_slot2;
                    if(!(!(tangon >= michal))) { _fun00006_ip = 117; continue _fun00005 }
 52:
                    michal = _closure2_slot0;
                    if(!(!(zuuluu >= michal))) { _fun00006_ip = 117; continue _fun00005 }
 60:
                    tangon = _closure2_slot4;
                    zuuluu = tangon.set;
                    oscard = _closure1_slot0;
                    report = _closure1_slot2;
                    michal = 2;
                    report = report[michal];
                    michal = undefined;
                    oscard = oscard.bind(michal)(report);
                    report = oscard.withSpring;
                    michal = 0;
                    michal = report.bind(oscard)(michal, romeon);
                    michal = zuuluu.bind(tangon)(michal);
                    _fun00006_ip = 316; continue _fun00005;
 117:
                    golfie = _closure2_slot4;
                    oscard = golfie.set;
                    backup = _closure1_slot0;
                    kiloes = _closure1_slot2;
                    zuuluu = 2;
                    tangon = kiloes[zuuluu];
                    zuuluu = undefined;
                    yankee = backup.bind(zuuluu)(tangon);
                    offset = yankee.withSpring;
                    verify = _closure2_slot3;
                    option = function() { // Original name: n
                        tangon = _closure1_slot0;
                        oscard = _closure1_slot2;
                        entity = 0;
                        zuuluu = oscard[entity];
                        entity = undefined;
                        tangon = tangon.bind(entity)(zuuluu);
                        zuuluu = tangon.runOnJS;
                        report = _closure1_slot1;
                        michal = 3;
                        michal = oscard[michal];
                        michal = report.bind(entity)(michal);
                        michal = michal.pop;
                        michal = zuuluu.bind(tangon)(michal);
                        michal = michal.bind(entity)();
                        return entity;
                    };
                    tangon = {};
                    report = 0;
                    foxtra = kiloes[report];
                    foxtra = backup.bind(zuuluu)(foxtra);
                    foxtra = foxtra.runOnJS;
                    tangon['runOnJS'] = foxtra;
                    backup = _closure1_slot1;
                    foxtra = 3;
                    foxtra = kiloes[foxtra];
                    foxtra = backup.bind(zuuluu)(foxtra);
                    tangon['ModalActionCreators'] = foxtra;
                    option['__closure'] = tangon;
                    tangon = 14223008059411.0;
                    option['__workletHash'] = tangon;
                    tangon = _closure1_slot6;
                    option['__initData'] = tangon;
                    output = 'respect-motion-settings';
                    update = yankee;
                    echoed = verify;
                    result = romeon;
                    sizing = option;
                    tangon = update[offset](echoed, result, output, sizing, kiloes);
                    tangon = oscard.bind(golfie)(tangon);
                    oscard = _closure2_slot7;
                    tangon = null;
                    if(!(tangon != oscard)) { _fun00006_ip = 316; continue _fun00005 }
 281:
                    tangon = _closure1_slot0;
                    michal = _closure1_slot2;
                    michal = michal[report];
                    report = tangon.bind(zuuluu)(michal);
                    tangon = report.runOnJS;
                    michal = _closure2_slot7;
                    michal = tangon.bind(report)(michal);
                    michal = michal.bind(zuuluu)();
 316:
                    zuuluu = _closure2_slot6;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00006_ip = 368; continue _fun00005 }
 326:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 0;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = tangon.runOnJS;
                    entity = _closure2_slot6;
                    entity = zuuluu.bind(tangon)(entity);
                    entity = entity.bind(michal)();
 368:
                    entity = undefined;
                    return entity;
                }
            };
            report = {};
            report['translateY'] = kiloes;
            report['thresholdTranslate'] = backup;
            report['thresholdVelocity'] = foxtra;
            foxtra = 2;
            foxtra = yankee[foxtra];
            foxtra = verify.bind(offset)(foxtra);
            foxtra = foxtra.withSpring;
            report['withSpring'] = foxtra;
            report['height'] = romeon;
            option = yankee[option];
            option = verify.bind(offset)(option);
            option = option.runOnJS;
            report['runOnJS'] = option;
            verify = _closure1_slot1;
            option = 3;
            option = yankee[option];
            option = verify.bind(offset)(option);
            report['ModalActionCreators'] = option;
            report['onClose'] = golfie;
            report['onEnd'] = oscard;
            entity['__closure'] = report;
            report = 16881029664873.0;
            entity['__workletHash'] = report;
            tangon = _closure1_slot3;
            entity['__initData'] = tangon;
            zuuluu = michal.bind(zuuluu)(entity);
            michal = zuuluu.failOffsetY;
            entity = -0.01;
            zuuluu = michal.bind(zuuluu)(entity);
            michal = zuuluu.activeOffsetY;
            entity = new Array(2);
            tangon = -5;
            entity[0] = tangon;
            tangon = 15;
            entity[1] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();