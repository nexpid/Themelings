// app/modules/stage_channels/useMyCurrentStageChannel.tsx
export default (function(_, argBar, argBaz, __, ___, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
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
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/stage_channels/useMyCurrentStageChannel.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: useMyCurrentStageChannel
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        michal = 2;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.useStateFromStores;
        report = _closure1_slot3;
        michal = new Array(2);
        michal[0] = report;
        entity = _closure1_slot2;
        michal[1] = entity;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zuuluu = _closure1_slot3;
                michal = zuuluu.getVoiceChannelId;
                tangon = michal.bind(zuuluu)();
                michal = null;
                if(!(michal != tangon)) { _fun00002_ip = 54; continue _fun00001 }
 23:
                zuuluu = _closure1_slot2;
                entity = zuuluu.getChannel;
                entity = entity.bind(zuuluu)(tangon);
                if(!(michal != entity)) { _fun00002_ip = 54; continue _fun00001 }
 41:
                zuuluu = entity.isGuildStageVoice;
                zuuluu = zuuluu.bind(entity)();
                if(zuuluu) { _fun00002_ip = 56; continue _fun00001 }
 54:
                return michal;
 56:
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();