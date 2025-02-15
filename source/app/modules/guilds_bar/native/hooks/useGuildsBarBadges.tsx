// app/modules/guilds_bar/native/hooks/useGuildsBarBadges.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = ['guildActivityIndicatorSource'];
    var _closure1_slot3 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 1;
    options = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(options);
    var _closure1_slot5 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.StyleSheet;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot10 = tango;
    tango = 8;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot11 = tango;
    tango = 9;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.GuildFeatures;
    var _closure1_slot12 = golf;
    tango = tango.Permissions;
    var _closure1_slot13 = tango;
    tango = 10;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot14 = tango;
    golf = options.create;
    tango = {};
    verify = {'position': 'absolute', 'top': 1, 'right': 9, 'backgroundColor': 'transparent', 'borderColor': 'transparent'};
    tango['topRightBadge'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot15 = tango;
    tango = 17;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guilds_bar/native/hooks/useGuildsBarBadges.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar, argBaz) { // Original name: useGuildsBarBadges
        report = argFoo;
        var _closure2_slot0 = report;
        golf = _closure1_slot0;
        offset = _closure1_slot2;
        zulu = 11;
        entity = offset[zulu];
        oscar = undefined;
        romeo = golf.bind(oscar)(entity);
        yankee = romeo.useStateFromStores;
        entity = _closure1_slot9;
        verify = new Array(1);
        verify[0] = entity;
        options = function() {
            _fun114508: for(var _fun114508_ip = 0; ; ) switch(_fun114508_ip) {
 0:
                tango = _closure1_slot9;
                mike = tango.getGuild;
                entity = _closure2_slot0;
                report = mike.bind(tango)(entity);
                entity = null;
                tango = entity == report;
                mike = undefined;
                if(tango) { _fun114508_ip = 56; continue _fun114508 }
 35:
                tango = report.hasFeature;
                zulu = _closure1_slot12;
                zulu = zulu.MEMBER_VERIFICATION_MANUAL_APPROVAL;
                mike = tango.bind(report)(zulu);
 56:
                entity = entity != mike;
                if(!entity) { _fun114508_ip = 66; continue _fun114508 }
 63:
                entity = mike;
 66:
                return entity;
            }
        };
        options = yankee.bind(romeo)(verify, options);
        var _closure2_slot1 = options;
        verify = offset[zulu];
        foxtrot = golf.bind(oscar)(verify);
        romeo = foxtrot.useStateFromStores;
        verify = _closure1_slot7;
        yankee = new Array(3);
        yankee[0] = verify;
        verify = _closure1_slot11;
        yankee[1] = verify;
        verify = _closure1_slot8;
        yankee[2] = verify;
        verify = new Array(2);
        verify[0] = report;
        verify[1] = options;
        options = function() {
            _fun114509: for(var _fun114509_ip = 0; ; ) switch(_fun114509_ip) {
 0:
                entity = _closure2_slot1;
                if(!entity) { _fun114509_ip = 146; continue _fun114509 }
 13:
                report = _closure1_slot7;
                tango = report.getRequest;
                entity = _closure2_slot0;
                entity = tango.bind(report)(entity);
                report = _closure1_slot11;
                tango = report.getCurrentUser;
                report = tango.bind(report)();
                tango = null;
                if(!(tango != report)) { _fun114509_ip = 146; continue _fun114509 }
 54:
                if(!(tango != entity)) { _fun114509_ip = 146; continue _fun114509 }
 58:
                oscar = entity.userId;
                report = report.id;
                if(!(oscar === report)) { _fun114509_ip = 146; continue _fun114509 }
 72:
                golf = _closure1_slot8;
                oscar = golf.getMember;
                report = _closure2_slot0;
                zulu = entity.userId;
                zulu = oscar.bind(golf)(report, zulu);
                if(!(tango != zulu)) { _fun114509_ip = 150; continue _fun114509 }
 101:
                zulu = zulu.isPending;
                if(zulu) { _fun114509_ip = 150; continue _fun114509 }
 110:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                mike = 12;
                zulu = zulu[mike];
                mike = undefined;
                zulu = tango.bind(mike)(zulu);
                mike = zulu.isActionedAndNotAcked;
                mike = mike.bind(zulu)(entity);
                if(mike) { _fun114509_ip = 150; continue _fun114509 }
 146:
                mike = undefined;
                return mike;
 150:
                entity = entity.applicationStatus;
                return entity;
            }
        };
        verify = romeo.bind(foxtrot)(yankee, options, verify);
        zulu = offset[zulu];
        yankee = golf.bind(oscar)(zulu);
        options = yankee.useStateFromStores;
        zulu = _closure1_slot10;
        golf = new Array(3);
        golf[0] = zulu;
        golf[1] = entity;
        entity = _closure1_slot6;
        golf[2] = entity;
        zulu = new Array(1);
        zulu[0] = report;
        entity = function() {
            _fun114510: for(var _fun114510_ip = 0; ; ) switch(_fun114510_ip) {
 0:
                tango = _closure1_slot9;
                zulu = tango.getGuild;
                mike = _closure2_slot0;
                golf = zulu.bind(tango)(mike);
                zulu = null;
                if(!(zulu != golf)) { _fun114510_ip = 59; continue _fun114510 }
 30:
                oscar = _closure1_slot10;
                tango = oscar.can;
                mike = _closure1_slot13;
                mike = mike.MANAGE_GUILD;
                mike = tango.bind(oscar)(mike, golf);
                if(mike) { _fun114510_ip = 63; continue _fun114510 }
 59:
                mike = false;
                return mike;
 63:
                tango = _closure1_slot6;
                mike = tango.getGuildIncident;
                entity = _closure2_slot0;
                tango = mike.bind(tango)(entity);
                oscar = zulu == golf;
                entity = undefined;
                if(oscar) { _fun114510_ip = 127; continue _fun114510 }
 91:
                oscar = golf.hasFeature;
                oscar = zulu == oscar;
                entity = undefined;
                if(oscar) { _fun114510_ip = 127; continue _fun114510 }
 106:
                oscar = golf.hasFeature;
                report = _closure1_slot12;
                report = report.INVITES_DISABLED;
                entity = oscar.bind(golf)(report);
 127:
                if(entity) { _fun114510_ip = 219; continue _fun114510 }
 130:
                report = zulu == tango;
                mike = undefined;
                if(report) { _fun114510_ip = 145; continue _fun114510 }
 139:
                mike = tango.invitesDisabledUntil;
 145:
                mike = zulu != mike;
                if(!mike) { _fun114510_ip = 216; continue _fun114510 }
 152:
                zulu = global;
                oscar = zulu.Date;
                verify = tango.invitesDisabledUntil;
                report = oscar.prototype;
                report = Object.create(report, {constructor: {value: oscar}});
                offset = report;
                tango = new offset[oscar](verify, options);
                tango = tango instanceof Object ? tango : report;
                zulu = zulu.Date;
                report = zulu.prototype;
                report = Object.create(report, {constructor: {value: zulu}});
                offset = report;
                zulu = new offset[zulu](verify);
                zulu = zulu instanceof Object ? zulu : report;
                mike = tango > zulu;
 216:
                entity = mike;
 219:
                return entity;
            }
        };
        options = options.bind(yankee)(golf, entity, zulu);
        zulu = _closure1_slot1;
        entity = 13;
        entity = offset[entity];
        entity = zulu.bind(oscar)(entity);
        entity = entity.bind(oscar)(report);
        var _closure2_slot2 = entity;
        report = _closure1_slot5;
        golf = report.useMemo;
        tango = new Array(1);
        tango[0] = entity;
        entity = function() {
            _fun114511: for(var _fun114511_ip = 0; ; ) switch(_fun114511_ip) {
 0:
                mike = _closure1_slot0;
                entity = _closure1_slot2;
                yankee = 14;
                entity = entity[yankee];
                report = undefined;
                oscar = mike.bind(report)(entity);
                tango = oscar.getMediaIcon;
                mike = _closure2_slot2;
                oscar = tango.bind(oscar)(mike);
                golf = {};
                tango = null;
                mike = tango == oscar;
                options = undefined;
                if(mike) { _fun114511_ip = 61; continue _fun114511 }
 56:
                options = oscar.source;
 61:
                verify = tango != options;
                mike = null;
                if(!verify) { _fun114511_ip = 73; continue _fun114511 }
 70:
                mike = options;
 73:
                golf['guildActivityIndicatorSource'] = mike;
                options = tango == oscar;
                mike = undefined;
                if(options) { _fun114511_ip = 92; continue _fun114511 }
 87:
                mike = oscar.icon;
 92:
                golf['IconComponent'] = mike;
                entity = _closure2_slot2;
                entity = entity.isCurrentUserConnected;
                golf['isCurrentUserConnected'] = entity;
                mike = golf.guildActivityIndicatorSource;
                oscar = _closure1_slot4;
                entity = _closure1_slot3;
                offset = oscar.bind(report)(golf, entity);
                entity = {};
                golf = tango != mike;
                oscar = null;
                if(!golf) { _fun114511_ip = 206; continue _fun114511 }
 143:
                verify = _closure1_slot14;
                options = _closure1_slot0;
                golf = _closure1_slot2;
                golf = golf[yankee];
                golf = options.bind(report)(golf);
                options = golf.GuildsBarActivityIndicatorBase;
                golf = {};
                yankee = _closure1_slot15;
                yankee = yankee.topRightBadge;
                golf['style'] = yankee;
                golf['source'] = mike;
                foxtrot = golf;
                romeo = offset;
                offset = copyDataProperties(foxtrot, romeo);
                oscar = verify.bind(report)(options, golf);
 206:
                entity['badgeTopRight'] = oscar;
                tango = tango != mike;
                mike = undefined;
                if(!tango) { _fun114511_ip = 257; continue _fun114511 }
 220:
                tango = _closure1_slot1;
                oscar = _closure1_slot2;
                zulu = 15;
                zulu = oscar[zulu];
                tango = tango.bind(report)(zulu);
                zulu = {};
                oscar = 'top-right';
                zulu['position'] = oscar;
                mike = tango.bind(report)(zulu);
 257:
                entity['cutoutTopRight'] = mike;
                return entity;
            }
        };
        entity = golf.bind(report)(entity, tango);
        tango = entity.badgeTopRight;
        golf = entity.cutoutTopRight;
        var _closure2_slot3 = golf;
        entity = 16;
        entity = offset[entity];
        zulu = zulu.bind(oscar)(entity);
        entity = {};
        offset = argBar;
        entity['mentionCount'] = offset;
        offset = argBaz;
        entity['isMentionLowImportance'] = offset;
        entity['joinRequestState'] = verify;
        entity['shouldShowInvitesDisabled'] = options;
        entity = zulu.bind(oscar)(entity);
        zulu = entity.badge;
        oscar = entity.cutout;
        var _closure2_slot4 = oscar;
        entity = {};
        entity['badgeTopRight'] = tango;
        entity['badgeBottomRight'] = zulu;
        tango = report.useMemo;
        zulu = new Array(2);
        zulu[0] = golf;
        zulu[1] = oscar;
        mike = function() {
            _fun114512: for(var _fun114512_ip = 0; ; ) switch(_fun114512_ip) {
 0:
                entity = new Array(0);
                zulu = _closure2_slot3;
                tango = null;
                if(!(tango != zulu)) { _fun114512_ip = 31; continue _fun114512 }
 17:
                report = entity.push;
                zulu = _closure2_slot3;
                zulu = report.bind(entity)(zulu);
 31:
                zulu = _closure2_slot4;
                if(!(tango != zulu)) { _fun114512_ip = 53; continue _fun114512 }
 39:
                zulu = entity.push;
                mike = _closure2_slot4;
                mike = zulu.bind(entity)(mike);
 53:
                return entity;
            }
        };
        mike = tango.bind(report)(mike, zulu);
        entity['cutouts'] = mike;
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();