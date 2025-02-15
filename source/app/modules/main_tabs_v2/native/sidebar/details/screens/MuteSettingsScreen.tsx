// app/modules/main_tabs_v2/native/sidebar/details/screens/MuteSettingsScreen.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    romeo = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = romeo;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: UnmuteOptions
        _fun120379: for(var _fun120379_ip = 0; ; ) switch(_fun120379_ip) {
 0:
            mike = argFoo;
            yankee = mike.channel;
            var _closure2_slot0 = yankee;
            verify = mike.muteConfig;
            golf = mike.navigation;
            var _closure2_slot1 = golf;
            mike = _closure1_slot13;
            tango = undefined;
            report = mike.bind(tango)();
            oscar = _closure1_slot3;
            zulu = oscar.useCallback;
            options = yankee.guild_id;
            mike = new Array(3);
            mike[0] = options;
            options = yankee.id;
            mike[1] = options;
            mike[2] = golf;
            entity = function() {
                zulu = _closure2_slot1;
                entity = zulu.goBack;
                entity = entity.bind(zulu)();
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 13;
                zulu = zulu[entity];
                entity = undefined;
                report = tango.bind(entity)(zulu);
                tango = report.handleUnmutePress;
                mike = _closure2_slot0;
                zulu = mike.id;
                mike = mike.guild_id;
                mike = tango.bind(report)(zulu, mike);
                return entity;
            };
            backup = zulu.bind(oscar)(entity, mike);
            zulu = _closure1_slot11;
            mike = _closure1_slot4;
            entity = {};
            report = report.options;
            entity['style'] = report;
            romeo = _closure1_slot10;
            vacuum = _closure1_slot0;
            oscar = _closure1_slot2;
            report = 14;
            report = oscar[report];
            report = vacuum.bind(tango)(report);
            options = report.TableRow;
            report = {};
            output = _closure1_slot10;
            golf = _closure1_slot1;
            foxtrot = 15;
            foxtrot = oscar[foxtrot];
            sizing = golf.bind(tango)(foxtrot);
            kilo = {};
            foxtrot = true;
            kilo['disableColor'] = foxtrot;
            result = 16;
            result = oscar[result];
            result = golf.bind(tango)(result);
            kilo['source'] = result;
            kilo = output.bind(tango)(sizing, kilo);
            report['icon'] = kilo;
            output = _closure1_slot10;
            kilo = 17;
            kilo = oscar[kilo];
            kilo = vacuum.bind(tango)(kilo);
            sizing = kilo.Text;
            kilo = {'variant': 'text-md/semibold', 'color': 'header-primary'};
            result = 18;
            echo = oscar[result];
            echo = vacuum.bind(tango)(echo);
            source = echo.intl;
            update = source.format;
            result = oscar[result];
            result = vacuum.bind(tango)(result);
            result = result.t;
            echo = result.eC+9rq;
            result = {};
            control = 19;
            control = oscar[control];
            config = vacuum.bind(tango)(control);
            sequence = config.computeChannelName;
            papa = _closure1_slot8;
            context = _closure1_slot7;
            status = config;
            target = yankee;
            record = true;
            control = status[sequence](target, papa, context, record, config);
            result['name'] = control;
            result = update.bind(source)(echo, result);
            kilo['children'] = result;
            kilo = output.bind(tango)(sizing, kilo);
            report['label'] = kilo;
            report['onPress'] = backup;
            report['start'] = foxtrot;
            report['end'] = foxtrot;
            options = romeo.bind(tango)(options, report);
            report = new Array(2);
            report[0] = options;
            options = _closure1_slot10;
            romeo = 20;
            oscar = oscar[romeo];
            golf = golf.bind(tango)(oscar);
            oscar = {};
            oscar['muteConfig'] = verify;
            verify = yankee.isPrivate;
            verify = verify.bind(yankee)();
            yankee = _closure1_slot0;
            offset = _closure1_slot2;
            offset = offset[romeo];
            offset = yankee.bind(tango)(offset);
            offset = offset.MuteSettingType;
            if(verify) { _fun120379_ip = 431; continue _fun120379 }
 423:
            verify = offset.CHANNEL;
            _fun120379_ip = 437; continue _fun120379;
 431:
            verify = offset.DM;
 437:
            oscar['type'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo) { // Original name: MuteOptions
        entity = argFoo;
        offset = entity.channel;
        var _closure2_slot0 = offset;
        mike = entity.navigation;
        var _closure2_slot1 = mike;
        zulu = _closure1_slot13;
        tango = undefined;
        oscar = zulu.bind(tango)();
        verify = _closure1_slot3;
        options = verify.useMemo;
        golf = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 13;
            mike = mike[entity];
            entity = undefined;
            mike = zulu.bind(entity)(mike);
            entity = mike.getMuteOptions;
            entity = entity.bind(mike)();
            return entity;
        };
        zulu = new Array(0);
        golf = options.bind(verify)(golf, zulu);
        var _closure2_slot2 = golf;
        verify = _closure1_slot3;
        options = verify.useCallback;
        zulu = new Array(2);
        zulu[0] = offset;
        zulu[1] = mike;
        mike = function(argFoo) {
            mike = _closure2_slot1;
            entity = mike.goBack;
            entity = entity.bind(mike)();
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 13;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.handleMuteSettingPress;
            mike = {};
            report = _closure2_slot0;
            oscar = report.id;
            mike['channelId'] = oscar;
            report = report.guild_id;
            mike['guildId'] = report;
            report = function(argFoo) { // Original name: onOptionPress
                _fun120384: for(var _fun120384_ip = 0; ; ) switch(_fun120384_ip) {
 0:
                    entity = argFoo;
                    report = _closure2_slot0;
                    oscar = entity.muted;
                    golf = entity.mute_config;
                    entity = undefined;
                    if(!(golf === entity)) { _fun120384_ip = 30; continue _fun120384 }
 28:
                    golf = null;
 30:
                    if(!(entity !== oscar)) { _fun120384_ip = 221; continue _fun120384 }
 37:
                    mike = report.isThread;
                    options = mike.bind(report)();
                    zulu = _closure1_slot1;
                    tango = _closure1_slot2;
                    if(options) { _fun120384_ip = 173; continue _fun120384 }
 61:
                    options = 11;
                    options = tango[options];
                    romeo = zulu.bind(entity)(options);
                    yankee = romeo.updateChannelOverrideSettings;
                    options = report.getGuildId;
                    offset = options.bind(report)();
                    verify = report.id;
                    options = {};
                    options['muted'] = oscar;
                    foxtrot = null;
                    backup = foxtrot != golf;
                    if(!backup) { _fun120384_ip = 113; continue _fun120384 }
 110:
                    foxtrot = golf;
 113:
                    options['mute_config'] = foxtrot;
                    foxtrot = _closure1_slot0;
                    backup = _closure1_slot2;
                    mike = 12;
                    mike = backup[mike];
                    mike = foxtrot.bind(entity)(mike);
                    foxtrot = mike.NotificationLabel;
                    mike = foxtrot.muted;
                    kilo = mike.bind(foxtrot)(oscar);
                    echo = romeo;
                    result = offset;
                    output = verify;
                    sizing = options;
                    mike = echo[yankee](result, output, sizing, kilo, backup);
                    _fun120384_ip = 221; continue _fun120384;
 173:
                    mike = 10;
                    mike = tango[mike];
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.setNotificationSettings;
                    mike = {};
                    mike['muted'] = oscar;
                    oscar = null;
                    options = oscar != golf;
                    if(!options) { _fun120384_ip = 210; continue _fun120384 }
 207:
                    oscar = golf;
 210:
                    mike['mute_config'] = oscar;
                    mike = zulu.bind(tango)(report, mike);
 221:
                    return entity;
                }
            };
            mike['onOptionPress'] = report;
            report = argFoo;
            mike['muteDurationSeconds'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        mike = options.bind(verify)(mike, zulu);
        var _closure2_slot3 = mike;
        zulu = _closure1_slot10;
        mike = _closure1_slot4;
        entity = {};
        oscar = oscar.options;
        entity['style'] = oscar;
        oscar = golf.map;
        report = function(argFoo, argBar) {
            entity = argFoo;
            golf = argBar;
            report = entity.label;
            entity = entity.duration;
            var _closure3_slot0 = entity;
            tango = _closure1_slot10;
            mike = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 14;
            entity = zulu[entity];
            zulu = undefined;
            entity = mike.bind(zulu)(entity);
            mike = entity.TableRow;
            entity = {};
            entity['label'] = report;
            oscar = function() { // Original name: onPress
                zulu = _closure2_slot3;
                mike = _closure3_slot0;
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                return entity;
            };
            entity['onPress'] = oscar;
            oscar = 0;
            oscar = oscar === golf;
            entity['start'] = oscar;
            oscar = _closure2_slot2;
            options = oscar.length;
            oscar = 1;
            oscar = options - oscar;
            oscar = golf === oscar;
            entity['end'] = oscar;
            entity = tango.bind(zulu)(mike, entity, report);
            return entity;
        };
        report = oscar.bind(golf)(report);
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo) { // Original name: NotificationSettingsButton
        _fun120387: for(var _fun120387_ip = 0; ; ) switch(_fun120387_ip) {
 0:
            mike = argFoo;
            zulu = mike.channel;
            var _closure2_slot0 = zulu;
            kilo = mike.isMuted;
            backup = mike.isGuildMuted;
            golf = mike.messageNotifications;
            var _closure2_slot1 = golf;
            foxtrot = mike.guildMessageNotifications;
            mike = _closure1_slot13;
            tango = undefined;
            offset = mike.bind(tango)();
            echo = _closure1_slot0;
            source = _closure1_slot2;
            mike = 21;
            mike = source[mike];
            report = echo.bind(tango)(mike);
            mike = report.useNavigation;
            mike = mike.bind(report)();
            var _closure2_slot2 = mike;
            options = _closure1_slot3;
            oscar = options.useCallback;
            report = new Array(2);
            report[0] = zulu;
            report[1] = mike;
            mike = function() {
                _fun120388: for(var _fun120388_ip = 0; ; ) switch(_fun120388_ip) {
 0:
                    zulu = _closure2_slot0;
                    mike = zulu.isThread;
                    zulu = mike.bind(zulu)();
                    if(zulu) { _fun120388_ip = 50; continue _fun120388 }
 23:
                    report = _closure2_slot2;
                    tango = report.navigate;
                    zulu = _closure1_slot9;
                    zulu = zulu.NOTIFICATIONS;
                    zulu = tango.bind(report)(zulu);
                    _fun120388_ip = 87; continue _fun120388;
 50:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 22;
                    zulu = zulu[mike];
                    mike = undefined;
                    zulu = tango.bind(mike)(zulu);
                    mike = zulu.showThreadNotificationsBottomSheet;
                    entity = _closure2_slot0;
                    entity = mike.bind(zulu)(entity);
 87:
                    entity = undefined;
                    return entity;
                }
            };
            options = oscar.bind(options)(mike, report);
            oscar = _closure1_slot3;
            report = oscar.useMemo;
            mike = new Array(1);
            mike[0] = golf;
            entity = function() {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 13;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.getMessageNotificationsText;
                entity = _closure2_slot1;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            vacuum = report.bind(oscar)(entity, mike);
            entity = 23;
            entity = source[entity];
            mike = echo.bind(tango)(entity);
            entity = mike.useVoiceActivityNotificationSettingsExperiment;
            romeo = entity.bind(mike)(zulu);
            zulu = _closure1_slot11;
            mike = _closure1_slot12;
            entity = {};
            golf = _closure1_slot10;
            result = 14;
            report = source[result];
            report = echo.bind(tango)(report);
            oscar = report.TableRow;
            report = {};
            yankee = 18;
            sizing = source[yankee];
            sizing = echo.bind(tango)(sizing);
            output = sizing.intl;
            sizing = output.string;
            yankee = source[yankee];
            yankee = echo.bind(tango)(yankee);
            yankee = yankee.t;
            yankee = yankee.h850Sk;
            yankee = sizing.bind(output)(yankee);
            report['label'] = yankee;
            report['onPress'] = options;
            sizing = _closure1_slot11;
            yankee = _closure1_slot4;
            options = {};
            output = offset.trailing;
            options['style'] = output;
            control = _closure1_slot10;
            output = 17;
            output = source[output];
            output = echo.bind(tango)(output);
            update = output.Text;
            output = {'variant': 'text-md/medium', 'color': 'text-muted'};
            output['children'] = vacuum;
            update = control.bind(tango)(update, output);
            output = new Array(2);
            output[0] = update;
            update = _closure1_slot10;
            result = source[result];
            result = echo.bind(tango)(result);
            result = result.TableRow;
            echo = result.Arrow;
            result = {};
            result = update.bind(tango)(echo, result);
            output[1] = result;
            options['children'] = output;
            options = sizing.bind(tango)(yankee, options);
            report['trailing'] = options;
            options = kilo;
            if(options) { _fun120387_ip = 395; continue _fun120387 }
 392:
            options = backup;
 395:
            report['disabled'] = options;
            options = true;
            report['start'] = options;
            report['end'] = options;
            oscar = golf.bind(tango)(oscar, report);
            report = new Array(2);
            report[0] = oscar;
            options = _closure1_slot10;
            golf = _closure1_slot4;
            oscar = {};
            offset = offset.hint;
            oscar['style'] = offset;
            yankee = _closure1_slot10;
            offset = _closure1_slot0;
            sizing = _closure1_slot2;
            verify = 24;
            verify = sizing[verify];
            verify = offset.bind(tango)(verify);
            offset = verify.MuteSettingsHint;
            verify = {};
            verify['isMuted'] = kilo;
            verify['isGuildMuted'] = backup;
            verify['guildMessageNotifications'] = foxtrot;
            verify['showVoiceActivityNotificationOptions'] = romeo;
            verify = yankee.bind(tango)(offset, verify);
            oscar['children'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    golf = tango.bind(entity)(golf);
    var _closure1_slot3 = golf;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.View;
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
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ChannelSettingsSections;
    var _closure1_slot9 = tango;
    tango = 7;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.jsx;
    var _closure1_slot10 = options;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.jsxs;
    var _closure1_slot11 = options;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Fragment;
    var _closure1_slot12 = tango;
    tango = 8;
    tango = oscar[tango];
    verify = report.bind(entity)(tango);
    options = verify.createStyles;
    tango = {};
    offset = {'flex': 1, 'backgroundColor': null, 'padding': 16};
    yankee = 9;
    yankee = oscar[yankee];
    yankee = romeo.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.BG_BASE_SECONDARY;
    offset['backgroundColor'] = yankee;
    yankee = 16;
    tango['container'] = offset;
    offset = {'flexDirection': 'column', 'alignItems': 'center'};
    tango['headerIOS'] = offset;
    offset = {'flexDirection': 'column', 'alignItems': 'flex-start'};
    tango['headerAndroid'] = offset;
    offset = {};
    offset['marginBottom'] = yankee;
    tango['options'] = offset;
    offset = {'flexDirection': 'row', 'alignItems': 'center'};
    tango['trailing'] = offset;
    offset = {'marginTop': 8, 'paddingHorizontal': 12};
    tango['hint'] = offset;
    tango = options.bind(verify)(tango);
    var _closure1_slot13 = tango;
    tango = golf.memo;
    mike = function() {
        _fun120390: for(var _fun120390_ip = 0; ; ) switch(_fun120390_ip) {
 0:
            mike = _closure1_slot13;
            report = undefined;
            oscar = mike.bind(report)();
            var _closure2_slot0 = oscar;
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            mike = 21;
            mike = zulu[mike];
            golf = tango.bind(report)(mike);
            mike = golf.useNavigation;
            sizing = mike.bind(golf)();
            var _closure2_slot1 = sizing;
            mike = 25;
            mike = zulu[mike];
            golf = tango.bind(report)(mike);
            mike = golf.useRoute;
            mike = mike.bind(golf)();
            mike = mike.params;
            verify = mike.channelId;
            var _closure2_slot2 = verify;
            mike = 26;
            golf = zulu[mike];
            romeo = tango.bind(report)(golf);
            yankee = romeo.useStateFromStores;
            golf = _closure1_slot5;
            offset = new Array(1);
            offset[0] = golf;
            golf = function() {
                zulu = _closure1_slot5;
                mike = zulu.getChannel;
                entity = _closure2_slot2;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            foxtrot = yankee.bind(romeo)(offset, golf);
            var _closure2_slot3 = foxtrot;
            mike = zulu[mike];
            offset = tango.bind(report)(mike);
            golf = offset.useStateFromStores;
            mike = _closure1_slot6;
            tango = new Array(1);
            tango[0] = mike;
            mike = function() {
                _fun120392: for(var _fun120392_ip = 0; ; ) switch(_fun120392_ip) {
 0:
                    zulu = _closure1_slot6;
                    mike = zulu.getGuild;
                    report = _closure2_slot3;
                    entity = null;
                    report = entity == report;
                    entity = undefined;
                    if(report) { _fun120392_ip = 39; continue _fun120392 }
 30:
                    tango = _closure2_slot3;
                    entity = tango.guild_id;
 39:
                    entity = mike.bind(zulu)(entity);
                    return entity;
                }
            };
            mike = golf.bind(offset)(tango, mike);
            var _closure2_slot4 = mike;
            yankee = _closure1_slot3;
            offset = yankee.useMemo;
            golf = new Array(2);
            golf[0] = foxtrot;
            golf[1] = mike;
            tango = function() {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 13;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.getMuteSettingLabel;
                mike = _closure2_slot3;
                entity = _closure2_slot4;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            tango = offset.bind(yankee)(tango, golf);
            var _closure2_slot5 = tango;
            offset = _closure1_slot3;
            golf = offset.useMemo;
            tango = new Array(2);
            tango[0] = foxtrot;
            tango[1] = mike;
            mike = function() {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 13;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.getMuteSettingSublabel;
                mike = _closure2_slot3;
                entity = _closure2_slot4;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            mike = golf.bind(offset)(mike, tango);
            var _closure2_slot6 = mike;
            golf = _closure1_slot3;
            tango = golf.useLayoutEffect;
            mike = function() {
                zulu = _closure2_slot1;
                mike = zulu.setOptions;
                entity = {};
                foxtrot = _closure2_slot5;
                yankee = _closure2_slot6;
                tango = global;
                tango = tango.HermesInternal;
                golf = tango.concat;
                backup = '';
                romeo = ' (';
                offset = ')';
                tango = backup[golf](foxtrot, romeo, yankee, offset, verify);
                entity['title'] = tango;
                tango = function() { // Original name: headerTitle
                    _fun120396: for(var _fun120396_ip = 0; ; ) switch(_fun120396_ip) {
 0:
                        tango = _closure1_slot11;
                        zulu = _closure1_slot4;
                        mike = {};
                        oscar = _closure1_slot0;
                        report = _closure1_slot2;
                        entity = 27;
                        report = report[entity];
                        entity = undefined;
                        oscar = oscar.bind(entity)(report);
                        report = oscar.isAndroid;
                        report = report.bind(oscar)();
                        oscar = _closure2_slot0;
                        if(report) { _fun120396_ip = 62; continue _fun120396 }
 54:
                        report = oscar.headerIOS;
                        _fun120396_ip = 68; continue _fun120396;
 62:
                        report = oscar.headerAndroid;
 68:
                        mike['style'] = report;
                        romeo = _closure1_slot10;
                        golf = _closure1_slot0;
                        offset = _closure1_slot2;
                        oscar = 28;
                        report = offset[oscar];
                        report = golf.bind(entity)(report);
                        yankee = report.GenericHeaderTitle;
                        report = {};
                        foxtrot = _closure2_slot5;
                        report['title'] = foxtrot;
                        foxtrot = 'header-primary';
                        report['color'] = foxtrot;
                        yankee = romeo.bind(entity)(yankee, report);
                        report = new Array(2);
                        report[0] = yankee;
                        options = _closure1_slot10;
                        oscar = offset[oscar];
                        oscar = golf.bind(entity)(oscar);
                        golf = oscar.GenericSubHeaderTitle;
                        oscar = {};
                        verify = _closure2_slot6;
                        oscar['subtitle'] = verify;
                        verify = 'header-secondary';
                        oscar['color'] = verify;
                        oscar = options.bind(entity)(golf, oscar);
                        report[1] = oscar;
                        mike['children'] = report;
                        entity = tango.bind(entity)(zulu, mike);
                        return entity;
                    }
                };
                entity['headerTitle'] = tango;
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            mike = tango.bind(golf)(mike);
            golf = _closure1_slot3;
            tango = golf.useMemo;
            mike = new Array(1);
            mike[0] = verify;
            entity = function() {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 13;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.getMuteSettings;
                entity = _closure2_slot2;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity = tango.bind(golf)(entity, mike);
            output = entity.muteConfig;
            romeo = entity.messageNotifications;
            yankee = entity.guildMessageNotifications;
            kilo = entity.muted;
            backup = entity.guildMuted;
            mike = _closure1_slot1;
            entity = 29;
            entity = zulu[entity];
            entity = mike.bind(report)(entity);
            entity = entity.bind(report)();
            verify = entity.bottom;
            entity = null;
            mike = entity == foxtrot;
            if(mike) { _fun120390_ip = 545; continue _fun120390 }
 374:
            tango = _closure1_slot11;
            zulu = _closure1_slot4;
            mike = {};
            golf = oscar.container;
            oscar = new Array(2);
            oscar[0] = golf;
            golf = {};
            golf['marginBottom'] = verify;
            oscar[1] = golf;
            mike['style'] = oscar;
            offset = _closure1_slot10;
            if(kilo) { _fun120390_ip = 441; continue _fun120390 }
 418:
            golf = _closure1_slot15;
            oscar = {};
            oscar['channel'] = foxtrot;
            oscar['navigation'] = sizing;
            golf = offset.bind(report)(golf, oscar);
            _fun120390_ip = 467; continue _fun120390;
 441:
            verify = _closure1_slot14;
            oscar = {};
            oscar['channel'] = foxtrot;
            oscar['muteConfig'] = output;
            oscar['navigation'] = sizing;
            golf = offset.bind(report)(verify, oscar);
 467:
            oscar = new Array(2);
            oscar[0] = golf;
            golf = foxtrot.isPrivate;
            golf = golf.bind(foxtrot)();
            golf = !golf;
            if(!golf) { _fun120390_ip = 531; continue _fun120390 }
 491:
            offset = _closure1_slot10;
            verify = _closure1_slot16;
            options = {};
            options['isMuted'] = kilo;
            options['isGuildMuted'] = backup;
            options['channel'] = foxtrot;
            options['messageNotifications'] = romeo;
            options['guildMessageNotifications'] = yankee;
            golf = offset.bind(report)(verify, options);
 531:
            oscar[1] = golf;
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 545:
            return entity;
        }
    };
    mike = tango.bind(golf)(mike);
    tango = 30;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/sidebar/details/screens/MuteSettingsScreen.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();