// app/design/components/SegmentedControl/native/SegmentedControlItem.native.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    offset = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = offset;
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
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.Pressable;
    var _closure1_slot3 = golfie;
    tangon = tangon.View;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.jsx;
    var _closure1_slot5 = golfie;
    tangon = tangon.jsxs;
    var _closure1_slot6 = tangon;
    tangon = {'mass': 0.3, 'damping': 13, 'stiffness': 250, 'overshootClamping': true};
    var _closure1_slot7 = tangon;
    tangon = 3;
    golfie = oscard[tangon];
    verify = report.bind(entity)(golfie);
    option = verify.createStyles;
    golfie = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = {};
            michal = {};
            oscard = _closure1_slot1;
            zuuluu = _closure1_slot2;
            tangon = 4;
            report = zuuluu[tangon];
            zuuluu = undefined;
            zuuluu = oscard.bind(zuuluu)(report);
            zuuluu = zuuluu.radii;
            zuuluu = zuuluu.lg;
            michal['borderRadius'] = zuuluu;
            zuuluu = 8;
            oscard = 'experimental_Small';
            report = argFoo;
            if(!(oscard === report)) { _fun00002_ip = 63; continue _fun00001 }
 60:
            zuuluu = tangon;
 63:
            michal['paddingVertical'] = zuuluu;
            zuuluu = 'row';
            michal['flexDirection'] = zuuluu;
            zuuluu = 'center';
            michal['justifyContent'] = zuuluu;
            entity['item'] = michal;
            michal = {'flexDirection': 'column', 'alignItems': 'center', 'gap': 8};
            entity['label'] = michal;
            return entity;
        }
    };
    golfie = option.bind(verify)(golfie);
    var _closure1_slot8 = golfie;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyleProperties;
    tangon = {};
    verify = 4;
    yankee = oscard[verify];
    yankee = offset.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.TEXT_MUTED;
    tangon['inactive'] = yankee;
    yankee = oscard[verify];
    yankee = offset.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.INTERACTIVE_ACTIVE;
    tangon['active'] = yankee;
    verify = oscard[verify];
    verify = offset.bind(entity)(verify);
    verify = verify.colors;
    verify = verify.INTERACTIVE_ACTIVE;
    tangon['pressed'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot9 = tangon;
    tangon = {};
    golfie = "function SegmentedControlItemNativeTsx1(){const{colors,pressed,index,activeIndex,withSpring,SPRING_CONFIG}=this.__closure;let color=colors.inactive;const isPressActive=pressed.get()>=0;const isPressed=pressed.get()===index;const isActive=Math.round(activeIndex.get())===index;if(isPressed){color=colors.pressed;}else if(isPressActive){color=colors.inactive;}else if(isActive){color=colors.active;}return{color:withSpring(color,SPRING_CONFIG,'animate-always')};}";
    tangon['code'] = golfie;
    var _closure1_slot10 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'design/components/SegmentedControl/native/SegmentedControlItem.native.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: SegmentedControlItem
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argFoo;
            yankee = zuuluu.label;
            echoed = zuuluu.index;
            var _closure2_slot0 = echoed;
            verify = zuuluu.icon;
            michal = zuuluu.state;
            sizing = zuuluu.onPress;
            kiloes = zuuluu.onPressIn;
            golfie = zuuluu.onPressOut;
            update = zuuluu.pressed;
            var _closure2_slot1 = update;
            backup = zuuluu.variant;
            result = zuuluu.style;
            output = michal.activeIndex;
            var _closure2_slot2 = output;
            michal = _closure1_slot8;
            tangon = undefined;
            option = michal.bind(tangon)(backup);
            michal = _closure1_slot9;
            source = michal.bind(tangon)();
            var _closure2_slot3 = source;
            offset = _closure1_slot0;
            foxtra = _closure1_slot2;
            michal = 5;
            michal = foxtra[michal];
            oscard = offset.bind(tangon)(michal);
            zuuluu = oscard.useDerivedStateFromSharedValue;
            michal = function(argFoo) {
                entity = {};
                zuuluu = _closure2_slot0;
                michal = argFoo;
                michal = michal === zuuluu;
                entity['selected'] = michal;
                return entity;
            };
            oscard = zuuluu.bind(oscard)(output, michal);
            michal = 6;
            michal = foxtra[michal];
            zuuluu = offset.bind(tangon)(michal);
            michal = zuuluu.useAnimatedStyle;
            entity = function() { // Original name: T
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    michal = _closure2_slot3;
                    oscard = michal.inactive;
                    zuuluu = _closure2_slot1;
                    michal = zuuluu.get;
                    tangon = michal.bind(zuuluu)();
                    michal = 0;
                    tangon = tangon >= michal;
                    michal = zuuluu.get;
                    report = michal.bind(zuuluu)();
                    zuuluu = _closure2_slot0;
                    michal = global;
                    option = michal.Math;
                    golfie = option.round;
                    verify = _closure2_slot2;
                    michal = verify.get;
                    michal = michal.bind(verify)();
                    michal = golfie.bind(option)(michal);
                    if(!(report !== zuuluu)) { _fun00006_ip = 111; continue _fun00005 }
 80:
                    if(tangon) { _fun00006_ip = 99; continue _fun00005 }
 83:
                    if(!(michal === zuuluu)) { _fun00006_ip = 121; continue _fun00005 }
 87:
                    michal = _closure2_slot3;
                    oscard = michal.active;
                    _fun00006_ip = 121; continue _fun00005;
 99:
                    michal = _closure2_slot3;
                    oscard = michal.inactive;
                    _fun00006_ip = 121; continue _fun00005;
 111:
                    entity = _closure2_slot3;
                    oscard = entity.pressed;
 121:
                    entity = {};
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    zuuluu = 7;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    report = report.bind(zuuluu)(tangon);
                    tangon = report.withSpring;
                    zuuluu = _closure1_slot7;
                    michal = 'animate-always';
                    michal = tangon.bind(report)(oscard, zuuluu, michal);
                    entity['color'] = michal;
                    return entity;
                }
            };
            romeon = {};
            romeon['colors'] = source;
            romeon['pressed'] = update;
            romeon['index'] = echoed;
            romeon['activeIndex'] = output;
            output = 7;
            output = foxtra[output];
            output = offset.bind(tangon)(output);
            output = output.withSpring;
            romeon['withSpring'] = output;
            output = _closure1_slot7;
            romeon['SPRING_CONFIG'] = output;
            entity['__closure'] = romeon;
            romeon = 9369301431547.0;
            entity['__workletHash'] = romeon;
            romeon = _closure1_slot10;
            entity['__initData'] = romeon;
            romeon = michal.bind(zuuluu)(entity);
            zuuluu = _closure1_slot5;
            michal = _closure1_slot3;
            entity = {};
            echoed = option.item;
            output = new Array(2);
            output[0] = echoed;
            output[1] = result;
            entity['style'] = output;
            entity['onPress'] = sizing;
            entity['onPressIn'] = kiloes;
            entity['onPressOut'] = golfie;
            golfie = 'tab';
            entity['accessibilityRole'] = golfie;
            entity['accessibilityState'] = oscard;
            golfie = _closure1_slot6;
            oscard = _closure1_slot4;
            report = {};
            option = option.label;
            report['style'] = option;
            option = new Array(2);
            option[0] = verify;
            verify = 8;
            verify = foxtra[verify];
            verify = offset.bind(tangon)(verify);
            offset = verify.Text;
            verify = {'animated': true, 'variant': 'text-sm/semibold', 'style': null, 'lineClamp': 1};
            verify['style'] = romeon;
            foxtra = 'experimental_Large';
            romeon = undefined;
            if(!(foxtra === backup)) { _fun00004_ip = 389; continue _fun00003 }
 379:
            romeon = 1.5;
 389:
            verify['maxFontSizeMultiplier'] = romeon;
            verify['children'] = yankee;
            verify = zuuluu.bind(tangon)(offset, verify);
            option[1] = verify;
            report['children'] = option;
            report = golfie.bind(tangon)(oscard, report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['SegmentedControlItem'] = michal;
    return entity;
})();