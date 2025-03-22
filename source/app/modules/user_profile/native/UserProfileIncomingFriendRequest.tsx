// app/modules/user_profile/native/UserProfileIncomingFriendRequest.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot4 = tangon;
    offset = 2;
    tangon = oscard[offset];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot5 = tangon;
    tangon = oscard[offset];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsxs;
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {'rowGap': 16, 'flexWrap': 'wrap'};
    tangon['container'] = verify;
    verify = {'flexDirection': 'row', 'columnGap': 12};
    tangon['buttons'] = verify;
    verify = {};
    verify['paddingTop'] = offset;
    tangon['gameIcon'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 15;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/user_profile/native/UserProfileIncomingFriendRequest.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: UserProfileIncomingFriendRequest
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            output = entity.user;
            sizing = entity.channelId;
            kiloes = entity.guildId;
            foxtra = entity.isGameRelationship;
            report = undefined;
            if(!(foxtra === report)) { _fun00002_ip = 34; continue _fun00001 }
 32:
            foxtra = false;
 34:
            var _closure2_slot0 = foxtra;
            zuuluu = entity.applicationId;
            golfie = entity.style;
            echoed = entity.showUserProfile;
            var _closure2_slot1 = report;
            var _closure2_slot2 = report;
            var _closure2_slot3 = report;
            var _closure2_slot4 = report;
            var _closure2_slot5 = report;
            entity = _closure1_slot7;
            yankee = entity.bind(report)();
            _closure2_slot1 = yankee;
            romeon = _closure1_slot1;
            tangon = _closure1_slot2;
            entity = 4;
            entity = tangon[entity];
            entity = romeon.bind(report)(entity);
            option = entity.bind(report)();
            michal = _closure1_slot0;
            entity = 5;
            entity = tangon[entity];
            oscard = michal.bind(report)(entity);
            entity = oscard.useUserProfileAnalyticsContext;
            entity = entity.bind(oscard)();
            entity = entity.trackUserProfileAction;
            _closure2_slot2 = entity;
            oscard = 6;
            oscard = tangon[oscard];
            oscard = romeon.bind(report)(oscard);
            oscard = oscard.bind(report)();
            update = oscard.newestAnalyticsLocation;
            oscard = 7;
            oscard = tangon[oscard];
            backup = michal.bind(report)(oscard);
            verify = backup.useFriendRequestActions;
            oscard = {};
            source = output.id;
            oscard['userId'] = source;
            oscard['applicationId'] = zuuluu;
            oscard['isGameRelationship'] = foxtra;
            oscard['location'] = update;
            oscard['onConfirm'] = echoed;
            oscard['onCancel'] = echoed;
            verify = verify.bind(backup)(oscard);
            oscard = verify.acceptFriendRequest;
            _closure2_slot3 = oscard;
            backup = verify.cancelFriendRequest;
            _closure2_slot4 = backup;
            verify = 8;
            verify = tangon[verify];
            romeon = romeon.bind(report)(verify);
            verify = romeon.useName;
            ctrled = verify.bind(romeon)(kiloes, sizing, output);
            romeon = _closure1_slot3;
            kiloes = romeon.useCallback;
            verify = new Array(3);
            verify[0] = oscard;
            verify[1] = foxtra;
            verify[2] = entity;
            oscard = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot3;
                    entity = undefined;
                    michal = michal.bind(entity)();
                    zuuluu = _closure2_slot2;
                    michal = {};
                    report = _closure2_slot0;
                    tangon = 'ACCEPT_FRIEND_REQUEST';
                    if(!report) { _fun00004_ip = 38; continue _fun00003 }
 32:
                    tangon = 'ACCEPT_GAME_FRIEND_REQUEST';
 38:
                    michal['action'] = tangon;
                    michal = zuuluu.bind(entity)(michal);
                    return entity;
                }
            };
            sizing = kiloes.bind(romeon)(oscard, verify);
            verify = romeon.useCallback;
            oscard = new Array(3);
            oscard[0] = backup;
            oscard[1] = foxtra;
            oscard[2] = entity;
            entity = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    michal = _closure2_slot4;
                    entity = undefined;
                    michal = michal.bind(entity)();
                    zuuluu = _closure2_slot2;
                    michal = {};
                    report = _closure2_slot0;
                    tangon = 'IGNORE_FRIEND_REQUEST';
                    if(!report) { _fun00006_ip = 38; continue _fun00005 }
 32:
                    tangon = 'IGNORE_GAME_FRIEND_REQUEST';
 38:
                    michal['action'] = tangon;
                    michal = zuuluu.bind(entity)(michal);
                    return entity;
                }
            };
            backup = verify.bind(romeon)(entity, oscard);
            update = null;
            vacuum = update != zuuluu;
            entity = 9;
            entity = tangon[entity];
            michal = michal.bind(report)(entity);
            entity = michal.useGetOrFetchApplication;
            source = entity.bind(michal)(zuuluu);
            _closure2_slot5 = source;
            if(!vacuum) { _fun00002_ip = 393; continue _fun00001 }
 381:
            michal = update == source;
            entity = null;
            if(michal) { _fun00002_ip = 907; continue _fun00001 }
 393:
            tangon = _closure1_slot6;
            zuuluu = _closure1_slot4;
            michal = {};
            verify = yankee.container;
            oscard = new Array(3);
            oscard[0] = verify;
            option = option.card;
            oscard[1] = option;
            oscard[2] = golfie;
            michal['style'] = oscard;
            option = _closure1_slot5;
            golfie = _closure1_slot0;
            verify = _closure1_slot2;
            oscard = 10;
            oscard = verify[oscard];
            oscard = golfie.bind(report)(oscard);
            golfie = oscard.Text;
            verify = {'variant': 'text-sm/semibold', 'color': 'header-secondary'};
            romeon = _closure1_slot0;
            oscard = _closure1_slot2;
            echoed = 11;
            kiloes = oscard[echoed];
            kiloes = romeon.bind(report)(kiloes);
            output = kiloes.intl;
            kiloes = output.format;
            if(vacuum) { _fun00002_ip = 551; continue _fun00001 }
 510:
            oscard = oscard[echoed];
            oscard = romeon.bind(report)(oscard);
            oscard = oscard.t;
            romeon = oscard.uIomX1;
            oscard = {};
            oscard['username'] = ctrled;
            oscard = kiloes.bind(output)(romeon, oscard);
            verify['children'] = oscard;
            oscard = verify;
            _fun00002_ip = 644; continue _fun00001;
 551:
            vacuum = _closure1_slot0;
            romeon = _closure1_slot2;
            romeon = romeon[echoed];
            romeon = vacuum.bind(report)(romeon);
            romeon = romeon.t;
            if(foxtra) { _fun00002_ip = 586; continue _fun00001 }
 576:
            foxtra = romeon.V15uUF;
            _fun00002_ip = 594; continue _fun00001;
 586:
            foxtra = romeon.syHjLC;
 594:
            romeon = {};
            romeon['username'] = ctrled;
            ctrled = update == source;
            update = undefined;
            if(ctrled) { _fun00002_ip = 614; continue _fun00001 }
 609:
            update = source.name;
 614:
            romeon['applicationName'] = update;
            result = function() { // Original name: applicationIcon
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zuuluu = _closure2_slot5;
                    entity = null;
                    zuuluu = entity == zuuluu;
                    if(zuuluu) { _fun00008_ip = 164; continue _fun00007 }
 19:
                    oscard = _closure1_slot5;
                    yankee = _closure1_slot1;
                    verify = _closure1_slot2;
                    golfie = 12;
                    zuuluu = verify[golfie];
                    report = undefined;
                    tangon = yankee.bind(report)(zuuluu);
                    zuuluu = {};
                    offset = 13;
                    offset = verify[offset];
                    romeon = yankee.bind(report)(offset);
                    yankee = romeon.getApplicationIconSource;
                    offset = {};
                    foxtra = _closure2_slot5;
                    foxtra = foxtra.id;
                    offset['id'] = foxtra;
                    foxtra = _closure2_slot5;
                    foxtra = foxtra.icon;
                    offset['icon'] = foxtra;
                    offset = yankee.bind(romeon)(offset);
                    zuuluu['source'] = offset;
                    option = _closure1_slot0;
                    golfie = verify[golfie];
                    golfie = option.bind(report)(golfie);
                    golfie = golfie.AvatarSizes;
                    golfie = golfie.XXSMALL;
                    zuuluu['size'] = golfie;
                    golfie = _closure2_slot1;
                    golfie = golfie.gameIcon;
                    zuuluu['style'] = golfie;
                    michal = _closure2_slot5;
                    michal = michal.id;
                    entity = oscard.bind(report)(tangon, zuuluu, michal);
 164:
                    return entity;
                }
            };
            romeon['applicationIcon'] = result;
            romeon = kiloes.bind(output)(foxtra, romeon);
            verify['children'] = romeon;
            oscard = verify;
 644:
            golfie = option.bind(report)(golfie, oscard);
            oscard = new Array(2);
            oscard[0] = golfie;
            verify = _closure1_slot6;
            option = _closure1_slot4;
            golfie = {};
            yankee = yankee.buttons;
            golfie['style'] = yankee;
            foxtra = _closure1_slot5;
            result = _closure1_slot0;
            kiloes = _closure1_slot2;
            yankee = 14;
            offset = kiloes[yankee];
            offset = result.bind(report)(offset);
            romeon = offset.Button;
            offset = {'size': 'sm', 'variant': 'primary'};
            output = kiloes[echoed];
            output = result.bind(report)(output);
            source = output.intl;
            update = source.string;
            output = kiloes[echoed];
            output = result.bind(report)(output);
            output = output.t;
            output = output.ZcibdX;
            output = update.bind(source)(output);
            offset['text'] = output;
            offset['onPress'] = sizing;
            romeon = foxtra.bind(report)(romeon, offset);
            offset = new Array(2);
            offset[0] = romeon;
            yankee = kiloes[yankee];
            yankee = result.bind(report)(yankee);
            romeon = yankee.Button;
            yankee = {'size': 'sm', 'variant': 'secondary'};
            sizing = kiloes[echoed];
            sizing = result.bind(report)(sizing);
            output = sizing.intl;
            sizing = output.string;
            kiloes = kiloes[echoed];
            kiloes = result.bind(report)(kiloes);
            kiloes = kiloes.t;
            kiloes = kiloes.xuio0N;
            kiloes = sizing.bind(output)(kiloes);
            yankee['text'] = kiloes;
            yankee['onPress'] = backup;
            yankee = foxtra.bind(report)(romeon, yankee);
            offset[1] = yankee;
            golfie['children'] = offset;
            golfie = verify.bind(report)(option, golfie);
            oscard[1] = golfie;
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 907:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();