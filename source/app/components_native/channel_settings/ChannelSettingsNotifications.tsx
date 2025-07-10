// app/components_native/channel_settings/ChannelSettingsNotifications.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    romeon = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = romeon;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
 2: // try_start_0
            michal = global;
            zuuluu = michal.Boolean;
            zuuluu = zuuluu.prototype;
            tangon = zuuluu.valueOf;
            zuuluu = tangon.call;
            option = michal.Reflect;
            golfie = option.construct;
            oscard = michal.Boolean;
            report = new Array(0);
            michal = function() {
                entity = undefined;
                return entity;
            };
            michal = golfie.bind(option)(oscard, report, michal);
            michal = zuuluu.bind(tangon)(michal);
            michal = !michal;
            var _closure2_slot0 = michal;
 72: // try_end0
            _fun00002_ip = 76; continue _fun00001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot28 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot28 = entity;
    entity = function(argFoo) { // Original name: ChannelSettingsNotificationsGuard
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            foxtra = entity.onClose;
            var _closure2_slot0 = foxtra;
            entity = entity.channelId;
            var _closure2_slot1 = entity;
            report = undefined;
            var _closure2_slot3 = report;
            zuuluu = _closure1_slot0;
            entity = _closure1_slot2;
            golfie = 32;
            entity = entity[golfie];
            option = zuuluu.bind(report)(entity);
            tangon = option.useStateFromStores;
            entity = _closure1_slot12;
            zuuluu = new Array(1);
            zuuluu[0] = entity;
            entity = function() {
                zuuluu = _closure1_slot12;
                michal = zuuluu.getChannel;
                entity = _closure2_slot1;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            romeon = tangon.bind(option)(zuuluu, entity);
            var _closure2_slot2 = romeon;
            entity = null;
            tangon = entity == romeon;
            zuuluu = undefined;
            if(tangon) { _fun00004_ip = 108; continue _fun00003 }
 98:
            tangon = romeon.getGuildId;
            zuuluu = tangon.bind(romeon)();
 108:
            _closure2_slot3 = zuuluu;
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            option = tangon[golfie];
            yankee = zuuluu.bind(report)(option);
            offset = yankee.useStateFromStoresObject;
            option = _closure1_slot15;
            verify = new Array(1);
            verify[0] = option;
            option = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = {};
                    oscard = _closure1_slot15;
                    report = oscard.getChannelMessageNotifications;
                    michal = _closure2_slot3;
                    golfie = _closure2_slot1;
                    michal = report.bind(oscard)(michal, golfie);
                    entity['messageNotifications'] = michal;
                    oscard = _closure1_slot15;
                    report = oscard.isChannelMuted;
                    michal = _closure2_slot3;
                    michal = report.bind(oscard)(michal, golfie);
                    entity['muted'] = michal;
                    oscard = _closure1_slot15;
                    report = oscard.getChannelMuteConfig;
                    michal = _closure2_slot3;
                    michal = report.bind(oscard)(michal, golfie);
                    entity['muteConfig'] = michal;
                    oscard = _closure1_slot15;
                    report = oscard.isMuted;
                    michal = _closure2_slot3;
                    michal = report.bind(oscard)(michal);
                    entity['guildMuted'] = michal;
                    oscard = _closure1_slot15;
                    report = oscard.getMessageNotifications;
                    michal = _closure2_slot3;
                    michal = report.bind(oscard)(michal);
                    entity['guildMessageNotifications'] = michal;
                    report = _closure2_slot2;
                    michal = null;
                    michal = michal != report;
                    if(!michal) { _fun00006_ip = 167; continue _fun00005 }
 148:
                    report = _closure1_slot15;
                    tangon = report.getNewForumThreadsCreated;
                    zuuluu = _closure2_slot2;
                    michal = tangon.bind(report)(zuuluu);
 167:
                    entity['newForumThreadsCreated'] = michal;
                    return entity;
                }
            };
            verify = offset.bind(yankee)(verify, option);
            golfie = tangon[golfie];
            yankee = zuuluu.bind(report)(golfie);
            offset = yankee.useStateFromStores;
            golfie = _closure1_slot13;
            option = new Array(1);
            option[0] = golfie;
            golfie = function() {
                zuuluu = _closure1_slot13;
                michal = zuuluu.getMemberCount;
                entity = _closure2_slot3;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            yankee = offset.bind(yankee)(option, golfie);
            offset = _closure1_slot8;
            option = offset.useEffect;
            golfie = new Array(2);
            golfie[0] = romeon;
            golfie[1] = foxtra;
            michal = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    michal = _closure2_slot2;
                    zuuluu = null;
                    if(!(zuuluu == michal)) { _fun00008_ip = 31; continue _fun00007 }
 13:
                    michal = _closure2_slot0;
                    if(!(zuuluu != michal)) { _fun00008_ip = 31; continue _fun00007 }
 21:
                    michal = _closure2_slot0;
                    entity = undefined;
                    entity = michal.bind(entity)();
 31:
                    entity = undefined;
                    return entity;
                }
            };
            michal = option.bind(offset)(michal, golfie);
            michal = 33;
            michal = tangon[michal];
            zuuluu = zuuluu.bind(report)(michal);
            michal = zuuluu.useVoiceActivityNotificationSettingsExperiment;
            offset = michal.bind(zuuluu)(romeon);
            michal = entity != romeon;
            entity = null;
            if(!michal) { _fun00004_ip = 360; continue _fun00003 }
 265:
            tangon = _closure1_slot23;
            zuuluu = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 29;
            michal = golfie[michal];
            michal = zuuluu.bind(report)(michal);
            zuuluu = michal.RedesignCompat;
            michal = {};
            option = _closure1_slot23;
            golfie = _closure1_slot27;
            oscard = {};
            oscard['onClose'] = foxtra;
            oscard['channel'] = romeon;
            sizing = oscard;
            kiloes = verify;
            verify = copyDataProperties(sizing, kiloes);
            verify = 'guildMemberCount';
            oscard[verify] = yankee;
            verify = 'showVoiceActivityNotificationOptions';
            oscard[verify] = offset;
            oscard = option.bind(report)(golfie, oscard);
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 360:
            return entity;
        }
    };
    var _closure1_slot29 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    yankee = 1;
    tangon = oscard[yankee];
    tangon = romeon.bind(entity)(tangon);
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
    golfie = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot8 = tangon;
    golfie = 6;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.View;
    var _closure1_slot9 = golfie;
    golfie = 7;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    option = golfie.isGuildTextChannelType;
    var _closure1_slot10 = option;
    golfie = golfie.CHANNEL_ELIGIBLE_FOR_UNREAD_SETTING;
    var _closure1_slot11 = golfie;
    golfie = 8;
    golfie = oscard[golfie];
    golfie = romeon.bind(entity)(golfie);
    var _closure1_slot12 = golfie;
    golfie = 9;
    golfie = oscard[golfie];
    golfie = romeon.bind(entity)(golfie);
    var _closure1_slot13 = golfie;
    golfie = 10;
    golfie = oscard[golfie];
    golfie = romeon.bind(entity)(golfie);
    var _closure1_slot14 = golfie;
    golfie = 11;
    golfie = oscard[golfie];
    golfie = romeon.bind(entity)(golfie);
    var _closure1_slot15 = golfie;
    golfie = 12;
    golfie = oscard[golfie];
    golfie = romeon.bind(entity)(golfie);
    var _closure1_slot16 = golfie;
    golfie = 13;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    option = golfie.AnalyticEvents;
    var _closure1_slot17 = option;
    option = golfie.UserNotificationSettings;
    var _closure1_slot18 = option;
    option = golfie.ChannelTypes;
    var _closure1_slot19 = option;
    option = golfie.SettingsPaneTypes;
    var _closure1_slot20 = option;
    golfie = golfie.MAX_MEMBERS_NOTIFY_ALL_MESSAGES;
    var _closure1_slot21 = golfie;
    golfie = 14;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.TitleStyleType;
    var _closure1_slot22 = golfie;
    golfie = 15;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    option = golfie.jsx;
    var _closure1_slot23 = option;
    option = golfie.Fragment;
    var _closure1_slot24 = option;
    golfie = golfie.jsxs;
    var _closure1_slot25 = golfie;
    golfie = 16;
    golfie = oscard[golfie];
    verify = report.bind(entity)(golfie);
    option = verify.createLegacyClassComponentStyles;
    golfie = {};
    offset = {};
    offset['flex'] = yankee;
    yankee = 17;
    foxtra = oscard[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.colors;
    foxtra = foxtra.BG_BASE_PRIMARY;
    offset['backgroundColor'] = foxtra;
    golfie['screenContainer'] = offset;
    offset = {};
    foxtra = oscard[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.unsafe_rawColors;
    foxtra = foxtra.RED_400;
    offset['color'] = foxtra;
    golfie['redText'] = offset;
    offset = {};
    yankee = oscard[yankee];
    yankee = romeon.bind(entity)(yankee);
    yankee = yankee.unsafe_rawColors;
    yankee = yankee.YELLOW_300;
    offset['color'] = yankee;
    golfie['orangeText'] = offset;
    golfie = option.bind(verify)(golfie);
    var _closure1_slot26 = golfie;
    golfie = tangon.PureComponent;
    tangon = function(argFoo) {
        tangon = function(argFoo) { // Original name: ChannelSettingsNotifications
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                zuuluu = argFoo;
                oscard = this;
                entity = _closure1_slot3;
                tangon = _closure2_slot0;
                report = undefined;
                entity = entity.bind(report)(oscard, tangon);
                yankee = new Array(1);
                yankee[0] = zuuluu;
                entity = _closure1_slot6;
                offset = entity.bind(report)(tangon);
                tangon = _closure1_slot5;
                entity = _closure1_slot28;
                entity = entity.bind(report)();
                if(entity) { _fun00010_ip = 75; continue _fun00009 }
 62:
                entity = offset.apply;
                entity = entity.bind(offset)(oscard, yankee);
                _fun00010_ip = 109; continue _fun00009;
 75:
                option = global;
                verify = option.Reflect;
                option = verify.construct;
                golfie = _closure1_slot6;
                golfie = golfie.bind(report)(oscard);
                golfie = golfie.constructor;
                entity = option.bind(verify)(offset, yankee, golfie);
 109:
                entity = tangon.bind(report)(oscard, entity);
                var _closure3_slot0 = entity;
                tangon = function(argFoo, argBar) {
                    _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                        entity = argFoo;
                        report = entity.muted;
                        tangon = entity.messageNotifications;
                        oscard = entity.mute_config;
                        entity = _closure3_slot0;
                        entity = entity.props;
                        michal = entity.channel;
                        golfie = {};
                        entity = undefined;
                        zuuluu = false;
                        if(!(entity !== report)) { _fun00012_ip = 74; continue _fun00011 }
 48:
                        golfie['muted'] = report;
                        report = null;
                        option = report != oscard;
                        if(!option) { _fun00012_ip = 66; continue _fun00011 }
 63:
                        report = oscard;
 66:
                        golfie['mute_config'] = report;
                        zuuluu = true;
 74:
                        if(!(entity !== tangon)) { _fun00012_ip = 86; continue _fun00011 }
 78:
                        golfie['message_notifications'] = tangon;
                        zuuluu = true;
 86:
                        if(!zuuluu) { _fun00012_ip = 146; continue _fun00011 }
 89:
                        tangon = _closure1_slot1;
                        report = _closure1_slot2;
                        zuuluu = 18;
                        zuuluu = report[zuuluu];
                        oscard = tangon.bind(entity)(zuuluu);
                        report = oscard.updateChannelOverrideSettings;
                        zuuluu = michal.getGuildId;
                        romeon = zuuluu.bind(michal)();
                        yankee = michal.id;
                        verify = argBar;
                        foxtra = oscard;
                        offset = golfie;
                        michal = foxtra[report](romeon, yankee, offset, verify, option);
 146:
                        return entity;
                    }
                };
                entity['updateSetting'] = tangon;
                tangon = function() {
                    _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                        zuuluu = _closure3_slot0;
                        tangon = zuuluu.state;
                        report = tangon.muted;
                        var _closure4_slot0 = report;
                        zuuluu = zuuluu.props;
                        verify = zuuluu.channel;
                        if(report) { _fun00014_ip = 180; continue _fun00013 }
 40:
                        golfie = _closure1_slot1;
                        zuuluu = _closure1_slot2;
                        oscard = 19;
                        oscard = zuuluu[oscard];
                        offset = undefined;
                        option = golfie.bind(offset)(oscard);
                        golfie = option.openLazy;
                        oscard = _closure1_slot0;
                        tangon = 21;
                        tangon = zuuluu[tangon];
                        oscard = oscard.bind(offset)(tangon);
                        tangon = 20;
                        tangon = zuuluu[tangon];
                        zuuluu = zuuluu.paths;
                        oscard = oscard.bind(offset)(tangon, zuuluu);
                        offset = verify.id;
                        zuuluu = global;
                        zuuluu = zuuluu.HermesInternal;
                        tangon = zuuluu.concat;
                        zuuluu = 'muteSettings';
                        tangon = tangon.bind(zuuluu)(offset);
                        zuuluu = {};
                        offset = verify.getGuildId;
                        offset = offset.bind(verify)();
                        zuuluu['guildId'] = offset;
                        verify = verify.id;
                        zuuluu['channelId'] = verify;
                        verify = function(argFoo) { // Original name: onOptionPress
                            tangon = argFoo;
                            zuuluu = _closure3_slot0;
                            michal = zuuluu.updateSetting;
                            oscard = _closure1_slot0;
                            report = _closure1_slot2;
                            entity = 22;
                            report = report[entity];
                            entity = undefined;
                            entity = oscard.bind(entity)(report);
                            oscard = entity.NotificationLabel;
                            report = oscard.muted;
                            entity = tangon.muted;
                            entity = report.bind(oscard)(entity);
                            entity = michal.bind(zuuluu)(tangon, entity);
                            return entity;
                        };
                        zuuluu['onOptionPress'] = verify;
                        zuuluu = golfie.bind(option)(oscard, tangon, zuuluu);
                        _fun00014_ip = 213; continue _fun00013;
 180:
                        tangon = _closure3_slot0;
                        zuuluu = tangon.setState;
                        michal = {};
                        report = !report;
                        michal['muted'] = report;
                        entity = function() {
                            tangon = _closure3_slot0;
                            zuuluu = tangon.updateSetting;
                            michal = {};
                            entity = _closure4_slot0;
                            report = !entity;
                            michal['muted'] = report;
                            golfie = _closure1_slot0;
                            oscard = _closure1_slot2;
                            report = 22;
                            oscard = oscard[report];
                            report = undefined;
                            report = golfie.bind(report)(oscard);
                            oscard = report.NotificationLabel;
                            report = oscard.muted;
                            entity = !entity;
                            entity = report.bind(oscard)(entity);
                            entity = zuuluu.bind(tangon)(michal, entity);
                            return entity;
                        };
                        entity = zuuluu.bind(tangon)(michal, entity);
 213:
                        entity = undefined;
                        return entity;
                    }
                };
                entity['handleToggleMuteChannel'] = tangon;
                michal = function() {
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.handleTypeChange;
                    entity = _closure1_slot18;
                    entity = entity.NULL;
                    entity = michal.bind(zuuluu)(entity);
                    entity = undefined;
                    return entity;
                };
                entity['handleResetNotification'] = michal;
                michal = {};
                tangon = zuuluu.messageNotifications;
                michal['messageNotifications'] = tangon;
                zuuluu = zuuluu.muted;
                michal['muted'] = zuuluu;
                entity['state'] = michal;
                return entity;
            }
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot7;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot4;
        report = {};
        entity = 'componentDidMount';
        report['key'] = entity;
        entity = function() { // Original name: value
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 23;
            michal = michal[entity];
            entity = undefined;
            report = zuuluu.bind(entity)(michal);
            tangon = report.trackWithMetadata;
            michal = _closure1_slot17;
            zuuluu = michal.SETTINGS_PANE_VIEWED;
            michal = {};
            golfie = 'channel';
            michal['settings_type'] = golfie;
            oscard = _closure1_slot20;
            oscard = oscard.CHANNEL_NOTIFICATION_SETTINGS;
            michal['destination_pane'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(8);
        entity[0] = report;
        report = {};
        golfie = 'componentDidUpdate';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                entity = argFoo;
                zuuluu = this;
                tangon = entity.muted;
                michal = zuuluu.props;
                michal = michal.muted;
                if(!(tangon !== michal)) { _fun00016_ip = 56; continue _fun00015 }
 27:
                tangon = zuuluu.setState;
                michal = {};
                report = zuuluu.props;
                report = report.muted;
                michal['muted'] = report;
                michal = tangon.bind(zuuluu)(michal);
 56:
                michal = entity.messageNotifications;
                entity = zuuluu.props;
                entity = entity.messageNotifications;
                if(!(michal !== entity)) { _fun00016_ip = 106; continue _fun00015 }
 77:
                michal = zuuluu.setState;
                entity = {};
                tangon = zuuluu.props;
                tangon = tangon.messageNotifications;
                entity['messageNotifications'] = tangon;
                entity = michal.bind(zuuluu)(entity);
 106:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'handleTypeChange';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            report = argFoo;
            tangon = this;
            var _closure3_slot0 = tangon;
            var _closure3_slot1 = report;
            zuuluu = tangon.setState;
            michal = {};
            michal['messageNotifications'] = report;
            entity = function() {
                tangon = _closure3_slot0;
                zuuluu = tangon.updateSetting;
                michal = {};
                oscard = _closure3_slot1;
                michal['messageNotifications'] = oscard;
                golfie = _closure1_slot0;
                report = _closure1_slot2;
                entity = 22;
                report = report[entity];
                entity = undefined;
                entity = golfie.bind(entity)(report);
                report = entity.NotificationLabel;
                entity = report.notifications;
                entity = entity.bind(report)(oscard);
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            entity = zuuluu.bind(tangon)(michal, entity);
            entity = undefined;
            return entity;
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'isSelected';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            entity = this;
            entity = entity.props;
            michal = entity.messageNotifications;
            entity = argFoo;
            entity = michal === entity;
            return entity;
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'renderMuteSection';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                oscard = this;
                entity = oscard.props;
                offset = entity.channel;
                romeon = entity.muteConfig;
                entity = oscard.state;
                golfie = entity.muted;
                backup = _closure1_slot0;
                foxtra = _closure1_slot2;
                entity = 24;
                entity = foxtra[entity];
                tangon = undefined;
                option = backup.bind(tangon)(entity);
                report = option.computeChannelName;
                record = _closure1_slot16;
                config = _closure1_slot14;
                sequen = true;
                papara = option;
                cntext = offset;
                ctrled = papara[report](cntext, record, config, sequen, vacuum);
                zuuluu = _closure1_slot25;
                michal = _closure1_slot24;
                entity = {};
                verify = _closure1_slot23;
                update = 25;
                report = foxtra[update];
                report = backup.bind(tangon)(report);
                option = report.FormSection;
                report = {};
                output = _closure1_slot23;
                kiloes = foxtra[update];
                kiloes = backup.bind(tangon)(kiloes);
                sizing = kiloes.FormHint;
                kiloes = {};
                result = 26;
                echoed = foxtra[result];
                echoed = backup.bind(tangon)(echoed);
                vacuum = echoed.intl;
                source = vacuum.string;
                echoed = foxtra[result];
                echoed = backup.bind(tangon)(echoed);
                echoed = echoed.t;
                echoed = echoed.6yI+JS;
                echoed = source.bind(vacuum)(echoed);
                kiloes['children'] = echoed;
                kiloes = output.bind(tangon)(sizing, kiloes);
                report['hint'] = kiloes;
                kiloes = _closure1_slot23;
                foxtra = foxtra[update];
                foxtra = backup.bind(tangon)(foxtra);
                backup = foxtra.FormRow;
                foxtra = {};
                output = _closure1_slot0;
                sizing = _closure1_slot2;
                echoed = sizing[result];
                echoed = output.bind(tangon)(echoed);
                source = echoed.intl;
                echoed = source.format;
                sizing = sizing[result];
                sizing = output.bind(tangon)(sizing);
                output = sizing.t;
                if(golfie) { _fun00018_ip = 287; continue _fun00017 }
 265:
                result = output.byjuJi;
                sizing = {};
                sizing['name'] = ctrled;
                sizing = echoed.bind(source)(result, sizing);
                _fun00018_ip = 305; continue _fun00017;
 287:
                result = output.eC+9rq;
                output = {};
                output['name'] = ctrled;
                sizing = echoed.bind(source)(result, output);
 305:
                foxtra['label'] = sizing;
                oscard = oscard.handleToggleMuteChannel;
                foxtra['onPress'] = oscard;
                sizing = null;
                if(golfie) { _fun00018_ip = 365; continue _fun00017 }
 324:
                echoed = _closure1_slot23;
                result = _closure1_slot0;
                output = _closure1_slot2;
                output = output[update];
                output = result.bind(tangon)(output);
                output = output.FormRow;
                result = output.Arrow;
                output = {};
                sizing = echoed.bind(tangon)(result, output);
 365:
                foxtra['trailing'] = sizing;
                foxtra = kiloes.bind(tangon)(backup, foxtra);
                report['children'] = foxtra;
                option = verify.bind(tangon)(option, report);
                report = new Array(2);
                report[0] = option;
                oscard = null;
                if(!golfie) { _fun00018_ip = 519; continue _fun00017 }
 399:
                verify = _closure1_slot23;
                option = _closure1_slot1;
                golfie = _closure1_slot2;
                foxtra = 27;
                golfie = golfie[foxtra];
                option = option.bind(tangon)(golfie);
                golfie = {};
                golfie['muteConfig'] = romeon;
                romeon = offset.type;
                offset = _closure1_slot19;
                offset = offset.GUILD_CATEGORY;
                if(!(romeon !== offset)) { _fun00018_ip = 480; continue _fun00017 }
 449:
                romeon = _closure1_slot0;
                offset = _closure1_slot2;
                offset = offset[foxtra];
                offset = romeon.bind(tangon)(offset);
                offset = offset.MuteSettingType;
                offset = offset.CHANNEL;
                _fun00018_ip = 509; continue _fun00017;
 480:
                romeon = _closure1_slot0;
                yankee = _closure1_slot2;
                yankee = yankee[foxtra];
                yankee = romeon.bind(tangon)(yankee);
                yankee = yankee.MuteSettingType;
                offset = yankee.CATEGORY;
 509:
                golfie['type'] = offset;
                oscard = verify.bind(tangon)(option, golfie);
 519:
                report[1] = oscard;
                entity['children'] = report;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            }
        };
        report['value'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'renderForumSettings';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                entity = this;
                michal = entity.props;
                zuuluu = michal.channel;
                var _closure3_slot0 = zuuluu;
                option = michal.newForumThreadsCreated;
                var _closure3_slot1 = option;
                golfie = michal.guildMuted;
                entity = entity.state;
                oscard = entity.muted;
                tangon = _closure1_slot23;
                romeon = _closure1_slot0;
                foxtra = _closure1_slot2;
                entity = 25;
                entity = foxtra[entity];
                zuuluu = undefined;
                entity = romeon.bind(zuuluu)(entity);
                michal = entity.FormSwitchRow;
                entity = {};
                verify = 26;
                offset = foxtra[verify];
                offset = romeon.bind(zuuluu)(offset);
                yankee = offset.intl;
                offset = yankee.string;
                verify = foxtra[verify];
                verify = romeon.bind(zuuluu)(verify);
                verify = verify.t;
                verify = verify.Rkgjpq;
                verify = offset.bind(yankee)(verify);
                entity['label'] = verify;
                entity['value'] = option;
                if(oscard) { _fun00020_ip = 144; continue _fun00019 }
 141:
                oscard = golfie;
 144:
                entity['disabled'] = oscard;
                report = function() { // Original name: onValueChange
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 18;
                    michal = michal[entity];
                    entity = undefined;
                    report = zuuluu.bind(entity)(michal);
                    tangon = report.setForumThreadsCreated;
                    zuuluu = _closure3_slot0;
                    michal = _closure3_slot1;
                    michal = !michal;
                    michal = tangon.bind(report)(zuuluu, michal);
                    return entity;
                };
                entity['onValueChange'] = report;
                entity = tangon.bind(zuuluu)(michal, entity);
                return entity;
            }
        };
        report['value'] = golfie;
        entity[5] = report;
        report = {};
        golfie = 'renderNotificationSettings';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                kiloes = this;
                var _closure3_slot0 = kiloes;
                entity = kiloes.props;
                michal = entity.channel;
                romeon = entity.guildMuted;
                result = entity.guildMemberCount;
                sizing = entity.showVoiceActivityNotificationOptions;
                if(!sizing) { _fun00022_ip = 50; continue _fun00021 }
 40:
                entity = michal.isGuildVoice;
                sizing = entity.bind(michal)();
 50:
                entity = kiloes.state;
                yankee = entity.muted;
                entity = michal.isGuildStageVoice;
                entity = entity.bind(michal)();
                report = _closure1_slot25;
                if(entity) { _fun00022_ip = 806; continue _fun00021 }
 84:
                zuuluu = _closure1_slot9;
                michal = {};
                entity = 'radiogroup';
                michal['accessibilityRole'] = entity;
                golfie = _closure1_slot0;
                tangon = _closure1_slot2;
                echoed = 26;
                oscard = tangon[echoed];
                entity = undefined;
                oscard = golfie.bind(entity)(oscard);
                verify = oscard.intl;
                option = verify.string;
                oscard = tangon[echoed];
                oscard = golfie.bind(entity)(oscard);
                oscard = oscard.t;
                oscard = oscard.h850Sk;
                oscard = option.bind(verify)(oscard);
                michal['accessibilityLabel'] = oscard;
                option = _closure1_slot23;
                oscard = 25;
                tangon = tangon[oscard];
                tangon = golfie.bind(entity)(tangon);
                golfie = tangon.FormRadioRow;
                tangon = {};
                backup = _closure1_slot0;
                verify = _closure1_slot2;
                output = verify[echoed];
                output = backup.bind(entity)(output);
                update = output.intl;
                output = update.string;
                verify = verify[echoed];
                verify = backup.bind(entity)(verify);
                backup = verify.t;
                if(sizing) { _fun00022_ip = 242; continue _fun00021 }
 229:
                verify = backup.n/bTaW;
                verify = output.bind(update)(verify);
                _fun00022_ip = 255; continue _fun00021;
 242:
                backup = backup.9sGJkp;
                verify = output.bind(update)(backup);
 255:
                tangon['label'] = verify;
                verify = yankee;
                if(yankee) { _fun00022_ip = 268; continue _fun00021 }
 265:
                verify = romeon;
 268:
                tangon['disabled'] = verify;
                output = null;
                backup = output != result;
                verify = null;
                if(!backup) { _fun00022_ip = 348; continue _fun00021 }
 283:
                backup = _closure1_slot21;
                backup = result >= backup;
                verify = null;
                if(!backup) { _fun00022_ip = 348; continue _fun00021 }
 296:
                update = _closure1_slot0;
                backup = _closure1_slot2;
                output = backup[echoed];
                output = update.bind(entity)(output);
                result = output.intl;
                output = result.string;
                backup = backup[echoed];
                backup = update.bind(entity)(backup);
                backup = backup.t;
                backup = backup.Dh5p5u;
                verify = output.bind(result)(backup);
 348:
                tangon['subLabel'] = verify;
                verify = function() { // Original name: onPress
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.handleTypeChange;
                    entity = _closure1_slot18;
                    entity = entity.ALL_MESSAGES;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                tangon['onPress'] = verify;
                backup = kiloes.isSelected;
                verify = _closure1_slot18;
                verify = verify.ALL_MESSAGES;
                verify = backup.bind(kiloes)(verify);
                tangon['selected'] = verify;
                verify = 'right';
                tangon['align'] = verify;
                golfie = option.bind(entity)(golfie, tangon);
                tangon = new Array(5);
                tangon[0] = golfie;
                result = _closure1_slot23;
                option = _closure1_slot0;
                golfie = _closure1_slot2;
                backup = golfie[oscard];
                backup = option.bind(entity)(backup);
                output = backup.FormDivider;
                backup = {};
                backup = result.bind(entity)(output, backup);
                tangon[1] = backup;
                backup = _closure1_slot23;
                golfie = golfie[oscard];
                golfie = option.bind(entity)(golfie);
                option = golfie.FormRadioRow;
                golfie = {};
                result = _closure1_slot0;
                output = _closure1_slot2;
                update = output[echoed];
                update = result.bind(entity)(update);
                source = update.intl;
                update = source.format;
                output = output[echoed];
                output = result.bind(entity)(output);
                output = output.t;
                if(sizing) { _fun00022_ip = 533; continue _fun00021 }
 517:
                result = output.L2hmY2;
                sizing = {};
                sizing = update.bind(source)(result, sizing);
                _fun00022_ip = 549; continue _fun00021;
 533:
                result = output.cpcXvb;
                output = {};
                sizing = update.bind(source)(result, output);
 549:
                golfie['label'] = sizing;
                sizing = yankee;
                if(yankee) { _fun00022_ip = 562; continue _fun00021 }
 559:
                sizing = romeon;
 562:
                golfie['disabled'] = sizing;
                sizing = function() { // Original name: onPress
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.handleTypeChange;
                    entity = _closure1_slot18;
                    entity = entity.ONLY_MENTIONS;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                golfie['onPress'] = sizing;
                output = kiloes.isSelected;
                sizing = _closure1_slot18;
                sizing = sizing.ONLY_MENTIONS;
                sizing = output.bind(kiloes)(sizing);
                golfie['selected'] = sizing;
                golfie['align'] = verify;
                golfie = backup.bind(entity)(option, golfie);
                tangon[2] = golfie;
                sizing = _closure1_slot23;
                result = _closure1_slot0;
                backup = _closure1_slot2;
                golfie = backup[oscard];
                golfie = result.bind(entity)(golfie);
                option = golfie.FormDivider;
                golfie = {};
                golfie = sizing.bind(entity)(option, golfie);
                tangon[3] = golfie;
                option = _closure1_slot23;
                oscard = backup[oscard];
                oscard = result.bind(entity)(oscard);
                golfie = oscard.FormRadioRow;
                oscard = {};
                sizing = backup[echoed];
                sizing = result.bind(entity)(sizing);
                output = sizing.intl;
                sizing = output.string;
                backup = backup[echoed];
                backup = result.bind(entity)(backup);
                backup = backup.t;
                backup = backup.CtVGyc;
                backup = sizing.bind(output)(backup);
                oscard['label'] = backup;
                backup = yankee;
                if(yankee) { _fun00022_ip = 735; continue _fun00021 }
 732:
                backup = romeon;
 735:
                oscard['disabled'] = backup;
                backup = function() { // Original name: onPress
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.handleTypeChange;
                    entity = _closure1_slot18;
                    entity = entity.NO_MESSAGES;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                oscard['onPress'] = backup;
                sizing = kiloes.isSelected;
                backup = _closure1_slot18;
                backup = backup.NO_MESSAGES;
                backup = sizing.bind(kiloes)(backup);
                oscard['selected'] = backup;
                oscard['align'] = verify;
                oscard = option.bind(entity)(golfie, oscard);
                tangon[4] = oscard;
                michal['children'] = tangon;
                entity = report.bind(entity)(zuuluu, michal);
                _fun00022_ip = 1222; continue _fun00021;
 806:
                tangon = _closure1_slot24;
                zuuluu = {};
                option = _closure1_slot23;
                result = _closure1_slot0;
                verify = _closure1_slot2;
                backup = 25;
                oscard = verify[backup];
                michal = undefined;
                oscard = result.bind(michal)(oscard);
                golfie = oscard.FormRow;
                oscard = {};
                update = 26;
                sizing = verify[update];
                sizing = result.bind(michal)(sizing);
                output = sizing.intl;
                sizing = output.string;
                verify = verify[update];
                verify = result.bind(michal)(verify);
                verify = verify.t;
                verify = verify.BENn//;
                verify = sizing.bind(output)(verify);
                oscard['label'] = verify;
                verify = yankee;
                if(yankee) { _fun00022_ip = 908; continue _fun00021 }
 905:
                verify = romeon;
 908:
                oscard['disabled'] = verify;
                verify = function() { // Original name: onPress
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.handleTypeChange;
                    entity = _closure1_slot18;
                    entity = entity.ONLY_MENTIONS;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                oscard['onPress'] = verify;
                result = _closure1_slot23;
                echoed = _closure1_slot0;
                sizing = _closure1_slot2;
                verify = sizing[backup];
                verify = echoed.bind(michal)(verify);
                verify = verify.FormRow;
                output = verify.Checkmark;
                verify = {};
                ctrled = kiloes.isSelected;
                source = _closure1_slot18;
                source = source.ONLY_MENTIONS;
                source = ctrled.bind(kiloes)(source);
                verify['selected'] = source;
                verify = result.bind(michal)(output, verify);
                oscard['trailing'] = verify;
                golfie = option.bind(michal)(golfie, oscard);
                oscard = new Array(3);
                oscard[0] = golfie;
                verify = _closure1_slot23;
                golfie = sizing[backup];
                golfie = echoed.bind(michal)(golfie);
                option = golfie.FormDivider;
                golfie = {};
                golfie = verify.bind(michal)(option, golfie);
                oscard[1] = golfie;
                verify = _closure1_slot23;
                golfie = sizing[backup];
                golfie = echoed.bind(michal)(golfie);
                option = golfie.FormRow;
                golfie = {};
                output = sizing[update];
                output = echoed.bind(michal)(output);
                result = output.intl;
                output = result.string;
                sizing = sizing[update];
                sizing = echoed.bind(michal)(sizing);
                sizing = sizing.t;
                sizing = sizing.CtVGyc;
                sizing = output.bind(result)(sizing);
                golfie['label'] = sizing;
                if(yankee) { _fun00022_ip = 1115; continue _fun00021 }
 1112:
                yankee = romeon;
 1115:
                golfie['disabled'] = yankee;
                offset = function() { // Original name: onPress
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.handleTypeChange;
                    entity = _closure1_slot18;
                    entity = entity.NO_MESSAGES;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                golfie['onPress'] = offset;
                romeon = _closure1_slot23;
                yankee = _closure1_slot0;
                offset = _closure1_slot2;
                offset = offset[backup];
                offset = yankee.bind(michal)(offset);
                offset = offset.FormRow;
                yankee = offset.Checkmark;
                offset = {};
                backup = kiloes.isSelected;
                foxtra = _closure1_slot18;
                foxtra = foxtra.NO_MESSAGES;
                foxtra = backup.bind(kiloes)(foxtra);
                offset['selected'] = foxtra;
                offset = romeon.bind(michal)(yankee, offset);
                golfie['trailing'] = offset;
                golfie = verify.bind(michal)(option, golfie);
                oscard[2] = golfie;
                zuuluu['children'] = oscard;
                entity = report.bind(michal)(tangon, zuuluu);
 1222:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[6] = report;
        report = {};
        golfie = 'render';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                output = this;
                entity = output.props;
                michal = entity.guildMuted;
                result = entity.channel;
                zuuluu = entity.guildMessageNotifications;
                ctrled = entity.showVoiceActivityNotificationOptions;
                entity = output.state;
                foxtra = entity.messageNotifications;
                tangon = _closure1_slot26;
                entity = output.context;
                report = undefined;
                sizing = tangon.bind(report)(entity);
                var _closure3_slot0 = sizing;
                entity = _closure1_slot18;
                romeon = entity.NULL;
                if(!ctrled) { _fun00024_ip = 90; continue _fun00023 }
 80:
                entity = result.isGuildVoice;
                ctrled = entity.bind(result)();
 90:
                tangon = _closure1_slot10;
                entity = result.type;
                verify = tangon.bind(report)(entity);
                if(verify) { _fun00024_ip = 117; continue _fun00023 }
 107:
                entity = result.isForumLikeChannel;
                verify = entity.bind(result)();
 117:
                if(verify) { _fun00024_ip = 123; continue _fun00023 }
 120:
                verify = ctrled;
 123:
                offset = null;
                tangon = offset == result;
                entity = null;
                if(tangon) { _fun00024_ip = 985; continue _fun00023 }
 137:
                if(michal) { _fun00024_ip = 268; continue _fun00023 }
 143:
                michal = _closure1_slot18;
                michal = michal.NO_MESSAGES;
                kiloes = undefined;
                if(!(zuuluu === michal)) { _fun00024_ip = 372; continue _fun00023 }
 162:
                tangon = _closure1_slot23;
                golfie = _closure1_slot0;
                update = _closure1_slot2;
                michal = 25;
                michal = update[michal];
                michal = golfie.bind(report)(michal);
                zuuluu = michal.FormHint;
                michal = {};
                oscard = 26;
                option = update[oscard];
                option = golfie.bind(report)(option);
                yankee = option.intl;
                option = yankee.format;
                oscard = update[oscard];
                oscard = golfie.bind(report)(oscard);
                oscard = oscard.t;
                golfie = oscard.nRwUIC;
                oscard = {};
                update = function(argFoo) { // Original name: notificationHook
                    report = _closure1_slot23;
                    michal = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    entity = 28;
                    entity = zuuluu[entity];
                    tangon = undefined;
                    entity = michal.bind(tangon)(entity);
                    zuuluu = entity.LegacyText;
                    michal = {};
                    entity = _closure3_slot0;
                    entity = entity.orangeText;
                    michal['style'] = entity;
                    entity = argFoo;
                    michal['children'] = entity;
                    entity = 'notif';
                    entity = report.bind(tangon)(zuuluu, michal, entity);
                    return entity;
                };
                oscard['notificationHook'] = update;
                oscard = option.bind(yankee)(golfie, oscard);
                michal['children'] = oscard;
                kiloes = tangon.bind(report)(zuuluu, michal);
                _fun00024_ip = 372; continue _fun00023;
 268:
                tangon = _closure1_slot23;
                golfie = _closure1_slot0;
                update = _closure1_slot2;
                michal = 25;
                michal = update[michal];
                michal = golfie.bind(report)(michal);
                zuuluu = michal.FormHint;
                michal = {};
                oscard = 26;
                option = update[oscard];
                option = golfie.bind(report)(option);
                yankee = option.intl;
                option = yankee.format;
                oscard = update[oscard];
                oscard = golfie.bind(report)(oscard);
                oscard = oscard.t;
                golfie = oscard.O34r19;
                oscard = {};
                echoed = function(argFoo) { // Original name: mutedHook
                    report = _closure1_slot23;
                    michal = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    entity = 28;
                    entity = zuuluu[entity];
                    tangon = undefined;
                    entity = michal.bind(tangon)(entity);
                    zuuluu = entity.LegacyText;
                    michal = {};
                    entity = _closure3_slot0;
                    entity = entity.redText;
                    michal['style'] = entity;
                    entity = argFoo;
                    michal['children'] = entity;
                    entity = 'muted';
                    entity = report.bind(tangon)(zuuluu, michal, entity);
                    return entity;
                };
                oscard['mutedHook'] = echoed;
                oscard = option.bind(yankee)(golfie, oscard);
                michal['children'] = oscard;
                kiloes = tangon.bind(report)(zuuluu, michal);
 372:
                tangon = _closure1_slot23;
                golfie = _closure1_slot0;
                oscard = _closure1_slot2;
                michal = 29;
                michal = oscard[michal];
                michal = golfie.bind(report)(michal);
                zuuluu = michal.RedesignCompat;
                michal = {};
                option = _closure1_slot25;
                yankee = 25;
                oscard = oscard[yankee];
                oscard = golfie.bind(report)(oscard);
                golfie = oscard.Form;
                oscard = {};
                sizing = sizing.screenContainer;
                oscard['style'] = sizing;
                sizing = null;
                if(!verify) { _fun00024_ip = 453; continue _fun00023 }
 443:
                verify = output.renderMuteSection;
                sizing = verify.bind(output)();
 453:
                verify = new Array(5);
                verify[0] = sizing;
                update = _closure1_slot23;
                echoed = _closure1_slot0;
                sizing = _closure1_slot2;
                sizing = sizing[yankee];
                sizing = echoed.bind(report)(sizing);
                echoed = sizing.FormSection;
                sizing = {};
                source = null;
                if(!ctrled) { _fun00024_ip = 583; continue _fun00023 }
 495:
                sequen = _closure1_slot23;
                papara = _closure1_slot0;
                target = _closure1_slot2;
                ctrled = target[yankee];
                ctrled = papara.bind(report)(ctrled);
                vacuum = ctrled.FormHint;
                ctrled = {};
                config = 26;
                record = target[config];
                record = papara.bind(report)(record);
                cntext = record.intl;
                record = cntext.string;
                config = target[config];
                config = papara.bind(report)(config);
                config = config.t;
                config = config.ztcKQE;
                config = record.bind(cntext)(config);
                ctrled['children'] = config;
                source = sequen.bind(report)(vacuum, ctrled);
 583:
                sizing['hint'] = source;
                source = _closure1_slot22;
                source = source.ANDROID_NO_BORDER;
                sizing['titleStyleType'] = source;
                config = _closure1_slot0;
                source = _closure1_slot2;
                ctrled = 26;
                vacuum = source[ctrled];
                vacuum = config.bind(report)(vacuum);
                sequen = vacuum.intl;
                vacuum = sequen.string;
                source = source[ctrled];
                source = config.bind(report)(source);
                source = source.t;
                source = source.h850Sk;
                source = vacuum.bind(sequen)(source);
                sizing['title'] = source;
                source = output.renderNotificationSettings;
                source = source.bind(output)();
                sizing['children'] = source;
                sizing = update.bind(report)(echoed, sizing);
                verify[1] = sizing;
                sizing = result.isForumLikeChannel;
                result = sizing.bind(result)();
                sizing = null;
                if(!result) { _fun00024_ip = 817; continue _fun00023 }
 703:
                update = _closure1_slot23;
                config = _closure1_slot0;
                source = _closure1_slot2;
                result = source[yankee];
                result = config.bind(report)(result);
                echoed = result.FormSection;
                result = {};
                vacuum = _closure1_slot22;
                vacuum = vacuum.ANDROID_NO_BORDER;
                result['titleStyleType'] = vacuum;
                vacuum = source[ctrled];
                vacuum = config.bind(report)(vacuum);
                sequen = vacuum.intl;
                vacuum = sequen.string;
                source = source[ctrled];
                source = config.bind(report)(source);
                source = source.t;
                source = source.bK11jI;
                source = vacuum.bind(sequen)(source);
                result['title'] = source;
                source = output.renderForumSettings;
                source = source.bind(output)();
                result['children'] = source;
                sizing = update.bind(report)(echoed, result);
 817:
                verify[2] = sizing;
                verify[3] = kiloes;
                offset = null;
                if(!(foxtra !== romeon)) { _fun00024_ip = 961; continue _fun00023 }
 834:
                foxtra = _closure1_slot23;
                source = _closure1_slot0;
                result = _closure1_slot2;
                yankee = result[yankee];
                yankee = source.bind(report)(yankee);
                romeon = yankee.FormSection;
                yankee = {};
                sizing = _closure1_slot23;
                backup = 30;
                backup = result[backup];
                backup = source.bind(report)(backup);
                kiloes = backup.TableRow;
                backup = {};
                echoed = result[ctrled];
                echoed = source.bind(report)(echoed);
                update = echoed.intl;
                echoed = update.string;
                result = result[ctrled];
                result = source.bind(report)(result);
                result = result.t;
                result = result.3PBFNz;
                result = echoed.bind(update)(result);
                backup['label'] = result;
                output = output.handleResetNotification;
                backup['onPress'] = output;
                backup = sizing.bind(report)(kiloes, backup);
                yankee['children'] = backup;
                offset = foxtra.bind(report)(romeon, yankee);
 961:
                verify[4] = offset;
                oscard['children'] = verify;
                oscard = option.bind(report)(golfie, oscard);
                michal['children'] = oscard;
                entity = tangon.bind(report)(zuuluu, michal);
 985:
                return entity;
            }
        };
        report['value'] = oscard;
        entity[7] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    golfie = tangon.bind(entity)(golfie);
    var _closure1_slot27 = golfie;
    tangon = 31;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ThemeContext;
    golfie['contextType'] = tangon;
    tangon = 36;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'components_native/channel_settings/ChannelSettingsNotifications.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: ChannelSettingsNotificationsSplit
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            golfie = argFoo;
            var _closure2_slot0 = golfie;
            michal = _closure1_slot0;
            tangon = _closure1_slot2;
            report = 32;
            report = tangon[report];
            oscard = undefined;
            verify = michal.bind(oscard)(report);
            option = verify.useStateFromStores;
            offset = _closure1_slot12;
            report = new Array(1);
            report[0] = offset;
            entity = function() {
                zuuluu = _closure1_slot12;
                michal = zuuluu.getChannel;
                entity = _closure2_slot0;
                entity = entity.channelId;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            option = option.bind(verify)(report, entity);
            entity = 34;
            entity = tangon[entity];
            tangon = michal.bind(oscard)(entity);
            michal = tangon.useShouldUseNewNotificationSystem;
            entity = 'ChannelSettingsNotificationsNative';
            michal = michal.bind(tangon)(entity);
            entity = null;
            tangon = entity == option;
            if(tangon) { _fun00026_ip = 204; continue _fun00025 }
 102:
            if(!michal) { _fun00026_ip = 127; continue _fun00025 }
 105:
            report = _closure1_slot11;
            tangon = report.has;
            michal = option.type;
            michal = tangon.bind(report)(michal);
            if(michal) { _fun00026_ip = 155; continue _fun00025 }
 127:
            report = _closure1_slot23;
            tangon = _closure1_slot29;
            michal = {};
            romeon = michal;
            yankee = golfie;
            verify = copyDataProperties(romeon, yankee);
            michal = report.bind(oscard)(tangon, michal);
            _fun00026_ip = 201; continue _fun00025;
 155:
            report = _closure1_slot23;
            tangon = _closure1_slot1;
            verify = _closure1_slot2;
            zuuluu = 35;
            zuuluu = verify[zuuluu];
            tangon = tangon.bind(oscard)(zuuluu);
            zuuluu = {};
            zuuluu['channel'] = option;
            romeon = zuuluu;
            yankee = golfie;
            golfie = copyDataProperties(romeon, yankee);
            michal = report.bind(oscard)(tangon, zuuluu);
 201:
            entity = michal;
 204:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();