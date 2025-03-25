// app/modules/messages/native/renderer/system_messages/GuildReportRaidSystemMessage.tsx
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
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot7 = tangon;
    tangon = 16;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/messages/native/renderer/system_messages/GuildReportRaidSystemMessage.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: GuildReportRaidSystemMessage
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            offset = michal.row;
            zuuluu = _closure1_slot0;
            verify = _closure1_slot2;
            michal = 13;
            report = verify[michal];
            tangon = undefined;
            romeon = zuuluu.bind(tangon)(report);
            yankee = romeon.useStateFromStores;
            report = _closure1_slot4;
            golfie = new Array(1);
            golfie[0] = report;
            oscard = function() {
                entity = _closure1_slot4;
                entity = entity.roleStyle;
                return entity;
            };
            report = new Array(0);
            foxtra = yankee.bind(romeon)(golfie, oscard, report);
            var _closure2_slot0 = foxtra;
            report = 14;
            report = verify[report];
            oscard = zuuluu.bind(tangon)(report);
            report = oscard.useThemeContext;
            report = report.bind(oscard)();
            golfie = report.theme;
            yankee = offset.message;
            var _closure2_slot1 = yankee;
            romeon = yankee.author;
            var _closure2_slot2 = romeon;
            report = yankee.channel_id;
            var _closure2_slot3 = report;
            oscard = verify[michal];
            sizing = zuuluu.bind(tangon)(oscard);
            kiloes = sizing.useStateFromStores;
            oscard = _closure1_slot5;
            backup = new Array(1);
            backup[0] = oscard;
            oscard = new Array(1);
            oscard[0] = report;
            report = function() {
                zuuluu = _closure1_slot5;
                michal = zuuluu.getChannel;
                entity = _closure2_slot3;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            report = kiloes.bind(sizing)(backup, report, oscard);
            var _closure2_slot4 = report;
            michal = verify[michal];
            kiloes = zuuluu.bind(tangon)(michal);
            backup = kiloes.useStateFromStores;
            michal = _closure1_slot6;
            oscard = new Array(1);
            oscard[0] = michal;
            michal = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = _closure1_slot6;
                    michal = zuuluu.getGuild;
                    report = _closure2_slot4;
                    entity = null;
                    report = entity == report;
                    entity = undefined;
                    if(report) { _fun00004_ip = 39; continue _fun00003 }
 30:
                    tangon = _closure2_slot4;
                    entity = tangon.guild_id;
 39:
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                }
            };
            sizing = backup.bind(kiloes)(oscard, michal);
            var _closure2_slot5 = sizing;
            michal = 6;
            michal = verify[michal];
            oscard = zuuluu.bind(tangon)(michal);
            michal = oscard.useMessageAuthorWithProcessedColor;
            michal = michal.bind(oscard)(yankee);
            backup = michal.nick;
            var _closure2_slot6 = backup;
            oscard = michal.colorString;
            var _closure2_slot7 = oscard;
            michal = 7;
            michal = verify[michal];
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.resolveAlertModeColors;
            michal = michal.bind(zuuluu)(golfie);
            golfie = michal.automodUsernameColor;
            verify = _closure1_slot3;
            zuuluu = verify.useMemo;
            michal = new Array(6);
            michal[0] = oscard;
            oscard = null;
            output = oscard == sizing;
            kiloes = undefined;
            if(output) { _fun00002_ip = 325; continue _fun00001 }
 320:
            kiloes = sizing.name;
 325:
            michal[1] = kiloes;
            kiloes = yankee.channel_id;
            michal[2] = kiloes;
            michal[3] = backup;
            michal[4] = foxtra;
            romeon = romeon.id;
            michal[5] = romeon;
            entity = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    tangon = {};
                    entity = _closure2_slot6;
                    tangon['username'] = entity;
                    michal = {};
                    entity = 'bindUserMenu';
                    michal['action'] = entity;
                    entity = _closure2_slot2;
                    entity = entity.id;
                    michal['userId'] = entity;
                    entity = _closure2_slot7;
                    michal['colorString'] = entity;
                    golfie = _closure2_slot0;
                    entity = null;
                    oscard = 'username';
                    report = null;
                    if(!(oscard === golfie)) { _fun00006_ip = 67; continue _fun00005 }
 63:
                    report = _closure2_slot7;
 67:
                    michal['linkColor'] = report;
                    report = _closure2_slot7;
                    michal['roleColor'] = report;
                    oscard = _closure2_slot0;
                    report = 'dot';
                    report = report === oscard;
                    if(!report) { _fun00006_ip = 104; continue _fun00005 }
 96:
                    oscard = _closure2_slot7;
                    report = entity != oscard;
 104:
                    michal['shouldShowRoleDot'] = report;
                    report = _closure2_slot1;
                    report = report.channel_id;
                    michal['messageChannelId'] = report;
                    report = true;
                    michal['medium'] = report;
                    tangon['usernameOnClick'] = michal;
                    michal = _closure2_slot5;
                    report = entity == michal;
                    oscard = undefined;
                    michal = undefined;
                    if(report) { _fun00006_ip = 159; continue _fun00005 }
 150:
                    zuuluu = _closure2_slot5;
                    michal = zuuluu.name;
 159:
                    zuuluu = entity != michal;
                    entity = '';
                    if(!zuuluu) { _fun00006_ip = 173; continue _fun00005 }
 170:
                    entity = michal;
 173:
                    tangon['guildName'] = entity;
                    report = _closure1_slot0;
                    golfie = _closure1_slot2;
                    entity = 10;
                    michal = golfie[entity];
                    michal = report.bind(oscard)(michal);
                    zuuluu = michal.intl;
                    michal = zuuluu.formatToParts;
                    entity = golfie[entity];
                    entity = report.bind(oscard)(entity);
                    entity = entity.t;
                    entity = entity.MTmH+v;
                    entity = michal.bind(zuuluu)(entity, tangon);
                    return entity;
                }
            };
            verify = zuuluu.bind(verify)(entity, michal);
            michal = _closure1_slot1;
            backup = _closure1_slot2;
            entity = 8;
            entity = backup[entity];
            zuuluu = michal.bind(tangon)(entity);
            entity = {};
            entity['message'] = yankee;
            entity['channel'] = report;
            report = true;
            entity['isSystemDM'] = report;
            report = {};
            entity['colors'] = report;
            report = zuuluu.bind(tangon)(entity);
            zuuluu = _closure1_slot7;
            entity = 15;
            entity = backup[entity];
            michal = michal.bind(tangon)(entity);
            entity = {};
            entity['row'] = offset;
            entity['content'] = verify;
            foxtra = _closure1_slot0;
            option = 10;
            verify = backup[option];
            verify = foxtra.bind(tangon)(verify);
            offset = verify.intl;
            verify = offset.string;
            option = backup[option];
            option = foxtra.bind(tangon)(option);
            option = option.t;
            option = option.hG1StL;
            option = verify.bind(offset)(option);
            entity['username'] = option;
            option = 11;
            verify = backup[option];
            offset = foxtra.bind(tangon)(verify);
            verify = offset.ensureAvatarSource;
            yankee = 12;
            yankee = backup[yankee];
            romeon = foxtra.bind(tangon)(yankee);
            yankee = romeon.makeSource;
            option = backup[option];
            foxtra = foxtra.bind(tangon)(option);
            option = foxtra.getAutomodAvatarURL;
            option = option.bind(foxtra)();
            option = yankee.bind(romeon)(option);
            option = verify.bind(offset)(option);
            option = option.uri;
            entity['avatarURL'] = option;
            option = oscard != golfie;
            oscard = null;
            if(!option) { _fun00002_ip = 584; continue _fun00001 }
 581:
            oscard = golfie;
 584:
            entity['usernameColor'] = oscard;
            update = entity;
            echoed = report;
            report = copyDataProperties(update, echoed);
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    michal = function(argFoo) { // Original name: createGuildReportRaidSystemMessage
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            option = argFoo;
            kiloes = option.message;
            romeon = option.roleStyle;
            backup = option.theme;
            michal = _closure1_slot1;
            tangon = _closure1_slot2;
            entity = 5;
            entity = tangon[entity];
            verify = undefined;
            entity = michal.bind(verify)(entity);
            oscard = entity.bind(verify)(backup);
            golfie = kiloes.author;
            tangon = _closure1_slot5;
            michal = tangon.getChannel;
            entity = kiloes.channel_id;
            foxtra = michal.bind(tangon)(entity);
            tangon = _closure1_slot6;
            michal = tangon.getGuild;
            report = null;
            offset = report == foxtra;
            entity = undefined;
            if(offset) { _fun00008_ip = 100; continue _fun00007 }
 95:
            entity = foxtra.guild_id;
 100:
            entity = michal.bind(tangon)(entity);
            offset = _closure1_slot0;
            sizing = _closure1_slot2;
            michal = 6;
            michal = sizing[michal];
            tangon = offset.bind(verify)(michal);
            michal = tangon.getMessageAuthorWithProcessedColor;
            tangon = michal.bind(tangon)(kiloes);
            michal = tangon.nick;
            yankee = tangon.colorString;
            tangon = 7;
            tangon = sizing[tangon];
            offset = offset.bind(verify)(tangon);
            tangon = offset.resolveAlertModeColors;
            tangon = tangon.bind(offset)(backup);
            tangon = tangon.automodUsernameColor;
            backup = {};
            backup['username'] = michal;
            michal = {};
            offset = 'bindUserMenu';
            michal['action'] = offset;
            golfie = golfie.id;
            michal['userId'] = golfie;
            michal['colorString'] = yankee;
            golfie = 'username';
            offset = null;
            if(!(golfie === romeon)) { _fun00008_ip = 222; continue _fun00007 }
 219:
            offset = yankee;
 222:
            michal['linkColor'] = offset;
            michal['roleColor'] = yankee;
            offset = 'dot';
            offset = offset === romeon;
            if(!offset) { _fun00008_ip = 247; continue _fun00007 }
 243:
            offset = report != yankee;
 247:
            michal['shouldShowRoleDot'] = offset;
            offset = kiloes.channel_id;
            michal['messageChannelId'] = offset;
            yankee = true;
            michal['medium'] = yankee;
            backup['usernameOnClick'] = michal;
            offset = report == entity;
            michal = undefined;
            if(offset) { _fun00008_ip = 288; continue _fun00007 }
 283:
            michal = entity.name;
 288:
            offset = report != michal;
            entity = '';
            if(!offset) { _fun00008_ip = 302; continue _fun00007 }
 299:
            entity = michal;
 302:
            backup['guildName'] = entity;
            offset = _closure1_slot1;
            romeon = _closure1_slot2;
            entity = 8;
            entity = romeon[entity];
            michal = offset.bind(verify)(entity);
            entity = {};
            entity['message'] = kiloes;
            entity['channel'] = foxtra;
            entity['isSystemDM'] = yankee;
            entity['colors'] = oscard;
            michal = michal.bind(verify)(entity);
            entity = {};
            oscard = 9;
            oscard = romeon[oscard];
            oscard = offset.bind(verify)(oscard);
            output = oscard.bind(verify)(option);
            result = entity;
            oscard = copyDataProperties(result, output);
            yankee = _closure1_slot0;
            oscard = 10;
            option = romeon[oscard];
            option = yankee.bind(verify)(option);
            foxtra = option.intl;
            offset = foxtra.formatToParts;
            option = romeon[oscard];
            option = yankee.bind(verify)(option);
            option = option.t;
            option = option.MTmH+v;
            offset = offset.bind(foxtra)(option, backup);
            option = 'content';
            entity[option] = offset;
            option = romeon[oscard];
            option = yankee.bind(verify)(option);
            offset = option.intl;
            option = offset.string;
            oscard = romeon[oscard];
            oscard = yankee.bind(verify)(oscard);
            oscard = oscard.t;
            oscard = oscard.hG1StL;
            oscard = option.bind(offset)(oscard);
            entity[golfie] = oscard;
            oscard = report != tangon;
            report = null;
            if(!oscard) { _fun00008_ip = 500; continue _fun00007 }
 497:
            report = tangon;
 500:
            tangon = 'usernameColor';
            entity[tangon] = report;
            option = _closure1_slot0;
            offset = _closure1_slot2;
            zuuluu = 11;
            tangon = offset[zuuluu];
            report = option.bind(verify)(tangon);
            tangon = report.ensureAvatarSource;
            oscard = 12;
            oscard = offset[oscard];
            golfie = option.bind(verify)(oscard);
            oscard = golfie.makeSource;
            zuuluu = offset[zuuluu];
            option = option.bind(verify)(zuuluu);
            zuuluu = option.getAutomodAvatarURL;
            zuuluu = zuuluu.bind(option)();
            zuuluu = oscard.bind(golfie)(zuuluu);
            zuuluu = tangon.bind(report)(zuuluu);
            tangon = zuuluu.uri;
            zuuluu = 'avatarURL';
            entity[zuuluu] = tangon;
            result = entity;
            output = michal;
            michal = copyDataProperties(result, output);
            return entity;
        }
    };
    zuuluu['createGuildReportRaidSystemMessage'] = michal;
    return entity;
})();