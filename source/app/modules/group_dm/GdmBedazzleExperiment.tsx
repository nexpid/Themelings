// app/modules/group_dm/GdmBedazzleExperiment.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    tangon = function(argFoo, argBar, argBaz) { // Original name: useGdmBedazzleExperiment
        tangon = _closure1_slot0;
        zuuluu = tangon.useExperiment;
        michal = {};
        entity = argFoo;
        michal['location'] = entity;
        entity = argBar;
        michal['guildId'] = entity;
        entity = argBaz;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot1 = tangon;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    offset = oscard.bind(entity)(report);
    verify = offset.createExperiment;
    option = {'kind': 'guild', 'id': '2025-04_gdm_bedazzling', 'label': 'GDM Bedazzling'};
    report = {'enabled': false, 'unifiedEditing': false};
    option['defaultConfig'] = report;
    romeon = {'id': 1, 'label': 'Enabled - T1 - Unified editing'};
    report = 1;
    yankee = {'enabled': true, 'unifiedEditing': true};
    romeon['config'] = yankee;
    yankee = new Array(2);
    yankee[0] = romeon;
    romeon = {'id': 2, 'label': 'Enabled - T2 - Retain Change Icon'};
    foxtra = {'enabled': true, 'unifiedEditing': false};
    romeon['config'] = foxtra;
    yankee[1] = romeon;
    option['treatments'] = yankee;
    option = verify.bind(offset)(option);
    var _closure1_slot0 = option;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/group_dm/GdmBedazzleExperiment.tsx';
    report = oscard.bind(golfie)(report);
    report = function(argFoo, argBar, argBaz) { // Original name: isGdmBedazzleExperimentEnabled
        tangon = _closure1_slot0;
        zuuluu = tangon.getCurrentConfig;
        michal = {};
        entity = argFoo;
        michal['location'] = entity;
        entity = argBar;
        michal['guildId'] = entity;
        entity = argBaz;
        entity = zuuluu.bind(tangon)(michal, entity);
        entity = entity.enabled;
        return entity;
    };
    zuuluu['isGdmBedazzleExperimentEnabled'] = report;
    zuuluu['useGdmBedazzleExperiment'] = tangon;
    tangon = function(argFoo, argBar, argBaz) { // Original name: useIsGdmBedazzleExperimentEnabled
        report = _closure1_slot1;
        tangon = undefined;
        zuuluu = argFoo;
        michal = argBar;
        entity = argBaz;
        entity = report.bind(tangon)(zuuluu, michal, entity);
        entity = entity.enabled;
        return entity;
    };
    zuuluu['useIsGdmBedazzleExperimentEnabled'] = tangon;
    michal = function(argFoo, argBar) { // Original name: useIsGdmIconChangeItemEnabled
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = _closure1_slot1;
            zuuluu = undefined;
            michal = argFoo;
            entity = argBar;
            michal = tangon.bind(zuuluu)(michal, entity);
            entity = michal.enabled;
            michal = michal.unifiedEditing;
            entity = !entity;
            if(entity) { _fun00002_ip = 41; continue _fun00001 }
 38:
            entity = !michal;
 41:
            return entity;
        }
    };
    zuuluu['useIsGdmIconChangeItemEnabled'] = michal;
    return entity;
})();