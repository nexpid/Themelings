// app/design/components/ContextMenu/native/ContextMenu.native.tsx
export default (function(argFoo, argBar, argBaz, argCor, argGra, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.Fragment;
    var _closure1_slot4 = golfie;
    tangon = tangon.jsx;
    var _closure1_slot5 = tangon;
    tangon = {};
    golfie = "function ContextMenuNativeTsx1(){const{measure,buttonRef,title,itemCount,dividerIndexes,approximateItemHeight,CONTEXT_MENU_DIVIDER_HEIGHT,CONTEXT_MENU_OFFSET,screenHeight,CONTEXT_MENU_EDGE_OFFSET,screenWidth,CONTEXT_MENU_MIN_WIDTH,menuAlign,runOnJS,showMenu}=this.__closure;const measurements=measure(buttonRef);if(measurements!=null){const{pageX:pageX,pageY:pageY,height:height,width:width}=measurements;const rowCount=title!=null?itemCount+1:itemCount;const dividerCount=(title!=null?1:0)+dividerIndexes.length;const menuHeight=approximateItemHeight.get()*rowCount+CONTEXT_MENU_DIVIDER_HEIGHT*dividerCount;const positionBelowOffset=pageY+height+CONTEXT_MENU_OFFSET;const positionAboveOffset=screenHeight-pageY+CONTEXT_MENU_OFFSET;const availableSpaceBelow=screenHeight-positionBelowOffset-CONTEXT_MENU_EDGE_OFFSET;const availableSpaceAbove=pageY-CONTEXT_MENU_EDGE_OFFSET;const wouldOverflowBelow=availableSpaceBelow<menuHeight;const wouldOverflowAbove=availableSpaceAbove<menuHeight;const minimumRightPosition=Math.max(screenWidth-pageX-width,CONTEXT_MENU_EDGE_OFFSET);function autoPositionVertical(offset){let positionY='below';let y=pageY+height+CONTEXT_MENU_OFFSET;if(wouldOverflowBelow&&wouldOverflowAbove){if(availableSpaceBelow>availableSpaceAbove){positionY='below';}else{positionY='above';}}else if(wouldOverflowBelow){positionY='above';}else{positionY='below';}y=(positionY==='above'?positionAboveOffset:positionBelowOffset)+(offset!==null&&offset!==void 0?offset:0);return{y:y,positionY:positionY};}function autoPositionHorizontal(){const distanceFromLeftEdge=pageX-CONTEXT_MENU_EDGE_OFFSET;const distanceFromRightEdge=screenWidth-CONTEXT_MENU_EDGE_OFFSET-(pageX+CONTEXT_MENU_MIN_WIDTH);let positionX='left';let x=pageX;if(distanceFromLeftEdge>distanceFromRightEdge){positionX='right';x=minimumRightPosition;}return{x:x,positionX:positionX};}if(menuAlign==='auto'){const{y:y,positionY:positionY}=autoPositionVertical();const{x:x,positionX:positionX}=autoPositionHorizontal();runOnJS(showMenu)(x,y,positionX,positionY,menuHeight,width);return;}else if(menuAlign==='above'||menuAlign==='below'){const positionY=menuAlign;const y=positionY==='above'?positionAboveOffset:positionBelowOffset;const{x:x,positionX:positionX}=autoPositionHorizontal();runOnJS(showMenu)(x,y,positionX,positionY,menuHeight,width);return;}else{const positionX=menuAlign==='left'?'right':'left';const x=positionX==='left'?pageX+width+CONTEXT_MENU_OFFSET:minimumRightPosition+width+CONTEXT_MENU_OFFSET;const{y:y,positionY:positionY}=autoPositionVertical(-1*(CONTEXT_MENU_OFFSET+height));runOnJS(showMenu)(x,y,positionX,positionY,menuHeight,width);return;}}}";
    tangon['code'] = golfie;
    var _closure1_slot6 = tangon;
    tangon = {};
    golfie = 'function onPanGestureEnd_ContextMenuNativeTsx2(){const{state,runOnJS,requestClose}=this.__closure;const{activeIndex:activeIndex}=state;const isDismiss=activeIndex.get()===-1;runOnJS(requestClose)(isDismiss);}';
    tangon['code'] = golfie;
    var _closure1_slot7 = tangon;
    tangon = {};
    golfie = 'function ContextMenuNativeTsx3(e){const{updateContextMenuState,state}=this.__closure;updateContextMenuState(e.absoluteX,e.absoluteY,state);}';
    tangon['code'] = golfie;
    var _closure1_slot8 = tangon;
    tangon = {};
    golfie = 'function ContextMenuNativeTsx4(){const{runOnJS,triggerHapticFeedback,HapticFeedbackTypes,measureButtonAndShowMenu}=this.__closure;runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);measureButtonAndShowMenu();}';
    tangon['code'] = golfie;
    var _closure1_slot9 = tangon;
    tangon = {};
    golfie = 'function ContextMenuNativeTsx5(){const{measureButtonAndShowMenu}=this.__closure;measureButtonAndShowMenu();}';
    tangon['code'] = golfie;
    var _closure1_slot10 = tangon;
    tangon = {};
    golfie = 'function ContextMenuNativeTsx6(e){const{updateContextMenuState,state}=this.__closure;updateContextMenuState(e.absoluteX,e.absoluteY,state);}';
    tangon['code'] = golfie;
    var _closure1_slot11 = tangon;
    tangon = {};
    golfie = 'function ContextMenuNativeTsx7(){const{runOnJS,triggerHapticFeedback,HapticFeedbackTypes,measureButtonAndShowMenu}=this.__closure;runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);measureButtonAndShowMenu();}';
    tangon['code'] = golfie;
    var _closure1_slot12 = tangon;
    tangon = 15;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'design/components/ContextMenu/native/ContextMenu.native.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: ContextMenu
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            golfie = michal.children;
            zuuluu = michal.items;
            var _closure2_slot0 = zuuluu;
            yankee = michal.triggerOnLongPress;
            report = undefined;
            if(!(yankee === report)) { _fun00002_ip = 34; continue _fun00001 }
 32:
            yankee = false;
 34:
            var _closure2_slot1 = yankee;
            sizing = michal.triggerOnTap;
            if(!(sizing === report)) { _fun00002_ip = 50; continue _fun00001 }
 48:
            sizing = false;
 50:
            var _closure2_slot2 = sizing;
            entity = michal.disableGesture;
            if(!(entity === report)) { _fun00002_ip = 68; continue _fun00001 }
 66:
            entity = false;
 68:
            update = michal.align;
            if(!(update === report)) { _fun00002_ip = 82; continue _fun00001 }
 78:
            update = 'auto';
 82:
            var _closure2_slot3 = update;
            vacuum = michal.title;
            var _closure2_slot4 = vacuum;
            target = michal.onOpen;
            var _closure2_slot5 = target;
            verify = michal.onClose;
            var _closure2_slot6 = verify;
            echoed = michal.keyboardShouldPersistTaps;
            var _closure2_slot7 = echoed;
            option = michal.returnRef;
            var _closure2_slot8 = option;
            offset = michal.enabled;
            if(!(offset === report)) { _fun00002_ip = 148; continue _fun00001 }
 146:
            offset = true;
 148:
            var _closure2_slot9 = offset;
            tangon = michal.buttonRef;
            var _closure2_slot10 = tangon;
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
            foxtra = _closure1_slot0;
            romeon = _closure1_slot2;
            cntext = 2;
            romeon = romeon[cntext];
            foxtra = foxtra.bind(report)(romeon);
            romeon = foxtra.useAnimatedRef;
            romeon = romeon.bind(foxtra)();
            foxtra = null;
            if(!(foxtra != tangon)) { _fun00002_ip = 260; continue _fun00001 }
 257:
            romeon = tangon;
 260:
            _closure2_slot10 = romeon;
            backup = _closure1_slot3;
            foxtra = backup.useMemo;
            tangon = new Array(1);
            tangon[0] = zuuluu;
            zuuluu = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    oscard = _closure2_slot0;
                    michal = global;
                    report = michal.Array;
                    zuuluu = report.isArray;
                    michal = 0;
                    michal = oscard[michal];
                    report = zuuluu.bind(report)(michal);
                    oscard = _closure2_slot0;
                    if(report) { _fun00004_ip = 45; continue _fun00003 }
 40:
                    zuuluu = oscard;
                    _fun00004_ip = 55; continue _fun00003;
 45:
                    michal = oscard.flat;
                    zuuluu = michal.bind(oscard)();
 55:
                    var _closure3_slot0 = zuuluu;
                    michal = new Array(0);
                    var _closure3_slot1 = michal;
                    if(!report) { _fun00004_ip = 89; continue _fun00003 }
 70:
                    report = _closure2_slot0;
                    tangon = report.forEach;
                    entity = function(argFoo, argBar) {
                        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                            entity = argBar;
                            oscard = 0;
                            if(!(entity > oscard)) { _fun00006_ip = 48; continue _fun00005 }
 9:
                            zuuluu = _closure3_slot1;
                            michal = zuuluu.push;
                            report = _closure3_slot0;
                            tangon = report.indexOf;
                            entity = argFoo;
                            entity = entity[oscard];
                            entity = tangon.bind(report)(entity);
                            entity = michal.bind(zuuluu)(entity);
 48:
                            entity = undefined;
                            return entity;
                        }
                    };
                    entity = tangon.bind(report)(entity);
 89:
                    entity = {};
                    entity['items'] = zuuluu;
                    entity['dividerIndexes'] = michal;
                    return entity;
                }
            };
            tangon = foxtra.bind(backup)(zuuluu, tangon);
            zuuluu = tangon.items;
            _closure2_slot11 = zuuluu;
            output = tangon.dividerIndexes;
            _closure2_slot12 = output;
            ctrled = zuuluu.length;
            _closure2_slot13 = ctrled;
            foxtra = _closure1_slot1;
            sequen = _closure1_slot2;
            tangon = 3;
            tangon = sequen[tangon];
            foxtra = foxtra.bind(report)(tangon);
            tangon = {};
            backup = true;
            tangon['ignoreKeyboard'] = backup;
            tangon = foxtra.bind(report)(tangon);
            result = tangon.width;
            _closure2_slot14 = result;
            source = tangon.height;
            _closure2_slot15 = source;
            kiloes = _closure1_slot0;
            foxtra = 4;
            tangon = sequen[foxtra];
            backup = kiloes.bind(report)(tangon);
            tangon = backup.useContextMenuState;
            tangon = tangon.bind(backup)();
            _closure2_slot16 = tangon;
            status = tangon.activeIndex;
            _closure2_slot17 = status;
            backup = 5;
            backup = sequen[backup];
            kiloes = kiloes.bind(report)(backup);
            backup = kiloes.useFontScale;
            sierra = backup.bind(kiloes)();
            if(!(report === option)) { _fun00002_ip = 442; continue _fun00001 }
 439:
            option = romeon;
 442:
            _closure2_slot8 = option;
            record = _closure1_slot0;
            config = _closure1_slot2;
            foxtra = config[foxtra];
            backup = record.bind(report)(foxtra);
            foxtra = backup.useActiveContextMenu;
            foxtra = foxtra.bind(backup)();
            _closure2_slot18 = foxtra;
            backup = config[cntext];
            sequen = record.bind(report)(backup);
            kiloes = sequen.useSharedValue;
            backup = global;
            whisks = backup.Math;
            limora = whisks.max;
            papara = 6;
            backup = config[papara];
            backup = record.bind(report)(backup);
            equals = backup.CONTEXT_MENU_ITEM_BASE_HEIGHT;
            backup = config[papara];
            backup = record.bind(report)(backup);
            backup = backup.CONTEXT_MENU_ITEM_PADDING;
            backup = cntext * backup;
            backup = equals - backup;
            equals = backup * sierra;
            backup = config[papara];
            backup = record.bind(report)(backup);
            backup = backup.CONTEXT_MENU_ITEM_PADDING;
            backup = cntext * backup;
            sierra = config[papara];
            sierra = record.bind(report)(sierra);
            sierra = sierra.CONTEXT_MENU_ITEM_BASE_HEIGHT;
            backup = equals + backup;
            backup = limora.bind(whisks)(backup, sierra);
            sequen = kiloes.bind(sequen)(backup);
            _closure2_slot19 = sequen;
            backup = _closure1_slot3;
            kiloes = backup.useRef;
            kiloes = kiloes.bind(backup)(zuuluu);
            _closure2_slot20 = kiloes;
            limora = backup.useLayoutEffect;
            sierra = new Array(1);
            sierra[0] = zuuluu;
            kiloes = function() {
                michal = _closure2_slot20;
                entity = _closure2_slot11;
                michal['current'] = entity;
                entity = undefined;
                return entity;
            };
            kiloes = limora.bind(backup)(kiloes, sierra);
            sierra = backup.useLayoutEffect;
            kiloes = new Array(2);
            kiloes[0] = foxtra;
            kiloes[1] = tangon;
            foxtra = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zuuluu = _closure2_slot18;
                    michal = null;
                    if(!(michal == zuuluu)) { _fun00008_ip = 53; continue _fun00007 }
 13:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 4;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    zuuluu = tangon.bind(michal)(zuuluu);
                    michal = zuuluu.resetContextMenuState;
                    entity = _closure2_slot16;
                    entity = michal.bind(zuuluu)(entity);
 53:
                    entity = undefined;
                    return entity;
                }
            };
            foxtra = sierra.bind(backup)(foxtra, kiloes);
            kiloes = backup.useCallback;
            foxtra = new Array(2);
            foxtra[0] = status;
            foxtra[1] = verify;
            verify = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = _closure2_slot6;
                    michal = null;
                    if(!(michal != entity)) { _fun00010_ip = 27; continue _fun00009 }
 13:
                    report = _closure2_slot6;
                    tangon = undefined;
                    entity = argFoo;
                    entity = report.bind(tangon)(entity);
 27:
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    entity = 4;
                    tangon = tangon[entity];
                    entity = undefined;
                    report = report.bind(entity)(tangon);
                    tangon = report.hideContextMenu;
                    tangon = tangon.bind(report)();
                    report = _closure2_slot17;
                    tangon = report.get;
                    tangon = tangon.bind(report)();
                    report = -1;
                    if(!(report !== tangon)) { _fun00010_ip = 111; continue _fun00009 }
 85:
                    zuuluu = _closure2_slot20;
                    zuuluu = zuuluu.current;
                    zuuluu = zuuluu[tangon];
                    if(!(michal != zuuluu)) { _fun00010_ip = 111; continue _fun00009 }
 102:
                    michal = zuuluu.action;
                    michal = michal.bind(zuuluu)();
 111:
                    return entity;
                }
            };
            foxtra = kiloes.bind(backup)(verify, foxtra);
            _closure2_slot21 = foxtra;
            kiloes = backup.useCallback;
            verify = new Array(1);
            verify[0] = option;
            option = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 7;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.setAccessibilityFocus;
                michal = {};
                report = _closure2_slot8;
                michal['ref'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            option = kiloes.bind(backup)(option, verify);
            _closure2_slot22 = option;
            kiloes = backup.useCallback;
            verify = new Array(8);
            verify[0] = target;
            verify[1] = tangon;
            verify[2] = zuuluu;
            verify[3] = vacuum;
            verify[4] = echoed;
            verify[5] = foxtra;
            verify[6] = option;
            verify[7] = output;
            option = function(argFoo, argBar, argBaz, argCor, argGra, argFre) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    michal = _closure2_slot5;
                    entity = null;
                    if(!(entity != michal)) { _fun00012_ip = 23; continue _fun00011 }
 13:
                    michal = _closure2_slot5;
                    entity = undefined;
                    entity = michal.bind(entity)();
 23:
                    golfie = {};
                    tangon = _closure1_slot0;
                    report = _closure1_slot2;
                    entity = 8;
                    oscard = report[entity];
                    entity = undefined;
                    option = tangon.bind(entity)(oscard);
                    oscard = option.uid;
                    oscard = oscard.bind(option)();
                    golfie['key'] = oscard;
                    oscard = argFoo;
                    golfie['x'] = oscard;
                    oscard = argBar;
                    golfie['y'] = oscard;
                    oscard = argBaz;
                    golfie['positionX'] = oscard;
                    oscard = argCor;
                    golfie['positionY'] = oscard;
                    oscard = argGra;
                    golfie['height'] = oscard;
                    oscard = argFre;
                    golfie['width'] = oscard;
                    oscard = _closure2_slot16;
                    golfie['state'] = oscard;
                    oscard = _closure2_slot11;
                    golfie['items'] = oscard;
                    oscard = _closure2_slot4;
                    golfie['title'] = oscard;
                    oscard = _closure2_slot7;
                    golfie['keyboardShouldPersistTaps'] = oscard;
                    oscard = _closure2_slot21;
                    golfie['requestClose'] = oscard;
                    oscard = _closure2_slot22;
                    golfie['onClose'] = oscard;
                    zuuluu = _closure2_slot12;
                    golfie['dividerIndexes'] = zuuluu;
                    zuuluu = 4;
                    zuuluu = report[zuuluu];
                    oscard = tangon.bind(entity)(zuuluu);
                    zuuluu = oscard.showContextMenu;
                    zuuluu = zuuluu.bind(oscard)(golfie);
                    zuuluu = 9;
                    zuuluu = report[zuuluu];
                    tangon = tangon.bind(entity)(zuuluu);
                    zuuluu = tangon.isAndroid;
                    zuuluu = zuuluu.bind(tangon)();
                    if(!zuuluu) { _fun00012_ip = 300; continue _fun00011 }
 216:
                    golfie = _closure1_slot0;
                    option = _closure1_slot2;
                    michal = 10;
                    michal = option[michal];
                    michal = golfie.bind(entity)(michal);
                    tangon = michal.AccessibilityAnnouncer;
                    zuuluu = tangon.announce;
                    michal = 11;
                    report = option[michal];
                    report = golfie.bind(entity)(report);
                    oscard = report.intl;
                    report = oscard.string;
                    michal = option[michal];
                    michal = golfie.bind(entity)(michal);
                    michal = michal.t;
                    michal = michal.ZqK0uL;
                    michal = report.bind(oscard)(michal);
                    michal = zuuluu.bind(tangon)(michal);
 300:
                    return entity;
                }
            };
            echoed = kiloes.bind(backup)(option, verify);
            _closure2_slot23 = echoed;
            kiloes = backup.useCallback;
            verify = function() { // Original name: B
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    tangon = function(argFoo) { // Original name: autoPositionVertical
                        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                            report = argFoo;
                            zuuluu = _closure1_slot0;
                            michal = _closure1_slot2;
                            entity = 6;
                            michal = michal[entity];
                            entity = undefined;
                            entity = zuuluu.bind(entity)(michal);
                            entity = entity.CONTEXT_MENU_OFFSET;
                            entity = {};
                            michal = _closure3_slot6;
                            if(!michal) { _fun00016_ip = 58; continue _fun00015 }
 46:
                            tangon = _closure3_slot5;
                            michal = _closure3_slot1;
                            if(!(!(tangon < michal))) { _fun00016_ip = 79; continue _fun00015 }
 58:
                            tangon = _closure3_slot6;
                            michal = 'below';
                            if(!tangon) { _fun00016_ip = 77; continue _fun00015 }
 71:
                            michal = 'above';
 77:
                            _fun00016_ip = 109; continue _fun00015;
 79:
                            oscard = _closure3_slot4;
                            tangon = _closure3_slot5;
                            oscard = oscard > tangon;
                            tangon = 'above';
                            if(!oscard) { _fun00016_ip = 106; continue _fun00015 }
 100:
                            tangon = 'below';
 106:
                            michal = tangon;
 109:
                            tangon = 'above';
                            if(!(tangon !== michal)) { _fun00016_ip = 125; continue _fun00015 }
 119:
                            tangon = _closure3_slot2;
                            _fun00016_ip = 129; continue _fun00015;
 125:
                            tangon = _closure3_slot3;
 129:
                            zuuluu = null;
                            oscard = zuuluu != report;
                            zuuluu = 0;
                            if(!oscard) { _fun00016_ip = 143; continue _fun00015 }
 140:
                            zuuluu = report;
 143:
                            zuuluu = tangon + zuuluu;
                            entity['y'] = zuuluu;
                            entity['positionY'] = michal;
                            return entity;
                        }
                    };
                    zuuluu = function() { // Original name: autoPositionHorizontal
                        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                            zuuluu = _closure3_slot0;
                            option = _closure1_slot0;
                            verify = _closure1_slot2;
                            michal = 6;
                            tangon = verify[michal];
                            golfie = undefined;
                            tangon = option.bind(golfie)(tangon);
                            tangon = tangon.CONTEXT_MENU_EDGE_OFFSET;
                            report = zuuluu - tangon;
                            oscard = _closure2_slot14;
                            tangon = verify[michal];
                            tangon = option.bind(golfie)(tangon);
                            tangon = tangon.CONTEXT_MENU_EDGE_OFFSET;
                            tangon = oscard - tangon;
                            oscard = _closure3_slot0;
                            michal = verify[michal];
                            michal = option.bind(golfie)(michal);
                            michal = michal.CONTEXT_MENU_MIN_WIDTH;
                            michal = oscard + michal;
                            tangon = tangon - michal;
                            michal = 'left';
                            if(!(report > tangon)) { _fun00018_ip = 111; continue _fun00017 }
 103:
                            zuuluu = _closure3_slot7;
                            michal = 'right';
 111:
                            entity = {};
                            entity['x'] = zuuluu;
                            entity['positionX'] = michal;
                            return entity;
                        }
                    };
                    report = _closure1_slot0;
                    entity = _closure1_slot2;
                    yankee = 2;
                    michal = entity[yankee];
                    entity = undefined;
                    option = report.bind(entity)(michal);
                    golfie = option.measure;
                    report = _closure2_slot10;
                    report = golfie.bind(option)(report);
                    romeon = null;
                    if(!(romeon != report)) { _fun00014_ip = 760; continue _fun00013 }
 64:
                    offset = report.pageX;
                    var _closure3_slot0 = offset;
                    result = report.pageY;
                    backup = report.height;
                    option = report.width;
                    report = _closure2_slot4;
                    if(!(romeon == report)) { _fun00014_ip = 104; continue _fun00013 }
 98:
                    golfie = _closure2_slot13;
                    _fun00014_ip = 115; continue _fun00013;
 104:
                    foxtra = _closure2_slot13;
                    report = 1;
                    golfie = foxtra + report;
 115:
                    report = _closure2_slot4;
                    report = romeon != report;
                    romeon = 0;
                    if(!report) { _fun00014_ip = 131; continue _fun00013 }
 128:
                    romeon = 1;
 131:
                    report = _closure2_slot12;
                    report = report.length;
                    foxtra = romeon + report;
                    romeon = _closure2_slot19;
                    report = romeon.get;
                    report = report.bind(romeon)();
                    golfie = report * golfie;
                    echoed = _closure1_slot0;
                    kiloes = _closure1_slot2;
                    romeon = 6;
                    report = kiloes[romeon];
                    report = echoed.bind(entity)(report);
                    report = report.CONTEXT_MENU_DIVIDER_HEIGHT;
                    report = report * foxtra;
                    golfie = golfie + report;
                    var _closure3_slot1 = golfie;
                    foxtra = result + backup;
                    report = kiloes[romeon];
                    report = echoed.bind(entity)(report);
                    report = report.CONTEXT_MENU_OFFSET;
                    foxtra = foxtra + report;
                    var _closure3_slot2 = foxtra;
                    report = _closure2_slot15;
                    sizing = report - result;
                    report = kiloes[romeon];
                    report = echoed.bind(entity)(report);
                    report = report.CONTEXT_MENU_OFFSET;
                    report = sizing + report;
                    var _closure3_slot3 = report;
                    sizing = _closure2_slot15;
                    output = sizing - foxtra;
                    sizing = kiloes[romeon];
                    sizing = echoed.bind(entity)(sizing);
                    sizing = sizing.CONTEXT_MENU_EDGE_OFFSET;
                    sizing = output - sizing;
                    var _closure3_slot4 = sizing;
                    output = kiloes[romeon];
                    output = echoed.bind(entity)(output);
                    output = output.CONTEXT_MENU_EDGE_OFFSET;
                    output = result - output;
                    var _closure3_slot5 = output;
                    sizing = sizing < golfie;
                    var _closure3_slot6 = sizing;
                    sizing = global;
                    result = sizing.Math;
                    output = result.max;
                    sizing = _closure2_slot14;
                    sizing = sizing - offset;
                    sizing = sizing - option;
                    kiloes = kiloes[romeon];
                    kiloes = echoed.bind(entity)(kiloes);
                    kiloes = kiloes.CONTEXT_MENU_EDGE_OFFSET;
                    kiloes = output.bind(result)(sizing, kiloes);
                    var _closure3_slot7 = kiloes;
                    sizing = _closure2_slot3;
                    oscard = 'auto';
                    if(!(oscard !== sizing)) { _fun00014_ip = 684; continue _fun00013 }
 384:
                    sizing = _closure2_slot3;
                    oscard = 'above';
                    if(!(oscard !== sizing)) { _fun00014_ip = 604; continue _fun00013 }
 401:
                    output = _closure2_slot3;
                    sizing = 'below';
                    if(!(sizing !== output)) { _fun00014_ip = 604; continue _fun00013 }
 418:
                    result = _closure2_slot3;
                    output = 'left';
                    sizing = output;
                    if(!(sizing === result)) { _fun00014_ip = 437; continue _fun00013 }
 433:
                    sizing = 'right';
 437:
                    if(!(output !== sizing)) { _fun00014_ip = 474; continue _fun00013 }
 441:
                    output = kiloes + option;
                    result = _closure1_slot0;
                    kiloes = _closure1_slot2;
                    kiloes = kiloes[romeon];
                    kiloes = result.bind(entity)(kiloes);
                    kiloes = kiloes.CONTEXT_MENU_OFFSET;
                    kiloes = output + kiloes;
                    _fun00014_ip = 505; continue _fun00013;
 474:
                    output = offset + option;
                    result = _closure1_slot0;
                    offset = _closure1_slot2;
                    offset = offset[romeon];
                    offset = result.bind(entity)(offset);
                    offset = offset.CONTEXT_MENU_OFFSET;
                    kiloes = output + offset;
 505:
                    output = _closure1_slot0;
                    offset = _closure1_slot2;
                    romeon = offset[romeon];
                    romeon = output.bind(entity)(romeon);
                    romeon = romeon.CONTEXT_MENU_OFFSET;
                    backup = romeon + backup;
                    romeon = -1;
                    romeon = romeon * backup;
                    romeon = tangon.bind(entity)(romeon);
                    sequen = romeon.y;
                    ctrled = romeon.positionY;
                    offset = offset[yankee];
                    result = output.bind(entity)(offset);
                    output = result.runOnJS;
                    offset = _closure2_slot23;
                    offset = output.bind(result)(offset);
                    record = undefined;
                    config = kiloes;
                    vacuum = sizing;
                    source = golfie;
                    update = option;
                    offset = record[offset](config, sequen, vacuum, ctrled, source, update, echoed);
                    _fun00014_ip = 760; continue _fun00013;
 604:
                    romeon = _closure2_slot3;
                    if(!(oscard === romeon)) { _fun00014_ip = 615; continue _fun00013 }
 612:
                    foxtra = report;
 615:
                    report = zuuluu.bind(entity)();
                    offset = report.x;
                    vacuum = report.positionX;
                    backup = _closure1_slot0;
                    report = _closure1_slot2;
                    report = report[yankee];
                    kiloes = backup.bind(entity)(report);
                    backup = kiloes.runOnJS;
                    report = _closure2_slot23;
                    report = backup.bind(kiloes)(report);
                    record = undefined;
                    config = offset;
                    sequen = foxtra;
                    ctrled = romeon;
                    source = golfie;
                    update = option;
                    report = record[report](config, sequen, vacuum, ctrled, source, update, echoed);
                    _fun00014_ip = 760; continue _fun00013;
 684:
                    tangon = tangon.bind(entity)();
                    sequen = tangon.y;
                    ctrled = tangon.positionY;
                    zuuluu = zuuluu.bind(entity)();
                    tangon = zuuluu.x;
                    vacuum = zuuluu.positionX;
                    offset = _closure1_slot0;
                    verify = _closure1_slot2;
                    verify = verify[yankee];
                    offset = offset.bind(entity)(verify);
                    verify = offset.runOnJS;
                    michal = _closure2_slot23;
                    michal = verify.bind(offset)(michal);
                    record = undefined;
                    config = tangon;
                    source = golfie;
                    update = option;
                    michal = record[michal](config, sequen, vacuum, ctrled, source, update, echoed);
 760:
                    return entity;
                }
            };
            option = {};
            target = config[cntext];
            target = record.bind(report)(target);
            target = target.measure;
            option['measure'] = target;
            option['buttonRef'] = romeon;
            option['title'] = vacuum;
            option['itemCount'] = ctrled;
            option['dividerIndexes'] = output;
            option['approximateItemHeight'] = sequen;
            target = config[papara];
            target = record.bind(report)(target);
            target = target.CONTEXT_MENU_DIVIDER_HEIGHT;
            option['CONTEXT_MENU_DIVIDER_HEIGHT'] = target;
            target = config[papara];
            target = record.bind(report)(target);
            target = target.CONTEXT_MENU_OFFSET;
            option['CONTEXT_MENU_OFFSET'] = target;
            option['screenHeight'] = source;
            target = config[papara];
            target = record.bind(report)(target);
            target = target.CONTEXT_MENU_EDGE_OFFSET;
            option['CONTEXT_MENU_EDGE_OFFSET'] = target;
            option['screenWidth'] = result;
            papara = config[papara];
            papara = record.bind(report)(papara);
            papara = papara.CONTEXT_MENU_MIN_WIDTH;
            option['CONTEXT_MENU_MIN_WIDTH'] = papara;
            option['menuAlign'] = update;
            config = config[cntext];
            config = record.bind(report)(config);
            config = config.runOnJS;
            option['runOnJS'] = config;
            option['showMenu'] = echoed;
            verify['__closure'] = option;
            option = 3821185714246.0;
            verify['__workletHash'] = option;
            option = _closure1_slot6;
            verify['__initData'] = option;
            option = new Array(9);
            option[0] = romeon;
            option[1] = sequen;
            option[2] = vacuum;
            option[3] = ctrled;
            option[4] = source;
            option[5] = update;
            option[6] = echoed;
            option[7] = result;
            option[8] = output;
            kiloes = kiloes.bind(backup)(verify, option);
            _closure2_slot24 = kiloes;
            verify = backup.useMemo;
            option = new Array(6);
            option[0] = yankee;
            option[1] = sizing;
            option[2] = foxtra;
            option[3] = offset;
            option[4] = tangon;
            option[5] = kiloes;
            tangon = function() {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    entity = function() {
                        entity = function() { // Original name: onPanGestureEnd
                            entity = _closure2_slot16;
                            zuuluu = entity.activeIndex;
                            entity = zuuluu.get;
                            tangon = entity.bind(zuuluu)();
                            report = _closure1_slot0;
                            zuuluu = _closure1_slot2;
                            entity = 2;
                            zuuluu = zuuluu[entity];
                            entity = undefined;
                            report = report.bind(entity)(zuuluu);
                            zuuluu = report.runOnJS;
                            michal = _closure2_slot21;
                            zuuluu = zuuluu.bind(report)(michal);
                            michal = -1;
                            michal = michal === tangon;
                            michal = zuuluu.bind(entity)(michal);
                            return entity;
                        };
                        zuuluu = {};
                        michal = _closure2_slot16;
                        zuuluu['state'] = michal;
                        golfie = _closure1_slot0;
                        oscard = _closure1_slot2;
                        report = 2;
                        oscard = oscard[report];
                        report = undefined;
                        report = golfie.bind(report)(oscard);
                        report = report.runOnJS;
                        zuuluu['runOnJS'] = report;
                        tangon = _closure2_slot21;
                        zuuluu['requestClose'] = tangon;
                        entity['__closure'] = zuuluu;
                        zuuluu = 15045613912826.0;
                        entity['__workletHash'] = zuuluu;
                        michal = _closure1_slot7;
                        entity['__initData'] = michal;
                        return entity;
                    };
                    report = undefined;
                    option = entity.bind(report)();
                    entity = _closure2_slot1;
                    if(entity) { _fun00020_ip = 391; continue _fun00019 }
 29:
                    entity = _closure2_slot2;
                    romeon = _closure1_slot0;
                    foxtra = _closure1_slot2;
                    michal = 12;
                    michal = foxtra[michal];
                    michal = romeon.bind(report)(michal);
                    tangon = michal.Gesture;
                    if(entity) { _fun00020_ip = 306; continue _fun00019 }
 65:
                    entity = tangon.Pan;
                    oscard = entity.bind(tangon)();
                    michal = oscard.enabled;
                    entity = _closure2_slot9;
                    oscard = michal.bind(oscard)(entity);
                    michal = oscard.onBegin;
                    entity = function() { // Original name: t
                        tangon = _closure1_slot0;
                        report = _closure1_slot2;
                        entity = 2;
                        michal = report[entity];
                        entity = undefined;
                        golfie = tangon.bind(entity)(michal);
                        oscard = golfie.runOnJS;
                        michal = 13;
                        zuuluu = report[michal];
                        zuuluu = tangon.bind(entity)(zuuluu);
                        zuuluu = zuuluu.triggerHapticFeedback;
                        zuuluu = oscard.bind(golfie)(zuuluu);
                        michal = report[michal];
                        michal = tangon.bind(entity)(michal);
                        michal = michal.HapticFeedbackTypes;
                        michal = michal.IMPACT_MEDIUM;
                        michal = zuuluu.bind(entity)(michal);
                        michal = _closure2_slot24;
                        michal = michal.bind(entity)();
                        return entity;
                    };
                    golfie = {};
                    offset = 2;
                    offset = foxtra[offset];
                    offset = romeon.bind(report)(offset);
                    offset = offset.runOnJS;
                    golfie['runOnJS'] = offset;
                    offset = 13;
                    backup = foxtra[offset];
                    backup = romeon.bind(report)(backup);
                    backup = backup.triggerHapticFeedback;
                    golfie['triggerHapticFeedback'] = backup;
                    offset = foxtra[offset];
                    offset = romeon.bind(report)(offset);
                    offset = offset.HapticFeedbackTypes;
                    golfie['HapticFeedbackTypes'] = offset;
                    offset = _closure2_slot24;
                    golfie['measureButtonAndShowMenu'] = offset;
                    entity['__closure'] = golfie;
                    golfie = 3614426364216.0;
                    entity['__workletHash'] = golfie;
                    golfie = _closure1_slot12;
                    entity['__initData'] = golfie;
                    oscard = michal.bind(oscard)(entity);
                    michal = oscard.onUpdate;
                    entity = function(argFoo) { // Original name: e
                        michal = argFoo;
                        tangon = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        entity = 4;
                        zuuluu = zuuluu[entity];
                        entity = undefined;
                        oscard = tangon.bind(entity)(zuuluu);
                        report = oscard.updateContextMenuState;
                        tangon = michal.absoluteX;
                        zuuluu = michal.absoluteY;
                        michal = _closure2_slot16;
                        michal = report.bind(oscard)(tangon, zuuluu, michal);
                        return entity;
                    };
                    golfie = {};
                    offset = 4;
                    offset = foxtra[offset];
                    offset = romeon.bind(report)(offset);
                    offset = offset.updateContextMenuState;
                    golfie['updateContextMenuState'] = offset;
                    offset = _closure2_slot16;
                    golfie['state'] = offset;
                    entity['__closure'] = golfie;
                    golfie = 8243568905832.0;
                    entity['__workletHash'] = golfie;
                    golfie = _closure1_slot11;
                    entity['__initData'] = golfie;
                    michal = michal.bind(oscard)(entity);
                    entity = michal.onEnd;
                    entity = entity.bind(michal)(option);
                    _fun00020_ip = 389; continue _fun00019;
 306:
                    michal = tangon.Tap;
                    oscard = michal.bind(tangon)();
                    tangon = oscard.enabled;
                    michal = _closure2_slot9;
                    oscard = tangon.bind(oscard)(michal);
                    tangon = oscard.onStart;
                    michal = function() { // Original name: n
                        michal = _closure2_slot24;
                        entity = undefined;
                        michal = michal.bind(entity)();
                        return entity;
                    };
                    golfie = {};
                    offset = _closure2_slot24;
                    golfie['measureButtonAndShowMenu'] = offset;
                    michal['__closure'] = golfie;
                    golfie = 806186984867.0;
                    michal['__workletHash'] = golfie;
                    golfie = _closure1_slot10;
                    michal['__initData'] = golfie;
                    entity = tangon.bind(oscard)(michal);
 389:
                    return entity;
 391:
                    michal = _closure1_slot0;
                    oscard = _closure1_slot2;
                    entity = 12;
                    tangon = oscard[entity];
                    tangon = michal.bind(report)(tangon);
                    golfie = tangon.Gesture;
                    tangon = golfie.Pan;
                    golfie = tangon.bind(golfie)();
                    tangon = golfie.enabled;
                    offset = _closure2_slot9;
                    romeon = tangon.bind(golfie)(offset);
                    golfie = romeon.onUpdate;
                    tangon = function(argFoo) { // Original name: i
                        michal = argFoo;
                        tangon = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        entity = 4;
                        zuuluu = zuuluu[entity];
                        entity = undefined;
                        oscard = tangon.bind(entity)(zuuluu);
                        report = oscard.updateContextMenuState;
                        tangon = michal.absoluteX;
                        zuuluu = michal.absoluteY;
                        michal = _closure2_slot16;
                        michal = report.bind(oscard)(tangon, zuuluu, michal);
                        return entity;
                    };
                    foxtra = {};
                    backup = 4;
                    backup = oscard[backup];
                    backup = michal.bind(report)(backup);
                    backup = backup.updateContextMenuState;
                    foxtra['updateContextMenuState'] = backup;
                    backup = _closure2_slot16;
                    foxtra['state'] = backup;
                    tangon['__closure'] = foxtra;
                    foxtra = 16675037579085.0;
                    tangon['__workletHash'] = foxtra;
                    foxtra = _closure1_slot8;
                    tangon['__initData'] = foxtra;
                    golfie = golfie.bind(romeon)(tangon);
                    tangon = golfie.onEnd;
                    tangon = tangon.bind(golfie)(option);
                    golfie = oscard[entity];
                    golfie = michal.bind(report)(golfie);
                    option = golfie.Gesture;
                    golfie = option.LongPress;
                    option = golfie.bind(option)();
                    golfie = option.enabled;
                    offset = golfie.bind(option)(offset);
                    option = offset.shouldCancelWhenOutside;
                    golfie = false;
                    option = option.bind(offset)(golfie);
                    golfie = option.onStart;
                    zuuluu = function() { // Original name: o
                        tangon = _closure1_slot0;
                        report = _closure1_slot2;
                        entity = 2;
                        michal = report[entity];
                        entity = undefined;
                        golfie = tangon.bind(entity)(michal);
                        oscard = golfie.runOnJS;
                        michal = 13;
                        zuuluu = report[michal];
                        zuuluu = tangon.bind(entity)(zuuluu);
                        zuuluu = zuuluu.triggerHapticFeedback;
                        zuuluu = oscard.bind(golfie)(zuuluu);
                        michal = report[michal];
                        michal = tangon.bind(entity)(michal);
                        michal = michal.HapticFeedbackTypes;
                        michal = michal.IMPACT_MEDIUM;
                        michal = zuuluu.bind(entity)(michal);
                        michal = _closure2_slot24;
                        michal = michal.bind(entity)();
                        return entity;
                    };
                    offset = {};
                    romeon = 2;
                    romeon = oscard[romeon];
                    romeon = michal.bind(report)(romeon);
                    romeon = romeon.runOnJS;
                    offset['runOnJS'] = romeon;
                    romeon = 13;
                    foxtra = oscard[romeon];
                    foxtra = michal.bind(report)(foxtra);
                    foxtra = foxtra.triggerHapticFeedback;
                    offset['triggerHapticFeedback'] = foxtra;
                    romeon = oscard[romeon];
                    romeon = michal.bind(report)(romeon);
                    romeon = romeon.HapticFeedbackTypes;
                    offset['HapticFeedbackTypes'] = romeon;
                    yankee = _closure2_slot24;
                    offset['measureButtonAndShowMenu'] = yankee;
                    zuuluu['__closure'] = offset;
                    offset = 15422046945883.0;
                    zuuluu['__workletHash'] = offset;
                    verify = _closure1_slot9;
                    zuuluu['__initData'] = verify;
                    zuuluu = golfie.bind(option)(zuuluu);
                    entity = oscard[entity];
                    entity = michal.bind(report)(entity);
                    michal = entity.Gesture;
                    entity = michal.Simultaneous;
                    entity = entity.bind(michal)(zuuluu, tangon);
                    return entity;
                }
            };
            option = verify.bind(backup)(tangon, option);
            offset = backup.useMemo;
            verify = new Array(1);
            verify[0] = zuuluu;
            tangon = function() {
                zuuluu = _closure2_slot11;
                michal = zuuluu.map;
                entity = function(argFoo) {
                    michal = argFoo;
                    entity = {};
                    zuuluu = michal.label;
                    entity['name'] = zuuluu;
                    michal = michal.label;
                    entity['label'] = michal;
                    return entity;
                };
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            tangon = offset.bind(backup)(tangon, verify);
            offset = backup.useCallback;
            verify = new Array(1);
            verify[0] = zuuluu;
            zuuluu = function(argFoo) {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    michal = argFoo;
                    var _closure3_slot0 = michal;
                    zuuluu = _closure2_slot11;
                    michal = zuuluu.find;
                    entity = function(argFoo) {
                        entity = argFoo;
                        michal = entity.label;
                        entity = _closure3_slot0;
                        entity = entity.nativeEvent;
                        entity = entity.actionName;
                        entity = michal === entity;
                        return entity;
                    };
                    michal = michal.bind(zuuluu)(entity);
                    tangon = null;
                    entity = tangon == michal;
                    if(entity) { _fun00022_ip = 49; continue _fun00021 }
 40:
                    zuuluu = michal.action;
                    entity = tangon == zuuluu;
 49:
                    if(entity) { _fun00022_ip = 61; continue _fun00021 }
 52:
                    entity = michal.action;
                    entity = entity.bind(michal)();
 61:
                    entity = undefined;
                    return entity;
                }
            };
            zuuluu = offset.bind(backup)(zuuluu, verify);
            foxtra = backup.useCallback;
            offset = new Array(1);
            offset[0] = kiloes;
            verify = function() {
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    entity = 9;
                    zuuluu = zuuluu[entity];
                    entity = undefined;
                    tangon = tangon.bind(entity)(zuuluu);
                    zuuluu = tangon.isAndroid;
                    zuuluu = zuuluu.bind(tangon)();
                    if(!zuuluu) { _fun00024_ip = 67; continue _fun00023 }
 37:
                    report = _closure1_slot0;
                    oscard = _closure1_slot2;
                    tangon = 14;
                    tangon = oscard[tangon];
                    report = report.bind(entity)(tangon);
                    tangon = report.getIsScreenReaderEnabled;
                    zuuluu = tangon.bind(report)();
 67:
                    if(!zuuluu) { _fun00024_ip = 112; continue _fun00023 }
 70:
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot2;
                    michal = 2;
                    michal = tangon[michal];
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.runOnUI;
                    michal = _closure2_slot24;
                    michal = zuuluu.bind(tangon)(michal);
                    michal = michal.bind(entity)();
 112:
                    return entity;
                }
            };
            verify = foxtra.bind(backup)(verify, offset);
            foxtra = backup.useCallback;
            offset = new Array(1);
            offset[0] = kiloes;
            oscard = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 2;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.runOnUI;
                michal = _closure2_slot24;
                michal = zuuluu.bind(tangon)(michal);
                michal = michal.bind(entity)();
                return entity;
            };
            offset = foxtra.bind(backup)(oscard, offset);
            oscard = {};
            oscard['ref'] = romeon;
            oscard['onPress'] = verify;
            verify = undefined;
            if(!yankee) { _fun00002_ip = 1215; continue _fun00001 }
 1207:
            verify = undefined;
            if(!entity) { _fun00002_ip = 1215; continue _fun00001 }
 1212:
            verify = offset;
 1215:
            oscard['onLongPress'] = verify;
            oscard['accessibilityActions'] = tangon;
            oscard['onAccessibilityAction'] = zuuluu;
            tangon = _closure1_slot5;
            if(entity) { _fun00002_ip = 1287; continue _fun00001 }
 1237:
            zuuluu = _closure1_slot0;
            verify = _closure1_slot2;
            entity = 12;
            entity = verify[entity];
            entity = zuuluu.bind(report)(entity);
            zuuluu = entity.GestureDetector;
            entity = {};
            entity['gesture'] = option;
            option = golfie.bind(report)(oscard);
            entity['children'] = option;
            entity = tangon.bind(report)(zuuluu, entity);
            _fun00002_ip = 1308; continue _fun00001;
 1287:
            zuuluu = _closure1_slot4;
            michal = {};
            oscard = golfie.bind(report)(oscard);
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 1308:
            return entity;
        }
    };
    zuuluu['ContextMenu'] = michal;
    return entity;
})();