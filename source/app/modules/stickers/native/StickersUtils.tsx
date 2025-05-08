// app/modules/stickers/native/StickersUtils.tsx
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
    tangon = report.bind(entity)(tangon);
    tangon = tangon.NativeModules;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.useStickerPickerStore;
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.GuildNSFWContentLevel;
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ExpressionPickerViewType;
    var _closure1_slot9 = tangon;
    tangon = 12;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/stickers/native/StickersUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) {
        report = _closure1_slot0;
        tangon = _closure1_slot2;
        zuuluu = 7;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        report = report.bind(zuuluu)(tangon);
        tangon = report.useStickerPackCategories;
        zuuluu = argFoo;
        oscard = tangon.bind(report)(zuuluu);
        var _closure2_slot0 = oscard;
        tangon = _closure1_slot6;
        zuuluu = tangon.getCurrentUser;
        report = zuuluu.bind(tangon)();
        var _closure2_slot1 = report;
        tangon = _closure1_slot5;
        zuuluu = tangon.getGuilds;
        golfie = zuuluu.bind(tangon)();
        var _closure2_slot2 = golfie;
        tangon = _closure1_slot3;
        zuuluu = tangon.useMemo;
        michal = new Array(3);
        michal[0] = golfie;
        michal[1] = oscard;
        michal[2] = report;
        entity = function() {
            tangon = _closure2_slot0;
            zuuluu = tangon.filter;
            michal = function(argFoo) {
                entity = argFoo;
                entity = entity.stickers;
                michal = entity.length;
                entity = 0;
                entity = michal > entity;
                return entity;
            };
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.filter;
            michal = function(argFoo) {
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    entity = argFoo;
                    zuuluu = _closure2_slot2;
                    michal = entity.id;
                    tangon = zuuluu[michal];
                    michal = entity.type;
                    golfie = _closure1_slot0;
                    oscard = _closure1_slot2;
                    entity = 8;
                    oscard = oscard[entity];
                    entity = undefined;
                    entity = golfie.bind(entity)(oscard);
                    entity = entity.StickerCategoryTypes;
                    entity = entity.GUILD;
                    entity = michal !== entity;
                    if(entity) { _fun00002_ip = 94; continue _fun00001 }
 68:
                    oscard = _closure2_slot1;
                    michal = null;
                    michal = michal != oscard;
                    if(!michal) { _fun00002_ip = 91; continue _fun00001 }
 81:
                    report = _closure2_slot1;
                    michal = report.nsfwAllowed;
 91:
                    entity = michal;
 94:
                    if(entity) { _fun00002_ip = 103; continue _fun00001 }
 97:
                    michal = null;
                    entity = michal == tangon;
 103:
                    if(entity) { _fun00002_ip = 152; continue _fun00001 }
 106:
                    report = tangon.nsfwLevel;
                    michal = _closure1_slot8;
                    michal = michal.AGE_RESTRICTED;
                    michal = report !== michal;
                    if(!michal) { _fun00002_ip = 149; continue _fun00001 }
 129:
                    tangon = tangon.nsfwLevel;
                    zuuluu = _closure1_slot8;
                    zuuluu = zuuluu.EXPLICIT;
                    michal = tangon !== zuuluu;
 149:
                    entity = michal;
 152:
                    entity = !entity;
                    entity = !entity;
                    return entity;
                }
            };
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.map;
            entity = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = argFoo;
                    tangon = michal.type;
                    oscard = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    golfie = 8;
                    zuuluu = zuuluu[golfie];
                    report = undefined;
                    zuuluu = oscard.bind(report)(zuuluu);
                    zuuluu = zuuluu.StickerCategoryTypes;
                    zuuluu = zuuluu.FAVORITE;
                    if(!(tangon !== zuuluu)) { _fun00004_ip = 89; continue _fun00003 }
 49:
                    tangon = michal.type;
                    oscard = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    zuuluu = zuuluu[golfie];
                    zuuluu = oscard.bind(report)(zuuluu);
                    zuuluu = zuuluu.StickerCategoryTypes;
                    zuuluu = zuuluu.RECENT;
                    if(!(tangon !== zuuluu)) { _fun00004_ip = 89; continue _fun00003 }
 87:
                    return michal;
 89:
                    tangon = michal.type;
                    oscard = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    zuuluu = zuuluu[golfie];
                    zuuluu = oscard.bind(report)(zuuluu);
                    zuuluu = zuuluu.StickerCategoryTypes;
                    zuuluu = zuuluu.FAVORITE;
                    if(!(tangon !== zuuluu)) { _fun00004_ip = 149; continue _fun00003 }
 127:
                    tangon = _closure1_slot1;
                    oscard = _closure1_slot2;
                    zuuluu = 10;
                    zuuluu = oscard[zuuluu];
                    zuuluu = tangon.bind(report)(zuuluu);
                    _fun00004_ip = 169; continue _fun00003;
 149:
                    tangon = _closure1_slot1;
                    oscard = _closure1_slot2;
                    entity = 9;
                    entity = oscard[entity];
                    zuuluu = tangon.bind(report)(entity);
 169:
                    entity = {};
                    verify = entity;
                    option = michal;
                    michal = copyDataProperties(verify, option);
                    michal = 'icon';
                    entity[michal] = zuuluu;
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['useStickerCategories'] = tangon;
    tangon = function(argFoo) {
        entity = argFoo;
        backup = entity.hash;
        foxtra = entity.url;
        romeon = entity.width;
        yankee = entity.height;
        offset = entity.frames;
        verify = entity.callback;
        entity = _closure1_slot4;
        michal = entity.NativeLottieUtils;
        entity = michal.preload;
        kiloes = michal;
        entity = kiloes[entity](backup, foxtra, romeon, yankee, offset, verify, option);
        entity = undefined;
        return entity;
    };
    zuuluu['preloadSticker'] = tangon;
    tangon = function(argFoo) {
        entity = _closure1_slot4;
        zuuluu = entity.NativeLottieUtils;
        michal = zuuluu.dropPreload;
        entity = argFoo;
        entity = michal.bind(zuuluu)(entity);
        entity = undefined;
        return entity;
    };
    zuuluu['dropPreloadedSticker'] = tangon;
    michal = function(argFoo, argBar) {
        entity = argFoo;
        var _closure2_slot0 = entity;
        zuuluu = _closure1_slot7;
        entity = zuuluu.getState;
        tangon = entity.bind(zuuluu)();
        zuuluu = tangon.setPackToScrollTo;
        entity = argBar;
        entity = zuuluu.bind(tangon)(entity);
        entity = global;
        tangon = entity.setTimeout;
        entity = undefined;
        zuuluu = function() {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                entity = _closure2_slot0;
                zuuluu = entity.current;
                entity = null;
                if(!(entity != zuuluu)) { _fun00006_ip = 86; continue _fun00005 }
 18:
                michal = zuuluu.openCustomKeyboard;
                entity = {};
                golfie = _closure1_slot0;
                oscard = _closure1_slot2;
                report = 11;
                oscard = oscard[report];
                report = undefined;
                report = golfie.bind(report)(oscard);
                report = report.KeyboardTypes;
                report = report.EXPRESSION;
                entity['type'] = report;
                tangon = _closure1_slot9;
                tangon = tangon.STICKER;
                entity['context'] = tangon;
                entity = michal.bind(zuuluu)(entity);
 86:
                entity = undefined;
                return entity;
            }
        };
        michal = 1;
        michal = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    zuuluu['openStickerPickerToPackId'] = michal;
    return entity;
})();