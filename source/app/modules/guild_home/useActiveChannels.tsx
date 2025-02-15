// app/modules/guild_home/useActiveChannels.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
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
    tango = report.bind(entity)(tango);
    tango = tango.isTextChannel;
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Permissions;
    var _closure1_slot7 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ChannelFlags;
    var _closure1_slot8 = tango;
    tango = 8;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_home/useActiveChannels.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) {
        _fun115026: for(var _fun115026_ip = 0; ; ) switch(_fun115026_ip) {
 0:
            report = argFoo;
            zulu = arguments[1];
            oscar = undefined;
            if(!(zulu === oscar)) { _fun115026_ip = 56; continue _fun115026 }
 14:
            golf = _closure1_slot3;
            mike = new Array(4);
            mike[0] = golf;
            golf = _closure1_slot4;
            mike[1] = golf;
            golf = _closure1_slot6;
            mike[2] = golf;
            tango = _closure1_slot5;
            mike[3] = tango;
            zulu = mike;
 56:
            options = zulu;
            mike = options[Symbol.iterator];
            options = mike().next;
            tango = options().value;
            zulu = mike;
            golf = zulu === oscar;
            zulu = undefined;
            if(golf) { _fun115026_ip = 81; continue _fun115026 }
 78:
            zulu = tango;
 81:
            var _closure2_slot0 = zulu;
            zulu = undefined;
            if(golf) { _fun115026_ip = 115; continue _fun115026 }
 90:
            verify = options().value;
            tango = mike;
            tango = tango === oscar;
            zulu = undefined;
            golf = tango;
            if(tango) { _fun115026_ip = 115; continue _fun115026 }
 109:
            zulu = verify;
            golf = tango;
 115:
            var _closure2_slot1 = zulu;
            tango = undefined;
            if(golf) { _fun115026_ip = 149; continue _fun115026 }
 124:
            verify = options().value;
            zulu = mike;
            zulu = zulu === oscar;
            tango = undefined;
            golf = zulu;
            if(zulu) { _fun115026_ip = 149; continue _fun115026 }
 143:
            tango = verify;
            golf = zulu;
 149:
            zulu = undefined;
            if(golf) { _fun115026_ip = 179; continue _fun115026 }
 154:
            verify = options().value;
            options = mike;
            options = options === oscar;
            zulu = undefined;
            golf = options;
            if(options) { _fun115026_ip = 179; continue _fun115026 }
 173:
            zulu = verify;
            golf = options;
 179:
            if(golf) { _fun115026_ip = 185; continue _fun115026 }
 182:
            mike.return();
 185:
            var _closure2_slot2 = oscar;
            mike = tango.getActiveChannelIds;
            options = mike.bind(tango)(report);
            mike = null;
            if(!(mike == options)) { _fun115026_ip = 212; continue _fun115026 }
 206:
            tango = new Array(0);
            _fun115026_ip = 230; continue _fun115026;
 212:
            mike = global;
            golf = mike.Array;
            mike = golf.from;
            tango = mike.bind(golf)(options);
 230:
            mike = zulu.getMutedChannels;
            mike = mike.bind(zulu)(report);
            _closure2_slot2 = mike;
            zulu = tango.map;
            mike = function(argFoo) {
                zulu = _closure2_slot0;
                mike = zulu.getChannel;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            tango = zulu.bind(tango)(mike);
            zulu = tango.filter;
            report = _closure1_slot0;
            golf = _closure1_slot1;
            mike = 7;
            mike = golf[mike];
            mike = report.bind(oscar)(mike);
            mike = mike.isNotNullish;
            zulu = zulu.bind(tango)(mike);
            mike = zulu.filter;
            entity = function(argFoo) {
                _fun115028: for(var _fun115028_ip = 0; ; ) switch(_fun115028_ip) {
 0:
                    report = argFoo;
                    zulu = null;
                    if(!(zulu != report)) { _fun115028_ip = 39; continue _fun115028 }
 9:
                    mike = report.hasFlag;
                    entity = _closure1_slot8;
                    entity = entity.ACTIVE_CHANNELS_REMOVED;
                    entity = mike.bind(report)(entity);
                    if(entity) { _fun115028_ip = 243; continue _fun115028 }
 39:
                    oscar = _closure1_slot2;
                    tango = report.type;
                    entity = undefined;
                    entity = oscar.bind(entity)(tango);
                    if(entity) { _fun115028_ip = 65; continue _fun115028 }
 61:
                    entity = false;
                    return entity;
 65:
                    golf = _closure2_slot2;
                    oscar = golf.has;
                    tango = report.id;
                    tango = oscar.bind(golf)(tango);
                    if(tango) { _fun115028_ip = 239; continue _fun115028 }
 93:
                    tango = report.parent_id;
                    if(!(zulu != tango)) { _fun115028_ip = 126; continue _fun115028 }
 103:
                    golf = _closure2_slot2;
                    oscar = golf.has;
                    tango = report.parent_id;
                    tango = oscar.bind(golf)(tango);
                    if(tango) { _fun115028_ip = 235; continue _fun115028 }
 126:
                    golf = _closure2_slot1;
                    oscar = golf.can;
                    tango = _closure1_slot7;
                    tango = tango.VIEW_CHANNEL;
                    tango = oscar.bind(golf)(tango, report);
                    if(tango) { _fun115028_ip = 159; continue _fun115028 }
 155:
                    tango = false;
                    return tango;
 159:
                    oscar = _closure2_slot0;
                    tango = oscar.getChannel;
                    entity = report.parent_id;
                    tango = tango.bind(oscar)(entity);
                    entity = report.isThread;
                    entity = entity.bind(report)();
                    entity = !entity;
                    if(entity) { _fun115028_ip = 199; continue _fun115028 }
 195:
                    entity = zulu == tango;
 199:
                    if(entity) { _fun115028_ip = 206; continue _fun115028 }
 202:
                    entity = zulu == tango;
 206:
                    if(entity) { _fun115028_ip = 233; continue _fun115028 }
 209:
                    zulu = tango.hasFlag;
                    mike = _closure1_slot8;
                    mike = mike.ACTIVE_CHANNELS_REMOVED;
                    mike = zulu.bind(tango)(mike);
                    entity = !mike;
 233:
                    return entity;
 235:
                    entity = false;
                    return entity;
 239:
                    entity = false;
                    return entity;
 243:
                    entity = false;
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    zulu['getActiveTextChannels'] = mike;
    return entity;
})();