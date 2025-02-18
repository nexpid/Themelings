// app/modules/emoji_picker/hooks/useTopAndNewlyAddedEmojis.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    michal = function(argFoo) { // Original name: getTopAndNewlyAddedEmojis
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            report = entity.emojiStoreInstance;
            michal = undefined;
            if(!(report === michal)) { _fun00002_ip = 22; continue _fun00001 }
 15:
            report = _closure1_slot2;
 22:
            tangon = entity.guildId;
            oscard = entity.pickerIntention;
            entity = {};
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu.REACTION;
            if(!(oscard === zuuluu)) { _fun00002_ip = 58; continue _fun00001 }
 52:
            zuuluu = _closure1_slot4;
            _fun00002_ip = 71; continue _fun00001;
 58:
            golfie = report.getTopEmoji;
            zuuluu = golfie.bind(report)(tangon);
 71:
            entity['topEmojis'] = zuuluu;
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu.REACTION;
            if(!(oscard === zuuluu)) { _fun00002_ip = 96; continue _fun00001 }
 90:
            michal = _closure1_slot4;
            _fun00002_ip = 109; continue _fun00001;
 96:
            zuuluu = report.getNewlyAddedEmoji;
            michal = zuuluu.bind(report)(tangon);
 109:
            entity['newlyAddedEmojis'] = michal;
            return entity;
        }
    };
    var _closure1_slot5 = michal;
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
    report = argBaz;
    entity = undefined;
    report = report.bind(entity)(option);
    var _closure1_slot2 = report;
    report = 1;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.EmojiIntention;
    var _closure1_slot3 = report;
    report = new Array(0);
    var _closure1_slot4 = report;
    report = 3;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/emoji_picker/hooks/useTopAndNewlyAddedEmojis.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function(argFoo, argBar) { // Original name: useTopAndNewlyAddedEmojis
        golfie = argFoo;
        oscard = argBar;
        var _closure2_slot0 = golfie;
        var _closure2_slot1 = oscard;
        report = _closure1_slot0;
        tangon = _closure1_slot1;
        zuuluu = 2;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        report = report.bind(zuuluu)(tangon);
        tangon = report.useStateFromStoresObject;
        michal = _closure1_slot2;
        zuuluu = new Array(1);
        zuuluu[0] = michal;
        michal = new Array(2);
        michal[0] = golfie;
        michal[1] = oscard;
        entity = function() {
            zuuluu = _closure1_slot5;
            michal = {};
            entity = _closure1_slot2;
            michal['emojiStoreInstance'] = entity;
            tangon = _closure2_slot0;
            michal['guildId'] = tangon;
            entity = _closure2_slot1;
            michal['pickerIntention'] = entity;
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            return entity;
        };
        entity = tangon.bind(report)(zuuluu, entity, michal);
        return entity;
    };
    zuuluu['default'] = tangon;
    zuuluu['getTopAndNewlyAddedEmojis'] = michal;
    return entity;
})();