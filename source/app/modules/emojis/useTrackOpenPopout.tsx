// app/modules/emojis/useTrackOpenPopout.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.EmojiInteractionPoint;
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AnalyticEvents;
    var _closure1_slot7 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/emojis/useTrackOpenPopout.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) {
        entity = argFoo;
        tangon = entity.emojiId;
        backup = entity.currentGuildId;
        zuuluu = entity.popoutData;
        var _closure2_slot0 = zuuluu;
        zuuluu = entity.nonce;
        var _closure2_slot1 = zuuluu;
        entity = entity.demoMode;
        var _closure2_slot2 = entity;
        golfie = _closure1_slot3;
        report = golfie.useRef;
        entity = {};
        entity['guild_id'] = backup;
        entity['emoji_id'] = tangon;
        verify = _closure1_slot0;
        oscard = _closure1_slot2;
        tangon = 5;
        option = oscard[tangon];
        tangon = undefined;
        offset = verify.bind(tangon)(option);
        verify = offset.collectChannelAnalyticsMetadata;
        romeon = _closure1_slot4;
        yankee = romeon.getChannel;
        foxtra = _closure1_slot5;
        option = foxtra.getChannelId;
        option = option.bind(foxtra)(backup);
        option = yankee.bind(romeon)(option);
        kiloes = verify.bind(offset)(option);
        sizing = entity;
        option = copyDataProperties(sizing, kiloes);
        entity = report.bind(golfie)(entity);
        entity = entity.current;
        var _closure2_slot3 = entity;
        report = _closure1_slot1;
        zuuluu = 6;
        zuuluu = oscard[zuuluu];
        zuuluu = report.bind(tangon)(zuuluu);
        michal = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 7;
                zuuluu = zuuluu[entity];
                entity = undefined;
                report = tangon.bind(entity)(zuuluu);
                tangon = report.initiateEmojiInteraction;
                zuuluu = _closure1_slot6;
                zuuluu = zuuluu.TrackOpenPopoutUsed;
                zuuluu = tangon.bind(report)(zuuluu);
                zuuluu = _closure2_slot2;
                if(zuuluu) { _fun00002_ip = 164; continue _fun00001 }
 56:
                tangon = _closure1_slot1;
                report = _closure1_slot2;
                zuuluu = 8;
                zuuluu = report[zuuluu];
                report = tangon.bind(entity)(zuuluu);
                tangon = report.track;
                michal = _closure1_slot7;
                zuuluu = michal.OPEN_POPOUT;
                michal = {};
                option = _closure2_slot0;
                golfie = null;
                verify = golfie == option;
                option = undefined;
                if(verify) { _fun00002_ip = 118; continue _fun00001 }
 108:
                verify = _closure2_slot0;
                option = verify.analyticsType;
 118:
                verify = golfie != option;
                golfie = 'Standard Emoji Popout';
                if(!verify) { _fun00002_ip = 134; continue _fun00001 }
 131:
                golfie = option;
 134:
                michal['type'] = golfie;
                golfie = _closure2_slot1;
                michal['nonce'] = golfie;
                offset = _closure2_slot3;
                yankee = michal;
                oscard = copyDataProperties(yankee, offset);
                michal = tangon.bind(report)(zuuluu, michal);
 164:
                return entity;
            }
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['useTrackOpenPopout'] = michal;
    return entity;
})();