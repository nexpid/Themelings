// app/modules/headless_tasks/android/SelectChannel.tsx
export default (function(argFoo, argBar, argBaz, _, argGrault, __, argPlugh) {
    zulu = argBar;
    mike = argPlugh;
    var _closure1_slot0 = zulu;
    tango = argBaz;
    var _closure1_slot1 = tango;
    var _closure1_slot2 = mike;
    tango = function(argFoo) {
        mike = argFoo;
        zulu = mike.channelId;
        var _closure2_slot0 = zulu;
        mike = mike.connectToVoice;
        var _closure2_slot1 = mike;
        mike = global;
        zulu = mike.Promise;
        mike = zulu.prototype;
        mike = Object.create(mike, {constructor: {value: zulu}});
        tango = function(argFoo) {
            entity = argFoo;
            var _closure3_slot0 = entity;
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 0;
            zulu = zulu[entity];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.awaitStorage;
            mike = function() {
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    entity = _closure2_slot1;
                    if(!entity) { _fun00002_ip = 50; continue _fun00001 }
 10:
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    entity = 1;
                    zulu = zulu[entity];
                    entity = undefined;
                    tango = tango.bind(entity)(zulu);
                    zulu = tango.selectVoiceChannel;
                    entity = _closure2_slot0;
                    entity = zulu.bind(tango)(entity);
 50:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    entity = 2;
                    zulu = zulu[entity];
                    entity = undefined;
                    tango = tango.bind(entity)(zulu);
                    zulu = tango.transitionToChannel;
                    mike = _closure2_slot0;
                    mike = zulu.bind(tango)(mike);
                    zulu = _closure3_slot0;
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
    entity = argGrault;
    entity['exports'] = tango;
    entity = 3;
    mike = mike[entity];
    entity = undefined;
    tango = zulu.bind(entity)(mike);
    zulu = tango.fileFinishedImporting;
    mike = 'modules/headless_tasks/android/SelectChannel.tsx';
    mike = zulu.bind(tango)(mike);
    return entity;
})();