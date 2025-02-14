// app/modules/favorites/useFavoriteGuildUnreads.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
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
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Permissions;
    var _closure1_slot7 = tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/favorites/useFavoriteGuildUnreads.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useFavoriteGuildUnreads
        mike = argFoo;
        var _closure2_slot0 = mike;
        tango = _closure1_slot0;
        zulu = _closure1_slot2;
        mike = 5;
        zulu = zulu[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        zulu = tango.useStateFromStoresObject;
        oscar = _closure1_slot3;
        mike = new Array(4);
        mike[0] = oscar;
        oscar = _closure1_slot5;
        mike[1] = oscar;
        oscar = _closure1_slot6;
        mike[2] = oscar;
        report = _closure1_slot4;
        mike[3] = report;
        entity = function() {
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 6;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.keys;
            entity = _closure2_slot0;
            tango = mike.bind(zulu)(entity);
            zulu = tango.reduce;
            mike = function(argFoo, argBar) {
                _fun114482: for(var _fun114482_ip = 0; ; ) switch(_fun114482_ip) {
 0:
                    entity = argFoo;
                    golf = argBar;
                    zulu = _closure1_slot3;
                    mike = zulu.getChannel;
                    verify = mike.bind(zulu)(golf);
                    options = null;
                    mike = options == verify;
                    zulu = undefined;
                    if(mike) { _fun114482_ip = 44; continue _fun114482 }
 34:
                    mike = verify.isGuildVocal;
                    zulu = mike.bind(verify)();
 44:
                    report = entity.badge;
                    offset = _closure1_slot5;
                    mike = offset.getMentionCount;
                    mike = mike.bind(offset)(golf);
                    mike = report + mike;
                    entity['badge'] = mike;
                    mike = entity.unread;
                    if(mike) { _fun114482_ip = 178; continue _fun114482 }
 84:
                    zulu = !zulu;
                    if(!zulu) { _fun114482_ip = 116; continue _fun114482 }
 90:
                    yankee = _closure1_slot4;
                    offset = yankee.can;
                    report = _closure1_slot7;
                    report = report.VIEW_CHANNEL;
                    zulu = offset.bind(yankee)(report, verify);
 116:
                    if(!zulu) { _fun114482_ip = 134; continue _fun114482 }
 119:
                    offset = _closure1_slot5;
                    report = offset.hasUnread;
                    zulu = report.bind(offset)(golf);
 134:
                    if(!zulu) { _fun114482_ip = 175; continue _fun114482 }
 137:
                    report = _closure1_slot6;
                    tango = report.isChannelMuted;
                    options = options == verify;
                    oscar = undefined;
                    if(options) { _fun114482_ip = 166; continue _fun114482 }
 156:
                    options = verify.getGuildId;
                    oscar = options.bind(verify)();
 166:
                    tango = tango.bind(report)(oscar, golf);
                    zulu = !tango;
 175:
                    mike = zulu;
 178:
                    entity['unread'] = mike;
                    return entity;
                }
            };
            entity = {'badge': 0, 'unread': false};
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();