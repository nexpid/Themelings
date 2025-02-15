// app/modules/clips/ClipsExperiment.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBar;
    report = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    entity = global;
    verify = entity.Object;
    oscar = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = options[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = options[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = options[tango];
    tango = golf.bind(entity)(tango);
    tango = tango.PremiumTypes;
    var _closure1_slot4 = tango;
    tango = 3;
    report = options[tango];
    verify = golf.bind(entity)(report);
    oscar = verify.createExperiment;
    report = {'kind': 'user', 'id': '2022-11_clips_experiment', 'label': 'Clips Experiment'};
    offset = {'enableClips': false, 'ignorePlatformRestriction': false, 'showClipsHeaderEntrypoint': false};
    report['defaultConfig'] = offset;
    yankee = {'id': 1, 'label': 'Clips without upsells'};
    offset = {'enableClips': true, 'ignorePlatformRestriction': false, 'showClipsHeaderEntrypoint': true};
    yankee['config'] = offset;
    offset = new Array(3);
    offset[0] = yankee;
    yankee = {'id': 2, 'label': 'Clips with upsells'};
    romeo = {'enableClips': true, 'ignorePlatformRestriction': false, 'showClipsHeaderEntrypoint': true};
    yankee['config'] = romeo;
    offset[1] = yankee;
    yankee = {'id': 99, 'label': 'Clips 4 da Developerz'};
    romeo = {'enableClips': true, 'ignorePlatformRestriction': true, 'showClipsHeaderEntrypoint': true};
    yankee['config'] = romeo;
    offset[2] = yankee;
    report['treatments'] = offset;
    report = oscar.bind(verify)(report);
    var _closure1_slot5 = report;
    tango = options[tango];
    verify = golf.bind(entity)(tango);
    oscar = verify.createExperiment;
    tango = {'kind': 'user', 'id': '2023-09_clips_nitro_early_access', 'label': 'Clips (Nitro EA)'};
    offset = {'enableClips': false, 'enablePremiumEarlyAccessAnnouncementCoachmark': false, 'enablePremiumEarlyAccessGoLiveRoadblock': false};
    tango['defaultConfig'] = offset;
    yankee = {'id': 1, 'label': 'Clips Nitro EA Upsells Visible'};
    offset = {'enableClips': false, 'enablePremiumEarlyAccessAnnouncementCoachmark': true, 'enablePremiumEarlyAccessGoLiveRoadblock': true};
    yankee['config'] = offset;
    offset = new Array(2);
    offset[0] = yankee;
    yankee = {'id': 2, 'label': 'Clips Enabled (Nitro)'};
    romeo = {'enableClips': true, 'enablePremiumEarlyAccessAnnouncementCoachmark': true, 'enablePremiumEarlyAccessGoLiveRoadblock': false};
    yankee['config'] = romeo;
    offset[1] = yankee;
    tango['treatments'] = offset;
    tango = oscar.bind(verify)(tango);
    var _closure1_slot6 = tango;
    oscar = 7;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/clips/ClipsExperiment.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['ClipsExperiment'] = report;
    zulu['ClipsPremiumEarlyAccessExperiment'] = tango;
    tango = function() { // Original name: areClipsEnabled
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = _closure1_slot0;
            zulu = _closure1_slot1;
            entity = 4;
            entity = zulu[entity];
            golf = undefined;
            mike = mike.bind(golf)(entity);
            entity = _closure1_slot2;
            entity = mike.bind(golf)(entity);
            if(entity) { _fun00002_ip = 41; continue _fun00001 }
 37:
            entity = false;
            return entity;
 41:
            oscar = _closure1_slot6;
            tango = oscar.getCurrentConfig;
            zulu = {};
            mike = 'areClipsEnabled';
            zulu['location'] = mike;
            entity = {};
            options = false;
            entity['autoTrackExposure'] = options;
            entity = tango.bind(oscar)(zulu, entity);
            entity = entity.enableClips;
            verify = _closure1_slot5;
            oscar = verify.getCurrentConfig;
            tango = {};
            tango['location'] = mike;
            zulu = {};
            zulu['autoTrackExposure'] = options;
            zulu = oscar.bind(verify)(tango, zulu);
            tango = zulu.enableClips;
            oscar = _closure1_slot3;
            zulu = oscar.isDecoupledGameClippingEnabled;
            zulu = zulu.bind(oscar)();
            oscar = _closure1_slot0;
            verify = _closure1_slot1;
            report = 5;
            report = verify[report];
            golf = oscar.bind(golf)(report);
            oscar = golf.getCurrentConfig;
            report = {};
            report['location'] = mike;
            mike = {};
            mike['autoTrackExposure'] = options;
            mike = oscar.bind(golf)(report, mike);
            mike = mike.enableViewerClipping;
            if(entity) { _fun00002_ip = 188; continue _fun00001 }
 185:
            entity = tango;
 188:
            if(entity) { _fun00002_ip = 194; continue _fun00001 }
 191:
            entity = zulu;
 194:
            if(entity) { _fun00002_ip = 200; continue _fun00001 }
 197:
            entity = mike;
 200:
            return entity;
        }
    };
    zulu['areClipsEnabled'] = tango;
    tango = function() { // Original name: useEnableClips
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            options = _closure1_slot0;
            offset = _closure1_slot1;
            entity = 4;
            entity = offset[entity];
            golf = undefined;
            mike = options.bind(golf)(entity);
            entity = _closure1_slot2;
            mike = mike.bind(golf)(entity);
            yankee = _closure1_slot6;
            oscar = yankee.useExperiment;
            report = {};
            zulu = 'useEnableClips';
            report['location'] = zulu;
            entity = {};
            verify = false;
            entity['autoTrackExposure'] = verify;
            entity = oscar.bind(yankee)(report, entity);
            report = entity.enableClips;
            romeo = _closure1_slot5;
            yankee = romeo.useExperiment;
            oscar = {};
            oscar['location'] = zulu;
            entity = {};
            entity['autoTrackExposure'] = verify;
            entity = yankee.bind(romeo)(oscar, entity);
            entity = entity.enableClips;
            oscar = _closure1_slot3;
            tango = oscar.isDecoupledGameClippingEnabled;
            tango = tango.bind(oscar)();
            oscar = 5;
            oscar = offset[oscar];
            options = options.bind(golf)(oscar);
            golf = options.useExperiment;
            oscar = {};
            oscar['location'] = zulu;
            zulu = {};
            zulu['autoTrackExposure'] = verify;
            zulu = golf.bind(options)(oscar, zulu);
            zulu = zulu.enableViewerClipping;
            if(entity) { _fun00004_ip = 175; continue _fun00003 }
 172:
            entity = report;
 175:
            if(entity) { _fun00004_ip = 181; continue _fun00003 }
 178:
            entity = tango;
 181:
            if(entity) { _fun00004_ip = 187; continue _fun00003 }
 184:
            entity = zulu;
 187:
            if(!entity) { _fun00004_ip = 193; continue _fun00003 }
 190:
            entity = mike;
 193:
            return entity;
        }
    };
    zulu['useEnableClips'] = tango;
    tango = function(argFoo) {
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            oscar = entity.autoTrackExposure;
            zulu = _closure1_slot0;
            tango = _closure1_slot1;
            entity = 4;
            entity = tango[entity];
            tango = undefined;
            zulu = zulu.bind(tango)(entity);
            entity = _closure1_slot2;
            entity = zulu.bind(tango)(entity);
            report = _closure1_slot6;
            tango = report.useExperiment;
            zulu = {};
            mike = 'useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock';
            zulu['location'] = mike;
            mike = {};
            if(!oscar) { _fun00006_ip = 73; continue _fun00005 }
 70:
            oscar = entity;
 73:
            mike['autoTrackExposure'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            mike = mike.enablePremiumEarlyAccessGoLiveRoadblock;
            zulu = !entity;
            entity = !zulu;
            if(zulu) { _fun00006_ip = 102; continue _fun00005 }
 99:
            entity = mike;
 102:
            return entity;
        }
    };
    zulu['useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock'] = tango;
    tango = function(argFoo) {
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            oscar = entity.autoTrackExposure;
            zulu = _closure1_slot0;
            tango = _closure1_slot1;
            entity = 4;
            entity = tango[entity];
            tango = undefined;
            zulu = zulu.bind(tango)(entity);
            entity = _closure1_slot2;
            entity = zulu.bind(tango)(entity);
            report = _closure1_slot6;
            tango = report.useExperiment;
            zulu = {};
            mike = 'useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock';
            zulu['location'] = mike;
            mike = {};
            if(!oscar) { _fun00008_ip = 73; continue _fun00007 }
 70:
            oscar = entity;
 73:
            mike['autoTrackExposure'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            mike = mike.enablePremiumEarlyAccessAnnouncementCoachmark;
            zulu = !entity;
            entity = !zulu;
            if(zulu) { _fun00008_ip = 102; continue _fun00007 }
 99:
            entity = mike;
 102:
            return entity;
        }
    };
    zulu['useShouldSeeClipsPremiumEarlyAccessAnnouncementCoachmark'] = tango;
    mike = function(argFoo) { // Original name: isUserPremiumTypeForClipsEarlyAccess
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        mike = 6;
        zulu = zulu[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        zulu = tango.isPremiumAtLeast;
        mike = argFoo;
        mike = mike.premiumType;
        entity = _closure1_slot4;
        entity = entity.TIER_2;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['isUserPremiumTypeForClipsEarlyAccess'] = mike;
    return entity;
})();