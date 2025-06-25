// app/modules/icymi/native/ICYMIConversationSummaryRow.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    romeon = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = romeon;
    var _closure1_slot2 = golfie;
    entity = function() { // Original name: CardGradient
        michal = _closure1_slot14;
        tangon = undefined;
        oscard = michal.bind(tangon)();
        option = _closure1_slot0;
        golfie = _closure1_slot2;
        michal = 12;
        michal = golfie[michal];
        verify = option.bind(tangon)(michal);
        report = verify.useToken;
        michal = _closure1_slot1;
        zuuluu = 11;
        zuuluu = golfie[zuuluu];
        zuuluu = michal.bind(tangon)(zuuluu);
        zuuluu = zuuluu.colors;
        zuuluu = zuuluu.ACTION_SHEET_GRADIENT_BG;
        offset = report.bind(verify)(zuuluu);
        zuuluu = 13;
        report = golfie[zuuluu];
        yankee = option.bind(tangon)(report);
        verify = yankee.hexOpacityToRgba;
        report = 0;
        verify = verify.bind(yankee)(offset, report);
        report = new Array(3);
        report[0] = verify;
        verify = golfie[zuuluu];
        romeon = option.bind(tangon)(verify);
        yankee = romeon.hexOpacityToRgba;
        verify = 0.6;
        verify = yankee.bind(romeon)(offset, verify);
        report[1] = verify;
        zuuluu = golfie[zuuluu];
        verify = option.bind(tangon)(zuuluu);
        option = verify.hexOpacityToRgba;
        zuuluu = 1;
        zuuluu = option.bind(verify)(offset, zuuluu);
        report[2] = zuuluu;
        zuuluu = _closure1_slot12;
        entity = 14;
        entity = golfie[entity];
        michal = michal.bind(tangon)(entity);
        entity = {'style': null, 'locations': null, 'pointerEvents': 'none', 'angle': 180, 'useAngle': true};
        oscard = oscard.linearGradient;
        entity['style'] = oscard;
        oscard = [0, 0.5, 1];
        entity['locations'] = oscard;
        entity['colors'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo) { // Original name: ConversationMessages
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            entity = entity.topic;
            var _closure2_slot0 = entity;
            report = undefined;
            var _closure2_slot4 = report;
            var _closure2_slot5 = report;
            var _closure2_slot6 = report;
            var _closure2_slot7 = report;
            var _closure2_slot8 = report;
            oscard = entity.messages;
            tangon = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 15;
            zuuluu = golfie[michal];
            yankee = tangon.bind(report)(zuuluu);
            offset = yankee.useStateFromStores;
            zuuluu = _closure1_slot6;
            verify = new Array(1);
            verify[0] = zuuluu;
            zuuluu = function() {
                zuuluu = _closure1_slot6;
                michal = zuuluu.getChannel;
                entity = _closure2_slot0;
                entity = entity.channelId;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            source = offset.bind(yankee)(verify, zuuluu);
            var _closure2_slot1 = source;
            zuuluu = golfie[michal];
            yankee = tangon.bind(report)(zuuluu);
            offset = yankee.useStateFromStores;
            zuuluu = _closure1_slot9;
            verify = new Array(1);
            verify[0] = zuuluu;
            zuuluu = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = _closure2_slot1;
                    entity = null;
                    entity = entity != zuuluu;
                    if(!entity) { _fun00004_ip = 54; continue _fun00003 }
 16:
                    report = _closure1_slot9;
                    tangon = report.isChannelMuted;
                    michal = _closure2_slot1;
                    zuuluu = michal.getGuildId;
                    zuuluu = zuuluu.bind(michal)();
                    michal = michal.id;
                    entity = tangon.bind(report)(zuuluu, michal);
 54:
                    return entity;
                }
            };
            zuuluu = offset.bind(yankee)(verify, zuuluu);
            var _closure2_slot2 = zuuluu;
            zuuluu = _closure1_slot14;
            result = zuuluu.bind(report)();
            verify = _closure1_slot1;
            zuuluu = 16;
            zuuluu = golfie[zuuluu];
            yankee = verify.bind(report)(zuuluu);
            offset = yankee.age;
            romeon = entity.messageIds;
            zuuluu = entity.messageIds;
            verify = zuuluu.length;
            zuuluu = 1;
            verify = verify - zuuluu;
            verify = romeon[verify];
            offset = offset.bind(yankee)(verify);
            verify = 17;
            verify = golfie[verify];
            verify = tangon.bind(report)(verify);
            verify = verify.ACTIVE_CONVERSATION_AGE;
            verify = offset < verify;
            var _closure2_slot3 = verify;
            michal = golfie[michal];
            offset = tangon.bind(report)(michal);
            golfie = offset.useStateFromStores;
            michal = _closure1_slot8;
            tangon = new Array(1);
            tangon[0] = michal;
            michal = function() {
                zuuluu = _closure1_slot8;
                michal = zuuluu.getMessages;
                entity = _closure2_slot0;
                entity = entity.channelId;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            michal = golfie.bind(offset)(tangon, michal);
            echoed = oscard;
            if(!verify) { _fun00002_ip = 331; continue _fun00001 }
 277:
            tangon = michal._array;
            golfie = tangon.length;
            tangon = 0;
            echoed = oscard;
            if(!(golfie > tangon)) { _fun00002_ip = 331; continue _fun00001 }
 297:
            golfie = michal._array;
            tangon = golfie.slice;
            michal = michal._array;
            offset = michal.length;
            michal = 3;
            michal = offset - michal;
            echoed = tangon.bind(golfie)(michal);
 331:
            tangon = _closure1_slot4;
            michal = tangon.useState;
            ctrled = 0;
            tangon = michal.bind(tangon)(ctrled);
            michal = _closure1_slot3;
            offset = 2;
            michal = michal.bind(report)(tangon, offset);
            golfie = michal[ctrled];
            _closure2_slot4 = golfie;
            michal = michal[zuuluu];
            _closure2_slot5 = michal;
            yankee = _closure1_slot4;
            tangon = yankee.useState;
            michal = false;
            tangon = tangon.bind(yankee)(michal);
            michal = _closure1_slot3;
            michal = michal.bind(report)(tangon, offset);
            yankee = michal[ctrled];
            michal = michal[zuuluu];
            _closure2_slot6 = michal;
            romeon = _closure1_slot4;
            tangon = romeon.useState;
            michal = entity.id;
            tangon = tangon.bind(romeon)(michal);
            michal = _closure1_slot3;
            michal = michal.bind(report)(tangon, offset);
            offset = michal[ctrled];
            _closure2_slot7 = offset;
            michal = michal[zuuluu];
            _closure2_slot8 = michal;
            tangon = _closure1_slot4;
            zuuluu = tangon.useLayoutEffect;
            michal = new Array(4);
            michal[0] = offset;
            michal[1] = golfie;
            oscard = oscard.length;
            michal[2] = oscard;
            entity = entity.id;
            michal[3] = entity;
            entity = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zuuluu = _closure2_slot7;
                    michal = _closure2_slot0;
                    michal = michal.id;
                    if(!(zuuluu === michal)) { _fun00006_ip = 65; continue _fun00005 }
 20:
                    zuuluu = _closure2_slot4;
                    michal = 0;
                    michal = michal !== zuuluu;
                    if(!michal) { _fun00006_ip = 47; continue _fun00005 }
 33:
                    tangon = _closure2_slot4;
                    zuuluu = 460;
                    michal = tangon >= zuuluu;
 47:
                    if(!michal) { _fun00006_ip = 107; continue _fun00005 }
 50:
                    tangon = _closure2_slot6;
                    zuuluu = undefined;
                    michal = true;
                    michal = tangon.bind(zuuluu)(michal);
                    _fun00006_ip = 107; continue _fun00005;
 65:
                    tangon = _closure2_slot5;
                    zuuluu = undefined;
                    michal = 0;
                    michal = tangon.bind(zuuluu)(michal);
                    tangon = _closure2_slot6;
                    michal = false;
                    michal = tangon.bind(zuuluu)(michal);
                    michal = _closure2_slot8;
                    entity = _closure2_slot0;
                    entity = entity.id;
                    entity = michal.bind(zuuluu)(entity);
 107:
                    entity = undefined;
                    return entity;
                }
            };
            entity = zuuluu.bind(tangon)(entity, michal);
            offset = null;
            michal = offset == source;
            entity = null;
            if(michal) { _fun00002_ip = 862; continue _fun00001 }
 526:
            tangon = _closure1_slot13;
            zuuluu = _closure1_slot5;
            michal = {};
            oscard = function(argFoo) { // Original name: onLayout
                zuuluu = _closure2_slot5;
                entity = argFoo;
                entity = entity.nativeEvent;
                entity = entity.layout;
                michal = entity.height;
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
                return entity;
            };
            michal['onLayout'] = oscard;
            golfie = result.outerCardContainer;
            oscard = new Array(1);
            oscard[0] = golfie;
            michal['style'] = oscard;
            oscard = 'none';
            michal['pointerEvents'] = oscard;
            romeon = _closure1_slot13;
            golfie = _closure1_slot5;
            oscard = {};
            backup = result.messagesContainer;
            foxtra = new Array(2);
            foxtra[0] = backup;
            backup = yankee;
            if(!backup) { _fun00002_ip = 611; continue _fun00001 }
 605:
            backup = result.messagesContainerGradient;
 611:
            foxtra[1] = backup;
            oscard['style'] = foxtra;
            kiloes = _closure1_slot12;
            backup = _closure1_slot5;
            foxtra = {};
            update = result.messages;
            output = new Array(2);
            output[0] = update;
            update = {};
            ctrled = 0;
            if(!verify) { _fun00002_ip = 681; continue _fun00001 }
 650:
            sequen = _closure1_slot1;
            config = _closure1_slot2;
            vacuum = 11;
            vacuum = config[vacuum];
            vacuum = sequen.bind(report)(vacuum);
            vacuum = vacuum.spacing;
            ctrled = vacuum.PX_12;
 681:
            update['paddingBottom'] = ctrled;
            output[1] = update;
            foxtra['style'] = output;
            output = echoed.map;
            sizing = function(argFoo) {
                entity = argFoo;
                report = _closure1_slot12;
                zuuluu = _closure1_slot1;
                tangon = _closure1_slot2;
                michal = 18;
                michal = tangon[michal];
                tangon = undefined;
                zuuluu = zuuluu.bind(tangon)(michal);
                michal = {};
                golfie = _closure2_slot2;
                michal['muted'] = golfie;
                golfie = _closure2_slot1;
                michal['channel'] = golfie;
                michal['message'] = entity;
                oscard = _closure2_slot3;
                michal['showTimestamps'] = oscard;
                entity = entity.id;
                entity = report.bind(tangon)(zuuluu, michal, entity);
                return entity;
            };
            sizing = output.bind(echoed)(sizing);
            foxtra['children'] = sizing;
            backup = kiloes.bind(report)(backup, foxtra);
            foxtra = new Array(2);
            foxtra[0] = backup;
            backup = null;
            if(!verify) { _fun00002_ip = 800; continue _fun00001 }
 734:
            output = _closure1_slot12;
            sizing = _closure1_slot5;
            kiloes = {};
            result = result.typingArea;
            kiloes['style'] = result;
            update = _closure1_slot12;
            echoed = _closure1_slot1;
            ctrled = _closure1_slot2;
            result = 19;
            result = ctrled[result];
            echoed = echoed.bind(report)(result);
            result = {};
            result['channel'] = source;
            result = update.bind(report)(echoed, result);
            kiloes['children'] = result;
            backup = output.bind(report)(sizing, kiloes);
 800:
            foxtra[1] = backup;
            oscard['children'] = foxtra;
            golfie = romeon.bind(report)(golfie, oscard);
            oscard = new Array(2);
            oscard[0] = golfie;
            golfie = null;
            if(!yankee) { _fun00002_ip = 848; continue _fun00001 }
 827:
            golfie = null;
            if(verify) { _fun00002_ip = 848; continue _fun00001 }
 832:
            offset = _closure1_slot12;
            verify = _closure1_slot15;
            option = {};
            golfie = offset.bind(report)(verify, option);
 848:
            oscard[1] = golfie;
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 862:
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, michal);
    entity = 0;
    michal = golfie[entity];
    entity = undefined;
    michal = romeon.bind(entity)(michal);
    var _closure1_slot3 = michal;
    kiloes = 1;
    report = golfie[kiloes];
    michal = argCor;
    michal = michal.bind(entity)(report);
    var _closure1_slot4 = michal;
    michal = 2;
    michal = golfie[michal];
    michal = oscard.bind(entity)(michal);
    michal = michal.View;
    var _closure1_slot5 = michal;
    michal = 3;
    report = golfie[michal];
    report = romeon.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 4;
    report = golfie[report];
    report = romeon.bind(entity)(report);
    var _closure1_slot7 = report;
    report = 5;
    report = golfie[report];
    report = romeon.bind(entity)(report);
    var _closure1_slot8 = report;
    report = 6;
    report = golfie[report];
    report = romeon.bind(entity)(report);
    var _closure1_slot9 = report;
    report = 7;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    foxtra = report.ICYMI_MARGIN;
    var _closure1_slot10 = foxtra;
    backup = report.MESSAGE_CONTENT_INSET;
    report = 8;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.ComponentActions;
    var _closure1_slot11 = report;
    report = 9;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    option = report.jsx;
    var _closure1_slot12 = option;
    report = report.jsxs;
    var _closure1_slot13 = report;
    report = 10;
    report = golfie[report];
    verify = oscard.bind(entity)(report);
    option = verify.createStyles;
    report = {};
    offset = {};
    offset['flex'] = kiloes;
    offset['paddingLeft'] = backup;
    report['pressable'] = offset;
    offset = {};
    offset['marginHorizontal'] = foxtra;
    report['container'] = offset;
    offset = {'maxHeight': 461, 'display': 'flex', 'overflow': 'hidden', 'borderRadius': null, 'borderColor': null, 'borderWidth': 1};
    yankee = 11;
    sizing = golfie[yankee];
    sizing = romeon.bind(entity)(sizing);
    sizing = sizing.radii;
    sizing = sizing.lg;
    offset['borderRadius'] = sizing;
    sizing = golfie[yankee];
    sizing = romeon.bind(entity)(sizing);
    sizing = sizing.colors;
    sizing = sizing.BORDER_SUBTLE;
    offset['borderColor'] = sizing;
    report['outerCardContainer'] = offset;
    offset = {};
    sizing = 360;
    offset['maxHeight'] = sizing;
    report['activeContainer'] = offset;
    offset = {'flexDirection': 'row', 'gap': null, 'alignItems': 'center'};
    sizing = 'row';
    output = golfie[yankee];
    output = romeon.bind(entity)(output);
    output = output.spacing;
    output = output.PX_8;
    offset['gap'] = output;
    report['channelHeader'] = offset;
    offset = {};
    offset['flexDirection'] = sizing;
    sizing = golfie[yankee];
    sizing = romeon.bind(entity)(sizing);
    sizing = sizing.spacing;
    sizing = sizing.PX_8;
    offset['gap'] = sizing;
    report['messageContainer'] = offset;
    offset = {};
    offset['paddingHorizontal'] = foxtra;
    sizing = golfie[yankee];
    sizing = romeon.bind(entity)(sizing);
    sizing = sizing.spacing;
    sizing = sizing.PX_16;
    offset['gap'] = sizing;
    report['messages'] = offset;
    offset = {};
    offset['flex'] = kiloes;
    report['messageContent'] = offset;
    offset = {'position': 'absolute', 'width': '100%', 'bottom': 0, 'minHeight': 104, 'borderBottomEndRadius': null, 'paddingBottom': 16};
    kiloes = golfie[yankee];
    kiloes = romeon.bind(entity)(kiloes);
    kiloes = kiloes.radii;
    kiloes = kiloes.lg;
    offset['borderBottomEndRadius'] = kiloes;
    report['linearGradient'] = offset;
    offset = {};
    kiloes = golfie[yankee];
    kiloes = romeon.bind(entity)(kiloes);
    kiloes = kiloes.spacing;
    kiloes = kiloes.PX_8;
    offset['marginTop'] = kiloes;
    kiloes = 'none';
    offset['pointerEvents'] = kiloes;
    report['emojiContainer'] = offset;
    offset = {};
    kiloes = 'flex-end';
    offset['justifyContent'] = kiloes;
    offset['paddingLeft'] = backup;
    report['footer'] = offset;
    offset = {};
    offset['paddingVertical'] = foxtra;
    offset['gap'] = foxtra;
    report['messagesContainer'] = offset;
    offset = {'maxHeight': 458, 'marginBottom': 4, 'overflow': 'hidden'};
    report['messagesContainerGradient'] = offset;
    offset = {'marginLeft': 22, 'marginBottom': 22, 'flexDirection': 'row', 'alignItems': 'center'};
    report['viewMoreContainer'] = offset;
    offset = {'position': 'absolute', 'left': 22, 'bottom': 22, 'flexDirection': 'row', 'alignItems': 'center', 'zIndex': 5};
    report['viewMoreContainerAbsolute'] = offset;
    offset = {'height': 20, 'width': 20, 'marginRight': 18};
    report['viewMoreIcon'] = offset;
    offset = {'height': 20, 'width': 20};
    yankee = golfie[yankee];
    yankee = romeon.bind(entity)(yankee);
    yankee = yankee.spacing;
    yankee = yankee.PX_4;
    offset['marginLeft'] = yankee;
    report['rightArrowIcon'] = offset;
    offset = {'position': 'absolute', 'width': '100%', 'height': 24, 'bottom': 0};
    report['typingArea'] = offset;
    report = option.bind(verify)(report);
    var _closure1_slot14 = report;
    report = 32;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/icymi/native/ICYMIConversationSummaryRow.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function(argFoo) { // Original name: ICYMIConversationSummaryRow
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            kiloes = entity.topic;
            var _closure2_slot0 = kiloes;
            option = entity.disableInteractions;
            report = undefined;
            var _closure2_slot3 = report;
            var _closure2_slot4 = report;
            var _closure2_slot5 = report;
            var _closure2_slot6 = report;
            var _closure2_slot7 = report;
            source = function(argFoo) { // Original name: convertToWords
                michal = argFoo;
                entity = michal.toLowerCase;
                tangon = entity.bind(michal)();
                zuuluu = tangon.replace;
                michal = /[.,\\/#!$%\^&\*;:{}=\-_`~()]/g;
                entity = '';
                tangon = zuuluu.bind(tangon)(michal, entity);
                michal = tangon.replace;
                entity = /\s{2,}/g;
                zuuluu = ' ';
                michal = michal.bind(tangon)(entity, zuuluu);
                entity = michal.split;
                entity = entity.bind(michal)(zuuluu);
                return entity;
            };
            entity = _closure1_slot14;
            romeon = entity.bind(report)();
            michal = _closure1_slot0;
            entity = _closure1_slot2;
            tangon = 15;
            zuuluu = entity[tangon];
            verify = michal.bind(report)(zuuluu);
            golfie = verify.useStateFromStores;
            zuuluu = _closure1_slot6;
            oscard = new Array(1);
            oscard[0] = zuuluu;
            zuuluu = function() {
                zuuluu = _closure1_slot6;
                michal = zuuluu.getChannel;
                entity = _closure2_slot0;
                entity = entity.channelId;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            sizing = golfie.bind(verify)(oscard, zuuluu);
            var _closure2_slot1 = sizing;
            entity = entity[tangon];
            oscard = michal.bind(report)(entity);
            zuuluu = oscard.useStateFromStores;
            entity = _closure1_slot7;
            michal = new Array(1);
            michal[0] = entity;
            entity = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zuuluu = _closure1_slot7;
                    michal = zuuluu.getGuild;
                    report = _closure2_slot1;
                    entity = null;
                    report = entity == report;
                    entity = undefined;
                    if(report) { _fun00010_ip = 44; continue _fun00009 }
 30:
                    report = _closure2_slot1;
                    tangon = report.getGuildId;
                    entity = tangon.bind(report)();
 44:
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                }
            };
            result = zuuluu.bind(oscard)(michal, entity);
            var _closure2_slot2 = result;
            entity = kiloes.messages;
            zuuluu = 0;
            michal = entity[zuuluu];
            entity = null;
            oscard = entity == michal;
            verify = undefined;
            if(oscard) { _fun00008_ip = 187; continue _fun00007 }
 181:
            verify = michal.author;
 187:
            offset = _closure1_slot1;
            michal = _closure1_slot2;
            oscard = 16;
            golfie = michal[oscard];
            backup = offset.bind(report)(golfie);
            foxtra = backup.age;
            echoed = kiloes.messageIds;
            golfie = kiloes.messageIds;
            golfie = golfie.length;
            offset = 1;
            golfie = golfie - offset;
            golfie = echoed[golfie];
            backup = foxtra.bind(backup)(golfie);
            golfie = _closure1_slot0;
            foxtra = 17;
            foxtra = michal[foxtra];
            foxtra = golfie.bind(report)(foxtra);
            foxtra = foxtra.ACTIVE_CONVERSATION_AGE;
            backup = backup < foxtra;
            _closure2_slot3 = backup;
            michal = michal[tangon];
            echoed = golfie.bind(report)(michal);
            foxtra = echoed.useStateFromStores;
            michal = _closure1_slot8;
            golfie = new Array(1);
            golfie[0] = michal;
            michal = function() {
                zuuluu = _closure1_slot8;
                michal = zuuluu.getMessages;
                entity = _closure2_slot0;
                entity = entity.channelId;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            michal = foxtra.bind(echoed)(golfie, michal);
            if(!backup) { _fun00008_ip = 333; continue _fun00007 }
 318:
            golfie = michal._array;
            golfie = golfie.length;
            if(!(!(golfie > zuuluu))) { _fun00008_ip = 355; continue _fun00007 }
 333:
            echoed = kiloes.messages;
            foxtra = echoed.slice;
            golfie = 3;
            golfie = foxtra.bind(echoed)(zuuluu, golfie);
            _fun00008_ip = 389; continue _fun00007;
 355:
            echoed = michal._array;
            foxtra = echoed.slice;
            michal = michal._array;
            update = michal.length;
            michal = 3;
            michal = update - michal;
            golfie = foxtra.bind(echoed)(michal);
 389:
            _closure2_slot4 = golfie;
            michal = golfie.length;
            michal = michal - offset;
            offset = golfie[michal];
            foxtra = entity == offset;
            michal = undefined;
            if(foxtra) { _fun00008_ip = 420; continue _fun00007 }
 415:
            michal = offset.id;
 420:
            _closure2_slot5 = michal;
            echoed = _closure1_slot4;
            foxtra = echoed.useMemo;
            offset = new Array(1);
            offset[0] = golfie;
            golfie = function() {
                zuuluu = _closure2_slot4;
                michal = zuuluu.map;
                entity = function(argFoo) {
                    entity = argFoo;
                    entity = entity.author;
                    entity = entity.id;
                    return entity;
                };
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            golfie = foxtra.bind(echoed)(golfie, offset);
            _closure2_slot6 = golfie;
            echoed = _closure1_slot4;
            foxtra = echoed.useEffect;
            offset = entity == result;
            update = undefined;
            if(offset) { _fun00008_ip = 481; continue _fun00007 }
 476:
            update = result.id;
 481:
            offset = new Array(2);
            offset[0] = update;
            offset[1] = golfie;
            golfie = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    entity = _closure2_slot2;
                    oscard = null;
                    tangon = oscard == entity;
                    entity = undefined;
                    zuuluu = undefined;
                    if(tangon) { _fun00012_ip = 29; continue _fun00011 }
 20:
                    tangon = _closure2_slot2;
                    zuuluu = tangon.id;
 29:
                    if(!(oscard != zuuluu)) { _fun00012_ip = 94; continue _fun00011 }
 33:
                    tangon = _closure1_slot1;
                    report = _closure1_slot2;
                    zuuluu = 20;
                    zuuluu = report[zuuluu];
                    report = tangon.bind(entity)(zuuluu);
                    tangon = report.requestMembersById;
                    zuuluu = _closure2_slot2;
                    oscard = oscard == zuuluu;
                    zuuluu = undefined;
                    if(oscard) { _fun00012_ip = 84; continue _fun00011 }
 75:
                    oscard = _closure2_slot2;
                    zuuluu = oscard.id;
 84:
                    michal = _closure2_slot6;
                    michal = tangon.bind(report)(zuuluu, michal);
 94:
                    return entity;
                }
            };
            golfie = foxtra.bind(echoed)(golfie, offset);
            echoed = _closure1_slot4;
            foxtra = echoed.useEffect;
            offset = new Array(3);
            offset[0] = result;
            offset[1] = sizing;
            offset[2] = backup;
            golfie = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    michal = _closure2_slot3;
                    if(!michal) { _fun00014_ip = 20; continue _fun00013 }
 10:
                    tangon = _closure2_slot2;
                    zuuluu = null;
                    michal = zuuluu != tangon;
 20:
                    if(!michal) { _fun00014_ip = 33; continue _fun00013 }
 23:
                    tangon = _closure2_slot1;
                    zuuluu = null;
                    michal = zuuluu != tangon;
 33:
                    if(!michal) { _fun00014_ip = 81; continue _fun00013 }
 36:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 21;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    zuuluu = tangon.bind(michal)(zuuluu);
                    michal = zuuluu.subscribeGuild;
                    entity = _closure2_slot2;
                    entity = entity.id;
                    entity = michal.bind(zuuluu)(entity);
 81:
                    entity = undefined;
                    return entity;
                }
            };
            golfie = foxtra.bind(echoed)(golfie, offset);
            foxtra = _closure1_slot4;
            offset = foxtra.useCallback;
            golfie = new Array(7);
            golfie[0] = sizing;
            golfie[1] = result;
            echoed = kiloes.id;
            golfie[2] = echoed;
            echoed = kiloes.startId;
            golfie[3] = echoed;
            echoed = kiloes.type;
            golfie[4] = echoed;
            golfie[5] = michal;
            golfie[6] = backup;
            michal = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    report = _closure1_slot0;
                    yankee = _closure1_slot2;
                    oscard = 22;
                    zuuluu = yankee[oscard];
                    entity = undefined;
                    verify = report.bind(entity)(zuuluu);
                    option = verify.trackItemInteraction;
                    tangon = _closure2_slot0;
                    golfie = tangon.id;
                    offset = tangon.type;
                    tangon = 23;
                    tangon = yankee[tangon];
                    tangon = report.bind(entity)(tangon);
                    tangon = tangon.SummaryType;
                    tangon = tangon.SOURCE_1;
                    report = 'summary';
                    if(!(offset === tangon)) { _fun00016_ip = 86; continue _fun00015 }
 80:
                    report = 'summary_regenerated';
 86:
                    tangon = 'press_summary';
                    tangon = option.bind(verify)(golfie, report, tangon);
                    tangon = _closure2_slot1;
                    golfie = null;
                    if(!(golfie != tangon)) { _fun00016_ip = 117; continue _fun00015 }
 109:
                    tangon = _closure2_slot2;
                    if(!(golfie == tangon)) { _fun00016_ip = 224; continue _fun00015 }
 117:
                    tangon = _closure2_slot1;
                    tangon = golfie != tangon;
                    if(!tangon) { _fun00016_ip = 142; continue _fun00015 }
 128:
                    option = _closure2_slot1;
                    report = option.isDM;
                    tangon = report.bind(option)();
 142:
                    if(tangon) { _fun00016_ip = 173; continue _fun00015 }
 145:
                    report = _closure2_slot1;
                    report = golfie != report;
                    if(!report) { _fun00016_ip = 170; continue _fun00015 }
 156:
                    option = _closure2_slot1;
                    golfie = option.isGroupDM;
                    report = golfie.bind(option)();
 170:
                    tangon = report;
 173:
                    if(!tangon) { _fun00016_ip = 431; continue _fun00015 }
 179:
                    report = _closure1_slot0;
                    golfie = _closure1_slot2;
                    tangon = 26;
                    tangon = golfie[tangon];
                    golfie = report.bind(entity)(tangon);
                    report = golfie.transitionToChannel;
                    tangon = _closure2_slot1;
                    tangon = tangon.id;
                    tangon = report.bind(golfie)(tangon);
                    _fun00016_ip = 431; continue _fun00015;
 224:
                    tangon = _closure2_slot3;
                    if(tangon) { _fun00016_ip = 329; continue _fun00015 }
 231:
                    report = _closure1_slot1;
                    golfie = _closure1_slot2;
                    tangon = 25;
                    tangon = golfie[tangon];
                    yankee = report.bind(entity)(tangon);
                    offset = yankee.setGravitySelectedSummary;
                    report = _closure2_slot1;
                    verify = report.id;
                    tangon = _closure2_slot0;
                    option = tangon.id;
                    option = offset.bind(yankee)(verify, option);
                    option = _closure1_slot0;
                    golfie = golfie[oscard];
                    verify = option.bind(entity)(golfie);
                    option = verify.navigateToPost;
                    golfie = report.id;
                    report = _closure2_slot2;
                    report = report.id;
                    tangon = tangon.startId;
                    tangon = option.bind(verify)(golfie, report, tangon);
                    _fun00016_ip = 431; continue _fun00015;
 329:
                    tangon = _closure1_slot0;
                    report = _closure1_slot2;
                    oscard = report[oscard];
                    offset = tangon.bind(entity)(oscard);
                    verify = offset.navigateToPost;
                    oscard = _closure2_slot1;
                    option = oscard.id;
                    golfie = _closure2_slot2;
                    golfie = golfie.id;
                    zuuluu = _closure2_slot5;
                    zuuluu = verify.bind(offset)(option, golfie, zuuluu);
                    zuuluu = 24;
                    zuuluu = report[zuuluu];
                    zuuluu = tangon.bind(entity)(zuuluu);
                    report = zuuluu.ComponentDispatch;
                    tangon = report.dispatch;
                    michal = _closure1_slot11;
                    zuuluu = michal.TEXTAREA_FOCUS;
                    michal = {};
                    oscard = oscard.id;
                    michal['channelId'] = oscard;
                    michal = tangon.bind(report)(zuuluu, michal);
 431:
                    return entity;
                }
            };
            foxtra = offset.bind(foxtra)(michal, golfie);
            echoed = _closure1_slot4;
            offset = echoed.useCallback;
            michal = kiloes.channelId;
            golfie = new Array(3);
            golfie[0] = michal;
            michal = kiloes.id;
            golfie[1] = michal;
            michal = kiloes.type;
            golfie[2] = michal;
            michal = function() {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    report = _closure1_slot0;
                    offset = _closure1_slot2;
                    entity = 22;
                    michal = offset[entity];
                    entity = undefined;
                    option = report.bind(entity)(michal);
                    golfie = option.trackItemInteraction;
                    tangon = _closure2_slot0;
                    oscard = tangon.id;
                    verify = tangon.type;
                    tangon = 23;
                    tangon = offset[tangon];
                    tangon = report.bind(entity)(tangon);
                    tangon = tangon.SummaryType;
                    tangon = tangon.SOURCE_1;
                    report = 'summary';
                    if(!(verify === tangon)) { _fun00018_ip = 86; continue _fun00017 }
 80:
                    report = 'summary_regenerated';
 86:
                    tangon = 'long_press_channel';
                    tangon = golfie.bind(option)(oscard, report, tangon);
                    tangon = _closure1_slot0;
                    report = _closure1_slot2;
                    zuuluu = 27;
                    zuuluu = report[zuuluu];
                    tangon = tangon.bind(entity)(zuuluu);
                    zuuluu = tangon.openChannelLongPressActionSheet;
                    michal = _closure2_slot0;
                    michal = michal.channelId;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                }
            };
            offset = offset.bind(echoed)(michal, golfie);
            if(!(entity != sizing)) { _fun00008_ip = 1724; continue _fun00007 }
 674:
            michal = sizing.guild_id;
            if(!(entity != michal)) { _fun00008_ip = 1724; continue _fun00007 }
 686:
            if(!(entity != result)) { _fun00008_ip = 1724; continue _fun00007 }
 693:
            if(!(entity != verify)) { _fun00008_ip = 1724; continue _fun00007 }
 700:
            echoed = global;
            update = echoed.Set;
            michal = kiloes.messages;
            michal = michal[zuuluu];
            michal = michal.content;
            ctrled = source.bind(report)(michal);
            golfie = ctrled.filter;
            michal = function(argFoo) {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    tangon = argFoo;
                    michal = tangon.startsWith;
                    entity = 'http';
                    entity = michal.bind(tangon)(entity);
                    entity = !entity;
                    if(!entity) { _fun00020_ip = 42; continue _fun00019 }
 24:
                    zuuluu = tangon.startsWith;
                    michal = 'https';
                    michal = zuuluu.bind(tangon)(michal);
                    entity = !michal;
 42:
                    return entity;
                }
            };
            status = golfie.bind(ctrled)(michal);
            golfie = update.prototype;
            golfie = Object.create(golfie, {constructor: {value: update}});
            sierra = golfie;
            michal = new sierra[update](status, target);
            update = michal instanceof Object ? michal : golfie;
            ctrled = echoed.Set;
            michal = kiloes.topic;
            status = source.bind(report)(michal);
            golfie = ctrled.prototype;
            golfie = Object.create(golfie, {constructor: {value: ctrled}});
            sierra = golfie;
            michal = new sierra[ctrled](status, target);
            golfie = michal instanceof Object ? michal : golfie;
            ctrled = echoed.Set;
            michal = kiloes.summShort;
            status = source.bind(report)(michal);
            source = ctrled.prototype;
            source = Object.create(source, {constructor: {value: ctrled}});
            sierra = source;
            michal = new sierra[ctrled](status, target);
            michal = michal instanceof Object ? michal : source;
            _closure2_slot7 = michal;
            ctrled = echoed.Array;
            source = ctrled.from;
            vacuum = source.bind(ctrled)(update);
            ctrled = vacuum.filter;
            source = function(argFoo) {
                zuuluu = _closure2_slot7;
                michal = zuuluu.has;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            source = ctrled.bind(vacuum)(source);
            source = source.length;
            update = update.size;
            ctrled = source / update;
            update = echoed.Array;
            echoed = update.from;
            update = echoed.bind(update)(golfie);
            echoed = update.filter;
            output = function(argFoo) {
                zuuluu = _closure2_slot7;
                michal = zuuluu.has;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            output = echoed.bind(update)(output);
            output = output.length;
            golfie = golfie.size;
            output = output / golfie;
            golfie = 0.8;
            update = output > golfie;
            if(!update) { _fun00008_ip = 963; continue _fun00007 }
 954:
            michal = michal.size;
            update = michal < tangon;
 963:
            michal = kiloes.summShort;
            michal = michal.length;
            vacuum = zuuluu === michal;
            if(!vacuum) { _fun00008_ip = 996; continue _fun00007 }
 981:
            michal = kiloes.topic;
            michal = michal.length;
            vacuum = zuuluu === michal;
 996:
            tangon = _closure1_slot13;
            golfie = _closure1_slot0;
            output = _closure1_slot2;
            michal = 22;
            michal = output[michal];
            michal = golfie.bind(report)(michal);
            zuuluu = michal.SummaryContentPost;
            michal = {};
            michal['channel'] = sizing;
            michal['guild'] = result;
            michal['author'] = verify;
            verify = kiloes.id;
            michal['id'] = verify;
            verify = _closure1_slot1;
            oscard = output[oscard];
            result = verify.bind(report)(oscard);
            verify = result.extractTimestamp;
            oscard = kiloes.endId;
            oscard = verify.bind(result)(oscard);
            michal['timestamp'] = oscard;
            michal['disableInteractions'] = option;
            verify = kiloes.type;
            oscard = 23;
            oscard = output[oscard];
            oscard = golfie.bind(report)(oscard);
            oscard = oscard.SummaryType;
            golfie = oscard.SOURCE_1;
            oscard = 'summary';
            if(!(verify === golfie)) { _fun00008_ip = 1133; continue _fun00007 }
 1127:
            oscard = 'summary_regenerated';
 1133:
            michal['type'] = oscard;
            michal['onHeaderPress'] = foxtra;
            michal['onHeaderLongPress'] = offset;
            michal['isActive'] = backup;
            verify = _closure1_slot12;
            golfie = _closure1_slot0;
            output = _closure1_slot2;
            oscard = 28;
            oscard = output[oscard];
            oscard = golfie.bind(report)(oscard);
            golfie = oscard.PressableHighlight;
            oscard = {};
            oscard['onPress'] = foxtra;
            oscard['onLongPress'] = offset;
            offset = 'button';
            oscard['accessibilityRole'] = offset;
            offset = 130;
            oscard['unstable_pressDelay'] = offset;
            offset = romeon.pressable;
            oscard['style'] = offset;
            oscard['disabled'] = option;
            output = _closure1_slot13;
            foxtra = _closure1_slot5;
            offset = {};
            result = romeon.container;
            offset['style'] = result;
            echoed = null;
            if(vacuum) { _fun00008_ip = 1347; continue _fun00007 }
 1247:
            sequen = _closure1_slot12;
            source = _closure1_slot0;
            cntext = _closure1_slot2;
            result = 29;
            result = cntext[result];
            result = source.bind(report)(result);
            source = result.Text;
            result = {'variant': 'text-lg/semibold', 'color': 'header-primary'};
            record = _closure1_slot1;
            config = 30;
            config = cntext[config];
            papara = record.bind(report)(config);
            cntext = papara.parseInlineReply;
            if(update) { _fun00008_ip = 1323; continue _fun00007 }
 1315:
            record = kiloes.topic;
            _fun00008_ip = 1329; continue _fun00007;
 1323:
            record = kiloes.summShort;
 1329:
            config = true;
            config = cntext.bind(papara)(record, config);
            result['children'] = config;
            echoed = sequen.bind(report)(source, result);
 1347:
            result = new Array(3);
            result[0] = echoed;
            echoed = null;
            if(vacuum) { _fun00008_ip = 1486; continue _fun00007 }
 1363:
            source = 0.7;
            echoed = null;
            if(!(!(ctrled > source))) { _fun00008_ip = 1486; continue _fun00007 }
 1379:
            echoed = null;
            if(update) { _fun00008_ip = 1486; continue _fun00007 }
 1384:
            ctrled = _closure1_slot12;
            source = _closure1_slot0;
            record = _closure1_slot2;
            update = 29;
            update = record[update];
            update = source.bind(report)(update);
            source = update.Text;
            update = {'variant': 'text-md/normal', 'color': 'text-secondary'};
            sequen = {};
            config = 8;
            sequen['marginTop'] = config;
            update['style'] = sequen;
            config = _closure1_slot1;
            sequen = 30;
            sequen = record[sequen];
            cntext = config.bind(report)(sequen);
            record = cntext.parseInlineReply;
            config = kiloes.summShort;
            sequen = true;
            sequen = record.bind(cntext)(config, sequen);
            update['children'] = sequen;
            echoed = ctrled.bind(report)(source, update);
 1486:
            result[1] = echoed;
            source = _closure1_slot12;
            update = _closure1_slot5;
            echoed = {};
            ctrled = {};
            if(vacuum) { _fun00008_ip = 1511; continue _fun00007 }
 1505:
            vacuum = _closure1_slot10;
            _fun00008_ip = 1542; continue _fun00007;
 1511:
            config = _closure1_slot1;
            record = _closure1_slot2;
            sequen = 11;
            sequen = record[sequen];
            sequen = config.bind(report)(sequen);
            sequen = sequen.spacing;
            vacuum = sequen.PX_4;
 1542:
            ctrled['marginTop'] = vacuum;
            vacuum = _closure1_slot10;
            ctrled['marginBottom'] = vacuum;
            echoed['style'] = ctrled;
            sequen = _closure1_slot12;
            vacuum = _closure1_slot16;
            ctrled = {};
            ctrled['topic'] = kiloes;
            ctrled = sequen.bind(report)(vacuum, ctrled);
            echoed['children'] = ctrled;
            echoed = source.bind(report)(update, echoed);
            result[2] = echoed;
            offset['children'] = result;
            offset = output.bind(report)(foxtra, offset);
            oscard['children'] = offset;
            golfie = verify.bind(report)(golfie, oscard);
            oscard = new Array(2);
            oscard[0] = golfie;
            golfie = null;
            if(option) { _fun00008_ip = 1708; continue _fun00007 }
 1626:
            offset = _closure1_slot12;
            verify = _closure1_slot5;
            option = {};
            romeon = romeon.footer;
            option['style'] = romeon;
            foxtra = _closure1_slot12;
            romeon = _closure1_slot0;
            output = _closure1_slot2;
            yankee = 31;
            yankee = output[yankee];
            yankee = romeon.bind(report)(yankee);
            romeon = yankee.SummaryShareRow;
            yankee = {};
            yankee['channel'] = sizing;
            yankee['topic'] = kiloes;
            yankee['active'] = backup;
            yankee = foxtra.bind(report)(romeon, yankee);
            option['children'] = yankee;
            golfie = offset.bind(report)(verify, option);
 1708:
            oscard[1] = golfie;
            michal['children'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return michal;
 1724:
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    zuuluu['MAX_AVATARS_IN_PILE'] = michal;
    return entity;
})();