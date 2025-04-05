// app/design/components/Button/native/ButtonPill.native.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    option = argBar;
    offset = argBaz;
    zuuluu = argFre;
    verify = argPlu;
    var _closure1_slot0 = option;
    var _closure1_slot1 = offset;
    var _closure1_slot2 = verify;
    entity = function(argFoo) { // Original name: PillWrapper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            romeon = entity.children;
            michal = entity.variant;
            backup = entity.style;
            offset = entity.pressed;
            entity = entity.shiny;
            report = undefined;
            if(!(entity === report)) { _fun00002_ip = 38; continue _fun00001 }
 36:
            entity = false;
 38:
            oscard = _closure1_slot0;
            verify = _closure1_slot2;
            zuuluu = 7;
            tangon = verify[zuuluu];
            option = oscard.bind(report)(tangon);
            tangon = option.useButtonPillStyles;
            foxtra = tangon.bind(option)(michal, offset);
            zuuluu = verify[zuuluu];
            tangon = oscard.bind(report)(zuuluu);
            zuuluu = tangon.useGradientPillStyles;
            result = zuuluu.bind(tangon)(michal);
            tangon = 8;
            zuuluu = verify[tangon];
            kiloes = oscard.bind(report)(zuuluu);
            yankee = kiloes.useToken;
            option = _closure1_slot1;
            zuuluu = 6;
            offset = verify[zuuluu];
            offset = option.bind(report)(offset);
            offset = offset.colors;
            offset = offset.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT;
            offset = yankee.bind(kiloes)(offset);
            sizing = new Array(3);
            sizing[0] = offset;
            offset = verify[tangon];
            kiloes = oscard.bind(report)(offset);
            yankee = kiloes.useToken;
            offset = verify[zuuluu];
            offset = option.bind(report)(offset);
            offset = offset.colors;
            offset = offset.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2;
            offset = yankee.bind(kiloes)(offset);
            sizing[1] = offset;
            tangon = verify[tangon];
            oscard = oscard.bind(report)(tangon);
            tangon = oscard.useToken;
            zuuluu = verify[zuuluu];
            zuuluu = option.bind(report)(zuuluu);
            zuuluu = zuuluu.colors;
            zuuluu = zuuluu.REDESIGN_BUTTON_PREMIUM_PRIMARY_PINK_FOR_GRADIENT;
            zuuluu = tangon.bind(oscard)(zuuluu);
            sizing[2] = zuuluu;
            yankee = null;
            if(!entity) { _fun00002_ip = 286; continue _fun00001 }
 244:
            tangon = _closure1_slot7;
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot2;
            entity = 9;
            entity = oscard[entity];
            entity = zuuluu.bind(report)(entity);
            zuuluu = entity.ButtonShine;
            entity = {};
            entity['variant'] = michal;
            yankee = tangon.bind(report)(zuuluu, entity);
 286:
            entity = 'experimental_premium-primary';
            if(!(entity !== michal)) { _fun00002_ip = 370; continue _fun00001 }
 296:
            zuuluu = _closure1_slot8;
            michal = _closure1_slot1;
            tangon = _closure1_slot2;
            entity = 11;
            entity = tangon[entity];
            entity = michal.bind(report)(entity);
            michal = entity.View;
            entity = {};
            tangon = new Array(2);
            tangon[0] = backup;
            tangon[1] = foxtra;
            entity['style'] = tangon;
            tangon = new Array(2);
            tangon[0] = romeon;
            tangon[1] = yankee;
            entity['children'] = tangon;
            entity = zuuluu.bind(report)(michal, entity);
            _fun00002_ip = 557; continue _fun00001;
 370:
            tangon = _closure1_slot8;
            zuuluu = _closure1_slot9;
            michal = {};
            kiloes = _closure1_slot7;
            option = _closure1_slot1;
            offset = _closure1_slot2;
            oscard = 10;
            oscard = offset[oscard];
            verify = option.bind(report)(oscard);
            oscard = {};
            output = {'x': 0, 'y': 0};
            oscard['start'] = output;
            output = {'x': 1, 'y': 0};
            oscard['end'] = output;
            output = new Array(3);
            output[0] = backup;
            output[1] = result;
            result = _closure1_slot6;
            result = result.absoluteFill;
            output[2] = result;
            oscard['style'] = output;
            oscard['colors'] = sizing;
            verify = kiloes.bind(report)(verify, oscard);
            oscard = new Array(2);
            oscard[0] = verify;
            verify = _closure1_slot8;
            golfie = 11;
            golfie = offset[golfie];
            golfie = option.bind(report)(golfie);
            option = golfie.View;
            golfie = {};
            offset = new Array(2);
            offset[0] = backup;
            offset[1] = foxtra;
            golfie['style'] = offset;
            offset = new Array(2);
            offset[0] = romeon;
            offset[1] = yankee;
            golfie['children'] = offset;
            golfie = verify.bind(report)(option, golfie);
            oscard[1] = golfie;
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 557:
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    report = function(argFoo) { // Original name: BasicButtonPill
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            option = entity.children;
            yankee = entity.style;
            golfie = entity.pressed;
            offset = entity.variant;
            tangon = undefined;
            if(!(offset === tangon)) { _fun00004_ip = 34; continue _fun00003 }
 30:
            offset = 'primary';
 34:
            michal = entity.size;
            if(!(michal === tangon)) { _fun00004_ip = 72; continue _fun00003 }
 43:
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            zuuluu = 4;
            zuuluu = oscard[zuuluu];
            zuuluu = report.bind(tangon)(zuuluu);
            michal = zuuluu.DEFAULT_BUTTON_SIZE;
 72:
            oscard = entity.shiny;
            if(!(oscard === tangon)) { _fun00004_ip = 84; continue _fun00003 }
 82:
            oscard = false;
 84:
            entity = _closure1_slot14;
            verify = entity.bind(tangon)(offset, michal);
            zuuluu = _closure1_slot7;
            michal = _closure1_slot17;
            entity = {};
            entity['variant'] = offset;
            romeon = verify.pill;
            offset = new Array(2);
            offset[0] = romeon;
            offset[1] = yankee;
            entity['style'] = offset;
            entity['pressed'] = golfie;
            entity['shiny'] = oscard;
            golfie = _closure1_slot7;
            oscard = _closure1_slot5;
            report = {};
            verify = verify.childContainer;
            report['style'] = verify;
            report['children'] = option;
            report = golfie.bind(tangon)(oscard, report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot18 = report;
    tangon = function(argFoo) { // Original name: LoadingButtonPill
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            echoed = michal.children;
            golfie = michal.style;
            report = michal.pressed;
            sizing = michal.variant;
            tangon = undefined;
            if(!(sizing === tangon)) { _fun00006_ip = 36; continue _fun00005 }
 32:
            sizing = 'primary';
 36:
            foxtra = michal.size;
            if(!(foxtra === tangon)) { _fun00006_ip = 74; continue _fun00005 }
 45:
            oscard = _closure1_slot0;
            option = _closure1_slot2;
            zuuluu = 4;
            zuuluu = option[zuuluu];
            zuuluu = oscard.bind(tangon)(zuuluu);
            foxtra = zuuluu.DEFAULT_BUTTON_SIZE;
 74:
            oscard = michal.loading;
            if(!(oscard === tangon)) { _fun00006_ip = 86; continue _fun00005 }
 84:
            oscard = false;
 86:
            var _closure2_slot0 = oscard;
            backup = michal.loaderSize;
            var _closure2_slot1 = tangon;
            var _closure2_slot2 = tangon;
            michal = _closure1_slot14;
            yankee = michal.bind(tangon)(sizing, foxtra);
            zuuluu = _closure1_slot4;
            michal = zuuluu.useRef;
            kiloes = null;
            michal = michal.bind(zuuluu)(kiloes);
            _closure2_slot1 = michal;
            zuuluu = _closure1_slot4;
            michal = zuuluu.useState;
            zuuluu = michal.bind(zuuluu)(oscard);
            michal = _closure1_slot3;
            option = 2;
            romeon = michal.bind(tangon)(zuuluu, option);
            zuuluu = 0;
            verify = romeon[zuuluu];
            michal = 1;
            romeon = romeon[michal];
            _closure2_slot2 = romeon;
            result = _closure1_slot4;
            output = result.useEffect;
            romeon = new Array(1);
            romeon[0] = oscard;
            entity = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    michal = _closure2_slot1;
                    zuuluu = michal.current;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00008_ip = 42; continue _fun00007 }
 18:
                    michal = global;
                    tangon = michal.clearTimeout;
                    michal = _closure2_slot1;
                    zuuluu = michal.current;
                    michal = undefined;
                    michal = tangon.bind(michal)(zuuluu);
 42:
                    michal = _closure2_slot0;
                    if(michal) { _fun00008_ip = 90; continue _fun00007 }
 49:
                    zuuluu = _closure2_slot1;
                    michal = global;
                    oscard = michal.setTimeout;
                    report = undefined;
                    tangon = function() {
                        zuuluu = _closure2_slot2;
                        entity = undefined;
                        michal = false;
                        michal = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    michal = 500;
                    michal = oscard.bind(report)(tangon, michal);
                    zuuluu['current'] = michal;
                    _fun00008_ip = 103; continue _fun00007;
 90:
                    zuuluu = _closure2_slot2;
                    michal = undefined;
                    entity = true;
                    entity = zuuluu.bind(michal)(entity);
 103:
                    entity = undefined;
                    return entity;
                }
            };
            entity = output.bind(result)(entity, romeon);
            entity = _closure1_slot20;
            oscard = entity.bind(tangon)(oscard, foxtra);
            entity = _closure1_slot3;
            entity = entity.bind(tangon)(oscard, option);
            source = entity[zuuluu];
            romeon = entity[michal];
            zuuluu = _closure1_slot8;
            michal = _closure1_slot17;
            entity = {};
            entity['variant'] = sizing;
            option = yankee.pill;
            oscard = new Array(2);
            oscard[0] = option;
            oscard[1] = golfie;
            entity['style'] = oscard;
            entity['pressed'] = report;
            result = _closure1_slot7;
            golfie = _closure1_slot1;
            output = _closure1_slot2;
            oscard = 11;
            report = output[oscard];
            report = golfie.bind(tangon)(report);
            option = report.View;
            report = {};
            ctrled = yankee.childContainer;
            update = new Array(2);
            update[0] = ctrled;
            update[1] = source;
            report['style'] = update;
            report['children'] = echoed;
            option = result.bind(tangon)(option, report);
            report = new Array(2);
            report[0] = option;
            option = _closure1_slot7;
            oscard = output[oscard];
            oscard = golfie.bind(tangon)(oscard);
            golfie = oscard.View;
            oscard = {};
            output = yankee.ellipsis;
            yankee = new Array(2);
            yankee[0] = output;
            yankee[1] = romeon;
            oscard['style'] = yankee;
            if(!verify) { _fun00006_ip = 447; continue _fun00005 }
 394:
            romeon = _closure1_slot7;
            yankee = _closure1_slot0;
            output = _closure1_slot2;
            offset = 12;
            offset = output[offset];
            offset = yankee.bind(tangon)(offset);
            yankee = offset.Ellipsis;
            offset = {};
            offset['variant'] = sizing;
            if(!(kiloes != backup)) { _fun00006_ip = 437; continue _fun00005 }
 434:
            foxtra = backup;
 437:
            offset['size'] = foxtra;
            verify = romeon.bind(tangon)(yankee, offset);
 447:
            oscard['children'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot19 = tangon;
    michal = function(argFoo, argBar) { // Original name: useLoadingStyles
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            backup = argFoo;
            var _closure2_slot0 = backup;
            tangon = _closure1_slot4;
            zuuluu = tangon.useContext;
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            entity = 13;
            entity = golfie[entity];
            offset = undefined;
            entity = oscard.bind(offset)(entity);
            entity = entity.AccessibilityPreferencesContext;
            entity = zuuluu.bind(tangon)(entity);
            entity = entity.reducedMotion;
            romeon = entity.enabled;
            var _closure2_slot1 = romeon;
            golfie = 12;
            zuuluu = 'lg';
            entity = argBar;
            if(!(zuuluu === entity)) { _fun00010_ip = 87; continue _fun00009 }
 84:
            golfie = 18;
 87:
            var _closure2_slot2 = golfie;
            verify = _closure1_slot0;
            yankee = _closure1_slot2;
            option = 11;
            entity = yankee[option];
            tangon = verify.bind(offset)(entity);
            zuuluu = tangon.useAnimatedStyle;
            entity = function() { // Original name: o
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    michal = _closure1_slot0;
                    entity = _closure1_slot2;
                    verify = 14;
                    entity = entity[verify];
                    option = undefined;
                    golfie = michal.bind(option)(entity);
                    oscard = golfie.withSpring;
                    entity = _closure2_slot0;
                    report = 1;
                    if(!entity) { _fun00012_ip = 45; continue _fun00011 }
 43:
                    report = 0;
 45:
                    michal = _closure1_slot0;
                    entity = _closure1_slot2;
                    romeon = 15;
                    entity = entity[romeon];
                    entity = michal.bind(option)(entity);
                    michal = entity.SUBTLE_SPRING;
                    entity = 'animate-always';
                    golfie = oscard.bind(golfie)(report, michal, entity);
                    entity = _closure2_slot1;
                    michal = {};
                    if(entity) { _fun00012_ip = 195; continue _fun00011 }
 93:
                    michal['opacity'] = golfie;
                    report = {};
                    oscard = _closure1_slot0;
                    entity = _closure1_slot2;
                    entity = entity[verify];
                    offset = oscard.bind(option)(entity);
                    verify = offset.withSpring;
                    entity = _closure2_slot0;
                    oscard = 0;
                    if(!entity) { _fun00012_ip = 144; continue _fun00011 }
 130:
                    yankee = _closure2_slot2;
                    entity = -1;
                    oscard = entity * yankee;
 144:
                    yankee = _closure1_slot0;
                    entity = _closure1_slot2;
                    entity = entity[romeon];
                    entity = yankee.bind(option)(entity);
                    entity = entity.SUBTLE_SPRING;
                    entity = verify.bind(offset)(oscard, entity);
                    report['translateY'] = entity;
                    entity = new Array(1);
                    entity[0] = report;
                    michal['transform'] = entity;
                    entity = michal;
                    _fun00012_ip = 269; continue _fun00011;
 195:
                    report = _closure2_slot0;
                    zuuluu = golfie;
                    if(report) { _fun00012_ip = 241; continue _fun00011 }
 205:
                    oscard = _closure1_slot0;
                    verify = _closure1_slot2;
                    report = 11;
                    report = verify[report];
                    oscard = oscard.bind(option)(report);
                    report = oscard.withDelay;
                    tangon = _closure1_slot10;
                    zuuluu = report.bind(oscard)(tangon, golfie);
 241:
                    michal['opacity'] = zuuluu;
                    tangon = {};
                    zuuluu = 0;
                    tangon['translateY'] = zuuluu;
                    zuuluu = new Array(1);
                    zuuluu[0] = tangon;
                    michal['transform'] = zuuluu;
                    entity = michal;
 269:
                    return entity;
                }
            };
            oscard = {};
            kiloes = 14;
            foxtra = yankee[kiloes];
            foxtra = verify.bind(offset)(foxtra);
            foxtra = foxtra.withSpring;
            oscard['withSpring'] = foxtra;
            oscard['loading'] = backup;
            foxtra = 15;
            sizing = yankee[foxtra];
            sizing = verify.bind(offset)(sizing);
            sizing = sizing.SUBTLE_SPRING;
            oscard['SUBTLE_SPRING'] = sizing;
            oscard['useReducedMotion'] = romeon;
            sizing = yankee[option];
            sizing = verify.bind(offset)(sizing);
            sizing = sizing.withDelay;
            oscard['withDelay'] = sizing;
            sizing = _closure1_slot10;
            oscard['FADE_DELAY'] = sizing;
            oscard['offsetY'] = golfie;
            entity['__closure'] = oscard;
            oscard = 9388603334085.0;
            entity['__workletHash'] = oscard;
            oscard = _closure1_slot15;
            entity['__initData'] = oscard;
            zuuluu = zuuluu.bind(tangon)(entity);
            entity = new Array(2);
            entity[0] = zuuluu;
            zuuluu = yankee[option];
            tangon = verify.bind(offset)(zuuluu);
            zuuluu = tangon.useAnimatedStyle;
            michal = function() { // Original name: s
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    michal = _closure1_slot0;
                    entity = _closure1_slot2;
                    offset = 14;
                    entity = entity[offset];
                    verify = undefined;
                    option = michal.bind(verify)(entity);
                    golfie = option.withSpring;
                    entity = _closure2_slot0;
                    zuuluu = 0;
                    oscard = 0;
                    if(!entity) { _fun00014_ip = 47; continue _fun00013 }
 44:
                    oscard = 1;
 47:
                    michal = _closure1_slot0;
                    entity = _closure1_slot2;
                    foxtra = 15;
                    entity = entity[foxtra];
                    entity = michal.bind(verify)(entity);
                    michal = entity.SUBTLE_SPRING;
                    entity = 'animate-always';
                    option = golfie.bind(option)(oscard, michal, entity);
                    entity = _closure2_slot1;
                    michal = {};
                    if(entity) { _fun00014_ip = 187; continue _fun00013 }
 95:
                    michal['opacity'] = option;
                    oscard = {};
                    golfie = _closure1_slot0;
                    entity = _closure1_slot2;
                    entity = entity[offset];
                    yankee = golfie.bind(verify)(entity);
                    offset = yankee.withSpring;
                    entity = _closure2_slot0;
                    golfie = 0;
                    if(entity) { _fun00014_ip = 136; continue _fun00013 }
 132:
                    golfie = _closure2_slot2;
 136:
                    romeon = _closure1_slot0;
                    entity = _closure1_slot2;
                    entity = entity[foxtra];
                    entity = romeon.bind(verify)(entity);
                    entity = entity.SUBTLE_SPRING;
                    entity = offset.bind(yankee)(golfie, entity);
                    oscard['translateY'] = entity;
                    entity = new Array(1);
                    entity[0] = oscard;
                    michal['transform'] = entity;
                    entity = michal;
                    _fun00014_ip = 259; continue _fun00013;
 187:
                    oscard = _closure2_slot0;
                    tangon = option;
                    if(!oscard) { _fun00014_ip = 233; continue _fun00013 }
 197:
                    golfie = _closure1_slot0;
                    offset = _closure1_slot2;
                    oscard = 11;
                    oscard = offset[oscard];
                    golfie = golfie.bind(verify)(oscard);
                    oscard = golfie.withDelay;
                    report = _closure1_slot10;
                    tangon = oscard.bind(golfie)(report, option);
 233:
                    michal['opacity'] = tangon;
                    tangon = {};
                    tangon['translateY'] = zuuluu;
                    zuuluu = new Array(1);
                    zuuluu[0] = tangon;
                    michal['transform'] = zuuluu;
                    entity = michal;
 259:
                    return entity;
                }
            };
            oscard = {};
            kiloes = yankee[kiloes];
            kiloes = verify.bind(offset)(kiloes);
            kiloes = kiloes.withSpring;
            oscard['withSpring'] = kiloes;
            oscard['loading'] = backup;
            foxtra = yankee[foxtra];
            foxtra = verify.bind(offset)(foxtra);
            foxtra = foxtra.SUBTLE_SPRING;
            oscard['SUBTLE_SPRING'] = foxtra;
            oscard['useReducedMotion'] = romeon;
            option = yankee[option];
            option = verify.bind(offset)(option);
            option = option.withDelay;
            oscard['withDelay'] = option;
            option = _closure1_slot10;
            oscard['FADE_DELAY'] = option;
            oscard['offsetY'] = golfie;
            michal['__closure'] = oscard;
            oscard = 8255420825872.0;
            michal['__workletHash'] = oscard;
            report = _closure1_slot16;
            michal['__initData'] = report;
            michal = zuuluu.bind(tangon)(michal);
            entity[1] = michal;
            return entity;
        }
    };
    var _closure1_slot20 = michal;
    entity = global;
    romeon = entity.Object;
    yankee = romeon.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = yankee.bind(romeon)(zuuluu, entity, golfie);
    entity = 0;
    golfie = verify[entity];
    entity = undefined;
    golfie = offset.bind(entity)(golfie);
    var _closure1_slot3 = golfie;
    golfie = 1;
    offset = verify[golfie];
    golfie = argCor;
    golfie = golfie.bind(entity)(offset);
    var _closure1_slot4 = golfie;
    golfie = 2;
    golfie = verify[golfie];
    golfie = option.bind(entity)(golfie);
    offset = golfie.View;
    var _closure1_slot5 = offset;
    golfie = golfie.StyleSheet;
    var _closure1_slot6 = golfie;
    golfie = 3;
    golfie = verify[golfie];
    golfie = option.bind(entity)(golfie);
    offset = golfie.jsx;
    var _closure1_slot7 = offset;
    offset = golfie.jsxs;
    var _closure1_slot8 = offset;
    golfie = golfie.Fragment;
    var _closure1_slot9 = golfie;
    golfie = 300;
    var _closure1_slot10 = golfie;
    golfie = 4;
    offset = verify[golfie];
    foxtra = option.bind(entity)(offset);
    romeon = foxtra.getButtonPadding;
    offset = verify[golfie];
    offset = option.bind(entity)(offset);
    yankee = offset.SMALL_BUTTON_HEIGHT;
    offset = verify[golfie];
    offset = option.bind(entity)(offset);
    offset = offset.SMALL_BUTTON_ICON_SIZE;
    offset = romeon.bind(foxtra)(yankee, offset);
    var _closure1_slot11 = offset;
    offset = verify[golfie];
    foxtra = option.bind(entity)(offset);
    romeon = foxtra.getButtonPadding;
    offset = verify[golfie];
    offset = option.bind(entity)(offset);
    yankee = offset.MEDIUM_BUTTON_HEIGHT;
    offset = verify[golfie];
    offset = option.bind(entity)(offset);
    offset = offset.MEDIUM_BUTTON_ICON_SIZE;
    offset = romeon.bind(foxtra)(yankee, offset);
    var _closure1_slot12 = offset;
    offset = verify[golfie];
    romeon = option.bind(entity)(offset);
    yankee = romeon.getButtonPadding;
    offset = verify[golfie];
    offset = option.bind(entity)(offset);
    offset = offset.LARGE_BUTTON_HEIGHT;
    golfie = verify[golfie];
    golfie = option.bind(entity)(golfie);
    golfie = golfie.LARGE_BUTTON_ICON_SIZE;
    golfie = yankee.bind(romeon)(offset, golfie);
    var _closure1_slot13 = golfie;
    golfie = 5;
    golfie = verify[golfie];
    yankee = option.bind(entity)(golfie);
    offset = yankee.createStyles;
    golfie = function(argFoo, argBar) {
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            michal = argBar;
            zuuluu = {};
            entity = 'sm';
            if(!(entity !== michal)) { _fun00016_ip = 220; continue _fun00015 }
 16:
            entity = 'md';
            if(!(entity !== michal)) { _fun00016_ip = 129; continue _fun00015 }
 24:
            entity = 'lg';
            if(!(entity === michal)) { _fun00016_ip = 309; continue _fun00015 }
 35:
            entity = {};
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            tangon = 4;
            option = golfie[tangon];
            report = undefined;
            option = oscard.bind(report)(option);
            option = option.LARGE_BUTTON_HEIGHT;
            entity['minHeight'] = option;
            option = golfie[tangon];
            option = oscard.bind(report)(option);
            option = option.LARGE_BUTTON_HEIGHT;
            entity['minWidth'] = option;
            tangon = golfie[tangon];
            tangon = oscard.bind(report)(tangon);
            tangon = tangon.LARGE_BUTTON_HORIZONTAL_PADDING;
            entity['paddingHorizontal'] = tangon;
            michal = _closure1_slot13;
            entity['paddingVertical'] = michal;
            zuuluu = entity;
            _fun00016_ip = 309; continue _fun00015;
 129:
            entity = {};
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            tangon = 4;
            option = golfie[tangon];
            report = undefined;
            option = oscard.bind(report)(option);
            option = option.MEDIUM_BUTTON_HEIGHT;
            entity['minHeight'] = option;
            option = golfie[tangon];
            option = oscard.bind(report)(option);
            option = option.MEDIUM_BUTTON_HEIGHT;
            entity['minWidth'] = option;
            tangon = golfie[tangon];
            tangon = oscard.bind(report)(tangon);
            tangon = tangon.MEDIUM_BUTTON_HORIZONTAL_PADDING;
            entity['paddingHorizontal'] = tangon;
            michal = _closure1_slot12;
            entity['paddingVertical'] = michal;
            zuuluu = entity;
            _fun00016_ip = 309; continue _fun00015;
 220:
            entity = {};
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            tangon = 4;
            option = golfie[tangon];
            report = undefined;
            option = oscard.bind(report)(option);
            option = option.SMALL_BUTTON_HEIGHT;
            entity['minHeight'] = option;
            option = golfie[tangon];
            option = oscard.bind(report)(option);
            option = option.SMALL_BUTTON_HEIGHT;
            entity['minWidth'] = option;
            tangon = golfie[tangon];
            tangon = oscard.bind(report)(tangon);
            tangon = tangon.SMALL_BUTTON_HORIZONTAL_PADDING;
            entity['paddingHorizontal'] = tangon;
            michal = _closure1_slot11;
            entity['paddingVertical'] = michal;
            zuuluu = entity;
 309:
            entity = {};
            michal = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center', 'overflow': 'hidden'};
            option = _closure1_slot0;
            golfie = _closure1_slot2;
            report = 4;
            report = golfie[report];
            oscard = undefined;
            report = option.bind(oscard)(report);
            report = report.BUTTON_BORDER_WIDTH;
            michal['borderWidth'] = report;
            report = _closure1_slot1;
            tangon = 6;
            tangon = golfie[tangon];
            tangon = report.bind(oscard)(tangon);
            tangon = tangon.radii;
            tangon = tangon.round;
            michal['borderRadius'] = tangon;
            offset = michal;
            verify = zuuluu;
            zuuluu = copyDataProperties(offset, verify);
            entity['pill'] = michal;
            michal = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center', 'flexGrow': 1, 'maxWidth': '100%'};
            entity['childContainer'] = michal;
            michal = {'position': 'absolute', 'height': '100%', 'width': '100%', 'justifyContent': 'center', 'alignItems': 'center'};
            entity['ellipsis'] = michal;
            return entity;
        }
    };
    golfie = offset.bind(yankee)(golfie);
    var _closure1_slot14 = golfie;
    golfie = {};
    offset = "function ButtonPillNativeTsx1(){const{withSpring,loading,SUBTLE_SPRING,useReducedMotion,withDelay,FADE_DELAY,offsetY}=this.__closure;const opacityTransition=withSpring(loading?0:1,SUBTLE_SPRING,'animate-always');if(useReducedMotion){return{opacity:loading?opacityTransition:withDelay(FADE_DELAY,opacityTransition),transform:[{translateY:0}]};}return{opacity:opacityTransition,transform:[{translateY:withSpring(loading?-1*offsetY:0,SUBTLE_SPRING)}]};}";
    golfie['code'] = offset;
    var _closure1_slot15 = golfie;
    golfie = {};
    offset = "function ButtonPillNativeTsx2(){const{withSpring,loading,SUBTLE_SPRING,useReducedMotion,withDelay,FADE_DELAY,offsetY}=this.__closure;const opacityTransition=withSpring(loading?1:0,SUBTLE_SPRING,'animate-always');if(useReducedMotion){return{opacity:loading?withDelay(FADE_DELAY,opacityTransition):opacityTransition,transform:[{translateY:0}]};}return{opacity:opacityTransition,transform:[{translateY:withSpring(loading?0:offsetY,SUBTLE_SPRING)}]};}";
    golfie['code'] = offset;
    var _closure1_slot16 = golfie;
    golfie = 16;
    golfie = verify[golfie];
    verify = option.bind(entity)(golfie);
    option = verify.fileFinishedImporting;
    golfie = 'design/components/Button/native/ButtonPill.native.tsx';
    golfie = option.bind(verify)(golfie);
    oscard = function(argFoo) { // Original name: ButtonPill
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            michal = argFoo;
            zuuluu = michal.loading;
            entity = null;
            if(!(entity != zuuluu)) { _fun00018_ip = 48; continue _fun00017 }
 15:
            report = _closure1_slot7;
            tangon = _closure1_slot19;
            zuuluu = {};
            golfie = zuuluu;
            oscard = michal;
            entity = copyDataProperties(golfie, oscard);
            entity = undefined;
            entity = report.bind(entity)(tangon, zuuluu);
            _fun00018_ip = 79; continue _fun00017;
 48:
            report = _closure1_slot7;
            tangon = _closure1_slot18;
            zuuluu = {};
            golfie = zuuluu;
            oscard = michal;
            michal = copyDataProperties(golfie, oscard);
            michal = undefined;
            entity = report.bind(michal)(tangon, zuuluu);
 79:
            return entity;
        }
    };
    zuuluu['ButtonPill'] = oscard;
    zuuluu['BasicButtonPill'] = report;
    zuuluu['LoadingButtonPill'] = tangon;
    zuuluu['useLoadingStyles'] = michal;
    return entity;
})();