// app/modules/fastest_list/utils/getFastestListVisibleItemsWithErrorChecking.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
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
    tango = 'modules/fastest_list/utils/getFastestListVisibleItemsWithErrorChecking.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar, argBaz) { // Original name: getFastestListVisibleItemsWithErrorChecking
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscar = argFoo;
            entity = argBar;
            mike = argBaz;
            tango = entity.sectionStart;
            zulu = mike.length;
            zulu = tango > zulu;
            if(zulu) { _fun00002_ip = 42; continue _fun00001 }
 27:
            report = entity.sectionEnd;
            tango = mike.length;
            zulu = report > tango;
 42:
            if(!zulu) { _fun00002_ip = 104; continue _fun00001 }
 45:
            report = _closure1_slot0;
            tango = _closure1_slot1;
            zulu = 0;
            tango = tango[zulu];
            zulu = undefined;
            golf = report.bind(zulu)(tango);
            report = golf.logFastestListError;
            tango = {};
            tango['listId'] = oscar;
            tango['sections'] = mike;
            tango['visibleItems'] = entity;
            zulu = 'Visible items `sectionStart/End` is greater than the number of sections';
            zulu = report.bind(golf)(zulu, tango);
 104:
            tango = entity.itemStart;
            zulu = entity.sectionStart;
            zulu = mike[zulu];
            zulu = tango > zulu;
            if(zulu) { _fun00002_ip = 147; continue _fun00001 }
 127:
            report = entity.itemEnd;
            tango = entity.sectionEnd;
            tango = mike[tango];
            zulu = report > tango;
 147:
            if(!zulu) { _fun00002_ip = 209; continue _fun00001 }
 150:
            report = _closure1_slot0;
            tango = _closure1_slot1;
            zulu = 0;
            tango = tango[zulu];
            zulu = undefined;
            report = report.bind(zulu)(tango);
            tango = report.logFastestListError;
            zulu = {};
            zulu['listId'] = oscar;
            zulu['sections'] = mike;
            zulu['visibleItems'] = entity;
            mike = 'Visible items `itemStart/End` is greater than the number of items in the first section';
            mike = tango.bind(report)(mike, zulu);
 209:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();