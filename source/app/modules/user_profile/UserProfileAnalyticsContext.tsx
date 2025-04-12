// app/modules/user_profile/UserProfileAnalyticsContext.tsx
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
    option = tangon.bind(entity)(golfie);
    var _closure1_slot3 = option;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot4 = tangon;
    golfie = option.createContext;
    tangon = null;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/user_profile/UserProfileAnalyticsContext.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            oscard = entity.value;
            report = entity.children;
            zuuluu = entity.openedAt;
            var _closure2_slot0 = zuuluu;
            zuuluu = entity.fetchStartedAt;
            var _closure2_slot1 = zuuluu;
            zuuluu = entity.fetchEndedAt;
            var _closure2_slot2 = zuuluu;
            verify = entity.isLoaded;
            tangon = undefined;
            if(!(verify === tangon)) { _fun00002_ip = 59; continue _fun00001 }
 57:
            verify = false;
 59:
            var _closure2_slot3 = verify;
            var _closure2_slot4 = tangon;
            var _closure2_slot5 = tangon;
            var _closure2_slot6 = tangon;
            golfie = _closure1_slot1;
            option = _closure1_slot2;
            zuuluu = 2;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(tangon)(zuuluu);
            zuuluu = zuuluu.bind(tangon)();
            zuuluu = zuuluu.analyticsLocations;
            option = _closure1_slot3;
            golfie = option.useRef;
            golfie = golfie.bind(option)(tangon);
            _closure2_slot4 = golfie;
            golfie = {};
            golfie['analyticsLocations'] = zuuluu;
            golfie['value'] = oscard;
            _closure2_slot5 = golfie;
            zuuluu = option.useRef;
            zuuluu = zuuluu.bind(option)(golfie);
            _closure2_slot6 = zuuluu;
            golfie = option.useEffect;
            zuuluu = function() {
                michal = _closure2_slot6;
                entity = _closure2_slot5;
                michal['current'] = entity;
                entity = undefined;
                return entity;
            };
            zuuluu = golfie.bind(option)(zuuluu);
            golfie = option.useEffect;
            zuuluu = new Array(1);
            zuuluu[0] = verify;
            michal = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = global;
                    michal = entity.Date;
                    entity = michal.now;
                    yankee = entity.bind(michal)();
                    entity = _closure2_slot4;
                    entity = entity.current;
                    offset = null;
                    entity = offset == entity;
                    if(!entity) { _fun00004_ip = 46; continue _fun00003 }
 38:
                    michal = _closure2_slot0;
                    entity = offset != michal;
 46:
                    if(!entity) { _fun00004_ip = 67; continue _fun00003 }
 49:
                    michal = _closure2_slot4;
                    entity = _closure2_slot0;
                    entity = yankee - entity;
                    michal['current'] = entity;
 67:
                    entity = _closure2_slot3;
                    if(!entity) { _fun00004_ip = 305; continue _fun00003 }
 77:
                    entity = _closure2_slot6;
                    entity = entity.current;
                    report = entity.analyticsLocations;
                    tangon = entity.value;
                    michal = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    entity = 3;
                    golfie = zuuluu[entity];
                    verify = undefined;
                    romeon = michal.bind(verify)(golfie);
                    option = romeon.trackUserProfileAction;
                    golfie = {};
                    foxtra = 'VIEW';
                    golfie['action'] = foxtra;
                    golfie['analyticsLocations'] = report;
                    kiloes = golfie;
                    backup = tangon;
                    foxtra = copyDataProperties(kiloes, backup);
                    golfie = option.bind(romeon)(golfie);
                    entity = zuuluu[entity];
                    zuuluu = michal.bind(verify)(entity);
                    michal = zuuluu.maybeTrackUserProfileUiViewed;
                    entity = {};
                    golfie = 'USER_PROFILE';
                    entity['profileUi'] = golfie;
                    golfie = _closure2_slot4;
                    golfie = golfie.current;
                    entity['timeToInteractiveMs'] = golfie;
                    golfie = _closure2_slot0;
                    option = offset != golfie;
                    golfie = undefined;
                    if(!option) { _fun00004_ip = 219; continue _fun00003 }
 211:
                    option = _closure2_slot0;
                    golfie = yankee - option;
 219:
                    entity['timeToLoadMs'] = golfie;
                    golfie = _closure2_slot1;
                    option = offset != golfie;
                    golfie = undefined;
                    if(!option) { _fun00004_ip = 262; continue _fun00003 }
 237:
                    option = _closure2_slot2;
                    option = offset != option;
                    golfie = undefined;
                    if(!option) { _fun00004_ip = 262; continue _fun00003 }
 250:
                    verify = _closure2_slot2;
                    option = _closure2_slot1;
                    golfie = verify - option;
 262:
                    entity['timeToFetchMs'] = golfie;
                    golfie = _closure2_slot0;
                    entity['viewStartedAt'] = golfie;
                    oscard = _closure2_slot1;
                    entity['fetchStartedAt'] = oscard;
                    entity['analyticsLocations'] = report;
                    kiloes = entity;
                    backup = tangon;
                    tangon = copyDataProperties(kiloes, backup);
                    entity = michal.bind(zuuluu)(entity);
 305:
                    entity = undefined;
                    return entity;
                }
            };
            michal = golfie.bind(option)(michal, zuuluu);
            zuuluu = _closure1_slot4;
            entity = _closure1_slot5;
            michal = entity.Provider;
            entity = {};
            entity['value'] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['UserProfileAnalyticsProvider'] = tangon;
    tangon = function(argFoo) {
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            romeon = michal.layout;
            var _closure2_slot0 = romeon;
            yankee = michal.userId;
            var _closure2_slot1 = yankee;
            offset = michal.guildId;
            var _closure2_slot2 = offset;
            verify = michal.channelId;
            var _closure2_slot3 = verify;
            option = michal.messageId;
            var _closure2_slot4 = option;
            golfie = michal.roleId;
            var _closure2_slot5 = golfie;
            oscard = michal.sourceSessionId;
            var _closure2_slot6 = oscard;
            report = michal.showGuildProfile;
            foxtra = undefined;
            if(!(report === foxtra)) { _fun00006_ip = 85; continue _fun00005 }
 83:
            report = true;
 85:
            var _closure2_slot7 = report;
            var _closure2_slot8 = foxtra;
            backup = _closure1_slot3;
            tangon = backup.useContext;
            zuuluu = _closure1_slot5;
            zuuluu = tangon.bind(backup)(zuuluu);
            tangon = null;
            tangon = tangon == zuuluu;
            foxtra = undefined;
            if(tangon) { _fun00006_ip = 132; continue _fun00005 }
 126:
            foxtra = zuuluu.sessionId;
 132:
            _closure2_slot8 = foxtra;
            tangon = _closure1_slot3;
            zuuluu = tangon.useMemo;
            michal = new Array(9);
            michal[0] = foxtra;
            michal[1] = romeon;
            michal[2] = yankee;
            michal[3] = offset;
            michal[4] = verify;
            michal[5] = option;
            michal[6] = golfie;
            michal[7] = oscard;
            michal[8] = report;
            entity = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    entity = {};
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 4;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    zuuluu = tangon.bind(michal)(zuuluu);
                    michal = zuuluu.v4;
                    michal = michal.bind(zuuluu)();
                    entity['sessionId'] = michal;
                    tangon = _closure2_slot6;
                    zuuluu = null;
                    if(!(zuuluu == tangon)) { _fun00008_ip = 61; continue _fun00007 }
 55:
                    zuuluu = _closure2_slot8;
                    _fun00008_ip = 65; continue _fun00007;
 61:
                    zuuluu = _closure2_slot6;
 65:
                    entity['sourceSessionId'] = zuuluu;
                    zuuluu = _closure2_slot0;
                    entity['layout'] = zuuluu;
                    zuuluu = _closure2_slot1;
                    entity['userId'] = zuuluu;
                    zuuluu = _closure2_slot2;
                    entity['guildId'] = zuuluu;
                    zuuluu = _closure2_slot3;
                    entity['channelId'] = zuuluu;
                    zuuluu = _closure2_slot4;
                    entity['messageId'] = zuuluu;
                    zuuluu = _closure2_slot5;
                    entity['roleId'] = zuuluu;
                    michal = _closure2_slot7;
                    entity['showGuildProfile'] = michal;
                    return entity;
                }
            };
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        }
    };
    zuuluu['useCreateUserProfileAnalyticsContext'] = tangon;
    michal = function() {
        report = _closure1_slot3;
        tangon = report.useContext;
        zuuluu = _closure1_slot5;
        golfie = tangon.bind(report)(zuuluu);
        var _closure2_slot0 = golfie;
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 2;
        entity = zuuluu[entity];
        zuuluu = undefined;
        entity = tangon.bind(zuuluu)(entity);
        entity = entity.bind(zuuluu)();
        oscard = entity.analyticsLocations;
        var _closure2_slot1 = oscard;
        entity = {};
        entity['context'] = golfie;
        tangon = report.useCallback;
        zuuluu = new Array(2);
        zuuluu[0] = golfie;
        zuuluu[1] = oscard;
        michal = function(argFoo) {
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                michal = _closure2_slot0;
                entity = null;
                if(!(entity != michal)) { _fun00010_ip = 81; continue _fun00009 }
 13:
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 3;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.trackUserProfileAction;
                entity = {};
                report = _closure2_slot1;
                entity['analyticsLocations'] = report;
                oscard = _closure2_slot0;
                golfie = entity;
                tangon = copyDataProperties(golfie, oscard);
                oscard = argFoo;
                golfie = entity;
                tangon = copyDataProperties(golfie, oscard);
                entity = michal.bind(zuuluu)(entity);
 81:
                entity = undefined;
                return entity;
            }
        };
        michal = tangon.bind(report)(michal, zuuluu);
        entity['trackUserProfileAction'] = michal;
        return entity;
    };
    zuuluu['useUserProfileAnalyticsContext'] = michal;
    return entity;
})();