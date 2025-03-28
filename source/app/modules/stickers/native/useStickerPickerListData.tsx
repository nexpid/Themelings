// app/modules/stickers/native/useStickerPickerListData.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = golfie;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, michal);
    romeon = 0;
    report = golfie[romeon];
    michal = argCor;
    entity = undefined;
    michal = michal.bind(entity)(report);
    var _closure1_slot3 = michal;
    yankee = 1;
    michal = golfie[yankee];
    michal = oscard.bind(entity)(michal);
    michal = michal.useStickerPickerStore;
    var _closure1_slot4 = michal;
    verify = 2;
    michal = golfie[verify];
    michal = oscard.bind(entity)(michal);
    option = michal.LABEL_HEIGHT;
    report = michal.MIN_MARGIN;
    var _closure1_slot5 = report;
    report = michal.ROW_HEIGHT;
    var _closure1_slot6 = report;
    michal = michal.STICKER_SIZE;
    var _closure1_slot7 = michal;
    michal = 3;
    michal = golfie[michal];
    michal = oscard.bind(entity)(michal);
    report = michal.PADDING_VERTICAL;
    michal = {};
    michal['STICKERS'] = romeon;
    offset = 'STICKERS';
    michal[romeon] = offset;
    michal['NSFW'] = yankee;
    offset = 'NSFW';
    michal[yankee] = offset;
    var _closure1_slot8 = michal;
    report = verify * report;
    report = option + report;
    var _closure1_slot9 = report;
    report = 9;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/stickers/native/useStickerPickerListData.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function(argFoo) { // Original name: useStickerPickerListData
        michal = argFoo;
        option = michal.channel;
        verify = michal.containerWidth;
        var _closure2_slot0 = verify;
        oscard = michal.searchResults;
        var _closure2_slot1 = oscard;
        golfie = michal.stickerFormats;
        var _closure2_slot2 = golfie;
        tangon = _closure1_slot0;
        report = _closure1_slot2;
        zuuluu = 4;
        zuuluu = report[zuuluu];
        report = undefined;
        tangon = tangon.bind(report)(zuuluu);
        zuuluu = tangon.useStickerCategories;
        option = zuuluu.bind(tangon)(option);
        var _closure2_slot3 = option;
        tangon = _closure1_slot4;
        zuuluu = function(argFoo) {
            entity = argFoo;
            entity = entity.packToScrollTo;
            return entity;
        };
        report = tangon.bind(report)(zuuluu);
        var _closure2_slot4 = report;
        tangon = _closure1_slot3;
        zuuluu = tangon.useMemo;
        michal = new Array(5);
        michal[0] = verify;
        michal[1] = option;
        michal[2] = golfie;
        michal[3] = oscard;
        michal[4] = report;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = global;
                oscard = entity.Math;
                tangon = oscard.floor;
                zuuluu = _closure2_slot0;
                option = _closure1_slot5;
                golfie = zuuluu - option;
                zuuluu = _closure1_slot7;
                zuuluu = zuuluu + option;
                zuuluu = golfie / zuuluu;
                tangon = tangon.bind(oscard)(zuuluu);
                var _closure3_slot0 = tangon;
                option = new Array(0);
                var _closure3_slot1 = option;
                golfie = new Array(0);
                oscard = new Array(0);
                var _closure3_slot2 = oscard;
                zuuluu = new Array(0);
                var _closure3_slot3 = zuuluu;
                yankee = undefined;
                var _closure3_slot4 = yankee;
                offset = function(argFoo) { // Original name: pushCategory
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        report = argFoo;
                        tangon = arguments[1];
                        entity = undefined;
                        if(!(tangon === entity)) { _fun00004_ip = 16; continue _fun00003 }
 12:
                        tangon = '';
 16:
                        zuuluu = true;
                        michal = arguments[2];
                        if(!(zuuluu !== michal)) { _fun00004_ip = 142; continue _fun00003 }
 25:
                        zuuluu = report.filter;
                        michal = function(argFoo) {
                            zuuluu = _closure2_slot2;
                            michal = zuuluu.includes;
                            entity = argFoo;
                            entity = entity.format_type;
                            entity = michal.bind(zuuluu)(entity);
                            return entity;
                        };
                        golfie = zuuluu.bind(report)(michal);
                        zuuluu = _closure1_slot1;
                        report = _closure1_slot2;
                        michal = 5;
                        michal = report[michal];
                        oscard = zuuluu.bind(entity)(michal);
                        report = oscard.chunk;
                        michal = _closure3_slot0;
                        michal = report.bind(oscard)(golfie, michal);
                        golfie = _closure3_slot3;
                        oscard = golfie.push;
                        report = {};
                        option = _closure1_slot8;
                        option = option.STICKERS;
                        report['type'] = option;
                        report['stickersByRow'] = michal;
                        report = oscard.bind(golfie)(report);
                        report = _closure3_slot1;
                        zuuluu = report.push;
                        michal = michal.length;
                        michal = zuuluu.bind(report)(michal);
                        _fun00004_ip = 204; continue _fun00003;
 142:
                        oscard = _closure3_slot3;
                        report = oscard.push;
                        zuuluu = {};
                        golfie = _closure1_slot8;
                        golfie = golfie.NSFW;
                        zuuluu['type'] = golfie;
                        golfie = new Array(0);
                        zuuluu['stickersByRow'] = golfie;
                        zuuluu = report.bind(oscard)(zuuluu);
                        report = _closure3_slot1;
                        zuuluu = report.push;
                        michal = 1;
                        michal = zuuluu.bind(report)(michal);
 204:
                        zuuluu = _closure3_slot2;
                        michal = zuuluu.push;
                        michal = michal.bind(zuuluu)(tangon);
                        return entity;
                    }
                };
                var _closure3_slot5 = offset;
                romeon = _closure2_slot1;
                verify = null;
                if(!(verify == romeon)) { _fun00002_ip = 176; continue _fun00001 }
 110:
                foxtra = _closure2_slot3;
                romeon = foxtra.map;
                verify = function(argFoo, argBar) {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        michal = argFoo;
                        zuuluu = _closure2_slot4;
                        entity = michal.id;
                        if(!(zuuluu === entity)) { _fun00006_ip = 29; continue _fun00005 }
 19:
                        entity = argBar;
                        _closure3_slot4 = entity;
 29:
                        report = michal.type;
                        oscard = _closure1_slot0;
                        tangon = _closure1_slot2;
                        entity = 7;
                        tangon = tangon[entity];
                        entity = undefined;
                        tangon = oscard.bind(entity)(tangon);
                        tangon = tangon.StickerCategoryTypes;
                        tangon = tangon.GUILD;
                        report = report === tangon;
                        if(!report) { _fun00006_ip = 114; continue _fun00005 }
 78:
                        tangon = _closure1_slot0;
                        oscard = _closure1_slot2;
                        zuuluu = 8;
                        zuuluu = oscard[zuuluu];
                        oscard = tangon.bind(entity)(zuuluu);
                        tangon = oscard.shouldNSFWGateGuild;
                        zuuluu = michal.id;
                        report = tangon.bind(oscard)(zuuluu);
 114:
                        tangon = _closure3_slot5;
                        zuuluu = michal.stickers;
                        michal = michal.name;
                        michal = tangon.bind(entity)(zuuluu, michal, report);
                        return entity;
                    }
                };
                verify = romeon.bind(foxtra)(verify);
                romeon = golfie.push;
                verify = function(argFoo) { // Original name: getSectionHeights
                    zuuluu = argFoo;
                    michal = 0;
                    var _closure4_slot0 = michal;
                    michal = zuuluu.map;
                    entity = function(argFoo, argBar) {
                        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                            tangon = argFoo;
                            entity = 0;
                            michal = argBar;
                            if(!(entity === michal)) { _fun00008_ip = 16; continue _fun00007 }
 12:
                            if(!(entity !== tangon)) { _fun00008_ip = 59; continue _fun00007 }
 16:
                            zuuluu = _closure1_slot6;
                            zuuluu = tangon * zuuluu;
                            michal = _closure1_slot9;
                            report = zuuluu + michal;
                            tangon = _closure4_slot0;
                            michal = 12;
                            michal = report + michal;
                            michal = michal + tangon;
                            _closure4_slot0 = michal;
                            return michal;
 59:
                            return entity;
                        }
                    };
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                output = verify.bind(yankee)(option);
                verify = new Array(0);
                sizing = 0;
                result = verify;
                foxtra = arraySpread(result, output, sizing);
                result = romeon;
                output = verify;
                sizing = golfie;
                verify = apply(result, output, sizing);
                _fun00002_ip = 241; continue _fun00001;
 176:
                verify = _closure2_slot1;
                backup = _closure1_slot0;
                kiloes = _closure1_slot2;
                entity = 6;
                romeon = kiloes[entity];
                romeon = backup.bind(yankee)(romeon);
                foxtra = romeon.intl;
                romeon = foxtra.string;
                entity = kiloes[entity];
                entity = backup.bind(yankee)(entity);
                entity = entity.t;
                entity = entity.zkoeq6;
                entity = romeon.bind(foxtra)(entity);
                entity = offset.bind(yankee)(verify, entity);
 241:
                entity = {};
                entity['sections'] = option;
                entity['sectionHeights'] = golfie;
                golfie = _closure1_slot9;
                entity['sectionSize'] = golfie;
                golfie = 12;
                entity['sectionFooterSize'] = golfie;
                entity['sectionLabels'] = oscard;
                report = _closure1_slot6;
                entity['rowHeight'] = report;
                entity['rowSize'] = tangon;
                entity['rowsBySection'] = zuuluu;
                michal = _closure3_slot4;
                entity['packToScrollToIndex'] = michal;
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['default'] = tangon;
    zuuluu['StickerPickerSectionType'] = michal;
    return entity;
})();