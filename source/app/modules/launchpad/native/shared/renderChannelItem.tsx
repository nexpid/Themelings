// app/modules/launchpad/native/shared/renderChannelItem.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: LaunchpadChannelIcon
        mike = argFoo;
        verify = mike.channel;
        var _closure2_slot0 = verify;
        mike = _closure1_slot9;
        tango = undefined;
        romeo = mike.bind(tango)();
        foxtrot = _closure1_slot1;
        offset = _closure1_slot2;
        mike = 8;
        mike = offset[mike];
        mike = foxtrot.bind(tango)(mike);
        kilo = mike.bind(tango)();
        golf = _closure1_slot0;
        mike = 9;
        mike = offset[mike];
        report = golf.bind(tango)(mike);
        zulu = report.useStateFromStores;
        options = _closure1_slot4;
        mike = new Array(1);
        mike[0] = options;
        entity = function() {
            zulu = _closure1_slot4;
            mike = zulu.getGuild;
            entity = _closure2_slot0;
            entity = entity.guild_id;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        sizing = zulu.bind(report)(mike, entity);
        zulu = _closure1_slot8;
        mike = _closure1_slot7;
        entity = {};
        yankee = _closure1_slot6;
        options = _closure1_slot3;
        report = {};
        romeo = romeo.guildBadgeIcon;
        report['style'] = romeo;
        backup = _closure1_slot6;
        romeo = 10;
        romeo = offset[romeo];
        foxtrot = foxtrot.bind(tango)(romeo);
        romeo = {};
        romeo['guild'] = sizing;
        kilo = kilo.icon;
        kilo = kilo.guildBadgeIconSize;
        romeo['size'] = kilo;
        romeo = backup.bind(tango)(foxtrot, romeo);
        report['children'] = romeo;
        options = yankee.bind(tango)(options, report);
        report = new Array(2);
        report[0] = options;
        options = _closure1_slot6;
        oscar = 11;
        oscar = offset[oscar];
        oscar = golf.bind(tango)(oscar);
        golf = oscar.ChannelIcon;
        oscar = {'channel': null, 'size': 'sm', 'wrapperSize': 32};
        oscar['channel'] = verify;
        oscar = options.bind(tango)(golf, oscar);
        report[1] = oscar;
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot10 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    options = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(options);
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.UnreadSetting;
    var _closure1_slot5 = tango;
    tango = 4;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot6 = golf;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.Fragment;
    var _closure1_slot7 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = function() {
        entity = {};
        mike = {'position': 'absolute', 'zIndex': 1, 'bottom': 4294967292, 'right': 4294967292, 'borderColor': null, 'borderWidth': 2, 'borderRadius': 6};
        report = _closure1_slot1;
        tango = _closure1_slot2;
        zulu = 7;
        tango = tango[zulu];
        zulu = undefined;
        zulu = report.bind(zulu)(tango);
        zulu = zulu.colors;
        zulu = zulu.BG_BASE_PRIMARY;
        mike['borderColor'] = zulu;
        entity['guildBadgeIcon'] = mike;
        return entity;
    };
    tango = golf.bind(options)(tango);
    var _closure1_slot9 = tango;
    tango = 16;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/launchpad/native/shared/renderChannelItem.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: renderChannelItem
        _fun121086: for(var _fun121086_ip = 0; ; ) switch(_fun121086_ip) {
 0:
            entity = argFoo;
            oscar = entity.channel;
            record = entity.subtitle;
            yankee = entity.unreadBadge;
            output = entity.mentionBadge;
            source = entity.locked;
            tango = undefined;
            if(!(source === tango)) { _fun121086_ip = 40; continue _fun121086 }
 38:
            source = false;
 40:
            config = entity.unread;
            if(!(config === tango)) { _fun121086_ip = 52; continue _fun121086 }
 50:
            config = false;
 52:
            sequence = entity.resolvedUnreadSetting;
            if(!(sequence === tango)) { _fun121086_ip = 75; continue _fun121086 }
 62:
            mike = _closure1_slot5;
            sequence = mike.ONLY_MENTIONS;
 75:
            echo = entity.live;
            if(!(echo === tango)) { _fun121086_ip = 87; continue _fun121086 }
 85:
            echo = false;
 87:
            vacuum = entity.muted;
            if(!(vacuum === tango)) { _fun121086_ip = 99; continue _fun121086 }
 97:
            vacuum = false;
 99:
            zulu = entity.latestMessageTimestamp;
            foxtrot = entity.end;
            update = entity.connected;
            result = entity.mentionCount;
            context = entity.channelName;
            report = entity.fontScale;
            sizing = entity.isSubscriptionGated;
            if(!(sizing === tango)) { _fun121086_ip = 146; continue _fun121086 }
 144:
            sizing = false;
 146:
            backup = entity.needSubscriptionToAccess;
            if(!(backup === tango)) { _fun121086_ip = 158; continue _fun121086 }
 156:
            backup = false;
 158:
            verify = null;
            entity = verify == zulu;
            control = null;
            if(entity) { _fun121086_ip = 208; continue _fun121086 }
 169:
            control = null;
            if(vacuum) { _fun121086_ip = 208; continue _fun121086 }
 174:
            mike = _closure1_slot0;
            golf = _closure1_slot2;
            entity = 12;
            entity = golf[entity];
            mike = mike.bind(tango)(entity);
            entity = mike.getRelativeTimestamp;
            control = entity.bind(mike)(zulu);
 208:
            sierra = _closure1_slot1;
            lima = _closure1_slot2;
            kilo = 8;
            entity = lima[kilo];
            entity = sierra.bind(tango)(entity);
            whiskey = entity.bind(tango)();
            entity = 13;
            entity = lima[entity];
            zulu = sierra.bind(tango)(entity);
            golf = _closure1_slot8;
            mike = _closure1_slot7;
            entity = {};
            options = new Array(4);
            options[0] = yankee;
            papa = _closure1_slot6;
            romeo = _closure1_slot3;
            yankee = {};
            target = {'position': 'relative', 'borderRadius': null, 'justifyContent': 'center', 'alignItems': 'center', 'flexShrink': 0, 'flexGrow': 0};
            status = 7;
            status = lima[status];
            status = sierra.bind(tango)(status);
            status = status.radii;
            status = status.round;
            target['borderRadius'] = status;
            status = whiskey.icon;
            status = status.wrapper;
            status = status.size;
            target['width'] = status;
            status = whiskey.icon;
            status = status.wrapper;
            status = status.size;
            target['height'] = status;
            status = whiskey.icon;
            quebec = status.margin;
            variable36 = target;
            status = copyDataProperties(variable36, quebec);
            yankee['style'] = target;
            target = oscar.isGroupDM;
            target = target.bind(oscar)();
            lima = _closure1_slot6;
            if(target) { _fun121086_ip = 414; continue _fun121086 }
 396:
            status = _closure1_slot10;
            target = {};
            target['channel'] = oscar;
            target = lima.bind(tango)(status, target);
            _fun121086_ip = 461; continue _fun121086;
 414:
            sierra = _closure1_slot1;
            equality = _closure1_slot2;
            status = 14;
            status = equality[status];
            sierra = sierra.bind(tango)(status);
            status = {};
            status['channel'] = oscar;
            whiskey = whiskey.icon;
            whiskey = whiskey.avatarSize;
            status['size'] = whiskey;
            target = lima.bind(tango)(sierra, status);
 461:
            yankee['children'] = target;
            yankee = papa.bind(tango)(romeo, yankee);
            options[1] = yankee;
            romeo = _closure1_slot1;
            papa = _closure1_slot2;
            yankee = 15;
            yankee = papa[yankee];
            romeo = romeo.bind(tango)(yankee);
            yankee = {};
            if(!(verify == context)) { _fun121086_ip = 506; continue _fun121086 }
 501:
            context = oscar.name;
 506:
            yankee['name'] = context;
            yankee['subtitle'] = record;
            yankee['unread'] = config;
            yankee['resolvedUnreadSetting'] = sequence;
            yankee['muted'] = vacuum;
            yankee['lastMessageTimestampString'] = control;
            yankee['channel'] = oscar;
            yankee['locked'] = source;
            yankee['connected'] = update;
            yankee['live'] = echo;
            yankee['mentionCount'] = result;
            yankee['mentionBadge'] = output;
            yankee['isSubscriptionGated'] = sizing;
            yankee['needSubscriptionToAccess'] = backup;
            yankee = romeo.bind(tango)(yankee);
            options[2] = yankee;
            yankee = verify != foxtrot;
            verify = null;
            if(!yankee) { _fun121086_ip = 623; continue _fun121086 }
 592:
            romeo = _closure1_slot6;
            yankee = _closure1_slot3;
            offset = {};
            backup = {};
            backup['paddingLeft'] = kilo;
            offset['style'] = backup;
            offset['children'] = foxtrot;
            verify = romeo.bind(tango)(yankee, offset);
 623:
            options[3] = verify;
            entity['children'] = options;
            mike = golf.bind(tango)(mike, entity);
            entity = {};
            entity['channel'] = oscar;
            entity['fontScale'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = tango;
    mike = function(argFoo) { // Original name: getChannelAccessibilityProps
        entity = argFoo;
        verify = entity.channel;
        options = entity.unread;
        golf = entity.mentionCount;
        oscar = entity.userCount;
        report = entity.embeddedActivitiesCount;
        entity = {'accessible': true, 'accessibilityRole': 'button'};
        zulu = _closure1_slot1;
        tango = _closure1_slot2;
        mike = 5;
        mike = tango[mike];
        tango = undefined;
        zulu = zulu.bind(tango)(mike);
        mike = {};
        mike['channel'] = verify;
        mike['unread'] = options;
        mike['mentionCount'] = golf;
        mike['userCount'] = oscar;
        mike['embeddedActivitiesCount'] = report;
        mike = zulu.bind(tango)(mike);
        entity['accessibilityLabel'] = mike;
        return entity;
    };
    zulu['getChannelAccessibilityProps'] = mike;
    return entity;
})();