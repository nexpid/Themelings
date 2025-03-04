// app/design/components/SegmentedControl/native/SegmentedControl.native.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
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
    golfie = tangon.View;
    var _closure1_slot4 = golfie;
    tangon = tangon.ScrollView;
    var _closure1_slot5 = tangon;
    tangon = 2;
    golfie = oscard[tangon];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.jsx;
    var _closure1_slot6 = golfie;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsxs;
    var _closure1_slot7 = tangon;
    tangon = {'mass': 0.3, 'damping': 13, 'stiffness': 100, 'restDisplacementThreshold': 0.001, 'overshootClamping': true};
    var _closure1_slot8 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = function(argFoo) {
        option = argFoo;
        entity = {};
        michal = {};
        golfie = 1;
        michal['flexGrow'] = golfie;
        entity['scrollContentContainer'] = michal;
        michal = {'backgroundColor': null, 'borderRadius': null, 'paddingVertical': null, 'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
        report = _closure1_slot1;
        oscard = _closure1_slot2;
        zuuluu = 4;
        verify = oscard[zuuluu];
        tangon = undefined;
        verify = report.bind(tangon)(verify);
        verify = verify.colors;
        verify = verify.INPUT_BACKGROUND;
        michal['backgroundColor'] = verify;
        verify = oscard[zuuluu];
        verify = report.bind(tangon)(verify);
        verify = verify.radii;
        verify = verify.lg;
        verify = verify + option;
        michal['borderRadius'] = verify;
        michal['paddingVertical'] = option;
        entity['controlsContainer'] = michal;
        michal = {'position': 'absolute', 'width': '100%', 'height': '100%', 'borderRadius': null, 'flexDirection': 'row'};
        option = oscard[zuuluu];
        option = report.bind(tangon)(option);
        option = option.radii;
        option = option.lg;
        michal['borderRadius'] = option;
        entity['indicatorContainer'] = michal;
        michal = {};
        michal['flex'] = golfie;
        golfie = oscard[zuuluu];
        golfie = report.bind(tangon)(golfie);
        golfie = golfie.colors;
        golfie = golfie.REDESIGN_INPUT_CONTROL_ACTIVE_BG;
        michal['backgroundColor'] = golfie;
        golfie = oscard[zuuluu];
        golfie = report.bind(tangon)(golfie);
        golfie = golfie.radii;
        golfie = golfie.lg;
        michal['borderRadius'] = golfie;
        zuuluu = oscard[zuuluu];
        zuuluu = report.bind(tangon)(zuuluu);
        zuuluu = zuuluu.shadows;
        offset = zuuluu.SHADOW_LOW;
        yankee = michal;
        zuuluu = copyDataProperties(yankee, offset);
        entity['indicator'] = michal;
        return entity;
    };
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot9 = tangon;
    tangon = {};
    golfie = 'function SegmentedControlNativeTsx1(){const{indicatorWidth}=this.__closure;return indicatorWidth.get();}';
    tangon['code'] = golfie;
    var _closure1_slot10 = tangon;
    tangon = {};
    golfie = 'function SegmentedControlNativeTsx2(_,previous){const{previousIndicatorWidth}=this.__closure;if(previous!=null){previousIndicatorWidth.set(previous);}}';
    tangon['code'] = golfie;
    var _closure1_slot11 = tangon;
    tangon = {};
    golfie = 'function SegmentedControlNativeTsx3(){const{activeIndex,itemCount}=this.__closure;return Math.min(Math.max(activeIndex.get(),0),itemCount-1);}';
    tangon['code'] = golfie;
    var _closure1_slot12 = tangon;
    tangon = {};
    golfie = 'function SegmentedControlNativeTsx4(){const{clampedActiveIndex,defaultActiveIndex,indicatorWidth}=this.__closure;return(clampedActiveIndex.get()-defaultActiveIndex.get())*indicatorWidth.get();}';
    tangon['code'] = golfie;
    var _closure1_slot13 = tangon;
    tangon = {};
    golfie = "function SegmentedControlNativeTsx5(){const{indicatorTranslateX,pressedIndex,clampedActiveIndex,PRESSED_TRANSLATE_AMOUNT,indicatorWidth,scrollOverflow,interpolate,SCROLL_OVERFLOW_UPPER_BOUND,SCROLL_OVERFLOW_MAX_SCALE,segmentSpacing,itemCount,previousIndicatorWidth,withSpring,SELECTED_INDICATOR_SPRING}=this.__closure;let translateX=indicatorTranslateX.get();let scaleX=1;if(pressedIndex.get()>=0){if(pressedIndex.get()<clampedActiveIndex.get()){scaleX+=PRESSED_TRANSLATE_AMOUNT;translateX-=indicatorWidth.get()*(PRESSED_TRANSLATE_AMOUNT/2);}else if(pressedIndex.get()>clampedActiveIndex.get()){scaleX+=PRESSED_TRANSLATE_AMOUNT;translateX+=indicatorWidth.get()*(PRESSED_TRANSLATE_AMOUNT/2);}}if(scrollOverflow.get()<0){const scaleFactor=interpolate(scrollOverflow.get(),[-SCROLL_OVERFLOW_UPPER_BOUND,0],[SCROLL_OVERFLOW_MAX_SCALE,1],'clamp');const scaleAmount=indicatorWidth.get()*(1-scaleFactor);scaleX=scaleFactor;translateX+=-scaleAmount/2;}else if(scrollOverflow.get()>0){const scaleFactor=interpolate(scrollOverflow.get(),[SCROLL_OVERFLOW_UPPER_BOUND,0],[SCROLL_OVERFLOW_MAX_SCALE,1],'clamp');const scaleAmount=indicatorWidth.get()*(1-scaleFactor);scaleX=scaleFactor;translateX+=scaleAmount/2;}if(clampedActiveIndex.get()===0){translateX+=segmentSpacing;}else if(clampedActiveIndex.get()===itemCount-1){translateX-=segmentSpacing;}const animated=indicatorWidth.get()===previousIndicatorWidth.get();if(!animated){previousIndicatorWidth.set(indicatorWidth.get());}return{transform:[{translateX:animated?withSpring(translateX,SELECTED_INDICATOR_SPRING):translateX},{scaleX:withSpring(scaleX,SELECTED_INDICATOR_SPRING)}]};}";
    tangon['code'] = golfie;
    var _closure1_slot14 = tangon;
    tangon = {};
    golfie = 'function onPanGestureUpdate_SegmentedControlNativeTsx6(event){const{indicatorWidth,panIndex,activeIndex,itemCount}=this.__closure;const progess=event.translationX/indicatorWidth.get();const index=panIndex.get()+progess;activeIndex.set(Math.min(Math.max(index,0),itemCount-1));}';
    tangon['code'] = golfie;
    var _closure1_slot15 = tangon;
    tangon = {};
    golfie = 'function SegmentedControlNativeTsx7(){const{panIndex,activeIndex}=this.__closure;panIndex.set(activeIndex.get());}';
    tangon['code'] = golfie;
    var _closure1_slot16 = tangon;
    tangon = {};
    golfie = 'function SegmentedControlNativeTsx8(){const{panIndex,activeIndex,runOnJS,setActiveIndex}=this.__closure;panIndex.set(-1);activeIndex.set(Math.round(activeIndex.get()));runOnJS(setActiveIndex)(activeIndex.get());}';
    tangon['code'] = golfie;
    var _closure1_slot17 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'design/components/SegmentedControl/native/SegmentedControl.native.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: SegmentedControl
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            echoed = entity.state;
            var _closure2_slot0 = echoed;
            golfie = entity.variant;
            report = undefined;
            if(!(golfie === report)) { _fun00002_ip = 29; continue _fun00001 }
 25:
            golfie = 'default';
 29:
            var _closure2_slot1 = golfie;
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
            output = echoed.activeIndex;
            _closure2_slot2 = output;
            record = echoed.scrollOverflow;
            _closure2_slot3 = record;
            entity = echoed.items;
            _closure2_slot4 = entity;
            foxtra = echoed.pressedIndex;
            _closure2_slot5 = foxtra;
            kiloes = echoed.setActiveIndex;
            _closure2_slot6 = kiloes;
            michal = 'experimental_Large';
            zuuluu = michal === golfie;
            _closure2_slot7 = zuuluu;
            update = 4;
            if(!zuuluu) { _fun00002_ip = 174; continue _fun00001 }
 171:
            update = 8;
 174:
            _closure2_slot8 = update;
            oscard = _closure1_slot9;
            offset = oscard.bind(report)(update);
            _closure2_slot9 = offset;
            source = entity.length;
            _closure2_slot10 = source;
            oscard = _closure1_slot0;
            verify = _closure1_slot2;
            sizing = 5;
            option = verify[sizing];
            romeon = oscard.bind(report)(option);
            yankee = romeon.useSharedValue;
            option = -1;
            result = yankee.bind(romeon)(option);
            _closure2_slot11 = result;
            option = verify[sizing];
            yankee = oscard.bind(report)(option);
            option = yankee.useSharedValue;
            romeon = 0;
            cntext = option.bind(yankee)(romeon);
            _closure2_slot12 = cntext;
            option = verify[sizing];
            yankee = oscard.bind(report)(option);
            option = yankee.useSharedValue;
            config = option.bind(yankee)(romeon);
            _closure2_slot13 = config;
            option = verify[sizing];
            backup = oscard.bind(report)(option);
            romeon = backup.useAnimatedReaction;
            yankee = function() { // Original name: R
                michal = _closure2_slot12;
                entity = michal.get;
                entity = entity.bind(michal)();
                return entity;
            };
            option = {};
            option['indicatorWidth'] = cntext;
            yankee['__closure'] = option;
            option = 5223249035388.0;
            yankee['__workletHash'] = option;
            option = _closure1_slot10;
            yankee['__initData'] = option;
            option = function(argFoo, argBar) { // Original name: E
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = argBar;
                    entity = null;
                    if(!(entity != zuuluu)) { _fun00004_ip = 26; continue _fun00003 }
 9:
                    michal = _closure2_slot13;
                    entity = michal.set;
                    entity = entity.bind(michal)(zuuluu);
 26:
                    entity = undefined;
                    return entity;
                }
            };
            ctrled = {};
            ctrled['previousIndicatorWidth'] = config;
            option['__closure'] = ctrled;
            ctrled = 14748619096684.0;
            option['__workletHash'] = ctrled;
            ctrled = _closure1_slot11;
            option['__initData'] = ctrled;
            option = romeon.bind(backup)(yankee, option);
            romeon = _closure1_slot3;
            backup = romeon.useCallback;
            yankee = new Array(1);
            yankee[0] = cntext;
            option = function(argFoo) {
                zuuluu = _closure2_slot12;
                michal = zuuluu.set;
                entity = argFoo;
                entity = entity.nativeEvent;
                entity = entity.layout;
                entity = entity.width;
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            };
            ctrled = backup.bind(romeon)(option, yankee);
            _closure2_slot14 = ctrled;
            option = verify[sizing];
            backup = oscard.bind(report)(option);
            yankee = backup.useSharedValue;
            option = output.get;
            option = option.bind(output)();
            vacuum = yankee.bind(backup)(option);
            _closure2_slot15 = vacuum;
            option = verify[sizing];
            backup = oscard.bind(report)(option);
            yankee = backup.useDerivedValue;
            option = function() { // Original name: F
                entity = global;
                tangon = entity.Math;
                zuuluu = tangon.min;
                golfie = entity.Math;
                oscard = golfie.max;
                report = _closure2_slot2;
                michal = report.get;
                report = michal.bind(report)();
                michal = 0;
                michal = oscard.bind(golfie)(report, michal);
                report = _closure2_slot10;
                entity = 1;
                entity = report - entity;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            sequen = {};
            sequen['activeIndex'] = output;
            sequen['itemCount'] = source;
            option['__closure'] = sequen;
            sequen = 790542357728.0;
            option['__workletHash'] = sequen;
            sequen = _closure1_slot12;
            option['__initData'] = sequen;
            papara = yankee.bind(backup)(option);
            _closure2_slot16 = papara;
            option = verify[sizing];
            backup = oscard.bind(report)(option);
            yankee = backup.useDerivedValue;
            option = function() { // Original name: y
                zuuluu = _closure2_slot16;
                michal = zuuluu.get;
                zuuluu = michal.bind(zuuluu)();
                tangon = _closure2_slot15;
                michal = tangon.get;
                michal = michal.bind(tangon)();
                michal = zuuluu - michal;
                zuuluu = _closure2_slot12;
                entity = zuuluu.get;
                entity = entity.bind(zuuluu)();
                entity = michal * entity;
                return entity;
            };
            sequen = {};
            sequen['clampedActiveIndex'] = papara;
            sequen['defaultActiveIndex'] = vacuum;
            sequen['indicatorWidth'] = cntext;
            option['__closure'] = sequen;
            sequen = 10116271570175.0;
            option['__workletHash'] = sequen;
            sequen = _closure1_slot13;
            option['__initData'] = sequen;
            target = yankee.bind(backup)(option);
            _closure2_slot17 = target;
            option = verify[sizing];
            backup = oscard.bind(report)(option);
            yankee = backup.useAnimatedStyle;
            option = function() { // Original name: k
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zuuluu = _closure2_slot17;
                    michal = zuuluu.get;
                    verify = michal.bind(zuuluu)();
                    zuuluu = _closure2_slot5;
                    michal = zuuluu.get;
                    michal = michal.bind(zuuluu)();
                    tangon = 0;
                    michal = michal >= tangon;
                    report = 1;
                    option = verify;
                    golfie = report;
                    if(!michal) { _fun00006_ip = 209; continue _fun00005 }
 50:
                    zuuluu = _closure2_slot5;
                    michal = zuuluu.get;
                    zuuluu = michal.bind(zuuluu)();
                    oscard = _closure2_slot16;
                    michal = oscard.get;
                    michal = michal.bind(oscard)();
                    if(!(!(zuuluu < michal))) { _fun00006_ip = 162; continue _fun00005 }
 80:
                    zuuluu = _closure2_slot5;
                    michal = zuuluu.get;
                    zuuluu = michal.bind(zuuluu)();
                    oscard = _closure2_slot16;
                    michal = oscard.get;
                    michal = michal.bind(oscard)();
                    oscard = zuuluu > michal;
                    zuuluu = verify;
                    michal = report;
                    if(!oscard) { _fun00006_ip = 160; continue _fun00005 }
 119:
                    offset = _closure2_slot12;
                    oscard = offset.get;
                    offset = oscard.bind(offset)();
                    oscard = 0.02;
                    oscard = oscard * offset;
                    zuuluu = verify + oscard;
                    michal = 1.04;
 160:
                    _fun00006_ip = 203; continue _fun00005;
 162:
                    offset = _closure2_slot12;
                    oscard = offset.get;
                    offset = oscard.bind(offset)();
                    oscard = 0.02;
                    oscard = oscard * offset;
                    zuuluu = verify - oscard;
                    michal = 1.04;
 203:
                    option = zuuluu;
                    golfie = michal;
 209:
                    zuuluu = _closure2_slot3;
                    michal = zuuluu.get;
                    michal = michal.bind(zuuluu)();
                    if(!(!(michal < tangon))) { _fun00006_ip = 367; continue _fun00005 }
 229:
                    zuuluu = _closure2_slot3;
                    michal = zuuluu.get;
                    michal = michal.bind(zuuluu)();
                    zuuluu = option;
                    if(!(michal > tangon)) { _fun00006_ip = 491; continue _fun00005 }
 252:
                    verify = _closure1_slot0;
                    oscard = _closure1_slot2;
                    michal = 5;
                    oscard = oscard[michal];
                    michal = undefined;
                    romeon = verify.bind(michal)(oscard);
                    yankee = romeon.interpolate;
                    oscard = _closure2_slot3;
                    michal = oscard.get;
                    sizing = michal.bind(oscard)();
                    kiloes = [50, 0];
                    backup = [0.9, 1];
                    foxtra = 'clamp';
                    output = romeon;
                    michal = output[yankee](sizing, kiloes, backup, foxtra, romeon);
                    verify = _closure2_slot12;
                    oscard = verify.get;
                    verify = oscard.bind(verify)();
                    oscard = report - michal;
                    verify = verify * oscard;
                    oscard = 2;
                    oscard = verify / oscard;
                    zuuluu = option + oscard;
                    golfie = michal;
                    _fun00006_ip = 491; continue _fun00005;
 367:
                    verify = _closure1_slot0;
                    oscard = _closure1_slot2;
                    michal = 5;
                    oscard = oscard[michal];
                    michal = undefined;
                    romeon = verify.bind(michal)(oscard);
                    yankee = romeon.interpolate;
                    oscard = _closure2_slot3;
                    michal = oscard.get;
                    sizing = michal.bind(oscard)();
                    verify = new Array(2);
                    michal = -50;
                    verify[0] = michal;
                    verify[1] = tangon;
                    backup = [0.9, 1];
                    foxtra = 'clamp';
                    output = romeon;
                    kiloes = verify;
                    michal = output[yankee](sizing, kiloes, backup, foxtra, romeon);
                    verify = _closure2_slot12;
                    oscard = verify.get;
                    oscard = oscard.bind(verify)();
                    verify = -oscard;
                    oscard = report - michal;
                    verify = verify * oscard;
                    oscard = 2;
                    oscard = verify / oscard;
                    zuuluu = option + oscard;
                    golfie = michal;
 491:
                    oscard = _closure2_slot16;
                    michal = oscard.get;
                    michal = michal.bind(oscard)();
                    if(!(tangon !== michal)) { _fun00006_ip = 546; continue _fun00005 }
 508:
                    tangon = _closure2_slot16;
                    michal = tangon.get;
                    tangon = michal.bind(tangon)();
                    michal = _closure2_slot10;
                    michal = michal - report;
                    option = zuuluu;
                    if(!(tangon === michal)) { _fun00006_ip = 554; continue _fun00005 }
 536:
                    michal = _closure2_slot8;
                    option = zuuluu - michal;
                    _fun00006_ip = 554; continue _fun00005;
 546:
                    michal = _closure2_slot8;
                    option = zuuluu + michal;
 554:
                    zuuluu = _closure2_slot12;
                    michal = zuuluu.get;
                    zuuluu = michal.bind(zuuluu)();
                    tangon = _closure2_slot13;
                    michal = tangon.get;
                    michal = michal.bind(tangon)();
                    tangon = zuuluu === michal;
                    if(tangon) { _fun00006_ip = 614; continue _fun00005 }
 587:
                    zuuluu = _closure2_slot13;
                    michal = zuuluu.set;
                    report = _closure2_slot12;
                    entity = report.get;
                    entity = entity.bind(report)();
                    entity = michal.bind(zuuluu)(entity);
 614:
                    entity = {};
                    zuuluu = {};
                    michal = option;
                    if(!tangon) { _fun00006_ip = 664; continue _fun00005 }
 624:
                    verify = _closure1_slot0;
                    oscard = _closure1_slot2;
                    report = 6;
                    oscard = oscard[report];
                    report = undefined;
                    oscard = verify.bind(report)(oscard);
                    report = oscard.withSpring;
                    tangon = _closure1_slot8;
                    michal = report.bind(oscard)(option, tangon);
 664:
                    zuuluu['translateX'] = michal;
                    michal = new Array(2);
                    michal[0] = zuuluu;
                    zuuluu = {};
                    option = _closure1_slot0;
                    oscard = _closure1_slot2;
                    report = 6;
                    oscard = oscard[report];
                    report = undefined;
                    oscard = option.bind(report)(oscard);
                    report = oscard.withSpring;
                    tangon = _closure1_slot8;
                    tangon = report.bind(oscard)(golfie, tangon);
                    zuuluu['scaleX'] = tangon;
                    michal[1] = zuuluu;
                    entity['transform'] = michal;
                    return entity;
                }
            };
            sequen = {};
            sequen['indicatorTranslateX'] = target;
            sequen['pressedIndex'] = foxtra;
            sequen['clampedActiveIndex'] = papara;
            papara = 0.04;
            sequen['PRESSED_TRANSLATE_AMOUNT'] = papara;
            sequen['indicatorWidth'] = cntext;
            sequen['scrollOverflow'] = record;
            record = verify[sizing];
            record = oscard.bind(report)(record);
            record = record.interpolate;
            sequen['interpolate'] = record;
            record = 50;
            sequen['SCROLL_OVERFLOW_UPPER_BOUND'] = record;
            record = 0.9;
            sequen['SCROLL_OVERFLOW_MAX_SCALE'] = record;
            sequen['segmentSpacing'] = update;
            sequen['itemCount'] = source;
            sequen['previousIndicatorWidth'] = config;
            config = 6;
            config = verify[config];
            config = oscard.bind(report)(config);
            config = config.withSpring;
            sequen['withSpring'] = config;
            config = _closure1_slot8;
            sequen['SELECTED_INDICATOR_SPRING'] = config;
            option['__closure'] = sequen;
            sequen = 5537358752627.0;
            option['__workletHash'] = sequen;
            sequen = _closure1_slot14;
            option['__initData'] = sequen;
            option = yankee.bind(backup)(option);
            _closure2_slot18 = option;
            backup = romeon.useMemo;
            yankee = new Array(5);
            yankee[0] = entity;
            yankee[1] = vacuum;
            yankee[2] = ctrled;
            ctrled = offset.indicator;
            yankee[3] = ctrled;
            yankee[4] = option;
            option = function() {
                zuuluu = _closure2_slot4;
                michal = zuuluu.map;
                entity = function(argFoo, argBar) {
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        entity = argFoo;
                        report = entity.id;
                        michal = _closure2_slot15;
                        entity = michal.get;
                        michal = entity.bind(michal)();
                        entity = argBar;
                        golfie = michal === entity;
                        tangon = _closure1_slot6;
                        michal = _closure1_slot1;
                        zuuluu = _closure1_slot2;
                        entity = 5;
                        entity = zuuluu[entity];
                        zuuluu = undefined;
                        entity = michal.bind(zuuluu)(entity);
                        michal = entity.View;
                        entity = {};
                        oscard = undefined;
                        if(!golfie) { _fun00008_ip = 76; continue _fun00007 }
 72:
                        oscard = _closure2_slot14;
 76:
                        entity['onLayout'] = oscard;
                        oscard = _closure2_slot9;
                        verify = oscard.indicator;
                        oscard = new Array(2);
                        oscard[0] = verify;
                        if(golfie) { _fun00008_ip = 112; continue _fun00007 }
 102:
                        golfie = {};
                        verify = 0;
                        golfie['opacity'] = verify;
                        _fun00008_ip = 116; continue _fun00007;
 112:
                        golfie = _closure2_slot18;
 116:
                        oscard[1] = golfie;
                        entity['style'] = oscard;
                        entity = tangon.bind(zuuluu)(michal, entity, report);
                        return entity;
                    }
                };
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            backup = backup.bind(romeon)(option, yankee);
            yankee = romeon.useMemo;
            option = new Array(8);
            option[0] = entity;
            option[1] = source;
            option[2] = update;
            option[3] = echoed;
            option[4] = foxtra;
            option[5] = zuuluu;
            option[6] = golfie;
            option[7] = kiloes;
            golfie = function() {
                zuuluu = _closure2_slot4;
                michal = zuuluu.map;
                entity = function(argFoo, argBar) {
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        entity = argFoo;
                        offset = argBar;
                        verify = entity.label;
                        report = entity.id;
                        option = entity.icon;
                        var _closure4_slot0 = offset;
                        entity = 0;
                        entity = entity === offset;
                        if(entity) { _fun00010_ip = 65; continue _fun00009 }
 39:
                        zuuluu = _closure2_slot10;
                        michal = 1;
                        michal = zuuluu - michal;
                        foxtra = undefined;
                        if(!(offset === michal)) { _fun00010_ip = 63; continue _fun00009 }
 56:
                        michal = _closure2_slot8;
                        foxtra = -michal;
 63:
                        _fun00010_ip = 69; continue _fun00009;
 65:
                        foxtra = _closure2_slot8;
 69:
                        if(entity) { _fun00010_ip = 95; continue _fun00009 }
 72:
                        michal = _closure2_slot10;
                        entity = 1;
                        entity = michal - entity;
                        romeon = undefined;
                        if(!(offset === entity)) { _fun00010_ip = 93; continue _fun00009 }
 89:
                        romeon = _closure2_slot8;
 93:
                        _fun00010_ip = 102; continue _fun00009;
 95:
                        entity = _closure2_slot8;
                        romeon = -entity;
 102:
                        tangon = _closure1_slot6;
                        michal = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        entity = 7;
                        entity = zuuluu[entity];
                        zuuluu = undefined;
                        entity = michal.bind(zuuluu)(entity);
                        michal = entity.SegmentedControlItem;
                        entity = {};
                        yankee = {};
                        kiloes = _closure2_slot10;
                        backup = 1;
                        kiloes = backup / kiloes;
                        backup = 100;
                        kiloes = kiloes * backup;
                        backup = '%';
                        backup = kiloes + backup;
                        yankee['minWidth'] = backup;
                        yankee['marginStart'] = foxtra;
                        yankee['marginEnd'] = romeon;
                        entity['style'] = yankee;
                        entity['index'] = offset;
                        entity['label'] = verify;
                        verify = _closure2_slot0;
                        entity['state'] = verify;
                        verify = _closure2_slot5;
                        entity['pressed'] = verify;
                        verify = function() { // Original name: onPress
                            zuuluu = _closure2_slot6;
                            michal = _closure4_slot0;
                            entity = undefined;
                            michal = zuuluu.bind(entity)(michal);
                            return entity;
                        };
                        entity['onPress'] = verify;
                        verify = function() { // Original name: onPressIn
                            zuuluu = _closure2_slot5;
                            michal = zuuluu.set;
                            entity = _closure4_slot0;
                            entity = michal.bind(zuuluu)(entity);
                            entity = undefined;
                            return entity;
                        };
                        entity['onPressIn'] = verify;
                        golfie = function() { // Original name: onPressOut
                            zuuluu = _closure2_slot5;
                            michal = zuuluu.set;
                            entity = -1;
                            entity = michal.bind(zuuluu)(entity);
                            entity = undefined;
                            return entity;
                        };
                        entity['onPressOut'] = golfie;
                        verify = _closure2_slot7;
                        golfie = null;
                        if(!verify) { _fun00010_ip = 252; continue _fun00009 }
 249:
                        golfie = option;
 252:
                        entity['icon'] = golfie;
                        oscard = _closure2_slot1;
                        entity['variant'] = oscard;
                        entity = tangon.bind(zuuluu)(michal, entity, report);
                        return entity;
                    }
                };
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            foxtra = yankee.bind(romeon)(golfie, option);
            golfie = function() {
                entity = function(argFoo) { // Original name: onPanGestureUpdate
                    entity = argFoo;
                    zuuluu = entity.translationX;
                    tangon = _closure2_slot12;
                    michal = tangon.get;
                    michal = michal.bind(tangon)();
                    zuuluu = zuuluu / michal;
                    tangon = _closure2_slot11;
                    michal = tangon.get;
                    michal = michal.bind(tangon)();
                    verify = michal + zuuluu;
                    zuuluu = _closure2_slot2;
                    michal = zuuluu.set;
                    tangon = global;
                    oscard = tangon.Math;
                    report = oscard.min;
                    option = tangon.Math;
                    golfie = option.max;
                    tangon = 0;
                    tangon = golfie.bind(option)(verify, tangon);
                    golfie = _closure2_slot10;
                    entity = 1;
                    entity = golfie - entity;
                    entity = report.bind(oscard)(tangon, entity);
                    entity = michal.bind(zuuluu)(entity);
                    entity = undefined;
                    return entity;
                };
                michal = {};
                tangon = _closure2_slot12;
                michal['indicatorWidth'] = tangon;
                tangon = _closure2_slot11;
                michal['panIndex'] = tangon;
                tangon = _closure2_slot2;
                michal['activeIndex'] = tangon;
                zuuluu = _closure2_slot10;
                michal['itemCount'] = zuuluu;
                entity['__closure'] = michal;
                michal = 4853281820821.0;
                entity['__workletHash'] = michal;
                michal = _closure1_slot15;
                entity['__initData'] = michal;
                return entity;
            };
            romeon = golfie.bind(report)();
            option = 8;
            golfie = verify[option];
            golfie = oscard.bind(report)(golfie);
            yankee = golfie.Gesture;
            golfie = yankee.Pan;
            echoed = golfie.bind(yankee)();
            yankee = echoed.onStart;
            golfie = function() { // Original name: H
                zuuluu = _closure2_slot11;
                michal = zuuluu.set;
                tangon = _closure2_slot2;
                entity = tangon.get;
                entity = entity.bind(tangon)();
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            };
            update = {};
            update['panIndex'] = result;
            update['activeIndex'] = output;
            golfie['__closure'] = update;
            update = 5962546101105.0;
            golfie['__workletHash'] = update;
            update = _closure1_slot16;
            golfie['__initData'] = update;
            yankee = yankee.bind(echoed)(golfie);
            golfie = yankee.onUpdate;
            yankee = golfie.bind(yankee)(romeon);
            golfie = yankee.onEnd;
            tangon = function() { // Original name: G
                tangon = _closure2_slot11;
                zuuluu = tangon.set;
                entity = -1;
                entity = zuuluu.bind(tangon)(entity);
                tangon = _closure2_slot2;
                zuuluu = tangon.set;
                entity = global;
                oscard = entity.Math;
                report = oscard.round;
                golfie = _closure2_slot2;
                entity = golfie.get;
                entity = entity.bind(golfie)();
                entity = report.bind(oscard)(entity);
                entity = zuuluu.bind(tangon)(entity);
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 5;
                zuuluu = zuuluu[entity];
                entity = undefined;
                report = tangon.bind(entity)(zuuluu);
                tangon = report.runOnJS;
                zuuluu = _closure2_slot6;
                zuuluu = tangon.bind(report)(zuuluu);
                tangon = _closure2_slot2;
                michal = tangon.get;
                michal = michal.bind(tangon)();
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            romeon = {};
            romeon['panIndex'] = result;
            romeon['activeIndex'] = output;
            sizing = verify[sizing];
            sizing = oscard.bind(report)(sizing);
            sizing = sizing.runOnJS;
            romeon['runOnJS'] = sizing;
            romeon['setActiveIndex'] = kiloes;
            tangon['__closure'] = romeon;
            romeon = 13819564805195.0;
            tangon['__workletHash'] = romeon;
            romeon = _closure1_slot17;
            tangon['__initData'] = romeon;
            golfie = golfie.bind(yankee)(tangon);
            tangon = 9;
            tangon = verify[tangon];
            oscard = oscard.bind(report)(tangon);
            tangon = oscard.isAndroid;
            tangon = tangon.bind(oscard)();
            verify = 'tabbar';
            if(!tangon) { _fun00002_ip = 1135; continue _fun00001 }
 1129:
            verify = 'tablist';
 1135:
            yankee = _closure1_slot7;
            oscard = _closure1_slot4;
            tangon = {};
            tangon['accessibilityRole'] = verify;
            verify = offset.controlsContainer;
            tangon['style'] = verify;
            verify = _closure1_slot6;
            romeon = {};
            kiloes = false;
            romeon['accessible'] = kiloes;
            kiloes = offset.indicatorContainer;
            romeon['style'] = kiloes;
            romeon['children'] = backup;
            backup = verify.bind(report)(oscard, romeon);
            romeon = new Array(2);
            romeon[0] = backup;
            romeon[1] = foxtra;
            tangon['children'] = romeon;
            entity = entity.length;
            oscard = yankee.bind(report)(oscard, tangon, entity);
            tangon = _closure1_slot5;
            entity = {'horizontal': true, 'alwaysBounceHorizontal': false};
            offset = offset.scrollContentContainer;
            entity['contentContainerStyle'] = offset;
            entity['children'] = oscard;
            entity = verify.bind(report)(tangon, entity);
            if(!zuuluu) { _fun00002_ip = 1306; continue _fun00001 }
 1262:
            tangon = _closure1_slot6;
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[option];
            michal = zuuluu.bind(report)(michal);
            zuuluu = michal.GestureDetector;
            michal = {};
            michal['gesture'] = golfie;
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 1306:
            return entity;
        }
    };
    zuuluu['SegmentedControl'] = michal;
    return entity;
})();