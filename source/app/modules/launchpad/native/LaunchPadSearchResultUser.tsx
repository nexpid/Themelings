// app/modules/launchpad/native/LaunchPadSearchResultUser.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    romeo = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = romeo;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: UserResult
        _fun121130: for(var _fun121130_ip = 0; ; ) switch(_fun121130_ip) {
 0:
            mike = argFoo;
            context = mike.user;
            var _closure2_slot0 = context;
            update = mike.comparator;
            record = mike.channel;
            config = mike.lastMessage;
            echo = mike.unread;
            zulu = undefined;
            if(!(echo === zulu)) { _fun121130_ip = 47; continue _fun121130 }
 45:
            echo = false;
 47:
            output = mike.mentionCount;
            if(!(output === zulu)) { _fun121130_ip = 59; continue _fun121130 }
 57:
            output = 0;
 59:
            result = mike.muted;
            if(!(result === zulu)) { _fun121130_ip = 71; continue _fun121130 }
 69:
            result = false;
 71:
            vacuum = mike.isTyping;
            if(!(vacuum === zulu)) { _fun121130_ip = 83; continue _fun121130 }
 81:
            vacuum = false;
 83:
            mike = _closure1_slot15;
            oscar = mike.bind(zulu)();
            tango = _closure1_slot1;
            report = _closure1_slot2;
            mike = 12;
            mike = report[mike];
            mike = tango.bind(zulu)(mike);
            target = mike.bind(zulu)();
            options = _closure1_slot3;
            golf = options.useCallback;
            mike = context.id;
            tango = new Array(1);
            tango[0] = mike;
            mike = function() {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 13;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.openPrivateChannel;
                mike = _closure2_slot0;
                report = mike.id;
                mike = new Array(1);
                mike[0] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            golf = golf.bind(options)(mike, tango);
            tango = _closure1_slot0;
            mike = 14;
            mike = report[mike];
            options = tango.bind(zulu)(mike);
            mike = options.useFontScale;
            verify = mike.bind(options)();
            mike = 15;
            options = report[mike];
            romeo = tango.bind(zulu)(options);
            yankee = romeo.useStateFromStores;
            options = _closure1_slot5;
            offset = new Array(1);
            offset[0] = options;
            options = function() {
                entity = _closure1_slot5;
                entity = entity.locale;
                return entity;
            };
            sizing = yankee.bind(romeo)(offset, options);
            options = report[mike];
            romeo = tango.bind(zulu)(options);
            yankee = romeo.useStateFromStores;
            options = _closure1_slot4;
            offset = new Array(1);
            offset[0] = options;
            options = function() {
                entity = _closure1_slot4;
                entity = entity.useReducedMotion;
                return entity;
            };
            papa = yankee.bind(romeo)(offset, options);
            mike = report[mike];
            report = tango.bind(zulu)(mike);
            tango = report.useStateFromStoresObject;
            options = _closure1_slot7;
            mike = new Array(1);
            mike[0] = options;
            entity = function() {
                entity = {};
                oscar = _closure1_slot7;
                report = oscar.isMobileOnline;
                mike = _closure2_slot0;
                tango = mike.id;
                tango = report.bind(oscar)(tango);
                entity['isMobileOnline'] = tango;
                oscar = _closure1_slot7;
                report = oscar.getStatus;
                tango = mike.id;
                tango = report.bind(oscar)(tango);
                entity['status'] = tango;
                tango = _closure1_slot7;
                zulu = tango.getActivities;
                mike = mike.id;
                mike = zulu.bind(tango)(mike);
                entity['activities'] = mike;
                return entity;
            };
            entity = tango.bind(report)(mike, entity);
            status = entity.isMobileOnline;
            lima = entity.status;
            sierra = entity.activities;
            source = null;
            entity = source != config;
            tango = undefined;
            if(!entity) { _fun121130_ip = 364; continue _fun121130 }
 328:
            mike = _closure1_slot1;
            report = _closure1_slot2;
            entity = 16;
            entity = report[entity];
            report = mike.bind(zulu)(entity);
            mike = report.extractTimestamp;
            entity = config.id;
            tango = mike.bind(report)(entity);
 364:
            entity = source != tango;
            kilo = null;
            if(!entity) { _fun121130_ip = 404; continue _fun121130 }
 373:
            mike = _closure1_slot0;
            report = _closure1_slot2;
            entity = 17;
            entity = report[entity];
            mike = mike.bind(zulu)(entity);
            entity = mike.getRelativeTimestamp;
            kilo = entity.bind(mike)(tango);
 404:
            entity = 'text-muted';
            sequence = entity;
            if(!echo) { _fun121130_ip = 428; continue _fun121130 }
 416:
            sequence = entity;
            if(result) { _fun121130_ip = 428; continue _fun121130 }
 422:
            sequence = 'text-normal';
 428:
            foxtrot = _closure1_slot1;
            whiskey = _closure1_slot2;
            entity = 18;
            entity = whiskey[entity];
            mike = foxtrot.bind(zulu)(entity);
            report = _closure1_slot12;
            tango = _closure1_slot0;
            entity = 19;
            entity = whiskey[entity];
            entity = tango.bind(zulu)(entity);
            tango = entity.PressableHighlight;
            entity = {};
            entity['onPress'] = golf;
            golf = oscar.pressableUnderlayColor;
            golf = golf.backgroundColor;
            entity['underlayColor'] = golf;
            golf = oscar.pressable;
            oscar = new Array(2);
            oscar[0] = golf;
            golf = {};
            options = target.container;
            options = options.borderRadius;
            golf['borderRadius'] = options;
            oscar[1] = golf;
            entity['style'] = oscar;
            oscar = 20;
            oscar = whiskey[oscar];
            options = foxtrot.bind(zulu)(oscar);
            offset = _closure1_slot14;
            golf = _closure1_slot13;
            oscar = {};
            control = _closure1_slot12;
            yankee = 21;
            yankee = whiskey[yankee];
            romeo = foxtrot.bind(zulu)(yankee);
            yankee = {};
            yankee['unread'] = echo;
            equality = _closure1_slot11;
            equality = equality.ALL_MESSAGES;
            yankee['resolvedUnreadSetting'] = equality;
            romeo = control.bind(zulu)(romeo, yankee);
            yankee = new Array(3);
            yankee[0] = romeo;
            control = _closure1_slot12;
            romeo = 22;
            romeo = whiskey[romeo];
            foxtrot = foxtrot.bind(zulu)(romeo);
            romeo = {};
            romeo['user'] = context;
            romeo['guildId'] = zulu;
            romeo['isMobileOnline'] = status;
            status = context.isSystemUser;
            whiskey = status.bind(context)();
            status = null;
            if(whiskey) { _fun121130_ip = 673; continue _fun121130 }
 654:
            whiskey = _closure1_slot10;
            whiskey = whiskey.OFFLINE;
            status = null;
            if(!(lima !== whiskey)) { _fun121130_ip = 673; continue _fun121130 }
 670:
            status = lima;
 673:
            romeo['status'] = status;
            lima = _closure1_slot1;
            whiskey = _closure1_slot2;
            status = 23;
            status = whiskey[status];
            status = lima.bind(zulu)(status);
            status = status.bind(zulu)(sierra);
            romeo['streaming'] = status;
            status = target.icon;
            status = status.margin;
            romeo['style'] = status;
            target = target.icon;
            target = target.avatarSize;
            romeo['size'] = target;
            papa = !papa;
            if(!papa) { _fun121130_ip = 755; continue _fun121130 }
 743:
            target = vacuum;
            if(target) { _fun121130_ip = 752; continue _fun121130 }
 749:
            target = echo;
 752:
            papa = target;
 755:
            romeo['animate'] = papa;
            romeo['typing'] = vacuum;
            vacuum = true;
            romeo['autoStatusCutout'] = vacuum;
            romeo = control.bind(zulu)(foxtrot, romeo);
            yankee[1] = romeo;
            foxtrot = _closure1_slot1;
            control = _closure1_slot2;
            romeo = 24;
            romeo = control[romeo];
            foxtrot = foxtrot.bind(zulu)(romeo);
            romeo = {};
            if(!(source == update)) { _fun121130_ip = 839; continue _fun121130 }
 808:
            vacuum = _closure1_slot1;
            papa = _closure1_slot2;
            control = 25;
            control = papa[control];
            vacuum = vacuum.bind(zulu)(control);
            control = vacuum.getUserTag;
            update = control.bind(vacuum)(context);
 839:
            romeo['name'] = update;
            control = source != config;
            update = undefined;
            if(!control) { _fun121130_ip = 916; continue _fun121130 }
 852:
            source = source != record;
            update = undefined;
            if(!source) { _fun121130_ip = 916; continue _fun121130 }
 861:
            vacuum = _closure1_slot12;
            control = _closure1_slot0;
            context = _closure1_slot2;
            source = 26;
            source = context[source];
            source = control.bind(zulu)(source);
            control = source.PrivateChannelRowPreview;
            source = {};
            source['channel'] = record;
            source['message'] = config;
            source['color'] = sequence;
            source['muted'] = result;
            update = vacuum.bind(zulu)(control, source);
 916:
            romeo['subtitle'] = update;
            romeo['unread'] = echo;
            echo = _closure1_slot11;
            echo = echo.ALL_MESSAGES;
            romeo['resolvedUnreadSetting'] = echo;
            romeo['muted'] = result;
            romeo['lastMessageTimestampString'] = kilo;
            romeo['mentionCount'] = output;
            kilo = _closure1_slot1;
            result = _closure1_slot2;
            backup = 27;
            backup = result[backup];
            kilo = kilo.bind(zulu)(backup);
            backup = {};
            backup['mentionCount'] = output;
            backup['locale'] = sizing;
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
        }
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo) { // Original name: UserResultWithChannel
        report = argFoo;
        entity = report.user;
        var _closure2_slot0 = entity;
        yankee = report.channel;
        var _closure2_slot1 = yankee;
        oscar = _closure1_slot0;
        offset = _closure1_slot2;
        zulu = 15;
        golf = offset[zulu];
        tango = undefined;
        romeo = oscar.bind(tango)(golf);
        verify = romeo.useStateFromStores;
        golf = _closure1_slot9;
        options = new Array(1);
        options[0] = golf;
        golf = function() {
            tango = _closure1_slot9;
            zulu = tango.isChannelMuted;
            entity = _closure2_slot1;
            mike = entity.id;
            entity = undefined;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        golf = verify.bind(romeo)(options, golf);
        options = 28;
        options = offset[options];
        verify = oscar.bind(tango)(options);
        options = verify.useBaseChannelUnreadBadgeState;
        options = options.bind(verify)(yankee, golf);
        verify = options.unread;
        options = options.mentionCount;
        zulu = offset[zulu];
        romeo = oscar.bind(tango)(zulu);
        oscar = romeo.useStateFromStores;
        foxtrot = _closure1_slot8;
        zulu = new Array(1);
        zulu[0] = foxtrot;
        mike = function() {
            tango = _closure1_slot8;
            zulu = tango.isTyping;
            mike = _closure2_slot1;
            mike = mike.id;
            entity = _closure2_slot0;
            entity = entity.id;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        oscar = oscar.bind(romeo)(zulu, mike);
        zulu = _closure1_slot1;
        mike = 29;
        mike = offset[mike];
        mike = zulu.bind(tango)(mike);
        offset = mike.bind(tango)(yankee, verify);
        zulu = _closure1_slot12;
        mike = _closure1_slot16;
        entity = {};
        kilo = entity;
        backup = report;
        report = copyDataProperties(kilo, backup);
        report = 'channel';
        entity[report] = yankee;
        report = 'lastMessage';
        entity[report] = offset;
        report = 'unread';
        entity[report] = verify;
        report = 'mentionCount';
        entity[report] = options;
        report = 'muted';
        entity[report] = golf;
        report = 'isTyping';
        entity[report] = oscar;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot17 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    golf = tango.bind(entity)(golf);
    var _closure1_slot3 = golf;
    yankee = 1;
    tango = oscar[yankee];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.StatusTypes;
    var _closure1_slot10 = tango;
    tango = 8;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.UnreadSetting;
    var _closure1_slot11 = tango;
    tango = 9;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.jsx;
    var _closure1_slot12 = options;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.Fragment;
    var _closure1_slot13 = options;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot14 = tango;
    tango = 10;
    tango = oscar[tango];
    verify = report.bind(entity)(tango);
    options = verify.createStyles;
    tango = {};
    offset = {};
    offset['flex'] = yankee;
    tango['pressable'] = offset;
    offset = {};
    yankee = 11;
    yankee = oscar[yankee];
    yankee = romeo.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.BACKGROUND_MODIFIER_ACTIVE;
    offset['backgroundColor'] = yankee;
    tango['pressableUnderlayColor'] = offset;
    tango = options.bind(verify)(tango);
    var _closure1_slot15 = tango;
    tango = golf.memo;
    mike = function(argFoo) {
        _fun121138: for(var _fun121138_ip = 0; ; ) switch(_fun121138_ip) {
 0:
            oscar = argFoo;
            mike = oscar.user;
            var _closure2_slot0 = mike;
            tango = _closure1_slot0;
            golf = _closure1_slot2;
            zulu = 15;
            options = golf[zulu];
            report = undefined;
            romeo = tango.bind(report)(options);
            yankee = romeo.useStateFromStores;
            options = _closure1_slot6;
            offset = new Array(1);
            offset[0] = options;
            verify = function() {
                zulu = _closure1_slot6;
                mike = zulu.getDMFromUserId;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            verify = yankee.bind(romeo)(offset, verify);
            var _closure2_slot1 = verify;
            zulu = golf[zulu];
            golf = tango.bind(report)(zulu);
            tango = golf.useStateFromStores;
            zulu = new Array(1);
            zulu[0] = options;
            entity = function() {
                zulu = _closure1_slot6;
                mike = zulu.getChannel;
                entity = _closure2_slot1;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            golf = tango.bind(golf)(zulu, entity);
            entity = null;
            if(!(entity == golf)) { _fun121138_ip = 142; continue _fun121138 }
 114:
            tango = _closure1_slot12;
            zulu = _closure1_slot16;
            entity = {};
            backup = entity;
            foxtrot = oscar;
            options = copyDataProperties(backup, foxtrot);
            entity = tango.bind(report)(zulu, entity);
            _fun121138_ip = 177; continue _fun121138;
 142:
            tango = _closure1_slot12;
            zulu = _closure1_slot17;
            mike = {};
            backup = mike;
            foxtrot = oscar;
            oscar = copyDataProperties(backup, foxtrot);
            oscar = 'channel';
            mike[oscar] = golf;
            entity = tango.bind(report)(zulu, mike);
 177:
            return entity;
        }
    };
    mike = tango.bind(golf)(mike);
    tango = 30;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/launchpad/native/LaunchPadSearchResultUser.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();