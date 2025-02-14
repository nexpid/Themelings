// app/modules/contact_sync/native/ContactSyncAnalyticsUtils.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    var _closure1_slot2 = golf;
    entity = global;
    verify = entity.Object;
    report = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(verify)(zulu, entity, tango);
    report = 0;
    tango = golf[report];
    entity = undefined;
    tango = options.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    tango = tango.getIsOnboarding;
    var _closure1_slot4 = tango;
    tango = 2;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    tango = tango.ContactPermissions;
    var _closure1_slot5 = tango;
    tango = 3;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    tango = tango.AnalyticEvents;
    var _closure1_slot6 = tango;
    tango = {};
    options = 'Flow Initialized';
    tango['INITIALIZED'] = options;
    options = 'Landing';
    tango['LANDING'] = options;
    options = 'Contacts Permission Requested';
    tango['PERMISSION_REQUESTED'] = options;
    options = 'Name Input';
    tango['NAME_INPUT'] = options;
    options = 'Suggestions Results';
    tango['SUGGESTIONS_RESULTS'] = options;
    options = 'Contact Invites';
    tango['CONTACT_INVITES'] = options;
    options = 'Add Phone Number';
    tango['ADD_PHONE_NUMBER'] = options;
    options = 'Verify Phone Number';
    tango['VERIFY_PHONE_NUMBER'] = options;
    options = 'Password Confirmation';
    tango['PASSWORD_CONFIRM'] = options;
    options = 'Complete';
    tango['COMPLETE'] = options;
    var _closure1_slot7 = tango;
    options = null;
    var _closure1_slot8 = options;
    var _closure1_slot9 = report;
    report = 7;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/contact_sync/native/ContactSyncAnalyticsUtils.tsx';
    report = oscar.bind(golf)(report);
    zulu['Steps'] = tango;
    tango = 'Onboarding';
    zulu['CONTACT_SYNC_ONBOARDING_LOCATION'] = tango;
    tango = function(argFoo) { // Original name: trackFlowStart
        _fun94838: for(var _fun94838_ip = 0; ; ) switch(_fun94838_ip) {
 0:
            entity = argFoo;
            var _closure2_slot0 = entity;
            entity = _closure1_slot7;
            entity = entity.LANDING;
            _closure1_slot8 = entity;
            entity = global;
            tango = entity.Date;
            entity = tango.now;
            entity = entity.bind(tango)();
            _closure1_slot9 = entity;
            tango = _closure1_slot3;
            entity = tango.getCurrentUser;
            oscar = entity.bind(tango)();
            report = null;
            golf = report == oscar;
            entity = undefined;
            tango = undefined;
            if(golf) { _fun94838_ip = 79; continue _fun94838 }
 73:
            tango = oscar.phone;
 79:
            tango = report != tango;
            var _closure2_slot1 = tango;
            tango = _closure1_slot0;
            report = _closure1_slot2;
            zulu = 4;
            zulu = report[zulu];
            tango = tango.bind(entity)(zulu);
            zulu = tango.checkContactPermissions;
            tango = zulu.bind(tango)();
            zulu = tango.then;
            mike = function(argFoo) {
                _fun94839: for(var _fun94839_ip = 0; ; ) switch(_fun94839_ip) {
 0:
                    zulu = argFoo;
                    entity = _closure1_slot5;
                    entity = entity.NOT_DETERMINED;
                    golf = null;
                    if(!(zulu !== entity)) { _fun94839_ip = 49; continue _fun94839 }
 22:
                    entity = _closure1_slot5;
                    mike = entity.AUTHORIZED;
                    entity = 'denied';
                    if(!(zulu === mike)) { _fun94839_ip = 46; continue _fun94839 }
 42:
                    entity = 'accepted';
 46:
                    golf = entity;
 49:
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 5;
                    mike = mike[entity];
                    entity = undefined;
                    report = zulu.bind(entity)(mike);
                    tango = report.track;
                    mike = _closure1_slot6;
                    zulu = mike.CONTACT_SYNC_FLOW_KEY;
                    mike = {};
                    yankee = _closure2_slot0;
                    romeo = mike;
                    verify = copyDataProperties(romeo, yankee);
                    offset = 'Contact Sync';
                    verify = 'flow_type';
                    mike[verify] = offset;
                    options = _closure1_slot7;
                    offset = options.INITIALIZED;
                    verify = 'from_step';
                    mike[verify] = offset;
                    verify = options.LANDING;
                    options = 'to_step';
                    mike[options] = verify;
                    verify = false;
                    options = 'skip';
                    mike[options] = verify;
                    options = 'back';
                    mike[options] = verify;
                    verify = 0;
                    options = 'seconds_on_from_step';
                    mike[options] = verify;
                    options = _closure2_slot1;
                    oscar = 'has_phone_number';
                    mike[oscar] = options;
                    oscar = 'mobile_contacts_permission';
                    mike[oscar] = golf;
                    mike = tango.bind(report)(zulu, mike);
                    return entity;
                }
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    zulu['trackFlowStart'] = tango;
    tango = function(argFoo, argBar, argBaz, argCorge) { // Original name: trackFlowStep
        _fun94840: for(var _fun94840_ip = 0; ; ) switch(_fun94840_ip) {
 0:
            zulu = argFoo;
            verify = argBar;
            backup = argCorge;
            tango = _closure1_slot4;
            entity = undefined;
            report = tango.bind(entity)();
            tango = global;
            oscar = tango.Date;
            tango = oscar.now;
            tango = tango.bind(oscar)();
            oscar = _closure1_slot9;
            golf = tango - oscar;
            oscar = 1000;
            romeo = golf / oscar;
            golf = _closure1_slot1;
            options = _closure1_slot2;
            oscar = 5;
            oscar = options[oscar];
            offset = golf.bind(entity)(oscar);
            options = offset.track;
            oscar = _closure1_slot6;
            golf = oscar.CONTACT_SYNC_FLOW_KEY;
            oscar = {};
            result = oscar;
            output = backup;
            yankee = copyDataProperties(result, output);
            foxtrot = 'Onboarding';
            if(report) { _fun94840_ip = 132; continue _fun94840 }
 113:
            yankee = null;
            kilo = yankee == backup;
            yankee = undefined;
            if(kilo) { _fun94840_ip = 129; continue _fun94840 }
 124:
            yankee = backup.location;
 129:
            foxtrot = yankee;
 132:
            yankee = 'location';
            oscar[yankee] = foxtrot;
            foxtrot = 'Contact Sync';
            yankee = 'flow_type';
            oscar[yankee] = foxtrot;
            foxtrot = _closure1_slot8;
            yankee = 'from_step';
            oscar[yankee] = foxtrot;
            yankee = 'to_step';
            oscar[yankee] = zulu;
            yankee = 'skip';
            oscar[yankee] = verify;
            foxtrot = argBaz;
            yankee = 'back';
            oscar[yankee] = foxtrot;
            yankee = 'seconds_on_from_step';
            oscar[yankee] = romeo;
            oscar = options.bind(offset)(golf, oscar);
            if(!report) { _fun94840_ip = 263; continue _fun94840 }
 219:
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            report = 6;
            report = golf[report];
            options = oscar.bind(entity)(report);
            golf = options.trackNUFStep;
            oscar = _closure1_slot8;
            report = {};
            report['skip'] = verify;
            report = golf.bind(options)(oscar, zulu, report);
 263:
            _closure1_slot9 = tango;
            _closure1_slot8 = zulu;
            return entity;
        }
    };
    zulu['trackFlowStep'] = tango;
    mike = function(argFoo, argBar) { // Original name: trackFlowEnd
        _fun94841: for(var _fun94841_ip = 0; ; ) switch(_fun94841_ip) {
 0:
            offset = argBar;
            mike = _closure1_slot4;
            entity = undefined;
            golf = mike.bind(entity)();
            mike = global;
            tango = mike.Date;
            mike = tango.now;
            options = mike.bind(tango)();
            tango = _closure1_slot1;
            report = _closure1_slot2;
            mike = 5;
            mike = report[mike];
            oscar = tango.bind(entity)(mike);
            report = oscar.track;
            mike = _closure1_slot6;
            tango = mike.CONTACT_SYNC_FLOW_KEY;
            mike = {};
            foxtrot = mike;
            romeo = offset;
            verify = copyDataProperties(foxtrot, romeo);
            verify = 'Onboarding';
            if(golf) { _fun94841_ip = 108; continue _fun94841 }
 89:
            golf = null;
            yankee = golf == offset;
            golf = undefined;
            if(yankee) { _fun94841_ip = 105; continue _fun94841 }
 100:
            golf = offset.location;
 105:
            verify = golf;
 108:
            golf = 'location';
            mike[golf] = verify;
            verify = 'Contact Sync';
            golf = 'flow_type';
            mike[golf] = verify;
            verify = _closure1_slot8;
            golf = 'from_step';
            mike[golf] = verify;
            golf = _closure1_slot7;
            verify = golf.COMPLETE;
            golf = 'to_step';
            mike[golf] = verify;
            verify = argFoo;
            golf = 'skip';
            mike[golf] = verify;
            verify = false;
            golf = 'back';
            mike[golf] = verify;
            golf = _closure1_slot9;
            options = options - golf;
            golf = 1000;
            options = options / golf;
            golf = 'seconds_on_from_step';
            mike[golf] = options;
            mike = report.bind(oscar)(tango, mike);
            mike = null;
            _closure1_slot8 = mike;
            return entity;
        }
    };
    zulu['trackFlowEnd'] = mike;
    return entity;
})();