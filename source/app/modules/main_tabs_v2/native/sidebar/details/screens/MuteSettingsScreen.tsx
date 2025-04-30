// app/modules/main_tabs_v2/native/sidebar/details/screens/MuteSettingsScreen.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    romeon = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = romeon;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: UnmuteOptions
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            yankee = michal.channel;
            var _closure2_slot0 = yankee;
            verify = michal.muteConfig;
            golfie = michal.navigation;
            var _closure2_slot1 = golfie;
            michal = _closure1_slot13;
            tangon = undefined;
            report = michal.bind(tangon)();
            oscard = _closure1_slot3;
            zuuluu = oscard.useCallback;
            option = yankee.guild_id;
            michal = new Array(3);
            michal[0] = option;
            option = yankee.id;
            michal[1] = option;
            michal[2] = golfie;
            entity = function() {
                zuuluu = _closure2_slot1;
                entity = zuuluu.goBack;
                entity = entity.bind(zuuluu)();
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 13;
                zuuluu = zuuluu[entity];
                entity = undefined;
                report = tangon.bind(entity)(zuuluu);
                tangon = report.handleUnmutePress;
                michal = _closure2_slot0;
                zuuluu = michal.id;
                michal = michal.guild_id;
                michal = tangon.bind(report)(zuuluu, michal);
                return entity;
            };
            backup = zuuluu.bind(oscard)(entity, michal);
            zuuluu = _closure1_slot11;
            michal = _closure1_slot4;
            entity = {};
            report = report.options;
            entity['style'] = report;
            romeon = _closure1_slot10;
            vacuum = _closure1_slot0;
            oscard = _closure1_slot2;
            report = 14;
            report = oscard[report];
            report = vacuum.bind(tangon)(report);
            option = report.TableRow;
            report = {};
            output = _closure1_slot10;
            golfie = _closure1_slot1;
            foxtra = 15;
            foxtra = oscard[foxtra];
            sizing = golfie.bind(tangon)(foxtra);
            kiloes = {};
            foxtra = true;
            kiloes['disableColor'] = foxtra;
            result = 16;
            result = oscard[result];
            result = golfie.bind(tangon)(result);
            kiloes['source'] = result;
            kiloes = output.bind(tangon)(sizing, kiloes);
            report['icon'] = kiloes;
            output = _closure1_slot10;
            kiloes = 17;
            kiloes = oscard[kiloes];
            kiloes = vacuum.bind(tangon)(kiloes);
            sizing = kiloes.Text;
            kiloes = {'variant': 'text-md/semibold', 'color': 'header-primary'};
            result = 18;
            echoed = oscard[result];
            echoed = vacuum.bind(tangon)(echoed);
            source = echoed.intl;
            update = source.format;
            result = oscard[result];
            result = vacuum.bind(tangon)(result);
            result = result.t;
            echoed = result.eC+9rq;
            result = {};
            ctrled = 19;
            ctrled = oscard[ctrled];
            config = vacuum.bind(tangon)(ctrled);
            sequen = config.computeChannelName;
            papara = _closure1_slot8;
            cntext = _closure1_slot7;
            status = config;
            target = yankee;
            record = true;
            ctrled = status[sequen](target, papara, cntext, record, config);
            result['name'] = ctrled;
            result = update.bind(source)(echoed, result);
            kiloes['children'] = result;
            kiloes = output.bind(tangon)(sizing, kiloes);
            report['label'] = kiloes;
            report['onPress'] = backup;
            report['start'] = foxtra;
            report['end'] = foxtra;
            option = romeon.bind(tangon)(option, report);
            report = new Array(2);
            report[0] = option;
            option = _closure1_slot10;
            romeon = 20;
            oscard = oscard[romeon];
            golfie = golfie.bind(tangon)(oscard);
            oscard = {};
            oscard['muteConfig'] = verify;
            verify = yankee.isPrivate;
            verify = verify.bind(yankee)();
            yankee = _closure1_slot0;
            offset = _closure1_slot2;
            offset = offset[romeon];
            offset = yankee.bind(tangon)(offset);
            offset = offset.MuteSettingType;
            if(verify) { _fun00002_ip = 431; continue _fun00001 }
 423:
            verify = offset.CHANNEL;
            _fun00002_ip = 437; continue _fun00001;
 431:
            verify = offset.DM;
 437:
            oscard['type'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo) { // Original name: MuteOptions
        entity = argFoo;
        yankee = entity.channel;
        var _closure2_slot0 = yankee;
        michal = entity.applicationId;
        var _closure2_slot1 = michal;
        offset = entity.navigation;
        var _closure2_slot2 = offset;
        zuuluu = _closure1_slot13;
        tangon = undefined;
        oscard = zuuluu.bind(tangon)();
        verify = _closure1_slot3;
        option = verify.useMemo;
        golfie = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 13;
            michal = michal[entity];
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            entity = michal.getMuteOptions;
            entity = entity.bind(michal)();
            return entity;
        };
        zuuluu = new Array(0);
        golfie = option.bind(verify)(golfie, zuuluu);
        var _closure2_slot3 = golfie;
        verify = _closure1_slot3;
        option = verify.useCallback;
        zuuluu = new Array(3);
        zuuluu[0] = yankee;
        zuuluu[1] = offset;
        zuuluu[2] = michal;
        michal = function(argFoo) {
            michal = _closure2_slot2;
            entity = michal.goBack;
            entity = entity.bind(michal)();
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 13;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.handleMuteSettingPress;
            michal = {};
            report = _closure2_slot0;
            oscard = report.id;
            michal['channelId'] = oscard;
            report = report.guild_id;
            michal['guildId'] = report;
            report = function(argFoo) { // Original name: onOptionPress
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = argFoo;
                    report = _closure2_slot0;
                    yankee = _closure2_slot1;
                    oscard = entity.muted;
                    golfie = entity.mute_config;
                    entity = undefined;
                    if(!(golfie === entity)) { _fun00004_ip = 34; continue _fun00003 }
 32:
                    golfie = null;
 34:
                    if(!(entity !== oscard)) { _fun00004_ip = 377; continue _fun00003 }
 41:
                    michal = report.isThread;
                    michal = michal.bind(report)();
                    if(michal) { _fun00004_ip = 318; continue _fun00003 }
 57:
                    romeon = null;
                    if(!(romeon == yankee)) { _fun00004_ip = 192; continue _fun00003 }
 66:
                    tangon = _closure1_slot1;
                    option = _closure1_slot2;
                    zuuluu = 11;
                    zuuluu = option[zuuluu];
                    offset = tangon.bind(entity)(zuuluu);
                    verify = offset.updateChannelOverrideSettings;
                    zuuluu = report.getGuildId;
                    option = zuuluu.bind(report)();
                    tangon = report.id;
                    zuuluu = {};
                    zuuluu['muted'] = oscard;
                    backup = romeon != golfie;
                    foxtra = null;
                    if(!backup) { _fun00004_ip = 129; continue _fun00003 }
 126:
                    foxtra = golfie;
 129:
                    zuuluu['mute_config'] = foxtra;
                    foxtra = _closure1_slot0;
                    backup = _closure1_slot2;
                    michal = 12;
                    michal = backup[michal];
                    michal = foxtra.bind(entity)(michal);
                    foxtra = michal.NotificationLabel;
                    michal = foxtra.muted;
                    sizing = michal.bind(foxtra)(oscard);
                    update = offset;
                    echoed = option;
                    result = tangon;
                    output = zuuluu;
                    michal = update[verify](echoed, result, output, sizing, kiloes);
                    _fun00004_ip = 377; continue _fun00003;
 192:
                    tangon = _closure1_slot1;
                    option = _closure1_slot2;
                    zuuluu = 11;
                    zuuluu = option[zuuluu];
                    offset = tangon.bind(entity)(zuuluu);
                    verify = offset.updateAppDMOverrideSettings;
                    zuuluu = report.getGuildId;
                    option = zuuluu.bind(report)();
                    tangon = report.id;
                    zuuluu = {};
                    zuuluu['muted'] = oscard;
                    foxtra = romeon != golfie;
                    romeon = null;
                    if(!foxtra) { _fun00004_ip = 255; continue _fun00003 }
 252:
                    romeon = golfie;
 255:
                    zuuluu['mute_config'] = romeon;
                    romeon = _closure1_slot0;
                    foxtra = _closure1_slot2;
                    michal = 12;
                    michal = foxtra[michal];
                    michal = romeon.bind(entity)(michal);
                    romeon = michal.NotificationLabel;
                    michal = romeon.muted;
                    kiloes = michal.bind(romeon)(oscard);
                    update = offset;
                    echoed = option;
                    result = tangon;
                    output = yankee;
                    sizing = zuuluu;
                    michal = update[verify](echoed, result, output, sizing, kiloes, backup);
                    _fun00004_ip = 377; continue _fun00003;
 318:
                    zuuluu = _closure1_slot1;
                    tangon = _closure1_slot2;
                    michal = 10;
                    michal = tangon[michal];
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.setNotificationSettings;
                    michal = {};
                    michal['muted'] = oscard;
                    oscard = null;
                    option = oscard != golfie;
                    if(!option) { _fun00004_ip = 366; continue _fun00003 }
 363:
                    oscard = golfie;
 366:
                    michal['mute_config'] = oscard;
                    michal = zuuluu.bind(tangon)(report, michal);
 377:
                    return entity;
                }
            };
            michal['onOptionPress'] = report;
            report = argFoo;
            michal['muteDurationSeconds'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        michal = option.bind(verify)(michal, zuuluu);
        var _closure2_slot4 = michal;
        zuuluu = _closure1_slot10;
        michal = _closure1_slot4;
        entity = {};
        oscard = oscard.options;
        entity['style'] = oscard;
        oscard = golfie.map;
        report = function(argFoo, argBar) {
            entity = argFoo;
            golfie = argBar;
            report = entity.label;
            entity = entity.duration;
            var _closure3_slot0 = entity;
            tangon = _closure1_slot10;
            michal = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 14;
            entity = zuuluu[entity];
            zuuluu = undefined;
            entity = michal.bind(zuuluu)(entity);
            michal = entity.TableRow;
            entity = {};
            entity['label'] = report;
            oscard = function() { // Original name: onPress
                zuuluu = _closure2_slot4;
                michal = _closure3_slot0;
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
                return entity;
            };
            entity['onPress'] = oscard;
            oscard = 0;
            oscard = oscard === golfie;
            entity['start'] = oscard;
            oscard = _closure2_slot3;
            option = oscard.length;
            oscard = 1;
            oscard = option - oscard;
            oscard = golfie === oscard;
            entity['end'] = oscard;
            entity = tangon.bind(zuuluu)(michal, entity, report);
            return entity;
        };
        report = oscard.bind(golfie)(report);
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo) { // Original name: NotificationSettingsButton
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            zuuluu = michal.channel;
            var _closure2_slot0 = zuuluu;
            kiloes = michal.isMuted;
            backup = michal.isGuildMuted;
            golfie = michal.messageNotifications;
            var _closure2_slot1 = golfie;
            foxtra = michal.guildMessageNotifications;
            michal = _closure1_slot13;
            tangon = undefined;
            offset = michal.bind(tangon)();
            echoed = _closure1_slot0;
            source = _closure1_slot2;
            michal = 21;
            michal = source[michal];
            report = echoed.bind(tangon)(michal);
            michal = report.useNavigation;
            michal = michal.bind(report)();
            var _closure2_slot2 = michal;
            option = _closure1_slot3;
            oscard = option.useCallback;
            report = new Array(2);
            report[0] = zuuluu;
            report[1] = michal;
            michal = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zuuluu = _closure2_slot0;
                    michal = zuuluu.isThread;
                    zuuluu = michal.bind(zuuluu)();
                    if(zuuluu) { _fun00008_ip = 50; continue _fun00007 }
 23:
                    report = _closure2_slot2;
                    tangon = report.navigate;
                    zuuluu = _closure1_slot9;
                    zuuluu = zuuluu.NOTIFICATIONS;
                    zuuluu = tangon.bind(report)(zuuluu);
                    _fun00008_ip = 87; continue _fun00007;
 50:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 22;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    zuuluu = tangon.bind(michal)(zuuluu);
                    michal = zuuluu.showThreadNotificationsBottomSheet;
                    entity = _closure2_slot0;
                    entity = michal.bind(zuuluu)(entity);
 87:
                    entity = undefined;
                    return entity;
                }
            };
            option = oscard.bind(option)(michal, report);
            oscard = _closure1_slot3;
            report = oscard.useMemo;
            michal = new Array(1);
            michal[0] = golfie;
            entity = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 13;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.getMessageNotificationsText;
                entity = _closure2_slot1;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            vacuum = report.bind(oscard)(entity, michal);
            entity = 23;
            entity = source[entity];
            michal = echoed.bind(tangon)(entity);
            entity = michal.useVoiceActivityNotificationSettingsExperiment;
            romeon = entity.bind(michal)(zuuluu);
            zuuluu = _closure1_slot11;
            michal = _closure1_slot12;
            entity = {};
            golfie = _closure1_slot10;
            result = 14;
            report = source[result];
            report = echoed.bind(tangon)(report);
            oscard = report.TableRow;
            report = {};
            yankee = 18;
            sizing = source[yankee];
            sizing = echoed.bind(tangon)(sizing);
            output = sizing.intl;
            sizing = output.string;
            yankee = source[yankee];
            yankee = echoed.bind(tangon)(yankee);
            yankee = yankee.t;
            yankee = yankee.h850Sk;
            yankee = sizing.bind(output)(yankee);
            report['label'] = yankee;
            report['onPress'] = option;
            sizing = _closure1_slot11;
            yankee = _closure1_slot4;
            option = {};
            output = offset.trailing;
            option['style'] = output;
            ctrled = _closure1_slot10;
            output = 17;
            output = source[output];
            output = echoed.bind(tangon)(output);
            update = output.Text;
            output = {'variant': 'text-md/medium', 'color': 'text-muted'};
            output['children'] = vacuum;
            update = ctrled.bind(tangon)(update, output);
            output = new Array(2);
            output[0] = update;
            update = _closure1_slot10;
            result = source[result];
            result = echoed.bind(tangon)(result);
            result = result.TableRow;
            echoed = result.Arrow;
            result = {};
            result = update.bind(tangon)(echoed, result);
            output[1] = result;
            option['children'] = output;
            option = sizing.bind(tangon)(yankee, option);
            report['trailing'] = option;
            option = kiloes;
            if(option) { _fun00006_ip = 399; continue _fun00005 }
 396:
            option = backup;
 399:
            report['disabled'] = option;
            option = true;
            report['start'] = option;
            report['end'] = option;
            oscard = golfie.bind(tangon)(oscard, report);
            report = new Array(2);
            report[0] = oscard;
            option = _closure1_slot10;
            golfie = _closure1_slot4;
            oscard = {};
            offset = offset.hint;
            oscard['style'] = offset;
            yankee = _closure1_slot10;
            offset = _closure1_slot0;
            sizing = _closure1_slot2;
            verify = 24;
            verify = sizing[verify];
            verify = offset.bind(tangon)(verify);
            offset = verify.MuteSettingsHint;
            verify = {};
            verify['isMuted'] = kiloes;
            verify['isGuildMuted'] = backup;
            verify['guildMessageNotifications'] = foxtra;
            verify['showVoiceActivityNotificationOptions'] = romeon;
            verify = yankee.bind(tangon)(offset, verify);
            oscard['children'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot16 = entity;
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
    golfie = tangon.bind(entity)(golfie);
    var _closure1_slot3 = golfie;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ChannelSettingsSections;
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.jsx;
    var _closure1_slot10 = option;
    option = tangon.jsxs;
    var _closure1_slot11 = option;
    tangon = tangon.Fragment;
    var _closure1_slot12 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    verify = report.bind(entity)(tangon);
    option = verify.createStyles;
    tangon = {};
    offset = {'flex': 1, 'backgroundColor': null, 'padding': 16};
    yankee = 9;
    yankee = oscard[yankee];
    yankee = romeon.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.BG_BASE_SECONDARY;
    offset['backgroundColor'] = yankee;
    yankee = 16;
    tangon['container'] = offset;
    offset = {};
    offset['marginBottom'] = yankee;
    tangon['options'] = offset;
    offset = {'flexDirection': 'row', 'alignItems': 'center'};
    tangon['trailing'] = offset;
    offset = {'marginTop': 8, 'paddingHorizontal': 12};
    tangon['hint'] = offset;
    tangon = option.bind(verify)(tangon);
    var _closure1_slot13 = tangon;
    tangon = golfie.memo;
    michal = function() {
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            michal = _closure1_slot13;
            report = undefined;
            oscard = michal.bind(report)();
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            michal = 21;
            michal = zuuluu[michal];
            golfie = tangon.bind(report)(michal);
            michal = golfie.useNavigation;
            sizing = michal.bind(golfie)();
            var _closure2_slot0 = sizing;
            michal = 25;
            michal = zuuluu[michal];
            golfie = tangon.bind(report)(michal);
            michal = golfie.useRoute;
            michal = michal.bind(golfie)();
            golfie = michal.params;
            verify = golfie.channelId;
            var _closure2_slot1 = verify;
            michal = michal.params;
            result = michal.applicationId;
            michal = 26;
            golfie = zuuluu[michal];
            romeon = tangon.bind(report)(golfie);
            yankee = romeon.useStateFromStores;
            golfie = _closure1_slot5;
            offset = new Array(1);
            offset[0] = golfie;
            golfie = function() {
                zuuluu = _closure1_slot5;
                michal = zuuluu.getChannel;
                entity = _closure2_slot1;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            foxtra = yankee.bind(romeon)(offset, golfie);
            var _closure2_slot2 = foxtra;
            michal = zuuluu[michal];
            offset = tangon.bind(report)(michal);
            golfie = offset.useStateFromStores;
            michal = _closure1_slot6;
            tangon = new Array(1);
            tangon[0] = michal;
            michal = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    zuuluu = _closure1_slot6;
                    michal = zuuluu.getGuild;
                    report = _closure2_slot2;
                    entity = null;
                    report = entity == report;
                    entity = undefined;
                    if(report) { _fun00012_ip = 39; continue _fun00011 }
 30:
                    tangon = _closure2_slot2;
                    entity = tangon.guild_id;
 39:
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                }
            };
            michal = golfie.bind(offset)(tangon, michal);
            var _closure2_slot3 = michal;
            yankee = _closure1_slot3;
            offset = yankee.useMemo;
            golfie = new Array(2);
            golfie[0] = foxtra;
            golfie[1] = michal;
            tangon = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 13;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.getMuteSettingLabel;
                michal = _closure2_slot2;
                entity = _closure2_slot3;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            tangon = offset.bind(yankee)(tangon, golfie);
            var _closure2_slot4 = tangon;
            offset = _closure1_slot3;
            golfie = offset.useMemo;
            tangon = new Array(2);
            tangon[0] = foxtra;
            tangon[1] = michal;
            michal = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 13;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.getMuteSettingSublabel;
                michal = _closure2_slot2;
                entity = _closure2_slot3;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            michal = golfie.bind(offset)(michal, tangon);
            var _closure2_slot5 = michal;
            golfie = _closure1_slot3;
            tangon = golfie.useLayoutEffect;
            michal = function() {
                zuuluu = _closure2_slot0;
                michal = zuuluu.setOptions;
                entity = {};
                foxtra = _closure2_slot4;
                yankee = _closure2_slot5;
                tangon = global;
                tangon = tangon.HermesInternal;
                golfie = tangon.concat;
                backup = '';
                romeon = ' (';
                offset = ')';
                tangon = backup[golfie](foxtra, romeon, yankee, offset, verify);
                entity['title'] = tangon;
                tangon = function() { // Original name: headerTitle
                    tangon = _closure1_slot10;
                    michal = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    entity = 27;
                    entity = zuuluu[entity];
                    zuuluu = undefined;
                    entity = michal.bind(zuuluu)(entity);
                    michal = entity.GenericHeaderTitle;
                    entity = {};
                    oscard = _closure2_slot4;
                    entity['title'] = oscard;
                    report = _closure2_slot5;
                    entity['subtitle'] = report;
                    entity = tangon.bind(zuuluu)(michal, entity);
                    return entity;
                };
                entity['headerTitle'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            };
            michal = tangon.bind(golfie)(michal);
            golfie = _closure1_slot3;
            tangon = golfie.useMemo;
            michal = new Array(1);
            michal[0] = verify;
            entity = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 13;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.getMuteSettings;
                entity = _closure2_slot1;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            entity = tangon.bind(golfie)(entity, michal);
            output = entity.muteConfig;
            romeon = entity.messageNotifications;
            yankee = entity.guildMessageNotifications;
            kiloes = entity.muted;
            backup = entity.guildMuted;
            michal = _closure1_slot1;
            entity = 28;
            entity = zuuluu[entity];
            entity = michal.bind(report)(entity);
            entity = entity.bind(report)();
            verify = entity.bottom;
            entity = null;
            michal = entity == foxtra;
            if(michal) { _fun00010_ip = 560; continue _fun00009 }
 381:
            tangon = _closure1_slot11;
            zuuluu = _closure1_slot4;
            michal = {};
            golfie = oscard.container;
            oscard = new Array(2);
            oscard[0] = golfie;
            golfie = {};
            golfie['marginBottom'] = verify;
            oscard[1] = golfie;
            michal['style'] = oscard;
            offset = _closure1_slot10;
            if(kiloes) { _fun00010_ip = 452; continue _fun00009 }
 425:
            golfie = _closure1_slot15;
            oscard = {};
            oscard['channel'] = foxtra;
            oscard['applicationId'] = result;
            oscard['navigation'] = sizing;
            golfie = offset.bind(report)(golfie, oscard);
            _fun00010_ip = 482; continue _fun00009;
 452:
            verify = _closure1_slot14;
            oscard = {};
            oscard['channel'] = foxtra;
            oscard['applicationId'] = result;
            oscard['muteConfig'] = output;
            oscard['navigation'] = sizing;
            golfie = offset.bind(report)(verify, oscard);
 482:
            oscard = new Array(2);
            oscard[0] = golfie;
            golfie = foxtra.isPrivate;
            golfie = golfie.bind(foxtra)();
            golfie = !golfie;
            if(!golfie) { _fun00010_ip = 546; continue _fun00009 }
 506:
            offset = _closure1_slot10;
            verify = _closure1_slot16;
            option = {};
            option['isMuted'] = kiloes;
            option['isGuildMuted'] = backup;
            option['channel'] = foxtra;
            option['messageNotifications'] = romeon;
            option['guildMessageNotifications'] = yankee;
            golfie = offset.bind(report)(verify, option);
 546:
            oscard[1] = golfie;
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 560:
            return entity;
        }
    };
    michal = tangon.bind(golfie)(michal);
    tangon = 29;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/sidebar/details/screens/MuteSettingsScreen.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();