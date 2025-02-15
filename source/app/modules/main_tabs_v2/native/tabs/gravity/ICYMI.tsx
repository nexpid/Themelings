// app/modules/main_tabs_v2/native/tabs/gravity/ICYMI.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    romeo = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = romeo;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: isItemNSFW
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            mike = entity.data;
            zulu = mike.kind;
            mike = 'message';
            if(!(mike !== zulu)) { _fun00002_ip = 97; continue _fun00001 }
 21:
            mike = entity.data;
            zulu = mike.kind;
            mike = 'channelSummary';
            if(!(mike !== zulu)) { _fun00002_ip = 45; continue _fun00001 }
 41:
            mike = false;
            return mike;
 45:
            tango = _closure1_slot13;
            zulu = tango.getChannel;
            mike = entity.data;
            mike = mike.topic;
            mike = mike.channelId;
            zulu = zulu.bind(tango)(mike);
            mike = null;
            tango = mike == zulu;
            mike = undefined;
            if(tango) { _fun00002_ip = 95; continue _fun00001 }
 89:
            mike = zulu.nsfw;
 95:
            return mike;
 97:
            zulu = _closure1_slot13;
            mike = zulu.getChannel;
            entity = entity.data;
            entity = entity.message;
            entity = entity.channel_id;
            mike = mike.bind(zulu)(entity);
            entity = null;
            zulu = entity == mike;
            entity = undefined;
            if(zulu) { _fun00002_ip = 146; continue _fun00001 }
 140:
            entity = mike.nsfw;
 146:
            return entity;
        }
    };
    var _closure1_slot26 = entity;
    entity = function() { // Original name: SettingsButton
        tango = _closure1_slot18;
        oscar = _closure1_slot0;
        verify = _closure1_slot2;
        entity = 19;
        entity = verify[entity];
        zulu = undefined;
        entity = oscar.bind(zulu)(entity);
        mike = entity.IconButton;
        entity = {'accessibilityLabel': 'button', 'variant': 'tertiary', 'size': 'sm'};
        options = 'sm';
        golf = _closure1_slot18;
        report = 20;
        report = verify[report];
        report = oscar.bind(zulu)(report);
        oscar = report.FiltersHorizontalIcon;
        report = {};
        report['size'] = options;
        report = golf.bind(zulu)(oscar, report);
        entity['icon'] = report;
        report = function() { // Original name: onPress
            tango = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 21;
            report = mike[entity];
            entity = undefined;
            options = tango.bind(entity)(report);
            golf = options.trackItemInteraction;
            oscar = 'filters_button';
            report = 'press_info_button';
            report = golf.bind(options)(oscar, oscar, report);
            report = _closure1_slot1;
            zulu = 22;
            zulu = mike[zulu];
            oscar = report.bind(entity)(zulu);
            report = oscar.openLazy;
            zulu = 24;
            zulu = mike[zulu];
            tango = tango.bind(entity)(zulu);
            zulu = 23;
            zulu = mike[zulu];
            mike = mike.paths;
            tango = tango.bind(entity)(zulu, mike);
            zulu = 'ICYMISettingsActionSheet';
            mike = {};
            mike = report.bind(oscar)(tango, zulu, mike);
            return entity;
        };
        entity['onPress'] = report;
        entity = tango.bind(zulu)(mike, entity);
        return entity;
    };
    var _closure1_slot27 = entity;
    entity = function(argFoo) { // Original name: NotificationsButton
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            kilo = entity.numUnreadMentions;
            mike = _closure1_slot1;
            result = _closure1_slot2;
            entity = 25;
            entity = result[entity];
            tango = undefined;
            entity = mike.bind(tango)(entity);
            entity = entity.bind(tango)();
            backup = entity.value;
            offset = entity.showDot;
            romeo = _closure1_slot0;
            entity = 26;
            entity = result[entity];
            mike = romeo.bind(tango)(entity);
            entity = mike.useNavigation;
            entity = entity.bind(mike)();
            var _closure2_slot0 = entity;
            entity = _closure1_slot24;
            sizing = entity.bind(tango)();
            zulu = _closure1_slot18;
            entity = 19;
            entity = result[entity];
            entity = romeo.bind(tango)(entity);
            mike = entity.IconButton;
            entity = {'accessibilityLabel': 'button', 'variant': 'tertiary', 'size': 'sm'};
            output = 'sm';
            options = _closure1_slot19;
            golf = _closure1_slot6;
            oscar = {};
            verify = {'flexDirection': 'row', 'gap': 4};
            oscar['style'] = verify;
            foxtrot = _closure1_slot18;
            verify = 27;
            verify = result[verify];
            verify = romeo.bind(tango)(verify);
            romeo = verify.AtIcon;
            verify = {};
            verify['size'] = output;
            romeo = foxtrot.bind(tango)(romeo, verify);
            verify = new Array(2);
            verify[0] = romeo;
            if(offset) { _fun00004_ip = 204; continue _fun00003 }
 198:
            romeo = 0;
            offset = kilo > romeo;
 204:
            if(!offset) { _fun00004_ip = 257; continue _fun00003 }
 207:
            foxtrot = _closure1_slot18;
            romeo = _closure1_slot1;
            output = _closure1_slot2;
            yankee = 28;
            yankee = output[yankee];
            romeo = romeo.bind(tango)(yankee);
            yankee = {};
            sizing = sizing.notificationBadge;
            yankee['style'] = sizing;
            backup = backup + kilo;
            yankee['value'] = backup;
            offset = foxtrot.bind(tango)(romeo, yankee);
 257:
            verify[1] = offset;
            oscar['children'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            entity['icon'] = oscar;
            report = function() { // Original name: onPress
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 21;
                mike = mike[entity];
                entity = undefined;
                report = zulu.bind(entity)(mike);
                tango = report.trackItemInteraction;
                zulu = 'notification_button';
                mike = 'press_notification_button';
                mike = tango.bind(report)(zulu, zulu, mike);
                tango = _closure2_slot0;
                zulu = tango.push;
                mike = 'notifications-screen';
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            entity['onPress'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot28 = entity;
    entity = function() { // Original name: InfoButton
        tango = _closure1_slot18;
        oscar = _closure1_slot0;
        verify = _closure1_slot2;
        entity = 19;
        entity = verify[entity];
        zulu = undefined;
        entity = oscar.bind(zulu)(entity);
        mike = entity.IconButton;
        entity = {'accessibilityLabel': 'button', 'variant': 'tertiary', 'size': 'sm'};
        options = 'sm';
        golf = _closure1_slot18;
        report = 29;
        report = verify[report];
        report = oscar.bind(zulu)(report);
        oscar = report.CircleInformationIcon;
        report = {};
        report['size'] = options;
        report = golf.bind(zulu)(oscar, report);
        entity['icon'] = report;
        report = function() { // Original name: onPress
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 21;
            mike = tango[entity];
            entity = undefined;
            golf = zulu.bind(entity)(mike);
            oscar = golf.trackItemInteraction;
            report = 'info_button';
            mike = 'press_info_button';
            mike = oscar.bind(golf)(report, report, mike);
            mike = 30;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.pushICYMIInfoModal;
            mike = {};
            report = true;
            mike['extendedOnboarding'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity['onPress'] = report;
        entity = tango.bind(zulu)(mike, entity);
        return entity;
    };
    var _closure1_slot29 = entity;
    entity = function(argFoo) { // Original name: ICYMIHeaderTextWrapper
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            entity = entity.isPressable;
            zulu = _closure1_slot24;
            report = undefined;
            options = zulu.bind(report)();
            verify = _closure1_slot5;
            oscar = verify.useMemo;
            tango = function() {
                tango = _closure1_slot19;
                zulu = _closure1_slot20;
                mike = {};
                offset = _closure1_slot18;
                romeo = _closure1_slot0;
                foxtrot = _closure1_slot2;
                oscar = 31;
                report = foxtrot[oscar];
                entity = undefined;
                report = romeo.bind(entity)(report);
                options = report.Text;
                report = {'color': 'header-primary', 'variant': 'heading-lg/bold', 'maxFontSizeMultiplier': 1.75, 'accessibilityRole': 'header'};
                verify = 32;
                yankee = foxtrot[verify];
                yankee = romeo.bind(entity)(yankee);
                kilo = yankee.intl;
                backup = kilo.string;
                yankee = foxtrot[verify];
                yankee = romeo.bind(entity)(yankee);
                yankee = yankee.t;
                yankee = yankee.SY4sdX;
                yankee = backup.bind(kilo)(yankee);
                report['children'] = yankee;
                options = offset.bind(entity)(options, report);
                report = new Array(2);
                report[0] = options;
                options = _closure1_slot18;
                oscar = foxtrot[oscar];
                oscar = romeo.bind(entity)(oscar);
                golf = oscar.Text;
                oscar = {'color': 'text-brand', 'variant': 'text-xs/bold'};
                offset = {};
                yankee = 4;
                offset['marginTop'] = yankee;
                oscar['style'] = offset;
                offset = foxtrot[verify];
                offset = romeo.bind(entity)(offset);
                yankee = offset.intl;
                offset = yankee.string;
                verify = foxtrot[verify];
                verify = romeo.bind(entity)(verify);
                verify = verify.t;
                verify = verify.Ac2OZG;
                verify = offset.bind(yankee)(verify);
                oscar['children'] = verify;
                oscar = options.bind(entity)(golf, oscar);
                report[1] = oscar;
                mike['children'] = report;
                entity = tango.bind(entity)(zulu, mike);
                return entity;
            };
            zulu = new Array(0);
            oscar = oscar.bind(verify)(tango, zulu);
            tango = _closure1_slot18;
            if(entity) { _fun00006_ip = 85; continue _fun00005 }
 57:
            zulu = _closure1_slot6;
            entity = {};
            verify = options.headerText;
            entity['style'] = verify;
            entity['children'] = oscar;
            entity = tango.bind(report)(zulu, entity);
            _fun00006_ip = 144; continue _fun00005;
 85:
            zulu = _closure1_slot0;
            verify = _closure1_slot2;
            mike = 33;
            mike = verify[mike];
            mike = zulu.bind(report)(mike);
            zulu = mike.PressableOpacity;
            mike = {};
            options = options.headerText;
            mike['style'] = options;
            golf = function() { // Original name: onPress
                zulu = _closure1_slot0;
                tango = _closure1_slot2;
                entity = 21;
                mike = tango[entity];
                entity = undefined;
                golf = zulu.bind(entity)(mike);
                oscar = golf.trackItemInteraction;
                report = 'title_text';
                mike = 'press_info_title_text';
                mike = oscar.bind(golf)(report, report, mike);
                mike = 30;
                mike = tango[mike];
                tango = zulu.bind(entity)(mike);
                zulu = tango.pushICYMIInfoModal;
                mike = {};
                report = true;
                mike['extendedOnboarding'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            mike['onPress'] = golf;
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 144:
            return entity;
        }
    };
    var _closure1_slot30 = entity;
    entity = function() { // Original name: handleEndReached
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 41;
        mike = mike[entity];
        entity = undefined;
        zulu = zulu.bind(entity)(mike);
        mike = zulu.hydrateNextPage;
        mike = mike.bind(zulu)();
        return entity;
    };
    var _closure1_slot31 = entity;
    entity = function(argFoo) { // Original name: itemToType
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            golf = argFoo;
            entity = golf.data;
            mike = entity.kind;
            entity = 'end';
            if(!(entity !== mike)) { _fun00008_ip = 385; continue _fun00007 }
 24:
            mike = golf.data;
            zulu = mike.kind;
            mike = 'loading';
            if(!(mike !== zulu)) { _fun00008_ip = 382; continue _fun00007 }
 45:
            zulu = golf.data;
            zulu = zulu.kind;
            report = 'message';
            if(!(report !== zulu)) { _fun00008_ip = 281; continue _fun00007 }
 66:
            zulu = golf.data;
            oscar = zulu.kind;
            zulu = 'summary';
            tango = 'channelSummary';
            if(!(tango !== oscar)) { _fun00008_ip = 279; continue _fun00007 }
 93:
            tango = golf.data;
            options = tango.kind;
            tango = 'guild_event';
            oscar = 'guildEvent';
            if(!(oscar !== options)) { _fun00008_ip = 276; continue _fun00007 }
 120:
            oscar = golf.data;
            options = oscar.kind;
            oscar = 'contentInventory';
            if(!(oscar !== options)) { _fun00008_ip = 201; continue _fun00007 }
 140:
            oscar = golf.data;
            verify = oscar.kind;
            oscar = 'recommended_guilds';
            options = 'recommendedGuilds';
            if(!(options !== verify)) { _fun00008_ip = 199; continue _fun00007 }
 166:
            options = golf.data;
            offset = options.kind;
            options = 'unknown';
            verify = 'forumThread';
            if(!(verify === offset)) { _fun00008_ip = 196; continue _fun00007 }
 190:
            options = 'forum_thread';
 196:
            oscar = options;
 199:
            _fun00008_ip = 273; continue _fun00007;
 201:
            options = golf.data;
            options = options.content;
            offset = options.content_type;
            yankee = _closure1_slot0;
            verify = _closure1_slot2;
            options = 43;
            verify = verify[options];
            options = undefined;
            options = yankee.bind(options)(verify);
            options = options.ContentInventoryEntryType;
            verify = options.CUSTOM_STATUS;
            options = 'hotwheels_gaming_activity';
            if(!(offset === verify)) { _fun00008_ip = 270; continue _fun00007 }
 264:
            options = 'hotwheels_custom_status';
 270:
            oscar = options;
 273:
            tango = oscar;
 276:
            zulu = tango;
 279:
            _fun00008_ip = 379; continue _fun00007;
 281:
            verify = golf.channelType;
            options = _closure1_slot0;
            oscar = _closure1_slot2;
            tango = 42;
            tango = oscar[tango];
            oscar = undefined;
            tango = options.bind(oscar)(tango);
            tango = tango.ChannelTypes;
            options = tango.GUILD_ANNOUNCEMENT;
            tango = 'announcement';
            if(!(verify !== options)) { _fun00008_ip = 376; continue _fun00007 }
 332:
            golf = golf.data;
            options = golf.messageContext;
            golf = null;
            verify = golf == options;
            oscar = undefined;
            if(verify) { _fun00008_ip = 360; continue _fun00007 }
 354:
            oscar = options.external_content_application_id;
 360:
            oscar = golf != oscar;
            if(!oscar) { _fun00008_ip = 373; continue _fun00007 }
 367:
            report = 'game_message';
 373:
            tango = report;
 376:
            zulu = tango;
 379:
            mike = zulu;
 382:
            entity = mike;
 385:
            return entity;
        }
    };
    var _closure1_slot32 = entity;
    entity = function() { // Original name: ICYMI
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = _closure1_slot24;
            tango = undefined;
            papa = entity.bind(tango)();
            backup = _closure1_slot1;
            romeo = _closure1_slot2;
            entity = 44;
            entity = romeo[entity];
            entity = backup.bind(tango)(entity);
            entity = entity.bind(tango)();
            oscar = entity.width;
            report = entity.height;
            foxtrot = global;
            zulu = foxtrot.Math;
            mike = zulu.min;
            entity = 480;
            variable38 = mike.bind(zulu)(oscar, entity);
            var _closure2_slot0 = variable38;
            entity = 45;
            entity = romeo[entity];
            entity = backup.bind(tango)(entity);
            entity = entity.bind(tango)();
            zulu = entity.top;
            offset = _closure1_slot0;
            entity = 46;
            mike = romeo[entity];
            options = offset.bind(tango)(mike);
            golf = options.useStateFromStores;
            mike = _closure1_slot8;
            oscar = new Array(1);
            oscar[0] = mike;
            mike = function() {
                entity = _closure1_slot8;
                entity = entity.useReducedMotion;
                return entity;
            };
            golf = golf.bind(options)(oscar, mike);
            var _closure2_slot1 = golf;
            options = _closure1_slot5;
            oscar = options.useState;
            mike = false;
            oscar = oscar.bind(options)(mike);
            mike = _closure1_slot4;
            config = 2;
            mike = mike.bind(tango)(oscar, config);
            status = 0;
            variable36 = mike[status];
            var _closure2_slot2 = variable36;
            result = 1;
            mike = mike[result];
            var _closure2_slot3 = mike;
            verify = _closure1_slot5;
            options = verify.useEffect;
            oscar = new Array(1);
            oscar[0] = variable36;
            mike = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    entity = _closure2_slot2;
                    if(!entity) { _fun00012_ip = 29; continue _fun00011 }
 10:
                    zulu = _closure1_slot11;
                    mike = zulu.hasOpenedEnoughTimes;
                    entity = mike.bind(zulu)();
 29:
                    if(!entity) { _fun00012_ip = 112; continue _fun00011 }
 32:
                    tango = _closure1_slot1;
                    entity = _closure1_slot2;
                    zulu = 22;
                    zulu = entity[zulu];
                    oscar = undefined;
                    report = tango.bind(oscar)(zulu);
                    tango = report.openLazy;
                    zulu = _closure1_slot0;
                    mike = 24;
                    mike = entity[mike];
                    zulu = zulu.bind(oscar)(mike);
                    mike = 47;
                    mike = entity[mike];
                    entity = entity.paths;
                    zulu = zulu.bind(oscar)(mike, entity);
                    mike = 'ICYMIFeedbackSheet';
                    entity = {};
                    entity = tango.bind(report)(zulu, mike, entity);
 112:
                    entity = undefined;
                    return entity;
                }
            };
            mike = options.bind(verify)(mike, oscar);
            options = 35;
            mike = romeo[options];
            verify = offset.bind(tango)(mike);
            oscar = verify.useIsNotificationsTabMerged;
            mike = {};
            update = 'ICYMI';
            mike['location'] = update;
            mike = oscar.bind(verify)(mike);
            equality = mike.enabled;
            var _closure2_slot4 = equality;
            yankee = mike.tabBadgeVariant;
            kilo = 48;
            mike = romeo[kilo];
            oscar = offset.bind(tango)(mike);
            mike = oscar.useIsFocused;
            oscar = mike.bind(oscar)();
            var _closure2_slot5 = oscar;
            mike = 49;
            mike = romeo[mike];
            verify = backup.bind(tango)(mike);
            mike = {};
            mike['isFocused'] = oscar;
            mike['mergedNotificationsEnabled'] = equality;
            mike = verify.bind(tango)(mike);
            verify = mike.displayUnreadMentionMessages;
            var _closure2_slot6 = verify;
            sizing = mike.newUnreadMentionMessages;
            echo = _closure1_slot5;
            output = echo.useLayoutEffect;
            mike = function() {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 50;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.trackAppUIViewed;
                mike = mike.bind(zulu)();
                return entity;
            };
            mike = output.bind(echo)(mike);
            mike = 51;
            mike = romeo[mike];
            echo = offset.bind(tango)(mike);
            output = echo.useGetDismissibleContent;
            mike = 52;
            mike = romeo[mike];
            mike = offset.bind(tango)(mike);
            mike = mike.DismissibleContent;
            source = mike.ICYMI_ALPHA_UPSELL;
            mike = new Array(1);
            mike[0] = source;
            output = output.bind(echo)(mike);
            mike = _closure1_slot4;
            mike = mike.bind(tango)(output, config);
            vacuum = mike[status];
            var _closure2_slot7 = vacuum;
            source = mike[result];
            var _closure2_slot8 = source;
            mike = romeo[options];
            echo = offset.bind(tango)(mike);
            output = echo.useICYMIStatusWithMediaEnabled;
            mike = {};
            mike['location'] = update;
            sierra = output.bind(echo)(mike);
            var _closure2_slot9 = sierra;
            mike = romeo[entity];
            update = offset.bind(tango)(mike);
            echo = update.useStateFromStores;
            mike = _closure1_slot14;
            output = new Array(1);
            output[0] = mike;
            mike = function() {
                mike = _closure1_slot14;
                entity = mike.getGuildCount;
                entity = entity.bind(mike)();
                return entity;
            };
            mike = echo.bind(update)(output, mike);
            var _closure2_slot10 = mike;
            update = _closure1_slot5;
            echo = update.useEffect;
            output = new Array(3);
            output[0] = vacuum;
            output[1] = source;
            output[2] = mike;
            mike = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zulu = _closure2_slot7;
                    entity = null;
                    if(!(entity != zulu)) { _fun00014_ip = 87; continue _fun00013 }
 13:
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    zulu = 30;
                    tango = tango[zulu];
                    zulu = undefined;
                    oscar = report.bind(zulu)(tango);
                    report = oscar.pushICYMIInfoModal;
                    tango = {};
                    options = _closure2_slot10;
                    golf = _closure1_slot22;
                    golf = options <= golf;
                    tango['extendedOnboarding'] = golf;
                    tango = report.bind(oscar)(tango);
                    mike = _closure2_slot8;
                    entity = _closure1_slot17;
                    entity = entity.USER_DISMISS;
                    entity = mike.bind(zulu)(entity);
 87:
                    entity = undefined;
                    return entity;
                }
            };
            mike = echo.bind(update)(mike, output);
            mike = 53;
            mike = romeo[mike];
            mike = backup.bind(tango)(mike);
            mike = mike.bind(tango)();
            sequence = mike.unreadItems;
            var _closure2_slot11 = sequence;
            source = mike.readItems;
            var _closure2_slot12 = source;
            vacuum = mike.allUnreadItemsHydrated;
            var _closure2_slot13 = vacuum;
            mike = romeo[entity];
            record = offset.bind(tango)(mike);
            update = record.useStateFromStores;
            mike = _closure1_slot11;
            echo = new Array(1);
            echo[0] = mike;
            output = function() {
                mike = _closure1_slot11;
                entity = mike.getVersion;
                entity = entity.bind(mike)();
                return entity;
            };
            mike = new Array(0);
            output = update.bind(record)(echo, output, mike);
            var _closure2_slot14 = output;
            mike = romeo[entity];
            record = offset.bind(tango)(mike);
            update = record.useStateFromStores;
            mike = _closure1_slot11;
            echo = new Array(1);
            echo[0] = mike;
            mike = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    mike = _closure1_slot11;
                    entity = mike.isFirstPageHydrated;
                    entity = entity.bind(mike)();
                    if(!entity) { _fun00016_ip = 35; continue _fun00015 }
 22:
                    zulu = _closure2_slot14;
                    mike = 0;
                    entity = zulu > mike;
 35:
                    entity = !entity;
                    return entity;
                }
            };
            echo = update.bind(record)(echo, mike);
            var _closure2_slot15 = echo;
            context = _closure1_slot5;
            record = context.useEffect;
            update = new Array(1);
            update[0] = output;
            mike = function() {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    zulu = _closure1_slot11;
                    mike = zulu.getLoadId;
                    report = mike.bind(zulu)();
                    mike = null;
                    if(!(mike != report)) { _fun00018_ip = 84; continue _fun00017 }
 23:
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    mike = 54;
                    zulu = zulu[mike];
                    mike = undefined;
                    tango = tango.bind(mike)(zulu);
                    zulu = tango.track;
                    entity = _closure1_slot16;
                    mike = entity.FEED_SHOWN;
                    entity = {};
                    entity['load_id'] = report;
                    report = 'gravity';
                    entity['home_session_id'] = report;
                    entity = zulu.bind(tango)(mike, entity);
 84:
                    entity = undefined;
                    return entity;
                }
            };
            mike = record.bind(context)(mike, update);
            mike = romeo[entity];
            target = offset.bind(tango)(mike);
            context = target.useStateFromStores;
            mike = _closure1_slot11;
            record = new Array(1);
            record[0] = mike;
            update = function() {
                mike = _closure1_slot11;
                entity = mike.isRefreshing;
                entity = entity.bind(mike)();
                return entity;
            };
            mike = new Array(0);
            target = context.bind(target)(record, update, mike);
            var _closure2_slot16 = target;
            record = _closure1_slot5;
            update = record.useState;
            mike = new Array(0);
            update = update.bind(record)(mike);
            mike = _closure1_slot4;
            update = mike.bind(tango)(update, config);
            mike = update[status];
            var _closure2_slot17 = mike;
            update = update[result];
            var _closure2_slot18 = update;
            update = romeo[entity];
            context = offset.bind(tango)(update);
            record = context.useStateFromStoresObject;
            update = _closure1_slot11;
            config = new Array(1);
            config[0] = update;
            update = function() {
                entity = {};
                tango = _closure1_slot11;
                zulu = tango.getLoadId;
                zulu = zulu.bind(tango)();
                entity['loadId'] = zulu;
                zulu = _closure1_slot11;
                mike = zulu.lastScrollEvent;
                mike = mike.bind(zulu)();
                entity['lastScrollEventTimestamp'] = mike;
                return entity;
            };
            config = record.bind(context)(config, update);
            update = config.loadId;
            var _closure2_slot19 = update;
            lima = config.lastScrollEventTimestamp;
            var _closure2_slot20 = lima;
            context = _closure1_slot5;
            record = context.useEffect;
            config = new Array(5);
            config[0] = target;
            config[1] = lima;
            config[2] = update;
            config[3] = echo;
            config[4] = mike;
            update = function() {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    entity = _closure2_slot16;
                    if(entity) { _fun00020_ip = 190; continue _fun00019 }
 13:
                    entity = _closure2_slot15;
                    if(entity) { _fun00020_ip = 190; continue _fun00019 }
 23:
                    entity = _closure2_slot17;
                    oscar = 0;
                    mike = entity[oscar];
                    entity = null;
                    golf = entity == mike;
                    tango = undefined;
                    zulu = undefined;
                    if(golf) { _fun00020_ip = 51; continue _fun00019 }
 46:
                    zulu = mike.index;
 51:
                    if(!(entity != zulu)) { _fun00020_ip = 190; continue _fun00019 }
 58:
                    entity = global;
                    mike = entity.Date;
                    entity = mike.now;
                    options = entity.bind(mike)();
                    entity = _closure2_slot20;
                    golf = options - entity;
                    mike = _closure1_slot23;
                    mike = golf > mike;
                    if(!mike) { _fun00020_ip = 101; continue _fun00019 }
 97:
                    mike = zulu > oscar;
 101:
                    if(!mike) { _fun00020_ip = 190; continue _fun00019 }
 104:
                    zulu = _closure1_slot1;
                    oscar = _closure1_slot2;
                    mike = 55;
                    mike = oscar[mike];
                    golf = zulu.bind(tango)(mike);
                    mike = golf.gravityScrollEvent;
                    mike = mike.bind(golf)(options);
                    mike = 54;
                    mike = oscar[mike];
                    tango = zulu.bind(tango)(mike);
                    zulu = tango.track;
                    entity = _closure1_slot16;
                    mike = entity.HOME_FIRST_SCROLL_STARTED;
                    entity = {};
                    oscar = 'gravity';
                    entity['home_session_id'] = oscar;
                    report = _closure2_slot19;
                    entity['load_id'] = report;
                    entity = zulu.bind(tango)(mike, entity);
 190:
                    entity = undefined;
                    return entity;
                }
            };
            update = record.bind(context)(update, config);
            context = _closure1_slot5;
            record = context.useCallback;
            config = new Array(1);
            config[0] = output;
            update = function(argFoo) {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    entity = argFoo;
                    options = entity.viewableItems;
                    var _closure3_slot0 = options;
                    entity = undefined;
                    var _closure3_slot1 = entity;
                    zulu = options.some;
                    mike = function(argFoo) {
                        entity = argFoo;
                        entity = entity.item;
                        entity = entity.data;
                        mike = entity.kind;
                        entity = 'end';
                        entity = entity === mike;
                        return entity;
                    };
                    mike = zulu.bind(options)(mike);
                    if(!mike) { _fun00022_ip = 56; continue _fun00021 }
 42:
                    zulu = _closure2_slot3;
                    mike = true;
                    mike = zulu.bind(entity)(mike);
 56:
                    mike = options.length;
                    romeo = 0;
                    if(!(romeo !== mike)) { _fun00022_ip = 675; continue _fun00021 }
 70:
                    mike = _closure2_slot18;
                    mike = mike.bind(entity)(options);
                    mike = options.length;
                    foxtrot = 1;
                    mike = mike - foxtrot;
                    mike = options[mike];
                    kilo = null;
                    zulu = kilo == mike;
                    report = undefined;
                    if(zulu) { _fun00022_ip = 114; continue _fun00021 }
 109:
                    report = mike.index;
 114:
                    if(!(kilo != report)) { _fun00022_ip = 675; continue _fun00021 }
 121:
                    backup = new Array(0);
                    _closure3_slot1 = backup;
                    zulu = options.forEach;
                    mike = function() {
                        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                            zulu = _closure3_slot0;
                            mike = 0;
                            mike = zulu[mike];
                            tango = mike.item;
                            mike = tango.data;
                            zulu = mike.kind;
                            mike = 'channelSummary';
                            if(!(mike === zulu)) { _fun00024_ip = 93; continue _fun00023 }
 38:
                            zulu = _closure3_slot1;
                            mike = zulu.push;
                            entity = {};
                            tango = tango.id;
                            entity['id'] = tango;
                            tango = 'summary';
                            entity['type'] = tango;
                            tango = global;
                            report = tango.Date;
                            tango = report.now;
                            tango = tango.bind(report)();
                            entity['timestamp'] = tango;
                            entity = mike.bind(zulu)(entity);
 93:
                            entity = undefined;
                            return entity;
                        }
                    };
                    mike = zulu.bind(options)(mike);
                    zulu = _closure1_slot11;
                    mike = zulu.getUnreadDisplayItems;
                    tango = mike.bind(zulu)();
                    zulu = global;
                    yankee = zulu.Math;
                    verify = yankee.min;
                    mike = tango.length;
                    mike = mike - foxtrot;
                    mike = verify.bind(yankee)(report, mike);
                    verify = zulu.Date;
                    zulu = verify.now;
                    verify = zulu.bind(verify)();
                    yankee = 56;
                    zulu = mike;
                    if(!(zulu >= romeo)) { _fun00022_ip = 301; continue _fun00021 }
 216:
                    source = tango[zulu];
                    sizing = verify;
                    if(!(kilo != source)) { _fun00022_ip = 291; continue _fun00021 }
 227:
                    echo = backup.push;
                    result = {};
                    output = source.id;
                    result['id'] = output;
                    update = _closure1_slot0;
                    output = _closure1_slot2;
                    output = output[yankee];
                    update = update.bind(entity)(output);
                    output = update.typeToString;
                    output = output.bind(update)(source);
                    result['type'] = output;
                    update = parseFloat(verify);
                    sizing = update + 1;
                    result['timestamp'] = update;
                    result = echo.bind(backup)(result);
 291:
                    zulu = zulu - 1;
                    verify = sizing;
                    if(zulu >= romeo) { _fun00022_ip = 216; continue _fun00021 }
 301:
                    zulu = backup.length;
                    if(!(zulu > romeo)) { _fun00022_ip = 344; continue _fun00021 }
 310:
                    verify = _closure1_slot1;
                    yankee = _closure1_slot2;
                    zulu = 55;
                    zulu = yankee[zulu];
                    yankee = verify.bind(entity)(zulu);
                    verify = yankee.ackGravityItems;
                    zulu = true;
                    zulu = verify.bind(yankee)(backup, zulu);
 344:
                    verify = _closure1_slot11;
                    zulu = verify.getReadDisplayItems;
                    yankee = zulu.bind(verify)();
                    zulu = tango.length;
                    zulu = report - zulu;
                    zulu = zulu - foxtrot;
                    if(!(!(zulu >= romeo))) { _fun00022_ip = 402; continue _fun00021 }
 375:
                    if(!(!(mike >= romeo))) { _fun00022_ip = 385; continue _fun00021 }
 379:
                    verify = new Array(0);
                    _fun00022_ip = 400; continue _fun00021;
 385:
                    report = tango.slice;
                    mike = mike + foxtrot;
                    verify = report.bind(tango)(romeo, mike);
 400:
                    _fun00022_ip = 443; continue _fun00021;
 402:
                    mike = new Array(0);
                    sequence = mike;
                    vacuum = tango;
                    control = 0;
                    control = arraySpread(sequence, vacuum, control);
                    report = yankee.slice;
                    zulu = zulu + foxtrot;
                    vacuum = report.bind(yankee)(romeo, zulu);
                    sequence = mike;
                    zulu = arraySpread(sequence, vacuum, control);
                    verify = mike;
 443:
                    zulu = _closure1_slot1;
                    tango = _closure1_slot2;
                    mike = 54;
                    mike = tango[mike];
                    report = zulu.bind(entity)(mike);
                    tango = report.track;
                    mike = _closure1_slot16;
                    zulu = mike.FEED_ITEM_SEEN_BATCH;
                    mike = {};
                    yankee = _closure1_slot11;
                    offset = yankee.getLoadId;
                    offset = offset.bind(yankee)();
                    mike['load_id'] = offset;
                    offset = 'gravity';
                    mike['home_session_id'] = offset;
                    yankee = options.map;
                    offset = function(argFoo) {
                        entity = argFoo;
                        entity = entity.item;
                        entity = entity.id;
                        return entity;
                    };
                    offset = yankee.bind(options)(offset);
                    mike['feed_item_ids'] = offset;
                    yankee = options.map;
                    offset = function(argFoo) {
                        zulu = _closure1_slot32;
                        entity = argFoo;
                        mike = entity.item;
                        entity = undefined;
                        entity = zulu.bind(entity)(mike);
                        return entity;
                    };
                    offset = yankee.bind(options)(offset);
                    mike['feed_item_types'] = offset;
                    options = options.length;
                    mike['num_items'] = options;
                    offset = verify.map;
                    options = function(argFoo) {
                        entity = argFoo;
                        entity = entity.id;
                        return entity;
                    };
                    options = offset.bind(verify)(options);
                    mike['all_feed_item_ids'] = options;
                    offset = verify.map;
                    options = function(argFoo) {
                        zulu = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 56;
                        mike = mike[entity];
                        entity = undefined;
                        zulu = zulu.bind(entity)(mike);
                        mike = zulu.typeToString;
                        entity = argFoo;
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    options = offset.bind(verify)(options);
                    mike['all_feed_item_types'] = options;
                    options = verify.length;
                    mike['num_all_items'] = options;
                    options = verify.map;
                    golf = function(argFoo, argBar) {
                        entity = argBar;
                        return entity;
                    };
                    golf = options.bind(verify)(golf);
                    mike['all_feed_item_indices'] = golf;
                    oscar = _closure2_slot14;
                    mike['feed_version'] = oscar;
                    oscar = 3;
                    mike['version'] = oscar;
                    mike = tango.bind(report)(zulu, mike);
 675:
                    return entity;
                }
            };
            update = record.bind(context)(update, config);
            context = _closure1_slot5;
            record = context.useRef;
            config = null;
            whiskey = record.bind(context)(config);
            var _closure2_slot21 = whiskey;
            context = _closure1_slot5;
            record = context.useRef;
            config = {};
            lima = function() { // Original name: scrollToTop
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    entity = _closure2_slot21;
                    zulu = entity.current;
                    entity = null;
                    if(!(entity != zulu)) { _fun00026_ip = 50; continue _fun00025 }
 18:
                    mike = zulu.scrollToOffset;
                    entity = {};
                    report = 0;
                    entity['offset'] = report;
                    tango = _closure2_slot1;
                    tango = !tango;
                    entity['animated'] = tango;
                    entity = mike.bind(zulu)(entity);
 50:
                    entity = undefined;
                    return entity;
                }
            };
            config['scrollToTop'] = lima;
            record = record.bind(context)(config);
            var _closure2_slot22 = record;
            kilo = romeo[kilo];
            config = offset.bind(tango)(kilo);
            kilo = config.useScrollToTop;
            kilo = kilo.bind(config)(record);
            kilo = romeo[entity];
            context = offset.bind(tango)(kilo);
            record = context.useStateFromStores;
            kilo = _closure1_slot10;
            config = new Array(1);
            config[0] = kilo;
            kilo = function() {
                mike = _closure1_slot10;
                entity = mike.getDoubleTapBehavior;
                entity = entity.bind(mike)();
                return entity;
            };
            lima = record.bind(context)(config, kilo);
            var _closure2_slot23 = lima;
            kilo = 26;
            kilo = romeo[kilo];
            config = offset.bind(tango)(kilo);
            kilo = config.useNavigation;
            kilo = kilo.bind(config)();
            var _closure2_slot24 = kilo;
            context = _closure1_slot5;
            record = context.useEffect;
            config = new Array(4);
            config[0] = lima;
            config[1] = equality;
            config[2] = kilo;
            config[3] = golf;
            kilo = function() {
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    mike = _closure2_slot4;
                    if(!mike) { _fun00028_ip = 57; continue _fun00027 }
 12:
                    report = _closure2_slot23;
                    options = _closure1_slot0;
                    tango = _closure1_slot2;
                    golf = 56;
                    tango = tango[golf];
                    oscar = undefined;
                    tango = options.bind(oscar)(tango);
                    tango = tango.GravityICYMIDoubleTapBehavior;
                    tango = tango.DEFAULT;
                    if(!(report === tango)) { _fun00028_ip = 83; continue _fun00027 }
 57:
                    report = _closure2_slot22;
                    tango = {};
                    options = function() { // Original name: scrollToTop
                        _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                            entity = _closure2_slot21;
                            zulu = entity.current;
                            entity = null;
                            if(!(entity != zulu)) { _fun00030_ip = 50; continue _fun00029 }
 18:
                            mike = zulu.scrollToOffset;
                            entity = {};
                            report = 0;
                            entity['offset'] = report;
                            tango = _closure2_slot1;
                            tango = !tango;
                            entity['animated'] = tango;
                            entity = mike.bind(zulu)(entity);
 50:
                            entity = undefined;
                            return entity;
                        }
                    };
                    tango['scrollToTop'] = options;
                    report['current'] = tango;
                    _fun00028_ip = 170; continue _fun00027;
 83:
                    tango = _closure2_slot23;
                    report = _closure1_slot0;
                    mike = _closure1_slot2;
                    mike = mike[golf];
                    mike = report.bind(oscar)(mike);
                    mike = mike.GravityICYMIDoubleTapBehavior;
                    mike = mike.NOTIFICATIONS;
                    if(!(tango !== mike)) { _fun00028_ip = 146; continue _fun00027 }
 120:
                    tango = _closure2_slot22;
                    mike = {};
                    report = function() { // Original name: scrollToTop
                        report = _closure1_slot1;
                        mike = _closure1_slot2;
                        entity = 57;
                        tango = mike[entity];
                        entity = undefined;
                        golf = report.bind(entity)(tango);
                        oscar = golf.pushLazy;
                        tango = _closure1_slot0;
                        zulu = 24;
                        zulu = mike[zulu];
                        tango = tango.bind(entity)(zulu);
                        zulu = 58;
                        zulu = mike[zulu];
                        mike = mike.paths;
                        yankee = tango.bind(entity)(zulu, mike);
                        tango = {};
                        mike = 'modal';
                        tango['presentation'] = mike;
                        offset = {};
                        verify = 'for-later-modal';
                        romeo = golf;
                        options = tango;
                        mike = romeo[oscar](yankee, offset, verify, options, golf);
                        return entity;
                    };
                    mike['scrollToTop'] = report;
                    tango['current'] = mike;
                    _fun00028_ip = 170; continue _fun00027;
 146:
                    mike = _closure2_slot22;
                    entity = {};
                    zulu = function() { // Original name: scrollToTop
                        zulu = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 21;
                        mike = mike[entity];
                        entity = undefined;
                        report = zulu.bind(entity)(mike);
                        tango = report.trackItemInteraction;
                        zulu = 'icymi_button';
                        mike = 'press_notification_button';
                        mike = tango.bind(report)(zulu, zulu, mike);
                        tango = _closure2_slot24;
                        zulu = tango.push;
                        mike = 'notifications-screen';
                        mike = zulu.bind(tango)(mike);
                        return entity;
                    };
                    entity['scrollToTop'] = zulu;
                    mike['current'] = entity;
 170:
                    entity = undefined;
                    return entity;
                }
            };
            kilo = record.bind(context)(kilo, config);
            record = _closure1_slot5;
            config = record.useCallback;
            kilo = new Array(2);
            kilo[0] = whiskey;
            kilo[1] = golf;
            golf = function() {
                _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                    entity = _closure2_slot21;
                    zulu = entity.current;
                    entity = null;
                    if(!(entity != zulu)) { _fun00032_ip = 50; continue _fun00031 }
 18:
                    mike = zulu.scrollToOffset;
                    entity = {};
                    report = 0;
                    entity['offset'] = report;
                    tango = _closure2_slot1;
                    tango = !tango;
                    entity['animated'] = tango;
                    entity = mike.bind(zulu)(entity);
 50:
                    entity = undefined;
                    return entity;
                }
            };
            golf = config.bind(record)(golf, kilo);
            var _closure2_slot25 = golf;
            config = _closure1_slot5;
            kilo = config.useEffect;
            golf = new Array(1);
            golf[0] = oscar;
            oscar = function() {
                _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                    entity = _closure2_slot5;
                    if(!entity) { _fun00034_ip = 72; continue _fun00033 }
 10:
                    report = _closure1_slot1;
                    oscar = _closure1_slot2;
                    entity = 59;
                    entity = oscar[entity];
                    zulu = undefined;
                    golf = report.bind(zulu)(entity);
                    entity = golf.setGravitySelectedSummary;
                    tango = null;
                    entity = entity.bind(golf)(tango, tango);
                    entity = 55;
                    entity = oscar[entity];
                    zulu = report.bind(zulu)(entity);
                    entity = zulu.setGravitySelectedChannel;
                    entity = entity.bind(zulu)(tango);
 72:
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    entity = 55;
                    zulu = zulu[entity];
                    entity = undefined;
                    tango = tango.bind(entity)(zulu);
                    zulu = tango.setTabFocused;
                    mike = _closure2_slot5;
                    mike = zulu.bind(tango)(mike);
                    return entity;
                }
            };
            oscar = kilo.bind(config)(oscar, golf);
            config = _closure1_slot5;
            kilo = config.useEffect;
            golf = function() {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 55;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.openICYMITab;
                mike = mike.bind(zulu)();
                return entity;
            };
            oscar = new Array(0);
            oscar = kilo.bind(config)(golf, oscar);
            oscar = 60;
            oscar = romeo[oscar];
            oscar = backup.bind(tango)(oscar);
            oscar = oscar.bind(tango)();
            record = oscar.showDot;
            var _closure2_slot26 = record;
            oscar = romeo[entity];
            context = offset.bind(tango)(oscar);
            config = context.useStateFromStores;
            oscar = _closure1_slot11;
            kilo = new Array(1);
            kilo[0] = oscar;
            golf = function() {
                mike = _closure1_slot11;
                entity = mike.notificationItem;
                entity = entity.bind(mike)();
                return entity;
            };
            oscar = new Array(0);
            quebec = config.bind(context)(kilo, golf, oscar);
            var _closure2_slot27 = quebec;
            config = _closure1_slot5;
            kilo = config.useCallback;
            golf = _closure1_slot3;
            oscar = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun00036_ip = 277; continue _fun00035 }
 10:
                        zulu = _closure1_slot1;
                        tango = _closure1_slot2;
                        mike = 54;
                        mike = tango[mike];
                        report = undefined;
                        golf = zulu.bind(report)(mike);
                        tango = golf.track;
                        mike = _closure1_slot16;
                        zulu = mike.FEED_SHOWN;
                        mike = {};
                        verify = _closure1_slot11;
                        options = verify.getLoadId;
                        options = options.bind(verify)();
                        mike['load_id'] = options;
                        options = 'gravity_refresh';
                        mike['home_session_id'] = options;
                        verify = _closure2_slot26;
                        options = 'NoDotShown';
                        if(!verify) { _fun00036_ip = 104; continue _fun00035 }
 98:
                        options = 'DotShown';
 104:
                        mike['variant'] = options;
                        mike = tango.bind(golf)(zulu, mike);
                        zulu = _closure1_slot1;
                        mike = _closure1_slot2;
                        options = 55;
                        mike = mike[options];
                        tango = zulu.bind(report)(mike);
                        zulu = tango.fetchDehydrated;
                        mike = {};
                        golf = true;
                        mike['isReloading'] = golf;
                        mike = zulu.bind(tango)(mike);
                        SaveGenerator(address=158);
 156:
                        return mike;
 158:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(zulu) { _fun00036_ip = 274; continue _fun00035 }
 164:
                        tango = _closure1_slot1;
                        zulu = _closure1_slot2;
                        zulu = zulu[options];
                        tango = tango.bind(report)(zulu);
                        zulu = tango.reloadICYMITab;
                        zulu = zulu.bind(tango)();
                        SaveGenerator(address=195);
 193:
                        return zulu;
 195:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                        if(tango) { _fun00036_ip = 271; continue _fun00035 }
 201:
                        golf = _closure1_slot1;
                        tango = _closure1_slot2;
                        tango = tango[options];
                        golf = golf.bind(report)(tango);
                        tango = golf.getGuildChannelScores;
                        tango = tango.bind(golf)();
                        SaveGenerator(address=232);
 230:
                        return tango;
 232:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                        if(golf) { _fun00036_ip = 268; continue _fun00035 }
 238:
                        golf = _closure1_slot1;
                        oscar = _closure1_slot2;
                        oscar = oscar[options];
                        golf = golf.bind(report)(oscar);
                        oscar = golf.getRecommendedGuilds;
                        oscar = oscar.bind(golf)();
                        return report;
 268:
                        return tango;
 271:
                        return zulu;
 274:
                        return mike;
 277:
                        return entity;
                    }
                };
                return entity;
            };
            golf = golf.bind(tango)(oscar);
            oscar = new Array(1);
            oscar[0] = record;
            lima = kilo.bind(config)(golf, oscar);
            var _closure2_slot28 = lima;
            oscar = romeo[entity];
            config = offset.bind(tango)(oscar);
            kilo = config.useStateFromStores;
            oscar = _closure1_slot10;
            golf = new Array(2);
            golf[0] = oscar;
            oscar = _closure1_slot15;
            golf[1] = oscar;
            oscar = function() {
                _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                    zulu = _closure1_slot10;
                    entity = zulu.filterNSFW;
                    entity = entity.bind(zulu)();
                    if(entity) { _fun00038_ip = 58; continue _fun00037 }
 22:
                    zulu = _closure1_slot15;
                    mike = zulu.getCurrentUser;
                    mike = mike.bind(zulu)();
                    zulu = null;
                    tango = zulu == mike;
                    zulu = undefined;
                    if(tango) { _fun00038_ip = 52; continue _fun00037 }
 46:
                    zulu = mike.nsfwAllowed;
 52:
                    mike = true;
                    entity = mike !== zulu;
 58:
                    return entity;
                }
            };
            oscar = kilo.bind(config)(golf, oscar);
            var _closure2_slot29 = oscar;
            golf = 61;
            golf = romeo[golf];
            kilo = offset.bind(tango)(golf);
            golf = kilo.useEligibleActiveVoiceChannelId;
            context = golf.bind(kilo)();
            var _closure2_slot30 = context;
            golf = 62;
            golf = romeo[golf];
            golf = backup.bind(tango)(golf);
            golf = golf.bind(tango)();
            config = golf.activeConvos;
            var _closure2_slot31 = config;
            record = golf.loading;
            var _closure2_slot32 = record;
            kilo = _closure1_slot5;
            backup = kilo.useMemo;
            golf = new Array(12);
            golf[0] = echo;
            golf[1] = quebec;
            golf[2] = equality;
            golf[3] = verify;
            golf[4] = sierra;
            golf[5] = context;
            golf[6] = record;
            golf[7] = config;
            golf[8] = sequence;
            golf[9] = vacuum;
            golf[10] = source;
            golf[11] = oscar;
            oscar = function() {
                _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                    mike = new Array(0);
                    var _closure3_slot0 = mike;
                    tango = _closure2_slot15;
                    if(!tango) { _fun00040_ip = 30; continue _fun00039 }
 20:
                    oscar = _closure2_slot27;
                    report = null;
                    tango = report != oscar;
 30:
                    if(!tango) { _fun00040_ip = 83; continue _fun00039 }
 33:
                    report = _closure2_slot27;
                    oscar = report.type;
                    options = _closure1_slot0;
                    golf = _closure1_slot2;
                    report = 56;
                    golf = golf[report];
                    report = undefined;
                    report = options.bind(report)(golf);
                    report = report.GravityItemTypes;
                    report = report.CUSTOM_STATUS;
                    tango = oscar === report;
 83:
                    if(!tango) { _fun00040_ip = 216; continue _fun00039 }
 89:
                    report = mike.push;
                    tango = {};
                    oscar = _closure2_slot27;
                    golf = oscar.id;
                    tango['id'] = golf;
                    golf = global;
                    options = golf.Date;
                    golf = options.now;
                    golf = golf.bind(options)();
                    tango['timestamp'] = golf;
                    golf = {};
                    options = 'contentInventory';
                    golf['kind'] = options;
                    offset = _closure1_slot0;
                    verify = _closure1_slot2;
                    options = 41;
                    verify = verify[options];
                    options = undefined;
                    verify = offset.bind(options)(verify);
                    options = verify.customStatusToContentInventoryEntry;
                    options = options.bind(verify)(oscar);
                    options = options.activity;
                    golf['content'] = options;
                    tango['data'] = golf;
                    oscar = oscar.score;
                    tango['score'] = oscar;
                    oscar = true;
                    tango['unread'] = oscar;
                    tango = report.bind(mike)(tango);
 216:
                    tango = _closure2_slot15;
                    if(tango) { _fun00040_ip = 611; continue _fun00039 }
 226:
                    tango = _closure2_slot4;
                    if(!tango) { _fun00040_ip = 248; continue _fun00039 }
 233:
                    report = _closure2_slot6;
                    oscar = report.length;
                    report = 0;
                    tango = oscar > report;
 248:
                    if(!tango) { _fun00040_ip = 338; continue _fun00039 }
 251:
                    report = mike.push;
                    tango = {'id': 'mentions', 'timestamp': 0, 'unread': true};
                    golf = 'mentions';
                    oscar = {};
                    oscar['kind'] = golf;
                    golf = _closure2_slot6;
                    oscar['messages'] = golf;
                    tango['data'] = oscar;
                    tango = report.bind(mike)(tango);
                    report = mike.push;
                    tango = {'id': 'icymi_header', 'timestamp': 0, 'unread': false};
                    oscar = {};
                    golf = 'icymiHeader';
                    oscar['kind'] = golf;
                    tango['data'] = oscar;
                    tango = report.bind(mike)(tango);
 338:
                    tango = _closure2_slot9;
                    if(!tango) { _fun00040_ip = 385; continue _fun00039 }
 345:
                    report = mike.push;
                    tango = {'id': 'edit_custom_status', 'timestamp': 0, 'unread': false};
                    oscar = {};
                    golf = 'editCustomStatus';
                    oscar['kind'] = golf;
                    tango['data'] = oscar;
                    tango = report.bind(mike)(tango);
 385:
                    report = _closure2_slot30;
                    tango = null;
                    if(!(tango != report)) { _fun00040_ip = 458; continue _fun00039 }
 395:
                    report = mike.push;
                    tango = {};
                    oscar = _closure2_slot30;
                    tango['id'] = oscar;
                    oscar = global;
                    golf = oscar.Date;
                    oscar = golf.now;
                    oscar = oscar.bind(golf)();
                    tango['timestamp'] = oscar;
                    oscar = true;
                    tango['unread'] = oscar;
                    oscar = {};
                    golf = 'voice';
                    oscar['kind'] = golf;
                    tango['data'] = oscar;
                    tango = report.bind(mike)(tango);
 458:
                    tango = _closure2_slot32;
                    tango = !tango;
                    if(!tango) { _fun00040_ip = 483; continue _fun00039 }
 468:
                    report = _closure2_slot31;
                    oscar = report.length;
                    report = 0;
                    tango = oscar > report;
 483:
                    if(!tango) { _fun00040_ip = 507; continue _fun00039 }
 486:
                    oscar = _closure2_slot31;
                    report = oscar.forEach;
                    tango = function(argFoo) {
                        tango = argFoo;
                        zulu = _closure3_slot0;
                        mike = zulu.push;
                        entity = {};
                        report = tango.id;
                        entity['id'] = report;
                        report = global;
                        oscar = report.Date;
                        report = oscar.now;
                        report = report.bind(oscar)();
                        entity['timestamp'] = report;
                        report = {};
                        oscar = 'channelSummary';
                        report['kind'] = oscar;
                        oscar = tango.summary;
                        report['topic'] = oscar;
                        entity['data'] = report;
                        tango = tango.score;
                        entity['score'] = tango;
                        tango = true;
                        entity['unread'] = tango;
                        entity = mike.bind(zulu)(entity);
                        entity = undefined;
                        return entity;
                    };
                    tango = report.bind(oscar)(tango);
 507:
                    oscar = _closure2_slot11;
                    report = oscar.forEach;
                    tango = function(argFoo) {
                        _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                            zulu = argFoo;
                            entity = _closure2_slot29;
                            if(!entity) { _fun00042_ip = 27; continue _fun00041 }
 13:
                            tango = _closure1_slot26;
                            mike = undefined;
                            entity = tango.bind(mike)(zulu);
 27:
                            if(entity) { _fun00042_ip = 47; continue _fun00041 }
 30:
                            mike = _closure3_slot0;
                            entity = mike.push;
                            entity = entity.bind(mike)(zulu);
 47:
                            entity = undefined;
                            return entity;
                        }
                    };
                    tango = report.bind(oscar)(tango);
                    tango = _closure2_slot13;
                    if(!tango) { _fun00040_ip = 573; continue _fun00039 }
 535:
                    report = mike.push;
                    tango = {'id': 'end', 'timestamp': 0, 'unread': false};
                    golf = 'end';
                    oscar = {};
                    oscar['kind'] = golf;
                    tango['data'] = oscar;
                    tango = report.bind(mike)(tango);
 573:
                    tango = _closure2_slot12;
                    report = tango.length;
                    tango = 0;
                    if(!(report > tango)) { _fun00040_ip = 649; continue _fun00039 }
 588:
                    tango = _closure2_slot12;
                    zulu = tango.forEach;
                    entity = function(argFoo) {
                        _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
                            zulu = argFoo;
                            entity = _closure2_slot29;
                            if(!entity) { _fun00044_ip = 27; continue _fun00043 }
 13:
                            tango = _closure1_slot26;
                            mike = undefined;
                            entity = tango.bind(mike)(zulu);
 27:
                            if(entity) { _fun00044_ip = 47; continue _fun00043 }
 30:
                            mike = _closure3_slot0;
                            entity = mike.push;
                            entity = entity.bind(mike)(zulu);
 47:
                            entity = undefined;
                            return entity;
                        }
                    };
                    entity = zulu.bind(tango)(entity);
                    _fun00040_ip = 649; continue _fun00039;
 611:
                    zulu = mike.push;
                    entity = {'id': 'loading', 'timestamp': 0, 'unread': false};
                    report = 'loading';
                    tango = {};
                    tango['kind'] = report;
                    entity['data'] = tango;
                    entity = zulu.bind(mike)(entity);
 649:
                    entity = {};
                    entity['data'] = mike;
                    mike = new Array(0);
                    entity['stickyHeaderIndices'] = mike;
                    return entity;
                }
            };
            oscar = backup.bind(kilo)(oscar, golf);
            config = oscar.data;
            var _closure2_slot33 = config;
            source = oscar.stickyHeaderIndices;
            zulu = report - zulu;
            quebec = 32;
            oscar = zulu - quebec;
            zulu = 63;
            zulu = romeo[zulu];
            report = offset.bind(tango)(zulu);
            zulu = report.useMainTabsHeight;
            report = zulu.bind(report)();
            zulu = 24;
            zulu = oscar - zulu;
            variable39 = zulu - report;
            var _closure2_slot34 = variable39;
            oscar = _closure1_slot5;
            report = oscar.useCallback;
            zulu = new Array(2);
            zulu[0] = variable36;
            zulu[1] = mike;
            mike = function(argFoo) {
                _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
                    entity = argFoo;
                    oscar = entity.item;
                    var _closure3_slot0 = oscar;
                    entity = oscar.data;
                    mike = entity.kind;
                    entity = 'channelSummary';
                    if(!(entity !== mike)) { _fun00046_ip = 1227; continue _fun00045 }
 37:
                    entity = oscar.data;
                    mike = entity.kind;
                    entity = 'message';
                    if(!(entity !== mike)) { _fun00046_ip = 854; continue _fun00045 }
 58:
                    entity = oscar.data;
                    mike = entity.kind;
                    entity = 'contentInventory';
                    if(!(entity !== mike)) { _fun00046_ip = 763; continue _fun00045 }
 81:
                    entity = oscar.data;
                    mike = entity.kind;
                    entity = 'voice';
                    if(!(entity !== mike)) { _fun00046_ip = 715; continue _fun00045 }
 102:
                    entity = oscar.data;
                    mike = entity.kind;
                    entity = 'loading';
                    if(!(entity !== mike)) { _fun00046_ip = 670; continue _fun00045 }
 123:
                    entity = oscar.data;
                    mike = entity.kind;
                    entity = 'end';
                    if(!(entity !== mike)) { _fun00046_ip = 619; continue _fun00045 }
 144:
                    entity = oscar.data;
                    mike = entity.kind;
                    entity = 'guildEvent';
                    if(!(entity !== mike)) { _fun00046_ip = 564; continue _fun00045 }
 165:
                    entity = oscar.data;
                    mike = entity.kind;
                    entity = 'recommendedGuilds';
                    if(!(entity !== mike)) { _fun00046_ip = 519; continue _fun00045 }
 188:
                    entity = oscar.data;
                    mike = entity.kind;
                    entity = 'mentions';
                    if(!(entity !== mike)) { _fun00046_ip = 464; continue _fun00045 }
 209:
                    entity = oscar.data;
                    mike = entity.kind;
                    entity = 'icymiHeader';
                    if(!(entity !== mike)) { _fun00046_ip = 425; continue _fun00045 }
 232:
                    entity = oscar.data;
                    mike = entity.kind;
                    entity = 'editCustomStatus';
                    if(!(entity !== mike)) { _fun00046_ip = 386; continue _fun00045 }
 255:
                    entity = oscar.data;
                    zulu = entity.kind;
                    verify = null;
                    mike = 'forumThread';
                    entity = null;
                    if(!(mike === zulu)) { _fun00046_ip = 384; continue _fun00045 }
 279:
                    report = _closure1_slot18;
                    zulu = _closure1_slot0;
                    tango = _closure1_slot2;
                    mike = 76;
                    mike = tango[mike];
                    tango = undefined;
                    mike = zulu.bind(tango)(mike);
                    zulu = mike.GravityForumThreadRow;
                    mike = {};
                    golf = oscar.data;
                    golf = golf.message;
                    mike['message'] = golf;
                    golf = oscar.data;
                    golf = golf.threadChannel;
                    mike['channel'] = golf;
                    yankee = _closure2_slot17;
                    offset = yankee.find;
                    golf = function(argFoo) {
                        entity = argFoo;
                        entity = entity.item;
                        mike = entity.id;
                        entity = _closure3_slot0;
                        entity = entity.id;
                        entity = mike === entity;
                        return entity;
                    };
                    golf = offset.bind(yankee)(golf);
                    golf = verify != golf;
                    mike['visible'] = golf;
                    entity = report.bind(tango)(zulu, mike);
 384:
                    _fun00046_ip = 423; continue _fun00045;
 386:
                    report = _closure1_slot18;
                    zulu = _closure1_slot1;
                    tango = _closure1_slot2;
                    mike = 75;
                    mike = tango[mike];
                    tango = undefined;
                    zulu = zulu.bind(tango)(mike);
                    mike = {};
                    entity = report.bind(tango)(zulu, mike);
 423:
                    _fun00046_ip = 462; continue _fun00045;
 425:
                    report = _closure1_slot18;
                    zulu = _closure1_slot1;
                    tango = _closure1_slot2;
                    mike = 74;
                    mike = tango[mike];
                    tango = undefined;
                    zulu = zulu.bind(tango)(mike);
                    mike = {};
                    entity = report.bind(tango)(zulu, mike);
 462:
                    _fun00046_ip = 517; continue _fun00045;
 464:
                    report = _closure1_slot18;
                    zulu = _closure1_slot1;
                    tango = _closure1_slot2;
                    mike = 73;
                    mike = tango[mike];
                    tango = undefined;
                    zulu = zulu.bind(tango)(mike);
                    mike = {};
                    golf = oscar.data;
                    golf = golf.messages;
                    mike['messages'] = golf;
                    entity = report.bind(tango)(zulu, mike);
 517:
                    _fun00046_ip = 562; continue _fun00045;
 519:
                    report = _closure1_slot18;
                    zulu = _closure1_slot0;
                    tango = _closure1_slot2;
                    mike = 72;
                    mike = tango[mike];
                    tango = undefined;
                    mike = zulu.bind(tango)(mike);
                    zulu = mike.ICYMIServerRecommendationRow;
                    mike = {};
                    entity = report.bind(tango)(zulu, mike);
 562:
                    _fun00046_ip = 617; continue _fun00045;
 564:
                    report = _closure1_slot18;
                    zulu = _closure1_slot1;
                    tango = _closure1_slot2;
                    mike = 71;
                    mike = tango[mike];
                    tango = undefined;
                    zulu = zulu.bind(tango)(mike);
                    mike = {};
                    golf = oscar.data;
                    golf = golf.eventId;
                    mike['eventId'] = golf;
                    entity = report.bind(tango)(zulu, mike);
 617:
                    _fun00046_ip = 668; continue _fun00045;
 619:
                    report = _closure1_slot18;
                    zulu = _closure1_slot1;
                    tango = _closure1_slot2;
                    mike = 70;
                    mike = tango[mike];
                    tango = undefined;
                    zulu = zulu.bind(tango)(mike);
                    mike = {};
                    golf = _closure2_slot2;
                    mike['visible'] = golf;
                    entity = report.bind(tango)(zulu, mike);
 668:
                    _fun00046_ip = 713; continue _fun00045;
 670:
                    report = _closure1_slot18;
                    zulu = _closure1_slot0;
                    tango = _closure1_slot2;
                    mike = 69;
                    mike = tango[mike];
                    tango = undefined;
                    mike = zulu.bind(tango)(mike);
                    zulu = mike.ICYMILoading;
                    mike = {};
                    entity = report.bind(tango)(zulu, mike);
 713:
                    _fun00046_ip = 761; continue _fun00045;
 715:
                    report = _closure1_slot18;
                    zulu = _closure1_slot1;
                    tango = _closure1_slot2;
                    mike = 61;
                    mike = tango[mike];
                    tango = undefined;
                    zulu = zulu.bind(tango)(mike);
                    mike = {};
                    golf = oscar.id;
                    mike['channelId'] = golf;
                    entity = report.bind(tango)(zulu, mike);
 761:
                    _fun00046_ip = 849; continue _fun00045;
 763:
                    report = _closure1_slot18;
                    zulu = _closure1_slot1;
                    tango = _closure1_slot2;
                    mike = 68;
                    mike = tango[mike];
                    tango = undefined;
                    zulu = zulu.bind(tango)(mike);
                    mike = {};
                    offset = _closure2_slot17;
                    verify = offset.find;
                    golf = function(argFoo) {
                        entity = argFoo;
                        entity = entity.item;
                        mike = entity.id;
                        entity = _closure3_slot0;
                        entity = entity.id;
                        entity = mike === entity;
                        return entity;
                    };
                    verify = verify.bind(offset)(golf);
                    golf = null;
                    golf = golf != verify;
                    mike['visible'] = golf;
                    golf = oscar.data;
                    golf = golf.content;
                    mike['content'] = golf;
                    entity = report.bind(tango)(zulu, mike);
 849:
                    _fun00046_ip = 1225; continue _fun00045;
 854:
                    tango = oscar.channelType;
                    report = _closure1_slot0;
                    golf = _closure1_slot2;
                    mike = 42;
                    mike = golf[mike];
                    golf = undefined;
                    mike = report.bind(golf)(mike);
                    mike = mike.ChannelTypes;
                    mike = mike.GUILD_ANNOUNCEMENT;
                    if(!(tango !== mike)) { _fun00046_ip = 1130; continue _fun00045 }
 904:
                    mike = oscar.data;
                    tango = mike.messageContext;
                    yankee = null;
                    report = yankee == tango;
                    mike = undefined;
                    if(report) { _fun00046_ip = 932; continue _fun00045 }
 926:
                    mike = tango.external_content_application_id;
 932:
                    if(!(yankee == mike)) { _fun00046_ip = 1033; continue _fun00045 }
 936:
                    report = _closure1_slot18;
                    tango = _closure1_slot1;
                    verify = _closure1_slot2;
                    mike = 67;
                    mike = verify[mike];
                    tango = tango.bind(golf)(mike);
                    mike = {};
                    verify = oscar.data;
                    verify = verify.message;
                    mike['message'] = verify;
                    verify = oscar.data;
                    verify = verify.messageContext;
                    mike['messageContext'] = verify;
                    romeo = _closure2_slot17;
                    offset = romeo.find;
                    verify = function(argFoo) {
                        entity = argFoo;
                        entity = entity.item;
                        mike = entity.id;
                        entity = _closure3_slot0;
                        entity = entity.id;
                        entity = mike === entity;
                        return entity;
                    };
                    verify = offset.bind(romeo)(verify);
                    verify = yankee != verify;
                    mike['visible'] = verify;
                    mike = report.bind(golf)(tango, mike);
                    _fun00046_ip = 1128; continue _fun00045;
 1033:
                    verify = _closure1_slot18;
                    report = _closure1_slot1;
                    offset = _closure1_slot2;
                    tango = 66;
                    tango = offset[tango];
                    report = report.bind(golf)(tango);
                    tango = {};
                    offset = oscar.data;
                    offset = offset.message;
                    tango['message'] = offset;
                    offset = oscar.data;
                    offset = offset.messageContext;
                    tango['messageContext'] = offset;
                    foxtrot = _closure2_slot17;
                    romeo = foxtrot.find;
                    offset = function(argFoo) {
                        entity = argFoo;
                        entity = entity.item;
                        mike = entity.id;
                        entity = _closure3_slot0;
                        entity = entity.id;
                        entity = mike === entity;
                        return entity;
                    };
                    offset = romeo.bind(foxtrot)(offset);
                    offset = yankee != offset;
                    tango['visible'] = offset;
                    mike = verify.bind(golf)(report, tango);
 1128:
                    _fun00046_ip = 1222; continue _fun00045;
 1130:
                    report = _closure1_slot18;
                    tango = _closure1_slot1;
                    verify = _closure1_slot2;
                    zulu = 65;
                    zulu = verify[zulu];
                    tango = tango.bind(golf)(zulu);
                    zulu = {};
                    verify = oscar.unread;
                    zulu['unread'] = verify;
                    verify = oscar.data;
                    verify = verify.message;
                    zulu['message'] = verify;
                    offset = _closure2_slot17;
                    verify = offset.find;
                    options = function(argFoo) {
                        entity = argFoo;
                        entity = entity.item;
                        mike = entity.id;
                        entity = _closure3_slot0;
                        entity = entity.id;
                        entity = mike === entity;
                        return entity;
                    };
                    verify = verify.bind(offset)(options);
                    options = null;
                    options = options != verify;
                    zulu['visible'] = options;
                    mike = report.bind(golf)(tango, zulu);
 1222:
                    entity = mike;
 1225:
                    _fun00046_ip = 1280; continue _fun00045;
 1227:
                    report = _closure1_slot18;
                    zulu = _closure1_slot1;
                    tango = _closure1_slot2;
                    mike = 64;
                    mike = tango[mike];
                    tango = undefined;
                    zulu = zulu.bind(tango)(mike);
                    mike = {};
                    oscar = oscar.data;
                    oscar = oscar.topic;
                    mike['topic'] = oscar;
                    entity = report.bind(tango)(zulu, mike);
 1280:
                    return entity;
                }
            };
            sequence = report.bind(oscar)(mike, zulu);
            oscar = _closure1_slot5;
            report = oscar.useMemo;
            zulu = function() {
                entity = {};
                mike = 'transparent';
                entity['backgroundColor'] = mike;
                return entity;
            };
            mike = new Array(0);
            context = report.bind(oscar)(zulu, mike);
            oscar = _closure1_slot5;
            report = oscar.useMemo;
            zulu = new Array(3);
            zulu[0] = variable39;
            mike = config.length;
            zulu[1] = mike;
            zulu[2] = variable38;
            mike = function() {
                _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
                    entity = _closure2_slot33;
                    mike = entity.length;
                    entity = 0;
                    mike = mike > entity;
                    entity = undefined;
                    if(!mike) { _fun00048_ip = 44; continue _fun00047 }
 23:
                    mike = {};
                    tango = _closure2_slot34;
                    mike['height'] = tango;
                    zulu = _closure2_slot0;
                    mike['width'] = zulu;
                    entity = mike;
 44:
                    return entity;
                }
            };
            vacuum = report.bind(oscar)(mike, zulu);
            mike = 77;
            mike = romeo[mike];
            zulu = offset.bind(tango)(mike);
            mike = zulu.useClientThemesOverride;
            backup = mike.bind(zulu)();
            entity = romeo[entity];
            oscar = offset.bind(tango)(entity);
            report = oscar.useStateFromStores;
            entity = _closure1_slot11;
            zulu = new Array(1);
            zulu[0] = entity;
            mike = function() {
                mike = _closure1_slot11;
                entity = mike.hasNewContent;
                entity = entity.bind(mike)();
                return entity;
            };
            entity = new Array(0);
            sierra = report.bind(oscar)(zulu, mike, entity);
            zulu = _closure1_slot19;
            mike = _closure1_slot6;
            entity = {};
            oscar = papa.containerInPanels;
            report = new Array(2);
            report[0] = oscar;
            oscar = papa.containerBackground;
            report[1] = oscar;
            entity['style'] = report;
            golf = _closure1_slot18;
            oscar = _closure1_slot25;
            report = {};
            options = romeo[options];
            options = offset.bind(tango)(options);
            options = options.GravityUnreadMentionsBadgeVariant;
            offset = options.RED_BADGE;
            options = 0;
            if(!(yankee === offset)) { _fun00010_ip = 1859; continue _fun00009 }
 1845:
            offset = sizing.length;
            verify = verify.length;
            options = offset + verify;
 1859:
            report['numUnreadMentions'] = options;
            oscar = golf.bind(tango)(oscar, report);
            report = new Array(2);
            report[0] = oscar;
            options = _closure1_slot18;
            equality = _closure1_slot0;
            record = _closure1_slot2;
            oscar = 78;
            oscar = record[oscar];
            oscar = equality.bind(tango)(oscar);
            oscar = oscar.ICYMIContext;
            golf = oscar.Provider;
            oscar = {};
            verify = {};
            verify['width'] = variable38;
            oscar['value'] = verify;
            yankee = _closure1_slot19;
            offset = _closure1_slot6;
            verify = {};
            kilo = papa.flashListWrapper;
            romeo = new Array(3);
            romeo[0] = kilo;
            kilo = {};
            kilo['height'] = variable39;
            kilo['width'] = variable38;
            variable38 = 'auto';
            kilo['marginHorizontal'] = variable38;
            romeo[1] = kilo;
            romeo[2] = backup;
            verify['style'] = romeo;
            kilo = _closure1_slot18;
            backup = _closure1_slot1;
            romeo = 79;
            romeo = record[romeo];
            backup = backup.bind(tango)(romeo);
            romeo = {};
            variable37 = function() { // Original name: onPress
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 21;
                mike = mike[entity];
                entity = undefined;
                report = zulu.bind(entity)(mike);
                tango = report.trackItemInteraction;
                zulu = 'refresh_button';
                mike = 'press_refresh_button';
                mike = tango.bind(report)(zulu, zulu, mike);
                zulu = _closure2_slot28;
                zulu = zulu.bind(entity)();
                mike = _closure2_slot25;
                mike = mike.bind(entity)();
                return entity;
            };
            romeo['onPress'] = variable37;
            romeo['isRefreshing'] = target;
            romeo['newUnreadMentions'] = sizing;
            backup = kilo.bind(tango)(backup, romeo);
            romeo = new Array(2);
            romeo[0] = backup;
            sizing = _closure1_slot18;
            backup = 80;
            backup = record[backup];
            backup = equality.bind(tango)(backup);
            kilo = backup.FlashList;
            backup = {};
            backup['ref'] = whiskey;
            whiskey = !echo;
            backup['scrollEnabled'] = whiskey;
            whiskey = {};
            whiskey['endVisible'] = variable36;
            backup['extraData'] = whiskey;
            backup['contentContainerStyle'] = context;
            context = record[quebec];
            context = equality.bind(tango)(context);
            whiskey = context.intl;
            context = whiskey.string;
            record = record[quebec];
            record = equality.bind(tango)(record);
            record = record.t;
            record = record.OIgYlZ;
            record = context.bind(whiskey)(record);
            backup['accessibilityLabel'] = record;
            backup['data'] = config;
            backup['refreshing'] = target;
            context = _closure1_slot18;
            record = _closure1_slot7;
            config = {};
            config['onRefresh'] = lima;
            config['refreshing'] = target;
            papa = papa.refreshing;
            papa = papa.color;
            config['tintColor'] = papa;
            papa = {};
            target = result;
            if(!sierra) { _fun00010_ip = 2196; continue _fun00009 }
 2194:
            target = 0;
 2196:
            papa['opacity'] = target;
            config['style'] = papa;
            config = context.bind(tango)(record, config);
            backup['refreshControl'] = config;
            config = 3;
            backup['onEndReachedThreshold'] = config;
            config = _closure1_slot31;
            backup['onEndReached'] = config;
            config = _closure1_slot34;
            backup['keyExtractor'] = config;
            backup['renderItem'] = sequence;
            sequence = _closure1_slot21;
            backup['estimatedItemSize'] = sequence;
            backup['estimatedListSize'] = vacuum;
            vacuum = _closure1_slot32;
            backup['getItemType'] = vacuum;
            vacuum = _closure1_slot0;
            sequence = _closure1_slot2;
            control = 81;
            control = sequence[control];
            vacuum = vacuum.bind(tango)(control);
            control = vacuum.isAndroid;
            control = control.bind(vacuum)();
            control = 100;
            backup['drawDistance'] = control;
            backup['stickyHeaderIndices'] = source;
            source = {'waitForInteraction': false, 'viewAreaCoveragePercentThreshold': 100, 'minimumViewTime': 50};
            backup['viewabilityConfig'] = source;
            backup['onViewableItemsChanged'] = update;
            if(echo) { _fun00010_ip = 2341; continue _fun00009 }
 2338:
            result = output;
 2341:
            foxtrot = foxtrot.HermesInternal;
            output = foxtrot.concat;
            foxtrot = 'Version-';
            foxtrot = output.bind(foxtrot)(result);
            foxtrot = sizing.bind(tango)(kilo, backup, foxtrot);
            romeo[1] = foxtrot;
            verify['children'] = romeo;
            verify = yankee.bind(tango)(offset, verify);
            oscar['children'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot33 = entity;
    entity = function(argFoo) { // Original name: keyExtractor
        entity = argFoo;
        entity = entity.id;
        return entity;
    };
    var _closure1_slot34 = entity;
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
    backup = 1;
    tango = oscar[backup];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    golf = oscar[tango];
    tango = argCorge;
    options = tango.bind(entity)(golf);
    var _closure1_slot5 = options;
    tango = 3;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    verify = golf.View;
    var _closure1_slot6 = verify;
    golf = golf.RefreshControl;
    var _closure1_slot7 = golf;
    golf = 4;
    golf = oscar[golf];
    golf = romeo.bind(entity)(golf);
    var _closure1_slot8 = golf;
    golf = 5;
    golf = oscar[golf];
    golf = romeo.bind(entity)(golf);
    var _closure1_slot9 = golf;
    golf = 6;
    golf = oscar[golf];
    golf = romeo.bind(entity)(golf);
    var _closure1_slot10 = golf;
    golf = 7;
    golf = oscar[golf];
    golf = romeo.bind(entity)(golf);
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
    golf = report.bind(entity)(golf);
    foxtrot = golf.ICYMI_MARGIN;
    golf = 13;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    golf = golf.AnalyticEvents;
    var _closure1_slot16 = golf;
    golf = 14;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    golf = golf.ContentDismissActionType;
    var _closure1_slot17 = golf;
    golf = 15;
    verify = oscar[golf];
    verify = report.bind(entity)(verify);
    verify = verify.jsx;
    var _closure1_slot18 = verify;
    verify = oscar[golf];
    verify = report.bind(entity)(verify);
    verify = verify.jsxs;
    var _closure1_slot19 = verify;
    verify = oscar[golf];
    verify = report.bind(entity)(verify);
    verify = verify.Fragment;
    var _closure1_slot20 = verify;
    verify = 200;
    var _closure1_slot21 = verify;
    var _closure1_slot22 = tango;
    tango = 16;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    tango = tango.Millis;
    tango = tango.MINUTE;
    tango = golf * tango;
    var _closure1_slot23 = tango;
    tango = 17;
    tango = oscar[tango];
    verify = report.bind(entity)(tango);
    golf = verify.createStyles;
    tango = {};
    offset = {'flex': 1, 'flexShrink': 1, 'flexGrow': 1};
    tango['container'] = offset;
    offset = {};
    yankee = 18;
    kilo = oscar[yankee];
    kilo = romeo.bind(entity)(kilo);
    kilo = kilo.colors;
    kilo = kilo.BG_BASE_TERTIARY;
    offset['backgroundColor'] = kilo;
    kilo = oscar[yankee];
    kilo = romeo.bind(entity)(kilo);
    kilo = kilo.spacing;
    kilo = kilo.PX_8;
    offset['paddingHorizontal'] = kilo;
    kilo = 'hidden';
    offset['overflow'] = kilo;
    offset['flex'] = backup;
    tango['containerOuterTablet'] = offset;
    offset = {'flex': 1, 'flexShrink': 1, 'flexGrow': 1, 'overflow': 'hidden'};
    backup = oscar[yankee];
    backup = romeo.bind(entity)(backup);
    backup = backup.radii;
    backup = backup.sm;
    offset['borderTopLeftRadius'] = backup;
    backup = oscar[yankee];
    backup = romeo.bind(entity)(backup);
    backup = backup.radii;
    backup = backup.sm;
    offset['borderTopRightRadius'] = backup;
    tango['containerInPanels'] = offset;
    offset = {};
    backup = oscar[yankee];
    backup = romeo.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BG_BASE_PRIMARY;
    offset['backgroundColor'] = backup;
    tango['containerBackground'] = offset;
    offset = {'backgroundColor': null, 'minHeight': 2, 'flex': 1};
    backup = oscar[yankee];
    backup = romeo.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BG_BASE_PRIMARY;
    offset['backgroundColor'] = backup;
    tango['flashListWrapper'] = offset;
    offset = {};
    backup = oscar[yankee];
    backup = romeo.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.INTERACTIVE_NORMAL;
    offset['color'] = backup;
    tango['refreshing'] = offset;
    offset = {'backgroundColor': null, 'position': 'relative', 'overflow': 'hidden', 'width': '100%'};
    backup = oscar[yankee];
    backup = romeo.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BG_BASE_PRIMARY;
    offset['backgroundColor'] = backup;
    tango['header'] = offset;
    offset = {};
    offset['marginRight'] = foxtrot;
    backup = oscar[yankee];
    backup = romeo.bind(entity)(backup);
    backup = backup.spacing;
    backup = backup.PX_32;
    offset['height'] = backup;
    backup = oscar[yankee];
    backup = romeo.bind(entity)(backup);
    backup = backup.spacing;
    backup = backup.PX_32;
    offset['width'] = backup;
    backup = 'center';
    offset['alignItems'] = backup;
    offset['justifyContent'] = backup;
    backup = oscar[yankee];
    backup = romeo.bind(entity)(backup);
    backup = backup.radii;
    backup = backup.lg;
    offset['borderRadius'] = backup;
    backup = oscar[yankee];
    backup = romeo.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.REDESIGN_BUTTON_OVERLAY_ALPHA_BACKGROUND;
    offset['backgroundColor'] = backup;
    tango['headerClose'] = offset;
    offset = {'height': 56, 'marginHorizontal': null, 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'space-between'};
    offset['marginHorizontal'] = foxtrot;
    tango['headerTitle'] = offset;
    offset = {'flexDirection': 'row', 'alignItems': 'center', 'gap': 4};
    tango['headerText'] = offset;
    offset = {'flexDirection': 'row', 'alignItems': 'center'};
    foxtrot = oscar[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.spacing;
    foxtrot = foxtrot.PX_12;
    offset['gap'] = foxtrot;
    tango['headerActions'] = offset;
    offset = {'height': 18, 'width': 18};
    foxtrot = oscar[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.radii;
    foxtrot = foxtrot.round;
    offset['borderRadius'] = foxtrot;
    tango['notificationBadge'] = offset;
    offset = {'flex': 1, 'justifyContent': 'center'};
    foxtrot = oscar[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.spacing;
    foxtrot = foxtrot.PX_96;
    offset['paddingTop'] = foxtrot;
    tango['loading'] = offset;
    offset = {'position': 'absolute', 'bottom': 0, 'left': 0, 'right': 0, 'backgroundColor': null, 'height': 1};
    yankee = oscar[yankee];
    yankee = romeo.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.BACKGROUND_MODIFIER_ACCENT;
    offset['backgroundColor'] = yankee;
    tango['headerBorder'] = offset;
    tango = golf.bind(verify)(tango);
    var _closure1_slot24 = tango;
    golf = options.memo;
    tango = function(argFoo) {
        _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
            entity = argFoo;
            echo = entity.numUnreadMentions;
            entity = _closure1_slot24;
            tango = undefined;
            verify = entity.bind(tango)();
            golf = _closure1_slot1;
            backup = _closure1_slot2;
            entity = 34;
            entity = backup[entity];
            entity = golf.bind(tango)(entity);
            yankee = entity.bind(tango)();
            foxtrot = _closure1_slot0;
            entity = 35;
            entity = backup[entity];
            zulu = foxtrot.bind(tango)(entity);
            mike = zulu.useIsNotificationsTabMerged;
            entity = {};
            report = 'ICYMIHeader';
            entity['location'] = report;
            entity = mike.bind(zulu)(entity);
            kilo = entity.enabled;
            zulu = _closure1_slot19;
            entity = 36;
            entity = backup[entity];
            entity = foxtrot.bind(tango)(entity);
            mike = entity.SafeAreaPaddingView;
            entity = {};
            report = !yankee;
            entity['top'] = report;
            report = verify.header;
            entity['style'] = report;
            options = _closure1_slot18;
            report = 37;
            report = backup[report];
            golf = golf.bind(tango)(report);
            report = {'absolute': true, 'wide': true, 'tall': true, 'mix': true};
            offset = {};
            romeo = 38;
            sizing = backup[romeo];
            sizing = foxtrot.bind(tango)(sizing);
            sizing = sizing.OverlayOpacity;
            sizing = sizing.LEVEL_7;
            offset['dark'] = sizing;
            romeo = backup[romeo];
            romeo = foxtrot.bind(tango)(romeo);
            romeo = romeo.OverlayOpacity;
            romeo = romeo.LEVEL_8;
            offset['light'] = romeo;
            report['mixAmount'] = offset;
            golf = options.bind(tango)(golf, report);
            report = new Array(3);
            report[0] = golf;
            offset = _closure1_slot19;
            options = _closure1_slot6;
            golf = {};
            romeo = verify.headerTitle;
            golf['style'] = romeo;
            romeo = null;
            if(!yankee) { _fun00050_ip = 450; continue _fun00049 }
 264:
            backup = _closure1_slot18;
            output = _closure1_slot0;
            control = _closure1_slot2;
            yankee = 33;
            yankee = control[yankee];
            yankee = output.bind(tango)(yankee);
            foxtrot = yankee.PressableOpacity;
            yankee = {};
            sizing = verify.headerClose;
            yankee['style'] = sizing;
            sizing = 32;
            result = control[sizing];
            result = output.bind(tango)(result);
            update = result.intl;
            result = update.string;
            sizing = control[sizing];
            sizing = output.bind(tango)(sizing);
            sizing = sizing.t;
            sizing = sizing.13/7kZ;
            sizing = result.bind(update)(sizing);
            yankee['accessibilityLabel'] = sizing;
            sizing = 39;
            sizing = control[sizing];
            sizing = output.bind(tango)(sizing);
            sizing = sizing.goBack;
            yankee['onPress'] = sizing;
            result = _closure1_slot18;
            sizing = 40;
            sizing = control[sizing];
            sizing = output.bind(tango)(sizing);
            output = sizing.XSmallIcon;
            sizing = {};
            source = _closure1_slot1;
            update = 18;
            update = control[update];
            update = source.bind(tango)(update);
            update = update.colors;
            update = update.WHITE;
            sizing['color'] = update;
            sizing = result.bind(tango)(output, sizing);
            yankee['children'] = sizing;
            romeo = backup.bind(tango)(foxtrot, yankee);
 450:
            yankee = new Array(3);
            yankee[0] = romeo;
            backup = _closure1_slot18;
            foxtrot = _closure1_slot30;
            romeo = {};
            romeo['isPressable'] = kilo;
            romeo = backup.bind(tango)(foxtrot, romeo);
            yankee[1] = romeo;
            backup = _closure1_slot19;
            foxtrot = _closure1_slot6;
            romeo = {};
            sizing = verify.headerActions;
            romeo['style'] = sizing;
            result = _closure1_slot18;
            if(kilo) { _fun00050_ip = 524; continue _fun00049 }
 510:
            sizing = _closure1_slot29;
            kilo = {};
            sizing = result.bind(tango)(sizing, kilo);
            _fun00050_ip = 541; continue _fun00049;
 524:
            output = _closure1_slot28;
            kilo = {};
            kilo['numUnreadMentions'] = echo;
            sizing = result.bind(tango)(output, kilo);
 541:
            kilo = new Array(2);
            kilo[0] = sizing;
            result = _closure1_slot18;
            output = _closure1_slot27;
            sizing = {};
            sizing = result.bind(tango)(output, sizing);
            kilo[1] = sizing;
            romeo['children'] = kilo;
            romeo = backup.bind(tango)(foxtrot, romeo);
            yankee[2] = romeo;
            golf['children'] = yankee;
            golf = offset.bind(tango)(options, golf);
            report[1] = golf;
            options = _closure1_slot18;
            golf = _closure1_slot6;
            oscar = {};
            verify = verify.headerBorder;
            oscar['style'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[2] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    tango = golf.bind(options)(tango);
    var _closure1_slot25 = tango;
    tango = 84;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/tabs/gravity/ICYMI.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: ICYMITab
        _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
            zulu = _closure1_slot0;
            oscar = _closure1_slot2;
            entity = 46;
            report = oscar[entity];
            tango = undefined;
            verify = zulu.bind(tango)(report);
            options = verify.useStateFromStores;
            report = _closure1_slot9;
            golf = new Array(1);
            golf[0] = report;
            report = function() {
                entity = _closure1_slot9;
                entity = entity.gradientPreset;
                return entity;
            };
            foxtrot = options.bind(verify)(golf, report);
            entity = oscar[entity];
            golf = zulu.bind(tango)(entity);
            report = golf.useStateFromStores;
            entity = _closure1_slot12;
            zulu = new Array(1);
            zulu[0] = entity;
            entity = function() {
                mike = _closure1_slot12;
                entity = mike.getId;
                entity = entity.bind(mike)();
                return entity;
            };
            sizing = report.bind(golf)(zulu, entity);
            report = _closure1_slot1;
            entity = 34;
            entity = oscar[entity];
            entity = report.bind(tango)(entity);
            entity = entity.bind(tango)();
            var _closure2_slot0 = entity;
            zulu = 45;
            zulu = oscar[zulu];
            zulu = report.bind(tango)(zulu);
            zulu = zulu.bind(tango)();
            golf = zulu.top;
            var _closure2_slot1 = golf;
            zulu = _closure1_slot24;
            options = zulu.bind(tango)();
            var _closure2_slot2 = options;
            oscar = _closure1_slot5;
            report = oscar.useMemo;
            zulu = new Array(3);
            zulu[0] = options;
            zulu[1] = entity;
            zulu[2] = golf;
            mike = function() {
                _fun00053: for(var _fun00054_ip = 0; ; ) switch(_fun00054_ip) {
 0:
                    mike = _closure2_slot0;
                    entity = undefined;
                    if(!mike) { _fun00054_ip = 48; continue _fun00053 }
 12:
                    mike = _closure2_slot2;
                    zulu = mike.containerOuterTablet;
                    mike = new Array(2);
                    mike[0] = zulu;
                    zulu = {};
                    tango = _closure2_slot1;
                    zulu['paddingTop'] = tango;
                    mike[1] = zulu;
                    entity = mike;
 48:
                    return entity;
                }
            };
            options = report.bind(oscar)(mike, zulu);
            if(entity) { _fun00052_ip = 209; continue _fun00051 }
 198:
            entity = _closure1_slot5;
            golf = entity.Fragment;
            _fun00052_ip = 213; continue _fun00051;
 209:
            golf = _closure1_slot6;
 213:
            zulu = _closure1_slot18;
            verify = _closure1_slot1;
            backup = _closure1_slot2;
            entity = 82;
            entity = backup[entity];
            mike = verify.bind(tango)(entity);
            entity = {};
            oscar = _closure1_slot19;
            report = {};
            report['style'] = options;
            offset = _closure1_slot18;
            options = 37;
            options = backup[options];
            verify = verify.bind(tango)(options);
            options = {};
            yankee = true;
            options['absolute'] = yankee;
            verify = offset.bind(tango)(verify, options);
            options = new Array(2);
            options[0] = verify;
            yankee = _closure1_slot18;
            offset = _closure1_slot0;
            verify = 83;
            verify = backup[verify];
            verify = offset.bind(tango)(verify);
            offset = verify.ThemeContextProvider;
            verify = {};
            verify['gradient'] = foxtrot;
            kilo = _closure1_slot18;
            backup = _closure1_slot33;
            romeo = global;
            romeo = romeo.HermesInternal;
            foxtrot = romeo.concat;
            romeo = '';
            foxtrot = foxtrot.bind(romeo)(sizing);
            romeo = {};
            romeo = kilo.bind(tango)(backup, romeo, foxtrot);
            verify['children'] = romeo;
            verify = yankee.bind(tango)(offset, verify);
            options[1] = verify;
            report['children'] = options;
            report = oscar.bind(tango)(golf, report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['ICYMITab'] = mike;
    return entity;
})();