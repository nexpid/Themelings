// app/modules/display_name_styles/DisplayNameStylesUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    zuuluu = argFre;
    tangon = argPlu;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = tangon;
    entity = global;
    golfie = entity.Object;
    oscard = golfie.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(golfie)(zuuluu, entity, report);
    entity = 1;
    report = tangon[entity];
    tangon = argBar;
    entity = undefined;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/display_name_styles/DisplayNameStylesUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: generateColorVariants
        michal = argFoo;
        tangon = _closure1_slot0;
        entity = _closure1_slot1;
        option = 0;
        entity = entity[option];
        zuuluu = undefined;
        entity = tangon.bind(zuuluu)(entity);
        report = entity.bind(zuuluu)(michal);
        entity = report.get;
        tangon = 'hsl.l';
        verify = entity.bind(report)(tangon);
        entity = {};
        entity['main'] = michal;
        oscard = report.set;
        michal = global;
        offset = michal.Math;
        golfie = offset.min;
        zuuluu = 1.2;
        zuuluu = zuuluu * verify;
        yankee = 1;
        zuuluu = golfie.bind(offset)(yankee, zuuluu);
        oscard = oscard.bind(report)(tangon, zuuluu);
        zuuluu = oscard.hex;
        zuuluu = zuuluu.bind(oscard)();
        entity['light1'] = zuuluu;
        oscard = report.set;
        offset = michal.Math;
        golfie = offset.min;
        zuuluu = 1.6;
        zuuluu = zuuluu * verify;
        zuuluu = golfie.bind(offset)(yankee, zuuluu);
        oscard = oscard.bind(report)(tangon, zuuluu);
        zuuluu = oscard.hex;
        zuuluu = zuuluu.bind(oscard)();
        entity['light2'] = zuuluu;
        oscard = report.set;
        offset = michal.Math;
        golfie = offset.max;
        zuuluu = 0.6;
        zuuluu = zuuluu * verify;
        zuuluu = golfie.bind(offset)(option, zuuluu);
        oscard = oscard.bind(report)(tangon, zuuluu);
        zuuluu = oscard.hex;
        zuuluu = zuuluu.bind(oscard)();
        entity['dark1'] = zuuluu;
        zuuluu = report.set;
        golfie = michal.Math;
        oscard = golfie.max;
        michal = 0.2;
        michal = michal * verify;
        michal = oscard.bind(golfie)(option, michal);
        zuuluu = zuuluu.bind(report)(tangon, michal);
        michal = zuuluu.hex;
        michal = michal.bind(zuuluu)();
        entity['dark2'] = michal;
        return entity;
    };
    zuuluu['generateColorVariants'] = tangon;
    michal = function(argFoo) { // Original name: parseServerDisplayNameStyles
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            entity = null;
            michal = entity == zuuluu;
            if(michal) { _fun00002_ip = 56; continue _fun00001 }
 12:
            michal = {};
            tangon = zuuluu.font_id;
            michal['fontId'] = tangon;
            tangon = zuuluu.effect_id;
            michal['effectId'] = tangon;
            zuuluu = zuuluu.colors;
            michal['colors'] = zuuluu;
            entity = michal;
 56:
            return entity;
        }
    };
    zuuluu['parseServerDisplayNameStyles'] = michal;
    return entity;
})();