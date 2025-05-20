// app/modules/main_tabs_v2/native/settings/screens/appearance/components/SettingsAppearanceGradientBackground.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
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
        verify = 0;
        golfie = oscard[verify];
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
        tangon = option.bind(entity)(tangon);
        var _closure1_slot5 = tangon;
        tangon = 3;
        tangon = oscard[tangon];
        tangon = report.bind(entity)(tangon);
        tangon = tangon.jsx;
        var _closure1_slot6 = tangon;
        tangon = 4;
        offset = oscard[tangon];
        romeon = report.bind(entity)(offset);
        yankee = romeon.processColor;
        offset = 'rgba(0, 0, 0, 0)';
        offset = yankee.bind(romeon)(offset);
        yankee = null;
        yankee = yankee != offset;
        if(!yankee) { _fun00002_ip = 178; continue _fun00001 }
 175:
        verify = offset;
 178:
        tangon = oscard[tangon];
        offset = option.bind(entity)(tangon);
        option = offset.createAnimatedComponent;
        tangon = 5;
        tangon = oscard[tangon];
        tangon = report.bind(entity)(tangon);
        tangon = tangon.LinearGradientNativeComponent;
        tangon = option.bind(offset)(tangon);
        var _closure1_slot7 = tangon;
        tangon = {};
        option = new Array(2);
        option[0] = verify;
        option[1] = verify;
        tangon['colors'] = option;
        option = new Array(0);
        tangon['locations'] = option;
        option = {'x': 0, 'y': 0};
        tangon['startPoint'] = option;
        option = {'x': 0, 'y': 0};
        tangon['endPoint'] = option;
        var _closure1_slot8 = tangon;
        tangon = {};
        option = 'function SettingsAppearanceGradientBackgroundTsx1(){const{gradientSize,animatedLinearGradientLoadingProps,themeState,interpolate,tweener,getGradientStartPoint,processColor,interpolateColor}=this.__closure;const{width:width,height:height}=gradientSize.get();if(width===0||height===0){return animatedLinearGradientLoadingProps;}const{themePrev:{colors:colorsPrev,angle:anglePrev},themeCurrent:{colors:colorsCurrent,angle:angleCurrent}}=themeState.get();const angle=90-interpolate(tweener.get(),[0,1],[anglePrev,angleCurrent]);const originPoint=getGradientStartPoint(angle,width,height);return{colors:colorsPrev.map(function(_,i){var _processColor;return(_processColor=processColor(interpolateColor(tweener.get(),[0,1],[colorsPrev[i].hex,colorsCurrent[i].hex])))!==null&&_processColor!==void 0?_processColor:0;}),locations:colorsPrev.map(function(_,i){return interpolate(tweener.get(),[0,1],[colorsPrev[i].stop/100,colorsCurrent[i].stop/100]);}),startPoint:{x:(width/2+originPoint[0])/width,y:(height/2-originPoint[1])/height},endPoint:{x:(width/2-originPoint[0])/width,y:(height/2+originPoint[1])/height}};}';
        tangon['code'] = option;
        var _closure1_slot9 = tangon;
        tangon = golfie.memo;
        michal = function(argFoo) { // Original name: SettingsAppearanceGradientBackground
            zuuluu = argFoo;
            michal = zuuluu.isDimmed;
            var _closure2_slot0 = michal;
            option = zuuluu.themes;
            var _closure2_slot1 = option;
            oscard = zuuluu.themeIndex;
            var _closure2_slot2 = oscard;
            golfie = _closure1_slot3;
            tangon = golfie.useMemo;
            zuuluu = new Array(3);
            zuuluu[0] = option;
            zuuluu[1] = oscard;
            zuuluu[2] = michal;
            michal = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 6;
                    entity = michal[entity];
                    michal = undefined;
                    oscard = zuuluu.bind(michal)(entity);
                    report = oscard.convertThemesToAnimatedThemes;
                    tangon = _closure2_slot1;
                    option = _closure2_slot0;
                    zuuluu = undefined;
                    if(!option) { _fun00004_ip = 57; continue _fun00003 }
 47:
                    option = _closure1_slot5;
                    zuuluu = option.BACKGROUND_GRADIENT_DARK_OPACITY;
 57:
                    option = _closure2_slot0;
                    michal = undefined;
                    if(!option) { _fun00004_ip = 76; continue _fun00003 }
 66:
                    golfie = _closure1_slot5;
                    michal = golfie.BACKGROUND_GRADIENT_LIGHT_OPACITY;
 76:
                    michal = report.bind(oscard)(tangon, zuuluu, michal);
                    entity = _closure2_slot2;
                    entity = michal[entity];
                    return entity;
                }
            };
            zuuluu = tangon.bind(golfie)(michal, zuuluu);
            michal = function(argFoo) { // Original name: useThemeStateTracker
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    option = argFoo;
                    zuuluu = _closure1_slot0;
                    report = _closure1_slot2;
                    michal = 6;
                    michal = report[michal];
                    oscard = undefined;
                    zuuluu = zuuluu.bind(oscard)(michal);
                    michal = zuuluu.useLaunchWelcomeSystemTheme;
                    golfie = michal.bind(zuuluu)();
                    zuuluu = option.theme;
                    michal = 'system';
                    if(!(michal === zuuluu)) { _fun00006_ip = 57; continue _fun00005 }
 54:
                    option = golfie;
 57:
                    var _closure3_slot0 = option;
                    report = _closure1_slot0;
                    verify = _closure1_slot2;
                    michal = 4;
                    zuuluu = verify[michal];
                    yankee = report.bind(oscard)(zuuluu);
                    offset = yankee.useSharedValue;
                    zuuluu = {};
                    zuuluu['themePrev'] = option;
                    zuuluu['themeCurrent'] = option;
                    zuuluu = offset.bind(yankee)(zuuluu);
                    var _closure3_slot1 = zuuluu;
                    michal = verify[michal];
                    oscard = report.bind(oscard)(michal);
                    report = oscard.useSharedValue;
                    michal = 0;
                    michal = report.bind(oscard)(michal);
                    var _closure3_slot2 = michal;
                    oscard = _closure1_slot3;
                    report = oscard.useEffect;
                    tangon = new Array(4);
                    tangon[0] = option;
                    tangon[1] = zuuluu;
                    tangon[2] = michal;
                    tangon[3] = golfie;
                    entity = function() {
                        tangon = _closure3_slot1;
                        zuuluu = tangon.set;
                        michal = {};
                        oscard = _closure3_slot1;
                        report = oscard.get;
                        report = report.bind(oscard)();
                        report = report.themeCurrent;
                        michal['themePrev'] = report;
                        report = _closure3_slot0;
                        michal['themeCurrent'] = report;
                        michal = zuuluu.bind(tangon)(michal);
                        tangon = _closure3_slot2;
                        zuuluu = tangon.set;
                        michal = 0;
                        michal = zuuluu.bind(tangon)(michal);
                        tangon = _closure3_slot2;
                        zuuluu = tangon.set;
                        report = _closure1_slot0;
                        option = _closure1_slot2;
                        entity = 7;
                        michal = option[entity];
                        entity = undefined;
                        golfie = report.bind(entity)(michal);
                        oscard = golfie.withTiming;
                        michal = 8;
                        michal = option[michal];
                        michal = report.bind(entity)(michal);
                        report = michal.timingStandard;
                        michal = 1;
                        michal = oscard.bind(golfie)(michal, report);
                        michal = zuuluu.bind(tangon)(michal);
                        return entity;
                    };
                    entity = report.bind(oscard)(entity, tangon);
                    entity = {};
                    entity['themeState'] = zuuluu;
                    entity['tweener'] = michal;
                    return entity;
                }
            };
            tangon = undefined;
            michal = michal.bind(tangon)(zuuluu);
            romeon = michal.themeState;
            var _closure2_slot3 = romeon;
            yankee = michal.tweener;
            var _closure2_slot4 = yankee;
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            option = 4;
            michal = offset[option];
            oscard = verify.bind(tangon)(michal);
            zuuluu = oscard.useSharedValue;
            michal = {'width': 0, 'height': 0};
            foxtra = zuuluu.bind(oscard)(michal);
            var _closure2_slot5 = foxtra;
            oscard = golfie.useCallback;
            zuuluu = new Array(1);
            zuuluu[0] = foxtra;
            michal = function(argFoo) {
                entity = argFoo;
                tangon = entity.nativeEvent;
                zuuluu = _closure2_slot5;
                michal = zuuluu.set;
                entity = {};
                report = tangon.layout;
                report = report.width;
                entity['width'] = report;
                tangon = tangon.layout;
                tangon = tangon.height;
                entity['height'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            };
            golfie = oscard.bind(golfie)(michal, zuuluu);
            michal = offset[option];
            zuuluu = verify.bind(tangon)(michal);
            michal = zuuluu.useAnimatedProps;
            entity = function() { // Original name: P
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zuuluu = _closure2_slot5;
                    entity = zuuluu.get;
                    entity = entity.bind(zuuluu)();
                    option = entity.width;
                    tangon = entity.height;
                    golfie = 0;
                    if(!(golfie !== option)) { _fun00008_ip = 349; continue _fun00007 }
 37:
                    if(!(golfie !== tangon)) { _fun00008_ip = 349; continue _fun00007 }
 44:
                    zuuluu = _closure2_slot3;
                    entity = zuuluu.get;
                    entity = entity.bind(zuuluu)();
                    zuuluu = entity.themePrev;
                    report = zuuluu.colors;
                    var _closure3_slot0 = report;
                    backup = zuuluu.angle;
                    entity = entity.themeCurrent;
                    zuuluu = entity.colors;
                    var _closure3_slot1 = zuuluu;
                    zuuluu = entity.angle;
                    romeon = _closure1_slot0;
                    offset = _closure1_slot2;
                    oscard = 4;
                    yankee = offset[oscard];
                    oscard = undefined;
                    foxtra = romeon.bind(oscard)(yankee);
                    romeon = foxtra.interpolate;
                    yankee = _closure2_slot4;
                    verify = yankee.get;
                    yankee = verify.bind(yankee)();
                    verify = new Array(2);
                    verify[0] = backup;
                    verify[1] = zuuluu;
                    zuuluu = [0, 1];
                    verify = romeon.bind(foxtra)(yankee, zuuluu, verify);
                    zuuluu = 90;
                    zuuluu = zuuluu - verify;
                    verify = _closure1_slot1;
                    entity = 9;
                    entity = offset[entity];
                    entity = verify.bind(oscard)(entity);
                    oscard = entity.bind(oscard)(zuuluu, option, tangon);
                    entity = {};
                    verify = report.map;
                    zuuluu = function(argFoo, argBar) {
                        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                            option = argBar;
                            report = _closure1_slot0;
                            oscard = _closure1_slot2;
                            entity = 4;
                            michal = oscard[entity];
                            tangon = undefined;
                            zuuluu = report.bind(tangon)(michal);
                            michal = zuuluu.processColor;
                            entity = oscard[entity];
                            golfie = report.bind(tangon)(entity);
                            oscard = golfie.interpolateColor;
                            tangon = _closure2_slot4;
                            entity = tangon.get;
                            report = entity.bind(tangon)();
                            tangon = _closure3_slot0;
                            tangon = tangon[option];
                            verify = tangon.hex;
                            tangon = new Array(2);
                            tangon[0] = verify;
                            entity = _closure3_slot1;
                            entity = entity[option];
                            entity = entity.hex;
                            tangon[1] = entity;
                            entity = [0, 1];
                            entity = oscard.bind(golfie)(report, entity, tangon);
                            michal = michal.bind(zuuluu)(entity);
                            entity = null;
                            zuuluu = entity != michal;
                            entity = 0;
                            if(!zuuluu) { _fun00010_ip = 142; continue _fun00009 }
 139:
                            entity = michal;
 142:
                            return entity;
                        }
                    };
                    zuuluu = verify.bind(report)(zuuluu);
                    entity['colors'] = zuuluu;
                    zuuluu = report.map;
                    michal = function(argFoo, argBar) {
                        golfie = argBar;
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 4;
                        michal = michal[entity];
                        entity = undefined;
                        report = zuuluu.bind(entity)(michal);
                        tangon = report.interpolate;
                        michal = _closure2_slot4;
                        entity = michal.get;
                        zuuluu = entity.bind(michal)();
                        michal = _closure3_slot0;
                        michal = michal[golfie];
                        michal = michal.stop;
                        oscard = 100;
                        option = michal / oscard;
                        michal = new Array(2);
                        michal[0] = option;
                        entity = _closure3_slot1;
                        entity = entity[golfie];
                        entity = entity.stop;
                        entity = entity / oscard;
                        michal[1] = entity;
                        entity = [0, 1];
                        entity = tangon.bind(report)(zuuluu, entity, michal);
                        return entity;
                    };
                    michal = zuuluu.bind(report)(michal);
                    entity['locations'] = michal;
                    michal = {};
                    report = 2;
                    verify = option / report;
                    zuuluu = oscard[golfie];
                    zuuluu = verify + zuuluu;
                    zuuluu = zuuluu / option;
                    michal['x'] = zuuluu;
                    offset = tangon / report;
                    zuuluu = 1;
                    verify = oscard[zuuluu];
                    verify = offset - verify;
                    verify = verify / tangon;
                    michal['y'] = verify;
                    entity['startPoint'] = michal;
                    michal = {};
                    verify = option / report;
                    golfie = oscard[golfie];
                    golfie = verify - golfie;
                    golfie = golfie / option;
                    michal['x'] = golfie;
                    report = tangon / report;
                    zuuluu = oscard[zuuluu];
                    zuuluu = report + zuuluu;
                    zuuluu = zuuluu / tangon;
                    michal['y'] = zuuluu;
                    entity['endPoint'] = michal;
                    return entity;
 349:
                    entity = _closure1_slot8;
                    return entity;
                }
            };
            oscard = {};
            oscard['gradientSize'] = foxtra;
            foxtra = _closure1_slot8;
            oscard['animatedLinearGradientLoadingProps'] = foxtra;
            oscard['themeState'] = romeon;
            romeon = offset[option];
            romeon = verify.bind(tangon)(romeon);
            romeon = romeon.interpolate;
            oscard['interpolate'] = romeon;
            oscard['tweener'] = yankee;
            romeon = _closure1_slot1;
            yankee = 9;
            yankee = offset[yankee];
            yankee = romeon.bind(tangon)(yankee);
            oscard['getGradientStartPoint'] = yankee;
            yankee = offset[option];
            yankee = verify.bind(tangon)(yankee);
            yankee = yankee.processColor;
            oscard['processColor'] = yankee;
            option = offset[option];
            option = verify.bind(tangon)(option);
            option = option.interpolateColor;
            oscard['interpolateColor'] = option;
            entity['__closure'] = oscard;
            oscard = 5151435414824.0;
            entity['__workletHash'] = oscard;
            oscard = _closure1_slot9;
            entity['__initData'] = oscard;
            oscard = michal.bind(zuuluu)(entity);
            zuuluu = _closure1_slot6;
            michal = _closure1_slot7;
            entity = {};
            option = _closure1_slot4;
            option = option.absoluteFill;
            entity['style'] = option;
            entity['onLayout'] = golfie;
            backup = _closure1_slot8;
            kiloes = entity;
            report = copyDataProperties(kiloes, backup);
            report = 'animatedProps';
            entity[report] = oscard;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        michal = tangon.bind(golfie)(michal);
        tangon = 10;
        tangon = oscard[tangon];
        oscard = report.bind(entity)(tangon);
        report = oscard.fileFinishedImporting;
        tangon = 'modules/main_tabs_v2/native/settings/screens/appearance/components/SettingsAppearanceGradientBackground.tsx';
        tangon = report.bind(oscard)(tangon);
        zuuluu['default'] = michal;
        return entity;
    }
})();