// app/modules/search_v2/native/message_parsers/MessageSearchResultParser.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
 2: // try_start_0
            michal = global;
            zuuluu = michal.Boolean;
            zuuluu = zuuluu.prototype;
            tangon = zuuluu.valueOf;
            zuuluu = tangon.call;
            option = michal.Reflect;
            golfie = option.construct;
            oscard = michal.Boolean;
            report = new Array(0);
            michal = function() {
                entity = undefined;
                return entity;
            };
            michal = golfie.bind(option)(oscard, report, michal);
            michal = zuuluu.bind(tangon)(michal);
            michal = !michal;
            var _closure2_slot0 = michal;
 72: // try_end0
            _fun00002_ip = 76; continue _fun00001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot8 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot8 = entity;
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
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.CachedSearchResultParser;
    michal = function(argFoo) {
        zuuluu = function(argFoo, argBar) { // Original name: SearchResultMessageParser
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                oscard = this;
                entity = _closure1_slot3;
                report = _closure2_slot0;
                zuuluu = undefined;
                entity = entity.bind(zuuluu)(oscard, report);
                entity = _closure1_slot5;
                yankee = entity.bind(zuuluu)(report);
                report = _closure1_slot4;
                entity = _closure1_slot8;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00004_ip = 64; continue _fun00003 }
 51:
                entity = yankee.apply;
                entity = entity.bind(yankee)(oscard, zuuluu);
                _fun00004_ip = 102; continue _fun00003;
 64:
                golfie = global;
                offset = golfie.Reflect;
                verify = offset.construct;
                golfie = _closure1_slot5;
                golfie = golfie.bind(zuuluu)(oscard);
                option = golfie.constructor;
                golfie = new Array(0);
                entity = verify.bind(offset)(yankee, golfie, option);
 102:
                entity = report.bind(zuuluu)(oscard, entity);
                var _closure3_slot0 = entity;
                report = function(argFoo, argBar) {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        oscard = argFoo;
                        verify = arguments[2];
                        option = undefined;
                        if(!(verify === option)) { _fun00006_ip = 17; continue _fun00005 }
 14:
                        verify = 1;
 17:
                        var _closure4_slot0 = option;
                        entity = null;
                        if(!(entity != oscard)) { _fun00006_ip = 331; continue _fun00005 }
 30:
                        report = oscard.replace;
                        tangon = /(\r\n|\n|\r)/gm;
                        michal = ' ';
                        golfie = report.bind(oscard)(tangon, michal);
                        michal = global;
                        oscard = michal.Set;
                        report = _closure1_slot0;
                        offset = _closure1_slot1;
                        tangon = 6;
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
                        _closure4_slot0 = tangon;
                        report = golfie.split;
                        tangon = /(\W+)/g;
                        report = report.bind(golfie)(tangon);
                        tangon = report.find;
                        zuuluu = function(argFoo) {
                            zuuluu = _closure1_slot0;
                            michal = _closure1_slot1;
                            entity = 6;
                            michal = michal[entity];
                            entity = undefined;
                            tangon = zuuluu.bind(entity)(michal);
                            zuuluu = tangon.shouldHighlight;
                            michal = _closure4_slot0;
                            entity = argFoo;
                            entity = zuuluu.bind(tangon)(entity, michal);
                            return entity;
                        };
                        zuuluu = tangon.bind(report)(zuuluu);
                        if(!(entity != zuuluu)) { _fun00006_ip = 329; continue _fun00005 }
 177:
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
                        if(!(report !== tangon)) { _fun00006_ip = 327; continue _fun00005 }
 238:
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
                        if(!zuuluu) { _fun00006_ip = 297; continue _fun00005 }
 291:
                        tangon = '...';
 297:
                        zuuluu = golfie.substring;
                        zuuluu = zuuluu.bind(golfie)(oscard);
                        michal = michal.HermesInternal;
                        michal = michal.concat;
                        michal = michal.bind(report)(tangon, zuuluu);
                        return michal;
 327:
                        return entity;
 329:
                        return entity;
 331:
                        return entity;
                    }
                };
                entity['truncateMessage'] = report;
                tangon = function(argFoo) {
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        entity = argFoo;
                        zuuluu = _closure3_slot0;
                        zuuluu = zuuluu.tokenizedQueryContent;
                        report = null;
                        if(!(report != zuuluu)) { _fun00008_ip = 254; continue _fun00007 }
 27:
                        zuuluu = _closure3_slot0;
                        oscard = zuuluu.tokenizedQueryContent;
                        zuuluu = '';
                        if(!(zuuluu !== oscard)) { _fun00008_ip = 254; continue _fun00007 }
 48:
                        option = _closure3_slot0;
                        golfie = option.truncateMessage;
                        oscard = entity.content;
                        zuuluu = option.tokenizedQueryContent;
                        michal = option.lineClamp;
                        zuuluu = golfie.bind(option)(oscard, zuuluu, michal);
                        if(!(report == zuuluu)) { _fun00008_ip = 216; continue _fun00007 }
 89:
                        option = _closure1_slot0;
                        golfie = _closure1_slot1;
                        oscard = 7;
                        golfie = golfie[oscard];
                        oscard = undefined;
                        option = option.bind(oscard)(golfie);
                        golfie = option.chain;
                        oscard = entity.embeds;
                        option = golfie.bind(option)(oscard);
                        golfie = option.map;
                        oscard = function(argFoo) {
                            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                                michal = argFoo;
                                golfie = _closure3_slot0;
                                oscard = golfie.truncateMessage;
                                report = michal.rawTitle;
                                tangon = golfie.tokenizedQueryContent;
                                entity = golfie.lineClamp;
                                entity = oscard.bind(golfie)(report, tangon, entity);
                                tangon = null;
                                if(!(tangon == entity)) { _fun00010_ip = 82; continue _fun00009 }
 47:
                                oscard = _closure3_slot0;
                                report = oscard.truncateMessage;
                                tangon = michal.rawDescription;
                                zuuluu = oscard.tokenizedQueryContent;
                                michal = oscard.lineClamp;
                                entity = report.bind(oscard)(tangon, zuuluu, michal);
 82:
                                return entity;
                            }
                        };
                        golfie = golfie.bind(option)(oscard);
                        oscard = golfie.find;
                        tangon = function(argFoo) {
                            michal = null;
                            entity = argFoo;
                            entity = michal != entity;
                            return entity;
                        };
                        oscard = oscard.bind(golfie)(tangon);
                        tangon = oscard.value;
                        tangon = tangon.bind(oscard)();
                        if(!(report == tangon)) { _fun00008_ip = 181; continue _fun00007 }
 179:
                        return entity;
 181:
                        michal = _closure1_slot7;
                        report = michal.prototype;
                        report = Object.create(report, {constructor: {value: michal}});
                        romeon = report;
                        yankee = entity;
                        michal = new romeon[michal](yankee, offset);
                        michal = michal instanceof Object ? michal : report;
                        michal['content'] = tangon;
                        return michal;
 216:
                        michal = _closure1_slot7;
                        tangon = michal.prototype;
                        tangon = Object.create(tangon, {constructor: {value: michal}});
                        romeon = tangon;
                        yankee = entity;
                        michal = new romeon[michal](yankee, offset);
                        michal = michal instanceof Object ? michal : tangon;
                        michal['content'] = zuuluu;
                        return michal;
 254:
                        return entity;
                    }
                };
                entity['getSearchResults'] = tangon;
                tangon = _closure1_slot0;
                oscard = _closure1_slot1;
                michal = 8;
                report = oscard[michal];
                option = tangon.bind(zuuluu)(report);
                golfie = option.tokenizeQuery;
                report = argFoo;
                report = golfie.bind(option)(report);
                michal = oscard[michal];
                tangon = tangon.bind(zuuluu)(michal);
                michal = tangon.getSearchQueryFromTokens;
                michal = michal.bind(tangon)(report);
                report = michal.content;
                michal = null;
                tangon = michal == report;
                zuuluu = undefined;
                if(tangon) { _fun00004_ip = 218; continue _fun00003 }
 208:
                tangon = report.trim;
                zuuluu = tangon.bind(report)();
 218:
                tangon = michal != zuuluu;
                michal = null;
                if(!tangon) { _fun00004_ip = 230; continue _fun00003 }
 227:
                michal = zuuluu;
 230:
                entity['tokenizedQueryContent'] = michal;
                michal = argBar;
                entity['lineClamp'] = michal;
                return entity;
            }
        };
        var _closure2_slot0 = zuuluu;
        report = _closure1_slot6;
        michal = undefined;
        tangon = argFoo;
        tangon = report.bind(michal)(zuuluu, tangon);
        entity = _closure1_slot2;
        entity = entity.bind(michal)(zuuluu);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = 10;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/search_v2/native/message_parsers/MessageSearchResultParser.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();