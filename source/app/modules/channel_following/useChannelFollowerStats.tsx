// app/modules/channel_following/useChannelFollowerStats.tsx
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
    tangon = oscard[entity];
    entity = undefined;
    tangon = option.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    golfie = 1;
    verify = oscard[golfie];
    tangon = argCor;
    tangon = tangon.bind(entity)(verify);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    tangon = tangon.Millis;
    tangon = tangon.HOUR;
    tangon = golfie * tangon;
    var _closure1_slot6 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/channel_following/useChannelFollowerStats.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useChannelFollowerStats
        golfie = argFoo;
        var _closure2_slot0 = golfie;
        oscard = _closure1_slot4;
        tangon = oscard.useState;
        michal = false;
        report = tangon.bind(oscard)(michal);
        tangon = _closure1_slot3;
        option = undefined;
        michal = 2;
        report = tangon.bind(option)(report, michal);
        michal = 0;
        michal = report[michal];
        var _closure2_slot1 = michal;
        tangon = 1;
        tangon = report[tangon];
        var _closure2_slot2 = tangon;
        report = _closure1_slot0;
        verify = _closure1_slot2;
        tangon = 4;
        tangon = verify[tangon];
        verify = report.bind(option)(tangon);
        option = verify.useStateFromStores;
        zuuluu = _closure1_slot5;
        report = new Array(1);
        report[0] = zuuluu;
        tangon = new Array(1);
        tangon[0] = golfie;
        zuuluu = function() {
            zuuluu = _closure1_slot5;
            michal = zuuluu.getFollowerStatsForChannel;
            entity = _closure2_slot0;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        zuuluu = option.bind(verify)(report, zuuluu, tangon);
        var _closure2_slot3 = zuuluu;
        report = oscard.useEffect;
        tangon = new Array(3);
        tangon[0] = golfie;
        tangon[1] = zuuluu;
        tangon[2] = michal;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                michal = _closure2_slot3;
                zuuluu = null;
                if(!(zuuluu != michal)) { _fun00002_ip = 55; continue _fun00001 }
 13:
                michal = global;
                tangon = michal.Date;
                michal = tangon.now;
                tangon = michal.bind(tangon)();
                michal = _closure2_slot3;
                michal = michal.lastFetched;
                tangon = tangon - michal;
                michal = _closure1_slot6;
                if(!(tangon > michal)) { _fun00002_ip = 115; continue _fun00001 }
 55:
                michal = _closure2_slot1;
                if(michal) { _fun00002_ip = 115; continue _fun00001 }
 62:
                tangon = _closure2_slot2;
                report = undefined;
                michal = true;
                michal = tangon.bind(report)(michal);
                tangon = _closure1_slot1;
                oscard = _closure1_slot2;
                michal = 5;
                michal = oscard[michal];
                report = tangon.bind(report)(michal);
                tangon = report.fetchChannelFollowerStats;
                michal = _closure2_slot0;
                michal = tangon.bind(report)(michal);
                _fun00002_ip = 146; continue _fun00001;
 115:
                michal = _closure2_slot3;
                michal = zuuluu != michal;
                if(!michal) { _fun00002_ip = 130; continue _fun00001 }
 126:
                michal = _closure2_slot1;
 130:
                if(!michal) { _fun00002_ip = 146; continue _fun00001 }
 133:
                zuuluu = _closure2_slot2;
                michal = undefined;
                entity = false;
                entity = zuuluu.bind(michal)(entity);
 146:
                entity = undefined;
                return entity;
            }
        };
        entity = report.bind(oscard)(entity, tangon);
        entity = new Array(2);
        entity[0] = zuuluu;
        entity[1] = michal;
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();