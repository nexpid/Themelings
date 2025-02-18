// app/modules/contact_sync/native/ContactSyncActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.AnalyticEvents;
    var _closure1_slot5 = golfie;
    golfie = tangon.FriendDiscoveryFlags;
    var _closure1_slot6 = golfie;
    tangon = tangon.PlatformTypes;
    var _closure1_slot7 = tangon;
    tangon = function() {
        tangon = _closure1_slot3;
        zuuluu = undefined;
        michal = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    michal = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 488; continue _fun00001 }
 13:
                    yankee = michal.phone;
                    verify = michal.email;
                    tangon = _closure1_slot0;
                    michal = _closure1_slot2;
                    oscard = 3;
                    michal = michal[oscard];
                    zuuluu = undefined;
                    michal = tangon.bind(zuuluu)(michal);
                    tangon = michal.FriendDiscoverySettings;
                    michal = tangon.getSetting;
                    foxtra = michal.bind(tangon)();
                    report = _closure1_slot4;
                    tangon = report.getLocalAccount;
                    michal = _closure1_slot7;
                    michal = michal.CONTACTS;
                    michal = tangon.bind(report)(michal);
                    offset = null;
                    tangon = offset == michal;
                    romeon = undefined;
                    if(tangon) { _fun00002_ip = 107; continue _fun00001 }
 102:
                    romeon = michal.name;
 107:
                    backup = foxtra;
                    if(!(offset != yankee)) { _fun00002_ip = 157; continue _fun00001 }
 114:
                    tangon = _closure1_slot0;
                    report = _closure1_slot2;
                    michal = 4;
                    michal = report[michal];
                    report = tangon.bind(zuuluu)(michal);
                    tangon = report.setFlag;
                    michal = _closure1_slot6;
                    michal = michal.FIND_BY_PHONE;
                    backup = tangon.bind(report)(foxtra, michal, yankee);
 157:
                    report = backup;
                    if(!(offset != verify)) { _fun00002_ip = 207; continue _fun00001 }
 164:
                    tangon = _closure1_slot0;
                    golfie = _closure1_slot2;
                    michal = 4;
                    michal = golfie[michal];
                    golfie = tangon.bind(zuuluu)(michal);
                    tangon = golfie.setFlag;
                    michal = _closure1_slot6;
                    michal = michal.FIND_BY_EMAIL;
                    report = tangon.bind(golfie)(backup, michal, verify);
 207:
                    tangon = _closure1_slot0;
                    michal = _closure1_slot2;
                    michal = michal[oscard];
                    michal = tangon.bind(zuuluu)(michal);
                    tangon = michal.FriendDiscoverySettings;
                    michal = tangon.updateSetting;
                    michal = michal.bind(tangon)(report);
                    SaveGenerator(address=245);
 243:
                    return michal;
 245:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 485; continue _fun00001 }
 254:
                    report = _closure1_slot1;
                    oscard = _closure1_slot2;
                    tangon = 5;
                    tangon = oscard[tangon];
                    golfie = report.bind(zuuluu)(tangon);
                    oscard = golfie.track;
                    tangon = _closure1_slot5;
                    report = tangon.USER_DISCOVERY_UPDATED;
                    tangon = {};
                    backup = 'string';
                    romeon = typeof romeon;
                    romeon = backup === romeon;
                    tangon['has_name'] = romeon;
                    if(!(offset == yankee)) { _fun00002_ip = 355; continue _fun00001 }
 313:
                    backup = _closure1_slot0;
                    kiloes = _closure1_slot2;
                    romeon = 4;
                    romeon = kiloes[romeon];
                    kiloes = backup.bind(zuuluu)(romeon);
                    backup = kiloes.hasFlag;
                    romeon = _closure1_slot6;
                    romeon = romeon.FIND_BY_PHONE;
                    yankee = backup.bind(kiloes)(foxtra, romeon);
 355:
                    tangon['discoverable_phone'] = yankee;
                    if(!(offset == verify)) { _fun00002_ip = 408; continue _fun00001 }
 366:
                    yankee = _closure1_slot0;
                    romeon = _closure1_slot2;
                    offset = 4;
                    offset = romeon[offset];
                    romeon = yankee.bind(zuuluu)(offset);
                    yankee = romeon.hasFlag;
                    offset = _closure1_slot6;
                    offset = offset.FIND_BY_EMAIL;
                    verify = yankee.bind(romeon)(foxtra, offset);
 408:
                    tangon['discoverable_email'] = verify;
                    offset = _closure1_slot0;
                    yankee = _closure1_slot2;
                    verify = 6;
                    verify = yankee[verify];
                    offset = offset.bind(zuuluu)(verify);
                    verify = offset.isContactSyncEnabled;
                    romeon = _closure1_slot4;
                    yankee = romeon.getLocalAccount;
                    option = _closure1_slot7;
                    option = option.CONTACTS;
                    option = yankee.bind(romeon)(option);
                    option = verify.bind(offset)(option);
                    tangon['contact_sync_enabled'] = option;
                    tangon = oscard.bind(golfie)(report, tangon);
                    return zuuluu;
 485:
                    return michal;
 488:
                    return entity;
                }
            };
            return entity;
        };
        michal = tangon.bind(zuuluu)(michal);
        var _closure2_slot0 = michal;
        entity = function() {
            entity = undefined;
            tangon = _closure2_slot0;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        return entity;
    };
    golfie = tangon.bind(entity)();
    tangon = function() {
        tangon = _closure1_slot3;
        zuuluu = undefined;
        michal = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    verify = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00004_ip = 187; continue _fun00003 }
 13:
                    report = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 7;
                    michal = zuuluu[michal];
                    zuuluu = undefined;
                    option = report.bind(zuuluu)(michal);
                    golfie = option.update;
                    michal = _closure1_slot7;
                    oscard = michal.CONTACTS;
                    report = {};
                    report['name'] = verify;
                    michal = '@me';
                    michal = golfie.bind(option)(oscard, michal, report);
                    SaveGenerator(address=77);
 75:
                    return michal;
 77:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00004_ip = 184; continue _fun00003 }
 83:
                    oscard = _closure1_slot1;
                    golfie = _closure1_slot2;
                    report = 5;
                    report = golfie[report];
                    golfie = oscard.bind(zuuluu)(report);
                    oscard = golfie.track;
                    tangon = _closure1_slot5;
                    report = tangon.NAME_SUBMITTED;
                    tangon = {};
                    option = null;
                    yankee = option != verify;
                    offset = 1;
                    if(!yankee) { _fun00004_ip = 151; continue _fun00003 }
 132:
                    romeon = verify.split;
                    yankee = ' ';
                    yankee = romeon.bind(verify)(yankee);
                    offset = yankee.length;
 151:
                    tangon['num_words'] = offset;
                    offset = option != verify;
                    option = 0;
                    if(!offset) { _fun00004_ip = 170; continue _fun00003 }
 165:
                    option = verify.length;
 170:
                    tangon['num_chars'] = option;
                    tangon = oscard.bind(golfie)(report, tangon);
                    return zuuluu;
 184:
                    return michal;
 187:
                    return entity;
                }
            };
            return entity;
        };
        michal = tangon.bind(zuuluu)(michal);
        var _closure2_slot0 = michal;
        entity = function() {
            entity = undefined;
            tangon = _closure2_slot0;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        return entity;
    };
    option = tangon.bind(entity)();
    michal = function() {
        tangon = _closure1_slot3;
        zuuluu = undefined;
        michal = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    StartGenerator();
                    michal = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00006_ip = 648; continue _fun00005 }
 13:
                    oscard = _closure1_slot4;
                    report = oscard.getLocalAccount;
                    zuuluu = _closure1_slot7;
                    zuuluu = zuuluu.CONTACTS;
                    report = report.bind(oscard)(zuuluu);
                    verify = null;
                    oscard = verify == report;
                    zuuluu = undefined;
                    option = undefined;
                    if(oscard) { _fun00006_ip = 59; continue _fun00005 }
 54:
                    option = report.id;
 59:
                    offset = michal.enabled;
                    yankee = michal.name;
                    if(!(verify != option)) { _fun00006_ip = 307; continue _fun00005 }
 76:
                    if(!(zuuluu === yankee)) { _fun00006_ip = 139; continue _fun00005 }
 80:
                    report = _closure1_slot1;
                    oscard = _closure1_slot2;
                    michal = 7;
                    michal = oscard[michal];
                    oscard = report.bind(zuuluu)(michal);
                    report = oscard.setFriendSync;
                    michal = _closure1_slot7;
                    michal = michal.CONTACTS;
                    michal = report.bind(oscard)(michal, option, offset);
                    SaveGenerator(address=127);
 125:
                    return michal;
 127:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(!report) { _fun00006_ip = 485; continue _fun00005 }
 136:
                    return michal;
 139:
                    report = _closure1_slot1;
                    oscard = _closure1_slot2;
                    michal = 7;
                    michal = oscard[michal];
                    golfie = report.bind(zuuluu)(michal);
                    oscard = golfie.update;
                    michal = _closure1_slot7;
                    report = michal.CONTACTS;
                    michal = {};
                    michal['friend_sync'] = offset;
                    michal['name'] = yankee;
                    michal = oscard.bind(golfie)(report, option, michal);
                    SaveGenerator(address=197);
 195:
                    return michal;
 197:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00006_ip = 304; continue _fun00005 }
 203:
                    oscard = _closure1_slot1;
                    golfie = _closure1_slot2;
                    report = 5;
                    report = golfie[report];
                    option = oscard.bind(zuuluu)(report);
                    golfie = option.track;
                    report = _closure1_slot5;
                    oscard = report.NAME_SUBMITTED;
                    report = {};
                    foxtra = verify != yankee;
                    romeon = 1;
                    if(!foxtra) { _fun00006_ip = 269; continue _fun00005 }
 250:
                    backup = yankee.split;
                    foxtra = ' ';
                    foxtra = backup.bind(yankee)(foxtra);
                    romeon = foxtra.length;
 269:
                    report['num_words'] = romeon;
                    foxtra = verify != yankee;
                    romeon = 0;
                    if(!foxtra) { _fun00006_ip = 288; continue _fun00005 }
 283:
                    romeon = yankee.length;
 288:
                    report['num_chars'] = romeon;
                    report = golfie.bind(option)(oscard, report);
                    _fun00006_ip = 485; continue _fun00005;
 304:
                    return michal;
 307:
                    report = _closure1_slot1;
                    oscard = _closure1_slot2;
                    michal = 7;
                    michal = oscard[michal];
                    romeon = report.bind(zuuluu)(michal);
                    option = romeon.connect;
                    michal = _closure1_slot7;
                    echoed = michal.CONTACTS;
                    oscard = {};
                    oscard['friend_sync'] = offset;
                    result = '@me';
                    sizing = argBar;
                    update = romeon;
                    output = yankee;
                    kiloes = oscard;
                    michal = update[option](echoed, result, output, sizing, kiloes, backup);
                    SaveGenerator(address=376);
 374:
                    return michal;
 376:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00006_ip = 645; continue _fun00005 }
 385:
                    if(!(zuuluu !== yankee)) { _fun00006_ip = 485; continue _fun00005 }
 389:
                    oscard = _closure1_slot1;
                    golfie = _closure1_slot2;
                    report = 5;
                    report = golfie[report];
                    option = oscard.bind(zuuluu)(report);
                    golfie = option.track;
                    report = _closure1_slot5;
                    oscard = report.NAME_SUBMITTED;
                    report = {};
                    foxtra = verify != yankee;
                    romeon = 1;
                    if(!foxtra) { _fun00006_ip = 455; continue _fun00005 }
 436:
                    backup = yankee.split;
                    foxtra = ' ';
                    foxtra = backup.bind(yankee)(foxtra);
                    romeon = foxtra.length;
 455:
                    report['num_words'] = romeon;
                    romeon = verify != yankee;
                    verify = 0;
                    if(!romeon) { _fun00006_ip = 474; continue _fun00005 }
 469:
                    verify = yankee.length;
 474:
                    report['num_chars'] = verify;
                    report = golfie.bind(option)(oscard, report);
 485:
                    option = _closure1_slot0;
                    golfie = _closure1_slot2;
                    report = 3;
                    report = golfie[report];
                    report = option.bind(zuuluu)(report);
                    oscard = report.FriendDiscoverySettings;
                    report = oscard.getSetting;
                    yankee = report.bind(oscard)();
                    oscard = 4;
                    report = golfie[oscard];
                    foxtra = option.bind(zuuluu)(report);
                    romeon = foxtra.hasFlag;
                    report = _closure1_slot6;
                    verify = report.FIND_BY_PHONE;
                    verify = romeon.bind(foxtra)(yankee, verify);
                    oscard = golfie[oscard];
                    option = option.bind(zuuluu)(oscard);
                    oscard = option.hasFlag;
                    report = report.FIND_BY_EMAIL;
                    option = oscard.bind(option)(yankee, report);
                    oscard = _closure1_slot1;
                    report = 5;
                    report = golfie[report];
                    golfie = oscard.bind(zuuluu)(report);
                    oscard = golfie.track;
                    tangon = _closure1_slot5;
                    report = tangon.CONTACT_SYNC_TOGGLED;
                    tangon = {};
                    tangon['is_enabled'] = offset;
                    tangon['am_discoverable_phone'] = verify;
                    tangon['am_discoverable_email'] = option;
                    tangon = oscard.bind(golfie)(report, tangon);
                    return zuuluu;
 645:
                    return michal;
 648:
                    return entity;
                }
            };
            return entity;
        };
        michal = tangon.bind(zuuluu)(michal);
        var _closure2_slot0 = michal;
        entity = function() {
            entity = undefined;
            tangon = _closure2_slot0;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        return entity;
    };
    tangon = michal.bind(entity)();
    michal = {};
    michal['updateName'] = option;
    michal['updateDiscoverability'] = golfie;
    michal['updateContactSyncEnabled'] = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/contact_sync/native/ContactSyncActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();