// app/modules/contact_sync/native/ContactSyncAnalyticsUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
    entity = global;
    verify = entity.Object;
    report = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(verify)(zuuluu, entity, tangon);
    report = 0;
    tangon = golfie[report];
    entity = undefined;
    tangon = option.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.getIsOnboarding;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.ContactPermissions;
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.AnalyticEvents;
    var _closure1_slot6 = tangon;
    tangon = {};
    option = 'Flow Initialized';
    tangon['INITIALIZED'] = option;
    option = 'Landing';
    tangon['LANDING'] = option;
    option = 'Contacts Permission Requested';
    tangon['PERMISSION_REQUESTED'] = option;
    option = 'Name Input';
    tangon['NAME_INPUT'] = option;
    option = 'Suggestions Results';
    tangon['SUGGESTIONS_RESULTS'] = option;
    option = 'Contact Invites';
    tangon['CONTACT_INVITES'] = option;
    option = 'Add Phone Number';
    tangon['ADD_PHONE_NUMBER'] = option;
    option = 'Verify Phone Number';
    tangon['VERIFY_PHONE_NUMBER'] = option;
    option = 'Password Confirmation';
    tangon['PASSWORD_CONFIRM'] = option;
    option = 'Complete';
    tangon['COMPLETE'] = option;
    var _closure1_slot7 = tangon;
    option = null;
    var _closure1_slot8 = option;
    var _closure1_slot9 = report;
    report = 7;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/contact_sync/native/ContactSyncAnalyticsUtils.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['Steps'] = tangon;
    tangon = 'Onboarding';
    zuuluu['CONTACT_SYNC_ONBOARDING_LOCATION'] = tangon;
    tangon = function(argFoo) { // Original name: trackFlowStart
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            var _closure2_slot0 = entity;
            entity = _closure1_slot7;
            entity = entity.LANDING;
            _closure1_slot8 = entity;
            entity = global;
            tangon = entity.Date;
            entity = tangon.now;
            entity = entity.bind(tangon)();
            _closure1_slot9 = entity;
            tangon = _closure1_slot3;
            entity = tangon.getCurrentUser;
            oscard = entity.bind(tangon)();
            report = null;
            golfie = report == oscard;
            entity = undefined;
            tangon = undefined;
            if(golfie) { _fun00002_ip = 79; continue _fun00001 }
 73:
            tangon = oscard.phone;
 79:
            tangon = report != tangon;
            var _closure2_slot1 = tangon;
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            zuuluu = 4;
            zuuluu = report[zuuluu];
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.checkContactPermissions;
            tangon = zuuluu.bind(tangon)();
            zuuluu = tangon.then;
            michal = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = argFoo;
                    entity = _closure1_slot5;
                    entity = entity.NOT_DETERMINED;
                    golfie = null;
                    if(!(zuuluu !== entity)) { _fun00004_ip = 49; continue _fun00003 }
 22:
                    entity = _closure1_slot5;
                    michal = entity.AUTHORIZED;
                    entity = 'denied';
                    if(!(zuuluu === michal)) { _fun00004_ip = 46; continue _fun00003 }
 42:
                    entity = 'accepted';
 46:
                    golfie = entity;
 49:
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 5;
                    michal = michal[entity];
                    entity = undefined;
                    report = zuuluu.bind(entity)(michal);
                    tangon = report.track;
                    michal = _closure1_slot6;
                    zuuluu = michal.CONTACT_SYNC_FLOW_KEY;
                    michal = {};
                    yankee = _closure2_slot0;
                    romeon = michal;
                    verify = copyDataProperties(romeon, yankee);
                    offset = 'Contact Sync';
                    verify = 'flow_type';
                    michal[verify] = offset;
                    option = _closure1_slot7;
                    offset = option.INITIALIZED;
                    verify = 'from_step';
                    michal[verify] = offset;
                    verify = option.LANDING;
                    option = 'to_step';
                    michal[option] = verify;
                    verify = false;
                    option = 'skip';
                    michal[option] = verify;
                    option = 'back';
                    michal[option] = verify;
                    verify = 0;
                    option = 'seconds_on_from_step';
                    michal[option] = verify;
                    option = _closure2_slot1;
                    oscard = 'has_phone_number';
                    michal[oscard] = option;
                    oscard = 'mobile_contacts_permission';
                    michal[oscard] = golfie;
                    michal = tangon.bind(report)(zuuluu, michal);
                    return entity;
                }
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    zuuluu['trackFlowStart'] = tangon;
    tangon = function(argFoo, argBar, argBaz, argCor) { // Original name: trackFlowStep
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = argFoo;
            verify = argBar;
            backup = argCor;
            tangon = _closure1_slot4;
            entity = undefined;
            report = tangon.bind(entity)();
            tangon = global;
            oscard = tangon.Date;
            tangon = oscard.now;
            tangon = tangon.bind(oscard)();
            oscard = _closure1_slot9;
            golfie = tangon - oscard;
            oscard = 1000;
            romeon = golfie / oscard;
            golfie = _closure1_slot1;
            option = _closure1_slot2;
            oscard = 5;
            oscard = option[oscard];
            offset = golfie.bind(entity)(oscard);
            option = offset.track;
            oscard = _closure1_slot6;
            golfie = oscard.CONTACT_SYNC_FLOW_KEY;
            oscard = {};
            result = oscard;
            output = backup;
            yankee = copyDataProperties(result, output);
            foxtra = 'Onboarding';
            if(report) { _fun00006_ip = 132; continue _fun00005 }
 113:
            yankee = null;
            kiloes = yankee == backup;
            yankee = undefined;
            if(kiloes) { _fun00006_ip = 129; continue _fun00005 }
 124:
            yankee = backup.location;
 129:
            foxtra = yankee;
 132:
            yankee = 'location';
            oscard[yankee] = foxtra;
            foxtra = 'Contact Sync';
            yankee = 'flow_type';
            oscard[yankee] = foxtra;
            foxtra = _closure1_slot8;
            yankee = 'from_step';
            oscard[yankee] = foxtra;
            yankee = 'to_step';
            oscard[yankee] = zuuluu;
            yankee = 'skip';
            oscard[yankee] = verify;
            foxtra = argBaz;
            yankee = 'back';
            oscard[yankee] = foxtra;
            yankee = 'seconds_on_from_step';
            oscard[yankee] = romeon;
            oscard = option.bind(offset)(golfie, oscard);
            if(!report) { _fun00006_ip = 263; continue _fun00005 }
 219:
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            report = 6;
            report = golfie[report];
            option = oscard.bind(entity)(report);
            golfie = option.trackNUFStep;
            oscard = _closure1_slot8;
            report = {};
            report['skip'] = verify;
            report = golfie.bind(option)(oscard, zuuluu, report);
 263:
            _closure1_slot9 = tangon;
            _closure1_slot8 = zuuluu;
            return entity;
        }
    };
    zuuluu['trackFlowStep'] = tangon;
    michal = function(argFoo, argBar) { // Original name: trackFlowEnd
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            offset = argBar;
            michal = _closure1_slot4;
            entity = undefined;
            golfie = michal.bind(entity)();
            michal = global;
            tangon = michal.Date;
            michal = tangon.now;
            option = michal.bind(tangon)();
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            michal = 5;
            michal = report[michal];
            oscard = tangon.bind(entity)(michal);
            report = oscard.track;
            michal = _closure1_slot6;
            tangon = michal.CONTACT_SYNC_FLOW_KEY;
            michal = {};
            foxtra = michal;
            romeon = offset;
            verify = copyDataProperties(foxtra, romeon);
            verify = 'Onboarding';
            if(golfie) { _fun00008_ip = 108; continue _fun00007 }
 89:
            golfie = null;
            yankee = golfie == offset;
            golfie = undefined;
            if(yankee) { _fun00008_ip = 105; continue _fun00007 }
 100:
            golfie = offset.location;
 105:
            verify = golfie;
 108:
            golfie = 'location';
            michal[golfie] = verify;
            verify = 'Contact Sync';
            golfie = 'flow_type';
            michal[golfie] = verify;
            verify = _closure1_slot8;
            golfie = 'from_step';
            michal[golfie] = verify;
            golfie = _closure1_slot7;
            verify = golfie.COMPLETE;
            golfie = 'to_step';
            michal[golfie] = verify;
            verify = argFoo;
            golfie = 'skip';
            michal[golfie] = verify;
            verify = false;
            golfie = 'back';
            michal[golfie] = verify;
            golfie = _closure1_slot9;
            option = option - golfie;
            golfie = 1000;
            option = option / golfie;
            golfie = 'seconds_on_from_step';
            michal[golfie] = option;
            michal = report.bind(oscard)(tangon, michal);
            michal = null;
            _closure1_slot8 = michal;
            return entity;
        }
    };
    zuuluu['trackFlowEnd'] = michal;
    return entity;
})();