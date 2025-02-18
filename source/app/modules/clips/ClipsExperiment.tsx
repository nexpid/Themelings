// app/modules/clips/ClipsExperiment.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    report = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    entity = global;
    verify = entity.Object;
    oscard = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = option[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = option[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = option[tangon];
    tangon = golfie.bind(entity)(tangon);
    tangon = tangon.PremiumTypes;
    var _closure1_slot4 = tangon;
    tangon = 3;
    report = option[tangon];
    verify = golfie.bind(entity)(report);
    oscard = verify.createExperiment;
    report = {'kind': 'user', 'id': '2022-11_clips_experiment', 'label': 'Clips Experiment'};
    offset = {'enableClips': false, 'ignorePlatformRestriction': false, 'showClipsHeaderEntrypoint': false};
    report['defaultConfig'] = offset;
    yankee = {'id': 1, 'label': 'Clips without upsells'};
    offset = {'enableClips': true, 'ignorePlatformRestriction': false, 'showClipsHeaderEntrypoint': true};
    yankee['config'] = offset;
    offset = new Array(3);
    offset[0] = yankee;
    yankee = {'id': 2, 'label': 'Clips with upsells'};
    romeon = {'enableClips': true, 'ignorePlatformRestriction': false, 'showClipsHeaderEntrypoint': true};
    yankee['config'] = romeon;
    offset[1] = yankee;
    yankee = {'id': 99, 'label': 'Clips 4 da Developerz'};
    romeon = {'enableClips': true, 'ignorePlatformRestriction': true, 'showClipsHeaderEntrypoint': true};
    yankee['config'] = romeon;
    offset[2] = yankee;
    report['treatments'] = offset;
    report = oscard.bind(verify)(report);
    var _closure1_slot5 = report;
    tangon = option[tangon];
    verify = golfie.bind(entity)(tangon);
    oscard = verify.createExperiment;
    tangon = {'kind': 'user', 'id': '2023-09_clips_nitro_early_access', 'label': 'Clips (Nitro EA)'};
    offset = {'enableClips': false, 'enablePremiumEarlyAccessAnnouncementCoachmark': false, 'enablePremiumEarlyAccessGoLiveRoadblock': false};
    tangon['defaultConfig'] = offset;
    yankee = {'id': 1, 'label': 'Clips Nitro EA Upsells Visible'};
    offset = {'enableClips': false, 'enablePremiumEarlyAccessAnnouncementCoachmark': true, 'enablePremiumEarlyAccessGoLiveRoadblock': true};
    yankee['config'] = offset;
    offset = new Array(2);
    offset[0] = yankee;
    yankee = {'id': 2, 'label': 'Clips Enabled (Nitro)'};
    romeon = {'enableClips': true, 'enablePremiumEarlyAccessAnnouncementCoachmark': true, 'enablePremiumEarlyAccessGoLiveRoadblock': false};
    yankee['config'] = romeon;
    offset[1] = yankee;
    tangon['treatments'] = offset;
    tangon = oscard.bind(verify)(tangon);
    var _closure1_slot6 = tangon;
    oscard = 7;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/clips/ClipsExperiment.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['ClipsExperiment'] = report;
    zuuluu['ClipsPremiumEarlyAccessExperiment'] = tangon;
    tangon = function() { // Original name: areClipsEnabled
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = _closure1_slot0;
            zuuluu = _closure1_slot1;
            entity = 4;
            entity = zuuluu[entity];
            golfie = undefined;
            michal = michal.bind(golfie)(entity);
            entity = _closure1_slot2;
            entity = michal.bind(golfie)(entity);
            if(entity) { _fun00002_ip = 41; continue _fun00001 }
 37:
            entity = false;
            return entity;
 41:
            oscard = _closure1_slot6;
            tangon = oscard.getCurrentConfig;
            zuuluu = {};
            michal = 'areClipsEnabled';
            zuuluu['location'] = michal;
            entity = {};
            option = false;
            entity['autoTrackExposure'] = option;
            entity = tangon.bind(oscard)(zuuluu, entity);
            entity = entity.enableClips;
            verify = _closure1_slot5;
            oscard = verify.getCurrentConfig;
            tangon = {};
            tangon['location'] = michal;
            zuuluu = {};
            zuuluu['autoTrackExposure'] = option;
            zuuluu = oscard.bind(verify)(tangon, zuuluu);
            tangon = zuuluu.enableClips;
            oscard = _closure1_slot3;
            zuuluu = oscard.isDecoupledGameClippingEnabled;
            zuuluu = zuuluu.bind(oscard)();
            oscard = _closure1_slot0;
            verify = _closure1_slot1;
            report = 5;
            report = verify[report];
            golfie = oscard.bind(golfie)(report);
            oscard = golfie.getCurrentConfig;
            report = {};
            report['location'] = michal;
            michal = {};
            michal['autoTrackExposure'] = option;
            michal = oscard.bind(golfie)(report, michal);
            michal = michal.enableViewerClipping;
            if(entity) { _fun00002_ip = 188; continue _fun00001 }
 185:
            entity = tangon;
 188:
            if(entity) { _fun00002_ip = 194; continue _fun00001 }
 191:
            entity = zuuluu;
 194:
            if(entity) { _fun00002_ip = 200; continue _fun00001 }
 197:
            entity = michal;
 200:
            return entity;
        }
    };
    zuuluu['areClipsEnabled'] = tangon;
    tangon = function() { // Original name: useEnableClips
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            option = _closure1_slot0;
            offset = _closure1_slot1;
            entity = 4;
            entity = offset[entity];
            golfie = undefined;
            michal = option.bind(golfie)(entity);
            entity = _closure1_slot2;
            michal = michal.bind(golfie)(entity);
            yankee = _closure1_slot6;
            oscard = yankee.useExperiment;
            report = {};
            zuuluu = 'useEnableClips';
            report['location'] = zuuluu;
            entity = {};
            verify = false;
            entity['autoTrackExposure'] = verify;
            entity = oscard.bind(yankee)(report, entity);
            report = entity.enableClips;
            romeon = _closure1_slot5;
            yankee = romeon.useExperiment;
            oscard = {};
            oscard['location'] = zuuluu;
            entity = {};
            entity['autoTrackExposure'] = verify;
            entity = yankee.bind(romeon)(oscard, entity);
            entity = entity.enableClips;
            oscard = _closure1_slot3;
            tangon = oscard.isDecoupledGameClippingEnabled;
            tangon = tangon.bind(oscard)();
            oscard = 5;
            oscard = offset[oscard];
            option = option.bind(golfie)(oscard);
            golfie = option.useExperiment;
            oscard = {};
            oscard['location'] = zuuluu;
            zuuluu = {};
            zuuluu['autoTrackExposure'] = verify;
            zuuluu = golfie.bind(option)(oscard, zuuluu);
            zuuluu = zuuluu.enableViewerClipping;
            if(entity) { _fun00004_ip = 175; continue _fun00003 }
 172:
            entity = report;
 175:
            if(entity) { _fun00004_ip = 181; continue _fun00003 }
 178:
            entity = tangon;
 181:
            if(entity) { _fun00004_ip = 187; continue _fun00003 }
 184:
            entity = zuuluu;
 187:
            if(!entity) { _fun00004_ip = 193; continue _fun00003 }
 190:
            entity = michal;
 193:
            return entity;
        }
    };
    zuuluu['useEnableClips'] = tangon;
    tangon = function(argFoo) {
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            oscard = entity.autoTrackExposure;
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot1;
            entity = 4;
            entity = tangon[entity];
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(entity);
            entity = _closure1_slot2;
            entity = zuuluu.bind(tangon)(entity);
            report = _closure1_slot6;
            tangon = report.useExperiment;
            zuuluu = {};
            michal = 'useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock';
            zuuluu['location'] = michal;
            michal = {};
            if(!oscard) { _fun00006_ip = 73; continue _fun00005 }
 70:
            oscard = entity;
 73:
            michal['autoTrackExposure'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            michal = michal.enablePremiumEarlyAccessGoLiveRoadblock;
            zuuluu = !entity;
            entity = !zuuluu;
            if(zuuluu) { _fun00006_ip = 102; continue _fun00005 }
 99:
            entity = michal;
 102:
            return entity;
        }
    };
    zuuluu['useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock'] = tangon;
    tangon = function(argFoo) {
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            oscard = entity.autoTrackExposure;
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot1;
            entity = 4;
            entity = tangon[entity];
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(entity);
            entity = _closure1_slot2;
            entity = zuuluu.bind(tangon)(entity);
            report = _closure1_slot6;
            tangon = report.useExperiment;
            zuuluu = {};
            michal = 'useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock';
            zuuluu['location'] = michal;
            michal = {};
            if(!oscard) { _fun00008_ip = 73; continue _fun00007 }
 70:
            oscard = entity;
 73:
            michal['autoTrackExposure'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            michal = michal.enablePremiumEarlyAccessAnnouncementCoachmark;
            zuuluu = !entity;
            entity = !zuuluu;
            if(zuuluu) { _fun00008_ip = 102; continue _fun00007 }
 99:
            entity = michal;
 102:
            return entity;
        }
    };
    zuuluu['useShouldSeeClipsPremiumEarlyAccessAnnouncementCoachmark'] = tangon;
    michal = function(argFoo) { // Original name: isUserPremiumTypeForClipsEarlyAccess
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        michal = 6;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.isPremiumAtLeast;
        michal = argFoo;
        michal = michal.premiumType;
        entity = _closure1_slot4;
        entity = entity.TIER_2;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['isUserPremiumTypeForClipsEarlyAccess'] = michal;
    return entity;
})();