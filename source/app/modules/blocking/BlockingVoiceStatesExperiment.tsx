// app/modules/blocking/BlockingVoiceStatesExperiment.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    options = argBar;
    zulu = argFred;
    verify = argPlugh;
    var _closure1_slot0 = options;
    var _closure1_slot1 = verify;
    entity = global;
    oscar = entity.Object;
    tango = oscar.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = tango.bind(oscar)(zulu, entity, mike);
    tango = 0;
    mike = verify[tango];
    entity = undefined;
    mike = options.bind(entity)(mike);
    yankee = mike.CommonTriggerPoints;
    oscar = {};
    oscar['SHOW'] = tango;
    mike = 'SHOW';
    oscar[tango] = mike;
    mike = 1;
    oscar['HIDE'] = mike;
    tango = 'HIDE';
    oscar[mike] = tango;
    golf = 2;
    oscar['DERANK'] = golf;
    tango = 'DERANK';
    oscar[golf] = tango;
    tango = verify[mike];
    offset = options.bind(entity)(tango);
    golf = offset.createExperiment;
    tango = {'kind': 'user', 'id': '2024-08_blocking_voice_states', 'label': 'Blocking Voice States (Blocker)'};
    romeo = {'enabled': false, 'analyticsEligible': false};
    tango['defaultConfig'] = romeo;
    romeo = yankee.CONNECTION_OPEN;
    tango['commonTriggerPoint'] = romeo;
    foxtrot = {'id': 0, 'label': 'Control'};
    romeo = {'enabled': false, 'analyticsEligible': true};
    foxtrot['config'] = romeo;
    romeo = new Array(2);
    romeo[0] = foxtrot;
    foxtrot = {'id': 1, 'label': 'Enabled'};
    backup = {'enabled': true, 'analyticsEligible': true};
    foxtrot['config'] = backup;
    romeo[1] = foxtrot;
    tango['treatments'] = romeo;
    tango = golf.bind(offset)(tango);
    var _closure1_slot2 = tango;
    mike = verify[mike];
    offset = options.bind(entity)(mike);
    golf = offset.createExperiment;
    mike = {'kind': 'user', 'id': '2024-09_blocking_voice_states_blockee', 'label': 'Blocking Voice States (Blockee)'};
    romeo = {'enabled': false, 'analyticsEligible': false};
    mike['defaultConfig'] = romeo;
    yankee = yankee.CONNECTION_OPEN;
    mike['commonTriggerPoint'] = yankee;
    romeo = {'id': 0, 'label': 'Control'};
    yankee = {'enabled': false, 'analyticsEligible': true};
    romeo['config'] = yankee;
    yankee = new Array(2);
    yankee[0] = romeo;
    romeo = {'id': 1, 'label': 'Enabled'};
    foxtrot = {'enabled': true, 'analyticsEligible': true};
    romeo['config'] = foxtrot;
    yankee[1] = romeo;
    mike['treatments'] = yankee;
    mike = golf.bind(offset)(mike);
    var _closure1_slot3 = mike;
    golf = 3;
    golf = verify[golf];
    verify = options.bind(entity)(golf);
    options = verify.fileFinishedImporting;
    golf = 'modules/blocking/BlockingVoiceStatesExperiment.tsx';
    golf = options.bind(verify)(golf);
    zulu['BlockingVoiceStateTreatments'] = oscar;
    oscar = function(argFoo) { // Original name: isBlockingVoiceStatesEnabledBlocker
        zulu = _closure1_slot2;
        mike = zulu.getCurrentConfig;
        entity = {};
        tango = argFoo;
        entity['location'] = tango;
        entity = mike.bind(zulu)(entity);
        entity = entity.enabled;
        return entity;
    };
    zulu['isBlockingVoiceStatesEnabledBlocker'] = oscar;
    oscar = function(argFoo) { // Original name: isEligibleForBlockingVoiceStatesAnalyticsBlocker
        _fun79692: for(var _fun79692_ip = 0; ; ) switch(_fun79692_ip) {
 0:
            tango = _closure1_slot2;
            zulu = tango.getCurrentConfig;
            entity = {};
            report = argFoo;
            entity['location'] = report;
            entity = zulu.bind(tango)(entity);
            entity = entity.analyticsEligible;
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            mike = 2;
            zulu = zulu[mike];
            mike = undefined;
            tango = tango.bind(mike)(zulu);
            zulu = tango.isEligibleForStealthRemediation;
            mike = {};
            report = 'is_eligible_for_blocking_voice_states_analytics_blocker';
            mike['location'] = report;
            mike = zulu.bind(tango)(mike);
            if(!entity) { _fun79692_ip = 84; continue _fun79692 }
 81:
            entity = !mike;
 84:
            return entity;
        }
    };
    zulu['isEligibleForBlockingVoiceStatesAnalyticsBlocker'] = oscar;
    oscar = function(argFoo) { // Original name: useBlockingVoiceStatesConfigForBlocker
        _fun79693: for(var _fun79693_ip = 0; ; ) switch(_fun79693_ip) {
 0:
            golf = argFoo;
            oscar = _closure1_slot2;
            zulu = oscar.useExperiment;
            mike = {};
            mike['location'] = golf;
            zulu = zulu.bind(oscar)(mike);
            tango = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 2;
            mike = mike[entity];
            entity = undefined;
            tango = tango.bind(entity)(mike);
            mike = tango.useIsStealthRemediationEnabled;
            entity = {};
            report = 'use_blocking_voice_states_config_for_blocker';
            entity['location'] = report;
            mike = mike.bind(tango)(entity);
            entity = {};
            report = oscar.useExperiment;
            tango = {};
            tango['location'] = golf;
            options = report.bind(oscar)(tango);
            verify = entity;
            tango = copyDataProperties(verify, options);
            zulu = zulu.analyticsEligible;
            if(!zulu) { _fun79693_ip = 110; continue _fun79693 }
 107:
            zulu = !mike;
 110:
            mike = 'analyticsEligible';
            entity[mike] = zulu;
            return entity;
        }
    };
    zulu['useBlockingVoiceStatesConfigForBlocker'] = oscar;
    oscar = function(argFoo) { // Original name: isBlockingVoiceStatesEnabledBlockee
        zulu = _closure1_slot3;
        mike = zulu.getCurrentConfig;
        entity = {};
        tango = argFoo;
        entity['location'] = tango;
        entity = mike.bind(zulu)(entity);
        entity = entity.enabled;
        return entity;
    };
    zulu['isBlockingVoiceStatesEnabledBlockee'] = oscar;
    oscar = function(argFoo) { // Original name: isEligibleForBlockingVoiceStatesAnalyticsBlockee
        _fun79695: for(var _fun79695_ip = 0; ; ) switch(_fun79695_ip) {
 0:
            tango = _closure1_slot3;
            zulu = tango.getCurrentConfig;
            entity = {};
            report = argFoo;
            entity['location'] = report;
            entity = zulu.bind(tango)(entity);
            entity = entity.analyticsEligible;
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            mike = 2;
            zulu = zulu[mike];
            mike = undefined;
            tango = tango.bind(mike)(zulu);
            zulu = tango.isEligibleForStealthRemediation;
            mike = {};
            report = 'is_eligible_for_blocking_voice_states_analytics_blockee';
            mike['location'] = report;
            mike = zulu.bind(tango)(mike);
            if(!entity) { _fun79695_ip = 84; continue _fun79695 }
 81:
            entity = !mike;
 84:
            return entity;
        }
    };
    zulu['isEligibleForBlockingVoiceStatesAnalyticsBlockee'] = oscar;
    oscar = function(argFoo) { // Original name: useIsEligibleForBlockingVoiceStatesAnalyticsBlockee
        _fun79696: for(var _fun79696_ip = 0; ; ) switch(_fun79696_ip) {
 0:
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            mike = 2;
            zulu = zulu[mike];
            mike = undefined;
            tango = tango.bind(mike)(zulu);
            zulu = tango.useIsStealthRemediationEnabled;
            mike = {};
            report = 'use_is_eligible_for_blocking_voice_states_analytics_blockee';
            mike['location'] = report;
            mike = zulu.bind(tango)(mike);
            tango = _closure1_slot3;
            zulu = tango.useExperiment;
            entity = {};
            report = argFoo;
            entity['location'] = report;
            entity = zulu.bind(tango)(entity);
            entity = entity.analyticsEligible;
            if(!entity) { _fun79696_ip = 84; continue _fun79696 }
 81:
            entity = !mike;
 84:
            return entity;
        }
    };
    zulu['useIsEligibleForBlockingVoiceStatesAnalyticsBlockee'] = oscar;
    oscar = function(argFoo) { // Original name: useBlockingVoiceStatesConfigForBlockee
        _fun79697: for(var _fun79697_ip = 0; ; ) switch(_fun79697_ip) {
 0:
            golf = argFoo;
            oscar = _closure1_slot3;
            zulu = oscar.useExperiment;
            mike = {};
            mike['location'] = golf;
            zulu = zulu.bind(oscar)(mike);
            tango = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 2;
            mike = mike[entity];
            entity = undefined;
            tango = tango.bind(entity)(mike);
            mike = tango.useIsStealthRemediationEnabled;
            entity = {};
            report = 'use_blocking_voice_states_config_for_blockee';
            entity['location'] = report;
            mike = mike.bind(tango)(entity);
            entity = {};
            report = oscar.useExperiment;
            tango = {};
            tango['location'] = golf;
            options = report.bind(oscar)(tango);
            verify = entity;
            tango = copyDataProperties(verify, options);
            zulu = zulu.analyticsEligible;
            if(!zulu) { _fun79697_ip = 110; continue _fun79697 }
 107:
            zulu = !mike;
 110:
            mike = 'analyticsEligible';
            entity[mike] = zulu;
            return entity;
        }
    };
    zulu['useBlockingVoiceStatesConfigForBlockee'] = oscar;
    oscar = function(argFoo) { // Original name: getBlockingVoiceStatesExperimentConfigs
        _fun79698: for(var _fun79698_ip = 0; ; ) switch(_fun79698_ip) {
 0:
            golf = argFoo;
            tango = _closure1_slot3;
            zulu = tango.getCurrentConfig;
            mike = {};
            mike['location'] = golf;
            mike = zulu.bind(tango)(mike);
            oscar = mike.enabled;
            mike = mike.analyticsEligible;
            report = _closure1_slot2;
            tango = report.getCurrentConfig;
            zulu = {};
            zulu['location'] = golf;
            zulu = tango.bind(report)(zulu);
            report = zulu.enabled;
            tango = zulu.analyticsEligible;
            golf = _closure1_slot0;
            zulu = _closure1_slot1;
            entity = 2;
            zulu = zulu[entity];
            entity = undefined;
            golf = golf.bind(entity)(zulu);
            zulu = golf.isEligibleForStealthRemediation;
            entity = {};
            options = 'get_blocking_voice_states_experiment_configs';
            entity['location'] = options;
            zulu = zulu.bind(golf)(entity);
            entity = {};
            entity['blockeeExperimentEnabled'] = oscar;
            entity['blockerExperimentEnabled'] = report;
            if(mike) { _fun79698_ip = 133; continue _fun79698 }
 130:
            mike = tango;
 133:
            if(!mike) { _fun79698_ip = 139; continue _fun79698 }
 136:
            mike = !zulu;
 139:
            entity['analyticsEligible'] = mike;
            return entity;
        }
    };
    zulu['getBlockingVoiceStatesExperimentConfigs'] = oscar;
    report = function(argFoo) { // Original name: useBlockingVoiceStatesExperimentConfigs
        _fun79699: for(var _fun79699_ip = 0; ; ) switch(_fun79699_ip) {
 0:
            golf = argFoo;
            tango = _closure1_slot3;
            zulu = tango.useExperiment;
            mike = {};
            mike['location'] = golf;
            mike = zulu.bind(tango)(mike);
            oscar = mike.enabled;
            mike = mike.analyticsEligible;
            report = _closure1_slot2;
            tango = report.useExperiment;
            zulu = {};
            zulu['location'] = golf;
            zulu = tango.bind(report)(zulu);
            report = zulu.enabled;
            tango = zulu.analyticsEligible;
            golf = _closure1_slot0;
            zulu = _closure1_slot1;
            entity = 2;
            zulu = zulu[entity];
            entity = undefined;
            golf = golf.bind(entity)(zulu);
            zulu = golf.useIsStealthRemediationEnabled;
            entity = {};
            options = 'use_blocking_voice_states_experiment_configs';
            entity['location'] = options;
            zulu = zulu.bind(golf)(entity);
            entity = {};
            entity['blockeeExperimentEnabled'] = oscar;
            entity['blockerExperimentEnabled'] = report;
            if(mike) { _fun79699_ip = 133; continue _fun79699 }
 130:
            mike = tango;
 133:
            if(!mike) { _fun79699_ip = 139; continue _fun79699 }
 136:
            mike = !zulu;
 139:
            entity['analyticsEligible'] = mike;
            return entity;
        }
    };
    zulu['useBlockingVoiceStatesExperimentConfigs'] = report;
    zulu['BlockingVoiceStatesExperimentBlocker'] = tango;
    zulu['BlockingVoiceStatesExperimentBlockee'] = mike;
    return entity;
})();