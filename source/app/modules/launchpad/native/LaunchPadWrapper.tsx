// app/modules/launchpad/native/LaunchPadWrapper.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    yankee = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
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
    golf = tango.View;
    var _closure1_slot5 = golf;
    golf = tango.Pressable;
    var _closure1_slot6 = golf;
    golf = tango.TouchableOpacity;
    var _closure1_slot7 = golf;
    tango = tango.StyleSheet;
    var _closure1_slot8 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.LaunchPadTypes;
    var _closure1_slot9 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.AnalyticEvents;
    var _closure1_slot10 = golf;
    tango = tango.ComponentActions;
    var _closure1_slot11 = tango;
    tango = 5;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot12 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot13 = tango;
    tango = 6;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {'height': '100%', 'width': '100%'};
    offset = 7;
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.spacing;
    romeo = romeo.PX_8;
    verify['paddingTop'] = romeo;
    tango['modalWrapper'] = verify;
    verify = {'position': 'absolute', 'top': 0, 'width': '100%'};
    offset = oscar[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.spacing;
    offset = offset.PX_8;
    verify['height'] = offset;
    tango['a11yDismiss'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot14 = tango;
    tango = 23;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/launchpad/native/LaunchPadWrapper.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: LaunchPadWrapper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            options = mike.launchPadType;
            var _closure2_slot0 = options;
            kilo = mike.gestureState;
            zulu = mike.launchPadShown;
            echo = mike.launchPadSharedState;
            backup = mike.launchPadPullTabState;
            foxtrot = mike.updaters;
            var _closure2_slot1 = foxtrot;
            mike = _closure1_slot14;
            tango = undefined;
            source = mike.bind(tango)();
            oscar = _closure1_slot1;
            report = _closure1_slot2;
            mike = 10;
            mike = report[mike];
            golf = oscar.bind(tango)(mike);
            mike = {};
            mike['launchPadSharedState'] = echo;
            mike['launchPadShown'] = zulu;
            mike['gestureState'] = kilo;
            mike = golf.bind(tango)(mike);
            verify = mike.launchPadCoverStyles;
            offset = mike.launchPadStyles;
            mike = 11;
            mike = report[mike];
            mike = oscar.bind(tango)(mike);
            update = mike.bind(tango)(zulu);
            var _closure2_slot2 = update;
            romeo = _closure1_slot4;
            golf = romeo.useRef;
            mike = !update;
            mike = golf.bind(romeo)(mike);
            var _closure2_slot3 = mike;
            yankee = romeo.useState;
            golf = {};
            output = yankee.bind(romeo)(golf);
            yankee = _closure1_slot3;
            golf = 2;
            yankee = yankee.bind(tango)(output, golf);
            golf = 1;
            golf = yankee[golf];
            var _closure2_slot4 = golf;
            output = romeo.useEffect;
            yankee = new Array(1);
            yankee[0] = update;
            golf = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zulu = _closure2_slot2;
                    if(zulu) { _fun00004_ip = 54; continue _fun00003 }
 12:
                    zulu = global;
                    oscar = zulu.setTimeout;
                    report = undefined;
                    tango = function() {
                        zulu = _closure2_slot3;
                        mike = true;
                        zulu['current'] = mike;
                        zulu = _closure2_slot4;
                        entity = undefined;
                        mike = {};
                        mike = zulu.bind(entity)(mike);
                        return entity;
                    };
                    zulu = 1000;
                    zulu = oscar.bind(report)(tango, zulu);
                    var _closure3_slot0 = zulu;
                    mike = function() {
                        entity = global;
                        zulu = entity.clearTimeout;
                        mike = _closure3_slot0;
                        entity = undefined;
                        entity = zulu.bind(entity)(mike);
                        return entity;
                    };
                    return mike;
 54:
                    mike = _closure2_slot3;
                    entity = false;
                    mike['current'] = entity;
                    entity = undefined;
                    return entity;
                }
            };
            golf = output.bind(romeo)(golf, yankee);
            output = romeo.useCallback;
            yankee = new Array(1);
            yankee[0] = foxtrot;
            golf = function() {
                zulu = _closure2_slot1;
                mike = zulu.setLaunchPadPosition;
                entity = 0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            control = output.bind(romeo)(golf, yankee);
            var _closure2_slot5 = control;
            output = romeo.useEffect;
            yankee = new Array(1);
            yankee[0] = update;
            golf = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = _closure2_slot2;
                    if(!entity) { _fun00006_ip = 55; continue _fun00005 }
 10:
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    mike = 12;
                    zulu = zulu[mike];
                    mike = undefined;
                    zulu = tango.bind(mike)(zulu);
                    mike = zulu.track;
                    entity = _closure1_slot10;
                    entity = entity.LAUNCHPAD_OPENED;
                    entity = mike.bind(zulu)(entity);
 55:
                    entity = undefined;
                    return entity;
                }
            };
            golf = output.bind(romeo)(golf, yankee);
            output = romeo.useEffect;
            yankee = new Array(2);
            yankee[0] = options;
            yankee[1] = update;
            golf = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    tango = _closure2_slot0;
                    zulu = _closure1_slot9;
                    zulu = zulu.PULL_TAB;
                    if(!(tango === zulu)) { _fun00008_ip = 117; continue _fun00007 }
 24:
                    tango = _closure1_slot0;
                    report = _closure1_slot2;
                    zulu = 13;
                    zulu = report[zulu];
                    oscar = undefined;
                    tango = tango.bind(oscar)(zulu);
                    zulu = tango.setLaunchPadPullTabExclusionRect;
                    zulu = zulu.bind(tango)();
                    mike = _closure2_slot2;
                    if(!mike) { _fun00008_ip = 149; continue _fun00007 }
 63:
                    report = _closure1_slot0;
                    golf = _closure1_slot2;
                    mike = 14;
                    zulu = golf[mike];
                    tango = report.bind(oscar)(zulu);
                    zulu = tango.triggerHapticFeedback;
                    mike = golf[mike];
                    mike = report.bind(oscar)(mike);
                    mike = mike.HapticFeedbackTypes;
                    mike = mike.IMPACT_LIGHT;
                    mike = zulu.bind(tango)(mike);
                    _fun00008_ip = 149; continue _fun00007;
 117:
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 13;
                    mike = mike[entity];
                    entity = undefined;
                    mike = zulu.bind(entity)(mike);
                    entity = mike.clearLaunchPadPullTabExclusionRect;
                    entity = entity.bind(mike)();
 149:
                    entity = undefined;
                    return entity;
                }
            };
            golf = output.bind(romeo)(golf, yankee);
            yankee = romeo.useEffect;
            golf = new Array(1);
            golf[0] = zulu;
            zulu = function() {
                entity = function() {
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 13;
                    mike = mike[entity];
                    entity = undefined;
                    mike = zulu.bind(entity)(mike);
                    entity = mike.clearLaunchPadPullTabExclusionRect;
                    entity = entity.bind(mike)();
                    return entity;
                };
                return entity;
            };
            zulu = yankee.bind(romeo)(zulu, golf);
            zulu = 15;
            zulu = report[zulu];
            golf = oscar.bind(tango)(zulu);
            zulu = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    mike = _closure2_slot2;
                    if(!mike) { _fun00010_ip = 20; continue _fun00009 }
 10:
                    zulu = _closure2_slot5;
                    mike = undefined;
                    mike = zulu.bind(mike)();
 20:
                    entity = _closure2_slot2;
                    return entity;
                }
            };
            zulu = golf.bind(tango)(zulu);
            entity = function(argFoo) { // Original name: useLaunchPadComponentDispatchListeners
                report = argFoo;
                var _closure3_slot0 = report;
                tango = _closure1_slot4;
                zulu = tango.useEffect;
                mike = new Array(1);
                mike[0] = report;
                entity = function() {
                    tango = _closure1_slot1;
                    golf = _closure1_slot2;
                    zulu = 8;
                    zulu = golf[zulu];
                    oscar = undefined;
                    report = tango.bind(oscar)(zulu);
                    tango = report.addRouteChangeListener;
                    zulu = function() {
                        zulu = _closure3_slot0;
                        mike = zulu.setLaunchPadPosition;
                        entity = 0;
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    zulu = tango.bind(report)(zulu);
                    var _closure4_slot0 = zulu;
                    yankee = function() { // Original name: showLaunchPad
                        zulu = _closure3_slot0;
                        mike = zulu.setLaunchPadShown;
                        entity = true;
                        entity = mike.bind(zulu)(entity);
                        mike = zulu.setLaunchPadPosition;
                        entity = 1;
                        entity = mike.bind(zulu)(entity);
                        entity = undefined;
                        return entity;
                    };
                    var _closure4_slot1 = yankee;
                    report = function() { // Original name: hideLaunchPad
                        zulu = _closure3_slot0;
                        mike = zulu.setLaunchPadShown;
                        entity = false;
                        entity = mike.bind(zulu)(entity);
                        mike = zulu.setLaunchPadPosition;
                        entity = 0;
                        entity = mike.bind(zulu)(entity);
                        entity = undefined;
                        return entity;
                    };
                    var _closure4_slot2 = report;
                    tango = _closure1_slot0;
                    zulu = 9;
                    options = golf[zulu];
                    options = tango.bind(oscar)(options);
                    offset = options.ComponentDispatch;
                    verify = offset.subscribe;
                    mike = _closure1_slot11;
                    options = mike.LAUNCH_PAD_SHOW;
                    options = verify.bind(offset)(options, yankee);
                    zulu = golf[zulu];
                    zulu = tango.bind(oscar)(zulu);
                    tango = zulu.ComponentDispatch;
                    zulu = tango.subscribe;
                    mike = mike.LAUNCH_PAD_HIDE;
                    mike = zulu.bind(tango)(mike, report);
                    entity = function() {
                        zulu = _closure4_slot0;
                        entity = undefined;
                        zulu = zulu.bind(entity)();
                        report = _closure1_slot0;
                        oscar = _closure1_slot2;
                        tango = 9;
                        golf = oscar[tango];
                        golf = report.bind(entity)(golf);
                        offset = golf.ComponentDispatch;
                        verify = offset.unsubscribe;
                        zulu = _closure1_slot11;
                        options = zulu.LAUNCH_PAD_SHOW;
                        golf = _closure4_slot1;
                        golf = verify.bind(offset)(options, golf);
                        tango = oscar[tango];
                        tango = report.bind(entity)(tango);
                        report = tango.ComponentDispatch;
                        tango = report.unsubscribe;
                        zulu = zulu.LAUNCH_PAD_HIDE;
                        mike = _closure4_slot2;
                        mike = tango.bind(report)(zulu, mike);
                        return entity;
                    };
                    return entity;
                };
                entity = zulu.bind(tango)(entity, mike);
                entity = undefined;
                return entity;
            };
            entity = entity.bind(tango)(foxtrot);
            entity = 16;
            entity = report[entity];
            entity = oscar.bind(tango)(entity);
            result = entity.bind(tango)(mike);
            zulu = _closure1_slot13;
            mike = _closure1_slot5;
            entity = {};
            golf = _closure1_slot8;
            golf = golf.absoluteFill;
            entity['style'] = golf;
            golf = 'box-none';
            entity['pointerEvents'] = golf;
            golf = _closure1_slot12;
            yankee = 17;
            report = report[yankee];
            report = oscar.bind(tango)(report);
            oscar = report.View;
            report = {};
            report['style'] = verify;
            verify = 'none';
            report['pointerEvents'] = verify;
            oscar = golf.bind(tango)(oscar, report);
            report = new Array(3);
            report[0] = oscar;
            oscar = _closure1_slot9;
            golf = oscar.PULL_TAB;
            oscar = null;
            if(!(options === golf)) { _fun00002_ip = 538; continue _fun00001 }
 486:
            romeo = _closure1_slot12;
            options = _closure1_slot1;
            output = _closure1_slot2;
            golf = 18;
            golf = output[golf];
            options = options.bind(tango)(golf);
            golf = {};
            golf['gestureState'] = kilo;
            golf['launchPadSharedState'] = echo;
            golf['launchPadPullTabState'] = backup;
            golf['updaters'] = foxtrot;
            oscar = romeo.bind(tango)(options, golf);
 538:
            report[1] = oscar;
            options = _closure1_slot12;
            golf = _closure1_slot1;
            oscar = _closure1_slot2;
            oscar = oscar[yankee];
            oscar = golf.bind(tango)(oscar);
            golf = oscar.View;
            oscar = {};
            oscar['style'] = offset;
            if(!update) { _fun00002_ip = 579; continue _fun00001 }
 577:
            verify = undefined;
 579:
            oscar['pointerEvents'] = verify;
            yankee = _closure1_slot13;
            backup = _closure1_slot0;
            output = _closure1_slot2;
            verify = 19;
            verify = output[verify];
            verify = backup.bind(tango)(verify);
            offset = verify.AccessibilityView;
            verify = {};
            romeo = 'launch-pad';
            verify['nativeID'] = romeo;
            romeo = source.modalWrapper;
            verify['style'] = romeo;
            verify['onAccessibilityEscape'] = control;
            verify['accessibilityViewIsModal'] = update;
            kilo = _closure1_slot12;
            foxtrot = _closure1_slot6;
            romeo = {};
            vacuum = 'button';
            romeo['accessibilityRole'] = vacuum;
            vacuum = 20;
            sequence = output[vacuum];
            sequence = backup.bind(tango)(sequence);
            config = sequence.intl;
            sequence = config.string;
            vacuum = output[vacuum];
            vacuum = backup.bind(tango)(vacuum);
            vacuum = vacuum.t;
            vacuum = vacuum.WAI6xs;
            vacuum = sequence.bind(config)(vacuum);
            romeo['accessibilityLabel'] = vacuum;
            romeo['onPress'] = control;
            source = source.a11yDismiss;
            romeo['style'] = source;
            foxtrot = kilo.bind(tango)(foxtrot, romeo);
            romeo = new Array(3);
            romeo[0] = foxtrot;
            source = _closure1_slot7;
            foxtrot = {'accessible': false, 'aria-hidden': true};
            foxtrot['onPress'] = control;
            control = _closure1_slot8;
            control = control.absoluteFillObject;
            foxtrot['style'] = control;
            foxtrot = kilo.bind(tango)(source, foxtrot);
            romeo[1] = foxtrot;
            foxtrot = 21;
            foxtrot = output[foxtrot];
            foxtrot = backup.bind(tango)(foxtrot);
            backup = foxtrot.Freeze;
            foxtrot = {};
            output = !update;
            if(!output) { _fun00002_ip = 815; continue _fun00001 }
 812:
            output = result;
 815:
            foxtrot['freeze'] = output;
            result = _closure1_slot12;
            output = _closure1_slot1;
            source = _closure1_slot2;
            sizing = 22;
            sizing = source[sizing];
            output = output.bind(tango)(sizing);
            sizing = {};
            sizing['visible'] = update;
            sizing['sharedState'] = echo;
            sizing = result.bind(tango)(output, sizing);
            foxtrot['children'] = sizing;
            foxtrot = kilo.bind(tango)(backup, foxtrot);
            romeo[2] = foxtrot;
            verify['children'] = romeo;
            verify = yankee.bind(tango)(offset, verify);
            oscar['children'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[2] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();