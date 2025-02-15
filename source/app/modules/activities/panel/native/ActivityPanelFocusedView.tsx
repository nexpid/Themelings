// app/modules/activities/panel/native/ActivityPanelFocusedView.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    romeo = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = romeo;
    var _closure1_slot2 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    golf = tango.bind(entity)(golf);
    var _closure1_slot3 = golf;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    foxtrot = tango.StyleSheet;
    tango = 2;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ActivityLayoutMode;
    var _closure1_slot7 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.ACTIVITY_LAYOUT_PHYSICS_GESTURE;
    var _closure1_slot8 = options;
    tango = tango.ACTIVITY_LAYOUT_PHYSICS_DEFAULT;
    var _closure1_slot9 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.DEFAULT_PORTRAIT_SAFE_AREAS_CONFIG;
    var _closure1_slot10 = options;
    options = tango.DEFAULT_PORTRAIT_LETTERBOX_CONFIG;
    var _closure1_slot11 = options;
    tango = tango.DEFAULT_LANDSCAPE_PILLERBOX_CONFIG;
    var _closure1_slot12 = tango;
    tango = 8;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ThemeTypes;
    var _closure1_slot13 = tango;
    tango = 9;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.IS_IOS;
    var _closure1_slot14 = tango;
    tango = 10;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.jsx;
    var _closure1_slot15 = options;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot16 = tango;
    tango = {};
    options = 300;
    tango['duration'] = options;
    var _closure1_slot17 = tango;
    tango = 11;
    tango = oscar[tango];
    verify = report.bind(entity)(tango);
    options = verify.createStyles;
    tango = {};
    offset = {'position': 'absolute', 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center', 'overflow': 'hidden'};
    yankee = 12;
    backup = oscar[yankee];
    backup = romeo.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BG_BASE_PRIMARY;
    offset['backgroundColor'] = backup;
    tango['wrapper'] = offset;
    offset = {};
    sizing = foxtrot.absoluteFillObject;
    output = offset;
    foxtrot = copyDataProperties(output, sizing);
    yankee = oscar[yankee];
    yankee = romeo.bind(entity)(yankee);
    yankee = yankee.colors;
    romeo = yankee.BLACK;
    yankee = 'backgroundColor';
    offset[yankee] = romeo;
    tango['shade'] = offset;
    tango = options.bind(verify)(tango);
    var _closure1_slot18 = tango;
    tango = {};
    options = "function ActivityPanelFocusedViewTsx1(){const{wrapperDimensions,lg,IS_IOS,animatedKeyboard,windowDimensions,safeArea,shown,wrapperOffset,transitionState,TransitionStates,runOnJS,transitionCleanUp,reduceMotion,withTiming,REDUCED_MOTION_TIMING,withSpring,ACTIVITY_LAYOUT_PHYSICS_GESTURE,ACTIVITY_LAYOUT_PHYSICS_DEFAULT}=this.__closure;const topBorderRadius=!wrapperDimensions.isWindowLandscape?lg:0;const keyboardHeight=IS_IOS?animatedKeyboard.get():0;const width=windowDimensions.width;const height=windowDimensions.height-keyboardHeight-(!wrapperDimensions.isWindowLandscape?safeArea.top:0);const y=shown.get()?wrapperOffset.get().y:windowDimensions.height;const transitionComplete=function(finished=false){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(transitionCleanUp)();}};const targetOpacity=reduceMotion&&shown.get()?1-wrapperOffset.get().y/windowDimensions.height:0;return{opacity:reduceMotion?withTiming(targetOpacity,REDUCED_MOTION_TIMING,shown.get()&&wrapperOffset.get().gestureActive?'animate-never':'animate-always',transitionComplete):1,transform:[{translateY:!reduceMotion?withSpring(y,wrapperOffset.get().gestureActive&&transitionState!==TransitionStates.YEETED?ACTIVITY_LAYOUT_PHYSICS_GESTURE:ACTIVITY_LAYOUT_PHYSICS_DEFAULT,'animate-always',transitionComplete):0}],top:!wrapperDimensions.isWindowLandscape?safeArea.top:0,width:width,height:height,borderTopStartRadius:topBorderRadius,borderTopEndRadius:topBorderRadius};}";
    tango['code'] = options;
    var _closure1_slot19 = tango;
    tango = {};
    options = 'function ActivityPanelFocusedViewTsx2(finished=false){const{transitionState,TransitionStates,runOnJS,transitionCleanUp}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(transitionCleanUp)();}}';
    tango['code'] = options;
    var _closure1_slot20 = tango;
    tango = {};
    options = 'function ActivityPanelFocusedViewTsx3(){const{wrapperOffset,shown,windowDimensions,withSpring,ACTIVITY_LAYOUT_PHYSICS_DEFAULT}=this.__closure;const opacity=function(){if(!wrapperOffset.get().gestureActive){return shown.get()?1:0;}return 1-wrapperOffset.get().y/windowDimensions.height;}();return{opacity:withSpring(opacity,ACTIVITY_LAYOUT_PHYSICS_DEFAULT)};}';
    tango['code'] = options;
    var _closure1_slot21 = tango;
    tango = {};
    options = 'function ActivityPanelFocusedViewTsx4(){const{IS_IOS,animatedKeyboard,wrapperDimensions}=this.__closure;const keyboardHeight=IS_IOS?animatedKeyboard.get():0;return{width:wrapperDimensions.width,height:wrapperDimensions.height-keyboardHeight};}';
    tango['code'] = options;
    var _closure1_slot22 = tango;
    tango = golf.memo;
    mike = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            control = mike.transitionState;
            var _closure2_slot0 = control;
            source = mike.transitionCleanUp;
            var _closure2_slot1 = source;
            romeo = undefined;
            var _closure2_slot16 = romeo;
            var _closure2_slot17 = romeo;
            var _closure2_slot18 = romeo;
            var _closure2_slot19 = romeo;
            verify = _closure1_slot0;
            backup = _closure1_slot2;
            zulu = 13;
            tango = backup[zulu];
            golf = verify.bind(romeo)(tango);
            oscar = golf.useStateFromStores;
            tango = _closure1_slot4;
            report = new Array(1);
            report[0] = tango;
            tango = function() {
                entity = _closure1_slot4;
                entity = entity.useReducedMotion;
                return entity;
            };
            update = oscar.bind(golf)(report, tango);
            var _closure2_slot2 = update;
            tango = _closure1_slot18;
            oscar = tango.bind(romeo)();
            var _closure2_slot3 = oscar;
            golf = _closure1_slot1;
            tango = 14;
            tango = backup[tango];
            tango = golf.bind(romeo)(tango);
            vacuum = tango.bind(romeo)();
            var _closure2_slot4 = vacuum;
            tango = 15;
            tango = backup[tango];
            tango = golf.bind(romeo)(tango);
            offset = tango.bind(romeo)();
            var _closure2_slot5 = offset;
            echo = _closure1_slot3;
            report = echo.useContext;
            tango = 16;
            tango = backup[tango];
            tango = golf.bind(romeo)(tango);
            tango = report.bind(echo)(tango);
            foxtrot = tango.wrapperDimensions;
            var _closure2_slot6 = foxtrot;
            config = tango.wrapperOffset;
            var _closure2_slot7 = config;
            tango = 17;
            tango = backup[tango];
            report = verify.bind(romeo)(tango);
            tango = report.useLockedWebView;
            tango = tango.bind(report)(control);
            sequence = tango.shown;
            var _closure2_slot8 = sequence;
            tango = tango.renderWebView;
            report = 18;
            report = backup[report];
            report = golf.bind(romeo)(report);
            kilo = report.bind(romeo)();
            var _closure2_slot9 = kilo;
            zulu = backup[zulu];
            sizing = verify.bind(romeo)(zulu);
            yankee = sizing.useStateFromStoresObject;
            zulu = _closure1_slot6;
            options = new Array(2);
            options[0] = zulu;
            zulu = _closure1_slot5;
            options[1] = zulu;
            report = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = _closure1_slot6;
                    entity = mike.getConnectedActivityChannelId;
                    oscar = entity.bind(mike)();
                    zulu = null;
                    entity = zulu != oscar;
                    mike = undefined;
                    if(!entity) { _fun00004_ip = 55; continue _fun00003 }
 28:
                    report = _closure1_slot6;
                    entity = report.getSelfEmbeddedActivityForChannel;
                    entity = entity.bind(report)(oscar);
                    report = zulu != entity;
                    mike = undefined;
                    if(!report) { _fun00004_ip = 55; continue _fun00003 }
 52:
                    mike = entity;
 55:
                    entity = {};
                    report = _closure1_slot5;
                    tango = report.getChannel;
                    tango = tango.bind(report)(oscar);
                    entity['channel'] = tango;
                    mike = zulu != mike;
                    entity['hasActivity'] = mike;
                    return entity;
                }
            };
            zulu = new Array(0);
            zulu = yankee.bind(sizing)(options, report, zulu);
            yankee = zulu.channel;
            var _closure2_slot10 = yankee;
            zulu = zulu.hasActivity;
            report = 12;
            report = backup[report];
            report = golf.bind(romeo)(report);
            report = report.radii;
            sizing = report.lg;
            var _closure2_slot11 = sizing;
            options = 19;
            report = backup[options];
            output = verify.bind(romeo)(report);
            golf = output.useAnimatedStyle;
            report = function() { // Original name: u
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = _closure2_slot6;
                    entity = entity.isWindowLandscape;
                    mike = 0;
                    if(entity) { _fun00006_ip = 22; continue _fun00005 }
 18:
                    mike = _closure2_slot11;
 22:
                    entity = _closure1_slot14;
                    zulu = 0;
                    if(!entity) { _fun00006_ip = 47; continue _fun00005 }
 34:
                    tango = _closure2_slot9;
                    entity = tango.get;
                    zulu = entity.bind(tango)();
 47:
                    entity = _closure2_slot4;
                    tango = entity.width;
                    entity = entity.height;
                    zulu = entity - zulu;
                    entity = _closure2_slot6;
                    golf = entity.isWindowLandscape;
                    entity = 0;
                    if(golf) { _fun00006_ip = 89; continue _fun00005 }
 80:
                    golf = _closure2_slot5;
                    entity = golf.top;
 89:
                    zulu = zulu - entity;
                    golf = _closure2_slot8;
                    entity = golf.get;
                    entity = entity.bind(golf)();
                    if(entity) { _fun00006_ip = 120; continue _fun00005 }
 109:
                    entity = _closure2_slot4;
                    backup = entity.height;
                    _fun00006_ip = 138; continue _fun00005;
 120:
                    golf = _closure2_slot7;
                    entity = golf.get;
                    entity = entity.bind(golf)();
                    backup = entity.y;
 138:
                    entity = function() {
                        entity = function() { // Original name: ActivityPanelFocusedViewTsx2
                            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                                mike = arguments[0];
                                entity = undefined;
                                if(!(mike === entity)) { _fun00008_ip = 11; continue _fun00007 }
 9:
                                mike = false;
 11:
                                if(!mike) { _fun00008_ip = 60; continue _fun00007 }
 14:
                                tango = _closure2_slot0;
                                report = _closure1_slot0;
                                oscar = _closure1_slot2;
                                zulu = 20;
                                zulu = oscar[zulu];
                                zulu = report.bind(entity)(zulu);
                                zulu = zulu.TransitionStates;
                                zulu = zulu.YEETED;
                                mike = tango === zulu;
 60:
                                if(!mike) { _fun00008_ip = 107; continue _fun00007 }
 63:
                                zulu = _closure1_slot0;
                                tango = _closure1_slot2;
                                mike = 19;
                                mike = tango[mike];
                                tango = zulu.bind(entity)(mike);
                                zulu = tango.runOnJS;
                                mike = _closure2_slot1;
                                mike = zulu.bind(tango)(mike);
                                mike = mike.bind(entity)();
 107:
                                return entity;
                            }
                        };
                        zulu = {};
                        mike = _closure2_slot0;
                        zulu['transitionState'] = mike;
                        golf = _closure1_slot0;
                        options = _closure1_slot2;
                        report = 20;
                        report = options[report];
                        oscar = undefined;
                        report = golf.bind(oscar)(report);
                        report = report.TransitionStates;
                        zulu['TransitionStates'] = report;
                        report = 19;
                        report = options[report];
                        report = golf.bind(oscar)(report);
                        report = report.runOnJS;
                        zulu['runOnJS'] = report;
                        tango = _closure2_slot1;
                        zulu['transitionCleanUp'] = tango;
                        entity['__closure'] = zulu;
                        zulu = 2890456430056.0;
                        entity['__workletHash'] = zulu;
                        mike = _closure1_slot20;
                        entity['__initData'] = mike;
                        return entity;
                    };
                    output = undefined;
                    foxtrot = entity.bind(output)();
                    entity = _closure2_slot2;
                    kilo = 0;
                    if(!entity) { _fun00006_ip = 218; continue _fun00005 }
 162:
                    golf = _closure2_slot8;
                    entity = golf.get;
                    entity = entity.bind(golf)();
                    kilo = 0;
                    if(!entity) { _fun00006_ip = 218; continue _fun00005 }
 180:
                    golf = _closure2_slot7;
                    entity = golf.get;
                    entity = entity.bind(golf)();
                    golf = entity.y;
                    entity = _closure2_slot4;
                    entity = entity.height;
                    golf = golf / entity;
                    entity = 1;
                    kilo = entity - golf;
 218:
                    entity = {};
                    options = _closure2_slot2;
                    golf = 1;
                    if(!options) { _fun00006_ip = 334; continue _fun00005 }
 230:
                    offset = _closure1_slot0;
                    yankee = _closure1_slot2;
                    options = 21;
                    options = yankee[options];
                    romeo = offset.bind(output)(options);
                    yankee = romeo.withTiming;
                    offset = _closure1_slot17;
                    sizing = _closure2_slot8;
                    options = sizing.get;
                    sizing = options.bind(sizing)();
                    result = 'animate-always';
                    options = result;
                    if(!sizing) { _fun00006_ip = 315; continue _fun00005 }
 284:
                    echo = _closure2_slot7;
                    sizing = echo.get;
                    sizing = sizing.bind(echo)();
                    sizing = sizing.gestureActive;
                    options = result;
                    if(!sizing) { _fun00006_ip = 315; continue _fun00005 }
 309:
                    options = 'animate-never';
 315:
                    sequence = romeo;
                    vacuum = kilo;
                    control = offset;
                    source = options;
                    update = foxtrot;
                    golf = sequence[yankee](vacuum, control, source, update, echo);
 334:
                    entity['opacity'] = golf;
                    options = {};
                    offset = _closure2_slot2;
                    golf = 0;
                    if(offset) { _fun00006_ip = 468; continue _fun00005 }
 349:
                    yankee = _closure1_slot0;
                    romeo = _closure1_slot2;
                    offset = 22;
                    offset = romeo[offset];
                    romeo = yankee.bind(output)(offset);
                    yankee = romeo.withSpring;
                    kilo = _closure2_slot7;
                    offset = kilo.get;
                    offset = offset.bind(kilo)();
                    offset = offset.gestureActive;
                    if(!offset) { _fun00006_ip = 436; continue _fun00005 }
 396:
                    kilo = _closure2_slot0;
                    sizing = _closure1_slot0;
                    result = _closure1_slot2;
                    offset = 20;
                    offset = result[offset];
                    offset = sizing.bind(output)(offset);
                    offset = offset.TransitionStates;
                    offset = offset.YEETED;
                    if(!(kilo === offset)) { _fun00006_ip = 442; continue _fun00005 }
 436:
                    offset = _closure1_slot9;
                    _fun00006_ip = 446; continue _fun00005;
 442:
                    offset = _closure1_slot8;
 446:
                    source = 'animate-always';
                    sequence = romeo;
                    vacuum = backup;
                    control = offset;
                    update = foxtrot;
                    golf = sequence[yankee](vacuum, control, source, update, echo);
 468:
                    options['translateY'] = golf;
                    golf = new Array(1);
                    golf[0] = options;
                    entity['transform'] = golf;
                    golf = _closure2_slot6;
                    golf = golf.isWindowLandscape;
                    report = 0;
                    if(golf) { _fun00006_ip = 509; continue _fun00005 }
 500:
                    oscar = _closure2_slot5;
                    report = oscar.top;
 509:
                    entity['top'] = report;
                    entity['width'] = tango;
                    entity['height'] = zulu;
                    entity['borderTopStartRadius'] = mike;
                    entity['borderTopEndRadius'] = mike;
                    return entity;
                }
            };
            result = {};
            result['wrapperDimensions'] = foxtrot;
            result['lg'] = sizing;
            sizing = _closure1_slot14;
            result['IS_IOS'] = sizing;
            result['animatedKeyboard'] = kilo;
            result['windowDimensions'] = vacuum;
            result['safeArea'] = offset;
            result['shown'] = sequence;
            result['wrapperOffset'] = config;
            result['transitionState'] = control;
            control = 20;
            control = backup[control];
            control = verify.bind(romeo)(control);
            control = control.TransitionStates;
            result['TransitionStates'] = control;
            control = backup[options];
            control = verify.bind(romeo)(control);
            control = control.runOnJS;
            result['runOnJS'] = control;
            result['transitionCleanUp'] = source;
            result['reduceMotion'] = update;
            update = 21;
            update = backup[update];
            update = verify.bind(romeo)(update);
            update = update.withTiming;
            result['withTiming'] = update;
            update = _closure1_slot17;
            result['REDUCED_MOTION_TIMING'] = update;
            control = 22;
            update = backup[control];
            update = verify.bind(romeo)(update);
            update = update.withSpring;
            result['withSpring'] = update;
            update = _closure1_slot8;
            result['ACTIVITY_LAYOUT_PHYSICS_GESTURE'] = update;
            source = _closure1_slot9;
            result['ACTIVITY_LAYOUT_PHYSICS_DEFAULT'] = source;
            report['__closure'] = result;
            result = 15493395791982.0;
            report['__workletHash'] = result;
            result = _closure1_slot19;
            report['__initData'] = result;
            report = golf.bind(output)(report);
            var _closure2_slot12 = report;
            golf = backup[options];
            result = verify.bind(romeo)(golf);
            output = result.useAnimatedStyle;
            golf = function() { // Original name: U
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zulu = _closure2_slot7;
                    mike = zulu.get;
                    mike = mike.bind(zulu)();
                    mike = mike.gestureActive;
                    if(mike) { _fun00010_ip = 48; continue _fun00009 }
 25:
                    zulu = _closure2_slot8;
                    mike = zulu.get;
                    mike = mike.bind(zulu)();
                    report = 0;
                    if(!mike) { _fun00010_ip = 46; continue _fun00009 }
 43:
                    report = 1;
 46:
                    _fun00010_ip = 86; continue _fun00009;
 48:
                    zulu = _closure2_slot7;
                    mike = zulu.get;
                    mike = mike.bind(zulu)();
                    mike = mike.y;
                    entity = _closure2_slot4;
                    entity = entity.height;
                    mike = mike / entity;
                    entity = 1;
                    report = entity - mike;
 86:
                    entity = {};
                    oscar = _closure1_slot0;
                    tango = _closure1_slot2;
                    zulu = 22;
                    tango = tango[zulu];
                    zulu = undefined;
                    tango = oscar.bind(zulu)(tango);
                    zulu = tango.withSpring;
                    mike = _closure1_slot9;
                    mike = zulu.bind(tango)(report, mike);
                    entity['opacity'] = mike;
                    return entity;
                }
            };
            update = {};
            update['wrapperOffset'] = config;
            update['shown'] = sequence;
            update['windowDimensions'] = vacuum;
            control = backup[control];
            control = verify.bind(romeo)(control);
            control = control.withSpring;
            update['withSpring'] = control;
            update['ACTIVITY_LAYOUT_PHYSICS_DEFAULT'] = source;
            golf['__closure'] = update;
            update = 8351375063373.0;
            golf['__workletHash'] = update;
            update = _closure1_slot21;
            golf['__initData'] = update;
            golf = output.bind(result)(golf);
            var _closure2_slot13 = golf;
            result = echo.useMemo;
            output = new Array(2);
            output[0] = report;
            report = oscar.wrapper;
            output[1] = report;
            report = function() {
                entity = _closure2_slot3;
                zulu = entity.wrapper;
                entity = new Array(2);
                entity[0] = zulu;
                mike = _closure2_slot12;
                entity[1] = mike;
                return entity;
            };
            report = result.bind(echo)(report, output);
            var _closure2_slot14 = report;
            options = backup[options];
            romeo = verify.bind(romeo)(options);
            verify = romeo.useAnimatedStyle;
            options = function() { // Original name: v
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    entity = _closure1_slot14;
                    zulu = 0;
                    if(!entity) { _fun00012_ip = 28; continue _fun00011 }
 12:
                    mike = _closure2_slot9;
                    entity = mike.get;
                    zulu = entity.bind(mike)();
 28:
                    entity = {};
                    mike = _closure2_slot6;
                    tango = mike.width;
                    entity['width'] = tango;
                    mike = mike.height;
                    mike = mike - zulu;
                    entity['height'] = mike;
                    return entity;
                }
            };
            backup = {};
            backup['IS_IOS'] = sizing;
            backup['animatedKeyboard'] = kilo;
            backup['wrapperDimensions'] = foxtrot;
            options['__closure'] = backup;
            backup = 10611243164807.0;
            options['__workletHash'] = backup;
            backup = _closure1_slot22;
            options['__initData'] = backup;
            romeo = verify.bind(romeo)(options);
            var _closure2_slot15 = romeo;
            options = foxtrot.isLandscape;
            if(!options) { _fun00002_ip = 835; continue _fun00001 }
 826:
            verify = foxtrot.isWindowLandscape;
            options = !verify;
 835:
            verify = foxtrot.isLandscape;
            verify = !verify;
            if(!verify) { _fun00002_ip = 853; continue _fun00001 }
 847:
            verify = foxtrot.isWindowLandscape;
 853:
            _closure2_slot16 = verify;
            if(options) { _fun00002_ip = 866; continue _fun00001 }
 860:
            options = _closure1_slot10;
            _fun00002_ip = 870; continue _fun00001;
 866:
            options = _closure1_slot11;
 870:
            _closure2_slot17 = options;
            backup = _closure1_slot3;
            foxtrot = backup.useMemo;
            kilo = offset.right;
            offset = new Array(2);
            offset[0] = kilo;
            offset[1] = verify;
            verify = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    entity = _closure2_slot16;
                    if(entity) { _fun00014_ip = 63; continue _fun00013 }
 10:
                    entity = {};
                    mike = {};
                    tango = false;
                    mike['disable'] = tango;
                    tango = global;
                    oscar = tango.Math;
                    report = oscar.max;
                    zulu = _closure2_slot5;
                    tango = zulu.right;
                    zulu = 64;
                    zulu = report.bind(oscar)(zulu, tango);
                    mike['override'] = zulu;
                    entity['right'] = mike;
                    _fun00014_ip = 70; continue _fun00013;
 63:
                    entity = _closure1_slot12;
 70:
                    return entity;
                }
            };
            verify = foxtrot.bind(backup)(verify, offset);
            _closure2_slot18 = verify;
            offset = !tango;
            if(offset) { _fun00002_ip = 926; continue _fun00001 }
 923:
            offset = !zulu;
 926:
            if(offset) { _fun00002_ip = 935; continue _fun00001 }
 929:
            zulu = null;
            offset = zulu == yankee;
 935:
            _closure2_slot19 = offset;
            tango = _closure1_slot3;
            zulu = tango.useMemo;
            mike = new Array(8);
            mike[0] = romeo;
            mike[1] = yankee;
            mike[2] = offset;
            mike[3] = verify;
            mike[4] = options;
            mike[5] = golf;
            oscar = oscar.shade;
            mike[6] = oscar;
            mike[7] = report;
            entity = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    tango = _closure1_slot16;
                    mike = _closure1_slot0;
                    romeo = _closure1_slot2;
                    entity = 23;
                    entity = romeo[entity];
                    zulu = undefined;
                    entity = mike.bind(zulu)(entity);
                    mike = entity.ThemeContextProvider;
                    entity = {};
                    report = _closure1_slot13;
                    report = report.DARK;
                    entity['theme'] = report;
                    yankee = _closure1_slot15;
                    offset = _closure1_slot1;
                    options = 19;
                    report = romeo[options];
                    report = offset.bind(zulu)(report);
                    oscar = report.View;
                    report = {};
                    golf = _closure2_slot3;
                    foxtrot = golf.shade;
                    golf = new Array(2);
                    golf[0] = foxtrot;
                    foxtrot = _closure2_slot13;
                    golf[1] = foxtrot;
                    report['style'] = golf;
                    golf = 'none';
                    report['pointerEvents'] = golf;
                    oscar = yankee.bind(zulu)(oscar, report);
                    report = new Array(2);
                    report[0] = oscar;
                    oscar = romeo[options];
                    oscar = offset.bind(zulu)(oscar);
                    golf = oscar.View;
                    oscar = {};
                    foxtrot = _closure2_slot14;
                    oscar['style'] = foxtrot;
                    options = romeo[options];
                    options = offset.bind(zulu)(options);
                    offset = options.View;
                    options = {};
                    romeo = _closure2_slot15;
                    options['style'] = romeo;
                    foxtrot = _closure2_slot19;
                    romeo = null;
                    if(foxtrot) { _fun00016_ip = 265; continue _fun00015 }
 192:
                    kilo = _closure1_slot15;
                    backup = _closure1_slot1;
                    output = _closure1_slot2;
                    foxtrot = 24;
                    foxtrot = output[foxtrot];
                    backup = backup.bind(zulu)(foxtrot);
                    foxtrot = {};
                    output = _closure2_slot10;
                    foxtrot['channel'] = output;
                    output = _closure1_slot7;
                    output = output.FOCUSED;
                    foxtrot['layoutMode'] = output;
                    output = _closure2_slot17;
                    foxtrot['portraitSafeAreasConfig'] = output;
                    sizing = _closure2_slot18;
                    foxtrot['landscapeSafeAreasConfig'] = sizing;
                    romeo = kilo.bind(zulu)(backup, foxtrot);
 265:
                    options['children'] = romeo;
                    offset = yankee.bind(zulu)(offset, options);
                    options = new Array(2);
                    options[0] = offset;
                    yankee = _closure1_slot15;
                    offset = _closure1_slot1;
                    romeo = _closure1_slot2;
                    verify = 25;
                    verify = romeo[verify];
                    offset = offset.bind(zulu)(verify);
                    verify = {};
                    verify = yankee.bind(zulu)(offset, verify);
                    options[1] = verify;
                    oscar['children'] = options;
                    oscar = tango.bind(zulu)(golf, oscar);
                    report[1] = oscar;
                    entity['children'] = report;
                    entity = tango.bind(zulu)(mike, entity);
                    return entity;
                }
            };
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        }
    };
    mike = tango.bind(golf)(mike);
    tango = 26;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/activities/panel/native/ActivityPanelFocusedView.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();