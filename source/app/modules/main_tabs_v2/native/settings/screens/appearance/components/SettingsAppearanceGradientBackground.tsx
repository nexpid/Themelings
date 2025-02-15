// app/modules/main_tabs_v2/native/settings/screens/appearance/components/SettingsAppearanceGradientBackground.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    _fun97264: for(var _fun97264_ip = 0; ; ) switch(_fun97264_ip) {
 0:
        report = argBar;
        options = argBaz;
        zulu = argFred;
        oscar = argPlugh;
        var _closure1_slot0 = report;
        var _closure1_slot1 = options;
        var _closure1_slot2 = oscar;
        entity = global;
        verify = entity.Object;
        golf = verify.defineProperty;
        tango = {};
        entity = true;
        tango['value'] = entity;
        entity = '__esModule';
        entity = golf.bind(verify)(zulu, entity, tango);
        verify = 0;
        golf = oscar[verify];
        tango = argCorge;
        entity = undefined;
        golf = tango.bind(entity)(golf);
        var _closure1_slot3 = golf;
        tango = 1;
        tango = oscar[tango];
        tango = report.bind(entity)(tango);
        tango = tango.StyleSheet;
        var _closure1_slot4 = tango;
        tango = 2;
        tango = oscar[tango];
        tango = options.bind(entity)(tango);
        var _closure1_slot5 = tango;
        tango = 3;
        tango = oscar[tango];
        tango = report.bind(entity)(tango);
        tango = tango.jsx;
        var _closure1_slot6 = tango;
        tango = 4;
        offset = oscar[tango];
        romeo = report.bind(entity)(offset);
        yankee = romeo.processColor;
        offset = 'rgba(0, 0, 0, 0)';
        offset = yankee.bind(romeo)(offset);
        yankee = null;
        yankee = yankee != offset;
        if(!yankee) { _fun97264_ip = 178; continue _fun97264 }
 175:
        verify = offset;
 178:
        tango = oscar[tango];
        offset = options.bind(entity)(tango);
        options = offset.createAnimatedComponent;
        tango = 5;
        tango = oscar[tango];
        tango = report.bind(entity)(tango);
        tango = tango.LinearGradientNativeComponent;
        tango = options.bind(offset)(tango);
        var _closure1_slot7 = tango;
        tango = {};
        options = new Array(2);
        options[0] = verify;
        options[1] = verify;
        tango['colors'] = options;
        options = new Array(0);
        tango['locations'] = options;
        options = {'x': 0, 'y': 0};
        tango['startPoint'] = options;
        options = {'x': 0, 'y': 0};
        tango['endPoint'] = options;
        var _closure1_slot8 = tango;
        tango = {};
        options = 'function SettingsAppearanceGradientBackgroundTsx1(){const{gradientSize,animatedLinearGradientLoadingProps,themeState,interpolate,tweener,getGradientStartPoint,processColor,interpolateColor}=this.__closure;const{width:width,height:height}=gradientSize.get();if(width===0||height===0){return animatedLinearGradientLoadingProps;}const{themePrev:{colors:colorsPrev,angle:anglePrev},themeCurrent:{colors:colorsCurrent,angle:angleCurrent}}=themeState.get();const angle=90-interpolate(tweener.get(),[0,1],[anglePrev,angleCurrent]);const originPoint=getGradientStartPoint(angle,width,height);return{colors:colorsPrev.map(function(_,i){var _processColor;return(_processColor=processColor(interpolateColor(tweener.get(),[0,1],[colorsPrev[i].hex,colorsCurrent[i].hex])))!==null&&_processColor!==void 0?_processColor:0;}),locations:colorsPrev.map(function(_,i){return interpolate(tweener.get(),[0,1],[colorsPrev[i].stop/100,colorsCurrent[i].stop/100]);}),startPoint:{x:(width/2+originPoint[0])/width,y:(height/2-originPoint[1])/height},endPoint:{x:(width/2-originPoint[0])/width,y:(height/2+originPoint[1])/height}};}';
        tango['code'] = options;
        var _closure1_slot9 = tango;
        tango = golf.memo;
        mike = function(argFoo) { // Original name: SettingsAppearanceGradientBackground
            zulu = argFoo;
            mike = zulu.isDimmed;
            var _closure2_slot0 = mike;
            options = zulu.themes;
            var _closure2_slot1 = options;
            oscar = zulu.themeIndex;
            var _closure2_slot2 = oscar;
            golf = _closure1_slot3;
            tango = golf.useMemo;
            zulu = new Array(3);
            zulu[0] = options;
            zulu[1] = oscar;
            zulu[2] = mike;
            mike = function() {
                _fun97268: for(var _fun97268_ip = 0; ; ) switch(_fun97268_ip) {
 0:
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 6;
                    entity = mike[entity];
                    mike = undefined;
                    oscar = zulu.bind(mike)(entity);
                    report = oscar.convertThemesToAnimatedThemes;
                    tango = _closure2_slot1;
                    options = _closure2_slot0;
                    zulu = undefined;
                    if(!options) { _fun97268_ip = 57; continue _fun97268 }
 47:
                    options = _closure1_slot5;
                    zulu = options.BACKGROUND_GRADIENT_DARK_OPACITY;
 57:
                    options = _closure2_slot0;
                    mike = undefined;
                    if(!options) { _fun97268_ip = 76; continue _fun97268 }
 66:
                    golf = _closure1_slot5;
                    mike = golf.BACKGROUND_GRADIENT_LIGHT_OPACITY;
 76:
                    mike = report.bind(oscar)(tango, zulu, mike);
                    entity = _closure2_slot2;
                    entity = mike[entity];
                    return entity;
                }
            };
            zulu = tango.bind(golf)(mike, zulu);
            mike = function(argFoo) { // Original name: useThemeStateTracker
                _fun97266: for(var _fun97266_ip = 0; ; ) switch(_fun97266_ip) {
 0:
                    options = argFoo;
                    zulu = _closure1_slot0;
                    report = _closure1_slot2;
                    mike = 6;
                    mike = report[mike];
                    oscar = undefined;
                    zulu = zulu.bind(oscar)(mike);
                    mike = zulu.useLaunchWelcomeSystemTheme;
                    golf = mike.bind(zulu)();
                    zulu = options.theme;
                    mike = 'system';
                    if(!(mike === zulu)) { _fun97266_ip = 57; continue _fun97266 }
 54:
                    options = golf;
 57:
                    var _closure3_slot0 = options;
                    report = _closure1_slot0;
                    verify = _closure1_slot2;
                    mike = 4;
                    zulu = verify[mike];
                    yankee = report.bind(oscar)(zulu);
                    offset = yankee.useSharedValue;
                    zulu = {};
                    zulu['themePrev'] = options;
                    zulu['themeCurrent'] = options;
                    zulu = offset.bind(yankee)(zulu);
                    var _closure3_slot1 = zulu;
                    mike = verify[mike];
                    oscar = report.bind(oscar)(mike);
                    report = oscar.useSharedValue;
                    mike = 0;
                    mike = report.bind(oscar)(mike);
                    var _closure3_slot2 = mike;
                    oscar = _closure1_slot3;
                    report = oscar.useEffect;
                    tango = new Array(4);
                    tango[0] = options;
                    tango[1] = zulu;
                    tango[2] = mike;
                    tango[3] = golf;
                    entity = function() {
                        tango = _closure3_slot1;
                        zulu = tango.set;
                        mike = {};
                        oscar = _closure3_slot1;
                        report = oscar.get;
                        report = report.bind(oscar)();
                        report = report.themeCurrent;
                        mike['themePrev'] = report;
                        report = _closure3_slot0;
                        mike['themeCurrent'] = report;
                        mike = zulu.bind(tango)(mike);
                        tango = _closure3_slot2;
                        zulu = tango.set;
                        mike = 0;
                        mike = zulu.bind(tango)(mike);
                        tango = _closure3_slot2;
                        zulu = tango.set;
                        report = _closure1_slot0;
                        options = _closure1_slot2;
                        entity = 7;
                        mike = options[entity];
                        entity = undefined;
                        golf = report.bind(entity)(mike);
                        oscar = golf.withTiming;
                        mike = 8;
                        mike = options[mike];
                        mike = report.bind(entity)(mike);
                        report = mike.timingStandard;
                        mike = 1;
                        mike = oscar.bind(golf)(mike, report);
                        mike = zulu.bind(tango)(mike);
                        return entity;
                    };
                    entity = report.bind(oscar)(entity, tango);
                    entity = {};
                    entity['themeState'] = zulu;
                    entity['tweener'] = mike;
                    return entity;
                }
            };
            tango = undefined;
            mike = mike.bind(tango)(zulu);
            romeo = mike.themeState;
            var _closure2_slot3 = romeo;
            yankee = mike.tweener;
            var _closure2_slot4 = yankee;
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            options = 4;
            mike = offset[options];
            oscar = verify.bind(tango)(mike);
            zulu = oscar.useSharedValue;
            mike = {'width': 0, 'height': 0};
            foxtrot = zulu.bind(oscar)(mike);
            var _closure2_slot5 = foxtrot;
            oscar = golf.useCallback;
            zulu = new Array(1);
            zulu[0] = foxtrot;
            mike = function(argFoo) {
                entity = argFoo;
                tango = entity.nativeEvent;
                zulu = _closure2_slot5;
                mike = zulu.set;
                entity = {};
                report = tango.layout;
                report = report.width;
                entity['width'] = report;
                tango = tango.layout;
                tango = tango.height;
                entity['height'] = tango;
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            golf = oscar.bind(golf)(mike, zulu);
            mike = offset[options];
            zulu = verify.bind(tango)(mike);
            mike = zulu.useAnimatedProps;
            entity = function() { // Original name: P
                _fun97270: for(var _fun97270_ip = 0; ; ) switch(_fun97270_ip) {
 0:
                    zulu = _closure2_slot5;
                    entity = zulu.get;
                    entity = entity.bind(zulu)();
                    options = entity.width;
                    tango = entity.height;
                    golf = 0;
                    if(!(golf !== options)) { _fun97270_ip = 349; continue _fun97270 }
 37:
                    if(!(golf !== tango)) { _fun97270_ip = 349; continue _fun97270 }
 44:
                    zulu = _closure2_slot3;
                    entity = zulu.get;
                    entity = entity.bind(zulu)();
                    zulu = entity.themePrev;
                    report = zulu.colors;
                    var _closure3_slot0 = report;
                    backup = zulu.angle;
                    entity = entity.themeCurrent;
                    zulu = entity.colors;
                    var _closure3_slot1 = zulu;
                    zulu = entity.angle;
                    romeo = _closure1_slot0;
                    offset = _closure1_slot2;
                    oscar = 4;
                    yankee = offset[oscar];
                    oscar = undefined;
                    foxtrot = romeo.bind(oscar)(yankee);
                    romeo = foxtrot.interpolate;
                    yankee = _closure2_slot4;
                    verify = yankee.get;
                    yankee = verify.bind(yankee)();
                    verify = new Array(2);
                    verify[0] = backup;
                    verify[1] = zulu;
                    zulu = [0, 1];
                    verify = romeo.bind(foxtrot)(yankee, zulu, verify);
                    zulu = 90;
                    zulu = zulu - verify;
                    verify = _closure1_slot1;
                    entity = 9;
                    entity = offset[entity];
                    entity = verify.bind(oscar)(entity);
                    oscar = entity.bind(oscar)(zulu, options, tango);
                    entity = {};
                    verify = report.map;
                    zulu = function(argFoo, argBar) {
                        _fun97271: for(var _fun97271_ip = 0; ; ) switch(_fun97271_ip) {
 0:
                            options = argBar;
                            report = _closure1_slot0;
                            oscar = _closure1_slot2;
                            entity = 4;
                            mike = oscar[entity];
                            tango = undefined;
                            zulu = report.bind(tango)(mike);
                            mike = zulu.processColor;
                            entity = oscar[entity];
                            golf = report.bind(tango)(entity);
                            oscar = golf.interpolateColor;
                            tango = _closure2_slot4;
                            entity = tango.get;
                            report = entity.bind(tango)();
                            tango = _closure3_slot0;
                            tango = tango[options];
                            verify = tango.hex;
                            tango = new Array(2);
                            tango[0] = verify;
                            entity = _closure3_slot1;
                            entity = entity[options];
                            entity = entity.hex;
                            tango[1] = entity;
                            entity = [0, 1];
                            entity = oscar.bind(golf)(report, entity, tango);
                            mike = mike.bind(zulu)(entity);
                            entity = null;
                            zulu = entity != mike;
                            entity = 0;
                            if(!zulu) { _fun97271_ip = 142; continue _fun97271 }
 139:
                            entity = mike;
 142:
                            return entity;
                        }
                    };
                    zulu = verify.bind(report)(zulu);
                    entity['colors'] = zulu;
                    zulu = report.map;
                    mike = function(argFoo, argBar) {
                        golf = argBar;
                        zulu = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 4;
                        mike = mike[entity];
                        entity = undefined;
                        report = zulu.bind(entity)(mike);
                        tango = report.interpolate;
                        mike = _closure2_slot4;
                        entity = mike.get;
                        zulu = entity.bind(mike)();
                        mike = _closure3_slot0;
                        mike = mike[golf];
                        mike = mike.stop;
                        oscar = 100;
                        options = mike / oscar;
                        mike = new Array(2);
                        mike[0] = options;
                        entity = _closure3_slot1;
                        entity = entity[golf];
                        entity = entity.stop;
                        entity = entity / oscar;
                        mike[1] = entity;
                        entity = [0, 1];
                        entity = tango.bind(report)(zulu, entity, mike);
                        return entity;
                    };
                    mike = zulu.bind(report)(mike);
                    entity['locations'] = mike;
                    mike = {};
                    report = 2;
                    verify = options / report;
                    zulu = oscar[golf];
                    zulu = verify + zulu;
                    zulu = zulu / options;
                    mike['x'] = zulu;
                    offset = tango / report;
                    zulu = 1;
                    verify = oscar[zulu];
                    verify = offset - verify;
                    verify = verify / tango;
                    mike['y'] = verify;
                    entity['startPoint'] = mike;
                    mike = {};
                    verify = options / report;
                    golf = oscar[golf];
                    golf = verify - golf;
                    golf = golf / options;
                    mike['x'] = golf;
                    report = tango / report;
                    zulu = oscar[zulu];
                    zulu = report + zulu;
                    zulu = zulu / tango;
                    mike['y'] = zulu;
                    entity['endPoint'] = mike;
                    return entity;
 349:
                    entity = _closure1_slot8;
                    return entity;
                }
            };
            oscar = {};
            oscar['gradientSize'] = foxtrot;
            foxtrot = _closure1_slot8;
            oscar['animatedLinearGradientLoadingProps'] = foxtrot;
            oscar['themeState'] = romeo;
            romeo = offset[options];
            romeo = verify.bind(tango)(romeo);
            romeo = romeo.interpolate;
            oscar['interpolate'] = romeo;
            oscar['tweener'] = yankee;
            romeo = _closure1_slot1;
            yankee = 9;
            yankee = offset[yankee];
            yankee = romeo.bind(tango)(yankee);
            oscar['getGradientStartPoint'] = yankee;
            yankee = offset[options];
            yankee = verify.bind(tango)(yankee);
            yankee = yankee.processColor;
            oscar['processColor'] = yankee;
            options = offset[options];
            options = verify.bind(tango)(options);
            options = options.interpolateColor;
            oscar['interpolateColor'] = options;
            entity['__closure'] = oscar;
            oscar = 5151435414824.0;
            entity['__workletHash'] = oscar;
            oscar = _closure1_slot9;
            entity['__initData'] = oscar;
            oscar = mike.bind(zulu)(entity);
            zulu = _closure1_slot6;
            mike = _closure1_slot7;
            entity = {};
            options = _closure1_slot4;
            options = options.absoluteFill;
            entity['style'] = options;
            entity['onLayout'] = golf;
            backup = _closure1_slot8;
            kilo = entity;
            report = copyDataProperties(kilo, backup);
            report = 'animatedProps';
            entity[report] = oscar;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        mike = tango.bind(golf)(mike);
        tango = 10;
        tango = oscar[tango];
        oscar = report.bind(entity)(tango);
        report = oscar.fileFinishedImporting;
        tango = 'modules/main_tabs_v2/native/settings/screens/appearance/components/SettingsAppearanceGradientBackground.tsx';
        tango = report.bind(oscar)(tango);
        zulu['default'] = mike;
        return entity;
    }
})();