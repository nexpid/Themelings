// app/modules/messages/native/renderer/system_messages/UserPremiumGuildSubscriptionTierAchievedSystemMessage.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: UserPremiumGuildSubscriptionTierAchievedSystemMessageInner
        entity = argFoo;
        oscard = entity.row;
        yankee = entity.tier;
        var _closure2_slot0 = yankee;
        backup = entity.guildName;
        var _closure2_slot1 = backup;
        option = _closure1_slot0;
        golfie = _closure1_slot2;
        michal = 12;
        michal = golfie[michal];
        tangon = undefined;
        romeon = option.bind(tangon)(michal);
        offset = romeon.useStateFromStores;
        michal = _closure1_slot4;
        verify = new Array(1);
        verify[0] = michal;
        report = function() {
            entity = _closure1_slot4;
            entity = entity.roleStyle;
            return entity;
        };
        michal = new Array(0);
        kiloes = offset.bind(romeon)(verify, report, michal);
        var _closure2_slot2 = kiloes;
        sizing = oscard.message;
        var _closure2_slot3 = sizing;
        report = sizing.author;
        var _closure2_slot4 = report;
        michal = 7;
        michal = golfie[michal];
        option = option.bind(tangon)(michal);
        michal = option.useMessageAuthorWithProcessedColor;
        michal = michal.bind(option)(sizing);
        foxtra = michal.nick;
        var _closure2_slot5 = foxtra;
        output = michal.colorString;
        var _closure2_slot6 = output;
        michal = _closure1_slot1;
        option = 6;
        option = golfie[option];
        option = michal.bind(tangon)(option);
        romeon = option.bind(tangon)(sizing);
        var _closure2_slot7 = romeon;
        offset = _closure1_slot3;
        verify = offset.useMemo;
        option = new Array(4);
        option[0] = output;
        sizing = sizing.channel_id;
        option[1] = sizing;
        option[2] = kiloes;
        report = report.id;
        option[3] = report;
        report = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = {};
                michal = 'bindUserMenu';
                entity['action'] = michal;
                zuuluu = _closure2_slot4;
                zuuluu = zuuluu.id;
                entity['userId'] = zuuluu;
                zuuluu = _closure2_slot6;
                entity['colorString'] = zuuluu;
                oscard = _closure2_slot2;
                report = null;
                tangon = 'username';
                zuuluu = null;
                if(!(tangon === oscard)) { _fun00002_ip = 57; continue _fun00001 }
 53:
                zuuluu = _closure2_slot6;
 57:
                entity['linkColor'] = zuuluu;
                zuuluu = _closure2_slot6;
                entity['roleColor'] = zuuluu;
                tangon = _closure2_slot2;
                zuuluu = 'dot';
                zuuluu = zuuluu === tangon;
                if(!zuuluu) { _fun00002_ip = 94; continue _fun00001 }
 86:
                tangon = _closure2_slot6;
                zuuluu = report != tangon;
 94:
                entity['shouldShowRoleDot'] = zuuluu;
                michal = _closure2_slot3;
                michal = michal.channel_id;
                entity['messageChannelId'] = michal;
                michal = true;
                entity['medium'] = michal;
                return entity;
            }
        };
        offset = verify.bind(offset)(report, option);
        var _closure2_slot8 = offset;
        verify = _closure1_slot3;
        option = verify.useMemo;
        report = new Array(5);
        report[0] = backup;
        report[1] = foxtra;
        report[2] = romeon;
        report[3] = yankee;
        report[4] = offset;
        zuuluu = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                michal = _closure2_slot7;
                entity = 1;
                if(!(!(michal > entity))) { _fun00004_ip = 144; continue _fun00003 }
 17:
                option = _closure1_slot0;
                verify = _closure1_slot2;
                entity = 9;
                michal = verify[entity];
                golfie = undefined;
                michal = option.bind(golfie)(michal);
                tangon = michal.intl;
                zuuluu = tangon.formatToParts;
                entity = verify[entity];
                entity = option.bind(golfie)(entity);
                entity = entity.t;
                michal = entity.oAYAPz;
                entity = {};
                report = _closure2_slot5;
                entity['username'] = report;
                report = _closure2_slot8;
                entity['usernameOnClick'] = report;
                report = _closure2_slot1;
                entity['guildName'] = report;
                report = 10;
                report = verify[report];
                option = option.bind(golfie)(report);
                golfie = option.getTierName;
                report = _closure2_slot0;
                report = golfie.bind(option)(report);
                entity['newTierName'] = report;
                entity = zuuluu.bind(tangon)(michal, entity);
                _fun00004_ip = 275; continue _fun00003;
 144:
                verify = _closure1_slot0;
                offset = _closure1_slot2;
                michal = 9;
                zuuluu = offset[michal];
                option = undefined;
                zuuluu = verify.bind(option)(zuuluu);
                report = zuuluu.intl;
                tangon = report.formatToParts;
                michal = offset[michal];
                michal = verify.bind(option)(michal);
                michal = michal.t;
                zuuluu = michal.GjNvr6;
                michal = {};
                golfie = _closure2_slot5;
                michal['username'] = golfie;
                golfie = _closure2_slot8;
                michal['usernameOnClick'] = golfie;
                golfie = _closure2_slot1;
                michal['guildName'] = golfie;
                golfie = 10;
                golfie = offset[golfie];
                verify = verify.bind(option)(golfie);
                option = verify.getTierName;
                golfie = _closure2_slot0;
                golfie = option.bind(verify)(golfie);
                michal['newTierName'] = golfie;
                oscard = _closure2_slot7;
                michal['numSubscriptions'] = oscard;
                entity = tangon.bind(report)(zuuluu, michal);
 275:
                return entity;
            }
        };
        report = option.bind(verify)(zuuluu, report);
        zuuluu = _closure1_slot7;
        entity = 13;
        entity = golfie[entity];
        michal = michal.bind(tangon)(entity);
        entity = {};
        entity['row'] = oscard;
        entity['content'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot8 = entity;
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
    tangon = 14;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/messages/native/renderer/system_messages/UserPremiumGuildSubscriptionTierAchievedSystemMessage.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: UserPremiumGuildSubscriptionTierAchievedSystemMessage
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            option = entity.row;
            golfie = entity.tier;
            report = undefined;
            var _closure2_slot1 = report;
            michal = option.message;
            entity = michal.getChannelId;
            entity = entity.bind(michal)();
            var _closure2_slot0 = entity;
            oscard = _closure1_slot0;
            tangon = _closure1_slot2;
            verify = 12;
            tangon = tangon[verify];
            yankee = oscard.bind(report)(tangon);
            offset = yankee.useStateFromStores;
            tangon = _closure1_slot5;
            oscard = new Array(1);
            oscard[0] = tangon;
            tangon = new Array(1);
            tangon[0] = entity;
            entity = function() {
                zuuluu = _closure1_slot5;
                michal = zuuluu.getChannel;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            oscard = offset.bind(yankee)(oscard, entity, tangon);
            entity = null;
            tangon = entity == oscard;
            yankee = undefined;
            if(tangon) { _fun00006_ip = 125; continue _fun00005 }
 115:
            tangon = oscard.getGuildId;
            yankee = tangon.bind(oscard)();
 125:
            _closure2_slot1 = yankee;
            oscard = _closure1_slot0;
            tangon = _closure1_slot2;
            tangon = tangon[verify];
            offset = oscard.bind(report)(tangon);
            verify = offset.useStateFromStores;
            tangon = _closure1_slot6;
            oscard = new Array(1);
            oscard[0] = tangon;
            tangon = new Array(1);
            tangon[0] = yankee;
            zuuluu = function() {
                zuuluu = _closure1_slot6;
                michal = zuuluu.getGuild;
                entity = _closure2_slot1;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            oscard = verify.bind(offset)(oscard, zuuluu, tangon);
            if(!(entity == oscard)) { _fun00006_ip = 228; continue _fun00005 }
 189:
            tangon = _closure1_slot7;
            zuuluu = _closure1_slot1;
            verify = _closure1_slot2;
            entity = 5;
            entity = verify[entity];
            zuuluu = zuuluu.bind(report)(entity);
            entity = {};
            entity['row'] = option;
            entity = tangon.bind(report)(zuuluu, entity);
            _fun00006_ip = 264; continue _fun00005;
 228:
            tangon = _closure1_slot7;
            zuuluu = _closure1_slot8;
            michal = {};
            michal['row'] = option;
            michal['tier'] = golfie;
            oscard = oscard.name;
            michal['guildName'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 264:
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    michal = function(argFoo, argBar) { // Original name: createUserPremiumGuildSubscriptionTierAchievedSystemMessage
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = argFoo;
            foxtra = argBar;
            backup = zuuluu.message;
            result = zuuluu.roleStyle;
            kiloes = backup.author;
            report = _closure1_slot5;
            tangon = report.getChannel;
            michal = backup.getChannelId;
            michal = michal.bind(backup)();
            oscard = tangon.bind(report)(michal);
            output = null;
            if(!(output != oscard)) { _fun00008_ip = 710; continue _fun00007 }
 59:
            report = _closure1_slot6;
            tangon = report.getGuild;
            michal = oscard.getGuildId;
            michal = michal.bind(oscard)();
            yankee = tangon.bind(report)(michal);
            if(!(output != yankee)) { _fun00008_ip = 675; continue _fun00007 }
 90:
            tangon = _closure1_slot1;
            oscard = _closure1_slot2;
            michal = 6;
            michal = oscard[michal];
            report = undefined;
            michal = tangon.bind(report)(michal);
            offset = michal.bind(report)(backup);
            tangon = _closure1_slot0;
            michal = 7;
            michal = oscard[michal];
            golfie = tangon.bind(report)(michal);
            michal = golfie.getMessageAuthorWithProcessedColor;
            michal = michal.bind(golfie)(backup);
            romeon = michal.nick;
            sizing = michal.colorString;
            echoed = michal.colorStrings;
            golfie = michal.guildId;
            michal = 8;
            michal = oscard[michal];
            oscard = tangon.bind(report)(michal);
            tangon = oscard.isNativeMessageEligibleForEnhancedRoleColors;
            michal = kiloes.id;
            update = tangon.bind(oscard)(golfie, michal, result);
            michal = {};
            tangon = 1;
            if(!(!(offset > tangon))) { _fun00008_ip = 419; continue _fun00007 }
 209:
            oscard = _closure1_slot0;
            verify = _closure1_slot2;
            tangon = 9;
            golfie = verify[tangon];
            golfie = oscard.bind(report)(golfie);
            option = golfie.intl;
            golfie = option.formatToParts;
            tangon = verify[tangon];
            tangon = oscard.bind(report)(tangon);
            tangon = tangon.t;
            oscard = tangon.oAYAPz;
            tangon = {};
            tangon['username'] = romeon;
            verify = {};
            source = 'bindUserMenu';
            verify['action'] = source;
            source = kiloes.id;
            verify['userId'] = source;
            verify['colorString'] = sizing;
            ctrled = 'username';
            source = null;
            if(!(ctrled === result)) { _fun00008_ip = 305; continue _fun00007 }
 302:
            source = sizing;
 305:
            verify['linkColor'] = source;
            verify['roleColor'] = sizing;
            verify['roleColors'] = echoed;
            source = 'dot';
            source = source === result;
            if(!source) { _fun00008_ip = 335; continue _fun00007 }
 331:
            source = output != sizing;
 335:
            verify['shouldShowRoleDot'] = source;
            source = backup.channel_id;
            verify['messageChannelId'] = source;
            source = true;
            verify['medium'] = source;
            tangon['usernameOnClick'] = verify;
            verify = yankee.name;
            tangon['guildName'] = verify;
            source = _closure1_slot0;
            ctrled = _closure1_slot2;
            verify = 10;
            verify = ctrled[verify];
            source = source.bind(report)(verify);
            verify = source.getTierName;
            verify = verify.bind(source)(foxtra);
            tangon['newTierName'] = verify;
            tangon = golfie.bind(option)(oscard, tangon);
            _fun00008_ip = 637; continue _fun00007;
 419:
            golfie = _closure1_slot0;
            source = _closure1_slot2;
            oscard = 9;
            option = source[oscard];
            option = golfie.bind(report)(option);
            verify = option.intl;
            option = verify.formatToParts;
            oscard = source[oscard];
            oscard = golfie.bind(report)(oscard);
            oscard = oscard.t;
            golfie = oscard.GjNvr6;
            oscard = {};
            oscard['username'] = romeon;
            romeon = {};
            source = 'bindUserMenu';
            romeon['action'] = source;
            kiloes = kiloes.id;
            romeon['userId'] = kiloes;
            romeon['colorString'] = sizing;
            source = 'username';
            kiloes = null;
            if(!(source === result)) { _fun00008_ip = 515; continue _fun00007 }
 512:
            kiloes = sizing;
 515:
            romeon['linkColor'] = kiloes;
            romeon['roleColor'] = sizing;
            kiloes = null;
            if(!update) { _fun00008_ip = 533; continue _fun00007 }
 530:
            kiloes = echoed;
 533:
            romeon['roleColors'] = kiloes;
            kiloes = 'dot';
            kiloes = kiloes === result;
            if(!kiloes) { _fun00008_ip = 553; continue _fun00007 }
 549:
            kiloes = output != sizing;
 553:
            romeon['shouldShowRoleDot'] = kiloes;
            backup = backup.channel_id;
            romeon['messageChannelId'] = backup;
            backup = true;
            romeon['medium'] = backup;
            oscard['usernameOnClick'] = romeon;
            yankee = yankee.name;
            oscard['guildName'] = yankee;
            romeon = _closure1_slot0;
            backup = _closure1_slot2;
            yankee = 10;
            yankee = backup[yankee];
            romeon = romeon.bind(report)(yankee);
            yankee = romeon.getTierName;
            yankee = yankee.bind(romeon)(foxtra);
            oscard['newTierName'] = yankee;
            oscard['numSubscriptions'] = offset;
            tangon = option.bind(verify)(golfie, oscard);
 637:
            michal['content'] = tangon;
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            tangon = 11;
            tangon = golfie[tangon];
            tangon = oscard.bind(report)(tangon);
            sequen = tangon.bind(report)(zuuluu);
            config = michal;
            tangon = copyDataProperties(config, sequen);
            return michal;
 675:
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 5;
            tangon = tangon[michal];
            michal = undefined;
            tangon = report.bind(michal)(tangon);
            michal = tangon.createUserPremiumGuildSubscriptionSystemMessage;
            michal = michal.bind(tangon)(zuuluu);
            return michal;
 710:
            tangon = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 5;
            michal = michal[entity];
            entity = undefined;
            michal = tangon.bind(entity)(michal);
            entity = michal.createUserPremiumGuildSubscriptionSystemMessage;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    zuuluu['createUserPremiumGuildSubscriptionTierAchievedSystemMessage'] = michal;
    return entity;
})();