// app/modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationSafetyToolsWarningForChannel.tsx
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
    entity = 3;
    tango = tango[entity];
    entity = undefined;
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationSafetyToolsWarningForChannel.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useInappropriateConversationSafetyToolsWarningForChannel
        _fun79399: for(var _fun79399_ip = 0; ; ) switch(_fun79399_ip) {
 0:
            golf = _closure1_slot0;
            options = _closure1_slot1;
            mike = 0;
            tango = options[mike];
            zulu = undefined;
            oscar = golf.bind(zulu)(tango);
            report = oscar.useIsEligibleForInappropriateConversationWarning;
            tango = {};
            verify = 'safety-tools-button';
            tango['location'] = verify;
            report = report.bind(oscar)(tango);
            tango = 1;
            tango = options[tango];
            oscar = golf.bind(zulu)(tango);
            tango = oscar.useSafetyAlertsSettingOrDefault;
            tango = tango.bind(oscar)();
            oscar = 2;
            oscar = options[oscar];
            options = golf.bind(zulu)(oscar);
            golf = options.useInappropriateConversationWarningsForChannel;
            oscar = argFoo;
            oscar = golf.bind(options)(oscar);
            if(!report) { _fun79399_ip = 129; continue _fun79399 }
 100:
            if(!tango) { _fun79399_ip = 129; continue _fun79399 }
 103:
            report = oscar.filter;
            tango = function(argFoo) {
                entity = argFoo;
                mike = entity.dismiss_timestamp;
                entity = null;
                entity = entity != mike;
                return entity;
            };
            tango = report.bind(oscar)(tango);
            report = tango.length;
            if(!(mike === report)) { _fun79399_ip = 131; continue _fun79399 }
 129:
            return zulu;
 131:
            zulu = tango.sort;
            entity = function(argFoo, argBar) {
                _fun79401: for(var _fun79401_ip = 0; ; ) switch(_fun79401_ip) {
 0:
                    mike = argFoo;
                    entity = argBar;
                    tango = mike.type;
                    zulu = entity.type;
                    if(!(!(tango > zulu))) { _fun79401_ip = 45; continue _fun79401 }
 20:
                    mike = mike.dismiss_timestamp;
                    entity = entity.dismiss_timestamp;
                    mike = mike < entity;
                    entity = -1;
                    if(!mike) { _fun79401_ip = 48; continue _fun79401 }
 45:
                    entity = 1;
 48:
                    return entity;
                }
            };
            entity = zulu.bind(tango)(entity);
            entity = entity[mike];
            return entity;
        }
    };
    zulu['useInappropriateConversationSafetyToolsWarningForChannel'] = mike;
    return entity;
})();