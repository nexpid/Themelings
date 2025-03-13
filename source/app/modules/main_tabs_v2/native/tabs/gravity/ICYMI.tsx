// app/modules/main_tabs_v2/native/tabs/gravity/ICYMI.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    romeon = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = romeon;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: isItemNSFW
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            michal = entity.data;
            zuuluu = michal.kind;
            michal = 'message';
            if(!(michal !== zuuluu)) { _fun00002_ip = 97; continue _fun00001 }
 21:
            michal = entity.data;
            zuuluu = michal.kind;
            michal = 'channelSummary';
            if(!(michal !== zuuluu)) { _fun00002_ip = 45; continue _fun00001 }
 41:
            michal = false;
            return michal;
 45:
            tangon = _closure1_slot13;
            zuuluu = tangon.getChannel;
            michal = entity.data;
            michal = michal.topic;
            michal = michal.channelId;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = null;
            tangon = michal == zuuluu;
            michal = undefined;
            if(tangon) { _fun00002_ip = 95; continue _fun00001 }
 89:
            michal = zuuluu.nsfw;
 95:
            return michal;
 97:
            zuuluu = _closure1_slot13;
            michal = zuuluu.getChannel;
            entity = entity.data;
            entity = entity.message;
            entity = entity.channel_id;
            michal = michal.bind(zuuluu)(entity);
            entity = null;
            zuuluu = entity == michal;
            entity = undefined;
            if(zuuluu) { _fun00002_ip = 146; continue _fun00001 }
 140:
            entity = michal.nsfw;
 146:
            return entity;
        }
    };
    var _closure1_slot26 = entity;
    entity = function() { // Original name: SettingsButton
        tangon = _closure1_slot18;
        oscard = _closure1_slot0;
        verify = _closure1_slot2;
        entity = 19;
        entity = verify[entity];
        zuuluu = undefined;
        entity = oscard.bind(zuuluu)(entity);
        michal = entity.IconButton;
        entity = {'accessibilityLabel': 'button', 'variant': 'tertiary', 'size': 'sm'};
        option = 'sm';
        golfie = _closure1_slot18;
        report = 20;
        report = verify[report];
        report = oscard.bind(zuuluu)(report);
        oscard = report.FiltersHorizontalIcon;
        report = {};
        report['size'] = option;
        report = golfie.bind(zuuluu)(oscard, report);
        entity['icon'] = report;
        report = function() { // Original name: onPress
            tangon = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 21;
            report = michal[entity];
            entity = undefined;
            option = tangon.bind(entity)(report);
            golfie = option.trackItemInteraction;
            oscard = 'filters_button';
            report = 'press_info_button';
            report = golfie.bind(option)(oscard, oscard, report);
            report = _closure1_slot1;
            zuuluu = 22;
            zuuluu = michal[zuuluu];
            oscard = report.bind(entity)(zuuluu);
            report = oscard.openLazy;
            zuuluu = 24;
            zuuluu = michal[zuuluu];
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = 23;
            zuuluu = michal[zuuluu];
            michal = michal.paths;
            tangon = tangon.bind(entity)(zuuluu, michal);
            zuuluu = 'ICYMISettingsActionSheet';
            michal = {};
            michal = report.bind(oscard)(tangon, zuuluu, michal);
            return entity;
        };
        entity['onPress'] = report;
        entity = tangon.bind(zuuluu)(michal, entity);
        return entity;
    };
    var _closure1_slot27 = entity;
    entity = function(argFoo) { // Original name: NotificationsButton
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            kiloes = entity.numUnreadMentions;
            michal = _closure1_slot1;
            result = _closure1_slot2;
            entity = 25;
            entity = result[entity];
            tangon = undefined;
            entity = michal.bind(tangon)(entity);
            entity = entity.bind(tangon)();
            backup = entity.value;
            offset = entity.showDot;
            romeon = _closure1_slot0;
            entity = 26;
            entity = result[entity];
            michal = romeon.bind(tangon)(entity);
            entity = michal.useNavigation;
            entity = entity.bind(michal)();
            var _closure2_slot0 = entity;
            entity = _closure1_slot24;
            sizing = entity.bind(tangon)();
            zuuluu = _closure1_slot18;
            entity = 19;
            entity = result[entity];
            entity = romeon.bind(tangon)(entity);
            michal = entity.IconButton;
            entity = {'accessibilityLabel': 'button', 'variant': 'tertiary', 'size': 'sm'};
            output = 'sm';
            option = _closure1_slot19;
            golfie = _closure1_slot6;
            oscard = {};
            verify = {'flexDirection': 'row', 'gap': 4};
            oscard['style'] = verify;
            foxtra = _closure1_slot18;
            verify = 27;
            verify = result[verify];
            verify = romeon.bind(tangon)(verify);
            romeon = verify.AtIcon;
            verify = {};
            verify['size'] = output;
            romeon = foxtra.bind(tangon)(romeon, verify);
            verify = new Array(2);
            verify[0] = romeon;
            if(offset) { _fun00004_ip = 208; continue _fun00003 }
 202:
            romeon = 0;
            offset = kiloes > romeon;
 208:
            if(!offset) { _fun00004_ip = 261; continue _fun00003 }
 211:
            foxtra = _closure1_slot18;
            romeon = _closure1_slot1;
            output = _closure1_slot2;
            yankee = 28;
            yankee = output[yankee];
            romeon = romeon.bind(tangon)(yankee);
            yankee = {};
            sizing = sizing.notificationBadge;
            yankee['style'] = sizing;
            backup = backup + kiloes;
            yankee['value'] = backup;
            offset = foxtra.bind(tangon)(romeon, yankee);
 261:
            verify[1] = offset;
            oscard['children'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            entity['icon'] = oscard;
            report = function() { // Original name: onPress
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 21;
                michal = michal[entity];
                entity = undefined;
                report = zuuluu.bind(entity)(michal);
                tangon = report.trackItemInteraction;
                zuuluu = 'notification_button';
                michal = 'press_notification_button';
                michal = tangon.bind(report)(zuuluu, zuuluu, michal);
                tangon = _closure2_slot0;
                zuuluu = tangon.push;
                michal = 'notifications-screen';
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            entity['onPress'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot28 = entity;
    entity = function() { // Original name: InfoButton
        tangon = _closure1_slot18;
        oscard = _closure1_slot0;
        verify = _closure1_slot2;
        entity = 19;
        entity = verify[entity];
        zuuluu = undefined;
        entity = oscard.bind(zuuluu)(entity);
        michal = entity.IconButton;
        entity = {'accessibilityLabel': 'button', 'variant': 'tertiary', 'size': 'sm'};
        option = 'sm';
        golfie = _closure1_slot18;
        report = 29;
        report = verify[report];
        report = oscard.bind(zuuluu)(report);
        oscard = report.CircleInformationIcon;
        report = {};
        report['size'] = option;
        report = golfie.bind(zuuluu)(oscard, report);
        entity['icon'] = report;
        report = function() { // Original name: onPress
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 21;
            michal = tangon[entity];
            entity = undefined;
            golfie = zuuluu.bind(entity)(michal);
            oscard = golfie.trackItemInteraction;
            report = 'info_button';
            michal = 'press_info_button';
            michal = oscard.bind(golfie)(report, report, michal);
            michal = 30;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.pushICYMIInfoModal;
            michal = {};
            report = true;
            michal['extendedOnboarding'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        entity['onPress'] = report;
        entity = tangon.bind(zuuluu)(michal, entity);
        return entity;
    };
    var _closure1_slot29 = entity;
    entity = function(argFoo) { // Original name: ICYMIHeaderTextWrapper
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            entity = entity.isPressable;
            zuuluu = _closure1_slot24;
            report = undefined;
            option = zuuluu.bind(report)();
            verify = _closure1_slot5;
            oscard = verify.useMemo;
            tangon = function() {
                tangon = _closure1_slot19;
                zuuluu = _closure1_slot20;
                michal = {};
                offset = _closure1_slot18;
                romeon = _closure1_slot0;
                foxtra = _closure1_slot2;
                oscard = 31;
                report = foxtra[oscard];
                entity = undefined;
                report = romeon.bind(entity)(report);
                option = report.Text;
                report = {'color': 'header-primary', 'variant': 'heading-lg/bold', 'maxFontSizeMultiplier': 1.75, 'accessibilityRole': 'header'};
                verify = 32;
                yankee = foxtra[verify];
                yankee = romeon.bind(entity)(yankee);
                kiloes = yankee.intl;
                backup = kiloes.string;
                yankee = foxtra[verify];
                yankee = romeon.bind(entity)(yankee);
                yankee = yankee.t;
                yankee = yankee.SY4sdX;
                yankee = backup.bind(kiloes)(yankee);
                report['children'] = yankee;
                option = offset.bind(entity)(option, report);
                report = new Array(2);
                report[0] = option;
                option = _closure1_slot18;
                oscard = foxtra[oscard];
                oscard = romeon.bind(entity)(oscard);
                golfie = oscard.Text;
                oscard = {'color': 'text-brand', 'variant': 'text-xs/bold'};
                offset = {};
                yankee = 4;
                offset['marginTop'] = yankee;
                oscard['style'] = offset;
                offset = foxtra[verify];
                offset = romeon.bind(entity)(offset);
                yankee = offset.intl;
                offset = yankee.string;
                verify = foxtra[verify];
                verify = romeon.bind(entity)(verify);
                verify = verify.t;
                verify = verify.Ac2OZG;
                verify = offset.bind(yankee)(verify);
                oscard['children'] = verify;
                oscard = option.bind(entity)(golfie, oscard);
                report[1] = oscard;
                michal['children'] = report;
                entity = tangon.bind(entity)(zuuluu, michal);
                return entity;
            };
            zuuluu = new Array(0);
            oscard = oscard.bind(verify)(tangon, zuuluu);
            tangon = _closure1_slot18;
            if(entity) { _fun00006_ip = 85; continue _fun00005 }
 57:
            zuuluu = _closure1_slot6;
            entity = {};
            verify = option.headerText;
            entity['style'] = verify;
            entity['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, entity);
            _fun00006_ip = 144; continue _fun00005;
 85:
            zuuluu = _closure1_slot0;
            verify = _closure1_slot2;
            michal = 33;
            michal = verify[michal];
            michal = zuuluu.bind(report)(michal);
            zuuluu = michal.PressableOpacity;
            michal = {};
            option = option.headerText;
            michal['style'] = option;
            golfie = function() { // Original name: onPress
                zuuluu = _closure1_slot0;
                tangon = _closure1_slot2;
                entity = 21;
                michal = tangon[entity];
                entity = undefined;
                golfie = zuuluu.bind(entity)(michal);
                oscard = golfie.trackItemInteraction;
                report = 'title_text';
                michal = 'press_info_title_text';
                michal = oscard.bind(golfie)(report, report, michal);
                michal = 30;
                michal = tangon[michal];
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.pushICYMIInfoModal;
                michal = {};
                report = true;
                michal['extendedOnboarding'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            michal['onPress'] = golfie;
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 144:
            return entity;
        }
    };
    var _closure1_slot30 = entity;
    entity = function() { // Original name: handleEndReached
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 41;
        michal = michal[entity];
        entity = undefined;
        zuuluu = zuuluu.bind(entity)(michal);
        michal = zuuluu.hydrateNextPage;
        michal = michal.bind(zuuluu)();
        return entity;
    };
    var _closure1_slot31 = entity;
    entity = function(argFoo) { // Original name: itemToType
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            golfie = argFoo;
            entity = golfie.data;
            michal = entity.kind;
            entity = 'end';
            if(!(entity !== michal)) { _fun00008_ip = 385; continue _fun00007 }
 24:
            michal = golfie.data;
            zuuluu = michal.kind;
            michal = 'loading';
            if(!(michal !== zuuluu)) { _fun00008_ip = 382; continue _fun00007 }
 45:
            zuuluu = golfie.data;
            zuuluu = zuuluu.kind;
            report = 'message';
            if(!(report !== zuuluu)) { _fun00008_ip = 281; continue _fun00007 }
 66:
            zuuluu = golfie.data;
            oscard = zuuluu.kind;
            zuuluu = 'summary';
            tangon = 'channelSummary';
            if(!(tangon !== oscard)) { _fun00008_ip = 279; continue _fun00007 }
 93:
            tangon = golfie.data;
            option = tangon.kind;
            tangon = 'guild_event';
            oscard = 'guildEvent';
            if(!(oscard !== option)) { _fun00008_ip = 276; continue _fun00007 }
 120:
            oscard = golfie.data;
            option = oscard.kind;
            oscard = 'contentInventory';
            if(!(oscard !== option)) { _fun00008_ip = 201; continue _fun00007 }
 140:
            oscard = golfie.data;
            verify = oscard.kind;
            oscard = 'recommended_guilds';
            option = 'recommendedGuilds';
            if(!(option !== verify)) { _fun00008_ip = 199; continue _fun00007 }
 166:
            option = golfie.data;
            offset = option.kind;
            option = 'unknown';
            verify = 'forumThread';
            if(!(verify === offset)) { _fun00008_ip = 196; continue _fun00007 }
 190:
            option = 'forum_thread';
 196:
            oscard = option;
 199:
            _fun00008_ip = 273; continue _fun00007;
 201:
            option = golfie.data;
            option = option.content;
            offset = option.content_type;
            yankee = _closure1_slot0;
            verify = _closure1_slot2;
            option = 43;
            verify = verify[option];
            option = undefined;
            option = yankee.bind(option)(verify);
            option = option.ContentInventoryEntryType;
            verify = option.CUSTOM_STATUS;
            option = 'hotwheels_gaming_activity';
            if(!(offset === verify)) { _fun00008_ip = 270; continue _fun00007 }
 264:
            option = 'hotwheels_custom_status';
 270:
            oscard = option;
 273:
            tangon = oscard;
 276:
            zuuluu = tangon;
 279:
            _fun00008_ip = 379; continue _fun00007;
 281:
            verify = golfie.channelType;
            option = _closure1_slot0;
            oscard = _closure1_slot2;
            tangon = 42;
            tangon = oscard[tangon];
            oscard = undefined;
            tangon = option.bind(oscard)(tangon);
            tangon = tangon.ChannelTypes;
            option = tangon.GUILD_ANNOUNCEMENT;
            tangon = 'announcement';
            if(!(verify !== option)) { _fun00008_ip = 376; continue _fun00007 }
 332:
            golfie = golfie.data;
            option = golfie.messageContext;
            golfie = null;
            verify = golfie == option;
            oscard = undefined;
            if(verify) { _fun00008_ip = 360; continue _fun00007 }
 354:
            oscard = option.external_content_application_id;
 360:
            oscard = golfie != oscard;
            if(!oscard) { _fun00008_ip = 373; continue _fun00007 }
 367:
            report = 'game_message';
 373:
            tangon = report;
 376:
            zuuluu = tangon;
 379:
            michal = zuuluu;
 382:
            entity = michal;
 385:
            return entity;
        }
    };
    var _closure1_slot32 = entity;
    entity = function() { // Original name: ICYMI
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = _closure1_slot24;
            tangon = undefined;
            papara = entity.bind(tangon)();
            backup = _closure1_slot1;
            romeon = _closure1_slot2;
            entity = 44;
            entity = romeon[entity];
            entity = backup.bind(tangon)(entity);
            entity = entity.bind(tangon)();
            oscard = entity.width;
            report = entity.height;
            foxtra = global;
            zuuluu = foxtra.Math;
            michal = zuuluu.min;
            entity = 480;
            variable38 = michal.bind(zuuluu)(oscard, entity);
            var _closure2_slot0 = variable38;
            entity = 45;
            entity = romeon[entity];
            entity = backup.bind(tangon)(entity);
            entity = entity.bind(tangon)();
            zuuluu = entity.top;
            offset = _closure1_slot0;
            entity = 46;
            michal = romeon[entity];
            option = offset.bind(tangon)(michal);
            golfie = option.useStateFromStores;
            michal = _closure1_slot8;
            oscard = new Array(1);
            oscard[0] = michal;
            michal = function() {
                entity = _closure1_slot8;
                entity = entity.useReducedMotion;
                return entity;
            };
            golfie = golfie.bind(option)(oscard, michal);
            var _closure2_slot1 = golfie;
            option = _closure1_slot5;
            oscard = option.useState;
            michal = false;
            oscard = oscard.bind(option)(michal);
            michal = _closure1_slot4;
            config = 2;
            michal = michal.bind(tangon)(oscard, config);
            status = 0;
            variable36 = michal[status];
            var _closure2_slot2 = variable36;
            result = 1;
            michal = michal[result];
            var _closure2_slot3 = michal;
            verify = _closure1_slot5;
            option = verify.useEffect;
            oscard = new Array(1);
            oscard[0] = variable36;
            michal = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    entity = _closure2_slot2;
                    if(!entity) { _fun00012_ip = 29; continue _fun00011 }
 10:
                    zuuluu = _closure1_slot11;
                    michal = zuuluu.hasOpenedEnoughTimes;
                    entity = michal.bind(zuuluu)();
 29:
                    if(!entity) { _fun00012_ip = 112; continue _fun00011 }
 32:
                    tangon = _closure1_slot1;
                    entity = _closure1_slot2;
                    zuuluu = 22;
                    zuuluu = entity[zuuluu];
                    oscard = undefined;
                    report = tangon.bind(oscard)(zuuluu);
                    tangon = report.openLazy;
                    zuuluu = _closure1_slot0;
                    michal = 24;
                    michal = entity[michal];
                    zuuluu = zuuluu.bind(oscard)(michal);
                    michal = 47;
                    michal = entity[michal];
                    entity = entity.paths;
                    zuuluu = zuuluu.bind(oscard)(michal, entity);
                    michal = 'ICYMIFeedbackSheet';
                    entity = {};
                    entity = tangon.bind(report)(zuuluu, michal, entity);
 112:
                    entity = undefined;
                    return entity;
                }
            };
            michal = option.bind(verify)(michal, oscard);
            option = 35;
            michal = romeon[option];
            verify = offset.bind(tangon)(michal);
            oscard = verify.useIsNotificationsTabMerged;
            michal = {};
            update = 'ICYMI';
            michal['location'] = update;
            michal = oscard.bind(verify)(michal);
            equals = michal.enabled;
            var _closure2_slot4 = equals;
            yankee = michal.tabBadgeVariant;
            kiloes = 48;
            michal = romeon[kiloes];
            oscard = offset.bind(tangon)(michal);
            michal = oscard.useIsFocused;
            oscard = michal.bind(oscard)();
            var _closure2_slot5 = oscard;
            michal = 49;
            michal = romeon[michal];
            verify = backup.bind(tangon)(michal);
            michal = {};
            michal['isFocused'] = oscard;
            michal['mergedNotificationsEnabled'] = equals;
            michal = verify.bind(tangon)(michal);
            verify = michal.displayUnreadMentionMessages;
            var _closure2_slot6 = verify;
            sizing = michal.newUnreadMentionMessages;
            echoed = _closure1_slot5;
            output = echoed.useLayoutEffect;
            michal = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 50;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.trackAppUIViewed;
                michal = michal.bind(zuuluu)();
                return entity;
            };
            michal = output.bind(echoed)(michal);
            michal = 51;
            michal = romeon[michal];
            echoed = offset.bind(tangon)(michal);
            output = echoed.useGetDismissibleContent;
            michal = 52;
            michal = romeon[michal];
            michal = offset.bind(tangon)(michal);
            michal = michal.DismissibleContent;
            source = michal.ICYMI_ALPHA_UPSELL;
            michal = new Array(1);
            michal[0] = source;
            output = output.bind(echoed)(michal);
            michal = _closure1_slot4;
            michal = michal.bind(tangon)(output, config);
            vacuum = michal[status];
            var _closure2_slot7 = vacuum;
            source = michal[result];
            var _closure2_slot8 = source;
            michal = romeon[option];
            echoed = offset.bind(tangon)(michal);
            output = echoed.useICYMIStatusWithMediaEnabled;
            michal = {};
            michal['location'] = update;
            sierra = output.bind(echoed)(michal);
            var _closure2_slot9 = sierra;
            michal = romeon[entity];
            update = offset.bind(tangon)(michal);
            echoed = update.useStateFromStores;
            michal = _closure1_slot14;
            output = new Array(1);
            output[0] = michal;
            michal = function() {
                michal = _closure1_slot14;
                entity = michal.getGuildCount;
                entity = entity.bind(michal)();
                return entity;
            };
            michal = echoed.bind(update)(output, michal);
            var _closure2_slot10 = michal;
            update = _closure1_slot5;
            echoed = update.useEffect;
            output = new Array(3);
            output[0] = vacuum;
            output[1] = source;
            output[2] = michal;
            michal = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zuuluu = _closure2_slot7;
                    entity = null;
                    if(!(entity != zuuluu)) { _fun00014_ip = 87; continue _fun00013 }
 13:
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    zuuluu = 30;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    oscard = report.bind(zuuluu)(tangon);
                    report = oscard.pushICYMIInfoModal;
                    tangon = {};
                    option = _closure2_slot10;
                    golfie = _closure1_slot22;
                    golfie = option <= golfie;
                    tangon['extendedOnboarding'] = golfie;
                    tangon = report.bind(oscard)(tangon);
                    michal = _closure2_slot8;
                    entity = _closure1_slot17;
                    entity = entity.USER_DISMISS;
                    entity = michal.bind(zuuluu)(entity);
 87:
                    entity = undefined;
                    return entity;
                }
            };
            michal = echoed.bind(update)(michal, output);
            michal = 53;
            michal = romeon[michal];
            michal = backup.bind(tangon)(michal);
            michal = michal.bind(tangon)();
            sequen = michal.unreadItems;
            var _closure2_slot11 = sequen;
            source = michal.readItems;
            var _closure2_slot12 = source;
            vacuum = michal.allUnreadItemsHydrated;
            var _closure2_slot13 = vacuum;
            michal = romeon[entity];
            record = offset.bind(tangon)(michal);
            update = record.useStateFromStores;
            michal = _closure1_slot11;
            echoed = new Array(1);
            echoed[0] = michal;
            output = function() {
                michal = _closure1_slot11;
                entity = michal.getVersion;
                entity = entity.bind(michal)();
                return entity;
            };
            michal = new Array(0);
            output = update.bind(record)(echoed, output, michal);
            var _closure2_slot14 = output;
            michal = romeon[entity];
            record = offset.bind(tangon)(michal);
            update = record.useStateFromStores;
            michal = _closure1_slot11;
            echoed = new Array(1);
            echoed[0] = michal;
            michal = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    michal = _closure1_slot11;
                    entity = michal.isFirstPageHydrated;
                    entity = entity.bind(michal)();
                    if(!entity) { _fun00016_ip = 35; continue _fun00015 }
 22:
                    zuuluu = _closure2_slot14;
                    michal = 0;
                    entity = zuuluu > michal;
 35:
                    entity = !entity;
                    return entity;
                }
            };
            echoed = update.bind(record)(echoed, michal);
            var _closure2_slot15 = echoed;
            cntext = _closure1_slot5;
            record = cntext.useEffect;
            update = new Array(1);
            update[0] = output;
            michal = function() {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    zuuluu = _closure1_slot11;
                    michal = zuuluu.getLoadId;
                    report = michal.bind(zuuluu)();
                    michal = null;
                    if(!(michal != report)) { _fun00018_ip = 84; continue _fun00017 }
 23:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 54;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = tangon.track;
                    entity = _closure1_slot16;
                    michal = entity.FEED_SHOWN;
                    entity = {};
                    entity['load_id'] = report;
                    report = 'gravity';
                    entity['home_session_id'] = report;
                    entity = zuuluu.bind(tangon)(michal, entity);
 84:
                    entity = undefined;
                    return entity;
                }
            };
            michal = record.bind(cntext)(michal, update);
            michal = romeon[entity];
            target = offset.bind(tangon)(michal);
            cntext = target.useStateFromStores;
            michal = _closure1_slot11;
            record = new Array(1);
            record[0] = michal;
            update = function() {
                michal = _closure1_slot11;
                entity = michal.isRefreshing;
                entity = entity.bind(michal)();
                return entity;
            };
            michal = new Array(0);
            target = cntext.bind(target)(record, update, michal);
            var _closure2_slot16 = target;
            record = _closure1_slot5;
            update = record.useState;
            michal = new Array(0);
            update = update.bind(record)(michal);
            michal = _closure1_slot4;
            update = michal.bind(tangon)(update, config);
            michal = update[status];
            var _closure2_slot17 = michal;
            update = update[result];
            var _closure2_slot18 = update;
            update = romeon[entity];
            cntext = offset.bind(tangon)(update);
            record = cntext.useStateFromStoresObject;
            update = _closure1_slot11;
            config = new Array(1);
            config[0] = update;
            update = function() {
                entity = {};
                tangon = _closure1_slot11;
                zuuluu = tangon.getLoadId;
                zuuluu = zuuluu.bind(tangon)();
                entity['loadId'] = zuuluu;
                zuuluu = _closure1_slot11;
                michal = zuuluu.lastScrollEvent;
                michal = michal.bind(zuuluu)();
                entity['lastScrollEventTimestamp'] = michal;
                return entity;
            };
            config = record.bind(cntext)(config, update);
            update = config.loadId;
            var _closure2_slot19 = update;
            limora = config.lastScrollEventTimestamp;
            var _closure2_slot20 = limora;
            cntext = _closure1_slot5;
            record = cntext.useEffect;
            config = new Array(5);
            config[0] = target;
            config[1] = limora;
            config[2] = update;
            config[3] = echoed;
            config[4] = michal;
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
                    oscard = 0;
                    michal = entity[oscard];
                    entity = null;
                    golfie = entity == michal;
                    tangon = undefined;
                    zuuluu = undefined;
                    if(golfie) { _fun00020_ip = 51; continue _fun00019 }
 46:
                    zuuluu = michal.index;
 51:
                    if(!(entity != zuuluu)) { _fun00020_ip = 190; continue _fun00019 }
 58:
                    entity = global;
                    michal = entity.Date;
                    entity = michal.now;
                    option = entity.bind(michal)();
                    entity = _closure2_slot20;
                    golfie = option - entity;
                    michal = _closure1_slot23;
                    michal = golfie > michal;
                    if(!michal) { _fun00020_ip = 101; continue _fun00019 }
 97:
                    michal = zuuluu > oscard;
 101:
                    if(!michal) { _fun00020_ip = 190; continue _fun00019 }
 104:
                    zuuluu = _closure1_slot1;
                    oscard = _closure1_slot2;
                    michal = 55;
                    michal = oscard[michal];
                    golfie = zuuluu.bind(tangon)(michal);
                    michal = golfie.gravityScrollEvent;
                    michal = michal.bind(golfie)(option);
                    michal = 54;
                    michal = oscard[michal];
                    tangon = zuuluu.bind(tangon)(michal);
                    zuuluu = tangon.track;
                    entity = _closure1_slot16;
                    michal = entity.HOME_FIRST_SCROLL_STARTED;
                    entity = {};
                    oscard = 'gravity';
                    entity['home_session_id'] = oscard;
                    report = _closure2_slot19;
                    entity['load_id'] = report;
                    entity = zuuluu.bind(tangon)(michal, entity);
 190:
                    entity = undefined;
                    return entity;
                }
            };
            update = record.bind(cntext)(update, config);
            cntext = _closure1_slot5;
            record = cntext.useCallback;
            config = new Array(1);
            config[0] = output;
            update = function(argFoo) {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    entity = argFoo;
                    option = entity.viewableItems;
                    var _closure3_slot0 = option;
                    entity = undefined;
                    var _closure3_slot1 = entity;
                    zuuluu = option.some;
                    michal = function(argFoo) {
                        entity = argFoo;
                        entity = entity.item;
                        entity = entity.data;
                        michal = entity.kind;
                        entity = 'end';
                        entity = entity === michal;
                        return entity;
                    };
                    michal = zuuluu.bind(option)(michal);
                    if(!michal) { _fun00022_ip = 56; continue _fun00021 }
 42:
                    zuuluu = _closure2_slot3;
                    michal = true;
                    michal = zuuluu.bind(entity)(michal);
 56:
                    michal = option.length;
                    romeon = 0;
                    if(!(romeon !== michal)) { _fun00022_ip = 675; continue _fun00021 }
 70:
                    michal = _closure2_slot18;
                    michal = michal.bind(entity)(option);
                    michal = option.length;
                    foxtra = 1;
                    michal = michal - foxtra;
                    michal = option[michal];
                    kiloes = null;
                    zuuluu = kiloes == michal;
                    report = undefined;
                    if(zuuluu) { _fun00022_ip = 114; continue _fun00021 }
 109:
                    report = michal.index;
 114:
                    if(!(kiloes != report)) { _fun00022_ip = 675; continue _fun00021 }
 121:
                    backup = new Array(0);
                    _closure3_slot1 = backup;
                    zuuluu = option.forEach;
                    michal = function() {
                        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                            zuuluu = _closure3_slot0;
                            michal = 0;
                            michal = zuuluu[michal];
                            tangon = michal.item;
                            michal = tangon.data;
                            zuuluu = michal.kind;
                            michal = 'channelSummary';
                            if(!(michal === zuuluu)) { _fun00024_ip = 93; continue _fun00023 }
 38:
                            zuuluu = _closure3_slot1;
                            michal = zuuluu.push;
                            entity = {};
                            tangon = tangon.id;
                            entity['id'] = tangon;
                            tangon = 'summary';
                            entity['type'] = tangon;
                            tangon = global;
                            report = tangon.Date;
                            tangon = report.now;
                            tangon = tangon.bind(report)();
                            entity['timestamp'] = tangon;
                            entity = michal.bind(zuuluu)(entity);
 93:
                            entity = undefined;
                            return entity;
                        }
                    };
                    michal = zuuluu.bind(option)(michal);
                    zuuluu = _closure1_slot11;
                    michal = zuuluu.getUnreadDisplayItems;
                    tangon = michal.bind(zuuluu)();
                    zuuluu = global;
                    yankee = zuuluu.Math;
                    verify = yankee.min;
                    michal = tangon.length;
                    michal = michal - foxtra;
                    michal = verify.bind(yankee)(report, michal);
                    verify = zuuluu.Date;
                    zuuluu = verify.now;
                    verify = zuuluu.bind(verify)();
                    yankee = 56;
                    zuuluu = michal;
                    if(!(zuuluu >= romeon)) { _fun00022_ip = 301; continue _fun00021 }
 216:
                    source = tangon[zuuluu];
                    sizing = verify;
                    if(!(kiloes != source)) { _fun00022_ip = 291; continue _fun00021 }
 227:
                    echoed = backup.push;
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
                    result = echoed.bind(backup)(result);
 291:
                    zuuluu = zuuluu - 1;
                    verify = sizing;
                    if(zuuluu >= romeon) { _fun00022_ip = 216; continue _fun00021 }
 301:
                    zuuluu = backup.length;
                    if(!(zuuluu > romeon)) { _fun00022_ip = 344; continue _fun00021 }
 310:
                    verify = _closure1_slot1;
                    yankee = _closure1_slot2;
                    zuuluu = 55;
                    zuuluu = yankee[zuuluu];
                    yankee = verify.bind(entity)(zuuluu);
                    verify = yankee.ackGravityItems;
                    zuuluu = true;
                    zuuluu = verify.bind(yankee)(backup, zuuluu);
 344:
                    verify = _closure1_slot11;
                    zuuluu = verify.getReadDisplayItems;
                    yankee = zuuluu.bind(verify)();
                    zuuluu = tangon.length;
                    zuuluu = report - zuuluu;
                    zuuluu = zuuluu - foxtra;
                    if(!(!(zuuluu >= romeon))) { _fun00022_ip = 402; continue _fun00021 }
 375:
                    if(!(!(michal >= romeon))) { _fun00022_ip = 385; continue _fun00021 }
 379:
                    verify = new Array(0);
                    _fun00022_ip = 400; continue _fun00021;
 385:
                    report = tangon.slice;
                    michal = michal + foxtra;
                    verify = report.bind(tangon)(romeon, michal);
 400:
                    _fun00022_ip = 443; continue _fun00021;
 402:
                    michal = new Array(0);
                    sequen = michal;
                    vacuum = tangon;
                    ctrled = 0;
                    ctrled = arraySpread(sequen, vacuum, ctrled);
                    report = yankee.slice;
                    zuuluu = zuuluu + foxtra;
                    vacuum = report.bind(yankee)(romeon, zuuluu);
                    sequen = michal;
                    zuuluu = arraySpread(sequen, vacuum, ctrled);
                    verify = michal;
 443:
                    zuuluu = _closure1_slot1;
                    tangon = _closure1_slot2;
                    michal = 54;
                    michal = tangon[michal];
                    report = zuuluu.bind(entity)(michal);
                    tangon = report.track;
                    michal = _closure1_slot16;
                    zuuluu = michal.FEED_ITEM_SEEN_BATCH;
                    michal = {};
                    yankee = _closure1_slot11;
                    offset = yankee.getLoadId;
                    offset = offset.bind(yankee)();
                    michal['load_id'] = offset;
                    offset = 'gravity';
                    michal['home_session_id'] = offset;
                    yankee = option.map;
                    offset = function(argFoo) {
                        entity = argFoo;
                        entity = entity.item;
                        entity = entity.id;
                        return entity;
                    };
                    offset = yankee.bind(option)(offset);
                    michal['feed_item_ids'] = offset;
                    yankee = option.map;
                    offset = function(argFoo) {
                        zuuluu = _closure1_slot32;
                        entity = argFoo;
                        michal = entity.item;
                        entity = undefined;
                        entity = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    offset = yankee.bind(option)(offset);
                    michal['feed_item_types'] = offset;
                    option = option.length;
                    michal['num_items'] = option;
                    offset = verify.map;
                    option = function(argFoo) {
                        entity = argFoo;
                        entity = entity.id;
                        return entity;
                    };
                    option = offset.bind(verify)(option);
                    michal['all_feed_item_ids'] = option;
                    offset = verify.map;
                    option = function(argFoo) {
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 56;
                        michal = michal[entity];
                        entity = undefined;
                        zuuluu = zuuluu.bind(entity)(michal);
                        michal = zuuluu.typeToString;
                        entity = argFoo;
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    option = offset.bind(verify)(option);
                    michal['all_feed_item_types'] = option;
                    option = verify.length;
                    michal['num_all_items'] = option;
                    option = verify.map;
                    golfie = function(argFoo, argBar) {
                        entity = argBar;
                        return entity;
                    };
                    golfie = option.bind(verify)(golfie);
                    michal['all_feed_item_indices'] = golfie;
                    oscard = _closure2_slot14;
                    michal['feed_version'] = oscard;
                    oscard = 3;
                    michal['version'] = oscard;
                    michal = tangon.bind(report)(zuuluu, michal);
 675:
                    return entity;
                }
            };
            update = record.bind(cntext)(update, config);
            cntext = _closure1_slot5;
            record = cntext.useRef;
            config = null;
            whisks = record.bind(cntext)(config);
            var _closure2_slot21 = whisks;
            cntext = _closure1_slot5;
            record = cntext.useRef;
            config = {};
            limora = function() { // Original name: scrollToTop
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    entity = _closure2_slot21;
                    zuuluu = entity.current;
                    entity = null;
                    if(!(entity != zuuluu)) { _fun00026_ip = 50; continue _fun00025 }
 18:
                    michal = zuuluu.scrollToOffset;
                    entity = {};
                    report = 0;
                    entity['offset'] = report;
                    tangon = _closure2_slot1;
                    tangon = !tangon;
                    entity['animated'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
 50:
                    entity = undefined;
                    return entity;
                }
            };
            config['scrollToTop'] = limora;
            record = record.bind(cntext)(config);
            var _closure2_slot22 = record;
            kiloes = romeon[kiloes];
            config = offset.bind(tangon)(kiloes);
            kiloes = config.useScrollToTop;
            kiloes = kiloes.bind(config)(record);
            kiloes = romeon[entity];
            cntext = offset.bind(tangon)(kiloes);
            record = cntext.useStateFromStores;
            kiloes = _closure1_slot10;
            config = new Array(1);
            config[0] = kiloes;
            kiloes = function() {
                michal = _closure1_slot10;
                entity = michal.getDoubleTapBehavior;
                entity = entity.bind(michal)();
                return entity;
            };
            limora = record.bind(cntext)(config, kiloes);
            var _closure2_slot23 = limora;
            kiloes = 26;
            kiloes = romeon[kiloes];
            config = offset.bind(tangon)(kiloes);
            kiloes = config.useNavigation;
            kiloes = kiloes.bind(config)();
            var _closure2_slot24 = kiloes;
            cntext = _closure1_slot5;
            record = cntext.useEffect;
            config = new Array(4);
            config[0] = limora;
            config[1] = equals;
            config[2] = kiloes;
            config[3] = golfie;
            kiloes = function() {
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    michal = _closure2_slot4;
                    if(!michal) { _fun00028_ip = 57; continue _fun00027 }
 12:
                    report = _closure2_slot23;
                    option = _closure1_slot0;
                    tangon = _closure1_slot2;
                    golfie = 56;
                    tangon = tangon[golfie];
                    oscard = undefined;
                    tangon = option.bind(oscard)(tangon);
                    tangon = tangon.GravityICYMIDoubleTapBehavior;
                    tangon = tangon.DEFAULT;
                    if(!(report === tangon)) { _fun00028_ip = 83; continue _fun00027 }
 57:
                    report = _closure2_slot22;
                    tangon = {};
                    option = function() { // Original name: scrollToTop
                        _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                            entity = _closure2_slot21;
                            zuuluu = entity.current;
                            entity = null;
                            if(!(entity != zuuluu)) { _fun00030_ip = 50; continue _fun00029 }
 18:
                            michal = zuuluu.scrollToOffset;
                            entity = {};
                            report = 0;
                            entity['offset'] = report;
                            tangon = _closure2_slot1;
                            tangon = !tangon;
                            entity['animated'] = tangon;
                            entity = michal.bind(zuuluu)(entity);
 50:
                            entity = undefined;
                            return entity;
                        }
                    };
                    tangon['scrollToTop'] = option;
                    report['current'] = tangon;
                    _fun00028_ip = 170; continue _fun00027;
 83:
                    tangon = _closure2_slot23;
                    report = _closure1_slot0;
                    michal = _closure1_slot2;
                    michal = michal[golfie];
                    michal = report.bind(oscard)(michal);
                    michal = michal.GravityICYMIDoubleTapBehavior;
                    michal = michal.NOTIFICATIONS;
                    if(!(tangon !== michal)) { _fun00028_ip = 146; continue _fun00027 }
 120:
                    tangon = _closure2_slot22;
                    michal = {};
                    report = function() { // Original name: scrollToTop
                        report = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 57;
                        tangon = michal[entity];
                        entity = undefined;
                        golfie = report.bind(entity)(tangon);
                        oscard = golfie.pushLazy;
                        tangon = _closure1_slot0;
                        zuuluu = 24;
                        zuuluu = michal[zuuluu];
                        tangon = tangon.bind(entity)(zuuluu);
                        zuuluu = 58;
                        zuuluu = michal[zuuluu];
                        michal = michal.paths;
                        yankee = tangon.bind(entity)(zuuluu, michal);
                        tangon = {};
                        michal = 'modal';
                        tangon['presentation'] = michal;
                        offset = {};
                        verify = 'for-later-modal';
                        romeon = golfie;
                        option = tangon;
                        michal = romeon[oscard](yankee, offset, verify, option, golfie);
                        return entity;
                    };
                    michal['scrollToTop'] = report;
                    tangon['current'] = michal;
                    _fun00028_ip = 170; continue _fun00027;
 146:
                    michal = _closure2_slot22;
                    entity = {};
                    zuuluu = function() { // Original name: scrollToTop
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 21;
                        michal = michal[entity];
                        entity = undefined;
                        report = zuuluu.bind(entity)(michal);
                        tangon = report.trackItemInteraction;
                        zuuluu = 'icymi_button';
                        michal = 'press_notification_button';
                        michal = tangon.bind(report)(zuuluu, zuuluu, michal);
                        tangon = _closure2_slot24;
                        zuuluu = tangon.push;
                        michal = 'notifications-screen';
                        michal = zuuluu.bind(tangon)(michal);
                        return entity;
                    };
                    entity['scrollToTop'] = zuuluu;
                    michal['current'] = entity;
 170:
                    entity = undefined;
                    return entity;
                }
            };
            kiloes = record.bind(cntext)(kiloes, config);
            record = _closure1_slot5;
            config = record.useCallback;
            kiloes = new Array(2);
            kiloes[0] = whisks;
            kiloes[1] = golfie;
            golfie = function() {
                _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                    entity = _closure2_slot21;
                    zuuluu = entity.current;
                    entity = null;
                    if(!(entity != zuuluu)) { _fun00032_ip = 50; continue _fun00031 }
 18:
                    michal = zuuluu.scrollToOffset;
                    entity = {};
                    report = 0;
                    entity['offset'] = report;
                    tangon = _closure2_slot1;
                    tangon = !tangon;
                    entity['animated'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
 50:
                    entity = undefined;
                    return entity;
                }
            };
            golfie = config.bind(record)(golfie, kiloes);
            var _closure2_slot25 = golfie;
            config = _closure1_slot5;
            kiloes = config.useEffect;
            golfie = new Array(1);
            golfie[0] = oscard;
            oscard = function() {
                _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                    entity = _closure2_slot5;
                    if(!entity) { _fun00034_ip = 72; continue _fun00033 }
 10:
                    report = _closure1_slot1;
                    oscard = _closure1_slot2;
                    entity = 59;
                    entity = oscard[entity];
                    zuuluu = undefined;
                    golfie = report.bind(zuuluu)(entity);
                    entity = golfie.setGravitySelectedSummary;
                    tangon = null;
                    entity = entity.bind(golfie)(tangon, tangon);
                    entity = 55;
                    entity = oscard[entity];
                    zuuluu = report.bind(zuuluu)(entity);
                    entity = zuuluu.setGravitySelectedChannel;
                    entity = entity.bind(zuuluu)(tangon);
 72:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    entity = 55;
                    zuuluu = zuuluu[entity];
                    entity = undefined;
                    tangon = tangon.bind(entity)(zuuluu);
                    zuuluu = tangon.setTabFocused;
                    michal = _closure2_slot5;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                }
            };
            oscard = kiloes.bind(config)(oscard, golfie);
            config = _closure1_slot5;
            kiloes = config.useEffect;
            golfie = function() {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 55;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.openICYMITab;
                michal = michal.bind(zuuluu)();
                return entity;
            };
            oscard = new Array(0);
            oscard = kiloes.bind(config)(golfie, oscard);
            oscard = 60;
            oscard = romeon[oscard];
            oscard = backup.bind(tangon)(oscard);
            oscard = oscard.bind(tangon)();
            record = oscard.showDot;
            var _closure2_slot26 = record;
            oscard = romeon[entity];
            cntext = offset.bind(tangon)(oscard);
            config = cntext.useStateFromStores;
            oscard = _closure1_slot11;
            kiloes = new Array(1);
            kiloes[0] = oscard;
            golfie = function() {
                michal = _closure1_slot11;
                entity = michal.notificationItem;
                entity = entity.bind(michal)();
                return entity;
            };
            oscard = new Array(0);
            quebec = config.bind(cntext)(kiloes, golfie, oscard);
            var _closure2_slot27 = quebec;
            config = _closure1_slot5;
            kiloes = config.useCallback;
            golfie = _closure1_slot3;
            oscard = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(michal) { _fun00036_ip = 277; continue _fun00035 }
 10:
                        zuuluu = _closure1_slot1;
                        tangon = _closure1_slot2;
                        michal = 54;
                        michal = tangon[michal];
                        report = undefined;
                        golfie = zuuluu.bind(report)(michal);
                        tangon = golfie.track;
                        michal = _closure1_slot16;
                        zuuluu = michal.FEED_SHOWN;
                        michal = {};
                        verify = _closure1_slot11;
                        option = verify.getLoadId;
                        option = option.bind(verify)();
                        michal['load_id'] = option;
                        option = 'gravity_refresh';
                        michal['home_session_id'] = option;
                        verify = _closure2_slot26;
                        option = 'NoDotShown';
                        if(!verify) { _fun00036_ip = 104; continue _fun00035 }
 98:
                        option = 'DotShown';
 104:
                        michal['variant'] = option;
                        michal = tangon.bind(golfie)(zuuluu, michal);
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        option = 55;
                        michal = michal[option];
                        tangon = zuuluu.bind(report)(michal);
                        zuuluu = tangon.fetchDehydrated;
                        michal = {};
                        golfie = true;
                        michal['isReloading'] = golfie;
                        michal = zuuluu.bind(tangon)(michal);
                        SaveGenerator(address=158);
 156:
                        return michal;
 158:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(zuuluu) { _fun00036_ip = 274; continue _fun00035 }
 164:
                        tangon = _closure1_slot1;
                        zuuluu = _closure1_slot2;
                        zuuluu = zuuluu[option];
                        tangon = tangon.bind(report)(zuuluu);
                        zuuluu = tangon.reloadICYMITab;
                        zuuluu = zuuluu.bind(tangon)();
                        SaveGenerator(address=195);
 193:
                        return zuuluu;
 195:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                        if(tangon) { _fun00036_ip = 271; continue _fun00035 }
 201:
                        golfie = _closure1_slot1;
                        tangon = _closure1_slot2;
                        tangon = tangon[option];
                        golfie = golfie.bind(report)(tangon);
                        tangon = golfie.getGuildChannelScores;
                        tangon = tangon.bind(golfie)();
                        SaveGenerator(address=232);
 230:
                        return tangon;
 232:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                        if(golfie) { _fun00036_ip = 268; continue _fun00035 }
 238:
                        golfie = _closure1_slot1;
                        oscard = _closure1_slot2;
                        oscard = oscard[option];
                        golfie = golfie.bind(report)(oscard);
                        oscard = golfie.getRecommendedGuilds;
                        oscard = oscard.bind(golfie)();
                        return report;
 268:
                        return tangon;
 271:
                        return zuuluu;
 274:
                        return michal;
 277:
                        return entity;
                    }
                };
                return entity;
            };
            golfie = golfie.bind(tangon)(oscard);
            oscard = new Array(1);
            oscard[0] = record;
            limora = kiloes.bind(config)(golfie, oscard);
            var _closure2_slot28 = limora;
            oscard = romeon[entity];
            config = offset.bind(tangon)(oscard);
            kiloes = config.useStateFromStores;
            oscard = _closure1_slot10;
            golfie = new Array(2);
            golfie[0] = oscard;
            oscard = _closure1_slot15;
            golfie[1] = oscard;
            oscard = function() {
                _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                    zuuluu = _closure1_slot10;
                    entity = zuuluu.filterNSFW;
                    entity = entity.bind(zuuluu)();
                    if(entity) { _fun00038_ip = 58; continue _fun00037 }
 22:
                    zuuluu = _closure1_slot15;
                    michal = zuuluu.getCurrentUser;
                    michal = michal.bind(zuuluu)();
                    zuuluu = null;
                    tangon = zuuluu == michal;
                    zuuluu = undefined;
                    if(tangon) { _fun00038_ip = 52; continue _fun00037 }
 46:
                    zuuluu = michal.nsfwAllowed;
 52:
                    michal = true;
                    entity = michal !== zuuluu;
 58:
                    return entity;
                }
            };
            oscard = kiloes.bind(config)(golfie, oscard);
            var _closure2_slot29 = oscard;
            golfie = 61;
            golfie = romeon[golfie];
            kiloes = offset.bind(tangon)(golfie);
            golfie = kiloes.useEligibleActiveVoiceChannelId;
            cntext = golfie.bind(kiloes)();
            var _closure2_slot30 = cntext;
            golfie = 62;
            golfie = romeon[golfie];
            golfie = backup.bind(tangon)(golfie);
            golfie = golfie.bind(tangon)();
            config = golfie.activeConvos;
            var _closure2_slot31 = config;
            record = golfie.loading;
            var _closure2_slot32 = record;
            kiloes = _closure1_slot5;
            backup = kiloes.useMemo;
            golfie = new Array(12);
            golfie[0] = echoed;
            golfie[1] = quebec;
            golfie[2] = equals;
            golfie[3] = verify;
            golfie[4] = sierra;
            golfie[5] = cntext;
            golfie[6] = record;
            golfie[7] = config;
            golfie[8] = sequen;
            golfie[9] = vacuum;
            golfie[10] = source;
            golfie[11] = oscard;
            oscard = function() {
                _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                    michal = new Array(0);
                    var _closure3_slot0 = michal;
                    tangon = _closure2_slot15;
                    if(!tangon) { _fun00040_ip = 30; continue _fun00039 }
 20:
                    oscard = _closure2_slot27;
                    report = null;
                    tangon = report != oscard;
 30:
                    if(!tangon) { _fun00040_ip = 83; continue _fun00039 }
 33:
                    report = _closure2_slot27;
                    oscard = report.type;
                    option = _closure1_slot0;
                    golfie = _closure1_slot2;
                    report = 56;
                    golfie = golfie[report];
                    report = undefined;
                    report = option.bind(report)(golfie);
                    report = report.GravityItemTypes;
                    report = report.CUSTOM_STATUS;
                    tangon = oscard === report;
 83:
                    if(!tangon) { _fun00040_ip = 216; continue _fun00039 }
 89:
                    report = michal.push;
                    tangon = {};
                    oscard = _closure2_slot27;
                    golfie = oscard.id;
                    tangon['id'] = golfie;
                    golfie = global;
                    option = golfie.Date;
                    golfie = option.now;
                    golfie = golfie.bind(option)();
                    tangon['timestamp'] = golfie;
                    golfie = {};
                    option = 'contentInventory';
                    golfie['kind'] = option;
                    offset = _closure1_slot0;
                    verify = _closure1_slot2;
                    option = 41;
                    verify = verify[option];
                    option = undefined;
                    verify = offset.bind(option)(verify);
                    option = verify.customStatusToContentInventoryEntry;
                    option = option.bind(verify)(oscard);
                    option = option.activity;
                    golfie['content'] = option;
                    tangon['data'] = golfie;
                    oscard = oscard.score;
                    tangon['score'] = oscard;
                    oscard = true;
                    tangon['unread'] = oscard;
                    tangon = report.bind(michal)(tangon);
 216:
                    tangon = _closure2_slot15;
                    if(tangon) { _fun00040_ip = 611; continue _fun00039 }
 226:
                    tangon = _closure2_slot4;
                    if(!tangon) { _fun00040_ip = 248; continue _fun00039 }
 233:
                    report = _closure2_slot6;
                    oscard = report.length;
                    report = 0;
                    tangon = oscard > report;
 248:
                    if(!tangon) { _fun00040_ip = 338; continue _fun00039 }
 251:
                    report = michal.push;
                    tangon = {'id': 'mentions', 'timestamp': 0, 'unread': true};
                    golfie = 'mentions';
                    oscard = {};
                    oscard['kind'] = golfie;
                    golfie = _closure2_slot6;
                    oscard['messages'] = golfie;
                    tangon['data'] = oscard;
                    tangon = report.bind(michal)(tangon);
                    report = michal.push;
                    tangon = {'id': 'icymi_header', 'timestamp': 0, 'unread': false};
                    oscard = {};
                    golfie = 'icymiHeader';
                    oscard['kind'] = golfie;
                    tangon['data'] = oscard;
                    tangon = report.bind(michal)(tangon);
 338:
                    tangon = _closure2_slot9;
                    if(!tangon) { _fun00040_ip = 385; continue _fun00039 }
 345:
                    report = michal.push;
                    tangon = {'id': 'edit_custom_status', 'timestamp': 0, 'unread': false};
                    oscard = {};
                    golfie = 'editCustomStatus';
                    oscard['kind'] = golfie;
                    tangon['data'] = oscard;
                    tangon = report.bind(michal)(tangon);
 385:
                    report = _closure2_slot30;
                    tangon = null;
                    if(!(tangon != report)) { _fun00040_ip = 458; continue _fun00039 }
 395:
                    report = michal.push;
                    tangon = {};
                    oscard = _closure2_slot30;
                    tangon['id'] = oscard;
                    oscard = global;
                    golfie = oscard.Date;
                    oscard = golfie.now;
                    oscard = oscard.bind(golfie)();
                    tangon['timestamp'] = oscard;
                    oscard = true;
                    tangon['unread'] = oscard;
                    oscard = {};
                    golfie = 'voice';
                    oscard['kind'] = golfie;
                    tangon['data'] = oscard;
                    tangon = report.bind(michal)(tangon);
 458:
                    tangon = _closure2_slot32;
                    tangon = !tangon;
                    if(!tangon) { _fun00040_ip = 483; continue _fun00039 }
 468:
                    report = _closure2_slot31;
                    oscard = report.length;
                    report = 0;
                    tangon = oscard > report;
 483:
                    if(!tangon) { _fun00040_ip = 507; continue _fun00039 }
 486:
                    oscard = _closure2_slot31;
                    report = oscard.forEach;
                    tangon = function(argFoo) {
                        tangon = argFoo;
                        zuuluu = _closure3_slot0;
                        michal = zuuluu.push;
                        entity = {};
                        report = tangon.id;
                        entity['id'] = report;
                        report = global;
                        oscard = report.Date;
                        report = oscard.now;
                        report = report.bind(oscard)();
                        entity['timestamp'] = report;
                        report = {};
                        oscard = 'channelSummary';
                        report['kind'] = oscard;
                        oscard = tangon.summary;
                        report['topic'] = oscard;
                        entity['data'] = report;
                        tangon = tangon.score;
                        entity['score'] = tangon;
                        tangon = true;
                        entity['unread'] = tangon;
                        entity = michal.bind(zuuluu)(entity);
                        entity = undefined;
                        return entity;
                    };
                    tangon = report.bind(oscard)(tangon);
 507:
                    oscard = _closure2_slot11;
                    report = oscard.forEach;
                    tangon = function(argFoo) {
                        _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                            zuuluu = argFoo;
                            entity = _closure2_slot29;
                            if(!entity) { _fun00042_ip = 27; continue _fun00041 }
 13:
                            tangon = _closure1_slot26;
                            michal = undefined;
                            entity = tangon.bind(michal)(zuuluu);
 27:
                            if(entity) { _fun00042_ip = 47; continue _fun00041 }
 30:
                            michal = _closure3_slot0;
                            entity = michal.push;
                            entity = entity.bind(michal)(zuuluu);
 47:
                            entity = undefined;
                            return entity;
                        }
                    };
                    tangon = report.bind(oscard)(tangon);
                    tangon = _closure2_slot13;
                    if(!tangon) { _fun00040_ip = 573; continue _fun00039 }
 535:
                    report = michal.push;
                    tangon = {'id': 'end', 'timestamp': 0, 'unread': false};
                    golfie = 'end';
                    oscard = {};
                    oscard['kind'] = golfie;
                    tangon['data'] = oscard;
                    tangon = report.bind(michal)(tangon);
 573:
                    tangon = _closure2_slot12;
                    report = tangon.length;
                    tangon = 0;
                    if(!(report > tangon)) { _fun00040_ip = 649; continue _fun00039 }
 588:
                    tangon = _closure2_slot12;
                    zuuluu = tangon.forEach;
                    entity = function(argFoo) {
                        _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
                            zuuluu = argFoo;
                            entity = _closure2_slot29;
                            if(!entity) { _fun00044_ip = 27; continue _fun00043 }
 13:
                            tangon = _closure1_slot26;
                            michal = undefined;
                            entity = tangon.bind(michal)(zuuluu);
 27:
                            if(entity) { _fun00044_ip = 47; continue _fun00043 }
 30:
                            michal = _closure3_slot0;
                            entity = michal.push;
                            entity = entity.bind(michal)(zuuluu);
 47:
                            entity = undefined;
                            return entity;
                        }
                    };
                    entity = zuuluu.bind(tangon)(entity);
                    _fun00040_ip = 649; continue _fun00039;
 611:
                    zuuluu = michal.push;
                    entity = {'id': 'loading', 'timestamp': 0, 'unread': false};
                    report = 'loading';
                    tangon = {};
                    tangon['kind'] = report;
                    entity['data'] = tangon;
                    entity = zuuluu.bind(michal)(entity);
 649:
                    entity = {};
                    entity['data'] = michal;
                    michal = new Array(0);
                    entity['stickyHeaderIndices'] = michal;
                    return entity;
                }
            };
            oscard = backup.bind(kiloes)(oscard, golfie);
            config = oscard.data;
            var _closure2_slot33 = config;
            source = oscard.stickyHeaderIndices;
            zuuluu = report - zuuluu;
            quebec = 32;
            oscard = zuuluu - quebec;
            zuuluu = 63;
            zuuluu = romeon[zuuluu];
            report = offset.bind(tangon)(zuuluu);
            zuuluu = report.useMainTabsHeight;
            report = zuuluu.bind(report)();
            zuuluu = 24;
            zuuluu = oscard - zuuluu;
            variable39 = zuuluu - report;
            var _closure2_slot34 = variable39;
            oscard = _closure1_slot5;
            report = oscard.useCallback;
            zuuluu = new Array(2);
            zuuluu[0] = variable36;
            zuuluu[1] = michal;
            michal = function(argFoo) {
                _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
                    entity = argFoo;
                    oscard = entity.item;
                    var _closure3_slot0 = oscard;
                    entity = oscard.data;
                    michal = entity.kind;
                    entity = 'channelSummary';
                    if(!(entity !== michal)) { _fun00046_ip = 1227; continue _fun00045 }
 37:
                    entity = oscard.data;
                    michal = entity.kind;
                    entity = 'message';
                    if(!(entity !== michal)) { _fun00046_ip = 854; continue _fun00045 }
 58:
                    entity = oscard.data;
                    michal = entity.kind;
                    entity = 'contentInventory';
                    if(!(entity !== michal)) { _fun00046_ip = 763; continue _fun00045 }
 81:
                    entity = oscard.data;
                    michal = entity.kind;
                    entity = 'voice';
                    if(!(entity !== michal)) { _fun00046_ip = 715; continue _fun00045 }
 102:
                    entity = oscard.data;
                    michal = entity.kind;
                    entity = 'loading';
                    if(!(entity !== michal)) { _fun00046_ip = 670; continue _fun00045 }
 123:
                    entity = oscard.data;
                    michal = entity.kind;
                    entity = 'end';
                    if(!(entity !== michal)) { _fun00046_ip = 619; continue _fun00045 }
 144:
                    entity = oscard.data;
                    michal = entity.kind;
                    entity = 'guildEvent';
                    if(!(entity !== michal)) { _fun00046_ip = 564; continue _fun00045 }
 165:
                    entity = oscard.data;
                    michal = entity.kind;
                    entity = 'recommendedGuilds';
                    if(!(entity !== michal)) { _fun00046_ip = 519; continue _fun00045 }
 188:
                    entity = oscard.data;
                    michal = entity.kind;
                    entity = 'mentions';
                    if(!(entity !== michal)) { _fun00046_ip = 464; continue _fun00045 }
 209:
                    entity = oscard.data;
                    michal = entity.kind;
                    entity = 'icymiHeader';
                    if(!(entity !== michal)) { _fun00046_ip = 425; continue _fun00045 }
 232:
                    entity = oscard.data;
                    michal = entity.kind;
                    entity = 'editCustomStatus';
                    if(!(entity !== michal)) { _fun00046_ip = 386; continue _fun00045 }
 255:
                    entity = oscard.data;
                    zuuluu = entity.kind;
                    verify = null;
                    michal = 'forumThread';
                    entity = null;
                    if(!(michal === zuuluu)) { _fun00046_ip = 384; continue _fun00045 }
 279:
                    report = _closure1_slot18;
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot2;
                    michal = 76;
                    michal = tangon[michal];
                    tangon = undefined;
                    michal = zuuluu.bind(tangon)(michal);
                    zuuluu = michal.GravityForumThreadRow;
                    michal = {};
                    golfie = oscard.data;
                    golfie = golfie.message;
                    michal['message'] = golfie;
                    golfie = oscard.data;
                    golfie = golfie.threadChannel;
                    michal['channel'] = golfie;
                    yankee = _closure2_slot17;
                    offset = yankee.find;
                    golfie = function(argFoo) {
                        entity = argFoo;
                        entity = entity.item;
                        michal = entity.id;
                        entity = _closure3_slot0;
                        entity = entity.id;
                        entity = michal === entity;
                        return entity;
                    };
                    golfie = offset.bind(yankee)(golfie);
                    golfie = verify != golfie;
                    michal['visible'] = golfie;
                    entity = report.bind(tangon)(zuuluu, michal);
 384:
                    _fun00046_ip = 423; continue _fun00045;
 386:
                    report = _closure1_slot18;
                    zuuluu = _closure1_slot1;
                    tangon = _closure1_slot2;
                    michal = 75;
                    michal = tangon[michal];
                    tangon = undefined;
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = {};
                    entity = report.bind(tangon)(zuuluu, michal);
 423:
                    _fun00046_ip = 462; continue _fun00045;
 425:
                    report = _closure1_slot18;
                    zuuluu = _closure1_slot1;
                    tangon = _closure1_slot2;
                    michal = 74;
                    michal = tangon[michal];
                    tangon = undefined;
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = {};
                    entity = report.bind(tangon)(zuuluu, michal);
 462:
                    _fun00046_ip = 517; continue _fun00045;
 464:
                    report = _closure1_slot18;
                    zuuluu = _closure1_slot1;
                    tangon = _closure1_slot2;
                    michal = 73;
                    michal = tangon[michal];
                    tangon = undefined;
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = {};
                    golfie = oscard.data;
                    golfie = golfie.messages;
                    michal['messages'] = golfie;
                    entity = report.bind(tangon)(zuuluu, michal);
 517:
                    _fun00046_ip = 562; continue _fun00045;
 519:
                    report = _closure1_slot18;
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot2;
                    michal = 72;
                    michal = tangon[michal];
                    tangon = undefined;
                    michal = zuuluu.bind(tangon)(michal);
                    zuuluu = michal.ICYMIServerRecommendationRow;
                    michal = {};
                    entity = report.bind(tangon)(zuuluu, michal);
 562:
                    _fun00046_ip = 617; continue _fun00045;
 564:
                    report = _closure1_slot18;
                    zuuluu = _closure1_slot1;
                    tangon = _closure1_slot2;
                    michal = 71;
                    michal = tangon[michal];
                    tangon = undefined;
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = {};
                    golfie = oscard.data;
                    golfie = golfie.eventId;
                    michal['eventId'] = golfie;
                    entity = report.bind(tangon)(zuuluu, michal);
 617:
                    _fun00046_ip = 668; continue _fun00045;
 619:
                    report = _closure1_slot18;
                    zuuluu = _closure1_slot1;
                    tangon = _closure1_slot2;
                    michal = 70;
                    michal = tangon[michal];
                    tangon = undefined;
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = {};
                    golfie = _closure2_slot2;
                    michal['visible'] = golfie;
                    entity = report.bind(tangon)(zuuluu, michal);
 668:
                    _fun00046_ip = 713; continue _fun00045;
 670:
                    report = _closure1_slot18;
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot2;
                    michal = 69;
                    michal = tangon[michal];
                    tangon = undefined;
                    michal = zuuluu.bind(tangon)(michal);
                    zuuluu = michal.ICYMILoading;
                    michal = {};
                    entity = report.bind(tangon)(zuuluu, michal);
 713:
                    _fun00046_ip = 761; continue _fun00045;
 715:
                    report = _closure1_slot18;
                    zuuluu = _closure1_slot1;
                    tangon = _closure1_slot2;
                    michal = 61;
                    michal = tangon[michal];
                    tangon = undefined;
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = {};
                    golfie = oscard.id;
                    michal['channelId'] = golfie;
                    entity = report.bind(tangon)(zuuluu, michal);
 761:
                    _fun00046_ip = 849; continue _fun00045;
 763:
                    report = _closure1_slot18;
                    zuuluu = _closure1_slot1;
                    tangon = _closure1_slot2;
                    michal = 68;
                    michal = tangon[michal];
                    tangon = undefined;
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = {};
                    offset = _closure2_slot17;
                    verify = offset.find;
                    golfie = function(argFoo) {
                        entity = argFoo;
                        entity = entity.item;
                        michal = entity.id;
                        entity = _closure3_slot0;
                        entity = entity.id;
                        entity = michal === entity;
                        return entity;
                    };
                    verify = verify.bind(offset)(golfie);
                    golfie = null;
                    golfie = golfie != verify;
                    michal['visible'] = golfie;
                    golfie = oscard.data;
                    golfie = golfie.content;
                    michal['content'] = golfie;
                    entity = report.bind(tangon)(zuuluu, michal);
 849:
                    _fun00046_ip = 1225; continue _fun00045;
 854:
                    tangon = oscard.channelType;
                    report = _closure1_slot0;
                    golfie = _closure1_slot2;
                    michal = 42;
                    michal = golfie[michal];
                    golfie = undefined;
                    michal = report.bind(golfie)(michal);
                    michal = michal.ChannelTypes;
                    michal = michal.GUILD_ANNOUNCEMENT;
                    if(!(tangon !== michal)) { _fun00046_ip = 1130; continue _fun00045 }
 904:
                    michal = oscard.data;
                    tangon = michal.messageContext;
                    yankee = null;
                    report = yankee == tangon;
                    michal = undefined;
                    if(report) { _fun00046_ip = 932; continue _fun00045 }
 926:
                    michal = tangon.external_content_application_id;
 932:
                    if(!(yankee == michal)) { _fun00046_ip = 1033; continue _fun00045 }
 936:
                    report = _closure1_slot18;
                    tangon = _closure1_slot1;
                    verify = _closure1_slot2;
                    michal = 67;
                    michal = verify[michal];
                    tangon = tangon.bind(golfie)(michal);
                    michal = {};
                    verify = oscard.data;
                    verify = verify.message;
                    michal['message'] = verify;
                    verify = oscard.data;
                    verify = verify.messageContext;
                    michal['messageContext'] = verify;
                    romeon = _closure2_slot17;
                    offset = romeon.find;
                    verify = function(argFoo) {
                        entity = argFoo;
                        entity = entity.item;
                        michal = entity.id;
                        entity = _closure3_slot0;
                        entity = entity.id;
                        entity = michal === entity;
                        return entity;
                    };
                    verify = offset.bind(romeon)(verify);
                    verify = yankee != verify;
                    michal['visible'] = verify;
                    michal = report.bind(golfie)(tangon, michal);
                    _fun00046_ip = 1128; continue _fun00045;
 1033:
                    verify = _closure1_slot18;
                    report = _closure1_slot1;
                    offset = _closure1_slot2;
                    tangon = 66;
                    tangon = offset[tangon];
                    report = report.bind(golfie)(tangon);
                    tangon = {};
                    offset = oscard.data;
                    offset = offset.message;
                    tangon['message'] = offset;
                    offset = oscard.data;
                    offset = offset.messageContext;
                    tangon['messageContext'] = offset;
                    foxtra = _closure2_slot17;
                    romeon = foxtra.find;
                    offset = function(argFoo) {
                        entity = argFoo;
                        entity = entity.item;
                        michal = entity.id;
                        entity = _closure3_slot0;
                        entity = entity.id;
                        entity = michal === entity;
                        return entity;
                    };
                    offset = romeon.bind(foxtra)(offset);
                    offset = yankee != offset;
                    tangon['visible'] = offset;
                    michal = verify.bind(golfie)(report, tangon);
 1128:
                    _fun00046_ip = 1222; continue _fun00045;
 1130:
                    report = _closure1_slot18;
                    tangon = _closure1_slot1;
                    verify = _closure1_slot2;
                    zuuluu = 65;
                    zuuluu = verify[zuuluu];
                    tangon = tangon.bind(golfie)(zuuluu);
                    zuuluu = {};
                    verify = oscard.unread;
                    zuuluu['unread'] = verify;
                    verify = oscard.data;
                    verify = verify.message;
                    zuuluu['message'] = verify;
                    offset = _closure2_slot17;
                    verify = offset.find;
                    option = function(argFoo) {
                        entity = argFoo;
                        entity = entity.item;
                        michal = entity.id;
                        entity = _closure3_slot0;
                        entity = entity.id;
                        entity = michal === entity;
                        return entity;
                    };
                    verify = verify.bind(offset)(option);
                    option = null;
                    option = option != verify;
                    zuuluu['visible'] = option;
                    michal = report.bind(golfie)(tangon, zuuluu);
 1222:
                    entity = michal;
 1225:
                    _fun00046_ip = 1280; continue _fun00045;
 1227:
                    report = _closure1_slot18;
                    zuuluu = _closure1_slot1;
                    tangon = _closure1_slot2;
                    michal = 64;
                    michal = tangon[michal];
                    tangon = undefined;
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = {};
                    oscard = oscard.data;
                    oscard = oscard.topic;
                    michal['topic'] = oscard;
                    entity = report.bind(tangon)(zuuluu, michal);
 1280:
                    return entity;
                }
            };
            sequen = report.bind(oscard)(michal, zuuluu);
            oscard = _closure1_slot5;
            report = oscard.useMemo;
            zuuluu = function() {
                entity = {};
                michal = 'transparent';
                entity['backgroundColor'] = michal;
                return entity;
            };
            michal = new Array(0);
            cntext = report.bind(oscard)(zuuluu, michal);
            oscard = _closure1_slot5;
            report = oscard.useMemo;
            zuuluu = new Array(3);
            zuuluu[0] = variable39;
            michal = config.length;
            zuuluu[1] = michal;
            zuuluu[2] = variable38;
            michal = function() {
                _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
                    entity = _closure2_slot33;
                    michal = entity.length;
                    entity = 0;
                    michal = michal > entity;
                    entity = undefined;
                    if(!michal) { _fun00048_ip = 44; continue _fun00047 }
 23:
                    michal = {};
                    tangon = _closure2_slot34;
                    michal['height'] = tangon;
                    zuuluu = _closure2_slot0;
                    michal['width'] = zuuluu;
                    entity = michal;
 44:
                    return entity;
                }
            };
            vacuum = report.bind(oscard)(michal, zuuluu);
            michal = 77;
            michal = romeon[michal];
            zuuluu = offset.bind(tangon)(michal);
            michal = zuuluu.useClientThemesOverride;
            backup = michal.bind(zuuluu)();
            entity = romeon[entity];
            oscard = offset.bind(tangon)(entity);
            report = oscard.useStateFromStores;
            entity = _closure1_slot11;
            zuuluu = new Array(1);
            zuuluu[0] = entity;
            michal = function() {
                michal = _closure1_slot11;
                entity = michal.hasNewContent;
                entity = entity.bind(michal)();
                return entity;
            };
            entity = new Array(0);
            sierra = report.bind(oscard)(zuuluu, michal, entity);
            zuuluu = _closure1_slot19;
            michal = _closure1_slot6;
            entity = {};
            oscard = papara.containerInPanels;
            report = new Array(2);
            report[0] = oscard;
            oscard = papara.containerBackground;
            report[1] = oscard;
            entity['style'] = report;
            golfie = _closure1_slot18;
            oscard = _closure1_slot25;
            report = {};
            option = romeon[option];
            option = offset.bind(tangon)(option);
            option = option.GravityUnreadMentionsBadgeVariant;
            offset = option.RED_BADGE;
            option = 0;
            if(!(yankee === offset)) { _fun00010_ip = 1859; continue _fun00009 }
 1845:
            offset = sizing.length;
            verify = verify.length;
            option = offset + verify;
 1859:
            report['numUnreadMentions'] = option;
            oscard = golfie.bind(tangon)(oscard, report);
            report = new Array(2);
            report[0] = oscard;
            option = _closure1_slot18;
            equals = _closure1_slot0;
            record = _closure1_slot2;
            oscard = 78;
            oscard = record[oscard];
            oscard = equals.bind(tangon)(oscard);
            oscard = oscard.ICYMIContext;
            golfie = oscard.Provider;
            oscard = {};
            verify = {};
            verify['width'] = variable38;
            oscard['value'] = verify;
            yankee = _closure1_slot19;
            offset = _closure1_slot6;
            verify = {};
            kiloes = papara.flashListWrapper;
            romeon = new Array(3);
            romeon[0] = kiloes;
            kiloes = {};
            kiloes['height'] = variable39;
            kiloes['width'] = variable38;
            variable38 = 'auto';
            kiloes['marginHorizontal'] = variable38;
            romeon[1] = kiloes;
            romeon[2] = backup;
            verify['style'] = romeon;
            kiloes = _closure1_slot18;
            backup = _closure1_slot1;
            romeon = 79;
            romeon = record[romeon];
            backup = backup.bind(tangon)(romeon);
            romeon = {};
            variable37 = function() { // Original name: onPress
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 21;
                michal = michal[entity];
                entity = undefined;
                report = zuuluu.bind(entity)(michal);
                tangon = report.trackItemInteraction;
                zuuluu = 'refresh_button';
                michal = 'press_refresh_button';
                michal = tangon.bind(report)(zuuluu, zuuluu, michal);
                zuuluu = _closure2_slot28;
                zuuluu = zuuluu.bind(entity)();
                michal = _closure2_slot25;
                michal = michal.bind(entity)();
                return entity;
            };
            romeon['onPress'] = variable37;
            romeon['isRefreshing'] = target;
            romeon['newUnreadMentions'] = sizing;
            backup = kiloes.bind(tangon)(backup, romeon);
            romeon = new Array(2);
            romeon[0] = backup;
            sizing = _closure1_slot18;
            backup = 80;
            backup = record[backup];
            backup = equals.bind(tangon)(backup);
            kiloes = backup.FlashList;
            backup = {};
            backup['ref'] = whisks;
            whisks = !echoed;
            backup['scrollEnabled'] = whisks;
            whisks = {};
            whisks['endVisible'] = variable36;
            backup['extraData'] = whisks;
            backup['contentContainerStyle'] = cntext;
            cntext = record[quebec];
            cntext = equals.bind(tangon)(cntext);
            whisks = cntext.intl;
            cntext = whisks.string;
            record = record[quebec];
            record = equals.bind(tangon)(record);
            record = record.t;
            record = record.OIgYlZ;
            record = cntext.bind(whisks)(record);
            backup['accessibilityLabel'] = record;
            backup['data'] = config;
            backup['refreshing'] = target;
            cntext = _closure1_slot18;
            record = _closure1_slot7;
            config = {};
            config['onRefresh'] = limora;
            config['refreshing'] = target;
            papara = papara.refreshing;
            papara = papara.color;
            config['tintColor'] = papara;
            papara = {};
            target = result;
            if(!sierra) { _fun00010_ip = 2196; continue _fun00009 }
 2194:
            target = 0;
 2196:
            papara['opacity'] = target;
            config['style'] = papara;
            config = cntext.bind(tangon)(record, config);
            backup['refreshControl'] = config;
            config = 3;
            backup['onEndReachedThreshold'] = config;
            config = _closure1_slot31;
            backup['onEndReached'] = config;
            config = _closure1_slot34;
            backup['keyExtractor'] = config;
            backup['renderItem'] = sequen;
            sequen = _closure1_slot21;
            backup['estimatedItemSize'] = sequen;
            backup['estimatedListSize'] = vacuum;
            vacuum = _closure1_slot32;
            backup['getItemType'] = vacuum;
            vacuum = _closure1_slot0;
            sequen = _closure1_slot2;
            ctrled = 81;
            ctrled = sequen[ctrled];
            vacuum = vacuum.bind(tangon)(ctrled);
            ctrled = vacuum.isAndroid;
            ctrled = ctrled.bind(vacuum)();
            ctrled = 100;
            backup['drawDistance'] = ctrled;
            backup['stickyHeaderIndices'] = source;
            source = {'waitForInteraction': false, 'viewAreaCoveragePercentThreshold': 100, 'minimumViewTime': 50};
            backup['viewabilityConfig'] = source;
            backup['onViewableItemsChanged'] = update;
            if(echoed) { _fun00010_ip = 2341; continue _fun00009 }
 2338:
            result = output;
 2341:
            foxtra = foxtra.HermesInternal;
            output = foxtra.concat;
            foxtra = 'Version-';
            foxtra = output.bind(foxtra)(result);
            foxtra = sizing.bind(tangon)(kiloes, backup, foxtra);
            romeon[1] = foxtra;
            verify['children'] = romeon;
            verify = yankee.bind(tangon)(offset, verify);
            oscard['children'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
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
    backup = 1;
    tangon = oscard[backup];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    golfie = oscard[tangon];
    tangon = argCor;
    option = tangon.bind(entity)(golfie);
    var _closure1_slot5 = option;
    tangon = 3;
    golfie = oscard[tangon];
    golfie = report.bind(entity)(golfie);
    verify = golfie.View;
    var _closure1_slot6 = verify;
    golfie = golfie.RefreshControl;
    var _closure1_slot7 = golfie;
    golfie = 4;
    golfie = oscard[golfie];
    golfie = romeon.bind(entity)(golfie);
    var _closure1_slot8 = golfie;
    golfie = 5;
    golfie = oscard[golfie];
    golfie = romeon.bind(entity)(golfie);
    var _closure1_slot9 = golfie;
    golfie = 6;
    golfie = oscard[golfie];
    golfie = romeon.bind(entity)(golfie);
    var _closure1_slot10 = golfie;
    golfie = 7;
    golfie = oscard[golfie];
    golfie = romeon.bind(entity)(golfie);
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
    golfie = report.bind(entity)(golfie);
    foxtra = golfie.ICYMI_MARGIN;
    golfie = 13;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.AnalyticEvents;
    var _closure1_slot16 = golfie;
    golfie = 14;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.ContentDismissActionType;
    var _closure1_slot17 = golfie;
    golfie = 15;
    verify = oscard[golfie];
    verify = report.bind(entity)(verify);
    verify = verify.jsx;
    var _closure1_slot18 = verify;
    verify = oscard[golfie];
    verify = report.bind(entity)(verify);
    verify = verify.jsxs;
    var _closure1_slot19 = verify;
    verify = oscard[golfie];
    verify = report.bind(entity)(verify);
    verify = verify.Fragment;
    var _closure1_slot20 = verify;
    verify = 200;
    var _closure1_slot21 = verify;
    var _closure1_slot22 = tangon;
    tangon = 16;
    tangon = oscard[tangon];
    tangon = romeon.bind(entity)(tangon);
    tangon = tangon.Millis;
    tangon = tangon.MINUTE;
    tangon = golfie * tangon;
    var _closure1_slot23 = tangon;
    tangon = 17;
    tangon = oscard[tangon];
    verify = report.bind(entity)(tangon);
    golfie = verify.createStyles;
    tangon = {};
    offset = {'flex': 1, 'flexShrink': 1, 'flexGrow': 1};
    tangon['container'] = offset;
    offset = {};
    yankee = 18;
    kiloes = oscard[yankee];
    kiloes = romeon.bind(entity)(kiloes);
    kiloes = kiloes.colors;
    kiloes = kiloes.BG_BASE_TERTIARY;
    offset['backgroundColor'] = kiloes;
    kiloes = oscard[yankee];
    kiloes = romeon.bind(entity)(kiloes);
    kiloes = kiloes.spacing;
    kiloes = kiloes.PX_8;
    offset['paddingHorizontal'] = kiloes;
    kiloes = 'hidden';
    offset['overflow'] = kiloes;
    offset['flex'] = backup;
    tangon['containerOuterTablet'] = offset;
    offset = {'flex': 1, 'flexShrink': 1, 'flexGrow': 1, 'overflow': 'hidden'};
    backup = oscard[yankee];
    backup = romeon.bind(entity)(backup);
    backup = backup.radii;
    backup = backup.sm;
    offset['borderTopLeftRadius'] = backup;
    backup = oscard[yankee];
    backup = romeon.bind(entity)(backup);
    backup = backup.radii;
    backup = backup.sm;
    offset['borderTopRightRadius'] = backup;
    tangon['containerInPanels'] = offset;
    offset = {};
    backup = oscard[yankee];
    backup = romeon.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BG_BASE_PRIMARY;
    offset['backgroundColor'] = backup;
    tangon['containerBackground'] = offset;
    offset = {'backgroundColor': null, 'minHeight': 2, 'flex': 1};
    backup = oscard[yankee];
    backup = romeon.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BG_BASE_PRIMARY;
    offset['backgroundColor'] = backup;
    tangon['flashListWrapper'] = offset;
    offset = {};
    backup = oscard[yankee];
    backup = romeon.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.INTERACTIVE_NORMAL;
    offset['color'] = backup;
    tangon['refreshing'] = offset;
    offset = {'backgroundColor': null, 'position': 'relative', 'overflow': 'hidden', 'width': '100%'};
    backup = oscard[yankee];
    backup = romeon.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BG_BASE_PRIMARY;
    offset['backgroundColor'] = backup;
    tangon['header'] = offset;
    offset = {};
    offset['marginRight'] = foxtra;
    backup = oscard[yankee];
    backup = romeon.bind(entity)(backup);
    backup = backup.spacing;
    backup = backup.PX_32;
    offset['height'] = backup;
    backup = oscard[yankee];
    backup = romeon.bind(entity)(backup);
    backup = backup.spacing;
    backup = backup.PX_32;
    offset['width'] = backup;
    backup = 'center';
    offset['alignItems'] = backup;
    offset['justifyContent'] = backup;
    backup = oscard[yankee];
    backup = romeon.bind(entity)(backup);
    backup = backup.radii;
    backup = backup.lg;
    offset['borderRadius'] = backup;
    backup = oscard[yankee];
    backup = romeon.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.REDESIGN_BUTTON_OVERLAY_ALPHA_BACKGROUND;
    offset['backgroundColor'] = backup;
    tangon['headerClose'] = offset;
    offset = {'height': 56, 'marginHorizontal': null, 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'space-between'};
    offset['marginHorizontal'] = foxtra;
    tangon['headerTitle'] = offset;
    offset = {'flexDirection': 'row', 'alignItems': 'center', 'gap': 4};
    tangon['headerText'] = offset;
    offset = {'flexDirection': 'row', 'alignItems': 'center'};
    foxtra = oscard[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.spacing;
    foxtra = foxtra.PX_12;
    offset['gap'] = foxtra;
    tangon['headerActions'] = offset;
    offset = {'height': 18, 'width': 18};
    foxtra = oscard[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.radii;
    foxtra = foxtra.round;
    offset['borderRadius'] = foxtra;
    tangon['notificationBadge'] = offset;
    offset = {'flex': 1, 'justifyContent': 'center'};
    foxtra = oscard[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.spacing;
    foxtra = foxtra.PX_96;
    offset['paddingTop'] = foxtra;
    tangon['loading'] = offset;
    offset = {'position': 'absolute', 'bottom': 0, 'left': 0, 'right': 0, 'backgroundColor': null, 'height': 1};
    yankee = oscard[yankee];
    yankee = romeon.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.BACKGROUND_MODIFIER_ACCENT;
    offset['backgroundColor'] = yankee;
    tangon['headerBorder'] = offset;
    tangon = golfie.bind(verify)(tangon);
    var _closure1_slot24 = tangon;
    golfie = option.memo;
    tangon = function(argFoo) {
        _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
            entity = argFoo;
            echoed = entity.numUnreadMentions;
            entity = _closure1_slot24;
            tangon = undefined;
            verify = entity.bind(tangon)();
            golfie = _closure1_slot1;
            backup = _closure1_slot2;
            entity = 34;
            entity = backup[entity];
            entity = golfie.bind(tangon)(entity);
            yankee = entity.bind(tangon)();
            foxtra = _closure1_slot0;
            entity = 35;
            entity = backup[entity];
            zuuluu = foxtra.bind(tangon)(entity);
            michal = zuuluu.useIsNotificationsTabMerged;
            entity = {};
            report = 'ICYMIHeader';
            entity['location'] = report;
            entity = michal.bind(zuuluu)(entity);
            kiloes = entity.enabled;
            zuuluu = _closure1_slot19;
            entity = 36;
            entity = backup[entity];
            entity = foxtra.bind(tangon)(entity);
            michal = entity.SafeAreaPaddingView;
            entity = {};
            report = !yankee;
            entity['top'] = report;
            report = verify.header;
            entity['style'] = report;
            option = _closure1_slot18;
            report = 37;
            report = backup[report];
            golfie = golfie.bind(tangon)(report);
            report = {'absolute': true, 'wide': true, 'tall': true, 'mix': true};
            offset = {};
            romeon = 38;
            sizing = backup[romeon];
            sizing = foxtra.bind(tangon)(sizing);
            sizing = sizing.OverlayOpacity;
            sizing = sizing.LEVEL_7;
            offset['dark'] = sizing;
            romeon = backup[romeon];
            romeon = foxtra.bind(tangon)(romeon);
            romeon = romeon.OverlayOpacity;
            romeon = romeon.LEVEL_8;
            offset['light'] = romeon;
            report['mixAmount'] = offset;
            golfie = option.bind(tangon)(golfie, report);
            report = new Array(3);
            report[0] = golfie;
            offset = _closure1_slot19;
            option = _closure1_slot6;
            golfie = {};
            romeon = verify.headerTitle;
            golfie['style'] = romeon;
            romeon = null;
            if(!yankee) { _fun00050_ip = 450; continue _fun00049 }
 264:
            backup = _closure1_slot18;
            output = _closure1_slot0;
            ctrled = _closure1_slot2;
            yankee = 33;
            yankee = ctrled[yankee];
            yankee = output.bind(tangon)(yankee);
            foxtra = yankee.PressableOpacity;
            yankee = {};
            sizing = verify.headerClose;
            yankee['style'] = sizing;
            sizing = 32;
            result = ctrled[sizing];
            result = output.bind(tangon)(result);
            update = result.intl;
            result = update.string;
            sizing = ctrled[sizing];
            sizing = output.bind(tangon)(sizing);
            sizing = sizing.t;
            sizing = sizing.13/7kZ;
            sizing = result.bind(update)(sizing);
            yankee['accessibilityLabel'] = sizing;
            sizing = 39;
            sizing = ctrled[sizing];
            sizing = output.bind(tangon)(sizing);
            sizing = sizing.goBack;
            yankee['onPress'] = sizing;
            result = _closure1_slot18;
            sizing = 40;
            sizing = ctrled[sizing];
            sizing = output.bind(tangon)(sizing);
            output = sizing.XSmallIcon;
            sizing = {};
            source = _closure1_slot1;
            update = 18;
            update = ctrled[update];
            update = source.bind(tangon)(update);
            update = update.colors;
            update = update.WHITE;
            sizing['color'] = update;
            sizing = result.bind(tangon)(output, sizing);
            yankee['children'] = sizing;
            romeon = backup.bind(tangon)(foxtra, yankee);
 450:
            yankee = new Array(3);
            yankee[0] = romeon;
            backup = _closure1_slot18;
            foxtra = _closure1_slot30;
            romeon = {};
            romeon['isPressable'] = kiloes;
            romeon = backup.bind(tangon)(foxtra, romeon);
            yankee[1] = romeon;
            backup = _closure1_slot19;
            foxtra = _closure1_slot6;
            romeon = {};
            sizing = verify.headerActions;
            romeon['style'] = sizing;
            result = _closure1_slot18;
            if(kiloes) { _fun00050_ip = 524; continue _fun00049 }
 510:
            sizing = _closure1_slot29;
            kiloes = {};
            sizing = result.bind(tangon)(sizing, kiloes);
            _fun00050_ip = 541; continue _fun00049;
 524:
            output = _closure1_slot28;
            kiloes = {};
            kiloes['numUnreadMentions'] = echoed;
            sizing = result.bind(tangon)(output, kiloes);
 541:
            kiloes = new Array(2);
            kiloes[0] = sizing;
            result = _closure1_slot18;
            output = _closure1_slot27;
            sizing = {};
            sizing = result.bind(tangon)(output, sizing);
            kiloes[1] = sizing;
            romeon['children'] = kiloes;
            romeon = backup.bind(tangon)(foxtra, romeon);
            yankee[2] = romeon;
            golfie['children'] = yankee;
            golfie = offset.bind(tangon)(option, golfie);
            report[1] = golfie;
            option = _closure1_slot18;
            golfie = _closure1_slot6;
            oscard = {};
            verify = verify.headerBorder;
            oscard['style'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[2] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot25 = tangon;
    tangon = 84;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/tabs/gravity/ICYMI.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: ICYMITab
        _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot2;
            entity = 46;
            report = oscard[entity];
            tangon = undefined;
            verify = zuuluu.bind(tangon)(report);
            option = verify.useStateFromStores;
            report = _closure1_slot9;
            golfie = new Array(1);
            golfie[0] = report;
            report = function() {
                entity = _closure1_slot9;
                entity = entity.gradientPreset;
                return entity;
            };
            foxtra = option.bind(verify)(golfie, report);
            entity = oscard[entity];
            golfie = zuuluu.bind(tangon)(entity);
            report = golfie.useStateFromStores;
            entity = _closure1_slot12;
            zuuluu = new Array(1);
            zuuluu[0] = entity;
            entity = function() {
                michal = _closure1_slot12;
                entity = michal.getId;
                entity = entity.bind(michal)();
                return entity;
            };
            sizing = report.bind(golfie)(zuuluu, entity);
            report = _closure1_slot1;
            entity = 34;
            entity = oscard[entity];
            entity = report.bind(tangon)(entity);
            entity = entity.bind(tangon)();
            var _closure2_slot0 = entity;
            zuuluu = 45;
            zuuluu = oscard[zuuluu];
            zuuluu = report.bind(tangon)(zuuluu);
            zuuluu = zuuluu.bind(tangon)();
            golfie = zuuluu.top;
            var _closure2_slot1 = golfie;
            zuuluu = _closure1_slot24;
            option = zuuluu.bind(tangon)();
            var _closure2_slot2 = option;
            oscard = _closure1_slot5;
            report = oscard.useMemo;
            zuuluu = new Array(3);
            zuuluu[0] = option;
            zuuluu[1] = entity;
            zuuluu[2] = golfie;
            michal = function() {
                _fun00053: for(var _fun00054_ip = 0; ; ) switch(_fun00054_ip) {
 0:
                    michal = _closure2_slot0;
                    entity = undefined;
                    if(!michal) { _fun00054_ip = 48; continue _fun00053 }
 12:
                    michal = _closure2_slot2;
                    zuuluu = michal.containerOuterTablet;
                    michal = new Array(2);
                    michal[0] = zuuluu;
                    zuuluu = {};
                    tangon = _closure2_slot1;
                    zuuluu['paddingTop'] = tangon;
                    michal[1] = zuuluu;
                    entity = michal;
 48:
                    return entity;
                }
            };
            option = report.bind(oscard)(michal, zuuluu);
            if(entity) { _fun00052_ip = 209; continue _fun00051 }
 198:
            entity = _closure1_slot5;
            golfie = entity.Fragment;
            _fun00052_ip = 213; continue _fun00051;
 209:
            golfie = _closure1_slot6;
 213:
            zuuluu = _closure1_slot18;
            verify = _closure1_slot1;
            backup = _closure1_slot2;
            entity = 82;
            entity = backup[entity];
            michal = verify.bind(tangon)(entity);
            entity = {};
            oscard = _closure1_slot19;
            report = {};
            report['style'] = option;
            offset = _closure1_slot18;
            option = 37;
            option = backup[option];
            verify = verify.bind(tangon)(option);
            option = {};
            yankee = true;
            option['absolute'] = yankee;
            verify = offset.bind(tangon)(verify, option);
            option = new Array(2);
            option[0] = verify;
            yankee = _closure1_slot18;
            offset = _closure1_slot0;
            verify = 83;
            verify = backup[verify];
            verify = offset.bind(tangon)(verify);
            offset = verify.ThemeContextProvider;
            verify = {};
            verify['gradient'] = foxtra;
            kiloes = _closure1_slot18;
            backup = _closure1_slot33;
            romeon = global;
            romeon = romeon.HermesInternal;
            foxtra = romeon.concat;
            romeon = '';
            foxtra = foxtra.bind(romeon)(sizing);
            romeon = {};
            romeon = kiloes.bind(tangon)(backup, romeon, foxtra);
            verify['children'] = romeon;
            verify = yankee.bind(tangon)(offset, verify);
            option[1] = verify;
            report['children'] = option;
            report = oscard.bind(tangon)(golfie, report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['ICYMITab'] = michal;
    return entity;
})();