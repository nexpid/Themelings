// app/design/components/ContextMenu/native/ContextMenuPopout.native.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    romeo = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = romeo;
    var _closure1_slot2 = oscar;
    entity = function() { // Original name: ContextMenuDivider
        mike = _closure1_slot9;
        tango = undefined;
        report = mike.bind(tango)();
        zulu = _closure1_slot6;
        mike = _closure1_slot5;
        entity = {};
        report = report.divider;
        entity['style'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo) { // Original name: renderMenuItems
        mike = argFoo;
        zulu = mike.items;
        var _closure2_slot0 = zulu;
        tango = mike.title;
        var _closure2_slot1 = tango;
        tango = mike.state;
        var _closure2_slot2 = tango;
        tango = mike.onPress;
        var _closure2_slot3 = tango;
        mike = mike.dividerIndexes;
        var _closure2_slot4 = mike;
        mike = zulu.map;
        entity = function(argFoo, argBar) {
            _fun105785: for(var _fun105785_ip = 0; ; ) switch(_fun105785_ip) {
 0:
                entity = argFoo;
                yankee = argBar;
                romeo = entity.label;
                mike = entity.action;
                var _closure3_slot0 = mike;
                foxtrot = entity.iconSource;
                offset = entity.IconComponent;
                entity = entity.variant;
                mike = _closure2_slot0;
                mike = mike.length;
                backup = 1;
                mike = mike - backup;
                golf = _closure1_slot6;
                tango = _closure1_slot0;
                report = _closure1_slot2;
                zulu = 15;
                zulu = report[zulu];
                report = undefined;
                zulu = tango.bind(report)(zulu);
                tango = zulu.ContextMenuItem;
                zulu = {};
                zulu['index'] = yankee;
                zulu['label'] = romeo;
                kilo = 0;
                kilo = kilo === yankee;
                if(!kilo) { _fun105785_ip = 122; continue _fun105785 }
 112:
                output = _closure2_slot1;
                sizing = null;
                kilo = sizing == output;
 122:
                zulu['start'] = kilo;
                mike = yankee === mike;
                zulu['end'] = mike;
                mike = _closure2_slot4;
                kilo = mike.includes;
                backup = yankee + backup;
                backup = kilo.bind(mike)(backup);
                zulu['lastInSection'] = backup;
                zulu['iconSource'] = foxtrot;
                zulu['IconComponent'] = offset;
                verify = _closure2_slot2;
                zulu['state'] = verify;
                oscar = function(argFoo) { // Original name: onPress
                    _fun105786: for(var _fun105786_ip = 0; ; ) switch(_fun105786_ip) {
 0:
                        tango = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 10;
                        mike = mike[entity];
                        entity = undefined;
                        tango = tango.bind(entity)(mike);
                        mike = tango.isAndroid;
                        mike = mike.bind(tango)();
                        if(!mike) { _fun105786_ip = 67; continue _fun105786 }
 37:
                        tango = _closure1_slot0;
                        report = _closure1_slot2;
                        zulu = 16;
                        zulu = report[zulu];
                        tango = tango.bind(entity)(zulu);
                        zulu = tango.getIsScreenReaderEnabled;
                        mike = zulu.bind(tango)();
 67:
                        if(!mike) { _fun105786_ip = 81; continue _fun105786 }
 70:
                        mike = _closure3_slot0;
                        mike = mike.bind(entity)();
 81:
                        tango = _closure2_slot3;
                        zulu = null;
                        if(!(zulu != tango)) { _fun105786_ip = 106; continue _fun105786 }
 94:
                        zulu = _closure2_slot3;
                        mike = argFoo;
                        mike = zulu.bind(entity)(mike);
 106:
                        return entity;
                    }
                };
                zulu['onPress'] = oscar;
                zulu['variant'] = entity;
                oscar = global;
                entity = oscar.HermesInternal;
                offset = entity.concat;
                verify = '';
                entity = '-';
                entity = offset.bind(verify)(romeo, entity, yankee);
                golf = golf.bind(report)(tango, zulu, entity);
                entity = mike.includes;
                mike = entity.bind(mike)(yankee);
                entity = golf;
                if(!mike) { _fun105785_ip = 312; continue _fun105785 }
 241:
                tango = _closure1_slot8;
                zulu = _closure1_slot7;
                mike = {};
                offset = _closure1_slot6;
                verify = _closure1_slot17;
                oscar = oscar.HermesInternal;
                options = oscar.concat;
                oscar = 'divider-';
                options = options.bind(oscar)(yankee);
                oscar = {};
                options = offset.bind(report)(verify, oscar, options);
                oscar = new Array(2);
                oscar[0] = options;
                oscar[1] = golf;
                mike['children'] = oscar;
                entity = tango.bind(report)(zulu, mike);
 312:
                return entity;
            }
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    var _closure1_slot18 = entity;
    entity = function(argFoo) { // Original name: ContextMenuBackdrop
        _fun105787: for(var _fun105787_ip = 0; ; ) switch(_fun105787_ip) {
 0:
            mike = argFoo;
            report = mike.onPress;
            yankee = mike.visible;
            var _closure2_slot0 = yankee;
            mike = _closure1_slot15;
            tango = undefined;
            verify = mike.bind(tango)();
            golf = _closure1_slot0;
            options = _closure1_slot2;
            mike = 6;
            mike = options[mike];
            zulu = golf.bind(tango)(mike);
            mike = zulu.useAnimatedStyle;
            entity = function() { // Original name: n
                entity = {};
                golf = _closure1_slot0;
                options = _closure1_slot2;
                mike = 11;
                mike = options[mike];
                oscar = undefined;
                report = golf.bind(oscar)(mike);
                tango = report.withSpring;
                zulu = _closure2_slot0;
                mike = zulu.get;
                zulu = mike.bind(zulu)();
                mike = 5;
                mike = options[mike];
                mike = golf.bind(oscar)(mike);
                mike = mike.CONTEXT_MENU_SPRING;
                mike = tango.bind(report)(zulu, mike);
                entity['opacity'] = mike;
                return entity;
            };
            offset = {};
            romeo = 11;
            romeo = options[romeo];
            romeo = golf.bind(tango)(romeo);
            romeo = romeo.withSpring;
            offset['withSpring'] = romeo;
            offset['visible'] = yankee;
            yankee = 5;
            yankee = options[yankee];
            yankee = golf.bind(tango)(yankee);
            yankee = yankee.CONTEXT_MENU_SPRING;
            offset['CONTEXT_MENU_SPRING'] = yankee;
            entity['__closure'] = offset;
            offset = 7758377027899.0;
            entity['__workletHash'] = offset;
            offset = _closure1_slot16;
            entity['__initData'] = offset;
            yankee = mike.bind(zulu)(entity);
            zulu = _closure1_slot6;
            entity = 17;
            entity = options[entity];
            entity = golf.bind(tango)(entity);
            mike = entity.Backdrop;
            entity = {};
            offset = 'none';
            entity['blur'] = offset;
            romeo = verify.backdrop;
            offset = new Array(2);
            offset[0] = romeo;
            offset[1] = yankee;
            entity['style'] = offset;
            verify = verify.accessibleDismiss;
            entity['accessibleDismissStyle'] = verify;
            entity['onDismiss'] = report;
            report = 10;
            report = options[report];
            golf = golf.bind(tango)(report);
            report = golf.isAndroid;
            report = report.bind(golf)();
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            oscar = 18;
            golf = offset[oscar];
            golf = verify.bind(tango)(golf);
            options = golf.intl;
            golf = options.string;
            oscar = offset[oscar];
            oscar = verify.bind(tango)(oscar);
            oscar = oscar.t;
            if(report) { _fun105787_ip = 306; continue _fun105787 }
 293:
            report = oscar.xs0juL;
            report = golf.bind(options)(report);
            _fun105787_ip = 317; continue _fun105787;
 306:
            oscar = oscar.hPBScn;
            report = golf.bind(options)(oscar);
 317:
            entity['accessibilityLabel'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot19 = entity;
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
    tango = tango.bind(entity)(golf);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.Keyboard;
    var _closure1_slot4 = golf;
    golf = tango.View;
    var _closure1_slot5 = golf;
    offset = tango.StyleSheet;
    tango = 2;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot6 = golf;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.Fragment;
    var _closure1_slot7 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot8 = tango;
    tango = 3;
    golf = oscar[tango];
    verify = report.bind(entity)(golf);
    options = verify.createStyles;
    golf = {};
    foxtrot = {'position': 'absolute', 'backgroundColor': null, 'borderWidth': 1};
    yankee = 4;
    backup = oscar[yankee];
    backup = romeo.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BG_SURFACE_OVERLAY;
    foxtrot['backgroundColor'] = backup;
    backup = oscar[yankee];
    backup = romeo.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BORDER_SUBTLE;
    foxtrot['borderColor'] = backup;
    backup = oscar[yankee];
    backup = romeo.bind(entity)(backup);
    backup = backup.radii;
    backup = backup.lg;
    foxtrot['borderRadius'] = backup;
    backup = 5;
    kilo = oscar[backup];
    kilo = report.bind(entity)(kilo);
    kilo = kilo.CONTEXT_MENU_MIN_WIDTH;
    foxtrot['minWidth'] = kilo;
    kilo = oscar[yankee];
    kilo = romeo.bind(entity)(kilo);
    kilo = kilo.shadows;
    output = kilo.SHADOW_HIGH;
    result = foxtrot;
    kilo = copyDataProperties(result, output);
    golf['container'] = foxtrot;
    foxtrot = {'width': 20, 'height': 20};
    golf['formIcon'] = foxtrot;
    foxtrot = {};
    kilo = oscar[backup];
    kilo = report.bind(entity)(kilo);
    kilo = kilo.CONTEXT_MENU_ITEM_PADDING;
    foxtrot['padding'] = kilo;
    golf['titleContainer'] = foxtrot;
    foxtrot = {};
    backup = oscar[backup];
    backup = report.bind(entity)(backup);
    backup = backup.CONTEXT_MENU_DIVIDER_HEIGHT;
    foxtrot['borderBottomWidth'] = backup;
    backup = oscar[yankee];
    backup = romeo.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.DIVIDER_SUBTLE;
    foxtrot['borderBottomColor'] = backup;
    golf['divider'] = foxtrot;
    golf = options.bind(verify)(golf);
    var _closure1_slot9 = golf;
    golf = {};
    options = "function ContextMenuPopoutNativeTsx1(){const{maxHeight,height,CONTEXT_MENU_MIN_WIDTH,positionY,positionX,CONTEXT_MENU_MIN_SCALE,withSpring,interpolate,visible,CONTEXT_MENU_SPRING,transitionState,TransitionStates,runOnJS,cleanUp,onClose}=this.__closure;const visibleHeight=Math.min(maxHeight,height);const halfHeight=visibleHeight/2;const halfWidth=CONTEXT_MENU_MIN_WIDTH/2;const translateYDirection=positionY==='below'?-1:1;const translateXDirection=positionX==='left'?-1:1;const translateY=translateYDirection*halfHeight+CONTEXT_MENU_MIN_SCALE*-translateYDirection*halfHeight;const translateX=translateXDirection*halfWidth+CONTEXT_MENU_MIN_SCALE*-translateXDirection*halfWidth;return{opacity:withSpring(interpolate(visible.get(),[0,1],[0,1]),CONTEXT_MENU_SPRING,'respect-motion-settings',function(finished){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanUp)();runOnJS(onClose)();}}),transform:[{translateX:withSpring(interpolate(visible.get(),[0,1],[translateX,0]),CONTEXT_MENU_SPRING)},{translateY:withSpring(interpolate(visible.get(),[0,1],[translateY,0]),CONTEXT_MENU_SPRING)},{scale:withSpring(interpolate(visible.get(),[0,1],[CONTEXT_MENU_MIN_SCALE,1]),CONTEXT_MENU_SPRING)}]};}";
    golf['code'] = options;
    var _closure1_slot10 = golf;
    golf = {};
    options = 'function ContextMenuPopoutNativeTsx2(finished){const{transitionState,TransitionStates,runOnJS,cleanUp,onClose}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanUp)();runOnJS(onClose)();}}';
    golf['code'] = options;
    var _closure1_slot11 = golf;
    golf = {};
    options = 'function ContextMenuPopoutNativeTsx3(e){const{updateContextMenuState,state}=this.__closure;updateContextMenuState(e.absoluteX,e.absoluteY,state);}';
    golf['code'] = options;
    var _closure1_slot12 = golf;
    golf = {};
    options = 'function ContextMenuPopoutNativeTsx4(e,state){const{scrollingEnabled}=this.__closure;if(scrollingEnabled.get()){state.fail();}else{state.activate();}}';
    golf['code'] = options;
    var _closure1_slot13 = golf;
    golf = {};
    options = 'function ContextMenuPopoutNativeTsx5(){const{state,runOnJS,requestClose}=this.__closure;const{activeIndex:activeIndex}=state;const isDismiss=activeIndex.get()===-1;runOnJS(requestClose)(isDismiss);}';
    golf['code'] = options;
    var _closure1_slot14 = golf;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {};
    yankee = oscar[yankee];
    yankee = romeo.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.CONTEXT_MENU_BACKDROP_BACKGROUND;
    verify['backgroundColor'] = yankee;
    tango['backdrop'] = verify;
    verify = {};
    output = offset.absoluteFillObject;
    result = verify;
    offset = copyDataProperties(result, output);
    yankee = 'auto';
    offset = 'height';
    verify[offset] = yankee;
    tango['accessibleDismiss'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot15 = tango;
    tango = {};
    golf = 'function ContextMenuPopoutNativeTsx6(){const{withSpring,visible,CONTEXT_MENU_SPRING}=this.__closure;return{opacity:withSpring(visible.get(),CONTEXT_MENU_SPRING)};}';
    tango['code'] = golf;
    var _closure1_slot16 = tango;
    tango = 19;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'design/components/ContextMenu/native/ContextMenuPopout.native.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: ContextMenuPopout
        _fun105789: for(var _fun105789_ip = 0; ; ) switch(_fun105789_ip) {
 0:
            zulu = argFoo;
            mike = zulu.menu;
            sequence = zulu.transitionState;
            var _closure2_slot0 = sequence;
            update = zulu.cleanUp;
            var _closure2_slot1 = update;
            tango = undefined;
            var _closure2_slot8 = tango;
            var _closure2_slot9 = tango;
            var _closure2_slot10 = tango;
            report = mike.x;
            context = mike.positionX;
            var _closure2_slot2 = context;
            papa = mike.positionY;
            var _closure2_slot3 = papa;
            target = mike.height;
            var _closure2_slot4 = target;
            echo = mike.items;
            output = mike.state;
            var _closure2_slot5 = output;
            oscar = mike.requestClose;
            var _closure2_slot6 = oscar;
            sizing = mike.onClose;
            var _closure2_slot7 = sizing;
            result = mike.title;
            zulu = mike.keyboardShouldPersistTaps;
            romeo = 'handled';
            if(!(tango !== zulu)) { _fun105789_ip = 136; continue _fun105789 }
 133:
            romeo = zulu;
 136:
            kilo = mike.dividerIndexes;
            backup = mike.y;
            options = _closure1_slot0;
            mike = _closure1_slot2;
            control = 6;
            zulu = mike[control];
            golf = options.bind(tango)(zulu);
            zulu = golf.useSharedValue;
            vacuum = 7;
            mike = mike[vacuum];
            mike = options.bind(tango)(mike);
            mike = mike.TransitionStates;
            options = mike.MOUNTED;
            mike = 0;
            if(!(sequence === options)) { _fun105789_ip = 208; continue _fun105789 }
 205:
            mike = 1;
 208:
            yankee = zulu.bind(golf)(mike);
            _closure2_slot8 = yankee;
            options = _closure1_slot3;
            golf = options.useEffect;
            zulu = new Array(2);
            zulu[0] = sequence;
            zulu[1] = yankee;
            mike = function() {
                _fun105790: for(var _fun105790_ip = 0; ; ) switch(_fun105790_ip) {
 0:
                    tango = _closure2_slot0;
                    report = _closure1_slot0;
                    zulu = _closure1_slot2;
                    entity = 7;
                    zulu = zulu[entity];
                    entity = undefined;
                    zulu = report.bind(entity)(zulu);
                    zulu = zulu.TransitionStates;
                    zulu = zulu.YEETED;
                    if(!(tango !== zulu)) { _fun105790_ip = 67; continue _fun105790 }
 48:
                    report = _closure2_slot8;
                    tango = report.set;
                    zulu = 1;
                    zulu = tango.bind(report)(zulu);
                    _fun105790_ip = 83; continue _fun105790;
 67:
                    tango = _closure2_slot8;
                    zulu = tango.set;
                    mike = 0;
                    mike = zulu.bind(tango)(mike);
 83:
                    return entity;
                }
            };
            mike = golf.bind(options)(mike, zulu);
            mike = _closure1_slot9;
            config = mike.bind(tango)();
            options = _closure1_slot1;
            source = _closure1_slot2;
            mike = 8;
            mike = source[mike];
            mike = options.bind(tango)(mike);
            mike = mike.bind(tango)();
            offset = mike.top;
            zulu = mike.bottom;
            golf = mike.imeInsetsBottom;
            mike = 9;
            mike = source[mike];
            mike = options.bind(tango)(mike);
            mike = mike.bind(tango)();
            options = mike.width;
            mike = mike.height;
            mike = mike + golf;
            source = 'above';
            golf = backup;
            if(!(source === papa)) { _fun105789_ip = 447; continue _fun105789 }
 342:
            record = _closure1_slot0;
            status = _closure1_slot2;
            source = 10;
            source = status[source];
            record = record.bind(tango)(source);
            source = record.isAndroid;
            source = source.bind(record)();
            golf = backup;
            if(!source) { _fun105789_ip = 447; continue _fun105789 }
 377:
            record = _closure1_slot4;
            source = record.isVisible;
            source = source.bind(record)();
            golf = backup;
            if(!source) { _fun105789_ip = 447; continue _fun105789 }
 397:
            record = _closure1_slot4;
            source = record.metrics;
            status = source.bind(record)();
            record = null;
            sierra = record == status;
            source = undefined;
            if(sierra) { _fun105789_ip = 427; continue _fun105789 }
 422:
            source = status.height;
 427:
            record = record != source;
            verify = 0;
            if(!record) { _fun105789_ip = 439; continue _fun105789 }
 436:
            verify = source;
 439:
            verify = verify + zulu;
            golf = backup - verify;
 447:
            verify = 'below';
            verify = verify === papa;
            mike = mike - golf;
            if(verify) { _fun105789_ip = 500; continue _fun105789 }
 464:
            backup = mike - offset;
            source = _closure1_slot0;
            record = _closure1_slot2;
            offset = 5;
            offset = record[offset];
            offset = source.bind(tango)(offset);
            offset = offset.CONTEXT_MENU_EDGE_OFFSET;
            backup = backup - offset;
            _fun105789_ip = 534; continue _fun105789;
 500:
            zulu = mike - zulu;
            offset = _closure1_slot0;
            source = _closure1_slot2;
            mike = 5;
            mike = source[mike];
            mike = offset.bind(tango)(mike);
            mike = mike.CONTEXT_MENU_EDGE_OFFSET;
            backup = zulu - mike;
 534:
            _closure2_slot9 = backup;
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[control];
            offset = zulu.bind(tango)(mike);
            zulu = offset.useSharedValue;
            mike = target >= backup;
            mike = zulu.bind(offset)(mike);
            _closure2_slot10 = mike;
            source = {};
            zulu = 'bottom';
            if(!verify) { _fun105789_ip = 586; continue _fun105789 }
 582:
            zulu = 'top';
 586:
            source[zulu] = golf;
            source[context] = report;
            zulu = 'maxHeight';
            source[zulu] = backup;
            golf = _closure1_slot0;
            verify = _closure1_slot2;
            record = 5;
            zulu = verify[record];
            zulu = golf.bind(tango)(zulu);
            zulu = zulu.CONTEXT_MENU_EDGE_OFFSET;
            zulu = options - zulu;
            report = zulu - report;
            zulu = 'maxWidth';
            source[zulu] = report;
            zulu = verify[control];
            options = golf.bind(tango)(zulu);
            report = options.useAnimatedStyle;
            zulu = function() { // Original name: F
                _fun105791: for(var _fun105791_ip = 0; ; ) switch(_fun105791_ip) {
 0:
                    entity = global;
                    tango = entity.Math;
                    zulu = tango.min;
                    mike = _closure2_slot9;
                    entity = _closure2_slot4;
                    entity = zulu.bind(tango)(mike, entity);
                    zulu = 2;
                    source = entity / zulu;
                    tango = _closure1_slot0;
                    entity = _closure1_slot2;
                    offset = 5;
                    entity = entity[offset];
                    verify = undefined;
                    entity = tango.bind(verify)(entity);
                    entity = entity.CONTEXT_MENU_MIN_WIDTH;
                    echo = entity / zulu;
                    zulu = _closure2_slot3;
                    report = 1;
                    entity = 'below';
                    update = report;
                    if(!(entity === zulu)) { _fun105791_ip = 98; continue _fun105791 }
 92:
                    update = -1;
 98:
                    zulu = _closure2_slot2;
                    entity = 'left';
                    golf = report;
                    if(!(entity === zulu)) { _fun105791_ip = 119; continue _fun105791 }
 113:
                    golf = -1;
 119:
                    entity = {};
                    options = _closure1_slot0;
                    tango = _closure1_slot2;
                    oscar = 11;
                    zulu = tango[oscar];
                    sizing = options.bind(verify)(zulu);
                    kilo = sizing.withSpring;
                    romeo = 6;
                    zulu = tango[romeo];
                    result = options.bind(verify)(zulu);
                    output = result.interpolate;
                    foxtrot = _closure2_slot8;
                    zulu = foxtrot.get;
                    backup = zulu.bind(foxtrot)();
                    foxtrot = [0, 1];
                    zulu = [0, 1];
                    backup = output.bind(result)(backup, foxtrot, zulu);
                    zulu = tango[offset];
                    zulu = options.bind(verify)(zulu);
                    sequence = zulu.CONTEXT_MENU_SPRING;
                    zulu = function(argFoo) { // Original name: t
                        _fun105792: for(var _fun105792_ip = 0; ; ) switch(_fun105792_ip) {
 0:
                            entity = argFoo;
                            if(!entity) { _fun105792_ip = 54; continue _fun105792 }
 6:
                            zulu = _closure2_slot0;
                            report = _closure1_slot0;
                            tango = _closure1_slot2;
                            mike = 7;
                            tango = tango[mike];
                            mike = undefined;
                            mike = report.bind(mike)(tango);
                            mike = mike.TransitionStates;
                            mike = mike.YEETED;
                            entity = zulu === mike;
 54:
                            if(!entity) { _fun105792_ip = 130; continue _fun105792 }
 57:
                            tango = _closure1_slot0;
                            report = _closure1_slot2;
                            zulu = 6;
                            entity = report[zulu];
                            mike = undefined;
                            options = tango.bind(mike)(entity);
                            golf = options.runOnJS;
                            oscar = _closure2_slot1;
                            oscar = golf.bind(options)(oscar);
                            oscar = oscar.bind(mike)();
                            zulu = report[zulu];
                            tango = tango.bind(mike)(zulu);
                            zulu = tango.runOnJS;
                            entity = _closure2_slot7;
                            entity = zulu.bind(tango)(entity);
                            entity = entity.bind(mike)();
 130:
                            entity = undefined;
                            return entity;
                        }
                    };
                    output = {};
                    result = _closure2_slot0;
                    output['transitionState'] = result;
                    result = 7;
                    result = tango[result];
                    result = options.bind(verify)(result);
                    result = result.TransitionStates;
                    output['TransitionStates'] = result;
                    result = tango[romeo];
                    result = options.bind(verify)(result);
                    result = result.runOnJS;
                    output['runOnJS'] = result;
                    result = _closure2_slot1;
                    output['cleanUp'] = result;
                    result = _closure2_slot7;
                    output['onClose'] = result;
                    zulu['__closure'] = output;
                    output = 4025068986009.0;
                    zulu['__workletHash'] = output;
                    mike = _closure1_slot11;
                    zulu['__initData'] = mike;
                    vacuum = 'respect-motion-settings';
                    record = sizing;
                    config = backup;
                    control = zulu;
                    mike = record[kilo](config, sequence, vacuum, control, source);
                    entity['opacity'] = mike;
                    zulu = {};
                    mike = tango[oscar];
                    kilo = options.bind(verify)(mike);
                    backup = kilo.withSpring;
                    mike = tango[romeo];
                    result = options.bind(verify)(mike);
                    output = result.interpolate;
                    foxtrot = _closure2_slot8;
                    mike = foxtrot.get;
                    sizing = mike.bind(foxtrot)();
                    mike = tango[offset];
                    mike = options.bind(verify)(mike);
                    foxtrot = mike.CONTEXT_MENU_MIN_SCALE;
                    mike = -golf;
                    mike = foxtrot * mike;
                    foxtrot = new Array(2);
                    golf = golf * echo;
                    mike = mike * echo;
                    mike = golf + mike;
                    foxtrot[0] = mike;
                    golf = 0;
                    foxtrot[1] = golf;
                    mike = [0, 1];
                    foxtrot = output.bind(result)(sizing, mike, foxtrot);
                    mike = tango[offset];
                    mike = options.bind(verify)(mike);
                    mike = mike.CONTEXT_MENU_SPRING;
                    mike = backup.bind(kilo)(foxtrot, mike);
                    zulu['translateX'] = mike;
                    mike = new Array(3);
                    mike[0] = zulu;
                    zulu = {};
                    foxtrot = tango[oscar];
                    kilo = options.bind(verify)(foxtrot);
                    backup = kilo.withSpring;
                    foxtrot = tango[romeo];
                    result = options.bind(verify)(foxtrot);
                    output = result.interpolate;
                    sizing = _closure2_slot8;
                    foxtrot = sizing.get;
                    sizing = foxtrot.bind(sizing)();
                    foxtrot = tango[offset];
                    foxtrot = options.bind(verify)(foxtrot);
                    echo = foxtrot.CONTEXT_MENU_MIN_SCALE;
                    foxtrot = -update;
                    echo = echo * foxtrot;
                    foxtrot = new Array(2);
                    update = update * source;
                    echo = echo * source;
                    echo = update + echo;
                    foxtrot[0] = echo;
                    foxtrot[1] = golf;
                    golf = [0, 1];
                    foxtrot = output.bind(result)(sizing, golf, foxtrot);
                    golf = tango[offset];
                    golf = options.bind(verify)(golf);
                    golf = golf.CONTEXT_MENU_SPRING;
                    golf = backup.bind(kilo)(foxtrot, golf);
                    zulu['translateY'] = golf;
                    mike[1] = zulu;
                    zulu = {};
                    oscar = tango[oscar];
                    golf = options.bind(verify)(oscar);
                    oscar = golf.withSpring;
                    romeo = tango[romeo];
                    backup = options.bind(verify)(romeo);
                    foxtrot = backup.interpolate;
                    romeo = _closure2_slot8;
                    yankee = romeo.get;
                    romeo = yankee.bind(romeo)();
                    yankee = tango[offset];
                    yankee = options.bind(verify)(yankee);
                    kilo = yankee.CONTEXT_MENU_MIN_SCALE;
                    yankee = new Array(2);
                    yankee[0] = kilo;
                    yankee[1] = report;
                    report = [0, 1];
                    report = foxtrot.bind(backup)(romeo, report, yankee);
                    tango = tango[offset];
                    tango = options.bind(verify)(tango);
                    tango = tango.CONTEXT_MENU_SPRING;
                    tango = oscar.bind(golf)(report, tango);
                    zulu['scale'] = tango;
                    mike[2] = zulu;
                    entity['transform'] = mike;
                    return entity;
                }
            };
            offset = {};
            offset['maxHeight'] = backup;
            offset['height'] = target;
            target = verify[record];
            target = golf.bind(tango)(target);
            target = target.CONTEXT_MENU_MIN_WIDTH;
            offset['CONTEXT_MENU_MIN_WIDTH'] = target;
            offset['positionY'] = papa;
            offset['positionX'] = context;
            context = verify[record];
            context = golf.bind(tango)(context);
            context = context.CONTEXT_MENU_MIN_SCALE;
            offset['CONTEXT_MENU_MIN_SCALE'] = context;
            context = 11;
            context = verify[context];
            context = golf.bind(tango)(context);
            context = context.withSpring;
            offset['withSpring'] = context;
            context = verify[control];
            context = golf.bind(tango)(context);
            context = context.interpolate;
            offset['interpolate'] = context;
            offset['visible'] = yankee;
            record = verify[record];
            record = golf.bind(tango)(record);
            record = record.CONTEXT_MENU_SPRING;
            offset['CONTEXT_MENU_SPRING'] = record;
            offset['transitionState'] = sequence;
            vacuum = verify[vacuum];
            vacuum = golf.bind(tango)(vacuum);
            vacuum = vacuum.TransitionStates;
            offset['TransitionStates'] = vacuum;
            vacuum = verify[control];
            vacuum = golf.bind(tango)(vacuum);
            vacuum = vacuum.runOnJS;
            offset['runOnJS'] = vacuum;
            offset['cleanUp'] = update;
            offset['onClose'] = sizing;
            zulu['__closure'] = offset;
            offset = 16778623591634.0;
            zulu['__workletHash'] = offset;
            offset = _closure1_slot10;
            zulu['__initData'] = offset;
            update = report.bind(options)(zulu);
            report = _closure1_slot3;
            offset = report.useMemo;
            options = new Array(3);
            options[0] = output;
            options[1] = oscar;
            options[2] = mike;
            zulu = function() {
                report = function(argFoo) { // Original name: t
                    mike = argFoo;
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    entity = 12;
                    zulu = zulu[entity];
                    entity = undefined;
                    oscar = tango.bind(entity)(zulu);
                    report = oscar.updateContextMenuState;
                    tango = mike.absoluteX;
                    zulu = mike.absoluteY;
                    mike = _closure2_slot5;
                    mike = report.bind(oscar)(tango, zulu, mike);
                    return entity;
                };
                mike = {};
                verify = _closure1_slot0;
                offset = _closure1_slot2;
                zulu = 12;
                zulu = offset[zulu];
                options = undefined;
                zulu = verify.bind(options)(zulu);
                zulu = zulu.updateContextMenuState;
                mike['updateContextMenuState'] = zulu;
                golf = _closure2_slot5;
                mike['state'] = golf;
                report['__closure'] = mike;
                mike = 14952697295916.0;
                report['__workletHash'] = mike;
                mike = _closure1_slot12;
                report['__initData'] = mike;
                mike = 13;
                mike = offset[mike];
                mike = verify.bind(options)(mike);
                zulu = mike.Gesture;
                mike = zulu.Pan;
                yankee = mike.bind(zulu)();
                zulu = yankee.manualActivation;
                mike = true;
                yankee = zulu.bind(yankee)(mike);
                zulu = yankee.onTouchesDown;
                mike = function(argFoo, argBar) { // Original name: n
                    _fun105795: for(var _fun105795_ip = 0; ; ) switch(_fun105795_ip) {
 0:
                        mike = argBar;
                        zulu = _closure2_slot10;
                        entity = zulu.get;
                        entity = entity.bind(zulu)();
                        if(entity) { _fun105795_ip = 34; continue _fun105795 }
 22:
                        entity = mike.activate;
                        entity = entity.bind(mike)();
                        _fun105795_ip = 44; continue _fun105795;
 34:
                        entity = mike.fail;
                        entity = entity.bind(mike)();
 44:
                        entity = undefined;
                        return entity;
                    }
                };
                romeo = {};
                foxtrot = _closure2_slot10;
                romeo['scrollingEnabled'] = foxtrot;
                mike['__closure'] = romeo;
                romeo = 8872980668372.0;
                mike['__workletHash'] = romeo;
                romeo = _closure1_slot13;
                mike['__initData'] = romeo;
                zulu = zulu.bind(yankee)(mike);
                mike = zulu.onStart;
                zulu = mike.bind(zulu)(report);
                mike = zulu.onUpdate;
                zulu = mike.bind(zulu)(report);
                mike = zulu.onEnd;
                entity = function() { // Original name: e
                    entity = _closure2_slot5;
                    zulu = entity.activeIndex;
                    entity = zulu.get;
                    tango = entity.bind(zulu)();
                    report = _closure1_slot0;
                    zulu = _closure1_slot2;
                    entity = 6;
                    zulu = zulu[entity];
                    entity = undefined;
                    report = report.bind(entity)(zulu);
                    zulu = report.runOnJS;
                    mike = _closure2_slot6;
                    zulu = zulu.bind(report)(mike);
                    mike = -1;
                    mike = mike === tango;
                    mike = zulu.bind(entity)(mike);
                    return entity;
                };
                report = {};
                report['state'] = golf;
                golf = 6;
                golf = offset[golf];
                golf = verify.bind(options)(golf);
                golf = golf.runOnJS;
                report['runOnJS'] = golf;
                oscar = _closure2_slot6;
                report['requestClose'] = oscar;
                entity['__closure'] = report;
                report = 6637323929685.0;
                entity['__workletHash'] = report;
                tango = _closure1_slot14;
                entity['__initData'] = tango;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            offset = offset.bind(report)(zulu, options);
            options = report.useCallback;
            zulu = new Array(2);
            zulu[0] = backup;
            zulu[1] = mike;
            mike = function(argFoo) {
                zulu = _closure2_slot10;
                mike = zulu.set;
                report = global;
                golf = report.Math;
                oscar = golf.round;
                tango = argFoo;
                tango = tango.nativeEvent;
                tango = tango.layout;
                tango = tango.height;
                tango = oscar.bind(golf)(tango);
                oscar = report.Math;
                report = oscar.round;
                entity = _closure2_slot9;
                entity = report.bind(oscar)(entity);
                entity = tango >= entity;
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            backup = options.bind(report)(mike, zulu);
            options = report.useCallback;
            zulu = new Array(1);
            zulu[0] = oscar;
            mike = function() {
                zulu = _closure2_slot6;
                entity = undefined;
                mike = true;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            vacuum = options.bind(report)(mike, zulu);
            zulu = report.useCallback;
            mike = new Array(1);
            mike[0] = oscar;
            entity = function() {
                zulu = _closure2_slot6;
                entity = undefined;
                mike = false;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            sizing = zulu.bind(report)(entity, mike);
            zulu = _closure1_slot8;
            mike = _closure1_slot7;
            entity = {};
            options = _closure1_slot6;
            oscar = _closure1_slot19;
            report = {};
            report['onPress'] = vacuum;
            report['visible'] = yankee;
            oscar = options.bind(tango)(oscar, report);
            report = new Array(2);
            report[0] = oscar;
            options = _closure1_slot6;
            oscar = 13;
            oscar = verify[oscar];
            oscar = golf.bind(tango)(oscar);
            golf = oscar.GestureDetector;
            oscar = {};
            oscar['gesture'] = offset;
            yankee = _closure1_slot8;
            offset = _closure1_slot1;
            verify = verify[control];
            verify = offset.bind(tango)(verify);
            offset = verify.ScrollView;
            verify = {};
            verify['onLayout'] = backup;
            backup = false;
            verify['bounces'] = backup;
            control = config.container;
            backup = new Array(3);
            backup[0] = control;
            backup[1] = source;
            backup[2] = update;
            verify['style'] = backup;
            verify['keyboardShouldPersistTaps'] = romeo;
            romeo = 'list';
            verify['accessibilityRole'] = romeo;
            backup = null;
            romeo = backup != result;
            if(!romeo) { _fun105789_ip = 1297; continue _fun105789 }
 1166:
            source = _closure1_slot8;
            update = _closure1_slot7;
            romeo = {};
            sequence = _closure1_slot6;
            vacuum = _closure1_slot5;
            control = {};
            config = config.titleContainer;
            control['style'] = config;
            context = _closure1_slot6;
            record = _closure1_slot0;
            papa = _closure1_slot2;
            config = 14;
            config = papa[config];
            config = record.bind(tango)(config);
            record = config.Text;
            config = {'variant': 'text-md/bold', 'color': 'header-primary', 'accessibilityRole': 'header'};
            config['children'] = result;
            config = context.bind(tango)(record, config);
            control['children'] = config;
            vacuum = sequence.bind(tango)(vacuum, control);
            control = new Array(2);
            control[0] = vacuum;
            config = _closure1_slot6;
            sequence = _closure1_slot17;
            vacuum = {};
            vacuum = config.bind(tango)(sequence, vacuum);
            control[1] = vacuum;
            romeo['children'] = control;
            backup = source.bind(tango)(update, romeo);
 1297:
            romeo = new Array(2);
            romeo[0] = backup;
            backup = _closure1_slot18;
            foxtrot = {};
            foxtrot['items'] = echo;
            foxtrot['title'] = result;
            foxtrot['state'] = output;
            foxtrot['onPress'] = sizing;
            foxtrot['dividerIndexes'] = kilo;
            foxtrot = backup.bind(tango)(foxtrot);
            romeo[1] = foxtrot;
            verify['children'] = romeo;
            verify = yankee.bind(tango)(offset, verify);
            oscar['children'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['ContextMenuPopout'] = mike;
    return entity;
})();