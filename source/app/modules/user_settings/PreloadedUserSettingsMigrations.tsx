// app/modules/user_settings/PreloadedUserSettingsMigrations.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    tangon = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tangon;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar) { // Original name: migrateDismissibleContent
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            oscard = argBar;
            entity = michal.userContent;
            zuuluu = null;
            if(!(zuuluu == entity)) { _fun00002_ip = 77; continue _fun00001 }
 18:
            entity = {};
            tangon = global;
            tangon = tangon.Uint8Array;
            report = tangon.prototype;
            report = Object.create(report, {constructor: {value: tangon}});
            yankee = report;
            tangon = new yankee[tangon](offset);
            tangon = tangon instanceof Object ? tangon : report;
            entity['dismissedContents'] = tangon;
            tangon = '0';
            entity['lastReceivedChangelogId'] = tangon;
            tangon = {};
            entity['recurringDismissibleContentStates'] = tangon;
            michal['userContent'] = entity;
 77:
            entity = michal.userContent;
            entity = entity.dismissedContents;
            if(!(zuuluu == entity)) { _fun00002_ip = 133; continue _fun00001 }
 93:
            zuuluu = michal.userContent;
            entity = global;
            entity = entity.Uint8Array;
            tangon = entity.prototype;
            tangon = Object.create(tangon, {constructor: {value: entity}});
            yankee = tangon;
            entity = new yankee[entity](offset);
            entity = entity instanceof Object ? entity : tangon;
            zuuluu['dismissedContents'] = entity;
 133:
            zuuluu = _closure1_slot0;
            entity = _closure1_slot2;
            option = 3;
            entity = entity[option];
            golfie = undefined;
            report = zuuluu.bind(golfie)(entity);
            zuuluu = report.hasBit;
            entity = michal.userContent;
            entity = entity.dismissedContents;
            zuuluu = zuuluu.bind(report)(entity, oscard);
            entity = false;
            if(zuuluu) { _fun00002_ip = 242; continue _fun00001 }
 187:
            zuuluu = michal.userContent;
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            tangon = tangon[option];
            report = report.bind(golfie)(tangon);
            tangon = report.addBit;
            michal = michal.userContent;
            michal = michal.dismissedContents;
            michal = tangon.bind(report)(michal, oscard);
            zuuluu['dismissedContents'] = michal;
            entity = true;
 242:
            return entity;
        }
    };
    var _closure1_slot6 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: migrateHotspotLocation
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 4;
            entity = tangon[entity];
            report = undefined;
            entity = zuuluu.bind(report)(entity);
            tangon = entity.HotspotStore;
            zuuluu = tangon.hasHiddenHotspot;
            entity = argBar;
            entity = zuuluu.bind(tangon)(entity);
            zuuluu = !entity;
            entity = !zuuluu;
            if(zuuluu) { _fun00004_ip = 70; continue _fun00003 }
 54:
            tangon = _closure1_slot6;
            zuuluu = argFoo;
            michal = argBaz;
            entity = tangon.bind(report)(zuuluu, michal);
 70:
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = global;
    verify = entity.Object;
    golfie = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = tangon.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.ChannelNoticeTypes;
    var _closure1_slot4 = michal;
    michal = 2;
    tangon = oscard[michal];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.MULTIACCOUNT_TOOLTIP_SEEN_KEY;
    var _closure1_slot5 = tangon;
    tangon = {};
    tangon['version'] = michal;
    michal = function(argFoo) { // Original name: run
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            output = argFoo;
            michal = {};
            entity = 'Recent Mentions';
            michal['Mentions'] = entity;
            entity = 'Inbox';
            michal['Unreads'] = entity;
            entity = output.inbox;
            sizing = null;
            if(!(sizing == entity)) { _fun00006_ip = 470; continue _fun00005 }
 48:
            report = _closure1_slot0;
            entity = _closure1_slot2;
            golfie = 5;
            zuuluu = entity[golfie];
            backup = undefined;
            zuuluu = report.bind(backup)(zuuluu);
            tangon = zuuluu.InboxSettings;
            zuuluu = tangon.create;
            zuuluu = zuuluu.bind(tangon)();
            output['inbox'] = zuuluu;
            tangon = 6;
            entity = entity[tangon];
            entity = report.bind(backup)(entity);
            option = entity.Storage;
            oscard = option.get;
            report = 'seenInboxTutorial';
            entity = false;
            report = oscard.bind(option)(report, entity);
            if(!report) { _fun00006_ip = 144; continue _fun00005 }
 134:
            report = true;
            zuuluu['viewedTutorial'] = report;
            entity = true;
 144:
            oscard = _closure1_slot0;
            report = _closure1_slot2;
            report = report[tangon];
            report = oscard.bind(backup)(report);
            option = report.Storage;
            oscard = option.get;
            report = 'recentsButtonTab2';
            report = oscard.bind(option)(report);
            if(!(sizing != report)) { _fun00006_ip = 265; continue _fun00005 }
 187:
            michal = michal.Mentions;
            if(!(report !== michal)) { _fun00006_ip = 228; continue _fun00005 }
 197:
            report = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[golfie];
            michal = report.bind(backup)(michal);
            michal = michal.InboxTab;
            michal = michal.UNREADS;
            _fun00006_ip = 257; continue _fun00005;
 228:
            oscard = _closure1_slot0;
            report = _closure1_slot2;
            report = report[golfie];
            report = oscard.bind(backup)(report);
            report = report.InboxTab;
            michal = report.MENTIONS;
 257:
            zuuluu['currentTab'] = michal;
            entity = true;
 265:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[tangon];
            michal = zuuluu.bind(backup)(michal);
            tangon = michal.Storage;
            zuuluu = tangon.get;
            michal = 'unread-messages-collapsed-channels';
            foxtra = zuuluu.bind(tangon)(michal);
            if(!(sizing == foxtra)) { _fun00006_ip = 310; continue _fun00005 }
 308:
            foxtra = {};
 310:
            yankee = foxtra;
            oscard = 7;
            report = '0';
            tangon = entity;
            zuuluu = undefined;
            michal = undefined;
            entity = tangon;
            for(option in yankee)
 343:
            {
                update = tangon;
                entity = update;
 358:
                ctrled = option;
                echoed = foxtra[ctrled];
                tangon = update;
                if(!echoed) { _fun00006_ip = 343; continue _fun00005 }
 371:
                source = _closure1_slot3;
                echoed = source.getChannel;
                echoed = echoed.bind(source)(ctrled);
                tangon = update;
                michal = echoed;
                if(sizing == michal) { _fun00006_ip = 343; continue _fun00005 }
 395:
                source = _closure1_slot0;
                update = _closure1_slot2;
                update = update[oscard];
                sequen = source.bind(backup)(update);
                vacuum = sequen.mutateUserChannelSettings;
                zuuluu = echoed.guild_id;
                update = sizing != zuuluu;
                ctrled = report;
                if(!update) { _fun00006_ip = 436; continue _fun00005 }
 433:
                ctrled = zuuluu;
 436:
                record = echoed.id;
                config = function(argFoo) {
                    michal = true;
                    entity = argFoo;
                    entity['collapsedInInbox'] = michal;
                    entity = undefined;
                    return entity;
                };
                target = sequen;
                papara = output;
                cntext = ctrled;
                update = target[vacuum](papara, cntext, record, config, sequen);
                tangon = true;
                michal = echoed;
                _fun00006_ip = 343; continue _fun00005;
            }
 468:
            return entity;
 470:
            entity = false;
            return entity;
        }
    };
    tangon['run'] = michal;
    michal = function() { // Original name: cleanup
        zuuluu = _closure1_slot0;
        tangon = _closure1_slot2;
        michal = 6;
        report = tangon[michal];
        entity = undefined;
        report = zuuluu.bind(entity)(report);
        golfie = report.Storage;
        oscard = golfie.remove;
        report = 'seenInboxTutorial';
        report = oscard.bind(golfie)(report);
        report = tangon[michal];
        report = zuuluu.bind(entity)(report);
        golfie = report.Storage;
        oscard = golfie.remove;
        report = 'recentsButtonTab2';
        report = oscard.bind(golfie)(report);
        michal = tangon[michal];
        michal = zuuluu.bind(entity)(michal);
        tangon = michal.Storage;
        zuuluu = tangon.remove;
        michal = 'unread-messages-collapsed-channels';
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    tangon['cleanup'] = michal;
    michal = new Array(18);
    michal[0] = tangon;
    tangon = {};
    golfie = 3;
    tangon['version'] = golfie;
    golfie = function(argFoo) { // Original name: run
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = argFoo;
            michal = _closure1_slot1;
            report = _closure1_slot2;
            entity = 8;
            entity = report[entity];
            golfie = undefined;
            entity = michal.bind(golfie)(entity);
            oscard = entity.PersistedStore;
            report = oscard.migrateAndReadStoreState;
            michal = new Array(1);
            entity = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = {};
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 6;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    michal = tangon.bind(michal)(zuuluu);
                    tangon = michal.Storage;
                    zuuluu = tangon.get;
                    michal = 'EmojiDiversitySurrogate';
                    michal = zuuluu.bind(tangon)(michal);
                    if(michal) { _fun00010_ip = 56; continue _fun00009 }
 52:
                    michal = '';
 56:
                    entity['diversitySurrogate'] = michal;
                    return entity;
                }
            };
            michal[0] = entity;
            entity = 'EmojiStore';
            entity = report.bind(oscard)(entity, michal);
            michal = entity.state;
            oscard = null;
            if(!(oscard != michal)) { _fun00008_ip = 260; continue _fun00007 }
 83:
            entity = michal.diversitySurrogate;
            report = oscard != entity;
            if(!report) { _fun00008_ip = 110; continue _fun00007 }
 96:
            option = michal.diversitySurrogate;
            entity = '';
            report = entity !== option;
 110:
            entity = false;
            if(!report) { _fun00008_ip = 258; continue _fun00007 }
 118:
            report = zuuluu.textAndImages;
            if(!(oscard == report)) { _fun00008_ip = 169; continue _fun00007 }
 128:
            option = _closure1_slot0;
            verify = _closure1_slot2;
            report = 5;
            report = verify[report];
            report = option.bind(golfie)(report);
            option = report.TextAndImagesSettings;
            report = option.create;
            report = report.bind(option)();
            zuuluu['textAndImages'] = report;
 169:
            report = zuuluu.textAndImages;
            report = report.diversitySurrogate;
            if(!(oscard == report)) { _fun00008_ip = 232; continue _fun00007 }
 185:
            report = zuuluu.textAndImages;
            oscard = _closure1_slot0;
            option = _closure1_slot2;
            tangon = 9;
            tangon = option[tangon];
            tangon = oscard.bind(golfie)(tangon);
            oscard = tangon.StringValue;
            tangon = oscard.create;
            tangon = tangon.bind(oscard)();
            report['diversitySurrogate'] = tangon;
 232:
            zuuluu = zuuluu.textAndImages;
            zuuluu = zuuluu.diversitySurrogate;
            michal = michal.diversitySurrogate;
            zuuluu['value'] = michal;
            entity = true;
 258:
            return entity;
 260:
            entity = false;
            return entity;
        }
    };
    tangon['run'] = golfie;
    golfie = function() { // Original name: cleanup
        entity = undefined;
        return entity;
    };
    tangon['cleanup'] = golfie;
    michal[1] = tangon;
    tangon = {};
    golfie = 4;
    tangon['version'] = golfie;
    golfie = function(argFoo) { // Original name: run
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 6;
            entity = tangon[entity];
            report = undefined;
            entity = zuuluu.bind(report)(entity);
            tangon = entity.Storage;
            zuuluu = tangon.get;
            entity = 'HAS_SEEN_HUB_UPSELL';
            zuuluu = zuuluu.bind(tangon)(entity);
            entity = true;
            zuuluu = entity === zuuluu;
            if(zuuluu) { _fun00012_ip = 114; continue _fun00011 }
 56:
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            entity = 4;
            tangon = option[entity];
            tangon = golfie.bind(report)(tangon);
            oscard = tangon.HotspotStore;
            tangon = oscard.hasHiddenHotspot;
            entity = option[entity];
            entity = golfie.bind(report)(entity);
            entity = entity.HotspotLocations;
            entity = entity.HUB_SECOND_EMAIL_CONNECTION_UPSELL;
            zuuluu = tangon.bind(oscard)(entity);
 114:
            entity = false;
            if(!zuuluu) { _fun00012_ip = 164; continue _fun00011 }
 119:
            tangon = _closure1_slot6;
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot2;
            michal = 10;
            michal = oscard[michal];
            michal = zuuluu.bind(report)(michal);
            michal = michal.DismissibleContent;
            zuuluu = michal.HUB_WAITLIST_UPSELL;
            michal = argFoo;
            entity = tangon.bind(report)(michal, zuuluu);
 164:
            return entity;
        }
    };
    tangon['run'] = golfie;
    golfie = function() { // Original name: cleanup
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 6;
        michal = michal[entity];
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        tangon = michal.Storage;
        zuuluu = tangon.remove;
        michal = 'HAS_SEEN_HUB_UPSELL';
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    tangon['cleanup'] = golfie;
    michal[2] = tangon;
    tangon = {};
    golfie = 5;
    tangon['version'] = golfie;
    golfie = function(argFoo) { // Original name: run
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            zuuluu = argFoo;
            michal = zuuluu.textAndImages;
            entity = null;
            if(!(entity == michal)) { _fun00014_ip = 55; continue _fun00013 }
 15:
            oscard = _closure1_slot0;
            report = _closure1_slot2;
            tangon = 5;
            report = report[tangon];
            tangon = undefined;
            tangon = oscard.bind(tangon)(report);
            report = tangon.TextAndImagesSettings;
            tangon = report.create;
            michal = tangon.bind(report)();
 55:
            zuuluu['textAndImages'] = michal;
            michal = zuuluu.notifications;
            if(!(entity == michal)) { _fun00014_ip = 111; continue _fun00013 }
 71:
            oscard = _closure1_slot0;
            report = _closure1_slot2;
            tangon = 5;
            report = report[tangon];
            tangon = undefined;
            tangon = oscard.bind(tangon)(report);
            report = tangon.NotificationSettings;
            tangon = report.create;
            michal = tangon.bind(report)();
 111:
            zuuluu['notifications'] = michal;
            michal = zuuluu.privacy;
            if(!(entity == michal)) { _fun00014_ip = 167; continue _fun00013 }
 127:
            oscard = _closure1_slot0;
            report = _closure1_slot2;
            tangon = 5;
            report = report[tangon];
            tangon = undefined;
            tangon = oscard.bind(tangon)(report);
            report = tangon.PrivacySettings;
            tangon = report.create;
            michal = tangon.bind(report)();
 167:
            zuuluu['privacy'] = michal;
            michal = zuuluu.voiceAndVideo;
            if(!(entity == michal)) { _fun00014_ip = 223; continue _fun00013 }
 183:
            oscard = _closure1_slot0;
            report = _closure1_slot2;
            tangon = 5;
            report = report[tangon];
            tangon = undefined;
            tangon = oscard.bind(tangon)(report);
            report = tangon.VoiceAndVideoSettings;
            tangon = report.create;
            michal = tangon.bind(report)();
 223:
            zuuluu['voiceAndVideo'] = michal;
            michal = zuuluu.gameLibrary;
            if(!(entity == michal)) { _fun00014_ip = 279; continue _fun00013 }
 239:
            oscard = _closure1_slot0;
            report = _closure1_slot2;
            tangon = 5;
            report = report[tangon];
            tangon = undefined;
            tangon = oscard.bind(tangon)(report);
            report = tangon.GameLibrarySettings;
            tangon = report.create;
            michal = tangon.bind(report)();
 279:
            zuuluu['gameLibrary'] = michal;
            michal = zuuluu.debug;
            if(!(entity == michal)) { _fun00014_ip = 335; continue _fun00013 }
 295:
            oscard = _closure1_slot0;
            report = _closure1_slot2;
            tangon = 5;
            report = report[tangon];
            tangon = undefined;
            tangon = oscard.bind(tangon)(report);
            report = tangon.DebugSettings;
            tangon = report.create;
            michal = tangon.bind(report)();
 335:
            zuuluu['debug'] = michal;
            oscard = _closure1_slot0;
            report = _closure1_slot2;
            tangon = 6;
            tangon = report[tangon];
            report = undefined;
            tangon = oscard.bind(report)(tangon);
            golfie = tangon.Storage;
            oscard = golfie.get;
            tangon = 'UserSettingsStore';
            oscard = oscard.bind(golfie)(tangon);
            if(!(entity == oscard)) { _fun00014_ip = 394; continue _fun00013 }
 392:
            oscard = {};
 394:
            tangon = oscard.useRichChatTextBox;
            golfie = 'boolean';
            tangon = typeof tangon;
            entity = false;
            if(!(golfie === tangon)) { _fun00014_ip = 475; continue _fun00013 }
 413:
            option = zuuluu.textAndImages;
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            tangon = 9;
            tangon = offset[tangon];
            tangon = verify.bind(report)(tangon);
            offset = tangon.BoolValue;
            verify = offset.create;
            tangon = {};
            yankee = oscard.useRichChatTextBox;
            tangon['value'] = yankee;
            tangon = verify.bind(offset)(tangon);
            option['useRichChatInput'] = tangon;
            entity = true;
 475:
            tangon = oscard.renderSpoilers;
            option = 'string';
            tangon = typeof tangon;
            if(!(option === tangon)) { _fun00014_ip = 554; continue _fun00013 }
 492:
            option = zuuluu.textAndImages;
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            tangon = 9;
            tangon = offset[tangon];
            tangon = verify.bind(report)(tangon);
            offset = tangon.StringValue;
            verify = offset.create;
            tangon = {};
            yankee = oscard.renderSpoilers;
            tangon['value'] = yankee;
            tangon = verify.bind(offset)(tangon);
            option['renderSpoilers'] = tangon;
            entity = true;
 554:
            tangon = oscard.useThreadSidebar;
            tangon = typeof tangon;
            if(!(golfie === tangon)) { _fun00014_ip = 629; continue _fun00013 }
 567:
            option = zuuluu.textAndImages;
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            tangon = 9;
            tangon = offset[tangon];
            tangon = verify.bind(report)(tangon);
            offset = tangon.BoolValue;
            verify = offset.create;
            tangon = {};
            yankee = oscard.useThreadSidebar;
            tangon['value'] = yankee;
            tangon = verify.bind(offset)(tangon);
            option['useThreadSidebar'] = tangon;
            entity = true;
 629:
            tangon = oscard.showInAppNotifications;
            tangon = typeof tangon;
            if(!(golfie === tangon)) { _fun00014_ip = 704; continue _fun00013 }
 642:
            option = zuuluu.notifications;
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            tangon = 9;
            tangon = offset[tangon];
            tangon = verify.bind(report)(tangon);
            offset = tangon.BoolValue;
            verify = offset.create;
            tangon = {};
            yankee = oscard.showInAppNotifications;
            tangon['value'] = yankee;
            tangon = verify.bind(offset)(tangon);
            option['showInAppNotifications'] = tangon;
            entity = true;
 704:
            verify = oscard.emojiPickerCollapsedSections;
            tangon = global;
            option = tangon.Array;
            option = verify instanceof option;
            if(!option) { _fun00014_ip = 745; continue _fun00013 }
 725:
            verify = zuuluu.textAndImages;
            option = oscard.emojiPickerCollapsedSections;
            verify['emojiPickerCollapsedSections'] = option;
            entity = true;
 745:
            option = oscard.stickerPickerCollapsedSections;
            tangon = tangon.Array;
            tangon = option instanceof tangon;
            if(!tangon) { _fun00014_ip = 784; continue _fun00013 }
 764:
            option = zuuluu.textAndImages;
            tangon = oscard.stickerPickerCollapsedSections;
            option['stickerPickerCollapsedSections'] = tangon;
            entity = true;
 784:
            tangon = oscard.viewImageDescriptions;
            tangon = typeof tangon;
            if(!(golfie === tangon)) { _fun00014_ip = 859; continue _fun00013 }
 797:
            option = zuuluu.textAndImages;
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            tangon = 9;
            tangon = offset[tangon];
            tangon = verify.bind(report)(tangon);
            offset = tangon.BoolValue;
            verify = offset.create;
            tangon = {};
            yankee = oscard.viewImageDescriptions;
            tangon['value'] = yankee;
            tangon = verify.bind(offset)(tangon);
            option['viewImageDescriptions'] = tangon;
            entity = true;
 859:
            tangon = oscard.showCommandSuggestions;
            tangon = typeof tangon;
            if(!(golfie === tangon)) { _fun00014_ip = 934; continue _fun00013 }
 872:
            option = zuuluu.textAndImages;
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            tangon = 9;
            tangon = offset[tangon];
            tangon = verify.bind(report)(tangon);
            offset = tangon.BoolValue;
            verify = offset.create;
            tangon = {};
            yankee = oscard.showCommandSuggestions;
            tangon['value'] = yankee;
            tangon = verify.bind(offset)(tangon);
            option['showCommandSuggestions'] = tangon;
            entity = true;
 934:
            tangon = oscard.alwaysPreviewVideo;
            tangon = typeof tangon;
            if(!(golfie === tangon)) { _fun00014_ip = 1009; continue _fun00013 }
 947:
            option = zuuluu.voiceAndVideo;
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            tangon = 9;
            tangon = offset[tangon];
            tangon = verify.bind(report)(tangon);
            offset = tangon.BoolValue;
            verify = offset.create;
            tangon = {};
            yankee = oscard.alwaysPreviewVideo;
            tangon['value'] = yankee;
            tangon = verify.bind(offset)(tangon);
            option['alwaysPreviewVideo'] = tangon;
            entity = true;
 1009:
            tangon = oscard.notifyFriendsOnGoLive;
            tangon = typeof tangon;
            if(!(golfie === tangon)) { _fun00014_ip = 1084; continue _fun00013 }
 1022:
            option = zuuluu.notifications;
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            tangon = 9;
            tangon = offset[tangon];
            tangon = verify.bind(report)(tangon);
            offset = tangon.BoolValue;
            verify = offset.create;
            tangon = {};
            yankee = oscard.notifyFriendsOnGoLive;
            tangon['value'] = yankee;
            tangon = verify.bind(offset)(tangon);
            option['notifyFriendsOnGoLive'] = tangon;
            entity = true;
 1084:
            tangon = oscard.installShortcutDesktop;
            tangon = typeof tangon;
            if(!(golfie === tangon)) { _fun00014_ip = 1159; continue _fun00013 }
 1097:
            option = zuuluu.gameLibrary;
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            tangon = 9;
            tangon = offset[tangon];
            tangon = verify.bind(report)(tangon);
            offset = tangon.BoolValue;
            verify = offset.create;
            tangon = {};
            yankee = oscard.installShortcutDesktop;
            tangon['value'] = yankee;
            tangon = verify.bind(offset)(tangon);
            option['installShortcutDesktop'] = tangon;
            entity = true;
 1159:
            tangon = oscard.installShortcutStartMenu;
            tangon = typeof tangon;
            if(!(golfie === tangon)) { _fun00014_ip = 1234; continue _fun00013 }
 1172:
            option = zuuluu.gameLibrary;
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            tangon = 9;
            tangon = offset[tangon];
            tangon = verify.bind(report)(tangon);
            offset = tangon.BoolValue;
            verify = offset.create;
            tangon = {};
            yankee = oscard.installShortcutStartMenu;
            tangon['value'] = yankee;
            tangon = verify.bind(offset)(tangon);
            option['installShortcutStartMenu'] = tangon;
            entity = true;
 1234:
            tangon = oscard.allowActivityPartyPrivacyFriends;
            tangon = typeof tangon;
            if(!(golfie === tangon)) { _fun00014_ip = 1309; continue _fun00013 }
 1247:
            option = zuuluu.privacy;
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            tangon = 9;
            tangon = offset[tangon];
            tangon = verify.bind(report)(tangon);
            offset = tangon.BoolValue;
            verify = offset.create;
            tangon = {};
            yankee = oscard.allowActivityPartyPrivacyFriends;
            tangon['value'] = yankee;
            tangon = verify.bind(offset)(tangon);
            option['allowActivityPartyPrivacyFriends'] = tangon;
            entity = true;
 1309:
            tangon = oscard.allowActivityPartyPrivacyVoiceChannel;
            tangon = typeof tangon;
            if(!(golfie === tangon)) { _fun00014_ip = 1384; continue _fun00013 }
 1322:
            option = zuuluu.privacy;
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            tangon = 9;
            tangon = offset[tangon];
            tangon = verify.bind(report)(tangon);
            offset = tangon.BoolValue;
            verify = offset.create;
            tangon = {};
            yankee = oscard.allowActivityPartyPrivacyVoiceChannel;
            tangon['value'] = yankee;
            tangon = verify.bind(offset)(tangon);
            option['allowActivityPartyPrivacyVoiceChannel'] = tangon;
            entity = true;
 1384:
            tangon = oscard.rtcPanelShowVoiceStates;
            tangon = typeof tangon;
            if(!(golfie === tangon)) { _fun00014_ip = 1459; continue _fun00013 }
 1397:
            zuuluu = zuuluu.debug;
            tangon = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 9;
            michal = golfie[michal];
            michal = tangon.bind(report)(michal);
            report = michal.BoolValue;
            tangon = report.create;
            michal = {};
            oscard = oscard.rtcPanelShowVoiceStates;
            michal['value'] = oscard;
            michal = tangon.bind(report)(michal);
            zuuluu['rtcPanelShowVoiceStates'] = michal;
            entity = true;
 1459:
            return entity;
        }
    };
    tangon['run'] = golfie;
    golfie = function() { // Original name: cleanup
        entity = undefined;
        return entity;
    };
    tangon['cleanup'] = golfie;
    michal[3] = tangon;
    tangon = {};
    golfie = 7;
    tangon['version'] = golfie;
    golfie = function(argFoo) { // Original name: run
        report = _closure1_slot7;
        michal = _closure1_slot0;
        oscard = _closure1_slot2;
        entity = 4;
        entity = oscard[entity];
        tangon = undefined;
        entity = michal.bind(tangon)(entity);
        entity = entity.HotspotLocations;
        zuuluu = entity.APPLICATION_COMMAND_TOOLTIP;
        entity = 10;
        entity = oscard[entity];
        entity = michal.bind(tangon)(entity);
        entity = entity.DismissibleContent;
        michal = entity.APPLICATION_COMMAND_TOOLTIP;
        entity = argFoo;
        entity = report.bind(tangon)(entity, zuuluu, michal);
        return entity;
    };
    tangon['run'] = golfie;
    golfie = function() { // Original name: cleanup
        entity = undefined;
        return entity;
    };
    tangon['cleanup'] = golfie;
    michal[4] = tangon;
    tangon = {};
    golfie = 8;
    tangon['version'] = golfie;
    golfie = function(argFoo) { // Original name: run
        report = _closure1_slot7;
        michal = _closure1_slot0;
        oscard = _closure1_slot2;
        entity = 4;
        entity = oscard[entity];
        tangon = undefined;
        entity = michal.bind(tangon)(entity);
        entity = entity.HotspotLocations;
        zuuluu = entity.CHANNEL_BANNER_MEMBER_LIST_NOTICE;
        entity = 10;
        entity = oscard[entity];
        entity = michal.bind(tangon)(entity);
        entity = entity.DismissibleContent;
        michal = entity.CHANNELINFO_CHANNELBANNER_NOTICE;
        entity = argFoo;
        entity = report.bind(tangon)(entity, zuuluu, michal);
        return entity;
    };
    tangon['run'] = golfie;
    golfie = function() { // Original name: cleanup
        entity = undefined;
        return entity;
    };
    tangon['cleanup'] = golfie;
    michal[5] = tangon;
    tangon = {};
    golfie = 9;
    tangon['version'] = golfie;
    golfie = function(argFoo) { // Original name: run
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            golfie = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 4;
            tangon = michal[entity];
            report = undefined;
            tangon = golfie.bind(report)(tangon);
            oscard = tangon.HotspotStore;
            tangon = oscard.hasHiddenHotspot;
            michal = michal[entity];
            michal = golfie.bind(report)(michal);
            michal = michal.HotspotLocations;
            michal = michal.MULTI_ACCOUNT_TOOLTIP;
            michal = tangon.bind(oscard)(michal);
            if(!michal) { _fun00016_ip = 111; continue _fun00015 }
 66:
            tangon = _closure1_slot0;
            oscard = _closure1_slot2;
            michal = 6;
            michal = oscard[michal];
            michal = tangon.bind(report)(michal);
            golfie = michal.Storage;
            oscard = golfie.set;
            tangon = _closure1_slot5;
            michal = 'true';
            michal = oscard.bind(golfie)(tangon, michal);
 111:
            tangon = _closure1_slot7;
            michal = _closure1_slot0;
            oscard = _closure1_slot2;
            entity = oscard[entity];
            entity = michal.bind(report)(entity);
            entity = entity.HotspotLocations;
            zuuluu = entity.MULTI_ACCOUNT_TOOLTIP;
            entity = 10;
            entity = oscard[entity];
            entity = michal.bind(report)(entity);
            entity = entity.DismissibleContent;
            michal = entity.ACCOUNT_MULTIACCOUNT_TOOLTIP;
            entity = argFoo;
            entity = tangon.bind(report)(entity, zuuluu, michal);
            return entity;
        }
    };
    tangon['run'] = golfie;
    golfie = function() { // Original name: cleanup
        entity = undefined;
        return entity;
    };
    tangon['cleanup'] = golfie;
    michal[6] = tangon;
    tangon = {};
    golfie = 10;
    tangon['version'] = golfie;
    golfie = function(argFoo) { // Original name: run
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            oscard = argFoo;
            verify = _closure1_slot7;
            tangon = _closure1_slot0;
            golfie = _closure1_slot2;
            entity = 4;
            entity = golfie[entity];
            report = undefined;
            entity = tangon.bind(report)(entity);
            entity = entity.HotspotLocations;
            michal = entity.HUB_LINK_CHANNEL_NOTICE;
            option = 10;
            entity = golfie[option];
            entity = tangon.bind(report)(entity);
            entity = entity.DismissibleContent;
            entity = entity.CHANNEL_NOTICE_HUBLINK;
            entity = verify.bind(report)(oscard, michal, entity);
            michal = 6;
            michal = golfie[michal];
            michal = tangon.bind(report)(michal);
            golfie = michal.Storage;
            tangon = golfie.get;
            michal = 'channelNotices';
            golfie = tangon.bind(golfie)(michal);
            michal = null;
            if(!(michal == golfie)) { _fun00018_ip = 117; continue _fun00017 }
 115:
            golfie = {};
 117:
            michal = _closure1_slot4;
            michal = michal.INVITE;
            michal = golfie[michal];
            tangon = false;
            michal = tangon === michal;
            if(!michal) { _fun00018_ip = 179; continue _fun00017 }
 140:
            offset = _closure1_slot6;
            yankee = _closure1_slot0;
            verify = _closure1_slot2;
            verify = verify[option];
            verify = yankee.bind(report)(verify);
            verify = verify.DismissibleContent;
            verify = verify.CHANNEL_NOTICE_INVITE;
            michal = offset.bind(report)(oscard, verify);
 179:
            if(!michal) { _fun00018_ip = 184; continue _fun00017 }
 182:
            entity = true;
 184:
            michal = _closure1_slot4;
            michal = michal.QUICKSWITCHER;
            michal = golfie[michal];
            michal = tangon === michal;
            if(!michal) { _fun00018_ip = 244; continue _fun00017 }
 205:
            offset = _closure1_slot6;
            yankee = _closure1_slot0;
            verify = _closure1_slot2;
            verify = verify[option];
            verify = yankee.bind(report)(verify);
            verify = verify.DismissibleContent;
            verify = verify.CHANNEL_NOTICE_QUICKSWITCHER;
            michal = offset.bind(report)(oscard, verify);
 244:
            if(!michal) { _fun00018_ip = 249; continue _fun00017 }
 247:
            entity = true;
 249:
            michal = _closure1_slot4;
            michal = michal.GUILD_BOOSTING;
            michal = golfie[michal];
            michal = tangon === michal;
            if(!michal) { _fun00018_ip = 309; continue _fun00017 }
 270:
            tangon = _closure1_slot6;
            golfie = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[option];
            zuuluu = golfie.bind(report)(zuuluu);
            zuuluu = zuuluu.DismissibleContent;
            zuuluu = zuuluu.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION;
            michal = tangon.bind(report)(oscard, zuuluu);
 309:
            if(!michal) { _fun00018_ip = 314; continue _fun00017 }
 312:
            entity = true;
 314:
            return entity;
        }
    };
    tangon['run'] = golfie;
    golfie = function() { // Original name: cleanup
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 6;
        michal = michal[entity];
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        tangon = michal.Storage;
        zuuluu = tangon.remove;
        michal = 'channelNotices';
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    tangon['cleanup'] = golfie;
    michal[7] = tangon;
    tangon = {};
    golfie = 11;
    tangon['version'] = golfie;
    golfie = function(argFoo) { // Original name: run
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            oscard = argFoo;
            golfie = _closure1_slot7;
            verify = _closure1_slot0;
            entity = _closure1_slot2;
            zuuluu = 4;
            tangon = entity[zuuluu];
            report = undefined;
            tangon = verify.bind(report)(tangon);
            tangon = tangon.HotspotLocations;
            tangon = tangon.GUILD_EVENT_UPSELL;
            option = 10;
            entity = entity[option];
            entity = verify.bind(report)(entity);
            entity = entity.DismissibleContent;
            entity = entity.GUILD_HEADER_EVENT_UPSELL;
            tangon = golfie.bind(report)(oscard, tangon, entity);
            entity = false;
            if(!tangon) { _fun00020_ip = 82; continue _fun00019 }
 80:
            entity = true;
 82:
            verify = _closure1_slot7;
            offset = _closure1_slot0;
            tangon = _closure1_slot2;
            golfie = tangon[zuuluu];
            golfie = offset.bind(report)(golfie);
            golfie = golfie.HotspotLocations;
            golfie = golfie.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP;
            tangon = tangon[option];
            tangon = offset.bind(report)(tangon);
            tangon = tangon.DismissibleContent;
            tangon = tangon.GUILD_HEADER_PREMIUM_GUILD_PROGRESS;
            tangon = verify.bind(report)(oscard, golfie, tangon);
            if(!tangon) { _fun00020_ip = 148; continue _fun00019 }
 146:
            entity = true;
 148:
            tangon = _closure1_slot7;
            golfie = _closure1_slot0;
            michal = _closure1_slot2;
            zuuluu = michal[zuuluu];
            zuuluu = golfie.bind(report)(zuuluu);
            zuuluu = zuuluu.HotspotLocations;
            zuuluu = zuuluu.ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP;
            michal = michal[option];
            michal = golfie.bind(report)(michal);
            michal = michal.DismissibleContent;
            michal = michal.GUILD_HEADER_ANIMATED_GUILD_BANNER;
            michal = tangon.bind(report)(oscard, zuuluu, michal);
            if(!michal) { _fun00020_ip = 214; continue _fun00019 }
 212:
            entity = true;
 214:
            return entity;
        }
    };
    tangon['run'] = golfie;
    golfie = function() { // Original name: cleanup
        entity = undefined;
        return entity;
    };
    tangon['cleanup'] = golfie;
    michal[8] = tangon;
    golfie = {};
    tangon = 12;
    golfie['version'] = tangon;
    verify = function(argFoo) { // Original name: run
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            oscard = argFoo;
            michal = _closure1_slot0;
            entity = _closure1_slot2;
            golfie = 6;
            entity = entity[golfie];
            report = undefined;
            entity = michal.bind(report)(entity);
            tangon = entity.Storage;
            michal = tangon.get;
            entity = 'hideNag';
            michal = michal.bind(tangon)(entity);
            if(!michal) { _fun00022_ip = 95; continue _fun00021 }
 53:
            tangon = _closure1_slot6;
            option = _closure1_slot0;
            verify = _closure1_slot2;
            entity = 10;
            entity = verify[entity];
            entity = option.bind(report)(entity);
            entity = entity.DismissibleContent;
            entity = entity.NAGBAR_NOTICE_DOWNLOAD;
            michal = tangon.bind(report)(oscard, entity);
 95:
            entity = false;
            if(!michal) { _fun00022_ip = 102; continue _fun00021 }
 100:
            entity = true;
 102:
            tangon = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[golfie];
            michal = tangon.bind(report)(michal);
            option = michal.Storage;
            tangon = option.get;
            michal = 'hideConnectSpotify';
            michal = tangon.bind(option)(michal);
            if(!michal) { _fun00022_ip = 186; continue _fun00021 }
 144:
            option = _closure1_slot6;
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            tangon = 10;
            tangon = offset[tangon];
            tangon = verify.bind(report)(tangon);
            tangon = tangon.DismissibleContent;
            tangon = tangon.NAGBAR_NOTICE_CONNECT_SPOTIFY;
            michal = option.bind(report)(oscard, tangon);
 186:
            if(!michal) { _fun00022_ip = 191; continue _fun00021 }
 189:
            entity = true;
 191:
            tangon = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[golfie];
            michal = tangon.bind(report)(michal);
            option = michal.Storage;
            tangon = option.get;
            michal = 'hideConnectPlayStation';
            michal = tangon.bind(option)(michal);
            if(!michal) { _fun00022_ip = 275; continue _fun00021 }
 233:
            option = _closure1_slot6;
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            tangon = 10;
            tangon = offset[tangon];
            tangon = verify.bind(report)(tangon);
            tangon = tangon.DismissibleContent;
            tangon = tangon.NAGBAR_NOTICE_CONNECT_PLAYSTATION;
            michal = option.bind(report)(oscard, tangon);
 275:
            if(!michal) { _fun00022_ip = 280; continue _fun00021 }
 278:
            entity = true;
 280:
            tangon = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[golfie];
            michal = tangon.bind(report)(michal);
            golfie = michal.Storage;
            tangon = golfie.get;
            michal = 'hideMFASMSNotice';
            michal = tangon.bind(golfie)(michal);
            if(!michal) { _fun00022_ip = 364; continue _fun00021 }
 322:
            tangon = _closure1_slot6;
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            zuuluu = 10;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(report)(zuuluu);
            zuuluu = zuuluu.DismissibleContent;
            zuuluu = zuuluu.NAGBAR_NOTICE_MFA_SMS_BACKUP;
            michal = tangon.bind(report)(oscard, zuuluu);
 364:
            if(!michal) { _fun00022_ip = 369; continue _fun00021 }
 367:
            entity = true;
 369:
            return entity;
        }
    };
    golfie['run'] = verify;
    verify = function() { // Original name: cleanup
        zuuluu = _closure1_slot0;
        tangon = _closure1_slot2;
        michal = 6;
        report = tangon[michal];
        entity = undefined;
        report = zuuluu.bind(entity)(report);
        golfie = report.Storage;
        oscard = golfie.remove;
        report = 'hideNag';
        report = oscard.bind(golfie)(report);
        report = tangon[michal];
        report = zuuluu.bind(entity)(report);
        golfie = report.Storage;
        oscard = golfie.remove;
        report = 'hideConnectSpotify';
        report = oscard.bind(golfie)(report);
        report = tangon[michal];
        report = zuuluu.bind(entity)(report);
        golfie = report.Storage;
        oscard = golfie.remove;
        report = 'hideConnectPlayStation';
        report = oscard.bind(golfie)(report);
        michal = tangon[michal];
        michal = zuuluu.bind(entity)(michal);
        tangon = michal.Storage;
        zuuluu = tangon.remove;
        michal = 'hideMFASMSNotice';
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    golfie['cleanup'] = verify;
    michal[9] = golfie;
    golfie = {};
    verify = 13;
    golfie['version'] = verify;
    verify = function(argFoo) { // Original name: run
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            oscard = argFoo;
            zuuluu = _closure1_slot0;
            entity = _closure1_slot2;
            golfie = 6;
            entity = entity[golfie];
            report = undefined;
            entity = zuuluu.bind(report)(entity);
            tangon = entity.Storage;
            zuuluu = tangon.get;
            entity = 'hidePremiumPromo';
            zuuluu = zuuluu.bind(tangon)(entity);
            if(!zuuluu) { _fun00024_ip = 95; continue _fun00023 }
 53:
            tangon = _closure1_slot6;
            option = _closure1_slot0;
            verify = _closure1_slot2;
            entity = 10;
            entity = verify[entity];
            entity = option.bind(report)(entity);
            entity = entity.DismissibleContent;
            entity = entity.NAGBAR_NOTICE_PREMIUM_PROMO;
            zuuluu = tangon.bind(report)(oscard, entity);
 95:
            entity = false;
            if(!zuuluu) { _fun00024_ip = 102; continue _fun00023 }
 100:
            entity = true;
 102:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[golfie];
            zuuluu = tangon.bind(report)(zuuluu);
            option = zuuluu.Storage;
            tangon = option.get;
            zuuluu = 'hidePremiumTier2TrialEnding';
            zuuluu = tangon.bind(option)(zuuluu);
            if(!zuuluu) { _fun00024_ip = 186; continue _fun00023 }
 144:
            option = _closure1_slot6;
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            tangon = 10;
            tangon = offset[tangon];
            tangon = verify.bind(report)(tangon);
            tangon = tangon.DismissibleContent;
            tangon = tangon.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING;
            zuuluu = option.bind(report)(oscard, tangon);
 186:
            if(!zuuluu) { _fun00024_ip = 191; continue _fun00023 }
 189:
            entity = true;
 191:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[golfie];
            zuuluu = tangon.bind(report)(zuuluu);
            golfie = zuuluu.Storage;
            tangon = golfie.get;
            zuuluu = 'hidePremiumReactivateNotice';
            zuuluu = tangon.bind(golfie)(zuuluu);
            if(!zuuluu) { _fun00024_ip = 275; continue _fun00023 }
 233:
            golfie = _closure1_slot6;
            option = _closure1_slot0;
            verify = _closure1_slot2;
            tangon = 10;
            tangon = verify[tangon];
            tangon = option.bind(report)(tangon);
            tangon = tangon.DismissibleContent;
            tangon = tangon.NAGBAR_NOTICE_PREMIUM_REACTIVATE;
            zuuluu = golfie.bind(report)(oscard, tangon);
 275:
            if(!zuuluu) { _fun00024_ip = 280; continue _fun00023 }
 278:
            entity = true;
 280:
            tangon = _closure1_slot7;
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            michal = 4;
            michal = option[michal];
            michal = golfie.bind(report)(michal);
            michal = michal.HotspotLocations;
            zuuluu = michal.INVITE_SPLASH_GUILD_HEADER_TOOLTIP;
            michal = 10;
            michal = option[michal];
            michal = golfie.bind(report)(michal);
            michal = michal.DismissibleContent;
            michal = michal.GUILD_HEADER_INVITE_SPLASH;
            michal = tangon.bind(report)(oscard, zuuluu, michal);
            if(!michal) { _fun00024_ip = 352; continue _fun00023 }
 350:
            entity = true;
 352:
            return entity;
        }
    };
    golfie['run'] = verify;
    verify = function() { // Original name: cleanup
        zuuluu = _closure1_slot0;
        tangon = _closure1_slot2;
        michal = 6;
        report = tangon[michal];
        entity = undefined;
        report = zuuluu.bind(entity)(report);
        golfie = report.Storage;
        oscard = golfie.remove;
        report = 'hidePremiumPromo';
        report = oscard.bind(golfie)(report);
        report = tangon[michal];
        report = zuuluu.bind(entity)(report);
        golfie = report.Storage;
        oscard = golfie.remove;
        report = 'hidePremiumTier2TrialEnding';
        report = oscard.bind(golfie)(report);
        michal = tangon[michal];
        michal = zuuluu.bind(entity)(michal);
        tangon = michal.Storage;
        zuuluu = tangon.remove;
        michal = 'hidePremiumReactivateNotice';
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    golfie['cleanup'] = verify;
    michal[10] = golfie;
    golfie = {};
    verify = 14;
    golfie['version'] = verify;
    verify = function(argFoo) { // Original name: run
        report = _closure1_slot7;
        michal = _closure1_slot0;
        oscard = _closure1_slot2;
        entity = 4;
        entity = oscard[entity];
        tangon = undefined;
        entity = michal.bind(tangon)(entity);
        entity = entity.HotspotLocations;
        zuuluu = entity.ACTIVITY_BEB_TUTORIAL;
        entity = 10;
        entity = oscard[entity];
        entity = michal.bind(tangon)(entity);
        entity = entity.DismissibleContent;
        michal = entity.ACTIVITIES_TUTORIAL_COACH_MARK;
        entity = argFoo;
        entity = report.bind(tangon)(entity, zuuluu, michal);
        return entity;
    };
    golfie['run'] = verify;
    verify = function() { // Original name: cleanup
        entity = undefined;
        return entity;
    };
    golfie['cleanup'] = verify;
    michal[11] = golfie;
    golfie = {};
    verify = 15;
    golfie['version'] = verify;
    verify = function(argFoo) { // Original name: run
        report = _closure1_slot7;
        michal = _closure1_slot0;
        oscard = _closure1_slot2;
        entity = 4;
        entity = oscard[entity];
        tangon = undefined;
        entity = michal.bind(tangon)(entity);
        entity = entity.HotspotLocations;
        zuuluu = entity.NOW_PLAYING_CONSENT_CARD;
        entity = 10;
        entity = oscard[entity];
        entity = michal.bind(tangon)(entity);
        entity = entity.DismissibleContent;
        michal = entity.NOW_PLAYING_CONSENT_CARD;
        entity = argFoo;
        entity = report.bind(tangon)(entity, zuuluu, michal);
        return entity;
    };
    golfie['run'] = verify;
    verify = function() { // Original name: cleanup
        entity = undefined;
        return entity;
    };
    golfie['cleanup'] = verify;
    michal[12] = golfie;
    golfie = {};
    verify = 16;
    golfie['version'] = verify;
    verify = function(argFoo) { // Original name: run
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            zuuluu = argFoo;
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            entity = 6;
            entity = report[entity];
            report = undefined;
            entity = tangon.bind(report)(entity);
            oscard = entity.Storage;
            tangon = oscard.get;
            entity = 'PromotionsPersistedStore';
            entity = tangon.bind(oscard)(entity);
            golfie = null;
            if(!(golfie != entity)) { _fun00026_ip = 206; continue _fun00025 }
 59:
            entity = entity._state;
            oscard = entity.lastDismissedOutboundPromotionStartDate;
            entity = golfie != oscard;
            if(!entity) { _fun00026_ip = 145; continue _fun00025 }
 78:
            tangon = zuuluu.userContent;
            if(!(golfie == tangon)) { _fun00026_ip = 129; continue _fun00025 }
 88:
            option = _closure1_slot0;
            verify = _closure1_slot2;
            tangon = 5;
            tangon = verify[tangon];
            tangon = option.bind(report)(tangon);
            option = tangon.UserContentSettings;
            tangon = option.create;
            tangon = tangon.bind(option)();
            zuuluu['userContent'] = tangon;
 129:
            tangon = zuuluu.userContent;
            tangon = tangon.lastDismissedOutboundPromotionStartDate;
            entity = golfie == tangon;
 145:
            if(!entity) { _fun00026_ip = 204; continue _fun00025 }
 148:
            zuuluu = zuuluu.userContent;
            tangon = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 9;
            michal = golfie[michal];
            michal = tangon.bind(report)(michal);
            report = michal.StringValue;
            tangon = report.create;
            michal = {};
            michal['value'] = oscard;
            michal = tangon.bind(report)(michal);
            zuuluu['lastDismissedOutboundPromotionStartDate'] = michal;
            entity = true;
 204:
            return entity;
 206:
            entity = false;
            return entity;
        }
    };
    golfie['run'] = verify;
    verify = function() { // Original name: cleanup
        entity = undefined;
        return entity;
    };
    golfie['cleanup'] = verify;
    michal[13] = golfie;
    golfie = {};
    verify = 17;
    golfie['version'] = verify;
    verify = function(argFoo) { // Original name: run
        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
            zuuluu = argFoo;
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            entity = 8;
            entity = report[entity];
            report = undefined;
            entity = tangon.bind(report)(entity);
            oscard = entity.PersistedStore;
            tangon = oscard.migrateAndReadStoreState;
            entity = 'ExpressionSuggestionsPersistedStore';
            golfie = null;
            entity = tangon.bind(oscard)(entity, golfie);
            entity = entity.state;
            if(!(golfie != entity)) { _fun00028_ip = 207; continue _fun00027 }
 66:
            oscard = entity.expressionSuggestionsEnabled;
            entity = golfie != oscard;
            if(!entity) { _fun00028_ip = 146; continue _fun00027 }
 79:
            tangon = zuuluu.textAndImages;
            if(!(golfie == tangon)) { _fun00028_ip = 130; continue _fun00027 }
 89:
            option = _closure1_slot0;
            verify = _closure1_slot2;
            tangon = 5;
            tangon = verify[tangon];
            tangon = option.bind(report)(tangon);
            option = tangon.TextAndImagesSettings;
            tangon = option.create;
            tangon = tangon.bind(option)();
            zuuluu['textAndImages'] = tangon;
 130:
            tangon = zuuluu.textAndImages;
            tangon = tangon.expressionSuggestionsEnabled;
            entity = golfie == tangon;
 146:
            if(!entity) { _fun00028_ip = 205; continue _fun00027 }
 149:
            zuuluu = zuuluu.textAndImages;
            tangon = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 9;
            michal = golfie[michal];
            michal = tangon.bind(report)(michal);
            report = michal.BoolValue;
            tangon = report.create;
            michal = {};
            michal['value'] = oscard;
            michal = tangon.bind(report)(michal);
            zuuluu['expressionSuggestionsEnabled'] = michal;
            entity = true;
 205:
            return entity;
 207:
            entity = false;
            return entity;
        }
    };
    golfie['run'] = verify;
    verify = function() { // Original name: cleanup
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 6;
        michal = michal[entity];
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        tangon = michal.Storage;
        zuuluu = tangon.remove;
        michal = 'ExpressionSuggestionsPersistedStore';
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    golfie['cleanup'] = verify;
    michal[14] = golfie;
    golfie = {};
    verify = 18;
    golfie['version'] = verify;
    verify = function(argFoo) { // Original name: run
        _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
            oscard = argFoo;
            golfie = _closure1_slot7;
            verify = _closure1_slot0;
            entity = _closure1_slot2;
            zuuluu = 4;
            tangon = entity[zuuluu];
            report = undefined;
            tangon = verify.bind(report)(tangon);
            tangon = tangon.HotspotLocations;
            tangon = tangon.GUILD_DELETE_FEEDBACK;
            option = 10;
            entity = entity[option];
            entity = verify.bind(report)(entity);
            entity = entity.DismissibleContent;
            entity = entity.GUILD_DELETE_FEEDBACK;
            tangon = golfie.bind(report)(oscard, tangon, entity);
            entity = false;
            if(!tangon) { _fun00030_ip = 82; continue _fun00029 }
 80:
            entity = true;
 82:
            tangon = _closure1_slot7;
            golfie = _closure1_slot0;
            michal = _closure1_slot2;
            zuuluu = michal[zuuluu];
            zuuluu = golfie.bind(report)(zuuluu);
            zuuluu = zuuluu.HotspotLocations;
            zuuluu = zuuluu.GUILD_LEAVE_FEEDBACK;
            michal = michal[option];
            michal = golfie.bind(report)(michal);
            michal = michal.DismissibleContent;
            michal = michal.GUILD_LEAVE_FEEDBACK;
            michal = tangon.bind(report)(oscard, zuuluu, michal);
            if(!michal) { _fun00030_ip = 148; continue _fun00029 }
 146:
            entity = true;
 148:
            return entity;
        }
    };
    golfie['run'] = verify;
    verify = function() { // Original name: cleanup
        entity = undefined;
        return entity;
    };
    golfie['cleanup'] = verify;
    michal[15] = golfie;
    golfie = {};
    verify = 19;
    golfie['version'] = verify;
    verify = function(argFoo) { // Original name: run
        _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 6;
            entity = tangon[entity];
            report = undefined;
            entity = zuuluu.bind(report)(entity);
            tangon = entity.Storage;
            zuuluu = tangon.get;
            entity = 'forumHelperCardStorageKey';
            entity = zuuluu.bind(tangon)(entity);
            zuuluu = null;
            zuuluu = zuuluu != entity;
            if(!zuuluu) { _fun00032_ip = 59; continue _fun00031 }
 56:
            zuuluu = entity;
 59:
            entity = false;
            if(!zuuluu) { _fun00032_ip = 109; continue _fun00031 }
 64:
            tangon = _closure1_slot6;
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot2;
            michal = 10;
            michal = oscard[michal];
            michal = zuuluu.bind(report)(michal);
            michal = michal.DismissibleContent;
            zuuluu = michal.FORUM_CHANNEL_HELPER_CARD;
            michal = argFoo;
            entity = tangon.bind(report)(michal, zuuluu);
 109:
            return entity;
        }
    };
    golfie['run'] = verify;
    verify = function() { // Original name: cleanup
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 6;
        michal = michal[entity];
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        tangon = michal.Storage;
        zuuluu = tangon.remove;
        michal = 'forumHelperCardStorageKey';
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    golfie['cleanup'] = verify;
    michal[16] = golfie;
    golfie = {};
    verify = 20;
    golfie['version'] = verify;
    verify = function(argFoo) { // Original name: run
        _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
            entity = argFoo;
            tangon = _closure1_slot0;
            michal = _closure1_slot2;
            option = 6;
            michal = michal[option];
            report = undefined;
            michal = tangon.bind(report)(michal);
            tangon = michal.Storage;
            michal = tangon.get;
            golfie = 'lastChangeLogId';
            michal = michal.bind(tangon)(golfie);
            oscard = null;
            if(!(oscard != michal)) { _fun00034_ip = 284; continue _fun00033 }
 59:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            tangon = 11;
            tangon = offset[tangon];
            verify = verify.bind(report)(tangon);
            tangon = verify.isSnowflake;
            tangon = tangon.bind(verify)(michal);
            if(tangon) { _fun00034_ip = 131; continue _fun00033 }
 93:
            verify = _closure1_slot0;
            tangon = _closure1_slot2;
            tangon = tangon[option];
            tangon = verify.bind(report)(tangon);
            verify = tangon.Storage;
            tangon = verify.remove;
            tangon = tangon.bind(verify)(golfie);
            tangon = false;
            return tangon;
 131:
            tangon = entity.userContent;
            if(!(oscard != tangon)) { _fun00034_ip = 227; continue _fun00033 }
 141:
            tangon = entity.userContent;
            if(!(oscard != tangon)) { _fun00034_ip = 268; continue _fun00033 }
 151:
            tangon = entity.userContent;
            tangon = tangon.lastReceivedChangelogId;
            if(!(oscard != tangon)) { _fun00034_ip = 268; continue _fun00033 }
 167:
            tangon = entity.userContent;
            oscard = tangon.lastReceivedChangelogId;
            tangon = '0';
            if(!(tangon !== oscard)) { _fun00034_ip = 268; continue _fun00033 }
 189:
            oscard = _closure1_slot0;
            tangon = _closure1_slot2;
            tangon = tangon[option];
            tangon = oscard.bind(report)(tangon);
            oscard = tangon.Storage;
            tangon = oscard.remove;
            tangon = tangon.bind(oscard)(golfie);
            tangon = false;
            return tangon;
 227:
            tangon = _closure1_slot0;
            oscard = _closure1_slot2;
            zuuluu = 5;
            zuuluu = oscard[zuuluu];
            zuuluu = tangon.bind(report)(zuuluu);
            tangon = zuuluu.UserContentSettings;
            zuuluu = tangon.create;
            zuuluu = zuuluu.bind(tangon)();
            entity['userContent'] = zuuluu;
 268:
            entity = entity.userContent;
            entity['lastReceivedChangelogId'] = michal;
            entity = true;
            return entity;
 284:
            entity = false;
            return entity;
        }
    };
    golfie['run'] = verify;
    option = function() { // Original name: cleanup
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 6;
        michal = michal[entity];
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        tangon = michal.Storage;
        zuuluu = tangon.remove;
        michal = 'lastChangeLogId';
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    golfie['cleanup'] = option;
    michal[17] = golfie;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/user_settings/PreloadedUserSettingsMigrations.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();