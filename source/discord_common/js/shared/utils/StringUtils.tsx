// discord_common/js/shared/utils/StringUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        golfie = argBar;
        zuuluu = argFre;
        option = argPlu;
        var _closure1_slot0 = golfie;
        var _closure1_slot1 = option;
        entity = global;
        verify = entity.Object;
        oscard = verify.defineProperty;
        tangon = {};
        michal = true;
        tangon['value'] = michal;
        michal = '__esModule';
        michal = oscard.bind(verify)(zuuluu, michal, tangon);
        michal = /[\u0300-\u036f]/g;
        var _closure1_slot2 = michal;
        michal = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;
        var _closure1_slot3 = michal;
        michal = entity.String;
        michal = michal.prototype;
        tangon = michal.normalize;
        michal = null;
        if(!(michal != tangon)) { _fun00002_ip = 117; continue _fun00001 }
 110:
        tangon = function(argFoo) {
            zuuluu = argFoo;
            michal = zuuluu.normalize;
            entity = 'NFD';
            tangon = michal.bind(zuuluu)(entity);
            zuuluu = tangon.replace;
            michal = _closure1_slot2;
            entity = '';
            zuuluu = zuuluu.bind(tangon)(michal, entity);
            michal = zuuluu.normalize;
            entity = 'NFC';
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        _fun00002_ip = 122; continue _fun00001;
 117:
        tangon = function(argFoo) {
            entity = argFoo;
            return entity;
        };
 122:
        entity = entity.String;
        entity = entity.prototype;
        entity = entity.normalize;
        if(!(michal != entity)) { _fun00002_ip = 150; continue _fun00001 }
 143:
        michal = function(argFoo) { // Original name: fullNormalize
            report = argFoo;
            oscard = _closure1_slot0;
            michal = _closure1_slot1;
            tangon = 0;
            zuuluu = michal[tangon];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            var _closure2_slot0 = michal;
            michal = '';
            var _closure2_slot1 = michal;
            michal = report.normalize;
            zuuluu = 'NFD';
            option = michal.bind(report)(zuuluu);
            report = new Array(0);
            verify = report;
            golfie = 0;
            michal = arraySpread(verify, option, golfie);
            tangon = report.forEach;
            michal = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = argFoo;
                    entity = _closure2_slot1;
                    tangon = _closure2_slot0;
                    tangon = tangon[zuuluu];
                    report = null;
                    if(!(report != tangon)) { _fun00004_ip = 27; continue _fun00003 }
 24:
                    zuuluu = tangon;
 27:
                    entity = entity + zuuluu;
                    _closure2_slot1 = entity;
                    entity = undefined;
                    return entity;
                }
            };
            michal = tangon.bind(report)(michal);
            michal = _closure2_slot1;
            entity = michal.normalize;
            michal = entity.bind(michal)(zuuluu);
            entity = michal.toLocaleLowerCase;
            entity = entity.bind(michal)();
            return entity;
        };
        _fun00002_ip = 155; continue _fun00001;
 150:
        michal = function(argFoo) {
            entity = argFoo;
            return entity;
        };
 155:
        entity = 1;
        oscard = option[entity];
        entity = undefined;
        offset = golfie.bind(entity)(oscard);
        verify = offset.fileFinishedImporting;
        oscard = '../discord_common/js/shared/utils/StringUtils.tsx';
        oscard = verify.bind(offset)(oscard);
        oscard = 2;
        oscard = option[oscard];
        oscard = golfie.bind(entity)(oscard);
        oscard = oscard.cssValueToNumber;
        zuuluu['cssValueToNumber'] = oscard;
        oscard = function(argFoo) { // Original name: upperCaseFirstChar
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                oscard = argFoo;
                entity = null;
                michal = entity == oscard;
                report = '';
                entity = report;
                if(michal) { _fun00006_ip = 74; continue _fun00005 }
 19:
                zuuluu = oscard.charAt;
                michal = 0;
                zuuluu = zuuluu.bind(oscard)(michal);
                michal = zuuluu.toUpperCase;
                tangon = michal.bind(zuuluu)();
                zuuluu = oscard.slice;
                michal = 1;
                zuuluu = zuuluu.bind(oscard)(michal);
                michal = global;
                michal = michal.HermesInternal;
                michal = michal.concat;
                entity = michal.bind(report)(tangon, zuuluu);
 74:
                return entity;
            }
        };
        zuuluu['upperCaseFirstChar'] = oscard;
        oscard = function(argFoo, argBar) {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                zuuluu = argFoo;
                offset = argBar;
                oscard = arguments[2];
                entity = undefined;
                if(!(oscard === entity)) { _fun00008_ip = 19; continue _fun00007 }
 15:
                oscard = '…';
 19:
                michal = null;
                tangon = michal == zuuluu;
                report = '';
                entity = report;
                if(tangon) { _fun00008_ip = 206; continue _fun00007 }
 38:
                michal = michal == offset;
                entity = report;
                if(michal) { _fun00008_ip = 206; continue _fun00007 }
 51:
                tangon = zuuluu.length;
                michal = zuuluu;
                if(!(tangon > offset)) { _fun00008_ip = 203; continue _fun00007 }
 66:
                golfie = _closure1_slot3;
                tangon = golfie.test;
                tangon = tangon.bind(golfie)(zuuluu);
                if(tangon) { _fun00008_ip = 111; continue _fun00007 }
 86:
                option = zuuluu.substring;
                tangon = oscard.length;
                golfie = offset - tangon;
                tangon = 0;
                golfie = option.bind(zuuluu)(tangon, golfie);
                _fun00008_ip = 159; continue _fun00007;
 111:
                verify = new Array(0);
                option = 0;
                foxtra = verify;
                romeon = zuuluu;
                yankee = 0;
                zuuluu = arraySpread(foxtra, romeon, yankee);
                tangon = verify.slice;
                zuuluu = oscard.length;
                zuuluu = offset - zuuluu;
                tangon = tangon.bind(verify)(option, zuuluu);
                zuuluu = tangon.join;
                golfie = zuuluu.bind(tangon)(report);
 159:
                tangon = golfie.replace;
                zuuluu = /[\s.]+$/;
                tangon = tangon.bind(golfie)(zuuluu, report);
                zuuluu = global;
                zuuluu = zuuluu.HermesInternal;
                zuuluu = zuuluu.concat;
                michal = zuuluu.bind(report)(tangon, oscard);
 203:
                entity = michal;
 206:
                return entity;
            }
        };
        zuuluu['truncateText'] = oscard;
        report = function(argFoo) { // Original name: getAcronym
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                oscard = argFoo;
                entity = null;
                michal = entity != oscard;
                report = '';
                entity = report;
                if(!michal) { _fun00010_ip = 105; continue _fun00009 }
 19:
                tangon = oscard.replace;
                zuuluu = /'s /g;
                michal = ' ';
                oscard = tangon.bind(oscard)(zuuluu, michal);
                tangon = oscard.replace;
                zuuluu = /\w+/g;
                michal = function(argFoo) {
                    michal = argFoo;
                    entity = 0;
                    entity = michal[entity];
                    return entity;
                };
                tangon = tangon.bind(oscard)(zuuluu, michal);
                zuuluu = tangon.replace;
                michal = /\s/g;
                entity = zuuluu.bind(tangon)(michal, report);
 105:
                return entity;
            }
        };
        zuuluu['getAcronym'] = report;
        zuuluu['stripDiacritics'] = tangon;
        zuuluu['normalize'] = michal;
        return entity;
    }
})();