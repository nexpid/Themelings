// app/modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationWarningsForChannel.tsx
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
    tango = 0;
    options = oscar[tango];
    golf = argBaz;
    entity = undefined;
    golf = golf.bind(entity)(options);
    var _closure1_slot2 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.SafetyWarningTypes;
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationWarningsForChannel.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useInappropriateConversationWarningsForChannel
        mike = argFoo;
        var _closure2_slot0 = mike;
        oscar = _closure1_slot0;
        report = _closure1_slot1;
        tango = 1;
        report = report[tango];
        tango = undefined;
        oscar = oscar.bind(tango)(report);
        report = oscar.useStateFromStores;
        zulu = _closure1_slot2;
        tango = new Array(1);
        tango[0] = zulu;
        zulu = new Array(1);
        zulu[0] = mike;
        mike = function() {
            zulu = _closure1_slot2;
            mike = zulu.getChannelSafetyWarnings;
            entity = _closure2_slot0;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        zulu = report.bind(oscar)(tango, mike, zulu);
        mike = zulu.filter;
        entity = function(argFoo) {
            _fun79417: for(var _fun79417_ip = 0; ; ) switch(_fun79417_ip) {
 0:
                zulu = argFoo;
                tango = zulu.type;
                entity = _closure1_slot3;
                entity = entity.INAPPROPRIATE_CONVERSATION_TIER_1;
                entity = tango === entity;
                if(entity) { _fun79417_ip = 47; continue _fun79417 }
 28:
                zulu = zulu.type;
                mike = _closure1_slot3;
                mike = mike.INAPPROPRIATE_CONVERSATION_TIER_2;
                entity = zulu === mike;
 47:
                return entity;
            }
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['useInappropriateConversationWarningsForChannel'] = mike;
    return entity;
})();