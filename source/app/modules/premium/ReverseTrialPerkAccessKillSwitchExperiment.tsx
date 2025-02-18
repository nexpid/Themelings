// app/modules/premium/ReverseTrialPerkAccessKillSwitchExperiment.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    tangon = {};
    yankee = true;
    tangon['value'] = yankee;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.PurchasedFlags;
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = golfie[tangon];
    option = oscard.bind(entity)(tangon);
    report = option.createExperiment;
    tangon = {'kind': 'user', 'id': '2025-02_reverse_trial_perk_access_kill_switch', 'label': 'Reverse Trial Perk Access Kill Switch'};
    verify = {};
    offset = false;
    verify['enabled'] = offset;
    tangon['defaultConfig'] = verify;
    offset = {'id': 1, 'label': 'Prevent perk access for users with reverse trials'};
    verify = {};
    verify['enabled'] = yankee;
    offset['config'] = verify;
    verify = new Array(1);
    verify[0] = offset;
    tangon['treatments'] = verify;
    tangon = report.bind(option)(tangon);
    var _closure1_slot3 = tangon;
    report = 3;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/premium/ReverseTrialPerkAccessKillSwitchExperiment.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    michal = function(argFoo, argBar) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argBar;
            entity = null;
            michal = entity == zuuluu;
            if(michal) { _fun00002_ip = 68; continue _fun00001 }
 12:
            oscard = _closure1_slot0;
            report = _closure1_slot1;
            tangon = 2;
            report = report[tangon];
            tangon = undefined;
            report = oscard.bind(tangon)(report);
            tangon = report.hasFlag;
            zuuluu = zuuluu.purchasedFlags;
            entity = _closure1_slot2;
            entity = entity.ON_REVERSE_TRIAL;
            entity = tangon.bind(report)(zuuluu, entity);
            michal = !entity;
 68:
            entity = !michal;
            if(michal) { _fun00002_ip = 116; continue _fun00001 }
 74:
            report = _closure1_slot3;
            tangon = report.getCurrentConfig;
            zuuluu = {};
            michal = argFoo;
            zuuluu['location'] = michal;
            michal = {};
            oscard = false;
            michal['autoTrackExposure'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            entity = michal.enabled;
 116:
            return entity;
        }
    };
    zuuluu['preventReverseTrialPerkAccess'] = michal;
    return entity;
})();