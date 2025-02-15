// app/modules/connections/FederatedSocialUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    tango = tango.PlatformTypes;
    var _closure1_slot0 = tango;
    tango = 1;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/connections/FederatedSocialUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo, argBar) { // Original name: validateHandle
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            entity = _closure1_slot0;
            mike = entity.MASTODON;
            entity = argBar;
            if(!(entity === mike)) { _fun00002_ip = 47; continue _fun00001 }
 23:
            mike = /^@?[a-z0-9_]+([.-]+[a-z0-9_]+)*@[^@]+\.[^.@]{2,}$/i;
            entity = mike.test;
            entity = entity.bind(mike)(zulu);
 47:
            mike = /^.+\.[^.@]{2,}$/;
            entity = mike.test;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    zulu['validateHandle'] = tango;
    mike = function(argFoo) { // Original name: getExampleHandle
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tango = argFoo;
            entity = _closure1_slot0;
            zulu = entity.MASTODON;
            entity = '@example@mastodon.social';
            if(!(tango !== zulu)) { _fun00004_ip = 55; continue _fun00003 }
 26:
            mike = _closure1_slot0;
            zulu = mike.BLUESKY;
            mike = 'clyde@example.com';
            if(!(tango === zulu)) { _fun00004_ip = 52; continue _fun00003 }
 46:
            mike = 'example.bsky.social';
 52:
            entity = mike;
 55:
            return entity;
        }
    };
    zulu['getExampleHandle'] = mike;
    return entity;
})();