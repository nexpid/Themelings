// app/design/components/Card/native/Card.native.tsx
export default (function(argFoo, argBar, argBaz, argCor, argGra, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: getCardBackgroundToken
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            entity = 'primary';
            if(!(entity !== michal)) { _fun00002_ip = 102; continue _fun00001 }
 11:
            entity = 'secondary';
            if(!(entity !== michal)) { _fun00002_ip = 69; continue _fun00001 }
 19:
            entity = 'transparent';
            if(!(entity !== michal)) { _fun00002_ip = 31; continue _fun00001 }
 27:
            entity = undefined;
            return entity;
 31:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 5;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.unsafe_rawColors;
            entity = entity.TRANSPARENT;
            return entity;
 69:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 6;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.CARD_SECONDARY_BG;
            return entity;
 102:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 6;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.CARD_PRIMARY_BG;
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    michal = function(argFoo) { // Original name: Card
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = argFoo;
            verify = report.start;
            tangon = undefined;
            if(!(verify === tangon)) { _fun00004_ip = 16; continue _fun00003 }
 14:
            verify = true;
 16:
            option = report.end;
            if(!(option === tangon)) { _fun00004_ip = 27; continue _fun00003 }
 25:
            option = true;
 27:
            golfie = report.shadow;
            if(!(golfie === tangon)) { _fun00004_ip = 41; continue _fun00003 }
 37:
            golfie = 'none';
 41:
            oscard = report.border;
            if(!(oscard === tangon)) { _fun00004_ip = 57; continue _fun00003 }
 51:
            oscard = 'faint';
 57:
            zuuluu = report.variant;
            if(!(zuuluu === tangon)) { _fun00004_ip = 70; continue _fun00003 }
 66:
            zuuluu = 'primary';
 70:
            michal = {'start': 0, 'end': 0, 'shadow': 0, 'border': 0, 'variant': 0};
            offset = null;
            output = michal;
            sizing = null;
            entity = silentSetPrototypeOf(output, sizing);
            output = {};
            sizing = report;
            kiloes = michal;
            report = copyDataProperties(output, sizing, kiloes);
            michal = _closure1_slot10;
            result = undefined;
            output = verify;
            sizing = option;
            kiloes = zuuluu;
            backup = golfie;
            foxtra = oscard;
            michal = result[michal](output, sizing, kiloes, backup, foxtra, romeon);
            oscard = michal.spacing;
            golfie = new Array(3);
            golfie[0] = oscard;
            oscard = report.style;
            golfie[1] = oscard;
            michal = michal.card;
            golfie[2] = michal;
            michal = 'onPress';
            michal = michal in report;
            oscard = zuuluu;
            if(!michal) { _fun00004_ip = 186; continue _fun00003 }
 177:
            michal = report.onPress;
            if(!(offset == michal)) { _fun00004_ip = 223; continue _fun00003 }
 186:
            yankee = _closure1_slot7;
            zuuluu = _closure1_slot6;
            michal = {};
            output = michal;
            sizing = report;
            romeon = copyDataProperties(output, sizing);
            romeon = 'style';
            michal[romeon] = golfie;
            michal = yankee.bind(tangon)(zuuluu, michal);
            return michal;
 223:
            yankee = report.accessibilityRole;
            zuuluu = _closure1_slot4;
            michal = _closure1_slot3;
            report = zuuluu.bind(tangon)(report, michal);
            zuuluu = _closure1_slot7;
            michal = _closure1_slot13;
            entity = {};
            romeon = offset != yankee;
            offset = 'button';
            if(!romeon) { _fun00004_ip = 266; continue _fun00003 }
 263:
            offset = yankee;
 266:
            entity['accessibilityRole'] = offset;
            output = entity;
            sizing = report;
            report = copyDataProperties(output, sizing);
            report = 'start';
            entity[report] = verify;
            report = 'end';
            entity[report] = option;
            report = 'style';
            entity[report] = golfie;
            report = 'variant';
            entity[report] = oscard;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    entity = function(argFoo) { // Original name: PressableCard
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            report = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 8;
            entity = zuuluu[entity];
            zuuluu = undefined;
            report = report.bind(zuuluu)(entity);
            entity = report.isAndroid;
            entity = entity.bind(report)();
            if(entity) { _fun00006_ip = 54; continue _fun00005 }
 42:
            entity = function(argFoo) { // Original name: PressableCardiOS
                golfie = argFoo;
                oscard = golfie.children;
                option = golfie.style;
                report = golfie.variant;
                verify = golfie.onPressIn;
                var _closure3_slot0 = verify;
                zuuluu = golfie.onPressOut;
                var _closure3_slot1 = zuuluu;
                entity = golfie.start;
                entity = golfie.end;
                tangon = {'children': 0, 'style': 0, 'variant': 0, 'onPressIn': 0, 'onPressOut': 0, 'start': 0, 'end': 0};
                update = null;
                source = tangon;
                entity = silentSetPrototypeOf(source, update);
                romeon = 0;
                source = {};
                update = golfie;
                echoed = tangon;
                golfie = copyDataProperties(source, update, echoed);
                foxtra = _closure1_slot0;
                backup = _closure1_slot2;
                output = 4;
                offset = backup[output];
                tangon = undefined;
                yankee = foxtra.bind(tangon)(offset);
                offset = yankee.useSharedValue;
                sizing = offset.bind(yankee)(romeon);
                var _closure3_slot2 = sizing;
                romeon = _closure1_slot5;
                yankee = romeon.useCallback;
                offset = new Array(2);
                offset[0] = sizing;
                offset[1] = verify;
                verify = function(argFoo) {
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        tangon = _closure3_slot2;
                        zuuluu = tangon.set;
                        michal = 1;
                        michal = zuuluu.bind(tangon)(michal);
                        zuuluu = _closure3_slot0;
                        michal = null;
                        if(!(michal != zuuluu)) { _fun00008_ip = 44; continue _fun00007 }
 30:
                        zuuluu = _closure3_slot0;
                        michal = undefined;
                        entity = argFoo;
                        entity = zuuluu.bind(michal)(entity);
 44:
                        entity = undefined;
                        return entity;
                    }
                };
                offset = yankee.bind(romeon)(verify, offset);
                romeon = _closure1_slot5;
                yankee = romeon.useCallback;
                verify = new Array(2);
                verify[0] = sizing;
                verify[1] = zuuluu;
                zuuluu = function(argFoo) {
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        tangon = _closure3_slot2;
                        zuuluu = tangon.set;
                        michal = 0;
                        michal = zuuluu.bind(tangon)(michal);
                        zuuluu = _closure3_slot1;
                        michal = null;
                        if(!(michal != zuuluu)) { _fun00010_ip = 43; continue _fun00009 }
 29:
                        zuuluu = _closure3_slot1;
                        michal = undefined;
                        entity = argFoo;
                        entity = zuuluu.bind(michal)(entity);
 43:
                        entity = undefined;
                        return entity;
                    }
                };
                verify = yankee.bind(romeon)(zuuluu, verify);
                zuuluu = _closure1_slot9;
                zuuluu = zuuluu.bind(tangon)(report);
                kiloes = zuuluu.backgroundColor;
                var _closure3_slot3 = kiloes;
                romeon = zuuluu.backgroundColorPressed;
                var _closure3_slot4 = romeon;
                zuuluu = backup[output];
                report = foxtra.bind(tangon)(zuuluu);
                zuuluu = report.useAnimatedStyle;
                michal = function() { // Original name: f
                    entity = {};
                    golfie = _closure1_slot0;
                    option = _closure1_slot2;
                    michal = 9;
                    michal = option[michal];
                    zuuluu = undefined;
                    oscard = golfie.bind(zuuluu)(michal);
                    report = oscard.withSpring;
                    michal = 4;
                    michal = option[michal];
                    yankee = golfie.bind(zuuluu)(michal);
                    offset = yankee.interpolateColor;
                    verify = _closure3_slot2;
                    tangon = verify.get;
                    verify = tangon.bind(verify)();
                    romeon = _closure3_slot3;
                    tangon = new Array(2);
                    tangon[0] = romeon;
                    michal = _closure3_slot4;
                    tangon[1] = michal;
                    michal = [0, 1];
                    tangon = offset.bind(yankee)(verify, michal, tangon);
                    michal = 10;
                    michal = option[michal];
                    michal = golfie.bind(zuuluu)(michal);
                    zuuluu = michal.ON_PRESS_SPRING;
                    michal = 'animate-always';
                    michal = report.bind(oscard)(tangon, zuuluu, michal);
                    entity['backgroundColor'] = michal;
                    return entity;
                };
                yankee = {};
                result = 9;
                result = backup[result];
                result = foxtra.bind(tangon)(result);
                result = result.withSpring;
                yankee['withSpring'] = result;
                output = backup[output];
                output = foxtra.bind(tangon)(output);
                output = output.interpolateColor;
                yankee['interpolateColor'] = output;
                yankee['pressed'] = sizing;
                yankee['backgroundColor'] = kiloes;
                yankee['backgroundColorPressed'] = romeon;
                romeon = 10;
                romeon = backup[romeon];
                romeon = foxtra.bind(tangon)(romeon);
                romeon = romeon.ON_PRESS_SPRING;
                yankee['ON_PRESS_SPRING'] = romeon;
                michal['__closure'] = yankee;
                yankee = 14943431549291.0;
                michal['__workletHash'] = yankee;
                yankee = _closure1_slot11;
                michal['__initData'] = yankee;
                report = zuuluu.bind(report)(michal);
                zuuluu = _closure1_slot7;
                michal = _closure1_slot8;
                entity = {};
                source = entity;
                update = golfie;
                golfie = copyDataProperties(source, update);
                golfie = 'onPressIn';
                entity[golfie] = offset;
                golfie = 'onPressOut';
                entity[golfie] = verify;
                golfie = new Array(2);
                golfie[0] = option;
                golfie[1] = report;
                report = 'style';
                entity[report] = golfie;
                golfie = 130;
                report = 'unstable_pressDelay';
                entity[report] = golfie;
                report = 'children';
                entity[report] = oscard;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            entity = entity.bind(zuuluu)(tangon);
            _fun00006_ip = 64; continue _fun00005;
 54:
            michal = function(argFoo) { // Original name: PressableCardAndroid
                tangon = argFoo;
                oscard = tangon.children;
                verify = tangon.start;
                var _closure3_slot0 = verify;
                option = tangon.end;
                var _closure3_slot1 = option;
                zuuluu = {'children': 0, 'start': 0, 'end': 0};
                yankee = null;
                romeon = zuuluu;
                entity = silentSetPrototypeOf(romeon, yankee);
                romeon = {};
                yankee = tangon;
                offset = zuuluu;
                report = copyDataProperties(romeon, yankee, offset);
                golfie = _closure1_slot5;
                tangon = golfie.useMemo;
                zuuluu = new Array(2);
                zuuluu[0] = verify;
                zuuluu[1] = option;
                michal = function() {
                    _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                        entity = {};
                        zuuluu = _closure3_slot0;
                        if(zuuluu) { _fun00012_ip = 21; continue _fun00011 }
 12:
                        zuuluu = _closure3_slot1;
                        michal = 0;
                        if(!zuuluu) { _fun00012_ip = 57; continue _fun00011 }
 21:
                        report = _closure1_slot1;
                        tangon = _closure1_slot2;
                        zuuluu = 5;
                        tangon = tangon[zuuluu];
                        zuuluu = undefined;
                        zuuluu = report.bind(zuuluu)(tangon);
                        zuuluu = zuuluu.radii;
                        michal = zuuluu.lg;
 57:
                        entity['cornerRadius'] = michal;
                        return entity;
                    }
                };
                golfie = tangon.bind(golfie)(michal, zuuluu);
                tangon = _closure1_slot7;
                michal = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 11;
                entity = zuuluu[entity];
                zuuluu = undefined;
                entity = michal.bind(zuuluu)(entity);
                michal = entity.AnimatedPressableHighlight;
                entity = {};
                entity['androidRippleConfig'] = golfie;
                romeon = entity;
                yankee = report;
                report = copyDataProperties(romeon, yankee);
                report = 'children';
                entity[report] = oscard;
                entity = tangon.bind(zuuluu)(michal, entity);
                return entity;
            };
            entity = michal.bind(zuuluu)(tangon);
 64:
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = ['accessibilityRole'];
    var _closure1_slot3 = entity;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = option.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 1;
    verify = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(verify);
    var _closure1_slot5 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    verify = tangon.View;
    var _closure1_slot6 = verify;
    verify = tangon.Pressable;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot7 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    option = option.bind(entity)(tangon);
    tangon = option.createAnimatedComponent;
    tangon = tangon.bind(option)(verify);
    var _closure1_slot8 = tangon;
    tangon = 7;
    option = oscard[tangon];
    offset = report.bind(entity)(option);
    verify = offset.createStyleProperties;
    option = function(argFoo) {
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            oscard = argFoo;
            michal = _closure1_slot12;
            report = undefined;
            zuuluu = michal.bind(report)(oscard);
            michal = 'primary';
            if(!(michal !== oscard)) { _fun00014_ip = 104; continue _fun00013 }
 25:
            michal = 'secondary';
            if(!(michal !== oscard)) { _fun00014_ip = 76; continue _fun00013 }
 33:
            tangon = 'transparent';
            michal = undefined;
            if(!(tangon === oscard)) { _fun00014_ip = 130; continue _fun00013 }
 43:
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            tangon = 5;
            tangon = golfie[tangon];
            tangon = oscard.bind(report)(tangon);
            tangon = tangon.unsafe_rawColors;
            michal = tangon.TRANSPARENT;
            _fun00014_ip = 130; continue _fun00013;
 76:
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            tangon = 6;
            tangon = golfie[tangon];
            tangon = oscard.bind(report)(tangon);
            michal = tangon.CARD_SECONDARY_PRESSED_BG;
            _fun00014_ip = 130; continue _fun00013;
 104:
            tangon = _closure1_slot0;
            oscard = _closure1_slot2;
            entity = 6;
            entity = oscard[entity];
            entity = tangon.bind(report)(entity);
            michal = entity.CARD_PRIMARY_PRESSED_BG;
 130:
            entity = {};
            entity['backgroundColor'] = zuuluu;
            entity['backgroundColorPressed'] = michal;
            return entity;
        }
    };
    option = verify.bind(offset)(option);
    var _closure1_slot9 = option;
    tangon = oscard[tangon];
    verify = report.bind(entity)(tangon);
    option = verify.createStyles;
    tangon = function(argFoo, argBar, argBaz, argCor, argGra) {
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            option = argFoo;
            verify = argBar;
            oscard = argGra;
            michal = _closure1_slot12;
            offset = undefined;
            entity = argBaz;
            tangon = michal.bind(offset)(entity);
            michal = null;
            zuuluu = 'none';
            entity = null;
            if(!(zuuluu !== oscard)) { _fun00016_ip = 170; continue _fun00015 }
 41:
            golfie = 'subtle';
            if(!(golfie !== oscard)) { _fun00016_ip = 139; continue _fun00015 }
 51:
            golfie = 'strong';
            if(!(golfie !== oscard)) { _fun00016_ip = 106; continue _fun00015 }
 59:
            golfie = 'faint';
            if(!(golfie !== oscard)) { _fun00016_ip = 73; continue _fun00015 }
 69:
            entity = undefined;
            _fun00016_ip = 170; continue _fun00015;
 73:
            yankee = _closure1_slot1;
            romeon = _closure1_slot2;
            golfie = 5;
            golfie = romeon[golfie];
            golfie = yankee.bind(offset)(golfie);
            golfie = golfie.colors;
            entity = golfie.BORDER_FAINT;
            _fun00016_ip = 170; continue _fun00015;
 106:
            yankee = _closure1_slot1;
            romeon = _closure1_slot2;
            golfie = 5;
            golfie = romeon[golfie];
            golfie = yankee.bind(offset)(golfie);
            golfie = golfie.colors;
            entity = golfie.BORDER_STRONG;
            _fun00016_ip = 170; continue _fun00015;
 139:
            yankee = _closure1_slot1;
            romeon = _closure1_slot2;
            golfie = 5;
            golfie = romeon[golfie];
            golfie = yankee.bind(offset)(golfie);
            golfie = golfie.colors;
            entity = golfie.BORDER_SUBTLE;
 170:
            golfie = tangon;
            if(!(michal != entity)) { _fun00016_ip = 180; continue _fun00015 }
 177:
            golfie = entity;
 180:
            entity = {};
            michal = {};
            romeon = _closure1_slot0;
            foxtra = _closure1_slot2;
            yankee = 6;
            yankee = foxtra[yankee];
            foxtra = romeon.bind(offset)(yankee);
            romeon = foxtra.createCardShadowToken;
            yankee = argCor;
            kiloes = romeon.bind(foxtra)(yankee);
            sizing = michal;
            yankee = copyDataProperties(sizing, kiloes);
            romeon = undefined;
            if(!option) { _fun00016_ip = 261; continue _fun00015 }
 230:
            foxtra = _closure1_slot1;
            backup = _closure1_slot2;
            yankee = 5;
            yankee = backup[yankee];
            yankee = foxtra.bind(offset)(yankee);
            yankee = yankee.radii;
            romeon = yankee.lg;
 261:
            yankee = 'borderTopStartRadius';
            michal[yankee] = romeon;
            yankee = undefined;
            if(!option) { _fun00016_ip = 306; continue _fun00015 }
 275:
            romeon = _closure1_slot1;
            foxtra = _closure1_slot2;
            option = 5;
            option = foxtra[option];
            option = romeon.bind(offset)(option);
            option = option.radii;
            yankee = option.lg;
 306:
            option = 'borderTopEndRadius';
            michal[option] = yankee;
            yankee = undefined;
            if(!verify) { _fun00016_ip = 351; continue _fun00015 }
 320:
            romeon = _closure1_slot1;
            foxtra = _closure1_slot2;
            option = 5;
            option = foxtra[option];
            option = romeon.bind(offset)(option);
            option = option.radii;
            yankee = option.lg;
 351:
            option = 'borderBottomStartRadius';
            michal[option] = yankee;
            option = undefined;
            if(!verify) { _fun00016_ip = 396; continue _fun00015 }
 365:
            verify = _closure1_slot1;
            yankee = _closure1_slot2;
            report = 5;
            report = yankee[report];
            report = verify.bind(offset)(report);
            report = report.radii;
            option = report.lg;
 396:
            report = 'borderBottomEndRadius';
            michal[report] = option;
            report = 'borderColor';
            michal[report] = golfie;
            report = 0;
            if(!(zuuluu !== oscard)) { _fun00016_ip = 423; continue _fun00015 }
 420:
            report = 1;
 423:
            zuuluu = 'borderWidth';
            michal[zuuluu] = report;
            zuuluu = 'backgroundColor';
            michal[zuuluu] = tangon;
            entity['card'] = michal;
            michal = {};
            zuuluu = 16;
            michal['padding'] = zuuluu;
            entity['spacing'] = michal;
            return entity;
        }
    };
    tangon = option.bind(verify)(tangon);
    var _closure1_slot10 = tangon;
    tangon = {};
    option = "function CardNativeTsx1(){const{withSpring,interpolateColor,pressed,backgroundColor,backgroundColorPressed,ON_PRESS_SPRING}=this.__closure;const pressedColor=withSpring(interpolateColor(pressed.get(),[0,1],[backgroundColor,backgroundColorPressed]),ON_PRESS_SPRING,'animate-always');return{backgroundColor:pressedColor};}";
    tangon['code'] = option;
    var _closure1_slot11 = tangon;
    tangon = 12;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'design/components/Card/native/Card.native.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['Card'] = michal;
    zuuluu['InternalCard'] = michal;
    return entity;
})();