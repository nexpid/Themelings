// app/modules/channel_list_v2/native/items/RedesignCategory.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        golfie = argBar;
        verify = argBaz;
        zuuluu = argFre;
        option = argPlu;
        var _closure1_slot0 = golfie;
        var _closure1_slot1 = verify;
        var _closure1_slot2 = option;
        report = function(argFoo) { // Original name: renderCategoryItem
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                entity = argFoo;
                output = entity.name;
                sizing = entity.icon;
                romeon = entity.note;
                echoed = entity.muted;
                report = undefined;
                if(!(echoed === report)) { _fun00004_ip = 33; continue _fun00003 }
 31:
                echoed = false;
 33:
                verify = entity.onPress;
                option = entity.onLongPress;
                oscard = entity.withMarginTop;
                offset = entity.accessibilityState;
                entity = _closure1_slot14;
                entity = entity.categoryWrapper;
                golfie = new Array(2);
                golfie[0] = entity;
                zuuluu = {};
                entity = null;
                yankee = entity != sizing;
                tangon = 16;
                if(!yankee) { _fun00004_ip = 94; continue _fun00003 }
 91:
                tangon = 3;
 94:
                zuuluu['paddingLeft'] = tangon;
                tangon = 0;
                if(!oscard) { _fun00004_ip = 108; continue _fun00003 }
 104:
                tangon = _closure1_slot9;
 108:
                zuuluu['marginTop'] = tangon;
                tangon = _closure1_slot8;
                zuuluu['marginBottom'] = tangon;
                golfie[1] = zuuluu;
                oscard = _closure1_slot13;
                tangon = _closure1_slot12;
                zuuluu = {};
                yankee = entity != sizing;
                foxtra = null;
                if(!yankee) { _fun00004_ip = 177; continue _fun00003 }
 143:
                kiloes = _closure1_slot11;
                backup = _closure1_slot4;
                yankee = {};
                result = _closure1_slot14;
                result = result.iconWrapperStyles;
                yankee['style'] = result;
                yankee['children'] = sizing;
                foxtra = kiloes.bind(report)(backup, yankee);
 177:
                yankee = new Array(3);
                yankee[0] = foxtra;
                kiloes = 'string';
                backup = typeof output;
                foxtra = output;
                if(!(kiloes === backup)) { _fun00004_ip = 296; continue _fun00003 }
 199:
                sizing = _closure1_slot11;
                kiloes = _closure1_slot0;
                result = _closure1_slot2;
                backup = 8;
                backup = result[backup];
                backup = kiloes.bind(report)(backup);
                kiloes = backup.Text;
                backup = {};
                result = true;
                backup['experimental_useNativeText'] = result;
                result = _closure1_slot10;
                backup['variant'] = result;
                result = 'header-secondary';
                if(!echoed) { _fun00004_ip = 260; continue _fun00003 }
 254:
                result = 'interactive-muted';
 260:
                backup['color'] = result;
                result = 1;
                backup['lineClamp'] = result;
                result = _closure1_slot14;
                result = result.categoryText;
                backup['style'] = result;
                backup['children'] = output;
                foxtra = sizing.bind(report)(kiloes, backup);
 296:
                yankee[1] = foxtra;
                yankee[2] = romeon;
                zuuluu['children'] = yankee;
                oscard = oscard.bind(report)(tangon, zuuluu);
                if(!(entity == verify)) { _fun00004_ip = 356; continue _fun00003 }
 318:
                if(!(entity == option)) { _fun00004_ip = 356; continue _fun00003 }
 322:
                tangon = _closure1_slot11;
                zuuluu = _closure1_slot4;
                entity = {};
                yankee = 'header';
                entity['accessibilityRole'] = yankee;
                entity['style'] = golfie;
                entity['children'] = oscard;
                entity = tangon.bind(report)(zuuluu, entity);
                _fun00004_ip = 424; continue _fun00003;
 356:
                tangon = _closure1_slot11;
                zuuluu = _closure1_slot0;
                yankee = _closure1_slot2;
                michal = 9;
                michal = yankee[michal];
                michal = zuuluu.bind(report)(michal);
                zuuluu = michal.PressableHighlight;
                michal = {};
                yankee = 'header';
                michal['accessibilityRole'] = yankee;
                michal['accessibilityState'] = offset;
                michal['onPress'] = verify;
                michal['onLongPress'] = option;
                michal['style'] = golfie;
                michal['children'] = oscard;
                entity = tangon.bind(report)(zuuluu, michal);
 424:
                return entity;
            }
        };
        var _closure1_slot17 = report;
        entity = function(argFoo) { // Original name: renderCollapsibleCategoryItem
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zuuluu = argFoo;
                tangon = zuuluu.collapsed;
                entity = null;
                michal = Object.create(entity);
                entity = 0;
                michal['collapsed'] = entity;
                foxtra = {};
                romeon = zuuluu;
                yankee = michal;
                oscard = copyDataProperties(foxtra, romeon, yankee);
                michal = oscard.muted;
                golfie = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 10;
                entity = zuuluu[entity];
                zuuluu = undefined;
                entity = golfie.bind(zuuluu)(entity);
                entity = entity.colors;
                if(michal) { _fun00006_ip = 80; continue _fun00005 }
 72:
                verify = entity.HEADER_SECONDARY;
                _fun00006_ip = 86; continue _fun00005;
 80:
                verify = entity.INTERACTIVE_MUTED;
 86:
                if(tangon) { _fun00006_ip = 95; continue _fun00005 }
 89:
                option = _closure1_slot16;
                _fun00006_ip = 99; continue _fun00005;
 95:
                option = _closure1_slot15;
 99:
                michal = _closure1_slot17;
                entity = {};
                foxtra = entity;
                romeon = oscard;
                oscard = copyDataProperties(foxtra, romeon);
                golfie = _closure1_slot11;
                oscard = _closure1_slot0;
                offset = _closure1_slot2;
                report = 11;
                report = offset[report];
                report = oscard.bind(zuuluu)(report);
                oscard = report.ChevronSmallDownIcon;
                report = {};
                offset = 'xxs';
                report['size'] = offset;
                report['color'] = verify;
                report['style'] = option;
                oscard = golfie.bind(zuuluu)(oscard, report);
                report = 'icon';
                entity[report] = oscard;
                report = {};
                tangon = !tangon;
                report['expanded'] = tangon;
                tangon = 'accessibilityState';
                entity[tangon] = report;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            }
        };
        var _closure1_slot18 = entity;
        tangon = function(argFoo, argBar) { // Original name: useCategoryPressEvents
            oscard = argFoo;
            tangon = argBar;
            var _closure2_slot0 = oscard;
            var _closure2_slot1 = tangon;
            entity = {};
            option = _closure1_slot3;
            golfie = option.useCallback;
            report = new Array(2);
            report[0] = oscard;
            report[1] = tangon;
            tangon = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zuuluu = _closure2_slot1;
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    entity = 12;
                    tangon = tangon[entity];
                    entity = undefined;
                    tangon = report.bind(entity)(tangon);
                    if(zuuluu) { _fun00008_ip = 52; continue _fun00007 }
 35:
                    report = tangon.categoryCollapse;
                    zuuluu = _closure2_slot0;
                    zuuluu = report.bind(tangon)(zuuluu);
                    _fun00008_ip = 67; continue _fun00007;
 52:
                    zuuluu = tangon.categoryExpand;
                    michal = _closure2_slot0;
                    michal = zuuluu.bind(tangon)(michal);
 67:
                    return entity;
                }
            };
            tangon = golfie.bind(option)(tangon, report);
            entity['onPress'] = tangon;
            report = _closure1_slot3;
            tangon = report.useCallback;
            zuuluu = new Array(1);
            zuuluu[0] = oscard;
            michal = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 13;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.openChannelLongPressActionSheet;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            michal = tangon.bind(report)(michal, zuuluu);
            entity['onLongPress'] = michal;
            return entity;
        };
        var _closure1_slot19 = tangon;
        entity = global;
        yankee = entity.Object;
        offset = yankee.defineProperty;
        oscard = {};
        entity = true;
        oscard['value'] = entity;
        entity = '__esModule';
        entity = offset.bind(yankee)(zuuluu, entity, oscard);
        foxtra = 0;
        offset = option[foxtra];
        oscard = argCor;
        entity = undefined;
        oscard = oscard.bind(entity)(offset);
        var _closure1_slot3 = oscard;
        backup = 1;
        oscard = option[backup];
        oscard = golfie.bind(entity)(oscard);
        offset = oscard.StyleSheet;
        oscard = oscard.View;
        var _closure1_slot4 = oscard;
        oscard = 2;
        oscard = option[oscard];
        oscard = verify.bind(entity)(oscard);
        var _closure1_slot5 = oscard;
        romeon = 3;
        oscard = option[romeon];
        oscard = verify.bind(entity)(oscard);
        var _closure1_slot6 = oscard;
        oscard = 4;
        oscard = option[oscard];
        oscard = verify.bind(entity)(oscard);
        var _closure1_slot7 = oscard;
        oscard = 5;
        oscard = option[oscard];
        oscard = golfie.bind(entity)(oscard);
        verify = oscard.CATEGORY_MARGIN_BOTTOM;
        var _closure1_slot8 = verify;
        verify = oscard.CATEGORY_MARGIN_TOP;
        var _closure1_slot9 = verify;
        verify = oscard.CATEGORY_NAME_TEXT_VARIANT;
        var _closure1_slot10 = verify;
        kiloes = oscard.CATEGORY_VERTICAL_PADDING;
        oscard = 6;
        verify = option[oscard];
        verify = golfie.bind(entity)(verify);
        verify = verify.jsx;
        var _closure1_slot11 = verify;
        verify = option[oscard];
        verify = golfie.bind(entity)(verify);
        verify = verify.Fragment;
        var _closure1_slot12 = verify;
        oscard = option[oscard];
        oscard = golfie.bind(entity)(oscard);
        oscard = oscard.jsxs;
        var _closure1_slot13 = oscard;
        verify = offset.create;
        oscard = {};
        yankee = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'paddingVertical': null, 'paddingRight': 16};
        yankee['paddingVertical'] = kiloes;
        oscard['categoryWrapper'] = yankee;
        yankee = {};
        yankee['flex'] = backup;
        backup = 7;
        backup = option[backup];
        kiloes = golfie.bind(entity)(backup);
        backup = kiloes.isAndroid;
        backup = backup.bind(kiloes)();
        if(!backup) { _fun00002_ip = 360; continue _fun00001 }
 354:
        foxtra = -1;
 360:
        yankee['marginTop'] = foxtra;
        oscard['categoryText'] = yankee;
        yankee = {};
        yankee['marginRight'] = romeon;
        oscard['iconWrapperStyles'] = yankee;
        oscard = verify.bind(offset)(oscard);
        var _closure1_slot14 = oscard;
        verify = {'flexShrink': 0, 'flexGrow': 0};
        oscard = {};
        result = oscard;
        output = verify;
        offset = copyDataProperties(result, output);
        offset = {};
        yankee = '-90deg';
        offset['rotate'] = yankee;
        yankee = new Array(1);
        yankee[0] = offset;
        offset = 'transform';
        oscard[offset] = yankee;
        var _closure1_slot15 = oscard;
        oscard = {};
        result = oscard;
        output = verify;
        verify = copyDataProperties(result, output);
        var _closure1_slot16 = oscard;
        oscard = 20;
        oscard = option[oscard];
        option = golfie.bind(entity)(oscard);
        golfie = option.fileFinishedImporting;
        oscard = 'modules/channel_list_v2/native/items/RedesignCategory.tsx';
        oscard = golfie.bind(option)(oscard);
        zuuluu['renderCategoryItem'] = report;
        zuuluu['useCategoryPressEvents'] = tangon;
        tangon = function(argFoo) { // Original name: CategoryChannel
            entity = argFoo;
            verify = entity.channel;
            var _closure2_slot0 = verify;
            tangon = entity.withMarginTop;
            oscard = _closure1_slot0;
            report = _closure1_slot2;
            zuuluu = 14;
            report = report[zuuluu];
            zuuluu = undefined;
            golfie = oscard.bind(zuuluu)(report);
            oscard = golfie.useStateFromStoresObject;
            option = _closure1_slot6;
            report = new Array(2);
            report[0] = option;
            option = _closure1_slot7;
            report[1] = option;
            michal = function() {
                entity = {};
                oscard = _closure1_slot6;
                report = oscard.isCollapsed;
                michal = _closure2_slot0;
                tangon = michal.id;
                tangon = report.bind(oscard)(tangon);
                entity['collapsed'] = tangon;
                report = _closure1_slot7;
                tangon = report.isChannelMuted;
                zuuluu = michal.getGuildId;
                zuuluu = zuuluu.bind(michal)();
                michal = michal.id;
                michal = tangon.bind(report)(zuuluu, michal);
                entity['muted'] = michal;
                return entity;
            };
            michal = oscard.bind(golfie)(report, michal);
            golfie = michal.collapsed;
            option = michal.muted;
            report = _closure1_slot19;
            michal = verify.id;
            michal = report.bind(zuuluu)(michal, golfie);
            oscard = michal.onPress;
            report = michal.onLongPress;
            michal = _closure1_slot18;
            entity = {};
            verify = verify.name;
            entity['name'] = verify;
            entity['muted'] = option;
            entity['collapsed'] = golfie;
            entity['onPress'] = oscard;
            entity['onLongPress'] = report;
            entity['withMarginTop'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        zuuluu['CategoryChannel'] = tangon;
        tangon = function(argFoo) { // Original name: RecentlyActiveCategory
            entity = argFoo;
            verify = entity.guildId;
            var _closure2_slot0 = verify;
            tangon = entity.withMarginTop;
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            zuuluu = 14;
            report = yankee[zuuluu];
            zuuluu = undefined;
            option = offset.bind(zuuluu)(report);
            golfie = option.useStateFromStores;
            report = _closure1_slot5;
            oscard = new Array(1);
            oscard[0] = report;
            report = function() {
                zuuluu = _closure1_slot5;
                michal = zuuluu.isCollapsed;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            oscard = golfie.bind(option)(oscard, report);
            var _closure2_slot1 = oscard;
            option = _closure1_slot3;
            golfie = option.useCallback;
            report = new Array(2);
            report[0] = verify;
            report[1] = oscard;
            michal = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 15;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.setRecentlyActiveCollapsed;
                michal = _closure2_slot0;
                entity = _closure2_slot1;
                entity = !entity;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            report = golfie.bind(option)(michal, report);
            michal = _closure1_slot18;
            entity = {};
            golfie = 16;
            option = yankee[golfie];
            option = offset.bind(zuuluu)(option);
            verify = option.intl;
            option = verify.string;
            golfie = yankee[golfie];
            golfie = offset.bind(zuuluu)(golfie);
            golfie = golfie.t;
            golfie = golfie.uZyspK;
            golfie = option.bind(verify)(golfie);
            entity['name'] = golfie;
            entity['collapsed'] = oscard;
            entity['onPress'] = report;
            entity['withMarginTop'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        zuuluu['RecentlyActiveCategory'] = tangon;
        michal = function(argFoo) { // Original name: SuggestedCategory
            entity = argFoo;
            option = entity.guildId;
            var _closure2_slot0 = option;
            golfie = entity.channelIds;
            var _closure2_slot1 = golfie;
            tangon = entity.withMarginTop;
            oscard = _closure1_slot3;
            report = oscard.useCallback;
            zuuluu = new Array(2);
            zuuluu[0] = option;
            zuuluu[1] = golfie;
            michal = function() {
                golfie = _closure1_slot0;
                option = _closure1_slot2;
                entity = 17;
                michal = option[entity];
                entity = undefined;
                tangon = golfie.bind(entity)(michal);
                zuuluu = tangon.showSimpleActionSheet;
                michal = {};
                report = 'REDESIGN_SUGGESTED_CHANNELS_CLEAR';
                michal['key'] = report;
                oscard = {};
                report = 16;
                verify = option[report];
                verify = golfie.bind(entity)(verify);
                offset = verify.intl;
                verify = offset.string;
                report = option[report];
                report = golfie.bind(entity)(report);
                report = report.t;
                report = report.VkKicX;
                report = verify.bind(offset)(report);
                oscard['label'] = report;
                report = function() { // Original name: onPress
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 18;
                    michal = michal[entity];
                    entity = undefined;
                    report = zuuluu.bind(entity)(michal);
                    tangon = report.clearRecentChannels;
                    zuuluu = _closure2_slot0;
                    michal = _closure2_slot1;
                    michal = tangon.bind(report)(zuuluu, michal);
                    return entity;
                };
                oscard['onPress'] = report;
                report = 19;
                report = option[report];
                report = golfie.bind(entity)(report);
                report = report.CircleXIcon;
                oscard['IconComponent'] = report;
                report = new Array(1);
                report[0] = oscard;
                michal['options'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            report = report.bind(oscard)(michal, zuuluu);
            zuuluu = _closure1_slot17;
            michal = {};
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            oscard = 16;
            golfie = offset[oscard];
            entity = undefined;
            golfie = verify.bind(entity)(golfie);
            option = golfie.intl;
            golfie = option.string;
            oscard = offset[oscard];
            oscard = verify.bind(entity)(oscard);
            oscard = oscard.t;
            oscard = oscard.HbJ7eH;
            oscard = golfie.bind(option)(oscard);
            michal['name'] = oscard;
            michal['onPress'] = report;
            michal['withMarginTop'] = tangon;
            entity = zuuluu.bind(entity)(michal);
            return entity;
        };
        zuuluu['SuggestedCategory'] = michal;
        return entity;
    }
})();