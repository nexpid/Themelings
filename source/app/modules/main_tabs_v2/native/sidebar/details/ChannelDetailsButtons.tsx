// app/modules/main_tabs_v2/native/sidebar/details/ChannelDetailsButtons.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: ChannelDetailsButton
        entity = argFoo;
        options = entity.icon;
        offset = entity.label;
        verify = entity.onPress;
        entity = _closure1_slot18;
        tango = undefined;
        oscar = entity.bind(tango)();
        zulu = _closure1_slot16;
        mike = _closure1_slot4;
        entity = {};
        oscar = oscar.button;
        entity['style'] = oscar;
        golf = _closure1_slot16;
        oscar = _closure1_slot0;
        yankee = _closure1_slot2;
        report = 11;
        report = yankee[report];
        report = oscar.bind(tango)(report);
        oscar = report.IconButton;
        report = {};
        report['label'] = offset;
        report['onPress'] = verify;
        verify = 'secondary';
        report['variant'] = verify;
        report['icon'] = options;
        options = 2;
        report['maxFontSizeMultiplier'] = options;
        report = golf.bind(tango)(oscar, report);
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot26 = entity;
    entity = function(argFoo) { // Original name: SearchButton
        mike = argFoo;
        oscar = mike.channelId;
        var _closure2_slot0 = oscar;
        tango = _closure1_slot3;
        zulu = tango.useCallback;
        mike = new Array(1);
        mike[0] = oscar;
        entity = function() {
            tango = _closure1_slot8;
            zulu = _closure2_slot0;
            entity = undefined;
            mike = true;
            mike = tango.bind(entity)(zulu, mike);
            return entity;
        };
        entity = zulu.bind(tango)(entity, mike);
        tango = _closure1_slot16;
        zulu = _closure1_slot26;
        mike = {};
        mike['onPress'] = entity;
        offset = _closure1_slot0;
        golf = _closure1_slot2;
        oscar = 12;
        options = golf[oscar];
        entity = undefined;
        options = offset.bind(entity)(options);
        verify = options.intl;
        options = verify.string;
        oscar = golf[oscar];
        oscar = offset.bind(entity)(oscar);
        oscar = oscar.t;
        oscar = oscar.5h0QOD;
        oscar = options.bind(verify)(oscar);
        mike['label'] = oscar;
        oscar = _closure1_slot1;
        report = 13;
        report = golf[report];
        report = oscar.bind(entity)(report);
        mike['icon'] = report;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    var _closure1_slot27 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: navigateToChannelDetailsScreen
        tango = argFoo;
        zulu = tango.navigate;
        mike = {};
        entity = argBar;
        mike['screen'] = entity;
        entity = argBaz;
        mike['channelId'] = entity;
        entity = 'channel-details-button';
        mike['source'] = entity;
        entity = 'sidebar';
        entity = zulu.bind(tango)(entity, mike);
        entity = undefined;
        return entity;
    };
    var _closure1_slot28 = entity;
    entity = function(argFoo) { // Original name: SettingsButton
        mike = argFoo;
        verify = mike.channelId;
        var _closure2_slot0 = verify;
        offset = _closure1_slot0;
        golf = _closure1_slot2;
        mike = 14;
        mike = golf[mike];
        tango = undefined;
        zulu = offset.bind(tango)(mike);
        mike = zulu.useNavigation;
        options = mike.bind(zulu)();
        var _closure2_slot1 = options;
        oscar = _closure1_slot3;
        zulu = oscar.useCallback;
        mike = new Array(2);
        mike[0] = verify;
        mike[1] = options;
        entity = function() {
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 15;
            zulu = zulu[entity];
            entity = undefined;
            oscar = tango.bind(entity)(zulu);
            tango = oscar.init;
            report = _closure2_slot0;
            tango = tango.bind(oscar)(report);
            tango = _closure1_slot28;
            zulu = _closure2_slot1;
            mike = _closure1_slot15;
            mike = mike.OVERVIEW;
            mike = tango.bind(entity)(zulu, mike, report);
            return entity;
        };
        oscar = zulu.bind(oscar)(entity, mike);
        zulu = _closure1_slot16;
        mike = _closure1_slot26;
        entity = {};
        entity['onPress'] = oscar;
        oscar = 12;
        options = golf[oscar];
        options = offset.bind(tango)(options);
        verify = options.intl;
        options = verify.string;
        oscar = golf[oscar];
        oscar = offset.bind(tango)(oscar);
        oscar = oscar.t;
        oscar = oscar.3D5yo6;
        oscar = options.bind(verify)(oscar);
        entity['label'] = oscar;
        oscar = _closure1_slot1;
        report = 16;
        report = golf[report];
        report = oscar.bind(tango)(report);
        entity['icon'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot29 = entity;
    entity = function(argFoo) { // Original name: MuteButton
        _fun112940: for(var _fun112940_ip = 0; ; ) switch(_fun112940_ip) {
 0:
            mike = argFoo;
            verify = mike.channelId;
            var _closure2_slot0 = verify;
            yankee = _closure1_slot0;
            romeo = _closure1_slot2;
            mike = 17;
            mike = romeo[mike];
            tango = undefined;
            oscar = yankee.bind(tango)(mike);
            report = oscar.useStateFromStores;
            mike = _closure1_slot6;
            zulu = new Array(3);
            zulu[0] = mike;
            mike = _closure1_slot5;
            zulu[1] = mike;
            mike = _closure1_slot7;
            zulu[2] = mike;
            mike = function() {
                _fun112941: for(var _fun112941_ip = 0; ; ) switch(_fun112941_ip) {
 0:
                    zulu = _closure1_slot6;
                    mike = zulu.getChannel;
                    entity = _closure2_slot0;
                    zulu = mike.bind(zulu)(entity);
                    entity = null;
                    entity = entity != zulu;
                    if(!entity) { _fun112941_ip = 102; continue _fun112941 }
 33:
                    mike = zulu.isThread;
                    mike = mike.bind(zulu)();
                    if(mike) { _fun112941_ip = 79; continue _fun112941 }
 46:
                    golf = _closure1_slot7;
                    oscar = golf.isChannelMuted;
                    mike = zulu.getGuildId;
                    report = mike.bind(zulu)();
                    mike = zulu.id;
                    mike = oscar.bind(golf)(report, mike);
                    _fun112941_ip = 99; continue _fun112941;
 79:
                    report = _closure1_slot5;
                    tango = report.isMuted;
                    zulu = zulu.id;
                    mike = tango.bind(report)(zulu);
 99:
                    entity = mike;
 102:
                    return entity;
                }
            };
            report = report.bind(oscar)(zulu, mike);
            mike = 14;
            mike = romeo[mike];
            zulu = yankee.bind(tango)(mike);
            mike = zulu.useNavigation;
            options = mike.bind(zulu)();
            var _closure2_slot1 = options;
            oscar = _closure1_slot3;
            zulu = oscar.useCallback;
            mike = new Array(2);
            mike[0] = verify;
            mike[1] = options;
            entity = function() {
                report = _closure1_slot28;
                tango = _closure2_slot1;
                mike = _closure1_slot13;
                zulu = mike.MUTE;
                mike = _closure2_slot0;
                entity = undefined;
                mike = report.bind(entity)(tango, zulu, mike);
                return entity;
            };
            oscar = zulu.bind(oscar)(entity, mike);
            zulu = _closure1_slot16;
            mike = _closure1_slot26;
            entity = {};
            options = 12;
            verify = romeo[options];
            verify = yankee.bind(tango)(verify);
            offset = verify.intl;
            verify = offset.string;
            options = romeo[options];
            options = yankee.bind(tango)(options);
            options = options.t;
            options = options.w4m94+;
            options = verify.bind(offset)(options);
            entity['label'] = options;
            entity['onPress'] = oscar;
            oscar = _closure1_slot1;
            options = _closure1_slot2;
            if(report) { _fun112940_ip = 230; continue _fun112940 }
 221:
            report = 19;
            report = options[report];
            _fun112940_ip = 237; continue _fun112940;
 230:
            golf = 18;
            report = options[golf];
 237:
            report = oscar.bind(tango)(report);
            entity['icon'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot30 = entity;
    entity = function(argFoo) { // Original name: ThreadsButton
        mike = argFoo;
        verify = mike.channelId;
        var _closure2_slot0 = verify;
        offset = _closure1_slot0;
        golf = _closure1_slot2;
        mike = 14;
        mike = golf[mike];
        tango = undefined;
        zulu = offset.bind(tango)(mike);
        mike = zulu.useNavigation;
        options = mike.bind(zulu)();
        var _closure2_slot1 = options;
        oscar = _closure1_slot3;
        zulu = oscar.useCallback;
        mike = new Array(2);
        mike[0] = verify;
        mike[1] = options;
        entity = function() {
            tango = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 20;
            mike = mike[entity];
            entity = undefined;
            tango = tango.bind(entity)(mike);
            mike = tango.trackThreadBrowserOpened;
            mike = mike.bind(tango)();
            report = _closure1_slot28;
            tango = _closure2_slot1;
            zulu = _closure1_slot13;
            zulu = zulu.THREADS;
            mike = _closure2_slot0;
            mike = report.bind(entity)(tango, zulu, mike);
            return entity;
        };
        oscar = zulu.bind(oscar)(entity, mike);
        zulu = _closure1_slot16;
        mike = _closure1_slot26;
        entity = {};
        entity['onPress'] = oscar;
        oscar = 12;
        options = golf[oscar];
        options = offset.bind(tango)(options);
        verify = options.intl;
        options = verify.string;
        oscar = golf[oscar];
        oscar = offset.bind(tango)(oscar);
        oscar = oscar.t;
        oscar = oscar.B2panJ;
        oscar = options.bind(verify)(oscar);
        entity['label'] = oscar;
        oscar = _closure1_slot1;
        report = 21;
        report = golf[report];
        report = oscar.bind(tango)(report);
        entity['icon'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot31 = entity;
    entity = function(argFoo) { // Original name: ChannelDetailsButtons
        _fun112945: for(var _fun112945_ip = 0; ; ) switch(_fun112945_ip) {
 0:
            mike = argFoo;
            tango = mike.channel;
            var _closure2_slot0 = tango;
            zulu = _closure1_slot18;
            report = undefined;
            zulu = zulu.bind(report)();
            var _closure2_slot1 = zulu;
            options = _closure1_slot3;
            golf = options.useMemo;
            verify = tango.id;
            oscar = new Array(2);
            oscar[0] = verify;
            tango = tango.type;
            oscar[1] = tango;
            tango = function() {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 22;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.getChannelDetailsButtons;
                entity = _closure2_slot0;
                mike = entity.type;
                entity = false;
                zulu = zulu.bind(tango)(mike, entity);
                mike = zulu.map;
                entity = function(argFoo) {
                    _fun112947: for(var _fun112947_ip = 0; ; ) switch(_fun112947_ip) {
 0:
                        report = argFoo;
                        entity = _closure2_slot0;
                        mike = entity.id;
                        entity = _closure1_slot12;
                        entity = entity.SEARCH;
                        if(!(entity !== report)) { _fun112947_ip = 166; continue _fun112947 }
 35:
                        entity = _closure1_slot12;
                        entity = entity.THREADS;
                        if(!(entity !== report)) { _fun112947_ip = 137; continue _fun112947 }
 49:
                        entity = _closure1_slot12;
                        entity = entity.MUTE;
                        if(!(entity !== report)) { _fun112947_ip = 108; continue _fun112947 }
 63:
                        entity = _closure1_slot12;
                        tango = entity.SETTINGS;
                        options = undefined;
                        entity = undefined;
                        if(!(tango === report)) { _fun112947_ip = 193; continue _fun112947 }
 81:
                        golf = _closure1_slot16;
                        oscar = _closure1_slot29;
                        report = {};
                        report['channelId'] = mike;
                        tango = 'settings';
                        entity = golf.bind(options)(oscar, report, tango);
                        _fun112947_ip = 193; continue _fun112947;
 108:
                        options = _closure1_slot16;
                        golf = _closure1_slot30;
                        oscar = {};
                        oscar['channelId'] = mike;
                        report = undefined;
                        tango = 'mute';
                        entity = options.bind(report)(golf, oscar, tango);
                        _fun112947_ip = 193; continue _fun112947;
 137:
                        options = _closure1_slot16;
                        golf = _closure1_slot31;
                        oscar = {};
                        oscar['channelId'] = mike;
                        report = undefined;
                        tango = 'threads';
                        entity = options.bind(report)(golf, oscar, tango);
                        _fun112947_ip = 193; continue _fun112947;
 166:
                        oscar = _closure1_slot16;
                        report = _closure1_slot27;
                        tango = {};
                        tango['channelId'] = mike;
                        zulu = undefined;
                        mike = 'search';
                        entity = oscar.bind(zulu)(report, tango, mike);
 193:
                        return entity;
                    }
                };
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            options = golf.bind(options)(tango, oscar);
            var _closure2_slot2 = options;
            golf = _closure1_slot3;
            oscar = golf.useMemo;
            verify = options.length;
            tango = new Array(3);
            tango[0] = verify;
            verify = zulu.buttonsSpacing;
            tango[1] = verify;
            zulu = zulu.buttonsTightSpacing;
            tango[2] = zulu;
            zulu = function() {
                _fun112948: for(var _fun112948_ip = 0; ; ) switch(_fun112948_ip) {
 0:
                    entity = _closure2_slot2;
                    zulu = entity.length;
                    entity = 2;
                    if(!(entity !== zulu)) { _fun112948_ip = 31; continue _fun112948 }
 19:
                    entity = _closure2_slot1;
                    entity = entity.buttonsSpacing;
                    _fun112948_ip = 41; continue _fun112948;
 31:
                    mike = _closure2_slot1;
                    entity = mike.buttonsTightSpacing;
 41:
                    return entity;
                }
            };
            verify = oscar.bind(golf)(zulu, tango);
            offset = _closure1_slot3;
            golf = offset.useContext;
            tango = _closure1_slot0;
            oscar = _closure1_slot2;
            zulu = 23;
            zulu = oscar[zulu];
            zulu = tango.bind(report)(zulu);
            zulu = zulu.SwipeForMemberListContext;
            offset = golf.bind(offset)(zulu);
            var _closure2_slot3 = offset;
            zulu = 9;
            zulu = oscar[zulu];
            oscar = tango.bind(report)(zulu);
            tango = oscar.useAnimatedScrollHandler;
            zulu = {};
            golf = function(argFoo) { // Original name: o
                _fun112949: for(var _fun112949_ip = 0; ; ) switch(_fun112949_ip) {
 0:
                    zulu = _closure2_slot3;
                    mike = null;
                    if(!(mike != zulu)) { _fun112949_ip = 53; continue _fun112949 }
 13:
                    entity = _closure2_slot3;
                    zulu = entity.disallowGesture;
                    mike = zulu.set;
                    entity = argFoo;
                    entity = entity.contentOffset;
                    tango = entity.x;
                    entity = 0;
                    entity = entity !== tango;
                    entity = mike.bind(zulu)(entity);
 53:
                    entity = undefined;
                    return entity;
                }
            };
            yankee = {};
            yankee['swipeForMemberListContext'] = offset;
            golf['__closure'] = yankee;
            yankee = 3002962882428.0;
            golf['__workletHash'] = yankee;
            yankee = _closure1_slot19;
            golf['__initData'] = yankee;
            zulu['onScroll'] = golf;
            golf = function() { // Original name: s
                _fun112950: for(var _fun112950_ip = 0; ; ) switch(_fun112950_ip) {
 0:
                    zulu = _closure2_slot3;
                    mike = null;
                    if(!(mike != zulu)) { _fun112950_ip = 35; continue _fun112950 }
 13:
                    entity = _closure2_slot3;
                    zulu = entity.disallowGesture;
                    mike = zulu.set;
                    entity = false;
                    entity = mike.bind(zulu)(entity);
 35:
                    entity = undefined;
                    return entity;
                }
            };
            yankee = {};
            yankee['swipeForMemberListContext'] = offset;
            golf['__closure'] = yankee;
            yankee = 3514082722415.0;
            golf['__workletHash'] = yankee;
            yankee = _closure1_slot20;
            golf['__initData'] = yankee;
            zulu['onEndDrag'] = golf;
            yankee = tango.bind(oscar)(zulu);
            oscar = _closure1_slot3;
            tango = oscar.useMemo;
            zulu = new Array(1);
            zulu[0] = offset;
            entity = function() {
                _fun112951: for(var _fun112951_ip = 0; ; ) switch(_fun112951_ip) {
 0:
                    zulu = _closure2_slot3;
                    entity = null;
                    zulu = entity == zulu;
                    if(zulu) { _fun112951_ip = 78; continue _fun112951 }
 16:
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    zulu = 24;
                    tango = tango[zulu];
                    zulu = undefined;
                    zulu = report.bind(zulu)(tango);
                    tango = zulu.Gesture;
                    zulu = tango.Native;
                    tango = zulu.bind(tango)();
                    zulu = tango.simultaneousWithExternalGesture;
                    mike = _closure2_slot3;
                    mike = mike.gestureRef;
                    entity = zulu.bind(tango)(mike);
 78:
                    return entity;
                }
            };
            golf = tango.bind(oscar)(entity, zulu);
            oscar = _closure1_slot16;
            tango = _closure1_slot17;
            entity = {'horizontal': true, 'alwaysBounceHorizontal': false};
            zulu = null;
            romeo = zulu != offset;
            offset = undefined;
            if(!romeo) { _fun112945_ip = 368; continue _fun112945 }
 365:
            offset = yankee;
 368:
            entity['onScroll'] = offset;
            entity['contentContainerStyle'] = verify;
            entity['children'] = options;
            oscar = oscar.bind(report)(tango, entity);
            entity = oscar;
            if(!(zulu != golf)) { _fun112945_ip = 442; continue _fun112945 }
 395:
            tango = _closure1_slot16;
            zulu = _closure1_slot0;
            options = _closure1_slot2;
            mike = 24;
            mike = options[mike];
            mike = zulu.bind(report)(mike);
            zulu = mike.GestureDetector;
            mike = {};
            mike['gesture'] = golf;
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 442:
            return entity;
        }
    };
    var _closure1_slot32 = entity;
    entity = function(argFoo) { // Original name: TransitionGroupItem
        _fun112952: for(var _fun112952_ip = 0; ; ) switch(_fun112952_ip) {
 0:
            entity = argFoo;
            report = entity.children;
            oscar = entity.width;
            var _closure2_slot0 = oscar;
            romeo = entity.transitionState;
            var _closure2_slot1 = romeo;
            backup = entity.cleanUp;
            var _closure2_slot2 = backup;
            tango = undefined;
            var _closure2_slot3 = tango;
            offset = _closure1_slot0;
            entity = _closure1_slot2;
            options = 9;
            golf = entity[options];
            verify = offset.bind(tango)(golf);
            golf = verify.useSharedValue;
            sizing = 25;
            entity = entity[sizing];
            entity = offset.bind(tango)(entity);
            entity = entity.TransitionStates;
            offset = entity.MOUNTED;
            entity = 0;
            if(!(romeo === offset)) { _fun112952_ip = 106; continue _fun112952 }
 103:
            entity = 1;
 106:
            foxtrot = golf.bind(verify)(entity);
            _closure2_slot3 = foxtrot;
            kilo = _closure1_slot0;
            entity = _closure1_slot2;
            golf = entity[options];
            offset = kilo.bind(tango)(golf);
            verify = offset.useAnimatedStyle;
            golf = function() { // Original name: u
                _fun112953: for(var _fun112953_ip = 0; ; ) switch(_fun112953_ip) {
 0:
                    entity = {};
                    options = _closure1_slot0;
                    verify = _closure1_slot2;
                    report = 26;
                    mike = verify[report];
                    golf = undefined;
                    backup = options.bind(golf)(mike);
                    foxtrot = backup.withSpring;
                    oscar = _closure2_slot3;
                    tango = oscar.get;
                    romeo = tango.bind(oscar)();
                    result = _closure1_slot14;
                    offset = function(argFoo) { // Original name: t
                        _fun112954: for(var _fun112954_ip = 0; ; ) switch(_fun112954_ip) {
 0:
                            entity = argFoo;
                            if(!entity) { _fun112954_ip = 54; continue _fun112954 }
 6:
                            zulu = _closure2_slot1;
                            report = _closure1_slot0;
                            tango = _closure1_slot2;
                            mike = 25;
                            tango = tango[mike];
                            mike = undefined;
                            mike = report.bind(mike)(tango);
                            mike = mike.TransitionStates;
                            mike = mike.YEETED;
                            entity = zulu === mike;
 54:
                            if(!entity) { _fun112954_ip = 103; continue _fun112954 }
 57:
                            zulu = _closure1_slot0;
                            mike = _closure1_slot2;
                            entity = 9;
                            entity = mike[entity];
                            mike = undefined;
                            tango = zulu.bind(mike)(entity);
                            zulu = tango.runOnJS;
                            entity = _closure2_slot2;
                            entity = zulu.bind(tango)(entity);
                            entity = entity.bind(mike)();
 103:
                            entity = undefined;
                            return entity;
                        }
                    };
                    oscar = {};
                    tango = _closure2_slot1;
                    oscar['transitionState'] = tango;
                    tango = 25;
                    tango = verify[tango];
                    tango = options.bind(golf)(tango);
                    tango = tango.TransitionStates;
                    oscar['TransitionStates'] = tango;
                    tango = 9;
                    kilo = verify[tango];
                    kilo = options.bind(golf)(kilo);
                    kilo = kilo.runOnJS;
                    oscar['runOnJS'] = kilo;
                    kilo = _closure2_slot2;
                    oscar['cleanUp'] = kilo;
                    offset['__closure'] = oscar;
                    oscar = 9346021878481.0;
                    offset['__workletHash'] = oscar;
                    oscar = _closure1_slot22;
                    offset['__initData'] = oscar;
                    output = 'respect-motion-settings';
                    update = backup;
                    echo = romeo;
                    sizing = offset;
                    oscar = update[foxtrot](echo, result, output, sizing, kilo);
                    entity['opacity'] = oscar;
                    report = verify[report];
                    oscar = options.bind(golf)(report);
                    report = oscar.withSpring;
                    tango = verify[tango];
                    offset = options.bind(golf)(tango);
                    verify = offset.interpolate;
                    golf = _closure2_slot3;
                    tango = golf.get;
                    options = tango.bind(golf)();
                    tango = _closure2_slot0;
                    golf = [0];
                    golf[1] = tango;
                    tango = [0, 1];
                    tango = verify.bind(offset)(options, tango, golf);
                    zulu = _closure1_slot14;
                    zulu = report.bind(oscar)(tango, zulu);
                    entity['width'] = zulu;
                    zulu = _closure2_slot3;
                    mike = zulu.get;
                    tango = mike.bind(zulu)();
                    mike = 'absolute';
                    zulu = 1;
                    if(!(zulu === tango)) { _fun112953_ip = 299; continue _fun112953 }
 295:
                    mike = 'relative';
 299:
                    entity['position'] = mike;
                    return entity;
                }
            };
            yankee = {};
            output = 26;
            output = entity[output];
            output = kilo.bind(tango)(output);
            output = output.withSpring;
            yankee['withSpring'] = output;
            yankee['opacity'] = foxtrot;
            output = _closure1_slot14;
            yankee['springChannelDetails'] = output;
            yankee['transitionState'] = romeo;
            sizing = entity[sizing];
            sizing = kilo.bind(tango)(sizing);
            sizing = sizing.TransitionStates;
            yankee['TransitionStates'] = sizing;
            sizing = entity[options];
            sizing = kilo.bind(tango)(sizing);
            sizing = sizing.runOnJS;
            yankee['runOnJS'] = sizing;
            yankee['cleanUp'] = backup;
            backup = entity[options];
            backup = kilo.bind(tango)(backup);
            backup = backup.interpolate;
            yankee['interpolate'] = backup;
            yankee['width'] = oscar;
            golf['__closure'] = yankee;
            yankee = 16190521948777.0;
            golf['__workletHash'] = yankee;
            yankee = _closure1_slot21;
            golf['__initData'] = yankee;
            golf = verify.bind(offset)(golf);
            yankee = _closure1_slot3;
            offset = yankee.useEffect;
            verify = new Array(2);
            verify[0] = foxtrot;
            verify[1] = romeo;
            zulu = function() {
                _fun112955: for(var _fun112955_ip = 0; ; ) switch(_fun112955_ip) {
 0:
                    tango = _closure2_slot3;
                    zulu = tango.set;
                    oscar = _closure2_slot1;
                    report = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 25;
                    mike = mike[entity];
                    entity = undefined;
                    mike = report.bind(entity)(mike);
                    mike = mike.TransitionStates;
                    report = mike.YEETED;
                    mike = 1;
                    if(!(oscar === report)) { _fun112955_ip = 62; continue _fun112955 }
 60:
                    mike = 0;
 62:
                    mike = zulu.bind(tango)(mike);
                    return entity;
                }
            };
            zulu = offset.bind(yankee)(zulu, verify);
            zulu = _closure1_slot16;
            mike = _closure1_slot1;
            entity = entity[options];
            entity = mike.bind(tango)(entity);
            mike = entity.View;
            entity = {};
            options = {};
            options['width'] = oscar;
            oscar = new Array(2);
            oscar[0] = options;
            oscar[1] = golf;
            entity['style'] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot33 = entity;
    entity = global;
    verify = entity.Object;
    golf = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(verify)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    golf = tango.bind(entity)(golf);
    var _closure1_slot3 = golf;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    verify = tango.View;
    var _closure1_slot4 = verify;
    verify = tango.ScrollView;
    tango = 2;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    offset = tango.setIsChannelDetailsSearchActive;
    var _closure1_slot8 = offset;
    tango = tango.useIsChannelDetailsSearchActive;
    var _closure1_slot9 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    offset = tango.BUTTON_DEFAULT_HEIGHT;
    var _closure1_slot10 = offset;
    offset = tango.CHANNEL_DETAILS_SEARCH_HEIGHT;
    var _closure1_slot11 = offset;
    romeo = tango.CHANNEL_DETAILS_TOP_MARGIN;
    offset = tango.ChannelDetailsButtonTypes;
    var _closure1_slot12 = offset;
    offset = tango.ChannelDetailsNavigatorScreens;
    var _closure1_slot13 = offset;
    tango = tango.springChannelDetails;
    var _closure1_slot14 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ChannelSettingsSections;
    var _closure1_slot15 = tango;
    backup = 8;
    tango = oscar[backup];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot16 = tango;
    tango = 9;
    tango = oscar[tango];
    options = options.bind(entity)(tango);
    tango = options.createAnimatedComponent;
    tango = tango.bind(options)(verify);
    var _closure1_slot17 = tango;
    tango = 10;
    tango = oscar[tango];
    verify = report.bind(entity)(tango);
    options = verify.createStyles;
    tango = {};
    yankee = 'center';
    offset = {'flexGrow': 1, 'flexDirection': 'row', 'justifyContent': 'center', 'gap': 48};
    tango['buttonsTightSpacing'] = offset;
    foxtrot = 24;
    offset = {'flexGrow': 1, 'flexDirection': 'row', 'justifyContent': 'space-evenly', 'paddingHorizontal': 24, 'gap': 24};
    tango['buttonsSpacing'] = offset;
    offset = {'flexGrow': 0, 'flexShrink': 1, 'alignItems': 'center'};
    tango['button'] = offset;
    offset = {};
    offset['marginTop'] = backup;
    tango['buttonText'] = offset;
    offset = {};
    offset['marginHorizontal'] = foxtrot;
    tango['buttons'] = offset;
    offset = {};
    offset['marginTop'] = romeo;
    romeo = 16;
    offset['marginBottom'] = romeo;
    tango['search'] = offset;
    offset = {};
    offset['justifyContent'] = yankee;
    tango['container'] = offset;
    tango = options.bind(verify)(tango);
    var _closure1_slot18 = tango;
    tango = {};
    options = 'function ChannelDetailsButtonsTsx1(event){const{swipeForMemberListContext}=this.__closure;var _swipeForMemberListCo;(_swipeForMemberListCo=swipeForMemberListContext)===null||_swipeForMemberListCo===void 0||_swipeForMemberListCo.disallowGesture.set(event.contentOffset.x!==0);}';
    tango['code'] = options;
    var _closure1_slot19 = tango;
    tango = {};
    options = 'function ChannelDetailsButtonsTsx2(){const{swipeForMemberListContext}=this.__closure;var _swipeForMemberListCo;(_swipeForMemberListCo=swipeForMemberListContext)===null||_swipeForMemberListCo===void 0||_swipeForMemberListCo.disallowGesture.set(false);}';
    tango['code'] = options;
    var _closure1_slot20 = tango;
    tango = {};
    options = "function ChannelDetailsButtonsTsx3(){const{withSpring,opacity,springChannelDetails,transitionState,TransitionStates,runOnJS,cleanUp,interpolate,width}=this.__closure;return{opacity:withSpring(opacity.get(),springChannelDetails,'respect-motion-settings',function(finished){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanUp)();}}),width:withSpring(interpolate(opacity.get(),[0,1],[0,width]),springChannelDetails),position:opacity.get()===1?'relative':'absolute'};}";
    tango['code'] = options;
    var _closure1_slot21 = tango;
    tango = {};
    options = 'function ChannelDetailsButtonsTsx4(finished){const{transitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanUp)();}}';
    tango['code'] = options;
    var _closure1_slot22 = tango;
    tango = {};
    options = 'buttons';
    tango['BUTTONS'] = options;
    options = 'search';
    tango['SEARCH'] = options;
    var _closure1_slot23 = tango;
    tango = {};
    options = 'function ChannelDetailsButtonsTsx5(){const{activeState}=this.__closure;return activeState;}';
    tango['code'] = options;
    var _closure1_slot24 = tango;
    tango = {};
    options = 'function ChannelDetailsButtonsTsx6(){const{withSpring,active,CHANNEL_DETAILS_SEARCH_HEIGHT,BUTTON_DEFAULT_HEIGHT,springChannelDetails}=this.__closure;return{minHeight:withSpring(active.get()?CHANNEL_DETAILS_SEARCH_HEIGHT:BUTTON_DEFAULT_HEIGHT,springChannelDetails)};}';
    tango['code'] = options;
    var _closure1_slot25 = tango;
    tango = golf.forwardRef;
    mike = function(argFoo, argBar) {
        entity = argFoo;
        sizing = argBar;
        echo = entity.channel;
        var _closure2_slot0 = echo;
        output = entity.onSuggestionsLayoutMesure;
        var _closure2_slot1 = output;
        zulu = entity.suggestionsDismissed;
        var _closure2_slot2 = zulu;
        kilo = entity.setSuggestionsDismissed;
        var _closure2_slot3 = kilo;
        result = entity.componentWidth;
        var _closure2_slot4 = result;
        var _closure2_slot5 = sizing;
        entity = _closure1_slot18;
        tango = undefined;
        golf = entity.bind(tango)();
        var _closure2_slot6 = golf;
        oscar = _closure1_slot9;
        entity = echo.id;
        options = oscar.bind(tango)(entity);
        var _closure2_slot7 = options;
        oscar = _closure1_slot0;
        yankee = _closure1_slot2;
        entity = 9;
        verify = yankee[entity];
        romeo = oscar.bind(tango)(verify);
        offset = romeo.useDerivedValue;
        verify = function() { // Original name: S
            entity = _closure2_slot7;
            return entity;
        };
        foxtrot = {};
        foxtrot['activeState'] = options;
        verify['__closure'] = foxtrot;
        foxtrot = 3976699103841.0;
        verify['__workletHash'] = foxtrot;
        foxtrot = _closure1_slot24;
        verify['__initData'] = foxtrot;
        backup = offset.bind(romeo)(verify);
        var _closure2_slot8 = backup;
        romeo = _closure1_slot3;
        offset = romeo.useMemo;
        verify = new Array(1);
        verify[0] = options;
        options = function() {
            _fun112958: for(var _fun112958_ip = 0; ; ) switch(_fun112958_ip) {
 0:
                entity = _closure2_slot7;
                mike = _closure1_slot23;
                if(entity) { _fun112958_ip = 33; continue _fun112958 }
 17:
                zulu = mike.BUTTONS;
                entity = new Array(1);
                entity[0] = zulu;
                _fun112958_ip = 50; continue _fun112958;
 33:
                zulu = mike.SEARCH;
                mike = new Array(1);
                mike[0] = zulu;
                entity = mike;
 50:
                return entity;
            }
        };
        offset = offset.bind(romeo)(options, verify);
        foxtrot = _closure1_slot3;
        romeo = foxtrot.useCallback;
        verify = function(argFoo) {
            entity = argFoo;
            return entity;
        };
        options = new Array(0);
        verify = romeo.bind(foxtrot)(verify, options);
        foxtrot = _closure1_slot3;
        romeo = foxtrot.useCallback;
        options = new Array(8);
        options[0] = echo;
        options[1] = result;
        options[2] = output;
        options[3] = sizing;
        options[4] = kilo;
        kilo = golf.buttons;
        options[5] = kilo;
        kilo = golf.search;
        options[6] = kilo;
        options[7] = zulu;
        zulu = function(argFoo, argBar, argBaz, argCorge) {
            _fun112960: for(var _fun112960_ip = 0; ; ) switch(_fun112960_ip) {
 0:
                report = argFoo;
                zulu = argBar;
                entity = argBaz;
                oscar = argCorge;
                mike = _closure1_slot23;
                mike = mike.BUTTONS;
                if(!(mike !== zulu)) { _fun112960_ip = 226; continue _fun112960 }
 32:
                mike = _closure1_slot23;
                mike = mike.SEARCH;
                if(!(mike !== zulu)) { _fun112960_ip = 50; continue _fun112960 }
 46:
                mike = undefined;
                return mike;
 50:
                golf = _closure1_slot16;
                tango = _closure1_slot33;
                zulu = {};
                zulu['transitionState'] = entity;
                mike = _closure2_slot4;
                zulu['width'] = mike;
                zulu['cleanUp'] = oscar;
                yankee = _closure1_slot16;
                offset = _closure1_slot4;
                options = {};
                mike = _closure2_slot6;
                mike = mike.search;
                options['style'] = mike;
                backup = _closure1_slot16;
                foxtrot = _closure1_slot1;
                romeo = _closure1_slot2;
                mike = 27;
                romeo = romeo[mike];
                mike = undefined;
                foxtrot = foxtrot.bind(mike)(romeo);
                romeo = {};
                sizing = _closure2_slot5;
                romeo['ref'] = sizing;
                sizing = _closure2_slot0;
                output = sizing.id;
                romeo['channelId'] = output;
                sizing = sizing.guild_id;
                romeo['guildId'] = sizing;
                sizing = _closure2_slot1;
                romeo['onSuggestionsLayoutMesure'] = sizing;
                sizing = _closure2_slot2;
                romeo['suggestionsDismissed'] = sizing;
                kilo = _closure2_slot3;
                romeo['setSuggestionsDismissed'] = kilo;
                kilo = true;
                romeo['showBackButton'] = kilo;
                romeo = backup.bind(mike)(foxtrot, romeo);
                options['children'] = romeo;
                options = yankee.bind(mike)(offset, options);
                zulu['children'] = options;
                mike = golf.bind(mike)(tango, zulu, report);
                return mike;
 226:
                tango = _closure1_slot16;
                zulu = _closure1_slot33;
                mike = {};
                mike['transitionState'] = entity;
                golf = _closure2_slot4;
                mike['width'] = golf;
                mike['cleanUp'] = oscar;
                options = _closure1_slot16;
                golf = _closure1_slot4;
                oscar = {};
                offset = _closure2_slot6;
                offset = offset.buttons;
                oscar['style'] = offset;
                yankee = _closure1_slot16;
                offset = _closure1_slot32;
                verify = {};
                entity = _closure2_slot0;
                verify['channel'] = entity;
                entity = undefined;
                verify = yankee.bind(entity)(offset, verify);
                oscar['children'] = verify;
                oscar = options.bind(entity)(golf, oscar);
                mike['children'] = oscar;
                entity = tango.bind(entity)(zulu, mike, report);
                return entity;
            }
        };
        options = romeo.bind(foxtrot)(zulu, options);
        zulu = yankee[entity];
        romeo = oscar.bind(tango)(zulu);
        zulu = romeo.useAnimatedStyle;
        mike = function() { // Original name: _
            _fun112961: for(var _fun112961_ip = 0; ; ) switch(_fun112961_ip) {
 0:
                entity = {};
                report = _closure1_slot0;
                tango = _closure1_slot2;
                zulu = 26;
                tango = tango[zulu];
                zulu = undefined;
                report = report.bind(zulu)(tango);
                tango = report.withSpring;
                oscar = _closure2_slot8;
                zulu = oscar.get;
                zulu = zulu.bind(oscar)();
                if(zulu) { _fun112961_ip = 57; continue _fun112961 }
 51:
                zulu = _closure1_slot10;
                _fun112961_ip = 61; continue _fun112961;
 57:
                zulu = _closure1_slot11;
 61:
                mike = _closure1_slot14;
                mike = tango.bind(report)(zulu, mike);
                entity['minHeight'] = mike;
                return entity;
            }
        };
        foxtrot = {};
        kilo = 26;
        kilo = yankee[kilo];
        kilo = oscar.bind(tango)(kilo);
        kilo = kilo.withSpring;
        foxtrot['withSpring'] = kilo;
        foxtrot['active'] = backup;
        backup = _closure1_slot11;
        foxtrot['CHANNEL_DETAILS_SEARCH_HEIGHT'] = backup;
        backup = _closure1_slot10;
        foxtrot['BUTTON_DEFAULT_HEIGHT'] = backup;
        backup = _closure1_slot14;
        foxtrot['springChannelDetails'] = backup;
        mike['__closure'] = foxtrot;
        foxtrot = 14518037237466.0;
        mike['__workletHash'] = foxtrot;
        foxtrot = _closure1_slot25;
        mike['__initData'] = foxtrot;
        romeo = zulu.bind(romeo)(mike);
        zulu = _closure1_slot16;
        mike = _closure1_slot1;
        entity = yankee[entity];
        entity = mike.bind(tango)(entity);
        mike = entity.View;
        entity = {};
        foxtrot = golf.container;
        golf = new Array(2);
        golf[0] = foxtrot;
        golf[1] = romeo;
        entity['style'] = golf;
        golf = _closure1_slot16;
        report = 25;
        report = yankee[report];
        report = oscar.bind(tango)(report);
        oscar = report.TransitionGroup;
        report = {};
        report['items'] = offset;
        report['getItemKey'] = verify;
        report['renderItem'] = options;
        report = golf.bind(tango)(oscar, report);
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    tango = tango.bind(golf)(mike);
    mike = golf.memo;
    mike = mike.bind(golf)(tango);
    tango = 28;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/sidebar/details/ChannelDetailsButtons.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();