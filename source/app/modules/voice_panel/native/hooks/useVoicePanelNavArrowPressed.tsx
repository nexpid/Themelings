// app/modules/voice_panel/native/hooks/useVoicePanelNavArrowPressed.tsx
export default (function(_, argBar, argBaz, argCorge, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    entity = argBaz;
    var _closure1_slot0 = entity;
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
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.VoicePanelControlsModes;
    var _closure1_slot3 = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/voice_panel/native/hooks/useVoicePanelNavArrowPressed.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: useVoicePanelNavArrowPressed
        tango = _closure1_slot2;
        zulu = tango.useContext;
        oscar = _closure1_slot0;
        report = _closure1_slot1;
        mike = 2;
        report = report[mike];
        mike = undefined;
        mike = oscar.bind(mike)(report);
        mike = zulu.bind(tango)(mike);
        options = mike.focused;
        var _closure2_slot0 = options;
        report = mike.setFocused;
        var _closure2_slot1 = report;
        oscar = mike.dismissPanel;
        var _closure2_slot2 = oscar;
        golf = mike.controlsSpecs;
        var _closure2_slot3 = golf;
        zulu = tango.useCallback;
        mike = new Array(4);
        mike[0] = options;
        mike[1] = golf;
        mike[2] = oscar;
        mike[3] = report;
        entity = function() {
            _fun121797: for(var _fun121797_ip = 0; ; ) switch(_fun121797_ip) {
 0:
                zulu = _closure2_slot0;
                entity = zulu.get;
                report = entity.bind(zulu)();
                tango = null;
                oscar = tango == report;
                zulu = undefined;
                entity = undefined;
                if(oscar) { _fun121797_ip = 34; continue _fun121797 }
 29:
                entity = report.id;
 34:
                if(!(tango != entity)) { _fun121797_ip = 73; continue _fun121797 }
 38:
                report = _closure2_slot3;
                entity = report.get;
                entity = entity.bind(report)();
                report = entity.mode;
                entity = _closure1_slot3;
                entity = entity.DRAWER;
                if(!(report === entity)) { _fun121797_ip = 83; continue _fun121797 }
 73:
                entity = _closure2_slot2;
                entity = entity.bind(zulu)();
                _fun121797_ip = 94; continue _fun121797;
 83:
                mike = _closure2_slot1;
                mike = mike.bind(zulu)(tango);
                entity = true;
 94:
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();