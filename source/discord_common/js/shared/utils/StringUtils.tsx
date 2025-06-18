// discord_common/js/shared/utils/StringUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        golfie = argBar;
        zuuluu = argFre;
        option = argPlu;
        var _closure1_slot0 = golfie;
        var _closure1_slot1 = option;
        entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zuuluu = argFoo;
                var _closure2_slot0 = zuuluu;
                report = global;
                michal = report.Symbol;
                tangon = 'undefined';
                michal = typeof michal;
                michal = tangon !== michal;
                if(!michal) { _fun00004_ip = 45; continue _fun00003 }
 30:
                tangon = report.Symbol;
                tangon = tangon.iterator;
                michal = zuuluu[tangon];
 45:
                if(michal) { _fun00004_ip = 54; continue _fun00003 }
 48:
                michal = zuuluu.@@iterator;
 54:
                if(michal) { _fun00004_ip = 342; continue _fun00003 }
 60:
                oscard = report.Array;
                tangon = oscard.isArray;
                oscard = tangon.bind(oscard)(zuuluu);
                tangon = michal;
                if(oscard) { _fun00004_ip = 322; continue _fun00003 }
 85:
                option = undefined;
                oscard = undefined;
                if(!zuuluu) { _fun00004_ip = 282; continue _fun00003 }
 95:
                verify = 'string';
                golfie = typeof zuuluu;
                if(!(verify !== golfie)) { _fun00004_ip = 269; continue _fun00003 }
 109:
                golfie = {};
                verify = golfie.toString;
                golfie = verify.call;
                yankee = golfie.bind(verify)(zuuluu);
                offset = yankee.slice;
                verify = 8;
                golfie = -1;
                verify = offset.bind(yankee)(verify, golfie);
                golfie = 'Object';
                golfie = golfie === verify;
                if(!golfie) { _fun00004_ip = 162; continue _fun00003 }
 157:
                golfie = zuuluu.constructor;
 162:
                offset = verify;
                if(!golfie) { _fun00004_ip = 178; continue _fun00003 }
 168:
                golfie = zuuluu.constructor;
                offset = golfie.name;
 178:
                golfie = 'Map';
                if(!(golfie !== offset)) { _fun00004_ip = 248; continue _fun00003 }
 186:
                golfie = 'Set';
                if(!(golfie !== offset)) { _fun00004_ip = 248; continue _fun00003 }
 194:
                golfie = 'Arguments';
                if(!(golfie !== offset)) { _fun00004_ip = 233; continue _fun00003 }
 204:
                verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                golfie = verify.test;
                verify = golfie.bind(verify)(offset);
                golfie = undefined;
                if(!verify) { _fun00004_ip = 246; continue _fun00003 }
 233:
                verify = _closure1_slot5;
                golfie = verify.bind(option)(zuuluu, option);
 246:
                _fun00004_ip = 264; continue _fun00003;
 248:
                offset = report.Array;
                verify = offset.from;
                golfie = verify.bind(offset)(zuuluu);
 264:
                oscard = golfie;
                _fun00004_ip = 282; continue _fun00003;
 269:
                golfie = _closure1_slot5;
                oscard = golfie.bind(option)(zuuluu, option);
 282:
                tangon = oscard;
                if(tangon) { _fun00004_ip = 322; continue _fun00003 }
 288:
                golfie = report.TypeError;
                report = golfie.prototype;
                oscard = Object.create(report, {constructor: {value: golfie}});
                foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                backup = oscard;
                report = new backup[golfie](foxtra, romeon);
                report = report instanceof Object ? report : oscard;
                throw report;
 322:
                if(!tangon) { _fun00004_ip = 329; continue _fun00003 }
 325:
                _closure2_slot0 = tangon;
 329:
                tangon = 0;
                var _closure2_slot1 = tangon;
                entity = function() {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        michal = _closure2_slot1;
                        entity = _closure2_slot0;
                        entity = entity.length;
                        if(!(!(michal >= entity))) { _fun00006_ip = 56; continue _fun00005 }
 20:
                        entity = {};
                        michal = false;
                        entity['done'] = michal;
                        zuuluu = _closure2_slot0;
                        michal = _closure2_slot1;
                        michal = parseFloat(michal);
                        tangon = michal + 1;
                        _closure2_slot1 = tangon;
                        michal = zuuluu[michal];
                        entity['value'] = michal;
                        _fun00006_ip = 67; continue _fun00005;
 56:
                        michal = {};
                        zuuluu = true;
                        michal['done'] = zuuluu;
                        entity = michal;
 67:
                        return entity;
                    }
                };
                return entity;
 342:
                entity = michal.call;
                zuuluu = entity.bind(michal)(zuuluu);
                michal = zuuluu.next;
                entity = michal.bind;
                entity = entity.bind(michal)(zuuluu);
                return entity;
            }
        };
        var _closure1_slot4 = entity;
        entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tangon = argFoo;
                entity = null;
                zuuluu = undefined;
                entity = entity == zuuluu;
                if(entity) { _fun00008_ip = 23; continue _fun00007 }
 14:
                michal = tangon.length;
                entity = zuuluu > michal;
 23:
                michal = undefined;
                if(!entity) { _fun00008_ip = 33; continue _fun00007 }
 28:
                michal = tangon.length;
 33:
                entity = global;
                entity = entity.Array;
                entity = entity.bind(zuuluu)(michal);
                zuuluu = 0;
                report = zuuluu < michal;
                if(!report) { _fun00008_ip = 70; continue _fun00007 }
 55:
                report = tangon[zuuluu];
                entity[zuuluu] = report;
                zuuluu = zuuluu + 1;
                if(zuuluu < michal) { _fun00008_ip = 55; continue _fun00007 }
 70:
                return entity;
            }
        };
        var _closure1_slot5 = entity;
        entity = global;
        verify = entity.Object;
        oscard = verify.defineProperty;
        report = {};
        michal = true;
        report['value'] = michal;
        michal = '__esModule';
        michal = oscard.bind(verify)(zuuluu, michal, report);
        michal = /[\u0300-\u036f]/g;
        var _closure1_slot2 = michal;
        michal = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;
        var _closure1_slot3 = michal;
        michal = entity.String;
        michal = michal.prototype;
        report = michal.normalize;
        michal = null;
        if(!(michal != report)) { _fun00002_ip = 135; continue _fun00001 }
 128:
        report = function(argFoo) {
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
        _fun00002_ip = 140; continue _fun00001;
 135:
        report = function(argFoo) {
            entity = argFoo;
            return entity;
        };
 140:
        entity = entity.String;
        entity = entity.prototype;
        entity = entity.normalize;
        if(!(michal != entity)) { _fun00002_ip = 168; continue _fun00001 }
 161:
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
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zuuluu = argFoo;
                    entity = _closure2_slot1;
                    tangon = _closure2_slot0;
                    tangon = tangon[zuuluu];
                    report = null;
                    if(!(report != tangon)) { _fun00010_ip = 27; continue _fun00009 }
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
        _fun00002_ip = 173; continue _fun00001;
 168:
        michal = function(argFoo) {
            entity = argFoo;
            return entity;
        };
 173:
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
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                oscard = argFoo;
                entity = null;
                michal = entity == oscard;
                report = '';
                entity = report;
                if(michal) { _fun00012_ip = 74; continue _fun00011 }
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
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                zuuluu = argFoo;
                offset = argBar;
                oscard = arguments[2];
                entity = undefined;
                if(!(oscard === entity)) { _fun00014_ip = 19; continue _fun00013 }
 15:
                oscard = '…';
 19:
                michal = null;
                tangon = michal == zuuluu;
                report = '';
                entity = report;
                if(tangon) { _fun00014_ip = 206; continue _fun00013 }
 38:
                michal = michal == offset;
                entity = report;
                if(michal) { _fun00014_ip = 206; continue _fun00013 }
 51:
                tangon = zuuluu.length;
                michal = zuuluu;
                if(!(tangon > offset)) { _fun00014_ip = 203; continue _fun00013 }
 66:
                golfie = _closure1_slot3;
                tangon = golfie.test;
                tangon = tangon.bind(golfie)(zuuluu);
                if(tangon) { _fun00014_ip = 111; continue _fun00013 }
 86:
                option = zuuluu.substring;
                tangon = oscard.length;
                golfie = offset - tangon;
                tangon = 0;
                golfie = option.bind(zuuluu)(tangon, golfie);
                _fun00014_ip = 159; continue _fun00013;
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
        oscard = function(argFoo) { // Original name: getAcronym
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                oscard = argFoo;
                entity = null;
                michal = entity != oscard;
                report = '';
                entity = report;
                if(!michal) { _fun00016_ip = 105; continue _fun00015 }
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
        zuuluu['getAcronym'] = oscard;
        zuuluu['stripDiacritics'] = report;
        tangon = function(argFoo) { // Original name: countGraphemeClusters
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                entity = argFoo;
                michal = global;
                tangon = michal.Intl;
                zuuluu = null;
                report = zuuluu == tangon;
                option = undefined;
                zuuluu = undefined;
                if(report) { _fun00018_ip = 30; continue _fun00017 }
 24:
                zuuluu = tangon.Segmenter;
 30:
                if(!(option !== zuuluu)) { _fun00018_ip = 140; continue _fun00017 }
 34:
                zuuluu = _closure1_slot4;
                michal = michal.Intl;
                michal = michal.Segmenter;
                tangon = michal.prototype;
                tangon = Object.create(tangon, {constructor: {value: michal}});
                romeon = tangon;
                michal = new romeon[michal](yankee);
                tangon = michal instanceof Object ? michal : tangon;
                michal = tangon.segment;
                michal = michal.bind(tangon)(entity);
                golfie = zuuluu.bind(option)(michal);
                tangon = golfie.bind(option)();
                zuuluu = tangon.done;
                oscard = 1;
                report = tangon;
                tangon = 0;
                michal = 0;
                if(zuuluu) { _fun00018_ip = 138; continue _fun00017 }
 111:
                zuuluu = report.value;
                tangon = tangon + oscard;
                offset = golfie.bind(option)();
                zuuluu = offset.done;
                report = offset;
                michal = tangon;
                if(!zuuluu) { _fun00018_ip = 111; continue _fun00017 }
 138:
                return michal;
 140:
                entity = entity.length;
                return entity;
            }
        };
        zuuluu['countGraphemeClusters'] = tangon;
        zuuluu['normalize'] = michal;
        return entity;
    }
})();