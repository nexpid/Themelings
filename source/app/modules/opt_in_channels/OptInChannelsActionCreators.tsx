// app/modules/opt_in_channels/OptInChannelsActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    option = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    verify = argPlu;
    var _closure1_slot0 = option;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = verify;
    entity = function() { // Original name: _persistOptInChannelUpdates2
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    golfie = argFoo;
                    oscard = argBar;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 164; continue _fun00001 }
 16:
                    michal = null;
                    if(!(michal != golfie)) { _fun00002_ip = 159; continue _fun00001 }
 25:
                    tangon = _closure1_slot4;
                    michal = tangon.isFullServerPreview;
                    michal = michal.bind(tangon)(golfie);
                    if(michal) { _fun00002_ip = 159; continue _fun00001 }
 46:
                    tangon = _closure1_slot1;
                    report = _closure1_slot2;
                    michal = 9;
                    michal = report[michal];
                    report = undefined;
                    option = tangon.bind(report)(michal);
                    tangon = option.saveUserGuildSettingsBulk;
                    michal = {};
                    verify = {};
                    verify['channel_overrides'] = oscard;
                    michal[golfie] = verify;
                    michal = tangon.bind(option)(michal);
                    SaveGenerator(address=97);
 95:
                    return michal;
 97:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 156; continue _fun00001 }
 103:
                    tangon = _closure1_slot1;
                    option = _closure1_slot2;
                    zuuluu = 10;
                    zuuluu = option[zuuluu];
                    report = tangon.bind(report)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    option = 'USER_GUILD_SETTINGS_REMOVE_PENDING_CHANNEL_UPDATES';
                    zuuluu['type'] = option;
                    zuuluu['guildId'] = golfie;
                    zuuluu['updates'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
                    _fun00002_ip = 159; continue _fun00001;
 156:
                    return michal;
 159:
                    michal = undefined;
                    return michal;
 164:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot10 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot10 = entity;
    report = function(argFoo, argBar, argBaz) { // Original name: bulkOptOutChannels
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = argFoo;
            tangon = argBar;
            var _closure2_slot0 = report;
            entity = null;
            if(!(entity != report)) { _fun00004_ip = 262; continue _fun00003 }
 21:
            oscard = _closure1_slot4;
            zuuluu = oscard.isFullServerPreview;
            zuuluu = zuuluu.bind(oscard)(report);
            if(zuuluu) { _fun00004_ip = 223; continue _fun00003 }
 45:
            option = {};
            var _closure2_slot1 = option;
            zuuluu = tangon.forEach;
            michal = function(argFoo) {
                tangon = argFoo;
                oscard = _closure1_slot6;
                zuuluu = oscard.getChannelIdFlags;
                michal = _closure2_slot0;
                verify = zuuluu.bind(oscard)(michal, tangon);
                zuuluu = _closure2_slot1;
                michal = {};
                golfie = _closure1_slot0;
                oscard = _closure1_slot2;
                entity = 7;
                oscard = oscard[entity];
                entity = undefined;
                option = golfie.bind(entity)(oscard);
                golfie = option.setFlag;
                report = _closure1_slot8;
                oscard = report.OPT_IN_ENABLED;
                report = false;
                report = golfie.bind(option)(verify, oscard, report);
                michal['flags'] = report;
                zuuluu[tangon] = michal;
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            zuuluu = _closure1_slot1;
            yankee = _closure1_slot2;
            michal = 14;
            michal = yankee[michal];
            offset = undefined;
            golfie = zuuluu.bind(offset)(michal);
            oscard = golfie.updateChannelOverrideSettingsBulk;
            verify = _closure1_slot0;
            michal = 8;
            michal = yankee[michal];
            michal = verify.bind(offset)(michal);
            michal = michal.NotificationLabels;
            michal = michal.OptedOut;
            michal = oscard.bind(golfie)(report, option, michal);
            michal = 11;
            michal = yankee[michal];
            golfie = zuuluu.bind(offset)(michal);
            oscard = golfie.track;
            michal = _closure1_slot7;
            zuuluu = michal.CHANNEL_LIST_UPDATED;
            michal = {};
            option = 12;
            option = yankee[option];
            verify = verify.bind(offset)(option);
            option = verify.collectGuildAnalyticsMetadata;
            foxtra = option.bind(verify)(report);
            backup = michal;
            option = copyDataProperties(backup, foxtra);
            verify = 'remove_many';
            option = 'action_type';
            michal[option] = verify;
            verify = argBaz;
            option = 'location';
            michal[option] = verify;
            michal = oscard.bind(golfie)(zuuluu, michal);
            _fun00004_ip = 262; continue _fun00003;
 223:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 6;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.updateImpersonatedChannels;
            entity = new Array(0);
            entity = michal.bind(zuuluu)(report, entity, tangon);
 262:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot11 = report;
    tangon = function(argFoo) { // Original name: dismissGuildNotice
        zuuluu = _closure1_slot0;
        tangon = _closure1_slot2;
        michal = 15;
        report = tangon[michal];
        entity = undefined;
        oscard = zuuluu.bind(entity)(report);
        report = oscard.updateUserGuildSettings;
        michal = tangon[michal];
        michal = zuuluu.bind(entity)(michal);
        michal = michal.UserSettingsDelay;
        tangon = michal.INFREQUENT_USER_ACTION;
        zuuluu = argFoo;
        michal = function(argFoo) {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zuuluu = argFoo;
                offset = _closure1_slot0;
                entity = _closure1_slot2;
                report = 7;
                tangon = entity[report];
                option = undefined;
                golfie = offset.bind(option)(tangon);
                oscard = golfie.hasFlag;
                tangon = zuuluu.guildOnboardingProgress;
                verify = 16;
                entity = entity[verify];
                entity = offset.bind(option)(entity);
                entity = entity.GuildOnboardingProgress;
                entity = entity.GUILD_NOTICE_CLEARED;
                entity = oscard.bind(golfie)(tangon, entity);
                if(!entity) { _fun00006_ip = 132; continue _fun00005 }
 73:
                yankee = _closure1_slot0;
                tangon = _closure1_slot2;
                oscard = tangon[report];
                offset = yankee.bind(option)(oscard);
                golfie = offset.hasFlag;
                oscard = zuuluu.guildOnboardingProgress;
                tangon = tangon[verify];
                tangon = yankee.bind(option)(tangon);
                tangon = tangon.GuildOnboardingProgress;
                tangon = tangon.GUILD_NOTICE_SHOWN;
                tangon = golfie.bind(offset)(oscard, tangon);
                entity = !tangon;
 132:
                entity = !entity;
                if(!entity) { _fun00006_ip = 259; continue _fun00005 }
 138:
                tangon = _closure1_slot0;
                michal = _closure1_slot2;
                oscard = michal[report];
                yankee = tangon.bind(option)(oscard);
                offset = yankee.addFlag;
                golfie = zuuluu.guildOnboardingProgress;
                oscard = michal[verify];
                oscard = tangon.bind(option)(oscard);
                oscard = oscard.GuildOnboardingProgress;
                oscard = oscard.GUILD_NOTICE_CLEARED;
                oscard = offset.bind(yankee)(golfie, oscard);
                zuuluu['guildOnboardingProgress'] = oscard;
                report = michal[report];
                golfie = tangon.bind(option)(report);
                oscard = golfie.setFlag;
                report = zuuluu.guildOnboardingProgress;
                michal = michal[verify];
                michal = tangon.bind(option)(michal);
                michal = michal.GuildOnboardingProgress;
                tangon = michal.GUILD_NOTICE_SHOWN;
                michal = false;
                michal = oscard.bind(golfie)(report, tangon, michal);
                zuuluu['guildOnboardingProgress'] = michal;
                entity = true;
 259:
                return entity;
            }
        };
        michal = report.bind(oscard)(zuuluu, michal, tangon);
        return entity;
    };
    var _closure1_slot12 = tangon;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, oscard);
    entity = 0;
    oscard = verify[entity];
    entity = undefined;
    oscard = golfie.bind(entity)(oscard);
    var _closure1_slot3 = oscard;
    oscard = 1;
    oscard = verify[oscard];
    oscard = golfie.bind(entity)(oscard);
    var _closure1_slot4 = oscard;
    oscard = 2;
    oscard = verify[oscard];
    oscard = golfie.bind(entity)(oscard);
    var _closure1_slot5 = oscard;
    oscard = 3;
    oscard = verify[oscard];
    oscard = golfie.bind(entity)(oscard);
    var _closure1_slot6 = oscard;
    oscard = 4;
    oscard = verify[oscard];
    oscard = option.bind(entity)(oscard);
    oscard = oscard.AnalyticEvents;
    var _closure1_slot7 = oscard;
    oscard = 5;
    oscard = verify[oscard];
    oscard = option.bind(entity)(oscard);
    golfie = oscard.ChannelNotificationSettingsFlags;
    var _closure1_slot8 = golfie;
    oscard = oscard.GuildNotificationSettingsFlags;
    var _closure1_slot9 = oscard;
    oscard = 13;
    oscard = verify[oscard];
    yankee = option.bind(entity)(oscard);
    offset = yankee.debounce;
    golfie = function(argFoo, argBar) {
        tangon = function() { // Original name: _persistOptInChannelUpdates
            entity = undefined;
            tangon = _closure1_slot10;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        zuuluu = undefined;
        michal = argFoo;
        entity = argBar;
        entity = tangon.bind(zuuluu)(michal, entity);
        return entity;
    };
    oscard = 1000;
    oscard = offset.bind(yankee)(golfie, oscard);
    golfie = 17;
    golfie = verify[golfie];
    verify = option.bind(entity)(golfie);
    option = verify.fileFinishedImporting;
    golfie = 'modules/opt_in_channels/OptInChannelsActionCreators.tsx';
    golfie = option.bind(verify)(golfie);
    golfie = function(argFoo, argBar, argBaz, argCor) { // Original name: setOptInChannel
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            report = argFoo;
            oscard = argBar;
            entity = argBaz;
            offset = argCor;
            michal = null;
            if(!(michal != report)) { _fun00008_ip = 560; continue _fun00007 }
 21:
            tangon = _closure1_slot4;
            zuuluu = tangon.isFullServerPreview;
            zuuluu = zuuluu.bind(tangon)(report);
            if(zuuluu) { _fun00008_ip = 488; continue _fun00007 }
 45:
            tangon = _closure1_slot6;
            zuuluu = tangon.getChannelIdFlags;
            verify = zuuluu.bind(tangon)(report, oscard);
            kiloes = verify;
            if(entity) { _fun00008_ip = 114; continue _fun00007 }
 67:
            golfie = _closure1_slot0;
            tangon = _closure1_slot2;
            zuuluu = 7;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            option = golfie.bind(zuuluu)(tangon);
            golfie = option.setFlag;
            zuuluu = _closure1_slot8;
            tangon = zuuluu.FAVORITED;
            zuuluu = false;
            kiloes = golfie.bind(option)(verify, tangon, zuuluu);
 114:
            romeon = _closure1_slot0;
            foxtra = _closure1_slot2;
            zuuluu = 8;
            tangon = foxtra[zuuluu];
            yankee = undefined;
            golfie = romeon.bind(yankee)(tangon);
            tangon = golfie.getCurrentChannelSettings;
            source = tangon.bind(golfie)(report, oscard);
            verify = {};
            tangon = 7;
            tangon = foxtra[tangon];
            option = romeon.bind(yankee)(tangon);
            golfie = option.setFlag;
            tangon = _closure1_slot8;
            tangon = tangon.OPT_IN_ENABLED;
            tangon = golfie.bind(option)(kiloes, tangon, entity);
            verify['flags'] = tangon;
            tangon = _closure1_slot1;
            golfie = 9;
            golfie = foxtra[golfie];
            kiloes = tangon.bind(yankee)(golfie);
            option = kiloes.saveUserGuildSettingsBulk;
            golfie = {};
            sizing = {};
            output = {};
            output[oscard] = verify;
            sizing['channel_overrides'] = output;
            golfie[report] = sizing;
            golfie = option.bind(kiloes)(golfie);
            golfie = 10;
            golfie = foxtra[golfie];
            kiloes = tangon.bind(yankee)(golfie);
            option = kiloes.dispatch;
            golfie = {};
            sizing = 'USER_GUILD_SETTINGS_CHANNEL_UPDATE';
            golfie['type'] = sizing;
            golfie['guildId'] = report;
            golfie['channelId'] = oscard;
            golfie['settings'] = verify;
            golfie = option.bind(kiloes)(golfie);
            golfie = foxtra[zuuluu];
            option = romeon.bind(yankee)(golfie);
            golfie = option.trackChannelNotificationSettingsUpdate;
            zuuluu = foxtra[zuuluu];
            zuuluu = romeon.bind(yankee)(zuuluu);
            kiloes = zuuluu.NotificationLabel;
            zuuluu = kiloes.optedIn;
            update = zuuluu.bind(kiloes)(entity);
            config = option;
            sequen = report;
            vacuum = oscard;
            ctrled = verify;
            echoed = offset;
            zuuluu = config[golfie](sequen, vacuum, ctrled, source, update, echoed, result);
            zuuluu = _closure1_slot12;
            zuuluu = zuuluu.bind(yankee)(report);
            zuuluu = 11;
            zuuluu = foxtra[zuuluu];
            option = tangon.bind(yankee)(zuuluu);
            golfie = option.track;
            zuuluu = _closure1_slot7;
            tangon = zuuluu.CHANNEL_LIST_UPDATED;
            zuuluu = {};
            verify = 12;
            backup = foxtra[verify];
            kiloes = romeon.bind(yankee)(backup);
            backup = kiloes.collectGuildAnalyticsMetadata;
            vacuum = backup.bind(kiloes)(report);
            sequen = zuuluu;
            backup = copyDataProperties(sequen, vacuum);
            verify = foxtra[verify];
            romeon = romeon.bind(yankee)(verify);
            yankee = romeon.collectChannelAnalyticsMetadata;
            foxtra = _closure1_slot5;
            verify = foxtra.getChannel;
            verify = verify.bind(foxtra)(oscard);
            vacuum = yankee.bind(romeon)(verify);
            sequen = zuuluu;
            verify = copyDataProperties(sequen, vacuum);
            yankee = 'remove';
            if(!entity) { _fun00008_ip = 462; continue _fun00007 }
 458:
            yankee = 'add';
 462:
            verify = 'action_type';
            zuuluu[verify] = yankee;
            verify = 'location';
            zuuluu[verify] = offset;
            zuuluu = golfie.bind(option)(tangon, zuuluu);
            _fun00008_ip = 560; continue _fun00007;
 488:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            michal = 6;
            zuuluu = zuuluu[michal];
            michal = undefined;
            tangon = tangon.bind(michal)(zuuluu);
            zuuluu = tangon.updateImpersonatedChannels;
            if(entity) { _fun00008_ip = 525; continue _fun00007 }
 519:
            michal = new Array(0);
            _fun00008_ip = 536; continue _fun00007;
 525:
            golfie = new Array(1);
            golfie[0] = oscard;
            michal = golfie;
 536:
            if(entity) { _fun00008_ip = 549; continue _fun00007 }
 539:
            entity = new Array(1);
            entity[0] = oscard;
            _fun00008_ip = 553; continue _fun00007;
 549:
            entity = new Array(0);
 553:
            entity = zuuluu.bind(tangon)(report, michal, entity);
 560:
            entity = undefined;
            return entity;
        }
    };
    zuuluu['setOptInChannel'] = golfie;
    golfie = function(argFoo, argBar, argBaz, argCor) { // Original name: updateOptInChannelsImmediate
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            tangon = argFoo;
            verify = argBar;
            michal = argBaz;
            offset = argCor;
            entity = null;
            if(!(entity != tangon)) { _fun00010_ip = 580; continue _fun00009 }
 21:
            report = _closure1_slot4;
            zuuluu = report.isFullServerPreview;
            zuuluu = zuuluu.bind(report)(tangon);
            if(zuuluu) { _fun00010_ip = 584; continue _fun00009 }
 45:
            report = _closure1_slot6;
            zuuluu = report.getChannelIdFlags;
            option = zuuluu.bind(report)(tangon, verify);
            foxtra = option;
            if(michal) { _fun00010_ip = 114; continue _fun00009 }
 67:
            oscard = _closure1_slot0;
            report = _closure1_slot2;
            zuuluu = 7;
            report = report[zuuluu];
            zuuluu = undefined;
            golfie = oscard.bind(zuuluu)(report);
            oscard = golfie.setFlag;
            zuuluu = _closure1_slot8;
            report = zuuluu.FAVORITED;
            zuuluu = false;
            foxtra = oscard.bind(golfie)(option, report, zuuluu);
 114:
            golfie = _closure1_slot0;
            oscard = _closure1_slot2;
            zuuluu = 8;
            report = oscard[zuuluu];
            romeon = undefined;
            option = golfie.bind(romeon)(report);
            report = option.getCurrentChannelSettings;
            backup = report.bind(option)(tangon, verify);
            option = {};
            report = 7;
            oscard = oscard[report];
            yankee = golfie.bind(romeon)(oscard);
            golfie = yankee.setFlag;
            oscard = _closure1_slot8;
            oscard = oscard.OPT_IN_ENABLED;
            oscard = golfie.bind(yankee)(foxtra, oscard, michal);
            option['flags'] = oscard;
            golfie = _closure1_slot6;
            oscard = golfie.isOptInEnabled;
            oscard = oscard.bind(golfie)(tangon);
            if(oscard) { _fun00010_ip = 316; continue _fun00009 }
 207:
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            report = golfie[report];
            kiloes = oscard.bind(romeon)(report);
            foxtra = kiloes.setFlag;
            oscard = _closure1_slot6;
            report = oscard.getGuildFlags;
            yankee = report.bind(oscard)(tangon);
            report = _closure1_slot9;
            oscard = report.OPT_IN_CHANNELS_ON;
            report = true;
            foxtra = foxtra.bind(kiloes)(yankee, oscard, report);
            oscard = _closure1_slot1;
            report = 9;
            report = golfie[report];
            golfie = oscard.bind(romeon)(report);
            oscard = golfie.saveUserGuildSettingsBulk;
            report = {};
            yankee = {};
            kiloes = {};
            kiloes[verify] = option;
            yankee['channel_overrides'] = kiloes;
            yankee['flags'] = foxtra;
            report[tangon] = yankee;
            report = oscard.bind(golfie)(report);
 316:
            report = _closure1_slot1;
            foxtra = _closure1_slot2;
            oscard = 10;
            oscard = foxtra[oscard];
            yankee = report.bind(romeon)(oscard);
            golfie = yankee.dispatch;
            oscard = {};
            kiloes = 'USER_GUILD_SETTINGS_CHANNEL_UPDATE';
            oscard['type'] = kiloes;
            oscard['guildId'] = tangon;
            oscard['channelId'] = verify;
            oscard['settings'] = option;
            oscard = golfie.bind(yankee)(oscard);
            yankee = _closure1_slot0;
            oscard = foxtra[zuuluu];
            golfie = yankee.bind(romeon)(oscard);
            oscard = golfie.trackChannelNotificationSettingsUpdate;
            zuuluu = foxtra[zuuluu];
            zuuluu = yankee.bind(romeon)(zuuluu);
            kiloes = zuuluu.NotificationLabel;
            zuuluu = kiloes.optedIn;
            result = zuuluu.bind(kiloes)(michal);
            vacuum = golfie;
            ctrled = tangon;
            source = verify;
            update = option;
            echoed = backup;
            output = offset;
            zuuluu = vacuum[oscard](ctrled, source, update, echoed, result, output, sizing);
            zuuluu = _closure1_slot12;
            zuuluu = zuuluu.bind(romeon)(tangon);
            zuuluu = 11;
            zuuluu = foxtra[zuuluu];
            golfie = report.bind(romeon)(zuuluu);
            oscard = golfie.track;
            zuuluu = _closure1_slot7;
            report = zuuluu.CHANNEL_LIST_UPDATED;
            zuuluu = {};
            option = 12;
            backup = foxtra[option];
            kiloes = yankee.bind(romeon)(backup);
            backup = kiloes.collectGuildAnalyticsMetadata;
            source = backup.bind(kiloes)(tangon);
            ctrled = zuuluu;
            backup = copyDataProperties(ctrled, source);
            option = foxtra[option];
            romeon = yankee.bind(romeon)(option);
            yankee = romeon.collectChannelAnalyticsMetadata;
            foxtra = _closure1_slot5;
            option = foxtra.getChannel;
            option = option.bind(foxtra)(verify);
            source = yankee.bind(romeon)(option);
            ctrled = zuuluu;
            option = copyDataProperties(ctrled, source);
            yankee = 'remove';
            if(!michal) { _fun00010_ip = 556; continue _fun00009 }
 552:
            yankee = 'add';
 556:
            option = 'action_type';
            zuuluu[option] = yankee;
            option = 'location';
            zuuluu[option] = offset;
            zuuluu = oscard.bind(golfie)(report, zuuluu);
 580:
            zuuluu = undefined;
            return zuuluu;
 584:
            golfie = _closure1_slot0;
            zuuluu = _closure1_slot2;
            report = 6;
            oscard = zuuluu[report];
            zuuluu = undefined;
            option = golfie.bind(zuuluu)(oscard);
            golfie = option.updateImpersonatedChannels;
            if(michal) { _fun00010_ip = 621; continue _fun00009 }
 615:
            oscard = new Array(0);
            _fun00010_ip = 632; continue _fun00009;
 621:
            offset = new Array(1);
            offset[0] = verify;
            oscard = offset;
 632:
            if(michal) { _fun00010_ip = 645; continue _fun00009 }
 635:
            michal = new Array(1);
            michal[0] = verify;
            _fun00010_ip = 649; continue _fun00009;
 645:
            michal = new Array(0);
 649:
            michal = golfie.bind(option)(tangon, oscard, michal);
            michal = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[report];
            zuuluu = michal.bind(zuuluu)(entity);
            michal = zuuluu.updateImpersonatedData;
            entity = {};
            report = true;
            entity['optInEnabled'] = report;
            entity = michal.bind(zuuluu)(tangon, entity);
            entity = undefined;
            return entity;
        }
    };
    zuuluu['updateOptInChannelsImmediate'] = golfie;
    zuuluu['updateOptInChannelsBatched'] = oscard;
    oscard = function(argFoo, argBar) { // Original name: bulkOptInChannels
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            report = argFoo;
            verify = argBar;
            entity = arguments[2];
            yankee = arguments[3];
            var _closure2_slot0 = report;
            tangon = undefined;
            if(!(entity === tangon)) { _fun00012_ip = 26; continue _fun00011 }
 24:
            entity = false;
 26:
            var _closure2_slot1 = tangon;
            michal = null;
            if(!(michal != report)) { _fun00012_ip = 458; continue _fun00011 }
 39:
            golfie = _closure1_slot4;
            zuuluu = golfie.isFullServerPreview;
            zuuluu = zuuluu.bind(golfie)(report);
            if(zuuluu) { _fun00012_ip = 460; continue _fun00011 }
 63:
            zuuluu = {};
            _closure2_slot1 = zuuluu;
            golfie = verify.forEach;
            oscard = function(argFoo) {
                tangon = argFoo;
                oscard = _closure1_slot6;
                zuuluu = oscard.getChannelIdFlags;
                michal = _closure2_slot0;
                verify = zuuluu.bind(oscard)(michal, tangon);
                zuuluu = _closure2_slot1;
                michal = {};
                golfie = _closure1_slot0;
                oscard = _closure1_slot2;
                entity = 7;
                oscard = oscard[entity];
                entity = undefined;
                option = golfie.bind(entity)(oscard);
                golfie = option.setFlag;
                report = _closure1_slot8;
                oscard = report.OPT_IN_ENABLED;
                report = true;
                report = golfie.bind(option)(verify, oscard, report);
                michal['flags'] = report;
                zuuluu[tangon] = michal;
                return entity;
            };
            oscard = golfie.bind(verify)(oscard);
            if(entity) { _fun00012_ip = 245; continue _fun00011 }
 90:
            golfie = _closure1_slot1;
            backup = _closure1_slot2;
            oscard = 14;
            oscard = backup[oscard];
            offset = golfie.bind(tangon)(oscard);
            option = offset.updateChannelOverrideSettingsBulk;
            foxtra = _closure1_slot0;
            oscard = 8;
            oscard = backup[oscard];
            oscard = foxtra.bind(tangon)(oscard);
            oscard = oscard.NotificationLabels;
            oscard = oscard.OptedIn;
            oscard = option.bind(offset)(report, zuuluu, oscard);
            oscard = 11;
            oscard = backup[oscard];
            offset = golfie.bind(tangon)(oscard);
            option = offset.track;
            oscard = _closure1_slot7;
            golfie = oscard.CHANNEL_LIST_UPDATED;
            oscard = {};
            romeon = 12;
            romeon = backup[romeon];
            foxtra = foxtra.bind(tangon)(romeon);
            romeon = foxtra.collectGuildAnalyticsMetadata;
            sizing = romeon.bind(foxtra)(report);
            output = oscard;
            romeon = copyDataProperties(output, sizing);
            foxtra = 'add_many';
            romeon = 'action_type';
            oscard[romeon] = foxtra;
            romeon = 'location';
            oscard[romeon] = yankee;
            oscard = option.bind(offset)(golfie, oscard);
            _fun00012_ip = 458; continue _fun00011;
 245:
            romeon = _closure1_slot0;
            foxtra = _closure1_slot2;
            oscard = 7;
            oscard = foxtra[oscard];
            backup = romeon.bind(tangon)(oscard);
            offset = backup.setFlag;
            golfie = _closure1_slot6;
            oscard = golfie.getGuildFlags;
            option = oscard.bind(golfie)(report);
            oscard = _closure1_slot9;
            golfie = oscard.OPT_IN_CHANNELS_ON;
            oscard = true;
            backup = offset.bind(backup)(option, golfie, oscard);
            oscard = _closure1_slot1;
            golfie = 14;
            golfie = foxtra[golfie];
            offset = oscard.bind(tangon)(golfie);
            option = offset.updateGuildAndChannelNotificationSettings;
            golfie = {};
            golfie['flags'] = backup;
            golfie['channel_overrides'] = zuuluu;
            zuuluu = 8;
            zuuluu = foxtra[zuuluu];
            zuuluu = romeon.bind(tangon)(zuuluu);
            zuuluu = zuuluu.NotificationLabels;
            zuuluu = zuuluu.OptedIn;
            zuuluu = option.bind(offset)(report, golfie, zuuluu);
            zuuluu = 11;
            zuuluu = foxtra[zuuluu];
            option = oscard.bind(tangon)(zuuluu);
            golfie = option.track;
            zuuluu = _closure1_slot7;
            oscard = zuuluu.CHANNEL_LIST_UPDATED;
            zuuluu = {};
            offset = 12;
            offset = foxtra[offset];
            romeon = romeon.bind(tangon)(offset);
            offset = romeon.collectGuildAnalyticsMetadata;
            sizing = offset.bind(romeon)(report);
            output = zuuluu;
            offset = copyDataProperties(output, sizing);
            romeon = 'add_many_and_enable_guild';
            offset = 'action_type';
            zuuluu[offset] = romeon;
            offset = 'location';
            zuuluu[offset] = yankee;
            zuuluu = golfie.bind(option)(oscard, zuuluu);
 458:
            return tangon;
 460:
            golfie = _closure1_slot0;
            zuuluu = _closure1_slot2;
            oscard = 6;
            zuuluu = zuuluu[oscard];
            option = golfie.bind(tangon)(zuuluu);
            golfie = option.updateImpersonatedChannels;
            zuuluu = new Array(0);
            zuuluu = golfie.bind(option)(report, verify, zuuluu);
            if(!entity) { _fun00012_ip = 538; continue _fun00011 }
 500:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[oscard];
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.updateImpersonatedData;
            michal = {};
            oscard = true;
            michal['optInEnabled'] = oscard;
            entity = zuuluu.bind(tangon)(report, michal);
 538:
            entity = undefined;
            return entity;
        }
    };
    zuuluu['bulkOptInChannels'] = oscard;
    zuuluu['bulkOptOutChannels'] = report;
    report = function(argFoo, argBar, argBaz) { // Original name: setGuildOptIn
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            tangon = argFoo;
            report = argBar;
            zuuluu = _closure1_slot4;
            michal = zuuluu.isFullServerPreview;
            michal = michal.bind(zuuluu)(tangon);
            if(michal) { _fun00014_ip = 257; continue _fun00013 }
 30:
            zuuluu = _closure1_slot6;
            michal = zuuluu.getGuildFlags;
            backup = michal.bind(zuuluu)(tangon);
            zuuluu = _closure1_slot1;
            yankee = _closure1_slot2;
            michal = 14;
            michal = yankee[michal];
            offset = undefined;
            option = zuuluu.bind(offset)(michal);
            golfie = option.updateGuildNotificationSettings;
            oscard = {};
            verify = _closure1_slot0;
            michal = 7;
            michal = yankee[michal];
            foxtra = verify.bind(offset)(michal);
            romeon = foxtra.setFlag;
            michal = _closure1_slot9;
            michal = michal.OPT_IN_CHANNELS_ON;
            michal = romeon.bind(foxtra)(backup, michal, report);
            oscard['flags'] = michal;
            michal = 8;
            michal = yankee[michal];
            michal = verify.bind(offset)(michal);
            romeon = michal.NotificationLabel;
            michal = romeon.optedIn;
            michal = michal.bind(romeon)(report);
            michal = golfie.bind(option)(tangon, oscard, michal);
            michal = 11;
            michal = yankee[michal];
            golfie = zuuluu.bind(offset)(michal);
            oscard = golfie.track;
            michal = _closure1_slot7;
            zuuluu = michal.CHANNEL_LIST_UPDATED;
            michal = {};
            option = 12;
            option = yankee[option];
            verify = verify.bind(offset)(option);
            option = verify.collectGuildAnalyticsMetadata;
            sizing = option.bind(verify)(tangon);
            output = michal;
            option = copyDataProperties(output, sizing);
            verify = 'guild_disabled';
            if(!report) { _fun00014_ip = 228; continue _fun00013 }
 222:
            verify = 'guild_enabled';
 228:
            option = 'action_type';
            michal[option] = verify;
            verify = argBaz;
            option = 'location';
            michal[option] = verify;
            michal = oscard.bind(golfie)(zuuluu, michal);
            _fun00014_ip = 298; continue _fun00013;
 257:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 6;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.updateImpersonatedData;
            entity = {};
            entity['optInEnabled'] = report;
            entity = michal.bind(zuuluu)(tangon, entity);
 298:
            entity = undefined;
            return entity;
        }
    };
    zuuluu['setGuildOptIn'] = report;
    report = function(argFoo, argBar, argBaz, argCor) { // Original name: setIsFavorite
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            option = argFoo;
            romeon = argBar;
            report = argBaz;
            entity = null;
            if(!(entity != option)) { _fun00016_ip = 371; continue _fun00015 }
 18:
            zuuluu = _closure1_slot4;
            michal = zuuluu.isFullServerPreview;
            michal = michal.bind(zuuluu)(option);
            if(michal) { _fun00016_ip = 371; continue _fun00015 }
 42:
            zuuluu = _closure1_slot6;
            michal = zuuluu.getChannelIdFlags;
            offset = michal.bind(zuuluu)(option, romeon);
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            michal = 7;
            zuuluu = zuuluu[michal];
            verify = undefined;
            oscard = tangon.bind(verify)(zuuluu);
            tangon = oscard.hasFlag;
            zuuluu = _closure1_slot8;
            zuuluu = zuuluu.OPT_IN_ENABLED;
            zuuluu = tangon.bind(oscard)(offset, zuuluu);
            zuuluu = !zuuluu;
            if(!zuuluu) { _fun00016_ip = 111; continue _fun00015 }
 108:
            zuuluu = report;
 111:
            kiloes = offset;
            if(!zuuluu) { _fun00016_ip = 159; continue _fun00015 }
 117:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[michal];
            golfie = tangon.bind(verify)(zuuluu);
            oscard = golfie.setFlag;
            zuuluu = _closure1_slot8;
            tangon = zuuluu.OPT_IN_ENABLED;
            zuuluu = true;
            kiloes = oscard.bind(golfie)(offset, tangon, zuuluu);
 159:
            zuuluu = _closure1_slot1;
            offset = _closure1_slot2;
            tangon = 14;
            tangon = offset[tangon];
            yankee = zuuluu.bind(verify)(tangon);
            oscard = yankee.updateChannelOverrideSettings;
            tangon = {};
            golfie = _closure1_slot0;
            michal = offset[michal];
            backup = golfie.bind(verify)(michal);
            foxtra = backup.setFlag;
            michal = _closure1_slot8;
            michal = michal.FAVORITED;
            michal = foxtra.bind(backup)(kiloes, michal, report);
            tangon['flags'] = michal;
            michal = 8;
            michal = offset[michal];
            michal = golfie.bind(verify)(michal);
            foxtra = michal.NotificationLabel;
            michal = foxtra.favorited;
            sizing = michal.bind(foxtra)(report);
            update = yankee;
            echoed = option;
            result = romeon;
            output = tangon;
            michal = update[oscard](echoed, result, output, sizing, kiloes);
            michal = 11;
            michal = offset[michal];
            tangon = zuuluu.bind(verify)(michal);
            zuuluu = tangon.track;
            entity = _closure1_slot7;
            michal = entity.CHANNEL_LIST_UPDATED;
            entity = {};
            oscard = 12;
            oscard = offset[oscard];
            golfie = golfie.bind(verify)(oscard);
            oscard = golfie.collectGuildAnalyticsMetadata;
            result = oscard.bind(golfie)(option);
            echoed = entity;
            oscard = copyDataProperties(echoed, result);
            oscard = 'unfavorited';
            if(!report) { _fun00016_ip = 344; continue _fun00015 }
 340:
            oscard = 'favorited';
 344:
            report = 'action_type';
            entity[report] = oscard;
            oscard = argCor;
            report = 'location';
            entity[report] = oscard;
            entity = zuuluu.bind(tangon)(michal, entity);
 371:
            entity = undefined;
            return entity;
        }
    };
    zuuluu['setIsFavorite'] = report;
    report = function(argFoo, argBar) { // Original name: setMessagesFavorite
        golfie = argFoo;
        verify = argBar;
        zuuluu = _closure1_slot6;
        entity = zuuluu.getChannelIdFlags;
        oscard = null;
        foxtra = entity.bind(zuuluu)(oscard, golfie);
        tangon = _closure1_slot1;
        offset = _closure1_slot2;
        entity = 14;
        zuuluu = offset[entity];
        entity = undefined;
        report = tangon.bind(entity)(zuuluu);
        tangon = report.updateChannelOverrideSettings;
        zuuluu = {};
        option = _closure1_slot0;
        yankee = 7;
        yankee = offset[yankee];
        romeon = option.bind(entity)(yankee);
        yankee = romeon.setFlag;
        michal = _closure1_slot8;
        michal = michal.FAVORITED;
        michal = yankee.bind(romeon)(foxtra, michal, verify);
        zuuluu['flags'] = michal;
        michal = 8;
        michal = offset[michal];
        michal = option.bind(entity)(michal);
        option = michal.NotificationLabel;
        michal = option.favorited;
        backup = michal.bind(option)(verify);
        result = report;
        output = null;
        sizing = golfie;
        kiloes = zuuluu;
        michal = result[tangon](output, sizing, kiloes, backup, foxtra);
        return entity;
    };
    zuuluu['setMessagesFavorite'] = report;
    report = function(argFoo, argBar) { // Original name: setAddToMessages
        golfie = argFoo;
        verify = argBar;
        zuuluu = _closure1_slot6;
        entity = zuuluu.getChannelIdFlags;
        oscard = null;
        foxtra = entity.bind(zuuluu)(oscard, golfie);
        tangon = _closure1_slot1;
        offset = _closure1_slot2;
        entity = 14;
        zuuluu = offset[entity];
        entity = undefined;
        report = tangon.bind(entity)(zuuluu);
        tangon = report.updateChannelOverrideSettings;
        zuuluu = {};
        option = _closure1_slot0;
        yankee = 7;
        yankee = offset[yankee];
        romeon = option.bind(entity)(yankee);
        yankee = romeon.setFlag;
        michal = _closure1_slot8;
        michal = michal.OPT_IN_ENABLED;
        michal = yankee.bind(romeon)(foxtra, michal, verify);
        zuuluu['flags'] = michal;
        michal = 8;
        michal = offset[michal];
        michal = option.bind(entity)(michal);
        option = michal.NotificationLabel;
        michal = option.optedIn;
        backup = michal.bind(option)(verify);
        result = report;
        output = null;
        sizing = golfie;
        kiloes = zuuluu;
        michal = result[tangon](output, sizing, kiloes, backup, foxtra);
        return entity;
    };
    zuuluu['setAddToMessages'] = report;
    report = function(argFoo) { // Original name: enableGuildNotice
        zuuluu = _closure1_slot0;
        tangon = _closure1_slot2;
        michal = 15;
        report = tangon[michal];
        entity = undefined;
        oscard = zuuluu.bind(entity)(report);
        report = oscard.updateUserGuildSettings;
        michal = tangon[michal];
        michal = zuuluu.bind(entity)(michal);
        michal = michal.UserSettingsDelay;
        tangon = michal.INFREQUENT_USER_ACTION;
        zuuluu = argFoo;
        michal = function(argFoo) {
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                zuuluu = argFoo;
                offset = _closure1_slot0;
                entity = _closure1_slot2;
                tangon = 7;
                report = entity[tangon];
                option = undefined;
                golfie = offset.bind(option)(report);
                oscard = golfie.hasFlag;
                report = zuuluu.guildOnboardingProgress;
                verify = 16;
                entity = entity[verify];
                entity = offset.bind(option)(entity);
                entity = entity.GuildOnboardingProgress;
                entity = entity.GUILD_NOTICE_SHOWN;
                entity = oscard.bind(golfie)(report, entity);
                entity = !entity;
                if(!entity) { _fun00018_ip = 140; continue _fun00017 }
 76:
                golfie = _closure1_slot0;
                michal = _closure1_slot2;
                tangon = michal[tangon];
                oscard = golfie.bind(option)(tangon);
                report = oscard.addFlag;
                tangon = zuuluu.guildOnboardingProgress;
                michal = michal[verify];
                michal = golfie.bind(option)(michal);
                michal = michal.GuildOnboardingProgress;
                michal = michal.GUILD_NOTICE_SHOWN;
                michal = report.bind(oscard)(tangon, michal);
                zuuluu['guildOnboardingProgress'] = michal;
                entity = true;
 140:
                return entity;
            }
        };
        michal = report.bind(oscard)(zuuluu, michal, tangon);
        return entity;
    };
    zuuluu['enableGuildNotice'] = report;
    zuuluu['dismissGuildNotice'] = tangon;
    tangon = function(argFoo) { // Original name: clearGuildNotice
        oscard = argFoo;
        tangon = _closure1_slot11;
        zuuluu = _closure1_slot6;
        entity = zuuluu.getOptedInChannels;
        verify = entity.bind(zuuluu)(oscard);
        zuuluu = new Array(0);
        option = 0;
        offset = zuuluu;
        entity = arraySpread(offset, verify, option);
        entity = undefined;
        zuuluu = tangon.bind(entity)(oscard, zuuluu);
        zuuluu = _closure1_slot0;
        golfie = _closure1_slot2;
        michal = 15;
        tangon = golfie[michal];
        report = zuuluu.bind(entity)(tangon);
        tangon = report.updateUserGuildSettings;
        michal = golfie[michal];
        michal = zuuluu.bind(entity)(michal);
        michal = michal.UserSettingsDelay;
        zuuluu = michal.INFREQUENT_USER_ACTION;
        michal = function(argFoo) {
            michal = argFoo;
            option = _closure1_slot0;
            verify = _closure1_slot2;
            zuuluu = 7;
            entity = verify[zuuluu];
            golfie = undefined;
            yankee = option.bind(golfie)(entity);
            offset = yankee.setFlag;
            report = michal.guildOnboardingProgress;
            entity = 16;
            tangon = verify[entity];
            tangon = option.bind(golfie)(tangon);
            tangon = tangon.GuildOnboardingProgress;
            tangon = tangon.GUILD_NOTICE_SHOWN;
            oscard = false;
            tangon = offset.bind(yankee)(report, tangon, oscard);
            michal['guildOnboardingProgress'] = tangon;
            zuuluu = verify[zuuluu];
            report = option.bind(golfie)(zuuluu);
            tangon = report.setFlag;
            zuuluu = michal.guildOnboardingProgress;
            entity = verify[entity];
            entity = option.bind(golfie)(entity);
            entity = entity.GuildOnboardingProgress;
            entity = entity.GUILD_NOTICE_CLEARED;
            entity = tangon.bind(report)(zuuluu, entity, oscard);
            michal['guildOnboardingProgress'] = entity;
            entity = true;
            return entity;
        };
        michal = tangon.bind(report)(oscard, michal, zuuluu);
        return entity;
    };
    zuuluu['clearGuildNotice'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: dimissFavoriteSuggestion
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 10;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'DISMISS_FAVORITE_SUGGESTION';
        michal['type'] = report;
        report = argFoo;
        michal['guildId'] = report;
        report = argBar;
        michal['channelId'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['dimissFavoriteSuggestion'] = tangon;
    michal = function(argFoo, argBar) { // Original name: setRecentlyActiveCollapsed
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 10;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'SET_RECENTLY_ACTIVE_COLLAPSED';
        michal['type'] = report;
        report = argFoo;
        michal['guildId'] = report;
        report = argBar;
        michal['collapsed'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['setRecentlyActiveCollapsed'] = michal;
    return entity;
})();