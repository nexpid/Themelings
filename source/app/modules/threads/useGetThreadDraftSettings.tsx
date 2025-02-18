// app/modules/threads/useGetThreadDraftSettings.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/threads/useGetThreadDraftSettings.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: useGetThreadDraftSettings
        michal = argFoo;
        var _closure2_slot0 = michal;
        report = _closure1_slot0;
        tangon = _closure1_slot2;
        zuuluu = 1;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        tangon = report.bind(zuuluu)(tangon);
        zuuluu = tangon.useStateFromStores;
        report = _closure1_slot3;
        michal = new Array(1);
        michal[0] = report;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = _closure2_slot0;
                tangon = null;
                michal = tangon == entity;
                entity = null;
                if(michal) { _fun00002_ip = 99; continue _fun00001 }
 18:
                golfie = _closure1_slot3;
                report = golfie.getThreadSettings;
                michal = _closure2_slot0;
                michal = report.bind(golfie)(michal);
                if(!(tangon == michal)) { _fun00002_ip = 96; continue _fun00001 }
 44:
                report = _closure1_slot3;
                tangon = report.getThreadDraftWithParentMessageId;
                option = _closure1_slot1;
                golfie = _closure1_slot2;
                oscard = 2;
                golfie = golfie[oscard];
                oscard = undefined;
                golfie = option.bind(oscard)(golfie);
                oscard = golfie.castChannelIdAsMessageId;
                zuuluu = _closure2_slot0;
                zuuluu = oscard.bind(golfie)(zuuluu);
                michal = tangon.bind(report)(zuuluu);
 96:
                entity = michal;
 99:
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['default'] = tangon;
    michal = function(argFoo) { // Original name: useHasThreadDraft
        michal = argFoo;
        var _closure2_slot0 = michal;
        report = _closure1_slot0;
        tangon = _closure1_slot2;
        zuuluu = 1;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        tangon = report.bind(zuuluu)(tangon);
        zuuluu = tangon.useStateFromStores;
        report = _closure1_slot3;
        michal = new Array(1);
        michal[0] = report;
        entity = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                entity = _closure2_slot0;
                zuuluu = null;
                entity = zuuluu != entity;
                if(!entity) { _fun00004_ip = 98; continue _fun00003 }
 16:
                oscard = _closure1_slot3;
                report = oscard.getThreadSettings;
                michal = _closure2_slot0;
                michal = report.bind(oscard)(michal);
                if(!(zuuluu == michal)) { _fun00004_ip = 94; continue _fun00003 }
 42:
                oscard = _closure1_slot3;
                report = oscard.getThreadDraftWithParentMessageId;
                verify = _closure1_slot1;
                option = _closure1_slot2;
                golfie = 2;
                option = option[golfie];
                golfie = undefined;
                option = verify.bind(golfie)(option);
                golfie = option.castChannelIdAsMessageId;
                tangon = _closure2_slot0;
                tangon = golfie.bind(option)(tangon);
                michal = report.bind(oscard)(tangon);
 94:
                entity = zuuluu != michal;
 98:
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['useHasThreadDraft'] = michal;
    return entity;
})();