// app/modules/quests/native/QuestProgressIndicator.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    golfie = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(verify)(zuuluu, entity, tangon);
    tangon = 0;
    golfie = oscard[tangon];
    entity = undefined;
    golfie = report.bind(entity)(golfie);
    verify = golfie.useMemo;
    var _closure1_slot3 = verify;
    verify = golfie.useEffect;
    var _closure1_slot4 = verify;
    golfie = golfie.useRef;
    var _closure1_slot5 = golfie;
    tangon = oscard[tangon];
    golfie = option.bind(entity)(tangon);
    var _closure1_slot6 = golfie;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot7 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    verify = tangon.jsx;
    var _closure1_slot9 = verify;
    tangon = tangon.jsxs;
    var _closure1_slot10 = tangon;
    tangon = ['#666777', '#535564'];
    var _closure1_slot11 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    verify = option.bind(entity)(tangon);
    option = verify.createAnimatedComponent;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Circle;
    tangon = option.bind(verify)(tangon);
    var _closure1_slot12 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    verify = report.bind(entity)(tangon);
    option = verify.createStyles;
    tangon = function(argFoo) {
        tangon = argFoo;
        entity = {};
        michal = {};
        zuuluu = 'relative';
        michal['position'] = zuuluu;
        entity['wrapper'] = michal;
        michal = {'position': 'relative', 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center', 'zIndex': 1};
        entity['container'] = michal;
        michal = {'shadowOffset': null, 'shadowRadius': 20, 'shadowOpacity': 0, 'elevation': 4, 'shadowColor': '#30C77399'};
        zuuluu = {'width': 0, 'height': 0};
        michal['shadowOffset'] = zuuluu;
        entity['completionGlow'] = michal;
        michal = {};
        report = {};
        zuuluu = '-90deg';
        report['rotate'] = zuuluu;
        zuuluu = new Array(1);
        zuuluu[0] = report;
        michal['transform'] = zuuluu;
        entity['canvas'] = michal;
        michal = {};
        zuuluu = 'absolute';
        michal['position'] = zuuluu;
        zuuluu = 0.78;
        report = zuuluu * tangon;
        michal['height'] = report;
        zuuluu = zuuluu * tangon;
        michal['width'] = zuuluu;
        report = _closure1_slot1;
        oscard = _closure1_slot2;
        zuuluu = 7;
        golfie = oscard[zuuluu];
        tangon = undefined;
        golfie = report.bind(tangon)(golfie);
        golfie = golfie.radii;
        golfie = golfie.round;
        michal['borderRadius'] = golfie;
        golfie = 'hidden';
        michal['overflow'] = golfie;
        entity['imageContainer'] = michal;
        michal = {'height': '100%', 'width': '100%'};
        entity['image'] = michal;
        michal = {};
        golfie = oscard[zuuluu];
        golfie = report.bind(tangon)(golfie);
        golfie = golfie.unsafe_rawColors;
        golfie = golfie.GREEN_300;
        michal['color'] = golfie;
        entity['progressPath'] = michal;
        michal = {'position': 'absolute', 'pointerEvents': 'none'};
        entity['confetti'] = michal;
        michal = {'backgroundColor': null, 'position': 'absolute', 'top': 0, 'left': 0, 'right': 0, 'bottom': 0, 'zIndex': 2};
        zuuluu = oscard[zuuluu];
        zuuluu = report.bind(tangon)(zuuluu);
        zuuluu = zuuluu.colors;
        zuuluu = zuuluu.CARD_PRIMARY_BG;
        michal['backgroundColor'] = zuuluu;
        entity['opacityMask'] = michal;
        return entity;
    };
    tangon = option.bind(verify)(tangon);
    var _closure1_slot13 = tangon;
    tangon = {};
    option = 'function QuestProgressIndicatorTsx1(){const{styles,glowOpacity}=this.__closure;return{...styles.completionGlow,shadowOpacity:glowOpacity.get()};}';
    tangon['code'] = option;
    var _closure1_slot14 = tangon;
    tangon = {};
    option = 'function QuestProgressIndicatorTsx2(){const{circumference,animatedProgress}=this.__closure;return{strokeDashoffset:circumference-circumference*animatedProgress.get()};}';
    tangon['code'] = option;
    var _closure1_slot15 = tangon;
    tangon = {};
    option = 'function QuestProgressIndicatorTsx3(){const{underlayOpacity,styles}=this.__closure;return{opacity:underlayOpacity.get(),...styles.opacityMask};}';
    tangon['code'] = option;
    var _closure1_slot16 = tangon;
    tangon = golfie.memo;
    michal = function(argFoo) { // Original name: QuestProgressIndicator
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            result = michal.quest;
            verify = michal.size;
            update = michal.progress;
            var _closure2_slot0 = update;
            yankee = michal.loading;
            tangon = undefined;
            if(!(yankee === tangon)) { _fun00002_ip = 40; continue _fun00001 }
 38:
            yankee = false;
 40:
            var _closure2_slot1 = yankee;
            foxtra = michal.hasConfetti;
            if(!(foxtra === tangon)) { _fun00002_ip = 56; continue _fun00001 }
 54:
            foxtra = false;
 56:
            output = michal.withAnimation;
            oscard = michal.onPress;
            var _closure2_slot2 = tangon;
            var _closure2_slot3 = tangon;
            var _closure2_slot4 = tangon;
            var _closure2_slot5 = tangon;
            var _closure2_slot6 = tangon;
            var _closure2_slot7 = tangon;
            var _closure2_slot8 = tangon;
            var _closure2_slot9 = tangon;
            var _closure2_slot10 = tangon;
            var _closure2_slot11 = tangon;
            golfie = _closure1_slot0;
            zuuluu = _closure1_slot2;
            michal = 8;
            michal = zuuluu[michal];
            offset = golfie.bind(tangon)(michal);
            option = offset.useStateFromStores;
            michal = _closure1_slot8;
            report = new Array(1);
            report[0] = michal;
            michal = function() {
                entity = _closure1_slot8;
                entity = entity.useReducedMotion;
                return entity;
            };
            report = option.bind(offset)(report, michal);
            _closure2_slot2 = report;
            option = 4;
            michal = {'x-sm': 3, 'sm': 3, 'md': 3, 'md-lg': 4, 'lg': 6};
            papara = michal[verify];
            michal = {'x-sm': 40, 'sm': 64, 'md': 70, 'md-lg': 100, 'lg': 128};
            echoed = michal[verify];
            _closure2_slot3 = echoed;
            variable39 = 1;
            michal = {'x-sm': 1.6, 'sm': 1, 'md': 1.4, 'md-lg': 1.5, 'lg': 1.6};
            michal = michal[verify];
            _closure2_slot4 = michal;
            sierra = 2;
            offset = echoed / sierra;
            verify = papara / sierra;
            status = offset - verify;
            verify = global;
            verify = verify.Math;
            verify = verify.PI;
            verify = sierra * verify;
            cntext = verify * status;
            _closure2_slot5 = cntext;
            verify = _closure1_slot13;
            sizing = verify.bind(tangon)(echoed);
            _closure2_slot6 = sizing;
            verify = zuuluu[option];
            offset = golfie.bind(tangon)(verify);
            verify = offset.useSharedValue;
            vacuum = verify.bind(offset)(update);
            _closure2_slot7 = vacuum;
            zuuluu = zuuluu[option];
            verify = golfie.bind(tangon)(zuuluu);
            golfie = verify.useSharedValue;
            variable37 = 0;
            zuuluu = 0;
            if(!yankee) { _fun00002_ip = 340; continue _fun00001 }
 330:
            zuuluu = 0.7;
 340:
            source = golfie.bind(verify)(zuuluu);
            _closure2_slot8 = source;
            golfie = result.userStatus;
            romeon = null;
            verify = romeon == golfie;
            zuuluu = undefined;
            if(verify) { _fun00002_ip = 372; continue _fun00001 }
 366:
            zuuluu = golfie.completedAt;
 372:
            verify = romeon != zuuluu;
            _closure2_slot9 = verify;
            golfie = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[option];
            offset = golfie.bind(tangon)(zuuluu);
            golfie = offset.useSharedValue;
            zuuluu = 0;
            if(!verify) { _fun00002_ip = 410; continue _fun00001 }
 407:
            zuuluu = variable39;
 410:
            golfie = golfie.bind(offset)(zuuluu);
            _closure2_slot10 = golfie;
            offset = _closure1_slot0;
            zuuluu = _closure1_slot2;
            backup = zuuluu[option];
            sequen = offset.bind(tangon)(backup);
            ctrled = sequen.useAnimatedStyle;
            backup = function() { // Original name: b
                entity = {};
                zuuluu = _closure2_slot6;
                tangon = zuuluu.completionGlow;
                report = entity;
                zuuluu = copyDataProperties(report, tangon);
                zuuluu = _closure2_slot10;
                michal = zuuluu.get;
                zuuluu = michal.bind(zuuluu)();
                michal = 'shadowOpacity';
                entity[michal] = zuuluu;
                return entity;
            };
            config = {};
            config['styles'] = sizing;
            config['glowOpacity'] = golfie;
            backup['__closure'] = config;
            config = 6810183053526.0;
            backup['__workletHash'] = config;
            config = _closure1_slot14;
            backup['__initData'] = config;
            backup = ctrled.bind(sequen)(backup);
            ctrled = zuuluu[option];
            config = offset.bind(tangon)(ctrled);
            sequen = config.useAnimatedProps;
            ctrled = function() { // Original name: D
                entity = {};
                zuuluu = _closure2_slot5;
                tangon = _closure2_slot7;
                michal = tangon.get;
                michal = michal.bind(tangon)();
                michal = zuuluu * michal;
                michal = zuuluu - michal;
                entity['strokeDashoffset'] = michal;
                return entity;
            };
            record = {};
            record['circumference'] = cntext;
            record['animatedProgress'] = vacuum;
            ctrled['__closure'] = record;
            record = 17281152506254.0;
            ctrled['__workletHash'] = record;
            record = _closure1_slot15;
            ctrled['__initData'] = record;
            record = sequen.bind(config)(ctrled);
            zuuluu = zuuluu[option];
            ctrled = offset.bind(tangon)(zuuluu);
            offset = ctrled.useAnimatedStyle;
            zuuluu = function() { // Original name: G
                entity = {};
                tangon = _closure2_slot8;
                zuuluu = tangon.get;
                zuuluu = zuuluu.bind(tangon)();
                entity['opacity'] = zuuluu;
                michal = _closure2_slot6;
                report = michal.opacityMask;
                oscard = entity;
                michal = copyDataProperties(oscard, report);
                return entity;
            };
            sequen = {};
            sequen['underlayOpacity'] = source;
            sequen['styles'] = sizing;
            zuuluu['__closure'] = sequen;
            sequen = 4427598698568.0;
            zuuluu['__workletHash'] = sequen;
            sequen = _closure1_slot16;
            zuuluu['__initData'] = sequen;
            offset = offset.bind(ctrled)(zuuluu);
            zuuluu = _closure1_slot4;
            ctrled = new Array(3);
            ctrled[0] = vacuum;
            ctrled[1] = update;
            ctrled[2] = report;
            update = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = _closure2_slot7;
                    michal = zuuluu.set;
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    entity = 9;
                    tangon = tangon[entity];
                    entity = undefined;
                    oscard = report.bind(entity)(tangon);
                    report = oscard.withTiming;
                    tangon = _closure2_slot0;
                    entity = {};
                    option = _closure2_slot2;
                    golfie = 500;
                    if(!option) { _fun00004_ip = 63; continue _fun00003 }
 61:
                    golfie = 0;
 63:
                    entity['duration'] = golfie;
                    entity = report.bind(oscard)(tangon, entity);
                    entity = michal.bind(zuuluu)(entity);
                    entity = function() {
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 4;
                        michal = michal[entity];
                        entity = undefined;
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.cancelAnimation;
                        michal = _closure2_slot7;
                        michal = zuuluu.bind(tangon)(michal);
                        return entity;
                    };
                    return entity;
                }
            };
            update = zuuluu.bind(tangon)(update, ctrled);
            update = new Array(2);
            update[0] = source;
            update[1] = yankee;
            yankee = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zuuluu = _closure2_slot8;
                    michal = zuuluu.set;
                    oscard = _closure1_slot0;
                    report = _closure1_slot2;
                    tangon = 9;
                    report = report[tangon];
                    tangon = undefined;
                    oscard = oscard.bind(tangon)(report);
                    report = oscard.withTiming;
                    entity = _closure2_slot1;
                    tangon = 0;
                    if(!entity) { _fun00006_ip = 61; continue _fun00005 }
 51:
                    tangon = 0.7;
 61:
                    entity = {};
                    golfie = 500;
                    entity['duration'] = golfie;
                    entity = report.bind(oscard)(tangon, entity);
                    entity = michal.bind(zuuluu)(entity);
                    entity = function() {
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 4;
                        michal = michal[entity];
                        entity = undefined;
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.cancelAnimation;
                        michal = _closure2_slot8;
                        michal = zuuluu.bind(tangon)(michal);
                        return entity;
                    };
                    return entity;
                }
            };
            yankee = zuuluu.bind(tangon)(yankee, update);
            yankee = _closure1_slot5;
            ctrled = yankee.bind(tangon)(romeon);
            _closure2_slot11 = ctrled;
            update = _closure1_slot3;
            source = sizing.confetti;
            yankee = new Array(3);
            yankee[0] = source;
            yankee[1] = michal;
            yankee[2] = echoed;
            michal = function() {
                entity = {};
                michal = _closure2_slot6;
                report = michal.confetti;
                oscard = entity;
                michal = copyDataProperties(oscard, report);
                tangon = _closure2_slot3;
                michal = 'width';
                entity[michal] = tangon;
                tangon = _closure2_slot3;
                michal = 'height';
                entity[michal] = tangon;
                michal = {};
                zuuluu = _closure2_slot4;
                michal['scale'] = zuuluu;
                zuuluu = new Array(1);
                zuuluu[0] = michal;
                michal = 'transform';
                entity[michal] = zuuluu;
                return entity;
            };
            source = update.bind(tangon)(michal, yankee);
            michal = new Array(3);
            michal[0] = verify;
            michal[1] = golfie;
            michal[2] = report;
            entity = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    michal = _closure2_slot2;
                    if(michal) { _fun00008_ip = 119; continue _fun00007 }
 10:
                    michal = _closure2_slot9;
                    if(!michal) { _fun00008_ip = 119; continue _fun00007 }
 17:
                    michal = _closure2_slot9;
                    if(!michal) { _fun00008_ip = 160; continue _fun00007 }
 27:
                    tangon = _closure2_slot10;
                    zuuluu = tangon.set;
                    oscard = _closure1_slot0;
                    report = _closure1_slot2;
                    michal = 9;
                    report = report[michal];
                    michal = undefined;
                    golfie = oscard.bind(michal)(report);
                    oscard = golfie.withTiming;
                    report = {};
                    michal = 500;
                    report['duration'] = michal;
                    michal = 1;
                    michal = oscard.bind(golfie)(michal, report);
                    michal = zuuluu.bind(tangon)(michal);
                    michal = _closure2_slot11;
                    zuuluu = michal.current;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00008_ip = 160; continue _fun00007 }
 107:
                    michal = zuuluu.play;
                    michal = michal.bind(zuuluu)();
                    _fun00008_ip = 160; continue _fun00007;
 119:
                    tangon = _closure2_slot10;
                    zuuluu = tangon.set;
                    michal = 0;
                    michal = zuuluu.bind(tangon)(michal);
                    entity = _closure2_slot11;
                    michal = entity.current;
                    entity = null;
                    if(!(entity != michal)) { _fun00008_ip = 160; continue _fun00007 }
 150:
                    entity = michal.reset;
                    entity = entity.bind(michal)();
 160:
                    entity = undefined;
                    return entity;
                }
            };
            entity = zuuluu.bind(tangon)(entity, michal);
            if(!(romeon != oscard)) { _fun00002_ip = 819; continue _fun00001 }
 791:
            michal = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 10;
            entity = zuuluu[entity];
            entity = michal.bind(tangon)(entity);
            zuuluu = entity.PressableOpacity;
            _fun00002_ip = 829; continue _fun00001;
 819:
            entity = _closure1_slot6;
            zuuluu = entity.Fragment;
 829:
            michal = _closure1_slot9;
            entity = {};
            if(!(romeon != oscard)) { _fun00002_ip = 847; continue _fun00001 }
 839:
            report = {};
            report['onPress'] = oscard;
            _fun00002_ip = 849; continue _fun00001;
 847:
            report = {};
 849:
            variable42 = entity;
            variable41 = report;
            report = copyDataProperties(variable42, variable41);
            golfie = _closure1_slot10;
            verify = _closure1_slot1;
            target = _closure1_slot2;
            report = target[option];
            report = verify.bind(tangon)(report);
            oscard = report.View;
            report = {};
            update = sizing.wrapper;
            yankee = new Array(2);
            yankee[0] = update;
            yankee[1] = backup;
            report['style'] = yankee;
            config = _closure1_slot9;
            option = target[option];
            option = verify.bind(tangon)(option);
            verify = option.View;
            option = {};
            option['style'] = offset;
            verify = config.bind(tangon)(verify, option);
            option = new Array(2);
            option[0] = verify;
            offset = _closure1_slot7;
            verify = {};
            yankee = sizing.container;
            verify['style'] = yankee;
            sequen = _closure1_slot0;
            vacuum = 5;
            yankee = target[vacuum];
            yankee = sequen.bind(tangon)(yankee);
            backup = yankee.Svg;
            yankee = {};
            yankee['height'] = echoed;
            yankee['width'] = echoed;
            update = sizing.canvas;
            yankee['style'] = update;
            update = target[vacuum];
            update = sequen.bind(tangon)(update);
            limora = update.Defs;
            update = {};
            whisks = target[vacuum];
            whisks = sequen.bind(tangon)(whisks);
            equals = whisks.LinearGradient;
            whisks = {'id': 'underlayGradient', 'x1': '0', 'y1': '0.5', 'x2': '1', 'y2': '0.5'};
            variable38 = '0';
            variable40 = '1';
            quebec = target[vacuum];
            quebec = sequen.bind(tangon)(quebec);
            variable36 = quebec.Stop;
            quebec = {};
            quebec['offset'] = variable38;
            variable38 = _closure1_slot11;
            variable37 = variable38[variable37];
            quebec['stopColor'] = variable37;
            variable36 = config.bind(tangon)(variable36, quebec);
            quebec = new Array(2);
            quebec[0] = variable36;
            variable36 = target[vacuum];
            variable36 = sequen.bind(tangon)(variable36);
            variable37 = variable36.Stop;
            variable36 = {};
            variable36['offset'] = variable40;
            variable38 = variable38[variable39];
            variable36['stopColor'] = variable38;
            variable36 = config.bind(tangon)(variable37, variable36);
            quebec[1] = variable36;
            whisks['children'] = quebec;
            whisks = golfie.bind(tangon)(equals, whisks);
            update['children'] = whisks;
            limora = config.bind(tangon)(limora, update);
            update = new Array(3);
            update[0] = limora;
            vacuum = target[vacuum];
            vacuum = sequen.bind(tangon)(vacuum);
            sequen = vacuum.Circle;
            vacuum = {};
            target = echoed / sierra;
            vacuum['cx'] = target;
            target = echoed / sierra;
            vacuum['cy'] = target;
            vacuum['r'] = status;
            target = 'none';
            vacuum['fill'] = target;
            limora = 'url(#underlayGradient)';
            vacuum['stroke'] = limora;
            vacuum['strokeWidth'] = papara;
            vacuum = config.bind(tangon)(sequen, vacuum);
            update[1] = vacuum;
            sequen = _closure1_slot12;
            vacuum = {};
            limora = echoed / sierra;
            vacuum['cx'] = limora;
            sierra = echoed / sierra;
            vacuum['cy'] = sierra;
            vacuum['r'] = status;
            vacuum['fill'] = target;
            target = sizing.progressPath;
            target = target.color;
            vacuum['stroke'] = target;
            vacuum['strokeWidth'] = papara;
            vacuum['strokeDasharray'] = cntext;
            cntext = 'round';
            vacuum['strokeLinecap'] = cntext;
            vacuum['animatedProps'] = record;
            vacuum = config.bind(tangon)(sequen, vacuum);
            update[2] = vacuum;
            yankee['children'] = update;
            backup = golfie.bind(tangon)(backup, yankee);
            yankee = new Array(3);
            yankee[0] = backup;
            romeon = null;
            if(!foxtra) { _fun00002_ip = 1432; continue _fun00001 }
 1360:
            update = _closure1_slot9;
            backup = _closure1_slot1;
            vacuum = _closure1_slot2;
            foxtra = 11;
            foxtra = vacuum[foxtra];
            backup = backup.bind(tangon)(foxtra);
            foxtra = {};
            foxtra['ref'] = ctrled;
            foxtra['style'] = source;
            ctrled = _closure1_slot0;
            source = 12;
            source = vacuum[source];
            source = ctrled.bind(tangon)(source);
            foxtra['source'] = source;
            source = false;
            foxtra['autoPlay'] = source;
            foxtra['loop'] = source;
            romeon = update.bind(tangon)(backup, foxtra);
 1432:
            yankee[1] = romeon;
            backup = _closure1_slot9;
            foxtra = _closure1_slot7;
            romeon = {};
            sizing = sizing.imageContainer;
            romeon['style'] = sizing;
            sizing = _closure1_slot1;
            update = _closure1_slot2;
            kiloes = 13;
            kiloes = update[kiloes];
            sizing = sizing.bind(tangon)(kiloes);
            kiloes = {};
            kiloes['quest'] = result;
            result = 0.78;
            update = result * echoed;
            kiloes['height'] = update;
            result = result * echoed;
            kiloes['width'] = result;
            kiloes['withAnimation'] = output;
            kiloes = backup.bind(tangon)(sizing, kiloes);
            romeon['children'] = kiloes;
            romeon = backup.bind(tangon)(foxtra, romeon);
            yankee[2] = romeon;
            verify['children'] = yankee;
            verify = golfie.bind(tangon)(offset, verify);
            option[1] = verify;
            report['children'] = option;
            oscard = golfie.bind(tangon)(oscard, report);
            report = 'children';
            entity[report] = oscard;
            entity = michal.bind(tangon)(zuuluu, entity);
            return entity;
        }
    };
    michal = tangon.bind(golfie)(michal);
    tangon = 14;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/quests/native/QuestProgressIndicator.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();