// app/modules/guilds_bar/native/GuildsBarAnimatedItemWrapper.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    golfie = argBar;
    foxtra = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = foxtra;
    var _closure1_slot2 = option;
    michal = function(argFoo) { // Original name: UnreadIndicator
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            report = entity.selected;
            sizing = entity.sharedId;
            var _closure2_slot0 = sizing;
            kiloes = entity.id;
            var _closure2_slot1 = kiloes;
            yankee = entity.transitionState;
            tangon = undefined;
            if(!(yankee === tangon)) { _fun00002_ip = 77; continue _fun00001 }
 42:
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            zuuluu = 7;
            zuuluu = golfie[zuuluu];
            zuuluu = oscard.bind(tangon)(zuuluu);
            zuuluu = zuuluu.TransitionStates;
            yankee = zuuluu.MOUNTED;
 77:
            var _closure2_slot2 = yankee;
            offset = entity.cleanUp;
            var _closure2_slot3 = offset;
            var _closure2_slot4 = tangon;
            var _closure2_slot5 = tangon;
            var _closure2_slot6 = tangon;
            zuuluu = _closure1_slot14;
            zuuluu = zuuluu.bind(tangon)();
            _closure2_slot4 = zuuluu;
            golfie = _closure1_slot0;
            oscard = _closure1_slot2;
            romeon = 7;
            oscard = oscard[romeon];
            oscard = golfie.bind(tangon)(oscard);
            oscard = oscard.TransitionStates;
            oscard = oscard.MOUNTED;
            output = yankee === oscard;
            _closure2_slot5 = output;
            backup = 8;
            option = backup;
            if(!report) { _fun00002_ip = 206; continue _fun00001 }
 167:
            oscard = _closure1_slot0;
            report = _closure1_slot2;
            report = report[romeon];
            report = oscard.bind(tangon)(report);
            report = report.TransitionStates;
            report = report.YEETED;
            option = backup;
            if(!(yankee !== report)) { _fun00002_ip = 206; continue _fun00001 }
 203:
            option = 40;
 206:
            _closure2_slot6 = option;
            golfie = _closure1_slot3;
            oscard = golfie.useMemo;
            report = new Array(3);
            report[0] = option;
            report[1] = yankee;
            zuuluu = zuuluu.unreadIndicator;
            report[2] = zuuluu;
            zuuluu = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = _closure2_slot4;
                    michal = entity.unreadIndicator;
                    entity = new Array(2);
                    entity[0] = michal;
                    michal = {};
                    tangon = _closure2_slot6;
                    michal['height'] = tangon;
                    report = _closure2_slot6;
                    tangon = 2;
                    report = report / tangon;
                    tangon = -1;
                    tangon = report * tangon;
                    michal['marginTop'] = tangon;
                    report = _closure2_slot2;
                    oscard = _closure1_slot0;
                    tangon = _closure1_slot2;
                    zuuluu = 7;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    zuuluu = oscard.bind(zuuluu)(tangon);
                    zuuluu = zuuluu.TransitionStates;
                    tangon = zuuluu.YEETED;
                    zuuluu = 0;
                    if(!(report === tangon)) { _fun00004_ip = 109; continue _fun00003 }
 103:
                    zuuluu = -4;
 109:
                    michal['marginLeft'] = zuuluu;
                    entity[1] = michal;
                    return entity;
                }
            };
            report = oscard.bind(golfie)(zuuluu, report);
            verify = _closure1_slot3;
            golfie = verify.useCallback;
            oscard = function(argFoo) { // Original name: c
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    tangon = argFoo;
                    michal = _closure2_slot5;
                    if(michal) { _fun00006_ip = 233; continue _fun00005 }
 16:
                    zuuluu = _closure2_slot0;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00006_ip = 50; continue _fun00005 }
 26:
                    zuuluu = _closure2_slot0;
                    michal = zuuluu.get;
                    michal = michal.bind(zuuluu)();
                    entity = _closure2_slot1;
                    if(!(michal === entity)) { _fun00006_ip = 233; continue _fun00005 }
 50:
                    entity = {};
                    michal = {};
                    golfie = _closure1_slot0;
                    verify = _closure1_slot2;
                    report = 8;
                    option = verify[report];
                    oscard = undefined;
                    foxtra = golfie.bind(oscard)(option);
                    romeon = foxtra.withSpring;
                    yankee = tangon.targetOriginY;
                    offset = _closure1_slot12;
                    option = 'animate-always';
                    offset = romeon.bind(foxtra)(yankee, offset, option);
                    michal['originY'] = offset;
                    offset = verify[report];
                    foxtra = golfie.bind(oscard)(offset);
                    romeon = foxtra.withSpring;
                    yankee = tangon.targetOriginX;
                    offset = _closure1_slot12;
                    offset = romeon.bind(foxtra)(yankee, offset, option);
                    michal['originX'] = offset;
                    report = verify[report];
                    golfie = golfie.bind(oscard)(report);
                    oscard = golfie.withSpring;
                    report = tangon.targetHeight;
                    tangon = _closure1_slot12;
                    tangon = oscard.bind(golfie)(report, tangon, option);
                    michal['height'] = tangon;
                    entity['animations'] = michal;
                    michal = {'height': 8, 'originY': null, 'originX': 4294967284};
                    tangon = _closure1_slot8;
                    zuuluu = 2;
                    tangon = tangon / zuuluu;
                    zuuluu = 4;
                    zuuluu = tangon - zuuluu;
                    michal['originY'] = zuuluu;
                    entity['initialValues'] = michal;
                    _fun00006_ip = 252; continue _fun00005;
 233:
                    michal = {};
                    zuuluu = {};
                    michal['animations'] = zuuluu;
                    zuuluu = {};
                    michal['initialValues'] = zuuluu;
                    entity = michal;
 252:
                    return entity;
                }
            };
            zuuluu = {};
            zuuluu['disableEntering'] = output;
            zuuluu['sharedId'] = sizing;
            zuuluu['id'] = kiloes;
            foxtra = _closure1_slot0;
            option = _closure1_slot2;
            result = option[backup];
            result = foxtra.bind(tangon)(result);
            result = result.withSpring;
            zuuluu['withSpring'] = result;
            result = _closure1_slot12;
            zuuluu['BAR_SPRING_PHYSICS'] = result;
            result = _closure1_slot8;
            zuuluu['WRAPPER_SIZE'] = result;
            oscard['__closure'] = zuuluu;
            zuuluu = 16330603891282.0;
            oscard['__workletHash'] = zuuluu;
            zuuluu = _closure1_slot15;
            oscard['__initData'] = zuuluu;
            zuuluu = new Array(3);
            zuuluu[0] = output;
            zuuluu[1] = sizing;
            zuuluu[2] = kiloes;
            golfie = golfie.bind(verify)(oscard, zuuluu);
            verify = _closure1_slot3;
            oscard = verify.useCallback;
            zuuluu = function(argFoo) { // Original name: _
                zuuluu = argFoo;
                entity = {};
                michal = {};
                golfie = _closure1_slot0;
                verify = _closure1_slot2;
                report = 8;
                option = verify[report];
                oscard = undefined;
                foxtra = golfie.bind(oscard)(option);
                romeon = foxtra.withSpring;
                yankee = zuuluu.targetOriginY;
                offset = _closure1_slot12;
                option = 'animate-always';
                offset = romeon.bind(foxtra)(yankee, offset, option);
                michal['originY'] = offset;
                offset = verify[report];
                foxtra = golfie.bind(oscard)(offset);
                romeon = foxtra.withSpring;
                yankee = zuuluu.targetOriginX;
                offset = _closure1_slot12;
                offset = romeon.bind(foxtra)(yankee, offset, option);
                michal['originX'] = offset;
                report = verify[report];
                golfie = golfie.bind(oscard)(report);
                oscard = golfie.withSpring;
                report = zuuluu.targetHeight;
                tangon = _closure1_slot12;
                tangon = oscard.bind(golfie)(report, tangon, option);
                michal['height'] = tangon;
                entity['animations'] = michal;
                michal = {};
                tangon = zuuluu.currentHeight;
                michal['height'] = tangon;
                tangon = zuuluu.currentOriginY;
                michal['originY'] = tangon;
                zuuluu = zuuluu.currentOriginX;
                michal['originX'] = zuuluu;
                entity['initialValues'] = michal;
                michal = function(argFoo) { // Original name: callback
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        report = argFoo;
                        oscard = _closure2_slot2;
                        golfie = _closure1_slot0;
                        tangon = _closure1_slot2;
                        entity = 7;
                        tangon = tangon[entity];
                        entity = undefined;
                        tangon = golfie.bind(entity)(tangon);
                        tangon = tangon.TransitionStates;
                        tangon = tangon.YEETED;
                        tangon = oscard === tangon;
                        if(!tangon) { _fun00008_ip = 57; continue _fun00007 }
 54:
                        tangon = report;
 57:
                        if(!tangon) { _fun00008_ip = 70; continue _fun00007 }
 60:
                        oscard = _closure2_slot3;
                        report = null;
                        tangon = report != oscard;
 70:
                        if(!tangon) { _fun00008_ip = 111; continue _fun00007 }
 73:
                        tangon = _closure1_slot0;
                        report = _closure1_slot2;
                        zuuluu = 9;
                        zuuluu = report[zuuluu];
                        tangon = tangon.bind(entity)(zuuluu);
                        zuuluu = tangon.runOnJS;
                        michal = _closure2_slot3;
                        michal = zuuluu.bind(tangon)(michal);
                        michal = michal.bind(entity)();
 111:
                        return entity;
                    }
                };
                entity['callback'] = michal;
                return entity;
            };
            michal = {};
            backup = option[backup];
            backup = foxtra.bind(tangon)(backup);
            backup = backup.withSpring;
            michal['withSpring'] = backup;
            backup = _closure1_slot12;
            michal['BAR_SPRING_PHYSICS'] = backup;
            michal['transitionState'] = yankee;
            romeon = option[romeon];
            romeon = foxtra.bind(tangon)(romeon);
            romeon = romeon.TransitionStates;
            michal['TransitionStates'] = romeon;
            michal['cleanUp'] = offset;
            romeon = 9;
            romeon = option[romeon];
            romeon = foxtra.bind(tangon)(romeon);
            romeon = romeon.runOnJS;
            michal['runOnJS'] = romeon;
            zuuluu['__closure'] = michal;
            michal = 10632665703864.0;
            zuuluu['__workletHash'] = michal;
            michal = _closure1_slot16;
            zuuluu['__initData'] = michal;
            michal = new Array(2);
            michal[0] = yankee;
            michal[1] = offset;
            oscard = oscard.bind(verify)(zuuluu, michal);
            zuuluu = _closure1_slot9;
            michal = _closure1_slot1;
            entity = 10;
            entity = option[entity];
            michal = michal.bind(tangon)(entity);
            entity = {};
            option = false;
            entity['collapsable'] = option;
            entity['entering'] = golfie;
            entity['layout'] = oscard;
            entity['style'] = report;
            report = 'none';
            entity['pointerEvents'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot18 = michal;
    entity = function(argFoo, argBar, argBaz, argCor) { // Original name: renderUnreadIndicator
        michal = argBar;
        entity = michal.selected;
        oscard = michal.sharedId;
        michal = michal.id;
        report = _closure1_slot9;
        tangon = _closure1_slot18;
        zuuluu = {};
        zuuluu['sharedId'] = oscard;
        zuuluu['id'] = michal;
        zuuluu['selected'] = entity;
        entity = argBaz;
        zuuluu['transitionState'] = entity;
        entity = argCor;
        zuuluu['cleanUp'] = entity;
        michal = undefined;
        entity = argFoo;
        entity = report.bind(michal)(tangon, zuuluu, entity);
        return entity;
    };
    var _closure1_slot19 = entity;
    entity = global;
    verify = entity.Object;
    oscard = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(verify)(zuuluu, entity, tangon);
    yankee = 0;
    oscard = option[yankee];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(oscard);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = option[tangon];
    tangon = golfie.bind(entity)(tangon);
    verify = tangon.StyleSheet;
    backup = 2;
    tangon = option[backup];
    tangon = golfie.bind(entity)(tangon);
    tangon = tangon.IOS_POINTER_STYLE;
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = option[tangon];
    tangon = golfie.bind(entity)(tangon);
    oscard = tangon.GUILD_ITEM_SIZE;
    var _closure1_slot5 = oscard;
    oscard = tangon.GUILD_ITEM_SELECTED_BORDER_RADIUS;
    var _closure1_slot6 = oscard;
    oscard = tangon.GUILD_ITEM_HIT_SLOP;
    var _closure1_slot7 = oscard;
    romeon = tangon.WRAPPER_SIZE;
    var _closure1_slot8 = romeon;
    tangon = 4;
    oscard = option[tangon];
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.jsx;
    var _closure1_slot9 = oscard;
    tangon = option[tangon];
    tangon = golfie.bind(entity)(tangon);
    tangon = tangon.jsxs;
    var _closure1_slot10 = tangon;
    tangon = {'mass': 0.8, 'damping': 100, 'stiffness': 150};
    var _closure1_slot11 = tangon;
    tangon = {'mass': 0.25, 'damping': 100, 'stiffness': 200};
    var _closure1_slot12 = tangon;
    oscard = verify.create;
    tangon = {};
    offset = {};
    offset['opacity'] = yankee;
    tangon['draggedElement'] = offset;
    tangon = oscard.bind(verify)(tangon);
    var _closure1_slot13 = tangon;
    tangon = 5;
    oscard = option[tangon];
    offset = golfie.bind(entity)(oscard);
    verify = offset.createStyles;
    oscard = {};
    yankee = {'position': 'absolute', 'top': null, 'left': 4294967292, 'height': 8, 'width': 8};
    romeon = romeon / backup;
    yankee['top'] = romeon;
    romeon = 6;
    backup = option[romeon];
    backup = foxtra.bind(entity)(backup);
    backup = backup.radii;
    backup = backup.xs;
    yankee['borderRadius'] = backup;
    romeon = option[romeon];
    romeon = foxtra.bind(entity)(romeon);
    romeon = romeon.colors;
    romeon = romeon.INTERACTIVE_ACTIVE;
    yankee['backgroundColor'] = romeon;
    oscard['unreadIndicator'] = yankee;
    oscard = verify.bind(offset)(oscard);
    var _closure1_slot14 = oscard;
    tangon = option[tangon];
    verify = golfie.bind(entity)(tangon);
    oscard = verify.createStyles;
    tangon = function() {
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            zuuluu = arguments[0];
            oscard = arguments[1];
            golfie = undefined;
            if(!(zuuluu === golfie)) { _fun00010_ip = 14; continue _fun00009 }
 12:
            zuuluu = false;
 14:
            if(!(oscard === golfie)) { _fun00010_ip = 20; continue _fun00009 }
 18:
            oscard = false;
 20:
            entity = {};
            michal = {'position': 'relative', 'paddingTop': 4, 'paddingBottom': 4, 'paddingLeft': 12};
            tangon = _closure1_slot8;
            michal['height'] = tangon;
            tangon = _closure1_slot5;
            option = _closure1_slot7;
            verify = option.left;
            verify = tangon + verify;
            option = option.right;
            option = verify + option;
            michal['width'] = option;
            entity['pressableWrapper'] = michal;
            michal = {'position': 'relative', 'width': null, 'height': null, 'overflow': 'hidden', 'justifyContent': 'center', 'alignItems': 'center'};
            michal['width'] = tangon;
            michal['height'] = tangon;
            tangon = 'transparent';
            option = tangon;
            if(oscard) { _fun00010_ip = 145; continue _fun00009 }
 114:
            offset = _closure1_slot1;
            yankee = _closure1_slot2;
            verify = 6;
            verify = yankee[verify];
            verify = offset.bind(golfie)(verify);
            verify = verify.colors;
            option = verify.BACKGROUND_SECONDARY;
 145:
            michal['backgroundColor'] = option;
            entity['itemShape'] = michal;
            michal = {};
            option = tangon;
            if(oscard) { _fun00010_ip = 193; continue _fun00009 }
 162:
            offset = _closure1_slot1;
            yankee = _closure1_slot2;
            verify = 6;
            verify = yankee[verify];
            verify = offset.bind(golfie)(verify);
            verify = verify.colors;
            option = verify.BG_MOD_STRONG;
 193:
            michal['backgroundColor'] = option;
            entity['itemShapeThemed'] = michal;
            michal = {};
            if(zuuluu) { _fun00010_ip = 240; continue _fun00009 }
 207:
            option = _closure1_slot1;
            verify = _closure1_slot2;
            zuuluu = 6;
            zuuluu = verify[zuuluu];
            zuuluu = option.bind(golfie)(zuuluu);
            zuuluu = zuuluu.colors;
            zuuluu = zuuluu.BG_BRAND;
            _fun00010_ip = 277; continue _fun00009;
 240:
            if(oscard) { _fun00010_ip = 274; continue _fun00009 }
 243:
            oscard = _closure1_slot1;
            option = _closure1_slot2;
            report = 6;
            report = option[report];
            report = oscard.bind(golfie)(report);
            report = report.colors;
            tangon = report.BACKGROUND_SECONDARY;
 274:
            zuuluu = tangon;
 277:
            michal['backgroundColor'] = zuuluu;
            entity['itemShapeSelected'] = michal;
            return entity;
        }
    };
    tangon = oscard.bind(verify)(tangon);
    oscard = {};
    verify = "function GuildsBarAnimatedItemWrapperTsx1(values){const{disableEntering,sharedId,id,withSpring,BAR_SPRING_PHYSICS,WRAPPER_SIZE}=this.__closure;if(disableEntering||sharedId!=null&&sharedId.get()!==id){return{animations:{},initialValues:{}};}return{animations:{originY:withSpring(values.targetOriginY,BAR_SPRING_PHYSICS,'animate-always'),originX:withSpring(values.targetOriginX,BAR_SPRING_PHYSICS,'animate-always'),height:withSpring(values.targetHeight,BAR_SPRING_PHYSICS,'animate-always')},initialValues:{height:8,originY:WRAPPER_SIZE/2-4,originX:-12}};}";
    oscard['code'] = verify;
    var _closure1_slot15 = oscard;
    oscard = {};
    verify = "function GuildsBarAnimatedItemWrapperTsx2(values){const{withSpring,BAR_SPRING_PHYSICS,transitionState,TransitionStates,cleanUp,runOnJS}=this.__closure;return{animations:{originY:withSpring(values.targetOriginY,BAR_SPRING_PHYSICS,'animate-always'),originX:withSpring(values.targetOriginX,BAR_SPRING_PHYSICS,'animate-always'),height:withSpring(values.targetHeight,BAR_SPRING_PHYSICS,'animate-always')},initialValues:{height:values.currentHeight,originY:values.currentOriginY,originX:values.currentOriginX},callback:function(finished){if(transitionState===TransitionStates.YEETED&&finished&&cleanUp!=null){runOnJS(cleanUp)();}}};}";
    oscard['code'] = verify;
    var _closure1_slot16 = oscard;
    oscard = {};
    verify = "function GuildsBarAnimatedItemWrapperTsx3(){const{withSpring,circle,GUILD_ITEM_SELECTED_BORDER_RADIUS,GUILD_ITEM_SIZE,CORNER_SPRING_PHYSICS}=this.__closure;return{borderRadius:withSpring(!circle?GUILD_ITEM_SELECTED_BORDER_RADIUS:GUILD_ITEM_SIZE/2,CORNER_SPRING_PHYSICS,'animate-always')};}";
    oscard['code'] = verify;
    var _closure1_slot17 = oscard;
    oscard = 16;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/guilds_bar/native/GuildsBarAnimatedItemWrapper.tsx';
    oscard = golfie.bind(option)(oscard);
    report = function(argFoo) { // Original name: GuildsBarAnimatedItemWrapper
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            option = argFoo;
            ctrled = option.id;
            var _closure2_slot0 = ctrled;
            echoed = option.selected;
            var _closure2_slot1 = echoed;
            zuuluu = option.unread;
            whisks = option.circle;
            var _closure2_slot2 = whisks;
            foxtra = option.children;
            offset = option.externalChildren;
            output = option.config;
            vacuum = option.label;
            verify = option.draggable;
            tangon = undefined;
            if(!(verify === tangon)) { _fun00012_ip = 75; continue _fun00011 }
 73:
            verify = false;
 75:
            backup = option.cutouts;
            romeon = option.isDragTarget;
            if(!(romeon === tangon)) { _fun00012_ip = 93; continue _fun00011 }
 91:
            romeon = false;
 93:
            var _closure2_slot3 = romeon;
            sierra = option.dragState;
            var _closure2_slot4 = sierra;
            michal = option.isDragPreview;
            if(!(michal === tangon)) { _fun00012_ip = 119; continue _fun00011 }
 117:
            michal = false;
 119:
            status = option.draggedItemSize;
            if(!(status === tangon)) { _fun00012_ip = 131; continue _fun00011 }
 129:
            status = 0;
 131:
            var _closure2_slot5 = status;
            target = option.overState;
            var _closure2_slot6 = target;
            result = option.styles;
            var _closure2_slot7 = result;
            sizing = option.accessibilityActions;
            yankee = option.onAccessibilityAction;
            report = option.preventClipping;
            if(!(report === tangon)) { _fun00012_ip = 179; continue _fun00011 }
 177:
            report = false;
 179:
            update = option.entering;
            golfie = option.exiting;
            record = option.layout;
            oscard = option.zIndex;
            if(!(oscard === tangon)) { _fun00012_ip = 209; continue _fun00011 }
 207:
            oscard = 0;
 209:
            var _closure2_slot8 = oscard;
            config = option.sharedId;
            var _closure2_slot9 = config;
            var _closure2_slot10 = tangon;
            source = _closure1_slot1;
            cntext = _closure1_slot2;
            kiloes = 11;
            kiloes = cntext[kiloes];
            kiloes = source.bind(tangon)(kiloes);
            source = kiloes.bind(tangon)(output);
            sequen = _closure1_slot0;
            kiloes = 9;
            kiloes = cntext[kiloes];
            papara = sequen.bind(tangon)(kiloes);
            output = papara.useAnimatedProps;
            kiloes = function() { // Original name: W
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    entity = {};
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    zuuluu = 8;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    oscard = report.bind(zuuluu)(tangon);
                    report = oscard.withSpring;
                    zuuluu = _closure2_slot2;
                    if(zuuluu) { _fun00014_ip = 48; continue _fun00013 }
 42:
                    tangon = _closure1_slot6;
                    _fun00014_ip = 59; continue _fun00013;
 48:
                    golfie = _closure1_slot5;
                    zuuluu = 2;
                    tangon = golfie / zuuluu;
 59:
                    zuuluu = _closure1_slot11;
                    michal = 'animate-always';
                    michal = report.bind(oscard)(tangon, zuuluu, michal);
                    entity['borderRadius'] = michal;
                    return entity;
                }
            };
            limora = {};
            equals = 8;
            equals = cntext[equals];
            equals = sequen.bind(tangon)(equals);
            equals = equals.withSpring;
            limora['withSpring'] = equals;
            limora['circle'] = whisks;
            whisks = _closure1_slot6;
            limora['GUILD_ITEM_SELECTED_BORDER_RADIUS'] = whisks;
            whisks = _closure1_slot5;
            limora['GUILD_ITEM_SIZE'] = whisks;
            whisks = _closure1_slot11;
            limora['CORNER_SPRING_PHYSICS'] = whisks;
            kiloes['__closure'] = limora;
            limora = 11828610342492.0;
            kiloes['__workletHash'] = limora;
            limora = _closure1_slot17;
            kiloes['__initData'] = limora;
            kiloes = output.bind(papara)(kiloes);
            output = 12;
            output = cntext[output];
            cntext = sequen.bind(tangon)(output);
            sequen = cntext.useClientThemesOverride;
            output = result.itemShapeThemed;
            output = sequen.bind(cntext)(output);
            papara = _closure1_slot3;
            cntext = papara.useMemo;
            sequen = new Array(5);
            sequen[0] = romeon;
            sequen[1] = sierra;
            sequen[2] = status;
            sequen[3] = target;
            sequen[4] = oscard;
            oscard = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    entity = _closure2_slot3;
                    if(!entity) { _fun00016_ip = 38; continue _fun00015 }
 10:
                    zuuluu = _closure2_slot4;
                    entity = 'dragging';
                    if(!(entity === zuuluu)) { _fun00016_ip = 38; continue _fun00015 }
 22:
                    zuuluu = _closure2_slot6;
                    report = 'hide';
                    entity = 'self';
                    if(!(entity === zuuluu)) { _fun00016_ip = 85; continue _fun00015 }
 38:
                    zuuluu = _closure2_slot6;
                    entity = null;
                    if(!(entity != zuuluu)) { _fun00016_ip = 78; continue _fun00015 }
 48:
                    zuuluu = _closure2_slot6;
                    entity = 'self';
                    if(!(entity !== zuuluu)) { _fun00016_ip = 78; continue _fun00015 }
 60:
                    tangon = _closure2_slot4;
                    entity = 'drag-target';
                    zuuluu = 'dragging';
                    if(!(zuuluu !== tangon)) { _fun00016_ip = 82; continue _fun00015 }
 78:
                    entity = 'none';
 82:
                    report = entity;
 85:
                    entity = {};
                    tangon = 'drag-target';
                    if(!(tangon !== report)) { _fun00016_ip = 116; continue _fun00015 }
 97:
                    oscard = 'hide';
                    zuuluu = 0;
                    if(!(oscard !== report)) { _fun00016_ip = 114; continue _fun00015 }
 107:
                    zuuluu = _closure1_slot8;
 114:
                    _fun00016_ip = 131; continue _fun00015;
 116:
                    golfie = _closure1_slot8;
                    oscard = _closure2_slot5;
                    zuuluu = golfie + oscard;
 131:
                    entity['height'] = zuuluu;
                    zuuluu = 0;
                    if(!(tangon === report)) { _fun00016_ip = 173; continue _fun00015 }
 141:
                    report = _closure2_slot6;
                    tangon = 'before';
                    if(!(tangon !== report)) { _fun00016_ip = 169; continue _fun00015 }
 153:
                    report = _closure2_slot6;
                    tangon = 'convert-before';
                    zuuluu = 0;
                    if(!(tangon === report)) { _fun00016_ip = 173; continue _fun00015 }
 169:
                    zuuluu = _closure2_slot5;
 173:
                    entity['top'] = zuuluu;
                    michal = _closure2_slot8;
                    entity['zIndex'] = michal;
                    return entity;
                }
            };
            cntext = cntext.bind(papara)(oscard, sequen);
            target = _closure1_slot3;
            papara = target.useMemo;
            oscard = result.pressableWrapper;
            sequen = new Array(2);
            sequen[0] = oscard;
            sequen[1] = romeon;
            oscard = function() {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    entity = _closure2_slot7;
                    zuuluu = entity.pressableWrapper;
                    entity = new Array(3);
                    entity[0] = zuuluu;
                    zuuluu = _closure2_slot3;
                    michal = undefined;
                    if(!zuuluu) { _fun00018_ip = 43; continue _fun00017 }
 30:
                    zuuluu = _closure1_slot13;
                    michal = zuuluu.draggedElement;
 43:
                    entity[1] = michal;
                    michal = _closure1_slot4;
                    entity[2] = michal;
                    return entity;
                }
            };
            sequen = papara.bind(target)(oscard, sequen);
            papara = !zuuluu;
            if(!papara) { _fun00012_ip = 502; continue _fun00011 }
 499:
            papara = !echoed;
 502:
            if(papara) { _fun00012_ip = 508; continue _fun00011 }
 505:
            papara = romeon;
 508:
            if(papara) { _fun00012_ip = 514; continue _fun00011 }
 511:
            papara = michal;
 514:
            _closure2_slot10 = papara;
            oscard = _closure1_slot3;
            zuuluu = oscard.useMemo;
            michal = new Array(4);
            michal[0] = papara;
            michal[1] = echoed;
            michal[2] = config;
            michal[3] = ctrled;
            entity = function() {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    entity = _closure2_slot10;
                    if(entity) { _fun00020_ip = 40; continue _fun00019 }
 10:
                    entity = {};
                    zuuluu = _closure2_slot1;
                    entity['selected'] = zuuluu;
                    zuuluu = _closure2_slot9;
                    entity['sharedId'] = zuuluu;
                    michal = _closure2_slot0;
                    entity['id'] = michal;
                    return entity;
 40:
                    entity = undefined;
                    return entity;
                }
            };
            ctrled = zuuluu.bind(oscard)(entity, michal);
            zuuluu = _closure1_slot9;
            oscard = _closure1_slot1;
            config = _closure1_slot2;
            entity = 10;
            entity = config[entity];
            michal = oscard.bind(tangon)(entity);
            entity = {};
            entity['style'] = cntext;
            entity['layout'] = record;
            entity['entering'] = update;
            entity['exiting'] = golfie;
            entity['preventClipping'] = report;
            update = false;
            entity['collapsable'] = update;
            golfie = _closure1_slot10;
            report = 13;
            report = config[report];
            oscard = oscard.bind(tangon)(report);
            report = {};
            variable36 = report;
            quebec = source;
            source = copyDataProperties(variable36, quebec);
            source = 'style';
            report[source] = sequen;
            source = 'accessibilityLabel';
            report[source] = vacuum;
            vacuum = true;
            source = 'accessible';
            report[source] = vacuum;
            vacuum = 'button';
            source = 'accessibilityRole';
            report[source] = vacuum;
            vacuum = {};
            vacuum['selected'] = echoed;
            source = 'accessibilityState';
            report[source] = vacuum;
            vacuum = _closure1_slot7;
            source = 'hitSlop';
            report[source] = vacuum;
            source = undefined;
            if(!verify) { _fun00012_ip = 778; continue _fun00011 }
 721:
            config = _closure1_slot0;
            record = _closure1_slot2;
            verify = 14;
            vacuum = record[verify];
            vacuum = config.bind(tangon)(vacuum);
            sequen = vacuum.intl;
            vacuum = sequen.string;
            verify = record[verify];
            verify = config.bind(tangon)(verify);
            verify = verify.t;
            verify = verify.BGMUFB;
            source = vacuum.bind(sequen)(verify);
 778:
            verify = 'accessibilityHint';
            report[verify] = source;
            verify = 'collapsable';
            report[verify] = update;
            verify = 'accessibilityActions';
            report[verify] = sizing;
            verify = 'onAccessibilityAction';
            report[verify] = yankee;
            verify = new Array(3);
            verify[0] = offset;
            source = _closure1_slot9;
            offset = _closure1_slot0;
            sizing = _closure1_slot2;
            yankee = 7;
            yankee = sizing[yankee];
            yankee = offset.bind(tangon)(yankee);
            update = yankee.TransitionItem;
            yankee = {};
            yankee['item'] = ctrled;
            ctrled = _closure1_slot19;
            yankee['renderItem'] = ctrled;
            yankee = source.bind(tangon)(update, yankee);
            verify[1] = yankee;
            yankee = _closure1_slot9;
            option = 15;
            option = sizing[option];
            option = offset.bind(tangon)(option);
            offset = option.ClipViewAnimated;
            option = {};
            update = result.itemShape;
            sizing = new Array(3);
            sizing[0] = update;
            sizing[1] = output;
            output = undefined;
            if(!echoed) { _fun00012_ip = 930; continue _fun00011 }
 924:
            output = result.itemShapeSelected;
 930:
            sizing[2] = output;
            option['style'] = sizing;
            option['animatedProps'] = kiloes;
            option['cutouts'] = backup;
            romeon = !romeon;
            if(!romeon) { _fun00012_ip = 957; continue _fun00011 }
 954:
            romeon = foxtra;
 957:
            option['children'] = romeon;
            option = yankee.bind(tangon)(offset, option);
            verify[2] = option;
            option = 'children';
            report[option] = verify;
            report = golfie.bind(tangon)(oscard, report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = report;
    zuuluu['useGuildsBarAnimatedWrapperStyles'] = tangon;
    zuuluu['UnreadIndicator'] = michal;
    return entity;
})();