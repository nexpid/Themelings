// app/modules/messages/native/ChatBanner.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    foxtra = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = foxtra;
    var _closure1_slot2 = golfie;
    michal = function(argFoo) { // Original name: OptInChannelBanner
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            oscard = michal.channel;
            var _closure2_slot0 = oscard;
            golfie = michal.topBorder;
            michal = _closure1_slot12;
            tangon = undefined;
            result = michal.bind(tangon)();
            option = _closure1_slot3;
            report = option.useEffect;
            zuuluu = new Array(1);
            zuuluu[0] = oscard;
            michal = function() {
                zuuluu = _closure1_slot1;
                verify = _closure1_slot2;
                entity = 13;
                michal = verify[entity];
                entity = undefined;
                report = zuuluu.bind(entity)(michal);
                tangon = report.track;
                michal = _closure1_slot8;
                zuuluu = michal.CHANNEL_BANNER_VIEWED;
                michal = {};
                golfie = _closure1_slot0;
                oscard = 14;
                option = verify[oscard];
                romeon = golfie.bind(entity)(option);
                yankee = romeon.collectGuildAnalyticsMetadata;
                option = _closure2_slot0;
                offset = option.getGuildId;
                offset = offset.bind(option)();
                foxtra = yankee.bind(romeon)(offset);
                backup = michal;
                offset = copyDataProperties(backup, foxtra);
                oscard = verify[oscard];
                golfie = golfie.bind(entity)(oscard);
                oscard = golfie.collectChannelAnalyticsMetadata;
                foxtra = oscard.bind(golfie)(option);
                backup = michal;
                oscard = copyDataProperties(backup, foxtra);
                golfie = 'channel_opt_in';
                oscard = 'banner_type';
                michal[oscard] = golfie;
                michal = tangon.bind(report)(zuuluu, michal);
                return entity;
            };
            michal = report.bind(option)(michal, zuuluu);
            report = _closure1_slot3;
            zuuluu = report.useCallback;
            michal = new Array(1);
            michal[0] = oscard;
            entity = function() {
                tangon = _closure1_slot1;
                oscard = _closure1_slot2;
                entity = 13;
                zuuluu = oscard[entity];
                entity = undefined;
                verify = tangon.bind(entity)(zuuluu);
                option = verify.track;
                zuuluu = _closure1_slot8;
                golfie = zuuluu.CHANNEL_BANNER_CTA_CLICKED;
                tangon = {};
                report = _closure1_slot0;
                offset = 14;
                zuuluu = oscard[offset];
                foxtra = report.bind(entity)(zuuluu);
                romeon = foxtra.collectGuildAnalyticsMetadata;
                zuuluu = _closure2_slot0;
                yankee = zuuluu.getGuildId;
                yankee = yankee.bind(zuuluu)();
                sizing = romeon.bind(foxtra)(yankee);
                output = tangon;
                yankee = copyDataProperties(output, sizing);
                offset = oscard[offset];
                yankee = report.bind(entity)(offset);
                offset = yankee.collectChannelAnalyticsMetadata;
                sizing = offset.bind(yankee)(zuuluu);
                output = tangon;
                offset = copyDataProperties(output, sizing);
                yankee = 'channel_opt_in';
                offset = 'banner_type';
                tangon[offset] = yankee;
                yankee = 'add channel';
                offset = 'cta_type';
                tangon[offset] = yankee;
                tangon = option.bind(verify)(golfie, tangon);
                tangon = 15;
                tangon = oscard[tangon];
                golfie = report.bind(entity)(tangon);
                oscard = golfie.setOptInChannel;
                output = zuuluu.guild_id;
                sizing = zuuluu.id;
                zuuluu = {};
                michal = _closure1_slot9;
                michal = michal.CHANNEL;
                zuuluu['section'] = michal;
                kiloes = true;
                result = golfie;
                backup = zuuluu;
                michal = result[oscard](output, sizing, kiloes, backup, foxtra);
                return entity;
            };
            output = zuuluu.bind(report)(entity, michal);
            zuuluu = _closure1_slot11;
            michal = _closure1_slot4;
            entity = {};
            oscard = result.optInChannelBannerContainer;
            report = new Array(2);
            report[0] = oscard;
            oscard = null;
            if(!golfie) { _fun00002_ip = 128; continue _fun00001 }
 122:
            oscard = result.topBorder;
 128:
            report[1] = oscard;
            entity['style'] = report;
            golfie = _closure1_slot10;
            kiloes = _closure1_slot0;
            sizing = _closure1_slot2;
            report = 16;
            report = sizing[report];
            report = kiloes.bind(tangon)(report);
            oscard = report.Text;
            report = {'lineClamp': 2, 'style': null, 'variant': 'text-sm/semibold'};
            option = result.optInChannelBannerText;
            report['style'] = option;
            romeon = 17;
            option = sizing[romeon];
            option = kiloes.bind(tangon)(option);
            yankee = option.intl;
            offset = yankee.string;
            option = sizing[romeon];
            option = kiloes.bind(tangon)(option);
            option = option.t;
            option = option.iOWmmJ;
            option = offset.bind(yankee)(option);
            report['children'] = option;
            oscard = golfie.bind(tangon)(oscard, report);
            report = new Array(2);
            report[0] = oscard;
            option = _closure1_slot10;
            golfie = _closure1_slot4;
            oscard = {};
            offset = result.optInChannelBannerButtonContainer;
            oscard['style'] = offset;
            yankee = _closure1_slot10;
            backup = _closure1_slot1;
            foxtra = 18;
            verify = sizing[foxtra];
            offset = backup.bind(tangon)(verify);
            verify = {};
            result = result.optInChannelBannerButton;
            verify['style'] = result;
            verify['onPress'] = output;
            foxtra = sizing[foxtra];
            foxtra = backup.bind(tangon)(foxtra);
            foxtra = foxtra.Sizes;
            foxtra = foxtra.SMALL;
            verify['size'] = foxtra;
            foxtra = sizing[romeon];
            foxtra = kiloes.bind(tangon)(foxtra);
            backup = foxtra.intl;
            foxtra = backup.string;
            romeon = sizing[romeon];
            romeon = kiloes.bind(tangon)(romeon);
            romeon = romeon.t;
            romeon = romeon.TD/+zM;
            romeon = foxtra.bind(backup)(romeon);
            verify['text'] = romeon;
            verify = yankee.bind(tangon)(offset, verify);
            oscard['children'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot13 = michal;
    entity = function(argFoo) { // Original name: ArchivedLockedThreadChatBanner
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            yankee = entity.channel;
            var _closure2_slot0 = yankee;
            entity = _closure1_slot12;
            tangon = undefined;
            foxtra = entity.bind(tangon)();
            report = _closure1_slot3;
            zuuluu = report.useEffect;
            michal = new Array(1);
            michal[0] = yankee;
            entity = function() {
                zuuluu = _closure1_slot1;
                verify = _closure1_slot2;
                entity = 13;
                michal = verify[entity];
                entity = undefined;
                report = zuuluu.bind(entity)(michal);
                tangon = report.track;
                michal = _closure1_slot8;
                zuuluu = michal.CHANNEL_BANNER_VIEWED;
                michal = {};
                golfie = _closure1_slot0;
                oscard = 14;
                option = verify[oscard];
                romeon = golfie.bind(entity)(option);
                yankee = romeon.collectGuildAnalyticsMetadata;
                option = _closure2_slot0;
                offset = option.getGuildId;
                offset = offset.bind(option)();
                foxtra = yankee.bind(romeon)(offset);
                backup = michal;
                offset = copyDataProperties(backup, foxtra);
                oscard = verify[oscard];
                golfie = golfie.bind(entity)(oscard);
                oscard = golfie.collectChannelAnalyticsMetadata;
                foxtra = oscard.bind(golfie)(option);
                backup = michal;
                oscard = copyDataProperties(backup, foxtra);
                golfie = 'thread';
                oscard = 'banner_type';
                michal[oscard] = golfie;
                michal = tangon.bind(report)(zuuluu, michal);
                return entity;
            };
            entity = zuuluu.bind(report)(entity, michal);
            golfie = _closure1_slot0;
            verify = _closure1_slot2;
            entity = 19;
            entity = verify[entity];
            michal = golfie.bind(tangon)(entity);
            entity = michal.useCanUnarchiveThread;
            oscard = entity.bind(michal)(yankee);
            zuuluu = _closure1_slot11;
            michal = _closure1_slot4;
            entity = {};
            report = foxtra.threadBannerContainer;
            entity['style'] = report;
            option = _closure1_slot10;
            report = 16;
            report = verify[report];
            report = golfie.bind(tangon)(report);
            golfie = report.Text;
            report = {'lineClamp': 2, 'style': null, 'variant': 'text-sm/medium', 'color': 'header-secondary'};
            verify = foxtra.threadBannerTitle;
            report['style'] = verify;
            verify = yankee.isForumPost;
            verify = verify.bind(yankee)();
            output = _closure1_slot0;
            yankee = _closure1_slot2;
            kiloes = 17;
            backup = yankee[kiloes];
            backup = output.bind(tangon)(backup);
            sizing = backup.intl;
            backup = sizing.string;
            yankee = yankee[kiloes];
            yankee = output.bind(tangon)(yankee);
            yankee = yankee.t;
            if(verify) { _fun00004_ip = 227; continue _fun00003 }
 212:
            verify = yankee.rEeodH;
            verify = backup.bind(sizing)(verify);
            _fun00004_ip = 240; continue _fun00003;
 227:
            yankee = yankee.833FDg;
            verify = backup.bind(sizing)(yankee);
 240:
            report['children'] = verify;
            golfie = option.bind(tangon)(golfie, report);
            report = new Array(2);
            report[0] = golfie;
            if(!oscard) { _fun00004_ip = 396; continue _fun00003 }
 264:
            verify = _closure1_slot10;
            sizing = _closure1_slot1;
            yankee = _closure1_slot2;
            backup = 18;
            golfie = yankee[backup];
            option = sizing.bind(tangon)(golfie);
            golfie = {};
            backup = yankee[backup];
            backup = sizing.bind(tangon)(backup);
            backup = backup.Colors;
            backup = backup.GREY;
            golfie['color'] = backup;
            foxtra = foxtra.threadBannerButton;
            golfie['style'] = foxtra;
            backup = _closure1_slot0;
            romeon = yankee[kiloes];
            romeon = backup.bind(tangon)(romeon);
            foxtra = romeon.intl;
            romeon = foxtra.string;
            yankee = yankee[kiloes];
            yankee = backup.bind(tangon)(yankee);
            yankee = yankee.t;
            yankee = yankee.0dvvEh;
            yankee = romeon.bind(foxtra)(yankee);
            golfie['text'] = yankee;
            offset = function() { // Original name: onPress
                zuuluu = _closure1_slot1;
                tangon = _closure1_slot2;
                entity = 13;
                michal = tangon[entity];
                entity = undefined;
                option = zuuluu.bind(entity)(michal);
                golfie = option.track;
                michal = _closure1_slot8;
                oscard = michal.CHANNEL_BANNER_CTA_CLICKED;
                michal = {};
                offset = _closure1_slot0;
                verify = 14;
                report = tangon[verify];
                foxtra = offset.bind(entity)(report);
                romeon = foxtra.collectGuildAnalyticsMetadata;
                report = _closure2_slot0;
                yankee = report.getGuildId;
                yankee = yankee.bind(report)();
                backup = romeon.bind(foxtra)(yankee);
                kiloes = michal;
                yankee = copyDataProperties(kiloes, backup);
                verify = tangon[verify];
                offset = offset.bind(entity)(verify);
                verify = offset.collectChannelAnalyticsMetadata;
                backup = verify.bind(offset)(report);
                kiloes = michal;
                verify = copyDataProperties(kiloes, backup);
                offset = 'thread';
                verify = 'banner_type';
                michal[verify] = offset;
                offset = 'unarchive';
                verify = 'cta_type';
                michal[verify] = offset;
                michal = golfie.bind(option)(oscard, michal);
                michal = 20;
                michal = tangon[michal];
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.unarchiveThread;
                michal = false;
                michal = zuuluu.bind(tangon)(report, michal);
                return entity;
            };
            golfie['onPress'] = offset;
            oscard = verify.bind(tangon)(option, golfie);
 396:
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo) { // Original name: LockedThreadChatBanner
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            yankee = entity.channel;
            var _closure2_slot0 = yankee;
            entity = _closure1_slot12;
            tangon = undefined;
            foxtra = entity.bind(tangon)();
            report = _closure1_slot3;
            zuuluu = report.useEffect;
            michal = new Array(1);
            michal[0] = yankee;
            entity = function() {
                zuuluu = _closure1_slot1;
                verify = _closure1_slot2;
                entity = 13;
                michal = verify[entity];
                entity = undefined;
                report = zuuluu.bind(entity)(michal);
                tangon = report.track;
                michal = _closure1_slot8;
                zuuluu = michal.CHANNEL_BANNER_VIEWED;
                michal = {};
                golfie = _closure1_slot0;
                oscard = 14;
                option = verify[oscard];
                romeon = golfie.bind(entity)(option);
                yankee = romeon.collectGuildAnalyticsMetadata;
                option = _closure2_slot0;
                offset = option.getGuildId;
                offset = offset.bind(option)();
                foxtra = yankee.bind(romeon)(offset);
                backup = michal;
                offset = copyDataProperties(backup, foxtra);
                oscard = verify[oscard];
                golfie = golfie.bind(entity)(oscard);
                oscard = golfie.collectChannelAnalyticsMetadata;
                foxtra = oscard.bind(golfie)(option);
                backup = michal;
                oscard = copyDataProperties(backup, foxtra);
                golfie = 'thread';
                oscard = 'banner_type';
                michal[oscard] = golfie;
                michal = tangon.bind(report)(zuuluu, michal);
                return entity;
            };
            entity = zuuluu.bind(report)(entity, michal);
            golfie = _closure1_slot0;
            verify = _closure1_slot2;
            entity = 19;
            entity = verify[entity];
            michal = golfie.bind(tangon)(entity);
            entity = michal.useIsThreadModerator;
            oscard = entity.bind(michal)(yankee);
            zuuluu = _closure1_slot11;
            michal = _closure1_slot4;
            entity = {};
            report = foxtra.threadBannerContainer;
            entity['style'] = report;
            option = _closure1_slot10;
            report = 16;
            report = verify[report];
            report = golfie.bind(tangon)(report);
            golfie = report.Text;
            report = {'lineClamp': 2, 'style': null, 'variant': 'text-sm/medium', 'color': 'header-secondary'};
            verify = foxtra.threadBannerTitle;
            report['style'] = verify;
            verify = yankee.isForumPost;
            verify = verify.bind(yankee)();
            output = _closure1_slot0;
            yankee = _closure1_slot2;
            kiloes = 17;
            backup = yankee[kiloes];
            backup = output.bind(tangon)(backup);
            sizing = backup.intl;
            backup = sizing.string;
            yankee = yankee[kiloes];
            yankee = output.bind(tangon)(yankee);
            yankee = yankee.t;
            if(verify) { _fun00006_ip = 227; continue _fun00005 }
 212:
            verify = yankee.V/JF2N;
            verify = backup.bind(sizing)(verify);
            _fun00006_ip = 240; continue _fun00005;
 227:
            yankee = yankee.E7oO8v;
            verify = backup.bind(sizing)(yankee);
 240:
            report['children'] = verify;
            golfie = option.bind(tangon)(golfie, report);
            report = new Array(2);
            report[0] = golfie;
            if(!oscard) { _fun00006_ip = 396; continue _fun00005 }
 264:
            verify = _closure1_slot10;
            sizing = _closure1_slot1;
            yankee = _closure1_slot2;
            backup = 18;
            golfie = yankee[backup];
            option = sizing.bind(tangon)(golfie);
            golfie = {};
            backup = yankee[backup];
            backup = sizing.bind(tangon)(backup);
            backup = backup.Colors;
            backup = backup.GREY;
            golfie['color'] = backup;
            foxtra = foxtra.threadBannerButton;
            golfie['style'] = foxtra;
            backup = _closure1_slot0;
            romeon = yankee[kiloes];
            romeon = backup.bind(tangon)(romeon);
            foxtra = romeon.intl;
            romeon = foxtra.string;
            yankee = yankee[kiloes];
            yankee = backup.bind(tangon)(yankee);
            yankee = yankee.t;
            yankee = yankee.zA9d1N;
            yankee = romeon.bind(foxtra)(yankee);
            golfie['text'] = yankee;
            offset = function() { // Original name: onPress
                zuuluu = _closure1_slot1;
                report = _closure1_slot2;
                entity = 13;
                michal = report[entity];
                entity = undefined;
                option = zuuluu.bind(entity)(michal);
                golfie = option.track;
                michal = _closure1_slot8;
                oscard = michal.CHANNEL_BANNER_CTA_CLICKED;
                michal = {};
                offset = _closure1_slot0;
                verify = 14;
                tangon = report[verify];
                foxtra = offset.bind(entity)(tangon);
                romeon = foxtra.collectGuildAnalyticsMetadata;
                tangon = _closure2_slot0;
                yankee = tangon.getGuildId;
                yankee = yankee.bind(tangon)();
                backup = romeon.bind(foxtra)(yankee);
                kiloes = michal;
                yankee = copyDataProperties(kiloes, backup);
                verify = report[verify];
                offset = offset.bind(entity)(verify);
                verify = offset.collectChannelAnalyticsMetadata;
                backup = verify.bind(offset)(tangon);
                kiloes = michal;
                verify = copyDataProperties(kiloes, backup);
                offset = 'thread';
                verify = 'banner_type';
                michal[verify] = offset;
                offset = 'unlock';
                verify = 'cta_type';
                michal[verify] = offset;
                michal = golfie.bind(option)(oscard, michal);
                michal = 20;
                michal = report[michal];
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.unlockThread;
                michal = michal.bind(zuuluu)(tangon);
                return entity;
            };
            golfie['onPress'] = offset;
            oscard = verify.bind(tangon)(option, golfie);
 396:
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo) { // Original name: NewMessagesChatBar
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.channel;
            var _closure2_slot0 = zuuluu;
            record = entity.unreadCount;
            config = entity.oldestUnreadTimestamp;
            output = entity.handleScrollToNewMessages;
            entity = _closure1_slot12;
            oscard = undefined;
            backup = entity.bind(oscard)();
            michal = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 11;
            entity = tangon[entity];
            golfie = michal.bind(oscard)(entity);
            report = golfie.useStateFromStores;
            entity = _closure1_slot5;
            tangon = new Array(1);
            tangon[0] = entity;
            michal = function() {
                michal = _closure1_slot5;
                entity = michal.isConnected;
                entity = entity.bind(michal)();
                return entity;
            };
            entity = new Array(0);
            tangon = report.bind(golfie)(tangon, michal, entity);
            entity = null;
            if(!tangon) { _fun00008_ip = 516; continue _fun00007 }
 108:
            tangon = 0;
            tangon = record <= tangon;
            michal = null;
            if(tangon) { _fun00008_ip = 513; continue _fun00007 }
 122:
            report = _closure1_slot6;
            tangon = report.isEstimated;
            zuuluu = zuuluu.id;
            tangon = tangon.bind(report)(zuuluu);
            report = _closure1_slot0;
            zuuluu = _closure1_slot2;
            foxtra = 17;
            zuuluu = zuuluu[foxtra];
            zuuluu = report.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            if(tangon) { _fun00008_ip = 182; continue _fun00007 }
 172:
            sequen = zuuluu.BctFHx;
            _fun00008_ip = 190; continue _fun00007;
 182:
            sequen = zuuluu.wvtbbG;
 190:
            report = _closure1_slot11;
            tangon = _closure1_slot4;
            zuuluu = {};
            golfie = backup.newMessageBar;
            zuuluu['style'] = golfie;
            offset = _closure1_slot10;
            result = _closure1_slot0;
            kiloes = _closure1_slot2;
            option = 21;
            golfie = kiloes[option];
            golfie = result.bind(oscard)(golfie);
            verify = golfie.PressableOpacity;
            golfie = {};
            sizing = 'button';
            golfie['accessibilityRole'] = sizing;
            echoed = backup.newMessageBarTextContainer;
            golfie['style'] = echoed;
            golfie['onPress'] = output;
            update = _closure1_slot10;
            output = 16;
            output = kiloes[output];
            output = result.bind(oscard)(output);
            echoed = output.Text;
            output = {'variant': 'text-sm/semibold', 'color': 'always-white'};
            source = kiloes[foxtra];
            source = result.bind(oscard)(source);
            vacuum = source.intl;
            ctrled = vacuum.format;
            source = {};
            source['count'] = record;
            source['timestamp'] = config;
            source = ctrled.bind(vacuum)(sequen, source);
            output['children'] = source;
            output = update.bind(oscard)(echoed, output);
            golfie['children'] = output;
            verify = offset.bind(oscard)(verify, golfie);
            golfie = new Array(2);
            golfie[0] = verify;
            offset = _closure1_slot10;
            option = kiloes[option];
            option = result.bind(oscard)(option);
            verify = option.PressableOpacity;
            option = {};
            option['accessibilityRole'] = sizing;
            sizing = kiloes[foxtra];
            sizing = result.bind(oscard)(sizing);
            output = sizing.intl;
            sizing = output.string;
            foxtra = kiloes[foxtra];
            foxtra = result.bind(oscard)(foxtra);
            foxtra = foxtra.t;
            foxtra = foxtra.e6RscX;
            foxtra = sizing.bind(output)(foxtra);
            option['accessibilityLabel'] = foxtra;
            romeon = function() { // Original name: onPress
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 22;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.ack;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            option['onPress'] = romeon;
            foxtra = _closure1_slot10;
            romeon = _closure1_slot1;
            yankee = 23;
            yankee = kiloes[yankee];
            romeon = romeon.bind(oscard)(yankee);
            yankee = {};
            backup = backup.closeText;
            yankee['style'] = backup;
            backup = '+';
            yankee['children'] = backup;
            yankee = foxtra.bind(oscard)(romeon, yankee);
            option['children'] = yankee;
            option = offset.bind(oscard)(verify, option);
            golfie[1] = option;
            zuuluu['children'] = golfie;
            michal = report.bind(oscard)(tangon, zuuluu);
 513:
            entity = michal;
 516:
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, report);
    entity = 0;
    option = golfie[entity];
    report = argCor;
    entity = undefined;
    report = report.bind(entity)(option);
    var _closure1_slot3 = report;
    yankee = 1;
    report = golfie[yankee];
    report = oscard.bind(entity)(report);
    backup = report.StyleSheet;
    report = report.View;
    var _closure1_slot4 = report;
    report = 2;
    report = golfie[report];
    report = foxtra.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    report = golfie[report];
    report = foxtra.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 4;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.ChatOverlays;
    var _closure1_slot7 = report;
    report = 5;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    option = report.AnalyticEvents;
    var _closure1_slot8 = option;
    option = report.AnalyticsSections;
    var _closure1_slot9 = option;
    sizing = report.Fonts;
    report = 6;
    option = golfie[report];
    option = oscard.bind(entity)(option);
    option = option.jsx;
    var _closure1_slot10 = option;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.jsxs;
    var _closure1_slot11 = report;
    report = 7;
    report = golfie[report];
    verify = oscard.bind(entity)(report);
    option = verify.createStyles;
    report = {};
    offset = {'alignSelf': 'stretch', 'height': 60, 'flexDirection': 'row', 'paddingHorizontal': 16, 'paddingVertical': 12, 'alignItems': 'center', 'flexGrow': 0, 'zIndex': 100};
    kiloes = 12;
    romeon = 8;
    output = golfie[romeon];
    output = foxtra.bind(entity)(output);
    output = output.colors;
    output = output.BACKGROUND_SECONDARY_ALT;
    offset['backgroundColor'] = output;
    report['threadBannerContainer'] = offset;
    offset = {'flex': 1, 'lineHeight': 18};
    report['threadBannerTitle'] = offset;
    offset = {'flexGrow': 0, 'height': 32, 'paddingVertical': 7, 'paddingHorizontal': 16, 'marginLeft': 16};
    report['threadBannerButton'] = offset;
    offset = {'backgroundColor': null, 'flexDirection': 'row', 'justifyContent': 'center', 'alignItems': 'center', 'overflow': 'hidden', 'zIndex': 100};
    output = golfie[romeon];
    output = foxtra.bind(entity)(output);
    output = output.colors;
    output = output.BG_BRAND;
    offset['backgroundColor'] = output;
    report['newMessageBar'] = offset;
    offset = {'flex': 1, 'paddingLeft': 16, 'paddingVertical': 10};
    report['newMessageBarTextContainer'] = offset;
    offset = {};
    output = golfie[romeon];
    output = foxtra.bind(entity)(output);
    output = output.colors;
    output = output.WHITE;
    offset['color'] = output;
    sizing = sizing.PRIMARY_MEDIUM;
    offset['fontFamily'] = sizing;
    sizing = 30;
    offset['fontSize'] = sizing;
    offset['paddingHorizontal'] = kiloes;
    sizing = {};
    kiloes = '45deg';
    sizing['rotate'] = kiloes;
    kiloes = new Array(1);
    kiloes[0] = sizing;
    offset['transform'] = kiloes;
    report['closeText'] = offset;
    offset = {'flexDirection': 'row', 'justifyContent': 'space-between', 'alignItems': 'center', 'overflow': 'hidden', 'padding': 8, 'paddingLeft': 16, 'paddingRight': 16, 'zIndex': 100};
    kiloes = golfie[romeon];
    kiloes = foxtra.bind(entity)(kiloes);
    kiloes = kiloes.colors;
    kiloes = kiloes.CHAT_BANNER_BG;
    offset['backgroundColor'] = kiloes;
    kiloes = backup.hairlineWidth;
    offset['borderBottomWidth'] = kiloes;
    kiloes = golfie[romeon];
    kiloes = foxtra.bind(entity)(kiloes);
    kiloes = kiloes.colors;
    kiloes = kiloes.CHAT_BORDER;
    offset['borderBottomColor'] = kiloes;
    report['optInChannelBannerContainer'] = offset;
    offset = {};
    backup = backup.hairlineWidth;
    offset['borderTopWidth'] = backup;
    romeon = golfie[romeon];
    romeon = foxtra.bind(entity)(romeon);
    romeon = romeon.colors;
    romeon = romeon.CHAT_BORDER;
    offset['borderTopColor'] = romeon;
    report['topBorder'] = offset;
    offset = {};
    offset['flex'] = yankee;
    report['optInChannelBannerText'] = offset;
    offset = {'flexShrink': 0, 'marginLeft': 8};
    report['optInChannelBannerButtonContainer'] = offset;
    offset = {'borderRadius': 20, 'paddingLeft': 16, 'paddingRight': 16};
    report['optInChannelBannerButton'] = offset;
    report = option.bind(verify)(report);
    var _closure1_slot12 = report;
    report = 24;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/messages/native/ChatBanner.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function(argFoo) { // Original name: ChatBanner
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            michal = argFoo;
            oscard = michal.channel;
            var _closure2_slot0 = oscard;
            option = michal.handleScrollToNewMessages;
            golfie = _closure1_slot1;
            verify = _closure1_slot2;
            zuuluu = 9;
            zuuluu = verify[zuuluu];
            report = undefined;
            zuuluu = golfie.bind(report)(zuuluu);
            zuuluu = zuuluu.bind(report)(oscard);
            tangon = 10;
            tangon = verify[tangon];
            tangon = golfie.bind(report)(tangon);
            yankee = tangon.bind(report)();
            golfie = _closure1_slot0;
            tangon = 11;
            tangon = verify[tangon];
            offset = golfie.bind(report)(tangon);
            verify = offset.useStateFromStoresObject;
            tangon = _closure1_slot6;
            golfie = new Array(1);
            golfie[0] = tangon;
            romeon = oscard.id;
            tangon = new Array(1);
            tangon[0] = romeon;
            entity = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    oscard = _closure1_slot6;
                    michal = oscard.getOldestUnreadTimestamp;
                    report = _closure2_slot0;
                    entity = report.id;
                    michal = michal.bind(oscard)(entity);
                    entity = {};
                    golfie = _closure1_slot6;
                    oscard = golfie.getUnreadCount;
                    report = report.id;
                    report = oscard.bind(golfie)(report);
                    entity['unreadCount'] = report;
                    report = 0;
                    if(!(report === michal)) { _fun00012_ip = 107; continue _fun00011 }
 65:
                    oscard = _closure1_slot1;
                    report = _closure1_slot2;
                    tangon = 12;
                    report = report[tangon];
                    tangon = undefined;
                    report = oscard.bind(tangon)(report);
                    tangon = report.extractTimestamp;
                    zuuluu = _closure2_slot0;
                    zuuluu = zuuluu.id;
                    michal = tangon.bind(report)(zuuluu);
 107:
                    entity['oldestUnreadTimestamp'] = michal;
                    return entity;
                }
            };
            entity = verify.bind(offset)(golfie, entity, tangon);
            offset = entity.unreadCount;
            verify = entity.oldestUnreadTimestamp;
            entity = oscard.isArchivedLockedThread;
            entity = entity.bind(oscard)();
            if(entity) { _fun00010_ip = 308; continue _fun00009 }
 155:
            entity = oscard.isLockedThread;
            entity = entity.bind(oscard)();
            if(entity) { _fun00010_ip = 286; continue _fun00009 }
 168:
            entity = 0;
            if(!(offset > entity)) { _fun00010_ip = 197; continue _fun00009 }
 174:
            tangon = yankee.includes;
            entity = _closure1_slot7;
            entity = entity.NEW_MESSAGES;
            entity = tangon.bind(yankee)(entity);
            if(entity) { _fun00010_ip = 249; continue _fun00009 }
 197:
            entity = null;
            if(!zuuluu) { _fun00010_ip = 247; continue _fun00009 }
 202:
            golfie = yankee.includes;
            zuuluu = _closure1_slot7;
            zuuluu = zuuluu.OPT_IN_CHANNEL;
            zuuluu = golfie.bind(yankee)(zuuluu);
            entity = null;
            if(!zuuluu) { _fun00010_ip = 247; continue _fun00009 }
 227:
            golfie = _closure1_slot10;
            tangon = _closure1_slot13;
            zuuluu = {};
            zuuluu['channel'] = oscard;
            entity = golfie.bind(report)(tangon, zuuluu);
 247:
            _fun00010_ip = 284; continue _fun00009;
 249:
            golfie = _closure1_slot10;
            tangon = _closure1_slot16;
            zuuluu = {};
            zuuluu['unreadCount'] = offset;
            zuuluu['oldestUnreadTimestamp'] = verify;
            zuuluu['channel'] = oscard;
            zuuluu['handleScrollToNewMessages'] = option;
            entity = golfie.bind(report)(tangon, zuuluu);
 284:
            _fun00010_ip = 306; continue _fun00009;
 286:
            golfie = _closure1_slot10;
            tangon = _closure1_slot15;
            zuuluu = {};
            zuuluu['channel'] = oscard;
            entity = golfie.bind(report)(tangon, zuuluu);
 306:
            _fun00010_ip = 328; continue _fun00009;
 308:
            tangon = _closure1_slot10;
            zuuluu = _closure1_slot14;
            michal = {};
            michal['channel'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 328:
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    zuuluu['OptInChannelBanner'] = michal;
    return entity;
})();