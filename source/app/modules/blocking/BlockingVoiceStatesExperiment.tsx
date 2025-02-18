// app/modules/blocking/BlockingVoiceStatesExperiment.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    option = argBar;
    zuuluu = argFre;
    verify = argPlu;
    var _closure1_slot0 = option;
    var _closure1_slot1 = verify;
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
    yankee = michal.CommonTriggerPoints;
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
    offset = option.bind(entity)(tangon);
    golfie = offset.createExperiment;
    tangon = {'kind': 'user', 'id': '2024-08_blocking_voice_states', 'label': 'Blocking Voice States (Blocker)'};
    romeon = {'enabled': false, 'analyticsEligible': false};
    tangon['defaultConfig'] = romeon;
    romeon = yankee.CONNECTION_OPEN;
    tangon['commonTriggerPoint'] = romeon;
    foxtra = {'id': 0, 'label': 'Control'};
    romeon = {'enabled': false, 'analyticsEligible': true};
    foxtra['config'] = romeon;
    romeon = new Array(2);
    romeon[0] = foxtra;
    foxtra = {'id': 1, 'label': 'Enabled'};
    backup = {'enabled': true, 'analyticsEligible': true};
    foxtra['config'] = backup;
    romeon[1] = foxtra;
    tangon['treatments'] = romeon;
    tangon = golfie.bind(offset)(tangon);
    var _closure1_slot2 = tangon;
    michal = verify[michal];
    offset = option.bind(entity)(michal);
    golfie = offset.createExperiment;
    michal = {'kind': 'user', 'id': '2024-09_blocking_voice_states_blockee', 'label': 'Blocking Voice States (Blockee)'};
    romeon = {'enabled': false, 'analyticsEligible': false};
    michal['defaultConfig'] = romeon;
    yankee = yankee.CONNECTION_OPEN;
    michal['commonTriggerPoint'] = yankee;
    romeon = {'id': 0, 'label': 'Control'};
    yankee = {'enabled': false, 'analyticsEligible': true};
    romeon['config'] = yankee;
    yankee = new Array(2);
    yankee[0] = romeon;
    romeon = {'id': 1, 'label': 'Enabled'};
    foxtra = {'enabled': true, 'analyticsEligible': true};
    romeon['config'] = foxtra;
    yankee[1] = romeon;
    michal['treatments'] = yankee;
    michal = golfie.bind(offset)(michal);
    var _closure1_slot3 = michal;
    golfie = 3;
    golfie = verify[golfie];
    verify = option.bind(entity)(golfie);
    option = verify.fileFinishedImporting;
    golfie = 'modules/blocking/BlockingVoiceStatesExperiment.tsx';
    golfie = option.bind(verify)(golfie);
    zuuluu['BlockingVoiceStateTreatments'] = oscard;
    oscard = function(argFoo) { // Original name: isBlockingVoiceStatesEnabledBlocker
        zuuluu = _closure1_slot2;
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
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = _closure1_slot2;
            zuuluu = tangon.getCurrentConfig;
            entity = {};
            report = argFoo;
            entity['location'] = report;
            entity = zuuluu.bind(tangon)(entity);
            entity = entity.analyticsEligible;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            michal = 2;
            zuuluu = zuuluu[michal];
            michal = undefined;
            tangon = tangon.bind(michal)(zuuluu);
            zuuluu = tangon.isEligibleForStealthRemediation;
            michal = {};
            report = 'is_eligible_for_blocking_voice_states_analytics_blocker';
            michal['location'] = report;
            michal = zuuluu.bind(tangon)(michal);
            if(!entity) { _fun00002_ip = 84; continue _fun00001 }
 81:
            entity = !michal;
 84:
            return entity;
        }
    };
    zuuluu['isEligibleForBlockingVoiceStatesAnalyticsBlocker'] = oscard;
    oscard = function(argFoo) { // Original name: useBlockingVoiceStatesConfigForBlocker
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            golfie = argFoo;
            oscard = _closure1_slot2;
            zuuluu = oscard.useExperiment;
            michal = {};
            michal['location'] = golfie;
            zuuluu = zuuluu.bind(oscard)(michal);
            tangon = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 2;
            michal = michal[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(michal);
            michal = tangon.useIsStealthRemediationEnabled;
            entity = {};
            report = 'use_blocking_voice_states_config_for_blocker';
            entity['location'] = report;
            michal = michal.bind(tangon)(entity);
            entity = {};
            report = oscard.useExperiment;
            tangon = {};
            tangon['location'] = golfie;
            option = report.bind(oscard)(tangon);
            verify = entity;
            tangon = copyDataProperties(verify, option);
            zuuluu = zuuluu.analyticsEligible;
            if(!zuuluu) { _fun00004_ip = 110; continue _fun00003 }
 107:
            zuuluu = !michal;
 110:
            michal = 'analyticsEligible';
            entity[michal] = zuuluu;
            return entity;
        }
    };
    zuuluu['useBlockingVoiceStatesConfigForBlocker'] = oscard;
    oscard = function(argFoo) { // Original name: isBlockingVoiceStatesEnabledBlockee
        zuuluu = _closure1_slot3;
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
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = _closure1_slot3;
            zuuluu = tangon.getCurrentConfig;
            entity = {};
            report = argFoo;
            entity['location'] = report;
            entity = zuuluu.bind(tangon)(entity);
            entity = entity.analyticsEligible;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            michal = 2;
            zuuluu = zuuluu[michal];
            michal = undefined;
            tangon = tangon.bind(michal)(zuuluu);
            zuuluu = tangon.isEligibleForStealthRemediation;
            michal = {};
            report = 'is_eligible_for_blocking_voice_states_analytics_blockee';
            michal['location'] = report;
            michal = zuuluu.bind(tangon)(michal);
            if(!entity) { _fun00006_ip = 84; continue _fun00005 }
 81:
            entity = !michal;
 84:
            return entity;
        }
    };
    zuuluu['isEligibleForBlockingVoiceStatesAnalyticsBlockee'] = oscard;
    oscard = function(argFoo) { // Original name: useIsEligibleForBlockingVoiceStatesAnalyticsBlockee
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            michal = 2;
            zuuluu = zuuluu[michal];
            michal = undefined;
            tangon = tangon.bind(michal)(zuuluu);
            zuuluu = tangon.useIsStealthRemediationEnabled;
            michal = {};
            report = 'use_is_eligible_for_blocking_voice_states_analytics_blockee';
            michal['location'] = report;
            michal = zuuluu.bind(tangon)(michal);
            tangon = _closure1_slot3;
            zuuluu = tangon.useExperiment;
            entity = {};
            report = argFoo;
            entity['location'] = report;
            entity = zuuluu.bind(tangon)(entity);
            entity = entity.analyticsEligible;
            if(!entity) { _fun00008_ip = 84; continue _fun00007 }
 81:
            entity = !michal;
 84:
            return entity;
        }
    };
    zuuluu['useIsEligibleForBlockingVoiceStatesAnalyticsBlockee'] = oscard;
    oscard = function(argFoo) { // Original name: useBlockingVoiceStatesConfigForBlockee
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            golfie = argFoo;
            oscard = _closure1_slot3;
            zuuluu = oscard.useExperiment;
            michal = {};
            michal['location'] = golfie;
            zuuluu = zuuluu.bind(oscard)(michal);
            tangon = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 2;
            michal = michal[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(michal);
            michal = tangon.useIsStealthRemediationEnabled;
            entity = {};
            report = 'use_blocking_voice_states_config_for_blockee';
            entity['location'] = report;
            michal = michal.bind(tangon)(entity);
            entity = {};
            report = oscard.useExperiment;
            tangon = {};
            tangon['location'] = golfie;
            option = report.bind(oscard)(tangon);
            verify = entity;
            tangon = copyDataProperties(verify, option);
            zuuluu = zuuluu.analyticsEligible;
            if(!zuuluu) { _fun00010_ip = 110; continue _fun00009 }
 107:
            zuuluu = !michal;
 110:
            michal = 'analyticsEligible';
            entity[michal] = zuuluu;
            return entity;
        }
    };
    zuuluu['useBlockingVoiceStatesConfigForBlockee'] = oscard;
    oscard = function(argFoo) { // Original name: getBlockingVoiceStatesExperimentConfigs
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            golfie = argFoo;
            tangon = _closure1_slot3;
            zuuluu = tangon.getCurrentConfig;
            michal = {};
            michal['location'] = golfie;
            michal = zuuluu.bind(tangon)(michal);
            oscard = michal.enabled;
            michal = michal.analyticsEligible;
            report = _closure1_slot2;
            tangon = report.getCurrentConfig;
            zuuluu = {};
            zuuluu['location'] = golfie;
            zuuluu = tangon.bind(report)(zuuluu);
            report = zuuluu.enabled;
            tangon = zuuluu.analyticsEligible;
            golfie = _closure1_slot0;
            zuuluu = _closure1_slot1;
            entity = 2;
            zuuluu = zuuluu[entity];
            entity = undefined;
            golfie = golfie.bind(entity)(zuuluu);
            zuuluu = golfie.isEligibleForStealthRemediation;
            entity = {};
            option = 'get_blocking_voice_states_experiment_configs';
            entity['location'] = option;
            zuuluu = zuuluu.bind(golfie)(entity);
            entity = {};
            entity['blockeeExperimentEnabled'] = oscard;
            entity['blockerExperimentEnabled'] = report;
            if(michal) { _fun00012_ip = 133; continue _fun00011 }
 130:
            michal = tangon;
 133:
            if(!michal) { _fun00012_ip = 139; continue _fun00011 }
 136:
            michal = !zuuluu;
 139:
            entity['analyticsEligible'] = michal;
            return entity;
        }
    };
    zuuluu['getBlockingVoiceStatesExperimentConfigs'] = oscard;
    report = function(argFoo) { // Original name: useBlockingVoiceStatesExperimentConfigs
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            golfie = argFoo;
            tangon = _closure1_slot3;
            zuuluu = tangon.useExperiment;
            michal = {};
            michal['location'] = golfie;
            michal = zuuluu.bind(tangon)(michal);
            oscard = michal.enabled;
            michal = michal.analyticsEligible;
            report = _closure1_slot2;
            tangon = report.useExperiment;
            zuuluu = {};
            zuuluu['location'] = golfie;
            zuuluu = tangon.bind(report)(zuuluu);
            report = zuuluu.enabled;
            tangon = zuuluu.analyticsEligible;
            golfie = _closure1_slot0;
            zuuluu = _closure1_slot1;
            entity = 2;
            zuuluu = zuuluu[entity];
            entity = undefined;
            golfie = golfie.bind(entity)(zuuluu);
            zuuluu = golfie.useIsStealthRemediationEnabled;
            entity = {};
            option = 'use_blocking_voice_states_experiment_configs';
            entity['location'] = option;
            zuuluu = zuuluu.bind(golfie)(entity);
            entity = {};
            entity['blockeeExperimentEnabled'] = oscard;
            entity['blockerExperimentEnabled'] = report;
            if(michal) { _fun00014_ip = 133; continue _fun00013 }
 130:
            michal = tangon;
 133:
            if(!michal) { _fun00014_ip = 139; continue _fun00013 }
 136:
            michal = !zuuluu;
 139:
            entity['analyticsEligible'] = michal;
            return entity;
        }
    };
    zuuluu['useBlockingVoiceStatesExperimentConfigs'] = report;
    zuuluu['BlockingVoiceStatesExperimentBlocker'] = tangon;
    zuuluu['BlockingVoiceStatesExperimentBlockee'] = michal;
    return entity;
})();