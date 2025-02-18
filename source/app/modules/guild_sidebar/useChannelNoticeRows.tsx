// app/modules/guild_sidebar/useChannelNoticeRows.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
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
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ChannelListChannelNoticeRow;
    var _closure1_slot6 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.MFALevels;
    var _closure1_slot7 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_sidebar/useChannelNoticeRows.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: useChannelNoticeRows
        zuuluu = argFoo;
        report = argBar;
        var _closure2_slot0 = zuuluu;
        var _closure2_slot1 = report;
        oscard = zuuluu.id;
        var _closure2_slot2 = oscard;
        verify = _closure1_slot0;
        offset = _closure1_slot1;
        golfie = 6;
        option = offset[golfie];
        tangon = undefined;
        foxtra = verify.bind(tangon)(option);
        romeon = foxtra.useStateFromStores;
        option = _closure1_slot3;
        yankee = new Array(1);
        yankee[0] = option;
        option = function() {
            zuuluu = _closure1_slot3;
            michal = zuuluu.hasProgress;
            entity = _closure2_slot2;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        option = romeon.bind(foxtra)(yankee, option);
        var _closure2_slot3 = option;
        romeon = _closure1_slot5;
        yankee = romeon.getCurrentUser;
        backup = yankee.bind(romeon)();
        var _closure2_slot4 = backup;
        golfie = offset[golfie];
        foxtra = verify.bind(tangon)(golfie);
        romeon = foxtra.useStateFromStores;
        golfie = _closure1_slot4;
        yankee = new Array(1);
        yankee[0] = golfie;
        golfie = new Array(3);
        golfie[0] = backup;
        zuuluu = zuuluu.mfaLevel;
        golfie[1] = zuuluu;
        golfie[2] = oscard;
        zuuluu = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zuuluu = _closure2_slot4;
                entity = null;
                entity = entity != zuuluu;
                if(!entity) { _fun00002_ip = 43; continue _fun00001 }
 16:
                zuuluu = _closure2_slot0;
                tangon = zuuluu.mfaLevel;
                zuuluu = _closure1_slot7;
                zuuluu = zuuluu.ELEVATED;
                entity = tangon === zuuluu;
 43:
                if(!entity) { _fun00002_ip = 59; continue _fun00001 }
 46:
                zuuluu = _closure2_slot4;
                zuuluu = zuuluu.mfaEnabled;
                entity = !zuuluu;
 59:
                if(!entity) { _fun00002_ip = 84; continue _fun00001 }
 62:
                tangon = _closure1_slot4;
                zuuluu = tangon.hasElevatedPermissions;
                michal = _closure2_slot2;
                entity = zuuluu.bind(tangon)(michal);
 84:
                return entity;
            }
        };
        golfie = romeon.bind(foxtra)(yankee, zuuluu, golfie);
        var _closure2_slot5 = golfie;
        zuuluu = 7;
        zuuluu = offset[zuuluu];
        tangon = verify.bind(tangon)(zuuluu);
        zuuluu = tangon.useGuildHasLiveChannelNotice;
        oscard = zuuluu.bind(tangon)(oscard);
        var _closure2_slot6 = oscard;
        tangon = _closure1_slot2;
        zuuluu = tangon.useMemo;
        michal = new Array(4);
        michal[0] = option;
        michal[1] = golfie;
        michal[2] = oscard;
        michal[3] = report;
        entity = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                entity = _closure2_slot1;
                if(entity) { _fun00004_ip = 16; continue _fun00003 }
 10:
                entity = new Array(0);
                _fun00004_ip = 40; continue _fun00003;
 16:
                zuuluu = _closure1_slot6;
                tangon = zuuluu.SPACER;
                zuuluu = new Array(1);
                zuuluu[0] = tangon;
                entity = zuuluu;
 40:
                zuuluu = _closure2_slot3;
                if(zuuluu) { _fun00004_ip = 79; continue _fun00003 }
 47:
                zuuluu = _closure2_slot5;
                if(!zuuluu) { _fun00004_ip = 102; continue _fun00003 }
 54:
                tangon = entity.push;
                zuuluu = _closure1_slot6;
                zuuluu = zuuluu.MFA_WARNING;
                zuuluu = tangon.bind(entity)(zuuluu);
                _fun00004_ip = 102; continue _fun00003;
 79:
                tangon = entity.push;
                zuuluu = _closure1_slot6;
                zuuluu = zuuluu.GUILD_PROGRESS;
                zuuluu = tangon.bind(entity)(zuuluu);
 102:
                michal = _closure2_slot6;
                if(!michal) { _fun00004_ip = 132; continue _fun00003 }
 109:
                zuuluu = entity.push;
                michal = _closure1_slot6;
                michal = michal.LIVE_CHANNEL_NOTICE;
                michal = zuuluu.bind(entity)(michal);
 132:
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();