// app/modules/markup/MarkupListRule.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBaz;
    zuuluu = argFre;
    report = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = report;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    oscard = {};
    michal = true;
    oscard['value'] = michal;
    michal = '__esModule';
    michal = option.bind(verify)(zuuluu, michal, oscard);
    michal = /\n{2,}$/;
    var _closure1_slot2 = michal;
    michal = /(?:^|\n)( *)$/;
    var _closure1_slot3 = michal;
    option = entity.RegExp;
    offset = '(%INDENT_CAPTURE_PATTERN%)((?:[*-]|\\d+\\.)) +';
    verify = offset.replace;
    oscard = '%INDENT_CAPTURE_PATTERN%';
    michal = ' *';
    oscard = verify.bind(offset)(oscard, michal);
    michal = '^';
    foxtra = michal + oscard;
    oscard = option.prototype;
    oscard = Object.create(oscard, {constructor: {value: option}});
    backup = oscard;
    michal = new backup[option](foxtra, romeon);
    michal = michal instanceof Object ? michal : oscard;
    var _closure1_slot4 = michal;
    michal = / *\n$/;
    var _closure1_slot5 = michal;
    oscard = entity.RegExp;
    entity = oscard.prototype;
    michal = Object.create(entity, {constructor: {value: oscard}});
    foxtra = '^( *)((?:[*-]|\\d+\\.)) [\\s\\S]+?(?:\\n(?! )(?!\\1(?:[*-]|\\d+\\.) )|$)';
    backup = michal;
    entity = new backup[oscard](foxtra, romeon);
    entity = entity instanceof Object ? entity : michal;
    var _closure1_slot6 = entity;
    entity = /^[ \t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+$/;
    var _closure1_slot7 = entity;
    michal = {};
    entity = 0;
    oscard = report[entity];
    entity = undefined;
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.defaultRules;
    romeon = oscard.list;
    foxtra = michal;
    oscard = copyDataProperties(foxtra, romeon);
    option = ' *-0123456789';
    golfie = option.split;
    oscard = '';
    golfie = golfie.bind(option)(oscard);
    oscard = 'requiredFirstCharacters';
    michal[oscard] = golfie;
    golfie = function(argFoo, argBar) { // Original name: match
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argBar;
            michal = entity.allowList;
            if(michal) { _fun00002_ip = 16; continue _fun00001 }
 12:
            michal = null;
            return michal;
 16:
            zuuluu = entity._listLevel;
            michal = 11;
            if(!(!(zuuluu >= michal))) { _fun00002_ip = 132; continue _fun00001 }
 29:
            michal = entity.prevCapture;
            tangon = null;
            michal = tangon == michal;
            report = '';
            if(michal) { _fun00002_ip = 60; continue _fun00001 }
 48:
            michal = entity.prevCapture;
            entity = 0;
            report = michal[entity];
 60:
            zuuluu = _closure1_slot3;
            entity = zuuluu.exec;
            golfie = entity.bind(zuuluu)(report);
            zuuluu = tangon == golfie;
            entity = null;
            if(zuuluu) { _fun00002_ip = 130; continue _fun00001 }
 87:
            oscard = _closure1_slot7;
            report = oscard.test;
            zuuluu = 0;
            zuuluu = golfie[zuuluu];
            zuuluu = report.bind(oscard)(zuuluu);
            entity = null;
            if(zuuluu) { _fun00002_ip = 130; continue _fun00001 }
 112:
            tangon = _closure1_slot6;
            zuuluu = tangon.exec;
            michal = argFoo;
            entity = zuuluu.bind(tangon)(michal);
 130:
            return entity;
 132:
            entity = null;
            return entity;
        }
    };
    oscard = 'match';
    michal[oscard] = golfie;
    oscard = function(argFoo, argBar, argBaz) { // Original name: parse
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            zuuluu = argBar;
            var _closure2_slot0 = zuuluu;
            zuuluu = argBaz;
            var _closure2_slot1 = zuuluu;
            zuuluu = 2;
            tangon = entity[zuuluu];
            zuuluu = tangon.length;
            verify = 1;
            report = zuuluu > verify;
            option = undefined;
            zuuluu = undefined;
            if(!report) { _fun00004_ip = 90; continue _fun00003 }
 45:
            oscard = global;
            offset = oscard.Math;
            golfie = offset.min;
            yankee = oscard.Math;
            oscard = yankee.max;
            tangon = tangon - 0;
            oscard = oscard.bind(yankee)(verify, tangon);
            tangon = 1000000000;
            zuuluu = golfie.bind(offset)(tangon, oscard);
 90:
            result = 0;
            offset = entity[result];
            golfie = offset.replace;
            tangon = _closure1_slot2;
            entity = '\n';
            offset = golfie.bind(offset)(tangon, entity);
            tangon = _closure1_slot4;
            entity = tangon.exec;
            tangon = entity.bind(tangon)(offset);
            entity = null;
            golfie = entity != tangon;
            yankee = 0;
            if(!golfie) { _fun00004_ip = 153; continue _fun00003 }
 144:
            golfie = tangon[result];
            yankee = golfie.length;
 153:
            golfie = entity != tangon;
            result = 0;
            if(!golfie) { _fun00004_ip = 171; continue _fun00003 }
 162:
            tangon = tangon[verify];
            result = tangon.length;
 171:
            kiloes = '(%INDENT_CAPTURE_PATTERN%)((?:[*-]|\\d+\\.)) +[^\\n]*(?:\\n(?!%INDENT_CAPTURE_PATTERN%(?:[*-]|\\d+\\.) )[^\\n]*)*(\n|$)';
            foxtra = kiloes.replaceAll;
            update = result + verify;
            tangon = global;
            golfie = tangon.HermesInternal;
            sizing = golfie.concat;
            vacuum = ' {';
            source = ',';
            backup = '}';
            ctrled = result;
            echoed = backup;
            romeon = vacuum[sizing](ctrled, source, update, echoed, result);
            golfie = '%INDENT_CAPTURE_PATTERN%';
            ctrled = foxtra.bind(kiloes)(golfie, romeon);
            golfie = tangon.RegExp;
            romeon = golfie.prototype;
            romeon = Object.create(romeon, {constructor: {value: golfie}});
            foxtra = 'gm';
            vacuum = romeon;
            source = foxtra;
            golfie = new vacuum[golfie](ctrled, source, update);
            golfie = golfie instanceof Object ? golfie : romeon;
            romeon = tangon.RegExp;
            tangon = '^ {1,';
            tangon = tangon + yankee;
            yankee = romeon.prototype;
            yankee = Object.create(yankee, {constructor: {value: romeon}});
            ctrled = tangon + backup;
            vacuum = yankee;
            tangon = new vacuum[romeon](ctrled, source, update);
            tangon = tangon instanceof Object ? tangon : yankee;
            var _closure2_slot2 = tangon;
            tangon = offset.match;
            tangon = tangon.bind(offset)(golfie);
            var _closure2_slot3 = tangon;
            golfie = _closure1_slot0;
            oscard = _closure1_slot1;
            oscard = oscard[verify];
            golfie = golfie.bind(option)(oscard);
            oscard = entity != tangon;
            entity = 'markup list items can not be parsed.';
            entity = golfie.bind(option)(oscard, entity);
            entity = false;
            var _closure2_slot4 = entity;
            entity = {};
            entity['ordered'] = report;
            entity['start'] = zuuluu;
            zuuluu = tangon.map;
            michal = function(argFoo, argBar) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    tangon = argFoo;
                    zuuluu = tangon.replace;
                    entity = _closure1_slot4;
                    yankee = '';
                    report = zuuluu.bind(tangon)(entity, yankee);
                    tangon = report.replace;
                    zuuluu = _closure2_slot2;
                    verify = tangon.bind(report)(zuuluu, yankee);
                    zuuluu = _closure2_slot3;
                    zuuluu = zuuluu.length;
                    foxtra = 1;
                    tangon = zuuluu - foxtra;
                    zuuluu = argBar;
                    zuuluu = zuuluu === tangon;
                    tangon = verify.indexOf;
                    golfie = '\n\n';
                    report = tangon.bind(verify)(golfie);
                    tangon = -1;
                    option = tangon !== report;
                    if(option) { _fun00006_ip = 106; continue _fun00005 }
 96:
                    if(!zuuluu) { _fun00006_ip = 103; continue _fun00005 }
 99:
                    zuuluu = _closure2_slot4;
 103:
                    option = zuuluu;
 106:
                    _closure2_slot4 = option;
                    romeon = _closure2_slot1;
                    report = romeon.inline;
                    tangon = romeon._list;
                    zuuluu = romeon._listLevel;
                    oscard = true;
                    romeon['_list'] = oscard;
                    offset = null;
                    backup = offset != zuuluu;
                    offset = 0;
                    if(!backup) { _fun00006_ip = 154; continue _fun00005 }
 151:
                    offset = zuuluu;
 154:
                    offset = offset + foxtra;
                    romeon['_listLevel'] = offset;
                    offset = _closure2_slot1;
                    if(option) { _fun00006_ip = 194; continue _fun00005 }
 171:
                    offset['inline'] = oscard;
                    option = verify.replace;
                    oscard = _closure1_slot5;
                    option = option.bind(verify)(oscard, yankee);
                    _fun00006_ip = 217; continue _fun00005;
 194:
                    oscard = false;
                    offset['inline'] = oscard;
                    oscard = verify.replace;
                    michal = _closure1_slot5;
                    option = oscard.bind(verify)(michal, golfie);
 217:
                    golfie = _closure2_slot0;
                    oscard = {};
                    michal = _closure2_slot1;
                    sizing = oscard;
                    kiloes = michal;
                    entity = copyDataProperties(sizing, kiloes);
                    verify = false;
                    entity = 'allowHeading';
                    oscard[entity] = verify;
                    entity = undefined;
                    golfie = golfie.bind(entity)(option, oscard);
                    oscard = golfie.map;
                    entity = function(argFoo) {
                        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                            entity = argFoo;
                            zuuluu = entity.type;
                            michal = 'text';
                            michal = michal === zuuluu;
                            if(!michal) { _fun00008_ip = 30; continue _fun00007 }
 19:
                            tangon = entity.content;
                            zuuluu = null;
                            michal = zuuluu != tangon;
 30:
                            if(!michal) { _fun00008_ip = 73; continue _fun00007 }
 33:
                            report = entity.content;
                            tangon = report.replace;
                            zuuluu = /\n+\s*$/;
                            michal = '';
                            michal = tangon.bind(report)(zuuluu, michal);
                            entity['content'] = michal;
 73:
                            return entity;
                        }
                    };
                    entity = oscard.bind(golfie)(entity);
                    michal['inline'] = report;
                    michal['_list'] = tangon;
                    michal['_listLevel'] = zuuluu;
                    return entity;
                }
            };
            michal = zuuluu.bind(tangon)(michal);
            entity['items'] = michal;
            return entity;
        }
    };
    tangon = 'parse';
    michal[tangon] = oscard;
    tangon = 2;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/markup/MarkupListRule.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();