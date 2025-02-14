// app/modules/launchpad/native/LaunchPadSearchResults.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    romeo = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = romeo;
    var _closure1_slot2 = golf;
    entity = function(argFoo) { // Original name: renderItemJSX
        _fun120992: for(var _fun120992_ip = 0; ; ) switch(_fun120992_ip) {
 0:
            entity = argFoo;
            oscar = entity.result;
            entity = null;
            if(!(entity != oscar)) { _fun120992_ip = 586; continue _fun120992 }
 18:
            tango = oscar.type;
            golf = _closure1_slot0;
            zulu = _closure1_slot2;
            options = 20;
            zulu = zulu[options];
            report = undefined;
            zulu = golf.bind(report)(zulu);
            zulu = zulu.AutocompleterResultTypes;
            zulu = zulu.GUILD;
            if(!(zulu !== tango)) { _fun120992_ip = 558; continue _fun120992 }
 67:
            golf = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[options];
            zulu = golf.bind(report)(zulu);
            zulu = zulu.AutocompleterResultTypes;
            zulu = zulu.TEXT_CHANNEL;
            if(!(zulu !== tango)) { _fun120992_ip = 500; continue _fun120992 }
 103:
            golf = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[options];
            zulu = golf.bind(report)(zulu);
            zulu = zulu.AutocompleterResultTypes;
            zulu = zulu.GROUP_DM;
            if(!(zulu !== tango)) { _fun120992_ip = 449; continue _fun120992 }
 139:
            golf = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[options];
            zulu = golf.bind(report)(zulu);
            zulu = zulu.AutocompleterResultTypes;
            zulu = zulu.VOICE_CHANNEL;
            if(!(zulu !== tango)) { _fun120992_ip = 405; continue _fun120992 }
 175:
            golf = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[options];
            zulu = golf.bind(report)(zulu);
            zulu = zulu.AutocompleterResultTypes;
            zulu = zulu.USER;
            if(!(zulu !== tango)) { _fun120992_ip = 350; continue _fun120992 }
 211:
            golf = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[options];
            zulu = golf.bind(report)(zulu);
            zulu = zulu.AutocompleterResultTypes;
            zulu = zulu.HEADER;
            if(!(zulu !== tango)) { _fun120992_ip = 300; continue _fun120992 }
 244:
            golf = _closure1_slot9;
            tango = _closure1_slot0;
            options = _closure1_slot2;
            zulu = 26;
            zulu = options[zulu];
            zulu = tango.bind(report)(zulu);
            tango = zulu.Text;
            zulu = {};
            options = 'text-sm/semibold';
            zulu['variant'] = options;
            options = oscar.type;
            zulu['children'] = options;
            zulu = golf.bind(report)(tango, zulu);
            return zulu;
 300:
            tango = _closure1_slot0;
            golf = _closure1_slot2;
            zulu = 25;
            zulu = golf[zulu];
            golf = tango.bind(report)(zulu);
            tango = golf.renderCategoryItem;
            zulu = {};
            options = oscar.record;
            options = options.text;
            zulu['name'] = options;
            zulu = tango.bind(golf)(zulu);
            return zulu;
 350:
            golf = _closure1_slot9;
            tango = _closure1_slot1;
            options = _closure1_slot2;
            zulu = 24;
            zulu = options[zulu];
            tango = tango.bind(report)(zulu);
            zulu = {};
            options = oscar.record;
            zulu['user'] = options;
            options = oscar.comparator;
            zulu['comparator'] = options;
            zulu = golf.bind(report)(tango, zulu);
            return zulu;
 405:
            golf = _closure1_slot9;
            tango = _closure1_slot1;
            options = _closure1_slot2;
            zulu = 23;
            zulu = options[zulu];
            tango = tango.bind(report)(zulu);
            zulu = {};
            options = oscar.record;
            zulu['channel'] = options;
            zulu = golf.bind(report)(tango, zulu);
            return zulu;
 449:
            golf = _closure1_slot9;
            tango = _closure1_slot1;
            options = _closure1_slot2;
            zulu = 22;
            zulu = options[zulu];
            tango = tango.bind(report)(zulu);
            zulu = {};
            options = oscar.record;
            zulu['channel'] = options;
            options = true;
            zulu['navigationReplace'] = options;
            zulu = golf.bind(report)(tango, zulu);
            return zulu;
 500:
            golf = _closure1_slot9;
            tango = _closure1_slot1;
            options = _closure1_slot2;
            zulu = 21;
            zulu = options[zulu];
            tango = tango.bind(report)(zulu);
            zulu = {'channel': null, 'navigationReplace': true, 'showGuildBadgeIcon': true};
            options = oscar.record;
            zulu['channel'] = options;
            zulu = golf.bind(report)(tango, zulu);
            return zulu;
 558:
            tango = _closure1_slot9;
            zulu = _closure1_slot14;
            mike = {};
            oscar = oscar.record;
            mike['guild'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return mike;
 586:
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function() { // Original name: renderSearchResultsSection
        tango = _closure1_slot9;
        zulu = _closure1_slot15;
        mike = {};
        options = _closure1_slot0;
        verify = _closure1_slot2;
        report = 27;
        oscar = verify[report];
        entity = undefined;
        oscar = options.bind(entity)(oscar);
        golf = oscar.intl;
        oscar = golf.string;
        report = verify[report];
        report = options.bind(entity)(report);
        report = report.t;
        report = report.zkoeq6;
        report = oscar.bind(golf)(report);
        mike['name'] = report;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    var _closure1_slot17 = entity;
    entity = global;
    options = entity.Object;
    report = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(options)(zulu, entity, tango);
    entity = 0;
    report = golf[entity];
    tango = argCorge;
    entity = undefined;
    options = tango.bind(entity)(report);
    var _closure1_slot3 = options;
    foxtrot = 1;
    tango = golf[foxtrot];
    tango = oscar.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot4 = tango;
    tango = 2;
    tango = golf[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = golf[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = golf[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    tango = tango.UnreadSetting;
    var _closure1_slot8 = tango;
    tango = 6;
    report = golf[tango];
    report = oscar.bind(entity)(report);
    report = report.jsx;
    var _closure1_slot9 = report;
    report = golf[tango];
    report = oscar.bind(entity)(report);
    report = report.Fragment;
    var _closure1_slot10 = report;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot11 = tango;
    tango = {};
    report = 24;
    tango['bottom'] = report;
    var _closure1_slot12 = tango;
    tango = 7;
    tango = golf[tango];
    verify = oscar.bind(entity)(tango);
    report = verify.createStyles;
    tango = {};
    offset = {};
    yankee = 16;
    offset['minHeight'] = yankee;
    tango['listContainer'] = offset;
    yankee = 8;
    offset = {'flex': 4294967295, 'marginTop': 8};
    tango['list'] = offset;
    offset = {};
    backup = golf[yankee];
    backup = romeo.bind(entity)(backup);
    backup = backup.radii;
    backup = backup.sm;
    offset['borderRadius'] = backup;
    tango['guildIcon'] = offset;
    offset = {};
    backup = golf[yankee];
    backup = romeo.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BACKGROUND_PRIMARY;
    offset['backgroundColor'] = backup;
    tango['categoryWrapper'] = offset;
    offset = {};
    offset['flex'] = foxtrot;
    tango['pressable'] = offset;
    offset = {};
    yankee = golf[yankee];
    yankee = romeo.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.BACKGROUND_MODIFIER_ACTIVE;
    offset['backgroundColor'] = yankee;
    tango['pressableUnderlayColor'] = offset;
    tango = report.bind(verify)(tango);
    var _closure1_slot13 = tango;
    report = options.memo;
    tango = function(argFoo) {
        mike = argFoo;
        backup = mike.guild;
        var _closure2_slot0 = backup;
        mike = _closure1_slot13;
        zulu = undefined;
        source = mike.bind(zulu)();
        kilo = _closure1_slot1;
        echo = _closure1_slot2;
        mike = 9;
        mike = echo[mike];
        mike = kilo.bind(zulu)(mike);
        control = mike.bind(zulu)();
        oscar = _closure1_slot3;
        report = oscar.useCallback;
        mike = backup.id;
        tango = new Array(1);
        tango[0] = mike;
        mike = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 10;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.transitionToGuild;
            mike = _closure2_slot0;
            mike = mike.id;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        oscar = report.bind(oscar)(mike, tango);
        tango = _closure1_slot0;
        mike = 11;
        report = echo[mike];
        verify = tango.bind(zulu)(report);
        options = verify.useStateFromStoresObject;
        report = _closure1_slot6;
        golf = new Array(1);
        golf[0] = report;
        report = function() {
            entity = {};
            tango = _closure1_slot6;
            report = tango.hasUnread;
            mike = _closure2_slot0;
            zulu = mike.id;
            zulu = report.bind(tango)(zulu);
            entity['unread'] = zulu;
            report = tango.getMentionCount;
            zulu = mike.id;
            zulu = report.bind(tango)(zulu);
            entity['mentionCount'] = zulu;
            zulu = tango.getIsMentionLowImportance;
            mike = mike.id;
            mike = zulu.bind(tango)(mike);
            entity['isMentionLowImportance'] = mike;
            return entity;
        };
        report = options.bind(verify)(golf, report);
        vacuum = report.unread;
        result = report.mentionCount;
        sizing = report.isMentionLowImportance;
        report = 12;
        report = echo[report];
        golf = tango.bind(zulu)(report);
        report = golf.useFontScale;
        verify = report.bind(golf)();
        mike = echo[mike];
        golf = tango.bind(zulu)(mike);
        report = golf.useStateFromStores;
        options = _closure1_slot5;
        mike = new Array(1);
        mike[0] = options;
        entity = function() {
            entity = _closure1_slot5;
            entity = entity.locale;
            return entity;
        };
        output = report.bind(golf)(mike, entity);
        entity = 13;
        entity = echo[entity];
        mike = kilo.bind(zulu)(entity);
        report = _closure1_slot9;
        entity = 14;
        entity = echo[entity];
        entity = tango.bind(zulu)(entity);
        tango = entity.PressableHighlight;
        entity = {};
        entity['onPress'] = oscar;
        oscar = source.pressableUnderlayColor;
        oscar = oscar.backgroundColor;
        entity['underlayColor'] = oscar;
        golf = source.pressable;
        oscar = new Array(2);
        oscar[0] = golf;
        golf = {};
        options = control.container;
        options = options.borderRadius;
        golf['borderRadius'] = options;
        oscar[1] = golf;
        entity['style'] = oscar;
        oscar = 15;
        oscar = echo[oscar];
        options = kilo.bind(zulu)(oscar);
        offset = _closure1_slot11;
        golf = _closure1_slot10;
        oscar = {};
        update = _closure1_slot9;
        yankee = 16;
        yankee = echo[yankee];
        foxtrot = kilo.bind(zulu)(yankee);
        yankee = {};
        yankee['unread'] = vacuum;
        vacuum = _closure1_slot8;
        vacuum = vacuum.ALL_MESSAGES;
        yankee['resolvedUnreadSetting'] = vacuum;
        foxtrot = update.bind(zulu)(foxtrot, yankee);
        yankee = new Array(3);
        yankee[0] = foxtrot;
        update = _closure1_slot9;
        romeo = 17;
        romeo = echo[romeo];
        foxtrot = kilo.bind(zulu)(romeo);
        romeo = {};
        vacuum = control.icon;
        vacuum = vacuum.guildIconSize;
        romeo['size'] = vacuum;
        romeo['guild'] = backup;
        vacuum = source.guildIcon;
        source = new Array(2);
        source[0] = vacuum;
        control = control.icon;
        control = control.margin;
        source[1] = control;
        romeo['style'] = source;
        romeo = update.bind(zulu)(foxtrot, romeo);
        yankee[1] = romeo;
        romeo = 18;
        romeo = echo[romeo];
        foxtrot = kilo.bind(zulu)(romeo);
        romeo = {};
        backup = backup.name;
        romeo['name'] = backup;
        backup = 19;
        backup = echo[backup];
        kilo = kilo.bind(zulu)(backup);
        backup = {};
        backup['mentionCount'] = result;
        backup['locale'] = output;
        backup['isMentionLowImportance'] = sizing;
        backup = kilo.bind(zulu)(backup);
        romeo['mentionBadge'] = backup;
        romeo = foxtrot.bind(zulu)(romeo);
        yankee[2] = romeo;
        oscar['children'] = yankee;
        golf = offset.bind(zulu)(golf, oscar);
        oscar = {};
        oscar['fontScale'] = verify;
        oscar = options.bind(zulu)(golf, oscar);
        entity['children'] = oscar;
        entity = report.bind(zulu)(tango, entity);
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    tango = report.bind(options)(tango);
    var _closure1_slot14 = tango;
    report = options.memo;
    tango = function(argFoo) {
        entity = argFoo;
        verify = entity.name;
        options = entity.onPress;
        golf = entity.note;
        mike = _closure1_slot13;
        tango = undefined;
        oscar = mike.bind(tango)();
        zulu = _closure1_slot0;
        report = _closure1_slot2;
        mike = 25;
        mike = report[mike];
        report = zulu.bind(tango)(mike);
        zulu = report.renderCategoryItem;
        mike = {};
        mike['name'] = verify;
        mike['onPress'] = options;
        mike['note'] = golf;
        report = zulu.bind(report)(mike);
        zulu = _closure1_slot9;
        mike = _closure1_slot4;
        entity = {};
        oscar = oscar.categoryWrapper;
        entity['style'] = oscar;
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    tango = report.bind(options)(tango);
    var _closure1_slot15 = tango;
    report = options.memo;
    tango = function(argFoo) { // Original name: InitialResultsInner
        _fun120999: for(var _fun120999_ip = 0; ; ) switch(_fun120999_ip) {
 0:
            mike = argFoo;
            report = mike.history;
            var _closure2_slot0 = report;
            foxtrot = mike.unreads;
            var _closure2_slot1 = foxtrot;
            output = mike.toggleExpandedHistory;
            var _closure2_slot2 = output;
            options = mike.expandedHistory;
            var _closure2_slot3 = options;
            offset = mike.selectedGuildId;
            var _closure2_slot4 = offset;
            mike = _closure1_slot13;
            tango = undefined;
            result = mike.bind(tango)();
            zulu = _closure1_slot0;
            verify = _closure1_slot2;
            mike = 11;
            mike = verify[mike];
            romeo = zulu.bind(tango)(mike);
            golf = romeo.useStateFromStores;
            mike = _closure1_slot7;
            oscar = new Array(1);
            oscar[0] = mike;
            mike = function() {
                _fun121000: for(var _fun121000_ip = 0; ; ) switch(_fun121000_ip) {
 0:
                    zulu = _closure2_slot4;
                    entity = null;
                    if(!(entity == zulu)) { _fun121000_ip = 17; continue _fun121000 }
 13:
                    zulu = undefined;
                    return zulu;
 17:
                    tango = _closure1_slot7;
                    zulu = tango.getGuild;
                    mike = _closure2_slot4;
                    mike = zulu.bind(tango)(mike);
                    zulu = entity == mike;
                    entity = undefined;
                    if(zulu) { _fun121000_ip = 52; continue _fun121000 }
 47:
                    entity = mike.name;
 52:
                    return entity;
                }
            };
            mike = golf.bind(romeo)(oscar, mike);
            var _closure2_slot5 = mike;
            backup = _closure1_slot1;
            oscar = 28;
            oscar = verify[oscar];
            oscar = backup.bind(tango)(oscar);
            oscar = oscar.bind(tango)();
            oscar = oscar.height;
            golf = _closure1_slot3;
            sizing = golf.useCallback;
            kilo = new Array(2);
            kilo[0] = report;
            kilo[1] = foxtrot;
            romeo = function(argFoo, argBar) {
                _fun121001: for(var _fun121001_ip = 0; ; ) switch(_fun121001_ip) {
 0:
                    report = argBar;
                    zulu = _closure1_slot16;
                    mike = {};
                    tango = 0;
                    entity = argFoo;
                    if(!(tango !== entity)) { _fun121001_ip = 34; continue _fun121001 }
 21:
                    entity = _closure2_slot1;
                    entity = entity[report];
                    _fun121001_ip = 45; continue _fun121001;
 34:
                    tango = _closure2_slot0;
                    entity = tango[report];
 45:
                    mike['result'] = entity;
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
                    return entity;
                }
            };
            kilo = sizing.bind(golf)(romeo, kilo);
            sizing = golf.useCallback;
            romeo = new Array(3);
            romeo[0] = output;
            romeo[1] = options;
            romeo[2] = mike;
            mike = function(argFoo) {
                _fun121002: for(var _fun121002_ip = 0; ; ) switch(_fun121002_ip) {
 0:
                    tango = _closure1_slot9;
                    zulu = _closure1_slot15;
                    mike = 0;
                    entity = argFoo;
                    if(!(mike !== entity)) { _fun121002_ip = 175; continue _fun121002 }
 23:
                    mike = {};
                    report = _closure2_slot5;
                    entity = null;
                    if(!(entity == report)) { _fun121002_ip = 97; continue _fun121002 }
 38:
                    options = _closure1_slot0;
                    offset = _closure1_slot2;
                    entity = 27;
                    report = offset[entity];
                    golf = undefined;
                    report = options.bind(golf)(report);
                    oscar = report.intl;
                    report = oscar.string;
                    entity = offset[entity];
                    entity = options.bind(golf)(entity);
                    entity = entity.t;
                    entity = entity.ieCAhI;
                    entity = report.bind(oscar)(entity);
                    _fun121002_ip = 166; continue _fun121002;
 97:
                    offset = _closure1_slot0;
                    romeo = _closure1_slot2;
                    report = 27;
                    golf = romeo[report];
                    oscar = undefined;
                    golf = offset.bind(oscar)(golf);
                    options = golf.intl;
                    golf = options.formatToPlainString;
                    report = romeo[report];
                    report = offset.bind(oscar)(report);
                    report = report.t;
                    oscar = report.+lFj39;
                    report = {};
                    verify = _closure2_slot5;
                    report['guildName'] = verify;
                    entity = golf.bind(options)(oscar, report);
 166:
                    mike['name'] = entity;
                    _fun121002_ip = 384; continue _fun121002;
 175:
                    entity = {};
                    offset = _closure1_slot0;
                    romeo = _closure1_slot2;
                    kilo = 27;
                    report = romeo[kilo];
                    verify = undefined;
                    report = offset.bind(verify)(report);
                    golf = report.intl;
                    oscar = golf.string;
                    report = romeo[kilo];
                    report = offset.bind(verify)(report);
                    report = report.t;
                    report = report.Xmh+5e;
                    report = oscar.bind(golf)(report);
                    entity['name'] = report;
                    oscar = _closure2_slot3;
                    options = _closure1_slot9;
                    golf = 26;
                    golf = romeo[golf];
                    golf = offset.bind(verify)(golf);
                    golf = golf.Text;
                    offset = {'variant': 'text-xs/semibold', 'color': 'text-brand'};
                    backup = _closure1_slot0;
                    yankee = _closure1_slot2;
                    romeo = yankee[kilo];
                    romeo = backup.bind(verify)(romeo);
                    foxtrot = romeo.intl;
                    romeo = foxtrot.string;
                    yankee = yankee[kilo];
                    yankee = backup.bind(verify)(yankee);
                    yankee = yankee.t;
                    if(oscar) { _fun121002_ip = 344; continue _fun121002 }
 324:
                    oscar = yankee./XSoJy;
                    oscar = romeo.bind(foxtrot)(oscar);
                    offset['children'] = oscar;
                    oscar = offset;
                    _fun121002_ip = 362; continue _fun121002;
 344:
                    yankee = yankee.3BdvgI;
                    yankee = romeo.bind(foxtrot)(yankee);
                    offset['children'] = yankee;
                    oscar = offset;
 362:
                    oscar = options.bind(verify)(golf, oscar);
                    entity['note'] = oscar;
                    report = _closure2_slot2;
                    entity['onPress'] = report;
                    mike = entity;
 384:
                    entity = undefined;
                    entity = tango.bind(entity)(zulu, mike);
                    return entity;
                }
            };
            romeo = sizing.bind(golf)(mike, romeo);
            mike = 9;
            mike = verify[mike];
            mike = backup.bind(tango)(mike);
            output = mike.bind(tango)();
            var _closure2_slot6 = output;
            mike = 12;
            mike = verify[mike];
            zulu = zulu.bind(tango)(mike);
            mike = zulu.useFontScale;
            verify = mike.bind(zulu)();
            var _closure2_slot7 = verify;
            zulu = golf.useCallback;
            mike = new Array(4);
            mike[0] = verify;
            mike[1] = report;
            mike[2] = foxtrot;
            mike[3] = output;
            entity = function(argFoo, argBar) {
                _fun121003: for(var _fun121003_ip = 0; ; ) switch(_fun121003_ip) {
 0:
                    tango = argBar;
                    entity = null;
                    mike = entity == tango;
                    zulu = 0;
                    entity = 0;
                    if(mike) { _fun121003_ip = 191; continue _fun121003 }
 19:
                    mike = argFoo;
                    if(!(zulu !== mike)) { _fun121003_ip = 39; continue _fun121003 }
 26:
                    mike = _closure2_slot1;
                    mike = mike[tango];
                    _fun121003_ip = 50; continue _fun121003;
 39:
                    zulu = _closure2_slot0;
                    mike = zulu[tango];
 50:
                    tango = mike.type;
                    report = _closure1_slot0;
                    oscar = _closure1_slot2;
                    mike = 20;
                    mike = oscar[mike];
                    oscar = undefined;
                    mike = report.bind(oscar)(mike);
                    mike = mike.AutocompleterResultTypes;
                    mike = mike.VOICE_CHANNEL;
                    if(!(tango !== mike)) { _fun121003_ip = 130; continue _fun121003 }
 96:
                    tango = _closure1_slot1;
                    report = _closure1_slot2;
                    mike = 29;
                    mike = report[mike];
                    tango = tango.bind(oscar)(mike);
                    mike = _closure2_slot7;
                    mike = tango.bind(oscar)(mike);
                    _fun121003_ip = 188; continue _fun121003;
 130:
                    tango = _closure1_slot1;
                    report = _closure1_slot2;
                    zulu = 29;
                    zulu = report[zulu];
                    report = tango.bind(oscar)(zulu);
                    tango = _closure2_slot7;
                    tango = report.bind(oscar)(tango);
                    zulu = _closure2_slot6;
                    zulu = zulu.voiceUsers;
                    zulu = zulu.height;
                    tango = tango + zulu;
                    zulu = 2;
                    mike = tango - zulu;
 188:
                    entity = mike;
 191:
                    return entity;
                }
            };
            sizing = zulu.bind(golf)(entity, mike);
            entity = global;
            golf = entity.Math;
            zulu = golf.min;
            mike = report.length;
            if(options) { _fun120999_ip = 354; continue _fun120999 }
 320:
            backup = entity.Math;
            verify = backup.max;
            options = foxtrot.length;
            entity = 5;
            options = entity - options;
            entity = 2;
            entity = verify.bind(backup)(options, entity);
            _fun120999_ip = 359; continue _fun120999;
 354:
            entity = report.length;
 359:
            backup = zulu.bind(golf)(mike, entity);
            zulu = _closure1_slot9;
            mike = _closure1_slot4;
            entity = {};
            golf = result.listContainer;
            entity['style'] = golf;
            report = report.length;
            golf = 0;
            if(!(!(report > golf))) { _fun120999_ip = 413; continue _fun120999 }
 396:
            report = foxtrot.length;
            golf = report > golf;
            report = null;
            if(!golf) { _fun120999_ip = 574; continue _fun120999 }
 413:
            verify = _closure1_slot9;
            options = _closure1_slot1;
            echo = _closure1_slot2;
            golf = 30;
            golf = echo[golf];
            options = options.bind(tango)(golf);
            golf = {'optimizeListItemRender': true, 'batchesToRender': 6};
            result = result.list;
            golf['style'] = result;
            output = output.category;
            output = output.height;
            golf['sectionSize'] = output;
            golf['itemSize'] = sizing;
            golf['renderItem'] = kilo;
            golf['renderSection'] = romeo;
            romeo = new Array(2);
            romeo[0] = backup;
            foxtrot = foxtrot.length;
            romeo[1] = foxtrot;
            golf['sections'] = romeo;
            romeo = 8;
            golf['sectionFooterSize'] = romeo;
            golf['footerSize'] = romeo;
            yankee = _closure1_slot12;
            golf['scrollIndicatorInsets'] = yankee;
            golf['chunkBase'] = oscar;
            oscar = 'always';
            golf['keyboardShouldPersistTaps'] = oscar;
            oscar = null;
            yankee = oscar != offset;
            oscar = 'default';
            if(!yankee) { _fun120999_ip = 567; continue _fun120999 }
 564:
            oscar = offset;
 567:
            report = verify.bind(tango)(options, golf, oscar);
 574:
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    tango = report.bind(options)(tango);
    report = options.memo;
    mike = function(argFoo) { // Original name: SearchResultsInner
        _fun121004: for(var _fun121004_ip = 0; ; ) switch(_fun121004_ip) {
 0:
            mike = argFoo;
            yankee = mike.results;
            var _closure2_slot0 = yankee;
            mike = mike.query;
            zulu = _closure1_slot13;
            tango = undefined;
            kilo = zulu.bind(tango)();
            zulu = _closure1_slot1;
            golf = _closure1_slot2;
            report = 28;
            report = golf[report];
            report = zulu.bind(tango)(report);
            report = report.bind(tango)();
            verify = report.height;
            oscar = _closure1_slot3;
            romeo = oscar.useCallback;
            options = new Array(1);
            options[0] = yankee;
            report = function(argFoo, argBar) {
                zulu = _closure1_slot16;
                mike = {};
                tango = _closure2_slot0;
                entity = argBar;
                entity = tango[entity];
                mike['result'] = entity;
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                return entity;
            };
            romeo = romeo.bind(oscar)(report, options);
            options = oscar.useRef;
            report = null;
            sizing = options.bind(oscar)(report);
            var _closure2_slot1 = sizing;
            foxtrot = oscar.useEffect;
            options = new Array(1);
            options[0] = mike;
            mike = function() {
                _fun121006: for(var _fun121006_ip = 0; ; ) switch(_fun121006_ip) {
 0:
                    entity = _closure2_slot1;
                    zulu = entity.current;
                    tango = null;
                    entity = tango == zulu;
                    if(entity) { _fun121006_ip = 31; continue _fun121006 }
 21:
                    mike = zulu.scrollToTop;
                    entity = tango == mike;
 31:
                    if(entity) { _fun121006_ip = 47; continue _fun121006 }
 34:
                    mike = zulu.scrollToTop;
                    entity = false;
                    entity = mike.bind(zulu)(entity);
 47:
                    entity = undefined;
                    return entity;
                }
            };
            mike = foxtrot.bind(oscar)(mike, options);
            mike = 9;
            mike = golf[mike];
            mike = zulu.bind(tango)(mike);
            backup = mike.bind(tango)();
            var _closure2_slot2 = backup;
            zulu = _closure1_slot0;
            mike = 12;
            mike = golf[mike];
            zulu = zulu.bind(tango)(mike);
            mike = zulu.useFontScale;
            golf = mike.bind(zulu)();
            var _closure2_slot3 = golf;
            zulu = oscar.useCallback;
            mike = new Array(3);
            mike[0] = golf;
            mike[1] = yankee;
            mike[2] = backup;
            entity = function(argFoo, argBar) {
                _fun121007: for(var _fun121007_ip = 0; ; ) switch(_fun121007_ip) {
 0:
                    tango = argBar;
                    entity = null;
                    mike = entity == tango;
                    entity = 0;
                    if(mike) { _fun121007_ip = 163; continue _fun121007 }
 17:
                    mike = _closure2_slot0;
                    mike = mike[tango];
                    report = mike.type;
                    golf = _closure1_slot0;
                    oscar = _closure1_slot2;
                    mike = 20;
                    mike = oscar[mike];
                    oscar = undefined;
                    mike = golf.bind(oscar)(mike);
                    mike = mike.AutocompleterResultTypes;
                    mike = mike.VOICE_CHANNEL;
                    if(!(report !== mike)) { _fun121007_ip = 105; continue _fun121007 }
 74:
                    report = _closure1_slot1;
                    golf = _closure1_slot2;
                    mike = 29;
                    mike = golf[mike];
                    report = report.bind(oscar)(mike);
                    mike = _closure2_slot3;
                    mike = report.bind(oscar)(mike);
                    _fun121007_ip = 160; continue _fun121007;
 105:
                    report = _closure1_slot1;
                    golf = _closure1_slot2;
                    tango = 29;
                    tango = golf[tango];
                    report = report.bind(oscar)(tango);
                    tango = _closure2_slot3;
                    tango = report.bind(oscar)(tango);
                    zulu = _closure2_slot2;
                    zulu = zulu.voiceUsers;
                    zulu = zulu.height;
                    tango = tango + zulu;
                    zulu = 2;
                    mike = tango - zulu;
 160:
                    entity = mike;
 163:
                    return entity;
                }
            };
            foxtrot = zulu.bind(oscar)(entity, mike);
            zulu = _closure1_slot9;
            mike = _closure1_slot4;
            entity = {};
            oscar = kilo.listContainer;
            entity['style'] = oscar;
            golf = yankee.length;
            oscar = 0;
            oscar = golf > oscar;
            if(!oscar) { _fun121004_ip = 400; continue _fun121004 }
 255:
            options = _closure1_slot9;
            golf = _closure1_slot1;
            output = _closure1_slot2;
            oscar = 30;
            oscar = output[oscar];
            golf = golf.bind(tango)(oscar);
            oscar = {'ref': null, 'optimizeListItemRender': true, 'batchesToRender': 6};
            oscar['ref'] = sizing;
            kilo = kilo.list;
            oscar['style'] = kilo;
            backup = backup.category;
            backup = backup.height;
            oscar['sectionSize'] = backup;
            oscar['itemSize'] = foxtrot;
            foxtrot = _closure1_slot17;
            oscar['renderSection'] = foxtrot;
            oscar['renderItem'] = romeo;
            romeo = yankee.length;
            yankee = new Array(1);
            yankee[0] = romeo;
            oscar['sections'] = yankee;
            yankee = 16;
            oscar['footerSize'] = yankee;
            offset = _closure1_slot12;
            oscar['scrollIndicatorInsets'] = offset;
            oscar['chunkBase'] = verify;
            verify = 'always';
            oscar['keyboardShouldPersistTaps'] = verify;
            report = options.bind(tango)(golf, oscar);
 400:
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    mike = report.bind(options)(mike);
    report = 31;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/launchpad/native/LaunchPadSearchResults.tsx';
    report = oscar.bind(golf)(report);
    zulu['InitialResults'] = tango;
    zulu['SearchResults'] = mike;
    return entity;
})();