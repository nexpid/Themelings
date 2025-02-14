// app/design/components/SegmentedControl/native/SegmentedControlItem.native.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    offset = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = offset;
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
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.Pressable;
    var _closure1_slot3 = golf;
    tango = tango.View;
    var _closure1_slot4 = tango;
    tango = 2;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot5 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot6 = tango;
    tango = {'mass': 0.3, 'damping': 13, 'stiffness': 250, 'overshootClamping': true};
    var _closure1_slot7 = tango;
    tango = 3;
    golf = oscar[tango];
    verify = report.bind(entity)(golf);
    options = verify.createStyles;
    golf = function(argFoo) {
        _fun76979: for(var _fun76979_ip = 0; ; ) switch(_fun76979_ip) {
 0:
            entity = {};
            mike = {};
            oscar = _closure1_slot1;
            zulu = _closure1_slot2;
            tango = 4;
            report = zulu[tango];
            zulu = undefined;
            zulu = oscar.bind(zulu)(report);
            zulu = zulu.radii;
            zulu = zulu.lg;
            mike['borderRadius'] = zulu;
            zulu = 8;
            oscar = 'experimental_Small';
            report = argFoo;
            if(!(oscar === report)) { _fun76979_ip = 63; continue _fun76979 }
 60:
            zulu = tango;
 63:
            mike['paddingVertical'] = zulu;
            zulu = 'row';
            mike['flexDirection'] = zulu;
            zulu = 'center';
            mike['justifyContent'] = zulu;
            entity['item'] = mike;
            mike = {'flexDirection': 'column', 'alignItems': 'center', 'gap': 8};
            entity['label'] = mike;
            return entity;
        }
    };
    golf = options.bind(verify)(golf);
    var _closure1_slot8 = golf;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyleProperties;
    tango = {};
    verify = 4;
    yankee = oscar[verify];
    yankee = offset.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.TEXT_MUTED;
    tango['inactive'] = yankee;
    yankee = oscar[verify];
    yankee = offset.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.INTERACTIVE_ACTIVE;
    tango['active'] = yankee;
    verify = oscar[verify];
    verify = offset.bind(entity)(verify);
    verify = verify.colors;
    verify = verify.INTERACTIVE_ACTIVE;
    tango['pressed'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot9 = tango;
    tango = {};
    golf = "function SegmentedControlItemNativeTsx1(){const{colors,pressed,index,activeIndex,withSpring,SPRING_CONFIG}=this.__closure;let color=colors.inactive;const isPressActive=pressed.get()>=0;const isPressed=pressed.get()===index;const isActive=Math.round(activeIndex.get())===index;if(isPressed){color=colors.pressed;}else if(isPressActive){color=colors.inactive;}else if(isActive){color=colors.active;}return{color:withSpring(color,SPRING_CONFIG,'animate-always')};}";
    tango['code'] = golf;
    var _closure1_slot10 = tango;
    tango = 9;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'design/components/SegmentedControl/native/SegmentedControlItem.native.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: SegmentedControlItem
        _fun76980: for(var _fun76980_ip = 0; ; ) switch(_fun76980_ip) {
 0:
            zulu = argFoo;
            yankee = zulu.label;
            echo = zulu.index;
            var _closure2_slot0 = echo;
            verify = zulu.icon;
            mike = zulu.state;
            sizing = zulu.onPress;
            kilo = zulu.onPressIn;
            golf = zulu.onPressOut;
            update = zulu.pressed;
            var _closure2_slot1 = update;
            backup = zulu.variant;
            result = zulu.style;
            output = mike.activeIndex;
            var _closure2_slot2 = output;
            mike = _closure1_slot8;
            tango = undefined;
            options = mike.bind(tango)(backup);
            mike = _closure1_slot9;
            source = mike.bind(tango)();
            var _closure2_slot3 = source;
            offset = _closure1_slot0;
            foxtrot = _closure1_slot2;
            mike = 5;
            mike = foxtrot[mike];
            oscar = offset.bind(tango)(mike);
            zulu = oscar.useDerivedStateFromSharedValue;
            mike = function(argFoo) {
                entity = {};
                zulu = _closure2_slot0;
                mike = argFoo;
                mike = mike === zulu;
                entity['selected'] = mike;
                return entity;
            };
            oscar = zulu.bind(oscar)(output, mike);
            mike = 6;
            mike = foxtrot[mike];
            zulu = offset.bind(tango)(mike);
            mike = zulu.useAnimatedStyle;
            entity = function() { // Original name: T
                _fun76982: for(var _fun76982_ip = 0; ; ) switch(_fun76982_ip) {
 0:
                    mike = _closure2_slot3;
                    oscar = mike.inactive;
                    zulu = _closure2_slot1;
                    mike = zulu.get;
                    tango = mike.bind(zulu)();
                    mike = 0;
                    tango = tango >= mike;
                    mike = zulu.get;
                    report = mike.bind(zulu)();
                    zulu = _closure2_slot0;
                    mike = global;
                    options = mike.Math;
                    golf = options.round;
                    verify = _closure2_slot2;
                    mike = verify.get;
                    mike = mike.bind(verify)();
                    mike = golf.bind(options)(mike);
                    if(!(report !== zulu)) { _fun76982_ip = 111; continue _fun76982 }
 80:
                    if(tango) { _fun76982_ip = 99; continue _fun76982 }
 83:
                    if(!(mike === zulu)) { _fun76982_ip = 121; continue _fun76982 }
 87:
                    mike = _closure2_slot3;
                    oscar = mike.active;
                    _fun76982_ip = 121; continue _fun76982;
 99:
                    mike = _closure2_slot3;
                    oscar = mike.inactive;
                    _fun76982_ip = 121; continue _fun76982;
 111:
                    entity = _closure2_slot3;
                    oscar = entity.pressed;
 121:
                    entity = {};
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    zulu = 7;
                    tango = tango[zulu];
                    zulu = undefined;
                    report = report.bind(zulu)(tango);
                    tango = report.withSpring;
                    zulu = _closure1_slot7;
                    mike = 'animate-always';
                    mike = tango.bind(report)(oscar, zulu, mike);
                    entity['color'] = mike;
                    return entity;
                }
            };
            romeo = {};
            romeo['colors'] = source;
            romeo['pressed'] = update;
            romeo['index'] = echo;
            romeo['activeIndex'] = output;
            output = 7;
            output = foxtrot[output];
            output = offset.bind(tango)(output);
            output = output.withSpring;
            romeo['withSpring'] = output;
            output = _closure1_slot7;
            romeo['SPRING_CONFIG'] = output;
            entity['__closure'] = romeo;
            romeo = 9369301431547.0;
            entity['__workletHash'] = romeo;
            romeo = _closure1_slot10;
            entity['__initData'] = romeo;
            romeo = mike.bind(zulu)(entity);
            zulu = _closure1_slot5;
            mike = _closure1_slot3;
            entity = {};
            echo = options.item;
            output = new Array(2);
            output[0] = echo;
            output[1] = result;
            entity['style'] = output;
            entity['onPress'] = sizing;
            entity['onPressIn'] = kilo;
            entity['onPressOut'] = golf;
            golf = 'tab';
            entity['accessibilityRole'] = golf;
            entity['accessibilityState'] = oscar;
            golf = _closure1_slot6;
            oscar = _closure1_slot4;
            report = {};
            options = options.label;
            report['style'] = options;
            options = new Array(2);
            options[0] = verify;
            verify = 8;
            verify = foxtrot[verify];
            verify = offset.bind(tango)(verify);
            offset = verify.Text;
            verify = {'animated': true, 'variant': 'text-sm/semibold', 'style': null, 'lineClamp': 1};
            verify['style'] = romeo;
            foxtrot = 'experimental_Large';
            romeo = undefined;
            if(!(foxtrot === backup)) { _fun76980_ip = 397; continue _fun76980 }
 387:
            romeo = 1.5;
 397:
            verify['maxFontSizeMultiplier'] = romeo;
            verify['children'] = yankee;
            verify = zulu.bind(tango)(offset, verify);
            options[1] = verify;
            report['children'] = options;
            report = golf.bind(tango)(oscar, report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['SegmentedControlItem'] = mike;
    return entity;
})();