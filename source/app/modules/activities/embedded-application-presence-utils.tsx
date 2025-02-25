// app/modules/activities/embedded-application-presence-utils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    oscard = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = oscard;
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
                    if(zuuluu) { _fun00002_ip = 525; continue _fun00001 }
 13:
                    oscard = michal.applicationId;
                    option = michal.socketId;
                    zuuluu = undefined;
                    SaveGenerator(address=30);
 28:
                    return zuuluu;
 30:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 522; continue _fun00001 }
 39:
                    golfie = _closure1_slot8;
                    report = golfie.getCurrentEmbeddedActivity;
                    verify = report.bind(golfie)();
                    romeon = null;
                    golfie = romeon == verify;
                    report = undefined;
                    if(golfie) { _fun00002_ip = 72; continue _fun00001 }
 67:
                    report = verify.applicationId;
 72:
                    if(!(report === oscard)) { _fun00002_ip = 519; continue _fun00001 }
 79:
                    offset = verify.compositeInstanceId;
                    golfie = _closure1_slot4;
                    report = golfie.getApplication;
                    golfie = report.bind(golfie)(oscard);
                    if(!(romeon == golfie)) { _fun00002_ip = 165; continue _fun00001 }
 104:
                    foxtra = _closure1_slot5;
                    yankee = foxtra.createFromServer;
                    backup = _closure1_slot1;
                    kiloes = _closure1_slot2;
                    report = 7;
                    report = kiloes[report];
                    backup = backup.bind(zuuluu)(report);
                    report = backup.fetchApplication;
                    report = report.bind(backup)(oscard);
                    SaveGenerator(address=149);
 147:
                    return report;
 149:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=13);
                    if(backup) { _fun00002_ip = 162; continue _fun00001 }
 155:
                    golfie = yankee.bind(foxtra)(report);
                    _fun00002_ip = 165; continue _fun00001;
 162:
                    return report;
 165:
                    yankee = _closure1_slot0;
                    foxtra = _closure1_slot2;
                    report = 8;
                    report = foxtra[report];
                    yankee = yankee.bind(zuuluu)(report);
                    report = yankee.isContextlessActivitiesEnabledForApp;
                    report = report.bind(yankee)(golfie);
                    yankee = golfie;
                    if(!report) { _fun00002_ip = 519; continue _fun00001 }
 205:
                    if(!(romeon != offset)) { _fun00002_ip = 519; continue _fun00001 }
 212:
                    if(!(romeon != yankee)) { _fun00002_ip = 519; continue _fun00001 }
 219:
                    golfie = _closure1_slot0;
                    foxtra = _closure1_slot2;
                    report = 9;
                    report = foxtra[report];
                    backup = golfie.bind(zuuluu)(report);
                    foxtra = backup.hasFlag;
                    golfie = yankee.flags;
                    report = _closure1_slot10;
                    report = report.EMBEDDED;
                    report = foxtra.bind(backup)(golfie, report);
                    if(!report) { _fun00002_ip = 519; continue _fun00001 }
 272:
                    golfie = {};
                    report = 0;
                    golfie['type'] = report;
                    backup = _closure1_slot6;
                    foxtra = backup.getSessionId;
                    foxtra = foxtra.bind(backup)();
                    backup = romeon != foxtra;
                    romeon = undefined;
                    if(!backup) { _fun00002_ip = 306; continue _fun00001 }
 303:
                    romeon = foxtra;
 306:
                    golfie['session_id'] = romeon;
                    yankee = yankee.name;
                    golfie['name'] = yankee;
                    golfie['application_id'] = oscard;
                    oscard = {};
                    yankee = global;
                    foxtra = yankee.crypto;
                    romeon = foxtra.randomUUID;
                    romeon = romeon.bind(foxtra)();
                    oscard['join'] = romeon;
                    golfie['secrets'] = oscard;
                    oscard = {};
                    romeon = yankee.crypto;
                    yankee = romeon.randomUUID;
                    yankee = yankee.bind(romeon)();
                    oscard['id'] = yankee;
                    yankee = _closure1_slot11;
                    oscard['size'] = yankee;
                    golfie['party'] = oscard;
                    golfie['flags'] = report;
                    oscard = {};
                    oscard['embedded_activity_instance_id'] = offset;
                    golfie['metadata'] = oscard;
                    offset = _closure1_slot0;
                    yankee = _closure1_slot2;
                    oscard = 10;
                    oscard = yankee[oscard];
                    yankee = offset.bind(zuuluu)(oscard);
                    offset = yankee.computeActivityFlags;
                    oscard = true;
                    offset = offset.bind(yankee)(golfie, oscard);
                    if(!(offset > report)) { _fun00002_ip = 469; continue _fun00001 }
 443:
                    oscard = _closure1_slot13;
                    report = {};
                    report['flags'] = offset;
                    report['embeddedActivity'] = verify;
                    report = oscard.bind(zuuluu)(report);
                    golfie['flags'] = report;
 469:
                    report = _closure1_slot1;
                    oscard = _closure1_slot2;
                    tangon = 11;
                    tangon = oscard[tangon];
                    oscard = report.bind(zuuluu)(tangon);
                    report = oscard.dispatch;
                    tangon = {};
                    verify = 'LOCAL_ACTIVITY_UPDATE';
                    tangon['type'] = verify;
                    tangon['socketId'] = option;
                    tangon['activity'] = golfie;
                    tangon = report.bind(oscard)(tangon);
 519:
                    return zuuluu;
 522:
                    return michal;
 525:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot12 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot12 = entity;
    tangon = function(argFoo) { // Original name: applyContextlessFlags
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            tangon = entity.flags;
            entity = entity.embeddedActivity;
            zuuluu = _closure1_slot9;
            zuuluu = zuuluu.CONTEXTLESS;
            zuuluu = tangon | zuuluu;
            report = _closure1_slot7;
            tangon = report.getChannelId;
            report = tangon.bind(report)();
            tangon = null;
            tangon = tangon != report;
            if(!tangon) { _fun00004_ip = 102; continue _fun00003 }
 54:
            oscard = entity.location;
            golfie = oscard.kind;
            verify = _closure1_slot0;
            option = _closure1_slot2;
            oscard = 12;
            option = option[oscard];
            oscard = undefined;
            oscard = verify.bind(oscard)(option);
            oscard = oscard.ActivityLocationKinds;
            oscard = oscard.CONTEXTLESS;
            tangon = golfie === oscard;
 102:
            if(!tangon) { _fun00004_ip = 120; continue _fun00003 }
 105:
            entity = entity.location;
            entity = entity.starting_channel_id;
            tangon = entity === report;
 120:
            entity = zuuluu;
            if(!tangon) { _fun00004_ip = 140; continue _fun00003 }
 126:
            michal = _closure1_slot9;
            michal = michal.PARTY_PRIVACY_VOICE_CHANNEL;
            entity = zuuluu | michal;
 140:
            return entity;
        }
    };
    var _closure1_slot13 = tangon;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, michal);
    entity = 0;
    michal = option[entity];
    entity = undefined;
    michal = oscard.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = option[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 2;
    michal = option[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 3;
    michal = option[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot6 = michal;
    michal = 4;
    michal = option[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot7 = michal;
    michal = 5;
    michal = option[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot8 = michal;
    michal = 6;
    michal = option[michal];
    michal = golfie.bind(entity)(michal);
    oscard = michal.ActivityFlags;
    var _closure1_slot9 = oscard;
    michal = michal.ApplicationFlags;
    var _closure1_slot10 = michal;
    michal = [1, 0];
    var _closure1_slot11 = michal;
    oscard = 13;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/activities/embedded-application-presence-utils.tsx';
    oscard = golfie.bind(option)(oscard);
    report = function() { // Original name: setDefaultPresenceForEmbeddedApp
        entity = undefined;
        tangon = _closure1_slot12;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['setDefaultPresenceForEmbeddedApp'] = report;
    zuuluu['applyContextlessFlags'] = tangon;
    zuuluu['DEFAULT_EMBEDDED_ACTIVITY_PARTY_SIZE'] = michal;
    return entity;
})();