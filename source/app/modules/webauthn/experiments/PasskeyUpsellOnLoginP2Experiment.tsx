// app/modules/webauthn/experiments/PasskeyUpsellOnLoginP2Experiment.tsx
export default (function(_, argBar, __, ___, ____, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    entity = global;
    golf = entity.Object;
    tango = golf.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = tango.bind(golf)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    golf = report.bind(entity)(mike);
    tango = golf.createExperiment;
    mike = {'id': '2024-07_passkey_upsell_on_login_p2', 'label': 'Passkey Upsell on Login Phase 2', 'kind': 'user'};
    offset = 1;
    options = oscar[offset];
    options = report.bind(entity)(options);
    options = options.PasskeyUpsellOnLoginExperimentState;
    options = options.None;
    mike['defaultConfig'] = options;
    verify = {'id': 0, 'label': 'Control'};
    options = oscar[offset];
    options = report.bind(entity)(options);
    options = options.PasskeyUpsellOnLoginExperimentState;
    options = options.Control;
    verify['config'] = options;
    options = new Array(2);
    options[0] = verify;
    verify = {'id': 1, 'label': 'Enabled with Sheet'};
    offset = oscar[offset];
    offset = report.bind(entity)(offset);
    offset = offset.PasskeyUpsellOnLoginExperimentState;
    offset = offset.Sheet;
    verify['config'] = offset;
    options[1] = verify;
    mike['treatments'] = options;
    mike = tango.bind(golf)(mike);
    tango = 2;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/webauthn/experiments/PasskeyUpsellOnLoginP2Experiment.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();