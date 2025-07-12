// app/modules/main_tabs_v2/native/shared_components/BadgableTabBarIcon.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    foxtra = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = foxtra;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: BadgeContent
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            foxtra = entity.value;
            romeon = entity.countA11yLabel;
            michal = entity.unread;
            offset = entity.lowPriority;
            oscard = entity.unreadA11yLabel;
            entity = _closure1_slot15;
            report = undefined;
            yankee = entity.bind(report)();
            entity = null;
            if(!(entity == romeon)) { _fun00002_ip = 84; continue _fun00001 }
 51:
            tangon = _closure1_slot0;
            golfie = _closure1_slot2;
            zuuluu = 16;
            zuuluu = golfie[zuuluu];
            zuuluu = tangon.bind(report)(zuuluu);
            zuuluu = zuuluu.t;
            romeon = zuuluu.XNn2u7;
 84:
            zuuluu = 0;
            if(!(!(foxtra > zuuluu))) { _fun00002_ip = 173; continue _fun00001 }
 90:
            entity = null;
            if(!michal) { _fun00002_ip = 168; continue _fun00001 }
 95:
            tangon = _closure1_slot12;
            zuuluu = _closure1_slot4;
            michal = {};
            michal['accessibilityLabel'] = oscard;
            option = _closure1_slot12;
            golfie = _closure1_slot1;
            backup = _closure1_slot2;
            oscard = 18;
            oscard = backup[oscard];
            golfie = golfie.bind(report)(oscard);
            oscard = {};
            backup = 12;
            oscard['size'] = backup;
            backup = yankee.unread;
            oscard['style'] = backup;
            oscard = option.bind(report)(golfie, oscard);
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 168:
            _fun00002_ip = 309; continue _fun00001;
 173:
            tangon = _closure1_slot12;
            zuuluu = _closure1_slot4;
            michal = {};
            oscard = {};
            golfie = 3;
            oscard['margin'] = golfie;
            michal['style'] = oscard;
            option = _closure1_slot12;
            golfie = _closure1_slot1;
            backup = _closure1_slot2;
            oscard = 17;
            oscard = backup[oscard];
            golfie = golfie.bind(report)(oscard);
            oscard = {};
            if(!offset) { _fun00002_ip = 232; continue _fun00001 }
 226:
            offset = yankee.lowPriorityBadge;
 232:
            oscard['style'] = offset;
            oscard['value'] = foxtra;
            offset = false;
            oscard['accessible'] = offset;
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            verify = 16;
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
 309:
            return entity;
        }
    };
    var _closure1_slot17 = entity;
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
                    michal = 8;
                    entity['borderRadius'] = michal;
                    zuuluu = _closure2_slot2;
                    report = _closure2_slot0;
                    if(zuuluu) { _fun00006_ip = 32; continue _fun00005 }
 23:
                    zuuluu = 3;
                    tangon = report / zuuluu;
                    _fun00006_ip = 46; continue _fun00005;
 32:
                    zuuluu = 0.55;
                    tangon = zuuluu * report;
 46:
                    zuuluu = _closure2_slot1;
                    zuuluu = tangon + zuuluu;
                    entity['top'] = zuuluu;
                    zuuluu = _closure2_slot2;
                    report = _closure2_slot0;
                    if(zuuluu) { _fun00006_ip = 85; continue _fun00005 }
 69:
                    zuuluu = 0.625;
                    zuuluu = zuuluu * report;
                    _fun00006_ip = 99; continue _fun00005;
 85:
                    tangon = 0.65;
                    zuuluu = tangon * report;
 99:
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
    var _closure1_slot18 = entity;
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
                    _fun00010_ip = 43; continue _fun00009;
 29:
                    michal = {'x': 0, 'y': 0, 'size': 0};
 43:
                    entity = {};
                    oscard = _closure1_slot0;
                    report = _closure1_slot2;
                    tangon = 19;
                    report = report[tangon];
                    tangon = undefined;
                    tangon = oscard.bind(tangon)(report);
                    tangon = tangon.CutoutShape;
                    tangon = tangon.Circle;
                    entity['shape'] = tangon;
                    tangon = _closure2_slot4;
                    oscard = _closure2_slot0;
                    if(tangon) { _fun00010_ip = 123; continue _fun00009 }
 98:
                    tangon = 0.625;
                    report = tangon * oscard;
                    tangon = michal.x;
                    report = report + tangon;
                    _fun00010_ip = 137; continue _fun00009;
 123:
                    tangon = 0.67;
                    report = tangon * oscard;
 137:
                    tangon = _closure2_slot1;
                    tangon = report + tangon;
                    entity['x'] = tangon;
                    tangon = _closure2_slot4;
                    oscard = _closure2_slot0;
                    if(tangon) { _fun00010_ip = 178; continue _fun00009 }
 160:
                    tangon = 3;
                    report = oscard / tangon;
                    tangon = michal.y;
                    report = report + tangon;
                    _fun00010_ip = 192; continue _fun00009;
 178:
                    tangon = 0.57;
                    report = tangon * oscard;
 192:
                    tangon = _closure2_slot1;
                    tangon = report + tangon;
                    entity['y'] = tangon;
                    tangon = _closure2_slot4;
                    report = _closure2_slot2;
                    zuuluu = 2;
                    zuuluu = zuuluu * report;
                    if(tangon) { _fun00010_ip = 233; continue _fun00009 }
 222:
                    michal = michal.size;
                    michal = zuuluu + michal;
                    _fun00010_ip = 236; continue _fun00009;
 233:
                    michal = zuuluu;
 236:
                    entity['size'] = michal;
                    return entity;
                }
            };
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        }
    };
    var _closure1_slot19 = entity;
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
    yankee = 1;
    tangon = oscard[yankee];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.View;
    var _closure1_slot4 = golfie;
    tangon = tangon.Image;
    var _closure1_slot5 = tangon;
    sizing = 2;
    tangon = oscard[sizing];
    tangon = foxtra.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = foxtra.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = foxtra.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = foxtra.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    kiloes = tangon.BADGE_SIZE;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.StatusSizes;
    var _closure1_slot10 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.StatusTypes;
    var _closure1_slot11 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.jsx;
    var _closure1_slot12 = golfie;
    tangon = tangon.jsxs;
    var _closure1_slot13 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.AVATAR_SIZE_MAP;
    tangon = 11;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AvatarSizes;
    tangon = tangon.NORMAL;
    offset = golfie[tangon];
    var _closure1_slot14 = offset;
    tangon = 12;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {};
    romeon = 'relative';
    verify['position'] = romeon;
    tangon['container'] = verify;
    verify = {};
    backup = 13;
    romeon = oscard[backup];
    romeon = report.bind(entity)(romeon);
    romeon = romeon.TABLET_ICON_YOU_WIDTH;
    romeon = romeon - offset;
    romeon = -romeon;
    result = romeon / sizing;
    romeon = 14;
    output = oscard[romeon];
    output = foxtra.bind(entity)(output);
    output = output.spacing;
    output = output.PX_24;
    output = result + output;
    verify['left'] = output;
    tangon['containerTablet'] = verify;
    verify = {};
    output = 'absolute';
    verify['position'] = output;
    tangon['content'] = verify;
    verify = {};
    output = oscard[romeon];
    output = foxtra.bind(entity)(output);
    output = output.unsafe_rawColors;
    output = output.PRIMARY_400;
    verify['backgroundColor'] = output;
    tangon['lowPriorityBadge'] = verify;
    verify = {'height': 22, 'width': 22};
    kiloes = kiloes / sizing;
    verify['borderRadius'] = kiloes;
    tangon['unread'] = verify;
    verify = {};
    verify['width'] = offset;
    verify['height'] = offset;
    tangon['avatarTablet'] = verify;
    verify = {};
    kiloes = oscard[romeon];
    kiloes = foxtra.bind(entity)(kiloes);
    kiloes = kiloes.spacing;
    kiloes = kiloes.PX_4;
    verify['padding'] = kiloes;
    tangon['avatarCutout'] = verify;
    verify = {'width': null, 'left': null, 'height': null, 'justifyContent': 'center', 'position': 'absolute', 'bottom': 0, 'top': 0};
    backup = oscard[backup];
    backup = report.bind(entity)(backup);
    backup = backup.TABLET_ICON_YOU_WIDTH;
    kiloes = backup - offset;
    backup = oscard[romeon];
    backup = foxtra.bind(entity)(backup);
    backup = backup.spacing;
    backup = backup.PX_24;
    backup = kiloes - backup;
    verify['width'] = backup;
    romeon = oscard[romeon];
    romeon = foxtra.bind(entity)(romeon);
    romeon = romeon.spacing;
    romeon = romeon.PX_16;
    romeon = offset + romeon;
    verify['left'] = romeon;
    verify['height'] = offset;
    tangon['usernameTablet'] = verify;
    verify = {};
    offset = 15;
    romeon = oscard[offset];
    romeon = report.bind(entity)(romeon);
    romeon = romeon.ICON_SIZE;
    romeon = romeon.md;
    verify['width'] = romeon;
    romeon = oscard[offset];
    romeon = report.bind(entity)(romeon);
    romeon = romeon.ICON_SIZE;
    romeon = romeon.md;
    verify['height'] = romeon;
    verify['opacity'] = yankee;
    tangon['tabBarIconSelected'] = verify;
    verify = {};
    yankee = oscard[offset];
    yankee = report.bind(entity)(yankee);
    yankee = yankee.ICON_SIZE;
    yankee = yankee.md;
    verify['width'] = yankee;
    offset = oscard[offset];
    offset = report.bind(entity)(offset);
    offset = offset.ICON_SIZE;
    offset = offset.md;
    verify['height'] = offset;
    offset = 0.5;
    verify['opacity'] = offset;
    tangon['tabBarIconUnselected'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot15 = tangon;
    tangon = {};
    golfie = 'function BadgableTabBarIconTsx1(){const{scaleDownAnimation,rotationAnimation,wobbleAnimationX,wobbleAnimationY}=this.__closure;return{transform:[{scale:scaleDownAnimation.get()},{rotate:rotationAnimation.get()+"deg"},{scaleX:wobbleAnimationX.get()},{scaleY:wobbleAnimationY.get()}]};}';
    tangon['code'] = golfie;
    var _closure1_slot16 = tangon;
    tangon = 35;
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
            report = _closure1_slot15;
            oscard = report.bind(tangon)();
            golfie = _closure1_slot1;
            yankee = _closure1_slot2;
            report = 20;
            report = yankee[report];
            report = golfie.bind(tangon)(report);
            report = report.bind(tangon)();
            verify = _closure1_slot0;
            golfie = 15;
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
            verify = _closure1_slot18;
            golfie = {};
            golfie['iconSize'] = yankee;
            verify = verify.bind(tangon)(golfie);
            entity = entity.bind(tangon)();
            vacuum = entity.value;
            echoed = entity.showDot;
            result = entity.lowPriority;
            golfie = _closure1_slot19;
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
            if(!yankee) { _fun00012_ip = 443; continue _fun00011 }
 305:
            report = _closure1_slot12;
            zuuluu = _closure1_slot4;
            michal = {};
            sizing = oscard.content;
            option = new Array(2);
            option[0] = sizing;
            option[1] = verify;
            michal['style'] = option;
            sizing = _closure1_slot12;
            verify = _closure1_slot17;
            option = {};
            option['value'] = vacuum;
            option['countA11yLabel'] = ctrled;
            option['unread'] = echoed;
            option['lowPriority'] = result;
            vacuum = _closure1_slot0;
            sequen = _closure1_slot2;
            result = 16;
            echoed = sequen[result];
            echoed = vacuum.bind(tangon)(echoed);
            ctrled = echoed.intl;
            echoed = ctrled.string;
            result = sequen[result];
            result = vacuum.bind(tangon)(result);
            result = result.t;
            result = result.sRUdBw;
            result = echoed.bind(ctrled)(result);
            option['unreadA11yLabel'] = result;
            option = sizing.bind(tangon)(verify, option);
            michal['children'] = option;
            golfie = report.bind(tangon)(zuuluu, michal);
 443:
            zuuluu = _closure1_slot13;
            michal = _closure1_slot4;
            if(!(entity == romeon)) { _fun00012_ip = 594; continue _fun00011 }
 458:
            entity = {};
            report = oscard.container;
            entity['style'] = report;
            verify = _closure1_slot12;
            option = _closure1_slot1;
            sizing = _closure1_slot2;
            report = 19;
            report = sizing[report];
            option = option.bind(tangon)(report);
            report = {};
            if(yankee) { _fun00012_ip = 504; continue _fun00011 }
 498:
            sizing = new Array(0);
            _fun00012_ip = 515; continue _fun00011;
 504:
            result = new Array(1);
            result[0] = output;
            sizing = result;
 515:
            report['cutouts'] = sizing;
            echoed = _closure1_slot12;
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
            _fun00012_ip = 733; continue _fun00011;
 594:
            report = {};
            oscard = oscard.container;
            report['style'] = oscard;
            verify = _closure1_slot12;
            option = _closure1_slot1;
            sizing = _closure1_slot2;
            oscard = 19;
            oscard = sizing[oscard];
            option = option.bind(tangon)(oscard);
            oscard = {};
            if(yankee) { _fun00012_ip = 640; continue _fun00011 }
 634:
            yankee = new Array(0);
            _fun00012_ip = 651; continue _fun00011;
 640:
            sizing = new Array(1);
            sizing[0] = output;
            yankee = sizing;
 651:
            oscard['cutouts'] = yankee;
            yankee = _closure1_slot12;
            offset = {};
            offset['ref'] = kiloes;
            kiloes = 'md';
            offset['size'] = kiloes;
            offset['color'] = foxtra;
            foxtra = 0.5;
            if(!backup) { _fun00012_ip = 694; continue _fun00011 }
 691:
            foxtra = 1;
 694:
            offset['opacity'] = foxtra;
            offset = yankee.bind(tangon)(romeon, offset);
            oscard['children'] = offset;
            option = verify.bind(tangon)(option, oscard);
            oscard = new Array(2);
            oscard[0] = option;
            oscard[1] = golfie;
            report['children'] = oscard;
            entity = report;
 733:
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
            ctrled = michal.navigation;
            var _closure2_slot0 = ctrled;
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
            michal = _closure1_slot15;
            yankee = michal.bind(tangon)();
            zuuluu = _closure1_slot1;
            oscard = _closure1_slot2;
            michal = 20;
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
            option = 21;
            zuuluu = entity[option];
            romeon = michal.bind(tangon)(zuuluu);
            verify = romeon.useStateFromStores;
            zuuluu = _closure1_slot9;
            oscard = new Array(1);
            oscard[0] = zuuluu;
            zuuluu = function() {
                michal = _closure1_slot9;
                entity = michal.getCurrentUser;
                entity = entity.bind(michal)();
                return entity;
            };
            limora = verify.bind(romeon)(oscard, zuuluu);
            oscard = _closure1_slot1;
            zuuluu = 22;
            zuuluu = entity[zuuluu];
            oscard = oscard.bind(tangon)(zuuluu);
            zuuluu = oscard.useName;
            foxtra = zuuluu.bind(oscard)(limora);
            entity = entity[option];
            oscard = michal.bind(tangon)(entity);
            zuuluu = oscard.useStateFromStores;
            entity = _closure1_slot8;
            michal = new Array(1);
            michal[0] = entity;
            entity = function() {
                michal = _closure1_slot8;
                entity = michal.getStatus;
                entity = entity.bind(michal)();
                return entity;
            };
            source = zuuluu.bind(oscard)(michal, entity);
            vacuum = null;
            entity = vacuum != source;
            if(!entity) { _fun00018_ip = 252; continue _fun00017 }
 238:
            michal = _closure1_slot11;
            michal = michal.UNKNOWN;
            entity = source !== michal;
 252:
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot2;
            michal = 23;
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
            verify = _closure1_slot2;
            michal = verify[option];
            kiloes = zuuluu.bind(tangon)(michal);
            backup = kiloes.useStateFromStores;
            michal = _closure1_slot7;
            romeon = new Array(1);
            romeon[0] = michal;
            michal = function() {
                michal = _closure1_slot7;
                entity = michal.getGuildId;
                entity = entity.bind(michal)();
                return entity;
            };
            backup = backup.bind(kiloes)(romeon, michal);
            romeon = _closure1_slot3;
            michal = romeon.useRef;
            romeon = michal.bind(romeon)(vacuum);
            michal = 24;
            michal = verify[michal];
            verify = zuuluu.bind(tangon)(michal);
            zuuluu = verify.useGuildTagCoachmark;
            kiloes = vacuum != backup;
            michal = null;
            if(!kiloes) { _fun00018_ip = 392; continue _fun00017 }
 389:
            michal = backup;
 392:
            michal = zuuluu.bind(verify)(romeon, michal);
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
            variable36 = option.bind(verify)(zuuluu, michal);
            _closure2_slot1 = variable36;
            update = 0.5;
            if(!sierra) { _fun00018_ip = 465; continue _fun00017 }
 462:
            update = 1;
 465:
            if(golfie) { _fun00018_ip = 502; continue _fun00017 }
 468:
            zuuluu = _closure1_slot0;
            option = _closure1_slot2;
            michal = 15;
            michal = option[michal];
            michal = zuuluu.bind(tangon)(michal);
            michal = michal.ICON_SIZE;
            option = michal.md;
            _fun00018_ip = 506; continue _fun00017;
 502:
            option = _closure1_slot14;
 506:
            zuuluu = _closure1_slot3;
            michal = zuuluu.useRef;
            papara = michal.bind(zuuluu)(vacuum);
            _closure2_slot2 = papara;
            zuuluu = _closure1_slot18;
            michal = {};
            michal['iconSize'] = option;
            verify = yankee.avatarCutout;
            verify = verify.padding;
            michal['offset'] = verify;
            michal['adjustForYouTab'] = golfie;
            echoed = zuuluu.bind(tangon)(michal);
            zuuluu = _closure1_slot19;
            michal = {};
            michal['iconSize'] = option;
            option = yankee.avatarCutout;
            option = option.padding;
            michal['offset'] = option;
            quebec = 11;
            michal['cutoutRadius'] = quebec;
            kiloes = 0;
            michal['badgeCount'] = kiloes;
            michal['isWindowLarge'] = golfie;
            michal = zuuluu.bind(tangon)(michal);
            verify = _closure1_slot0;
            zuuluu = _closure1_slot2;
            result = 25;
            option = zuuluu[result];
            backup = verify.bind(tangon)(option);
            option = backup.useSharedValue;
            sizing = 1;
            status = option.bind(backup)(sizing);
            _closure2_slot3 = status;
            option = zuuluu[result];
            backup = verify.bind(tangon)(option);
            option = backup.useSharedValue;
            target = option.bind(backup)(kiloes);
            _closure2_slot4 = target;
            option = zuuluu[result];
            backup = verify.bind(tangon)(option);
            option = backup.useSharedValue;
            record = option.bind(backup)(sizing);
            _closure2_slot5 = record;
            option = zuuluu[result];
            backup = verify.bind(tangon)(option);
            option = backup.useSharedValue;
            config = option.bind(backup)(sizing);
            _closure2_slot6 = config;
            output = _closure1_slot3;
            sizing = output.useCallback;
            backup = new Array(1);
            backup[0] = status;
            option = function() {
                offset = {};
                entity = 0.13;
                offset['mass'] = entity;
                tangon = _closure2_slot3;
                zuuluu = tangon.set;
                option = _closure1_slot0;
                verify = _closure1_slot2;
                entity = 25;
                michal = verify[entity];
                entity = undefined;
                golfie = option.bind(entity)(michal);
                oscard = golfie.withSequence;
                michal = 26;
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
            equals = sizing.bind(output)(option, backup);
            _closure2_slot7 = equals;
            output = _closure1_slot3;
            sizing = output.useCallback;
            backup = new Array(1);
            backup[0] = target;
            option = function() {
                tangon = _closure2_slot4;
                zuuluu = tangon.set;
                romeon = _closure1_slot0;
                kiloes = _closure1_slot2;
                michal = 25;
                report = kiloes[michal];
                entity = undefined;
                golfie = romeon.bind(entity)(report);
                oscard = golfie.withDelay;
                michal = kiloes[michal];
                yankee = romeon.bind(entity)(michal);
                offset = yankee.withSequence;
                foxtra = 26;
                michal = kiloes[foxtra];
                backup = romeon.bind(entity)(michal);
                verify = backup.withSpring;
                michal = 27;
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
            sequen = sizing.bind(output)(option, backup);
            _closure2_slot8 = sequen;
            output = _closure1_slot3;
            sizing = output.useCallback;
            backup = new Array(2);
            backup[0] = record;
            backup[1] = config;
            option = function() {
                oscard = _closure2_slot5;
                report = oscard.set;
                echoed = _closure1_slot0;
                update = _closure1_slot2;
                option = 25;
                michal = update[option];
                entity = undefined;
                offset = echoed.bind(entity)(michal);
                verify = offset.withDelay;
                michal = update[option];
                ctrled = echoed.bind(entity)(michal);
                source = ctrled.withSequence;
                sizing = 26;
                michal = update[sizing];
                romeon = echoed.bind(entity)(michal);
                yankee = romeon.withSpring;
                michal = 27;
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
            option = sizing.bind(output)(option, backup);
            _closure2_slot9 = option;
            output = _closure1_slot3;
            sizing = output.useCallback;
            backup = new Array(4);
            backup[0] = variable36;
            backup[1] = equals;
            backup[2] = sequen;
            backup[3] = option;
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
            output = sizing.bind(output)(option, backup);
            _closure2_slot10 = output;
            option = zuuluu[result];
            sizing = verify.bind(tangon)(option);
            backup = sizing.useAnimatedStyle;
            option = function() { // Original name: D
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
            sequen = {};
            sequen['scaleDownAnimation'] = status;
            sequen['rotationAnimation'] = target;
            sequen['wobbleAnimationX'] = record;
            sequen['wobbleAnimationY'] = config;
            option['__closure'] = sequen;
            sequen = 3024112617373.0;
            option['__workletHash'] = sequen;
            sequen = _closure1_slot16;
            option['__initData'] = sequen;
            equals = backup.bind(sizing)(option);
            sizing = _closure1_slot3;
            backup = sizing.useEffect;
            option = new Array(2);
            option[0] = ctrled;
            option[1] = output;
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
            report = backup.bind(sizing)(report, option);
            backup = new Array(0);
            report = zuuluu[quebec];
            option = verify.bind(tangon)(report);
            report = option.getStatusSize;
            zuuluu = zuuluu[quebec];
            zuuluu = verify.bind(tangon)(zuuluu);
            zuuluu = zuuluu.AvatarSizes;
            zuuluu = zuuluu.TABS_22;
            ctrled = report.bind(option)(zuuluu);
            if(!entity) { _fun00018_ip = 1045; continue _fun00017 }
 1042:
            entity = !oscard;
 1045:
            if(!entity) { _fun00018_ip = 1058; continue _fun00017 }
 1048:
            entity = backup.push;
            entity = entity.bind(backup)(michal);
 1058:
            zuuluu = _closure1_slot13;
            michal = _closure1_slot4;
            entity = {};
            report = undefined;
            if(!golfie) { _fun00018_ip = 1079; continue _fun00017 }
 1073:
            report = yankee.containerTablet;
 1079:
            entity['style'] = report;
            verify = _closure1_slot13;
            option = _closure1_slot4;
            report = {};
            sizing = yankee.container;
            report['style'] = sizing;
            report['ref'] = romeon;
            output = _closure1_slot12;
            sizing = _closure1_slot1;
            sequen = _closure1_slot2;
            romeon = 19;
            romeon = sequen[romeon];
            sizing = sizing.bind(tangon)(romeon);
            romeon = {};
            romeon['cutouts'] = backup;
            sequen = yankee.avatarCutout;
            romeon['style'] = sequen;
            record = _closure1_slot12;
            if(whisks) { _fun00018_ip = 1396; continue _fun00017 }
 1157:
            target = _closure1_slot1;
            config = _closure1_slot2;
            result = config[result];
            result = target.bind(tangon)(result);
            sequen = result.View;
            result = {};
            status = new Array(1);
            status[0] = equals;
            result['style'] = status;
            status = _closure1_slot12;
            config = config[quebec];
            target = target.bind(tangon)(config);
            config = {};
            config['user'] = limora;
            config['guildId'] = tangon;
            if(sierra) { _fun00018_ip = 1227; continue _fun00017 }
 1219:
            sierra = yankee.tabBarIconUnselected;
            _fun00018_ip = 1247; continue _fun00017;
 1227:
            if(golfie) { _fun00018_ip = 1238; continue _fun00017 }
 1230:
            equals = yankee.tabBarIconSelected;
            _fun00018_ip = 1244; continue _fun00017;
 1238:
            equals = yankee.avatarTablet;
 1244:
            sierra = equals;
 1247:
            config['style'] = sierra;
            sierra = undefined;
            if(!whisks) { _fun00018_ip = 1266; continue _fun00017 }
 1256:
            equals = {};
            equals['tintColor'] = cntext;
            sierra = equals;
 1266:
            config['avatarStyle'] = sierra;
            equals = _closure1_slot0;
            sierra = _closure1_slot2;
            sierra = sierra[quebec];
            sierra = equals.bind(tangon)(sierra);
            equals = sierra.AvatarSizes;
            if(golfie) { _fun00018_ip = 1305; continue _fun00017 }
 1297:
            sierra = equals.TABS_22;
            _fun00018_ip = 1311; continue _fun00017;
 1305:
            sierra = equals.NORMAL;
 1311:
            config['size'] = sierra;
            sierra = false;
            config['animate'] = sierra;
            sierra = null;
            if(!whisks) { _fun00018_ip = 1347; continue _fun00017 }
 1327:
            equals = _closure1_slot1;
            quebec = _closure1_slot2;
            whisks = 29;
            whisks = quebec[whisks];
            sierra = equals.bind(tangon)(whisks);
 1347:
            config['source'] = sierra;
            sierra = true;
            config['needsOffscreenAlphaCompositing'] = sierra;
            whisks = vacuum == limora;
            sierra = undefined;
            if(whisks) { _fun00018_ip = 1373; continue _fun00017 }
 1367:
            sierra = limora.avatarDecoration;
 1373:
            config['avatarDecoration'] = sierra;
            config = status.bind(tangon)(target, config);
            result['children'] = config;
            result = record.bind(tangon)(sequen, result);
            _fun00018_ip = 1457; continue _fun00017;
 1396:
            config = _closure1_slot0;
            target = _closure1_slot2;
            sequen = 28;
            sequen = target[sequen];
            sequen = config.bind(tangon)(sequen);
            config = sequen.YouTabLottie;
            sequen = {};
            sequen['ref'] = papara;
            papara = 'lg';
            if(golfie) { _fun00018_ip = 1439; continue _fun00017 }
 1435:
            papara = 'md';
 1439:
            sequen['size'] = papara;
            sequen['color'] = cntext;
            sequen['opacity'] = update;
            result = record.bind(tangon)(config, sequen);
 1457:
            romeon['children'] = result;
            sizing = output.bind(tangon)(sizing, romeon);
            romeon = new Array(2);
            romeon[0] = sizing;
            backup = backup.length;
            backup = backup > kiloes;
            if(!backup) { _fun00018_ip = 1606; continue _fun00017 }
 1487:
            output = _closure1_slot12;
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
            update = _closure1_slot12;
            echoed = _closure1_slot1;
            sequen = _closure1_slot2;
            result = 30;
            result = sequen[result];
            echoed = echoed.bind(tangon)(result);
            result = {};
            if(!(vacuum == ctrled)) { _fun00018_ip = 1568; continue _fun00017 }
 1558:
            vacuum = _closure1_slot10;
            ctrled = vacuum.MEDIUM;
 1568:
            result['size'] = ctrled;
            result['status'] = source;
            source = {};
            ctrled = 2;
            source['margin'] = ctrled;
            result['style'] = source;
            result = update.bind(tangon)(echoed, result);
            kiloes['children'] = result;
            backup = output.bind(tangon)(sizing, kiloes);
 1606:
            romeon[1] = backup;
            report['children'] = romeon;
            option = verify.bind(tangon)(option, report);
            report = new Array(4);
            report[0] = option;
            if(!oscard) { _fun00018_ip = 1707; continue _fun00017 }
 1631:
            romeon = _closure1_slot12;
            kiloes = _closure1_slot1;
            sizing = _closure1_slot2;
            option = 31;
            option = sizing[option];
            verify = kiloes.bind(tangon)(option);
            option = {};
            backup = 14;
            backup = sizing[backup];
            backup = kiloes.bind(tangon)(backup);
            backup = backup.colors;
            backup = backup.STATUS_WARNING;
            option['themedColor'] = backup;
            backup = 32;
            backup = sizing[backup];
            backup = kiloes.bind(tangon)(backup);
            option['source'] = backup;
            oscard = romeon.bind(tangon)(verify, option);
 1707:
            report[1] = oscard;
            verify = _closure1_slot12;
            option = _closure1_slot0;
            romeon = _closure1_slot2;
            oscard = 33;
            oscard = romeon[oscard];
            oscard = option.bind(tangon)(oscard);
            option = oscard.MobileTrialUserSettingsAvatarBadge;
            oscard = {};
            oscard = verify.bind(tangon)(option, oscard);
            report[2] = oscard;
            oscard = undefined;
            if(!golfie) { _fun00018_ip = 1841; continue _fun00017 }
 1758:
            verify = _closure1_slot12;
            option = _closure1_slot4;
            golfie = {};
            yankee = yankee.usernameTablet;
            golfie['style'] = yankee;
            romeon = _closure1_slot12;
            yankee = _closure1_slot0;
            backup = _closure1_slot2;
            offset = 34;
            offset = backup[offset];
            offset = yankee.bind(tangon)(offset);
            yankee = offset.Text;
            offset = {'variant': 'text-md/semibold', 'lineClamp': 1, 'color': 'interactive-active', 'maxFontSizeMultiplier': 2};
            offset['children'] = foxtra;
            offset = romeon.bind(tangon)(yankee, offset);
            golfie['children'] = offset;
            oscard = verify.bind(tangon)(option, golfie);
 1841:
            report[3] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['YouIcon'] = michal;
    return entity;
})();