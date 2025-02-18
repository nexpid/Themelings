// app/modules/cache/CacheActionCreators.tsx
export default (function(_, argBar, argBaz, __, ___, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = oscard;
    entity = function() { // Original name: _writeCaches
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot2;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    golfie = arguments[0];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 171; continue _fun00001 }
 13:
                    report = undefined;
                    if(!(golfie === report)) { _fun00002_ip = 21; continue _fun00001 }
 19:
                    golfie = false;
 21:
                    SaveGenerator(address=25);
 23:
                    return report;
 25:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 168; continue _fun00001 }
 34:
                    oscard = _closure1_slot4;
                    zuuluu = oscard.canWriteCaches;
                    zuuluu = zuuluu.bind(oscard)(golfie);
                    if(!zuuluu) { _fun00002_ip = 159; continue _fun00001 }
 57:
                    oscard = _closure1_slot3;
                    zuuluu = oscard.loadAllMissingChannels;
                    zuuluu = zuuluu.bind(oscard)();
                    SaveGenerator(address=75);
 73:
                    return zuuluu;
 75:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(oscard) { _fun00002_ip = 165; continue _fun00001 }
 81:
                    golfie = new Array(0);
                    oscard = _closure1_slot0;
                    option = _closure1_slot1;
                    tangon = 3;
                    tangon = option[tangon];
                    option = oscard.bind(report)(tangon);
                    oscard = option.dispatch;
                    tangon = {};
                    verify = 'WRITE_CACHES';
                    tangon['type'] = verify;
                    tangon['promisesToWaitOn'] = golfie;
                    tangon = oscard.bind(option)(tangon);
                    tangon = global;
                    oscard = tangon.Promise;
                    tangon = oscard.all;
                    tangon = tangon.bind(oscard)(golfie);
                    SaveGenerator(address=153);
 151:
                    return tangon;
 153:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(oscard) { _fun00002_ip = 162; continue _fun00001 }
 159:
                    return report;
 162:
                    return tangon;
 165:
                    return zuuluu;
 168:
                    return michal;
 171:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot5 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot5 = entity;
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
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ChannelLoader;
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/cache/CacheActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: writeCaches
        entity = undefined;
        tangon = _closure1_slot5;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['writeCaches'] = tangon;
    michal = function() { // Original name: clearCaches
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 3;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {'type': 'CLEAR_CACHES', 'reason': 'Requested by user', 'preventWritingCachesAgainThisSession': true, 'resetSocket': true};
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['clearCaches'] = michal;
    return entity;
})();