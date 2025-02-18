// app/modules/headless_tasks/android/Disconnect.tsx
export default (function(argFoo, argBar, argBaz, _, argGra, __, argPlu) {
    zuuluu = argBar;
    oscard = argBaz;
    tangon = argPlu;
    var _closure1_slot0 = zuuluu;
    var _closure1_slot1 = oscard;
    var _closure1_slot2 = tangon;
    entity = 0;
    report = tangon[entity];
    entity = undefined;
    report = oscard.bind(entity)(report);
    var _closure1_slot3 = report;
    report = function(argFoo) {
        michal = argFoo;
        michal = michal.channelId;
        var _closure2_slot0 = michal;
        michal = global;
        zuuluu = michal.Promise;
        michal = zuuluu.prototype;
        michal = Object.create(michal, {constructor: {value: zuuluu}});
        tangon = function(argFoo) {
            entity = argFoo;
            var _closure3_slot0 = entity;
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 1;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.awaitStorage;
            michal = function() {
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    tangon = _closure1_slot3;
                    zuuluu = tangon.getChannel;
                    michal = _closure2_slot0;
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00002_ip = 63; continue _fun00001 }
 30:
                    tangon = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 2;
                    michal = michal[entity];
                    entity = undefined;
                    michal = tangon.bind(entity)(michal);
                    entity = michal.handleDisconnect;
                    entity = entity.bind(michal)(zuuluu);
 63:
                    zuuluu = _closure3_slot0;
                    entity = undefined;
                    michal = true;
                    michal = zuuluu.bind(entity)(michal);
                    return entity;
                }
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        report = michal;
        entity = new report[zuuluu](tangon, zuuluu);
        entity = entity instanceof Object ? entity : michal;
        return entity;
    };
    michal = argGra;
    michal['exports'] = report;
    michal = 3;
    michal = tangon[michal];
    tangon = zuuluu.bind(entity)(michal);
    zuuluu = tangon.fileFinishedImporting;
    michal = 'modules/headless_tasks/android/Disconnect.tsx';
    michal = zuuluu.bind(tangon)(michal);
    return entity;
})();