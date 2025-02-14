// app/modules/guild_sidebar/native/DirectoryChannel.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    romeo = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = romeo;
    var _closure1_slot2 = oscar;
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
    tango = 1;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    yankee = tango.CHANNEL_MARGIN_VERTICAL;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.UnreadSetting;
    var _closure1_slot6 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot7 = tango;
    tango = 6;
    tango = oscar[tango];
    verify = report.bind(entity)(tango);
    options = verify.createStyles;
    tango = {};
    offset = {};
    offset['marginVertical'] = yankee;
    yankee = 8;
    offset['marginHorizontal'] = yankee;
    yankee = 7;
    yankee = oscar[yankee];
    yankee = romeo.bind(entity)(yankee);
    yankee = yankee.radii;
    yankee = yankee.md;
    offset['borderRadius'] = yankee;
    tango['container'] = offset;
    tango = options.bind(verify)(tango);
    var _closure1_slot8 = tango;
    tango = golf.memo;
    mike = function(argFoo) {
        _fun115942: for(var _fun115942_ip = 0; ; ) switch(_fun115942_ip) {
 0:
            entity = argFoo;
            zulu = entity.guildId;
            var _closure2_slot0 = zulu;
            tango = entity.selectedChannelId;
            golf = entity.selected;
            report = undefined;
            var _closure2_slot1 = report;
            entity = _closure1_slot8;
            verify = entity.bind(report)();
            options = _closure1_slot0;
            offset = _closure1_slot2;
            entity = 8;
            entity = offset[entity];
            yankee = options.bind(report)(entity);
            offset = yankee.useStateFromStores;
            entity = _closure1_slot4;
            options = new Array(2);
            options[0] = entity;
            entity = _closure1_slot5;
            options[1] = entity;
            entity = function() {
                _fun115943: for(var _fun115943_ip = 0; ; ) switch(_fun115943_ip) {
 0:
                    tango = _closure1_slot5;
                    mike = tango.getDirectoryChannelIds;
                    entity = _closure2_slot0;
                    report = mike.bind(tango)(entity);
                    tango = report.length;
                    mike = 0;
                    entity = null;
                    if(!(mike !== tango)) { _fun115943_ip = 56; continue _fun115943 }
 38:
                    tango = _closure1_slot4;
                    zulu = tango.getChannel;
                    mike = report[mike];
                    entity = zulu.bind(tango)(mike);
 56:
                    return entity;
                }
            };
            options = offset.bind(yankee)(options, entity);
            entity = null;
            offset = entity == options;
            yankee = undefined;
            if(offset) { _fun115942_ip = 117; continue _fun115942 }
 112:
            yankee = options.id;
 117:
            _closure2_slot1 = yankee;
            if(golf) { _fun115942_ip = 128; continue _fun115942 }
 124:
            golf = yankee === tango;
 128:
            offset = _closure1_slot3;
            romeo = offset.useCallback;
            tango = new Array(2);
            tango[0] = zulu;
            tango[1] = yankee;
            zulu = function() {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 9;
                mike = mike[entity];
                entity = undefined;
                report = zulu.bind(entity)(mike);
                tango = report.transitionToGuild;
                zulu = _closure2_slot0;
                mike = _closure2_slot1;
                mike = tango.bind(report)(zulu, mike);
                return entity;
            };
            foxtrot = romeo.bind(offset)(zulu, tango);
            tango = offset.useCallback;
            zulu = new Array(1);
            zulu[0] = yankee;
            mike = function() {
                _fun115945: for(var _fun115945_ip = 0; ; ) switch(_fun115945_ip) {
 0:
                    zulu = _closure2_slot1;
                    mike = null;
                    if(!(mike != zulu)) { _fun115945_ip = 53; continue _fun115945 }
 13:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 10;
                    zulu = zulu[mike];
                    mike = undefined;
                    zulu = tango.bind(mike)(zulu);
                    mike = zulu.openChannelLongPressActionSheet;
                    entity = _closure2_slot1;
                    entity = mike.bind(zulu)(entity);
 53:
                    entity = undefined;
                    return entity;
                }
            };
            romeo = tango.bind(offset)(mike, zulu);
            mike = entity == options;
            entity = null;
            if(mike) { _fun115942_ip = 328; continue _fun115942 }
 200:
            tango = _closure1_slot7;
            offset = _closure1_slot1;
            yankee = _closure1_slot2;
            mike = 11;
            mike = yankee[mike];
            zulu = offset.bind(report)(mike);
            mike = {};
            mike['onPress'] = foxtrot;
            mike['onLongPress'] = romeo;
            verify = verify.container;
            mike['style'] = verify;
            verify = true;
            mike['accessible'] = verify;
            verify = 'button';
            mike['accessibilityRole'] = verify;
            verify = 12;
            verify = yankee[verify];
            offset = offset.bind(report)(verify);
            verify = {};
            verify['channel'] = options;
            verify = offset.bind(report)(verify);
            mike['accessibilityLabel'] = verify;
            verify = {};
            verify['selected'] = golf;
            mike['accessibilityState'] = verify;
            mike['channel'] = options;
            mike['selected'] = golf;
            oscar = _closure1_slot6;
            oscar = oscar.ONLY_MENTIONS;
            mike['resolvedUnreadSetting'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 328:
            return entity;
        }
    };
    mike = tango.bind(golf)(mike);
    tango = 13;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_sidebar/native/DirectoryChannel.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();