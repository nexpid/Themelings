// app/modules/self_mod/inappropriate_conversation/hooks/useShouldShowInitialSafetyToolsButtonTooltip.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
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
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/self_mod/inappropriate_conversation/hooks/useShouldShowInitialSafetyToolsButtonTooltip.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useShouldShowInitialSafetyToolsButtonTooltip
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            options = argFoo;
            var _closure2_slot0 = options;
            oscar = _closure1_slot0;
            golf = _closure1_slot1;
            zulu = 1;
            zulu = golf[zulu];
            report = undefined;
            tango = oscar.bind(report)(zulu);
            zulu = tango.useInappropriateConversationSafetyToolsWarningForChannel;
            zulu = zulu.bind(tango)(options);
            tango = 2;
            tango = golf[tango];
            report = oscar.bind(report)(tango);
            tango = report.useStateFromStores;
            oscar = _closure1_slot2;
            mike = new Array(1);
            mike[0] = oscar;
            entity = function() {
                zulu = _closure1_slot2;
                mike = zulu.hasShownInitialTooltipForChannel;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            mike = tango.bind(report)(mike, entity);
            entity = null;
            entity = entity != zulu;
            if(!entity) { _fun00002_ip = 99; continue _fun00001 }
 96:
            entity = !mike;
 99:
            return entity;
        }
    };
    zulu['useShouldShowInitialSafetyToolsButtonTooltip'] = mike;
    return entity;
})();