// discord_common/js/packages/media-engine/pollConnectionStats.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argBaz;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot2 = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = '../discord_common/js/packages/media-engine/pollConnectionStats.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: pollConnectionStats
        options = argFoo;
        var _closure2_slot0 = options;
        entity = false;
        var _closure2_slot1 = entity;
        golf = options.on;
        report = _closure1_slot0;
        oscar = _closure1_slot1;
        entity = 1;
        zulu = oscar[entity];
        entity = undefined;
        zulu = report.bind(entity)(zulu);
        zulu = zulu.MediaEngineEvent;
        tango = zulu.Destroy;
        zulu = function() {
            entity = true;
            _closure2_slot1 = entity;
            return entity;
        };
        zulu = golf.bind(options)(tango, zulu);
        zulu = function() {
            tango = _closure1_slot2;
            zulu = undefined;
            mike = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun50330: for(var _fun50330_ip = 0; ; ) switch(_fun50330_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun50330_ip = 241; continue _fun50330 }
 12:
                        mike = undefined;
                        var _closure5_slot0 = mike;
                        report = _closure2_slot1;
                        if(report) { _fun50330_ip = 238; continue _fun50330 }
 31:
                        options = new Array(0);
                        _closure5_slot0 = options;
                        oscar = _closure2_slot0;
                        report = oscar.eachConnection;
                        zulu = function(argFoo) {
                            report = argFoo;
                            zulu = _closure5_slot0;
                            mike = zulu.push;
                            entity = {};
                            entity['connection'] = report;
                            tango = report.emitStats;
                            tango = tango.bind(report)();
                            entity['stats'] = tango;
                            entity = mike.bind(zulu)(entity);
                            return entity;
                        };
                        zulu = report.bind(oscar)(zulu);
                        offset = new Array(0);
                        zulu = options.length;
                        golf = 0;
                        zulu = golf < zulu;
                        oscar = null;
                        if(!zulu) { _fun50330_ip = 146; continue _fun50330 }
 79:
                        yankee = options[golf];
                        zulu = yankee.stats;
                        SaveGenerator(address=93);
 91:
                        return zulu;
 93:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                        if(report) { _fun50330_ip = 235; continue _fun50330 }
 102:
                        if(!(oscar != zulu)) { _fun50330_ip = 134; continue _fun50330 }
 106:
                        verify = offset.push;
                        report = {};
                        yankee = yankee.connection;
                        report['connection'] = yankee;
                        report['stats'] = zulu;
                        report = verify.bind(offset)(report);
 134:
                        golf = golf + 1;
                        report = options.length;
                        if(golf < report) { _fun50330_ip = 79; continue _fun50330 }
 146:
                        verify = _closure2_slot0;
                        oscar = verify.emit;
                        golf = _closure1_slot0;
                        options = _closure1_slot1;
                        report = 1;
                        report = options[report];
                        report = golf.bind(mike)(report);
                        report = report.MediaEngineEvent;
                        report = report.ConnectionStats;
                        report = oscar.bind(verify)(report, offset);
                        report = global;
                        oscar = report.setTimeout;
                        report = _closure2_slot2;
                        tango = 2;
                        tango = options[tango];
                        tango = golf.bind(mike)(tango);
                        tango = tango.STATS_INTERVAL;
                        tango = oscar.bind(mike)(report, tango);
                        _fun50330_ip = 238; continue _fun50330;
 235:
                        return zulu;
 238:
                        return mike;
 241:
                        return entity;
                    }
                };
                return entity;
            };
            mike = tango.bind(zulu)(mike);
            var _closure3_slot0 = mike;
            entity = function() {
                entity = undefined;
                tango = _closure3_slot0;
                zulu = tango.apply;
                entity = arguments;
                mike = entity;
                entity = this;
                entity = zulu.bind(tango)(entity, mike);
                return entity;
            };
            return entity;
        };
        tango = zulu.bind(entity)();
        var _closure2_slot2 = tango;
        mike = global;
        zulu = mike.setTimeout;
        mike = 2;
        mike = oscar[mike];
        mike = report.bind(entity)(mike);
        mike = mike.STATS_INTERVAL;
        mike = zulu.bind(entity)(tango, mike);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();