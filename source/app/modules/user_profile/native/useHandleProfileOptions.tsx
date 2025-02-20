// app/modules/user_profile/native/useHandleProfileOptions.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar) { // Original name: useProfileOptions
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            romeon = argFoo;
            yankee = argBar;
            var _closure2_slot0 = romeon;
            var _closure2_slot1 = yankee;
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            zuuluu = 25;
            oscard = report[zuuluu];
            kiloes = undefined;
            offset = tangon.bind(kiloes)(oscard);
            verify = offset.useStateFromStores;
            oscard = _closure1_slot5;
            option = new Array(1);
            option[0] = oscard;
            oscard = romeon.id;
            golfie = new Array(1);
            golfie[0] = oscard;
            oscard = function() {
                michal = _closure1_slot5;
                entity = michal.getId;
                michal = entity.bind(michal)();
                entity = _closure2_slot0;
                entity = entity.id;
                entity = michal === entity;
                return entity;
            };
            verify = verify.bind(offset)(option, oscard, golfie);
            var _closure2_slot2 = verify;
            zuuluu = report[zuuluu];
            golfie = tangon.bind(kiloes)(zuuluu);
            oscard = golfie.useStateFromStoresObject;
            zuuluu = _closure1_slot6;
            report = new Array(1);
            report[0] = zuuluu;
            tangon = new Array(1);
            tangon[0] = romeon;
            zuuluu = function() {
                entity = {};
                oscard = _closure1_slot6;
                report = oscard.getRelationshipType;
                michal = _closure2_slot0;
                tangon = michal.id;
                tangon = report.bind(oscard)(tangon);
                entity['relationshipType'] = tangon;
                tangon = _closure1_slot6;
                zuuluu = tangon.isIgnored;
                michal = michal.id;
                michal = zuuluu.bind(tangon)(michal);
                entity['isIgnored'] = michal;
                return entity;
            };
            zuuluu = oscard.bind(golfie)(report, zuuluu, tangon);
            offset = zuuluu.relationshipType;
            var _closure2_slot3 = offset;
            report = zuuluu.isIgnored;
            var _closure2_slot4 = report;
            tangon = null;
            zuuluu = tangon == yankee;
            golfie = undefined;
            if(zuuluu) { _fun00002_ip = 175; continue _fun00001 }
 165:
            zuuluu = yankee.getGuildId;
            golfie = zuuluu.bind(yankee)();
 175:
            var _closure2_slot5 = golfie;
            oscard = _closure1_slot1;
            foxtra = _closure1_slot2;
            zuuluu = 26;
            zuuluu = foxtra[zuuluu];
            zuuluu = oscard.bind(kiloes)(zuuluu);
            zuuluu = zuuluu.bind(kiloes)();
            zuuluu = zuuluu.analyticsLocations;
            var _closure2_slot6 = zuuluu;
            option = _closure1_slot0;
            oscard = 27;
            oscard = foxtra[oscard];
            option = option.bind(kiloes)(oscard);
            oscard = option.useUserProfileAnalyticsContext;
            oscard = oscard.bind(option)();
            backup = oscard.context;
            var _closure2_slot7 = backup;
            oscard = oscard.trackUserProfileAction;
            var _closure2_slot8 = oscard;
            foxtra = _closure1_slot3;
            option = foxtra.useCallback;
            tangon = tangon == yankee;
            kiloes = undefined;
            if(tangon) { _fun00002_ip = 281; continue _fun00001 }
 276:
            kiloes = yankee.id;
 281:
            tangon = new Array(4);
            tangon[0] = kiloes;
            kiloes = romeon.id;
            tangon[1] = kiloes;
            tangon[2] = backup;
            tangon[3] = zuuluu;
            zuuluu = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 28;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = {};
                    golfie = _closure2_slot7;
                    option = michal;
                    report = copyDataProperties(option, golfie);
                    report = _closure2_slot0;
                    oscard = report.id;
                    report = 'userId';
                    michal[report] = oscard;
                    oscard = _closure2_slot1;
                    report = null;
                    report = report == oscard;
                    oscard = undefined;
                    if(report) { _fun00004_ip = 83; continue _fun00003 }
 74:
                    report = _closure2_slot1;
                    oscard = report.id;
 83:
                    report = 'channelId';
                    michal[report] = oscard;
                    report = _closure2_slot6;
                    tangon = 'sourceAnalyticsLocations';
                    michal[tangon] = report;
                    report = true;
                    tangon = 'ignoreBlockedSpeedBump';
                    michal[tangon] = report;
                    michal = zuuluu.bind(entity)(michal);
                    return entity;
                }
            };
            option = option.bind(foxtra)(zuuluu, tangon);
            var _closure2_slot9 = option;
            tangon = _closure1_slot3;
            zuuluu = tangon.useMemo;
            michal = new Array(8);
            michal[0] = romeon;
            michal[1] = yankee;
            michal[2] = offset;
            michal[3] = verify;
            michal[4] = option;
            michal[5] = golfie;
            michal[6] = oscard;
            michal[7] = report;
            entity = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zuuluu = {};
                    michal = _closure2_slot0;
                    zuuluu['user'] = michal;
                    michal = _closure2_slot3;
                    zuuluu['relationshipType'] = michal;
                    michal = _closure2_slot2;
                    zuuluu['isCurrentUser'] = michal;
                    michal = _closure2_slot9;
                    zuuluu['showUserProfile'] = michal;
                    tangon = _closure2_slot1;
                    michal = null;
                    report = michal == tangon;
                    michal = undefined;
                    tangon = undefined;
                    if(report) { _fun00006_ip = 66; continue _fun00005 }
 57:
                    report = _closure2_slot1;
                    tangon = report.id;
 66:
                    zuuluu['channelId'] = tangon;
                    tangon = _closure2_slot5;
                    zuuluu['guildId'] = tangon;
                    tangon = _closure2_slot8;
                    zuuluu['trackUserProfileAction'] = tangon;
                    entity = _closure2_slot4;
                    zuuluu['isIgnored'] = entity;
                    entity = function(argFoo) { // Original name: getProfileOptions
                        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                            entity = argFoo;
                            michal = entity.user;
                            var _closure4_slot0 = michal;
                            zuuluu = entity.channelId;
                            var _closure4_slot1 = zuuluu;
                            zuuluu = entity.guildId;
                            var _closure4_slot2 = zuuluu;
                            zuuluu = entity.relationshipType;
                            offset = entity.isCurrentUser;
                            report = entity.trackUserProfileAction;
                            var _closure4_slot3 = report;
                            report = entity.showUserProfile;
                            var _closure4_slot4 = report;
                            sizing = entity.isIgnored;
                            entity = michal.id;
                            var _closure4_slot5 = entity;
                            entity = michal.isNonUserBot;
                            yankee = entity.bind(michal)();
                            golfie = _closure1_slot6;
                            oscard = golfie.getNickname;
                            entity = michal.id;
                            oscard = oscard.bind(golfie)(entity);
                            entity = null;
                            oscard = entity != oscard;
                            entity = _closure1_slot9;
                            entity = entity.BLOCKED;
                            option = zuuluu === entity;
                            var _closure4_slot6 = option;
                            golfie = _closure1_slot0;
                            verify = _closure1_slot2;
                            entity = 8;
                            entity = verify[entity];
                            verify = undefined;
                            romeon = golfie.bind(verify)(entity);
                            golfie = romeon.isIarUserReportingEnabled;
                            entity = 'User Profile Options - Mobile';
                            golfie = golfie.bind(romeon)(entity);
                            entity = new Array(0);
                            if(yankee) { _fun00008_ip = 1245; continue _fun00007 }
 185:
                            if(offset) { _fun00008_ip = 1055; continue _fun00007 }
 191:
                            romeon = entity.push;
                            offset = {};
                            output = _closure1_slot0;
                            foxtra = _closure1_slot2;
                            yankee = 9;
                            backup = foxtra[yankee];
                            backup = output.bind(verify)(backup);
                            kiloes = backup.intl;
                            backup = kiloes.string;
                            foxtra = foxtra[yankee];
                            foxtra = output.bind(verify)(foxtra);
                            foxtra = foxtra.t;
                            if(sizing) { _fun00008_ip = 276; continue _fun00007 }
 245:
                            sizing = foxtra.ytCpKi;
                            sizing = backup.bind(kiloes)(sizing);
                            offset['label'] = sizing;
                            sizing = function() { // Original name: onPress
                                tangon = _closure1_slot1;
                                verify = _closure1_slot2;
                                entity = 11;
                                zuuluu = verify[entity];
                                entity = undefined;
                                oscard = tangon.bind(entity)(zuuluu);
                                report = oscard.openLazy;
                                option = _closure1_slot0;
                                zuuluu = 13;
                                zuuluu = verify[zuuluu];
                                golfie = option.bind(entity)(zuuluu);
                                zuuluu = 12;
                                tangon = verify[zuuluu];
                                zuuluu = verify.paths;
                                tangon = golfie.bind(entity)(tangon, zuuluu);
                                zuuluu = _closure1_slot10;
                                michal = {};
                                golfie = _closure4_slot5;
                                michal['userId'] = golfie;
                                golfie = function() { // Original name: onSuccess
                                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                                        zuuluu = _closure4_slot4;
                                        michal = null;
                                        if(!(michal != zuuluu)) { _fun00010_ip = 23; continue _fun00009 }
 13:
                                        michal = _closure4_slot4;
                                        entity = undefined;
                                        entity = michal.bind(entity)();
 23:
                                        entity = undefined;
                                        return entity;
                                    }
                                };
                                michal['onSuccess'] = golfie;
                                golfie = 14;
                                golfie = verify[golfie];
                                golfie = option.bind(entity)(golfie);
                                golfie = golfie.ImpressionNames;
                                golfie = golfie.IGNORE_USER_CONFIRMATION;
                                michal['impressionName'] = golfie;
                                michal = report.bind(oscard)(tangon, zuuluu, michal);
                                return entity;
                            };
                            offset['onPress'] = sizing;
                            sizing = romeon.bind(entity)(offset);
                            _fun00008_ip = 305; continue _fun00007;
 276:
                            foxtra = foxtra.8wXU9P;
                            foxtra = backup.bind(kiloes)(foxtra);
                            offset['label'] = foxtra;
                            foxtra = function() { // Original name: onPress
                                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                                    tangon = _closure1_slot1;
                                    zuuluu = _closure1_slot2;
                                    entity = 10;
                                    zuuluu = zuuluu[entity];
                                    entity = undefined;
                                    oscard = tangon.bind(entity)(zuuluu);
                                    report = oscard.unignoreUser;
                                    tangon = _closure4_slot5;
                                    michal = _closure1_slot8;
                                    zuuluu = michal.USER_PROFILE;
                                    option = _closure4_slot1;
                                    michal = null;
                                    option = michal != option;
                                    michal = undefined;
                                    if(!option) { _fun00012_ip = 67; continue _fun00011 }
 63:
                                    michal = _closure4_slot1;
 67:
                                    michal = report.bind(oscard)(tangon, zuuluu, michal);
                                    return entity;
                                }
                            };
                            offset['onPress'] = foxtra;
                            offset = romeon.bind(entity)(offset);
 305:
                            if(option) { _fun00008_ip = 599; continue _fun00007 }
 311:
                            foxtra = entity.push;
                            offset = {};
                            sizing = _closure1_slot0;
                            romeon = _closure1_slot2;
                            backup = romeon[yankee];
                            backup = sizing.bind(verify)(backup);
                            kiloes = backup.intl;
                            backup = kiloes.string;
                            romeon = romeon[yankee];
                            romeon = sizing.bind(verify)(romeon);
                            romeon = romeon.t;
                            romeon = romeon.l4EmaW;
                            romeon = backup.bind(kiloes)(romeon);
                            offset['label'] = romeon;
                            romeon = true;
                            offset['isDestructive'] = romeon;
                            backup = function() { // Original name: onPress
                                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                                    tangon = _closure4_slot3;
                                    zuuluu = {};
                                    entity = 'BLOCK';
                                    zuuluu['action'] = entity;
                                    entity = undefined;
                                    zuuluu = tangon.bind(entity)(zuuluu);
                                    tangon = _closure1_slot1;
                                    report = _closure1_slot2;
                                    zuuluu = 10;
                                    zuuluu = report[zuuluu];
                                    report = tangon.bind(entity)(zuuluu);
                                    tangon = report.addRelationship;
                                    zuuluu = {};
                                    oscard = _closure1_slot9;
                                    oscard = oscard.BLOCKED;
                                    zuuluu['type'] = oscard;
                                    oscard = {};
                                    golfie = _closure1_slot8;
                                    golfie = golfie.USER_PROFILE;
                                    oscard['location'] = golfie;
                                    zuuluu['context'] = oscard;
                                    oscard = _closure4_slot5;
                                    zuuluu['userId'] = oscard;
                                    zuuluu = tangon.bind(report)(zuuluu);
                                    tangon = _closure4_slot4;
                                    zuuluu = null;
                                    if(!(zuuluu != tangon)) { _fun00014_ip = 120; continue _fun00013 }
 112:
                                    michal = _closure4_slot4;
                                    michal = michal.bind(entity)();
 120:
                                    return entity;
                                }
                            };
                            offset['onPress'] = backup;
                            offset = foxtra.bind(entity)(offset);
                            if(golfie) { _fun00008_ip = 517; continue _fun00007 }
 398:
                            offset = _closure1_slot0;
                            foxtra = _closure1_slot2;
                            golfie = 16;
                            golfie = foxtra[golfie];
                            offset = offset.bind(verify)(golfie);
                            golfie = offset.isAndroid;
                            golfie = golfie.bind(offset)();
                            if(!golfie) { _fun00008_ip = 599; continue _fun00007 }
 433:
                            offset = entity.push;
                            golfie = {};
                            sizing = _closure1_slot0;
                            foxtra = _closure1_slot2;
                            backup = foxtra[yankee];
                            backup = sizing.bind(verify)(backup);
                            kiloes = backup.intl;
                            backup = kiloes.string;
                            foxtra = foxtra[yankee];
                            foxtra = sizing.bind(verify)(foxtra);
                            foxtra = foxtra.t;
                            foxtra = foxtra.TbHyMD;
                            foxtra = backup.bind(kiloes)(foxtra);
                            golfie['label'] = foxtra;
                            golfie['isDestructive'] = romeon;
                            foxtra = function() { // Original name: onPress
                                zuuluu = _closure4_slot3;
                                michal = {};
                                entity = 'REPORT';
                                michal['action'] = entity;
                                entity = undefined;
                                michal = zuuluu.bind(entity)(michal);
                                tangon = _closure1_slot1;
                                report = _closure1_slot2;
                                zuuluu = 17;
                                zuuluu = report[zuuluu];
                                option = tangon.bind(entity)(zuuluu);
                                golfie = option.show;
                                zuuluu = {};
                                romeon = _closure1_slot0;
                                verify = 9;
                                offset = report[verify];
                                offset = romeon.bind(entity)(offset);
                                foxtra = offset.intl;
                                yankee = foxtra.string;
                                offset = report[verify];
                                offset = romeon.bind(entity)(offset);
                                offset = offset.t;
                                offset = offset.IwHU3d;
                                offset = yankee.bind(foxtra)(offset);
                                zuuluu['title'] = offset;
                                offset = report[verify];
                                offset = romeon.bind(entity)(offset);
                                yankee = offset.intl;
                                offset = yankee.string;
                                verify = report[verify];
                                verify = romeon.bind(entity)(verify);
                                verify = verify.t;
                                verify = verify.qxyRam;
                                verify = offset.bind(yankee)(verify);
                                zuuluu['body'] = verify;
                                zuuluu = golfie.bind(option)(zuuluu);
                                zuuluu = 18;
                                zuuluu = report[zuuluu];
                                report = tangon.bind(entity)(zuuluu);
                                tangon = report.track;
                                michal = _closure1_slot7;
                                zuuluu = michal.TNS_USER_REPORT_SUBMITTED;
                                michal = {};
                                oscard = _closure4_slot5;
                                michal['reported_user_id'] = oscard;
                                michal = tangon.bind(report)(zuuluu, michal);
                                return entity;
                            };
                            golfie['onPress'] = foxtra;
                            golfie = offset.bind(entity)(golfie);
                            _fun00008_ip = 599; continue _fun00007;
 517:
                            offset = entity.push;
                            golfie = {};
                            sizing = _closure1_slot0;
                            foxtra = _closure1_slot2;
                            backup = foxtra[yankee];
                            backup = sizing.bind(verify)(backup);
                            kiloes = backup.intl;
                            backup = kiloes.string;
                            foxtra = foxtra[yankee];
                            foxtra = sizing.bind(verify)(foxtra);
                            foxtra = foxtra.t;
                            foxtra = foxtra.wqHXNj;
                            foxtra = backup.bind(kiloes)(foxtra);
                            golfie['label'] = foxtra;
                            golfie['isDestructive'] = romeon;
                            romeon = function() { // Original name: onPress
                                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                                    tangon = _closure4_slot3;
                                    michal = {};
                                    entity = 'REPORT';
                                    michal['action'] = entity;
                                    entity = undefined;
                                    michal = tangon.bind(entity)(michal);
                                    tangon = _closure4_slot2;
                                    michal = '@me';
                                    golfie = undefined;
                                    if(!(michal !== tangon)) { _fun00016_ip = 56; continue _fun00015 }
 40:
                                    tangon = _closure4_slot2;
                                    michal = null;
                                    golfie = undefined;
                                    if(!(michal !== tangon)) { _fun00016_ip = 56; continue _fun00015 }
 52:
                                    golfie = _closure4_slot2;
 56:
                                    oscard = _closure1_slot0;
                                    tangon = _closure1_slot2;
                                    report = 15;
                                    report = tangon[report];
                                    oscard = oscard.bind(entity)(report);
                                    report = oscard.showReportModalForUser;
                                    zuuluu = _closure4_slot0;
                                    zuuluu = report.bind(oscard)(zuuluu, golfie);
                                    zuuluu = _closure1_slot1;
                                    michal = 11;
                                    michal = tangon[michal];
                                    zuuluu = zuuluu.bind(entity)(michal);
                                    michal = zuuluu.hideActionSheet;
                                    michal = michal.bind(zuuluu)();
                                    return entity;
                                }
                            };
                            golfie['onPress'] = romeon;
                            golfie = offset.bind(entity)(golfie);
 599:
                            golfie = _closure1_slot9;
                            golfie = golfie.PENDING_OUTGOING;
                            if(!(golfie !== zuuluu)) { _fun00008_ip = 978; continue _fun00007 }
 616:
                            golfie = _closure1_slot9;
                            golfie = golfie.BLOCKED;
                            if(!(golfie !== zuuluu)) { _fun00008_ip = 765; continue _fun00007 }
 633:
                            golfie = _closure1_slot9;
                            golfie = golfie.FRIEND;
                            if(!(golfie !== zuuluu)) { _fun00008_ip = 765; continue _fun00007 }
 647:
                            golfie = _closure1_slot9;
                            golfie = golfie.NONE;
                            if(!(golfie !== zuuluu)) { _fun00008_ip = 671; continue _fun00007 }
 661:
                            golfie = _closure1_slot9;
                            golfie = golfie.PENDING_INCOMING;
 671:
                            michal = michal.bot;
                            if(michal) { _fun00008_ip = 1055; continue _fun00007 }
 683:
                            golfie = entity.push;
                            michal = {};
                            backup = _closure1_slot0;
                            offset = _closure1_slot2;
                            romeon = offset[yankee];
                            romeon = backup.bind(verify)(romeon);
                            foxtra = romeon.intl;
                            romeon = foxtra.string;
                            offset = offset[yankee];
                            offset = backup.bind(verify)(offset);
                            offset = offset.t;
                            offset = offset.w5uwoK;
                            offset = romeon.bind(foxtra)(offset);
                            michal['label'] = offset;
                            offset = function() { // Original name: onPress
                                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                                    tangon = _closure4_slot3;
                                    zuuluu = {};
                                    entity = 'SEND_FRIEND_REQUEST';
                                    zuuluu['action'] = entity;
                                    entity = undefined;
                                    zuuluu = tangon.bind(entity)(zuuluu);
                                    tangon = _closure1_slot1;
                                    report = _closure1_slot2;
                                    zuuluu = 10;
                                    zuuluu = report[zuuluu];
                                    report = tangon.bind(entity)(zuuluu);
                                    tangon = report.addRelationship;
                                    zuuluu = {};
                                    oscard = _closure4_slot5;
                                    zuuluu['userId'] = oscard;
                                    oscard = {};
                                    golfie = _closure1_slot8;
                                    golfie = golfie.USER_PROFILE;
                                    oscard['location'] = golfie;
                                    zuuluu['context'] = oscard;
                                    zuuluu = tangon.bind(report)(zuuluu);
                                    tangon = _closure4_slot4;
                                    zuuluu = null;
                                    if(!(zuuluu != tangon)) { _fun00018_ip = 108; continue _fun00017 }
 100:
                                    michal = _closure4_slot4;
                                    michal = michal.bind(entity)();
 108:
                                    return entity;
                                }
                            };
                            michal['onPress'] = offset;
                            michal = golfie.bind(entity)(michal);
                            _fun00008_ip = 1055; continue _fun00007;
 765:
                            golfie = entity.push;
                            michal = {};
                            romeon = _closure1_slot0;
                            offset = _closure1_slot2;
                            foxtra = offset[yankee];
                            foxtra = romeon.bind(verify)(foxtra);
                            backup = foxtra.intl;
                            foxtra = backup.string;
                            offset = offset[yankee];
                            offset = romeon.bind(verify)(offset);
                            romeon = offset.t;
                            if(option) { _fun00008_ip = 829; continue _fun00007 }
 816:
                            offset = romeon.cvSt1N;
                            offset = foxtra.bind(backup)(offset);
                            _fun00008_ip = 840; continue _fun00007;
 829:
                            romeon = romeon.XyHpKC;
                            offset = foxtra.bind(backup)(romeon);
 840:
                            michal['label'] = offset;
                            option = !option;
                            michal['isDestructive'] = option;
                            option = function() { // Original name: onPress
                                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                                    tangon = _closure4_slot6;
                                    zuuluu = _closure4_slot3;
                                    michal = {};
                                    if(tangon) { _fun00020_ip = 90; continue _fun00019 }
 16:
                                    tangon = 'REMOVE_FRIEND';
                                    michal['action'] = tangon;
                                    oscard = undefined;
                                    tangon = zuuluu.bind(oscard)(michal);
                                    report = _closure1_slot1;
                                    golfie = _closure1_slot2;
                                    tangon = 10;
                                    tangon = golfie[tangon];
                                    golfie = report.bind(oscard)(tangon);
                                    oscard = golfie.removeFriend;
                                    report = _closure4_slot5;
                                    tangon = {};
                                    option = _closure1_slot8;
                                    option = option.USER_PROFILE;
                                    tangon['location'] = option;
                                    tangon = oscard.bind(golfie)(report, tangon);
                                    _fun00020_ip = 160; continue _fun00019;
 90:
                                    tangon = 'UNBLOCK';
                                    michal['action'] = tangon;
                                    tangon = undefined;
                                    michal = zuuluu.bind(tangon)(michal);
                                    zuuluu = _closure1_slot1;
                                    report = _closure1_slot2;
                                    michal = 10;
                                    michal = report[michal];
                                    report = zuuluu.bind(tangon)(michal);
                                    tangon = report.unblockUser;
                                    zuuluu = _closure4_slot5;
                                    michal = {};
                                    oscard = _closure1_slot8;
                                    oscard = oscard.USER_PROFILE;
                                    michal['location'] = oscard;
                                    michal = tangon.bind(report)(zuuluu, michal);
 160:
                                    zuuluu = _closure4_slot4;
                                    michal = null;
                                    if(!(michal != zuuluu)) { _fun00020_ip = 180; continue _fun00019 }
 170:
                                    michal = _closure4_slot4;
                                    entity = undefined;
                                    entity = michal.bind(entity)();
 180:
                                    entity = undefined;
                                    return entity;
                                }
                            };
                            michal['onPress'] = option;
                            michal = golfie.bind(entity)(michal);
                            michal = _closure1_slot9;
                            michal = michal.FRIEND;
                            if(!(zuuluu === michal)) { _fun00008_ip = 1055; continue _fun00007 }
 883:
                            zuuluu = entity.push;
                            michal = {};
                            romeon = _closure1_slot0;
                            golfie = _closure1_slot2;
                            option = golfie[yankee];
                            option = romeon.bind(verify)(option);
                            offset = option.intl;
                            option = offset.string;
                            golfie = golfie[yankee];
                            golfie = romeon.bind(verify)(golfie);
                            golfie = golfie.t;
                            if(oscard) { _fun00008_ip = 947; continue _fun00007 }
 934:
                            oscard = golfie.BGYkaG;
                            oscard = option.bind(offset)(oscard);
                            _fun00008_ip = 958; continue _fun00007;
 947:
                            golfie = golfie.8pOYUF;
                            oscard = option.bind(offset)(golfie);
 958:
                            michal['label'] = oscard;
                            oscard = function() { // Original name: onPress
                                zuuluu = _closure4_slot3;
                                michal = {};
                                entity = 'PRESS_SET_FRIEND_NICKNAME';
                                michal['action'] = entity;
                                entity = undefined;
                                michal = zuuluu.bind(entity)(michal);
                                zuuluu = _closure1_slot1;
                                tangon = _closure1_slot2;
                                report = 19;
                                report = tangon[report];
                                golfie = zuuluu.bind(entity)(report);
                                oscard = golfie.pushLazy;
                                report = _closure1_slot0;
                                michal = 13;
                                michal = tangon[michal];
                                verify = report.bind(entity)(michal);
                                michal = 20;
                                report = tangon[michal];
                                michal = tangon.paths;
                                report = verify.bind(entity)(report, michal);
                                michal = {};
                                verify = _closure4_slot5;
                                michal['userId'] = verify;
                                option = _closure4_slot4;
                                michal['showUserProfile'] = option;
                                michal = oscard.bind(golfie)(report, michal);
                                michal = 11;
                                michal = tangon[michal];
                                zuuluu = zuuluu.bind(entity)(michal);
                                michal = zuuluu.hideActionSheet;
                                michal = michal.bind(zuuluu)();
                                return entity;
                            };
                            michal['onPress'] = oscard;
                            michal = zuuluu.bind(entity)(michal);
                            _fun00008_ip = 1055; continue _fun00007;
 978:
                            zuuluu = entity.push;
                            michal = {};
                            offset = _closure1_slot0;
                            oscard = _closure1_slot2;
                            golfie = oscard[yankee];
                            golfie = offset.bind(verify)(golfie);
                            option = golfie.intl;
                            golfie = option.string;
                            oscard = oscard[yankee];
                            oscard = offset.bind(verify)(oscard);
                            oscard = oscard.t;
                            oscard = oscard.bTfA//;
                            oscard = golfie.bind(option)(oscard);
                            michal['label'] = oscard;
                            oscard = function() { // Original name: onPress
                                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                                    tangon = _closure4_slot3;
                                    zuuluu = {};
                                    entity = 'CANCEL_FRIEND_REQUEST';
                                    zuuluu['action'] = entity;
                                    entity = undefined;
                                    zuuluu = tangon.bind(entity)(zuuluu);
                                    tangon = _closure1_slot1;
                                    report = _closure1_slot2;
                                    zuuluu = 10;
                                    zuuluu = report[zuuluu];
                                    oscard = tangon.bind(entity)(zuuluu);
                                    report = oscard.cancelFriendRequest;
                                    tangon = _closure4_slot5;
                                    zuuluu = {};
                                    golfie = _closure1_slot8;
                                    golfie = golfie.USER_PROFILE;
                                    zuuluu['location'] = golfie;
                                    zuuluu = report.bind(oscard)(tangon, zuuluu);
                                    tangon = _closure4_slot4;
                                    zuuluu = null;
                                    if(!(zuuluu != tangon)) { _fun00022_ip = 99; continue _fun00021 }
 91:
                                    michal = _closure4_slot4;
                                    michal = michal.bind(entity)();
 99:
                                    return entity;
                                }
                            };
                            michal['onPress'] = oscard;
                            michal = zuuluu.bind(entity)(michal);
 1055:
                            golfie = entity.push;
                            michal = {};
                            zuuluu = _closure1_slot0;
                            oscard = _closure1_slot2;
                            offset = 9;
                            option = oscard[offset];
                            option = zuuluu.bind(verify)(option);
                            romeon = option.intl;
                            yankee = romeon.string;
                            option = oscard[offset];
                            option = zuuluu.bind(verify)(option);
                            option = option.t;
                            option = option.y5MwJy;
                            option = yankee.bind(romeon)(option);
                            michal['label'] = option;
                            option = function() { // Original name: onPress
                                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                                    tangon = _closure4_slot3;
                                    zuuluu = {};
                                    entity = 'COPY_USERNAME';
                                    zuuluu['action'] = entity;
                                    entity = undefined;
                                    zuuluu = tangon.bind(entity)(zuuluu);
                                    tangon = _closure1_slot0;
                                    report = _closure1_slot2;
                                    oscard = 21;
                                    oscard = report[oscard];
                                    golfie = tangon.bind(entity)(oscard);
                                    oscard = golfie.copy;
                                    option = _closure1_slot1;
                                    zuuluu = 22;
                                    zuuluu = report[zuuluu];
                                    offset = option.bind(entity)(zuuluu);
                                    verify = offset.getUserTag;
                                    option = _closure4_slot0;
                                    zuuluu = {'decoration': 'never', 'identifiable': 'always'};
                                    zuuluu = verify.bind(offset)(option, zuuluu);
                                    zuuluu = oscard.bind(golfie)(zuuluu);
                                    zuuluu = 23;
                                    zuuluu = report[zuuluu];
                                    tangon = tangon.bind(entity)(zuuluu);
                                    zuuluu = tangon.presentUsernameCopied;
                                    zuuluu = zuuluu.bind(tangon)();
                                    tangon = _closure4_slot4;
                                    zuuluu = null;
                                    if(!(zuuluu != tangon)) { _fun00024_ip = 146; continue _fun00023 }
 138:
                                    michal = _closure4_slot4;
                                    michal = michal.bind(entity)();
 146:
                                    return entity;
                                }
                            };
                            michal['onPress'] = option;
                            michal = golfie.bind(entity)(michal);
                            michal = 24;
                            michal = oscard[michal];
                            michal = zuuluu.bind(verify)(michal);
                            zuuluu = michal.DeveloperMode;
                            michal = zuuluu.getSetting;
                            michal = michal.bind(zuuluu)();
                            if(!michal) { _fun00008_ip = 1243; continue _fun00007 }
 1166:
                            zuuluu = entity.push;
                            michal = {};
                            option = _closure1_slot0;
                            report = _closure1_slot2;
                            oscard = report[offset];
                            oscard = option.bind(verify)(oscard);
                            golfie = oscard.intl;
                            oscard = golfie.string;
                            report = report[offset];
                            report = option.bind(verify)(report);
                            report = report.t;
                            report = report./AXYnJ;
                            report = oscard.bind(golfie)(report);
                            michal['label'] = report;
                            tangon = function() { // Original name: onPress
                                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                                    tangon = _closure4_slot3;
                                    zuuluu = {};
                                    entity = 'COPY_USER_ID';
                                    zuuluu['action'] = entity;
                                    entity = undefined;
                                    zuuluu = tangon.bind(entity)(zuuluu);
                                    tangon = _closure1_slot0;
                                    report = _closure1_slot2;
                                    zuuluu = 21;
                                    zuuluu = report[zuuluu];
                                    golfie = tangon.bind(entity)(zuuluu);
                                    oscard = golfie.copy;
                                    zuuluu = _closure4_slot5;
                                    zuuluu = oscard.bind(golfie)(zuuluu);
                                    zuuluu = 23;
                                    zuuluu = report[zuuluu];
                                    tangon = tangon.bind(entity)(zuuluu);
                                    zuuluu = tangon.presentIdCopied;
                                    zuuluu = zuuluu.bind(tangon)();
                                    tangon = _closure4_slot4;
                                    zuuluu = null;
                                    if(!(zuuluu != tangon)) { _fun00026_ip = 104; continue _fun00025 }
 96:
                                    michal = _closure4_slot4;
                                    michal = michal.bind(entity)();
 104:
                                    return entity;
                                }
                            };
                            michal['onPress'] = tangon;
                            michal = zuuluu.bind(entity)(michal);
 1243:
                            return entity;
 1245:
                            return entity;
                        }
                    };
                    entity = entity.bind(michal)(zuuluu);
                    return entity;
                }
            };
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.AnalyticEvents;
    var _closure1_slot7 = golfie;
    golfie = tangon.AnalyticsPages;
    var _closure1_slot8 = golfie;
    tangon = tangon.RelationshipTypes;
    var _closure1_slot9 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.IGNORE_CONFIRMATION_ACTION_SHEET_KEY;
    var _closure1_slot10 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot11 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {};
    offset = 8;
    verify['marginRight'] = offset;
    tangon['overflowActionSheetAvatar'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot12 = tangon;
    tangon = 32;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/user_profile/native/useHandleProfileOptions.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo, argBar) { // Original name: useHandleProfileOptions
        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
            verify = argFoo;
            oscard = argBar;
            var _closure2_slot0 = verify;
            var _closure2_slot1 = oscard;
            entity = _closure1_slot12;
            report = undefined;
            option = entity.bind(report)();
            var _closure2_slot2 = option;
            zuuluu = _closure1_slot0;
            golfie = _closure1_slot2;
            entity = 25;
            entity = golfie[entity];
            offset = zuuluu.bind(report)(entity);
            golfie = offset.useStateFromStores;
            entity = _closure1_slot4;
            zuuluu = new Array(1);
            zuuluu[0] = entity;
            entity = function() {
                entity = _closure1_slot4;
                entity = entity.useReducedMotion;
                return entity;
            };
            offset = golfie.bind(offset)(zuuluu, entity);
            var _closure2_slot3 = offset;
            entity = null;
            zuuluu = entity == oscard;
            romeon = undefined;
            if(zuuluu) { _fun00028_ip = 106; continue _fun00027 }
 96:
            zuuluu = oscard.getGuildId;
            romeon = zuuluu.bind(oscard)();
 106:
            var _closure2_slot4 = romeon;
            golfie = _closure1_slot1;
            foxtra = _closure1_slot2;
            zuuluu = 26;
            zuuluu = foxtra[zuuluu];
            zuuluu = golfie.bind(report)(zuuluu);
            zuuluu = zuuluu.bind(report)();
            zuuluu = zuuluu.analyticsLocations;
            var _closure2_slot5 = zuuluu;
            yankee = _closure1_slot0;
            golfie = 27;
            golfie = foxtra[golfie];
            yankee = yankee.bind(report)(golfie);
            golfie = yankee.useUserProfileAnalyticsContext;
            golfie = golfie.bind(yankee)();
            kiloes = golfie.context;
            var _closure2_slot6 = kiloes;
            golfie = golfie.trackUserProfileAction;
            var _closure2_slot7 = golfie;
            backup = _closure1_slot3;
            foxtra = backup.useCallback;
            yankee = entity == oscard;
            sizing = undefined;
            if(yankee) { _fun00028_ip = 212; continue _fun00027 }
 207:
            sizing = oscard.id;
 212:
            yankee = new Array(4);
            yankee[0] = sizing;
            sizing = verify.id;
            yankee[1] = sizing;
            yankee[2] = kiloes;
            yankee[3] = zuuluu;
            zuuluu = function() {
                _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 28;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = {};
                    golfie = _closure2_slot6;
                    option = michal;
                    report = copyDataProperties(option, golfie);
                    report = _closure2_slot0;
                    oscard = report.id;
                    report = 'userId';
                    michal[report] = oscard;
                    oscard = _closure2_slot1;
                    report = null;
                    report = report == oscard;
                    oscard = undefined;
                    if(report) { _fun00030_ip = 83; continue _fun00029 }
 74:
                    report = _closure2_slot1;
                    oscard = report.id;
 83:
                    report = 'channelId';
                    michal[report] = oscard;
                    report = _closure2_slot5;
                    tangon = 'sourceAnalyticsLocations';
                    michal[tangon] = report;
                    michal = zuuluu.bind(entity)(michal);
                    return entity;
                }
            };
            yankee = foxtra.bind(backup)(zuuluu, yankee);
            var _closure2_slot8 = yankee;
            zuuluu = _closure1_slot13;
            zuuluu = zuuluu.bind(report)(verify, oscard);
            var _closure2_slot9 = zuuluu;
            oscard = _closure1_slot3;
            report = oscard.useCallback;
            tangon = new Array(7);
            tangon[0] = romeon;
            tangon[1] = yankee;
            tangon[2] = offset;
            tangon[3] = verify;
            tangon[4] = zuuluu;
            tangon[5] = option;
            tangon[6] = golfie;
            michal = function() {
                romeon = _closure1_slot0;
                foxtra = _closure1_slot2;
                entity = 29;
                michal = foxtra[entity];
                entity = undefined;
                oscard = romeon.bind(entity)(michal);
                tangon = oscard.getAvatarSource;
                golfie = _closure2_slot0;
                output = _closure2_slot4;
                kiloes = _closure2_slot3;
                echoed = oscard;
                result = golfie;
                sizing = undefined;
                backup = echoed[tangon](result, output, sizing, kiloes, backup);
                zuuluu = _closure2_slot7;
                michal = {};
                tangon = 'PRESS_OPTIONS';
                michal['action'] = tangon;
                michal = zuuluu.bind(entity)(michal);
                michal = 30;
                michal = foxtra[michal];
                tangon = romeon.bind(entity)(michal);
                zuuluu = tangon.showSimpleActionSheet;
                michal = {};
                oscard = 'UserProfileOverflow';
                michal['key'] = oscard;
                oscard = {};
                offset = _closure1_slot11;
                verify = _closure1_slot1;
                yankee = 31;
                option = foxtra[yankee];
                verify = verify.bind(entity)(option);
                option = {};
                option['source'] = backup;
                backup = _closure2_slot2;
                backup = backup.overflowActionSheetAvatar;
                option['style'] = backup;
                yankee = foxtra[yankee];
                yankee = romeon.bind(entity)(yankee);
                yankee = yankee.AvatarSizes;
                yankee = yankee.XSMALL;
                option['size'] = yankee;
                option = offset.bind(entity)(verify, option);
                oscard['icon'] = option;
                golfie = golfie.username;
                oscard['title'] = golfie;
                golfie = function() { // Original name: onClose
                    _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 11;
                        michal = michal[entity];
                        entity = undefined;
                        zuuluu = zuuluu.bind(entity)(michal);
                        michal = zuuluu.hideActionSheet;
                        michal = michal.bind(zuuluu)();
                        tangon = _closure2_slot8;
                        zuuluu = null;
                        if(!(zuuluu != tangon)) { _fun00032_ip = 56; continue _fun00031 }
 48:
                        michal = _closure2_slot8;
                        michal = michal.bind(entity)();
 56:
                        return entity;
                    }
                };
                oscard['onClose'] = golfie;
                michal['header'] = oscard;
                report = _closure2_slot9;
                michal['options'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            michal = report.bind(oscard)(michal, tangon);
            tangon = zuuluu.length;
            zuuluu = 0;
            entity = null;
            if(!(zuuluu !== tangon)) { _fun00028_ip = 334; continue _fun00027 }
 331:
            entity = michal;
 334:
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    michal = function(argFoo, argBar) { // Original name: useProfileActionItems
        oscard = _closure1_slot13;
        report = undefined;
        tangon = argFoo;
        zuuluu = argBar;
        report = oscard.bind(report)(tangon, zuuluu);
        var _closure2_slot0 = report;
        tangon = _closure1_slot3;
        zuuluu = tangon.useMemo;
        michal = new Array(1);
        michal[0] = report;
        entity = function() {
            zuuluu = _closure2_slot0;
            michal = zuuluu.map;
            entity = function(argFoo) {
                _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                    michal = argFoo;
                    entity = {};
                    zuuluu = michal.label;
                    entity['label'] = zuuluu;
                    zuuluu = michal.icon;
                    entity['icon'] = zuuluu;
                    zuuluu = michal.onPress;
                    entity['action'] = zuuluu;
                    zuuluu = michal.isDestructive;
                    michal = 'default';
                    if(!zuuluu) { _fun00034_ip = 51; continue _fun00033 }
 45:
                    michal = 'destructive';
 51:
                    entity['variant'] = michal;
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['useProfileActionItems'] = michal;
    return entity;
})();