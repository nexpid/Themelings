// app/design/components/Sheet/native/ActionSheetPresenter.native.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    options = oscar[tango];
    tango = argCorge;
    options = tango.bind(entity)(options);
    var _closure1_slot4 = options;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    verify = tango.Modal;
    var _closure1_slot5 = verify;
    tango = tango.StyleSheet;
    var _closure1_slot6 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.NOOP;
    var _closure1_slot8 = tango;
    tango = 5;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot9 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot10 = tango;
    golf = options.forwardRef;
    tango = function(argFoo, argBar) {
        _fun48784: for(var _fun48784_ip = 0; ; ) switch(_fun48784_ip) {
 0:
            mike = argFoo;
            yankee = mike.sheetKey;
            var _closure2_slot0 = yankee;
            offset = mike.content;
            kilo = mike.impressionName;
            romeo = mike.impressionProperties;
            options = _closure1_slot4;
            zulu = options.useState;
            mike = 'visible';
            report = zulu.bind(options)(mike);
            zulu = _closure1_slot3;
            tango = undefined;
            mike = 2;
            zulu = zulu.bind(tango)(report, mike);
            mike = 0;
            backup = zulu[mike];
            var _closure2_slot1 = backup;
            mike = 1;
            mike = zulu[mike];
            var _closure2_slot2 = mike;
            zulu = options.useRef;
            mike = _closure1_slot8;
            mike = zulu.bind(options)(mike);
            var _closure2_slot3 = mike;
            report = options.useCallback;
            zulu = function() {
                mike = _closure2_slot3;
                entity = mike.current;
                entity = entity.bind(mike)();
                entity = undefined;
                return entity;
            };
            mike = new Array(0);
            foxtrot = report.bind(options)(zulu, mike);
            var _closure2_slot4 = foxtrot;
            mike = _closure1_slot1;
            golf = _closure1_slot2;
            zulu = 6;
            zulu = golf[zulu];
            report = mike.bind(tango)(zulu);
            zulu = {};
            oscar = _closure1_slot0;
            sizing = 7;
            sizing = golf[sizing];
            sizing = oscar.bind(tango)(sizing);
            sizing = sizing.ImpressionTypes;
            sizing = sizing.HALFSHEET;
            zulu['type'] = sizing;
            zulu['name'] = kilo;
            zulu['properties'] = romeo;
            zulu = report.bind(tango)(zulu);
            kilo = options.useImperativeHandle;
            romeo = argBar;
            report = function() {
                entity = {};
                zulu = function() { // Original name: componentDidEnter
                    zulu = _closure2_slot2;
                    entity = undefined;
                    mike = 'visible';
                    mike = zulu.bind(entity)(mike);
                    return entity;
                };
                entity['componentDidEnter'] = zulu;
                zulu = function(argFoo) { // Original name: componentWillLeave
                    tango = _closure2_slot2;
                    entity = undefined;
                    zulu = 'exiting';
                    zulu = tango.bind(entity)(zulu);
                    zulu = _closure2_slot3;
                    mike = argFoo;
                    zulu['current'] = mike;
                    return entity;
                };
                entity['componentWillLeave'] = zulu;
                mike = function() { // Original name: componentDidLeave
                    tango = _closure2_slot2;
                    entity = undefined;
                    zulu = 'exited';
                    zulu = tango.bind(entity)(zulu);
                    zulu = _closure2_slot3;
                    mike = _closure1_slot8;
                    zulu['current'] = mike;
                    return entity;
                };
                entity['componentDidLeave'] = mike;
                return entity;
            };
            zulu = new Array(0);
            zulu = kilo.bind(options)(romeo, report, zulu);
            romeo = options.useCallback;
            report = new Array(1);
            report[0] = yankee;
            zulu = function() {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 8;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.hideActionSheet;
                mike = _closure2_slot0;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            romeo = romeo.bind(options)(zulu, report);
            var _closure2_slot5 = romeo;
            report = options.useMemo;
            zulu = new Array(3);
            zulu[0] = backup;
            zulu[1] = romeo;
            zulu[2] = foxtrot;
            entity = function() {
                entity = {};
                zulu = _closure2_slot1;
                entity['transitionState'] = zulu;
                zulu = _closure2_slot5;
                entity['close'] = zulu;
                mike = _closure2_slot4;
                entity['onLeave'] = mike;
                return entity;
            };
            report = report.bind(options)(entity, zulu);
            zulu = _closure1_slot9;
            entity = 9;
            entity = golf[entity];
            entity = oscar.bind(tango)(entity);
            options = entity.Dialog;
            entity = {};
            entity['dialogKey'] = yankee;
            entity['onDismiss'] = romeo;
            entity['children'] = offset;
            foxtrot = zulu.bind(tango)(options, entity);
            entity = 10;
            entity = golf[entity];
            entity = mike.bind(tango)(entity);
            mike = entity.Provider;
            entity = {};
            entity['value'] = report;
            report = 11;
            report = golf[report];
            oscar = oscar.bind(tango)(report);
            report = oscar.isAndroid;
            oscar = report.bind(oscar)();
            report = foxtrot;
            if(!oscar) { _fun48784_ip = 520; continue _fun48784 }
 382:
            options = _closure1_slot9;
            golf = _closure1_slot5;
            oscar = {'transparent': true, 'statusBarTranslucent': true, 'animationType': 'none'};
            sizing = _closure1_slot6;
            offset = sizing.absoluteFill;
            oscar['style'] = offset;
            oscar['onRequestClose'] = romeo;
            yankee = _closure1_slot10;
            backup = _closure1_slot0;
            kilo = _closure1_slot2;
            verify = 12;
            verify = kilo[verify];
            verify = backup.bind(tango)(verify);
            offset = verify.GestureHandlerRootView;
            verify = {};
            sizing = sizing.absoluteFill;
            verify['style'] = sizing;
            verify['onAccessibilityEscape'] = romeo;
            romeo = new Array(2);
            romeo[0] = foxtrot;
            foxtrot = 13;
            foxtrot = kilo[foxtrot];
            foxtrot = backup.bind(tango)(foxtrot);
            foxtrot = foxtrot.MOVED_TO_ACTION_SHEET_ON_ANDROID_COMPONENTS;
            romeo[1] = foxtrot;
            verify['children'] = romeo;
            verify = yankee.bind(tango)(offset, verify);
            oscar['children'] = verify;
            report = options.bind(tango)(golf, oscar);
 520:
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    tango = golf.bind(options)(tango);
    var _closure1_slot11 = tango;
    tango = 18;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'design/components/Sheet/native/ActionSheetPresenter.native.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: ActionSheetPresenter
        _fun48792: for(var _fun48792_ip = 0; ; ) switch(_fun48792_ip) {
 0:
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 14;
            mike = tango[mike];
            tango = undefined;
            options = zulu.bind(tango)(mike);
            golf = options.useStateFromStoresArray;
            mike = _closure1_slot7;
            report = new Array(1);
            report[0] = mike;
            zulu = function() {
                mike = _closure1_slot7;
                entity = mike.getStack;
                entity = entity.bind(mike)();
                return entity;
            };
            mike = new Array(0);
            zulu = golf.bind(options)(report, zulu, mike);
            report = zulu.at;
            mike = -1;
            report = report.bind(zulu)(mike);
            mike = null;
            golf = mike == report;
            mike = undefined;
            if(golf) { _fun48792_ip = 94; continue _fun48792 }
 89:
            mike = report.key;
 94:
            var _closure2_slot0 = mike;
            options = _closure1_slot4;
            golf = options.useCallback;
            report = new Array(1);
            report[0] = mike;
            mike = function() {
                _fun48794: for(var _fun48794_ip = 0; ; ) switch(_fun48794_ip) {
 0:
                    zulu = _closure2_slot0;
                    entity = null;
                    entity = entity != zulu;
                    if(!entity) { _fun48794_ip = 56; continue _fun48794 }
 16:
                    report = _closure1_slot1;
                    tango = _closure1_slot2;
                    zulu = 8;
                    tango = tango[zulu];
                    zulu = undefined;
                    tango = report.bind(zulu)(tango);
                    zulu = tango.hideActionSheet;
                    mike = _closure2_slot0;
                    mike = zulu.bind(tango)(mike);
 56:
                    return entity;
                }
            };
            report = golf.bind(options)(mike, report);
            golf = _closure1_slot1;
            options = _closure1_slot2;
            mike = 15;
            mike = options[mike];
            mike = golf.bind(tango)(mike);
            mike = mike.bind(tango)(report);
            mike = zulu.map;
            entity = function(argFoo) {
                entity = argFoo;
                golf = entity.content;
                report = entity.key;
                oscar = entity.impressionName;
                entity = entity.impressionProperties;
                tango = _closure1_slot9;
                zulu = _closure1_slot11;
                mike = {};
                mike['sheetKey'] = report;
                mike['content'] = golf;
                mike['impressionName'] = oscar;
                mike['impressionProperties'] = entity;
                entity = undefined;
                entity = tango.bind(entity)(zulu, mike, report);
                return entity;
            };
            report = mike.bind(zulu)(entity);
            zulu = _closure1_slot9;
            golf = _closure1_slot0;
            entity = 16;
            entity = options[entity];
            entity = golf.bind(tango)(entity);
            mike = entity.TransitionGroup;
            entity = {};
            oscar = _closure1_slot6;
            oscar = oscar.absoluteFill;
            entity['style'] = oscar;
            oscar = 17;
            oscar = options[oscar];
            oscar = golf.bind(tango)(oscar);
            oscar = oscar.TransitionGroupOverlayView;
            entity['component'] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['ActionSheetPresenter'] = mike;
    return entity;
})();