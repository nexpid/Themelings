// app/design/components/Tabs/native/Tabs.native.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
    tangon = function(argFoo) { // Original name: defaultCountFormatter
        zuuluu = argFoo;
        michal = zuuluu.toLocaleString;
        entity = _closure1_slot5;
        entity = entity.locale;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    var _closure1_slot18 = tangon;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    verify = golfie[entity];
    report = argCor;
    entity = undefined;
    report = report.bind(entity)(verify);
    var _closure1_slot3 = report;
    report = 1;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    verify = report.View;
    var _closure1_slot4 = verify;
    verify = report.ScrollView;
    report = 2;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    offset = report.jsx;
    var _closure1_slot6 = offset;
    report = report.jsxs;
    var _closure1_slot7 = report;
    report = 4;
    report = golfie[report];
    option = option.bind(entity)(report);
    report = option.createAnimatedComponent;
    report = report.bind(option)(verify);
    var _closure1_slot8 = report;
    report = {'mass': 0.3, 'damping': 13, 'stiffness': 100, 'restDisplacementThreshold': 0.001, 'overshootClamping': true};
    var _closure1_slot9 = report;
    report = 5;
    report = golfie[report];
    verify = oscard.bind(entity)(report);
    option = verify.createStyles;
    report = function(argFoo) {
        entity = {};
        michal = {'display': 'flex', 'flexGrow': 1, 'minWidth': '100%', 'flexDirection': 'row', 'alignItems': 'center', 'borderBottomColor': null, 'borderBottomWidth': 1};
        golfie = 'row';
        report = _closure1_slot1;
        oscard = _closure1_slot2;
        zuuluu = 6;
        option = oscard[zuuluu];
        tangon = undefined;
        option = report.bind(tangon)(option);
        option = option.colors;
        option = option.BORDER_SUBTLE;
        michal['borderBottomColor'] = option;
        entity['container'] = michal;
        michal = {};
        option = oscard[zuuluu];
        option = report.bind(tangon)(option);
        option = option.spacing;
        option = option.PX_16;
        michal['marginHorizontal'] = option;
        michal['flexDirection'] = golfie;
        golfie = argFoo;
        michal['gap'] = golfie;
        entity['controlsContainer'] = michal;
        michal = {'position': 'absolute', 'width': '100%', 'height': '100%', 'flexDirection': 'row', 'alignItems': 'flex-end'};
        golfie = oscard[zuuluu];
        golfie = report.bind(tangon)(golfie);
        golfie = golfie.spacing;
        golfie = golfie.PX_16;
        michal['marginLeft'] = golfie;
        entity['indicatorContainer'] = michal;
        michal = {};
        golfie = 2;
        michal['height'] = golfie;
        golfie = oscard[zuuluu];
        golfie = report.bind(tangon)(golfie);
        golfie = golfie.colors;
        golfie = golfie.TEXT_BRAND;
        michal['backgroundColor'] = golfie;
        golfie = oscard[zuuluu];
        golfie = report.bind(tangon)(golfie);
        golfie = golfie.radii;
        golfie = golfie.xs;
        michal['borderTopStartRadius'] = golfie;
        zuuluu = oscard[zuuluu];
        zuuluu = report.bind(tangon)(zuuluu);
        zuuluu = zuuluu.radii;
        zuuluu = zuuluu.xs;
        michal['borderTopEndRadius'] = zuuluu;
        entity['indicator'] = michal;
        return entity;
    };
    report = option.bind(verify)(report);
    var _closure1_slot10 = report;
    report = {};
    option = 'function TabsNativeTsx1(){const{activeIndex,itemCount}=this.__closure;return Math.round(Math.min(Math.max(activeIndex.get(),0),itemCount-1));}';
    report['code'] = option;
    var _closure1_slot11 = report;
    report = {};
    option = 'function TabsNativeTsx2(){const{itemDimensions,clampedActiveIndex}=this.__closure;const activeItem=itemDimensions.get()[clampedActiveIndex.get()];if(activeItem==null)return 0;return activeItem.width;}';
    report['code'] = option;
    var _closure1_slot12 = report;
    report = {};
    option = 'function TabsNativeTsx3(){const{itemDimensions,clampedActiveIndex}=this.__closure;var _itemDimensions$get$c,_itemDimensions$get$c2;return(_itemDimensions$get$c=(_itemDimensions$get$c2=itemDimensions.get()[clampedActiveIndex.get()])===null||_itemDimensions$get$c2===void 0?void 0:_itemDimensions$get$c2.x)!==null&&_itemDimensions$get$c!==void 0?_itemDimensions$get$c:0;}';
    report['code'] = option;
    var _closure1_slot13 = report;
    report = {};
    option = "function TabsNativeTsx4(){const{indicatorTranslateX,pressedIndex,clampedActiveIndex,PRESSED_TRANSLATE_AMOUNT,indicatorWidth,scrollOverflow,interpolate,SCROLL_OVERFLOW_UPPER_BOUND,SCROLL_OVERFLOW_MAX_SCALE,withSpring,SELECTED_INDICATOR_SPRING}=this.__closure;let translateX=indicatorTranslateX.get();let scaleX=1;if(pressedIndex.get()>=0){if(pressedIndex.get()<clampedActiveIndex.get()){scaleX+=PRESSED_TRANSLATE_AMOUNT;translateX-=indicatorWidth.get()*(PRESSED_TRANSLATE_AMOUNT/2);}else if(pressedIndex.get()>clampedActiveIndex.get()){scaleX+=PRESSED_TRANSLATE_AMOUNT;translateX+=indicatorWidth.get()*(PRESSED_TRANSLATE_AMOUNT/2);}}if(scrollOverflow.get()<0){const scaleFactor=interpolate(scrollOverflow.get(),[-SCROLL_OVERFLOW_UPPER_BOUND,0],[SCROLL_OVERFLOW_MAX_SCALE,1],'clamp');const scaleAmount=indicatorWidth.get()*(1-scaleFactor);scaleX=scaleFactor;translateX+=-scaleAmount/2;}else if(scrollOverflow.get()>0){const scaleFactor=interpolate(scrollOverflow.get(),[SCROLL_OVERFLOW_UPPER_BOUND,0],[SCROLL_OVERFLOW_MAX_SCALE,1],'clamp');const scaleAmount=indicatorWidth.get()*(1-scaleFactor);scaleX=scaleFactor;translateX+=scaleAmount/2;}return{width:withSpring(indicatorWidth.get(),SELECTED_INDICATOR_SPRING),transform:[{translateX:withSpring(translateX,SELECTED_INDICATOR_SPRING)},{scaleX:withSpring(scaleX,SELECTED_INDICATOR_SPRING)}]};}";
    report['code'] = option;
    var _closure1_slot14 = report;
    report = {};
    option = 'function TabsNativeTsx5(event){const{scrollOffset,onScrollWorklet}=this.__closure;var _onScrollWorklet;scrollOffset.set(event.contentOffset.x);(_onScrollWorklet=onScrollWorklet)===null||_onScrollWorklet===void 0||_onScrollWorklet(event.contentOffset.x);}';
    report['code'] = option;
    var _closure1_slot15 = report;
    report = {};
    option = 'function TabsNativeTsx6(){const{scrollOffset,activeIndex,itemDimensions}=this.__closure;return{scrollOffset:scrollOffset.get(),activeIndex:activeIndex.get(),itemDimensions:itemDimensions.get()};}';
    report['code'] = option;
    var _closure1_slot16 = report;
    report = {};
    option = 'function TabsNativeTsx7(props,prevState){const{cheapWorkletShallowEqual,itemSpacing,pageWidth,runOnJS,scrollToOffset,AUTO_SCROLL_BUFFER}=this.__closure;var _itemDimensions$activ,_itemDimensions$activ2,_itemDimensions$activ3;if(props.activeIndex===(prevState===null||prevState===void 0?void 0:prevState.activeIndex))return;if(cheapWorkletShallowEqual(props,prevState!==null&&prevState!==void 0?prevState:undefined))return;const{scrollOffset:scrollOffset,activeIndex:activeIndex,itemDimensions:itemDimensions}=props;const width=itemDimensions.reduce(function(sum,item){var _item$width;return sum+((_item$width=item===null||item===void 0?void 0:item.width)!==null&&_item$width!==void 0?_item$width:0);},0);const itemOffset=((_itemDimensions$activ=(_itemDimensions$activ2=itemDimensions[activeIndex])===null||_itemDimensions$activ2===void 0?void 0:_itemDimensions$activ2.x)!==null&&_itemDimensions$activ!==void 0?_itemDimensions$activ:0)+(activeIndex-1)*itemSpacing;const itemWidth=(_itemDimensions$activ3=itemDimensions[activeIndex])===null||_itemDimensions$activ3===void 0?void 0:_itemDimensions$activ3.width;if(width===0||itemOffset==null||itemWidth==null)return;if(scrollOffset+pageWidth<itemOffset+itemWidth){runOnJS(scrollToOffset)(itemOffset+AUTO_SCROLL_BUFFER);}else if(itemOffset<scrollOffset){runOnJS(scrollToOffset)(itemOffset-AUTO_SCROLL_BUFFER);}}';
    report['code'] = option;
    var _closure1_slot17 = report;
    report = 12;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'design/components/Tabs/native/Tabs.native.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['defaultCountFormatter'] = tangon;
    michal = function(argFoo) { // Original name: Tabs
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            source = michal.state;
            var _closure2_slot0 = source;
            update = michal.grow;
            report = undefined;
            if(!(update === report)) { _fun00002_ip = 28; continue _fun00001 }
 26:
            update = true;
 28:
            var _closure2_slot1 = update;
            ctrled = michal.formatCount;
            if(!(ctrled === report)) { _fun00002_ip = 49; continue _fun00001 }
 42:
            ctrled = _closure1_slot18;
 49:
            var _closure2_slot2 = ctrled;
            output = michal.simultaneousHandlers;
            var _closure2_slot3 = output;
            limora = michal.onScrollWorklet;
            var _closure2_slot4 = limora;
            config = michal.onEndDrag;
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
            var _closure2_slot19 = report;
            var _closure2_slot20 = report;
            var _closure2_slot21 = report;
            var _closure2_slot22 = report;
            result = source.activeIndex;
            _closure2_slot5 = result;
            status = source.scrollOffset;
            _closure2_slot6 = status;
            cntext = source.scrollOverflow;
            _closure2_slot7 = cntext;
            vacuum = source.items;
            _closure2_slot8 = vacuum;
            record = source.itemDimensions;
            _closure2_slot9 = record;
            target = source.itemSpacing;
            _closure2_slot10 = target;
            papara = source.pageWidth;
            _closure2_slot11 = papara;
            echoed = source.pressedIndex;
            _closure2_slot12 = echoed;
            tangon = source.setActiveIndex;
            _closure2_slot13 = tangon;
            oscard = source.useReducedMotion;
            _closure2_slot14 = oscard;
            zuuluu = _closure1_slot10;
            backup = zuuluu.bind(report)(target);
            _closure2_slot15 = backup;
            yankee = _closure1_slot0;
            foxtra = _closure1_slot2;
            sizing = 4;
            zuuluu = foxtra[sizing];
            golfie = yankee.bind(report)(zuuluu);
            zuuluu = golfie.useSharedValue;
            option = zuuluu.bind(golfie)(papara);
            _closure2_slot16 = option;
            sierra = vacuum.length;
            _closure2_slot17 = sierra;
            golfie = _closure1_slot3;
            verify = golfie.useRef;
            zuuluu = null;
            offset = verify.bind(golfie)(zuuluu);
            _closure2_slot18 = offset;
            romeon = golfie.useCallback;
            verify = new Array(1);
            verify[0] = option;
            option = function(argFoo) {
                zuuluu = _closure2_slot16;
                michal = zuuluu.set;
                entity = argFoo;
                entity = entity.nativeEvent;
                entity = entity.layout;
                entity = entity.width;
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            };
            romeon = romeon.bind(golfie)(option, verify);
            option = foxtra[sizing];
            kiloes = yankee.bind(report)(option);
            verify = kiloes.useDerivedValue;
            option = function() { // Original name: w
                entity = global;
                zuuluu = entity.Math;
                michal = zuuluu.round;
                oscard = entity.Math;
                report = oscard.min;
                verify = entity.Math;
                option = verify.max;
                golfie = _closure2_slot5;
                tangon = golfie.get;
                golfie = tangon.bind(golfie)();
                tangon = 0;
                tangon = option.bind(verify)(golfie, tangon);
                golfie = _closure2_slot17;
                entity = 1;
                entity = golfie - entity;
                entity = report.bind(oscard)(tangon, entity);
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            sequen = {};
            sequen['activeIndex'] = result;
            sequen['itemCount'] = sierra;
            option['__closure'] = sequen;
            sequen = 3447899396126.0;
            option['__workletHash'] = sequen;
            sequen = _closure1_slot11;
            option['__initData'] = sequen;
            whisks = verify.bind(kiloes)(option);
            _closure2_slot19 = whisks;
            option = foxtra[sizing];
            kiloes = yankee.bind(report)(option);
            verify = kiloes.useDerivedValue;
            option = function() { // Original name: L
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = _closure2_slot9;
                    michal = zuuluu.get;
                    michal = michal.bind(zuuluu)();
                    zuuluu = _closure2_slot19;
                    entity = zuuluu.get;
                    entity = entity.bind(zuuluu)();
                    michal = michal[entity];
                    entity = null;
                    zuuluu = entity == michal;
                    entity = 0;
                    if(zuuluu) { _fun00004_ip = 49; continue _fun00003 }
 44:
                    entity = michal.width;
 49:
                    return entity;
                }
            };
            sequen = {};
            sequen['itemDimensions'] = record;
            sequen['clampedActiveIndex'] = whisks;
            option['__closure'] = sequen;
            sequen = 8603255620075.0;
            option['__workletHash'] = sequen;
            sequen = _closure1_slot12;
            option['__initData'] = sequen;
            sierra = verify.bind(kiloes)(option);
            _closure2_slot20 = sierra;
            option = foxtra[sizing];
            kiloes = yankee.bind(report)(option);
            verify = kiloes.useDerivedValue;
            option = function() { // Original name: C
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zuuluu = _closure2_slot9;
                    michal = zuuluu.get;
                    michal = michal.bind(zuuluu)();
                    zuuluu = _closure2_slot19;
                    entity = zuuluu.get;
                    entity = entity.bind(zuuluu)();
                    zuuluu = michal[entity];
                    entity = null;
                    tangon = entity == zuuluu;
                    michal = undefined;
                    if(tangon) { _fun00006_ip = 49; continue _fun00005 }
 44:
                    michal = zuuluu.x;
 49:
                    zuuluu = entity != michal;
                    entity = 0;
                    if(!zuuluu) { _fun00006_ip = 61; continue _fun00005 }
 58:
                    entity = michal;
 61:
                    return entity;
                }
            };
            sequen = {};
            sequen['itemDimensions'] = record;
            sequen['clampedActiveIndex'] = whisks;
            option['__closure'] = sequen;
            sequen = 3224400863644.0;
            option['__workletHash'] = sequen;
            sequen = _closure1_slot13;
            option['__initData'] = sequen;
            equals = verify.bind(kiloes)(option);
            _closure2_slot21 = equals;
            option = foxtra[sizing];
            kiloes = yankee.bind(report)(option);
            verify = kiloes.useAnimatedStyle;
            option = function() { // Original name: W
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zuuluu = _closure2_slot21;
                    entity = zuuluu.get;
                    verify = entity.bind(zuuluu)();
                    zuuluu = _closure2_slot12;
                    entity = zuuluu.get;
                    zuuluu = entity.bind(zuuluu)();
                    entity = 0;
                    report = zuuluu >= entity;
                    zuuluu = 1;
                    tangon = verify;
                    golfie = zuuluu;
                    if(!report) { _fun00008_ip = 209; continue _fun00007 }
 50:
                    oscard = _closure2_slot12;
                    report = oscard.get;
                    oscard = report.bind(oscard)();
                    option = _closure2_slot19;
                    report = option.get;
                    report = report.bind(option)();
                    if(!(!(oscard < report))) { _fun00008_ip = 162; continue _fun00007 }
 80:
                    oscard = _closure2_slot12;
                    report = oscard.get;
                    oscard = report.bind(oscard)();
                    option = _closure2_slot19;
                    report = option.get;
                    report = report.bind(option)();
                    option = oscard > report;
                    oscard = verify;
                    report = zuuluu;
                    if(!option) { _fun00008_ip = 160; continue _fun00007 }
 119:
                    offset = _closure2_slot20;
                    option = offset.get;
                    offset = option.bind(offset)();
                    option = 0.02;
                    option = option * offset;
                    oscard = verify + option;
                    report = 1.04;
 160:
                    _fun00008_ip = 203; continue _fun00007;
 162:
                    offset = _closure2_slot20;
                    option = offset.get;
                    offset = option.bind(offset)();
                    option = 0.02;
                    option = option * offset;
                    oscard = verify - option;
                    report = 1.04;
 203:
                    tangon = oscard;
                    golfie = report;
 209:
                    oscard = _closure2_slot7;
                    report = oscard.get;
                    report = report.bind(oscard)();
                    if(!(!(report < entity))) { _fun00008_ip = 367; continue _fun00007 }
 229:
                    oscard = _closure2_slot7;
                    report = oscard.get;
                    report = report.bind(oscard)();
                    yankee = tangon;
                    if(!(report > entity)) { _fun00008_ip = 491; continue _fun00007 }
 252:
                    option = _closure1_slot0;
                    oscard = _closure1_slot2;
                    report = 4;
                    oscard = oscard[report];
                    report = undefined;
                    romeon = option.bind(report)(oscard);
                    offset = romeon.interpolate;
                    oscard = _closure2_slot7;
                    report = oscard.get;
                    sizing = report.bind(oscard)();
                    kiloes = [50, 0];
                    backup = [0.9, 1];
                    foxtra = 'clamp';
                    output = romeon;
                    report = output[offset](sizing, kiloes, backup, foxtra, romeon);
                    option = _closure2_slot20;
                    oscard = option.get;
                    option = oscard.bind(option)();
                    oscard = zuuluu - report;
                    option = option * oscard;
                    oscard = 2;
                    oscard = option / oscard;
                    yankee = tangon + oscard;
                    golfie = report;
                    _fun00008_ip = 491; continue _fun00007;
 367:
                    option = _closure1_slot0;
                    oscard = _closure1_slot2;
                    report = 4;
                    oscard = oscard[report];
                    report = undefined;
                    offset = option.bind(report)(oscard);
                    verify = offset.interpolate;
                    oscard = _closure2_slot7;
                    report = oscard.get;
                    sizing = report.bind(oscard)();
                    oscard = new Array(2);
                    report = -50;
                    oscard[0] = report;
                    oscard[1] = entity;
                    backup = [0.9, 1];
                    foxtra = 'clamp';
                    output = offset;
                    kiloes = oscard;
                    entity = output[verify](sizing, kiloes, backup, foxtra, romeon);
                    oscard = _closure2_slot20;
                    report = oscard.get;
                    report = report.bind(oscard)();
                    report = -report;
                    zuuluu = zuuluu - entity;
                    report = report * zuuluu;
                    zuuluu = 2;
                    zuuluu = report / zuuluu;
                    yankee = tangon + zuuluu;
                    golfie = entity;
 491:
                    entity = {};
                    option = _closure1_slot0;
                    verify = _closure1_slot2;
                    tangon = 7;
                    zuuluu = verify[tangon];
                    report = undefined;
                    offset = option.bind(report)(zuuluu);
                    zuuluu = offset.withSpring;
                    romeon = _closure2_slot20;
                    michal = romeon.get;
                    michal = michal.bind(romeon)();
                    oscard = _closure1_slot9;
                    michal = zuuluu.bind(offset)(michal, oscard);
                    entity['width'] = michal;
                    zuuluu = {};
                    michal = verify[tangon];
                    offset = option.bind(report)(michal);
                    michal = offset.withSpring;
                    michal = michal.bind(offset)(yankee, oscard);
                    zuuluu['translateX'] = michal;
                    michal = new Array(2);
                    michal[0] = zuuluu;
                    zuuluu = {};
                    tangon = verify[tangon];
                    report = option.bind(report)(tangon);
                    tangon = report.withSpring;
                    tangon = tangon.bind(report)(golfie, oscard);
                    zuuluu['scaleX'] = tangon;
                    michal[1] = zuuluu;
                    entity['transform'] = michal;
                    return entity;
                }
            };
            sequen = {};
            sequen['indicatorTranslateX'] = equals;
            sequen['pressedIndex'] = echoed;
            sequen['clampedActiveIndex'] = whisks;
            whisks = 0.04;
            sequen['PRESSED_TRANSLATE_AMOUNT'] = whisks;
            sequen['indicatorWidth'] = sierra;
            sequen['scrollOverflow'] = cntext;
            cntext = foxtra[sizing];
            cntext = yankee.bind(report)(cntext);
            cntext = cntext.interpolate;
            sequen['interpolate'] = cntext;
            cntext = 50;
            sequen['SCROLL_OVERFLOW_UPPER_BOUND'] = cntext;
            cntext = 0.9;
            sequen['SCROLL_OVERFLOW_MAX_SCALE'] = cntext;
            cntext = 7;
            cntext = foxtra[cntext];
            cntext = yankee.bind(report)(cntext);
            cntext = cntext.withSpring;
            sequen['withSpring'] = cntext;
            cntext = _closure1_slot9;
            sequen['SELECTED_INDICATOR_SPRING'] = cntext;
            option['__closure'] = sequen;
            sequen = 1794186407627.0;
            option['__workletHash'] = sequen;
            sequen = _closure1_slot14;
            option['__initData'] = sequen;
            kiloes = verify.bind(kiloes)(option);
            option = foxtra[sizing];
            sequen = yankee.bind(report)(option);
            verify = sequen.useAnimatedScrollHandler;
            option = {};
            cntext = function(argFoo) { // Original name: N
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = argFoo;
                    report = _closure2_slot6;
                    tangon = report.set;
                    zuuluu = entity.contentOffset;
                    zuuluu = zuuluu.x;
                    zuuluu = tangon.bind(report)(zuuluu);
                    tangon = _closure2_slot4;
                    zuuluu = null;
                    if(!(zuuluu != tangon)) { _fun00010_ip = 63; continue _fun00009 }
 41:
                    zuuluu = _closure2_slot4;
                    entity = entity.contentOffset;
                    michal = entity.x;
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
 63:
                    entity = undefined;
                    return entity;
                }
            };
            sierra = {};
            sierra['scrollOffset'] = status;
            sierra['onScrollWorklet'] = limora;
            cntext['__closure'] = sierra;
            sierra = 1586298483424.0;
            cntext['__workletHash'] = sierra;
            sierra = _closure1_slot15;
            cntext['__initData'] = sierra;
            option['onScroll'] = cntext;
            option['onEndDrag'] = config;
            option = verify.bind(sequen)(option);
            sequen = golfie.useCallback;
            verify = new Array(1);
            verify[0] = oscard;
            oscard = function(argFoo) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    entity = _closure2_slot18;
                    zuuluu = entity.current;
                    entity = null;
                    if(!(entity != zuuluu)) { _fun00012_ip = 50; continue _fun00011 }
 18:
                    michal = zuuluu.scrollTo;
                    entity = {};
                    report = argFoo;
                    entity['x'] = report;
                    tangon = _closure2_slot14;
                    tangon = !tangon;
                    entity['animated'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
 50:
                    entity = undefined;
                    return entity;
                }
            };
            cntext = sequen.bind(golfie)(oscard, verify);
            _closure2_slot22 = cntext;
            oscard = foxtra[sizing];
            config = yankee.bind(report)(oscard);
            sequen = config.useAnimatedReaction;
            verify = function() { // Original name: b
                entity = {};
                tangon = _closure2_slot6;
                zuuluu = tangon.get;
                zuuluu = zuuluu.bind(tangon)();
                entity['scrollOffset'] = zuuluu;
                tangon = _closure2_slot5;
                zuuluu = tangon.get;
                zuuluu = zuuluu.bind(tangon)();
                entity['activeIndex'] = zuuluu;
                zuuluu = _closure2_slot9;
                michal = zuuluu.get;
                michal = michal.bind(zuuluu)();
                entity['itemDimensions'] = michal;
                return entity;
            };
            oscard = {};
            oscard['scrollOffset'] = status;
            oscard['activeIndex'] = result;
            oscard['itemDimensions'] = record;
            verify['__closure'] = oscard;
            oscard = 11927547413410.0;
            verify['__workletHash'] = oscard;
            oscard = _closure1_slot16;
            verify['__initData'] = oscard;
            oscard = function(argFoo, argBar) { // Original name: $
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    michal = argFoo;
                    golfie = argBar;
                    tangon = michal.activeIndex;
                    option = null;
                    report = option == golfie;
                    entity = undefined;
                    zuuluu = undefined;
                    if(report) { _fun00014_ip = 31; continue _fun00013 }
 25:
                    zuuluu = golfie.activeIndex;
 31:
                    if(!(tangon !== zuuluu)) { _fun00014_ip = 335; continue _fun00013 }
 38:
                    report = _closure1_slot0;
                    oscard = _closure1_slot2;
                    tangon = 8;
                    tangon = oscard[tangon];
                    oscard = report.bind(entity)(tangon);
                    report = oscard.cheapWorkletShallowEqual;
                    verify = option != golfie;
                    tangon = undefined;
                    if(!verify) { _fun00014_ip = 79; continue _fun00013 }
 76:
                    tangon = golfie;
 79:
                    tangon = report.bind(oscard)(michal, tangon);
                    if(tangon) { _fun00014_ip = 335; continue _fun00013 }
 91:
                    report = michal.scrollOffset;
                    offset = michal.activeIndex;
                    oscard = michal.itemDimensions;
                    tangon = oscard.reduce;
                    michal = function(argFoo, argBar) {
                        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                            zuuluu = argBar;
                            michal = null;
                            tangon = michal == zuuluu;
                            entity = undefined;
                            if(tangon) { _fun00016_ip = 19; continue _fun00015 }
 14:
                            entity = zuuluu.width;
 19:
                            zuuluu = michal != entity;
                            michal = 0;
                            if(!zuuluu) { _fun00016_ip = 31; continue _fun00015 }
 28:
                            michal = entity;
 31:
                            entity = argFoo;
                            entity = entity + michal;
                            return entity;
                        }
                    };
                    verify = 0;
                    golfie = tangon.bind(oscard)(michal, verify);
                    tangon = oscard[offset];
                    yankee = option == tangon;
                    michal = undefined;
                    if(yankee) { _fun00014_ip = 148; continue _fun00013 }
 143:
                    michal = tangon.x;
 148:
                    tangon = option != michal;
                    yankee = 0;
                    if(!tangon) { _fun00014_ip = 160; continue _fun00013 }
 157:
                    yankee = michal;
 160:
                    michal = 1;
                    romeon = offset - michal;
                    tangon = _closure2_slot10;
                    tangon = romeon * tangon;
                    tangon = yankee + tangon;
                    offset = oscard[offset];
                    yankee = option == offset;
                    oscard = undefined;
                    if(yankee) { _fun00014_ip = 200; continue _fun00013 }
 195:
                    oscard = offset.width;
 200:
                    golfie = verify !== golfie;
                    if(!golfie) { _fun00014_ip = 211; continue _fun00013 }
 207:
                    golfie = option != tangon;
 211:
                    if(!golfie) { _fun00014_ip = 218; continue _fun00013 }
 214:
                    golfie = option != oscard;
 218:
                    if(!golfie) { _fun00014_ip = 335; continue _fun00013 }
 221:
                    golfie = _closure2_slot11;
                    golfie = report + golfie;
                    oscard = tangon + oscard;
                    if(!(!(golfie < oscard))) { _fun00014_ip = 289; continue _fun00013 }
 237:
                    if(!(tangon < report)) { _fun00014_ip = 335; continue _fun00013 }
 241:
                    oscard = _closure1_slot0;
                    golfie = _closure1_slot2;
                    report = 4;
                    report = golfie[report];
                    golfie = oscard.bind(entity)(report);
                    oscard = golfie.runOnJS;
                    report = _closure2_slot22;
                    oscard = oscard.bind(golfie)(report);
                    report = 16;
                    report = tangon - report;
                    report = oscard.bind(entity)(report);
                    _fun00014_ip = 335; continue _fun00013;
 289:
                    report = _closure1_slot0;
                    oscard = _closure1_slot2;
                    zuuluu = 4;
                    zuuluu = oscard[zuuluu];
                    report = report.bind(entity)(zuuluu);
                    zuuluu = report.runOnJS;
                    michal = _closure2_slot22;
                    zuuluu = zuuluu.bind(report)(michal);
                    michal = 16;
                    michal = tangon + michal;
                    michal = zuuluu.bind(entity)(michal);
 335:
                    return entity;
                }
            };
            record = {};
            status = 8;
            status = foxtra[status];
            status = yankee.bind(report)(status);
            status = status.cheapWorkletShallowEqual;
            record['cheapWorkletShallowEqual'] = status;
            record['itemSpacing'] = target;
            record['pageWidth'] = papara;
            papara = foxtra[sizing];
            papara = yankee.bind(report)(papara);
            papara = papara.runOnJS;
            record['runOnJS'] = papara;
            record['scrollToOffset'] = cntext;
            cntext = 16;
            record['AUTO_SCROLL_BUFFER'] = cntext;
            oscard['__closure'] = record;
            record = 8832951278566.0;
            oscard['__workletHash'] = record;
            record = _closure1_slot17;
            oscard['__initData'] = record;
            oscard = sequen.bind(config)(verify, oscard);
            verify = golfie.useMemo;
            oscard = new Array(8);
            oscard[0] = vacuum;
            oscard[1] = ctrled;
            oscard[2] = source;
            oscard[3] = update;
            oscard[4] = echoed;
            oscard[5] = result;
            oscard[6] = tangon;
            tangon = backup.controlsContainer;
            oscard[7] = tangon;
            tangon = function() {
                tangon = _closure1_slot6;
                zuuluu = _closure1_slot4;
                michal = {};
                report = _closure2_slot15;
                report = report.controlsContainer;
                michal['style'] = report;
                oscard = _closure2_slot8;
                report = oscard.map;
                entity = function(argFoo, argBar) {
                    _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                        entity = argFoo;
                        option = argBar;
                        golfie = entity.label;
                        offset = entity.count;
                        report = entity.id;
                        var _closure4_slot0 = option;
                        tangon = _closure1_slot6;
                        michal = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        entity = 9;
                        entity = zuuluu[entity];
                        zuuluu = undefined;
                        entity = michal.bind(zuuluu)(entity);
                        michal = entity.TabItem;
                        entity = {};
                        entity['index'] = option;
                        entity['label'] = golfie;
                        golfie = null;
                        verify = golfie != offset;
                        golfie = undefined;
                        if(!verify) { _fun00018_ip = 95; continue _fun00017 }
 83:
                        verify = _closure2_slot2;
                        golfie = verify.bind(zuuluu)(offset);
 95:
                        entity['count'] = golfie;
                        verify = _closure2_slot0;
                        entity['state'] = verify;
                        verify = _closure2_slot1;
                        entity['grow'] = verify;
                        verify = _closure2_slot12;
                        entity['pressed'] = verify;
                        verify = _closure2_slot5;
                        golfie = verify.get;
                        golfie = golfie.bind(verify)();
                        golfie = option === golfie;
                        entity['selected'] = golfie;
                        golfie = function() { // Original name: onPress
                            zuuluu = _closure2_slot13;
                            michal = _closure4_slot0;
                            entity = undefined;
                            michal = zuuluu.bind(entity)(michal);
                            return entity;
                        };
                        entity['onPress'] = golfie;
                        golfie = function() { // Original name: onPressIn
                            zuuluu = _closure2_slot12;
                            michal = zuuluu.set;
                            entity = _closure4_slot0;
                            entity = michal.bind(zuuluu)(entity);
                            entity = undefined;
                            return entity;
                        };
                        entity['onPressIn'] = golfie;
                        oscard = function() { // Original name: onPressOut
                            zuuluu = _closure2_slot12;
                            michal = zuuluu.set;
                            entity = -1;
                            entity = michal.bind(zuuluu)(entity);
                            entity = undefined;
                            return entity;
                        };
                        entity['onPressOut'] = oscard;
                        entity = tangon.bind(zuuluu)(michal, entity, report);
                        return entity;
                    }
                };
                entity = report.bind(oscard)(entity);
                michal['children'] = entity;
                entity = undefined;
                entity = tangon.bind(entity)(zuuluu, michal);
                return entity;
            };
            verify = verify.bind(golfie)(tangon, oscard);
            oscard = golfie.useMemo;
            tangon = new Array(1);
            tangon[0] = output;
            entity = function() {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    zuuluu = _closure2_slot3;
                    entity = null;
                    zuuluu = entity == zuuluu;
                    if(zuuluu) { _fun00020_ip = 72; continue _fun00019 }
 16:
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    zuuluu = 10;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    zuuluu = report.bind(zuuluu)(tangon);
                    tangon = zuuluu.Gesture;
                    zuuluu = tangon.Native;
                    tangon = zuuluu.bind(tangon)();
                    zuuluu = tangon.simultaneousWithExternalGesture;
                    michal = _closure2_slot3;
                    entity = zuuluu.bind(tangon)(michal);
 72:
                    return entity;
                }
            };
            golfie = oscard.bind(golfie)(entity, tangon);
            oscard = _closure1_slot7;
            tangon = _closure1_slot8;
            entity = {'ref': null, 'accessibilityRole': null, 'keyboardShouldPersistTaps': 'handled', 'horizontal': true, 'onScroll': null, 'scrollEventThrottle': 16, 'showsHorizontalScrollIndicator': false};
            entity['ref'] = offset;
            offset = 11;
            offset = foxtra[offset];
            yankee = yankee.bind(report)(offset);
            offset = yankee.isIOS;
            yankee = offset.bind(yankee)();
            offset = undefined;
            if(!yankee) { _fun00002_ip = 1177; continue _fun00001 }
 1171:
            offset = 'tabbar';
 1177:
            entity['accessibilityRole'] = offset;
            entity['onScroll'] = option;
            option = false;
            offset = backup.container;
            entity['contentContainerStyle'] = offset;
            entity['bounces'] = option;
            yankee = _closure1_slot6;
            offset = _closure1_slot4;
            option = {};
            foxtra = backup.indicatorContainer;
            option['style'] = foxtra;
            option['onLayout'] = romeon;
            foxtra = _closure1_slot1;
            romeon = _closure1_slot2;
            romeon = romeon[sizing];
            romeon = foxtra.bind(report)(romeon);
            foxtra = romeon.View;
            romeon = {};
            sizing = backup.indicator;
            backup = new Array(2);
            backup[0] = sizing;
            backup[1] = kiloes;
            romeon['style'] = backup;
            romeon = yankee.bind(report)(foxtra, romeon);
            option['children'] = romeon;
            offset = yankee.bind(report)(offset, option);
            option = new Array(2);
            option[0] = offset;
            option[1] = verify;
            entity['children'] = option;
            oscard = oscard.bind(report)(tangon, entity);
            entity = oscard;
            if(!(zuuluu != golfie)) { _fun00002_ip = 1369; continue _fun00001 }
 1322:
            tangon = _closure1_slot6;
            zuuluu = _closure1_slot0;
            option = _closure1_slot2;
            michal = 10;
            michal = option[michal];
            michal = zuuluu.bind(report)(michal);
            zuuluu = michal.GestureDetector;
            michal = {};
            michal['gesture'] = golfie;
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 1369:
            return entity;
        }
    };
    zuuluu['Tabs'] = michal;
    return entity;
})();