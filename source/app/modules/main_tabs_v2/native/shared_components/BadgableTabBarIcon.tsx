// app/modules/main_tabs_v2/native/shared_components/BadgableTabBarIcon.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    kiloes = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = kiloes;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: BadgeContent
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            foxtra = entity.value;
            romeon = entity.countA11yLabel;
            michal = entity.unread;
            offset = entity.lowPriority;
            entity = _closure1_slot14;
            report = undefined;
            yankee = entity.bind(report)();
            entity = null;
            if(!(entity == romeon)) { _fun00002_ip = 78; continue _fun00001 }
 45:
            tangon = _closure1_slot0;
            oscard = _closure1_slot2;
            zuuluu = 15;
            zuuluu = oscard[zuuluu];
            zuuluu = tangon.bind(report)(zuuluu);
            zuuluu = zuuluu.t;
            romeon = zuuluu.XNn2u7;
 78:
            zuuluu = 0;
            if(!(!(foxtra > zuuluu))) { _fun00002_ip = 144; continue _fun00001 }
 84:
            entity = null;
            if(!michal) { _fun00002_ip = 139; continue _fun00001 }
 89:
            tangon = _closure1_slot11;
            zuuluu = _closure1_slot1;
            oscard = _closure1_slot2;
            michal = 17;
            michal = oscard[michal];
            zuuluu = zuuluu.bind(report)(michal);
            michal = {};
            oscard = _closure1_slot16;
            michal['size'] = oscard;
            oscard = yankee.unread;
            michal['style'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 139:
            _fun00002_ip = 280; continue _fun00001;
 144:
            tangon = _closure1_slot11;
            zuuluu = _closure1_slot4;
            michal = {};
            oscard = {};
            golfie = 3;
            oscard['margin'] = golfie;
            michal['style'] = oscard;
            option = _closure1_slot11;
            golfie = _closure1_slot1;
            backup = _closure1_slot2;
            oscard = 16;
            oscard = backup[oscard];
            golfie = golfie.bind(report)(oscard);
            oscard = {};
            if(!offset) { _fun00002_ip = 203; continue _fun00001 }
 197:
            offset = yankee.lowPriorityBadge;
 203:
            oscard['style'] = offset;
            oscard['value'] = foxtra;
            offset = false;
            oscard['accessible'] = offset;
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            verify = 15;
            verify = yankee[verify];
            verify = offset.bind(report)(verify);
            yankee = verify.intl;
            offset = yankee.formatToPlainString;
            verify = {};
            verify['count'] = foxtra;
            verify = offset.bind(yankee)(romeon, verify);
            oscard['accessibilityLabel'] = verify;
            oscard = option.bind(report)(golfie, oscard);
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 280:
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = function(argFoo) { // Original name: useIconContentStyle
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argFoo;
            golfie = zuuluu.iconSize;
            var _closure2_slot0 = golfie;
            oscard = zuuluu.offset;
            michal = undefined;
            if(!(oscard === michal)) { _fun00004_ip = 29; continue _fun00003 }
 27:
            oscard = 0;
 29:
            var _closure2_slot1 = oscard;
            report = zuuluu.adjustForYouTab;
            if(!(report === michal)) { _fun00004_ip = 45; continue _fun00003 }
 43:
            report = false;
 45:
            var _closure2_slot2 = report;
            tangon = _closure1_slot3;
            zuuluu = tangon.useMemo;
            michal = new Array(3);
            michal[0] = golfie;
            michal[1] = oscard;
            michal[2] = report;
            entity = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = {};
                    michal = _closure1_slot15;
                    entity['borderRadius'] = michal;
                    zuuluu = _closure2_slot2;
                    report = _closure2_slot0;
                    if(zuuluu) { _fun00006_ip = 36; continue _fun00005 }
 27:
                    zuuluu = 3;
                    tangon = report / zuuluu;
                    _fun00006_ip = 50; continue _fun00005;
 36:
                    zuuluu = 0.55;
                    tangon = zuuluu * report;
 50:
                    zuuluu = _closure2_slot1;
                    zuuluu = tangon + zuuluu;
                    entity['top'] = zuuluu;
                    zuuluu = _closure2_slot2;
                    report = _closure2_slot0;
                    if(zuuluu) { _fun00006_ip = 89; continue _fun00005 }
 73:
                    zuuluu = 0.625;
                    zuuluu = zuuluu * report;
                    _fun00006_ip = 103; continue _fun00005;
 89:
                    tangon = 0.65;
                    zuuluu = tangon * report;
 103:
                    michal = _closure2_slot1;
                    michal = zuuluu + michal;
                    entity['left'] = michal;
                    return entity;
                }
            };
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = function(argFoo) { // Original name: useIconBadgeCutout
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = argFoo;
            verify = michal.iconSize;
            var _closure2_slot0 = verify;
            option = michal.offset;
            zuuluu = undefined;
            if(!(option === zuuluu)) { _fun00008_ip = 29; continue _fun00007 }
 27:
            option = 0;
 29:
            var _closure2_slot1 = option;
            golfie = michal.cutoutRadius;
            var _closure2_slot2 = golfie;
            oscard = michal.badgeCount;
            var _closure2_slot3 = oscard;
            report = michal.isWindowLarge;
            var _closure2_slot4 = report;
            tangon = _closure1_slot3;
            zuuluu = tangon.useMemo;
            michal = new Array(5);
            michal[0] = verify;
            michal[1] = option;
            michal[2] = golfie;
            michal[3] = oscard;
            michal[4] = report;
            entity = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    michal = _closure2_slot3;
                    entity = 0;
                    if(!(!(michal > entity))) { _fun00010_ip = 29; continue _fun00009 }
 13:
                    michal = {'x': 2, 'y': 2, 'size': 4294967292};
                    _fun00010_ip = 39; continue _fun00009;
 29:
                    michal = {'x': 0, 'y': 0, 'size': 0};
 39:
                    entity = {};
                    oscard = _closure1_slot0;
                    report = _closure1_slot2;
                    tangon = 18;
                    report = report[tangon];
                    tangon = undefined;
                    tangon = oscard.bind(tangon)(report);
                    tangon = tangon.CutoutShape;
                    tangon = tangon.Circle;
                    entity['shape'] = tangon;
                    tangon = _closure2_slot4;
                    oscard = _closure2_slot0;
                    if(tangon) { _fun00010_ip = 119; continue _fun00009 }
 94:
                    tangon = 0.625;
                    report = tangon * oscard;
                    tangon = michal.x;
                    report = report + tangon;
                    _fun00010_ip = 133; continue _fun00009;
 119:
                    tangon = 0.67;
                    report = tangon * oscard;
 133:
                    tangon = _closure2_slot1;
                    tangon = report + tangon;
                    entity['x'] = tangon;
                    tangon = _closure2_slot4;
                    oscard = _closure2_slot0;
                    if(tangon) { _fun00010_ip = 174; continue _fun00009 }
 156:
                    tangon = 3;
                    report = oscard / tangon;
                    tangon = michal.y;
                    report = report + tangon;
                    _fun00010_ip = 188; continue _fun00009;
 174:
                    tangon = 0.57;
                    report = tangon * oscard;
 188:
                    tangon = _closure2_slot1;
                    tangon = report + tangon;
                    entity['y'] = tangon;
                    tangon = _closure2_slot4;
                    report = _closure2_slot2;
                    zuuluu = 2;
                    zuuluu = zuuluu * report;
                    if(tangon) { _fun00010_ip = 229; continue _fun00009 }
 218:
                    michal = michal.size;
                    michal = zuuluu + michal;
                    _fun00010_ip = 232; continue _fun00009;
 229:
                    michal = zuuluu;
 232:
                    entity['size'] = michal;
                    return entity;
                }
            };
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        }
    };
    var _closure1_slot20 = entity;
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
    foxtra = 1;
    tangon = oscard[foxtra];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.View;
    var _closure1_slot4 = golfie;
    tangon = tangon.Image;
    var _closure1_slot5 = tangon;
    output = 2;
    tangon = oscard[output];
    tangon = kiloes.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = kiloes.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = kiloes.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    sizing = tangon.BADGE_SIZE;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.StatusSizes;
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.StatusTypes;
    var _closure1_slot10 = tangon;
    golfie = 8;
    tangon = oscard[golfie];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot11 = tangon;
    tangon = oscard[golfie];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsxs;
    var _closure1_slot12 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.AVATAR_SIZE_MAP;
    tangon = 10;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AvatarSizes;
    tangon = tangon.NORMAL;
    romeon = option[tangon];
    var _closure1_slot13 = romeon;
    tangon = 11;
    tangon = oscard[tangon];
    offset = report.bind(entity)(tangon);
    verify = offset.createStyles;
    option = {};
    tangon = {};
    yankee = 'relative';
    tangon['position'] = yankee;
    option['container'] = tangon;
    yankee = {};
    tangon = 12;
    backup = oscard[tangon];
    backup = report.bind(entity)(backup);
    backup = backup.TABLET_ICON_YOU_WIDTH;
    backup = backup - romeon;
    backup = -backup;
    echoed = backup / output;
    backup = 13;
    result = oscard[backup];
    result = kiloes.bind(entity)(result);
    result = result.spacing;
    result = result.PX_24;
    result = echoed + result;
    yankee['left'] = result;
    option['containerTablet'] = yankee;
    yankee = {};
    result = 'absolute';
    yankee['position'] = result;
    option['content'] = yankee;
    yankee = {};
    result = oscard[backup];
    result = kiloes.bind(entity)(result);
    result = result.unsafe_rawColors;
    result = result.PRIMARY_400;
    yankee['backgroundColor'] = result;
    option['lowPriorityBadge'] = yankee;
    yankee = {'height': 22, 'width': 22};
    sizing = sizing / output;
    yankee['borderRadius'] = sizing;
    option['unread'] = yankee;
    yankee = {};
    yankee['width'] = romeon;
    yankee['height'] = romeon;
    option['avatarTablet'] = yankee;
    yankee = {};
    sizing = oscard[backup];
    sizing = kiloes.bind(entity)(sizing);
    sizing = sizing.spacing;
    sizing = sizing.PX_4;
    yankee['padding'] = sizing;
    option['avatarCutout'] = yankee;
    yankee = {'width': null, 'left': null, 'height': null, 'justifyContent': 'center', 'position': 'absolute', 'bottom': 0, 'top': 0};
    sizing = oscard[tangon];
    sizing = report.bind(entity)(sizing);
    sizing = sizing.TABLET_ICON_YOU_WIDTH;
    output = sizing - romeon;
    sizing = oscard[backup];
    sizing = kiloes.bind(entity)(sizing);
    sizing = sizing.spacing;
    sizing = sizing.PX_24;
    sizing = output - sizing;
    yankee['width'] = sizing;
    backup = oscard[backup];
    backup = kiloes.bind(entity)(backup);
    backup = backup.spacing;
    backup = backup.PX_16;
    backup = romeon + backup;
    yankee['left'] = backup;
    yankee['height'] = romeon;
    option['usernameTablet'] = yankee;
    yankee = {};
    romeon = 14;
    backup = oscard[romeon];
    backup = report.bind(entity)(backup);
    backup = backup.ICON_SIZE;
    backup = backup.md;
    yankee['width'] = backup;
    backup = oscard[romeon];
    backup = report.bind(entity)(backup);
    backup = backup.ICON_SIZE;
    backup = backup.md;
    yankee['height'] = backup;
    yankee['opacity'] = foxtra;
    option['tabBarIconSelected'] = yankee;
    yankee = {};
    foxtra = oscard[romeon];
    foxtra = report.bind(entity)(foxtra);
    foxtra = foxtra.ICON_SIZE;
    foxtra = foxtra.md;
    yankee['width'] = foxtra;
    romeon = oscard[romeon];
    romeon = report.bind(entity)(romeon);
    romeon = romeon.ICON_SIZE;
    romeon = romeon.md;
    yankee['height'] = romeon;
    romeon = 0.5;
    yankee['opacity'] = romeon;
    option['tabBarIconUnselected'] = yankee;
    option = verify.bind(offset)(option);
    var _closure1_slot14 = option;
    var _closure1_slot15 = golfie;
    var _closure1_slot16 = tangon;
    tangon = {};
    golfie = 'function BadgableTabBarIconTsx1(){const{scaleDownAnimation,rotationAnimation,wobbleAnimationX,wobbleAnimationY}=this.__closure;return{transform:[{scale:scaleDownAnimation.get()},{rotate:rotationAnimation.get()+"deg"},{scaleX:wobbleAnimationX.get()},{scaleY:wobbleAnimationY.get()}]};}';
    tangon['code'] = golfie;
    var _closure1_slot17 = tangon;
    tangon = 33;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/shared_components/BadgableTabBarIcon.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: BadgableTabBarIcon
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            ctrled = entity.badgeA11yLabel;
            foxtra = entity.color;
            update = entity.icon;
            zuuluu = entity.iconAnimated;
            backup = entity.focused;
            option = entity.navigation;
            var _closure2_slot0 = option;
            entity = entity.useBadgeCount;
            tangon = undefined;
            var _closure2_slot1 = tangon;
            var _closure2_slot2 = tangon;
            report = _closure1_slot14;
            oscard = report.bind(tangon)();
            golfie = _closure1_slot1;
            yankee = _closure1_slot2;
            report = 19;
            report = yankee[report];
            report = golfie.bind(tangon)(report);
            report = report.bind(tangon)();
            verify = _closure1_slot0;
            golfie = 14;
            golfie = yankee[golfie];
            golfie = verify.bind(tangon)(golfie);
            golfie = golfie.ICON_SIZE;
            yankee = golfie.md;
            if(backup) { _fun00012_ip = 142; continue _fun00011 }
 131:
            if(report) { _fun00012_ip = 142; continue _fun00011 }
 134:
            source = oscard.tabBarIconUnselected;
            _fun00012_ip = 148; continue _fun00011;
 142:
            source = oscard.tabBarIconSelected;
 148:
            verify = _closure1_slot19;
            golfie = {};
            golfie['iconSize'] = yankee;
            verify = verify.bind(tangon)(golfie);
            entity = entity.bind(tangon)();
            vacuum = entity.value;
            echoed = entity.showDot;
            result = entity.lowPriority;
            golfie = _closure1_slot20;
            entity = {};
            entity['iconSize'] = yankee;
            yankee = 11;
            entity['cutoutRadius'] = yankee;
            entity['badgeCount'] = vacuum;
            entity['isWindowLarge'] = report;
            output = golfie.bind(tangon)(entity);
            yankee = _closure1_slot3;
            golfie = yankee.useRef;
            entity = null;
            kiloes = golfie.bind(yankee)(entity);
            _closure2_slot1 = kiloes;
            romeon = undefined;
            if(report) { _fun00012_ip = 247; continue _fun00011 }
 244:
            romeon = zuuluu;
 247:
            _closure2_slot2 = romeon;
            zuuluu = 0;
            yankee = vacuum > zuuluu;
            if(yankee) { _fun00012_ip = 263; continue _fun00011 }
 260:
            yankee = echoed;
 263:
            golfie = _closure1_slot3;
            report = golfie.useEffect;
            zuuluu = new Array(2);
            zuuluu[0] = option;
            zuuluu[1] = romeon;
            michal = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zuuluu = _closure2_slot2;
                    michal = null;
                    if(!(michal == zuuluu)) { _fun00014_ip = 17; continue _fun00013 }
 13:
                    michal = undefined;
                    return michal;
 17:
                    tangon = _closure2_slot0;
                    zuuluu = tangon.addListener;
                    michal = 'tabPress';
                    entity = function() {
                        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                            entity = _closure2_slot1;
                            report = null;
                            michal = report == entity;
                            entity = undefined;
                            zuuluu = undefined;
                            if(michal) { _fun00016_ip = 36; continue _fun00015 }
 20:
                            tangon = _closure2_slot1;
                            tangon = tangon.current;
                            michal = report == tangon;
                            zuuluu = tangon;
 36:
                            if(michal) { _fun00016_ip = 49; continue _fun00015 }
 39:
                            michal = zuuluu.play;
                            michal = michal.bind(zuuluu)();
 49:
                            return entity;
                        }
                    };
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
                }
            };
            michal = report.bind(golfie)(michal, zuuluu);
            golfie = null;
            if(!yankee) { _fun00012_ip = 378; continue _fun00011 }
 302:
            report = _closure1_slot11;
            zuuluu = _closure1_slot4;
            michal = {};
            sizing = oscard.content;
            option = new Array(2);
            option[0] = sizing;
            option[1] = verify;
            michal['style'] = option;
            sizing = _closure1_slot11;
            verify = _closure1_slot18;
            option = {};
            option['value'] = vacuum;
            option['countA11yLabel'] = ctrled;
            option['unread'] = echoed;
            option['lowPriority'] = result;
            option = sizing.bind(tangon)(verify, option);
            michal['children'] = option;
            golfie = report.bind(tangon)(zuuluu, michal);
 378:
            zuuluu = _closure1_slot12;
            michal = _closure1_slot4;
            if(!(entity == romeon)) { _fun00012_ip = 529; continue _fun00011 }
 393:
            entity = {};
            report = oscard.container;
            entity['style'] = report;
            verify = _closure1_slot11;
            option = _closure1_slot1;
            sizing = _closure1_slot2;
            report = 18;
            report = sizing[report];
            option = option.bind(tangon)(report);
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
            echoed = _closure1_slot11;
            result = _closure1_slot5;
            sizing = {};
            sizing['source'] = update;
            ctrled = {};
            ctrled['tintColor'] = foxtra;
            update = new Array(2);
            update[0] = ctrled;
            update[1] = source;
            sizing['style'] = update;
            sizing = echoed.bind(tangon)(result, sizing);
            report['children'] = sizing;
            option = verify.bind(tangon)(option, report);
            report = new Array(2);
            report[0] = option;
            report[1] = golfie;
            entity['children'] = report;
            _fun00012_ip = 668; continue _fun00011;
 529:
            report = {};
            oscard = oscard.container;
            report['style'] = oscard;
            verify = _closure1_slot11;
            option = _closure1_slot1;
            sizing = _closure1_slot2;
            oscard = 18;
            oscard = sizing[oscard];
            option = option.bind(tangon)(oscard);
            oscard = {};
            if(yankee) { _fun00012_ip = 575; continue _fun00011 }
 569:
            yankee = new Array(0);
            _fun00012_ip = 586; continue _fun00011;
 575:
            sizing = new Array(1);
            sizing[0] = output;
            yankee = sizing;
 586:
            oscard['cutouts'] = yankee;
            yankee = _closure1_slot11;
            offset = {};
            offset['ref'] = kiloes;
            kiloes = 'md';
            offset['size'] = kiloes;
            offset['color'] = foxtra;
            foxtra = 0.5;
            if(!backup) { _fun00012_ip = 629; continue _fun00011 }
 626:
            foxtra = 1;
 629:
            offset['opacity'] = foxtra;
            offset = yankee.bind(tangon)(romeon, offset);
            oscard['children'] = offset;
            option = verify.bind(tangon)(option, oscard);
            oscard = new Array(2);
            oscard[0] = option;
            oscard[1] = golfie;
            report['children'] = oscard;
            entity = report;
 668:
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['BadgableTabBarIcon'] = tangon;
    michal = function(argFoo) { // Original name: YouIcon
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            michal = argFoo;
            entity = michal.focused;
            cntext = michal.tintColor;
            output = michal.navigation;
            var _closure2_slot0 = output;
            tangon = undefined;
            var _closure2_slot1 = tangon;
            var _closure2_slot2 = tangon;
            var _closure2_slot3 = tangon;
            var _closure2_slot4 = tangon;
            var _closure2_slot5 = tangon;
            var _closure2_slot6 = tangon;
            var _closure2_slot7 = tangon;
            var _closure2_slot8 = tangon;
            var _closure2_slot9 = tangon;
            var _closure2_slot10 = tangon;
            michal = _closure1_slot14;
            yankee = michal.bind(tangon)();
            zuuluu = _closure1_slot1;
            oscard = _closure1_slot2;
            michal = 19;
            michal = oscard[michal];
            michal = zuuluu.bind(tangon)(michal);
            golfie = michal.bind(tangon)();
            sierra = golfie;
            if(sierra) { _fun00018_ip = 113; continue _fun00017 }
 110:
            sierra = entity;
 113:
            michal = _closure1_slot0;
            entity = _closure1_slot2;
            option = 20;
            zuuluu = entity[option];
            romeon = michal.bind(tangon)(zuuluu);
            verify = romeon.useStateFromStores;
            zuuluu = _closure1_slot8;
            oscard = new Array(1);
            oscard[0] = zuuluu;
            zuuluu = function() {
                michal = _closure1_slot8;
                entity = michal.getCurrentUser;
                entity = entity.bind(michal)();
                return entity;
            };
            limora = verify.bind(romeon)(oscard, zuuluu);
            oscard = _closure1_slot1;
            zuuluu = 21;
            zuuluu = entity[zuuluu];
            oscard = oscard.bind(tangon)(zuuluu);
            zuuluu = oscard.useName;
            foxtra = zuuluu.bind(oscard)(limora);
            entity = entity[option];
            oscard = michal.bind(tangon)(entity);
            zuuluu = oscard.useStateFromStores;
            entity = _closure1_slot7;
            michal = new Array(1);
            michal[0] = entity;
            entity = function() {
                michal = _closure1_slot7;
                entity = michal.getStatus;
                entity = entity.bind(michal)();
                return entity;
            };
            source = zuuluu.bind(oscard)(michal, entity);
            vacuum = null;
            entity = vacuum != source;
            if(!entity) { _fun00018_ip = 252; continue _fun00017 }
 238:
            michal = _closure1_slot10;
            michal = michal.UNKNOWN;
            entity = source !== michal;
 252:
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot2;
            michal = 22;
            michal = oscard[michal];
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.useIsEligibleForPomelo;
            oscard = michal.bind(zuuluu)();
            zuuluu = vacuum == limora;
            michal = undefined;
            if(zuuluu) { _fun00018_ip = 297; continue _fun00017 }
 291:
            michal = limora.avatar;
 297:
            whisks = vacuum == michal;
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[option];
            verify = zuuluu.bind(tangon)(michal);
            option = verify.useStateFromStores;
            michal = _closure1_slot6;
            zuuluu = new Array(1);
            zuuluu[0] = michal;
            michal = function() {
                entity = _closure1_slot6;
                entity = entity.useReducedMotion;
                return entity;
            };
            equals = option.bind(verify)(zuuluu, michal);
            _closure2_slot1 = equals;
            update = 0.5;
            if(!sierra) { _fun00018_ip = 368; continue _fun00017 }
 365:
            update = 1;
 368:
            if(golfie) { _fun00018_ip = 405; continue _fun00017 }
 371:
            zuuluu = _closure1_slot0;
            option = _closure1_slot2;
            michal = 14;
            michal = option[michal];
            michal = zuuluu.bind(tangon)(michal);
            michal = michal.ICON_SIZE;
            option = michal.md;
            _fun00018_ip = 409; continue _fun00017;
 405:
            option = _closure1_slot13;
 409:
            zuuluu = _closure1_slot3;
            michal = zuuluu.useRef;
            papara = michal.bind(zuuluu)(vacuum);
            _closure2_slot2 = papara;
            zuuluu = _closure1_slot19;
            michal = {};
            michal['iconSize'] = option;
            verify = yankee.avatarCutout;
            verify = verify.padding;
            michal['offset'] = verify;
            michal['adjustForYouTab'] = golfie;
            echoed = zuuluu.bind(tangon)(michal);
            zuuluu = _closure1_slot20;
            michal = {};
            michal['iconSize'] = option;
            option = yankee.avatarCutout;
            option = option.padding;
            michal['offset'] = option;
            option = 11;
            michal['cutoutRadius'] = option;
            kiloes = 0;
            michal['badgeCount'] = kiloes;
            michal['isWindowLarge'] = golfie;
            michal = zuuluu.bind(tangon)(michal);
            verify = _closure1_slot0;
            zuuluu = _closure1_slot2;
            result = 23;
            option = zuuluu[result];
            romeon = verify.bind(tangon)(option);
            option = romeon.useSharedValue;
            backup = 1;
            target = option.bind(romeon)(backup);
            _closure2_slot3 = target;
            option = zuuluu[result];
            romeon = verify.bind(tangon)(option);
            option = romeon.useSharedValue;
            record = option.bind(romeon)(kiloes);
            _closure2_slot4 = record;
            option = zuuluu[result];
            romeon = verify.bind(tangon)(option);
            option = romeon.useSharedValue;
            config = option.bind(romeon)(backup);
            _closure2_slot5 = config;
            option = zuuluu[result];
            romeon = verify.bind(tangon)(option);
            option = romeon.useSharedValue;
            sequen = option.bind(romeon)(backup);
            _closure2_slot6 = sequen;
            sizing = _closure1_slot3;
            backup = sizing.useCallback;
            romeon = new Array(1);
            romeon[0] = target;
            option = function() {
                offset = {};
                entity = 0.13;
                offset['mass'] = entity;
                tangon = _closure2_slot3;
                zuuluu = tangon.set;
                option = _closure1_slot0;
                verify = _closure1_slot2;
                entity = 23;
                michal = verify[entity];
                entity = undefined;
                golfie = option.bind(entity)(michal);
                oscard = golfie.withSequence;
                michal = 24;
                report = verify[michal];
                romeon = option.bind(entity)(report);
                yankee = romeon.withSpring;
                report = 0.7;
                report = yankee.bind(romeon)(report, offset);
                michal = verify[michal];
                verify = option.bind(entity)(michal);
                option = verify.withSpring;
                michal = 1;
                michal = option.bind(verify)(michal, offset);
                michal = oscard.bind(golfie)(report, michal);
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            status = backup.bind(sizing)(option, romeon);
            _closure2_slot7 = status;
            sizing = _closure1_slot3;
            backup = sizing.useCallback;
            romeon = new Array(1);
            romeon[0] = record;
            option = function() {
                tangon = _closure2_slot4;
                zuuluu = tangon.set;
                romeon = _closure1_slot0;
                kiloes = _closure1_slot2;
                michal = 23;
                report = kiloes[michal];
                entity = undefined;
                golfie = romeon.bind(entity)(report);
                oscard = golfie.withDelay;
                michal = kiloes[michal];
                yankee = romeon.bind(entity)(michal);
                offset = yankee.withSequence;
                foxtra = 24;
                michal = kiloes[foxtra];
                backup = romeon.bind(entity)(michal);
                verify = backup.withSpring;
                michal = 25;
                report = kiloes[michal];
                report = romeon.bind(entity)(report);
                option = report.springStandard;
                report = -4;
                verify = verify.bind(backup)(report, option);
                report = kiloes[foxtra];
                sizing = romeon.bind(entity)(report);
                backup = sizing.withSpring;
                report = kiloes[michal];
                report = romeon.bind(entity)(report);
                option = report.springStandard;
                report = 3;
                option = backup.bind(sizing)(report, option);
                report = kiloes[foxtra];
                output = romeon.bind(entity)(report);
                sizing = output.withSpring;
                report = kiloes[michal];
                report = romeon.bind(entity)(report);
                backup = report.springStandard;
                report = -2;
                echoed = sizing.bind(output)(report, backup);
                foxtra = kiloes[foxtra];
                backup = romeon.bind(entity)(foxtra);
                foxtra = backup.withSpring;
                michal = kiloes[michal];
                michal = romeon.bind(entity)(michal);
                romeon = michal.springStandard;
                michal = 0;
                result = foxtra.bind(backup)(michal, romeon);
                ctrled = yankee;
                source = verify;
                update = option;
                report = ctrled[offset](source, update, echoed, result, output);
                michal = 30;
                michal = oscard.bind(golfie)(michal, report);
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            ctrled = backup.bind(sizing)(option, romeon);
            _closure2_slot8 = ctrled;
            sizing = _closure1_slot3;
            backup = sizing.useCallback;
            romeon = new Array(2);
            romeon[0] = config;
            romeon[1] = sequen;
            option = function() {
                oscard = _closure2_slot5;
                report = oscard.set;
                echoed = _closure1_slot0;
                update = _closure1_slot2;
                option = 23;
                michal = update[option];
                entity = undefined;
                offset = echoed.bind(entity)(michal);
                verify = offset.withDelay;
                michal = update[option];
                ctrled = echoed.bind(entity)(michal);
                source = ctrled.withSequence;
                sizing = 24;
                michal = update[sizing];
                romeon = echoed.bind(entity)(michal);
                yankee = romeon.withSpring;
                michal = 25;
                tangon = update[michal];
                tangon = echoed.bind(entity)(tangon);
                golfie = tangon.springStandard;
                tangon = 1.09;
                kiloes = yankee.bind(romeon)(tangon, golfie);
                tangon = update[sizing];
                romeon = echoed.bind(entity)(tangon);
                yankee = romeon.withSpring;
                tangon = update[michal];
                tangon = echoed.bind(entity)(tangon);
                golfie = tangon.springStandard;
                tangon = 0.9;
                backup = yankee.bind(romeon)(tangon, golfie);
                tangon = update[sizing];
                yankee = echoed.bind(entity)(tangon);
                golfie = yankee.withSpring;
                tangon = update[michal];
                tangon = echoed.bind(entity)(tangon);
                tangon = tangon.springStandard;
                output = 1.04;
                target = golfie.bind(yankee)(output, tangon);
                tangon = update[sizing];
                romeon = echoed.bind(entity)(tangon);
                yankee = romeon.withSpring;
                tangon = update[michal];
                tangon = echoed.bind(entity)(tangon);
                golfie = tangon.springStandard;
                tangon = 0.96;
                papara = yankee.bind(romeon)(tangon, golfie);
                tangon = update[sizing];
                result = echoed.bind(entity)(tangon);
                yankee = result.withSpring;
                tangon = update[michal];
                tangon = echoed.bind(entity)(tangon);
                golfie = tangon.springStandard;
                tangon = 1.02;
                cntext = yankee.bind(result)(tangon, golfie);
                tangon = update[sizing];
                vacuum = echoed.bind(entity)(tangon);
                result = vacuum.withSpring;
                tangon = update[michal];
                tangon = echoed.bind(entity)(tangon);
                golfie = tangon.springStandard;
                tangon = 0.99;
                record = result.bind(vacuum)(tangon, golfie);
                tangon = update[sizing];
                sequen = echoed.bind(entity)(tangon);
                vacuum = sequen.withSpring;
                tangon = update[michal];
                tangon = echoed.bind(entity)(tangon);
                tangon = tangon.springStandard;
                result = 1;
                config = vacuum.bind(sequen)(result, tangon);
                limora = ctrled;
                sierra = kiloes;
                status = backup;
                tangon = limora[source](sierra, status, target, papara, cntext, record, config, sequen);
                golfie = 8;
                tangon = verify.bind(offset)(golfie, tangon);
                tangon = report.bind(oscard)(tangon);
                tangon = _closure2_slot6;
                zuuluu = tangon.set;
                report = update[option];
                oscard = echoed.bind(entity)(report);
                report = oscard.withDelay;
                option = update[option];
                kiloes = echoed.bind(entity)(option);
                backup = kiloes.withSequence;
                option = update[sizing];
                yankee = echoed.bind(entity)(option);
                offset = yankee.withSpring;
                option = update[michal];
                option = echoed.bind(entity)(option);
                verify = option.springStandard;
                option = 0.87;
                foxtra = offset.bind(yankee)(option, verify);
                option = update[sizing];
                yankee = echoed.bind(entity)(option);
                offset = yankee.withSpring;
                option = update[michal];
                option = echoed.bind(entity)(option);
                verify = option.springStandard;
                option = 1.06;
                romeon = offset.bind(yankee)(option, verify);
                option = update[sizing];
                yankee = echoed.bind(entity)(option);
                offset = yankee.withSpring;
                option = update[michal];
                option = echoed.bind(entity)(option);
                verify = option.springStandard;
                option = 0.95;
                target = offset.bind(yankee)(option, verify);
                option = update[sizing];
                offset = echoed.bind(entity)(option);
                verify = offset.withSpring;
                option = update[michal];
                option = echoed.bind(entity)(option);
                option = option.springStandard;
                papara = verify.bind(offset)(output, option);
                option = update[sizing];
                source = echoed.bind(entity)(option);
                output = source.withSpring;
                option = update[michal];
                option = echoed.bind(entity)(option);
                verify = option.springStandard;
                option = 0.97;
                cntext = output.bind(source)(option, verify);
                option = update[sizing];
                ctrled = echoed.bind(entity)(option);
                source = ctrled.withSpring;
                option = update[michal];
                option = echoed.bind(entity)(option);
                output = option.springStandard;
                option = 1.01;
                record = source.bind(ctrled)(option, output);
                sizing = update[sizing];
                output = echoed.bind(entity)(sizing);
                sizing = output.withSpring;
                michal = update[michal];
                michal = echoed.bind(entity)(michal);
                michal = michal.springStandard;
                config = sizing.bind(output)(result, michal);
                limora = kiloes;
                sierra = foxtra;
                status = romeon;
                michal = limora[backup](sierra, status, target, papara, cntext, record, config, sequen);
                michal = report.bind(oscard)(golfie, michal);
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            option = backup.bind(sizing)(option, romeon);
            _closure2_slot9 = option;
            sizing = _closure1_slot3;
            backup = sizing.useCallback;
            romeon = new Array(4);
            romeon[0] = equals;
            romeon[1] = status;
            romeon[2] = ctrled;
            romeon[3] = option;
            option = function() {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    michal = _closure2_slot1;
                    if(michal) { _fun00020_ip = 36; continue _fun00019 }
 10:
                    zuuluu = _closure2_slot7;
                    michal = undefined;
                    zuuluu = zuuluu.bind(michal)();
                    zuuluu = _closure2_slot8;
                    zuuluu = zuuluu.bind(michal)();
                    entity = _closure2_slot9;
                    entity = entity.bind(michal)();
 36:
                    entity = undefined;
                    return entity;
                }
            };
            sizing = backup.bind(sizing)(option, romeon);
            _closure2_slot10 = sizing;
            option = zuuluu[result];
            backup = verify.bind(tangon)(option);
            romeon = backup.useAnimatedStyle;
            option = function() { // Original name: C
                entity = {};
                zuuluu = {};
                report = _closure2_slot3;
                michal = report.get;
                michal = michal.bind(report)();
                zuuluu['scale'] = michal;
                michal = new Array(4);
                michal[0] = zuuluu;
                zuuluu = {};
                oscard = _closure2_slot4;
                report = oscard.get;
                option = report.bind(oscard)();
                report = global;
                report = report.HermesInternal;
                golfie = report.concat;
                oscard = '';
                report = 'deg';
                report = golfie.bind(oscard)(option, report);
                zuuluu['rotate'] = report;
                michal[1] = zuuluu;
                zuuluu = {};
                oscard = _closure2_slot5;
                report = oscard.get;
                report = report.bind(oscard)();
                zuuluu['scaleX'] = report;
                michal[2] = zuuluu;
                zuuluu = {};
                report = _closure2_slot6;
                tangon = report.get;
                tangon = tangon.bind(report)();
                zuuluu['scaleY'] = tangon;
                michal[3] = zuuluu;
                entity['transform'] = michal;
                return entity;
            };
            ctrled = {};
            ctrled['scaleDownAnimation'] = target;
            ctrled['rotationAnimation'] = record;
            ctrled['wobbleAnimationX'] = config;
            ctrled['wobbleAnimationY'] = sequen;
            option['__closure'] = ctrled;
            ctrled = 3024112617373.0;
            option['__workletHash'] = ctrled;
            ctrled = _closure1_slot17;
            option['__initData'] = ctrled;
            equals = romeon.bind(backup)(option);
            backup = _closure1_slot3;
            romeon = backup.useEffect;
            option = new Array(2);
            option[0] = output;
            option[1] = sizing;
            report = function() {
                tangon = _closure2_slot0;
                zuuluu = tangon.addListener;
                michal = 'tabPress';
                entity = function() {
                    _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                        entity = _closure2_slot2;
                        oscard = null;
                        zuuluu = oscard == entity;
                        entity = undefined;
                        tangon = undefined;
                        if(zuuluu) { _fun00022_ip = 36; continue _fun00021 }
 20:
                        report = _closure2_slot2;
                        report = report.current;
                        zuuluu = oscard == report;
                        tangon = report;
 36:
                        if(zuuluu) { _fun00022_ip = 49; continue _fun00021 }
 39:
                        zuuluu = tangon.play;
                        zuuluu = zuuluu.bind(tangon)();
 49:
                        michal = _closure2_slot10;
                        michal = michal.bind(entity)();
                        return entity;
                    }
                };
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            report = romeon.bind(backup)(report, option);
            backup = new Array(0);
            quebec = 10;
            report = zuuluu[quebec];
            option = verify.bind(tangon)(report);
            report = option.getStatusSize;
            zuuluu = zuuluu[quebec];
            zuuluu = verify.bind(tangon)(zuuluu);
            zuuluu = zuuluu.AvatarSizes;
            zuuluu = zuuluu.TABS_22;
            ctrled = report.bind(option)(zuuluu);
            if(!entity) { _fun00018_ip = 951; continue _fun00017 }
 948:
            entity = !oscard;
 951:
            if(!entity) { _fun00018_ip = 964; continue _fun00017 }
 954:
            entity = backup.push;
            entity = entity.bind(backup)(michal);
 964:
            zuuluu = _closure1_slot12;
            michal = _closure1_slot4;
            entity = {};
            report = undefined;
            if(!golfie) { _fun00018_ip = 985; continue _fun00017 }
 979:
            report = yankee.containerTablet;
 985:
            entity['style'] = report;
            verify = _closure1_slot12;
            option = _closure1_slot4;
            report = {};
            romeon = yankee.container;
            report['style'] = romeon;
            output = _closure1_slot11;
            sizing = _closure1_slot1;
            sequen = _closure1_slot2;
            romeon = 18;
            romeon = sequen[romeon];
            sizing = sizing.bind(tangon)(romeon);
            romeon = {};
            romeon['cutouts'] = backup;
            sequen = yankee.avatarCutout;
            romeon['style'] = sequen;
            record = _closure1_slot11;
            if(whisks) { _fun00018_ip = 1298; continue _fun00017 }
 1059:
            target = _closure1_slot1;
            config = _closure1_slot2;
            result = config[result];
            result = target.bind(tangon)(result);
            sequen = result.View;
            result = {};
            status = new Array(1);
            status[0] = equals;
            result['style'] = status;
            status = _closure1_slot11;
            config = config[quebec];
            target = target.bind(tangon)(config);
            config = {};
            config['user'] = limora;
            config['guildId'] = tangon;
            if(sierra) { _fun00018_ip = 1129; continue _fun00017 }
 1121:
            sierra = yankee.tabBarIconUnselected;
            _fun00018_ip = 1149; continue _fun00017;
 1129:
            if(golfie) { _fun00018_ip = 1140; continue _fun00017 }
 1132:
            equals = yankee.tabBarIconSelected;
            _fun00018_ip = 1146; continue _fun00017;
 1140:
            equals = yankee.avatarTablet;
 1146:
            sierra = equals;
 1149:
            config['style'] = sierra;
            sierra = undefined;
            if(!whisks) { _fun00018_ip = 1168; continue _fun00017 }
 1158:
            equals = {};
            equals['tintColor'] = cntext;
            sierra = equals;
 1168:
            config['avatarStyle'] = sierra;
            equals = _closure1_slot0;
            sierra = _closure1_slot2;
            sierra = sierra[quebec];
            sierra = equals.bind(tangon)(sierra);
            equals = sierra.AvatarSizes;
            if(golfie) { _fun00018_ip = 1207; continue _fun00017 }
 1199:
            sierra = equals.TABS_22;
            _fun00018_ip = 1213; continue _fun00017;
 1207:
            sierra = equals.NORMAL;
 1213:
            config['size'] = sierra;
            sierra = false;
            config['animate'] = sierra;
            sierra = null;
            if(!whisks) { _fun00018_ip = 1249; continue _fun00017 }
 1229:
            equals = _closure1_slot1;
            quebec = _closure1_slot2;
            whisks = 27;
            whisks = quebec[whisks];
            sierra = equals.bind(tangon)(whisks);
 1249:
            config['source'] = sierra;
            sierra = true;
            config['needsOffscreenAlphaCompositing'] = sierra;
            whisks = vacuum == limora;
            sierra = undefined;
            if(whisks) { _fun00018_ip = 1275; continue _fun00017 }
 1269:
            sierra = limora.avatarDecoration;
 1275:
            config['avatarDecoration'] = sierra;
            config = status.bind(tangon)(target, config);
            result['children'] = config;
            result = record.bind(tangon)(sequen, result);
            _fun00018_ip = 1359; continue _fun00017;
 1298:
            config = _closure1_slot0;
            target = _closure1_slot2;
            sequen = 26;
            sequen = target[sequen];
            sequen = config.bind(tangon)(sequen);
            config = sequen.YouTabLottie;
            sequen = {};
            sequen['ref'] = papara;
            papara = 'lg';
            if(golfie) { _fun00018_ip = 1341; continue _fun00017 }
 1337:
            papara = 'md';
 1341:
            sequen['size'] = papara;
            sequen['color'] = cntext;
            sequen['opacity'] = update;
            result = record.bind(tangon)(config, sequen);
 1359:
            romeon['children'] = result;
            sizing = output.bind(tangon)(sizing, romeon);
            romeon = new Array(2);
            romeon[0] = sizing;
            backup = backup.length;
            backup = backup > kiloes;
            if(!backup) { _fun00018_ip = 1508; continue _fun00017 }
 1389:
            output = _closure1_slot11;
            sizing = _closure1_slot4;
            kiloes = {};
            sequen = yankee.content;
            result = new Array(3);
            result[0] = sequen;
            result[1] = echoed;
            echoed = {};
            echoed['opacity'] = update;
            result[2] = echoed;
            kiloes['style'] = result;
            update = _closure1_slot11;
            echoed = _closure1_slot1;
            sequen = _closure1_slot2;
            result = 28;
            result = sequen[result];
            echoed = echoed.bind(tangon)(result);
            result = {};
            if(!(vacuum == ctrled)) { _fun00018_ip = 1470; continue _fun00017 }
 1460:
            vacuum = _closure1_slot9;
            ctrled = vacuum.MEDIUM;
 1470:
            result['size'] = ctrled;
            result['status'] = source;
            source = {};
            ctrled = 2;
            source['margin'] = ctrled;
            result['style'] = source;
            result = update.bind(tangon)(echoed, result);
            kiloes['children'] = result;
            backup = output.bind(tangon)(sizing, kiloes);
 1508:
            romeon[1] = backup;
            report['children'] = romeon;
            option = verify.bind(tangon)(option, report);
            report = new Array(4);
            report[0] = option;
            if(!oscard) { _fun00018_ip = 1609; continue _fun00017 }
 1533:
            romeon = _closure1_slot11;
            kiloes = _closure1_slot1;
            sizing = _closure1_slot2;
            option = 29;
            option = sizing[option];
            verify = kiloes.bind(tangon)(option);
            option = {};
            backup = 13;
            backup = sizing[backup];
            backup = kiloes.bind(tangon)(backup);
            backup = backup.colors;
            backup = backup.STATUS_WARNING;
            option['themedColor'] = backup;
            backup = 30;
            backup = sizing[backup];
            backup = kiloes.bind(tangon)(backup);
            option['source'] = backup;
            oscard = romeon.bind(tangon)(verify, option);
 1609:
            report[1] = oscard;
            verify = _closure1_slot11;
            option = _closure1_slot0;
            romeon = _closure1_slot2;
            oscard = 31;
            oscard = romeon[oscard];
            oscard = option.bind(tangon)(oscard);
            option = oscard.MobileTrialUserSettingsAvatarBadge;
            oscard = {};
            oscard = verify.bind(tangon)(option, oscard);
            report[2] = oscard;
            oscard = undefined;
            if(!golfie) { _fun00018_ip = 1743; continue _fun00017 }
 1660:
            verify = _closure1_slot11;
            option = _closure1_slot4;
            golfie = {};
            yankee = yankee.usernameTablet;
            golfie['style'] = yankee;
            romeon = _closure1_slot11;
            yankee = _closure1_slot0;
            backup = _closure1_slot2;
            offset = 32;
            offset = backup[offset];
            offset = yankee.bind(tangon)(offset);
            yankee = offset.Text;
            offset = {'variant': 'text-md/semibold', 'lineClamp': 1, 'color': 'interactive-active', 'maxFontSizeMultiplier': 2};
            offset['children'] = foxtra;
            offset = romeon.bind(tangon)(yankee, offset);
            golfie['children'] = offset;
            oscard = verify.bind(tangon)(option, golfie);
 1743:
            report[3] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['YouIcon'] = michal;
    return entity;
})();