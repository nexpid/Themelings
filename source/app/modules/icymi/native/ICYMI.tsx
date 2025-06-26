// app/modules/icymi/native/ICYMI.tsx
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
            if(!(michal !== zuuluu)) { _fun00002_ip = 108; continue _fun00001 }
 21:
            michal = 'channelSummary';
            if(!(michal !== zuuluu)) { _fun00002_ip = 90; continue _fun00001 }
 31:
            michal = 'generatedCandidate';
            if(!(michal !== zuuluu)) { _fun00002_ip = 73; continue _fun00001 }
 41:
            michal = 'forumThread';
            if(!(michal !== zuuluu)) { _fun00002_ip = 55; continue _fun00001 }
 51:
            michal = false;
            return michal;
 55:
            michal = entity.data;
            michal = michal.threadChannel;
            tangon = michal.id;
            _fun00002_ip = 123; continue _fun00001;
 73:
            michal = entity.data;
            michal = michal.item;
            tangon = michal.channel_id;
            _fun00002_ip = 123; continue _fun00001;
 90:
            michal = entity.data;
            michal = michal.topic;
            tangon = michal.channelId;
            _fun00002_ip = 123; continue _fun00001;
 108:
            entity = entity.data;
            entity = entity.message;
            tangon = entity.channel_id;
 123:
            zuuluu = _closure1_slot11;
            entity = zuuluu.getChannel;
            entity = entity.bind(zuuluu)(tangon);
            report = null;
            if(!(report != entity)) { _fun00002_ip = 155; continue _fun00001 }
 146:
            zuuluu = entity.nsfw;
            if(zuuluu) { _fun00002_ip = 260; continue _fun00001 }
 155:
            oscard = report == entity;
            tangon = undefined;
            if(oscard) { _fun00002_ip = 169; continue _fun00001 }
 164:
            tangon = entity.guild_id;
 169:
            oscard = report != tangon;
            tangon = null;
            if(!oscard) { _fun00002_ip = 197; continue _fun00001 }
 178:
            golfie = _closure1_slot12;
            oscard = golfie.getGuild;
            entity = entity.guild_id;
            tangon = oscard.bind(golfie)(entity);
 197:
            entity = report == tangon;
            oscard = undefined;
            if(entity) { _fun00002_ip = 212; continue _fun00001 }
 206:
            oscard = tangon.nsfwLevel;
 212:
            entity = _closure1_slot16;
            entity = entity.EXPLICIT;
            entity = oscard === entity;
            if(entity) { _fun00002_ip = 258; continue _fun00001 }
 229:
            report = report == tangon;
            zuuluu = undefined;
            if(report) { _fun00002_ip = 244; continue _fun00001 }
 238:
            zuuluu = tangon.nsfwLevel;
 244:
            michal = _closure1_slot16;
            michal = michal.AGE_RESTRICTED;
            entity = zuuluu === michal;
 258:
            return entity;
 260:
            entity = true;
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
            entity = 19;
            entity = offset[entity];
            entity = michal.bind(tangon)(entity);
            yankee = entity.bind(tangon)();
            golfie = _closure1_slot5;
            oscard = golfie.useCallback;
            zuuluu = function() {
                report = _closure1_slot0;
                tangon = _closure1_slot2;
                entity = 20;
                zuuluu = tangon[entity];
                entity = undefined;
                golfie = report.bind(entity)(zuuluu);
                oscard = golfie.trackItemInteraction;
                report = 'search_button';
                zuuluu = 'press_search_button';
                zuuluu = oscard.bind(golfie)(report, report, zuuluu);
                zuuluu = _closure1_slot1;
                michal = 21;
                michal = tangon[michal];
                michal = zuuluu.bind(entity)(michal);
                michal = michal.bind(entity)();
                return entity;
            };
            entity = new Array(0);
            verify = oscard.bind(golfie)(zuuluu, entity);
            zuuluu = _closure1_slot18;
            entity = 22;
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
            report = 23;
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
            offset = 24;
            offset = romeon[offset];
            offset = yankee.bind(tangon)(offset);
            report['icon'] = offset;
            report['onPress'] = verify;
            yankee = _closure1_slot0;
            option = 25;
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
        entity = 26;
        entity = verify[entity];
        zuuluu = undefined;
        entity = oscard.bind(zuuluu)(entity);
        michal = entity.IconButton;
        entity = {'accessibilityLabel': 'button', 'variant': 'tertiary', 'size': 'sm'};
        option = 'sm';
        golfie = _closure1_slot18;
        report = 27;
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
            entity = 20;
            report = michal[entity];
            entity = undefined;
            option = tangon.bind(entity)(report);
            golfie = option.trackItemInteraction;
            oscard = 'filters_button';
            report = 'press_info_button';
            report = golfie.bind(option)(oscard, oscard, report);
            report = _closure1_slot1;
            zuuluu = 28;
            zuuluu = michal[zuuluu];
            oscard = report.bind(entity)(zuuluu);
            report = oscard.openLazy;
            zuuluu = 30;
            zuuluu = michal[zuuluu];
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = 29;
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
            entity = 31;
            entity = result[entity];
            tangon = undefined;
            entity = michal.bind(tangon)(entity);
            entity = entity.bind(tangon)();
            backup = entity.value;
            offset = entity.showDot;
            romeon = _closure1_slot0;
            entity = 32;
            entity = result[entity];
            michal = romeon.bind(tangon)(entity);
            entity = michal.useNavigation;
            entity = entity.bind(michal)();
            var _closure2_slot0 = entity;
            entity = _closure1_slot24;
            sizing = entity.bind(tangon)();
            zuuluu = _closure1_slot18;
            entity = 26;
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
            verify = 33;
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
            yankee = 34;
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
                entity = 20;
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
        entity = 26;
        entity = verify[entity];
        zuuluu = undefined;
        entity = oscard.bind(zuuluu)(entity);
        michal = entity.IconButton;
        entity = {'accessibilityLabel': 'button', 'variant': 'tertiary', 'size': 'sm'};
        option = 'sm';
        golfie = _closure1_slot18;
        report = 35;
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
            entity = 20;
            michal = tangon[entity];
            entity = undefined;
            golfie = zuuluu.bind(entity)(michal);
            oscard = golfie.trackItemInteraction;
            report = 'info_button';
            michal = 'press_info_button';
            michal = oscard.bind(golfie)(report, report, michal);
            michal = 36;
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
            zuuluu = 37;
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
                    oscard = 38;
                    report = entity[oscard];
                    entity = undefined;
                    report = option.bind(entity)(report);
                    option = report.Text;
                    report = {'color': 'header-primary', 'variant': 'heading-lg/bold', 'maxFontSizeMultiplier': 1.75, 'accessibilityRole': 'header'};
                    offset = _closure2_slot0;
                    kiloes = _closure1_slot0;
                    yankee = _closure1_slot2;
                    foxtra = 25;
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
            michal = 39;
            michal = verify[michal];
            michal = zuuluu.bind(report)(michal);
            zuuluu = michal.PressableOpacity;
            michal = {};
            option = option.headerText;
            michal['style'] = option;
            golfie = function() { // Original name: onPress
                zuuluu = _closure1_slot0;
                tangon = _closure1_slot2;
                entity = 20;
                michal = tangon[entity];
                entity = undefined;
                golfie = zuuluu.bind(entity)(michal);
                oscard = golfie.trackItemInteraction;
                report = 'title_text';
                michal = 'press_info_title_text';
                michal = oscard.bind(golfie)(report, report, michal);
                michal = 36;
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
        entity = 46;
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
            oscard = argFoo;
            entity = oscard.data;
            option = entity.kind;
            entity = 'end';
            if(!(entity !== option)) { _fun00012_ip = 393; continue _fun00011 }
 24:
            michal = 'loading';
            if(!(michal !== option)) { _fun00012_ip = 391; continue _fun00011 }
 35:
            tangon = 'message';
            if(!(tangon !== option)) { _fun00012_ip = 294; continue _fun00011 }
 46:
            zuuluu = 'channelSummary';
            if(!(zuuluu !== option)) { _fun00012_ip = 288; continue _fun00011 }
 59:
            zuuluu = 'guildEvent';
            if(!(zuuluu !== option)) { _fun00012_ip = 280; continue _fun00011 }
 70:
            zuuluu = 'contentInventory';
            if(!(zuuluu !== option)) { _fun00012_ip = 209; continue _fun00011 }
 83:
            zuuluu = 'recommendedGuilds';
            if(!(zuuluu !== option)) { _fun00012_ip = 201; continue _fun00011 }
 93:
            zuuluu = 'forumThread';
            if(!(zuuluu !== option)) { _fun00012_ip = 193; continue _fun00011 }
 103:
            zuuluu = 'generatedCandidate';
            if(!(zuuluu !== option)) { _fun00012_ip = 185; continue _fun00011 }
 113:
            zuuluu = 'search';
            if(!(zuuluu !== option)) { _fun00012_ip = 183; continue _fun00011 }
 121:
            report = 'voice';
            if(!(report !== option)) { _fun00012_ip = 181; continue _fun00011 }
 129:
            golfie = 'icymiHeader';
            if(!(golfie !== option)) { _fun00012_ip = 173; continue _fun00011 }
 139:
            golfie = 'editCustomStatus';
            if(!(golfie !== option)) { _fun00012_ip = 165; continue _fun00011 }
 149:
            golfie = 'mentions';
            if(!(golfie !== option)) { _fun00012_ip = 163; continue _fun00011 }
 157:
            option = 'unknown';
            return option;
 163:
            return golfie;
 165:
            golfie = 'edit_custom_status';
            return golfie;
 173:
            golfie = 'icymi_header';
            return golfie;
 181:
            return report;
 183:
            return zuuluu;
 185:
            zuuluu = 'generated_candidate';
            return zuuluu;
 193:
            zuuluu = 'forum_thread';
            return zuuluu;
 201:
            zuuluu = 'recommended_guilds';
            return zuuluu;
 209:
            zuuluu = oscard.data;
            zuuluu = zuuluu.content;
            golfie = zuuluu.content_type;
            option = _closure1_slot0;
            report = _closure1_slot2;
            zuuluu = 48;
            report = report[zuuluu];
            zuuluu = undefined;
            zuuluu = option.bind(zuuluu)(report);
            zuuluu = zuuluu.ContentInventoryEntryType;
            report = zuuluu.CUSTOM_STATUS;
            zuuluu = 'hotwheels_gaming_activity';
            if(!(golfie === report)) { _fun00012_ip = 278; continue _fun00011 }
 272:
            zuuluu = 'hotwheels_custom_status';
 278:
            return zuuluu;
 280:
            zuuluu = 'guild_event';
            return zuuluu;
 288:
            zuuluu = 'summary';
            return zuuluu;
 294:
            option = oscard.channelType;
            golfie = _closure1_slot0;
            report = _closure1_slot2;
            zuuluu = 47;
            zuuluu = report[zuuluu];
            report = undefined;
            zuuluu = golfie.bind(report)(zuuluu);
            zuuluu = zuuluu.ChannelTypes;
            golfie = zuuluu.GUILD_ANNOUNCEMENT;
            zuuluu = 'announcement';
            if(!(option !== golfie)) { _fun00012_ip = 389; continue _fun00011 }
 345:
            oscard = oscard.data;
            golfie = oscard.messageContext;
            oscard = null;
            option = oscard == golfie;
            report = undefined;
            if(option) { _fun00012_ip = 373; continue _fun00011 }
 367:
            report = golfie.external_content_application_id;
 373:
            report = oscard != report;
            if(!report) { _fun00012_ip = 386; continue _fun00011 }
 380:
            tangon = 'game_message';
 386:
            zuuluu = tangon;
 389:
            return zuuluu;
 391:
            return michal;
 393:
            return entity;
        }
    };
    var _closure1_slot34 = entity;
    entity = function(argFoo) { // Original name: getViewableFeedItemsArray
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            verify = argFoo;
            zuuluu = _closure1_slot14;
            michal = zuuluu.getUnreadDisplayItems;
            kiloes = michal.bind(zuuluu)();
            tangon = new Array(0);
            zuuluu = 0;
            sizing = tangon;
            backup = 0;
            backup = arraySpread(sizing, kiloes, backup);
            oscard = _closure1_slot14;
            michal = oscard.getReadDisplayItems;
            kiloes = michal.bind(oscard)();
            sizing = tangon;
            michal = arraySpread(sizing, kiloes, backup);
            oscard = null;
            var _closure2_slot0 = oscard;
            michal = verify.length;
            report = 1;
            golfie = michal - report;
            michal = null;
            if(!(golfie >= zuuluu)) { _fun00014_ip = 150; continue _fun00013 }
 82:
            offset = verify[golfie];
            if(!(oscard != offset)) { _fun00014_ip = 141; continue _fun00013 }
 90:
            foxtra = _closure1_slot22;
            romeon = foxtra.has;
            yankee = offset.item;
            yankee = yankee.data;
            yankee = yankee.kind;
            yankee = romeon.bind(foxtra)(yankee);
            if(yankee) { _fun00014_ip = 141; continue _fun00013 }
 122:
            offset = offset.item;
            offset = offset.id;
            _closure2_slot0 = offset;
            michal = offset;
            _fun00014_ip = 150; continue _fun00013;
 141:
            golfie = golfie - 1;
            michal = null;
            if(golfie >= zuuluu) { _fun00014_ip = 82; continue _fun00013 }
 150:
            if(!(oscard != michal)) { _fun00014_ip = 199; continue _fun00013 }
 154:
            michal = tangon.findIndex;
            entity = function(argFoo) {
                entity = argFoo;
                michal = entity.id;
                entity = _closure2_slot0;
                entity = michal === entity;
                return entity;
            };
            entity = michal.bind(tangon)(entity);
            if(!(!(entity < zuuluu))) { _fun00014_ip = 193; continue _fun00013 }
 176:
            michal = tangon.slice;
            entity = entity + report;
            entity = michal.bind(tangon)(zuuluu, entity);
            _fun00014_ip = 197; continue _fun00013;
 193:
            entity = new Array(0);
 197:
            return entity;
 199:
            entity = new Array(0);
            return entity;
        }
    };
    var _closure1_slot35 = entity;
    entity = function() { // Original name: ICYMI
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = _closure1_slot24;
            tangon = undefined;
            papara = entity.bind(tangon)();
            var _closure2_slot0 = papara;
            sequen = _closure1_slot1;
            romeon = _closure1_slot2;
            entity = 49;
            entity = romeon[entity];
            entity = sequen.bind(tangon)(entity);
            entity = entity.bind(tangon)();
            report = entity.width;
            oscard = entity.height;
            foxtra = global;
            zuuluu = foxtra.Math;
            michal = zuuluu.min;
            entity = 480;
            variable37 = michal.bind(zuuluu)(report, entity);
            var _closure2_slot1 = variable37;
            entity = 50;
            entity = romeon[entity];
            entity = sequen.bind(tangon)(entity);
            entity = entity.bind(tangon)();
            zuuluu = entity.top;
            offset = _closure1_slot0;
            option = 37;
            entity = romeon[option];
            michal = offset.bind(tangon)(entity);
            entity = michal.useICYMISearchExperienceExperiment;
            update = 'ICYMI';
            entity = entity.bind(michal)(update);
            kiloes = entity.searchEnabled;
            var _closure2_slot2 = kiloes;
            entity = romeon[option];
            michal = offset.bind(tangon)(entity);
            entity = michal.useICYMINewConversationSummaryExperiment;
            entity = entity.bind(michal)(update);
            michal = entity.contentGenerationEnabled;
            var _closure2_slot3 = michal;
            entity = 51;
            report = romeon[entity];
            yankee = offset.bind(tangon)(report);
            verify = yankee.useStateFromStores;
            report = _closure1_slot8;
            golfie = new Array(1);
            golfie[0] = report;
            report = function() {
                entity = _closure1_slot8;
                entity = entity.useReducedMotion;
                return entity;
            };
            config = verify.bind(yankee)(golfie, report);
            var _closure2_slot4 = config;
            verify = _closure1_slot5;
            golfie = verify.useState;
            report = false;
            golfie = golfie.bind(verify)(report);
            report = _closure1_slot4;
            cntext = 2;
            report = report.bind(tangon)(golfie, cntext);
            status = 0;
            whisks = report[status];
            var _closure2_slot5 = whisks;
            result = 1;
            report = report[result];
            var _closure2_slot6 = report;
            yankee = _closure1_slot5;
            verify = yankee.useEffect;
            golfie = new Array(1);
            golfie[0] = whisks;
            report = function() {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    entity = _closure2_slot5;
                    if(!entity) { _fun00018_ip = 29; continue _fun00017 }
 10:
                    zuuluu = _closure1_slot14;
                    michal = zuuluu.hasOpenedEnoughTimes;
                    entity = michal.bind(zuuluu)();
 29:
                    if(!entity) { _fun00018_ip = 112; continue _fun00017 }
 32:
                    tangon = _closure1_slot1;
                    entity = _closure1_slot2;
                    zuuluu = 28;
                    zuuluu = entity[zuuluu];
                    oscard = undefined;
                    report = tangon.bind(oscard)(zuuluu);
                    tangon = report.openLazy;
                    zuuluu = _closure1_slot0;
                    michal = 30;
                    michal = entity[michal];
                    zuuluu = zuuluu.bind(oscard)(michal);
                    michal = 52;
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
            report = verify.bind(yankee)(report, golfie);
            report = romeon[option];
            verify = offset.bind(tangon)(report);
            golfie = verify.useIsNotificationsTabMerged;
            report = {};
            report['location'] = update;
            report = golfie.bind(verify)(report);
            backup = report.enabled;
            var _closure2_slot7 = backup;
            yankee = report.tabBadgeVariant;
            report = 53;
            golfie = romeon[report];
            verify = offset.bind(tangon)(golfie);
            golfie = verify.useIsFocused;
            vacuum = golfie.bind(verify)();
            var _closure2_slot8 = vacuum;
            golfie = 54;
            golfie = romeon[golfie];
            verify = sequen.bind(tangon)(golfie);
            golfie = {};
            golfie['isFocused'] = vacuum;
            golfie['mergedNotificationsEnabled'] = backup;
            golfie = verify.bind(tangon)(golfie);
            verify = golfie.displayUnreadMentionMessages;
            var _closure2_slot9 = verify;
            sizing = golfie.newUnreadMentionMessages;
            echoed = _closure1_slot5;
            output = echoed.useLayoutEffect;
            golfie = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 55;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.trackAppUIViewed;
                michal = michal.bind(zuuluu)();
                return entity;
            };
            golfie = output.bind(echoed)(golfie);
            golfie = 56;
            golfie = romeon[golfie];
            echoed = offset.bind(tangon)(golfie);
            output = echoed.useGetDismissibleContent;
            golfie = 57;
            golfie = romeon[golfie];
            golfie = offset.bind(tangon)(golfie);
            golfie = golfie.DismissibleContent;
            source = golfie.ICYMI_ALPHA_UPSELL;
            golfie = new Array(1);
            golfie[0] = source;
            output = output.bind(echoed)(golfie);
            golfie = _closure1_slot4;
            golfie = golfie.bind(tangon)(output, cntext);
            record = golfie[status];
            var _closure2_slot10 = record;
            source = golfie[result];
            var _closure2_slot11 = source;
            golfie = romeon[option];
            echoed = offset.bind(tangon)(golfie);
            output = echoed.useICYMIStatusWithMediaEnabled;
            golfie = {};
            golfie['location'] = update;
            variable39 = output.bind(echoed)(golfie);
            var _closure2_slot12 = variable39;
            golfie = romeon[entity];
            update = offset.bind(tangon)(golfie);
            echoed = update.useStateFromStores;
            golfie = _closure1_slot12;
            output = new Array(1);
            output[0] = golfie;
            golfie = function() {
                michal = _closure1_slot12;
                entity = michal.getGuildCount;
                entity = entity.bind(michal)();
                return entity;
            };
            golfie = echoed.bind(update)(output, golfie);
            var _closure2_slot13 = golfie;
            update = _closure1_slot5;
            echoed = update.useEffect;
            output = new Array(3);
            output[0] = record;
            output[1] = source;
            output[2] = golfie;
            golfie = function() {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    zuuluu = _closure2_slot10;
                    entity = null;
                    if(!(entity != zuuluu)) { _fun00020_ip = 86; continue _fun00019 }
 13:
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    zuuluu = 36;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    oscard = report.bind(zuuluu)(tangon);
                    report = oscard.pushICYMIInfoModal;
                    tangon = {};
                    option = _closure2_slot13;
                    golfie = 3;
                    golfie = option <= golfie;
                    tangon['extendedOnboarding'] = golfie;
                    tangon = report.bind(oscard)(tangon);
                    michal = _closure2_slot11;
                    entity = _closure1_slot17;
                    entity = entity.USER_DISMISS;
                    entity = michal.bind(zuuluu)(entity);
 86:
                    entity = undefined;
                    return entity;
                }
            };
            golfie = echoed.bind(update)(golfie, output);
            golfie = 58;
            golfie = romeon[golfie];
            golfie = sequen.bind(tangon)(golfie);
            golfie = golfie.bind(tangon)();
            sierra = golfie.unreadItems;
            var _closure2_slot14 = sierra;
            source = golfie.readItems;
            var _closure2_slot15 = source;
            record = golfie.allUnreadItemsHydrated;
            var _closure2_slot16 = record;
            golfie = romeon[entity];
            target = offset.bind(tangon)(golfie);
            update = target.useStateFromStores;
            golfie = _closure1_slot14;
            echoed = new Array(1);
            echoed[0] = golfie;
            output = function() {
                michal = _closure1_slot14;
                entity = michal.getVersion;
                entity = entity.bind(michal)();
                return entity;
            };
            golfie = new Array(0);
            output = update.bind(target)(echoed, output, golfie);
            var _closure2_slot17 = output;
            golfie = romeon[entity];
            target = offset.bind(tangon)(golfie);
            update = target.useStateFromStores;
            golfie = _closure1_slot14;
            echoed = new Array(1);
            echoed[0] = golfie;
            golfie = function() {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    michal = _closure1_slot14;
                    entity = michal.isFirstPageHydrated;
                    entity = entity.bind(michal)();
                    if(!entity) { _fun00022_ip = 35; continue _fun00021 }
 22:
                    zuuluu = _closure2_slot17;
                    michal = 0;
                    entity = zuuluu > michal;
 35:
                    entity = !entity;
                    return entity;
                }
            };
            echoed = update.bind(target)(echoed, golfie);
            var _closure2_slot18 = echoed;
            limora = _closure1_slot5;
            target = limora.useEffect;
            update = new Array(1);
            update[0] = output;
            golfie = function() {
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    zuuluu = _closure1_slot14;
                    michal = zuuluu.getLoadId;
                    report = michal.bind(zuuluu)();
                    michal = null;
                    if(!(michal != report)) { _fun00024_ip = 84; continue _fun00023 }
 23:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 16;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = tangon.track;
                    entity = _closure1_slot15;
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
            golfie = target.bind(limora)(golfie, update);
            golfie = romeon[entity];
            equals = offset.bind(tangon)(golfie);
            limora = equals.useStateFromStores;
            golfie = _closure1_slot14;
            target = new Array(1);
            target[0] = golfie;
            update = function() {
                michal = _closure1_slot14;
                entity = michal.isRefreshing;
                entity = entity.bind(michal)();
                return entity;
            };
            golfie = new Array(0);
            target = limora.bind(equals)(target, update, golfie);
            var _closure2_slot19 = target;
            limora = _closure1_slot5;
            update = limora.useState;
            golfie = new Array(0);
            update = update.bind(limora)(golfie);
            golfie = _closure1_slot4;
            update = golfie.bind(tangon)(update, cntext);
            golfie = update[status];
            var _closure2_slot20 = golfie;
            update = update[result];
            var _closure2_slot21 = update;
            update = romeon[entity];
            equals = offset.bind(tangon)(update);
            limora = equals.useStateFromStoresObject;
            update = _closure1_slot14;
            cntext = new Array(1);
            cntext[0] = update;
            update = function() {
                entity = {};
                tangon = _closure1_slot14;
                zuuluu = tangon.getLoadId;
                zuuluu = zuuluu.bind(tangon)();
                entity['loadId'] = zuuluu;
                zuuluu = _closure1_slot14;
                michal = zuuluu.lastScrollEvent;
                michal = michal.bind(zuuluu)();
                entity['lastScrollEventTimestamp'] = michal;
                return entity;
            };
            cntext = limora.bind(equals)(cntext, update);
            update = cntext.loadId;
            var _closure2_slot22 = update;
            variable40 = cntext.lastScrollEventTimestamp;
            var _closure2_slot23 = variable40;
            limora = golfie.filter;
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
            equals = limora.bind(golfie)(cntext);
            limora = equals.map;
            cntext = function(argFoo) {
                entity = argFoo;
                entity = entity.item;
                entity = entity.id;
                return entity;
            };
            limora = limora.bind(equals)(cntext);
            cntext = limora.pop;
            quebec = cntext.bind(limora)();
            var _closure2_slot24 = quebec;
            cntext = 59;
            cntext = romeon[cntext];
            cntext = sequen.bind(tangon)(cntext);
            variable38 = cntext.bind(tangon)(quebec);
            var _closure2_slot25 = variable38;
            equals = _closure1_slot5;
            limora = equals.useEffect;
            cntext = new Array(6);
            cntext[0] = target;
            cntext[1] = variable40;
            cntext[2] = variable38;
            cntext[3] = quebec;
            cntext[4] = update;
            cntext[5] = echoed;
            update = function() {
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    entity = _closure2_slot19;
                    if(entity) { _fun00026_ip = 186; continue _fun00025 }
 13:
                    entity = _closure2_slot18;
                    if(entity) { _fun00026_ip = 186; continue _fun00025 }
 23:
                    entity = _closure2_slot25;
                    michal = null;
                    if(!(michal != entity)) { _fun00026_ip = 186; continue _fun00025 }
 36:
                    entity = _closure2_slot24;
                    if(!(michal != entity)) { _fun00026_ip = 186; continue _fun00025 }
 47:
                    michal = _closure2_slot24;
                    entity = _closure2_slot25;
                    if(!(michal !== entity)) { _fun00026_ip = 186; continue _fun00025 }
 62:
                    entity = global;
                    michal = entity.Date;
                    entity = michal.now;
                    option = entity.bind(michal)();
                    entity = _closure2_slot23;
                    zuuluu = option - entity;
                    michal = _closure1_slot21;
                    if(!(zuuluu > michal)) { _fun00026_ip = 186; continue _fun00025 }
 98:
                    tangon = _closure1_slot1;
                    oscard = _closure1_slot2;
                    michal = 60;
                    michal = oscard[michal];
                    zuuluu = undefined;
                    golfie = tangon.bind(zuuluu)(michal);
                    michal = golfie.gravityScrollEvent;
                    michal = michal.bind(golfie)(option);
                    michal = 16;
                    michal = oscard[michal];
                    tangon = tangon.bind(zuuluu)(michal);
                    zuuluu = tangon.track;
                    entity = _closure1_slot15;
                    michal = entity.HOME_FIRST_SCROLL_STARTED;
                    entity = {};
                    oscard = 'gravity';
                    entity['home_session_id'] = oscard;
                    report = _closure2_slot22;
                    entity['load_id'] = report;
                    entity = zuuluu.bind(tangon)(michal, entity);
 186:
                    entity = undefined;
                    return entity;
                }
            };
            update = limora.bind(equals)(update, cntext);
            equals = _closure1_slot5;
            limora = equals.useCallback;
            cntext = new Array(1);
            cntext[0] = output;
            update = function(argFoo) {
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
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
                    if(!michal) { _fun00028_ip = 56; continue _fun00027 }
 42:
                    tangon = _closure2_slot6;
                    michal = true;
                    michal = tangon.bind(entity)(michal);
 56:
                    michal = oscard.length;
                    option = 0;
                    if(!(option !== michal)) { _fun00028_ip = 325; continue _fun00027 }
 70:
                    tangon = _closure2_slot21;
                    tangon = tangon.bind(entity)(oscard);
                    offset = new Array(0);
                    _closure3_slot1 = offset;
                    report = oscard.forEach;
                    tangon = function() {
                        _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                            zuuluu = _closure3_slot0;
                            michal = 0;
                            michal = zuuluu[michal];
                            tangon = michal.item;
                            michal = tangon.data;
                            zuuluu = michal.kind;
                            michal = 'channelSummary';
                            if(!(michal === zuuluu)) { _fun00030_ip = 93; continue _fun00029 }
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
                    report = _closure1_slot35;
                    golfie = report.bind(entity)(oscard);
                    report = global;
                    verify = report.Date;
                    report = verify.now;
                    report = report.bind(verify)();
                    yankee = golfie.length;
                    verify = 1;
                    romeon = yankee - verify;
                    yankee = 61;
                    verify = null;
                    if(!(romeon >= option)) { _fun00028_ip = 242; continue _fun00027 }
 157:
                    result = golfie[romeon];
                    foxtra = report;
                    if(!(verify != result)) { _fun00028_ip = 232; continue _fun00027 }
 168:
                    sizing = offset.push;
                    kiloes = {};
                    backup = result.id;
                    kiloes['id'] = backup;
                    output = _closure1_slot0;
                    backup = _closure1_slot2;
                    backup = backup[yankee];
                    output = output.bind(entity)(backup);
                    backup = output.typeToString;
                    backup = backup.bind(output)(result);
                    kiloes['type'] = backup;
                    output = parseFloat(report);
                    foxtra = output + 1;
                    kiloes['timestamp'] = output;
                    kiloes = sizing.bind(offset)(kiloes);
 232:
                    romeon = romeon - 1;
                    report = foxtra;
                    if(romeon >= option) { _fun00028_ip = 157; continue _fun00027 }
 242:
                    report = offset.length;
                    if(!(report > option)) { _fun00028_ip = 285; continue _fun00027 }
 251:
                    option = _closure1_slot1;
                    verify = _closure1_slot2;
                    report = 60;
                    report = verify[report];
                    verify = option.bind(entity)(report);
                    option = verify.ackGravityItems;
                    report = true;
                    report = option.bind(verify)(offset, report);
 285:
                    report = _closure1_slot23;
                    tangon = golfie.map;
                    zuuluu = function(argFoo) {
                        tangon = argFoo;
                        entity = {};
                        michal = tangon.id;
                        entity['id'] = michal;
                        report = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        michal = 61;
                        zuuluu = zuuluu[michal];
                        michal = undefined;
                        zuuluu = report.bind(michal)(zuuluu);
                        michal = zuuluu.typeToString;
                        michal = michal.bind(zuuluu)(tangon);
                        entity['type'] = michal;
                        return entity;
                    };
                    source = tangon.bind(golfie)(zuuluu);
                    update = _closure2_slot17;
                    echoed = 'batch';
                    vacuum = undefined;
                    ctrled = oscard;
                    michal = vacuum[report](ctrled, source, update, echoed, result);
 325:
                    return entity;
                }
            };
            quebec = limora.bind(equals)(update, cntext);
            var _closure2_slot26 = quebec;
            equals = _closure1_slot5;
            limora = equals.useCallback;
            cntext = new Array(1);
            cntext[0] = output;
            update = function(argFoo) {
                _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                    entity = argFoo;
                    oscard = entity.viewableItems;
                    michal = oscard.length;
                    entity = 0;
                    if(!(entity !== michal)) { _fun00032_ip = 77; continue _fun00031 }
 20:
                    michal = _closure1_slot35;
                    report = undefined;
                    zuuluu = michal.bind(report)(oscard);
                    tangon = _closure1_slot23;
                    michal = zuuluu.map;
                    entity = function(argFoo) {
                        tangon = argFoo;
                        entity = {};
                        michal = tangon.id;
                        entity['id'] = michal;
                        report = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        michal = 61;
                        zuuluu = zuuluu[michal];
                        michal = undefined;
                        zuuluu = report.bind(michal)(zuuluu);
                        michal = zuuluu.typeToString;
                        michal = michal.bind(zuuluu)(tangon);
                        entity['type'] = michal;
                        return entity;
                    };
                    verify = michal.bind(zuuluu)(entity);
                    option = _closure2_slot17;
                    golfie = 'long';
                    yankee = undefined;
                    offset = oscard;
                    entity = yankee[tangon](offset, verify, option, golfie, oscard);
 77:
                    entity = undefined;
                    return entity;
                }
            };
            update = limora.bind(equals)(update, cntext);
            var _closure2_slot27 = update;
            equals = _closure1_slot5;
            limora = equals.useMemo;
            cntext = new Array(2);
            cntext[0] = quebec;
            cntext[1] = update;
            update = function() {
                michal = {};
                entity = {'waitForInteraction': false, 'viewAreaCoveragePercentThreshold': 100, 'minimumViewTime': 50};
                michal['viewabilityConfig'] = entity;
                entity = _closure2_slot26;
                michal['onViewableItemsChanged'] = entity;
                entity = new Array(2);
                entity[0] = michal;
                michal = {};
                tangon = {'waitForInteraction': false, 'viewAreaCoveragePercentThreshold': 50, 'minimumViewTime': 1000};
                michal['viewabilityConfig'] = tangon;
                zuuluu = _closure2_slot27;
                michal['onViewableItemsChanged'] = zuuluu;
                entity[1] = michal;
                return entity;
            };
            update = limora.bind(equals)(update, cntext);
            equals = _closure1_slot5;
            limora = equals.useRef;
            cntext = null;
            cntext = limora.bind(equals)(cntext);
            var _closure2_slot28 = cntext;
            quebec = _closure1_slot5;
            equals = quebec.useRef;
            limora = {};
            variable38 = function() { // Original name: scrollToTop
                _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                    entity = _closure2_slot28;
                    zuuluu = entity.current;
                    entity = null;
                    if(!(entity != zuuluu)) { _fun00034_ip = 50; continue _fun00033 }
 18:
                    michal = zuuluu.scrollToOffset;
                    entity = {};
                    report = 0;
                    entity['offset'] = report;
                    tangon = _closure2_slot4;
                    tangon = !tangon;
                    entity['animated'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
 50:
                    entity = undefined;
                    return entity;
                }
            };
            limora['scrollToTop'] = variable38;
            equals = equals.bind(quebec)(limora);
            var _closure2_slot29 = equals;
            report = romeon[report];
            limora = offset.bind(tangon)(report);
            report = limora.useScrollToTop;
            report = report.bind(limora)(equals);
            report = romeon[entity];
            quebec = offset.bind(tangon)(report);
            equals = quebec.useStateFromStores;
            report = _closure1_slot13;
            limora = new Array(1);
            limora[0] = report;
            report = function() {
                michal = _closure1_slot13;
                entity = michal.getDoubleTapBehavior;
                entity = entity.bind(michal)();
                return entity;
            };
            variable40 = equals.bind(quebec)(limora, report);
            var _closure2_slot30 = variable40;
            report = 32;
            limora = romeon[report];
            equals = offset.bind(tangon)(limora);
            limora = equals.useNavigation;
            limora = limora.bind(equals)();
            var _closure2_slot31 = limora;
            variable38 = _closure1_slot5;
            quebec = variable38.useEffect;
            equals = new Array(4);
            equals[0] = variable40;
            equals[1] = backup;
            equals[2] = limora;
            equals[3] = config;
            limora = function() {
                _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                    michal = _closure2_slot7;
                    if(!michal) { _fun00036_ip = 57; continue _fun00035 }
 12:
                    report = _closure2_slot30;
                    option = _closure1_slot0;
                    tangon = _closure1_slot2;
                    golfie = 61;
                    tangon = tangon[golfie];
                    oscard = undefined;
                    tangon = option.bind(oscard)(tangon);
                    tangon = tangon.GravityICYMIDoubleTapBehavior;
                    tangon = tangon.DEFAULT;
                    if(!(report === tangon)) { _fun00036_ip = 83; continue _fun00035 }
 57:
                    report = _closure2_slot29;
                    tangon = {};
                    option = function() { // Original name: scrollToTop
                        _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                            entity = _closure2_slot28;
                            zuuluu = entity.current;
                            entity = null;
                            if(!(entity != zuuluu)) { _fun00038_ip = 50; continue _fun00037 }
 18:
                            michal = zuuluu.scrollToOffset;
                            entity = {};
                            report = 0;
                            entity['offset'] = report;
                            tangon = _closure2_slot4;
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
                    _fun00036_ip = 170; continue _fun00035;
 83:
                    tangon = _closure2_slot30;
                    report = _closure1_slot0;
                    michal = _closure1_slot2;
                    michal = michal[golfie];
                    michal = report.bind(oscard)(michal);
                    michal = michal.GravityICYMIDoubleTapBehavior;
                    michal = michal.NOTIFICATIONS;
                    if(!(tangon !== michal)) { _fun00036_ip = 146; continue _fun00035 }
 120:
                    tangon = _closure2_slot29;
                    michal = {};
                    report = function() { // Original name: scrollToTop
                        report = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 62;
                        tangon = michal[entity];
                        entity = undefined;
                        golfie = report.bind(entity)(tangon);
                        oscard = golfie.pushLazy;
                        tangon = _closure1_slot0;
                        zuuluu = 30;
                        zuuluu = michal[zuuluu];
                        tangon = tangon.bind(entity)(zuuluu);
                        zuuluu = 63;
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
                    _fun00036_ip = 170; continue _fun00035;
 146:
                    michal = _closure2_slot29;
                    entity = {};
                    zuuluu = function() { // Original name: scrollToTop
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 20;
                        michal = michal[entity];
                        entity = undefined;
                        report = zuuluu.bind(entity)(michal);
                        tangon = report.trackItemInteraction;
                        zuuluu = 'icymi_button';
                        michal = 'press_notification_button';
                        michal = tangon.bind(report)(zuuluu, zuuluu, michal);
                        tangon = _closure2_slot31;
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
            limora = quebec.bind(variable38)(limora, equals);
            quebec = _closure1_slot5;
            equals = quebec.useCallback;
            limora = new Array(2);
            limora[0] = cntext;
            limora[1] = config;
            config = function() {
                _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                    entity = _closure2_slot28;
                    zuuluu = entity.current;
                    entity = null;
                    if(!(entity != zuuluu)) { _fun00040_ip = 50; continue _fun00039 }
 18:
                    michal = zuuluu.scrollToOffset;
                    entity = {};
                    report = 0;
                    entity['offset'] = report;
                    tangon = _closure2_slot4;
                    tangon = !tangon;
                    entity['animated'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
 50:
                    entity = undefined;
                    return entity;
                }
            };
            config = equals.bind(quebec)(config, limora);
            var _closure2_slot32 = config;
            equals = _closure1_slot5;
            limora = equals.useEffect;
            config = new Array(1);
            config[0] = vacuum;
            vacuum = function() {
                _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                    entity = _closure2_slot8;
                    if(!entity) { _fun00042_ip = 72; continue _fun00041 }
 10:
                    report = _closure1_slot1;
                    oscard = _closure1_slot2;
                    entity = 64;
                    entity = oscard[entity];
                    zuuluu = undefined;
                    golfie = report.bind(zuuluu)(entity);
                    entity = golfie.setGravitySelectedSummary;
                    tangon = null;
                    entity = entity.bind(golfie)(tangon, tangon);
                    entity = 60;
                    entity = oscard[entity];
                    zuuluu = report.bind(zuuluu)(entity);
                    entity = zuuluu.setGravitySelectedChannel;
                    entity = entity.bind(zuuluu)(tangon);
 72:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    entity = 60;
                    zuuluu = zuuluu[entity];
                    entity = undefined;
                    tangon = tangon.bind(entity)(zuuluu);
                    zuuluu = tangon.setTabFocused;
                    michal = _closure2_slot8;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                }
            };
            vacuum = limora.bind(equals)(vacuum, config);
            equals = _closure1_slot5;
            limora = equals.useEffect;
            config = function() {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 60;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.openICYMITab;
                michal = michal.bind(zuuluu)();
                return entity;
            };
            vacuum = new Array(0);
            vacuum = limora.bind(equals)(config, vacuum);
            vacuum = 65;
            vacuum = romeon[vacuum];
            vacuum = sequen.bind(tangon)(vacuum);
            vacuum = vacuum.bind(tangon)();
            quebec = vacuum.showDot;
            var _closure2_slot33 = quebec;
            vacuum = romeon[entity];
            variable38 = offset.bind(tangon)(vacuum);
            equals = variable38.useStateFromStores;
            vacuum = _closure1_slot14;
            limora = new Array(1);
            limora[0] = vacuum;
            config = function() {
                michal = _closure1_slot14;
                entity = michal.notificationItem;
                entity = entity.bind(michal)();
                return entity;
            };
            vacuum = new Array(0);
            variable40 = equals.bind(variable38)(limora, config, vacuum);
            var _closure2_slot34 = variable40;
            equals = _closure1_slot5;
            limora = equals.useCallback;
            config = _closure1_slot3;
            vacuum = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(michal) { _fun00044_ip = 277; continue _fun00043 }
 10:
                        zuuluu = _closure1_slot1;
                        tangon = _closure1_slot2;
                        michal = 16;
                        michal = tangon[michal];
                        report = undefined;
                        golfie = zuuluu.bind(report)(michal);
                        tangon = golfie.track;
                        michal = _closure1_slot15;
                        zuuluu = michal.FEED_SHOWN;
                        michal = {};
                        verify = _closure1_slot14;
                        option = verify.getLoadId;
                        option = option.bind(verify)();
                        michal['load_id'] = option;
                        option = 'gravity_refresh';
                        michal['home_session_id'] = option;
                        verify = _closure2_slot33;
                        option = 'NoDotShown';
                        if(!verify) { _fun00044_ip = 104; continue _fun00043 }
 98:
                        option = 'DotShown';
 104:
                        michal['variant'] = option;
                        michal = tangon.bind(golfie)(zuuluu, michal);
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        option = 60;
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
                        if(zuuluu) { _fun00044_ip = 274; continue _fun00043 }
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
                        if(tangon) { _fun00044_ip = 271; continue _fun00043 }
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
                        if(golfie) { _fun00044_ip = 268; continue _fun00043 }
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
            config = config.bind(tangon)(vacuum);
            vacuum = new Array(1);
            vacuum[0] = quebec;
            limora = limora.bind(equals)(config, vacuum);
            var _closure2_slot35 = limora;
            vacuum = 66;
            vacuum = romeon[vacuum];
            config = offset.bind(tangon)(vacuum);
            vacuum = config.useEligibleActiveVoiceChannelId;
            variable38 = vacuum.bind(config)();
            var _closure2_slot36 = variable38;
            vacuum = 67;
            vacuum = romeon[vacuum];
            vacuum = sequen.bind(tangon)(vacuum);
            vacuum = vacuum.bind(tangon)();
            equals = vacuum.activeConvos;
            var _closure2_slot37 = equals;
            quebec = vacuum.loading;
            var _closure2_slot38 = quebec;
            config = _closure1_slot5;
            sequen = config.useMemo;
            vacuum = new Array(12);
            vacuum[0] = echoed;
            vacuum[1] = variable40;
            vacuum[2] = backup;
            vacuum[3] = verify;
            vacuum[4] = variable39;
            vacuum[5] = variable38;
            vacuum[6] = quebec;
            vacuum[7] = equals;
            vacuum[8] = sierra;
            vacuum[9] = record;
            vacuum[10] = source;
            vacuum[11] = kiloes;
            source = function() {
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
                    tangon = _closure2_slot18;
                    if(!tangon) { _fun00046_ip = 75; continue _fun00045 }
 65:
                    oscard = _closure2_slot34;
                    report = null;
                    tangon = report != oscard;
 75:
                    if(!tangon) { _fun00046_ip = 128; continue _fun00045 }
 78:
                    report = _closure2_slot34;
                    oscard = report.type;
                    option = _closure1_slot0;
                    golfie = _closure1_slot2;
                    report = 61;
                    golfie = golfie[report];
                    report = undefined;
                    report = option.bind(report)(golfie);
                    report = report.ICYMIItemTypes;
                    report = report.CUSTOM_STATUS;
                    tangon = oscard === report;
 128:
                    if(!tangon) { _fun00046_ip = 261; continue _fun00045 }
 134:
                    report = michal.push;
                    tangon = {};
                    oscard = _closure2_slot34;
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
                    option = 46;
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
                    tangon = _closure2_slot18;
                    if(tangon) { _fun00046_ip = 656; continue _fun00045 }
 271:
                    tangon = _closure2_slot7;
                    if(!tangon) { _fun00046_ip = 293; continue _fun00045 }
 278:
                    report = _closure2_slot9;
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
                    golfie = _closure2_slot9;
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
                    tangon = _closure2_slot12;
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
                    oscard = _closure2_slot14;
                    report = oscard.forEach;
                    tangon = function(argFoo) {
                        _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
                            tangon = argFoo;
                            michal = _closure1_slot27;
                            entity = undefined;
                            michal = michal.bind(entity)(tangon);
                            if(michal) { _fun00048_ip = 37; continue _fun00047 }
 20:
                            zuuluu = _closure3_slot0;
                            michal = zuuluu.push;
                            michal = michal.bind(zuuluu)(tangon);
 37:
                            return entity;
                        }
                    };
                    tangon = report.bind(oscard)(tangon);
                    tangon = _closure2_slot16;
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
                    tangon = _closure2_slot15;
                    report = tangon.length;
                    tangon = 0;
                    if(!(report > tangon)) { _fun00046_ip = 694; continue _fun00045 }
 633:
                    tangon = _closure2_slot15;
                    zuuluu = tangon.forEach;
                    entity = function(argFoo) {
                        _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
                            tangon = argFoo;
                            michal = _closure1_slot27;
                            entity = undefined;
                            michal = michal.bind(entity)(tangon);
                            if(michal) { _fun00050_ip = 37; continue _fun00049 }
 20:
                            zuuluu = _closure3_slot0;
                            michal = zuuluu.push;
                            michal = michal.bind(zuuluu)(tangon);
 37:
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
            source = sequen.bind(config)(source, vacuum);
            config = source.data;
            var _closure2_slot39 = config;
            source = source.stickyHeaderIndices;
            zuuluu = oscard - zuuluu;
            oscard = zuuluu - report;
            zuuluu = 68;
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
            zuuluu = new Array(7);
            zuuluu[0] = kiloes;
            zuuluu[1] = backup;
            backup = verify.length;
            zuuluu[2] = backup;
            backup = papara.headerBorder;
            zuuluu[3] = backup;
            zuuluu[4] = golfie;
            zuuluu[5] = whisks;
            zuuluu[6] = michal;
            michal = function(argFoo) {
                _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
                    entity = argFoo;
                    golfie = entity.item;
                    var _closure3_slot0 = golfie;
                    entity = golfie.data;
                    michal = entity.kind;
                    entity = 'generatedCandidate';
                    if(!(entity !== michal)) { _fun00052_ip = 1450; continue _fun00051 }
 37:
                    entity = golfie.data;
                    michal = entity.kind;
                    entity = 'search';
                    if(!(entity !== michal)) { _fun00052_ip = 1326; continue _fun00051 }
 58:
                    entity = golfie.data;
                    michal = entity.kind;
                    entity = 'channelSummary';
                    if(!(entity !== michal)) { _fun00052_ip = 1271; continue _fun00051 }
 81:
                    entity = golfie.data;
                    michal = entity.kind;
                    entity = 'message';
                    if(!(entity !== michal)) { _fun00052_ip = 898; continue _fun00051 }
 102:
                    entity = golfie.data;
                    michal = entity.kind;
                    entity = 'contentInventory';
                    if(!(entity !== michal)) { _fun00052_ip = 807; continue _fun00051 }
 125:
                    entity = golfie.data;
                    michal = entity.kind;
                    entity = 'voice';
                    if(!(entity !== michal)) { _fun00052_ip = 759; continue _fun00051 }
 146:
                    entity = golfie.data;
                    michal = entity.kind;
                    entity = 'loading';
                    if(!(entity !== michal)) { _fun00052_ip = 714; continue _fun00051 }
 167:
                    entity = golfie.data;
                    michal = entity.kind;
                    entity = 'end';
                    if(!(entity !== michal)) { _fun00052_ip = 663; continue _fun00051 }
 188:
                    entity = golfie.data;
                    michal = entity.kind;
                    entity = 'guildEvent';
                    if(!(entity !== michal)) { _fun00052_ip = 608; continue _fun00051 }
 209:
                    entity = golfie.data;
                    michal = entity.kind;
                    entity = 'recommendedGuilds';
                    if(!(entity !== michal)) { _fun00052_ip = 563; continue _fun00051 }
 232:
                    entity = golfie.data;
                    michal = entity.kind;
                    entity = 'mentions';
                    if(!(entity !== michal)) { _fun00052_ip = 508; continue _fun00051 }
 253:
                    entity = golfie.data;
                    michal = entity.kind;
                    entity = 'icymiHeader';
                    if(!(entity !== michal)) { _fun00052_ip = 469; continue _fun00051 }
 276:
                    entity = golfie.data;
                    michal = entity.kind;
                    entity = 'editCustomStatus';
                    if(!(entity !== michal)) { _fun00052_ip = 430; continue _fun00051 }
 299:
                    entity = golfie.data;
                    zuuluu = entity.kind;
                    verify = null;
                    michal = 'forumThread';
                    entity = null;
                    if(!(michal === zuuluu)) { _fun00052_ip = 428; continue _fun00051 }
 323:
                    report = _closure1_slot18;
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot2;
                    michal = 82;
                    michal = tangon[michal];
                    tangon = undefined;
                    michal = zuuluu.bind(tangon)(michal);
                    zuuluu = michal.ICYMIForumThreadRow;
                    michal = {};
                    oscard = golfie.data;
                    oscard = oscard.message;
                    michal['message'] = oscard;
                    oscard = golfie.data;
                    oscard = oscard.threadChannel;
                    michal['channel'] = oscard;
                    yankee = _closure2_slot20;
                    offset = yankee.find;
                    oscard = function(argFoo) {
                        entity = argFoo;
                        entity = entity.item;
                        michal = entity.id;
                        entity = _closure3_slot0;
                        entity = entity.id;
                        entity = michal === entity;
                        return entity;
                    };
                    oscard = offset.bind(yankee)(oscard);
                    oscard = verify != oscard;
                    michal['visible'] = oscard;
                    entity = report.bind(tangon)(zuuluu, michal);
 428:
                    _fun00052_ip = 467; continue _fun00051;
 430:
                    report = _closure1_slot18;
                    zuuluu = _closure1_slot1;
                    tangon = _closure1_slot2;
                    michal = 81;
                    michal = tangon[michal];
                    tangon = undefined;
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = {};
                    entity = report.bind(tangon)(zuuluu, michal);
 467:
                    _fun00052_ip = 506; continue _fun00051;
 469:
                    report = _closure1_slot18;
                    zuuluu = _closure1_slot1;
                    tangon = _closure1_slot2;
                    michal = 80;
                    michal = tangon[michal];
                    tangon = undefined;
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = {};
                    entity = report.bind(tangon)(zuuluu, michal);
 506:
                    _fun00052_ip = 561; continue _fun00051;
 508:
                    report = _closure1_slot18;
                    zuuluu = _closure1_slot1;
                    tangon = _closure1_slot2;
                    michal = 79;
                    michal = tangon[michal];
                    tangon = undefined;
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = {};
                    oscard = golfie.data;
                    oscard = oscard.messages;
                    michal['messages'] = oscard;
                    entity = report.bind(tangon)(zuuluu, michal);
 561:
                    _fun00052_ip = 606; continue _fun00051;
 563:
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
 606:
                    _fun00052_ip = 661; continue _fun00051;
 608:
                    report = _closure1_slot18;
                    zuuluu = _closure1_slot1;
                    tangon = _closure1_slot2;
                    michal = 77;
                    michal = tangon[michal];
                    tangon = undefined;
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = {};
                    oscard = golfie.data;
                    oscard = oscard.eventId;
                    michal['eventId'] = oscard;
                    entity = report.bind(tangon)(zuuluu, michal);
 661:
                    _fun00052_ip = 712; continue _fun00051;
 663:
                    report = _closure1_slot18;
                    zuuluu = _closure1_slot1;
                    tangon = _closure1_slot2;
                    michal = 76;
                    michal = tangon[michal];
                    tangon = undefined;
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = {};
                    oscard = _closure2_slot5;
                    michal['visible'] = oscard;
                    entity = report.bind(tangon)(zuuluu, michal);
 712:
                    _fun00052_ip = 757; continue _fun00051;
 714:
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
 757:
                    _fun00052_ip = 805; continue _fun00051;
 759:
                    report = _closure1_slot18;
                    zuuluu = _closure1_slot1;
                    tangon = _closure1_slot2;
                    michal = 66;
                    michal = tangon[michal];
                    tangon = undefined;
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = {};
                    oscard = golfie.id;
                    michal['channelId'] = oscard;
                    entity = report.bind(tangon)(zuuluu, michal);
 805:
                    _fun00052_ip = 893; continue _fun00051;
 807:
                    report = _closure1_slot18;
                    zuuluu = _closure1_slot1;
                    tangon = _closure1_slot2;
                    michal = 74;
                    michal = tangon[michal];
                    tangon = undefined;
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = {};
                    offset = _closure2_slot20;
                    verify = offset.find;
                    oscard = function(argFoo) {
                        entity = argFoo;
                        entity = entity.item;
                        michal = entity.id;
                        entity = _closure3_slot0;
                        entity = entity.id;
                        entity = michal === entity;
                        return entity;
                    };
                    verify = verify.bind(offset)(oscard);
                    oscard = null;
                    oscard = oscard != verify;
                    michal['visible'] = oscard;
                    oscard = golfie.data;
                    oscard = oscard.content;
                    michal['content'] = oscard;
                    entity = report.bind(tangon)(zuuluu, michal);
 893:
                    _fun00052_ip = 1269; continue _fun00051;
 898:
                    tangon = golfie.channelType;
                    report = _closure1_slot0;
                    oscard = _closure1_slot2;
                    michal = 47;
                    michal = oscard[michal];
                    oscard = undefined;
                    michal = report.bind(oscard)(michal);
                    michal = michal.ChannelTypes;
                    michal = michal.GUILD_ANNOUNCEMENT;
                    if(!(tangon !== michal)) { _fun00052_ip = 1174; continue _fun00051 }
 948:
                    michal = golfie.data;
                    tangon = michal.messageContext;
                    yankee = null;
                    report = yankee == tangon;
                    michal = undefined;
                    if(report) { _fun00052_ip = 976; continue _fun00051 }
 970:
                    michal = tangon.external_content_application_id;
 976:
                    if(!(yankee == michal)) { _fun00052_ip = 1077; continue _fun00051 }
 980:
                    report = _closure1_slot18;
                    tangon = _closure1_slot1;
                    verify = _closure1_slot2;
                    michal = 73;
                    michal = verify[michal];
                    tangon = tangon.bind(oscard)(michal);
                    michal = {};
                    verify = golfie.data;
                    verify = verify.message;
                    michal['message'] = verify;
                    verify = golfie.data;
                    verify = verify.messageContext;
                    michal['messageContext'] = verify;
                    romeon = _closure2_slot20;
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
                    michal = report.bind(oscard)(tangon, michal);
                    _fun00052_ip = 1172; continue _fun00051;
 1077:
                    verify = _closure1_slot18;
                    report = _closure1_slot1;
                    offset = _closure1_slot2;
                    tangon = 72;
                    tangon = offset[tangon];
                    report = report.bind(oscard)(tangon);
                    tangon = {};
                    offset = golfie.data;
                    offset = offset.message;
                    tangon['message'] = offset;
                    offset = golfie.data;
                    offset = offset.messageContext;
                    tangon['messageContext'] = offset;
                    foxtra = _closure2_slot20;
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
                    michal = verify.bind(oscard)(report, tangon);
 1172:
                    _fun00052_ip = 1266; continue _fun00051;
 1174:
                    report = _closure1_slot18;
                    tangon = _closure1_slot1;
                    verify = _closure1_slot2;
                    zuuluu = 71;
                    zuuluu = verify[zuuluu];
                    tangon = tangon.bind(oscard)(zuuluu);
                    zuuluu = {};
                    verify = golfie.unread;
                    zuuluu['unread'] = verify;
                    verify = golfie.data;
                    verify = verify.message;
                    zuuluu['message'] = verify;
                    offset = _closure2_slot20;
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
                    michal = report.bind(oscard)(tangon, zuuluu);
 1266:
                    entity = michal;
 1269:
                    _fun00052_ip = 1324; continue _fun00051;
 1271:
                    report = _closure1_slot18;
                    zuuluu = _closure1_slot1;
                    tangon = _closure1_slot2;
                    michal = 70;
                    michal = tangon[michal];
                    tangon = undefined;
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = {};
                    oscard = golfie.data;
                    oscard = oscard.topic;
                    michal['topic'] = oscard;
                    entity = report.bind(tangon)(zuuluu, michal);
 1324:
                    _fun00052_ip = 1448; continue _fun00051;
 1326:
                    zuuluu = _closure2_slot2;
                    michal = null;
                    if(!zuuluu) { _fun00052_ip = 1445; continue _fun00051 }
 1338:
                    oscard = _closure1_slot19;
                    report = _closure1_slot20;
                    tangon = {};
                    romeon = _closure1_slot18;
                    yankee = _closure1_slot28;
                    zuuluu = undefined;
                    option = {};
                    yankee = romeon.bind(zuuluu)(yankee, option);
                    option = new Array(2);
                    option[0] = yankee;
                    yankee = _closure2_slot7;
                    if(!yankee) { _fun00052_ip = 1401; continue _fun00051 }
 1384:
                    yankee = _closure2_slot9;
                    romeon = yankee.length;
                    yankee = 0;
                    verify = null;
                    if(!(yankee === romeon)) { _fun00052_ip = 1431; continue _fun00051 }
 1401:
                    romeon = _closure1_slot18;
                    yankee = _closure1_slot6;
                    offset = {};
                    foxtra = _closure2_slot0;
                    foxtra = foxtra.headerBorder;
                    offset['style'] = foxtra;
                    verify = romeon.bind(zuuluu)(yankee, offset);
 1431:
                    option[1] = verify;
                    tangon['children'] = option;
                    michal = oscard.bind(zuuluu)(report, tangon);
 1445:
                    entity = michal;
 1448:
                    _fun00052_ip = 1516; continue _fun00051;
 1450:
                    zuuluu = _closure2_slot3;
                    michal = null;
                    if(!zuuluu) { _fun00052_ip = 1513; continue _fun00051 }
 1462:
                    oscard = _closure1_slot18;
                    tangon = _closure1_slot1;
                    report = _closure1_slot2;
                    zuuluu = 69;
                    zuuluu = report[zuuluu];
                    report = undefined;
                    tangon = tangon.bind(report)(zuuluu);
                    zuuluu = {};
                    golfie = golfie.data;
                    golfie = golfie.item;
                    zuuluu['item'] = golfie;
                    michal = oscard.bind(report)(tangon, zuuluu);
 1513:
                    entity = michal;
 1516:
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
            entity = _closure1_slot14;
            zuuluu = new Array(1);
            zuuluu[0] = entity;
            michal = function() {
                michal = _closure1_slot14;
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
            if(!(yankee === offset)) { _fun00016_ip = 2045; continue _fun00015 }
 2031:
            offset = sizing.length;
            verify = verify.length;
            option = offset + verify;
 2045:
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
                entity = 20;
                michal = michal[entity];
                entity = undefined;
                report = zuuluu.bind(entity)(michal);
                tangon = report.trackItemInteraction;
                zuuluu = 'refresh_button';
                michal = 'press_refresh_button';
                michal = tangon.bind(report)(zuuluu, zuuluu, michal);
                zuuluu = _closure2_slot35;
                zuuluu = zuuluu.bind(entity)();
                michal = _closure2_slot32;
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
            record = 25;
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
            if(!sierra) { _fun00016_ip = 2385; continue _fun00015 }
 2383:
            target = 0;
 2385:
            papara['opacity'] = target;
            config['style'] = papara;
            config = cntext.bind(tangon)(record, config);
            backup['refreshControl'] = config;
            config = 3;
            backup['onEndReachedThreshold'] = config;
            config = _closure1_slot33;
            backup['onEndReached'] = config;
            config = _closure1_slot37;
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
            if(echoed) { _fun00016_ip = 2510; continue _fun00015 }
 2507:
            result = output;
 2510:
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
    var _closure1_slot36 = entity;
    entity = function(argFoo) { // Original name: keyExtractor
        entity = argFoo;
        entity = entity.id;
        return entity;
    };
    var _closure1_slot37 = entity;
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
    golfie = report.bind(entity)(golfie);
    backup = golfie.ICYMI_MARGIN;
    golfie = 12;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    verify = golfie.AnalyticEvents;
    var _closure1_slot15 = verify;
    golfie = golfie.GuildNSFWContentLevel;
    var _closure1_slot16 = golfie;
    golfie = 13;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.ContentDismissActionType;
    var _closure1_slot17 = golfie;
    golfie = 14;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    verify = golfie.jsx;
    var _closure1_slot18 = verify;
    verify = golfie.jsxs;
    var _closure1_slot19 = verify;
    golfie = golfie.Fragment;
    var _closure1_slot20 = golfie;
    verify = 15;
    golfie = oscard[verify];
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
            entity = 16;
            michal = michal[entity];
            entity = undefined;
            report = zuuluu.bind(entity)(michal);
            tangon = report.track;
            zuuluu = 'batch';
            michal = argCor;
            if(!(zuuluu !== michal)) { _fun00056_ip = 63; continue _fun00055 }
 51:
            michal = _closure1_slot15;
            zuuluu = michal.FEED_ITEM_SEEN_LONG;
            _fun00056_ip = 73; continue _fun00055;
 63:
            michal = _closure1_slot15;
            zuuluu = michal.FEED_ITEM_SEEN_BATCH;
 73:
            michal = {};
            offset = _closure1_slot14;
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
    tangon = 17;
    golfie = oscard[tangon];
    offset = report.bind(entity)(golfie);
    verify = offset.createStyles;
    golfie = {};
    yankee = {'flex': 1, 'flexShrink': 1, 'flexGrow': 1};
    golfie['container'] = yankee;
    foxtra = {};
    yankee = 18;
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
            entity = 40;
            entity = backup[entity];
            entity = golfie.bind(tangon)(entity);
            yankee = entity.bind(tangon)();
            foxtra = _closure1_slot0;
            entity = 37;
            entity = backup[entity];
            zuuluu = foxtra.bind(tangon)(entity);
            michal = zuuluu.useIsNotificationsTabMerged;
            entity = {};
            report = 'ICYMIHeader';
            entity['location'] = report;
            entity = michal.bind(zuuluu)(entity);
            kiloes = entity.enabled;
            zuuluu = _closure1_slot19;
            entity = 41;
            entity = backup[entity];
            entity = foxtra.bind(tangon)(entity);
            michal = entity.SafeAreaPaddingView;
            entity = {};
            report = !yankee;
            entity['top'] = report;
            report = verify.header;
            entity['style'] = report;
            option = _closure1_slot18;
            report = 42;
            report = backup[report];
            golfie = golfie.bind(tangon)(report);
            report = {'absolute': true, 'wide': true, 'tall': true, 'mix': true};
            offset = {};
            romeon = 43;
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
            if(!yankee) { _fun00058_ip = 445; continue _fun00057 }
 260:
            backup = _closure1_slot18;
            output = _closure1_slot0;
            ctrled = _closure1_slot2;
            yankee = 39;
            yankee = ctrled[yankee];
            yankee = output.bind(tangon)(yankee);
            foxtra = yankee.PressableOpacity;
            yankee = {};
            sizing = verify.headerClose;
            yankee['style'] = sizing;
            sizing = 25;
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
            sizing = 44;
            sizing = ctrled[sizing];
            sizing = output.bind(tangon)(sizing);
            sizing = sizing.goBack;
            yankee['onPress'] = sizing;
            result = _closure1_slot18;
            sizing = 45;
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
 445:
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
            if(kiloes) { _fun00058_ip = 519; continue _fun00057 }
 505:
            sizing = _closure1_slot31;
            kiloes = {};
            sizing = result.bind(tangon)(sizing, kiloes);
            _fun00058_ip = 536; continue _fun00057;
 519:
            output = _closure1_slot30;
            kiloes = {};
            kiloes['numUnreadMentions'] = echoed;
            sizing = result.bind(tangon)(output, kiloes);
 536:
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
    tangon = 'modules/icymi/native/ICYMI.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: ICYMITab
        _fun00059: for(var _fun00060_ip = 0; ; ) switch(_fun00060_ip) {
 0:
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot2;
            entity = 51;
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
            entity = _closure1_slot10;
            zuuluu = new Array(1);
            zuuluu[0] = entity;
            entity = function() {
                michal = _closure1_slot10;
                entity = michal.getId;
                entity = entity.bind(michal)();
                return entity;
            };
            sizing = report.bind(golfie)(zuuluu, entity);
            report = _closure1_slot1;
            entity = 40;
            entity = oscard[entity];
            entity = report.bind(tangon)(entity);
            entity = entity.bind(tangon)();
            var _closure2_slot0 = entity;
            zuuluu = 50;
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
            option = 42;
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
            backup = _closure1_slot36;
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