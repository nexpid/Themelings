// app/modules/app_launcher/AppLauncherExperiment.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    option = argBar;
    zuuluu = argFre;
    verify = argPlu;
    entity = global;
    oscard = entity.Object;
    report = oscard.defineProperty;
    michal = {};
    kiloes = true;
    michal['value'] = kiloes;
    entity = '__esModule';
    entity = report.bind(oscard)(zuuluu, entity, michal);
    entity = 0;
    michal = verify[entity];
    entity = undefined;
    michal = option.bind(entity)(michal);
    romeon = michal.CommonTriggerPoints;
    michal = 1;
    report = verify[michal];
    offset = option.bind(entity)(report);
    oscard = offset.createExperiment;
    report = {'kind': 'user', 'id': '2024-09_user_app_install_education', 'label': 'User App Install Education Experiment'};
    backup = false;
    golfie = {'enabled': false, 'showsTooltip': false};
    report['defaultConfig'] = golfie;
    golfie = romeon.CONNECTION_OPEN;
    report['commonTriggerPoint'] = golfie;
    golfie = {'id': 1, 'label': 'show animation on app launcher icon + tooltip when a user app is authorized when in a channel instead of showing auth success modal'};
    yankee = {'enabled': true, 'showsTooltip': true};
    golfie['config'] = yankee;
    yankee = new Array(2);
    yankee[0] = golfie;
    foxtra = {'id': 2, 'label': 'show animation on app launcher icon when a user app is authorized when in a channel instead of showing auth success modal'};
    golfie = 2;
    sizing = {'enabled': true, 'showsTooltip': false};
    foxtra['config'] = sizing;
    yankee[1] = foxtra;
    report['treatments'] = yankee;
    oscard = oscard.bind(offset)(report);
    report = verify[michal];
    yankee = option.bind(entity)(report);
    offset = yankee.createExperiment;
    report = {'kind': 'guild', 'id': '2025-02_filter_wordle_from_voice_channel_launcher', 'label': 'Filter Wordle From Voice Channel Launcher'};
    foxtra = {};
    foxtra['enabled'] = backup;
    report['defaultConfig'] = foxtra;
    backup = {'id': 1, 'label': 'Filter Wordle From Voice Channels'};
    foxtra = {};
    foxtra['enabled'] = kiloes;
    backup['config'] = foxtra;
    foxtra = new Array(1);
    foxtra[0] = backup;
    report['treatments'] = foxtra;
    report = offset.bind(yankee)(report);
    var _closure1_slot0 = report;
    michal = verify[michal];
    yankee = option.bind(entity)(michal);
    offset = yankee.createExperiment;
    michal = {'kind': 'user', 'id': '2025-03_app_launcher_pep_button_label', 'label': 'Change PEP Button Label To Play'};
    foxtra = {'enabled': false, 'altLayout': false};
    michal['defaultConfig'] = foxtra;
    romeon = romeon.CONNECTION_OPEN;
    michal['commonTriggerPoint'] = romeon;
    foxtra = {'id': 1, 'label': 'Change PEP Button Label To Play'};
    romeon = {'enabled': true, 'altLayout': false};
    foxtra['config'] = romeon;
    romeon = new Array(2);
    romeon[0] = foxtra;
    foxtra = {'id': 2, 'label': 'Change PEP Button Label To Play With Alt Layout'};
    backup = {'enabled': true, 'altLayout': true};
    foxtra['config'] = backup;
    romeon[1] = foxtra;
    michal['treatments'] = romeon;
    michal = offset.bind(yankee)(michal);
    golfie = verify[golfie];
    verify = option.bind(entity)(golfie);
    option = verify.fileFinishedImporting;
    golfie = 'modules/app_launcher/AppLauncherExperiment.tsx';
    golfie = option.bind(verify)(golfie);
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