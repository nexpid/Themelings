// app/modules/launchpad/native/LaunchPadPullTab.tsx
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
    yankee = 1;
    tango = oscar[yankee];
    tango = report.bind(entity)(tango);
    options = tango.Pressable;
    var _closure1_slot3 = options;
    foxtrot = tango.StyleSheet;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.LAUNCH_PAD_MARGIN;
    var _closure1_slot4 = options;
    sizing = tango.LAUNCH_PAD_PULL_TAB_BORDER_RADIUS;
    var _closure1_slot5 = sizing;
    kilo = tango.LAUNCH_PAD_PULL_TAB_HEIGHT;
    var _closure1_slot6 = kilo;
    options = tango.LAUNCH_PAD_PULL_TAB_HIT_SLOP;
    var _closure1_slot7 = options;
    options = tango.LAUNCH_PAD_PULL_TAB_MINIMIZED_OFFSET;
    var _closure1_slot8 = options;
    options = tango.LAUNCH_PAD_PULL_TAB_SCALE_FACTOR;
    var _closure1_slot9 = options;
    options = tango.LAUNCH_PAD_PULL_TAB_SCALE_OFFSET;
    var _closure1_slot10 = options;
    backup = tango.LAUNCH_PAD_PULL_TAB_WIDTH;
    tango = tango.LAUNCH_PAD_SPRING_CONFIG;
    var _closure1_slot11 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.CHAT_INPUT_HEIGHT;
    var _closure1_slot12 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot13 = tango;
    tango = 5;
    tango = oscar[tango];
    verify = report.bind(entity)(tango);
    options = verify.createStyles;
    tango = {};
    offset = {'position': 'absolute', 'right': 0};
    offset['width'] = backup;
    offset['height'] = kilo;
    offset['borderTopLeftRadius'] = sizing;
    offset['borderBottomLeftRadius'] = sizing;
    offset['borderWidth'] = yankee;
    offset['borderTopWidth'] = yankee;
    yankee = 'rgba(0, 0, 0, 0.08)';
    offset['borderColor'] = yankee;
    yankee = 6;
    sizing = oscar[yankee];
    sizing = romeo.bind(entity)(sizing);
    sizing = sizing.shadows;
    echo = sizing.SHADOW_MOBILE_NAVIGATOR_X;
    update = offset;
    sizing = copyDataProperties(update, echo);
    tango['pullTab'] = offset;
    offset = {};
    offset['width'] = backup;
    offset['height'] = kilo;
    sizing = 'center';
    offset['justifyContent'] = sizing;
    offset['alignItems'] = sizing;
    tango['pullTabButton'] = offset;
    offset = {};
    echo = foxtrot.absoluteFillObject;
    update = offset;
    kilo = copyDataProperties(update, echo);
    kilo = 'alignItems';
    offset[kilo] = sizing;
    kilo = 'justifyContent';
    offset[kilo] = sizing;
    tango['iconCrossfadeWrapper'] = offset;
    offset = {};
    kilo = oscar[yankee];
    kilo = romeo.bind(entity)(kilo);
    kilo = kilo.colors;
    kilo = kilo.BACKGROUND_PRIMARY;
    offset['color'] = kilo;
    tango['launchPad'] = offset;
    offset = {};
    echo = foxtrot.absoluteFillObject;
    update = offset;
    kilo = copyDataProperties(update, echo);
    sizing = '200%';
    kilo = 'width';
    offset[kilo] = sizing;
    sizing = oscar[yankee];
    sizing = romeo.bind(entity)(sizing);
    sizing = sizing.colors;
    output = sizing.BG_BACKDROP;
    sizing = 'backgroundColor';
    offset[sizing] = output;
    tango['nuxBackdrop'] = offset;
    offset = {};
    echo = foxtrot.absoluteFillObject;
    update = offset;
    sizing = copyDataProperties(update, echo);
    tango['nuxPressable'] = offset;
    offset = {};
    echo = foxtrot.absoluteFillObject;
    update = offset;
    foxtrot = copyDataProperties(update, echo);
    foxtrot = '100%';
    offset[kilo] = foxtrot;
    foxtrot = oscar[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.spacing;
    foxtrot = foxtrot.PX_16;
    backup = backup + foxtrot;
    foxtrot = 'paddingRight';
    offset[foxtrot] = backup;
    yankee = oscar[yankee];
    yankee = romeo.bind(entity)(yankee);
    yankee = yankee.spacing;
    romeo = yankee.PX_16;
    yankee = 'paddingLeft';
    offset[yankee] = romeo;
    tango['nuxCopy'] = offset;
    tango = options.bind(verify)(tango);
    var _closure1_slot14 = tango;
    tango = {};
    options = 'function LaunchPadPullTabTsx1(){const{keyboardHeight}=this.__closure;return keyboardHeight.get();}';
    tango['code'] = options;
    var _closure1_slot15 = tango;
    tango = {};
    options = 'function LaunchPadPullTabTsx2(keyboardHeight,keyboardHeightPrev){const{launchPadSharedState,updaters,keyboardHeightOpened,launchPadPullTabState,CHAT_INPUT_HEIGHT,LAUNCH_PAD_MARGIN,getWindowDimensionsWorklet,LAUNCH_PAD_PULL_TAB_HEIGHT,LAUNCH_PAD_PULL_TAB_SCALE_OFFSET}=this.__closure;if(launchPadSharedState.get()!==0){updaters.setLaunchPadPullTabMinimized(false);return;}if(keyboardHeightPrev==null||keyboardHeight===keyboardHeightPrev){return;}if(keyboardHeight<keyboardHeightPrev){var _keyboardHeightOpened;if(keyboardHeight===0){updaters.setLaunchPadPullTabMinimized(false);}if(keyboardHeightOpened.get()==null){keyboardHeightOpened.set(keyboardHeightPrev);}const keyboardClosePercent=1-keyboardHeight/((_keyboardHeightOpened=keyboardHeightOpened.get())!==null&&_keyboardHeightOpened!==void 0?_keyboardHeightOpened:keyboardHeightPrev);const keyboardOffsetRetractionAmount=launchPadPullTabState.get().offset*keyboardClosePercent;updaters.setLaunchPadPullTabPosition(launchPadPullTabState.get().position+keyboardOffsetRetractionAmount,launchPadPullTabState.get().offset-keyboardOffsetRetractionAmount);}else{updaters.setLaunchPadPullTabMinimized(true);if(keyboardHeightOpened.get()!=null){keyboardHeightOpened.set(undefined);}const keyboardWithChatInput=keyboardHeight+CHAT_INPUT_HEIGHT+LAUNCH_PAD_MARGIN*2;const spaceUnderPullTab=getWindowDimensionsWorklet().height-(launchPadPullTabState.get().position+LAUNCH_PAD_PULL_TAB_HEIGHT+LAUNCH_PAD_PULL_TAB_SCALE_OFFSET);const offset=spaceUnderPullTab>keyboardWithChatInput?0:keyboardWithChatInput-spaceUnderPullTab;if(offset>0){updaters.setLaunchPadPullTabPosition(launchPadPullTabState.get().position-offset,launchPadPullTabState.get().offset+offset);}}}';
    tango['code'] = options;
    var _closure1_slot16 = tango;
    tango = {};
    options = 'function LaunchPadPullTabTsx3(){const{isMinimized,gestureState,LAUNCH_PAD_PULL_TAB_MINIMIZED_OFFSET,interpolate,launchPadSharedState,windowDimensions,launchPadPullTabState,LAUNCH_PAD_PULL_TAB_BORDER_RADIUS,interpolateColor,LAUNCH_PAD_MARGIN,backgroundColorTabBar,backgroundColorLaunchPad,withSpring,LAUNCH_PAD_SPRING_CONFIG}=this.__closure;let translateX=isMinimized.get()&&!gestureState.get().active?LAUNCH_PAD_PULL_TAB_MINIMIZED_OFFSET:interpolate(launchPadSharedState.get(),[0,1],[0,-(windowDimensions.get().width-16)]);if(launchPadSharedState.get()>0.9){translateX=-windowDimensions.get().width;}else if(gestureState.get().active){if(gestureState.get().requiresPop){translateX+=gestureState.get().positionOffsetX*0.3;}else{translateX-=4;}}const translateY=launchPadPullTabState.get().position;const borderRadius=launchPadSharedState.get()<=0&&!gestureState.get().active?0:LAUNCH_PAD_PULL_TAB_BORDER_RADIUS;const backgroundColor=interpolateColor(launchPadSharedState.get()*windowDimensions.get().width,[0,LAUNCH_PAD_MARGIN],[backgroundColorTabBar,backgroundColorLaunchPad]);return{transform:[{translateX:withSpring(translateX,LAUNCH_PAD_SPRING_CONFIG)},{translateY:withSpring(translateY,LAUNCH_PAD_SPRING_CONFIG)},{scale:withSpring(launchPadPullTabState.get().scale,LAUNCH_PAD_SPRING_CONFIG)}],borderTopRightRadius:withSpring(borderRadius,LAUNCH_PAD_SPRING_CONFIG),borderBottomRightRadius:withSpring(borderRadius,LAUNCH_PAD_SPRING_CONFIG),backgroundColor:backgroundColor};}';
    tango['code'] = options;
    var _closure1_slot17 = tango;
    tango = golf.memo;
    mike = function(argFoo) { // Original name: LaunchPadPullTab
        entity = argFoo;
        foxtrot = entity.launchPadSharedState;
        var _closure2_slot0 = foxtrot;
        report = entity.launchPadPullTabState;
        var _closure2_slot1 = report;
        echo = entity.gestureState;
        var _closure2_slot2 = echo;
        mike = entity.updaters;
        var _closure2_slot3 = mike;
        entity = _closure1_slot14;
        tango = undefined;
        yankee = entity.bind(tango)();
        options = _closure1_slot0;
        verify = _closure1_slot2;
        entity = 10;
        entity = verify[entity];
        zulu = options.bind(tango)(entity);
        entity = zulu.useTabBarStyles;
        entity = entity.bind(zulu)();
        offset = _closure1_slot1;
        zulu = 9;
        zulu = verify[zulu];
        zulu = offset.bind(tango)(zulu);
        result = zulu.bind(tango)();
        var _closure2_slot4 = result;
        zulu = yankee.launchPad;
        sizing = zulu.color;
        var _closure2_slot5 = sizing;
        entity = entity.tabBar;
        output = entity.backgroundColor;
        var _closure2_slot6 = output;
        entity = 11;
        entity = verify[entity];
        zulu = offset.bind(tango)(entity);
        entity = {};
        entity['launchPadSharedState'] = foxtrot;
        entity['launchPadPullTabState'] = report;
        update = zulu.bind(tango)(entity);
        var _closure2_slot7 = update;
        entity = 8;
        zulu = verify[entity];
        backup = options.bind(tango)(zulu);
        oscar = backup.useAnimatedStyle;
        zulu = function() { // Original name: L
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                mike = _closure2_slot7;
                entity = mike.get;
                entity = entity.bind(mike)();
                if(!entity) { _fun00002_ip = 50; continue _fun00001 }
 19:
                mike = _closure2_slot2;
                entity = mike.get;
                entity = entity.bind(mike)();
                entity = entity.active;
                if(entity) { _fun00002_ip = 50; continue _fun00001 }
 41:
                zulu = _closure1_slot8;
                _fun00002_ip = 153; continue _fun00001;
 50:
                tango = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 8;
                mike = mike[entity];
                entity = undefined;
                oscar = tango.bind(entity)(mike);
                report = oscar.interpolate;
                mike = _closure2_slot0;
                entity = mike.get;
                tango = entity.bind(mike)();
                mike = _closure2_slot4;
                entity = mike.get;
                entity = entity.bind(mike)();
                mike = entity.width;
                entity = 16;
                entity = mike - entity;
                mike = [0];
                entity = -entity;
                mike[1] = entity;
                entity = [0, 1];
                zulu = report.bind(oscar)(tango, entity, mike);
 153:
                mike = _closure2_slot0;
                entity = mike.get;
                mike = entity.bind(mike)();
                entity = 0.9;
                if(!(!(mike > entity))) { _fun00002_ip = 278; continue _fun00001 }
 180:
                mike = _closure2_slot2;
                entity = mike.get;
                entity = entity.bind(mike)();
                entity = entity.active;
                foxtrot = zulu;
                if(!entity) { _fun00002_ip = 299; continue _fun00001 }
 205:
                mike = _closure2_slot2;
                entity = mike.get;
                entity = entity.bind(mike)();
                entity = entity.requiresPop;
                if(entity) { _fun00002_ip = 236; continue _fun00001 }
 227:
                entity = 4;
                entity = zulu - entity;
                _fun00002_ip = 273; continue _fun00001;
 236:
                tango = _closure2_slot2;
                mike = tango.get;
                mike = mike.bind(tango)();
                tango = mike.positionOffsetX;
                mike = 0.3;
                mike = mike * tango;
                entity = zulu + mike;
 273:
                foxtrot = entity;
                _fun00002_ip = 299; continue _fun00001;
 278:
                mike = _closure2_slot4;
                entity = mike.get;
                entity = entity.bind(mike)();
                entity = entity.width;
                foxtrot = -entity;
 299:
                mike = _closure2_slot1;
                entity = mike.get;
                entity = entity.bind(mike)();
                backup = entity.position;
                mike = _closure2_slot0;
                entity = mike.get;
                entity = entity.bind(mike)();
                oscar = 0;
                if(!(entity <= oscar)) { _fun00002_ip = 360; continue _fun00001 }
 336:
                mike = _closure2_slot2;
                entity = mike.get;
                entity = entity.bind(mike)();
                entity = entity.active;
                oscar = 0;
                if(!entity) { _fun00002_ip = 367; continue _fun00001 }
 360:
                oscar = _closure1_slot5;
 367:
                golf = _closure1_slot0;
                options = _closure1_slot2;
                entity = 8;
                entity = options[entity];
                tango = undefined;
                offset = golf.bind(tango)(entity);
                verify = offset.interpolateColor;
                mike = _closure2_slot0;
                entity = mike.get;
                mike = entity.bind(mike)();
                zulu = _closure2_slot4;
                entity = zulu.get;
                entity = entity.bind(zulu)();
                entity = entity.width;
                zulu = mike * entity;
                entity = _closure1_slot4;
                mike = [0];
                mike[1] = entity;
                romeo = _closure2_slot6;
                entity = new Array(2);
                entity[0] = romeo;
                romeo = _closure2_slot5;
                entity[1] = romeo;
                mike = verify.bind(offset)(zulu, mike, entity);
                entity = {};
                offset = {};
                zulu = 12;
                verify = options[zulu];
                romeo = golf.bind(tango)(verify);
                verify = romeo.withSpring;
                report = _closure1_slot11;
                verify = verify.bind(romeo)(foxtrot, report);
                offset['translateX'] = verify;
                verify = new Array(3);
                verify[0] = offset;
                offset = {};
                romeo = options[zulu];
                foxtrot = golf.bind(tango)(romeo);
                romeo = foxtrot.withSpring;
                romeo = romeo.bind(foxtrot)(backup, report);
                offset['translateY'] = romeo;
                verify[1] = offset;
                offset = {};
                romeo = options[zulu];
                foxtrot = golf.bind(tango)(romeo);
                romeo = foxtrot.withSpring;
                backup = _closure2_slot1;
                yankee = backup.get;
                yankee = yankee.bind(backup)();
                yankee = yankee.scale;
                yankee = romeo.bind(foxtrot)(yankee, report);
                offset['scale'] = yankee;
                verify[2] = offset;
                entity['transform'] = verify;
                verify = options[zulu];
                offset = golf.bind(tango)(verify);
                verify = offset.withSpring;
                verify = verify.bind(offset)(oscar, report);
                entity['borderTopRightRadius'] = verify;
                zulu = options[zulu];
                tango = golf.bind(tango)(zulu);
                zulu = tango.withSpring;
                zulu = zulu.bind(tango)(oscar, report);
                entity['borderBottomRightRadius'] = zulu;
                entity['backgroundColor'] = mike;
                return entity;
            }
        };
        kilo = {};
        kilo['isMinimized'] = update;
        kilo['gestureState'] = echo;
        echo = _closure1_slot8;
        kilo['LAUNCH_PAD_PULL_TAB_MINIMIZED_OFFSET'] = echo;
        echo = verify[entity];
        echo = options.bind(tango)(echo);
        echo = echo.interpolate;
        kilo['interpolate'] = echo;
        kilo['launchPadSharedState'] = foxtrot;
        kilo['windowDimensions'] = result;
        kilo['launchPadPullTabState'] = report;
        result = _closure1_slot5;
        kilo['LAUNCH_PAD_PULL_TAB_BORDER_RADIUS'] = result;
        result = verify[entity];
        result = options.bind(tango)(result);
        result = result.interpolateColor;
        kilo['interpolateColor'] = result;
        result = _closure1_slot4;
        kilo['LAUNCH_PAD_MARGIN'] = result;
        kilo['backgroundColorTabBar'] = output;
        kilo['backgroundColorLaunchPad'] = sizing;
        sizing = 12;
        sizing = verify[sizing];
        sizing = options.bind(tango)(sizing);
        sizing = sizing.withSpring;
        kilo['withSpring'] = sizing;
        sizing = _closure1_slot11;
        kilo['LAUNCH_PAD_SPRING_CONFIG'] = sizing;
        zulu['__closure'] = kilo;
        kilo = 17461120174889.0;
        zulu['__workletHash'] = kilo;
        kilo = _closure1_slot17;
        zulu['__initData'] = kilo;
        oscar = oscar.bind(backup)(zulu);
        zulu = {};
        zulu['launchPadSharedState'] = foxtrot;
        zulu['launchPadPullTabState'] = report;
        zulu['updaters'] = mike;
        mike = function(argFoo) { // Original name: useLaunchPadPullTabKeyboardListener
            entity = argFoo;
            foxtrot = entity.launchPadSharedState;
            var _closure3_slot0 = foxtrot;
            options = entity.launchPadPullTabState;
            var _closure3_slot1 = options;
            romeo = entity.updaters;
            var _closure3_slot2 = romeo;
            tango = _closure1_slot1;
            offset = _closure1_slot2;
            entity = 7;
            zulu = offset[entity];
            entity = undefined;
            zulu = tango.bind(entity)(zulu);
            backup = zulu.bind(entity)();
            var _closure3_slot3 = backup;
            verify = _closure1_slot0;
            zulu = 8;
            tango = offset[zulu];
            report = verify.bind(entity)(tango);
            tango = report.useSharedValue;
            yankee = tango.bind(report)(entity);
            var _closure3_slot4 = yankee;
            zulu = offset[zulu];
            report = verify.bind(entity)(zulu);
            tango = report.useAnimatedReaction;
            zulu = function() { // Original name: s
                mike = _closure3_slot3;
                entity = mike.get;
                entity = entity.bind(mike)();
                return entity;
            };
            golf = {};
            golf['keyboardHeight'] = backup;
            zulu['__closure'] = golf;
            golf = 14545769097570.0;
            zulu['__workletHash'] = golf;
            golf = _closure1_slot15;
            zulu['__initData'] = golf;
            mike = function(argFoo, argBar) { // Original name: l
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zulu = argFoo;
                    mike = argBar;
                    report = _closure3_slot0;
                    tango = report.get;
                    report = tango.bind(report)();
                    tango = 0;
                    if(!(tango !== report)) { _fun00004_ip = 50; continue _fun00003 }
 28:
                    golf = _closure3_slot2;
                    oscar = golf.setLaunchPadPullTabMinimized;
                    report = false;
                    report = oscar.bind(golf)(report);
                    _fun00004_ip = 462; continue _fun00003;
 50:
                    report = null;
                    if(!(report != mike)) { _fun00004_ip = 462; continue _fun00003 }
 59:
                    if(!(zulu !== mike)) { _fun00004_ip = 462; continue _fun00003 }
 66:
                    if(!(!(zulu < mike))) { _fun00004_ip = 303; continue _fun00003 }
 73:
                    options = _closure3_slot2;
                    golf = options.setLaunchPadPullTabMinimized;
                    oscar = true;
                    oscar = golf.bind(options)(oscar);
                    golf = _closure3_slot4;
                    oscar = golf.get;
                    oscar = oscar.bind(golf)();
                    if(!(report != oscar)) { _fun00004_ip = 123; continue _fun00003 }
 107:
                    options = _closure3_slot4;
                    golf = options.set;
                    oscar = undefined;
                    oscar = golf.bind(options)(oscar);
 123:
                    golf = _closure1_slot12;
                    options = zulu + golf;
                    verify = _closure1_slot4;
                    golf = 2;
                    golf = golf * verify;
                    golf = options + golf;
                    offset = _closure1_slot0;
                    verify = _closure1_slot2;
                    options = 9;
                    verify = verify[options];
                    options = undefined;
                    verify = offset.bind(options)(verify);
                    options = verify.getWindowDimensionsWorklet;
                    options = options.bind(verify)();
                    options = options.height;
                    offset = _closure3_slot1;
                    verify = offset.get;
                    verify = verify.bind(offset)();
                    offset = verify.position;
                    verify = _closure1_slot6;
                    verify = offset + verify;
                    oscar = _closure1_slot10;
                    oscar = verify + oscar;
                    oscar = options - oscar;
                    offset = 0;
                    if(!(!(oscar > golf))) { _fun00004_ip = 234; continue _fun00003 }
 230:
                    offset = golf - oscar;
 234:
                    if(!(offset > tango)) { _fun00004_ip = 462; continue _fun00003 }
 241:
                    verify = _closure3_slot2;
                    options = verify.setLaunchPadPullTabPosition;
                    yankee = _closure3_slot1;
                    oscar = yankee.get;
                    oscar = oscar.bind(yankee)();
                    oscar = oscar.position;
                    golf = oscar - offset;
                    oscar = yankee.get;
                    oscar = oscar.bind(yankee)();
                    oscar = oscar.offset;
                    oscar = oscar + offset;
                    oscar = options.bind(verify)(golf, oscar);
                    _fun00004_ip = 462; continue _fun00003;
 303:
                    if(!(tango === zulu)) { _fun00004_ip = 324; continue _fun00003 }
 307:
                    golf = _closure3_slot2;
                    oscar = golf.setLaunchPadPullTabMinimized;
                    tango = false;
                    tango = oscar.bind(golf)(tango);
 324:
                    oscar = _closure3_slot4;
                    tango = oscar.get;
                    tango = tango.bind(oscar)();
                    if(!(report == tango)) { _fun00004_ip = 355; continue _fun00003 }
 341:
                    oscar = _closure3_slot4;
                    tango = oscar.set;
                    tango = tango.bind(oscar)(mike);
 355:
                    oscar = _closure3_slot4;
                    tango = oscar.get;
                    tango = tango.bind(oscar)();
                    if(!(report != tango)) { _fun00004_ip = 375; continue _fun00003 }
 372:
                    mike = tango;
 375:
                    zulu = zulu / mike;
                    mike = 1;
                    zulu = mike - zulu;
                    oscar = _closure3_slot1;
                    mike = oscar.get;
                    mike = mike.bind(oscar)();
                    mike = mike.offset;
                    report = mike * zulu;
                    tango = _closure3_slot2;
                    zulu = tango.setLaunchPadPullTabPosition;
                    entity = oscar.get;
                    entity = entity.bind(oscar)();
                    entity = entity.position;
                    mike = entity + report;
                    entity = oscar.get;
                    entity = entity.bind(oscar)();
                    entity = entity.offset;
                    entity = entity - report;
                    entity = zulu.bind(tango)(mike, entity);
 462:
                    entity = undefined;
                    return entity;
                }
            };
            golf = {};
            golf['launchPadSharedState'] = foxtrot;
            golf['updaters'] = romeo;
            golf['keyboardHeightOpened'] = yankee;
            golf['launchPadPullTabState'] = options;
            options = _closure1_slot12;
            golf['CHAT_INPUT_HEIGHT'] = options;
            options = _closure1_slot4;
            golf['LAUNCH_PAD_MARGIN'] = options;
            options = 9;
            options = offset[options];
            options = verify.bind(entity)(options);
            options = options.getWindowDimensionsWorklet;
            golf['getWindowDimensionsWorklet'] = options;
            options = _closure1_slot6;
            golf['LAUNCH_PAD_PULL_TAB_HEIGHT'] = options;
            options = _closure1_slot10;
            golf['LAUNCH_PAD_PULL_TAB_SCALE_OFFSET'] = options;
            mike['__closure'] = golf;
            golf = 8058975008670.0;
            mike['__workletHash'] = golf;
            oscar = _closure1_slot16;
            mike['__initData'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return entity;
        };
        mike = mike.bind(tango)(zulu);
        zulu = _closure1_slot13;
        entity = verify[entity];
        entity = offset.bind(tango)(entity);
        mike = entity.View;
        entity = {};
        foxtrot = yankee.pullTab;
        report = new Array(2);
        report[0] = foxtrot;
        report[1] = oscar;
        entity['style'] = report;
        oscar = _closure1_slot3;
        report = {};
        foxtrot = 'button';
        report['accessibilityRole'] = foxtrot;
        foxtrot = 13;
        backup = verify[foxtrot];
        backup = options.bind(tango)(backup);
        kilo = backup.intl;
        backup = kilo.string;
        foxtrot = verify[foxtrot];
        foxtrot = options.bind(tango)(foxtrot);
        foxtrot = foxtrot.t;
        foxtrot = foxtrot.yTnIfX;
        foxtrot = backup.bind(kilo)(foxtrot);
        report['accessibilityLabel'] = foxtrot;
        romeo = _closure1_slot7;
        report['hitSlop'] = romeo;
        yankee = yankee.pullTabButton;
        report['style'] = yankee;
        golf = function() { // Original name: onTouchStart
            zulu = _closure2_slot3;
            mike = zulu.setLaunchPadPullTabScale;
            entity = _closure1_slot9;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        report['onTouchStart'] = golf;
        golf = 14;
        golf = verify[golf];
        golf = offset.bind(tango)(golf);
        report['onPress'] = golf;
        golf = 15;
        golf = verify[golf];
        golf = options.bind(tango)(golf);
        options = golf.ChannelListMagnifyingGlassIcon;
        golf = {};
        verify = 'xs';
        golf['size'] = verify;
        golf = zulu.bind(tango)(options, golf);
        report['children'] = golf;
        report = zulu.bind(tango)(oscar, report);
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    mike = tango.bind(golf)(mike);
    tango = 16;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/launchpad/native/LaunchPadPullTab.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();