// app/modules/media_channel/useIsFirstMessageInMediaPost.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBar;
    verify = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = options;
    tango = function(argFoo) { // Original name: isFirstMessageInMediaPost
        _fun71947: for(var _fun71947_ip = 0; ; ) switch(_fun71947_ip) {
 0:
            mike = argFoo;
            entity = null;
            entity = entity != mike;
            if(!entity) { _fun71947_ip = 37; continue _fun71947 }
 12:
            report = _closure1_slot5;
            tango = mike.id;
            zulu = mike.channel_id;
            mike = undefined;
            entity = report.bind(mike)(tango, zulu);
 37:
            return entity;
        }
    };
    var _closure1_slot4 = tango;
    mike = function(argFoo, argBar) { // Original name: isFirstMessageIdInMediaPost
        _fun71948: for(var _fun71948_ip = 0; ; ) switch(_fun71948_ip) {
 0:
            report = argBar;
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 2;
            entity = mike[entity];
            mike = undefined;
            zulu = zulu.bind(mike)(entity);
            entity = zulu.castChannelIdAsMessageId;
            zulu = entity.bind(zulu)(report);
            entity = argFoo;
            if(!(entity === zulu)) { _fun71948_ip = 130; continue _fun71948 }
 46:
            zulu = _closure1_slot3;
            entity = zulu.getChannel;
            zulu = entity.bind(zulu)(report);
            entity = null;
            if(!(entity != zulu)) { _fun71948_ip = 126; continue _fun71948 }
 66:
            report = zulu.isForumPost;
            report = report.bind(zulu)();
            if(!report) { _fun71948_ip = 126; continue _fun71948 }
 79:
            report = _closure1_slot3;
            tango = report.getChannel;
            zulu = zulu.parent_id;
            zulu = tango.bind(report)(zulu);
            entity = entity == zulu;
            mike = undefined;
            if(entity) { _fun71948_ip = 118; continue _fun71948 }
 108:
            entity = zulu.isMediaChannel;
            mike = entity.bind(zulu)();
 118:
            entity = true;
            entity = entity === mike;
            return entity;
 126:
            entity = false;
            return entity;
 130:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot5 = mike;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zulu, entity, oscar);
    entity = 0;
    oscar = options[entity];
    entity = undefined;
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot3 = oscar;
    oscar = 3;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/media_channel/useIsFirstMessageInMediaPost.tsx';
    oscar = golf.bind(options)(oscar);
    report = function(argFoo) { // Original name: useIsFirstMessageInMediaPost
        mike = argFoo;
        var _closure2_slot0 = mike;
        report = _closure1_slot0;
        tango = _closure1_slot2;
        zulu = 1;
        tango = tango[zulu];
        zulu = undefined;
        report = report.bind(zulu)(tango);
        tango = report.useStateFromStores;
        zulu = new Array(1);
        zulu[0] = mike;
        mike = new Array(0);
        entity = function() {
            zulu = _closure1_slot4;
            mike = _closure2_slot0;
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            return entity;
        };
        entity = tango.bind(report)(mike, entity, zulu);
        return entity;
    };
    zulu['useIsFirstMessageInMediaPost'] = report;
    zulu['isFirstMessageInMediaPost'] = tango;
    zulu['isFirstMessageIdInMediaPost'] = mike;
    return entity;
})();