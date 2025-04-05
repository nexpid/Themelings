// app/modules/main_tabs_v2/native/tabs/gravity/GravityConversationSummaryRow.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    romeon = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = romeon;
    var _closure1_slot2 = golfie;
    entity = function(argFoo) { // Original name: ConversationMessage
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            echoed = entity.muted;
            zuuluu = entity.message;
            var _closure2_slot0 = zuuluu;
            output = entity.channel;
            var _closure2_slot1 = output;
            vacuum = entity.showTimestamps;
            zuuluu = _closure1_slot0;
            report = _closure1_slot2;
            entity = 13;
            oscard = report[entity];
            tangon = undefined;
            verify = zuuluu.bind(tangon)(oscard);
            option = verify.useStateFromStores;
            oscard = _closure1_slot9;
            golfie = new Array(1);
            golfie[0] = oscard;
            oscard = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    report = _closure1_slot9;
                    tangon = report.getMessage;
                    entity = _closure2_slot0;
                    zuuluu = entity.channel_id;
                    entity = entity.id;
                    entity = tangon.bind(report)(zuuluu, entity);
                    zuuluu = null;
                    if(!(zuuluu == entity)) { _fun00004_ip = 46; continue _fun00003 }
 42:
                    entity = _closure2_slot0;
 46:
                    return entity;
                }
            };
            result = option.bind(verify)(golfie, oscard);
            var _closure2_slot2 = result;
            oscard = _closure1_slot17;
            kiloes = oscard.bind(tangon)();
            entity = report[entity];
            oscard = zuuluu.bind(tangon)(entity);
            report = oscard.useStateFromStores;
            entity = _closure1_slot7;
            zuuluu = new Array(1);
            zuuluu[0] = entity;
            entity = function() {
                tangon = _closure1_slot7;
                zuuluu = tangon.getMember;
                michal = _closure2_slot1;
                michal = michal.guild_id;
                entity = _closure2_slot2;
                entity = entity.author;
                entity = entity.id;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            entity = report.bind(oscard)(zuuluu, entity);
            oscard = _closure1_slot4;
            report = oscard.useMemo;
            zuuluu = result.attachments;
            golfie = zuuluu.length;
            zuuluu = new Array(3);
            zuuluu[0] = golfie;
            golfie = result.content;
            zuuluu[1] = golfie;
            golfie = result.embeds;
            zuuluu[2] = golfie;
            michal = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = _closure2_slot2;
                    entity = entity.embeds;
                    michal = entity.length;
                    entity = 1;
                    michal = entity !== michal;
                    if(michal) { _fun00006_ip = 49; continue _fun00005 }
 28:
                    entity = _closure2_slot2;
                    entity = entity.attachments;
                    tangon = entity.length;
                    entity = 0;
                    michal = tangon > entity;
 49:
                    entity = !michal;
                    if(michal) { _fun00006_ip = 127; continue _fun00005 }
 55:
                    michal = _closure2_slot2;
                    michal = michal.embeds;
                    report = 0;
                    michal = michal[report];
                    tangon = michal.type;
                    michal = _closure1_slot14;
                    michal = michal.GIFV;
                    michal = tangon === michal;
                    if(!michal) { _fun00006_ip = 124; continue _fun00005 }
 96:
                    zuuluu = _closure2_slot2;
                    tangon = zuuluu.embeds;
                    tangon = tangon[report];
                    tangon = tangon.url;
                    zuuluu = zuuluu.content;
                    michal = tangon === zuuluu;
 124:
                    entity = michal;
 127:
                    return entity;
                }
            };
            update = report.bind(oscard)(michal, zuuluu);
            offset = null;
            michal = offset == entity;
            sequen = undefined;
            if(michal) { _fun00002_ip = 218; continue _fun00001 }
 212:
            sequen = entity.colorString;
 218:
            if(!(offset == sequen)) { _fun00002_ip = 257; continue _fun00001 }
 222:
            michal = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 14;
            entity = zuuluu[entity];
            zuuluu = michal.bind(tangon)(entity);
            michal = zuuluu.int2hex;
            entity = _closure1_slot13;
            sequen = michal.bind(zuuluu)(entity);
 257:
            yankee = _closure1_slot0;
            verify = _closure1_slot2;
            entity = 15;
            entity = verify[entity];
            report = yankee.bind(tangon)(entity);
            zuuluu = report.extractMediaSourcesFromMessage;
            limora = output.guild_id;
            entity = 16;
            entity = verify[entity];
            entity = yankee.bind(tangon)(entity);
            sierra = entity.GRAVITY_VALID_EMBED_TYPES;
            quebec = report;
            equals = result;
            whisks = result;
            romeon = quebec[zuuluu](equals, whisks, limora, sierra, status);
            entity = 17;
            entity = verify[entity];
            oscard = yankee.bind(tangon)(entity);
            report = oscard.useName;
            zuuluu = output.guild_id;
            michal = output.id;
            entity = result.author;
            ctrled = report.bind(oscard)(zuuluu, michal, entity);
            zuuluu = _closure1_slot16;
            michal = _closure1_slot5;
            entity = {};
            report = kiloes.messageContainer;
            entity['style'] = report;
            golfie = _closure1_slot15;
            oscard = _closure1_slot1;
            option = 18;
            report = verify[option];
            oscard = oscard.bind(tangon)(report);
            report = {};
            foxtra = result.author;
            report['user'] = foxtra;
            option = verify[option];
            option = yankee.bind(tangon)(option);
            option = option.AvatarSizes;
            option = option.REFRESH_MEDIUM_32;
            report['size'] = option;
            option = output.guild_id;
            report['guildId'] = option;
            oscard = golfie.bind(tangon)(oscard, report);
            report = new Array(2);
            report[0] = oscard;
            option = _closure1_slot16;
            golfie = _closure1_slot5;
            oscard = {};
            foxtra = kiloes.messageContent;
            oscard['style'] = foxtra;
            foxtra = _closure1_slot16;
            sizing = 19;
            verify = verify[sizing];
            verify = yankee.bind(tangon)(verify);
            yankee = verify.Text;
            verify = {'style': null, 'variant': 'text-md/semibold', 'color': 'text-primary'};
            source = {};
            source['color'] = sequen;
            verify['style'] = source;
            source = new Array(2);
            source[0] = ctrled;
            ctrled = null;
            if(!vacuum) { _fun00002_ip = 659; continue _fun00001 }
 540:
            config = _closure1_slot16;
            cntext = _closure1_slot0;
            status = _closure1_slot2;
            vacuum = status[sizing];
            vacuum = cntext.bind(tangon)(vacuum);
            sequen = vacuum.Text;
            vacuum = {'variant': 'text-xs/normal', 'color': 'header-muted'};
            record = 20;
            record = status[record];
            papara = cntext.bind(tangon)(record);
            cntext = papara.getRelativeTimestamp;
            target = _closure1_slot1;
            record = 21;
            record = status[record];
            status = target.bind(tangon)(record);
            target = status.extractTimestamp;
            record = result.id;
            record = target.bind(status)(record);
            cntext = cntext.bind(papara)(record);
            record = ['   '];
            record[1] = cntext;
            vacuum['children'] = record;
            ctrled = config.bind(tangon)(sequen, vacuum);
 659:
            source[1] = ctrled;
            verify['children'] = source;
            yankee = foxtra.bind(tangon)(yankee, verify);
            verify = new Array(4);
            verify[0] = yankee;
            yankee = result.content;
            foxtra = yankee.length;
            yankee = 0;
            foxtra = foxtra > yankee;
            if(!foxtra) { _fun00002_ip = 703; continue _fun00001 }
 700:
            foxtra = !update;
 703:
            if(!foxtra) { _fun00002_ip = 791; continue _fun00001 }
 706:
            source = _closure1_slot15;
            update = _closure1_slot0;
            sequen = _closure1_slot2;
            sizing = sequen[sizing];
            sizing = update.bind(tangon)(sizing);
            update = sizing.Text;
            sizing = {'variant': 'text-md/normal', 'lineClamp': 2, 'color': 'text-primary'};
            vacuum = _closure1_slot1;
            ctrled = 22;
            ctrled = sequen[ctrled];
            config = vacuum.bind(tangon)(ctrled);
            sequen = config.parseInlineReply;
            vacuum = result.content;
            ctrled = true;
            ctrled = sequen.bind(config)(vacuum, ctrled);
            sizing['children'] = ctrled;
            foxtra = source.bind(tangon)(update, sizing);
 791:
            verify[1] = foxtra;
            offset = offset != romeon;
            if(!offset) { _fun00002_ip = 811; continue _fun00001 }
 802:
            romeon = romeon.length;
            offset = romeon > yankee;
 811:
            if(!offset) { _fun00002_ip = 869; continue _fun00001 }
 814:
            sizing = _closure1_slot15;
            foxtra = _closure1_slot0;
            update = _closure1_slot2;
            romeon = 23;
            romeon = update[romeon];
            romeon = foxtra.bind(tangon)(romeon);
            foxtra = romeon.MediaOnlyRowPreview;
            romeon = {};
            romeon['message'] = result;
            romeon['muted'] = echoed;
            echoed = 2;
            romeon['lineClamp'] = echoed;
            offset = sizing.bind(tangon)(foxtra, romeon);
 869:
            verify[2] = offset;
            offset = result.reactions;
            offset = offset.length;
            offset = offset > yankee;
            if(!offset) { _fun00002_ip = 968; continue _fun00001 }
 891:
            foxtra = _closure1_slot15;
            romeon = _closure1_slot5;
            yankee = {};
            kiloes = kiloes.emojiContainer;
            yankee['style'] = kiloes;
            sizing = _closure1_slot15;
            kiloes = _closure1_slot1;
            echoed = _closure1_slot2;
            backup = 24;
            backup = echoed[backup];
            kiloes = kiloes.bind(tangon)(backup);
            backup = {};
            backup['message'] = result;
            backup['channel'] = output;
            output = true;
            backup['hideAdditionalButtons'] = output;
            backup = sizing.bind(tangon)(kiloes, backup);
            yankee['children'] = backup;
            offset = foxtra.bind(tangon)(romeon, yankee);
 968:
            verify[3] = offset;
            oscard['children'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = function() { // Original name: CardGradient
        michal = _closure1_slot17;
        tangon = undefined;
        oscard = michal.bind(tangon)();
        option = _closure1_slot0;
        golfie = _closure1_slot2;
        michal = 25;
        michal = golfie[michal];
        verify = option.bind(tangon)(michal);
        report = verify.useToken;
        michal = _closure1_slot1;
        zuuluu = 12;
        zuuluu = golfie[zuuluu];
        zuuluu = michal.bind(tangon)(zuuluu);
        zuuluu = zuuluu.colors;
        zuuluu = zuuluu.ACTION_SHEET_GRADIENT_BG;
        offset = report.bind(verify)(zuuluu);
        zuuluu = 26;
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
        zuuluu = _closure1_slot15;
        entity = 27;
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
    var _closure1_slot19 = entity;
    entity = function(argFoo) { // Original name: ConversationMessages
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
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
            michal = 13;
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
            zuuluu = _closure1_slot10;
            verify = new Array(1);
            verify[0] = zuuluu;
            zuuluu = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zuuluu = _closure2_slot1;
                    entity = null;
                    entity = entity != zuuluu;
                    if(!entity) { _fun00010_ip = 54; continue _fun00009 }
 16:
                    report = _closure1_slot10;
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
            zuuluu = _closure1_slot17;
            result = zuuluu.bind(report)();
            verify = _closure1_slot1;
            zuuluu = 21;
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
            verify = 16;
            verify = golfie[verify];
            verify = tangon.bind(report)(verify);
            verify = verify.ACTIVE_CONVERSATION_AGE;
            verify = offset < verify;
            var _closure2_slot3 = verify;
            michal = golfie[michal];
            offset = tangon.bind(report)(michal);
            golfie = offset.useStateFromStores;
            michal = _closure1_slot9;
            tangon = new Array(1);
            tangon[0] = michal;
            michal = function() {
                zuuluu = _closure1_slot9;
                michal = zuuluu.getMessages;
                entity = _closure2_slot0;
                entity = entity.channelId;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            michal = golfie.bind(offset)(tangon, michal);
            echoed = oscard;
            if(!verify) { _fun00008_ip = 331; continue _fun00007 }
 277:
            tangon = michal._array;
            golfie = tangon.length;
            tangon = 0;
            echoed = oscard;
            if(!(golfie > tangon)) { _fun00008_ip = 331; continue _fun00007 }
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
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    zuuluu = _closure2_slot7;
                    michal = _closure2_slot0;
                    michal = michal.id;
                    if(!(zuuluu === michal)) { _fun00012_ip = 65; continue _fun00011 }
 20:
                    zuuluu = _closure2_slot4;
                    michal = 0;
                    michal = michal !== zuuluu;
                    if(!michal) { _fun00012_ip = 47; continue _fun00011 }
 33:
                    tangon = _closure2_slot4;
                    zuuluu = 460;
                    michal = tangon >= zuuluu;
 47:
                    if(!michal) { _fun00012_ip = 107; continue _fun00011 }
 50:
                    tangon = _closure2_slot6;
                    zuuluu = undefined;
                    michal = true;
                    michal = tangon.bind(zuuluu)(michal);
                    _fun00012_ip = 107; continue _fun00011;
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
            if(michal) { _fun00008_ip = 862; continue _fun00007 }
 526:
            tangon = _closure1_slot16;
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
            romeon = _closure1_slot16;
            golfie = _closure1_slot5;
            oscard = {};
            backup = result.messagesContainer;
            foxtra = new Array(2);
            foxtra[0] = backup;
            backup = yankee;
            if(!backup) { _fun00008_ip = 611; continue _fun00007 }
 605:
            backup = result.messagesContainerGradient;
 611:
            foxtra[1] = backup;
            oscard['style'] = foxtra;
            kiloes = _closure1_slot15;
            backup = _closure1_slot5;
            foxtra = {};
            update = result.messages;
            output = new Array(2);
            output[0] = update;
            update = {};
            ctrled = 0;
            if(!verify) { _fun00008_ip = 681; continue _fun00007 }
 650:
            sequen = _closure1_slot1;
            config = _closure1_slot2;
            vacuum = 12;
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
                report = _closure1_slot15;
                tangon = _closure1_slot18;
                zuuluu = {};
                oscard = _closure2_slot2;
                zuuluu['muted'] = oscard;
                oscard = _closure2_slot1;
                zuuluu['channel'] = oscard;
                zuuluu['message'] = entity;
                michal = _closure2_slot3;
                zuuluu['showTimestamps'] = michal;
                michal = entity.id;
                entity = undefined;
                entity = report.bind(entity)(tangon, zuuluu, michal);
                return entity;
            };
            sizing = output.bind(echoed)(sizing);
            foxtra['children'] = sizing;
            backup = kiloes.bind(report)(backup, foxtra);
            foxtra = new Array(2);
            foxtra[0] = backup;
            backup = null;
            if(!verify) { _fun00008_ip = 800; continue _fun00007 }
 734:
            output = _closure1_slot15;
            sizing = _closure1_slot5;
            kiloes = {};
            result = result.typingArea;
            kiloes['style'] = result;
            update = _closure1_slot15;
            echoed = _closure1_slot1;
            ctrled = _closure1_slot2;
            result = 28;
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
            if(!yankee) { _fun00008_ip = 848; continue _fun00007 }
 827:
            golfie = null;
            if(verify) { _fun00008_ip = 848; continue _fun00007 }
 832:
            offset = _closure1_slot15;
            verify = _closure1_slot19;
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
    var _closure1_slot20 = entity;
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
    report = romeon.bind(entity)(report);
    var _closure1_slot10 = report;
    report = 8;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    foxtra = report.ICYMI_MARGIN;
    var _closure1_slot11 = foxtra;
    backup = report.MESSAGE_CONTENT_INSET;
    report = 9;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    option = report.ComponentActions;
    var _closure1_slot12 = option;
    option = report.DEFAULT_ROLE_COLOR;
    var _closure1_slot13 = option;
    report = report.MessageEmbedTypes;
    var _closure1_slot14 = report;
    report = 10;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    option = report.jsx;
    var _closure1_slot15 = option;
    report = report.jsxs;
    var _closure1_slot16 = report;
    report = 11;
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
    yankee = 12;
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
    var _closure1_slot17 = report;
    report = 39;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/main_tabs_v2/native/tabs/gravity/GravityConversationSummaryRow.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function(argFoo) { // Original name: GravityConversationSummaryRow
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
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
            update = function(argFoo) { // Original name: convertToWords
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
            entity = _closure1_slot17;
            romeon = entity.bind(report)();
            michal = _closure1_slot0;
            entity = _closure1_slot2;
            foxtra = 13;
            zuuluu = entity[foxtra];
            verify = michal.bind(report)(zuuluu);
            oscard = verify.useStateFromStores;
            zuuluu = _closure1_slot6;
            tangon = new Array(1);
            tangon[0] = zuuluu;
            zuuluu = function() {
                zuuluu = _closure1_slot6;
                michal = zuuluu.getChannel;
                entity = _closure2_slot0;
                entity = entity.channelId;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            sizing = oscard.bind(verify)(tangon, zuuluu);
            var _closure2_slot1 = sizing;
            entity = entity[foxtra];
            tangon = michal.bind(report)(entity);
            zuuluu = tangon.useStateFromStores;
            entity = _closure1_slot8;
            michal = new Array(1);
            michal[0] = entity;
            entity = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    zuuluu = _closure1_slot8;
                    michal = zuuluu.getGuild;
                    report = _closure2_slot1;
                    entity = null;
                    report = entity == report;
                    entity = undefined;
                    if(report) { _fun00016_ip = 44; continue _fun00015 }
 30:
                    report = _closure2_slot1;
                    tangon = report.getGuildId;
                    entity = tangon.bind(report)();
 44:
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                }
            };
            result = zuuluu.bind(tangon)(michal, entity);
            var _closure2_slot2 = result;
            entity = kiloes.messages;
            zuuluu = 0;
            michal = entity[zuuluu];
            entity = null;
            tangon = entity == michal;
            verify = undefined;
            if(tangon) { _fun00014_ip = 187; continue _fun00013 }
 181:
            verify = michal.author;
 187:
            offset = _closure1_slot1;
            michal = _closure1_slot2;
            oscard = 21;
            tangon = michal[oscard];
            output = offset.bind(report)(tangon);
            backup = output.age;
            echoed = kiloes.messageIds;
            tangon = kiloes.messageIds;
            tangon = tangon.length;
            offset = 1;
            tangon = tangon - offset;
            tangon = echoed[tangon];
            output = backup.bind(output)(tangon);
            tangon = _closure1_slot0;
            backup = 16;
            backup = michal[backup];
            backup = tangon.bind(report)(backup);
            backup = backup.ACTIVE_CONVERSATION_AGE;
            backup = output < backup;
            _closure2_slot3 = backup;
            michal = michal[foxtra];
            output = tangon.bind(report)(michal);
            foxtra = output.useStateFromStores;
            michal = _closure1_slot9;
            tangon = new Array(1);
            tangon[0] = michal;
            michal = function() {
                zuuluu = _closure1_slot9;
                michal = zuuluu.getMessages;
                entity = _closure2_slot0;
                entity = entity.channelId;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            michal = foxtra.bind(output)(tangon, michal);
            if(!backup) { _fun00014_ip = 333; continue _fun00013 }
 318:
            tangon = michal._array;
            tangon = tangon.length;
            if(!(!(tangon > zuuluu))) { _fun00014_ip = 355; continue _fun00013 }
 333:
            output = kiloes.messages;
            foxtra = output.slice;
            tangon = 3;
            tangon = foxtra.bind(output)(zuuluu, tangon);
            _fun00014_ip = 389; continue _fun00013;
 355:
            output = michal._array;
            foxtra = output.slice;
            michal = michal._array;
            echoed = michal.length;
            michal = 3;
            michal = echoed - michal;
            tangon = foxtra.bind(output)(michal);
 389:
            _closure2_slot4 = tangon;
            michal = tangon.length;
            michal = michal - offset;
            offset = tangon[michal];
            foxtra = entity == offset;
            michal = undefined;
            if(foxtra) { _fun00014_ip = 420; continue _fun00013 }
 415:
            michal = offset.id;
 420:
            _closure2_slot5 = michal;
            output = _closure1_slot4;
            foxtra = output.useMemo;
            offset = new Array(1);
            offset[0] = tangon;
            tangon = function() {
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
            tangon = foxtra.bind(output)(tangon, offset);
            _closure2_slot6 = tangon;
            output = _closure1_slot4;
            foxtra = output.useEffect;
            offset = entity == result;
            echoed = undefined;
            if(offset) { _fun00014_ip = 481; continue _fun00013 }
 476:
            echoed = result.id;
 481:
            offset = new Array(2);
            offset[0] = echoed;
            offset[1] = tangon;
            tangon = function() {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    entity = _closure2_slot2;
                    oscard = null;
                    tangon = oscard == entity;
                    entity = undefined;
                    zuuluu = undefined;
                    if(tangon) { _fun00018_ip = 29; continue _fun00017 }
 20:
                    tangon = _closure2_slot2;
                    zuuluu = tangon.id;
 29:
                    if(!(oscard != zuuluu)) { _fun00018_ip = 94; continue _fun00017 }
 33:
                    tangon = _closure1_slot1;
                    report = _closure1_slot2;
                    zuuluu = 29;
                    zuuluu = report[zuuluu];
                    report = tangon.bind(entity)(zuuluu);
                    tangon = report.requestMembersById;
                    zuuluu = _closure2_slot2;
                    oscard = oscard == zuuluu;
                    zuuluu = undefined;
                    if(oscard) { _fun00018_ip = 84; continue _fun00017 }
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
            tangon = foxtra.bind(output)(tangon, offset);
            output = _closure1_slot4;
            foxtra = output.useEffect;
            offset = new Array(3);
            offset[0] = result;
            offset[1] = sizing;
            offset[2] = backup;
            tangon = function() {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    michal = _closure2_slot3;
                    if(!michal) { _fun00020_ip = 20; continue _fun00019 }
 10:
                    tangon = _closure2_slot2;
                    zuuluu = null;
                    michal = zuuluu != tangon;
 20:
                    if(!michal) { _fun00020_ip = 33; continue _fun00019 }
 23:
                    tangon = _closure2_slot1;
                    zuuluu = null;
                    michal = zuuluu != tangon;
 33:
                    if(!michal) { _fun00020_ip = 81; continue _fun00019 }
 36:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 30;
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
            tangon = foxtra.bind(output)(tangon, offset);
            foxtra = _closure1_slot4;
            offset = foxtra.useCallback;
            tangon = new Array(7);
            tangon[0] = sizing;
            tangon[1] = result;
            output = kiloes.id;
            tangon[2] = output;
            output = kiloes.startId;
            tangon[3] = output;
            output = kiloes.type;
            tangon[4] = output;
            tangon[5] = michal;
            tangon[6] = backup;
            michal = function() {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    report = _closure1_slot0;
                    yankee = _closure1_slot2;
                    oscard = 31;
                    zuuluu = yankee[oscard];
                    entity = undefined;
                    verify = report.bind(entity)(zuuluu);
                    option = verify.trackItemInteraction;
                    tangon = _closure2_slot0;
                    golfie = tangon.id;
                    offset = tangon.type;
                    tangon = 32;
                    tangon = yankee[tangon];
                    tangon = report.bind(entity)(tangon);
                    tangon = tangon.SummaryType;
                    tangon = tangon.SOURCE_1;
                    report = 'summary';
                    if(!(offset === tangon)) { _fun00022_ip = 86; continue _fun00021 }
 80:
                    report = 'summary_regenerated';
 86:
                    tangon = 'press_summary';
                    tangon = option.bind(verify)(golfie, report, tangon);
                    tangon = _closure2_slot1;
                    golfie = null;
                    if(!(golfie != tangon)) { _fun00022_ip = 117; continue _fun00021 }
 109:
                    tangon = _closure2_slot2;
                    if(!(golfie == tangon)) { _fun00022_ip = 224; continue _fun00021 }
 117:
                    tangon = _closure2_slot1;
                    tangon = golfie != tangon;
                    if(!tangon) { _fun00022_ip = 142; continue _fun00021 }
 128:
                    option = _closure2_slot1;
                    report = option.isDM;
                    tangon = report.bind(option)();
 142:
                    if(tangon) { _fun00022_ip = 173; continue _fun00021 }
 145:
                    report = _closure2_slot1;
                    report = golfie != report;
                    if(!report) { _fun00022_ip = 170; continue _fun00021 }
 156:
                    option = _closure2_slot1;
                    golfie = option.isGroupDM;
                    report = golfie.bind(option)();
 170:
                    tangon = report;
 173:
                    if(!tangon) { _fun00022_ip = 431; continue _fun00021 }
 179:
                    report = _closure1_slot0;
                    golfie = _closure1_slot2;
                    tangon = 35;
                    tangon = golfie[tangon];
                    golfie = report.bind(entity)(tangon);
                    report = golfie.transitionToChannel;
                    tangon = _closure2_slot1;
                    tangon = tangon.id;
                    tangon = report.bind(golfie)(tangon);
                    _fun00022_ip = 431; continue _fun00021;
 224:
                    tangon = _closure2_slot3;
                    if(tangon) { _fun00022_ip = 329; continue _fun00021 }
 231:
                    report = _closure1_slot1;
                    golfie = _closure1_slot2;
                    tangon = 34;
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
                    _fun00022_ip = 431; continue _fun00021;
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
                    zuuluu = 33;
                    zuuluu = report[zuuluu];
                    zuuluu = tangon.bind(entity)(zuuluu);
                    report = zuuluu.ComponentDispatch;
                    tangon = report.dispatch;
                    michal = _closure1_slot12;
                    zuuluu = michal.TEXTAREA_FOCUS;
                    michal = {};
                    oscard = oscard.id;
                    michal['channelId'] = oscard;
                    michal = tangon.bind(report)(zuuluu, michal);
 431:
                    return entity;
                }
            };
            foxtra = offset.bind(foxtra)(michal, tangon);
            output = _closure1_slot4;
            offset = output.useCallback;
            michal = kiloes.channelId;
            tangon = new Array(3);
            tangon[0] = michal;
            michal = kiloes.id;
            tangon[1] = michal;
            michal = kiloes.type;
            tangon[2] = michal;
            michal = function() {
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    report = _closure1_slot0;
                    offset = _closure1_slot2;
                    entity = 31;
                    michal = offset[entity];
                    entity = undefined;
                    option = report.bind(entity)(michal);
                    golfie = option.trackItemInteraction;
                    tangon = _closure2_slot0;
                    oscard = tangon.id;
                    verify = tangon.type;
                    tangon = 32;
                    tangon = offset[tangon];
                    tangon = report.bind(entity)(tangon);
                    tangon = tangon.SummaryType;
                    tangon = tangon.SOURCE_1;
                    report = 'summary';
                    if(!(verify === tangon)) { _fun00024_ip = 86; continue _fun00023 }
 80:
                    report = 'summary_regenerated';
 86:
                    tangon = 'long_press_channel';
                    tangon = golfie.bind(option)(oscard, report, tangon);
                    tangon = _closure1_slot0;
                    report = _closure1_slot2;
                    zuuluu = 36;
                    zuuluu = report[zuuluu];
                    tangon = tangon.bind(entity)(zuuluu);
                    zuuluu = tangon.openChannelLongPressActionSheet;
                    michal = _closure2_slot0;
                    michal = michal.channelId;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                }
            };
            offset = offset.bind(output)(michal, tangon);
            if(!(entity != sizing)) { _fun00014_ip = 1727; continue _fun00013 }
 674:
            michal = sizing.guild_id;
            if(!(entity != michal)) { _fun00014_ip = 1727; continue _fun00013 }
 686:
            if(!(entity != result)) { _fun00014_ip = 1727; continue _fun00013 }
 693:
            if(!(entity != verify)) { _fun00014_ip = 1727; continue _fun00013 }
 700:
            output = global;
            echoed = output.Set;
            michal = kiloes.messages;
            michal = michal[zuuluu];
            michal = michal.content;
            source = update.bind(report)(michal);
            tangon = source.filter;
            michal = function(argFoo) {
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    tangon = argFoo;
                    michal = tangon.startsWith;
                    entity = 'http';
                    entity = michal.bind(tangon)(entity);
                    entity = !entity;
                    if(!entity) { _fun00026_ip = 42; continue _fun00025 }
 24:
                    zuuluu = tangon.startsWith;
                    michal = 'https';
                    michal = zuuluu.bind(tangon)(michal);
                    entity = !michal;
 42:
                    return entity;
                }
            };
            status = tangon.bind(source)(michal);
            tangon = echoed.prototype;
            tangon = Object.create(tangon, {constructor: {value: echoed}});
            sierra = tangon;
            michal = new sierra[echoed](status, target);
            echoed = michal instanceof Object ? michal : tangon;
            source = output.Set;
            michal = kiloes.topic;
            status = update.bind(report)(michal);
            tangon = source.prototype;
            tangon = Object.create(tangon, {constructor: {value: source}});
            sierra = tangon;
            michal = new sierra[source](status, target);
            tangon = michal instanceof Object ? michal : tangon;
            source = output.Set;
            michal = kiloes.summShort;
            status = update.bind(report)(michal);
            update = source.prototype;
            update = Object.create(update, {constructor: {value: source}});
            sierra = update;
            michal = new sierra[source](status, target);
            michal = michal instanceof Object ? michal : update;
            _closure2_slot7 = michal;
            source = output.Array;
            update = source.from;
            ctrled = update.bind(source)(echoed);
            source = ctrled.filter;
            update = function(argFoo) {
                zuuluu = _closure2_slot7;
                michal = zuuluu.has;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            update = source.bind(ctrled)(update);
            update = update.length;
            echoed = echoed.size;
            ctrled = update / echoed;
            echoed = output.Array;
            output = echoed.from;
            echoed = output.bind(echoed)(tangon);
            output = echoed.filter;
            golfie = function(argFoo) {
                zuuluu = _closure2_slot7;
                michal = zuuluu.has;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            golfie = output.bind(echoed)(golfie);
            golfie = golfie.length;
            tangon = tangon.size;
            golfie = golfie / tangon;
            tangon = 0.8;
            update = golfie > tangon;
            if(!update) { _fun00014_ip = 966; continue _fun00013 }
 954:
            tangon = michal.size;
            michal = 15;
            update = tangon < michal;
 966:
            michal = kiloes.summShort;
            michal = michal.length;
            vacuum = zuuluu === michal;
            if(!vacuum) { _fun00014_ip = 999; continue _fun00013 }
 984:
            michal = kiloes.topic;
            michal = michal.length;
            vacuum = zuuluu === michal;
 999:
            tangon = _closure1_slot16;
            golfie = _closure1_slot0;
            output = _closure1_slot2;
            michal = 31;
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
            oscard = 32;
            oscard = output[oscard];
            oscard = golfie.bind(report)(oscard);
            oscard = oscard.SummaryType;
            golfie = oscard.SOURCE_1;
            oscard = 'summary';
            if(!(verify === golfie)) { _fun00014_ip = 1136; continue _fun00013 }
 1130:
            oscard = 'summary_regenerated';
 1136:
            michal['type'] = oscard;
            michal['onHeaderPress'] = foxtra;
            michal['onHeaderLongPress'] = offset;
            michal['isActive'] = backup;
            verify = _closure1_slot15;
            golfie = _closure1_slot0;
            output = _closure1_slot2;
            oscard = 37;
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
            output = _closure1_slot16;
            foxtra = _closure1_slot5;
            offset = {};
            result = romeon.container;
            offset['style'] = result;
            echoed = null;
            if(vacuum) { _fun00014_ip = 1350; continue _fun00013 }
 1250:
            sequen = _closure1_slot15;
            source = _closure1_slot0;
            cntext = _closure1_slot2;
            result = 19;
            result = cntext[result];
            result = source.bind(report)(result);
            source = result.Text;
            result = {'variant': 'text-lg/semibold', 'color': 'header-primary'};
            record = _closure1_slot1;
            config = 22;
            config = cntext[config];
            papara = record.bind(report)(config);
            cntext = papara.parseInlineReply;
            if(update) { _fun00014_ip = 1326; continue _fun00013 }
 1318:
            record = kiloes.topic;
            _fun00014_ip = 1332; continue _fun00013;
 1326:
            record = kiloes.summShort;
 1332:
            config = true;
            config = cntext.bind(papara)(record, config);
            result['children'] = config;
            echoed = sequen.bind(report)(source, result);
 1350:
            result = new Array(3);
            result[0] = echoed;
            echoed = null;
            if(vacuum) { _fun00014_ip = 1489; continue _fun00013 }
 1366:
            source = 0.7;
            echoed = null;
            if(!(!(ctrled > source))) { _fun00014_ip = 1489; continue _fun00013 }
 1382:
            echoed = null;
            if(update) { _fun00014_ip = 1489; continue _fun00013 }
 1387:
            ctrled = _closure1_slot15;
            source = _closure1_slot0;
            record = _closure1_slot2;
            update = 19;
            update = record[update];
            update = source.bind(report)(update);
            source = update.Text;
            update = {'variant': 'text-md/normal', 'color': 'text-secondary'};
            sequen = {};
            config = 8;
            sequen['marginTop'] = config;
            update['style'] = sequen;
            config = _closure1_slot1;
            sequen = 22;
            sequen = record[sequen];
            cntext = config.bind(report)(sequen);
            record = cntext.parseInlineReply;
            config = kiloes.summShort;
            sequen = true;
            sequen = record.bind(cntext)(config, sequen);
            update['children'] = sequen;
            echoed = ctrled.bind(report)(source, update);
 1489:
            result[1] = echoed;
            source = _closure1_slot15;
            update = _closure1_slot5;
            echoed = {};
            ctrled = {};
            if(vacuum) { _fun00014_ip = 1514; continue _fun00013 }
 1508:
            vacuum = _closure1_slot11;
            _fun00014_ip = 1545; continue _fun00013;
 1514:
            config = _closure1_slot1;
            record = _closure1_slot2;
            sequen = 12;
            sequen = record[sequen];
            sequen = config.bind(report)(sequen);
            sequen = sequen.spacing;
            vacuum = sequen.PX_4;
 1545:
            ctrled['marginTop'] = vacuum;
            vacuum = _closure1_slot11;
            ctrled['marginBottom'] = vacuum;
            echoed['style'] = ctrled;
            sequen = _closure1_slot15;
            vacuum = _closure1_slot20;
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
            if(option) { _fun00014_ip = 1711; continue _fun00013 }
 1629:
            offset = _closure1_slot15;
            verify = _closure1_slot5;
            option = {};
            romeon = romeon.footer;
            option['style'] = romeon;
            foxtra = _closure1_slot15;
            romeon = _closure1_slot0;
            output = _closure1_slot2;
            yankee = 38;
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
 1711:
            oscard[1] = golfie;
            michal['children'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return michal;
 1727:
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    zuuluu['MAX_AVATARS_IN_PILE'] = michal;
    return entity;
})();