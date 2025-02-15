// app/modules/collectibles/hooks/useFetchCollectiblesAndProfileEffects.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
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
    options = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(options);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/collectibles/hooks/useFetchCollectiblesAndProfileEffects.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useFetchCollectiblesAndProfileEffects
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = _closure1_slot1;
            romeo = _closure1_slot2;
            yankee = 3;
            mike = romeo[yankee];
            verify = undefined;
            zulu = zulu.bind(verify)(mike);
            mike = {};
            tango = argFoo;
            mike['location'] = tango;
            mike = zulu.bind(verify)(mike);
            golf = mike.isFetching;
            options = mike.fetchCategoriesError;
            oscar = mike.fetchPurchasesError;
            zulu = mike.categories;
            mike = mike.purchases;
            report = _closure1_slot0;
            tango = 4;
            tango = romeo[tango];
            foxtrot = report.bind(verify)(tango);
            romeo = foxtrot.useStateFromStoresArray;
            tango = _closure1_slot5;
            report = new Array(1);
            report[0] = tango;
            tango = function() {
                mike = _closure1_slot5;
                zulu = mike.isFetching;
                entity = new Array(3);
                entity[0] = zulu;
                zulu = mike.fetchError;
                entity[1] = zulu;
                mike = mike.profileEffects;
                entity[2] = mike;
                return entity;
            };
            report = romeo.bind(foxtrot)(report, tango);
            tango = _closure1_slot3;
            yankee = tango.bind(verify)(report, yankee);
            tango = 0;
            verify = yankee[tango];
            tango = 1;
            report = yankee[tango];
            tango = 2;
            tango = yankee[tango];
            romeo = _closure1_slot4;
            yankee = romeo.useEffect;
            offset = function() {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 5;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.fetchUserProfileEffects;
                mike = true;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            entity = new Array(0);
            entity = yankee.bind(romeo)(offset, entity);
            entity = {};
            if(golf) { _fun00002_ip = 182; continue _fun00001 }
 179:
            golf = verify;
 182:
            entity['isFetching'] = golf;
            golf = null;
            if(!(golf != options)) { _fun00002_ip = 196; continue _fun00001 }
 193:
            oscar = options;
 196:
            if(!(golf != oscar)) { _fun00002_ip = 203; continue _fun00001 }
 200:
            report = oscar;
 203:
            entity['combinedError'] = report;
            entity['profileEffects'] = tango;
            entity['categories'] = zulu;
            entity['purchases'] = mike;
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();