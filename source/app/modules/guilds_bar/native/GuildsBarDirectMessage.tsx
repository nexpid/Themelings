// app/modules/guilds_bar/native/GuildsBarDirectMessage.tsx
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
    var _closure1_slot3 = golf;
    tango = 1;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    yankee = tango.GUILD_ITEM_SIZE;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ChannelTypes;
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
    tango = {};
    offset = {};
    offset['width'] = yankee;
    offset['height'] = yankee;
    tango['dm'] = offset;
    tango = options.bind(verify)(tango);
    var _closure1_slot10 = tango;
    tango = golf.memo;
    mike = function(argFoo) { // Original name: GuildsBarDirectMessage
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            entity = entity.channelId;
            var _closure2_slot0 = entity;
            entity = _closure1_slot10;
            tango = undefined;
            foxtrot = entity.bind(tango)();
            oscar = _closure1_slot0;
            report = _closure1_slot2;
            entity = 9;
            mike = report[entity];
            golf = oscar.bind(tango)(mike);
            mike = golf.useGuildsBarAnimatedWrapperStyles;
            verify = true;
            kilo = mike.bind(golf)(verify, verify);
            mike = 10;
            golf = report[mike];
            romeo = oscar.bind(tango)(golf);
            yankee = romeo.useStateFromStores;
            golf = _closure1_slot5;
            options = new Array(1);
            options[0] = golf;
            golf = function() {
                zulu = _closure1_slot5;
                mike = zulu.getMentionCountForPrivateChannel;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                entity = entity.count;
                return entity;
            };
            romeo = yankee.bind(romeo)(options, golf);
            var _closure2_slot1 = romeo;
            mike = report[mike];
            options = oscar.bind(tango)(mike);
            golf = options.useStateFromStoresObject;
            mike = _closure1_slot4;
            oscar = new Array(3);
            oscar[0] = mike;
            mike = _closure1_slot7;
            oscar[1] = mike;
            mike = _closure1_slot6;
            oscar[2] = mike;
            mike = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    tango = _closure1_slot4;
                    zulu = tango.getChannel;
                    mike = _closure2_slot0;
                    tango = zulu.bind(tango)(mike);
                    mike = null;
                    zulu = mike == tango;
                    oscar = undefined;
                    options = undefined;
                    if(zulu) { _fun00004_ip = 42; continue _fun00003 }
 37:
                    options = tango.type;
 42:
                    zulu = _closure1_slot8;
                    report = zulu.DM;
                    zulu = undefined;
                    if(!(options === report)) { _fun00004_ip = 83; continue _fun00003 }
 58:
                    verify = _closure1_slot7;
                    options = verify.getUser;
                    report = tango.getRecipientId;
                    report = report.bind(tango)();
                    zulu = options.bind(verify)(report);
 83:
                    if(!(mike == tango)) { _fun00004_ip = 144; continue _fun00003 }
 87:
                    verify = _closure1_slot0;
                    offset = _closure1_slot2;
                    mike = 12;
                    report = offset[mike];
                    report = verify.bind(oscar)(report);
                    options = report.intl;
                    report = options.string;
                    mike = offset[mike];
                    mike = verify.bind(oscar)(mike);
                    mike = mike.t;
                    mike = mike.zLZPmp;
                    mike = report.bind(options)(mike);
                    _fun00004_ip = 195; continue _fun00003;
 144:
                    report = _closure1_slot1;
                    options = _closure1_slot2;
                    entity = 11;
                    entity = options[entity];
                    report = report.bind(oscar)(entity);
                    entity = {};
                    entity['channel'] = tango;
                    golf = _closure2_slot1;
                    options = 0;
                    options = golf > options;
                    entity['unread'] = options;
                    entity['mentionCount'] = golf;
                    mike = report.bind(oscar)(entity);
 195:
                    entity = {};
                    entity['channel'] = tango;
                    entity['dmRecipient'] = zulu;
                    entity['label'] = mike;
                    return entity;
                }
            };
            mike = golf.bind(options)(oscar, mike);
            yankee = mike.channel;
            var _closure2_slot2 = yankee;
            options = mike.dmRecipient;
            var _closure2_slot3 = options;
            backup = mike.label;
            mike = _closure1_slot1;
            oscar = 13;
            oscar = report[oscar];
            golf = mike.bind(tango)(oscar);
            oscar = {};
            oscar['mentionCount'] = romeo;
            golf = golf.bind(tango)(oscar);
            oscar = golf.badge;
            golf = golf.cutouts;
            output = _closure1_slot3;
            sizing = output.useMemo;
            romeo = new Array(2);
            romeo[0] = yankee;
            romeo[1] = options;
            options = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = _closure2_slot2;
                    tango = null;
                    mike = tango != entity;
                    report = undefined;
                    entity = undefined;
                    if(!mike) { _fun00006_ip = 70; continue _fun00005 }
 20:
                    oscar = _closure2_slot2;
                    mike = oscar.isDM;
                    mike = mike.bind(oscar)();
                    entity = undefined;
                    if(!mike) { _fun00006_ip = 70; continue _fun00005 }
 39:
                    mike = _closure2_slot3;
                    tango = tango == mike;
                    mike = undefined;
                    if(tango) { _fun00006_ip = 67; continue _fun00005 }
 52:
                    tango = _closure2_slot3;
                    zulu = tango.getAvatarSource;
                    mike = zulu.bind(tango)(report);
 67:
                    entity = mike;
 70:
                    return entity;
                }
            };
            romeo = sizing.bind(output)(options, romeo);
            sizing = output.useMemo;
            options = new Array(1);
            options[0] = yankee;
            zulu = function() {
                entity = {};
                zulu = function() { // Original name: onPress
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        zulu = _closure2_slot2;
                        mike = null;
                        if(!(mike != zulu)) { _fun00008_ip = 58; continue _fun00007 }
 13:
                        tango = _closure1_slot0;
                        zulu = _closure1_slot2;
                        mike = 14;
                        zulu = zulu[mike];
                        mike = undefined;
                        zulu = tango.bind(mike)(zulu);
                        mike = zulu.transitionToChannel;
                        entity = _closure2_slot2;
                        entity = entity.id;
                        entity = mike.bind(zulu)(entity);
 58:
                        entity = undefined;
                        return entity;
                    }
                };
                entity['onPress'] = zulu;
                mike = function() { // Original name: onLongPress
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        zulu = _closure2_slot2;
                        mike = null;
                        if(!(mike != zulu)) { _fun00010_ip = 58; continue _fun00009 }
 13:
                        tango = _closure1_slot0;
                        zulu = _closure1_slot2;
                        mike = 15;
                        zulu = zulu[mike];
                        mike = undefined;
                        zulu = tango.bind(mike)(zulu);
                        mike = zulu.openChannelLongPressActionSheet;
                        entity = _closure2_slot2;
                        entity = entity.id;
                        entity = mike.bind(zulu)(entity);
 58:
                        entity = undefined;
                        return entity;
                    }
                };
                entity['onLongPress'] = mike;
                return entity;
            };
            options = sizing.bind(output)(zulu, options);
            zulu = _closure1_slot9;
            entity = report[entity];
            mike = mike.bind(tango)(entity);
            entity = {'selected': false, 'circle': null, 'unread': true};
            report = null;
            sizing = report != yankee;
            if(!sizing) { _fun00002_ip = 329; continue _fun00001 }
 319:
            output = yankee.isMultiUserDM;
            sizing = output.bind(yankee)();
 329:
            sizing = !sizing;
            entity['circle'] = sizing;
            entity['styles'] = kilo;
            entity['label'] = backup;
            entity['overState'] = tango;
            entity['config'] = options;
            entity['cutouts'] = golf;
            entity['externalChildren'] = oscar;
            if(!(report != yankee)) { _fun00002_ip = 383; continue _fun00001 }
 370:
            oscar = yankee.isMultiUserDM;
            oscar = oscar.bind(yankee)();
            if(oscar) { _fun00002_ip = 440; continue _fun00001 }
 383:
            oscar = report != romeo;
            report = null;
            if(!oscar) { _fun00002_ip = 438; continue _fun00001 }
 392:
            options = _closure1_slot9;
            golf = _closure1_slot1;
            backup = _closure1_slot2;
            oscar = 18;
            oscar = backup[oscar];
            golf = golf.bind(tango)(oscar);
            oscar = {};
            foxtrot = foxtrot.dm;
            oscar['style'] = foxtrot;
            oscar['source'] = romeo;
            report = options.bind(tango)(golf, oscar);
 438:
            _fun00002_ip = 539; continue _fun00001;
 440:
            options = _closure1_slot9;
            golf = _closure1_slot1;
            romeo = _closure1_slot2;
            oscar = 16;
            oscar = romeo[oscar];
            golf = golf.bind(tango)(oscar);
            oscar = {};
            oscar['channel'] = yankee;
            yankee = _closure1_slot0;
            offset = 17;
            foxtrot = romeo[offset];
            foxtrot = yankee.bind(tango)(foxtrot);
            foxtrot = foxtrot.AvatarSizes;
            foxtrot = foxtrot.LARGE_48;
            oscar['size'] = foxtrot;
            offset = romeo[offset];
            offset = yankee.bind(tango)(offset);
            offset = offset.AvatarSizes;
            offset = offset.REFRESH_MEDIUM_32;
            oscar['pileSizeOverride'] = offset;
            oscar['animate'] = verify;
            report = options.bind(tango)(golf, oscar);
 539:
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    mike = tango.bind(golf)(mike);
    tango = 19;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guilds_bar/native/GuildsBarDirectMessage.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();