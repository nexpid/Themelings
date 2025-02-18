// app/modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowAvatarStack.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    option = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.CHANNEL_SPRING_CONFIG;
    var _closure1_slot7 = tangon;
    tangon = 5;
    golfie = oscard[tangon];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.jsx;
    var _closure1_slot8 = golfie;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsxs;
    var _closure1_slot9 = tangon;
    tangon = 17;
    golfie = {'damping': 17, 'stiffness': 320, 'mass': 0.5};
    var _closure1_slot10 = golfie;
    golfie = 6;
    golfie = oscard[golfie];
    verify = report.bind(entity)(golfie);
    option = verify.createStyles;
    golfie = function(argFoo, argBar) {
        offset = argFoo;
        option = argBar;
        entity = {};
        michal = {};
        zuuluu = 'row';
        michal['flexDirection'] = zuuluu;
        entity['avatarStack'] = michal;
        michal = {'flexDirection': 'row', 'justifyContent': 'space-between', 'alignItems': 'center', 'backgroundColor': null, 'borderRadius': 24, 'paddingLeft': 4, 'paddingRight': 4, 'paddingVertical': 4};
        report = _closure1_slot1;
        oscard = _closure1_slot2;
        zuuluu = 7;
        golfie = oscard[zuuluu];
        tangon = undefined;
        golfie = report.bind(tangon)(golfie);
        golfie = golfie.colors;
        golfie = golfie.BG_MOD_SUBTLE;
        michal['backgroundColor'] = golfie;
        golfie = 4;
        entity['stageAvatarStack'] = michal;
        michal = {'display': 'flex', 'flexDirection': 'row'};
        entity['avatarBubbles'] = michal;
        michal = {'display': 'flex', 'flexDirection': 'row'};
        entity['avatars'] = michal;
        michal = {};
        yankee = -option;
        michal['marginLeft'] = yankee;
        entity['shiftedAvatar'] = michal;
        michal = {'backgroundColor': null, 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center'};
        yankee = oscard[zuuluu];
        yankee = report.bind(tangon)(yankee);
        yankee = yankee.colors;
        yankee = yankee.BG_MOD_STRONG;
        michal['backgroundColor'] = yankee;
        yankee = -option;
        michal['marginLeft'] = yankee;
        yankee = _closure1_slot0;
        verify = 8;
        romeon = oscard[verify];
        romeon = yankee.bind(tangon)(romeon);
        romeon = romeon.AVATAR_SIZE_MAP;
        romeon = romeon[offset];
        michal['height'] = romeon;
        verify = oscard[verify];
        verify = yankee.bind(tangon)(verify);
        verify = verify.AVATAR_SIZE_MAP;
        verify = verify[offset];
        michal['minWidth'] = verify;
        verify = 10;
        michal['borderRadius'] = verify;
        michal['paddingHorizontal'] = golfie;
        golfie = 1;
        michal['paddingTop'] = golfie;
        entity['userCounter'] = michal;
        michal = {'display': 'flex', 'flexDirection': 'row', 'justifyContent': 'center', 'alignItems': 'flex-end', 'overflow': 'hidden'};
        golfie = -4;
        golfie = golfie - option;
        michal['marginLeft'] = golfie;
        entity['ellipsisWrapper'] = michal;
        michal = {};
        zuuluu = oscard[zuuluu];
        zuuluu = report.bind(tangon)(zuuluu);
        zuuluu = zuuluu.colors;
        zuuluu = zuuluu.CARD_SECONDARY_BG;
        michal['borderColor'] = zuuluu;
        entity['ellipsisBorder'] = michal;
        return entity;
    };
    golfie = option.bind(verify)(golfie);
    var _closure1_slot11 = golfie;
    golfie = {};
    option = 'function HappeningNowAvatarStackTsx1(){const{interpolate,typingValue,ELLIPSIS_WIDTH}=this.__closure;return{opacity:interpolate(typingValue.get(),[0,1],[0,1]),width:interpolate(typingValue.get(),[0,1],[0,ELLIPSIS_WIDTH])};}';
    golfie['code'] = option;
    var _closure1_slot12 = golfie;
    golfie = {};
    option = 'function HappeningNowAvatarStackTsx2(finished){const{runOnJS,setRenderComponents,isTyping}=this.__closure;if(!finished)return;runOnJS(setRenderComponents)(isTyping);}';
    golfie['code'] = option;
    var _closure1_slot13 = golfie;
    golfie = {};
    option = 'function HappeningNowAvatarStackTsx3(){const{isStage,extraUsers,avatars,AVATAR_SIZE_MAP,avatarSize,avatarOverlap,withSpring,SPRING_CONFIG}=this.__closure;const hasExtraBubble=!isStage&&extraUsers>0;const numBubbles=avatars.length+(hasExtraBubble?1:0);const width=numBubbles>0?numBubbles*AVATAR_SIZE_MAP[avatarSize]-(numBubbles-1)*avatarOverlap:0;return{width:withSpring(width,SPRING_CONFIG),marginRight:numBubbles===0?0:4};}';
    golfie['code'] = option;
    var _closure1_slot14 = golfie;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowAvatarStack.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: HappeningNowAvatarStack
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argFoo;
            zuuluu = oscard.users;
            entity = oscard.guildId;
            var _closure2_slot0 = entity;
            backup = oscard.isTyping;
            tangon = undefined;
            if(!(backup === tangon)) { _fun00002_ip = 34; continue _fun00001 }
 32:
            backup = false;
 34:
            var _closure2_slot1 = backup;
            offset = oscard.userLimit;
            if(!(offset === tangon)) { _fun00002_ip = 51; continue _fun00001 }
 48:
            offset = 3;
 51:
            foxtra = oscard.userCount;
            entity = oscard.isStage;
            var _closure2_slot2 = entity;
            ctrled = oscard.avatarSize;
            if(!(ctrled === tangon)) { _fun00002_ip = 112; continue _fun00001 }
 77:
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            report = 9;
            report = option[report];
            report = golfie.bind(tangon)(report);
            report = report.AvatarSizes;
            ctrled = report.XSMALL_20;
 112:
            var _closure2_slot3 = ctrled;
            report = oscard.avatarBorderWidth;
            if(!(report === tangon)) { _fun00002_ip = 131; continue _fun00001 }
 128:
            report = 2;
 131:
            var _closure2_slot4 = report;
            report = oscard.avatarOverlap;
            if(!(report === tangon)) { _fun00002_ip = 148; continue _fun00001 }
 145:
            report = 4;
 148:
            var _closure2_slot5 = report;
            verify = oscard.style;
            var _closure2_slot6 = tangon;
            var _closure2_slot7 = tangon;
            var _closure2_slot8 = tangon;
            var _closure2_slot9 = tangon;
            var _closure2_slot10 = tangon;
            var _closure2_slot11 = tangon;
            oscard = _closure1_slot11;
            yankee = oscard.bind(tangon)(ctrled, report);
            _closure2_slot6 = yankee;
            romeon = _closure1_slot4;
            option = romeon.useState;
            oscard = function() {
                entity = _closure2_slot1;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            romeon = option.bind(romeon)(oscard);
            option = _closure1_slot3;
            oscard = 2;
            oscard = option.bind(tangon)(romeon, oscard);
            source = 0;
            option = oscard[source];
            output = 1;
            oscard = oscard[output];
            _closure2_slot7 = oscard;
            kiloes = _closure1_slot0;
            romeon = _closure1_slot2;
            oscard = 10;
            romeon = romeon[oscard];
            kiloes = kiloes.bind(tangon)(romeon);
            romeon = kiloes.useSharedValue;
            sizing = report;
            report = 0;
            if(!backup) { _fun00002_ip = 285; continue _fun00001 }
 282:
            report = output;
 285:
            report = romeon.bind(kiloes)(report);
            _closure2_slot8 = report;
            vacuum = _closure1_slot0;
            update = _closure1_slot2;
            romeon = 11;
            romeon = update[romeon];
            result = vacuum.bind(tangon)(romeon);
            output = result.useStateFromStores;
            romeon = _closure1_slot6;
            kiloes = new Array(1);
            kiloes[0] = romeon;
            romeon = function() {
                entity = _closure1_slot6;
                entity = entity.locale;
                return entity;
            };
            romeon = output.bind(result)(kiloes, romeon);
            kiloes = update[oscard];
            result = vacuum.bind(tangon)(kiloes);
            output = result.useAnimatedStyle;
            kiloes = function() { // Original name: V
                entity = {};
                report = _closure1_slot0;
                oscard = _closure1_slot2;
                zuuluu = 10;
                michal = oscard[zuuluu];
                tangon = undefined;
                yankee = report.bind(tangon)(michal);
                offset = yankee.interpolate;
                option = _closure2_slot8;
                golfie = option.get;
                verify = golfie.bind(option)();
                option = [0, 1];
                golfie = [0, 1];
                golfie = offset.bind(yankee)(verify, option, golfie);
                entity['opacity'] = golfie;
                zuuluu = oscard[zuuluu];
                oscard = report.bind(tangon)(zuuluu);
                report = oscard.interpolate;
                zuuluu = _closure2_slot8;
                michal = zuuluu.get;
                tangon = michal.bind(zuuluu)();
                zuuluu = [0, 1];
                michal = [0, 28];
                michal = report.bind(oscard)(tangon, zuuluu, michal);
                entity['width'] = michal;
                return entity;
            };
            echoed = {};
            update = update[oscard];
            update = vacuum.bind(tangon)(update);
            update = update.interpolate;
            echoed['interpolate'] = update;
            echoed['typingValue'] = report;
            update = 28;
            echoed['ELLIPSIS_WIDTH'] = update;
            kiloes['__closure'] = echoed;
            echoed = 14140918847743.0;
            kiloes['__workletHash'] = echoed;
            echoed = _closure1_slot12;
            kiloes['__initData'] = echoed;
            echoed = output.bind(result)(kiloes);
            result = _closure1_slot4;
            output = result.useEffect;
            kiloes = new Array(2);
            kiloes[0] = backup;
            kiloes[1] = report;
            report = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    tangon = _closure2_slot8;
                    zuuluu = tangon.set;
                    oscard = _closure1_slot0;
                    report = _closure1_slot2;
                    entity = 12;
                    report = report[entity];
                    entity = undefined;
                    verify = oscard.bind(entity)(report);
                    option = verify.withSpring;
                    report = _closure2_slot1;
                    golfie = 0;
                    if(!report) { _fun00004_ip = 54; continue _fun00003 }
 51:
                    golfie = 1;
 54:
                    output = _closure1_slot7;
                    report = function(argFoo) { // Original name: t
                        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                            entity = argFoo;
                            if(!entity) { _fun00006_ip = 57; continue _fun00005 }
 6:
                            michal = _closure1_slot0;
                            zuuluu = _closure1_slot2;
                            entity = 10;
                            entity = zuuluu[entity];
                            zuuluu = undefined;
                            report = michal.bind(zuuluu)(entity);
                            tangon = report.runOnJS;
                            michal = _closure2_slot7;
                            michal = tangon.bind(report)(michal);
                            entity = _closure2_slot1;
                            entity = michal.bind(zuuluu)(entity);
 57:
                            entity = undefined;
                            return entity;
                        }
                    };
                    offset = {};
                    foxtra = _closure1_slot0;
                    backup = _closure1_slot2;
                    romeon = 10;
                    romeon = backup[romeon];
                    romeon = foxtra.bind(entity)(romeon);
                    romeon = romeon.runOnJS;
                    offset['runOnJS'] = romeon;
                    romeon = _closure2_slot7;
                    offset['setRenderComponents'] = romeon;
                    yankee = _closure2_slot1;
                    offset['isTyping'] = yankee;
                    report['__closure'] = offset;
                    offset = 2498652829757.0;
                    report['__workletHash'] = offset;
                    michal = _closure1_slot13;
                    report['__initData'] = michal;
                    sizing = 'respect-motion-settings';
                    echoed = verify;
                    result = golfie;
                    kiloes = report;
                    michal = echoed[option](result, output, sizing, kiloes, backup);
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                }
            };
            report = output.bind(result)(report, kiloes);
            report = zuuluu.slice;
            offset = report.bind(zuuluu)(source, offset);
            _closure2_slot9 = offset;
            update = null;
            if(!(update == foxtra)) { _fun00002_ip = 502; continue _fun00001 }
 497:
            foxtra = zuuluu.length;
 502:
            zuuluu = offset.length;
            target = foxtra - zuuluu;
            _closure2_slot10 = target;
            report = offset.map;
            zuuluu = function(argFoo, argBar) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    entity = argFoo;
                    golfie = argBar;
                    michal = _closure2_slot9;
                    zuuluu = michal.length;
                    michal = 1;
                    oscard = zuuluu - michal;
                    report = _closure1_slot8;
                    zuuluu = _closure1_slot1;
                    tangon = _closure1_slot2;
                    michal = 9;
                    michal = tangon[michal];
                    tangon = undefined;
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = {};
                    michal['user'] = entity;
                    option = _closure2_slot0;
                    michal['guildId'] = option;
                    option = _closure2_slot3;
                    michal['size'] = option;
                    offset = report.bind(tangon)(zuuluu, michal);
                    zuuluu = _closure1_slot5;
                    michal = {};
                    option = 0;
                    verify = undefined;
                    if(!(option !== golfie)) { _fun00008_ip = 106; continue _fun00007 }
 96:
                    yankee = _closure2_slot6;
                    verify = yankee.shiftedAvatar;
 106:
                    michal['style'] = verify;
                    if(!(golfie === oscard)) { _fun00008_ip = 141; continue _fun00007 }
 114:
                    golfie = _closure2_slot2;
                    oscard = offset;
                    if(golfie) { _fun00008_ip = 309; continue _fun00007 }
 127:
                    golfie = _closure2_slot10;
                    oscard = offset;
                    if(!(golfie > option)) { _fun00008_ip = 309; continue _fun00007 }
 141:
                    verify = _closure1_slot8;
                    option = _closure1_slot1;
                    sizing = _closure1_slot2;
                    yankee = 13;
                    golfie = sizing[yankee];
                    option = option.bind(tangon)(golfie);
                    golfie = {};
                    romeon = {};
                    kiloes = _closure1_slot0;
                    yankee = sizing[yankee];
                    yankee = kiloes.bind(tangon)(yankee);
                    yankee = yankee.CutoutShape;
                    yankee = yankee.Circle;
                    romeon['shape'] = yankee;
                    yankee = 8;
                    foxtra = sizing[yankee];
                    foxtra = kiloes.bind(tangon)(foxtra);
                    output = foxtra.AVATAR_SIZE_MAP;
                    foxtra = _closure2_slot3;
                    result = output[foxtra];
                    output = _closure2_slot5;
                    output = result - output;
                    backup = _closure2_slot4;
                    output = output - backup;
                    romeon['x'] = output;
                    output = -backup;
                    romeon['y'] = output;
                    yankee = sizing[yankee];
                    yankee = kiloes.bind(tangon)(yankee);
                    yankee = yankee.AVATAR_SIZE_MAP;
                    foxtra = yankee[foxtra];
                    yankee = 2;
                    yankee = yankee * backup;
                    yankee = foxtra + yankee;
                    romeon['size'] = yankee;
                    yankee = new Array(1);
                    yankee[0] = romeon;
                    golfie['cutouts'] = yankee;
                    golfie['children'] = offset;
                    oscard = verify.bind(tangon)(option, golfie);
 309:
                    michal['children'] = oscard;
                    entity = entity.id;
                    entity = report.bind(tangon)(zuuluu, michal, entity);
                    return entity;
                }
            };
            offset = report.bind(offset)(zuuluu);
            _closure2_slot11 = offset;
            output = _closure1_slot0;
            result = _closure1_slot2;
            zuuluu = result[oscard];
            report = output.bind(tangon)(zuuluu);
            zuuluu = report.useAnimatedStyle;
            michal = function() { // Original name: H
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    michal = _closure2_slot11;
                    tangon = michal.length;
                    report = _closure2_slot2;
                    zuuluu = 0;
                    michal = 0;
                    if(report) { _fun00010_ip = 39; continue _fun00009 }
 23:
                    report = _closure2_slot10;
                    report = report > zuuluu;
                    michal = 0;
                    if(!report) { _fun00010_ip = 39; continue _fun00009 }
 36:
                    michal = 1;
 39:
                    tangon = tangon + michal;
                    golfie = 0;
                    if(!(tangon > zuuluu)) { _fun00010_ip = 111; continue _fun00009 }
 49:
                    oscard = _closure1_slot0;
                    report = _closure1_slot2;
                    michal = 8;
                    report = report[michal];
                    michal = undefined;
                    michal = oscard.bind(michal)(report);
                    report = michal.AVATAR_SIZE_MAP;
                    michal = _closure2_slot3;
                    michal = report[michal];
                    michal = tangon * michal;
                    report = _closure2_slot5;
                    entity = 1;
                    entity = tangon - entity;
                    entity = entity * report;
                    golfie = michal - entity;
 111:
                    entity = {};
                    option = _closure1_slot0;
                    oscard = _closure1_slot2;
                    report = 12;
                    oscard = oscard[report];
                    report = undefined;
                    oscard = option.bind(report)(oscard);
                    report = oscard.withSpring;
                    michal = _closure1_slot10;
                    michal = report.bind(oscard)(golfie, michal);
                    entity['width'] = michal;
                    michal = 4;
                    if(!(zuuluu === tangon)) { _fun00010_ip = 166; continue _fun00009 }
 164:
                    michal = 0;
 166:
                    entity['marginRight'] = michal;
                    return entity;
                }
            };
            kiloes = {};
            kiloes['isStage'] = entity;
            kiloes['extraUsers'] = target;
            kiloes['avatars'] = offset;
            vacuum = 8;
            vacuum = result[vacuum];
            vacuum = output.bind(tangon)(vacuum);
            vacuum = vacuum.AVATAR_SIZE_MAP;
            kiloes['AVATAR_SIZE_MAP'] = vacuum;
            kiloes['avatarSize'] = ctrled;
            kiloes['avatarOverlap'] = sizing;
            sizing = 12;
            sizing = result[sizing];
            sizing = output.bind(tangon)(sizing);
            sizing = sizing.withSpring;
            kiloes['withSpring'] = sizing;
            sizing = _closure1_slot10;
            kiloes['SPRING_CONFIG'] = sizing;
            michal['__closure'] = kiloes;
            kiloes = 5027466437777.0;
            michal['__workletHash'] = kiloes;
            kiloes = _closure1_slot14;
            michal['__initData'] = kiloes;
            kiloes = zuuluu.bind(report)(michal);
            zuuluu = _closure1_slot9;
            michal = _closure1_slot5;
            report = {};
            if(entity) { _fun00002_ip = 1086; continue _fun00001 }
 699:
            sizing = yankee.avatarStack;
            entity = new Array(2);
            entity[0] = sizing;
            entity[1] = verify;
            report['style'] = entity;
            output = _closure1_slot9;
            sizing = _closure1_slot1;
            entity = _closure1_slot2;
            entity = entity[oscard];
            entity = sizing.bind(tangon)(entity);
            sizing = entity.View;
            entity = {};
            ctrled = yankee.avatarBubbles;
            result = new Array(2);
            result[0] = ctrled;
            result[1] = kiloes;
            entity['style'] = result;
            vacuum = _closure1_slot8;
            ctrled = _closure1_slot5;
            result = {};
            sequen = yankee.avatars;
            result['style'] = sequen;
            result['children'] = offset;
            ctrled = vacuum.bind(tangon)(ctrled, result);
            result = new Array(2);
            result[0] = ctrled;
            update = null;
            if(!(target > source)) { _fun00002_ip = 939; continue _fun00001 }
 818:
            vacuum = _closure1_slot8;
            ctrled = _closure1_slot5;
            source = {};
            sequen = yankee.userCounter;
            source['style'] = sequen;
            record = _closure1_slot9;
            papara = _closure1_slot0;
            status = _closure1_slot2;
            sequen = 14;
            sequen = status[sequen];
            sequen = papara.bind(tangon)(sequen);
            config = sequen.Text;
            sequen = {'color': 'text-normal', 'variant': 'text-xxs/semibold', 'allowFontScaling': false};
            cntext = 15;
            cntext = status[cntext];
            papara = papara.bind(tangon)(cntext);
            cntext = papara.humanizeValue;
            papara = cntext.bind(papara)(target, romeon);
            cntext = ['+'];
            cntext[1] = papara;
            sequen['children'] = cntext;
            sequen = record.bind(tangon)(config, sequen);
            source['children'] = sequen;
            update = vacuum.bind(tangon)(ctrled, source);
 939:
            result[1] = update;
            entity['children'] = result;
            sizing = output.bind(tangon)(sizing, entity);
            entity = new Array(2);
            entity[0] = sizing;
            if(option) { _fun00002_ip = 967; continue _fun00001 }
 964:
            option = backup;
 967:
            if(!option) { _fun00002_ip = 1070; continue _fun00001 }
 970:
            output = _closure1_slot8;
            sizing = _closure1_slot1;
            update = _closure1_slot2;
            backup = update[oscard];
            backup = sizing.bind(tangon)(backup);
            sizing = backup.View;
            backup = {};
            source = yankee.ellipsisWrapper;
            result = new Array(2);
            result[0] = source;
            result[1] = echoed;
            backup['style'] = result;
            echoed = _closure1_slot0;
            result = 16;
            result = update[result];
            result = echoed.bind(tangon)(result);
            echoed = result.TypingIndicator;
            result = {};
            update = yankee.ellipsisBorder;
            result['style'] = update;
            result = output.bind(tangon)(echoed, result);
            backup['children'] = result;
            option = output.bind(tangon)(sizing, backup);
 1070:
            entity[1] = option;
            report['children'] = entity;
            entity = report;
            _fun00002_ip = 1256; continue _fun00001;
 1086:
            backup = yankee.stageAvatarStack;
            option = new Array(2);
            option[0] = backup;
            option[1] = verify;
            report['style'] = option;
            verify = _closure1_slot8;
            option = _closure1_slot1;
            backup = _closure1_slot2;
            oscard = backup[oscard];
            oscard = option.bind(tangon)(oscard);
            option = oscard.View;
            oscard = {};
            sizing = yankee.avatars;
            yankee = new Array(2);
            yankee[0] = sizing;
            yankee[1] = kiloes;
            oscard['style'] = yankee;
            oscard['children'] = offset;
            option = verify.bind(tangon)(option, oscard);
            oscard = new Array(2);
            oscard[0] = option;
            yankee = _closure1_slot0;
            golfie = 14;
            golfie = backup[golfie];
            golfie = yankee.bind(tangon)(golfie);
            option = golfie.Text;
            golfie = {'color': 'text-normal', 'variant': 'text-xs/semibold'};
            offset = 15;
            offset = backup[offset];
            yankee = yankee.bind(tangon)(offset);
            offset = yankee.humanizeValue;
            offset = offset.bind(yankee)(foxtra, romeon);
            golfie['children'] = offset;
            golfie = verify.bind(tangon)(option, golfie);
            oscard[1] = golfie;
            report['children'] = oscard;
            entity = report;
 1256:
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['HappeningNowAvatarStack'] = michal;
    return entity;
})();