// app/modules/instant_invite/native/action_sheet/invite_to_guilds/GuildInviteActionSheet.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    romeo = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = romeo;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: GuildList
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            verify = entity.recipientId;
            var _closure2_slot0 = verify;
            zulu = entity.query;
            entity = entity.source;
            var _closure2_slot1 = entity;
            tango = undefined;
            var _closure2_slot3 = tango;
            entity = _closure1_slot9;
            entity = entity.bind(tango)();
            var _closure2_slot2 = entity;
            golf = _closure1_slot0;
            options = _closure1_slot2;
            entity = 11;
            entity = options[entity];
            mike = golf.bind(tango)(entity);
            entity = mike.useServerInviteRows;
            zulu = entity.bind(mike)(verify, zulu);
            mike = _closure1_slot3;
            entity = 2;
            mike = mike.bind(tango)(zulu, entity);
            offset = 0;
            zulu = mike[offset];
            entity = 1;
            mike = mike[entity];
            entity = 12;
            entity = options[entity];
            verify = golf.bind(tango)(entity);
            options = verify.useStateFromStores;
            entity = _closure1_slot6;
            golf = new Array(1);
            golf[0] = entity;
            entity = function() {
                entity = _closure1_slot6;
                entity = entity.keyboardHeight;
                return entity;
            };
            entity = options.bind(verify)(golf, entity);
            golf = zulu.length;
            if(!(offset === golf)) { _fun00002_ip = 171; continue _fun00001 }
 159:
            golf = mike.length;
            if(!(offset !== golf)) { _fun00002_ip = 308; continue _fun00001 }
 171:
            options = {};
            foxtrot = _closure1_slot0;
            backup = _closure1_slot2;
            verify = 8;
            golf = backup[verify];
            golf = foxtrot.bind(tango)(golf);
            romeo = golf.intl;
            yankee = romeo.string;
            golf = backup[verify];
            golf = foxtrot.bind(tango)(golf);
            golf = golf.t;
            golf = golf.u+Itho;
            golf = yankee.bind(romeo)(golf);
            options['title'] = golf;
            options['data'] = zulu;
            golf = new Array(2);
            golf[0] = options;
            options = {};
            yankee = backup[verify];
            yankee = foxtrot.bind(tango)(yankee);
            romeo = yankee.intl;
            yankee = romeo.string;
            verify = backup[verify];
            verify = foxtrot.bind(tango)(verify);
            verify = verify.t;
            verify = verify.c5T+X1;
            verify = yankee.bind(romeo)(verify);
            options['title'] = verify;
            options['data'] = mike;
            golf[1] = options;
            _fun00002_ip = 312; continue _fun00001;
 308:
            golf = new Array(0);
 312:
            verify = _closure1_slot1;
            yankee = _closure1_slot2;
            options = 14;
            options = yankee[options];
            options = verify.bind(tango)(options);
            options = options.bind(tango)();
            verify = options.bottom;
            zulu = zulu.length;
            yankee = offset === zulu;
            if(yankee) { _fun00002_ip = 362; continue _fun00001 }
 353:
            mike = mike.length;
            yankee = offset === mike;
 362:
            _closure2_slot3 = yankee;
            if(!(offset !== entity)) { _fun00002_ip = 373; continue _fun00001 }
 370:
            verify = entity;
 373:
            zulu = _closure1_slot7;
            mike = _closure1_slot0;
            options = _closure1_slot2;
            entity = 15;
            entity = options[entity];
            entity = mike.bind(tango)(entity);
            mike = entity.UserProfileStackedActionSheetSectionList;
            entity = {};
            options = function(argFoo) { // Original name: renderItem
                entity = argFoo;
                oscar = entity.item;
                report = entity.style;
                tango = _closure1_slot7;
                mike = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 16;
                entity = zulu[entity];
                zulu = undefined;
                mike = mike.bind(zulu)(entity);
                entity = {};
                entity['row'] = oscar;
                golf = _closure2_slot0;
                entity['recipientId'] = golf;
                oscar = _closure2_slot1;
                entity['source'] = oscar;
                entity['style'] = report;
                entity = tango.bind(zulu)(mike, entity);
                return entity;
            };
            entity['renderItem'] = options;
            options = {};
            offset = 0;
            if(!yankee) { _fun00002_ip = 427; continue _fun00001 }
 424:
            offset = 24;
 427:
            options['paddingTop'] = offset;
            options['paddingBottom'] = verify;
            entity['contentContainerStyle'] = options;
            entity['sections'] = golf;
            golf = function(argFoo) { // Original name: renderSectionHeader
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = argFoo;
                    golf = entity.section;
                    zulu = _closure2_slot3;
                    entity = null;
                    if(zulu) { _fun00004_ip = 123; continue _fun00003 }
 20:
                    zulu = golf.data;
                    tango = zulu.length;
                    zulu = 0;
                    zulu = tango > zulu;
                    mike = null;
                    if(!zulu) { _fun00004_ip = 120; continue _fun00003 }
 41:
                    oscar = _closure1_slot7;
                    tango = _closure1_slot0;
                    report = _closure1_slot2;
                    zulu = 13;
                    zulu = report[zulu];
                    report = undefined;
                    zulu = tango.bind(report)(zulu);
                    tango = zulu.Text;
                    zulu = {'style': null, 'variant': 'text-sm/semibold', 'color': 'header-secondary'};
                    options = _closure2_slot2;
                    options = options.sectionTitle;
                    zulu['style'] = options;
                    golf = golf.title;
                    zulu['children'] = golf;
                    mike = oscar.bind(report)(tango, zulu);
 120:
                    entity = mike;
 123:
                    return entity;
                }
            };
            entity['renderSectionHeader'] = golf;
            golf = true;
            entity['stickySectionHeadersEnabled'] = golf;
            oscar = function(argFoo) { // Original name: keyExtractor
                entity = argFoo;
                entity = entity.guild;
                entity = entity.id;
                return entity;
            };
            entity['keyExtractor'] = oscar;
            report = _closure1_slot10;
            entity['ListEmptyComponent'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot11 = entity;
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
    tango = 1;
    golf = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(golf);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot7 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot8 = tango;
    tango = 5;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {};
    yankee = 6;
    offset = oscar[yankee];
    offset = romeo.bind(entity)(offset);
    offset = offset.spacing;
    offset = offset.PX_16;
    verify['paddingHorizontal'] = offset;
    tango['content'] = verify;
    verify = {};
    offset = 8;
    verify['rowGap'] = offset;
    offset = oscar[yankee];
    offset = romeo.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.BACKGROUND_MOBILE_SECONDARY;
    verify['backgroundColor'] = offset;
    tango['searchbarWrapper'] = verify;
    verify = {'paddingBottom': 6, 'paddingTop': 24};
    offset = 24;
    yankee = oscar[yankee];
    yankee = romeo.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.BACKGROUND_MOBILE_SECONDARY;
    verify['backgroundColor'] = yankee;
    tango['sectionTitle'] = verify;
    verify = {};
    verify['margin'] = offset;
    tango['emptyStateContainer'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot9 = tango;
    tango = function() { // Original name: EmptyGuildList
        entity = _closure1_slot9;
        tango = undefined;
        oscar = entity.bind(tango)();
        zulu = _closure1_slot7;
        offset = _closure1_slot0;
        golf = _closure1_slot2;
        entity = 7;
        entity = golf[entity];
        entity = offset.bind(tango)(entity);
        mike = entity.ThemedEmptyState;
        entity = {};
        oscar = oscar.emptyStateContainer;
        entity['containerStyle'] = oscar;
        oscar = 8;
        options = golf[oscar];
        options = offset.bind(tango)(options);
        yankee = options.intl;
        verify = yankee.string;
        options = golf[oscar];
        options = offset.bind(tango)(options);
        options = options.t;
        options = options.2bfiLi;
        options = verify.bind(yankee)(options);
        entity['title'] = options;
        options = golf[oscar];
        options = offset.bind(tango)(options);
        verify = options.intl;
        options = verify.string;
        oscar = golf[oscar];
        oscar = offset.bind(tango)(oscar);
        oscar = oscar.t;
        oscar = oscar.V6nAfH;
        oscar = options.bind(verify)(oscar);
        entity['body'] = oscar;
        oscar = _closure1_slot1;
        report = 9;
        report = golf[report];
        report = oscar.bind(tango)(report);
        entity['darkSource'] = report;
        report = 10;
        report = golf[report];
        report = oscar.bind(tango)(report);
        entity['lightSource'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot10 = tango;
    tango = 21;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/instant_invite/native/action_sheet/invite_to_guilds/GuildInviteActionSheet.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: _default
        entity = argFoo;
        offset = entity.recipientId;
        verify = entity.source;
        entity = _closure1_slot9;
        tango = undefined;
        options = entity.bind(tango)();
        zulu = _closure1_slot4;
        mike = zulu.useState;
        entity = '';
        zulu = mike.bind(zulu)(entity);
        mike = _closure1_slot3;
        entity = 2;
        mike = mike.bind(tango)(zulu, entity);
        entity = 0;
        yankee = mike[entity];
        entity = 1;
        entity = mike[entity];
        var _closure2_slot0 = entity;
        zulu = _closure1_slot7;
        sizing = _closure1_slot0;
        source = _closure1_slot2;
        entity = 17;
        entity = source[entity];
        entity = sizing.bind(tango)(entity);
        mike = entity.BottomSheetTitleHeader;
        entity = {};
        kilo = 8;
        report = source[kilo];
        report = sizing.bind(tango)(report);
        romeo = report.intl;
        golf = romeo.string;
        report = source[kilo];
        report = sizing.bind(tango)(report);
        report = report.t;
        report = report.HvoZQE;
        report = golf.bind(romeo)(report);
        entity['title'] = report;
        report = zulu.bind(tango)(mike, entity);
        zulu = _closure1_slot8;
        entity = 18;
        entity = source[entity];
        entity = sizing.bind(tango)(entity);
        mike = entity.BottomSheet;
        entity = {'scrollable': true, 'startExpanded': true};
        entity['header'] = report;
        report = options.content;
        entity['contentStyles'] = report;
        golf = _closure1_slot5;
        report = {};
        options = options.searchbarWrapper;
        report['style'] = options;
        foxtrot = _closure1_slot7;
        options = 19;
        options = source[options];
        options = sizing.bind(tango)(options);
        romeo = options.SearchField;
        options = {};
        backup = function(argFoo) { // Original name: onChange
            zulu = _closure2_slot0;
            entity = undefined;
            mike = argFoo;
            mike = zulu.bind(entity)(mike);
            return entity;
        };
        options['onChange'] = backup;
        backup = source[kilo];
        backup = sizing.bind(tango)(backup);
        result = backup.intl;
        output = result.string;
        backup = source[kilo];
        backup = sizing.bind(tango)(backup);
        backup = backup.t;
        backup = backup.uohsSk;
        backup = output.bind(result)(backup);
        options['placeholder'] = backup;
        romeo = foxtrot.bind(tango)(romeo, options);
        options = new Array(2);
        options[0] = romeo;
        backup = _closure1_slot7;
        romeo = 13;
        romeo = source[romeo];
        romeo = sizing.bind(tango)(romeo);
        foxtrot = romeo.Text;
        romeo = {'variant': 'text-xs/medium', 'color': 'text-secondary'};
        output = source[kilo];
        output = sizing.bind(tango)(output);
        result = output.intl;
        output = result.format;
        kilo = source[kilo];
        kilo = sizing.bind(tango)(kilo);
        kilo = kilo.t;
        sizing = kilo.4UyUHh;
        kilo = {};
        update = _closure1_slot1;
        echo = 20;
        echo = source[echo];
        echo = update.bind(tango)(echo);
        echo = echo.INVITE_OPTIONS_7_DAYS;
        echo = echo.label;
        kilo['xDays'] = echo;
        kilo = output.bind(result)(sizing, kilo);
        romeo['children'] = kilo;
        romeo = backup.bind(tango)(foxtrot, romeo);
        options[1] = romeo;
        report['children'] = options;
        golf = zulu.bind(tango)(golf, report);
        report = new Array(2);
        report[0] = golf;
        options = _closure1_slot7;
        golf = _closure1_slot11;
        oscar = {};
        oscar['query'] = yankee;
        oscar['recipientId'] = offset;
        oscar['source'] = verify;
        oscar = options.bind(tango)(golf, oscar);
        report[1] = oscar;
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();