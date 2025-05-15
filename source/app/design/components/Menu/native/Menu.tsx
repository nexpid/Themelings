// app/design/components/Menu/native/Menu.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    foxtra = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = foxtra;
    var _closure1_slot2 = golfie;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    tangon = foxtra.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    backup = 1;
    report = golfie[backup];
    tangon = argCor;
    option = tangon.bind(entity)(report);
    var _closure1_slot4 = option;
    tangon = 2;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    romeon = tangon.StyleSheet;
    tangon = tangon.ScrollView;
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.NOOP;
    var _closure1_slot6 = tangon;
    report = 4;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.jsx;
    var _closure1_slot7 = report;
    report = {'mass': 1, 'stiffness': 300, 'damping': 25, 'restSpeedThreshold': 0.01, 'restDisplacementThreshold': 0.01};
    var _closure1_slot8 = report;
    report = {};
    verify = 250;
    report['duration'] = verify;
    verify = 5;
    verify = golfie[verify];
    verify = oscard.bind(entity)(verify);
    verify = verify.STANDARD_EASING;
    report['easing'] = verify;
    var _closure1_slot9 = report;
    report = 6;
    report = golfie[report];
    offset = oscard.bind(entity)(report);
    verify = offset.createStyles;
    report = {};
    yankee = {};
    sizing = romeon.absoluteFillObject;
    output = yankee;
    romeon = copyDataProperties(output, sizing);
    romeon = 'zIndex';
    yankee[romeon] = backup;
    report['backdrop'] = yankee;
    yankee = {};
    romeon = 'absolute';
    yankee['position'] = romeon;
    romeon = 7;
    backup = golfie[romeon];
    backup = foxtra.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BACKGROUND_FLOATING;
    yankee['backgroundColor'] = backup;
    romeon = golfie[romeon];
    romeon = foxtra.bind(entity)(romeon);
    romeon = romeon.radii;
    romeon = romeon.sm;
    yankee['borderRadius'] = romeon;
    romeon = 220;
    yankee['width'] = romeon;
    report['menu'] = yankee;
    report = verify.bind(offset)(report);
    var _closure1_slot10 = report;
    report = {};
    report['menuClose'] = tangon;
    report['menuDismiss'] = tangon;
    tangon = option.createContext;
    tangon = tangon.bind(option)(report);
    var _closure1_slot11 = tangon;
    report = {};
    option = 'function measureButtonRef_MenuTsx1(ref,setDimensions){const{measure,runOnJS}=this.__closure;const measurements=measure(ref);if(measurements==null)return;runOnJS(setDimensions)(measurements);}';
    report['code'] = option;
    var _closure1_slot12 = report;
    report = function() {
        entity = function(argFoo, argBar) { // Original name: measureButtonRef
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tangon = _closure1_slot0;
                entity = _closure1_slot2;
                report = 8;
                zuuluu = entity[report];
                entity = undefined;
                oscard = tangon.bind(entity)(zuuluu);
                tangon = oscard.measure;
                zuuluu = argFoo;
                zuuluu = tangon.bind(oscard)(zuuluu);
                tangon = null;
                if(!(tangon != zuuluu)) { _fun00002_ip = 80; continue _fun00001 }
 45:
                tangon = _closure1_slot0;
                michal = _closure1_slot2;
                michal = michal[report];
                report = tangon.bind(entity)(michal);
                tangon = report.runOnJS;
                michal = argBar;
                michal = tangon.bind(report)(michal);
                michal = michal.bind(entity)(zuuluu);
 80:
                return entity;
            }
        };
        zuuluu = {};
        oscard = _closure1_slot0;
        golfie = _closure1_slot2;
        tangon = 8;
        option = golfie[tangon];
        report = undefined;
        option = oscard.bind(report)(option);
        option = option.measure;
        zuuluu['measure'] = option;
        tangon = golfie[tangon];
        tangon = oscard.bind(report)(tangon);
        tangon = tangon.runOnJS;
        zuuluu['runOnJS'] = tangon;
        entity['__closure'] = zuuluu;
        zuuluu = 15651320687527.0;
        entity['__workletHash'] = zuuluu;
        michal = _closure1_slot12;
        entity['__initData'] = michal;
        return entity;
    };
    report = report.bind(entity)();
    var _closure1_slot13 = report;
    report = {};
    option = 'function MenuTsx2(){const{runOnJS,openMenuCallback}=this.__closure;return runOnJS(openMenuCallback)();}';
    report['code'] = option;
    var _closure1_slot14 = report;
    report = {};
    option = 'function MenuTsx3(){const{runOnJS,closeMenuCallback}=this.__closure;return runOnJS(closeMenuCallback)();}';
    report['code'] = option;
    var _closure1_slot15 = report;
    report = {};
    option = "function MenuTsx4(){const{visible,useReducedMotion,interpolate,dirX,size,offsetAnimated,dirY}=this.__closure;var _offsetAnimated,_offsetAnimated$get,_offsetAnimated2,_offsetAnimated$get2;return{opacity:visible.get(),transform:useReducedMotion?[]:[{translateX:interpolate(visible.get(),[0,1],[(dirX==='left'?-1:1)*size.get().width/4,((_offsetAnimated=offsetAnimated)===null||_offsetAnimated===void 0||(_offsetAnimated=_offsetAnimated.get())===null||_offsetAnimated===void 0?void 0:_offsetAnimated.x)!=null?(_offsetAnimated$get=offsetAnimated.get())===null||_offsetAnimated$get===void 0?void 0:_offsetAnimated$get.x:0])},{translateY:interpolate(visible.get(),[0,1],[(dirY==='top'?-1:1)*size.get().height/4,((_offsetAnimated2=offsetAnimated)===null||_offsetAnimated2===void 0||(_offsetAnimated2=_offsetAnimated2.get())===null||_offsetAnimated2===void 0?void 0:_offsetAnimated2.y)!=null?(_offsetAnimated$get2=offsetAnimated.get())===null||_offsetAnimated$get2===void 0?void 0:_offsetAnimated$get2.y:0])},{scale:visible.get()/2+0.5}]};}";
    report['code'] = option;
    var _closure1_slot16 = report;
    report = 20;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'design/components/Menu/native/Menu.tsx';
    report = oscard.bind(golfie)(report);
    report = 10;
    zuuluu['MENU_OFFSET'] = report;
    zuuluu['MenuContext'] = tangon;
    michal = function(argFoo) { // Original name: Menu
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            sizing = michal.toggleButtonRef;
            var _closure2_slot0 = sizing;
            entity = michal.onClose;
            zuuluu = michal.position;
            tangon = undefined;
            if(!(zuuluu === tangon)) { _fun00004_ip = 36; continue _fun00003 }
 32:
            zuuluu = 'right';
 36:
            var _closure2_slot1 = zuuluu;
            zuuluu = michal.align;
            if(!(zuuluu === tangon)) { _fun00004_ip = 54; continue _fun00003 }
 50:
            zuuluu = 'start';
 54:
            var _closure2_slot2 = zuuluu;
            zuuluu = michal.offset;
            var _closure2_slot3 = zuuluu;
            result = michal.offsetAnimated;
            var _closure2_slot4 = result;
            option = michal.style;
            backup = michal.children;
            var _closure2_slot5 = tangon;
            var _closure2_slot6 = tangon;
            var _closure2_slot7 = tangon;
            var _closure2_slot8 = tangon;
            var _closure2_slot9 = tangon;
            var _closure2_slot10 = tangon;
            var _closure2_slot11 = tangon;
            var _closure2_slot12 = tangon;
            var _closure2_slot13 = tangon;
            var _closure2_slot14 = tangon;
            var _closure2_slot15 = tangon;
            var _closure2_slot16 = tangon;
            var _closure2_slot17 = tangon;
            michal = _closure1_slot10;
            golfie = michal.bind(tangon)();
            kiloes = _closure1_slot4;
            zuuluu = kiloes.useContext;
            foxtra = _closure1_slot0;
            offset = _closure1_slot2;
            michal = 9;
            michal = offset[michal];
            michal = foxtra.bind(tangon)(michal);
            michal = michal.AccessibilityPreferencesContext;
            michal = zuuluu.bind(kiloes)(michal);
            michal = michal.reducedMotion;
            source = michal.enabled;
            _closure2_slot5 = source;
            zuuluu = _closure1_slot1;
            michal = 10;
            michal = offset[michal];
            michal = zuuluu.bind(tangon)(michal);
            michal = michal.bind(tangon)();
            _closure2_slot6 = michal;
            michal = 11;
            michal = offset[michal];
            michal = zuuluu.bind(tangon)(michal);
            michal = michal.bind(tangon)();
            _closure2_slot7 = michal;
            michal = kiloes.useRef;
            report = null;
            michal = michal.bind(kiloes)(report);
            _closure2_slot8 = michal;
            michal = kiloes.useState;
            oscard = michal.bind(kiloes)(report);
            zuuluu = _closure1_slot3;
            michal = 2;
            output = zuuluu.bind(tangon)(oscard, michal);
            oscard = 0;
            verify = output[oscard];
            _closure2_slot9 = verify;
            zuuluu = 1;
            output = output[zuuluu];
            _closure2_slot10 = output;
            output = 8;
            echoed = offset[output];
            update = foxtra.bind(tangon)(echoed);
            echoed = update.useSharedValue;
            vacuum = echoed.bind(update)(oscard);
            _closure2_slot11 = vacuum;
            offset = offset[output];
            echoed = foxtra.bind(tangon)(offset);
            foxtra = echoed.useSharedValue;
            offset = {'width': 0, 'height': 0};
            echoed = foxtra.bind(echoed)(offset);
            _closure2_slot12 = echoed;
            foxtra = kiloes.useLayoutEffect;
            offset = new Array(2);
            offset[0] = sizing;
            offset[1] = verify;
            verify = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = _closure2_slot0;
                    report = null;
                    tangon = report == entity;
                    entity = undefined;
                    zuuluu = undefined;
                    if(tangon) { _fun00006_ip = 29; continue _fun00005 }
 20:
                    tangon = _closure2_slot0;
                    zuuluu = tangon.current;
 29:
                    zuuluu = report != zuuluu;
                    if(!zuuluu) { _fun00006_ip = 44; continue _fun00005 }
 36:
                    tangon = _closure2_slot9;
                    zuuluu = report == tangon;
 44:
                    if(!zuuluu) { _fun00006_ip = 99; continue _fun00005 }
 47:
                    report = _closure1_slot0;
                    oscard = _closure1_slot2;
                    tangon = 8;
                    tangon = oscard[tangon];
                    report = report.bind(entity)(tangon);
                    tangon = report.runOnUI;
                    zuuluu = _closure1_slot13;
                    tangon = tangon.bind(report)(zuuluu);
                    zuuluu = _closure2_slot0;
                    michal = _closure2_slot10;
                    michal = tangon.bind(entity)(zuuluu, michal);
 99:
                    return entity;
                }
            };
            verify = foxtra.bind(kiloes)(verify, offset);
            verify = function() { // Original name: openMenuCallback
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    entity = 12;
                    zuuluu = zuuluu[entity];
                    entity = undefined;
                    tangon = tangon.bind(entity)(zuuluu);
                    zuuluu = tangon.isAndroid;
                    zuuluu = zuuluu.bind(tangon)();
                    if(!zuuluu) { _fun00008_ip = 121; continue _fun00007 }
 37:
                    option = _closure1_slot0;
                    verify = _closure1_slot2;
                    zuuluu = 13;
                    zuuluu = verify[zuuluu];
                    zuuluu = option.bind(entity)(zuuluu);
                    report = zuuluu.AccessibilityAnnouncer;
                    tangon = report.announce;
                    zuuluu = 14;
                    oscard = verify[zuuluu];
                    oscard = option.bind(entity)(oscard);
                    golfie = oscard.intl;
                    oscard = golfie.string;
                    zuuluu = verify[zuuluu];
                    zuuluu = option.bind(entity)(zuuluu);
                    zuuluu = zuuluu.t;
                    zuuluu = zuuluu.ZqK0uL;
                    zuuluu = oscard.bind(golfie)(zuuluu);
                    zuuluu = tangon.bind(report)(zuuluu);
 121:
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot2;
                    michal = 15;
                    michal = tangon[michal];
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.setAccessibilityFocus;
                    michal = {};
                    report = _closure2_slot8;
                    michal['ref'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                }
            };
            _closure2_slot13 = verify;
            if(!(report == entity)) { _fun00004_ip = 416; continue _fun00003 }
 412:
            entity = _closure1_slot6;
 416:
            _closure2_slot14 = entity;
            sizing = function() { // Original name: handleClose
                tangon = _closure2_slot11;
                zuuluu = tangon.set;
                romeon = _closure1_slot0;
                foxtra = _closure1_slot2;
                entity = 16;
                report = foxtra[entity];
                entity = undefined;
                verify = romeon.bind(entity)(report);
                option = verify.withTiming;
                sizing = _closure1_slot9;
                oscard = function() { // Original name: t
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 8;
                    entity = michal[entity];
                    michal = undefined;
                    tangon = zuuluu.bind(michal)(entity);
                    zuuluu = tangon.runOnJS;
                    entity = _closure2_slot14;
                    entity = zuuluu.bind(tangon)(entity);
                    entity = entity.bind(michal)();
                    return entity;
                };
                report = {};
                yankee = 8;
                yankee = foxtra[yankee];
                yankee = romeon.bind(entity)(yankee);
                yankee = yankee.runOnJS;
                report['runOnJS'] = yankee;
                offset = _closure2_slot14;
                report['closeMenuCallback'] = offset;
                oscard['__closure'] = report;
                report = 5879184549724.0;
                oscard['__workletHash'] = report;
                michal = _closure1_slot15;
                oscard['__initData'] = michal;
                output = 0;
                kiloes = 'respect-motion-settings';
                result = verify;
                backup = oscard;
                michal = result[option](output, sizing, kiloes, backup, foxtra);
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            _closure2_slot15 = sizing;
            kiloes = function() { // Original name: handleDismiss
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 15;
                michal = michal[entity];
                entity = undefined;
                report = zuuluu.bind(entity)(michal);
                tangon = report.setAccessibilityFocus;
                zuuluu = {};
                oscard = _closure2_slot0;
                zuuluu['ref'] = oscard;
                zuuluu = tangon.bind(report)(zuuluu);
                michal = _closure2_slot15;
                michal = michal.bind(entity)();
                return entity;
            };
            ctrled = _closure1_slot0;
            report = _closure1_slot2;
            entity = 17;
            verify = report[entity];
            offset = ctrled.bind(tangon)(verify);
            verify = offset.generateBoxShadowStyle;
            entity = report[entity];
            entity = ctrled.bind(tangon)(entity);
            entity = entity.EIGHT_DP_ELEVATION_SHADOW_PARAMS;
            foxtra = verify.bind(offset)(entity);
            entity = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = _closure2_slot1;
                    option = 'left';
                    if(!(option !== entity)) { _fun00010_ip = 31; continue _fun00009 }
 15:
                    michal = _closure2_slot1;
                    verify = 'row';
                    entity = 'right';
                    if(!(entity === michal)) { _fun00010_ip = 35; continue _fun00009 }
 31:
                    verify = 'column';
 35:
                    entity = _closure2_slot9;
                    oscard = null;
                    if(!(oscard != entity)) { _fun00010_ip = 201; continue _fun00009 }
 48:
                    entity = _closure2_slot9;
                    zuuluu = entity.pageX;
                    entity = _closure2_slot9;
                    michal = entity.pageY;
                    offset = _closure2_slot1;
                    tangon = 'right';
                    entity = 0;
                    if(!(tangon === offset)) { _fun00010_ip = 91; continue _fun00009 }
 82:
                    tangon = _closure2_slot9;
                    entity = tangon.width;
 91:
                    offset = zuuluu + entity;
                    tangon = _closure2_slot1;
                    zuuluu = 'bottom';
                    entity = 0;
                    if(!(zuuluu === tangon)) { _fun00010_ip = 118; continue _fun00009 }
 109:
                    zuuluu = _closure2_slot9;
                    entity = zuuluu.height;
 118:
                    entity = michal + entity;
                    yankee = _closure2_slot2;
                    tangon = 'end';
                    zuuluu = offset;
                    michal = entity;
                    if(!(tangon === yankee)) { _fun00010_ip = 189; continue _fun00009 }
 140:
                    yankee = 'row';
                    tangon = 0;
                    if(!(yankee === verify)) { _fun00010_ip = 159; continue _fun00009 }
 150:
                    yankee = _closure2_slot9;
                    tangon = yankee.width;
 159:
                    tangon = offset + tangon;
                    offset = 'column';
                    report = 0;
                    if(!(offset === verify)) { _fun00010_ip = 182; continue _fun00009 }
 173:
                    offset = _closure2_slot9;
                    report = offset.height;
 182:
                    michal = entity + report;
                    zuuluu = tangon;
 189:
                    entity = {};
                    entity['x'] = zuuluu;
                    entity['y'] = michal;
                    _fun00010_ip = 211; continue _fun00009;
 201:
                    entity = {'x': 0, 'y': 0};
 211:
                    michal = _closure2_slot7;
                    report = michal.height;
                    michal = _closure2_slot1;
                    if(!(option !== michal)) { _fun00010_ip = 254; continue _fun00009 }
 228:
                    michal = 'row';
                    zuuluu = option;
                    if(!(michal === verify)) { _fun00010_ip = 258; continue _fun00009 }
 239:
                    tangon = _closure2_slot2;
                    michal = 'end';
                    zuuluu = option;
                    if(!(michal === tangon)) { _fun00010_ip = 258; continue _fun00009 }
 254:
                    zuuluu = 'right';
 258:
                    michal = _closure2_slot1;
                    tangon = 'top';
                    if(!(tangon !== michal)) { _fun00010_ip = 296; continue _fun00009 }
 270:
                    offset = 'column';
                    michal = tangon;
                    if(!(offset === verify)) { _fun00010_ip = 300; continue _fun00009 }
 281:
                    yankee = _closure2_slot2;
                    offset = 'end';
                    michal = tangon;
                    if(!(offset === yankee)) { _fun00010_ip = 300; continue _fun00009 }
 296:
                    michal = 'bottom';
 300:
                    if(!(option !== zuuluu)) { _fun00010_ip = 324; continue _fun00009 }
 304:
                    option = _closure2_slot7;
                    offset = option.width;
                    option = entity.x;
                    yankee = offset - option;
                    _fun00010_ip = 329; continue _fun00009;
 324:
                    yankee = entity.x;
 329:
                    tangon = tangon === michal;
                    entity = entity.y;
                    if(tangon) { _fun00010_ip = 347; continue _fun00009 }
 341:
                    offset = report - entity;
                    _fun00010_ip = 350; continue _fun00009;
 347:
                    offset = entity;
 350:
                    entity = _closure2_slot3;
                    if(!(oscard == entity)) { _fun00010_ip = 394; continue _fun00009 }
 358:
                    option = 'column';
                    oscard = 0;
                    if(!(option === verify)) { _fun00010_ip = 371; continue _fun00009 }
 368:
                    oscard = 10;
 371:
                    oscard = yankee + oscard;
                    option = 'row';
                    entity = 0;
                    if(!(option === verify)) { _fun00010_ip = 388; continue _fun00009 }
 385:
                    entity = 10;
 388:
                    entity = offset + entity;
                    _fun00010_ip = 416; continue _fun00009;
 394:
                    option = _closure2_slot3;
                    verify = option.x;
                    oscard = yankee + verify;
                    option = option.y;
                    entity = offset + option;
 416:
                    report = report - entity;
                    golfie = _closure2_slot6;
                    if(tangon) { _fun00010_ip = 434; continue _fun00009 }
 427:
                    tangon = golfie.top;
                    _fun00010_ip = 439; continue _fun00009;
 434:
                    tangon = golfie.bottom;
 439:
                    report = report - tangon;
                    tangon = 12;
                    report = report - tangon;
                    tangon = {};
                    tangon[zuuluu] = oscard;
                    tangon[michal] = entity;
                    entity = 'maxHeight';
                    tangon[entity] = report;
                    entity = new Array(3);
                    entity[0] = tangon;
                    entity[1] = zuuluu;
                    entity[2] = michal;
                    return entity;
                }
            };
            offset = entity.bind(tangon)();
            verify = _closure1_slot3;
            entity = 3;
            entity = verify.bind(tangon)(offset, entity);
            offset = entity[oscard];
            update = entity[zuuluu];
            _closure2_slot16 = update;
            verify = entity[michal];
            _closure2_slot17 = verify;
            entity = report[output];
            zuuluu = ctrled.bind(tangon)(entity);
            michal = zuuluu.useAnimatedStyle;
            entity = function() { // Original name: V
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    entity = {};
                    zuuluu = _closure2_slot11;
                    michal = zuuluu.get;
                    michal = michal.bind(zuuluu)();
                    entity['opacity'] = michal;
                    michal = _closure2_slot5;
                    if(michal) { _fun00012_ip = 500; continue _fun00011 }
 32:
                    zuuluu = {};
                    report = _closure1_slot0;
                    michal = _closure1_slot2;
                    option = 8;
                    michal = michal[option];
                    offset = undefined;
                    kiloes = report.bind(offset)(michal);
                    backup = kiloes.interpolate;
                    report = _closure2_slot11;
                    michal = report.get;
                    verify = michal.bind(report)();
                    golfie = _closure2_slot16;
                    yankee = 1;
                    michal = 'left';
                    report = yankee;
                    if(!(michal === golfie)) { _fun00012_ip = 102; continue _fun00011 }
 96:
                    report = -1;
 102:
                    golfie = _closure2_slot12;
                    michal = golfie.get;
                    michal = michal.bind(golfie)();
                    michal = michal.width;
                    michal = report * michal;
                    golfie = new Array(2);
                    foxtra = 4;
                    michal = michal / foxtra;
                    golfie[0] = michal;
                    michal = _closure2_slot4;
                    romeon = null;
                    report = romeon == michal;
                    michal = undefined;
                    if(report) { _fun00012_ip = 181; continue _fun00011 }
 154:
                    sizing = _closure2_slot4;
                    report = sizing.get;
                    report = report.bind(sizing)();
                    sizing = romeon == report;
                    michal = undefined;
                    if(sizing) { _fun00012_ip = 181; continue _fun00011 }
 176:
                    michal = report.x;
 181:
                    sizing = romeon != michal;
                    michal = 0;
                    if(!sizing) { _fun00012_ip = 220; continue _fun00011 }
 190:
                    output = _closure2_slot4;
                    sizing = output.get;
                    output = sizing.bind(output)();
                    result = romeon == output;
                    sizing = undefined;
                    if(result) { _fun00012_ip = 217; continue _fun00011 }
 212:
                    sizing = output.x;
 217:
                    michal = sizing;
 220:
                    golfie[1] = michal;
                    michal = [0, 1];
                    michal = backup.bind(kiloes)(verify, michal, golfie);
                    zuuluu['translateX'] = michal;
                    michal = new Array(3);
                    michal[0] = zuuluu;
                    zuuluu = {};
                    golfie = _closure1_slot0;
                    oscard = _closure1_slot2;
                    oscard = oscard[option];
                    verify = golfie.bind(offset)(oscard);
                    option = verify.interpolate;
                    golfie = _closure2_slot11;
                    oscard = golfie.get;
                    golfie = oscard.bind(golfie)();
                    backup = _closure2_slot17;
                    oscard = 'top';
                    if(!(oscard === backup)) { _fun00012_ip = 310; continue _fun00011 }
 304:
                    yankee = -1;
 310:
                    backup = _closure2_slot12;
                    oscard = backup.get;
                    oscard = oscard.bind(backup)();
                    oscard = oscard.height;
                    yankee = yankee * oscard;
                    oscard = new Array(2);
                    yankee = yankee / foxtra;
                    oscard[0] = yankee;
                    yankee = _closure2_slot4;
                    foxtra = romeon == yankee;
                    yankee = undefined;
                    if(foxtra) { _fun00012_ip = 384; continue _fun00011 }
 357:
                    backup = _closure2_slot4;
                    foxtra = backup.get;
                    foxtra = foxtra.bind(backup)();
                    backup = romeon == foxtra;
                    yankee = undefined;
                    if(backup) { _fun00012_ip = 384; continue _fun00011 }
 379:
                    yankee = foxtra.y;
 384:
                    yankee = romeon != yankee;
                    report = 0;
                    if(!yankee) { _fun00012_ip = 423; continue _fun00011 }
 393:
                    foxtra = _closure2_slot4;
                    yankee = foxtra.get;
                    yankee = yankee.bind(foxtra)();
                    romeon = romeon == yankee;
                    offset = undefined;
                    if(romeon) { _fun00012_ip = 420; continue _fun00011 }
 415:
                    offset = yankee.y;
 420:
                    report = offset;
 423:
                    oscard[1] = report;
                    report = [0, 1];
                    report = option.bind(verify)(golfie, report, oscard);
                    zuuluu['translateY'] = report;
                    michal[1] = zuuluu;
                    zuuluu = {};
                    report = _closure2_slot11;
                    tangon = report.get;
                    report = tangon.bind(report)();
                    tangon = 2;
                    report = report / tangon;
                    tangon = 0.5;
                    tangon = report + tangon;
                    zuuluu['scale'] = tangon;
                    michal[2] = zuuluu;
                    _fun00012_ip = 504; continue _fun00011;
 500:
                    michal = new Array(0);
 504:
                    entity['transform'] = michal;
                    return entity;
                }
            };
            oscard = {};
            oscard['visible'] = vacuum;
            oscard['useReducedMotion'] = source;
            source = report[output];
            source = ctrled.bind(tangon)(source);
            source = source.interpolate;
            oscard['interpolate'] = source;
            oscard['dirX'] = update;
            oscard['size'] = echoed;
            oscard['offsetAnimated'] = result;
            oscard['dirY'] = verify;
            entity['__closure'] = oscard;
            oscard = 7884133597410.0;
            entity['__workletHash'] = oscard;
            oscard = _closure1_slot16;
            entity['__initData'] = oscard;
            verify = michal.bind(zuuluu)(entity);
            zuuluu = _closure1_slot7;
            oscard = _closure1_slot1;
            entity = 18;
            entity = report[entity];
            michal = oscard.bind(tangon)(entity);
            entity = {'style': null, 'accessibilityViewIsModal': true, 'importantForAccessibility': 'yes'};
            echoed = golfie.backdrop;
            result = new Array(1);
            result[0] = echoed;
            entity['style'] = result;
            entity['onTouchDown'] = kiloes;
            entity['onAccessibilityEscape'] = kiloes;
            report = report[output];
            report = oscard.bind(tangon)(report);
            oscard = report.View;
            report = {};
            output = 'list';
            report['accessibilityRole'] = output;
            output = golfie.menu;
            golfie = new Array(5);
            golfie[0] = output;
            golfie[1] = foxtra;
            golfie[2] = offset;
            golfie[3] = verify;
            golfie[4] = option;
            report['style'] = golfie;
            golfie = function(argFoo) { // Original name: onLayout
                tangon = argFoo;
                zuuluu = _closure2_slot12;
                michal = zuuluu.set;
                entity = {};
                report = tangon.nativeEvent;
                report = report.layout;
                report = report.width;
                entity['width'] = report;
                tangon = tangon.nativeEvent;
                tangon = tangon.layout;
                tangon = tangon.height;
                entity['height'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                tangon = _closure2_slot11;
                zuuluu = tangon.set;
                romeon = _closure1_slot0;
                foxtra = _closure1_slot2;
                entity = 19;
                report = foxtra[entity];
                entity = undefined;
                verify = romeon.bind(entity)(report);
                option = verify.withSpring;
                sizing = _closure1_slot8;
                oscard = function() { // Original name: n
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 8;
                    entity = michal[entity];
                    michal = undefined;
                    tangon = zuuluu.bind(michal)(entity);
                    zuuluu = tangon.runOnJS;
                    entity = _closure2_slot13;
                    entity = zuuluu.bind(tangon)(entity);
                    entity = entity.bind(michal)();
                    return entity;
                };
                report = {};
                yankee = 8;
                yankee = foxtra[yankee];
                yankee = romeon.bind(entity)(yankee);
                yankee = yankee.runOnJS;
                report['runOnJS'] = yankee;
                offset = _closure2_slot13;
                report['openMenuCallback'] = offset;
                oscard['__closure'] = report;
                report = 14966618105405.0;
                oscard['__workletHash'] = report;
                michal = _closure1_slot14;
                oscard['__initData'] = michal;
                output = 1;
                kiloes = 'respect-motion-settings';
                result = verify;
                backup = oscard;
                michal = result[option](output, sizing, kiloes, backup, foxtra);
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            report['onLayout'] = golfie;
            option = _closure1_slot5;
            golfie = {};
            verify = _closure1_slot11;
            offset = verify.Provider;
            verify = {};
            foxtra = {};
            foxtra['menuClose'] = sizing;
            foxtra['menuDismiss'] = kiloes;
            verify['value'] = foxtra;
            romeon = _closure1_slot4;
            foxtra = romeon.Children;
            romeon = foxtra.map;
            yankee = function(argFoo, argBar) {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    report = argFoo;
                    zuuluu = 0;
                    michal = argBar;
                    entity = report;
                    if(!(zuuluu === michal)) { _fun00014_ip = 68; continue _fun00013 }
 15:
                    tangon = _closure1_slot4;
                    zuuluu = tangon.isValidElement;
                    zuuluu = zuuluu.bind(tangon)(report);
                    entity = report;
                    if(!zuuluu) { _fun00014_ip = 68; continue _fun00013 }
 39:
                    tangon = _closure1_slot4;
                    zuuluu = tangon.cloneElement;
                    michal = {};
                    oscard = _closure2_slot8;
                    michal['ref'] = oscard;
                    entity = zuuluu.bind(tangon)(report, michal);
 68:
                    return entity;
                }
            };
            yankee = romeon.bind(foxtra)(backup, yankee);
            verify['children'] = yankee;
            verify = zuuluu.bind(tangon)(offset, verify);
            golfie['children'] = verify;
            golfie = zuuluu.bind(tangon)(option, golfie);
            report['children'] = golfie;
            report = zuuluu.bind(tangon)(oscard, report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['Menu'] = michal;
    return entity;
})();