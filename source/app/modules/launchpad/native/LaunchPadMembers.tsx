// app/modules/launchpad/native/LaunchPadMembers.tsx
export default (function(_, argBar, argBaz, argCorge, __, argFred, argPlugh) {
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
    yankee = 0;
    golf = oscar[yankee];
    tango = argCorge;
    entity = undefined;
    golf = tango.bind(entity)(golf);
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    verify = tango.View;
    var _closure1_slot3 = verify;
    verify = tango.StyleSheet;
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
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot6 = tango;
    options = verify.create;
    tango = {};
    offset = {};
    romeo = 16;
    offset['minHeight'] = romeo;
    tango['wrapper'] = offset;
    offset = {};
    offset['flex'] = yankee;
    tango['listStyle'] = offset;
    offset = {};
    yankee = 20;
    offset['padding'] = yankee;
    tango['emptyWrapper'] = offset;
    offset = {};
    yankee = 'center';
    offset['textAlign'] = yankee;
    tango['emptyText'] = offset;
    tango = options.bind(verify)(tango);
    var _closure1_slot7 = tango;
    tango = golf.memo;
    mike = function() { // Original name: LaunchPadMembers
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 5;
            entity = zulu[entity];
            report = undefined;
            tango = mike.bind(report)(entity);
            zulu = tango.useStateFromStoresObject;
            entity = _closure1_slot5;
            mike = new Array(2);
            mike[0] = entity;
            entity = _closure1_slot4;
            mike[1] = entity;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = _closure1_slot5;
                    entity = mike.getCurrentlySelectedChannelId;
                    report = entity.bind(mike)();
                    entity = null;
                    oscar = entity != report;
                    mike = undefined;
                    zulu = undefined;
                    if(!oscar) { _fun00004_ip = 33; continue _fun00003 }
 30:
                    zulu = report;
 33:
                    report = _closure1_slot4;
                    tango = report.getChannel;
                    tango = tango.bind(report)(zulu);
                    if(!(entity != zulu)) { _fun00004_ip = 140; continue _fun00003 }
 51:
                    if(!(entity != tango)) { _fun00004_ip = 140; continue _fun00003 }
 55:
                    entity = tango.isPrivate;
                    entity = entity.bind(tango)();
                    if(entity) { _fun00004_ip = 122; continue _fun00003 }
 68:
                    report = tango.guild_id;
                    entity = tango.isThread;
                    entity = entity.bind(tango)();
                    tango = {};
                    tango['channelId'] = zulu;
                    tango['guildId'] = report;
                    if(entity) { _fun00004_ip = 109; continue _fun00003 }
 96:
                    entity = 'guild';
                    tango['type'] = entity;
                    entity = tango;
                    _fun00004_ip = 120; continue _fun00003;
 109:
                    report = 'thread';
                    tango['type'] = report;
                    entity = tango;
 120:
                    return entity;
 122:
                    entity = {};
                    entity['channelId'] = zulu;
                    zulu = 'private';
                    entity['type'] = zulu;
                    return entity;
 140:
                    entity = {};
                    entity['channelId'] = mike;
                    mike = 'none';
                    entity['type'] = mike;
                    return entity;
                }
            };
            oscar = zulu.bind(tango)(mike, entity);
            mike = oscar.type;
            entity = 'private';
            if(!(entity !== mike)) { _fun00002_ip = 482; continue _fun00001 }
 84:
            mike = oscar.type;
            entity = 'thread';
            if(!(entity !== mike)) { _fun00002_ip = 368; continue _fun00001 }
 100:
            mike = oscar.type;
            entity = 'guild';
            if(!(entity !== mike)) { _fun00002_ip = 254; continue _fun00001 }
 116:
            zulu = _closure1_slot6;
            mike = _closure1_slot3;
            entity = {};
            verify = _closure1_slot7;
            tango = verify.emptyWrapper;
            entity['style'] = tango;
            romeo = _closure1_slot0;
            foxtrot = _closure1_slot2;
            tango = 9;
            tango = foxtrot[tango];
            tango = romeo.bind(report)(tango);
            options = tango.Text;
            tango = {};
            verify = verify.emptyText;
            tango['style'] = verify;
            verify = 'text-md/semibold';
            tango['variant'] = verify;
            verify = 10;
            offset = foxtrot[verify];
            offset = romeo.bind(report)(offset);
            yankee = offset.intl;
            offset = yankee.string;
            verify = foxtrot[verify];
            verify = romeo.bind(report)(verify);
            verify = verify.t;
            verify = verify.+7wtJi;
            verify = offset.bind(yankee)(verify);
            tango['children'] = verify;
            tango = zulu.bind(report)(options, tango);
            entity['children'] = tango;
            entity = zulu.bind(report)(mike, entity);
            _fun00002_ip = 366; continue _fun00001;
 254:
            tango = _closure1_slot6;
            zulu = _closure1_slot3;
            mike = {};
            options = _closure1_slot7;
            verify = options.wrapper;
            mike['style'] = verify;
            offset = _closure1_slot1;
            yankee = _closure1_slot2;
            verify = 8;
            verify = yankee[verify];
            offset = offset.bind(report)(verify);
            verify = {};
            yankee = oscar.channelId;
            verify['channelId'] = yankee;
            yankee = oscar.guildId;
            verify['guildId'] = yankee;
            options = options.listStyle;
            verify['listStyleOverride'] = options;
            options = true;
            verify['disableBottomSafeZone'] = options;
            options = 20;
            verify['insetEnd'] = options;
            options = oscar.channelId;
            options = tango.bind(report)(offset, verify, options);
            mike['children'] = options;
            entity = tango.bind(report)(zulu, mike);
 366:
            _fun00002_ip = 480; continue _fun00001;
 368:
            tango = _closure1_slot6;
            zulu = _closure1_slot3;
            mike = {};
            options = _closure1_slot7;
            verify = options.wrapper;
            mike['style'] = verify;
            offset = _closure1_slot1;
            yankee = _closure1_slot2;
            verify = 7;
            verify = yankee[verify];
            offset = offset.bind(report)(verify);
            verify = {};
            yankee = oscar.channelId;
            verify['channelId'] = yankee;
            yankee = oscar.guildId;
            verify['guildId'] = yankee;
            options = options.listStyle;
            verify['listStyleOverride'] = options;
            options = true;
            verify['disableBottomSafeZone'] = options;
            options = 20;
            verify['insetEnd'] = options;
            options = oscar.channelId;
            options = tango.bind(report)(offset, verify, options);
            mike['children'] = options;
            entity = tango.bind(report)(zulu, mike);
 480:
            _fun00002_ip = 585; continue _fun00001;
 482:
            tango = _closure1_slot6;
            zulu = _closure1_slot3;
            mike = {};
            verify = _closure1_slot7;
            options = verify.wrapper;
            mike['style'] = options;
            options = _closure1_slot1;
            offset = _closure1_slot2;
            golf = 6;
            golf = offset[golf];
            options = options.bind(report)(golf);
            golf = {};
            offset = oscar.channelId;
            golf['channelId'] = offset;
            verify = verify.listStyle;
            golf['listStyleOverride'] = verify;
            verify = true;
            golf['disableBottomSafeZone'] = verify;
            verify = 20;
            golf['insetEnd'] = verify;
            oscar = oscar.channelId;
            oscar = tango.bind(report)(options, golf, oscar);
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 585:
            return entity;
        }
    };
    mike = tango.bind(golf)(mike);
    tango = 11;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/launchpad/native/LaunchPadMembers.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();