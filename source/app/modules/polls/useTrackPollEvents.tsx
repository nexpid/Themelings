// app/modules/polls/useTrackPollEvents.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    entity = argBaz;
    var _closure1_slot0 = entity;
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
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AnalyticEvents;
    var _closure1_slot3 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/polls/useTrackPollEvents.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar, argBaz) { // Original name: useTrackPollCreationEvents
        option = argFoo;
        golfie = argBar;
        oscard = argBaz;
        var _closure2_slot0 = option;
        var _closure2_slot1 = golfie;
        var _closure2_slot2 = oscard;
        entity = {};
        report = _closure1_slot2;
        tangon = report.useCallback;
        zuuluu = new Array(3);
        zuuluu[0] = option;
        zuuluu[1] = golfie;
        zuuluu[2] = oscard;
        michal = function() {
            entity = 0;
            var _closure3_slot0 = entity;
            var _closure3_slot1 = entity;
            var _closure3_slot2 = entity;
            option = _closure2_slot0;
            michal = option.forEach;
            entity = function(argFoo) {
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    entity = argFoo;
                    entity = entity.image;
                    michal = null;
                    if(!(michal != entity)) { _fun00002_ip = 103; continue _fun00001 }
 15:
                    zuuluu = entity.emoji;
                    if(!(michal == zuuluu)) { _fun00002_ip = 85; continue _fun00001 }
 25:
                    zuuluu = entity.stickerId;
                    if(!(michal == zuuluu)) { _fun00002_ip = 65; continue _fun00001 }
 35:
                    entity = entity.mediaAttachmentState;
                    if(!(michal != entity)) { _fun00002_ip = 103; continue _fun00001 }
 45:
                    zuuluu = _closure3_slot0;
                    entity = 1;
                    entity = zuuluu + entity;
                    _closure3_slot0 = entity;
                    _fun00002_ip = 103; continue _fun00001;
 65:
                    zuuluu = _closure3_slot2;
                    entity = 1;
                    entity = zuuluu + entity;
                    _closure3_slot2 = entity;
                    _fun00002_ip = 103; continue _fun00001;
 85:
                    zuuluu = _closure3_slot1;
                    entity = 1;
                    entity = zuuluu + entity;
                    _closure3_slot1 = entity;
 103:
                    entity = undefined;
                    return entity;
                }
            };
            entity = michal.bind(option)(entity);
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            entity = 2;
            zuuluu = zuuluu[entity];
            entity = undefined;
            report = tangon.bind(entity)(zuuluu);
            tangon = report.trackWithMetadata;
            michal = _closure1_slot3;
            zuuluu = michal.POLL_CREATION_CANCELLED;
            michal = {};
            option = option.length;
            michal['answers_count'] = option;
            option = _closure3_slot0;
            michal['attachments_count'] = option;
            option = _closure3_slot1;
            michal['emojis_count'] = option;
            golfie = _closure3_slot2;
            michal['stickers_count'] = golfie;
            golfie = _closure2_slot1;
            michal['allow_multiselect'] = golfie;
            oscard = _closure2_slot2;
            michal['layout_type'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        };
        michal = tangon.bind(report)(michal, zuuluu);
        entity['trackPollCreationCancelled'] = michal;
        return entity;
    };
    zuuluu['useTrackPollCreationEvents'] = michal;
    return entity;
})();