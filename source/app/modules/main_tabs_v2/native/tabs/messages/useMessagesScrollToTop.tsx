// app/modules/main_tabs_v2/native/tabs/messages/useMessagesScrollToTop.tsx
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
    options = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(options);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/tabs/messages/useMessagesScrollToTop.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useMessagesScrollToTop
        entity = argFoo;
        golf = entity.listRef;
        var _closure2_slot0 = golf;
        oscar = entity.listRefHappeningNow;
        var _closure2_slot1 = oscar;
        tango = _closure1_slot3;
        report = tango.useMemo;
        zulu = new Array(2);
        zulu[0] = golf;
        zulu[1] = oscar;
        mike = function() {
            entity = {};
            mike = -1;
            entity['scrollToTopTimeout'] = mike;
            mike = function() { // Original name: scrollToTop
                _fun114881: for(var _fun114881_ip = 0; ; ) switch(_fun114881_ip) {
 0:
                    zulu = this;
                    report = _closure1_slot0;
                    golf = _closure1_slot2;
                    entity = 2;
                    tango = golf[entity];
                    entity = undefined;
                    report = report.bind(entity)(tango);
                    tango = report.coerceGuildsRoute;
                    oscar = _closure1_slot1;
                    mike = 3;
                    mike = golf[mike];
                    mike = oscar.bind(entity)(mike);
                    mike = mike.bind(entity)();
                    tango = tango.bind(report)(mike);
                    mike = null;
                    if(!(mike != tango)) { _fun114881_ip = 143; continue _fun114881 }
 65:
                    tango = zulu.scrollToTopTimeout;
                    mike = -1;
                    if(!(mike !== tango)) { _fun114881_ip = 108; continue _fun114881 }
 81:
                    tango = global;
                    report = tango.clearTimeout;
                    tango = zulu.scrollToTopTimeout;
                    tango = report.bind(entity)(tango);
                    zulu['scrollToTopTimeout'] = mike;
                    _fun114881_ip = 143; continue _fun114881;
 108:
                    mike = global;
                    report = mike.setTimeout;
                    tango = function() {
                        _fun114882: for(var _fun114882_ip = 0; ; ) switch(_fun114882_ip) {
 0:
                            entity = _closure2_slot0;
                            mike = null;
                            tango = mike == entity;
                            entity = undefined;
                            oscar = undefined;
                            if(tango) { _fun114882_ip = 36; continue _fun114882 }
 20:
                            report = _closure2_slot0;
                            report = report.current;
                            tango = mike == report;
                            oscar = report;
 36:
                            if(tango) { _fun114882_ip = 81; continue _fun114882 }
 39:
                            report = oscar.scrollToLocation;
                            tango = {'section': 0, 'item': 0};
                            golf = _closure1_slot4;
                            golf = golf.useReducedMotion;
                            golf = !golf;
                            tango['animated'] = golf;
                            tango = report.bind(oscar)(tango);
 81:
                            zulu = _closure2_slot1;
                            tango = zulu.current;
                            if(!(mike != tango)) { _fun114882_ip = 135; continue _fun114882 }
 94:
                            zulu = tango.scrollToOffset;
                            mike = {};
                            report = 0;
                            mike['offset'] = report;
                            report = _closure1_slot4;
                            report = report.useReducedMotion;
                            report = !report;
                            mike['animated'] = report;
                            mike = zulu.bind(tango)(mike);
 135:
                            return entity;
                        }
                    };
                    mike = 300;
                    mike = report.bind(entity)(tango, mike);
                    zulu['scrollToTopTimeout'] = mike;
 143:
                    return entity;
                }
            };
            entity['scrollToTop'] = mike;
            return entity;
        };
        zulu = report.bind(tango)(mike, zulu);
        mike = tango.useRef;
        tango = mike.bind(tango)(zulu);
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 4;
        mike = mike[entity];
        entity = undefined;
        zulu = zulu.bind(entity)(mike);
        mike = zulu.useScrollToTop;
        mike = mike.bind(zulu)(tango);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();