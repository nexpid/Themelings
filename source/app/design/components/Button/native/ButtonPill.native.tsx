// app/design/components/Button/native/ButtonPill.native.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    options = argBar;
    offset = argBaz;
    zulu = argFred;
    verify = argPlugh;
    var _closure1_slot0 = options;
    var _closure1_slot1 = offset;
    var _closure1_slot2 = verify;
    entity = function(argFoo) { // Original name: PillWrapper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            romeo = entity.children;
            mike = entity.variant;
            backup = entity.style;
            offset = entity.pressed;
            entity = entity.shiny;
            report = undefined;
            if(!(entity === report)) { _fun00002_ip = 38; continue _fun00001 }
 36:
            entity = false;
 38:
            oscar = _closure1_slot0;
            verify = _closure1_slot2;
            zulu = 7;
            tango = verify[zulu];
            options = oscar.bind(report)(tango);
            tango = options.useButtonPillStyles;
            foxtrot = tango.bind(options)(mike, offset);
            zulu = verify[zulu];
            tango = oscar.bind(report)(zulu);
            zulu = tango.useGradientPillStyles;
            result = zulu.bind(tango)(mike);
            tango = 8;
            zulu = verify[tango];
            kilo = oscar.bind(report)(zulu);
            yankee = kilo.useToken;
            options = _closure1_slot1;
            zulu = 6;
            offset = verify[zulu];
            offset = options.bind(report)(offset);
            offset = offset.colors;
            offset = offset.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT;
            offset = yankee.bind(kilo)(offset);
            sizing = new Array(3);
            sizing[0] = offset;
            offset = verify[tango];
            kilo = oscar.bind(report)(offset);
            yankee = kilo.useToken;
            offset = verify[zulu];
            offset = options.bind(report)(offset);
            offset = offset.colors;
            offset = offset.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2;
            offset = yankee.bind(kilo)(offset);
            sizing[1] = offset;
            tango = verify[tango];
            oscar = oscar.bind(report)(tango);
            tango = oscar.useToken;
            zulu = verify[zulu];
            zulu = options.bind(report)(zulu);
            zulu = zulu.colors;
            zulu = zulu.REDESIGN_BUTTON_PREMIUM_PRIMARY_PINK_FOR_GRADIENT;
            zulu = tango.bind(oscar)(zulu);
            sizing[2] = zulu;
            yankee = null;
            if(!entity) { _fun00002_ip = 286; continue _fun00001 }
 244:
            tango = _closure1_slot7;
            zulu = _closure1_slot0;
            oscar = _closure1_slot2;
            entity = 9;
            entity = oscar[entity];
            entity = zulu.bind(report)(entity);
            zulu = entity.ButtonShine;
            entity = {};
            entity['variant'] = mike;
            yankee = tango.bind(report)(zulu, entity);
 286:
            entity = 'experimental_premium-primary';
            if(!(entity !== mike)) { _fun00002_ip = 370; continue _fun00001 }
 296:
            zulu = _closure1_slot8;
            mike = _closure1_slot1;
            tango = _closure1_slot2;
            entity = 11;
            entity = tango[entity];
            entity = mike.bind(report)(entity);
            mike = entity.View;
            entity = {};
            tango = new Array(2);
            tango[0] = backup;
            tango[1] = foxtrot;
            entity['style'] = tango;
            tango = new Array(2);
            tango[0] = romeo;
            tango[1] = yankee;
            entity['children'] = tango;
            entity = zulu.bind(report)(mike, entity);
            _fun00002_ip = 557; continue _fun00001;
 370:
            tango = _closure1_slot8;
            zulu = _closure1_slot9;
            mike = {};
            kilo = _closure1_slot7;
            options = _closure1_slot1;
            offset = _closure1_slot2;
            oscar = 10;
            oscar = offset[oscar];
            verify = options.bind(report)(oscar);
            oscar = {};
            output = {'x': 0, 'y': 0};
            oscar['start'] = output;
            output = {'x': 1, 'y': 0};
            oscar['end'] = output;
            output = new Array(3);
            output[0] = backup;
            output[1] = result;
            result = _closure1_slot6;
            result = result.absoluteFill;
            output[2] = result;
            oscar['style'] = output;
            oscar['colors'] = sizing;
            verify = kilo.bind(report)(verify, oscar);
            oscar = new Array(2);
            oscar[0] = verify;
            verify = _closure1_slot8;
            golf = 11;
            golf = offset[golf];
            golf = options.bind(report)(golf);
            options = golf.View;
            golf = {};
            offset = new Array(2);
            offset[0] = backup;
            offset[1] = foxtrot;
            golf['style'] = offset;
            offset = new Array(2);
            offset[0] = romeo;
            offset[1] = yankee;
            golf['children'] = offset;
            golf = verify.bind(report)(options, golf);
            oscar[1] = golf;
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 557:
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    report = function(argFoo) { // Original name: BasicButtonPill
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            options = entity.children;
            yankee = entity.style;
            golf = entity.pressed;
            offset = entity.variant;
            tango = undefined;
            if(!(offset === tango)) { _fun00004_ip = 34; continue _fun00003 }
 30:
            offset = 'primary';
 34:
            mike = entity.size;
            if(!(mike === tango)) { _fun00004_ip = 72; continue _fun00003 }
 43:
            report = _closure1_slot0;
            oscar = _closure1_slot2;
            zulu = 4;
            zulu = oscar[zulu];
            zulu = report.bind(tango)(zulu);
            mike = zulu.DEFAULT_BUTTON_SIZE;
 72:
            oscar = entity.shiny;
            if(!(oscar === tango)) { _fun00004_ip = 84; continue _fun00003 }
 82:
            oscar = false;
 84:
            entity = _closure1_slot14;
            verify = entity.bind(tango)(offset, mike);
            zulu = _closure1_slot7;
            mike = _closure1_slot17;
            entity = {};
            entity['variant'] = offset;
            romeo = verify.pill;
            offset = new Array(2);
            offset[0] = romeo;
            offset[1] = yankee;
            entity['style'] = offset;
            entity['pressed'] = golf;
            entity['shiny'] = oscar;
            golf = _closure1_slot7;
            oscar = _closure1_slot5;
            report = {};
            verify = verify.childContainer;
            report['style'] = verify;
            report['children'] = options;
            report = golf.bind(tango)(oscar, report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot18 = report;
    tango = function(argFoo) { // Original name: LoadingButtonPill
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            mike = argFoo;
            echo = mike.children;
            golf = mike.style;
            report = mike.pressed;
            sizing = mike.variant;
            tango = undefined;
            if(!(sizing === tango)) { _fun00006_ip = 36; continue _fun00005 }
 32:
            sizing = 'primary';
 36:
            foxtrot = mike.size;
            if(!(foxtrot === tango)) { _fun00006_ip = 74; continue _fun00005 }
 45:
            oscar = _closure1_slot0;
            options = _closure1_slot2;
            zulu = 4;
            zulu = options[zulu];
            zulu = oscar.bind(tango)(zulu);
            foxtrot = zulu.DEFAULT_BUTTON_SIZE;
 74:
            oscar = mike.loading;
            if(!(oscar === tango)) { _fun00006_ip = 86; continue _fun00005 }
 84:
            oscar = false;
 86:
            var _closure2_slot0 = oscar;
            backup = mike.loaderSize;
            var _closure2_slot1 = tango;
            var _closure2_slot2 = tango;
            mike = _closure1_slot14;
            yankee = mike.bind(tango)(sizing, foxtrot);
            zulu = _closure1_slot4;
            mike = zulu.useRef;
            kilo = null;
            mike = mike.bind(zulu)(kilo);
            _closure2_slot1 = mike;
            zulu = _closure1_slot4;
            mike = zulu.useState;
            zulu = mike.bind(zulu)(oscar);
            mike = _closure1_slot3;
            options = 2;
            romeo = mike.bind(tango)(zulu, options);
            zulu = 0;
            verify = romeo[zulu];
            mike = 1;
            romeo = romeo[mike];
            _closure2_slot2 = romeo;
            result = _closure1_slot4;
            output = result.useEffect;
            romeo = new Array(1);
            romeo[0] = oscar;
            entity = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    mike = _closure2_slot1;
                    zulu = mike.current;
                    mike = null;
                    if(!(mike != zulu)) { _fun00008_ip = 42; continue _fun00007 }
 18:
                    mike = global;
                    tango = mike.clearTimeout;
                    mike = _closure2_slot1;
                    zulu = mike.current;
                    mike = undefined;
                    mike = tango.bind(mike)(zulu);
 42:
                    mike = _closure2_slot0;
                    if(mike) { _fun00008_ip = 90; continue _fun00007 }
 49:
                    zulu = _closure2_slot1;
                    mike = global;
                    oscar = mike.setTimeout;
                    report = undefined;
                    tango = function() {
                        zulu = _closure2_slot2;
                        entity = undefined;
                        mike = false;
                        mike = zulu.bind(entity)(mike);
                        return entity;
                    };
                    mike = 500;
                    mike = oscar.bind(report)(tango, mike);
                    zulu['current'] = mike;
                    _fun00008_ip = 103; continue _fun00007;
 90:
                    zulu = _closure2_slot2;
                    mike = undefined;
                    entity = true;
                    entity = zulu.bind(mike)(entity);
 103:
                    entity = undefined;
                    return entity;
                }
            };
            entity = output.bind(result)(entity, romeo);
            entity = _closure1_slot20;
            oscar = entity.bind(tango)(oscar, foxtrot);
            entity = _closure1_slot3;
            entity = entity.bind(tango)(oscar, options);
            source = entity[zulu];
            romeo = entity[mike];
            zulu = _closure1_slot8;
            mike = _closure1_slot17;
            entity = {};
            entity['variant'] = sizing;
            options = yankee.pill;
            oscar = new Array(2);
            oscar[0] = options;
            oscar[1] = golf;
            entity['style'] = oscar;
            entity['pressed'] = report;
            result = _closure1_slot7;
            golf = _closure1_slot1;
            output = _closure1_slot2;
            oscar = 11;
            report = output[oscar];
            report = golf.bind(tango)(report);
            options = report.View;
            report = {};
            control = yankee.childContainer;
            update = new Array(2);
            update[0] = control;
            update[1] = source;
            report['style'] = update;
            report['children'] = echo;
            options = result.bind(tango)(options, report);
            report = new Array(2);
            report[0] = options;
            options = _closure1_slot7;
            oscar = output[oscar];
            oscar = golf.bind(tango)(oscar);
            golf = oscar.View;
            oscar = {};
            output = yankee.ellipsis;
            yankee = new Array(2);
            yankee[0] = output;
            yankee[1] = romeo;
            oscar['style'] = yankee;
            if(!verify) { _fun00006_ip = 447; continue _fun00005 }
 394:
            romeo = _closure1_slot7;
            yankee = _closure1_slot0;
            output = _closure1_slot2;
            offset = 12;
            offset = output[offset];
            offset = yankee.bind(tango)(offset);
            yankee = offset.Ellipsis;
            offset = {};
            offset['variant'] = sizing;
            if(!(kilo != backup)) { _fun00006_ip = 437; continue _fun00005 }
 434:
            foxtrot = backup;
 437:
            offset['size'] = foxtrot;
            verify = romeo.bind(tango)(yankee, offset);
 447:
            oscar['children'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot19 = tango;
    mike = function(argFoo, argBar) { // Original name: useLoadingStyles
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            backup = argFoo;
            var _closure2_slot0 = backup;
            tango = _closure1_slot4;
            zulu = tango.useContext;
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            entity = 13;
            entity = golf[entity];
            offset = undefined;
            entity = oscar.bind(offset)(entity);
            entity = entity.AccessibilityPreferencesContext;
            entity = zulu.bind(tango)(entity);
            entity = entity.reducedMotion;
            romeo = entity.enabled;
            var _closure2_slot1 = romeo;
            golf = 12;
            zulu = 'lg';
            entity = argBar;
            if(!(zulu === entity)) { _fun00010_ip = 87; continue _fun00009 }
 84:
            golf = 18;
 87:
            var _closure2_slot2 = golf;
            verify = _closure1_slot0;
            yankee = _closure1_slot2;
            options = 11;
            entity = yankee[options];
            tango = verify.bind(offset)(entity);
            zulu = tango.useAnimatedStyle;
            entity = function() { // Original name: o
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    mike = _closure1_slot0;
                    entity = _closure1_slot2;
                    verify = 14;
                    entity = entity[verify];
                    options = undefined;
                    golf = mike.bind(options)(entity);
                    oscar = golf.withSpring;
                    entity = _closure2_slot0;
                    report = 1;
                    if(!entity) { _fun00012_ip = 45; continue _fun00011 }
 43:
                    report = 0;
 45:
                    mike = _closure1_slot0;
                    entity = _closure1_slot2;
                    romeo = 15;
                    entity = entity[romeo];
                    entity = mike.bind(options)(entity);
                    mike = entity.SUBTLE_SPRING;
                    entity = 'animate-always';
                    golf = oscar.bind(golf)(report, mike, entity);
                    entity = _closure2_slot1;
                    mike = {};
                    if(entity) { _fun00012_ip = 195; continue _fun00011 }
 93:
                    mike['opacity'] = golf;
                    report = {};
                    oscar = _closure1_slot0;
                    entity = _closure1_slot2;
                    entity = entity[verify];
                    offset = oscar.bind(options)(entity);
                    verify = offset.withSpring;
                    entity = _closure2_slot0;
                    oscar = 0;
                    if(!entity) { _fun00012_ip = 144; continue _fun00011 }
 130:
                    yankee = _closure2_slot2;
                    entity = -1;
                    oscar = entity * yankee;
 144:
                    yankee = _closure1_slot0;
                    entity = _closure1_slot2;
                    entity = entity[romeo];
                    entity = yankee.bind(options)(entity);
                    entity = entity.SUBTLE_SPRING;
                    entity = verify.bind(offset)(oscar, entity);
                    report['translateY'] = entity;
                    entity = new Array(1);
                    entity[0] = report;
                    mike['transform'] = entity;
                    entity = mike;
                    _fun00012_ip = 269; continue _fun00011;
 195:
                    report = _closure2_slot0;
                    zulu = golf;
                    if(report) { _fun00012_ip = 241; continue _fun00011 }
 205:
                    oscar = _closure1_slot0;
                    verify = _closure1_slot2;
                    report = 11;
                    report = verify[report];
                    oscar = oscar.bind(options)(report);
                    report = oscar.withDelay;
                    tango = _closure1_slot10;
                    zulu = report.bind(oscar)(tango, golf);
 241:
                    mike['opacity'] = zulu;
                    tango = {};
                    zulu = 0;
                    tango['translateY'] = zulu;
                    zulu = new Array(1);
                    zulu[0] = tango;
                    mike['transform'] = zulu;
                    entity = mike;
 269:
                    return entity;
                }
            };
            oscar = {};
            kilo = 14;
            foxtrot = yankee[kilo];
            foxtrot = verify.bind(offset)(foxtrot);
            foxtrot = foxtrot.withSpring;
            oscar['withSpring'] = foxtrot;
            oscar['loading'] = backup;
            foxtrot = 15;
            sizing = yankee[foxtrot];
            sizing = verify.bind(offset)(sizing);
            sizing = sizing.SUBTLE_SPRING;
            oscar['SUBTLE_SPRING'] = sizing;
            oscar['useReducedMotion'] = romeo;
            sizing = yankee[options];
            sizing = verify.bind(offset)(sizing);
            sizing = sizing.withDelay;
            oscar['withDelay'] = sizing;
            sizing = _closure1_slot10;
            oscar['FADE_DELAY'] = sizing;
            oscar['offsetY'] = golf;
            entity['__closure'] = oscar;
            oscar = 9388603334085.0;
            entity['__workletHash'] = oscar;
            oscar = _closure1_slot15;
            entity['__initData'] = oscar;
            zulu = zulu.bind(tango)(entity);
            entity = new Array(2);
            entity[0] = zulu;
            zulu = yankee[options];
            tango = verify.bind(offset)(zulu);
            zulu = tango.useAnimatedStyle;
            mike = function() { // Original name: s
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    mike = _closure1_slot0;
                    entity = _closure1_slot2;
                    offset = 14;
                    entity = entity[offset];
                    verify = undefined;
                    options = mike.bind(verify)(entity);
                    golf = options.withSpring;
                    entity = _closure2_slot0;
                    zulu = 0;
                    oscar = 0;
                    if(!entity) { _fun00014_ip = 47; continue _fun00013 }
 44:
                    oscar = 1;
 47:
                    mike = _closure1_slot0;
                    entity = _closure1_slot2;
                    foxtrot = 15;
                    entity = entity[foxtrot];
                    entity = mike.bind(verify)(entity);
                    mike = entity.SUBTLE_SPRING;
                    entity = 'animate-always';
                    options = golf.bind(options)(oscar, mike, entity);
                    entity = _closure2_slot1;
                    mike = {};
                    if(entity) { _fun00014_ip = 187; continue _fun00013 }
 95:
                    mike['opacity'] = options;
                    oscar = {};
                    golf = _closure1_slot0;
                    entity = _closure1_slot2;
                    entity = entity[offset];
                    yankee = golf.bind(verify)(entity);
                    offset = yankee.withSpring;
                    entity = _closure2_slot0;
                    golf = 0;
                    if(entity) { _fun00014_ip = 136; continue _fun00013 }
 132:
                    golf = _closure2_slot2;
 136:
                    romeo = _closure1_slot0;
                    entity = _closure1_slot2;
                    entity = entity[foxtrot];
                    entity = romeo.bind(verify)(entity);
                    entity = entity.SUBTLE_SPRING;
                    entity = offset.bind(yankee)(golf, entity);
                    oscar['translateY'] = entity;
                    entity = new Array(1);
                    entity[0] = oscar;
                    mike['transform'] = entity;
                    entity = mike;
                    _fun00014_ip = 259; continue _fun00013;
 187:
                    oscar = _closure2_slot0;
                    tango = options;
                    if(!oscar) { _fun00014_ip = 233; continue _fun00013 }
 197:
                    golf = _closure1_slot0;
                    offset = _closure1_slot2;
                    oscar = 11;
                    oscar = offset[oscar];
                    golf = golf.bind(verify)(oscar);
                    oscar = golf.withDelay;
                    report = _closure1_slot10;
                    tango = oscar.bind(golf)(report, options);
 233:
                    mike['opacity'] = tango;
                    tango = {};
                    tango['translateY'] = zulu;
                    zulu = new Array(1);
                    zulu[0] = tango;
                    mike['transform'] = zulu;
                    entity = mike;
 259:
                    return entity;
                }
            };
            oscar = {};
            kilo = yankee[kilo];
            kilo = verify.bind(offset)(kilo);
            kilo = kilo.withSpring;
            oscar['withSpring'] = kilo;
            oscar['loading'] = backup;
            foxtrot = yankee[foxtrot];
            foxtrot = verify.bind(offset)(foxtrot);
            foxtrot = foxtrot.SUBTLE_SPRING;
            oscar['SUBTLE_SPRING'] = foxtrot;
            oscar['useReducedMotion'] = romeo;
            options = yankee[options];
            options = verify.bind(offset)(options);
            options = options.withDelay;
            oscar['withDelay'] = options;
            options = _closure1_slot10;
            oscar['FADE_DELAY'] = options;
            oscar['offsetY'] = golf;
            mike['__closure'] = oscar;
            oscar = 8255420825872.0;
            mike['__workletHash'] = oscar;
            report = _closure1_slot16;
            mike['__initData'] = report;
            mike = zulu.bind(tango)(mike);
            entity[1] = mike;
            return entity;
        }
    };
    var _closure1_slot20 = mike;
    entity = global;
    romeo = entity.Object;
    yankee = romeo.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = yankee.bind(romeo)(zulu, entity, golf);
    entity = 0;
    golf = verify[entity];
    entity = undefined;
    golf = offset.bind(entity)(golf);
    var _closure1_slot3 = golf;
    golf = 1;
    offset = verify[golf];
    golf = argCorge;
    golf = golf.bind(entity)(offset);
    var _closure1_slot4 = golf;
    golf = 2;
    golf = verify[golf];
    golf = options.bind(entity)(golf);
    offset = golf.View;
    var _closure1_slot5 = offset;
    golf = golf.StyleSheet;
    var _closure1_slot6 = golf;
    golf = 3;
    offset = verify[golf];
    offset = options.bind(entity)(offset);
    offset = offset.jsx;
    var _closure1_slot7 = offset;
    offset = verify[golf];
    offset = options.bind(entity)(offset);
    offset = offset.jsxs;
    var _closure1_slot8 = offset;
    golf = verify[golf];
    golf = options.bind(entity)(golf);
    golf = golf.Fragment;
    var _closure1_slot9 = golf;
    golf = 300;
    var _closure1_slot10 = golf;
    golf = 4;
    offset = verify[golf];
    foxtrot = options.bind(entity)(offset);
    romeo = foxtrot.getButtonPadding;
    offset = verify[golf];
    offset = options.bind(entity)(offset);
    yankee = offset.SMALL_BUTTON_HEIGHT;
    offset = verify[golf];
    offset = options.bind(entity)(offset);
    offset = offset.SMALL_BUTTON_ICON_SIZE;
    offset = romeo.bind(foxtrot)(yankee, offset);
    var _closure1_slot11 = offset;
    offset = verify[golf];
    foxtrot = options.bind(entity)(offset);
    romeo = foxtrot.getButtonPadding;
    offset = verify[golf];
    offset = options.bind(entity)(offset);
    yankee = offset.MEDIUM_BUTTON_HEIGHT;
    offset = verify[golf];
    offset = options.bind(entity)(offset);
    offset = offset.MEDIUM_BUTTON_ICON_SIZE;
    offset = romeo.bind(foxtrot)(yankee, offset);
    var _closure1_slot12 = offset;
    offset = verify[golf];
    romeo = options.bind(entity)(offset);
    yankee = romeo.getButtonPadding;
    offset = verify[golf];
    offset = options.bind(entity)(offset);
    offset = offset.LARGE_BUTTON_HEIGHT;
    golf = verify[golf];
    golf = options.bind(entity)(golf);
    golf = golf.LARGE_BUTTON_ICON_SIZE;
    golf = yankee.bind(romeo)(offset, golf);
    var _closure1_slot13 = golf;
    golf = 5;
    golf = verify[golf];
    yankee = options.bind(entity)(golf);
    offset = yankee.createStyles;
    golf = function(argFoo, argBar) {
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            mike = argBar;
            zulu = {};
            entity = 'sm';
            if(!(entity !== mike)) { _fun00016_ip = 220; continue _fun00015 }
 16:
            entity = 'md';
            if(!(entity !== mike)) { _fun00016_ip = 129; continue _fun00015 }
 24:
            entity = 'lg';
            if(!(entity === mike)) { _fun00016_ip = 309; continue _fun00015 }
 35:
            entity = {};
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            tango = 4;
            options = golf[tango];
            report = undefined;
            options = oscar.bind(report)(options);
            options = options.LARGE_BUTTON_HEIGHT;
            entity['minHeight'] = options;
            options = golf[tango];
            options = oscar.bind(report)(options);
            options = options.LARGE_BUTTON_HEIGHT;
            entity['minWidth'] = options;
            tango = golf[tango];
            tango = oscar.bind(report)(tango);
            tango = tango.LARGE_BUTTON_HORIZONTAL_PADDING;
            entity['paddingHorizontal'] = tango;
            mike = _closure1_slot13;
            entity['paddingVertical'] = mike;
            zulu = entity;
            _fun00016_ip = 309; continue _fun00015;
 129:
            entity = {};
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            tango = 4;
            options = golf[tango];
            report = undefined;
            options = oscar.bind(report)(options);
            options = options.MEDIUM_BUTTON_HEIGHT;
            entity['minHeight'] = options;
            options = golf[tango];
            options = oscar.bind(report)(options);
            options = options.MEDIUM_BUTTON_HEIGHT;
            entity['minWidth'] = options;
            tango = golf[tango];
            tango = oscar.bind(report)(tango);
            tango = tango.MEDIUM_BUTTON_HORIZONTAL_PADDING;
            entity['paddingHorizontal'] = tango;
            mike = _closure1_slot12;
            entity['paddingVertical'] = mike;
            zulu = entity;
            _fun00016_ip = 309; continue _fun00015;
 220:
            entity = {};
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            tango = 4;
            options = golf[tango];
            report = undefined;
            options = oscar.bind(report)(options);
            options = options.SMALL_BUTTON_HEIGHT;
            entity['minHeight'] = options;
            options = golf[tango];
            options = oscar.bind(report)(options);
            options = options.SMALL_BUTTON_HEIGHT;
            entity['minWidth'] = options;
            tango = golf[tango];
            tango = oscar.bind(report)(tango);
            tango = tango.SMALL_BUTTON_HORIZONTAL_PADDING;
            entity['paddingHorizontal'] = tango;
            mike = _closure1_slot11;
            entity['paddingVertical'] = mike;
            zulu = entity;
 309:
            entity = {};
            mike = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center', 'overflow': 'hidden'};
            options = _closure1_slot0;
            golf = _closure1_slot2;
            report = 4;
            report = golf[report];
            oscar = undefined;
            report = options.bind(oscar)(report);
            report = report.BUTTON_BORDER_WIDTH;
            mike['borderWidth'] = report;
            report = _closure1_slot1;
            tango = 6;
            tango = golf[tango];
            tango = report.bind(oscar)(tango);
            tango = tango.radii;
            tango = tango.round;
            mike['borderRadius'] = tango;
            offset = mike;
            verify = zulu;
            zulu = copyDataProperties(offset, verify);
            entity['pill'] = mike;
            mike = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center', 'flexGrow': 1, 'maxWidth': '100%'};
            entity['childContainer'] = mike;
            mike = {'position': 'absolute', 'height': '100%', 'width': '100%', 'justifyContent': 'center', 'alignItems': 'center'};
            entity['ellipsis'] = mike;
            return entity;
        }
    };
    golf = offset.bind(yankee)(golf);
    var _closure1_slot14 = golf;
    golf = {};
    offset = "function ButtonPillNativeTsx1(){const{withSpring,loading,SUBTLE_SPRING,useReducedMotion,withDelay,FADE_DELAY,offsetY}=this.__closure;const opacityTransition=withSpring(loading?0:1,SUBTLE_SPRING,'animate-always');if(useReducedMotion){return{opacity:loading?opacityTransition:withDelay(FADE_DELAY,opacityTransition),transform:[{translateY:0}]};}return{opacity:opacityTransition,transform:[{translateY:withSpring(loading?-1*offsetY:0,SUBTLE_SPRING)}]};}";
    golf['code'] = offset;
    var _closure1_slot15 = golf;
    golf = {};
    offset = "function ButtonPillNativeTsx2(){const{withSpring,loading,SUBTLE_SPRING,useReducedMotion,withDelay,FADE_DELAY,offsetY}=this.__closure;const opacityTransition=withSpring(loading?1:0,SUBTLE_SPRING,'animate-always');if(useReducedMotion){return{opacity:loading?withDelay(FADE_DELAY,opacityTransition):opacityTransition,transform:[{translateY:0}]};}return{opacity:opacityTransition,transform:[{translateY:withSpring(loading?0:offsetY,SUBTLE_SPRING)}]};}";
    golf['code'] = offset;
    var _closure1_slot16 = golf;
    golf = 16;
    golf = verify[golf];
    verify = options.bind(entity)(golf);
    options = verify.fileFinishedImporting;
    golf = 'design/components/Button/native/ButtonPill.native.tsx';
    golf = options.bind(verify)(golf);
    oscar = function(argFoo) { // Original name: ButtonPill
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            mike = argFoo;
            zulu = mike.loading;
            entity = null;
            if(!(entity != zulu)) { _fun00018_ip = 48; continue _fun00017 }
 15:
            report = _closure1_slot7;
            tango = _closure1_slot19;
            zulu = {};
            golf = zulu;
            oscar = mike;
            entity = copyDataProperties(golf, oscar);
            entity = undefined;
            entity = report.bind(entity)(tango, zulu);
            _fun00018_ip = 79; continue _fun00017;
 48:
            report = _closure1_slot7;
            tango = _closure1_slot18;
            zulu = {};
            golf = zulu;
            oscar = mike;
            mike = copyDataProperties(golf, oscar);
            mike = undefined;
            entity = report.bind(mike)(tango, zulu);
 79:
            return entity;
        }
    };
    zulu['ButtonPill'] = oscar;
    zulu['BasicButtonPill'] = report;
    zulu['LoadingButtonPill'] = tango;
    zulu['useLoadingStyles'] = mike;
    return entity;
})();