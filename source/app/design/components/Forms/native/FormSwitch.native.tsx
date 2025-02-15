// app/design/components/Forms/native/FormSwitch.native.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    verify = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = verify;
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
    tango = oscar[entity];
    entity = undefined;
    tango = verify.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    golf = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(golf);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    offset = tango.Pressable;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot5 = tango;
    tango = 4;
    golf = oscar[tango];
    options = verify.bind(entity)(golf);
    golf = options.createAnimatedComponent;
    golf = golf.bind(options)(offset);
    var _closure1_slot6 = golf;
    golf = 5;
    golf = oscar[golf];
    offset = report.bind(entity)(golf);
    options = offset.createStyles;
    golf = function() {
        entity = {};
        mike = {'width': 48, 'height': 32, 'flexGrow': 0, 'flexShrink': 0};
        report = _closure1_slot1;
        oscar = _closure1_slot2;
        zulu = 6;
        golf = oscar[zulu];
        tango = undefined;
        golf = report.bind(tango)(golf);
        golf = golf.spacing;
        golf = golf.PX_4;
        mike['padding'] = golf;
        golf = oscar[zulu];
        golf = report.bind(tango)(golf);
        golf = golf.radii;
        golf = golf.lg;
        mike['borderRadius'] = golf;
        entity['switch'] = mike;
        mike = {};
        golf = oscar[zulu];
        golf = report.bind(tango)(golf);
        golf = golf.colors;
        golf = golf.INTERACTIVE_MUTED;
        mike['tintColor'] = golf;
        entity['unselected'] = mike;
        mike = {};
        golf = oscar[zulu];
        golf = report.bind(tango)(golf);
        golf = golf.colors;
        golf = golf.REDESIGN_INPUT_CONTROL_SELECTED;
        mike['tintColor'] = golf;
        entity['selected'] = mike;
        mike = {'height': 24, 'width': 24, 'padding': 6, 'alignItems': 'center', 'justifyContent': 'center'};
        golf = oscar[zulu];
        golf = report.bind(tango)(golf);
        golf = golf.radii;
        golf = golf.round;
        mike['borderRadius'] = golf;
        zulu = oscar[zulu];
        zulu = report.bind(tango)(zulu);
        zulu = zulu.colors;
        zulu = zulu.WHITE;
        mike['backgroundColor'] = zulu;
        entity['knob'] = mike;
        return entity;
    };
    golf = options.bind(offset)(golf);
    var _closure1_slot7 = golf;
    tango = oscar[tango];
    options = verify.bind(entity)(tango);
    golf = options.createAnimatedComponent;
    tango = 7;
    tango = oscar[tango];
    tango = verify.bind(entity)(tango);
    tango = golf.bind(options)(tango);
    var _closure1_slot8 = tango;
    tango = {};
    golf = "function FormSwitchNativeTsx1(){const{withSpring,checked,selected,unselected,SUBTLE_SPRING}=this.__closure;return{backgroundColor:withSpring(checked?selected.tintColor:unselected.tintColor,SUBTLE_SPRING,'animate-always')};}";
    tango['code'] = golf;
    var _closure1_slot9 = tango;
    tango = {};
    golf = "function FormSwitchNativeTsx2(){const{withSpring,checked,SUBTLE_SPRING}=this.__closure;return{left:withSpring(checked?16:0,SUBTLE_SPRING,'animate-always')};}";
    tango['code'] = golf;
    var _closure1_slot10 = tango;
    tango = {};
    golf = "function FormSwitchNativeTsx3(){const{withSpring,checked,on,off,SUBTLE_SPRING,useReducedMotion}=this.__closure;const animation={opacity:withSpring(checked?on:off,SUBTLE_SPRING,'animate-always')};if(useReducedMotion)return animation;return{...animation,transform:[{scale:withSpring(checked?on:off,SUBTLE_SPRING)}]};}";
    tango['code'] = golf;
    var _closure1_slot11 = tango;
    tango = 13;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'design/components/Forms/native/FormSwitch.native.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: FormSwitch
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            zulu = function(argFoo, argBar) { // Original name: useIconAnimation
                yankee = argFoo;
                golf = argBar;
                var _closure3_slot0 = yankee;
                var _closure3_slot1 = golf;
                verify = _closure1_slot0;
                offset = _closure1_slot2;
                mike = 4;
                mike = offset[mike];
                options = undefined;
                zulu = verify.bind(options)(mike);
                mike = zulu.useAnimatedStyle;
                entity = function() { // Original name: c
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        zulu = {};
                        mike = _closure1_slot0;
                        entity = _closure1_slot2;
                        yankee = 9;
                        entity = entity[yankee];
                        verify = undefined;
                        romeo = mike.bind(verify)(entity);
                        golf = romeo.withSpring;
                        entity = _closure2_slot3;
                        if(entity) { _fun00004_ip = 51; continue _fun00003 }
 45:
                        oscar = _closure3_slot1;
                        _fun00004_ip = 55; continue _fun00003;
 51:
                        oscar = _closure3_slot0;
 55:
                        mike = _closure1_slot0;
                        entity = _closure1_slot2;
                        offset = 10;
                        entity = entity[offset];
                        entity = mike.bind(verify)(entity);
                        mike = entity.SUBTLE_SPRING;
                        entity = 'animate-always';
                        entity = golf.bind(romeo)(oscar, mike, entity);
                        zulu['opacity'] = entity;
                        mike = _closure2_slot2;
                        entity = zulu;
                        if(mike) { _fun00004_ip = 215; continue _fun00003 }
 108:
                        mike = {};
                        kilo = mike;
                        backup = zulu;
                        zulu = copyDataProperties(kilo, backup);
                        zulu = {};
                        golf = _closure1_slot0;
                        oscar = _closure1_slot2;
                        oscar = oscar[yankee];
                        golf = golf.bind(verify)(oscar);
                        oscar = golf.withSpring;
                        report = _closure2_slot3;
                        if(report) { _fun00004_ip = 157; continue _fun00003 }
 151:
                        report = _closure3_slot1;
                        _fun00004_ip = 161; continue _fun00003;
 157:
                        report = _closure3_slot0;
 161:
                        options = _closure1_slot0;
                        tango = _closure1_slot2;
                        tango = tango[offset];
                        tango = options.bind(verify)(tango);
                        tango = tango.SUBTLE_SPRING;
                        tango = oscar.bind(golf)(report, tango);
                        zulu['scale'] = tango;
                        tango = new Array(1);
                        tango[0] = zulu;
                        zulu = 'transform';
                        mike[zulu] = tango;
                        entity = mike;
 215:
                        return entity;
                    }
                };
                report = {};
                oscar = 9;
                oscar = offset[oscar];
                oscar = verify.bind(options)(oscar);
                oscar = oscar.withSpring;
                report['withSpring'] = oscar;
                romeo = _closure2_slot3;
                report['checked'] = romeo;
                report['on'] = yankee;
                report['off'] = golf;
                golf = 10;
                golf = offset[golf];
                golf = verify.bind(options)(golf);
                golf = golf.SUBTLE_SPRING;
                report['SUBTLE_SPRING'] = golf;
                oscar = _closure2_slot2;
                report['useReducedMotion'] = oscar;
                entity['__closure'] = report;
                report = 10280311881075.0;
                entity['__workletHash'] = report;
                tango = _closure1_slot11;
                entity['__initData'] = tango;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            output = entity.disabled;
            report = entity.value;
            var _closure2_slot0 = report;
            mike = entity.onValueChange;
            var _closure2_slot1 = mike;
            result = entity.accessibilityLabel;
            sizing = entity.accessibilityHint;
            echo = entity.aria-hidden;
            offset = _closure1_slot4;
            mike = offset.useContext;
            update = _closure1_slot0;
            options = _closure1_slot2;
            entity = 8;
            entity = options[entity];
            tango = undefined;
            entity = update.bind(tango)(entity);
            entity = entity.AccessibilityPreferencesContext;
            entity = mike.bind(offset)(entity);
            entity = entity.reducedMotion;
            entity = entity.enabled;
            var _closure2_slot2 = entity;
            entity = offset.useState;
            oscar = entity.bind(offset)(report);
            mike = _closure1_slot3;
            entity = 2;
            oscar = mike.bind(tango)(oscar, entity);
            mike = 0;
            golf = oscar[mike];
            var _closure2_slot3 = golf;
            entity = 1;
            oscar = oscar[entity];
            var _closure2_slot4 = oscar;
            verify = offset.useEffect;
            oscar = new Array(1);
            oscar[0] = report;
            report = function() {
                zulu = _closure2_slot4;
                mike = _closure2_slot0;
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            report = verify.bind(offset)(report, oscar);
            report = _closure1_slot7;
            offset = report.bind(tango)();
            source = offset.selected;
            var _closure2_slot5 = source;
            foxtrot = offset.unselected;
            var _closure2_slot6 = foxtrot;
            report = 4;
            oscar = options[report];
            yankee = update.bind(tango)(oscar);
            verify = yankee.useAnimatedStyle;
            oscar = function() { // Original name: P
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = {};
                    tango = _closure1_slot0;
                    report = _closure1_slot2;
                    zulu = 9;
                    zulu = report[zulu];
                    golf = undefined;
                    oscar = tango.bind(golf)(zulu);
                    report = oscar.withSpring;
                    tango = _closure2_slot3;
                    if(tango) { _fun00006_ip = 54; continue _fun00005 }
 42:
                    tango = _closure2_slot6;
                    tango = tango.tintColor;
                    _fun00006_ip = 64; continue _fun00005;
 54:
                    zulu = _closure2_slot5;
                    tango = zulu.tintColor;
 64:
                    zulu = _closure1_slot0;
                    options = _closure1_slot2;
                    mike = 10;
                    mike = options[mike];
                    mike = zulu.bind(golf)(mike);
                    zulu = mike.SUBTLE_SPRING;
                    mike = 'animate-always';
                    mike = report.bind(oscar)(tango, zulu, mike);
                    entity['backgroundColor'] = mike;
                    return entity;
                }
            };
            romeo = {};
            control = 9;
            vacuum = options[control];
            vacuum = update.bind(tango)(vacuum);
            vacuum = vacuum.withSpring;
            romeo['withSpring'] = vacuum;
            romeo['checked'] = golf;
            romeo['selected'] = source;
            romeo['unselected'] = foxtrot;
            foxtrot = 10;
            source = options[foxtrot];
            source = update.bind(tango)(source);
            source = source.SUBTLE_SPRING;
            romeo['SUBTLE_SPRING'] = source;
            oscar['__closure'] = romeo;
            romeo = 7661602606216.0;
            oscar['__workletHash'] = romeo;
            romeo = _closure1_slot9;
            oscar['__initData'] = romeo;
            source = verify.bind(yankee)(oscar);
            oscar = options[report];
            yankee = update.bind(tango)(oscar);
            verify = yankee.useAnimatedStyle;
            oscar = function() { // Original name: k
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    entity = {};
                    tango = _closure1_slot0;
                    report = _closure1_slot2;
                    zulu = 9;
                    zulu = report[zulu];
                    golf = undefined;
                    oscar = tango.bind(golf)(zulu);
                    report = oscar.withSpring;
                    zulu = _closure2_slot3;
                    tango = 0;
                    if(!zulu) { _fun00008_ip = 47; continue _fun00007 }
 44:
                    tango = 16;
 47:
                    zulu = _closure1_slot0;
                    options = _closure1_slot2;
                    mike = 10;
                    mike = options[mike];
                    mike = zulu.bind(golf)(mike);
                    zulu = mike.SUBTLE_SPRING;
                    mike = 'animate-always';
                    mike = report.bind(oscar)(tango, zulu, mike);
                    entity['left'] = mike;
                    return entity;
                }
            };
            romeo = {};
            control = options[control];
            control = update.bind(tango)(control);
            control = control.withSpring;
            romeo['withSpring'] = control;
            romeo['checked'] = golf;
            foxtrot = options[foxtrot];
            foxtrot = update.bind(tango)(foxtrot);
            foxtrot = foxtrot.SUBTLE_SPRING;
            romeo['SUBTLE_SPRING'] = foxtrot;
            oscar['__closure'] = romeo;
            romeo = 13478345030228.0;
            oscar['__workletHash'] = romeo;
            romeo = _closure1_slot10;
            oscar['__initData'] = romeo;
            verify = verify.bind(yankee)(oscar);
            yankee = zulu.bind(tango)(entity, mike);
            foxtrot = zulu.bind(tango)(mike, entity);
            oscar = _closure1_slot1;
            entity = 7;
            entity = options[entity];
            entity = oscar.bind(tango)(entity);
            entity = entity.Sizes;
            romeo = entity.SMALL;
            zulu = _closure1_slot5;
            mike = _closure1_slot6;
            entity = {};
            control = offset.switch;
            update = new Array(2);
            update[0] = control;
            update[1] = source;
            entity['style'] = update;
            update = function() { // Original name: onPress
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zulu = _closure2_slot1;
                    entity = null;
                    zulu = entity == zulu;
                    tango = undefined;
                    entity = undefined;
                    if(zulu) { _fun00010_ip = 36; continue _fun00009 }
 20:
                    zulu = _closure2_slot1;
                    mike = _closure2_slot0;
                    mike = !mike;
                    entity = zulu.bind(tango)(mike);
 36:
                    return entity;
                }
            };
            entity['onPress'] = update;
            entity['disabled'] = output;
            update = true;
            entity['accessible'] = update;
            entity['aria-hidden'] = echo;
            echo = 'switch';
            entity['accessibilityRole'] = echo;
            entity['accessibilityLabel'] = result;
            entity['accessibilityHint'] = sizing;
            sizing = {};
            sizing['disabled'] = output;
            sizing['checked'] = golf;
            entity['accessibilityState'] = sizing;
            backup = function() { // Original name: onAccessibilityTap
                zulu = _closure2_slot4;
                entity = _closure2_slot0;
                mike = !entity;
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                mike = global;
                zulu = mike.setTimeout;
                mike = function() {
                    _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                        zulu = _closure2_slot1;
                        mike = null;
                        if(!(mike != zulu)) { _fun00012_ip = 31; continue _fun00011 }
 13:
                        zulu = _closure2_slot1;
                        entity = _closure2_slot0;
                        mike = !entity;
                        entity = undefined;
                        entity = zulu.bind(entity)(mike);
 31:
                        entity = undefined;
                        return entity;
                    }
                };
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            entity['onAccessibilityTap'] = backup;
            report = options[report];
            report = oscar.bind(tango)(report);
            oscar = report.View;
            report = {};
            backup = offset.knob;
            options = new Array(2);
            options[0] = backup;
            options[1] = verify;
            report['style'] = options;
            options = _closure1_slot8;
            verify = {};
            backup = _closure1_slot1;
            kilo = _closure1_slot2;
            if(golf) { _fun00002_ip = 673; continue _fun00001 }
 626:
            golf = 12;
            golf = kilo[golf];
            golf = backup.bind(tango)(golf);
            verify['source'] = golf;
            verify['size'] = romeo;
            sizing = offset.unselected;
            golf = new Array(2);
            golf[0] = sizing;
            golf[1] = foxtrot;
            verify['style'] = golf;
            golf = verify;
            _fun00002_ip = 718; continue _fun00001;
 673:
            foxtrot = 11;
            foxtrot = kilo[foxtrot];
            foxtrot = backup.bind(tango)(foxtrot);
            verify['source'] = foxtrot;
            verify['size'] = romeo;
            romeo = offset.selected;
            offset = new Array(2);
            offset[0] = romeo;
            offset[1] = yankee;
            verify['style'] = offset;
            golf = verify;
 718:
            golf = zulu.bind(tango)(options, golf);
            report['children'] = golf;
            report = zulu.bind(tango)(oscar, report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['FormSwitch'] = mike;
    return entity;
})();