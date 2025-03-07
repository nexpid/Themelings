// app/modules/launchpad/native/shared/SimpleGuildContainer.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
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
    option = tangon.bind(entity)(golfie);
    var _closure1_slot3 = option;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.Pressable;
    var _closure1_slot4 = golfie;
    tangon = tangon.View;
    var _closure1_slot5 = tangon;
    tangon = 2;
    golfie = oscard[tangon];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.jsx;
    var _closure1_slot6 = golfie;
    golfie = oscard[tangon];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.Fragment;
    var _closure1_slot7 = golfie;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsxs;
    var _closure1_slot8 = tangon;
    tangon = {'mass': 0.2, 'damping': 40, 'stiffness': 300, 'overshootClamping': true, 'restSpeedThreshold': 1};
    var _closure1_slot9 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    verify = report.bind(entity)(tangon);
    golfie = verify.createStyles;
    tangon = {};
    offset = {'position': 'absolute', 'right': 4294967292, 'bottom': 0};
    tangon['badgeWrapper'] = offset;
    tangon = golfie.bind(verify)(tangon);
    var _closure1_slot10 = tangon;
    golfie = option.memo;
    tangon = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            offset = entity.badge;
            verify = entity.unread;
            option = entity.backgroundColor;
            entity = _closure1_slot10;
            report = undefined;
            golfie = entity.bind(report)();
            entity = 0;
            if(!(offset <= entity)) { _fun00002_ip = 44; continue _fun00001 }
 39:
            entity = null;
            if(!verify) { _fun00002_ip = 115; continue _fun00001 }
 44:
            tangon = _closure1_slot6;
            zuuluu = _closure1_slot5;
            michal = {};
            golfie = golfie.badgeWrapper;
            michal['style'] = golfie;
            golfie = _closure1_slot1;
            yankee = _closure1_slot2;
            oscard = 4;
            oscard = yankee[oscard];
            golfie = golfie.bind(report)(oscard);
            oscard = {};
            oscard['value'] = offset;
            oscard['unread'] = verify;
            oscard['backgroundColor'] = option;
            oscard = tangon.bind(report)(golfie, oscard);
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 115:
            return entity;
        }
    };
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot11 = tangon;
    golfie = option.memo;
    tangon = function(argFoo) {
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            golfie = entity.guildId;
            oscard = entity.activityIndicatorState;
            option = entity.backgroundColor;
            entity = null;
            zuuluu = entity == oscard;
            report = undefined;
            michal = undefined;
            if(zuuluu) { _fun00004_ip = 37; continue _fun00003 }
 32:
            michal = oscard.source;
 37:
            if(!(entity == michal)) { _fun00004_ip = 101; continue _fun00003 }
 41:
            michal = entity != golfie;
            entity = null;
            if(!michal) { _fun00004_ip = 99; continue _fun00003 }
 50:
            tangon = _closure1_slot6;
            zuuluu = _closure1_slot1;
            verify = _closure1_slot2;
            michal = 5;
            michal = verify[michal];
            zuuluu = zuuluu.bind(report)(michal);
            michal = {};
            michal['guildId'] = golfie;
            golfie = {};
            golfie['backgroundColor'] = option;
            michal['style'] = golfie;
            entity = tangon.bind(report)(zuuluu, michal);
 99:
            _fun00004_ip = 183; continue _fun00003;
 101:
            tangon = _closure1_slot6;
            zuuluu = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 5;
            michal = golfie[michal];
            michal = zuuluu.bind(report)(michal);
            zuuluu = michal.GuildsBarActivityIndicatorBase;
            michal = {};
            golfie = {};
            golfie['backgroundColor'] = option;
            michal['style'] = golfie;
            golfie = oscard.source;
            michal['source'] = golfie;
            golfie = oscard.IconComponent;
            michal['IconComponent'] = golfie;
            oscard = oscard.isCurrentUserConnected;
            michal['isCurrentUserConnected'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 183:
            return entity;
        }
    };
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot12 = tangon;
    tangon = {};
    golfie = 'function SimpleGuildContainerTsx1(){const{targetRadius}=this.__closure;return targetRadius;}';
    tangon['code'] = golfie;
    var _closure1_slot13 = tangon;
    tangon = {};
    golfie = 'function SimpleGuildContainerTsx2(){const{selected}=this.__closure;return selected?1:0;}';
    tangon['code'] = golfie;
    var _closure1_slot14 = tangon;
    tangon = {};
    golfie = "function SimpleGuildContainerTsx3(){const{withSpring,toRadius,springConfig,GUILD_SIZE,iconBackground}=this.__closure;return{borderRadius:withSpring(toRadius.get(),springConfig),width:GUILD_SIZE,height:GUILD_SIZE,overflow:'hidden',backgroundColor:iconBackground.color};}";
    tangon['code'] = golfie;
    var _closure1_slot15 = tangon;
    tangon = {};
    golfie = "function SimpleGuildContainerTsx4(){const{withSpring,toRadius,springConfig,interpolate,toStrokeWidth,borderColor,GUILD_SIZE}=this.__closure;return{borderRadius:withSpring(toRadius.get()+2,springConfig),borderWidth:withSpring(interpolate(toStrokeWidth.get(),[0,1],[0,2]),springConfig),borderColor:borderColor,position:'absolute',top:-2,left:-2,width:GUILD_SIZE+4,height:GUILD_SIZE+4};}";
    tangon['code'] = golfie;
    var _closure1_slot16 = tangon;
    tangon = {};
    golfie = "function SimpleGuildContainerTsx5(){const{withSpring,toRadius,springConfig,interpolate,toStrokeWidth,backgroundColor,GUILD_SIZE}=this.__closure;return{borderRadius:withSpring(toRadius.get(),springConfig),borderWidth:withSpring(interpolate(toStrokeWidth.get(),[0,1],[0,3]),springConfig),borderColor:backgroundColor,position:'absolute',top:0,left:0,width:GUILD_SIZE,height:GUILD_SIZE};}";
    tangon['code'] = golfie;
    var _closure1_slot17 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/launchpad/native/shared/SimpleGuildContainer.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: SimpleGuildContainer
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            source = michal.guildIconRef;
            backup = michal.guildId;
            ctrled = michal.style;
            kiloes = michal.children;
            vacuum = michal.selected;
            var _closure2_slot0 = vacuum;
            config = michal.size;
            tangon = undefined;
            if(!(config === tangon)) { _fun00006_ip = 50; continue _fun00005 }
 47:
            config = 48;
 50:
            var _closure2_slot1 = config;
            output = michal.borderRadius;
            if(!(output === tangon)) { _fun00006_ip = 106; continue _fun00005 }
 63:
            zuuluu = 24;
            if(!vacuum) { _fun00006_ip = 103; continue _fun00005 }
 69:
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            report = 6;
            report = golfie[report];
            report = oscard.bind(tangon)(report);
            report = report.radii;
            zuuluu = report.lg;
 103:
            output = zuuluu;
 106:
            var _closure2_slot2 = output;
            offset = michal.badge;
            var _closure2_slot3 = offset;
            verify = michal.unread;
            var _closure2_slot4 = verify;
            yankee = michal.backgroundColor;
            var _closure2_slot5 = yankee;
            update = michal.folder;
            if(!(update === tangon)) { _fun00006_ip = 151; continue _fun00005 }
 149:
            update = false;
 151:
            result = michal.usingCutout;
            if(!(result === tangon)) { _fun00006_ip = 163; continue _fun00005 }
 161:
            result = false;
 163:
            var _closure2_slot6 = result;
            foxtra = michal.activityIndicatorState;
            var _closure2_slot7 = foxtra;
            romeon = michal.accessibilityLabel;
            report = michal.onAccessibilityAction;
            sizing = michal.onLayout;
            var _closure2_slot8 = tangon;
            zuuluu = _closure1_slot1;
            golfie = _closure1_slot2;
            michal = 7;
            michal = golfie[michal];
            michal = zuuluu.bind(tangon)(michal);
            michal = michal.bind(tangon)();
            sequen = michal.iconStroke;
            _closure2_slot8 = sequen;
            echoed = michal.iconBackground;
            option = _closure1_slot3;
            golfie = option.useMemo;
            zuuluu = new Array(8);
            zuuluu[0] = vacuum;
            zuuluu[1] = offset;
            zuuluu[2] = verify;
            zuuluu[3] = result;
            zuuluu[4] = config;
            zuuluu[5] = yankee;
            zuuluu[6] = output;
            zuuluu[7] = foxtra;
            michal = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    michal = _closure2_slot0;
                    offset = null;
                    entity = null;
                    if(!michal) { _fun00008_ip = 449; continue _fun00007 }
 17:
                    michal = _closure2_slot6;
                    if(michal) { _fun00008_ip = 230; continue _fun00007 }
 30:
                    report = _closure1_slot8;
                    tangon = _closure1_slot7;
                    zuuluu = {};
                    romeon = _closure1_slot6;
                    yankee = _closure1_slot5;
                    oscard = {};
                    golfie = {'borderRadius': null, 'borderWidth': 2, 'borderColor': null, 'position': 'absolute', 'top': 4294967294, 'left': 4294967294};
                    kiloes = _closure2_slot2;
                    michal = 2;
                    michal = kiloes + michal;
                    golfie['borderRadius'] = michal;
                    backup = _closure1_slot1;
                    foxtra = _closure1_slot2;
                    michal = 6;
                    foxtra = foxtra[michal];
                    michal = undefined;
                    foxtra = backup.bind(michal)(foxtra);
                    foxtra = foxtra.unsafe_rawColors;
                    foxtra = foxtra.BRAND_500;
                    golfie['borderColor'] = foxtra;
                    backup = _closure2_slot1;
                    foxtra = 4;
                    sizing = backup + foxtra;
                    golfie['width'] = sizing;
                    foxtra = backup + foxtra;
                    golfie['height'] = foxtra;
                    oscard['style'] = golfie;
                    golfie = romeon.bind(michal)(yankee, oscard);
                    oscard = new Array(2);
                    oscard[0] = golfie;
                    golfie = {};
                    foxtra = {'borderRadius': null, 'borderWidth': 3, 'borderColor': null, 'position': 'absolute', 'top': 0, 'left': 0};
                    foxtra['borderRadius'] = kiloes;
                    kiloes = _closure2_slot5;
                    foxtra['borderColor'] = kiloes;
                    foxtra['width'] = backup;
                    foxtra['height'] = backup;
                    golfie['style'] = foxtra;
                    golfie = romeon.bind(michal)(yankee, golfie);
                    oscard[1] = golfie;
                    zuuluu['children'] = oscard;
                    michal = report.bind(michal)(tangon, zuuluu);
                    _fun00008_ip = 446; continue _fun00007;
 230:
                    oscard = _closure1_slot6;
                    tangon = _closure1_slot1;
                    report = _closure1_slot2;
                    zuuluu = 8;
                    zuuluu = report[zuuluu];
                    report = undefined;
                    tangon = tangon.bind(report)(zuuluu);
                    zuuluu = {'style': null, 'cutoutTopRightSize': null, 'cutoutTopRightInsetX': 8, 'cutoutTopRightInsetY': 8, 'cutoutBottomRightSize': null, 'cutoutBottomRightInsetX': 6, 'cutoutBottomRightInsetY': 7};
                    golfie = {'position': 'absolute', 'top': 4294967294, 'left': 4294967294};
                    zuuluu['style'] = golfie;
                    golfie = _closure2_slot7;
                    yankee = offset == golfie;
                    golfie = undefined;
                    if(yankee) { _fun00008_ip = 312; continue _fun00007 }
 303:
                    yankee = _closure2_slot7;
                    golfie = yankee.source;
 312:
                    yankee = offset != golfie;
                    offset = 0;
                    golfie = 0;
                    if(!yankee) { _fun00008_ip = 326; continue _fun00007 }
 323:
                    golfie = 13;
 326:
                    zuuluu['cutoutTopRightSize'] = golfie;
                    golfie = _closure2_slot3;
                    yankee = golfie > offset;
                    golfie = 13;
                    if(yankee) { _fun00008_ip = 361; continue _fun00007 }
 346:
                    yankee = _closure2_slot4;
                    offset = 0;
                    if(!yankee) { _fun00008_ip = 358; continue _fun00007 }
 355:
                    offset = 11;
 358:
                    golfie = offset;
 361:
                    zuuluu['cutoutBottomRightSize'] = golfie;
                    yankee = 6;
                    golfie = _closure2_slot1;
                    offset = 4;
                    offset = golfie + offset;
                    zuuluu['imageSize'] = offset;
                    offset = _closure1_slot1;
                    verify = _closure1_slot2;
                    verify = verify[yankee];
                    verify = offset.bind(report)(verify);
                    verify = verify.unsafe_rawColors;
                    verify = verify.BRAND_500;
                    zuuluu['imageBackgroundColor'] = verify;
                    verify = _closure2_slot2;
                    option = 2;
                    option = verify + option;
                    zuuluu['imageBorderRadius'] = option;
                    zuuluu['clipInnerAmount'] = golfie;
                    michal = oscard.bind(report)(tangon, zuuluu);
 446:
                    entity = michal;
 449:
                    return entity;
                }
            };
            golfie = golfie.bind(option)(michal, zuuluu);
            zuuluu = option.useMemo;
            michal = new Array(4);
            michal[0] = output;
            michal[1] = result;
            michal[2] = config;
            michal[3] = sequen;
            entity = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    michal = _closure2_slot6;
                    entity = null;
                    if(michal) { _fun00010_ip = 85; continue _fun00009 }
 12:
                    report = _closure1_slot6;
                    tangon = _closure1_slot5;
                    zuuluu = {};
                    michal = {'position': 'absolute', 'borderWidth': 1};
                    golfie = _closure2_slot8;
                    golfie = golfie.color;
                    michal['borderColor'] = golfie;
                    golfie = _closure2_slot2;
                    michal['borderRadius'] = golfie;
                    oscard = _closure2_slot1;
                    michal['width'] = oscard;
                    michal['height'] = oscard;
                    zuuluu['style'] = michal;
                    michal = undefined;
                    entity = report.bind(michal)(tangon, zuuluu);
 85:
                    return entity;
                }
            };
            option = zuuluu.bind(option)(entity, michal);
            zuuluu = _closure1_slot8;
            michal = _closure1_slot5;
            entity = {};
            entity['style'] = ctrled;
            ctrled = true;
            entity['accessible'] = ctrled;
            ctrled = {};
            ctrled['selected'] = vacuum;
            entity['accessibilityState'] = ctrled;
            ctrled = 'button';
            entity['accessibilityRole'] = ctrled;
            entity['accessibilityLabel'] = romeon;
            ctrled = {};
            romeon = 'activate';
            ctrled['name'] = romeon;
            romeon = new Array(1);
            romeon[0] = ctrled;
            entity['accessibilityActions'] = romeon;
            entity['onAccessibilityAction'] = report;
            romeon = _closure1_slot6;
            report = {};
            report['ref'] = source;
            report['onLayout'] = sizing;
            sizing = {};
            sizing['borderRadius'] = output;
            output = 'hidden';
            sizing['overflow'] = output;
            output = 'transparent';
            if(result) { _fun00006_ip = 461; continue _fun00005 }
 447:
            result = yankee;
            if(update) { _fun00006_ip = 458; continue _fun00005 }
 453:
            result = echoed.color;
 458:
            output = result;
 461:
            sizing['backgroundColor'] = output;
            report['style'] = sizing;
            report['children'] = kiloes;
            romeon = romeon.bind(tangon)(michal, report);
            report = new Array(5);
            report[0] = romeon;
            report[1] = option;
            report[2] = golfie;
            option = _closure1_slot6;
            romeon = _closure1_slot12;
            golfie = {};
            golfie['backgroundColor'] = yankee;
            golfie['guildId'] = backup;
            golfie['activityIndicatorState'] = foxtra;
            golfie = option.bind(tangon)(romeon, golfie);
            report[3] = golfie;
            golfie = _closure1_slot11;
            oscard = {};
            oscard['backgroundColor'] = yankee;
            oscard['badge'] = offset;
            oscard['unread'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[4] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['SimpleGuildContainer'] = tangon;
    michal = function(argFoo) { // Original name: SimpleGuildContainerAnimated
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            michal = argFoo;
            backup = michal.guildIconRef;
            ctrled = michal.guildId;
            foxtra = michal.style;
            record = michal.children;
            offset = michal.selected;
            var _closure2_slot0 = offset;
            zuuluu = michal.size;
            zuuluu = michal.borderRadius;
            echoed = michal.badge;
            result = michal.unread;
            update = michal.backgroundColor;
            var _closure2_slot1 = update;
            tangon = michal.folder;
            tangon = michal.usingCutout;
            source = michal.activityIndicatorState;
            verify = michal.accessibilityLabel;
            option = michal.onAccessibilityAction;
            golfie = michal.onLayout;
            romeon = michal.onPress;
            yankee = michal.onLongPress;
            report = undefined;
            var _closure2_slot3 = report;
            var _closure2_slot4 = report;
            var _closure2_slot5 = report;
            var _closure2_slot6 = report;
            oscard = _closure1_slot1;
            kiloes = _closure1_slot2;
            tangon = 7;
            tangon = kiloes[tangon];
            tangon = oscard.bind(report)(tangon);
            tangon = tangon.bind(report)();
            vacuum = tangon.iconBackground;
            var _closure2_slot2 = vacuum;
            if(offset) { _fun00012_ip = 188; continue _fun00011 }
 171:
            tangon = null;
            tangon = tangon != zuuluu;
            output = 24;
            if(!tangon) { _fun00012_ip = 186; continue _fun00011 }
 183:
            output = zuuluu;
 186:
            _fun00012_ip = 219; continue _fun00011;
 188:
            tangon = _closure1_slot1;
            oscard = _closure1_slot2;
            zuuluu = 6;
            zuuluu = oscard[zuuluu];
            zuuluu = tangon.bind(report)(zuuluu);
            zuuluu = zuuluu.radii;
            output = zuuluu.lg;
 219:
            _closure2_slot3 = output;
            target = _closure1_slot0;
            sequen = _closure1_slot2;
            kiloes = 9;
            zuuluu = sequen[kiloes];
            oscard = target.bind(report)(zuuluu);
            tangon = oscard.useDerivedValue;
            zuuluu = function() { // Original name: V
                entity = _closure2_slot3;
                return entity;
            };
            sizing = {};
            sizing['targetRadius'] = output;
            zuuluu['__closure'] = sizing;
            sizing = 5259600477627.0;
            zuuluu['__workletHash'] = sizing;
            sizing = _closure1_slot13;
            zuuluu['__initData'] = sizing;
            status = tangon.bind(oscard)(zuuluu);
            _closure2_slot4 = status;
            zuuluu = sequen[kiloes];
            oscard = target.bind(report)(zuuluu);
            tangon = oscard.useDerivedValue;
            zuuluu = function() { // Original name: z
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    michal = _closure2_slot0;
                    entity = 0;
                    if(!michal) { _fun00014_ip = 15; continue _fun00013 }
 12:
                    entity = 1;
 15:
                    return entity;
                }
            };
            sizing = {};
            sizing['selected'] = offset;
            zuuluu['__closure'] = sizing;
            sizing = 12318204664732.0;
            zuuluu['__workletHash'] = sizing;
            sizing = _closure1_slot14;
            zuuluu['__initData'] = sizing;
            config = tangon.bind(oscard)(zuuluu);
            _closure2_slot5 = config;
            zuuluu = sequen[kiloes];
            oscard = target.bind(report)(zuuluu);
            tangon = oscard.useAnimatedStyle;
            zuuluu = function() { // Original name: H
                entity = {'borderRadius': null, 'width': 48, 'height': 48, 'overflow': 'hidden'};
                report = _closure1_slot0;
                tangon = _closure1_slot2;
                michal = 10;
                tangon = tangon[michal];
                michal = undefined;
                oscard = report.bind(michal)(tangon);
                report = oscard.withSpring;
                golfie = _closure2_slot4;
                tangon = golfie.get;
                tangon = tangon.bind(golfie)();
                zuuluu = _closure1_slot9;
                zuuluu = report.bind(oscard)(tangon, zuuluu);
                entity['borderRadius'] = zuuluu;
                michal = _closure2_slot2;
                michal = michal.color;
                entity['backgroundColor'] = michal;
                return entity;
            };
            sizing = {};
            sierra = 10;
            output = sequen[sierra];
            output = target.bind(report)(output);
            output = output.withSpring;
            sizing['withSpring'] = output;
            sizing['toRadius'] = status;
            cntext = _closure1_slot9;
            sizing['springConfig'] = cntext;
            output = 48;
            sizing['GUILD_SIZE'] = output;
            sizing['iconBackground'] = vacuum;
            zuuluu['__closure'] = sizing;
            sizing = 11339684212259.0;
            zuuluu['__workletHash'] = sizing;
            sizing = _closure1_slot15;
            zuuluu['__initData'] = sizing;
            papara = tangon.bind(oscard)(zuuluu);
            sizing = _closure1_slot1;
            zuuluu = 6;
            zuuluu = sequen[zuuluu];
            zuuluu = sizing.bind(report)(zuuluu);
            zuuluu = zuuluu.unsafe_rawColors;
            limora = zuuluu.BRAND_500;
            _closure2_slot6 = limora;
            zuuluu = sequen[kiloes];
            oscard = target.bind(report)(zuuluu);
            tangon = oscard.useAnimatedStyle;
            zuuluu = function() { // Original name: j
                entity = {'borderRadius': null, 'borderWidth': null, 'borderColor': null, 'position': 'absolute', 'top': 4294967294, 'left': 4294967294, 'width': 52, 'height': 52};
                option = _closure1_slot0;
                verify = _closure1_slot2;
                zuuluu = 10;
                michal = verify[zuuluu];
                golfie = undefined;
                offset = option.bind(golfie)(michal);
                report = offset.withSpring;
                yankee = _closure2_slot4;
                tangon = yankee.get;
                yankee = tangon.bind(yankee)();
                tangon = 2;
                tangon = yankee + tangon;
                oscard = _closure1_slot9;
                tangon = report.bind(offset)(tangon, oscard);
                entity['borderRadius'] = tangon;
                zuuluu = verify[zuuluu];
                report = option.bind(golfie)(zuuluu);
                tangon = report.withSpring;
                zuuluu = 9;
                zuuluu = verify[zuuluu];
                offset = option.bind(golfie)(zuuluu);
                verify = offset.interpolate;
                golfie = _closure2_slot5;
                zuuluu = golfie.get;
                option = zuuluu.bind(golfie)();
                golfie = [0, 1];
                zuuluu = [0, 2];
                zuuluu = verify.bind(offset)(option, golfie, zuuluu);
                zuuluu = tangon.bind(report)(zuuluu, oscard);
                entity['borderWidth'] = zuuluu;
                michal = _closure2_slot6;
                entity['borderColor'] = michal;
                return entity;
            };
            vacuum = {};
            whisks = sequen[sierra];
            whisks = target.bind(report)(whisks);
            whisks = whisks.withSpring;
            vacuum['withSpring'] = whisks;
            vacuum['toRadius'] = status;
            vacuum['springConfig'] = cntext;
            whisks = sequen[kiloes];
            whisks = target.bind(report)(whisks);
            whisks = whisks.interpolate;
            vacuum['interpolate'] = whisks;
            vacuum['toStrokeWidth'] = config;
            vacuum['borderColor'] = limora;
            vacuum['GUILD_SIZE'] = output;
            zuuluu['__closure'] = vacuum;
            vacuum = 1481885125958.0;
            zuuluu['__workletHash'] = vacuum;
            vacuum = _closure1_slot16;
            zuuluu['__initData'] = vacuum;
            vacuum = tangon.bind(oscard)(zuuluu);
            zuuluu = sequen[kiloes];
            tangon = target.bind(report)(zuuluu);
            zuuluu = tangon.useAnimatedStyle;
            entity = function() { // Original name: M
                entity = {'borderRadius': null, 'borderWidth': null, 'borderColor': null, 'position': 'absolute', 'top': 0, 'left': 0, 'width': 48, 'height': 48};
                option = _closure1_slot0;
                verify = _closure1_slot2;
                zuuluu = 10;
                michal = verify[zuuluu];
                golfie = undefined;
                offset = option.bind(golfie)(michal);
                report = offset.withSpring;
                yankee = _closure2_slot4;
                tangon = yankee.get;
                tangon = tangon.bind(yankee)();
                oscard = _closure1_slot9;
                tangon = report.bind(offset)(tangon, oscard);
                entity['borderRadius'] = tangon;
                zuuluu = verify[zuuluu];
                report = option.bind(golfie)(zuuluu);
                tangon = report.withSpring;
                zuuluu = 9;
                zuuluu = verify[zuuluu];
                offset = option.bind(golfie)(zuuluu);
                verify = offset.interpolate;
                golfie = _closure2_slot5;
                zuuluu = golfie.get;
                option = zuuluu.bind(golfie)();
                golfie = [0, 1];
                zuuluu = [0, 3];
                zuuluu = verify.bind(offset)(option, golfie, zuuluu);
                zuuluu = tangon.bind(report)(zuuluu, oscard);
                entity['borderWidth'] = zuuluu;
                michal = _closure2_slot1;
                entity['borderColor'] = michal;
                return entity;
            };
            oscard = {};
            sierra = sequen[sierra];
            sierra = target.bind(report)(sierra);
            sierra = sierra.withSpring;
            oscard['withSpring'] = sierra;
            oscard['toRadius'] = status;
            oscard['springConfig'] = cntext;
            cntext = sequen[kiloes];
            cntext = target.bind(report)(cntext);
            cntext = cntext.interpolate;
            oscard['interpolate'] = cntext;
            oscard['toStrokeWidth'] = config;
            oscard['backgroundColor'] = update;
            oscard['GUILD_SIZE'] = output;
            entity['__closure'] = oscard;
            oscard = 11592745547551.0;
            entity['__workletHash'] = oscard;
            oscard = _closure1_slot17;
            entity['__initData'] = oscard;
            cntext = zuuluu.bind(tangon)(entity);
            tangon = _closure1_slot8;
            zuuluu = _closure1_slot7;
            entity = {};
            output = _closure1_slot6;
            oscard = sequen[kiloes];
            oscard = sizing.bind(report)(oscard);
            config = oscard.View;
            oscard = {};
            oscard['style'] = papara;
            oscard['children'] = record;
            config = output.bind(report)(config, oscard);
            oscard = new Array(5);
            oscard[0] = config;
            config = sequen[kiloes];
            config = sizing.bind(report)(config);
            record = config.View;
            config = {};
            config['style'] = cntext;
            config = output.bind(report)(record, config);
            oscard[1] = config;
            kiloes = sequen[kiloes];
            kiloes = sizing.bind(report)(kiloes);
            sizing = kiloes.View;
            kiloes = {};
            kiloes['style'] = vacuum;
            kiloes = output.bind(report)(sizing, kiloes);
            oscard[2] = kiloes;
            sizing = _closure1_slot12;
            kiloes = {};
            kiloes['backgroundColor'] = update;
            kiloes['guildId'] = ctrled;
            kiloes['activityIndicatorState'] = source;
            kiloes = output.bind(report)(sizing, kiloes);
            oscard[3] = kiloes;
            sizing = _closure1_slot11;
            kiloes = {};
            kiloes['backgroundColor'] = update;
            kiloes['badge'] = echoed;
            kiloes['unread'] = result;
            kiloes = output.bind(report)(sizing, kiloes);
            oscard[4] = kiloes;
            entity['children'] = oscard;
            oscard = tangon.bind(report)(zuuluu, entity);
            entity = null;
            if(!(entity == romeon)) { _fun00012_ip = 976; continue _fun00011 }
 950:
            tangon = _closure1_slot6;
            zuuluu = _closure1_slot5;
            entity = {};
            entity['style'] = foxtra;
            entity['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, entity);
            _fun00012_ip = 1054; continue _fun00011;
 976:
            tangon = _closure1_slot6;
            zuuluu = _closure1_slot4;
            michal = {};
            michal['ref'] = backup;
            michal['style'] = foxtra;
            michal['onPress'] = romeon;
            michal['onLongPress'] = yankee;
            yankee = 'button';
            michal['accessibilityRole'] = yankee;
            yankee = true;
            michal['accessible'] = yankee;
            michal['accessibilityLabel'] = verify;
            verify = {};
            verify['selected'] = offset;
            michal['accessibilityState'] = verify;
            michal['onAccessibilityAction'] = option;
            michal['onLayout'] = golfie;
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 1054:
            return entity;
        }
    };
    zuuluu['SimpleGuildContainerAnimated'] = michal;
    return entity;
})();