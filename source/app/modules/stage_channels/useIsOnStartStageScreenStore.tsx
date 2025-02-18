// app/modules/stage_channels/useIsOnStartStageScreenStore.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    golfie = argBar;
    oscard = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = oscard;
    var _closure1_slot2 = option;
    tangon = function(argFoo) { // Original name: setIsOnStartStageScreen
        entity = argFoo;
        var _closure2_slot0 = entity;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        entity = 4;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.batchUpdates;
        michal = function() {
            zuuluu = _closure1_slot6;
            michal = zuuluu.setState;
            entity = {};
            tangon = _closure2_slot0;
            entity['isOnStartStageScreen'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    var _closure1_slot7 = tangon;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    verify = option[entity];
    report = argCor;
    entity = undefined;
    report = report.bind(entity)(verify);
    var _closure1_slot3 = report;
    report = 1;
    report = option[report];
    report = oscard.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = option[report];
    report = oscard.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    report = option[report];
    verify = golfie.bind(entity)(report);
    oscard = verify.create;
    report = function() {
        entity = {};
        michal = true;
        entity['isOnStartStageScreen'] = michal;
        return entity;
    };
    report = oscard.bind(verify)(report);
    var _closure1_slot6 = report;
    oscard = 8;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/stage_channels/useIsOnStartStageScreenStore.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['default'] = report;
    zuuluu['setIsOnStartStageScreen'] = tangon;
    michal = function(argFoo) { // Original name: useUpdateIsOnStartStageScreenEffect
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            var _closure2_slot0 = tangon;
            oscard = _closure1_slot0;
            verify = _closure1_slot2;
            report = 5;
            golfie = verify[report];
            entity = undefined;
            yankee = oscard.bind(entity)(golfie);
            offset = yankee.useStateFromStores;
            golfie = _closure1_slot5;
            option = new Array(1);
            option[0] = golfie;
            golfie = function() {
                michal = _closure1_slot5;
                entity = michal.getVoiceChannelId;
                michal = entity.bind(michal)();
                entity = _closure2_slot0;
                entity = entity.id;
                entity = michal === entity;
                return entity;
            };
            golfie = offset.bind(yankee)(option, golfie);
            var _closure2_slot1 = golfie;
            report = verify[report];
            yankee = oscard.bind(entity)(report);
            offset = yankee.useStateFromStores;
            report = _closure1_slot4;
            option = new Array(1);
            option[0] = report;
            oscard = new Array(1);
            oscard[0] = tangon;
            report = function() {
                tangon = _closure1_slot4;
                zuuluu = tangon.can;
                report = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 6;
                michal = michal[entity];
                entity = undefined;
                entity = report.bind(entity)(michal);
                michal = entity.MODERATE_STAGE_CHANNEL_PERMISSIONS;
                entity = _closure2_slot0;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            report = offset.bind(yankee)(option, report, oscard);
            option = _closure1_slot1;
            oscard = 7;
            oscard = verify[oscard];
            oscard = option.bind(entity)(oscard);
            tangon = tangon.id;
            tangon = oscard.bind(entity)(tangon);
            oscard = report;
            if(!oscard) { _fun00002_ip = 147; continue _fun00001 }
 144:
            oscard = !tangon;
 147:
            var _closure2_slot2 = oscard;
            report = _closure1_slot3;
            tangon = report.useEffect;
            zuuluu = new Array(2);
            zuuluu[0] = golfie;
            zuuluu[1] = oscard;
            michal = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot1;
                    if(michal) { _fun00004_ip = 30; continue _fun00003 }
 10:
                    tangon = _closure1_slot7;
                    zuuluu = _closure2_slot2;
                    michal = undefined;
                    michal = tangon.bind(michal)(zuuluu);
                    _fun00004_ip = 53; continue _fun00003;
 30:
                    entity = _closure2_slot2;
                    if(entity) { _fun00004_ip = 53; continue _fun00003 }
 37:
                    zuuluu = _closure1_slot7;
                    michal = undefined;
                    entity = false;
                    entity = zuuluu.bind(michal)(entity);
 53:
                    entity = undefined;
                    return entity;
                }
            };
            michal = tangon.bind(report)(michal, zuuluu);
            return entity;
        }
    };
    zuuluu['useUpdateIsOnStartStageScreenEffect'] = michal;
    return entity;
})();