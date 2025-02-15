// app/design/components/ContextMenu/native/ContextMenu.native.tsx
export default (function(argFoo, argBar, argBaz, argCorge, argGrault, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
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
    tango = tango.bind(entity)(golf);
    var _closure1_slot3 = tango;
    tango = 1;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.Fragment;
    var _closure1_slot4 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot5 = tango;
    tango = {};
    golf = "function ContextMenuNativeTsx1(){const{measure,buttonRef,title,itemCount,dividerIndexes,approximateItemHeight,CONTEXT_MENU_DIVIDER_HEIGHT,CONTEXT_MENU_OFFSET,screenHeight,CONTEXT_MENU_EDGE_OFFSET,screenWidth,CONTEXT_MENU_MIN_WIDTH,menuAlign,runOnJS,showMenu}=this.__closure;const measurements=measure(buttonRef);if(measurements!=null){const{pageX:pageX,pageY:pageY,height:height,width:width}=measurements;const rowCount=title!=null?itemCount+1:itemCount;const dividerCount=(title!=null?1:0)+dividerIndexes.length;const menuHeight=approximateItemHeight.get()*rowCount+CONTEXT_MENU_DIVIDER_HEIGHT*dividerCount;const positionBelowOffset=pageY+height+CONTEXT_MENU_OFFSET;const positionAboveOffset=screenHeight-pageY+CONTEXT_MENU_OFFSET;const availableSpaceBelow=screenHeight-positionBelowOffset-CONTEXT_MENU_EDGE_OFFSET;const availableSpaceAbove=pageY-CONTEXT_MENU_EDGE_OFFSET;const wouldOverflowBelow=availableSpaceBelow<menuHeight;const wouldOverflowAbove=availableSpaceAbove<menuHeight;const minimumRightPosition=Math.max(screenWidth-pageX-width,CONTEXT_MENU_EDGE_OFFSET);function autoPositionVertical(offset){let positionY='below';let y=pageY+height+CONTEXT_MENU_OFFSET;if(wouldOverflowBelow&&wouldOverflowAbove){if(availableSpaceBelow>availableSpaceAbove){positionY='below';}else{positionY='above';}}else if(wouldOverflowBelow){positionY='above';}else{positionY='below';}y=(positionY==='above'?positionAboveOffset:positionBelowOffset)+(offset!==null&&offset!==void 0?offset:0);return{y:y,positionY:positionY};}function autoPositionHorizontal(){const distanceFromLeftEdge=pageX-CONTEXT_MENU_EDGE_OFFSET;const distanceFromRightEdge=screenWidth-CONTEXT_MENU_EDGE_OFFSET-(pageX+CONTEXT_MENU_MIN_WIDTH);let positionX='left';let x=pageX;if(distanceFromLeftEdge>distanceFromRightEdge){positionX='right';x=minimumRightPosition;}return{x:x,positionX:positionX};}if(menuAlign==='auto'){const{y:y,positionY:positionY}=autoPositionVertical();const{x:x,positionX:positionX}=autoPositionHorizontal();runOnJS(showMenu)(x,y,positionX,positionY,menuHeight,width);return;}else if(menuAlign==='above'||menuAlign==='below'){const positionY=menuAlign;const y=positionY==='above'?positionAboveOffset:positionBelowOffset;const{x:x,positionX:positionX}=autoPositionHorizontal();runOnJS(showMenu)(x,y,positionX,positionY,menuHeight,width);return;}else{const positionX=menuAlign==='left'?'right':'left';const x=positionX==='left'?pageX+width+CONTEXT_MENU_OFFSET:minimumRightPosition+width+CONTEXT_MENU_OFFSET;const{y:y,positionY:positionY}=autoPositionVertical(-1*(CONTEXT_MENU_OFFSET+height));runOnJS(showMenu)(x,y,positionX,positionY,menuHeight,width);return;}}}";
    tango['code'] = golf;
    var _closure1_slot6 = tango;
    tango = {};
    golf = 'function onPanGestureEnd_ContextMenuNativeTsx2(){const{state,runOnJS,requestClose}=this.__closure;const{activeIndex:activeIndex}=state;const isDismiss=activeIndex.get()===-1;runOnJS(requestClose)(isDismiss);}';
    tango['code'] = golf;
    var _closure1_slot7 = tango;
    tango = {};
    golf = 'function ContextMenuNativeTsx3(e){const{updateContextMenuState,state}=this.__closure;updateContextMenuState(e.absoluteX,e.absoluteY,state);}';
    tango['code'] = golf;
    var _closure1_slot8 = tango;
    tango = {};
    golf = 'function ContextMenuNativeTsx4(){const{runOnJS,triggerHapticFeedback,HapticFeedbackTypes,measureButtonAndShowMenu}=this.__closure;runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);measureButtonAndShowMenu();}';
    tango['code'] = golf;
    var _closure1_slot9 = tango;
    tango = {};
    golf = 'function ContextMenuNativeTsx5(){const{measureButtonAndShowMenu}=this.__closure;measureButtonAndShowMenu();}';
    tango['code'] = golf;
    var _closure1_slot10 = tango;
    tango = {};
    golf = 'function ContextMenuNativeTsx6(){const{runOnJS,triggerHapticFeedback,HapticFeedbackTypes,measureButtonAndShowMenu}=this.__closure;runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);measureButtonAndShowMenu();}';
    tango['code'] = golf;
    var _closure1_slot11 = tango;
    tango = {};
    golf = 'function ContextMenuNativeTsx7(e){const{updateContextMenuState,state}=this.__closure;updateContextMenuState(e.absoluteX,e.absoluteY,state);}';
    tango['code'] = golf;
    var _closure1_slot12 = tango;
    tango = 16;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'design/components/ContextMenu/native/ContextMenu.native.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: ContextMenu
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            golf = mike.children;
            zulu = mike.items;
            var _closure2_slot0 = zulu;
            yankee = mike.triggerOnLongPress;
            report = undefined;
            if(!(yankee === report)) { _fun00002_ip = 34; continue _fun00001 }
 32:
            yankee = false;
 34:
            var _closure2_slot1 = yankee;
            sizing = mike.triggerOnTap;
            if(!(sizing === report)) { _fun00002_ip = 50; continue _fun00001 }
 48:
            sizing = false;
 50:
            var _closure2_slot2 = sizing;
            entity = mike.disableGesture;
            if(!(entity === report)) { _fun00002_ip = 68; continue _fun00001 }
 66:
            entity = false;
 68:
            update = mike.align;
            if(!(update === report)) { _fun00002_ip = 82; continue _fun00001 }
 78:
            update = 'auto';
 82:
            var _closure2_slot3 = update;
            vacuum = mike.title;
            var _closure2_slot4 = vacuum;
            target = mike.onOpen;
            var _closure2_slot5 = target;
            verify = mike.onClose;
            var _closure2_slot6 = verify;
            echo = mike.keyboardShouldPersistTaps;
            var _closure2_slot7 = echo;
            options = mike.returnRef;
            var _closure2_slot8 = options;
            offset = mike.enabled;
            if(!(offset === report)) { _fun00002_ip = 148; continue _fun00001 }
 146:
            offset = true;
 148:
            var _closure2_slot9 = offset;
            tango = mike.buttonRef;
            var _closure2_slot10 = tango;
            var _closure2_slot11 = report;
            var _closure2_slot12 = report;
            var _closure2_slot13 = report;
            var _closure2_slot14 = report;
            var _closure2_slot15 = report;
            var _closure2_slot16 = report;
            var _closure2_slot17 = report;
            var _closure2_slot18 = report;
            var _closure2_slot19 = report;
            var _closure2_slot20 = report;
            var _closure2_slot21 = report;
            var _closure2_slot22 = report;
            var _closure2_slot23 = report;
            var _closure2_slot24 = report;
            foxtrot = _closure1_slot0;
            romeo = _closure1_slot2;
            context = 2;
            romeo = romeo[context];
            foxtrot = foxtrot.bind(report)(romeo);
            romeo = foxtrot.useAnimatedRef;
            romeo = romeo.bind(foxtrot)();
            foxtrot = null;
            if(!(foxtrot != tango)) { _fun00002_ip = 260; continue _fun00001 }
 257:
            romeo = tango;
 260:
            _closure2_slot10 = romeo;
            backup = _closure1_slot3;
            foxtrot = backup.useMemo;
            tango = new Array(1);
            tango[0] = zulu;
            zulu = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    oscar = _closure2_slot0;
                    mike = global;
                    report = mike.Array;
                    zulu = report.isArray;
                    mike = 0;
                    mike = oscar[mike];
                    report = zulu.bind(report)(mike);
                    oscar = _closure2_slot0;
                    if(report) { _fun00004_ip = 45; continue _fun00003 }
 40:
                    zulu = oscar;
                    _fun00004_ip = 55; continue _fun00003;
 45:
                    mike = oscar.flat;
                    zulu = mike.bind(oscar)();
 55:
                    var _closure3_slot0 = zulu;
                    mike = new Array(0);
                    var _closure3_slot1 = mike;
                    if(!report) { _fun00004_ip = 91; continue _fun00003 }
 70:
                    report = _closure2_slot0;
                    tango = report.forEach;
                    entity = function(argFoo, argBar) {
                        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                            entity = argBar;
                            oscar = 0;
                            if(!(entity > oscar)) { _fun00006_ip = 47; continue _fun00005 }
 9:
                            zulu = _closure3_slot1;
                            mike = zulu.push;
                            report = _closure3_slot0;
                            tango = report.indexOf;
                            entity = argFoo;
                            entity = entity[oscar];
                            entity = tango.bind(report)(entity);
                            entity = mike.bind(zulu)(entity);
 47:
                            entity = undefined;
                            return entity;
                        }
                    };
                    entity = tango.bind(report)(entity);
 91:
                    entity = {};
                    entity['items'] = zulu;
                    entity['dividerIndexes'] = mike;
                    return entity;
                }
            };
            tango = foxtrot.bind(backup)(zulu, tango);
            zulu = tango.items;
            _closure2_slot11 = zulu;
            output = tango.dividerIndexes;
            _closure2_slot12 = output;
            control = zulu.length;
            _closure2_slot13 = control;
            backup = _closure1_slot1;
            sequence = _closure1_slot2;
            tango = 3;
            tango = sequence[tango];
            tango = backup.bind(report)(tango);
            tango = tango.bind(report)();
            foxtrot = tango.imeInsetsBottom;
            tango = 4;
            tango = sequence[tango];
            tango = backup.bind(report)(tango);
            tango = tango.bind(report)();
            result = tango.width;
            _closure2_slot14 = result;
            tango = tango.height;
            source = tango + foxtrot;
            _closure2_slot15 = source;
            kilo = _closure1_slot0;
            foxtrot = 5;
            tango = sequence[foxtrot];
            backup = kilo.bind(report)(tango);
            tango = backup.useContextMenuState;
            tango = tango.bind(backup)();
            _closure2_slot16 = tango;
            status = tango.activeIndex;
            _closure2_slot17 = status;
            backup = 6;
            backup = sequence[backup];
            kilo = kilo.bind(report)(backup);
            backup = kilo.useFontScale;
            sierra = backup.bind(kilo)();
            if(!(report === options)) { _fun00002_ip = 460; continue _fun00001 }
 457:
            options = romeo;
 460:
            _closure2_slot8 = options;
            record = _closure1_slot0;
            config = _closure1_slot2;
            foxtrot = config[foxtrot];
            backup = record.bind(report)(foxtrot);
            foxtrot = backup.useActiveContextMenu;
            foxtrot = foxtrot.bind(backup)();
            _closure2_slot18 = foxtrot;
            backup = config[context];
            sequence = record.bind(report)(backup);
            kilo = sequence.useSharedValue;
            backup = global;
            whiskey = backup.Math;
            lima = whiskey.max;
            papa = 7;
            backup = config[papa];
            backup = record.bind(report)(backup);
            equality = backup.CONTEXT_MENU_ITEM_BASE_HEIGHT;
            backup = config[papa];
            backup = record.bind(report)(backup);
            backup = backup.CONTEXT_MENU_ITEM_PADDING;
            backup = context * backup;
            backup = equality - backup;
            equality = backup * sierra;
            backup = config[papa];
            backup = record.bind(report)(backup);
            backup = backup.CONTEXT_MENU_ITEM_PADDING;
            backup = context * backup;
            sierra = config[papa];
            sierra = record.bind(report)(sierra);
            sierra = sierra.CONTEXT_MENU_ITEM_BASE_HEIGHT;
            backup = equality + backup;
            backup = lima.bind(whiskey)(backup, sierra);
            sequence = kilo.bind(sequence)(backup);
            _closure2_slot19 = sequence;
            backup = _closure1_slot3;
            kilo = backup.useRef;
            kilo = kilo.bind(backup)(zulu);
            _closure2_slot20 = kilo;
            lima = backup.useLayoutEffect;
            sierra = new Array(1);
            sierra[0] = zulu;
            kilo = function() {
                mike = _closure2_slot20;
                entity = _closure2_slot11;
                mike['current'] = entity;
                entity = undefined;
                return entity;
            };
            kilo = lima.bind(backup)(kilo, sierra);
            sierra = backup.useLayoutEffect;
            kilo = new Array(2);
            kilo[0] = foxtrot;
            kilo[1] = tango;
            foxtrot = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zulu = _closure2_slot18;
                    mike = null;
                    if(!(mike == zulu)) { _fun00008_ip = 53; continue _fun00007 }
 13:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 5;
                    zulu = zulu[mike];
                    mike = undefined;
                    zulu = tango.bind(mike)(zulu);
                    mike = zulu.resetContextMenuState;
                    entity = _closure2_slot16;
                    entity = mike.bind(zulu)(entity);
 53:
                    entity = undefined;
                    return entity;
                }
            };
            foxtrot = sierra.bind(backup)(foxtrot, kilo);
            kilo = backup.useCallback;
            foxtrot = new Array(2);
            foxtrot[0] = status;
            foxtrot[1] = verify;
            verify = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = _closure2_slot6;
                    mike = null;
                    if(!(mike != entity)) { _fun00010_ip = 27; continue _fun00009 }
 13:
                    report = _closure2_slot6;
                    tango = undefined;
                    entity = argFoo;
                    entity = report.bind(tango)(entity);
 27:
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    entity = 5;
                    tango = tango[entity];
                    entity = undefined;
                    report = report.bind(entity)(tango);
                    tango = report.hideContextMenu;
                    tango = tango.bind(report)();
                    report = _closure2_slot17;
                    tango = report.get;
                    tango = tango.bind(report)();
                    report = -1;
                    if(!(report !== tango)) { _fun00010_ip = 111; continue _fun00009 }
 85:
                    zulu = _closure2_slot20;
                    zulu = zulu.current;
                    zulu = zulu[tango];
                    if(!(mike != zulu)) { _fun00010_ip = 111; continue _fun00009 }
 102:
                    mike = zulu.action;
                    mike = mike.bind(zulu)();
 111:
                    return entity;
                }
            };
            foxtrot = kilo.bind(backup)(verify, foxtrot);
            _closure2_slot21 = foxtrot;
            kilo = backup.useCallback;
            verify = new Array(1);
            verify[0] = options;
            options = function() {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 8;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.setAccessibilityFocus;
                mike = {};
                report = _closure2_slot8;
                mike['ref'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            options = kilo.bind(backup)(options, verify);
            _closure2_slot22 = options;
            kilo = backup.useCallback;
            verify = new Array(8);
            verify[0] = target;
            verify[1] = tango;
            verify[2] = zulu;
            verify[3] = vacuum;
            verify[4] = echo;
            verify[5] = foxtrot;
            verify[6] = options;
            verify[7] = output;
            options = function(argFoo, argBar, argBaz, argCorge, argGrault, argFred) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    mike = _closure2_slot5;
                    entity = null;
                    if(!(entity != mike)) { _fun00012_ip = 23; continue _fun00011 }
 13:
                    mike = _closure2_slot5;
                    entity = undefined;
                    entity = mike.bind(entity)();
 23:
                    golf = {};
                    tango = _closure1_slot0;
                    report = _closure1_slot2;
                    entity = 9;
                    oscar = report[entity];
                    entity = undefined;
                    options = tango.bind(entity)(oscar);
                    oscar = options.uid;
                    oscar = oscar.bind(options)();
                    golf['key'] = oscar;
                    oscar = argFoo;
                    golf['x'] = oscar;
                    oscar = argBar;
                    golf['y'] = oscar;
                    oscar = argBaz;
                    golf['positionX'] = oscar;
                    oscar = argCorge;
                    golf['positionY'] = oscar;
                    oscar = argGrault;
                    golf['height'] = oscar;
                    oscar = argFred;
                    golf['width'] = oscar;
                    oscar = _closure2_slot16;
                    golf['state'] = oscar;
                    oscar = _closure2_slot11;
                    golf['items'] = oscar;
                    oscar = _closure2_slot4;
                    golf['title'] = oscar;
                    oscar = _closure2_slot7;
                    golf['keyboardShouldPersistTaps'] = oscar;
                    oscar = _closure2_slot21;
                    golf['requestClose'] = oscar;
                    oscar = _closure2_slot22;
                    golf['onClose'] = oscar;
                    zulu = _closure2_slot12;
                    golf['dividerIndexes'] = zulu;
                    zulu = 5;
                    zulu = report[zulu];
                    oscar = tango.bind(entity)(zulu);
                    zulu = oscar.showContextMenu;
                    zulu = zulu.bind(oscar)(golf);
                    zulu = 10;
                    zulu = report[zulu];
                    tango = tango.bind(entity)(zulu);
                    zulu = tango.isAndroid;
                    zulu = zulu.bind(tango)();
                    if(!zulu) { _fun00012_ip = 300; continue _fun00011 }
 216:
                    golf = _closure1_slot0;
                    options = _closure1_slot2;
                    mike = 11;
                    mike = options[mike];
                    mike = golf.bind(entity)(mike);
                    tango = mike.AccessibilityAnnouncer;
                    zulu = tango.announce;
                    mike = 12;
                    report = options[mike];
                    report = golf.bind(entity)(report);
                    oscar = report.intl;
                    report = oscar.string;
                    mike = options[mike];
                    mike = golf.bind(entity)(mike);
                    mike = mike.t;
                    mike = mike.ZqK0uL;
                    mike = report.bind(oscar)(mike);
                    mike = zulu.bind(tango)(mike);
 300:
                    return entity;
                }
            };
            echo = kilo.bind(backup)(options, verify);
            _closure2_slot23 = echo;
            kilo = backup.useCallback;
            verify = function() { // Original name: V
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    tango = function(argFoo) { // Original name: autoPositionVertical
                        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                            report = argFoo;
                            zulu = _closure1_slot0;
                            mike = _closure1_slot2;
                            entity = 7;
                            mike = mike[entity];
                            entity = undefined;
                            entity = zulu.bind(entity)(mike);
                            entity = entity.CONTEXT_MENU_OFFSET;
                            entity = {};
                            mike = _closure3_slot6;
                            if(!mike) { _fun00016_ip = 58; continue _fun00015 }
 46:
                            tango = _closure3_slot5;
                            mike = _closure3_slot1;
                            if(!(!(tango < mike))) { _fun00016_ip = 79; continue _fun00015 }
 58:
                            tango = _closure3_slot6;
                            mike = 'below';
                            if(!tango) { _fun00016_ip = 77; continue _fun00015 }
 71:
                            mike = 'above';
 77:
                            _fun00016_ip = 109; continue _fun00015;
 79:
                            oscar = _closure3_slot4;
                            tango = _closure3_slot5;
                            oscar = oscar > tango;
                            tango = 'above';
                            if(!oscar) { _fun00016_ip = 106; continue _fun00015 }
 100:
                            tango = 'below';
 106:
                            mike = tango;
 109:
                            tango = 'above';
                            if(!(tango !== mike)) { _fun00016_ip = 125; continue _fun00015 }
 119:
                            tango = _closure3_slot2;
                            _fun00016_ip = 129; continue _fun00015;
 125:
                            tango = _closure3_slot3;
 129:
                            zulu = null;
                            oscar = zulu != report;
                            zulu = 0;
                            if(!oscar) { _fun00016_ip = 143; continue _fun00015 }
 140:
                            zulu = report;
 143:
                            zulu = tango + zulu;
                            entity['y'] = zulu;
                            entity['positionY'] = mike;
                            return entity;
                        }
                    };
                    zulu = function() { // Original name: autoPositionHorizontal
                        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                            zulu = _closure3_slot0;
                            options = _closure1_slot0;
                            verify = _closure1_slot2;
                            mike = 7;
                            tango = verify[mike];
                            golf = undefined;
                            tango = options.bind(golf)(tango);
                            tango = tango.CONTEXT_MENU_EDGE_OFFSET;
                            report = zulu - tango;
                            oscar = _closure2_slot14;
                            tango = verify[mike];
                            tango = options.bind(golf)(tango);
                            tango = tango.CONTEXT_MENU_EDGE_OFFSET;
                            tango = oscar - tango;
                            oscar = _closure3_slot0;
                            mike = verify[mike];
                            mike = options.bind(golf)(mike);
                            mike = mike.CONTEXT_MENU_MIN_WIDTH;
                            mike = oscar + mike;
                            tango = tango - mike;
                            mike = 'left';
                            if(!(report > tango)) { _fun00018_ip = 111; continue _fun00017 }
 103:
                            zulu = _closure3_slot7;
                            mike = 'right';
 111:
                            entity = {};
                            entity['x'] = zulu;
                            entity['positionX'] = mike;
                            return entity;
                        }
                    };
                    report = _closure1_slot0;
                    entity = _closure1_slot2;
                    yankee = 2;
                    mike = entity[yankee];
                    entity = undefined;
                    options = report.bind(entity)(mike);
                    golf = options.measure;
                    report = _closure2_slot10;
                    report = golf.bind(options)(report);
                    romeo = null;
                    if(!(romeo != report)) { _fun00014_ip = 764; continue _fun00013 }
 68:
                    offset = report.pageX;
                    var _closure3_slot0 = offset;
                    result = report.pageY;
                    backup = report.height;
                    options = report.width;
                    report = _closure2_slot4;
                    if(!(romeo == report)) { _fun00014_ip = 108; continue _fun00013 }
 102:
                    golf = _closure2_slot13;
                    _fun00014_ip = 119; continue _fun00013;
 108:
                    foxtrot = _closure2_slot13;
                    report = 1;
                    golf = foxtrot + report;
 119:
                    report = _closure2_slot4;
                    report = romeo != report;
                    romeo = 0;
                    if(!report) { _fun00014_ip = 135; continue _fun00013 }
 132:
                    romeo = 1;
 135:
                    report = _closure2_slot12;
                    report = report.length;
                    foxtrot = romeo + report;
                    romeo = _closure2_slot19;
                    report = romeo.get;
                    report = report.bind(romeo)();
                    golf = report * golf;
                    echo = _closure1_slot0;
                    kilo = _closure1_slot2;
                    romeo = 7;
                    report = kilo[romeo];
                    report = echo.bind(entity)(report);
                    report = report.CONTEXT_MENU_DIVIDER_HEIGHT;
                    report = report * foxtrot;
                    golf = golf + report;
                    var _closure3_slot1 = golf;
                    foxtrot = result + backup;
                    report = kilo[romeo];
                    report = echo.bind(entity)(report);
                    report = report.CONTEXT_MENU_OFFSET;
                    foxtrot = foxtrot + report;
                    var _closure3_slot2 = foxtrot;
                    report = _closure2_slot15;
                    sizing = report - result;
                    report = kilo[romeo];
                    report = echo.bind(entity)(report);
                    report = report.CONTEXT_MENU_OFFSET;
                    report = sizing + report;
                    var _closure3_slot3 = report;
                    sizing = _closure2_slot15;
                    output = sizing - foxtrot;
                    sizing = kilo[romeo];
                    sizing = echo.bind(entity)(sizing);
                    sizing = sizing.CONTEXT_MENU_EDGE_OFFSET;
                    sizing = output - sizing;
                    var _closure3_slot4 = sizing;
                    output = kilo[romeo];
                    output = echo.bind(entity)(output);
                    output = output.CONTEXT_MENU_EDGE_OFFSET;
                    output = result - output;
                    var _closure3_slot5 = output;
                    sizing = sizing < golf;
                    var _closure3_slot6 = sizing;
                    sizing = global;
                    result = sizing.Math;
                    output = result.max;
                    sizing = _closure2_slot14;
                    sizing = sizing - offset;
                    sizing = sizing - options;
                    kilo = kilo[romeo];
                    kilo = echo.bind(entity)(kilo);
                    kilo = kilo.CONTEXT_MENU_EDGE_OFFSET;
                    kilo = output.bind(result)(sizing, kilo);
                    var _closure3_slot7 = kilo;
                    sizing = _closure2_slot3;
                    oscar = 'auto';
                    if(!(oscar !== sizing)) { _fun00014_ip = 688; continue _fun00013 }
 388:
                    sizing = _closure2_slot3;
                    oscar = 'above';
                    if(!(oscar !== sizing)) { _fun00014_ip = 608; continue _fun00013 }
 405:
                    output = _closure2_slot3;
                    sizing = 'below';
                    if(!(sizing !== output)) { _fun00014_ip = 608; continue _fun00013 }
 422:
                    result = _closure2_slot3;
                    output = 'left';
                    sizing = output;
                    if(!(sizing === result)) { _fun00014_ip = 441; continue _fun00013 }
 437:
                    sizing = 'right';
 441:
                    if(!(output !== sizing)) { _fun00014_ip = 478; continue _fun00013 }
 445:
                    output = kilo + options;
                    result = _closure1_slot0;
                    kilo = _closure1_slot2;
                    kilo = kilo[romeo];
                    kilo = result.bind(entity)(kilo);
                    kilo = kilo.CONTEXT_MENU_OFFSET;
                    kilo = output + kilo;
                    _fun00014_ip = 509; continue _fun00013;
 478:
                    output = offset + options;
                    result = _closure1_slot0;
                    offset = _closure1_slot2;
                    offset = offset[romeo];
                    offset = result.bind(entity)(offset);
                    offset = offset.CONTEXT_MENU_OFFSET;
                    kilo = output + offset;
 509:
                    output = _closure1_slot0;
                    offset = _closure1_slot2;
                    romeo = offset[romeo];
                    romeo = output.bind(entity)(romeo);
                    romeo = romeo.CONTEXT_MENU_OFFSET;
                    backup = romeo + backup;
                    romeo = -1;
                    romeo = romeo * backup;
                    romeo = tango.bind(entity)(romeo);
                    sequence = romeo.y;
                    control = romeo.positionY;
                    offset = offset[yankee];
                    result = output.bind(entity)(offset);
                    output = result.runOnJS;
                    offset = _closure2_slot23;
                    offset = output.bind(result)(offset);
                    record = undefined;
                    config = kilo;
                    vacuum = sizing;
                    source = golf;
                    update = options;
                    offset = record[offset](config, sequence, vacuum, control, source, update, echo);
                    _fun00014_ip = 764; continue _fun00013;
 608:
                    romeo = _closure2_slot3;
                    if(!(oscar === romeo)) { _fun00014_ip = 619; continue _fun00013 }
 616:
                    foxtrot = report;
 619:
                    report = zulu.bind(entity)();
                    offset = report.x;
                    vacuum = report.positionX;
                    backup = _closure1_slot0;
                    report = _closure1_slot2;
                    report = report[yankee];
                    kilo = backup.bind(entity)(report);
                    backup = kilo.runOnJS;
                    report = _closure2_slot23;
                    report = backup.bind(kilo)(report);
                    record = undefined;
                    config = offset;
                    sequence = foxtrot;
                    control = romeo;
                    source = golf;
                    update = options;
                    report = record[report](config, sequence, vacuum, control, source, update, echo);
                    _fun00014_ip = 764; continue _fun00013;
 688:
                    tango = tango.bind(entity)();
                    sequence = tango.y;
                    control = tango.positionY;
                    zulu = zulu.bind(entity)();
                    tango = zulu.x;
                    vacuum = zulu.positionX;
                    offset = _closure1_slot0;
                    verify = _closure1_slot2;
                    verify = verify[yankee];
                    offset = offset.bind(entity)(verify);
                    verify = offset.runOnJS;
                    mike = _closure2_slot23;
                    mike = verify.bind(offset)(mike);
                    record = undefined;
                    config = tango;
                    source = golf;
                    update = options;
                    mike = record[mike](config, sequence, vacuum, control, source, update, echo);
 764:
                    return entity;
                }
            };
            options = {};
            target = config[context];
            target = record.bind(report)(target);
            target = target.measure;
            options['measure'] = target;
            options['buttonRef'] = romeo;
            options['title'] = vacuum;
            options['itemCount'] = control;
            options['dividerIndexes'] = output;
            options['approximateItemHeight'] = sequence;
            target = config[papa];
            target = record.bind(report)(target);
            target = target.CONTEXT_MENU_DIVIDER_HEIGHT;
            options['CONTEXT_MENU_DIVIDER_HEIGHT'] = target;
            target = config[papa];
            target = record.bind(report)(target);
            target = target.CONTEXT_MENU_OFFSET;
            options['CONTEXT_MENU_OFFSET'] = target;
            options['screenHeight'] = source;
            target = config[papa];
            target = record.bind(report)(target);
            target = target.CONTEXT_MENU_EDGE_OFFSET;
            options['CONTEXT_MENU_EDGE_OFFSET'] = target;
            options['screenWidth'] = result;
            papa = config[papa];
            papa = record.bind(report)(papa);
            papa = papa.CONTEXT_MENU_MIN_WIDTH;
            options['CONTEXT_MENU_MIN_WIDTH'] = papa;
            options['menuAlign'] = update;
            config = config[context];
            config = record.bind(report)(config);
            config = config.runOnJS;
            options['runOnJS'] = config;
            options['showMenu'] = echo;
            verify['__closure'] = options;
            options = 3821185714246.0;
            verify['__workletHash'] = options;
            options = _closure1_slot6;
            verify['__initData'] = options;
            options = new Array(9);
            options[0] = romeo;
            options[1] = sequence;
            options[2] = vacuum;
            options[3] = control;
            options[4] = source;
            options[5] = update;
            options[6] = echo;
            options[7] = result;
            options[8] = output;
            kilo = kilo.bind(backup)(verify, options);
            _closure2_slot24 = kilo;
            verify = backup.useMemo;
            options = new Array(6);
            options[0] = yankee;
            options[1] = sizing;
            options[2] = foxtrot;
            options[3] = offset;
            options[4] = tango;
            options[5] = kilo;
            tango = function() {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    entity = function() {
                        entity = function() { // Original name: onPanGestureEnd
                            entity = _closure2_slot16;
                            zulu = entity.activeIndex;
                            entity = zulu.get;
                            tango = entity.bind(zulu)();
                            report = _closure1_slot0;
                            zulu = _closure1_slot2;
                            entity = 2;
                            zulu = zulu[entity];
                            entity = undefined;
                            report = report.bind(entity)(zulu);
                            zulu = report.runOnJS;
                            mike = _closure2_slot21;
                            zulu = zulu.bind(report)(mike);
                            mike = -1;
                            mike = mike === tango;
                            mike = zulu.bind(entity)(mike);
                            return entity;
                        };
                        zulu = {};
                        mike = _closure2_slot16;
                        zulu['state'] = mike;
                        golf = _closure1_slot0;
                        oscar = _closure1_slot2;
                        report = 2;
                        oscar = oscar[report];
                        report = undefined;
                        report = golf.bind(report)(oscar);
                        report = report.runOnJS;
                        zulu['runOnJS'] = report;
                        tango = _closure2_slot21;
                        zulu['requestClose'] = tango;
                        entity['__closure'] = zulu;
                        zulu = 15045613912826.0;
                        entity['__workletHash'] = zulu;
                        mike = _closure1_slot7;
                        entity['__initData'] = mike;
                        return entity;
                    };
                    report = undefined;
                    options = entity.bind(report)();
                    entity = _closure2_slot1;
                    if(entity) { _fun00020_ip = 399; continue _fun00019 }
 31:
                    entity = _closure2_slot2;
                    romeo = _closure1_slot0;
                    foxtrot = _closure1_slot2;
                    mike = 13;
                    mike = foxtrot[mike];
                    mike = romeo.bind(report)(mike);
                    tango = mike.Gesture;
                    if(entity) { _fun00020_ip = 312; continue _fun00019 }
 67:
                    entity = tango.Pan;
                    oscar = entity.bind(tango)();
                    mike = oscar.enabled;
                    entity = _closure2_slot9;
                    oscar = mike.bind(oscar)(entity);
                    mike = oscar.onBegin;
                    entity = function() { // Original name: t
                        tango = _closure1_slot0;
                        report = _closure1_slot2;
                        entity = 2;
                        mike = report[entity];
                        entity = undefined;
                        golf = tango.bind(entity)(mike);
                        oscar = golf.runOnJS;
                        mike = 14;
                        zulu = report[mike];
                        zulu = tango.bind(entity)(zulu);
                        zulu = zulu.triggerHapticFeedback;
                        zulu = oscar.bind(golf)(zulu);
                        mike = report[mike];
                        mike = tango.bind(entity)(mike);
                        mike = mike.HapticFeedbackTypes;
                        mike = mike.IMPACT_MEDIUM;
                        mike = zulu.bind(entity)(mike);
                        mike = _closure2_slot24;
                        mike = mike.bind(entity)();
                        return entity;
                    };
                    golf = {};
                    offset = 2;
                    offset = foxtrot[offset];
                    offset = romeo.bind(report)(offset);
                    offset = offset.runOnJS;
                    golf['runOnJS'] = offset;
                    offset = 14;
                    backup = foxtrot[offset];
                    backup = romeo.bind(report)(backup);
                    backup = backup.triggerHapticFeedback;
                    golf['triggerHapticFeedback'] = backup;
                    offset = foxtrot[offset];
                    offset = romeo.bind(report)(offset);
                    offset = offset.HapticFeedbackTypes;
                    golf['HapticFeedbackTypes'] = offset;
                    offset = _closure2_slot24;
                    golf['measureButtonAndShowMenu'] = offset;
                    entity['__closure'] = golf;
                    golf = 12352363869337.0;
                    entity['__workletHash'] = golf;
                    golf = _closure1_slot11;
                    entity['__initData'] = golf;
                    oscar = mike.bind(oscar)(entity);
                    mike = oscar.onUpdate;
                    entity = function(argFoo) { // Original name: e
                        mike = argFoo;
                        tango = _closure1_slot0;
                        zulu = _closure1_slot2;
                        entity = 5;
                        zulu = zulu[entity];
                        entity = undefined;
                        oscar = tango.bind(entity)(zulu);
                        report = oscar.updateContextMenuState;
                        tango = mike.absoluteX;
                        zulu = mike.absoluteY;
                        mike = _closure2_slot16;
                        mike = report.bind(oscar)(tango, zulu, mike);
                        return entity;
                    };
                    golf = {};
                    offset = 5;
                    offset = foxtrot[offset];
                    offset = romeo.bind(report)(offset);
                    offset = offset.updateContextMenuState;
                    golf['updateContextMenuState'] = offset;
                    offset = _closure2_slot16;
                    golf['state'] = offset;
                    entity['__closure'] = golf;
                    golf = 16977333494985.0;
                    entity['__workletHash'] = golf;
                    golf = _closure1_slot12;
                    entity['__initData'] = golf;
                    mike = mike.bind(oscar)(entity);
                    entity = mike.onEnd;
                    entity = entity.bind(mike)(options);
                    _fun00020_ip = 397; continue _fun00019;
 312:
                    mike = tango.Tap;
                    oscar = mike.bind(tango)();
                    tango = oscar.enabled;
                    mike = _closure2_slot9;
                    oscar = tango.bind(oscar)(mike);
                    tango = oscar.onStart;
                    mike = function() { // Original name: n
                        mike = _closure2_slot24;
                        entity = undefined;
                        mike = mike.bind(entity)();
                        return entity;
                    };
                    golf = {};
                    offset = _closure2_slot24;
                    golf['measureButtonAndShowMenu'] = offset;
                    mike['__closure'] = golf;
                    golf = 806186984867.0;
                    mike['__workletHash'] = golf;
                    golf = _closure1_slot10;
                    mike['__initData'] = golf;
                    entity = tango.bind(oscar)(mike);
 397:
                    return entity;
 399:
                    mike = _closure1_slot0;
                    oscar = _closure1_slot2;
                    entity = 13;
                    tango = oscar[entity];
                    tango = mike.bind(report)(tango);
                    golf = tango.Gesture;
                    tango = golf.Pan;
                    golf = tango.bind(golf)();
                    tango = golf.enabled;
                    offset = _closure2_slot9;
                    romeo = tango.bind(golf)(offset);
                    golf = romeo.onUpdate;
                    tango = function(argFoo) { // Original name: E
                        mike = argFoo;
                        tango = _closure1_slot0;
                        zulu = _closure1_slot2;
                        entity = 5;
                        zulu = zulu[entity];
                        entity = undefined;
                        oscar = tango.bind(entity)(zulu);
                        report = oscar.updateContextMenuState;
                        tango = mike.absoluteX;
                        zulu = mike.absoluteY;
                        mike = _closure2_slot16;
                        mike = report.bind(oscar)(tango, zulu, mike);
                        return entity;
                    };
                    foxtrot = {};
                    backup = 5;
                    backup = oscar[backup];
                    backup = mike.bind(report)(backup);
                    backup = backup.updateContextMenuState;
                    foxtrot['updateContextMenuState'] = backup;
                    backup = _closure2_slot16;
                    foxtrot['state'] = backup;
                    tango['__closure'] = foxtrot;
                    foxtrot = 16675037579085.0;
                    tango['__workletHash'] = foxtrot;
                    foxtrot = _closure1_slot8;
                    tango['__initData'] = foxtrot;
                    golf = golf.bind(romeo)(tango);
                    tango = golf.onEnd;
                    tango = tango.bind(golf)(options);
                    golf = oscar[entity];
                    golf = mike.bind(report)(golf);
                    options = golf.Gesture;
                    golf = options.LongPress;
                    options = golf.bind(options)();
                    golf = options.enabled;
                    offset = golf.bind(options)(offset);
                    options = offset.shouldCancelWhenOutside;
                    golf = false;
                    options = options.bind(offset)(golf);
                    golf = options.onStart;
                    zulu = function() { // Original name: o
                        tango = _closure1_slot0;
                        report = _closure1_slot2;
                        entity = 2;
                        mike = report[entity];
                        entity = undefined;
                        golf = tango.bind(entity)(mike);
                        oscar = golf.runOnJS;
                        mike = 14;
                        zulu = report[mike];
                        zulu = tango.bind(entity)(zulu);
                        zulu = zulu.triggerHapticFeedback;
                        zulu = oscar.bind(golf)(zulu);
                        mike = report[mike];
                        mike = tango.bind(entity)(mike);
                        mike = mike.HapticFeedbackTypes;
                        mike = mike.IMPACT_MEDIUM;
                        mike = zulu.bind(entity)(mike);
                        mike = _closure2_slot24;
                        mike = mike.bind(entity)();
                        return entity;
                    };
                    offset = {};
                    romeo = 2;
                    romeo = oscar[romeo];
                    romeo = mike.bind(report)(romeo);
                    romeo = romeo.runOnJS;
                    offset['runOnJS'] = romeo;
                    romeo = 14;
                    foxtrot = oscar[romeo];
                    foxtrot = mike.bind(report)(foxtrot);
                    foxtrot = foxtrot.triggerHapticFeedback;
                    offset['triggerHapticFeedback'] = foxtrot;
                    romeo = oscar[romeo];
                    romeo = mike.bind(report)(romeo);
                    romeo = romeo.HapticFeedbackTypes;
                    offset['HapticFeedbackTypes'] = romeo;
                    yankee = _closure2_slot24;
                    offset['measureButtonAndShowMenu'] = yankee;
                    zulu['__closure'] = offset;
                    offset = 15422046945883.0;
                    zulu['__workletHash'] = offset;
                    verify = _closure1_slot9;
                    zulu['__initData'] = verify;
                    zulu = golf.bind(options)(zulu);
                    entity = oscar[entity];
                    entity = mike.bind(report)(entity);
                    mike = entity.Gesture;
                    entity = mike.Simultaneous;
                    entity = entity.bind(mike)(zulu, tango);
                    return entity;
                }
            };
            options = verify.bind(backup)(tango, options);
            offset = backup.useMemo;
            verify = new Array(1);
            verify[0] = zulu;
            tango = function() {
                zulu = _closure2_slot11;
                mike = zulu.map;
                entity = function(argFoo) {
                    mike = argFoo;
                    entity = {};
                    zulu = mike.label;
                    entity['name'] = zulu;
                    mike = mike.label;
                    entity['label'] = mike;
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            tango = offset.bind(backup)(tango, verify);
            offset = backup.useCallback;
            verify = new Array(1);
            verify[0] = zulu;
            zulu = function(argFoo) {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    mike = argFoo;
                    var _closure3_slot0 = mike;
                    zulu = _closure2_slot11;
                    mike = zulu.find;
                    entity = function(argFoo) {
                        entity = argFoo;
                        mike = entity.label;
                        entity = _closure3_slot0;
                        entity = entity.nativeEvent;
                        entity = entity.actionName;
                        entity = mike === entity;
                        return entity;
                    };
                    mike = mike.bind(zulu)(entity);
                    tango = null;
                    entity = tango == mike;
                    if(entity) { _fun00022_ip = 51; continue _fun00021 }
 42:
                    zulu = mike.action;
                    entity = tango == zulu;
 51:
                    if(entity) { _fun00022_ip = 63; continue _fun00021 }
 54:
                    entity = mike.action;
                    entity = entity.bind(mike)();
 63:
                    entity = undefined;
                    return entity;
                }
            };
            zulu = offset.bind(backup)(zulu, verify);
            foxtrot = backup.useCallback;
            offset = new Array(1);
            offset[0] = kilo;
            verify = function() {
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    entity = 10;
                    zulu = zulu[entity];
                    entity = undefined;
                    tango = tango.bind(entity)(zulu);
                    zulu = tango.isAndroid;
                    zulu = zulu.bind(tango)();
                    if(!zulu) { _fun00024_ip = 67; continue _fun00023 }
 37:
                    report = _closure1_slot0;
                    oscar = _closure1_slot2;
                    tango = 15;
                    tango = oscar[tango];
                    report = report.bind(entity)(tango);
                    tango = report.getIsScreenReaderEnabled;
                    zulu = tango.bind(report)();
 67:
                    if(!zulu) { _fun00024_ip = 112; continue _fun00023 }
 70:
                    zulu = _closure1_slot0;
                    tango = _closure1_slot2;
                    mike = 2;
                    mike = tango[mike];
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.runOnUI;
                    mike = _closure2_slot24;
                    mike = zulu.bind(tango)(mike);
                    mike = mike.bind(entity)();
 112:
                    return entity;
                }
            };
            verify = foxtrot.bind(backup)(verify, offset);
            foxtrot = backup.useCallback;
            offset = new Array(1);
            offset[0] = kilo;
            oscar = function() {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 2;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.runOnUI;
                mike = _closure2_slot24;
                mike = zulu.bind(tango)(mike);
                mike = mike.bind(entity)();
                return entity;
            };
            offset = foxtrot.bind(backup)(oscar, offset);
            oscar = {};
            oscar['ref'] = romeo;
            oscar['onPress'] = verify;
            verify = undefined;
            if(!yankee) { _fun00002_ip = 1255; continue _fun00001 }
 1247:
            verify = undefined;
            if(!entity) { _fun00002_ip = 1255; continue _fun00001 }
 1252:
            verify = offset;
 1255:
            oscar['onLongPress'] = verify;
            oscar['accessibilityActions'] = tango;
            oscar['onAccessibilityAction'] = zulu;
            tango = _closure1_slot5;
            if(entity) { _fun00002_ip = 1327; continue _fun00001 }
 1277:
            zulu = _closure1_slot0;
            verify = _closure1_slot2;
            entity = 13;
            entity = verify[entity];
            entity = zulu.bind(report)(entity);
            zulu = entity.GestureDetector;
            entity = {};
            entity['gesture'] = options;
            options = golf.bind(report)(oscar);
            entity['children'] = options;
            entity = tango.bind(report)(zulu, entity);
            _fun00002_ip = 1348; continue _fun00001;
 1327:
            zulu = _closure1_slot4;
            mike = {};
            oscar = golf.bind(report)(oscar);
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 1348:
            return entity;
        }
    };
    zulu['ContextMenu'] = mike;
    return entity;
})();