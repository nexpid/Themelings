// app/modules/main_tabs_v2/native/tabs/gravity/ConversationMessage.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    yankee = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
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
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot3 = tangon;
    romeon = 1;
    tangon = oscard[romeon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.DEFAULT_ROLE_COLOR;
    var _closure1_slot7 = golfie;
    tangon = tangon.MessageEmbedTypes;
    var _closure1_slot8 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.jsx;
    var _closure1_slot9 = golfie;
    tangon = tangon.jsxs;
    var _closure1_slot10 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {};
    offset = 'row';
    verify['flexDirection'] = offset;
    offset = 7;
    foxtra = oscard[offset];
    foxtra = yankee.bind(entity)(foxtra);
    foxtra = foxtra.spacing;
    foxtra = foxtra.PX_8;
    verify['gap'] = foxtra;
    tangon['messageContainer'] = verify;
    verify = {};
    verify['flex'] = romeon;
    tangon['messageContent'] = verify;
    verify = {};
    offset = oscard[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.spacing;
    offset = offset.PX_8;
    verify['marginTop'] = offset;
    offset = 'none';
    verify['pointerEvents'] = offset;
    tangon['emojiContainer'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot11 = tangon;
    tangon = 20;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/tabs/gravity/ConversationMessage.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: ConversationMessage
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.message;
            var _closure2_slot0 = zuuluu;
            backup = entity.channel;
            var _closure2_slot1 = backup;
            update = entity.showTimestamps;
            output = entity.muted;
            tangon = undefined;
            if(!(output === tangon)) { _fun00002_ip = 43; continue _fun00001 }
 41:
            output = false;
 43:
            var _closure2_slot2 = tangon;
            entity = _closure1_slot11;
            foxtra = entity.bind(tangon)();
            zuuluu = _closure1_slot0;
            report = _closure1_slot2;
            entity = 8;
            oscard = report[entity];
            verify = zuuluu.bind(tangon)(oscard);
            option = verify.useStateFromStores;
            oscard = _closure1_slot6;
            golfie = new Array(1);
            golfie[0] = oscard;
            oscard = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    report = _closure1_slot6;
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
            kiloes = option.bind(verify)(golfie, oscard);
            _closure2_slot2 = kiloes;
            entity = report[entity];
            oscard = zuuluu.bind(tangon)(entity);
            report = oscard.useStateFromStores;
            entity = _closure1_slot5;
            zuuluu = new Array(1);
            zuuluu[0] = entity;
            entity = function() {
                tangon = _closure1_slot5;
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
            oscard = _closure1_slot3;
            report = oscard.useMemo;
            zuuluu = kiloes.attachments;
            golfie = zuuluu.length;
            zuuluu = new Array(3);
            zuuluu[0] = golfie;
            golfie = kiloes.content;
            zuuluu[1] = golfie;
            golfie = kiloes.embeds;
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
                    if(michal) { _fun00006_ip = 131; continue _fun00005 }
 55:
                    michal = _closure2_slot2;
                    michal = michal.embeds;
                    report = 0;
                    michal = michal[report];
                    tangon = michal.type;
                    michal = _closure1_slot8;
                    michal = michal.GIFV;
                    michal = tangon === michal;
                    if(!michal) { _fun00006_ip = 128; continue _fun00005 }
 96:
                    tangon = _closure2_slot2;
                    tangon = tangon.embeds;
                    tangon = tangon[report];
                    tangon = tangon.url;
                    zuuluu = _closure2_slot2;
                    zuuluu = zuuluu.content;
                    michal = tangon === zuuluu;
 128:
                    entity = michal;
 131:
                    return entity;
                }
            };
            result = report.bind(oscard)(michal, zuuluu);
            option = null;
            michal = option == entity;
            source = undefined;
            if(michal) { _fun00002_ip = 228; continue _fun00001 }
 222:
            source = entity.colorString;
 228:
            if(!(option == source)) { _fun00002_ip = 267; continue _fun00001 }
 232:
            michal = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 9;
            entity = zuuluu[entity];
            zuuluu = michal.bind(tangon)(entity);
            michal = zuuluu.int2hex;
            entity = _closure1_slot7;
            source = michal.bind(zuuluu)(entity);
 267:
            verify = _closure1_slot0;
            golfie = _closure1_slot2;
            entity = 10;
            entity = golfie[entity];
            report = verify.bind(tangon)(entity);
            zuuluu = report.extractMediaSourcesFromMessage;
            target = backup.guild_id;
            entity = 11;
            entity = golfie[entity];
            entity = verify.bind(tangon)(entity);
            papara = entity.GRAVITY_VALID_EMBED_TYPES;
            limora = report;
            sierra = kiloes;
            status = kiloes;
            offset = limora[zuuluu](sierra, status, target, papara, cntext);
            entity = 12;
            entity = golfie[entity];
            oscard = verify.bind(tangon)(entity);
            report = oscard.useName;
            zuuluu = backup.guild_id;
            michal = backup.id;
            entity = kiloes.author;
            echoed = report.bind(oscard)(zuuluu, michal, entity);
            zuuluu = _closure1_slot10;
            michal = _closure1_slot4;
            entity = {};
            report = foxtra.messageContainer;
            entity['style'] = report;
            yankee = _closure1_slot9;
            oscard = _closure1_slot1;
            sizing = 13;
            report = golfie[sizing];
            oscard = oscard.bind(tangon)(report);
            report = {};
            ctrled = kiloes.author;
            report['user'] = ctrled;
            sizing = golfie[sizing];
            sizing = verify.bind(tangon)(sizing);
            sizing = sizing.AvatarSizes;
            sizing = sizing.REFRESH_MEDIUM_32;
            report['size'] = sizing;
            sizing = backup.guild_id;
            report['guildId'] = sizing;
            oscard = yankee.bind(tangon)(oscard, report);
            report = new Array(2);
            report[0] = oscard;
            oscard = {};
            yankee = foxtra.messageContent;
            oscard['style'] = yankee;
            sizing = 14;
            golfie = golfie[sizing];
            golfie = verify.bind(tangon)(golfie);
            verify = golfie.Text;
            golfie = {'style': null, 'variant': 'text-md/semibold', 'color': 'text-primary'};
            yankee = {};
            yankee['color'] = source;
            golfie['style'] = yankee;
            yankee = new Array(2);
            yankee[0] = echoed;
            echoed = null;
            if(!update) { _fun00002_ip = 657; continue _fun00001 }
 538:
            ctrled = _closure1_slot10;
            sequen = _closure1_slot0;
            cntext = _closure1_slot2;
            update = cntext[sizing];
            update = sequen.bind(tangon)(update);
            source = update.Text;
            update = {'variant': 'text-xs/normal', 'color': 'header-muted'};
            vacuum = 15;
            vacuum = cntext[vacuum];
            config = sequen.bind(tangon)(vacuum);
            sequen = config.getRelativeTimestamp;
            record = _closure1_slot1;
            vacuum = 16;
            vacuum = cntext[vacuum];
            cntext = record.bind(tangon)(vacuum);
            record = cntext.extractTimestamp;
            vacuum = kiloes.id;
            vacuum = record.bind(cntext)(vacuum);
            sequen = sequen.bind(config)(vacuum);
            vacuum = ['   '];
            vacuum[1] = sequen;
            update['children'] = vacuum;
            echoed = ctrled.bind(tangon)(source, update);
 657:
            yankee[1] = echoed;
            golfie['children'] = yankee;
            verify = zuuluu.bind(tangon)(verify, golfie);
            golfie = new Array(4);
            golfie[0] = verify;
            verify = kiloes.content;
            yankee = verify.length;
            verify = 0;
            yankee = yankee > verify;
            if(!yankee) { _fun00002_ip = 701; continue _fun00001 }
 698:
            yankee = !result;
 701:
            if(!yankee) { _fun00002_ip = 789; continue _fun00001 }
 704:
            echoed = _closure1_slot9;
            result = _closure1_slot0;
            ctrled = _closure1_slot2;
            sizing = ctrled[sizing];
            sizing = result.bind(tangon)(sizing);
            result = sizing.Text;
            sizing = {'variant': 'text-md/normal', 'lineClamp': 5, 'color': 'text-primary'};
            source = _closure1_slot1;
            update = 17;
            update = ctrled[update];
            vacuum = source.bind(tangon)(update);
            ctrled = vacuum.parseInlineReply;
            source = kiloes.content;
            update = true;
            update = ctrled.bind(vacuum)(source, update);
            sizing['children'] = update;
            yankee = echoed.bind(tangon)(result, sizing);
 789:
            golfie[1] = yankee;
            option = option != offset;
            if(!option) { _fun00002_ip = 809; continue _fun00001 }
 800:
            offset = offset.length;
            option = offset > verify;
 809:
            if(!option) { _fun00002_ip = 867; continue _fun00001 }
 812:
            sizing = _closure1_slot9;
            yankee = _closure1_slot0;
            result = _closure1_slot2;
            offset = 18;
            offset = result[offset];
            offset = yankee.bind(tangon)(offset);
            yankee = offset.MediaOnlyRowPreview;
            offset = {};
            offset['message'] = kiloes;
            offset['muted'] = output;
            output = 2;
            offset['lineClamp'] = output;
            option = sizing.bind(tangon)(yankee, offset);
 867:
            golfie[2] = option;
            option = kiloes.reactions;
            option = option.length;
            option = option > verify;
            if(!option) { _fun00002_ip = 962; continue _fun00001 }
 889:
            yankee = _closure1_slot9;
            offset = _closure1_slot4;
            verify = {};
            foxtra = foxtra.emojiContainer;
            verify['style'] = foxtra;
            foxtra = _closure1_slot1;
            sizing = _closure1_slot2;
            romeon = 19;
            romeon = sizing[romeon];
            foxtra = foxtra.bind(tangon)(romeon);
            romeon = {};
            romeon['message'] = kiloes;
            romeon['channel'] = backup;
            backup = true;
            romeon['hideAdditionalButtons'] = backup;
            romeon = yankee.bind(tangon)(foxtra, romeon);
            verify['children'] = romeon;
            option = yankee.bind(tangon)(offset, verify);
 962:
            golfie[3] = option;
            oscard['children'] = golfie;
            oscard = zuuluu.bind(tangon)(michal, oscard);
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();