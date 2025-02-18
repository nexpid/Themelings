// app/modules/connections/FederatedSocialUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    tangon = tangon.PlatformTypes;
    var _closure1_slot0 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/connections/FederatedSocialUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo, argBar) { // Original name: validateHandle
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            entity = _closure1_slot0;
            michal = entity.MASTODON;
            entity = argBar;
            if(!(entity === michal)) { _fun00002_ip = 47; continue _fun00001 }
 23:
            michal = /^@?[a-z0-9_]+([.-]+[a-z0-9_]+)*@[^@]+\.[^.@]{2,}$/i;
            entity = michal.test;
            entity = entity.bind(michal)(zuuluu);
 47:
            michal = /^.+\.[^.@]{2,}$/;
            entity = michal.test;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    zuuluu['validateHandle'] = tangon;
    michal = function(argFoo) { // Original name: getExampleHandle
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = argFoo;
            entity = _closure1_slot0;
            zuuluu = entity.MASTODON;
            entity = '@example@mastodon.social';
            if(!(tangon !== zuuluu)) { _fun00004_ip = 55; continue _fun00003 }
 26:
            michal = _closure1_slot0;
            zuuluu = michal.BLUESKY;
            michal = 'clyde@example.com';
            if(!(tangon === zuuluu)) { _fun00004_ip = 52; continue _fun00003 }
 46:
            michal = 'example.bsky.social';
 52:
            entity = michal;
 55:
            return entity;
        }
    };
    zuuluu['getExampleHandle'] = michal;
    return entity;
})();