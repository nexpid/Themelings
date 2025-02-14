// app/modules/voice_messages/native/useVoiceMessageTooltip.tsx
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
    golf = tango.hideVoiceMessagesTooltip;
    var _closure1_slot4 = golf;
    golf = tango.showVoiceMessagesTooltip;
    var _closure1_slot5 = golf;
    tango = tango.useVoiceMessagesUIStore;
    var _closure1_slot6 = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/voice_messages/native/useVoiceMessageTooltip.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: useVoiceMessageTooltip
        options = _closure1_slot2;
        tango = options.useRef;
        zulu = null;
        zulu = tango.bind(options)(zulu);
        report = _closure1_slot6;
        oscar = undefined;
        tango = function(argFoo) {
            entity = argFoo;
            entity = entity.showVoiceMessagesTooltip;
            return entity;
        };
        verify = report.bind(oscar)(tango);
        var _closure2_slot0 = verify;
        golf = options.useMemo;
        report = new Array(1);
        report[0] = verify;
        tango = function() {
            entity = {};
            mike = 'top';
            entity['position'] = mike;
            oscar = _closure1_slot0;
            golf = _closure1_slot1;
            mike = 3;
            zulu = golf[mike];
            report = undefined;
            zulu = oscar.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            mike = mike.t;
            mike = mike.hP6+09;
            mike = zulu.bind(tango)(mike);
            entity['label'] = mike;
            mike = _closure2_slot0;
            entity['visible'] = mike;
            return entity;
        };
        report = golf.bind(options)(tango, report);
        golf = options.useEffect;
        tango = new Array(1);
        tango[0] = verify;
        entity = function() {
            _fun101394: for(var _fun101394_ip = 0; ; ) switch(_fun101394_ip) {
 0:
                mike = _closure2_slot0;
                if(mike) { _fun101394_ip = 16; continue _fun101394 }
 12:
                mike = undefined;
                return mike;
 16:
                tango = _closure1_slot3;
                mike = tango.keyboardOrCustomKeyboardOpen;
                var _closure3_slot0 = mike;
                zulu = function() { // Original name: keyboardChangeListener
                    _fun101395: for(var _fun101395_ip = 0; ; ) switch(_fun101395_ip) {
 0:
                        zulu = _closure3_slot0;
                        mike = _closure1_slot3;
                        mike = mike.keyboardOrCustomKeyboardOpen;
                        if(!(zulu !== mike)) { _fun101395_ip = 34; continue _fun101395 }
 24:
                        mike = _closure1_slot4;
                        entity = undefined;
                        entity = mike.bind(entity)();
 34:
                        entity = undefined;
                        return entity;
                    }
                };
                var _closure3_slot1 = zulu;
                mike = tango.addChangeListener;
                mike = mike.bind(tango)(zulu);
                mike = global;
                report = mike.setTimeout;
                tango = undefined;
                zulu = function() {
                    mike = _closure1_slot4;
                    entity = undefined;
                    mike = mike.bind(entity)();
                    return entity;
                };
                mike = 2000;
                mike = report.bind(tango)(zulu, mike);
                var _closure3_slot2 = mike;
                entity = function() {
                    entity = global;
                    tango = entity.clearTimeout;
                    zulu = _closure3_slot2;
                    entity = undefined;
                    zulu = tango.bind(entity)(zulu);
                    tango = _closure1_slot3;
                    zulu = tango.removeChangeListener;
                    mike = _closure3_slot1;
                    mike = zulu.bind(tango)(mike);
                    return entity;
                };
                return entity;
            }
        };
        entity = golf.bind(options)(entity, tango);
        tango = _closure1_slot0;
        golf = _closure1_slot1;
        entity = 4;
        entity = golf[entity];
        tango = tango.bind(oscar)(entity);
        entity = tango.useTooltip;
        entity = entity.bind(tango)(zulu, report);
        entity = {};
        entity['tooltipTargetRef'] = zulu;
        mike = _closure1_slot5;
        entity['showVoiceMessagesTooltip'] = mike;
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();