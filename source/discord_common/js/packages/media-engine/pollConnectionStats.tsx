// discord_common/js/packages/media-engine/pollConnectionStats.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
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
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = '../discord_common/js/packages/media-engine/pollConnectionStats.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: pollConnectionStats
        option = argFoo;
        var _closure2_slot0 = option;
        entity = false;
        var _closure2_slot1 = entity;
        golfie = option.on;
        report = _closure1_slot0;
        oscard = _closure1_slot1;
        entity = 1;
        zuuluu = oscard[entity];
        entity = undefined;
        zuuluu = report.bind(entity)(zuuluu);
        zuuluu = zuuluu.MediaEngineEvent;
        tangon = zuuluu.Destroy;
        zuuluu = function() {
            entity = true;
            _closure2_slot1 = entity;
            return entity;
        };
        zuuluu = golfie.bind(option)(tangon, zuuluu);
        zuuluu = function() {
            tangon = _closure1_slot2;
            zuuluu = undefined;
            michal = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(michal) { _fun00002_ip = 241; continue _fun00001 }
 12:
                        michal = undefined;
                        var _closure5_slot0 = michal;
                        report = _closure2_slot1;
                        if(report) { _fun00002_ip = 238; continue _fun00001 }
 31:
                        option = new Array(0);
                        _closure5_slot0 = option;
                        oscard = _closure2_slot0;
                        report = oscard.eachConnection;
                        zuuluu = function(argFoo) {
                            report = argFoo;
                            zuuluu = _closure5_slot0;
                            michal = zuuluu.push;
                            entity = {};
                            entity['connection'] = report;
                            tangon = report.emitStats;
                            tangon = tangon.bind(report)();
                            entity['stats'] = tangon;
                            entity = michal.bind(zuuluu)(entity);
                            return entity;
                        };
                        zuuluu = report.bind(oscard)(zuuluu);
                        offset = new Array(0);
                        zuuluu = option.length;
                        golfie = 0;
                        zuuluu = golfie < zuuluu;
                        oscard = null;
                        if(!zuuluu) { _fun00002_ip = 146; continue _fun00001 }
 79:
                        yankee = option[golfie];
                        zuuluu = yankee.stats;
                        SaveGenerator(address=93);
 91:
                        return zuuluu;
 93:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                        if(report) { _fun00002_ip = 235; continue _fun00001 }
 102:
                        if(!(oscard != zuuluu)) { _fun00002_ip = 134; continue _fun00001 }
 106:
                        verify = offset.push;
                        report = {};
                        yankee = yankee.connection;
                        report['connection'] = yankee;
                        report['stats'] = zuuluu;
                        report = verify.bind(offset)(report);
 134:
                        golfie = golfie + 1;
                        report = option.length;
                        if(golfie < report) { _fun00002_ip = 79; continue _fun00001 }
 146:
                        verify = _closure2_slot0;
                        oscard = verify.emit;
                        golfie = _closure1_slot0;
                        option = _closure1_slot1;
                        report = 1;
                        report = option[report];
                        report = golfie.bind(michal)(report);
                        report = report.MediaEngineEvent;
                        report = report.ConnectionStats;
                        report = oscard.bind(verify)(report, offset);
                        report = global;
                        oscard = report.setTimeout;
                        report = _closure2_slot2;
                        tangon = 2;
                        tangon = option[tangon];
                        tangon = golfie.bind(michal)(tangon);
                        tangon = tangon.STATS_INTERVAL;
                        tangon = oscard.bind(michal)(report, tangon);
                        _fun00002_ip = 238; continue _fun00001;
 235:
                        return zuuluu;
 238:
                        return michal;
 241:
                        return entity;
                    }
                };
                return entity;
            };
            michal = tangon.bind(zuuluu)(michal);
            var _closure3_slot0 = michal;
            entity = function() {
                entity = undefined;
                tangon = _closure3_slot0;
                zuuluu = tangon.apply;
                entity = arguments;
                michal = entity;
                entity = this;
                entity = zuuluu.bind(tangon)(entity, michal);
                return entity;
            };
            return entity;
        };
        tangon = zuuluu.bind(entity)();
        var _closure2_slot2 = tangon;
        michal = global;
        zuuluu = michal.setTimeout;
        michal = 2;
        michal = oscard[michal];
        michal = report.bind(entity)(michal);
        michal = michal.STATS_INTERVAL;
        michal = zuuluu.bind(entity)(tangon, michal);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();