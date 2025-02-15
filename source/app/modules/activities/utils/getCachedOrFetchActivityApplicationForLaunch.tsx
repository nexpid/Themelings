// app/modules/activities/utils/getCachedOrFetchActivityApplicationForLaunch.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function() { // Original name: _getCachedOrFetchActivityApplicationForLaunch
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun73974: for(var _fun73974_ip = 0; ; ) switch(_fun73974_ip) {
 0:
                    StartGenerator();
                    offset = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun73974_ip = 295; continue _fun73974 }
 13:
                    zulu = _closure1_slot4;
                    mike = zulu.getApplication;
                    mike = mike.bind(zulu)(offset);
                    zulu = _closure1_slot8;
                    tango = undefined;
                    zulu = zulu.bind(tango)(mike);
                    if(zulu) { _fun73974_ip = 292; continue _fun73974 }
 48:
                    oscar = _closure1_slot6;
                    report = oscar.getChannel;
                    zulu = argBar;
                    zulu = report.bind(oscar)(zulu);
                    oscar = null;
                    report = oscar == zulu;
                    verify = undefined;
                    if(report) { _fun73974_ip = 81; continue _fun73974 }
 76:
                    verify = zulu.guild_id;
 81:
                    report = _closure1_slot0;
                    golf = _closure1_slot2;
                    zulu = 4;
                    zulu = golf[zulu];
                    golf = report.bind(tango)(zulu);
                    report = golf.fetchShelf;
                    zulu = {};
                    zulu['guildId'] = verify;
                    zulu = report.bind(golf)(zulu);
                    SaveGenerator(address=122);
 120:
                    return zulu;
 122:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun73974_ip = 289; continue _fun73974 }
 131:
                    yankee = zulu.activityConfigs;
                    verify = zulu.applications;
                    golf = _closure1_slot1;
                    romeo = _closure1_slot2;
                    report = 5;
                    report = romeo[report];
                    golf = golf.bind(tango)(report);
                    report = {};
                    report['applicationId'] = offset;
                    report['activityConfigs'] = yankee;
                    report['applications'] = verify;
                    report = golf.bind(tango)(report);
                    verify = _closure1_slot8;
                    yankee = oscar == report;
                    golf = undefined;
                    if(yankee) { _fun73974_ip = 202; continue _fun73974 }
 197:
                    golf = report.application;
 202:
                    golf = verify.bind(tango)(golf);
                    if(golf) { _fun73974_ip = 272; continue _fun73974 }
 210:
                    verify = _closure1_slot0;
                    yankee = _closure1_slot2;
                    golf = 6;
                    golf = yankee[golf];
                    verify = verify.bind(tango)(golf);
                    golf = verify.fetchApplication;
                    golf = golf.bind(verify)(offset);
                    SaveGenerator(address=245);
 243:
                    return golf;
 245:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=8);
                    if(verify) { _fun73974_ip = 269; continue _fun73974 }
 251:
                    verify = _closure1_slot5;
                    options = verify.createFromServer;
                    options = options.bind(verify)(golf);
                    return options;
 269:
                    return golf;
 272:
                    oscar = oscar == report;
                    tango = undefined;
                    if(oscar) { _fun73974_ip = 286; continue _fun73974 }
 281:
                    tango = report.application;
 286:
                    return tango;
 289:
                    return zulu;
 292:
                    return mike;
 295:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot7 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot7 = entity;
    entity = function(argFoo) { // Original name: isUsableApplicationRecord
        _fun73975: for(var _fun73975_ip = 0; ; ) switch(_fun73975_ip) {
 0:
            mike = argFoo;
            zulu = null;
            entity = zulu != mike;
            if(!entity) { _fun73975_ip = 22; continue _fun73975 }
 12:
            mike = mike.embeddedActivityConfig;
            entity = zulu != mike;
 22:
            return entity;
        }
    };
    var _closure1_slot8 = entity;
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
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/activities/utils/getCachedOrFetchActivityApplicationForLaunch.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: getCachedOrFetchActivityApplicationForLaunch
        entity = undefined;
        tango = _closure1_slot7;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();