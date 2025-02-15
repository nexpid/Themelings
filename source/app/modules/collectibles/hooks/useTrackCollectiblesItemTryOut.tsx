// app/modules/collectibles/hooks/useTrackCollectiblesItemTryOut.tsx
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
    tango = report.bind(entity)(tango);
    tango = tango.useCallback;
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.AnalyticEvents;
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.AnalyticsPremiumFeatureNames;
    var _closure1_slot6 = golf;
    tango = tango.AnalyticsPremiumFeatureTiers;
    var _closure1_slot7 = tango;
    tango = 9;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/collectibles/hooks/useTrackCollectiblesItemTryOut.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: _default
        report = argFoo;
        var _closure2_slot0 = report;
        oscar = _closure1_slot0;
        tango = _closure1_slot2;
        zulu = 4;
        zulu = tango[zulu];
        tango = undefined;
        options = oscar.bind(tango)(zulu);
        golf = options.useStateFromStores;
        zulu = _closure1_slot4;
        oscar = new Array(1);
        oscar[0] = zulu;
        zulu = function() {
            entity = _closure1_slot4;
            entity = entity.products;
            return entity;
        };
        oscar = golf.bind(options)(oscar, zulu);
        var _closure2_slot1 = oscar;
        zulu = _closure1_slot3;
        mike = new Array(2);
        mike[0] = oscar;
        mike[1] = report;
        entity = function(argFoo) {
            _fun63960: for(var _fun63960_ip = 0; ; ) switch(_fun63960_ip) {
 0:
                entity = argFoo;
                backup = entity.type;
                zulu = entity.skuId;
                mike = _closure2_slot1;
                entity = mike.get;
                options = entity.bind(mike)(zulu);
                zulu = _closure1_slot1;
                yankee = _closure1_slot2;
                entity = 5;
                mike = yankee[entity];
                entity = undefined;
                report = zulu.bind(entity)(mike);
                tango = report.track;
                mike = _closure1_slot5;
                zulu = mike.PREMIUM_FEATURE_TRY_OUT;
                mike = {};
                offset = _closure1_slot0;
                romeo = 6;
                romeo = yankee[romeo];
                foxtrot = offset.bind(entity)(romeo);
                romeo = foxtrot.match;
                sizing = romeo.bind(foxtrot)(backup);
                kilo = sizing.with;
                romeo = 7;
                foxtrot = yankee[romeo];
                foxtrot = offset.bind(entity)(foxtrot);
                foxtrot = foxtrot.CollectiblesItemType;
                backup = foxtrot.AVATAR_DECORATION;
                foxtrot = function() {
                    entity = _closure1_slot6;
                    entity = entity.AVATAR_DECORATION;
                    return entity;
                };
                kilo = kilo.bind(sizing)(backup, foxtrot);
                backup = kilo.with;
                romeo = yankee[romeo];
                romeo = offset.bind(entity)(romeo);
                romeo = romeo.CollectiblesItemType;
                foxtrot = romeo.PROFILE_EFFECT;
                romeo = function() {
                    entity = _closure1_slot6;
                    entity = entity.PROFILE_EFFECT;
                    return entity;
                };
                foxtrot = backup.bind(kilo)(foxtrot, romeo);
                romeo = foxtrot.otherwise;
                golf = function() {
                    entity = undefined;
                    return entity;
                };
                golf = romeo.bind(foxtrot)(golf);
                mike['feature_name'] = golf;
                golf = 8;
                golf = yankee[golf];
                offset = offset.bind(entity)(golf);
                golf = offset.isPremiumCollectiblesProduct;
                golf = golf.bind(offset)(options);
                verify = _closure1_slot7;
                if(golf) { _fun63960_ip = 240; continue _fun63960 }
 232:
                golf = verify.PREMIUM_STANDARD;
                _fun63960_ip = 246; continue _fun63960;
 240:
                golf = verify.FREE;
 246:
                mike['feature_tier'] = golf;
                golf = null;
                verify = golf == options;
                golf = undefined;
                if(verify) { _fun63960_ip = 267; continue _fun63960 }
 262:
                golf = options.name;
 267:
                mike['feature_selection'] = golf;
                oscar = _closure2_slot0;
                mike['location_stack'] = oscar;
                mike = tango.bind(report)(zulu, mike);
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();