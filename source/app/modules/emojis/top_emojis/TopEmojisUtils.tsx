// app/modules/emojis/top_emojis/TopEmojisUtils.tsx
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
    tango = golf.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/emojis/top_emojis/TopEmojisUtils.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: maybeFetchTopEmojisByGuild
        _fun77918: for(var _fun77918_ip = 0; ; ) switch(_fun77918_ip) {
 0:
            zulu = argFoo;
            mike = null;
            if(!(mike != zulu)) { _fun77918_ip = 135; continue _fun77918 }
 12:
            report = _closure1_slot2;
            tango = report.getCurrentUser;
            tango = tango.bind(report)();
            if(!(mike != tango)) { _fun77918_ip = 135; continue _fun77918 }
 32:
            report = _closure1_slot3;
            tango = report.getTopEmojisMetadata;
            tango = tango.bind(report)(zulu);
            if(!(mike != tango)) { _fun77918_ip = 84; continue _fun77918 }
 53:
            tango = tango.topEmojisTTL;
            if(!(mike != tango)) { _fun77918_ip = 139; continue _fun77918 }
 63:
            mike = global;
            report = mike.Date;
            mike = report.now;
            mike = mike.bind(report)();
            if(!(!(mike < tango))) { _fun77918_ip = 139; continue _fun77918 }
 84:
            tango = _closure1_slot4;
            mike = tango.getIsFetching;
            mike = mike.bind(tango)(zulu);
            if(mike) { _fun77918_ip = 135; continue _fun77918 }
 102:
            tango = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 3;
            mike = mike[entity];
            entity = undefined;
            mike = tango.bind(entity)(mike);
            entity = mike.fetchTopEmojis;
            entity = entity.bind(mike)(zulu);
 135:
            entity = undefined;
            return entity;
 139:
            entity = undefined;
            return entity;
        }
    };
    zulu['maybeFetchTopEmojisByGuild'] = mike;
    return entity;
})();