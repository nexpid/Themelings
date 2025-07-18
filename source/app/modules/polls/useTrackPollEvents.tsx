// app/modules/polls/useTrackPollEvents.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
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
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AnalyticEvents;
    var _closure1_slot4 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/polls/useTrackPollEvents.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: useTrackPollCreationEvents
        golfie = argFoo;
        oscard = argBar;
        var _closure2_slot0 = golfie;
        var _closure2_slot1 = oscard;
        entity = {};
        report = _closure1_slot3;
        tangon = report.useCallback;
        zuuluu = new Array(2);
        zuuluu[0] = golfie;
        zuuluu[1] = oscard;
        michal = function() {
            entity = 0;
            var _closure3_slot0 = entity;
            var _closure3_slot1 = entity;
            var _closure3_slot2 = entity;
            offset = _closure2_slot0;
            michal = offset.forEach;
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
            entity = michal.bind(offset)(entity);
            zuuluu = _closure1_slot1;
            option = _closure1_slot2;
            entity = 2;
            michal = option[entity];
            entity = undefined;
            report = zuuluu.bind(entity)(michal);
            tangon = report.trackWithMetadata;
            michal = _closure1_slot4;
            zuuluu = michal.POLL_CREATION_CANCELLED;
            michal = {};
            offset = offset.length;
            michal['answers_count'] = offset;
            offset = _closure3_slot0;
            michal['attachments_count'] = offset;
            offset = _closure3_slot1;
            michal['emojis_count'] = offset;
            verify = _closure3_slot2;
            michal['stickers_count'] = verify;
            golfie = _closure2_slot1;
            michal['allow_multiselect'] = golfie;
            golfie = _closure1_slot0;
            oscard = 3;
            oscard = option[oscard];
            oscard = golfie.bind(entity)(oscard);
            oscard = oscard.PollLayoutTypes;
            oscard = oscard.DEFAULT;
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