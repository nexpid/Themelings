// app/modules/fastest_list/utils/getFastestListSectionsWithErrorChecking.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    tango = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tango;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, oscar);
    entity = 1;
    tango = tango[entity];
    entity = undefined;
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/fastest_list/utils/getFastestListSectionsWithErrorChecking.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: getFastestListSectionsWithErrorChecking
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            mike = entity.itemSizes;
            mike = mike.length;
            tango = 1000;
            mike = mike > tango;
            if(mike) { _fun00002_ip = 42; continue _fun00001 }
 27:
            zulu = entity.itemKeys;
            zulu = zulu.length;
            mike = zulu > tango;
 42:
            if(!mike) { _fun00002_ip = 147; continue _fun00001 }
 45:
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            mike = 0;
            zulu = zulu[mike];
            mike = undefined;
            report = tango.bind(mike)(zulu);
            tango = report.logFastestListError;
            zulu = {};
            mike = entity.itemSizes;
            mike = mike.length;
            zulu['itemSizesLength'] = mike;
            mike = entity.itemKeys;
            mike = mike.length;
            zulu['itemKeysLength'] = mike;
            mike = entity.listId;
            zulu['listId'] = mike;
            mike = 'Using non-uniform item sizes or list keys forces a full iteration of the list entries. This will cause performance issues on slower devices, please consider using a uniform configuration.';
            zulu['detail'] = mike;
            mike = 'Non-uniform configuration with large data set detected.';
            mike = tango.bind(report)(mike, zulu);
 147:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();