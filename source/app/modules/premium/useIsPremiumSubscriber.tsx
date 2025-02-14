// app/modules/premium/useIsPremiumSubscriber.tsx
export default (function(_, argBar, argBaz, __, ___, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
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
    tango = argBaz;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.PremiumTypes;
    var _closure1_slot3 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/premium/useIsPremiumSubscriber.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: useIsPremiumSubscriber
        _fun77444: for(var _fun77444_ip = 0; ; ) switch(_fun77444_ip) {
 0:
            mike = arguments[0];
            report = undefined;
            if(!(mike === report)) { _fun77444_ip = 24; continue _fun77444 }
 11:
            zulu = _closure1_slot3;
            mike = zulu.TIER_2;
 24:
            var _closure2_slot0 = mike;
            tango = _closure1_slot0;
            oscar = _closure1_slot1;
            zulu = 2;
            zulu = oscar[zulu];
            tango = tango.bind(report)(zulu);
            zulu = tango.useStateFromStores;
            report = _closure1_slot2;
            mike = new Array(1);
            mike[0] = report;
            entity = function() {
                zulu = _closure1_slot2;
                mike = zulu.getCurrentUser;
                tango = mike.bind(zulu)();
                zulu = _closure1_slot0;
                mike = _closure1_slot1;
                entity = 3;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.isPremiumExactly;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(tango, entity);
                return entity;
            };
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['useIsPremiumSubscriber'] = mike;
    return entity;
})();