// app/modules/chat_input/native/ChatInputAppDM.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    yankee = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscar;
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
    tango = tango.bind(entity)(golf);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.getSection;
    var _closure1_slot6 = tango;
    romeo = 4;
    tango = oscar[romeo];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    foxtrot = tango.CHAT_INPUT_ACTION_BUTTON_SIZE;
    tango = tango.KeyboardTypes;
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.AnalyticEvents;
    var _closure1_slot9 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.AppLauncherRouteName;
    var _closure1_slot10 = tango;
    tango = 8;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot11 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot12 = tango;
    tango = 9;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {'flexDirection': 'row', 'alignItems': 'center'};
    tango['container'] = verify;
    verify = {};
    offset = 10;
    backup = oscar[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.CARD_SECONDARY_BG;
    verify['backgroundColor'] = backup;
    tango['themedChatInput'] = verify;
    verify = {'borderRadius': null, 'backgroundColor': null, 'height': 24, 'width': 24, 'padding': 4, 'alignContent': 'center'};
    backup = oscar[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.radii;
    backup = backup.round;
    verify['borderRadius'] = backup;
    backup = oscar[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.STATUS_POSITIVE;
    verify['backgroundColor'] = backup;
    tango['unmutedNotificationContainer'] = verify;
    verify = {'width': 16, 'height': 16};
    tango['unmutedNotification'] = verify;
    verify = {};
    backup = oscar[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.radii;
    backup = backup.round;
    verify['borderRadius'] = backup;
    verify['height'] = foxtrot;
    verify['width'] = foxtrot;
    verify['marginHorizontal'] = romeo;
    offset = oscar[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.REDESIGN_BUTTON_TERTIARY_BACKGROUND;
    verify['backgroundColor'] = offset;
    tango['loadingButton'] = verify;
    verify = {'flexGrow': 1, 'alignSelf': 'stretch'};
    tango['loadingLaunchButton'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot13 = tango;
    tango = function(argFoo) { // Original name: ChatInputAppDMLaunchButton
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            sizing = entity.context;
            golf = entity.primaryEntryPointCommand;
            kilo = entity.application;
            romeo = entity.onOpenButtonPress;
            tango = _closure1_slot1;
            oscar = _closure1_slot2;
            zulu = 13;
            mike = oscar[zulu];
            report = undefined;
            tango = tango.bind(report)(mike);
            mike = {};
            mike['context'] = sizing;
            mike['primaryEntryPointCommand'] = golf;
            mike['application'] = kilo;
            tango = tango.bind(report)(mike);
            options = tango.isExecutingLaunchInteraction;
            golf = tango.buttonText;
            mike = tango.hasActiveMatchingEmbeddedActivity;
            backup = tango.isEmbeddedApp;
            foxtrot = tango.currentEmbeddedActivity;
            yankee = tango.channelRecipientUserId;
            offset = tango.setIsExecutingLaunchInteraction;
            verify = tango.analyticsLocations;
            tango = _closure1_slot0;
            zulu = oscar[zulu];
            oscar = tango.bind(report)(zulu);
            tango = oscar.useOnEntryPointCommandButtonPress;
            zulu = {};
            zulu['context'] = sizing;
            zulu['application'] = kilo;
            zulu['isEmbeddedApp'] = backup;
            zulu['hasActiveMatchingEmbeddedActivity'] = mike;
            zulu['currentEmbeddedActivity'] = foxtrot;
            zulu['onOpenButtonPress'] = romeo;
            zulu['channelRecipientUserId'] = yankee;
            zulu['setIsExecutingLaunchInteraction'] = offset;
            zulu['analyticsLocations'] = verify;
            oscar = tango.bind(oscar)(zulu);
            tango = 'primary';
            if(!mike) { _fun00002_ip = 200; continue _fun00001 }
 194:
            tango = 'destructive';
 200:
            zulu = _closure1_slot11;
            mike = _closure1_slot0;
            verify = _closure1_slot2;
            entity = 14;
            entity = verify[entity];
            entity = mike.bind(report)(entity);
            mike = entity.Button;
            entity = {};
            entity['variant'] = tango;
            verify = 'md';
            entity['size'] = verify;
            entity['loading'] = options;
            entity['text'] = golf;
            entity['onPress'] = oscar;
            oscar = true;
            entity['grow'] = oscar;
            entity = zulu.bind(report)(mike, entity, tango);
            return entity;
        }
    };
    var _closure1_slot14 = tango;
    tango = 34;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/chat_input/native/ChatInputAppDM.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo, argBar) { // Original name: useChatInputAppDMUIEnabled
        zulu = argFoo;
        oscar = argBar;
        var _closure2_slot0 = zulu;
        var _closure2_slot1 = oscar;
        options = _closure1_slot0;
        verify = _closure1_slot2;
        entity = 11;
        entity = verify[entity];
        golf = undefined;
        offset = options.bind(golf)(entity);
        report = offset.useShowAppDMsUI;
        entity = zulu.id;
        entity = report.bind(offset)(entity);
        var _closure2_slot2 = entity;
        report = 12;
        report = verify[report];
        verify = options.bind(golf)(report);
        options = verify.useStateFromStores;
        report = _closure1_slot5;
        golf = new Array(1);
        golf[0] = report;
        offset = zulu.id;
        report = new Array(2);
        report[0] = offset;
        report[1] = entity;
        entity = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                mike = _closure1_slot5;
                entity = mike.appDMChannelsWithFailedLoads;
                tango = entity.bind(mike)();
                zulu = tango.has;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = zulu.bind(tango)(entity);
                entity = !entity;
                if(!entity) { _fun00004_ip = 51; continue _fun00003 }
 47:
                entity = _closure2_slot2;
 51:
                return entity;
            }
        };
        entity = options.bind(verify)(golf, entity, report);
        report = _closure1_slot3;
        tango = report.useEffect;
        golf = zulu.id;
        zulu = new Array(2);
        zulu[0] = golf;
        zulu[1] = oscar;
        mike = function() {
            zulu = _closure2_slot1;
            entity = undefined;
            mike = true;
            mike = zulu.bind(entity)(mike);
            return entity;
        };
        mike = tango.bind(report)(mike, zulu);
        return entity;
    };
    zulu['useChatInputAppDMUIEnabled'] = tango;
    mike = function(argFoo) {
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            echo = entity.context;
            var _closure2_slot0 = echo;
            control = entity.chatInputRef;
            var _closure2_slot1 = control;
            mike = entity.setShowAppLaunchButton;
            var _closure2_slot2 = mike;
            entity = _closure1_slot13;
            tango = undefined;
            offset = entity.bind(tango)();
            var _closure2_slot3 = offset;
            zulu = _closure1_slot0;
            kilo = _closure1_slot2;
            entity = 15;
            entity = kilo[entity];
            golf = zulu.bind(tango)(entity);
            report = golf.useClientThemesOverride;
            entity = offset.themedChatInput;
            backup = report.bind(golf)(entity);
            entity = 12;
            entity = kilo[entity];
            golf = zulu.bind(tango)(entity);
            report = golf.useStateFromStores;
            entity = _closure1_slot7;
            zulu = new Array(1);
            zulu[0] = entity;
            entity = function() {
                tango = _closure1_slot7;
                zulu = tango.isChannelMuted;
                entity = _closure2_slot0;
                entity = entity.channel;
                mike = entity.id;
                entity = null;
                entity = zulu.bind(tango)(entity, mike);
                return entity;
            };
            yankee = report.bind(golf)(zulu, entity);
            var _closure2_slot4 = yankee;
            zulu = _closure1_slot1;
            entity = 16;
            entity = kilo[entity];
            report = zulu.bind(tango)(entity);
            entity = {};
            entity['context'] = echo;
            report = report.bind(tango)(entity);
            output = report.application;
            var _closure2_slot5 = output;
            entity = report.isInitialLoading;
            result = report.primaryEntryPointCommand;
            foxtrot = report.isProfileFetching;
            verify = report.wasProfileFetching;
            options = report.applicationId;
            golf = report.channelId;
            report = report.commands;
            source = _closure1_slot3;
            update = source.useCallback;
            sizing = new Array(4);
            sizing[0] = output;
            sizing[1] = echo;
            sizing[2] = control;
            sizing[3] = mike;
            mike = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    mike = _closure2_slot5;
                    entity = null;
                    if(!(entity != mike)) { _fun00008_ip = 288; continue _fun00007 }
 18:
                    zulu = _closure1_slot6;
                    mike = _closure2_slot0;
                    options = _closure2_slot5;
                    entity = options.id;
                    golf = undefined;
                    offset = zulu.bind(golf)(mike, entity);
                    mike = _closure2_slot2;
                    entity = false;
                    entity = mike.bind(golf)(entity);
                    entity = _closure2_slot1;
                    zulu = entity.current;
                    mike = zulu.openCustomKeyboard;
                    entity = {};
                    tango = _closure1_slot8;
                    tango = tango.APP_LAUNCHER;
                    entity['keyboardType'] = tango;
                    tango = {};
                    yankee = _closure1_slot10;
                    yankee = yankee.APPLICATION_VIEW;
                    tango['initialRouteName'] = yankee;
                    yankee = true;
                    tango['initiallyExpanded'] = yankee;
                    tango['application'] = options;
                    options = offset.isGuildInstalled;
                    options = !options;
                    if(!options) { _fun00008_ip = 138; continue _fun00007 }
 129:
                    offset = offset.isUserInstalled;
                    options = !offset;
 138:
                    tango['installOnDemand'] = options;
                    options = function() { // Original name: onPressBack
                        zulu = _closure2_slot2;
                        entity = undefined;
                        mike = true;
                        mike = zulu.bind(entity)(mike);
                        return entity;
                    };
                    tango['onPressBack'] = options;
                    oscar = function() { // Original name: onCommandExecuted
                        zulu = _closure2_slot2;
                        entity = undefined;
                        mike = true;
                        mike = zulu.bind(entity)(mike);
                        return entity;
                    };
                    tango['onCommandExecuted'] = oscar;
                    entity['context'] = tango;
                    entity = mike.bind(zulu)(entity);
                    oscar = _closure1_slot0;
                    options = _closure1_slot2;
                    entity = 17;
                    entity = options[entity];
                    tango = oscar.bind(golf)(entity);
                    zulu = tango.trackWithMetadata;
                    entity = _closure1_slot9;
                    mike = entity.APPLICATION_COMMAND_SECTION_SELECTED;
                    entity = {};
                    verify = _closure2_slot5;
                    verify = verify.id;
                    entity['application_id'] = verify;
                    verify = _closure1_slot1;
                    report = 18;
                    report = options[report];
                    report = verify.bind(golf)(report);
                    report = report.APP_DMS_ENTRY_POINT_COMMAND_BUTTON;
                    entity['location'] = report;
                    report = 19;
                    report = options[report];
                    report = oscar.bind(golf)(report);
                    report = report.AppLauncherEntrypoint;
                    report = report.TEXT;
                    entity['source'] = report;
                    entity = zulu.bind(tango)(mike, entity);
 288:
                    entity = undefined;
                    return entity;
                }
            };
            sizing = update.bind(source)(mike, sizing);
            mike = 20;
            mike = kilo[mike];
            zulu = zulu.bind(tango)(mike);
            mike = {};
            mike['isProfileFetching'] = foxtrot;
            mike['wasProfileFetching'] = verify;
            mike['applicationId'] = options;
            mike['channelId'] = golf;
            mike['commands'] = report;
            mike = zulu.bind(tango)(mike);
            zulu = _closure1_slot12;
            mike = _closure1_slot4;
            if(entity) { _fun00006_ip = 736; continue _fun00005 }
 308:
            entity = null;
            if(!(entity != output)) { _fun00006_ip = 736; continue _fun00005 }
 317:
            entity = {};
            report = offset.container;
            entity['style'] = report;
            verify = _closure1_slot11;
            options = _closure1_slot1;
            report = _closure1_slot2;
            golf = 21;
            report = report[golf];
            options = options.bind(tango)(report);
            report = {};
            report['style'] = backup;
            foxtrot = true;
            report['active'] = foxtrot;
            source = _closure1_slot0;
            control = _closure1_slot2;
            if(yankee) { _fun00006_ip = 396; continue _fun00005 }
 376:
            kilo = 23;
            kilo = control[kilo];
            kilo = source.bind(tango)(kilo);
            kilo = kilo.BellIcon;
            _fun00006_ip = 414; continue _fun00005;
 396:
            update = 22;
            update = control[update];
            update = source.bind(tango)(update);
            kilo = update.BellSlashIcon;
 414:
            report['IconComponent'] = kilo;
            kilo = function() { // Original name: onPress
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    tango = _closure2_slot4;
                    mike = _closure1_slot1;
                    verify = _closure1_slot2;
                    if(tango) { _fun00010_ip = 108; continue _fun00009 }
 21:
                    tango = 30;
                    tango = verify[tango];
                    offset = undefined;
                    options = mike.bind(offset)(tango);
                    golf = options.openLazy;
                    report = _closure1_slot0;
                    tango = 32;
                    tango = verify[tango];
                    oscar = report.bind(offset)(tango);
                    tango = 31;
                    report = verify[tango];
                    tango = verify.paths;
                    oscar = oscar.bind(offset)(report, tango);
                    report = {};
                    tango = _closure2_slot0;
                    tango = tango.channel;
                    report['channel'] = tango;
                    tango = 'MessageNotificationChannelActionSheet';
                    tango = golf.bind(options)(oscar, tango, report);
                    _fun00010_ip = 290; continue _fun00009;
 108:
                    tango = 24;
                    tango = verify[tango];
                    options = undefined;
                    offset = mike.bind(options)(tango);
                    oscar = offset.updateChannelOverrideSettings;
                    zulu = _closure2_slot0;
                    zulu = zulu.channel;
                    foxtrot = zulu.id;
                    tango = {};
                    zulu = false;
                    tango['muted'] = zulu;
                    golf = _closure1_slot0;
                    entity = 25;
                    entity = verify[entity];
                    entity = golf.bind(options)(entity);
                    entity = entity.NotificationLabels;
                    yankee = entity.Unmuted;
                    backup = null;
                    kilo = offset;
                    romeo = tango;
                    entity = kilo[oscar](backup, foxtrot, romeo, yankee, offset);
                    entity = 26;
                    entity = verify[entity];
                    zulu = mike.bind(options)(entity);
                    mike = zulu.open;
                    entity = {};
                    tango = 'NOTIFICATIONS_UNMUTED';
                    entity['key'] = tango;
                    tango = 27;
                    report = verify[tango];
                    report = golf.bind(options)(report);
                    oscar = report.intl;
                    report = oscar.string;
                    tango = verify[tango];
                    tango = golf.bind(options)(tango);
                    tango = tango.t;
                    tango = tango./6kul5;
                    tango = report.bind(oscar)(tango);
                    entity['content'] = tango;
                    tango = function() { // Original name: icon
                        tango = _closure1_slot11;
                        zulu = _closure1_slot4;
                        mike = {};
                        golf = _closure2_slot3;
                        report = golf.unmutedNotificationContainer;
                        mike['style'] = report;
                        verify = _closure1_slot1;
                        offset = _closure1_slot2;
                        entity = 28;
                        report = offset[entity];
                        entity = undefined;
                        oscar = verify.bind(entity)(report);
                        report = {};
                        options = 29;
                        options = offset[options];
                        options = verify.bind(entity)(options);
                        report['source'] = options;
                        options = 10;
                        options = offset[options];
                        options = verify.bind(entity)(options);
                        options = options.unsafe_rawColors;
                        options = options.WHITE_500;
                        report['color'] = options;
                        golf = golf.unmutedNotification;
                        report['style'] = golf;
                        report = tango.bind(entity)(oscar, report);
                        mike['children'] = report;
                        entity = tango.bind(entity)(zulu, mike);
                        return entity;
                    };
                    entity['icon'] = tango;
                    entity = mike.bind(zulu)(entity);
 290:
                    entity = undefined;
                    return entity;
                }
            };
            report['onPress'] = kilo;
            vacuum = _closure1_slot0;
            update = _closure1_slot2;
            kilo = 27;
            source = update[kilo];
            source = vacuum.bind(tango)(source);
            control = source.intl;
            source = control.string;
            update = update[kilo];
            update = vacuum.bind(tango)(update);
            update = update.t;
            if(yankee) { _fun00006_ip = 490; continue _fun00005 }
 477:
            yankee = update.+fnDnZ;
            yankee = source.bind(control)(yankee);
            _fun00006_ip = 501; continue _fun00005;
 490:
            update = update.w7c5Vl;
            yankee = source.bind(control)(update);
 501:
            report['accessibilityLabel'] = yankee;
            options = verify.bind(tango)(options, report);
            report = new Array(3);
            report[0] = options;
            verify = _closure1_slot11;
            yankee = _closure1_slot14;
            options = {};
            options['context'] = echo;
            options['primaryEntryPointCommand'] = result;
            options['application'] = output;
            options['onOpenButtonPress'] = sizing;
            options = verify.bind(tango)(yankee, options);
            report[1] = options;
            options = _closure1_slot1;
            yankee = _closure1_slot2;
            golf = yankee[golf];
            options = options.bind(tango)(golf);
            golf = {};
            golf['style'] = backup;
            golf['active'] = foxtrot;
            backup = _closure1_slot0;
            foxtrot = 33;
            foxtrot = yankee[foxtrot];
            foxtrot = backup.bind(tango)(foxtrot);
            foxtrot = foxtrot.ChatIcon;
            golf['IconComponent'] = foxtrot;
            romeo = function() { // Original name: onPress
                tango = _closure2_slot2;
                entity = undefined;
                zulu = false;
                zulu = tango.bind(entity)(zulu);
                mike = _closure2_slot1;
                zulu = mike.current;
                mike = zulu.openSystemKeyboard;
                mike = mike.bind(zulu)();
                return entity;
            };
            golf['onPress'] = romeo;
            romeo = yankee[kilo];
            romeo = backup.bind(tango)(romeo);
            sizing = romeo.intl;
            foxtrot = sizing.string;
            romeo = yankee[kilo];
            romeo = backup.bind(tango)(romeo);
            romeo = romeo.t;
            romeo = romeo.5/5xY2;
            romeo = foxtrot.bind(sizing)(romeo);
            golf['accessibilityLabel'] = romeo;
            romeo = yankee[kilo];
            romeo = backup.bind(tango)(romeo);
            foxtrot = romeo.intl;
            romeo = foxtrot.string;
            yankee = yankee[kilo];
            yankee = backup.bind(tango)(yankee);
            yankee = yankee.t;
            yankee = yankee.2d4+Vl;
            yankee = romeo.bind(foxtrot)(yankee);
            golf['accessibilityHint'] = yankee;
            golf = verify.bind(tango)(options, golf);
            report[2] = golf;
            entity['children'] = report;
            _fun00006_ip = 850; continue _fun00005;
 736:
            report = {};
            golf = offset.container;
            report['style'] = golf;
            verify = _closure1_slot11;
            options = _closure1_slot4;
            oscar = {};
            golf = offset.loadingButton;
            oscar['style'] = golf;
            golf = verify.bind(tango)(options, oscar);
            oscar = new Array(3);
            oscar[0] = golf;
            golf = {};
            romeo = offset.loadingLaunchButton;
            yankee = new Array(2);
            yankee[0] = romeo;
            romeo = offset.loadingButton;
            yankee[1] = romeo;
            golf['style'] = yankee;
            golf = verify.bind(tango)(options, golf);
            oscar[1] = golf;
            golf = {};
            offset = offset.loadingButton;
            golf['style'] = offset;
            golf = verify.bind(tango)(options, golf);
            oscar[2] = golf;
            report['children'] = oscar;
            entity = report;
 850:
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['ChatInputAppDM'] = mike;
    return entity;
})();