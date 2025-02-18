// app/lib/search/EnglishAnalyzer.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    option = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = option;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = golfie;
    entity = function(argFoo) { // Original name: stripPossessive
        tangon = argFoo;
        zuuluu = tangon.replace;
        michal = /('|\u2019|\uFF07)(s|S)$/;
        entity = '';
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot4 = entity;
    entity = function(argFoo) { // Original name: lowercase
        michal = argFoo;
        entity = michal.toLowerCase;
        entity = entity.bind(michal)();
        return entity;
    };
    var _closure1_slot5 = entity;
    entity = function(argFoo) { // Original name: isStopWord
        zuuluu = _closure1_slot3;
        michal = zuuluu.has;
        entity = argFoo;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    var _closure1_slot6 = entity;
    entity = function(argFoo) { // Original name: isBlank
        entity = argFoo;
        michal = entity.length;
        entity = 0;
        entity = entity === michal;
        return entity;
    };
    var _closure1_slot7 = entity;
    oscard = function(argFoo) { // Original name: analyze
        golfie = argFoo;
        zuuluu = _closure1_slot1;
        oscard = _closure1_slot2;
        michal = 0;
        michal = oscard[michal];
        report = undefined;
        zuuluu = zuuluu.bind(report)(michal);
        tangon = golfie.split;
        michal = /\W+/;
        michal = tangon.bind(golfie)(michal);
        tangon = zuuluu.bind(report)(michal);
        zuuluu = tangon.map;
        michal = _closure1_slot4;
        tangon = zuuluu.bind(tangon)(michal);
        zuuluu = tangon.reject;
        michal = _closure1_slot7;
        tangon = zuuluu.bind(tangon)(michal);
        zuuluu = tangon.map;
        michal = _closure1_slot5;
        tangon = zuuluu.bind(tangon)(michal);
        zuuluu = tangon.reject;
        michal = _closure1_slot6;
        zuuluu = zuuluu.bind(tangon)(michal);
        michal = zuuluu.map;
        tangon = _closure1_slot0;
        entity = 1;
        entity = oscard[entity];
        entity = tangon.bind(report)(entity);
        entity = entity.stemmer;
        michal = michal.bind(zuuluu)(entity);
        entity = michal.value;
        entity = entity.bind(michal)();
        return entity;
    };
    var _closure1_slot8 = oscard;
    report = function(argFoo, argBar) { // Original name: shouldHighlight
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argBar;
            entity = _closure1_slot7;
            report = _closure1_slot5;
            oscard = _closure1_slot4;
            golfie = undefined;
            zuuluu = argFoo;
            zuuluu = oscard.bind(golfie)(zuuluu);
            oscard = report.bind(golfie)(zuuluu);
            zuuluu = entity.bind(golfie)(oscard);
            entity = !zuuluu;
            if(zuuluu) { _fun00002_ip = 56; continue _fun00001 }
 44:
            zuuluu = _closure1_slot6;
            zuuluu = zuuluu.bind(golfie)(oscard);
            entity = !zuuluu;
 56:
            if(!entity) { _fun00002_ip = 100; continue _fun00001 }
 59:
            zuuluu = tangon.has;
            report = _closure1_slot0;
            option = _closure1_slot2;
            michal = 1;
            michal = option[michal];
            report = report.bind(golfie)(michal);
            michal = report.stemmer;
            michal = michal.bind(report)(oscard);
            entity = zuuluu.bind(tangon)(michal);
 100:
            return entity;
        }
    };
    var _closure1_slot9 = report;
    tangon = function(argFoo, argBar) { // Original name: highlightAST
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            oscard = argBar;
            var _closure2_slot0 = oscard;
            zuuluu = global;
            tangon = zuuluu.Array;
            zuuluu = tangon.isArray;
            zuuluu = zuuluu.bind(tangon)(entity);
            if(zuuluu) { _fun00004_ip = 265; continue _fun00003 }
 36:
            zuuluu = entity.content;
            tangon = 'string';
            zuuluu = typeof zuuluu;
            if(!(tangon === zuuluu)) { _fun00004_ip = 65; continue _fun00003 }
 52:
            tangon = entity.type;
            zuuluu = 'codeBlock';
            if(!(zuuluu === tangon)) { _fun00004_ip = 104; continue _fun00003 }
 65:
            tangon = entity.content;
            zuuluu = null;
            if(!(zuuluu != tangon)) { _fun00004_ip = 282; continue _fun00003 }
 79:
            report = _closure1_slot10;
            tangon = entity.content;
            zuuluu = undefined;
            zuuluu = report.bind(zuuluu)(tangon, oscard);
            _fun00004_ip = 282; continue _fun00003;
 104:
            zuuluu = new Array(0);
            var _closure2_slot1 = zuuluu;
            tangon = '';
            var _closure2_slot2 = tangon;
            oscard = entity.content;
            report = oscard.split;
            tangon = /(\W+)/g;
            oscard = report.bind(oscard)(tangon);
            report = oscard.forEach;
            tangon = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    oscard = argFoo;
                    tangon = _closure1_slot9;
                    michal = _closure2_slot0;
                    entity = undefined;
                    tangon = tangon.bind(entity)(oscard, michal);
                    michal = _closure2_slot2;
                    if(tangon) { _fun00006_ip = 42; continue _fun00005 }
 32:
                    tangon = michal + oscard;
                    _closure2_slot2 = tangon;
                    _fun00006_ip = 121; continue _fun00005;
 42:
                    tangon = michal.length;
                    michal = 0;
                    if(!(tangon > michal)) { _fun00006_ip = 85; continue _fun00005 }
 53:
                    report = _closure2_slot1;
                    tangon = report.push;
                    michal = {};
                    golfie = 'text';
                    michal['type'] = golfie;
                    golfie = _closure2_slot2;
                    michal['content'] = golfie;
                    michal = tangon.bind(report)(michal);
 85:
                    report = _closure2_slot1;
                    tangon = report.push;
                    michal = {};
                    golfie = 'highlight';
                    michal['type'] = golfie;
                    michal['content'] = oscard;
                    michal = tangon.bind(report)(michal);
                    michal = '';
                    _closure2_slot2 = michal;
 121:
                    return entity;
                }
            };
            tangon = report.bind(oscard)(tangon);
            tangon = zuuluu.length;
            report = 0;
            if(!(tangon > report)) { _fun00004_ip = 282; continue _fun00003 }
 177:
            tangon = _closure2_slot2;
            tangon = tangon.length;
            if(!(tangon > report)) { _fun00004_ip = 218; continue _fun00003 }
 190:
            report = zuuluu.push;
            tangon = {};
            oscard = 'text';
            tangon['type'] = oscard;
            oscard = _closure2_slot2;
            tangon['content'] = oscard;
            tangon = report.bind(zuuluu)(tangon);
 218:
            report = entity.type;
            tangon = 'text';
            if(!(tangon !== report)) { _fun00004_ip = 257; continue _fun00003 }
 231:
            report = {};
            report['type'] = tangon;
            report['content'] = zuuluu;
            tangon = new Array(1);
            tangon[0] = report;
            entity['content'] = tangon;
            _fun00004_ip = 282; continue _fun00003;
 257:
            entity['content'] = zuuluu;
            _fun00004_ip = 282; continue _fun00003;
 265:
            zuuluu = entity.forEach;
            michal = function(argFoo) {
                entity = argFoo;
                tangon = _closure1_slot10;
                zuuluu = _closure2_slot0;
                michal = undefined;
                michal = tangon.bind(michal)(entity, zuuluu);
                return entity;
            };
            michal = zuuluu.bind(entity)(michal);
 282:
            return entity;
        }
    };
    var _closure1_slot10 = tangon;
    entity = global;
    romeon = entity.Object;
    yankee = romeon.defineProperty;
    offset = {};
    verify = true;
    offset['value'] = verify;
    verify = '__esModule';
    verify = yankee.bind(romeon)(zuuluu, verify, offset);
    offset = entity.Set;
    entity = offset.prototype;
    verify = Object.create(entity, {constructor: {value: offset}});
    kiloes = ['a', 'an', 'and', 'are', 'as', 'at', 'be', 'but', 'by', 'for', 'if', 'in', 'into', 'is', 'it', 'no', 'not', 'of', 'on', 'or', 'such', 'that', 'the', 'their', 'then', 'there', 'these', 'they', 'this', 'to', 'was', 'will', 'with'];
    sizing = verify;
    entity = new sizing[offset](kiloes, backup);
    entity = entity instanceof Object ? entity : verify;
    var _closure1_slot3 = entity;
    entity = 2;
    golfie = golfie[entity];
    entity = undefined;
    verify = option.bind(entity)(golfie);
    option = verify.fileFinishedImporting;
    golfie = 'lib/search/EnglishAnalyzer.tsx';
    golfie = option.bind(verify)(golfie);
    zuuluu['analyze'] = oscard;
    zuuluu['shouldHighlight'] = report;
    zuuluu['highlightAST'] = tangon;
    michal = function(argFoo) { // Original name: createASTHighlighter
        michal = global;
        tangon = michal.Set;
        report = _closure1_slot8;
        zuuluu = undefined;
        michal = argFoo;
        oscard = report.bind(zuuluu)(michal);
        zuuluu = tangon.prototype;
        zuuluu = Object.create(zuuluu, {constructor: {value: tangon}});
        golfie = zuuluu;
        michal = new golfie[tangon](oscard, report);
        michal = michal instanceof Object ? michal : zuuluu;
        var _closure2_slot0 = michal;
        entity = function(argFoo) {
            entity = argFoo;
            tangon = _closure1_slot10;
            zuuluu = _closure2_slot0;
            michal = undefined;
            michal = tangon.bind(michal)(entity, zuuluu);
            return entity;
        };
        return entity;
    };
    zuuluu['createASTHighlighter'] = michal;
    return entity;
})();