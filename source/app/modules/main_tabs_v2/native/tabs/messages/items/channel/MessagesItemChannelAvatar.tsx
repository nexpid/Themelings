// app/modules/main_tabs_v2/native/tabs/messages/items/channel/MessagesItemChannelAvatar.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    golf = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(verify)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    golf = tango.bind(entity)(golf);
    tango = 1;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.MUTED_OPACITY_CONTENT;
    var _closure1_slot8 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot9 = tango;
    tango = 8;
    tango = oscar[tango];
    verify = report.bind(entity)(tango);
    options = verify.createStyles;
    tango = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = {};
            mike = {};
            oscar = _closure1_slot1;
            golf = _closure1_slot2;
            zulu = 9;
            options = golf[zulu];
            report = undefined;
            options = oscar.bind(report)(options);
            options = options.radii;
            options = options.round;
            mike['borderRadius'] = options;
            options = golf[zulu];
            options = oscar.bind(report)(options);
            options = options.spacing;
            options = options.PX_8;
            mike['marginRight'] = options;
            options = golf[zulu];
            options = oscar.bind(report)(options);
            options = options.spacing;
            options = options.PX_32;
            mike['width'] = options;
            zulu = golf[zulu];
            zulu = oscar.bind(report)(zulu);
            zulu = zulu.spacing;
            zulu = zulu.PX_32;
            mike['height'] = zulu;
            zulu = 1;
            report = argFoo;
            if(!report) { _fun00002_ip = 129; continue _fun00001 }
 125:
            zulu = _closure1_slot8;
 129:
            mike['opacity'] = zulu;
            entity['avatar'] = mike;
            return entity;
        }
    };
    tango = options.bind(verify)(tango);
    var _closure1_slot10 = tango;
    tango = golf.memo;
    mike = function(argFoo) { // Original name: MessagesItemChannelAvatar
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            mike = argFoo;
            options = mike.channel;
            var _closure2_slot0 = options;
            zulu = mike.hasUnreadMessages;
            var _closure2_slot1 = zulu;
            romeo = mike.isStreaming;
            zulu = mike.muted;
            oscar = mike.ignored;
            tango = mike.blocked;
            offset = mike.status;
            report = undefined;
            var _closure2_slot2 = report;
            var _closure2_slot3 = report;
            mike = _closure1_slot10;
            if(zulu) { _fun00004_ip = 76; continue _fun00003 }
 73:
            zulu = oscar;
 76:
            if(zulu) { _fun00004_ip = 82; continue _fun00003 }
 79:
            zulu = tango;
 82:
            oscar = mike.bind(report)(zulu);
            zulu = _closure1_slot4;
            mike = zulu.getId;
            mike = mike.bind(zulu)();
            _closure2_slot2 = mike;
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 10;
            golf = tango[mike];
            backup = zulu.bind(report)(golf);
            foxtrot = backup.useStateFromStores;
            golf = _closure1_slot6;
            yankee = new Array(1);
            yankee[0] = golf;
            golf = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zulu = _closure1_slot6;
                    mike = zulu.getTypingUsers;
                    entity = _closure2_slot0;
                    entity = entity.id;
                    entity = mike.bind(zulu)(entity);
                    oscar = entity;
                    for(zulu in oscar)
 41:
                    {
 50:
                        mike = zulu;
                        entity = _closure2_slot2;
                        if(mike === entity) { _fun00006_ip = 41; continue _fun00005 }
 61:
                        entity = true;
                        return entity;
                    }
 65:
                    entity = false;
                    return entity;
                }
            };
            yankee = foxtrot.bind(backup)(yankee, golf);
            _closure2_slot3 = yankee;
            golf = tango[mike];
            kilo = zulu.bind(report)(golf);
            backup = kilo.useStateFromStores;
            golf = _closure1_slot3;
            foxtrot = new Array(1);
            foxtrot[0] = golf;
            golf = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    entity = _closure1_slot3;
                    entity = entity.useReducedMotion;
                    entity = !entity;
                    if(!entity) { _fun00008_ip = 36; continue _fun00007 }
 19:
                    mike = _closure2_slot3;
                    if(mike) { _fun00008_ip = 33; continue _fun00007 }
 29:
                    mike = _closure2_slot1;
 33:
                    entity = mike;
 36:
                    return entity;
                }
            };
            golf = backup.bind(kilo)(foxtrot, golf);
            foxtrot = tango[mike];
            sizing = zulu.bind(report)(foxtrot);
            kilo = sizing.useStateFromStores;
            foxtrot = _closure1_slot7;
            backup = new Array(1);
            backup[0] = foxtrot;
            foxtrot = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zulu = _closure1_slot7;
                    mike = zulu.getUser;
                    report = _closure2_slot0;
                    entity = report.isDM;
                    oscar = entity.bind(report)();
                    report = true;
                    entity = undefined;
                    if(!(report === oscar)) { _fun00010_ip = 52; continue _fun00009 }
 38:
                    report = _closure2_slot0;
                    tango = report.getRecipientId;
                    entity = tango.bind(report)();
 52:
                    entity = mike.bind(zulu)(entity);
                    return entity;
                }
            };
            sizing = kilo.bind(sizing)(backup, foxtrot);
            mike = tango[mike];
            tango = zulu.bind(report)(mike);
            zulu = tango.useStateFromStores;
            foxtrot = _closure1_slot5;
            mike = new Array(1);
            mike[0] = foxtrot;
            entity = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    zulu = _closure2_slot0;
                    entity = zulu.isDM;
                    entity = entity.bind(zulu)();
                    zulu = !entity;
                    entity = !zulu;
                    if(zulu) { _fun00012_ip = 58; continue _fun00011 }
 26:
                    tango = _closure1_slot5;
                    zulu = tango.isMobileOnline;
                    report = _closure2_slot0;
                    mike = report.getRecipientId;
                    mike = mike.bind(report)();
                    entity = zulu.bind(tango)(mike);
 58:
                    return entity;
                }
            };
            kilo = zulu.bind(tango)(mike, entity);
            entity = options.isGroupDM;
            entity = entity.bind(options)();
            if(entity) { _fun00004_ip = 451; continue _fun00003 }
 292:
            foxtrot = null;
            mike = foxtrot != sizing;
            entity = null;
            if(!mike) { _fun00004_ip = 449; continue _fun00003 }
 306:
            tango = _closure1_slot9;
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            backup = 12;
            mike = mike[backup];
            zulu = zulu.bind(report)(mike);
            mike = {};
            mike['user'] = sizing;
            output = sizing.avatarDecoration;
            mike['avatarDecoration'] = output;
            mike['guildId'] = report;
            mike['isMobileOnline'] = kilo;
            kilo = sizing.isSystemUser;
            kilo = kilo.bind(sizing)();
            foxtrot = null;
            if(kilo) { _fun00004_ip = 374; continue _fun00003 }
 371:
            foxtrot = offset;
 374:
            mike['status'] = foxtrot;
            mike['streaming'] = romeo;
            romeo = oscar.avatar;
            mike['style'] = romeo;
            foxtrot = _closure1_slot0;
            romeo = _closure1_slot2;
            romeo = romeo[backup];
            romeo = foxtrot.bind(report)(romeo);
            romeo = romeo.AvatarSizes;
            romeo = romeo.REFRESH_MEDIUM_32;
            mike['size'] = romeo;
            mike['animate'] = golf;
            mike['typing'] = yankee;
            yankee = true;
            mike['autoStatusCutout'] = yankee;
            entity = tango.bind(report)(zulu, mike);
 449:
            _fun00004_ip = 538; continue _fun00003;
 451:
            tango = _closure1_slot9;
            zulu = _closure1_slot1;
            yankee = _closure1_slot2;
            mike = 11;
            mike = yankee[mike];
            zulu = zulu.bind(report)(mike);
            mike = {};
            mike['status'] = offset;
            offset = _closure1_slot0;
            verify = 12;
            verify = yankee[verify];
            verify = offset.bind(report)(verify);
            verify = verify.AvatarSizes;
            verify = verify.REFRESH_MEDIUM_32;
            mike['size'] = verify;
            mike['channel'] = options;
            mike['animate'] = golf;
            oscar = oscar.avatar;
            mike['style'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 538:
            return entity;
        }
    };
    mike = tango.bind(golf)(mike);
    tango = 13;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/tabs/messages/items/channel/MessagesItemChannelAvatar.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();