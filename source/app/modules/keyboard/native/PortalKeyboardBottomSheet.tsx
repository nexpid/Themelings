// app/modules/keyboard/native/PortalKeyboardBottomSheet.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    romeon = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = romeon;
    var _closure1_slot2 = golfie;
    entity = function(argFoo) { // Original name: PortalKeyboardBottomSheetHeader
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            golfie = entity.style;
            option = entity.handleCollapse;
            entity = _closure1_slot13;
            tangon = undefined;
            offset = entity.bind(tangon)();
            michal = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 12;
            entity = zuuluu[entity];
            michal = michal.bind(tangon)(entity);
            entity = michal.useIsScreenReaderEnabled;
            yankee = entity.bind(michal)();
            zuuluu = _closure1_slot10;
            michal = _closure1_slot5;
            entity = {};
            verify = offset.headerContainer;
            oscard = new Array(3);
            oscard[0] = verify;
            verify = undefined;
            if(!yankee) { _fun00002_ip = 92; continue _fun00001 }
 86:
            verify = offset.headerContainerScreenReaderEnabled;
 92:
            oscard[1] = verify;
            oscard[2] = golfie;
            entity['style'] = oscard;
            golfie = _closure1_slot10;
            oscard = _closure1_slot0;
            verify = _closure1_slot2;
            report = 11;
            report = verify[report];
            report = oscard.bind(tangon)(report);
            oscard = report.ActionSheetDragHandle;
            report = {};
            report['onPress'] = option;
            report = golfie.bind(tangon)(oscard, report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    michal = function(argFoo) { // Original name: usePortalKeyboardBottomSheetAnimationProps
        report = argFoo;
        var _closure2_slot0 = report;
        tangon = _closure1_slot4;
        zuuluu = tangon.useMemo;
        michal = new Array(1);
        michal[0] = report;
        entity = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                report = {};
                entity = _closure2_slot0;
                report['initialPosition'] = entity;
                entity = false;
                report['animateOnMount'] = entity;
                michal = _closure1_slot0;
                tangon = _closure1_slot2;
                entity = 8;
                entity = tangon[entity];
                golfie = undefined;
                michal = michal.bind(golfie)(entity);
                entity = michal.isAndroid;
                michal = entity.bind(michal)();
                entity = report;
                if(michal) { _fun00004_ip = 193; continue _fun00003 }
 64:
                michal = _closure1_slot6;
                michal = michal.useReducedMotion;
                entity = report;
                if(michal) { _fun00004_ip = 193; continue _fun00003 }
 80:
                tangon = _closure1_slot0;
                oscard = _closure1_slot2;
                michal = 13;
                michal = oscard[michal];
                oscard = tangon.bind(golfie)(michal);
                tangon = oscard.getSystemKeyboardHeight;
                michal = {};
                option = _closure1_slot12;
                michal['excludeSafeAreaInsets'] = option;
                oscard = tangon.bind(oscard)(michal);
                tangon = 0;
                michal = report;
                if(!(tangon === oscard)) { _fun00004_ip = 190; continue _fun00003 }
 131:
                oscard = _closure1_slot0;
                option = _closure1_slot2;
                tangon = 14;
                tangon = option[tangon];
                oscard = oscard.bind(golfie)(tangon);
                tangon = oscard.getKeyboardTypePrevious;
                tangon = tangon.bind(oscard)();
                zuuluu = _closure1_slot9;
                zuuluu = zuuluu.SYSTEM;
                michal = report;
                if(!(tangon === zuuluu)) { _fun00004_ip = 190; continue _fun00003 }
 178:
                zuuluu = {};
                tangon = true;
                zuuluu['animateOnMount'] = tangon;
                michal = zuuluu;
 190:
                entity = michal;
 193:
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot21 = michal;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = romeon.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    option = golfie[report];
    report = argCor;
    report = report.bind(entity)(option);
    var _closure1_slot4 = report;
    report = 2;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    option = report.Platform;
    report = report.View;
    var _closure1_slot5 = report;
    report = 3;
    report = golfie[report];
    report = romeon.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 4;
    report = golfie[report];
    report = romeon.bind(entity)(report);
    var _closure1_slot7 = report;
    report = 5;
    report = golfie[report];
    report = romeon.bind(entity)(report);
    var _closure1_slot8 = report;
    report = 6;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.KeyboardTypes;
    var _closure1_slot9 = report;
    report = 7;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    option = report.jsx;
    var _closure1_slot10 = option;
    report = report.jsxs;
    var _closure1_slot11 = report;
    report = 8;
    report = golfie[report];
    option = oscard.bind(entity)(report);
    report = option.isIOS;
    report = report.bind(option)();
    var _closure1_slot12 = report;
    report = 9;
    report = golfie[report];
    verify = oscard.bind(entity)(report);
    option = verify.createStyles;
    report = {};
    offset = {'position': 'absolute', 'top': 0, 'left': 0};
    report['container'] = offset;
    offset = {};
    yankee = 10;
    foxtra = golfie[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.colors;
    foxtra = foxtra.BG_BASE_SECONDARY;
    offset['backgroundColor'] = foxtra;
    foxtra = 'hidden';
    offset['overflow'] = foxtra;
    report['background'] = offset;
    offset = {};
    foxtra = golfie[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.radii;
    foxtra = foxtra.none;
    offset['borderTopLeftRadius'] = foxtra;
    foxtra = golfie[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.radii;
    foxtra = foxtra.none;
    offset['borderTopRightRadius'] = foxtra;
    foxtra = '100%';
    offset['width'] = foxtra;
    foxtra = 11;
    backup = golfie[foxtra];
    backup = oscard.bind(entity)(backup);
    backup = backup.ACTION_SHEET_DRAG_HANDLE_HEIGHT;
    offset['height'] = backup;
    foxtra = golfie[foxtra];
    foxtra = oscard.bind(entity)(foxtra);
    foxtra = foxtra.ACTION_SHEET_DRAG_HANDLE_HEIGHT;
    foxtra = -foxtra;
    offset['marginBottom'] = foxtra;
    report['headerContainer'] = offset;
    offset = {};
    foxtra = golfie[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.spacing;
    foxtra = foxtra.PX_8;
    foxtra = -foxtra;
    offset['marginBottom'] = foxtra;
    report['headerContainerScreenReaderEnabled'] = offset;
    offset = {'overflow': 'hidden', 'display': 'flex'};
    yankee = golfie[yankee];
    yankee = romeon.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.BG_BASE_SECONDARY;
    offset['backgroundColor'] = yankee;
    report['roundingView'] = offset;
    report = option.bind(verify)(report);
    var _closure1_slot13 = report;
    report = {};
    option = 'function PortalKeyboardBottomSheetTsx1(){const{animatedIndex}=this.__closure;return animatedIndex.get()>0.975;}';
    report['code'] = option;
    var _closure1_slot14 = report;
    report = {};
    option = 'function PortalKeyboardBottomSheetTsx2(){const{isFullyExpanded}=this.__closure;return isFullyExpanded.get();}';
    report['code'] = option;
    var _closure1_slot15 = report;
    report = {};
    option = 'function PortalKeyboardBottomSheetTsx3(isFullyExpanded,isFullExpandedPrevious){const{forceMaxHeight,runOnJS,dismissGlobalKeyboard}=this.__closure;if(isFullExpandedPrevious==null){return;}if(!isFullyExpanded&&!forceMaxHeight){runOnJS(dismissGlobalKeyboard)();}}';
    report['code'] = option;
    var _closure1_slot16 = report;
    report = {};
    option = "function PortalKeyboardBottomSheetTsx4(){const{interpolate,animatedIndex}=this.__closure;return{borderTopLeftRadius:interpolate(animatedIndex.get(),[0,1],[0,15],'clamp'),borderTopRightRadius:interpolate(animatedIndex.get(),[0,1],[0,15],'clamp')};}";
    report['code'] = option;
    var _closure1_slot17 = report;
    report = {};
    option = 'function PortalKeyboardBottomSheetTsx5(){const{animatedIndex}=this.__closure;return Math.max(animatedIndex.get(),0)>0;}';
    report['code'] = option;
    var _closure1_slot18 = report;
    report = {};
    option = 'function PortalKeyboardBottomSheetTsx6(result,previous){const{runOnJS,setAccessibilityViewIsModal}=this.__closure;if(result===previous)return;runOnJS(setAccessibilityViewIsModal)(result);}';
    report['code'] = option;
    var _closure1_slot19 = report;
    report = 31;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/keyboard/native/PortalKeyboardBottomSheet.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function(argFoo) { // Original name: PortalKeyboardBottomSheet
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            config = entity.chatInputRef;
            var _closure2_slot0 = config;
            output = entity.children;
            report = entity.refKey;
            var _closure2_slot1 = report;
            variable38 = entity.animationConfigs;
            variable37 = entity.onClose;
            var _closure2_slot2 = variable37;
            michal = entity.transitionState;
            target = entity.backdropComponent;
            sequen = entity.headerStyle;
            var _closure2_slot3 = sequen;
            ctrled = entity.disableHeaderRoundingAnimation;
            source = entity.roundingViewStyle;
            vacuum = entity.onAnimate;
            var _closure2_slot4 = vacuum;
            kiloes = entity.rendersHandle;
            tangon = undefined;
            if(!(kiloes === tangon)) { _fun00006_ip = 104; continue _fun00005 }
 102:
            kiloes = true;
 104:
            var _closure2_slot5 = kiloes;
            yankee = entity.width;
            status = entity.forceMaxHeight;
            if(!(status === tangon)) { _fun00006_ip = 125; continue _fun00005 }
 123:
            status = false;
 125:
            var _closure2_slot6 = status;
            var _closure2_slot7 = tangon;
            var _closure2_slot8 = tangon;
            var _closure2_slot9 = tangon;
            var _closure2_slot10 = tangon;
            var _closure2_slot11 = tangon;
            var _closure2_slot12 = tangon;
            var _closure2_slot13 = tangon;
            var _closure2_slot14 = tangon;
            entity = _closure1_slot13;
            update = entity.bind(tangon)();
            oscard = _closure1_slot4;
            zuuluu = oscard.useContext;
            variable46 = _closure1_slot0;
            variable45 = _closure1_slot2;
            entity = 15;
            entity = variable45[entity];
            entity = variable46.bind(tangon)(entity);
            entity = entity.PortalKeyboardContext;
            entity = zuuluu.bind(oscard)(entity);
            foxtra = entity.animatedSheetIndex;
            _closure2_slot7 = foxtra;
            quebec = entity.animatedSheetPosition;
            oscard = entity.androidNavScrimStyle;
            entity = entity.bottomSheetRefs;
            sizing = entity[report];
            _closure2_slot8 = sizing;
            entity = 16;
            entity = variable45[entity];
            zuuluu = variable46.bind(tangon)(entity);
            entity = zuuluu.useAndroidNavScrim;
            entity = entity.bind(zuuluu)(oscard);
            golfie = entity.scrim;
            romeon = _closure1_slot1;
            entity = 17;
            entity = variable45[entity];
            entity = romeon.bind(tangon)(entity);
            entity = entity.bind(tangon)();
            zuuluu = entity.minimum;
            _closure2_slot9 = zuuluu;
            cntext = entity.maximum;
            _closure2_slot10 = cntext;
            entity = 18;
            entity = variable45[entity];
            entity = variable46.bind(tangon)(entity);
            entity = entity.TransitionStates;
            entity = entity.YEETED;
            entity = michal === entity;
            _closure2_slot11 = entity;
            verify = _closure1_slot4;
            option = verify.useLayoutEffect;
            oscard = new Array(2);
            oscard[0] = sizing;
            oscard[1] = entity;
            michal = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    michal = _closure2_slot11;
                    if(!michal) { _fun00008_ip = 35; continue _fun00007 }
 10:
                    entity = _closure2_slot8;
                    michal = entity.current;
                    entity = null;
                    if(!(entity != michal)) { _fun00008_ip = 35; continue _fun00007 }
 25:
                    entity = michal.forceClose;
                    entity = entity.bind(michal)();
 35:
                    entity = undefined;
                    return entity;
                }
            };
            michal = option.bind(verify)(michal, oscard);
            michal = 19;
            oscard = variable45[michal];
            backup = variable46.bind(tangon)(oscard);
            verify = backup.useStateFromStores;
            oscard = _closure1_slot7;
            option = new Array(1);
            option[0] = oscard;
            oscard = function() {
                michal = _closure1_slot7;
                entity = michal.isOpen;
                entity = entity.bind(michal)();
                return entity;
            };
            oscard = verify.bind(backup)(option, oscard);
            michal = variable45[michal];
            backup = variable46.bind(tangon)(michal);
            verify = backup.useStateFromStoresObject;
            michal = _closure1_slot8;
            option = new Array(1);
            option[0] = michal;
            michal = function() {
                entity = {};
                michal = _closure1_slot8;
                zuuluu = michal.keyboardOpen;
                entity['isKeyboardOpen'] = zuuluu;
                michal = michal.keyboardType;
                entity['keyboardType'] = michal;
                return entity;
            };
            michal = verify.bind(backup)(option, michal);
            option = michal.isKeyboardOpen;
            whisks = michal.keyboardType;
            michal = _closure1_slot9;
            limora = michal.EXPRESSION;
            michal = 12;
            michal = variable45[michal];
            verify = variable46.bind(tangon)(michal);
            michal = verify.useIsScreenReaderEnabled;
            michal = michal.bind(verify)();
            _closure2_slot12 = michal;
            record = _closure1_slot4;
            result = record.useMemo;
            backup = new Array(3);
            backup[0] = status;
            backup[1] = zuuluu;
            backup[2] = cntext;
            verify = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = _closure2_slot6;
                    if(entity) { _fun00010_ip = 32; continue _fun00009 }
 10:
                    michal = _closure2_slot9;
                    entity = new Array(2);
                    entity[0] = michal;
                    michal = _closure2_slot10;
                    entity[1] = michal;
                    _fun00010_ip = 55; continue _fun00009;
 32:
                    tangon = _closure2_slot10;
                    michal = new Array(2);
                    michal[0] = tangon;
                    zuuluu = _closure2_slot10;
                    michal[1] = zuuluu;
                    entity = michal;
 55:
                    return entity;
                }
            };
            record = result.bind(record)(verify, backup);
            result = _closure1_slot4;
            backup = result.useCallback;
            verify = new Array(5);
            verify[0] = config;
            verify[1] = entity;
            verify[2] = vacuum;
            verify[3] = variable37;
            verify[4] = report;
            report = function(argFoo, argBar, argBaz) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    golfie = argFoo;
                    report = argBar;
                    tangon = argBaz;
                    michal = _closure2_slot11;
                    if(!michal) { _fun00012_ip = 32; continue _fun00011 }
 19:
                    michal = -1;
                    if(!(michal === report)) { _fun00012_ip = 277; continue _fun00011 }
 32:
                    if(!(golfie !== report)) { _fun00012_ip = 297; continue _fun00011 }
 39:
                    michal = -1;
                    if(!(michal !== report)) { _fun00012_ip = 297; continue _fun00011 }
 52:
                    zuuluu = _closure2_slot4;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00012_ip = 75; continue _fun00011 }
 62:
                    oscard = _closure2_slot4;
                    zuuluu = undefined;
                    zuuluu = oscard.bind(zuuluu)(golfie, report, tangon);
 75:
                    zuuluu = 0;
                    if(!(zuuluu !== golfie)) { _fun00012_ip = 182; continue _fun00011 }
 81:
                    oscard = 1;
                    if(!(oscard === golfie)) { _fun00012_ip = 297; continue _fun00011 }
 91:
                    if(!(zuuluu === report)) { _fun00012_ip = 297; continue _fun00011 }
 98:
                    oscard = _closure1_slot0;
                    report = _closure1_slot2;
                    zuuluu = 22;
                    report = report[zuuluu];
                    zuuluu = undefined;
                    report = oscard.bind(zuuluu)(report);
                    zuuluu = report.isChannelFocused;
                    zuuluu = zuuluu.bind(report)();
                    if(zuuluu) { _fun00012_ip = 297; continue _fun00011 }
 139:
                    report = _closure2_slot1;
                    zuuluu = 'apps';
                    if(!(zuuluu === report)) { _fun00012_ip = 297; continue _fun00011 }
 154:
                    zuuluu = _closure2_slot0;
                    zuuluu = zuuluu.current;
                    if(!(michal != zuuluu)) { _fun00012_ip = 297; continue _fun00011 }
 170:
                    michal = zuuluu.closeCustomKeyboard;
                    michal = michal.bind(zuuluu)();
                    _fun00012_ip = 297; continue _fun00011;
 182:
                    report = _closure1_slot0;
                    oscard = _closure1_slot2;
                    zuuluu = 20;
                    zuuluu = oscard[zuuluu];
                    oscard = undefined;
                    zuuluu = report.bind(oscard)(zuuluu);
                    zuuluu = zuuluu.ANIMATION_SOURCE;
                    zuuluu = zuuluu.KEYBOARD;
                    if(!(tangon !== zuuluu)) { _fun00012_ip = 297; continue _fun00011 }
 223:
                    report = _closure1_slot0;
                    golfie = _closure1_slot2;
                    michal = 21;
                    zuuluu = golfie[michal];
                    tangon = report.bind(oscard)(zuuluu);
                    zuuluu = tangon.triggerHapticFeedback;
                    michal = golfie[michal];
                    michal = report.bind(oscard)(michal);
                    michal = michal.HapticFeedbackTypes;
                    michal = michal.IMPACT_LIGHT;
                    michal = zuuluu.bind(tangon)(michal);
                    _fun00012_ip = 297; continue _fun00011;
 277:
                    zuuluu = _closure2_slot2;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00012_ip = 297; continue _fun00011 }
 287:
                    michal = _closure2_slot2;
                    entity = undefined;
                    entity = michal.bind(entity)();
 297:
                    entity = undefined;
                    return entity;
                }
            };
            variable36 = backup.bind(result)(report, verify);
            report = 23;
            verify = variable45[report];
            result = variable46.bind(tangon)(verify);
            backup = result.useDerivedValue;
            verify = function() { // Original name: z
                michal = _closure2_slot7;
                entity = michal.get;
                michal = entity.bind(michal)();
                entity = 0.975;
                entity = michal > entity;
                return entity;
            };
            vacuum = {};
            vacuum['animatedIndex'] = foxtra;
            verify['__closure'] = vacuum;
            vacuum = 2001839633402.0;
            verify['__workletHash'] = vacuum;
            vacuum = _closure1_slot14;
            verify['__initData'] = vacuum;
            verify = backup.bind(result)(verify);
            _closure2_slot13 = verify;
            backup = variable45[report];
            config = variable46.bind(tangon)(backup);
            vacuum = config.useAnimatedReaction;
            result = function() { // Original name: q
                michal = _closure2_slot13;
                entity = michal.get;
                entity = entity.bind(michal)();
                return entity;
            };
            backup = {};
            backup['isFullyExpanded'] = verify;
            result['__closure'] = backup;
            backup = 9531298805666.0;
            result['__workletHash'] = backup;
            backup = _closure1_slot15;
            result['__initData'] = backup;
            backup = function(argFoo, argBar) { // Original name: U
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    entity = argFoo;
                    zuuluu = null;
                    michal = argBar;
                    if(!(zuuluu != michal)) { _fun00014_ip = 82; continue _fun00013 }
 12:
                    if(entity) { _fun00014_ip = 22; continue _fun00013 }
 15:
                    entity = _closure2_slot6;
 22:
                    if(entity) { _fun00014_ip = 82; continue _fun00013 }
 25:
                    report = _closure1_slot0;
                    oscard = _closure1_slot2;
                    entity = 23;
                    entity = oscard[entity];
                    michal = undefined;
                    tangon = report.bind(michal)(entity);
                    zuuluu = tangon.runOnJS;
                    entity = 24;
                    entity = oscard[entity];
                    entity = report.bind(michal)(entity);
                    entity = entity.dismissGlobalKeyboard;
                    entity = zuuluu.bind(tangon)(entity);
                    entity = entity.bind(michal)();
 82:
                    entity = undefined;
                    return entity;
                }
            };
            papara = {};
            papara['forceMaxHeight'] = status;
            status = variable45[report];
            status = variable46.bind(tangon)(status);
            status = status.runOnJS;
            papara['runOnJS'] = status;
            status = 24;
            status = variable45[status];
            status = variable46.bind(tangon)(status);
            status = status.dismissGlobalKeyboard;
            papara['dismissGlobalKeyboard'] = status;
            backup['__closure'] = papara;
            papara = 14649856286006.0;
            backup['__workletHash'] = papara;
            papara = _closure1_slot16;
            backup['__initData'] = papara;
            backup = vacuum.bind(config)(result, backup);
            backup = 25;
            backup = variable45[backup];
            result = romeon.bind(tangon)(backup);
            backup = function() {
                entity = function() {
                    _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                        zuuluu = _closure2_slot2;
                        michal = null;
                        if(!(michal != zuuluu)) { _fun00016_ip = 23; continue _fun00015 }
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
            backup = result.bind(tangon)(backup);
            config = _closure1_slot4;
            vacuum = config.useCallback;
            result = function(argFoo) {
                tangon = _closure1_slot10;
                michal = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 20;
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
            backup = new Array(0);
            papara = vacuum.bind(config)(result, backup);
            vacuum = _closure1_slot4;
            result = vacuum.useCallback;
            backup = new Array(5);
            backup[0] = sequen;
            backup[1] = sizing;
            backup[2] = kiloes;
            backup[3] = verify;
            backup[4] = michal;
            verify = function() {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    tangon = _closure2_slot5;
                    zuuluu = false;
                    entity = null;
                    if(!(zuuluu !== tangon)) { _fun00018_ip = 67; continue _fun00017 }
 15:
                    report = _closure1_slot10;
                    tangon = _closure1_slot20;
                    zuuluu = {};
                    oscard = _closure2_slot3;
                    zuuluu['style'] = oscard;
                    oscard = function() { // Original name: handleCollapse
                        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                            entity = _closure2_slot8;
                            tangon = entity.current;
                            entity = null;
                            if(!(entity != tangon)) { _fun00020_ip = 28; continue _fun00019 }
 18:
                            zuuluu = tangon.collapse;
                            zuuluu = zuuluu.bind(tangon)();
 28:
                            zuuluu = _closure2_slot12;
                            if(!zuuluu) { _fun00020_ip = 58; continue _fun00019 }
 35:
                            michal = _closure2_slot8;
                            michal = michal.current;
                            if(!(entity != michal)) { _fun00020_ip = 58; continue _fun00019 }
 48:
                            entity = michal.forceClose;
                            entity = entity.bind(michal)();
 58:
                            entity = undefined;
                            return entity;
                        }
                    };
                    zuuluu['handleCollapse'] = oscard;
                    michal = _closure2_slot13;
                    zuuluu['isFullyExpanded'] = michal;
                    michal = undefined;
                    entity = report.bind(michal)(tangon, zuuluu);
 67:
                    return entity;
                }
            };
            status = result.bind(vacuum)(verify, backup);
            verify = variable45[report];
            result = variable46.bind(tangon)(verify);
            backup = result.useAnimatedStyle;
            verify = function() { // Original name: ae
                entity = {};
                report = _closure1_slot0;
                oscard = _closure1_slot2;
                zuuluu = 23;
                michal = oscard[zuuluu];
                tangon = undefined;
                romeon = report.bind(tangon)(michal);
                yankee = romeon.interpolate;
                option = _closure2_slot7;
                golfie = option.get;
                sizing = golfie.bind(option)();
                kiloes = [0, 1];
                backup = [0, 15];
                golfie = 'clamp';
                output = romeon;
                foxtra = golfie;
                option = output[yankee](sizing, kiloes, backup, foxtra, romeon);
                entity['borderTopLeftRadius'] = option;
                zuuluu = oscard[zuuluu];
                oscard = report.bind(tangon)(zuuluu);
                report = oscard.interpolate;
                zuuluu = _closure2_slot7;
                michal = zuuluu.get;
                sizing = michal.bind(zuuluu)();
                kiloes = [0, 1];
                backup = [0, 15];
                output = oscard;
                michal = output[report](sizing, kiloes, backup, foxtra, romeon);
                entity['borderTopRightRadius'] = michal;
                return entity;
            };
            vacuum = {};
            sequen = variable45[report];
            sequen = variable46.bind(tangon)(sequen);
            sequen = sequen.interpolate;
            vacuum['interpolate'] = sequen;
            vacuum['animatedIndex'] = foxtra;
            verify['__closure'] = vacuum;
            vacuum = 13716272266662.0;
            verify['__workletHash'] = vacuum;
            vacuum = _closure1_slot17;
            verify['__initData'] = vacuum;
            vacuum = backup.bind(result)(verify);
            verify = 26;
            verify = variable45[verify];
            verify = romeon.bind(tangon)(verify);
            verify = verify.bind(tangon)();
            variable41 = verify.left;
            variable40 = verify.right;
            verify = 27;
            verify = variable45[verify];
            romeon = romeon.bind(tangon)(verify);
            verify = {};
            backup = true;
            verify['ignoreKeyboard'] = backup;
            verify = romeon.bind(tangon)(verify);
            config = verify.height;
            variable39 = verify.width;
            verify = _closure1_slot21;
            zuuluu = config - zuuluu;
            romeon = verify.bind(tangon)(zuuluu);
            result = _closure1_slot4;
            backup = result.useCallback;
            verify = function(argFoo) {
                tangon = _closure1_slot10;
                oscard = _closure1_slot0;
                option = _closure1_slot2;
                entity = 20;
                entity = option[entity];
                zuuluu = undefined;
                entity = oscard.bind(zuuluu)(entity);
                michal = entity.BottomSheetFooter;
                entity = {};
                verify = argFoo;
                offset = entity;
                golfie = copyDataProperties(offset, verify);
                golfie = _closure1_slot10;
                report = 28;
                report = option[report];
                report = oscard.bind(zuuluu)(report);
                oscard = report.PortalHost;
                report = {};
                option = 'expression-footer';
                report['name'] = option;
                oscard = golfie.bind(zuuluu)(oscard, report);
                report = 'children';
                entity[report] = oscard;
                entity = tangon.bind(zuuluu)(michal, entity);
                return entity;
            };
            zuuluu = new Array(0);
            sierra = backup.bind(result)(verify, zuuluu);
            verify = _closure1_slot4;
            zuuluu = verify.useState;
            sequen = false;
            backup = zuuluu.bind(verify)(sequen);
            verify = _closure1_slot3;
            zuuluu = 2;
            verify = verify.bind(tangon)(backup, zuuluu);
            backup = 0;
            result = verify[backup];
            zuuluu = 1;
            variable44 = verify[zuuluu];
            _closure2_slot14 = variable44;
            zuuluu = variable45[report];
            variable42 = variable46.bind(tangon)(zuuluu);
            equals = variable42.useAnimatedReaction;
            verify = function() { // Original name: re
                entity = global;
                tangon = entity.Math;
                zuuluu = tangon.max;
                michal = _closure2_slot7;
                entity = michal.get;
                entity = entity.bind(michal)();
                michal = 0;
                entity = zuuluu.bind(tangon)(entity, michal);
                entity = entity > michal;
                return entity;
            };
            zuuluu = {};
            zuuluu['animatedIndex'] = foxtra;
            verify['__closure'] = zuuluu;
            zuuluu = 8952872079740.0;
            verify['__workletHash'] = zuuluu;
            zuuluu = _closure1_slot18;
            verify['__initData'] = zuuluu;
            zuuluu = function(argFoo, argBar) { // Original name: ie
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    zuuluu = argFoo;
                    entity = argBar;
                    if(!(zuuluu !== entity)) { _fun00022_ip = 57; continue _fun00021 }
 10:
                    tangon = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 23;
                    entity = michal[entity];
                    michal = undefined;
                    report = tangon.bind(michal)(entity);
                    tangon = report.runOnJS;
                    entity = _closure2_slot14;
                    entity = tangon.bind(report)(entity);
                    entity = entity.bind(michal)(zuuluu);
 57:
                    entity = undefined;
                    return entity;
                }
            };
            variable43 = {};
            variable45 = variable45[report];
            variable45 = variable46.bind(tangon)(variable45);
            variable45 = variable45.runOnJS;
            variable43['runOnJS'] = variable45;
            variable43['setAccessibilityViewIsModal'] = variable44;
            zuuluu['__closure'] = variable43;
            variable43 = 16051387075966.0;
            zuuluu['__workletHash'] = variable43;
            variable43 = _closure1_slot19;
            zuuluu['__initData'] = variable43;
            zuuluu = equals.bind(variable42)(verify, zuuluu);
            equals = michal;
            if(equals) { _fun00006_ip = 1297; continue _fun00005 }
 1294:
            equals = entity;
 1297:
            zuuluu = _closure1_slot11;
            michal = _closure1_slot1;
            entity = _closure1_slot2;
            entity = entity[report];
            entity = michal.bind(tangon)(entity);
            michal = entity.View;
            entity = {};
            report = undefined;
            if(!oscard) { _fun00006_ip = 1336; continue _fun00005 }
 1330:
            report = 'no-hide-descendants';
 1336:
            entity['importantForAccessibility'] = report;
            oscard = update.container;
            report = new Array(2);
            report[0] = oscard;
            verify = {};
            oscard = null;
            if(!(oscard == yankee)) { _fun00006_ip = 1370; continue _fun00005 }
 1362:
            variable39 = variable39 - variable41;
            yankee = variable39 - variable40;
 1370:
            verify['width'] = yankee;
            verify['height'] = config;
            report[1] = verify;
            entity['style'] = report;
            report = 'box-none';
            entity['pointerEvents'] = report;
            yankee = _closure1_slot10;
            verify = _closure1_slot1;
            variable39 = _closure1_slot2;
            report = 20;
            report = variable39[report];
            verify = verify.bind(tangon)(report);
            report = {};
            variable39 = _closure1_slot12;
            variable39 = !variable39;
            if(!variable39) { _fun00006_ip = 1435; continue _fun00005 }
 1433:
            variable39 = undefined;
 1435:
            report['accessible'] = variable39;
            report['ref'] = sizing;
            report['animatedIndex'] = foxtra;
            report['animationConfigs'] = variable38;
            report['onClose'] = variable37;
            report['onAnimate'] = variable36;
            report['animatedPosition'] = quebec;
            quebec = !equals;
            report['enableContentPanningGesture'] = quebec;
            equals = !equals;
            report['enableHandlePanningGesture'] = equals;
            report['handleComponent'] = status;
            equals = _closure1_slot0;
            quebec = _closure1_slot2;
            status = 8;
            status = quebec[status];
            equals = equals.bind(tangon)(status);
            status = equals.isAndroid;
            equals = status.bind(equals)();
            status = undefined;
            if(!equals) { _fun00006_ip = 1533; continue _fun00005 }
 1524:
            status = undefined;
            if(!(whisks === limora)) { _fun00006_ip = 1533; continue _fun00005 }
 1530:
            status = sierra;
 1533:
            report['renderFooter'] = status;
            status = update.background;
            report['backgroundStyle'] = status;
            if(!(oscard != target)) { _fun00006_ip = 1556; continue _fun00005 }
 1553:
            papara = target;
 1556:
            report['backdropComponent'] = papara;
            report['contentHeight'] = cntext;
            report['snapPoints'] = record;
            report['containerHeight'] = config;
            config = 'extend';
            report['keyboardBehavior'] = config;
            report['enableDynamicSizing'] = sequen;
            sequen = new Array(2);
            config = -10;
            sequen[0] = config;
            config = 10;
            sequen[1] = config;
            report['activeOffsetY'] = sequen;
            backup = 0;
            if(!kiloes) { _fun00006_ip = 1647; continue _fun00005 }
 1621:
            sequen = _closure1_slot0;
            config = _closure1_slot2;
            kiloes = 11;
            kiloes = config[kiloes];
            kiloes = sequen.bind(tangon)(kiloes);
            backup = kiloes.ACTION_SHEET_DRAG_HANDLE_HEIGHT;
 1647:
            report['handleHeight'] = backup;
            variable48 = report;
            variable47 = romeon;
            romeon = copyDataProperties(variable48, variable47);
            kiloes = _closure1_slot10;
            backup = _closure1_slot0;
            sequen = _closure1_slot2;
            romeon = 29;
            romeon = sequen[romeon];
            romeon = backup.bind(tangon)(romeon);
            backup = romeon.AccessibilityViewAnimated;
            romeon = {};
            sequen = 'portal-keyboard-sheet';
            romeon['nativeID'] = sequen;
            sequen = update.roundingView;
            update = new Array(3);
            update[0] = sequen;
            ctrled = !ctrled;
            if(!ctrled) { _fun00006_ip = 1728; continue _fun00005 }
 1725:
            ctrled = vacuum;
 1728:
            update[1] = ctrled;
            update[2] = source;
            romeon['style'] = update;
            echoed = function() { // Original name: onAccessibilityEscape
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    entity = _closure2_slot8;
                    michal = entity.current;
                    entity = null;
                    if(!(entity != michal)) { _fun00024_ip = 28; continue _fun00023 }
 18:
                    entity = michal.collapse;
                    entity = entity.bind(michal)();
 28:
                    entity = undefined;
                    return entity;
                }
            };
            romeon['onAccessibilityEscape'] = echoed;
            romeon['accessibilityViewIsModal'] = result;
            sizing = output.bind(tangon)(sizing);
            romeon['children'] = sizing;
            backup = kiloes.bind(tangon)(backup, romeon);
            romeon = 'children';
            report[romeon] = backup;
            verify = yankee.bind(tangon)(verify, report);
            report = new Array(3);
            report[0] = verify;
            verify = _closure1_slot12;
            if(!verify) { _fun00006_ip = 1839; continue _fun00005 }
 1802:
            romeon = _closure1_slot10;
            yankee = _closure1_slot1;
            backup = _closure1_slot2;
            offset = 30;
            offset = backup[offset];
            yankee = yankee.bind(tangon)(offset);
            offset = {};
            offset['animatedSheetIndex'] = foxtra;
            verify = romeon.bind(tangon)(yankee, offset);
 1839:
            report[1] = verify;
            oscard = null;
            if(option) { _fun00006_ip = 1851; continue _fun00005 }
 1848:
            oscard = golfie;
 1851:
            report[2] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    zuuluu['usePortalKeyboardBottomSheetAnimationProps'] = michal;
    return entity;
})();