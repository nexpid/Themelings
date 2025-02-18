// app/modules/emoji_picker/native/components/data/useEmojiPickerData.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    report = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = report;
    var _closure1_slot2 = golfie;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, michal);
    yankee = 0;
    option = golfie[yankee];
    michal = argCor;
    entity = undefined;
    michal = michal.bind(entity)(option);
    var _closure1_slot3 = michal;
    offset = 1;
    michal = golfie[offset];
    michal = report.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = golfie[offset];
    michal = oscard.bind(entity)(michal);
    michal = michal.LoadState;
    var _closure1_slot5 = michal;
    verify = 2;
    michal = golfie[verify];
    michal = oscard.bind(entity)(michal);
    michal = michal.EmojiCategoryTypes;
    var _closure1_slot6 = michal;
    option = 3;
    michal = golfie[option];
    michal = oscard.bind(entity)(michal);
    michal = michal.EmojiPickerRenderingDataType;
    var _closure1_slot7 = michal;
    michal = {};
    michal['PLACEHOLDER'] = yankee;
    report = 'PLACEHOLDER';
    michal[yankee] = report;
    michal['TITLE'] = offset;
    report = 'TITLE';
    michal[offset] = report;
    michal['EMOJI_ROW'] = verify;
    report = 'EMOJI_ROW';
    michal[verify] = report;
    michal['EMOJI_ROW_SLIM'] = option;
    report = 'EMOJI_ROW_SLIM';
    michal[option] = report;
    option = 4;
    michal['EMOJI_ROW_NSFW'] = option;
    report = 'EMOJI_ROW_NSFW';
    michal[option] = report;
    option = 5;
    michal['FOOTER_UPSELL'] = option;
    report = 'FOOTER_UPSELL';
    michal[option] = report;
    option = 6;
    michal['PREMIUM_INLINE_ROADBLOCK'] = option;
    report = 'PREMIUM_INLINE_ROADBLOCK';
    michal[option] = report;
    option = 7;
    michal['NATIVE_SECTION'] = option;
    report = 'NATIVE_SECTION';
    michal[option] = report;
    var _closure1_slot8 = michal;
    report = 9;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/emoji_picker/native/components/data/useEmojiPickerData.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function(argFoo) { // Original name: useEmojiPickerData
        michal = argFoo;
        golfie = michal.emojiSections;
        var _closure2_slot0 = golfie;
        oscard = michal.rowSize;
        var _closure2_slot1 = oscard;
        report = michal.isNativeEmojiPickerEnabled;
        var _closure2_slot2 = report;
        option = _closure1_slot0;
        tangon = _closure1_slot2;
        zuuluu = 4;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        verify = option.bind(zuuluu)(tangon);
        option = verify.useStateFromStores;
        zuuluu = _closure1_slot4;
        tangon = new Array(1);
        tangon[0] = zuuluu;
        zuuluu = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = _closure1_slot4;
                zuuluu = entity.loadState;
                entity = _closure1_slot5;
                entity = entity.Loaded;
                entity = zuuluu === entity;
                if(entity) { _fun00002_ip = 44; continue _fun00001 }
 30:
                michal = _closure1_slot5;
                michal = michal.MaybeLoaded;
                entity = zuuluu === michal;
 44:
                if(entity) { _fun00002_ip = 57; continue _fun00001 }
 47:
                michal = _closure2_slot2;
                entity = !michal;
 57:
                return entity;
            }
        };
        option = option.bind(verify)(tangon, zuuluu);
        var _closure2_slot3 = option;
        tangon = _closure1_slot3;
        zuuluu = tangon.useMemo;
        michal = new Array(4);
        michal[0] = option;
        michal[1] = golfie;
        michal[2] = oscard;
        michal[3] = report;
        entity = function() {
            entity = {};
            zuuluu = _closure1_slot8;
            zuuluu = zuuluu.PLACEHOLDER;
            entity['type'] = zuuluu;
            tangon = false;
            entity['isSectionNitroLocked'] = tangon;
            zuuluu = new Array(1);
            zuuluu[0] = entity;
            var _closure3_slot0 = zuuluu;
            entity = {};
            entity['data'] = zuuluu;
            report = _closure2_slot1;
            entity['rowSize'] = report;
            report = new Array(0);
            entity['headerIndices'] = report;
            report = _closure2_slot3;
            entity['hasGuildData'] = report;
            entity['hasSearchData'] = tangon;
            entity['hasSearchUpsell'] = tangon;
            var _closure3_slot1 = entity;
            tangon = _closure2_slot0;
            zuuluu = tangon.forEach;
            michal = function(argFoo, argBar) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    tangon = argFoo;
                    golfie = argBar;
                    entity = tangon.isSectionNitroLocked;
                    oscard = true;
                    option = oscard === entity;
                    entity = !option;
                    zuuluu = !entity;
                    michal = zuuluu;
                    if(!option) { _fun00004_ip = 69; continue _fun00003 }
 30:
                    report = _closure2_slot0;
                    entity = 1;
                    entity = golfie - entity;
                    report = report[entity];
                    entity = null;
                    verify = entity == report;
                    entity = undefined;
                    if(verify) { _fun00004_ip = 65; continue _fun00003 }
 59:
                    entity = report.isSectionNitroLocked;
 65:
                    michal = oscard !== entity;
 69:
                    if(!option) { _fun00004_ip = 111; continue _fun00003 }
 72:
                    report = _closure2_slot0;
                    entity = 1;
                    entity = golfie + entity;
                    report = report[entity];
                    entity = null;
                    golfie = entity == report;
                    entity = undefined;
                    if(golfie) { _fun00004_ip = 107; continue _fun00003 }
 101:
                    entity = report.isSectionNitroLocked;
 107:
                    zuuluu = oscard !== entity;
 111:
                    golfie = tangon.type;
                    report = _closure1_slot7;
                    report = report.NATIVE_SECTION;
                    if(!(golfie === report)) { _fun00004_ip = 184; continue _fun00003 }
 133:
                    verify = _closure3_slot0;
                    golfie = verify.push;
                    yankee = _closure1_slot1;
                    offset = _closure1_slot2;
                    report = 5;
                    report = offset[report];
                    offset = undefined;
                    report = yankee.bind(offset)(report);
                    report = report.bind(offset)(tangon, michal, zuuluu);
                    report = golfie.bind(verify)(report);
                    _fun00004_ip = 867; continue _fun00003;
 184:
                    if(!michal) { _fun00004_ip = 259; continue _fun00003 }
 187:
                    golfie = _closure3_slot0;
                    report = golfie.push;
                    verify = _closure1_slot1;
                    romeon = _closure1_slot2;
                    michal = 6;
                    michal = romeon[michal];
                    offset = undefined;
                    verify = verify.bind(offset)(michal);
                    yankee = _closure1_slot0;
                    michal = 7;
                    michal = romeon[michal];
                    michal = yankee.bind(offset)(michal);
                    michal = michal.PremiumUpsellSectionDividerPosition;
                    michal = michal.START;
                    michal = verify.bind(offset)(michal);
                    michal = report.bind(golfie)(michal);
 259:
                    report = tangon.label;
                    michal = null;
                    if(!(michal != report)) { _fun00004_ip = 349; continue _fun00003 }
 270:
                    michal = _closure3_slot0;
                    verify = michal.push;
                    golfie = {};
                    offset = _closure1_slot8;
                    offset = offset.TITLE;
                    golfie['type'] = offset;
                    offset = tangon.label;
                    golfie['title'] = offset;
                    golfie['isSectionNitroLocked'] = option;
                    golfie = verify.bind(michal)(golfie);
                    report = _closure3_slot1;
                    golfie = report.headerIndices;
                    report = golfie.push;
                    verify = michal.length;
                    michal = 1;
                    michal = verify - michal;
                    michal = report.bind(golfie)(michal);
 349:
                    michal = global;
                    golfie = michal.Math;
                    report = golfie.ceil;
                    michal = tangon.emojis;
                    verify = michal.length;
                    michal = _closure2_slot1;
                    michal = verify / michal;
                    yankee = report.bind(golfie)(michal);
                    offset = 0;
                    foxtra = offset < yankee;
                    verify = 8;
                    report = undefined;
                    golfie = 0;
                    if(!foxtra) { _fun00004_ip = 718; continue _fun00003 }
 412:
                    foxtra = _closure2_slot2;
                    if(foxtra) { _fun00004_ip = 581; continue _fun00003 }
 422:
                    backup = tangon.type;
                    foxtra = _closure1_slot7;
                    foxtra = foxtra.EMOJI;
                    if(!(backup !== foxtra)) { _fun00004_ip = 503; continue _fun00003 }
 441:
                    backup = tangon.type;
                    foxtra = _closure1_slot7;
                    foxtra = foxtra.NSFW;
                    if(!(backup === foxtra)) { _fun00004_ip = 708; continue _fun00003 }
 463:
                    kiloes = _closure3_slot0;
                    backup = kiloes.push;
                    foxtra = {};
                    sizing = _closure1_slot8;
                    sizing = sizing.EMOJI_ROW_NSFW;
                    foxtra['type'] = sizing;
                    foxtra['isSectionNitroLocked'] = option;
                    foxtra = backup.bind(kiloes)(foxtra);
                    _fun00004_ip = 708; continue _fun00003;
 503:
                    kiloes = _closure3_slot0;
                    backup = kiloes.push;
                    foxtra = {};
                    sizing = _closure1_slot8;
                    sizing = sizing.EMOJI_ROW;
                    foxtra['type'] = sizing;
                    foxtra['row'] = golfie;
                    sizing = tangon.emojis;
                    foxtra['emojis'] = sizing;
                    sizing = tangon.emojisDisabled;
                    foxtra['emojisDisabled'] = sizing;
                    sizing = tangon.footer;
                    foxtra['footer'] = sizing;
                    foxtra['isSectionNitroLocked'] = option;
                    foxtra = backup.bind(kiloes)(foxtra);
                    _fun00004_ip = 708; continue _fun00003;
 581:
                    foxtra = offset === golfie;
                    if(!foxtra) { _fun00004_ip = 607; continue _fun00003 }
 588:
                    kiloes = tangon.type;
                    backup = _closure1_slot7;
                    backup = backup.EMOJI;
                    foxtra = kiloes === backup;
 607:
                    if(!foxtra) { _fun00004_ip = 708; continue _fun00003 }
 610:
                    backup = _closure3_slot1;
                    foxtra = backup.hasSearchData;
                    if(foxtra) { _fun00004_ip = 643; continue _fun00003 }
 623:
                    sizing = tangon.footer;
                    kiloes = _closure1_slot6;
                    kiloes = kiloes.SEARCH_RESULTS;
                    foxtra = sizing === kiloes;
 643:
                    if(foxtra) { _fun00004_ip = 666; continue _fun00003 }
 646:
                    sizing = tangon.footer;
                    kiloes = _closure1_slot6;
                    kiloes = kiloes.PREMIUM_UPSELL;
                    foxtra = sizing === kiloes;
 666:
                    backup['hasSearchData'] = foxtra;
                    kiloes = _closure3_slot0;
                    backup = kiloes.push;
                    sizing = _closure1_slot1;
                    foxtra = _closure1_slot2;
                    foxtra = foxtra[verify];
                    foxtra = sizing.bind(report)(foxtra);
                    foxtra = foxtra.bind(report)(tangon);
                    foxtra = backup.bind(kiloes)(foxtra);
 708:
                    golfie = golfie + 1;
                    if(golfie < yankee) { _fun00004_ip = 412; continue _fun00003 }
 718:
                    golfie = tangon.footer;
                    tangon = _closure1_slot6;
                    tangon = tangon.PREMIUM_UPSELL;
                    if(!(golfie === tangon)) { _fun00004_ip = 797; continue _fun00003 }
 738:
                    tangon = _closure3_slot1;
                    tangon['hasSearchUpsell'] = oscard;
                    golfie = _closure3_slot0;
                    oscard = golfie.push;
                    tangon = {};
                    verify = _closure1_slot8;
                    verify = verify.FOOTER_UPSELL;
                    tangon['type'] = verify;
                    verify = _closure1_slot6;
                    verify = verify.PREMIUM_UPSELL;
                    tangon['id'] = verify;
                    tangon['isSectionNitroLocked'] = option;
                    tangon = oscard.bind(golfie)(tangon);
 797:
                    if(!zuuluu) { _fun00004_ip = 867; continue _fun00003 }
 800:
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.push;
                    oscard = _closure1_slot1;
                    golfie = _closure1_slot2;
                    tangon = 6;
                    tangon = golfie[tangon];
                    tangon = oscard.bind(report)(tangon);
                    oscard = _closure1_slot0;
                    entity = 7;
                    entity = golfie[entity];
                    entity = oscard.bind(report)(entity);
                    entity = entity.PremiumUpsellSectionDividerPosition;
                    entity = entity.END;
                    entity = tangon.bind(report)(entity);
                    entity = michal.bind(zuuluu)(entity);
 867:
                    entity = undefined;
                    return entity;
                }
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['default'] = tangon;
    zuuluu['EmojiPickerFlashListItemType'] = michal;
    return entity;
})();