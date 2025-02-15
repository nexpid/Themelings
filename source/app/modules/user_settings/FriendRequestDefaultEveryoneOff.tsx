// app/modules/user_settings/FriendRequestDefaultEveryoneOff.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    golf = argBar;
    zulu = argFred;
    options = argPlugh;
    entity = global;
    oscar = entity.Object;
    report = oscar.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscar)(zulu, entity, tango);
    tango = 0;
    report = options[tango];
    entity = undefined;
    offset = golf.bind(entity)(report);
    verify = offset.createExperiment;
    report = {'kind': 'user', 'id': '2025-01_friend_requests_alerts', 'label': 'Friend Request Setting Defaults'};
    oscar = {'enabled': false, 'bucket': 0};
    report['defaultConfig'] = oscar;
    romeo = {'id': 1, 'label': 'warning'};
    oscar = 1;
    yankee = {'enabled': true, 'bucket': 1};
    romeo['config'] = yankee;
    yankee = new Array(2);
    yankee[0] = romeo;
    romeo = {'id': 2, 'label': 'defaults'};
    foxtrot = {'enabled': true, 'bucket': 2};
    romeo['config'] = foxtrot;
    yankee[1] = romeo;
    report['treatments'] = yankee;
    report = verify.bind(offset)(report);
    var _closure1_slot0 = report;
    tango = options[tango];
    offset = golf.bind(entity)(tango);
    verify = offset.createExperiment;
    tango = {'kind': 'user', 'id': '2025-01_friend_requests_alerts_new_users', 'label': 'Friend Request Setting Defaults'};
    yankee = {'enabled': false, 'bucket': 0};
    tango['defaultConfig'] = yankee;
    romeo = {'id': 1, 'label': 'warning'};
    yankee = {'enabled': true, 'bucket': 1};
    romeo['config'] = yankee;
    yankee = new Array(2);
    yankee[0] = romeo;
    romeo = {'id': 2, 'label': 'defaults'};
    foxtrot = {'enabled': true, 'bucket': 2};
    romeo['config'] = foxtrot;
    yankee[1] = romeo;
    tango['treatments'] = yankee;
    tango = verify.bind(offset)(tango);
    var _closure1_slot1 = tango;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/user_settings/FriendRequestDefaultEveryoneOff.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['FriendRequestDefaultEveryoneOff'] = report;
    zulu['FriendRequestDefaultEveryoneOffNewUsers'] = tango;
    tango = function(argFoo) {
        _fun35516: for(var _fun35516_ip = 0; ; ) switch(_fun35516_ip) {
 0:
            mike = argFoo;
            oscar = _closure1_slot0;
            report = oscar.getCurrentConfig;
            zulu = {};
            zulu['location'] = mike;
            entity = {};
            golf = false;
            entity['autoTrackExposure'] = golf;
            entity = report.bind(oscar)(zulu, entity);
            entity = entity.bucket;
            zulu = 2;
            entity = zulu === entity;
            if(entity) { _fun35516_ip = 92; continue _fun35516 }
 53:
            oscar = _closure1_slot1;
            report = oscar.getCurrentConfig;
            tango = {};
            tango['location'] = mike;
            mike = {};
            mike['autoTrackExposure'] = golf;
            mike = report.bind(oscar)(tango, mike);
            mike = mike.bucket;
            entity = zulu === mike;
 92:
            return entity;
        }
    };
    zulu['isEligibleForFriendRequestDefaults'] = tango;
    tango = function(argFoo) {
        _fun35517: for(var _fun35517_ip = 0; ; ) switch(_fun35517_ip) {
 0:
            mike = argFoo;
            oscar = _closure1_slot0;
            report = oscar.getCurrentConfig;
            zulu = {};
            zulu['location'] = mike;
            entity = {};
            golf = false;
            entity['autoTrackExposure'] = golf;
            entity = report.bind(oscar)(zulu, entity);
            entity = entity.bucket;
            zulu = 1;
            entity = zulu === entity;
            if(entity) { _fun35517_ip = 92; continue _fun35517 }
 53:
            oscar = _closure1_slot1;
            report = oscar.getCurrentConfig;
            tango = {};
            tango['location'] = mike;
            mike = {};
            mike['autoTrackExposure'] = golf;
            mike = report.bind(oscar)(tango, mike);
            mike = mike.bucket;
            entity = zulu === mike;
 92:
            return entity;
        }
    };
    zulu['isEligibleForFriendRequestAlerts'] = tango;
    tango = function(argFoo) {
        _fun35518: for(var _fun35518_ip = 0; ; ) switch(_fun35518_ip) {
 0:
            mike = argFoo;
            golf = _closure1_slot0;
            report = golf.useExperiment;
            tango = {};
            tango['location'] = mike;
            entity = {};
            oscar = false;
            entity['autoTrackExposure'] = oscar;
            entity = report.bind(golf)(tango, entity);
            entity = entity.bucket;
            report = _closure1_slot1;
            tango = report.useExperiment;
            zulu = {};
            zulu['location'] = mike;
            mike = {};
            mike['autoTrackExposure'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            zulu = mike.bucket;
            mike = 2;
            entity = mike === entity;
            if(entity) { _fun35518_ip = 92; continue _fun35518 }
 88:
            entity = mike === zulu;
 92:
            return entity;
        }
    };
    zulu['useIsEligibleForFriendRequestDefaults'] = tango;
    mike = function(argFoo) {
        _fun35519: for(var _fun35519_ip = 0; ; ) switch(_fun35519_ip) {
 0:
            mike = argFoo;
            golf = _closure1_slot0;
            report = golf.useExperiment;
            tango = {};
            tango['location'] = mike;
            entity = {};
            oscar = false;
            entity['autoTrackExposure'] = oscar;
            entity = report.bind(golf)(tango, entity);
            entity = entity.bucket;
            report = _closure1_slot1;
            tango = report.useExperiment;
            zulu = {};
            zulu['location'] = mike;
            mike = {};
            mike['autoTrackExposure'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            zulu = mike.bucket;
            mike = 1;
            entity = mike === entity;
            if(entity) { _fun35519_ip = 92; continue _fun35519 }
 88:
            entity = mike === zulu;
 92:
            return entity;
        }
    };
    zulu['useIsEligibleForFriendRequestAlerts'] = mike;
    return entity;
})();