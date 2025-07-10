// app/modules/main_tabs_v2/native/utils/useNavigatorConfirmChangesOnBack.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
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
    tangon = tangon.Keyboard;
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.NOOP;
    var _closure1_slot4 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/utils/useNavigatorConfirmChangesOnBack.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: useNavigatorConfirmChangesOnBack
        report = _closure1_slot2;
        michal = report.useRef;
        entity = null;
        michal = michal.bind(report)(entity);
        var _closure2_slot0 = michal;
        tangon = report.useRef;
        entity = false;
        entity = tangon.bind(report)(entity);
        var _closure2_slot1 = entity;
        entity = {};
        tangon = _closure1_slot0;
        report = _closure1_slot1;
        zuuluu = 3;
        zuuluu = report[zuuluu];
        report = undefined;
        tangon = tangon.bind(report)(zuuluu);
        zuuluu = {};
        oscard = function(argFoo) { // Original name: onBeforeGoBack
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                michal = argFoo;
                var _closure3_slot0 = michal;
                entity = michal.preventable;
                if(!entity) { _fun00002_ip = 159; continue _fun00001 }
 21:
                entity = _closure2_slot1;
                entity = entity.current;
                if(entity) { _fun00002_ip = 72; continue _fun00001 }
 36:
                zuuluu = _closure2_slot0;
                oscard = zuuluu.current;
                zuuluu = null;
                zuuluu = zuuluu == oscard;
                report = undefined;
                if(zuuluu) { _fun00002_ip = 66; continue _fun00001 }
 56:
                zuuluu = oscard.hasUnsavedChanges;
                report = zuuluu.bind(oscard)();
 66:
                zuuluu = true;
                entity = zuuluu !== report;
 72:
                if(entity) { _fun00002_ip = 159; continue _fun00001 }
 75:
                entity = michal.preventDefault;
                entity = entity.bind(michal)();
                michal = _closure1_slot3;
                entity = michal.dismiss;
                entity = entity.bind(michal)();
                michal = _closure1_slot0;
                zuuluu = _closure1_slot1;
                entity = 4;
                entity = zuuluu[entity];
                zuuluu = undefined;
                michal = michal.bind(zuuluu)(entity);
                entity = {};
                oscard = true;
                entity['hasEdits'] = oscard;
                report = _closure1_slot4;
                entity['resetPending'] = report;
                tangon = function() { // Original name: onConfirm
                    michal = _closure2_slot1;
                    entity = true;
                    michal['current'] = entity;
                    michal = _closure3_slot0;
                    entity = michal.goBack;
                    entity = entity.bind(michal)();
                    entity = undefined;
                    return entity;
                };
                entity['onConfirm'] = tangon;
                entity = michal.bind(zuuluu)(entity);
 159:
                entity = undefined;
                return entity;
            }
        };
        zuuluu['onBeforeGoBack'] = oscard;
        zuuluu = tangon.bind(report)(zuuluu);
        zuuluu = zuuluu.onGoBack;
        entity['onGoBack'] = zuuluu;
        entity['ref'] = michal;
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();