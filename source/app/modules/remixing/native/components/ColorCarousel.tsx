// app/modules/remixing/native/components/ColorCarousel.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
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
        tangon = oscard[entity];
        entity = undefined;
        tangon = romeon.bind(entity)(tangon);
        var _closure1_slot3 = tangon;
        tangon = 1;
        golfie = oscard[tangon];
        tangon = argCor;
        golfie = tangon.bind(entity)(golfie);
        var _closure1_slot4 = golfie;
        tangon = 2;
        tangon = oscard[tangon];
        tangon = report.bind(entity)(tangon);
        sizing = tangon.StyleSheet;
        option = tangon.TouchableOpacity;
        var _closure1_slot5 = option;
        tangon = tangon.View;
        var _closure1_slot6 = tangon;
        backup = 3;
        tangon = oscard[backup];
        tangon = report.bind(entity)(tangon);
        tangon = tangon.useRemixingEditorStore;
        var _closure1_slot7 = tangon;
        tangon = 4;
        option = oscard[tangon];
        option = report.bind(entity)(option);
        option = option.jsx;
        var _closure1_slot8 = option;
        tangon = oscard[tangon];
        tangon = report.bind(entity)(tangon);
        tangon = tangon.jsxs;
        var _closure1_slot9 = tangon;
        tangon = [0, 1, 2, 3, 4, 5, 6, 7];
        var _closure1_slot10 = tangon;
        tangon = 5;
        tangon = oscard[tangon];
        verify = report.bind(entity)(tangon);
        option = verify.createStyles;
        tangon = {};
        foxtra = 'flex';
        offset = {'display': 'flex', 'alignItems': 'center'};
        tangon['flexCenter'] = offset;
        offset = {'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center', 'backgroundColor': null, 'borderRadius': null, 'marginBottom': 24, 'height': 80, 'width': null, 'overflow': 'hidden'};
        yankee = 6;
        yankee = oscard[yankee];
        kiloes = report.bind(entity)(yankee);
        yankee = kiloes.isAndroid;
        kiloes = yankee.bind(kiloes)();
        output = 'transparent';
        yankee = output;
        if(!kiloes) { _fun00002_ip = 295; continue _fun00001 }
 289:
        yankee = 'rgba(24, 25, 28, 0.8)';
 295:
        offset['backgroundColor'] = yankee;
        yankee = 7;
        kiloes = oscard[yankee];
        kiloes = romeon.bind(entity)(kiloes);
        kiloes = kiloes.radii;
        kiloes = kiloes.xl;
        offset['borderRadius'] = kiloes;
        kiloes = 8;
        result = oscard[kiloes];
        result = report.bind(entity)(result);
        result = result.COLOR_CAROUSEL_WIDTH;
        offset['width'] = result;
        tangon['iconContainer'] = offset;
        offset = {};
        update = sizing.absoluteFillObject;
        source = offset;
        sizing = copyDataProperties(source, update);
        sizing = 'backgroundColor';
        offset[sizing] = output;
        tangon['visualEffectView'] = offset;
        offset = {'display': 'flex', 'flexDirection': 'row', 'justifyContent': 'center', 'paddingLeft': 24};
        tangon['colorRowContainer'] = offset;
        offset = {'display': 'flex', 'flexDirection': 'row'};
        kiloes = oscard[kiloes];
        kiloes = report.bind(entity)(kiloes);
        kiloes = kiloes.COLOR_CAROUSEL_WIDTH;
        offset['width'] = kiloes;
        tangon['colorRow'] = offset;
        offset = {'width': 24, 'height': 24, 'borderRadius': 40, 'margin': 5, 'position': 'relative', 'overflow': 'hidden'};
        tangon['colorCircle'] = offset;
        offset = {};
        offset['margin'] = backup;
        tangon['compactCircle'] = offset;
        offset = {'position': 'absolute', 'top': 0, 'bottom': 0, 'left': 0, 'right': 0};
        tangon['rainbow'] = offset;
        offset = {'borderWidth': 3, 'borderColor': 'white'};
        tangon['selectedColor'] = offset;
        offset = {};
        offset['borderWidth'] = backup;
        backup = oscard[yankee];
        backup = romeon.bind(entity)(backup);
        backup = backup.colors;
        backup = backup.FOCUS_PRIMARY;
        offset['borderColor'] = backup;
        tangon['selectedAlternate'] = offset;
        offset = {'borderWidth': 1, 'borderColor': 'white'};
        tangon['blackUnselected'] = offset;
        offset = {};
        offset['display'] = foxtra;
        tangon['selectorContainer'] = offset;
        offset = {'display': 'flex', 'flex': 1};
        tangon['container'] = offset;
        offset = {'position': 'relative', 'flexDirection': 'row', 'alignItems': 'center'};
        tangon['pagination'] = offset;
        offset = {'width': 6, 'height': 6, 'borderRadius': null, 'backgroundColor': 'rgba(78, 80, 88, 0.48)', 'marginHorizontal': 4};
        yankee = oscard[yankee];
        yankee = romeon.bind(entity)(yankee);
        yankee = yankee.radii;
        yankee = yankee.xs;
        offset['borderRadius'] = yankee;
        tangon['dot'] = offset;
        offset = {};
        yankee = '#F2F3F5';
        offset['backgroundColor'] = yankee;
        tangon['activeDot'] = offset;
        offset = {};
        tangon['touchTarget'] = offset;
        tangon = option.bind(verify)(tangon);
        var _closure1_slot11 = tangon;
        option = golfie.memo;
        tangon = function(argFoo) {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                michal = argFoo;
                sizing = michal.colors;
                yankee = michal.carouselIndex;
                var _closure2_slot0 = yankee;
                echoed = michal.selectedColor;
                var _closure2_slot1 = echoed;
                entity = michal.allowRainbow;
                var _closure2_slot2 = entity;
                romeon = michal.setColor;
                var _closure2_slot3 = romeon;
                michal = michal.carouselRef;
                var _closure2_slot4 = michal;
                michal = _closure1_slot11;
                tangon = undefined;
                kiloes = michal.bind(tangon)();
                var _closure2_slot5 = kiloes;
                golfie = _closure1_slot7;
                michal = _closure1_slot0;
                zuuluu = _closure1_slot2;
                report = 9;
                report = zuuluu[report];
                report = michal.bind(tangon)(report);
                oscard = report.shallow;
                report = function(argFoo) {
                    michal = argFoo;
                    zuuluu = michal.showRainbowColor;
                    entity = new Array(2);
                    entity[0] = zuuluu;
                    michal = michal.setShowRainbowColor;
                    entity[1] = michal;
                    return entity;
                };
                report = golfie.bind(tangon)(report, oscard);
                result = _closure1_slot3;
                oscard = 2;
                report = result.bind(tangon)(report, oscard);
                offset = 0;
                option = report[offset];
                var _closure2_slot6 = option;
                foxtra = 1;
                output = report[foxtra];
                var _closure2_slot7 = output;
                golfie = _closure1_slot4;
                update = golfie.useState;
                report = new Array(0);
                report = update.bind(golfie)(report);
                oscard = result.bind(tangon)(report, oscard);
                report = oscard[offset];
                var _closure2_slot8 = report;
                oscard = oscard[foxtra];
                var _closure2_slot9 = oscard;
                foxtra = golfie.useEffect;
                oscard = new Array(4);
                oscard[0] = option;
                oscard[1] = output;
                oscard[2] = report;
                oscard[3] = entity;
                report = function() {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        michal = _closure2_slot6;
                        if(michal) { _fun00006_ip = 61; continue _fun00005 }
 10:
                        zuuluu = _closure2_slot7;
                        michal = _closure2_slot2;
                        if(!michal) { _fun00006_ip = 54; continue _fun00005 }
 21:
                        tangon = _closure2_slot8;
                        entity = tangon.join;
                        tangon = entity.bind(tangon)();
                        report = _closure1_slot10;
                        entity = report.join;
                        entity = entity.bind(report)();
                        michal = tangon === entity;
 54:
                        entity = undefined;
                        entity = zuuluu.bind(entity)(michal);
 61:
                        entity = undefined;
                        return entity;
                    }
                };
                report = foxtra.bind(golfie)(report, oscard);
                oscard = golfie.useCallback;
                report = new Array(3);
                report[0] = romeon;
                report[1] = entity;
                report[2] = yankee;
                entity = function(argFoo, argBar, argBaz) {
                    michal = argFoo;
                    var _closure3_slot0 = michal;
                    michal = argBar;
                    var _closure3_slot1 = michal;
                    michal = argBaz;
                    var _closure3_slot2 = michal;
                    entity = function() {
                        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                            report = _closure1_slot0;
                            oscard = _closure1_slot2;
                            entity = 10;
                            michal = oscard[entity];
                            zuuluu = undefined;
                            tangon = report.bind(zuuluu)(michal);
                            michal = tangon.triggerHapticFeedback;
                            entity = oscard[entity];
                            entity = report.bind(zuuluu)(entity);
                            entity = entity.HapticFeedbackTypes;
                            entity = entity.IMPACT_LIGHT;
                            entity = michal.bind(tangon)(entity);
                            michal = _closure2_slot2;
                            if(!michal) { _fun00008_ip = 77; continue _fun00007 }
 67:
                            report = _closure2_slot0;
                            tangon = 0;
                            michal = tangon === report;
 77:
                            if(!michal) { _fun00008_ip = 99; continue _fun00007 }
 80:
                            tangon = _closure3_slot0;
                            michal = function(argFoo) {
                                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                                    entity = new Array(1);
                                    report = argFoo;
                                    tangon = 0;
                                    oscard = entity;
                                    zuuluu = arraySpread(oscard, report, tangon);
                                    michal = _closure3_slot2;
                                    entity[zuuluu] = michal;
                                    michal = 1;
                                    michal = zuuluu + michal;
                                    zuuluu = entity.length;
                                    michal = _closure1_slot10;
                                    michal = michal.length;
                                    if(!(zuuluu > michal)) { _fun00010_ip = 66; continue _fun00009 }
 56:
                                    michal = entity.shift;
                                    michal = michal.bind(entity)();
 66:
                                    return entity;
                                }
                            };
                            michal = tangon.bind(zuuluu)(michal);
 99:
                            michal = _closure2_slot3;
                            entity = _closure3_slot1;
                            entity = michal.bind(zuuluu)(entity);
                            return entity;
                        }
                    };
                    return entity;
                };
                entity = oscard.bind(golfie)(entity, report);
                var _closure2_slot10 = entity;
                entity = 11;
                entity = zuuluu[entity];
                michal = michal.bind(tangon)(entity);
                entity = michal.useIsScreenReaderEnabled;
                romeon = entity.bind(michal)();
                var _closure2_slot11 = romeon;
                zuuluu = _closure1_slot8;
                michal = _closure1_slot6;
                entity = {};
                report = 'radiogroup';
                entity['accessibilityRole'] = report;
                report = kiloes.colorRowContainer;
                entity['style'] = report;
                oscard = _closure1_slot9;
                report = {};
                golfie = kiloes.colorRow;
                report['style'] = golfie;
                foxtra = sizing.map;
                golfie = function(argFoo, argBar) {
                    _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                        foxtra = argFoo;
                        report = argBar;
                        tangon = _closure1_slot8;
                        zuuluu = _closure1_slot5;
                        michal = {};
                        entity = 'radio';
                        michal['accessibilityRole'] = entity;
                        golfie = _closure1_slot0;
                        entity = _closure1_slot2;
                        backup = 12;
                        oscard = entity[backup];
                        entity = undefined;
                        golfie = golfie.bind(entity)(oscard);
                        oscard = golfie.hexToDrawingColor;
                        oscard = oscard.bind(golfie)(foxtra);
                        michal['accessibilityLabel'] = oscard;
                        oscard = {};
                        golfie = _closure2_slot1;
                        golfie = foxtra === golfie;
                        oscard['selected'] = golfie;
                        michal['accessibilityState'] = oscard;
                        option = _closure2_slot5;
                        oscard = option.touchTarget;
                        michal['style'] = oscard;
                        golfie = _closure2_slot10;
                        oscard = _closure2_slot9;
                        oscard = golfie.bind(entity)(oscard, foxtra, report);
                        michal['onPress'] = oscard;
                        golfie = _closure1_slot6;
                        oscard = {};
                        verify = option.colorCircle;
                        option = new Array(6);
                        option[0] = verify;
                        verify = {};
                        verify['backgroundColor'] = foxtra;
                        option[1] = verify;
                        verify = _closure2_slot6;
                        if(!verify) { _fun00012_ip = 167; continue _fun00011 }
 157:
                        kiloes = _closure2_slot0;
                        romeon = 0;
                        verify = romeon === kiloes;
 167:
                        if(verify) { _fun00012_ip = 174; continue _fun00011 }
 170:
                        verify = _closure2_slot11;
 174:
                        if(!verify) { _fun00012_ip = 187; continue _fun00011 }
 177:
                        romeon = _closure2_slot5;
                        verify = romeon.compactCircle;
 187:
                        option[2] = verify;
                        romeon = _closure1_slot0;
                        verify = _closure1_slot2;
                        verify = verify[backup];
                        verify = romeon.bind(entity)(verify);
                        verify = verify.DrawingColors;
                        verify = verify.BLACK;
                        verify = foxtra === verify;
                        if(!verify) { _fun00012_ip = 237; continue _fun00011 }
 227:
                        romeon = _closure2_slot5;
                        verify = romeon.blackUnselected;
 237:
                        option[3] = verify;
                        verify = _closure2_slot1;
                        verify = foxtra === verify;
                        if(!verify) { _fun00012_ip = 262; continue _fun00011 }
 252:
                        romeon = _closure2_slot5;
                        verify = romeon.selectedColor;
 262:
                        option[4] = verify;
                        verify = _closure2_slot1;
                        verify = foxtra === verify;
                        if(!verify) { _fun00012_ip = 310; continue _fun00011 }
 277:
                        romeon = _closure1_slot0;
                        yankee = _closure1_slot2;
                        yankee = yankee[backup];
                        yankee = romeon.bind(entity)(yankee);
                        romeon = yankee.DRAWING_TOOL_COLORS_WITH_ALTERNATE_OUTLINE;
                        yankee = romeon.includes;
                        verify = yankee.bind(romeon)(foxtra);
 310:
                        if(!verify) { _fun00012_ip = 323; continue _fun00011 }
 313:
                        offset = _closure2_slot5;
                        verify = offset.selectedAlternate;
 323:
                        option[5] = verify;
                        oscard['style'] = option;
                        oscard = tangon.bind(entity)(golfie, oscard);
                        michal['children'] = oscard;
                        entity = tangon.bind(entity)(zuuluu, michal, report);
                        return entity;
                    }
                };
                foxtra = foxtra.bind(sizing)(golfie);
                golfie = new Array(2);
                golfie[0] = foxtra;
                if(romeon) { _fun00004_ip = 609; continue _fun00003 }
 365:
                if(!option) { _fun00004_ip = 372; continue _fun00003 }
 368:
                option = offset === yankee;
 372:
                if(!option) { _fun00004_ip = 604; continue _fun00003 }
 378:
                foxtra = _closure1_slot8;
                romeon = _closure1_slot5;
                yankee = {};
                offset = kiloes.touchTarget;
                yankee['style'] = offset;
                offset = function() { // Original name: onPress
                    zuuluu = _closure2_slot3;
                    tangon = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 14;
                    entity = michal[entity];
                    michal = undefined;
                    entity = tangon.bind(michal)(entity);
                    entity = entity.RemixShader;
                    entity = entity.RAINBOW;
                    entity = zuuluu.bind(michal)(entity);
                    return entity;
                };
                yankee['onPress'] = offset;
                sizing = _closure1_slot6;
                offset = {};
                result = kiloes.colorCircle;
                output = new Array(3);
                output[0] = result;
                result = kiloes.compactCircle;
                output[1] = result;
                update = _closure1_slot0;
                source = _closure1_slot2;
                result = 14;
                result = source[result];
                result = update.bind(tangon)(result);
                result = result.RemixShader;
                result = result.RAINBOW;
                result = echoed === result;
                if(!result) { _fun00004_ip = 482; continue _fun00003 }
 476:
                result = kiloes.selectedColor;
 482:
                output[2] = result;
                offset['style'] = output;
                echoed = _closure1_slot8;
                result = _closure1_slot1;
                update = _closure1_slot2;
                output = 15;
                output = update[output];
                result = result.bind(tangon)(output);
                output = {'style': null, 'useAngle': true, 'angle': 90};
                update = kiloes.rainbow;
                output['style'] = update;
                update = {'x': 0.75, 'y': 0.5};
                output['angleCenter'] = update;
                update = ['rgba(255, 0, 0, 1)', 'rgba(255, 154, 0, 1)', 'rgba(208, 222, 33, 1)', 'rgba(79, 220, 74, 1)', 'rgba(63, 218, 216, 1)', 'rgba(47, 201, 226, 1)', 'rgba(28, 127, 238, 1)', 'rgba(95, 21, 242, 1)', 'rgba(186, 12, 248, 1)', 'rgba(251, 7, 217, 1)', 'rgba(255, 0, 0, 1)'];
                output['colors'] = update;
                output = echoed.bind(tangon)(result, output);
                offset['children'] = output;
                offset = foxtra.bind(tangon)(sizing, offset);
                yankee['children'] = offset;
                offset = 'RAINBOW';
                option = foxtra.bind(tangon)(romeon, yankee, offset);
 604:
                _fun00004_ip = 790; continue _fun00003;
 609:
                romeon = _closure1_slot8;
                yankee = _closure1_slot5;
                offset = {};
                foxtra = kiloes.touchTarget;
                offset['style'] = foxtra;
                verify = function() { // Original name: onPress
                    _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                        entity = _closure2_slot4;
                        zuuluu = entity.current;
                        entity = null;
                        michal = entity == zuuluu;
                        entity = undefined;
                        if(michal) { _fun00014_ip = 32; continue _fun00013 }
 23:
                        michal = zuuluu.next;
                        entity = michal.bind(zuuluu)();
 32:
                        return entity;
                    }
                };
                offset['onPress'] = verify;
                foxtra = _closure1_slot6;
                verify = {};
                result = _closure1_slot0;
                echoed = _closure1_slot2;
                backup = 13;
                sizing = echoed[backup];
                sizing = result.bind(tangon)(sizing);
                output = sizing.intl;
                sizing = output.string;
                backup = echoed[backup];
                backup = result.bind(tangon)(backup);
                backup = backup.t;
                backup = backup.MlJlDg;
                backup = sizing.bind(output)(backup);
                verify['accessibilityLabel'] = backup;
                sizing = kiloes.colorCircle;
                backup = new Array(3);
                backup[0] = sizing;
                sizing = {};
                output = 12;
                output = echoed[output];
                output = result.bind(tangon)(output);
                output = output.DrawingColors;
                output = output.WHITE;
                sizing['backgroundColor'] = output;
                backup[1] = sizing;
                kiloes = kiloes.compactCircle;
                backup[2] = kiloes;
                verify['style'] = backup;
                verify = romeon.bind(tangon)(foxtra, verify);
                offset['children'] = verify;
                verify = 'next colors';
                option = romeon.bind(tangon)(yankee, offset, verify);
 790:
                golfie[1] = option;
                report['children'] = golfie;
                report = oscard.bind(tangon)(michal, report);
                entity['children'] = report;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            }
        };
        tangon = option.bind(golfie)(tangon);
        var _closure1_slot12 = tangon;
        option = golfie.memo;
        tangon = function(argFoo) {
            entity = argFoo;
            michal = entity.carouselIndex;
            var _closure2_slot0 = michal;
            golfie = entity.pageCount;
            michal = _closure1_slot11;
            tangon = undefined;
            oscard = michal.bind(tangon)();
            var _closure2_slot1 = oscard;
            zuuluu = _closure1_slot8;
            michal = _closure1_slot6;
            entity = {};
            oscard = oscard.pagination;
            entity['style'] = oscard;
            oscard = global;
            oscard = oscard.Array;
            offset = oscard.bind(tangon)(golfie);
            golfie = new Array(0);
            verify = 0;
            yankee = golfie;
            oscard = arraySpread(yankee, offset, verify);
            oscard = golfie.map;
            report = function(argFoo, argBar) {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    report = argBar;
                    tangon = _closure1_slot8;
                    zuuluu = _closure1_slot6;
                    michal = {};
                    entity = _closure2_slot1;
                    oscard = entity.dot;
                    entity = new Array(2);
                    entity[0] = oscard;
                    oscard = _closure2_slot0;
                    oscard = report === oscard;
                    if(!oscard) { _fun00016_ip = 58; continue _fun00015 }
 48:
                    golfie = _closure2_slot1;
                    oscard = golfie.activeDot;
 58:
                    entity[1] = oscard;
                    michal['style'] = entity;
                    entity = undefined;
                    entity = tangon.bind(entity)(zuuluu, michal, report);
                    return entity;
                }
            };
            report = oscard.bind(golfie)(report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        tangon = option.bind(golfie)(tangon);
        var _closure1_slot13 = tangon;
        tangon = golfie.memo;
        michal = function(argFoo) { // Original name: ColorCarousel
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                michal = argFoo;
                verify = michal.setColor;
                var _closure2_slot0 = verify;
                offset = michal.selectedColor;
                var _closure2_slot1 = offset;
                backup = michal.setCarouselIndex;
                sizing = michal.carouselIndex;
                yankee = michal.usePagination;
                golfie = michal.forDrawing;
                tangon = undefined;
                if(!(golfie === tangon)) { _fun00018_ip = 57; continue _fun00017 }
 55:
                golfie = false;
 57:
                romeon = michal.allowRainbow;
                if(!(romeon === tangon)) { _fun00018_ip = 69; continue _fun00017 }
 67:
                romeon = false;
 69:
                var _closure2_slot2 = romeon;
                sequen = michal.style;
                option = michal.animatedViewStyle;
                echoed = michal.width;
                var _closure2_slot3 = tangon;
                michal = _closure1_slot11;
                vacuum = michal.bind(tangon)();
                report = _closure1_slot4;
                zuuluu = report.useRef;
                michal = null;
                output = zuuluu.bind(report)(michal);
                _closure2_slot3 = output;
                ctrled = _closure1_slot0;
                source = _closure1_slot2;
                michal = 16;
                zuuluu = source[michal];
                oscard = ctrled.bind(tangon)(zuuluu);
                zuuluu = oscard.useOverlayLayoutDriver;
                oscard = zuuluu.bind(oscard)();
                michal = source[michal];
                zuuluu = ctrled.bind(tangon)(michal);
                michal = zuuluu.useFooterLayoutAnimation;
                oscard = michal.bind(zuuluu)(oscard);
                zuuluu = report.useCallback;
                michal = new Array(3);
                michal[0] = romeon;
                michal[1] = offset;
                michal[2] = verify;
                entity = function(argFoo) {
                    entity = argFoo;
                    report = entity.item;
                    entity = entity.index;
                    tangon = _closure1_slot8;
                    zuuluu = _closure1_slot12;
                    michal = {};
                    michal['colors'] = report;
                    michal['carouselIndex'] = entity;
                    report = _closure2_slot2;
                    michal['allowRainbow'] = report;
                    report = _closure2_slot3;
                    michal['carouselRef'] = report;
                    report = _closure2_slot0;
                    michal['setColor'] = report;
                    entity = _closure2_slot1;
                    michal['selectedColor'] = entity;
                    entity = undefined;
                    entity = tangon.bind(entity)(zuuluu, michal);
                    return entity;
                };
                update = zuuluu.bind(report)(entity, michal);
                zuuluu = _closure1_slot8;
                foxtra = _closure1_slot1;
                entity = 17;
                entity = source[entity];
                entity = foxtra.bind(tangon)(entity);
                michal = entity.View;
                entity = {};
                report = new Array(3);
                report[0] = option;
                option = {};
                option['top'] = tangon;
                report[1] = option;
                report[2] = oscard;
                entity['style'] = report;
                report = 18;
                report = source[report];
                report = ctrled.bind(tangon)(report);
                oscard = report.SafeAreaPaddingView;
                report = {'bottom': null, 'left': true, 'right': true, 'pointerEvents': 'box-none'};
                report['bottom'] = golfie;
                result = true;
                offset = 'box-none';
                golfie = vacuum.flexCenter;
                report['style'] = golfie;
                verify = _closure1_slot9;
                option = _closure1_slot6;
                golfie = {};
                config = vacuum.iconContainer;
                romeon = new Array(2);
                romeon[0] = config;
                romeon[1] = sequen;
                golfie['style'] = romeon;
                golfie['pointerEvents'] = offset;
                offset = 19;
                offset = source[offset];
                romeon = foxtra.bind(tangon)(offset);
                offset = {};
                sequen = 'dark';
                offset['blurTheme'] = sequen;
                vacuum = vacuum.visualEffectView;
                offset['style'] = vacuum;
                romeon = zuuluu.bind(tangon)(romeon, offset);
                offset = new Array(3);
                offset[0] = romeon;
                romeon = 20;
                romeon = source[romeon];
                foxtra = foxtra.bind(tangon)(romeon);
                romeon = {};
                romeon['ref'] = output;
                output = 12;
                source = source[output];
                source = ctrled.bind(tangon)(source);
                source = source.DRAWING_TOOL_COLOR_PRESETS;
                romeon['data'] = source;
                romeon['renderItem'] = update;
                update = 40;
                romeon['height'] = update;
                romeon['width'] = echoed;
                romeon['defaultIndex'] = sizing;
                echoed = {};
                update = 'relative';
                echoed['position'] = update;
                romeon['style'] = echoed;
                romeon['pagingEnabled'] = result;
                romeon['onSnapToItem'] = backup;
                backup = 250;
                romeon['scrollAnimationDuration'] = backup;
                romeon = zuuluu.bind(tangon)(foxtra, romeon);
                offset[1] = romeon;
                if(!yankee) { _fun00018_ip = 559; continue _fun00017 }
 505:
                backup = _closure1_slot8;
                foxtra = _closure1_slot13;
                romeon = {};
                romeon['carouselIndex'] = sizing;
                sizing = _closure1_slot0;
                kiloes = _closure1_slot2;
                kiloes = kiloes[output];
                kiloes = sizing.bind(tangon)(kiloes);
                kiloes = kiloes.DRAWING_TOOL_COLOR_PRESETS;
                kiloes = kiloes.length;
                romeon['pageCount'] = kiloes;
                yankee = backup.bind(tangon)(foxtra, romeon);
 559:
                offset[2] = yankee;
                golfie['children'] = offset;
                golfie = verify.bind(tangon)(option, golfie);
                report['children'] = golfie;
                report = zuuluu.bind(tangon)(oscard, report);
                entity['children'] = report;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            }
        };
        michal = tangon.bind(golfie)(michal);
        tangon = 21;
        tangon = oscard[tangon];
        oscard = report.bind(entity)(tangon);
        report = oscard.fileFinishedImporting;
        tangon = 'modules/remixing/native/components/ColorCarousel.tsx';
        tangon = report.bind(oscard)(tangon);
        zuuluu['default'] = michal;
        return entity;
    }
})();