// app/modules/potions/experiments/ConfettiPotionExperiment.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    entity = global;
    options = entity.Object;
    report = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = golf[entity];
    entity = undefined;
    tango = oscar.bind(entity)(tango);
    report = tango.CommonTriggerPoints;
    tango = 1;
    tango = golf[tango];
    verify = oscar.bind(entity)(tango);
    options = verify.createExperiment;
    tango = {'kind': 'user', 'id': '2024-12_confetti_potion', 'label': 'Confetti Potion Experiment'};
    report = report.CONNECTION_OPEN;
    tango['commonTriggerPoint'] = report;
    report = {'canPurchase': false, 'canSeeConfetti': false, 'canSeeEducation': false, 'canSeeUpsells': false};
    tango['defaultConfig'] = report;
    report = {'id': 1, 'label': 'Viewer Treatment'};
    offset = {'canPurchase': false, 'canSeeConfetti': true, 'canSeeEducation': true, 'canSeeUpsells': false};
    report['config'] = offset;
    offset = new Array(2);
    offset[0] = report;
    yankee = {'id': 2, 'label': 'Purchaser Treatment'};
    report = 2;
    romeo = {'canPurchase': true, 'canSeeConfetti': true, 'canSeeEducation': true, 'canSeeUpsells': true};
    yankee['config'] = romeo;
    offset[1] = yankee;
    tango['treatments'] = offset;
    tango = options.bind(verify)(tango);
    var _closure1_slot0 = tango;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/potions/experiments/ConfettiPotionExperiment.tsx';
    report = oscar.bind(golf)(report);
    zulu['ConfettiPotionExperiment'] = tango;
    tango = function(argFoo) {
        tango = _closure1_slot0;
        zulu = tango.useExperiment;
        mike = {};
        entity = argFoo;
        mike['location'] = entity;
        entity = {};
        report = false;
        entity['autoTrackExposure'] = report;
        entity = zulu.bind(tango)(mike, entity);
        entity = entity.canSeeConfetti;
        return entity;
    };
    zulu['useShouldMountConfettiCanvas'] = tango;
    tango = function(argFoo) {
        tango = _closure1_slot0;
        zulu = tango.useExperiment;
        mike = {};
        entity = argFoo;
        mike['location'] = entity;
        entity = {};
        report = true;
        entity['autoTrackExposure'] = report;
        entity = zulu.bind(tango)(mike, entity);
        entity = entity.canSeeConfetti;
        return entity;
    };
    zulu['useUserCanSeeMessageConfetti'] = tango;
    tango = function(argFoo) {
        tango = _closure1_slot0;
        zulu = tango.useExperiment;
        mike = {};
        entity = argFoo;
        mike['location'] = entity;
        entity = {};
        report = false;
        entity['autoTrackExposure'] = report;
        entity = zulu.bind(tango)(mike, entity);
        entity = entity.canPurchase;
        return entity;
    };
    zulu['useUserCanPurchaseMessageConfetti'] = tango;
    mike = function(argFoo) {
        zulu = _closure1_slot0;
        mike = zulu.getCurrentConfig;
        entity = {};
        tango = argFoo;
        entity['location'] = tango;
        entity = mike.bind(zulu)(entity);
        entity = entity.canSeeConfetti;
        return entity;
    };
    zulu['userCanSeeConfettiMessage'] = mike;
    return entity;
})();