// app/modules/user_settings/PreloadedUserSettingsMigrations.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    tango = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tango;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: migrateDismissibleContent
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            oscar = argBar;
            entity = mike.userContent;
            zulu = null;
            if(!(zulu == entity)) { _fun00002_ip = 77; continue _fun00001 }
 18:
            entity = {};
            tango = global;
            tango = tango.Uint8Array;
            report = tango.prototype;
            report = Object.create(report, {constructor: {value: tango}});
            yankee = report;
            tango = new yankee[tango](offset);
            tango = tango instanceof Object ? tango : report;
            entity['dismissedContents'] = tango;
            tango = '0';
            entity['lastReceivedChangelogId'] = tango;
            tango = {};
            entity['recurringDismissibleContentStates'] = tango;
            mike['userContent'] = entity;
 77:
            entity = mike.userContent;
            entity = entity.dismissedContents;
            if(!(zulu == entity)) { _fun00002_ip = 133; continue _fun00001 }
 93:
            zulu = mike.userContent;
            entity = global;
            entity = entity.Uint8Array;
            tango = entity.prototype;
            tango = Object.create(tango, {constructor: {value: entity}});
            yankee = tango;
            entity = new yankee[entity](offset);
            entity = entity instanceof Object ? entity : tango;
            zulu['dismissedContents'] = entity;
 133:
            zulu = _closure1_slot0;
            entity = _closure1_slot2;
            options = 3;
            entity = entity[options];
            golf = undefined;
            report = zulu.bind(golf)(entity);
            zulu = report.hasBit;
            entity = mike.userContent;
            entity = entity.dismissedContents;
            zulu = zulu.bind(report)(entity, oscar);
            entity = false;
            if(zulu) { _fun00002_ip = 242; continue _fun00001 }
 187:
            zulu = mike.userContent;
            report = _closure1_slot0;
            tango = _closure1_slot2;
            tango = tango[options];
            report = report.bind(golf)(tango);
            tango = report.addBit;
            mike = mike.userContent;
            mike = mike.dismissedContents;
            mike = tango.bind(report)(mike, oscar);
            zulu['dismissedContents'] = mike;
            entity = true;
 242:
            return entity;
        }
    };
    var _closure1_slot6 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: migrateHotspotLocation
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 4;
            entity = tango[entity];
            report = undefined;
            entity = zulu.bind(report)(entity);
            tango = entity.HotspotStore;
            zulu = tango.hasHiddenHotspot;
            entity = argBar;
            entity = zulu.bind(tango)(entity);
            zulu = !entity;
            entity = !zulu;
            if(zulu) { _fun00004_ip = 70; continue _fun00003 }
 54:
            tango = _closure1_slot6;
            zulu = argFoo;
            mike = argBaz;
            entity = tango.bind(report)(zulu, mike);
 70:
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = global;
    verify = entity.Object;
    golf = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = tango.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.ChannelNoticeTypes;
    var _closure1_slot4 = mike;
    mike = 2;
    tango = oscar[mike];
    tango = report.bind(entity)(tango);
    tango = tango.MULTIACCOUNT_TOOLTIP_SEEN_KEY;
    var _closure1_slot5 = tango;
    tango = {};
    tango['version'] = mike;
    mike = function(argFoo) { // Original name: run
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            output = argFoo;
            mike = {};
            entity = 'Recent Mentions';
            mike['Mentions'] = entity;
            entity = 'Inbox';
            mike['Unreads'] = entity;
            entity = output.inbox;
            sizing = null;
            if(!(sizing == entity)) { _fun00006_ip = 470; continue _fun00005 }
 48:
            report = _closure1_slot0;
            entity = _closure1_slot2;
            golf = 5;
            zulu = entity[golf];
            backup = undefined;
            zulu = report.bind(backup)(zulu);
            tango = zulu.InboxSettings;
            zulu = tango.create;
            zulu = zulu.bind(tango)();
            output['inbox'] = zulu;
            tango = 6;
            entity = entity[tango];
            entity = report.bind(backup)(entity);
            options = entity.Storage;
            oscar = options.get;
            report = 'seenInboxTutorial';
            entity = false;
            report = oscar.bind(options)(report, entity);
            if(!report) { _fun00006_ip = 144; continue _fun00005 }
 134:
            report = true;
            zulu['viewedTutorial'] = report;
            entity = true;
 144:
            oscar = _closure1_slot0;
            report = _closure1_slot2;
            report = report[tango];
            report = oscar.bind(backup)(report);
            options = report.Storage;
            oscar = options.get;
            report = 'recentsButtonTab2';
            report = oscar.bind(options)(report);
            if(!(sizing != report)) { _fun00006_ip = 265; continue _fun00005 }
 187:
            mike = mike.Mentions;
            if(!(report !== mike)) { _fun00006_ip = 228; continue _fun00005 }
 197:
            report = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[golf];
            mike = report.bind(backup)(mike);
            mike = mike.InboxTab;
            mike = mike.UNREADS;
            _fun00006_ip = 257; continue _fun00005;
 228:
            oscar = _closure1_slot0;
            report = _closure1_slot2;
            report = report[golf];
            report = oscar.bind(backup)(report);
            report = report.InboxTab;
            mike = report.MENTIONS;
 257:
            zulu['currentTab'] = mike;
            entity = true;
 265:
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[tango];
            mike = zulu.bind(backup)(mike);
            tango = mike.Storage;
            zulu = tango.get;
            mike = 'unread-messages-collapsed-channels';
            foxtrot = zulu.bind(tango)(mike);
            if(!(sizing == foxtrot)) { _fun00006_ip = 310; continue _fun00005 }
 308:
            foxtrot = {};
 310:
            yankee = foxtrot;
            oscar = 7;
            report = '0';
            tango = entity;
            zulu = undefined;
            mike = undefined;
            entity = tango;
            for(options in yankee)
 343:
            {
                update = tango;
                entity = update;
 358:
                control = options;
                echo = foxtrot[control];
                tango = update;
                if(!echo) { _fun00006_ip = 343; continue _fun00005 }
 371:
                source = _closure1_slot3;
                echo = source.getChannel;
                echo = echo.bind(source)(control);
                tango = update;
                mike = echo;
                if(sizing == mike) { _fun00006_ip = 343; continue _fun00005 }
 395:
                source = _closure1_slot0;
                update = _closure1_slot2;
                update = update[oscar];
                sequence = source.bind(backup)(update);
                vacuum = sequence.mutateUserChannelSettings;
                zulu = echo.guild_id;
                update = sizing != zulu;
                control = report;
                if(!update) { _fun00006_ip = 436; continue _fun00005 }
 433:
                control = zulu;
 436:
                record = echo.id;
                config = function(argFoo) {
                    mike = true;
                    entity = argFoo;
                    entity['collapsedInInbox'] = mike;
                    entity = undefined;
                    return entity;
                };
                target = sequence;
                papa = output;
                context = control;
                update = target[vacuum](papa, context, record, config, sequence);
                tango = true;
                mike = echo;
                _fun00006_ip = 343; continue _fun00005;
            }
 468:
            return entity;
 470:
            entity = false;
            return entity;
        }
    };
    tango['run'] = mike;
    mike = function() { // Original name: cleanup
        zulu = _closure1_slot0;
        tango = _closure1_slot2;
        mike = 6;
        report = tango[mike];
        entity = undefined;
        report = zulu.bind(entity)(report);
        golf = report.Storage;
        oscar = golf.remove;
        report = 'seenInboxTutorial';
        report = oscar.bind(golf)(report);
        report = tango[mike];
        report = zulu.bind(entity)(report);
        golf = report.Storage;
        oscar = golf.remove;
        report = 'recentsButtonTab2';
        report = oscar.bind(golf)(report);
        mike = tango[mike];
        mike = zulu.bind(entity)(mike);
        tango = mike.Storage;
        zulu = tango.remove;
        mike = 'unread-messages-collapsed-channels';
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    tango['cleanup'] = mike;
    mike = new Array(18);
    mike[0] = tango;
    tango = {};
    golf = 3;
    tango['version'] = golf;
    golf = function(argFoo) { // Original name: run
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zulu = argFoo;
            mike = _closure1_slot1;
            report = _closure1_slot2;
            entity = 8;
            entity = report[entity];
            golf = undefined;
            entity = mike.bind(golf)(entity);
            oscar = entity.PersistedStore;
            report = oscar.migrateAndReadStoreState;
            mike = new Array(1);
            entity = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = {};
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 6;
                    zulu = zulu[mike];
                    mike = undefined;
                    mike = tango.bind(mike)(zulu);
                    tango = mike.Storage;
                    zulu = tango.get;
                    mike = 'EmojiDiversitySurrogate';
                    mike = zulu.bind(tango)(mike);
                    if(mike) { _fun00010_ip = 56; continue _fun00009 }
 52:
                    mike = '';
 56:
                    entity['diversitySurrogate'] = mike;
                    return entity;
                }
            };
            mike[0] = entity;
            entity = 'EmojiStore';
            entity = report.bind(oscar)(entity, mike);
            mike = entity.state;
            oscar = null;
            if(!(oscar != mike)) { _fun00008_ip = 260; continue _fun00007 }
 83:
            entity = mike.diversitySurrogate;
            report = oscar != entity;
            if(!report) { _fun00008_ip = 110; continue _fun00007 }
 96:
            options = mike.diversitySurrogate;
            entity = '';
            report = entity !== options;
 110:
            entity = false;
            if(!report) { _fun00008_ip = 258; continue _fun00007 }
 118:
            report = zulu.textAndImages;
            if(!(oscar == report)) { _fun00008_ip = 169; continue _fun00007 }
 128:
            options = _closure1_slot0;
            verify = _closure1_slot2;
            report = 5;
            report = verify[report];
            report = options.bind(golf)(report);
            options = report.TextAndImagesSettings;
            report = options.create;
            report = report.bind(options)();
            zulu['textAndImages'] = report;
 169:
            report = zulu.textAndImages;
            report = report.diversitySurrogate;
            if(!(oscar == report)) { _fun00008_ip = 232; continue _fun00007 }
 185:
            report = zulu.textAndImages;
            oscar = _closure1_slot0;
            options = _closure1_slot2;
            tango = 9;
            tango = options[tango];
            tango = oscar.bind(golf)(tango);
            oscar = tango.StringValue;
            tango = oscar.create;
            tango = tango.bind(oscar)();
            report['diversitySurrogate'] = tango;
 232:
            zulu = zulu.textAndImages;
            zulu = zulu.diversitySurrogate;
            mike = mike.diversitySurrogate;
            zulu['value'] = mike;
            entity = true;
 258:
            return entity;
 260:
            entity = false;
            return entity;
        }
    };
    tango['run'] = golf;
    golf = function() { // Original name: cleanup
        entity = undefined;
        return entity;
    };
    tango['cleanup'] = golf;
    mike[1] = tango;
    tango = {};
    golf = 4;
    tango['version'] = golf;
    golf = function(argFoo) { // Original name: run
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 6;
            entity = tango[entity];
            report = undefined;
            entity = zulu.bind(report)(entity);
            tango = entity.Storage;
            zulu = tango.get;
            entity = 'HAS_SEEN_HUB_UPSELL';
            zulu = zulu.bind(tango)(entity);
            entity = true;
            zulu = entity === zulu;
            if(zulu) { _fun00012_ip = 114; continue _fun00011 }
 56:
            golf = _closure1_slot0;
            options = _closure1_slot2;
            entity = 4;
            tango = options[entity];
            tango = golf.bind(report)(tango);
            oscar = tango.HotspotStore;
            tango = oscar.hasHiddenHotspot;
            entity = options[entity];
            entity = golf.bind(report)(entity);
            entity = entity.HotspotLocations;
            entity = entity.HUB_SECOND_EMAIL_CONNECTION_UPSELL;
            zulu = tango.bind(oscar)(entity);
 114:
            entity = false;
            if(!zulu) { _fun00012_ip = 164; continue _fun00011 }
 119:
            tango = _closure1_slot6;
            zulu = _closure1_slot0;
            oscar = _closure1_slot2;
            mike = 10;
            mike = oscar[mike];
            mike = zulu.bind(report)(mike);
            mike = mike.DismissibleContent;
            zulu = mike.HUB_WAITLIST_UPSELL;
            mike = argFoo;
            entity = tango.bind(report)(mike, zulu);
 164:
            return entity;
        }
    };
    tango['run'] = golf;
    golf = function() { // Original name: cleanup
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 6;
        mike = mike[entity];
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        tango = mike.Storage;
        zulu = tango.remove;
        mike = 'HAS_SEEN_HUB_UPSELL';
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    tango['cleanup'] = golf;
    mike[2] = tango;
    tango = {};
    golf = 5;
    tango['version'] = golf;
    golf = function(argFoo) { // Original name: run
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            zulu = argFoo;
            mike = zulu.textAndImages;
            entity = null;
            if(!(entity == mike)) { _fun00014_ip = 55; continue _fun00013 }
 15:
            oscar = _closure1_slot0;
            report = _closure1_slot2;
            tango = 5;
            report = report[tango];
            tango = undefined;
            tango = oscar.bind(tango)(report);
            report = tango.TextAndImagesSettings;
            tango = report.create;
            mike = tango.bind(report)();
 55:
            zulu['textAndImages'] = mike;
            mike = zulu.notifications;
            if(!(entity == mike)) { _fun00014_ip = 111; continue _fun00013 }
 71:
            oscar = _closure1_slot0;
            report = _closure1_slot2;
            tango = 5;
            report = report[tango];
            tango = undefined;
            tango = oscar.bind(tango)(report);
            report = tango.NotificationSettings;
            tango = report.create;
            mike = tango.bind(report)();
 111:
            zulu['notifications'] = mike;
            mike = zulu.privacy;
            if(!(entity == mike)) { _fun00014_ip = 167; continue _fun00013 }
 127:
            oscar = _closure1_slot0;
            report = _closure1_slot2;
            tango = 5;
            report = report[tango];
            tango = undefined;
            tango = oscar.bind(tango)(report);
            report = tango.PrivacySettings;
            tango = report.create;
            mike = tango.bind(report)();
 167:
            zulu['privacy'] = mike;
            mike = zulu.voiceAndVideo;
            if(!(entity == mike)) { _fun00014_ip = 223; continue _fun00013 }
 183:
            oscar = _closure1_slot0;
            report = _closure1_slot2;
            tango = 5;
            report = report[tango];
            tango = undefined;
            tango = oscar.bind(tango)(report);
            report = tango.VoiceAndVideoSettings;
            tango = report.create;
            mike = tango.bind(report)();
 223:
            zulu['voiceAndVideo'] = mike;
            mike = zulu.gameLibrary;
            if(!(entity == mike)) { _fun00014_ip = 279; continue _fun00013 }
 239:
            oscar = _closure1_slot0;
            report = _closure1_slot2;
            tango = 5;
            report = report[tango];
            tango = undefined;
            tango = oscar.bind(tango)(report);
            report = tango.GameLibrarySettings;
            tango = report.create;
            mike = tango.bind(report)();
 279:
            zulu['gameLibrary'] = mike;
            mike = zulu.debug;
            if(!(entity == mike)) { _fun00014_ip = 335; continue _fun00013 }
 295:
            oscar = _closure1_slot0;
            report = _closure1_slot2;
            tango = 5;
            report = report[tango];
            tango = undefined;
            tango = oscar.bind(tango)(report);
            report = tango.DebugSettings;
            tango = report.create;
            mike = tango.bind(report)();
 335:
            zulu['debug'] = mike;
            oscar = _closure1_slot0;
            report = _closure1_slot2;
            tango = 6;
            tango = report[tango];
            report = undefined;
            tango = oscar.bind(report)(tango);
            golf = tango.Storage;
            oscar = golf.get;
            tango = 'UserSettingsStore';
            oscar = oscar.bind(golf)(tango);
            if(!(entity == oscar)) { _fun00014_ip = 394; continue _fun00013 }
 392:
            oscar = {};
 394:
            tango = oscar.useRichChatTextBox;
            golf = 'boolean';
            tango = typeof tango;
            entity = false;
            if(!(golf === tango)) { _fun00014_ip = 475; continue _fun00013 }
 413:
            options = zulu.textAndImages;
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            tango = 9;
            tango = offset[tango];
            tango = verify.bind(report)(tango);
            offset = tango.BoolValue;
            verify = offset.create;
            tango = {};
            yankee = oscar.useRichChatTextBox;
            tango['value'] = yankee;
            tango = verify.bind(offset)(tango);
            options['useRichChatInput'] = tango;
            entity = true;
 475:
            tango = oscar.renderSpoilers;
            options = 'string';
            tango = typeof tango;
            if(!(options === tango)) { _fun00014_ip = 554; continue _fun00013 }
 492:
            options = zulu.textAndImages;
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            tango = 9;
            tango = offset[tango];
            tango = verify.bind(report)(tango);
            offset = tango.StringValue;
            verify = offset.create;
            tango = {};
            yankee = oscar.renderSpoilers;
            tango['value'] = yankee;
            tango = verify.bind(offset)(tango);
            options['renderSpoilers'] = tango;
            entity = true;
 554:
            tango = oscar.useThreadSidebar;
            tango = typeof tango;
            if(!(golf === tango)) { _fun00014_ip = 629; continue _fun00013 }
 567:
            options = zulu.textAndImages;
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            tango = 9;
            tango = offset[tango];
            tango = verify.bind(report)(tango);
            offset = tango.BoolValue;
            verify = offset.create;
            tango = {};
            yankee = oscar.useThreadSidebar;
            tango['value'] = yankee;
            tango = verify.bind(offset)(tango);
            options['useThreadSidebar'] = tango;
            entity = true;
 629:
            tango = oscar.showInAppNotifications;
            tango = typeof tango;
            if(!(golf === tango)) { _fun00014_ip = 704; continue _fun00013 }
 642:
            options = zulu.notifications;
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            tango = 9;
            tango = offset[tango];
            tango = verify.bind(report)(tango);
            offset = tango.BoolValue;
            verify = offset.create;
            tango = {};
            yankee = oscar.showInAppNotifications;
            tango['value'] = yankee;
            tango = verify.bind(offset)(tango);
            options['showInAppNotifications'] = tango;
            entity = true;
 704:
            verify = oscar.emojiPickerCollapsedSections;
            tango = global;
            options = tango.Array;
            options = verify instanceof options;
            if(!options) { _fun00014_ip = 745; continue _fun00013 }
 725:
            verify = zulu.textAndImages;
            options = oscar.emojiPickerCollapsedSections;
            verify['emojiPickerCollapsedSections'] = options;
            entity = true;
 745:
            options = oscar.stickerPickerCollapsedSections;
            tango = tango.Array;
            tango = options instanceof tango;
            if(!tango) { _fun00014_ip = 784; continue _fun00013 }
 764:
            options = zulu.textAndImages;
            tango = oscar.stickerPickerCollapsedSections;
            options['stickerPickerCollapsedSections'] = tango;
            entity = true;
 784:
            tango = oscar.viewImageDescriptions;
            tango = typeof tango;
            if(!(golf === tango)) { _fun00014_ip = 859; continue _fun00013 }
 797:
            options = zulu.textAndImages;
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            tango = 9;
            tango = offset[tango];
            tango = verify.bind(report)(tango);
            offset = tango.BoolValue;
            verify = offset.create;
            tango = {};
            yankee = oscar.viewImageDescriptions;
            tango['value'] = yankee;
            tango = verify.bind(offset)(tango);
            options['viewImageDescriptions'] = tango;
            entity = true;
 859:
            tango = oscar.showCommandSuggestions;
            tango = typeof tango;
            if(!(golf === tango)) { _fun00014_ip = 934; continue _fun00013 }
 872:
            options = zulu.textAndImages;
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            tango = 9;
            tango = offset[tango];
            tango = verify.bind(report)(tango);
            offset = tango.BoolValue;
            verify = offset.create;
            tango = {};
            yankee = oscar.showCommandSuggestions;
            tango['value'] = yankee;
            tango = verify.bind(offset)(tango);
            options['showCommandSuggestions'] = tango;
            entity = true;
 934:
            tango = oscar.alwaysPreviewVideo;
            tango = typeof tango;
            if(!(golf === tango)) { _fun00014_ip = 1009; continue _fun00013 }
 947:
            options = zulu.voiceAndVideo;
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            tango = 9;
            tango = offset[tango];
            tango = verify.bind(report)(tango);
            offset = tango.BoolValue;
            verify = offset.create;
            tango = {};
            yankee = oscar.alwaysPreviewVideo;
            tango['value'] = yankee;
            tango = verify.bind(offset)(tango);
            options['alwaysPreviewVideo'] = tango;
            entity = true;
 1009:
            tango = oscar.notifyFriendsOnGoLive;
            tango = typeof tango;
            if(!(golf === tango)) { _fun00014_ip = 1084; continue _fun00013 }
 1022:
            options = zulu.notifications;
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            tango = 9;
            tango = offset[tango];
            tango = verify.bind(report)(tango);
            offset = tango.BoolValue;
            verify = offset.create;
            tango = {};
            yankee = oscar.notifyFriendsOnGoLive;
            tango['value'] = yankee;
            tango = verify.bind(offset)(tango);
            options['notifyFriendsOnGoLive'] = tango;
            entity = true;
 1084:
            tango = oscar.installShortcutDesktop;
            tango = typeof tango;
            if(!(golf === tango)) { _fun00014_ip = 1159; continue _fun00013 }
 1097:
            options = zulu.gameLibrary;
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            tango = 9;
            tango = offset[tango];
            tango = verify.bind(report)(tango);
            offset = tango.BoolValue;
            verify = offset.create;
            tango = {};
            yankee = oscar.installShortcutDesktop;
            tango['value'] = yankee;
            tango = verify.bind(offset)(tango);
            options['installShortcutDesktop'] = tango;
            entity = true;
 1159:
            tango = oscar.installShortcutStartMenu;
            tango = typeof tango;
            if(!(golf === tango)) { _fun00014_ip = 1234; continue _fun00013 }
 1172:
            options = zulu.gameLibrary;
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            tango = 9;
            tango = offset[tango];
            tango = verify.bind(report)(tango);
            offset = tango.BoolValue;
            verify = offset.create;
            tango = {};
            yankee = oscar.installShortcutStartMenu;
            tango['value'] = yankee;
            tango = verify.bind(offset)(tango);
            options['installShortcutStartMenu'] = tango;
            entity = true;
 1234:
            tango = oscar.allowActivityPartyPrivacyFriends;
            tango = typeof tango;
            if(!(golf === tango)) { _fun00014_ip = 1309; continue _fun00013 }
 1247:
            options = zulu.privacy;
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            tango = 9;
            tango = offset[tango];
            tango = verify.bind(report)(tango);
            offset = tango.BoolValue;
            verify = offset.create;
            tango = {};
            yankee = oscar.allowActivityPartyPrivacyFriends;
            tango['value'] = yankee;
            tango = verify.bind(offset)(tango);
            options['allowActivityPartyPrivacyFriends'] = tango;
            entity = true;
 1309:
            tango = oscar.allowActivityPartyPrivacyVoiceChannel;
            tango = typeof tango;
            if(!(golf === tango)) { _fun00014_ip = 1384; continue _fun00013 }
 1322:
            options = zulu.privacy;
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            tango = 9;
            tango = offset[tango];
            tango = verify.bind(report)(tango);
            offset = tango.BoolValue;
            verify = offset.create;
            tango = {};
            yankee = oscar.allowActivityPartyPrivacyVoiceChannel;
            tango['value'] = yankee;
            tango = verify.bind(offset)(tango);
            options['allowActivityPartyPrivacyVoiceChannel'] = tango;
            entity = true;
 1384:
            tango = oscar.rtcPanelShowVoiceStates;
            tango = typeof tango;
            if(!(golf === tango)) { _fun00014_ip = 1459; continue _fun00013 }
 1397:
            zulu = zulu.debug;
            tango = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 9;
            mike = golf[mike];
            mike = tango.bind(report)(mike);
            report = mike.BoolValue;
            tango = report.create;
            mike = {};
            oscar = oscar.rtcPanelShowVoiceStates;
            mike['value'] = oscar;
            mike = tango.bind(report)(mike);
            zulu['rtcPanelShowVoiceStates'] = mike;
            entity = true;
 1459:
            return entity;
        }
    };
    tango['run'] = golf;
    golf = function() { // Original name: cleanup
        entity = undefined;
        return entity;
    };
    tango['cleanup'] = golf;
    mike[3] = tango;
    tango = {};
    golf = 7;
    tango['version'] = golf;
    golf = function(argFoo) { // Original name: run
        report = _closure1_slot7;
        mike = _closure1_slot0;
        oscar = _closure1_slot2;
        entity = 4;
        entity = oscar[entity];
        tango = undefined;
        entity = mike.bind(tango)(entity);
        entity = entity.HotspotLocations;
        zulu = entity.APPLICATION_COMMAND_TOOLTIP;
        entity = 10;
        entity = oscar[entity];
        entity = mike.bind(tango)(entity);
        entity = entity.DismissibleContent;
        mike = entity.APPLICATION_COMMAND_TOOLTIP;
        entity = argFoo;
        entity = report.bind(tango)(entity, zulu, mike);
        return entity;
    };
    tango['run'] = golf;
    golf = function() { // Original name: cleanup
        entity = undefined;
        return entity;
    };
    tango['cleanup'] = golf;
    mike[4] = tango;
    tango = {};
    golf = 8;
    tango['version'] = golf;
    golf = function(argFoo) { // Original name: run
        report = _closure1_slot7;
        mike = _closure1_slot0;
        oscar = _closure1_slot2;
        entity = 4;
        entity = oscar[entity];
        tango = undefined;
        entity = mike.bind(tango)(entity);
        entity = entity.HotspotLocations;
        zulu = entity.CHANNEL_BANNER_MEMBER_LIST_NOTICE;
        entity = 10;
        entity = oscar[entity];
        entity = mike.bind(tango)(entity);
        entity = entity.DismissibleContent;
        mike = entity.CHANNELINFO_CHANNELBANNER_NOTICE;
        entity = argFoo;
        entity = report.bind(tango)(entity, zulu, mike);
        return entity;
    };
    tango['run'] = golf;
    golf = function() { // Original name: cleanup
        entity = undefined;
        return entity;
    };
    tango['cleanup'] = golf;
    mike[5] = tango;
    tango = {};
    golf = 9;
    tango['version'] = golf;
    golf = function(argFoo) { // Original name: run
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            golf = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 4;
            tango = mike[entity];
            report = undefined;
            tango = golf.bind(report)(tango);
            oscar = tango.HotspotStore;
            tango = oscar.hasHiddenHotspot;
            mike = mike[entity];
            mike = golf.bind(report)(mike);
            mike = mike.HotspotLocations;
            mike = mike.MULTI_ACCOUNT_TOOLTIP;
            mike = tango.bind(oscar)(mike);
            if(!mike) { _fun00016_ip = 111; continue _fun00015 }
 66:
            tango = _closure1_slot0;
            oscar = _closure1_slot2;
            mike = 6;
            mike = oscar[mike];
            mike = tango.bind(report)(mike);
            golf = mike.Storage;
            oscar = golf.set;
            tango = _closure1_slot5;
            mike = 'true';
            mike = oscar.bind(golf)(tango, mike);
 111:
            tango = _closure1_slot7;
            mike = _closure1_slot0;
            oscar = _closure1_slot2;
            entity = oscar[entity];
            entity = mike.bind(report)(entity);
            entity = entity.HotspotLocations;
            zulu = entity.MULTI_ACCOUNT_TOOLTIP;
            entity = 10;
            entity = oscar[entity];
            entity = mike.bind(report)(entity);
            entity = entity.DismissibleContent;
            mike = entity.ACCOUNT_MULTIACCOUNT_TOOLTIP;
            entity = argFoo;
            entity = tango.bind(report)(entity, zulu, mike);
            return entity;
        }
    };
    tango['run'] = golf;
    golf = function() { // Original name: cleanup
        entity = undefined;
        return entity;
    };
    tango['cleanup'] = golf;
    mike[6] = tango;
    tango = {};
    golf = 10;
    tango['version'] = golf;
    golf = function(argFoo) { // Original name: run
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            oscar = argFoo;
            verify = _closure1_slot7;
            tango = _closure1_slot0;
            golf = _closure1_slot2;
            entity = 4;
            entity = golf[entity];
            report = undefined;
            entity = tango.bind(report)(entity);
            entity = entity.HotspotLocations;
            mike = entity.HUB_LINK_CHANNEL_NOTICE;
            options = 10;
            entity = golf[options];
            entity = tango.bind(report)(entity);
            entity = entity.DismissibleContent;
            entity = entity.CHANNEL_NOTICE_HUBLINK;
            entity = verify.bind(report)(oscar, mike, entity);
            mike = 6;
            mike = golf[mike];
            mike = tango.bind(report)(mike);
            golf = mike.Storage;
            tango = golf.get;
            mike = 'channelNotices';
            golf = tango.bind(golf)(mike);
            mike = null;
            if(!(mike == golf)) { _fun00018_ip = 117; continue _fun00017 }
 115:
            golf = {};
 117:
            mike = _closure1_slot4;
            mike = mike.INVITE;
            mike = golf[mike];
            tango = false;
            mike = tango === mike;
            if(!mike) { _fun00018_ip = 179; continue _fun00017 }
 140:
            offset = _closure1_slot6;
            yankee = _closure1_slot0;
            verify = _closure1_slot2;
            verify = verify[options];
            verify = yankee.bind(report)(verify);
            verify = verify.DismissibleContent;
            verify = verify.CHANNEL_NOTICE_INVITE;
            mike = offset.bind(report)(oscar, verify);
 179:
            if(!mike) { _fun00018_ip = 184; continue _fun00017 }
 182:
            entity = true;
 184:
            mike = _closure1_slot4;
            mike = mike.QUICKSWITCHER;
            mike = golf[mike];
            mike = tango === mike;
            if(!mike) { _fun00018_ip = 244; continue _fun00017 }
 205:
            offset = _closure1_slot6;
            yankee = _closure1_slot0;
            verify = _closure1_slot2;
            verify = verify[options];
            verify = yankee.bind(report)(verify);
            verify = verify.DismissibleContent;
            verify = verify.CHANNEL_NOTICE_QUICKSWITCHER;
            mike = offset.bind(report)(oscar, verify);
 244:
            if(!mike) { _fun00018_ip = 249; continue _fun00017 }
 247:
            entity = true;
 249:
            mike = _closure1_slot4;
            mike = mike.GUILD_BOOSTING;
            mike = golf[mike];
            mike = tango === mike;
            if(!mike) { _fun00018_ip = 309; continue _fun00017 }
 270:
            tango = _closure1_slot6;
            golf = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[options];
            zulu = golf.bind(report)(zulu);
            zulu = zulu.DismissibleContent;
            zulu = zulu.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION;
            mike = tango.bind(report)(oscar, zulu);
 309:
            if(!mike) { _fun00018_ip = 314; continue _fun00017 }
 312:
            entity = true;
 314:
            return entity;
        }
    };
    tango['run'] = golf;
    golf = function() { // Original name: cleanup
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 6;
        mike = mike[entity];
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        tango = mike.Storage;
        zulu = tango.remove;
        mike = 'channelNotices';
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    tango['cleanup'] = golf;
    mike[7] = tango;
    tango = {};
    golf = 11;
    tango['version'] = golf;
    golf = function(argFoo) { // Original name: run
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            oscar = argFoo;
            golf = _closure1_slot7;
            verify = _closure1_slot0;
            entity = _closure1_slot2;
            zulu = 4;
            tango = entity[zulu];
            report = undefined;
            tango = verify.bind(report)(tango);
            tango = tango.HotspotLocations;
            tango = tango.GUILD_EVENT_UPSELL;
            options = 10;
            entity = entity[options];
            entity = verify.bind(report)(entity);
            entity = entity.DismissibleContent;
            entity = entity.GUILD_HEADER_EVENT_UPSELL;
            tango = golf.bind(report)(oscar, tango, entity);
            entity = false;
            if(!tango) { _fun00020_ip = 82; continue _fun00019 }
 80:
            entity = true;
 82:
            verify = _closure1_slot7;
            offset = _closure1_slot0;
            tango = _closure1_slot2;
            golf = tango[zulu];
            golf = offset.bind(report)(golf);
            golf = golf.HotspotLocations;
            golf = golf.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP;
            tango = tango[options];
            tango = offset.bind(report)(tango);
            tango = tango.DismissibleContent;
            tango = tango.GUILD_HEADER_PREMIUM_GUILD_PROGRESS;
            tango = verify.bind(report)(oscar, golf, tango);
            if(!tango) { _fun00020_ip = 148; continue _fun00019 }
 146:
            entity = true;
 148:
            tango = _closure1_slot7;
            golf = _closure1_slot0;
            mike = _closure1_slot2;
            zulu = mike[zulu];
            zulu = golf.bind(report)(zulu);
            zulu = zulu.HotspotLocations;
            zulu = zulu.ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP;
            mike = mike[options];
            mike = golf.bind(report)(mike);
            mike = mike.DismissibleContent;
            mike = mike.GUILD_HEADER_ANIMATED_GUILD_BANNER;
            mike = tango.bind(report)(oscar, zulu, mike);
            if(!mike) { _fun00020_ip = 214; continue _fun00019 }
 212:
            entity = true;
 214:
            return entity;
        }
    };
    tango['run'] = golf;
    golf = function() { // Original name: cleanup
        entity = undefined;
        return entity;
    };
    tango['cleanup'] = golf;
    mike[8] = tango;
    golf = {};
    tango = 12;
    golf['version'] = tango;
    verify = function(argFoo) { // Original name: run
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            oscar = argFoo;
            mike = _closure1_slot0;
            entity = _closure1_slot2;
            golf = 6;
            entity = entity[golf];
            report = undefined;
            entity = mike.bind(report)(entity);
            tango = entity.Storage;
            mike = tango.get;
            entity = 'hideNag';
            mike = mike.bind(tango)(entity);
            if(!mike) { _fun00022_ip = 95; continue _fun00021 }
 53:
            tango = _closure1_slot6;
            options = _closure1_slot0;
            verify = _closure1_slot2;
            entity = 10;
            entity = verify[entity];
            entity = options.bind(report)(entity);
            entity = entity.DismissibleContent;
            entity = entity.NAGBAR_NOTICE_DOWNLOAD;
            mike = tango.bind(report)(oscar, entity);
 95:
            entity = false;
            if(!mike) { _fun00022_ip = 102; continue _fun00021 }
 100:
            entity = true;
 102:
            tango = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[golf];
            mike = tango.bind(report)(mike);
            options = mike.Storage;
            tango = options.get;
            mike = 'hideConnectSpotify';
            mike = tango.bind(options)(mike);
            if(!mike) { _fun00022_ip = 186; continue _fun00021 }
 144:
            options = _closure1_slot6;
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            tango = 10;
            tango = offset[tango];
            tango = verify.bind(report)(tango);
            tango = tango.DismissibleContent;
            tango = tango.NAGBAR_NOTICE_CONNECT_SPOTIFY;
            mike = options.bind(report)(oscar, tango);
 186:
            if(!mike) { _fun00022_ip = 191; continue _fun00021 }
 189:
            entity = true;
 191:
            tango = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[golf];
            mike = tango.bind(report)(mike);
            options = mike.Storage;
            tango = options.get;
            mike = 'hideConnectPlayStation';
            mike = tango.bind(options)(mike);
            if(!mike) { _fun00022_ip = 275; continue _fun00021 }
 233:
            options = _closure1_slot6;
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            tango = 10;
            tango = offset[tango];
            tango = verify.bind(report)(tango);
            tango = tango.DismissibleContent;
            tango = tango.NAGBAR_NOTICE_CONNECT_PLAYSTATION;
            mike = options.bind(report)(oscar, tango);
 275:
            if(!mike) { _fun00022_ip = 280; continue _fun00021 }
 278:
            entity = true;
 280:
            tango = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[golf];
            mike = tango.bind(report)(mike);
            golf = mike.Storage;
            tango = golf.get;
            mike = 'hideMFASMSNotice';
            mike = tango.bind(golf)(mike);
            if(!mike) { _fun00022_ip = 364; continue _fun00021 }
 322:
            tango = _closure1_slot6;
            golf = _closure1_slot0;
            options = _closure1_slot2;
            zulu = 10;
            zulu = options[zulu];
            zulu = golf.bind(report)(zulu);
            zulu = zulu.DismissibleContent;
            zulu = zulu.NAGBAR_NOTICE_MFA_SMS_BACKUP;
            mike = tango.bind(report)(oscar, zulu);
 364:
            if(!mike) { _fun00022_ip = 369; continue _fun00021 }
 367:
            entity = true;
 369:
            return entity;
        }
    };
    golf['run'] = verify;
    verify = function() { // Original name: cleanup
        zulu = _closure1_slot0;
        tango = _closure1_slot2;
        mike = 6;
        report = tango[mike];
        entity = undefined;
        report = zulu.bind(entity)(report);
        golf = report.Storage;
        oscar = golf.remove;
        report = 'hideNag';
        report = oscar.bind(golf)(report);
        report = tango[mike];
        report = zulu.bind(entity)(report);
        golf = report.Storage;
        oscar = golf.remove;
        report = 'hideConnectSpotify';
        report = oscar.bind(golf)(report);
        report = tango[mike];
        report = zulu.bind(entity)(report);
        golf = report.Storage;
        oscar = golf.remove;
        report = 'hideConnectPlayStation';
        report = oscar.bind(golf)(report);
        mike = tango[mike];
        mike = zulu.bind(entity)(mike);
        tango = mike.Storage;
        zulu = tango.remove;
        mike = 'hideMFASMSNotice';
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    golf['cleanup'] = verify;
    mike[9] = golf;
    golf = {};
    verify = 13;
    golf['version'] = verify;
    verify = function(argFoo) { // Original name: run
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            oscar = argFoo;
            zulu = _closure1_slot0;
            entity = _closure1_slot2;
            golf = 6;
            entity = entity[golf];
            report = undefined;
            entity = zulu.bind(report)(entity);
            tango = entity.Storage;
            zulu = tango.get;
            entity = 'hidePremiumPromo';
            zulu = zulu.bind(tango)(entity);
            if(!zulu) { _fun00024_ip = 95; continue _fun00023 }
 53:
            tango = _closure1_slot6;
            options = _closure1_slot0;
            verify = _closure1_slot2;
            entity = 10;
            entity = verify[entity];
            entity = options.bind(report)(entity);
            entity = entity.DismissibleContent;
            entity = entity.NAGBAR_NOTICE_PREMIUM_PROMO;
            zulu = tango.bind(report)(oscar, entity);
 95:
            entity = false;
            if(!zulu) { _fun00024_ip = 102; continue _fun00023 }
 100:
            entity = true;
 102:
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[golf];
            zulu = tango.bind(report)(zulu);
            options = zulu.Storage;
            tango = options.get;
            zulu = 'hidePremiumTier2TrialEnding';
            zulu = tango.bind(options)(zulu);
            if(!zulu) { _fun00024_ip = 186; continue _fun00023 }
 144:
            options = _closure1_slot6;
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            tango = 10;
            tango = offset[tango];
            tango = verify.bind(report)(tango);
            tango = tango.DismissibleContent;
            tango = tango.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING;
            zulu = options.bind(report)(oscar, tango);
 186:
            if(!zulu) { _fun00024_ip = 191; continue _fun00023 }
 189:
            entity = true;
 191:
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[golf];
            zulu = tango.bind(report)(zulu);
            golf = zulu.Storage;
            tango = golf.get;
            zulu = 'hidePremiumReactivateNotice';
            zulu = tango.bind(golf)(zulu);
            if(!zulu) { _fun00024_ip = 275; continue _fun00023 }
 233:
            golf = _closure1_slot6;
            options = _closure1_slot0;
            verify = _closure1_slot2;
            tango = 10;
            tango = verify[tango];
            tango = options.bind(report)(tango);
            tango = tango.DismissibleContent;
            tango = tango.NAGBAR_NOTICE_PREMIUM_REACTIVATE;
            zulu = golf.bind(report)(oscar, tango);
 275:
            if(!zulu) { _fun00024_ip = 280; continue _fun00023 }
 278:
            entity = true;
 280:
            tango = _closure1_slot7;
            golf = _closure1_slot0;
            options = _closure1_slot2;
            mike = 4;
            mike = options[mike];
            mike = golf.bind(report)(mike);
            mike = mike.HotspotLocations;
            zulu = mike.INVITE_SPLASH_GUILD_HEADER_TOOLTIP;
            mike = 10;
            mike = options[mike];
            mike = golf.bind(report)(mike);
            mike = mike.DismissibleContent;
            mike = mike.GUILD_HEADER_INVITE_SPLASH;
            mike = tango.bind(report)(oscar, zulu, mike);
            if(!mike) { _fun00024_ip = 352; continue _fun00023 }
 350:
            entity = true;
 352:
            return entity;
        }
    };
    golf['run'] = verify;
    verify = function() { // Original name: cleanup
        zulu = _closure1_slot0;
        tango = _closure1_slot2;
        mike = 6;
        report = tango[mike];
        entity = undefined;
        report = zulu.bind(entity)(report);
        golf = report.Storage;
        oscar = golf.remove;
        report = 'hidePremiumPromo';
        report = oscar.bind(golf)(report);
        report = tango[mike];
        report = zulu.bind(entity)(report);
        golf = report.Storage;
        oscar = golf.remove;
        report = 'hidePremiumTier2TrialEnding';
        report = oscar.bind(golf)(report);
        mike = tango[mike];
        mike = zulu.bind(entity)(mike);
        tango = mike.Storage;
        zulu = tango.remove;
        mike = 'hidePremiumReactivateNotice';
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    golf['cleanup'] = verify;
    mike[10] = golf;
    golf = {};
    verify = 14;
    golf['version'] = verify;
    verify = function(argFoo) { // Original name: run
        report = _closure1_slot7;
        mike = _closure1_slot0;
        oscar = _closure1_slot2;
        entity = 4;
        entity = oscar[entity];
        tango = undefined;
        entity = mike.bind(tango)(entity);
        entity = entity.HotspotLocations;
        zulu = entity.ACTIVITY_BEB_TUTORIAL;
        entity = 10;
        entity = oscar[entity];
        entity = mike.bind(tango)(entity);
        entity = entity.DismissibleContent;
        mike = entity.ACTIVITIES_TUTORIAL_COACH_MARK;
        entity = argFoo;
        entity = report.bind(tango)(entity, zulu, mike);
        return entity;
    };
    golf['run'] = verify;
    verify = function() { // Original name: cleanup
        entity = undefined;
        return entity;
    };
    golf['cleanup'] = verify;
    mike[11] = golf;
    golf = {};
    verify = 15;
    golf['version'] = verify;
    verify = function(argFoo) { // Original name: run
        report = _closure1_slot7;
        mike = _closure1_slot0;
        oscar = _closure1_slot2;
        entity = 4;
        entity = oscar[entity];
        tango = undefined;
        entity = mike.bind(tango)(entity);
        entity = entity.HotspotLocations;
        zulu = entity.NOW_PLAYING_CONSENT_CARD;
        entity = 10;
        entity = oscar[entity];
        entity = mike.bind(tango)(entity);
        entity = entity.DismissibleContent;
        mike = entity.NOW_PLAYING_CONSENT_CARD;
        entity = argFoo;
        entity = report.bind(tango)(entity, zulu, mike);
        return entity;
    };
    golf['run'] = verify;
    verify = function() { // Original name: cleanup
        entity = undefined;
        return entity;
    };
    golf['cleanup'] = verify;
    mike[12] = golf;
    golf = {};
    verify = 16;
    golf['version'] = verify;
    verify = function(argFoo) { // Original name: run
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            zulu = argFoo;
            tango = _closure1_slot0;
            report = _closure1_slot2;
            entity = 6;
            entity = report[entity];
            report = undefined;
            entity = tango.bind(report)(entity);
            oscar = entity.Storage;
            tango = oscar.get;
            entity = 'PromotionsPersistedStore';
            entity = tango.bind(oscar)(entity);
            golf = null;
            if(!(golf != entity)) { _fun00026_ip = 206; continue _fun00025 }
 59:
            entity = entity._state;
            oscar = entity.lastDismissedOutboundPromotionStartDate;
            entity = golf != oscar;
            if(!entity) { _fun00026_ip = 145; continue _fun00025 }
 78:
            tango = zulu.userContent;
            if(!(golf == tango)) { _fun00026_ip = 129; continue _fun00025 }
 88:
            options = _closure1_slot0;
            verify = _closure1_slot2;
            tango = 5;
            tango = verify[tango];
            tango = options.bind(report)(tango);
            options = tango.UserContentSettings;
            tango = options.create;
            tango = tango.bind(options)();
            zulu['userContent'] = tango;
 129:
            tango = zulu.userContent;
            tango = tango.lastDismissedOutboundPromotionStartDate;
            entity = golf == tango;
 145:
            if(!entity) { _fun00026_ip = 204; continue _fun00025 }
 148:
            zulu = zulu.userContent;
            tango = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 9;
            mike = golf[mike];
            mike = tango.bind(report)(mike);
            report = mike.StringValue;
            tango = report.create;
            mike = {};
            mike['value'] = oscar;
            mike = tango.bind(report)(mike);
            zulu['lastDismissedOutboundPromotionStartDate'] = mike;
            entity = true;
 204:
            return entity;
 206:
            entity = false;
            return entity;
        }
    };
    golf['run'] = verify;
    verify = function() { // Original name: cleanup
        entity = undefined;
        return entity;
    };
    golf['cleanup'] = verify;
    mike[13] = golf;
    golf = {};
    verify = 17;
    golf['version'] = verify;
    verify = function(argFoo) { // Original name: run
        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
            zulu = argFoo;
            tango = _closure1_slot1;
            report = _closure1_slot2;
            entity = 8;
            entity = report[entity];
            report = undefined;
            entity = tango.bind(report)(entity);
            oscar = entity.PersistedStore;
            tango = oscar.migrateAndReadStoreState;
            entity = 'ExpressionSuggestionsPersistedStore';
            golf = null;
            entity = tango.bind(oscar)(entity, golf);
            entity = entity.state;
            if(!(golf != entity)) { _fun00028_ip = 207; continue _fun00027 }
 66:
            oscar = entity.expressionSuggestionsEnabled;
            entity = golf != oscar;
            if(!entity) { _fun00028_ip = 146; continue _fun00027 }
 79:
            tango = zulu.textAndImages;
            if(!(golf == tango)) { _fun00028_ip = 130; continue _fun00027 }
 89:
            options = _closure1_slot0;
            verify = _closure1_slot2;
            tango = 5;
            tango = verify[tango];
            tango = options.bind(report)(tango);
            options = tango.TextAndImagesSettings;
            tango = options.create;
            tango = tango.bind(options)();
            zulu['textAndImages'] = tango;
 130:
            tango = zulu.textAndImages;
            tango = tango.expressionSuggestionsEnabled;
            entity = golf == tango;
 146:
            if(!entity) { _fun00028_ip = 205; continue _fun00027 }
 149:
            zulu = zulu.textAndImages;
            tango = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 9;
            mike = golf[mike];
            mike = tango.bind(report)(mike);
            report = mike.BoolValue;
            tango = report.create;
            mike = {};
            mike['value'] = oscar;
            mike = tango.bind(report)(mike);
            zulu['expressionSuggestionsEnabled'] = mike;
            entity = true;
 205:
            return entity;
 207:
            entity = false;
            return entity;
        }
    };
    golf['run'] = verify;
    verify = function() { // Original name: cleanup
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 6;
        mike = mike[entity];
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        tango = mike.Storage;
        zulu = tango.remove;
        mike = 'ExpressionSuggestionsPersistedStore';
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    golf['cleanup'] = verify;
    mike[14] = golf;
    golf = {};
    verify = 18;
    golf['version'] = verify;
    verify = function(argFoo) { // Original name: run
        _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
            oscar = argFoo;
            golf = _closure1_slot7;
            verify = _closure1_slot0;
            entity = _closure1_slot2;
            zulu = 4;
            tango = entity[zulu];
            report = undefined;
            tango = verify.bind(report)(tango);
            tango = tango.HotspotLocations;
            tango = tango.GUILD_DELETE_FEEDBACK;
            options = 10;
            entity = entity[options];
            entity = verify.bind(report)(entity);
            entity = entity.DismissibleContent;
            entity = entity.GUILD_DELETE_FEEDBACK;
            tango = golf.bind(report)(oscar, tango, entity);
            entity = false;
            if(!tango) { _fun00030_ip = 82; continue _fun00029 }
 80:
            entity = true;
 82:
            tango = _closure1_slot7;
            golf = _closure1_slot0;
            mike = _closure1_slot2;
            zulu = mike[zulu];
            zulu = golf.bind(report)(zulu);
            zulu = zulu.HotspotLocations;
            zulu = zulu.GUILD_LEAVE_FEEDBACK;
            mike = mike[options];
            mike = golf.bind(report)(mike);
            mike = mike.DismissibleContent;
            mike = mike.GUILD_LEAVE_FEEDBACK;
            mike = tango.bind(report)(oscar, zulu, mike);
            if(!mike) { _fun00030_ip = 148; continue _fun00029 }
 146:
            entity = true;
 148:
            return entity;
        }
    };
    golf['run'] = verify;
    verify = function() { // Original name: cleanup
        entity = undefined;
        return entity;
    };
    golf['cleanup'] = verify;
    mike[15] = golf;
    golf = {};
    verify = 19;
    golf['version'] = verify;
    verify = function(argFoo) { // Original name: run
        _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 6;
            entity = tango[entity];
            report = undefined;
            entity = zulu.bind(report)(entity);
            tango = entity.Storage;
            zulu = tango.get;
            entity = 'forumHelperCardStorageKey';
            entity = zulu.bind(tango)(entity);
            zulu = null;
            zulu = zulu != entity;
            if(!zulu) { _fun00032_ip = 59; continue _fun00031 }
 56:
            zulu = entity;
 59:
            entity = false;
            if(!zulu) { _fun00032_ip = 109; continue _fun00031 }
 64:
            tango = _closure1_slot6;
            zulu = _closure1_slot0;
            oscar = _closure1_slot2;
            mike = 10;
            mike = oscar[mike];
            mike = zulu.bind(report)(mike);
            mike = mike.DismissibleContent;
            zulu = mike.FORUM_CHANNEL_HELPER_CARD;
            mike = argFoo;
            entity = tango.bind(report)(mike, zulu);
 109:
            return entity;
        }
    };
    golf['run'] = verify;
    verify = function() { // Original name: cleanup
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 6;
        mike = mike[entity];
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        tango = mike.Storage;
        zulu = tango.remove;
        mike = 'forumHelperCardStorageKey';
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    golf['cleanup'] = verify;
    mike[16] = golf;
    golf = {};
    verify = 20;
    golf['version'] = verify;
    verify = function(argFoo) { // Original name: run
        _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
            entity = argFoo;
            tango = _closure1_slot0;
            mike = _closure1_slot2;
            options = 6;
            mike = mike[options];
            report = undefined;
            mike = tango.bind(report)(mike);
            tango = mike.Storage;
            mike = tango.get;
            golf = 'lastChangeLogId';
            mike = mike.bind(tango)(golf);
            oscar = null;
            if(!(oscar != mike)) { _fun00034_ip = 284; continue _fun00033 }
 59:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            tango = 11;
            tango = offset[tango];
            verify = verify.bind(report)(tango);
            tango = verify.isSnowflake;
            tango = tango.bind(verify)(mike);
            if(tango) { _fun00034_ip = 131; continue _fun00033 }
 93:
            verify = _closure1_slot0;
            tango = _closure1_slot2;
            tango = tango[options];
            tango = verify.bind(report)(tango);
            verify = tango.Storage;
            tango = verify.remove;
            tango = tango.bind(verify)(golf);
            tango = false;
            return tango;
 131:
            tango = entity.userContent;
            if(!(oscar != tango)) { _fun00034_ip = 227; continue _fun00033 }
 141:
            tango = entity.userContent;
            if(!(oscar != tango)) { _fun00034_ip = 268; continue _fun00033 }
 151:
            tango = entity.userContent;
            tango = tango.lastReceivedChangelogId;
            if(!(oscar != tango)) { _fun00034_ip = 268; continue _fun00033 }
 167:
            tango = entity.userContent;
            oscar = tango.lastReceivedChangelogId;
            tango = '0';
            if(!(tango !== oscar)) { _fun00034_ip = 268; continue _fun00033 }
 189:
            oscar = _closure1_slot0;
            tango = _closure1_slot2;
            tango = tango[options];
            tango = oscar.bind(report)(tango);
            oscar = tango.Storage;
            tango = oscar.remove;
            tango = tango.bind(oscar)(golf);
            tango = false;
            return tango;
 227:
            tango = _closure1_slot0;
            oscar = _closure1_slot2;
            zulu = 5;
            zulu = oscar[zulu];
            zulu = tango.bind(report)(zulu);
            tango = zulu.UserContentSettings;
            zulu = tango.create;
            zulu = zulu.bind(tango)();
            entity['userContent'] = zulu;
 268:
            entity = entity.userContent;
            entity['lastReceivedChangelogId'] = mike;
            entity = true;
            return entity;
 284:
            entity = false;
            return entity;
        }
    };
    golf['run'] = verify;
    options = function() { // Original name: cleanup
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 6;
        mike = mike[entity];
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        tango = mike.Storage;
        zulu = tango.remove;
        mike = 'lastChangeLogId';
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    golf['cleanup'] = options;
    mike[17] = golf;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/user_settings/PreloadedUserSettingsMigrations.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();