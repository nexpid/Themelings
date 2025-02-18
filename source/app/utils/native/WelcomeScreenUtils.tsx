// app/utils/native/WelcomeScreenUtils.tsx
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
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    option = oscard[tangon];
    option = golfie.bind(entity)(option);
    var _closure1_slot5 = option;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.NO_WELCOME_SCREEN;
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.JoinGuildSources;
    var _closure1_slot9 = tangon;
    tangon = {};
    golfie = false;
    tangon['welcomeScreenModalVisible'] = golfie;
    tangon['shouldFetchGuildId'] = entity;
    var _closure1_slot10 = tangon;
    tangon = 13;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'utils/native/WelcomeScreenUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo, argBar) { // Original name: useShowWelcomeModal
        option = argFoo;
        golfie = argBar;
        var _closure2_slot0 = option;
        var _closure2_slot1 = golfie;
        report = _closure1_slot0;
        oscard = _closure1_slot2;
        entity = 6;
        entity = oscard[entity];
        tangon = undefined;
        verify = report.bind(tangon)(entity);
        entity = verify.useLocation;
        entity = entity.bind(verify)();
        entity = entity.welcomeModalChannelId;
        var _closure2_slot2 = entity;
        verify = _closure1_slot1;
        entity = 7;
        entity = oscard[entity];
        entity = verify.bind(tangon)(entity);
        entity = entity.bind(tangon)(golfie, option);
        var _closure2_slot3 = entity;
        entity = 8;
        entity = oscard[entity];
        oscard = report.bind(tangon)(entity);
        report = oscard.useStateFromStoresObject;
        entity = _closure1_slot8;
        tangon = new Array(3);
        tangon[0] = entity;
        entity = _closure1_slot5;
        tangon[1] = entity;
        entity = _closure1_slot7;
        tangon[2] = entity;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                michal = _closure2_slot3;
                if(michal) { _fun00002_ip = 19; continue _fun00001 }
 13:
                michal = _closure1_slot10;
                return michal;
 19:
                zuuluu = _closure1_slot8;
                michal = zuuluu.getGuild;
                tangon = _closure2_slot0;
                zuuluu = michal.bind(zuuluu)(tangon);
                report = _closure1_slot7;
                michal = report.getSelectableChannelIds;
                report = michal.bind(report)(tangon);
                option = _closure1_slot5;
                michal = option.get;
                oscard = michal.bind(option)(tangon);
                michal = option.hasSeen;
                michal = michal.bind(option)(tangon);
                tangon = option.hasError;
                golfie = tangon.bind(option)();
                tangon = option.isFetching;
                option = tangon.bind(option)();
                tangon = !michal;
                if(!tangon) { _fun00002_ip = 107; continue _fun00001 }
 103:
                tangon = _closure2_slot3;
 107:
                if(!tangon) { _fun00002_ip = 122; continue _fun00001 }
 110:
                michal = _closure2_slot2;
                entity = _closure2_slot1;
                tangon = michal === entity;
 122:
                entity = {};
                michal = tangon;
                if(!michal) { _fun00002_ip = 136; continue _fun00001 }
 130:
                offset = null;
                michal = offset != oscard;
 136:
                if(!michal) { _fun00002_ip = 147; continue _fun00001 }
 139:
                verify = _closure1_slot6;
                michal = oscard !== verify;
 147:
                if(!michal) { _fun00002_ip = 153; continue _fun00001 }
 150:
                michal = !option;
 153:
                if(!michal) { _fun00002_ip = 159; continue _fun00001 }
 156:
                michal = !golfie;
 159:
                if(!michal) { _fun00002_ip = 173; continue _fun00001 }
 162:
                golfie = report.length;
                report = 0;
                michal = golfie > report;
 173:
                entity['welcomeScreenModalVisible'] = michal;
                michal = undefined;
                if(!tangon) { _fun00002_ip = 208; continue _fun00001 }
 183:
                tangon = null;
                oscard = tangon == oscard;
                michal = undefined;
                if(!oscard) { _fun00002_ip = 208; continue _fun00001 }
 194:
                tangon = tangon != zuuluu;
                michal = undefined;
                if(!tangon) { _fun00002_ip = 208; continue _fun00001 }
 203:
                michal = zuuluu.id;
 208:
                entity['shouldFetchGuildId'] = michal;
                return entity;
            }
        };
        tangon = report.bind(oscard)(tangon, entity);
        entity = tangon.welcomeScreenModalVisible;
        oscard = tangon.shouldFetchGuildId;
        var _closure2_slot4 = oscard;
        report = _closure1_slot3;
        tangon = report.useEffect;
        zuuluu = new Array(1);
        zuuluu[0] = oscard;
        michal = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zuuluu = _closure2_slot4;
                michal = null;
                if(!(michal != zuuluu)) { _fun00004_ip = 53; continue _fun00003 }
 13:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                michal = 9;
                zuuluu = zuuluu[michal];
                michal = undefined;
                zuuluu = tangon.bind(michal)(zuuluu);
                michal = zuuluu.fetchWelcomeScreen;
                entity = _closure2_slot4;
                entity = michal.bind(zuuluu)(entity);
 53:
                entity = undefined;
                return entity;
            }
        };
        michal = tangon.bind(report)(michal, zuuluu);
        return entity;
    };
    zuuluu['useShowWelcomeModal'] = tangon;
    michal = function(argFoo) { // Original name: openWelcomeActionSheet
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            zuuluu = michal.guildId;
            var _closure2_slot0 = zuuluu;
            michal = michal.onHide;
            var _closure2_slot1 = michal;
            tangon = function() { // Original name: openWelcomeActionSheet
                report = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 10;
                tangon = michal[entity];
                entity = undefined;
                oscard = report.bind(entity)(tangon);
                report = oscard.openLazy;
                tangon = _closure1_slot0;
                zuuluu = 12;
                zuuluu = michal[zuuluu];
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = 11;
                zuuluu = michal[zuuluu];
                michal = michal.paths;
                tangon = tangon.bind(entity)(zuuluu, michal);
                option = _closure2_slot0;
                michal = global;
                michal = michal.HermesInternal;
                zuuluu = michal.concat;
                michal = 'GuildWelcomeActionSheet';
                zuuluu = zuuluu.bind(michal)(option);
                michal = {};
                michal['guildId'] = option;
                golfie = _closure2_slot1;
                michal['onHide'] = golfie;
                michal = report.bind(oscard)(tangon, zuuluu, michal);
                return entity;
            };
            zuuluu = _closure1_slot4;
            entity = zuuluu.getLurkingSource;
            report = entity.bind(zuuluu)();
            entity = null;
            oscard = entity == report;
            entity = undefined;
            zuuluu = undefined;
            if(oscard) { _fun00006_ip = 66; continue _fun00005 }
 61:
            zuuluu = report.type;
 66:
            michal = _closure1_slot9;
            michal = michal.MOBILE_GUILD_DISCOVERY;
            if(!(zuuluu !== michal)) { _fun00006_ip = 86; continue _fun00005 }
 80:
            michal = tangon.bind(entity)();
            _fun00006_ip = 106; continue _fun00005;
 86:
            michal = global;
            zuuluu = michal.setTimeout;
            michal = 600;
            michal = zuuluu.bind(entity)(tangon, michal);
 106:
            return entity;
        }
    };
    zuuluu['openWelcomeActionSheet'] = michal;
    return entity;
})();