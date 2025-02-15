// app/utils/PremiumTypeUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    options = argBar;
    zulu = argFred;
    verify = argPlugh;
    report = function(argFoo, argBar) { // Original name: isPremiumAtLeast
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscar = argFoo;
            report = argBar;
            mike = null;
            entity = mike == report;
            if(entity) { _fun00002_ip = 48; continue _fun00001 }
 15:
            mike = mike != oscar;
            if(!mike) { _fun00002_ip = 45; continue _fun00001 }
 22:
            tango = _closure1_slot0;
            tango = tango[oscar];
            zulu = _closure1_slot0;
            zulu = zulu[report];
            mike = tango >= zulu;
 45:
            entity = mike;
 48:
            return entity;
        }
    };
    var _closure1_slot1 = report;
    tango = function(argFoo, argBar) { // Original name: isPremium
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            mike = argFoo;
            tango = null;
            entity = tango != mike;
            if(!entity) { _fun00004_ip = 22; continue _fun00003 }
 12:
            zulu = mike.premiumType;
            entity = tango != zulu;
 22:
            if(!entity) { _fun00004_ip = 49; continue _fun00003 }
 25:
            report = _closure1_slot1;
            tango = mike.premiumType;
            zulu = undefined;
            mike = argBar;
            entity = report.bind(zulu)(tango, mike);
 49:
            return entity;
        }
    };
    mike = function(argFoo, argBar) { // Original name: isPremiumExactly
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            mike = argFoo;
            entity = null;
            entity = entity != mike;
            if(!entity) { _fun00006_ip = 25; continue _fun00005 }
 12:
            zulu = mike.premiumType;
            mike = argBar;
            entity = zulu === mike;
 25:
            return entity;
        }
    };
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zulu, entity, oscar);
    entity = 0;
    oscar = verify[entity];
    entity = undefined;
    oscar = options.bind(entity)(oscar);
    oscar = oscar.PremiumTypeOrder;
    var _closure1_slot0 = oscar;
    oscar = {};
    oscar['isPremiumAtLeast'] = report;
    oscar['isPremium'] = tango;
    oscar['isPremiumExactly'] = mike;
    golf = 1;
    golf = verify[golf];
    verify = options.bind(entity)(golf);
    options = verify.fileFinishedImporting;
    golf = 'utils/PremiumTypeUtils.tsx';
    golf = options.bind(verify)(golf);
    zulu['default'] = oscar;
    zulu['isPremiumAtLeast'] = report;
    zulu['isPremium'] = tango;
    zulu['isPremiumExactly'] = mike;
    return entity;
})();