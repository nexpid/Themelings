// app/modules/messages/native/renderer/system_messages/RemoveRecipientSystemMessage.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: RemoveSelfSystemMessage
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            oscard = zuuluu.row;
            entity = zuuluu.channel;
            verify = zuuluu.formatProps;
            var _closure2_slot0 = verify;
            tangon = undefined;
            var _closure2_slot1 = tangon;
            zuuluu = null;
            option = zuuluu != entity;
            if(!option) { _fun00002_ip = 63; continue _fun00001 }
 41:
            report = _closure1_slot5;
            zuuluu = report.has;
            entity = entity.type;
            option = zuuluu.bind(report)(entity);
 63:
            _closure2_slot1 = option;
            golfie = _closure1_slot3;
            report = golfie.useMemo;
            zuuluu = new Array(2);
            zuuluu[0] = verify;
            zuuluu[1] = option;
            michal = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = _closure2_slot1;
                    golfie = _closure1_slot0;
                    option = _closure1_slot2;
                    zuuluu = 8;
                    tangon = option[zuuluu];
                    oscard = undefined;
                    tangon = golfie.bind(oscard)(tangon);
                    report = tangon.intl;
                    tangon = report.formatToParts;
                    zuuluu = option[zuuluu];
                    zuuluu = golfie.bind(oscard)(zuuluu);
                    zuuluu = zuuluu.t;
                    if(entity) { _fun00004_ip = 78; continue _fun00003 }
 60:
                    oscard = zuuluu.Qn5+LS;
                    entity = _closure2_slot0;
                    entity = tangon.bind(report)(oscard, entity);
                    _fun00004_ip = 94; continue _fun00003;
 78:
                    zuuluu = zuuluu.uHmblp;
                    michal = _closure2_slot0;
                    entity = tangon.bind(report)(zuuluu, michal);
 94:
                    return entity;
                }
            };
            report = report.bind(golfie)(michal, zuuluu);
            zuuluu = _closure1_slot8;
            michal = _closure1_slot1;
            golfie = _closure1_slot2;
            entity = 10;
            entity = golfie[entity];
            michal = michal.bind(tangon)(entity);
            entity = {};
            entity['row'] = oscard;
            entity['content'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = function(argFoo) { // Original name: RemoveOtherSystemMessage
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            oscard = entity.row;
            yankee = entity.channel;
            backup = entity.formatProps;
            var _closure2_slot0 = backup;
            offset = entity.otherUserId;
            var _closure2_slot1 = offset;
            verify = entity.roleStyle;
            var _closure2_slot2 = verify;
            tangon = undefined;
            var _closure2_slot4 = tangon;
            var _closure2_slot5 = tangon;
            var _closure2_slot6 = tangon;
            entity = oscard.message;
            kiloes = entity.channel_id;
            var _closure2_slot3 = kiloes;
            entity = null;
            foxtra = entity != yankee;
            if(!foxtra) { _fun00006_ip = 105; continue _fun00005 }
 83:
            report = _closure1_slot5;
            zuuluu = report.has;
            entity = yankee.type;
            foxtra = zuuluu.bind(report)(entity);
 105:
            _closure2_slot4 = foxtra;
            report = _closure1_slot0;
            golfie = _closure1_slot2;
            zuuluu = 11;
            zuuluu = golfie[zuuluu];
            output = report.bind(tangon)(zuuluu);
            sizing = output.useStateFromStores;
            zuuluu = _closure1_slot7;
            romeon = new Array(1);
            romeon[0] = zuuluu;
            option = new Array(1);
            option[0] = offset;
            zuuluu = function() {
                zuuluu = _closure1_slot7;
                michal = zuuluu.getUser;
                entity = _closure2_slot1;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            option = sizing.bind(output)(romeon, zuuluu, option);
            zuuluu = 6;
            zuuluu = golfie[zuuluu];
            report = report.bind(tangon)(zuuluu);
            zuuluu = report.useUserAuthorWithProcessedColor;
            zuuluu = zuuluu.bind(report)(option, yankee);
            yankee = zuuluu.nick;
            _closure2_slot5 = yankee;
            romeon = zuuluu.colorString;
            _closure2_slot6 = romeon;
            option = _closure1_slot3;
            report = option.useMemo;
            zuuluu = new Array(7);
            zuuluu[0] = kiloes;
            zuuluu[1] = backup;
            zuuluu[2] = foxtra;
            zuuluu[3] = romeon;
            zuuluu[4] = yankee;
            zuuluu[5] = offset;
            zuuluu[6] = verify;
            michal = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    report = {};
                    verify = _closure2_slot0;
                    offset = report;
                    michal = copyDataProperties(offset, verify);
                    zuuluu = _closure2_slot5;
                    michal = 'otherUsername';
                    report[michal] = zuuluu;
                    zuuluu = {};
                    michal = 'bindUserMenu';
                    zuuluu['action'] = michal;
                    michal = _closure2_slot1;
                    zuuluu['userId'] = michal;
                    michal = _closure2_slot6;
                    zuuluu['otherColorString'] = michal;
                    golfie = _closure2_slot2;
                    oscard = null;
                    tangon = 'username';
                    michal = null;
                    if(!(tangon === golfie)) { _fun00008_ip = 78; continue _fun00007 }
 74:
                    michal = _closure2_slot6;
 78:
                    zuuluu['linkColor'] = michal;
                    michal = _closure2_slot6;
                    zuuluu['roleColor'] = michal;
                    tangon = _closure2_slot2;
                    michal = 'dot';
                    michal = michal === tangon;
                    if(!michal) { _fun00008_ip = 115; continue _fun00007 }
 107:
                    tangon = _closure2_slot6;
                    michal = oscard != tangon;
 115:
                    zuuluu['shouldShowRoleDot'] = michal;
                    michal = _closure2_slot3;
                    zuuluu['messageChannelId'] = michal;
                    michal = 'otherUsernameOnClick';
                    report[michal] = zuuluu;
                    entity = _closure2_slot4;
                    golfie = _closure1_slot0;
                    option = _closure1_slot2;
                    michal = 8;
                    zuuluu = option[michal];
                    oscard = undefined;
                    zuuluu = golfie.bind(oscard)(zuuluu);
                    tangon = zuuluu.intl;
                    zuuluu = tangon.formatToParts;
                    michal = option[michal];
                    michal = golfie.bind(oscard)(michal);
                    michal = michal.t;
                    if(entity) { _fun00008_ip = 209; continue _fun00007 }
 195:
                    entity = michal.QtZ0RE;
                    entity = zuuluu.bind(tangon)(entity, report);
                    _fun00008_ip = 221; continue _fun00007;
 209:
                    michal = michal.KBrM5u;
                    entity = zuuluu.bind(tangon)(michal, report);
 221:
                    return entity;
                }
            };
            report = report.bind(option)(michal, zuuluu);
            zuuluu = _closure1_slot8;
            michal = _closure1_slot1;
            entity = 10;
            entity = golfie[entity];
            michal = michal.bind(tangon)(entity);
            entity = {};
            entity['row'] = oscard;
            entity['content'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.THREAD_CHANNEL_TYPES;
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot8 = tangon;
    tangon = 12;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/messages/native/renderer/system_messages/RemoveRecipientSystemMessage.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: RemoveRecipientSystemMessage
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            option = entity.row;
            oscard = _closure1_slot0;
            yankee = _closure1_slot2;
            tangon = 11;
            entity = yankee[tangon];
            report = undefined;
            romeon = oscard.bind(report)(entity);
            offset = romeon.useStateFromStores;
            entity = _closure1_slot4;
            verify = new Array(1);
            verify[0] = entity;
            golfie = function() {
                entity = _closure1_slot4;
                entity = entity.roleStyle;
                return entity;
            };
            entity = new Array(0);
            verify = offset.bind(romeon)(verify, golfie, entity);
            var _closure2_slot0 = verify;
            entity = option.message;
            romeon = entity.author;
            var _closure2_slot1 = romeon;
            offset = entity.mentions;
            golfie = 0;
            offset = offset[golfie];
            kiloes = entity.channel_id;
            var _closure2_slot2 = kiloes;
            tangon = yankee[tangon];
            sizing = oscard.bind(report)(tangon);
            backup = sizing.useStateFromStores;
            tangon = _closure1_slot6;
            foxtra = new Array(1);
            foxtra[0] = tangon;
            golfie = new Array(1);
            golfie[0] = kiloes;
            tangon = function() {
                zuuluu = _closure1_slot6;
                michal = zuuluu.getChannel;
                entity = _closure2_slot2;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            golfie = backup.bind(sizing)(foxtra, tangon, golfie);
            tangon = 6;
            tangon = yankee[tangon];
            oscard = oscard.bind(report)(tangon);
            tangon = oscard.useMessageAuthorWithProcessedColor;
            tangon = tangon.bind(oscard)(entity);
            foxtra = tangon.nick;
            var _closure2_slot3 = foxtra;
            backup = tangon.colorString;
            var _closure2_slot4 = backup;
            yankee = _closure1_slot3;
            oscard = yankee.useMemo;
            tangon = new Array(5);
            tangon[0] = kiloes;
            tangon[1] = backup;
            tangon[2] = foxtra;
            tangon[3] = verify;
            romeon = romeon.id;
            tangon[4] = romeon;
            zuuluu = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    entity = {};
                    michal = _closure2_slot3;
                    entity['username'] = michal;
                    michal = {};
                    tangon = 'bindUserMenu';
                    michal['action'] = tangon;
                    tangon = _closure2_slot1;
                    tangon = tangon.id;
                    michal['userId'] = tangon;
                    tangon = _closure2_slot4;
                    michal['colorString'] = tangon;
                    golfie = _closure2_slot0;
                    oscard = null;
                    report = 'username';
                    tangon = null;
                    if(!(report === golfie)) { _fun00012_ip = 67; continue _fun00011 }
 63:
                    tangon = _closure2_slot4;
 67:
                    michal['linkColor'] = tangon;
                    tangon = _closure2_slot4;
                    michal['roleColor'] = tangon;
                    report = _closure2_slot0;
                    tangon = 'dot';
                    tangon = tangon === report;
                    if(!tangon) { _fun00012_ip = 104; continue _fun00011 }
 96:
                    report = _closure2_slot4;
                    tangon = oscard != report;
 104:
                    michal['shouldShowRoleDot'] = tangon;
                    zuuluu = _closure2_slot2;
                    michal['messageChannelId'] = zuuluu;
                    zuuluu = true;
                    michal['medium'] = zuuluu;
                    entity['usernameOnClick'] = michal;
                    return entity;
                }
            };
            oscard = oscard.bind(yankee)(zuuluu, tangon);
            entity = entity.author;
            entity = entity.id;
            if(!(entity !== offset)) { _fun00010_ip = 310; continue _fun00009 }
 268:
            tangon = _closure1_slot8;
            zuuluu = _closure1_slot10;
            entity = {};
            entity['row'] = option;
            entity['channel'] = golfie;
            entity['formatProps'] = oscard;
            entity['otherUserId'] = offset;
            entity['roleStyle'] = verify;
            entity = tangon.bind(report)(zuuluu, entity);
            _fun00010_ip = 340; continue _fun00009;
 310:
            tangon = _closure1_slot8;
            zuuluu = _closure1_slot9;
            michal = {};
            michal['row'] = option;
            michal['channel'] = golfie;
            michal['formatProps'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 340:
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    michal = function(argFoo) { // Original name: createRemoveRecipientSystemMessage
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            tangon = argFoo;
            entity = tangon.message;
            yankee = tangon.roleStyle;
            oscard = entity.author;
            zuuluu = entity.mentions;
            michal = 0;
            romeon = zuuluu[michal];
            golfie = _closure1_slot6;
            report = golfie.getChannel;
            zuuluu = entity.channel_id;
            foxtra = report.bind(golfie)(zuuluu);
            offset = null;
            report = offset != foxtra;
            if(!report) { _fun00014_ip = 82; continue _fun00013 }
 63:
            option = _closure1_slot5;
            golfie = option.has;
            zuuluu = foxtra.type;
            report = golfie.bind(option)(zuuluu);
 82:
            verify = _closure1_slot0;
            backup = _closure1_slot2;
            output = 6;
            golfie = backup[output];
            zuuluu = undefined;
            option = verify.bind(zuuluu)(golfie);
            golfie = option.getMessageAuthorWithProcessedColor;
            option = golfie.bind(option)(entity);
            golfie = option.nick;
            result = option.colorString;
            echoed = option.colorStrings;
            kiloes = option.guildId;
            option = 7;
            option = backup[option];
            backup = verify.bind(zuuluu)(option);
            verify = backup.isNativeMessageEligibleForEnhancedRoleColors;
            option = oscard.id;
            backup = verify.bind(backup)(kiloes, option, yankee);
            verify = {};
            verify['username'] = golfie;
            option = {};
            sizing = 'bindUserMenu';
            option['action'] = sizing;
            golfie = oscard.id;
            option['userId'] = golfie;
            option['colorString'] = result;
            golfie = 'username';
            kiloes = golfie === yankee;
            golfie = null;
            if(!kiloes) { _fun00014_ip = 216; continue _fun00013 }
 213:
            golfie = result;
 216:
            option['linkColor'] = golfie;
            option['roleColor'] = result;
            golfie = null;
            if(!backup) { _fun00014_ip = 234; continue _fun00013 }
 231:
            golfie = echoed;
 234:
            option['roleColors'] = golfie;
            golfie = 'dot';
            golfie = golfie === yankee;
            yankee = golfie;
            if(!golfie) { _fun00014_ip = 257; continue _fun00013 }
 253:
            yankee = offset != result;
 257:
            option['shouldShowRoleDot'] = yankee;
            yankee = entity.channel_id;
            option['messageChannelId'] = yankee;
            yankee = true;
            option['medium'] = yankee;
            verify['usernameOnClick'] = option;
            oscard = oscard.id;
            if(!(oscard !== romeon)) { _fun00014_ip = 570; continue _fun00013 }
 296:
            option = _closure1_slot7;
            oscard = option.getUser;
            yankee = oscard.bind(option)(romeon);
            option = _closure1_slot0;
            oscard = _closure1_slot2;
            oscard = oscard[output];
            option = option.bind(zuuluu)(oscard);
            oscard = option.getUserAuthorWithProcessedColor;
            oscard = oscard.bind(option)(yankee, foxtra);
            output = oscard.nick;
            option = oscard.colorString;
            foxtra = oscard.colorStrings;
            yankee = {};
            vacuum = yankee;
            ctrled = verify;
            oscard = copyDataProperties(vacuum, ctrled);
            oscard = 'otherUsername';
            yankee[oscard] = output;
            oscard = {};
            oscard['action'] = sizing;
            oscard['userId'] = romeon;
            oscard['otherColorString'] = option;
            romeon = null;
            if(!kiloes) { _fun00014_ip = 402; continue _fun00013 }
 399:
            romeon = option;
 402:
            oscard['linkColor'] = romeon;
            oscard['roleColor'] = option;
            romeon = null;
            if(!backup) { _fun00014_ip = 420; continue _fun00013 }
 417:
            romeon = foxtra;
 420:
            oscard['roleColors'] = romeon;
            if(!golfie) { _fun00014_ip = 432; continue _fun00013 }
 428:
            golfie = offset != option;
 432:
            oscard['shouldShowRoleDot'] = golfie;
            entity = entity.channel_id;
            oscard['messageChannelId'] = entity;
            entity = 'otherUsernameOnClick';
            yankee[entity] = oscard;
            entity = {};
            golfie = _closure1_slot0;
            romeon = _closure1_slot2;
            oscard = 8;
            option = romeon[oscard];
            option = golfie.bind(zuuluu)(option);
            offset = option.intl;
            option = offset.formatToParts;
            oscard = romeon[oscard];
            oscard = golfie.bind(zuuluu)(oscard);
            golfie = oscard.t;
            if(report) { _fun00014_ip = 520; continue _fun00013 }
 506:
            oscard = golfie.QtZ0RE;
            oscard = option.bind(offset)(oscard, yankee);
            _fun00014_ip = 532; continue _fun00013;
 520:
            golfie = golfie.KBrM5u;
            oscard = option.bind(offset)(golfie, yankee);
 532:
            entity['content'] = oscard;
            golfie = _closure1_slot1;
            option = _closure1_slot2;
            oscard = 9;
            oscard = option[oscard];
            oscard = golfie.bind(zuuluu)(oscard);
            ctrled = oscard.bind(zuuluu)(tangon);
            vacuum = entity;
            oscard = copyDataProperties(vacuum, ctrled);
            return entity;
 570:
            entity = {};
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            oscard = 8;
            golfie = yankee[oscard];
            golfie = offset.bind(zuuluu)(golfie);
            option = golfie.intl;
            golfie = option.formatToParts;
            oscard = yankee[oscard];
            oscard = offset.bind(zuuluu)(oscard);
            oscard = oscard.t;
            if(report) { _fun00014_ip = 634; continue _fun00013 }
 620:
            report = oscard.Qn5+LS;
            report = golfie.bind(option)(report, verify);
            _fun00014_ip = 646; continue _fun00013;
 634:
            oscard = oscard.uHmblp;
            report = golfie.bind(option)(oscard, verify);
 646:
            entity['content'] = report;
            report = _closure1_slot1;
            oscard = _closure1_slot2;
            michal = 9;
            michal = oscard[michal];
            michal = report.bind(zuuluu)(michal);
            ctrled = michal.bind(zuuluu)(tangon);
            vacuum = entity;
            michal = copyDataProperties(vacuum, ctrled);
            return entity;
        }
    };
    zuuluu['createRemoveRecipientSystemMessage'] = michal;
    return entity;
})();