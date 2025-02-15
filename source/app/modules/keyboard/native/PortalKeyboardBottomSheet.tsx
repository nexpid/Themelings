// app/modules/keyboard/native/PortalKeyboardBottomSheet.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    romeo = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = romeo;
    var _closure1_slot2 = golf;
    entity = function(argFoo) { // Original name: PortalKeyboardBottomSheetHeader
        mike = argFoo;
        yankee = mike.style;
        verify = mike.handleCollapse;
        sizing = mike.isFullyExpanded;
        var _closure2_slot0 = sizing;
        tango = undefined;
        var _closure2_slot1 = tango;
        backup = function(argFoo) { // Original name: handleExpanded
            zulu = _closure2_slot1;
            entity = argFoo;
            mike = !entity;
            entity = undefined;
            mike = zulu.bind(entity)(mike);
            return entity;
        };
        var _closure2_slot2 = backup;
        mike = _closure1_slot13;
        golf = mike.bind(tango)();
        oscar = _closure1_slot4;
        zulu = oscar.useState;
        mike = false;
        oscar = zulu.bind(oscar)(mike);
        zulu = _closure1_slot3;
        mike = 2;
        zulu = zulu.bind(tango)(oscar, mike);
        mike = 0;
        options = zulu[mike];
        mike = 1;
        mike = zulu[mike];
        _closure2_slot1 = mike;
        oscar = _closure1_slot0;
        offset = _closure1_slot2;
        kilo = 12;
        mike = offset[kilo];
        romeo = oscar.bind(tango)(mike);
        zulu = romeo.useAnimatedReaction;
        mike = function() { // Original name: c
            mike = _closure2_slot0;
            entity = mike.get;
            entity = entity.bind(mike)();
            return entity;
        };
        foxtrot = {};
        foxtrot['isFullyExpanded'] = sizing;
        mike['__closure'] = foxtrot;
        foxtrot = 244305281729.0;
        mike['__workletHash'] = foxtrot;
        foxtrot = _closure1_slot14;
        mike['__initData'] = foxtrot;
        entity = function(argFoo, argBar) { // Original name: u
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zulu = argFoo;
                entity = argBar;
                if(!(zulu !== entity)) { _fun00002_ip = 57; continue _fun00001 }
 10:
                tango = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 12;
                entity = mike[entity];
                mike = undefined;
                report = tango.bind(mike)(entity);
                tango = report.runOnJS;
                entity = _closure2_slot2;
                entity = tango.bind(report)(entity);
                entity = entity.bind(mike)(zulu);
 57:
                entity = undefined;
                return entity;
            }
        };
        foxtrot = {};
        kilo = offset[kilo];
        kilo = oscar.bind(tango)(kilo);
        kilo = kilo.runOnJS;
        foxtrot['runOnJS'] = kilo;
        foxtrot['handleExpanded'] = backup;
        entity['__closure'] = foxtrot;
        foxtrot = 8631524528250.0;
        entity['__workletHash'] = foxtrot;
        foxtrot = _closure1_slot15;
        entity['__initData'] = foxtrot;
        entity = zulu.bind(romeo)(mike, entity);
        zulu = _closure1_slot10;
        mike = _closure1_slot5;
        entity = {};
        romeo = golf.headerContainer;
        golf = new Array(2);
        golf[0] = romeo;
        golf[1] = yankee;
        entity['style'] = golf;
        golf = _closure1_slot10;
        report = 11;
        report = offset[report];
        report = oscar.bind(tango)(report);
        oscar = report.ActionSheetDragHandle;
        report = {};
        report['onPress'] = verify;
        report['aria-hidden'] = options;
        report = golf.bind(tango)(oscar, report);
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot22 = entity;
    mike = function(argFoo) { // Original name: usePortalKeyboardBottomSheetAnimationProps
        report = argFoo;
        var _closure2_slot0 = report;
        tango = _closure1_slot0;
        golf = _closure1_slot2;
        zulu = 13;
        oscar = golf[zulu];
        options = undefined;
        yankee = tango.bind(options)(oscar);
        offset = yankee.useStateFromStores;
        oscar = _closure1_slot6;
        verify = new Array(1);
        verify[0] = oscar;
        oscar = function() {
            entity = _closure1_slot6;
            entity = entity.useReducedMotion;
            return entity;
        };
        oscar = offset.bind(yankee)(verify, oscar);
        var _closure2_slot1 = oscar;
        zulu = golf[zulu];
        verify = tango.bind(options)(zulu);
        golf = verify.useStateFromStoresArray;
        zulu = _closure1_slot8;
        tango = new Array(1);
        tango[0] = zulu;
        zulu = function() {
            entity = _closure1_slot8;
            zulu = entity.wasSystemKeyboardOpen;
            entity = new Array(2);
            entity[0] = zulu;
            mike = _closure1_slot8;
            mike = mike.previousKeyboardType;
            entity[1] = mike;
            return entity;
        };
        golf = golf.bind(verify)(tango, zulu);
        tango = _closure1_slot3;
        zulu = 2;
        tango = tango.bind(options)(golf, zulu);
        zulu = 0;
        options = tango[zulu];
        var _closure2_slot2 = options;
        zulu = 1;
        golf = tango[zulu];
        var _closure2_slot3 = golf;
        tango = _closure1_slot4;
        zulu = tango.useMemo;
        mike = new Array(4);
        mike[0] = options;
        mike[1] = golf;
        mike[2] = oscar;
        mike[3] = report;
        entity = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                entity = _closure2_slot2;
                if(entity) { _fun00004_ip = 54; continue _fun00003 }
 10:
                tango = _closure2_slot3;
                entity = _closure1_slot9;
                entity = entity.SYSTEM;
                if(!(tango === entity)) { _fun00004_ip = 54; continue _fun00003 }
 31:
                entity = {};
                mike = _closure1_slot12;
                if(!mike) { _fun00004_ip = 47; continue _fun00003 }
 40:
                tango = _closure2_slot1;
                mike = !tango;
 47:
                entity['animateOnMount'] = mike;
                _fun00004_ip = 75; continue _fun00003;
 54:
                mike = {};
                zulu = _closure2_slot0;
                mike['initialPosition'] = zulu;
                zulu = false;
                mike['animateOnMount'] = zulu;
                entity = mike;
 75:
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot23 = mike;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = romeo.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    options = golf[report];
    report = argCorge;
    report = report.bind(entity)(options);
    var _closure1_slot4 = report;
    report = 2;
    report = golf[report];
    report = oscar.bind(entity)(report);
    options = report.Platform;
    report = report.View;
    var _closure1_slot5 = report;
    report = 3;
    report = golf[report];
    report = romeo.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 4;
    report = golf[report];
    report = romeo.bind(entity)(report);
    var _closure1_slot7 = report;
    report = 5;
    report = golf[report];
    report = romeo.bind(entity)(report);
    var _closure1_slot8 = report;
    report = 6;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.KeyboardTypes;
    var _closure1_slot9 = report;
    report = 7;
    options = golf[report];
    options = oscar.bind(entity)(options);
    options = options.jsx;
    var _closure1_slot10 = options;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.jsxs;
    var _closure1_slot11 = report;
    report = 8;
    report = golf[report];
    options = oscar.bind(entity)(report);
    report = options.isIOS;
    report = report.bind(options)();
    var _closure1_slot12 = report;
    report = 9;
    report = golf[report];
    verify = oscar.bind(entity)(report);
    options = verify.createStyles;
    report = {};
    offset = {'position': 'absolute', 'top': 0, 'left': 0};
    report['container'] = offset;
    offset = {};
    yankee = 10;
    foxtrot = golf[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.colors;
    foxtrot = foxtrot.BG_BASE_SECONDARY;
    offset['backgroundColor'] = foxtrot;
    foxtrot = 'hidden';
    offset['overflow'] = foxtrot;
    report['background'] = offset;
    offset = {};
    foxtrot = golf[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.radii;
    foxtrot = foxtrot.none;
    offset['borderTopLeftRadius'] = foxtrot;
    foxtrot = golf[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.radii;
    foxtrot = foxtrot.none;
    offset['borderTopRightRadius'] = foxtrot;
    foxtrot = '100%';
    offset['width'] = foxtrot;
    foxtrot = 11;
    backup = golf[foxtrot];
    backup = oscar.bind(entity)(backup);
    backup = backup.ACTION_SHEET_DRAG_HANDLE_HEIGHT;
    offset['height'] = backup;
    foxtrot = golf[foxtrot];
    foxtrot = oscar.bind(entity)(foxtrot);
    foxtrot = foxtrot.ACTION_SHEET_DRAG_HANDLE_HEIGHT;
    foxtrot = -foxtrot;
    offset['marginBottom'] = foxtrot;
    report['headerContainer'] = offset;
    offset = {'overflow': 'hidden', 'display': 'flex'};
    yankee = golf[yankee];
    yankee = romeo.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.BG_BASE_SECONDARY;
    offset['backgroundColor'] = yankee;
    report['roundingView'] = offset;
    report = options.bind(verify)(report);
    var _closure1_slot13 = report;
    report = {};
    options = 'function PortalKeyboardBottomSheetTsx1(){const{isFullyExpanded}=this.__closure;return isFullyExpanded.get();}';
    report['code'] = options;
    var _closure1_slot14 = report;
    report = {};
    options = 'function PortalKeyboardBottomSheetTsx2(i,prev){const{runOnJS,handleExpanded}=this.__closure;if(i===prev)return;runOnJS(handleExpanded)(i);}';
    report['code'] = options;
    var _closure1_slot15 = report;
    report = {};
    options = 'function PortalKeyboardBottomSheetTsx3(){const{animatedIndex}=this.__closure;return animatedIndex.get()>0.975;}';
    report['code'] = options;
    var _closure1_slot16 = report;
    report = {};
    options = 'function PortalKeyboardBottomSheetTsx4(){const{isFullyExpanded}=this.__closure;return isFullyExpanded.get();}';
    report['code'] = options;
    var _closure1_slot17 = report;
    report = {};
    options = 'function PortalKeyboardBottomSheetTsx5(isFullyExpanded,isFullExpandedPrevious){const{runOnJS,dismissGlobalKeyboard}=this.__closure;if(isFullExpandedPrevious==null){return;}if(!isFullyExpanded){runOnJS(dismissGlobalKeyboard)();}}';
    report['code'] = options;
    var _closure1_slot18 = report;
    report = {};
    options = "function PortalKeyboardBottomSheetTsx6(){const{interpolate,animatedIndex}=this.__closure;return{borderTopLeftRadius:interpolate(animatedIndex.get(),[0,1],[0,15],'clamp'),borderTopRightRadius:interpolate(animatedIndex.get(),[0,1],[0,15],'clamp')};}";
    report['code'] = options;
    var _closure1_slot19 = report;
    report = {};
    options = 'function PortalKeyboardBottomSheetTsx7(){const{animatedIndex}=this.__closure;return Math.max(animatedIndex.get(),0)>0;}';
    report['code'] = options;
    var _closure1_slot20 = report;
    report = {};
    options = 'function PortalKeyboardBottomSheetTsx8(result,previous){const{runOnJS,setAccessibilityViewIsModal}=this.__closure;if(result===previous)return;runOnJS(setAccessibilityViewIsModal)(result);}';
    report['code'] = options;
    var _closure1_slot21 = report;
    report = 30;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/keyboard/native/PortalKeyboardBottomSheet.tsx';
    report = oscar.bind(golf)(report);
    tango = function(argFoo) { // Original name: PortalKeyboardBottomSheet
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            vacuum = entity.chatInputRef;
            var _closure2_slot0 = vacuum;
            output = entity.children;
            report = entity.refKey;
            var _closure2_slot1 = report;
            variable38 = entity.animationConfigs;
            variable37 = entity.onClose;
            var _closure2_slot2 = variable37;
            mike = entity.transitionState;
            target = entity.backdropComponent;
            sequence = entity.headerStyle;
            var _closure2_slot3 = sequence;
            control = entity.disableHeaderRoundingAnimation;
            source = entity.roundingViewStyle;
            result = entity.onAnimate;
            var _closure2_slot4 = result;
            kilo = entity.rendersHandle;
            tango = undefined;
            if(!(kilo === tango)) { _fun00006_ip = 104; continue _fun00005 }
 102:
            kilo = true;
 104:
            var _closure2_slot5 = kilo;
            config = entity.height;
            var _closure2_slot6 = config;
            yankee = entity.width;
            var _closure2_slot7 = tango;
            var _closure2_slot8 = tango;
            var _closure2_slot9 = tango;
            var _closure2_slot10 = tango;
            var _closure2_slot11 = tango;
            var _closure2_slot12 = tango;
            var _closure2_slot13 = tango;
            entity = _closure1_slot13;
            update = entity.bind(tango)();
            oscar = _closure1_slot4;
            zulu = oscar.useContext;
            variable46 = _closure1_slot0;
            variable45 = _closure1_slot2;
            entity = 14;
            entity = variable45[entity];
            entity = variable46.bind(tango)(entity);
            entity = entity.PortalKeyboardContext;
            entity = zulu.bind(oscar)(entity);
            foxtrot = entity.animatedSheetIndex;
            _closure2_slot7 = foxtrot;
            quebec = entity.animatedSheetPosition;
            oscar = entity.androidNavScrimStyle;
            entity = entity.bottomSheetRefs;
            sizing = entity[report];
            _closure2_slot8 = sizing;
            entity = 15;
            entity = variable45[entity];
            zulu = variable46.bind(tango)(entity);
            entity = zulu.useAndroidNavScrim;
            entity = entity.bind(zulu)(oscar);
            golf = entity.scrim;
            entity = 16;
            entity = variable45[entity];
            zulu = variable46.bind(tango)(entity);
            entity = zulu.useKeyboardActionSheetHeight;
            entity = entity.bind(zulu)();
            zulu = entity.minimum;
            _closure2_slot9 = zulu;
            context = entity.maximum;
            _closure2_slot10 = context;
            entity = 17;
            entity = variable45[entity];
            entity = variable46.bind(tango)(entity);
            entity = entity.TransitionStates;
            entity = entity.YEETED;
            entity = mike === entity;
            _closure2_slot11 = entity;
            verify = _closure1_slot4;
            options = verify.useLayoutEffect;
            oscar = new Array(2);
            oscar[0] = sizing;
            oscar[1] = entity;
            mike = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    mike = _closure2_slot11;
                    if(!mike) { _fun00008_ip = 35; continue _fun00007 }
 10:
                    entity = _closure2_slot8;
                    mike = entity.current;
                    entity = null;
                    if(!(entity != mike)) { _fun00008_ip = 35; continue _fun00007 }
 25:
                    entity = mike.forceClose;
                    entity = entity.bind(mike)();
 35:
                    entity = undefined;
                    return entity;
                }
            };
            mike = options.bind(verify)(mike, oscar);
            mike = 13;
            oscar = variable45[mike];
            romeo = variable46.bind(tango)(oscar);
            verify = romeo.useStateFromStores;
            oscar = _closure1_slot7;
            options = new Array(1);
            options[0] = oscar;
            oscar = function() {
                mike = _closure1_slot7;
                entity = mike.isOpen;
                entity = entity.bind(mike)();
                return entity;
            };
            oscar = verify.bind(romeo)(options, oscar);
            mike = variable45[mike];
            romeo = variable46.bind(tango)(mike);
            verify = romeo.useStateFromStoresObject;
            mike = _closure1_slot8;
            options = new Array(1);
            options[0] = mike;
            mike = function() {
                entity = {};
                zulu = _closure1_slot8;
                zulu = zulu.keyboardOpen;
                entity['isKeyboardOpen'] = zulu;
                mike = _closure1_slot8;
                mike = mike.keyboardType;
                entity['keyboardType'] = mike;
                return entity;
            };
            mike = verify.bind(romeo)(options, mike);
            options = mike.isKeyboardOpen;
            whiskey = mike.keyboardType;
            mike = _closure1_slot9;
            lima = mike.EXPRESSION;
            mike = 18;
            mike = variable45[mike];
            verify = variable46.bind(tango)(mike);
            mike = verify.useIsScreenReaderEnabled;
            mike = mike.bind(verify)();
            record = _closure1_slot4;
            backup = record.useMemo;
            romeo = new Array(3);
            romeo[0] = config;
            romeo[1] = zulu;
            romeo[2] = context;
            verify = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zulu = _closure2_slot6;
                    entity = null;
                    if(!(entity == zulu)) { _fun00010_ip = 35; continue _fun00009 }
 13:
                    zulu = _closure2_slot9;
                    entity = new Array(2);
                    entity[0] = zulu;
                    zulu = _closure2_slot10;
                    entity[1] = zulu;
                    _fun00010_ip = 54; continue _fun00009;
 35:
                    zulu = _closure2_slot6;
                    mike = new Array(2);
                    mike[0] = zulu;
                    mike[1] = zulu;
                    entity = mike;
 54:
                    return entity;
                }
            };
            record = backup.bind(record)(verify, romeo);
            backup = _closure1_slot4;
            romeo = backup.useCallback;
            verify = new Array(5);
            verify[0] = vacuum;
            verify[1] = entity;
            verify[2] = result;
            verify[3] = variable37;
            verify[4] = report;
            report = function(argFoo, argBar, argBaz) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    golf = argFoo;
                    tango = argBar;
                    report = argBaz;
                    mike = _closure2_slot11;
                    if(!mike) { _fun00012_ip = 32; continue _fun00011 }
 19:
                    mike = -1;
                    if(!(mike === tango)) { _fun00012_ip = 322; continue _fun00011 }
 32:
                    if(!(golf !== tango)) { _fun00012_ip = 342; continue _fun00011 }
 39:
                    mike = -1;
                    if(!(mike !== tango)) { _fun00012_ip = 342; continue _fun00011 }
 52:
                    zulu = _closure2_slot4;
                    mike = null;
                    if(!(mike != zulu)) { _fun00012_ip = 75; continue _fun00011 }
 62:
                    oscar = _closure2_slot4;
                    zulu = undefined;
                    zulu = oscar.bind(zulu)(golf, tango, report);
 75:
                    zulu = 0;
                    if(!(zulu !== golf)) { _fun00012_ip = 185; continue _fun00011 }
 81:
                    oscar = 1;
                    if(!(oscar === golf)) { _fun00012_ip = 342; continue _fun00011 }
 91:
                    if(!(zulu === tango)) { _fun00012_ip = 342; continue _fun00011 }
 98:
                    oscar = _closure1_slot0;
                    tango = _closure1_slot2;
                    zulu = 22;
                    tango = tango[zulu];
                    zulu = undefined;
                    tango = oscar.bind(zulu)(tango);
                    zulu = tango.isChannelFocused;
                    zulu = zulu.bind(tango)();
                    if(zulu) { _fun00012_ip = 342; continue _fun00011 }
 139:
                    tango = _closure2_slot1;
                    zulu = 'apps';
                    if(!(zulu === tango)) { _fun00012_ip = 342; continue _fun00011 }
 154:
                    zulu = _closure2_slot0;
                    zulu = zulu.current;
                    if(!(mike != zulu)) { _fun00012_ip = 342; continue _fun00011 }
 170:
                    mike = zulu.closeCustomKeyboard;
                    mike = mike.bind(zulu)();
                    _fun00012_ip = 342; continue _fun00011;
 185:
                    oscar = _closure1_slot0;
                    tango = _closure1_slot2;
                    zulu = 19;
                    zulu = tango[zulu];
                    tango = undefined;
                    zulu = oscar.bind(tango)(zulu);
                    zulu = zulu.ANIMATION_SOURCE;
                    zulu = zulu.KEYBOARD;
                    if(!(report !== zulu)) { _fun00012_ip = 278; continue _fun00011 }
 226:
                    golf = _closure1_slot0;
                    options = _closure1_slot2;
                    zulu = 20;
                    report = options[zulu];
                    oscar = golf.bind(tango)(report);
                    report = oscar.triggerHapticFeedback;
                    zulu = options[zulu];
                    zulu = golf.bind(tango)(zulu);
                    zulu = zulu.HapticFeedbackTypes;
                    zulu = zulu.IMPACT_LIGHT;
                    zulu = report.bind(oscar)(zulu);
 278:
                    zulu = _closure1_slot1;
                    report = _closure1_slot2;
                    mike = 21;
                    mike = report[mike];
                    tango = zulu.bind(tango)(mike);
                    zulu = tango.dispatch;
                    mike = {};
                    report = 'KEYBOARD_ANIMATION_FINISHED';
                    mike['type'] = report;
                    mike = zulu.bind(tango)(mike);
                    _fun00012_ip = 342; continue _fun00011;
 322:
                    zulu = _closure2_slot2;
                    mike = null;
                    if(!(mike != zulu)) { _fun00012_ip = 342; continue _fun00011 }
 332:
                    mike = _closure2_slot2;
                    entity = undefined;
                    entity = mike.bind(entity)();
 342:
                    entity = undefined;
                    return entity;
                }
            };
            variable36 = romeo.bind(backup)(report, verify);
            report = 12;
            verify = variable45[report];
            backup = variable46.bind(tango)(verify);
            romeo = backup.useDerivedValue;
            verify = function() { // Original name: U
                mike = _closure2_slot7;
                entity = mike.get;
                mike = entity.bind(mike)();
                entity = 0.975;
                entity = mike > entity;
                return entity;
            };
            result = {};
            result['animatedIndex'] = foxtrot;
            verify['__closure'] = result;
            result = 14080805823928.0;
            verify['__workletHash'] = result;
            result = _closure1_slot16;
            verify['__initData'] = result;
            verify = romeo.bind(backup)(verify);
            _closure2_slot12 = verify;
            romeo = variable45[report];
            vacuum = variable46.bind(tango)(romeo);
            result = vacuum.useAnimatedReaction;
            backup = function() { // Original name: q
                mike = _closure2_slot12;
                entity = mike.get;
                entity = entity.bind(mike)();
                return entity;
            };
            romeo = {};
            romeo['isFullyExpanded'] = verify;
            backup['__closure'] = romeo;
            romeo = 592974146020.0;
            backup['__workletHash'] = romeo;
            romeo = _closure1_slot17;
            backup['__initData'] = romeo;
            romeo = function(argFoo, argBar) { // Original name: X
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    mike = null;
                    entity = argBar;
                    if(!(mike != entity)) { _fun00014_ip = 72; continue _fun00013 }
 9:
                    entity = argFoo;
                    if(entity) { _fun00014_ip = 72; continue _fun00013 }
 15:
                    report = _closure1_slot0;
                    oscar = _closure1_slot2;
                    entity = 12;
                    entity = oscar[entity];
                    mike = undefined;
                    tango = report.bind(mike)(entity);
                    zulu = tango.runOnJS;
                    entity = 23;
                    entity = oscar[entity];
                    entity = report.bind(mike)(entity);
                    entity = entity.dismissGlobalKeyboard;
                    entity = zulu.bind(tango)(entity);
                    entity = entity.bind(mike)();
 72:
                    entity = undefined;
                    return entity;
                }
            };
            papa = {};
            status = variable45[report];
            status = variable46.bind(tango)(status);
            status = status.runOnJS;
            papa['runOnJS'] = status;
            status = 23;
            status = variable45[status];
            status = variable46.bind(tango)(status);
            status = status.dismissGlobalKeyboard;
            papa['dismissGlobalKeyboard'] = status;
            romeo['__closure'] = papa;
            papa = 11315643513821.0;
            romeo['__workletHash'] = papa;
            papa = _closure1_slot18;
            romeo['__initData'] = papa;
            romeo = result.bind(vacuum)(backup, romeo);
            backup = _closure1_slot1;
            romeo = 24;
            romeo = variable45[romeo];
            result = backup.bind(tango)(romeo);
            romeo = function() {
                entity = function() {
                    _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                        zulu = _closure2_slot2;
                        mike = null;
                        if(!(mike != zulu)) { _fun00016_ip = 23; continue _fun00015 }
 13:
                        mike = _closure2_slot2;
                        entity = undefined;
                        entity = mike.bind(entity)();
 23:
                        entity = undefined;
                        return entity;
                    }
                };
                return entity;
            };
            romeo = result.bind(tango)(romeo);
            papa = _closure1_slot4;
            vacuum = papa.useCallback;
            result = function(argFoo) {
                tango = _closure1_slot10;
                mike = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 19;
                entity = zulu[entity];
                zulu = undefined;
                entity = mike.bind(zulu)(entity);
                mike = entity.BottomSheetBackdrop;
                entity = {};
                golf = argFoo;
                options = entity;
                report = copyDataProperties(options, golf);
                oscar = 'collapse';
                report = 'pressBehavior';
                entity[report] = oscar;
                entity = tango.bind(zulu)(mike, entity);
                return entity;
            };
            romeo = new Array(0);
            papa = vacuum.bind(papa)(result, romeo);
            vacuum = _closure1_slot4;
            result = vacuum.useCallback;
            romeo = new Array(4);
            romeo[0] = sequence;
            romeo[1] = sizing;
            romeo[2] = kilo;
            romeo[3] = verify;
            verify = function() {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    tango = _closure2_slot5;
                    zulu = false;
                    entity = null;
                    if(!(zulu !== tango)) { _fun00018_ip = 67; continue _fun00017 }
 15:
                    report = _closure1_slot10;
                    tango = _closure1_slot22;
                    zulu = {};
                    oscar = _closure2_slot3;
                    zulu['style'] = oscar;
                    oscar = function() { // Original name: handleCollapse
                        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                            entity = _closure2_slot8;
                            mike = entity.current;
                            entity = null;
                            if(!(entity != mike)) { _fun00020_ip = 28; continue _fun00019 }
 18:
                            entity = mike.collapse;
                            entity = entity.bind(mike)();
 28:
                            entity = undefined;
                            return entity;
                        }
                    };
                    zulu['handleCollapse'] = oscar;
                    mike = _closure2_slot12;
                    zulu['isFullyExpanded'] = mike;
                    mike = undefined;
                    entity = report.bind(mike)(tango, zulu);
 67:
                    return entity;
                }
            };
            status = result.bind(vacuum)(verify, romeo);
            verify = variable45[report];
            result = variable46.bind(tango)(verify);
            romeo = result.useAnimatedStyle;
            verify = function() { // Original name: oe
                entity = {};
                report = _closure1_slot0;
                oscar = _closure1_slot2;
                zulu = 12;
                mike = oscar[zulu];
                tango = undefined;
                romeo = report.bind(tango)(mike);
                yankee = romeo.interpolate;
                options = _closure2_slot7;
                golf = options.get;
                sizing = golf.bind(options)();
                kilo = [0, 1];
                backup = [0, 15];
                golf = 'clamp';
                output = romeo;
                foxtrot = golf;
                options = output[yankee](sizing, kilo, backup, foxtrot, romeo);
                entity['borderTopLeftRadius'] = options;
                zulu = oscar[zulu];
                oscar = report.bind(tango)(zulu);
                report = oscar.interpolate;
                zulu = _closure2_slot7;
                mike = zulu.get;
                sizing = mike.bind(zulu)();
                kilo = [0, 1];
                backup = [0, 15];
                output = oscar;
                mike = output[report](sizing, kilo, backup, foxtrot, romeo);
                entity['borderTopRightRadius'] = mike;
                return entity;
            };
            vacuum = {};
            sequence = variable45[report];
            sequence = variable46.bind(tango)(sequence);
            sequence = sequence.interpolate;
            vacuum['interpolate'] = sequence;
            vacuum['animatedIndex'] = foxtrot;
            verify['__closure'] = vacuum;
            vacuum = 8198584676708.0;
            verify['__workletHash'] = vacuum;
            vacuum = _closure1_slot19;
            verify['__initData'] = vacuum;
            vacuum = romeo.bind(result)(verify);
            verify = 25;
            verify = variable45[verify];
            verify = backup.bind(tango)(verify);
            verify = verify.bind(tango)();
            variable41 = verify.left;
            variable40 = verify.right;
            romeo = verify.imeInsetsBottom;
            verify = 26;
            verify = variable45[verify];
            verify = backup.bind(tango)(verify);
            backup = verify.bind(tango)();
            verify = backup.height;
            variable39 = backup.width;
            sequence = verify + romeo;
            verify = _closure1_slot23;
            zulu = sequence - zulu;
            romeo = verify.bind(tango)(zulu);
            result = _closure1_slot4;
            backup = result.useCallback;
            verify = function(argFoo) {
                tango = _closure1_slot10;
                oscar = _closure1_slot0;
                options = _closure1_slot2;
                entity = 19;
                entity = options[entity];
                zulu = undefined;
                entity = oscar.bind(zulu)(entity);
                mike = entity.BottomSheetFooter;
                entity = {};
                verify = argFoo;
                offset = entity;
                golf = copyDataProperties(offset, verify);
                golf = _closure1_slot10;
                report = 27;
                report = options[report];
                report = oscar.bind(zulu)(report);
                oscar = report.PortalHost;
                report = {};
                options = 'expression-footer';
                report['name'] = options;
                oscar = golf.bind(zulu)(oscar, report);
                report = 'children';
                entity[report] = oscar;
                entity = tango.bind(zulu)(mike, entity);
                return entity;
            };
            zulu = new Array(0);
            sierra = backup.bind(result)(verify, zulu);
            backup = _closure1_slot4;
            verify = backup.useState;
            zulu = false;
            backup = verify.bind(backup)(zulu);
            verify = _closure1_slot3;
            zulu = 2;
            verify = verify.bind(tango)(backup, zulu);
            backup = 0;
            result = verify[backup];
            zulu = 1;
            variable44 = verify[zulu];
            _closure2_slot13 = variable44;
            zulu = variable45[report];
            variable42 = variable46.bind(tango)(zulu);
            equality = variable42.useAnimatedReaction;
            verify = function() { // Original name: ie
                entity = global;
                tango = entity.Math;
                zulu = tango.max;
                mike = _closure2_slot7;
                entity = mike.get;
                entity = entity.bind(mike)();
                mike = 0;
                entity = zulu.bind(tango)(entity, mike);
                entity = entity > mike;
                return entity;
            };
            zulu = {};
            zulu['animatedIndex'] = foxtrot;
            verify['__closure'] = zulu;
            zulu = 14466264702398.0;
            verify['__workletHash'] = zulu;
            zulu = _closure1_slot20;
            verify['__initData'] = zulu;
            zulu = function(argFoo, argBar) { // Original name: ae
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    zulu = argFoo;
                    entity = argBar;
                    if(!(zulu !== entity)) { _fun00022_ip = 57; continue _fun00021 }
 10:
                    tango = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 12;
                    entity = mike[entity];
                    mike = undefined;
                    report = tango.bind(mike)(entity);
                    tango = report.runOnJS;
                    entity = _closure2_slot13;
                    entity = tango.bind(report)(entity);
                    entity = entity.bind(mike)(zulu);
 57:
                    entity = undefined;
                    return entity;
                }
            };
            variable43 = {};
            variable45 = variable45[report];
            variable45 = variable46.bind(tango)(variable45);
            variable45 = variable45.runOnJS;
            variable43['runOnJS'] = variable45;
            variable43['setAccessibilityViewIsModal'] = variable44;
            zulu['__closure'] = variable43;
            variable43 = 9391475476400.0;
            zulu['__workletHash'] = variable43;
            variable43 = _closure1_slot21;
            zulu['__initData'] = variable43;
            zulu = equality.bind(variable42)(verify, zulu);
            equality = mike;
            if(equality) { _fun00006_ip = 1279; continue _fun00005 }
 1276:
            equality = entity;
 1279:
            zulu = _closure1_slot11;
            mike = _closure1_slot1;
            entity = _closure1_slot2;
            entity = entity[report];
            entity = mike.bind(tango)(entity);
            mike = entity.View;
            entity = {};
            report = undefined;
            if(!oscar) { _fun00006_ip = 1318; continue _fun00005 }
 1312:
            report = 'no-hide-descendants';
 1318:
            entity['importantForAccessibility'] = report;
            oscar = update.container;
            report = new Array(2);
            report[0] = oscar;
            verify = {};
            oscar = null;
            if(!(oscar == yankee)) { _fun00006_ip = 1352; continue _fun00005 }
 1344:
            variable39 = variable39 - variable41;
            yankee = variable39 - variable40;
 1352:
            verify['width'] = yankee;
            yankee = sequence;
            if(!(oscar != config)) { _fun00006_ip = 1366; continue _fun00005 }
 1363:
            yankee = config;
 1366:
            verify['height'] = yankee;
            report[1] = verify;
            entity['style'] = report;
            report = 'box-none';
            entity['pointerEvents'] = report;
            yankee = _closure1_slot10;
            verify = _closure1_slot1;
            variable39 = _closure1_slot2;
            report = 19;
            report = variable39[report];
            verify = verify.bind(tango)(report);
            report = {};
            variable39 = _closure1_slot12;
            variable39 = !variable39;
            if(!variable39) { _fun00006_ip = 1427; continue _fun00005 }
 1425:
            variable39 = undefined;
 1427:
            report['accessible'] = variable39;
            report['ref'] = sizing;
            report['animatedIndex'] = foxtrot;
            report['animationConfigs'] = variable38;
            report['onClose'] = variable37;
            report['onAnimate'] = variable36;
            report['animatedPosition'] = quebec;
            quebec = !equality;
            report['enableContentPanningGesture'] = quebec;
            equality = !equality;
            report['enableHandlePanningGesture'] = equality;
            report['handleComponent'] = status;
            equality = _closure1_slot0;
            quebec = _closure1_slot2;
            status = 8;
            status = quebec[status];
            equality = equality.bind(tango)(status);
            status = equality.isAndroid;
            equality = status.bind(equality)();
            status = undefined;
            if(!equality) { _fun00006_ip = 1525; continue _fun00005 }
 1516:
            status = undefined;
            if(!(whiskey === lima)) { _fun00006_ip = 1525; continue _fun00005 }
 1522:
            status = sierra;
 1525:
            report['renderFooter'] = status;
            status = update.background;
            report['backgroundStyle'] = status;
            if(!(oscar != target)) { _fun00006_ip = 1548; continue _fun00005 }
 1545:
            papa = target;
 1548:
            report['backdropComponent'] = papa;
            if(!(oscar != config)) { _fun00006_ip = 1560; continue _fun00005 }
 1557:
            context = config;
 1560:
            report['contentHeight'] = context;
            report['snapPoints'] = record;
            if(!(oscar != config)) { _fun00006_ip = 1577; continue _fun00005 }
 1574:
            sequence = config;
 1577:
            report['containerHeight'] = sequence;
            sequence = 'extend';
            report['keyboardBehavior'] = sequence;
            sequence = new Array(2);
            config = -10;
            sequence[0] = config;
            config = 10;
            sequence[1] = config;
            report['activeOffsetY'] = sequence;
            backup = 0;
            if(!kilo) { _fun00006_ip = 1648; continue _fun00005 }
 1622:
            sequence = _closure1_slot0;
            config = _closure1_slot2;
            kilo = 11;
            kilo = config[kilo];
            kilo = sequence.bind(tango)(kilo);
            backup = kilo.ACTION_SHEET_DRAG_HANDLE_HEIGHT;
 1648:
            report['handleHeight'] = backup;
            variable48 = report;
            variable47 = romeo;
            romeo = copyDataProperties(variable48, variable47);
            kilo = _closure1_slot10;
            backup = _closure1_slot0;
            sequence = _closure1_slot2;
            romeo = 28;
            romeo = sequence[romeo];
            romeo = backup.bind(tango)(romeo);
            backup = romeo.AccessibilityViewAnimated;
            romeo = {};
            sequence = 'portal-keyboard-sheet';
            romeo['nativeID'] = sequence;
            sequence = update.roundingView;
            update = new Array(3);
            update[0] = sequence;
            control = !control;
            if(!control) { _fun00006_ip = 1729; continue _fun00005 }
 1726:
            control = vacuum;
 1729:
            update[1] = control;
            update[2] = source;
            romeo['style'] = update;
            echo = function() { // Original name: onAccessibilityEscape
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    entity = _closure2_slot8;
                    mike = entity.current;
                    entity = null;
                    if(!(entity != mike)) { _fun00024_ip = 28; continue _fun00023 }
 18:
                    entity = mike.collapse;
                    entity = entity.bind(mike)();
 28:
                    entity = undefined;
                    return entity;
                }
            };
            romeo['onAccessibilityEscape'] = echo;
            romeo['accessibilityViewIsModal'] = result;
            sizing = output.bind(tango)(sizing);
            romeo['children'] = sizing;
            backup = kilo.bind(tango)(backup, romeo);
            romeo = 'children';
            report[romeo] = backup;
            verify = yankee.bind(tango)(verify, report);
            report = new Array(3);
            report[0] = verify;
            verify = _closure1_slot12;
            if(!verify) { _fun00006_ip = 1840; continue _fun00005 }
 1803:
            romeo = _closure1_slot10;
            yankee = _closure1_slot1;
            backup = _closure1_slot2;
            offset = 29;
            offset = backup[offset];
            yankee = yankee.bind(tango)(offset);
            offset = {};
            offset['animatedSheetIndex'] = foxtrot;
            verify = romeo.bind(tango)(yankee, offset);
 1840:
            report[1] = verify;
            oscar = null;
            if(options) { _fun00006_ip = 1852; continue _fun00005 }
 1849:
            oscar = golf;
 1852:
            report[2] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = tango;
    zulu['usePortalKeyboardBottomSheetAnimationProps'] = mike;
    return entity;
})();