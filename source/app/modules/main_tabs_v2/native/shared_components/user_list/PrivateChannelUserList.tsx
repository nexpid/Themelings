// app/modules/main_tabs_v2/native/shared_components/user_list/PrivateChannelUserList.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    golfie = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    golfie = tangon.bind(entity)(golfie);
    var _closure1_slot3 = golfie;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.RelationshipTypes;
    var _closure1_slot7 = option;
    tangon = tangon.MAX_GROUP_DM_PARTICIPANTS;
    var _closure1_slot8 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot9 = tangon;
    tangon = golfie.memo;
    michal = function(argFoo) { // Original name: PrivateChannelUserList
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            sizing = entity.channelId;
            var _closure2_slot0 = sizing;
            option = entity.disableStickySections;
            golfie = entity.listStyleOverride;
            oscard = entity.disableBottomSafeZone;
            report = entity.insetEnd;
            tangon = undefined;
            var _closure2_slot4 = tangon;
            var _closure2_slot5 = tangon;
            var _closure2_slot6 = tangon;
            verify = _closure1_slot1;
            offset = _closure1_slot2;
            zuuluu = 6;
            zuuluu = offset[zuuluu];
            zuuluu = verify.bind(tangon)(zuuluu);
            zuuluu = zuuluu.bind(tangon)();
            kiloes = zuuluu.analyticsLocations;
            var _closure2_slot1 = kiloes;
            yankee = _closure1_slot0;
            zuuluu = 7;
            romeon = offset[zuuluu];
            output = yankee.bind(tangon)(romeon);
            backup = output.useStateFromStores;
            romeon = _closure1_slot4;
            foxtra = new Array(1);
            foxtra[0] = romeon;
            romeon = function() {
                zuuluu = _closure1_slot4;
                michal = zuuluu.getChannel;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            romeon = backup.bind(output)(foxtra, romeon);
            var _closure2_slot2 = romeon;
            zuuluu = offset[zuuluu];
            output = yankee.bind(tangon)(zuuluu);
            backup = output.useStateFromStoresArray;
            zuuluu = _closure1_slot6;
            foxtra = new Array(1);
            foxtra[0] = zuuluu;
            yankee = new Array(1);
            yankee[0] = romeon;
            zuuluu = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot2;
                    entity = null;
                    if(!(entity == michal)) { _fun00004_ip = 22; continue _fun00003 }
 13:
                    entity = new Array(0);
                    _fun00004_ip = 163; continue _fun00003;
 22:
                    report = _closure1_slot1;
                    golfie = _closure1_slot2;
                    tangon = 8;
                    tangon = golfie[tangon];
                    oscard = undefined;
                    tangon = report.bind(oscard)(tangon);
                    zuuluu = _closure2_slot2;
                    zuuluu = zuuluu.recipients;
                    report = tangon.bind(oscard)(zuuluu);
                    tangon = report.map;
                    option = _closure1_slot6;
                    zuuluu = option.getUser;
                    report = tangon.bind(report)(zuuluu);
                    tangon = report.unshift;
                    zuuluu = option.getCurrentUser;
                    zuuluu = zuuluu.bind(option)();
                    tangon = tangon.bind(report)(zuuluu);
                    zuuluu = tangon.filter;
                    report = _closure1_slot0;
                    michal = 9;
                    michal = golfie[michal];
                    michal = report.bind(oscard)(michal);
                    michal = michal.isNotNullish;
                    tangon = zuuluu.bind(tangon)(michal);
                    zuuluu = tangon.sortBy;
                    michal = function(argFoo) {
                        entity = argFoo;
                        michal = entity.username;
                        entity = michal.toLowerCase;
                        entity = entity.bind(michal)();
                        return entity;
                    };
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = zuuluu.value;
                    entity = michal.bind(zuuluu)();
 163:
                    return entity;
                }
            };
            echoed = backup.bind(output)(foxtra, zuuluu, yankee);
            var _closure2_slot3 = echoed;
            zuuluu = 10;
            zuuluu = offset[zuuluu];
            verify = verify.bind(tangon)(zuuluu);
            zuuluu = {};
            zuuluu['channel'] = romeon;
            zuuluu = verify.bind(tangon)(zuuluu);
            verify = zuuluu.listActionRenderer;
            offset = zuuluu.listActionHeight;
            zuuluu = null;
            foxtra = zuuluu == romeon;
            yankee = undefined;
            if(foxtra) { _fun00002_ip = 248; continue _fun00001 }
 238:
            foxtra = romeon.isMultiUserDM;
            yankee = foxtra.bind(romeon)();
 248:
            result = zuuluu != yankee;
            if(!result) { _fun00002_ip = 258; continue _fun00001 }
 255:
            result = yankee;
 258:
            _closure2_slot4 = result;
            output = undefined;
            if(!result) { _fun00002_ip = 285; continue _fun00001 }
 267:
            foxtra = zuuluu == romeon;
            yankee = undefined;
            if(foxtra) { _fun00002_ip = 282; continue _fun00001 }
 276:
            yankee = romeon.ownerId;
 282:
            output = yankee;
 285:
            _closure2_slot5 = output;
            foxtra = zuuluu == romeon;
            yankee = undefined;
            if(foxtra) { _fun00002_ip = 304; continue _fun00001 }
 298:
            yankee = romeon.userLimit;
 304:
            romeon = zuuluu != yankee;
            zuuluu = 0;
            if(!romeon) { _fun00002_ip = 316; continue _fun00001 }
 313:
            zuuluu = yankee;
 316:
            _closure2_slot6 = zuuluu;
            backup = _closure1_slot3;
            foxtra = backup.useMemo;
            romeon = new Array(1);
            romeon[0] = echoed;
            yankee = function() {
                entity = _closure2_slot3;
                michal = entity.length;
                entity = new Array(1);
                entity[0] = michal;
                return entity;
            };
            foxtra = foxtra.bind(backup)(yankee, romeon);
            romeon = backup.useCallback;
            yankee = new Array(3);
            yankee[0] = result;
            yankee[1] = echoed;
            yankee[2] = zuuluu;
            zuuluu = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    oscard = _closure1_slot0;
                    golfie = _closure1_slot2;
                    entity = 11;
                    michal = golfie[entity];
                    tangon = undefined;
                    michal = oscard.bind(tangon)(michal);
                    zuuluu = michal.intl;
                    michal = zuuluu.string;
                    entity = golfie[entity];
                    entity = oscard.bind(tangon)(entity);
                    entity = entity.t;
                    entity = entity.9Oq93t;
                    option = michal.bind(zuuluu)(entity);
                    entity = _closure2_slot3;
                    golfie = entity.length;
                    entity = global;
                    michal = entity.HermesInternal;
                    oscard = michal.concat;
                    zuuluu = '';
                    michal = ' — ';
                    michal = oscard.bind(zuuluu)(option, michal, golfie);
                    oscard = _closure2_slot4;
                    zuuluu = michal;
                    if(!oscard) { _fun00006_ip = 156; continue _fun00005 }
 112:
                    golfie = _closure2_slot6;
                    oscard = 0;
                    if(!(!(golfie > oscard))) { _fun00006_ip = 128; continue _fun00005 }
 122:
                    report = _closure1_slot8;
                    _fun00006_ip = 132; continue _fun00005;
 128:
                    report = _closure2_slot6;
 132:
                    entity = entity.HermesInternal;
                    tangon = entity.concat;
                    entity = '/';
                    entity = tangon.bind(entity)(report);
                    zuuluu = michal + entity;
 156:
                    entity = {};
                    michal = 'section';
                    entity['type'] = michal;
                    michal = {};
                    michal['title'] = zuuluu;
                    entity['props'] = michal;
                    return entity;
                }
            };
            yankee = romeon.bind(backup)(zuuluu, yankee);
            romeon = backup.useCallback;
            zuuluu = new Array(5);
            zuuluu[0] = echoed;
            zuuluu[1] = result;
            zuuluu[2] = output;
            zuuluu[3] = sizing;
            zuuluu[4] = kiloes;
            michal = function(argFoo, argBar) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    report = argBar;
                    entity = 0;
                    tangon = entity === report;
                    michal = _closure2_slot3;
                    oscard = michal.length;
                    zuuluu = 1;
                    zuuluu = oscard - zuuluu;
                    zuuluu = report === zuuluu;
                    oscard = michal[report];
                    michal = null;
                    if(!(michal == oscard)) { _fun00008_ip = 68; continue _fun00007 }
 42:
                    michal = {};
                    report = 'placeholder';
                    michal['type'] = report;
                    report = {};
                    report['start'] = tangon;
                    report['end'] = zuuluu;
                    michal['props'] = report;
                    return michal;
 68:
                    report = _closure2_slot4;
                    if(!report) { _fun00008_ip = 88; continue _fun00007 }
 75:
                    michal = oscard.id;
                    entity = _closure2_slot5;
                    report = michal === entity;
 88:
                    entity = {};
                    michal = 'user';
                    entity['type'] = michal;
                    michal = {};
                    option = _closure1_slot7;
                    option = option.NONE;
                    michal['type'] = option;
                    michal['user'] = oscard;
                    option = _closure1_slot5;
                    golfie = option.getNickname;
                    oscard = oscard.id;
                    oscard = golfie.bind(option)(oscard);
                    michal['nickname'] = oscard;
                    oscard = function(argFoo) { // Original name: onPress
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 12;
                        michal = michal[entity];
                        entity = undefined;
                        zuuluu = zuuluu.bind(entity)(michal);
                        michal = {};
                        tangon = argFoo;
                        tangon = tangon.id;
                        michal['userId'] = tangon;
                        report = _closure2_slot1;
                        michal['sourceAnalyticsLocations'] = report;
                        tangon = _closure2_slot0;
                        michal['channelId'] = tangon;
                        michal = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    michal['onPress'] = oscard;
                    michal['isOwner'] = report;
                    michal['start'] = tangon;
                    michal['end'] = zuuluu;
                    entity['props'] = michal;
                    return entity;
                }
            };
            romeon = romeon.bind(backup)(michal, zuuluu);
            zuuluu = _closure1_slot9;
            michal = _closure1_slot0;
            backup = _closure1_slot2;
            entity = 13;
            entity = backup[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.UsersFastList;
            entity = {};
            entity['sections'] = foxtra;
            entity['getItemProps'] = romeon;
            entity['getSectionProps'] = yankee;
            entity['listHeaderSize'] = offset;
            entity['renderListHeader'] = verify;
            entity['disableStickySections'] = option;
            option = true;
            entity['disableBackgroundOverlay'] = option;
            entity['listStyleOverride'] = golfie;
            entity['disableBottomSafeZone'] = oscard;
            entity['insetEnd'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    michal = tangon.bind(golfie)(michal);
    tangon = 14;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/shared_components/user_list/PrivateChannelUserList.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();