// app/modules/video_calls/native/components/PopoutMenu.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    foxtrot = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = foxtrot;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: PopoutMenuRow
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            foxtrot = mike.icon;
            offset = mike.text;
            verify = mike.onClick;
            var _closure2_slot0 = verify;
            options = mike.onClose;
            var _closure2_slot1 = options;
            mike = _closure1_slot10;
            tango = undefined;
            oscar = mike.bind(tango)();
            report = _closure1_slot4;
            zulu = report.useCallback;
            mike = new Array(2);
            mike[0] = verify;
            mike[1] = options;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = _closure2_slot0;
                    zulu = null;
                    if(!(zulu != mike)) { _fun00004_ip = 23; continue _fun00003 }
 13:
                    tango = _closure2_slot0;
                    mike = undefined;
                    mike = tango.bind(mike)();
 23:
                    mike = _closure2_slot1;
                    if(!(zulu != mike)) { _fun00004_ip = 41; continue _fun00003 }
 31:
                    mike = _closure2_slot1;
                    entity = undefined;
                    entity = mike.bind(entity)();
 41:
                    entity = undefined;
                    return entity;
                }
            };
            report = zulu.bind(report)(entity, mike);
            zulu = _closure1_slot7;
            mike = _closure1_slot1;
            options = _closure1_slot2;
            entity = 7;
            entity = options[entity];
            mike = mike.bind(tango)(entity);
            entity = {};
            options = null;
            verify = options != foxtrot;
            if(!verify) { _fun00002_ip = 153; continue _fun00001 }
 117:
            romeo = _closure1_slot7;
            yankee = _closure1_slot1;
            backup = _closure1_slot2;
            verify = 8;
            verify = backup[verify];
            yankee = yankee.bind(tango)(verify);
            verify = {};
            verify['source'] = foxtrot;
            options = romeo.bind(tango)(yankee, verify);
 153:
            entity['leading'] = options;
            verify = _closure1_slot7;
            options = _closure1_slot0;
            yankee = _closure1_slot2;
            golf = 9;
            golf = yankee[golf];
            golf = options.bind(tango)(golf);
            options = golf.FormLabel;
            golf = {};
            yankee = oscar.popoutMenuRowLabel;
            golf['style'] = yankee;
            golf['text'] = offset;
            golf = verify.bind(tango)(options, golf);
            entity['label'] = golf;
            oscar = oscar.popoutMenuRow;
            entity['style'] = oscar;
            entity['onPress'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot15 = entity;
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
    tango = foxtrot.bind(entity)(tango);
    var _closure1_slot3 = tango;
    yankee = 1;
    golf = oscar[yankee];
    tango = argCorge;
    golf = tango.bind(entity)(golf);
    var _closure1_slot4 = golf;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = foxtrot.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.jsx;
    var _closure1_slot7 = options;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.jsxs;
    var _closure1_slot8 = options;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Fragment;
    var _closure1_slot9 = tango;
    tango = 5;
    tango = oscar[tango];
    verify = report.bind(entity)(tango);
    options = verify.createStyles;
    tango = {};
    offset = {};
    romeo = 'absolute';
    offset['position'] = romeo;
    romeo = 6;
    backup = oscar[romeo];
    backup = foxtrot.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BACKGROUND_TERTIARY;
    offset['backgroundColor'] = backup;
    romeo = oscar[romeo];
    romeo = foxtrot.bind(entity)(romeo);
    romeo = romeo.radii;
    romeo = romeo.sm;
    offset['borderRadius'] = romeo;
    tango['container'] = offset;
    offset = {};
    offset['flex'] = yankee;
    tango['popoutMenuRow'] = offset;
    offset = {};
    yankee = '100%';
    offset['width'] = yankee;
    tango['popoutMenuRowLabel'] = offset;
    tango = options.bind(verify)(tango);
    var _closure1_slot10 = tango;
    tango = {};
    options = "function PopoutMenuTsx1(){const{withTiming,animateIn,STANDARD_EASING,ANIMATION_DURATION,runOnJS,handleClose,EXTRA_PADDING}=this.__closure;return{opacity:withTiming(animateIn?1:0,{easing:STANDARD_EASING,duration:ANIMATION_DURATION},'respect-motion-settings',function(finished){if(finished){runOnJS(handleClose)();}}),transform:[{translateY:withTiming(animateIn?-EXTRA_PADDING:0,{easing:STANDARD_EASING,duration:ANIMATION_DURATION})}]};}";
    tango['code'] = options;
    var _closure1_slot11 = tango;
    tango = {};
    options = 'function PopoutMenuTsx2(finished){const{runOnJS,handleClose}=this.__closure;if(finished){runOnJS(handleClose)();}}';
    tango['code'] = options;
    var _closure1_slot12 = tango;
    tango = {};
    options = 'function PopoutMenuTsx3(){const{runOnJS,_setClose}=this.__closure;runOnJS(_setClose)(true);}';
    tango['code'] = options;
    var _closure1_slot13 = tango;
    tango = {};
    options = 'function PopoutMenuTsx4(){const{runOnJS,handleLongPress}=this.__closure;runOnJS(handleLongPress)();}';
    tango['code'] = options;
    var _closure1_slot14 = tango;
    tango = golf.forwardRef;
    mike = function(argFoo, argBar) { // Original name: PopoutMenu
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zulu = argFoo;
            mike = zulu.disabled;
            sizing = zulu.title;
            config = zulu.trigger;
            backup = zulu.rows;
            result = zulu.style;
            entity = zulu.onOpen;
            var _closure2_slot0 = entity;
            zulu = zulu.onClose;
            var _closure2_slot1 = zulu;
            report = undefined;
            var _closure2_slot17 = report;
            var _closure2_slot18 = report;
            var _closure2_slot19 = report;
            var _closure2_slot20 = report;
            tango = _closure1_slot10;
            yankee = tango.bind(report)();
            oscar = _closure1_slot0;
            options = _closure1_slot2;
            tango = 10;
            tango = options[tango];
            verify = oscar.bind(report)(tango);
            golf = verify.useStateFromStoresArray;
            tango = _closure1_slot6;
            oscar = new Array(1);
            oscar[0] = tango;
            tango = function() {
                zulu = _closure1_slot6;
                entity = zulu.getWidth;
                mike = entity.bind(zulu)();
                entity = new Array(2);
                entity[0] = mike;
                mike = zulu.getHeight;
                mike = mike.bind(zulu)();
                entity[1] = mike;
                return entity;
            };
            tango = golf.bind(verify)(oscar, tango);
            papa = _closure1_slot3;
            control = 2;
            tango = papa.bind(report)(tango, control);
            oscar = 0;
            vacuum = tango[oscar];
            var _closure2_slot2 = vacuum;
            update = 1;
            sequence = tango[update];
            var _closure2_slot3 = sequence;
            golf = _closure1_slot1;
            tango = 11;
            tango = options[tango];
            tango = golf.bind(report)(tango);
            tango = tango.bind(report)();
            context = tango.bottom;
            var _closure2_slot4 = context;
            golf = _closure1_slot4;
            tango = golf.useState;
            tango = tango.bind(golf)(oscar);
            golf = papa.bind(report)(tango, control);
            tango = golf[oscar];
            golf = golf[update];
            var _closure2_slot5 = golf;
            verify = _closure1_slot4;
            options = verify.useState;
            output = false;
            options = options.bind(verify)(output);
            options = papa.bind(report)(options, control);
            verify = options[oscar];
            var _closure2_slot6 = verify;
            offset = options[update];
            var _closure2_slot7 = offset;
            foxtrot = _closure1_slot4;
            options = foxtrot.useState;
            options = options.bind(foxtrot)(output);
            foxtrot = papa.bind(report)(options, control);
            options = foxtrot[oscar];
            var _closure2_slot8 = options;
            foxtrot = foxtrot[update];
            var _closure2_slot9 = foxtrot;
            echo = _closure1_slot4;
            output = echo.useRef;
            foxtrot = null;
            record = output.bind(echo)(foxtrot);
            var _closure2_slot10 = record;
            echo = _closure1_slot4;
            output = echo.useRef;
            source = output.bind(echo)(foxtrot);
            var _closure2_slot11 = source;
            target = _closure1_slot4;
            echo = target.useState;
            output = {'top': 0, 'left': 0, 'width': 0, 'height': 0};
            output = echo.bind(target)(output);
            echo = papa.bind(report)(output, control);
            output = echo[oscar];
            var _closure2_slot12 = output;
            echo = echo[update];
            var _closure2_slot13 = echo;
            status = _closure1_slot4;
            target = status.useState;
            echo = {'width': 0, 'height': 0};
            echo = target.bind(status)(echo);
            echo = papa.bind(report)(echo, control);
            papa = echo[oscar];
            var _closure2_slot14 = papa;
            echo = echo[update];
            var _closure2_slot15 = echo;
            target = _closure1_slot4;
            control = target.useEffect;
            update = new Array(1);
            update[0] = options;
            echo = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    mike = _closure2_slot8;
                    if(!mike) { _fun00008_ip = 40; continue _fun00007 }
 12:
                    zulu = _closure2_slot10;
                    report = null;
                    oscar = report == zulu;
                    zulu = undefined;
                    if(oscar) { _fun00008_ip = 36; continue _fun00007 }
 27:
                    oscar = _closure2_slot10;
                    zulu = oscar.current;
 36:
                    mike = report != zulu;
 40:
                    if(!mike) { _fun00008_ip = 117; continue _fun00007 }
 43:
                    mike = _closure2_slot10;
                    oscar = null;
                    mike = oscar == mike;
                    zulu = undefined;
                    report = undefined;
                    if(mike) { _fun00008_ip = 76; continue _fun00007 }
 60:
                    tango = _closure2_slot10;
                    tango = tango.current;
                    mike = oscar == tango;
                    report = tango;
 76:
                    if(mike) { _fun00008_ip = 97; continue _fun00007 }
 79:
                    tango = report.measureInWindow;
                    mike = function(argFoo, argBar, argBaz, argCorge) {
                        zulu = _closure2_slot13;
                        mike = {};
                        entity = global;
                        oscar = entity.Math;
                        report = oscar.max;
                        tango = argBar;
                        entity = 0;
                        entity = report.bind(oscar)(tango, entity);
                        mike['top'] = entity;
                        entity = argFoo;
                        mike['left'] = entity;
                        entity = argBaz;
                        mike['width'] = entity;
                        entity = argCorge;
                        mike['height'] = entity;
                        entity = undefined;
                        mike = zulu.bind(entity)(mike);
                        return entity;
                    };
                    mike = tango.bind(report)(mike);
 97:
                    mike = global;
                    mike = mike.setTimeout;
                    entity = function() {
                        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                            entity = _closure2_slot11;
                            report = null;
                            mike = report == entity;
                            entity = undefined;
                            tango = undefined;
                            if(mike) { _fun00010_ip = 36; continue _fun00009 }
 20:
                            zulu = _closure2_slot11;
                            zulu = zulu.current;
                            mike = report == zulu;
                            tango = zulu;
 36:
                            if(mike) { _fun00010_ip = 59; continue _fun00009 }
 39:
                            zulu = tango.measureInWindow;
                            mike = function(argFoo, argBar, argBaz, argCorge) {
                                zulu = _closure2_slot15;
                                mike = {};
                                entity = argBaz;
                                mike['width'] = entity;
                                entity = argCorge;
                                mike['height'] = entity;
                                entity = undefined;
                                mike = zulu.bind(entity)(mike);
                                return entity;
                            };
                            mike = zulu.bind(tango)(mike);
 59:
                            return entity;
                        }
                    };
                    entity = mike.bind(zulu)(entity);
 117:
                    entity = undefined;
                    return entity;
                }
            };
            echo = control.bind(target)(echo, update);
            control = _closure1_slot4;
            update = control.useMemo;
            echo = new Array(5);
            echo[0] = papa;
            echo[1] = context;
            echo[2] = sequence;
            echo[3] = vacuum;
            echo[4] = output;
            output = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    mike = _closure2_slot14;
                    zulu = mike.height;
                    zulu = -zulu;
                    tango = _closure2_slot12;
                    report = tango.top;
                    tango = tango.height;
                    tango = report + tango;
                    mike = mike.height;
                    mike = tango + mike;
                    tango = 8;
                    report = mike + tango;
                    mike = _closure2_slot4;
                    report = report + mike;
                    mike = _closure2_slot3;
                    if(!(report < mike)) { _fun00012_ip = 81; continue _fun00011 }
 65:
                    mike = _closure2_slot12;
                    report = mike.height;
                    mike = 16;
                    zulu = report + mike;
 81:
                    mike = _closure2_slot12;
                    report = mike.left;
                    mike = _closure2_slot14;
                    mike = mike.width;
                    mike = report + mike;
                    tango = mike + tango;
                    mike = _closure2_slot2;
                    tango = tango > mike;
                    mike = 0;
                    if(!tango) { _fun00012_ip = 142; continue _fun00011 }
 120:
                    tango = _closure2_slot12;
                    tango = tango.width;
                    entity = _closure2_slot14;
                    entity = entity.width;
                    mike = tango - entity;
 142:
                    entity = {};
                    entity['top'] = zulu;
                    entity['left'] = mike;
                    return entity;
                }
            };
            output = update.bind(control)(output, echo);
            echo = output.top;
            update = output.left;
            sequence = _closure1_slot4;
            vacuum = sequence.useImperativeHandle;
            control = new Array(1);
            control[0] = offset;
            output = argBar;
            offset = function() {
                entity = {};
                mike = function() { // Original name: close
                    zulu = _closure2_slot7;
                    entity = undefined;
                    mike = true;
                    mike = zulu.bind(entity)(mike);
                    return entity;
                };
                entity['close'] = mike;
                return entity;
            };
            offset = vacuum.bind(sequence)(output, offset, control);
            control = _closure1_slot4;
            output = control.useMemo;
            offset = new Array(1);
            offset[0] = golf;
            golf = function() {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 12;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.debounce;
                mike = function(argFoo) {
                    zulu = _closure2_slot5;
                    entity = undefined;
                    mike = argFoo;
                    mike = zulu.bind(entity)(mike);
                    return entity;
                };
                entity = 16;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            golf = output.bind(control)(golf, offset);
            var _closure2_slot16 = golf;
            vacuum = tango > oscar;
            if(!vacuum) { _fun00006_ip = 596; continue _fun00005 }
 593:
            vacuum = !verify;
 596:
            _closure2_slot17 = vacuum;
            golf = _closure1_slot4;
            oscar = golf.useCallback;
            tango = new Array(2);
            tango[0] = verify;
            tango[1] = zulu;
            zulu = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    mike = _closure2_slot6;
                    if(!mike) { _fun00014_ip = 31; continue _fun00013 }
 10:
                    mike = _closure2_slot1;
                    zulu = undefined;
                    mike = mike.bind(zulu)();
                    mike = _closure2_slot9;
                    entity = false;
                    entity = mike.bind(zulu)(entity);
 31:
                    entity = undefined;
                    return entity;
                }
            };
            verify = oscar.bind(golf)(zulu, tango);
            _closure2_slot18 = verify;
            output = _closure1_slot0;
            offset = _closure1_slot2;
            control = 13;
            zulu = offset[control];
            oscar = output.bind(report)(zulu);
            tango = oscar.useAnimatedStyle;
            zulu = function() { // Original name: ue
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    entity = {};
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    verify = 14;
                    mike = mike[verify];
                    offset = undefined;
                    sizing = zulu.bind(offset)(mike);
                    kilo = sizing.withTiming;
                    zulu = _closure2_slot17;
                    backup = 0;
                    if(!zulu) { _fun00016_ip = 47; continue _fun00015 }
 44:
                    backup = 1;
 47:
                    foxtrot = {};
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    yankee = 15;
                    zulu = tango[yankee];
                    zulu = report.bind(offset)(zulu);
                    zulu = zulu.STANDARD_EASING;
                    foxtrot['easing'] = zulu;
                    golf = 250;
                    foxtrot['duration'] = golf;
                    romeo = function(argFoo) { // Original name: n
                        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                            entity = argFoo;
                            if(!entity) { _fun00018_ip = 52; continue _fun00017 }
 6:
                            zulu = _closure1_slot0;
                            mike = _closure1_slot2;
                            entity = 13;
                            entity = mike[entity];
                            mike = undefined;
                            tango = zulu.bind(mike)(entity);
                            zulu = tango.runOnJS;
                            entity = _closure2_slot18;
                            entity = zulu.bind(tango)(entity);
                            entity = entity.bind(mike)();
 52:
                            entity = undefined;
                            return entity;
                        }
                    };
                    zulu = {};
                    output = 13;
                    output = tango[output];
                    output = report.bind(offset)(output);
                    output = output.runOnJS;
                    zulu['runOnJS'] = output;
                    output = _closure2_slot18;
                    zulu['handleClose'] = output;
                    romeo['__closure'] = zulu;
                    zulu = 7805688342878.0;
                    romeo['__workletHash'] = zulu;
                    zulu = _closure1_slot12;
                    romeo['__initData'] = zulu;
                    echo = 'respect-motion-settings';
                    control = sizing;
                    source = backup;
                    update = foxtrot;
                    result = romeo;
                    zulu = control[kilo](source, update, echo, result, output);
                    entity['opacity'] = zulu;
                    zulu = {};
                    tango = tango[verify];
                    report = report.bind(offset)(tango);
                    tango = report.withTiming;
                    mike = _closure2_slot17;
                    oscar = 0;
                    if(!mike) { _fun00016_ip = 217; continue _fun00015 }
 211:
                    oscar = -8;
 217:
                    mike = {};
                    verify = _closure1_slot0;
                    options = _closure1_slot2;
                    options = options[yankee];
                    options = verify.bind(offset)(options);
                    options = options.STANDARD_EASING;
                    mike['easing'] = options;
                    mike['duration'] = golf;
                    mike = tango.bind(report)(oscar, mike);
                    zulu['translateY'] = mike;
                    mike = new Array(1);
                    mike[0] = zulu;
                    entity['transform'] = mike;
                    return entity;
                }
            };
            golf = {};
            sequence = 14;
            sequence = offset[sequence];
            sequence = output.bind(report)(sequence);
            sequence = sequence.withTiming;
            golf['withTiming'] = sequence;
            golf['animateIn'] = vacuum;
            vacuum = 15;
            vacuum = offset[vacuum];
            vacuum = output.bind(report)(vacuum);
            vacuum = vacuum.STANDARD_EASING;
            golf['STANDARD_EASING'] = vacuum;
            vacuum = 250;
            golf['ANIMATION_DURATION'] = vacuum;
            offset = offset[control];
            offset = output.bind(report)(offset);
            offset = offset.runOnJS;
            golf['runOnJS'] = offset;
            golf['handleClose'] = verify;
            verify = 8;
            golf['EXTRA_PADDING'] = verify;
            zulu['__closure'] = golf;
            golf = 2727321893876.0;
            zulu['__workletHash'] = golf;
            golf = _closure1_slot11;
            zulu['__initData'] = golf;
            output = tango.bind(oscar)(zulu);
            golf = _closure1_slot4;
            oscar = golf.useCallback;
            tango = function() {
                zulu = _closure2_slot7;
                mike = undefined;
                entity = true;
                entity = zulu.bind(mike)(entity);
                return entity;
            };
            zulu = new Array(0);
            zulu = oscar.bind(golf)(tango, zulu);
            _closure2_slot19 = zulu;
            oscar = _closure1_slot4;
            tango = oscar.useCallback;
            zulu = new Array(1);
            zulu[0] = entity;
            entity = function() {
                tango = _closure2_slot7;
                entity = undefined;
                zulu = false;
                zulu = tango.bind(entity)(zulu);
                tango = _closure1_slot1;
                report = _closure1_slot2;
                zulu = 16;
                zulu = report[zulu];
                report = tango.bind(entity)(zulu);
                tango = report.trigger;
                zulu = 'impactHeavy';
                zulu = tango.bind(report)(zulu);
                tango = _closure2_slot9;
                zulu = true;
                zulu = tango.bind(entity)(zulu);
                mike = _closure2_slot0;
                mike = mike.bind(entity)();
                return entity;
            };
            entity = tango.bind(oscar)(entity, zulu);
            _closure2_slot20 = entity;
            oscar = _closure1_slot4;
            tango = oscar.useMemo;
            zulu = new Array(1);
            zulu[0] = entity;
            entity = function() {
                verify = _closure1_slot0;
                offset = _closure1_slot2;
                mike = 17;
                mike = offset[mike];
                options = undefined;
                mike = verify.bind(options)(mike);
                zulu = mike.Gesture;
                mike = zulu.LongPress;
                report = mike.bind(zulu)();
                zulu = report.onBegin;
                mike = function() { // Original name: t
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 13;
                    mike = mike[entity];
                    entity = undefined;
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.runOnJS;
                    mike = _closure2_slot7;
                    zulu = zulu.bind(tango)(mike);
                    mike = true;
                    mike = zulu.bind(entity)(mike);
                    return entity;
                };
                yankee = {};
                golf = 13;
                oscar = offset[golf];
                oscar = verify.bind(options)(oscar);
                oscar = oscar.runOnJS;
                yankee['runOnJS'] = oscar;
                romeo = _closure2_slot7;
                yankee['_setClose'] = romeo;
                mike['__closure'] = yankee;
                yankee = 293965298945.0;
                mike['__workletHash'] = yankee;
                yankee = _closure1_slot13;
                mike['__initData'] = yankee;
                zulu = zulu.bind(report)(mike);
                mike = zulu.onStart;
                entity = function() { // Original name: n
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 13;
                    mike = mike[entity];
                    entity = undefined;
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.runOnJS;
                    mike = _closure2_slot20;
                    mike = zulu.bind(tango)(mike);
                    mike = mike.bind(entity)();
                    return entity;
                };
                report = {};
                golf = offset[golf];
                golf = verify.bind(options)(golf);
                golf = golf.runOnJS;
                report['runOnJS'] = golf;
                oscar = _closure2_slot20;
                report['handleLongPress'] = oscar;
                entity['__closure'] = report;
                report = 4560686489392.0;
                entity['__workletHash'] = report;
                tango = _closure1_slot14;
                entity['__initData'] = tango;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            offset = tango.bind(oscar)(entity, zulu);
            entity = config;
            if(mike) { _fun00006_ip = 1218; continue _fun00005 }
 905:
            tango = _closure1_slot8;
            zulu = _closure1_slot9;
            mike = {};
            verify = _closure1_slot7;
            golf = _closure1_slot0;
            vacuum = _closure1_slot2;
            oscar = 17;
            oscar = vacuum[oscar];
            oscar = golf.bind(report)(oscar);
            golf = oscar.GestureDetector;
            oscar = {};
            oscar['gesture'] = offset;
            sequence = _closure1_slot7;
            vacuum = _closure1_slot5;
            offset = {};
            offset['ref'] = record;
            offset['children'] = config;
            offset = sequence.bind(report)(vacuum, offset);
            oscar['children'] = offset;
            golf = verify.bind(report)(golf, oscar);
            oscar = new Array(2);
            oscar[0] = golf;
            golf = null;
            if(!options) { _fun00006_ip = 1204; continue _fun00005 }
 1002:
            offset = _closure1_slot8;
            verify = _closure1_slot1;
            options = _closure1_slot2;
            options = options[control];
            options = verify.bind(report)(options);
            verify = options.View;
            options = {};
            options['ref'] = source;
            source = yankee.container;
            yankee = new Array(4);
            yankee[0] = source;
            yankee[1] = result;
            result = {};
            result['left'] = update;
            result['top'] = echo;
            yankee[2] = result;
            yankee[3] = output;
            options['style'] = yankee;
            yankee = function(argFoo) { // Original name: onLayout
                zulu = _closure2_slot16;
                entity = argFoo;
                entity = entity.nativeEvent;
                entity = entity.layout;
                mike = entity.height;
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            options['onLayout'] = yankee;
            yankee = foxtrot != sizing;
            output = null;
            if(!yankee) { _fun00006_ip = 1114; continue _fun00005 }
 1094:
            echo = _closure1_slot7;
            result = _closure1_slot15;
            yankee = {};
            yankee['text'] = sizing;
            output = echo.bind(report)(result, yankee);
 1114:
            yankee = new Array(3);
            yankee[0] = output;
            sizing = foxtrot != sizing;
            foxtrot = null;
            if(!sizing) { _fun00006_ip = 1169; continue _fun00005 }
 1131:
            output = _closure1_slot7;
            sizing = _closure1_slot0;
            result = _closure1_slot2;
            kilo = 9;
            kilo = result[kilo];
            kilo = sizing.bind(report)(kilo);
            sizing = kilo.FormDivider;
            kilo = {};
            foxtrot = output.bind(report)(sizing, kilo);
 1169:
            yankee[1] = foxtrot;
            foxtrot = backup.map;
            romeo = function(argFoo, argBar) {
                report = _closure1_slot7;
                tango = _closure1_slot15;
                zulu = {};
                golf = argFoo;
                options = zulu;
                entity = copyDataProperties(options, golf);
                mike = _closure2_slot19;
                entity = 'onClose';
                zulu[entity] = mike;
                mike = undefined;
                entity = argBar;
                entity = report.bind(mike)(tango, zulu, entity);
                return entity;
            };
            romeo = foxtrot.bind(backup)(romeo);
            yankee[2] = romeo;
            options['children'] = yankee;
            golf = offset.bind(report)(verify, options);
 1204:
            oscar[1] = golf;
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 1218:
            return entity;
        }
    };
    mike = tango.bind(golf)(mike);
    tango = 18;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/video_calls/native/components/PopoutMenu.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();