// app/modules/hub/HubUnreadUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
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
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/hub/HubUnreadUtils.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useHubUnreadCount
        oscar = argFoo;
        var _closure2_slot0 = oscar;
        report = _closure1_slot0;
        tango = _closure1_slot2;
        zulu = 2;
        tango = tango[zulu];
        zulu = undefined;
        report = report.bind(zulu)(tango);
        tango = report.useStateFromStores;
        golf = _closure1_slot3;
        zulu = new Array(2);
        zulu[0] = golf;
        mike = _closure1_slot4;
        zulu[1] = mike;
        mike = new Array(1);
        mike[0] = oscar;
        entity = function() {
            _fun115920: for(var _fun115920_ip = 0; ; ) switch(_fun115920_ip) {
 0:
                mike = _closure2_slot0;
                golf = null;
                if(!(golf != mike)) { _fun115920_ip = 174; continue _fun115920 }
 18:
                oscar = _closure1_slot4;
                report = oscar.ackMessageId;
                zulu = _closure2_slot0;
                zulu = zulu.id;
                zulu = report.bind(oscar)(zulu);
                var _closure3_slot0 = zulu;
                if(!(golf != zulu)) { _fun115920_ip = 170; continue _fun115920 }
 53:
                zulu = global;
                oscar = zulu.Object;
                report = oscar.values;
                verify = _closure1_slot3;
                options = verify.getDirectoryEntries;
                tango = _closure2_slot0;
                tango = tango.id;
                tango = options.bind(verify)(tango);
                if(!(golf == tango)) { _fun115920_ip = 96; continue _fun115920 }
 94:
                tango = {};
 96:
                report = report.bind(oscar)(tango);
                tango = report.filter;
                entity = function(argFoo) {
                    entity = global;
                    zulu = entity.Date;
                    entity = argFoo;
                    report = entity.createdAt;
                    mike = zulu.prototype;
                    mike = Object.create(mike, {constructor: {value: zulu}});
                    oscar = mike;
                    entity = new oscar[zulu](report, tango);
                    mike = entity instanceof Object ? entity : mike;
                    entity = mike.getTime;
                    mike = entity.bind(mike)();
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    entity = 3;
                    zulu = zulu[entity];
                    entity = undefined;
                    tango = tango.bind(entity)(zulu);
                    zulu = tango.extractTimestamp;
                    entity = _closure3_slot0;
                    entity = zulu.bind(tango)(entity);
                    entity = mike > entity;
                    return entity;
                };
                entity = tango.bind(report)(entity);
                tango = zulu.Math;
                zulu = tango.min;
                oscar = _closure1_slot0;
                report = _closure1_slot2;
                mike = 4;
                report = report[mike];
                mike = undefined;
                mike = oscar.bind(mike)(report);
                mike = mike.MAX_CATEGORY_SERVERS;
                entity = entity.length;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
 170:
                entity = 0;
                return entity;
 174:
                entity = 0;
                return entity;
            }
        };
        entity = tango.bind(report)(zulu, entity, mike);
        return entity;
    };
    zulu['useHubUnreadCount'] = mike;
    return entity;
})();