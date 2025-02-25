// app/modules/blocking/BlockingVoiceStatesExperiment.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    option = argBar;
    zuuluu = argFre;
    verify = argPlu;
    entity = global;
    oscard = entity.Object;
    tangon = oscard.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = tangon.bind(oscard)(zuuluu, entity, michal);
    tangon = 0;
    michal = verify[tangon];
    entity = undefined;
    michal = option.bind(entity)(michal);
    romeon = michal.CommonTriggerPoints;
    oscard = {};
    oscard['SHOW'] = tangon;
    michal = 'SHOW';
    oscard[tangon] = michal;
    michal = 1;
    oscard['HIDE'] = michal;
    tangon = 'HIDE';
    oscard[michal] = tangon;
    golfie = 2;
    oscard['DERANK'] = golfie;
    tangon = 'DERANK';
    oscard[golfie] = tangon;
    tangon = verify[michal];
    yankee = option.bind(entity)(tangon);
    offset = yankee.createExperiment;
    tangon = {'kind': 'user', 'id': '2024-08_blocking_voice_states', 'label': 'Blocking Voice States (Blocker)'};
    foxtra = {'enabled': false, 'analyticsEligible': false};
    tangon['defaultConfig'] = foxtra;
    foxtra = romeon.CONNECTION_OPEN;
    tangon['commonTriggerPoint'] = foxtra;
    backup = {'id': 0, 'label': 'Control'};
    foxtra = {'enabled': false, 'analyticsEligible': true};
    backup['config'] = foxtra;
    foxtra = new Array(2);
    foxtra[0] = backup;
    backup = {'id': 1, 'label': 'Enabled'};
    kiloes = {'enabled': true, 'analyticsEligible': true};
    backup['config'] = kiloes;
    foxtra[1] = backup;
    tangon['treatments'] = foxtra;
    tangon = offset.bind(yankee)(tangon);
    var _closure1_slot0 = tangon;
    michal = verify[michal];
    yankee = option.bind(entity)(michal);
    offset = yankee.createExperiment;
    michal = {'kind': 'user', 'id': '2024-09_blocking_voice_states_blockee', 'label': 'Blocking Voice States (Blockee)'};
    foxtra = {'enabled': false, 'analyticsEligible': false};
    michal['defaultConfig'] = foxtra;
    romeon = romeon.CONNECTION_OPEN;
    michal['commonTriggerPoint'] = romeon;
    foxtra = {'id': 0, 'label': 'Control'};
    romeon = {'enabled': false, 'analyticsEligible': true};
    foxtra['config'] = romeon;
    romeon = new Array(2);
    romeon[0] = foxtra;
    foxtra = {'id': 1, 'label': 'Enabled'};
    backup = {'enabled': true, 'analyticsEligible': true};
    foxtra['config'] = backup;
    romeon[1] = foxtra;
    michal['treatments'] = romeon;
    michal = offset.bind(yankee)(michal);
    var _closure1_slot1 = michal;
    golfie = verify[golfie];
    verify = option.bind(entity)(golfie);
    option = verify.fileFinishedImporting;
    golfie = 'modules/blocking/BlockingVoiceStatesExperiment.tsx';
    golfie = option.bind(verify)(golfie);
    zuuluu['BlockingVoiceStateTreatments'] = oscard;
    oscard = function(argFoo) { // Original name: isBlockingVoiceStatesEnabledBlocker
        zuuluu = _closure1_slot0;
        michal = zuuluu.getCurrentConfig;
        entity = {};
        tangon = argFoo;
        entity['location'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        entity = entity.enabled;
        return entity;
    };
    zuuluu['isBlockingVoiceStatesEnabledBlocker'] = oscard;
    oscard = function(argFoo) { // Original name: isEligibleForBlockingVoiceStatesAnalyticsBlocker
        zuuluu = _closure1_slot0;
        michal = zuuluu.getCurrentConfig;
        entity = {};
        tangon = argFoo;
        entity['location'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        entity = entity.analyticsEligible;
        return entity;
    };
    zuuluu['isEligibleForBlockingVoiceStatesAnalyticsBlocker'] = oscard;
    oscard = function(argFoo) { // Original name: useBlockingVoiceStatesConfigForBlocker
        oscard = argFoo;
        report = _closure1_slot0;
        michal = report.useExperiment;
        entity = {};
        entity['location'] = oscard;
        entity = michal.bind(report)(entity);
        zuuluu = entity.analyticsEligible;
        entity = {};
        tangon = report.useExperiment;
        michal = {};
        michal['location'] = oscard;
        golfie = tangon.bind(report)(michal);
        option = entity;
        michal = copyDataProperties(option, golfie);
        michal = 'analyticsEligible';
        entity[michal] = zuuluu;
        return entity;
    };
    zuuluu['useBlockingVoiceStatesConfigForBlocker'] = oscard;
    oscard = function(argFoo) { // Original name: isBlockingVoiceStatesEnabledBlockee
        zuuluu = _closure1_slot1;
        michal = zuuluu.getCurrentConfig;
        entity = {};
        tangon = argFoo;
        entity['location'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        entity = entity.enabled;
        return entity;
    };
    zuuluu['isBlockingVoiceStatesEnabledBlockee'] = oscard;
    oscard = function(argFoo) { // Original name: isEligibleForBlockingVoiceStatesAnalyticsBlockee
        zuuluu = _closure1_slot1;
        michal = zuuluu.getCurrentConfig;
        entity = {};
        tangon = argFoo;
        entity['location'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        entity = entity.analyticsEligible;
        return entity;
    };
    zuuluu['isEligibleForBlockingVoiceStatesAnalyticsBlockee'] = oscard;
    oscard = function(argFoo) { // Original name: useIsEligibleForBlockingVoiceStatesAnalyticsBlockee
        zuuluu = _closure1_slot1;
        michal = zuuluu.useExperiment;
        entity = {};
        tangon = argFoo;
        entity['location'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        entity = entity.analyticsEligible;
        return entity;
    };
    zuuluu['useIsEligibleForBlockingVoiceStatesAnalyticsBlockee'] = oscard;
    oscard = function(argFoo) { // Original name: useBlockingVoiceStatesConfigForBlockee
        oscard = argFoo;
        report = _closure1_slot1;
        michal = report.useExperiment;
        entity = {};
        entity['location'] = oscard;
        entity = michal.bind(report)(entity);
        zuuluu = entity.analyticsEligible;
        entity = {};
        tangon = report.useExperiment;
        michal = {};
        michal['location'] = oscard;
        golfie = tangon.bind(report)(michal);
        option = entity;
        michal = copyDataProperties(option, golfie);
        michal = 'analyticsEligible';
        entity[michal] = zuuluu;
        return entity;
    };
    zuuluu['useBlockingVoiceStatesConfigForBlockee'] = oscard;
    oscard = function(argFoo) { // Original name: getBlockingVoiceStatesExperimentConfigs
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argFoo;
            tangon = _closure1_slot1;
            zuuluu = tangon.getCurrentConfig;
            michal = {};
            michal['location'] = oscard;
            michal = zuuluu.bind(tangon)(michal);
            report = michal.enabled;
            michal = michal.analyticsEligible;
            tangon = _closure1_slot0;
            zuuluu = tangon.getCurrentConfig;
            entity = {};
            entity['location'] = oscard;
            entity = zuuluu.bind(tangon)(entity);
            tangon = entity.enabled;
            zuuluu = entity.analyticsEligible;
            entity = {};
            entity['blockeeExperimentEnabled'] = report;
            entity['blockerExperimentEnabled'] = tangon;
            if(michal) { _fun00002_ip = 88; continue _fun00001 }
 85:
            michal = zuuluu;
 88:
            entity['analyticsEligible'] = michal;
            return entity;
        }
    };
    zuuluu['getBlockingVoiceStatesExperimentConfigs'] = oscard;
    report = function(argFoo) { // Original name: useBlockingVoiceStatesExperimentConfigs
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            oscard = argFoo;
            tangon = _closure1_slot1;
            zuuluu = tangon.useExperiment;
            michal = {};
            michal['location'] = oscard;
            michal = zuuluu.bind(tangon)(michal);
            report = michal.enabled;
            michal = michal.analyticsEligible;
            tangon = _closure1_slot0;
            zuuluu = tangon.useExperiment;
            entity = {};
            entity['location'] = oscard;
            entity = zuuluu.bind(tangon)(entity);
            tangon = entity.enabled;
            zuuluu = entity.analyticsEligible;
            entity = {};
            entity['blockeeExperimentEnabled'] = report;
            entity['blockerExperimentEnabled'] = tangon;
            if(michal) { _fun00004_ip = 88; continue _fun00003 }
 85:
            michal = zuuluu;
 88:
            entity['analyticsEligible'] = michal;
            return entity;
        }
    };
    zuuluu['useBlockingVoiceStatesExperimentConfigs'] = report;
    zuuluu['BlockingVoiceStatesExperimentBlocker'] = tangon;
    zuuluu['BlockingVoiceStatesExperimentBlockee'] = michal;
    return entity;
})();