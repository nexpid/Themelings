// app/modules/user_settings/native/BlockedUserRowV2.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
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
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot4 = tangon;
    tangon = function(argFoo) { // Original name: handleUnblockUser
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 3;
        michal = michal[entity];
        entity = undefined;
        report = zuuluu.bind(entity)(michal);
        tangon = report.unblockUser;
        zuuluu = {};
        michal = 'blocked-users-list-mobile-v2';
        zuuluu['location'] = michal;
        michal = argFoo;
        michal = tangon.bind(report)(michal, zuuluu);
        return entity;
    };
    var _closure1_slot5 = tangon;
    tangon = function(argFoo) { // Original name: BlockedUserRow
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            verify = entity.userRecord;
            var _closure2_slot0 = verify;
            golfie = _closure1_slot1;
            romeon = _closure1_slot2;
            entity = 4;
            entity = romeon[entity];
            tangon = undefined;
            entity = golfie.bind(tangon)(entity);
            entity = entity.bind(tangon)();
            entity = entity.analyticsLocations;
            var _closure2_slot1 = entity;
            zuuluu = _closure1_slot4;
            yankee = _closure1_slot0;
            entity = 5;
            entity = romeon[entity];
            entity = yankee.bind(tangon)(entity);
            michal = entity.TableRow;
            entity = {'icon': null, 'label': null, 'subLabel': null, 'labelLineClamp': 1, 'subLabelLineClamp': 1, 'accessibilityRole': 'button'};
            offset = 6;
            oscard = romeon[offset];
            golfie = golfie.bind(tangon)(oscard);
            oscard = {};
            oscard['user'] = verify;
            oscard['guildId'] = tangon;
            offset = romeon[offset];
            offset = yankee.bind(tangon)(offset);
            offset = offset.AvatarSizes;
            offset = offset.REFRESH_MEDIUM_32;
            oscard['size'] = offset;
            oscard = zuuluu.bind(tangon)(golfie, oscard);
            entity['icon'] = oscard;
            golfie = null;
            oscard = golfie != verify;
            if(!oscard) { _fun00002_ip = 176; continue _fun00001 }
 158:
            offset = verify.globalName;
            if(!(golfie == offset)) { _fun00002_ip = 173; continue _fun00001 }
 168:
            offset = verify.username;
 173:
            oscard = offset;
 176:
            entity['label'] = oscard;
            offset = golfie == verify;
            oscard = undefined;
            if(offset) { _fun00002_ip = 197; continue _fun00001 }
 191:
            oscard = verify.globalName;
 197:
            offset = golfie != oscard;
            oscard = undefined;
            if(!offset) { _fun00002_ip = 223; continue _fun00001 }
 206:
            offset = golfie == verify;
            golfie = undefined;
            if(offset) { _fun00002_ip = 220; continue _fun00001 }
 215:
            golfie = verify.username;
 220:
            oscard = golfie;
 223:
            entity['subLabel'] = oscard;
            golfie = {};
            oscard = 'unblock';
            golfie['name'] = oscard;
            romeon = _closure1_slot0;
            foxtra = _closure1_slot2;
            verify = 7;
            oscard = foxtra[verify];
            oscard = romeon.bind(tangon)(oscard);
            yankee = oscard.intl;
            offset = yankee.string;
            oscard = foxtra[verify];
            oscard = romeon.bind(tangon)(oscard);
            oscard = oscard.t;
            oscard = oscard.XyHpKC;
            oscard = offset.bind(yankee)(oscard);
            golfie['label'] = oscard;
            oscard = new Array(1);
            oscard[0] = golfie;
            entity['accessibilityActions'] = oscard;
            oscard = function(argFoo) { // Original name: onAccessibilityAction
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = argFoo;
                    entity = entity.nativeEvent;
                    michal = entity.actionName;
                    entity = 'unblock';
                    if(!(entity !== michal)) { _fun00004_ip = 26; continue _fun00003 }
 22:
                    entity = undefined;
                    return entity;
 26:
                    zuuluu = _closure1_slot5;
                    entity = _closure2_slot0;
                    michal = entity.id;
                    entity = undefined;
                    michal = zuuluu.bind(entity)(michal);
                    return entity;
                }
            };
            entity['onAccessibilityAction'] = oscard;
            oscard = function() { // Original name: onPress
                michal = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 8;
                entity = zuuluu[entity];
                zuuluu = undefined;
                michal = michal.bind(zuuluu)(entity);
                entity = {};
                report = _closure2_slot0;
                report = report.id;
                entity['userId'] = report;
                tangon = _closure2_slot1;
                entity['sourceAnalyticsLocations'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            entity['onPress'] = oscard;
            golfie = _closure1_slot4;
            report = 9;
            report = foxtra[report];
            report = romeon.bind(tangon)(report);
            oscard = report.Button;
            report = {'size': 'sm', 'variant': 'secondary'};
            offset = foxtra[verify];
            offset = romeon.bind(tangon)(offset);
            yankee = offset.intl;
            offset = yankee.string;
            verify = foxtra[verify];
            verify = romeon.bind(tangon)(verify);
            verify = verify.t;
            verify = verify.PR/xU1;
            verify = offset.bind(yankee)(verify);
            report['text'] = verify;
            option = function() { // Original name: onPress
                zuuluu = _closure1_slot5;
                entity = _closure2_slot0;
                michal = entity.id;
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            report['onPress'] = option;
            report = golfie.bind(tangon)(oscard, report);
            entity['trailing'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot6 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/user_settings/native/BlockedUserRowV2.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: ConnectedBlockedUserRow
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            michal = michal.userId;
            var _closure2_slot0 = michal;
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            zuuluu = 10;
            zuuluu = report[zuuluu];
            report = undefined;
            oscard = tangon.bind(report)(zuuluu);
            tangon = oscard.useStateFromStores;
            golfie = _closure1_slot3;
            zuuluu = new Array(1);
            zuuluu[0] = golfie;
            entity = function() {
                zuuluu = _closure1_slot3;
                michal = zuuluu.getUser;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            oscard = tangon.bind(oscard)(zuuluu, entity);
            entity = null;
            zuuluu = entity == oscard;
            if(zuuluu) { _fun00006_ip = 99; continue _fun00005 }
 78:
            tangon = _closure1_slot4;
            zuuluu = _closure1_slot6;
            michal = {};
            michal['userRecord'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 99:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();