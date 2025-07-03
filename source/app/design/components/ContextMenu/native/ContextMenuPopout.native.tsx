// app/design/components/ContextMenu/native/ContextMenuPopout.native.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    romeon = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = romeon;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: ContextMenuDivider
        michal = _closure1_slot9;
        tangon = undefined;
        report = michal.bind(tangon)();
        zuuluu = _closure1_slot6;
        michal = _closure1_slot5;
        entity = {};
        report = report.divider;
        entity['style'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo) { // Original name: renderMenuItems
        michal = argFoo;
        zuuluu = michal.items;
        var _closure2_slot0 = zuuluu;
        tangon = michal.title;
        var _closure2_slot1 = tangon;
        tangon = michal.state;
        var _closure2_slot2 = tangon;
        tangon = michal.onPress;
        var _closure2_slot3 = tangon;
        michal = michal.dividerIndexes;
        var _closure2_slot4 = michal;
        michal = zuuluu.map;
        entity = function(argFoo, argBar) {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = argFoo;
                yankee = argBar;
                romeon = entity.label;
                michal = entity.action;
                var _closure3_slot0 = michal;
                foxtra = entity.iconSource;
                offset = entity.IconComponent;
                entity = entity.variant;
                michal = _closure2_slot0;
                michal = michal.length;
                backup = 1;
                michal = michal - backup;
                golfie = _closure1_slot6;
                tangon = _closure1_slot0;
                report = _closure1_slot2;
                zuuluu = 15;
                zuuluu = report[zuuluu];
                report = undefined;
                zuuluu = tangon.bind(report)(zuuluu);
                tangon = zuuluu.ContextMenuItem;
                zuuluu = {};
                zuuluu['index'] = yankee;
                zuuluu['label'] = romeon;
                kiloes = 0;
                kiloes = kiloes === yankee;
                if(!kiloes) { _fun00002_ip = 122; continue _fun00001 }
 112:
                output = _closure2_slot1;
                sizing = null;
                kiloes = sizing == output;
 122:
                zuuluu['start'] = kiloes;
                michal = yankee === michal;
                zuuluu['end'] = michal;
                michal = _closure2_slot4;
                kiloes = michal.includes;
                backup = yankee + backup;
                backup = kiloes.bind(michal)(backup);
                zuuluu['lastInSection'] = backup;
                zuuluu['iconSource'] = foxtra;
                zuuluu['IconComponent'] = offset;
                verify = _closure2_slot2;
                zuuluu['state'] = verify;
                oscard = function(argFoo) { // Original name: onPress
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        tangon = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 10;
                        michal = michal[entity];
                        entity = undefined;
                        tangon = tangon.bind(entity)(michal);
                        michal = tangon.isAndroid;
                        michal = michal.bind(tangon)();
                        if(!michal) { _fun00004_ip = 67; continue _fun00003 }
 37:
                        tangon = _closure1_slot0;
                        report = _closure1_slot2;
                        zuuluu = 16;
                        zuuluu = report[zuuluu];
                        tangon = tangon.bind(entity)(zuuluu);
                        zuuluu = tangon.getIsScreenReaderEnabled;
                        michal = zuuluu.bind(tangon)();
 67:
                        if(!michal) { _fun00004_ip = 81; continue _fun00003 }
 70:
                        michal = _closure3_slot0;
                        michal = michal.bind(entity)();
 81:
                        tangon = _closure2_slot3;
                        zuuluu = null;
                        if(!(zuuluu != tangon)) { _fun00004_ip = 106; continue _fun00003 }
 94:
                        zuuluu = _closure2_slot3;
                        michal = argFoo;
                        michal = zuuluu.bind(entity)(michal);
 106:
                        return entity;
                    }
                };
                zuuluu['onPress'] = oscard;
                zuuluu['variant'] = entity;
                oscard = global;
                entity = oscard.HermesInternal;
                offset = entity.concat;
                verify = '';
                entity = '-';
                entity = offset.bind(verify)(romeon, entity, yankee);
                golfie = golfie.bind(report)(tangon, zuuluu, entity);
                entity = michal.includes;
                michal = entity.bind(michal)(yankee);
                entity = golfie;
                if(!michal) { _fun00002_ip = 310; continue _fun00001 }
 239:
                tangon = _closure1_slot8;
                zuuluu = _closure1_slot7;
                michal = {};
                offset = _closure1_slot6;
                verify = _closure1_slot17;
                oscard = oscard.HermesInternal;
                option = oscard.concat;
                oscard = 'divider-';
                option = option.bind(oscard)(yankee);
                oscard = {};
                option = offset.bind(report)(verify, oscard, option);
                oscard = new Array(2);
                oscard[0] = option;
                oscard[1] = golfie;
                michal['children'] = oscard;
                entity = tangon.bind(report)(zuuluu, michal);
 310:
                return entity;
            }
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    var _closure1_slot18 = entity;
    entity = function(argFoo) { // Original name: ContextMenuBackdrop
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            report = michal.onPress;
            yankee = michal.visible;
            var _closure2_slot0 = yankee;
            michal = _closure1_slot15;
            tangon = undefined;
            verify = michal.bind(tangon)();
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            michal = 6;
            michal = option[michal];
            zuuluu = golfie.bind(tangon)(michal);
            michal = zuuluu.useAnimatedStyle;
            entity = function() { // Original name: n
                entity = {};
                golfie = _closure1_slot0;
                option = _closure1_slot2;
                michal = 11;
                michal = option[michal];
                oscard = undefined;
                report = golfie.bind(oscard)(michal);
                tangon = report.withSpring;
                zuuluu = _closure2_slot0;
                michal = zuuluu.get;
                zuuluu = michal.bind(zuuluu)();
                michal = 5;
                michal = option[michal];
                michal = golfie.bind(oscard)(michal);
                michal = michal.CONTEXT_MENU_SPRING;
                michal = tangon.bind(report)(zuuluu, michal);
                entity['opacity'] = michal;
                return entity;
            };
            offset = {};
            romeon = 11;
            romeon = option[romeon];
            romeon = golfie.bind(tangon)(romeon);
            romeon = romeon.withSpring;
            offset['withSpring'] = romeon;
            offset['visible'] = yankee;
            yankee = 5;
            yankee = option[yankee];
            yankee = golfie.bind(tangon)(yankee);
            yankee = yankee.CONTEXT_MENU_SPRING;
            offset['CONTEXT_MENU_SPRING'] = yankee;
            entity['__closure'] = offset;
            offset = 7758377027899.0;
            entity['__workletHash'] = offset;
            offset = _closure1_slot16;
            entity['__initData'] = offset;
            yankee = michal.bind(zuuluu)(entity);
            zuuluu = _closure1_slot6;
            entity = 17;
            entity = option[entity];
            entity = golfie.bind(tangon)(entity);
            michal = entity.Backdrop;
            entity = {};
            offset = 'none';
            entity['blur'] = offset;
            romeon = verify.backdrop;
            offset = new Array(2);
            offset[0] = romeon;
            offset[1] = yankee;
            entity['style'] = offset;
            verify = verify.accessibleDismiss;
            entity['accessibleDismissStyle'] = verify;
            entity['onDismiss'] = report;
            report = 10;
            report = option[report];
            golfie = golfie.bind(tangon)(report);
            report = golfie.isAndroid;
            report = report.bind(golfie)();
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            oscard = 18;
            golfie = offset[oscard];
            golfie = verify.bind(tangon)(golfie);
            option = golfie.intl;
            golfie = option.string;
            oscard = offset[oscard];
            oscard = verify.bind(tangon)(oscard);
            oscard = oscard.t;
            if(report) { _fun00006_ip = 306; continue _fun00005 }
 291:
            report = oscard.xs0juL;
            report = golfie.bind(option)(report);
            _fun00006_ip = 319; continue _fun00005;
 306:
            oscard = oscard.hPBScn;
            report = golfie.bind(option)(oscard);
 319:
            entity['accessibilityLabel'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot19 = entity;
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
    golfie = tangon.Keyboard;
    var _closure1_slot4 = golfie;
    golfie = tangon.View;
    var _closure1_slot5 = golfie;
    offset = tangon.StyleSheet;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.jsx;
    var _closure1_slot6 = golfie;
    golfie = tangon.Fragment;
    var _closure1_slot7 = golfie;
    tangon = tangon.jsxs;
    var _closure1_slot8 = tangon;
    tangon = 3;
    golfie = oscard[tangon];
    verify = report.bind(entity)(golfie);
    option = verify.createStyles;
    golfie = {};
    foxtra = {'position': 'absolute', 'backgroundColor': null, 'borderWidth': 1};
    yankee = 4;
    backup = oscard[yankee];
    backup = romeon.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BG_SURFACE_OVERLAY;
    foxtra['backgroundColor'] = backup;
    backup = oscard[yankee];
    backup = romeon.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BORDER_SUBTLE;
    foxtra['borderColor'] = backup;
    backup = oscard[yankee];
    backup = romeon.bind(entity)(backup);
    backup = backup.radii;
    backup = backup.lg;
    foxtra['borderRadius'] = backup;
    backup = 5;
    kiloes = oscard[backup];
    kiloes = report.bind(entity)(kiloes);
    kiloes = kiloes.CONTEXT_MENU_MIN_WIDTH;
    foxtra['minWidth'] = kiloes;
    kiloes = oscard[yankee];
    kiloes = romeon.bind(entity)(kiloes);
    kiloes = kiloes.shadows;
    output = kiloes.SHADOW_HIGH;
    result = foxtra;
    kiloes = copyDataProperties(result, output);
    golfie['container'] = foxtra;
    foxtra = {'width': 20, 'height': 20};
    golfie['formIcon'] = foxtra;
    foxtra = {};
    kiloes = oscard[backup];
    kiloes = report.bind(entity)(kiloes);
    kiloes = kiloes.CONTEXT_MENU_ITEM_PADDING;
    foxtra['padding'] = kiloes;
    golfie['titleContainer'] = foxtra;
    foxtra = {};
    backup = oscard[backup];
    backup = report.bind(entity)(backup);
    backup = backup.CONTEXT_MENU_DIVIDER_HEIGHT;
    foxtra['borderBottomWidth'] = backup;
    backup = oscard[yankee];
    backup = romeon.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.DIVIDER_SUBTLE;
    foxtra['borderBottomColor'] = backup;
    golfie['divider'] = foxtra;
    golfie = option.bind(verify)(golfie);
    var _closure1_slot9 = golfie;
    golfie = {};
    option = "function ContextMenuPopoutNativeTsx1(){const{maxHeight,height,CONTEXT_MENU_MIN_WIDTH,positionY,positionX,CONTEXT_MENU_MIN_SCALE,withSpring,interpolate,visible,CONTEXT_MENU_SPRING,transitionState,TransitionStates,runOnJS,cleanUp,onClose}=this.__closure;const visibleHeight=Math.min(maxHeight,height);const halfHeight=visibleHeight/2;const halfWidth=CONTEXT_MENU_MIN_WIDTH/2;const translateYDirection=positionY==='below'?-1:1;const translateXDirection=positionX==='left'?-1:1;const translateY=translateYDirection*halfHeight+CONTEXT_MENU_MIN_SCALE*-translateYDirection*halfHeight;const translateX=translateXDirection*halfWidth+CONTEXT_MENU_MIN_SCALE*-translateXDirection*halfWidth;return{opacity:withSpring(interpolate(visible.get(),[0,1],[0,1]),CONTEXT_MENU_SPRING,'respect-motion-settings',function(finished){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanUp)();runOnJS(onClose)();}}),transform:[{translateX:withSpring(interpolate(visible.get(),[0,1],[translateX,0]),CONTEXT_MENU_SPRING)},{translateY:withSpring(interpolate(visible.get(),[0,1],[translateY,0]),CONTEXT_MENU_SPRING)},{scale:withSpring(interpolate(visible.get(),[0,1],[CONTEXT_MENU_MIN_SCALE,1]),CONTEXT_MENU_SPRING)}]};}";
    golfie['code'] = option;
    var _closure1_slot10 = golfie;
    golfie = {};
    option = 'function ContextMenuPopoutNativeTsx2(finished){const{transitionState,TransitionStates,runOnJS,cleanUp,onClose}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanUp)();runOnJS(onClose)();}}';
    golfie['code'] = option;
    var _closure1_slot11 = golfie;
    golfie = {};
    option = 'function ContextMenuPopoutNativeTsx3(e){const{updateContextMenuState,state}=this.__closure;updateContextMenuState(e.absoluteX,e.absoluteY,state);}';
    golfie['code'] = option;
    var _closure1_slot12 = golfie;
    golfie = {};
    option = 'function ContextMenuPopoutNativeTsx4(){const{state,runOnJS,requestClose}=this.__closure;const{activeIndex:activeIndex}=state;const isDismiss=activeIndex.get()===-1;runOnJS(requestClose)(isDismiss);}';
    golfie['code'] = option;
    var _closure1_slot13 = golfie;
    golfie = {};
    option = 'function ContextMenuPopoutNativeTsx5(e,state){const{scrollingEnabled}=this.__closure;if(scrollingEnabled.get()){state.fail();}else{state.activate();}}';
    golfie['code'] = option;
    var _closure1_slot14 = golfie;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {};
    yankee = oscard[yankee];
    yankee = romeon.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.CONTEXT_MENU_BACKDROP_BACKGROUND;
    verify['backgroundColor'] = yankee;
    tangon['backdrop'] = verify;
    verify = {};
    output = offset.absoluteFillObject;
    result = verify;
    offset = copyDataProperties(result, output);
    yankee = 'auto';
    offset = 'height';
    verify[offset] = yankee;
    tangon['accessibleDismiss'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot15 = tangon;
    tangon = {};
    golfie = 'function ContextMenuPopoutNativeTsx6(){const{withSpring,visible,CONTEXT_MENU_SPRING}=this.__closure;return{opacity:withSpring(visible.get(),CONTEXT_MENU_SPRING)};}';
    tangon['code'] = golfie;
    var _closure1_slot16 = tangon;
    tangon = 19;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'design/components/ContextMenu/native/ContextMenuPopout.native.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: ContextMenuPopout
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = argFoo;
            michal = zuuluu.menu;
            sequen = zuuluu.transitionState;
            var _closure2_slot0 = sequen;
            update = zuuluu.cleanUp;
            var _closure2_slot1 = update;
            tangon = undefined;
            var _closure2_slot8 = tangon;
            var _closure2_slot9 = tangon;
            var _closure2_slot10 = tangon;
            report = michal.x;
            cntext = michal.positionX;
            var _closure2_slot2 = cntext;
            papara = michal.positionY;
            var _closure2_slot3 = papara;
            target = michal.height;
            var _closure2_slot4 = target;
            echoed = michal.items;
            output = michal.state;
            var _closure2_slot5 = output;
            oscard = michal.requestClose;
            var _closure2_slot6 = oscard;
            sizing = michal.onClose;
            var _closure2_slot7 = sizing;
            result = michal.title;
            zuuluu = michal.keyboardShouldPersistTaps;
            romeon = 'handled';
            if(!(tangon !== zuuluu)) { _fun00008_ip = 136; continue _fun00007 }
 133:
            romeon = zuuluu;
 136:
            kiloes = michal.dividerIndexes;
            backup = michal.y;
            option = _closure1_slot0;
            michal = _closure1_slot2;
            ctrled = 6;
            zuuluu = michal[ctrled];
            golfie = option.bind(tangon)(zuuluu);
            zuuluu = golfie.useSharedValue;
            vacuum = 7;
            michal = michal[vacuum];
            michal = option.bind(tangon)(michal);
            michal = michal.TransitionStates;
            option = michal.MOUNTED;
            michal = 0;
            if(!(sequen === option)) { _fun00008_ip = 208; continue _fun00007 }
 205:
            michal = 1;
 208:
            yankee = zuuluu.bind(golfie)(michal);
            _closure2_slot8 = yankee;
            option = _closure1_slot3;
            golfie = option.useEffect;
            zuuluu = new Array(2);
            zuuluu[0] = sequen;
            zuuluu[1] = yankee;
            michal = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    tangon = _closure2_slot0;
                    report = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    entity = 7;
                    zuuluu = zuuluu[entity];
                    entity = undefined;
                    zuuluu = report.bind(entity)(zuuluu);
                    zuuluu = zuuluu.TransitionStates;
                    zuuluu = zuuluu.YEETED;
                    if(!(tangon !== zuuluu)) { _fun00010_ip = 67; continue _fun00009 }
 48:
                    report = _closure2_slot8;
                    tangon = report.set;
                    zuuluu = 1;
                    zuuluu = tangon.bind(report)(zuuluu);
                    _fun00010_ip = 83; continue _fun00009;
 67:
                    tangon = _closure2_slot8;
                    zuuluu = tangon.set;
                    michal = 0;
                    michal = zuuluu.bind(tangon)(michal);
 83:
                    return entity;
                }
            };
            michal = golfie.bind(option)(michal, zuuluu);
            michal = _closure1_slot9;
            config = michal.bind(tangon)();
            golfie = _closure1_slot1;
            option = _closure1_slot2;
            michal = 8;
            michal = option[michal];
            michal = golfie.bind(tangon)(michal);
            michal = michal.bind(tangon)();
            offset = michal.top;
            zuuluu = michal.bottom;
            michal = 9;
            michal = option[michal];
            golfie = golfie.bind(tangon)(michal);
            michal = {};
            option = true;
            michal['ignoreKeyboard'] = option;
            michal = golfie.bind(tangon)(michal);
            option = michal.width;
            michal = michal.height;
            source = 'above';
            golfie = backup;
            if(!(source === papara)) { _fun00008_ip = 445; continue _fun00007 }
 340:
            record = _closure1_slot0;
            status = _closure1_slot2;
            source = 10;
            source = status[source];
            record = record.bind(tangon)(source);
            source = record.isAndroid;
            source = source.bind(record)();
            golfie = backup;
            if(!source) { _fun00008_ip = 445; continue _fun00007 }
 375:
            record = _closure1_slot4;
            source = record.isVisible;
            source = source.bind(record)();
            golfie = backup;
            if(!source) { _fun00008_ip = 445; continue _fun00007 }
 395:
            record = _closure1_slot4;
            source = record.metrics;
            status = source.bind(record)();
            record = null;
            sierra = record == status;
            source = undefined;
            if(sierra) { _fun00008_ip = 425; continue _fun00007 }
 420:
            source = status.height;
 425:
            record = record != source;
            verify = 0;
            if(!record) { _fun00008_ip = 437; continue _fun00007 }
 434:
            verify = source;
 437:
            verify = verify + zuuluu;
            golfie = backup - verify;
 445:
            verify = 'below';
            verify = verify === papara;
            michal = michal - golfie;
            if(verify) { _fun00008_ip = 498; continue _fun00007 }
 462:
            backup = michal - offset;
            source = _closure1_slot0;
            record = _closure1_slot2;
            offset = 5;
            offset = record[offset];
            offset = source.bind(tangon)(offset);
            offset = offset.CONTEXT_MENU_EDGE_OFFSET;
            backup = backup - offset;
            _fun00008_ip = 532; continue _fun00007;
 498:
            zuuluu = michal - zuuluu;
            offset = _closure1_slot0;
            source = _closure1_slot2;
            michal = 5;
            michal = source[michal];
            michal = offset.bind(tangon)(michal);
            michal = michal.CONTEXT_MENU_EDGE_OFFSET;
            backup = zuuluu - michal;
 532:
            _closure2_slot9 = backup;
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[ctrled];
            offset = zuuluu.bind(tangon)(michal);
            zuuluu = offset.useSharedValue;
            michal = target >= backup;
            michal = zuuluu.bind(offset)(michal);
            _closure2_slot10 = michal;
            source = {};
            zuuluu = 'bottom';
            if(!verify) { _fun00008_ip = 584; continue _fun00007 }
 580:
            zuuluu = 'top';
 584:
            source[zuuluu] = golfie;
            source[cntext] = report;
            zuuluu = 'maxHeight';
            source[zuuluu] = backup;
            golfie = _closure1_slot0;
            verify = _closure1_slot2;
            record = 5;
            zuuluu = verify[record];
            zuuluu = golfie.bind(tangon)(zuuluu);
            zuuluu = zuuluu.CONTEXT_MENU_EDGE_OFFSET;
            zuuluu = option - zuuluu;
            report = zuuluu - report;
            zuuluu = 'maxWidth';
            source[zuuluu] = report;
            zuuluu = verify[ctrled];
            option = golfie.bind(tangon)(zuuluu);
            report = option.useAnimatedStyle;
            zuuluu = function() { // Original name: B
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    entity = global;
                    tangon = entity.Math;
                    zuuluu = tangon.min;
                    michal = _closure2_slot9;
                    entity = _closure2_slot4;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    zuuluu = 2;
                    source = entity / zuuluu;
                    tangon = _closure1_slot0;
                    entity = _closure1_slot2;
                    offset = 5;
                    entity = entity[offset];
                    verify = undefined;
                    entity = tangon.bind(verify)(entity);
                    entity = entity.CONTEXT_MENU_MIN_WIDTH;
                    echoed = entity / zuuluu;
                    zuuluu = _closure2_slot3;
                    report = 1;
                    entity = 'below';
                    update = report;
                    if(!(entity === zuuluu)) { _fun00012_ip = 98; continue _fun00011 }
 92:
                    update = -1;
 98:
                    zuuluu = _closure2_slot2;
                    entity = 'left';
                    golfie = report;
                    if(!(entity === zuuluu)) { _fun00012_ip = 119; continue _fun00011 }
 113:
                    golfie = -1;
 119:
                    entity = {};
                    option = _closure1_slot0;
                    tangon = _closure1_slot2;
                    oscard = 11;
                    zuuluu = tangon[oscard];
                    sizing = option.bind(verify)(zuuluu);
                    kiloes = sizing.withSpring;
                    romeon = 6;
                    zuuluu = tangon[romeon];
                    result = option.bind(verify)(zuuluu);
                    output = result.interpolate;
                    foxtra = _closure2_slot8;
                    zuuluu = foxtra.get;
                    backup = zuuluu.bind(foxtra)();
                    foxtra = [0, 1];
                    zuuluu = [0, 1];
                    backup = output.bind(result)(backup, foxtra, zuuluu);
                    zuuluu = tangon[offset];
                    zuuluu = option.bind(verify)(zuuluu);
                    sequen = zuuluu.CONTEXT_MENU_SPRING;
                    zuuluu = function(argFoo) { // Original name: t
                        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                            entity = argFoo;
                            if(!entity) { _fun00014_ip = 54; continue _fun00013 }
 6:
                            zuuluu = _closure2_slot0;
                            report = _closure1_slot0;
                            tangon = _closure1_slot2;
                            michal = 7;
                            tangon = tangon[michal];
                            michal = undefined;
                            michal = report.bind(michal)(tangon);
                            michal = michal.TransitionStates;
                            michal = michal.YEETED;
                            entity = zuuluu === michal;
 54:
                            if(!entity) { _fun00014_ip = 130; continue _fun00013 }
 57:
                            tangon = _closure1_slot0;
                            report = _closure1_slot2;
                            zuuluu = 6;
                            entity = report[zuuluu];
                            michal = undefined;
                            option = tangon.bind(michal)(entity);
                            golfie = option.runOnJS;
                            oscard = _closure2_slot1;
                            oscard = golfie.bind(option)(oscard);
                            oscard = oscard.bind(michal)();
                            zuuluu = report[zuuluu];
                            tangon = tangon.bind(michal)(zuuluu);
                            zuuluu = tangon.runOnJS;
                            entity = _closure2_slot7;
                            entity = zuuluu.bind(tangon)(entity);
                            entity = entity.bind(michal)();
 130:
                            entity = undefined;
                            return entity;
                        }
                    };
                    output = {};
                    result = _closure2_slot0;
                    output['transitionState'] = result;
                    result = 7;
                    result = tangon[result];
                    result = option.bind(verify)(result);
                    result = result.TransitionStates;
                    output['TransitionStates'] = result;
                    result = tangon[romeon];
                    result = option.bind(verify)(result);
                    result = result.runOnJS;
                    output['runOnJS'] = result;
                    result = _closure2_slot1;
                    output['cleanUp'] = result;
                    result = _closure2_slot7;
                    output['onClose'] = result;
                    zuuluu['__closure'] = output;
                    output = 4025068986009.0;
                    zuuluu['__workletHash'] = output;
                    michal = _closure1_slot11;
                    zuuluu['__initData'] = michal;
                    vacuum = 'respect-motion-settings';
                    record = sizing;
                    config = backup;
                    ctrled = zuuluu;
                    michal = record[kiloes](config, sequen, vacuum, ctrled, source);
                    entity['opacity'] = michal;
                    zuuluu = {};
                    michal = tangon[oscard];
                    kiloes = option.bind(verify)(michal);
                    backup = kiloes.withSpring;
                    michal = tangon[romeon];
                    result = option.bind(verify)(michal);
                    output = result.interpolate;
                    foxtra = _closure2_slot8;
                    michal = foxtra.get;
                    sizing = michal.bind(foxtra)();
                    michal = tangon[offset];
                    michal = option.bind(verify)(michal);
                    foxtra = michal.CONTEXT_MENU_MIN_SCALE;
                    michal = -golfie;
                    michal = foxtra * michal;
                    foxtra = new Array(2);
                    golfie = golfie * echoed;
                    michal = michal * echoed;
                    michal = golfie + michal;
                    foxtra[0] = michal;
                    golfie = 0;
                    foxtra[1] = golfie;
                    michal = [0, 1];
                    foxtra = output.bind(result)(sizing, michal, foxtra);
                    michal = tangon[offset];
                    michal = option.bind(verify)(michal);
                    michal = michal.CONTEXT_MENU_SPRING;
                    michal = backup.bind(kiloes)(foxtra, michal);
                    zuuluu['translateX'] = michal;
                    michal = new Array(3);
                    michal[0] = zuuluu;
                    zuuluu = {};
                    foxtra = tangon[oscard];
                    kiloes = option.bind(verify)(foxtra);
                    backup = kiloes.withSpring;
                    foxtra = tangon[romeon];
                    result = option.bind(verify)(foxtra);
                    output = result.interpolate;
                    sizing = _closure2_slot8;
                    foxtra = sizing.get;
                    sizing = foxtra.bind(sizing)();
                    foxtra = tangon[offset];
                    foxtra = option.bind(verify)(foxtra);
                    echoed = foxtra.CONTEXT_MENU_MIN_SCALE;
                    foxtra = -update;
                    echoed = echoed * foxtra;
                    foxtra = new Array(2);
                    update = update * source;
                    echoed = echoed * source;
                    echoed = update + echoed;
                    foxtra[0] = echoed;
                    foxtra[1] = golfie;
                    golfie = [0, 1];
                    foxtra = output.bind(result)(sizing, golfie, foxtra);
                    golfie = tangon[offset];
                    golfie = option.bind(verify)(golfie);
                    golfie = golfie.CONTEXT_MENU_SPRING;
                    golfie = backup.bind(kiloes)(foxtra, golfie);
                    zuuluu['translateY'] = golfie;
                    michal[1] = zuuluu;
                    zuuluu = {};
                    oscard = tangon[oscard];
                    golfie = option.bind(verify)(oscard);
                    oscard = golfie.withSpring;
                    romeon = tangon[romeon];
                    backup = option.bind(verify)(romeon);
                    foxtra = backup.interpolate;
                    romeon = _closure2_slot8;
                    yankee = romeon.get;
                    romeon = yankee.bind(romeon)();
                    yankee = tangon[offset];
                    yankee = option.bind(verify)(yankee);
                    kiloes = yankee.CONTEXT_MENU_MIN_SCALE;
                    yankee = new Array(2);
                    yankee[0] = kiloes;
                    yankee[1] = report;
                    report = [0, 1];
                    report = foxtra.bind(backup)(romeon, report, yankee);
                    tangon = tangon[offset];
                    tangon = option.bind(verify)(tangon);
                    tangon = tangon.CONTEXT_MENU_SPRING;
                    tangon = oscard.bind(golfie)(report, tangon);
                    zuuluu['scale'] = tangon;
                    michal[2] = zuuluu;
                    entity['transform'] = michal;
                    return entity;
                }
            };
            offset = {};
            offset['maxHeight'] = backup;
            offset['height'] = target;
            target = verify[record];
            target = golfie.bind(tangon)(target);
            target = target.CONTEXT_MENU_MIN_WIDTH;
            offset['CONTEXT_MENU_MIN_WIDTH'] = target;
            offset['positionY'] = papara;
            offset['positionX'] = cntext;
            cntext = verify[record];
            cntext = golfie.bind(tangon)(cntext);
            cntext = cntext.CONTEXT_MENU_MIN_SCALE;
            offset['CONTEXT_MENU_MIN_SCALE'] = cntext;
            cntext = 11;
            cntext = verify[cntext];
            cntext = golfie.bind(tangon)(cntext);
            cntext = cntext.withSpring;
            offset['withSpring'] = cntext;
            cntext = verify[ctrled];
            cntext = golfie.bind(tangon)(cntext);
            cntext = cntext.interpolate;
            offset['interpolate'] = cntext;
            offset['visible'] = yankee;
            record = verify[record];
            record = golfie.bind(tangon)(record);
            record = record.CONTEXT_MENU_SPRING;
            offset['CONTEXT_MENU_SPRING'] = record;
            offset['transitionState'] = sequen;
            vacuum = verify[vacuum];
            vacuum = golfie.bind(tangon)(vacuum);
            vacuum = vacuum.TransitionStates;
            offset['TransitionStates'] = vacuum;
            vacuum = verify[ctrled];
            vacuum = golfie.bind(tangon)(vacuum);
            vacuum = vacuum.runOnJS;
            offset['runOnJS'] = vacuum;
            offset['cleanUp'] = update;
            offset['onClose'] = sizing;
            zuuluu['__closure'] = offset;
            offset = 16778623591634.0;
            zuuluu['__workletHash'] = offset;
            offset = _closure1_slot10;
            zuuluu['__initData'] = offset;
            update = report.bind(option)(zuuluu);
            report = _closure1_slot3;
            offset = report.useMemo;
            option = new Array(3);
            option[0] = output;
            option[1] = oscard;
            option[2] = michal;
            zuuluu = function() {
                report = function(argFoo) { // Original name: t
                    michal = argFoo;
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    entity = 12;
                    zuuluu = zuuluu[entity];
                    entity = undefined;
                    oscard = tangon.bind(entity)(zuuluu);
                    report = oscard.updateContextMenuState;
                    tangon = michal.absoluteX;
                    zuuluu = michal.absoluteY;
                    michal = _closure2_slot5;
                    michal = report.bind(oscard)(tangon, zuuluu, michal);
                    return entity;
                };
                michal = {};
                verify = _closure1_slot0;
                offset = _closure1_slot2;
                zuuluu = 12;
                zuuluu = offset[zuuluu];
                option = undefined;
                zuuluu = verify.bind(option)(zuuluu);
                zuuluu = zuuluu.updateContextMenuState;
                michal['updateContextMenuState'] = zuuluu;
                golfie = _closure2_slot5;
                michal['state'] = golfie;
                report['__closure'] = michal;
                michal = 14952697295916.0;
                report['__workletHash'] = michal;
                michal = _closure1_slot12;
                report['__initData'] = michal;
                michal = 13;
                michal = offset[michal];
                michal = verify.bind(option)(michal);
                zuuluu = michal.Gesture;
                michal = zuuluu.Pan;
                yankee = michal.bind(zuuluu)();
                zuuluu = yankee.manualActivation;
                michal = true;
                yankee = zuuluu.bind(yankee)(michal);
                zuuluu = yankee.onTouchesDown;
                michal = function(argFoo, argBar) { // Original name: n
                    _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                        michal = argBar;
                        zuuluu = _closure2_slot10;
                        entity = zuuluu.get;
                        entity = entity.bind(zuuluu)();
                        if(entity) { _fun00016_ip = 34; continue _fun00015 }
 22:
                        entity = michal.activate;
                        entity = entity.bind(michal)();
                        _fun00016_ip = 44; continue _fun00015;
 34:
                        entity = michal.fail;
                        entity = entity.bind(michal)();
 44:
                        entity = undefined;
                        return entity;
                    }
                };
                romeon = {};
                foxtra = _closure2_slot10;
                romeon['scrollingEnabled'] = foxtra;
                michal['__closure'] = romeon;
                romeon = 1299584703797.0;
                michal['__workletHash'] = romeon;
                romeon = _closure1_slot14;
                michal['__initData'] = romeon;
                zuuluu = zuuluu.bind(yankee)(michal);
                michal = zuuluu.onStart;
                zuuluu = michal.bind(zuuluu)(report);
                michal = zuuluu.onUpdate;
                zuuluu = michal.bind(zuuluu)(report);
                michal = zuuluu.onEnd;
                entity = function() { // Original name: e
                    entity = _closure2_slot5;
                    zuuluu = entity.activeIndex;
                    entity = zuuluu.get;
                    tangon = entity.bind(zuuluu)();
                    report = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    entity = 6;
                    zuuluu = zuuluu[entity];
                    entity = undefined;
                    report = report.bind(entity)(zuuluu);
                    zuuluu = report.runOnJS;
                    michal = _closure2_slot6;
                    zuuluu = zuuluu.bind(report)(michal);
                    michal = -1;
                    michal = michal === tangon;
                    michal = zuuluu.bind(entity)(michal);
                    return entity;
                };
                report = {};
                report['state'] = golfie;
                golfie = 6;
                golfie = offset[golfie];
                golfie = verify.bind(option)(golfie);
                golfie = golfie.runOnJS;
                report['runOnJS'] = golfie;
                oscard = _closure2_slot6;
                report['requestClose'] = oscard;
                entity['__closure'] = report;
                report = 14495067009140.0;
                entity['__workletHash'] = report;
                tangon = _closure1_slot13;
                entity['__initData'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            offset = offset.bind(report)(zuuluu, option);
            option = report.useCallback;
            zuuluu = new Array(2);
            zuuluu[0] = backup;
            zuuluu[1] = michal;
            michal = function(argFoo) {
                zuuluu = _closure2_slot10;
                michal = zuuluu.set;
                report = global;
                golfie = report.Math;
                oscard = golfie.round;
                tangon = argFoo;
                tangon = tangon.nativeEvent;
                tangon = tangon.layout;
                tangon = tangon.height;
                tangon = oscard.bind(golfie)(tangon);
                oscard = report.Math;
                report = oscard.round;
                entity = _closure2_slot9;
                entity = report.bind(oscard)(entity);
                entity = tangon >= entity;
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            };
            backup = option.bind(report)(michal, zuuluu);
            option = report.useCallback;
            zuuluu = new Array(1);
            zuuluu[0] = oscard;
            michal = function() {
                zuuluu = _closure2_slot6;
                entity = undefined;
                michal = true;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            vacuum = option.bind(report)(michal, zuuluu);
            zuuluu = report.useCallback;
            michal = new Array(1);
            michal[0] = oscard;
            entity = function() {
                zuuluu = _closure2_slot6;
                entity = undefined;
                michal = false;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            sizing = zuuluu.bind(report)(entity, michal);
            zuuluu = _closure1_slot8;
            michal = _closure1_slot7;
            entity = {};
            option = _closure1_slot6;
            oscard = _closure1_slot19;
            report = {};
            report['onPress'] = vacuum;
            report['visible'] = yankee;
            oscard = option.bind(tangon)(oscard, report);
            report = new Array(2);
            report[0] = oscard;
            option = _closure1_slot6;
            oscard = 13;
            oscard = verify[oscard];
            oscard = golfie.bind(tangon)(oscard);
            golfie = oscard.GestureDetector;
            oscard = {};
            oscard['gesture'] = offset;
            yankee = _closure1_slot8;
            offset = _closure1_slot1;
            verify = verify[ctrled];
            verify = offset.bind(tangon)(verify);
            offset = verify.ScrollView;
            verify = {};
            verify['onLayout'] = backup;
            backup = false;
            verify['bounces'] = backup;
            ctrled = config.container;
            backup = new Array(3);
            backup[0] = ctrled;
            backup[1] = source;
            backup[2] = update;
            verify['style'] = backup;
            verify['keyboardShouldPersistTaps'] = romeon;
            romeon = 'list';
            verify['accessibilityRole'] = romeon;
            backup = null;
            romeon = backup != result;
            if(!romeon) { _fun00008_ip = 1285; continue _fun00007 }
 1154:
            source = _closure1_slot8;
            update = _closure1_slot7;
            romeon = {};
            sequen = _closure1_slot6;
            vacuum = _closure1_slot5;
            ctrled = {};
            config = config.titleContainer;
            ctrled['style'] = config;
            cntext = _closure1_slot6;
            record = _closure1_slot0;
            papara = _closure1_slot2;
            config = 14;
            config = papara[config];
            config = record.bind(tangon)(config);
            record = config.Text;
            config = {'variant': 'text-md/bold', 'color': 'header-primary', 'accessibilityRole': 'header'};
            config['children'] = result;
            config = cntext.bind(tangon)(record, config);
            ctrled['children'] = config;
            vacuum = sequen.bind(tangon)(vacuum, ctrled);
            ctrled = new Array(2);
            ctrled[0] = vacuum;
            config = _closure1_slot6;
            sequen = _closure1_slot17;
            vacuum = {};
            vacuum = config.bind(tangon)(sequen, vacuum);
            ctrled[1] = vacuum;
            romeon['children'] = ctrled;
            backup = source.bind(tangon)(update, romeon);
 1285:
            romeon = new Array(2);
            romeon[0] = backup;
            backup = _closure1_slot18;
            foxtra = {};
            foxtra['items'] = echoed;
            foxtra['title'] = result;
            foxtra['state'] = output;
            foxtra['onPress'] = sizing;
            foxtra['dividerIndexes'] = kiloes;
            foxtra = backup.bind(tangon)(foxtra);
            romeon[1] = foxtra;
            verify['children'] = romeon;
            verify = yankee.bind(tangon)(offset, verify);
            oscard['children'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['ContextMenuPopout'] = michal;
    return entity;
})();