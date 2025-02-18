// app/utils/ChangeLogUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
    report = function(argFoo) { // Original name: getDefaultRules
        entity = {};
        tangon = _closure1_slot13;
        zuuluu = undefined;
        michal = argFoo;
        report = tangon.bind(zuuluu)(michal);
        oscard = entity;
        michal = copyDataProperties(oscard, report);
        return entity;
    };
    var _closure1_slot16 = report;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, tangon);
    tangon = 0;
    verify = golfie[tangon];
    entity = undefined;
    verify = option.bind(entity)(verify);
    verify = verify.defaultRules;
    verify = verify.lheading;
    var _closure1_slot3 = verify;
    verify = golfie[tangon];
    verify = option.bind(entity)(verify);
    verify = verify.defaultRules;
    verify = verify.heading;
    var _closure1_slot4 = verify;
    verify = golfie[tangon];
    verify = option.bind(entity)(verify);
    verify = verify.defaultRules;
    verify = verify.link;
    var _closure1_slot5 = verify;
    verify = golfie[tangon];
    verify = option.bind(entity)(verify);
    verify = verify.defaultRules;
    verify = verify.image;
    var _closure1_slot6 = verify;
    verify = golfie[tangon];
    verify = option.bind(entity)(verify);
    verify = verify.defaultRules;
    verify = verify.list;
    var _closure1_slot7 = verify;
    verify = golfie[tangon];
    verify = option.bind(entity)(verify);
    verify = verify.defaultRules;
    verify = verify.blockQuote;
    var _closure1_slot8 = verify;
    tangon = golfie[tangon];
    tangon = option.bind(entity)(tangon);
    tangon = tangon.defaultRules;
    tangon = tangon.paragraph;
    var _closure1_slot9 = tangon;
    tangon = /\{(.+?)}/;
    var _closure1_slot10 = tangon;
    tangon = /^\$(\w+?)\$/;
    var _closure1_slot11 = tangon;
    tangon = function(argFoo) { // Original name: parseWithClassNameExtraction
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            michal = michal.transformUpperCase;
            zuuluu = undefined;
            if(!(michal === zuuluu)) { _fun00002_ip = 19; continue _fun00001 }
 17:
            michal = false;
 19:
            var _closure2_slot0 = michal;
            entity = function(argFoo, argBar, argBaz) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    report = argFoo;
                    option = _closure1_slot10;
                    zuuluu = option.exec;
                    tangon = 1;
                    entity = report[tangon];
                    golfie = zuuluu.bind(option)(entity);
                    oscard = report[tangon];
                    zuuluu = oscard.replace;
                    entity = '';
                    zuuluu = zuuluu.bind(oscard)(option, entity);
                    entity = _closure2_slot0;
                    oscard = zuuluu;
                    if(!entity) { _fun00004_ip = 70; continue _fun00003 }
 60:
                    entity = zuuluu.toUpperCase;
                    oscard = entity.bind(zuuluu)();
 70:
                    entity = {};
                    zuuluu = null;
                    option = zuuluu != golfie;
                    if(!option) { _fun00004_ip = 85; continue _fun00003 }
 81:
                    zuuluu = golfie[tangon];
 85:
                    entity['className'] = zuuluu;
                    zuuluu = 2;
                    golfie = report[zuuluu];
                    report = '=';
                    if(!(report === golfie)) { _fun00004_ip = 108; continue _fun00003 }
 105:
                    zuuluu = tangon;
 108:
                    entity['level'] = zuuluu;
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 0;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    report = tangon.bind(michal)(zuuluu);
                    tangon = report.parseInline;
                    zuuluu = argBar;
                    michal = argBaz;
                    michal = tangon.bind(report)(zuuluu, oscard, michal);
                    entity['content'] = michal;
                    return entity;
                }
            };
            return entity;
        }
    };
    var _closure1_slot12 = tangon;
    tangon = function(argFoo) { // Original name: defaultRules
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            oscard = argFoo;
            entity = {};
            report = _closure1_slot0;
            michal = _closure1_slot2;
            option = 1;
            verify = michal[option];
            golfie = undefined;
            verify = report.bind(golfie)(verify);
            romeon = verify.baseRules;
            foxtra = entity;
            verify = copyDataProperties(foxtra, romeon);
            verify = {};
            romeon = _closure1_slot6;
            foxtra = verify;
            offset = copyDataProperties(foxtra, romeon);
            michal = michal[option];
            michal = report.bind(golfie)(michal);
            michal = michal.customRules;
            michal = michal.image;
            report = 'function';
            michal = typeof michal;
            if(!(report !== michal)) { _fun00006_ip = 121; continue _fun00005 }
 90:
            offset = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[option];
            michal = offset.bind(golfie)(michal);
            michal = michal.customRules;
            michal = michal.image;
            _fun00006_ip = 155; continue _fun00005;
 121:
            yankee = _closure1_slot0;
            offset = _closure1_slot2;
            offset = offset[option];
            offset = yankee.bind(golfie)(offset);
            yankee = offset.customRules;
            offset = yankee.image;
            michal = offset.bind(yankee)(oscard);
 155:
            foxtra = verify;
            romeon = michal;
            michal = copyDataProperties(foxtra, romeon);
            michal = 'image';
            entity[michal] = verify;
            verify = {};
            romeon = _closure1_slot5;
            foxtra = verify;
            michal = copyDataProperties(foxtra, romeon);
            offset = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[option];
            michal = offset.bind(golfie)(michal);
            michal = michal.customRules;
            michal = michal.link;
            michal = typeof michal;
            if(!(report !== michal)) { _fun00006_ip = 254; continue _fun00005 }
 223:
            offset = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[option];
            michal = offset.bind(golfie)(michal);
            michal = michal.customRules;
            michal = michal.link;
            _fun00006_ip = 288; continue _fun00005;
 254:
            yankee = _closure1_slot0;
            offset = _closure1_slot2;
            offset = offset[option];
            offset = yankee.bind(golfie)(offset);
            yankee = offset.customRules;
            offset = yankee.link;
            michal = offset.bind(yankee)(oscard);
 288:
            foxtra = verify;
            romeon = michal;
            michal = copyDataProperties(foxtra, romeon);
            michal = 'link';
            entity[michal] = verify;
            verify = {};
            romeon = _closure1_slot7;
            foxtra = verify;
            michal = copyDataProperties(foxtra, romeon);
            offset = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[option];
            michal = offset.bind(golfie)(michal);
            michal = michal.customRules;
            michal = michal.list;
            michal = typeof michal;
            if(!(report !== michal)) { _fun00006_ip = 387; continue _fun00005 }
 356:
            offset = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[option];
            michal = offset.bind(golfie)(michal);
            michal = michal.customRules;
            michal = michal.list;
            _fun00006_ip = 421; continue _fun00005;
 387:
            yankee = _closure1_slot0;
            offset = _closure1_slot2;
            offset = offset[option];
            offset = yankee.bind(golfie)(offset);
            yankee = offset.customRules;
            offset = yankee.list;
            michal = offset.bind(yankee)(oscard);
 421:
            foxtra = verify;
            romeon = michal;
            michal = copyDataProperties(foxtra, romeon);
            michal = 'list';
            entity[michal] = verify;
            verify = {};
            yankee = _closure1_slot1;
            michal = _closure1_slot2;
            offset = 2;
            offset = michal[offset];
            offset = yankee.bind(golfie)(offset);
            offset = offset.order;
            verify['order'] = offset;
            offset = function(argFoo) { // Original name: match
                zuuluu = _closure1_slot11;
                michal = zuuluu.exec;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            verify['match'] = offset;
            offset = function(argFoo, argBar, argBaz) { // Original name: parse
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    tangon = argFoo;
                    entity = argBaz;
                    michal = entity.interpolations;
                    entity = 1;
                    entity = tangon[entity];
                    michal = michal[entity];
                    entity = null;
                    if(!(entity != michal)) { _fun00008_ip = 50; continue _fun00007 }
 31:
                    entity = {};
                    zuuluu = 'interpolation';
                    entity['type'] = zuuluu;
                    entity['renderer'] = michal;
                    _fun00008_ip = 73; continue _fun00007;
 50:
                    michal = {};
                    zuuluu = 'text';
                    michal['type'] = zuuluu;
                    zuuluu = 0;
                    zuuluu = tangon[zuuluu];
                    michal['content'] = zuuluu;
                    entity = michal;
 73:
                    return entity;
                }
            };
            verify['parse'] = offset;
            zuuluu = function(argFoo) { // Original name: react
                michal = argFoo;
                entity = michal.renderer;
                entity = entity.bind(michal)();
                return entity;
            };
            verify['react'] = zuuluu;
            zuuluu = 'interpolation';
            entity[zuuluu] = verify;
            zuuluu = {};
            romeon = _closure1_slot3;
            foxtra = zuuluu;
            verify = copyDataProperties(foxtra, romeon);
            offset = _closure1_slot12;
            verify = {};
            yankee = true;
            verify['transformUpperCase'] = yankee;
            offset = offset.bind(golfie)(verify);
            verify = 'parse';
            zuuluu[verify] = offset;
            verify = _closure1_slot0;
            michal = michal[option];
            michal = verify.bind(golfie)(michal);
            michal = michal.customRules;
            michal = michal.lheading;
            michal = typeof michal;
            if(!(report !== michal)) { _fun00006_ip = 617; continue _fun00005 }
 586:
            verify = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[option];
            michal = verify.bind(golfie)(michal);
            michal = michal.customRules;
            michal = michal.lheading;
            _fun00006_ip = 651; continue _fun00005;
 617:
            offset = _closure1_slot0;
            verify = _closure1_slot2;
            verify = verify[option];
            verify = offset.bind(golfie)(verify);
            offset = verify.customRules;
            verify = offset.lheading;
            michal = verify.bind(offset)(oscard);
 651:
            foxtra = zuuluu;
            romeon = michal;
            michal = copyDataProperties(foxtra, romeon);
            michal = 'lheading';
            entity[michal] = zuuluu;
            zuuluu = {};
            romeon = _closure1_slot4;
            foxtra = zuuluu;
            michal = copyDataProperties(foxtra, romeon);
            verify = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[option];
            michal = verify.bind(golfie)(michal);
            michal = michal.customRules;
            michal = michal.heading;
            michal = typeof michal;
            if(!(report !== michal)) { _fun00006_ip = 750; continue _fun00005 }
 719:
            verify = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[option];
            michal = verify.bind(golfie)(michal);
            michal = michal.customRules;
            michal = michal.heading;
            _fun00006_ip = 784; continue _fun00005;
 750:
            offset = _closure1_slot0;
            verify = _closure1_slot2;
            verify = verify[option];
            verify = offset.bind(golfie)(verify);
            offset = verify.customRules;
            verify = offset.heading;
            michal = verify.bind(offset)(oscard);
 784:
            foxtra = zuuluu;
            romeon = michal;
            michal = copyDataProperties(foxtra, romeon);
            michal = 'heading';
            entity[michal] = zuuluu;
            zuuluu = {};
            romeon = _closure1_slot8;
            foxtra = zuuluu;
            michal = copyDataProperties(foxtra, romeon);
            verify = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[option];
            michal = verify.bind(golfie)(michal);
            michal = michal.customRules;
            michal = michal.blockQuote;
            michal = typeof michal;
            if(!(report !== michal)) { _fun00006_ip = 883; continue _fun00005 }
 852:
            verify = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[option];
            michal = verify.bind(golfie)(michal);
            michal = michal.customRules;
            michal = michal.blockQuote;
            _fun00006_ip = 917; continue _fun00005;
 883:
            offset = _closure1_slot0;
            verify = _closure1_slot2;
            verify = verify[option];
            verify = offset.bind(golfie)(verify);
            offset = verify.customRules;
            verify = offset.blockQuote;
            michal = verify.bind(offset)(oscard);
 917:
            foxtra = zuuluu;
            romeon = michal;
            michal = copyDataProperties(foxtra, romeon);
            michal = 'blockQuote';
            entity[michal] = zuuluu;
            zuuluu = {};
            romeon = _closure1_slot9;
            foxtra = zuuluu;
            michal = copyDataProperties(foxtra, romeon);
            verify = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[option];
            michal = verify.bind(golfie)(michal);
            michal = michal.customRules;
            michal = michal.paragraph;
            michal = typeof michal;
            if(!(report !== michal)) { _fun00006_ip = 1016; continue _fun00005 }
 985:
            report = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[option];
            michal = report.bind(golfie)(michal);
            michal = michal.customRules;
            michal = michal.paragraph;
            _fun00006_ip = 1050; continue _fun00005;
 1016:
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            tangon = tangon[option];
            tangon = report.bind(golfie)(tangon);
            report = tangon.customRules;
            tangon = report.paragraph;
            michal = tangon.bind(report)(oscard);
 1050:
            foxtra = zuuluu;
            romeon = michal;
            michal = copyDataProperties(foxtra, romeon);
            michal = 'paragraph';
            entity[michal] = zuuluu;
            return entity;
        }
    };
    var _closure1_slot13 = tangon;
    tangon = function(argFoo) { // Original name: specialRules
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = {};
            michal = {};
            option = _closure1_slot3;
            verify = michal;
            zuuluu = copyDataProperties(verify, option);
            report = _closure1_slot12;
            zuuluu = {};
            oscard = false;
            zuuluu['transformUpperCase'] = oscard;
            oscard = undefined;
            report = report.bind(oscard)(zuuluu);
            zuuluu = 'parse';
            michal[zuuluu] = report;
            report = _closure1_slot0;
            zuuluu = _closure1_slot2;
            golfie = 1;
            zuuluu = zuuluu[golfie];
            zuuluu = report.bind(oscard)(zuuluu);
            zuuluu = zuuluu.customRules;
            zuuluu = zuuluu.lheading;
            report = 'function';
            zuuluu = typeof zuuluu;
            if(!(report !== zuuluu)) { _fun00010_ip = 121; continue _fun00009 }
 90:
            report = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[golfie];
            zuuluu = report.bind(oscard)(zuuluu);
            zuuluu = zuuluu.customRules;
            zuuluu = zuuluu.lheading;
            _fun00010_ip = 158; continue _fun00009;
 121:
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            tangon = tangon[golfie];
            tangon = report.bind(oscard)(tangon);
            oscard = tangon.customRules;
            report = oscard.lheading;
            tangon = argFoo;
            zuuluu = report.bind(oscard)(tangon);
 158:
            verify = michal;
            option = zuuluu;
            zuuluu = copyDataProperties(verify, option);
            entity['lheading'] = michal;
            return entity;
        }
    };
    var _closure1_slot14 = tangon;
    tangon = function(argFoo) { // Original name: messageRules
        entity = {};
        report = _closure1_slot13;
        tangon = undefined;
        zuuluu = argFoo;
        golfie = report.bind(tangon)(zuuluu);
        option = entity;
        zuuluu = copyDataProperties(option, golfie);
        oscard = {};
        zuuluu = _closure1_slot1;
        report = _closure1_slot2;
        michal = 0;
        michal = report[michal];
        michal = zuuluu.bind(tangon)(michal);
        michal = michal.defaultRules;
        golfie = michal.newline;
        option = oscard;
        michal = copyDataProperties(option, golfie);
        michal = 'newline';
        entity[michal] = oscard;
        michal = 2;
        michal = report[michal];
        oscard = zuuluu.bind(tangon)(michal);
        michal = 'text';
        entity[michal] = oscard;
        michal = 3;
        michal = report[michal];
        oscard = zuuluu.bind(tangon)(michal);
        michal = 'list';
        entity[michal] = oscard;
        michal = 4;
        michal = report[michal];
        zuuluu = zuuluu.bind(tangon)(michal);
        michal = 'subtext';
        entity[michal] = zuuluu;
        return entity;
    };
    var _closure1_slot15 = tangon;
    tangon = {};
    tangon['getDefaultRules'] = report;
    report = function(argFoo) { // Original name: getSpecialRules
        tangon = argFoo;
        entity = {};
        report = _closure1_slot13;
        zuuluu = undefined;
        oscard = report.bind(zuuluu)(tangon);
        golfie = entity;
        report = copyDataProperties(golfie, oscard);
        michal = _closure1_slot14;
        oscard = michal.bind(zuuluu)(tangon);
        golfie = entity;
        michal = copyDataProperties(golfie, oscard);
        return entity;
    };
    tangon['getSpecialRules'] = report;
    report = function(argFoo) { // Original name: getMessageRules
        entity = {};
        tangon = _closure1_slot15;
        zuuluu = undefined;
        michal = argFoo;
        report = tangon.bind(zuuluu)(michal);
        oscard = entity;
        michal = copyDataProperties(oscard, report);
        return entity;
    };
    tangon['getMessageRules'] = report;
    report = 6;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'utils/ChangeLogUtils.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    michal = function(argFoo, argBar, argBaz) { // Original name: renderChangelogMessageMarkup
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            option = argBaz;
            entity = {};
            oscard = false;
            entity['hasSpoilerEmbeds'] = oscard;
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            zuuluu = 5;
            zuuluu = report[zuuluu];
            report = undefined;
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = tangon.reactParserFor;
            golfie = _closure1_slot16;
            michal = argBar;
            michal = golfie.bind(report)(michal);
            tangon = zuuluu.bind(tangon)(michal);
            michal = argFoo;
            zuuluu = michal.content;
            michal = null;
            if(!(michal == option)) { _fun00012_ip = 78; continue _fun00011 }
 74:
            michal = {};
            _fun00012_ip = 88; continue _fun00011;
 78:
            golfie = {};
            golfie['changeLog'] = option;
            michal = golfie;
 88:
            michal = tangon.bind(report)(zuuluu, oscard, michal);
            entity['content'] = michal;
            return entity;
        }
    };
    zuuluu['renderChangelogMessageMarkup'] = michal;
    return entity;
})();