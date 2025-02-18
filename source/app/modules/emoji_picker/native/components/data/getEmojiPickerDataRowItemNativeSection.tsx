// app/modules/emoji_picker/native/components/data/getEmojiPickerDataRowItemNativeSection.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    tangon = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tangon;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, oscard);
    entity = 1;
    tangon = tangon[entity];
    entity = undefined;
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/emoji_picker/native/components/data/getEmojiPickerDataRowItemNativeSection.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar, argBaz) { // Original name: getEmojiPickerDataRowItemNativeSection
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            oscard = entity.label;
            report = entity.guildId;
            tangon = entity.emojiCount;
            golfie = entity.emojisDisabled;
            michal = entity.isSectionNitroLocked;
            verify = undefined;
            if(!(michal === verify)) { _fun00002_ip = 39; continue _fun00001 }
 37:
            michal = false;
 39:
            if(michal) { _fun00002_ip = 62; continue _fun00001 }
 42:
            entity = global;
            zuuluu = entity.Array;
            entity = zuuluu.from;
            zuuluu = entity.bind(zuuluu)(golfie);
            _fun00002_ip = 66; continue _fun00001;
 62:
            zuuluu = new Array(0);
 66:
            entity = {};
            option = _closure1_slot0;
            offset = _closure1_slot1;
            golfie = 0;
            golfie = offset[golfie];
            golfie = option.bind(verify)(golfie);
            golfie = golfie.EmojiPickerFlashListItemType;
            golfie = golfie.NATIVE_SECTION;
            entity['type'] = golfie;
            entity['title'] = oscard;
            entity['guildId'] = report;
            entity['emojiCount'] = tangon;
            entity['emojisDisabled'] = zuuluu;
            entity['isSectionNitroLocked'] = michal;
            michal = argBar;
            entity['hasPremiumInlineRoadblockHeader'] = michal;
            michal = argBaz;
            entity['hasPremiumInlineRoadblockFooter'] = michal;
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();