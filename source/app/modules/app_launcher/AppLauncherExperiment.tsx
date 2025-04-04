// app/modules/app_launcher/AppLauncherExperiment.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    verify = argBar;
    zuuluu = argFre;
    offset = argPlu;
    entity = global;
    oscard = entity.Object;
    report = oscard.defineProperty;
    michal = {};
    sizing = true;
    michal['value'] = sizing;
    entity = '__esModule';
    entity = report.bind(oscard)(zuuluu, entity, michal);
    entity = 0;
    michal = offset[entity];
    entity = undefined;
    michal = verify.bind(entity)(michal);
    foxtra = michal.CommonTriggerPoints;
    michal = 1;
    report = offset[michal];
    golfie = verify.bind(entity)(report);
    oscard = golfie.createExperiment;
    report = {'kind': 'user', 'id': '2024-08_open_platform_app_launcher_holdout', 'label': 'Open Platform App Launcher Holdout'};
    option = foxtra.VOICE_CALL;
    report['commonTriggerPoint'] = option;
    option = {};
    option['clickOnHomeActivityOpensAppDetail'] = sizing;
    report['defaultConfig'] = option;
    option = {'id': 1, 'label': 'clicking activity in voice app launcher -> performs activity action'};
    yankee = {};
    kiloes = false;
    yankee['clickOnHomeActivityOpensAppDetail'] = kiloes;
    option['config'] = yankee;
    yankee = new Array(2);
    yankee[0] = option;
    romeon = {'id': 2, 'label': 'clicking activity in voice app launcher -> opens activity detail page'};
    option = 2;
    backup = {};
    backup['clickOnHomeActivityOpensAppDetail'] = sizing;
    romeon['config'] = backup;
    yankee[1] = romeon;
    report['treatments'] = yankee;
    golfie = oscard.bind(golfie)(report);
    report = offset[michal];
    yankee = verify.bind(entity)(report);
    oscard = yankee.createExperiment;
    report = {'kind': 'user', 'id': '2024-09_user_app_install_education', 'label': 'User App Install Education Experiment'};
    romeon = {'enabled': false, 'showsTooltip': false};
    report['defaultConfig'] = romeon;
    romeon = foxtra.CONNECTION_OPEN;
    report['commonTriggerPoint'] = romeon;
    backup = {'id': 1, 'label': 'show animation on app launcher icon + tooltip when a user app is authorized when in a channel instead of showing auth success modal'};
    romeon = {'enabled': true, 'showsTooltip': true};
    backup['config'] = romeon;
    romeon = new Array(2);
    romeon[0] = backup;
    backup = {'id': 2, 'label': 'show animation on app launcher icon when a user app is authorized when in a channel instead of showing auth success modal'};
    output = {'enabled': true, 'showsTooltip': false};
    backup['config'] = output;
    romeon[1] = backup;
    report['treatments'] = romeon;
    oscard = oscard.bind(yankee)(report);
    report = offset[michal];
    romeon = verify.bind(entity)(report);
    yankee = romeon.createExperiment;
    report = {'kind': 'guild', 'id': '2025-02_filter_wordle_from_voice_channel_launcher', 'label': 'Filter Wordle From Voice Channel Launcher'};
    backup = {};
    backup['enabled'] = kiloes;
    report['defaultConfig'] = backup;
    kiloes = {'id': 1, 'label': 'Filter Wordle From Voice Channels'};
    backup = {};
    backup['enabled'] = sizing;
    kiloes['config'] = backup;
    backup = new Array(1);
    backup[0] = kiloes;
    report['treatments'] = backup;
    report = yankee.bind(romeon)(report);
    var _closure1_slot0 = report;
    michal = offset[michal];
    romeon = verify.bind(entity)(michal);
    yankee = romeon.createExperiment;
    michal = {'kind': 'user', 'id': '2025-03_app_launcher_pep_button_label', 'label': 'Change PEP Button Label To Play'};
    backup = {'enabled': false, 'altLayout': false};
    michal['defaultConfig'] = backup;
    foxtra = foxtra.CONNECTION_OPEN;
    michal['commonTriggerPoint'] = foxtra;
    backup = {'id': 1, 'label': 'Change PEP Button Label To Play'};
    foxtra = {'enabled': true, 'altLayout': false};
    backup['config'] = foxtra;
    foxtra = new Array(2);
    foxtra[0] = backup;
    backup = {'id': 2, 'label': 'Change PEP Button Label To Play With Alt Layout'};
    kiloes = {'enabled': true, 'altLayout': true};
    backup['config'] = kiloes;
    foxtra[1] = backup;
    michal['treatments'] = foxtra;
    michal = yankee.bind(romeon)(michal);
    option = offset[option];
    offset = verify.bind(entity)(option);
    verify = offset.fileFinishedImporting;
    option = 'modules/app_launcher/AppLauncherExperiment.tsx';
    option = verify.bind(offset)(option);
    zuuluu['OpenPlatformAppLauncherHoldoutExperiment'] = golfie;
    zuuluu['UserAppInstallEducationExperiment'] = oscard;
    oscard = '1211781489931452447';
    zuuluu['WORDLE_APPLICATION_ID'] = oscard;
    zuuluu['FilterWordleFromVoiceChannelLauncher'] = report;
    tangon = function(argFoo, argBar) { // Original name: checkShouldFilterWordle
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
    zuuluu['checkShouldFilterWordle'] = tangon;
    zuuluu['AppLauncherPEPButtonLabel'] = michal;
    return entity;
})();