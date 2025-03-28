// app/utils/HighlightJsAnsiLanguage.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    zuuluu = argFre;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            report = global;
            michal = report.Symbol;
            tangon = 'undefined';
            michal = typeof michal;
            michal = tangon !== michal;
            if(!michal) { _fun00002_ip = 45; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 45:
            if(michal) { _fun00002_ip = 54; continue _fun00001 }
 48:
            michal = zuuluu.@@iterator;
 54:
            if(michal) { _fun00002_ip = 342; continue _fun00001 }
 60:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 322; continue _fun00001 }
 85:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 282; continue _fun00001 }
 95:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 269; continue _fun00001 }
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
            if(!golfie) { _fun00002_ip = 162; continue _fun00001 }
 157:
            golfie = zuuluu.constructor;
 162:
            offset = verify;
            if(!golfie) { _fun00002_ip = 178; continue _fun00001 }
 168:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 178:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 186:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 194:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 233; continue _fun00001 }
 204:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 246; continue _fun00001 }
 233:
            verify = _closure1_slot6;
            golfie = verify.bind(option)(zuuluu, option);
 246:
            _fun00002_ip = 264; continue _fun00001;
 248:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 264:
            oscard = golfie;
            _fun00002_ip = 282; continue _fun00001;
 269:
            golfie = _closure1_slot6;
            oscard = golfie.bind(option)(zuuluu, option);
 282:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 322; continue _fun00001 }
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
            if(!tangon) { _fun00002_ip = 329; continue _fun00001 }
 325:
            _closure2_slot0 = tangon;
 329:
            tangon = 0;
            var _closure2_slot1 = tangon;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(michal >= entity))) { _fun00004_ip = 56; continue _fun00003 }
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
                    _fun00004_ip = 67; continue _fun00003;
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
    var _closure1_slot5 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            entity = null;
            zuuluu = undefined;
            entity = entity == zuuluu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            michal = tangon.length;
            entity = zuuluu > michal;
 23:
            michal = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            michal = tangon.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zuuluu)(michal);
            zuuluu = 0;
            report = zuuluu < michal;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tangon[zuuluu];
            entity[zuuluu] = report;
            zuuluu = zuuluu + 1;
            if(zuuluu < michal) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot6 = entity;
    entity = function(argFoo, argBar, argBaz, argCor) { // Original name: makeAnsiRuleCategory
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tangon = argBar;
            michal = argFoo;
            var _closure2_slot0 = michal;
            report = ['0'];
            verify = argBaz;
            option = 1;
            offset = report;
            michal = arraySpread(offset, verify, option);
            var _closure2_slot1 = report;
            michal = argCor;
            if(!michal) { _fun00008_ip = 94; continue _fun00007 }
 45:
            zuuluu = report.push;
            michal = global;
            oscard = michal.Object;
            michal = oscard.keys;
            verify = michal.bind(oscard)(tangon);
            michal = new Array(0);
            option = 0;
            offset = michal;
            oscard = arraySpread(offset, verify, option);
            offset = zuuluu;
            verify = michal;
            option = report;
            michal = apply(offset, verify, option);
 94:
            michal = global;
            zuuluu = michal.Object;
            michal = zuuluu.entries;
            zuuluu = michal.bind(zuuluu)(tangon);
            michal = zuuluu.map;
            entity = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zuuluu = argFoo;
                    entity = zuuluu[Symbol.iterator];
                    zuuluu = entity().next;
                    tangon = zuuluu().value;
                    michal = entity;
                    oscard = undefined;
                    michal = michal === oscard;
                    report = undefined;
                    if(michal) { _fun00010_ip = 27; continue _fun00009 }
 24:
                    report = tangon;
 27:
                    tangon = undefined;
                    if(michal) { _fun00010_ip = 57; continue _fun00009 }
 32:
                    golfie = zuuluu().value;
                    zuuluu = entity;
                    zuuluu = zuuluu === oscard;
                    tangon = undefined;
                    michal = zuuluu;
                    if(zuuluu) { _fun00010_ip = 57; continue _fun00009 }
 51:
                    tangon = golfie;
                    michal = zuuluu;
 57:
                    if(michal) { _fun00010_ip = 63; continue _fun00009 }
 60:
                    entity.return();
 63:
                    romeon = _closure2_slot0;
                    verify = _closure2_slot1;
                    entity = function(argFoo, argBar, argBaz, argCor) { // Original name: makeAnsiRule
                        entity = argBaz;
                        var _closure4_slot0 = entity;
                        entity = argCor;
                        var _closure4_slot1 = entity;
                        entity = {};
                        zuuluu = global;
                        zuuluu = zuuluu.HermesInternal;
                        golfie = zuuluu.concat;
                        oscard = 'ansi-';
                        report = argFoo;
                        tangon = '-';
                        zuuluu = argBar;
                        zuuluu = golfie.bind(oscard)(report, tangon, zuuluu);
                        entity['className'] = zuuluu;
                        zuuluu = true;
                        entity['endsParent'] = zuuluu;
                        zuuluu = _closure1_slot4;
                        entity['begin'] = zuuluu;
                        michal = function(argFoo, argBar) { // Original name: on:begin
                            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                                zuuluu = argBar;
                                michal = argFoo;
                                entity = 1;
                                tangon = michal[entity];
                                michal = tangon.split;
                                entity = ';';
                                tangon = michal.bind(tangon)(entity);
                                entity = zuuluu.data;
                                michal = entity.isOn;
                                entity = undefined;
                                if(!(entity === michal)) { _fun00012_ip = 57; continue _fun00011 }
 44:
                                report = zuuluu.data;
                                michal = false;
                                report['isOn'] = michal;
 57:
                                michal = _closure1_slot5;
                                option = michal.bind(entity)(tangon);
                                tangon = option.bind(entity)();
                                michal = tangon.done;
                                golfie = true;
                                oscard = false;
                                if(michal) { _fun00012_ip = 157; continue _fun00011 }
 88:
                                offset = tangon.value;
                                michal = _closure4_slot0;
                                if(!(offset !== michal)) { _fun00012_ip = 131; continue _fun00011 }
 101:
                                verify = _closure4_slot1;
                                michal = verify.includes;
                                michal = michal.bind(verify)(offset);
                                if(!michal) { _fun00012_ip = 142; continue _fun00011 }
 118:
                                michal = zuuluu.data;
                                michal['isOn'] = oscard;
                                _fun00012_ip = 142; continue _fun00011;
 131:
                                michal = zuuluu.data;
                                michal['isOn'] = golfie;
 142:
                                verify = option.bind(entity)();
                                michal = verify.done;
                                tangon = verify;
                                if(!michal) { _fun00012_ip = 88; continue _fun00011 }
 157:
                                michal = zuuluu.data;
                                michal = michal.isOn;
                                if(michal) { _fun00012_ip = 183; continue _fun00011 }
 171:
                                michal = zuuluu.ignoreMatch;
                                michal = michal.bind(zuuluu)();
 183:
                                return entity;
                            }
                        };
                        entity['on:begin'] = michal;
                        return entity;
                    };
                    foxtra = undefined;
                    yankee = tangon;
                    offset = report;
                    entity = foxtra[entity](romeon, yankee, offset, verify, option);
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = global;
    golfie = entity.Object;
    oscard = golfie.defineProperty;
    report = {};
    michal = true;
    report['value'] = michal;
    michal = '__esModule';
    michal = oscard.bind(golfie)(zuuluu, michal, report);
    michal = {1: 'bold', 4: 'underline'};
    var _closure1_slot0 = michal;
    michal = {30: 'black', 31: 'red', 32: 'green', 33: 'yellow', 34: 'blue', 35: 'magenta', 36: 'cyan', 37: 'white'};
    var _closure1_slot1 = michal;
    michal = {40: 'black', 41: 'red', 42: 'green', 43: 'yellow', 44: 'blue', 45: 'magenta', 46: 'cyan', 47: 'white'};
    var _closure1_slot2 = michal;
    michal = /\x1B\[(\d+(?:[:;]\d+)*)m/;
    var _closure1_slot3 = michal;
    oscard = entity.RegExp;
    option = michal.source;
    entity = entity.HermesInternal;
    golfie = entity.concat;
    report = '(?=';
    entity = ')';
    yankee = golfie.bind(report)(option, entity);
    report = oscard.prototype;
    report = Object.create(report, {constructor: {value: oscard}});
    romeon = report;
    entity = new romeon[oscard](yankee, offset);
    entity = entity instanceof Object ? entity : report;
    var _closure1_slot4 = entity;
    report = argPlu;
    entity = 0;
    oscard = report[entity];
    report = argBar;
    entity = undefined;
    golfie = report.bind(entity)(oscard);
    oscard = golfie.fileFinishedImporting;
    report = 'utils/HighlightJsAnsiLanguage.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function() { // Original name: highlightJsAnsiLanguage
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            yankee = _closure1_slot7;
            backup = _closure1_slot1;
            kiloes = 'foreground';
            foxtra = ['38', '39'];
            golfie = true;
            sizing = undefined;
            romeon = true;
            backup = sizing[yankee](kiloes, backup, foxtra, romeon, yankee);
            michal = new Array(1);
            zuuluu = 0;
            kiloes = michal;
            foxtra = 0;
            report = arraySpread(kiloes, backup, foxtra);
            backup = _closure1_slot2;
            kiloes = 'background';
            foxtra = ['48', '49'];
            sizing = undefined;
            backup = sizing[yankee](kiloes, backup, foxtra, romeon, yankee);
            kiloes = michal;
            foxtra = report;
            report = arraySpread(kiloes, backup, foxtra);
            backup = _closure1_slot0;
            kiloes = 'style';
            foxtra = new Array(0);
            romeon = false;
            sizing = undefined;
            backup = sizing[yankee](kiloes, backup, foxtra, romeon, yankee);
            kiloes = michal;
            foxtra = report;
            entity = arraySpread(kiloes, backup, foxtra);
            report = {};
            oscard = 'ansi-control-sequence';
            report['className'] = oscard;
            oscard = _closure1_slot3;
            report['begin'] = oscard;
            oscard = {};
            option = _closure1_slot4;
            oscard['end'] = option;
            oscard['endsParent'] = golfie;
            report['starts'] = oscard;
            michal[entity] = report;
            report = 1;
            entity = entity + report;
            entity = michal.length;
            entity = zuuluu < entity;
            if(!entity) { _fun00014_ip = 216; continue _fun00013 }
 180:
            oscard = michal[zuuluu];
            golfie = michal.slice;
            entity = zuuluu + report;
            entity = golfie.bind(michal)(entity);
            oscard['contains'] = entity;
            zuuluu = zuuluu + 1;
            entity = michal.length;
            if(zuuluu < entity) { _fun00014_ip = 180; continue _fun00013 }
 216:
            entity = {};
            zuuluu = {};
            tangon = _closure1_slot4;
            zuuluu['begin'] = tangon;
            zuuluu['contains'] = michal;
            michal = new Array(1);
            michal[0] = zuuluu;
            entity['contains'] = michal;
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    zuuluu['ANSI_CONTROL_SEQUENCE_RE'] = michal;
    return entity;
})();