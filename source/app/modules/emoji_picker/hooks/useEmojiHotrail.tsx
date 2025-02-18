// app/modules/emoji_picker/hooks/useEmojiHotrail.tsx
export default (function(argFoo, argBar, _, argCor, __, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    michal = function(argFoo) { // Original name: getEmojiHotrail
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            report = entity.topEmojis;
            tangon = entity.newlyAddedEmojis;
            michal = entity.rowSize;
            entity = undefined;
            if(!(michal === entity)) { _fun00002_ip = 34; continue _fun00001 }
 27:
            michal = _closure1_slot1;
 34:
            zuuluu = report.slice;
            entity = tangon.length;
            michal = michal - entity;
            entity = 0;
            zuuluu = zuuluu.bind(report)(entity, michal);
            entity = {};
            entity['visibleTopEmojis'] = zuuluu;
            entity['visibleNewlyAddedEmojis'] = tangon;
            michal = zuuluu.concat;
            michal = michal.bind(zuuluu)(tangon);
            entity['allEmojis'] = michal;
            return entity;
        }
    };
    var _closure1_slot2 = michal;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, report);
    entity = 0;
    option = golfie[entity];
    report = argCor;
    entity = undefined;
    report = report.bind(entity)(option);
    var _closure1_slot0 = report;
    report = 1;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.EMOJI_ROW_SIZE;
    var _closure1_slot1 = report;
    report = 2;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/emoji_picker/hooks/useEmojiHotrail.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function(argFoo) { // Original name: useEmojiHotrail
        report = argFoo;
        var _closure2_slot0 = report;
        tangon = _closure1_slot0;
        zuuluu = tangon.useMemo;
        michal = new Array(1);
        michal[0] = report;
        entity = function() {
            zuuluu = _closure1_slot2;
            michal = _closure2_slot0;
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            return entity;
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['default'] = tangon;
    zuuluu['getEmojiHotrail'] = michal;
    return entity;
})();