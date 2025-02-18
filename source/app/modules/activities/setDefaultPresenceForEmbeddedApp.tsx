// app/modules/activities/setDefaultPresenceForEmbeddedApp.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    tangon = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = tangon;
    var _closure1_slot2 = option;
    entity = function() { // Original name: _setDefaultPresenceForEmbeddedApp
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    michal = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 412; continue _fun00001 }
 13:
                    report = michal.applicationId;
                    option = michal.socketId;
                    zuuluu = undefined;
                    SaveGenerator(address=30);
 28:
                    return zuuluu;
 30:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 409; continue _fun00001 }
 39:
                    golfie = _closure1_slot7;
                    oscard = golfie.getCurrentEmbeddedActivity;
                    oscard = oscard.bind(golfie)();
                    offset = null;
                    verify = offset == oscard;
                    golfie = undefined;
                    if(verify) { _fun00002_ip = 72; continue _fun00001 }
 67:
                    golfie = oscard.applicationId;
 72:
                    if(!(golfie === report)) { _fun00002_ip = 406; continue _fun00001 }
 79:
                    oscard = oscard.compositeInstanceId;
                    verify = _closure1_slot4;
                    golfie = verify.getApplication;
                    verify = golfie.bind(verify)(report);
                    if(!(offset == verify)) { _fun00002_ip = 165; continue _fun00001 }
 104:
                    romeon = _closure1_slot5;
                    yankee = romeon.createFromServer;
                    foxtra = _closure1_slot1;
                    backup = _closure1_slot2;
                    golfie = 6;
                    golfie = backup[golfie];
                    foxtra = foxtra.bind(zuuluu)(golfie);
                    golfie = foxtra.fetchApplication;
                    golfie = golfie.bind(foxtra)(report);
                    SaveGenerator(address=149);
 147:
                    return golfie;
 149:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=12);
                    if(foxtra) { _fun00002_ip = 162; continue _fun00001 }
 155:
                    verify = yankee.bind(romeon)(golfie);
                    _fun00002_ip = 165; continue _fun00001;
 162:
                    return golfie;
 165:
                    yankee = _closure1_slot0;
                    romeon = _closure1_slot2;
                    golfie = 7;
                    golfie = romeon[golfie];
                    yankee = yankee.bind(zuuluu)(golfie);
                    golfie = yankee.isContextlessActivitiesEnabledForApp;
                    golfie = golfie.bind(yankee)(verify);
                    if(!golfie) { _fun00002_ip = 406; continue _fun00001 }
 202:
                    if(!(offset != oscard)) { _fun00002_ip = 406; continue _fun00001 }
 209:
                    if(!(offset != verify)) { _fun00002_ip = 406; continue _fun00001 }
 216:
                    yankee = _closure1_slot0;
                    romeon = _closure1_slot2;
                    golfie = 8;
                    golfie = romeon[golfie];
                    foxtra = yankee.bind(zuuluu)(golfie);
                    romeon = foxtra.hasFlag;
                    yankee = verify.flags;
                    golfie = _closure1_slot8;
                    golfie = golfie.EMBEDDED;
                    golfie = romeon.bind(foxtra)(yankee, golfie);
                    if(!golfie) { _fun00002_ip = 406; continue _fun00001 }
 269:
                    golfie = {};
                    yankee = 0;
                    golfie['type'] = yankee;
                    romeon = _closure1_slot6;
                    yankee = romeon.getSessionId;
                    yankee = yankee.bind(romeon)();
                    romeon = offset != yankee;
                    offset = undefined;
                    if(!romeon) { _fun00002_ip = 303; continue _fun00001 }
 300:
                    offset = yankee;
 303:
                    golfie['session_id'] = offset;
                    verify = verify.name;
                    golfie['name'] = verify;
                    golfie['application_id'] = report;
                    report = {};
                    report['join'] = oscard;
                    golfie['secrets'] = report;
                    report = {};
                    oscard = _closure1_slot9;
                    report['size'] = oscard;
                    golfie['party'] = report;
                    report = _closure1_slot10;
                    golfie['flags'] = report;
                    report = _closure1_slot1;
                    oscard = _closure1_slot2;
                    tangon = 9;
                    tangon = oscard[tangon];
                    oscard = report.bind(zuuluu)(tangon);
                    report = oscard.dispatch;
                    tangon = {};
                    verify = 'LOCAL_ACTIVITY_UPDATE';
                    tangon['type'] = verify;
                    tangon['socketId'] = option;
                    tangon['activity'] = golfie;
                    tangon = report.bind(oscard)(tangon);
 406:
                    return zuuluu;
 409:
                    return michal;
 412:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot11 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot11 = entity;
    entity = global;
    verify = entity.Object;
    oscard = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = option[entity];
    entity = undefined;
    michal = tangon.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = option[michal];
    michal = tangon.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 2;
    michal = option[michal];
    michal = tangon.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 3;
    michal = option[michal];
    michal = tangon.bind(entity)(michal);
    var _closure1_slot6 = michal;
    michal = 4;
    michal = option[michal];
    michal = tangon.bind(entity)(michal);
    var _closure1_slot7 = michal;
    michal = 5;
    michal = option[michal];
    tangon = golfie.bind(entity)(michal);
    michal = tangon.ActivityFlags;
    tangon = tangon.ApplicationFlags;
    var _closure1_slot8 = tangon;
    tangon = [1, 100];
    var _closure1_slot9 = tangon;
    verify = michal.JOIN;
    oscard = michal.PARTY_PRIVACY_FRIENDS;
    verify = verify | oscard;
    oscard = michal.PARTY_PRIVACY_VOICE_CHANNEL;
    verify = verify | oscard;
    oscard = michal.EMBEDDED;
    oscard = verify | oscard;
    michal = michal.CONTEXTLESS;
    michal = oscard | michal;
    var _closure1_slot10 = michal;
    oscard = 10;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/activities/setDefaultPresenceForEmbeddedApp.tsx';
    oscard = golfie.bind(option)(oscard);
    report = function() { // Original name: setDefaultPresenceForEmbeddedApp
        entity = undefined;
        tangon = _closure1_slot11;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['setDefaultPresenceForEmbeddedApp'] = report;
    zuuluu['DEFAULT_EMBEDDED_ACTIVITY_PARTY_SIZE'] = tangon;
    zuuluu['DEFAULT_CONTEXTLESS_EMBEDDED_ACTIVITY_FLAGS'] = michal;
    return entity;
})();