// app/design/components/SegmentedControl/native/SegmentedControl.native.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
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
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.View;
    var _closure1_slot4 = golf;
    tango = tango.ScrollView;
    var _closure1_slot5 = tango;
    tango = 2;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot6 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot7 = tango;
    tango = {'mass': 0.3, 'damping': 13, 'stiffness': 100, 'restDisplacementThreshold': 0.001, 'overshootClamping': true};
    var _closure1_slot8 = tango;
    tango = 3;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = function(argFoo) {
        options = argFoo;
        entity = {};
        mike = {};
        golf = 1;
        mike['flexGrow'] = golf;
        entity['scrollContentContainer'] = mike;
        mike = {'backgroundColor': null, 'borderRadius': null, 'paddingVertical': null, 'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
        report = _closure1_slot1;
        oscar = _closure1_slot2;
        zulu = 4;
        verify = oscar[zulu];
        tango = undefined;
        verify = report.bind(tango)(verify);
        verify = verify.colors;
        verify = verify.INPUT_BACKGROUND;
        mike['backgroundColor'] = verify;
        verify = oscar[zulu];
        verify = report.bind(tango)(verify);
        verify = verify.radii;
        verify = verify.lg;
        verify = verify + options;
        mike['borderRadius'] = verify;
        mike['paddingVertical'] = options;
        entity['controlsContainer'] = mike;
        mike = {'position': 'absolute', 'width': '100%', 'height': '100%', 'borderRadius': null, 'flexDirection': 'row'};
        options = oscar[zulu];
        options = report.bind(tango)(options);
        options = options.radii;
        options = options.lg;
        mike['borderRadius'] = options;
        entity['indicatorContainer'] = mike;
        mike = {};
        mike['flex'] = golf;
        golf = oscar[zulu];
        golf = report.bind(tango)(golf);
        golf = golf.colors;
        golf = golf.REDESIGN_INPUT_CONTROL_ACTIVE_BG;
        mike['backgroundColor'] = golf;
        golf = oscar[zulu];
        golf = report.bind(tango)(golf);
        golf = golf.radii;
        golf = golf.lg;
        mike['borderRadius'] = golf;
        zulu = oscar[zulu];
        zulu = report.bind(tango)(zulu);
        zulu = zulu.shadows;
        offset = zulu.SHADOW_LOW;
        yankee = mike;
        zulu = copyDataProperties(yankee, offset);
        entity['indicator'] = mike;
        return entity;
    };
    tango = golf.bind(options)(tango);
    var _closure1_slot9 = tango;
    tango = {};
    golf = 'function SegmentedControlNativeTsx1(){const{indicatorWidth}=this.__closure;return indicatorWidth.get();}';
    tango['code'] = golf;
    var _closure1_slot10 = tango;
    tango = {};
    golf = 'function SegmentedControlNativeTsx2(_,previous){const{previousIndicatorWidth}=this.__closure;if(previous!=null){previousIndicatorWidth.set(previous);}}';
    tango['code'] = golf;
    var _closure1_slot11 = tango;
    tango = {};
    golf = 'function SegmentedControlNativeTsx3(){const{activeIndex,itemCount}=this.__closure;return Math.min(Math.max(activeIndex.get(),0),itemCount-1);}';
    tango['code'] = golf;
    var _closure1_slot12 = tango;
    tango = {};
    golf = 'function SegmentedControlNativeTsx4(){const{clampedActiveIndex,defaultActiveIndex,indicatorWidth}=this.__closure;return(clampedActiveIndex.get()-defaultActiveIndex.get())*indicatorWidth.get();}';
    tango['code'] = golf;
    var _closure1_slot13 = tango;
    tango = {};
    golf = "function SegmentedControlNativeTsx5(){const{indicatorTranslateX,pressedIndex,clampedActiveIndex,PRESSED_TRANSLATE_AMOUNT,indicatorWidth,scrollOverflow,interpolate,SCROLL_OVERFLOW_UPPER_BOUND,SCROLL_OVERFLOW_MAX_SCALE,segmentSpacing,itemCount,previousIndicatorWidth,withSpring,SELECTED_INDICATOR_SPRING}=this.__closure;let translateX=indicatorTranslateX.get();let scaleX=1;if(pressedIndex.get()>=0){if(pressedIndex.get()<clampedActiveIndex.get()){scaleX+=PRESSED_TRANSLATE_AMOUNT;translateX-=indicatorWidth.get()*(PRESSED_TRANSLATE_AMOUNT/2);}else if(pressedIndex.get()>clampedActiveIndex.get()){scaleX+=PRESSED_TRANSLATE_AMOUNT;translateX+=indicatorWidth.get()*(PRESSED_TRANSLATE_AMOUNT/2);}}if(scrollOverflow.get()<0){const scaleFactor=interpolate(scrollOverflow.get(),[-SCROLL_OVERFLOW_UPPER_BOUND,0],[SCROLL_OVERFLOW_MAX_SCALE,1],'clamp');const scaleAmount=indicatorWidth.get()*(1-scaleFactor);scaleX=scaleFactor;translateX+=-scaleAmount/2;}else if(scrollOverflow.get()>0){const scaleFactor=interpolate(scrollOverflow.get(),[SCROLL_OVERFLOW_UPPER_BOUND,0],[SCROLL_OVERFLOW_MAX_SCALE,1],'clamp');const scaleAmount=indicatorWidth.get()*(1-scaleFactor);scaleX=scaleFactor;translateX+=scaleAmount/2;}if(clampedActiveIndex.get()===0){translateX+=segmentSpacing;}else if(clampedActiveIndex.get()===itemCount-1){translateX-=segmentSpacing;}const animated=indicatorWidth.get()===previousIndicatorWidth.get();if(!animated){previousIndicatorWidth.set(indicatorWidth.get());}return{transform:[{translateX:animated?withSpring(translateX,SELECTED_INDICATOR_SPRING):translateX},{scaleX:withSpring(scaleX,SELECTED_INDICATOR_SPRING)}]};}";
    tango['code'] = golf;
    var _closure1_slot14 = tango;
    tango = {};
    golf = 'function onPanGestureUpdate_SegmentedControlNativeTsx6(event){const{indicatorWidth,panIndex,activeIndex,itemCount}=this.__closure;const progess=event.translationX/indicatorWidth.get();const index=panIndex.get()+progess;activeIndex.set(Math.min(Math.max(index,0),itemCount-1));}';
    tango['code'] = golf;
    var _closure1_slot15 = tango;
    tango = {};
    golf = 'function SegmentedControlNativeTsx7(){const{panIndex,activeIndex}=this.__closure;panIndex.set(activeIndex.get());}';
    tango['code'] = golf;
    var _closure1_slot16 = tango;
    tango = {};
    golf = 'function SegmentedControlNativeTsx8(){const{panIndex,activeIndex,runOnJS,setActiveIndex}=this.__closure;panIndex.set(-1);activeIndex.set(Math.round(activeIndex.get()));runOnJS(setActiveIndex)(activeIndex.get());}';
    tango['code'] = golf;
    var _closure1_slot17 = tango;
    tango = 10;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'design/components/SegmentedControl/native/SegmentedControl.native.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: SegmentedControl
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            echo = entity.state;
            var _closure2_slot0 = echo;
            golf = entity.variant;
            report = undefined;
            if(!(golf === report)) { _fun00002_ip = 29; continue _fun00001 }
 25:
            golf = 'default';
 29:
            var _closure2_slot1 = golf;
            var _closure2_slot2 = report;
            var _closure2_slot3 = report;
            var _closure2_slot4 = report;
            var _closure2_slot5 = report;
            var _closure2_slot6 = report;
            var _closure2_slot7 = report;
            var _closure2_slot8 = report;
            var _closure2_slot9 = report;
            var _closure2_slot10 = report;
            var _closure2_slot11 = report;
            var _closure2_slot12 = report;
            var _closure2_slot13 = report;
            var _closure2_slot14 = report;
            var _closure2_slot15 = report;
            var _closure2_slot16 = report;
            var _closure2_slot17 = report;
            var _closure2_slot18 = report;
            output = echo.activeIndex;
            _closure2_slot2 = output;
            record = echo.scrollOverflow;
            _closure2_slot3 = record;
            entity = echo.items;
            _closure2_slot4 = entity;
            foxtrot = echo.pressedIndex;
            _closure2_slot5 = foxtrot;
            kilo = echo.setActiveIndex;
            _closure2_slot6 = kilo;
            mike = 'experimental_Large';
            zulu = mike === golf;
            _closure2_slot7 = zulu;
            update = 4;
            if(!zulu) { _fun00002_ip = 174; continue _fun00001 }
 171:
            update = 8;
 174:
            _closure2_slot8 = update;
            oscar = _closure1_slot9;
            offset = oscar.bind(report)(update);
            _closure2_slot9 = offset;
            source = entity.length;
            _closure2_slot10 = source;
            oscar = _closure1_slot0;
            verify = _closure1_slot2;
            sizing = 5;
            options = verify[sizing];
            romeo = oscar.bind(report)(options);
            yankee = romeo.useSharedValue;
            options = -1;
            result = yankee.bind(romeo)(options);
            _closure2_slot11 = result;
            options = verify[sizing];
            yankee = oscar.bind(report)(options);
            options = yankee.useSharedValue;
            romeo = 0;
            context = options.bind(yankee)(romeo);
            _closure2_slot12 = context;
            options = verify[sizing];
            yankee = oscar.bind(report)(options);
            options = yankee.useSharedValue;
            config = options.bind(yankee)(romeo);
            _closure2_slot13 = config;
            options = verify[sizing];
            backup = oscar.bind(report)(options);
            romeo = backup.useAnimatedReaction;
            yankee = function() { // Original name: R
                mike = _closure2_slot12;
                entity = mike.get;
                entity = entity.bind(mike)();
                return entity;
            };
            options = {};
            options['indicatorWidth'] = context;
            yankee['__closure'] = options;
            options = 5223249035388.0;
            yankee['__workletHash'] = options;
            options = _closure1_slot10;
            yankee['__initData'] = options;
            options = function(argFoo, argBar) { // Original name: E
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zulu = argBar;
                    entity = null;
                    if(!(entity != zulu)) { _fun00004_ip = 26; continue _fun00003 }
 9:
                    mike = _closure2_slot13;
                    entity = mike.set;
                    entity = entity.bind(mike)(zulu);
 26:
                    entity = undefined;
                    return entity;
                }
            };
            control = {};
            control['previousIndicatorWidth'] = config;
            options['__closure'] = control;
            control = 14748619096684.0;
            options['__workletHash'] = control;
            control = _closure1_slot11;
            options['__initData'] = control;
            options = romeo.bind(backup)(yankee, options);
            romeo = _closure1_slot3;
            backup = romeo.useCallback;
            yankee = new Array(1);
            yankee[0] = context;
            options = function(argFoo) {
                zulu = _closure2_slot12;
                mike = zulu.set;
                entity = argFoo;
                entity = entity.nativeEvent;
                entity = entity.layout;
                entity = entity.width;
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            control = backup.bind(romeo)(options, yankee);
            _closure2_slot14 = control;
            options = verify[sizing];
            backup = oscar.bind(report)(options);
            yankee = backup.useSharedValue;
            options = output.get;
            options = options.bind(output)();
            vacuum = yankee.bind(backup)(options);
            _closure2_slot15 = vacuum;
            options = verify[sizing];
            backup = oscar.bind(report)(options);
            yankee = backup.useDerivedValue;
            options = function() { // Original name: F
                entity = global;
                tango = entity.Math;
                zulu = tango.min;
                golf = entity.Math;
                oscar = golf.max;
                report = _closure2_slot2;
                mike = report.get;
                report = mike.bind(report)();
                mike = 0;
                mike = oscar.bind(golf)(report, mike);
                report = _closure2_slot10;
                entity = 1;
                entity = report - entity;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            sequence = {};
            sequence['activeIndex'] = output;
            sequence['itemCount'] = source;
            options['__closure'] = sequence;
            sequence = 790542357728.0;
            options['__workletHash'] = sequence;
            sequence = _closure1_slot12;
            options['__initData'] = sequence;
            papa = yankee.bind(backup)(options);
            _closure2_slot16 = papa;
            options = verify[sizing];
            backup = oscar.bind(report)(options);
            yankee = backup.useDerivedValue;
            options = function() { // Original name: y
                zulu = _closure2_slot16;
                mike = zulu.get;
                zulu = mike.bind(zulu)();
                tango = _closure2_slot15;
                mike = tango.get;
                mike = mike.bind(tango)();
                mike = zulu - mike;
                zulu = _closure2_slot12;
                entity = zulu.get;
                entity = entity.bind(zulu)();
                entity = mike * entity;
                return entity;
            };
            sequence = {};
            sequence['clampedActiveIndex'] = papa;
            sequence['defaultActiveIndex'] = vacuum;
            sequence['indicatorWidth'] = context;
            options['__closure'] = sequence;
            sequence = 10116271570175.0;
            options['__workletHash'] = sequence;
            sequence = _closure1_slot13;
            options['__initData'] = sequence;
            target = yankee.bind(backup)(options);
            _closure2_slot17 = target;
            options = verify[sizing];
            backup = oscar.bind(report)(options);
            yankee = backup.useAnimatedStyle;
            options = function() { // Original name: k
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zulu = _closure2_slot17;
                    mike = zulu.get;
                    verify = mike.bind(zulu)();
                    zulu = _closure2_slot5;
                    mike = zulu.get;
                    mike = mike.bind(zulu)();
                    tango = 0;
                    mike = mike >= tango;
                    report = 1;
                    options = verify;
                    golf = report;
                    if(!mike) { _fun00006_ip = 209; continue _fun00005 }
 50:
                    zulu = _closure2_slot5;
                    mike = zulu.get;
                    zulu = mike.bind(zulu)();
                    oscar = _closure2_slot16;
                    mike = oscar.get;
                    mike = mike.bind(oscar)();
                    if(!(!(zulu < mike))) { _fun00006_ip = 162; continue _fun00005 }
 80:
                    zulu = _closure2_slot5;
                    mike = zulu.get;
                    zulu = mike.bind(zulu)();
                    oscar = _closure2_slot16;
                    mike = oscar.get;
                    mike = mike.bind(oscar)();
                    oscar = zulu > mike;
                    zulu = verify;
                    mike = report;
                    if(!oscar) { _fun00006_ip = 160; continue _fun00005 }
 119:
                    offset = _closure2_slot12;
                    oscar = offset.get;
                    offset = oscar.bind(offset)();
                    oscar = 0.02;
                    oscar = oscar * offset;
                    zulu = verify + oscar;
                    mike = 1.04;
 160:
                    _fun00006_ip = 203; continue _fun00005;
 162:
                    offset = _closure2_slot12;
                    oscar = offset.get;
                    offset = oscar.bind(offset)();
                    oscar = 0.02;
                    oscar = oscar * offset;
                    zulu = verify - oscar;
                    mike = 1.04;
 203:
                    options = zulu;
                    golf = mike;
 209:
                    zulu = _closure2_slot3;
                    mike = zulu.get;
                    mike = mike.bind(zulu)();
                    if(!(!(mike < tango))) { _fun00006_ip = 367; continue _fun00005 }
 229:
                    zulu = _closure2_slot3;
                    mike = zulu.get;
                    mike = mike.bind(zulu)();
                    zulu = options;
                    if(!(mike > tango)) { _fun00006_ip = 491; continue _fun00005 }
 252:
                    verify = _closure1_slot0;
                    oscar = _closure1_slot2;
                    mike = 5;
                    oscar = oscar[mike];
                    mike = undefined;
                    romeo = verify.bind(mike)(oscar);
                    yankee = romeo.interpolate;
                    oscar = _closure2_slot3;
                    mike = oscar.get;
                    sizing = mike.bind(oscar)();
                    kilo = [50, 0];
                    backup = [0.9, 1];
                    foxtrot = 'clamp';
                    output = romeo;
                    mike = output[yankee](sizing, kilo, backup, foxtrot, romeo);
                    verify = _closure2_slot12;
                    oscar = verify.get;
                    verify = oscar.bind(verify)();
                    oscar = report - mike;
                    verify = verify * oscar;
                    oscar = 2;
                    oscar = verify / oscar;
                    zulu = options + oscar;
                    golf = mike;
                    _fun00006_ip = 491; continue _fun00005;
 367:
                    verify = _closure1_slot0;
                    oscar = _closure1_slot2;
                    mike = 5;
                    oscar = oscar[mike];
                    mike = undefined;
                    romeo = verify.bind(mike)(oscar);
                    yankee = romeo.interpolate;
                    oscar = _closure2_slot3;
                    mike = oscar.get;
                    sizing = mike.bind(oscar)();
                    verify = new Array(2);
                    mike = -50;
                    verify[0] = mike;
                    verify[1] = tango;
                    backup = [0.9, 1];
                    foxtrot = 'clamp';
                    output = romeo;
                    kilo = verify;
                    mike = output[yankee](sizing, kilo, backup, foxtrot, romeo);
                    verify = _closure2_slot12;
                    oscar = verify.get;
                    oscar = oscar.bind(verify)();
                    verify = -oscar;
                    oscar = report - mike;
                    verify = verify * oscar;
                    oscar = 2;
                    oscar = verify / oscar;
                    zulu = options + oscar;
                    golf = mike;
 491:
                    oscar = _closure2_slot16;
                    mike = oscar.get;
                    mike = mike.bind(oscar)();
                    if(!(tango !== mike)) { _fun00006_ip = 546; continue _fun00005 }
 508:
                    tango = _closure2_slot16;
                    mike = tango.get;
                    tango = mike.bind(tango)();
                    mike = _closure2_slot10;
                    mike = mike - report;
                    options = zulu;
                    if(!(tango === mike)) { _fun00006_ip = 554; continue _fun00005 }
 536:
                    mike = _closure2_slot8;
                    options = zulu - mike;
                    _fun00006_ip = 554; continue _fun00005;
 546:
                    mike = _closure2_slot8;
                    options = zulu + mike;
 554:
                    zulu = _closure2_slot12;
                    mike = zulu.get;
                    zulu = mike.bind(zulu)();
                    tango = _closure2_slot13;
                    mike = tango.get;
                    mike = mike.bind(tango)();
                    tango = zulu === mike;
                    if(tango) { _fun00006_ip = 614; continue _fun00005 }
 587:
                    zulu = _closure2_slot13;
                    mike = zulu.set;
                    report = _closure2_slot12;
                    entity = report.get;
                    entity = entity.bind(report)();
                    entity = mike.bind(zulu)(entity);
 614:
                    entity = {};
                    zulu = {};
                    mike = options;
                    if(!tango) { _fun00006_ip = 664; continue _fun00005 }
 624:
                    verify = _closure1_slot0;
                    oscar = _closure1_slot2;
                    report = 6;
                    oscar = oscar[report];
                    report = undefined;
                    oscar = verify.bind(report)(oscar);
                    report = oscar.withSpring;
                    tango = _closure1_slot8;
                    mike = report.bind(oscar)(options, tango);
 664:
                    zulu['translateX'] = mike;
                    mike = new Array(2);
                    mike[0] = zulu;
                    zulu = {};
                    options = _closure1_slot0;
                    oscar = _closure1_slot2;
                    report = 6;
                    oscar = oscar[report];
                    report = undefined;
                    oscar = options.bind(report)(oscar);
                    report = oscar.withSpring;
                    tango = _closure1_slot8;
                    tango = report.bind(oscar)(golf, tango);
                    zulu['scaleX'] = tango;
                    mike[1] = zulu;
                    entity['transform'] = mike;
                    return entity;
                }
            };
            sequence = {};
            sequence['indicatorTranslateX'] = target;
            sequence['pressedIndex'] = foxtrot;
            sequence['clampedActiveIndex'] = papa;
            papa = 0.04;
            sequence['PRESSED_TRANSLATE_AMOUNT'] = papa;
            sequence['indicatorWidth'] = context;
            sequence['scrollOverflow'] = record;
            record = verify[sizing];
            record = oscar.bind(report)(record);
            record = record.interpolate;
            sequence['interpolate'] = record;
            record = 50;
            sequence['SCROLL_OVERFLOW_UPPER_BOUND'] = record;
            record = 0.9;
            sequence['SCROLL_OVERFLOW_MAX_SCALE'] = record;
            sequence['segmentSpacing'] = update;
            sequence['itemCount'] = source;
            sequence['previousIndicatorWidth'] = config;
            config = 6;
            config = verify[config];
            config = oscar.bind(report)(config);
            config = config.withSpring;
            sequence['withSpring'] = config;
            config = _closure1_slot8;
            sequence['SELECTED_INDICATOR_SPRING'] = config;
            options['__closure'] = sequence;
            sequence = 5537358752627.0;
            options['__workletHash'] = sequence;
            sequence = _closure1_slot14;
            options['__initData'] = sequence;
            options = yankee.bind(backup)(options);
            _closure2_slot18 = options;
            backup = romeo.useMemo;
            yankee = new Array(5);
            yankee[0] = entity;
            yankee[1] = vacuum;
            yankee[2] = control;
            control = offset.indicator;
            yankee[3] = control;
            yankee[4] = options;
            options = function() {
                zulu = _closure2_slot4;
                mike = zulu.map;
                entity = function(argFoo, argBar) {
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        entity = argFoo;
                        report = entity.id;
                        mike = _closure2_slot15;
                        entity = mike.get;
                        mike = entity.bind(mike)();
                        entity = argBar;
                        golf = mike === entity;
                        tango = _closure1_slot6;
                        mike = _closure1_slot1;
                        zulu = _closure1_slot2;
                        entity = 5;
                        entity = zulu[entity];
                        zulu = undefined;
                        entity = mike.bind(zulu)(entity);
                        mike = entity.View;
                        entity = {};
                        oscar = undefined;
                        if(!golf) { _fun00008_ip = 76; continue _fun00007 }
 72:
                        oscar = _closure2_slot14;
 76:
                        entity['onLayout'] = oscar;
                        oscar = _closure2_slot9;
                        verify = oscar.indicator;
                        oscar = new Array(2);
                        oscar[0] = verify;
                        if(golf) { _fun00008_ip = 112; continue _fun00007 }
 102:
                        golf = {};
                        verify = 0;
                        golf['opacity'] = verify;
                        _fun00008_ip = 116; continue _fun00007;
 112:
                        golf = _closure2_slot18;
 116:
                        oscar[1] = golf;
                        entity['style'] = oscar;
                        entity = tango.bind(zulu)(mike, entity, report);
                        return entity;
                    }
                };
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            backup = backup.bind(romeo)(options, yankee);
            yankee = romeo.useMemo;
            options = new Array(8);
            options[0] = entity;
            options[1] = source;
            options[2] = update;
            options[3] = echo;
            options[4] = foxtrot;
            options[5] = zulu;
            options[6] = golf;
            options[7] = kilo;
            golf = function() {
                zulu = _closure2_slot4;
                mike = zulu.map;
                entity = function(argFoo, argBar) {
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        entity = argFoo;
                        offset = argBar;
                        verify = entity.label;
                        report = entity.id;
                        options = entity.icon;
                        var _closure4_slot0 = offset;
                        entity = 0;
                        entity = entity === offset;
                        if(entity) { _fun00010_ip = 65; continue _fun00009 }
 39:
                        zulu = _closure2_slot10;
                        mike = 1;
                        mike = zulu - mike;
                        foxtrot = undefined;
                        if(!(offset === mike)) { _fun00010_ip = 63; continue _fun00009 }
 56:
                        mike = _closure2_slot8;
                        foxtrot = -mike;
 63:
                        _fun00010_ip = 69; continue _fun00009;
 65:
                        foxtrot = _closure2_slot8;
 69:
                        if(entity) { _fun00010_ip = 95; continue _fun00009 }
 72:
                        mike = _closure2_slot10;
                        entity = 1;
                        entity = mike - entity;
                        romeo = undefined;
                        if(!(offset === entity)) { _fun00010_ip = 93; continue _fun00009 }
 89:
                        romeo = _closure2_slot8;
 93:
                        _fun00010_ip = 102; continue _fun00009;
 95:
                        entity = _closure2_slot8;
                        romeo = -entity;
 102:
                        tango = _closure1_slot6;
                        mike = _closure1_slot0;
                        zulu = _closure1_slot2;
                        entity = 7;
                        entity = zulu[entity];
                        zulu = undefined;
                        entity = mike.bind(zulu)(entity);
                        mike = entity.SegmentedControlItem;
                        entity = {};
                        yankee = {};
                        kilo = _closure2_slot10;
                        backup = 1;
                        kilo = backup / kilo;
                        backup = 100;
                        kilo = kilo * backup;
                        backup = '%';
                        backup = kilo + backup;
                        yankee['minWidth'] = backup;
                        yankee['marginStart'] = foxtrot;
                        yankee['marginEnd'] = romeo;
                        entity['style'] = yankee;
                        entity['index'] = offset;
                        entity['label'] = verify;
                        verify = _closure2_slot0;
                        entity['state'] = verify;
                        verify = _closure2_slot5;
                        entity['pressed'] = verify;
                        verify = function() { // Original name: onPress
                            zulu = _closure2_slot6;
                            mike = _closure4_slot0;
                            entity = undefined;
                            mike = zulu.bind(entity)(mike);
                            return entity;
                        };
                        entity['onPress'] = verify;
                        verify = function() { // Original name: onPressIn
                            zulu = _closure2_slot5;
                            mike = zulu.set;
                            entity = _closure4_slot0;
                            entity = mike.bind(zulu)(entity);
                            entity = undefined;
                            return entity;
                        };
                        entity['onPressIn'] = verify;
                        golf = function() { // Original name: onPressOut
                            zulu = _closure2_slot5;
                            mike = zulu.set;
                            entity = -1;
                            entity = mike.bind(zulu)(entity);
                            entity = undefined;
                            return entity;
                        };
                        entity['onPressOut'] = golf;
                        verify = _closure2_slot7;
                        golf = null;
                        if(!verify) { _fun00010_ip = 258; continue _fun00009 }
 255:
                        golf = options;
 258:
                        entity['icon'] = golf;
                        oscar = _closure2_slot1;
                        entity['variant'] = oscar;
                        entity = tango.bind(zulu)(mike, entity, report);
                        return entity;
                    }
                };
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            foxtrot = yankee.bind(romeo)(golf, options);
            golf = function() {
                entity = function(argFoo) { // Original name: onPanGestureUpdate
                    entity = argFoo;
                    zulu = entity.translationX;
                    tango = _closure2_slot12;
                    mike = tango.get;
                    mike = mike.bind(tango)();
                    zulu = zulu / mike;
                    tango = _closure2_slot11;
                    mike = tango.get;
                    mike = mike.bind(tango)();
                    verify = mike + zulu;
                    zulu = _closure2_slot2;
                    mike = zulu.set;
                    tango = global;
                    oscar = tango.Math;
                    report = oscar.min;
                    options = tango.Math;
                    golf = options.max;
                    tango = 0;
                    tango = golf.bind(options)(verify, tango);
                    golf = _closure2_slot10;
                    entity = 1;
                    entity = golf - entity;
                    entity = report.bind(oscar)(tango, entity);
                    entity = mike.bind(zulu)(entity);
                    entity = undefined;
                    return entity;
                };
                mike = {};
                tango = _closure2_slot12;
                mike['indicatorWidth'] = tango;
                tango = _closure2_slot11;
                mike['panIndex'] = tango;
                tango = _closure2_slot2;
                mike['activeIndex'] = tango;
                zulu = _closure2_slot10;
                mike['itemCount'] = zulu;
                entity['__closure'] = mike;
                mike = 4853281820821.0;
                entity['__workletHash'] = mike;
                mike = _closure1_slot15;
                entity['__initData'] = mike;
                return entity;
            };
            romeo = golf.bind(report)();
            options = 8;
            golf = verify[options];
            golf = oscar.bind(report)(golf);
            yankee = golf.Gesture;
            golf = yankee.Pan;
            echo = golf.bind(yankee)();
            yankee = echo.onStart;
            golf = function() { // Original name: H
                zulu = _closure2_slot11;
                mike = zulu.set;
                tango = _closure2_slot2;
                entity = tango.get;
                entity = entity.bind(tango)();
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            update = {};
            update['panIndex'] = result;
            update['activeIndex'] = output;
            golf['__closure'] = update;
            update = 5962546101105.0;
            golf['__workletHash'] = update;
            update = _closure1_slot16;
            golf['__initData'] = update;
            yankee = yankee.bind(echo)(golf);
            golf = yankee.onUpdate;
            yankee = golf.bind(yankee)(romeo);
            golf = yankee.onEnd;
            tango = function() { // Original name: G
                tango = _closure2_slot11;
                zulu = tango.set;
                entity = -1;
                entity = zulu.bind(tango)(entity);
                tango = _closure2_slot2;
                zulu = tango.set;
                entity = global;
                oscar = entity.Math;
                report = oscar.round;
                golf = _closure2_slot2;
                entity = golf.get;
                entity = entity.bind(golf)();
                entity = report.bind(oscar)(entity);
                entity = zulu.bind(tango)(entity);
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 5;
                zulu = zulu[entity];
                entity = undefined;
                report = tango.bind(entity)(zulu);
                tango = report.runOnJS;
                zulu = _closure2_slot6;
                zulu = tango.bind(report)(zulu);
                tango = _closure2_slot2;
                mike = tango.get;
                mike = mike.bind(tango)();
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            romeo = {};
            romeo['panIndex'] = result;
            romeo['activeIndex'] = output;
            sizing = verify[sizing];
            sizing = oscar.bind(report)(sizing);
            sizing = sizing.runOnJS;
            romeo['runOnJS'] = sizing;
            romeo['setActiveIndex'] = kilo;
            tango['__closure'] = romeo;
            romeo = 13819564805195.0;
            tango['__workletHash'] = romeo;
            romeo = _closure1_slot17;
            tango['__initData'] = romeo;
            golf = golf.bind(yankee)(tango);
            tango = 9;
            tango = verify[tango];
            oscar = oscar.bind(report)(tango);
            tango = oscar.isAndroid;
            tango = tango.bind(oscar)();
            verify = 'tabbar';
            if(!tango) { _fun00002_ip = 1157; continue _fun00001 }
 1151:
            verify = 'tablist';
 1157:
            yankee = _closure1_slot7;
            oscar = _closure1_slot4;
            tango = {};
            tango['accessibilityRole'] = verify;
            verify = offset.controlsContainer;
            tango['style'] = verify;
            verify = _closure1_slot6;
            romeo = {};
            kilo = false;
            romeo['accessible'] = kilo;
            kilo = offset.indicatorContainer;
            romeo['style'] = kilo;
            romeo['children'] = backup;
            backup = verify.bind(report)(oscar, romeo);
            romeo = new Array(2);
            romeo[0] = backup;
            romeo[1] = foxtrot;
            tango['children'] = romeo;
            entity = entity.length;
            oscar = yankee.bind(report)(oscar, tango, entity);
            tango = _closure1_slot5;
            entity = {'horizontal': true, 'alwaysBounceHorizontal': false};
            offset = offset.scrollContentContainer;
            entity['contentContainerStyle'] = offset;
            entity['children'] = oscar;
            entity = verify.bind(report)(tango, entity);
            if(!zulu) { _fun00002_ip = 1324; continue _fun00001 }
 1280:
            tango = _closure1_slot6;
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[options];
            mike = zulu.bind(report)(mike);
            zulu = mike.GestureDetector;
            mike = {};
            mike['gesture'] = golf;
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 1324:
            return entity;
        }
    };
    zulu['SegmentedControl'] = mike;
    return entity;
})();