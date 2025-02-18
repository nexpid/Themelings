// app/modules/voice_panel/native/hooks/useVoicePanelNavArrowPressed.tsx
export default (function(_, argBar, argBaz, argCor, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.VoicePanelControlsModes;
    var _closure1_slot3 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/voice_panel/native/hooks/useVoicePanelNavArrowPressed.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: useVoicePanelNavArrowPressed
        tangon = _closure1_slot2;
        zuuluu = tangon.useContext;
        oscard = _closure1_slot0;
        report = _closure1_slot1;
        michal = 2;
        report = report[michal];
        michal = undefined;
        michal = oscard.bind(michal)(report);
        michal = zuuluu.bind(tangon)(michal);
        option = michal.focused;
        var _closure2_slot0 = option;
        report = michal.setFocused;
        var _closure2_slot1 = report;
        oscard = michal.dismissPanel;
        var _closure2_slot2 = oscard;
        golfie = michal.controlsSpecs;
        var _closure2_slot3 = golfie;
        zuuluu = tangon.useCallback;
        michal = new Array(4);
        michal[0] = option;
        michal[1] = golfie;
        michal[2] = oscard;
        michal[3] = report;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zuuluu = _closure2_slot0;
                entity = zuuluu.get;
                report = entity.bind(zuuluu)();
                tangon = null;
                oscard = tangon == report;
                zuuluu = undefined;
                entity = undefined;
                if(oscard) { _fun00002_ip = 34; continue _fun00001 }
 29:
                entity = report.id;
 34:
                if(!(tangon != entity)) { _fun00002_ip = 73; continue _fun00001 }
 38:
                report = _closure2_slot3;
                entity = report.get;
                entity = entity.bind(report)();
                report = entity.mode;
                entity = _closure1_slot3;
                entity = entity.DRAWER;
                if(!(report === entity)) { _fun00002_ip = 83; continue _fun00001 }
 73:
                entity = _closure2_slot2;
                entity = entity.bind(zuuluu)();
                _fun00002_ip = 94; continue _fun00001;
 83:
                michal = _closure2_slot1;
                michal = michal.bind(zuuluu)(tangon);
                entity = true;
 94:
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();