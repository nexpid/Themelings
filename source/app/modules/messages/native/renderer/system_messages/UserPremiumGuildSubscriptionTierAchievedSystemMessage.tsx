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
        michal = 11;
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
                entity = 8;
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
                report = 9;
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
                michal = 8;
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
                golfie = 9;
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
        entity = 12;
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
    tangon = 13;
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
            verify = 11;
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
            if(tangon) { _fun00006_ip = 123; continue _fun00005 }
 113:
            tangon = oscard.getGuildId;
            yankee = tangon.bind(oscard)();
 123:
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
            if(!(entity == oscard)) { _fun00006_ip = 224; continue _fun00005 }
 185:
            tangon = _closure1_slot7;
            zuuluu = _closure1_slot1;
            verify = _closure1_slot2;
            entity = 5;
            entity = verify[entity];
            zuuluu = zuuluu.bind(report)(entity);
            entity = {};
            entity['row'] = option;
            entity = tangon.bind(report)(zuuluu, entity);
            _fun00006_ip = 260; continue _fun00005;
 224:
            tangon = _closure1_slot7;
            zuuluu = _closure1_slot8;
            michal = {};
            michal['row'] = option;
            michal['tier'] = golfie;
            oscard = oscard.name;
            michal['guildName'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 260:
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
            if(!(output != oscard)) { _fun00008_ip = 651; continue _fun00007 }
 59:
            report = _closure1_slot6;
            tangon = report.getGuild;
            michal = oscard.getGuildId;
            michal = michal.bind(oscard)();
            yankee = tangon.bind(report)(michal);
            if(!(output != yankee)) { _fun00008_ip = 616; continue _fun00007 }
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
            tangon = tangon.bind(report)(michal);
            michal = tangon.getMessageAuthorWithProcessedColor;
            michal = michal.bind(tangon)(backup);
            romeon = michal.nick;
            sizing = michal.colorString;
            michal = {};
            tangon = 1;
            if(!(!(offset > tangon))) { _fun00008_ip = 373; continue _fun00007 }
 168:
            oscard = _closure1_slot0;
            verify = _closure1_slot2;
            tangon = 8;
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
            echoed = 'bindUserMenu';
            verify['action'] = echoed;
            echoed = kiloes.id;
            verify['userId'] = echoed;
            verify['colorString'] = sizing;
            update = 'username';
            echoed = null;
            if(!(update === result)) { _fun00008_ip = 264; continue _fun00007 }
 261:
            echoed = sizing;
 264:
            verify['linkColor'] = echoed;
            verify['roleColor'] = sizing;
            echoed = 'dot';
            echoed = echoed === result;
            if(!echoed) { _fun00008_ip = 289; continue _fun00007 }
 285:
            echoed = output != sizing;
 289:
            verify['shouldShowRoleDot'] = echoed;
            echoed = backup.channel_id;
            verify['messageChannelId'] = echoed;
            echoed = true;
            verify['medium'] = echoed;
            tangon['usernameOnClick'] = verify;
            verify = yankee.name;
            tangon['guildName'] = verify;
            echoed = _closure1_slot0;
            update = _closure1_slot2;
            verify = 9;
            verify = update[verify];
            echoed = echoed.bind(report)(verify);
            verify = echoed.getTierName;
            verify = verify.bind(echoed)(foxtra);
            tangon['newTierName'] = verify;
            tangon = golfie.bind(option)(oscard, tangon);
            _fun00008_ip = 578; continue _fun00007;
 373:
            golfie = _closure1_slot0;
            echoed = _closure1_slot2;
            oscard = 8;
            option = echoed[oscard];
            option = golfie.bind(report)(option);
            verify = option.intl;
            option = verify.formatToParts;
            oscard = echoed[oscard];
            oscard = golfie.bind(report)(oscard);
            oscard = oscard.t;
            golfie = oscard.GjNvr6;
            oscard = {};
            oscard['username'] = romeon;
            romeon = {};
            echoed = 'bindUserMenu';
            romeon['action'] = echoed;
            kiloes = kiloes.id;
            romeon['userId'] = kiloes;
            romeon['colorString'] = sizing;
            echoed = 'username';
            kiloes = null;
            if(!(echoed === result)) { _fun00008_ip = 469; continue _fun00007 }
 466:
            kiloes = sizing;
 469:
            romeon['linkColor'] = kiloes;
            romeon['roleColor'] = sizing;
            kiloes = 'dot';
            kiloes = kiloes === result;
            if(!kiloes) { _fun00008_ip = 494; continue _fun00007 }
 490:
            kiloes = output != sizing;
 494:
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
            yankee = 9;
            yankee = backup[yankee];
            romeon = romeon.bind(report)(yankee);
            yankee = romeon.getTierName;
            yankee = yankee.bind(romeon)(foxtra);
            oscard['newTierName'] = yankee;
            oscard['numSubscriptions'] = offset;
            tangon = option.bind(verify)(golfie, oscard);
 578:
            michal['content'] = tangon;
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            tangon = 10;
            tangon = golfie[tangon];
            tangon = oscard.bind(report)(tangon);
            source = tangon.bind(report)(zuuluu);
            ctrled = michal;
            tangon = copyDataProperties(ctrled, source);
            return michal;
 616:
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 5;
            tangon = tangon[michal];
            michal = undefined;
            tangon = report.bind(michal)(tangon);
            michal = tangon.createUserPremiumGuildSubscriptionSystemMessage;
            michal = michal.bind(tangon)(zuuluu);
            return michal;
 651:
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