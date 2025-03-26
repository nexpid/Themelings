// app/modules/app_launcher/AppLauncherExperiment.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    verify = argBar;
    zuuluu = argFre;
    offset = argPlu;
    entity = global;
    oscard = entity.Object;
    report = oscard.defineProperty;
    tangon = {};
    kiloes = true;
    tangon['value'] = kiloes;
    entity = '__esModule';
    entity = report.bind(oscard)(zuuluu, entity, tangon);
    entity = 0;
    tangon = offset[entity];
    entity = undefined;
    tangon = verify.bind(entity)(tangon);
    foxtra = tangon.CommonTriggerPoints;
    tangon = 1;
    report = offset[tangon];
    golfie = verify.bind(entity)(report);
    oscard = golfie.createExperiment;
    report = {'kind': 'user', 'id': '2024-08_open_platform_app_launcher_holdout', 'label': 'Open Platform App Launcher Holdout'};
    option = foxtra.VOICE_CALL;
    report['commonTriggerPoint'] = option;
    option = {};
    option['clickOnHomeActivityOpensAppDetail'] = kiloes;
    report['defaultConfig'] = option;
    option = {'id': 1, 'label': 'clicking activity in voice app launcher -> performs activity action'};
    yankee = {};
    backup = false;
    yankee['clickOnHomeActivityOpensAppDetail'] = backup;
    option['config'] = yankee;
    yankee = new Array(2);
    yankee[0] = option;
    romeon = {'id': 2, 'label': 'clicking activity in voice app launcher -> opens activity detail page'};
    option = 2;
    sizing = {};
    sizing['clickOnHomeActivityOpensAppDetail'] = kiloes;
    romeon['config'] = sizing;
    yankee[1] = romeon;
    report['treatments'] = yankee;
    golfie = oscard.bind(golfie)(report);
    report = offset[tangon];
    yankee = verify.bind(entity)(report);
    oscard = yankee.createExperiment;
    report = {'kind': 'user', 'id': '2024-09_user_app_install_education', 'label': 'User App Install Education Experiment'};
    romeon = {'enabled': false, 'showsTooltip': false};
    report['defaultConfig'] = romeon;
    romeon = foxtra.CONNECTION_OPEN;
    report['commonTriggerPoint'] = romeon;
    sizing = {'id': 1, 'label': 'show animation on app launcher icon + tooltip when a user app is authorized when in a channel instead of showing auth success modal'};
    romeon = {'enabled': true, 'showsTooltip': true};
    sizing['config'] = romeon;
    romeon = new Array(2);
    romeon[0] = sizing;
    sizing = {'id': 2, 'label': 'show animation on app launcher icon when a user app is authorized when in a channel instead of showing auth success modal'};
    output = {'enabled': true, 'showsTooltip': false};
    sizing['config'] = output;
    romeon[1] = sizing;
    report['treatments'] = romeon;
    oscard = oscard.bind(yankee)(report);
    report = offset[tangon];
    romeon = verify.bind(entity)(report);
    yankee = romeon.createExperiment;
    report = {'kind': 'user', 'id': '2024-10_weighted_sample_activity_shelf', 'label': 'Weighted Sample Activity Shelf'};
    sizing = {};
    sizing['enabled'] = backup;
    report['defaultConfig'] = sizing;
    foxtra = foxtra.VOICE_CALL;
    report['commonTriggerPoint'] = foxtra;
    sizing = {'id': 1, 'label': 'Enable weighted sample for activity shelf'};
    foxtra = {};
    foxtra['enabled'] = kiloes;
    sizing['config'] = foxtra;
    foxtra = new Array(1);
    foxtra[0] = sizing;
    report['treatments'] = foxtra;
    report = yankee.bind(romeon)(report);
    tangon = offset[tangon];
    romeon = verify.bind(entity)(tangon);
    yankee = romeon.createExperiment;
    tangon = {'kind': 'guild', 'id': '2025-02_filter_wordle_from_voice_channel_launcher', 'label': 'Filter Wordle From Voice Channel Launcher'};
    foxtra = {};
    foxtra['enabled'] = backup;
    tangon['defaultConfig'] = foxtra;
    backup = {'id': 1, 'label': 'Filter Wordle From Voice Channels'};
    foxtra = {};
    foxtra['enabled'] = kiloes;
    backup['config'] = foxtra;
    foxtra = new Array(1);
    foxtra[0] = backup;
    tangon['treatments'] = foxtra;
    tangon = yankee.bind(romeon)(tangon);
    var _closure1_slot0 = tangon;
    option = offset[option];
    offset = verify.bind(entity)(option);
    verify = offset.fileFinishedImporting;
    option = 'modules/app_launcher/AppLauncherExperiment.tsx';
    option = verify.bind(offset)(option);
    zuuluu['OpenPlatformAppLauncherHoldoutExperiment'] = golfie;
    zuuluu['UserAppInstallEducationExperiment'] = oscard;
    zuuluu['WeightedSampleActivityShelfExperiment'] = report;
    report = '1211781489931452447';
    zuuluu['WORDLE_APPLICATION_ID'] = report;
    zuuluu['FilterWordleFromVoiceChannelLauncher'] = tangon;
    michal = function(argFoo, argBar) { // Original name: checkShouldFilterWordle
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            michal = undefined;
            entity = michal !== tangon;
            if(!entity) { _fun00002_ip = 81; continue _fun00001 }
 12:
            zuuluu = null;
            zuuluu = zuuluu == tangon;
            michal = undefined;
            if(zuuluu) { _fun00002_ip = 33; continue _fun00001 }
 23:
            zuuluu = tangon.isGuildVoice;
            michal = zuuluu.bind(tangon)();
 33:
            if(!michal) { _fun00002_ip = 78; continue _fun00001 }
 36:
            oscard = _closure1_slot0;
            report = oscard.getCurrentConfig;
            tangon = {};
            zuuluu = argBar;
            tangon['location'] = zuuluu;
            zuuluu = {};
            golfie = true;
            zuuluu['autoTrackExposure'] = golfie;
            zuuluu = report.bind(oscard)(tangon, zuuluu);
            michal = zuuluu.enabled;
 78:
            entity = michal;
 81:
            return entity;
        }
    };
    zuuluu['checkShouldFilterWordle'] = michal;
    return entity;
})();