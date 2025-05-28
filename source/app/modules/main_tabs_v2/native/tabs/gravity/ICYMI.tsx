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
    var _closure1_slot27 = entity;
    entity = function() { // Original name: SearchButton
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = _closure1_slot25;
            tangon = undefined;
            report = entity.bind(tangon)();
            michal = _closure1_slot1;
            offset = _closure1_slot2;
            entity = 20;
            entity = offset[entity];
            entity = michal.bind(tangon)(entity);
            yankee = entity.bind(tangon)();
            golfie = _closure1_slot5;
            oscard = golfie.useCallback;
            zuuluu = function() {
                report = _closure1_slot0;
                tangon = _closure1_slot2;
                entity = 21;
                zuuluu = tangon[entity];
                entity = undefined;
                golfie = report.bind(entity)(zuuluu);
                oscard = golfie.trackItemInteraction;
                report = 'search_button';
                zuuluu = 'press_search_button';
                zuuluu = oscard.bind(golfie)(report, report, zuuluu);
                zuuluu = _closure1_slot1;
                michal = 22;
                michal = tangon[michal];
                michal = zuuluu.bind(entity)(michal);
                michal = michal.bind(entity)();
                return entity;
            };
            entity = new Array(0);
            verify = oscard.bind(golfie)(zuuluu, entity);
            zuuluu = _closure1_slot18;
            entity = 23;
            entity = offset[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.View;
            entity = {};
            oscard = report.searchBarContainer;
            report = new Array(1);
            report[0] = oscard;
            entity['style'] = report;
            golfie = _closure1_slot18;
            oscard = _closure1_slot0;
            report = 24;
            report = offset[report];
            report = oscard.bind(tangon)(report);
            oscard = report.Button;
            report = {'variant': null, 'grow': true, 'shrink': true, 'size': 'lg'};
            offset = 'secondary';
            if(!yankee) { _fun00004_ip = 159; continue _fun00003 }
 153:
            offset = 'tertiary';
 159:
            report['variant'] = offset;
            yankee = _closure1_slot1;
            romeon = _closure1_slot2;
            offset = 25;
            offset = romeon[offset];
            offset = yankee.bind(tangon)(offset);
            report['icon'] = offset;
            report['onPress'] = verify;
            yankee = _closure1_slot0;
            option = 26;
            verify = romeon[option];
            verify = yankee.bind(tangon)(verify);
            offset = verify.intl;
            verify = offset.string;
            option = romeon[option];
            option = yankee.bind(tangon)(option);
            option = option.t;
            option = option.5h0QOD;
            option = verify.bind(offset)(option);
            report['text'] = option;
            option = 2;
            report['maxFontSizeMultiplier'] = option;
            report = golfie.bind(tangon)(oscard, report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot28 = entity;
    entity = function() { // Original name: SettingsButton
        tangon = _closure1_slot18;
        oscard = _closure1_slot0;
        verify = _closure1_slot2;
        entity = 27;
        entity = verify[entity];
        zuuluu = undefined;
        entity = oscard.bind(zuuluu)(entity);
        michal = entity.IconButton;
        entity = {'accessibilityLabel': 'button', 'variant': 'tertiary', 'size': 'sm'};
        option = 'sm';
        golfie = _closure1_slot18;
        report = 28;
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
            zuuluu = 29;
            zuuluu = michal[zuuluu];
            oscard = report.bind(entity)(zuuluu);
            report = oscard.openLazy;
            zuuluu = 31;
            zuuluu = michal[zuuluu];
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = 30;
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
    var _closure1_slot29 = entity;
    entity = function(argFoo) { // Original name: NotificationsButton
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            kiloes = entity.numUnreadMentions;
            michal = _closure1_slot1;
            result = _closure1_slot2;
            entity = 32;
            entity = result[entity];
            tangon = undefined;
            entity = michal.bind(tangon)(entity);
            entity = entity.bind(tangon)();
            backup = entity.value;
            offset = entity.showDot;
            romeon = _closure1_slot0;
            entity = 33;
            entity = result[entity];
            michal = romeon.bind(tangon)(entity);
            entity = michal.useNavigation;
            entity = entity.bind(michal)();
            var _closure2_slot0 = entity;
            entity = _closure1_slot24;
            sizing = entity.bind(tangon)();
            zuuluu = _closure1_slot18;
            entity = 27;
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
            verify = 34;
            verify = result[verify];
            verify = romeon.bind(tangon)(verify);
            romeon = verify.AtIcon;
            verify = {};
            verify['size'] = output;
            romeon = foxtra.bind(tangon)(romeon, verify);
            verify = new Array(2);
            verify[0] = romeon;
            if(offset) { _fun00006_ip = 208; continue _fun00005 }
 202:
            romeon = 0;
            offset = kiloes > romeon;
 208:
            if(!offset) { _fun00006_ip = 261; continue _fun00005 }
 211:
            foxtra = _closure1_slot18;
            romeon = _closure1_slot1;
            output = _closure1_slot2;
            yankee = 35;
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
    var _closure1_slot30 = entity;
    entity = function() { // Original name: InfoButton
        tangon = _closure1_slot18;
        oscard = _closure1_slot0;
        verify = _closure1_slot2;
        entity = 27;
        entity = verify[entity];
        zuuluu = undefined;
        entity = oscard.bind(zuuluu)(entity);
        michal = entity.IconButton;
        entity = {'accessibilityLabel': 'button', 'variant': 'tertiary', 'size': 'sm'};
        option = 'sm';
        golfie = _closure1_slot18;
        report = 36;
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
            michal = 37;
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
    var _closure1_slot31 = entity;
    entity = function(argFoo) { // Original name: ICYMIHeaderTextWrapper
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            entity = entity.isPressable;
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            zuuluu = 38;
            zuuluu = report[zuuluu];
            report = undefined;
            oscard = tangon.bind(report)(zuuluu);
            tangon = oscard.useICYMISearchExperienceExperiment;
            zuuluu = 'ICYMIHeader';
            zuuluu = tangon.bind(oscard)(zuuluu);
            zuuluu = zuuluu.renameEnabled;
            var _closure2_slot0 = zuuluu;
            tangon = _closure1_slot24;
            option = tangon.bind(report)();
            verify = _closure1_slot5;
            oscard = verify.useMemo;
            tangon = new Array(1);
            tangon[0] = zuuluu;
            zuuluu = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    tangon = _closure1_slot19;
                    zuuluu = _closure1_slot20;
                    michal = {};
                    verify = _closure1_slot18;
                    option = _closure1_slot0;
                    entity = _closure1_slot2;
                    oscard = 39;
                    report = entity[oscard];
                    entity = undefined;
                    report = option.bind(entity)(report);
                    option = report.Text;
                    report = {'color': 'header-primary', 'variant': 'heading-lg/bold', 'maxFontSizeMultiplier': 1.75, 'accessibilityRole': 'header'};
                    offset = _closure2_slot0;
                    kiloes = _closure1_slot0;
                    yankee = _closure1_slot2;
                    foxtra = 26;
                    romeon = yankee[foxtra];
                    romeon = kiloes.bind(entity)(romeon);
                    backup = romeon.intl;
                    romeon = backup.string;
                    yankee = yankee[foxtra];
                    yankee = kiloes.bind(entity)(yankee);
                    yankee = yankee.t;
                    if(offset) { _fun00010_ip = 125; continue _fun00009 }
 112:
                    offset = yankee.SY4sdX;
                    offset = romeon.bind(backup)(offset);
                    _fun00010_ip = 136; continue _fun00009;
 125:
                    yankee = yankee.29mxFh;
                    offset = romeon.bind(backup)(yankee);
 136:
                    report['children'] = offset;
                    option = verify.bind(entity)(option, report);
                    report = new Array(2);
                    report[0] = option;
                    option = _closure1_slot18;
                    romeon = _closure1_slot0;
                    verify = _closure1_slot2;
                    oscard = verify[oscard];
                    oscard = romeon.bind(entity)(oscard);
                    golfie = oscard.Text;
                    oscard = {'color': 'text-brand', 'variant': 'text-xs/bold'};
                    offset = {};
                    yankee = 4;
                    offset['marginTop'] = yankee;
                    oscard['style'] = offset;
                    offset = verify[foxtra];
                    offset = romeon.bind(entity)(offset);
                    yankee = offset.intl;
                    offset = yankee.string;
                    verify = verify[foxtra];
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
                }
            };
            oscard = oscard.bind(verify)(zuuluu, tangon);
            tangon = _closure1_slot18;
            if(entity) { _fun00008_ip = 136; continue _fun00007 }
 108:
            zuuluu = _closure1_slot6;
            entity = {};
            verify = option.headerText;
            entity['style'] = verify;
            entity['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, entity);
            _fun00008_ip = 195; continue _fun00007;
 136:
            zuuluu = _closure1_slot0;
            verify = _closure1_slot2;
            michal = 40;
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
                michal = 37;
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
 195:
            return entity;
        }
    };
    var _closure1_slot32 = entity;
    entity = function() { // Original name: handleEndReached
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 47;
        michal = michal[entity];
        entity = undefined;
        zuuluu = zuuluu.bind(entity)(michal);
        michal = zuuluu.hydrateNextPage;
        michal = michal.bind(zuuluu)();
        return entity;
    };
    var _closure1_slot33 = entity;
    entity = function(argFoo) { // Original name: itemToType
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            golfie = argFoo;
            entity = golfie.data;
            michal = entity.kind;
            entity = 'end';
            if(!(entity !== michal)) { _fun00012_ip = 385; continue _fun00011 }
 24:
            michal = golfie.data;
            zuuluu = michal.kind;
            michal = 'loading';
            if(!(michal !== zuuluu)) { _fun00012_ip = 382; continue _fun00011 }
 45:
            zuuluu = golfie.data;
            zuuluu = zuuluu.kind;
            report = 'message';
            if(!(report !== zuuluu)) { _fun00012_ip = 281; continue _fun00011 }
 66:
            zuuluu = golfie.data;
            oscard = zuuluu.kind;
            zuuluu = 'summary';
            tangon = 'channelSummary';
            if(!(tangon !== oscard)) { _fun00012_ip = 279; continue _fun00011 }
 93:
            tangon = golfie.data;
            option = tangon.kind;
            tangon = 'guild_event';
            oscard = 'guildEvent';
            if(!(oscard !== option)) { _fun00012_ip = 276; continue _fun00011 }
 120:
            oscard = golfie.data;
            option = oscard.kind;
            oscard = 'contentInventory';
            if(!(oscard !== option)) { _fun00012_ip = 201; continue _fun00011 }
 140:
            oscard = golfie.data;
            verify = oscard.kind;
            oscard = 'recommended_guilds';
            option = 'recommendedGuilds';
            if(!(option !== verify)) { _fun00012_ip = 199; continue _fun00011 }
 166:
            option = golfie.data;
            offset = option.kind;
            option = 'unknown';
            verify = 'forumThread';
            if(!(verify === offset)) { _fun00012_ip = 196; continue _fun00011 }
 190:
            option = 'forum_thread';
 196:
            oscard = option;
 199:
            _fun00012_ip = 273; continue _fun00011;
 201:
            option = golfie.data;
            option = option.content;
            offset = option.content_type;
            yankee = _closure1_slot0;
            verify = _closure1_slot2;
            option = 49;
            verify = verify[option];
            option = undefined;
            option = yankee.bind(option)(verify);
            option = option.ContentInventoryEntryType;
            verify = option.CUSTOM_STATUS;
            option = 'hotwheels_gaming_activity';
            if(!(offset === verify)) { _fun00012_ip = 270; continue _fun00011 }
 264:
            option = 'hotwheels_custom_status';
 270:
            oscard = option;
 273:
            tangon = oscard;
 276:
            zuuluu = tangon;
 279:
            _fun00012_ip = 379; continue _fun00011;
 281:
            verify = golfie.channelType;
            option = _closure1_slot0;
            oscard = _closure1_slot2;
            tangon = 48;
            tangon = oscard[tangon];
            oscard = undefined;
            tangon = option.bind(oscard)(tangon);
            tangon = tangon.ChannelTypes;
            option = tangon.GUILD_ANNOUNCEMENT;
            tangon = 'announcement';
            if(!(verify !== option)) { _fun00012_ip = 376; continue _fun00011 }
 332:
            golfie = golfie.data;
            option = golfie.messageContext;
            golfie = null;
            verify = golfie == option;
            oscard = undefined;
            if(verify) { _fun00012_ip = 360; continue _fun00011 }
 354:
            oscard = option.external_content_application_id;
 360:
            oscard = golfie != oscard;
            if(!oscard) { _fun00012_ip = 373; continue _fun00011 }
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
    var _closure1_slot34 = entity;
    entity = function() { // Original name: ICYMI
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = _closure1_slot24;
            tangon = undefined;
            papara = entity.bind(tangon)();
            var _closure2_slot0 = papara;
            source = _closure1_slot1;
            romeon = _closure1_slot2;
            entity = 50;
            entity = romeon[entity];
            entity = source.bind(tangon)(entity);
            entity = entity.bind(tangon)();
            oscard = entity.width;
            report = entity.height;
            foxtra = global;
            zuuluu = foxtra.Math;
            michal = zuuluu.min;
            entity = 480;
            variable37 = michal.bind(zuuluu)(oscard, entity);
            var _closure2_slot1 = variable37;
            entity = 51;
            entity = romeon[entity];
            entity = source.bind(tangon)(entity);
            entity = entity.bind(tangon)();
            zuuluu = entity.top;
            offset = _closure1_slot0;
            option = 38;
            entity = romeon[option];
            oscard = offset.bind(tangon)(entity);
            michal = oscard.useICYMISearchExperienceExperiment;
            entity = 'ICYMIHeader';
            entity = michal.bind(oscard)(entity);
            backup = entity.searchEnabled;
            var _closure2_slot2 = backup;
            entity = 52;
            michal = romeon[entity];
            verify = offset.bind(tangon)(michal);
            golfie = verify.useStateFromStores;
            michal = _closure1_slot8;
            oscard = new Array(1);
            oscard[0] = michal;
            michal = function() {
                entity = _closure1_slot8;
                entity = entity.useReducedMotion;
                return entity;
            };
            kiloes = golfie.bind(verify)(oscard, michal);
            var _closure2_slot3 = kiloes;
            golfie = _closure1_slot5;
            oscard = golfie.useState;
            michal = false;
            oscard = oscard.bind(golfie)(michal);
            michal = _closure1_slot4;
            cntext = 2;
            michal = michal.bind(tangon)(oscard, cntext);
            status = 0;
            whisks = michal[status];
            var _closure2_slot4 = whisks;
            result = 1;
            michal = michal[result];
            var _closure2_slot5 = michal;
            verify = _closure1_slot5;
            golfie = verify.useEffect;
            oscard = new Array(1);
            oscard[0] = whisks;
            michal = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    entity = _closure2_slot4;
                    if(!entity) { _fun00016_ip = 29; continue _fun00015 }
 10:
                    zuuluu = _closure1_slot11;
                    michal = zuuluu.hasOpenedEnoughTimes;
                    entity = michal.bind(zuuluu)();
 29:
                    if(!entity) { _fun00016_ip = 112; continue _fun00015 }
 32:
                    tangon = _closure1_slot1;
                    entity = _closure1_slot2;
                    zuuluu = 29;
                    zuuluu = entity[zuuluu];
                    oscard = undefined;
                    report = tangon.bind(oscard)(zuuluu);
                    tangon = report.openLazy;
                    zuuluu = _closure1_slot0;
                    michal = 31;
                    michal = entity[michal];
                    zuuluu = zuuluu.bind(oscard)(michal);
                    michal = 53;
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
            michal = golfie.bind(verify)(michal, oscard);
            michal = romeon[option];
            golfie = offset.bind(tangon)(michal);
            oscard = golfie.useIsNotificationsTabMerged;
            michal = {};
            update = 'ICYMI';
            michal['location'] = update;
            michal = oscard.bind(golfie)(michal);
            golfie = michal.enabled;
            var _closure2_slot6 = golfie;
            yankee = michal.tabBadgeVariant;
            vacuum = 54;
            michal = romeon[vacuum];
            oscard = offset.bind(tangon)(michal);
            michal = oscard.useIsFocused;
            oscard = michal.bind(oscard)();
            var _closure2_slot7 = oscard;
            michal = 55;
            michal = romeon[michal];
            verify = source.bind(tangon)(michal);
            michal = {};
            michal['isFocused'] = oscard;
            michal['mergedNotificationsEnabled'] = golfie;
            michal = verify.bind(tangon)(michal);
            verify = michal.displayUnreadMentionMessages;
            var _closure2_slot8 = verify;
            sizing = michal.newUnreadMentionMessages;
            echoed = _closure1_slot5;
            output = echoed.useLayoutEffect;
            michal = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 56;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.trackAppUIViewed;
                michal = michal.bind(zuuluu)();
                return entity;
            };
            michal = output.bind(echoed)(michal);
            michal = 57;
            michal = romeon[michal];
            echoed = offset.bind(tangon)(michal);
            output = echoed.useGetDismissibleContent;
            michal = 58;
            michal = romeon[michal];
            michal = offset.bind(tangon)(michal);
            michal = michal.DismissibleContent;
            sequen = michal.ICYMI_ALPHA_UPSELL;
            michal = new Array(1);
            michal[0] = sequen;
            output = output.bind(echoed)(michal);
            michal = _closure1_slot4;
            michal = michal.bind(tangon)(output, cntext);
            config = michal[status];
            var _closure2_slot9 = config;
            sequen = michal[result];
            var _closure2_slot10 = sequen;
            michal = romeon[option];
            echoed = offset.bind(tangon)(michal);
            output = echoed.useICYMIStatusWithMediaEnabled;
            michal = {};
            michal['location'] = update;
            variable38 = output.bind(echoed)(michal);
            var _closure2_slot11 = variable38;
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
            var _closure2_slot12 = michal;
            update = _closure1_slot5;
            echoed = update.useEffect;
            output = new Array(3);
            output[0] = config;
            output[1] = sequen;
            output[2] = michal;
            michal = function() {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    zuuluu = _closure2_slot9;
                    entity = null;
                    if(!(entity != zuuluu)) { _fun00018_ip = 86; continue _fun00017 }
 13:
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    zuuluu = 37;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    oscard = report.bind(zuuluu)(tangon);
                    report = oscard.pushICYMIInfoModal;
                    tangon = {};
                    option = _closure2_slot12;
                    golfie = 3;
                    golfie = option <= golfie;
                    tangon['extendedOnboarding'] = golfie;
                    tangon = report.bind(oscard)(tangon);
                    michal = _closure2_slot10;
                    entity = _closure1_slot17;
                    entity = entity.USER_DISMISS;
                    entity = michal.bind(zuuluu)(entity);
 86:
                    entity = undefined;
                    return entity;
                }
            };
            michal = echoed.bind(update)(michal, output);
            michal = 59;
            michal = romeon[michal];
            michal = source.bind(tangon)(michal);
            michal = michal.bind(tangon)();
            record = michal.unreadItems;
            var _closure2_slot13 = record;
            sequen = michal.readItems;
            var _closure2_slot14 = sequen;
            config = michal.allUnreadItemsHydrated;
            var _closure2_slot15 = config;
            michal = romeon[entity];
            target = offset.bind(tangon)(michal);
            update = target.useStateFromStores;
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
            output = update.bind(target)(echoed, output, michal);
            var _closure2_slot16 = output;
            michal = romeon[entity];
            target = offset.bind(tangon)(michal);
            update = target.useStateFromStores;
            michal = _closure1_slot11;
            echoed = new Array(1);
            echoed[0] = michal;
            michal = function() {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    michal = _closure1_slot11;
                    entity = michal.isFirstPageHydrated;
                    entity = entity.bind(michal)();
                    if(!entity) { _fun00020_ip = 35; continue _fun00019 }
 22:
                    zuuluu = _closure2_slot16;
                    michal = 0;
                    entity = zuuluu > michal;
 35:
                    entity = !entity;
                    return entity;
                }
            };
            echoed = update.bind(target)(echoed, michal);
            var _closure2_slot17 = echoed;
            sierra = _closure1_slot5;
            target = sierra.useEffect;
            update = new Array(1);
            update[0] = output;
            michal = function() {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    zuuluu = _closure1_slot11;
                    michal = zuuluu.getLoadId;
                    report = michal.bind(zuuluu)();
                    michal = null;
                    if(!(michal != report)) { _fun00022_ip = 84; continue _fun00021 }
 23:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 17;
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
            michal = target.bind(sierra)(michal, update);
            michal = romeon[entity];
            limora = offset.bind(tangon)(michal);
            sierra = limora.useStateFromStores;
            michal = _closure1_slot11;
            target = new Array(1);
            target[0] = michal;
            update = function() {
                michal = _closure1_slot11;
                entity = michal.isRefreshing;
                entity = entity.bind(michal)();
                return entity;
            };
            michal = new Array(0);
            target = sierra.bind(limora)(target, update, michal);
            var _closure2_slot18 = target;
            sierra = _closure1_slot5;
            update = sierra.useState;
            michal = new Array(0);
            update = update.bind(sierra)(michal);
            michal = _closure1_slot4;
            update = michal.bind(tangon)(update, cntext);
            michal = update[status];
            var _closure2_slot19 = michal;
            update = update[result];
            var _closure2_slot20 = update;
            update = romeon[entity];
            limora = offset.bind(tangon)(update);
            sierra = limora.useStateFromStoresObject;
            update = _closure1_slot11;
            cntext = new Array(1);
            cntext[0] = update;
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
            cntext = sierra.bind(limora)(cntext, update);
            update = cntext.loadId;
            var _closure2_slot21 = update;
            variable39 = cntext.lastScrollEventTimestamp;
            var _closure2_slot22 = variable39;
            sierra = michal.filter;
            cntext = function(argFoo) {
                entity = argFoo;
                entity = entity.item;
                zuuluu = _closure1_slot22;
                michal = zuuluu.has;
                entity = entity.data;
                entity = entity.kind;
                entity = michal.bind(zuuluu)(entity);
                entity = !entity;
                return entity;
            };
            limora = sierra.bind(michal)(cntext);
            sierra = limora.map;
            cntext = function(argFoo) {
                entity = argFoo;
                entity = entity.item;
                entity = entity.id;
                return entity;
            };
            sierra = sierra.bind(limora)(cntext);
            cntext = sierra.pop;
            equals = cntext.bind(sierra)();
            var _closure2_slot23 = equals;
            cntext = 60;
            cntext = romeon[cntext];
            cntext = source.bind(tangon)(cntext);
            quebec = cntext.bind(tangon)(equals);
            var _closure2_slot24 = quebec;
            limora = _closure1_slot5;
            sierra = limora.useEffect;
            cntext = new Array(6);
            cntext[0] = target;
            cntext[1] = variable39;
            cntext[2] = quebec;
            cntext[3] = equals;
            cntext[4] = update;
            cntext[5] = echoed;
            update = function() {
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    entity = _closure2_slot18;
                    if(entity) { _fun00024_ip = 186; continue _fun00023 }
 13:
                    entity = _closure2_slot17;
                    if(entity) { _fun00024_ip = 186; continue _fun00023 }
 23:
                    entity = _closure2_slot24;
                    michal = null;
                    if(!(michal != entity)) { _fun00024_ip = 186; continue _fun00023 }
 36:
                    entity = _closure2_slot23;
                    if(!(michal != entity)) { _fun00024_ip = 186; continue _fun00023 }
 47:
                    michal = _closure2_slot23;
                    entity = _closure2_slot24;
                    if(!(michal !== entity)) { _fun00024_ip = 186; continue _fun00023 }
 62:
                    entity = global;
                    michal = entity.Date;
                    entity = michal.now;
                    option = entity.bind(michal)();
                    entity = _closure2_slot22;
                    zuuluu = option - entity;
                    michal = _closure1_slot21;
                    if(!(zuuluu > michal)) { _fun00024_ip = 186; continue _fun00023 }
 98:
                    tangon = _closure1_slot1;
                    oscard = _closure1_slot2;
                    michal = 61;
                    michal = oscard[michal];
                    zuuluu = undefined;
                    golfie = tangon.bind(zuuluu)(michal);
                    michal = golfie.gravityScrollEvent;
                    michal = michal.bind(golfie)(option);
                    michal = 17;
                    michal = oscard[michal];
                    tangon = tangon.bind(zuuluu)(michal);
                    zuuluu = tangon.track;
                    entity = _closure1_slot16;
                    michal = entity.HOME_FIRST_SCROLL_STARTED;
                    entity = {};
                    oscard = 'gravity';
                    entity['home_session_id'] = oscard;
                    report = _closure2_slot21;
                    entity['load_id'] = report;
                    entity = zuuluu.bind(tangon)(michal, entity);
 186:
                    entity = undefined;
                    return entity;
                }
            };
            update = sierra.bind(limora)(update, cntext);
            limora = _closure1_slot5;
            sierra = limora.useCallback;
            cntext = new Array(1);
            cntext[0] = output;
            update = function(argFoo) {
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    entity = argFoo;
                    oscard = entity.viewableItems;
                    var _closure3_slot0 = oscard;
                    entity = undefined;
                    var _closure3_slot1 = entity;
                    tangon = oscard.some;
                    michal = function(argFoo) {
                        entity = argFoo;
                        entity = entity.item;
                        entity = entity.data;
                        michal = entity.kind;
                        entity = 'end';
                        entity = entity === michal;
                        return entity;
                    };
                    michal = tangon.bind(oscard)(michal);
                    if(!michal) { _fun00026_ip = 56; continue _fun00025 }
 42:
                    tangon = _closure2_slot5;
                    michal = true;
                    michal = tangon.bind(entity)(michal);
 56:
                    michal = oscard.length;
                    romeon = 0;
                    if(!(romeon !== michal)) { _fun00026_ip = 483; continue _fun00025 }
 70:
                    tangon = _closure2_slot20;
                    tangon = tangon.bind(entity)(oscard);
                    tangon = oscard.length;
                    foxtra = 1;
                    tangon = tangon - foxtra;
                    tangon = oscard[tangon];
                    kiloes = null;
                    report = kiloes == tangon;
                    option = undefined;
                    if(report) { _fun00026_ip = 114; continue _fun00025 }
 109:
                    option = tangon.index;
 114:
                    if(!(kiloes != option)) { _fun00026_ip = 483; continue _fun00025 }
 121:
                    backup = new Array(0);
                    _closure3_slot1 = backup;
                    report = oscard.forEach;
                    tangon = function() {
                        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                            zuuluu = _closure3_slot0;
                            michal = 0;
                            michal = zuuluu[michal];
                            tangon = michal.item;
                            michal = tangon.data;
                            zuuluu = michal.kind;
                            michal = 'channelSummary';
                            if(!(michal === zuuluu)) { _fun00028_ip = 93; continue _fun00027 }
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
                    tangon = report.bind(oscard)(tangon);
                    golfie = _closure1_slot11;
                    report = golfie.getUnreadDisplayItems;
                    verify = report.bind(golfie)();
                    golfie = global;
                    yankee = golfie.Math;
                    offset = yankee.min;
                    report = verify.length;
                    report = report - foxtra;
                    report = offset.bind(yankee)(option, report);
                    offset = golfie.Date;
                    golfie = offset.now;
                    offset = golfie.bind(offset)();
                    yankee = 62;
                    golfie = report;
                    if(!(golfie >= romeon)) { _fun00026_ip = 301; continue _fun00025 }
 216:
                    source = verify[golfie];
                    sizing = offset;
                    if(!(kiloes != source)) { _fun00026_ip = 291; continue _fun00025 }
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
                    update = parseFloat(offset);
                    sizing = update + 1;
                    result['timestamp'] = update;
                    result = echoed.bind(backup)(result);
 291:
                    golfie = golfie - 1;
                    offset = sizing;
                    if(golfie >= romeon) { _fun00026_ip = 216; continue _fun00025 }
 301:
                    golfie = backup.length;
                    if(!(golfie > romeon)) { _fun00026_ip = 344; continue _fun00025 }
 310:
                    offset = _closure1_slot1;
                    yankee = _closure1_slot2;
                    golfie = 61;
                    golfie = yankee[golfie];
                    yankee = offset.bind(entity)(golfie);
                    offset = yankee.ackGravityItems;
                    golfie = true;
                    golfie = offset.bind(yankee)(backup, golfie);
 344:
                    offset = _closure1_slot11;
                    golfie = offset.getReadDisplayItems;
                    yankee = golfie.bind(offset)();
                    golfie = verify.length;
                    golfie = option - golfie;
                    option = golfie - foxtra;
                    if(!(!(option >= romeon))) { _fun00026_ip = 402; continue _fun00025 }
 375:
                    if(!(!(report >= romeon))) { _fun00026_ip = 385; continue _fun00025 }
 379:
                    golfie = new Array(0);
                    _fun00026_ip = 400; continue _fun00025;
 385:
                    offset = verify.slice;
                    report = report + foxtra;
                    golfie = offset.bind(verify)(romeon, report);
 400:
                    _fun00026_ip = 443; continue _fun00025;
 402:
                    report = new Array(0);
                    config = report;
                    sequen = verify;
                    vacuum = 0;
                    vacuum = arraySpread(config, sequen, vacuum);
                    offset = yankee.slice;
                    option = option + foxtra;
                    sequen = offset.bind(yankee)(romeon, option);
                    config = report;
                    option = arraySpread(config, sequen, vacuum);
                    golfie = report;
 443:
                    report = _closure1_slot23;
                    tangon = golfie.map;
                    zuuluu = function(argFoo) {
                        tangon = argFoo;
                        entity = {};
                        michal = tangon.id;
                        entity['id'] = michal;
                        report = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        michal = 62;
                        zuuluu = zuuluu[michal];
                        michal = undefined;
                        zuuluu = report.bind(michal)(zuuluu);
                        michal = zuuluu.typeToString;
                        michal = michal.bind(zuuluu)(tangon);
                        entity['type'] = michal;
                        return entity;
                    };
                    sequen = tangon.bind(golfie)(zuuluu);
                    vacuum = _closure2_slot16;
                    ctrled = 'batch';
                    record = undefined;
                    config = oscard;
                    michal = record[report](config, sequen, vacuum, ctrled, source);
 483:
                    return entity;
                }
            };
            equals = sierra.bind(limora)(update, cntext);
            var _closure2_slot25 = equals;
            limora = _closure1_slot5;
            sierra = limora.useCallback;
            cntext = new Array(1);
            cntext[0] = output;
            update = function(argFoo) {
                _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                    entity = argFoo;
                    oscard = entity.viewableItems;
                    michal = oscard.length;
                    entity = 0;
                    if(!(entity !== michal)) { _fun00030_ip = 66; continue _fun00029 }
 20:
                    report = _closure1_slot23;
                    michal = oscard.map;
                    entity = function(argFoo) {
                        michal = argFoo;
                        entity = {};
                        zuuluu = michal.item;
                        zuuluu = zuuluu.id;
                        entity['id'] = zuuluu;
                        tangon = _closure1_slot34;
                        zuuluu = michal.item;
                        michal = undefined;
                        michal = tangon.bind(michal)(zuuluu);
                        entity['type'] = michal;
                        return entity;
                    };
                    verify = michal.bind(oscard)(entity);
                    option = _closure2_slot16;
                    yankee = undefined;
                    golfie = 'long';
                    offset = oscard;
                    entity = yankee[report](offset, verify, option, golfie, oscard);
 66:
                    entity = undefined;
                    return entity;
                }
            };
            update = sierra.bind(limora)(update, cntext);
            var _closure2_slot26 = update;
            limora = _closure1_slot5;
            sierra = limora.useMemo;
            cntext = new Array(2);
            cntext[0] = equals;
            cntext[1] = update;
            update = function() {
                michal = {};
                entity = {'waitForInteraction': false, 'viewAreaCoveragePercentThreshold': 100, 'minimumViewTime': 50};
                michal['viewabilityConfig'] = entity;
                entity = _closure2_slot25;
                michal['onViewableItemsChanged'] = entity;
                entity = new Array(2);
                entity[0] = michal;
                michal = {};
                tangon = {'waitForInteraction': false, 'viewAreaCoveragePercentThreshold': 50, 'minimumViewTime': 1000};
                michal['viewabilityConfig'] = tangon;
                zuuluu = _closure2_slot26;
                michal['onViewableItemsChanged'] = zuuluu;
                entity[1] = michal;
                return entity;
            };
            update = sierra.bind(limora)(update, cntext);
            limora = _closure1_slot5;
            sierra = limora.useRef;
            cntext = null;
            cntext = sierra.bind(limora)(cntext);
            var _closure2_slot27 = cntext;
            equals = _closure1_slot5;
            limora = equals.useRef;
            sierra = {};
            quebec = function() { // Original name: scrollToTop
                _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                    entity = _closure2_slot27;
                    zuuluu = entity.current;
                    entity = null;
                    if(!(entity != zuuluu)) { _fun00032_ip = 50; continue _fun00031 }
 18:
                    michal = zuuluu.scrollToOffset;
                    entity = {};
                    report = 0;
                    entity['offset'] = report;
                    tangon = _closure2_slot3;
                    tangon = !tangon;
                    entity['animated'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
 50:
                    entity = undefined;
                    return entity;
                }
            };
            sierra['scrollToTop'] = quebec;
            limora = limora.bind(equals)(sierra);
            var _closure2_slot28 = limora;
            vacuum = romeon[vacuum];
            sierra = offset.bind(tangon)(vacuum);
            vacuum = sierra.useScrollToTop;
            vacuum = vacuum.bind(sierra)(limora);
            vacuum = romeon[entity];
            equals = offset.bind(tangon)(vacuum);
            limora = equals.useStateFromStores;
            vacuum = _closure1_slot10;
            sierra = new Array(1);
            sierra[0] = vacuum;
            vacuum = function() {
                michal = _closure1_slot10;
                entity = michal.getDoubleTapBehavior;
                entity = entity.bind(michal)();
                return entity;
            };
            quebec = limora.bind(equals)(sierra, vacuum);
            var _closure2_slot29 = quebec;
            vacuum = 33;
            vacuum = romeon[vacuum];
            sierra = offset.bind(tangon)(vacuum);
            vacuum = sierra.useNavigation;
            vacuum = vacuum.bind(sierra)();
            var _closure2_slot30 = vacuum;
            equals = _closure1_slot5;
            limora = equals.useEffect;
            sierra = new Array(4);
            sierra[0] = quebec;
            sierra[1] = golfie;
            sierra[2] = vacuum;
            sierra[3] = kiloes;
            vacuum = function() {
                _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                    michal = _closure2_slot6;
                    if(!michal) { _fun00034_ip = 57; continue _fun00033 }
 12:
                    report = _closure2_slot29;
                    option = _closure1_slot0;
                    tangon = _closure1_slot2;
                    golfie = 62;
                    tangon = tangon[golfie];
                    oscard = undefined;
                    tangon = option.bind(oscard)(tangon);
                    tangon = tangon.GravityICYMIDoubleTapBehavior;
                    tangon = tangon.DEFAULT;
                    if(!(report === tangon)) { _fun00034_ip = 83; continue _fun00033 }
 57:
                    report = _closure2_slot28;
                    tangon = {};
                    option = function() { // Original name: scrollToTop
                        _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                            entity = _closure2_slot27;
                            zuuluu = entity.current;
                            entity = null;
                            if(!(entity != zuuluu)) { _fun00036_ip = 50; continue _fun00035 }
 18:
                            michal = zuuluu.scrollToOffset;
                            entity = {};
                            report = 0;
                            entity['offset'] = report;
                            tangon = _closure2_slot3;
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
                    _fun00034_ip = 170; continue _fun00033;
 83:
                    tangon = _closure2_slot29;
                    report = _closure1_slot0;
                    michal = _closure1_slot2;
                    michal = michal[golfie];
                    michal = report.bind(oscard)(michal);
                    michal = michal.GravityICYMIDoubleTapBehavior;
                    michal = michal.NOTIFICATIONS;
                    if(!(tangon !== michal)) { _fun00034_ip = 146; continue _fun00033 }
 120:
                    tangon = _closure2_slot28;
                    michal = {};
                    report = function() { // Original name: scrollToTop
                        report = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 63;
                        tangon = michal[entity];
                        entity = undefined;
                        golfie = report.bind(entity)(tangon);
                        oscard = golfie.pushLazy;
                        tangon = _closure1_slot0;
                        zuuluu = 31;
                        zuuluu = michal[zuuluu];
                        tangon = tangon.bind(entity)(zuuluu);
                        zuuluu = 64;
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
                    _fun00034_ip = 170; continue _fun00033;
 146:
                    michal = _closure2_slot28;
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
                        tangon = _closure2_slot30;
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
            vacuum = limora.bind(equals)(vacuum, sierra);
            limora = _closure1_slot5;
            sierra = limora.useCallback;
            vacuum = new Array(2);
            vacuum[0] = cntext;
            vacuum[1] = kiloes;
            kiloes = function() {
                _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                    entity = _closure2_slot27;
                    zuuluu = entity.current;
                    entity = null;
                    if(!(entity != zuuluu)) { _fun00038_ip = 50; continue _fun00037 }
 18:
                    michal = zuuluu.scrollToOffset;
                    entity = {};
                    report = 0;
                    entity['offset'] = report;
                    tangon = _closure2_slot3;
                    tangon = !tangon;
                    entity['animated'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
 50:
                    entity = undefined;
                    return entity;
                }
            };
            kiloes = sierra.bind(limora)(kiloes, vacuum);
            var _closure2_slot31 = kiloes;
            sierra = _closure1_slot5;
            vacuum = sierra.useEffect;
            kiloes = new Array(1);
            kiloes[0] = oscard;
            oscard = function() {
                _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                    entity = _closure2_slot7;
                    if(!entity) { _fun00040_ip = 72; continue _fun00039 }
 10:
                    report = _closure1_slot1;
                    oscard = _closure1_slot2;
                    entity = 65;
                    entity = oscard[entity];
                    zuuluu = undefined;
                    golfie = report.bind(zuuluu)(entity);
                    entity = golfie.setGravitySelectedSummary;
                    tangon = null;
                    entity = entity.bind(golfie)(tangon, tangon);
                    entity = 61;
                    entity = oscard[entity];
                    zuuluu = report.bind(zuuluu)(entity);
                    entity = zuuluu.setGravitySelectedChannel;
                    entity = entity.bind(zuuluu)(tangon);
 72:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    entity = 61;
                    zuuluu = zuuluu[entity];
                    entity = undefined;
                    tangon = tangon.bind(entity)(zuuluu);
                    zuuluu = tangon.setTabFocused;
                    michal = _closure2_slot7;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                }
            };
            oscard = vacuum.bind(sierra)(oscard, kiloes);
            sierra = _closure1_slot5;
            vacuum = sierra.useEffect;
            kiloes = function() {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 61;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.openICYMITab;
                michal = michal.bind(zuuluu)();
                return entity;
            };
            oscard = new Array(0);
            oscard = vacuum.bind(sierra)(kiloes, oscard);
            oscard = 66;
            oscard = romeon[oscard];
            oscard = source.bind(tangon)(oscard);
            oscard = oscard.bind(tangon)();
            limora = oscard.showDot;
            var _closure2_slot32 = limora;
            oscard = romeon[entity];
            equals = offset.bind(tangon)(oscard);
            sierra = equals.useStateFromStores;
            oscard = _closure1_slot11;
            vacuum = new Array(1);
            vacuum[0] = oscard;
            kiloes = function() {
                michal = _closure1_slot11;
                entity = michal.notificationItem;
                entity = entity.bind(michal)();
                return entity;
            };
            oscard = new Array(0);
            variable39 = sierra.bind(equals)(vacuum, kiloes, oscard);
            var _closure2_slot33 = variable39;
            sierra = _closure1_slot5;
            vacuum = sierra.useCallback;
            kiloes = _closure1_slot3;
            oscard = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(michal) { _fun00042_ip = 277; continue _fun00041 }
 10:
                        zuuluu = _closure1_slot1;
                        tangon = _closure1_slot2;
                        michal = 17;
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
                        verify = _closure2_slot32;
                        option = 'NoDotShown';
                        if(!verify) { _fun00042_ip = 104; continue _fun00041 }
 98:
                        option = 'DotShown';
 104:
                        michal['variant'] = option;
                        michal = tangon.bind(golfie)(zuuluu, michal);
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        option = 61;
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
                        if(zuuluu) { _fun00042_ip = 274; continue _fun00041 }
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
                        if(tangon) { _fun00042_ip = 271; continue _fun00041 }
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
                        if(golfie) { _fun00042_ip = 268; continue _fun00041 }
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
            kiloes = kiloes.bind(tangon)(oscard);
            oscard = new Array(1);
            oscard[0] = limora;
            limora = vacuum.bind(sierra)(kiloes, oscard);
            var _closure2_slot34 = limora;
            oscard = romeon[entity];
            sierra = offset.bind(tangon)(oscard);
            vacuum = sierra.useStateFromStores;
            oscard = _closure1_slot10;
            kiloes = new Array(2);
            kiloes[0] = oscard;
            oscard = _closure1_slot15;
            kiloes[1] = oscard;
            oscard = function() {
                _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
                    zuuluu = _closure1_slot10;
                    entity = zuuluu.filterNSFW;
                    entity = entity.bind(zuuluu)();
                    if(entity) { _fun00044_ip = 58; continue _fun00043 }
 22:
                    zuuluu = _closure1_slot15;
                    michal = zuuluu.getCurrentUser;
                    michal = michal.bind(zuuluu)();
                    zuuluu = null;
                    tangon = zuuluu == michal;
                    zuuluu = undefined;
                    if(tangon) { _fun00044_ip = 52; continue _fun00043 }
 46:
                    zuuluu = michal.nsfwAllowed;
 52:
                    michal = true;
                    entity = michal !== zuuluu;
 58:
                    return entity;
                }
            };
            oscard = vacuum.bind(sierra)(kiloes, oscard);
            var _closure2_slot35 = oscard;
            kiloes = 67;
            kiloes = romeon[kiloes];
            vacuum = offset.bind(tangon)(kiloes);
            kiloes = vacuum.useEligibleActiveVoiceChannelId;
            quebec = kiloes.bind(vacuum)();
            var _closure2_slot36 = quebec;
            kiloes = 68;
            kiloes = romeon[kiloes];
            kiloes = source.bind(tangon)(kiloes);
            kiloes = kiloes.bind(tangon)();
            sierra = kiloes.activeConvos;
            var _closure2_slot37 = sierra;
            equals = kiloes.loading;
            var _closure2_slot38 = equals;
            vacuum = _closure1_slot5;
            source = vacuum.useMemo;
            kiloes = new Array(13);
            kiloes[0] = echoed;
            kiloes[1] = variable39;
            kiloes[2] = golfie;
            kiloes[3] = verify;
            kiloes[4] = variable38;
            kiloes[5] = quebec;
            kiloes[6] = equals;
            kiloes[7] = sierra;
            kiloes[8] = record;
            kiloes[9] = config;
            kiloes[10] = sequen;
            kiloes[11] = oscard;
            kiloes[12] = backup;
            oscard = function() {
                _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
                    michal = new Array(0);
                    var _closure3_slot0 = michal;
                    tangon = _closure2_slot2;
                    if(!tangon) { _fun00046_ip = 58; continue _fun00045 }
 20:
                    report = michal.push;
                    tangon = {'id': 'search', 'timestamp': 0, 'unread': false};
                    golfie = 'search';
                    oscard = {};
                    oscard['kind'] = golfie;
                    tangon['data'] = oscard;
                    tangon = report.bind(michal)(tangon);
 58:
                    tangon = _closure2_slot17;
                    if(!tangon) { _fun00046_ip = 75; continue _fun00045 }
 65:
                    oscard = _closure2_slot33;
                    report = null;
                    tangon = report != oscard;
 75:
                    if(!tangon) { _fun00046_ip = 128; continue _fun00045 }
 78:
                    report = _closure2_slot33;
                    oscard = report.type;
                    option = _closure1_slot0;
                    golfie = _closure1_slot2;
                    report = 62;
                    golfie = golfie[report];
                    report = undefined;
                    report = option.bind(report)(golfie);
                    report = report.GravityItemTypes;
                    report = report.CUSTOM_STATUS;
                    tangon = oscard === report;
 128:
                    if(!tangon) { _fun00046_ip = 261; continue _fun00045 }
 134:
                    report = michal.push;
                    tangon = {};
                    oscard = _closure2_slot33;
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
                    option = 47;
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
 261:
                    tangon = _closure2_slot17;
                    if(tangon) { _fun00046_ip = 656; continue _fun00045 }
 271:
                    tangon = _closure2_slot6;
                    if(!tangon) { _fun00046_ip = 293; continue _fun00045 }
 278:
                    report = _closure2_slot8;
                    oscard = report.length;
                    report = 0;
                    tangon = oscard > report;
 293:
                    if(!tangon) { _fun00046_ip = 383; continue _fun00045 }
 296:
                    report = michal.push;
                    tangon = {'id': 'mentions', 'timestamp': 0, 'unread': true};
                    golfie = 'mentions';
                    oscard = {};
                    oscard['kind'] = golfie;
                    golfie = _closure2_slot8;
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
 383:
                    tangon = _closure2_slot11;
                    if(!tangon) { _fun00046_ip = 430; continue _fun00045 }
 390:
                    report = michal.push;
                    tangon = {'id': 'edit_custom_status', 'timestamp': 0, 'unread': false};
                    oscard = {};
                    golfie = 'editCustomStatus';
                    oscard['kind'] = golfie;
                    tangon['data'] = oscard;
                    tangon = report.bind(michal)(tangon);
 430:
                    report = _closure2_slot36;
                    tangon = null;
                    if(!(tangon != report)) { _fun00046_ip = 503; continue _fun00045 }
 440:
                    report = michal.push;
                    tangon = {};
                    oscard = _closure2_slot36;
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
 503:
                    tangon = _closure2_slot38;
                    tangon = !tangon;
                    if(!tangon) { _fun00046_ip = 528; continue _fun00045 }
 513:
                    report = _closure2_slot37;
                    oscard = report.length;
                    report = 0;
                    tangon = oscard > report;
 528:
                    if(!tangon) { _fun00046_ip = 552; continue _fun00045 }
 531:
                    oscard = _closure2_slot37;
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
 552:
                    oscard = _closure2_slot13;
                    report = oscard.forEach;
                    tangon = function(argFoo) {
                        _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
                            zuuluu = argFoo;
                            entity = _closure2_slot35;
                            if(!entity) { _fun00048_ip = 27; continue _fun00047 }
 13:
                            tangon = _closure1_slot27;
                            michal = undefined;
                            entity = tangon.bind(michal)(zuuluu);
 27:
                            if(entity) { _fun00048_ip = 47; continue _fun00047 }
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
                    tangon = _closure2_slot15;
                    if(!tangon) { _fun00046_ip = 618; continue _fun00045 }
 580:
                    report = michal.push;
                    tangon = {'id': 'end', 'timestamp': 0, 'unread': false};
                    golfie = 'end';
                    oscard = {};
                    oscard['kind'] = golfie;
                    tangon['data'] = oscard;
                    tangon = report.bind(michal)(tangon);
 618:
                    tangon = _closure2_slot14;
                    report = tangon.length;
                    tangon = 0;
                    if(!(report > tangon)) { _fun00046_ip = 694; continue _fun00045 }
 633:
                    tangon = _closure2_slot14;
                    zuuluu = tangon.forEach;
                    entity = function(argFoo) {
                        _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
                            zuuluu = argFoo;
                            entity = _closure2_slot35;
                            if(!entity) { _fun00050_ip = 27; continue _fun00049 }
 13:
                            tangon = _closure1_slot27;
                            michal = undefined;
                            entity = tangon.bind(michal)(zuuluu);
 27:
                            if(entity) { _fun00050_ip = 47; continue _fun00049 }
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
                    _fun00046_ip = 694; continue _fun00045;
 656:
                    zuuluu = michal.push;
                    entity = {'id': 'loading', 'timestamp': 0, 'unread': false};
                    report = 'loading';
                    tangon = {};
                    tangon['kind'] = report;
                    entity['data'] = tangon;
                    entity = zuuluu.bind(michal)(entity);
 694:
                    entity = {};
                    entity['data'] = michal;
                    michal = new Array(0);
                    entity['stickyHeaderIndices'] = michal;
                    return entity;
                }
            };
            oscard = source.bind(vacuum)(oscard, kiloes);
            config = oscard.data;
            var _closure2_slot39 = config;
            source = oscard.stickyHeaderIndices;
            report = report - zuuluu;
            zuuluu = 32;
            oscard = report - zuuluu;
            zuuluu = 69;
            zuuluu = romeon[zuuluu];
            report = offset.bind(tangon)(zuuluu);
            zuuluu = report.useMainTabsHeight;
            report = zuuluu.bind(report)();
            zuuluu = 24;
            zuuluu = oscard - zuuluu;
            variable38 = zuuluu - report;
            var _closure2_slot40 = variable38;
            oscard = _closure1_slot5;
            report = oscard.useCallback;
            zuuluu = new Array(6);
            zuuluu[0] = backup;
            zuuluu[1] = golfie;
            golfie = verify.length;
            zuuluu[2] = golfie;
            golfie = papara.headerBorder;
            zuuluu[3] = golfie;
            zuuluu[4] = michal;
            zuuluu[5] = whisks;
            michal = function(argFoo) {
                _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
                    entity = argFoo;
                    oscard = entity.item;
                    var _closure3_slot0 = oscard;
                    entity = oscard.data;
                    michal = entity.kind;
                    entity = 'search';
                    if(!(entity !== michal)) { _fun00052_ip = 1303; continue _fun00051 }
 35:
                    entity = oscard.data;
                    michal = entity.kind;
                    entity = 'channelSummary';
                    if(!(entity !== michal)) { _fun00052_ip = 1248; continue _fun00051 }
 58:
                    entity = oscard.data;
                    michal = entity.kind;
                    entity = 'message';
                    if(!(entity !== michal)) { _fun00052_ip = 875; continue _fun00051 }
 79:
                    entity = oscard.data;
                    michal = entity.kind;
                    entity = 'contentInventory';
                    if(!(entity !== michal)) { _fun00052_ip = 784; continue _fun00051 }
 102:
                    entity = oscard.data;
                    michal = entity.kind;
                    entity = 'voice';
                    if(!(entity !== michal)) { _fun00052_ip = 736; continue _fun00051 }
 123:
                    entity = oscard.data;
                    michal = entity.kind;
                    entity = 'loading';
                    if(!(entity !== michal)) { _fun00052_ip = 691; continue _fun00051 }
 144:
                    entity = oscard.data;
                    michal = entity.kind;
                    entity = 'end';
                    if(!(entity !== michal)) { _fun00052_ip = 640; continue _fun00051 }
 165:
                    entity = oscard.data;
                    michal = entity.kind;
                    entity = 'guildEvent';
                    if(!(entity !== michal)) { _fun00052_ip = 585; continue _fun00051 }
 186:
                    entity = oscard.data;
                    michal = entity.kind;
                    entity = 'recommendedGuilds';
                    if(!(entity !== michal)) { _fun00052_ip = 540; continue _fun00051 }
 209:
                    entity = oscard.data;
                    michal = entity.kind;
                    entity = 'mentions';
                    if(!(entity !== michal)) { _fun00052_ip = 485; continue _fun00051 }
 230:
                    entity = oscard.data;
                    michal = entity.kind;
                    entity = 'icymiHeader';
                    if(!(entity !== michal)) { _fun00052_ip = 446; continue _fun00051 }
 253:
                    entity = oscard.data;
                    michal = entity.kind;
                    entity = 'editCustomStatus';
                    if(!(entity !== michal)) { _fun00052_ip = 407; continue _fun00051 }
 276:
                    entity = oscard.data;
                    zuuluu = entity.kind;
                    verify = null;
                    michal = 'forumThread';
                    entity = null;
                    if(!(michal === zuuluu)) { _fun00052_ip = 405; continue _fun00051 }
 300:
                    report = _closure1_slot18;
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot2;
                    michal = 82;
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
                    yankee = _closure2_slot19;
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
 405:
                    _fun00052_ip = 444; continue _fun00051;
 407:
                    report = _closure1_slot18;
                    zuuluu = _closure1_slot1;
                    tangon = _closure1_slot2;
                    michal = 81;
                    michal = tangon[michal];
                    tangon = undefined;
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = {};
                    entity = report.bind(tangon)(zuuluu, michal);
 444:
                    _fun00052_ip = 483; continue _fun00051;
 446:
                    report = _closure1_slot18;
                    zuuluu = _closure1_slot1;
                    tangon = _closure1_slot2;
                    michal = 80;
                    michal = tangon[michal];
                    tangon = undefined;
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = {};
                    entity = report.bind(tangon)(zuuluu, michal);
 483:
                    _fun00052_ip = 538; continue _fun00051;
 485:
                    report = _closure1_slot18;
                    zuuluu = _closure1_slot1;
                    tangon = _closure1_slot2;
                    michal = 79;
                    michal = tangon[michal];
                    tangon = undefined;
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = {};
                    golfie = oscard.data;
                    golfie = golfie.messages;
                    michal['messages'] = golfie;
                    entity = report.bind(tangon)(zuuluu, michal);
 538:
                    _fun00052_ip = 583; continue _fun00051;
 540:
                    report = _closure1_slot18;
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot2;
                    michal = 78;
                    michal = tangon[michal];
                    tangon = undefined;
                    michal = zuuluu.bind(tangon)(michal);
                    zuuluu = michal.ICYMIServerRecommendationRow;
                    michal = {};
                    entity = report.bind(tangon)(zuuluu, michal);
 583:
                    _fun00052_ip = 638; continue _fun00051;
 585:
                    report = _closure1_slot18;
                    zuuluu = _closure1_slot1;
                    tangon = _closure1_slot2;
                    michal = 77;
                    michal = tangon[michal];
                    tangon = undefined;
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = {};
                    golfie = oscard.data;
                    golfie = golfie.eventId;
                    michal['eventId'] = golfie;
                    entity = report.bind(tangon)(zuuluu, michal);
 638:
                    _fun00052_ip = 689; continue _fun00051;
 640:
                    report = _closure1_slot18;
                    zuuluu = _closure1_slot1;
                    tangon = _closure1_slot2;
                    michal = 76;
                    michal = tangon[michal];
                    tangon = undefined;
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = {};
                    golfie = _closure2_slot4;
                    michal['visible'] = golfie;
                    entity = report.bind(tangon)(zuuluu, michal);
 689:
                    _fun00052_ip = 734; continue _fun00051;
 691:
                    report = _closure1_slot18;
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot2;
                    michal = 75;
                    michal = tangon[michal];
                    tangon = undefined;
                    michal = zuuluu.bind(tangon)(michal);
                    zuuluu = michal.ICYMILoading;
                    michal = {};
                    entity = report.bind(tangon)(zuuluu, michal);
 734:
                    _fun00052_ip = 782; continue _fun00051;
 736:
                    report = _closure1_slot18;
                    zuuluu = _closure1_slot1;
                    tangon = _closure1_slot2;
                    michal = 67;
                    michal = tangon[michal];
                    tangon = undefined;
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = {};
                    golfie = oscard.id;
                    michal['channelId'] = golfie;
                    entity = report.bind(tangon)(zuuluu, michal);
 782:
                    _fun00052_ip = 870; continue _fun00051;
 784:
                    report = _closure1_slot18;
                    zuuluu = _closure1_slot1;
                    tangon = _closure1_slot2;
                    michal = 74;
                    michal = tangon[michal];
                    tangon = undefined;
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = {};
                    offset = _closure2_slot19;
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
 870:
                    _fun00052_ip = 1246; continue _fun00051;
 875:
                    tangon = oscard.channelType;
                    report = _closure1_slot0;
                    golfie = _closure1_slot2;
                    michal = 48;
                    michal = golfie[michal];
                    golfie = undefined;
                    michal = report.bind(golfie)(michal);
                    michal = michal.ChannelTypes;
                    michal = michal.GUILD_ANNOUNCEMENT;
                    if(!(tangon !== michal)) { _fun00052_ip = 1151; continue _fun00051 }
 925:
                    michal = oscard.data;
                    tangon = michal.messageContext;
                    yankee = null;
                    report = yankee == tangon;
                    michal = undefined;
                    if(report) { _fun00052_ip = 953; continue _fun00051 }
 947:
                    michal = tangon.external_content_application_id;
 953:
                    if(!(yankee == michal)) { _fun00052_ip = 1054; continue _fun00051 }
 957:
                    report = _closure1_slot18;
                    tangon = _closure1_slot1;
                    verify = _closure1_slot2;
                    michal = 73;
                    michal = verify[michal];
                    tangon = tangon.bind(golfie)(michal);
                    michal = {};
                    verify = oscard.data;
                    verify = verify.message;
                    michal['message'] = verify;
                    verify = oscard.data;
                    verify = verify.messageContext;
                    michal['messageContext'] = verify;
                    romeon = _closure2_slot19;
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
                    _fun00052_ip = 1149; continue _fun00051;
 1054:
                    verify = _closure1_slot18;
                    report = _closure1_slot1;
                    offset = _closure1_slot2;
                    tangon = 72;
                    tangon = offset[tangon];
                    report = report.bind(golfie)(tangon);
                    tangon = {};
                    offset = oscard.data;
                    offset = offset.message;
                    tangon['message'] = offset;
                    offset = oscard.data;
                    offset = offset.messageContext;
                    tangon['messageContext'] = offset;
                    foxtra = _closure2_slot19;
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
 1149:
                    _fun00052_ip = 1243; continue _fun00051;
 1151:
                    report = _closure1_slot18;
                    tangon = _closure1_slot1;
                    verify = _closure1_slot2;
                    zuuluu = 71;
                    zuuluu = verify[zuuluu];
                    tangon = tangon.bind(golfie)(zuuluu);
                    zuuluu = {};
                    verify = oscard.unread;
                    zuuluu['unread'] = verify;
                    verify = oscard.data;
                    verify = verify.message;
                    zuuluu['message'] = verify;
                    offset = _closure2_slot19;
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
 1243:
                    entity = michal;
 1246:
                    _fun00052_ip = 1301; continue _fun00051;
 1248:
                    report = _closure1_slot18;
                    zuuluu = _closure1_slot1;
                    tangon = _closure1_slot2;
                    michal = 70;
                    michal = tangon[michal];
                    tangon = undefined;
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = {};
                    oscard = oscard.data;
                    oscard = oscard.topic;
                    michal['topic'] = oscard;
                    entity = report.bind(tangon)(zuuluu, michal);
 1301:
                    _fun00052_ip = 1425; continue _fun00051;
 1303:
                    zuuluu = _closure2_slot2;
                    michal = null;
                    if(!zuuluu) { _fun00052_ip = 1422; continue _fun00051 }
 1315:
                    oscard = _closure1_slot19;
                    report = _closure1_slot20;
                    tangon = {};
                    yankee = _closure1_slot18;
                    offset = _closure1_slot28;
                    zuuluu = undefined;
                    golfie = {};
                    offset = yankee.bind(zuuluu)(offset, golfie);
                    golfie = new Array(2);
                    golfie[0] = offset;
                    offset = _closure2_slot6;
                    if(!offset) { _fun00052_ip = 1378; continue _fun00051 }
 1361:
                    offset = _closure2_slot8;
                    yankee = offset.length;
                    offset = 0;
                    option = null;
                    if(!(offset === yankee)) { _fun00052_ip = 1408; continue _fun00051 }
 1378:
                    yankee = _closure1_slot18;
                    offset = _closure1_slot6;
                    verify = {};
                    romeon = _closure2_slot0;
                    romeon = romeon.headerBorder;
                    verify['style'] = romeon;
                    option = yankee.bind(zuuluu)(offset, verify);
 1408:
                    golfie[1] = option;
                    tangon['children'] = golfie;
                    michal = oscard.bind(zuuluu)(report, tangon);
 1422:
                    entity = michal;
 1425:
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
            record = report.bind(oscard)(zuuluu, michal);
            oscard = _closure1_slot5;
            report = oscard.useMemo;
            zuuluu = new Array(3);
            zuuluu[0] = variable38;
            michal = config.length;
            zuuluu[1] = michal;
            zuuluu[2] = variable37;
            michal = function() {
                _fun00053: for(var _fun00054_ip = 0; ; ) switch(_fun00054_ip) {
 0:
                    entity = _closure2_slot39;
                    michal = entity.length;
                    entity = 0;
                    michal = michal > entity;
                    entity = undefined;
                    if(!michal) { _fun00054_ip = 44; continue _fun00053 }
 23:
                    michal = {};
                    tangon = _closure2_slot40;
                    michal['height'] = tangon;
                    zuuluu = _closure2_slot1;
                    michal['width'] = zuuluu;
                    entity = michal;
 44:
                    return entity;
                }
            };
            vacuum = report.bind(oscard)(michal, zuuluu);
            michal = 83;
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
            oscard = _closure1_slot26;
            report = {};
            option = romeon[option];
            option = offset.bind(tangon)(option);
            option = option.GravityUnreadMentionsBadgeVariant;
            offset = option.RED_BADGE;
            option = 0;
            if(!(yankee === offset)) { _fun00014_ip = 2075; continue _fun00013 }
 2061:
            offset = sizing.length;
            verify = verify.length;
            option = offset + verify;
 2075:
            report['numUnreadMentions'] = option;
            oscard = golfie.bind(tangon)(oscard, report);
            report = new Array(2);
            report[0] = oscard;
            option = _closure1_slot18;
            equals = _closure1_slot0;
            quebec = _closure1_slot2;
            oscard = 84;
            oscard = quebec[oscard];
            oscard = equals.bind(tangon)(oscard);
            oscard = oscard.ICYMIContext;
            golfie = oscard.Provider;
            oscard = {};
            verify = {};
            verify['width'] = variable37;
            oscard['value'] = verify;
            yankee = _closure1_slot19;
            offset = _closure1_slot6;
            verify = {};
            kiloes = papara.flashListWrapper;
            romeon = new Array(3);
            romeon[0] = kiloes;
            kiloes = {};
            kiloes['height'] = variable38;
            kiloes['width'] = variable37;
            variable37 = 'auto';
            kiloes['marginHorizontal'] = variable37;
            romeon[1] = kiloes;
            romeon[2] = backup;
            verify['style'] = romeon;
            kiloes = _closure1_slot18;
            backup = _closure1_slot1;
            romeon = 85;
            romeon = quebec[romeon];
            backup = backup.bind(tangon)(romeon);
            romeon = {};
            variable36 = function() { // Original name: onPress
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
                zuuluu = _closure2_slot34;
                zuuluu = zuuluu.bind(entity)();
                michal = _closure2_slot31;
                michal = michal.bind(entity)();
                return entity;
            };
            romeon['onPress'] = variable36;
            romeon['isRefreshing'] = target;
            romeon['newUnreadMentions'] = sizing;
            backup = kiloes.bind(tangon)(backup, romeon);
            romeon = new Array(2);
            romeon[0] = backup;
            sizing = _closure1_slot18;
            backup = 86;
            backup = quebec[backup];
            backup = equals.bind(tangon)(backup);
            kiloes = backup.FlashList;
            backup = {};
            backup['ref'] = cntext;
            cntext = !echoed;
            backup['scrollEnabled'] = cntext;
            cntext = {};
            cntext['endVisible'] = whisks;
            backup['extraData'] = cntext;
            backup['contentContainerStyle'] = record;
            record = 26;
            cntext = quebec[record];
            cntext = equals.bind(tangon)(cntext);
            whisks = cntext.intl;
            cntext = whisks.string;
            record = quebec[record];
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
            if(!sierra) { _fun00014_ip = 2415; continue _fun00013 }
 2413:
            target = 0;
 2415:
            papara['opacity'] = target;
            config['style'] = papara;
            config = cntext.bind(tangon)(record, config);
            backup['refreshControl'] = config;
            config = 3;
            backup['onEndReachedThreshold'] = config;
            config = _closure1_slot33;
            backup['onEndReached'] = config;
            config = _closure1_slot36;
            backup['keyExtractor'] = config;
            backup['renderItem'] = sequen;
            sequen = 200;
            backup['estimatedItemSize'] = sequen;
            backup['estimatedListSize'] = vacuum;
            vacuum = _closure1_slot34;
            backup['getItemType'] = vacuum;
            vacuum = _closure1_slot0;
            sequen = _closure1_slot2;
            ctrled = 87;
            ctrled = sequen[ctrled];
            vacuum = vacuum.bind(tangon)(ctrled);
            ctrled = vacuum.isAndroid;
            ctrled = ctrled.bind(vacuum)();
            ctrled = 100;
            backup['drawDistance'] = ctrled;
            backup['stickyHeaderIndices'] = source;
            backup['viewabilityConfigCallbackPairs'] = update;
            if(echoed) { _fun00014_ip = 2540; continue _fun00013 }
 2537:
            result = output;
 2540:
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
    var _closure1_slot35 = entity;
    entity = function(argFoo) { // Original name: keyExtractor
        entity = argFoo;
        entity = entity.id;
        return entity;
    };
    var _closure1_slot36 = entity;
    tangon = global;
    verify = tangon.Object;
    option = verify.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, golfie);
    entity = 0;
    golfie = oscard[entity];
    entity = undefined;
    golfie = romeon.bind(entity)(golfie);
    var _closure1_slot3 = golfie;
    kiloes = 1;
    golfie = oscard[kiloes];
    golfie = romeon.bind(entity)(golfie);
    var _closure1_slot4 = golfie;
    golfie = 2;
    option = oscard[golfie];
    golfie = argCor;
    option = golfie.bind(entity)(option);
    var _closure1_slot5 = option;
    golfie = 3;
    golfie = oscard[golfie];
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
    backup = golfie.ICYMI_MARGIN;
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
    verify = 15;
    golfie = oscard[verify];
    golfie = report.bind(entity)(golfie);
    offset = golfie.jsx;
    var _closure1_slot18 = offset;
    offset = golfie.jsxs;
    var _closure1_slot19 = offset;
    golfie = golfie.Fragment;
    var _closure1_slot20 = golfie;
    golfie = 16;
    golfie = oscard[golfie];
    golfie = romeon.bind(entity)(golfie);
    golfie = golfie.Millis;
    golfie = golfie.MINUTE;
    golfie = verify * golfie;
    var _closure1_slot21 = golfie;
    verify = tangon.Set;
    tangon = verify.prototype;
    golfie = Object.create(tangon, {constructor: {value: verify}});
    echoed = ['end', 'loading', 'mentions', 'editCustomStatus', 'icymiHeader', 'recommendedGuilds', 'search'];
    update = golfie;
    tangon = new update[verify](echoed, result);
    tangon = tangon instanceof Object ? tangon : golfie;
    var _closure1_slot22 = tangon;
    tangon = function(argFoo, argBar, argBaz, argCor) { // Original name: trackFeedItemSeen
        _fun00055: for(var _fun00056_ip = 0; ; ) switch(_fun00056_ip) {
 0:
            golfie = argFoo;
            option = argBar;
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 17;
            michal = michal[entity];
            entity = undefined;
            report = zuuluu.bind(entity)(michal);
            tangon = report.track;
            zuuluu = 'batch';
            michal = argCor;
            if(!(zuuluu !== michal)) { _fun00056_ip = 63; continue _fun00055 }
 51:
            michal = _closure1_slot16;
            zuuluu = michal.FEED_ITEM_SEEN_LONG;
            _fun00056_ip = 73; continue _fun00055;
 63:
            michal = _closure1_slot16;
            zuuluu = michal.FEED_ITEM_SEEN_BATCH;
 73:
            michal = {};
            offset = _closure1_slot11;
            verify = offset.getLoadId;
            verify = verify.bind(offset)();
            michal['load_id'] = verify;
            verify = 'gravity';
            michal['home_session_id'] = verify;
            offset = golfie.map;
            verify = function(argFoo) {
                entity = argFoo;
                entity = entity.item;
                entity = entity.id;
                return entity;
            };
            verify = offset.bind(golfie)(verify);
            michal['feed_item_ids'] = verify;
            offset = golfie.map;
            verify = function(argFoo) {
                zuuluu = _closure1_slot34;
                entity = argFoo;
                michal = entity.item;
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
                return entity;
            };
            verify = offset.bind(golfie)(verify);
            michal['feed_item_types'] = verify;
            golfie = golfie.length;
            michal['num_items'] = golfie;
            verify = option.map;
            golfie = function(argFoo) {
                entity = argFoo;
                entity = entity.id;
                return entity;
            };
            golfie = verify.bind(option)(golfie);
            michal['all_feed_item_ids'] = golfie;
            verify = option.map;
            golfie = function(argFoo) {
                entity = argFoo;
                entity = entity.type;
                return entity;
            };
            golfie = verify.bind(option)(golfie);
            michal['all_feed_item_types'] = golfie;
            golfie = option.length;
            michal['num_all_items'] = golfie;
            golfie = option.map;
            oscard = function(argFoo, argBar) {
                entity = argBar;
                return entity;
            };
            oscard = golfie.bind(option)(oscard);
            michal['all_feed_item_indices'] = oscard;
            oscard = argBaz;
            michal['feed_version'] = oscard;
            oscard = 3;
            michal['version'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        }
    };
    var _closure1_slot23 = tangon;
    tangon = 18;
    golfie = oscard[tangon];
    offset = report.bind(entity)(golfie);
    verify = offset.createStyles;
    golfie = {};
    yankee = {'flex': 1, 'flexShrink': 1, 'flexGrow': 1};
    golfie['container'] = yankee;
    foxtra = {};
    yankee = 19;
    sizing = oscard[yankee];
    sizing = romeon.bind(entity)(sizing);
    sizing = sizing.colors;
    sizing = sizing.BG_BASE_TERTIARY;
    foxtra['backgroundColor'] = sizing;
    sizing = oscard[yankee];
    sizing = romeon.bind(entity)(sizing);
    sizing = sizing.spacing;
    sizing = sizing.PX_8;
    foxtra['paddingHorizontal'] = sizing;
    sizing = 'hidden';
    foxtra['overflow'] = sizing;
    foxtra['flex'] = kiloes;
    golfie['containerOuterTablet'] = foxtra;
    foxtra = {'flex': 1, 'flexShrink': 1, 'flexGrow': 1, 'overflow': 'hidden'};
    kiloes = oscard[yankee];
    kiloes = romeon.bind(entity)(kiloes);
    kiloes = kiloes.radii;
    kiloes = kiloes.sm;
    foxtra['borderTopLeftRadius'] = kiloes;
    kiloes = oscard[yankee];
    kiloes = romeon.bind(entity)(kiloes);
    kiloes = kiloes.radii;
    kiloes = kiloes.sm;
    foxtra['borderTopRightRadius'] = kiloes;
    golfie['containerInPanels'] = foxtra;
    foxtra = {};
    kiloes = oscard[yankee];
    kiloes = romeon.bind(entity)(kiloes);
    kiloes = kiloes.colors;
    kiloes = kiloes.BG_BASE_PRIMARY;
    foxtra['backgroundColor'] = kiloes;
    golfie['containerBackground'] = foxtra;
    foxtra = {'backgroundColor': null, 'minHeight': 2, 'flex': 1};
    kiloes = oscard[yankee];
    kiloes = romeon.bind(entity)(kiloes);
    kiloes = kiloes.colors;
    kiloes = kiloes.BG_BASE_PRIMARY;
    foxtra['backgroundColor'] = kiloes;
    golfie['flashListWrapper'] = foxtra;
    foxtra = {};
    kiloes = oscard[yankee];
    kiloes = romeon.bind(entity)(kiloes);
    kiloes = kiloes.colors;
    kiloes = kiloes.INTERACTIVE_NORMAL;
    foxtra['color'] = kiloes;
    golfie['refreshing'] = foxtra;
    foxtra = {'backgroundColor': null, 'position': 'relative', 'overflow': 'hidden', 'width': '100%'};
    kiloes = oscard[yankee];
    kiloes = romeon.bind(entity)(kiloes);
    kiloes = kiloes.colors;
    kiloes = kiloes.BG_BASE_PRIMARY;
    foxtra['backgroundColor'] = kiloes;
    golfie['header'] = foxtra;
    foxtra = {};
    foxtra['marginRight'] = backup;
    kiloes = oscard[yankee];
    kiloes = romeon.bind(entity)(kiloes);
    kiloes = kiloes.spacing;
    kiloes = kiloes.PX_32;
    foxtra['height'] = kiloes;
    kiloes = oscard[yankee];
    kiloes = romeon.bind(entity)(kiloes);
    kiloes = kiloes.spacing;
    kiloes = kiloes.PX_32;
    foxtra['width'] = kiloes;
    kiloes = 'center';
    foxtra['alignItems'] = kiloes;
    foxtra['justifyContent'] = kiloes;
    kiloes = oscard[yankee];
    kiloes = romeon.bind(entity)(kiloes);
    kiloes = kiloes.radii;
    kiloes = kiloes.lg;
    foxtra['borderRadius'] = kiloes;
    kiloes = oscard[yankee];
    kiloes = romeon.bind(entity)(kiloes);
    kiloes = kiloes.colors;
    kiloes = kiloes.REDESIGN_BUTTON_OVERLAY_ALPHA_BACKGROUND;
    foxtra['backgroundColor'] = kiloes;
    golfie['headerClose'] = foxtra;
    foxtra = {'height': 56, 'marginHorizontal': null, 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'space-between'};
    foxtra['marginHorizontal'] = backup;
    golfie['headerTitle'] = foxtra;
    foxtra = {'flexDirection': 'row', 'alignItems': 'center', 'gap': 4};
    golfie['headerText'] = foxtra;
    foxtra = {'flexDirection': 'row', 'alignItems': 'center'};
    backup = oscard[yankee];
    backup = romeon.bind(entity)(backup);
    backup = backup.spacing;
    backup = backup.PX_12;
    foxtra['gap'] = backup;
    golfie['headerActions'] = foxtra;
    foxtra = {'height': 18, 'width': 18};
    backup = oscard[yankee];
    backup = romeon.bind(entity)(backup);
    backup = backup.radii;
    backup = backup.round;
    foxtra['borderRadius'] = backup;
    golfie['notificationBadge'] = foxtra;
    foxtra = {'flex': 1, 'justifyContent': 'center'};
    backup = oscard[yankee];
    backup = romeon.bind(entity)(backup);
    backup = backup.spacing;
    backup = backup.PX_96;
    foxtra['paddingTop'] = backup;
    golfie['loading'] = foxtra;
    foxtra = {'position': 'absolute', 'bottom': 0, 'left': 0, 'right': 0, 'backgroundColor': null, 'height': 1};
    backup = oscard[yankee];
    backup = romeon.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BACKGROUND_MODIFIER_ACCENT;
    foxtra['backgroundColor'] = backup;
    golfie['headerBorder'] = foxtra;
    golfie = verify.bind(offset)(golfie);
    var _closure1_slot24 = golfie;
    tangon = oscard[tangon];
    verify = report.bind(entity)(tangon);
    golfie = verify.createStyles;
    tangon = {};
    offset = {};
    foxtra = oscard[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.spacing;
    foxtra = foxtra.PX_16;
    offset['paddingVertical'] = foxtra;
    yankee = oscard[yankee];
    yankee = romeon.bind(entity)(yankee);
    yankee = yankee.spacing;
    yankee = yankee.PX_12;
    offset['paddingHorizontal'] = yankee;
    tangon['searchBarContainer'] = offset;
    tangon = golfie.bind(verify)(tangon);
    var _closure1_slot25 = tangon;
    golfie = option.memo;
    tangon = function(argFoo) {
        _fun00057: for(var _fun00058_ip = 0; ; ) switch(_fun00058_ip) {
 0:
            entity = argFoo;
            echoed = entity.numUnreadMentions;
            entity = _closure1_slot24;
            tangon = undefined;
            verify = entity.bind(tangon)();
            golfie = _closure1_slot1;
            backup = _closure1_slot2;
            entity = 41;
            entity = backup[entity];
            entity = golfie.bind(tangon)(entity);
            yankee = entity.bind(tangon)();
            foxtra = _closure1_slot0;
            entity = 38;
            entity = backup[entity];
            zuuluu = foxtra.bind(tangon)(entity);
            michal = zuuluu.useIsNotificationsTabMerged;
            entity = {};
            report = 'ICYMIHeader';
            entity['location'] = report;
            entity = michal.bind(zuuluu)(entity);
            kiloes = entity.enabled;
            zuuluu = _closure1_slot19;
            entity = 42;
            entity = backup[entity];
            entity = foxtra.bind(tangon)(entity);
            michal = entity.SafeAreaPaddingView;
            entity = {};
            report = !yankee;
            entity['top'] = report;
            report = verify.header;
            entity['style'] = report;
            option = _closure1_slot18;
            report = 43;
            report = backup[report];
            golfie = golfie.bind(tangon)(report);
            report = {'absolute': true, 'wide': true, 'tall': true, 'mix': true};
            offset = {};
            romeon = 44;
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
            if(!yankee) { _fun00058_ip = 450; continue _fun00057 }
 264:
            backup = _closure1_slot18;
            output = _closure1_slot0;
            ctrled = _closure1_slot2;
            yankee = 40;
            yankee = ctrled[yankee];
            yankee = output.bind(tangon)(yankee);
            foxtra = yankee.PressableOpacity;
            yankee = {};
            sizing = verify.headerClose;
            yankee['style'] = sizing;
            sizing = 26;
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
            sizing = 45;
            sizing = ctrled[sizing];
            sizing = output.bind(tangon)(sizing);
            sizing = sizing.goBack;
            yankee['onPress'] = sizing;
            result = _closure1_slot18;
            sizing = 46;
            sizing = ctrled[sizing];
            sizing = output.bind(tangon)(sizing);
            output = sizing.XSmallIcon;
            sizing = {};
            source = _closure1_slot1;
            update = 19;
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
            foxtra = _closure1_slot32;
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
            if(kiloes) { _fun00058_ip = 524; continue _fun00057 }
 510:
            sizing = _closure1_slot31;
            kiloes = {};
            sizing = result.bind(tangon)(sizing, kiloes);
            _fun00058_ip = 541; continue _fun00057;
 524:
            output = _closure1_slot30;
            kiloes = {};
            kiloes['numUnreadMentions'] = echoed;
            sizing = result.bind(tangon)(output, kiloes);
 541:
            kiloes = new Array(2);
            kiloes[0] = sizing;
            result = _closure1_slot18;
            output = _closure1_slot29;
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
    var _closure1_slot26 = tangon;
    tangon = 90;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/tabs/gravity/ICYMI.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: ICYMITab
        _fun00059: for(var _fun00060_ip = 0; ; ) switch(_fun00060_ip) {
 0:
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot2;
            entity = 52;
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
            entity = 41;
            entity = oscard[entity];
            entity = report.bind(tangon)(entity);
            entity = entity.bind(tangon)();
            var _closure2_slot0 = entity;
            zuuluu = 51;
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
                _fun00061: for(var _fun00062_ip = 0; ; ) switch(_fun00062_ip) {
 0:
                    michal = _closure2_slot0;
                    entity = undefined;
                    if(!michal) { _fun00062_ip = 48; continue _fun00061 }
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
            if(entity) { _fun00060_ip = 209; continue _fun00059 }
 198:
            entity = _closure1_slot5;
            golfie = entity.Fragment;
            _fun00060_ip = 213; continue _fun00059;
 209:
            golfie = _closure1_slot6;
 213:
            zuuluu = _closure1_slot18;
            verify = _closure1_slot1;
            backup = _closure1_slot2;
            entity = 88;
            entity = backup[entity];
            michal = verify.bind(tangon)(entity);
            entity = {};
            oscard = _closure1_slot19;
            report = {};
            report['style'] = option;
            offset = _closure1_slot18;
            option = 43;
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
            verify = 89;
            verify = backup[verify];
            verify = offset.bind(tangon)(verify);
            offset = verify.ThemeContextProvider;
            verify = {};
            verify['gradient'] = foxtra;
            kiloes = _closure1_slot18;
            backup = _closure1_slot35;
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