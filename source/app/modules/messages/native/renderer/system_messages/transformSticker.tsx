// app/modules/messages/native/renderer/system_messages/transformSticker.tsx
export default (function(argFoo, argBar, _, argCor, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = function(argFoo, argBar) { // Original name: transform
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            offset = argFoo;
            tangon = argBar;
            entity = {};
            foxtra = entity;
            romeon = offset;
            michal = copyDataProperties(foxtra, romeon);
            michal = offset.id;
            golfie = null;
            oscard = golfie != michal;
            report = '';
            zuuluu = report;
            if(!oscard) { _fun00002_ip = 42; continue _fun00001 }
 39:
            zuuluu = michal;
 42:
            michal = 'asset';
            entity[michal] = zuuluu;
            option = _closure1_slot0;
            oscard = _closure1_slot1;
            zuuluu = 2;
            zuuluu = oscard[zuuluu];
            oscard = undefined;
            verify = option.bind(oscard)(zuuluu);
            option = verify.getStickerAssetUrl;
            zuuluu = {};
            yankee = !tangon;
            zuuluu['isPreview'] = yankee;
            zuuluu = option.bind(verify)(offset, zuuluu);
            golfie = golfie != zuuluu;
            if(!golfie) { _fun00002_ip = 108; continue _fun00001 }
 105:
            report = zuuluu;
 108:
            zuuluu = 'url';
            entity[zuuluu] = report;
            report = _closure1_slot0;
            golfie = _closure1_slot1;
            zuuluu = 3;
            zuuluu = golfie[zuuluu];
            zuuluu = report.bind(oscard)(zuuluu);
            zuuluu = zuuluu.NativeLottieRenderMode;
            if(tangon) { _fun00002_ip = 154; continue _fun00001 }
 146:
            tangon = zuuluu.STILL;
            _fun00002_ip = 160; continue _fun00001;
 154:
            tangon = zuuluu.LOOP;
 160:
            zuuluu = 'renderMode';
            entity[zuuluu] = tangon;
            report = _closure1_slot0;
            golfie = _closure1_slot1;
            michal = 4;
            zuuluu = golfie[michal];
            zuuluu = report.bind(oscard)(zuuluu);
            verify = zuuluu.intl;
            option = verify.formatToPlainString;
            zuuluu = golfie[michal];
            zuuluu = report.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            tangon = zuuluu.rk6pOz;
            zuuluu = {};
            offset = offset.name;
            zuuluu['stickerName'] = offset;
            tangon = option.bind(verify)(tangon, zuuluu);
            zuuluu = 'accessibilityLabel';
            entity[zuuluu] = tangon;
            zuuluu = golfie[michal];
            zuuluu = report.bind(oscard)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = report.bind(oscard)(michal);
            michal = michal.t;
            michal = michal.GCErub;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = 'accessibilityHint';
            entity[michal] = zuuluu;
            return entity;
        }
    };
    var _closure1_slot4 = entity;
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
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.StickerAnimationSettings;
    var _closure1_slot3 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/messages/native/renderer/system_messages/transformSticker.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: useTransformedSticker
        michal = argFoo;
        report = michal.sticker;
        var _closure2_slot0 = report;
        oscard = michal.isStickerReplyEnabled;
        var _closure2_slot1 = oscard;
        golfie = _closure1_slot0;
        tangon = _closure1_slot1;
        zuuluu = 5;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        zuuluu = golfie.bind(zuuluu)(tangon);
        tangon = zuuluu.AnimateStickers;
        zuuluu = tangon.useSetting;
        tangon = zuuluu.bind(tangon)();
        zuuluu = _closure1_slot3;
        zuuluu = zuuluu.ALWAYS_ANIMATE;
        golfie = tangon === zuuluu;
        var _closure2_slot2 = golfie;
        tangon = _closure1_slot2;
        zuuluu = tangon.useMemo;
        michal = new Array(3);
        michal[0] = golfie;
        michal[1] = oscard;
        michal[2] = report;
        entity = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zuuluu = _closure2_slot1;
                report = undefined;
                entity = undefined;
                if(!zuuluu) { _fun00004_ip = 35; continue _fun00003 }
 14:
                tangon = _closure1_slot4;
                zuuluu = _closure2_slot0;
                michal = _closure2_slot2;
                entity = tangon.bind(report)(zuuluu, michal);
 35:
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['default'] = tangon;
    michal = function(argFoo) { // Original name: transformSticker
        tangon = _closure1_slot4;
        report = _closure1_slot0;
        zuuluu = _closure1_slot1;
        michal = 5;
        michal = zuuluu[michal];
        zuuluu = undefined;
        michal = report.bind(zuuluu)(michal);
        report = michal.AnimateStickers;
        michal = report.getSetting;
        report = michal.bind(report)();
        entity = _closure1_slot3;
        entity = entity.ALWAYS_ANIMATE;
        michal = argFoo;
        entity = report === entity;
        entity = tangon.bind(zuuluu)(michal, entity);
        return entity;
    };
    zuuluu['transformSticker'] = michal;
    return entity;
})();