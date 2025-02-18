// app/modules/activities/panel/native/ActivityPanelFocusedView.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    romeon = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = romeon;
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
    golfie = tangon.bind(entity)(golfie);
    var _closure1_slot3 = golfie;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    foxtra = tangon.StyleSheet;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ActivityLayoutMode;
    var _closure1_slot7 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.ACTIVITY_LAYOUT_PHYSICS_GESTURE;
    var _closure1_slot8 = option;
    tangon = tangon.ACTIVITY_LAYOUT_PHYSICS_DEFAULT;
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.DEFAULT_PORTRAIT_SAFE_AREAS_CONFIG;
    var _closure1_slot10 = option;
    option = tangon.DEFAULT_PORTRAIT_LETTERBOX_CONFIG;
    var _closure1_slot11 = option;
    tangon = tangon.DEFAULT_LANDSCAPE_PILLERBOX_CONFIG;
    var _closure1_slot12 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ThemeTypes;
    var _closure1_slot13 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.IS_IOS;
    var _closure1_slot14 = tangon;
    tangon = 10;
    option = oscard[tangon];
    option = report.bind(entity)(option);
    option = option.jsx;
    var _closure1_slot15 = option;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsxs;
    var _closure1_slot16 = tangon;
    tangon = {};
    option = 300;
    tangon['duration'] = option;
    var _closure1_slot17 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    verify = report.bind(entity)(tangon);
    option = verify.createStyles;
    tangon = {};
    offset = {'position': 'absolute', 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center', 'overflow': 'hidden'};
    yankee = 12;
    backup = oscard[yankee];
    backup = romeon.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BG_BASE_PRIMARY;
    offset['backgroundColor'] = backup;
    tangon['wrapper'] = offset;
    offset = {};
    sizing = foxtra.absoluteFillObject;
    output = offset;
    foxtra = copyDataProperties(output, sizing);
    yankee = oscard[yankee];
    yankee = romeon.bind(entity)(yankee);
    yankee = yankee.colors;
    romeon = yankee.BLACK;
    yankee = 'backgroundColor';
    offset[yankee] = romeon;
    tangon['shade'] = offset;
    tangon = option.bind(verify)(tangon);
    var _closure1_slot18 = tangon;
    tangon = {};
    option = "function ActivityPanelFocusedViewTsx1(){const{wrapperDimensions,lg,IS_IOS,animatedKeyboard,windowDimensions,safeArea,shown,wrapperOffset,transitionState,TransitionStates,runOnJS,transitionCleanUp,reduceMotion,withTiming,REDUCED_MOTION_TIMING,withSpring,ACTIVITY_LAYOUT_PHYSICS_GESTURE,ACTIVITY_LAYOUT_PHYSICS_DEFAULT}=this.__closure;const topBorderRadius=!wrapperDimensions.isWindowLandscape?lg:0;const keyboardHeight=IS_IOS?animatedKeyboard.get():0;const width=windowDimensions.width;const height=windowDimensions.height-keyboardHeight-(!wrapperDimensions.isWindowLandscape?safeArea.top:0);const y=shown.get()?wrapperOffset.get().y:windowDimensions.height;const transitionComplete=function(finished=false){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(transitionCleanUp)();}};const targetOpacity=reduceMotion&&shown.get()?1-wrapperOffset.get().y/windowDimensions.height:0;return{opacity:reduceMotion?withTiming(targetOpacity,REDUCED_MOTION_TIMING,shown.get()&&wrapperOffset.get().gestureActive?'animate-never':'animate-always',transitionComplete):1,transform:[{translateY:!reduceMotion?withSpring(y,wrapperOffset.get().gestureActive&&transitionState!==TransitionStates.YEETED?ACTIVITY_LAYOUT_PHYSICS_GESTURE:ACTIVITY_LAYOUT_PHYSICS_DEFAULT,'animate-always',transitionComplete):0}],top:!wrapperDimensions.isWindowLandscape?safeArea.top:0,width:width,height:height,borderTopStartRadius:topBorderRadius,borderTopEndRadius:topBorderRadius};}";
    tangon['code'] = option;
    var _closure1_slot19 = tangon;
    tangon = {};
    option = 'function ActivityPanelFocusedViewTsx2(finished=false){const{transitionState,TransitionStates,runOnJS,transitionCleanUp}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(transitionCleanUp)();}}';
    tangon['code'] = option;
    var _closure1_slot20 = tangon;
    tangon = {};
    option = 'function ActivityPanelFocusedViewTsx3(){const{wrapperOffset,shown,windowDimensions,withSpring,ACTIVITY_LAYOUT_PHYSICS_DEFAULT}=this.__closure;const opacity=function(){if(!wrapperOffset.get().gestureActive){return shown.get()?1:0;}return 1-wrapperOffset.get().y/windowDimensions.height;}();return{opacity:withSpring(opacity,ACTIVITY_LAYOUT_PHYSICS_DEFAULT)};}';
    tangon['code'] = option;
    var _closure1_slot21 = tangon;
    tangon = {};
    option = 'function ActivityPanelFocusedViewTsx4(){const{IS_IOS,animatedKeyboard,wrapperDimensions}=this.__closure;const keyboardHeight=IS_IOS?animatedKeyboard.get():0;return{width:wrapperDimensions.width,height:wrapperDimensions.height-keyboardHeight};}';
    tangon['code'] = option;
    var _closure1_slot22 = tangon;
    tangon = golfie.memo;
    michal = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            ctrled = michal.transitionState;
            var _closure2_slot0 = ctrled;
            source = michal.transitionCleanUp;
            var _closure2_slot1 = source;
            romeon = undefined;
            var _closure2_slot16 = romeon;
            var _closure2_slot17 = romeon;
            var _closure2_slot18 = romeon;
            var _closure2_slot19 = romeon;
            verify = _closure1_slot0;
            backup = _closure1_slot2;
            zuuluu = 13;
            tangon = backup[zuuluu];
            golfie = verify.bind(romeon)(tangon);
            oscard = golfie.useStateFromStores;
            tangon = _closure1_slot4;
            report = new Array(1);
            report[0] = tangon;
            tangon = function() {
                entity = _closure1_slot4;
                entity = entity.useReducedMotion;
                return entity;
            };
            update = oscard.bind(golfie)(report, tangon);
            var _closure2_slot2 = update;
            tangon = _closure1_slot18;
            oscard = tangon.bind(romeon)();
            var _closure2_slot3 = oscard;
            golfie = _closure1_slot1;
            tangon = 14;
            tangon = backup[tangon];
            tangon = golfie.bind(romeon)(tangon);
            vacuum = tangon.bind(romeon)();
            var _closure2_slot4 = vacuum;
            tangon = 15;
            tangon = backup[tangon];
            tangon = golfie.bind(romeon)(tangon);
            offset = tangon.bind(romeon)();
            var _closure2_slot5 = offset;
            echoed = _closure1_slot3;
            report = echoed.useContext;
            tangon = 16;
            tangon = backup[tangon];
            tangon = golfie.bind(romeon)(tangon);
            tangon = report.bind(echoed)(tangon);
            foxtra = tangon.wrapperDimensions;
            var _closure2_slot6 = foxtra;
            config = tangon.wrapperOffset;
            var _closure2_slot7 = config;
            tangon = 17;
            tangon = backup[tangon];
            report = verify.bind(romeon)(tangon);
            tangon = report.useLockedWebView;
            tangon = tangon.bind(report)(ctrled);
            sequen = tangon.shown;
            var _closure2_slot8 = sequen;
            tangon = tangon.renderWebView;
            report = 18;
            report = backup[report];
            report = golfie.bind(romeon)(report);
            kiloes = report.bind(romeon)();
            var _closure2_slot9 = kiloes;
            zuuluu = backup[zuuluu];
            sizing = verify.bind(romeon)(zuuluu);
            yankee = sizing.useStateFromStoresObject;
            zuuluu = _closure1_slot6;
            option = new Array(2);
            option[0] = zuuluu;
            zuuluu = _closure1_slot5;
            option[1] = zuuluu;
            report = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure1_slot6;
                    entity = michal.getConnectedActivityChannelId;
                    oscard = entity.bind(michal)();
                    zuuluu = null;
                    entity = zuuluu != oscard;
                    michal = undefined;
                    if(!entity) { _fun00004_ip = 55; continue _fun00003 }
 28:
                    report = _closure1_slot6;
                    entity = report.getSelfEmbeddedActivityForChannel;
                    entity = entity.bind(report)(oscard);
                    report = zuuluu != entity;
                    michal = undefined;
                    if(!report) { _fun00004_ip = 55; continue _fun00003 }
 52:
                    michal = entity;
 55:
                    entity = {};
                    report = _closure1_slot5;
                    tangon = report.getChannel;
                    tangon = tangon.bind(report)(oscard);
                    entity['channel'] = tangon;
                    michal = zuuluu != michal;
                    entity['hasActivity'] = michal;
                    return entity;
                }
            };
            zuuluu = new Array(0);
            zuuluu = yankee.bind(sizing)(option, report, zuuluu);
            yankee = zuuluu.channel;
            var _closure2_slot10 = yankee;
            zuuluu = zuuluu.hasActivity;
            report = 12;
            report = backup[report];
            report = golfie.bind(romeon)(report);
            report = report.radii;
            sizing = report.lg;
            var _closure2_slot11 = sizing;
            option = 19;
            report = backup[option];
            output = verify.bind(romeon)(report);
            golfie = output.useAnimatedStyle;
            report = function() { // Original name: u
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = _closure2_slot6;
                    entity = entity.isWindowLandscape;
                    michal = 0;
                    if(entity) { _fun00006_ip = 22; continue _fun00005 }
 18:
                    michal = _closure2_slot11;
 22:
                    entity = _closure1_slot14;
                    zuuluu = 0;
                    if(!entity) { _fun00006_ip = 47; continue _fun00005 }
 34:
                    tangon = _closure2_slot9;
                    entity = tangon.get;
                    zuuluu = entity.bind(tangon)();
 47:
                    entity = _closure2_slot4;
                    tangon = entity.width;
                    entity = entity.height;
                    zuuluu = entity - zuuluu;
                    entity = _closure2_slot6;
                    golfie = entity.isWindowLandscape;
                    entity = 0;
                    if(golfie) { _fun00006_ip = 89; continue _fun00005 }
 80:
                    golfie = _closure2_slot5;
                    entity = golfie.top;
 89:
                    zuuluu = zuuluu - entity;
                    golfie = _closure2_slot8;
                    entity = golfie.get;
                    entity = entity.bind(golfie)();
                    if(entity) { _fun00006_ip = 120; continue _fun00005 }
 109:
                    entity = _closure2_slot4;
                    backup = entity.height;
                    _fun00006_ip = 138; continue _fun00005;
 120:
                    golfie = _closure2_slot7;
                    entity = golfie.get;
                    entity = entity.bind(golfie)();
                    backup = entity.y;
 138:
                    entity = function() {
                        entity = function() { // Original name: ActivityPanelFocusedViewTsx2
                            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                                michal = arguments[0];
                                entity = undefined;
                                if(!(michal === entity)) { _fun00008_ip = 11; continue _fun00007 }
 9:
                                michal = false;
 11:
                                if(!michal) { _fun00008_ip = 60; continue _fun00007 }
 14:
                                tangon = _closure2_slot0;
                                report = _closure1_slot0;
                                oscard = _closure1_slot2;
                                zuuluu = 20;
                                zuuluu = oscard[zuuluu];
                                zuuluu = report.bind(entity)(zuuluu);
                                zuuluu = zuuluu.TransitionStates;
                                zuuluu = zuuluu.YEETED;
                                michal = tangon === zuuluu;
 60:
                                if(!michal) { _fun00008_ip = 107; continue _fun00007 }
 63:
                                zuuluu = _closure1_slot0;
                                tangon = _closure1_slot2;
                                michal = 19;
                                michal = tangon[michal];
                                tangon = zuuluu.bind(entity)(michal);
                                zuuluu = tangon.runOnJS;
                                michal = _closure2_slot1;
                                michal = zuuluu.bind(tangon)(michal);
                                michal = michal.bind(entity)();
 107:
                                return entity;
                            }
                        };
                        zuuluu = {};
                        michal = _closure2_slot0;
                        zuuluu['transitionState'] = michal;
                        golfie = _closure1_slot0;
                        option = _closure1_slot2;
                        report = 20;
                        report = option[report];
                        oscard = undefined;
                        report = golfie.bind(oscard)(report);
                        report = report.TransitionStates;
                        zuuluu['TransitionStates'] = report;
                        report = 19;
                        report = option[report];
                        report = golfie.bind(oscard)(report);
                        report = report.runOnJS;
                        zuuluu['runOnJS'] = report;
                        tangon = _closure2_slot1;
                        zuuluu['transitionCleanUp'] = tangon;
                        entity['__closure'] = zuuluu;
                        zuuluu = 2890456430056.0;
                        entity['__workletHash'] = zuuluu;
                        michal = _closure1_slot20;
                        entity['__initData'] = michal;
                        return entity;
                    };
                    output = undefined;
                    foxtra = entity.bind(output)();
                    entity = _closure2_slot2;
                    kiloes = 0;
                    if(!entity) { _fun00006_ip = 218; continue _fun00005 }
 162:
                    golfie = _closure2_slot8;
                    entity = golfie.get;
                    entity = entity.bind(golfie)();
                    kiloes = 0;
                    if(!entity) { _fun00006_ip = 218; continue _fun00005 }
 180:
                    golfie = _closure2_slot7;
                    entity = golfie.get;
                    entity = entity.bind(golfie)();
                    golfie = entity.y;
                    entity = _closure2_slot4;
                    entity = entity.height;
                    golfie = golfie / entity;
                    entity = 1;
                    kiloes = entity - golfie;
 218:
                    entity = {};
                    option = _closure2_slot2;
                    golfie = 1;
                    if(!option) { _fun00006_ip = 334; continue _fun00005 }
 230:
                    offset = _closure1_slot0;
                    yankee = _closure1_slot2;
                    option = 21;
                    option = yankee[option];
                    romeon = offset.bind(output)(option);
                    yankee = romeon.withTiming;
                    offset = _closure1_slot17;
                    sizing = _closure2_slot8;
                    option = sizing.get;
                    sizing = option.bind(sizing)();
                    result = 'animate-always';
                    option = result;
                    if(!sizing) { _fun00006_ip = 315; continue _fun00005 }
 284:
                    echoed = _closure2_slot7;
                    sizing = echoed.get;
                    sizing = sizing.bind(echoed)();
                    sizing = sizing.gestureActive;
                    option = result;
                    if(!sizing) { _fun00006_ip = 315; continue _fun00005 }
 309:
                    option = 'animate-never';
 315:
                    sequen = romeon;
                    vacuum = kiloes;
                    ctrled = offset;
                    source = option;
                    update = foxtra;
                    golfie = sequen[yankee](vacuum, ctrled, source, update, echoed);
 334:
                    entity['opacity'] = golfie;
                    option = {};
                    offset = _closure2_slot2;
                    golfie = 0;
                    if(offset) { _fun00006_ip = 468; continue _fun00005 }
 349:
                    yankee = _closure1_slot0;
                    romeon = _closure1_slot2;
                    offset = 22;
                    offset = romeon[offset];
                    romeon = yankee.bind(output)(offset);
                    yankee = romeon.withSpring;
                    kiloes = _closure2_slot7;
                    offset = kiloes.get;
                    offset = offset.bind(kiloes)();
                    offset = offset.gestureActive;
                    if(!offset) { _fun00006_ip = 436; continue _fun00005 }
 396:
                    kiloes = _closure2_slot0;
                    sizing = _closure1_slot0;
                    result = _closure1_slot2;
                    offset = 20;
                    offset = result[offset];
                    offset = sizing.bind(output)(offset);
                    offset = offset.TransitionStates;
                    offset = offset.YEETED;
                    if(!(kiloes === offset)) { _fun00006_ip = 442; continue _fun00005 }
 436:
                    offset = _closure1_slot9;
                    _fun00006_ip = 446; continue _fun00005;
 442:
                    offset = _closure1_slot8;
 446:
                    source = 'animate-always';
                    sequen = romeon;
                    vacuum = backup;
                    ctrled = offset;
                    update = foxtra;
                    golfie = sequen[yankee](vacuum, ctrled, source, update, echoed);
 468:
                    option['translateY'] = golfie;
                    golfie = new Array(1);
                    golfie[0] = option;
                    entity['transform'] = golfie;
                    golfie = _closure2_slot6;
                    golfie = golfie.isWindowLandscape;
                    report = 0;
                    if(golfie) { _fun00006_ip = 509; continue _fun00005 }
 500:
                    oscard = _closure2_slot5;
                    report = oscard.top;
 509:
                    entity['top'] = report;
                    entity['width'] = tangon;
                    entity['height'] = zuuluu;
                    entity['borderTopStartRadius'] = michal;
                    entity['borderTopEndRadius'] = michal;
                    return entity;
                }
            };
            result = {};
            result['wrapperDimensions'] = foxtra;
            result['lg'] = sizing;
            sizing = _closure1_slot14;
            result['IS_IOS'] = sizing;
            result['animatedKeyboard'] = kiloes;
            result['windowDimensions'] = vacuum;
            result['safeArea'] = offset;
            result['shown'] = sequen;
            result['wrapperOffset'] = config;
            result['transitionState'] = ctrled;
            ctrled = 20;
            ctrled = backup[ctrled];
            ctrled = verify.bind(romeon)(ctrled);
            ctrled = ctrled.TransitionStates;
            result['TransitionStates'] = ctrled;
            ctrled = backup[option];
            ctrled = verify.bind(romeon)(ctrled);
            ctrled = ctrled.runOnJS;
            result['runOnJS'] = ctrled;
            result['transitionCleanUp'] = source;
            result['reduceMotion'] = update;
            update = 21;
            update = backup[update];
            update = verify.bind(romeon)(update);
            update = update.withTiming;
            result['withTiming'] = update;
            update = _closure1_slot17;
            result['REDUCED_MOTION_TIMING'] = update;
            ctrled = 22;
            update = backup[ctrled];
            update = verify.bind(romeon)(update);
            update = update.withSpring;
            result['withSpring'] = update;
            update = _closure1_slot8;
            result['ACTIVITY_LAYOUT_PHYSICS_GESTURE'] = update;
            source = _closure1_slot9;
            result['ACTIVITY_LAYOUT_PHYSICS_DEFAULT'] = source;
            report['__closure'] = result;
            result = 15493395791982.0;
            report['__workletHash'] = result;
            result = _closure1_slot19;
            report['__initData'] = result;
            report = golfie.bind(output)(report);
            var _closure2_slot12 = report;
            golfie = backup[option];
            result = verify.bind(romeon)(golfie);
            output = result.useAnimatedStyle;
            golfie = function() { // Original name: U
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zuuluu = _closure2_slot7;
                    michal = zuuluu.get;
                    michal = michal.bind(zuuluu)();
                    michal = michal.gestureActive;
                    if(michal) { _fun00010_ip = 48; continue _fun00009 }
 25:
                    zuuluu = _closure2_slot8;
                    michal = zuuluu.get;
                    michal = michal.bind(zuuluu)();
                    report = 0;
                    if(!michal) { _fun00010_ip = 46; continue _fun00009 }
 43:
                    report = 1;
 46:
                    _fun00010_ip = 86; continue _fun00009;
 48:
                    zuuluu = _closure2_slot7;
                    michal = zuuluu.get;
                    michal = michal.bind(zuuluu)();
                    michal = michal.y;
                    entity = _closure2_slot4;
                    entity = entity.height;
                    michal = michal / entity;
                    entity = 1;
                    report = entity - michal;
 86:
                    entity = {};
                    oscard = _closure1_slot0;
                    tangon = _closure1_slot2;
                    zuuluu = 22;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    tangon = oscard.bind(zuuluu)(tangon);
                    zuuluu = tangon.withSpring;
                    michal = _closure1_slot9;
                    michal = zuuluu.bind(tangon)(report, michal);
                    entity['opacity'] = michal;
                    return entity;
                }
            };
            update = {};
            update['wrapperOffset'] = config;
            update['shown'] = sequen;
            update['windowDimensions'] = vacuum;
            ctrled = backup[ctrled];
            ctrled = verify.bind(romeon)(ctrled);
            ctrled = ctrled.withSpring;
            update['withSpring'] = ctrled;
            update['ACTIVITY_LAYOUT_PHYSICS_DEFAULT'] = source;
            golfie['__closure'] = update;
            update = 8351375063373.0;
            golfie['__workletHash'] = update;
            update = _closure1_slot21;
            golfie['__initData'] = update;
            golfie = output.bind(result)(golfie);
            var _closure2_slot13 = golfie;
            result = echoed.useMemo;
            output = new Array(2);
            output[0] = report;
            report = oscard.wrapper;
            output[1] = report;
            report = function() {
                entity = _closure2_slot3;
                zuuluu = entity.wrapper;
                entity = new Array(2);
                entity[0] = zuuluu;
                michal = _closure2_slot12;
                entity[1] = michal;
                return entity;
            };
            report = result.bind(echoed)(report, output);
            var _closure2_slot14 = report;
            option = backup[option];
            romeon = verify.bind(romeon)(option);
            verify = romeon.useAnimatedStyle;
            option = function() { // Original name: v
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    entity = _closure1_slot14;
                    zuuluu = 0;
                    if(!entity) { _fun00012_ip = 28; continue _fun00011 }
 12:
                    michal = _closure2_slot9;
                    entity = michal.get;
                    zuuluu = entity.bind(michal)();
 28:
                    entity = {};
                    michal = _closure2_slot6;
                    tangon = michal.width;
                    entity['width'] = tangon;
                    michal = michal.height;
                    michal = michal - zuuluu;
                    entity['height'] = michal;
                    return entity;
                }
            };
            backup = {};
            backup['IS_IOS'] = sizing;
            backup['animatedKeyboard'] = kiloes;
            backup['wrapperDimensions'] = foxtra;
            option['__closure'] = backup;
            backup = 10611243164807.0;
            option['__workletHash'] = backup;
            backup = _closure1_slot22;
            option['__initData'] = backup;
            romeon = verify.bind(romeon)(option);
            var _closure2_slot15 = romeon;
            option = foxtra.isLandscape;
            if(!option) { _fun00002_ip = 835; continue _fun00001 }
 826:
            verify = foxtra.isWindowLandscape;
            option = !verify;
 835:
            verify = foxtra.isLandscape;
            verify = !verify;
            if(!verify) { _fun00002_ip = 853; continue _fun00001 }
 847:
            verify = foxtra.isWindowLandscape;
 853:
            _closure2_slot16 = verify;
            if(option) { _fun00002_ip = 866; continue _fun00001 }
 860:
            option = _closure1_slot10;
            _fun00002_ip = 870; continue _fun00001;
 866:
            option = _closure1_slot11;
 870:
            _closure2_slot17 = option;
            backup = _closure1_slot3;
            foxtra = backup.useMemo;
            kiloes = offset.right;
            offset = new Array(2);
            offset[0] = kiloes;
            offset[1] = verify;
            verify = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    entity = _closure2_slot16;
                    if(entity) { _fun00014_ip = 63; continue _fun00013 }
 10:
                    entity = {};
                    michal = {};
                    tangon = false;
                    michal['disable'] = tangon;
                    tangon = global;
                    oscard = tangon.Math;
                    report = oscard.max;
                    zuuluu = _closure2_slot5;
                    tangon = zuuluu.right;
                    zuuluu = 64;
                    zuuluu = report.bind(oscard)(zuuluu, tangon);
                    michal['override'] = zuuluu;
                    entity['right'] = michal;
                    _fun00014_ip = 70; continue _fun00013;
 63:
                    entity = _closure1_slot12;
 70:
                    return entity;
                }
            };
            verify = foxtra.bind(backup)(verify, offset);
            _closure2_slot18 = verify;
            offset = !tangon;
            if(offset) { _fun00002_ip = 926; continue _fun00001 }
 923:
            offset = !zuuluu;
 926:
            if(offset) { _fun00002_ip = 935; continue _fun00001 }
 929:
            zuuluu = null;
            offset = zuuluu == yankee;
 935:
            _closure2_slot19 = offset;
            tangon = _closure1_slot3;
            zuuluu = tangon.useMemo;
            michal = new Array(8);
            michal[0] = romeon;
            michal[1] = yankee;
            michal[2] = offset;
            michal[3] = verify;
            michal[4] = option;
            michal[5] = golfie;
            oscard = oscard.shade;
            michal[6] = oscard;
            michal[7] = report;
            entity = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    tangon = _closure1_slot16;
                    michal = _closure1_slot0;
                    romeon = _closure1_slot2;
                    entity = 23;
                    entity = romeon[entity];
                    zuuluu = undefined;
                    entity = michal.bind(zuuluu)(entity);
                    michal = entity.ThemeContextProvider;
                    entity = {};
                    report = _closure1_slot13;
                    report = report.DARK;
                    entity['theme'] = report;
                    yankee = _closure1_slot15;
                    offset = _closure1_slot1;
                    option = 19;
                    report = romeon[option];
                    report = offset.bind(zuuluu)(report);
                    oscard = report.View;
                    report = {};
                    golfie = _closure2_slot3;
                    foxtra = golfie.shade;
                    golfie = new Array(2);
                    golfie[0] = foxtra;
                    foxtra = _closure2_slot13;
                    golfie[1] = foxtra;
                    report['style'] = golfie;
                    golfie = 'none';
                    report['pointerEvents'] = golfie;
                    oscard = yankee.bind(zuuluu)(oscard, report);
                    report = new Array(2);
                    report[0] = oscard;
                    oscard = romeon[option];
                    oscard = offset.bind(zuuluu)(oscard);
                    golfie = oscard.View;
                    oscard = {};
                    foxtra = _closure2_slot14;
                    oscard['style'] = foxtra;
                    option = romeon[option];
                    option = offset.bind(zuuluu)(option);
                    offset = option.View;
                    option = {};
                    romeon = _closure2_slot15;
                    option['style'] = romeon;
                    foxtra = _closure2_slot19;
                    romeon = null;
                    if(foxtra) { _fun00016_ip = 265; continue _fun00015 }
 192:
                    kiloes = _closure1_slot15;
                    backup = _closure1_slot1;
                    output = _closure1_slot2;
                    foxtra = 24;
                    foxtra = output[foxtra];
                    backup = backup.bind(zuuluu)(foxtra);
                    foxtra = {};
                    output = _closure2_slot10;
                    foxtra['channel'] = output;
                    output = _closure1_slot7;
                    output = output.FOCUSED;
                    foxtra['layoutMode'] = output;
                    output = _closure2_slot17;
                    foxtra['portraitSafeAreasConfig'] = output;
                    sizing = _closure2_slot18;
                    foxtra['landscapeSafeAreasConfig'] = sizing;
                    romeon = kiloes.bind(zuuluu)(backup, foxtra);
 265:
                    option['children'] = romeon;
                    offset = yankee.bind(zuuluu)(offset, option);
                    option = new Array(2);
                    option[0] = offset;
                    yankee = _closure1_slot15;
                    offset = _closure1_slot1;
                    romeon = _closure1_slot2;
                    verify = 25;
                    verify = romeon[verify];
                    offset = offset.bind(zuuluu)(verify);
                    verify = {};
                    verify = yankee.bind(zuuluu)(offset, verify);
                    option[1] = verify;
                    oscard['children'] = option;
                    oscard = tangon.bind(zuuluu)(golfie, oscard);
                    report[1] = oscard;
                    entity['children'] = report;
                    entity = tangon.bind(zuuluu)(michal, entity);
                    return entity;
                }
            };
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        }
    };
    michal = tangon.bind(golfie)(michal);
    tangon = 26;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/activities/panel/native/ActivityPanelFocusedView.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();