// app/components_native/channel_settings/ChannelSettingsNotifications.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    romeo = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = romeo;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot29;
            entity = entity.bind(zulu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot6;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot28 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
 2: // try_start_0
            mike = global;
            zulu = mike.Boolean;
            zulu = zulu.prototype;
            tango = zulu.valueOf;
            zulu = tango.call;
            options = mike.Reflect;
            golf = options.construct;
            oscar = mike.Boolean;
            report = new Array(0);
            mike = function() {
                entity = undefined;
                return entity;
            };
            mike = golf.bind(options)(oscar, report, mike);
            mike = zulu.bind(tango)(mike);
            mike = !mike;
            var _closure2_slot0 = mike;
 72: // try_end0
            _fun00004_ip = 76; continue _fun00003;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot29 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot29 = entity;
    entity = function(argFoo) { // Original name: ChannelSettingsNotificationsGuard
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            foxtrot = entity.onClose;
            var _closure2_slot0 = foxtrot;
            entity = entity.channelId;
            var _closure2_slot1 = entity;
            report = undefined;
            var _closure2_slot3 = report;
            zulu = _closure1_slot0;
            entity = _closure1_slot2;
            golf = 30;
            entity = entity[golf];
            options = zulu.bind(report)(entity);
            tango = options.useStateFromStores;
            entity = _closure1_slot12;
            zulu = new Array(1);
            zulu[0] = entity;
            entity = function() {
                zulu = _closure1_slot12;
                mike = zulu.getChannel;
                entity = _closure2_slot1;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            romeo = tango.bind(options)(zulu, entity);
            var _closure2_slot2 = romeo;
            entity = null;
            tango = entity == romeo;
            zulu = undefined;
            if(tango) { _fun00006_ip = 108; continue _fun00005 }
 98:
            tango = romeo.getGuildId;
            zulu = tango.bind(romeo)();
 108:
            _closure2_slot3 = zulu;
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            options = tango[golf];
            yankee = zulu.bind(report)(options);
            offset = yankee.useStateFromStoresObject;
            options = _closure1_slot15;
            verify = new Array(1);
            verify[0] = options;
            options = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    entity = {};
                    oscar = _closure1_slot15;
                    report = oscar.getChannelMessageNotifications;
                    mike = _closure2_slot3;
                    golf = _closure2_slot1;
                    mike = report.bind(oscar)(mike, golf);
                    entity['messageNotifications'] = mike;
                    oscar = _closure1_slot15;
                    report = oscar.isChannelMuted;
                    mike = _closure2_slot3;
                    mike = report.bind(oscar)(mike, golf);
                    entity['muted'] = mike;
                    oscar = _closure1_slot15;
                    report = oscar.getChannelMuteConfig;
                    mike = _closure2_slot3;
                    mike = report.bind(oscar)(mike, golf);
                    entity['muteConfig'] = mike;
                    oscar = _closure1_slot15;
                    report = oscar.isMuted;
                    mike = _closure2_slot3;
                    mike = report.bind(oscar)(mike);
                    entity['guildMuted'] = mike;
                    oscar = _closure1_slot15;
                    report = oscar.getMessageNotifications;
                    mike = _closure2_slot3;
                    mike = report.bind(oscar)(mike);
                    entity['guildMessageNotifications'] = mike;
                    report = _closure2_slot2;
                    mike = null;
                    mike = mike != report;
                    if(!mike) { _fun00008_ip = 167; continue _fun00007 }
 148:
                    report = _closure1_slot15;
                    tango = report.getNewForumThreadsCreated;
                    zulu = _closure2_slot2;
                    mike = tango.bind(report)(zulu);
 167:
                    entity['newForumThreadsCreated'] = mike;
                    return entity;
                }
            };
            verify = offset.bind(yankee)(verify, options);
            golf = tango[golf];
            yankee = zulu.bind(report)(golf);
            offset = yankee.useStateFromStores;
            golf = _closure1_slot13;
            options = new Array(1);
            options[0] = golf;
            golf = function() {
                zulu = _closure1_slot13;
                mike = zulu.getMemberCount;
                entity = _closure2_slot3;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            yankee = offset.bind(yankee)(options, golf);
            offset = _closure1_slot8;
            options = offset.useEffect;
            golf = new Array(2);
            golf[0] = romeo;
            golf[1] = foxtrot;
            mike = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    mike = _closure2_slot2;
                    zulu = null;
                    if(!(zulu == mike)) { _fun00010_ip = 31; continue _fun00009 }
 13:
                    mike = _closure2_slot0;
                    if(!(zulu != mike)) { _fun00010_ip = 31; continue _fun00009 }
 21:
                    mike = _closure2_slot0;
                    entity = undefined;
                    entity = mike.bind(entity)();
 31:
                    entity = undefined;
                    return entity;
                }
            };
            mike = options.bind(offset)(mike, golf);
            mike = 31;
            mike = tango[mike];
            zulu = zulu.bind(report)(mike);
            mike = zulu.useVoiceActivityNotificationSettingsExperiment;
            offset = mike.bind(zulu)(romeo);
            mike = entity != romeo;
            entity = null;
            if(!mike) { _fun00006_ip = 360; continue _fun00005 }
 265:
            tango = _closure1_slot23;
            zulu = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 28;
            mike = golf[mike];
            mike = zulu.bind(report)(mike);
            zulu = mike.RedesignCompat;
            mike = {};
            options = _closure1_slot23;
            golf = _closure1_slot27;
            oscar = {};
            oscar['onClose'] = foxtrot;
            oscar['channel'] = romeo;
            sizing = oscar;
            kilo = verify;
            verify = copyDataProperties(sizing, kilo);
            verify = 'guildMemberCount';
            oscar[verify] = yankee;
            verify = 'showVoiceActivityNotificationOptions';
            oscar[verify] = offset;
            oscar = options.bind(report)(golf, oscar);
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 360:
            return entity;
        }
    };
    var _closure1_slot30 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = romeo.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    golf = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(golf);
    var _closure1_slot8 = tango;
    golf = 6;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    verify = golf.StyleSheet;
    golf = golf.View;
    var _closure1_slot9 = golf;
    golf = 7;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    options = golf.isGuildTextChannelType;
    var _closure1_slot10 = options;
    golf = golf.CHANNEL_ELIGIBLE_FOR_UNREAD_SETTING;
    var _closure1_slot11 = golf;
    golf = 8;
    golf = oscar[golf];
    golf = romeo.bind(entity)(golf);
    var _closure1_slot12 = golf;
    golf = 9;
    golf = oscar[golf];
    golf = romeo.bind(entity)(golf);
    var _closure1_slot13 = golf;
    golf = 10;
    golf = oscar[golf];
    golf = romeo.bind(entity)(golf);
    var _closure1_slot14 = golf;
    golf = 11;
    golf = oscar[golf];
    golf = romeo.bind(entity)(golf);
    var _closure1_slot15 = golf;
    golf = 12;
    golf = oscar[golf];
    golf = romeo.bind(entity)(golf);
    var _closure1_slot16 = golf;
    golf = 13;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    options = golf.AnalyticEvents;
    var _closure1_slot17 = options;
    options = golf.UserNotificationSettings;
    var _closure1_slot18 = options;
    options = golf.ChannelTypes;
    var _closure1_slot19 = options;
    options = golf.SettingsPaneTypes;
    var _closure1_slot20 = options;
    golf = golf.MAX_MEMBERS_NOTIFY_ALL_MESSAGES;
    var _closure1_slot21 = golf;
    golf = 14;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    golf = golf.TitleStyleType;
    var _closure1_slot22 = golf;
    golf = 15;
    options = oscar[golf];
    options = report.bind(entity)(options);
    options = options.jsx;
    var _closure1_slot23 = options;
    options = oscar[golf];
    options = report.bind(entity)(options);
    options = options.Fragment;
    var _closure1_slot24 = options;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    golf = golf.jsxs;
    var _closure1_slot25 = golf;
    options = verify.create;
    golf = {};
    offset = {};
    yankee = 16;
    foxtrot = oscar[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.unsafe_rawColors;
    foxtrot = foxtrot.RED_400;
    offset['color'] = foxtrot;
    golf['redText'] = offset;
    offset = {};
    yankee = oscar[yankee];
    yankee = romeo.bind(entity)(yankee);
    yankee = yankee.unsafe_rawColors;
    yankee = yankee.YELLOW_300;
    offset['color'] = yankee;
    golf['orangeText'] = offset;
    golf = options.bind(verify)(golf);
    var _closure1_slot26 = golf;
    golf = tango.PureComponent;
    tango = function(argFoo) {
        tango = function(argFoo) { // Original name: ChannelSettingsNotifications
            zulu = argFoo;
            golf = this;
            tango = _closure1_slot3;
            oscar = _closure2_slot0;
            report = undefined;
            tango = tango.bind(report)(golf, oscar);
            tango = _closure1_slot28;
            entity = new Array(1);
            entity[0] = zulu;
            entity = tango.bind(report)(golf, oscar, entity);
            var _closure3_slot0 = entity;
            tango = function(argFoo, argBar) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    entity = argFoo;
                    report = entity.muted;
                    tango = entity.messageNotifications;
                    oscar = entity.mute_config;
                    entity = _closure3_slot0;
                    entity = entity.props;
                    mike = entity.channel;
                    golf = {};
                    entity = undefined;
                    zulu = false;
                    if(!(entity !== report)) { _fun00012_ip = 74; continue _fun00011 }
 48:
                    golf['muted'] = report;
                    report = null;
                    options = report != oscar;
                    if(!options) { _fun00012_ip = 66; continue _fun00011 }
 63:
                    report = oscar;
 66:
                    golf['mute_config'] = report;
                    zulu = true;
 74:
                    if(!(entity !== tango)) { _fun00012_ip = 86; continue _fun00011 }
 78:
                    golf['message_notifications'] = tango;
                    zulu = true;
 86:
                    if(!zulu) { _fun00012_ip = 146; continue _fun00011 }
 89:
                    tango = _closure1_slot1;
                    report = _closure1_slot2;
                    zulu = 17;
                    zulu = report[zulu];
                    oscar = tango.bind(entity)(zulu);
                    report = oscar.updateChannelOverrideSettings;
                    zulu = mike.getGuildId;
                    romeo = zulu.bind(mike)();
                    yankee = mike.id;
                    verify = argBar;
                    foxtrot = oscar;
                    offset = golf;
                    mike = foxtrot[report](romeo, yankee, offset, verify, options);
 146:
                    return entity;
                }
            };
            entity['updateSetting'] = tango;
            tango = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zulu = _closure3_slot0;
                    tango = zulu.state;
                    report = tango.muted;
                    var _closure4_slot0 = report;
                    zulu = zulu.props;
                    verify = zulu.channel;
                    if(report) { _fun00014_ip = 180; continue _fun00013 }
 40:
                    golf = _closure1_slot1;
                    zulu = _closure1_slot2;
                    oscar = 18;
                    oscar = zulu[oscar];
                    offset = undefined;
                    options = golf.bind(offset)(oscar);
                    golf = options.openLazy;
                    oscar = _closure1_slot0;
                    tango = 20;
                    tango = zulu[tango];
                    oscar = oscar.bind(offset)(tango);
                    tango = 19;
                    tango = zulu[tango];
                    zulu = zulu.paths;
                    oscar = oscar.bind(offset)(tango, zulu);
                    offset = verify.id;
                    zulu = global;
                    zulu = zulu.HermesInternal;
                    tango = zulu.concat;
                    zulu = 'muteSettings';
                    tango = tango.bind(zulu)(offset);
                    zulu = {};
                    offset = verify.getGuildId;
                    offset = offset.bind(verify)();
                    zulu['guildId'] = offset;
                    verify = verify.id;
                    zulu['channelId'] = verify;
                    verify = function(argFoo) { // Original name: onOptionPress
                        tango = argFoo;
                        zulu = _closure3_slot0;
                        mike = zulu.updateSetting;
                        oscar = _closure1_slot0;
                        report = _closure1_slot2;
                        entity = 21;
                        report = report[entity];
                        entity = undefined;
                        entity = oscar.bind(entity)(report);
                        oscar = entity.NotificationLabel;
                        report = oscar.muted;
                        entity = tango.muted;
                        entity = report.bind(oscar)(entity);
                        entity = mike.bind(zulu)(tango, entity);
                        return entity;
                    };
                    zulu['onOptionPress'] = verify;
                    zulu = golf.bind(options)(oscar, tango, zulu);
                    _fun00014_ip = 213; continue _fun00013;
 180:
                    tango = _closure3_slot0;
                    zulu = tango.setState;
                    mike = {};
                    report = !report;
                    mike['muted'] = report;
                    entity = function() {
                        tango = _closure3_slot0;
                        zulu = tango.updateSetting;
                        mike = {};
                        entity = _closure4_slot0;
                        report = !entity;
                        mike['muted'] = report;
                        golf = _closure1_slot0;
                        oscar = _closure1_slot2;
                        report = 21;
                        oscar = oscar[report];
                        report = undefined;
                        report = golf.bind(report)(oscar);
                        oscar = report.NotificationLabel;
                        report = oscar.muted;
                        entity = !entity;
                        entity = report.bind(oscar)(entity);
                        entity = zulu.bind(tango)(mike, entity);
                        return entity;
                    };
                    entity = zulu.bind(tango)(mike, entity);
 213:
                    entity = undefined;
                    return entity;
                }
            };
            entity['handleToggleMuteChannel'] = tango;
            mike = function() {
                zulu = _closure3_slot0;
                mike = zulu.handleTypeChange;
                entity = _closure1_slot18;
                entity = entity.NULL;
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            entity['handleResetNotification'] = mike;
            mike = {};
            tango = zulu.messageNotifications;
            mike['messageNotifications'] = tango;
            zulu = zulu.muted;
            mike['muted'] = zulu;
            entity['state'] = mike;
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot7;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot4;
        report = {};
        entity = 'componentDidMount';
        report['key'] = entity;
        entity = function() { // Original name: value
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 22;
            mike = mike[entity];
            entity = undefined;
            report = zulu.bind(entity)(mike);
            tango = report.trackWithMetadata;
            mike = _closure1_slot17;
            zulu = mike.SETTINGS_PANE_VIEWED;
            mike = {};
            golf = 'channel';
            mike['settings_type'] = golf;
            oscar = _closure1_slot20;
            oscar = oscar.CHANNEL_NOTIFICATION_SETTINGS;
            mike['destination_pane'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(8);
        entity[0] = report;
        report = {};
        golf = 'componentDidUpdate';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                entity = argFoo;
                zulu = this;
                tango = entity.muted;
                mike = zulu.props;
                mike = mike.muted;
                if(!(tango !== mike)) { _fun00016_ip = 56; continue _fun00015 }
 27:
                tango = zulu.setState;
                mike = {};
                report = zulu.props;
                report = report.muted;
                mike['muted'] = report;
                mike = tango.bind(zulu)(mike);
 56:
                mike = entity.messageNotifications;
                entity = zulu.props;
                entity = entity.messageNotifications;
                if(!(mike !== entity)) { _fun00016_ip = 106; continue _fun00015 }
 77:
                mike = zulu.setState;
                entity = {};
                tango = zulu.props;
                tango = tango.messageNotifications;
                entity['messageNotifications'] = tango;
                entity = mike.bind(zulu)(entity);
 106:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'handleTypeChange';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            report = argFoo;
            tango = this;
            var _closure3_slot0 = tango;
            var _closure3_slot1 = report;
            zulu = tango.setState;
            mike = {};
            mike['messageNotifications'] = report;
            entity = function() {
                tango = _closure3_slot0;
                zulu = tango.updateSetting;
                mike = {};
                oscar = _closure3_slot1;
                mike['messageNotifications'] = oscar;
                golf = _closure1_slot0;
                report = _closure1_slot2;
                entity = 21;
                report = report[entity];
                entity = undefined;
                entity = golf.bind(entity)(report);
                report = entity.NotificationLabel;
                entity = report.notifications;
                entity = entity.bind(report)(oscar);
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            entity = zulu.bind(tango)(mike, entity);
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'isSelected';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            entity = this;
            entity = entity.props;
            mike = entity.messageNotifications;
            entity = argFoo;
            entity = mike === entity;
            return entity;
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'renderMuteSection';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                oscar = this;
                entity = oscar.props;
                offset = entity.channel;
                romeo = entity.muteConfig;
                entity = oscar.state;
                golf = entity.muted;
                backup = _closure1_slot0;
                foxtrot = _closure1_slot2;
                entity = 23;
                entity = foxtrot[entity];
                tango = undefined;
                options = backup.bind(tango)(entity);
                report = options.computeChannelName;
                record = _closure1_slot16;
                config = _closure1_slot14;
                sequence = true;
                papa = options;
                context = offset;
                control = papa[report](context, record, config, sequence, vacuum);
                zulu = _closure1_slot25;
                mike = _closure1_slot24;
                entity = {};
                verify = _closure1_slot23;
                update = 24;
                report = foxtrot[update];
                report = backup.bind(tango)(report);
                options = report.FormSection;
                report = {};
                output = _closure1_slot23;
                kilo = foxtrot[update];
                kilo = backup.bind(tango)(kilo);
                sizing = kilo.FormHint;
                kilo = {};
                result = 25;
                echo = foxtrot[result];
                echo = backup.bind(tango)(echo);
                vacuum = echo.intl;
                source = vacuum.string;
                echo = foxtrot[result];
                echo = backup.bind(tango)(echo);
                echo = echo.t;
                echo = echo.6yI+JS;
                echo = source.bind(vacuum)(echo);
                kilo['children'] = echo;
                kilo = output.bind(tango)(sizing, kilo);
                report['hint'] = kilo;
                kilo = _closure1_slot23;
                foxtrot = foxtrot[update];
                foxtrot = backup.bind(tango)(foxtrot);
                backup = foxtrot.FormRow;
                foxtrot = {};
                output = _closure1_slot0;
                sizing = _closure1_slot2;
                echo = sizing[result];
                echo = output.bind(tango)(echo);
                source = echo.intl;
                echo = source.format;
                sizing = sizing[result];
                sizing = output.bind(tango)(sizing);
                output = sizing.t;
                if(golf) { _fun00018_ip = 287; continue _fun00017 }
 265:
                result = output.byjuJi;
                sizing = {};
                sizing['name'] = control;
                sizing = echo.bind(source)(result, sizing);
                _fun00018_ip = 305; continue _fun00017;
 287:
                result = output.eC+9rq;
                output = {};
                output['name'] = control;
                sizing = echo.bind(source)(result, output);
 305:
                foxtrot['label'] = sizing;
                oscar = oscar.handleToggleMuteChannel;
                foxtrot['onPress'] = oscar;
                sizing = null;
                if(golf) { _fun00018_ip = 365; continue _fun00017 }
 324:
                echo = _closure1_slot23;
                result = _closure1_slot0;
                output = _closure1_slot2;
                output = output[update];
                output = result.bind(tango)(output);
                output = output.FormRow;
                result = output.Arrow;
                output = {};
                sizing = echo.bind(tango)(result, output);
 365:
                foxtrot['trailing'] = sizing;
                foxtrot = kilo.bind(tango)(backup, foxtrot);
                report['children'] = foxtrot;
                options = verify.bind(tango)(options, report);
                report = new Array(2);
                report[0] = options;
                oscar = null;
                if(!golf) { _fun00018_ip = 519; continue _fun00017 }
 399:
                verify = _closure1_slot23;
                options = _closure1_slot1;
                golf = _closure1_slot2;
                foxtrot = 26;
                golf = golf[foxtrot];
                options = options.bind(tango)(golf);
                golf = {};
                golf['muteConfig'] = romeo;
                romeo = offset.type;
                offset = _closure1_slot19;
                offset = offset.GUILD_CATEGORY;
                if(!(romeo !== offset)) { _fun00018_ip = 480; continue _fun00017 }
 449:
                romeo = _closure1_slot0;
                offset = _closure1_slot2;
                offset = offset[foxtrot];
                offset = romeo.bind(tango)(offset);
                offset = offset.MuteSettingType;
                offset = offset.CHANNEL;
                _fun00018_ip = 509; continue _fun00017;
 480:
                romeo = _closure1_slot0;
                yankee = _closure1_slot2;
                yankee = yankee[foxtrot];
                yankee = romeo.bind(tango)(yankee);
                yankee = yankee.MuteSettingType;
                offset = yankee.CATEGORY;
 509:
                golf['type'] = offset;
                oscar = verify.bind(tango)(options, golf);
 519:
                report[1] = oscar;
                entity['children'] = report;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            }
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'renderForumSettings';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                entity = this;
                mike = entity.props;
                zulu = mike.channel;
                var _closure3_slot0 = zulu;
                options = mike.newForumThreadsCreated;
                var _closure3_slot1 = options;
                golf = mike.guildMuted;
                entity = entity.state;
                oscar = entity.muted;
                tango = _closure1_slot23;
                romeo = _closure1_slot0;
                foxtrot = _closure1_slot2;
                entity = 24;
                entity = foxtrot[entity];
                zulu = undefined;
                entity = romeo.bind(zulu)(entity);
                mike = entity.FormSwitchRow;
                entity = {};
                verify = 25;
                offset = foxtrot[verify];
                offset = romeo.bind(zulu)(offset);
                yankee = offset.intl;
                offset = yankee.string;
                verify = foxtrot[verify];
                verify = romeo.bind(zulu)(verify);
                verify = verify.t;
                verify = verify.Rkgjpq;
                verify = offset.bind(yankee)(verify);
                entity['label'] = verify;
                entity['value'] = options;
                if(oscar) { _fun00020_ip = 144; continue _fun00019 }
 141:
                oscar = golf;
 144:
                entity['disabled'] = oscar;
                report = function() { // Original name: onValueChange
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 17;
                    mike = mike[entity];
                    entity = undefined;
                    report = zulu.bind(entity)(mike);
                    tango = report.setForumThreadsCreated;
                    zulu = _closure3_slot0;
                    mike = _closure3_slot1;
                    mike = !mike;
                    mike = tango.bind(report)(zulu, mike);
                    return entity;
                };
                entity['onValueChange'] = report;
                entity = tango.bind(zulu)(mike, entity);
                return entity;
            }
        };
        report['value'] = golf;
        entity[5] = report;
        report = {};
        golf = 'renderNotificationSettings';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                kilo = this;
                var _closure3_slot0 = kilo;
                entity = kilo.props;
                mike = entity.channel;
                romeo = entity.guildMuted;
                result = entity.guildMemberCount;
                sizing = entity.showVoiceActivityNotificationOptions;
                if(!sizing) { _fun00022_ip = 50; continue _fun00021 }
 40:
                entity = mike.isGuildVoice;
                sizing = entity.bind(mike)();
 50:
                entity = kilo.state;
                yankee = entity.muted;
                entity = mike.isGuildStageVoice;
                entity = entity.bind(mike)();
                report = _closure1_slot25;
                if(entity) { _fun00022_ip = 806; continue _fun00021 }
 84:
                zulu = _closure1_slot9;
                mike = {};
                entity = 'radiogroup';
                mike['accessibilityRole'] = entity;
                golf = _closure1_slot0;
                tango = _closure1_slot2;
                echo = 25;
                oscar = tango[echo];
                entity = undefined;
                oscar = golf.bind(entity)(oscar);
                verify = oscar.intl;
                options = verify.string;
                oscar = tango[echo];
                oscar = golf.bind(entity)(oscar);
                oscar = oscar.t;
                oscar = oscar.h850Sk;
                oscar = options.bind(verify)(oscar);
                mike['accessibilityLabel'] = oscar;
                options = _closure1_slot23;
                oscar = 24;
                tango = tango[oscar];
                tango = golf.bind(entity)(tango);
                golf = tango.FormRadioRow;
                tango = {};
                backup = _closure1_slot0;
                verify = _closure1_slot2;
                output = verify[echo];
                output = backup.bind(entity)(output);
                update = output.intl;
                output = update.string;
                verify = verify[echo];
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
                tango['label'] = verify;
                verify = yankee;
                if(yankee) { _fun00022_ip = 268; continue _fun00021 }
 265:
                verify = romeo;
 268:
                tango['disabled'] = verify;
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
                output = backup[echo];
                output = update.bind(entity)(output);
                result = output.intl;
                output = result.string;
                backup = backup[echo];
                backup = update.bind(entity)(backup);
                backup = backup.t;
                backup = backup.Dh5p5u;
                verify = output.bind(result)(backup);
 348:
                tango['subLabel'] = verify;
                verify = function() { // Original name: onPress
                    zulu = _closure3_slot0;
                    mike = zulu.handleTypeChange;
                    entity = _closure1_slot18;
                    entity = entity.ALL_MESSAGES;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                tango['onPress'] = verify;
                backup = kilo.isSelected;
                verify = _closure1_slot18;
                verify = verify.ALL_MESSAGES;
                verify = backup.bind(kilo)(verify);
                tango['selected'] = verify;
                verify = 'right';
                tango['align'] = verify;
                golf = options.bind(entity)(golf, tango);
                tango = new Array(5);
                tango[0] = golf;
                result = _closure1_slot23;
                options = _closure1_slot0;
                golf = _closure1_slot2;
                backup = golf[oscar];
                backup = options.bind(entity)(backup);
                output = backup.FormDivider;
                backup = {};
                backup = result.bind(entity)(output, backup);
                tango[1] = backup;
                backup = _closure1_slot23;
                golf = golf[oscar];
                golf = options.bind(entity)(golf);
                options = golf.FormRadioRow;
                golf = {};
                result = _closure1_slot0;
                output = _closure1_slot2;
                update = output[echo];
                update = result.bind(entity)(update);
                source = update.intl;
                update = source.format;
                output = output[echo];
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
                golf['label'] = sizing;
                sizing = yankee;
                if(yankee) { _fun00022_ip = 562; continue _fun00021 }
 559:
                sizing = romeo;
 562:
                golf['disabled'] = sizing;
                sizing = function() { // Original name: onPress
                    zulu = _closure3_slot0;
                    mike = zulu.handleTypeChange;
                    entity = _closure1_slot18;
                    entity = entity.ONLY_MENTIONS;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                golf['onPress'] = sizing;
                output = kilo.isSelected;
                sizing = _closure1_slot18;
                sizing = sizing.ONLY_MENTIONS;
                sizing = output.bind(kilo)(sizing);
                golf['selected'] = sizing;
                golf['align'] = verify;
                golf = backup.bind(entity)(options, golf);
                tango[2] = golf;
                sizing = _closure1_slot23;
                result = _closure1_slot0;
                backup = _closure1_slot2;
                golf = backup[oscar];
                golf = result.bind(entity)(golf);
                options = golf.FormDivider;
                golf = {};
                golf = sizing.bind(entity)(options, golf);
                tango[3] = golf;
                options = _closure1_slot23;
                oscar = backup[oscar];
                oscar = result.bind(entity)(oscar);
                golf = oscar.FormRadioRow;
                oscar = {};
                sizing = backup[echo];
                sizing = result.bind(entity)(sizing);
                output = sizing.intl;
                sizing = output.string;
                backup = backup[echo];
                backup = result.bind(entity)(backup);
                backup = backup.t;
                backup = backup.CtVGyc;
                backup = sizing.bind(output)(backup);
                oscar['label'] = backup;
                backup = yankee;
                if(yankee) { _fun00022_ip = 735; continue _fun00021 }
 732:
                backup = romeo;
 735:
                oscar['disabled'] = backup;
                backup = function() { // Original name: onPress
                    zulu = _closure3_slot0;
                    mike = zulu.handleTypeChange;
                    entity = _closure1_slot18;
                    entity = entity.NO_MESSAGES;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                oscar['onPress'] = backup;
                sizing = kilo.isSelected;
                backup = _closure1_slot18;
                backup = backup.NO_MESSAGES;
                backup = sizing.bind(kilo)(backup);
                oscar['selected'] = backup;
                oscar['align'] = verify;
                oscar = options.bind(entity)(golf, oscar);
                tango[4] = oscar;
                mike['children'] = tango;
                entity = report.bind(entity)(zulu, mike);
                _fun00022_ip = 1222; continue _fun00021;
 806:
                tango = _closure1_slot24;
                zulu = {};
                options = _closure1_slot23;
                result = _closure1_slot0;
                verify = _closure1_slot2;
                backup = 24;
                oscar = verify[backup];
                mike = undefined;
                oscar = result.bind(mike)(oscar);
                golf = oscar.FormRow;
                oscar = {};
                update = 25;
                sizing = verify[update];
                sizing = result.bind(mike)(sizing);
                output = sizing.intl;
                sizing = output.string;
                verify = verify[update];
                verify = result.bind(mike)(verify);
                verify = verify.t;
                verify = verify.BENn//;
                verify = sizing.bind(output)(verify);
                oscar['label'] = verify;
                verify = yankee;
                if(yankee) { _fun00022_ip = 908; continue _fun00021 }
 905:
                verify = romeo;
 908:
                oscar['disabled'] = verify;
                verify = function() { // Original name: onPress
                    zulu = _closure3_slot0;
                    mike = zulu.handleTypeChange;
                    entity = _closure1_slot18;
                    entity = entity.ONLY_MENTIONS;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                oscar['onPress'] = verify;
                result = _closure1_slot23;
                echo = _closure1_slot0;
                sizing = _closure1_slot2;
                verify = sizing[backup];
                verify = echo.bind(mike)(verify);
                verify = verify.FormRow;
                output = verify.Checkmark;
                verify = {};
                control = kilo.isSelected;
                source = _closure1_slot18;
                source = source.ONLY_MENTIONS;
                source = control.bind(kilo)(source);
                verify['selected'] = source;
                verify = result.bind(mike)(output, verify);
                oscar['trailing'] = verify;
                golf = options.bind(mike)(golf, oscar);
                oscar = new Array(3);
                oscar[0] = golf;
                verify = _closure1_slot23;
                golf = sizing[backup];
                golf = echo.bind(mike)(golf);
                options = golf.FormDivider;
                golf = {};
                golf = verify.bind(mike)(options, golf);
                oscar[1] = golf;
                verify = _closure1_slot23;
                golf = sizing[backup];
                golf = echo.bind(mike)(golf);
                options = golf.FormRow;
                golf = {};
                output = sizing[update];
                output = echo.bind(mike)(output);
                result = output.intl;
                output = result.string;
                sizing = sizing[update];
                sizing = echo.bind(mike)(sizing);
                sizing = sizing.t;
                sizing = sizing.CtVGyc;
                sizing = output.bind(result)(sizing);
                golf['label'] = sizing;
                if(yankee) { _fun00022_ip = 1115; continue _fun00021 }
 1112:
                yankee = romeo;
 1115:
                golf['disabled'] = yankee;
                offset = function() { // Original name: onPress
                    zulu = _closure3_slot0;
                    mike = zulu.handleTypeChange;
                    entity = _closure1_slot18;
                    entity = entity.NO_MESSAGES;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                golf['onPress'] = offset;
                romeo = _closure1_slot23;
                yankee = _closure1_slot0;
                offset = _closure1_slot2;
                offset = offset[backup];
                offset = yankee.bind(mike)(offset);
                offset = offset.FormRow;
                yankee = offset.Checkmark;
                offset = {};
                backup = kilo.isSelected;
                foxtrot = _closure1_slot18;
                foxtrot = foxtrot.NO_MESSAGES;
                foxtrot = backup.bind(kilo)(foxtrot);
                offset['selected'] = foxtrot;
                offset = romeo.bind(mike)(yankee, offset);
                golf['trailing'] = offset;
                golf = verify.bind(mike)(options, golf);
                oscar[2] = golf;
                zulu['children'] = oscar;
                entity = report.bind(mike)(tango, zulu);
 1222:
                return entity;
            }
        };
        report['value'] = golf;
        entity[6] = report;
        report = {};
        golf = 'render';
        report['key'] = golf;
        oscar = function() { // Original name: value
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                output = this;
                entity = output.props;
                mike = entity.guildMuted;
                result = entity.channel;
                zulu = entity.guildMessageNotifications;
                control = entity.showVoiceActivityNotificationOptions;
                entity = output.state;
                foxtrot = entity.messageNotifications;
                entity = _closure1_slot18;
                romeo = entity.NULL;
                if(!control) { _fun00024_ip = 70; continue _fun00023 }
 60:
                entity = result.isGuildVoice;
                control = entity.bind(result)();
 70:
                tango = _closure1_slot10;
                entity = result.type;
                report = undefined;
                verify = tango.bind(report)(entity);
                if(verify) { _fun00024_ip = 99; continue _fun00023 }
 89:
                entity = result.isForumLikeChannel;
                verify = entity.bind(result)();
 99:
                if(verify) { _fun00024_ip = 105; continue _fun00023 }
 102:
                verify = control;
 105:
                offset = null;
                tango = offset == result;
                entity = null;
                if(tango) { _fun00024_ip = 957; continue _fun00023 }
 119:
                if(mike) { _fun00024_ip = 250; continue _fun00023 }
 125:
                mike = _closure1_slot18;
                mike = mike.NO_MESSAGES;
                kilo = undefined;
                if(!(zulu === mike)) { _fun00024_ip = 354; continue _fun00023 }
 144:
                tango = _closure1_slot23;
                golf = _closure1_slot0;
                echo = _closure1_slot2;
                mike = 24;
                mike = echo[mike];
                mike = golf.bind(report)(mike);
                zulu = mike.FormHint;
                mike = {};
                oscar = 25;
                options = echo[oscar];
                options = golf.bind(report)(options);
                yankee = options.intl;
                options = yankee.format;
                oscar = echo[oscar];
                oscar = golf.bind(report)(oscar);
                oscar = oscar.t;
                golf = oscar.nRwUIC;
                oscar = {};
                echo = function(argFoo) { // Original name: notificationHook
                    report = _closure1_slot23;
                    zulu = _closure1_slot0;
                    tango = _closure1_slot2;
                    mike = 27;
                    mike = tango[mike];
                    tango = undefined;
                    mike = zulu.bind(tango)(mike);
                    zulu = mike.LegacyText;
                    mike = {};
                    entity = _closure1_slot26;
                    entity = entity.orangeText;
                    mike['style'] = entity;
                    entity = argFoo;
                    mike['children'] = entity;
                    entity = 'notif';
                    entity = report.bind(tango)(zulu, mike, entity);
                    return entity;
                };
                oscar['notificationHook'] = echo;
                oscar = options.bind(yankee)(golf, oscar);
                mike['children'] = oscar;
                kilo = tango.bind(report)(zulu, mike);
                _fun00024_ip = 354; continue _fun00023;
 250:
                tango = _closure1_slot23;
                golf = _closure1_slot0;
                echo = _closure1_slot2;
                mike = 24;
                mike = echo[mike];
                mike = golf.bind(report)(mike);
                zulu = mike.FormHint;
                mike = {};
                oscar = 25;
                options = echo[oscar];
                options = golf.bind(report)(options);
                yankee = options.intl;
                options = yankee.format;
                oscar = echo[oscar];
                oscar = golf.bind(report)(oscar);
                oscar = oscar.t;
                golf = oscar.O34r19;
                oscar = {};
                sizing = function(argFoo) { // Original name: mutedHook
                    report = _closure1_slot23;
                    zulu = _closure1_slot0;
                    tango = _closure1_slot2;
                    mike = 27;
                    mike = tango[mike];
                    tango = undefined;
                    mike = zulu.bind(tango)(mike);
                    zulu = mike.LegacyText;
                    mike = {};
                    entity = _closure1_slot26;
                    entity = entity.redText;
                    mike['style'] = entity;
                    entity = argFoo;
                    mike['children'] = entity;
                    entity = 'muted';
                    entity = report.bind(tango)(zulu, mike, entity);
                    return entity;
                };
                oscar['mutedHook'] = sizing;
                oscar = options.bind(yankee)(golf, oscar);
                mike['children'] = oscar;
                kilo = tango.bind(report)(zulu, mike);
 354:
                tango = _closure1_slot23;
                golf = _closure1_slot0;
                oscar = _closure1_slot2;
                mike = 28;
                mike = oscar[mike];
                mike = golf.bind(report)(mike);
                zulu = mike.RedesignCompat;
                mike = {};
                options = _closure1_slot25;
                yankee = 24;
                oscar = oscar[yankee];
                oscar = golf.bind(report)(oscar);
                golf = oscar.Form;
                oscar = {};
                sizing = null;
                if(!verify) { _fun00024_ip = 425; continue _fun00023 }
 415:
                verify = output.renderMuteSection;
                sizing = verify.bind(output)();
 425:
                verify = new Array(5);
                verify[0] = sizing;
                update = _closure1_slot23;
                echo = _closure1_slot0;
                sizing = _closure1_slot2;
                sizing = sizing[yankee];
                sizing = echo.bind(report)(sizing);
                echo = sizing.FormSection;
                sizing = {};
                source = null;
                if(!control) { _fun00024_ip = 555; continue _fun00023 }
 467:
                sequence = _closure1_slot23;
                papa = _closure1_slot0;
                target = _closure1_slot2;
                control = target[yankee];
                control = papa.bind(report)(control);
                vacuum = control.FormHint;
                control = {};
                config = 25;
                record = target[config];
                record = papa.bind(report)(record);
                context = record.intl;
                record = context.string;
                config = target[config];
                config = papa.bind(report)(config);
                config = config.t;
                config = config.ztcKQE;
                config = record.bind(context)(config);
                control['children'] = config;
                source = sequence.bind(report)(vacuum, control);
 555:
                sizing['hint'] = source;
                source = _closure1_slot22;
                source = source.ANDROID_NO_BORDER;
                sizing['titleStyleType'] = source;
                config = _closure1_slot0;
                source = _closure1_slot2;
                control = 25;
                vacuum = source[control];
                vacuum = config.bind(report)(vacuum);
                sequence = vacuum.intl;
                vacuum = sequence.string;
                source = source[control];
                source = config.bind(report)(source);
                source = source.t;
                source = source.h850Sk;
                source = vacuum.bind(sequence)(source);
                sizing['title'] = source;
                source = output.renderNotificationSettings;
                source = source.bind(output)();
                sizing['children'] = source;
                sizing = update.bind(report)(echo, sizing);
                verify[1] = sizing;
                sizing = result.isForumLikeChannel;
                result = sizing.bind(result)();
                sizing = null;
                if(!result) { _fun00024_ip = 789; continue _fun00023 }
 675:
                update = _closure1_slot23;
                config = _closure1_slot0;
                source = _closure1_slot2;
                result = source[yankee];
                result = config.bind(report)(result);
                echo = result.FormSection;
                result = {};
                vacuum = _closure1_slot22;
                vacuum = vacuum.ANDROID_NO_BORDER;
                result['titleStyleType'] = vacuum;
                vacuum = source[control];
                vacuum = config.bind(report)(vacuum);
                sequence = vacuum.intl;
                vacuum = sequence.string;
                source = source[control];
                source = config.bind(report)(source);
                source = source.t;
                source = source.bK11jI;
                source = vacuum.bind(sequence)(source);
                result['title'] = source;
                source = output.renderForumSettings;
                source = source.bind(output)();
                result['children'] = source;
                sizing = update.bind(report)(echo, result);
 789:
                verify[2] = sizing;
                verify[3] = kilo;
                offset = null;
                if(!(foxtrot !== romeo)) { _fun00024_ip = 933; continue _fun00023 }
 806:
                foxtrot = _closure1_slot23;
                source = _closure1_slot0;
                result = _closure1_slot2;
                yankee = result[yankee];
                yankee = source.bind(report)(yankee);
                romeo = yankee.FormSection;
                yankee = {};
                sizing = _closure1_slot23;
                backup = 29;
                backup = result[backup];
                backup = source.bind(report)(backup);
                kilo = backup.TableRow;
                backup = {};
                echo = result[control];
                echo = source.bind(report)(echo);
                update = echo.intl;
                echo = update.string;
                result = result[control];
                result = source.bind(report)(result);
                result = result.t;
                result = result.3PBFNz;
                result = echo.bind(update)(result);
                backup['label'] = result;
                output = output.handleResetNotification;
                backup['onPress'] = output;
                backup = sizing.bind(report)(kilo, backup);
                yankee['children'] = backup;
                offset = foxtrot.bind(report)(romeo, yankee);
 933:
                verify[4] = offset;
                oscar['children'] = verify;
                oscar = options.bind(report)(golf, oscar);
                mike['children'] = oscar;
                entity = tango.bind(report)(zulu, mike);
 957:
                return entity;
            }
        };
        report['value'] = oscar;
        entity[7] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    tango = tango.bind(entity)(golf);
    var _closure1_slot27 = tango;
    tango = 34;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'components_native/channel_settings/ChannelSettingsNotifications.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: ChannelSettingsNotificationsSplit
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            golf = argFoo;
            var _closure2_slot0 = golf;
            mike = _closure1_slot0;
            tango = _closure1_slot2;
            report = 30;
            report = tango[report];
            oscar = undefined;
            verify = mike.bind(oscar)(report);
            options = verify.useStateFromStores;
            offset = _closure1_slot12;
            report = new Array(1);
            report[0] = offset;
            entity = function() {
                zulu = _closure1_slot12;
                mike = zulu.getChannel;
                entity = _closure2_slot0;
                entity = entity.channelId;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            options = options.bind(verify)(report, entity);
            entity = 32;
            entity = tango[entity];
            tango = mike.bind(oscar)(entity);
            mike = tango.useShouldUseNewNotificationSystem;
            entity = 'ChannelSettingsNotificationsNative';
            mike = mike.bind(tango)(entity);
            entity = null;
            tango = entity == options;
            if(tango) { _fun00026_ip = 204; continue _fun00025 }
 102:
            if(!mike) { _fun00026_ip = 127; continue _fun00025 }
 105:
            report = _closure1_slot11;
            tango = report.has;
            mike = options.type;
            mike = tango.bind(report)(mike);
            if(mike) { _fun00026_ip = 155; continue _fun00025 }
 127:
            report = _closure1_slot23;
            tango = _closure1_slot30;
            mike = {};
            romeo = mike;
            yankee = golf;
            verify = copyDataProperties(romeo, yankee);
            mike = report.bind(oscar)(tango, mike);
            _fun00026_ip = 201; continue _fun00025;
 155:
            report = _closure1_slot23;
            tango = _closure1_slot1;
            verify = _closure1_slot2;
            zulu = 33;
            zulu = verify[zulu];
            tango = tango.bind(oscar)(zulu);
            zulu = {};
            zulu['channel'] = options;
            romeo = zulu;
            yankee = golf;
            golf = copyDataProperties(romeo, yankee);
            mike = report.bind(oscar)(tango, zulu);
 201:
            entity = mike;
 204:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();