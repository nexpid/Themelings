// app/modules/media_viewer/native/MediaPlayerMuteManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    report = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = golfie[entity];
    entity = undefined;
    michal = report.bind(entity)(michal);
    var _closure1_slot2 = michal;
    michal = 1;
    michal = golfie[michal];
    michal = report.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 2;
    michal = golfie[michal];
    michal = oscard.bind(entity)(michal);
    verify = michal.NativeEventEmitter;
    report = michal.NativeModules;
    michal = 3;
    michal = golfie[michal];
    offset = oscard.bind(entity)(michal);
    option = offset.create;
    michal = function() {
        entity = {};
        michal = false;
        entity['isMuted'] = michal;
        return entity;
    };
    michal = option.bind(offset)(michal);
    var _closure1_slot4 = michal;
    foxtra = report.MediaPlayerManager;
    option = verify.prototype;
    option = Object.create(option, {constructor: {value: verify}});
    backup = option;
    report = new backup[verify](foxtra, romeon);
    report = report instanceof Object ? report : option;
    var _closure1_slot5 = report;
    tangon = function() {
        tangon = _closure1_slot3;
        zuuluu = function() { // Original name: MediaPlayerMuteManager
            michal = this;
            tangon = _closure1_slot2;
            zuuluu = _closure2_slot0;
            entity = undefined;
            zuuluu = tangon.bind(entity)(michal, zuuluu);
            michal['muteSubscription'] = entity;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'initialize';
        entity['key'] = michal;
        michal = function() { // Original name: value
            tangon = _closure1_slot5;
            zuuluu = tangon.addListener;
            michal = 'MediaPlayerMuteStateChanged';
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.isMuted;
                var _closure4_slot0 = entity;
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot1;
                entity = 4;
                zuuluu = zuuluu[entity];
                entity = undefined;
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = tangon.batchUpdates;
                michal = function() {
                    zuuluu = _closure1_slot4;
                    michal = zuuluu.setState;
                    entity = {};
                    tangon = _closure4_slot0;
                    entity['isMuted'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
                    entity = undefined;
                    return entity;
                };
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal, entity);
            entity = this;
            entity['muteSubscription'] = michal;
            entity = undefined;
            return entity;
        };
        entity['value'] = michal;
        michal = new Array(2);
        michal[0] = entity;
        entity = {};
        oscard = 'terminate';
        entity['key'] = oscard;
        report = function() { // Original name: value
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = this;
                michal = entity.muteSubscription;
                entity = null;
                if(!(entity != michal)) { _fun00002_ip = 25; continue _fun00001 }
 15:
                entity = michal.remove;
                entity = entity.bind(michal)();
 25:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = report;
        michal[1] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    tangon = tangon.bind(entity)();
    report = tangon.prototype;
    report = Object.create(report, {constructor: {value: tangon}});
    backup = report;
    tangon = new backup[tangon](foxtra);
    tangon = tangon instanceof Object ? tangon : report;
    report = 5;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/media_viewer/native/MediaPlayerMuteManager.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    zuuluu['useMediaPlayerMutedStore'] = michal;
    return entity;
})();