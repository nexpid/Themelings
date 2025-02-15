// app/modules/ato_alerts/hooks/useLikelyAtoWarning.tsx
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
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/ato_alerts/hooks/useLikelyAtoWarning.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useLikelyAtoWarning
        _fun89568: for(var _fun89568_ip = 0; ; ) switch(_fun89568_ip) {
 0:
            options = argFoo;
            golf = _closure1_slot0;
            verify = _closure1_slot1;
            entity = 1;
            zulu = verify[entity];
            entity = undefined;
            tango = golf.bind(entity)(zulu);
            zulu = tango.useIsSpamMessageRequest;
            oscar = zulu.bind(tango)(options);
            zulu = 2;
            zulu = verify[zulu];
            tango = golf.bind(entity)(zulu);
            zulu = tango.useIsMessageRequest;
            report = zulu.bind(tango)(options);
            zulu = 3;
            zulu = verify[zulu];
            tango = golf.bind(entity)(zulu);
            zulu = tango.useChannelSafetyWarning;
            mike = _closure1_slot2;
            mike = mike.LIKELY_ATO;
            mike = zulu.bind(tango)(options, mike);
            zulu = 4;
            zulu = verify[zulu];
            tango = golf.bind(entity)(zulu);
            zulu = tango.useInappropriateConversationWarningsForChannel;
            zulu = zulu.bind(tango)(options);
            tango = zulu.length;
            zulu = 0;
            tango = tango > zulu;
            zulu = 5;
            zulu = verify[zulu];
            golf = golf.bind(entity)(zulu);
            zulu = golf.useStrangerDangerWarning;
            golf = zulu.bind(golf)(options);
            zulu = null;
            zulu = zulu != golf;
            if(oscar) { _fun89568_ip = 173; continue _fun89568 }
 162:
            if(report) { _fun89568_ip = 173; continue _fun89568 }
 165:
            if(tango) { _fun89568_ip = 173; continue _fun89568 }
 168:
            if(zulu) { _fun89568_ip = 173; continue _fun89568 }
 171:
            return mike;
 173:
            return entity;
        }
    };
    zulu['useLikelyAtoWarning'] = mike;
    return entity;
})();