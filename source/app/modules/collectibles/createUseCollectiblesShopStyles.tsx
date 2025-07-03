// app/modules/collectibles/createUseCollectiblesShopStyles.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
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
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = function(argFoo, argBar) { // Original name: getMidpointColor
        zuuluu = argFoo;
        michal = argBar;
        entity = zuuluu.toRgb;
        tangon = entity.bind(zuuluu)();
        entity = michal.toRgb;
        entity = entity.bind(michal)();
        oscard = _closure1_slot0;
        golfie = _closure1_slot2;
        option = 2;
        report = golfie[option];
        zuuluu = undefined;
        verify = oscard.bind(zuuluu)(report);
        oscard = verify.getValueInColorGradientByPercentage;
        offset = tangon.r;
        report = new Array(3);
        report[0] = offset;
        offset = tangon.g;
        report[1] = offset;
        tangon = tangon.b;
        report[2] = tangon;
        offset = entity.r;
        tangon = new Array(3);
        tangon[0] = offset;
        offset = entity.g;
        tangon[1] = offset;
        entity = entity.b;
        tangon[2] = entity;
        entity = 50;
        report = oscard.bind(verify)(report, tangon, entity);
        tangon = _closure1_slot3;
        entity = 3;
        tangon = tangon.bind(zuuluu)(report, entity);
        report = 0;
        oscard = tangon[report];
        report = 1;
        report = tangon[report];
        tangon = tangon[option];
        michal = _closure1_slot1;
        entity = golfie[entity];
        michal = michal.bind(zuuluu)(entity);
        entity = {};
        entity['r'] = oscard;
        entity['g'] = report;
        entity['b'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    var _closure1_slot5 = tangon;
    tangon = function(argFoo, argBar) { // Original name: getBackgroundColors
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            report = argBar;
            entity = report.length;
            zuuluu = 0;
            if(!(zuuluu === entity)) { _fun00002_ip = 21; continue _fun00001 }
 17:
            entity = undefined;
            return entity;
 21:
            entity = report.length;
            michal = 1;
            if(!(michal !== entity)) { _fun00002_ip = 149; continue _fun00001 }
 33:
            entity = {};
            oscard = report[zuuluu];
            entity['primary'] = oscard;
            oscard = report[michal];
            entity['secondary'] = oscard;
            option = _closure1_slot5;
            verify = report[zuuluu];
            oscard = report[michal];
            golfie = undefined;
            offset = option.bind(golfie)(verify, oscard);
            verify = offset.setAlpha;
            oscard = 0.4;
            oscard = verify.bind(offset)(oscard);
            entity['border'] = oscard;
            oscard = report[zuuluu];
            michal = report[michal];
            oscard = option.bind(golfie)(oscard, michal);
            michal = oscard.isLight;
            michal = michal.bind(oscard)();
            if(michal) { _fun00002_ip = 137; continue _fun00001 }
 129:
            michal = tangon.light;
            _fun00002_ip = 143; continue _fun00001;
 137:
            michal = tangon.dark;
 143:
            entity['label'] = michal;
            _fun00002_ip = 237; continue _fun00001;
 149:
            michal = {};
            oscard = report[zuuluu];
            michal['primary'] = oscard;
            oscard = report[zuuluu];
            michal['secondary'] = oscard;
            option = report[zuuluu];
            golfie = option.setAlpha;
            oscard = 0.4;
            oscard = golfie.bind(option)(oscard);
            michal['border'] = oscard;
            report = report[zuuluu];
            zuuluu = report.isLight;
            zuuluu = zuuluu.bind(report)();
            if(zuuluu) { _fun00002_ip = 224; continue _fun00001 }
 216:
            zuuluu = tangon.light;
            _fun00002_ip = 230; continue _fun00001;
 224:
            zuuluu = tangon.dark;
 230:
            michal['label'] = zuuluu;
            entity = michal;
 237:
            return entity;
        }
    };
    var _closure1_slot6 = tangon;
    tangon = function(argFoo, argBar) { // Original name: getButtonColors
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = argFoo;
            report = argBar;
            entity = report.length;
            zuuluu = 0;
            if(!(zuuluu === entity)) { _fun00004_ip = 21; continue _fun00003 }
 17:
            entity = undefined;
            return entity;
 21:
            entity = report.length;
            michal = 1;
            if(!(michal !== entity)) { _fun00004_ip = 109; continue _fun00003 }
 33:
            entity = {};
            oscard = report[zuuluu];
            entity['primary'] = oscard;
            oscard = report[michal];
            entity['secondary'] = oscard;
            option = _closure1_slot5;
            golfie = report[zuuluu];
            oscard = report[michal];
            michal = undefined;
            oscard = option.bind(michal)(golfie, oscard);
            michal = oscard.isLight;
            michal = michal.bind(oscard)();
            if(michal) { _fun00004_ip = 97; continue _fun00003 }
 89:
            michal = tangon.light;
            _fun00004_ip = 103; continue _fun00003;
 97:
            michal = tangon.dark;
 103:
            entity['text'] = michal;
            _fun00004_ip = 167; continue _fun00003;
 109:
            michal = {};
            oscard = report[zuuluu];
            michal['primary'] = oscard;
            oscard = report[zuuluu];
            michal['secondary'] = oscard;
            report = report[zuuluu];
            zuuluu = report.isLight;
            zuuluu = zuuluu.bind(report)();
            if(zuuluu) { _fun00004_ip = 154; continue _fun00003 }
 146:
            zuuluu = tangon.light;
            _fun00004_ip = 160; continue _fun00003;
 154:
            zuuluu = tangon.dark;
 160:
            michal['text'] = zuuluu;
            entity = michal;
 167:
            return entity;
        }
    };
    var _closure1_slot7 = tangon;
    tangon = function(argFoo, argBar) { // Original name: desaturate
        michal = argFoo;
        entity = michal.toHsl;
        entity = entity.bind(michal)();
        report = entity.h;
        oscard = entity.s;
        tangon = entity.l;
        michal = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 3;
        entity = zuuluu[entity];
        zuuluu = undefined;
        michal = michal.bind(zuuluu)(entity);
        entity = {};
        entity['h'] = report;
        report = argBar;
        report = oscard * report;
        entity['s'] = report;
        entity['l'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    var _closure1_slot8 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/collectibles/createUseCollectiblesShopStyles.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: _default
        michal = argFoo;
        var _closure2_slot0 = michal;
        entity = function(argFoo) {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                entity = argFoo;
                tangon = _closure1_slot0;
                report = _closure1_slot2;
                zuuluu = 4;
                zuuluu = report[zuuluu];
                verify = undefined;
                golfie = tangon.bind(verify)(zuuluu);
                report = golfie.useStateFromStores;
                zuuluu = _closure1_slot4;
                tangon = new Array(1);
                tangon[0] = zuuluu;
                zuuluu = function() {
                    entity = _closure1_slot4;
                    entity = entity.saturation;
                    return entity;
                };
                option = report.bind(golfie)(tangon, zuuluu);
                var _closure3_slot0 = option;
                report = null;
                if(!(report != entity)) { _fun00006_ip = 409; continue _fun00005 }
 73:
                zuuluu = {};
                golfie = _closure1_slot6;
                offset = _closure2_slot0;
                tangon = entity.backgroundColors;
                tangon = golfie.bind(verify)(offset, tangon);
                zuuluu['backgroundColors'] = tangon;
                golfie = _closure1_slot7;
                tangon = entity.buttonColors;
                tangon = golfie.bind(verify)(offset, tangon);
                zuuluu['buttonColors'] = tangon;
                entity = entity.confettiColors;
                zuuluu['confettiColors'] = entity;
                entity = 1;
                if(!(entity !== option)) { _fun00006_ip = 392; continue _fun00005 }
 145:
                entity = {};
                tangon = zuuluu.backgroundColors;
                golfie = report != tangon;
                tangon = undefined;
                if(!golfie) { _fun00006_ip = 261; continue _fun00005 }
 162:
                golfie = {};
                yankee = _closure1_slot8;
                offset = zuuluu.backgroundColors;
                offset = offset.primary;
                offset = yankee.bind(verify)(offset, option);
                golfie['primary'] = offset;
                offset = zuuluu.backgroundColors;
                offset = offset.secondary;
                offset = yankee.bind(verify)(offset, option);
                golfie['secondary'] = offset;
                offset = zuuluu.backgroundColors;
                offset = offset.border;
                offset = yankee.bind(verify)(offset, option);
                golfie['border'] = offset;
                offset = zuuluu.backgroundColors;
                offset = offset.label;
                offset = yankee.bind(verify)(offset, option);
                golfie['label'] = offset;
                tangon = golfie;
 261:
                entity['backgroundColors'] = tangon;
                tangon = zuuluu.buttonColors;
                report = report != tangon;
                tangon = undefined;
                if(!report) { _fun00006_ip = 357; continue _fun00005 }
 281:
                report = {};
                golfie = _closure1_slot8;
                oscard = zuuluu.buttonColors;
                oscard = oscard.primary;
                oscard = golfie.bind(verify)(oscard, option);
                report['primary'] = oscard;
                oscard = zuuluu.buttonColors;
                oscard = oscard.secondary;
                oscard = golfie.bind(verify)(oscard, option);
                report['secondary'] = oscard;
                oscard = zuuluu.buttonColors;
                oscard = oscard.text;
                oscard = golfie.bind(verify)(oscard, option);
                report['text'] = oscard;
                tangon = report;
 357:
                entity['buttonColors'] = tangon;
                report = zuuluu.confettiColors;
                tangon = report.map;
                michal = function(argFoo) {
                    tangon = _closure1_slot8;
                    zuuluu = _closure3_slot0;
                    michal = undefined;
                    entity = argFoo;
                    entity = tangon.bind(michal)(entity, zuuluu);
                    return entity;
                };
                michal = tangon.bind(report)(michal);
                entity['confettiColors'] = michal;
                _fun00006_ip = 407; continue _fun00005;
 392:
                michal = {};
                foxtra = michal;
                romeon = zuuluu;
                zuuluu = copyDataProperties(foxtra, romeon);
                entity = michal;
 407:
                return entity;
 409:
                entity = {};
                return entity;
            }
        };
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();