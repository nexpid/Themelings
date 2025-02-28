// app/modules/guild_member_verification/native/components/MemberVerificationScreen.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    yankee = argBaz;
    golfie = argCor;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = golfie;
    var _closure1_slot3 = oscard;
    entity = function(argFoo) { // Original name: MemberVerificationRouteView
        tangon = _closure1_slot11;
        michal = _closure1_slot1;
        zuuluu = _closure1_slot3;
        entity = 9;
        entity = zuuluu[entity];
        zuuluu = undefined;
        michal = michal.bind(zuuluu)(entity);
        entity = {};
        oscard = argFoo;
        golfie = entity;
        report = copyDataProperties(golfie, oscard);
        entity = tangon.bind(zuuluu)(michal, entity);
        return entity;
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo) { // Original name: ExistingJoinRequestHandler
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            yankee = entity.guildId;
            var _closure2_slot0 = yankee;
            offset = entity.onClose;
            var _closure2_slot1 = offset;
            michal = entity.children;
            oscard = _closure1_slot0;
            option = _closure1_slot3;
            zuuluu = 10;
            golfie = option[zuuluu];
            tangon = undefined;
            foxtra = oscard.bind(tangon)(golfie);
            romeon = foxtra.useStateFromStores;
            golfie = _closure1_slot8;
            verify = new Array(1);
            verify[0] = golfie;
            golfie = function() {
                zuuluu = _closure1_slot8;
                michal = zuuluu.getGuild;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            romeon = romeon.bind(foxtra)(verify, golfie);
            var _closure2_slot2 = romeon;
            golfie = option[zuuluu];
            kiloes = oscard.bind(tangon)(golfie);
            backup = kiloes.useStateFromStores;
            golfie = _closure1_slot7;
            foxtra = new Array(1);
            foxtra[0] = golfie;
            verify = new Array(1);
            verify[0] = romeon;
            golfie = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = _closure2_slot2;
                    michal = null;
                    tangon = michal != entity;
                    entity = null;
                    if(!tangon) { _fun00004_ip = 62; continue _fun00003 }
 18:
                    report = _closure1_slot7;
                    tangon = report.getDefaultChannel;
                    zuuluu = _closure2_slot2;
                    zuuluu = zuuluu.id;
                    zuuluu = tangon.bind(report)(zuuluu);
                    tangon = michal == zuuluu;
                    michal = undefined;
                    if(tangon) { _fun00004_ip = 59; continue _fun00003 }
 54:
                    michal = zuuluu.id;
 59:
                    entity = michal;
 62:
                    return entity;
                }
            };
            verify = backup.bind(kiloes)(foxtra, golfie, verify);
            var _closure2_slot3 = verify;
            zuuluu = option[zuuluu];
            foxtra = oscard.bind(tangon)(zuuluu);
            golfie = foxtra.useStateFromStores;
            zuuluu = _closure1_slot9;
            oscard = new Array(1);
            oscard[0] = zuuluu;
            zuuluu = function() {
                zuuluu = _closure1_slot9;
                michal = zuuluu.getRequest;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            oscard = golfie.bind(foxtra)(oscard, zuuluu);
            golfie = _closure1_slot1;
            zuuluu = 11;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(tangon)(zuuluu);
            zuuluu = zuuluu.bind(tangon)(oscard);
            var _closure2_slot4 = zuuluu;
            foxtra = _closure1_slot4;
            option = foxtra.useEffect;
            golfie = new Array(3);
            golfie[0] = yankee;
            golfie[1] = zuuluu;
            golfie[2] = offset;
            oscard = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zuuluu = _closure2_slot4;
                    entity = null;
                    zuuluu = entity == zuuluu;
                    entity = undefined;
                    report = undefined;
                    if(zuuluu) { _fun00006_ip = 30; continue _fun00005 }
 20:
                    zuuluu = _closure2_slot4;
                    report = zuuluu.applicationStatus;
 30:
                    oscard = _closure1_slot0;
                    tangon = _closure1_slot3;
                    golfie = 12;
                    tangon = tangon[golfie];
                    tangon = oscard.bind(entity)(tangon);
                    tangon = tangon.GuildJoinRequestApplicationStatuses;
                    tangon = tangon.SUBMITTED;
                    if(!(tangon !== report)) { _fun00006_ip = 160; continue _fun00005 }
 69:
                    oscard = _closure1_slot0;
                    tangon = _closure1_slot3;
                    tangon = tangon[golfie];
                    tangon = oscard.bind(entity)(tangon);
                    tangon = tangon.GuildJoinRequestApplicationStatuses;
                    tangon = tangon.REJECTED;
                    if(!(tangon === report)) { _fun00006_ip = 203; continue _fun00005 }
 102:
                    tangon = _closure2_slot1;
                    tangon = tangon.bind(entity)();
                    report = _closure1_slot0;
                    oscard = _closure1_slot3;
                    tangon = 13;
                    tangon = oscard[tangon];
                    oscard = report.bind(entity)(tangon);
                    report = oscard.openMemberVerificationRejectedAlert;
                    tangon = {};
                    golfie = _closure2_slot0;
                    tangon['guildId'] = golfie;
                    golfie = true;
                    tangon['canWithdraw'] = golfie;
                    tangon = report.bind(oscard)(tangon);
                    _fun00006_ip = 203; continue _fun00005;
 160:
                    tangon = _closure2_slot1;
                    tangon = tangon.bind(entity)();
                    tangon = _closure1_slot0;
                    report = _closure1_slot3;
                    zuuluu = 13;
                    zuuluu = report[zuuluu];
                    tangon = tangon.bind(entity)(zuuluu);
                    zuuluu = tangon.openMemberVerificationPendingAlert;
                    michal = _closure2_slot0;
                    michal = zuuluu.bind(tangon)(michal);
 203:
                    return entity;
                }
            };
            oscard = option.bind(foxtra)(oscard, golfie);
            option = _closure1_slot4;
            golfie = option.useEffect;
            oscard = new Array(4);
            oscard[0] = romeon;
            oscard[1] = yankee;
            oscard[2] = offset;
            oscard[3] = verify;
            report = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    michal = _closure2_slot2;
                    zuuluu = null;
                    if(!(zuuluu != michal)) { _fun00008_ip = 29; continue _fun00007 }
 13:
                    michal = _closure2_slot0;
                    if(!(zuuluu != michal)) { _fun00008_ip = 29; continue _fun00007 }
 21:
                    michal = _closure2_slot3;
                    if(!(zuuluu == michal)) { _fun00008_ip = 49; continue _fun00007 }
 29:
                    michal = _closure2_slot0;
                    if(!(zuuluu == michal)) { _fun00008_ip = 109; continue _fun00007 }
 37:
                    zuuluu = _closure2_slot1;
                    michal = undefined;
                    michal = zuuluu.bind(michal)();
                    _fun00008_ip = 109; continue _fun00007;
 49:
                    report = _closure1_slot2;
                    zuuluu = _closure1_slot3;
                    michal = 14;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    zuuluu = report.bind(michal)(zuuluu);
                    michal = zuuluu.transitionTo;
                    oscard = _closure1_slot10;
                    report = oscard.CHANNEL;
                    tangon = _closure2_slot0;
                    entity = _closure2_slot3;
                    entity = report.bind(oscard)(tangon, entity);
                    entity = michal.bind(zuuluu)(entity);
 109:
                    entity = undefined;
                    return entity;
                }
            };
            report = golfie.bind(option)(report, oscard);
            report = null;
            oscard = report == zuuluu;
            report = undefined;
            if(oscard) { _fun00002_ip = 301; continue _fun00001 }
 295:
            report = zuuluu.applicationStatus;
 301:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            golfie = 12;
            zuuluu = zuuluu[golfie];
            zuuluu = oscard.bind(tangon)(zuuluu);
            zuuluu = zuuluu.GuildJoinRequestApplicationStatuses;
            zuuluu = zuuluu.SUBMITTED;
            if(!(zuuluu !== report)) { _fun00002_ip = 405; continue _fun00001 }
 337:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu[golfie];
            zuuluu = oscard.bind(tangon)(zuuluu);
            zuuluu = zuuluu.GuildJoinRequestApplicationStatuses;
            zuuluu = zuuluu.APPROVED;
            if(!(zuuluu !== report)) { _fun00002_ip = 405; continue _fun00001 }
 370:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu[golfie];
            zuuluu = oscard.bind(tangon)(zuuluu);
            zuuluu = zuuluu.GuildJoinRequestApplicationStatuses;
            zuuluu = zuuluu.REJECTED;
            if(!(zuuluu !== report)) { _fun00002_ip = 405; continue _fun00001 }
 403:
            return michal;
 405:
            zuuluu = _closure1_slot11;
            michal = _closure1_slot13;
            entity = {};
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot15 = entity;
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
    var _closure1_slot4 = tangon;
    romeon = 1;
    tangon = oscard[romeon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.View;
    var _closure1_slot5 = golfie;
    tangon = tangon.ActivityIndicator;
    var _closure1_slot6 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Routes;
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
    verify['flex'] = romeon;
    tangon['flex'] = verify;
    verify = {'flex': 1, 'alignItems': 'center', 'justifyContent': 'center'};
    offset = 8;
    foxtra = oscard[offset];
    foxtra = yankee.bind(entity)(foxtra);
    foxtra = foxtra.colors;
    foxtra = foxtra.BACKGROUND_PRIMARY;
    verify['backgroundColor'] = foxtra;
    tangon['flexLoading'] = verify;
    verify = {};
    verify['flex'] = romeon;
    foxtra = oscard[offset];
    foxtra = yankee.bind(entity)(foxtra);
    foxtra = foxtra.colors;
    foxtra = foxtra.BACKGROUND_PRIMARY;
    verify['backgroundColor'] = foxtra;
    tangon['container'] = verify;
    verify = {};
    verify['flex'] = romeon;
    offset = oscard[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.BACKGROUND_PRIMARY;
    verify['backgroundColor'] = offset;
    tangon['scrollContainer'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot12 = tangon;
    tangon = function() { // Original name: Loading
        entity = _closure1_slot12;
        tangon = undefined;
        report = entity.bind(tangon)();
        zuuluu = _closure1_slot11;
        michal = _closure1_slot5;
        entity = {};
        report = report.flexLoading;
        entity['style'] = report;
        golfie = _closure1_slot11;
        oscard = _closure1_slot6;
        report = {'animating': true, 'color': null, 'size': 'large'};
        verify = _closure1_slot1;
        offset = _closure1_slot3;
        option = 8;
        option = offset[option];
        option = verify.bind(tangon)(option);
        option = option.unsafe_rawColors;
        option = option.BRAND_500;
        report['color'] = option;
        report = golfie.bind(tangon)(oscard, report);
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot13 = tangon;
    tangon = 17;
    tangon = oscard[tangon];
    golfie = report.bind(entity)(tangon);
    tangon = golfie.makeAuthenticated;
    michal = function(argFoo) { // Original name: MemberVerificationRouteContainer
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            michal = argFoo;
            golfie = michal.navigation;
            var _closure2_slot0 = golfie;
            michal = michal.route;
            michal = michal.params;
            foxtra = michal.guildId;
            zuuluu = _closure1_slot12;
            report = undefined;
            verify = zuuluu.bind(report)();
            oscard = _closure1_slot4;
            tangon = oscard.useCallback;
            zuuluu = new Array(1);
            zuuluu[0] = golfie;
            entity = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    zuuluu = _closure2_slot0;
                    michal = zuuluu.getState;
                    michal = michal.bind(zuuluu)();
                    verify = michal.routes;
                    report = michal.index;
                    zuuluu = verify.length;
                    michal = 1;
                    if(!(!(zuuluu > michal))) { _fun00012_ip = 92; continue _fun00011 }
 40:
                    oscard = _closure1_slot0;
                    tangon = _closure1_slot3;
                    zuuluu = 15;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    oscard = oscard.bind(zuuluu)(tangon);
                    tangon = oscard.navigateToRootTab;
                    zuuluu = {};
                    golfie = 'messages';
                    zuuluu['screen'] = golfie;
                    zuuluu = tangon.bind(oscard)(zuuluu);
                    _fun00012_ip = 220; continue _fun00011;
 92:
                    michal = report - michal;
                    zuuluu = verify[michal];
                    option = null;
                    tangon = option == zuuluu;
                    oscard = undefined;
                    michal = undefined;
                    if(tangon) { _fun00012_ip = 118; continue _fun00011 }
 113:
                    michal = zuuluu.name;
 118:
                    golfie = 'member-verification';
                    if(!(golfie === michal)) { _fun00012_ip = 206; continue _fun00011 }
 128:
                    tangon = 0;
                    zuuluu = report;
                    if(!(zuuluu >= tangon)) { _fun00012_ip = 220; continue _fun00011 }
 137:
                    offset = verify[zuuluu];
                    michal = zuuluu;
                    if(!(option != offset)) { _fun00012_ip = 220; continue _fun00011 }
 148:
                    offset = offset.name;
                    if(!(golfie === offset)) { _fun00012_ip = 166; continue _fun00011 }
 157:
                    zuuluu = michal - 1;
                    if(zuuluu >= tangon) { _fun00012_ip = 137; continue _fun00011 }
 164:
                    _fun00012_ip = 220; continue _fun00011;
 166:
                    tangon = _closure1_slot0;
                    golfie = _closure1_slot3;
                    zuuluu = 15;
                    zuuluu = golfie[zuuluu];
                    tangon = tangon.bind(oscard)(zuuluu);
                    zuuluu = tangon.popScreens;
                    michal = report - michal;
                    michal = zuuluu.bind(tangon)(michal);
                    _fun00012_ip = 220; continue _fun00011;
 206:
                    michal = _closure2_slot0;
                    entity = michal.goBack;
                    entity = entity.bind(michal)();
 220:
                    entity = undefined;
                    return entity;
                }
            };
            romeon = tangon.bind(oscard)(entity, zuuluu);
            entity = null;
            if(!(entity != foxtra)) { _fun00010_ip = 182; continue _fun00009 }
 81:
            tangon = _closure1_slot11;
            zuuluu = _closure1_slot15;
            entity = {};
            entity['guildId'] = foxtra;
            entity['onClose'] = romeon;
            option = _closure1_slot11;
            golfie = _closure1_slot1;
            offset = _closure1_slot3;
            oscard = 16;
            oscard = offset[oscard];
            golfie = golfie.bind(report)(oscard);
            oscard = {};
            verify = verify.flex;
            oscard['style'] = verify;
            yankee = _closure1_slot11;
            offset = _closure1_slot14;
            verify = {};
            verify['guildId'] = foxtra;
            verify['onClose'] = romeon;
            verify = yankee.bind(report)(offset, verify);
            oscard['children'] = verify;
            oscard = option.bind(report)(golfie, oscard);
            entity['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, entity);
            _fun00010_ip = 198; continue _fun00009;
 182:
            tangon = _closure1_slot11;
            zuuluu = _closure1_slot13;
            michal = {};
            entity = tangon.bind(report)(zuuluu, michal);
 198:
            return entity;
        }
    };
    michal = tangon.bind(golfie)(michal);
    tangon = 18;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_member_verification/native/components/MemberVerificationScreen.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();