// app/design/components/Tabs/native/Tabs.native.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    romeo = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = romeo;
    var _closure1_slot2 = golf;
    tango = function(argFoo) { // Original name: defaultCountFormatter
        zulu = argFoo;
        mike = zulu.toLocaleString;
        entity = _closure1_slot5;
        entity = entity.locale;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    var _closure1_slot18 = tango;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, report);
    entity = 0;
    options = golf[entity];
    report = argCorge;
    entity = undefined;
    report = report.bind(entity)(options);
    var _closure1_slot3 = report;
    report = 1;
    report = golf[report];
    report = oscar.bind(entity)(report);
    options = report.View;
    var _closure1_slot4 = options;
    verify = report.ScrollView;
    foxtrot = 2;
    report = golf[foxtrot];
    report = romeo.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    options = golf[report];
    options = oscar.bind(entity)(options);
    options = options.jsx;
    var _closure1_slot6 = options;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.jsxs;
    var _closure1_slot7 = report;
    report = 4;
    report = golf[report];
    options = romeo.bind(entity)(report);
    report = options.createAnimatedComponent;
    report = report.bind(options)(verify);
    var _closure1_slot8 = report;
    report = {'mass': 0.3, 'damping': 13, 'stiffness': 100, 'restDisplacementThreshold': 0.001, 'overshootClamping': true};
    var _closure1_slot9 = report;
    report = 5;
    report = golf[report];
    verify = oscar.bind(entity)(report);
    options = verify.createStyles;
    report = {};
    offset = {'display': 'flex', 'flexGrow': 1, 'minWidth': '100%', 'flexDirection': 'row', 'alignItems': 'center', 'borderBottomColor': null, 'borderBottomWidth': 1};
    yankee = 6;
    backup = golf[yankee];
    backup = romeo.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BORDER_SUBTLE;
    offset['borderBottomColor'] = backup;
    report['container'] = offset;
    offset = {'position': 'absolute', 'width': '100%', 'height': '100%', 'flexDirection': 'row', 'alignItems': 'flex-end'};
    report['indicatorContainer'] = offset;
    offset = {};
    offset['height'] = foxtrot;
    foxtrot = golf[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.colors;
    foxtrot = foxtrot.TEXT_BRAND;
    offset['backgroundColor'] = foxtrot;
    foxtrot = golf[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.radii;
    foxtrot = foxtrot.xs;
    offset['borderTopStartRadius'] = foxtrot;
    yankee = golf[yankee];
    yankee = romeo.bind(entity)(yankee);
    yankee = yankee.radii;
    yankee = yankee.xs;
    offset['borderTopEndRadius'] = yankee;
    report['indicator'] = offset;
    report = options.bind(verify)(report);
    var _closure1_slot10 = report;
    report = {};
    options = 'function TabsNativeTsx1(){const{activeIndex,itemCount}=this.__closure;return Math.round(Math.min(Math.max(activeIndex.get(),0),itemCount-1));}';
    report['code'] = options;
    var _closure1_slot11 = report;
    report = {};
    options = 'function TabsNativeTsx2(){const{itemDimensions,clampedActiveIndex}=this.__closure;const activeItem=itemDimensions.get()[clampedActiveIndex.get()];if(activeItem==null)return 0;return activeItem.width;}';
    report['code'] = options;
    var _closure1_slot12 = report;
    report = {};
    options = 'function TabsNativeTsx3(){const{itemDimensions,clampedActiveIndex}=this.__closure;var _itemDimensions$get$c,_itemDimensions$get$c2;return(_itemDimensions$get$c=(_itemDimensions$get$c2=itemDimensions.get()[clampedActiveIndex.get()])===null||_itemDimensions$get$c2===void 0?void 0:_itemDimensions$get$c2.x)!==null&&_itemDimensions$get$c!==void 0?_itemDimensions$get$c:0;}';
    report['code'] = options;
    var _closure1_slot13 = report;
    report = {};
    options = "function TabsNativeTsx4(){const{indicatorTranslateX,pressedIndex,clampedActiveIndex,PRESSED_TRANSLATE_AMOUNT,indicatorWidth,scrollOverflow,interpolate,SCROLL_OVERFLOW_UPPER_BOUND,SCROLL_OVERFLOW_MAX_SCALE,withSpring,SELECTED_INDICATOR_SPRING}=this.__closure;let translateX=indicatorTranslateX.get();let scaleX=1;if(pressedIndex.get()>=0){if(pressedIndex.get()<clampedActiveIndex.get()){scaleX+=PRESSED_TRANSLATE_AMOUNT;translateX-=indicatorWidth.get()*(PRESSED_TRANSLATE_AMOUNT/2);}else if(pressedIndex.get()>clampedActiveIndex.get()){scaleX+=PRESSED_TRANSLATE_AMOUNT;translateX+=indicatorWidth.get()*(PRESSED_TRANSLATE_AMOUNT/2);}}if(scrollOverflow.get()<0){const scaleFactor=interpolate(scrollOverflow.get(),[-SCROLL_OVERFLOW_UPPER_BOUND,0],[SCROLL_OVERFLOW_MAX_SCALE,1],'clamp');const scaleAmount=indicatorWidth.get()*(1-scaleFactor);scaleX=scaleFactor;translateX+=-scaleAmount/2;}else if(scrollOverflow.get()>0){const scaleFactor=interpolate(scrollOverflow.get(),[SCROLL_OVERFLOW_UPPER_BOUND,0],[SCROLL_OVERFLOW_MAX_SCALE,1],'clamp');const scaleAmount=indicatorWidth.get()*(1-scaleFactor);scaleX=scaleFactor;translateX+=scaleAmount/2;}return{width:withSpring(indicatorWidth.get(),SELECTED_INDICATOR_SPRING),transform:[{translateX:withSpring(translateX,SELECTED_INDICATOR_SPRING)},{scaleX:withSpring(scaleX,SELECTED_INDICATOR_SPRING)}]};}";
    report['code'] = options;
    var _closure1_slot14 = report;
    report = {};
    options = 'function TabsNativeTsx5(event){const{scrollOffset,onScrollWorklet}=this.__closure;var _onScrollWorklet;scrollOffset.set(event.contentOffset.x);(_onScrollWorklet=onScrollWorklet)===null||_onScrollWorklet===void 0||_onScrollWorklet(event.contentOffset.x);}';
    report['code'] = options;
    var _closure1_slot15 = report;
    report = {};
    options = 'function TabsNativeTsx6(){const{scrollOffset,activeIndex,itemDimensions}=this.__closure;return{scrollOffset:scrollOffset.get(),activeIndex:activeIndex.get(),itemDimensions:itemDimensions.get()};}';
    report['code'] = options;
    var _closure1_slot16 = report;
    report = {};
    options = 'function TabsNativeTsx7(props,prevState){const{cheapWorkletShallowEqual,pageWidth,runOnJS,scrollToOffset,AUTO_SCROLL_BUFFER}=this.__closure;var _itemDimensions$activ,_itemDimensions$activ2;if(props.activeIndex===(prevState===null||prevState===void 0?void 0:prevState.activeIndex))return;if(cheapWorkletShallowEqual(props,prevState!==null&&prevState!==void 0?prevState:undefined))return;const{scrollOffset:scrollOffset,activeIndex:activeIndex,itemDimensions:itemDimensions}=props;const width=itemDimensions.reduce(function(sum,item){var _item$width;return(_item$width=item===null||item===void 0?void 0:item.width)!==null&&_item$width!==void 0?_item$width:0+sum;},0);const itemOffset=(_itemDimensions$activ=itemDimensions[activeIndex])===null||_itemDimensions$activ===void 0?void 0:_itemDimensions$activ.x;const itemWidth=(_itemDimensions$activ2=itemDimensions[activeIndex])===null||_itemDimensions$activ2===void 0?void 0:_itemDimensions$activ2.width;if(width===0||itemOffset==null||itemWidth==null)return;if(scrollOffset+pageWidth<itemOffset+itemWidth){runOnJS(scrollToOffset)(itemOffset+AUTO_SCROLL_BUFFER);}else if(itemOffset<scrollOffset){runOnJS(scrollToOffset)(itemOffset-AUTO_SCROLL_BUFFER);}}';
    report['code'] = options;
    var _closure1_slot17 = report;
    report = 12;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'design/components/Tabs/native/Tabs.native.tsx';
    report = oscar.bind(golf)(report);
    zulu['defaultCountFormatter'] = tango;
    mike = function(argFoo) { // Original name: Tabs
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            source = mike.state;
            var _closure2_slot0 = source;
            update = mike.grow;
            report = undefined;
            if(!(update === report)) { _fun00002_ip = 28; continue _fun00001 }
 26:
            update = true;
 28:
            var _closure2_slot1 = update;
            control = mike.formatCount;
            if(!(control === report)) { _fun00002_ip = 49; continue _fun00001 }
 42:
            control = _closure1_slot18;
 49:
            var _closure2_slot2 = control;
            output = mike.simultaneousHandlers;
            var _closure2_slot3 = output;
            sierra = mike.onScrollWorklet;
            var _closure2_slot4 = sierra;
            config = mike.onEndDrag;
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
            result = source.activeIndex;
            _closure2_slot5 = result;
            target = source.scrollOffset;
            _closure2_slot6 = target;
            context = source.scrollOverflow;
            _closure2_slot7 = context;
            vacuum = source.items;
            _closure2_slot8 = vacuum;
            record = source.itemDimensions;
            _closure2_slot9 = record;
            papa = source.pageWidth;
            _closure2_slot10 = papa;
            echo = source.pressedIndex;
            _closure2_slot11 = echo;
            tango = source.setActiveIndex;
            _closure2_slot12 = tango;
            oscar = source.useReducedMotion;
            _closure2_slot13 = oscar;
            zulu = _closure1_slot10;
            backup = zulu.bind(report)();
            yankee = _closure1_slot0;
            foxtrot = _closure1_slot2;
            sizing = 4;
            zulu = foxtrot[sizing];
            golf = yankee.bind(report)(zulu);
            zulu = golf.useSharedValue;
            options = zulu.bind(golf)(papa);
            _closure2_slot14 = options;
            status = vacuum.length;
            _closure2_slot15 = status;
            golf = _closure1_slot3;
            verify = golf.useRef;
            zulu = null;
            offset = verify.bind(golf)(zulu);
            _closure2_slot16 = offset;
            romeo = golf.useCallback;
            verify = new Array(1);
            verify[0] = options;
            options = function(argFoo) {
                zulu = _closure2_slot14;
                mike = zulu.set;
                entity = argFoo;
                entity = entity.nativeEvent;
                entity = entity.layout;
                entity = entity.width;
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            romeo = romeo.bind(golf)(options, verify);
            options = foxtrot[sizing];
            kilo = yankee.bind(report)(options);
            verify = kilo.useDerivedValue;
            options = function() { // Original name: w
                entity = global;
                zulu = entity.Math;
                mike = zulu.round;
                oscar = entity.Math;
                report = oscar.min;
                verify = entity.Math;
                options = verify.max;
                golf = _closure2_slot5;
                tango = golf.get;
                golf = tango.bind(golf)();
                tango = 0;
                tango = options.bind(verify)(golf, tango);
                golf = _closure2_slot15;
                entity = 1;
                entity = golf - entity;
                entity = report.bind(oscar)(tango, entity);
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            sequence = {};
            sequence['activeIndex'] = result;
            sequence['itemCount'] = status;
            options['__closure'] = sequence;
            sequence = 3447899396126.0;
            options['__workletHash'] = sequence;
            sequence = _closure1_slot11;
            options['__initData'] = sequence;
            lima = verify.bind(kilo)(options);
            _closure2_slot17 = lima;
            options = foxtrot[sizing];
            kilo = yankee.bind(report)(options);
            verify = kilo.useDerivedValue;
            options = function() { // Original name: L
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zulu = _closure2_slot9;
                    mike = zulu.get;
                    mike = mike.bind(zulu)();
                    zulu = _closure2_slot17;
                    entity = zulu.get;
                    entity = entity.bind(zulu)();
                    mike = mike[entity];
                    entity = null;
                    zulu = entity == mike;
                    entity = 0;
                    if(zulu) { _fun00004_ip = 49; continue _fun00003 }
 44:
                    entity = mike.width;
 49:
                    return entity;
                }
            };
            sequence = {};
            sequence['itemDimensions'] = record;
            sequence['clampedActiveIndex'] = lima;
            options['__closure'] = sequence;
            sequence = 8603255620075.0;
            options['__workletHash'] = sequence;
            sequence = _closure1_slot12;
            options['__initData'] = sequence;
            status = verify.bind(kilo)(options);
            _closure2_slot18 = status;
            options = foxtrot[sizing];
            kilo = yankee.bind(report)(options);
            verify = kilo.useDerivedValue;
            options = function() { // Original name: C
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zulu = _closure2_slot9;
                    mike = zulu.get;
                    mike = mike.bind(zulu)();
                    zulu = _closure2_slot17;
                    entity = zulu.get;
                    entity = entity.bind(zulu)();
                    zulu = mike[entity];
                    entity = null;
                    tango = entity == zulu;
                    mike = undefined;
                    if(tango) { _fun00006_ip = 49; continue _fun00005 }
 44:
                    mike = zulu.x;
 49:
                    zulu = entity != mike;
                    entity = 0;
                    if(!zulu) { _fun00006_ip = 61; continue _fun00005 }
 58:
                    entity = mike;
 61:
                    return entity;
                }
            };
            sequence = {};
            sequence['itemDimensions'] = record;
            sequence['clampedActiveIndex'] = lima;
            options['__closure'] = sequence;
            sequence = 3224400863644.0;
            options['__workletHash'] = sequence;
            sequence = _closure1_slot13;
            options['__initData'] = sequence;
            whiskey = verify.bind(kilo)(options);
            _closure2_slot19 = whiskey;
            options = foxtrot[sizing];
            kilo = yankee.bind(report)(options);
            verify = kilo.useAnimatedStyle;
            options = function() { // Original name: W
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zulu = _closure2_slot19;
                    entity = zulu.get;
                    verify = entity.bind(zulu)();
                    zulu = _closure2_slot11;
                    entity = zulu.get;
                    zulu = entity.bind(zulu)();
                    entity = 0;
                    report = zulu >= entity;
                    zulu = 1;
                    tango = verify;
                    golf = zulu;
                    if(!report) { _fun00008_ip = 209; continue _fun00007 }
 50:
                    oscar = _closure2_slot11;
                    report = oscar.get;
                    oscar = report.bind(oscar)();
                    options = _closure2_slot17;
                    report = options.get;
                    report = report.bind(options)();
                    if(!(!(oscar < report))) { _fun00008_ip = 162; continue _fun00007 }
 80:
                    oscar = _closure2_slot11;
                    report = oscar.get;
                    oscar = report.bind(oscar)();
                    options = _closure2_slot17;
                    report = options.get;
                    report = report.bind(options)();
                    options = oscar > report;
                    oscar = verify;
                    report = zulu;
                    if(!options) { _fun00008_ip = 160; continue _fun00007 }
 119:
                    offset = _closure2_slot18;
                    options = offset.get;
                    offset = options.bind(offset)();
                    options = 0.02;
                    options = options * offset;
                    oscar = verify + options;
                    report = 1.04;
 160:
                    _fun00008_ip = 203; continue _fun00007;
 162:
                    offset = _closure2_slot18;
                    options = offset.get;
                    offset = options.bind(offset)();
                    options = 0.02;
                    options = options * offset;
                    oscar = verify - options;
                    report = 1.04;
 203:
                    tango = oscar;
                    golf = report;
 209:
                    oscar = _closure2_slot7;
                    report = oscar.get;
                    report = report.bind(oscar)();
                    if(!(!(report < entity))) { _fun00008_ip = 367; continue _fun00007 }
 229:
                    oscar = _closure2_slot7;
                    report = oscar.get;
                    report = report.bind(oscar)();
                    yankee = tango;
                    if(!(report > entity)) { _fun00008_ip = 491; continue _fun00007 }
 252:
                    options = _closure1_slot0;
                    oscar = _closure1_slot2;
                    report = 4;
                    oscar = oscar[report];
                    report = undefined;
                    romeo = options.bind(report)(oscar);
                    offset = romeo.interpolate;
                    oscar = _closure2_slot7;
                    report = oscar.get;
                    sizing = report.bind(oscar)();
                    kilo = [50, 0];
                    backup = [0.9, 1];
                    foxtrot = 'clamp';
                    output = romeo;
                    report = output[offset](sizing, kilo, backup, foxtrot, romeo);
                    options = _closure2_slot18;
                    oscar = options.get;
                    options = oscar.bind(options)();
                    oscar = zulu - report;
                    options = options * oscar;
                    oscar = 2;
                    oscar = options / oscar;
                    yankee = tango + oscar;
                    golf = report;
                    _fun00008_ip = 491; continue _fun00007;
 367:
                    options = _closure1_slot0;
                    oscar = _closure1_slot2;
                    report = 4;
                    oscar = oscar[report];
                    report = undefined;
                    offset = options.bind(report)(oscar);
                    verify = offset.interpolate;
                    oscar = _closure2_slot7;
                    report = oscar.get;
                    sizing = report.bind(oscar)();
                    oscar = new Array(2);
                    report = -50;
                    oscar[0] = report;
                    oscar[1] = entity;
                    backup = [0.9, 1];
                    foxtrot = 'clamp';
                    output = offset;
                    kilo = oscar;
                    entity = output[verify](sizing, kilo, backup, foxtrot, romeo);
                    oscar = _closure2_slot18;
                    report = oscar.get;
                    report = report.bind(oscar)();
                    report = -report;
                    zulu = zulu - entity;
                    report = report * zulu;
                    zulu = 2;
                    zulu = report / zulu;
                    yankee = tango + zulu;
                    golf = entity;
 491:
                    entity = {};
                    options = _closure1_slot0;
                    verify = _closure1_slot2;
                    tango = 7;
                    zulu = verify[tango];
                    report = undefined;
                    offset = options.bind(report)(zulu);
                    zulu = offset.withSpring;
                    romeo = _closure2_slot18;
                    mike = romeo.get;
                    mike = mike.bind(romeo)();
                    oscar = _closure1_slot9;
                    mike = zulu.bind(offset)(mike, oscar);
                    entity['width'] = mike;
                    zulu = {};
                    mike = verify[tango];
                    offset = options.bind(report)(mike);
                    mike = offset.withSpring;
                    mike = mike.bind(offset)(yankee, oscar);
                    zulu['translateX'] = mike;
                    mike = new Array(2);
                    mike[0] = zulu;
                    zulu = {};
                    tango = verify[tango];
                    report = options.bind(report)(tango);
                    tango = report.withSpring;
                    tango = tango.bind(report)(golf, oscar);
                    zulu['scaleX'] = tango;
                    mike[1] = zulu;
                    entity['transform'] = mike;
                    return entity;
                }
            };
            sequence = {};
            sequence['indicatorTranslateX'] = whiskey;
            sequence['pressedIndex'] = echo;
            sequence['clampedActiveIndex'] = lima;
            lima = 0.04;
            sequence['PRESSED_TRANSLATE_AMOUNT'] = lima;
            sequence['indicatorWidth'] = status;
            sequence['scrollOverflow'] = context;
            context = foxtrot[sizing];
            context = yankee.bind(report)(context);
            context = context.interpolate;
            sequence['interpolate'] = context;
            context = 50;
            sequence['SCROLL_OVERFLOW_UPPER_BOUND'] = context;
            context = 0.9;
            sequence['SCROLL_OVERFLOW_MAX_SCALE'] = context;
            context = 7;
            context = foxtrot[context];
            context = yankee.bind(report)(context);
            context = context.withSpring;
            sequence['withSpring'] = context;
            context = _closure1_slot9;
            sequence['SELECTED_INDICATOR_SPRING'] = context;
            options['__closure'] = sequence;
            sequence = 1794186407627.0;
            options['__workletHash'] = sequence;
            sequence = _closure1_slot14;
            options['__initData'] = sequence;
            kilo = verify.bind(kilo)(options);
            options = foxtrot[sizing];
            sequence = yankee.bind(report)(options);
            verify = sequence.useAnimatedScrollHandler;
            options = {};
            context = function(argFoo) { // Original name: N
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = argFoo;
                    report = _closure2_slot6;
                    tango = report.set;
                    zulu = entity.contentOffset;
                    zulu = zulu.x;
                    zulu = tango.bind(report)(zulu);
                    tango = _closure2_slot4;
                    zulu = null;
                    if(!(zulu != tango)) { _fun00010_ip = 63; continue _fun00009 }
 41:
                    zulu = _closure2_slot4;
                    entity = entity.contentOffset;
                    mike = entity.x;
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
 63:
                    entity = undefined;
                    return entity;
                }
            };
            status = {};
            status['scrollOffset'] = target;
            status['onScrollWorklet'] = sierra;
            context['__closure'] = status;
            status = 1586298483424.0;
            context['__workletHash'] = status;
            status = _closure1_slot15;
            context['__initData'] = status;
            options['onScroll'] = context;
            options['onEndDrag'] = config;
            options = verify.bind(sequence)(options);
            sequence = golf.useCallback;
            verify = new Array(1);
            verify[0] = oscar;
            oscar = function(argFoo) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    entity = _closure2_slot16;
                    zulu = entity.current;
                    entity = null;
                    if(!(entity != zulu)) { _fun00012_ip = 50; continue _fun00011 }
 18:
                    mike = zulu.scrollTo;
                    entity = {};
                    report = argFoo;
                    entity['x'] = report;
                    tango = _closure2_slot13;
                    tango = !tango;
                    entity['animated'] = tango;
                    entity = mike.bind(zulu)(entity);
 50:
                    entity = undefined;
                    return entity;
                }
            };
            context = sequence.bind(golf)(oscar, verify);
            _closure2_slot20 = context;
            oscar = foxtrot[sizing];
            config = yankee.bind(report)(oscar);
            sequence = config.useAnimatedReaction;
            verify = function() { // Original name: $
                entity = {};
                tango = _closure2_slot6;
                zulu = tango.get;
                zulu = zulu.bind(tango)();
                entity['scrollOffset'] = zulu;
                tango = _closure2_slot5;
                zulu = tango.get;
                zulu = zulu.bind(tango)();
                entity['activeIndex'] = zulu;
                zulu = _closure2_slot9;
                mike = zulu.get;
                mike = mike.bind(zulu)();
                entity['itemDimensions'] = mike;
                return entity;
            };
            oscar = {};
            oscar['scrollOffset'] = target;
            oscar['activeIndex'] = result;
            oscar['itemDimensions'] = record;
            verify['__closure'] = oscar;
            oscar = 11927547413410.0;
            verify['__workletHash'] = oscar;
            oscar = _closure1_slot16;
            verify['__initData'] = oscar;
            oscar = function(argFoo, argBar) { // Original name: b
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    mike = argFoo;
                    options = argBar;
                    tango = mike.activeIndex;
                    golf = null;
                    report = golf == options;
                    entity = undefined;
                    zulu = undefined;
                    if(report) { _fun00014_ip = 31; continue _fun00013 }
 25:
                    zulu = options.activeIndex;
 31:
                    if(!(tango !== zulu)) { _fun00014_ip = 306; continue _fun00013 }
 38:
                    report = _closure1_slot0;
                    oscar = _closure1_slot2;
                    tango = 8;
                    tango = oscar[tango];
                    oscar = report.bind(entity)(tango);
                    report = oscar.cheapWorkletShallowEqual;
                    verify = golf != options;
                    tango = undefined;
                    if(!verify) { _fun00014_ip = 79; continue _fun00013 }
 76:
                    tango = options;
 79:
                    tango = report.bind(oscar)(mike, tango);
                    if(tango) { _fun00014_ip = 306; continue _fun00013 }
 91:
                    report = mike.scrollOffset;
                    verify = mike.activeIndex;
                    oscar = mike.itemDimensions;
                    tango = oscar.reduce;
                    mike = function(argFoo, argBar) {
                        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                            zulu = argBar;
                            mike = null;
                            tango = mike == zulu;
                            entity = undefined;
                            if(tango) { _fun00016_ip = 19; continue _fun00015 }
 14:
                            entity = zulu.width;
 19:
                            if(!(mike == entity)) { _fun00016_ip = 32; continue _fun00015 }
 23:
                            zulu = 0;
                            mike = argFoo;
                            entity = zulu + mike;
 32:
                            return entity;
                        }
                    };
                    options = 0;
                    mike = tango.bind(oscar)(mike, options);
                    offset = oscar[verify];
                    yankee = golf == offset;
                    tango = undefined;
                    if(yankee) { _fun00014_ip = 150; continue _fun00013 }
 145:
                    tango = offset.x;
 150:
                    verify = oscar[verify];
                    offset = golf == verify;
                    oscar = undefined;
                    if(offset) { _fun00014_ip = 168; continue _fun00013 }
 163:
                    oscar = verify.width;
 168:
                    mike = options !== mike;
                    if(!mike) { _fun00014_ip = 179; continue _fun00013 }
 175:
                    mike = golf != tango;
 179:
                    if(!mike) { _fun00014_ip = 186; continue _fun00013 }
 182:
                    mike = golf != oscar;
 186:
                    if(!mike) { _fun00014_ip = 306; continue _fun00013 }
 189:
                    golf = _closure2_slot10;
                    golf = report + golf;
                    oscar = tango + oscar;
                    if(!(!(golf < oscar))) { _fun00014_ip = 260; continue _fun00013 }
 208:
                    if(!(tango < report)) { _fun00014_ip = 306; continue _fun00013 }
 212:
                    oscar = _closure1_slot0;
                    golf = _closure1_slot2;
                    report = 4;
                    report = golf[report];
                    golf = oscar.bind(entity)(report);
                    oscar = golf.runOnJS;
                    report = _closure2_slot20;
                    oscar = oscar.bind(golf)(report);
                    report = 16;
                    report = tango - report;
                    report = oscar.bind(entity)(report);
                    _fun00014_ip = 306; continue _fun00013;
 260:
                    report = _closure1_slot0;
                    oscar = _closure1_slot2;
                    zulu = 4;
                    zulu = oscar[zulu];
                    report = report.bind(entity)(zulu);
                    zulu = report.runOnJS;
                    mike = _closure2_slot20;
                    zulu = zulu.bind(report)(mike);
                    mike = 16;
                    mike = tango + mike;
                    mike = zulu.bind(entity)(mike);
 306:
                    return entity;
                }
            };
            record = {};
            target = 8;
            target = foxtrot[target];
            target = yankee.bind(report)(target);
            target = target.cheapWorkletShallowEqual;
            record['cheapWorkletShallowEqual'] = target;
            record['pageWidth'] = papa;
            papa = foxtrot[sizing];
            papa = yankee.bind(report)(papa);
            papa = papa.runOnJS;
            record['runOnJS'] = papa;
            record['scrollToOffset'] = context;
            context = 16;
            record['AUTO_SCROLL_BUFFER'] = context;
            oscar['__closure'] = record;
            record = 14219784405950.0;
            oscar['__workletHash'] = record;
            record = _closure1_slot17;
            oscar['__initData'] = record;
            oscar = sequence.bind(config)(verify, oscar);
            verify = golf.useMemo;
            oscar = new Array(7);
            oscar[0] = vacuum;
            oscar[1] = control;
            oscar[2] = source;
            oscar[3] = update;
            oscar[4] = echo;
            oscar[5] = result;
            oscar[6] = tango;
            tango = function() {
                zulu = _closure2_slot8;
                mike = zulu.map;
                entity = function(argFoo, argBar) {
                    _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                        entity = argFoo;
                        options = argBar;
                        golf = entity.label;
                        offset = entity.count;
                        report = entity.id;
                        var _closure4_slot0 = options;
                        tango = _closure1_slot6;
                        mike = _closure1_slot0;
                        zulu = _closure1_slot2;
                        entity = 9;
                        entity = zulu[entity];
                        zulu = undefined;
                        entity = mike.bind(zulu)(entity);
                        mike = entity.TabItem;
                        entity = {};
                        entity['index'] = options;
                        entity['label'] = golf;
                        golf = null;
                        verify = golf != offset;
                        golf = undefined;
                        if(!verify) { _fun00018_ip = 95; continue _fun00017 }
 83:
                        verify = _closure2_slot2;
                        golf = verify.bind(zulu)(offset);
 95:
                        entity['count'] = golf;
                        verify = _closure2_slot0;
                        entity['state'] = verify;
                        verify = _closure2_slot1;
                        entity['grow'] = verify;
                        verify = _closure2_slot11;
                        entity['pressed'] = verify;
                        verify = _closure2_slot5;
                        golf = verify.get;
                        golf = golf.bind(verify)();
                        golf = options === golf;
                        entity['selected'] = golf;
                        golf = function() { // Original name: onPress
                            zulu = _closure2_slot12;
                            mike = _closure4_slot0;
                            entity = undefined;
                            mike = zulu.bind(entity)(mike);
                            return entity;
                        };
                        entity['onPress'] = golf;
                        golf = function() { // Original name: onPressIn
                            zulu = _closure2_slot11;
                            mike = zulu.set;
                            entity = _closure4_slot0;
                            entity = mike.bind(zulu)(entity);
                            entity = undefined;
                            return entity;
                        };
                        entity['onPressIn'] = golf;
                        oscar = function() { // Original name: onPressOut
                            zulu = _closure2_slot11;
                            mike = zulu.set;
                            entity = -1;
                            entity = mike.bind(zulu)(entity);
                            entity = undefined;
                            return entity;
                        };
                        entity['onPressOut'] = oscar;
                        entity = tango.bind(zulu)(mike, entity, report);
                        return entity;
                    }
                };
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            verify = verify.bind(golf)(tango, oscar);
            oscar = golf.useMemo;
            tango = new Array(1);
            tango[0] = output;
            entity = function() {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    zulu = _closure2_slot3;
                    entity = null;
                    zulu = entity == zulu;
                    if(zulu) { _fun00020_ip = 72; continue _fun00019 }
 16:
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    zulu = 10;
                    tango = tango[zulu];
                    zulu = undefined;
                    zulu = report.bind(zulu)(tango);
                    tango = zulu.Gesture;
                    zulu = tango.Native;
                    tango = zulu.bind(tango)();
                    zulu = tango.simultaneousWithExternalGesture;
                    mike = _closure2_slot3;
                    entity = zulu.bind(tango)(mike);
 72:
                    return entity;
                }
            };
            golf = oscar.bind(golf)(entity, tango);
            oscar = _closure1_slot7;
            tango = _closure1_slot8;
            entity = {'ref': null, 'accessibilityRole': null, 'keyboardShouldPersistTaps': 'handled', 'horizontal': true, 'onScroll': null, 'scrollEventThrottle': 16, 'showsHorizontalScrollIndicator': false};
            entity['ref'] = offset;
            offset = 11;
            offset = foxtrot[offset];
            yankee = yankee.bind(report)(offset);
            offset = yankee.isIOS;
            yankee = offset.bind(yankee)();
            offset = undefined;
            if(!yankee) { _fun00002_ip = 1161; continue _fun00001 }
 1155:
            offset = 'tabbar';
 1161:
            entity['accessibilityRole'] = offset;
            entity['onScroll'] = options;
            options = false;
            offset = backup.container;
            entity['contentContainerStyle'] = offset;
            entity['bounces'] = options;
            yankee = _closure1_slot6;
            offset = _closure1_slot4;
            options = {};
            foxtrot = backup.indicatorContainer;
            options['style'] = foxtrot;
            options['onLayout'] = romeo;
            foxtrot = _closure1_slot1;
            romeo = _closure1_slot2;
            romeo = romeo[sizing];
            romeo = foxtrot.bind(report)(romeo);
            foxtrot = romeo.View;
            romeo = {};
            sizing = backup.indicator;
            backup = new Array(2);
            backup[0] = sizing;
            backup[1] = kilo;
            romeo['style'] = backup;
            romeo = yankee.bind(report)(foxtrot, romeo);
            options['children'] = romeo;
            offset = yankee.bind(report)(offset, options);
            options = new Array(2);
            options[0] = offset;
            options[1] = verify;
            entity['children'] = options;
            oscar = oscar.bind(report)(tango, entity);
            entity = oscar;
            if(!(zulu != golf)) { _fun00002_ip = 1353; continue _fun00001 }
 1306:
            tango = _closure1_slot6;
            zulu = _closure1_slot0;
            options = _closure1_slot2;
            mike = 10;
            mike = options[mike];
            mike = zulu.bind(report)(mike);
            zulu = mike.GestureDetector;
            mike = {};
            mike['gesture'] = golf;
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 1353:
            return entity;
        }
    };
    zulu['Tabs'] = mike;
    return entity;
})();