// app/modules/user_profile/hooks/useUserProfileActivity.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    tango = tango.useMemo;
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ActivityTypes;
    var _closure1_slot7 = tango;
    tango = new Array(0);
    var _closure1_slot8 = tango;
    tango = new Array(0);
    var _closure1_slot9 = tango;
    tango = 13;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/user_profile/hooks/useUserProfileActivity.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useUserProfileActivity
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            verify = argFoo;
            var _closure2_slot0 = verify;
            report = _closure1_slot0;
            options = _closure1_slot2;
            mike = 5;
            mike = options[mike];
            oscar = undefined;
            golf = report.bind(oscar)(mike);
            zulu = golf.useUserProfileModalRecentActivityExperiment;
            mike = {};
            offset = 'useUserProfileActivity';
            mike['location'] = offset;
            mike = zulu.bind(golf)(mike);
            mike = mike.recentActivityTabEnabled;
            var _closure2_slot1 = mike;
            mike = 6;
            mike = options[mike];
            golf = report.bind(oscar)(mike);
            zulu = golf.useUserProfileRecentActivityExperiment;
            mike = {};
            mike['location'] = offset;
            mike = zulu.bind(golf)(mike);
            mike = mike.recentActivityEnabled;
            var _closure2_slot2 = mike;
            mike = 7;
            zulu = options[mike];
            yankee = report.bind(oscar)(zulu);
            offset = yankee.useStateFromStores;
            zulu = _closure1_slot5;
            golf = new Array(1);
            golf[0] = zulu;
            zulu = function() {
                mike = _closure1_slot5;
                entity = mike.getId;
                mike = entity.bind(mike)();
                entity = _closure2_slot0;
                entity = mike === entity;
                return entity;
            };
            zulu = offset.bind(yankee)(golf, zulu);
            var _closure2_slot3 = zulu;
            golf = _closure1_slot1;
            zulu = 8;
            zulu = options[zulu];
            golf = golf.bind(oscar)(zulu);
            zulu = 'use-user-profile-activity';
            zulu = golf.bind(oscar)(verify, zulu);
            golf = options[mike];
            yankee = report.bind(oscar)(golf);
            offset = yankee.useStateFromStores;
            golf = _closure1_slot6;
            verify = new Array(1);
            verify[0] = golf;
            golf = function() {
                zulu = _closure1_slot6;
                mike = zulu.getActivities;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            golf = offset.bind(yankee)(verify, golf);
            var _closure2_slot4 = golf;
            mike = options[mike];
            verify = report.bind(oscar)(mike);
            options = verify.useStateFromStores;
            mike = _closure1_slot4;
            report = new Array(1);
            report[0] = mike;
            mike = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = _closure2_slot3;
                    if(entity) { _fun00004_ip = 26; continue _fun00003 }
 10:
                    entity = _closure2_slot1;
                    if(entity) { _fun00004_ip = 26; continue _fun00003 }
 17:
                    zulu = _closure2_slot2;
                    entity = undefined;
                    if(!zulu) { _fun00004_ip = 48; continue _fun00003 }
 26:
                    tango = _closure1_slot4;
                    zulu = tango.getUserOutbox;
                    mike = _closure2_slot0;
                    entity = zulu.bind(tango)(mike);
 48:
                    return entity;
                }
            };
            mike = options.bind(verify)(report, mike);
            var _closure2_slot5 = mike;
            report = _closure1_slot3;
            tango = new Array(2);
            tango[0] = golf;
            golf = null;
            options = golf == mike;
            golf = undefined;
            if(options) { _fun00002_ip = 289; continue _fun00001 }
 283:
            golf = mike.entries;
 289:
            tango[1] = golf;
            entity = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    mike = 9;
                    tango = tango[mike];
                    mike = undefined;
                    options = report.bind(mike)(tango);
                    golf = options.uniqWith;
                    verify = _closure2_slot4;
                    oscar = verify.filter;
                    tango = function(argFoo) {
                        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                            entity = argFoo;
                            zulu = entity.type;
                            entity = _closure1_slot7;
                            entity = entity.CUSTOM_STATUS;
                            entity = zulu !== entity;
                            if(!entity) { _fun00008_ip = 42; continue _fun00007 }
 28:
                            mike = _closure1_slot7;
                            mike = mike.HANG_STATUS;
                            entity = zulu !== mike;
 42:
                            return entity;
                        }
                    };
                    oscar = oscar.bind(verify)(tango);
                    tango = function(argFoo, argBar) {
                        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                            tango = argFoo;
                            zulu = argBar;
                            entity = tango.application_id;
                            oscar = null;
                            entity = oscar != entity;
                            if(!entity) { _fun00010_ip = 31; continue _fun00009 }
 21:
                            mike = zulu.application_id;
                            entity = oscar != mike;
 31:
                            if(!entity) { _fun00010_ip = 50; continue _fun00009 }
 34:
                            report = tango.application_id;
                            mike = zulu.application_id;
                            entity = report === mike;
 50:
                            if(entity) { _fun00010_ip = 94; continue _fun00009 }
 53:
                            mike = tango.name;
                            mike = oscar != mike;
                            if(!mike) { _fun00010_ip = 74; continue _fun00009 }
 65:
                            report = zulu.name;
                            mike = oscar != report;
 74:
                            if(!mike) { _fun00010_ip = 91; continue _fun00009 }
 77:
                            tango = tango.name;
                            zulu = zulu.name;
                            mike = tango === zulu;
 91:
                            entity = mike;
 94:
                            return entity;
                        }
                    };
                    oscar = golf.bind(options)(oscar, tango);
                    var _closure3_slot0 = oscar;
                    golf = _closure2_slot5;
                    tango = null;
                    golf = tango == golf;
                    if(golf) { _fun00006_ip = 108; continue _fun00005 }
 83:
                    report = _closure2_slot5;
                    golf = report.entries;
                    report = golf.filter;
                    entity = function(argFoo) {
                        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                            zulu = argFoo;
                            var _closure4_slot0 = zulu;
                            report = _closure1_slot0;
                            oscar = _closure1_slot2;
                            entity = 10;
                            entity = oscar[entity];
                            oscar = undefined;
                            report = report.bind(oscar)(entity);
                            entity = report.isEntryLive;
                            entity = entity.bind(report)(zulu);
                            entity = !entity;
                            if(!entity) { _fun00012_ip = 235; continue _fun00011 }
 54:
                            options = _closure1_slot0;
                            report = _closure1_slot2;
                            golf = 11;
                            report = report[golf];
                            options = options.bind(oscar)(report);
                            report = options.isListenedSessionEntry;
                            report = report.bind(options)(zulu);
                            if(report) { _fun00012_ip = 177; continue _fun00011 }
 88:
                            options = _closure1_slot0;
                            report = _closure1_slot2;
                            report = report[golf];
                            options = options.bind(oscar)(report);
                            report = options.isWatchedMediaEntry;
                            report = report.bind(options)(zulu);
                            if(report) { _fun00012_ip = 149; continue _fun00011 }
 119:
                            report = _closure1_slot0;
                            mike = _closure1_slot2;
                            mike = mike[golf];
                            report = report.bind(oscar)(mike);
                            mike = report.isRecentActivityEntry;
                            mike = mike.bind(report)(zulu);
                            _fun00012_ip = 175; continue _fun00011;
 149:
                            golf = _closure3_slot0;
                            oscar = golf.some;
                            report = function(argFoo) {
                                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                                    report = argFoo;
                                    entity = null;
                                    entity = entity != report;
                                    if(!entity) { _fun00014_ip = 56; continue _fun00013 }
 12:
                                    tango = _closure1_slot0;
                                    zulu = _closure1_slot2;
                                    mike = 12;
                                    zulu = zulu[mike];
                                    mike = undefined;
                                    tango = tango.bind(mike)(zulu);
                                    zulu = tango.isMatchingWatchActivity;
                                    mike = _closure4_slot0;
                                    entity = zulu.bind(tango)(mike, report);
 56:
                                    return entity;
                                }
                            };
                            report = oscar.bind(golf)(report);
                            mike = !report;
 175:
                            _fun00012_ip = 232; continue _fun00011;
 177:
                            zulu = zulu.extra;
                            zulu = zulu.entries;
                            report = zulu.length;
                            zulu = 0;
                            zulu = report > zulu;
                            if(!zulu) { _fun00012_ip = 229; continue _fun00011 }
 203:
                            oscar = _closure3_slot0;
                            report = oscar.some;
                            tango = function(argFoo) {
                                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                                    report = argFoo;
                                    entity = null;
                                    entity = entity != report;
                                    if(!entity) { _fun00016_ip = 56; continue _fun00015 }
 12:
                                    tango = _closure1_slot0;
                                    zulu = _closure1_slot2;
                                    mike = 12;
                                    zulu = zulu[mike];
                                    mike = undefined;
                                    tango = tango.bind(mike)(zulu);
                                    zulu = tango.isMatchingListeningActivity;
                                    mike = _closure4_slot0;
                                    entity = zulu.bind(tango)(mike, report);
 56:
                                    return entity;
                                }
                            };
                            tango = report.bind(oscar)(tango);
                            zulu = !tango;
 229:
                            mike = zulu;
 232:
                            entity = mike;
 235:
                            return entity;
                        }
                    };
                    mike = report.bind(golf)(entity);
 108:
                    entity = {};
                    golf = oscar.length;
                    report = 0;
                    if(!(report === golf)) { _fun00006_ip = 125; continue _fun00005 }
 121:
                    oscar = _closure1_slot8;
 125:
                    entity['live'] = oscar;
                    if(!(tango != mike)) { _fun00006_ip = 143; continue _fun00005 }
 134:
                    tango = mike.length;
                    if(!(report === tango)) { _fun00006_ip = 147; continue _fun00005 }
 143:
                    mike = _closure1_slot9;
 147:
                    entity['recent'] = mike;
                    return entity;
                }
            };
            tango = report.bind(oscar)(entity, tango);
            entity = {};
            report = tango.live;
            entity['live'] = report;
            tango = tango.recent;
            entity['recent'] = tango;
            entity['stream'] = zulu;
            entity['outbox'] = mike;
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();