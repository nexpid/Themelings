// app/modules/stickers/native/StickersUtils.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    options = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(options);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.NativeModules;
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.useStickerPickerStore;
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.GuildNSFWContentLevel;
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.KeyboardTypes;
    var _closure1_slot9 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ExpressionPickerViewType;
    var _closure1_slot10 = tango;
    tango = 12;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/stickers/native/StickersUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) {
        report = _closure1_slot0;
        tango = _closure1_slot2;
        zulu = 8;
        tango = tango[zulu];
        zulu = undefined;
        report = report.bind(zulu)(tango);
        tango = report.useStickerPackCategories;
        zulu = argFoo;
        oscar = tango.bind(report)(zulu);
        var _closure2_slot0 = oscar;
        tango = _closure1_slot6;
        zulu = tango.getCurrentUser;
        report = zulu.bind(tango)();
        var _closure2_slot1 = report;
        tango = _closure1_slot5;
        zulu = tango.getGuilds;
        golf = zulu.bind(tango)();
        var _closure2_slot2 = golf;
        tango = _closure1_slot3;
        zulu = tango.useMemo;
        mike = new Array(3);
        mike[0] = golf;
        mike[1] = oscar;
        mike[2] = report;
        entity = function() {
            tango = _closure2_slot0;
            zulu = tango.filter;
            mike = function(argFoo) {
                entity = argFoo;
                entity = entity.stickers;
                mike = entity.length;
                entity = 0;
                entity = mike > entity;
                return entity;
            };
            tango = zulu.bind(tango)(mike);
            zulu = tango.filter;
            mike = function(argFoo) {
                _fun85015: for(var _fun85015_ip = 0; ; ) switch(_fun85015_ip) {
 0:
                    entity = argFoo;
                    zulu = _closure2_slot2;
                    mike = entity.id;
                    tango = zulu[mike];
                    mike = entity.type;
                    golf = _closure1_slot0;
                    oscar = _closure1_slot2;
                    entity = 9;
                    oscar = oscar[entity];
                    entity = undefined;
                    entity = golf.bind(entity)(oscar);
                    entity = entity.StickerCategoryTypes;
                    entity = entity.GUILD;
                    entity = mike !== entity;
                    if(entity) { _fun85015_ip = 94; continue _fun85015 }
 68:
                    oscar = _closure2_slot1;
                    mike = null;
                    mike = mike != oscar;
                    if(!mike) { _fun85015_ip = 91; continue _fun85015 }
 81:
                    report = _closure2_slot1;
                    mike = report.nsfwAllowed;
 91:
                    entity = mike;
 94:
                    if(entity) { _fun85015_ip = 103; continue _fun85015 }
 97:
                    mike = null;
                    entity = mike == tango;
 103:
                    if(entity) { _fun85015_ip = 152; continue _fun85015 }
 106:
                    report = tango.nsfwLevel;
                    mike = _closure1_slot8;
                    mike = mike.AGE_RESTRICTED;
                    mike = report !== mike;
                    if(!mike) { _fun85015_ip = 149; continue _fun85015 }
 129:
                    tango = tango.nsfwLevel;
                    zulu = _closure1_slot8;
                    zulu = zulu.EXPLICIT;
                    mike = tango !== zulu;
 149:
                    entity = mike;
 152:
                    entity = !entity;
                    entity = !entity;
                    return entity;
                }
            };
            zulu = zulu.bind(tango)(mike);
            mike = zulu.map;
            entity = function(argFoo) {
                _fun85016: for(var _fun85016_ip = 0; ; ) switch(_fun85016_ip) {
 0:
                    mike = argFoo;
                    tango = mike.type;
                    oscar = _closure1_slot0;
                    zulu = _closure1_slot2;
                    golf = 9;
                    zulu = zulu[golf];
                    report = undefined;
                    zulu = oscar.bind(report)(zulu);
                    zulu = zulu.StickerCategoryTypes;
                    zulu = zulu.FAVORITE;
                    if(!(tango !== zulu)) { _fun85016_ip = 89; continue _fun85016 }
 49:
                    tango = mike.type;
                    oscar = _closure1_slot0;
                    zulu = _closure1_slot2;
                    zulu = zulu[golf];
                    zulu = oscar.bind(report)(zulu);
                    zulu = zulu.StickerCategoryTypes;
                    zulu = zulu.RECENT;
                    if(!(tango !== zulu)) { _fun85016_ip = 89; continue _fun85016 }
 87:
                    return mike;
 89:
                    tango = mike.type;
                    oscar = _closure1_slot0;
                    zulu = _closure1_slot2;
                    zulu = zulu[golf];
                    zulu = oscar.bind(report)(zulu);
                    zulu = zulu.StickerCategoryTypes;
                    zulu = zulu.FAVORITE;
                    if(!(tango !== zulu)) { _fun85016_ip = 149; continue _fun85016 }
 127:
                    tango = _closure1_slot1;
                    oscar = _closure1_slot2;
                    zulu = 11;
                    zulu = oscar[zulu];
                    zulu = tango.bind(report)(zulu);
                    _fun85016_ip = 169; continue _fun85016;
 149:
                    tango = _closure1_slot1;
                    oscar = _closure1_slot2;
                    entity = 10;
                    entity = oscar[entity];
                    zulu = tango.bind(report)(entity);
 169:
                    entity = {};
                    verify = entity;
                    options = mike;
                    mike = copyDataProperties(verify, options);
                    mike = 'icon';
                    entity[mike] = zulu;
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['useStickerCategories'] = tango;
    tango = function(argFoo) {
        entity = argFoo;
        backup = entity.hash;
        foxtrot = entity.url;
        romeo = entity.width;
        yankee = entity.height;
        offset = entity.frames;
        verify = entity.callback;
        entity = _closure1_slot4;
        mike = entity.NativeLottieUtils;
        entity = mike.preload;
        kilo = mike;
        entity = kilo[entity](backup, foxtrot, romeo, yankee, offset, verify, options);
        entity = undefined;
        return entity;
    };
    zulu['preloadSticker'] = tango;
    tango = function(argFoo) {
        entity = _closure1_slot4;
        zulu = entity.NativeLottieUtils;
        mike = zulu.dropPreload;
        entity = argFoo;
        entity = mike.bind(zulu)(entity);
        entity = undefined;
        return entity;
    };
    zulu['dropPreloadedSticker'] = tango;
    mike = function(argFoo, argBar) {
        entity = argFoo;
        var _closure2_slot0 = entity;
        zulu = _closure1_slot7;
        entity = zulu.getState;
        tango = entity.bind(zulu)();
        zulu = tango.setPackToScrollTo;
        entity = argBar;
        entity = zulu.bind(tango)(entity);
        entity = global;
        tango = entity.setTimeout;
        entity = undefined;
        zulu = function() {
            _fun85020: for(var _fun85020_ip = 0; ; ) switch(_fun85020_ip) {
 0:
                entity = _closure2_slot0;
                zulu = entity.current;
                entity = null;
                if(!(entity != zulu)) { _fun85020_ip = 64; continue _fun85020 }
 18:
                mike = zulu.openCustomKeyboard;
                entity = {};
                report = _closure1_slot9;
                report = report.EXPRESSION;
                entity['keyboardType'] = report;
                tango = _closure1_slot10;
                tango = tango.STICKER;
                entity['expressionType'] = tango;
                entity = mike.bind(zulu)(entity);
 64:
                entity = undefined;
                return entity;
            }
        };
        mike = 1;
        mike = tango.bind(entity)(zulu, mike);
        return entity;
    };
    zulu['openStickerPickerToPackId'] = mike;
    return entity;
})();