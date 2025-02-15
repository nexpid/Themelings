// app/modules/headless_tasks/android/Disconnect.tsx
export default (function(argFoo, argBar, argBaz, _, argGrault, __, argPlugh) {
    zulu = argBar;
    oscar = argBaz;
    tango = argPlugh;
    var _closure1_slot0 = zulu;
    var _closure1_slot1 = oscar;
    var _closure1_slot2 = tango;
    entity = 0;
    report = tango[entity];
    entity = undefined;
    report = oscar.bind(entity)(report);
    var _closure1_slot3 = report;
    report = function(argFoo) {
        mike = argFoo;
        mike = mike.channelId;
        var _closure2_slot0 = mike;
        mike = global;
        zulu = mike.Promise;
        mike = zulu.prototype;
        mike = Object.create(mike, {constructor: {value: zulu}});
        tango = function(argFoo) {
            entity = argFoo;
            var _closure3_slot0 = entity;
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 1;
            zulu = zulu[entity];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.awaitStorage;
            mike = function() {
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    tango = _closure1_slot3;
                    zulu = tango.getChannel;
                    mike = _closure2_slot0;
                    zulu = zulu.bind(tango)(mike);
                    mike = null;
                    if(!(mike != zulu)) { _fun00002_ip = 63; continue _fun00001 }
 30:
                    tango = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 2;
                    mike = mike[entity];
                    entity = undefined;
                    mike = tango.bind(entity)(mike);
                    entity = mike.handleDisconnect;
                    entity = entity.bind(mike)(zulu);
 63:
                    zulu = _closure3_slot0;
                    entity = undefined;
                    mike = true;
                    mike = zulu.bind(entity)(mike);
                    return entity;
                }
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        report = mike;
        entity = new report[zulu](tango, zulu);
        entity = entity instanceof Object ? entity : mike;
        return entity;
    };
    mike = argGrault;
    mike['exports'] = report;
    mike = 3;
    mike = tango[mike];
    tango = zulu.bind(entity)(mike);
    zulu = tango.fileFinishedImporting;
    mike = 'modules/headless_tasks/android/Disconnect.tsx';
    mike = zulu.bind(tango)(mike);
    return entity;
})();