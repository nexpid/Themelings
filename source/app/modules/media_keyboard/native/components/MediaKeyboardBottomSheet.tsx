// app/modules/media_keyboard/native/components/MediaKeyboardBottomSheet.tsx
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
    tangon = tangon.StyleSheet;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.HEADER_HANDLE_HEIGHT;
    var _closure1_slot8 = option;
    option = tangon.MEDIA_PICKER_SEND_BUTTON_SPRING;
    var _closure1_slot9 = option;
    tangon = tangon.MediaPickerActionSheetEngagedActions;
    var _closure1_slot10 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AnalyticEvents;
    var _closure1_slot11 = tangon;
    tangon = 7;
    option = oscard[tangon];
    option = report.bind(entity)(option);
    option = option.jsx;
    var _closure1_slot12 = option;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsxs;
    var _closure1_slot13 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    verify = report.bind(entity)(tangon);
    option = verify.createStyles;
    tangon = {};
    offset = {'flex': 1, 'zIndex': 10};
    tangon['androidContainer'] = offset;
    offset = {'position': 'absolute', 'bottom': 0, 'left': 0, 'right': 0};
    tangon['iosContainer'] = offset;
    offset = {};
    yankee = 9;
    foxtra = oscard[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.colors;
    foxtra = foxtra.BG_BASE_SECONDARY;
    offset['backgroundColor'] = foxtra;
    tangon['background'] = offset;
    offset = {'position': 'absolute', 'bottom': 0, 'left': 0, 'right': 0, 'flexDirection': 'column', 'justifyContent': 'flex-end'};
    tangon['sendContainer'] = offset;
    offset = {'flexGrow': 0, 'flexDirection': 'row', 'justifyContent': 'flex-end', 'paddingHorizontal': 12};
    tangon['buttonRowContainer'] = offset;
    offset = {};
    yankee = oscard[yankee];
    yankee = romeon.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.BACKGROUND_SECONDARY;
    offset['color'] = yankee;
    tangon['gradient'] = offset;
    offset = {};
    yankee = 44;
    offset['borderRadius'] = yankee;
    tangon['sendButtonStyle'] = offset;
    tangon = option.bind(verify)(tangon);
    var _closure1_slot14 = tangon;
    tangon = {};
    option = 'function MediaKeyboardBottomSheetTsx1(){const{animatedIndex,INDEX_HEADER_CHANGE_THRESHOLD,numUploads}=this.__closure;return(animatedIndex.get()>INDEX_HEADER_CHANGE_THRESHOLD?1:0)|(numUploads>0?2:0);}';
    tangon['code'] = option;
    var _closure1_slot15 = tangon;
    tangon = {};
    option = 'function MediaKeyboardBottomSheetTsx2(cur,prev){const{deviceOrientation,OrientationType,shouldShowSV,shouldDelaySV,reducedMotion}=this.__closure;if(cur!==prev){const curNearTop=(cur&1)===1;const prevNearTop=((prev!==null&&prev!==void 0?prev:0)&1)===1;const curHasUploads=(cur&2)===2;const isLandscape=deviceOrientation===OrientationType.LANDSCAPE;shouldShowSV.set((curNearTop||isLandscape)&&curHasUploads);shouldDelaySV.set(!reducedMotion&&!prevNearTop&&shouldShowSV.get());}}';
    tangon['code'] = option;
    var _closure1_slot16 = tangon;
    tangon = {};
    option = "function MediaKeyboardBottomSheetTsx3(){const{shouldShowSV}=this.__closure;return{pointerEvents:shouldShowSV.get()?'box-none':'none'};}";
    tangon['code'] = option;
    var _closure1_slot17 = tangon;
    tangon = {};
    option = 'function MediaKeyboardBottomSheetTsx4(){const{shouldShowSV,reducedMotion,withSpring,MEDIA_PICKER_SEND_BUTTON_SPRING}=this.__closure;const targetOpacity=shouldShowSV.get()?1:0;return{opacity:reducedMotion?targetOpacity:withSpring(targetOpacity,{...MEDIA_PICKER_SEND_BUTTON_SPRING,overshootClamping:true})};}';
    tangon['code'] = option;
    var _closure1_slot18 = tangon;
    tangon = {};
    option = 'function MediaKeyboardBottomSheetTsx5(){const{shouldShowSV,reducedMotion,withSpring,MEDIA_PICKER_SEND_BUTTON_SPRING}=this.__closure;const targetTranslateY=shouldShowSV.get()?0:60;const targetScale=shouldShowSV.get()?1:0.9;return{transform:[{translateY:reducedMotion?targetTranslateY:withSpring(targetTranslateY,MEDIA_PICKER_SEND_BUTTON_SPRING)},{scale:reducedMotion?targetScale:withSpring(targetScale,MEDIA_PICKER_SEND_BUTTON_SPRING)}]};}';
    tangon['code'] = option;
    var _closure1_slot19 = tangon;
    tangon = golfie.memo;
    michal = function(argFoo) { // Original name: MediaKeyboardBottomSheet
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            romeon = entity.children;
            foxtra = entity.channel;
            var _closure2_slot0 = foxtra;
            yankee = entity.draftType;
            var _closure2_slot1 = yankee;
            cntext = entity.handleComponent;
            update = entity.onClose;
            var _closure2_slot2 = update;
            sizing = entity.onSend;
            quebec = entity.transitionState;
            var _closure2_slot3 = quebec;
            sierra = entity.animationConfigs;
            equals = _closure1_slot3;
            zuuluu = equals.useContext;
            option = _closure1_slot0;
            entity = _closure1_slot2;
            michal = 10;
            michal = entity[michal];
            tangon = undefined;
            michal = option.bind(tangon)(michal);
            michal = michal.PortalKeyboardContext;
            michal = zuuluu.bind(equals)(michal);
            status = michal.animatedSheetIndex;
            var _closure2_slot4 = status;
            target = michal.animatedSheetPosition;
            report = michal.androidNavScrimStyle;
            michal = michal.bottomSheetRefs;
            limora = michal.media;
            var _closure2_slot5 = limora;
            michal = _closure1_slot14;
            kiloes = michal.bind(tangon)();
            var _closure2_slot6 = kiloes;
            michal = 11;
            michal = entity[michal];
            zuuluu = option.bind(tangon)(michal);
            michal = zuuluu.useAndroidNavScrim;
            michal = michal.bind(zuuluu)(report);
            offset = michal.scrim;
            ctrled = michal.scrimHeight;
            michal = _closure1_slot1;
            zuuluu = 12;
            zuuluu = entity[zuuluu];
            zuuluu = michal.bind(tangon)(zuuluu);
            zuuluu = zuuluu.bind(tangon)();
            vacuum = zuuluu.height;
            var _closure2_slot7 = vacuum;
            zuuluu = 13;
            zuuluu = entity[zuuluu];
            report = option.bind(tangon)(zuuluu);
            zuuluu = report.useKeyboardActionSheetHeight;
            report = zuuluu.bind(report)();
            zuuluu = report.minimum;
            var _closure2_slot8 = zuuluu;
            config = report.maximum;
            var _closure2_slot9 = config;
            verify = equals.useCallback;
            golfie = function(argFoo) {
                tangon = _closure1_slot12;
                michal = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 14;
                entity = zuuluu[entity];
                zuuluu = undefined;
                entity = michal.bind(zuuluu)(entity);
                michal = entity.BottomSheetBackdrop;
                entity = {};
                golfie = argFoo;
                option = entity;
                report = copyDataProperties(option, golfie);
                oscard = 'collapse';
                report = 'pressBehavior';
                entity[report] = oscard;
                entity = tangon.bind(zuuluu)(michal, entity);
                return entity;
            };
            report = new Array(0);
            record = verify.bind(equals)(golfie, report);
            verify = 15;
            report = entity[verify];
            output = option.bind(tangon)(report);
            backup = output.useStateFromStores;
            report = _closure1_slot6;
            golfie = new Array(1);
            golfie[0] = report;
            report = function() {
                michal = _closure1_slot6;
                entity = michal.isOpen;
                entity = entity.bind(michal)();
                return entity;
            };
            golfie = backup.bind(output)(golfie, report);
            output = equals.useCallback;
            backup = function(argFoo, argBar) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = argFoo;
                    entity = argBar;
                    entity = zuuluu !== entity;
                    if(!entity) { _fun00004_ip = 19; continue _fun00003 }
 13:
                    michal = 0;
                    entity = michal === zuuluu;
 19:
                    if(!entity) { _fun00004_ip = 129; continue _fun00003 }
 22:
                    michal = _closure1_slot0;
                    tangon = _closure1_slot2;
                    entity = 16;
                    entity = tangon[entity];
                    zuuluu = undefined;
                    golfie = michal.bind(zuuluu)(entity);
                    oscard = golfie.triggerHapticFeedback;
                    michal = _closure1_slot1;
                    entity = 17;
                    entity = tangon[entity];
                    entity = michal.bind(zuuluu)(entity);
                    entity = entity.IMPACT_LIGHT;
                    entity = oscard.bind(golfie)(entity);
                    entity = 18;
                    entity = tangon[entity];
                    tangon = michal.bind(zuuluu)(entity);
                    zuuluu = tangon.track;
                    entity = _closure1_slot11;
                    michal = entity.MEDIA_PICKER_ACTION_SHEET_ENGAGED;
                    entity = {};
                    report = _closure1_slot10;
                    report = report.FULLY_EXPANDED;
                    entity['action'] = report;
                    entity = zuuluu.bind(tangon)(michal, entity);
 129:
                    entity = undefined;
                    return entity;
                }
            };
            report = new Array(0);
            source = output.bind(equals)(backup, report);
            report = 19;
            report = entity[report];
            backup = option.bind(tangon)(report);
            report = backup.useIsScreenReaderEnabled;
            papara = report.bind(backup)();
            report = 20;
            report = entity[report];
            backup = michal.bind(tangon)(report);
            report = function() {
                entity = function() {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        zuuluu = _closure2_slot2;
                        michal = null;
                        if(!(michal != zuuluu)) { _fun00006_ip = 23; continue _fun00005 }
 13:
                        michal = _closure2_slot2;
                        entity = undefined;
                        entity = michal.bind(entity)();
 23:
                        entity = undefined;
                        return entity;
                    }
                };
                return entity;
            };
            report = backup.bind(tangon)(report);
            output = equals.useMemo;
            backup = new Array(2);
            backup[0] = zuuluu;
            backup[1] = config;
            report = function() {
                zuuluu = _closure2_slot8;
                entity = new Array(2);
                entity[0] = zuuluu;
                michal = _closure2_slot9;
                entity[1] = michal;
                return entity;
            };
            sequen = output.bind(equals)(report, backup);
            output = equals.useMemo;
            backup = new Array(2);
            backup[0] = vacuum;
            backup[1] = kiloes;
            report = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 21;
                    michal = michal[entity];
                    entity = undefined;
                    michal = zuuluu.bind(entity)(michal);
                    entity = michal.isAndroid;
                    entity = entity.bind(michal)();
                    michal = _closure2_slot6;
                    if(entity) { _fun00008_ip = 74; continue _fun00007 }
 44:
                    entity = {};
                    report = michal.iosContainer;
                    oscard = entity;
                    tangon = copyDataProperties(oscard, report);
                    tangon = _closure2_slot7;
                    zuuluu = 'height';
                    entity[zuuluu] = tangon;
                    _fun00008_ip = 80; continue _fun00007;
 74:
                    entity = michal.androidContainer;
 80:
                    return entity;
                }
            };
            report = output.bind(equals)(report, backup);
            backup = 22;
            backup = entity[backup];
            backup = michal.bind(tangon)(backup);
            backup = backup.bind(tangon)();
            echoed = backup.bottom;
            backup = entity[verify];
            whisks = option.bind(tangon)(backup);
            output = whisks.useStateFromStores;
            variable36 = _closure1_slot7;
            backup = new Array(1);
            backup[0] = variable36;
            variable36 = foxtra.id;
            foxtra = new Array(2);
            foxtra[0] = variable36;
            foxtra[1] = yankee;
            yankee = function() {
                tangon = _closure1_slot7;
                zuuluu = tangon.getUploadCount;
                michal = _closure2_slot0;
                michal = michal.id;
                entity = _closure2_slot1;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            whisks = output.bind(whisks)(backup, yankee, foxtra);
            var _closure2_slot10 = whisks;
            verify = entity[verify];
            backup = option.bind(tangon)(verify);
            foxtra = backup.useStateFromStores;
            verify = _closure1_slot5;
            yankee = new Array(1);
            yankee[0] = verify;
            verify = function() {
                entity = _closure1_slot5;
                entity = entity.useReducedMotion;
                return entity;
            };
            variable39 = foxtra.bind(backup)(yankee, verify);
            var _closure2_slot11 = variable39;
            variable37 = 23;
            verify = entity[variable37];
            yankee = option.bind(tangon)(verify);
            verify = yankee.useOrientation;
            variable38 = verify.bind(yankee)();
            var _closure2_slot12 = variable38;
            yankee = 24;
            verify = entity[yankee];
            foxtra = option.bind(tangon)(verify);
            verify = foxtra.useSharedValue;
            backup = false;
            variable40 = verify.bind(foxtra)(backup);
            var _closure2_slot13 = variable40;
            verify = entity[yankee];
            foxtra = option.bind(tangon)(verify);
            verify = foxtra.useSharedValue;
            variable36 = verify.bind(foxtra)(backup);
            var _closure2_slot14 = variable36;
            verify = entity[yankee];
            output = option.bind(tangon)(verify);
            backup = output.useAnimatedReaction;
            foxtra = function() { // Original name: J
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    michal = _closure2_slot4;
                    entity = michal.get;
                    michal = entity.bind(michal)();
                    entity = 0.7;
                    tangon = michal > entity;
                    michal = 0;
                    entity = 0;
                    if(!tangon) { _fun00010_ip = 40; continue _fun00009 }
 37:
                    entity = 1;
 40:
                    zuuluu = _closure2_slot10;
                    zuuluu = zuuluu > michal;
                    michal = 0;
                    if(!zuuluu) { _fun00010_ip = 56; continue _fun00009 }
 53:
                    michal = 2;
 56:
                    entity = entity | michal;
                    return entity;
                }
            };
            verify = {};
            verify['animatedIndex'] = status;
            variable41 = 0.7;
            verify['INDEX_HEADER_CHANGE_THRESHOLD'] = variable41;
            verify['numUploads'] = whisks;
            foxtra['__closure'] = verify;
            verify = 12469602666430.0;
            foxtra['__workletHash'] = verify;
            verify = _closure1_slot15;
            foxtra['__initData'] = verify;
            verify = function(argFoo, argBar) { // Original name: q
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    golfie = argFoo;
                    michal = argBar;
                    if(!(golfie !== michal)) { _fun00012_ip = 171; continue _fun00011 }
 13:
                    entity = null;
                    zuuluu = entity != michal;
                    entity = 0;
                    if(!zuuluu) { _fun00012_ip = 27; continue _fun00011 }
 24:
                    entity = michal;
 27:
                    oscard = 1;
                    report = oscard & entity;
                    michal = _closure2_slot12;
                    option = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    entity = 23;
                    zuuluu = zuuluu[entity];
                    entity = undefined;
                    entity = option.bind(entity)(zuuluu);
                    entity = entity.OrientationType;
                    entity = entity.LANDSCAPE;
                    option = michal === entity;
                    zuuluu = _closure2_slot13;
                    michal = zuuluu.set;
                    entity = oscard & golfie;
                    entity = oscard === entity;
                    if(entity) { _fun00012_ip = 105; continue _fun00011 }
 102:
                    entity = option;
 105:
                    if(!entity) { _fun00012_ip = 119; continue _fun00011 }
 108:
                    option = 2;
                    golfie = option & golfie;
                    entity = option === golfie;
 119:
                    entity = michal.bind(zuuluu)(entity);
                    zuuluu = _closure2_slot14;
                    michal = zuuluu.set;
                    entity = _closure2_slot11;
                    entity = !entity;
                    if(!entity) { _fun00012_ip = 150; continue _fun00011 }
 143:
                    report = oscard === report;
                    entity = !report;
 150:
                    if(!entity) { _fun00012_ip = 166; continue _fun00011 }
 153:
                    report = _closure2_slot13;
                    tangon = report.get;
                    entity = tangon.bind(report)();
 166:
                    entity = michal.bind(zuuluu)(entity);
 171:
                    entity = undefined;
                    return entity;
                }
            };
            whisks = {};
            whisks['deviceOrientation'] = variable38;
            variable37 = entity[variable37];
            variable37 = option.bind(tangon)(variable37);
            variable37 = variable37.OrientationType;
            whisks['OrientationType'] = variable37;
            whisks['shouldShowSV'] = variable40;
            whisks['shouldDelaySV'] = variable36;
            whisks['reducedMotion'] = variable39;
            verify['__closure'] = whisks;
            whisks = 8977592425144.0;
            verify['__workletHash'] = whisks;
            whisks = _closure1_slot16;
            verify['__initData'] = whisks;
            verify = backup.bind(output)(foxtra, verify);
            verify = entity[yankee];
            backup = option.bind(tangon)(verify);
            foxtra = backup.useAnimatedProps;
            verify = function() { // Original name: re
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    entity = {};
                    zuuluu = _closure2_slot13;
                    michal = zuuluu.get;
                    zuuluu = michal.bind(zuuluu)();
                    michal = 'none';
                    if(!zuuluu) { _fun00014_ip = 31; continue _fun00013 }
 25:
                    michal = 'box-none';
 31:
                    entity['pointerEvents'] = michal;
                    return entity;
                }
            };
            output = {};
            output['shouldShowSV'] = variable40;
            verify['__closure'] = output;
            output = 8535459187158.0;
            verify['__workletHash'] = output;
            output = _closure1_slot17;
            verify['__initData'] = output;
            verify = foxtra.bind(backup)(verify);
            foxtra = entity[yankee];
            output = option.bind(tangon)(foxtra);
            backup = output.useAnimatedStyle;
            foxtra = function() { // Original name: ae
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    zuuluu = _closure2_slot13;
                    entity = zuuluu.get;
                    entity = entity.bind(zuuluu)();
                    oscard = 0;
                    if(!entity) { _fun00016_ip = 24; continue _fun00015 }
 21:
                    oscard = 1;
 24:
                    entity = {};
                    zuuluu = _closure2_slot11;
                    michal = oscard;
                    if(zuuluu) { _fun00016_ip = 96; continue _fun00015 }
 36:
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    zuuluu = 25;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    report = report.bind(zuuluu)(tangon);
                    tangon = report.withSpring;
                    zuuluu = {};
                    verify = _closure1_slot9;
                    offset = zuuluu;
                    golfie = copyDataProperties(offset, verify);
                    option = true;
                    golfie = 'overshootClamping';
                    zuuluu[golfie] = option;
                    michal = tangon.bind(report)(oscard, zuuluu);
 96:
                    entity['opacity'] = michal;
                    return entity;
                }
            };
            whisks = {};
            whisks['shouldShowSV'] = variable40;
            whisks['reducedMotion'] = variable39;
            variable38 = 25;
            variable36 = entity[variable38];
            variable36 = option.bind(tangon)(variable36);
            variable36 = variable36.withSpring;
            whisks['withSpring'] = variable36;
            variable37 = _closure1_slot9;
            whisks['MEDIA_PICKER_SEND_BUTTON_SPRING'] = variable37;
            foxtra['__closure'] = whisks;
            whisks = 7270442857952.0;
            foxtra['__workletHash'] = whisks;
            whisks = _closure1_slot18;
            foxtra['__initData'] = whisks;
            foxtra = backup.bind(output)(foxtra);
            backup = entity[yankee];
            whisks = option.bind(tangon)(backup);
            output = whisks.useAnimatedStyle;
            backup = function() { // Original name: se
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    michal = _closure2_slot13;
                    entity = michal.get;
                    entity = entity.bind(michal)();
                    verify = 60;
                    if(!entity) { _fun00018_ip = 24; continue _fun00017 }
 22:
                    verify = 0;
 24:
                    michal = _closure2_slot13;
                    entity = michal.get;
                    entity = entity.bind(michal)();
                    option = 0.9;
                    if(!entity) { _fun00018_ip = 53; continue _fun00017 }
 50:
                    option = 1;
 53:
                    entity = {};
                    zuuluu = {};
                    report = _closure2_slot11;
                    michal = verify;
                    if(report) { _fun00018_ip = 107; continue _fun00017 }
 67:
                    offset = _closure1_slot0;
                    golfie = _closure1_slot2;
                    oscard = 25;
                    golfie = golfie[oscard];
                    oscard = undefined;
                    golfie = offset.bind(oscard)(golfie);
                    oscard = golfie.withSpring;
                    report = _closure1_slot9;
                    michal = oscard.bind(golfie)(verify, report);
 107:
                    zuuluu['translateY'] = michal;
                    michal = new Array(2);
                    michal[0] = zuuluu;
                    zuuluu = {};
                    report = _closure2_slot11;
                    tangon = option;
                    if(report) { _fun00018_ip = 172; continue _fun00017 }
 132:
                    verify = _closure1_slot0;
                    golfie = _closure1_slot2;
                    oscard = 25;
                    golfie = golfie[oscard];
                    oscard = undefined;
                    golfie = verify.bind(oscard)(golfie);
                    oscard = golfie.withSpring;
                    report = _closure1_slot9;
                    tangon = oscard.bind(golfie)(option, report);
 172:
                    zuuluu['scale'] = tangon;
                    michal[1] = zuuluu;
                    entity['transform'] = michal;
                    return entity;
                }
            };
            variable36 = {};
            variable36['shouldShowSV'] = variable40;
            variable36['reducedMotion'] = variable39;
            variable38 = entity[variable38];
            variable38 = option.bind(tangon)(variable38);
            variable38 = variable38.withSpring;
            variable36['withSpring'] = variable38;
            variable36['MEDIA_PICKER_SEND_BUTTON_SPRING'] = variable37;
            backup['__closure'] = variable36;
            variable36 = 2833942560741.0;
            backup['__workletHash'] = variable36;
            variable36 = _closure1_slot19;
            backup['__initData'] = variable36;
            output = output.bind(whisks)(backup);
            whisks = equals.useEffect;
            backup = new Array(3);
            backup[0] = limora;
            backup[1] = update;
            backup[2] = quebec;
            oscard = function() {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    tangon = _closure2_slot3;
                    report = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    entity = 26;
                    zuuluu = zuuluu[entity];
                    entity = undefined;
                    zuuluu = report.bind(entity)(zuuluu);
                    zuuluu = zuuluu.TransitionStates;
                    zuuluu = zuuluu.YEETED;
                    if(!(tangon === zuuluu)) { _fun00020_ip = 100; continue _fun00019 }
 48:
                    zuuluu = _closure2_slot5;
                    zuuluu = zuuluu.current;
                    tangon = null;
                    if(!(tangon != zuuluu)) { _fun00020_ip = 84; continue _fun00019 }
 63:
                    zuuluu = _closure2_slot5;
                    report = zuuluu.current;
                    zuuluu = report.forceClose;
                    zuuluu = zuuluu.bind(report)();
                    _fun00020_ip = 100; continue _fun00019;
 84:
                    zuuluu = _closure2_slot2;
                    if(!(tangon != zuuluu)) { _fun00020_ip = 100; continue _fun00019 }
 92:
                    michal = _closure2_slot2;
                    michal = michal.bind(entity)();
 100:
                    return entity;
                }
            };
            oscard = whisks.bind(equals)(oscard, backup);
            oscard = 27;
            oscard = entity[oscard];
            option = option.bind(tangon)(oscard);
            oscard = option.usePortalKeyboardBottomSheetAnimationProps;
            zuuluu = vacuum - zuuluu;
            option = oscard.bind(option)(zuuluu);
            zuuluu = _closure1_slot13;
            entity = entity[yankee];
            entity = michal.bind(tangon)(entity);
            michal = entity.View;
            entity = {};
            oscard = undefined;
            if(!golfie) { _fun00002_ip = 1190; continue _fun00001 }
 1184:
            oscard = 'no-hide-descendants';
 1190:
            entity['importantForAccessibility'] = oscard;
            entity['style'] = report;
            backup = 'box-none';
            entity['pointerEvents'] = backup;
            golfie = _closure1_slot12;
            oscard = _closure1_slot1;
            quebec = _closure1_slot2;
            report = 14;
            report = quebec[report];
            oscard = oscard.bind(tangon)(report);
            report = {};
            equals = _closure1_slot0;
            whisks = 21;
            whisks = quebec[whisks];
            equals = equals.bind(tangon)(whisks);
            whisks = equals.isIOS;
            whisks = whisks.bind(equals)();
            whisks = !whisks;
            if(!whisks) { _fun00002_ip = 1270; continue _fun00001 }
 1268:
            whisks = undefined;
 1270:
            report['accessible'] = whisks;
            report['ref'] = limora;
            report['animationConfigs'] = sierra;
            report['animatedIndex'] = status;
            report['animatedPosition'] = target;
            target = !papara;
            report['enableContentPanningGesture'] = target;
            papara = !papara;
            report['enableHandlePanningGesture'] = papara;
            report['handleComponent'] = cntext;
            cntext = kiloes.background;
            report['backgroundStyle'] = cntext;
            report['backdropComponent'] = record;
            report['contentHeight'] = config;
            report['snapPoints'] = sequen;
            report['onAnimate'] = source;
            report['containerHeight'] = vacuum;
            source = _closure1_slot8;
            report['handleHeight'] = source;
            report['onClose'] = update;
            variable44 = report;
            variable43 = option;
            option = copyDataProperties(variable44, variable43);
            option = 'children';
            report[option] = romeon;
            oscard = golfie.bind(tangon)(oscard, report);
            report = new Array(2);
            report[0] = oscard;
            option = _closure1_slot13;
            source = _closure1_slot1;
            update = _closure1_slot2;
            oscard = update[yankee];
            oscard = source.bind(tangon)(oscard);
            golfie = oscard.View;
            oscard = {};
            romeon = new Array(3);
            romeon[0] = foxtra;
            foxtra = kiloes.sendContainer;
            romeon[1] = foxtra;
            foxtra = {};
            echoed = vacuum - echoed;
            vacuum = echoed - ctrled;
            echoed = 136;
            echoed = vacuum - echoed;
            foxtra['top'] = echoed;
            romeon[2] = foxtra;
            oscard['style'] = romeon;
            oscard['animatedProps'] = verify;
            foxtra = _closure1_slot12;
            verify = 28;
            verify = update[verify];
            romeon = source.bind(tangon)(verify);
            verify = {};
            record = 0;
            echoed = {'x': 0, 'y': 0};
            verify['start'] = echoed;
            echoed = {'x': 0, 'y': 1};
            verify['end'] = echoed;
            echoed = _closure1_slot0;
            vacuum = 29;
            vacuum = update[vacuum];
            config = echoed.bind(tangon)(vacuum);
            sequen = config.hexWithOpacity;
            vacuum = kiloes.gradient;
            vacuum = vacuum.color;
            sequen = sequen.bind(config)(vacuum, record);
            vacuum = new Array(2);
            vacuum[0] = sequen;
            sequen = kiloes.gradient;
            sequen = sequen.color;
            vacuum[1] = sequen;
            verify['colors'] = vacuum;
            result = _closure1_slot4;
            result = result.absoluteFill;
            verify['style'] = result;
            result = 'none';
            verify['pointerEvents'] = result;
            romeon = foxtra.bind(tangon)(romeon, verify);
            verify = new Array(3);
            verify[0] = romeon;
            yankee = update[yankee];
            yankee = source.bind(tangon)(yankee);
            romeon = yankee.View;
            yankee = {};
            result = kiloes.buttonRowContainer;
            kiloes = new Array(3);
            kiloes[0] = result;
            kiloes[1] = output;
            output = {};
            result = 36;
            result = result + ctrled;
            output['marginBottom'] = result;
            kiloes[2] = output;
            yankee['style'] = kiloes;
            yankee['pointerEvents'] = backup;
            backup = 30;
            backup = update[backup];
            backup = echoed.bind(tangon)(backup);
            kiloes = backup.Button;
            backup = {};
            backup['onPress'] = sizing;
            sizing = 'md';
            backup['size'] = sizing;
            sizing = 31;
            sizing = update[sizing];
            output = source.bind(tangon)(sizing);
            sizing = {};
            result = 32;
            result = update[result];
            result = source.bind(tangon)(result);
            sizing['source'] = result;
            result = 9;
            result = update[result];
            result = source.bind(tangon)(result);
            result = result.unsafe_rawColors;
            result = result.WHITE_500;
            sizing['color'] = result;
            result = {};
            source = 8;
            result['marginLeft'] = source;
            sizing['style'] = result;
            sizing = foxtra.bind(tangon)(output, sizing);
            backup['icon'] = sizing;
            sizing = 33;
            output = update[sizing];
            output = echoed.bind(tangon)(output);
            result = output.intl;
            output = result.string;
            sizing = update[sizing];
            sizing = echoed.bind(tangon)(sizing);
            sizing = sizing.t;
            sizing = sizing.TXNS7e;
            sizing = output.bind(result)(sizing);
            backup['text'] = sizing;
            backup = foxtra.bind(tangon)(kiloes, backup);
            yankee['children'] = backup;
            yankee = foxtra.bind(tangon)(romeon, yankee);
            verify[1] = yankee;
            verify[2] = offset;
            oscard['children'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    michal = tangon.bind(golfie)(michal);
    tangon = 34;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/media_keyboard/native/components/MediaKeyboardBottomSheet.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();