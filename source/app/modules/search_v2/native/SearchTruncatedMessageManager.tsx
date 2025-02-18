// app/modules/search_v2/native/SearchTruncatedMessageManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = function(argFoo, argBar) { // Original name: truncateString
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argFoo;
            verify = arguments[2];
            option = undefined;
            if(!(verify === option)) { _fun00002_ip = 17; continue _fun00001 }
 14:
            verify = 1;
 17:
            var _closure2_slot0 = option;
            entity = null;
            if(!(entity != oscard)) { _fun00002_ip = 330; continue _fun00001 }
 30:
            report = oscard.replace;
            tangon = /(\r\n|\n|\r)/gm;
            michal = ' ';
            golfie = report.bind(oscard)(tangon, michal);
            michal = global;
            oscard = michal.Set;
            report = _closure1_slot0;
            offset = _closure1_slot1;
            tangon = 3;
            tangon = offset[tangon];
            option = report.bind(option)(tangon);
            report = option.analyze;
            tangon = argBar;
            romeon = report.bind(option)(tangon);
            report = oscard.prototype;
            report = Object.create(report, {constructor: {value: oscard}});
            foxtra = report;
            tangon = new foxtra[oscard](romeon, yankee);
            tangon = tangon instanceof Object ? tangon : report;
            _closure2_slot0 = tangon;
            report = golfie.split;
            tangon = /(\W+)/g;
            report = report.bind(golfie)(tangon);
            tangon = report.find;
            zuuluu = function(argFoo) {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot1;
                entity = 3;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.shouldHighlight;
                michal = _closure2_slot0;
                entity = argFoo;
                entity = zuuluu.bind(tangon)(entity, michal);
                return entity;
            };
            zuuluu = tangon.bind(report)(zuuluu);
            if(!(entity != zuuluu)) { _fun00002_ip = 328; continue _fun00001 }
 176:
            oscard = michal.RegExp;
            option = '\\b';
            tangon = option + zuuluu;
            report = oscard.prototype;
            report = Object.create(report, {constructor: {value: oscard}});
            romeon = tangon + option;
            foxtra = report;
            tangon = new foxtra[oscard](romeon, yankee);
            report = tangon instanceof Object ? tangon : report;
            tangon = golfie.search;
            tangon = tangon.bind(golfie)(report);
            report = -1;
            if(!(report !== tangon)) { _fun00002_ip = 326; continue _fun00001 }
 237:
            option = zuuluu.length;
            oscard = michal.Math;
            report = oscard.max;
            zuuluu = 30;
            zuuluu = zuuluu * verify;
            zuuluu = zuuluu - option;
            tangon = tangon - zuuluu;
            zuuluu = 0;
            oscard = report.bind(oscard)(zuuluu, tangon);
            zuuluu = oscard > zuuluu;
            report = '';
            tangon = report;
            if(!zuuluu) { _fun00002_ip = 296; continue _fun00001 }
 290:
            tangon = '...';
 296:
            zuuluu = golfie.substring;
            zuuluu = zuuluu.bind(golfie)(oscard);
            michal = michal.HermesInternal;
            michal = michal.concat;
            michal = michal.bind(report)(tangon, zuuluu);
            return michal;
 326:
            return entity;
 328:
            return entity;
 330:
            return entity;
        }
    };
    var _closure1_slot5 = entity;
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
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    michal = function() {
        tangon = _closure1_slot3;
        zuuluu = function(argFoo, argBar) { // Original name: SearchTruncatedMessageManager
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zuuluu = this;
                report = _closure1_slot2;
                tangon = _closure2_slot0;
                entity = undefined;
                tangon = report.bind(entity)(zuuluu, tangon);
                tangon = global;
                tangon = tangon.Map;
                report = tangon.prototype;
                report = Object.create(report, {constructor: {value: tangon}});
                yankee = report;
                tangon = new yankee[tangon](offset);
                tangon = tangon instanceof Object ? tangon : report;
                zuuluu['truncatedMessages'] = tangon;
                tangon = _closure1_slot0;
                oscard = _closure1_slot1;
                michal = 4;
                report = oscard[michal];
                option = tangon.bind(entity)(report);
                golfie = option.tokenizeQuery;
                report = argFoo;
                report = golfie.bind(option)(report);
                michal = oscard[michal];
                tangon = tangon.bind(entity)(michal);
                michal = tangon.getSearchQueryFromTokens;
                michal = michal.bind(tangon)(report);
                oscard = michal.content;
                michal = null;
                report = michal == oscard;
                tangon = undefined;
                if(report) { _fun00004_ip = 139; continue _fun00003 }
 129:
                report = oscard.trim;
                tangon = report.bind(oscard)();
 139:
                report = michal != tangon;
                michal = null;
                if(!report) { _fun00004_ip = 151; continue _fun00003 }
 148:
                michal = tangon;
 151:
                zuuluu['tokenizedQueryContent'] = michal;
                michal = argBar;
                zuuluu['lineClamp'] = michal;
                return entity;
            }
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        report = 'truncateMessage';
        entity['key'] = report;
        michal = function(argFoo) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                entity = argFoo;
                tangon = this;
                var _closure3_slot0 = tangon;
                michal = tangon.tokenizedQueryContent;
                oscard = null;
                if(!(oscard != michal)) { _fun00006_ip = 217; continue _fun00005 }
 27:
                zuuluu = tangon.tokenizedQueryContent;
                michal = '';
                if(!(michal !== zuuluu)) { _fun00006_ip = 217; continue _fun00005 }
 44:
                report = tangon.truncatedMessages;
                zuuluu = report.get;
                michal = entity.id;
                michal = zuuluu.bind(report)(michal);
                if(!(oscard == michal)) { _fun00006_ip = 215; continue _fun00005 }
 72:
                zuuluu = _closure1_slot4;
                option = zuuluu.prototype;
                option = Object.create(option, {constructor: {value: zuuluu}});
                kiloes = option;
                backup = entity;
                zuuluu = new kiloes[zuuluu](backup, foxtra);
                zuuluu = zuuluu instanceof Object ? zuuluu : option;
                yankee = _closure1_slot5;
                offset = entity.content;
                verify = tangon.tokenizedQueryContent;
                option = tangon.lineClamp;
                report = undefined;
                report = yankee.bind(report)(offset, verify, option);
                if(!(oscard == report)) { _fun00006_ip = 176; continue _fun00005 }
 136:
                offset = entity.embeds;
                verify = offset.map;
                option = function(argFoo) {
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        zuuluu = argFoo;
                        option = _closure1_slot5;
                        golfie = zuuluu.rawTitle;
                        entity = _closure3_slot0;
                        report = entity.tokenizedQueryContent;
                        entity = entity.lineClamp;
                        oscard = undefined;
                        entity = option.bind(oscard)(golfie, report, entity);
                        report = null;
                        if(!(report == entity)) { _fun00008_ip = 83; continue _fun00007 }
 50:
                        report = _closure1_slot5;
                        tangon = zuuluu.rawDescription;
                        michal = _closure3_slot0;
                        zuuluu = michal.tokenizedQueryContent;
                        michal = michal.lineClamp;
                        entity = report.bind(oscard)(tangon, zuuluu, michal);
 83:
                        return entity;
                    }
                };
                verify = verify.bind(offset)(option);
                option = verify.find;
                golfie = function(argFoo) {
                    michal = null;
                    entity = argFoo;
                    entity = michal != entity;
                    return entity;
                };
                report = option.bind(verify)(golfie);
 176:
                if(!(oscard == report)) { _fun00006_ip = 185; continue _fun00005 }
 180:
                report = zuuluu.content;
 185:
                zuuluu['content'] = report;
                oscard = tangon.truncatedMessages;
                report = oscard.set;
                tangon = zuuluu.id;
                tangon = report.bind(oscard)(tangon, zuuluu);
                return zuuluu;
 215:
                return michal;
 217:
                return entity;
            }
        };
        entity['value'] = michal;
        michal = new Array(1);
        michal[0] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/search_v2/native/SearchTruncatedMessageManager.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();