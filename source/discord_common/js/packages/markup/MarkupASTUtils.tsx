// discord_common/js/packages/markup/MarkupASTUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    zuuluu = argFre;
    entity = function(argFoo) { // Original name: collectAst
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            entity = arguments[1];
            oscard = undefined;
            if(!(entity === oscard)) { _fun00002_ip = 18; continue _fun00001 }
 14:
            entity = new Array(0);
 18:
            var _closure2_slot0 = entity;
            zuuluu = global;
            report = zuuluu.Array;
            zuuluu = report.isArray;
            zuuluu = zuuluu.bind(report)(tangon);
            if(zuuluu) { _fun00002_ip = 107; continue _fun00001 }
 43:
            zuuluu = tangon.content;
            report = 'string';
            zuuluu = typeof zuuluu;
            if(!(report !== zuuluu)) { _fun00002_ip = 90; continue _fun00001 }
 59:
            report = tangon.content;
            zuuluu = null;
            if(!(zuuluu != report)) { _fun00002_ip = 122; continue _fun00001 }
 70:
            report = _closure1_slot1;
            zuuluu = tangon.content;
            zuuluu = report.bind(oscard)(zuuluu, entity);
            _fun00002_ip = 122; continue _fun00001;
 90:
            report = entity.push;
            zuuluu = tangon.content;
            zuuluu = report.bind(entity)(zuuluu);
            _fun00002_ip = 122; continue _fun00001;
 107:
            zuuluu = tangon.forEach;
            michal = function(argFoo) {
                tangon = _closure1_slot1;
                zuuluu = _closure2_slot0;
                michal = undefined;
                entity = argFoo;
                entity = tangon.bind(michal)(entity, zuuluu);
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
 122:
            return entity;
        }
    };
    var _closure1_slot1 = entity;
    entity = function(argFoo, argBar) { // Original name: collapseArrays
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = argFoo;
            zuuluu = argBar;
            entity = global;
            michal = entity.Array;
            entity = michal.isArray;
            entity = entity.bind(michal)(zuuluu);
            if(entity) { _fun00004_ip = 39; continue _fun00003 }
 27:
            entity = tangon.push;
            entity = entity.bind(tangon)(zuuluu);
            _fun00004_ip = 74; continue _fun00003;
 39:
            michal = zuuluu.length;
            entity = 0;
            report = entity < michal;
            if(!report) { _fun00004_ip = 74; continue _fun00003 }
 53:
            oscard = tangon.push;
            report = zuuluu[entity];
            report = oscard.bind(tangon)(report);
            entity = entity + 1;
            if(entity < michal) { _fun00004_ip = 53; continue _fun00003 }
 74:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot2 = entity;
    entity = global;
    oscard = entity.Object;
    report = oscard.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscard)(zuuluu, entity, michal);
    entity = {};
    var _closure1_slot0 = entity;
    michal = argPlu;
    entity = 0;
    report = michal[entity];
    michal = argBar;
    entity = undefined;
    oscard = michal.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    michal = '../discord_common/js/packages/markup/MarkupASTUtils.tsx';
    michal = report.bind(oscard)(michal);
    michal = function(argFoo) { // Original name: astToString
        zuuluu = _closure1_slot1;
        michal = undefined;
        entity = argFoo;
        zuuluu = zuuluu.bind(michal)(entity);
        michal = zuuluu.join;
        entity = '';
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['astToString'] = michal;
    michal = function(argFoo) { // Original name: flattenAst
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            golfie = argFoo;
            oscard = arguments[1];
            report = undefined;
            if(!(oscard === report)) { _fun00006_ip = 14; continue _fun00005 }
 12:
            oscard = null;
 14:
            entity = global;
            michal = entity.Array;
            entity = michal.isArray;
            entity = entity.bind(michal)(golfie);
            if(entity) { _fun00006_ip = 164; continue _fun00005 }
 38:
            entity = golfie.content;
            michal = null;
            if(!(michal != entity)) { _fun00006_ip = 73; continue _fun00005 }
 49:
            zuuluu = _closure1_slot3;
            entity = golfie.content;
            entity = zuuluu.bind(report)(entity, golfie);
            golfie['content'] = entity;
 73:
            zuuluu = golfie.type;
            entity = 'inlineCode';
            if(!(entity === zuuluu)) { _fun00006_ip = 91; continue _fun00005 }
 86:
            entity = delete golfie.validationChildContent;
 91:
            zuuluu = golfie.type;
            entity = 'list';
            if(!(entity === zuuluu)) { _fun00006_ip = 133; continue _fun00005 }
 104:
            tangon = golfie.items;
            zuuluu = tangon.map;
            entity = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    report = argFoo;
                    entity = global;
                    michal = entity.Array;
                    entity = michal.isArray;
                    michal = entity.bind(michal)(report);
                    entity = report;
                    if(!michal) { _fun00008_ip = 44; continue _fun00007 }
 27:
                    tangon = _closure1_slot3;
                    zuuluu = undefined;
                    michal = null;
                    entity = tangon.bind(zuuluu)(report, michal);
 44:
                    return entity;
                }
            };
            entity = zuuluu.bind(tangon)(entity);
            golfie['items'] = entity;
 133:
            entity = golfie;
            if(!(michal != oscard)) { _fun00006_ip = 162; continue _fun00005 }
 140:
            zuuluu = golfie.type;
            michal = oscard.type;
            entity = golfie;
            if(!(zuuluu === michal)) { _fun00006_ip = 162; continue _fun00005 }
 157:
            entity = golfie.content;
 162:
            return entity;
 164:
            tangon = golfie.length;
            entity = new Array(0);
            zuuluu = 0;
            option = zuuluu < tangon;
            if(!option) { _fun00006_ip = 216; continue _fun00005 }
 185:
            verify = _closure1_slot2;
            offset = _closure1_slot3;
            option = golfie[zuuluu];
            option = offset.bind(report)(option, oscard);
            option = verify.bind(report)(entity, option);
            zuuluu = zuuluu + 1;
            if(zuuluu < tangon) { _fun00006_ip = 185; continue _fun00005 }
 216:
            return entity;
        }
    };
    var _closure1_slot3 = michal;
    zuuluu['flattenAst'] = michal;
    michal = function(argFoo) { // Original name: constrainAst
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            golfie = arguments[1];
            oscard = undefined;
            if(!(golfie === oscard)) { _fun00010_ip = 27; continue _fun00009 }
 14:
            zuuluu = {};
            tangon = 200;
            zuuluu['limit'] = tangon;
            golfie = zuuluu;
 27:
            var _closure2_slot0 = golfie;
            zuuluu = global;
            report = zuuluu.Array;
            tangon = report.isArray;
            tangon = tangon.bind(report)(entity);
            if(tangon) { _fun00010_ip = 201; continue _fun00009 }
 55:
            report = entity.type;
            tangon = 'text';
            if(!(tangon !== report)) { _fun00010_ip = 262; continue _fun00009 }
 71:
            report = golfie.limit;
            tangon = 1;
            tangon = report - tangon;
            golfie['limit'] = tangon;
            report = golfie.limit;
            tangon = 0;
            if(!(!(report <= tangon))) { _fun00010_ip = 192; continue _fun00009 }
 102:
            report = zuuluu.Array;
            tangon = report.isArray;
            zuuluu = entity.content;
            zuuluu = tangon.bind(report)(zuuluu);
            if(!zuuluu) { _fun00010_ip = 150; continue _fun00009 }
 126:
            tangon = _closure1_slot4;
            zuuluu = entity.content;
            zuuluu = tangon.bind(oscard)(zuuluu, golfie);
            entity['content'] = zuuluu;
 150:
            tangon = entity.type;
            zuuluu = 'list';
            if(!(zuuluu === tangon)) { _fun00010_ip = 262; continue _fun00009 }
 163:
            tangon = entity.items;
            zuuluu = tangon.map;
            michal = function(argFoo) {
                tangon = _closure1_slot4;
                zuuluu = _closure2_slot0;
                michal = undefined;
                entity = argFoo;
                entity = tangon.bind(michal)(entity, zuuluu);
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            entity['items'] = michal;
            _fun00010_ip = 262; continue _fun00009;
 192:
            michal = _closure1_slot0;
            return michal;
 201:
            report = entity.length;
            tangon = 0;
            michal = tangon < report;
            if(!michal) { _fun00010_ip = 262; continue _fun00009 }
 218:
            option = _closure1_slot4;
            michal = entity[tangon];
            option = option.bind(oscard)(michal, golfie);
            verify = _closure1_slot0;
            michal = tangon;
            if(!(option !== verify)) { _fun00010_ip = 256; continue _fun00009 }
 243:
            entity[michal] = option;
            tangon = michal + 1;
            if(tangon < report) { _fun00010_ip = 218; continue _fun00009 }
 254:
            _fun00010_ip = 262; continue _fun00009;
 256:
            entity['length'] = michal;
 262:
            return entity;
        }
    };
    var _closure1_slot4 = michal;
    zuuluu['constrainAst'] = michal;
    michal = function(argFoo, argBar) { // Original name: getIndexedAST
        zuuluu = argFoo;
        var _closure2_slot0 = zuuluu;
        michal = argBar;
        var _closure2_slot1 = michal;
        michal = 0;
        var _closure2_slot2 = michal;
        michal = zuuluu.map;
        entity = function(argFoo) {
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                entity = argFoo;
                tangon = _closure2_slot2;
                zuuluu = 0;
                if(!(zuuluu !== tangon)) { _fun00012_ip = 41; continue _fun00011 }
 16:
                report = _closure2_slot0;
                oscard = _closure2_slot2;
                tangon = 1;
                tangon = oscard - tangon;
                tangon = report[tangon];
                zuuluu = tangon.endIndex;
 41:
                tangon = _closure2_slot2;
                tangon = tangon + 1;
                _closure2_slot2 = tangon;
                report = entity.type;
                tangon = 'spoiler';
                if(!(tangon !== report)) { _fun00012_ip = 340; continue _fun00011 }
 68:
                tangon = 'u';
                if(!(tangon !== report)) { _fun00012_ip = 340; continue _fun00011 }
 79:
                tangon = 's';
                if(!(tangon !== report)) { _fun00012_ip = 340; continue _fun00011 }
 90:
                tangon = 'strong';
                if(!(tangon !== report)) { _fun00012_ip = 340; continue _fun00011 }
 101:
                tangon = 'em';
                if(!(tangon !== report)) { _fun00012_ip = 262; continue _fun00011 }
 112:
                tangon = 'customEmoji';
                if(!(tangon !== report)) { _fun00012_ip = 262; continue _fun00011 }
 123:
                tangon = 'emoji';
                if(!(tangon !== report)) { _fun00012_ip = 262; continue _fun00011 }
 134:
                tangon = 'inlineCode';
                if(!(tangon !== report)) { _fun00012_ip = 262; continue _fun00011 }
 142:
                tangon = 'text';
                if(!(tangon !== report)) { _fun00012_ip = 220; continue _fun00011 }
 150:
                tangon = _closure2_slot1;
                tangon = tangon + zuuluu;
                entity['startIndex'] = tangon;
                golfie = _closure1_slot5;
                oscard = entity.content;
                report = entity.startIndex;
                tangon = undefined;
                report = golfie.bind(tangon)(oscard, report);
                oscard = report.length;
                tangon = 1;
                tangon = oscard - tangon;
                tangon = report[tangon];
                tangon = tangon.endIndex;
                entity['endIndex'] = tangon;
                return entity;
 220:
                tangon = _closure2_slot1;
                tangon = tangon + zuuluu;
                entity['startIndex'] = tangon;
                report = entity.startIndex;
                tangon = entity.content;
                tangon = tangon.length;
                tangon = report + tangon;
                entity['endIndex'] = tangon;
                return entity;
 262:
                tangon = _closure2_slot1;
                tangon = tangon + zuuluu;
                entity['startIndex'] = tangon;
                option = _closure1_slot5;
                golfie = entity.content;
                tangon = entity.startIndex;
                report = 1;
                oscard = tangon + report;
                tangon = undefined;
                oscard = option.bind(tangon)(golfie, oscard);
                tangon = oscard.length;
                tangon = tangon - report;
                tangon = oscard[tangon];
                tangon = tangon.endIndex;
                tangon = tangon + report;
                entity['endIndex'] = tangon;
                return entity;
 340:
                michal = _closure2_slot1;
                michal = michal + zuuluu;
                entity['startIndex'] = michal;
                oscard = _closure1_slot5;
                report = entity.content;
                michal = entity.startIndex;
                zuuluu = 2;
                tangon = michal + zuuluu;
                michal = undefined;
                tangon = oscard.bind(michal)(report, tangon);
                report = tangon.length;
                michal = 1;
                michal = report - michal;
                michal = tangon[michal];
                michal = michal.endIndex;
                michal = michal + zuuluu;
                entity['endIndex'] = michal;
                return entity;
            }
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    var _closure1_slot5 = michal;
    zuuluu['getIndexedAST'] = michal;
    return entity;
})();