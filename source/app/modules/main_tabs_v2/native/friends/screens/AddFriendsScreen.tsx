// app/modules/main_tabs_v2/native/friends/screens/AddFriendsScreen.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    yankee = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar) { // Original name: areGameFriendRequestRowsEqual
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            michal = argBar;
            tangon = zuuluu.userId;
            entity = michal.userId;
            entity = tangon === entity;
            if(!entity) { _fun00002_ip = 37; continue _fun00001 }
 23:
            zuuluu = zuuluu.applicationId;
            michal = michal.applicationId;
            entity = zuuluu === michal;
 37:
            return entity;
        }
    };
    var _closure1_slot25 = entity;
    entity = function(argFoo, argBar) { // Original name: areHydratedGameFriendRequestRowStatesEqual
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = argFoo;
            michal = argBar;
            var _closure2_slot0 = michal;
            entity = report === michal;
            if(entity) { _fun00004_ip = 57; continue _fun00003 }
 19:
            tangon = report.length;
            michal = michal.length;
            michal = tangon === michal;
            if(!michal) { _fun00004_ip = 54; continue _fun00003 }
 36:
            tangon = report.every;
            zuuluu = function(argFoo, argBar) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zuuluu = argFoo;
                    michal = _closure2_slot0;
                    entity = argBar;
                    michal = michal[entity];
                    tangon = zuuluu.user;
                    entity = michal.user;
                    entity = tangon === entity;
                    if(!entity) { _fun00006_ip = 48; continue _fun00005 }
 34:
                    zuuluu = zuuluu.applicationId;
                    michal = michal.applicationId;
                    entity = zuuluu === michal;
 48:
                    return entity;
                }
            };
            michal = tangon.bind(report)(zuuluu);
 54:
            entity = michal;
 57:
            return entity;
        }
    };
    var _closure1_slot26 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    romeon = 0;
    tangon = oscard[romeon];
    entity = undefined;
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    offset = 1;
    tangon = oscard[offset];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    verify = 2;
    golfie = oscard[verify];
    tangon = argCor;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot5 = tangon;
    option = 3;
    tangon = oscard[option];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.ActivityIndicator;
    var _closure1_slot6 = golfie;
    golfie = tangon.View;
    var _closure1_slot7 = golfie;
    tangon = tangon.ScrollView;
    var _closure1_slot8 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot10 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot11 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Sections;
    var _closure1_slot12 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.AnalyticEvents;
    var _closure1_slot13 = golfie;
    golfie = tangon.AnalyticsSections;
    var _closure1_slot14 = golfie;
    golfie = tangon.InstantInviteSources;
    var _closure1_slot15 = golfie;
    tangon = tangon.RelationshipTypes;
    var _closure1_slot16 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ContactPermissions;
    var _closure1_slot17 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.jsx;
    var _closure1_slot18 = golfie;
    tangon = tangon.jsxs;
    var _closure1_slot19 = tangon;
    tangon = {};
    tangon['FIND_FRIENDS'] = romeon;
    golfie = 'FIND_FRIENDS';
    tangon[romeon] = golfie;
    tangon['INCOMING_FRIEND_REQUESTS'] = offset;
    golfie = 'INCOMING_FRIEND_REQUESTS';
    tangon[offset] = golfie;
    tangon['INCOMING_GAME_FRIEND_REQUESTS'] = verify;
    golfie = 'INCOMING_GAME_FRIEND_REQUESTS';
    tangon[verify] = golfie;
    tangon['CONTACT_SUGGESTIONS'] = option;
    golfie = 'CONTACT_SUGGESTIONS';
    tangon[option] = golfie;
    var _closure1_slot20 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {};
    verify['flex'] = offset;
    tangon['container'] = verify;
    verify = {};
    offset = 12;
    romeon = oscard[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.colors;
    romeon = romeon.BG_BASE_SECONDARY;
    verify['backgroundColor'] = romeon;
    romeon = oscard[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.spacing;
    romeon = romeon.PX_16;
    verify['paddingVertical'] = romeon;
    tangon['inviteAppsContainerNonSticky'] = verify;
    verify = {'paddingTop': 0, 'paddingBottom': 0, 'minWidth': '100%'};
    tangon['inviteAppsContentContainer'] = verify;
    verify = {};
    romeon = oscard[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.colors;
    romeon = romeon.BG_BASE_SECONDARY;
    verify['backgroundColor'] = romeon;
    tangon['emptyContainer'] = verify;
    verify = {};
    romeon = oscard[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.spacing;
    romeon = romeon.PX_16;
    verify['marginHorizontal'] = romeon;
    romeon = oscard[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.spacing;
    romeon = romeon.PX_8;
    verify['paddingTop'] = romeon;
    tangon['emptyActionContainer'] = verify;
    verify = {'backgroundColor': null, 'justifyContent': 'center', 'flex': 1};
    offset = oscard[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.BG_BASE_SECONDARY;
    verify['backgroundColor'] = offset;
    tangon['loading'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot21 = tangon;
    tangon = function() { // Original name: handleFindFriends
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        entity = 13;
        zuuluu = zuuluu[entity];
        entity = undefined;
        report = tangon.bind(entity)(zuuluu);
        tangon = report.openContactSyncModal;
        michal = _closure1_slot14;
        zuuluu = michal.FRIENDS_ADD_FRIENDS_MODAL;
        michal = {};
        michal = tangon.bind(report)(michal, zuuluu);
        return entity;
    };
    var _closure1_slot22 = tangon;
    tangon = function() {
        tangon = _closure1_slot4;
        zuuluu = undefined;
        michal = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00008_ip = 299; continue _fun00007 }
 10:
                    zuuluu = argFoo;
                    option = undefined;
                    oscard = undefined;
 17: // try_start_0
                    tangon = _closure1_slot1;
                    golfie = _closure1_slot2;
                    michal = 14;
                    michal = golfie[michal];
                    verify = tangon.bind(option)(michal);
                    tangon = verify.createFriendInvite;
                    michal = _closure1_slot15;
                    michal = michal.ADD_FRIENDS_MODAL;
                    golfie = null;
                    michal = tangon.bind(verify)(golfie, michal);
                    SaveGenerator(address=68);
 66:
                    return michal;
 68:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00008_ip = 208; continue _fun00007 }
 77:
                    oscard = michal.code;
 82: // try_end0
                    tangon = zuuluu;
                    zuuluu = {};
                    zuuluu['channel'] = golfie;
                    romeon = oscard;
                    zuuluu['code'] = romeon;
                    golfie = _closure1_slot0;
                    backup = _closure1_slot2;
                    oscard = 16;
                    verify = backup[oscard];
                    verify = golfie.bind(option)(verify);
                    offset = verify.intl;
                    verify = offset.formatToPlainString;
                    oscard = backup[oscard];
                    oscard = golfie.bind(option)(oscard);
                    oscard = oscard.t;
                    golfie = oscard.PJf9Pz;
                    oscard = {};
                    foxtra = _closure1_slot1;
                    yankee = 17;
                    yankee = backup[yankee];
                    yankee = foxtra.bind(option)(yankee);
                    yankee = yankee.bind(option)(romeon);
                    oscard['link'] = yankee;
                    oscard = verify.bind(offset)(golfie, oscard);
                    zuuluu['message'] = oscard;
                    report = _closure1_slot15;
                    report = report.ADD_FRIENDS_MODAL;
                    zuuluu['location'] = report;
                    zuuluu = tangon.bind(option)(zuuluu);
                    return option;
 208:
                    return michal;
 211: // catch_target0
                    CatchBlockStart(arg_register=1);
                    golfie = _closure1_slot0;
                    verify = _closure1_slot2;
                    michal = 15;
                    michal = verify[michal];
                    tangon = golfie.bind(option)(michal);
                    zuuluu = tangon.presentError;
                    michal = 16;
                    report = verify[michal];
                    report = golfie.bind(option)(report);
                    oscard = report.intl;
                    report = oscard.string;
                    michal = verify[michal];
                    michal = golfie.bind(option)(michal);
                    michal = michal.t;
                    michal = michal.R0RpRU;
                    michal = report.bind(oscard)(michal);
                    michal = zuuluu.bind(tangon)(michal);
                    michal = undefined;
                    return michal;
 299:
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
    tangon = tangon.bind(entity)();
    var _closure1_slot23 = tangon;
    tangon = new Array(0);
    var _closure1_slot24 = tangon;
    tangon = 42;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/friends/screens/AddFriendsScreen.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: AddFriendsScreen
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            oscard = entity.navigation;
            var _closure2_slot0 = oscard;
            entity = entity.route;
            entity = entity.params;
            entity = entity.sourcePage;
            var _closure2_slot1 = entity;
            tangon = undefined;
            var _closure2_slot21 = tangon;
            var _closure2_slot22 = tangon;
            var _closure2_slot23 = tangon;
            var _closure2_slot24 = tangon;
            var _closure2_slot25 = tangon;
            entity = _closure1_slot21;
            echoed = entity.bind(tangon)();
            option = _closure1_slot1;
            verify = _closure1_slot2;
            entity = 20;
            michal = verify[entity];
            zuuluu = option.bind(tangon)(michal);
            michal = 21;
            michal = verify[michal];
            michal = option.bind(tangon)(michal);
            michal = michal.ADD_FRIENDS;
            michal = zuuluu.bind(tangon)(michal);
            report = michal.analyticsLocations;
            var _closure2_slot2 = report;
            foxtra = _closure1_slot5;
            zuuluu = foxtra.useState;
            michal = new Array(0);
            michal = zuuluu.bind(foxtra)(michal);
            offset = _closure1_slot3;
            output = 2;
            michal = offset.bind(tangon)(michal, output);
            golfie = 0;
            zuuluu = michal[golfie];
            var _closure2_slot3 = zuuluu;
            backup = 1;
            michal = michal[backup];
            var _closure2_slot4 = michal;
            zuuluu = foxtra.useState;
            michal = new Array(0);
            michal = zuuluu.bind(foxtra)(michal);
            michal = offset.bind(tangon)(michal, output);
            zuuluu = michal[golfie];
            var _closure2_slot5 = zuuluu;
            michal = michal[backup];
            var _closure2_slot6 = michal;
            zuuluu = foxtra.useState;
            michal = new Array(0);
            michal = zuuluu.bind(foxtra)(michal);
            zuuluu = offset.bind(tangon)(michal, output);
            michal = zuuluu[golfie];
            var _closure2_slot7 = michal;
            zuuluu = zuuluu[backup];
            var _closure2_slot8 = zuuluu;
            yankee = foxtra.useState;
            zuuluu = new Array(0);
            zuuluu = yankee.bind(foxtra)(zuuluu);
            zuuluu = offset.bind(tangon)(zuuluu, output);
            offset = zuuluu[golfie];
            var _closure2_slot9 = offset;
            zuuluu = zuuluu[backup];
            var _closure2_slot10 = zuuluu;
            romeon = foxtra.useCallback;
            yankee = function(argFoo, argBar) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    zuuluu = argBar;
                    michal = argFoo;
                    var _closure3_slot0 = michal;
                    var _closure3_slot1 = zuuluu;
                    michal = null;
                    if(!(michal == zuuluu)) { _fun00012_ip = 45; continue _fun00011 }
 22:
                    tangon = _closure2_slot6;
                    zuuluu = undefined;
                    michal = function(argFoo) {
                        entity = new Array(1);
                        report = argFoo;
                        tangon = 0;
                        oscard = entity;
                        zuuluu = arraySpread(oscard, report, tangon);
                        michal = _closure3_slot0;
                        entity[zuuluu] = michal;
                        michal = 1;
                        michal = zuuluu + michal;
                        return entity;
                    };
                    michal = tangon.bind(zuuluu)(michal);
                    _fun00012_ip = 66; continue _fun00011;
 45:
                    zuuluu = _closure2_slot10;
                    michal = undefined;
                    entity = function(argFoo) {
                        entity = new Array(1);
                        golfie = argFoo;
                        oscard = 0;
                        option = entity;
                        zuuluu = arraySpread(option, golfie, oscard);
                        michal = {};
                        report = _closure3_slot0;
                        michal['userId'] = report;
                        tangon = _closure3_slot1;
                        michal['applicationId'] = tangon;
                        entity[zuuluu] = michal;
                        michal = 1;
                        michal = zuuluu + michal;
                        return entity;
                    };
                    entity = zuuluu.bind(michal)(entity);
 66:
                    entity = undefined;
                    return entity;
                }
            };
            zuuluu = new Array(0);
            zuuluu = romeon.bind(foxtra)(yankee, zuuluu);
            var _closure2_slot11 = zuuluu;
            romeon = foxtra.useCallback;
            yankee = function(argFoo, argBar) {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zuuluu = argBar;
                    michal = argFoo;
                    var _closure3_slot0 = michal;
                    var _closure3_slot1 = zuuluu;
                    michal = null;
                    if(!(michal == zuuluu)) { _fun00014_ip = 45; continue _fun00013 }
 22:
                    tangon = _closure2_slot4;
                    zuuluu = undefined;
                    michal = function(argFoo) {
                        entity = new Array(1);
                        report = argFoo;
                        tangon = 0;
                        oscard = entity;
                        zuuluu = arraySpread(oscard, report, tangon);
                        michal = _closure3_slot0;
                        entity[zuuluu] = michal;
                        michal = 1;
                        michal = zuuluu + michal;
                        return entity;
                    };
                    michal = tangon.bind(zuuluu)(michal);
                    _fun00014_ip = 66; continue _fun00013;
 45:
                    zuuluu = _closure2_slot8;
                    michal = undefined;
                    entity = function(argFoo) {
                        entity = new Array(1);
                        golfie = argFoo;
                        oscard = 0;
                        option = entity;
                        zuuluu = arraySpread(option, golfie, oscard);
                        michal = {};
                        report = _closure3_slot0;
                        michal['userId'] = report;
                        tangon = _closure3_slot1;
                        michal['applicationId'] = tangon;
                        entity[zuuluu] = michal;
                        michal = 1;
                        michal = zuuluu + michal;
                        return entity;
                    };
                    entity = zuuluu.bind(michal)(entity);
 66:
                    entity = undefined;
                    return entity;
                }
            };
            zuuluu = new Array(0);
            zuuluu = romeon.bind(foxtra)(yankee, zuuluu);
            var _closure2_slot12 = zuuluu;
            zuuluu = 22;
            zuuluu = verify[zuuluu];
            yankee = option.bind(tangon)(zuuluu);
            zuuluu = function() {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 23;
                michal = michal[entity];
                entity = undefined;
                report = zuuluu.bind(entity)(michal);
                tangon = report.track;
                michal = _closure1_slot13;
                zuuluu = michal.FRIEND_ADD_VIEWED;
                michal = {};
                oscard = _closure1_slot14;
                oscard = oscard.FRIENDS_ADD_FRIENDS_MODAL;
                michal['friend_add_type'] = oscard;
                oscard = _closure2_slot1;
                michal['source_page'] = oscard;
                michal = tangon.bind(report)(zuuluu, michal);
                return entity;
            };
            zuuluu = yankee.bind(tangon)(zuuluu);
            romeon = foxtra.useCallback;
            yankee = new Array(1);
            yankee[0] = oscard;
            zuuluu = function() {
                zuuluu = _closure2_slot0;
                michal = zuuluu.navigate;
                entity = 'username-search';
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            };
            source = romeon.bind(foxtra)(zuuluu, yankee);
            var _closure2_slot13 = source;
            romeon = foxtra.useCallback;
            yankee = new Array(1);
            yankee[0] = report;
            zuuluu = function(argFoo) {
                tangon = argFoo;
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 24;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = {};
                report = tangon.id;
                michal['userId'] = report;
                michal['localUser'] = tangon;
                tangon = _closure2_slot2;
                michal['sourceAnalyticsLocations'] = tangon;
                tangon = 'Add Friends Modal User Profile';
                michal['location'] = tangon;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            zuuluu = romeon.bind(foxtra)(zuuluu, yankee);
            var _closure2_slot14 = zuuluu;
            result = _closure1_slot0;
            romeon = 25;
            zuuluu = verify[romeon];
            vacuum = result.bind(tangon)(zuuluu);
            update = vacuum.useStateFromStoresArray;
            ctrled = _closure1_slot10;
            foxtra = new Array(2);
            foxtra[0] = ctrled;
            yankee = _closure1_slot11;
            foxtra[1] = yankee;
            zuuluu = function() {
                oscard = new Array(0);
                var _closure3_slot0 = oscard;
                tangon = _closure1_slot1;
                golfie = _closure1_slot2;
                zuuluu = 26;
                report = golfie[zuuluu];
                zuuluu = undefined;
                option = tangon.bind(zuuluu)(report);
                report = option.keys;
                verify = _closure1_slot10;
                michal = verify.getRelationships;
                michal = michal.bind(verify)();
                option = report.bind(option)(michal);
                report = option.forEach;
                michal = function(argFoo) {
                    _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                        report = argFoo;
                        zuuluu = _closure1_slot10;
                        michal = zuuluu.isUnfilteredPendingIncoming;
                        michal = michal.bind(zuuluu)(report);
                        if(!michal) { _fun00016_ip = 87; continue _fun00015 }
 26:
                        michal = _closure1_slot11;
                        entity = michal.getUser;
                        zuuluu = entity.bind(michal)(report);
                        entity = null;
                        entity = entity == zuuluu;
                        if(entity) { _fun00016_ip = 67; continue _fun00015 }
 50:
                        tangon = _closure2_slot3;
                        michal = tangon.includes;
                        entity = michal.bind(tangon)(report);
 67:
                        if(entity) { _fun00016_ip = 87; continue _fun00015 }
 70:
                        michal = _closure3_slot0;
                        entity = michal.push;
                        entity = entity.bind(michal)(zuuluu);
 87:
                        entity = undefined;
                        return entity;
                    }
                };
                michal = report.bind(option)(michal);
                report = new Array(0);
                var _closure3_slot1 = report;
                verify = _closure2_slot5;
                option = verify.forEach;
                michal = function(argFoo) {
                    _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                        zuuluu = _closure1_slot11;
                        michal = zuuluu.getUser;
                        entity = argFoo;
                        zuuluu = michal.bind(zuuluu)(entity);
                        entity = null;
                        if(!(entity != zuuluu)) { _fun00018_ip = 44; continue _fun00017 }
 27:
                        michal = _closure3_slot1;
                        entity = michal.push;
                        entity = entity.bind(michal)(zuuluu);
 44:
                        entity = undefined;
                        return entity;
                    }
                };
                michal = option.bind(verify)(michal);
                michal = 27;
                michal = golfie[michal];
                tangon = tangon.bind(zuuluu)(michal);
                zuuluu = tangon.unionBy;
                michal = function(argFoo) {
                    entity = argFoo;
                    entity = entity.id;
                    return entity;
                };
                zuuluu = zuuluu.bind(tangon)(report, oscard, michal);
                michal = zuuluu.sort;
                entity = function(argFoo, argBar) {
                    report = _closure1_slot1;
                    oscard = _closure1_slot2;
                    entity = 28;
                    michal = oscard[entity];
                    tangon = undefined;
                    golfie = report.bind(tangon)(michal);
                    zuuluu = golfie.getName;
                    michal = argFoo;
                    zuuluu = zuuluu.bind(golfie)(michal);
                    michal = zuuluu.localeCompare;
                    entity = oscard[entity];
                    report = report.bind(tangon)(entity);
                    tangon = report.getName;
                    entity = argBar;
                    entity = tangon.bind(report)(entity);
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            zuuluu = update.bind(vacuum)(foxtra, zuuluu);
            var _closure2_slot15 = zuuluu;
            foxtra = 29;
            foxtra = verify[foxtra];
            vacuum = result.bind(tangon)(foxtra);
            update = vacuum.useIsFriendTiersUIEnabled;
            foxtra = {};
            sequen = 'AddFriendsScreen';
            foxtra['location'] = sequen;
            foxtra = update.bind(vacuum)(foxtra);
            var _closure2_slot16 = foxtra;
            romeon = verify[romeon];
            update = result.bind(tangon)(romeon);
            result = update.useStateFromStores;
            vacuum = _closure1_slot9;
            romeon = new Array(3);
            romeon[0] = vacuum;
            romeon[1] = ctrled;
            romeon[2] = yankee;
            yankee = new Array(3);
            yankee[0] = offset;
            yankee[1] = michal;
            yankee[2] = foxtra;
            papara = _closure1_slot26;
            status = function() {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    tangon = _closure2_slot16;
                    if(tangon) { _fun00020_ip = 21; continue _fun00019 }
 15:
                    tangon = _closure1_slot24;
                    return tangon;
 21:
                    oscard = _closure1_slot9;
                    report = oscard.getGameRelationshipsByType;
                    tangon = _closure1_slot16;
                    tangon = tangon.PENDING_INCOMING;
                    golfie = report.bind(oscard)(tangon);
                    oscard = new Array(0);
                    var _closure3_slot0 = oscard;
                    report = golfie.forEach;
                    tangon = function(argFoo) {
                        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                            entity = argFoo;
                            golfie = entity.id;
                            var _closure4_slot0 = golfie;
                            tangon = entity.applicationId;
                            var _closure4_slot1 = tangon;
                            report = _closure1_slot11;
                            entity = report.getUser;
                            report = entity.bind(report)(golfie);
                            oscard = _closure1_slot10;
                            entity = oscard.isSpam;
                            entity = entity.bind(oscard)(golfie);
                            if(entity) { _fun00022_ip = 74; continue _fun00021 }
 59:
                            oscard = _closure1_slot10;
                            zuuluu = oscard.isBlockedOrIgnored;
                            entity = zuuluu.bind(oscard)(golfie);
 74:
                            if(entity) { _fun00022_ip = 83; continue _fun00021 }
 77:
                            zuuluu = null;
                            entity = zuuluu == report;
 83:
                            if(entity) { _fun00022_ip = 111; continue _fun00021 }
 86:
                            oscard = _closure2_slot7;
                            zuuluu = oscard.some;
                            michal = function(argFoo) {
                                tangon = _closure1_slot25;
                                zuuluu = {};
                                michal = _closure4_slot0;
                                zuuluu['userId'] = michal;
                                entity = _closure4_slot1;
                                zuuluu['applicationId'] = entity;
                                michal = undefined;
                                entity = argFoo;
                                entity = tangon.bind(michal)(entity, zuuluu);
                                return entity;
                            };
                            entity = zuuluu.bind(oscard)(michal);
 111:
                            if(entity) { _fun00022_ip = 141; continue _fun00021 }
 114:
                            zuuluu = _closure3_slot0;
                            michal = zuuluu.push;
                            entity = {};
                            entity['user'] = report;
                            entity['applicationId'] = tangon;
                            entity = michal.bind(zuuluu)(entity);
 141:
                            entity = undefined;
                            return entity;
                        }
                    };
                    tangon = report.bind(golfie)(tangon);
                    report = new Array(0);
                    var _closure3_slot1 = report;
                    golfie = _closure2_slot9;
                    tangon = golfie.forEach;
                    zuuluu = function(argFoo) {
                        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                            entity = argFoo;
                            zuuluu = entity.userId;
                            tangon = entity.applicationId;
                            michal = _closure1_slot11;
                            entity = michal.getUser;
                            report = entity.bind(michal)(zuuluu);
                            entity = null;
                            if(!(entity != report)) { _fun00024_ip = 64; continue _fun00023 }
 37:
                            zuuluu = _closure3_slot1;
                            michal = zuuluu.push;
                            entity = {};
                            entity['user'] = report;
                            entity['applicationId'] = tangon;
                            entity = michal.bind(zuuluu)(entity);
 64:
                            entity = undefined;
                            return entity;
                        }
                    };
                    zuuluu = tangon.bind(golfie)(zuuluu);
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 27;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = tangon.unionBy;
                    michal = function(argFoo) {
                        entity = argFoo;
                        entity = entity.user;
                        entity = entity.id;
                        return entity;
                    };
                    zuuluu = zuuluu.bind(tangon)(report, oscard, michal);
                    michal = zuuluu.sort;
                    entity = function(argFoo, argBar) {
                        report = _closure1_slot1;
                        oscard = _closure1_slot2;
                        entity = 28;
                        michal = oscard[entity];
                        tangon = undefined;
                        golfie = report.bind(tangon)(michal);
                        zuuluu = golfie.getName;
                        michal = argFoo;
                        michal = michal.user;
                        zuuluu = zuuluu.bind(golfie)(michal);
                        michal = zuuluu.localeCompare;
                        entity = oscard[entity];
                        report = report.bind(tangon)(entity);
                        tangon = report.getName;
                        entity = argBar;
                        entity = entity.user;
                        entity = tangon.bind(report)(entity);
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                }
            };
            limora = update;
            sierra = romeon;
            target = yankee;
            yankee = limora[result](sierra, status, target, papara, cntext);
            var _closure2_slot17 = yankee;
            michal = 30;
            michal = verify[michal];
            michal = option.bind(tangon)(michal);
            michal = michal.bind(tangon)();
            option = michal.added;
            var _closure2_slot18 = option;
            option = michal.setAdded;
            var _closure2_slot19 = option;
            romeon = michal.friendSuggestions;
            var _closure2_slot20 = romeon;
            michal = romeon.length;
            option = michal > golfie;
            if(!option) { _fun00010_ip = 665; continue _fun00009 }
 653:
            verify = zuuluu.length;
            michal = 3;
            option = verify > michal;
 665:
            _closure2_slot21 = option;
            michal = romeon.length;
            michal = michal > golfie;
            if(!michal) { _fun00010_ip = 693; continue _fun00009 }
 681:
            offset = yankee.length;
            verify = 3;
            michal = offset > verify;
 693:
            _closure2_slot22 = michal;
            result = _closure1_slot5;
            update = result.useMemo;
            offset = new Array(2);
            offset[0] = yankee;
            offset[1] = michal;
            verify = function() {
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    entity = _closure2_slot22;
                    if(entity) { _fun00026_ip = 21; continue _fun00025 }
 10:
                    entity = _closure2_slot17;
                    tangon = entity.length;
                    _fun00026_ip = 52; continue _fun00025;
 21:
                    entity = global;
                    oscard = entity.Math;
                    zuuluu = oscard.min;
                    entity = _closure2_slot17;
                    michal = entity.length;
                    entity = 3;
                    tangon = zuuluu.bind(oscard)(michal, entity);
 52:
                    entity = new Array(0);
                    zuuluu = 0;
                    oscard = zuuluu < tangon;
                    michal = null;
                    if(!oscard) { _fun00026_ip = 101; continue _fun00025 }
 67:
                    oscard = _closure2_slot17;
                    oscard = oscard[zuuluu];
                    if(!(michal != oscard)) { _fun00026_ip = 94; continue _fun00025 }
 79:
                    golfie = entity.push;
                    oscard = oscard.applicationId;
                    oscard = golfie.bind(entity)(oscard);
 94:
                    zuuluu = zuuluu + 1;
                    if(zuuluu < tangon) { _fun00026_ip = 67; continue _fun00025 }
 101:
                    return entity;
                }
            };
            offset = update.bind(result)(verify, offset);
            ctrled = _closure1_slot1;
            update = _closure1_slot2;
            verify = 31;
            verify = update[verify];
            verify = ctrled.bind(tangon)(verify);
            verify = verify.bind(tangon)(offset, foxtra);
            verify = {};
            verify['navigation'] = oscard;
            oscard = function(argFoo) { // Original name: useTransitionEnd
                entity = argFoo;
                oscard = entity.navigation;
                var _closure3_slot0 = oscard;
                report = _closure1_slot5;
                tangon = report.useState;
                zuuluu = false;
                golfie = tangon.bind(report)(zuuluu);
                tangon = _closure1_slot3;
                zuuluu = undefined;
                entity = 2;
                tangon = tangon.bind(zuuluu)(golfie, entity);
                entity = 0;
                entity = tangon[entity];
                zuuluu = 1;
                zuuluu = tangon[zuuluu];
                var _closure3_slot1 = zuuluu;
                tangon = report.useEffect;
                zuuluu = new Array(1);
                zuuluu[0] = oscard;
                michal = function() {
                    tangon = _closure3_slot0;
                    zuuluu = tangon.addListener;
                    michal = 'transitionEnd';
                    entity = function() {
                        zuuluu = _closure3_slot1;
                        entity = undefined;
                        michal = true;
                        michal = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
                };
                michal = tangon.bind(report)(michal, zuuluu);
                return entity;
            };
            verify = oscard.bind(tangon)(verify);
            offset = _closure1_slot0;
            oscard = 18;
            foxtra = update[oscard];
            ctrled = offset.bind(tangon)(foxtra);
            foxtra = ctrled.useContactSyncAccount;
            foxtra = foxtra.bind(ctrled)();
            oscard = update[oscard];
            offset = offset.bind(tangon)(oscard);
            oscard = offset.isContactSyncEnabled;
            offset = oscard.bind(offset)(foxtra);
            foxtra = result.useState;
            oscard = false;
            foxtra = foxtra.bind(result)(oscard);
            oscard = _closure1_slot3;
            foxtra = oscard.bind(tangon)(foxtra, output);
            oscard = foxtra[golfie];
            foxtra = foxtra[backup];
            _closure2_slot23 = foxtra;
            output = result.useEffect;
            backup = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 18;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.checkContactPermissions;
                tangon = michal.bind(zuuluu)();
                zuuluu = tangon.then;
                michal = function(argFoo) {
                    _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                        report = argFoo;
                        entity = _closure1_slot17;
                        entity = entity.NOT_DETERMINED;
                        zuuluu = report === entity;
                        oscard = _closure1_slot0;
                        tangon = _closure1_slot2;
                        entity = 19;
                        tangon = tangon[entity];
                        entity = undefined;
                        oscard = oscard.bind(entity)(tangon);
                        tangon = oscard.isAndroid;
                        tangon = tangon.bind(oscard)();
                        if(!tangon) { _fun00028_ip = 68; continue _fun00027 }
 54:
                        michal = _closure1_slot17;
                        michal = michal.UNAUTHORIZED;
                        tangon = report === michal;
 68:
                        michal = _closure2_slot23;
                        if(zuuluu) { _fun00028_ip = 81; continue _fun00027 }
 78:
                        zuuluu = tangon;
 81:
                        michal = michal.bind(entity)(zuuluu);
                        return entity;
                    }
                };
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            foxtra = new Array(0);
            foxtra = output.bind(result)(backup, foxtra);
            output = !offset;
            if(output) { _fun00010_ip = 887; continue _fun00009 }
 884:
            output = oscard;
 887:
            _closure2_slot24 = output;
            oscard = zuuluu.length;
            offset = golfie === oscard;
            if(!offset) { _fun00010_ip = 912; continue _fun00009 }
 903:
            oscard = yankee.length;
            offset = golfie === oscard;
 912:
            if(!offset) { _fun00010_ip = 924; continue _fun00009 }
 915:
            oscard = romeon.length;
            offset = golfie === oscard;
 924:
            golfie = _closure1_slot5;
            oscard = golfie.useMemo;
            foxtra = zuuluu.length;
            zuuluu = new Array(6);
            zuuluu[0] = foxtra;
            romeon = romeon.length;
            zuuluu[1] = romeon;
            yankee = yankee.length;
            zuuluu[2] = yankee;
            zuuluu[3] = output;
            zuuluu[4] = option;
            zuuluu[5] = michal;
            michal = function() {
                _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                    entity = _closure2_slot24;
                    zuuluu = 1;
                    if(!entity) { _fun00030_ip = 16; continue _fun00029 }
 13:
                    zuuluu = 2;
 16:
                    entity = new Array(4);
                    entity[0] = zuuluu;
                    report = _closure2_slot21;
                    zuuluu = 4;
                    tangon = zuuluu;
                    if(report) { _fun00030_ip = 46; continue _fun00029 }
 37:
                    report = _closure2_slot15;
                    tangon = report.length;
 46:
                    entity[1] = tangon;
                    tangon = _closure2_slot22;
                    if(tangon) { _fun00030_ip = 66; continue _fun00029 }
 57:
                    tangon = _closure2_slot17;
                    zuuluu = tangon.length;
 66:
                    entity[2] = zuuluu;
                    michal = _closure2_slot20;
                    michal = michal.length;
                    entity[3] = michal;
                    return entity;
                }
            };
            result = oscard.bind(golfie)(michal, zuuluu);
            _closure2_slot25 = result;
            oscard = golfie.useCallback;
            zuuluu = function(argFoo) {
                _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                    michal = argFoo;
                    entity = _closure1_slot20;
                    entity = entity.FIND_FRIENDS;
                    if(!(entity !== michal)) { _fun00032_ip = 313; continue _fun00031 }
 23:
                    entity = _closure1_slot20;
                    entity = entity.INCOMING_FRIEND_REQUESTS;
                    if(!(entity !== michal)) { _fun00032_ip = 232; continue _fun00031 }
 40:
                    entity = _closure1_slot20;
                    entity = entity.INCOMING_GAME_FRIEND_REQUESTS;
                    if(!(entity !== michal)) { _fun00032_ip = 151; continue _fun00031 }
 54:
                    entity = _closure1_slot20;
                    entity = entity.CONTACT_SUGGESTIONS;
                    if(!(entity !== michal)) { _fun00032_ip = 72; continue _fun00031 }
 68:
                    entity = undefined;
                    return entity;
 72:
                    entity = {};
                    michal = 'section';
                    entity['type'] = michal;
                    michal = {};
                    option = _closure1_slot0;
                    verify = _closure1_slot2;
                    tangon = 16;
                    report = verify[tangon];
                    golfie = undefined;
                    report = option.bind(golfie)(report);
                    oscard = report.intl;
                    report = oscard.string;
                    tangon = verify[tangon];
                    tangon = option.bind(golfie)(tangon);
                    tangon = tangon.t;
                    tangon = tangon.1uAmCw;
                    tangon = report.bind(oscard)(tangon);
                    michal['title'] = tangon;
                    entity['props'] = michal;
                    return entity;
 151:
                    entity = {};
                    michal = 'section';
                    entity['type'] = michal;
                    michal = {};
                    option = _closure1_slot0;
                    verify = _closure1_slot2;
                    tangon = 16;
                    report = verify[tangon];
                    golfie = undefined;
                    report = option.bind(golfie)(report);
                    oscard = report.intl;
                    report = oscard.string;
                    tangon = verify[tangon];
                    tangon = option.bind(golfie)(tangon);
                    tangon = tangon.t;
                    tangon = tangon.0uVuaW;
                    tangon = report.bind(oscard)(tangon);
                    michal['title'] = tangon;
                    entity['props'] = michal;
                    return entity;
 232:
                    entity = {};
                    michal = 'section';
                    entity['type'] = michal;
                    michal = {};
                    golfie = _closure1_slot0;
                    option = _closure1_slot2;
                    zuuluu = 16;
                    tangon = option[zuuluu];
                    oscard = undefined;
                    tangon = golfie.bind(oscard)(tangon);
                    report = tangon.intl;
                    tangon = report.string;
                    zuuluu = option[zuuluu];
                    zuuluu = golfie.bind(oscard)(zuuluu);
                    zuuluu = zuuluu.t;
                    zuuluu = zuuluu.93cLEx;
                    zuuluu = tangon.bind(report)(zuuluu);
                    michal['title'] = zuuluu;
                    entity['props'] = michal;
                    return entity;
 313:
                    entity = undefined;
                    return entity;
                }
            };
            michal = new Array(0);
            backup = oscard.bind(golfie)(zuuluu, michal);
            zuuluu = _closure1_slot19;
            michal = _closure1_slot0;
            ctrled = _closure1_slot2;
            entity = ctrled[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.AnalyticsLocationProvider;
            entity = {};
            entity['value'] = report;
            yankee = _closure1_slot18;
            update = _closure1_slot1;
            report = 32;
            report = ctrled[report];
            oscard = update.bind(tangon)(report);
            report = {};
            foxtra = true;
            report['absolute'] = foxtra;
            oscard = yankee.bind(tangon)(oscard, report);
            report = new Array(2);
            report[0] = oscard;
            golfie = _closure1_slot7;
            oscard = {};
            option = echoed.container;
            oscard['style'] = option;
            option = {};
            romeon = echoed.inviteAppsContainerNonSticky;
            option['style'] = romeon;
            romeon = 33;
            romeon = ctrled[romeon];
            update = update.bind(tangon)(romeon);
            romeon = {};
            ctrled = _closure1_slot23;
            romeon['onItemPressed'] = ctrled;
            ctrled = echoed.inviteAppsContentContainer;
            romeon['contentContainerStyle'] = ctrled;
            romeon = yankee.bind(tangon)(update, romeon);
            option['children'] = romeon;
            yankee = yankee.bind(tangon)(golfie, option);
            option = new Array(2);
            option[0] = yankee;
            if(verify) { _fun00010_ip = 1278; continue _fun00009 }
 1179:
            if(offset) { _fun00010_ip = 1278; continue _fun00009 }
 1182:
            romeon = _closure1_slot18;
            yankee = _closure1_slot7;
            verify = {};
            update = echoed.loading;
            verify['style'] = update;
            ctrled = _closure1_slot6;
            update = {'animating': true, 'color': null, 'size': 'large'};
            sequen = _closure1_slot1;
            config = _closure1_slot2;
            vacuum = 12;
            vacuum = config[vacuum];
            vacuum = sequen.bind(tangon)(vacuum);
            vacuum = vacuum.unsafe_rawColors;
            vacuum = vacuum.BRAND_500;
            update['color'] = vacuum;
            update = romeon.bind(tangon)(ctrled, update);
            verify['children'] = update;
            verify = romeon.bind(tangon)(yankee, verify);
            _fun00010_ip = 1634; continue _fun00009;
 1278:
            if(offset) { _fun00010_ip = 1359; continue _fun00009 }
 1281:
            romeon = _closure1_slot18;
            yankee = _closure1_slot0;
            update = _closure1_slot2;
            offset = 34;
            offset = update[offset];
            offset = yankee.bind(tangon)(offset);
            yankee = offset.UsersFastList;
            offset = {};
            offset['sections'] = result;
            kiloes = function(argFoo, argBar) { // Original name: getItemProps
                _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                    golfie = argFoo;
                    report = argBar;
                    yankee = 0;
                    michal = yankee === report;
                    var _closure3_slot0 = michal;
                    tangon = _closure2_slot25;
                    oscard = tangon[golfie];
                    tangon = 1;
                    tangon = oscard - tangon;
                    tangon = report === tangon;
                    var _closure3_slot1 = tangon;
                    option = _closure1_slot20;
                    option = option.FIND_FRIENDS;
                    if(!(option !== golfie)) { _fun00034_ip = 451; continue _fun00033 }
 64:
                    option = _closure1_slot20;
                    option = option.INCOMING_FRIEND_REQUESTS;
                    if(!(option !== golfie)) { _fun00034_ip = 364; continue _fun00033 }
 81:
                    option = _closure1_slot20;
                    option = option.INCOMING_GAME_FRIEND_REQUESTS;
                    if(!(option !== golfie)) { _fun00034_ip = 235; continue _fun00033 }
 98:
                    oscard = _closure1_slot20;
                    oscard = oscard.CONTACT_SUGGESTIONS;
                    if(!(oscard !== golfie)) { _fun00034_ip = 116; continue _fun00033 }
 112:
                    oscard = undefined;
                    return oscard;
 116:
                    oscard = _closure2_slot20;
                    golfie = oscard[report];
                    var _closure3_slot5 = golfie;
                    oscard = {};
                    option = 'custom';
                    oscard['type'] = option;
                    romeon = null;
                    offset = romeon == golfie;
                    option = undefined;
                    if(offset) { _fun00034_ip = 155; continue _fun00033 }
 149:
                    option = golfie.mutualFriendsCount;
 155:
                    foxtra = romeon != option;
                    offset = 'contactSuggestionNoMutualCount';
                    option = offset;
                    if(!foxtra) { _fun00034_ip = 202; continue _fun00033 }
 171:
                    romeon = romeon == golfie;
                    verify = undefined;
                    if(romeon) { _fun00034_ip = 186; continue _fun00033 }
 180:
                    verify = golfie.mutualFriendsCount;
 186:
                    verify = verify > yankee;
                    option = offset;
                    if(!verify) { _fun00034_ip = 202; continue _fun00033 }
 196:
                    option = 'contactSuggestionMutualCount';
 202:
                    oscard['itemType'] = option;
                    golfie = golfie.user;
                    golfie = golfie.id;
                    oscard['key'] = golfie;
                    golfie = function() { // Original name: component
                        tangon = _closure1_slot18;
                        michal = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        entity = 40;
                        entity = zuuluu[entity];
                        zuuluu = undefined;
                        entity = michal.bind(zuuluu)(entity);
                        michal = entity.ContactSuggestionRow;
                        entity = {};
                        offset = _closure2_slot18;
                        verify = offset.includes;
                        option = _closure3_slot5;
                        option = verify.bind(offset)(option);
                        entity['added'] = option;
                        option = _closure3_slot5;
                        entity['suggestedFriend'] = option;
                        option = _closure3_slot0;
                        entity['start'] = option;
                        golfie = _closure3_slot1;
                        entity['end'] = golfie;
                        oscard = _closure2_slot14;
                        entity['onPress'] = oscard;
                        report = _closure1_slot15;
                        report = report.ADD_FRIENDS_MODAL;
                        entity['location'] = report;
                        report = function() { // Original name: onAddSuggestion
                            zuuluu = _closure2_slot19;
                            michal = undefined;
                            entity = function(argFoo) {
                                entity = new Array(1);
                                report = argFoo;
                                tangon = 0;
                                oscard = entity;
                                zuuluu = arraySpread(oscard, report, tangon);
                                michal = _closure3_slot5;
                                entity[zuuluu] = michal;
                                michal = 1;
                                michal = zuuluu + michal;
                                return entity;
                            };
                            entity = zuuluu.bind(michal)(entity);
                            return entity;
                        };
                        entity['onAddSuggestion'] = report;
                        entity = tangon.bind(zuuluu)(michal, entity);
                        return entity;
                    };
                    oscard['component'] = golfie;
                    return oscard;
 235:
                    if(!tangon) { _fun00034_ip = 245; continue _fun00033 }
 238:
                    oscard = _closure2_slot22;
                    if(oscard) { _fun00034_ip = 336; continue _fun00033 }
 245:
                    oscard = _closure2_slot17;
                    oscard = oscard[report];
                    golfie = oscard.user;
                    var _closure3_slot3 = golfie;
                    yankee = oscard.applicationId;
                    var _closure3_slot4 = yankee;
                    oscard = {'type': 'custom', 'itemType': 'incomingRequest'};
                    offset = golfie.id;
                    golfie = global;
                    golfie = golfie.HermesInternal;
                    verify = golfie.concat;
                    option = '';
                    golfie = '-';
                    golfie = verify.bind(option)(offset, golfie, yankee);
                    oscard['key'] = golfie;
                    golfie = function() { // Original name: component
                        tangon = _closure1_slot18;
                        michal = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        entity = 39;
                        entity = zuuluu[entity];
                        zuuluu = undefined;
                        entity = michal.bind(zuuluu)(entity);
                        michal = entity.ConnectedIncomingGameFriendRequestRow;
                        entity = {};
                        option = _closure2_slot9;
                        golfie = option.find;
                        oscard = function(argFoo) {
                            tangon = _closure1_slot25;
                            zuuluu = {};
                            michal = _closure3_slot3;
                            michal = michal.id;
                            zuuluu['userId'] = michal;
                            entity = _closure3_slot4;
                            zuuluu['applicationId'] = entity;
                            michal = undefined;
                            entity = argFoo;
                            entity = tangon.bind(michal)(entity, zuuluu);
                            return entity;
                        };
                        golfie = golfie.bind(option)(oscard);
                        oscard = null;
                        oscard = oscard != golfie;
                        entity['accepted'] = oscard;
                        golfie = _closure3_slot4;
                        entity['applicationId'] = golfie;
                        golfie = _closure3_slot3;
                        entity['user'] = golfie;
                        golfie = _closure3_slot0;
                        entity['start'] = golfie;
                        oscard = _closure3_slot1;
                        entity['end'] = oscard;
                        oscard = _closure2_slot14;
                        entity['onPress'] = oscard;
                        oscard = _closure2_slot12;
                        entity['onDeclineIncomingRequest'] = oscard;
                        report = _closure2_slot11;
                        entity['onAcceptIncomingRequest'] = report;
                        entity = tangon.bind(zuuluu)(michal, entity);
                        return entity;
                    };
                    oscard['component'] = golfie;
                    return oscard;
 336:
                    oscard = {'type': 'custom', 'itemType': 'viewAll', 'key': 'gameFriendRequestsViewAll'};
                    golfie = function() { // Original name: component
                        tangon = _closure1_slot18;
                        michal = _closure1_slot1;
                        zuuluu = _closure1_slot2;
                        entity = 38;
                        entity = zuuluu[entity];
                        zuuluu = undefined;
                        michal = michal.bind(zuuluu)(entity);
                        entity = {};
                        report = function() { // Original name: onPress
                            zuuluu = _closure2_slot0;
                            michal = zuuluu.navigate;
                            entity = 'requests';
                            entity = michal.bind(zuuluu)(entity);
                            entity = undefined;
                            return entity;
                        };
                        entity['onPress'] = report;
                        report = _closure2_slot17;
                        option = report.slice;
                        golfie = 3;
                        option = option.bind(report)(golfie);
                        golfie = option.map;
                        oscard = function(argFoo) {
                            entity = argFoo;
                            entity = entity.user;
                            return entity;
                        };
                        oscard = golfie.bind(option)(oscard);
                        entity['users'] = oscard;
                        report = report.length;
                        entity['count'] = report;
                        entity = tangon.bind(zuuluu)(michal, entity);
                        return entity;
                    };
                    oscard['component'] = golfie;
                    return oscard;
 364:
                    if(!tangon) { _fun00034_ip = 374; continue _fun00033 }
 367:
                    tangon = _closure2_slot21;
                    if(tangon) { _fun00034_ip = 423; continue _fun00033 }
 374:
                    tangon = _closure2_slot15;
                    report = tangon[report];
                    var _closure3_slot2 = report;
                    tangon = {'type': 'custom', 'itemType': 'incomingRequest'};
                    report = report.id;
                    tangon['key'] = report;
                    report = function() { // Original name: component
                        tangon = _closure1_slot18;
                        michal = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        entity = 39;
                        entity = zuuluu[entity];
                        zuuluu = undefined;
                        entity = michal.bind(zuuluu)(entity);
                        michal = entity.IncomingFriendRequestRow;
                        entity = {};
                        verify = _closure2_slot5;
                        option = verify.includes;
                        golfie = _closure3_slot2;
                        golfie = golfie.id;
                        golfie = option.bind(verify)(golfie);
                        entity['accepted'] = golfie;
                        golfie = _closure3_slot2;
                        entity['user'] = golfie;
                        golfie = _closure3_slot0;
                        entity['start'] = golfie;
                        oscard = _closure3_slot1;
                        entity['end'] = oscard;
                        oscard = _closure2_slot14;
                        entity['onPress'] = oscard;
                        oscard = _closure2_slot12;
                        entity['onDeclineIncomingRequest'] = oscard;
                        report = _closure2_slot11;
                        entity['onAcceptIncomingRequest'] = report;
                        entity = tangon.bind(zuuluu)(michal, entity);
                        return entity;
                    };
                    tangon['component'] = report;
                    return tangon;
 423:
                    tangon = {'type': 'custom', 'itemType': 'viewAll', 'key': 'friendRequestsViewAll'};
                    report = function() { // Original name: component
                        tangon = _closure1_slot18;
                        michal = _closure1_slot1;
                        zuuluu = _closure1_slot2;
                        entity = 38;
                        entity = zuuluu[entity];
                        zuuluu = undefined;
                        michal = michal.bind(zuuluu)(entity);
                        entity = {};
                        report = function() { // Original name: onPress
                            tangon = _closure1_slot1;
                            zuuluu = _closure1_slot2;
                            entity = 23;
                            zuuluu = zuuluu[entity];
                            entity = undefined;
                            oscard = tangon.bind(entity)(zuuluu);
                            report = oscard.track;
                            zuuluu = _closure1_slot13;
                            tangon = zuuluu.FRIEND_FINDER_SECTION_EXPANDED;
                            zuuluu = {};
                            michal = _closure1_slot12;
                            michal = michal.PENDING;
                            zuuluu['section_id'] = michal;
                            michal = 3;
                            zuuluu['truncated_count'] = michal;
                            golfie = _closure2_slot15;
                            golfie = golfie.length;
                            zuuluu['expanded_count'] = golfie;
                            golfie = 'AddFriends';
                            zuuluu['location'] = golfie;
                            zuuluu = report.bind(oscard)(tangon, zuuluu);
                            tangon = _closure2_slot0;
                            zuuluu = tangon.navigate;
                            michal = 'requests';
                            michal = zuuluu.bind(tangon)(michal);
                            return entity;
                        };
                        entity['onPress'] = report;
                        report = _closure2_slot15;
                        golfie = report.slice;
                        oscard = 3;
                        oscard = golfie.bind(report)(oscard);
                        entity['users'] = oscard;
                        report = report.length;
                        entity['count'] = report;
                        entity = tangon.bind(zuuluu)(michal, entity);
                        return entity;
                    };
                    tangon['component'] = report;
                    return tangon;
 451:
                    if(!michal) { _fun00034_ip = 461; continue _fun00033 }
 454:
                    entity = _closure2_slot24;
                    if(entity) { _fun00034_ip = 489; continue _fun00033 }
 461:
                    entity = {'type': 'custom', 'itemType': 'addByUsername', 'key': 'addByUsername'};
                    michal = function() { // Original name: component
                        tangon = _closure1_slot18;
                        verify = _closure1_slot0;
                        offset = _closure1_slot2;
                        oscard = 35;
                        entity = offset[oscard];
                        zuuluu = undefined;
                        entity = verify.bind(zuuluu)(entity);
                        michal = entity.TableRow;
                        entity = {'start': null, 'end': true, 'label': null, 'labelLineClamp': 1, 'icon': null, 'arrow': true};
                        golfie = _closure2_slot24;
                        golfie = !golfie;
                        entity['start'] = golfie;
                        golfie = 16;
                        option = offset[golfie];
                        option = verify.bind(zuuluu)(option);
                        yankee = option.intl;
                        option = yankee.string;
                        golfie = offset[golfie];
                        golfie = verify.bind(zuuluu)(golfie);
                        golfie = golfie.t;
                        golfie = golfie.QzVsOj;
                        golfie = option.bind(yankee)(golfie);
                        entity['label'] = golfie;
                        oscard = offset[oscard];
                        oscard = verify.bind(zuuluu)(oscard);
                        oscard = oscard.TableRow;
                        golfie = oscard.Icon;
                        oscard = {};
                        option = 37;
                        option = offset[option];
                        option = verify.bind(zuuluu)(option);
                        option = option.AtIcon;
                        oscard['IconComponent'] = option;
                        oscard = tangon.bind(zuuluu)(golfie, oscard);
                        entity['icon'] = oscard;
                        report = _closure2_slot13;
                        entity['onPress'] = report;
                        entity = tangon.bind(zuuluu)(michal, entity);
                        return entity;
                    };
                    entity['component'] = michal;
                    _fun00034_ip = 518; continue _fun00033;
 489:
                    michal = {'type': 'custom', 'itemType': 'showContactSyncCTA', 'key': 'showContactSyncCTA'};
                    zuuluu = function() { // Original name: component
                        tangon = _closure1_slot18;
                        golfie = _closure1_slot0;
                        option = _closure1_slot2;
                        oscard = 35;
                        entity = option[oscard];
                        zuuluu = undefined;
                        entity = golfie.bind(zuuluu)(entity);
                        michal = entity.TableRow;
                        entity = {'start': true, 'label': null, 'labelLineClamp': 1};
                        verify = 16;
                        offset = option[verify];
                        offset = golfie.bind(zuuluu)(offset);
                        yankee = offset.intl;
                        offset = yankee.string;
                        verify = option[verify];
                        verify = golfie.bind(zuuluu)(verify);
                        verify = verify.t;
                        verify = verify.j2POVl;
                        verify = offset.bind(yankee)(verify);
                        entity['label'] = verify;
                        verify = option[oscard];
                        verify = golfie.bind(zuuluu)(verify);
                        verify = verify.TableRow;
                        offset = verify.Icon;
                        verify = {};
                        yankee = 36;
                        yankee = option[yankee];
                        yankee = golfie.bind(zuuluu)(yankee);
                        yankee = yankee.FriendsIcon;
                        verify['IconComponent'] = yankee;
                        yankee = 'blurple';
                        verify['variant'] = yankee;
                        verify = tangon.bind(zuuluu)(offset, verify);
                        entity['icon'] = verify;
                        oscard = option[oscard];
                        oscard = golfie.bind(zuuluu)(oscard);
                        oscard = oscard.TableRow;
                        golfie = oscard.Arrow;
                        oscard = {};
                        oscard = tangon.bind(zuuluu)(golfie, oscard);
                        entity['trailing'] = oscard;
                        report = _closure1_slot22;
                        entity['onPress'] = report;
                        entity = tangon.bind(zuuluu)(michal, entity);
                        return entity;
                    };
                    michal['component'] = zuuluu;
                    entity = michal;
 518:
                    return entity;
                }
            };
            offset['getItemProps'] = kiloes;
            offset['getSectionProps'] = backup;
            backup = 12;
            offset['insetEnd'] = backup;
            offset['disableStickySections'] = foxtra;
            offset = romeon.bind(tangon)(yankee, offset);
            _fun00010_ip = 1631; continue _fun00009;
 1359:
            foxtra = _closure1_slot19;
            romeon = _closure1_slot8;
            yankee = {};
            backup = echoed.emptyContainer;
            yankee['style'] = backup;
            result = _closure1_slot18;
            kiloes = _closure1_slot7;
            backup = {};
            echoed = echoed.emptyActionContainer;
            backup['style'] = echoed;
            config = _closure1_slot0;
            record = _closure1_slot2;
            ctrled = 35;
            echoed = record[ctrled];
            echoed = config.bind(tangon)(echoed);
            update = echoed.TableRow;
            echoed = {'label': null, 'labelLineClamp': 1, 'icon': null, 'arrow': true, 'onPress': null, 'start': true, 'end': true};
            vacuum = 16;
            sequen = record[vacuum];
            sequen = config.bind(tangon)(sequen);
            cntext = sequen.intl;
            sequen = cntext.string;
            vacuum = record[vacuum];
            vacuum = config.bind(tangon)(vacuum);
            vacuum = vacuum.t;
            vacuum = vacuum.QzVsOj;
            vacuum = sequen.bind(cntext)(vacuum);
            echoed['label'] = vacuum;
            ctrled = record[ctrled];
            ctrled = config.bind(tangon)(ctrled);
            ctrled = ctrled.TableRow;
            vacuum = ctrled.Icon;
            ctrled = {};
            sequen = 37;
            sequen = record[sequen];
            sequen = config.bind(tangon)(sequen);
            sequen = sequen.AtIcon;
            ctrled['IconComponent'] = sequen;
            ctrled = result.bind(tangon)(vacuum, ctrled);
            echoed['icon'] = ctrled;
            echoed['onPress'] = source;
            echoed = result.bind(tangon)(update, echoed);
            backup['children'] = echoed;
            kiloes = result.bind(tangon)(kiloes, backup);
            backup = new Array(2);
            backup[0] = kiloes;
            kiloes = null;
            if(!output) { _fun00010_ip = 1617; continue _fun00009 }
 1585:
            result = _closure1_slot18;
            output = _closure1_slot1;
            echoed = _closure1_slot2;
            sizing = 41;
            sizing = echoed[sizing];
            output = output.bind(tangon)(sizing);
            sizing = {};
            kiloes = result.bind(tangon)(output, sizing);
 1617:
            backup[1] = kiloes;
            yankee['children'] = backup;
            offset = foxtra.bind(tangon)(romeon, yankee);
 1631:
            verify = offset;
 1634:
            option[1] = verify;
            oscard['children'] = option;
            oscard = zuuluu.bind(tangon)(golfie, oscard);
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();