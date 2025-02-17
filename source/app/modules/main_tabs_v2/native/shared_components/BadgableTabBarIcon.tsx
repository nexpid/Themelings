// app/modules/main_tabs_v2/native/shared_components/BadgableTabBarIcon.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    kilo = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = kilo;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: BadgeContent
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            foxtrot = entity.value;
            romeo = entity.countA11yLabel;
            mike = entity.unread;
            offset = entity.lowPriority;
            entity = _closure1_slot14;
            report = undefined;
            yankee = entity.bind(report)();
            entity = null;
            if(!(entity == romeo)) { _fun00002_ip = 78; continue _fun00001 }
 45:
            tango = _closure1_slot0;
            oscar = _closure1_slot2;
            zulu = 15;
            zulu = oscar[zulu];
            zulu = tango.bind(report)(zulu);
            zulu = zulu.t;
            romeo = zulu.XNn2u7;
 78:
            zulu = 0;
            if(!(!(foxtrot > zulu))) { _fun00002_ip = 144; continue _fun00001 }
 84:
            entity = null;
            if(!mike) { _fun00002_ip = 139; continue _fun00001 }
 89:
            tango = _closure1_slot11;
            zulu = _closure1_slot1;
            oscar = _closure1_slot2;
            mike = 17;
            mike = oscar[mike];
            zulu = zulu.bind(report)(mike);
            mike = {};
            oscar = _closure1_slot16;
            mike['size'] = oscar;
            oscar = yankee.unread;
            mike['style'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 139:
            _fun00002_ip = 280; continue _fun00001;
 144:
            tango = _closure1_slot11;
            zulu = _closure1_slot4;
            mike = {};
            oscar = {};
            golf = 3;
            oscar['margin'] = golf;
            mike['style'] = oscar;
            options = _closure1_slot11;
            golf = _closure1_slot1;
            backup = _closure1_slot2;
            oscar = 16;
            oscar = backup[oscar];
            golf = golf.bind(report)(oscar);
            oscar = {};
            if(!offset) { _fun00002_ip = 203; continue _fun00001 }
 197:
            offset = yankee.lowPriorityBadge;
 203:
            oscar['style'] = offset;
            oscar['value'] = foxtrot;
            offset = false;
            oscar['accessible'] = offset;
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            verify = 15;
            verify = yankee[verify];
            verify = offset.bind(report)(verify);
            yankee = verify.intl;
            offset = yankee.formatToPlainString;
            verify = {};
            verify['count'] = foxtrot;
            verify = offset.bind(yankee)(romeo, verify);
            oscar['accessibilityLabel'] = verify;
            oscar = options.bind(report)(golf, oscar);
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 280:
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = function(argFoo) { // Original name: useIconContentStyle
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zulu = argFoo;
            golf = zulu.iconSize;
            var _closure2_slot0 = golf;
            oscar = zulu.offset;
            mike = undefined;
            if(!(oscar === mike)) { _fun00004_ip = 29; continue _fun00003 }
 27:
            oscar = 0;
 29:
            var _closure2_slot1 = oscar;
            report = zulu.adjustForYouTab;
            if(!(report === mike)) { _fun00004_ip = 45; continue _fun00003 }
 43:
            report = false;
 45:
            var _closure2_slot2 = report;
            tango = _closure1_slot3;
            zulu = tango.useMemo;
            mike = new Array(3);
            mike[0] = golf;
            mike[1] = oscar;
            mike[2] = report;
            entity = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = {};
                    mike = _closure1_slot15;
                    entity['borderRadius'] = mike;
                    zulu = _closure2_slot2;
                    report = _closure2_slot0;
                    if(zulu) { _fun00006_ip = 36; continue _fun00005 }
 27:
                    zulu = 3;
                    tango = report / zulu;
                    _fun00006_ip = 50; continue _fun00005;
 36:
                    zulu = 0.55;
                    tango = zulu * report;
 50:
                    zulu = _closure2_slot1;
                    zulu = tango + zulu;
                    entity['top'] = zulu;
                    zulu = _closure2_slot2;
                    report = _closure2_slot0;
                    if(zulu) { _fun00006_ip = 89; continue _fun00005 }
 73:
                    zulu = 0.625;
                    zulu = zulu * report;
                    _fun00006_ip = 103; continue _fun00005;
 89:
                    tango = 0.65;
                    zulu = tango * report;
 103:
                    mike = _closure2_slot1;
                    mike = zulu + mike;
                    entity['left'] = mike;
                    return entity;
                }
            };
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = function(argFoo) { // Original name: useIconBadgeCutout
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            mike = argFoo;
            verify = mike.iconSize;
            var _closure2_slot0 = verify;
            options = mike.offset;
            zulu = undefined;
            if(!(options === zulu)) { _fun00008_ip = 29; continue _fun00007 }
 27:
            options = 0;
 29:
            var _closure2_slot1 = options;
            golf = mike.cutoutRadius;
            var _closure2_slot2 = golf;
            oscar = mike.badgeCount;
            var _closure2_slot3 = oscar;
            report = mike.isWindowLarge;
            var _closure2_slot4 = report;
            tango = _closure1_slot3;
            zulu = tango.useMemo;
            mike = new Array(5);
            mike[0] = verify;
            mike[1] = options;
            mike[2] = golf;
            mike[3] = oscar;
            mike[4] = report;
            entity = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    mike = _closure2_slot3;
                    entity = 0;
                    if(!(!(mike > entity))) { _fun00010_ip = 29; continue _fun00009 }
 13:
                    mike = {'x': 2, 'y': 2, 'size': 4294967292};
                    _fun00010_ip = 39; continue _fun00009;
 29:
                    mike = {'x': 0, 'y': 0, 'size': 0};
 39:
                    entity = {};
                    oscar = _closure1_slot0;
                    report = _closure1_slot2;
                    tango = 18;
                    report = report[tango];
                    tango = undefined;
                    tango = oscar.bind(tango)(report);
                    tango = tango.CutoutShape;
                    tango = tango.Circle;
                    entity['shape'] = tango;
                    tango = _closure2_slot4;
                    oscar = _closure2_slot0;
                    if(tango) { _fun00010_ip = 119; continue _fun00009 }
 94:
                    tango = 0.625;
                    report = tango * oscar;
                    tango = mike.x;
                    report = report + tango;
                    _fun00010_ip = 133; continue _fun00009;
 119:
                    tango = 0.67;
                    report = tango * oscar;
 133:
                    tango = _closure2_slot1;
                    tango = report + tango;
                    entity['x'] = tango;
                    tango = _closure2_slot4;
                    oscar = _closure2_slot0;
                    if(tango) { _fun00010_ip = 174; continue _fun00009 }
 156:
                    tango = 3;
                    report = oscar / tango;
                    tango = mike.y;
                    report = report + tango;
                    _fun00010_ip = 188; continue _fun00009;
 174:
                    tango = 0.57;
                    report = tango * oscar;
 188:
                    tango = _closure2_slot1;
                    tango = report + tango;
                    entity['y'] = tango;
                    tango = _closure2_slot4;
                    report = _closure2_slot2;
                    zulu = 2;
                    zulu = zulu * report;
                    if(tango) { _fun00010_ip = 229; continue _fun00009 }
 218:
                    mike = mike.size;
                    mike = zulu + mike;
                    _fun00010_ip = 232; continue _fun00009;
 229:
                    mike = zulu;
 232:
                    entity['size'] = mike;
                    return entity;
                }
            };
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        }
    };
    var _closure1_slot20 = entity;
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
    foxtrot = 1;
    tango = oscar[foxtrot];
    tango = report.bind(entity)(tango);
    golf = tango.View;
    var _closure1_slot4 = golf;
    tango = tango.Image;
    var _closure1_slot5 = tango;
    output = 2;
    tango = oscar[output];
    tango = kilo.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = kilo.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = kilo.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    sizing = tango.BADGE_SIZE;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.StatusSizes;
    var _closure1_slot9 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.StatusTypes;
    var _closure1_slot10 = tango;
    golf = 8;
    tango = oscar[golf];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot11 = tango;
    tango = oscar[golf];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot12 = tango;
    tango = 9;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.AVATAR_SIZE_MAP;
    tango = 10;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.AvatarSizes;
    tango = tango.NORMAL;
    romeo = options[tango];
    var _closure1_slot13 = romeo;
    tango = 11;
    tango = oscar[tango];
    offset = report.bind(entity)(tango);
    verify = offset.createStyles;
    options = {};
    tango = {};
    yankee = 'relative';
    tango['position'] = yankee;
    options['container'] = tango;
    yankee = {};
    tango = 12;
    backup = oscar[tango];
    backup = report.bind(entity)(backup);
    backup = backup.TABLET_ICON_YOU_WIDTH;
    backup = backup - romeo;
    backup = -backup;
    echo = backup / output;
    backup = 13;
    result = oscar[backup];
    result = kilo.bind(entity)(result);
    result = result.spacing;
    result = result.PX_24;
    result = echo + result;
    yankee['left'] = result;
    options['containerTablet'] = yankee;
    yankee = {};
    result = 'absolute';
    yankee['position'] = result;
    options['content'] = yankee;
    yankee = {};
    result = oscar[backup];
    result = kilo.bind(entity)(result);
    result = result.unsafe_rawColors;
    result = result.PRIMARY_400;
    yankee['backgroundColor'] = result;
    options['lowPriorityBadge'] = yankee;
    yankee = {'height': 22, 'width': 22};
    sizing = sizing / output;
    yankee['borderRadius'] = sizing;
    options['unread'] = yankee;
    yankee = {};
    yankee['width'] = romeo;
    yankee['height'] = romeo;
    options['avatarTablet'] = yankee;
    yankee = {};
    sizing = oscar[backup];
    sizing = kilo.bind(entity)(sizing);
    sizing = sizing.spacing;
    sizing = sizing.PX_4;
    yankee['padding'] = sizing;
    options['avatarCutout'] = yankee;
    yankee = {'width': null, 'left': null, 'height': null, 'justifyContent': 'center', 'position': 'absolute', 'bottom': 0, 'top': 0};
    sizing = oscar[tango];
    sizing = report.bind(entity)(sizing);
    sizing = sizing.TABLET_ICON_YOU_WIDTH;
    output = sizing - romeo;
    sizing = oscar[backup];
    sizing = kilo.bind(entity)(sizing);
    sizing = sizing.spacing;
    sizing = sizing.PX_24;
    sizing = output - sizing;
    yankee['width'] = sizing;
    backup = oscar[backup];
    backup = kilo.bind(entity)(backup);
    backup = backup.spacing;
    backup = backup.PX_16;
    backup = romeo + backup;
    yankee['left'] = backup;
    yankee['height'] = romeo;
    options['usernameTablet'] = yankee;
    yankee = {};
    romeo = 14;
    backup = oscar[romeo];
    backup = report.bind(entity)(backup);
    backup = backup.ICON_SIZE;
    backup = backup.md;
    yankee['width'] = backup;
    backup = oscar[romeo];
    backup = report.bind(entity)(backup);
    backup = backup.ICON_SIZE;
    backup = backup.md;
    yankee['height'] = backup;
    yankee['opacity'] = foxtrot;
    options['tabBarIconSelected'] = yankee;
    yankee = {};
    foxtrot = oscar[romeo];
    foxtrot = report.bind(entity)(foxtrot);
    foxtrot = foxtrot.ICON_SIZE;
    foxtrot = foxtrot.md;
    yankee['width'] = foxtrot;
    romeo = oscar[romeo];
    romeo = report.bind(entity)(romeo);
    romeo = romeo.ICON_SIZE;
    romeo = romeo.md;
    yankee['height'] = romeo;
    romeo = 0.5;
    yankee['opacity'] = romeo;
    options['tabBarIconUnselected'] = yankee;
    options = verify.bind(offset)(options);
    var _closure1_slot14 = options;
    var _closure1_slot15 = golf;
    var _closure1_slot16 = tango;
    tango = {};
    golf = 'function BadgableTabBarIconTsx1(){const{scaleDownAnimation,rotationAnimation,wobbleAnimationX,wobbleAnimationY}=this.__closure;return{transform:[{scale:scaleDownAnimation.get()},{rotate:rotationAnimation.get()+"deg"},{scaleX:wobbleAnimationX.get()},{scaleY:wobbleAnimationY.get()}]};}';
    tango['code'] = golf;
    var _closure1_slot17 = tango;
    tango = 33;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/shared_components/BadgableTabBarIcon.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: BadgableTabBarIcon
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            control = entity.badgeA11yLabel;
            foxtrot = entity.color;
            update = entity.icon;
            zulu = entity.iconAnimated;
            backup = entity.focused;
            options = entity.navigation;
            var _closure2_slot0 = options;
            entity = entity.useBadgeCount;
            tango = undefined;
            var _closure2_slot1 = tango;
            var _closure2_slot2 = tango;
            report = _closure1_slot14;
            oscar = report.bind(tango)();
            golf = _closure1_slot1;
            yankee = _closure1_slot2;
            report = 19;
            report = yankee[report];
            report = golf.bind(tango)(report);
            report = report.bind(tango)();
            verify = _closure1_slot0;
            golf = 14;
            golf = yankee[golf];
            golf = verify.bind(tango)(golf);
            golf = golf.ICON_SIZE;
            yankee = golf.md;
            if(backup) { _fun00012_ip = 142; continue _fun00011 }
 131:
            if(report) { _fun00012_ip = 142; continue _fun00011 }
 134:
            source = oscar.tabBarIconUnselected;
            _fun00012_ip = 148; continue _fun00011;
 142:
            source = oscar.tabBarIconSelected;
 148:
            verify = _closure1_slot19;
            golf = {};
            golf['iconSize'] = yankee;
            verify = verify.bind(tango)(golf);
            entity = entity.bind(tango)();
            vacuum = entity.value;
            echo = entity.showDot;
            result = entity.lowPriority;
            golf = _closure1_slot20;
            entity = {};
            entity['iconSize'] = yankee;
            yankee = 11;
            entity['cutoutRadius'] = yankee;
            entity['badgeCount'] = vacuum;
            entity['isWindowLarge'] = report;
            output = golf.bind(tango)(entity);
            yankee = _closure1_slot3;
            golf = yankee.useRef;
            entity = null;
            kilo = golf.bind(yankee)(entity);
            _closure2_slot1 = kilo;
            romeo = undefined;
            if(report) { _fun00012_ip = 247; continue _fun00011 }
 244:
            romeo = zulu;
 247:
            _closure2_slot2 = romeo;
            zulu = 0;
            yankee = vacuum > zulu;
            if(yankee) { _fun00012_ip = 263; continue _fun00011 }
 260:
            yankee = echo;
 263:
            golf = _closure1_slot3;
            report = golf.useEffect;
            zulu = new Array(2);
            zulu[0] = options;
            zulu[1] = romeo;
            mike = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zulu = _closure2_slot2;
                    mike = null;
                    if(!(mike == zulu)) { _fun00014_ip = 17; continue _fun00013 }
 13:
                    mike = undefined;
                    return mike;
 17:
                    tango = _closure2_slot0;
                    zulu = tango.addListener;
                    mike = 'tabPress';
                    entity = function() {
                        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                            entity = _closure2_slot1;
                            report = null;
                            mike = report == entity;
                            entity = undefined;
                            zulu = undefined;
                            if(mike) { _fun00016_ip = 36; continue _fun00015 }
 20:
                            tango = _closure2_slot1;
                            tango = tango.current;
                            mike = report == tango;
                            zulu = tango;
 36:
                            if(mike) { _fun00016_ip = 49; continue _fun00015 }
 39:
                            mike = zulu.play;
                            mike = mike.bind(zulu)();
 49:
                            return entity;
                        }
                    };
                    entity = zulu.bind(tango)(mike, entity);
                    return entity;
                }
            };
            mike = report.bind(golf)(mike, zulu);
            golf = null;
            if(!yankee) { _fun00012_ip = 378; continue _fun00011 }
 302:
            report = _closure1_slot11;
            zulu = _closure1_slot4;
            mike = {};
            sizing = oscar.content;
            options = new Array(2);
            options[0] = sizing;
            options[1] = verify;
            mike['style'] = options;
            sizing = _closure1_slot11;
            verify = _closure1_slot18;
            options = {};
            options['value'] = vacuum;
            options['countA11yLabel'] = control;
            options['unread'] = echo;
            options['lowPriority'] = result;
            options = sizing.bind(tango)(verify, options);
            mike['children'] = options;
            golf = report.bind(tango)(zulu, mike);
 378:
            zulu = _closure1_slot12;
            mike = _closure1_slot4;
            if(!(entity == romeo)) { _fun00012_ip = 529; continue _fun00011 }
 393:
            entity = {};
            report = oscar.container;
            entity['style'] = report;
            verify = _closure1_slot11;
            options = _closure1_slot1;
            sizing = _closure1_slot2;
            report = 18;
            report = sizing[report];
            options = options.bind(tango)(report);
            report = {};
            if(yankee) { _fun00012_ip = 439; continue _fun00011 }
 433:
            sizing = new Array(0);
            _fun00012_ip = 450; continue _fun00011;
 439:
            result = new Array(1);
            result[0] = output;
            sizing = result;
 450:
            report['cutouts'] = sizing;
            echo = _closure1_slot11;
            result = _closure1_slot5;
            sizing = {};
            sizing['source'] = update;
            control = {};
            control['tintColor'] = foxtrot;
            update = new Array(2);
            update[0] = control;
            update[1] = source;
            sizing['style'] = update;
            sizing = echo.bind(tango)(result, sizing);
            report['children'] = sizing;
            options = verify.bind(tango)(options, report);
            report = new Array(2);
            report[0] = options;
            report[1] = golf;
            entity['children'] = report;
            _fun00012_ip = 668; continue _fun00011;
 529:
            report = {};
            oscar = oscar.container;
            report['style'] = oscar;
            verify = _closure1_slot11;
            options = _closure1_slot1;
            sizing = _closure1_slot2;
            oscar = 18;
            oscar = sizing[oscar];
            options = options.bind(tango)(oscar);
            oscar = {};
            if(yankee) { _fun00012_ip = 575; continue _fun00011 }
 569:
            yankee = new Array(0);
            _fun00012_ip = 586; continue _fun00011;
 575:
            sizing = new Array(1);
            sizing[0] = output;
            yankee = sizing;
 586:
            oscar['cutouts'] = yankee;
            yankee = _closure1_slot11;
            offset = {};
            offset['ref'] = kilo;
            kilo = 'md';
            offset['size'] = kilo;
            offset['color'] = foxtrot;
            foxtrot = 0.5;
            if(!backup) { _fun00012_ip = 629; continue _fun00011 }
 626:
            foxtrot = 1;
 629:
            offset['opacity'] = foxtrot;
            offset = yankee.bind(tango)(romeo, offset);
            oscar['children'] = offset;
            options = verify.bind(tango)(options, oscar);
            oscar = new Array(2);
            oscar[0] = options;
            oscar[1] = golf;
            report['children'] = oscar;
            entity = report;
 668:
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['BadgableTabBarIcon'] = tango;
    mike = function(argFoo) { // Original name: YouIcon
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            mike = argFoo;
            entity = mike.focused;
            context = mike.tintColor;
            output = mike.navigation;
            var _closure2_slot0 = output;
            tango = undefined;
            var _closure2_slot1 = tango;
            var _closure2_slot2 = tango;
            var _closure2_slot3 = tango;
            var _closure2_slot4 = tango;
            var _closure2_slot5 = tango;
            var _closure2_slot6 = tango;
            var _closure2_slot7 = tango;
            var _closure2_slot8 = tango;
            var _closure2_slot9 = tango;
            var _closure2_slot10 = tango;
            mike = _closure1_slot14;
            yankee = mike.bind(tango)();
            zulu = _closure1_slot1;
            oscar = _closure1_slot2;
            mike = 19;
            mike = oscar[mike];
            mike = zulu.bind(tango)(mike);
            golf = mike.bind(tango)();
            sierra = golf;
            if(sierra) { _fun00018_ip = 113; continue _fun00017 }
 110:
            sierra = entity;
 113:
            mike = _closure1_slot0;
            entity = _closure1_slot2;
            options = 20;
            zulu = entity[options];
            romeo = mike.bind(tango)(zulu);
            verify = romeo.useStateFromStores;
            zulu = _closure1_slot8;
            oscar = new Array(1);
            oscar[0] = zulu;
            zulu = function() {
                mike = _closure1_slot8;
                entity = mike.getCurrentUser;
                entity = entity.bind(mike)();
                return entity;
            };
            lima = verify.bind(romeo)(oscar, zulu);
            oscar = _closure1_slot1;
            zulu = 21;
            zulu = entity[zulu];
            oscar = oscar.bind(tango)(zulu);
            zulu = oscar.useName;
            foxtrot = zulu.bind(oscar)(lima);
            entity = entity[options];
            oscar = mike.bind(tango)(entity);
            zulu = oscar.useStateFromStores;
            entity = _closure1_slot7;
            mike = new Array(1);
            mike[0] = entity;
            entity = function() {
                mike = _closure1_slot7;
                entity = mike.getStatus;
                entity = entity.bind(mike)();
                return entity;
            };
            source = zulu.bind(oscar)(mike, entity);
            vacuum = null;
            entity = vacuum != source;
            if(!entity) { _fun00018_ip = 252; continue _fun00017 }
 238:
            mike = _closure1_slot10;
            mike = mike.UNKNOWN;
            entity = source !== mike;
 252:
            zulu = _closure1_slot0;
            oscar = _closure1_slot2;
            mike = 22;
            mike = oscar[mike];
            zulu = zulu.bind(tango)(mike);
            mike = zulu.useIsEligibleForPomelo;
            oscar = mike.bind(zulu)();
            zulu = vacuum == lima;
            mike = undefined;
            if(zulu) { _fun00018_ip = 297; continue _fun00017 }
 291:
            mike = lima.avatar;
 297:
            whiskey = vacuum == mike;
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[options];
            verify = zulu.bind(tango)(mike);
            options = verify.useStateFromStores;
            mike = _closure1_slot6;
            zulu = new Array(1);
            zulu[0] = mike;
            mike = function() {
                entity = _closure1_slot6;
                entity = entity.useReducedMotion;
                return entity;
            };
            equality = options.bind(verify)(zulu, mike);
            _closure2_slot1 = equality;
            update = 0.5;
            if(!sierra) { _fun00018_ip = 368; continue _fun00017 }
 365:
            update = 1;
 368:
            if(golf) { _fun00018_ip = 405; continue _fun00017 }
 371:
            zulu = _closure1_slot0;
            options = _closure1_slot2;
            mike = 14;
            mike = options[mike];
            mike = zulu.bind(tango)(mike);
            mike = mike.ICON_SIZE;
            options = mike.md;
            _fun00018_ip = 409; continue _fun00017;
 405:
            options = _closure1_slot13;
 409:
            zulu = _closure1_slot3;
            mike = zulu.useRef;
            papa = mike.bind(zulu)(vacuum);
            _closure2_slot2 = papa;
            zulu = _closure1_slot19;
            mike = {};
            mike['iconSize'] = options;
            verify = yankee.avatarCutout;
            verify = verify.padding;
            mike['offset'] = verify;
            mike['adjustForYouTab'] = golf;
            echo = zulu.bind(tango)(mike);
            zulu = _closure1_slot20;
            mike = {};
            mike['iconSize'] = options;
            options = yankee.avatarCutout;
            options = options.padding;
            mike['offset'] = options;
            options = 11;
            mike['cutoutRadius'] = options;
            kilo = 0;
            mike['badgeCount'] = kilo;
            mike['isWindowLarge'] = golf;
            mike = zulu.bind(tango)(mike);
            verify = _closure1_slot0;
            zulu = _closure1_slot2;
            result = 23;
            options = zulu[result];
            romeo = verify.bind(tango)(options);
            options = romeo.useSharedValue;
            backup = 1;
            target = options.bind(romeo)(backup);
            _closure2_slot3 = target;
            options = zulu[result];
            romeo = verify.bind(tango)(options);
            options = romeo.useSharedValue;
            record = options.bind(romeo)(kilo);
            _closure2_slot4 = record;
            options = zulu[result];
            romeo = verify.bind(tango)(options);
            options = romeo.useSharedValue;
            config = options.bind(romeo)(backup);
            _closure2_slot5 = config;
            options = zulu[result];
            romeo = verify.bind(tango)(options);
            options = romeo.useSharedValue;
            sequence = options.bind(romeo)(backup);
            _closure2_slot6 = sequence;
            sizing = _closure1_slot3;
            backup = sizing.useCallback;
            romeo = new Array(1);
            romeo[0] = target;
            options = function() {
                offset = {};
                entity = 0.13;
                offset['mass'] = entity;
                tango = _closure2_slot3;
                zulu = tango.set;
                options = _closure1_slot0;
                verify = _closure1_slot2;
                entity = 23;
                mike = verify[entity];
                entity = undefined;
                golf = options.bind(entity)(mike);
                oscar = golf.withSequence;
                mike = 24;
                report = verify[mike];
                romeo = options.bind(entity)(report);
                yankee = romeo.withSpring;
                report = 0.7;
                report = yankee.bind(romeo)(report, offset);
                mike = verify[mike];
                verify = options.bind(entity)(mike);
                options = verify.withSpring;
                mike = 1;
                mike = options.bind(verify)(mike, offset);
                mike = oscar.bind(golf)(report, mike);
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            status = backup.bind(sizing)(options, romeo);
            _closure2_slot7 = status;
            sizing = _closure1_slot3;
            backup = sizing.useCallback;
            romeo = new Array(1);
            romeo[0] = record;
            options = function() {
                tango = _closure2_slot4;
                zulu = tango.set;
                romeo = _closure1_slot0;
                kilo = _closure1_slot2;
                mike = 23;
                report = kilo[mike];
                entity = undefined;
                golf = romeo.bind(entity)(report);
                oscar = golf.withDelay;
                mike = kilo[mike];
                yankee = romeo.bind(entity)(mike);
                offset = yankee.withSequence;
                foxtrot = 24;
                mike = kilo[foxtrot];
                backup = romeo.bind(entity)(mike);
                verify = backup.withSpring;
                mike = 25;
                report = kilo[mike];
                report = romeo.bind(entity)(report);
                options = report.springStandard;
                report = -4;
                verify = verify.bind(backup)(report, options);
                report = kilo[foxtrot];
                sizing = romeo.bind(entity)(report);
                backup = sizing.withSpring;
                report = kilo[mike];
                report = romeo.bind(entity)(report);
                options = report.springStandard;
                report = 3;
                options = backup.bind(sizing)(report, options);
                report = kilo[foxtrot];
                output = romeo.bind(entity)(report);
                sizing = output.withSpring;
                report = kilo[mike];
                report = romeo.bind(entity)(report);
                backup = report.springStandard;
                report = -2;
                echo = sizing.bind(output)(report, backup);
                foxtrot = kilo[foxtrot];
                backup = romeo.bind(entity)(foxtrot);
                foxtrot = backup.withSpring;
                mike = kilo[mike];
                mike = romeo.bind(entity)(mike);
                romeo = mike.springStandard;
                mike = 0;
                result = foxtrot.bind(backup)(mike, romeo);
                control = yankee;
                source = verify;
                update = options;
                report = control[offset](source, update, echo, result, output);
                mike = 30;
                mike = oscar.bind(golf)(mike, report);
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            control = backup.bind(sizing)(options, romeo);
            _closure2_slot8 = control;
            sizing = _closure1_slot3;
            backup = sizing.useCallback;
            romeo = new Array(2);
            romeo[0] = config;
            romeo[1] = sequence;
            options = function() {
                oscar = _closure2_slot5;
                report = oscar.set;
                echo = _closure1_slot0;
                update = _closure1_slot2;
                options = 23;
                mike = update[options];
                entity = undefined;
                offset = echo.bind(entity)(mike);
                verify = offset.withDelay;
                mike = update[options];
                control = echo.bind(entity)(mike);
                source = control.withSequence;
                sizing = 24;
                mike = update[sizing];
                romeo = echo.bind(entity)(mike);
                yankee = romeo.withSpring;
                mike = 25;
                tango = update[mike];
                tango = echo.bind(entity)(tango);
                golf = tango.springStandard;
                tango = 1.09;
                kilo = yankee.bind(romeo)(tango, golf);
                tango = update[sizing];
                romeo = echo.bind(entity)(tango);
                yankee = romeo.withSpring;
                tango = update[mike];
                tango = echo.bind(entity)(tango);
                golf = tango.springStandard;
                tango = 0.9;
                backup = yankee.bind(romeo)(tango, golf);
                tango = update[sizing];
                yankee = echo.bind(entity)(tango);
                golf = yankee.withSpring;
                tango = update[mike];
                tango = echo.bind(entity)(tango);
                tango = tango.springStandard;
                output = 1.04;
                target = golf.bind(yankee)(output, tango);
                tango = update[sizing];
                romeo = echo.bind(entity)(tango);
                yankee = romeo.withSpring;
                tango = update[mike];
                tango = echo.bind(entity)(tango);
                golf = tango.springStandard;
                tango = 0.96;
                papa = yankee.bind(romeo)(tango, golf);
                tango = update[sizing];
                result = echo.bind(entity)(tango);
                yankee = result.withSpring;
                tango = update[mike];
                tango = echo.bind(entity)(tango);
                golf = tango.springStandard;
                tango = 1.02;
                context = yankee.bind(result)(tango, golf);
                tango = update[sizing];
                vacuum = echo.bind(entity)(tango);
                result = vacuum.withSpring;
                tango = update[mike];
                tango = echo.bind(entity)(tango);
                golf = tango.springStandard;
                tango = 0.99;
                record = result.bind(vacuum)(tango, golf);
                tango = update[sizing];
                sequence = echo.bind(entity)(tango);
                vacuum = sequence.withSpring;
                tango = update[mike];
                tango = echo.bind(entity)(tango);
                tango = tango.springStandard;
                result = 1;
                config = vacuum.bind(sequence)(result, tango);
                lima = control;
                sierra = kilo;
                status = backup;
                tango = lima[source](sierra, status, target, papa, context, record, config, sequence);
                golf = 8;
                tango = verify.bind(offset)(golf, tango);
                tango = report.bind(oscar)(tango);
                tango = _closure2_slot6;
                zulu = tango.set;
                report = update[options];
                oscar = echo.bind(entity)(report);
                report = oscar.withDelay;
                options = update[options];
                kilo = echo.bind(entity)(options);
                backup = kilo.withSequence;
                options = update[sizing];
                yankee = echo.bind(entity)(options);
                offset = yankee.withSpring;
                options = update[mike];
                options = echo.bind(entity)(options);
                verify = options.springStandard;
                options = 0.87;
                foxtrot = offset.bind(yankee)(options, verify);
                options = update[sizing];
                yankee = echo.bind(entity)(options);
                offset = yankee.withSpring;
                options = update[mike];
                options = echo.bind(entity)(options);
                verify = options.springStandard;
                options = 1.06;
                romeo = offset.bind(yankee)(options, verify);
                options = update[sizing];
                yankee = echo.bind(entity)(options);
                offset = yankee.withSpring;
                options = update[mike];
                options = echo.bind(entity)(options);
                verify = options.springStandard;
                options = 0.95;
                target = offset.bind(yankee)(options, verify);
                options = update[sizing];
                offset = echo.bind(entity)(options);
                verify = offset.withSpring;
                options = update[mike];
                options = echo.bind(entity)(options);
                options = options.springStandard;
                papa = verify.bind(offset)(output, options);
                options = update[sizing];
                source = echo.bind(entity)(options);
                output = source.withSpring;
                options = update[mike];
                options = echo.bind(entity)(options);
                verify = options.springStandard;
                options = 0.97;
                context = output.bind(source)(options, verify);
                options = update[sizing];
                control = echo.bind(entity)(options);
                source = control.withSpring;
                options = update[mike];
                options = echo.bind(entity)(options);
                output = options.springStandard;
                options = 1.01;
                record = source.bind(control)(options, output);
                sizing = update[sizing];
                output = echo.bind(entity)(sizing);
                sizing = output.withSpring;
                mike = update[mike];
                mike = echo.bind(entity)(mike);
                mike = mike.springStandard;
                config = sizing.bind(output)(result, mike);
                lima = kilo;
                sierra = foxtrot;
                status = romeo;
                mike = lima[backup](sierra, status, target, papa, context, record, config, sequence);
                mike = report.bind(oscar)(golf, mike);
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            options = backup.bind(sizing)(options, romeo);
            _closure2_slot9 = options;
            sizing = _closure1_slot3;
            backup = sizing.useCallback;
            romeo = new Array(4);
            romeo[0] = equality;
            romeo[1] = status;
            romeo[2] = control;
            romeo[3] = options;
            options = function() {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    mike = _closure2_slot1;
                    if(mike) { _fun00020_ip = 36; continue _fun00019 }
 10:
                    zulu = _closure2_slot7;
                    mike = undefined;
                    zulu = zulu.bind(mike)();
                    zulu = _closure2_slot8;
                    zulu = zulu.bind(mike)();
                    entity = _closure2_slot9;
                    entity = entity.bind(mike)();
 36:
                    entity = undefined;
                    return entity;
                }
            };
            sizing = backup.bind(sizing)(options, romeo);
            _closure2_slot10 = sizing;
            options = zulu[result];
            backup = verify.bind(tango)(options);
            romeo = backup.useAnimatedStyle;
            options = function() { // Original name: C
                entity = {};
                zulu = {};
                report = _closure2_slot3;
                mike = report.get;
                mike = mike.bind(report)();
                zulu['scale'] = mike;
                mike = new Array(4);
                mike[0] = zulu;
                zulu = {};
                oscar = _closure2_slot4;
                report = oscar.get;
                options = report.bind(oscar)();
                report = global;
                report = report.HermesInternal;
                golf = report.concat;
                oscar = '';
                report = 'deg';
                report = golf.bind(oscar)(options, report);
                zulu['rotate'] = report;
                mike[1] = zulu;
                zulu = {};
                oscar = _closure2_slot5;
                report = oscar.get;
                report = report.bind(oscar)();
                zulu['scaleX'] = report;
                mike[2] = zulu;
                zulu = {};
                report = _closure2_slot6;
                tango = report.get;
                tango = tango.bind(report)();
                zulu['scaleY'] = tango;
                mike[3] = zulu;
                entity['transform'] = mike;
                return entity;
            };
            control = {};
            control['scaleDownAnimation'] = target;
            control['rotationAnimation'] = record;
            control['wobbleAnimationX'] = config;
            control['wobbleAnimationY'] = sequence;
            options['__closure'] = control;
            control = 3024112617373.0;
            options['__workletHash'] = control;
            control = _closure1_slot17;
            options['__initData'] = control;
            equality = romeo.bind(backup)(options);
            backup = _closure1_slot3;
            romeo = backup.useEffect;
            options = new Array(2);
            options[0] = output;
            options[1] = sizing;
            report = function() {
                tango = _closure2_slot0;
                zulu = tango.addListener;
                mike = 'tabPress';
                entity = function() {
                    _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                        entity = _closure2_slot2;
                        oscar = null;
                        zulu = oscar == entity;
                        entity = undefined;
                        tango = undefined;
                        if(zulu) { _fun00022_ip = 36; continue _fun00021 }
 20:
                        report = _closure2_slot2;
                        report = report.current;
                        zulu = oscar == report;
                        tango = report;
 36:
                        if(zulu) { _fun00022_ip = 49; continue _fun00021 }
 39:
                        zulu = tango.play;
                        zulu = zulu.bind(tango)();
 49:
                        mike = _closure2_slot10;
                        mike = mike.bind(entity)();
                        return entity;
                    }
                };
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            report = romeo.bind(backup)(report, options);
            backup = new Array(0);
            quebec = 10;
            report = zulu[quebec];
            options = verify.bind(tango)(report);
            report = options.getStatusSize;
            zulu = zulu[quebec];
            zulu = verify.bind(tango)(zulu);
            zulu = zulu.AvatarSizes;
            zulu = zulu.TABS_22;
            control = report.bind(options)(zulu);
            if(!entity) { _fun00018_ip = 951; continue _fun00017 }
 948:
            entity = !oscar;
 951:
            if(!entity) { _fun00018_ip = 964; continue _fun00017 }
 954:
            entity = backup.push;
            entity = entity.bind(backup)(mike);
 964:
            zulu = _closure1_slot12;
            mike = _closure1_slot4;
            entity = {};
            report = undefined;
            if(!golf) { _fun00018_ip = 985; continue _fun00017 }
 979:
            report = yankee.containerTablet;
 985:
            entity['style'] = report;
            verify = _closure1_slot12;
            options = _closure1_slot4;
            report = {};
            romeo = yankee.container;
            report['style'] = romeo;
            output = _closure1_slot11;
            sizing = _closure1_slot1;
            sequence = _closure1_slot2;
            romeo = 18;
            romeo = sequence[romeo];
            sizing = sizing.bind(tango)(romeo);
            romeo = {};
            romeo['cutouts'] = backup;
            sequence = yankee.avatarCutout;
            romeo['style'] = sequence;
            record = _closure1_slot11;
            if(whiskey) { _fun00018_ip = 1298; continue _fun00017 }
 1059:
            target = _closure1_slot1;
            config = _closure1_slot2;
            result = config[result];
            result = target.bind(tango)(result);
            sequence = result.View;
            result = {};
            status = new Array(1);
            status[0] = equality;
            result['style'] = status;
            status = _closure1_slot11;
            config = config[quebec];
            target = target.bind(tango)(config);
            config = {};
            config['user'] = lima;
            config['guildId'] = tango;
            if(sierra) { _fun00018_ip = 1129; continue _fun00017 }
 1121:
            sierra = yankee.tabBarIconUnselected;
            _fun00018_ip = 1149; continue _fun00017;
 1129:
            if(golf) { _fun00018_ip = 1140; continue _fun00017 }
 1132:
            equality = yankee.tabBarIconSelected;
            _fun00018_ip = 1146; continue _fun00017;
 1140:
            equality = yankee.avatarTablet;
 1146:
            sierra = equality;
 1149:
            config['style'] = sierra;
            sierra = undefined;
            if(!whiskey) { _fun00018_ip = 1168; continue _fun00017 }
 1158:
            equality = {};
            equality['tintColor'] = context;
            sierra = equality;
 1168:
            config['avatarStyle'] = sierra;
            equality = _closure1_slot0;
            sierra = _closure1_slot2;
            sierra = sierra[quebec];
            sierra = equality.bind(tango)(sierra);
            equality = sierra.AvatarSizes;
            if(golf) { _fun00018_ip = 1207; continue _fun00017 }
 1199:
            sierra = equality.TABS_22;
            _fun00018_ip = 1213; continue _fun00017;
 1207:
            sierra = equality.NORMAL;
 1213:
            config['size'] = sierra;
            sierra = false;
            config['animate'] = sierra;
            sierra = null;
            if(!whiskey) { _fun00018_ip = 1249; continue _fun00017 }
 1229:
            equality = _closure1_slot1;
            quebec = _closure1_slot2;
            whiskey = 27;
            whiskey = quebec[whiskey];
            sierra = equality.bind(tango)(whiskey);
 1249:
            config['source'] = sierra;
            sierra = true;
            config['needsOffscreenAlphaCompositing'] = sierra;
            whiskey = vacuum == lima;
            sierra = undefined;
            if(whiskey) { _fun00018_ip = 1275; continue _fun00017 }
 1269:
            sierra = lima.avatarDecoration;
 1275:
            config['avatarDecoration'] = sierra;
            config = status.bind(tango)(target, config);
            result['children'] = config;
            result = record.bind(tango)(sequence, result);
            _fun00018_ip = 1359; continue _fun00017;
 1298:
            config = _closure1_slot0;
            target = _closure1_slot2;
            sequence = 26;
            sequence = target[sequence];
            sequence = config.bind(tango)(sequence);
            config = sequence.YouTabLottie;
            sequence = {};
            sequence['ref'] = papa;
            papa = 'lg';
            if(golf) { _fun00018_ip = 1341; continue _fun00017 }
 1337:
            papa = 'md';
 1341:
            sequence['size'] = papa;
            sequence['color'] = context;
            sequence['opacity'] = update;
            result = record.bind(tango)(config, sequence);
 1359:
            romeo['children'] = result;
            sizing = output.bind(tango)(sizing, romeo);
            romeo = new Array(2);
            romeo[0] = sizing;
            backup = backup.length;
            backup = backup > kilo;
            if(!backup) { _fun00018_ip = 1508; continue _fun00017 }
 1389:
            output = _closure1_slot11;
            sizing = _closure1_slot4;
            kilo = {};
            sequence = yankee.content;
            result = new Array(3);
            result[0] = sequence;
            result[1] = echo;
            echo = {};
            echo['opacity'] = update;
            result[2] = echo;
            kilo['style'] = result;
            update = _closure1_slot11;
            echo = _closure1_slot1;
            sequence = _closure1_slot2;
            result = 28;
            result = sequence[result];
            echo = echo.bind(tango)(result);
            result = {};
            if(!(vacuum == control)) { _fun00018_ip = 1470; continue _fun00017 }
 1460:
            vacuum = _closure1_slot9;
            control = vacuum.MEDIUM;
 1470:
            result['size'] = control;
            result['status'] = source;
            source = {};
            control = 2;
            source['margin'] = control;
            result['style'] = source;
            result = update.bind(tango)(echo, result);
            kilo['children'] = result;
            backup = output.bind(tango)(sizing, kilo);
 1508:
            romeo[1] = backup;
            report['children'] = romeo;
            options = verify.bind(tango)(options, report);
            report = new Array(4);
            report[0] = options;
            if(!oscar) { _fun00018_ip = 1609; continue _fun00017 }
 1533:
            romeo = _closure1_slot11;
            kilo = _closure1_slot1;
            sizing = _closure1_slot2;
            options = 29;
            options = sizing[options];
            verify = kilo.bind(tango)(options);
            options = {};
            backup = 13;
            backup = sizing[backup];
            backup = kilo.bind(tango)(backup);
            backup = backup.colors;
            backup = backup.STATUS_WARNING;
            options['themedColor'] = backup;
            backup = 30;
            backup = sizing[backup];
            backup = kilo.bind(tango)(backup);
            options['source'] = backup;
            oscar = romeo.bind(tango)(verify, options);
 1609:
            report[1] = oscar;
            verify = _closure1_slot11;
            options = _closure1_slot0;
            romeo = _closure1_slot2;
            oscar = 31;
            oscar = romeo[oscar];
            oscar = options.bind(tango)(oscar);
            options = oscar.MobileTrialUserSettingsAvatarBadge;
            oscar = {};
            oscar = verify.bind(tango)(options, oscar);
            report[2] = oscar;
            oscar = undefined;
            if(!golf) { _fun00018_ip = 1743; continue _fun00017 }
 1660:
            verify = _closure1_slot11;
            options = _closure1_slot4;
            golf = {};
            yankee = yankee.usernameTablet;
            golf['style'] = yankee;
            romeo = _closure1_slot11;
            yankee = _closure1_slot0;
            backup = _closure1_slot2;
            offset = 32;
            offset = backup[offset];
            offset = yankee.bind(tango)(offset);
            yankee = offset.Text;
            offset = {'variant': 'text-md/semibold', 'lineClamp': 1, 'color': 'interactive-active', 'maxFontSizeMultiplier': 2};
            offset['children'] = foxtrot;
            offset = romeo.bind(tango)(yankee, offset);
            golf['children'] = offset;
            oscar = verify.bind(tango)(options, golf);
 1743:
            report[3] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['YouIcon'] = mike;
    return entity;
})();