// app/modules/channel_list_v2/native/items/RedesignCategory.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    _fun115679: for(var _fun115679_ip = 0; ; ) switch(_fun115679_ip) {
 0:
        golf = argBar;
        verify = argBaz;
        zulu = argFred;
        options = argPlugh;
        var _closure1_slot0 = golf;
        var _closure1_slot1 = verify;
        var _closure1_slot2 = options;
        report = function(argFoo) { // Original name: renderCategoryItem
            _fun115680: for(var _fun115680_ip = 0; ; ) switch(_fun115680_ip) {
 0:
                entity = argFoo;
                output = entity.name;
                sizing = entity.icon;
                romeo = entity.note;
                echo = entity.muted;
                report = undefined;
                if(!(echo === report)) { _fun115680_ip = 33; continue _fun115680 }
 31:
                echo = false;
 33:
                verify = entity.onPress;
                options = entity.onLongPress;
                oscar = entity.withMarginTop;
                offset = entity.accessibilityState;
                entity = _closure1_slot14;
                entity = entity.categoryWrapper;
                golf = new Array(2);
                golf[0] = entity;
                zulu = {};
                entity = null;
                yankee = entity != sizing;
                tango = 16;
                if(!yankee) { _fun115680_ip = 94; continue _fun115680 }
 91:
                tango = 3;
 94:
                zulu['paddingLeft'] = tango;
                tango = 0;
                if(!oscar) { _fun115680_ip = 108; continue _fun115680 }
 104:
                tango = _closure1_slot9;
 108:
                zulu['marginTop'] = tango;
                tango = _closure1_slot8;
                zulu['marginBottom'] = tango;
                golf[1] = zulu;
                oscar = _closure1_slot13;
                tango = _closure1_slot12;
                zulu = {};
                yankee = entity != sizing;
                foxtrot = null;
                if(!yankee) { _fun115680_ip = 177; continue _fun115680 }
 143:
                kilo = _closure1_slot11;
                backup = _closure1_slot4;
                yankee = {};
                result = _closure1_slot14;
                result = result.iconWrapperStyles;
                yankee['style'] = result;
                yankee['children'] = sizing;
                foxtrot = kilo.bind(report)(backup, yankee);
 177:
                yankee = new Array(3);
                yankee[0] = foxtrot;
                kilo = 'string';
                backup = typeof output;
                foxtrot = output;
                if(!(kilo === backup)) { _fun115680_ip = 296; continue _fun115680 }
 199:
                sizing = _closure1_slot11;
                kilo = _closure1_slot0;
                result = _closure1_slot2;
                backup = 8;
                backup = result[backup];
                backup = kilo.bind(report)(backup);
                kilo = backup.Text;
                backup = {};
                result = true;
                backup['experimental_useNativeText'] = result;
                result = _closure1_slot10;
                backup['variant'] = result;
                result = 'header-secondary';
                if(!echo) { _fun115680_ip = 260; continue _fun115680 }
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
                foxtrot = sizing.bind(report)(kilo, backup);
 296:
                yankee[1] = foxtrot;
                yankee[2] = romeo;
                zulu['children'] = yankee;
                oscar = oscar.bind(report)(tango, zulu);
                if(!(entity == verify)) { _fun115680_ip = 356; continue _fun115680 }
 318:
                if(!(entity == options)) { _fun115680_ip = 356; continue _fun115680 }
 322:
                tango = _closure1_slot11;
                zulu = _closure1_slot4;
                entity = {};
                yankee = 'header';
                entity['accessibilityRole'] = yankee;
                entity['style'] = golf;
                entity['children'] = oscar;
                entity = tango.bind(report)(zulu, entity);
                _fun115680_ip = 424; continue _fun115680;
 356:
                tango = _closure1_slot11;
                zulu = _closure1_slot0;
                yankee = _closure1_slot2;
                mike = 9;
                mike = yankee[mike];
                mike = zulu.bind(report)(mike);
                zulu = mike.PressableHighlight;
                mike = {};
                yankee = 'header';
                mike['accessibilityRole'] = yankee;
                mike['accessibilityState'] = offset;
                mike['onPress'] = verify;
                mike['onLongPress'] = options;
                mike['style'] = golf;
                mike['children'] = oscar;
                entity = tango.bind(report)(zulu, mike);
 424:
                return entity;
            }
        };
        var _closure1_slot17 = report;
        entity = function(argFoo) { // Original name: renderCollapsibleCategoryItem
            _fun115681: for(var _fun115681_ip = 0; ; ) switch(_fun115681_ip) {
 0:
                zulu = argFoo;
                tango = zulu.collapsed;
                entity = null;
                mike = Object.create(entity);
                entity = 0;
                mike['collapsed'] = entity;
                foxtrot = {};
                romeo = zulu;
                yankee = mike;
                oscar = copyDataProperties(foxtrot, romeo, yankee);
                mike = oscar.muted;
                golf = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 10;
                entity = zulu[entity];
                zulu = undefined;
                entity = golf.bind(zulu)(entity);
                entity = entity.colors;
                if(mike) { _fun115681_ip = 80; continue _fun115681 }
 72:
                verify = entity.HEADER_SECONDARY;
                _fun115681_ip = 86; continue _fun115681;
 80:
                verify = entity.INTERACTIVE_MUTED;
 86:
                if(tango) { _fun115681_ip = 95; continue _fun115681 }
 89:
                options = _closure1_slot16;
                _fun115681_ip = 99; continue _fun115681;
 95:
                options = _closure1_slot15;
 99:
                mike = _closure1_slot17;
                entity = {};
                foxtrot = entity;
                romeo = oscar;
                oscar = copyDataProperties(foxtrot, romeo);
                golf = _closure1_slot11;
                oscar = _closure1_slot0;
                offset = _closure1_slot2;
                report = 11;
                report = offset[report];
                report = oscar.bind(zulu)(report);
                oscar = report.ChevronSmallDownIcon;
                report = {};
                offset = 'xxs';
                report['size'] = offset;
                report['color'] = verify;
                report['style'] = options;
                oscar = golf.bind(zulu)(oscar, report);
                report = 'icon';
                entity[report] = oscar;
                report = {};
                tango = !tango;
                report['expanded'] = tango;
                tango = 'accessibilityState';
                entity[tango] = report;
                entity = mike.bind(zulu)(entity);
                return entity;
            }
        };
        var _closure1_slot18 = entity;
        tango = function(argFoo, argBar) { // Original name: useCategoryPressEvents
            oscar = argFoo;
            tango = argBar;
            var _closure2_slot0 = oscar;
            var _closure2_slot1 = tango;
            entity = {};
            options = _closure1_slot3;
            golf = options.useCallback;
            report = new Array(2);
            report[0] = oscar;
            report[1] = tango;
            tango = function() {
                _fun115683: for(var _fun115683_ip = 0; ; ) switch(_fun115683_ip) {
 0:
                    zulu = _closure2_slot1;
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    entity = 12;
                    tango = tango[entity];
                    entity = undefined;
                    tango = report.bind(entity)(tango);
                    if(zulu) { _fun115683_ip = 52; continue _fun115683 }
 35:
                    report = tango.categoryCollapse;
                    zulu = _closure2_slot0;
                    zulu = report.bind(tango)(zulu);
                    _fun115683_ip = 67; continue _fun115683;
 52:
                    zulu = tango.categoryExpand;
                    mike = _closure2_slot0;
                    mike = zulu.bind(tango)(mike);
 67:
                    return entity;
                }
            };
            tango = golf.bind(options)(tango, report);
            entity['onPress'] = tango;
            report = _closure1_slot3;
            tango = report.useCallback;
            zulu = new Array(1);
            zulu[0] = oscar;
            mike = function() {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 13;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.openChannelLongPressActionSheet;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            mike = tango.bind(report)(mike, zulu);
            entity['onLongPress'] = mike;
            return entity;
        };
        var _closure1_slot19 = tango;
        entity = global;
        yankee = entity.Object;
        offset = yankee.defineProperty;
        oscar = {};
        entity = true;
        oscar['value'] = entity;
        entity = '__esModule';
        entity = offset.bind(yankee)(zulu, entity, oscar);
        foxtrot = 0;
        offset = options[foxtrot];
        oscar = argCorge;
        entity = undefined;
        oscar = oscar.bind(entity)(offset);
        var _closure1_slot3 = oscar;
        backup = 1;
        oscar = options[backup];
        oscar = golf.bind(entity)(oscar);
        offset = oscar.StyleSheet;
        oscar = oscar.View;
        var _closure1_slot4 = oscar;
        oscar = 2;
        oscar = options[oscar];
        oscar = verify.bind(entity)(oscar);
        var _closure1_slot5 = oscar;
        romeo = 3;
        oscar = options[romeo];
        oscar = verify.bind(entity)(oscar);
        var _closure1_slot6 = oscar;
        oscar = 4;
        oscar = options[oscar];
        oscar = verify.bind(entity)(oscar);
        var _closure1_slot7 = oscar;
        oscar = 5;
        oscar = options[oscar];
        oscar = golf.bind(entity)(oscar);
        verify = oscar.CATEGORY_MARGIN_BOTTOM;
        var _closure1_slot8 = verify;
        verify = oscar.CATEGORY_MARGIN_TOP;
        var _closure1_slot9 = verify;
        verify = oscar.CATEGORY_NAME_TEXT_VARIANT;
        var _closure1_slot10 = verify;
        kilo = oscar.CATEGORY_VERTICAL_PADDING;
        oscar = 6;
        verify = options[oscar];
        verify = golf.bind(entity)(verify);
        verify = verify.jsx;
        var _closure1_slot11 = verify;
        verify = options[oscar];
        verify = golf.bind(entity)(verify);
        verify = verify.Fragment;
        var _closure1_slot12 = verify;
        oscar = options[oscar];
        oscar = golf.bind(entity)(oscar);
        oscar = oscar.jsxs;
        var _closure1_slot13 = oscar;
        verify = offset.create;
        oscar = {};
        yankee = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'paddingVertical': null, 'paddingRight': 16};
        yankee['paddingVertical'] = kilo;
        oscar['categoryWrapper'] = yankee;
        yankee = {};
        yankee['flex'] = backup;
        backup = 7;
        backup = options[backup];
        kilo = golf.bind(entity)(backup);
        backup = kilo.isAndroid;
        backup = backup.bind(kilo)();
        if(!backup) { _fun115679_ip = 359; continue _fun115679 }
 353:
        foxtrot = -1;
 359:
        yankee['marginTop'] = foxtrot;
        oscar['categoryText'] = yankee;
        yankee = {};
        yankee['marginRight'] = romeo;
        oscar['iconWrapperStyles'] = yankee;
        oscar = verify.bind(offset)(oscar);
        var _closure1_slot14 = oscar;
        verify = {'flexShrink': 0, 'flexGrow': 0};
        oscar = {};
        result = oscar;
        output = verify;
        offset = copyDataProperties(result, output);
        offset = {};
        yankee = '-90deg';
        offset['rotate'] = yankee;
        yankee = new Array(1);
        yankee[0] = offset;
        offset = 'transform';
        oscar[offset] = yankee;
        var _closure1_slot15 = oscar;
        oscar = {};
        result = oscar;
        output = verify;
        verify = copyDataProperties(result, output);
        var _closure1_slot16 = oscar;
        oscar = 20;
        oscar = options[oscar];
        options = golf.bind(entity)(oscar);
        golf = options.fileFinishedImporting;
        oscar = 'modules/channel_list_v2/native/items/RedesignCategory.tsx';
        oscar = golf.bind(options)(oscar);
        zulu['renderCategoryItem'] = report;
        zulu['useCategoryPressEvents'] = tango;
        tango = function(argFoo) { // Original name: CategoryChannel
            entity = argFoo;
            verify = entity.channel;
            var _closure2_slot0 = verify;
            tango = entity.withMarginTop;
            oscar = _closure1_slot0;
            report = _closure1_slot2;
            zulu = 14;
            report = report[zulu];
            zulu = undefined;
            golf = oscar.bind(zulu)(report);
            oscar = golf.useStateFromStoresObject;
            options = _closure1_slot6;
            report = new Array(2);
            report[0] = options;
            options = _closure1_slot7;
            report[1] = options;
            mike = function() {
                entity = {};
                oscar = _closure1_slot6;
                report = oscar.isCollapsed;
                mike = _closure2_slot0;
                tango = mike.id;
                tango = report.bind(oscar)(tango);
                entity['collapsed'] = tango;
                report = _closure1_slot7;
                tango = report.isChannelMuted;
                zulu = mike.getGuildId;
                zulu = zulu.bind(mike)();
                mike = mike.id;
                mike = tango.bind(report)(zulu, mike);
                entity['muted'] = mike;
                return entity;
            };
            mike = oscar.bind(golf)(report, mike);
            golf = mike.collapsed;
            options = mike.muted;
            report = _closure1_slot19;
            mike = verify.id;
            mike = report.bind(zulu)(mike, golf);
            oscar = mike.onPress;
            report = mike.onLongPress;
            mike = _closure1_slot18;
            entity = {};
            verify = verify.name;
            entity['name'] = verify;
            entity['muted'] = options;
            entity['collapsed'] = golf;
            entity['onPress'] = oscar;
            entity['onLongPress'] = report;
            entity['withMarginTop'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        zulu['CategoryChannel'] = tango;
        tango = function(argFoo) { // Original name: RecentlyActiveCategory
            entity = argFoo;
            verify = entity.guildId;
            var _closure2_slot0 = verify;
            tango = entity.withMarginTop;
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            zulu = 14;
            report = yankee[zulu];
            zulu = undefined;
            options = offset.bind(zulu)(report);
            golf = options.useStateFromStores;
            report = _closure1_slot5;
            oscar = new Array(1);
            oscar[0] = report;
            report = function() {
                zulu = _closure1_slot5;
                mike = zulu.isCollapsed;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            oscar = golf.bind(options)(oscar, report);
            var _closure2_slot1 = oscar;
            options = _closure1_slot3;
            golf = options.useCallback;
            report = new Array(2);
            report[0] = verify;
            report[1] = oscar;
            mike = function() {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 15;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.setRecentlyActiveCollapsed;
                mike = _closure2_slot0;
                entity = _closure2_slot1;
                entity = !entity;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            report = golf.bind(options)(mike, report);
            mike = _closure1_slot18;
            entity = {};
            golf = 16;
            options = yankee[golf];
            options = offset.bind(zulu)(options);
            verify = options.intl;
            options = verify.string;
            golf = yankee[golf];
            golf = offset.bind(zulu)(golf);
            golf = golf.t;
            golf = golf.uZyspK;
            golf = options.bind(verify)(golf);
            entity['name'] = golf;
            entity['collapsed'] = oscar;
            entity['onPress'] = report;
            entity['withMarginTop'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        zulu['RecentlyActiveCategory'] = tango;
        mike = function(argFoo) { // Original name: SuggestedCategory
            entity = argFoo;
            options = entity.guildId;
            var _closure2_slot0 = options;
            golf = entity.channelIds;
            var _closure2_slot1 = golf;
            tango = entity.withMarginTop;
            oscar = _closure1_slot3;
            report = oscar.useCallback;
            zulu = new Array(2);
            zulu[0] = options;
            zulu[1] = golf;
            mike = function() {
                golf = _closure1_slot0;
                options = _closure1_slot2;
                entity = 17;
                mike = options[entity];
                entity = undefined;
                tango = golf.bind(entity)(mike);
                zulu = tango.showSimpleActionSheet;
                mike = {};
                report = 'REDESIGN_SUGGESTED_CHANNELS_CLEAR';
                mike['key'] = report;
                oscar = {};
                report = 16;
                verify = options[report];
                verify = golf.bind(entity)(verify);
                offset = verify.intl;
                verify = offset.string;
                report = options[report];
                report = golf.bind(entity)(report);
                report = report.t;
                report = report.VkKicX;
                report = verify.bind(offset)(report);
                oscar['label'] = report;
                report = function() { // Original name: onPress
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 18;
                    mike = mike[entity];
                    entity = undefined;
                    report = zulu.bind(entity)(mike);
                    tango = report.clearRecentChannels;
                    zulu = _closure2_slot0;
                    mike = _closure2_slot1;
                    mike = tango.bind(report)(zulu, mike);
                    return entity;
                };
                oscar['onPress'] = report;
                report = 19;
                report = options[report];
                report = golf.bind(entity)(report);
                report = report.CircleXIcon;
                oscar['IconComponent'] = report;
                report = new Array(1);
                report[0] = oscar;
                mike['options'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            report = report.bind(oscar)(mike, zulu);
            zulu = _closure1_slot17;
            mike = {};
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            oscar = 16;
            golf = offset[oscar];
            entity = undefined;
            golf = verify.bind(entity)(golf);
            options = golf.intl;
            golf = options.string;
            oscar = offset[oscar];
            oscar = verify.bind(entity)(oscar);
            oscar = oscar.t;
            oscar = oscar.HbJ7eH;
            oscar = golf.bind(options)(oscar);
            mike['name'] = oscar;
            mike['onPress'] = report;
            mike['withMarginTop'] = tango;
            entity = zulu.bind(entity)(mike);
            return entity;
        };
        zulu['SuggestedCategory'] = mike;
        return entity;
    }
})();