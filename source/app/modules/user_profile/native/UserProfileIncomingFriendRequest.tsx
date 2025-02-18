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
    verify = {'flexDirection': 'row', 'rowGap': 16, 'columnGap': 12, 'flexWrap': 'wrap'};
    tangon['container'] = verify;
    verify = {};
    yankee = '100%';
    verify['flexBasis'] = yankee;
    tangon['text'] = verify;
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
            foxtra = entity.guildId;
            backup = entity.isGameRelationship;
            report = undefined;
            if(!(backup === report)) { _fun00002_ip = 34; continue _fun00001 }
 32:
            backup = false;
 34:
            var _closure2_slot0 = backup;
            zuuluu = entity.applicationId;
            verify = entity.style;
            echoed = entity.showUserProfile;
            var _closure2_slot1 = report;
            var _closure2_slot2 = report;
            var _closure2_slot3 = report;
            var _closure2_slot4 = report;
            var _closure2_slot5 = report;
            entity = _closure1_slot7;
            oscard = entity.bind(report)();
            _closure2_slot1 = oscard;
            romeon = _closure1_slot1;
            tangon = _closure1_slot2;
            entity = 4;
            entity = tangon[entity];
            entity = romeon.bind(report)(entity);
            yankee = entity.bind(report)();
            michal = _closure1_slot0;
            entity = 5;
            entity = tangon[entity];
            option = michal.bind(report)(entity);
            entity = option.useUserProfileAnalyticsContext;
            entity = entity.bind(option)();
            entity = entity.trackUserProfileAction;
            _closure2_slot2 = entity;
            option = 6;
            option = tangon[option];
            option = romeon.bind(report)(option);
            option = option.bind(report)();
            update = option.newestAnalyticsLocation;
            option = 7;
            option = tangon[option];
            kiloes = michal.bind(report)(option);
            offset = kiloes.useFriendRequestActions;
            option = {};
            source = output.id;
            option['userId'] = source;
            option['applicationId'] = zuuluu;
            option['isGameRelationship'] = backup;
            option['location'] = update;
            option['onConfirm'] = echoed;
            option['onCancel'] = echoed;
            offset = offset.bind(kiloes)(option);
            option = offset.acceptFriendRequest;
            _closure2_slot3 = option;
            kiloes = offset.cancelFriendRequest;
            _closure2_slot4 = kiloes;
            offset = 8;
            offset = tangon[offset];
            romeon = romeon.bind(report)(offset);
            offset = romeon.useName;
            source = offset.bind(romeon)(foxtra, sizing, output);
            romeon = _closure1_slot3;
            foxtra = romeon.useCallback;
            offset = new Array(3);
            offset[0] = option;
            offset[1] = backup;
            offset[2] = entity;
            option = function() {
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
            foxtra = foxtra.bind(romeon)(option, offset);
            offset = romeon.useCallback;
            option = new Array(3);
            option[0] = kiloes;
            option[1] = backup;
            option[2] = entity;
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
            offset = offset.bind(romeon)(entity, option);
            echoed = null;
            ctrled = echoed != zuuluu;
            entity = 9;
            entity = tangon[entity];
            michal = michal.bind(report)(entity);
            entity = michal.useGetOrFetchApplication;
            update = entity.bind(michal)(zuuluu);
            _closure2_slot5 = update;
            if(!ctrled) { _fun00002_ip = 393; continue _fun00001 }
 381:
            michal = echoed == update;
            entity = null;
            if(michal) { _fun00002_ip = 874; continue _fun00001 }
 393:
            tangon = _closure1_slot6;
            zuuluu = _closure1_slot4;
            michal = {};
            romeon = oscard.container;
            option = new Array(3);
            option[0] = romeon;
            yankee = yankee.card;
            option[1] = yankee;
            option[2] = verify;
            michal['style'] = option;
            verify = _closure1_slot5;
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            option = 10;
            option = romeon[option];
            option = yankee.bind(report)(option);
            option = option.Text;
            yankee = {'variant': 'text-sm/semibold', 'color': 'header-secondary'};
            oscard = oscard.text;
            yankee['style'] = oscard;
            romeon = _closure1_slot0;
            oscard = _closure1_slot2;
            kiloes = 11;
            sizing = oscard[kiloes];
            sizing = romeon.bind(report)(sizing);
            output = sizing.intl;
            sizing = output.format;
            if(ctrled) { _fun00002_ip = 560; continue _fun00001 }
 519:
            oscard = oscard[kiloes];
            oscard = romeon.bind(report)(oscard);
            oscard = oscard.t;
            romeon = oscard.uIomX1;
            oscard = {};
            oscard['username'] = source;
            oscard = sizing.bind(output)(romeon, oscard);
            yankee['children'] = oscard;
            oscard = yankee;
            _fun00002_ip = 653; continue _fun00001;
 560:
            ctrled = _closure1_slot0;
            romeon = _closure1_slot2;
            romeon = romeon[kiloes];
            romeon = ctrled.bind(report)(romeon);
            romeon = romeon.t;
            if(backup) { _fun00002_ip = 595; continue _fun00001 }
 585:
            backup = romeon.V15uUF;
            _fun00002_ip = 603; continue _fun00001;
 595:
            backup = romeon.syHjLC;
 603:
            romeon = {};
            romeon['username'] = source;
            source = echoed == update;
            echoed = undefined;
            if(source) { _fun00002_ip = 623; continue _fun00001 }
 618:
            echoed = update.name;
 623:
            romeon['applicationName'] = echoed;
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
            romeon = sizing.bind(output)(backup, romeon);
            yankee['children'] = romeon;
            oscard = yankee;
 653:
            option = verify.bind(report)(option, oscard);
            oscard = new Array(3);
            oscard[0] = option;
            verify = _closure1_slot5;
            backup = _closure1_slot0;
            yankee = _closure1_slot2;
            golfie = 14;
            option = yankee[golfie];
            option = backup.bind(report)(option);
            romeon = option.Button;
            option = {'size': 'sm', 'variant': 'primary'};
            sizing = yankee[kiloes];
            sizing = backup.bind(report)(sizing);
            result = sizing.intl;
            output = result.string;
            sizing = yankee[kiloes];
            sizing = backup.bind(report)(sizing);
            sizing = sizing.t;
            sizing = sizing.ZcibdX;
            sizing = output.bind(result)(sizing);
            option['text'] = sizing;
            option['onPress'] = foxtra;
            option = verify.bind(report)(romeon, option);
            oscard[1] = option;
            golfie = yankee[golfie];
            golfie = backup.bind(report)(golfie);
            option = golfie.Button;
            golfie = {'size': 'sm', 'variant': 'secondary'};
            romeon = yankee[kiloes];
            romeon = backup.bind(report)(romeon);
            foxtra = romeon.intl;
            romeon = foxtra.string;
            yankee = yankee[kiloes];
            yankee = backup.bind(report)(yankee);
            yankee = yankee.t;
            yankee = yankee.xuio0N;
            yankee = romeon.bind(foxtra)(yankee);
            golfie['text'] = yankee;
            golfie['onPress'] = offset;
            golfie = verify.bind(report)(option, golfie);
            oscard[2] = golfie;
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 874:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();