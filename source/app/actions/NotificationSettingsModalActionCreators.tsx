// app/actions/NotificationSettingsModalActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCor, argGra, argFre, argPlu) {
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
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = golfie.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.Endpoints;
    var _closure1_slot5 = michal;
    michal = 3;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.ChannelNotificationSettingsFlags;
    var _closure1_slot6 = michal;
    michal = {};
    golfie = function(argFoo) { // Original name: open
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 4;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'NOTIFICATION_SETTINGS_MODAL_OPEN';
        michal['type'] = report;
        report = argFoo;
        michal['guildId'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['open'] = golfie;
    golfie = function() { // Original name: close
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 4;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'NOTIFICATION_SETTINGS_MODAL_CLOSE';
        michal['type'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['close'] = golfie;
    golfie = function(argFoo, argBar, argBaz, argCor) { // Original name: updateGuildNotificationSettings
        option = argFoo;
        golfie = argBar;
        zuuluu = _closure1_slot0;
        tangon = _closure1_slot2;
        michal = 5;
        oscard = tangon[michal];
        entity = undefined;
        verify = zuuluu.bind(entity)(oscard);
        oscard = verify.getCurrentGuildSettings;
        backup = oscard.bind(verify)(option);
        verify = _closure1_slot1;
        report = 6;
        report = tangon[report];
        offset = verify.bind(entity)(report);
        report = offset.saveUserGuildSettings;
        report = report.bind(offset)(option, golfie);
        report = 4;
        report = tangon[report];
        offset = verify.bind(entity)(report);
        verify = offset.dispatch;
        report = {};
        yankee = 'USER_GUILD_SETTINGS_GUILD_UPDATE';
        report['type'] = yankee;
        report['guildId'] = option;
        report['settings'] = golfie;
        report = verify.bind(offset)(report);
        michal = tangon[michal];
        report = zuuluu.bind(entity)(michal);
        tangon = report.trackGuildNotificationSettingsUpdate;
        foxtra = argBaz;
        romeon = argCor;
        output = report;
        sizing = option;
        kiloes = golfie;
        michal = output[tangon](sizing, kiloes, backup, foxtra, romeon, yankee);
        return entity;
    };
    michal['updateGuildNotificationSettings'] = golfie;
    golfie = function(argFoo, argBar, argBaz, argCor) { // Original name: updateGuildAndChannelNotificationSettings
        romeon = argFoo;
        zuuluu = argBar;
        yankee = argBaz;
        offset = argCor;
        var _closure2_slot0 = romeon;
        var _closure2_slot1 = zuuluu;
        var _closure2_slot2 = yankee;
        var _closure2_slot3 = offset;
        report = _closure1_slot1;
        oscard = _closure1_slot2;
        tangon = 7;
        option = oscard[tangon];
        entity = undefined;
        foxtra = report.bind(entity)(option);
        verify = foxtra.keys;
        option = zuuluu.channel_overrides;
        kiloes = verify.bind(foxtra)(option);
        option = _closure1_slot0;
        golfie = 5;
        verify = oscard[golfie];
        foxtra = option.bind(entity)(verify);
        verify = foxtra.getCurrentGuildSettings;
        echoed = verify.bind(foxtra)(romeon);
        foxtra = oscard[golfie];
        backup = option.bind(entity)(foxtra);
        foxtra = backup.getManyCurrentChannelSettings;
        foxtra = foxtra.bind(backup)(romeon, kiloes);
        var _closure2_slot4 = foxtra;
        foxtra = 6;
        foxtra = oscard[foxtra];
        backup = report.bind(entity)(foxtra);
        foxtra = backup.saveUserGuildSettings;
        foxtra = foxtra.bind(backup)(romeon, zuuluu);
        foxtra = 4;
        foxtra = oscard[foxtra];
        kiloes = report.bind(entity)(foxtra);
        backup = kiloes.dispatch;
        foxtra = {};
        sizing = 'USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE';
        foxtra['type'] = sizing;
        foxtra['guildId'] = romeon;
        foxtra['settings'] = zuuluu;
        foxtra = backup.bind(kiloes)(foxtra);
        golfie = oscard[golfie];
        option = option.bind(entity)(golfie);
        golfie = option.trackGuildNotificationSettingsUpdate;
        ctrled = option;
        source = romeon;
        update = zuuluu;
        result = yankee;
        output = offset;
        golfie = ctrled[golfie](source, update, echoed, result, output, sizing);
        tangon = oscard[tangon];
        report = report.bind(entity)(tangon);
        tangon = report.keys;
        zuuluu = zuuluu.channel_overrides;
        tangon = tangon.bind(report)(zuuluu);
        zuuluu = tangon.forEach;
        michal = function(argFoo) {
            verify = argFoo;
            zuuluu = _closure2_slot4;
            entity = zuuluu.get;
            romeon = entity.bind(zuuluu)(verify);
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 5;
            zuuluu = zuuluu[entity];
            entity = undefined;
            golfie = tangon.bind(entity)(zuuluu);
            oscard = golfie.trackChannelNotificationSettingsUpdate;
            kiloes = _closure2_slot0;
            zuuluu = _closure2_slot1;
            zuuluu = zuuluu.channel_overrides;
            foxtra = zuuluu[verify];
            yankee = _closure2_slot2;
            offset = _closure2_slot3;
            sizing = golfie;
            backup = verify;
            michal = sizing[oscard](kiloes, backup, foxtra, romeon, yankee, offset, verify);
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['updateGuildAndChannelNotificationSettings'] = golfie;
    golfie = function(argFoo, argBar, argBaz) { // Original name: updateGuildNotificationSettingsBulk
        report = argFoo;
        entity = argBar;
        var _closure2_slot0 = entity;
        entity = argBaz;
        var _closure2_slot1 = entity;
        tangon = _closure1_slot1;
        oscard = _closure1_slot2;
        zuuluu = 7;
        option = oscard[zuuluu];
        entity = undefined;
        verify = tangon.bind(entity)(option);
        option = verify.keys;
        verify = option.bind(verify)(report);
        option = _closure1_slot0;
        golfie = 5;
        golfie = oscard[golfie];
        option = option.bind(entity)(golfie);
        golfie = option.getManyCurrentGuildSettings;
        golfie = golfie.bind(option)(verify);
        var _closure2_slot2 = golfie;
        golfie = 6;
        golfie = oscard[golfie];
        option = tangon.bind(entity)(golfie);
        golfie = option.saveUserGuildSettingsBulk;
        golfie = golfie.bind(option)(report);
        zuuluu = oscard[zuuluu];
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.entries;
        tangon = zuuluu.bind(tangon)(report);
        zuuluu = tangon.forEach;
        michal = function(argFoo) {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tangon = argFoo;
                michal = tangon[Symbol.iterator];
                tangon = michal().next;
                report = tangon().value;
                zuuluu = michal;
                entity = undefined;
                zuuluu = zuuluu === entity;
                option = undefined;
                if(zuuluu) { _fun00002_ip = 27; continue _fun00001 }
 24:
                option = report;
 27:
                golfie = undefined;
                if(zuuluu) { _fun00002_ip = 57; continue _fun00001 }
 32:
                report = tangon().value;
                tangon = michal;
                tangon = tangon === entity;
                golfie = undefined;
                zuuluu = tangon;
                if(tangon) { _fun00002_ip = 57; continue _fun00001 }
 51:
                golfie = report;
                zuuluu = tangon;
 57:
                if(zuuluu) { _fun00002_ip = 63; continue _fun00001 }
 60:
                michal.return();
 63:
                tangon = _closure2_slot2;
                zuuluu = tangon.get;
                backup = zuuluu.bind(tangon)(option);
                verify = _closure1_slot1;
                report = _closure1_slot2;
                tangon = 4;
                tangon = report[tangon];
                offset = verify.bind(entity)(tangon);
                verify = offset.dispatch;
                tangon = {};
                yankee = 'USER_GUILD_SETTINGS_GUILD_UPDATE';
                tangon['type'] = yankee;
                tangon['guildId'] = option;
                tangon['settings'] = golfie;
                tangon = verify.bind(offset)(tangon);
                tangon = _closure1_slot0;
                zuuluu = 5;
                zuuluu = report[zuuluu];
                report = tangon.bind(entity)(zuuluu);
                tangon = report.trackGuildNotificationSettingsUpdate;
                foxtra = _closure2_slot0;
                romeon = _closure2_slot1;
                output = report;
                sizing = option;
                kiloes = golfie;
                michal = output[tangon](sizing, kiloes, backup, foxtra, romeon, yankee);
                return entity;
            }
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['updateGuildNotificationSettingsBulk'] = golfie;
    golfie = function(argFoo, argBar, argBaz, argCor, argGra) { // Original name: updateChannelOverrideSettings
        verify = argFoo;
        option = argBar;
        golfie = argBaz;
        zuuluu = _closure1_slot0;
        tangon = _closure1_slot2;
        michal = 5;
        oscard = tangon[michal];
        entity = undefined;
        offset = zuuluu.bind(entity)(oscard);
        oscard = offset.getCurrentChannelSettings;
        output = oscard.bind(offset)(verify, option);
        offset = _closure1_slot1;
        report = 6;
        report = tangon[report];
        romeon = offset.bind(entity)(report);
        yankee = romeon.saveUserGuildSettings;
        report = {};
        foxtra = {};
        foxtra[option] = golfie;
        report['channel_overrides'] = foxtra;
        report = yankee.bind(romeon)(verify, report);
        report = 4;
        report = tangon[report];
        yankee = offset.bind(entity)(report);
        offset = yankee.dispatch;
        report = {};
        romeon = 'USER_GUILD_SETTINGS_CHANNEL_UPDATE';
        report['type'] = romeon;
        report['guildId'] = verify;
        report['channelId'] = option;
        report['settings'] = golfie;
        report = offset.bind(yankee)(report);
        report = 8;
        report = tangon[report];
        report = zuuluu.bind(entity)(report);
        yankee = report.AccessibilityAnnouncer;
        offset = yankee.announce;
        report = 9;
        romeon = tangon[report];
        romeon = zuuluu.bind(entity)(romeon);
        foxtra = romeon.intl;
        romeon = foxtra.string;
        report = tangon[report];
        report = zuuluu.bind(entity)(report);
        report = report.t;
        report = report.MlIsJy;
        report = romeon.bind(foxtra)(report);
        report = offset.bind(yankee)(report);
        michal = tangon[michal];
        report = zuuluu.bind(entity)(michal);
        tangon = report.trackChannelNotificationSettingsUpdate;
        sizing = argCor;
        kiloes = argGra;
        source = report;
        update = verify;
        echoed = option;
        result = golfie;
        michal = source[tangon](update, echoed, result, output, sizing, kiloes, backup);
        return entity;
    };
    michal['updateChannelOverrideSettings'] = golfie;
    golfie = function(argFoo, argBar, argBaz, argCor) { // Original name: updateChannelOverrideSettingsBulk
        offset = argFoo;
        report = argBar;
        var _closure2_slot0 = offset;
        var _closure2_slot1 = report;
        entity = argBaz;
        var _closure2_slot2 = entity;
        entity = argCor;
        var _closure2_slot3 = entity;
        tangon = _closure1_slot1;
        oscard = _closure1_slot2;
        zuuluu = 7;
        option = oscard[zuuluu];
        entity = undefined;
        verify = tangon.bind(entity)(option);
        option = verify.keys;
        verify = option.bind(verify)(report);
        option = _closure1_slot0;
        golfie = 5;
        golfie = oscard[golfie];
        option = option.bind(entity)(golfie);
        golfie = option.getManyCurrentChannelSettings;
        golfie = golfie.bind(option)(offset, verify);
        var _closure2_slot4 = golfie;
        golfie = 6;
        golfie = oscard[golfie];
        verify = tangon.bind(entity)(golfie);
        option = verify.saveUserGuildSettings;
        golfie = {};
        golfie['channel_overrides'] = report;
        golfie = option.bind(verify)(offset, golfie);
        golfie = 4;
        golfie = oscard[golfie];
        verify = tangon.bind(entity)(golfie);
        option = verify.dispatch;
        golfie = {};
        yankee = 'USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK';
        golfie['type'] = yankee;
        golfie['guildId'] = offset;
        golfie['overrides'] = report;
        golfie = option.bind(verify)(golfie);
        zuuluu = oscard[zuuluu];
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.keys;
        tangon = zuuluu.bind(tangon)(report);
        zuuluu = tangon.forEach;
        michal = function(argFoo) {
            option = argFoo;
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 5;
            michal = michal[entity];
            entity = undefined;
            golfie = zuuluu.bind(entity)(michal);
            oscard = golfie.trackChannelNotificationSettingsUpdate;
            report = _closure2_slot0;
            michal = _closure2_slot1;
            romeon = michal[option];
            zuuluu = _closure2_slot4;
            michal = zuuluu.get;
            yankee = michal.bind(zuuluu)(option);
            offset = _closure2_slot2;
            verify = _closure2_slot3;
            kiloes = golfie;
            backup = report;
            foxtra = option;
            entity = kiloes[oscard](backup, foxtra, romeon, yankee, offset, verify, option);
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['updateChannelOverrideSettingsBulk'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: setForumThreadsCreated
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argFoo;
            verify = argBar;
            golfie = this;
            michal = _closure1_slot6;
            if(verify) { _fun00004_ip = 27; continue _fun00003 }
 19:
            option = michal.NEW_FORUM_THREADS_OFF;
            _fun00004_ip = 33; continue _fun00003;
 27:
            option = michal.NEW_FORUM_THREADS_ON;
 33:
            tangon = _closure1_slot6;
            if(verify) { _fun00004_ip = 48; continue _fun00003 }
 40:
            michal = tangon.NEW_FORUM_THREADS_ON;
            _fun00004_ip = 54; continue _fun00003;
 48:
            michal = tangon.NEW_FORUM_THREADS_OFF;
 54:
            report = _closure1_slot4;
            tangon = report.getChannelFlags;
            offset = tangon.bind(report)(zuuluu);
            oscard = golfie.updateChannelOverrideSettings;
            report = zuuluu.guild_id;
            foxtra = zuuluu.id;
            zuuluu = {};
            michal = ~michal;
            michal = offset & michal;
            michal = michal | option;
            zuuluu['flags'] = michal;
            option = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 5;
            michal = michal[entity];
            entity = undefined;
            michal = option.bind(entity)(michal);
            option = michal.NotificationLabel;
            michal = option.forumThreadsCreated;
            yankee = michal.bind(option)(verify);
            kiloes = golfie;
            backup = report;
            romeon = zuuluu;
            michal = kiloes[oscard](backup, foxtra, romeon, yankee, offset);
            return entity;
        }
    };
    michal['setForumThreadsCreated'] = golfie;
    tangon = function(argFoo, argBar) { // Original name: setAccountFlag
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = argBar;
        var _closure2_slot1 = michal;
        zuuluu = _closure1_slot3;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00006_ip = 216; continue _fun00005 }
 10:
                    michal = _closure1_slot4;
                    michal = michal.accountNotificationSettings;
                    offset = michal.flags;
                    report = _closure1_slot0;
                    oscard = _closure1_slot2;
                    michal = 10;
                    michal = oscard[michal];
                    tangon = undefined;
                    verify = report.bind(tangon)(michal);
                    option = verify.setFlag;
                    golfie = _closure2_slot0;
                    michal = _closure2_slot1;
                    option = option.bind(verify)(offset, golfie, michal);
                    michal = 11;
                    michal = oscard[michal];
                    michal = report.bind(tangon)(michal);
                    oscard = michal.HTTP;
                    report = oscard.patch;
                    michal = {};
                    golfie = _closure1_slot5;
                    golfie = golfie.ACCOUNT_NOTIFICATION_SETTINGS;
                    michal['url'] = golfie;
                    golfie = {};
                    golfie['flags'] = option;
                    michal['body'] = golfie;
                    golfie = false;
                    michal['rejectWithError'] = golfie;
                    michal = report.bind(oscard)(michal);
                    SaveGenerator(address=140);
 138:
                    return michal;
 140:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00006_ip = 213; continue _fun00005 }
 146:
                    report = _closure1_slot1;
                    oscard = _closure1_slot2;
                    zuuluu = 4;
                    zuuluu = oscard[zuuluu];
                    oscard = report.bind(tangon)(zuuluu);
                    report = oscard.dispatch;
                    zuuluu = {};
                    golfie = 'NOTIFICATION_SETTINGS_UPDATE';
                    zuuluu['type'] = golfie;
                    golfie = {};
                    golfie['flags'] = option;
                    zuuluu['settings'] = golfie;
                    zuuluu = report.bind(oscard)(zuuluu);
                    SaveGenerator(address=201);
 199:
                    return zuuluu;
 201:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun00006_ip = 210; continue _fun00005 }
 207:
                    return tangon;
 210:
                    return zuuluu;
 213:
                    return michal;
 216:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    michal['setAccountFlag'] = tangon;
    tangon = 12;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'actions/NotificationSettingsModalActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();