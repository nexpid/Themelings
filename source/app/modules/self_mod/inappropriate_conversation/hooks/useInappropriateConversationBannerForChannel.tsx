// app/modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationBannerForChannel.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
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
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    tango = tango.SafetyWarningTypes;
    var _closure1_slot2 = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationBannerForChannel.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar) { // Original name: useInappropriateConversationBannerForChannel
        _fun89548: for(var _fun89548_ip = 0; ; ) switch(_fun89548_ip) {
 0:
            options = argFoo;
            golf = _closure1_slot0;
            verify = _closure1_slot1;
            entity = 1;
            zulu = verify[entity];
            entity = undefined;
            report = golf.bind(entity)(zulu);
            tango = report.useIsEligibleForInappropriateConversationWarning;
            zulu = {};
            oscar = argBar;
            zulu['location'] = oscar;
            tango = tango.bind(report)(zulu);
            zulu = 2;
            zulu = verify[zulu];
            report = golf.bind(entity)(zulu);
            zulu = report.useSafetyAlertsSettingOrDefault;
            zulu = zulu.bind(report)();
            report = 3;
            report = verify[report];
            oscar = golf.bind(entity)(report);
            report = oscar.useInappropriateConversationWarningsForChannel;
            report = report.bind(oscar)(options);
            oscar = 4;
            oscar = verify[oscar];
            golf = golf.bind(entity)(oscar);
            oscar = golf.useChannelSafetyWarning;
            mike = _closure1_slot2;
            mike = mike.INAPPROPRIATE_CONVERSATION_TIER_2;
            mike = oscar.bind(golf)(options, mike);
            if(!tango) { _fun89548_ip = 169; continue _fun89548 }
 130:
            if(!zulu) { _fun89548_ip = 169; continue _fun89548 }
 133:
            tango = report.length;
            zulu = 0;
            if(!(zulu !== tango)) { _fun89548_ip = 169; continue _fun89548 }
 144:
            tango = report.some;
            zulu = function(argFoo) {
                _fun89549: for(var _fun89549_ip = 0; ; ) switch(_fun89549_ip) {
 0:
                    zulu = argFoo;
                    tango = zulu.type;
                    entity = _closure1_slot2;
                    entity = entity.INAPPROPRIATE_CONVERSATION_TIER_1;
                    entity = tango === entity;
                    if(entity) { _fun89549_ip = 65; continue _fun89549 }
 28:
                    tango = zulu.type;
                    mike = _closure1_slot2;
                    mike = mike.INAPPROPRIATE_CONVERSATION_TIER_2;
                    mike = tango === mike;
                    if(!mike) { _fun89549_ip = 62; continue _fun89549 }
 50:
                    tango = zulu.dismiss_timestamp;
                    zulu = null;
                    mike = zulu != tango;
 62:
                    entity = mike;
 65:
                    return entity;
                }
            };
            zulu = tango.bind(report)(zulu);
            if(zulu) { _fun89548_ip = 169; continue _fun89548 }
 167:
            return mike;
 169:
            return entity;
        }
    };
    zulu['useInappropriateConversationBannerForChannel'] = mike;
    return entity;
})();