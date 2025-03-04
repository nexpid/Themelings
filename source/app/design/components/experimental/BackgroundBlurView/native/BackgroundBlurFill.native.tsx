// app/design/components/experimental/BackgroundBlurView/native/BackgroundBlurFill.native.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: useBlurTheme
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 5;
            zuuluu = zuuluu[entity];
            entity = undefined;
            zuuluu = tangon.bind(entity)(zuuluu);
            entity = zuuluu.useThemeContext;
            entity = entity.bind(zuuluu)();
            entity = entity.theme;
            zuuluu = null;
            if(!(zuuluu != michal)) { _fun00002_ip = 53; continue _fun00001 }
 50:
            entity = michal;
 53:
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo, argBar) { // Original name: useBlurStyle
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            oscard = argFoo;
            michal = argBar;
            var _closure2_slot0 = oscard;
            report = _closure1_slot3;
            tangon = report.useMemo;
            zuuluu = new Array(1);
            zuuluu[0] = oscard;
            entity = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zuuluu = _closure2_slot0;
                    entity = 'ultra-thin';
                    michal = 'light';
                    if(!(michal === zuuluu)) { _fun00006_ip = 25; continue _fun00005 }
 21:
                    entity = 'default';
 25:
                    return entity;
                }
            };
            entity = tangon.bind(report)(entity, zuuluu);
            zuuluu = null;
            if(!(zuuluu != michal)) { _fun00004_ip = 52; continue _fun00003 }
 49:
            entity = michal;
 52:
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function(argFoo, argBar) { // Original name: useBlurTintRgba
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            oscard = argFoo;
            michal = argBar;
            var _closure2_slot0 = oscard;
            report = _closure1_slot3;
            tangon = report.useMemo;
            zuuluu = new Array(1);
            zuuluu[0] = oscard;
            entity = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    michal = _closure2_slot0;
                    entity = 'light';
                    if(!(entity !== michal)) { _fun00010_ip = 57; continue _fun00009 }
 15:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 4;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    zuuluu = tangon.bind(michal)(zuuluu);
                    michal = zuuluu.hexToRgbaString;
                    entity = _closure1_slot8;
                    entity = michal.bind(zuuluu)(entity);
                    _fun00010_ip = 97; continue _fun00009;
 57:
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    zuuluu = 4;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    tangon = report.bind(zuuluu)(tangon);
                    zuuluu = tangon.hexToRgbaString;
                    michal = _closure1_slot6;
                    entity = zuuluu.bind(tangon)(michal);
 97:
                    return entity;
                }
            };
            entity = tangon.bind(report)(entity, zuuluu);
            zuuluu = null;
            if(!(zuuluu != michal)) { _fun00008_ip = 52; continue _fun00007 }
 49:
            entity = michal;
 52:
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo, argBar) { // Original name: useBlurFallback
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            michal = argBar;
            tangon = _closure1_slot0;
            golfie = _closure1_slot2;
            zuuluu = 6;
            zuuluu = golfie[zuuluu];
            oscard = undefined;
            report = tangon.bind(oscard)(zuuluu);
            tangon = report.useToken;
            zuuluu = _closure1_slot1;
            entity = 3;
            entity = golfie[entity];
            entity = zuuluu.bind(oscard)(entity);
            entity = entity.colors;
            zuuluu = entity.BLUR_FALLBACK;
            entity = argFoo;
            entity = tangon.bind(report)(zuuluu, entity);
            zuuluu = null;
            if(!(zuuluu != michal)) { _fun00012_ip = 79; continue _fun00011 }
 76:
            entity = michal;
 79:
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    offset = 0;
    option = oscard[offset];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.StyleSheet;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    tangon = tangon.unsafe_rawColors;
    verify = tangon.BLACK_500;
    tangon = 4;
    golfie = oscard[tangon];
    option = report.bind(entity)(golfie);
    golfie = option.hexWithOpacity;
    golfie = golfie.bind(option)(verify, offset);
    var _closure1_slot6 = golfie;
    golfie = oscard[tangon];
    offset = report.bind(entity)(golfie);
    option = offset.hexWithOpacity;
    golfie = 0.2;
    golfie = option.bind(offset)(verify, golfie);
    var _closure1_slot7 = golfie;
    golfie = oscard[tangon];
    offset = report.bind(entity)(golfie);
    option = offset.hexWithOpacity;
    golfie = 0.4;
    golfie = option.bind(offset)(verify, golfie);
    var _closure1_slot8 = golfie;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.hexWithOpacity;
    tangon = 0.5;
    tangon = golfie.bind(option)(verify, tangon);
    var _closure1_slot9 = tangon;
    tangon = {};
    golfie = "function BackgroundBlurFillNativeTsx1(){const{withSpring,interpolateColor,pressed,fallbackColor,fallbackColorPressed,ON_PRESS_SPRING}=this.__closure;return{backgroundColor:withSpring(interpolateColor(pressed.get(),[0,1],[fallbackColor,fallbackColorPressed]),ON_PRESS_SPRING,'animate-always')};}";
    tangon['code'] = golfie;
    var _closure1_slot10 = tangon;
    tangon = {};
    golfie = "function BackgroundBlurFillNativeTsx2(){const{shouldUseFallback,withSpring,interpolateColor,pressed,blurTint,blurTintPressed,ON_PRESS_SPRING}=this.__closure;return{blurTintRgba:shouldUseFallback?undefined:withSpring(interpolateColor(pressed.get(),[0,1],[blurTint,blurTintPressed]),ON_PRESS_SPRING,'animate-always')};}";
    tangon['code'] = golfie;
    var _closure1_slot11 = tangon;
    tangon = 12;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.fileFinishedImporting;
    tangon = 'design/components/experimental/BackgroundBlurView/native/BackgroundBlurFill.native.tsx';
    tangon = golfie.bind(option)(tangon);
    tangon = 7;
    golfie = oscard[tangon];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.BlurTheme;
    zuuluu['BlurTheme'] = golfie;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.BlurStyle;
    zuuluu['BlurStyle'] = tangon;
    tangon = function(argFoo) { // Original name: BackgroundBlurFill
        entity = argFoo;
        oscard = entity.style;
        yankee = entity.blurTheme;
        option = entity.blurStyle;
        offset = entity.blurAmount;
        zuuluu = entity.blurTintRgba;
        michal = entity.android_fallbackColor;
        golfie = entity.android_blurTargetViewNativeId;
        entity = _closure1_slot13;
        verify = _closure1_slot12;
        tangon = undefined;
        romeon = verify.bind(tangon)(yankee);
        yankee = entity.bind(tangon)(romeon, option);
        entity = _closure1_slot14;
        verify = entity.bind(tangon)(romeon, zuuluu);
        entity = _closure1_slot15;
        option = entity.bind(tangon)(romeon, michal);
        zuuluu = _closure1_slot5;
        michal = _closure1_slot1;
        foxtra = _closure1_slot2;
        entity = 7;
        entity = foxtra[entity];
        michal = michal.bind(tangon)(entity);
        entity = {};
        entity['blurTheme'] = romeon;
        entity['blurStyle'] = yankee;
        entity['blurAmount'] = offset;
        entity['blurTintRgba'] = verify;
        entity['android_fallbackColor'] = option;
        entity['android_blurTargetViewNativeId'] = golfie;
        report = _closure1_slot4;
        golfie = report.absoluteFill;
        report = new Array(2);
        report[0] = golfie;
        report[1] = oscard;
        entity['style'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['BackgroundBlurFill'] = tangon;
    tangon = function(argFoo) { // Original name: BackgroundBlurFillAnimated
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = argFoo;
            oscard = entity.style;
            romeon = entity.blurTheme;
            verify = entity.blurStyle;
            yankee = entity.blurAmount;
            zuuluu = entity.blurTintRgba;
            michal = entity.android_fallbackColor;
            option = entity.android_blurTargetViewNativeId;
            golfie = entity.animatedProps;
            entity = _closure1_slot13;
            offset = _closure1_slot12;
            tangon = undefined;
            foxtra = offset.bind(tangon)(romeon);
            romeon = entity.bind(tangon)(foxtra, verify);
            entity = _closure1_slot14;
            offset = entity.bind(tangon)(foxtra, zuuluu);
            entity = _closure1_slot15;
            verify = entity.bind(tangon)(foxtra, michal);
            zuuluu = _closure1_slot5;
            michal = _closure1_slot1;
            backup = _closure1_slot2;
            entity = 8;
            entity = backup[entity];
            michal = michal.bind(tangon)(entity);
            entity = {};
            entity['blurTheme'] = foxtra;
            entity['blurStyle'] = romeon;
            entity['blurAmount'] = yankee;
            entity['blurTintRgba'] = offset;
            entity['android_fallbackColor'] = verify;
            entity['android_blurTargetViewNativeId'] = option;
            report = _closure1_slot4;
            option = report.absoluteFill;
            report = new Array(2);
            report[0] = option;
            report[1] = oscard;
            entity['style'] = report;
            report = null;
            report = report != golfie;
            if(!report) { _fun00014_ip = 195; continue _fun00013 }
 185:
            oscard = {};
            oscard['animatedProps'] = golfie;
            report = oscard;
 195:
            sizing = entity;
            kiloes = report;
            report = copyDataProperties(sizing, kiloes);
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['BackgroundBlurFillAnimated'] = tangon;
    michal = function(argFoo) { // Original name: BackgroundBlurFillWithPress
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            report = argFoo;
            verify = report.style;
            zuuluu = report.blurTheme;
            result = report.pressed;
            var _closure2_slot0 = result;
            tangon = {'style': 0, 'blurTheme': 0, 'pressed': 0};
            sequen = null;
            config = tangon;
            michal = silentSetPrototypeOf(config, sequen);
            config = {};
            sequen = report;
            vacuum = tangon;
            golfie = copyDataProperties(config, sequen, vacuum);
            tangon = undefined;
            var _closure2_slot1 = tangon;
            var _closure2_slot2 = tangon;
            var _closure2_slot3 = tangon;
            var _closure2_slot4 = tangon;
            var _closure2_slot5 = tangon;
            michal = _closure1_slot12;
            yankee = michal.bind(tangon)(zuuluu);
            michal = _closure1_slot13;
            offset = michal.bind(tangon)(yankee, tangon);
            michal = 'light';
            michal = michal === yankee;
            if(michal) { _fun00016_ip = 122; continue _fun00015 }
 116:
            output = _closure1_slot8;
            _fun00016_ip = 126; continue _fun00015;
 122:
            output = _closure1_slot6;
 126:
            _closure2_slot1 = output;
            if(michal) { _fun00016_ip = 139; continue _fun00015 }
 133:
            sizing = _closure1_slot9;
            _fun00016_ip = 143; continue _fun00015;
 139:
            sizing = _closure1_slot7;
 143:
            _closure2_slot2 = sizing;
            kiloes = _closure1_slot0;
            romeon = _closure1_slot2;
            report = 6;
            michal = romeon[report];
            backup = kiloes.bind(tangon)(michal);
            foxtra = backup.useToken;
            michal = _closure1_slot1;
            zuuluu = 3;
            option = romeon[zuuluu];
            option = michal.bind(tangon)(option);
            option = option.colors;
            option = option.BLUR_FALLBACK;
            source = foxtra.bind(backup)(option, yankee);
            _closure2_slot3 = source;
            report = romeon[report];
            option = kiloes.bind(tangon)(report);
            report = option.useToken;
            zuuluu = romeon[zuuluu];
            zuuluu = michal.bind(tangon)(zuuluu);
            zuuluu = zuuluu.colors;
            zuuluu = zuuluu.BLUR_FALLBACK_PRESSED;
            backup = report.bind(option)(zuuluu, yankee);
            _closure2_slot4 = backup;
            zuuluu = 7;
            zuuluu = romeon[zuuluu];
            report = kiloes.bind(tangon)(zuuluu);
            zuuluu = report.isBlurDisabled;
            report = zuuluu.bind(report)(golfie);
            _closure2_slot5 = report;
            echoed = 9;
            zuuluu = romeon[echoed];
            option = kiloes.bind(tangon)(zuuluu);
            golfie = option.useAnimatedStyle;
            zuuluu = function() { // Original name: p
                entity = {};
                golfie = _closure1_slot0;
                option = _closure1_slot2;
                michal = 10;
                michal = option[michal];
                zuuluu = undefined;
                oscard = golfie.bind(zuuluu)(michal);
                report = oscard.withSpring;
                michal = 9;
                michal = option[michal];
                yankee = golfie.bind(zuuluu)(michal);
                offset = yankee.interpolateColor;
                verify = _closure2_slot0;
                tangon = verify.get;
                verify = tangon.bind(verify)();
                romeon = _closure2_slot3;
                tangon = new Array(2);
                tangon[0] = romeon;
                michal = _closure2_slot4;
                tangon[1] = michal;
                michal = [0, 1];
                tangon = offset.bind(yankee)(verify, michal, tangon);
                michal = 11;
                michal = option[michal];
                michal = golfie.bind(zuuluu)(michal);
                zuuluu = michal.ON_PRESS_SPRING;
                michal = 'animate-always';
                michal = report.bind(oscard)(tangon, zuuluu, michal);
                entity['backgroundColor'] = michal;
                return entity;
            };
            foxtra = {};
            update = 10;
            ctrled = romeon[update];
            ctrled = kiloes.bind(tangon)(ctrled);
            ctrled = ctrled.withSpring;
            foxtra['withSpring'] = ctrled;
            ctrled = romeon[echoed];
            ctrled = kiloes.bind(tangon)(ctrled);
            ctrled = ctrled.interpolateColor;
            foxtra['interpolateColor'] = ctrled;
            foxtra['pressed'] = result;
            foxtra['fallbackColor'] = source;
            foxtra['fallbackColorPressed'] = backup;
            backup = 11;
            source = romeon[backup];
            source = kiloes.bind(tangon)(source);
            source = source.ON_PRESS_SPRING;
            foxtra['ON_PRESS_SPRING'] = source;
            zuuluu['__closure'] = foxtra;
            foxtra = 10497618157620.0;
            zuuluu['__workletHash'] = foxtra;
            foxtra = _closure1_slot10;
            zuuluu['__initData'] = foxtra;
            option = golfie.bind(option)(zuuluu);
            zuuluu = romeon[echoed];
            golfie = kiloes.bind(tangon)(zuuluu);
            zuuluu = golfie.useAnimatedProps;
            entity = function() { // Original name: T
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    entity = {};
                    tangon = _closure2_slot5;
                    option = undefined;
                    michal = undefined;
                    if(tangon) { _fun00018_ip = 146; continue _fun00017 }
 19:
                    tangon = _closure1_slot0;
                    verify = _closure1_slot2;
                    report = 10;
                    report = verify[report];
                    golfie = tangon.bind(option)(report);
                    oscard = golfie.withSpring;
                    report = 9;
                    report = verify[report];
                    romeon = tangon.bind(option)(report);
                    yankee = romeon.interpolateColor;
                    offset = _closure2_slot0;
                    report = offset.get;
                    offset = report.bind(offset)();
                    foxtra = _closure2_slot1;
                    report = new Array(2);
                    report[0] = foxtra;
                    zuuluu = _closure2_slot2;
                    report[1] = zuuluu;
                    zuuluu = [0, 1];
                    report = yankee.bind(romeon)(offset, zuuluu, report);
                    zuuluu = 11;
                    zuuluu = verify[zuuluu];
                    zuuluu = tangon.bind(option)(zuuluu);
                    tangon = zuuluu.ON_PRESS_SPRING;
                    zuuluu = 'animate-always';
                    michal = oscard.bind(golfie)(report, tangon, zuuluu);
 146:
                    entity['blurTintRgba'] = michal;
                    return entity;
                }
            };
            foxtra = {};
            foxtra['shouldUseFallback'] = report;
            update = romeon[update];
            update = kiloes.bind(tangon)(update);
            update = update.withSpring;
            foxtra['withSpring'] = update;
            echoed = romeon[echoed];
            echoed = kiloes.bind(tangon)(echoed);
            echoed = echoed.interpolateColor;
            foxtra['interpolateColor'] = echoed;
            foxtra['pressed'] = result;
            foxtra['blurTint'] = output;
            foxtra['blurTintPressed'] = sizing;
            backup = romeon[backup];
            backup = kiloes.bind(tangon)(backup);
            backup = backup.ON_PRESS_SPRING;
            foxtra['ON_PRESS_SPRING'] = backup;
            entity['__closure'] = foxtra;
            foxtra = 3902745666351.0;
            entity['__workletHash'] = foxtra;
            foxtra = _closure1_slot11;
            entity['__initData'] = foxtra;
            golfie = zuuluu.bind(golfie)(entity);
            zuuluu = _closure1_slot5;
            entity = 8;
            entity = romeon[entity];
            michal = michal.bind(tangon)(entity);
            entity = {};
            entity['blurTheme'] = yankee;
            entity['blurStyle'] = offset;
            oscard = _closure1_slot4;
            offset = oscard.absoluteFill;
            oscard = new Array(3);
            oscard[0] = offset;
            oscard[1] = verify;
            if(report) { _fun00016_ip = 625; continue _fun00015 }
 623:
            option = {};
 625:
            oscard[2] = option;
            entity['style'] = oscard;
            report = !report;
            if(!report) { _fun00016_ip = 649; continue _fun00015 }
 639:
            oscard = {};
            oscard['animatedProps'] = golfie;
            report = oscard;
 649:
            config = entity;
            sequen = report;
            report = copyDataProperties(config, sequen);
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['BackgroundBlurFillWithPress'] = michal;
    return entity;
})();