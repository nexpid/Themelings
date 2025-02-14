// app/modules/cache/CacheActionCreators.tsx
export default (function(_, argBar, argBaz, __, ___, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = oscar;
    entity = function() { // Original name: _writeCaches
        report = undefined;
        entity = undefined;
        tango = _closure1_slot2;
        zulu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun98257: for(var _fun98257_ip = 0; ; ) switch(_fun98257_ip) {
 0:
                    StartGenerator();
                    golf = arguments[0];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun98257_ip = 173; continue _fun98257 }
 13:
                    report = undefined;
                    if(!(golf === report)) { _fun98257_ip = 21; continue _fun98257 }
 19:
                    golf = false;
 21:
                    SaveGenerator(address=25);
 23:
                    return report;
 25:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun98257_ip = 170; continue _fun98257 }
 34:
                    oscar = _closure1_slot4;
                    zulu = oscar.canWriteCaches;
                    zulu = zulu.bind(oscar)(golf);
                    if(!zulu) { _fun98257_ip = 161; continue _fun98257 }
 57:
                    oscar = _closure1_slot3;
                    zulu = oscar.loadAllMissingChannels;
                    zulu = zulu.bind(oscar)();
                    SaveGenerator(address=77);
 75:
                    return zulu;
 77:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(oscar) { _fun98257_ip = 167; continue _fun98257 }
 83:
                    golf = new Array(0);
                    oscar = _closure1_slot0;
                    options = _closure1_slot1;
                    tango = 3;
                    tango = options[tango];
                    options = oscar.bind(report)(tango);
                    oscar = options.dispatch;
                    tango = {};
                    verify = 'WRITE_CACHES';
                    tango['type'] = verify;
                    tango['promisesToWaitOn'] = golf;
                    tango = oscar.bind(options)(tango);
                    tango = global;
                    oscar = tango.Promise;
                    tango = oscar.all;
                    tango = tango.bind(oscar)(golf);
                    SaveGenerator(address=155);
 153:
                    return tango;
 155:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(oscar) { _fun98257_ip = 164; continue _fun98257 }
 161:
                    return report;
 164:
                    return tango;
 167:
                    return zulu;
 170:
                    return mike;
 173:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot5 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot5 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ChannelLoader;
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/cache/CacheActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    tango = function() { // Original name: writeCaches
        entity = undefined;
        tango = _closure1_slot5;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['writeCaches'] = tango;
    mike = function() { // Original name: clearCaches
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 3;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {'type': 'CLEAR_CACHES', 'reason': 'Requested by user', 'preventWritingCachesAgainThisSession': true, 'resetSocket': true};
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['clearCaches'] = mike;
    return entity;
})();