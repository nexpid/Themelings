// app/modules/messages/native/renderer/system_messages/transformSticker.tsx
export default (function(argFoo, argBar, _, argCorge, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar) { // Original name: transform
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            offset = argFoo;
            tango = argBar;
            entity = {};
            foxtrot = entity;
            romeo = offset;
            mike = copyDataProperties(foxtrot, romeo);
            mike = offset.id;
            golf = null;
            oscar = golf != mike;
            report = '';
            zulu = report;
            if(!oscar) { _fun00002_ip = 42; continue _fun00001 }
 39:
            zulu = mike;
 42:
            mike = 'asset';
            entity[mike] = zulu;
            options = _closure1_slot0;
            oscar = _closure1_slot1;
            zulu = 2;
            zulu = oscar[zulu];
            oscar = undefined;
            verify = options.bind(oscar)(zulu);
            options = verify.getStickerAssetUrl;
            zulu = {};
            yankee = !tango;
            zulu['isPreview'] = yankee;
            zulu = options.bind(verify)(offset, zulu);
            golf = golf != zulu;
            if(!golf) { _fun00002_ip = 108; continue _fun00001 }
 105:
            report = zulu;
 108:
            zulu = 'url';
            entity[zulu] = report;
            report = _closure1_slot0;
            golf = _closure1_slot1;
            zulu = 3;
            zulu = golf[zulu];
            zulu = report.bind(oscar)(zulu);
            zulu = zulu.NativeLottieRenderMode;
            if(tango) { _fun00002_ip = 154; continue _fun00001 }
 146:
            tango = zulu.STILL;
            _fun00002_ip = 160; continue _fun00001;
 154:
            tango = zulu.LOOP;
 160:
            zulu = 'renderMode';
            entity[zulu] = tango;
            report = _closure1_slot0;
            golf = _closure1_slot1;
            mike = 4;
            zulu = golf[mike];
            zulu = report.bind(oscar)(zulu);
            verify = zulu.intl;
            options = verify.formatToPlainString;
            zulu = golf[mike];
            zulu = report.bind(oscar)(zulu);
            zulu = zulu.t;
            tango = zulu.rk6pOz;
            zulu = {};
            offset = offset.name;
            zulu['stickerName'] = offset;
            tango = options.bind(verify)(tango, zulu);
            zulu = 'accessibilityLabel';
            entity[zulu] = tango;
            zulu = golf[mike];
            zulu = report.bind(oscar)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = report.bind(oscar)(mike);
            mike = mike.t;
            mike = mike.GCErub;
            zulu = zulu.bind(tango)(mike);
            mike = 'accessibilityHint';
            entity[mike] = zulu;
            return entity;
        }
    };
    var _closure1_slot4 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.StickerAnimationSettings;
    var _closure1_slot3 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/messages/native/renderer/system_messages/transformSticker.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: useTransformedSticker
        mike = argFoo;
        report = mike.sticker;
        var _closure2_slot0 = report;
        oscar = mike.isStickerReplyEnabled;
        var _closure2_slot1 = oscar;
        golf = _closure1_slot0;
        tango = _closure1_slot1;
        zulu = 5;
        tango = tango[zulu];
        zulu = undefined;
        zulu = golf.bind(zulu)(tango);
        tango = zulu.AnimateStickers;
        zulu = tango.useSetting;
        tango = zulu.bind(tango)();
        zulu = _closure1_slot3;
        zulu = zulu.ALWAYS_ANIMATE;
        golf = tango === zulu;
        var _closure2_slot2 = golf;
        tango = _closure1_slot2;
        zulu = tango.useMemo;
        mike = new Array(3);
        mike[0] = golf;
        mike[1] = oscar;
        mike[2] = report;
        entity = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zulu = _closure2_slot1;
                report = undefined;
                entity = undefined;
                if(!zulu) { _fun00004_ip = 35; continue _fun00003 }
 14:
                tango = _closure1_slot4;
                zulu = _closure2_slot0;
                mike = _closure2_slot2;
                entity = tango.bind(report)(zulu, mike);
 35:
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['default'] = tango;
    mike = function(argFoo) { // Original name: transformSticker
        tango = _closure1_slot4;
        report = _closure1_slot0;
        zulu = _closure1_slot1;
        mike = 5;
        mike = zulu[mike];
        zulu = undefined;
        mike = report.bind(zulu)(mike);
        report = mike.AnimateStickers;
        mike = report.getSetting;
        report = mike.bind(report)();
        entity = _closure1_slot3;
        entity = entity.ALWAYS_ANIMATE;
        mike = argFoo;
        entity = report === entity;
        entity = tango.bind(zulu)(mike, entity);
        return entity;
    };
    zulu['transformSticker'] = mike;
    return entity;
})();