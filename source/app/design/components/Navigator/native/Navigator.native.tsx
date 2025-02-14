// app/design/components/Navigator/native/Navigator.native.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    yankee = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: NavigationStack
        entity = argFoo;
        options = entity.screens;
        var _closure2_slot0 = options;
        whiskey = entity.onWillFocus;
        var _closure2_slot1 = whiskey;
        oscar = entity.onDidFocus;
        var _closure2_slot2 = oscar;
        offset = entity.initialRouteName;
        yankee = entity.detachInactiveScreens;
        source = entity.gestureResponseDistance;
        var _closure2_slot3 = source;
        control = entity.gestureDirection;
        var _closure2_slot4 = control;
        sizing = entity.headerTitleAlign;
        var _closure2_slot5 = sizing;
        update = entity.cardOverlayEnabled;
        var _closure2_slot6 = update;
        echo = entity.cardShadowEnabled;
        var _closure2_slot7 = echo;
        result = entity.cardStyle;
        var _closure2_slot8 = result;
        target = entity.headerStyle;
        var _closure2_slot9 = target;
        mike = entity.viewStyle;
        var _closure2_slot10 = mike;
        config = entity.headerLeftContainerStyle;
        var _closure2_slot11 = config;
        record = entity.headerTitleContainerStyle;
        var _closure2_slot12 = record;
        sequence = entity.headerRightContainerStyle;
        var _closure2_slot13 = sequence;
        kilo = entity.headerStatusBarHeight;
        var _closure2_slot14 = kilo;
        output = entity.headerBackTitle;
        var _closure2_slot15 = output;
        vacuum = entity.hideTitle;
        var _closure2_slot16 = vacuum;
        zulu = entity.disableHeaderAnimation;
        var _closure2_slot17 = zulu;
        entity = _closure1_slot7;
        tango = undefined;
        status = entity.bind(tango)();
        var _closure2_slot18 = status;
        romeo = _closure1_slot0;
        verify = _closure1_slot2;
        entity = 7;
        entity = verify[entity];
        golf = romeo.bind(tango)(entity);
        entity = golf.useStyles;
        context = entity.bind(golf)();
        var _closure2_slot19 = context;
        entity = 8;
        entity = verify[entity];
        backup = romeo.bind(tango)(entity);
        foxtrot = backup.useToken;
        golf = _closure1_slot1;
        entity = 5;
        entity = verify[entity];
        entity = golf.bind(tango)(entity);
        entity = entity.colors;
        entity = entity.NAVIGATOR_HEADER_TINT;
        papa = foxtrot.bind(backup)(entity);
        var _closure2_slot20 = papa;
        entity = 6;
        entity = verify[entity];
        romeo = romeo.bind(tango)(entity);
        entity = romeo.useNavigatorShouldCrossfade;
        sierra = entity.bind(romeo)();
        var _closure2_slot21 = sierra;
        foxtrot = _closure1_slot4;
        romeo = foxtrot.useState;
        entity = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 9;
            mike = mike[entity];
            entity = undefined;
            mike = zulu.bind(entity)(mike);
            entity = mike.createStackNavigator;
            entity = entity.bind(mike)();
            return entity;
        };
        foxtrot = romeo.bind(foxtrot)(entity);
        romeo = _closure1_slot3;
        entity = 1;
        romeo = romeo.bind(tango)(foxtrot, entity);
        entity = 0;
        entity = romeo[entity];
        var _closure2_slot22 = entity;
        romeo = 10;
        romeo = verify[romeo];
        romeo = golf.bind(tango)(romeo);
        romeo = romeo.bind(tango)();
        backup = romeo.top;
        var _closure2_slot23 = backup;
        lima = _closure1_slot4;
        foxtrot = lima.useCallback;
        romeo = new Array(2);
        romeo[0] = whiskey;
        romeo[1] = oscar;
        oscar = function(argFoo) {
            entity = argFoo;
            var _closure3_slot0 = entity;
            entity = {};
            zulu = function() { // Original name: focus
                _fun64926: for(var _fun64926_ip = 0; ; ) switch(_fun64926_ip) {
 0:
                    zulu = _closure2_slot1;
                    mike = null;
                    if(!(mike != zulu)) { _fun64926_ip = 31; continue _fun64926 }
 13:
                    zulu = _closure2_slot1;
                    mike = _closure3_slot0;
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
 31:
                    entity = undefined;
                    return entity;
                }
            };
            entity['focus'] = zulu;
            mike = function(argFoo) { // Original name: transitionEnd
                _fun64927: for(var _fun64927_ip = 0; ; ) switch(_fun64927_ip) {
 0:
                    entity = argFoo;
                    entity = entity.data;
                    entity = entity.closing;
                    if(entity) { _fun64927_ip = 30; continue _fun64927 }
 17:
                    zulu = _closure2_slot2;
                    mike = null;
                    entity = mike == zulu;
 30:
                    if(entity) { _fun64927_ip = 54; continue _fun64927 }
 33:
                    zulu = _closure2_slot2;
                    mike = _closure3_slot0;
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
 54:
                    entity = undefined;
                    return entity;
                }
            };
            entity['transitionEnd'] = mike;
            return entity;
        };
        oscar = foxtrot.bind(lima)(oscar, romeo);
        var _closure2_slot24 = oscar;
        foxtrot = _closure1_slot4;
        romeo = foxtrot.useCallback;
        oscar = new Array(22);
        oscar[0] = sierra;
        sierra = status.navbar;
        oscar[1] = sierra;
        sierra = status.headerLeftContainerStyle;
        oscar[2] = sierra;
        status = status.headerRightContainerStyle;
        oscar[3] = status;
        oscar[4] = target;
        oscar[5] = papa;
        papa = context.headerTitle;
        oscar[6] = papa;
        context = context.headerBackTitleStyle;
        oscar[7] = context;
        oscar[8] = record;
        oscar[9] = config;
        oscar[10] = sequence;
        oscar[11] = vacuum;
        oscar[12] = control;
        oscar[13] = source;
        oscar[14] = update;
        oscar[15] = echo;
        oscar[16] = result;
        oscar[17] = output;
        oscar[18] = sizing;
        oscar[19] = kilo;
        oscar[20] = backup;
        oscar[21] = zulu;
        zulu = function(argFoo) {
            _fun64928: for(var _fun64928_ip = 0; ; ) switch(_fun64928_ip) {
 0:
                entity = argFoo;
                zulu = entity.navigation;
                entity = zulu.getState;
                entity = entity.bind(zulu)();
                golf = null;
                zulu = golf == entity;
                report = undefined;
                options = undefined;
                if(zulu) { _fun64928_ip = 40; continue _fun64928 }
 34:
                options = entity.routes;
 40:
                if(!(golf == options)) { _fun64928_ip = 48; continue _fun64928 }
 44:
                options = new Array(0);
 48:
                entity = {};
                oscar = _closure2_slot21;
                zulu = undefined;
                if(!oscar) { _fun64928_ip = 66; continue _fun64928 }
 62:
                zulu = 'screen';
 66:
                entity['headerMode'] = zulu;
                zulu = _closure2_slot18;
                oscar = zulu.navbar;
                zulu = new Array(2);
                zulu[0] = oscar;
                oscar = _closure2_slot9;
                zulu[1] = oscar;
                entity['headerStyle'] = zulu;
                zulu = _closure2_slot20;
                entity['headerTintColor'] = zulu;
                zulu = _closure2_slot19;
                oscar = zulu.headerTitle;
                entity['headerTitleStyle'] = oscar;
                zulu = zulu.headerBackTitleStyle;
                entity['headerBackTitleStyle'] = zulu;
                oscar = false;
                entity['headerTitleAllowFontScaling'] = oscar;
                offset = _closure1_slot0;
                yankee = _closure1_slot2;
                verify = 11;
                verify = yankee[verify];
                offset = offset.bind(report)(verify);
                verify = offset.isAndroid;
                offset = verify.bind(offset)();
                verify = undefined;
                if(offset) { _fun64928_ip = 207; continue _fun64928 }
 181:
                yankee = _closure1_slot0;
                romeo = _closure1_slot2;
                offset = 7;
                offset = romeo[offset];
                offset = yankee.bind(report)(offset);
                verify = offset.renderBackImage;
 207:
                entity['headerBackImage'] = verify;
                entity['headerBackTitleVisible'] = oscar;
                oscar = 'center';
                verify = new Array(2);
                offset = {'maxWidth': '60%', 'alignItems': 'center'};
                verify[0] = offset;
                offset = _closure2_slot12;
                verify[1] = offset;
                entity['headerTitleContainerStyle'] = verify;
                verify = _closure2_slot18;
                yankee = verify.headerLeftContainerStyle;
                offset = new Array(2);
                offset[0] = yankee;
                yankee = _closure2_slot11;
                offset[1] = yankee;
                entity['headerLeftContainerStyle'] = offset;
                offset = verify.headerRightContainerStyle;
                verify = new Array(2);
                verify[0] = offset;
                offset = _closure2_slot13;
                verify[1] = offset;
                entity['headerRightContainerStyle'] = verify;
                offset = _closure2_slot16;
                verify = undefined;
                if(!offset) { _fun64928_ip = 328; continue _fun64928 }
 323:
                verify = function() {
                    entity = undefined;
                    return entity;
                };
 328:
                entity['headerTitle'] = verify;
                verify = _closure2_slot4;
                entity['gestureDirection'] = verify;
                verify = _closure2_slot3;
                entity['gestureResponseDistance'] = verify;
                verify = _closure2_slot6;
                entity['cardOverlayEnabled'] = verify;
                verify = _closure2_slot7;
                entity['cardShadowEnabled'] = verify;
                verify = _closure2_slot8;
                entity['cardStyle'] = verify;
                verify = _closure2_slot15;
                if(!(golf == verify)) { _fun64928_ip = 457; continue _fun64928 }
 386:
                offset = options.length;
                verify = 1;
                options = undefined;
                if(!(verify === offset)) { _fun64928_ip = 455; continue _fun64928 }
 400:
                romeo = _closure1_slot0;
                foxtrot = _closure1_slot2;
                verify = 12;
                offset = foxtrot[verify];
                offset = romeo.bind(report)(offset);
                yankee = offset.intl;
                offset = yankee.string;
                verify = foxtrot[verify];
                verify = romeo.bind(report)(verify);
                verify = verify.t;
                verify = verify.13/7kZ;
                options = offset.bind(yankee)(verify);
 455:
                _fun64928_ip = 461; continue _fun64928;
 457:
                options = _closure2_slot15;
 461:
                entity['headerBackTitle'] = options;
                options = _closure2_slot5;
                options = golf != options;
                if(!options) { _fun64928_ip = 481; continue _fun64928 }
 477:
                oscar = _closure2_slot5;
 481:
                entity['headerTitleAlign'] = oscar;
                oscar = _closure2_slot14;
                if(!(golf == oscar)) { _fun64928_ip = 500; continue _fun64928 }
 494:
                oscar = _closure2_slot23;
                _fun64928_ip = 504; continue _fun64928;
 500:
                oscar = _closure2_slot14;
 504:
                entity['headerStatusBarHeight'] = oscar;
                oscar = _closure2_slot21;
                if(oscar) { _fun64928_ip = 550; continue _fun64928 }
 516:
                golf = _closure1_slot0;
                options = _closure1_slot2;
                oscar = 9;
                oscar = options[oscar];
                oscar = golf.bind(report)(oscar);
                oscar = oscar.CardStyleInterpolators;
                oscar = oscar.forHorizontalIOS;
                _fun64928_ip = 555; continue _fun64928;
 550:
                oscar = function(argFoo) {
                    entity = argFoo;
                    zulu = entity.current;
                    entity = {};
                    mike = {};
                    report = zulu.progress;
                    tango = report.interpolate;
                    zulu = {};
                    oscar = [0, 1];
                    zulu['inputRange'] = oscar;
                    oscar = [0, 1];
                    zulu['outputRange'] = oscar;
                    zulu = tango.bind(report)(zulu);
                    mike['opacity'] = zulu;
                    entity['cardStyle'] = mike;
                    return entity;
                };
 555:
                entity['cardStyleInterpolator'] = oscar;
                oscar = _closure2_slot17;
                if(oscar) { _fun64928_ip = 615; continue _fun64928 }
 567:
                tango = _closure2_slot21;
                if(tango) { _fun64928_ip = 581; continue _fun64928 }
 574:
                mike = function(argFoo) {
                    entity = argFoo;
                    oscar = entity.current;
                    report = entity.next;
                    tango = entity.layouts;
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 9;
                    mike = mike[entity];
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
                    zulu = entity.HeaderStyleInterpolators;
                    mike = zulu.forUIKit;
                    entity = {};
                    entity['current'] = oscar;
                    entity['next'] = report;
                    entity['layouts'] = tango;
                    entity = mike.bind(zulu)(entity);
                    zulu = entity.leftButtonStyle;
                    mike = entity.titleStyle;
                    mike = mike.transform;
                    zulu['transform'] = mike;
                    zulu = entity.rightButtonStyle;
                    mike = entity.titleStyle;
                    mike = mike.transform;
                    zulu['transform'] = mike;
                    return entity;
                };
                _fun64928_ip = 613; continue _fun64928;
 581:
                oscar = _closure1_slot0;
                golf = _closure1_slot2;
                tango = 9;
                tango = golf[tango];
                tango = oscar.bind(report)(tango);
                tango = tango.HeaderStyleInterpolators;
                mike = tango.forFade;
 613:
                _fun64928_ip = 647; continue _fun64928;
 615:
                tango = _closure1_slot0;
                oscar = _closure1_slot2;
                zulu = 9;
                zulu = oscar[zulu];
                zulu = tango.bind(report)(zulu);
                zulu = zulu.HeaderStyleInterpolators;
                mike = zulu.forNoAnimation;
 647:
                entity['headerStyleInterpolator'] = mike;
                return entity;
            }
        };
        oscar = romeo.bind(foxtrot)(zulu, oscar);
        zulu = _closure1_slot6;
        mike = entity.Navigator;
        entity = {};
        entity['detachInactiveScreens'] = yankee;
        entity['initialRouteName'] = offset;
        entity['screenOptions'] = oscar;
        oscar = 13;
        oscar = verify[oscar];
        golf = golf.bind(tango)(oscar);
        oscar = golf.keys;
        golf = oscar.bind(golf)(options);
        oscar = golf.map;
        report = function(argFoo) {
            _fun64932: for(var _fun64932_ip = 0; ; ) switch(_fun64932_ip) {
 0:
                report = argFoo;
                oscar = {};
                mike = _closure2_slot0;
                offset = mike[report];
                yankee = oscar;
                mike = copyDataProperties(yankee, offset);
                var _closure3_slot0 = oscar;
                mike = oscar.fullscreen;
                if(mike) { _fun64932_ip = 50; continue _fun64932 }
 38:
                tango = oscar.customNavbar;
                zulu = null;
                mike = zulu != tango;
 50:
                zulu = _closure2_slot16;
                if(!zulu) { _fun64932_ip = 68; continue _fun64932 }
 57:
                zulu = function() {
                    entity = undefined;
                    return entity;
                };
                oscar['headerTitle'] = zulu;
 68:
                if(!mike) { _fun64932_ip = 89; continue _fun64932 }
 71:
                mike = true;
                oscar['headerTransparent'] = mike;
                mike = 'float';
                oscar['headerMode'] = mike;
 89:
                tango = _closure1_slot6;
                mike = _closure2_slot22;
                zulu = mike.Screen;
                mike = {};
                mike['name'] = report;
                options = oscar.initialParams;
                mike['initialParams'] = options;
                golf = _closure2_slot24;
                mike['listeners'] = golf;
                mike['options'] = oscar;
                entity = function(argFoo) { // Original name: children
                    tango = _closure1_slot6;
                    mike = _closure1_slot0;
                    zulu = _closure1_slot2;
                    entity = 14;
                    entity = zulu[entity];
                    zulu = undefined;
                    entity = mike.bind(zulu)(entity);
                    mike = entity.NavigatorScreen;
                    entity = {};
                    report = _closure3_slot0;
                    entity['screen'] = report;
                    golf = argFoo;
                    options = entity;
                    report = copyDataProperties(options, golf);
                    oscar = _closure2_slot10;
                    report = 'viewStyle';
                    entity[report] = oscar;
                    entity = tango.bind(zulu)(mike, entity);
                    return entity;
                };
                mike['children'] = entity;
                entity = undefined;
                entity = tango.bind(entity)(zulu, mike, report);
                return entity;
            }
        };
        report = oscar.bind(golf)(report);
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot8 = entity;
    entity = function(argFoo) { // Original name: WrappedNavigationStack
        _fun64935: for(var _fun64935_ip = 0; ; ) switch(_fun64935_ip) {
 0:
            zulu = argFoo;
            verify = zulu.initialRouteName;
            entity = zulu.initialRouteStack;
            var _closure2_slot0 = entity;
            offset = zulu.initialRouteState;
            oscar = zulu.onStateChange;
            backup = zulu.navigationTheme;
            mike = {'initialRouteName': 0, 'initialRouteStack': 0, 'initialRouteState': 0, 'onStateChange': 0, 'navigationTheme': 0};
            yankee = null;
            update = mike;
            echo = null;
            entity = silentSetPrototypeOf(update, echo);
            romeo = 0;
            update = {};
            echo = zulu;
            result = mike;
            options = copyDataProperties(update, echo, result);
            mike = _closure1_slot0;
            sizing = _closure1_slot2;
            entity = 15;
            zulu = sizing[entity];
            tango = undefined;
            foxtrot = mike.bind(tango)(zulu);
            zulu = foxtrot.createNavigationContainerRef;
            kilo = zulu.bind(foxtrot)();
            var _closure2_slot1 = kilo;
            output = _closure1_slot4;
            foxtrot = output.useState;
            zulu = function() {
                _fun64936: for(var _fun64936_ip = 0; ; ) switch(_fun64936_ip) {
 0:
                    mike = _closure2_slot0;
                    entity = null;
                    mike = entity != mike;
                    entity = undefined;
                    if(!mike) { _fun64936_ip = 32; continue _fun64936 }
 18:
                    mike = {};
                    zulu = _closure2_slot0;
                    mike['routes'] = zulu;
                    entity = mike;
 32:
                    return entity;
                }
            };
            output = foxtrot.bind(output)(zulu);
            foxtrot = _closure1_slot3;
            zulu = 1;
            zulu = foxtrot.bind(tango)(output, zulu);
            romeo = zulu[romeo];
            foxtrot = _closure1_slot1;
            zulu = 16;
            zulu = sizing[zulu];
            zulu = foxtrot.bind(tango)(zulu);
            output = zulu.bind(tango)();
            zulu = 17;
            zulu = sizing[zulu];
            foxtrot = mike.bind(tango)(zulu);
            zulu = foxtrot.useNavigationTheme;
            foxtrot = zulu.bind(foxtrot)(output);
            zulu = _closure1_slot6;
            entity = sizing[entity];
            entity = mike.bind(tango)(entity);
            mike = entity.NavigationContainer;
            entity = {};
            entity['ref'] = kilo;
            if(!(yankee != backup)) { _fun64935_ip = 224; continue _fun64935 }
 221:
            foxtrot = backup;
 224:
            entity['theme'] = foxtrot;
            if(!(yankee == offset)) { _fun64935_ip = 248; continue _fun64935 }
 233:
            foxtrot = yankee != romeo;
            yankee = undefined;
            if(!foxtrot) { _fun64935_ip = 245; continue _fun64935 }
 242:
            yankee = romeo;
 245:
            offset = yankee;
 248:
            entity['initialState'] = offset;
            golf = function() { // Original name: onReady
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 18;
                mike = mike[entity];
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                tango = mike.routingInstrumentation;
                zulu = tango.registerNavigationContainer;
                mike = _closure2_slot1;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            entity['onReady'] = golf;
            entity['onStateChange'] = oscar;
            oscar = true;
            entity['independent'] = oscar;
            golf = _closure1_slot6;
            oscar = _closure1_slot8;
            report = {};
            report['initialRouteName'] = verify;
            update = report;
            echo = options;
            options = copyDataProperties(update, echo);
            report = golf.bind(tango)(oscar, report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = yankee.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    golf = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(golf);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    romeo = tango.StyleSheet;
    tango = tango.View;
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {};
    sizing = romeo.absoluteFillObject;
    output = verify;
    offset = copyDataProperties(output, sizing);
    offset = 5;
    foxtrot = oscar[offset];
    foxtrot = yankee.bind(entity)(foxtrot);
    foxtrot = foxtrot.colors;
    backup = foxtrot.BACKGROUND_MOBILE_SECONDARY;
    foxtrot = 'backgroundColor';
    verify[foxtrot] = backup;
    tango['container'] = verify;
    verify = {};
    romeo = romeo.hairlineWidth;
    verify['borderBottomWidth'] = romeo;
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.colors;
    romeo = romeo.BACKGROUND_MOBILE_SECONDARY;
    verify['backgroundColor'] = romeo;
    offset = oscar[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.BACKGROUND_TERTIARY;
    verify['borderBottomColor'] = offset;
    offset = 'transparent';
    verify['shadowColor'] = offset;
    tango['navbar'] = verify;
    verify = {'backgroundColor': 'transparent', 'borderBottomColor': 'transparent'};
    tango['fullscreen'] = verify;
    verify = {'paddingLeft': 16, 'marginRight': 4294967280};
    tango['headerLeftContainerStyle'] = verify;
    verify = {'paddingRight': 16, 'marginLeft': 4294967280};
    tango['headerRightContainerStyle'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot7 = tango;
    tango = 20;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'design/components/Navigator/native/Navigator.native.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo, argBar) { // Original name: useNavigatorScreens
        tango = _closure1_slot4;
        zulu = tango.useMemo;
        mike = argFoo;
        entity = argBar;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['useNavigatorScreens'] = tango;
    tango = function() { // Original name: useAccessibilityNativeStackOptions
        report = _closure1_slot0;
        tango = _closure1_slot2;
        zulu = 6;
        tango = tango[zulu];
        zulu = undefined;
        tango = report.bind(zulu)(tango);
        zulu = tango.useNavigatorShouldCrossfade;
        report = zulu.bind(tango)();
        var _closure2_slot0 = report;
        tango = _closure1_slot4;
        zulu = tango.useMemo;
        mike = new Array(1);
        mike[0] = report;
        entity = function() {
            _fun64940: for(var _fun64940_ip = 0; ; ) switch(_fun64940_ip) {
 0:
                mike = _closure2_slot0;
                entity = undefined;
                if(!mike) { _fun64940_ip = 26; continue _fun64940 }
 12:
                mike = {};
                zulu = 'fade';
                mike['animation'] = zulu;
                entity = mike;
 26:
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['useAccessibilityNativeStackOptions'] = tango;
    mike = function(argFoo) { // Original name: Navigator
        _fun64941: for(var _fun64941_ip = 0; ; ) switch(_fun64941_ip) {
 0:
            report = argFoo;
            oscar = report.useContainer;
            tango = undefined;
            if(!(oscar === tango)) { _fun64941_ip = 17; continue _fun64941 }
 15:
            oscar = true;
 17:
            entity = report.android_blockParentGestures;
            if(!(entity === tango)) { _fun64941_ip = 29; continue _fun64941 }
 27:
            entity = false;
 29:
            verify = report.containerStyle;
            zulu = {'useContainer': 0, 'android_blockParentGestures': 0, 'containerStyle': 0};
            romeo = null;
            foxtrot = zulu;
            mike = silentSetPrototypeOf(foxtrot, romeo);
            foxtrot = {};
            romeo = report;
            yankee = zulu;
            options = copyDataProperties(foxtrot, romeo, yankee);
            mike = _closure1_slot7;
            golf = mike.bind(tango)();
            if(entity) { _fun64941_ip = 86; continue _fun64941 }
 80:
            zulu = _closure1_slot5;
            _fun64941_ip = 106; continue _fun64941;
 86:
            mike = _closure1_slot1;
            offset = _closure1_slot2;
            entity = 19;
            entity = offset[entity];
            zulu = mike.bind(tango)(entity);
 106:
            mike = _closure1_slot6;
            entity = {};
            offset = golf.container;
            golf = new Array(2);
            golf[0] = offset;
            golf[1] = verify;
            entity['style'] = golf;
            golf = _closure1_slot6;
            if(oscar) { _fun64941_ip = 146; continue _fun64941 }
 140:
            oscar = _closure1_slot8;
            _fun64941_ip = 150; continue _fun64941;
 146:
            oscar = _closure1_slot9;
 150:
            report = {};
            foxtrot = report;
            romeo = options;
            options = copyDataProperties(foxtrot, romeo);
            report = golf.bind(tango)(oscar, report);
            entity['children'] = report;
            entity = mike.bind(tango)(zulu, entity);
            return entity;
        }
    };
    zulu['Navigator'] = mike;
    return entity;
})();