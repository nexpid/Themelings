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
            _fun118638: for(var _fun118638_ip = 0; ; ) switch(_fun118638_ip) {
 0:
                zulu = argFoo;
                entity = argBar;
                if(!(zulu !== entity)) { _fun118638_ip = 57; continue _fun118638 }
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
            _fun118642: for(var _fun118642_ip = 0; ; ) switch(_fun118642_ip) {
 0:
                entity = _closure2_slot2;
                if(entity) { _fun118642_ip = 54; continue _fun118642 }
 10:
                tango = _closure2_slot3;
                entity = _closure1_slot9;
                entity = entity.SYSTEM;
                if(!(tango === entity)) { _fun118642_ip = 54; continue _fun118642 }
 31:
                entity = {};
                mike = _closure1_slot12;
                if(!mike) { _fun118642_ip = 47; continue _fun118642 }
 40:
                tango = _closure2_slot1;
                mike = !tango;
 47:
                entity['animateOnMount'] = mike;
                _fun118642_ip = 75; continue _fun118642;
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
        _fun118643: for(var _fun118643_ip = 0; ; ) switch(_fun118643_ip) {
 0:
            entity = argFoo;
            output = entity.chatInputRef;
            var _closure2_slot0 = output;
            sizing = entity.children;
            report = entity.refKey;
            var _closure2_slot1 = report;
            variable38 = entity.animationConfigs;
            variable37 = entity.onClose;
            var _closure2_slot2 = variable37;
            mike = entity.transitionState;
            target = entity.backdropComponent;
            control = entity.headerStyle;
            var _closure2_slot3 = control;
            source = entity.disableHeaderRoundingAnimation;
            update = entity.roundingViewStyle;
            backup = entity.onAnimate;
            var _closure2_slot4 = backup;
            vacuum = entity.rendersHandle;
            tango = undefined;
            if(!(vacuum === tango)) { _fun118643_ip = 104; continue _fun118643 }
 102:
            vacuum = true;
 104:
            var _closure2_slot5 = vacuum;
            config = entity.height;
            var _closure2_slot6 = config;
            offset = entity.width;
            var _closure2_slot7 = tango;
            var _closure2_slot8 = tango;
            var _closure2_slot9 = tango;
            var _closure2_slot10 = tango;
            var _closure2_slot11 = tango;
            var _closure2_slot12 = tango;
            var _closure2_slot13 = tango;
            entity = _closure1_slot13;
            echo = entity.bind(tango)();
            oscar = _closure1_slot4;
            zulu = oscar.useContext;
            variable46 = _closure1_slot0;
            variable45 = _closure1_slot2;
            entity = 14;
            entity = variable45[entity];
            entity = variable46.bind(tango)(entity);
            entity = entity.PortalKeyboardContext;
            entity = zulu.bind(oscar)(entity);
            variable39 = entity.animatedSheetIndex;
            _closure2_slot7 = variable39;
            quebec = entity.animatedSheetPosition;
            oscar = entity.androidNavScrimStyle;
            entity = entity.bottomSheetRefs;
            kilo = entity[report];
            _closure2_slot8 = kilo;
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
            oscar[0] = kilo;
            oscar[1] = entity;
            mike = function() {
                _fun118644: for(var _fun118644_ip = 0; ; ) switch(_fun118644_ip) {
 0:
                    mike = _closure2_slot11;
                    if(!mike) { _fun118644_ip = 35; continue _fun118644 }
 10:
                    entity = _closure2_slot8;
                    mike = entity.current;
                    entity = null;
                    if(!(entity != mike)) { _fun118644_ip = 35; continue _fun118644 }
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
            yankee = variable46.bind(tango)(oscar);
            verify = yankee.useStateFromStores;
            oscar = _closure1_slot7;
            options = new Array(1);
            options[0] = oscar;
            oscar = function() {
                mike = _closure1_slot7;
                entity = mike.isOpen;
                entity = entity.bind(mike)();
                return entity;
            };
            oscar = verify.bind(yankee)(options, oscar);
            mike = variable45[mike];
            yankee = variable46.bind(tango)(mike);
            verify = yankee.useStateFromStoresObject;
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
            mike = verify.bind(yankee)(options, mike);
            options = mike.isKeyboardOpen;
            whiskey = mike.keyboardType;
            mike = _closure1_slot9;
            lima = mike.EXPRESSION;
            mike = 18;
            mike = variable45[mike];
            verify = variable46.bind(tango)(mike);
            mike = verify.useIsScreenReaderEnabled;
            mike = mike.bind(verify)();
            sequence = _closure1_slot4;
            foxtrot = sequence.useMemo;
            yankee = new Array(3);
            yankee[0] = config;
            yankee[1] = zulu;
            yankee[2] = context;
            verify = function() {
                _fun118647: for(var _fun118647_ip = 0; ; ) switch(_fun118647_ip) {
 0:
                    zulu = _closure2_slot6;
                    entity = null;
                    if(!(entity == zulu)) { _fun118647_ip = 35; continue _fun118647 }
 13:
                    zulu = _closure2_slot9;
                    entity = new Array(2);
                    entity[0] = zulu;
                    zulu = _closure2_slot10;
                    entity[1] = zulu;
                    _fun118647_ip = 54; continue _fun118647;
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
            record = foxtrot.bind(sequence)(verify, yankee);
            foxtrot = _closure1_slot4;
            yankee = foxtrot.useCallback;
            verify = new Array(5);
            verify[0] = output;
            verify[1] = entity;
            verify[2] = backup;
            verify[3] = variable37;
            verify[4] = report;
            report = function(argFoo, argBar, argBaz) {
                _fun118648: for(var _fun118648_ip = 0; ; ) switch(_fun118648_ip) {
 0:
                    golf = argFoo;
                    tango = argBar;
                    report = argBaz;
                    mike = _closure2_slot11;
                    if(!mike) { _fun118648_ip = 32; continue _fun118648 }
 19:
                    mike = -1;
                    if(!(mike === tango)) { _fun118648_ip = 322; continue _fun118648 }
 32:
                    if(!(golf !== tango)) { _fun118648_ip = 342; continue _fun118648 }
 39:
                    mike = -1;
                    if(!(mike !== tango)) { _fun118648_ip = 342; continue _fun118648 }
 52:
                    zulu = _closure2_slot4;
                    mike = null;
                    if(!(mike != zulu)) { _fun118648_ip = 75; continue _fun118648 }
 62:
                    oscar = _closure2_slot4;
                    zulu = undefined;
                    zulu = oscar.bind(zulu)(golf, tango, report);
 75:
                    zulu = 0;
                    if(!(zulu !== golf)) { _fun118648_ip = 185; continue _fun118648 }
 81:
                    oscar = 1;
                    if(!(oscar === golf)) { _fun118648_ip = 342; continue _fun118648 }
 91:
                    if(!(zulu === tango)) { _fun118648_ip = 342; continue _fun118648 }
 98:
                    oscar = _closure1_slot0;
                    tango = _closure1_slot2;
                    zulu = 22;
                    tango = tango[zulu];
                    zulu = undefined;
                    tango = oscar.bind(zulu)(tango);
                    zulu = tango.isChannelFocused;
                    zulu = zulu.bind(tango)();
                    if(zulu) { _fun118648_ip = 342; continue _fun118648 }
 139:
                    tango = _closure2_slot1;
                    zulu = 'apps';
                    if(!(zulu === tango)) { _fun118648_ip = 342; continue _fun118648 }
 154:
                    zulu = _closure2_slot0;
                    zulu = zulu.current;
                    if(!(mike != zulu)) { _fun118648_ip = 342; continue _fun118648 }
 170:
                    mike = zulu.closeCustomKeyboard;
                    mike = mike.bind(zulu)();
                    _fun118648_ip = 342; continue _fun118648;
 185:
                    oscar = _closure1_slot0;
                    tango = _closure1_slot2;
                    zulu = 19;
                    zulu = tango[zulu];
                    tango = undefined;
                    zulu = oscar.bind(tango)(zulu);
                    zulu = zulu.ANIMATION_SOURCE;
                    zulu = zulu.KEYBOARD;
                    if(!(report !== zulu)) { _fun118648_ip = 278; continue _fun118648 }
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
                    _fun118648_ip = 342; continue _fun118648;
 322:
                    zulu = _closure2_slot2;
                    mike = null;
                    if(!(mike != zulu)) { _fun118648_ip = 342; continue _fun118648 }
 332:
                    mike = _closure2_slot2;
                    entity = undefined;
                    entity = mike.bind(entity)();
 342:
                    entity = undefined;
                    return entity;
                }
            };
            variable36 = yankee.bind(foxtrot)(report, verify);
            report = 12;
            verify = variable45[report];
            foxtrot = variable46.bind(tango)(verify);
            yankee = foxtrot.useDerivedValue;
            verify = function() { // Original name: U
                mike = _closure2_slot7;
                entity = mike.get;
                mike = entity.bind(mike)();
                entity = 0.975;
                entity = mike > entity;
                return entity;
            };
            backup = {};
            backup['animatedIndex'] = variable39;
            verify['__closure'] = backup;
            backup = 14080805823928.0;
            verify['__workletHash'] = backup;
            backup = _closure1_slot16;
            verify['__initData'] = backup;
            verify = yankee.bind(foxtrot)(verify);
            _closure2_slot12 = verify;
            yankee = variable45[report];
            output = variable46.bind(tango)(yankee);
            backup = output.useAnimatedReaction;
            foxtrot = function() { // Original name: q
                mike = _closure2_slot12;
                entity = mike.get;
                entity = entity.bind(mike)();
                return entity;
            };
            yankee = {};
            yankee['isFullyExpanded'] = verify;
            foxtrot['__closure'] = yankee;
            yankee = 592974146020.0;
            foxtrot['__workletHash'] = yankee;
            yankee = _closure1_slot17;
            foxtrot['__initData'] = yankee;
            yankee = function(argFoo, argBar) { // Original name: X
                _fun118651: for(var _fun118651_ip = 0; ; ) switch(_fun118651_ip) {
 0:
                    mike = null;
                    entity = argBar;
                    if(!(mike != entity)) { _fun118651_ip = 72; continue _fun118651 }
 9:
                    entity = argFoo;
                    if(entity) { _fun118651_ip = 72; continue _fun118651 }
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
            sequence = {};
            papa = variable45[report];
            papa = variable46.bind(tango)(papa);
            papa = papa.runOnJS;
            sequence['runOnJS'] = papa;
            papa = 23;
            papa = variable45[papa];
            papa = variable46.bind(tango)(papa);
            papa = papa.dismissGlobalKeyboard;
            sequence['dismissGlobalKeyboard'] = papa;
            yankee['__closure'] = sequence;
            sequence = 11315643513821.0;
            yankee['__workletHash'] = sequence;
            sequence = _closure1_slot18;
            yankee['__initData'] = sequence;
            yankee = backup.bind(output)(foxtrot, yankee);
            yankee = _closure1_slot1;
            foxtrot = 24;
            foxtrot = variable45[foxtrot];
            backup = yankee.bind(tango)(foxtrot);
            foxtrot = function() {
                entity = function() {
                    _fun118653: for(var _fun118653_ip = 0; ; ) switch(_fun118653_ip) {
 0:
                        zulu = _closure2_slot2;
                        mike = null;
                        if(!(mike != zulu)) { _fun118653_ip = 23; continue _fun118653 }
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
            foxtrot = backup.bind(tango)(foxtrot);
            sequence = _closure1_slot4;
            output = sequence.useCallback;
            backup = function(argFoo) {
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
            foxtrot = new Array(0);
            papa = output.bind(sequence)(backup, foxtrot);
            output = _closure1_slot4;
            backup = output.useCallback;
            foxtrot = new Array(4);
            foxtrot[0] = control;
            foxtrot[1] = kilo;
            foxtrot[2] = vacuum;
            foxtrot[3] = verify;
            verify = function() {
                _fun118655: for(var _fun118655_ip = 0; ; ) switch(_fun118655_ip) {
 0:
                    tango = _closure2_slot5;
                    zulu = false;
                    entity = null;
                    if(!(zulu !== tango)) { _fun118655_ip = 67; continue _fun118655 }
 15:
                    report = _closure1_slot10;
                    tango = _closure1_slot22;
                    zulu = {};
                    oscar = _closure2_slot3;
                    zulu['style'] = oscar;
                    oscar = function() { // Original name: handleCollapse
                        _fun118656: for(var _fun118656_ip = 0; ; ) switch(_fun118656_ip) {
 0:
                            entity = _closure2_slot8;
                            mike = entity.current;
                            entity = null;
                            if(!(entity != mike)) { _fun118656_ip = 28; continue _fun118656 }
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
            status = backup.bind(output)(verify, foxtrot);
            verify = variable45[report];
            backup = variable46.bind(tango)(verify);
            foxtrot = backup.useAnimatedStyle;
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
            output = {};
            control = variable45[report];
            control = variable46.bind(tango)(control);
            control = control.interpolate;
            output['interpolate'] = control;
            output['animatedIndex'] = variable39;
            verify['__closure'] = output;
            output = 8198584676708.0;
            verify['__workletHash'] = output;
            output = _closure1_slot19;
            verify['__initData'] = output;
            control = foxtrot.bind(backup)(verify);
            verify = 25;
            verify = variable45[verify];
            verify = yankee.bind(tango)(verify);
            verify = verify.bind(tango)();
            variable41 = verify.left;
            variable40 = verify.right;
            foxtrot = verify.imeInsetsBottom;
            verify = 26;
            verify = variable45[verify];
            verify = yankee.bind(tango)(verify);
            yankee = verify.bind(tango)();
            verify = yankee.height;
            yankee = yankee.width;
            sequence = verify + foxtrot;
            verify = _closure1_slot23;
            zulu = sequence - zulu;
            foxtrot = verify.bind(tango)(zulu);
            output = _closure1_slot4;
            backup = output.useCallback;
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
            sierra = backup.bind(output)(verify, zulu);
            backup = _closure1_slot4;
            verify = backup.useState;
            zulu = false;
            backup = verify.bind(backup)(zulu);
            verify = _closure1_slot3;
            zulu = 2;
            verify = verify.bind(tango)(backup, zulu);
            backup = 0;
            output = verify[backup];
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
            zulu['animatedIndex'] = variable39;
            verify['__closure'] = zulu;
            zulu = 14466264702398.0;
            verify['__workletHash'] = zulu;
            zulu = _closure1_slot20;
            verify['__initData'] = zulu;
            zulu = function(argFoo, argBar) { // Original name: ae
                _fun118660: for(var _fun118660_ip = 0; ; ) switch(_fun118660_ip) {
 0:
                    zulu = argFoo;
                    entity = argBar;
                    if(!(zulu !== entity)) { _fun118660_ip = 57; continue _fun118660 }
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
            if(equality) { _fun118643_ip = 1279; continue _fun118643 }
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
            if(!oscar) { _fun118643_ip = 1318; continue _fun118643 }
 1312:
            report = 'no-hide-descendants';
 1318:
            entity['importantForAccessibility'] = report;
            oscar = echo.container;
            report = new Array(2);
            report[0] = oscar;
            verify = {};
            oscar = null;
            if(!(oscar == offset)) { _fun118643_ip = 1352; continue _fun118643 }
 1344:
            yankee = yankee - variable41;
            offset = yankee - variable40;
 1352:
            verify['width'] = offset;
            offset = sequence;
            if(!(oscar != config)) { _fun118643_ip = 1366; continue _fun118643 }
 1363:
            offset = config;
 1366:
            verify['height'] = offset;
            report[1] = verify;
            entity['style'] = report;
            report = 'box-none';
            entity['pointerEvents'] = report;
            verify = _closure1_slot12;
            if(!verify) { _fun118643_ip = 1433; continue _fun118643 }
 1396:
            yankee = _closure1_slot10;
            offset = _closure1_slot1;
            variable40 = _closure1_slot2;
            report = 28;
            report = variable40[report];
            offset = offset.bind(tango)(report);
            report = {};
            report['animatedSheetIndex'] = variable39;
            verify = yankee.bind(tango)(offset, report);
 1433:
            report = new Array(3);
            report[0] = verify;
            yankee = _closure1_slot10;
            offset = _closure1_slot1;
            variable40 = _closure1_slot2;
            verify = 19;
            verify = variable40[verify];
            offset = offset.bind(tango)(verify);
            verify = {};
            variable40 = _closure1_slot12;
            variable40 = !variable40;
            if(!variable40) { _fun118643_ip = 1479; continue _fun118643 }
 1477:
            variable40 = undefined;
 1479:
            verify['accessible'] = variable40;
            verify['ref'] = kilo;
            verify['animatedIndex'] = variable39;
            verify['animationConfigs'] = variable38;
            verify['onClose'] = variable37;
            verify['onAnimate'] = variable36;
            verify['animatedPosition'] = quebec;
            quebec = !equality;
            verify['enableContentPanningGesture'] = quebec;
            equality = !equality;
            verify['enableHandlePanningGesture'] = equality;
            verify['handleComponent'] = status;
            equality = _closure1_slot0;
            quebec = _closure1_slot2;
            status = 8;
            status = quebec[status];
            equality = equality.bind(tango)(status);
            status = equality.isAndroid;
            equality = status.bind(equality)();
            status = undefined;
            if(!equality) { _fun118643_ip = 1577; continue _fun118643 }
 1568:
            status = undefined;
            if(!(whiskey === lima)) { _fun118643_ip = 1577; continue _fun118643 }
 1574:
            status = sierra;
 1577:
            verify['renderFooter'] = status;
            status = echo.background;
            verify['backgroundStyle'] = status;
            if(!(oscar != target)) { _fun118643_ip = 1600; continue _fun118643 }
 1597:
            papa = target;
 1600:
            verify['backdropComponent'] = papa;
            if(!(oscar != config)) { _fun118643_ip = 1612; continue _fun118643 }
 1609:
            context = config;
 1612:
            verify['contentHeight'] = context;
            verify['snapPoints'] = record;
            if(!(oscar != config)) { _fun118643_ip = 1629; continue _fun118643 }
 1626:
            sequence = config;
 1629:
            verify['containerHeight'] = sequence;
            sequence = 'extend';
            verify['keyboardBehavior'] = sequence;
            sequence = new Array(2);
            config = -10;
            sequence[0] = config;
            config = 10;
            sequence[1] = config;
            verify['activeOffsetY'] = sequence;
            backup = 0;
            if(!vacuum) { _fun118643_ip = 1700; continue _fun118643 }
 1674:
            sequence = _closure1_slot0;
            config = _closure1_slot2;
            vacuum = 11;
            vacuum = config[vacuum];
            vacuum = sequence.bind(tango)(vacuum);
            backup = vacuum.ACTION_SHEET_DRAG_HANDLE_HEIGHT;
 1700:
            verify['handleHeight'] = backup;
            variable48 = verify;
            variable47 = foxtrot;
            foxtrot = copyDataProperties(variable48, variable47);
            backup = _closure1_slot10;
            foxtrot = _closure1_slot0;
            vacuum = _closure1_slot2;
            romeo = 29;
            romeo = vacuum[romeo];
            romeo = foxtrot.bind(tango)(romeo);
            foxtrot = romeo.AccessibilityViewAnimated;
            romeo = {};
            vacuum = 'portal-keyboard-sheet';
            romeo['nativeID'] = vacuum;
            vacuum = echo.roundingView;
            echo = new Array(3);
            echo[0] = vacuum;
            source = !source;
            if(!source) { _fun118643_ip = 1781; continue _fun118643 }
 1778:
            source = control;
 1781:
            echo[1] = source;
            echo[2] = update;
            romeo['style'] = echo;
            result = function() { // Original name: onAccessibilityEscape
                _fun118661: for(var _fun118661_ip = 0; ; ) switch(_fun118661_ip) {
 0:
                    entity = _closure2_slot8;
                    mike = entity.current;
                    entity = null;
                    if(!(entity != mike)) { _fun118661_ip = 28; continue _fun118661 }
 18:
                    entity = mike.collapse;
                    entity = entity.bind(mike)();
 28:
                    entity = undefined;
                    return entity;
                }
            };
            romeo['onAccessibilityEscape'] = result;
            romeo['accessibilityViewIsModal'] = output;
            kilo = sizing.bind(tango)(kilo);
            romeo['children'] = kilo;
            foxtrot = backup.bind(tango)(foxtrot, romeo);
            romeo = 'children';
            verify[romeo] = foxtrot;
            verify = yankee.bind(tango)(offset, verify);
            report[1] = verify;
            oscar = null;
            if(options) { _fun118643_ip = 1852; continue _fun118643 }
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