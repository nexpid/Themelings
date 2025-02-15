// app/modules/dismissible_content/useSelectedDismissibleContentShared.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
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
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot2 = tango;
    tango = 1;
    golf = oscar[tango];
    tango = argBaz;
    tango = tango.bind(entity)(golf);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ContentDismissActionType;
    var _closure1_slot4 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/dismissible_content/useSelectedDismissibleContentShared.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar) { // Original name: useSelectedDismissibleContentShared
        _fun77561: for(var _fun77561_ip = 0; ; ) switch(_fun77561_ip) {
 0:
            oscar = argFoo;
            golf = argBar;
            zulu = arguments[2];
            var _closure2_slot0 = oscar;
            var _closure2_slot1 = golf;
            entity = undefined;
            if(!(zulu === entity)) { _fun77561_ip = 27; continue _fun77561 }
 25:
            zulu = false;
 27:
            var _closure2_slot2 = entity;
            options = !zulu;
            if(!options) { _fun77561_ip = 43; continue _fun77561 }
 37:
            zulu = null;
            options = zulu != oscar;
 43:
            if(!options) { _fun77561_ip = 88; continue _fun77561 }
 46:
            tango = _closure1_slot0;
            report = _closure1_slot1;
            zulu = 3;
            zulu = report[zulu];
            zulu = tango.bind(entity)(zulu);
            tango = zulu.CONTENT_TYPES_WITH_BYPASS_FATIGUE;
            zulu = tango.has;
            zulu = zulu.bind(tango)(oscar);
            options = !zulu;
 88:
            _closure2_slot2 = options;
            report = _closure1_slot2;
            tango = report.useEffect;
            zulu = new Array(3);
            zulu[0] = options;
            zulu[1] = golf;
            zulu[2] = oscar;
            mike = function() {
                entity = function() {
                    _fun77563: for(var _fun77563_ip = 0; ; ) switch(_fun77563_ip) {
 0:
                        mike = _closure2_slot2;
                        if(!mike) { _fun77563_ip = 31; continue _fun77563 }
 10:
                        zulu = _closure1_slot3;
                        tango = zulu.lastDCDismissed;
                        zulu = _closure2_slot0;
                        mike = tango !== zulu;
 31:
                        if(!mike) { _fun77563_ip = 61; continue _fun77563 }
 34:
                        tango = _closure2_slot1;
                        entity = _closure1_slot4;
                        zulu = entity.AUTO_DISMISS;
                        mike = undefined;
                        entity = true;
                        entity = tango.bind(mike)(zulu, entity);
 61:
                        entity = undefined;
                        return entity;
                    }
                };
                return entity;
            };
            mike = tango.bind(report)(mike, zulu);
            return entity;
        }
    };
    zulu['useSelectedDismissibleContentShared'] = mike;
    return entity;
})();